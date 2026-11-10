import express from 'express';
import cors from 'cors';

const app = express();

const port = 3000;

app.use(cors());

const usersTab = [
  {id: 1, name: 'Piotr', login: 'pkania', admin: true},
  {id: 2, name: 'Ania', login: 'anowak', admin: false},
  {id: 3, name: 'Rafał', login: 'rafi', admin: false},
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/users', (req, res) => {
  res.json(usersTab);
  console.log(usersTab);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});