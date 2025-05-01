import ServiceDetails from "@/components/ServiceDetails";
import { Code } from "lucide-react";

const WebsiteService = () => {
  return (
    <ServiceDetails
      title="Website Development"
      description="We design and develop modern, responsive websites that not only look great but also drive results for your business, focusing on user experience and performance."
      icon={<Code className="text-white" />}
      bgColor="bg-blue-500"
      features={[
        {
          title: "Custom Website Design",
          description: "We create unique website designs tailored to your brand identity and business goals, ensuring a memorable online presence."
        },
        {
          title: "Responsive Development",
          description: "Our websites work flawlessly across all devices, providing an optimal user experience on desktops, tablets, and mobile phones."
        },
        {
          title: "E-commerce Solutions",
          description: "We build powerful online stores with secure payment gateways, inventory management, and seamless checkout processes."
        },
        {
          title: "CMS Implementation",
          description: "Easy-to-use content management systems that allow you to update your website without technical knowledge."
        },
        {
          title: "Performance Optimization",
          description: "We ensure your website loads quickly and runs smoothly, improving user experience and search engine rankings."
        },
        {
          title: "Maintenance & Support",
          description: "Ongoing technical support, security updates, and website maintenance to keep your site running optimally."
        }
      ]}
      process={[
        {
          step: 1,
          title: "Requirements Analysis",
          description: "We gather detailed requirements, understanding your business goals, target audience, and functionality needs."
        },
        {
          step: 2,
          title: "Design & Prototyping",
          description: "Our designers create wireframes and design mockups for your approval, ensuring the visual direction aligns with your brand."
        },
        {
          step: 3,
          title: "Development",
          description: "Our developers build your website using modern technologies and best practices, focusing on performance and scalability."
        },
        {
          step: 4,
          title: "Testing & Quality Assurance",
          description: "We rigorously test your website across devices and browsers to ensure optimal performance and user experience."
        },
        {
          step: 5,
          title: "Launch & Training",
          description: "After final approval, we launch your website and provide training on how to manage and update content."
        }
      ]}
      benefits={[
        "Professional online presence that builds trust",
        "Improved user experience leading to higher conversion rates",
        "Mobile-optimized design reaching customers on all devices",
        "SEO-friendly structure improving search visibility",
        "Faster loading times increasing user engagement",
        "Scalable architecture that grows with your business",
        "Secure website protecting your data and customers",
        "Easy content management saving time and resources"
      ]}
      cta={{
        title: "Let's Build Your Digital Presence",
        description: "Whether you need a new website or want to redesign your existing one, we're here to help. Contact us today to discuss your project and see how we can create a website that drives results for your business."
      }}
    />
  );
};

export default WebsiteService;