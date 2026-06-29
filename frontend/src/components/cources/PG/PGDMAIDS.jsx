import React from "react";
import CourseTemplate from "../CourseTemplate";

const PGDMAIDS = () => {
  return (
    <CourseTemplate
      title="PGDM in Artificial Intelligence & Data Science"
      image="/images/PGDM AI & Data Science.jfif"
      duration="2 Years"
      seats="60"
      eligibility="Graduate in any discipline"

      overview="Specialized management programme integrating Artificial Intelligence, Machine Learning, Data Science and Business Analytics."

      highlights={[
        "Machine Learning",
        "Artificial Intelligence",
        "Python",
        "Business Analytics",
        "Cloud Computing",
        "Live Projects"
      ]}

      subjects={[
        "AI Fundamentals",
        "Machine Learning",
        "Python Programming",
        "Deep Learning",
        "Business Analytics",
        "Big Data"
      ]}

      careers={[
        "AI Consultant",
        "Data Scientist",
        "Business Analyst",
        "ML Engineer",
        "Analytics Manager",
        "Research Associate"
      ]}
    />
  );
};

export default PGDMAIDS;