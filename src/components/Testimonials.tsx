import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Gaming Enthusiast",
      content: "AbuSwe7l's streams are incredibly engaging and entertaining. The community is amazing!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Content Creator",
      content: "The quality of content and interaction with viewers is outstanding. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Professional Gamer",
      content: "One of the best gaming communities I've been part of. Great content and amazing streams!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#1e293b] to-[#23242a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(35,36,42,0.10),transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-transparent bg-clip-text bg-gradient-to-b from-[#60a5fa] to-[#1e40af] drop-shadow-lg">What Our Community Says</h2>
          <p className="section-subtitle text-gray-200 drop-shadow">Join thousands of satisfied viewers and gamers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="modern-card bg-gradient-to-br from-[#23242a] to-[#181a1f] border border-gray-700/40 p-8"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFD700] fill-[#FFD700] drop-shadow-glow" />
                ))}
              </div>
              <p className="text-gray-100 mb-6 drop-shadow">{testimonial.content}</p>
              <div>
                <h4 className="text-lg font-semibold text-white drop-shadow">{testimonial.name}</h4>
                <p className="text-gray-light drop-shadow">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
