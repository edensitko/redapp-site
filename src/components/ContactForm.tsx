import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { textStyles, cardStyles, buttonStyles, formStyles, animationVariants } from '../styles/design-system';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    budget: '',
    projectType: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        budget: '',
        projectType: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="text-primary-500" />,
      title: 'טלפון',
      content: '050-123-4567',
      href: 'tel:+972501234567'
    },
    {
      icon: <FaEnvelope className="text-primary-500" />,
      title: 'אימייל',
      content: 'contact@red-software.com',
      href: 'mailto:contact@red-software.com'
    },
    {
      icon: <FaMapMarkerAlt className="text-primary-500" />,
      title: 'כתובת',
      content: 'תל אביב, ישראל',
      href: 'https://goo.gl/maps/yourAddress'
    }
  ];

  return (
    <motion.div 
      className="relative py-16 bg-gray-50 dark:bg-[#333] overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={animationVariants.staggerChildren}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={animationVariants.slideUp}
        >
          <h2 className={textStyles.sectionTitle}>צור קשר</h2>
          <p className={textStyles.sectionSubtitle}>
            נשמח לשמוע ממך ולעזור לך להגשים את החזון שלך
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div variants={animationVariants.slideUp}>
            <div className={`${cardStyles.base} ${cardStyles.gradient}`}>
              <h3 className={textStyles.cardTitle}>פרטי התקשרות</h3>
              <p className={textStyles.cardDescription}>
                אנחנו כאן בשבילך. צור איתנו קשר בכל דרך שנוחה לך
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 space-x-reverse text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                    variants={animationVariants.fadeIn}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm">{item.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={animationVariants.slideUp}>
            <form onSubmit={handleSubmit} className={cardStyles.form}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={formStyles.label}>שם מלא</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={formStyles.input}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className={formStyles.label}>אימייל</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={formStyles.input}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={formStyles.label}>טלפון</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={formStyles.input}
                  />
                </div>

                <div>
                  <label htmlFor="company" className={formStyles.label}>חברה</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={formStyles.input}
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="projectType" className={formStyles.label}>סוג הפרויקט</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={formStyles.input}
                    required
                  >
                    <option value="">בחר סוג פרויקט</option>
                    <option value="web">פיתוח אתר</option>
                    <option value="app">פיתוח אפליקציה</option>
                    <option value="ecommerce">חנות אונליין</option>
                    <option value="other">אחר</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className={formStyles.label}>הודעה</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={formStyles.textarea}
                    rows={4}
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${buttonStyles.primary} w-full`}
                >
                  {isSubmitting ? 'שולח...' : 'שלח הודעה'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <motion.p 
                  className="mt-4 text-primary-600 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.
                </motion.p>
              )}

              {submitStatus === 'error' && (
                <motion.p 
                  className="mt-4 text-primary-600 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  אירעה שגיאה בשליחת ההודעה. אנא נסה שוב מאוחר יותר.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
