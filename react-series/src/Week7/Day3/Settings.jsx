function Settings() {
  return (
    <div>

      <h2>Settings</h2>

      <div className="setting-card">

        <h3>Profile Settings</h3>

        <input type="text" placeholder="Full Name" />

        <input type="email" placeholder="Email" />

        <button>Save Changes</button>

      </div>

      <div className="setting-card">

        <h3>Security</h3>

        <button>Change Password</button>

      </div>

      <div className="setting-card">

        <h3>Notifications</h3>

        <button>Enable Notifications</button>

      </div>

    </div>
  );
}

export default Settings;