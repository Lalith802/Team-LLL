import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MemberCard from '../components/MemberCard';
import './ViewMembers.css';

function ViewMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/members')
      .then(res => setMembers(res.data))
      .catch(err => console.error('Error fetching members:', err));
  }, []);

  return (
    <div className="view-members">
      <h2>Team Members</h2>
      <div className="members-grid">
        {members.length === 0 ? (
          <p>No members found.</p>
        ) : (
          members.map(member => (
            <MemberCard key={member._id} member={member} />
          ))
        )}
      </div>
    </div>
  );
}

export default ViewMembers;
