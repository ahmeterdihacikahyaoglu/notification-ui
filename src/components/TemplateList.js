import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TemplateList = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    const response = await axios.get('http://localhost:8081/api/notifications');
    setTemplates(response.data);
  };

  return (
    <div>
      <h2>List of Notification Templates</h2>
      <ul>
        {templates.map((template) => (
          <li key={template.id}>
            <h4>{template.name}</h4>
            <p>Message: {template.messageTemplate}</p>
            <p>Criteria: Gender - {template.genderCriteria.join(', ')}, Age - {template.ageCriteria.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemplateList;
