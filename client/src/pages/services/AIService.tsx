import Layout from "@/components/Layout";
import ServiceDetails from "@/components/ServiceDetails";
import { Brain } from "lucide-react";

const AIService = () => {
  return (
    <Layout>
      <ServiceDetails
        title="AI Automation"
        description="We leverage artificial intelligence and automation technologies to streamline your business processes, increase efficiency, and drive innovation in your operations."
        icon={<Brain className="text-white" />}
        bgColor="bg-purple-500"
        features={[
          {
            title: "Process Automation",
            description: "We identify and automate repetitive tasks and workflows to save time, reduce errors, and free up your team for more valuable work."
          },
          {
            title: "AI-Powered Analytics",
            description: "Our solutions provide deeper insights into your data, identifying patterns and opportunities that human analysis might miss."
          },
          {
            title: "Chatbots & Virtual Assistants",
            description: "We develop intelligent conversational interfaces to enhance customer service and internal support functions."
          },
          {
            title: "Custom AI Solutions",
            description: "We build tailored AI applications to address specific business challenges and opportunities unique to your organization."
          },
          {
            title: "Integration Services",
            description: "We ensure your AI tools work seamlessly with your existing systems and applications for maximum efficiency."
          },
          {
            title: "AI Strategy Consulting",
            description: "Our experts help you develop a roadmap for implementing AI and automation in ways that deliver the most value."
          }
        ]}
        process={[
          {
            step: 1,
            title: "Business Process Analysis",
            description: "We thoroughly analyze your current operations to identify opportunities for automation and AI enhancement."
          },
          {
            step: 2,
            title: "Solution Design",
            description: "Our team designs AI and automation solutions specifically tailored to your business needs and objectives."
          },
          {
            step: 3,
            title: "Development & Integration",
            description: "We build and integrate the AI solutions into your existing systems, ensuring seamless operation."
          },
          {
            step: 4,
            title: "Testing & Optimization",
            description: "We rigorously test the solutions and fine-tune them to achieve optimal performance and results."
          },
          {
            step: 5,
            title: "Deployment & Training",
            description: "After successful testing, we deploy the solutions and provide training to ensure your team can effectively use and manage them."
          }
        ]}
        benefits={[
          "Significantly reduced operational costs",
          "Increased productivity and efficiency",
          "Enhanced decision-making with data-driven insights",
          "Improved customer service and satisfaction",
          "Reduced human error in processes",
          "Faster processing times for routine tasks",
          "Scalable solutions that grow with your business",
          "Competitive advantage through technological innovation"
        ]}
        cta={{
          title: "Transform Your Business with AI",
          description: "Ready to leverage the power of artificial intelligence in your business? Contact us today to discuss how our AI automation solutions can help you increase efficiency, reduce costs, and drive innovation."
        }}
      />
    </Layout>
  );
};

export default AIService;