export interface CaseStudy {
  image: string;
  message: string;
  route: string;
  html: String;
  caseStudyId:String;
  indexItems:Array<{name:string,id:string}>
  headerImg: String;
}

const caseStudy1 = `
<div>
<h1 class="caseStudy-heading">
    Building high quality Business Intelligence Systems for Dsquare using Apache Superset
</h1><br>
<p class="caseStudy-paragraph" id="intro">
Business Intelligence (BI) stands as the cornerstone of informed decision-making in today's dynamic business landscape.
At its core, BI involves the systematic collection, processing, and analysis of data to unearth valuable insights. 
<br>This process enables organizations to gain a comprehensive understanding of their operations, turning raw data into actionable information.
<br>By decoding the complexity of data, BI reveals patterns and trends that might otherwise remain hidden, empowering businesses to make strategic 
<br>decisions backed by evidence.
From unraveling operational inefficiencies to identifying growth opportunities, BI fosters a data-driven culture, transforming information into a strategic asset. 
<br>
In essence, Business Intelligence is not just a tool; it's a fundamental approach that propels organizations towards agility, innovation, and sustainable success.
</p>
<img src="/public/case-studies/cs1/article_image1.png" alt="Apache Superset" class="caseStudy-image">
<br>
<h2 class="caseStudy-subHeading" id="open-source">
    Power of open source
</h2><br>
<p class="caseStudy-paragraph">
Primastat's commitment to harnessing the power of open-source projects has proven to be a game-changer in creating value for our clients. 
<br>By tapping into the vast ecosystem of open-source tools, we unlock a world of possibilities for customization and innovation. Our extensive knowledge 
<br>of the tools available in the market allows us to build robust and tailored solutions that precisely align with our clients' unique needs. 
<br>Open-source projects not only provide cost-effective alternatives but also foster collaboration and community-driven enhancements. 
<br>At Primastat, we leverage this collective intelligence to deliver cutting-edge solutions, utilizing tools like Apache Superset to build 
<br>in-house visualization tools and engineer database architectures compatible with heavy BI workloads. The result is a suite of custom systems
<br> that not only meet but exceed our clients' expectations, creating lasting value through the fusion of open-source innovation and 
<br>our expertise in crafting bespoke solutions.
</p>
<br>
<h2 class="caseStudy-subHeading" id="superset">
    Apache Superset
</h2><br>
<p class="caseStudy-paragraph">
Apache Superset stands as a dynamic and versatile open-source data exploration and visualization platform that has become a cornerstone in Primastat's commitment
<br> to delivering powerful Business Intelligence solutions. Renowned for its flexibility and ease of use, Superset empowers organizations to turn complex datasets 
<br>into interactive and visually compelling dashboards. Its user-friendly interface allows for seamless exploration of data, facilitating a comprehensive understanding 
<br>of operations. One notable advantage is the ability to set up Superset on-premise, providing organizations with full control over their BI environment. 
<br>This self-hosted capability ensures data security, compliance, and the ability to tailor the system to specific needs. The benefits of Apache Superset 
<br>extend beyond its deployment flexibility; it offers a wide array of visualization options, supports a variety of data sources, and fosters collaboration 
<br>through shared dashboards. In essence, Apache Superset emerges as a powerful tool in our arsenal, allowing us to deliver customized, effective, and visually 
<br>compelling BI solutions for our clients.
</p>
<br>
<h2 class="caseStudy-subHeading" id="dsquare">
    Crafting brilliance with Dsquare
</h2><br>
<p class="caseStudy-paragraph">
The integration of Apache Superset and the custom ETL pipeline into Dsquare's infrastructure marked a transformative phase in their Business Intelligence capabilities. 
<br>Collaborating with Primastat, the implementation focused on leveraging the robust components of Apache Superset to craft an in-house visualization tool that provided 
<br>intuitive insights. The engineering of the existing database architecture ensured compatibility with heavy BI workloads, enhancing the scalability and efficiency of data processing. 
<br>The deployment of ETL pipelines in pure Python showcased a commitment to streamlined data extraction, transformation, and loading processes. Further, the decision to house the data in 
<br>MySQL for efficient data warehousing solidified the foundation for secure and scalable storage. Multiple dashboards, tailored for diverse user groups, including public-facing interfaces,
<br>were crafted to provide targeted and actionable insights. This integration not only elevated Dsquare's BI capabilities but also exemplified the successful collaboration
<br>between Primastat and Dsquare in delivering innovative and tailored solutions to meet their unique business needs.
</p>
<br>
<h2 class="caseStudy-subHeading" id=collab>
    Collaborate with Primastat
</h2><br>
<p class="caseStudy-paragraph">
    Embark on a transformative journey by collaborating with Primastat to revolutionize your Business Intelligence landscape. Our expertise extends beyond mere implementation.
    <br>We offer a comprehensive suite of services designed to meet your unique data needs.
</p>
<br>

<ul class="caseStudy-paragraph">
    <li>
        <strong>Build Your In-House BI Systems:</strong>
        Choose from a diverse array of cutting-edge tools and technologies to craft a bespoke in-house Business Intelligence system tailored to your organizational requirements. We specialize in leveraging open-source projects like Apache Superset, ensuring that your visualization tools are not just effective but also customizable to align with your specific business objectives.
    </li>
<br>
    <li>
        <strong>Enhance Your Existing Systems:</strong>
        Already have a BI system in place? Collaborate with us to elevate its capabilities. Our seasoned professionals will work alongside your team to engineer and optimize your existing database architecture, ensuring compatibility with heavy BI workloads. Whether it's refining ETL pipelines or upgrading data warehousing solutions, we bring a wealth of experience to enhance the efficiency and scalability of your current systems.
    </li>
<br>
    <li>
        <strong>Consult with Us for Data Knowledge Advancement:</strong>
        Unlock the full potential of your data through insightful consultations with our experts. Whether you are looking to refine your data strategies, improve analytics workflows, or implement advanced data science techniques, our consultancy services are designed to take your data knowledge to the next level. Together, we can navigate the intricacies of data management and empower your organization with the tools and insights needed to thrive in the data-driven era.
    </li>
</ul>
<br>
<p class="caseStudy-paragraph">
    <strong>Connect with Primastat, and let's embark on a collaborative journey towards unleashing the true power of your data. 
    <br>Whether you're building from the ground up, enhancing existing systems, or seeking strategic data guidance, our team is ready to partner with you for success.</strong>
</p>
</div>
  `;

export const caseStudiesList: Array<CaseStudy> = [
  { caseStudyId:"cs-1",
    image: "/public/case-studies/cs1.png",
    headerImg: "/public/case-studies/cs1/bg.svg",
    message:
      "Primastat Transforms DSquare with Groundbreaking BI System",
    html: caseStudy1,
    route: "/caseStudy/cs-1",
    indexItems: [
      {
        "name": "Introduction",
        "id": "intro"
      },
      {
        "name": "Power of open-source",
        "id": "open-source"
      },
      {
        "name": "Superset",
        "id": "superset"
      },
      {
        "name": "Crafting brilliance with Dsquare",
        "id": "dsquare"
      },
      {
        "name": "Collaborate with Primastat",
        "id": "collab"
      }
    ],
  },
  // ... you can add more case studies here
];
