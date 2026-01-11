import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

interface Project {
  id: string;
  name: string;
  problem: string;
  stack: string[];
  scope: string;
  status: "complete" | "in-progress" | "planned";
}

const projects: Project[] = [
  {
    id: "project-1",
    name: "[Project Name 1]",
    problem: "[One-line problem statement placeholder]",
    stack: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
    scope: "[Scope placeholder — e.g., Personal / Academic / Freelance]",
    status: "complete",
  },
  {
    id: "project-2",
    name: "[Project Name 2]",
    problem: "[One-line problem statement placeholder]",
    stack: ["[Tech 1]", "[Tech 2]"],
    scope: "[Scope placeholder]",
    status: "in-progress",
  },
  {
    id: "project-3",
    name: "[Project Name 3]",
    problem: "[One-line problem statement placeholder]",
    stack: ["[Tech 1]", "[Tech 2]", "[Tech 3]", "[Tech 4]"],
    scope: "[Scope placeholder]",
    status: "planned",
  },
];

const statusLabel = {
  complete: "Complete",
  "in-progress": "In Progress",
  planned: "Planned",
};

const Projects = () => {
  return (
    <Layout>
      <section className="section-spacing">
        <div className="container-narrow">
          <h1 className="mb-10">Projects</h1>

          <div className="space-y-5">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="card-link"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h2 className="text-base md:text-lg text-foreground m-0">{project.name}</h2>
                  <span className="tag-filled">{statusLabel[project.status]}</span>
                </div>

                <p className="text-muted-foreground mb-4 m-0">{project.problem}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="tag">{tech}</span>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground m-0">{project.scope}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
