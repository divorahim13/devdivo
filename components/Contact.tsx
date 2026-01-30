import React, { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Mail, CheckCircle, Loader2 } from 'lucide-react';
import { SOCIALS } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  // Controlled inputs for validation and sanitization
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Simple sanitization to prevent basic injection
  const sanitizeInput = (str: string) => {
    return str.replace(/[<>]/g, '').trim();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    // 1. Sanitize Data
    const safeName = sanitizeInput(formData.name);
    const safeEmail = sanitizeInput(formData.email);
    const safeSubject = sanitizeInput(formData.subject || 'Portfolio Inquiry');
    const safeMessage = sanitizeInput(formData.message);

    // 2. Construct Mailto Link
    // This ensures the email is sent directly from the user's client to you, guaranteeing delivery without a backend.
    const bodyContent = `Name: ${safeName}\nEmail: ${safeEmail}\n\nMessage:\n${safeMessage}`;
    const mailtoLink = `mailto:divorahim13@gmail.com?subject=${encodeURIComponent(safeSubject)}&body=${encodeURIComponent(bodyContent)}`;

    // 3. Execute
    window.location.href = mailtoLink;

    // 4. UI Feedback
    setTimeout(() => {
      setFormState('success');
      // Reset after showing success message
      setTimeout(() => {
        setFormState('idle');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 1000);
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 overflow-hidden">
        {/* Footer Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-secondary/20 to-transparent blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-display font-bold mb-6">Let's work <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">together.</span></h2>
            <p className="text-gray-400 mb-10 text-lg">
              Have a project in mind? I'm currently available for freelance projects on Upwork and Fiverr.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                    <Mail size={20} />
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                    <a href="mailto:divorahim13@gmail.com" className="hover:text-white transition-colors">divorahim13@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-secondary">
                    <MapPin size={20} />
                </div>
                 <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                    <p>Indonesia, Jakarta (Remote)</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-primary transition-all duration-300"
                  aria-label={social.platform}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Prepared!</h3>
                  <p className="text-gray-400">Opening your email client to send the message...</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Name</label>
                      <input 
                        required 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Email</label>
                      <input 
                        required 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Subject</label>
                     <select 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                     >
                        <option value="General Inquiry" className="bg-dark">Select a subject</option>
                        <option value="Web Development Project" className="bg-dark">Web Development</option>
                        <option value="UI/UX Design Project" className="bg-dark">UI/UX Design</option>
                        <option value="Freelance Opportunity" className="bg-dark">Freelance Opportunity</option>
                        <option value="Other" className="bg-dark">Other</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Message</label>
                    <textarea 
                        required 
                        rows={4} 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white" 
                        placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === 'submitting' ? (
                      <>
                        <Loader2 className="animate-spin" size={18} /> Opening Mail Client...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Divo Dev. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;