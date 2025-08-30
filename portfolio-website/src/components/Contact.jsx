import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false, message: '' });

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: 'Thank you for your message! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: 'Something went wrong. Please try again later.'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chaitany.mishra.tech@gmail.com",
      href: "mailto:chaitany.mishra.tech@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9305224208",
      href: "tel:+919305224208"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kanpur, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Get In Touch</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's create something amazing together!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mt-6" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about web development and technology. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-background-card rounded-xl border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300 card-hover group"
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-primary-400 font-semibold text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-background-card p-6 rounded-xl border border-gray-700/50">
                <h4 className="text-lg font-semibold text-white mb-4">Quick Response</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I typically respond to emails within 24 hours. For urgent inquiries, 
                  feel free to call or connect with me on LinkedIn.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-background-card p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                {/* Success/Error Messages */}
                {formStatus.isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-600/20 border border-green-500/50 rounded-lg flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <p className="text-green-400 text-sm">{formStatus.message}</p>
                  </motion.div>
                )}

                {formStatus.isError && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-600/20 border border-red-500/50 rounded-lg flex items-center space-x-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <p className="text-red-400 text-sm">{formStatus.message}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'name' ? 'text-primary-400' : 'text-gray-500'
                      }`} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-background-darker border border-gray-600 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'email' ? 'text-primary-400' : 'text-gray-500'
                      }`} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-background-darker border border-gray-600 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField('')}
                      required
                      className="w-full px-4 py-3 bg-background-darker border border-gray-600 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className={`absolute left-3 top-4 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'message' ? 'text-primary-400' : 'text-gray-500'
                      }`} />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        required
                        rows={5}
                        className="w-full pl-12 pr-4 py-3 bg-background-darker border border-gray-600 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 text-white placeholder-gray-400 resize-none"
                        placeholder="Tell me about your project or idea..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className="w-full glow-button bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    whileHover={{ scale: formStatus.isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: formStatus.isSubmitting ? 1 : 0.98 }}
                  >
                    {formStatus.isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;