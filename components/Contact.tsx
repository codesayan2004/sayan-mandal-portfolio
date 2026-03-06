import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import toast from "react-hot-toast";
import { RESUME_DATA } from "../constants";

const socialLinks = [
  { icon: Github, url: "https://github.com/codesayan2004" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/sayan-mandal-iitg/" },
  { icon: Instagram, url: "https://www.instagram.com/sayan_mandal04/" },
  { icon: Facebook, url: "https://www.facebook.com/profile.php?id=100041070313096" },
  { icon: Twitter, url: "https://x.com/mandal_say17707" },
  { icon: Youtube, url: "https://www.youtube.com/@sayan_mandal04" },
];

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mojnwepe", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast.success("Message sent successfully 🚀");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Get In Touch
            </h2>

            <p className="text-slate-400 mb-12 text-lg leading-relaxed">
              Have an interesting project or a job opportunity? I'm always open
              to discussing new ideas and collaborations. Drop me a line!
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-6 p-4 rounded-2xl glass hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <Mail />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                    Email
                  </p>
                  <p className="text-slate-200">{RESUME_DATA.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-4 rounded-2xl glass hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <Phone />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                    Call
                  </p>
                  <p className="text-slate-200">{RESUME_DATA.phone}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600/20 transition-all border border-white/10 hover:border-indigo-500/30"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-white/5 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Let's build something"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Hello Sayan, I was wondering if..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30 active:scale-95 transition-all disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;