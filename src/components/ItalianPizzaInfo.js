import React from 'react'
import { useNavigate } from 'react-router-dom'
import italianpizza2 from '../europeanfoodimages/italian-pizza-2.png'

export const ItalianPizzaInfo = () => {
    const navigate= useNavigate()
  return (
    <>
<div className="card mb-3 w-100 ">
  <div className="row g-0 d-flex" id="card-info-row">
    <div className="col-md-4">
      <img style={{width: '320px'}} src={italianpizza2} className="img-fluid rounded-start" alt="italianspaghetty" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Delicious Italian Pizza</h5>
        <p className="card-text">
        Pizza (Italian: [ˈpittsa], Neapolitan: [ˈpittsə]) is a dish of Italian 
        origin consisting of a usually round, flat base of leavened wheat-based 
        dough topped with tomatoes, cheese, and often various other ingredients 
        (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), 
        which is then baked at a high temperature, traditionally in a wood-fired 
        oven.[1] A small pizza is sometimes called a pizzetta. A person who makes
         pizza is known as a pizzaiolo.
        In Italy, pizza served in a restaurant is presented unsliced, and is 
        eaten with the use of a knife and fork.[2][3] In casual settings, 
        however, it is cut into wedges to be eaten while held in the hand.
        The term pizza was first recorded in the 10th century in a Latin 
        manuscript from the Southern Italian town of Gaeta in Lazio, on the 
        border with Campania.[4] Modern pizza was invented in Naples, and the 
        dish and its variants have since become popular in many countries
        </p>
        <button onClick={() => navigate('/')} className="btn btn-dark">Go back</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
