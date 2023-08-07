import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NextPage from './NextPage';


import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
import img7 from './images/img7.jpg'
import img8 from './images/img8.jpg'
import img9 from './images/img9.jpg'
import img10 from './images/img10.jpg'
import img11 from './images/img11.jpg'
import img12 from './images/img12.jpg'



function App() {
 const imageList = [ img1, img2, img3, img4, img5,img6,img7,img8,img9,img10,img11,img12];
 const [selectedImgs, setSelectedImgs] = useState([]);
 const [showNextPage, setShowNextPage] = useState(false);

 const navigate =useNavigate();

 
//  const NextPage = ()=>{

//   return(
//     <>

//     <div>
//        <h2>Selected Images</h2>
   
//        <div className='gallery'>
//          {
//            selectedImgs.map((image, index)=>(
//             <img key={index} src={image} alt={index} className="pics img-fluid" />
//            ))
//          }
//        </div>
      
//     </div>
//     <div className='fixed-button-container-b d-flex justify-content-left mt-4 '>
//           <Button variant='primary' onClick={handleBackButtonClick}>Back</Button>
//     </div>
 
//   </>
//   )
//  }

//  const handleImageSelection =(e)=>{
//   setSelectedImgs(e.target.value);
//  }

const handleImageSelection = (e) => {
  const imageValue = e.target.value;
  setSelectedImgs((prevSelectedImgs) => {
    if (prevSelectedImgs.includes(imageValue)) {
      return prevSelectedImgs.filter((image) => image !== imageValue);
    } else {
      return [...prevSelectedImgs, imageValue];
    }
  });
};

const handleNextPageButton=()=>{
  setShowNextPage(true);
  navigate('/selected-images', { state: { selectedImgs } });

}


const handleBackButtonClick = () => {
  navigate('/');
  setSelectedImgs([]);
};
 



  return (
    <>
   
      <div >
        {showNextPage ? (
          <NextPage 
          selectedImgs={selectedImgs}
          handleBackButtonClick = {handleBackButtonClick}
          />
        ) : (
          <div>
            <h1 style={{textAlign:'center'}}>Image Selector</h1>  
            <div  className='gallery'>
              {imageList.map((image, index) => (
                <label className='pics' key={index}>
                  <Form.Check>                  
                  <img src={image} alt={`Img ${index}`} className=" pics img-fluid" style={{width:'100%'}}/>
                  <input type="checkbox" value={image} onChange={handleImageSelection} /></Form.Check>
                </label>
              ))}
            </div>

      
          <div className='fixed-button-container d-flex justify-content-end mt-4'>
              <Button variant='primary' onClick={handleNextPageButton} > Next Page </Button>
            </div>
         
            
          </div>
        )}
      </div>


    </>
   
  );
}

export default App;
