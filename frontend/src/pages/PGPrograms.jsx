import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/cources/PG/PageHeader";

const PGPrograms = () => {
  const courses = [
    {
      title: "Post Graduate Diploma in Management",
      short: "PGDM",
      slug: "pgdm",
      image: "/images/PGDM.jfif",
    },
    {
      title: "PGDM in Artificial Intelligence & Data Science",
      short: "PGDM AI & DS",
      slug: "pgdm-ai-ds",
      image: "/images/PGDM AI & Data Science.jfif",
    },
    {
      title: "PGDM in Finance & Human Resource",
      short: "PGDM Finance & HR",
      slug: "pgdm-finance-hr",
      image: "/images/PGDM Finance & HR.jfif",
    },
    {
      title: "PGDM in Healthcare Management",
      short: "PGDM Healthcare",
      slug: "pgdm-healthcare",
      image: "/images/PGDM Healthcare.jfif",
    },
    {
      title: "PGDM in Operations Management",
      short: "PGDM Operations",
      slug: "pgdm-operations",
      image: "/images/PGDM Operations.jfif",
    },
    {
      title: "Master of Social Work",
      short: "MSW",
      slug: "msw",
      image: "/images/MSW (Master of Social Work).jfif",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <PageHeader
        title="PG Programs"
        breadcrumb="PG Programs"
      />

      <section className="max-w-7xl mx-auto px-4 py-16">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Postgraduate Programs
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Explore our postgraduate programmes designed to develop
            leadership, innovation, management skills, research
            abilities and professional excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

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
                  to={`/pg/${course.slug}`}
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

export default PGPrograms;
