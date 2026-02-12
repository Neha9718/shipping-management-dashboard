const OrderDrawer = ({ order, onClose }) => {
  // if (!order) return null;

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-30 flex justify-end z-50 transition-opacity ${order ? "bg-black/40 opacity-100" : " opacity-0 pointer-events-none"}`}>
      <div className={`w-96 bg-white h-full shadow-lg p-6 transform transition-transform duration-300 translate-x-0 ease-in-out ${order ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Order Details</h2>
          <button onClick={onClose} >✕</button>
        </div>

        {order && (
          <div className="p-4 h-full overflow-y-auto pb-20">
            <p className="py-2"><strong className="font-normal text-lg ">ID:</strong> <small className="text-gray-500 text-lg px-2">{order.id}</small> </p>
            <p className="py-2"><strong className="font-normal text-lg">Customer:</strong> <small className="text-gray-500 text-lg px-2">{order.customerName}</small></p>
            <p className="py-2"><strong className="font-normal text-lg">Mobile:</strong><small className="text-gray-500 text-lg px-2">{order.mobileNumber}</small></p>
            <p className="py-2"><strong className="font-normal text-lg">Courier:</strong> <small className="text-gray-500 text-lg px-2">{order.courierName}</small></p>
            <p className="py-2"><strong className="font-normal text-lg">Payment:</strong> <small className="text-gray-500 text-lg px-2">{order.paymentMode}</small></p>
            <p className="py-2"><strong className="font-normal text-lg">Amount:</strong> <small className="text-gray-500 text-lg px-2">₹{order.amount}</small></p>
            <p className="py-2"><strong className="font-normal text-lg">Status:</strong> <small className="text-gray-500 text-lg px-2">{order.status}</small></p>
            <p className="py-2"><strong className="font-normal text-lg">Date:</strong>  <small className="text-gray-500 text-lg px-2">{order.createdDate}</small></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDrawer;

