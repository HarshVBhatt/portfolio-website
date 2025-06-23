import { FaLinkedin, FaGithub, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-white mb-8">Let's Connect!</h2>
        <p className="text-xl text-gray-300 mb-12">
          Ready to collaborate? Reach out to me on LinkedIn or Email. For more information checkout my GitHub and Google Scholar.
        </p>
        
        <div className="flex justify-center space-x-8">
          <a 
            href="https://linkedin.com/in/harsh-bhatt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-4xl text-blue-400 hover:text-blue-300 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/HarshVBhatt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-4xl text-gray-300 hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a 
            href="https://scholar.google.com/citations?user=harsh-bhatt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-4xl text-green-400 hover:text-green-300 transition-colors"
          >
            <FaGraduationCap />
          </a>
          <a 
            href="mailto:harsshbhatt0201@gmail.com"
            className="text-4xl text-red-400 hover:text-red-300 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
