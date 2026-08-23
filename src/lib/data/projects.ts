export type Project = {
  title: string;
  slug: string;
  description: string;
  content: string[];
  imageSrc: string;
  images: { id: number; name: string; imgurl: string; attribution: string }[];
  liveUrl?: string;
  realSite?: string;
  github?: string;
  stack: string[];
};

// --- FEATURED / SHOWCASE PROJECTS ---
export const showcaseProjects: Project[] = [
  {
    title: "Clinic Hub",
    slug: "clinic-hub",
    description:
      "A full-stack medical appointment booking and clinic management system built as my second-year Back-End Development exam project.",

    content: [
      "Clinic Hub is a full-stack appointment booking system that allows patients and guests to find doctors, browse clinics, book appointments, and manage existing bookings. It also includes an administrative interface for managing doctors, clinics, appointment categories, patients, and appointments.",

      "I built the backend as a .NET 10 REST API using ASP.NET Core, Entity Framework Core, and MySQL. The API includes JWT authentication, separate patient and admin access, role-based endpoint protection, FluentValidation, Swagger/OpenAPI documentation, pagination, filtering, data seeding, and validation around appointment scheduling and data relationships.",

      "The frontend was built with Next.js 16, React, TypeScript, and Tailwind CSS. It includes guest and registered-patient booking flows, doctor and clinic directories, search and filtering, calendar-based appointment selection, appointment cancellation and rescheduling, and persistent authentication state using Zustand.",

      "A significant part of the project involved handling appointment dates and timezones consistently between the browser, API, and MySQL database. Dates are normalised around UTC, while the frontend uses date-fns and date-fns-tz to handle display and booking behaviour correctly across different client timezones.",
    ],

    imageSrc: "/assets/images/site_cards/clinic-hub.jpg",

    images: [
      {
        id: 0,
        name: "Clinic Hub Home",
        imgurl: "/assets/images/clinic-hub/clinic-hub.jpg",
        attribution: "Clinic Hub",
      },
      {
        id: 1,
        name: "Clinic Hub Booking",
        imgurl: "/assets/images/clinic-hub/clinic-hub-booking.jpg",
        attribution: "Home Page",
      },
      {
        id: 2,
        name: "Clinic Hub Doctors",
        imgurl: "/assets/images/clinic-hub/clinic-hub-search-doc.jpg",
        attribution: "Doctor Directory",
      },
    ],

    realSite: "https://clinic-hub.ajbarrett.tech/",
    github: "https://github.com/Anclagen/Clinic-Hub",

    stack: [
      "dotnet",
      "ASP.NET Core",
      "Entity Framework Core",
      "MySQL",
      "Next",
      "React",
      "TypeScript",
      "Tailwind",
    ],
  },
  {
    title: "Quack Recruitment & Training",
    slug: "quackrecruitment",
    description: "A client site for a UK-based recruitment and training agency.",
    content: [
      "Quack Recruitment & Training is a UK-based recruitment and training provider delivering recruitment services alongside government-funded Skills Bootcamp programmes.",
      "I designed and built the site from the ground up using Figma, Next.js, React, and Tailwind CSS. The project includes bespoke recruitment and learner forms, with submissions integrated through WordPress and Contact Form 7. I developed the form system around reusable React components, allowing new forms and programme-specific requirements to be added without rebuilding the underlying functionality.",
      "The site has grown substantially since its original launch and now includes recruitment services, training programmes, Skills Bootcamp course pages, learner information and policy resources, safeguarding content, and application flows. I continue to maintain the site for the client, implementing new programmes, content changes, functionality, and compliance-related updates as requirements evolve.",
    ],
    imageSrc: "/assets/images/site_cards/quackrecruitment.jpg",
    images: [
      {
        id: 0,
        name: "Quack Device Example Mockup",
        imgurl: "/assets/images/Mockups/quack-mockup-small.jpg",
        attribution: "Quack Device Mockup",
      },
      {
        id: 1,
        name: "Quack Recruitment Page",
        imgurl: "/assets/images/quackrecruitment/recruitment-page.jpg",
        attribution: "Recruitment Page",
      },
      {
        id: 2,
        name: "Quack Training Page",
        imgurl: "/assets/images/quackrecruitment/training.jpg",
        attribution: "Training Page",
      },
      {
        id: 3,
        name: "Quack Register Page",
        imgurl: "/assets/images/quackrecruitment/register.jpg",
        attribution: "Register Page",
      },
      {
        id: 4,
        name: "Quack Contact Page",
        imgurl: "/assets/images/quackrecruitment/contact.jpg",
        attribution: "Contact Page",
      },
      {
        id: 5,
        name: "Quack Course Page",
        imgurl: "/assets/images/quackrecruitment/course.jpg",
        attribution: "Course Page",
      },
    ],
    realSite: "https://quackrecruitmentandtraining.co.uk/",
    // github: "https://github.com/Anclagen-Quackers/quackrecruitment",
    stack: ["Next.js", "React", "Tailwind", "JavaScript"],
  },
  {
    title: "Productivity Graveyard",
    slug: "productivity-graveyard",
    description: "A humorous fullstack web app for memorializing abandoned projects.",
    content: [
      "Collaborative project built with a team of nine students and graduates, creating a full-stack web app from the ground up.",
      "Backend implemented with Node.js, Express, PostgreSQL, and Sequelize to handle data and API services.",
      "Frontend built with vanilla HTML, CSS, and JavaScript, consuming the backend API.",
      "I initially planned and led the backend team, managing pull requests, architecture decisions, and workflow. When the frontend team stalled without clear direction, I stepped in to provide leadership, updating their plan, managing PRs, and helping push the project forward to keep delivery on track.",
    ],

    imageSrc: "/assets/images/site_cards/productivitygraveyard.jpg", // you’ll need to add this
    images: [],
    // liveUrl: "https://productivitygraveyard.com",
    github: "https://github.com/Junior-Dev-Noroff/Productivity-Graveyard",
    stack: ["Node.js", "Express", "PostgreSQL", "Sequelize", "React", "Next.js", "Tailwind"],
  },
  {
    title: "Future OS (Portfolio Concept)",
    slug: "future-os",
    description:
      "A playful personal project showcasing my portfolio inside a faux operating system.",
    content: [
      "React project simulating a desktop operating system with draggable, resizable windows (via react-rnd), icons, and a styled UI inspired by classic OS desktops.",
      "Uses Zustand for state management and Tailwind for styling. Planned enhancements include Framer Motion animations to make window transitions and desktop interactions more dynamic.",
      "Serves as a creative and experimental showcase alongside my more traditional portfolio site.",
    ],
    imageSrc: "/assets/images/site_cards/futureos.jpg",
    images: [],
    liveUrl: "https://future-os.netlify.app/",
    // github: "https://github.com/Anclagen/future-os",
    stack: ["React", "Framer Motion", "Tailwind"],
  },
];

