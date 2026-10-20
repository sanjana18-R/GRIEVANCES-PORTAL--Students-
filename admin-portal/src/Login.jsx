
import { useState } from "react";
import "./Login.css";

function Login({ onLogin }) {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!adminId.trim() || !password) {
      setError("Please enter your Admin ID and password.");
      return;
    }

    setError("");
    onLogin();
  }

  return (
    <main className="admin-login-page">
      <div className="admin-login-container">
        <header className="admin-login-brand">
          <div className="admin-login-logo">PSG</div>
          <div className="admin-login-institution">
            <strong>PSG INSTITUTIONS</strong>
            <span>PSG College of Technology</span>
          </div>
        </header>

        <section className="admin-login-card">
          <div className="admin-login-emblem">
            <span>♙</span>
          </div>

          <div className="admin-login-heading">
            <p>ADMINISTRATION PORTAL</p>
            <h1>Administrator Login</h1>
            <span>
              Sign in to review and manage college grievances.
            </span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="admin-login-form-group">
              <label htmlFor="admin-id">Admin ID / Official Email</label>
              <input
                id="admin-id"
                type="text"
                placeholder="Enter your Admin ID or email"
                value={adminId}
                onChange={(event) => setAdminId(event.target.value)}
                autoComplete="username"
                required
              />
            </div>

            <div className="admin-login-form-group">
              <div className="admin-password-label">
                <label htmlFor="admin-password">Password</label>
                <span>Authorised personnel only</span>
              </div>

              <div className="admin-password-input-wrap">
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  required
                />
                <button
                  className="admin-show-password"
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <label className="admin-remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            {error && <p className="admin-login-error">{error}</p>}

            <button className="admin-login-button" type="submit">
              Sign in to Admin Portal <span>→</span>
            </button>
          </form>

          <div className="admin-login-security">
            <span>♢</span>
            <p>
              This portal is intended exclusively for authorised college
              administrators and grievance committee members.
            </p>
          </div>
        </section>

        <footer className="admin-login-footer">
          <span>© 2026 PSG College of Technology</span>
          <span>College Grievance Redressal System</span>
        </footer>
      </div>
    </main>
  );
}

export default Login;
