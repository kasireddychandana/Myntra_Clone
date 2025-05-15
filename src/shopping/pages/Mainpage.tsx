import React from 'react';
import Footer from '../components/Footer'
import Banner from '../components/Banner';
import { FashionCategory, FashionSale } from '../data';
import DisplayCategory from '../components/DisplayCategory';
import DisplayCategory2 from '../components/DisplayCategory2';
const Mainpage: React.FC = () => {
  return (
    <div>
      <main>
        <Banner />
        <div >
        <DisplayCategory item={FashionCategory} />
        <DisplayCategory2 item={FashionSale} />
        </div>
      </main>
      <Footer/>
    </div>
  );
};
export default Mainpage;