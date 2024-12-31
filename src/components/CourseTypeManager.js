import React, { useState } from 'react';
import { courseTypes } from '../services/mockData';



const CourseTypeManager = () => {
  const [courseTypeList, setCourseTypeList] = useState(courseTypes);
  const [newCourseType, setNewCourseType] = useState('');

  const addCourseType = () => {
    if (newCourseType.trim()) {
      const newCourseTypes = [...courseTypeList, { id: Date.now(), name: newCourseType }];
      setCourseTypeList(newCourseTypes);
      setNewCourseType('');
    }
  };

  const deleteCourseType = (id) => {
    setCourseTypeList(courseTypeList.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Manage Course Types</h2>
      <input
        type="text"
        value={newCourseType}
        onChange={(e) => setNewCourseType(e.target.value)}
        placeholder="Enter new course type"
      />
      <button onClick={addCourseType}>Add Course Type</button>
      <ul>
        {courseTypeList.map((courseType) => (
          <li key={courseType.id}>
            {courseType.name} 
            <button onClick={() => deleteCourseType(courseType.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseTypeManager;
