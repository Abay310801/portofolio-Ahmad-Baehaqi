
import { Award, BriefcaseBusiness, Code2, Download, ExternalLink, GraduationCap, Mail, Menu, Rocket, ShieldCheck, Users } from "lucide-react";
import { useState, useRef } from "react";

const BASE_URL = import.meta.env.BASE_URL;

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Organization", href: "#organization" },
  { label: "Certificates", href: "#certificates" },
];

type Education = {
  school: string;
  major?: string;
  year: string;
  image: string;
  status: string;
  level: string;
};

const education: Education[] = [
  {
    school: "MI TWT BEDENG SATU",
    year: "2006 - 2012",
    image: `${BASE_URL}/education/mi.png`,
    status: "Graduated",
    level: "Elementary School",
  },
  {
    school: "MTs Negeri Anjatan",
    year: "2012 - 2015",
    image: `${BASE_URL}/education/mts.png`,
    status: "Graduated",
    level: "Junior High School",
  },
  {
    school: "MA Khas Kempek",
    major: "Science Track (MIPA)",
    year: "2015 - 2018",
    image: `${BASE_URL}/education/ma.png`,
    status: "Graduated",
    level: "Senior High School",
  },
  {
    school: "Universitas Mercu Buana Yogyakarta",
    major: "Informatics",
    year: "2021 - 2025",
    image: `${BASE_URL}/education/kuliah.png`,
    status: "Bachelor's Degree",
    level: "Bachelor",
  },
];

const experiences = [
  {
    role: "Teaching Assistant – Informatics Study Program",
    company: "Universitas Mercu Buana Yogyakarta",
    period: "Sept 2022 – Jan 2025",
      description: [
        "Ensured the smooth execution of practical sessions by preparing the work environment, software, and supporting learning materials.",
        "Assisted lecturers in delivering practical course materials for Algorithms and Programming.",
        "Guided students in programming practice and system implementation based on course materials and relevant case studies.",
        "Evaluated practical assignments, corrected tasks and reports, and provided constructive feedback.",
        "Conducted final project-based examinations using real-world case studies to assess students’ understanding and application of the material."
      ],
    images: [
      `${BASE_URL}/experience/logoumby.png`,
      `${BASE_URL}/experience/w1.1.jpeg`,
      `${BASE_URL}/experience/w1.2.jpeg`,
    ],
  },

  {
    role: "Quality Assurance Engineer",
    company: "PT. Gamatechno Indonesia",
    period: "Feb 2024 -  Oct 2024",
      description: [
        "Designed user flow scenarios for projects including Gadjah Mada Medical Center (GMC), Jakarta Industrial Estate Pulogadung (JIEP), Santri Application, and Besigma Application, covering user interactions, core features, and navigation.",
        "Performed comprehensive testing of user flows for GMC, JIEP, and Santri applications, including functional testing, navigation testing, and user experience evaluation to ensure optimal performance.",
        "Documented test results for GMC, JIEP, and Santri applications based on test scenarios, including bug findings, functionality evaluation, and improvement recommendations."
      ],
    images: [
      `${BASE_URL}/experience/logogt.png`,
      `${BASE_URL}/experience/w2.1.jpeg`,
    ],
  },

  {
    role: "Help Desk",
    company: "PT. Gamatechno Indonesia",
    period: "Oct 2024 – Mart 2025",
      description: [
        "Provided appropriate solutions to user/admin issues in the Worxspace application.",
        "Handled user/admin inquiries, suggestions, and complaints via phone and WhatsApp chat.",
        "Coordinated internally with the technical team for issues requiring technical assistance.",
        "Created regular reports on handled issues and provided solutions."
      ],
    images: [
      `${BASE_URL}/experience/logogt.png`,
      `${BASE_URL}/experience/w2.1.jpeg`,
    ],
  },

  {
    role: "Web Developer – Internship",
    company: "CV. Asa Multimedia",
    period: "Jun 2024 – Dec 2024",
      description: [
        "Contributed to the development of a mathematics education web application aimed at reducing learning anxiety.",
        "Developed full-stack features using Laravel 10.",
        "Designed responsive and user-friendly UI.",
        "Managed and integrated MySQL database.",
        "Developed and optimized server-side application logic using PHP.",
        "Collaborated throughout the development lifecycle: planning, implementation, and testing."
      ],
    images: [
      `${BASE_URL}/experience/logoasa.png`,
      `${BASE_URL}/experience/w4.1.jpeg`,
      `${BASE_URL}/experience/20.png`,
      `${BASE_URL}/experience/44.png`,
    ],
  },

  {
    role: "Web Developer – Internship",
    company: "Ministry of Marine Affairs and Fisheries (MMAF), Republic of Indonesia",
    period: "Nov 2025 – May 2026",
      description: [
        "Developed a web application for official travel and assignment letter management to improve administrative efficiency.",
        "Built a full end-to-end system using Laravel 12 as the backend and React as the frontend.",
        "Implemented business logic using PHP, including submission, approval, and travel monitoring workflows.",
        "Designed and developed responsive and interactive UI to enhance user experience.",
        "Managed and integrated data to ensure accuracy and consistency.",
        "Developed features for generating, printing, and exporting documents to PDF from user input data.",
        "Optimized application performance and ensured data security."
      ],
    images: [
      `${BASE_URL}/experience/logokkp.png`,
      `${BASE_URL}/experience/w5.1.jpeg`,
      `${BASE_URL}/experience/w5.2.jpeg`,
      `${BASE_URL}/experience/w5.3.jpeg`,
    ],
  },

];

