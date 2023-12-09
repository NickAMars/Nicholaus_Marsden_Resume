export const PRIMARY_SKILLS = [
    {subject:"HTML", rank: 5}, 
    {subject:"CSS", rank: 5},
    {subject:"JavaScript", rank: 5},
    {subject:"TypeScript", rank: 5},
    {subject:"ReactJS", rank: 5},
    {subject:"NodeJS", rank: 5},
    {subject:"Express", rank: 5},
    {subject:"Kafka", rank: 5},
    {subject:"Redis", rank: 5},
    {subject:"NoSQL", rank: 5},
    {subject:"SQL", rank: 5},
    {subject:"Jest", rank: 5}
]

export const SECONDARY_SKILLS = [
    {subject:"Angular", rank: 4}, 
    {subject:"Spring Boot", rank: 4},
    {subject:"Docker", rank: 4},
    {subject:"Junit", rank: 4 },
    {subject:"Kubernetes", rank: 3.5},
    {subject:"AWS", rank: 3.5},
    {subject:"Microsoft Azure", rank: 3.5}
]

enum COMPANIES {
    NBCU="NBCU",
    IBM="IBM",
    SBD= "Stanley Black and Decker",
    ITG= "Itlize Global LLC"
}

export const JOB_EXPERIENCE = [
    {Company:COMPANIES.NBCU, JobTitle: "Sr. Integration Engineer", Location: "REMOTE" ,Years: "June 2023 - Present"}, 
    {Company:COMPANIES.IBM, JobTitle: "Senior Software Engineer", Location: "REMOTE" ,Years: "Feb 2022 -  June 2023"}, 
    {Company:COMPANIES.SBD, JobTitle: "Full Stack Developer", Location: "REMOTE" ,Years: "Oct 2020 - Feb 2022"}, 
    {Company:COMPANIES.ITG, JobTitle: "Full Stack Developer", Location: "Piscataway, NJ" ,Years: "June 2019 - Oct 2020"}, 
]
export const DESCRIBE_EXPEIENCE = {
    [COMPANIES.NBCU]: [
        "Worked in an Agile environment to develop on Theme Park application for Universal Studio",
        "Develop restful API, event processor, functions in a microservice environment using tools like express, Kafka and azure function for transfer of data in a NodeJS environment.",
        "Applied knowledge of typescript, using properties such as class, decorators, overload functions and generic.",
        "Worked with NoSQL and SQL database such as CouchDB and MSSQL for storing records.",
        "Applied test towards code base in a BDD approach with mocha and chai, before updating to the GitLab pipeline.",
        "Collaborated with the internal team, which consists of architecture, developers, and QA. To provide feedback on system updates, divide the epic from Jira into individual pieces and estimate the complexity of the tickets."

    ],
    [COMPANIES.IBM]: [
        "Proficient in building dynamic, interactive web applications using React and its core concepts such as components, state, and props. ",
        "Utilized carbon components and styled-components library with CSS to create reusable components with JSX. ",
        "Designed and implemented interactions between components and view models using the MVVM architectural approach. ",
        "Leveraged MobX.js to observe and react to state changes in modules for efficient view updates. ",
        "Developed RESTful APIs using expressJS and Implemented scheduling tasks in Node.js with cronJS. ",
        "Developed a Node.js Event Emitter to trigger events for logging in CloudantDB and data transmission to other services. ",
        "Improved test coverage to 90% for modules using Jest framework with unit and integrational testing. ",
        "Collaborated with Business Analysts, Project Owners, Stakeholders, and Developers on Epics and story requirements. "
    ],
    [COMPANIES.SBD]: [
        "Developed and modified single-page applications using React.js and Node.js, optimizing user experience and application performance. ",
        "Implemented WebSockets to enhance real-time notifications and updates, reducing polling and ensuring efficient data transmission. ",
        "Utilized redux.js as a powerful state management library, enabling seamless data handling across components, and leveraged props for effective data communication. ",
        "Documented microservices APIs with swagger documentation, facilitating easy accessibility through Azure API management for stakeholders. ",
        "Implemented Middleware using Joi to enforce role-based access control and validate path variables, query parameters, and request bodies, ensuring data security and application integrity. ",
        "Worked with internationalization (i18n) support in the application, accommodating diverse language variations to reach a global audience. ",
        "Contributed to test development for the CI/CD Jenkins pipeline."
    ],
    [COMPANIES.ITG]: [
        "Successfully migrated a module from the legacy implementation of Jinja to React.js, improving user experience and streamlining codebase maintenance. ",
        "Leveraged Webpack configuration to optimize the build process of React.js applications, utilizing plugins and loaders for seamless development. ",
        "Collaborated within a dynamic team environment to expand knowledge and proficiency in Angular 6 and Spring Boot, contributing to project success.",
        "Implemented global state management using the NGRX library, skillfully using actions, reducers, effects, and selectors for efficient data management. ",
        "Utilized Swagger UI as an API documentation tool, providing clear and accessible representations of backend APIs, enhancing team productivity.",
        "Implemented robust exception handling strategies throughout the module, utilizing Controller Advice to format and return JSON responses, ensuring application stability. ",
        "Effectively used ORM Hibernate to persist Plain Old Java Object (POJO) instances to and from the database, ensuring data integrity and seamless data manipulation. "
    ]
}

export const educations = [
    {
        name: "University of Arkansas",
        year: "May 2019",
        major: "Bachelor's of Computer Engineering"
    },
    {
        name: "Los Angeles Valley College",
        year: "June 2016",
        major: "Associates of Physics"
    }
];
