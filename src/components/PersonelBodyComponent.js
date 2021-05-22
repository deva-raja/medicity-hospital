import { useSelector } from 'react-redux';

function PersonelBodyComponent() {
  const page = useSelector((state) => state.personel.page);

  return (
    <div>
      {page === 0 && <p>page 1</p>}
      {page === 1 && <p>page 2</p>}
      {page === 2 && <p>page 3</p>}
      <p>last tesing</p>
    </div>
  );
}

export default PersonelBodyComponent;