const projects = [
  {
    title: "Electric Car Recommendation System ",
    description:
      "Developed a web-based electric vehicle recommendation system that improves decision-making by helping users select suitable electric cars based on defined criteria using an automated recommendation approach. Tech Stack: Full-stack web development (frontend, backend, database integration, and data processing).",
    tech: ["Laravel 11", "JavaScript", "PHP", "MySQL","And more"],
    link: "https://github.com/Abay310801/SPKSAW",

    images: [
      `${BASE_URL}/projects/Tampilan Login.png`,
      `${BASE_URL}/projects/Tampilan Mobil.png`,
      `${BASE_URL}/projects/t1.png`,
      `${BASE_URL}/projects/t2.png`,
    ],
  },

  {
    title: "Mental Zone Application",
    description:
      "Built an interactive web-based mental health awareness system designed to improve user understanding of mental health conditions through educational content and guided information delivery. Tech Stack: Front-end development with responsive UI/UX design principles.",
    tech: ["CodeIgniter 3", "CSS", "PHP", "JavaScript", "And more"],
    link: "https://github.com/Abay310801/Sistem-Pakar-Kesehatan-Mental",

    images: [
      `${BASE_URL}/projects/m1.png`,
      `${BASE_URL}/projects/m2.png`,
      `${BASE_URL}/projects/m4.png`,
      `${BASE_URL}/projects/m3.png`,
      `${BASE_URL}/projects/m5.png`,
    ],
  },

  {
    title: "Joymath Application ",
    description:
      "Developed an interactive mathematics learning platform that improves learning accessibility and engagement for junior high school students (SMP) by simplifying complex math concepts into interactive digital learning experiences. Tech Stack: Full-stack development (frontend, backend integration, and application logic).",
    tech: ["Laravel 10", "JavaScript", "PHP", "MySQL", "And more"],
    link: "https://github.com/Abay310801/joymath",
    
    images: [
      `${BASE_URL}/projects/j1.png`,
      `${BASE_URL}/projects/j2.png`,
      `${BASE_URL}/projects/j3.png`,
      `${BASE_URL}/projects/j4.png`,
      `${BASE_URL}/projects/j5.png`,
      `${BASE_URL}/projects/j6.png`,
    ],
  },

  {
    title: "Ekan Application",
    description:
      "Developed a web-based application designed to support internal operational processes and company needs, aiming to improve efficiency and workflow structure through feature development and end-to-end system integration. Tech Stack:Full-stack web development, API integration, debugging, and feature implementation.",
    tech: ["Laravel 12", "TypeScript", "PHP", "React.js", "And more"],
    link: "https://github.com/Abay310801/Ekan",
    
    images: [
      `${BASE_URL}/projects/e1.png`,
      `${BASE_URL}/projects/e2.png`,
      `${BASE_URL}/projects/e3.png`,
      `${BASE_URL}/projects/e4.png`,
      `${BASE_URL}/projects/e5.png`,
      `${BASE_URL}/projects/e6.png`,
    ],
  },

  {
    title: "Umrah & Hajj Travel Application ",
    description:
      "Developed a travel management system that streamlines Umrah and Hajj booking processes for users while also improving administrative efficiency in booking management and financial record handling for travel operators. Tech Stack: Full-stack development, database management, and booking system integration.",
    tech: ["Laravel 12", "JavaScript", "PHP", "Tailwind CSS", "And more"],
    link: "https://github.com/Abay310801/Travel-Umroh-Haji",
    
    images: [
      `${BASE_URL}/projects/tt1.png`,
      `${BASE_URL}/projects/tt2.png`,
      `${BASE_URL}/projects/t3.png`,
      `${BASE_URL}/projects/t4.png`,
      `${BASE_URL}/projects/t5.png`,
      `${BASE_URL}/projects/t6.png`,
      `${BASE_URL}/projects/t7.png`,
      `${BASE_URL}/projects/t8.png`,
    ],
  },

  {
    title: "Boemi Coffe – Digital Menu Application",
    description:
      "A web-based system designed to help customers easily access available menu information, including product lists, prices, and stock availability. The system provides a practical and structured digital menu experience to improve customer accessibility.Tech Stack: menu data management.",
    tech: ["HTML", "SCSS", "JavaScript", "And more"],
    link: "https://github.com/Abay310801/BoemiCoffee",
    
    images: [
      `${BASE_URL}/projects/b1.png`,
      `${BASE_URL}/projects/b2.png`,
      `${BASE_URL}/projects/b3.png`,
      `${BASE_URL}/projects/b4.png`,
      `${BASE_URL}/projects/b5.png`,
    ],
  },
  
];

