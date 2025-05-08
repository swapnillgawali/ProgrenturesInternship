import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import PaidInternship from "./PaidInternship";
import { PiUserCircleLight } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/LoginPage");
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white shadow-[0_4px_10px_rgba(0,0,0,0.3)] text-black p-4 flex justify-between items-center z-50 relative">
        <div className="text-xl font-bold">PRSI Portal</div>
        <input
          type="text"
          placeholder="Search..."
          className="w-1/3 p-2 rounded border"
        />
        <div className="flex items-center gap-4">
        <PiUserCircleLight  class="text-4xl text-[#4F4D4D] cursor-pointer"></PiUserCircleLight >
          <button onClick={handleLogout}><FiLogOut  class="text-3xl text-red-700 cursor-pointer"></FiLogOut></button>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="bg-[#3b3663] text-white w-64 h-full p-2 overflow-y-auto">
          <ul>
            <li>
              <Link to="" className="block p-2 hover:bg-indigo-700">
                Home
              </Link>
            </li>
            <li>
              <details className="group">
                <summary className="p-2 cursor-pointer hover:bg-indigo-700">
                  Internship
                </summary>
                <ul className="pl-4">
                  <li>
                    <Link
                      to="paid-internship"
                      className="block p-2 hover:bg-indigo-700 text-sm"
                    >
                      Paid Internship
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="free-internship"
                      className="block p-2 hover:bg-indigo-700 text-sm"
                    >
                      Free Internship
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link
                to="your-internship"
                className="block p-2 hover:bg-indigo-700"
              >
                Your Internship
              </Link>
            </li>
            <li>
              <Link
                to="domain-selection"
                className="block p-2 hover:bg-indigo-700"
              >
                Domain Selection
              </Link>
            </li>
            <li>
              <Link to="roadmap" className="block p-2 hover:bg-indigo-700">
                Roadmap
              </Link>
            </li>
            <li>
              <Link
                to="aptitude-test"
                className="block p-2 hover:bg-indigo-700"
              >
                Aptitude Test
              </Link>
            </li>
            <li>
              <Link
                to="programming-test"
                className="block p-2 hover:bg-indigo-700"
              >
                Programming Test
              </Link>
            </li>
            <li>
              <Link
                to="programming-practice"
                className="block p-2 hover:bg-indigo-700"
              >
                Programming Practice (Hackathon)
              </Link>
            </li>
            <li>
              <Link
                to="projects-ideas"
                className="block p-2 hover:bg-indigo-700"
              >
                Projects Ideas
              </Link>
            </li>
            <li>
              <Link
                to="interview-question"
                className="block p-2 hover:bg-indigo-700"
              >
                Interview Question
              </Link>
            </li>
            <li>
              <Link
                to="languages-cheatsheet"
                className="block p-2 hover:bg-indigo-700"
              >
                Languages Cheatsheet
              </Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
          <Routes>
            <Route path="" element={<HomeDashboard />} />
            <Route path="paid-internship" element={<PaidInternship />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function HomeDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        REGISTER FOR EXAM for paid internship
      </h1>
      <div className="space-y-4">
        {[
          "Give exam",
          "Schedule Details",
          "Exam Score",
          "Select Internship Domain",
        ].map((title, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-4 bg-gray-300 p-4 rounded"
          >
            <div className="w-8 h-8 bg-indigo-800 text-white rounded-full flex items-center justify-center">
              {idx + 1}
            </div>
            <div className="flex-1 font-semibold">{title}</div>
            <button className="bg-indigo-800 text-white px-4 py-1 rounded">
              {["Instant Exam", "<-", "View Score", "Select Domain"][idx]}
            </button>
          </div>
        ))}
        <div className="flex items-center justify-between bg-gray-300 p-4 rounded">
          <span className="text-xl font-bold">Whatsapp Community</span>
          <button className="bg-indigo-800 text-white px-4 py-1 rounded">
            Join Group
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
