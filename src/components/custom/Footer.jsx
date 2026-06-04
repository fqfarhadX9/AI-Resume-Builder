import React from "react";
import { Github, Instagram, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t bg-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col items-center text-center">

          <h2 className="text-3xl font-bold text-primary">
            AI Resume Builder
          </h2>

          <p className="max-w-2xl mt-4 text-gray-600 leading-relaxed">
            Create professional ATS-friendly resumes in minutes with the
            power of AI. Build, customize, and download resumes that help
            you stand out and land your dream job.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm font-medium text-gray-600">
            <a
              href="/"
              className="hover:text-primary transition-colors duration-200"
            >
              Home
            </a>

            <a
              href="/dashboard"
              className="hover:text-primary transition-colors duration-200"
            >
              Dashboard
            </a>

            <a
              href="/dashboard"
              className="hover:text-primary transition-colors duration-200"
            >
              Create Resume
            </a>
          </div>

          <div className="flex gap-5 mt-8">

            <a
              href="https://github.com/fqfarhadX9"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Github size={20} />
            </a>

            <a
              href="https://wa.me/919341976292"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <MessageCircle size={20} />
            </a>

            <a
              href="https://instagram.com/whateverr.14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Instagram size={20} />
            </a>

          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} AI Resume Builder. All rights reserved.
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Crafted with ❤️ by Farhad
          </p>

          <p className="text-xs text-gray-400 mt-3">
            Powered by AI • Designed for Success
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;