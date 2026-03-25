// Generalized data architecture 
// Easily swap out the whole 'sections' array for any new client layout

import brandLaunchImg from '../assets/pexels-photo-1450360.jpeg';

export const proposalData = {
  client: {
    "name": "VanillaHub",
    "logoText": "VH",
    "logoUrl": "/Vanilla hub logo.png"
  },
  agency: {
    "name": "Big On Digital",
    "contactEmail": "hello@bigondigital.com"
  },
  hero: {
    "badge": "VanillaHub AI CRM",
    "title": "Accelerating Success with Intelligent AI Systems.",
    "subtitle": "The all-in-one AI CRM platform designed to transform your customer relationships and accelerate business growth with data-driven precision.",
    "heroImageUrl": "/ai-robot-hero.png"
  },
  sections: [
    {
      type: 'ExecutiveSummary',
      id: 'intro',
      data: {
        title: "Introduction",
        content: "VanillaHub is a next-generation cloud payroll and HR solution designed to simplify complex South African tax and labour laws. \n\nBy automating the 'boring stuff'—from SARS compliance (BCEA, COIDA, UIF) to smart HR tracking—we empower businesses to focus on what truly matters: growth and people.\n\nThe objective of this proposal is to scale the VanillaHub brand, optimize the marketing infrastructure for the Free Pay Wizard and Salary Planner, and build a robust community of 'Vanilla Ambassadors'.",
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
        imageUrl: "/Visual Guide.png"
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
        imageUrl: "/Brand Archetype Wheel.png",
        price: "R 7,500",
        quoteLabel: "Brand Visual Guide"
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
        imageUrl: "/Competitor Image.png",
        price: "R 5,000",
        quoteLabel: "Competitor Analysis"
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
        imageUrl: "/Vanilla hub Enhanced.png",
        price: "R 4,500",
        quoteLabel: "Website Enhancement Audit"
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
        imageUrl: "/vanilla-robot.png",
        price: "R 8,500",
        quoteLabel: "SEO Foundations Set-up"
      }
    },
    {
      type: 'FeatureSection',
      id: 'website-tracking-audit',
      data: {
        eyebrow: "5. Website Tracking",
        title: "Data-Driven Insights",
        description: "We implement tracking systems that provide full visibility into website performance, including user behaviour, enquiries, and conversion activity. Due to platform constraints, this will include linking the Knack website with a WordPress environment or compatible tracking framework to ensure accurate data collection. The result is clear, actionable insights that support smarter marketing decisions and measurable growth.",
        imagePosition: "right",
        imageUrl: "/tech-nodes.png",
        price: "R 3,500",
        quoteLabel: "Website Tracking Audit"
      }
    },
    {
      type: 'FeatureSection',
      id: 'video-creation',
      data: {
        eyebrow: "6. Video Creation",
        title: "Corporate Introduction & Explainers",
        description: "We develop professional video content that communicates Vanilla Hub’s offering in a clear and engaging way. By simplifying complex solutions into compelling visual narratives, video builds trust, improves understanding, and increases conversion potential. This positions Vanilla Hub as both innovative and approachable, while strengthening credibility with prospective clients.",
        imagePosition: "left",
        imageUrl: "/vanilla-robot.png",
        price: "R 12,500",
        quoteLabel: "Video Content Creation"
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
        imageUrl: "/tech-nodes.png",
        bgColor: "secondary"
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
        imageUrl: "/vanilla-robot.png",
        price: "R 2,500",
        quoteLabel: "SEO Listings & Citations"
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
        imageUrl: "/tech-nodes.png",
        price: "R 1,500",
        quoteLabel: "Map Listings (Google/Bing)"
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
        imageUrl: "/vanilla-robot.png",
        price: "R 2,500",
        quoteLabel: "Social Profile Setup"
      }
    },
    {
      type: 'FeatureSection',
      id: 'social-media-management',
      data: {
        eyebrow: "10. Social Media",
        title: "Content & Community",
        description: "We implement a structured social media strategy that builds awareness, educates your audience, and reinforces your expertise. Through consistent content and management, Vanilla Hub becomes more visible and relevant, helping nurture relationships with potential clients and supporting long-term brand growth.",
        imagePosition: "right",
        imageUrl: "/tech-nodes.png",
        price: "R 6,500 /mo",
        quoteLabel: "Social Media Management"
      }
    },
    {
      type: 'FeatureSection',
      id: 'phase3-header',
      data: {
        eyebrow: "Phase 3",
        title: "Launch & Growth",
        description: "Aggressive lead generation and audience expansion via paid media channels and high-conversion landing pages.",
        imagePosition: "left",
        imageUrl: "/vanilla-robot.png"
      }
    },
    {
      type: 'FeatureSection',
      id: 'google-ads',
      data: {
        eyebrow: "11. Google Ads",
        title: "High-Intent Traffic",
        description: "We position Vanilla Hub in front of high-intent users actively searching for payroll, HR, and financial solutions. This drives qualified traffic to your platform, generating leads from businesses already looking for services like yours, and accelerating your path to client acquisition.",
        imagePosition: "right",
        imageUrl: "/tech-nodes.png",
        price: "R 4,500 /mo",
        quoteLabel: "Google Ads Management"
      }
    },
    {
      type: 'FeatureSection',
      id: 'linkedin-ads',
      data: {
        eyebrow: "12. LinkedIn Ads",
        title: "B2B Precision",
        description: "We target decision-makers such as business owners, accountants, and HR professionals through LinkedIn. This allows Vanilla Hub to engage directly with a professional audience, building credibility and generating high-quality leads within your ideal market segment.",
        imagePosition: "left",
        imageUrl: "/vanilla-robot.png",
        price: "R 4,500 /mo",
        quoteLabel: "LinkedIn Ads Management"
      }
    },
    {
      type: 'FeatureSection',
      id: 'meta-ads',
      data: {
        eyebrow: "13. Meta Ads",
        title: "Broad Awareness",
        description: "We create targeted campaigns that introduce Vanilla Hub to a broader audience, building awareness and generating interest. This supports long-term growth by expanding your reach and ensuring your brand remains visible to potential clients earlier in their decision-making journey.",
        imagePosition: "right",
        imageUrl: "/tech-nodes.png",
        price: "R 4,500 /mo",
        quoteLabel: "Meta Ads Management"
      }
    },
    {
      type: 'FeatureSection',
      id: 'social-landing-page',
      data: {
        eyebrow: "14. Social Mobile Landing Page",
        title: "Frictionless Conversion",
        description: "We design a focused landing page tailored to campaign traffic, ensuring users are guided towards a clear and simple action. This improves conversion rates by removing friction and aligning messaging directly with your advertising and social campaigns.",
        imagePosition: "left",
        imageUrl: "/vanilla-robot.png",
        price: "R 6,500",
        quoteLabel: "Conversion Landing Page"
      }
    },
    {
      type: 'FeatureSection',
      id: 'phase4-header',
      data: {
        eyebrow: "Phase 4",
        title: "Customer Journeys",
        description: "Building long-term value through automated lead nurturing, efficient communication, and thought leadership content.",
        imagePosition: "right",
        imageUrl: "/tech-nodes.png",
        bgColor: "secondary"
      }
    },
    {
      type: 'FeatureSection',
      id: 'mailer-funnel',
      data: {
        eyebrow: "15. Mailer Funnel Strategies",
        title: "Automated Nurturing",
        description: "We develop structured email journeys that guide prospects from initial interest through to conversion. By nurturing leads with relevant information and insights, Vanilla Hub builds stronger relationships, increases conversion rates, and maximises the value of each lead generated.",
        imagePosition: "left",
        imageUrl: "/vanilla-robot.png",
        price: "R 5,500 /mo",
        quoteLabel: "Mailer Funnels & Nurture"
      }
    },
    {
      type: 'FeatureSection',
      id: 'whatsapp-automation',
      data: {
        eyebrow: "16. WhatsApp Automation",
        title: "Instant Connection",
        description: "We implement automated WhatsApp communication to provide immediate responses and streamline client interaction. This enhances user experience, improves response times, and ensures potential clients can engage with Vanilla Hub quickly and efficiently.",
        imagePosition: "right",
        imageUrl: "/tech-nodes.png",
        price: "R 3,500 /mo",
        quoteLabel: "WhatsApp Business Automations"
      }
    },
    {
      type: 'FeatureSection',
      id: 'seo-blog-strategy',
      data: {
        eyebrow: "17. SEO & Thought Leadership Blog Strategy",
        title: "Authoritative Content",
        description: "We build a content strategy that positions Vanilla Hub as a trusted authority in payroll, HR, and financial solutions. By addressing real business challenges through insightful content, you attract organic traffic, build credibility, and create a long-term growth engine for the business.",
        imagePosition: "left",
        imageUrl: "/vanilla-robot.png",
        price: "R 4,500 /mo",
        quoteLabel: "SEO & Blog Strategy"
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
          "Additional Social Platforms: Expanding to X and TikTok where relevant for broader reach."
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
          { name: "Digital Specialist", role: "Growth & Strategy", image: "/staff1.png" },
          { name: "Creative Director", role: "Design & UX", image: "/staff2.png" },
          { name: "Technical Lead", role: "Development & AI", image: "/staff3.png" }
        ]
      }
    },
    {
      type: 'ClientLogos',
      id: 'clients',
      data: {
        title: "Trusted By Industry Leaders",
        logos: [
          { name: "Client Partner 1", url: "https://via.placeholder.com/200x80?text=Client+Logo", website: "https://example.com" },
          { name: "Client Partner 2", url: "https://via.placeholder.com/200x80?text=Client+Logo", website: "https://example.com" },
          { name: "Client Partner 3", url: "https://via.placeholder.com/200x80?text=Client+Logo", website: "https://example.com" },
          { name: "Client Partner 4", url: "https://via.placeholder.com/200x80?text=Client+Logo", website: "https://example.com" },
          { name: "Client Partner 5", url: "https://via.placeholder.com/200x80?text=Client+Logo", website: "https://example.com" },
          { name: "Client Partner 6", url: "https://via.placeholder.com/200x80?text=Client+Logo", website: "https://example.com" },
          { name: "Client Partner 7", url: "https://via.placeholder.com/200x80?text=Client+Logo", website: "https://example.com" },
          { name: "Client Partner 8", url: "https://via.placeholder.com/200x80?text=Client+Logo", website: "https://example.com" }
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
