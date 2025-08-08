import { Icons } from "@/components/icons";
import { Description } from "@radix-ui/react-dialog";
import { url } from "inspector";
import { HomeIcon, NotebookIcon, ThumbsDown, VideoIcon, FolderIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Rahul Rathod",
  initials: "RR",
  url: "mailto:raaulc@outlook.com",
  location: "Leeds, UK",
  locationLink: "https://www.google.com/maps/place/Leeds,+UK",
  description:
    "Frontend Engineer | React Specialist | TypeScript | Performance-Driven UI | Real-time Integrations | Sports & Gaming Platforms | Backend Collaboration",
    summary: "Frontend Engineer with 14+ years of experience designing and shipping user-facing experiences across web and mobile platforms. Strong expertise in React, TypeScript, and JavaScript with proven ability to deliver fast, responsive UIs that engage customers. Experienced in high-traffic, performance-sensitive domains including sports betting, gaming, and retail platforms. Skilled at collaborating with backend/infra teams using Java, Spring, Kafka, MySQL, AWS, and Kubernetes. Demonstrated track record of planning and shipping frontend solutions with layered architecture, observability, and delivery confidence.",
    avatarUrl: "/favicons/profile-pic.jpeg",
  skills: [
    "React 18+",
    "TypeScript",
    "JavaScript (ES6+)",
    "Node.js",
    "Next.js",
    "React Native",
    "Performance Optimization",
    "UI/UX Design",
    "Responsive Design",
    "WebSocket",
    "Real-time Integrations",
    "State Management",
    "Component Architecture",
    "Testing (Jest, RTL)",
    "Build Tools (Webpack, Vite)",
    "CSS-in-JS",
    "Tailwind CSS",
    "GraphQL",
    "REST APIs",
    "Micro Frontends",
    "PWA",
    "Accessibility (a11y)",
    "SEO",
    "CI/CD",
    "AWS",
    "Docker",
    "Kubernetes",
    "Monitoring",
    "Git",
    "Agile/Scrum"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/projects", icon: FolderIcon, label: "Projects" },
    { href: "/gadgets", icon: Icons.shop, label: "Gadgets" },
  ],
  contact: {
    email: "raaulc@outlook.com",
    tel: "+44-7424399000",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/raaulc",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raaulc/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:raaulc@outlook.com",
        icon: Icons.email,
        navbar: false,
      },
      downloadCV: {
        name: "Download CV",
    url: "https://drive.google.com/file/d/1U6hxDNF1U_Iq40Vo8k-2kKEPlmSI-rJM/view?usp=sharing",
        icon: Icons.files,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Sky Betting & Gaming",
      href: "https://www.skybettingandgaming.com",
      badges: [],
      location: "Leeds, UK",
      title: "Frontend Engineer - Customer Platform",
      logoUrl: "/atomic.png",
      start: "2023",
      end: "Present",
      description:
        "Leading frontend development for customer-facing platforms handling 10M+ daily transactions. Built responsive React-based interfaces with TypeScript, implementing real-time betting experiences using WebSocket connections and Kafka event streaming. Collaborated with Java/Spring backend teams to design APIs and ensure seamless integration. Optimized frontend performance achieving 95+ Lighthouse scores and sub-2s load times. Established component library and design system for UI consistency across 50+ features. Deployed one-button releases via AWS/ECR with comprehensive monitoring and incident response.",
    },
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer - Financial Services",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Developed React-based trading interfaces and responsive web applications for financial services platform. Built real-time trading dashboard with WebSocket connections and TypeScript for type safety. Created mobile-responsive interfaces for payment processing and account management. Collaborated with Java/Spring Boot backend teams to design RESTful APIs and GraphQL endpoints. Implemented comprehensive testing strategy with Jest and React Testing Library. Deployed frontend services on AWS with Kubernetes and established CI/CD pipelines for rapid iteration.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Frontend Engineer - Platform Services",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Built React-based admin interfaces and responsive web applications for Shopify's ecosystem. Developed TypeScript components for merchant dashboard and payment processing interfaces. Collaborated with backend teams to design APIs and ensure seamless integration. Implemented performance optimizations achieving 90+ Lighthouse scores. Created reusable component library and established frontend testing standards. Worked with cross-functional teams to deliver scalable solutions for 2M+ merchants.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Frontend Engineer - Cloud Gaming",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Developed React-based admin dashboard and responsive web interfaces for cloud gaming platform. Built real-time game streaming interface with WebSocket connections and TypeScript. Created mobile-responsive subscription management interface and user authentication flows. Collaborated with Java/Spring Boot backend teams to design APIs and ensure low-latency gaming experiences. Implemented performance optimizations for high-traffic gaming services across web and mobile platforms.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Frontend Engineer - Security Platform",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Built React-based security dashboard for real-time incident monitoring and responsive web interfaces. Developed TypeScript components for security orchestration platform with real-time event processing. Created mobile-responsive interfaces for security incident management. Collaborated with Java/Spring Boot backend teams to design APIs and ensure data protection compliance. Implemented comprehensive frontend testing and established security-focused UI patterns.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Frontend Engineer - Mobility Services",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Developed React-based interfaces and mobile-responsive web applications for mobility platform. Built real-time vehicle tracking dashboard with WebSocket connections and TypeScript. Created responsive web app for customer support and account management. Collaborated with Ruby on Rails backend teams to design APIs and ensure seamless user experiences. Implemented performance optimizations and established frontend testing standards for mobile-responsive applications.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Frontend Engineer - Financial Services",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Built React-based portfolio management dashboard and responsive web interfaces for financial services platform. Developed TypeScript components for financial data aggregation and authentication systems. Created mobile-responsive interfaces for account management and portfolio tracking. Collaborated with Ruby on Rails backend teams to design APIs and ensure financial compliance. Implemented security-focused UI patterns and comprehensive frontend testing.",
    },
  ],
  education: [
    {
      school: "Dharmsinh Desai University",
      href: "https://www.ddu.ac.in/",
      degree: "Bachelor of Engineering: Electronics and Communication",
      logoUrl: "",
      start: "05/2005",
      end: "05/2009",
      location: "Gujarat, India"
    }
  ],
  showProjects: false, // Set to true to show all projects, false to show only coming soon
  comingSoonProjects: [
    {
      title: "Coming Soon - More Frontend Projects",
      href: "#",
      dates: "2024",
      active: false,
      description:
        "Working on additional frontend engineering projects showcasing React/TypeScript expertise, performance optimization, and real-time integrations. More projects will be added soon featuring responsive web applications, mobile interfaces, and collaboration with backend teams for high-traffic platforms.",
      technologies: [
        "React 18+",
        "TypeScript",
        "Next.js",
        "Performance Optimization",
        "Real-time Integrations",
        "UI/UX Design",
        "Mobile Responsive",
        "Backend Collaboration"
      ],
      links: [
        {
          type: "Coming Soon",
          href: "#",
          icon: <Icons.github className="size-3" />,
        }
      ],
      features: [
        "React-based user interfaces",
        "Performance-optimized applications",
        "Real-time integrations",
        "Mobile-responsive design",
        "Backend team collaboration"
      ],
      image: "",
      video: "",
    }
  ],
  actualProjects: [
    {
      title: "Real-time Sports Betting Interface",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Designed and implemented high-performance React-based sports betting interface handling 1M+ daily users. Built real-time odds updates using WebSocket connections and TypeScript for type safety. Created responsive web interfaces for mobile and desktop platforms. Collaborated with Java/Spring Boot backend teams to design RESTful APIs and Kafka event streaming. Achieved 95+ Lighthouse scores with comprehensive performance optimization and established component library for UI consistency.",
      technologies: [
        "React 18+",
        "TypeScript",
        "WebSocket",
        "Kafka Integration",
        "Performance Optimization",
        "Responsive Design",
        "Component Library",
        "Jest Testing",
        "AWS Deployment",
        "Grafana Monitoring"
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        }
      ],
      features: [
        "Real-time odds updates with WebSocket",
        "Mobile-responsive betting interface",
        "Performance-optimized React components",
        "TypeScript for type safety",
        "Comprehensive testing with Jest",
        "Component library and design system"
      ],
      image: "",
      video: "",
    },
    {
      title: "Customer Dashboard & Analytics Platform",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Built comprehensive React-based customer dashboard with real-time analytics and responsive design. Implemented interactive charts and data visualization using TypeScript and modern React patterns. Created mobile-responsive interfaces for account management and transaction history. Collaborated with Java/Spring Boot backend teams to design GraphQL APIs and ensure seamless data integration. Achieved sub-2s load times with performance optimization and established monitoring with Grafana.",
      technologies: [
        "React 18+",
        "TypeScript",
        "GraphQL",
        "Data Visualization",
        "Responsive Design",
        "Performance Optimization",
        "Component Architecture",
        "Testing (Jest, RTL)",
        "AWS",
        "Grafana"
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        }
      ],
      features: [
        "Interactive analytics dashboard",
        "Real-time data visualization",
        "Mobile-responsive design",
        "GraphQL API integration",
        "Performance optimization",
        "Comprehensive testing"
      ],
      image: "",
      video: "",
    },
    {
      title: "Mobile-Responsive Gaming Platform",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Developed React-based gaming platform with mobile-responsive design and real-time features. Built interactive gaming interfaces using TypeScript and modern React patterns. Implemented real-time chat and social features with WebSocket connections. Created responsive web app for account management and game preferences. Collaborated with Java/Spring Boot backend teams to design APIs and ensure seamless gaming experiences. Achieved 90+ Lighthouse scores with performance optimization.",
      technologies: [
        "React 18+",
        "TypeScript",
        "WebSocket",
        "Mobile Responsive",
        "Real-time Features",
        "Performance Optimization",
        "Component Architecture",
        "Testing (Jest, RTL)",
        "AWS",
        "Kubernetes"
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        }
      ],
      features: [
        "Mobile-responsive gaming interface",
        "Real-time chat and social features",
        "Interactive gaming components",
        "Performance optimization",
        "Comprehensive testing",
        "Backend API integration"
      ],
      image: "",
      video: "",
    },
    {
      title: "E-commerce Admin Interface",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Built comprehensive React-based admin interface for e-commerce platform with real-time inventory management. Implemented responsive design for mobile and desktop admin panels. Created interactive product management interface with TypeScript and modern React patterns. Collaborated with Java/Spring Boot backend teams to design RESTful APIs and ensure seamless data integration. Achieved 95+ Lighthouse scores with performance optimization and established component library.",
      technologies: [
        "React 18+",
        "TypeScript",
        "REST APIs",
        "Responsive Design",
        "Admin Interface",
        "Performance Optimization",
        "Component Library",
        "Testing (Jest, RTL)",
        "AWS",
        "Docker"
      ],
      links: [
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
        }
      ],
      features: [
        "Responsive admin interface",
        "Real-time inventory management",
        "Interactive product management",
        "Performance optimization",
        "Component library",
        "Comprehensive testing"
      ],
      image: "",
      video: "",
    }
  ],
  get projects() {
    return this.showProjects ? this.actualProjects : this.comingSoonProjects;
  },
  blogs: [
    {
      title: "Building High-Performance React Applications",
      href: "https://medium.com/@raaulc/high-performance-react-apps",
      date: "2024-06-01",
      summary: "A comprehensive guide to optimizing React applications for high-concurrency scenarios, including performance techniques and real-time integrations."
    },
    {
      title: "Real-time Frontend Integrations with WebSocket",
      href: "https://medium.com/@raaulc/realtime-frontend-websocket",
      date: "2024-05-15",
      summary: "How to design and implement scalable real-time frontend experiences using WebSocket connections and event-driven architecture."
    },
    {
      title: "Frontend Testing Strategies for React Applications",
      href: "https://medium.com/@raaulc/frontend-testing-strategies",
      date: "2024-04-20",
      summary: "Best practices for testing React applications including unit tests, integration tests, and component testing with React Testing Library."
    },
    {
      title: "Performance Optimization Patterns for Frontend Services",
      href: "https://medium.com/@raaulc/frontend-performance-patterns",
      date: "2024-03-30",
      summary: "Advanced frontend performance optimization strategies to improve user experience and reduce load times in high-traffic applications."
    },
    {
      title: "Frontend Architecture for High-Scale User Experiences",
      href: "https://medium.com/@raaulc/frontend-architecture-user-experiences",
      date: "2024-08-20",
      summary: "Comprehensive guide to designing scalable frontend systems with practical patterns for high-concurrency user-facing applications."
    }
  ],
  likesBuilding: "I like building fast, responsive user interfaces that engage customers, with strong frontend foundations and seamless backend collaboration.",
  contactDetails: {
    email: "raaulc@outlook.com",
    tel: "+44-7424939000"
  },
  youtube: [
    {
      title: "Frontend Performance Optimization",
      description: "Building Fast React Applications",
      thumbnail: "/placeholder-product.jpg",
      url: "https://www.youtube.com/watch?v=0Mzft2Kcev0",
      date: "2024-01-01"
    }
  ],
} as const;
