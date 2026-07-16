function Report() {
  return (
    <div>

      <h2>Reports</h2>

      <div className="report-grid">

        <div className="report-card">
          <h3>Sales Report</h3>
          <p>Monthly sales increased by 20%.</p>
          <button>View</button>
        </div>

        <div className="report-card">
          <h3>Revenue Report</h3>
          <p>Total revenue this month.</p>
          <button>View</button>
        </div>

        <div className="report-card">
          <h3>User Report</h3>
          <p>New registered users.</p>
          <button>View</button>
        </div>

      </div>

    </div>
  );
}

export default Report;