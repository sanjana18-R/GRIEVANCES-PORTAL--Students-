import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-page">

      <Navbar />

      {/* Main Content */}
      <main className="home-content">

        {/* Welcome Section */}
        <section className="welcome-section">
          <div>
            <p className="eyebrow">STUDENT PORTAL</p>
            <h1>Welcome back! 👋</h1>
            <p className="welcome-text">
              Have a concern? We're here to help you raise and track
              your grievances easily.
            </p>
          </div>

          <button className="primary-button">
            Report a Grievance
            <span>→</span>
          </button>
        </section>


        {/* Statistics */}
        <section className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon blue-icon">📋</div>
            <div>
              <span>Total Grievances</span>
              <h2>3</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange-icon">◷</div>
            <div>
              <span>Under Review</span>
              <h2>1</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green-icon">✓</div>
            <div>
              <span>Resolved</span>
              <h2>2</h2>
            </div>
          </div>

        </section>


        {/* Main Grid */}
        <section className="dashboard-grid">

          {/* Quick Actions */}
          <div className="dashboard-card quick-actions">
            <div className="card-header">
              <div>
                <h3>Quick Actions</h3>
                <p>Access your grievance services</p>
              </div>
            </div>

            <div className="action-list">

              <button className="action-item">
                <div className="action-icon">+</div>
                <div>
                  <strong>Report a Grievance</strong>
                  <span>Submit a new grievance</span>
                </div>
                <span className="arrow">→</span>
              </button>

              <button className="action-item">
                <div className="action-icon">≡</div>
                <div>
                  <strong>My Grievances</strong>
                  <span>View and track your submissions</span>
                </div>
                <span className="arrow">→</span>
              </button>

            </div>
          </div>


          {/* Recent Grievances */}
          <div className="dashboard-card">
            <div className="card-header">
              <div>
                <h3>Recent Grievances</h3>
                <p>Your latest submissions</p>
              </div>

              <button className="view-all">
                View All
              </button>
            </div>

            <div className="grievance-list">

              <div className="grievance-item">
                <div className="grievance-info">
                  <strong>GRV-2026-003</strong>
                  <span>Infrastructure</span>
                </div>

                <span className="status status-review">
                  Under Review
                </span>
              </div>

              <div className="grievance-item">
                <div className="grievance-info">
                  <strong>GRV-2026-002</strong>
                  <span>Academic</span>
                </div>

                <span className="status status-resolved">
                  Resolved
                </span>
              </div>

              <div className="grievance-item">
                <div className="grievance-info">
                  <strong>GRV-2026-001</strong>
                  <span>Transport</span>
                </div>

                <span className="status status-resolved">
                  Resolved
                </span>
              </div>

            </div>
          </div>

        </section>


        {/* Information Banner */}
        <section className="info-banner">
          <div className="info-icon">i</div>

          <div>
            <strong>Your concerns matter.</strong>
            <p>
              Submit your grievance with the necessary details and
              track its progress from submission to resolution.
            </p>
          </div>
        </section>

      </main>


    <Footer />
    
    </div>
  );
}

export default Home;