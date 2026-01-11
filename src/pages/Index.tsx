import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="py-8 md:py-16 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10 md:gap-16">
            <div className="flex-1">
              <h1 className="mb-4">Rajat Shriram</h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-xl">
                I build backend systems with FastAPI and PostgreSQL, and practice photography as a disciplined creative craft.
              </p>
              <p className="text-foreground/80 mb-10 max-w-lg">
                I build backend systems with strong foundations, preparing them for scale and operational reliability.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link to="/projects" className="btn-primary">
                  Engineering Projects
                </Link>
                <Link to="/photography" className="btn-secondary">
                  Photography
                </Link>
              </div>
            </div>

            {/* Profile image */}
            <div className="flex-shrink-0 flex justify-center md:justify-end">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-muted border border-border overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Profile photo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
