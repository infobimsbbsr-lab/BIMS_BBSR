import React from "react";
import CourseTemplate from "../CourseTemplate";

const PGDMFinanceHR = () => {
  return (
    <CourseTemplate
      title="PGDM in Finance & Human Resource"
      image="/images/PGDM Finance & HR.jfif"
      duration="2 Years"
      seats="60"
      eligibility="Graduate in any discipline"

      overview="Develop expertise in corporate finance, accounting, investment, talent acquisition, organizational behaviour and HR strategy."

      highlights={[
        "Finance Specialization",
        "HR Analytics",
        "Leadership",
        "Corporate Training",
        "Internships",
        "Placement Support"
      ]}

      subjects={[
        "Financial Management",
        "Investment Analysis",
        "HR Management",
        "Labour Laws",
        "Payroll",
        "Strategic HRM"
      ]}

      careers={[
        "Financial Analyst",
        "HR Manager",
        "Payroll Executive",
        "Investment Advisor",
        "Talent Acquisition",
        "Corporate Trainer"
      ]}
    />
  );
};

export default PGDMFinanceHR;