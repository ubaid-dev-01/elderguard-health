import { motion } from "framer-motion";
import { Clock, User, Bookmark, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/shared/CTASection";
import heroImage from "@/assets/hero-blog.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";

const posts = [
  { slug: "reducing-fall-incidents", title: "Reducing Fall Incidents: A Data-Driven Approach for Senior Care Facilities", excerpt: "How predictive analytics and environmental monitoring decreased fall rates by 47% across our partner facilities.", category: "Clinical Insights", author: "Dr. Priya Sharma", date: "Mar 15, 2024", readTime: "8 min", image: blog1 },
  { slug: "future-of-memory-care", title: "The Future of Memory Care: AI-Assisted Cognitive Monitoring", excerpt: "Exploring how machine learning algorithms are revolutionizing early detection of cognitive decline in elderly populations.", category: "Technology", author: "Catherine Brooks", date: "Mar 8, 2024", readTime: "12 min", image: blog2 },
  { slug: "hipaa-compliance-connected-care", title: "HIPAA Compliance in the Age of Connected Care Devices", excerpt: "A comprehensive guide to maintaining regulatory compliance while adopting IoT-enabled monitoring systems.", category: "Compliance", author: "Legal Advisory Team", date: "Feb 28, 2024", readTime: "10 min", image: blog3 },
  { slug: "person-centered-care-planning", title: "Person-Centered Care Planning: Beyond the Checklist Approach", excerpt: "Why individualized care plans driven by resident preferences lead to measurably better clinical outcomes.", category: "Best Practices", author: "Dr. James Whitfield", date: "Feb 20, 2024", readTime: "7 min", image: blog4 },
  { slug: "staff-retention-senior-care", title: "Staff Retention in Senior Care: Building a Culture of Excellence", excerpt: "Evidence-based strategies that top-performing facilities use to attract and retain qualified caregivers.", category: "Operations", author: "HR Advisory", date: "Feb 12, 2024", readTime: "9 min", image: blog5 },
  { slug: "family-engagement-portals", title: "Family Engagement Portals: Bridging the Communication Gap", excerpt: "How digital family communication platforms are transforming satisfaction scores and care coordination.", category: "Technology", author: "Product Team", date: "Feb 5, 2024", readTime: "6 min", image: blog6 },
];

const Blog = () => (
  <>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 opacity-[0.07]">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="relative container-main py-28 md:py-36">
        <div className="max-w-3xl">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/80 text-xs font-semibold tracking-wider uppercase mb-8">Blog & Insights</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold text-primary-foreground leading-[1.05] mb-7 text-balance">
            The ElderGuard <span className="text-accent">Knowledge Hub</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/60 leading-relaxed text-lg mb-10">
            Clinical insights, operational best practices, regulatory updates, and technology trends from the leading minds in geriatric care.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex gap-6 text-sm text-primary-foreground/40 font-medium">
            <span className="flex items-center gap-2"><Bookmark className="w-4 h-4" />120+ Articles</span>
            <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4" />Weekly Updates</span>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <Link to={`/blog/${p.slug}`} key={p.slug}>
              <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-elevated overflow-hidden group cursor-pointer h-full">
                <div className="h-52 overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-7">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/8 text-xs font-medium text-primary">{p.category}</span>
                  <h3 className="text-base font-semibold text-foreground mt-3 mb-3 font-sans leading-snug group-hover:text-primary transition-colors duration-300">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-5 border-t border-border/50">
                    <span className="flex items-center gap-1.5"><User className="w-3 h-3" />{p.author}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{p.readTime}</span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
    <CTASection />
  </>
);

export default Blog;
