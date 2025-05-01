import ServiceDetails from "@/components/ServiceDetails";
import { Scale } from "lucide-react";

const LegalService = () => {
  return (
    <ServiceDetails
      title="Legal & Financial Services"
      description="We provide essential legal and financial support to startups and small businesses, helping them navigate regulatory requirements and make sound financial decisions."
      icon={<Scale className="text-white" />}
      bgColor="bg-emerald-500"
      features={[
        {
          title: "Business Formation & Registration",
          description: "We assist with choosing the right business structure, registration with government authorities, and obtaining necessary licenses."
        },
        {
          title: "Contract Drafting & Review",
          description: "Our experts create and review contracts to protect your interests and ensure legal compliance in all business relationships."
        },
        {
          title: "Financial Planning",
          description: "We develop comprehensive financial plans and strategies to help your business manage resources effectively and plan for growth."
        },
        {
          title: "Tax Planning & Compliance",
          description: "Our services ensure you're meeting all tax obligations while taking advantage of legitimate tax-saving opportunities."
        },
        {
          title: "Intellectual Property Protection",
          description: "We help secure trademarks, copyrights, and patents to protect your valuable business assets and innovations."
        },
        {
          title: "Regulatory Compliance",
          description: "We ensure your business operations meet all applicable laws and regulations, reducing legal risks."
        }
      ]}
      process={[
        {
          step: 1,
          title: "Initial Consultation",
          description: "We assess your current legal and financial status, identifying immediate needs and potential areas of concern."
        },
        {
          step: 2,
          title: "Strategy Development",
          description: "Based on your specific situation, we create a customized plan addressing your legal and financial requirements."
        },
        {
          step: 3,
          title: "Documentation & Implementation",
          description: "We prepare necessary legal documents and implement financial processes and systems as required."
        },
        {
          step: 4,
          title: "Monitoring & Compliance",
          description: "We continuously track regulatory changes and ensure your business remains compliant with evolving requirements."
        },
        {
          step: 5,
          title: "Ongoing Support & Advisory",
          description: "Our team provides regular consultations and updates to address new challenges and opportunities."
        }
      ]}
      benefits={[
        "Reduced legal and financial risks",
        "Compliance with all regulatory requirements",
        "Protection of intellectual property and business assets",
        "Solid legal foundation for business growth",
        "Optimized tax strategy saving money",
        "Clear financial visibility and planning",
        "Legal documentation that protects your interests",
        "Peace of mind knowing your business is legally sound"
      ]}
      cta={{
        title: "Secure Your Business Foundation",
        description: "Don't let legal and financial challenges hold your business back. Contact us today to schedule a consultation and discover how our services can help provide the solid foundation your business needs to thrive."
      }}
    />
  );
};

export default LegalService;