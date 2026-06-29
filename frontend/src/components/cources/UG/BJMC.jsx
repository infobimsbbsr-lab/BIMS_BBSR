import CourseTemplate from "../CourseTemplate";

export default function BJMC() {
  return (
    <CourseTemplate
      title="Bachelor of Journalism & Mass Communication"
      image="/images/Bachelor of Journalism & Mass Communication.jfif"
      duration="3 Years"
      seats="60"
      eligibility="12th Pass or Equivalent"
      overview="
      The Bachelor of Journalism & Mass Communication program equips students with skills in print, broadcast, digital, and multimedia journalism. Students learn journalism ethics, media management, creative content creation, and critical thinking. The curriculum emphasizes both theoretical knowledge and practical experience through internships with leading media organizations.
      "
      highlights={[
        "Industry-Relevant Curriculum",
        "State-of-the-Art Media Lab",
        "Print, Broadcast & Digital Training",
        "Media Ethics & Professional Standards",
        "Content Creation & Storytelling",
        "Public Relations & Advertising",
        "Media Management",
        "Internship with Leading Media Houses"
      ]}
      subjects={[
        "Journalism Fundamentals",
        "Print Journalism",
        "Broadcast Journalism",
        "Digital Journalism",
        "Media Ethics",
        "News Writing & Reporting",
        "Feature Writing",
        "Photography & Videography",
        "Public Relations",
        "Advertising",
        "Media Management",
        "Mass Communication Theory",
        "Media Research",
        "Social Media & Digital Content",
        "Project Work & Internship"
      ]}
      careers={[
        "Journalist",
        "News Reporter",
        "News Editor",
        "Broadcast Journalist",
        "Digital Content Creator",
        "Public Relations Officer",
        "Advertising Professional",
        "Media Planner",
        "Copy Writer",
        "News Correspondent",
        "Documentary Filmmaker",
        "Social Media Manager",
        "Content Strategist",
        "Media Entrepreneur"
      ]}
    />
  );
}
