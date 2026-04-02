// Generalized data architecture 
// Easily swap out the whole 'sections' array for any new client layout

import brandLaunchImg from '../assets/pexels-photo-1450360.jpeg';

export const proposalData = {
  client: {
    "name": "VanillaHub",
    "logoText": "VH",
    "logoUrl": "/vanilla-hub-logo.png"
  },
  agency: {
    "name": "Big On Digital",
    "contactEmail": "hello@bigondigital.com"
  },
  hero: {
    "badge": "VanillaHub AI CRM",
    "title": "Build Smarter Business Systems.<br/><span style='font-weight: 300'>Custom Payroll, HR and financial tools.</span>",
    "subtitle": "The all-in-one AI CRM platform designed to transform your customer relationships and accelerate business growth with data-driven precision.",
    "heroImageUrl": "/ai-robot-hero.png"
  },
  sections: [
    {
      type: 'ExecutiveSummary',
      id: 'intro',
      data: {
        title: "Introduction",
        content: "Vanilla Hub is a next-generation platform focused on building customised business solutions that simplify operations and support growth. From tailored system development to intelligent automation, the focus is on creating tools that work the way each business operates.\n\nAlongside this, Vanilla Hub offers integrated payroll, HR, and invoicing solutions designed to navigate South African tax and labour requirements with ease. By automating complex processes, from SARS compliance (BCEA, COIDA, UIF) to financial workflows and reporting, businesses gain clarity, efficiency, and control.",
        image1: "/tech-nodes.png",
        image2: "/vanilla-robot.png"
      }
    },
    {
      type: 'FeatureSection',
      id: 'phase1-header',
      data: {
        eyebrow: "Phase 1",
        title: "Foundations",
        description: "This phase focuses on establishing the brand and optimizing the digital infrastructure required to drive robust enquiries and ensure a consistent professional image.",
        imagePosition: "left",
        imageUrl: "/visual-guide.png"
      }
    },
    {
      type: 'FeatureSection',
      id: 'brand-visual',
      data: {
        eyebrow: "1. Brand Visual Guide",
        title: "Creator Archetype",
        description: "We define Vanilla Hub’s brand through the lens of the Creator archetype, positioning the business as an innovator that builds intelligent, practical solutions for modern businesses. This establishes a clear visual identity, tone, and messaging framework that reflects your tech-driven approach. The outcome is a brand that feels purposeful, distinctive, and aligned to your vision of creating smarter systems for SMEs across Southern Africa.",
        imagePosition: "right",
        imageUrl: "/brand-archetype-wheel.png",
        price: "R 3,995",
        quoteLabel: "Brand Visual Guide",
        quoteUrl: "https://zohosecurepay.com/books/bigondigital/secure?CEstimateID=2-34bc0b1ac6b266943facf2ae13ae9609e694cb43fa5771aff2bb10fbeaf151a39c807edabf2f9a54f0fc5ac66f7360f79265d3a24d2171e405e93abf9e4e8a3211e80a707f5b3196"
      }
    },
    {
      type: 'FeatureSection',
      id: 'competitor-analysis',
      data: {
        eyebrow: "2. Competitor Analysis",
        title: "Uncovering Opportunities",
        description: "We analyse the competitive landscape to uncover positioning opportunities within the SaaS, ERP, and payroll space. By identifying where competitors fall short, we shape a clearer narrative around Vanilla Hub’s strengths, particularly its custom solutions, affordability, and hands-on expertise. This ensures your brand communicates a compelling reason for clients to choose you over more generic platforms.",
        imagePosition: "left",
        imageUrl: "/competitor-image.png",
        price: "R 5,500",
        quoteLabel: "Competitor Analysis",
        quoteUrl: "https://zohosecurepay.com/books/bigondigital/secure?CEstimateID=2-34bc0b1ac6b266943facf2ae13ae96097ef477067068ffb3e62fda4e4262ea43c11680bc61ee1bb5f0fc5ac66f7360f79265d3a24d2171e405e93abf9e4e8a3211e80a707f5b3196"
      }
    },
    {
      type: 'FeatureSection',
      id: 'website-audit',
      data: {
        eyebrow: "3. Website Design Enhancement",
        title: "Audit & Recommendations",
        description: "We conduct a comprehensive website audit to identify gaps in structure, messaging, user experience, and conversion pathways. The outcome is a clear set of recommendations to improve performance and lead generation. This audit will be handed over for implementation within the Knack environment, or we can provide a separate quotation to assist with enhancements directly within the platform.",
        imagePosition: "right",
        imageUrl: "/vanilla-hub-enhanced.png",
        price: "R 4,995",
        quoteLabel: "Website Enhancement Audit",
        quoteUrl: "https://zohosecurepay.com/books/bigondigital/secure?CEstimateID=2-34bc0b1ac6b266943facf2ae13ae96099de0b67d1007a0531d86ba480a2a600002d3f0fd7ce01b53f0fc5ac66f7360f79265d3a24d2171e405e93abf9e4e8a3211e80a707f5b3196"
      }
    },
    {
      type: 'FeatureSection',
      id: 'seo-foundations',
      data: {
        eyebrow: "4. SEO Implementation",
        title: "Search Visibility",
        description: "We establish the foundations for search visibility, ensuring Vanilla Hub can be discovered by businesses actively seeking payroll, HR, and financial solutions. As Knack has limitations from an SEO perspective, this phase includes structuring a WordPress layer or integration to support SEO efforts. This enables scalable content, improved indexing, and long-term organic growth aligned to your business goals.",
        imagePosition: "left",
        imageUrl: "/seo-optimization.png",
        price: "R 6,500",
        quoteLabel: "SEO Foundations Set-up",
        quoteUrl: "https://zohosecurepay.com/books/bigondigital/secure?CEstimateID=2-34bc0b1ac6b266943facf2ae13ae960966e3075f98fbf67241cd2542f4d21e8a1235ce4660b18378f0fc5ac66f7360f79265d3a24d2171e405e93abf9e4e8a3211e80a707f5b3196"
      }
    },
    {
      type: 'FeatureSection',
      id: 'phase2-header',
      data: {
        eyebrow: "Phase 2",
        title: "Expansion",
        description: "Expanding Vanilla Hub's presence and authority through targeted listings, search optimization, and professional social media setup.",
        imagePosition: "right",
        imageUrl: "/phase-2.png",
        bgColor: "secondary"
      }
    },
    {
      type: 'FeatureSection',
      id: 'website-tracking-audit',
      data: {
        eyebrow: "5. Website Tracking",
        title: "Data-Driven Insights",
        description: "We implement tracking systems that provide full visibility into website performance, including user behaviour, enquiries, and conversion activity. Due to platform constraints, this will include linking the Knack website with a WordPress environment or compatible tracking framework to ensure accurate data collection. The result is clear, actionable insights that support smarter marketing decisions and measurable growth.",
        imagePosition: "left",
        imageUrl: "/website-tracking.png",
        price: "R 5,500",
        quoteLabel: "Website Tracking & Analytics Setup",
        quoteUrl: "https://zohosecurepay.com/books/bigondigital/secure?CEstimateID=2-34bc0b1ac6b266943facf2ae13ae9609d0b5d6c9301858147de94fd4d92448fc2caab79599f3fb12f0fc5ac66f7360f79265d3a24d2171e405e93abf9e4e8a3211e80a707f5b3196"
      }
    },
    {
      type: 'FeatureSection',
      id: 'video-creation',
      data: {
        eyebrow: "6. Video Creation",
        title: "Corporate Introduction & Explainers",
        description: "We develop professional video content that communicates Vanilla Hub’s offering in a clear and engaging way. By simplifying complex solutions into compelling visual narratives, video builds trust, improves understanding, and increases conversion potential. This positions Vanilla Hub as both innovative and approachable, while strengthening credibility with prospective clients.",
        imagePosition: "right",
        imageUrl: "/video-creation.png",
        price: "R 17,985",
        quoteLabel: "Video Content Creation",
        quoteUrl: "https://zohosecurepay.com/books/bigondigital/secure?CEstimateID=2-34bc0b1ac6b266943facf2ae13ae96094b0e1d456421beeb3709cd897671405edca1e04d57496cddf0fc5ac66f7360f79265d3a24d2171e405e93abf9e4e8a3211e80a707f5b3196"
      }
    },
    {
      type: 'FeatureSection',
      id: 'seo-listings',
      data: {
        eyebrow: "7. SEO Listings and Citations",
        title: "Authority Building",
        description: "We expand Vanilla Hub’s presence across relevant directories and platforms, improving search visibility and reinforcing credibility. This creates multiple trusted touchpoints where potential clients can discover your business, strengthening your authority and increasing the likelihood of engagement.",
        imagePosition: "left",
        imageUrl: "/seo-listings-citations.png",
        price: "R 2,995",
        quoteLabel: "SEO Listings & Citations",
        quoteUrl: "https://zohosecurepay.com/books/bigondigital/secure?CEstimateID=2-34bc0b1ac6b266943facf2ae13ae9609d5d6860c07e6a6c78b8e64fbb3d14a120afa72fb81e7454bf0fc5ac66f7360f79265d3a24d2171e405e93abf9e4e8a3211e80a707f5b3196"
      }
    },
    {
      type: 'FeatureSection',
      id: 'google-bing-listing',
      data: {
        eyebrow: "8. Google Business & Bing Listing",
        title: "Local Mastery",
        description: "We establish a verified and optimised business presence on Google and Bing, enabling Vanilla Hub to appear in local and branded searches. This enhances trust, supports credibility through reviews, and ensures your business is easily accessible to potential clients exploring your services.",
        imagePosition: "right",
        imageUrl: "/google-bing-listing.png",
        price: "R 1,990",
        quoteLabel: "Map Listings (Google/Bing)",
        quoteUrl: "https://zohosecurepay.com/books/bigondigital/secure?CEstimateID=2-34bc0b1ac6b266943facf2ae13ae9609dd88cdba433d7db9e433db300d3e425400361f09304e1675f0fc5ac66f7360f79265d3a24d2171e405e93abf9e4e8a3211e80a707f5b3196"
      }
    },
    {
      type: 'FeatureSection',
      id: 'social-profiles',
      data: {
        eyebrow: "9. Social Profiles Setup (Meta)",
        title: "Meta Alignment",
        description: "We set up and optimise Meta platforms to ensure Vanilla Hub is presented professionally and consistently. This creates a strong foundation for future campaigns and content, aligning your social presence with your broader brand and business objectives.",
        imagePosition: "left",
        imageUrl: "/social-profile-setup.png",
        price: "R 995",
        quoteLabel: "Social Profile Setup",
        quoteUrl: "https://zohosecurepay.com/books/bigondigital/secure?CEstimateID=2-34bc0b1ac6b266943facf2ae13ae96097b5a11455e181deb6937b2d1191c68a2c99ca0bd9c9d2c69f0fc5ac66f7360f79265d3a24d2171e405e93abf9e4e8a3211e80a707f5b3196"
      }
    },
    {
      type: 'FeatureSection',
      id: 'social-media-calendar',
      data: {
        eyebrow: "10. Social Media (Content Calendar)",
        title: "Planning & Strategy",
        description: "A structured content calendar will guide the creation and scheduling of social media content, ensuring a consistent and purposeful online presence. This framework defines key content themes, messaging direction, and posting cadence, helping the brand communicate its value clearly while building awareness and engagement over time.",
        imagePosition: "right",
        imageUrl: "/social-media.jpg",
        price: "R 1,995",
        quoteLabel: "Content Planning",
        quoteUrl: "https://zohosecurepay.com/books/bigondigital/secure?CEstimateID=2-34bc0b1ac6b266943facf2ae13ae96090dfa7e2ffe0a53383e3f95d87ea3a33017124eb5019b01d1f0fc5ac66f7360f79265d3a24d2171e405e93abf9e4e8a3211e80a707f5b3196"
      }
    },
    {
      type: 'FeatureSection',
      id: 'social-media-management',
      data: {
        eyebrow: "11. Social Media Content Creation, Scheduling & Community Management",
        title: "Content & Community",
        description: "We execute your social media presence through the creation and scheduling of content across Facebook and LinkedIn, ensuring consistent, professional communication aligned to your brand and business objectives. Each post is crafted to educate, build credibility, and keep your audience engaged. Alongside this, we actively manage community engagement by monitoring interactions, responding to comments and messages, and maintaining a responsive, trustworthy brand presence that strengthens relationships and supports ongoing growth.",
        imagePosition: "left",
        imageUrl: "/content-community.png",
        price: "R 2,567 /mo",
        quoteLabel: "Social Media Management",
        quoteUrl: "https://zohosecurepay.com/books/bigondigital/secure?CEstimateID=2-34bc0b1ac6b266943facf2ae13ae9609eb8c6afb43f106e92cb02547e57f238151cd17585d8675b9f0fc5ac66f7360f79265d3a24d2171e405e93abf9e4e8a3211e80a707f5b3196"
      }
    },
    {
      type: 'AchievementsList',
      id: 'optional',
      data: {
        title: "Optional Enhancements",
        subtitle: "Additional supportive services to strengthen Vanilla Hub's market presence.",
        badge: "Optional",
        visualTitle: "Value Add",
        visualText: "Extra Impact",
        points: [
          "Company Profile & Stationery: A professional company profile and supporting materials that clearly communicate your offering.",
          "Additional Social Platforms: Expanding to X and TikTok where relevant for broader reach.",
          "Google Ads",
          "LinkedIn Ads",
          "Meta Ads",
          "Social Mobile Landing Page",
          "Mailer Funnel Strategies",
          "WhatsApp Automation",
          "SEO & Thought Leadership Blog Strategy"
        ]
      }
    },
    {
      type: 'AboutCompany',
      id: 'about',
      data: {
        title: "About Big On Digital",
        description: "<p>Big On Digital is a boutique digital marketing agency offering expert, end-to-end marketing services to both small businesses and large corporations. With over two decades of combined industry experience, our team specialises in social media, branding, web development, and digital strategy that help clients grow their reach and strengthen their brand presence.</p><p>We believe in the power of creativity, strategy, and innovation to transform businesses. Every project is approached with purpose and precision, combining design, technology, and storytelling to deliver meaningful results.</p><p>Our team brings a dynamic mix of talent and insight, ensuring each brand we work with receives customised, high-impact digital solutions that drive measurable success.</p><p>At Big On Digital, we don’t just build brands, we bring visions to life.</p>",
        team: [
          { 
            name: "Andy", 
            title: "Technical & Performance Lead", 
            subtitle: "Development & Paid Media", 
            description: "Andy owns the technical and performance layer of the agency. From website development to paid advertising and tracking, he ensures every campaign is built on strong systems and optimised for results.", 
            image: "/staff1.jpg" 
          },
          { 
            name: "Dominique", 
            title: "Founder & Strategic Director", 
            subtitle: "Growth & Strategy", 
            description: "Dominique defines the vision behind every project, guiding brand positioning, marketing strategy, and long-term growth. She works closely with clients to translate ambition into structured digital direction that delivers measurable results.", 
            image: "/staff2.jpg" 
          },
          { 
            name: "Francois", 
            title: "Creative & AI Lead", 
            subtitle: "Content, Design & Innovation", 
            description: "Francois leads creative execution while driving the integration of AI across content and workflows. He shapes how ideas come to life, from social media and design to intelligent content systems, ensuring the brand remains both relevant and forward-thinking.", 
            image: "/staff3.jpg" 
          }
        ]
      }
    },
    {
      type: 'ClientLogos',
      id: 'clients',
      data: {
        title: "Trusted By Industry Leaders",
        logos: [
          { name: "Cashbox Global", url: "/Logos-1.webp", website: "https://www.cashbox.global" },
          { name: "WorkPods", url: "/Logos-2.webp", website: "https://workpods.co.za" },
          { name: "Ferris Group", url: "/Logos-3.webp", website: "https://ferriscars.com" },
          { name: "WeFin Car Rentals", url: "/Logos-4.webp", website: "https://wefincarrentals.co.za" },
          { name: "Century 21 Wildlife Properties", url: "/Logos-5.webp", website: "https://www.century21wildlife.co.za" },
          { name: "With Crypto", url: "/Logos-6.webp", website: "https://withcrypto.com" },
          { name: "Supercar Rhino Run", url: "/Logos-7.webp", website: "https://rhinorun.co.za" },
          { name: "Piezo", url: "/Logos-8.webp", website: "https://www.piezo-sa.co.za" }
        ]
      }
    },
    {
      type: 'FinalCTA',
      id: 'nextsteps',
      data: {
        title: "Next Steps",
        thankYou: "Review and approve the proposal phases. We will begin by executing the foundational audit and visual guide to set the stage for VanillaHub's rapid growth.",
        buttonText: "Review and Proceed"
      }
    }
  ]
};
