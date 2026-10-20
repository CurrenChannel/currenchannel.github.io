import umaData from '../../../data/uma.json';

export async function GET() {
  return new Response(JSON.stringify(umaData, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
