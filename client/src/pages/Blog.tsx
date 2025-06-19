import { useState, useEffect, useCallback, useMemo } from "react";
import { Heart, Share2, BookOpen, Calendar, User, ArrowLeft, Eye, ZoomIn, Clock, Tag, ExternalLink, Copy, Check } from "lucide-react";
import { useParams } from "wouter";
import { blogPosts } from "@/lib/constants";
import Layout from "@/components/Layout";
import ReactMarkdown from 'react-markdown';
import { Button } from "@/components/ui/button";

// Enhanced TypeScript interfaces
interface BlogImage {
  src: string;
  alt: string;
  caption?: string;
  position: number; // Position in the content (paragraph index)
  size?: 'small' | 'medium' | 'large' | 'full';
  alignment?: 'left' | 'center' | 'right';
}

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  likes: number;
  excerpt: string;
  blog: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  views: number;
  image: string;
  trending: boolean;
  gradient: string;
  tags: string[];
  images?: BlogImage[];
}

// Mock function to update blog data - replace with your actual API call
const updateBlogData = async (slug: string, updates: Partial<Pick<BlogPost, 'views' | 'likes'>>): Promise<void> => {
  const blogIndex = blogPosts.findIndex(blog => blog.slug === slug);
  if (blogIndex !== -1) {
    Object.assign(blogPosts[blogIndex], updates);
    console.log(`Updated blog ${slug}:`, updates);
  }
};

// Get related posts (exclude current post)
const getRelatedPosts = (currentBlog: BlogPost, allPosts: BlogPost[]) => {
  return allPosts
    .filter(post => post.id !== currentBlog.id && post.category === currentBlog.category)
    .slice(0, 3);
};

