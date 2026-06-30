# Jokes API

A simple and lightweight REST API for fetching random jokes.

## Overview

This API provides random jokes through simple HTTP endpoints. It's perfect for integrating humor into your applications, games, or any project that needs entertaining content.

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/theimranshaik/jokes-api.git

# Navigate to the project directory
cd jokes-api

# Install dependencies
npm install
```

### Running Locally

```bash
# Start the development server
npm run dev

# Or use npm start
npm start
```

The API will be available at `http://localhost:3000`

## API Endpoints

### Get a Random Joke

```
GET /api/jokes
```

**Response:**
```json
{
  "joke": "Why did the chicken cross the road? To get to the other side!"
}
```

**Status Code:** `200 OK`

### Get Multiple Random Jokes

```
GET /api/jokes?count=5
```

**Query Parameters:**
- `count` (optional): Number of jokes to retrieve (default: 1)

**Response:**
```json
{
  "jokes": [
    "Why did the chicken cross the road? To get to the other side!",
    "What do you call a bear with no teeth? A gummy bear!"
  ]
}
```

**Status Code:** `200 OK`

## Usage Examples

### JavaScript/Node.js

```javascript
// Using fetch API
fetch('https://jokes-api.vercel.app/api/jokes')
  .then(response => response.json())
  .then(data => console.log(data.joke))
  .catch(error => console.error('Error:', error));

// Using async/await
async function getJoke() {
  try {
    const response = await fetch('https://jokes-api.vercel.app/api/jokes');
    const data = await response.json();
    console.log(data.joke);
  } catch (error) {
    console.error('Error fetching joke:', error);
  }
}

getJoke();
```

### Python

```python
import requests

response = requests.get('https://jokes-api.vercel.app/api/jokes')
data = response.json()
print(data['joke'])
```

### cURL

```bash
curl https://jokes-api.vercel.app/api/jokes
```

## Deployment

This API is deployed on [Vercel](https://vercel.com). Every push to the main branch automatically deploys the latest version.

### Deploy Your Own

1. Fork this repository
2. Create a [Vercel](https://vercel.com) account
3. Connect your GitHub account to Vercel
4. Click "Import Project" and select this repository
5. Vercel will automatically detect the serverless functions and deploy

## Project Structure

```
jokes-api/
├── api/
│   └── jokes.js          # Main API endpoint
├── vercel.json           # Vercel configuration
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## Technologies Used

- **JavaScript** - Core language
- **Express.js** (or Serverless Functions) - API framework
- **Vercel** - Hosting and deployment

## Error Handling

### Common Errors

| Status Code | Meaning |
|---|---|
| 200 | Success |
| 400 | Bad Request |
| 404 | Endpoint not found |
| 500 | Internal Server Error |

## Rate Limiting

Currently, there are no rate limits. However, please use this API responsibly.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues, questions, or suggestions:
- Open an [Issue](https://github.com/theimranshaik/jokes-api/issues)
- Contact the maintainer

## Changelog

### v1.0.0
- Initial release
- Basic jokes API endpoint
- Vercel deployment

---

**Live API:** [https://jokes-api.vercel.app](https://jokes-api.vercel.app)

Made with ❤️ by [Imran Shaik](https://github.com/theimranshaik)
