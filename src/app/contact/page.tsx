import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import InquiryForm from './components/InquiryForm';
// import RegionalContacts from './components/RegionalContacts'; // REMOVED: Mock contact data
import OfficeLocation from './components/OfficeLocation';
import EmergencyContact from './components/EmergencyContact';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Contact Us - Chhajed Food Products Hub',
  description: 'Get in touch with Chhajed Food Products for B2B partnerships, bulk orders, distributor inquiries, quality concerns, and customer support. Multiple contact channels available with regional sales representatives across India.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <ContactHero />
        <ContactMethods />
        <div id="inquiry-form">
          <InquiryForm />
        </div>
        {/* <RegionalContacts /> */}
        <OfficeLocation />
        <EmergencyContact />
        <div id="faq">
          <FAQSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}