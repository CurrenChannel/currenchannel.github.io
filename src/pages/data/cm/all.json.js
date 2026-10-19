import cmData from '../../../data/cm.json';

export async function GET() {
  return new Response(JSON.stringify(cmData, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
