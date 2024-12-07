export const courseData = [
  {
    id: 1,
    title: 'Biology',
    courses: 25,
    color: '#FFB020',
    backgroundColor: '#E8F5E9',
    icon: '/IconB.png'
  },
  {
    id: 2,
    title: 'Physics',
    courses: 25,
    color: '#FF5252',
    backgroundColor: '#efecde',
    icon: '/IconP.png'
  },
  {
    id: 4,
    title: 'Chemistry',
    courses: 25,
    color: '#FF5252',
    backgroundColor: '#e8deef',
    icon: '/IconC.png'
  },
];

export const instructorsData = [
  {
    id: 1,
    name: 'Nil Yeager',
    course: '5 Design Course',
    avatar: '/avatars/nil.jpg'
  },
  // Add more instructors as needed
];

export const monthlyProgressData = [
  { month: 'Jan', progress: 20 },
  { month: 'Feb', progress: 35 },
  { month: 'Mar', progress: 45 },
  { month: 'Apr', progress: 60 },
  { month: 'May', progress: 75 },
  { month: 'Jun', progress: 85 }
];


export const swotData = {
  Physics: {
    strengths: [
      "Strong Mechanics foundation",
      "Accurate problem-solving skills",
      "Quick in calculations",
      "Clear understanding of kinematics and dynamics",
    ],
    challenges: [
      "Struggles with time management",
      "Weak in Thermodynamics",
      "Difficulty visualizing complex physical scenarios",
      "Limited practice in advanced Physics topics",
    ],
    opportunities: [
      "Master advanced Mechanics topics",
      "Participate in Physics Olympiads",
      "Leverage simulation tools to improve understanding",
      "Attend specialized Physics webinars and workshops",
    ],
    threats: [
      "Inconsistent scores under time pressure",
      "Competition from peers in core subjects",
      "Over-dependence on formulas without derivation understanding",
      "Risk of neglecting numerical problem-solving for theoretical topics",
    ],
  },
  Chemistry: {
    strengths: [
      "Strong grasp of Periodic Table trends",
      "High accuracy in Organic Chemistry",
      "Good understanding of Acid-Base Chemistry",
      "Efficient memorization of chemical formulas and equations",
    ],
    challenges: [
      "Weak practical skills",
      "Confusion in reaction mechanisms",
      "Difficulty balancing chemical equations quickly",
      "Lack of confidence in Physical Chemistry concepts",
    ],
    opportunities: [
      "Focus on lab experiments",
      "Participate in Chemistry workshops",
      "Explore computational chemistry tools to understand reactions",
      "Take advantage of group study sessions for better practical skills",
    ],
    threats: [
      "Low confidence in competitive exams",
      "Over-reliance on theoretical learning",
      "Pressure to meet time-based accuracy in complex reactions",
      "Risk of missing out on interdisciplinary connections with Physics and Biology",
    ],
  },
  Biology: {
    strengths: [
      "Excellent knowledge of Genetics",
      "High diagram accuracy",
      "Quick understanding of Ecology",
      "Strong ability to memorize terminologies and classifications",
    ],
    challenges: [
      "Weak in Plant Physiology",
      "Tends to skip Anatomy",
      "Difficulty correlating biological processes with real-life applications",
      "Overwhelmed by the breadth of the syllabus",
    ],
    opportunities: [
      "Focus on detailed Anatomy studies",
      "Leverage Genetics for research projects",
      "Participate in Biology Olympiads or quizzes",
      "Engage in fieldwork and practical experiments for better insights",
    ],
    threats: [
      "Dependency on rote learning",
      "Difficulties in handling a large syllabus",
      "Struggle to retain information over long periods",
      "Risk of underperforming in application-based questions",
    ],
  },
};

export const recommendations = {
  Physics: [
    "Dedicate 30 minutes daily to Mechanics.",
    "Practice timed Thermodynamics problems.",
    "Review Newton's Laws weekly.",
    "Focus on improving understanding of entropy and its application in Thermodynamics problems.",
  ],
  Chemistry: [
    "Revise Periodic Trends weekly.",
    "Focus on reaction mechanisms.",
    "Improve confidence in practical problem-solving.",
    "Clarify the difference between nucleophilic and electrophilic substitution reactions in Organic Chemistry.",
  ],
  Biology: [
    "Revise Genetics weekly.",
    "Focus on diagram-based questions.",
    "Master Plant Physiology concepts.",
    "Address confusion in the Calvin cycle by breaking it into stages for clarity.",
  ],
};

export const heatmapData = Array.from({ length: 25 }, (_, index) => ({
  test: `Test ${index + 1}`,
  Physics: index % 5 === 0 ? 40 : index % 5 === 1 ? 55 : index % 5 === 2 ? 65 : index % 5 === 3 ? 80 : 90,
  Chemistry: index % 4 === 0 ? 45 : index % 4 === 1 ? 60 : index % 4 === 2 ? 75 : 85,
  Biology: index % 6 === 0 ? 35 : index % 6 === 1 ? 50 : index % 6 === 2 ? 70 : index % 6 === 3 ? 65 : index % 6 === 4 ? 85 : 95,
}));
