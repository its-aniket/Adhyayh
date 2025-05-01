import Layout from "@/components/Layout";
import ServiceDetails from "@/components/ServiceDetails";
import { TrendingUp } from "lucide-react";

const MarketingService = () => {
  return (
    <Layout>
      <ServiceDetails
        title="Marketing & Branding"
        description="We help startups and small businesses establish a strong brand identity and implement effective marketing strategies to reach their target audience and drive growth."
        icon={<TrendingUp className="text-white" />}
        bgColor="bg-rose-500"
        features={[
          {
            title: "Brand Strategy Development",
            description: "We create comprehensive brand strategies that define your positioning, messaging, and visual identity to establish a strong market presence."
          },
          {
            title: "Digital Marketing Campaigns",
            description: "From social media marketing to email campaigns, we design and execute digital marketing initiatives to reach your audience where they are."
          },
          {
            title: "Content Creation & Strategy",
            description: "We develop engaging content strategies and create high-quality content that resonates with your target audience and drives engagement."
          },
          {
            title: "Social Media Management",
            description: "Our experts handle your social media presence, creating consistent posting schedules and engaging with your community."
          },
          {
            title: "SEO Optimization",
            description: "We improve your online visibility through strategic SEO practices, helping your business rank higher in search results."
          },
          {
            title: "Analytics & Reporting",
            description: "Get detailed insights into your marketing performance with our comprehensive analytics and reporting services."
          }
        ]}
        process={[
          {
            step: 1,
            title: "Discovery & Research",
            description: "We begin by understanding your business, target audience, competitors, and market landscape to identify opportunities."
          },
          {
            step: 2,
            title: "Strategy Development",
            description: "Based on our research, we create a customized marketing and branding strategy aligned with your business goals."
          },
          {
            step: 3,
            title: "Implementation",
            description: "Our team executes the strategies, developing branded assets, content, and marketing campaigns."
          },
          {
            step: 4,
            title: "Monitoring & Optimization",
            description: "We continuously track the performance of marketing efforts and make data-driven optimizations."
          },
          {
            step: 5,
            title: "Reporting & Growth Planning",
            description: "We provide regular reports on results and collaborate on strategies for continued growth."
          }
        ]}
        benefits={[
          "Increased brand awareness and recognition",
          "Higher customer engagement and loyalty",
          "Improved conversion rates and lead generation",
          "Better return on marketing investment",
          "Consistent brand messaging across all channels",
          "Data-driven marketing decisions",
          "Competitive advantage in your market",
          "Scalable marketing strategies that grow with your business"
        ]}
        cta={{
          title: "Ready to Transform Your Brand?",
          description: "Let's work together to create impactful marketing strategies that will help your business stand out and grow. Schedule a free consultation to discuss how we can help you achieve your marketing goals."
        }}
      />
    </Layout>
  );
};

export default MarketingService;