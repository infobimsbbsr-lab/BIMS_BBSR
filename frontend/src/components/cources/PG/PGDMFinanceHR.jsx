import React from "react";
import CourseTemplate from "../CourseTemplate";

const PGDMFinanceHR = () => {
  return (
    <CourseTemplate
      title="PGDM in Finance, Marketing & Human Resource Management"
      image="/images/PGDM Finance & HR.jfif"
      duration="2 Years"
      seats="60"
      eligibility="Bachelor's Degree in any discipline from a recognized University"

      overview="The PGDM in Finance, Marketing & Human Resource Management is a two-year postgraduate programme designed to develop future business leaders with expertise in financial management, marketing strategies, human resource practices, and organizational leadership. The programme combines classroom learning, case studies, industry interaction, internships, and practical projects to prepare students for managerial roles in diverse industries."

      highlights={[
        "Finance, Marketing & HR Specializations",
        "Industry-Oriented Curriculum",
        "Live Projects & Case Studies",
        "Corporate Internship Opportunities",
        "Leadership & Communication Development",
        "100% Placement Assistance"
      ]}

      subjects={[
        "Financial Management",
        "Investment & Portfolio Management",
        "Marketing Management",
        "Digital Marketing",
        "Consumer Behaviour",
        "Sales & Distribution Management",
        "Human Resource Management",
        "Organizational Behaviour",
        "Talent Acquisition & Recruitment",
        "Training & Development",
        "Performance Management",
        "Business Analytics"
      ]}

      careers={[
        "Financial Analyst",
        "Marketing Manager",
        "Human Resource Manager",
        "Investment Consultant",
        "Business Development Manager",
        "Talent Acquisition Specialist",
        "Sales Manager",
        "Digital Marketing Executive",
        "HR Business Partner",
        "Corporate Relationship Manager",
        "Operations Executive",
        "Management Consultant"
      ]}
    />
  );
};

export default PGDMFinanceHR;