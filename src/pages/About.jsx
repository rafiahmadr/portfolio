import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { aboutData } from "../data/about";
import InspirationCredit from "../components/InspirationCredit";
import ProfileImg from "../assets/Profile.png";
import CVImg from "../assets/CV_Rafi.png";

export default function About() {
  return (
    <Motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto px-6 py-16 space-y-16"
    >
      <section className="text-center max-w-6xl mx-auto space-y-6">
        <Motion.img
          src={ProfileImg}
          alt="Profile"
          className="w-80 rounded-full object-cover mx-auto border border-neutral-300"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <h1 className="text-6xl font-medium tracking-normal mb-4">
          {aboutData.intro.name}
        </h1>

        {aboutData.intro.description.map((text, i) => (
          <p key={i} className="text-m text-neutral-600 leading-relaxed mb-3">
            {text}
          </p>
        ))}

        <div className="flex justify-center gap-4 mt-6">
          <a
            href={aboutData.intro.links.linkedin}
            target="_blank"
            className="px-5 py-2 rounded-lg bg-neutral-900 text-white text-sm hover:opacity-90"
          >
            LinkedIn
          </a>
          <a
            href={aboutData.intro.links.resume}
            target="_blank"
            className="px-5 py-2 rounded-lg bg-neutral-900 text-white text-sm hover:opacity-90"
          >
            Download Resume
          </a>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-medium text-center">Resume</h2>

        <div className="w-7/8 h-full rounded-xl overflow-hidden border items-center mx-auto border-neutral-300">
          <img
            src={CVImg}
            alt="Resume"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-medium text-center">Experience</h2>

        <div className="flex flex-col items-center gap-4">
          {aboutData.experience.map((item, i) => (
            <Motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="w-full max-w-xl h-[120px] border border-neutral-300 rounded-lg p-4 flex flex-col justify-center text-left"
            >
              <a href={item.webs} target="_blank">
                <h3 className="text-xl font-medium mb-1 mt-1">
                  {item.company}
                </h3>
                <p className="text-sm text-neutral-500 mb-5">{item.title}</p>
                <p className="text-sm text-neutral-800 mb-1">
                  {item.place} | {item.year}
                </p>
              </a>
            </Motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-medium text-center">Projects</h2>

        <div className="flex flex-col items-center gap-4">
          {aboutData.projects.map((item, i) => (
            <Link
              key={item.id}
              to={`/projects/${item.id}`}
              className="w-3/4  flex justify-center"
            >
              <Motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="w-full max-w-xl h-[120px] border border-neutral-300 rounded-lg p-4 flex flex-col justify-center text-left"
              >
                <h3 className="text-xl font-medium mb-1 mt-1">{item.title}</h3>
                <p className="text-sm text-neutral-500 mb-4">{item.desc}</p>
                <p className="text-sm text-neutral-800 mb-1">{item.year}</p>
              </Motion.div>
            </Link>
          ))}
        </div>
      </section>

      <section className="text-center max-w-2xl mx-auto space-y-6">
        <h2 className="text-4xl font-medium text-center">Organization</h2>

        {aboutData.organizations.map((org, i) => (
          <div key={i} className="space-y-2">
            <h3 className="font-medium text-2xl">{org.title}</h3>
            <p className="text-neutral-600">{org.description}</p>
          </div>
        ))}
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-4xl font-medium text-center">Certification</h2>

        <p className="text-neutral-600">
          {aboutData.certification.description}
        </p>

        <a
          href={aboutData.certification.link}
          target="_blank"
          className="inline-block px-6 py-2 rounded-lg border border-neutral-300 hover:bg-neutral-100"
        >
          Download Certificate
        </a>
      </section>

      <footer className="pt-10 py-1 mt-16 w-full flex flex-col items-center gap-1">
        <p className="text-center text-xs text-neutral-400">
          © Rafi Ahmad Ramadan - 2026 • Built with React • With help from
          ChatGPT
        </p>

        <InspirationCredit />
      </footer>
    </Motion.main>
  );
}
