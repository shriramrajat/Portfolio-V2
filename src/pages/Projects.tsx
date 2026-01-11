import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { projects } from "@/data/projects";

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
