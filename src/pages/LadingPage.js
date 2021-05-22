import GalleryComponent from '../components/GalleryComponent';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';
import FooterComponent from '../components/FooterComponent';

function LadingPage() {
  return (
    <div className='showcase'>
      <GalleryComponent />
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
}

export default LadingPage;
