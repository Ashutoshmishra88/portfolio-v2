import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileText } from "lucide-react";

export const DATA = {
  name: "Ashutosh Mishra",
  initials: "AM",
  url: "https://linkedin.com/in/ashutosh-misrha",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "Software Engineer specializing in backend development, AI solutions, and web development. Passionate about building efficient systems and solving complex problems.",
  summary:
    "Software Engineer with expertise in Python, C++, SQL, and modern web technologies. My focus is on developing reliable, scalable applications and data-driven solutions. I've worked on projects ranging from supply chain management to AI-driven data analysis.",
  avatarUrl: "/me.png", // detailed in implementation plan to keep as placeholder for now
  skills: [
    "Python",
    "JavaScript (ES6+)",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "Vite",
    "FastAPI",
    "Node.js",
    "Tailwind CSS",
    "SQL",
    "Git",
    "AWS (EC2, Amplify)",
    "Postman"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#projects", icon: NotebookIcon, label: "Projects" },
    { href: "/#contact", icon: Icons.email, label: "Contact" }
  ],
  contact: {
    email: "shivammishra6899@gmail.com",
    tel: "+91-8853020128",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ashutoshmishra88",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ashutosh-mishra-8657291a3/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:shivammishra6899@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/resume.pdf",
        icon: FileText,
        navbar: true,
      }
    },
  },
  work: [
    {
      company: "TRUSTY TRANSIT",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "", 
      start: "Jul 2025", 
      end: "Oct 2025",
      description: (
        <ul className="list-disc pl-4 space-y-1">
          <li>Architected a high-performance supply chain dashboard using <b>React.js</b> and <b>Vite</b>, significantly improving load times and user experience.</li>
          <li>Integrated robust <b>RESTful APIs</b> to enable real-time order tracking, inventory management, and dynamic product catalog updates.</li>
          <li>Implemented responsive, component-based UI patterns with <b>Tailwind CSS</b> to ensure cross-device compatibility.</li>
        </ul>
      ),
      skills:[
        "React.js",
        "Vite",
        "RESTful APIs",
        "Tailwind CSS"
      ]
    },
    {
      company: "BRANDERTISE",
      href: "https://www.brandertise.in/",
      badges: [],
      location: "Remote",
      title: "Web Developer & Automation Engineer",
      logoUrl: "",
      start: "Nov 2023",
      end: "April 2025", 
      description: (
        <ul className="list-disc pl-4 space-y-1">
          <li>Engineered custom <b>Python</b> automation scripts (Selenium/BeautifulSoup) for competitor product analysis, reducing manual research time by 40%.</li>
          <li>Developed and customized <b>Shopify</b> storefronts using Liquid and JavaScript, optimizing site performance and conversion funnels.</li>
          <li>Automating inventory synchronization workflows to streamline operations and minimize data entry errors.</li>
        </ul>
      ),
      skills:[
        "Python",
        "Selenium",
        "Shopify (Liquid)",
        "Automation"
      ]
    },
    {
      company: "Iirisconsulting",
      href: "https://iirisconsulting.com/",
      badges: [],
      location: "Remote",
      title: "Freelance Frontend Developer",
      logoUrl: "",
      start: "Aug 2023",
      end: "Oct 2023",
      description: (
        <ul className="list-disc pl-4 space-y-1">
          <li>Built responsive, accessible client interfaces using <b>React.js</b> and <b>Bootstrap</b>, adhering to modern web standards.</li>
          <li>Collaborated with UX teams to implement A/B testing strategies, utilizing Google Analytics data to drive a 15% improvement in engagement.</li>
          <li>Integrated client-side state management with <b>Redux</b> to ensure seamless data flow across complex application modules.</li>
        </ul>
      ),
      skills:[
        "React.js",
        "Bootstrap",
        "Redux",
        "Google Analytics"
      ]
    },
    {
      company: "BEANS.AI",
      href: "https://www.beans.ai/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern (Data Focus)",
      logoUrl: "",
      start: "Dec 2022",
      end: "Jun 2023",
      description: (
        <ul className="list-disc pl-4 space-y-1">
          <li>Optimized complex <b>SQL</b> queries for large-scale search datasets, enhancing data retrieval speeds and overall system performance.</li>
          <li>Developed automated <b>Python</b> ETL scripts to process and cleanse geodata, supporting accurate search query analysis.</li>
          <li>Collaborated with engineering teams to implement data-driven improvements to the core search algorithm and UI.</li>
        </ul>
      ),
      skills:[
        "SQL",
        "Python",
        "ETL"
      ]
    }
  ],
  education: [
    {
      school: "Chandigarh University", 
      href: "#",
      degree: "B.E. in Computer Science & Engineering",
      logoUrl: "",
      start: "Jul 2019",
      end: "Jun 2023",
    }
  ],
  projects: [
    {
      title: "Full Stack Product Dashboard",
      href: "#",
      dates: "Completed",
      active: true,
      description:
        "Developed a comprehensive product management system featuring a high-performance FastAPI backend and React frontend. Implemented secure user authentication (JWT) and persistent data storage using SQLite and SQLAlchemy.",
      technologies: [
        "FastAPI",
        "React.js",
        "SQLite",
        "Tailwind CSS"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ashutoshmishra88", 
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Realtor",
      href: "https://realtor-lemon.vercel.app/",
      dates: "Completed",
      active: true,
      description:
        "Leveraged Next.js Server-Side Rendering (SSR) to optimize property listing pages for speed and SEO. Built dynamic routing and filtering systems to handle large datasets of property listings efficiently.",
      technologies: [
        "Next.js",
        "React.js",
        "SSR"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ashutoshmishra88", 
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://realtor-lemon.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Resume Builder",
      href: "https://resume-builder-reactjs.netlify.app/",
      dates: "Completed",
      active: true,
      description:
        "Created an interactive resume builder application with real-time preview and client-side state persistence. Implemented PDF export functionality using JavaScript libraries.",
      technologies: [
        "React.js",
        "HTML5",
        "CSS3"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ashutoshmishra88", 
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://resume-builder-reactjs.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    }
  ],
  hackathons: [],
} as const;
