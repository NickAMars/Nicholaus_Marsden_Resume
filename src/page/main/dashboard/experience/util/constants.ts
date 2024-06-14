enum COMPANIES {
    CWN="Cricket Wireless",
    UOR="Universal Orlando Resort",
    IBM="IBM",
    SBD= "Stanley Black and Decker",
    ITG= "Itlize Global LLC"
}
export const JOB_EXPERIENCE = [
    {Company:COMPANIES.CWN, JobTitle: "Full Stack Software Engineer", Location: "HYBRID" ,Years: "Feb 2024 - Present"}, 
    {Company:COMPANIES.UOR, JobTitle: "Senior Software Engineer", Location: "REMOTE" ,Years: "Aug 2023 - Feb 2024"}, 
    {Company:COMPANIES.IBM, JobTitle: "Software Engineer", Location: "REMOTE" ,Years: "Feb 2022 -  Aug 2023"}, 
    {Company:COMPANIES.SBD, JobTitle: "Software Developer", Location: "REMOTE" ,Years: "Oct 2020 - Feb 2022"}, 
    {Company:COMPANIES.ITG, JobTitle: "Full Stack Developer", Location: "Piscataway, NJ" ,Years: "June 2018 - Oct 2020"}, 
]
export const DESCRIBE_EXPEIENCE = {
    [COMPANIES.CWN]: [
        "Created a custom npm module to manipulate the DOM by injecting modals, updating plan features, and adding promotional content into a microservice frontend. This enhanced user experience by displaying account-specific content and errors across 15+ pages. Utilized JavaScript, TypeScript, and Node.js",
        "Implemented Google Analytics into the frontend system to track user interactions of over 40K+ daily users. This integration provided insights into the checkout process using JavaScript and TypeScript.",
        "Converted a legacy codebase from JavaScript, React, Angular 15 and Node.js to meet internal company standards. This redesign optimized new feature implementation time by 40-50%.",
        "Authored comprehensive documentation to improve code readability by over 60%, and introduced architectural standards",
        "Worked with a backend team of 12+ engineers using Swagger documentation for RESTful APIs. Technologies included TypeScript, JavaScript, Node.js, Java, Spring Boot, MongoDB,  Docker,  Kubernetes and Azure.",
        "Applied Jest for unit and integration tests, boosting test coverage of repositories to at least 90%."
    ],
    [COMPANIES.UOR]: [
        "Developed an event processor using Kafka in Node.js, increasing the throughput of ticket registrations to over 150+ per second for Universal Orlando Studio, leveraging AWS services for scalable infrastructure.",
        "Implemented a feature that integrated a backend solution within JavaScript, TypeScript, and React, allowing users to add up to 100 guests to their party, with backend services deployed on AWS.",
        "Created a RESTful API in JavaScript, TypeScript, and Node.js, enhancing customer satisfaction by enabling users to receive and modify their data within CouchDB and/or MSSQL. Additionally, implemented performance optimization features using Redis.",
        "Worked on Swagger documentation and applied test cases to edge cases, significantly increasing code quality."

    ],
    [COMPANIES.IBM]: [
        "Contributed to a $3B ecosystem growth project, working with technologies including JavaScript, React, MobX, Node.js, Java, Spring Boot, Redis, Kafka, Kubernetes, Docker, IBM Cloud, DB2, and CloudantDB.",
        "Transitioned 90K+ opportunities (Software/SaaS/Hardware) from PRM to DMT for processing new incentives. Utilized automated and manual approaches to determine incentive eligibility using TypeScript, React, and Node.js. ",
        "Created dynamic tables, user forms, transition logic, filters, and other key features in JavaScript, TypeScript, React, and MobX, enhancing user navigation through the UI/UX.",
        "Developed permissions, approval settings, exchange rates, and other essential features in TypeScript and Node.js, playing a crucial role in application delivery."
    ],
    [COMPANIES.SBD]: [
        "Engineered a system using JavaScript, React, Redux and Vue.js to harness industry-level activity data, informing day-to-day activities within each individual manufacturing plant.",
        "Data collected from an Azure MS SQL database was filtered using SQL queries in Node.js to provide CRUD operations, authentication, and authorization. I also cached data with Redis in Node.js and supplied data for charts, tables, widgets, and navigation forms in React."
    ],
    [COMPANIES.ITG]: [
        "Integrated a JavaScript and React front end with a backend AI solution, providing analyzed and highlighted medical details to emphasize affected areas in patient CT scans.",
        "Created an internal managerial system to track employee progress, provide feedback, ensure data security, and manage other aspects using JavaScript, TypeScript, Angular 6, Spring Boot, Node.js and AWS."
    ]
}
