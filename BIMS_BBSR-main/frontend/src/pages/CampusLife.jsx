import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Camera,
  CheckCircle2,
  ChevronDown,
  Dumbbell,
  GraduationCap,
  HeartHandshake,
  Music,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";

const CampusLife = () => {
  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 font-sans antialiased">
      <Navbar />

      {/* NOTICE BAR */}
      <div className="bg-amber-500 text-slate-950 font-bold text-xs md:text-sm py-2 px-4 shadow-sm border-b border-amber-600 relative z-30 flex items-center overflow-hidden">
        <span className="bg-slate-950 text-white px-2 py-0.5 rounded-sm text-[10px] uppercase tracking-wider mr-3 flex-shrink-0">
          Campus Update
        </span>

        <marquee scrollamount="4">
          Student clubs, annual cultural activities, seminars, workshops and
          sports engagement programs are actively conducted at the BIMS campus.
        </marquee>
      </div>

      {/* HERO */}
      <section className="relative bg-[#0d1e3d] text-white border-b-8 border-amber-500 py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-950/70" />

        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-sm px-3 py-1.5 text-xs font-bold text-amber-400 mb-6 uppercase tracking-widest">
              <Award size={14} /> Student Experience
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-slate-100">
              Campus Life & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 font-sans font-black">
                Student Activities
              </span>
            </h1>

            <p className="mt-5 text-base text-slate-300 max-w-xl leading-relaxed">
              BIMS provides a vibrant campus environment focused on academics,
              leadership, creativity, sports, personality development and
              student engagement through various institutional activities.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-amber-500 text-slate-950 px-6 py-3.5 rounded-sm font-bold hover:bg-amber-400 transition-colors shadow-md flex items-center gap-2 text-sm uppercase tracking-wider">
                Explore Campus <ArrowRight size={16} />
              </button>

              <button className="border border-slate-400/40 bg-white/5 px-6 py-3.5 rounded-sm font-bold hover:bg-white/10 transition-colors text-sm uppercase tracking-wider">
                Student Activities
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
              {[
                ["Clubs", "Student Engagement"],
                ["Events", "Campus Activities"],
                ["Sports", "Physical Wellness"],
                ["Culture", "Fest & Celebrations"],
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
              <Users className="text-amber-500" size={20} />
              Student Development Activities
            </h2>

            <p className="text-slate-500 text-xs mt-1 mb-6">
              Students participate in various academic and extracurricular
              activities for overall personality development.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: <Music size={18} />,
                  title: "Cultural Programs",
                  text: "Annual functions, freshers events and talent activities.",
                },
                {
                  icon: <Trophy size={18} />,
                  title: "Sports Activities",
                  text: "Indoor and outdoor sports engagement opportunities.",
                },
                {
                  icon: <BookOpen size={18} />,
                  title: "Seminars & Workshops",
                  text: "Academic and industry interaction sessions.",
                },
                {
                  icon: <HeartHandshake size={18} />,
                  title: "Leadership Activities",
                  text: "Teamwork, communication and personality growth.",
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

                    <p className="text-xs text-slate-600 mt-1">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-sm shadow-md border-x border-b border-slate-200 grid grid-cols-2 md:grid-cols-4 overflow-hidden divide-x divide-slate-100">
          {[
            ["Events", "Year-round Activities"],
            ["Sports", "Campus Engagement"],
            ["Clubs", "Leadership Programs"],
            ["Students", "Collaborative Culture"],
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

      {/* CAMPUS HIGHLIGHTS */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
            Campus Environment
          </span>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
            Student-friendly learning ecosystem
          </h2>

          <div className="w-12 h-1 bg-amber-500 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Building2 />,
              title: "Modern Campus Infrastructure",
              text: "Spacious classrooms, seminar halls and digital learning spaces.",
            },
            {
              icon: <Camera />,
              title: "Campus Events & Celebrations",
              text: "Students participate in annual cultural and institutional programs.",
            },
            {
              icon: <Dumbbell />,
              title: "Sports & Wellness",
              text: "Physical activities and sports engagement for student wellness.",
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

      {/* GALLERY SECTION */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
              Campus Gallery
            </span>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
              Moments from student life
            </h2>

            <div className="w-12 h-1 bg-amber-500 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
            ].map((img, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-sm overflow-hidden shadow-xs"
              >
                <img
                  src={img}
                  alt="Campus Life"
                  className="w-full h-72 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLUBS */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
            Student Clubs
          </span>

          <h2 className="text-2xl md:text-3xl font-serif font-bold mt-1 text-slate-900">
            Student participation & engagement
          </h2>

          <div className="w-12 h-1 bg-amber-500 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Cultural Club",
            "Sports Club",
            "Entrepreneurship Cell",
            "Management Forum",
            "Social Awareness Cell",
            "Communication Club",
            "Technology Club",
            "Leadership Activities",
          ].map((club, i) => (
            <div
              key={i}
              className="bg-white rounded-sm border border-slate-200 p-5 shadow-xs flex items-center gap-3"
            >
              <CheckCircle2 size={16} className="text-emerald-600" />

              <span className="font-bold text-xs uppercase tracking-wide text-slate-700">
                {club}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-extrabold uppercase text-xs tracking-widest">
            Campus FAQ
          </span>

          <h2 className="text-2xl font-serif font-bold mt-1 text-slate-900">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "Are extracurricular activities available at BIMS?",
              a: "Yes, students participate in sports, cultural activities, workshops and leadership programs.",
            },
            {
              q: "Does the college organize seminars and events?",
              a: "Yes, seminars, workshops, annual functions and institutional events are conducted regularly.",
            },
            {
              q: "Are student clubs active on campus?",
              a: "Yes, multiple student clubs and engagement groups operate throughout the academic year.",
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
              Experience Student Life at BIMS
            </h2>

            <p className="text-slate-400 mt-2 text-xs max-w-md">
              Explore academics, activities, leadership programs and campus
              culture through the BIMS student ecosystem.
            </p>
          </div>

          <button className="lg:ml-auto bg-amber-500 text-slate-950 px-6 py-3.5 rounded-sm font-bold hover:bg-amber-400 transition-colors shadow-md flex items-center gap-2 text-xs uppercase tracking-widest border border-amber-600">
            Explore Campus <ArrowRight size={14} />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CampusLife;