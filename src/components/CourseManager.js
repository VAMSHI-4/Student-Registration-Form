import React, { useState } from 'react';
import { courses } from '../services/mockData';

const CourseManager = () => {
  const [courseList, setCourseList] = useState(courses);
  const [newCourse, setNewCourse] = useState('');

  const addCourse = () => {
    if (newCourse.trim()) {
      const newCourses = [...courseList, { id: Date.now(), name: newCourse }];
      setCourseList(newCourses);
      setNewCourse('');
    }
  };

  const deleteCourse = (id) => {
    setCourseList(courseList.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Manage Courses</h2>
      <input
        type="text"
        value={newCourse}
        onChange={(e) => setNewCourse(e.target.value)}
        placeholder="Enter new course"
      />
      <button onClick={addCourse}>Add Course</button>
      <ul>
        {courseList.map((course) => (
          <li key={course.id}>
            {course.name}
            <button onClick={() => deleteCourse(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseManager;
