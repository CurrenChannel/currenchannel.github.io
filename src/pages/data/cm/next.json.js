import cmData from '../../../data/cm.json';

function parseGLDate(dateStr) {
  if (!dateStr) return null;
  const normalized = dateStr.replace(/\bSept\b/i, 'Sep');
  const date = new Date(`${normalized} 23:59:59 UTC`);
  return isNaN(date.getTime()) ? null : date;
}

export async function GET() {
  const now = new Date();
  let lastCompletedIndex = -1;
  let nextCM = null;

  for (let i = 0; i < cmData.length; i++) {
    const endDate = parseGLDate(cmData[i].gl_end);
    if (endDate) {
      if (endDate >= now) {
        nextCM = cmData[i];
        break;
      }
      lastCompletedIndex = i;
    }
  }

  if (!nextCM) {
    nextCM = (lastCompletedIndex !== -1 && lastCompletedIndex + 1 < cmData.length)
      ? cmData[lastCompletedIndex + 1]
      : cmData[0];
  }

  return new Response(JSON.stringify(nextCM, null, 2), {
    status: 200,
    headers: { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  });
}
