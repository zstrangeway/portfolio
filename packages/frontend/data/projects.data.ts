import { Project } from "~/models";

const projects: Project[] = [
  {
    title: "Gravy Live",
    description:
      "A live streaming e-commerce app for iOS and Android. Created while employed by Gravy Live. Has since pivoted and rebranded to Spin Live.",
    technologies: ["iOS", "Android", "Swift", "Kotlin", "Vue.js", "WebRTC"],
    url: "https://www.spin.live/",
    appleAppStoreUrl: "https://apps.apple.com/us/app/spin-live/id1519146498",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=live.spin.android",
  },
  {
    title: "UW OCCFR Website",
    description:
      "A website for the UW-Madison Office of Childcare and Family Resources. Created while employed by Greenleaf Media.",
    technologies: ["Wordpress", "PHP", "Javascript"],
    url: "https://occfr.wisc.edu/",
  },
  {
    title: "Jones Payne Website",
    description:
      "A website for The Jones Payne Group. Created while employed by Greenleaf Media.",
    technologies: ["Wordpress", "PHP", "Javascript"],
    url: "https://www.jonespayne.com/",
  },
  {
    title: "Red Comet Creations",
    description:
      "A website for a small business specializing in quilting and embroidery.",
    technologies: ["Next.js", "Node.js", "Typescript", "AWS", "Serverless"],
    githubUrl: "https://github.com/zstrangeway/red-comet",
  },
  {
    title: "Portfolio",
    description: "My online resume and portfolio.",
    technologies: ["Next.js", "Node.js", "Typescript", "AWS", "Serverless"],
    githubUrl: "https://github.com/zstrangeway/portfolio",
  },
];

export default projects;