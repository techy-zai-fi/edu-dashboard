export const courseData = [
  {
    id: 1,
    title: 'Biology',
    courses: 30,
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
    strengths: ["Strong Mechanics foundation", "Accurate problem-solving skills", "Quick in calculations"],
    challenges: ["Struggles with time management", "Weak in Thermodynamics"],
    opportunities: ["Master advanced Mechanics topics", "Participate in Physics Olympiads"],
    threats: ["Inconsistent scores under time pressure", "Competition from peers in core subjects"],
  },
  Chemistry: {
    strengths: ["Strong grasp of Periodic Table trends", "High accuracy in Organic Chemistry"],
    challenges: ["Weak practical skills", "Confusion in reaction mechanisms"],
    opportunities: ["Focus on lab experiments", "Participate in Chemistry workshops"],
    threats: ["Low confidence in competitive exams", "Over-reliance on theoretical learning"],
  },
  Biology: {
    strengths: ["Excellent knowledge of Genetics", "High diagram accuracy", "Quick understanding of Ecology"],
    challenges: ["Weak in Plant Physiology", "Tends to skip Anatomy"],
    opportunities: ["Focus on detailed Anatomy studies", "Leverage Genetics for research projects"],
    threats: ["Dependency on rote learning", "Difficulties in handling large syllabus"],
  },
};

export const recommendations = {
  Physics: ["Dedicate 30 minutes daily to Mechanics.", "Practice timed Thermodynamics problems.", "Review Newton's Laws weekly."],
  Chemistry: ["Revise Periodic Trends weekly.", "Focus on reaction mechanisms.", "Improve confidence in practical problem-solving."],
  Biology: ["Revise Genetics weekly.", "Focus on diagram-based questions.", "Master Plant Physiology concepts."],
};

export const heatmapData = Array.from({ length: 25 }, (_, index) => ({
  test: `Test ${index + 1}`,
  Physics: index % 5 === 0 ? 40 : index % 5 === 1 ? 55 : index % 5 === 2 ? 65 : index % 5 === 3 ? 80 : 90,
  Chemistry: index % 4 === 0 ? 45 : index % 4 === 1 ? 60 : index % 4 === 2 ? 75 : 85,
  Biology: index % 6 === 0 ? 35 : index % 6 === 1 ? 50 : index % 6 === 2 ? 70 : index % 6 === 3 ? 65 : index % 6 === 4 ? 85 : 95,
}));
