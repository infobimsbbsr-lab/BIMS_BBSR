import React from "react";
import CourseTemplate from "../CourseTemplate";

const PGDMHealthcare = () => {
  return (
    <CourseTemplate
      title="PGDM in Healthcare Management"
      image="/images/PGDM Healthcare.jfif"
      duration="2 Years"
      seats="60"
      eligibility="Graduate in any discipline"

      overview="Prepare for leadership roles in hospitals, pharmaceuticals, healthcare consulting and health administration."

      highlights={[
        "Hospital Administration",
        "Healthcare Analytics",
        "Medical Tourism",
        "Healthcare Finance",
        "Hospital Internship",
        "Industry Experts"
      ]}

      subjects={[
        "Hospital Management",
        "Healthcare Marketing",
        "Health Economics",
        "Medical Law",
        "Healthcare Finance",
        "Hospital Operations"
      ]}

      careers={[
        "Hospital Manager",
        "Healthcare Consultant",
        "Medical Administrator",
        "Healthcare Executive",
        "Quality Manager",
        "Operations Manager"
      ]}
    />
  );
};

export default PGDMHealthcare;