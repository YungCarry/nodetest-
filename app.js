const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hi, there!');
});

app.get('/express', (req, res) => {
  res.send('Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.');
});

app.get('/greeting', (req, res) => {
  res.send('Hello, Kéri Dominik');  
});

app.get('/nodejs', (req, res) => {
  res.send('A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.');
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`A szerver fut: http://localhost:${port}`);
});

app.get('/api/usersg', (req, res) => {
  res.send('200')
})
