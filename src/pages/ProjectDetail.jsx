import { useParams, Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold">Project not found</h2>
        <Link
          to="/"
          className="inline-block mt-6 text-sm underline text-neutral-600"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <Motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl mx-auto px-10 py-20"
    >
      {/* Back link */}
      <Link to="/" className="text-sm text-neutral-500 underline">
        ← Back
      </Link>

      {/* Title */}
      <div className="mt-6 mb-12">
        <h1 className="text-4xl font-semibold">{project.title}</h1>
        <p className="text-neutral-500 mt-1">{project.year}</p>
      </div>

      {/* Image gallery */}
      <div className="space-y-8">
        {project.images.map((img, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-2xl overflow-hidden border border-neutral-200"
          >
            <img
              src={img}
              alt={`${project.title} ${index + 1}`}
              className="w-2xl object-cover items-center mx-auto mb-2 h-2xl"
            />
          </Motion.div>
        ))}
      </div>

      {project.description.map((text, index) => (
        <p key={index} className="text-neutral-700 leading-relaxed mb-6 mt-8 text-justify">
          {text}
        </p>
      ))}
    </Motion.main>
  );
}
