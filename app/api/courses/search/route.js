import { NextResponse } from 'next/server';
import courses from '../data.json';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    // console.log(searchParams.get("query"));
    // console.log(searchParams.get("name"));
    const query = searchParams.get("query");
    const filterCourses = courses.filter((course) => course.title.toLowerCase().includes(query.toLowerCase()));
    return NextResponse.json(filterCourses);
}