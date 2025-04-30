import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MemberDetails.css';

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5001/api/members/${id}`)
      .then(res => setMember(res.data))
      .catch(err => console.error('Error fetching member:', err));
  }, [id]);

  if (!member) {
    return <div className="member-details"><p>Loading...</p></div>;
  }

  return (
    <div className="member-details">
      <h2>{member.name}</h2>
      <img src={`http://localhost:5001/uploads/${member.image}`} alt={member.name} />
      <p><strong>Role:</strong> {member.role}</p>
      <p><strong>Email:</strong> {member.email}</p>
    </div>
  );
}

export default MemberDetails;
