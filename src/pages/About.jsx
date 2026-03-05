import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import {
  FaCode,
  FaGraduationCap,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-black" : "bg-white";
  const textPrimary = isDark ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDark ? "text-blue-400" : "text-blue-600";
  const cardBg = isDark ? "bg-blue-950/40" : "bg-blue-50";
  const borderColor = isDark ? "border-blue-900/40" : "border-blue-100";
  const headingColor = isDark ? "text-white" : "text-gray-900";

  const journey = [
    {
      icon: <FaGraduationCap className="text-2xl" />,
      title: "Academic Foundation",
      description:
        "Completed B.Sc in Computer Science, building a strong foundation in Data Structures & Algorithms, programming concepts, and core computer science principles.",
    },
    {
      icon: <FaCode className="text-2xl" />,
      title: "Development Mastery",
      description:
        "Progressed from HTML/CSS fundamentals through JavaScript to advanced frontend development, then expanded into complete Java Full Stack development including backend, database integration, and application deployment.",
    },
    {
      icon: <FaArrowRight className="text-2xl" />,
      title: "Real-World Projects",
      description:
        " Developed and completed 3+ real-world full-stack applications during hands-on training, focusing on responsive design, backend integration, and practical use-case implementation.",
    },
    /* {
      icon: <FaYoutube className="text-2xl" />,
      title: "Content Creator",
      description:
        "Recently began content creation journey on YouTube @SkillCoder-By_Aadarsh, sharing knowledge and insights with the developer community.",
    }, */
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "HTML/CSS", /* "Tailwind" */],
    },
    {
      category: "Backend",
      items: ["Spring Boot", "MySQL", "Java", "REST APIs"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git","GitHub","Vs code","IntelliJ IDEA"/*  "Vercel", "Render", "Firebase" */],
    },
  ];

  return (
    <div
      className={`${containerBg} min-h-screen py-20 transition-colors duration-300 relative overflow-hidden`}
    >
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? "bg-gradient-to-br from-blue-950/10 via-transparent to-black/30"
            : "bg-gradient-to-br from-blue-50/50 via-transparent to-blue-100/20"
        }`}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-4 ${headingColor} pt-4`}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mb-6"></div>
          <span className={`text-lg md:text-xl max-w-2xl mx-auto ${textPrimary}`}>
            A passionate developer and learner on a continuous journey of growth
            and innovation
          </span>
        </div>

        <div
          className={`rounded-2xl border ${borderColor} ${cardBg} p-8 md:p-10 mb-16 backdrop-blur-sm shadow-xl`}
        >
          <h2 className={`text-3xl font-bold mb-6 ${headingColor}`}>
            Welcome to My Journey
          </h2>
          <span className={`text-lg leading-relaxed ${textPrimary} mb-4`}>
            I'm{" "}
            <span className="font-semibold text-blue-500">
              Lokesh B
            </span>
            , a B.Sc Computer Science graduate and an entry-level Full Stack Developer who has successfully completed full stack development training. My journey into technology began with a strong curiosity about how software applications are built and how systems work behind the scenes.

Through my academic studies, I built a strong foundation in programming, data structures, and core computer science concepts. After completing my degree, I enhanced my practical skills by undergoing full stack training, where I gained hands-on experience in front-end and back-end development, database management, and building real-time web applications.
          </span>
          <span className={`text-lg leading-relaxed ${textPrimary}`}>
           Today, I am continuously improving my technical skills by working on projects and exploring modern technologies. As a passionate fresher, I am eager to start my professional career, contribute to meaningful projects, and grow as a successful software developer.
          </span>
        </div>

        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${headingColor}`}
          >
            My Development{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Path
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {journey.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl border ${borderColor} ${cardBg} p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm`}
              >
                <div className={`text-blue-500 mb-4`}>{item.icon}</div>
                <h3 className={`text-xl font-bold mb-3 ${headingColor}`}>
                  {item.title}
                </h3>
                <span className={`${textPrimary} leading-relaxed`}>
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${headingColor}`}
          >
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className={`rounded-xl border ${borderColor} ${cardBg} p-6 backdrop-blur-sm`}
              >
                <h3 className={`text-xl font-bold mb-4 ${headingColor}`}>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        isDark
                          ? "bg-blue-900/60 text-blue-300 border border-blue-700/50 hover:bg-blue-900"
                          : "bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-200"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`rounded-2xl border ${borderColor} ${cardBg} p-8 md:p-10 mb-12 backdrop-blur-sm shadow-xl`}
        >
          <h2 className={`text-3xl font-bold mb-8 ${headingColor}`}>
            Highlights &{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-blue-500 min-w-fit">
                2+
              </div>
              <div>
                <h3 className={`font-bold ${headingColor} mb-1`}>
                  Production Projects
                </h3>
                <span className={textPrimary}>
                  Deployed and live applications serving real-world use cases
                  
                </span>
              </div>
            </div>
            {/* <div className="flex gap-4">
              <div className="text-3xl font-bold text-blue-500 min-w-fit">
                $
              </div>
              <div>
                <h3 className={`font-bold ${headingColor} mb-1`}>
                  Monetized Work
                </h3>
                <span className={textPrimary}>
                  Generated revenue from client projects and commercial
                  aplications
                </span>
              </div>
            </div> */}
            {/* <div className="flex gap-4">
              <div className="text-3xl font-bold text-blue-500 min-w-fit">
                📺
              </div>
              <div>
                <h3 className={`font-bold ${headingColor} mb-1`}>
                  Content Creator
                </h3>
                <span className={textPrimary}>
                  YouTube channel @SkillCoder-By_Aadarsh sharing development
                  insights
                </span>
              </div>
            </div> */}
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-blue-500 min-w-fit">
                🎯
              </div>
              <div>
                <h3 className={`font-bold ${headingColor} mb-1`}>
                  Full-Stack Expertise
                </h3>
                <span className={textPrimary}>
                  Complete Java Full Stack Development with hands-on training and real-time project experience.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <span className={`text-lg mb-8 ${textPrimary}`}>
            Interested in collaborating or learning more about my work?
          </span>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/work"
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 ${
                isDark
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/50"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-600/30"
              }`}
            >
              View My Projects <FaArrowRight className="text-sm" />
            </a>
           {/*  <a
              href="https://www.youtube.com/@SkillCoder-By_Aadarsh"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-3 rounded-lg font-semibold border-2 transition-all duration-300 inline-flex items-center justify-center gap-2 ${
                isDark
                  ? "border-blue-400 text-blue-400 hover:bg-blue-950/50"
                  : "border-blue-600 text-blue-600 hover:bg-blue-50"
              }`}
            >
              Watch My Videos <FaYoutube className="text-sm" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;