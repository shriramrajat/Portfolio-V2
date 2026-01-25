import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="py-12 md:py-24 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12 md:gap-20">
            <div className="flex-1">
              <h1 className="mb-6 text-4xl md:text-6xl font-bold tracking-tight">Rajat Shriram</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                I build backend systems with FastAPI and PostgreSQL, and practice photography as a disciplined creative craft.
              </p>
              <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-xl leading-relaxed">
                I build backend systems with strong foundations, preparing them for scale and operational reliability.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn-primary text-lg px-8 py-3">
                  Engineering Projects
                </Link>
                <Link to="/photography" className="btn-secondary text-lg px-8 py-3">
                  Photography
                </Link>
              </div>
            </div>

            {/* Profile image */}
            <div className="flex-shrink-0 flex justify-center md:justify-end">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-muted border border-border overflow-hidden shadow-sm rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/profile-pic.jpeg"
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
