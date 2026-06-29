import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/cources/UG/PageHeader";

const UGPrograms = () => {
  const courses = [
    {
      title: "B.Sc Artificial Intelligence & Machine Learning",
      short: "B.Sc AI & ML",
      slug: "ai-ml",
      image: "/images/B.Sc Artificial Intelligence & Machine Learning.jfif",
    },
    {
      title: "B.Sc Microbiology",
      short: "Microbiology",
      slug: "microbiology",
      image: "/images/B.Sc Microbiology.jfif",
    },
    {
      title: "Bachelor of Journalism & Mass Communication",
      short: "BJMC",
      slug: "bjmc",
      image: "/images/Bachelor of Journalism & Mass Communication.jfif",
    },
    {
      title: "B.Sc Computer Science",
      short: "Computer Science",
      slug: "computer-science",
      image: "/images/B.Sc Computer Science.jfif",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <PageHeader
      title="UG Programs"
      breadcrumb="UG Programs"
    />

    <section className="max-w-7xl mx-auto px-4 py-16">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Undergraduate Programs
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore industry-oriented undergraduate courses designed
          to prepare students for successful careers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {courses.map((course) => (
          <div
            key={course.slug}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">

              <h3 className="text-xl font-bold mb-3">
                {course.short}
              </h3>

              <p className="text-gray-600 mb-5 min-h-[70px]">
                {course.title}
              </p>

              <Link
                to={`/ug/${course.slug}`}
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </Link>

            </div>
          </div>
        ))}

      </div>

    </section>

    <Footer />
  </div>
);
};

export default UGPrograms;
