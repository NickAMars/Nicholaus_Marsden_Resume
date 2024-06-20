enum COMPANIES {
    CWN="Cricket Wireless",
    UOR="Universal Orlando Resort",
    IBM="IBM",
    SBD= "Stanley Black and Decker",
    ITG= "Itlize Global LLC"
}
export const JOB_EXPERIENCE = [
    {Company:COMPANIES.CWN, JobTitle: "Full Stack Engineer", Location: "Atlanta, GA (HYBRID)" ,Years: "Feb 2024 - Present"}, 
    {Company:COMPANIES.UOR, JobTitle: "Senior Software Engineer", Location: "REMOTE" ,Years: "Aug 2023 - Feb 2024"}, 
    {Company:COMPANIES.IBM, JobTitle: "Software Engineer", Location: "REMOTE" ,Years: "Feb 2022 -  Aug 2023"}, 
    {Company:COMPANIES.SBD, JobTitle: "Software Engineer", Location: "REMOTE" ,Years: "Oct 2020 - Feb 2022"}, 
    {Company:COMPANIES.ITG, JobTitle: "Full Stack Developer", Location: "Piscataway, NJ" ,Years: "June 2018 - Oct 2020"}, 
]
export const DESCRIBE_EXPEIENCE = {
    [COMPANIES.CWN]: [
        "Created a custom NPM module to manipulate the DOM by injecting modals, updating plan features, and adding promotional content into a microservice frontend, enhancing user experience across 15+ pages using JavaScript, TypeScript, and Node.js.",
        "Implemented Google Analytics to track user interactions for over 40K+ daily users, providing insights into the checkout process.",
        "Converted a legacy codebase from JavaScript, React, Angular 15, and Node.js, optimizing new feature implementation time by 40-50%.",
        "Collaborated with a backend team of 12+ engineers using Swagger documentation for RESTful APIs. Technologies included TypeScript, JavaScript, Node.js, Java, Spring Boot, MongoDB, Docker, Kubernetes, and Azure.",
        "Worked with a backend team of 12+ engineers using Swagger documentation for RESTful APIs. Technologies included TypeScript, JavaScript, Node.js, Java, Spring Boot, MongoDB,  Docker,  Kubernetes and Azure.",
        "Applied Jest for unit and integration tests, boosting test coverage to at least 90%."
    ],
    [COMPANIES.UOR]: [
        "Developed an event processor using Kafka in Node.js, increasing ticket registration throughput to over 150+ per second, leveraging AWS services.",
        "Worked in an Agile environment to develop a Theme Park application for Universal Studios, implementing React with HOC for reusable structure.",
        "Integrated backend solutions within JavaScript, TypeScript, and React, allowing users to add up to 100 guests to their party, with backend services deployed on AWS.",
        "Managed NoSQL and SQL databases including CouchDB and MSSQL for record storage.",
        "Created RESTful APIs in JavaScript, TypeScript, and Node.js, enhancing customer satisfaction by enabling users to receive and modify their data."
    ],
    [COMPANIES.IBM]: [
        "Contributed to a $3B ecosystem growth project using JavaScript, React, MobX, Node.js, Redis, Kafka, Kubernetes, Docker, IBM Cloud DB2, and CloudantDB.",
        "Built dynamic, interactive web applications using React to create reusable components with Carbon components, styled-components, and CSS.",
        "Transitioned 90K+ opportunities (Software/SaaS/Hardware) from PRM to DMT for processing new incentives, utilizing automated approaches in TypeScript, React, and Node.js.",
        "Developed dynamic tables, user forms, transition logic, filters, and other key features in JavaScript, TypeScript, React, and MobX, enhancing user navigation.",
        "Implemented essential features such as permissions approval settings and exchange rates in TypeScript and Node.js."
    ],
    [COMPANIES.SBD]: [
        "Engineered systems using JavaScript, React, Redux, and Vue.js to harness industry-level activity data, informing day-to-day activities within manufacturing plants.",
        "Utilized Redux for state management and props for effective data communication.",
        "Collected and filtered data from Azure MS SQL database with SQL queries, utilizing Node.js RESTful API for authentication and authorization; cached data with Redis.",
        "Implemented middleware using Joi for validation, role-based access, and error handling.",
        "Documented microservices APIs in NodeJS with Swagger, facilitating easy accessibility through Azure API Management."
    ],
    [COMPANIES.ITG]: [
        "Integrated a JavaScript and React front end with a backend AI solution to analyze and highlight medical details in patient CT scans.",
        "Leveraged Webpack to optimize the build process of React.js applications.",
        "Created an internal managerial system to track employee progress, provide feedback, ensure data security, and manage other aspects using JavaScript, TypeScript, Angular 6, Spring Boot, Node.js, and AWS.",
        "Expanded knowledge and proficiency in Angular 6 and Spring Boot through dynamic team collaboration.",
        "Implemented global state management using the NGRX library for efficient data management."
    ]
}
