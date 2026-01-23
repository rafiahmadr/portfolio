import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

export default function InspirationCredit() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center text-xs text-neutral-400 mt-10">
      <button
        onClick={() => setOpen(!open)}
        className="hover:text-neutral-600 transition"
      >
        Inspiration
      </button>

      <AnimatePresence>
        {open && (
          <Motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.25 }}
            className="mt-2 mb-2"
          >
            Inspired by the personal portfolio of{" "}
            <a
              href="https://jacobschwartz.framer.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-neutral-700"
            >
              Jacob B. Schwartz
            </a>
            . Rebuilt independently in React.
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
