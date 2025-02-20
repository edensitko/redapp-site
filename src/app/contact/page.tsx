import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'צור קשר | RedApp',
  description: 'צור קשר עם RedApp - נשמח לשמוע ממך ולעזור לך להגשים את החזון הדיגיטלי שלך',
};

export default function ContactPage() {
  return <ContactForm />;
}
