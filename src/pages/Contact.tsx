import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="section-spacing">
        <div className="container-narrow">
          <h1 className="mb-8">Contact</h1>

          <p className="text-foreground/80 mb-10 max-w-lg">
            Open to backend engineering internships, freelance projects, and relevant collaborations.
          </p>

          <div className="space-y-1">
            <a
              href="mailto:rajatshriram7@gmail.com"
              className="flex items-center gap-4 text-foreground hover:text-primary no-underline py-3 border-b border-border"
            >
              <span className="text-muted-foreground w-20 text-sm flex-shrink-0">Email</span>
              <span>rajatshriram7@gmail.com</span>
            </a>

            <a
              href="https://github.com/shriramrajat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-foreground hover:text-primary no-underline py-3 border-b border-border"
            >
              <span className="text-muted-foreground w-20 text-sm flex-shrink-0">GitHub</span>
              <span>github.com/shriramrajat</span>
            </a>

            <a
              href="https://www.linkedin.com/in/shriramrajat/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-foreground hover:text-primary no-underline py-3"
            >
              <span className="text-muted-foreground w-20 text-sm flex-shrink-0">LinkedIn</span>
              <span>linkedin.com/in/shriramrajat</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
