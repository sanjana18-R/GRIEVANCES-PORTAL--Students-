import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyGrievances() {
  return (
    <>
      <Navbar />

      <main className="my-grievances-page">

        {/* Page Heading */}
        <div className="page-heading">
          <p>STUDENT PORTAL</p>

          <h1>My Grievances</h1>

          <span>
            View and track the grievances you've submitted.
          </span>
        </div>


        {/* Search & Filter */}
        <div className="grievance-controls">

          <div className="search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search grievances..."
            />
          </div>

          <select className="status-filter">
            <option>All Status</option>
            <option>Submitted</option>
            <option>Under Review</option>
            <option>Action Taken</option>
            <option>Resolved</option>
            <option>Dismissed</option>
          </select>

        </div>


        {/* Grievance List */}
        <div className="my-grievance-list">

          <div className="my-grievance-card">

            <div className="grievance-card-top">

              <div>
                <span className="grievance-id">
                  GRV-2026-003
                </span>

                <span className="grievance-category">
                  Infrastructure
                </span>
              </div>

              <span className="status status-review">
                Under Review
              </span>

            </div>

            <h3>
              Classroom projector not functioning
            </h3>

            <div className="grievance-card-bottom">
              <span>
                Submitted: 10 Sep 2026
              </span>

              <button className="view-grievance">
                View →
              </button>
            </div>

          </div>


          <div className="my-grievance-card">

            <div className="grievance-card-top">

              <div>
                <span className="grievance-id">
                  GRV-2026-002
                </span>

                <span className="grievance-category">
                  Academic
                </span>
              </div>

              <span className="status status-resolved">
                Resolved
              </span>

            </div>

            <h3>
              Issue regarding internal assessment
            </h3>

            <div className="grievance-card-bottom">
              <span>
                Submitted: 05 Sep 2026
              </span>

              <button className="view-grievance">
                View →
              </button>
            </div>

          </div>


          <div className="my-grievance-card">

            <div className="grievance-card-top">

              <div>
                <span className="grievance-id">
                  GRV-2026-001
                </span>

                <span className="grievance-category">
                  Transport
                </span>
              </div>

              <span className="status status-resolved">
                Resolved
              </span>

            </div>

            <h3>
              Bus route timing issue
            </h3>

            <div className="grievance-card-bottom">
              <span>
                Submitted: 02 Sep 2026
              </span>

              <button className="view-grievance">
                View →
              </button>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default MyGrievances;