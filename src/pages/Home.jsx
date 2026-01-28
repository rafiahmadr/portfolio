import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { projects } from "../data/projects";
import InspirationCredit from "../components/InspirationCredit";
import ProfileImg from "../assets/Profile.png";

export default function Home() {
  return (
    <main className="w-full max-w-5xl mx-auto mt-16 flex flex-col items-center text-center px-6">
      {/* Intro */}
      <Motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        {/* Avatar */}
        <div className="w-32 h-32 rounded-full overflow-hidden border border-neutral-300">
          <img
            src={ProfileImg}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="space-y-2 w-full flex flex-col items-center">
          <h1 className="text-5xl font-semibold text-neutral-900 mb-6 max-w-4xl">
            Mechtronics engineer with a strong focus on embedded systems,
            robotics, and automation
          </h1>
          <p className="text-m text-neutral-600 leading-relaxed mb-4 max-w-xl">
            Lately working as an freelance for Electrical Technician at Dan
            Surya Persada, specializing in commissioning and troubleshooting
            machine also embedded software for IoT devices. Currently open to
            new opportunities and collaborations.
          </p>
          <p className="text-m text-neutral-600 leading-relaxed content-center max-w-xl">
            Bandung Manufacturing Polytechnic alumnus with Bachelor of Applied
            Science in Mechatronics Engineering Technology.
          </p>
        </div>
      </Motion.section>

      {/* Callout */}
      <Motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-12 text-xl font-bold text-neutral-600"
      >
        Click project photos below to learn more!
      </Motion.p>

      {/* Projects */}
      <Motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10 w-1/1"
      >
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="block"
          >
            <Motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm"
            >
              {/* SHARED IMAGE */}
              <Motion.div
                layoutId={`project-image-${project.id}`}
                className="aspect-[4/3] overflow-hidden"
              >
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </Motion.div>

              {/* TEXT */}
              <div className="p-4">
                <h3 className="text-sm font-medium">{project.title}</h3>
                <p className="text-xs text-neutral-500">{project.year}</p>
              </div>
            </Motion.div>
          </Link>
        ))}
      </Motion.section>

      <footer className="pt-10 mt-16 w-full flex flex-col items-center gap-4">
        <p className="text-center text-xs text-neutral-400">
          © Rafi Ahmad Ramadan - 2026 • Built with React • With help from ChatGPT
        </p>

        <InspirationCredit />
      </footer>
    </main>
  );
}
