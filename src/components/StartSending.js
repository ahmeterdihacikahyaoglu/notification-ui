import React, { useState } from 'react';
import axios from 'axios';

const StartSending = () => {
  const [templateId, setTemplateId] = useState('');

  const handleSend = async () => {
    if (templateId) {
      try {
        await axios.post(`http://localhost:8081/api/notifications/send?templateId=${templateId}`);
        alert('Notification sent successfully!');
      } catch (error) {
        alert('Failed to send notification.');
      }
    } else {
      alert('Please select a template ID.');
    }
  };

  return (
    <div>
      <h2>Start Sending Notifications</h2>
      <input
        type="text"
        placeholder="Enter Template ID"
        value={templateId}
        onChange={(e) => setTemplateId(e.target.value)}
      />
      <button onClick={handleSend}>Send Notification</button>
    </div>
  );
};

export default StartSending;
