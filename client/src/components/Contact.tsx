import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Mail, Phone, Send, Loader2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";
import { SERVICES_OPTIONS, SOCIAL_LINKS } from "@/lib/constants";

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  service: z.string({ required_error: "Please select a service" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { ref: infoRef, inView: infoInView } = useAnimateOnScroll();
  const { ref: formRef, inView: formInView } = useAnimateOnScroll();
  const { toast } = useToast();

  // Define form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  // Submit form handler
  const mutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      const result = await response.json();
      return result;
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Something went wrong!",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: ContactFormValues) {
    mutation.mutate(data);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            ref={infoRef}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.span 
              className="bg-secondary text-white bg-opacity-10 text-secondary px-4 py-2 rounded-full text-sm font-medium inline-block"
              variants={itemVariants}
            >
              Get in Touch
            </motion.span>
            <motion.h2 
              className="font-poppins font-bold text-3xl md:text-4xl mt-6 text-neutral-900"
              variants={itemVariants}
            >
              Ready to Grow Your Business?
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-600 mt-6 mb-8"
              variants={itemVariants}
            >
              Fill out the form, and our team will get back to you within 24 hours to discuss how we can help your business grow.
            </motion.p>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div 
                className="flex items-start"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                  <MapPin className="text-primary h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-neutral-900">Our Location</h4>
                  <p className="text-neutral-600">Pune, Maharashtra, India</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                  <Mail className="text-primary h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-neutral-900">Email Us</h4>
                  <p className="text-neutral-600">hello@adhyayh.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={itemVariants}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                  <Phone className="text-primary h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-neutral-900">Call Us</h4>
                  <p className="text-neutral-600">+91 98765 43210</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-10"
              variants={itemVariants}
            >
              <h4 className="text-lg font-semibold text-neutral-900 mb-4">Connect With Us</h4>
              <div className="grid grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-neutral-50 hover:bg-primary hover:text-white text-neutral-700 rounded-lg flex items-center p-3 transition-all border border-neutral-200 hover:border-primary"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="mr-2">{social.icon}</span>
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-neutral-50 p-8 rounded-xl shadow-sm border border-neutral-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-700">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Rushi" 
                            className="w-full px-4 py-3 h-auto border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-neutral-700">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Gulum" 
                            className="w-full px-4 py-3 h-auto border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-sm font-medium text-neutral-700">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Rushi@example.com" 
                          className="w-full px-4 py-3 h-auto border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-sm font-medium text-neutral-700">Company Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Adhyayh" 
                          className="w-full px-4 py-3 h-auto border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-sm font-medium text-neutral-700">Service Interested In</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full px-4 py-3 h-auto border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {SERVICES_OPTIONS.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-sm font-medium text-neutral-700">Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project and requirements..." 
                          className="w-full px-4 py-3 min-h-[120px] border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 h-auto rounded-lg transition-colors duration-300"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
