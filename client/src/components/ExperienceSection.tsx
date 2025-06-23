interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  techStack: string[];
  articleLink?: string;
}

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Data Scientist Co-op",
      company: "Cohere Health",
      location: "Boston, MA, USA",
      period: "Jun – Dec 2024",
      achievements: [
        "Developed and deployed 3 machine learning models to automate prior authorization request approvals for a new clinical service area, preventing $200,000+ in monthly operational costs.",
        "Built integrated solutions utilizing PySpark, Airflow and Sagemaker, to monitor data health, predictive performance and model drift for a suite of 19 machine learning models, resulting in faster fixes, instant Slack alerts and efficient performance tracking.",
        "Engineered a pipeline to calculate and visualize business metrics for 20+ live models using Tableau dashboards, boosting KPI tracking.",
        "Enhanced existing models with improved scoring methods, conducted appropriate model and data version control (DVC), ensuring consistent performance for new clients.",
        "Designed and executed systematic subsampling experiments to empirically determine the optimal data sizes for training and testing of new models, establishing guidelines for efficient data collection, robust training and accurate testing."
      ],
      techStack: ["PySpark", "Airflow", "SageMaker", "Tableau", "DVC", "MLOps"]
    },
    {
      title: "Student Researcher",
      company: "Sudeep Tanwar Labs",
      location: "Ahmedabad, Gujarat, India",
      period: "Jan – Jul 2023",
      achievements: [
        "Proposed and simulated a Federated Learning-based DL framework, achieving collaborative learning for clients without sharing data.",
        "Developed an aggregation algorithm leveraging optimizer weights, resulting in 7% accuracy increase over conventional methods."
      ],
      techStack: ["Federated Learning", "Deep Learning", "PyTorch", "Python"],
      articleLink: "https://doi.org/10.1109/TNSM.2023.3320406"
    },
    {
      title: "Student Researcher",
      company: "SUNY Binghamton",
      location: "New York, USA",
      period: "Aug 2022 – Jan 2023",
      achievements: [
        "Utilized signal processing, thresholding and timestamp altering to extract and analyze EEG signals of autistic individuals.",
        "Developed a novel CNN-based framework, improving the F1-scores by 24% enhancing the analysis of ASD individuals' attention spans."
      ],
      techStack: ["CNN", "Signal Processing", "TensorFlow", "Python"],
      articleLink: "https://doi.org/10.1109/ACCESS.2023.3265571"
    },
    {
      title: "Machine Learning Intern",
      company: "D360 Technology Inc.",
      location: "Surat, Gujarat, India",
      period: "Jun – Aug 2022",
      achievements: [
        "Engineered data transformation pipelines classifying data from 10+ vendors into a single structured schema.",
        "Developed an ensemble framework to classify new data into set features, improving classification accuracy to 95% on unseen data.",
        "Demonstrated strong technical and business acumen by expanding the statistical analyses, resulting in insights into vendor patterns."
      ],
      techStack: ["Data Pipelines", "Ensemble Methods", "Scikit-Learn", "Python"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Professional Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-card-bg/80 card-3d rounded-lg p-8">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-xl text-blue-400">
                    {exp.company}
                    {exp.articleLink && (
                      <a 
                        href={exp.articleLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-300 hover:text-blue-200 ml-2 underline"
                      >
                        [Article]
                      </a>
                    )}
                  </p>
                  <p className="text-gray-400">{exp.location}</p>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex}>{achievement}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
