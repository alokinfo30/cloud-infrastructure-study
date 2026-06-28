const express = require('express');
const app = express();
const port = 3000;

// Sample data
let items = [
  { id: 1, name: 'Sample Item 1' },
  { id: 2, name: 'Sample Item 2' }
];

app.use(express.json());

// CRUD Routes
app.get('/api/items', (req, res) => res.json(items));
app.post('/api/items', (req, res) => {
  const newItem = { id: items.length + 1, name: req.body.name };
  items.push(newItem);
  res.status(201).json(newItem);
});
app.put('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ error: 'Not found' });
  item.name = req.body.name;
  res.json(item);
});
app.delete('/api/items/:id', (req, res) => {
  items = items.filter(i => i.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.get('/health', (req, res) => res.json({ status: 'OK' }));

app.listen(port, () => console.log(`App running on port ${port}`));