import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

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
      <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container-narrow py-4 flex items-center justify-between md:block" aria-label="Main navigation">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex flex-wrap gap-x-6 gap-y-2 text-sm list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`no-underline font-medium ${location.pathname === link.path
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

          {/* Mobile Navigation */}
          <div className="md:hidden flex w-full justify-between items-center">
            <span className="font-medium text-sm">Menu</span>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="-mr-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.path}>
                      <Link
                        to={link.path}
                        className={`text-lg font-medium ${location.pathname === link.path
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground"
                          }`}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border py-8 mt-auto">
        <div className="container-narrow text-sm text-muted-foreground">
          <p className="m-0">© {new Date().getFullYear()} Rajat Shriram</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
