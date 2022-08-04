import React from 'react'
import { useNavigate } from 'react-router-dom'
import pizza3 from '../europeanpageimages/italian-pizza-2.png';

export const SeeMoreItalianPizza = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="card mb-3 w-100 ">
  <div className="row g-0 d-flex" id="card-info-row">
    <div className="col-md-4">
      <img style={{width: '320px'}} src={pizza3} className="img-fluid rounded-start" alt="italianspaghetty" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">The Italian Pizza</h5>
        <p className="card-text">
        The term pizza was first recorded in the 10th century in a Latin 
        manuscript from the Southern Italian town of Gaeta in Lazio, on the 
        border with Campania.[4] Modern pizza was invented in Naples, and the 
        dish and its variants have since become popular in many countries.[5] 
        It has become one of the most popular foods in the world and a common 
        fast food item in Europe, North America and Australasia; available at 
        pizzerias (restaurants specializing in pizza), restaurants offering 
        Mediterranean cuisine, via pizza delivery, and as street food.[5] 
        Various food companies sell ready-baked pizzas, which may be frozen, 
        in grocery stores, to be reheated in a home oven.
        In 2017, the world pizza market was US$128 billion, and in the US it 
        was $44 billion spread over 76,000 pizzerias.[6] Overall, 13% of the 
        U.S. population aged 2 years and over consumed pizza on any given day.
        </p>
        <button onClick={() => navigate('/europeanpage')} className="btn btn-dark">Go back</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
