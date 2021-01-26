import { Project } from "~/models";
import { v4 as uuidv4 } from "uuid";

const projects: Project[] = [
  {
    id: uuidv4(),
    title: "TASC Universal Benefit Account",
    description:
      "A mobile and web app for managing Flex spending accounts. Created while employed by TASC.",
    technologies: ["iOS", "Android", "Swift", "Kotlin", "Angular", "AWS"],
    url: "https://www.tasconline.com/ubaaccess",
    appleAppStoreUrl:
      "https://apps.apple.com/us/app/tasc-app-for-iphone/id1445397411",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.tasconline.uba.pux.android",
  },
  {
    id: uuidv4(),
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
    id: uuidv4(),
    title: "UW OCCFR Website",
    description:
      "A website for the UW-Madison Office of Childcare and Family Resources. Created while employed by Greenleaf Media.",
    technologies: ["Wordpress", "PHP", "Javascript"],
    url: "https://occfr.wisc.edu/",
  },
  {
    id: uuidv4(),
    title: "Jones Payne Website",
    description:
      "A website for The Jones Payne Group. Created while employed by Greenleaf Media.",
    technologies: ["Wordpress", "PHP", "Javascript"],
    url: "https://www.jonespayne.com/",
  },
  {
    id: uuidv4(),
    title: "Red Comet Creations",
    description:
      "A website for a small business specializing in quilting and embroidery.",
    technologies: ["Next.js", "Node.js", "Typescript", "AWS", "Serverless"],
    githubUrl: "https://github.com/zstrangeway/red-comet",
  },
  {
    id: uuidv4(),
    title: "Portfolio",
    description: "My online resume and portfolio.",
    technologies: ["Next.js", "Node.js", "Typescript", "AWS", "Serverless"],
    githubUrl: "https://github.com/zstrangeway/portfolio",
  },
];

export default projects;
