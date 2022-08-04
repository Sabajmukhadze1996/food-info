import React from 'react'
import { useNavigate } from 'react-router-dom'
import kimchismall from '../asianpageimages/kimchi-small.png'


export const SeeMoreKoreanKimchi = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="card mb-3 w-100 ">
  <div className="row g-0 d-flex" id="card-info-row">
    <div className="col-md-4">
      <img src={kimchismall} style={{width: '320px'}}  className="img-fluid rounded-start" alt="italianspaghetty" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">The Korean Kimchi</h5>
        <p className="card-text">
        Kimchi is a traditional Korean side dish of salted and fermented 
        vegetables, such as napa cabbage and Korean radish. A wide selection 
        of seasonings are used, including gochugaru (Korean chili powder), 
        spring onions, garlic, ginger, and jeotgal (salted seafood), etc. Kimchi is also used in a variety of soups and stews. As a staple food in Korean cuisine, it is eaten as a side dish with almost every Korean meal.[3]
        There are hundreds of different types of kimchi made with different 
        vegetables as the main ingredients.[2] Traditionally, winter kimchi, 
        called kimjang, was stored in large earthenware fermentation vessels, 
        called onggi, in the ground to prevent freezing during the winter 
        months and to keep it cool enough to slow down the fermentation process 
        during summer months.[4] The vessels are also kept outdoors in special 
        terraces called jangdokdae. In contemporary times, household kimchi 
        refrigerators are more commonly used.
        </p>
        <button onClick={() => navigate('/asianpage')} className="btn btn-dark">Go back</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
