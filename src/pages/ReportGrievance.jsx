import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ReportGrievance() {
  return (
    <>
    <Navbar/>

    <div className="report-page">

      <div className="page-heading">
        <p>STUDENT PORTAL</p>
        <h1>Report a Grievance</h1>
        <span>
          Share your concern with us. Please provide the details below.
        </span>
      </div>

      <div className="grievance-form-card">

        <div className="form-section">
          <h2>Grievance Details</h2>
          <p>Tell us about the issue you would like to report.</p>
        </div>

        <div className="form-row">

          <div className="form-group">
            <label>Grievance Type</label>

            <select>
              <option value="">Select grievance type</option>
              <option>Against an Individual</option>
              <option>General Issue</option>
            </select>
          </div>

          <div className="form-group">
            <label>Category</label>

            <select>
              <option value="">Select category</option>
              <option>Academic</option>
              <option>Infrastructure</option>
              <option>Hostel</option>
              <option>Transport</option>
              <option>Clubs & Activities</option>
              <option>Administration</option>
              <option>Other</option>
            </select>
          </div>

        </div>

        <div className="form-group">
          <label>Title</label>

          <input
            type="text"
            placeholder="Briefly describe your grievance"
          />
        </div>

        <div className="form-group">
          <label>Description</label>

          <textarea
            rows="6"
            placeholder="Provide complete details about your grievance..."
          />
        </div>

        <div className="form-group">
          <label>Supporting Evidence <span>(Optional)</span></label>

          <div className="file-upload">
            <span>📎</span>
            <div>
              <strong>Attach a file</strong>
              <small>Upload supporting documents or images</small>
            </div>

            <button type="button">
              Browse
            </button>
          </div>
        </div>

        <div className="form-actions">
          <button className="secondary-button">
            Cancel
          </button>

          <button className="primary-button">
            Submit Grievance →
          </button>
        </div>

      </div>

    </div>
    <Footer />
    </>
  );
}

export default ReportGrievance;