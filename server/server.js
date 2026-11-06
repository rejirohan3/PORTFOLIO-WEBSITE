require('dotenv').config();
const express = require('express'), mongoose = require('mongoose'), cors = require('cors');
const Project = require('./models/Project'), Message = require('./models/Message');

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || '*' }), express.json());

mongoose.connect(process.env.MONGO_URI).then(() => console.log('DB connected'));

app.get('/api/projects', async (_, res) => res.json(await Project.find()));
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: 'All fields required' });
  await Message.create({ name, email, message });
  res.json({ ok: true });
});

app.listen(process.env.PORT || 5000, () => console.log('Server running'));