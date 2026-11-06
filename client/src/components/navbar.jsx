export const site = {
  name: 'Pulastya Singh',
  eyebrow: 'Computer Science · Development · Design',
  headline: ['Building', 'technology', 'with purpose.'],
  intro: "I'm Pulastya Singh, a computer science student and aspiring full-stack developer interested in creating useful, thoughtful and well-engineered digital experiences. I also enjoy exploring nature, sustainable ideas and thoughtful design.",
  photo: import.meta.env.BASE_URL + 'profile.jpg',
  resume: import.meta.env.BASE_URL + 'resume.pdf',
};

export const projects = [
  { title: 'PulseFit', description: 'Fitness tracking app with workout logs and progress charts.',
    tech: ['React', 'Node', 'MongoDB'], link: 'https://github.com/rejirohan3/pulsefit' },
  { title: 'Task Manager', description: 'Kanban-style task manager with auth and deadlines.',
    tech: ['React', 'Express', 'JWT'], link: 'https://github.com/rejirohan3/task-manager' },
  { title: 'SaaS Billing Portal', description: 'Subscription billing dashboard with plans and invoices.',
    tech: ['MERN', 'Stripe', 'Tailwind'], link: 'https://github.com/rejirohan3/billing-portal' },
];