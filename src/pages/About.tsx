import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <article className="section-spacing">
        <div className="container-narrow">
          <h1 className="mb-10">About</h1>

          {/* Intro */}
          <section className="mb-14">
            <h2 className="section-heading">Introduction</h2>
            <p className="max-w-2xl text-foreground">
              I’m a second-year ENTC engineering student based in India, focused on building reliable backend systems. I value clarity, discipline, and understanding fundamentals deeply rather than rushing toward surface-level complexity.
            </p>
          </section>

          {/* Engineering */}
          <section className="mb-14">
            <h2 className="section-heading">Engineering</h2>
            <div className="space-y-3 max-w-2xl">
              <p className="text-foreground">Undergraduate Student Electronics and Telecommunication Engineering (Second Year)</p>
              <p className="text-foreground/80">Backend APIs · Databases · System Fundamentals · Deployment Readiness</p>
              <p className="text-foreground/80">Python · FastAPI · PostgreSQL · C++ · Git</p>
            </div>
          </section>

          {/* Photography */}
          <section className="mb-14">
            <h2 className="section-heading">Photography</h2>
            <div className="space-y-3 max-w-2xl">
              <p className="text-foreground">I started photography as a way to slow down and observe more carefully, initially during travel and everyday moments. Over time, it became a disciplined practice focused on portraits, nature, and capturing quiet authenticity.</p>
              <p className="text-foreground/80">I primarily shoot portraits, travel scenes, and natural environments, focusing on people and places in their unposed, everyday context.</p>
              <p className="text-foreground/80">I work slowly and deliberately, paying attention to light, composition, and timing.</p>
            </div>
          </section>

          {/* Bridge */}
          <section className="mb-8">
            <h2 className="section-heading">How photography improves my engineering</h2>
            <ul className="space-y-3 max-w-2xl list-none m-0 p-0">
              <li className="list-dash">
                <span className="list-dash-marker">—</span>
                <span className="text-foreground/80">Patience and attention to detail developed through photography help me debug systems carefully and avoid rushed assumptions.</span>
              </li>
              <li className="list-dash">
                <span className="list-dash-marker">—</span>
                <span className="text-foreground/80">Working within compositional constraints in photography helps me design systems with clearer structure and intentional boundaries.</span>
              </li>
              <li className="list-dash">
                <span className="list-dash-marker">—</span>
                <span className="text-foreground/80">Photography reinforces a minimalist approach to designing clean, focused systems.</span>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </Layout>
  );
};

export default About;
