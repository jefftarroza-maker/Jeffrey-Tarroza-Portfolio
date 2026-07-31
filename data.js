/**
 * Teacher Portfolio Data Configuration
 * Easily update your personal details, experience, philosophy, and contact info here.
 */

const portfolioData = {
    personal: {
        name: "Jeff Tarroza",
        title: "K-5 Elementary Educator",
        tagline: "Nurturing Young Minds Through Curiosity, Care, & Creative Inquiry",
        bio: "Passionate K-5 elementary educator dedicated to creating joyful, inclusive, and high-impact learning experiences. Specializing in foundational literacy, early STEM integration, and social-emotional learning, I strive to empower every child to explore, ask questions, and build lifelong confidence.",
        gradeFocus: "Grade K - 5 All Subjects",
        location: "Greater Metropolitan Area",
        email: "jeff.tarroza.education@email.com",
        phone: "+1 (555) 234-5678",
        profilePhoto: "./assets/profile.jpg",
        resumeLink: "#contact",
        stats: [
            { value: "5+", label: "Years Experience" },
            { value: "K-5", label: "State Certified" },
            { value: "150+", label: "Students Inspired" }
        ]
    },
    socialLinks: {
        linkedin: "https://linkedin.com",
        teachersPayTeachers: "https://teacherspayteachers.com",
        googleClassroom: "https://classroom.google.com",
        twitter: "https://twitter.com"
    },
    philosophy: {
        headline: "My Educational Philosophy",
        summary: "Every child possesses innate curiosity and potential. My role as an educator is to provide a safe, structured, and vibrant space where students feel encouraged to experiment, collaborate, and grow into thoughtful lifelong learners.",
        pillars: [
            {
                icon: "🌱",
                title: "Student-Centered Inquiry",
                description: "Learning begins with curiosity. I design hands-on lessons that encourage students to ask questions, solve real-world problems, and take ownership of their learning journey."
            },
            {
                icon: "🤝",
                title: "Inclusive & Supportive Classroom",
                description: "A strong classroom community relies on mutual respect, empathy, and emotional safety. I foster a supportive culture where every student's voice and background are celebrated."
            },
            {
                icon: "🎨",
                title: "Differentiated & Creative Instruction",
                description: "No two students learn the exact same way. I integrate multi-sensory strategies, visual media, technology, and scaffolded instruction to meet every child's unique needs."
            }
        ]
    },
    experience: [
        {
            role: "Lead Elementary Educator (Grade 3)",
            organization: "Bright Futures Elementary School",
            period: "2023 - Present",
            badge: "Current Role",
            responsibilities: [
                "Designed and executed comprehensive curriculum covering Reading, Writing, Mathematics, and Integrated STEM.",
                "Implemented differentiated reading groups that improved grade-level literacy proficiency by 28%.",
                "Pioneered a monthly 'Young Inventors' STEM lab encouraging collaborative hands-on engineering projects.",
                "Maintained frequent transparent communication with parents via weekly digital updates and conferences."
            ],
            skills: ["Curriculum Design", "STEM Integration", "Literacy Stations", "Parent Partnership"]
        },
        {
            role: "Associate Teacher (Grade 2)",
            organization: "Oakridge Elementary Academy",
            period: "2021 - 2023",
            badge: "Full-Time",
            responsibilities: [
                "Co-taught 24 second-grade students, facilitating small group guided math and phonics instruction.",
                "Integrated digital interactive learning tools and Google Classroom into daily lesson routines.",
                "Organized field trips, science fairs, and school-wide literacy night celebrations."
            ],
            skills: ["Phonics Instruction", "Co-Teaching", "EdTech Tools", "Classroom Management"]
        },
        {
            role: "Learning Support Specialist",
            organization: "Community Youth Learning Center",
            period: "2020 - 2021",
            badge: "Specialist",
            responsibilities: [
                "Provided targeted 1-on-1 and small-group tutoring in foundational math and reading for K-5 students.",
                "Developed individualized learning growth plans and tracked progress using formative assessments."
            ],
            skills: ["1-on-1 Intervention", "Formative Assessment", "Social-Emotional Learning"]
        }
    ],
    education: [
        {
            degree: "Bachelor of Science in Elementary Education (K-5)",
            institution: "State University College of Education",
            year: "2020",
            honors: "Magna Cum Laude"
        },
        {
            degree: "State Teaching License & K-5 Elementary Certification",
            institution: "Department of Education",
            year: "2020",
            honors: "Active & Certified"
        },
        {
            degree: "Specialization in Early Childhood STEM & Inclusive Pedagogy",
            institution: "Educational Leadership Institute",
            year: "2022",
            honors: "Professional Certificate"
        }
    ],
    showcase: [
        {
            title: "Hands-on Ecosystems & Plant Life Cycle Unit",
            grade: "Grade 3 Science & Literacy",
            description: "An integrated 3-week inquiry unit where students grow bean plants, keep observation logs, and publish a illustrated class field guide.",
            tags: ["STEM", "Science Journaling", "Hands-on"]
        },
        {
            title: "Interactive Storytellers Workshop",
            grade: "Grade 2 & 3 English Language Arts",
            description: "Students write original narrative stories, sketch character profiles, and read aloud to kindergarten reading buddies.",
            tags: ["Literacy", "Creative Writing", "Peer Mentorship"]
        },
        {
            title: "Math Mystery Explorers Station",
            grade: "K - Grade 3 Mathematics",
            description: "Gamified math learning centers utilizing physical manipulatives and tablet challenges to build number sense and problem solving.",
            tags: ["Math Center", "Gamification", "Manipulatives"]
        }
    ]
};

if (typeof module !== 'undefined') {
    module.exports = portfolioData;
}
