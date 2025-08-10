import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();
  const [likes, setLikes] = useState(6);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050B14] text-gray-300 pt-8 relative flex flex-col items-center">
      {/* Social Links */}
      <div className="flex flex-col items-center gap-4">
        <p className="text-lg">Connect with me</p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/tabish-javed/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-gray-700 rounded-full hover:bg-gray-600"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/tabish-27"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-gray-700 rounded-full hover:bg-gray-600"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:tabishjaved2030@gmail.com"
            className="p-3 bg-gray-700 rounded-full hover:bg-gray-600"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://leetcode.com/u/Tabish_javed/"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-gray-700 rounded-full hover:bg-gray-600"
          >
            <SiLeetcode size={20} />
          </a>
          <a
            href="https://x.com/TabishJaved27"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-gray-700 rounded-full hover:bg-gray-600"
          >
            <FaXTwitter size={20} />
          </a>
        </div>
      </div>

      {/* Likes */}
      <div className="absolute right-10 top-8 flex flex-col items-center">
        <button
          onClick={() => setLikes(likes + 1)}
          className="bg-pink-900 text-pink-300 px-4 py-1 rounded-full hover:bg-pink-800 flex items-center gap-1"
        >
          ❤️ {likes} Likes
        </button>
        <span className="text-xs mt-1">Thank you!</span>
      </div>

      {/* Line */}
      <hr className="border-gray-700 w-4/5 my-6" />

      {/* Footer Text */}
      <p className="text-sm text-center pb-6">
        © {year} Tabish Javed | Crafted with 💖 | All rights reserved.
      </p>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-purple-600 p-3 rounded-full hover:bg-purple-700"
      >
        <FaArrowUp size={20} className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;
