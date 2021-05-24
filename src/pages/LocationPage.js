import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import MapComponent from '../components/MapComponent';

function LocationPage() {
  return (
    <>
      <div className='locationPage_showcase'>
        <HeaderComponent />
        <MapComponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default LocationPage;
