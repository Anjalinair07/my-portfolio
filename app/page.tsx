export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black dark:text-white">Anjali</h1>
          <div className="flex gap-8">
            <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">About</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">Projects</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">Skills</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-20 sm:py-32">
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-6xl font-bold text-black dark:text-white leading-tight">
              Hi, I'm Anjali Nair
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              A passionate developer and budding AI Engineer with functional web experiences. 
              I love turning ideas into reality with modern technologies such as machine learning and web development.
            </p>
            <div className="flex gap-4 pt-4">
              <a 
                href="#projects"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition"
              >
                View My Work
              </a>
              <a 
                href="#contact"
                className="px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-lg font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-3xl font-bold text-black dark:text-white mb-8">About Me</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm a budding full-stack developer with a passion for creating intuitive and elegant digital solutions. 
                With expertise in modern web technologies, I bring both technical excellence and creative vision to every project.
              </p>
              <p>
                When I'm not coding, you will find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <h4 className="font-semibold text-black dark:text-white mb-4">Quick Facts</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✨ <span className="font-semibold">Experience:</span> 2+ years in web development</li>
                <li>🎓 <span className="font-semibold">Education:</span> BSC HONS IN ARTIFICIAL INTELLIGENCE</li>
                <li>📍 <span className="font-semibold">Location:</span> Available Worldwide</li>
                <li>🚀 <span className="font-semibold">Focus:</span> AI ENGINEERING, WEB DEVELOPMENT & UI/UX</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-3xl font-bold text-black dark:text-white mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-black dark:text-white mb-2">Project One</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A cutting-edge web application built with React and Node.js, featuring real-time data synchronization 
                and an intuitive user interface.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded">React</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded">Next.js</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded">TypeScript</span>
              </div>
              <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                View Project →
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-black dark:text-white mb-2">Project Two</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A scalable e-commerce platform with advanced filtering, payment integration, and comprehensive admin dashboard.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded">Next.js</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded">Tailwind CSS</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded">PostgreSQL</span>
              </div>
              <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                View Project →
              </a>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-black dark:text-white mb-2">Project Three</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A mobile-first analytics dashboard providing real-time insights with beautiful data visualizations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded">React</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded">Chart.js</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded">API Integration</span>
              </div>
              <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                View Project →
              </a>
            </div>

            {/* Project 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
              <h4 className="text-xl font-bold text-black dark:text-white mb-2">Project Four</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                An AI-powered content management system with intelligent automation and seamless collaboration features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded">Vue.js</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded">Python</span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded">Machine Learning</span>
              </div>
              <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                View Project →
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-3xl font-bold text-black dark:text-white mb-8">Skills & Technologies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-lg text-black dark:text-white mb-4">Frontend</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• React & Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Vue.js</li>
                <li>• Responsive Design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg text-black dark:text-white mb-4">Backend</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Node.js & Express</li>
                <li>• Python & Django</li>
                <li>• REST APIs</li>
                <li>• Database Design</li>
                <li>• Authentication</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg text-black dark:text-white mb-4">Tools & Platforms</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Git & GitHub</li>
                <li>• Docker</li>
                <li>• AWS & Vercel</li>
                <li>• CI/CD Pipelines</li>
                <li>• Figma & Design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-gray-200 dark:border-gray-800">
          <div className="bg-black dark:bg-white text-white dark:text-black rounded-lg p-8 sm:p-12">
            <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-lg mb-8 opacity-90">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:anjalivnair02007@gmail.com"
                className="px-6 py-3 bg-white dark:bg-black text-black dark:text-white rounded-lg font-semibold hover:opacity-80 transition"
              >
                Send me an email
              </a>
              <a 
                href="https://www.linkedin.com/in/anjali-nair-38b265303"
                className="px-6 py-3 border-2 border-white dark:border-black text-white dark:text-black rounded-lg font-semibold hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/Anjalinair07"
                className="px-6 py-3 border-2 border-white dark:border-black text-white dark:text-black rounded-lg font-semibold hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-200 dark:border-gray-800 mt-20 text-center text-gray-600 dark:text-gray-400">
          <p>© 2026 Anjal. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