const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS", "PHP", "Node.js", "Laravel", "Python", "MySQL", "PostgreSQL", "Oracle", "REST API", "Git", "Microsoft Word", "Microsoft Excel", "PowerPoint", "Figma", "Visual Studio Code", "XAMPP", "Laragon", "DBeaver", "GitHub", "Postman", "Oracle SQL Developer", "Leadership", "Communication", "Problem Solving", "Adaptability", "Teamwork", "Time Management", "Critical Thinking"
];

const organizationGallery = [
  `${BASE_URL}/organization/o1.jpeg`,
  `${BASE_URL}/organization/o2.png`,
  `${BASE_URL}/organization/o3.png`,
  `${BASE_URL}/organization/o4.jpeg`,
  `${BASE_URL}/organization/o5.png`,
  `${BASE_URL}/organization/1.png`,
  `${BASE_URL}/organization/o6.jpeg`,
  `${BASE_URL}/organization/o7.png`,
  `${BASE_URL}/organization/o8.jpeg`,
  `${BASE_URL}/organization/o9.jpeg`,
  `${BASE_URL}/organization/o10.png`,
  `${BASE_URL}/organization/o11.jpeg`,
  `${BASE_URL}/organization/o12.jpeg`,
  `${BASE_URL}/organization/o13.jpeg`,
  `${BASE_URL}/organization/o14.jpeg`,
  `${BASE_URL}/organization/o15.jpeg`,
  `${BASE_URL}/organization/o16.jpeg`,
  `${BASE_URL}/organization/o17.jpeg`,
  `${BASE_URL}/organization/o18.jpeg`,
];

