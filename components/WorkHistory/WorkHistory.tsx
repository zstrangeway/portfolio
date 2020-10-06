import { HistoryItem } from "../../types";
import WorkHistoryItem from "./WorkHistoryItem";
import styles from "../../styles/WorkHistory.module.scss";

const WorkHistory = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.section_header}>Work History</h2>
      {workHistory.map((historyItem) => {
        return (
          <WorkHistoryItem
            key={historyItem.employer}
            historyItem={historyItem}
          />
        );
      })}
    </section>
  );
};

export default WorkHistory;

const workHistory: HistoryItem[] = [
  {
    employer: "TASC",
    positions: [
      {
        title: "Application Developer III",
        location: "Madison, WI",
        start: "11/2019",
        end: "Present",
        duties: [
          "Refactored Android application for managing Flexible Spending Accounts to MVVM architecture resulting in a 95% decrease in crashes using Kotlin.",
          "Built new features for the android application including a feature to store pictures of benefit cards to remove the need to carry them with you.",
          "Built out a CI/CD pipeline for automated testing of Node.js, Angular, iOS and Android projects in AWS. Pipelines included automated testing, test coverage tracking and deployments.",
          "Implemented a SonarQube server in AWS on EC2 and RDS and automated the tracking of test coverage metrics and enforcement of quality gates on PR checks.",
          "Lead initiative to track down unused AWS resources, saving TASC over $10,000 per month.",
        ],
      },
    ],
  },
  {
    employer: "Gravy Live",
    positions: [
      {
        title: "Senior Software Engineer",
        location: "Madison, WI",
        start: "8/2017",
        end: "11/2019",
        duties: [
          "Developed live streaming social media single page application with server-side rendering that hosted streams with over 300 concurrent viewers using Vue.js and WebRTC.",
          "Developed live video streaming and shopping application with largest streams reaching over 3000 concurrent viewers for iOS and Android using WebRTC, Swift, and Kotlin.",
          "Utilized WebSockets to control state and enable real-time features within streams.",
          "Created numerous animations in the UI to give the applications a polished feel. Animations involved complex timings and Bezier curves.",
        ],
      },
    ],
  },
  {
    employer: "Greenleaf Media",
    positions: [
      {
        title: "Web Developer/Project Manager",
        location: "Madison, WI",
        start: "10/2016",
        end: "8/2017",
        duties: [
          "Developed and supported multiple brochure websites for various companies and organizations using WordPress, Joomla and PHP/JavaScript.",
        ],
        clients: [
          "University of Wisconsin - Madison’s Office of Childcare and Family Resources",
          "City of Kenosha",
          "Benvenuto’s",
          "Dimension IV",
          "FLOOR360",
        ],
      },
    ],
  },
  {
    employer: "World Council of Credit Unions",
    positions: [
      {
        title: "Web Software Developer",
        location: "Madison, WI",
        start: "10/2015",
        end: "10/2016",
        duties: [
          "Developed and supported internal and external web applications which are utilized by credit unions around the world using PHP including our internal CRM, CMS, task tracking, time entry, and budgetary systems as well as landing pages for international events.",
        ],
      },
    ],
  },
  {
    employer: "Ratelinx",
    positions: [
      {
        title: "Support Engineer",
        location: "Madison, WI",
        start: "6/2015",
        end: "10/2015",
        duties: [
          "Supported customers and debugged integrations between Ratelinx and customer ERP systems written in C#.NET.",
          "Used MS SQL Server Management Studio to troubleshoot database issues.",
          "Used Visual Studio to modify existing Crystal Reports.",
        ],
      },
    ],
  },
  {
    employer: "Telephone and Data Systems Corporation",
    positions: [
      {
        title: "IT Application Support Specialist",
        location: "Madison, WI",
        start: "5/2014",
        end: "4/2015",
        duties: [
          "Developed various web applications, B2B storefronts and advertising resource centers for customers such as using Magento and PHP.",
        ],
        clients: [
          "Citizen Watch",
          "Culvers",
          "Toppers Pizza",
          "Karastan Flooring",
          "Trek",
        ],
      },
      {
        title: "IT Support Technician 3",
        location: "Madison, WI",
        start: "10/2012",
        end: "5/2014",
        duties: [
          "Supported and mentored junior and mid-level IT Support Technicians.",
          "Used VB.Net to create multiple tools intended to help new employees troubleshoot issues and reduce call handle time.",
        ],
      },
      {
        title: "IT Support Technician 2",
        location: "Madison, WI",
        start: "8/2011",
        end: "10/2012",
        duties: [
          "Supported internal employees of TDS, TDS Telecom, and US Cellular with tech support inquiries.",
        ],
      },
      {
        title: "Sr Consumer Sales Advisor",
        location: "Madison, WI",
        start: "4/2009",
        end: "8/2011",
        duties: [
          "Supported and mentored customer service advisors.",
          "Handled customer escalations.",
        ],
      },
      {
        title: "Consumer Sales Support Advisor",
        location: "Madison, WI",
        start: "1/2009",
        end: "4/2009",
        duties: [
          "Piloted new department and helped define processes for entering orders requested by sales advisors.",
        ],
      },
      {
        title: "Consumer Sales Advisor",
        location: "Madison, WI",
        start: "8/2008",
        end: "1/2009",
        duties: [
          "Handled customer service inquiries and sold services to new and existing customers.",
        ],
      },
      {
        title: "Financial Services Advisor",
        location: "Madison, WI",
        start: "1/2008",
        end: "8/2008",
        duties: ["Handled customer inquiries about past due accounts."],
      },
    ],
  },
];
