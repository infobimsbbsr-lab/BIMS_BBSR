import React from "react";
import CourseTemplate from "../CourseTemplate";

const MSW = () => {
  return (
    <CourseTemplate
      title="Master of Social Work (MSW)"
      image="/images/MSW (Master of Social Work).jfif"
      duration="2 Years"
      seats="60"
      eligibility="Graduate in any discipline"

      overview="MSW prepares students to work in community development, NGOs, healthcare organizations, counselling, rural development and social welfare."

      highlights={[
        "Field Work",
        "NGO Internship",
        "Community Projects",
        "Counselling Skills",
        "Social Research",
        "Professional Practice"
      ]}

      subjects={[
        "Social Work Practice",
        "Community Development",
        "Social Policy",
        "Counselling",
        "Human Rights",
        "NGO Management"
      ]}

      careers={[
        "Social Worker",
        "NGO Officer",
        "Counsellor",
        "CSR Executive",
        "Community Development Officer",
        "Research Associate"
      ]}
    />
  );
};

export default MSW;