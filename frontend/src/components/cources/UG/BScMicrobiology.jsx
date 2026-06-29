import CourseTemplate from "../CourseTemplate";

export default function BScMicrobiology() {
  return (
    <CourseTemplate
      title="B.Sc Microbiology"
      image="/images/B.Sc Microbiology.jfif"
      duration="3 Years"
      seats="60"
      eligibility="+2 Science (PCB) or Equivalent"
      overview="
      The B.Sc Microbiology program focuses on the study of microscopic organisms and their applications in medicine, food, pharmaceuticals, and environmental sectors. Students develop expertise in microbial identification, culture techniques, immunology, and quality control methods. The course combines theoretical knowledge with practical laboratory experience in state-of-the-art facilities.
      "
      highlights={[
        "Comprehensive Microbiology Curriculum",
        "Modern Laboratory Facilities",
        "Research & Analysis Techniques",
        "Pharmaceutical Microbiology Training",
        "Quality Control Methods",
        "Industrial Microbiology",
        "Internship Opportunities",
        "Career Support & Placement"
      ]}
      subjects={[
        "General Microbiology",
        "Bacterial Physiology",
        "Virology",
        "Immunology",
        "Pharmaceutical Microbiology",
        "Food Microbiology",
        "Industrial Microbiology",
        "Environmental Microbiology",
        "Microbial Genetics",
        "Applied Microbiology",
        "Quality Control & Assurance",
        "Research Methodology",
        "Microbial Taxonomy",
        "Clinical Microbiology",
        "Project Work & Internship"
      ]}
      careers={[
        "Microbiologist",
        "Quality Assurance Officer",
        "Laboratory Technician",
        "Pharmaceutical Microbiologist",
        "Food Quality Manager",
        "Environmental Microbiologist",
        "Clinical Microbiologist",
        "Research Scientist",
        "Production Manager",
        "Health Officer",
        "Medical Representative",
        "Entrepreneur"
      ]}
    />
  );
}