// --- COLLABORATION PROJECTS ---
export const collaborationProjects: Project[] = [
  {
    title: "Junior.Dev",
    slug: "juniorsdev",
    description:
      "Open-source collective of junior developers collaborating on real-world projects.",
    content: [
      "Junior.Dev is not just a website but an ongoing open-source collaboration across multiple projects, built and maintained by a team of junior developers and graduates.",
      "The hub site itself is implemented in Next.js and Tailwind with a custom component library, but it serves mainly as the entry point for the collective.",
      "The initiative spans multiple sub-projects — from community tools like Junobot, to creative apps like Productivity Graveyard, to developer-focused utilities like portfolio builders.",
      "My role spans technical lead, architecture planning, and active contributions across projects. I manage GitHub workflows, PR reviews, and sprints to mirror professional team practices while mentoring peers and driving delivery.",
    ],
    imageSrc: "/assets/images/site_cards/juniorsdev.jpg",
    images: [],
    // liveUrl: "https://www.thejuniors.dev/",
    github: "https://github.com/Juniors-Dev",
    stack: ["Next.js", "React", "Tailwind", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    title: "Mollify",
    slug: "mollify",
    description: "An open source LMS (Learning Management System).",
    content: [
      "Collaborative project built in a Lerna monorepo with TypeScript and SvelteKit, focused on creating a markdown-to-website learning management system (LMS).",
      "The LMS converted markdown into navigable webpages with search functionality, and was designed to be installable as a package for content-driven sites.",
      "Explored additional packages such as text-to-speech (via Elvenlabs), an AI assistant, and a WYSIWYG editor, though development paused when the lead moved on and the project funding ended.",
      "While no longer active, Mollify remains a strong example of collaborative monorepo development, modular package design, and early-stage product planning.",
    ],

    imageSrc: "/assets/images/site_cards/mollify.jpg",
    images: [
      {
        id: 0,
        name: "Mollify Example Mockup",
        imgurl: "/assets/images/Mockups/mollify-mockup-small.jpg",
        attribution: "Mollify Example Mockup",
      },
      {
        id: 1,
        name: "Mollify Example Institution Page",
        imgurl: "/assets/images/mollify/home.jpg",
        attribution: "Mollify Example Institution Page",
      },
      {
        id: 2,
        name: "Mollify Using Molly",
        imgurl: "/assets/images/mollify/molly.jpg",
        attribution: "Mollify Using Molly",
      },
      {
        id: 3,
        name: "Mollify Bookmarks",
        imgurl: "/assets/images/mollify/bookmarking.jpg",
        attribution: "Mollify Bookmarks",
      },
      {
        id: 4,
        name: "Mollify Search Page",
        imgurl: "/assets/images/mollify/search.jpg",
        attribution: "Mollify Search Page",
      },
      {
        id: 5,
        name: "Mollify Tags Page",
        imgurl: "/assets/images/mollify/tags.jpg",
        attribution: "Mollify Tags Page",
      },
    ],
    liveUrl: "https://mollify.noroff.dev/",
    github: "https://github.com/Anclagen/-mollify",
    stack: ["TypeScript", "Svelte", "SvelteKit", "Tailwind", "Vite"],
  },
  {
    title: "Noroff Jobs API",
    slug: "noroff-jobs-api",
    description: "API for Noroff's internal job/placement platform.",
    content: [
      "Built with Node.js and Express, using Prisma and PostgreSQL for database management.",
      "Collaborated with Noroff staff and students to design and implement a basic system for companies to post job listings, students to apply, and both parties to manage offers with authentication in place.",
      "The platform continues to be intermittently maintained and extended by students as part of their coursework, serving as an active learning showcase.",
    ],
    imageSrc: "/assets/images/site_cards/noroffjobs.jpg", // add a mockup
    images: [],
    github: "https://github.com/NoroffFEU/agency-api.noroff.dev",
    stack: ["Node.js", "Express", "PostgreSQL", "Prisma"],
  },
];

// --- ARCHIVE / LEARNING PROJECTS ---
export const archiveProjects: Project[] = [
  {
    title: "TechBeauty",
    slug: "techbeauty",
    description: "Functional e-commerce site built with React and Redux.",
    content: [
      "Developed as part of a Noroff assignment to practice modern frontend development.",
      "Implemented product sorting, filtering, and search, with a cart powered by Redux for state management.",
      "Built a validated contact form using react-hook-form and yup for input validation.",
      "Styled with styled-components and integrated with a provided API to fetch product data.",
      "Fully responsive, showcasing a complete e-commerce flow from browsing to cart management.",
    ],
    imageSrc: "/assets/images/site_cards/techbeauty.jpg",
    images: [
      {
        id: 0,
        name: "TechBeauty Mockup",
        imgurl: "/assets/images/Mockups/ecom-mockup-small.jpg",
        attribution: "TechBeauty Mockup",
      },
      {
        id: 1,
        name: "TechBeauty Homepage",
        imgurl: "/assets/images/techbeauty/home.jpg",
        attribution: "TechBeauty Homepage",
      },
      {
        id: 2,
        name: "TechBeauty Product Page",
        imgurl: "/assets/images/techbeauty/product.jpg",
        attribution: "TechBeauty Product Page",
      },
      {
        id: 3,
        name: "TechBeauty Cart Page",
        imgurl: "/assets/images/techbeauty/cart.jpg",
        attribution: "TechBeauty Cart Page",
      },
      {
        id: 4,
        name: "TechBeauty Contact Page",
        imgurl: "/assets/images/techbeauty/contact.jpg",
        attribution: "TechBeauty Contact Page",
      },
      {
        id: 5,
        name: "TechBeauty About Page",
        imgurl: "/assets/images/techbeauty/about.jpg",
        attribution: "TechBeauty About Page",
      },
    ],
    liveUrl: "https://gleaming-boba-6793eb.netlify.app/",
    github: "https://github.com/Anclagen/TechBeauty",
    stack: ["React", "Redux", "JavaScript", "Styled Components"],
  },
  {
    title: "Forgotten Treasures",
    slug: "forgotten-treasures",
    description: "Auction house site built with vanilla JavaScript, Sass, and Bootstrap.",
    content: [
      "Developed as a semester project to simulate a full-featured auction platform.",
      "Implemented account registration, login, and profile management, restricted to stud.noroff.no email addresses.",
      "Registered users can update avatars, view credits, create listings with attributes, and place bids on other listings.",
      "Unregistered visitors can still browse and search listings, ensuring wider accessibility.",
      "End-to-end tests written with Cypress cover key user stories, validating core flows like registration, bidding, and search.",
    ],
    imageSrc: "/assets/images/site_cards/forgottentreasures.jpg",
    images: [
      {
        id: 0,
        name: "Forgotten Treasures Mockup",
        imgurl: "/assets/images/Mockups/auction-mockup-small.jpg",
        attribution: "Forgotten Treasures Mockup",
      },
      {
        id: 1,
        name: "Forgotten Treasures Homepage",
        imgurl: "/assets/images/forgottentreasures/home.jpg",
        attribution: "Forgotten Treasures Homepage",
      },
      {
        id: 2,
        name: "Forgotten Treasures Products Page",
        imgurl: "/assets/images/forgottentreasures/products.jpg",
        attribution: "Forgotten Treasures Products Page",
      },
      {
        id: 3,
        name: "Forgotten Treasures Product Page",
        imgurl: "/assets/images/forgottentreasures/product.jpg",
        attribution: "Forgotten Treasures Product Page",
      },
      {
        id: 4,
        name: "Forgotten Treasures Profile Page",
        imgurl: "/assets/images/forgottentreasures/profile.jpg",
        attribution: "Forgotten Treasures Profile Page",
      },
      {
        id: 5,
        name: "Forgotten Treasures Login Page",
        imgurl: "/assets/images/forgottentreasures/login.jpg",
        attribution: "Forgotten Treasures Login Page",
      },
      {
        id: 6,
        name: "Forgotten Treasures Create Page",
        imgurl: "/assets/images/forgottentreasures/create.jpg",
        attribution: "Forgotten Treasures Create Page",
      },
      {
        id: 7,
        name: "Forgotten Treasures Contact Page",
        imgurl: "/assets/images/forgottentreasures/contact.jpg",
        attribution: "Forgotten Treasures Contact Page",
      },
    ],
    liveUrl: "https://anclagen.github.io/Semester-Project-2/",
    github: "https://github.com/Anclagen/Semester-Project-2",
    stack: ["JavaScript", "Sass", "Bootstrap"],
  },
  {
    title: "SoSocial",
    slug: "sosocial",
    description: "A social media clone using Noroff API.",
    content: [
      "Developed as a semester project to simulate a functional social media platform.",
      "Implemented authentication restricted to @noroff.no and @stud.noroff.no emails, with profile registration and login flows.",
      "Core features include a content feed with view, filter, and search capabilities, as well as the ability to create, update, and delete posts.",
      "Extended features include commenting, editing profile media, following/unfollowing users, and reacting to posts.",
      "Designed for responsive use with Bootstrap and Sass to provide a modern, user-friendly interface.",
    ],
    imageSrc: "/assets/images/site_cards/sosocial.jpg",
    images: [
      {
        id: 0,
        name: "SoSocial Mockup",
        imgurl: "/assets/images/Mockups/sosocial-mockup-small.jpg",
        attribution: "SoSocial Mockup",
      },
      {
        id: 1,
        name: "SoSocial Homepage",
        imgurl: "/assets/images/sosocial/home.jpg",
        attribution: "SoSocial Homepage",
      },
      {
        id: 2,
        name: "SoSocial Profile Page",
        imgurl: "/assets/images/sosocial/profile.jpg",
        attribution: "SoSocial Profile Page",
      },
      {
        id: 3,
        name: "SoSocial Login Page",
        imgurl: "/assets/images/sosocial/login.jpg",
        attribution: "SoSocial Login Page",
      },
    ],
    liveUrl: "https://so-social-alexander-barrett.netlify.app/",
    github: "https://github.com/Anclagen/SoSocial",
    stack: ["JavaScript", "Sass", "Bootstrap"],
  },
  {
    title: "The Fluffy Piranha Blog",
    slug: "fluffy-piranha-blog",
    description: "Dog blog using headless WordPress.",
    content: [
      "Developed as the final project of my first year at Noroff, a themed blog built around my dog, combining playful branding with solid technical implementation.",
      "Implemented responsive layouts with CSS and JavaScript for interactivity.",
      "Integrated WordPress as a headless CMS to manage and publish blog posts, with support for interactive comments.",
    ],
    imageSrc: "/assets/images/site_cards/fluffypiranha.jpg",
    images: [
      {
        id: 0,
        name: "The Fluffy Piranha Mockup",
        imgurl: "/assets/images/Mockups/fluffypiranha-mockup-small.jpg",
        attribution: "The Fluffy Piranha Mockup",
      },
      {
        id: 1,
        name: "The Fluffy Piranha Homepage",
        imgurl: "/assets/images/fluffypiranha/home.jpg",
        attribution: "The Fluffy Piranha Homepage",
      },
      {
        id: 2,
        name: "The Fluffy Piranha Posts Page",
        imgurl: "/assets/images/fluffypiranha/posts.jpg",
        attribution: "The Fluffy Piranha Posts Page",
      },
      {
        id: 3,
        name: "The Fluffy Piranha Post Page",
        imgurl: "/assets/images/fluffypiranha/post.jpg",
        attribution: "The Fluffy Piranha Post Page",
      },
      {
        id: 4,
        name: "The Fluffy Piranha Gallery Page",
        imgurl: "/assets/images/fluffypiranha/gallery.jpg",
        attribution: "The Fluffy Piranha Gallery Page",
      },
      {
        id: 5,
        name: "The Fluffy Piranha About Page",
        imgurl: "/assets/images/fluffypiranha/about.jpg",
        attribution: "The Fluffy Piranha About Page",
      },
      {
        id: 6,
        name: "The Fluffy Piranha Contact Page",
        imgurl: "/assets/images/fluffypiranha/contact.jpg",
        attribution: "The Fluffy Piranha Contact Page",
      },
    ],
    liveUrl: "https://fluffy-piranha-dog-blog.netlify.app/",
    github: "https://github.com/Anclagen/Blog-Site-WP-Headless-CMS",
    stack: ["WordPress", "JavaScript", "CSS3"],
  },
  {
    title: "Rainydays",
    slug: "rainydays",
    description: "Outdoor jacket e-commerce project.",
    content: [
      "Started as a first-year HTML and CSS exercise focused on creating a responsive storefront for outdoor jackets.",
      "Expanded with JavaScript to add interactivity including a shopping cart, checkout system, product filtering, and search functionality.",
      "Later integrated with a headless WordPress CMS to serve dynamic product data, connecting backend content management with the existing JavaScript front end.",
      "Demonstrates progression from static design to a fully interactive e-commerce site with real product management.",
    ],
    imageSrc: "/assets/images/site_cards/rainydays.jpg",
    images: [
      {
        id: 0,
        name: "Rainydays Mockup",
        imgurl: "/assets/images/Mockups/rainydays-mockup-small.jpg",
        attribution: "Rainydays Mockup",
      },
      {
        id: 1,
        name: "Rainydays Homepage",
        imgurl: "/assets/images/rainydays/home.jpg",
        attribution: "Rainydays Homepage",
      },
      {
        id: 2,
        name: "Rainydays Products Page",
        imgurl: "/assets/images/rainydays/products.jpg",
        attribution: "Rainydays Products Page",
      },
      {
        id: 3,
        name: "Rainydays Product Page",
        imgurl: "/assets/images/rainydays/product.jpg",
        attribution: "Rainydays Product Page",
      },
      {
        id: 4,
        name: "Rainydays Cart Page",
        imgurl: "/assets/images/rainydays/cart.jpg",
        attribution: "Rainydays Cart Page",
      },
      {
        id: 5,
        name: "Rainydays Payment Page",
        imgurl: "/assets/images/rainydays/payment.jpg",
        attribution: "Rainydays Payment Page",
      },
      {
        id: 6,
        name: "Rainydays Contact Page",
        imgurl: "/assets/images/rainydays/contact.jpg",
        attribution: "Rainydays Contact Page",
      },
    ],
    liveUrl: "https://rainydays-alexander-barrett.netlify.app",
    github: "https://github.com/Anclagen/Rainydays",
    stack: ["WordPress", "JavaScript", "CSS3"],
  },
  {
    title: "Community Science Museum",
    slug: "community-science-museum",
    description: "HTML/CSS site for fictional museum.",
    content: [
      "First-semester project at Noroff: a website for a fictional science museum designed to appeal to both children and parents.",
      "Built entirely with HTML and CSS, focusing on clean, responsive layouts and visually engaging design.",
      "Served as an introduction to web development fundamentals, accessibility considerations, and cross-device responsiveness.",
    ],
    imageSrc: "/assets/images/site_cards/communitysciencemuseum.jpg",
    images: [
      {
        id: 0,
        name: "Community Science Museum Mockup",
        imgurl: "/assets/images/Mockups/communitysciencemuseum-mockup-small.jpg",
        attribution: "Community Science Museum Mockup",
      },
      {
        id: 1,
        name: "Community Science Museum Homepage",
        imgurl: "/assets/images/communitysciencemuseum/home.jpg",
        attribution: "Community Science Museum Homepage",
      },
      {
        id: 2,
        name: "Community Science Museum Events Page",
        imgurl: "/assets/images/communitysciencemuseum/events.jpg",
        attribution: "Community Science Museum Events Page",
      },
      {
        id: 3,
        name: "Community Science Museum Visit Page",
        imgurl: "/assets/images/communitysciencemuseum/visit.jpg",
        attribution: "Community Science Museum Visit Page",
      },
      {
        id: 4,
        name: "Community Science Museum Exhibits Page",
        imgurl: "/assets/images/communitysciencemuseum/exhibits.jpg",
        attribution: "Community Science Museum Exhibits Page",
      },
      {
        id: 5,
        name: "Community Science Museum About Page",
        imgurl: "/assets/images/communitysciencemuseum/about.jpg",
        attribution: "Community Science Museum About Page",
      },
      {
        id: 6,
        name: "Community Science Museum Contact Page",
        imgurl: "/assets/images/communitysciencemuseum/contact.jpg",
        attribution: "Community Science Museum Contact Page",
      },
    ],
    liveUrl: "https://science-museum-alexander-barrett.netlify.app",
    github: "https://github.com/Anclagen/Community-Science-Museum-SP1",
    stack: ["HTML5", "CSS3"],
  },
];
