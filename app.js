const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
const users = [
  { id: "1",  name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Sam Johnson" },
];

app.use(express.static(path.join(__dirname,public)));

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

app.get('/api/users', (req, res) => {
  res.status(200).json(users);
})

app.get('/api/users/:id', (req, res) => {
  const user = users.find(i => i.id === req.params.id );
  if (user) {
    res.status(200).json(user);
  }
  else {res.status(404)}
});

app.use(express.json());
app.post('api/users', (req,res) =>  {
  const NewUser = {
    id: (user.length + 1).toString,
    name: req.body.name,
  };
  users.push(NewUser);
  res.status(201).json(NewUser);
});

app.put('/api/usersg/:id', (req, res) => {
  const user = users.find(i => i.id === req.params.id );
  if (user) {
    user.name = req.body.name;
    res.status(200).json(user);
  }
  else {res.status(404)}
});

/*app.delete('api/users/:id', (req, res) => {

} )
*/
