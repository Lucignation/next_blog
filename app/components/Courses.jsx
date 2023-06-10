import Link from 'next/link';

const fetchCourses = async () => {
  const response = await fetch('http://localhost:3000/api/courses', {
    next: {
      revalidate: 60,
    },
  });

  return await response.json();
};

const Courses = async ({courses}) => {
  // const courses = await fetchCourses();
  return (
    <div className='courses'>
      {courses.map((course) => (
        <div key={course.id} className='card'>
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} className='btn' target='_blank'>
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
