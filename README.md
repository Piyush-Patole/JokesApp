# JokesApp
A Joke App created using Node.js, Express, and EJS. This application fetches jokes from the JokeAPI.

Features =>
1. Name-based Jokes: Users can enter their name to receive a personalised joke.
2. Joke Retrieval: Fetches jokes from the JokeAPI.
3. Personalization: Replaces "Chuck Norris" in jokes with the user's name.
4. Styling: The application is styled with a vibrant, modern CSS, including gradients and pop colors.

Technical Requirements => 
1. Node.js & Express.js: Used Node.js as the runtime environment and Express.js to handle routing and middleware.
2. Axios: Used Axios for making HTTP requests to the JokeAPI.
3. EJS: Used EJS as the templating engine to generate dynamic HTML.
4. Middleware: express.static: Used to serve static files (e.g., CSS).

Joke Management =>
Jokes are retrieved dynamically from the JokeAPI. There is no local storage of jokes since they are fetched in real-time from the external API.
