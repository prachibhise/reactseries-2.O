function Users() {
  return (
    <div>

      <h2>Users</h2>

      <table>

        <thead>

          <tr>

            <th>Name</th>

            <th>Role</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>Rahul</td>

            <td>Admin</td>

            <td>🟢 Active</td>

          </tr>

          <tr>

            <td>Priya</td>

            <td>Editor</td>

            <td>🟢 Active</td>

          </tr>

          <tr>

            <td>Aman</td>

            <td>User</td>

            <td>🔴 Offline</td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default Users;