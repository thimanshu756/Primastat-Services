export interface CaseStudy {
  image: string;
  message: string;
  route: string;
  html: String;
  caseStudyId:String;
  indexItems:Array<{name:string,id:string}>
}

const caseStudy1 = `
  <div>
  <h1 class="heading-1" id="tag1">Tag 1</h1>
    <p>In a strategic move aimed at revolutionizing data-driven decision-making, <strong>Primastat</strong> has successfully established a comprehensive <em>Business Intelligence (BI)</em> system for <em>DSquare</em> from scratch.</p>
    <h2>Understanding Unique Needs</h2>
    <p>The journey began with an in-depth analysis of <em>DSquare's</em> specific business requirements. <strong>Primastat</strong> collaborated closely with <em>DSquare</em> stakeholders to identify key performance indicators and crucial data points essential for informed decision-making.</p>
    <h2>Crafting the Blueprint</h2>
    <p>Once requirements were clear, <strong>Primastat</strong> developed a tailored blueprint for the <em>BI system</em>. This involved selecting the appropriate technology stack, designing a robust database architecture, and choosing visualization tools that seamlessly integrated with <em>DSquare's</em> existing infrastructure.</p>
    <h2>Implementation and Integration</h2>
    <p>The skilled team at <strong>Primastat</strong> executed the plan, implementing the <em>BI system</em> and ensuring smooth integration with <em>DSquare's</em> data sources. This phase included setting up data pipelines, establishing data warehouses, and configuring real-time data feeds to provide <em>DSquare</em> with up-to-the-minute insights.</p>
    <h2>User Training and Adoption</h2>
    <p>Recognizing the importance of user adoption, <strong>Primastat</strong> conducted comprehensive training sessions for <em>DSquare's</em> teams. This step was crucial to empower users with the skills needed to leverage the full potential of the <em>BI system</em> and make informed decisions.</p>
    <h2>Empowered Decision-Making</h2>
    <p>Today, thanks to the collaborative efforts of <strong>Primastat</strong> and <em>DSquare</em>, the new <em>BI system</em> stands as a testament to empowered decision-making. <em>DSquare's</em> leadership now has access to real-time analytics, uncovering trends and gaining valuable insights that drive the company's growth.</p>
    <h2>Ongoing Evolution</h2>
    <p>As the partnership between <strong>Primastat</strong> and <em>DSquare</em> continues to evolve, the <em>BI system</em> remains a dynamic tool, adapting to the ever-changing landscape of business intelligence.</p>
    <p Stay tuned for more updates on how <strong>Primastat</strong> continues to lead the way in revolutionizing business intelligence for enterprises.</p>

    <h1  class="heading-1" id="tag2">Tag 2</h1>
    <p>In a strategic move aimed at revolutionizing data-driven decision-making, <strong>Primastat</strong> has successfully established a comprehensive <em>Business Intelligence (BI)</em> system for <em>DSquare</em> from scratch.</p>
    <h2>Understanding Unique Needs</h2>
    <p>The journey began with an in-depth analysis of <em>DSquare's</em> specific business requirements. <strong>Primastat</strong> collaborated closely with <em>DSquare</em> stakeholders to identify key performance indicators and crucial data points essential for informed decision-making.</p>
    <h2>Crafting the Blueprint</h2>
    <p>Once requirements were clear, <strong>Primastat</strong> developed a tailored blueprint for the <em>BI system</em>. This involved selecting the appropriate technology stack, designing a robust database architecture, and choosing visualization tools that seamlessly integrated with <em>DSquare's</em> existing infrastructure.</p>
    <h2>Implementation and Integration</h2>
    <p>The skilled team at <strong>Primastat</strong> executed the plan, implementing the <em>BI system</em> and ensuring smooth integration with <em>DSquare's</em> data sources. This phase included setting up data pipelines, establishing data warehouses, and configuring real-time data feeds to provide <em>DSquare</em> with up-to-the-minute insights.</p>
    <h2>User Training and Adoption</h2>
    <p>Recognizing the importance of user adoption, <strong>Primastat</strong> conducted comprehensive training sessions for <em>DSquare's</em> teams. This step was crucial to empower users with the skills needed to leverage the full potential of the <em>BI system</em> and make informed decisions.</p>
    <h2>Empowered Decision-Making</h2>
    <p>Today, thanks to the collaborative efforts of <strong>Primastat</strong> and <em>DSquare</em>, the new <em>BI system</em> stands as a testament to empowered decision-making. <em>DSquare's</em> leadership now has access to real-time analytics, uncovering trends and gaining valuable insights that drive the company's growth.</p>
    <h2>Ongoing Evolution</h2>
    <p>As the partnership between <strong>Primastat</strong> and <em>DSquare</em> continues to evolve, the <em>BI system</em> remains a dynamic tool, adapting to the ever-changing landscape of business intelligence.</p>
    <p Stay tuned for more updates on how <strong>Primastat</strong> continues to lead the way in revolutionizing business intelligence for enterprises.</p>

    </div>
  `;

