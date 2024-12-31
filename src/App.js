import React from 'react';
import CourseTypeManager from './components/CourseTypeManager';
import CourseManager from './components/CourseManager';
import CourseOfferingManager from './components/CourseOfferingManager';
import StudentRegistration from './components/StudentRegistration';

const App = () => {
  return (
    <div className="App">
      <h1>Student Registration System</h1>
      <CourseTypeManager />
      <CourseManager />
      <CourseOfferingManager />
      <StudentRegistration />
    </div>
  );
};

export default App;
