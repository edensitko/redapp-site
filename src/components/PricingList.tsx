'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaSearch, FaFilter } from 'react-icons/fa';

// Define categories and their packages
const categories = {
  'פיתוח אתרים': [
    {
      name: 'בסיסי',
      price: '2,500',
      description: 'מושלם לעסקים קטנים המתחילים את דרכם הדיגיטלית',
      features: [
        'אתר תדמית בסיסי',
        'עד 5 עמודים',
        'עיצוב רספונסיבי',
        'אופטימיזציה לחיפוש',
        'טפסי יצירת קשר',
        'חודש תמיכה טכנית',
      ],
      recommended: false,
      category: 'פיתוח אתרים',
      tags: ['בסיסי', 'תדמית', 'עסקים קטנים']
    },
    {
      name: 'מקצועי',
      price: '5,000',
      description: 'אידיאלי לעסקים בינוניים הזקוקים לנוכחות דיגיטלית חזקה',
      features: [
        'כל התכונות של החבילה הבסיסית',
        'עד 10 עמודים',
        'אינטגרציה עם מדיה חברתית',
        'מערכת ניהול תוכן',
        'אנליטיקס מתקדם',
        '3 חודשי תמיכה טכנית',
        'אבטחה מתקדמת',
        'גיבוי אוטומטי',
      ],
      recommended: true,
      category: 'פיתוח אתרים',
      tags: ['מקצועי', 'עסקים בינוניים', 'CMS']
    },
    {
      name: 'פרימיום',
      price: '10,000',
      description: 'פתרון מקיף לעסקים גדולים עם צרכים מורכבים',
      features: [
        'כל התכונות של החבילה המקצועית',
        'מספר עמודים בלתי מוגבל',
        'אפליקציה מותאמת אישית',
        'אינטגרציה עם מערכות ארגוניות',
        'פתרונות אוטומציה',
        'דשבורד ניהול מתקדם',
        'שנה תמיכה טכנית',
        'עדכוני תוכן חודשיים',
      ],
      recommended: false,
      category: 'פיתוח אתרים',
      tags: ['פרימיום', 'עסקים גדולים', 'אפליקציה']
    }
  ],
  'קידום דיגיטלי': [
    {
      name: 'חבילת התחלה',
      price: '1,500',
      description: 'חבילת קידום בסיסית לעסקים קטנים',
      features: [
        'ניהול דף פייסבוק',
        'ניהול חשבון אינסטגרם',
        'פוסט שבועי',
        'דוח חודשי',
        'ייעוץ אסטרטגי',
      ],
      recommended: false,
      category: 'קידום דיגיטלי',
      tags: ['התחלה', 'סושיאל', 'עסקים קטנים']
    },
    {
      name: 'חבילה משולבת',
      price: '3,000',
      description: 'קידום מקיף ברשתות החברתיות וגוגל',
      features: [
        'ניהול כל הרשתות החברתיות',
        '3 פוסטים בשבוע',
        'קמפיין גוגל אדס',
        'אופטימיזציה שוטפת',
        'דוחות שבועיים',
        'פגישות חודשיות',
      ],
      recommended: true,
      category: 'קידום דיגיטלי',
      tags: ['משולב', 'גוגל', 'סושיאל']
    }
  ],
  'אפליקציות': [
    {
      name: 'MVP',
      price: '15,000',
      description: 'פיתוח אפליקציה בסיסית להוכחת היתכנות',
      features: [
        'אפיון ראשוני',
        'עיצוב בסיסי',
        'פיתוח MVP',
        'בדיקות בסיסיות',
        'השקה בחנות אחת',
      ],
      recommended: false,
      category: 'אפליקציות',
      tags: ['MVP', 'התחלה', 'בדיקת שוק']
    },
    {
      name: 'אפליקציה מלאה',
      price: '50,000',
      description: 'פיתוח אפליקציה מלאה עם כל התכונות הנדרשות',
      features: [
        'אפיון מלא',
        'עיצוב UX/UI מתקדם',
        'פיתוח מלא',
        'בדיקות מקיפות',
        'השקה בכל החנויות',
        'תמיכה שוטפת',
      ],
      recommended: true,
      category: 'אפליקציות',
      tags: ['מלא', 'מקצועי', 'אפליקציה']
    }
  ],
  'אבטחת מידע': [
    {
      name: 'סריקת אבטחה',
      price: '5,000',
      description: 'סריקת אבטחה מקיפה וטיפול בפרצות',
      features: [
        'סריקת פרצות אבטחה',
        'דוח מפורט',
        'המלצות לתיקון',
        'בדיקה חוזרת',
      ],
      recommended: false,
      category: 'אבטחת מידע',
      tags: ['אבטחה', 'סריקה', 'פרצות']
    },
    {
      name: 'אבטחה מתמשכת',
      price: '2,500',
      description: 'שירות אבטחה מתמשך לעסק',
      features: [
        'ניטור אבטחה 24/7',
        'טיפול בפרצות',
        'גיבוי אוטומטי',
        'דוחות חודשיים',
        'ייעוץ אבטחה',
      ],
      recommended: true,
      category: 'אבטחת מידע',
      tags: ['אבטחה', 'ניטור', 'שוטף']
    }
  ]
};

