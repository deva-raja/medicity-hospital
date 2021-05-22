import { useDispatch } from 'react-redux';
import { changePage } from '../redux/personelPageSlice';

function SideBarComponent() {
  const dispatch = useDispatch();

  return (
    <div className='sidebar'>
      <button
        className='personel_sidebar_buttons'
        data-page='0'
        onClick={(e) => {
          dispatch(changePage(e.target.dataset.page));
        }}
      >
        Add Doctors
      </button>
      <button
        className='personel_sidebar_buttons'
        data-page='1'
        onClick={(e) => dispatch(changePage(e.target.dataset.page))}
      >
        Remove Doctors
      </button>
      <button
        className='personel_sidebar_buttons'
        data-page='2'
        onClick={(e) => dispatch(changePage(e.target.dataset.page))}
      >
        Messages
      </button>
    </div>
  );
}

export default SideBarComponent;
