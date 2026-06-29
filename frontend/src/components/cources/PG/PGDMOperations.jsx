import React from "react";
import CourseTemplate from "../CourseTemplate";

const PGDMOperations = () => {
  return (
    <CourseTemplate
      title="PGDM in Operations Management"
      image="/images/PGDM Operations.jfif"
      duration="2 Years"
      seats="60"
      eligibility="Graduate in any discipline"

      overview="Focus on logistics, supply chain, quality management, production planning and operations excellence."

      highlights={[
        "Supply Chain",
        "Lean Management",
        "ERP",
        "Quality Control",
        "Industry Visits",
        "Placement Assistance"
      ]}

      subjects={[
        "Operations Management",
        "Supply Chain",
        "Inventory Management",
        "Production Planning",
        "ERP Systems",
        "Logistics"
      ]}

      careers={[
        "Operations Manager",
        "Supply Chain Analyst",
        "Production Manager",
        "Logistics Manager",
        "Procurement Manager",
        "Quality Analyst"
      ]}
    />
  );
};

export default PGDMOperations;