// Flatten all packages for search
const allPackages = Object.values(categories).flat();

export default function PricingList() {
  const [activeTab, setActiveTab] = useState(Object.keys(categories)[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    allPackages.forEach(pkg => pkg.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags);
  }, []);

  // Filter packages based on search, tags, and price range
  const filteredPackages = useMemo(() => {
    return allPackages.filter(pkg => {
      const matchesSearch = pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTags = selectedTags.length === 0 ||
        selectedTags.some(tag => pkg.tags.includes(tag));

      const price = parseInt(pkg.price.replace(/,/g, ''));
      const matchesPrice = price >= priceRange[0] && price <= priceRange[1];

      return matchesSearch && matchesTags && matchesPrice;
    });
  }, [searchQuery, selectedTags, priceRange]);

  // Get visible packages based on active tab or search
  const visiblePackages = searchQuery || selectedTags.length > 0
    ? filteredPackages
    : categories[activeTab];

  return (
    <section className="relative py-40 overflow-hidden" dir="rtl">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
      </div>

      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] left-[20%] w-[800px] h-[800px] bg-gradient-to-br from-primary-500/20 via-red-500/10 to-transparent rounded-full blur-3xl transform rotate-12" />
        <div className="absolute -bottom-[40%] right-[20%] w-[800px] h-[800px] bg-gradient-to-tl from-red-500/20 via-primary-500/10 to-transparent rounded-full blur-3xl transform -rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="text-center mb-16"
        >
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 mb-6 rounded-full 
                     bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                     border border-gray-200 dark:border-gray-700 
                     shadow-sm hover:shadow-md transition-shadow
                     dark:shadow-gray-800/30"
          >
            <span className="text-lg font-medium bg-gradient-to-r from-primary-600 to-red-500 bg-clip-text text-transparent">
              מחירים
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1">
            חבילות ומחירים
          </h2>
          <div className="w-[200px] h-1.5 bg-gradient-to-r from-red-700 to-red-300 rounded-full mx-auto mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            בחרו את החבילה המתאימה לכם
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="bg-white dark:bg-[#2d2d2d] rounded-2xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Search Input */}
              <div className="relative">
                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="חיפוש חבילות..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-200"
                />
              </div>

              {/* Price Range Filter */}
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600 dark:text-gray-300">טווח מחירים</label>
                <div className="flex gap-4">
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full accent-red-500"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-red-500"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                  <span>₪{priceRange[0].toLocaleString()}</span>
                  <span>₪{priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTags(
                      selectedTags.includes(tag)
                        ? selectedTags.filter(t => t !== tag)
                        : [...selectedTags, tag]
                    )}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedTags.includes(tag)
                        ? 'bg-red-500 text-white'
                        : 'bg-gray-100 dark:bg-[#3d3d3d] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#4d4d4d]'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex overflow-x-auto gap-2 pb-4">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeTab === category
                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                    : 'bg-white dark:bg-[#2d2d2d] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#3d3d3d]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visiblePackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`relative bg-white dark:bg-[#2d2d2d] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                  pkg.recommended ? 'ring-2 ring-red-500' : ''
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      מומלץ
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{pkg.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{pkg.description}</p>
                  <div className="flex items-baseline mb-8">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">₪{pkg.price}</span>
                    <span className="mr-2 text-gray-500 dark:text-gray-400">/חודש</span>
                  </div>
                  
                  <div className="space-y-4">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <FaCheck className="text-red-500 ml-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-8 w-full bg-red-500 text-white py-3 px-6 rounded-xl font-medium transition-all duration-200 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                    בחירת חבילה
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
