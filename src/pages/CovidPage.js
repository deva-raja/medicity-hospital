import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

function CovidPage() {
  return (
    <>
      <div className='covidPage_showcase defaultPage_showcase'>
        <HeaderComponent />
        <div className='content'>covid shots</div>
        <FooterComponent />
      </div>
    </>
  );
}
export default CovidPage;
