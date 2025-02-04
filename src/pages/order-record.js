import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

export default function OrderRecord() {
  const [latestOrder, setLatestOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const statusColors = {
    order_placed: { bg: 'bg-blue-100', text: 'text-blue-800' },
    processing: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
    out_for_delivery: { bg: 'bg-purple-100', text: 'text-purple-800' },
    delivered: { bg: 'bg-green-100', text: 'text-green-800' },
    cancelled: { bg: 'bg-red-100', text: 'text-red-800' }
  };

  const statusDisplay = {
    order_placed: 'Order Placed',
    processing: 'Processing',
    out_for_delivery: 'Out for Delivery',
    delivered: 'Delivered',
    cancelled: 'Cancelled'
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/api/check-auth');
        if (!response.data.isAuthenticated) {
          router.push('/login?redirect=/order-record');
        } else {
          fetchLatestOrder();
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        router.push('/login?redirect=/order-record');
      }
    };

    checkAuth();
  }, [router]);

  const fetchLatestOrder = async () => {
    try {
      const response = await axios.get('/api/orders');
      if (response.data.length > 0) {
        // Get the most recent order
        const mostRecent = response.data[0];
        setLatestOrder({
          ...mostRecent,
          total_amount: parseFloat(mostRecent.total_amount) || 0
        });
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching latest order:', error);
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatCurrency = (amount) => {
    const num = parseFloat(amount);
    return isNaN(num) ? '0.00' : num.toFixed(2);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8C794]">
        <p className="text-xl">Loading your order...</p>
      </div>
    );
  }

  if (!latestOrder) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8C794] px-6 py-10">
        <h1 className="text-4xl font-bold mb-6">No Orders Yet</h1>
        <Link href="/letchon">
          <button className="bg-black text-white py-3 px-8 rounded-full shadow-md hover:bg-gray-800 transition duration-200">
            Start Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8C794] px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Order Confirmation</h1>
        
        {/* Order Details Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Order Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold">Order #{latestOrder.orderid}</h2>
              <span className={`px-4 py-1 rounded-full text-sm ${
                statusColors[latestOrder.status]?.bg || 'bg-gray-100'} ${
                statusColors[latestOrder.status]?.text || 'text-gray-800'}`}>
                {statusDisplay[latestOrder.status] || 'Order Placed'}
              </span>
            </div>
            <p className="text-gray-600">Placed on {formatDate(latestOrder.date)}</p>
            <p className="text-gray-600">Tracking: {latestOrder.tracking_number}</p>
          </div>

          {/* Order Items */}
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <ul className="space-y-4">
              {latestOrder.items?.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    {item.imageUrl && (
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-md"
                      />
                    )}
                    <span>{item.name} {item.weight && `(${item.weight})`} x{item.quantity}</span>
                  </div>
                  <span>₱{formatCurrency(item.price_at_time * item.quantity)}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between text-xl font-bold">
                <span>Total Amount:</span>
                <span className="text-red-600">₱{formatCurrency(latestOrder.total_amount)}</span>
              </div>
              <p className="text-sm text-gray-600 text-right mt-1">
                (Includes ₱50 delivery fee)
              </p>
            </div>
          </div>

          {/* Customer Information */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Customer Details</h3>
                <p><strong>Name:</strong> {latestOrder.fullname}</p>
                <p><strong>Phone:</strong> {latestOrder.contactNumber}</p>
                <p><strong>Email:</strong> {latestOrder.emailaddress}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Delivery Information</h3>
                <p><strong>Address:</strong> {latestOrder.delivery_address}</p>
                <p><strong>Payment Method:</strong> {latestOrder.payment_method}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <Link href="/letchon">
            <button className="bg-black text-white py-3 px-8 rounded-full shadow-md hover:bg-gray-800 transition duration-200">
              Continue Shopping
            </button>
          </Link>
          <Link href="/my-orders">
            <button className="bg-white text-black py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition duration-200">
              View All Orders
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}