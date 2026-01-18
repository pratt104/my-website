export async function GET() {
  return Response.json({
    stats: {
      users: 12450,
      revenue: 234000,
      orders: 1245,
      growth: 18,
    },
    chart7: [
      { day: "Mon", revenue: 400, users: 120 },
      { day: "Tue", revenue: 300, users: 90 },
      { day: "Wed", revenue: 500, users: 150 },
      { day: "Thu", revenue: 700, users: 180 },
      { day: "Fri", revenue: 600, users: 160 },
      { day: "Sat", revenue: 800, users: 210 },
      { day: "Sun", revenue: 750, users: 190 },
    ],
    chart30: [
      { day: "W1", revenue: 2000, users: 500 },
      { day: "W2", revenue: 3200, users: 750 },
      { day: "W3", revenue: 2800, users: 680 },
      { day: "W4", revenue: 4100, users: 900 },
    ],
    orders: [
      { id: "ORD-1001", customer: "Amit Sharma", amount: 4500, status: "Paid" },
      { id: "ORD-1002", customer: "Neha Singh", amount: 2200, status: "Pending" },
      { id: "ORD-1003", customer: "Rahul Verma", amount: 7900, status: "Paid" },
      { id: "ORD-1004", customer: "Priya Gupta", amount: 1250, status: "Failed" },
    ],
  });
}
