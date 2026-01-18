type Order = {
  id: string;
  customer: string;
  amount: number;
  status: string;
};

export default function RecentOrders({ orders }: { orders: Order[] }) {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white rounded-xl shadow-sm border p-4">
      <h2 className="text-lg font-bold mb-4">Recent Orders</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b dark:border-gray-700">
              <th className="py-2">Order ID</th>
              <th className="py-2">Customer</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b last:border-0 dark:border-gray-700">
                <td className="py-2 font-medium">{order.id}</td>
                <td className="py-2">{order.customer}</td>
                <td className="py-2">₹ {order.amount.toLocaleString()}</td>
                <td className="py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      order.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <p className="text-sm text-gray-500 mt-4">Loading orders...</p>
        )}
      </div>
    </div>
  );
}
