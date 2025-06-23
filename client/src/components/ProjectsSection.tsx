import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ProjectsSection() {
  const [roleFilter, setRoleFilter] = useState<string>("");
  const [industryFilter, setIndustryFilter] = useState<string>("");

  const projects = [
    {
      title: "LLIME: Large Language model Integrated Medical feature Extractor",
      githubUrl: "https://github.com/HarshVBhatt/LLIME",
      summary: "A patient note processing pipeline that fine-tunes LLMs for precise medical keyword extraction, achieving 4x more precision with Llama-2 7b and QLoRA optimization.",
      techStack: ["PyTorch", "Llama-2", "QLoRA", "Streamlit", "LLM Fine-tuning", "Unstructured Health data"],
      roles: ["GenAI"],
      industry: "Healthcare"
    },
    {
      title: "CORAL-X: Contextual Risk Assessment for Loan Applications using LLMs",
      githubUrl: "https://github.com/HarshVBhatt/CORAL-X",
      summary: "A loan risk assessment framework integrating XGBoost with RAG-powered Llama-3.2, delivering accurate and auditable LLM-generated explanations using regulatory documents, utilizing LLMs-as-judge evaluation frameworks.",
      techStack: ["XGBoost", "Llama-3.2", "RAG", "Pinecone", "LLMs-as-judge"],
      roles: ["GenAI", "Data Science"],
      industry: "Finance"
    },
    {
      title: "End-to-end MLOps Pipeline for Walmart Supply Chain Forecasting",
      githubUrl: "https://github.com/HarshVBhatt/walmart-sales-forecast-mlops",
      summary: "A comprehensive MLOps pipeline for sales forecasting across 40+ stores, achieving 92% accuracy with automated data validation, transformation, and deployment on AWS.",
      techStack: ["MLflow", "AWS EC2", "Docker", "GitHub Actions"],
      roles: ["MLOps"],
      industry: "Supply Chain"
    },
    {
      title: "Ad Slot Reserve Price Prediction",
      githubUrl: "https://github.com/HarshVBhatt/ad-slot-reserve-price-prediction",
      summary: "Machine learning model to predict optimal reserve prices for ad slots, maximizing revenue while maintaining competitive bidding dynamics in programmatic advertising.",
      techStack: ["Scikit-Learn", "Pandas", "XGBoost", "Grafana", "WandB", "Athena", "Glue"],
      roles: ["Data Science", "MLOps"],
      industry: "Ads"
    },
    {
      title: "Digital Marketing MTA Budget Optimization",
      githubUrl: "https://github.com/HarshVBhatt/digital-marketing-mta-budget-optimization",
      summary: "Multi-touch attribution analysis and budget optimization framework for digital marketing campaigns, leveraging statistical models to maximize ROI across channels.",
      techStack: ["Statistical Modeling", "Attribution Analysis", "Python"],
      roles: ["Data Science"],
      industry: "Marketing"
    },
    {
      title: "Ad Analysis",
      githubUrl: "https://github.com/HarshVBhatt/ad-analysis",
      summary: "Comprehensive analysis of advertising campaign performance, exploring user engagement patterns and conversion metrics to optimize ad targeting strategies.",
      techStack: ["Data Analysis", "Tableau", "Statistical Testing", "Pandas"],
      roles: ["Data Science"],
      industry: "Ads"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const roleMatch = !roleFilter || roleFilter === "all" || project.roles.includes(roleFilter);
    const industryMatch = !industryFilter || industryFilter === "all" || project.industry === industryFilter;
    return roleMatch && industryMatch;
  });

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Projects</h2>
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger className="w-[200px] bg-card-bg border-metallic text-white">
              <SelectValue placeholder="Filter by Role" />
            </SelectTrigger>
            <SelectContent className="bg-card-bg border-metallic">
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="Data Science">Data Science</SelectItem>
              <SelectItem value="MLOps">MLOps</SelectItem>
              <SelectItem value="GenAI">GenAI</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={industryFilter} onValueChange={setIndustryFilter}>
            <SelectTrigger className="w-[200px] bg-card-bg border-metallic text-white">
              <SelectValue placeholder="Filter by Industry" />
            </SelectTrigger>
            <SelectContent className="bg-card-bg border-metallic">
              <SelectItem value="all">All Industries</SelectItem>
              <SelectItem value="Healthcare">Healthcare</SelectItem>
              <SelectItem value="Finance">Finance</SelectItem>
              <SelectItem value="Supply Chain">Supply Chain</SelectItem>
              <SelectItem value="Ads">Ads</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-card-bg/80 card-3d rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {project.title}
                </a>
              </h3>
              <p className="text-gray-300 mb-6">{project.summary}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.roles.map((role, roleIndex) => (
                  <span key={roleIndex} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {role}
                  </span>
                ))}
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">
                  {project.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
