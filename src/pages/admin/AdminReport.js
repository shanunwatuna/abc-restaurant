import React, { useState } from "react";

function AdminReport() {

  const [newReport, setNewReport] = useState({
    title: '',
    description: '',
    status: 'Open',
  });

  const [reports, setReports] = useState([]);


  const handleAddReport = (e) => {
    e.preventDefault();
    const reportToAdd = {
      id: reports.length + 1, 
      ...newReport,
    };
    setReports([...reports, reportToAdd]);

    setNewReport({ title: '', description: '', status: 'Open' });
  };


  const handleUpdateReport = (id, updatedReport) => {
    const updatedReports = reports.map(report =>
      report.id === id ? updatedReport : report
    );
    setReports(updatedReports);
  };

  const handleDeleteReport = (id) => {
    const updatedReports = reports.filter(report => report.id !== id);
    setReports(updatedReports);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8" style={{ backgroundColor: '#212529' }}>
      <h1 className="text-3xl font-bold text-white">Report</h1>
      <div className="mt-4">
        <h2 className="text-xl font-bold text-white">Add New Report</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              value={newReport.title}
              onChange={(e) => setNewReport({ ...newReport, title: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              value={newReport.description}
              onChange={(e) => setNewReport({ ...newReport, description: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="status">
              Status
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="status"
              value={newReport.status}
              onChange={(e) => setNewReport({ ...newReport, status: e.target.value })}
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <button
            className="bg-green-600 hover:bg-green-700 font-bold py-2 px-4 rounded"
            onClick={handleAddReport}
          >
            Add Report
          </button>
        </form>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-bold text-white">Reports</h2>
        <ul>
          {reports.map((report) => (
            <li key={report.id} className="mb-4">
              <h3 className="text-lg font-bold ">{report.title}</h3>
              <p className="">{report.description}</p>
              <p className="">Status: {report.status}</p>
              <button
                className="bg-blue-600 hover:bg-blue-700  font-bold py-2 px-4 rounded"
                onClick={() => handleUpdateReport(report.id, { ...report, status: 'In Progress' })}
              >
                Update Status
              </button>
              <button
                className="bg-red-600 hover:bg-red-700  font-bold py-2 px-4 rounded"
                onClick={() => handleDeleteReport(report.id)}
              >
                Delete Report
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminReport;
