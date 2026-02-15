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
        name: "AI Resume Analyzer",
        problem: "Recruitment AI tools are often 'black boxes' that suffer from hallucinations, bias, and lack of explainability, making it impossible to trust their automated rejections.",
        stack: ["FastAPI", "Python", "PostgreSQL", "React", "OpenAI"],
        scope: "Engineering Project",
        status: "complete",
        overview: "A production-grade resume analysis system that prioritizes determinism and transparency over 'AI Magic'. It uses a strict pipeline where structure extraction and scoring are rule-based, and LLMs are restricted solely to explaining the results, ensuring 100% reproducibility and no hallucinations.",
        motivation: "I wanted to challenge the trend of 'wrapping everything in an LLM' by building a system where critical logic remains deterministic. Acceptance decisions in recruitment are high-stakes, and I believe they require mathematical auditability, not probabilistic guessing.",
        architecture: "Pipeline architecture with strict separation of concerns: Ingestion (pdfplumber) → Deterministic Parsing & Ontology Matching (No AI) → Weighted Scoring Formula → Explanation Layer (LLM). AI is explicitly banned from the scoring layer.",
        techDetails: [
            { category: "Backend", value: "FastAPI with Python for logic-heavy processing and background tasks" },
            { category: "Database", value: "PostgreSQL with strict schemas for resumes, jobs, and results" },
            { category: "Core Logic", value: "Custom matching engine using weighted formulas (70% Skill, 30% Experience)" },
            { category: "AI Strategy", value: "LLM (OpenAI) restricted to 'Explanation Layer' only; banned from scoring" }
        ],
        challenges: [
            "Building a robust heuristic parser for PDFs that outperforms AI vision models in speed and cost",
            "Defining a 'Skill Ontology' that captures nuances without hallucinating matches",
            "Enforcing strict architectural boundaries to prevent 'AI creep' into the deterministic scoring layer"
        ],
        learnings: [
            "The power of 'Sandboxed AI': Using LLMs only where their creativity adds value, not where their randomness creates risk",
            "Designing mathematical scoring models that align with human recruiter intuition",
            "How to architect for 'Explainability' as a first-class feature, not an afterthought"
        ],
        links: {
            github: "https://github.com/shriramrajat/AiResumeAnalyzer"
        }
    },
    {
        id: "project-4",
        name: "API Monitor System",
        problem: "Synchronous logging creates latency bottlenecks. If the database slows down, user experience suffers. additionally, querying millions of log rows linearly for debugging makes forensics painfully slow.",
        stack: ["FastAPI", "Python", "PostgreSQL", "AsyncPG", "OpenAI"],
        scope: "Engineering Project",
        status: "complete",
        overview: "A high-performance, asynchronous API logging and monitoring architecture built with FastAPI. It intercepts requests via middleware and offloads logging to background tasks to ensure zero latency impact. Features include read-optimized composite indices, background aggregation for dashboards, and AI-driven incident summarization.",
        motivation: "I operated on the philosophy that 'Observability should never be the bottleneck.' I wanted to demonstrate a production-grade pipeline where high-volume logging/monitoring happens completely out-of-band from the critical user request path.",
        architecture: "Zero-overhead 'Wire Tap' architecture using Middleware + Background Tasks. Writes are asynchronous to avoid blocking response. Database uses composite indices for instant temporal queries. Aggregations are pre-computed by background workers.",
        techDetails: [
            { category: "Ingestion Strategy", value: "Middleware captures payload, hands off to background task (Zero-Overhead)" },
            { category: "Database Design", value: "PostgreSQL with composite indices (timestamp, status_code) for fast filtering" },
            { category: "Optimization", value: "Pre-computed aggregation tables for instant dashboard loading" },
            { category: "AI Integration", value: "OpenAI used for explaining stack traces, not for detection (Human-in-the-loop)" }
        ],
        challenges: [
            "Designing a logging system that remains invisible to the main application's latency budget",
            "Handling large stack traces and preventing database bloat through intelligent truncation",
            "Balancing write-heavy ingestion with read-heavy dashboard queries using specific indexing strategies"
        ],
        learnings: [
            "How to strictly decouple non-critical write operations from the user request loop",
            "Deep understanding of database indexing strategies for time-series + attribute queries",
            "The distinction between detection (Math) and explanation (AI) in observability systems"
        ],
        links: {
            github: "https://github.com/shriramrajat/APIMoniterSystem"
        }
    },
    {
        id: "project-5",
        name: "SentinelAuth",
        problem: "Managing identity, authentication, and granular permissions across multiple applications is complex, prone to security vulnerabilities, and often leads to duplicated logic and fractured trust boundaries.",
        stack: ["FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "Alembic", "JWT"],
        scope: "Engineering Project",
        status: "complete",
        overview: "A centralized identity and access control service designed to handle user authentication, role-based permission enforcement, and secure session management. It serves as a dedicated source of truth for identity, abstracting complex security logic away from client applications.",
        motivation: "I wanted to build a production-ready authentication system from first principles to deeply understand security patterns like JWT rotation, RBAC, and session management, rather than relying on 'magic' third-party providers.",
        architecture: "Strict layered architecture (API → Service → Repository → Database) ensuring separation of concerns. Uses JWT for stateless access with stateful refresh tokens for session control, backed by PostgreSQL and SQLAlchemy.",
        techDetails: [
            { category: "Backend Architecture", value: "FastAPI with a strict Service-Repository pattern for modularity" },
            { category: "Security", value: "Bcrypt hashing, JWT access tokens, and rotating refresh tokens" },
            { category: "Database", value: "PostgreSQL with SQLAlchemy ORM and Alembic for reliable migrations" },
            { category: "Authorization", value: "Granular Role-Based Access Control (RBAC) middleware" }
        ],
        challenges: [
            "Implementing a secure refresh token rotation strategy that handles race conditions and multi-device sessions",
            "Designing a flexible RBAC system that allows granular permission enforcement without cluttering business logic",
            "maintaining strict architectural boundaries to ensure testability and prevent circular dependencies"
        ],
        learnings: [
            "The intricacies of modern auth flows: Token lifecycles, rotation, and revocation strategies",
            "How to implement the Repository pattern in Python to decouple database logic from business rules",
            "Managing database schema evolution in a team environment using Alembic migrations"
        ],
        links: {
            github: "https://github.com/shriramrajat/SentinelAuth"
        }
    },
    {
        id: "project-6",
        name: "SentinelRate",
        problem: "Rate limiting without identity is blind. Standard decorators often fail to distinguish between abusive bot traffic and legitimate heavy users, leading to either porous security or poor user experience.",
        stack: ["FastAPI", "Python", "Middleware", "Token Bucket"],
        scope: "Engineering Project",
        status: "complete",
        overview: "A high-performance Layer 7 Rate Limiting Middleware designed to protect FastAPI applications from abuse, bursts, and denial-of-service scenarios. Unlike simple decorators, SentinelRate sits at the edge of your application, acting as a decision engine that filters traffic before it reaches your business logic.",
        motivation: "I wanted to build a rate limiter that is 'Identity First'—applying strict limits to anonymous IPs while allowing flexibility for authenticated users. The goal was to create a zero-latency decision engine that feels invisible to legitimate users but impenetrable to abusers.",
        architecture: "Middleware pipeline architecture using a Token Bucket algorithm. It features a Dual-Resolution Identity system (JWT + IP), a zero-latency decision engine using time.monotonic(), and an automatic garbage collector for memory safety.",
        techDetails: [
            { category: "Core Algorithm", value: "Stateful Token Bucket algorithm allowing controlled bursts" },
            { category: "Identity Resolution", value: "Dual-Resolution: JWT for users (1000 req/m) vs IP for anon (100 req/m)" },
            { category: "Observability", value: "Real-time /metrics endpoint and standard RateLimit headers" },
            { category: "Performance", value: "Zero-latency design with O(1) decision time and memory-safe garbage collection" }
        ],
        challenges: [
            "Designing a decision engine that adds near-zero latency to the request path",
            "Implementing a Token Bucket algorithm correctly using monotonic time to prevent drift",
            "Preventing memory leaks from millions of tracking buckets during random-IP DDoS attacks"
        ],
        learnings: [
            "The critical difference between static IP rate limiting and identity-aware traffic control",
            "How to implement high-performance middleware that handles state safely",
            "The importance of memory management patterns in long-running Python services"
        ],
        links: {
            github: "https://github.com/shriramrajat/SentinelRate"
        }
    },
    {
        id: "project-7",
        name: "SentinelStack v1",
        problem: "Building distinct layers for authentication, rate limiting, and observability across microservices leads to fragmented infrastructure and code duplication. Generic reverse proxies often lack the application-aware context needed for granular control, forcing developers to reinvent security wheels in every service.",
        stack: ["Python", "FastAPI", "Redis", "PostgreSQL", "Prometheus", "Grafana", "Docker"],
        scope: "Engineering Project",
        status: "in-progress",
        overview: "A production-oriented API Gateway designed to be the hard outer shell of application infrastructure. It sits in front of business logic, providing a unified layer for identity management, deterministic rate limiting, and intelligent observability. Unlike generic proxies, SentinelStack integrates these controls directly into the request lifecycle, ensuring that cross-cutting concerns are handled before traffic reaches the core application.",
        motivation: "I wanted to move beyond simple reverse proxies and build a 'smart' gateway that enforces security and observability invariants by design. My goal was to create a unified infrastructure layer that guarantees every request is authenticated, rate-limited, and measured before it ever touches business logic.",
        architecture: "Gateway-First design philosophy. The system uses a middleware pipeline where traffic is first verified by a dual-resolution identity system (JWT/IP), then throttled by a Redis-backed Token Bucket limiter, and finally logged via an asynchronous sidecar pattern to Prometheus. All components represent a cohesive, production-ready stack running on Docker.",
        techDetails: [
            { category: "Core Framework", value: "Python 3.10+, FastAPI, Pydantic for high-performance async I/O" },
            { category: "Database", value: "PostgreSQL (AsyncPG) with SQLAlchemy 2.0" },
            { category: "Traffic Control", value: "Redis (AsyncIO) + Lua Scripts for atomic, deterministic Rate Limiting" },
            { category: "Observability", value: "Prometheus for metrics scraping & Grafana for real-time visualization" },
            { category: "Infrastructure", value: "Docker Compose & GitHub Actions for automated CI/CD pipelines" }
        ],
        challenges: [
            "Ensuring rate limiting decision logic is atomic and race-condition free using Redis Lua scripts",
            "Integrating a full monitoring stack (Prometheus/Grafana) without introducing latency to the request path",
            "Designing a CI/CD pipeline that reliably tests full integration flows (Signup → Login → Rate Limit) in ephemeral containers"
        ],
        learnings: [
            "The architectural power of handling cross-cutting concerns at the gateway level rather than in individual services",
            "How to use Lua scripts to extend Redis functionality for complex, atomic operations",
            "The operational complexity and benefits of managing a multi-container observability stack with Docker"
        ],
        links: {
            github: "https://github.com/shriramrajat/sentinelstack"
        }
    }
];
