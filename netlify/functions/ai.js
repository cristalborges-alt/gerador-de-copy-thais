exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };
  
  const OR_KEY = process.env.OR_KEY;
  const body = JSON.parse(event.body);
  
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + OR_KEY,
      'HTTP-Referer': 'https://unique-taiyaki-d77716.netlify.app',
      'X-Title': 'Gerador Copy Thais'
    },
    body: JSON.stringify(body)
  });
  
  const data = await res.json();
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data)
  };
};
