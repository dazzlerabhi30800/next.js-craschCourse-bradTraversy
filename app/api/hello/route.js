import courses from '../courses/data.json';

export async function GET(request) {
    return new Response(JSON.stringify(courses))
}