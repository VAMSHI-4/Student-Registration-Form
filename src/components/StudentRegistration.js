import React, { useState } from 'react';
import { courseOfferings, studentRegistrations } from '../services/mockData';

const StudentRegistration = () => {
  const [studentName, setStudentName] = useState('');
  const [courseOfferingId, setCourseOfferingId] = useState('');
  const [registrations, setRegistrations] = useState(studentRegistrations);

  const registerStudent = () => {
    if (studentName.trim() && courseOfferingId) {
      const newRegistration = {
        id: Date.now(),
        studentName,
        courseOfferingId,
      };
      setRegistrations([...registrations, newRegistration]);
      setStudentName('');
      setCourseOfferingId('');
    }
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <select
        value={courseOfferingId}
        onChange={(e) => setCourseOfferingId(e.target.value)}
      >
        <option value="">Select Course Offering</option>
        {courseOfferings.map((offering) => (
          <option key={offering.id} value={offering.id}>
            {offering.courseType} - {offering.courseName}
          </option>
        ))}
      </select>

      <button onClick={registerStudent}>Register</button>

      <ul>
        {registrations
          .filter((registration) => registration.courseOfferingId === parseInt(courseOfferingId))
          .map((registration) => (
            <li key={registration.id}>{registration.studentName}</li>
          ))}
      </ul>
    </div>
  );
};

export default StudentRegistration;
