import ServiceDetails from "@/components/ServiceDetails";
import { GraduationCap } from "lucide-react";

const TrainingService = () => {
  return (
    <ServiceDetails
      title="Corporate Training"
      description="We provide specialized training programs to help startups and small businesses develop their team's skills, knowledge, and capabilities for improved performance and growth."
      icon={<GraduationCap className="text-white" />}
      bgColor="bg-indigo-500"
      features={[
        {
          title: "Leadership Development",
          description: "We offer programs to enhance leadership skills at all levels, from first-time managers to executive leadership."
        },
        {
          title: "Sales & Marketing Training",
          description: "Our specialized training helps your team master modern sales techniques and marketing strategies to drive revenue growth."
        },
        {
          title: "Technical Skills Development",
          description: "We provide training in specific technical areas relevant to your industry and business needs."
        },
        {
          title: "Team Building Workshops",
          description: "Our interactive workshops strengthen team dynamics, collaboration, and communication for greater productivity."
        },
        {
          title: "Customer Service Excellence",
          description: "We train your team to deliver exceptional customer experiences that build loyalty and drive repeat business."
        },
        {
          title: "Customized Learning Programs",
          description: "We develop tailored training programs designed specifically for your organization's unique challenges and goals."
        }
      ]}
      process={[
        {
          step: 1,
          title: "Training Needs Assessment",
          description: "We assess your team's current skills and knowledge to identify specific training needs and priorities."
        },
        {
          step: 2,
          title: "Program Design",
          description: "Based on the assessment, we design customized training programs with clear learning objectives and outcomes."
        },
        {
          step: 3,
          title: "Content Development",
          description: "Our experts develop engaging, practical training content using a variety of methods and media for effective learning."
        },
        {
          step: 4,
          title: "Training Delivery",
          description: "We deliver training through the most appropriate channels, whether in-person workshops, virtual sessions, or self-paced learning."
        },
        {
          step: 5,
          title: "Evaluation & Follow-up",
          description: "After training, we assess effectiveness, gather feedback, and provide follow-up support to ensure knowledge application."
        }
      ]}
      benefits={[
        "Improved employee performance and productivity",
        "Enhanced leadership capabilities across the organization",
        "Increased employee engagement and retention",
        "Better adaptation to change and innovation",
        "Stronger team collaboration and communication",
        "Reduced skill gaps in critical areas",
        "Consistent customer service quality",
        "Competitive advantage through workforce excellence"
      ]}
      cta={{
        title: "Invest in Your Team's Success",
        description: "Ready to empower your team with the skills they need to excel? Contact us today to discuss your training needs and discover how our customized programs can help your team and business thrive."
      }}
    />
  );
};

export default TrainingService;