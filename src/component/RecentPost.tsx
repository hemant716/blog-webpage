
import {motion} from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";



const recentPosts = [
  {
    id: 1,
    title: "Exploring the Future of AI in Web Development",
    excerpt: "An in-depth exploration of how AI is shaping the future of web development tools and techniques.",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
    },
    date: "Apr 5, 2025",
    readTime: "22 min read",
    category: "AI & Development",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Designing for Accessibility: Best Practices",
    excerpt: "A guide to making your websites and applications more accessible to users with disabilities.",
    author: {
      name: "Michael Williams",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
    },
    date: "Apr 3, 2025",
    readTime: "15 min read",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Building Scalable Web Applications with React",
    excerpt: "Learn how to scale your React applications efficiently with the latest techniques and tools.",
    author: {
      name: "Emily Brown",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
    },
    date: "Apr 2, 2025",
    readTime: "30 min read",
    category: "React",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "The Power of Microservices in Web Architecture",
    excerpt: "Why microservices architecture is transforming modern web development.",
    author: {
      name: "John Davis",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
    },
    date: "Mar 30, 2025",
    readTime: "25 min read",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Understanding Serverless Computing in Web Development",
    excerpt: "How serverless computing is revolutionizing backend development and deployment strategies.",
    author: {
      name: "Emily Brown",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
    },
    date: "Mar 28, 2025",
    readTime: "20 min read",
    category: "Serverless",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    title: "Advanced CSS Techniques for Modern Web Design",
    excerpt: "Master advanced CSS techniques to create beautiful and responsive web designs.",
    author: {
      name: "Michael Williams",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
    },
    date: "Mar 25, 2025",
    readTime: "18 min read",
    category: "CSS",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 7,
    title: "The Evolution of Progressive Web Apps (PWAs)",
    excerpt: "How Progressive Web Apps are changing the mobile and web experience for users.",
    author: {
      name: "James Smith",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
    },
    date: "Mar 22, 2025",
    readTime: "28 min read",
    category: "Mobile Development",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 8,
    title: "Breaking Down the Latest JavaScript Frameworks",
    excerpt: "A comparison of the most popular JavaScript frameworks and their use cases.",
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
    },
    date: "Mar 18, 2025",
    readTime: "25 min read",
    category: "JavaScript",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 9,
    title: "Exploring the Future of Blockchain in Web Development",
    excerpt: "How blockchain is poised to disrupt web development, from security to decentralized apps.",
    author: {
      name: "Michael Williams",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
    },
    date: "Mar 10, 2025",
    readTime: "30 min read",
    category: "Blockchain",
    image:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&auto=format&fit=crop&q=60",
  }
];



 function RecentPost() {
  return (
    <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Recent Posts
          </h2>

          <p className="text-gray-600">
            Stay updated with our latest articles and insights
          </p>
        </div>
        <button className="hidden md:flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors cursor-pointer">
          View All
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8"> 
        {recentPosts.map((post) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
          >
            <div className="md:w-2/5 relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 md:h-full object-cover"
              />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-purple-600 text-sm font-medium rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6 md:w-3/5">
              <div className="flex items-center mb-4">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {post.author.name}
                  </p>
                  <div className="flex items-center tex-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 "> {post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="inline-flex items-center text-purple-600 font-medium group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <button className="inline-flex items-center text-purple-600 font-medium">
          View All Posts
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  </section>

  )
}
export default RecentPost
