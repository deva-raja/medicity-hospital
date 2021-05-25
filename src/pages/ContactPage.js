import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import ContactBodyComponent from '../components/ContactBodyComponent';

function ContactPage() {
  return (
    <>
      <div className='personelPage_showcase'>
        <HeaderComponent />
        <div className='content'>
          <ContactBodyComponent />
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

export default ContactPage;
