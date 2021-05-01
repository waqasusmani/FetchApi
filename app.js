const fetch = require('node-fetch');

// const dev = process.env.NODE_ENV !== 'production';

// const server = dev ? 'http://localhost:3001' : 'https://your_deployment.server.com';


fetch('http://localhost:3000',{method:"get"},{headers: { 'Content-Type': 'application/json' }})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error=>console.log(error))
