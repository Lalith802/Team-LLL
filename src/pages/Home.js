import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to Team LLL</h2>
      <p>Manage your student team members efficiently.</p>
      <div className="home-buttons">
        <Link to="/add" className="btn">Add Member</Link>
        <Link to="/members" className="btn">View Members</Link>
      </div>
    </div>
  );
}

export default Home;
