import CourseTemplate from "../CourseTemplate";

export default function BScComputerScience() {
  return (
    <CourseTemplate
      title="B.Sc Computer Science"
      image="/images/B.Sc Computer Science.jfif"
      duration="3 Years"
      seats="60"
      eligibility="+2 Science (PCM) or Equivalent"
      overview="
      The B.Sc Computer Science program provides comprehensive knowledge of computing fundamentals, software development, databases, and emerging technologies. Students gain expertise in programming languages, web development, cloud computing, and cybersecurity. The curriculum is designed to make graduates industry-ready and capable of solving real-world problems through technology.
      "
      highlights={[
        "Strong Programming Foundation",
        "Web Development & Cloud Computing",
        "Database Management Systems",
        "Software Development Life Cycle",
        "Cybersecurity Fundamentals",
        "Project-Based Learning",
        "Internship & Placement Support",
        "Modern Computer Labs"
      ]}
      subjects={[
        "Programming in C",
        "Object-Oriented Programming",
        "Web Development",
        "Database Management Systems",
        "Data Structures & Algorithms",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Cybersecurity",
        "Cloud Computing",
        "Artificial Intelligence",
        "Web Applications",
        "Mobile App Development",
        "Project Work & Internship"
      ]}
      careers={[
        "Software Developer",
        "Web Developer",
        "Database Administrator",
        "System Administrator",
        "Cybersecurity Professional",
        "Cloud Computing Engineer",
        "IT Consultant",
        "Software Architect",
        "Quality Assurance Engineer",
        "Data Analyst",
        "Network Administrator",
        "IT Project Manager",
        "Entrepreneur"
      ]}
    />
  );
}
