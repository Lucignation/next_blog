import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

import courses from './courses/data.json';

export function GET(request) {
  return new Response('You are logged in');
}

export async function POST(request) {
  const { title, description, level, link } = await request.json();

  const newCourse = {
    id: uuidv4(),
    title,
    description,
    level,
    link,
  };

  courses.push(newCourse);

  return NextResponse.json(courses);
}
