import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";

const ProjectDetail = () => {
  const { id } = useParams();

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

          <h1 className="mb-2">[Project Name]</h1>
          <p className="text-muted-foreground mb-10 m-0">[Project ID: {id}]</p>

          {/* Overview */}
          <section className="mb-10">
            <h2 className="section-heading">Overview</h2>
            <p className="max-w-2xl text-foreground m-0">
              [2-3 sentence overview placeholder — what the project does and its primary function]
            </p>
          </section>

          {/* Why */}
          <section className="mb-10">
            <h2 className="section-heading">Why this project exists</h2>
            <p className="max-w-2xl text-foreground m-0">
              [Motivation placeholder — the problem you identified and why it mattered to you]
            </p>
          </section>

          {/* Architecture */}
          <section className="mb-10">
            <h2 className="section-heading">Architecture</h2>
            <div 
              className="border border-border p-8 flex items-center justify-center text-muted-foreground text-sm min-h-[160px]"
              role="img"
              aria-label="Architecture diagram placeholder"
            >
              [Architecture diagram placeholder]
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-10">
            <h2 className="section-heading">Tech Stack</h2>
            <ul className="space-y-2 list-none m-0 p-0">
              <li className="flex gap-4">
                <span className="text-primary w-24 flex-shrink-0 font-medium">[Category]</span>
                <span className="text-foreground/80">[Technology choice and brief reason]</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary w-24 flex-shrink-0 font-medium">[Category]</span>
                <span className="text-foreground/80">[Technology choice and brief reason]</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary w-24 flex-shrink-0 font-medium">[Category]</span>
                <span className="text-foreground/80">[Technology choice and brief reason]</span>
              </li>
            </ul>
          </section>

          {/* Challenges */}
          <section className="mb-10">
            <h2 className="section-heading">Key Challenges</h2>
            <ul className="space-y-3 max-w-2xl list-none m-0 p-0">
              <li className="list-dash">
                <span className="list-dash-marker">—</span>
                <span className="text-foreground/80">[Challenge 1 placeholder]</span>
              </li>
              <li className="list-dash">
                <span className="list-dash-marker">—</span>
                <span className="text-foreground/80">[Challenge 2 placeholder]</span>
              </li>
            </ul>
          </section>

          {/* Learnings */}
          <section className="mb-10">
            <h2 className="section-heading">What I learned</h2>
            <ul className="space-y-3 max-w-2xl list-none m-0 p-0">
              <li className="list-dash">
                <span className="list-dash-marker">—</span>
                <span className="text-foreground/80">[Learning 1 placeholder]</span>
              </li>
              <li className="list-dash">
                <span className="list-dash-marker">—</span>
                <span className="text-foreground/80">[Learning 2 placeholder]</span>
              </li>
            </ul>
          </section>

          {/* Links */}
          <section>
            <h2 className="section-heading">Links</h2>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="btn-secondary">
                GitHub Repository
              </a>
              <a href="#" className="btn-secondary">
                Live Demo
              </a>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
};

export default ProjectDetail;
