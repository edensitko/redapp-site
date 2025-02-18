export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
  image: string;
  category: string;
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'פיתוח אתרים',
    shortDescription: 'פיתוח אתרים מותאמים אישית עם טכנולוגיות מתקדמות',
    fullDescription: 'אנו מתמחים בפיתוח אתרים מודרניים ומותאמים אישית, תוך שימוש בטכנולוגיות החדישות ביותר. הצוות שלנו מקפיד על סטנדרטים גבוהים של קוד נקי, ביצועים מהירים וחווית משתמש מעולה.',
    icon: 'FaCode',
    features: [
      'עיצוב מותאם אישית',
      'תאימות למובייל',
      'אופטימיזציה למנועי חיפוש',
      'אבטחה מתקדמת',
      'תמיכה טכנית מתמשכת'
    ],
    benefits: [
      'הגדלת נוכחות דיגיטלית',
      'שיפור חווית משתמש',
      'העלאת שיעור המרה',
      'תחזוקה קלה',
      'ביצועים מהירים'
    ],
    process: [
      {
        title: 'אפיון ותכנון',
        description: 'הגדרת צרכים, מטרות ודרישות הפרויקט'
      },
      {
        title: 'עיצוב',
        description: 'יצירת עיצוב מודרני ומותאם למותג'
      },
      {
        title: 'פיתוח',
        description: 'בניית האתר עם טכנולוגיות מתקדמות'
      },
      {
        title: 'בדיקות',
        description: 'בדיקות מקיפות ואופטימיזציה'
      }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80',
    category: 'development'
  },
  {
    id: 'ui-ux-design',
    title: 'עיצוב UI/UX',
    shortDescription: 'עיצוב ממשק משתמש וחווית משתמש מתקדמים',
    fullDescription: 'צוות המעצבים שלנו מתמחה ביצירת ממשקים אינטואיטיביים וחוויות משתמש מרשימות. אנו משלבים אסתטיקה עם פונקציונליות כדי ליצור מוצרים דיגיטליים שמשפרים את המעורבות והשימור של המשתמשים.',
    icon: 'FaPaintBrush',
    features: [
      'מחקר משתמשים',
      'אפיון ממשקים',
      'עיצוב ויזואלי',
      'פרוטוטייפינג',
      'בדיקות שימושיות'
    ],
    benefits: [
      'שיפור שביעות רצון משתמשים',
      'הגדלת זמן שהייה באתר',
      'הפחתת נטישה',
      'העלאת מעורבות',
      'חיזוק המותג'
    ],
    process: [
      {
        title: 'מחקר',
        description: 'הבנת צרכי המשתמשים והעסק'
      },
      {
        title: 'אפיון',
        description: 'תכנון מבנה וזרימת המידע'
      },
      {
        title: 'עיצוב',
        description: 'יצירת ממשק ויזואלי מרשים'
      },
      {
        title: 'בדיקות',
        description: 'וידוא שימושיות ונוחות'
      }
    ],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    category: 'design'
  },
  {
    id: 'ecommerce',
    title: 'חנויות אונליין',
    shortDescription: 'הקמת חנויות מקוונות מתקדמות ומאובטחות',
    fullDescription: 'אנו מספקים פתרונות מסחר אלקטרוני מקיפים שמאפשרים לעסקים למכור מוצרים ושירותים באופן מקוון. הפתרונות שלנו כוללים ניהול מלאי, עגלת קניות, מערכת תשלומים מאובטחת ועוד.',
    icon: 'FaShoppingCart',
    features: [
      'ניהול מלאי מתקדם',
      'מערכת תשלומים מאובטחת',
      'ניהול הזמנות',
      'דוחות ואנליטיקס',
      'אינטגרציה עם ספקים'
    ],
    benefits: [
      'הגדלת מכירות',
      'הרחבת קהל לקוחות',
      'ייעול תהליכים',
      'שיפור שירות לקוחות',
      'נתונים בזמן אמת'
    ],
    process: [
      {
        title: 'אפיון',
        description: 'הגדרת צרכי החנות והמוצרים'
      },
      {
        title: 'עיצוב',
        description: 'עיצוב ממשק החנות והקטלוג'
      },
      {
        title: 'פיתוח',
        description: 'הקמת מערכת המסחר והתשלומים'
      },
      {
        title: 'השקה',
        description: 'בדיקות סופיות והשקת החנות'
      }
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    category: 'ecommerce'
  }
];