const organizations = [
  {
    logo: `${BASE_URL}/organization/logobem.png`,
    name: "Faculty of Information Technology Student Executive Board (BEM FTI UMBY)",
    position: "Chairperson",
    year: "Jan 2024 – Jan 2025",
    description:
      "Led and coordinated organizational activities, managed team collaboration, participated in strategic decision-making, built relationships with external stakeholders, represented student interests in university forums, facilitated conflict resolution, and ensured effective administration and organizational continuity.",
  },

  {
    logo: `${BASE_URL}/organization/logohimaka.png`,
    name: "Informatics Student Association (HIMAKA)",
    position: "Chairperson",
    year: "Dec 2022 – Dec 2023 ",
    description:
      "Led and coordinated organizational activities, managed team collaboration, participated in strategic decision-making, built relationships with external stakeholders, represented student interests in university forums, facilitated conflict resolution, and ensured effective administration and organizational continuity.",
  },

  {
    logo: `${BASE_URL}/organization/logohimaka.png`,
    name: "Informatics Student Association (HIMAKA)",
    position: "Public Relations Coordinator",
    year: "Dec 2021 – Dec 2022",
    description:
      "Maintained the organization’s reputation, developed effective communication strategies, organized various events and activities, and established partnerships with internal and external stakeholders to support organizational objectives.",
  },

  {
    logo: `${BASE_URL}/organization/PERMIKOMNAS.png`,
    name: "National Association of Informatics and Computer Students (PERMIKOMNAS)",
    position: "Research and Development Division Member (LITBANG)",
    year: "  Dec 2021 – Dec 2022",
    description:
      "Planned and implemented research and development programs, conducted research activities, shared outcomes with relevant audiences, and contributed to enhancing organizational capabilities in research and development.",
  },
];

