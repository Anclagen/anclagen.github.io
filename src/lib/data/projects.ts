export type Project = {
  title: string;
  slug: string;
  description: string;
  content: string[];
  imageSrc: string;
  images: { id: number; name: string; imgurl: string; attribution: string }[];
  liveUrl?: string;
  github?: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "Mollify",
    slug: "mollify",
    description: "An open source LMS(Learning Management Platform)",
    content: [
      "Mollify is an ongoing collaborative project that serves as a collection of packages in a Lerna mono repository. Its central package is the learning management system (LMS), designed to convert markdown content into webpages. This LMS enables efficient navigation and search functionalities, turning simple markdown into a dynamic, user-friendly website.",
      "While it is a work in progress, the long-term vision for Mollify is to provide a seamless platform where users can install the @Mollify/LMS package, create a content folder with markdown content, and effortlessly convert it into a navigable webpage. This initiative will empower users to effectively curate, modify, and present their content in line with the package's standards.",
      "Future enhancements under development include a text-to-speech package using Elvenlabs, allowing users to convert their written lessons into audio content. Additionally, an AI assistant package, Molly, is being designed to be equipped with lesson content and answer queries related to the same. Lastly, the Flow package is being worked on to offer a 'what you see is what you get' editor, enabling users to easily create and update their markdown content.",
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
    liveUrl: null,
    github: "https://github.com/Anclagen/-mollify",
    stack: ["Skeleton", "TypeScript", "Svelte", "SvelteKit", "Tailwind", "Vite"],
  },
  {
    title: "TechBeauty",
    slug: "techbeauty",
    description: "An e-commerce website built using react, redux, and styled components.",
    content: [
      "As part of a Noroff assignment, I developed TechBeauty, a straightforward functional and responsive eCommerce website crafted using React and Redux. It included a working cart with state management provided by Redux. A validated contact form using yup and react-hook-form. The ability to sort, filter and search the products. The site was styled using styled components, and the product data was fetched from a provided API.",
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
    stack: ["SASS", "Bootstrap", "JavaScript", "React", "Redux"],
  },
  {
    title: "Forgotten Treasures",
    slug: "forgotten-treasures",
    description: "An online auction house website, using Noroffs API.",
    content: [
      "As a part of a semester project, I developed Forgotten Treasures, an auction house website using JavaScript, Sass, and Bootstrap. The site was designed to cater to a range of user interactions, be responsive, and user-friendly.",
      "Key user stories addressed within this project include account registration, login, and logout functionalities exclusive to users with a stud.noroff.no email address. Registered users enjoy the ability to update their avatar, view their total credit, create listings with detailed attributes, and place bids on other users' listings. The site also allows unregistered users to search through the available listings, ensuring accessibility and convenience for all site visitors.",
      "The repository includes Cypress tests that cover all the above user stories, demonstrating the site's functionality and reliability. ",
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
    stack: ["SASS", "BootStrap", "JavaScript"],
  },
  {
    title: "SoSocial",
    slug: "sosocial",
    description: "A social media website built using Noroff's API.",
    content: [
      "Sosocial, was created using Bootstrap, Sass, and JavaScript. The website is designed to cater to a wide range of user interactions and to provide a user-friendly social media experience.",
      "The platform allows users with @noroff.no or @stud.noroff.no emails to register profiles and log in. Post interactions are central to the Sosocial experience, with features allowing users to view, filter, and search the post content feed. Additionally, users can view a particular post content item by ID, as well as create, update, or delete their own post content items. These features provide a robust and interactive social media environment.",
      "In addition to the core features, it also includes several optional user stories. Users can create comments on posts, edit their profile media, follow or unfollow profiles, and react to post content items.",
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
    stack: ["SASS", "BootStrap", "JavaScript"],
  },
  {
    title: "The Fluffy Piranha Blog",
    slug: "fluffy-piranha-blog",
    description: "A dog blog, using a headless WordPress CMS for content.",
    content: [
      "In the culmination of my first year at Noroff, I undertook an exciting project called 'The Fluffy Piranha,' a dedicated blog for my dog. This website leveraged CSS, JavaScript, and WordPress as a headless CMS, allowing me to publish blog posts and facilitate interactive comments.",
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
    stack: ["CSS3", "JavaScript", "WordPress"],
  },
  {
    title: "Rainydays",
    slug: "rainydays",
    description: "A fictional site for an outdoor jacket seller, using a headless WordPress CMS for content.",
    content: [
      "In my first year at Noroff, I embarked on the Rainydays project,  an eCommerce website committed to selling outdoor jackets. The project started as a pure HTML and CSS exercise, marking my first step into the world of web development. This phase taught me the importance of building visually appealing and responsive websites, enhancing user experience through effective web design.",
      "As I progress I in my studies, I added further interactivity to the project through JavaScript, Implementing a shopping cart, checkout system, product page filter and search functionality. Finally I added a headless WordPress CMS to server the product data, integrating it with the existing JavaScript functionality.",
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
    stack: ["CSS3", "JavaScript", "WordPress"],
  },
  {
    title: "Community Science Museum",
    slug: "community-science-museum",
    description: "A website for a community science museum, as part of a first-semester project for Noroff.",
    content: [
      "My first semester at Noroff saw the birth of the Community Science Museum project, a website dedicated to a fictional science museum. The primary goal of this project was to create a site that would intrigue both children and parents alike, using only HTML and CSS, to create a visually captivating and responsive website.",
    ],
    imageSrc: "/assets/images/site_cards/communitysciencemuseum.jpg",
    liveUrl: "https://science-museum-alexander-barrett.netlify.app",
    github: "https://github.com/Anclagen/Community-Science-Museum-SP1",
    stack: ["HTML5", "CSS3"],
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
  },
];
