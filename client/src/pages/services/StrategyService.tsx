import Layout from "@/components/Layout";
import ServiceDetails from "@/components/ServiceDetails";
import { BarChart3 } from "lucide-react";

const StrategyService = () => {
  return (
    <Layout>
      <ServiceDetails
        title="Business Strategy"
        description="We help startups and small businesses develop clear and effective business strategies to navigate challenges, seize opportunities, and achieve sustainable growth."
        icon={<BarChart3 className="text-white" />}
        bgColor="bg-amber-500"
        features={[
          {
            title: "Strategic Planning",
            description: "We facilitate comprehensive strategic planning sessions to define your business vision, mission, and long-term objectives."
          },
          {
            title: "Market Research & Analysis",
            description: "Our team conducts thorough market research to identify trends, opportunities, and competitive landscapes affecting your business."
          },
          {
            title: "Growth Strategy Development",
            description: "We create customized growth strategies to help you expand your customer base, enter new markets, or launch new products."
          },
          {
            title: "Business Model Innovation",
            description: "We help you reimagine and refine your business model to increase profitability and competitive advantage."
          },
          {
            title: "Performance Metrics & KPIs",
            description: "We establish key performance indicators and measurement systems to track progress toward strategic goals."
          },
          {
            title: "Advisory Services",
            description: "Ongoing strategic advice and guidance as your business evolves and faces new challenges and opportunities."
          }
        ]}
        process={[
          {
            step: 1,
            title: "Discovery & Assessment",
            description: "We conduct a comprehensive assessment of your current business situation, analyzing strengths, weaknesses, opportunities, and threats."
          },
          {
            step: 2,
            title: "Strategic Framework Development",
            description: "Based on our assessment, we create a strategic framework aligned with your vision and market realities."
          },
          {
            step: 3,
            title: "Detailed Strategy Formulation",
            description: "We develop detailed strategies for different aspects of your business, including market approach, operations, and growth initiatives."
          },
          {
            step: 4,
            title: "Implementation Planning",
            description: "We create actionable implementation plans with clear timelines, responsibilities, and resource requirements."
          },
          {
            step: 5,
            title: "Review & Refinement",
            description: "Regular review sessions to monitor progress, adjust strategies as needed, and ensure continued alignment with business goals."
          }
        ]}
        benefits={[
          "Clear direction and focus for your business",
          "Better resource allocation and prioritization",
          "Increased ability to adapt to market changes",
          "Improved decision-making at all levels",
          "Greater alignment among team members and stakeholders",
          "Identification of new growth opportunities",
          "Enhanced competitive positioning",
          "Sustainable business growth and profitability"
        ]}
        cta={{
          title: "Chart Your Path to Success",
          description: "Ready to take your business to the next level with a clear, effective strategy? Contact us today to schedule a strategic consultation and discover how we can help you achieve your business goals."
        }}
      />
    </Layout>
  );
};

export default StrategyService;