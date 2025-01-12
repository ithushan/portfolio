const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Higher National Diploma',
                degree: 'Advance Technological Institute - Jaffna',
                detail: "Finished all academic requirements. internship ongoing.",
                year: '2022 - 2024'
            },
            {
                id: 1,
                title: 'A-Level Index-4039437',
                degree: 'Vavuniya vipulanantha College',
                detail: "Mathematics - C | Physics - S | Chemistry - S",
                year: '2017 - 2019'
            }
            // {
            //     id: 2,
            //     title: 'Falcon Academy',
            //     degree: 'SSC, Science Subjects',
            //     detail: "Completed SSC part 1 and part 2 in Science subjects from Falcon Academy Seni Gumbat Kohat",
            //     year: '2013-2015'
            // },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Sun British Education College vavuniya',
                role: 'IT Technician',
                url: 'no website',
                desc: 'Managed technical support, poster creation, visual communication, and administrative tasks for an education center.',
                year: 'Few months in 2021',
                location: 'Vavuniya'
            },
            {
                id: 2,
                title: 'Accron Revolutions Private Limited',
                role: 'Full-stack developer',
                url: 'https://www.accronautobot.com/',
                desc: 'I have successfully created responsive front-ends for Point of Sale (POS) projects using modern technologies, ensuring seamless user experiences across devices. Additionally, I designed and developed a web-based project management tool that significantly improved team collaboration and project efficiency. My proficiency in Next.js, StyleX, Tailwind CSS, and Firebase has allowed me to deliver scalable and user-friendly solutions, contributing to the overall success of the company’s technical initiatives and ensuring high-quality, efficient project outcomes.',
                year: '08/2024 - Present',
                location: 'Vavuniya'
            },
            // {
            //     id: 3,
            //     title: 'Encoder Bytes',
            //     role: 'PHP Developer',
            //     url: 'https://www.encoderbytes.com/',
            //     desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
            //     year: '09/2020 - 02/2021',
            //     location: 'Peshawar, Pakistan'
            // },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
