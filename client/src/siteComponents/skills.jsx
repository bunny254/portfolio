import tabitha from "../assets/projects/tabithaKanyi.png";
import intermo from "../assets/projects/intermo.png";
import kenzugi from "../assets/projects/kenzugi.gif";
import handisi from "../assets/projects/handisi.gif";
import bytech from "../assets/projects/bytech.png";
import practice from "../assets/projects/practiceManagementSoftware.gif";  
import helpDesk from "../assets/projects/helpDeskSoftware.gif";
import chatApp from "../assets/projects/chatApp.gif";
import ballPool from "../assets/projects/8BallPool.gif";
import spotify from "../assets/projects/spotify.png";

const PortfolioSections = () => {
  const projects = [
    {
      image: tabitha,
      title: "Tabitha Portfolio Website",
      description: "Digital creator portfolio showcasing talent and artistry in a sleek design.",
      tags: ["React", "Tailwind CSS"],
      liveUrl: "https://tabithakanyi.com/",
    },
    {
      image: intermo,
      title: "Intermo E-commerce Platform",
      description: "E-commerce platform with advanced filtering and secure payment integration.",
      tags: ["Stripe", "AWS", "Shopify", "PostgreSQL"],
      liveUrl: "https://www.intermoinvestment.com/",
    },
    {
      image: kenzugi,
      title: "Kenzugi",
      description: "AgriTech that repairs and repowers the land to future-proof food chains, as a community of effort and purpose.",
      tags: ["React", "Tailwindcss", "AWS",],
      liveUrl: "https://kenzugi.com/",
    },
    {
      image: handisi,
      title: "Handisiengineering Ltd",
      description: "Handisi Engineering LTD provides cutting-edge services from developing architectural plans to full-scale construction",
      tags: ["React", "Tailwind CSS"],
      liveUrl: "https://handisiengineeringltd.com/",
    },
    {
      image: bytech,
      title: "Bytech Credit Limited",
      description: "A digital lending platform offering quick and easy access to personal and business loans.",
      tags: ["React", "Styled Components"],
      liveUrl: "https://bytechcredit.co.ke/",
    },
    {
      image: practice,
      title: "Practice Management Software",
      description: "AI-powered content creation platform with natural language processing.",
      tags: ["PHP", "Calendly API", "Hubspot API", "MySQL", "POP3/SMTP"],
      githubUrl: "https://github.com/bunny254/practiceManagement"
    },
    {
      image: helpDesk,
      title: "Help Desk Software",
      description: "AI-powered content creation platform with natural language processing.",
      tags: ["PHP", "JQuery", "Africa's Talking API", "MySQL", "POP3/SMTP"],
      githubUrl: "https://github.com/bunny254/helpDesk"
    },
    {
      image: chatApp,
      title: "Chat Application",
      description: "AI-powered content creation platform with natural language processing.",
      tags: ["C#", "SignalR", "React", "Tailwindcss",],
      githubUrl: "https://github.com/bunny254/chatApp"
    },
    {
      image: ballPool,
      title: "8 Ball Pool Game",
      description: "AI-powered content creation platform with natural language processing.",
      tags: ["Python", "Pymunk", "Pygame"],
      githubUrl: "https://github.com/bunny254/chatApp"
    },
    {
      image: spotify,
      title: "Spotify Clone",
      description: "Spotify is my favourite music streaming platform. Inspired by the working enviromnent for engineers at Spotify (#lifeatspotify) and the underlying technology, especially machine learning algorithms that curate beautify personalized content.",
      tags: ["Node.js", "MongoDB", "Pygame"],
      githubUrl: "git@github.com:bunny254/spotify.git"
    },
  ];

  const features = [
    {
      title: "Creative Design",
      description: "Crafting unique, responsive websites that perfectly blend aesthetics with functionality.",
      icon: "🎨"
    },
    {
      title: "Rapid Development",
      description: "Swift and efficient development process without compromising on quality or attention to detail.",
      icon: "⚡"
    },
    {
      title: "High Performance",
      description: "Optimized code and efficient hosting ensuring lightning-fast page loads and smooth user experience.",
      icon: "🚀"
    },
    {
      title: "Scalable Architecture",
      description: "Future-proof solutions built to grow with your needs, utilizing modern development practices.",
      icon: "📈"
    }
  ];

  return (
    <div className="mt-16 bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      <section className="py-20 px-6 max-w-7xl mx-auto bg-gray-100 dark:bg-transparent rounded-3xl">
        <div className="mb-16">
          <h2 className="text-5xl font-bold mb-4 text-teal-600">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">A collection of my recent work and client base</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20 border border-zinc-200 dark:border-zinc-800"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 bg-teal-500/10 text-teal-500 dark:text-teal-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex gap-4">
                  {project.liveUrl && (<a 
                    href={project.liveUrl}
                    className="text-teal-500 hover:text-teal-400 dark:text-teal-400 dark:hover:text-teal-300 transition-colors font-medium"
                  >
                    Link
                  </a>)}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      className="text-teal-500 hover:text-teal-400 dark:text-teal-400 dark:hover:text-teal-300 transition-colors font-medium"
                    >
                      Github
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="relative w-full overflow-hidden">
        <svg 
          className="w-full h-24 md:h-32" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="50%" stopColor="#2dd4bf" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
          
          <path 
            d="M0,60 C200,90 400,30 600,60 C800,90 1000,30 1200,60 L1200,120 L0,120 Z" 
            fill="url(#waveGradient)"
            className="animate-[wave_8s_ease-in-out_infinite]"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,60 C200,90 400,30 600,60 C800,90 1000,30 1200,60 L1200,120 L0,120 Z;
                M0,60 C200,30 400,90 600,60 C800,30 1000,90 1200,60 L1200,120 L0,120 Z;
                M0,60 C200,90 400,30 600,60 C800,90 1000,30 1200,60 L1200,120 L0,120 Z
              "
            />
          </path>
          
          <path 
            d="M0,70 C200,40 400,100 600,70 C800,40 1000,100 1200,70 L1200,120 L0,120 Z" 
            fill="url(#waveGradient)"
            opacity="0.5"
            className="animate-[wave_6s_ease-in-out_infinite_reverse]"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0,70 C200,40 400,100 600,70 C800,40 1000,100 1200,70 L1200,120 L0,120 Z;
                M0,70 C200,100 400,40 600,70 C800,100 1000,40 1200,70 L1200,120 L0,120 Z;
                M0,70 C200,40 400,100 600,70 C800,40 1000,100 1200,70 L1200,120 L0,120 Z
              "
            />
          </path>
        </svg>
      </div>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-4">
          <p className="text-teal-500 text-sm font-semibold tracking-wider uppercase mb-2">
            Key Features
          </p>
          <h2 className="text-5xl font-bold mb-4 text-teal-600">Quality in Every Detail</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering excellence through innovative solutions and meticulous attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-white dark:bg-zinc-900 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10 border border-zinc-200 dark:border-transparent hover:border-teal-500/20"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-teal-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-25px); }
        }
      `}</style>
    </div>
  );
};

export default PortfolioSections;