import React from "react";
import CourseTemplate from "../CourseTemplate";

const PGDM = () => {
  return (
    <CourseTemplate
      title="Post Graduate Diploma in Management (PGDM)"
      image="/images/PGDM.jfif"
      duration="2 Years"
      seats="120"
      eligibility="Graduate in any discipline"
      overview="PGDM is a two-year professional management programme focusing on leadership, strategic management, finance, marketing, human resources, entrepreneurship and business analytics."

      highlights={[
        "AICTE Approved",
        "Industry-Oriented Curriculum",
        "Case Study Learning",
        "Summer Internship",
        "Corporate Training",
        "Placement Assistance"
      ]}

      subjects={[
        "Marketing Management",
        "Financial Management",
        "Human Resource",
        "Business Analytics",
        "Operations Management",
        "Strategic Management"
      ]}

      careers={[
        "Business Analyst",
        "Marketing Manager",
        "HR Manager",
        "Operations Manager",
        "Consultant",
        "Entrepreneur"
      ]}
    />
  );
};

export default PGDM;