export default function EnhancedBlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPost | undefined>(
    blogPosts.find((b) => b.slug === slug)
  );
  const [relatedPosts] = useState(() => 
    blog ? getRelatedPosts(blog, blogPosts) : []
  );
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(blog?.likes || 0);
  const [views, setViews] = useState(blog?.views || 0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [readingTime, setReadingTime] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [shareStatus, setShareStatus] = useState('');
  const [activeSection, setActiveSection] = useState('');
  const [hasViewedBlog, setHasViewedBlog] = useState(false);

  // Calculate reading time based on content
  const estimatedReadingTime = useMemo(() => {
    if (!blog) return 0;
    const wordsPerMinute = 200;
    const wordCount = blog.blog.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  }, [blog?.blog]);

  // Update view count when component mounts
  useEffect(() => {
    if (blog && !hasViewedBlog) {
      const newViews = views + 1;
      blog.views = blog.views+1;
      setHasViewedBlog(true);
      
      // Update the blog data
      updateBlogData(blog.slug, { views: newViews });
      setBlog(prev => prev ? { ...prev, views: newViews } : prev);
    }
  }, [blog, hasViewedBlog, views]);

  // Track reading progress and active sections
  useEffect(() => {
    const startTime = Date.now();
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollTop / docHeight) * 100, 100);
      setScrollProgress(progress);
      
      // Calculate reading time
      const timeSpent = (Date.now() - startTime) / 1000 / 60; // in minutes
      setReadingTime(timeSpent);

      // Find active section
      const headings = document.querySelectorAll('h2, h3');
      let currentSection = '';
      
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 0) {
          currentSection = heading.textContent || '';
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced like handler with animation
  const handleLike = useCallback(async () => {
  if (!blog) return;

  const newIsLiked = !isLiked;
  const newLikes = newIsLiked ? likes + 1 : likes - 1;

  setIsLiked(newIsLiked);
  setLikes(newLikes);

  await updateBlogData(blog.slug, { likes: newLikes });
  setBlog(prev => prev ? { ...prev, likes: newLikes } : prev);

  if (newIsLiked) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = '50%';
    heart.style.top = '50%';
    heart.style.fontSize = '2rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.animation = 'heartFloat 2s ease-out forwards';

    document.body.appendChild(heart);
    setTimeout(() => document.body.removeChild(heart), 2000);
  }
}, [blog, isLiked, likes]);

  // Enhanced share handler
   const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog?.title,
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
  const handleShare = async (platform = 'native') => {
    if (!blog) return;
    
    const shareData = {
      title: blog.title,
      text: blog.excerpt,
      url: window.location.href,
    };

    try {
      if (platform === 'native' && navigator.share) {
        await navigator.share(shareData);
        setShareStatus('Shared successfully!');
      } else if (platform === 'copy') {
        await navigator.clipboard.writeText(window.location.href);
        setShareStatus('Link copied!');
      } else {
        // Handle specific platform sharing
        const urls = {
          twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.title)}&url=${encodeURIComponent(shareData.url)}`,
          linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`,
          facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`
        };
        
        if (urls[platform]) {
          window.open(urls[platform], '_blank', 'width=600,height=400');
          setShareStatus('Opening share dialog...');
        }
      }
      
      setTimeout(() => setShareStatus(''), 3000);
    } catch (err) {
      console.error('Error sharing:', err);
      setShareStatus('Share failed');
      setTimeout(() => setShareStatus(''), 3000);
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // In a real app, this would save to user's bookmarks
  };

  // Enhanced content rendering with better typography
  const renderContent = () => {
    if (!blog) return null;
    
    const sections = blog.blog.split('\n\n');
    
    return sections.map((section, index) => {
      if (section.startsWith('## ')) {
        return (
          <h2 key={index} className="text-3xl font-bold text-gray-900 mt-12 mb-6 leading-tight">
            {section.replace('## ', '')}
          </h2>
        );
      }
      
      return (
        <div key={index} className="mb-8">
          <div className="prose prose-lg prose-gray max-w-none">
            <ReactMarkdown>
              {section}
            </ReactMarkdown>
          </div>
          {blog.images?.find(img => img.position === index) && renderImageAtPosition(index)}
        </div>
      );
    });
  };

  const renderImageAtPosition = (position) => {
    const image = blog?.images?.find(img => img.position === position);
    if (!image) return null;

    const sizeClasses = {
      small: 'max-w-md',
      medium: 'max-w-2xl',
      large: 'max-w-4xl',
      full: 'max-w-full'
    };

    const alignmentClasses = {
      left: 'mr-auto',
      right: 'ml-auto',
      center: 'mx-auto'
    };

    return (
      <figure className={`my-12 ${sizeClasses[image.size || 'medium']} ${alignmentClasses[image.alignment || 'center']}`}>
        <div className="relative group cursor-pointer">
          <img 
            src={image.src} 
            alt={image.alt}
            className="w-full rounded-2xl shadow-lg object-cover transition-all duration-500 hover:shadow-2xl"
            onClick={() => setSelectedImage(image.src)}
          />
          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100">
            <ZoomIn className="w-10 h-10 text-white drop-shadow-lg" />
          </div>
        </div>
        {image.caption && (
          <figcaption className="text-sm text-gray-600 text-center mt-4 italic">
            {image.caption}
          </figcaption>
        )}
      </figure>
    );
  };

  if (!blog) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog post not found</h1>
            <Button onClick={() => window.history.back()}>Go Back</Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-28 min-h-screen bg-gray-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          
          <div className="flex items-center gap-4">
            <button
              onClick={handleBookmark}
              className={`p-2 rounded-full transition-all duration-300 ${
                isBookmarked 
                  ? 'bg-yellow-100 text-yellow-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <BookOpen className="w-5 h-5" />
            </button>
            
            <div className="relative">
              <button
                onClick={() => handleShare('copy')}
                className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300"
              >
                {shareStatus === 'Link copied!' ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
              {shareStatus && (
                <div className="absolute top-full right-0 mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap">
                  {shareStatus}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Category */}
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <Tag className="w-4 h-4 mr-2" />
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8 max-w-4xl">
            {blog.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-12">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="font-medium">{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{estimatedReadingTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              <span>{views.toLocaleString()} views</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-[400px] md:h-[600px] object-cover transition-all duration-700 group-hover:scale-105"
              onClick={() => setSelectedImage(blog.image)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ZoomIn className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Article */}
          <article className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-lg">
            <div className="prose prose-lg max-w-none">
              {renderContent()}
            </div>

            {/* Tags */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {blog.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white text-gray-700 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                  >
                    #{tag.toLowerCase().replace(' ', '')}
                  </span>
                ))}
              </div>
            </div>

            {/* Engagement */}
            <div className="mt-16 pt-8 border-t border-gray-200 flex items-center justify-between">
              <button 
                onClick={handleLike}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  isLiked 
                    ? 'bg-red-500 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white'
                }`}
              >
                <Heart className={`w-6 h-6 transition-all duration-300 ${isLiked ? 'fill-current scale-110' : ''}`} />
                <span className="font-semibold">{likes.toLocaleString()}</span>
              </button>

              <div className="flex items-center gap-3">
                <button 
                  onClick={share}
                  className="group flex items-center gap-3 px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <Share2 className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="font-semibold">Share</span>
                </button>
                <button 
                  onClick={() => handleShare('copy')}
                  className="p-3 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-all duration-300"
                  title="Copy link"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Reading Progress */}
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Reading Progress</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${scrollProgress}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600">{Math.round(scrollProgress)}%</span>
                </div>
                
                <div className="text-sm text-gray-600">
                  <div>Time reading: {Math.round(readingTime)}m</div>
                  <div>Est. time left: {Math.max(0, estimatedReadingTime - Math.round(readingTime))}m</div>
                </div>
                
                {activeSection && (
                  <div className="text-sm text-gray-600">
                    <strong>Current section:</strong> {activeSection}
                  </div>
                )}
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-6">Related Articles</h3>
              <div className="space-y-4">
                {relatedPosts.length > 0 ? relatedPosts.map((post) => (
                 
                  <div key={post.id} className="group cursor-pointer">
                    <a href={`/blog/${post.slug}`}>

                    <div className="flex gap-3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-sm line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1">{post.readTime}</p>
                      </div>
                    </div>
                        </a>
                  </div>
                )) : (
                  <p className="text-sm text-gray-500">No related articles found</p>
                )}
              </div>
            </div>

            {/* Stats */}
            
          </aside>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-200"
            >
              {/* <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg> */}
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes heartFloat {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -70%) scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -100%) scale(0.8);
            opacity: 0;
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
    </Layout>
  );
}