Jokes API
Base URL: https://jokes-api-lilac.vercel.app/

Routing (via vercel.json): Requests to the root path (/) are internally routed to the API function. Use the root URL directly.

Endpoint
Method: GET

Path: /

Authentication: None (Public)

JSON Response Structure
JSON
{
  "totalJokes": 100,
  "jokes": [
    "Joke text content..."
  ]
}
Response Fields
totalJokes (Integer): Total count of jokes available.

jokes (Array of Strings): A list containing the joke texts.
