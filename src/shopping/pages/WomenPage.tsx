
import image1 from '../../assets/womenbanner.jpg'; 
import './WomenPage.css' 
const WomenPage: React.FC = () => {
  return (
    <div>
       <img className='womens' src={image1} alt="women's fashion banner" />
    </div>
  );
};
export default WomenPage;