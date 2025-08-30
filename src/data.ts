export interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
}

export const timelineData: TimelineItem[] = [
  {
    title: "Bachelor of Computer Applications",
    subtitle: "Maharana Pratap College, Kanpur | CGPA 7.24",
    date: "2022 - Present",
  },
  {
    title: "Languages & Frameworks",
    subtitle: "HTML, CSS, JavaScript, React, Tailwind",
    date: "2019 - Present",
  },
  {
    title: "Soft Skills",
    subtitle: "Problem Solving, Communication, Collaboration",
    date: "2019 - Present",
  },
  {
    title: "Tools & Platforms",
    subtitle: "Git, GitHub, VS Code, Netlify, Vercel, AWS (Basic)",
    date: "2020 - Present",
  },
  {
    title: "Certifications",
    subtitle: "freeCodeCamp Full Stack, Semrush SEO, TCS ION Career Skills",
    date: "2023 - 2025",
  },
];

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "SnapFetch - Image Search Engine",
    description:
      "Responsive image search engine using Unsplash and Pixabay APIs with infinite scroll and live search.",
    image: "https://source.unsplash.com/random/800x600?abstract",
    tech: ["React", "Tailwind", "API", "Vercel"],
    link: "https://snapfetch.vercel.app",
  },
  {
    title: "To-Do App",
    description:
      "CRUD To-Do list with local storage integration, built with React and Tailwind.",
    image: "https://source.unsplash.com/random/800x600?todo",
    tech: ["React", "Tailwind"],
  },
  {
    title: "Weather App",
    description: "Real-time weather app using OpenWeatherMap API.",
    image: "https://source.unsplash.com/random/800x600?weather",
    tech: ["JavaScript", "API"],
  },
];