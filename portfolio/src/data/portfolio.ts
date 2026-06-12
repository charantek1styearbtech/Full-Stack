export type ProfileLink = {
  label: string;
  href: string;
  description?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  problem: string;
  solution: string;
  architecture: string[];
  impact: string[];
};

export type Capability = {
  title: string;
  description: string;
  evidence: string[];
};

export const socialLinks: ProfileLink[] = [
  { label: 'Resume', href: '/files/Resume.pdf', description: 'Download resume' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/reddycharantej', description: 'Professional profile' },
  { label: 'GitHub', href: 'https://github.com/charantek1styearbtech/', description: 'Open-source work' },
  { label: 'Email', href: 'mailto:charantej928@gmail.com', description: 'Start a conversation' },
];

export const projects: Project[] = [
  {
    id: 'uber-clone',
    title: 'Uber Clone',
    description: 'A full-featured ride-sharing application with real-time GPS tracking, ride requests, and driver matching functionality.',
    technologies: ['React', 'Express', 'WebSockets', 'MongoDB', 'Node.js'],
    problem: 'Coordinate riders, drivers, live location, and ride requests in a single real-time flow.',
    solution: 'Built a full-stack ride-sharing interface that connects ride requests with driver matching and live GPS updates.',
    architecture: ['React interface for ride requests and trip state', 'Express and Node.js API layer', 'WebSockets for real-time driver/rider updates', 'MongoDB for persistent ride and user data'],
    impact: ['Demonstrates real-time product architecture', 'Connects full-stack development with operational workflows', 'Shows scalable thinking around matching and live state'],
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    description: 'An interactive portfolio website showcasing my journey as a developer, integrated with AI-powered chat functionality.',
    technologies: ['HTML', 'CSS', 'React.js', 'Express.js', 'JavaScript', 'Semantic Search', 'Gemini AI'],
    problem: 'Present technical identity, projects, credentials, and AI-powered interaction in one cohesive product.',
    solution: 'Created an interactive portfolio with structured project storytelling and an AI Assistant for contextual questions.',
    architecture: ['React frontend for polished user experience', 'Express backend for persistence and question analytics', 'Gemini-powered conversational layer', 'Semantic search and frequency tracking for top questions'],
    impact: ['Combines engineering, AI, and product presentation', 'Turns a portfolio into an interactive experience', 'Preserves visitor questions for continuous improvement'],
  },
  {
    id: 'ems-whatsapp-bot',
    title: 'EMS WhatsApp Bot',
    description: 'Educational Management System that streamlines communication between teachers and students through WhatsApp automation.',
    technologies: ['Python', 'Flask', 'WhatsApp API', 'SQLite', 'Automation'],
    problem: 'Educational teams need faster, lower-friction communication between teachers and students.',
    solution: 'Built WhatsApp automation around an Educational Management System workflow to reduce manual messaging overhead.',
    architecture: ['Python service logic', 'Flask API surface', 'WhatsApp API integration', 'SQLite storage for structured educational data'],
    impact: ['Shows practical automation for real workflows', 'Connects backend logic with communication channels', 'Demonstrates product thinking beyond dashboards'],
  },
  {
    id: 'responsive-chatbot',
    title: 'Responsive Chatbot',
    description: 'An intelligent chatbot using Natural Language Processing to provide human-like conversational experiences.',
    technologies: ['Python', 'NLTK', 'Regex', 'Scikit-learn', 'Jupyter', 'Streamlit'],
    problem: 'Users need a lightweight conversational interface that can understand common questions and respond consistently.',
    solution: 'Built an NLP chatbot using pattern matching, text processing, and machine learning components.',
    architecture: ['Python NLP pipeline', 'NLTK and regex-based text processing', 'Scikit-learn model experimentation', 'Jupyter for analysis and Streamlit for interaction'],
    impact: ['Demonstrates machine learning experimentation', 'Shows end-to-end AI product prototyping', 'Connects research workflow with user-facing output'],
  },
];

export const capabilities: Capability[] = [
  {
    title: 'Full-stack product engineering',
    description: 'I build end-to-end interfaces and services that connect user needs with reliable data flows.',
    evidence: ['React, Express, Node.js, MongoDB', 'Real-time ride-sharing and portfolio systems', 'Email, routing, persistence, and API integration'],
  },
  {
    title: 'AI and machine learning',
    description: 'I apply generative AI and ML techniques to make products more conversational and useful.',
    evidence: ['Gemini AI, TensorFlow, Pandas, Scikit-learn', 'Fine-tuned conversational assistant', 'NLP chatbot and semantic question tracking'],
  },
  {
    title: 'Algorithmic problem solving',
    description: 'I use competitive programming to sharpen speed, correctness, and systems-level thinking.',
    evidence: ['LeetCode, CodeChef, Codeforces', 'C++ and Python problem solving', 'Structured practice across platforms'],
  },
  {
    title: 'Automation and cross-platform delivery',
    description: 'I turn repetitive workflows into usable tools across web, mobile, and messaging channels.',
    evidence: ['Flutter and Dart', 'WhatsApp automation with Flask', 'SQLite-backed educational workflows'],
  },
];

export const certifications = [
  { name: 'OOPs in C++', org: 'Codechef', image: 'sources/oops.jpeg' },
  { name: 'Foundational Generative AI', org: 'iNeuron', image: 'sources/genai.png' },
  { name: 'Flutter and Dart', org: 'Udemy', image: 'sources/flutter.jpg' },
  { name: 'Full Stack Development', org: 'Mimo org', image: 'sources/mern.jpeg' },
  { name: 'AWS', org: 'Scaler Academy', image: 'sources/AWS.jpeg' },
];

export const codingProfiles = [
  { name: 'LeetCode', url: 'https://leetcode.com/u/rcharantej928/' },
  { name: 'CodeChef', url: 'https://www.codechef.com/users/charantej928' },
  { name: 'Codeforces', url: 'https://codeforces.com/profile/RCTR' },
];
