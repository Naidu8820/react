import { Link } from 'react-router-dom';
import { Products } from '../Data/Earbudsdata'
import Header from '../Components/Header';

function Earbuds() {
  return (
    <div>
    <Header/>
    <div className='flexdirection'>
      {
        Products.map((e) => (
          <Link to={`/earbuds/${e.id}`} key={e.id}>
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

export default Earbuds