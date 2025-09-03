import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaMagic,
  FaRocket,
  FaRegClock,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineTemplate } from "react-icons/hi";

const features = [
  {
    icon: <FaMagic className="h-8 w-8 text-white" />,
    title: "AI-Powered Writing",
    description:
      "Instantly create sharp, professional resumes and cover letters that feel written just for you.",
    delay: 0.2,
  },
  {
    icon: <HiOutlineTemplate className="h-8 w-8 text-white" />,
    title: "Modern Templates",
    description:
      "Pick from clean, ATS-friendly templates that hiring managers love. No fluff, just impact.",
    delay: 0.4,
  },
  {
    icon: <FaRegClock className="h-8 w-8 text-white" />,
    title: "Live Preview",
    description:
      "See every tweak instantly, so you know exactly how your resume will look before you hit download.",
    delay: 0.6,
  },
  {
    icon: <FaRocket className="h-8 w-8 text-white" />,
    title: "One-Click Export",
    description:
      "Download your resume in PDF or Word in seconds — polished and ready to send.",
    delay: 0.8,
  },
];

export default function LandingPage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1500&q=80"
            alt="Resume workspace"
            className="h-full w-full object-cover filter grayscale"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
            Your Career Starts With <br />
            <span>
              A Strong Resume
            </span>
          </h1>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/signup"
                className="px-8 py-3 rounded-md font-medium bg-white text-black border border-white hover:bg-black hover:text-white hover:shadow-[0_0_20px_white] transition-all duration-300"
              >
                Get Started Free
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/login"
                className="px-8 py-3 rounded-md font-medium bg-black text-white border border-white hover:bg-white hover:text-black hover:shadow-[0_0_20px_white] transition-all duration-300"
              >
                Sign In
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-6 bg-black">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-400 font-semibold uppercase tracking-wide">
            Features
          </h2>
          <p className="mt-2 text-3xl font-bold text-white">
            Built To Help You Get Hired
          </p>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            We keep it simple: AI tools, modern designs, and instant results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-black border border-gray-700 rounded-2xl 
                   hover:border-white hover:shadow-[0_0_20px_white] transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gray-900 rounded-xl border border-gray-700">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              <p className="mt-4 text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative bg-black border-t border-gray-800">
        <div className="max-w-2xl mx-auto text-center py-16 px-6">
          <motion.h2
            className="text-3xl font-extrabold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Ready To Land That Job?
          </motion.h2>
          <p className="mt-4 text-gray-400">
            Start today and craft a resume that makes recruiters stop scrolling.
          </p>
          <motion.div className="mt-6" whileHover={{ scale: 1.05 }}>
            <Link
              to="/signup"
              className="inline-flex px-6 py-3 rounded-md bg-white text-black font-medium border border-white hover:bg-black hover:text-white hover:shadow-[0_0_20px_white] transition-all duration-300"
            >
              Build My Resume
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Resume Craft
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              {
                icon: <FaGithub className="h-6 w-6" />,
                href: "https://github.com/abishekak18",
                label: "GitHub",
              },
              {
                icon: <FaLinkedin className="h-6 w-6" />,
                href: "https://www.linkedin.com/in/eabishek18/",
                label: "LinkedIn",
              },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.2 }}
              >
                <span className="sr-only">{item.label}</span>
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
