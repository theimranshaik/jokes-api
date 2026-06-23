const jokes = [
  "Why do programmers wear glasses? Because they can't C#.",
  "There are 10 types of people: those who understand binary, and those who don't.",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem."
];

// Vercel looks for this specific function export
module.exports = (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  res.end(JSON.stringify({ joke: randomJoke }));
};
