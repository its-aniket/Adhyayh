import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { INTERNSHIP_ROLES } from '@/lib/constants';
import { InternApplicationFormData } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Briefcase, MapPin, Monitor, Calendar, ChevronRight } from 'lucide-react';

// Form validation schema
const applicationFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  education: z.string().min(2, "Education level is required"),
  university: z.string().min(2, "University/College name is required"),
  role: z.string().min(2, "Please select a role"),
  experience: z.string().min(2, "Please describe your relevant experience"),
  resumeLink: z.string().url("Please enter a valid URL").optional(),
  portfolio: z.string().url("Please enter a valid URL").optional(),
  coverLetter: z.string().min(50, "Cover letter should be at least 50 characters"),
  heardFrom: z.string().optional(),
});

const Careers = () => {
  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const form = useForm<InternApplicationFormData>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      education: "",
      university: "",
      role: "",
      experience: "",
      resumeLink: "",
      portfolio: "",
      coverLetter: "",
      heardFrom: "",
    },
  });

  const applicationMutation = useMutation({
    mutationFn: async (data: InternApplicationFormData) => {
      const response = await fetch("/api/internships/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted",
        description: "Your application has been submitted successfully. We'll be in touch soon!",
      });
      form.reset();
      setShowForm(false);
      setSelectedRoleId(null);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: InternApplicationFormData) {
    applicationMutation.mutate(data);
  }

  const handleApplyClick = (roleId: string) => {
    setSelectedRoleId(roleId);
    setShowForm(true);
    
    const selectedRole = INTERNSHIP_ROLES.find(role => role.id === roleId);
    if (selectedRole) {
      form.setValue('role', selectedRole.title);
    }
    
    // Scroll to form
    setTimeout(() => {
      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <Layout>
      <div className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto mt-10 px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Join Our Team</h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl">
              We're looking for passionate interns to join our growing team. Explore opportunities
              to learn, grow, and make an impact while working with our experienced professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {INTERNSHIP_ROLES.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Badge className="bg-primary text-white">{role.department}</Badge>
                      <Badge className={`
                        ${role.type === 'Remote' ? 'bg-emerald-100 text-emerald-800' : 
                         role.type === 'Hybrid' ? 'bg-amber-100 text-amber-800' : 
                         'bg-blue-100 text-blue-800'}
                      `}>
                        {role.type}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                    <p className="text-neutral-600 mb-4">{role.description}</p>
                    
                    <div className="flex items-center text-neutral-500 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{role.location}</span>
                    </div>
                    
                    <div className="mt-6">
                      <Button 
                        onClick={() => handleApplyClick(role.id)} 
                        className="w-full"
                      >
                        Apply Now <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {showForm && selectedRoleId && (
            <motion.div
              id="application-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-16 bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Apply for {INTERNSHIP_ROLES.find(role => role.id === selectedRoleId)?.title}</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Role Details</h3>
                {selectedRoleId && (
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Responsibilities:</h4>
                    <ul className="list-disc pl-5 mb-4 space-y-1">
                      {INTERNSHIP_ROLES.find(role => role.id === selectedRoleId)?.responsibilities.map((item, i) => (
                        <li key={i} className="text-neutral-600">{item}</li>
                      ))}
                    </ul>
                    
                    <h4 className="font-semibold mb-3">Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {INTERNSHIP_ROLES.find(role => role.id === selectedRoleId)?.requirements.map((item, i) => (
                        <li key={i} className="text-neutral-600">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john.doe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 98765 43210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="education"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Highest Education *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your education" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="High School">High School</SelectItem>
                              <SelectItem value="Bachelor's">Bachelor's Degree</SelectItem>
                              <SelectItem value="Master's">Master's Degree</SelectItem>
                              <SelectItem value="PhD">PhD</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="university"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>University/College *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your university or college name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="resumeLink"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Resume Link (Google Drive, Dropbox, etc.)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://drive.google.com/file/resume" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="portfolio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Portfolio/GitHub Link</FormLabel>
                          <FormControl>
                            <Input placeholder="https://github.com/username" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Relevant Experience *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your relevant experience, projects, or coursework" 
                            className="min-h-[100px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="coverLetter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cover Letter *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us why you're interested in this position and why you'd be a good fit" 
                            className="min-h-[150px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="heardFrom"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How did you hear about us?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                            <SelectItem value="Job Portal">Job Portal</SelectItem>
                            <SelectItem value="University/College">University/College</SelectItem>
                            <SelectItem value="Friend/Referral">Friend/Referral</SelectItem>
                            <SelectItem value="Social Media">Social Media</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex gap-4">
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto"
                      disabled={applicationMutation.isPending}
                    >
                      {applicationMutation.isPending ? "Submitting..." : "Submit Application"}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full md:w-auto"
                      onClick={() => {
                        setShowForm(false);
                        form.reset();
                      }}
                      disabled={applicationMutation.isPending}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Careers;