import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import NotFound from "./NotFound";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <NotFound />;
  }

  return (
    <Layout>
      <article className="section-spacing">
        <div className="container-narrow">
          <Link
            to="/projects"
            className="text-sm text-muted-foreground hover:text-primary mb-8 inline-block no-underline"
          >
            ← Back to projects
          </Link>

          <h1 className="mb-2">{project.name}</h1>
          <p className="text-muted-foreground mb-10 m-0">{project.scope} • {project.status}</p>

          {/* Overview */}
          <section className="mb-10">
            <h2 className="section-heading">Overview</h2>
            <p className="max-w-2xl text-foreground m-0">
              {project.overview}
            </p>
          </section>

          {/* Why */}
          <section className="mb-10">
            <h2 className="section-heading">Why this project exists</h2>
            <p className="max-w-2xl text-foreground m-0">
              {project.motivation}
            </p>
          </section>

          {/* Architecture */}
          <section className="mb-10">
            <h2 className="section-heading">Architecture</h2>
            <div
              className="border border-border p-8 flex items-center justify-center text-muted-foreground text-sm min-h-[160px] bg-muted/30"
              role="img"
              aria-label="Architecture diagram description"
            >
              {project.architecture}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-10">
            <h2 className="section-heading">Tech Stack</h2>
            <ul className="space-y-2 list-none m-0 p-0">
              {project.techDetails.map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span className="text-primary w-24 flex-shrink-0 font-medium">{item.category}</span>
                  <span className="text-foreground/80">{item.value}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges */}
          <section className="mb-10">
            <h2 className="section-heading">Key Challenges</h2>
            <ul className="space-y-3 max-w-2xl list-none m-0 p-0">
              {project.challenges.map((challenge, i) => (
                <li key={i} className="list-dash">
                  <span className="list-dash-marker">—</span>
                  <span className="text-foreground/80">{challenge}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Learnings */}
          <section className="mb-10">
            <h2 className="section-heading">What I learned</h2>
            <ul className="space-y-3 max-w-2xl list-none m-0 p-0">
              {project.learnings.map((learning, i) => (
                <li key={i} className="list-dash">
                  <span className="list-dash-marker">—</span>
                  <span className="text-foreground/80">{learning}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <section className="mb-10">
              <h2 className="section-heading">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.screenshots.map((src, i) => (
                  <div key={i} className="aspect-video bg-muted border border-border overflow-hidden">
                    <img
                      src={src}
                      alt={`Screenshot ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Links */}
          <section>
            <h2 className="section-heading">Links</h2>
            <div className="flex flex-wrap gap-3">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  GitHub Repository
                </a>
              )}
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  Live Demo
                </a>
              )}
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
};

export default ProjectDetail;
