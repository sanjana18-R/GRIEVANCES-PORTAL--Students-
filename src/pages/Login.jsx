function Login() {
  return (
    <div className="login-page">

      <div className="login-container">

        {/* Branding */}
        <div className="login-brand">

          <div className="login-logo">
            PSG
          </div>

          <div className="login-institution">
            <strong>PSG INSTITUTIONS</strong>
            <span>PSG College of Technology</span>
          </div>

        </div>


        {/* Login Card */}
        <div className="login-card">

          <div className="login-heading">
            <p>STUDENT PORTAL</p>

            <h1>Student Login</h1>

            <span>
              Sign in to access your grievance portal.
            </span>
          </div>


          {/* Roll Number */}
          <div className="login-form-group">

            <label>Roll Number</label>

            <input
              type="text"
              placeholder="Enter your roll number"
            />

          </div>


          {/* Password */}
          <div className="login-form-group">

            <div className="password-label">
              <label>Password</label>

              <button type="button">
                Forgot Password?
              </button>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
            />

          </div>


          {/* Remember Me */}
          <label className="remember-me">

            <input type="checkbox" />

            <span>Remember me</span>

          </label>


          {/* Login */}
          <button className="login-button">
            Login
            <span>→</span>
          </button>


          <div className="login-note">
            For PSG College of Technology students only
          </div>

        </div>


        {/* Footer */}
        <div className="login-footer">
          © 2026 PSG College of Technology
        </div>

      </div>

    </div>
  );
}

export default Login;