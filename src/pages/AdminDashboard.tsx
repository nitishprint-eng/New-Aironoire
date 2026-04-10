import { useEffect, useState } from 'react';
import { Package, Users, FileText, Settings, Search, Bell, Menu, LayoutDashboard, FileDown, MapPin, Image as ImageIcon } from 'lucide-react';
import { collection, query, orderBy, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { db } from '@/firebase';
import { format } from 'date-fns';

interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    deliveryType?: string;
    distance?: string;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    pincode?: string;
  };
  files: { name: string; url: string }[];
  printOptions: {
    colorMode: string;
    paperSize: string;
    copies: number;
  };
  price: number;
  deliveryCharge?: number | string;
  paymentId: string;
  orderId: string;
  status: string;
  createdAt: any;
}

interface PhotoOrder {
  id: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  photos: {
    name: string;
    url: string;
    size: string;
    paperType: string;
    quantity: number;
    fitOption: string;
    price: number;
  }[];
  totalPrice: number;
  paymentId: string;
  orderId: string;
  status: string;
  createdAt: any;
}

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState<Order[]>([]);
  const [photoOrders, setPhotoOrders] = useState<PhotoOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const q1 = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
    const unsubscribe1 = onSnapshot(q1, (snapshot) => {
      const ordersData: Order[] = [];
      snapshot.forEach((doc) => {
        ordersData.push({ id: doc.id, ...doc.data() } as Order);
      });
      setOrders(ordersData);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching orders:", error);
      setLoading(false);
    });

    const q2 = query(collection(db, 'photo_orders'), orderBy('createdAt', 'desc'));
    const unsubscribe2 = onSnapshot(q2, (snapshot) => {
      const photoOrdersData: PhotoOrder[] = [];
      snapshot.forEach((doc) => {
        photoOrdersData.push({ id: doc.id, ...doc.data() } as PhotoOrder);
      });
      setPhotoOrders(photoOrdersData);
    }, (error) => {
      console.error("Error fetching photo orders:", error);
    });

    return () => {
      unsubscribe1();
      unsubscribe2();
    };
  }, []);

  const updateOrderStatus = async (collectionName: string, orderId: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, collectionName, orderId), {
        status: newStatus
      });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const filteredOrders = orders.filter(order => 
    order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.orderId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPhotoOrders = photoOrders.filter(order => 
    order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.orderId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-zinc-950 text-zinc-400 flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-zinc-800">
          <span className="font-heading text-xl font-bold text-white">Admin Panel</span>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'dashboard' ? 'bg-zinc-800 text-white' : 'hover:bg-zinc-900 hover:text-zinc-200'}`}
          >
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'orders' ? 'bg-zinc-800 text-white' : 'hover:bg-zinc-900 hover:text-zinc-200'}`}
          >
            <Package className="w-5 h-5" /> Document Orders
          </button>
          <button 
            onClick={() => setActiveTab('photo_orders')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'photo_orders' ? 'bg-zinc-800 text-white' : 'hover:bg-zinc-900 hover:text-zinc-200'}`}
          >
            <ImageIcon className="w-5 h-5" /> Photo Orders
          </button>
          <button 
            onClick={() => setActiveTab('customers')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'customers' ? 'bg-zinc-800 text-white' : 'hover:bg-zinc-900 hover:text-zinc-200'}`}
          >
            <Users className="w-5 h-5" /> Customers
          </button>
          <button 
            onClick={() => setActiveTab('files')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'files' ? 'bg-zinc-800 text-white' : 'hover:bg-zinc-900 hover:text-zinc-200'}`}
          >
            <FileText className="w-5 h-5" /> Uploaded Files
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'settings' ? 'bg-zinc-800 text-white' : 'hover:bg-zinc-900 hover:text-zinc-200'}`}
          >
            <Settings className="w-5 h-5" /> Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-20 bg-white border-b border-zinc-200 flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-zinc-500">
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative hidden md:block">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input 
                type="text" 
                placeholder="Search orders..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-zinc-100 border-transparent rounded-lg focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500 outline-none transition-all w-64"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-zinc-500 hover:text-zinc-900">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8 flex-1 overflow-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-zinc-900 capitalize">
              {activeTab === 'orders' ? 'Document Orders' : activeTab === 'photo_orders' ? 'Photo Orders' : activeTab}
            </h1>
          </div>

          {activeTab === 'orders' && (
            <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
                </div>
              ) : filteredOrders.length === 0 ? (
                <div className="p-12 text-center text-zinc-500">No document orders found.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-zinc-50 border-b border-zinc-200 text-sm text-zinc-500">
                        <th className="p-4 font-medium">Order ID & Date</th>
                        <th className="p-4 font-medium">Customer & Delivery</th>
                        <th className="p-4 font-medium">Print Details</th>
                        <th className="p-4 font-medium">Files</th>
                        <th className="p-4 font-medium">Amount</th>
                        <th className="p-4 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200">
                      {filteredOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-zinc-50/50 transition-colors">
                          <td className="p-4 align-top">
                            <div className="font-mono text-xs text-zinc-500 mb-1">{order.orderId}</div>
                            <div className="text-sm text-zinc-900">
                              {order.createdAt?.toDate ? format(order.createdAt.toDate(), 'MMM d, yyyy h:mm a') : 'Just now'}
                            </div>
                          </td>
                          <td className="p-4 align-top">
                            <div className="font-medium text-zinc-900">{order.customer.name}</div>
                            <div className="text-sm text-zinc-500">{order.customer.email}</div>
                            <div className="text-sm text-zinc-500 mb-2">{order.customer.phone}</div>
                            
                            <div className="mt-2 pt-2 border-t border-zinc-100">
                              <div className="flex items-center text-xs font-medium text-zinc-700 mb-1">
                                <MapPin className="w-3 h-3 mr-1" />
                                {order.customer.deliveryType === 'delivery' ? 'Home Delivery' : 'Store Pickup'}
                              </div>
                              {order.customer.deliveryType === 'delivery' && (
                                <div className="text-xs text-zinc-500">
                                  {order.customer.address1}
                                  {order.customer.address2 && <>, {order.customer.address2}</>}
                                  <br />
                                  {order.customer.city}, {order.customer.state} {order.customer.pincode}
                                  <div className="mt-1 font-medium text-orange-600">
                                    Distance: {order.customer.distance === 'within_5km' ? 'Within 5 km' : 'Beyond 5 km'}
                                  </div>
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="p-4 align-top">
                            <div className="text-sm text-zinc-900">
                              <span className="font-medium">Mode:</span> {order.printOptions.colorMode}
                            </div>
                            <div className="text-sm text-zinc-900">
                              <span className="font-medium">Size:</span> {order.printOptions.paperSize}
                            </div>
                            <div className="text-sm text-zinc-900">
                              <span className="font-medium">Copies:</span> {order.printOptions.copies}
                            </div>
                          </td>
                          <td className="p-4 align-top">
                            <div className="space-y-2">
                              {order.files.map((file, idx) => (
                                <a 
                                  key={idx} 
                                  href={file.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex items-center text-sm text-orange-600 hover:text-orange-700 hover:underline"
                                >
                                  <FileDown className="w-4 h-4 mr-1" />
                                  <span className="truncate max-w-[150px]">{file.name}</span>
                                </a>
                              ))}
                            </div>
                          </td>
                          <td className="p-4 align-top">
                            <div className="font-medium text-zinc-900">
                              ₹{order.price}
                            </div>
                            {order.customer.deliveryType === 'delivery' && (
                              <div className="text-xs text-zinc-500 mt-1">
                                (Inc. Delivery: {order.deliveryCharge === 'TBC' ? 'TBC' : `₹${order.deliveryCharge}`})
                              </div>
                            )}
                          </td>
                          <td className="p-4 align-top">
                            <select
                              value={order.status}
                              onChange={(e) => updateOrderStatus('orders', order.id, e.target.value)}
                              className={`text-sm rounded-full px-3 py-1 font-medium outline-none border cursor-pointer ${
                                order.status === 'Completed' 
                                  ? 'bg-green-50 text-green-700 border-green-200' 
                                  : 'bg-orange-50 text-orange-700 border-orange-200'
                              }`}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Processing">Processing</option>
                              <option value="Completed">Completed</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === 'photo_orders' && (
            <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
                </div>
              ) : filteredPhotoOrders.length === 0 ? (
                <div className="p-12 text-center text-zinc-500">No photo orders found.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-zinc-50 border-b border-zinc-200 text-sm text-zinc-500">
                        <th className="p-4 font-medium">Order ID & Date</th>
                        <th className="p-4 font-medium">Customer</th>
                        <th className="p-4 font-medium">Photos & Details</th>
                        <th className="p-4 font-medium">Amount</th>
                        <th className="p-4 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200">
                      {filteredPhotoOrders.map((order) => (
                        <tr key={order.id} className="hover:bg-zinc-50/50 transition-colors">
                          <td className="p-4 align-top">
                            <div className="font-mono text-xs text-zinc-500 mb-1">{order.orderId}</div>
                            <div className="text-sm text-zinc-900">
                              {order.createdAt?.toDate ? format(order.createdAt.toDate(), 'MMM d, yyyy h:mm a') : 'Just now'}
                            </div>
                          </td>
                          <td className="p-4 align-top">
                            <div className="font-medium text-zinc-900">{order.customer.name}</div>
                            <div className="text-sm text-zinc-500">{order.customer.email}</div>
                            <div className="text-sm text-zinc-500 mb-2">{order.customer.phone}</div>
                          </td>
                          <td className="p-4 align-top">
                            <div className="space-y-4">
                              {order.photos.map((photo, idx) => (
                                <div key={idx} className="flex gap-3 items-start">
                                  <a href={photo.url} target="_blank" rel="noopener noreferrer" className="block w-16 h-16 bg-[#f5f5f5] p-1 rounded-md overflow-hidden border border-zinc-200 flex-shrink-0 hover:opacity-80 transition-opacity">
                                    <img src={photo.url} alt={photo.name} className="w-full h-full object-contain" />
                                  </a>
                                  <div className="text-xs text-zinc-600">
                                    <div className="font-medium text-zinc-900 truncate max-w-[150px]" title={photo.name}>{photo.name}</div>
                                    <div>Size: {photo.size}</div>
                                    <div>Paper: {photo.paperType}</div>
                                    <div>Fit: {photo.fitOption === 'fit' ? 'Fit to Page' : 'Crop to Fill'}</div>
                                    <div>Qty: {photo.quantity}</div>
                                    <a href={photo.url} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline mt-1 inline-flex items-center gap-1">
                                      <FileDown className="w-3 h-3" /> Download
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </td>
                          <td className="p-4 align-top">
                            <div className="font-medium text-zinc-900">
                              ₹{order.totalPrice}
                            </div>
                          </td>
                          <td className="p-4 align-top">
                            <select
                              value={order.status}
                              onChange={(e) => updateOrderStatus('photo_orders', order.id, e.target.value)}
                              className={`text-sm rounded-full px-3 py-1 font-medium outline-none border cursor-pointer ${
                                order.status === 'Completed' 
                                  ? 'bg-green-50 text-green-700 border-green-200' 
                                  : 'bg-orange-50 text-orange-700 border-orange-200'
                              }`}
                            >
                              <option value="Pending">Pending</option>
                              <option value="Processing">Processing</option>
                              <option value="Completed">Completed</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab !== 'orders' && activeTab !== 'photo_orders' && (
            <div className="bg-white rounded-xl border border-zinc-200 p-8 text-center text-zinc-500">
              {activeTab} content goes here.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
