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
              [Short human intro placeholder — 2-3 sentences about who you are as a person, 
              not your resume. What drives you, where you're based, what you value.]
            </p>
          </section>

          {/* Engineering */}
          <section className="mb-14">
            <h2 className="section-heading">Engineering</h2>
            <div className="space-y-3 max-w-2xl">
              <p className="text-foreground">[Current education/role placeholder]</p>
              <p className="text-foreground/80">[Technical focus areas placeholder — e.g., distributed systems, APIs, databases]</p>
              <p className="text-foreground/80">[Key technologies placeholder — languages and tools you use most]</p>
            </div>
          </section>

          {/* Photography */}
          <section className="mb-14">
            <h2 className="section-heading">Photography</h2>
            <div className="space-y-3 max-w-2xl">
              <p className="text-foreground">[When/how you started placeholder]</p>
              <p className="text-foreground/80">[What you shoot placeholder — genres, subjects]</p>
              <p className="text-foreground/80">[Your approach placeholder — what matters to you in photography]</p>
            </div>
          </section>

          {/* Bridge */}
          <section className="mb-8">
            <h2 className="section-heading">How photography improves my engineering</h2>
            <ul className="space-y-3 max-w-2xl list-none m-0 p-0">
              <li className="list-dash">
                <span className="list-dash-marker">—</span>
                <span className="text-foreground/80">[Point 1 placeholder — e.g., patience and attention to detail]</span>
              </li>
              <li className="list-dash">
                <span className="list-dash-marker">—</span>
                <span className="text-foreground/80">[Point 2 placeholder — e.g., understanding constraints breeds creativity]</span>
              </li>
              <li className="list-dash">
                <span className="list-dash-marker">—</span>
                <span className="text-foreground/80">[Point 3 placeholder — e.g., composition thinking applies to system design]</span>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </Layout>
  );
};

export default About;
