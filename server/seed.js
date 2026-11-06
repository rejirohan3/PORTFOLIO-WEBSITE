require('dns').setServers(['8.8.8.8', '8.8.4.4']);
require('dotenv').config();''
const mongoose = require('mongoose');
const Project = require('./models/Project');

const projects = [
  { title: 'PulseFit', description: 'Fitness tracking app with workout logs, goals and progress charts.',
    tech: ['React', 'Node', 'MongoDB'], link: 'https://github.com/<you>/pulsefit' },
  { title: 'Task Manager', description: 'Kanban-style task manager with auth, drag-and-drop and deadlines.',
    tech: ['React', 'Express', 'JWT'], link: 'https://github.com/<you>/task-manager' },
  { title: 'SaaS Billing Portal', description: 'Subscription billing dashboard with plans, invoices and Stripe payments.',
    tech: ['MERN', 'Stripe', 'Tailwind'], link: 'https://github.com/<you>/billing-portal' },
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => { await Project.deleteMany(); await Project.insertMany(projects); console.log('Seeded'); process.exit(); });