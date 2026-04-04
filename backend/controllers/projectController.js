// Sample projects data - you can replace this with a database later
const projects = [
  {
    id: 1,
    title: "Campus Guide Website",
    description: "Interactive platform to help students navigate the college campus effectively.",
    tech: ['React', 'JavaScript', 'CSS'],
    link: "https://github.com/Parth2024P/Campus_guide",
    liveLink: "https://project1.com",
    image: "/project1.jpg",
  },
  {
    id: 2,
    title: "Project Title 2",
    description: "Another awesome project",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    link: "https://github.com/yourname/project2",
    liveLink: "https://project2.com",
    image: "/project2.jpg",
  },
  {
    id: 3,
    title: "Project Title 3",
    description: "Third project description",
    tech: ["Vue.js", "Express", "Firebase"],
    link: "https://github.com/yourname/project3",
    liveLink: "https://project3.com",
    image: "/project3.jpg",
  },
];

export const getProjects = (req, res) => {
  res.json(projects);
};
