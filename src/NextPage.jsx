import React from 'react'
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useNavigate, Link  } from 'react-router-dom';


const NextPage = ()=>{

    const location = useLocation();
    const navigate = useNavigate();


    const selectedImagesFromState = location.state?.selectedImgs || [];

    return(
      <>
  
      <div>
         <h1 style={{textAlign:'center'}}>Selected Images</h1>
     
         <div className='gallery'>
           {
             selectedImagesFromState.map((image, index)=>(
              <img key={index} src={image} alt={index} className="pics img-fluid" />
             ))
           }
         </div>
        
      </div>
      <div>
        <Link to="/"></Link>
      </div>
      <div className='fixed-button-container-b d-flex justify-content-left mt-4 '>
            <Button variant='primary' onClick={() => navigate(-1)}>Go Back</Button>
            
      </div>
   
    </>
    )
   }

export default NextPage