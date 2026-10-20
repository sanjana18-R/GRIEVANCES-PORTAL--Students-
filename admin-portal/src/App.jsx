
import { useMemo, useState } from "react";
import "./App.css";

const initialGrievances = [
  {
    id: "GRV-2026-004",
    title: "Classroom projector not working",
    category: "Infrastructure",
    type: "General Issue",
    reporter: "Student 22XX014",
    department: "Computer Science",
    date: "20 Oct 2026",
    priority: "Medium",
    status: "Pending",
    description:
      "The projector in the assigned classroom has not been working properly. It is affecting presentations and regular classes.",
    remarks: "",
    concernedPerson: "",
  },
  {
    id: "GRV-2026-003",
    title: "Hostel water supply issue",
    category: "Infrastructure",
    type: "General Issue",
    reporter: "Student 22XX021",
    department: "Hostel",
    date: "19 Oct 2026",
    priority: "High",
    status: "Under Review",
    description:
      "There has been an irregular water supply in the hostel washrooms. Kindly look into the issue.",
    remarks: "Forwarded to the maintenance team.",
    concernedPerson: "",
  },
  {
    id: "GRV-2026-002",
    title: "Request regarding internal marks",
    category: "Academic",
    type: "Against an Individual",
    reporter: "Student 22XX008",
    department: "Information Technology",
    date: "18 Oct 2026",
    priority: "Medium",
    status: "Action Taken",
    description:
      "I would like clarification regarding the internal assessment marks awarded for a recent test.",
    remarks: "The concerned faculty member has been contacted.",
    concernedPerson: "Concerned faculty member",
  },
  {
    id: "GRV-2026-001",
    title: "Transport timing concern",
    category: "Transport",
    type: "General Issue",
    reporter: "Student 22XX016",
    department: "Computer Science",
    date: "16 Oct 2026",
    priority: "Low",
    status: "Resolved",
    description:
      "Requesting a review of the bus departure timing after the last scheduled class.",
    remarks: "The transport office has reviewed the timing.",
    concernedPerson: "",
  },
  {
    id: "GRV-2026-005",
    title: "Club activity scheduling concern",
    category: "Clubs & Activities",
    type: "General Issue",
    reporter: "Student 22XX031",
    department: "Electronics",
    date: "20 Oct 2026",
    priority: "Low",
    status: "Dismissed",
    description:
      "A concern was raised about a proposed club activity schedule.",
    remarks: "Reviewed by the administration. No further action was required.",
    concernedPerson: "",
  },
];

const statuses = [
  "Pending",
  "Under Review",
  "Action Taken",
  "Resolved",
  "Dismissed",
];

const categories = [
  "Academic",
  "Infrastructure",
  "Hostel",
  "Transport",
  "Clubs & Activities",
  "Administration",
  "Other",
];

function Logo() {
  return (
    <div className="psg-logo" aria-label="PSG">
      PSG
    </div>
  );
}

function StatusBadge({ status }) {
  return (
    <span
      className={`status-badge status-${status
        .toLowerCase()
        .replaceAll(" ", "-")}`}
    >
      {status}
    </span>
  );
}

