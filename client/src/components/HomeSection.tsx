import { FaChartLine, FaCogs, FaRobot, FaPython, FaDatabase, FaFire, FaBook, FaBrain, FaAws, FaChartBar, FaFlask, FaDocker, FaChartArea, FaLink, FaProjectDiagram, FaSearch, FaPuzzlePiece, FaDownload } from 'react-icons/fa';
import profileImage from "@assets/IMG_4850.png";
import resumePDF from "@assets/Harsh Bhatt Resume.pdf";

export default function HomeSection() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Harsh_Bhatt_Resume.pdf';
    link.click();
  };

  const areasOfInterest = [
    { title: "Data Science", icon: FaChartLine },
    { title: "MLOps", icon: FaCogs },
    { title: "GenAI and LLMs", icon: FaRobot }
  ];

  const techStack = [
    { name: "Python", icon: FaPython },
    { name: "SQL", icon: FaDatabase },
    { name: "PySpark", icon: FaFire },
    { name: "MLlib", icon: FaBook },
    { name: "Scikit-Learn", icon: FaBrain },
    { name: "AWS", icon: FaAws },
    { name: "Tableau", icon: FaChartBar },
    { name: "MLFlow", icon: FaFlask },
    { name: "Docker", icon: FaDocker },
    { name: "Grafana", icon: FaChartArea },
    { name: "Langchain", icon: FaLink },
    { name: "LangGraph", icon: FaProjectDiagram },
    { name: "Athena", icon: FaSearch },
    { name: "Glue", icon: FaPuzzlePiece }
  ];

  return (
    <section id="home" className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Profile and Bio */}
        <div className="text-center mb-16">
          <img 
            src={profileImage}
            alt="Harsh Bhatt - Data Scientist" 
            className="w-48 h-48 rounded-full mx-auto mb-8 border-4 shadow-lg object-cover"
            style={{borderColor: 'rgba(192, 192, 192, 0.6)'}}
          />
          
          <h1 className="text-5xl font-bold text-white mb-4">Harsh Bhatt</h1>
          <h2 className="text-2xl text-blue-400 mb-8">M.S Data Science, Northeastern University</h2>
          
          <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-300">
            <p className="mb-6">
              I'm a detail-oriented <strong className="text-white">Data Scientist</strong> with <strong className="text-white">3+ years of experience</strong> in Machine Learning, Scalable Data Pipelines and GenAI. I specialize in building <strong className="text-white">end-to-end ML systems</strong>, leading investigative <strong className="text-white">data-centric experiments</strong>, and constructing <strong className="text-white">production-ready AI solutions.</strong>
            </p>
            <p>
              As a <strong className="text-white">Data Scientist Co-op</strong> at <strong className="text-white">Cohere Health</strong>, I expanded production-ready ML models to a new clinical service area, developed and integrated monitoring tools for 19+ ML models, led several experiments to quantify and optimize model performance, and provided actionable insights to Clinical and Product teams.
            </p>
          </div>
        </div>
        {/* Download Resume Button */}
        <div className="mt-8">
          <button
            onClick={handleDownloadResume}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto border-2 border-blue-500 hover:border-blue-400"
          >
            <FaDownload className="text-lg" />
            Download Resume
          </button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        {/* Areas of Interest */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Areas of Interest</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {areasOfInterest.map((area, index) => (
              <div key={index} className="bg-card-bg/80 tile-3d rounded-lg p-8 text-center hover:bg-card-bg transition-all">
                <area.icon className="text-3xl text-blue-400 mb-3 mx-auto" />
                <h4 className="text-lg font-semibold text-white">{area.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-3xl font-bold text-center text-white mb-12">Tech Stack</h3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-card-bg/80 tile-3d rounded-lg p-5 text-center hover:bg-card-bg transition-all">
                <tech.icon className="text-3xl text-blue-400 mb-2 mx-auto" />
                <p className="text-sm text-gray-300">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
