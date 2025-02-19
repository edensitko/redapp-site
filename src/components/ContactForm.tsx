import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { textStyles, cardStyles, buttonStyles, formStyles } from '../styles/design-system';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const phoneNumber = '972542424246';
  const message = 'היי, אשמח לשמוע פרטים נוספים על השירותים שלכם';
  const instagramUsername = 'redapp.il';
  const facebookUsername = 'redapp.il';

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      href: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      color: 'bg-[#25D366] hover:bg-[#20ba57]',
      hoverText: 'hover:text-[#25D366]',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      href: `https://instagram.com/${instagramUsername}`,
      color: 'bg-[#E4405F] hover:bg-[#d62e4c]',
      hoverText: 'hover:text-[#E4405F]',
    },
    {
      name: 'Facebook',
      icon: FaFacebook,
      href: `https://facebook.com/${facebookUsername}`,
      color: 'bg-[#1877F2] hover:bg-[#0d65d9]',
      hoverText: 'hover:text-[#1877F2]',
    },
  ];

  const contactInfo = [
    {
      icon: <FaPhone className="text-primary-500" />,
      title: 'טלפון',
      content: '054-242-4246',
      href: 'tel:+972542424246'
    },
    {
      icon: <FaEnvelope className="text-primary-500" />,
      title: 'אימייל',
      content: 'contact@red-softwares.com',
      href: 'mailto:contact@red-softwares.com'
    },
    {
      icon: <FaMapMarkerAlt className="text-primary-500" />,
      title: 'כתובת',
      content: 'תל אביב, ישראל',
      href: 'https://maps.google.com/?q=תל+אביב'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="relative py-16 bg-gray-50 dark:bg-[#333] overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={animationVariants}
    >
      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className={textStyles.sectionTitle}
            variants={animationVariants.item}
          >
            צור קשר
          </motion.h2>
          <motion.p 
            className={textStyles.sectionSubtitle}
            variants={animationVariants.item}
          >
            נשמח לשמוע ממך ולעזור לך להגשים את החזון שלך
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={animationVariants.container}
          >
            <div className={`${cardStyles.base} ${cardStyles.gradient}`}>
              <h3 className={textStyles.cardTitle}>פרטי התקשרות</h3>
              <div className="space-y-4 mt-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    variants={animationVariants.item}
                    target={info.title === 'כתובת' ? '_blank' : undefined}
                    rel={info.title === 'כתובת' ? 'noopener noreferrer' : undefined}
                  >
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-50 dark:bg-primary-900">
                      {info.icon}
                    </span>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      <p className="text-sm">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 space-y-6">
                <h3 className={textStyles.cardTitle}>מדיה חברתית</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                        aria-label={social.name}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>

                <div className="mt-6">
                  <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba57] text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    צור קשר בוואטסאפ
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            className={`${cardStyles.base} ${cardStyles.gradient}`}
            onSubmit={handleSubmit}
            variants={animationVariants.container}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div variants={animationVariants.item}>
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
              </motion.div>

              <motion.div variants={animationVariants.item}>
                <label htmlFor="phone" className={formStyles.label}>טלפון</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={formStyles.input}
                  required
                />
              </motion.div>
            </div>

            <motion.div variants={animationVariants.item}>
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
            </motion.div>

            <motion.div variants={animationVariants.item}>
              <label htmlFor="subject" className={formStyles.label}>נושא</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={formStyles.input}
                required
              />
            </motion.div>

            <motion.div variants={animationVariants.item}>
              <label htmlFor="message" className={formStyles.label}>הודעה</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={formStyles.textarea}
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              className={`${buttonStyles.primary} w-full`}
              disabled={isSubmitting}
              variants={animationVariants.item}
            >
              {isSubmitting ? 'שולח...' : 'שלח הודעה'}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.p className="text-green-500 text-center" variants={animationVariants.item}>
                ההודעה נשלחה בהצלחה!
              </motion.p>
            )}

            {submitStatus === 'error' && (
              <motion.p className="text-red-500 text-center" variants={animationVariants.item}>
                אירעה שגיאה בשליחת ההודעה. אנא נסה שוב.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
