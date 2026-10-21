import charData from '../../../data/gamedata/characters.json';

export async function GET() {
  return new Response(JSON.stringify(charData, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
