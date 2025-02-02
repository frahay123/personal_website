const projects = [
  { name: "Portfolio Website", description: "Built with Next.js and Tailwind CSS" },
  { name: "E-Commerce App", description: "A fully-featured shopping platform" },
  { name: "Blog Platform", description: "A platform for creating and sharing blog posts" },
  { name: "Social Media App", description: "A social media platform with user authentication and posts" },
  { name: "Task Management App", description: "A tool for organizing tasks and projects" },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold">{project.name}</h2>
            <p className="text-gray-400 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}