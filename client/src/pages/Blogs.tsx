import React, { useState, useEffect } from "react";
import {
  Search,
  Calendar,
  User,
  ArrowRight,
  Clock,
  Eye,
  TrendingUp,
  Zap,
  Filter,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { blogPosts } from "@/lib/constants";

const BlogComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { name: "All", icon: Filter, color: "from-purple-500 to-pink-500" },
    { name: "Marketing", icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
    { name: "Technology", icon: Zap, color: "from-green-500 to-emerald-500" },
    {
      name: "Business Strategy",
      icon: User,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Legal & Finance",
      icon: Calendar,
      color: "from-indigo-500 to-purple-500",
    },
    { name: "AI Automation", icon: Zap, color: "from-pink-500 to-rose-500" },
  ];

  
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout children={undefined}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Search Section */}
        <div
          className={`py-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 mt-20">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-bold mb-6 px-2">
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                  Insights & Innovation
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover cutting-edge strategies, emerging trends, and
                actionable insights to accelerate your business growth
              </p>
            </div>

            {/* Enhanced Search Bar */}
            <div className="max-w-2xl mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-white/20">
                <div className="flex items-center">
                  <div className="flex-1 relative">
                    <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                    <input
                      type="text"
                      placeholder="Search articles, authors, topics..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-14 pr-6 py-4 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none text-lg"
                    />
                  </div>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Categories */}
        <div className="py-12 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`relative overflow-hidden px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 group ${
                      selectedCategory === category.name
                        ? "text-white shadow-2xl"
                        : "bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white shadow-lg border border-white/20"
                    }`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {selectedCategory === category.name && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${category.color} animate-pulse`}
                      ></div>
                    )}
                    <div className="relative flex items-center space-x-3">
                      <IconComponent className="w-5 h-5" />
                      <span className="font-semibold">{category.name}</span>
                      {selectedCategory === category.name && (
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Blog Grid with Advanced Animations */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-600 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or category filter
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 cursor-pointer ${
                      isVisible
                        ? "animate-slide-up"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{
                      animationDelay: `${index * 0.15}s`,
                    }}
                    onMouseEnter={() => setHoveredCard(post.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Trending Badge */}
                    {post.trending && (
                      <div className="absolute top-4 left-4 z-20">
                        <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 animate-pulse">
                          <TrendingUp className="w-3 h-3" />
                          <span>Trending</span>
                        </div>
                      </div>
                    )}

                    {/* Image with Gradient Overlay */}
                    <div className="relative h-56 overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-20 z-10`}
                      ></div>
                      <img
                        src={post.image}
                        alt={post.title}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          hoveredCard === post.id
                            ? "scale-110 rotate-1"
                            : "scale-100"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>

                      {/* Category Badge on Image */}
                      <div className="absolute bottom-4 right-4 z-20">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views}</span>
                          </div>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <Link to={`/blog/${post.slug}`}>
                        <button className="w-full bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-blue-700 font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg">
                          <span>Read Article</span>
                          <ArrowRight
                            className={`w-4 h-4 transition-transform duration-300 ${
                              hoveredCard === post.id ? "translate-x-2" : ""
                            }`}
                          />
                        </button>
                      </Link>
                    </div>

                    {/* Hover Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-3xl transition-all duration-500 pointer-events-none ${
                        hoveredCard === post.id
                          ? "shadow-2xl ring-4 ring-blue-200"
                          : ""
                      }`}
                    ></div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>

        <style>{`
        @keyframes slide-up {
            from {
            opacity: 0;
            transform: translateY(30px);
            }
            to {
                opacity: 1;
            transform: translateY(0);
            }
            }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          }
          
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            }
            `}</style>
      </div>
    </Layout>
  );
};

export default BlogComponent;
