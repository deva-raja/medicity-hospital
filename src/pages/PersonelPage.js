import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import SideBarComponent from '../components/SideBarComponent';
import PersonelBodyComponent from '../components/PersonelBodyComponent';

function PersonelPage() {
  return (
    <>
      <div className='personelPage_showcase'>
        <HeaderComponent />
        <div className='content'>
          <SideBarComponent />
          <PersonelBodyComponent />
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

export default PersonelPage;
