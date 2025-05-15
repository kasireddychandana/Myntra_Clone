import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Mainpage from './shopping/pages/Mainpage';
import WomenPage from './shopping/pages/WomenPage';
import MenPage from './shopping/pages/MenPage';
import KidsPage from './shopping/pages/KidsPage';
import BeautyPage from './shopping/pages/BeautyPage';
import Header from './shopping/components/Header';
import ItemDetails from './shopping/pages/ItemDetails';
import CartPage from './shopping/pages/CartPage';
import SignInSignUp from './shopping/pages/SignInSignUp';
const App=()=> {
  return (
    <BrowserRouter>
    <Header/>
    <nav style={{margin:'1rem'}}>
      <Link to="/"></Link>
      <Link to="/women"></Link>
      <Link to="/men"></Link>
      <Link to="/kids"></Link>
      <Link to="/beauty"></Link>
      <Link to="/signin/signup"></Link>
      <Link to="/cart"></Link>
    </nav>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/beauty" element={<BeautyPage />} />
        <Route path="/item/:id" element={<ItemDetails />}/>
        <Route path="/signinsignup" element={< SignInSignUp />} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
