(() => {
const groups=[
  {
    "icon": "⌘",
    "label": "01 / Agent systems",
    "title": "Agentic AI & LLM Infrastructure",
    "text": "Architectures, runtimes, and tooling for production agents.",
    "tags": [
      "Multi-agent orchestration",
      "Agent runtimes",
      "AI compiler workflows",
      "Sequential & loop-based agents",
      "Dependency graphs",
      "Context-window engineering",
      "Context injection",
      "Model routing",
      "Plugin architectures",
      "MCP",
      "Tool calling",
      "RAG"
    ],
    "tools": [],
    "link": "lensing",
    "where": "Agent architecture at Lensing"
  },
  {
    "icon": "◈",
    "label": "02 / Model development",
    "title": "LLM Training & Applied ML",
    "text": "Adapting models and building task-specific learning systems.",
    "tags": [
      "Post-training",
      "Fine-tuning",
      "LoRA / PEFT",
      "NLP",
      "Computer vision",
      "3D cooperative perception",
      "Recommendation systems",
      "Time series",
      "Clustering",
      "Collaborative filtering",
      "Feature engineering",
      "User profiling",
      "YOLO",
      "Siamese networks"
    ],
    "tools": [
      "pytorch",
      "tensorflow",
      "Hugging Face",
      "scikit-learn",
      "XGBoost"
    ],
    "link": "hich",
    "where": "Applied ML at Hich"
  },
  {
    "icon": "↺",
    "label": "03 / Quality & reliability",
    "title": "Evaluation & Observability",
    "text": "Understanding behavior and keeping deployed systems reliable.",
    "tags": [
      "LLM evaluation",
      "LLM observability",
      "Agent trajectory tracing",
      "Benchmarking",
      "Guardrails",
      "Validation",
      "Consistency checking",
      "Automated repair",
      "Concept-drift detection",
      "Automated retraining",
      "Model monitoring",
      "Prompt / context caching"
    ],
    "tools": [
      "grafana",
      "Metabase",
      "Tableau"
    ],
    "link": "offerland",
    "where": "Evaluation and retraining at Offerland"
  },
  {
    "icon": "&lt;/&gt;",
    "label": "04 / Languages & services",
    "title": "Software & API Engineering",
    "text": "The implementation layer behind the models and platforms.",
    "tags": [
      "REST APIs",
      "Microservices",
      "Distributed systems",
      "System design",
      "Enterprise integrations",
      "Parallel execution"
    ],
    "tools": [
      "python",
      "typescript",
      "Node.js",
      "fastapi",
      "Flask",
      "ASP.NET / .NET Core"
    ],
    "link": "forsat",
    "where": "Production services at Forsat"
  },
  {
    "icon": "▤",
    "label": "05 / Storage & pipelines",
    "title": "Data Engineering & Databases",
    "text": "From event streams to the data that models and services consume.",
    "tags": [
      "SQL",
      "Event-driven pipelines",
      "Data preprocessing",
      "Data modeling",
      "Caching",
      "Recommendation pools"
    ],
    "tools": [
      "postgresql",
      "MySQL",
      "ClickHouse",
      "MongoDB",
      "redis",
      "Kafka",
      "PySpark",
      "MSSQL"
    ],
    "link": "hich",
    "where": "Data systems at Hich"
  },
  {
    "icon": "↑",
    "label": "06 / Production delivery",
    "title": "Infrastructure, Testing & Delivery",
    "text": "Shipping, integrating, and operating dependable software.",
    "tags": [
      "CI/CD",
      "Unit testing",
      "E2E testing",
      "Model serving",
      "Performance optimization",
      "API latency optimization",
      "Cost optimization",
      "Customer deployment"
    ],
    "tools": [
      "docker",
      "AWS",
      "Git",
      "GitLab"
    ],
    "link": "lensing",
    "where": "Production engineering at Lensing"
  }
];
const names={python:'Python',pytorch:'PyTorch',typescript:'TypeScript',docker:'Docker',postgresql:'PostgreSQL',redis:'Redis',tensorflow:'TensorFlow',fastapi:'FastAPI',grafana:'Grafana'};
document.querySelector('#skills').innerHTML=`<div class="section-bar"><span class="eyebrow">03 / Skills & toolkit</span><span class="right">Ideas, methods, and the tools I use</span></div><div class="toolkit-heading"><h2 id="skills-heading">Technical skills.<br><span>The full toolkit.</span></h2><p>Architectures, methods, languages, and technologies<br>across my engineering and research work.</p></div><div class="toolkit-grid">${groups.map(g=>`<article class="toolkit-card"><div class="toolkit-card-top"><span class="toolkit-symbol" aria-hidden="true">${g.icon}</span><span class="eyebrow">${g.label}</span></div><h3>${g.title}</h3><p>${g.text}</p><ul class="toolkit-topics">${g.tags.map(t=>`<li>${t}</li>`).join('')}</ul><div class="toolkit-tools">${g.tools.map(t=>`<span>${names[t]?`<img src="assets/technology/${t}.svg" alt="" width="19" height="19">`:""}${names[t]||t}</span>`).join("")}</div><a class="toolkit-case" href="#${g.link}">${g.where}<span aria-hidden="true"> ↗</span></a></article>`).join('')}</div>`;
document.querySelectorAll('.toolkit-case').forEach(a=>a.addEventListener('click',()=>{const target=document.getElementById(a.hash.slice(1));if(target?.tagName==='DETAILS')target.open=true}));
})();
