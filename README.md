# Jokes API

A simple REST API for random jokes.

## Quick Start

```bash
npm install
npm start
```

## Usage

```javascript
fetch('https://jokes-api.vercel.app/api/jokes')
  .then(r => r.json())
  .then(d => console.log(d.joke))
```

## Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/jokes` | GET | Get a random joke |
| `/api/jokes?count=5` | GET | Get 5 random jokes |

## Deploy

Push to GitHub → Auto-deploys on Vercel

## License

MIT
