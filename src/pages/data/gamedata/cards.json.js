import cardData from '../../../data/gamedata/cards.json';

export async function GET() {
  return new Response(JSON.stringify(cardData, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
