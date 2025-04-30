import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Team LLL</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add">Add Member</Link>
        <Link to="/members">View Members</Link>
      </nav>
    </header>
  );
}

export default Header;
