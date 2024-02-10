export interface ServiceDetail {
  image: string;
  heading: string;
  description: string;
  details: Array<{
    icon: string;
    text: string;
  }>;
  serviceId: string;
}

export interface ServiceData {
  serviceId: string;
  breadCrumbsText: string;

  heroText: string;
  heroImage: string;

  serviceDetails: ServiceDetail[];
}

const bigData = {
  serviceId: "bigData",
  breadCrumbsText: "Home \u25B6 Services \u25B6  Big Data  ",
  heroText: "Architect, Implement, Govern: Transform Your Data Landscape",
  heroImage: "/public/services/bitData/hero.jpeg",

  serviceDetails: [
    {
      image: "/public/services/bitData/lakehouse.png",
      heading: "Data Warehousing",
      description:
        "Elevate Your data organization with advanced engineering and robust management",
      details: [
        { icon: "", text: "Architecture Designing" },
        { icon: "", text: "Data Migration" },
        { icon: "", text: "Data Quality Management" },
        { icon: "", text: "End-to-end solutions" },
      ],
    },

    {
      image: "/public/services/bitData/img2.jpeg",
      heading: "Big Data Analytics",
      description:
        "Drive informed decision-making with Advanced Analytics and Dynamic Insights",
      details: [
        { icon: "", text: "Faster Data Processing" },
        { icon: "", text: "Predictive Analytics" },
        { icon: "", text: "Apache Spark Expertise" },
        { icon: "", text: "Databricks Integration" },
      ],
    },
  ],
};

const dataVisualization = {
  serviceId: "dataVisualization",
  breadCrumbsText: "Home \u25B6  Services \u25B6  Data Visualization  ",
  heroText: "Visualize Insights, Empower Decisions: Uncover the Power of Data",
  heroImage: "/public/services/dataVisualization/hero.png",

  serviceDetails: [
    {
      image: "/public/services/dataVisualization/img1.png",
      heading: "Business Intelligence Tool Integration",
      description:
        "Visualize, analyze and become more data driven by setting up an on-premise Business Intelligence tool",
      details: [
        {
          icon: "/public/services/dataVisualization/logo-1.png",
          text: "Apache Superset",
        },
        {
          icon: "/public/services/dataVisualization/logo-2.png",
          text: "Kibana",
        },
        {
          icon: "/public/services/dataVisualization/logo-3.png",
          text: "Grafana",
        },
        {
          icon: "/public/services/dataVisualization/logo-4.png",
          text: "Plotly Dash",
        },
      ],
    },

    {
      image: "/public/services/dataVisualization/img2.png",
      heading: "Powerful Dashboards",
      description:
        "Drive informed decision-making through intuitive visualizations, unlocking the full potential of your data",
      details: [
        { icon: "", text: "Tailored Reports" },
        { icon: "", text: "Transform data into a story" },
        { icon: "", text: "Time-series Visualization" },
        { icon: "", text: "KPI Tracking" },
      ],
    },

    {
      image: "/public/services/dataVisualization/img3.png",
      heading: "Performance Monitoring",
      description:
        "Visualize key metrics in real-time, elevate the performance of your critical systems",
      details: [
        { icon: "", text: "Log Monitoring" },
        { icon: "", text: "Real-time Dashboards" },
        { icon: "", text: "Alerting Mechanism" },
        { icon: "", text: "Anomaly Detection" },
      ],
    },
  ],
};

const machineLearning = {
  serviceId: "machineLearning",
  breadCrumbsText: "Home \u25B6  Services \u25B6  Machine Learning  ",
  heroText: "Build, Deploy, Manage your Machine Learning Workflows",
  heroImage: "/public/services/machineLearning/hero.jpeg",

  serviceDetails: [
    {
      image: "/public/services/machineLearning/img1.jpeg",
      heading: "Machine Learning Operations (MLOps)",
      description:
        "Streamline your Data Pipelines and unlock the efficiency of your Machine Learning Systemsl",
      details: [
        { icon: "", text: "Data Engineering" },
        { icon: "", text: "Model Version Control" },
        { icon: "", text: "Data Streamlining" },
        { icon: "", text: "Process Automation" },
      ],
    },

    {
      image: "/public/services/machineLearning/img2.jpeg",
      heading: "Model Building",
      description:
        "Build or fine-tune state-of-the-art Models for your use case. We’ll make sure the accuracy is top notch.",
      details: [
        { icon: "", text: "Computer Vision" },
        { icon: "", text: "Natural Language Processing" },
        { icon: "", text: "Time-series Forecasting" },
        { icon: "", text: "Graph Machine Learning" },
      ],
    },

    {
      image: "/public/services/machineLearning/img3.jpeg",
      heading: "Model Deployment and Inference",
      description:
        "Make your model production-ready and experience seamless integration into your application",
      details: [
        { icon: "", text: "Cloud Deployment" },
        { icon: "", text: "Inference API" },
        { icon: "", text: "Model Monitoring" },
        { icon: "", text: "Model Re-training" },
      ],
    },
  ],
};

const serviceList = [bigData, dataVisualization, machineLearning];
export default serviceList;
