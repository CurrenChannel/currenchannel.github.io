import umaData from '../../../data/uma.json';

export async function GET() {
  const names = umaData.map((uma) => uma.name);

  return new Response(JSON.stringify(names, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
