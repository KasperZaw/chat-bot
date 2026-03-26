export async function openApi(message: string | undefined) {
  if (!message) return;

  const api_key = import.meta.env.VITE_OPENAI_API_KEY;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${api_key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });
    
    const data = await response.json();
    const content = data.choices[0].message.content;
    // handle unexpected API response (missing choices)
    if (!content) {
      console.error("API Error:", data);
      return "Api error!";
    }

    return content
    
  } catch(error) {
    console.error(error)
  }

}
