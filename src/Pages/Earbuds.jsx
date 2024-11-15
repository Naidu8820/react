import { Link } from 'react-router-dom';
import { Products } from '../Data/Earbudsdata'
import Header from '../Components/Header';
import { FaStar } from 'react-icons/fa';
function Earbuds() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className='flexdirection'>
        {
          Products.map((e) => (
            <Link to={`/earbuds/${e.id}`} key={e.id}>
              <div className='allborder'>
                <div key={e.id}>
                  <img src={e.image} alt={e.Brand} />
                  <p>{e.Brand}</p>
                  <p> price: ₹{e.price}</p>
                  <p className='rating'>{e.rating} {<FaStar />} <FaStar /> <FaStar /></p>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </>
  );
}

export default Earbuds