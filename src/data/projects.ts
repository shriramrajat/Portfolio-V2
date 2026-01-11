export interface Project {
    id: string;
    name: string;
    problem: string;
    stack: string[];
    scope: string;
    status: "complete" | "in-progress" | "planned";
    overview: string;
    motivation: string;
    architecture: string;
    techDetails: { category: string; value: string }[];
    challenges: string[];
    learnings: string[];
    screenshots?: string[];
    links: {
        github?: string;
        demo?: string;
    };
}

export const projects: Project[] = [
    {
        id: "project-1",
        name: "Healthcare Management System",
        problem: "Managing chronic health data such as medications, symptoms, and appointments is fragmented and difficult for patients to track consistently.",
        stack: ["React", "TypeScript", "Firebase"],
        scope: "Personal Project",
        status: "complete",
        overview: "A web-based healthcare management system designed to help patients track chronic health information such as medications, symptoms, and appointments in one place. The application provides authenticated user access, offline support, and structured health data storage for long-term tracking.",
        motivation: "I wanted to understand how real-world applications manage sensitive user data, state-heavy interfaces, and reliability concerns such as offline access. Healthcare was a meaningful domain where correctness, structure, and usability matter more than visual complexity.",
        architecture: "Client-side React application using Firebase for authentication, data storage, and backend services, following a frontend-driven architecture with managed backend infrastructure.",
        techDetails: [
            { category: "Frontend", value: "React 18 with TypeScript for type-safe UI development" },
            { category: "Backend Services", value: "Firebase Authentication and Firestore for user management and data persistence" },
            { category: "Tooling", value: "Vite for fast builds and development workflow" }
        ],
        challenges: [
            "Designing data models in Firestore that could support multiple health records while remaining query-efficient",
            "Handling offline usage and ensuring data synchronization without conflicts"
        ],
        learnings: [
            "How frontend architecture decisions impact data modeling and backend service usage",
            "The importance of validation, authentication, and structured state management in applications handling sensitive data"
        ],
        screenshots: [
            "/placeholder.svg",
            "/placeholder.svg"
        ],
        links: {
            github: "https://github.com/shriramrajat/HealthCare",
            demo: "https://health-care-alpha-two.vercel.app/"
        }
    },
    {
        id: "project-2",
        name: "Memory Capsule",
        problem: "Personal memories and reflections are often created without intentional delay, reducing their long-term emotional or reflective value.",
        stack: ["React", "TypeScript", "Firebase"],
        scope: "Personal Project",
        status: "complete",
        overview: "A minimal web application that allows users to create encrypted memory capsules which unlock only on a specified future date. The system focuses on simplicity, client-side encryption, and time-based access control to ensure memories remain private until their intended reveal.",
        motivation: "I wanted to explore how time-based constraints and client-side encryption could be applied to personal data while maintaining a clean and simple user experience. The project also served as an opportunity to understand trust boundaries in frontend-driven applications.",
        architecture: "Frontend-driven React application with client-side encryption, using Firebase for authentication and encrypted data storage, without exposing sensitive data in plaintext to backend services.",
        techDetails: [
            { category: "Frontend", value: "React with TypeScript for predictable state and type safety" },
            { category: "Security", value: "Client-side encryption before data storage" },
            { category: "Backend Services", value: "Firebase Authentication and Firestore for user management and persistence" }
        ],
        challenges: [
            "Implementing client-side encryption while keeping the user experience simple and reliable",
            "Handling time-based access logic without relying on server-side enforcement"
        ],
        learnings: [
            "How trust boundaries shift when encryption is handled entirely on the client",
            "The importance of clear data flow and constraints when building time-dependent features"
        ],
        links: {
            github: "https://github.com/shriramrajat/MeroryCapsuleAi",
            demo: "https://memorycapsulee.netlify.app/"
        }
    },
    {
        id: "project-3",
        name: "Smart Darshan Slot Booking System",
        problem: "Manual darshan booking and crowd control in temples leads to long wait times, poor capacity utilization, and safety risks during peak hours.",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
        scope: "Team Project",
        status: "in-progress",
        overview: "A full-stack web application for managing temple darshan bookings through time-based slots, QR-based entry verification, and role-based access for devotees, staff, and administrators. The system centralizes booking, validation, and monitoring to reduce crowd congestion and improve operational visibility.",
        motivation: "The project was built to address real-world crowd management and scheduling issues in high-footfall religious spaces, where safety, predictability, and operational clarity are critical. It also provided an opportunity to work on a role-driven system with real database constraints and operational workflows.",
        architecture: "Monolithic full-stack application built with Next.js App Router, using server-side API routes, PostgreSQL with Prisma ORM for data persistence, and role-based access control for devotees, staff, and administrators.",
        techDetails: [
            { category: "Frontend", value: "Next.js App Router with TypeScript for server-rendered and client components" },
            { category: "Backend", value: "Next.js API routes handling booking logic, QR verification, and admin operations" },
            { category: "Database", value: "PostgreSQL with Prisma ORM for schema enforcement and relational integrity" },
            { category: "Auth & Services", value: "NextAuth.js for authentication and Resend for transactional emails" }
        ],
        challenges: [
            "Designing slot and booking schemas that enforce capacity limits while remaining flexible for administrative changes",
            "Implementing reliable QR-based verification and role-based access without overcomplicating the system"
        ],
        learnings: [
            "How database schema design directly affects business rules like capacity control and booking validation",
            "Managing role-based workflows and permissions in a real-world multi-user system"
        ],
        links: {
            github: "https://github.com/shriramrajat/Temple-Crowd-Management"
        }
    }
];