function LoginPage({ onLogin }) {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!adminId.trim() || !password.trim()) {
      setError("Please enter your Admin ID and password.");
      return;
    }

    setError("");
    onLogin(adminId.trim());
  }

  return (
    <main className="login-page">
      <div className="login-brand">
        <Logo />
        <h2>PSG INSTITUTIONS</h2>
        <p>PSG College of Technology</p>
      </div>

      <section className="login-card">
        <p className="eyebrow">ADMINISTRATION PORTAL</p>
        <h1>Administrator Login</h1>
        <p className="login-subtitle">
          Sign in to manage and review student grievances.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="adminId">Admin ID / Official Email</label>
          <input
            id="adminId"
            type="text"
            placeholder="Enter your Admin ID"
            value={adminId}
            onChange={(event) => setAdminId(event.target.value)}
            autoComplete="username"
          />

          <div className="password-label">
            <label htmlFor="password">Password</label>
            <button
              type="button"
              className="text-button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
          />

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="primary-button login-button">
            Login <span aria-hidden="true">→</span>
          </button>
        </form>

        <div className="login-notice">
          <strong>Restricted access</strong>
          <p>
            For authorised Student Union office bearers, Faculty Advisors
            and Deans only.
          </p>
        </div>
      </section>

      <footer className="login-footer">
        © 2026 PSG College of Technology
      </footer>
    </main>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminName, setAdminName] = useState("Administrator");
  const [grievances, setGrievances] = useState(initialGrievances);
  const [activePage, setActivePage] = useState("Dashboard");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [selected, setSelected] = useState(null);
  const [newStatus, setNewStatus] = useState("Under Review");
  const [remarks, setRemarks] = useState("");
  const [history, setHistory] = useState([]);

  const counts = useMemo(() => {
    const result = { Total: grievances.length };

    statuses.forEach((status) => {
      result[status] = grievances.filter(
        (item) => item.status === status
      ).length;
    });

    return result;
  }, [grievances]);

  const filteredGrievances = useMemo(() => {
    return grievances.filter((item) => {
      const searchText = search.toLowerCase();

      const matchesSearch = [
        item.id,
        item.title,
        item.reporter,
        item.category,
        item.department,
      ].some((value) => value.toLowerCase().includes(searchText));

      const matchesStatus =
        statusFilter === "All Statuses" ||
        item.status === statusFilter;

      const matchesCategory =
        categoryFilter === "All Categories" ||
        item.category === categoryFilter;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [grievances, search, statusFilter, categoryFilter]);

  function openGrievance(item) {
    setSelected(item);
    setNewStatus(item.status);
    setRemarks(item.remarks || "");
  }

  function saveChanges() {
    if (!selected) return;

    const updatedAt = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const oldStatus = selected.status;

    setGrievances((current) =>
      current.map((item) =>
        item.id === selected.id
          ? { ...item, status: newStatus, remarks: remarks.trim() }
          : item
      )
    );

    setHistory((current) => [
      {
        id: `${Date.now()}-${selected.id}`,
        grievanceId: selected.id,
        title: selected.title,
        oldStatus,
        newStatus,
        remarks: remarks.trim() || "No remarks added.",
        admin: adminName,
        date: updatedAt,
      },
      ...current,
    ]);

    setSelected(null);
  }

  function navigate(page) {
    setActivePage(page);
    setSearch("");
    setStatusFilter("All Statuses");
    setCategoryFilter("All Categories");
  }

  if (!isLoggedIn) {
    return (
      <LoginPage
        onLogin={(id) => {
          setAdminName(id);
          setIsLoggedIn(true);
        }}
      />
    );
  }

  return (
    <div className="admin-app">
      <header className="topbar">
        <div className="topbar-brand">
          <Logo />
          <div>
            <div className="brand-small">PSG</div>
            <div className="brand-title">Grievance Redressal Portal</div>
          </div>
        </div>

        <nav className="topbar-nav" aria-label="Main navigation">
          {["Dashboard", "Grievances", "Action History"].map((page) => (
            <button
              key={page}
              className={`nav-link ${activePage === page ? "active" : ""}`}
              onClick={() => navigate(page)}
            >
              {page}
            </button>
          ))}
        </nav>

        <div className="topbar-user">
          <div className="user-avatar">
            {adminName.charAt(0).toUpperCase()}
          </div>
          <div className="user-info">
            <strong>{adminName}</strong>
            <span>Administrator</span>
          </div>
          <button
            className="logout-button"
            onClick={() => setIsLoggedIn(false)}
          >
            Log out
          </button>
        </div>
      </header>

      <main className="main-content">
        {activePage === "Dashboard" && (
          <>
            <section className="welcome-section">
              <div>
                <p className="eyebrow">ADMINISTRATION PORTAL</p>
                <h1>Welcome back! 👋</h1>
                <p className="section-subtitle">
                  Review concerns, manage grievances and track their
                  progress.
                </p>
              </div>
              <button
                className="primary-button"
                onClick={() => navigate("Grievances")}
              >
                Manage Grievances <span>→</span>
              </button>
            </section>

            <section className="stats-grid">
              {[
                { label: "Total Grievances", value: counts.Total, icon: "▤", tone: "blue" },
                { label: "Pending", value: counts.Pending, icon: "◷", tone: "orange" },
                { label: "Under Review", value: counts["Under Review"], icon: "◎", tone: "purple" },
                { label: "Action Taken", value: counts["Action Taken"], icon: "↗", tone: "blue" },
                { label: "Resolved", value: counts.Resolved, icon: "✓", tone: "green" },
                { label: "Dismissed", value: counts.Dismissed, icon: "×", tone: "red" },
              ].map((stat) => (
                <article className="stat-card" key={stat.label}>
                  <div className={`stat-icon ${stat.tone}`}>{stat.icon}</div>
                  <div>
                    <p>{stat.label}</p>
                    <strong>{stat.value}</strong>
                  </div>
                </article>
              ))}
            </section>

            <section className="dashboard-grid">
              <article className="panel quick-panel">
                <div className="panel-heading">
                  <div>
                    <h2>Quick Actions</h2>
                    <p>Access grievance management tools</p>
                  </div>
                </div>

                <button
                  className="quick-action"
                  onClick={() => navigate("Grievances")}
                >
                  <span className="quick-icon">▤</span>
                  <span className="quick-copy">
                    <strong>View All Grievances</strong>
                    <small>Search and review student submissions</small>
                  </span>
                  <span className="quick-arrow">→</span>
                </button>

                <button
                  className="quick-action"
                  onClick={() => navigate("Action History")}
                >
                  <span className="quick-icon">◷</span>
                  <span className="quick-copy">
                    <strong>Action History</strong>
                    <small>Review previously recorded actions</small>
                  </span>
                  <span className="quick-arrow">→</span>
                </button>
              </article>

              <article className="panel recent-panel">
                <div className="panel-heading">
                  <div>
                    <h2>Recent Grievances</h2>
                    <p>Latest student submissions</p>
                  </div>
                  <button
                    className="text-button"
                    onClick={() => navigate("Grievances")}
                  >
                    View All
                  </button>
                </div>

                {grievances.slice(0, 4).map((item) => (
                  <button
                    className="recent-row"
                    key={item.id}
                    onClick={() => openGrievance(item)}
                  >
                    <span className="recent-copy">
                      <strong>{item.id}</strong>
                      <small>{item.category} · {item.title}</small>
                    </span>
                    <StatusBadge status={item.status} />
                  </button>
                ))}
              </article>
            </section>

            <div className="info-banner">
              <span className="info-icon">i</span>
              <div>
                <strong>Every concern deserves attention.</strong>
                <p>
                  Review submissions carefully, record actions and update
                  grievance statuses to keep the process transparent.
                </p>
              </div>
            </div>
          </>
        )}

        {activePage === "Grievances" && (
          <>
            <section className="page-heading">
              <p className="eyebrow">CASE MANAGEMENT</p>
              <h1>Grievances</h1>
              <p className="section-subtitle">
                Search, filter and review submitted student grievances.
              </p>
            </section>

            <section className="panel table-panel">
              <div className="filter-row">
                <input
                  className="search-input"
                  type="search"
                  placeholder="Search ID, title, student or department..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
                <select
                  value={statusFilter}
                  onChange={(event) => setStatusFilter(event.target.value)}
                  aria-label="Filter by status"
                >
                  <option>All Statuses</option>
                  {statuses.map((status) => (
                    <option key={status}>{status}</option>
                  ))}
                </select>
                <select
                  value={categoryFilter}
                  onChange={(event) => setCategoryFilter(event.target.value)}
                  aria-label="Filter by category"
                >
                  <option>All Categories</option>
                  {categories.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div className="table-summary">
                Showing {filteredGrievances.length} of {grievances.length} grievances
              </div>

              <div className="table-scroll">
                <table>
                  <thead>
                    <tr>
                      <th>Grievance</th>
                      <th>Category</th>
                      <th>Reporter</th>
                      <th>Date</th>
                      <th>Priority</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredGrievances.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <strong className="table-id">{item.id}</strong>
                          <span className="table-title">{item.title}</span>
                        </td>
                        <td>{item.category}</td>
                        <td>
                          <strong className="reporter-name">{item.reporter}</strong>
                          <span className="table-title">{item.department}</span>
                        </td>
                        <td>{item.date}</td>
                        <td>
                          <span className={`priority priority-${item.priority.toLowerCase()}`}>
                            {item.priority}
                          </span>
                        </td>
                        <td><StatusBadge status={item.status} /></td>
                        <td>
                          <button
                            className="review-button"
                            onClick={() => openGrievance(item)}
                          >
                            Review →
                          </button>
                        </td>
                      </tr>
                    ))}
                    {filteredGrievances.length === 0 && (
                      <tr>
                        <td colSpan="7" className="empty-state">
                          No grievances match your search or filters.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}

        {activePage === "Action History" && (
          <>
            <section className="page-heading">
              <p className="eyebrow">AUDIT TRAIL</p>
              <h1>Action History</h1>
              <p className="section-subtitle">
                Review status updates and remarks recorded during this session.
              </p>
            </section>

            <section className="panel history-panel">
              {history.length === 0 ? (
                <div className="empty-history">
                  <div className="empty-history-icon">◷</div>
                  <h2>No actions recorded yet</h2>
                  <p>
                    When you update a grievance status or save remarks,
                    the action will appear here.
                  </p>
                  <button
                    className="primary-button"
                    onClick={() => navigate("Grievances")}
                  >
                    View Grievances →
                  </button>
                </div>
              ) : (
                history.map((item) => (
                  <article className="history-item" key={item.id}>
                    <div className="history-dot" />
                    <div className="history-content">
                      <div className="history-top">
                        <strong>{item.grievanceId} · {item.title}</strong>
                        <span>{item.date}</span>
                      </div>
                      <p>
                        Status changed from <strong>{item.oldStatus}</strong>{" "}
                        to <strong>{item.newStatus}</strong> by {item.admin}.
                      </p>
                      <div className="history-remark">
                        <strong>Remarks:</strong> {item.remarks}
                      </div>
                    </div>
                  </article>
                ))
              )}
            </section>
          </>
        )}
      </main>

      <footer className="app-footer">
        © 2026 PSG College of Technology · Grievance Redressal System
      </footer>

      {selected && (
        <div
          className="modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <section className="detail-modal" role="dialog" aria-modal="true" aria-labelledby="detail-title">
            <div className="modal-heading">
              <div>
                <p className="eyebrow">GRIEVANCE DETAILS</p>
                <h2 id="detail-title">{selected.id}</h2>
              </div>
              <button
                className="close-button"
                aria-label="Close details"
                onClick={() => setSelected(null)}
              >
                ×
              </button>
            </div>

            <h3 className="detail-title">{selected.title}</h3>
            <div className="detail-badges">
              <StatusBadge status={selected.status} />
              <span className={`priority priority-${selected.priority.toLowerCase()}`}>
                {selected.priority} Priority
              </span>
            </div>

            <div className="detail-grid">
              <div><span>Category</span><strong>{selected.category}</strong></div>
              <div><span>Grievance Type</span><strong>{selected.type}</strong></div>
              <div><span>Reporter</span><strong>{selected.reporter}</strong></div>
              <div><span>Department</span><strong>{selected.department}</strong></div>
              <div><span>Date Submitted</span><strong>{selected.date}</strong></div>
              {selected.type === "Against an Individual" && (
                <div>
                  <span>Concerned Person</span>
                  <strong>{selected.concernedPerson || "Not provided"}</strong>
                </div>
              )}
            </div>

            <div className="detail-description">
              <h4>Description</h4>
              <p>{selected.description}</p>
            </div>

            <div className="form-field">
              <label htmlFor="newStatus">Update Status</label>
              <select
                id="newStatus"
                value={newStatus}
                onChange={(event) => setNewStatus(event.target.value)}
              >
                {statuses.map((status) => (
                  <option key={status}>{status}</option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="remarks">Remarks / Action Taken</label>
              <textarea
                id="remarks"
                rows="4"
                placeholder="Record your review, action taken or resolution..."
                value={remarks}
                onChange={(event) => setRemarks(event.target.value)}
              />
            </div>

            <div className="modal-actions">
              <button className="secondary-button" onClick={() => setSelected(null)}>
                Cancel
              </button>
              <button className="primary-button" onClick={saveChanges}>
                Save Changes →
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