const certificates = [
  {
    image: `${BASE_URL}/certificates/s1.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s2.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s3.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s4.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s5.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s6.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s7.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s8.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s9.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s10.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s11.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s12.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s13.jpeg`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s14.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s15.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s16.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s17.png`,
    description: " <><><><><><><><><><><><> ",
  },
{
    image: `${BASE_URL}/certificates/s18.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s19.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s20.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s21.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s22.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s23.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s24.png`,
    description: " <><><><><><><><><><><><>  ",
  },

  {
    image: `${BASE_URL}/certificates/s25.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s26.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s27.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s28.png`,
    description: " <><><><><><><><><><><><> ",
  },

  {
    image: `${BASE_URL}/certificates/s29.png`,
    description: " <><><><><><><><><><><><> ",
  },

];

  function SectionTitle({
    badge,
    title,
    description,
  }: {
    badge: string;
    title?: string;
    description?: string;
  }) {

    return (
      <div className="mb-10 max-w-3xl">

        <p className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
          {badge}
        </p>


        {title && (
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
        )}


        {description && (
          <p className="mt-4 leading-8 text-slate-400">
            {description}
          </p>
        )}

      </div>
    );
  }

export default function PortfolioProgrammer() {
    const [selectedProjectImages, setSelectedProjectImages] = useState<string[]>([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [certificateIndex, setCertificateIndex] = useState(0);
    const portfolioRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={portfolioRef}>
    <main className="min-h-screen bg-[#070B14] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070B14]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#home" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
              <Code2 size={20} />
            </span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 md:inline-flex">
            Contact Me
          </a>

          <button className="rounded-xl border border-white/10 p-2 lg:hidden" aria-label="Menu">
            <Menu />
          </button>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-10 top-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"> Ahmad Baehaqi</span>
              <br />
              
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              “To build modern, responsive, and scalable fullstack web applications with a strong focus on system quality and user experience.”
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:bg-cyan-300">
                View Projects
              </a>
              <a
                href={`${BASE_URL}/cv/CV_AHMAD_BAEHAQI.pdf`}
                download
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">

            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#0B1120] p-6">
              <div className="mb-5 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
      {`const portfolio = {
        name: "Ahmad Baehaqi",
        role: "Web Developer",
        focus: "Frontend & Fullstack",
        stack: [
          "React.js", "TypeScript", "Tailwind CSS", 
          "Laravel Framework", "Node.js", 
          "MySQL", "REST API"
        ],
        goal: "Build clean and useful apps"
      };`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            badge="01 • About Me"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 lg:col-span-2">
  <div className="flex flex-col gap-6 md:flex-row md:items-center">
    <div className="flex-shrink-0">
          <img
            src={`${BASE_URL}/education/A.png`}
            alt="Foto Profil"
            className="h-40 w-40 rounded-2xl object-cover border border-white/10"
          />
        </div>

        <div>
          <p className="leading-8 text-slate-300">
            A Bachelor’s degree graduate in Informatics with experience as a Fullstack Web Developer using Laravel, React, and Node.js. Experienced in end-to-end system development on real-world projects such as business travel administration systems and educational platforms, with a focus on building RESTful APIs, database management, and responsive, user-friendly UI development. Also experienced as a Quality Assurance Engineer in application testing and bug analysis, as well as a leadership background as the head of a student organization. Comfortable working in cross-functional teams to deliver effective, scalable, and high-quality digital solutions.
          </p>
        </div>

      </div>
    </div>
            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-7">
              <Rocket className="mb-4 text-cyan-300" />
              <h3 className="text-xl font-bold">Career Objective</h3>
              <p className="mt-3 leading-7 text-slate-300">
                To become a professional web developer capable of building modern, efficient, and impactful applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="px-6 py-24 lg:px-10">
  <div className="mx-auto max-w-7xl">

    <SectionTitle
      badge="02 • Educational Background"
      description="My educational journey from elementary school to university."
    />

    <div className="relative">

      <div className="absolute left-12 top-8 hidden h-[85%] w-px bg-white/20 lg:block" />

      <div className="space-y-6">

        {education
          .slice()
          .reverse()
          .map((item, index) => {

            const isUniversity =
              item.school === "Universitas Mercu Buana Yogyakarta";

            return (
              <div
                key={item.school}
                className="relative flex gap-6"
              >

                <div className="hidden w-24 justify-center lg:flex">

                  <div
                    className={`
                      mt-14 h-5 w-5 rounded-full border-4

                      ${
                        index === 0
                          ? "border-cyan-400 bg-cyan-400 shadow-lg shadow-cyan-500/60"
                          : "border-slate-500 bg-slate-600"
                      }
                    `}
                  />

                </div>

                <div
                  className={`
                    group
                    relative
                    flex-1
                    overflow-hidden
                    rounded-[30px]
                    border
                    transition-all
                    duration-500

                    ${
                      isUniversity
                        ? `
                          border-cyan-400/60
                          bg-gradient-to-r
                          from-[#071326]
                          via-[#081221]
                          to-[#071326]
                          shadow-[0_0_40px_rgba(34,211,238,0.15)]
                        `
                        : `
                          border-white/10
                          bg-gradient-to-r
                          from-[#0B1220]
                          to-[#090F1A]
                        `
                    }
                  `}
                >

                  {isUniversity && (
                    <>
                      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
                      <div className="absolute right-0 top-0 h-full w-72 bg-cyan-500/5 blur-2xl" />
                    </>
                  )}

                  <GraduationCap
                    size={200}
                    className="
                      absolute
                      right-24
                      top-1/2
                      hidden
                      -translate-y-1/2
                      text-white/[0.03]
                      lg:block
                    "
                  />

                  <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center">

                    <img
                      src={item.image}
                      alt={item.school}
                      className={`
                        rounded-3xl
                        object-cover
                        border
                        border-white/10

                        ${
                          isUniversity
                            ? "h-36 w-36"
                            : "h-28 w-28"
                        }
                      `}
                    />

                    <div className="flex-1">

                      <div className="flex flex-wrap gap-3">

                        <span
                          className="
                            rounded-full
                            border
                            border-cyan-400/30
                            bg-cyan-500/10
                            px-4
                            py-1.5
                            text-sm
                            font-medium
                            text-cyan-300
                          "
                        >
                          {item.level}
                        </span>

                        <span
                          className={`
                            rounded-full
                            px-4
                            py-1.5
                            text-sm
                            font-medium
                            border

                            ${
                              isUniversity
                                ? "border-cyan-400/30 bg-cyan-500/10 text-cyan-300"
                                : "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
                            }
                          `}
                        >
                          {item.status}
                        </span>

                      </div>

                      <h3
                        className={`
                          mt-4
                          font-bold
                          text-white

                          ${
                            isUniversity
                              ? "text-4xl"
                              : "text-2xl"
                          }
                        `}
                      >
                        {item.school}
                      </h3>

                      {item.major && (
                        <div className="mt-4 flex items-center gap-2 text-slate-300">
                          <Code2
                            size={18}
                            className="text-cyan-300"
                          />
                          <span>{item.major}</span>
                        </div>
                      )}

                      <div className="mt-3 flex items-center gap-2 text-slate-400">
                        <Award
                          size={18}
                          className="text-cyan-300"
                        />
                        <span>{item.year}</span>
                      </div>

                    </div>

                    <div
                      className={`
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-3xl
                        border

                        ${
                          isUniversity
                            ? "border-cyan-400/50 bg-cyan-500/10"
                            : "border-white/10 bg-white/5"
                        }
                      `}
                    >
                      <GraduationCap
                        size={34}
                        className={
                          isUniversity
                            ? "text-cyan-300"
                            : "text-slate-400"
                        }
                      />
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  </div>
</section>

      <section id="experience" className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            badge="03 • Work Experience"
          />
          <div className="space-y-6">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                p-7
                transition
                hover:border-cyan-300/30
              "
            >

              <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                <div>
                  <BriefcaseBusiness className="mb-4 text-cyan-300" />

                  <h3 className="text-2xl font-bold">
                    {item.role}
                  </h3>

                  <p className="mt-1 text-slate-300">
                    {item.company}
                  </p>
                </div>

                <span
                  className="
                    h-fit
                    rounded-full
                    border
                    border-white/10
                    px-4
                    py-2
                    text-sm
                    text-slate-300
                  "
                >
                  {item.period}
                </span>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_200px]">

                <div>
                  <ul className="space-y-2 leading-7 text-slate-400 list-disc pl-5">
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.images?.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Experience ${index}`}
                      onClick={() => {
                        setSelectedProjectImages(item.images);
                        setCurrentImageIndex(index);
                      }}
                      className="
                        h-24
                        w-24
                        cursor-pointer
                        rounded-xl
                        object-cover
                        border
                        border-white/10
                        transition
                        hover:scale-105
                        hover:border-cyan-300/50
                      "
                    />
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section id="projects" className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            badge="04 • My Project"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-6
                  transition
                  hover:-translate-y-2
                  hover:border-cyan-300/50
                "
              >
                <h3 className="mb-4 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mb-4 text-sm font-medium uppercase tracking-wider text-cyan-300">
                  UI Preview
                </p>

                <div className="mb-5 grid grid-cols-2 gap-2">

                  {project.images.slice(0, 3).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={project.title}
                      onClick={() => {
                        setSelectedProjectImages(project.images);
                        setCurrentImageIndex(index);
                      }}
                      className="
                        h-24
                        w-full
                        cursor-pointer
                        rounded-xl
                        object-cover
                        border
                        border-white/10
                        transition
                        hover:scale-[1.03]
                        hover:border-cyan-300/50
                      "
                    />
                  ))}

                  {project.images.length > 3 ? (
                    <div
                      onClick={() => {
                        setSelectedProjectImages(project.images);
                        setCurrentImageIndex(3);
                      }}
                      className="
                        h-24
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        flex
                        items-center
                        justify-center
                        text-cyan-300
                        font-semibold
                        cursor-pointer
                        transition
                        hover:border-cyan-300/50
                      "
                    >
                      +{project.images.length - 3}
                    </div>
                  ) : (
                    project.images[3] && (
                      <img
                        src={project.images[3]}
                        alt={project.title}
                        onClick={() => {
                          setSelectedProjectImages(project.images);
                          setCurrentImageIndex(3);
                        }}
                        className="
                          h-24
                          w-full
                          cursor-pointer
                          rounded-xl
                          object-cover
                          border
                          border-white/10
                          transition
                          hover:scale-[1.03]
                          hover:border-cyan-300/50
                        "
                      />
                    )
                  )}

                </div>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        bg-white/10
                        px-3
                        py-1
                        text-xs
                        text-slate-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-cyan-300
                    transition
                    group-hover:text-cyan-200
                  "
                >
                  View Detail
                  <ExternalLink size={17} />
                </a>

              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            badge="05 • Skill Abilities"
          />
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-200">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="organization" className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            badge="06 • Organization & Leadership"
          />

         <div className="mb-12">
            <img
              src={organizationGallery[0]}
              alt="Organization"
              onClick={() => {
                setSelectedProjectImages(organizationGallery);
                setCurrentImageIndex(0);
              }}
              className="
                mb-3
                h-[380px]
                w-full
                cursor-pointer
                rounded-3xl
                object-cover
                border
                border-white/10
                transition
                hover:scale-[1.01]
              "
            />

            <div className="grid grid-cols-5 gap-3">
              {organizationGallery.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  onClick={() => {
                    setSelectedProjectImages(organizationGallery);
                    setCurrentImageIndex(index + 1);
                  }}
                  className="
                    h-24
                    w-full
                    cursor-pointer
                    rounded-2xl
                    object-cover
                    border
                    border-white/10
                    transition
                    hover:border-cyan-300/50
                  "
                />
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {organizations.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
              >

                <img
                  src={item.logo}
                  alt={item.name}
                  className="
                    mb-5
                    h-10
                    w-10
                    object-contain
                  "
                />

                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>

                <div className="mt-2 flex items-center justify-between">
                  <p className="text-slate-300">
                    {item.position}
                  </p>

                  <span className="text-sm text-cyan-200">
                    {item.year}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.description}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">

          <SectionTitle
            badge="07 • Award Certificates"
            description="Selected Certifications and Awards"
          />

          <div className="relative">

            <button
              onClick={() =>
                setCertificateIndex((prev) =>
                  prev === 0
                    ? certificates.length - 4
                    : prev - 1
                )
              }
              className="
                absolute
                left-[-30px]
                top-1/2
                z-20
                -translate-y-1/2
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-cyan-400/30
                bg-[#0F172A]
                text-cyan-300
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-cyan-500/20
                hover:text-cyan-200
                hover:border-cyan-400/60
              "
            >
              ❮
            </button>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {certificates
                .slice(certificateIndex, certificateIndex + 4)
                .map((item, index) => (
                  <div
                    key={index}
                    className="
                      overflow-hidden
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.04]
                    "
                  >

                    <img
                      src={item.image}
                      alt="Certificate"
                      onClick={() => {
                        setSelectedProjectImages(
                          certificates.map((c) => c.image)
                        );

                        setCurrentImageIndex(
                          certificateIndex + index
                        );
                      }}
                      className="
                        h-56
                        w-full
                        cursor-pointer
                        object-cover
                        transition
                        hover:scale-105
                      "
                    />

                    <div className="p-5">

                      <h3 className="font-bold text-white">
                        Certificate {certificateIndex + index + 1}
                      </h3>

                      {item.description && (
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {item.description}
                        </p>
                      )}

                    </div>

                  </div>
                ))}

            </div>

            <button
              onClick={() =>
                setCertificateIndex((prev) =>
                  prev + 4 >= certificates.length
                    ? 0
                    : prev + 1
                )
              }
              className="
                absolute
                right-[-30px]
                top-1/2
                z-20
                -translate-y-1/2
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-cyan-400/30
                bg-[#0F172A]
                text-cyan-300
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-cyan-500/20
                hover:text-cyan-200
                hover:border-cyan-400/60
              "
            >
              ❯
            </button>

          </div>

        </div>
      </section>

      <section id="contact" className="px-6 py-24 lg:px-10">
        <div
          className="
            mx-auto
            max-w-5xl
            rounded-[2rem]
            border
            border-white/10
            bg-white/[0.04]
            p-8
            shadow-2xl
            backdrop-blur-xl
            md:p-12
          "
        >

          <div className="text-center">

            <ShieldCheck 
              className="mx-auto mb-5 text-cyan-300" 
              size={42} 
            />

            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Let’s Connect
            </h2>

            <p className="
              mx-auto
              mt-5
              max-w-2xl
              leading-8
              text-slate-300
            ">
              I am open to job opportunities, internships, and freelance projects,
              as well as collaboration in web application development.
            </p>

          </div>


          <div className="
            mt-10
            grid
            gap-5
            md:grid-cols-3
          ">

            <a
              href="mailto:ahmadbaehaqi008@gmail.com"
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.05]
                p-6
                transition
                hover:border-cyan-300/50
                hover:-translate-y-1
              "
            >

              <Mail 
                className="mb-4 text-cyan-300"
                size={30}
              />

              <h3 className="font-bold text-white">
                Email
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                ahmadbaehaqi008@gmail.com
              </p>

            </a>

            <a
              href="https://wa.me/6282128574180"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.05]
                p-6
                transition
                hover:border-cyan-300/50
                hover:-translate-y-1
              "
            >

              <Users
                className="mb-4 text-cyan-300"
                size={30}
              />

              <h3 className="font-bold text-white">
                WhatsApp
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                082128574180
              </p>

            </a>

            <a
              href="https://www.linkedin.com/in/ahmad-baehaqi-31agustus/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.05]
                p-6
                transition
                hover:border-cyan-300/50
                hover:-translate-y-1
              "
            >

              <ExternalLink
                className="mb-4 text-cyan-300"
                size={30}
              />

              <h3 className="font-bold text-white">
                LinkedIn
              </h3>

              <p className="mt-2 truncate text-sm text-slate-400">
                linkedin.com/in/ahmad-baehaqi-31agustus
              </p>

            </a>

          </div>

          <div className="mt-8 flex justify-center">

            <a
              href="https://github.com/Abay310801"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-2xl
                border
                border-white/15
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:border-cyan-300
                hover:text-cyan-200
              "
            >

              <Code2 size={18}/>
              GitHub Profile

            </a>

          </div>

        </div>
      </section>

      {selectedProjectImages.length > 0 && (
      <div
        className="
          fixed
          inset-0
          z-[100]
          flex
          items-center
          justify-center
          bg-black/90
          p-6
        "
        onClick={() => setSelectedProjectImages([])}
      >
        <div
          className="relative flex items-center"
          onClick={(e) => e.stopPropagation()}
        >

          <button
            onClick={() =>
              setCurrentImageIndex((prev) =>
                prev === 0
                  ? selectedProjectImages.length - 1
                  : prev - 1
              )
            }
            className="
              absolute
              left-[-60px]
              rounded-full
              bg-white/10
              p-3
              text-white
              hover:bg-white/20
            "
          >
            ❮
          </button>

          <img
            src={selectedProjectImages[currentImageIndex]}
            className="
              max-h-[85vh]
              max-w-[85vw]
              rounded-3xl
              shadow-2xl
            "
          />

          <button
            onClick={() =>
              setCurrentImageIndex((prev) =>
                prev === selectedProjectImages.length - 1
                  ? 0
                  : prev + 1
              )
            }
            className="
              absolute
              right-[-60px]
              rounded-full
              bg-white/10
              p-3
              text-white
              hover:bg-white/20
            "
          >
            ❯
          </button>

          <div
            className="
              absolute
              bottom-[-50px]
              left-1/2
              -translate-x-1/2
              rounded-full
              bg-black/60
              px-4
              py-2
              text-sm
              text-white
            "
          >
            {currentImageIndex + 1} / {selectedProjectImages.length}
          </div>

        </div>
      </div>
    )}
    </main>
    </div>
  );
}
