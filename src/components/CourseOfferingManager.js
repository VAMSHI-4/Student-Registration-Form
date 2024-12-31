import React, { useState } from 'react';
import { courseTypes, courses, courseOfferings } from '../services/mockData';

const CourseOfferingManager = () => {
  const [courseOfferingList, setCourseOfferingList] = useState(courseOfferings);
  const [selectedCourseType, setSelectedCourseType] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const addCourseOffering = () => {
    if (selectedCourseType && selectedCourse) {
      const newCourseOffering = {
        id: Date.now(),
        courseType: selectedCourseType,
        courseName: selectedCourse,
      };
      setCourseOfferingList([...courseOfferingList, newCourseOffering]);
    }
  };

  return (
    <div>
      <h2>Manage Course Offerings</h2>
      <select onChange={(e) => setSelectedCourseType(e.target.value)} value={selectedCourseType}>
        <option value="">Select Course Type</option>
        {courseTypes.map((type) => (
          <option key={type.id} value={type.name}>{type.name}</option>
        ))}
      </select>

      <select onChange={(e) => setSelectedCourse(e.target.value)} value={selectedCourse}>
        <option value="">Select Course</option>
        {courses.map((course) => (
          <option key={course.id} value={course.name}>{course.name}</option>
        ))}
      </select>

      <button onClick={addCourseOffering}>Add Course Offering</button>

      <ul>
        {courseOfferingList.map((offering) => (
          <li key={offering.id}>
            {offering.courseType} - {offering.courseName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseOfferingManager;
