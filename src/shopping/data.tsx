import img1 from '../assets/1m.jpg';
import img2 from '../assets/2m.jpg';
import img3 from '../assets/3m.jpeg';
import img4 from '../assets/4m.jpg';
import img5 from '../assets/1.jpg';
import img6 from '../assets/2.jpg';
import img7 from '../assets/3.jpg';
import img8 from '../assets/4.jpg';
export interface FashionCategoryType {
  title: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  price1: string;  
  price2: string;  
  price3: string;  
  price4: string;  
  id1: string; 
  id2: string;
  id3: string;
  id4: string;
  description1: string;  
  description2: string;
  description3: string;
  description4: string;
}
export const FashionCategory:FashionCategoryType= {
  title: 'Gents Fashion',
  img1,
  img2,
  img3,
  img4,
  price1: '599 INR',
  price2: '699 INR',
  price3: '499 INR',
  price4: '999 INR',
  id1:'JEANS',
  id2:'SHIRTS',
  id3:'TROUSERS',
  id4:'ETHNIC',
  description1: 'Stylish blue jeans with a comfortable fit.',
  description2: 'Casual shirt perfect for everyday wear.',
  description3: 'Slim-fit trousers for a professional look.',
  description4: 'Traditional ethnic wear with a modern touch.',

}

export interface FashionSaleType {
  title: string;
  img5: string;
  img6: string;
  img7: string;
  img8: string;
  price5: string;  
  price6: string;  
  price7: string;  
  price8: string;  
  id5: string; 
  id6: string;
  id7: string;
  id8: string;
  description5: string;  
  description6: string;
  description7: string;
  description8: string;
}

export const FashionSale: FashionSaleType = {
  title: 'Ladies Fashion',
  img5,
  img6,
  img7,
  img8,
  price5: '499 INR',  
  price6: '599 INR',  
  price7: '799 INR',  
  price8: '549 INR',  
  id5:'JEANS',
  id6:'SHIRTS',
  id7:'TROUSERS',
  id8:'ETHNIC',
  description5: 'Stylish blue jeans with a comfortable fit.',
  description6: 'Casual shirt perfect for everyday wear.',
  description7: 'Slim-fit trousers for a professional look.',
  description8: 'Traditional ethnic wear with a modern touch.',

};


