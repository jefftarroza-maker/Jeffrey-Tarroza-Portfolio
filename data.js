/**
 * Teacher Portfolio Data Configuration - Jeffrey D. Tarroza, LPT
 * Official Resume Data & Verified Real Certificates
 */

const portfolioData = {
    personal: {
        name: "Jeffrey D. Tarroza, LPT",
        title: "IB-Trained ESL, Math & Science Educator",
        tagline: "Inspiring Inquiry, Global Mindedness, & Academic Excellence",
        bio: "Licensed Teacher with 3 years of ESL, Math, and Science teaching experience in international classrooms. Skilled in inquiry-based learning, technology-enhanced instruction, and managing large, diverse groups to drive academic excellence and global-mindedness.",
        objective: "To inspire curiosity and critical thinking in international learners through innovative, inquiry-driven teaching, while leveraging technology and differentiated instruction to create inclusive, high-achieving classrooms.",
        strengths: "My teaching strengths lie in my ability to create a supportive and engaging learning environment, my strong content knowledge, and my commitment to student success. I am confident in my ability to adapt my teaching methods to meet the needs of diverse learners and to continually improve my practice through reflection and professional development.",
        location: "Carmona City, Cavite, Philippines",
        email: "jeffreytarroza.educator@gmail.com",
        phone: "+63 912 295 1103",
        website: "https://jeffreytarrozateachingportfolio.netlify.app/",
        qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://jeffreytarrozateachingportfolio.netlify.app/",
        profilePhoto: "./assets/profile.jpg",
        resumeLink: "https://jeffreytarrozateachingportfolio.netlify.app/",
        stats: [
            { value: "3+ Years", label: "International ESL, Math & Science" },
            { value: "LPT", label: "Licensed Professional Teacher" },
            { value: "IB ATL", label: "Certified IB Educator" }
        ]
    },
    socialLinks: {
        email: "mailto:jeffreytarroza.educator@gmail.com",
        website: "https://jeffreytarrozateachingportfolio.netlify.app/"
    },
    philosophy: {
        headline: "Educational Philosophy & Pedagogy",
        summary: "My teaching philosophy is centered around creating a student-centered and inclusive learning environment where every student has the potential to succeed. I believe children are natural scientists; my role is to facilitate discovery through inquiry-based learning, bridging abstract concepts with hands-on experimentation.",
        commitments: [
            "Creating engaging and relevant learning experiences",
            "Providing timely and constructive feedback",
            "Promoting a growth mindset",
            "Using technology to enhance learning",
            "Continually reflecting on practice and seeking professional development"
        ],
        pillars: [
            {
                icon: "🔬",
                title: "Inquiry-Based Learning (IB)",
                description: "Integrating International Baccalaureate (IB) Approaches to Learning (ATL) to foster critical thinking, collaboration, and global citizenship."
            },
            {
                icon: "💻",
                title: "Technology-Enhanced & ICT Instruction",
                description: "Leveraging digital resources, LMS, ClassIn, Zoom, Kahoot, and Nearpod to achieve 95% learner engagement across online and face-to-face classrooms."
            },
            {
                icon: "🌏",
                title: "Multilingual & Differentiated Pedagogy",
                description: "Specialized in teaching foreign students and multilingual learners, ensuring language acquisition and subject mastery aligned with international school standards."
            }
        ]
    },
    gallery: [
        {
            image: "./assets/sjchs_classroom.jpg",
            title: "Classroom-Based Teaching (Differentiated Instruction)",
            location: "San Jose Community High School, Philippines",
            description: "Facilitating 360+ instructional hours for Grade 9 students in large-group classrooms of 50+ learners using hands-on differentiation."
        },
        {
            image: "./assets/small_group_study.jpg",
            title: "Small Group International Instruction",
            location: "Washington School Inc. (International Learners)",
            description: "Interactive small-group study session with international students utilizing globes, inquiry questions, and supportive mentorship."
        },
        {
            image: "./assets/winter_camp_ceremony.jpg",
            title: "38th Winter Camp Completion Ceremony",
            location: "Washington School Inc., Carmona, Cavite",
            description: "Leading international campers and co-teachers during the 38th Winter Camp completion ceremony and awards night."
        },
        {
            image: "./assets/sjchs_presentation.jpg",
            title: "ICT & TLE Instructional Presentation",
            location: "San Jose Community High School",
            description: "Demonstrating practical digital tools and ICT lesson concepts for large secondary classroom sections."
        },
        {
            image: "./assets/summer_camp_staff.jpg",
            title: "39th Summer Camp Faculty & Staff Team",
            location: "Washington School Inc. (IB Candidate School)",
            description: "Collaborating with international faculty and camp coordinators during the 39th Summer Camp (July 25 – August 22, 2025)."
        }
    ],
    certifications: [
        {
            title: "WSI-IB Approaches to Teaching and Learning (ATL)",
            issuer: "Washington School Inc. (Facilitated by IBDP Team)",
            date: "April 10, 2025",
            badge: "IB Certified",
            image: "./assets/certificates/cert_wsi_ib_atl.png",
            description: "10-day intensive in-house training on IB ATL standards and inquiry-based pedagogy."
        },
        {
            title: "Embedding IB Philosophy in Online Learning",
            issuer: "Washington School Inc.",
            date: "June 22, 2026",
            badge: "21 Training Hours",
            image: "./assets/certificates/cert_wsi_ib_online.png",
            description: "Focusing on integrating IB Philosophy, ATL, IB Learner Profile, and assessment practices into virtual learning."
        },
        {
            title: "120-Hour TESOL/TEFL Certificate",
            issuer: "World TESOL Academy & Teachers Record",
            date: "Jan 13, 2025",
            badge: "Cert # WTA222101957",
            image: "./assets/certificates/cert_tesol.jpg",
            description: "Accredited by ACCREDITAT & The CPD Certification Service for teaching English to non-native speakers."
        },
        {
            title: "Teaching Internship Certificate of Completion",
            issuer: "San Jose Community High School (DepEd Cavite)",
            date: "July 7, 2023",
            badge: "360 Hours",
            image: "./assets/certificates/cert_sjchs_internship.png",
            description: "Full-time teaching internship completing 6 units / 360 hours in TLE and ICT subjects."
        },
        {
            title: "Certificate of Appreciation - 38th Winter Camp",
            issuer: "Washington School Inc., Carmona, Cavite",
            date: "Feb 27, 2025",
            badge: "Winter Camp Leadership",
            image: "./assets/certificates/cert_wsi_winter_camp.png",
            description: "Recognized for outstanding dedication in mentoring international campers."
        }
    ],
    sampleLessonPlan: {
        title: "Grade 6 Science: Matter - Plant Parts and Their Functions",
        provocativeQuestion: "What would happen if a plant lost one of its parts? Could it still survive? Why or why not?",
        learnerProfile: [
            { trait: "Inquirer", desc: "Ask questions and investigate plant structures." },
            { trait: "Thinker", desc: "Analyze how plant parts work together." },
            { trait: "Caring", desc: "Appreciate the importance of plants in sustaining life." }
        ],
        globalContext: "Scientific and Technical Innovation — Understanding plant structures helps us protect biodiversity and improve sustainable food production.",
        activities: [
            { step: "Engage", desc: "Observe a real plant or virtual model and predict the function of each part." },
            { step: "Explore", desc: "In pairs or breakout rooms, label plant structures and discuss their functions." },
            { step: "Explain", desc: "Share findings and compare scientific observations with classmates." },
            { step: "Extend", desc: "Design a 'super plant' by modifying one plant part and explaining its survival advantage." },
            { step: "Reflect", desc: "Write or record one new understanding and one remaining question." }
        ],
        assessment: [
            "Label a plant diagram correctly.",
            "Explain the function of each plant part using complete sentences.",
            "Participate actively in discussions and justify ideas with scientific evidence."
        ]
    },
    skills: {
        pedagogy: ["Inquiry-Based Learning (IB)", "Differentiated Instruction", "Scaffolding", "Curriculum Alignment"],
        management: ["Behavioral Modification", "Student Engagement (95% Rate)", "Group Dynamics", "Large Classroom Leadership (50+ Learners)"],
        technology: ["LMS Platforms", "ClassIn", "Zoom", "Kahoot", "Nearpod", "Interactive Whiteboards", "Microsoft Suite", "ICT Digital Tools"],
        languages: ["English (Fluent)", "Filipino (Native)"]
    },
    experience: [
        {
            role: "Licensed Teacher | 3 Years International ESL, Math & Science",
            organization: "Washington School, Inc.",
            period: "Jul 2023 – Jul 2026",
            badge: "International Educator",
            responsibilities: [
                "Delivered inquiry-based ESL, Mathematics, and Science instruction to diverse international learners across online and face-to-face classrooms.",
                "Consistently ranked Top 3 Performer (Sept 2024) for instructional excellence and student achievement.",
                "Integrated IB Approaches to Learning (ATL) and differentiated pedagogy to foster critical thinking, collaboration, and global citizenship.",
                "Achieved 95% learner engagement through effective classroom management and technology-enhanced learning strategies.",
                "Specialized in teaching foreign students and multilingual learners, ensuring language acquisition and subject mastery aligned with international school standards."
            ],
            skills: ["ESL, Math & Science", "IB ATL Standards", "Online & Face-to-Face", "Top 3 Performer", "Multilingual Learners"]
        },
        {
            role: "Pre-Service Classroom Teacher | ICT Subject",
            organization: "San Jose Community High School",
            period: "Apr 2023 – Jul 2023",
            badge: "Grade 9 ICT & TLE",
            responsibilities: [
                "Delivered 360+ instructional hours to Grade 9 students in large classrooms of 50+ learners, ensuring engagement and participation.",
                "Developed and implemented daily lesson plans for Technology and Livelihood Education (TLE), adapting teaching strategies to diverse learning needs.",
                "Integrated ICT tools and digital resources to enhance comprehension and foster practical skills.",
                "Collaborated with faculty, administrators, and parents to monitor student progress and provide targeted support.",
                "Applied classroom management techniques to maintain a positive and productive learning environment."
            ],
            skills: ["ICT Tools & Digital Resources", "TLE Curriculum", "Classroom Leadership (50+ Learners)", "360+ Instructional Hours"]
        },
        {
            role: "Service & Team Trainer",
            organization: "Jollibee Food Corps",
            period: "Jun 2018 – Apr 2023",
            badge: "Leadership & Training",
            responsibilities: [
                "Trained new employees on SOPs, developing strong leadership and instructional skills.",
                "Managed high-pressure situations with focus on conflict resolution and customer satisfaction."
            ],
            skills: ["Team Leadership", "Instructional SOP Training", "Conflict Resolution", "Communication"]
        }
    ],
    education: [
        {
            degree: "Bachelor of Technology and Livelihood Education (Home Economics)",
            institution: "Eulogio 'Amang' Rodriguez Institute of Science and Technology",
            year: "Aug 2023",
            honors: "Degree Conferred"
        },
        {
            degree: "Licensed Professional Teacher (LPT)",
            institution: "Professional Regulation Commission | Philippines",
            year: "Certified",
            honors: "Board Certified Teacher"
        },
        {
            degree: "120-Hour TEFL/TESOL Certification",
            institution: "Teachers Record & World TESOL Academy",
            year: "Jan 2025",
            honors: "International TEFL/TESOL Certified"
        },
        {
            degree: "IB Certificate: Approaches to Teaching and Learning (ATL)",
            institution: "Washington School Inc.",
            year: "Apr 2025",
            honors: "IB Educator Certificate"
        }
    ],
    professionalDevelopment: [
        {
            title: "Embedding IB Philosophy in Online Learning",
            provider: "Washington School Inc.",
            date: "June 2026"
        },
        {
            title: "Empowerment Week: Enhancing Effective Learning",
            provider: "Washington School Inc. (WSI)",
            date: "July 2024"
        },
        {
            title: "ESL Training Program",
            provider: "Washington School Inc.",
            date: "July 2023"
        }
    ],
    references: [
        {
            name: "Roxanne Marie F. Parong",
            title: "Department Head",
            email: "roxanne.fabriga.parong@gmail.com",
            phone: "+63 915 688 415"
        },
        {
            name: "Larabel Belleza",
            title: "Senior Administrative Officer",
            email: "arahlarabell@gmail.com",
            phone: "+63 976 609 3011"
        }
    ],
    showcase: [
        {
            title: "International ESL, Mathematics & Science Unit",
            grade: "Online & Face-to-Face Classrooms",
            description: "Inquiry-based curriculum integrating IB Approaches to Learning (ATL) for multilingual learners, maintaining a 95% engagement rate.",
            tags: ["ESL, Math & Science", "IB ATL", "Multilingual Pedagogy"]
        },
        {
            title: "ICT & Digital Resources Workshop",
            grade: "Grade 9 ICT & TLE",
            description: "Integrated digital ICT tools and practical skills training for large classrooms of 50+ students across 360+ instructional hours.",
            tags: ["ICT Tools", "TLE Curriculum", "50+ Learners"]
        },
        {
            title: "Gamified Multilingual Language Acquisition",
            grade: "International Learners",
            description: "Differentiated language acquisition strategies using ClassIn, Kahoot, and Nearpod, recognized with a Top 3 Performer award.",
            tags: ["ClassIn & Nearpod", "Top 3 Performer", "Technology-Enhanced"]
        }
    ]
};

if (typeof module !== 'undefined') {
    module.exports = portfolioData;
}
