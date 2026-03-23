'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';

export default function Blogs() {
  const blogPosts = [
    {
      title: "The Importance of STEAM Education in Modern Learning",
      excerpt: "Discover how Science, Technology, Engineering, Arts, and Mathematics integration prepares students for future challenges.",
      date: "December 20, 2025",
      category: "Education",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      title: "Building Character Through Sports Excellence",
      excerpt: "How Maple Ford's sports programs develop leadership, discipline, and teamwork in our students.",
      date: "December 18, 2025",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      title: "Celebrating Cultural Diversity at Maple Ford",
      excerpt: "Our commitment to fostering global citizenship through multicultural events and celebrations.",
      date: "December 15, 2025",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      readTime: "6 min read"
    },
    {
      title: "Digital Learning: Preparing Students for Tomorrow",
      excerpt: "How technology integration enhances educational outcomes and future readiness.",
      date: "December 12, 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
      readTime: "7 min read"
    },
    {
      title: "The Power of Project-Based Learning",
      excerpt: "Real-world applications that make learning meaningful and memorable.",
      date: "December 10, 2025",
      category: "Teaching",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      title: "Parent-Teacher Partnership in Education",
      excerpt: "Building strong relationships for student success and well-being.",
      date: "December 8, 2025",
      category: "Community",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
          {/* Hero Section */}
          <section className="py-24 px-4 text-center relative overflow-hidden min-h-[400px] flex items-center justify-center bg-[#d0302b]">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/images/Image26.png" 
                alt="Blog Background" 
                fill
                className="object-cover opacity-40" 
                priority
              />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-[38px] sm:text-[54px] lg:text-[68px] font-bold !text-white leading-tight mb-4 tracking-tighter ">
                  Our Blog
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="!text-white/90 text-xl lg:text-2xl max-w-2xl mx-auto font-bold tracking-wide italic leading-tight "
                >
                  Insights, stories, and perspectives from the Mapleford International School community.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.date}</span>
                        <button className="text-red-600 hover:text-red-700 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-12 shadow-xl"
              >
                <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-bold mb-6 text-[#1A1A1A] tracking-tighter">
                  Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B25E] to-[#FFA500]">Updated</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Subscribe to our newsletter for the latest news, events, and educational insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                  <Button
                    variant="primary"
                    size="md"
                    className="px-8"
                  >
                    Subscribe
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}