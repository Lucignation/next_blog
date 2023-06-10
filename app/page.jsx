'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Courses from './components/Courses';
import LoadingPage from './loading';
import CourseSearch from './components/CourseSearch';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/courses');
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  console.log(courses);
  return (
    <>
      <h1> Welcome to Mide Media</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  );
};

export default HomePage;
