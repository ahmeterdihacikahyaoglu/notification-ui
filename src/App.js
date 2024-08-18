import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientList from './components/PatientList';
import TemplateList from './components/TemplateList';
import StartSending from './components/StartSending';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Notification UI</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/patients">Patients</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/templates">Templates</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/send">Send Notification</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/patients" element={<PatientList />} />
          <Route path="/templates" element={<TemplateList />} />
          <Route path="/send" element={<StartSending />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;