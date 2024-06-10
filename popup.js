document.getElementById('askButton').addEventListener('click', async () => {
  const input = document.getElementById('input').value;
  const output = document.getElementById('output');
  output.textContent = 'Cargando...';

  try {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer TU_API_KEY_AQUI`
      },
      body: JSON.stringify({
        prompt: input,
        max_tokens: 150
      })
    });
    const data = await response.json();
    output.textContent = data.choices ? data.choices[0].text : 'Sin respuesta';
  } catch (error) {
    output.textContent = 'Error: ' + error.message;
  }
});