export const caseStudiesList: Array<CaseStudy> = [
  { caseStudyId:"blog-1",
    image: "https://c.animaapp.com/MXeDvc3F/img/istock-1143391583-1@2x.png",
    message:
      "Primastat Transforms DSquare with Groundbreaking BI System",
    html: caseStudy1,
    route: "/caseStudy/blog-1",
    indexItems: [
      {name:"tag1",id:"tag1"},
      {name:"tag2",id:"tag2"}
    ],
  },

  { caseStudyId:"blog-1",
  image: "https://c.animaapp.com/MXeDvc3F/img/istock-1143391583-1@2x.png",
  message:
    "Primastat Transforms DSquare with Groundbreaking BI System",
  html: caseStudy1,
  route: "/caseStudy/blog-1",
  indexItems: [
    {name:"tag1",id:"tag1"},
    {name:"tag2",id:"tag2"}
  ],
},
{ caseStudyId:"blog-1",
    image: "https://c.animaapp.com/MXeDvc3F/img/istock-1143391583-1@2x.png",
    message:
      "Primastat Transforms DSquare with Groundbreaking BI System",
    html: caseStudy1,
    route: "/caseStudy/blog-1",
    indexItems: [
      {name:"tag1",id:"tag1"},
      {name:"tag2",id:"tag2"}
    ],
  },
  { caseStudyId:"blog-1",
  image: "https://c.animaapp.com/MXeDvc3F/img/istock-1143391583-1@2x.png",
  message:
    "Primastat Transforms DSquare with Groundbreaking BI System",
  html: caseStudy1,
  route: "/caseStudy/blog-1",
  indexItems: [
    {name:"tag1",id:"tag1"},
    {name:"tag2",id:"tag2"}
  ],
},
{ caseStudyId:"blog-1",
    image: "https://c.animaapp.com/MXeDvc3F/img/istock-1143391583-1@2x.png",
    message:
      "Primastat Transforms DSquare with Groundbreaking BI System",
    html: caseStudy1,
    route: "/caseStudy/blog-1",
    indexItems: [
      {name:"tag1",id:"tag1"},
      {name:"tag2",id:"tag2"}
    ],
  },
  { caseStudyId:"blog-1",
  image: "https://c.animaapp.com/MXeDvc3F/img/istock-1143391583-1@2x.png",
  message:
    "Primastat Transforms DSquare with Groundbreaking BI System",
  html: caseStudy1,
  route: "/caseStudy/blog-1",
  indexItems: [
    {name:"tag1",id:"tag1"},
    {name:"tag2",id:"tag2"}
  ],
},
{ caseStudyId:"blog-1",
    image: "https://c.animaapp.com/MXeDvc3F/img/istock-1143391583-1@2x.png",
    message:
      "Primastat Transforms DSquare with Groundbreaking BI System",
    html: caseStudy1,
    route: "/caseStudy/blog-1",
    indexItems: [
      {name:"tag1",id:"tag1"},
      {name:"tag2",id:"tag2"}
    ],
  },
  { caseStudyId:"blog-1",
  image: "https://c.animaapp.com/MXeDvc3F/img/istock-1143391583-1@2x.png",
  message:
    "Primastat Transforms DSquare with Groundbreaking BI System",
  html: caseStudy1,
  route: "/caseStudy/blog-1",
  indexItems: [
    {name:"tag1",id:"tag1"},
    {name:"tag2",id:"tag2"}
  ],
},
{ caseStudyId:"blog-1",
    image: "https://c.animaapp.com/MXeDvc3F/img/istock-1143391583-1@2x.png",
    message:
      "Primastat Transforms DSquare with Groundbreaking BI System",
    html: caseStudy1,
    route: "/caseStudy/blog-1",
    indexItems: [
      {name:"tag1",id:"tag1"},
      {name:"tag2",id:"tag2"}
    ],
  },
  { caseStudyId:"blog-1",
  image: "https://c.animaapp.com/MXeDvc3F/img/istock-1143391583-1@2x.png",
  message:
    "Primastat Transforms DSquare with Groundbreaking BI System",
  html: caseStudy1,
  route: "/caseStudy/blog-1",
  indexItems: [
    {name:"tag1",id:"tag1"},
    {name:"tag2",id:"tag2"}
  ],
},




  // ... you can add more case studies here
];
