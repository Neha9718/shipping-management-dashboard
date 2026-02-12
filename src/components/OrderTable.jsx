import React, { useMemo } from 'react'
import { useState } from 'react'
import OrderFilter from './OrderFilter';
import TableSkeleton from './TableSkeleton';
import OrderDrawer from './OrderDrawer';
import useOrder from '../hooks/useOrder';


const OrderTable = () => {
  const [search, setSearch] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [page, setPage] = useState(1);
  const limit = 10;
  const { orders, loading, error, total } = useOrder(page, limit);

  const totalPages = Math.ceil((total || 0) / limit);


  const STATUS_STYLES = {
    Delivered: "bg-green-100 text-green-700",
    "In Transit": "bg-blue-100 text-blue-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Cancelled: "bg-red-100 text-red-700",
  }
  const filteredOrders = useMemo(() => {
    return orders.filter((item) => item.customerName.toLowerCase().includes(search.toLowerCase())
      || item.id.toLowerCase().includes(search.toLowerCase()))
  }, [orders, search]);


  return (
    <>
      <div className='bg-white rounded-lg shadow-sm border p-6 border-gray-200 w-full max-w-full'>
        <h3 className='text-lg font-semibold mb-4'>Recent Orders</h3>
        <OrderFilter search={search} setSearch={setSearch} />
        <div className='mt-4 w-full overflow-x-auto'>
          <table className='min-w-[1000px] text-sm text-left'>
            <thead className='bg-gray-50 text-gray-600 uppercase text-sm'>
              <tr>
                <th className="px-4 py-3 whitespace-nowrap">Order ID</th>
                <th className="px-4 py-3 whitespace-nowrap">Customer Name</th>
                <th className="px-4 py-3 whitespace-nowrap">Mobile Number</th>
                <th className="px-4 py-3 whitespace-nowrap">Courier Name</th>
                <th className="px-4 py-3 whitespace-nowrap">Payment Mode (COD / Prepaid)</th>
                <th className="px-4 py-3 whitespace-nowrap">Amount</th>
                <th className="px-4 py-3 whitespace-nowrap">Status</th>
                <th className="px-4 py-3 whitespace-nowrap">Created Date</th>
                <th className="px-4 py-3 whitespace-nowrap">View Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <TableSkeleton rows={10} />
              ) : (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 font-medium">{order.id}</td>
                    <td className="px-4 py-3">{order.customerName}</td>
                    <td className="px-4 py-3">{order.mobileNumber}</td>
                    <td className="px-4 py-3">{order.courierName}</td>
                    <td className="px-4 py-3">{order.paymentMode}</td>
                    <td className="px-4 py-3 font-medium">₹{order.amount}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[order.status]
                          }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">{order.createdDate}</td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="text-white bg-blue-600 rounded-lg text-base border-none px-5 py-2"
                      >
                        view
                      </button>
                    </td>
                  </tr>
                ))
              )}

            </tbody>

          </table>
          <div className="flex justify-end items-center gap-2 mt-4">
            <button disabled={page === 1} onClick={() => setPage(prev => prev - 1)} className="px-3 py-1 border rounded disabled:opacity-50">
              Prev
            </button>
            <span className="text-sm">Page {page} of {totalPages}</span>
            <button disabled={page === totalPages} onClick={() => setPage(prev => prev + 1)} className="px-3 py-1 border rounded disabled:opacity-50">
              Next
            </button>
          </div>
        </div>
      </div>
      <OrderDrawer order={selectedOrder} onClose={() => setSelectedOrder(null)} />
    </>
  )
}
export default OrderTable

