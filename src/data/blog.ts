export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'web-design-trends-2024',
    slug: 'web-design-trends-2024',
    title: 'טרנדים בעיצוב אתרים לשנת 2024',
    content: `
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <p>
          שנת 2024 מביאה איתה חידושים מרתקים בעולם עיצוב האתרים. הטרנדים החדשים משלבים טכנולוגיה מתקדמת עם אסתטיקה מינימליסטית, ויוצרים חוויית משתמש עשירה ומרתקת.
        </p>
        
        <h2>מינימליזם מתקדם</h2>
        <p>
          המינימליזם ממשיך להוביל, אך הפעם עם טוויסט מודרני. שילוב של צבעים רכים, טיפוגרפיה נקייה ומרווחים אוויריים יוצר חוויה נעימה ואלגנטית.
        </p>

        <h2>אנימציות מיקרו</h2>
        <p>
          אנימציות קטנות ועדינות מוסיפות חיים לממשק המשתמש. הן מספקות משוב ויזואלי ויוצרות תחושה של תגובתיות ודינמיות.
        </p>

        <h2>עיצוב מותאם אישית</h2>
        <p>
          פרסונליזציה הופכת לחלק בלתי נפרד מחוויית המשתמש. אתרים מתאימים את עצמם להעדפות המשתמש ומציגים תוכן רלוונטי.
        </p>
      </div>
    `,
    excerpt: 'סקירה מקיפה של הטרנדים החמים בעיצוב אתרים לשנת 2024, כולל טכניקות חדשניות ודוגמאות מעשיות.',
    date: '2024-02-15',
    author: 'יעל כהן',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    category: 'עיצוב',
    tags: ['עיצוב', 'טרנדים', '2024', 'UX/UI']
  },
  {
    id: 'seo-optimization-guide',
    slug: 'seo-optimization-guide',
    title: 'מדריך מקיף לאופטימיזציה למנועי חיפוש',
    content: `
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <p>
          אופטימיזציה למנועי חיפוש (SEO) היא מרכיב קריטי בהצלחת כל אתר אינטרנט. במדריך זה נסקור את האסטרטגיות המובילות לשיפור הדירוג בגוגל.
        </p>

        <h2>מחקר מילות מפתח</h2>
        <p>
          מחקר מילות מפתח הוא הבסיס לכל אסטרטגיית SEO מוצלחת. נלמד כיצד לזהות את מילות המפתח הרלוונטיות ביותר לעסק שלכם.
        </p>

        <h2>אופטימיזציה טכנית</h2>
        <p>
          נסקור את ההיבטים הטכניים החשובים, כולל מהירות טעינה, תאימות למובייל, וארכיטקטורת אתר נכונה.
        </p>

        <h2>בניית קישורים</h2>
        <p>
          אסטרטגיות לבניית פרופיל קישורים איכותי שיעזור לשפר את הדירוג בתוצאות החיפוש.
        </p>
      </div>
    `,
    excerpt: 'מדריך מעמיק לאופטימיזציה למנועי חיפוש, כולל טיפים מעשיים וכלים מומלצים לשיפור הדירוג בגוגל.',
    date: '2024-02-10',
    author: 'דוד לוי',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    category: 'SEO',
    tags: ['SEO', 'אופטימיזציה', 'מנועי חיפוש', 'דירוג']
  },
  {
    id: 'react-performance-tips',
    slug: 'react-performance-tips',
    title: 'טיפים לשיפור ביצועים באפליקציות React',
    content: `
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <p>
          ביצועים הם מרכיב קריטי בהצלחת אפליקציות React. במאמר זה נסקור טכניקות מתקדמות לאופטימיזציה וטיפים לשיפור המהירות.
        </p>

        <h2>מימו ושימוש ב-useMemo</h2>
        <p>
          נלמד כיצד להשתמש נכון ב-useMemo ו-useCallback כדי למנוע רינדורים מיותרים ולשפר את ביצועי האפליקציה.
        </p>

        <h2>Code Splitting</h2>
        <p>
          טכניקות לפיצול הקוד ולטעינה מושכלת של קומפוננטות רק כשצריך אותן.
        </p>

        <h2>אופטימיזציה של תמונות</h2>
        <p>
          שיטות לטיפול נכון בתמונות ב-React, כולל שימוש ב-lazy loading וטכניקות דחיסה.
        </p>
      </div>
    `,
    excerpt: 'טיפים מעשיים לשיפור ביצועים באפליקציות React, כולל דוגמאות קוד ושיטות עבודה מומלצות.',
    date: '2024-02-05',
    author: 'רון ישראלי',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    category: 'פיתוח',
    tags: ['React', 'ביצועים', 'אופטימיזציה', 'פיתוח']
  }
];

// Export featured posts (most recent 3 posts)
export const featuredPosts = blogPosts.sort((a, b) => 
  new Date(b.date).getTime() - new Date(a.date).getTime()
).slice(0, 3);
