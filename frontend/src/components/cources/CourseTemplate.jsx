import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHeader from "./UG/PageHeader";
import { Link } from "react-router-dom";

const CourseTemplate = ({
  title,
  image,
  duration,
  seats,
  eligibility,
  overview,
  highlights,
  subjects,
  careers,
}) => {
  return (
    <>
      <Navbar />

      <PageHeader
        title={title}
        breadcrumb="Programs"
      />

      <div className="bg-gray-50 min-h-screen">

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <img
              src={image}
              alt={title}
              className="rounded-3xl shadow-xl w-full h-[450px] object-cover"
            />

            <div>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
                Admissions Open 2026-27
              </span>

              <h1 className="text-5xl font-bold mt-5 mb-6">
                {title}
              </h1>

              <div className="grid md:grid-cols-3 gap-4 mb-8">

                <div className="bg-white p-4 rounded-xl shadow">
                  <h4 className="font-bold">Duration</h4>
                  <p>{duration}</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                  <h4 className="font-bold">Seats</h4>
                  <p>{seats}</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                  <h4 className="font-bold">Eligibility</h4>
                  <p>{eligibility}</p>
                </div>

              </div>

              <div className="flex gap-4">

                <Link
                  to="/apply"
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold"
                >
                  Apply Now
                </Link>

                <button className="border border-gray-300 px-8 py-3 rounded-xl font-semibold">
                  Download Brochure
                </button>

              </div>
            </div>

          </div>
        </section>

        {/* About */}
        <section className="max-w-7xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-3xl shadow p-10">

            <h2 className="text-3xl font-bold mb-6">
              About The Program
            </h2>

            <p className="text-gray-600 leading-8">
              {overview}
            </p>

          </div>
        </section>

        {/* Highlights */}
        <section className="max-w-7xl mx-auto px-4 mb-10">

          <h2 className="text-3xl font-bold mb-8">
            Program Highlights
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow"
              >
                {item}
              </div>
            ))}

          </div>

        </section>

        {/* Subjects */}
        <section className="max-w-7xl mx-auto px-4 mb-10">

          <div className="bg-white rounded-3xl shadow p-10">

            <h2 className="text-3xl font-bold mb-8">
              Major Subjects
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-xl"
                >
                  {subject}
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* Career */}
        <section className="max-w-7xl mx-auto px-4 mb-10">

          <div className="bg-white rounded-3xl shadow p-10">

            <h2 className="text-3xl font-bold mb-8">
              Career Opportunities
            </h2>

            <div className="grid md:grid-cols-3 gap-4">

              {careers.map((career, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-xl"
                >
                  {career}
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* Admission Process */}
        <section className="max-w-7xl mx-auto px-4 mb-10">

          <div className="bg-white rounded-3xl shadow p-10">

            <h2 className="text-3xl font-bold mb-8">
              Admission Process
            </h2>

            <div className="grid md:grid-cols-5 gap-4">

              <div className="bg-blue-50 p-5 rounded-xl text-center">
                Apply Online
              </div>

              <div className="bg-blue-50 p-5 rounded-xl text-center">
                Document Verification
              </div>

              <div className="bg-blue-50 p-5 rounded-xl text-center">
                Admission Approval
              </div>

              <div className="bg-blue-50 p-5 rounded-xl text-center">
                Fee Payment
              </div>

              <div className="bg-blue-50 p-5 rounded-xl text-center">
                Enrollment
              </div>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 pb-16">

          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-3xl p-12 text-center">

            <h2 className="text-4xl font-bold mb-4">
              Admissions Open For 2026-27
            </h2>

            <p className="mb-8 text-lg">
              Start Your Academic Journey With BIMS Today.
            </p>

            <Link
              to="/apply"
              className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold"
            >
              Apply Now
            </Link>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
};

export default CourseTemplate;