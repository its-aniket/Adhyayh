import { useState, useEffect } from "react";
import { Heart, Share2, BookOpen, Calendar, User, ArrowLeft, Eye } from "lucide-react";
import { useParams } from "wouter";
import { blogPosts } from "@/lib/constants";
import Layout from "@/components/Layout";
import ReactMarkdown from 'react-markdown';
// Mock data for demonstration


export default function Blog() {
    const {slug}= useParams();
    const [blogs, setBlog] = useState(blogPosts.find((b) => b.slug === slug));
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(blogs?.likes);
    const [views,setViews]= useState(blogs?.views)
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blogs?.title,
          text: 'Check out this amazing article!',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
      alert('Link copied to clipboard!');
    }
  };

  return (
    <Layout>

    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div 
          className="h-full bg-black transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
          />
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <button className="group flex items-center gap-3 text-gray-600 hover:text-black transition-all duration-300 hover:gap-4">
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1 group-hover:scale-110" />
            <span className="font-medium">Back to Blog</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-5xl mx-auto px-6 pt-16 pb-12">
          {/* Category Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              {blogs?.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-10">
            {blogs?.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-8 text-gray-600 mb-12">
           
            <div className="flex items-center gap-3 hover:text-black transition-colors duration-300 group">
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>{blogs?.date}</span>
            </div>
            <div className="flex items-center gap-3 hover:text-black transition-colors duration-300 group">
              <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>{blogs?.readTime}</span>
            </div>
            <div className="flex items-center gap-3 hover:text-black transition-colors duration-300 group">
              <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>{blogs?.views} views</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
            <img 
              src={blogs?.image} 
              alt={blogs?.title} 
              className="w-full h-[400px] md:h-[600px] object-cover transition-all duration-700 group-hover:scale-105"
              />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute inset-0 ring-1 ring-black/10 rounded-3xl" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-4 gap-16">
          {/* Article Content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg prose-gray max-w-none">
              {blogs?.blog.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="text-gray-700 leading-relaxed mb-8 text-lg"
                >
                  <ReactMarkdown>{paragraph}</ReactMarkdown>
                </p>
              ))}
            </article>

            {/* Tags */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-black mb-6">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {blogs?.tags.map((tag, index) => (
                  <span 
                  key={index}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-700 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg"
                    >
                    #{tag.replace(' ', '')}
                  </span>
                ))}
              </div>
            </div>

            {/* Engagement Section */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button 
                    onClick={handleLike}
                    className={`group flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                        isLiked 
                        ? 'bg-black text-white shadow-lg hover:shadow-xl' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-900 hover:text-white hover:shadow-lg'
                    }`}
                    >
                    <Heart className={`w-6 h-6 transition-all duration-300 group-hover:scale-110 ${isLiked ? 'fill-current animate-pulse' : 'group-hover:fill-current'}`} />
                    <span className="font-semibold text-lg">{likes}</span>
                  </button>
                </div>

                <button 
                  onClick={handleShare}
                  className="group flex items-center gap-3 px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <Share2 className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="font-semibold">Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              {/* Table of Contents */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-gray-300">
                <h3 className="font-bold text-black mb-6 text-lg">In This Article</h3>
                <ul className="space-y-4 text-sm">
                  {[
                    "Digital Transformation Trends",
                    "Technology Integration", 
                    "Human Element in Innovation",
                    "Future Outlook"
                  ].map((item, index) => (
                      <li key={index}>
                      <a 
                        href="#" 
                        className="group flex items-center text-gray-600 hover:text-black transition-all duration-300 hover:translate-x-2"
                      >
                        <div className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-black transition-colors duration-300"></div>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Topics */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-gray-300">
                <h3 className="font-bold text-black mb-6 text-lg">Related Topics</h3>
                <div className="space-y-4">
                  {["AI & Machine Learning", "Digital Strategy", "Business Innovation"].map((topic, index) => (
                      <div 
                      key={index} 
                      className="group p-4 bg-gray-50 rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-md"
                    >
                      <span className="text-sm font-semibold">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reading Progress */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <h3 className="font-bold text-black mb-4 text-lg">Reading Progress</h3>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-black h-2 rounded-full transition-all duration-300"
                      style={{ width: `${scrollProgress}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600">{Math.round(scrollProgress)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            
        @keyframes pulse {
            0%, 100% {
                opacity: 1;
          }
          50% {
            opacity: .5;
            }
            }
            `}</style>
    </div>
            </Layout>
  );
}