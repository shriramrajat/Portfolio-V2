import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/photography", label: "Photography" },
  { path: "/contact", label: "Contact" },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border">
        <nav className="container-narrow py-4" aria-label="Main navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`no-underline font-medium ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={location.pathname === link.path ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border py-8 mt-auto">
        <div className="container-narrow text-sm text-muted-foreground">
          <p className="m-0">© {new Date().getFullYear()} [Your Name]</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
