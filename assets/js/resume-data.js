// Resume / profile data powering the site
// Update anything below to keep your site fresh.
// TODO: Replace LinkedIn and GitHub URLs with your actual profiles.

window.__RESUME__ = {
  name: "Yuvi Babbar",
  title: "Cloud Engineer • Full‑Stack Developer • DevOps Professional",
  summary:
    "Cloud Engineer with 7 years across software development and cloud infrastructure. Modernized 40+ enterprise apps, built microservices processing 1M+ data points daily, and delivered $200k+ annual cost savings with serverless/Kubernetes. Strong in Python, Java, C#, and JavaScript with hands‑on IaC (Terraform), CI/CD, and ML workflows.",

  contact: {
    email: "yuvibabbar@gmail.com",
    phone: "+1 778-522-2737",
    location: "New Westminster, BC, Canada",
    linkedin: "https://linkedin.com/in/babbary",
    github: "https://github.com/yuvibabbar-dev",
  },

  heroStats: [
    { label: "apps modernized", value: 42 },
    { label: "daily deployments", value: 40 },
    { label: "users served", value: 3000 },
    { label: "uptime %", value: 99 },
  ],

  skills: [
    {
      title: "Programming",
      items: ["Python", "Java", "C#", "JavaScript/TypeScript", "SQL", "Spring Boot", ".NET Core", "Flask", "React"],
    },
    {
      title: "Cloud Platforms",
      items: ["AWS (Lambda, EC2, EKS, S3, RDS, SageMaker)", "Azure (Functions, AKS, DevOps)"],
    },
    {
      title: "DevOps / IaC",
      items: ["Kubernetes", "Docker", "Terraform", "Helm", "ArgoCD", "Jenkins", "GitHub Actions", "Azure DevOps"],
    },
    {
      title: "Data & Integration",
      items: ["PostgreSQL", "MongoDB", "REST APIs", "GraphQL", "PowerBI", "ETL Pipelines"],
    },
  ],

  experience: [
    {
      role: "Cloud Engineer",
      company: "LivaNova Inc.",
      period: "Aug 2024 – Present",
      location: "Remote",
      tech: "Python, Java, AWS Lambda, Kubernetes, Terraform, Docker, ArgoCD, TensorFlow",
      highlights: [
        "Built microservices in Python/Java processing 500+ requests/sec with sub‑100ms latency",
        "Implemented ML infra with TensorFlow/SageMaker supporting 500+ daily predictions",
        "Created Terraform modules managing 100+ AWS/Azure resources",
        "Cut infrastructure costs by 40% through serverless and rightsizing",
      ],
    },
    {
      role: "System Integration Engineer",
      company: "LivaNova Inc.",
      period: "Dec 2023 – Aug 2024",
      tech: "Python, PowerShell, REST APIs, GraphQL, Azure Functions, Workday API",
      highlights: [
        "Developed integration platform connecting 8 enterprise systems via APIs",
        "Created automation scripts reducing manual errors by 90%",
        "Built event‑driven architecture processing 10,000+ messages daily",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "LivaNova Inc.",
      period: "Oct 2019 – Dec 2023",
      tech: "C#/.NET Core, Python, Java/Spring Boot, React, SQL Server, Azure",
      highlights: [
        "Modernized 42 legacy applications with Python/Java/C# achieving 60% performance gain",
        "Built microservices using Spring Boot/.NET Core for 1,000+ concurrent users",
        "Developed real‑time React dashboards monitoring 3 production facilities",
        "Optimized SQL queries achieving 70% faster report generation",
      ],
    },
    {
      role: "Application Developer",
      company: "Taymor Industries",
      period: "Jul 2019 – Oct 2019",
      highlights: [
        "Built test automation framework with Python/Selenium reducing testing time by 50%",
        "Developed deployment scripts automating releases across 10+ applications",
      ],
    },
    {
      role: "IT Project Manager / Developer",
      company: "Avcorp Industries",
      period: "Mar 2019 – Jun 2019",
      highlights: [
        "Developed automation tools in Python saving 20+ hours weekly",
        "Built web management portal using Flask saving 23% manual effort",
      ],
    },
    {
      role: "Database Administrator / Developer",
      company: "Pearl Enterprises",
      period: "Feb 2017 – Mar 2019",
      highlights: [
        "Developed 50+ PowerBI dashboards using APIs and JavaScript",
        "Built ETL pipelines in Python processing 1M+ records daily with zero data loss",
        "Created database optimizations reducing query time by 40%",
      ],
    },
  ],

  projects: [
    {
      title: "Enterprise Application Modernization",
      desc: "Migrated 42 custom apps from VB to cloud‑native Python/Java/C#. Led domain migrations across 3 production environments with zero downtime.",
    },
    {
      title: "Analytics Platform Transformation",
      desc: "Executed Cognos to PowerBI migration for 50+ reports. Migrated on‑prem SQL to Azure SQL with 70% faster report generation.",
    },
    {
      title: "Digital Manufacturing Platform",
      desc: "Implemented Camstar MES across 3 production sites handling 1,000+ daily operations. Achieved 99.9% system availability.",
    },
    {
      title: "Enterprise System Integration",
      desc: "Connected FreshService to Splunk, Azure, and AWS. Automated Workday processes via RPA; reduced ticket resolution by 45%.",
    },
    {
      title: "Cloud‑Native Transformation",
      desc: "Built serverless architecture with Lambda/Azure Functions; containerized 15+ apps with Docker/Kubernetes; managed 100+ resources via Terraform.",
    },
    {
      title: "ML & Automation Platform",
      desc: "Deployed ML infrastructure for 500+ daily predictions with GitOps/ArgoCD enabling 40+ daily deployments.",
    },
  ],

  achievements: [
    {
      kicker: "Development Impact",
      value: 50,
      display: "50k+",
      detail: "lines of production code written; 42 enterprise applications modernized; 85%+ test coverage achieved; 60‑70% performance improvements delivered.",
    },
    {
      kicker: "Infrastructure Excellence",
      value: 200,
      display: "$200k+",
      detail: "annual infrastructure cost savings; 99.99% uptime; 40+ deployments daily with <1 hour MTTR; 3,000+ users served across global facilities.",
    },
  ],
};
