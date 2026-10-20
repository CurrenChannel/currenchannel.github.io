import cmData from '../../../data/cm.json';

export function getStaticPaths() {
  return cmData.map((cm) => ({
    params: { id: cm.number },
    props: { cm },
  }));
}

export async function GET({ props }) {
  return new Response(JSON.stringify(props.cm, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
