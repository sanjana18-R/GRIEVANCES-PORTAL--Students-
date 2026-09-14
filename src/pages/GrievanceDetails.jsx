import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function GrievanceDetails() {
  return (
    <>
    <Navbar />
    
    <div className="details-page">

      {/* Page Heading */}
      <div className="details-heading">

        <button className="back-button">
          ← Back to My Grievances
        </button>

        <div className="details-title-row">
          <div>
            <p>GRIEVANCE DETAILS</p>
            <h1>GRV-2026-003</h1>
          </div>

          <span className="status status-review">
            Under Review
          </span>
        </div>

      </div>


      {/* Main Content */}
      <div className="details-grid">

        {/* Grievance Information */}
        <div className="details-card">

          <div className="card-heading">
            <div>
              <h2>Grievance Information</h2>
              <p>Details of your submitted grievance</p>
            </div>
          </div>


          <div className="detail-meta">

            <div>
              <span>Grievance Type</span>
              <strong>General Issue</strong>
            </div>

            <div>
              <span>Category</span>
              <strong>Infrastructure</strong>
            </div>

            <div>
              <span>Submitted On</span>
              <strong>10 September 2026</strong>
            </div>

          </div>


          <div className="detail-content">

            <span>Title</span>
            <h3>Classroom projector not functioning</h3>

          </div>


          <div className="detail-content">

            <span>Description</span>

            <p>
              The projector in our classroom has not been functioning
              properly for the past few days. This is affecting our
              ability to follow presentations and attend classes
              effectively.
            </p>

          </div>


          <div className="detail-content">

            <span>Supporting Evidence</span>

            <div className="attachment">
              <span>📎</span>

              <div>
                <strong>classroom_projector.jpg</strong>
                <small>Supporting attachment</small>
              </div>

              <button>View</button>
            </div>

          </div>

        </div>


        {/* Status Timeline */}
        <div className="details-card status-card">

          <div className="card-heading">
            <div>
              <h2>Grievance Status</h2>
              <p>Track the progress of your grievance</p>
            </div>
          </div>


          <div className="timeline">

            {/* Submitted */}
            <div className="timeline-item completed">

              <div className="timeline-marker">
                ✓
              </div>

              <div className="timeline-content">
                <strong>Submitted</strong>
                <span>10 September 2026</span>
              </div>

            </div>


            {/* Under Review */}
            <div className="timeline-item current">

              <div className="timeline-marker">
                •
              </div>

              <div className="timeline-content">
                <strong>Under Review</strong>
                <span>11 September 2026</span>
              </div>

            </div>


            {/* Action Taken */}
            <div className="timeline-item">

              <div className="timeline-marker">
              </div>

              <div className="timeline-content">
                <strong>Action Taken</strong>
                <span>Pending</span>
              </div>

            </div>


            {/* Resolved */}
            <div className="timeline-item">

              <div className="timeline-marker">
              </div>

              <div className="timeline-content">
                <strong>Resolved</strong>
                <span>Pending</span>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Admin Remarks */}
      <div className="remarks-card">

        <div className="remarks-icon">
          i
        </div>

        <div>
          <strong>Admin Remarks</strong>

          <p>
            Your grievance is currently being reviewed. You will be
            notified when there is an update to its status.
          </p>
        </div>

      </div>

    </div>
    <Footer />
    </>
  );
}

export default GrievanceDetails;