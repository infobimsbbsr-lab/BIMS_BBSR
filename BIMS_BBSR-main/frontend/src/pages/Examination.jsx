import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  Download,
  FileText,
  GraduationCap,
  ShieldCheck,
  ClipboardCheck,
  AlertCircle,
  Phone,
} from "lucide-react";

const Examination = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const examSteps = [
    {
      title: "Exam Notification",
      text: "Official examination notices are released through the academic office.",
    },
    {
      title: "Form Fill-up",
      text: "Students complete exam form submission with required documents and fees.",
    },
    {
      title: "Admit Card Issue",
      text: "Eligible students receive admit cards before examination schedule.",
    },
    {
      title: "Final Examination",
      text: "Students appear for semester or internal examinations as per schedule.",
    },
  ];

  const rules = [
    "Students must carry admit card and college ID card.",
    "Report to examination hall before scheduled time.",
    "Mobile phones and smart devices are not allowed.",
    "Unfair means will lead to disciplinary action.",
    "Students must follow all invigilator instructions.",
    "Attendance in internal assessment is mandatory.",
  ];

  const downloads = [
    {
      name: "Exam Form",
      link: "/downloads/Exam_Form.html",
    },
    {
      name: "Exam Schedule",
      link: "/downloads/Exam_Schedule.html",
    },
    {
      name: "Academic Calendar",
      link: "/downloads/Academic_Calendar.html",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 font-sans antialiased">
      <Navbar />

      {/* NOTICE BAR */}
      <div className="bg-amber-500 text-slate-950 font-bold text-xs md:text-sm py-2 px-4 shadow-sm border-b border-amber-600 relative z-30 flex items-center overflow-hidden">
        <span className="bg-slate-950 text-white px-2 py-0.5 rounded-sm text-[10px] uppercase tracking-wider mr-3 flex-shrink-0">
          Exam Notice
        </span>
        <marquee scrollamount="4">
          Semester examination form fill-up and internal assessment updates will
          be published through the examination cell.
        </marquee>
      </div>

      {/* HERO */}
      <section className="relative bg-[#0d1e3d] text-white border-b-8 border-amber-500 py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-950/70" />

        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-sm px-3 py-1.5 text-xs font-bold text-amber-400 mb-6 uppercase tracking-widest">
              <Award size={14} /> Examination Cell
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-slate-100">
              Examination & Academic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 font-sans font-black">
                Evaluation System
              </span>
            </h1>

            <p className="mt-5 text-base text-slate-300 max-w-xl leading-relaxed">
              The Examination Cell manages semester examinations, internal
              assessments, admit card processing, exam schedules, result
              coordination, and academic evaluation procedures.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => scrollToSection("process")}
                className="bg-amber-500 text-slate-950 px-6 py-3.5 rounded-sm font-bold hover:bg-amber-400 transition-colors shadow-md flex items-center gap-2 text-sm uppercase tracking-wider"
              >
                View Process <ArrowRight size={16} />
              </button>

              <button
                onClick={() => scrollToSection("downloads")}
                className="border border-slate-400/40 bg-white/5 px-6 py-3.5 rounded-sm font-bold hover:bg-white/10 transition-colors text-sm uppercase tracking-wider"
              >
                Downloads
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
              {[
                ["Internal", "Assessment"],
                ["Semester", "Examination"],
                ["Admit Card", "Issue"],
                ["Result", "Updates"],
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-900/60 border border-slate-700/40 rounded-sm p-3.5"
                >
                  <h4 className="text-sm font-bold text-amber-400">
                    {item[0]}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {item[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* INFO CARD */}
          <div className="bg-white text-slate-900 rounded-sm shadow-xl p-6 md:p-8 border-t-4 border-amber-500 relative z-10">
            <h2 className="text-xl font-serif font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <ClipboardCheck className="text-amber-500" size={20} />
              Examination Office
            </h2>

            <p className="text-slate-500 text-xs mt-1 mb-6">
              Students must follow all official examination guidelines and
              notices issued by the academic authority.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: <Calendar size={18} />,
                  title: "Exam Schedule",
                  text: "Published before examination commencement.",
                },
                {
                  icon: <FileText size={18} />,
                  title: "Admit Card",
                  text: "Issued after successful form fill-up verification.",
                },
                {
                  icon: <BookOpen size={18} />,
                  title: "Internal Marks",
                  text: "Based on attendance, assignments, tests and conduct.",
                },
                {
                  icon: <GraduationCap size={18} />,
                  title: "Result Updates",
                  text: "Declared as per academic examination timeline.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 bg-slate-50 border border-slate-200 rounded-sm p-4"
                >
                  <div className="w-9 h-9 bg-[#0d1e3d] text-amber-400 rounded-sm flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK PROFILE */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-sm shadow-md border-x border-b border-slate-200 grid grid-cols-2 md:grid-cols-4 overflow-hidden divide-x divide-slate-100">
          {[
            ["Internal", "Continuous Evaluation"],
            ["Semester", "Final Examination"],
            ["Practical", "Lab / Project Based"],
            ["Records", "Academic Verification"],
          ].map((item, i) => (
            <div key={i} className="p-5 text-center bg-white">
              <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">
                {item[0]}
              </h3>
              <p className="text-xs font-semibold text-amber-600 mt-0.5">
                {item[1]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
            Examination Procedure
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
            Step-by-step examination process
          </h2>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {examSteps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-sm p-6 border border-slate-200 shadow-xs"
            >
              <div className="w-11 h-11 rounded-sm bg-[#0d1e3d] text-amber-400 flex items-center justify-center font-black mb-5">
                {i + 1}
              </div>

              <h3 className="font-serif font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RULES + DOWNLOADS */}
      <section id="downloads" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
              Exam Guidelines
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
              Important rules for students
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {rules.map((rule, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-sm p-4 border border-slate-200 flex items-start gap-3"
                >
                  <CheckCircle2
                    size={16}
                    className="text-emerald-600 flex-shrink-0 mt-0.5"
                  />
                  <span className="font-bold text-slate-700 text-xs uppercase tracking-wide">
                    {rule}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0d1e3d] text-white rounded-sm p-7 border-t-4 border-amber-500 shadow-md">
            <h3 className="text-xl font-serif font-bold mb-5">
              Examination Downloads
            </h3>

            <div className="space-y-3">
              {downloads.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-white/10 hover:bg-white/15 p-3 rounded-sm text-sm font-bold"
                >
                  {item.name}
                  <Download size={17} />
                </a>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="text-xs text-slate-300 mb-3">
                For examination-related queries, contact the academic office.
              </p>

              <a
                href="tel:+917008411323"
                className="flex items-center gap-3 text-amber-400 font-black"
              >
                <PhoneIcon /> +91 70084 11323
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXAM TYPES */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
            Evaluation System
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
            Academic assessment components
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <BookOpen />,
              title: "Internal Assessment",
              text: "Includes class tests, assignments, attendance, presentations and academic participation.",
            },
            {
              icon: <FileText />,
              title: "Semester Examination",
              text: "Final academic examination conducted as per semester examination schedule.",
            },
            {
              icon: <ShieldCheck />,
              title: "Practical / Project Evaluation",
              text: "Project work, lab work, viva, presentations and practical-based performance evaluation.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-sm p-8 border border-slate-200 shadow-xs"
            >
              <div className="w-12 h-12 rounded-sm bg-slate-100 text-[#0d1e3d] flex items-center justify-center mb-6 border border-slate-200">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif">
                {item.title}
              </h3>
              <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
            Examination Helpdesk
          </span>
          <h2 className="text-2xl font-serif font-bold mt-1 text-slate-900">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "When will the examination schedule be published?",
              a: "The examination schedule is published by the academic office before the examination period.",
            },
            {
              q: "Is admit card mandatory?",
              a: "Yes, students must carry admit card and valid college ID card during examination.",
            },
            {
              q: "How are internal marks calculated?",
              a: "Internal marks may include attendance, assignments, class tests, presentations and academic conduct.",
            },
          ].map((item, i) => (
            <details
              key={i}
              className="bg-white rounded-sm p-4 border border-slate-200 shadow-xs group"
            >
              <summary className="font-bold text-slate-900 text-sm cursor-pointer flex items-center justify-between list-none">
                {item.q}
                <ChevronDown
                  size={16}
                  className="text-slate-400 group-open:rotate-180 transition-transform"
                />
              </summary>
              <p className="text-slate-600 mt-3 text-xs leading-relaxed border-t border-slate-100 pt-3">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto bg-[#0d1e3d] border-b-8 border-amber-500 rounded-sm p-8 md:p-12 text-white grid lg:grid-cols-2 gap-8 items-center shadow-md">
          <div>
            <h2 className="text-xl md:text-3xl font-serif font-bold text-slate-100">
              Need Examination Support?
            </h2>
            <p className="text-slate-400 mt-2 text-xs max-w-md">
              Contact the academic office for exam form, admit card, schedule
              and result-related assistance.
            </p>
          </div>

          <a
            href="tel:+917008411323"
            className="lg:ml-auto bg-amber-500 text-slate-950 px-6 py-3.5 rounded-sm font-bold hover:bg-amber-400 transition-colors shadow-md flex items-center gap-2 text-xs uppercase tracking-widest border border-amber-600"
          >
            Contact Exam Cell <ArrowRight size={14} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const PhoneIcon = () => <Phone size={18} />;

export default Examination;