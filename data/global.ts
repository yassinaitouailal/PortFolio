type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
  support: {
    buymeacoffee: string
    paypal: string
    message: string
  }
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Projects",
    path: "/projects",
  },
  // {
  //   title: "Designs",
  //   path: "/designs",
  // },
  {
    title: "About",
    path: "/about",
  },
  // {
  //   title: "Contact",
  //   path: "/contact",
  // },
];


export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        // {
        //   name: "Designs",
        //   link: "/designs",
        //   leavesWebsite: false,
        // },
        {
          name: "About",
          link: "/about",
          leavesWebsite: false,
        },
        // {
        //   name: "Contact",
        //   link: "/contact",
        //   leavesWebsite: false,
        // },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/braydentw",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/braydentw/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Instagram",
          link: "https://dribbble.com/braydentw",
          icon: "/static/icons/instagram-white-icon2.png",
          leavesWebsite: true,
        },
        {
          name: "WhatsApp",
          link: "https://indiehackers.com/braydentw",
          icon: "/static/icons/whttt.png",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:contact@braydentw.io",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "braydenw",
    paypal: "braydentw",
    message: "I appreciate your support very much! 💙",
  },
};
