import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Calendar, Bookmark } from "lucide-react";
import CTASection from "../components/shared/CTASection";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";

const posts = [
  {
    slug: "reducing-fall-incidents",
    title: "Reducing Fall Incidents: A Data-Driven Approach for Senior Care Facilities",
    excerpt: "How predictive analytics and environmental monitoring decreased fall rates by 47% across our partner facilities.",
    category: "Clinical Insights",
    author: "Dr. Priya Sharma",
    date: "Mar 15, 2024",
    readTime: "8 min",
    image: blog1,
    content: `Falls remain one of the most significant safety concerns in senior care facilities, affecting approximately 1 in 3 residents annually. At ElderGuard Health, we've developed a comprehensive data-driven approach that has reduced fall incidents by 47% across our partner facilities.

**Understanding the Problem**

Traditional fall prevention relies heavily on periodic assessments and reactive measures. Our research shows that 68% of falls occur during transitions — getting in and out of bed, moving to the bathroom, or transferring between surfaces.

**The Data-Driven Solution**

Our approach combines three key technologies:

1. **Environmental Sensors**: Motion-activated sensors in high-risk areas that detect unusual movement patterns and alert staff in real-time.

2. **Predictive Analytics**: Machine learning algorithms that analyze resident data — including medication changes, sleep patterns, and vital signs — to identify elevated fall risk before an incident occurs.

3. **Smart Flooring**: Pressure-sensitive flooring that detects when a resident has left their bed or chair, triggering immediate notifications to nursing staff.

**Results Across Partner Facilities**

Over a 12-month implementation period across 45 facilities, we observed:
- 47% reduction in total fall incidents
- 62% decrease in fall-related injuries requiring hospitalization
- 38% improvement in staff response time to fall alerts
- 91% family satisfaction with safety measures

**Implementation Best Practices**

Successful implementation requires a phased approach: start with highest-risk residents, train staff thoroughly on the new systems, and continuously calibrate algorithms based on facility-specific data.

The key takeaway is clear: when we combine human expertise with intelligent technology, we can create significantly safer environments for our elderly residents.`
  },
  {
    slug: "future-of-memory-care",
    title: "The Future of Memory Care: AI-Assisted Cognitive Monitoring",
    excerpt: "Exploring how machine learning algorithms are revolutionizing early detection of cognitive decline in elderly populations.",
    category: "Technology",
    author: "Catherine Brooks",
    date: "Mar 8, 2024",
    readTime: "12 min",
    image: blog2,
    content: `Artificial intelligence is transforming how we approach memory care, offering unprecedented capabilities in early detection and intervention for cognitive decline.

**The Challenge of Early Detection**

Cognitive decline often progresses silently for months or years before clinical symptoms become apparent. Traditional assessment tools like the MMSE or MoCA are administered periodically and may miss subtle changes between evaluations.

**AI-Powered Continuous Monitoring**

Our AI-assisted cognitive monitoring system analyzes multiple data streams continuously:

1. **Speech Pattern Analysis**: Natural language processing algorithms detect changes in vocabulary complexity, sentence structure, and conversational coherence during routine interactions.

2. **Activity Pattern Recognition**: Machine learning models identify deviations from established daily routines — changes in eating habits, sleep patterns, social engagement, and physical activity levels.

3. **Interactive Cognitive Exercises**: Gamified assessments that residents enjoy while providing granular cognitive performance data across memory, attention, and executive function domains.

**Clinical Validation**

In a multi-site clinical study involving 1,200 memory care residents:
- AI flagged cognitive changes an average of 4.2 months before traditional assessments
- 89% accuracy in predicting transition from mild cognitive impairment to dementia
- Care interventions initiated earlier resulted in 34% slower progression rates

**Ethical Considerations**

We prioritize resident dignity and privacy. All monitoring is non-intrusive, data is de-identified for algorithm training, and families are involved in consent processes from the start.

The future of memory care lies in combining compassionate human care with intelligent technology that helps us intervene earlier and more effectively.`
  },
  {
    slug: "hipaa-compliance-connected-care",
    title: "HIPAA Compliance in the Age of Connected Care Devices",
    excerpt: "A comprehensive guide to maintaining regulatory compliance while adopting IoT-enabled monitoring systems.",
    category: "Compliance",
    author: "Legal Advisory Team",
    date: "Feb 28, 2024",
    readTime: "10 min",
    image: blog3,
    content: `As senior care facilities increasingly adopt IoT-enabled monitoring devices, maintaining HIPAA compliance becomes both more critical and more complex. This guide provides a practical framework for navigating regulatory requirements.

**The IoT Compliance Challenge**

Connected care devices generate vast amounts of Protected Health Information (PHI). Each sensor, wearable, and monitoring system represents a potential vulnerability if not properly secured.

**Key Compliance Areas**

1. **Data Encryption**: All PHI must be encrypted both at rest and in transit. We recommend AES-256 encryption for stored data and TLS 1.3 for data transmission.

2. **Access Controls**: Implement role-based access controls (RBAC) ensuring only authorized personnel can access resident data. Multi-factor authentication should be mandatory.

3. **Audit Trails**: Maintain comprehensive logs of all data access, modifications, and transmissions. Our platform automatically generates audit-ready reports.

4. **Device Security**: Regular firmware updates, network segmentation, and device authentication protocols are essential for IoT security.

5. **Business Associate Agreements**: Ensure all technology vendors have signed BAAs and understand their obligations under HIPAA.

**Best Practices for Implementation**

- Conduct a thorough risk assessment before deploying any connected device
- Establish a dedicated security team or designate a HIPAA security officer
- Provide regular staff training on data handling procedures
- Implement incident response plans specific to IoT-related breaches
- Schedule quarterly security audits and penetration testing

Compliance is not just a legal requirement — it's a commitment to protecting the privacy and dignity of every resident in your care.`
  },
  {
    slug: "person-centered-care-planning",
    title: "Person-Centered Care Planning: Beyond the Checklist Approach",
    excerpt: "Why individualized care plans driven by resident preferences lead to measurably better clinical outcomes.",
    category: "Best Practices",
    author: "Dr. James Whitfield",
    date: "Feb 20, 2024",
    readTime: "7 min",
    image: blog4,
    content: `Person-centered care has evolved from a philosophy to a measurable practice. Our data shows that facilities adopting individualized care planning see significant improvements across all quality metrics.

**Beyond Checklists**

Traditional care plans often follow a standardized template that addresses clinical needs but overlooks the individual behind the diagnosis. Person-centered planning starts with understanding who the resident is — their history, preferences, values, and goals.

**The ElderGuard Approach**

Our care planning platform integrates:

1. **Life Story Profiles**: Comprehensive background information gathered from residents and families, informing daily care decisions.

2. **Preference-Based Scheduling**: Allowing residents to maintain preferred routines for meals, activities, sleep, and social engagement.

3. **Goal-Oriented Interventions**: Setting meaningful goals with residents rather than for them, tracking progress against personally relevant outcomes.

**Measurable Outcomes**

Facilities using person-centered care planning reported:
- 42% reduction in behavioral incidents
- 56% improvement in resident satisfaction scores
- 28% decrease in psychotropic medication use
- 35% increase in family engagement

The evidence is clear: when we treat residents as individuals with unique stories and preferences, everyone benefits — residents, families, and staff alike.`
  },
  {
    slug: "staff-retention-senior-care",
    title: "Staff Retention in Senior Care: Building a Culture of Excellence",
    excerpt: "Evidence-based strategies that top-performing facilities use to attract and retain qualified caregivers.",
    category: "Operations",
    author: "HR Advisory",
    date: "Feb 12, 2024",
    readTime: "9 min",
    image: blog5,
    content: `The senior care industry faces an ongoing staffing crisis, with annual turnover rates exceeding 65% nationally. However, top-performing facilities have found ways to buck this trend through strategic investments in culture and technology.

**Understanding Why Staff Leave**

Exit interview data from over 5,000 departing caregivers reveals the top reasons:
- Burnout and physical exhaustion (34%)
- Inadequate compensation (28%)
- Lack of professional development (19%)
- Poor management and communication (12%)
- Better opportunities elsewhere (7%)

**Strategies That Work**

1. **Technology-Enabled Efficiency**: Reducing documentation burden through automated charting and voice-to-text notes saves an average of 45 minutes per shift per caregiver.

2. **Flexible Scheduling**: Self-scheduling platforms that allow staff to swap shifts, request time off, and pick up extra hours on their own terms.

3. **Career Pathways**: Clear advancement trajectories with tuition assistance, certification support, and mentorship programs.

4. **Recognition Programs**: Real-time peer recognition, monthly awards, and meaningful bonuses tied to care quality metrics.

5. **Wellness Support**: On-site mental health resources, ergonomic equipment, and adequate staffing ratios to prevent burnout.

**The ROI of Retention**

Our analysis shows that reducing turnover by just 10% saves an average facility $420,000 annually in recruitment, training, and temporary staffing costs.

Investing in your team isn't just the right thing to do — it's the smartest business decision you can make.`
  },
  {
    slug: "family-engagement-portals",
    title: "Family Engagement Portals: Bridging the Communication Gap",
    excerpt: "How digital family communication platforms are transforming satisfaction scores and care coordination.",
    category: "Technology",
    author: "Product Team",
    date: "Feb 5, 2024",
    readTime: "6 min",
    image: blog6,
    content: `Family involvement is one of the strongest predictors of positive resident outcomes, yet traditional communication methods leave many families feeling disconnected and uninformed.

**The Communication Gap**

Studies show that 73% of families feel they don't receive enough information about their loved one's daily life and care. Phone calls are difficult to schedule, in-person visits are limited, and paper reports are often delayed.

**Digital Family Portals**

Modern family engagement platforms provide:

1. **Real-Time Updates**: Daily activity summaries, meal intake reports, and wellness snapshots delivered to family members' phones.

2. **Photo & Video Sharing**: Staff can share moments from activities, therapy sessions, and social events, helping families feel connected.

3. **Secure Messaging**: HIPAA-compliant messaging between families and care teams, with response time tracking and escalation protocols.

4. **Care Plan Visibility**: Families can view (but not modify) care plans, medication lists, and upcoming appointments.

5. **Visit Scheduling**: Online booking for visits, video calls, and care conferences.

**Impact on Satisfaction**

Facilities using our family portal reported:
- 89% family satisfaction (up from 62%)
- 45% reduction in complaint calls
- 67% increase in family participation in care planning
- 92% of families said they feel "well-informed" about their loved one's care

Technology can't replace the human connection between families and caregivers, but it can ensure that connection stays strong even when physical distance makes it challenging.`
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="section-padding">
        <div className="container-main text-center py-20">
          <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>
        <div className="relative container-main pt-32 pb-16">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />Back to Blog
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary mb-4">{post.category}</span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6 max-w-4xl">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><User className="w-4 h-4" />{post.author}</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{post.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime} read</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return <h2 key={i} className="text-xl font-bold text-foreground mt-10 mb-4">{paragraph.replace(/\*\*/g, "")}</h2>;
                }
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n").filter(Boolean);
                  return (
                    <ul key={i} className="space-y-2 my-4">
                      {items.map((item, j) => (
                        <li key={j} className="text-muted-foreground leading-relaxed flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span dangerouslySetInnerHTML={{ __html: item.replace(/^- /, "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.match(/^\d\./)) {
                  const items = paragraph.split("\n").filter(Boolean);
                  return (
                    <ol key={i} className="space-y-3 my-6">
                      {items.map((item, j) => (
                        <li key={j} className="text-muted-foreground leading-relaxed pl-2">
                          <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
                        </li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default BlogPost;
