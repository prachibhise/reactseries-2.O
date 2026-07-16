function Dashboard() {
  return (
    <>
      <div className="cards">

        <div className="card">
          <h3>Total Users</h3>
          <h1>1,250</h1>
        </div>

        <div className="card">
          <h3>Revenue</h3>
          <h1>₹85,000</h1>
        </div>

        <div className="card">
          <h3>Orders</h3>
          <h1>210</h1>
        </div>

      </div>

      <div className="activity">

        <h2>Recent Activity</h2>

        <p>User Rahul registered.</p>

        <p>New order received.</p>

        <p>Monthly report generated.</p>

      </div>
    </>
  );
}

export default Dashboard;