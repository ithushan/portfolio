const expertise = [
    {
        id: 0,
        title: 'Front-End Development',
        desc: 'Proficient in developing responsive and visually appealing user interfaces using modern frameworks and tools, including HTML, CSS, JavaScript, React, Next.js, TypeScript, Tailwind CSS, and StyleX. Experienced in implementing role-based projects and ensuring seamless responsiveness across devices.',
    },
    {
        id: 1,
        title: 'Back-End Development',
        desc: "Familiar with server-side development using Node.js and Firebase. Experience in building and integrating RESTful APIs, managing databases, and ensuring secure authentication processes. Hands-on practice with PHP for back-end implementations in college projects.",
    },
    {
        id: 2,
        title: 'Database Management Systems (DBMS)',
        desc: 'Practical knowledge of database design and management concepts. Skilled in using Firebase (NoSQL) for real-time database solutions and proficient in SQL basics for structured data handling.',
    },
    {
        id: 3,
        title: 'Data Structures and Algorithms (DSA)',
        desc: "Solid foundation in data structures and algorithms, with experience applying DSA concepts to solve problems efficiently and optimize application performance.",
    },
    {
        id: 4,
        title: 'Version Control (Git and GitHub)',
        desc: "Experienced in using Git and GitHub for version control, repository management, and collaborative development. Familiar with branching, pull requests, and resolving merge conflicts.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
