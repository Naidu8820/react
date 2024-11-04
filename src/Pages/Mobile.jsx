import { Link } from 'react-router-dom';
import { Products } from '../Data/Mobiledata'
import Header from '../Components/Header';

function Mobile() {
  return (
      <div>
      <Header/>
    <div className='flexdirection'>
      {
        Products.map((e) => (
          <Link to={`/mobile/${e.id}`} key={e.id}>
            <div className='allborder'>
              <div key={e.id}>
                <img src={e.image} alt={e.Brand} />
                <p>{e.Brand}</p>
                <p>{e.price}</p>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
    </div>
  );
}

export default Mobile