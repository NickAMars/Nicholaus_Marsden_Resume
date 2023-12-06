export const PRIMARY_SKILLS = [
    {subject:"HTML", rank: 5}, 
    {subject:"CSS", rank: 5},
    {subject:"JavaScript", rank: 5},
    {subject:"TypeScript", rank: 5},
    {subject:"ReactJS", rank: 5},
    {subject:"NodeJS", rank: 5},
    {subject:"Express", rank: 5}
]

export const SECONDARY_SKILLS = [
    {subject:"Angular", rank: 5}, 
    {subject:"Spring Boot", rank: 5},
    {subject:"Kafka", rank: 5},
    {subject:"Redis", rank: 5},
    {subject:"NoSQL", rank: 5},
    {subject:"SQL", rank: 5},
    {subject:"Jest", rank: 5},
    {subject:"Docker", rank: 5},
    {subject:"Kubernetes", rank: 5},
    {subject:"AWS", rank: 5},
    {subject:"Microsoft Azure", rank: 5},
    {subject:"Junit", rank: 5 }
]

enum COMPANIES {
    NBCU="NBCU",
    IBM="IBM",
    SBD= "Stanley Black and Decker",
    ITG= "Itlize Global LLC"
}

export const Experience = [
    {Company:COMPANIES.NBCU, JobTitle: "Sr. Integration Engineer", Location: "REMOTE" ,Years: "June 2023 - Present"}, 
    {Company:COMPANIES.IBM, JobTitle: "Senior Software Engineer", Location: "REMOTE" ,Years: "Feb 2022 -  June 2023"}, 
    {Company:COMPANIES.SBD, JobTitle: "Full Stack Developer", Location: "REMOTE" ,Years: "Oct 2020 - Feb 2022"}, 
    {Company:COMPANIES.ITG, JobTitle: "Full Stack Developer", Location: "Piscataway, NJ" ,Years: "June 2019 - Oct 2020"}, 
]
export const ExperienceDescription = {
    [COMPANIES.NBCU]: [

    ],
    [COMPANIES.IBM]: [
        
    ],
    [COMPANIES.SBD]: [
        
    ],
    [COMPANIES.ITG]: [
        
    ]
}