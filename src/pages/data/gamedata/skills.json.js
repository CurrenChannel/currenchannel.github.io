import skillsData from '../../../data/gamedata/skills.json';

export async function GET() {
  return new Response(JSON.stringify(skillsData, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
