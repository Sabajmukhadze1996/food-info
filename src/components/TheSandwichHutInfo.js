import React from 'react'
import { useNavigate } from 'react-router-dom'
import americanburgerhunt1 from '../americanfoodimages/burger-2.png'

export const TheSandwichHutInfo = () => {
  const navigate = useNavigate()
  return (
    <>
<div className="card mb-3 w-100 ">
  <div className="row g-0 d-flex" id="card-info-row">
    <div className="col-md-4">
      <img style={{width: '320px'}} src={americanburgerhunt1} className="img-fluid rounded-start" alt="americanburgerhunt" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">American Burger</h5>
        <p className="card-text">
        A hamburger (or burger for short) is a food consisting of fillings - 
        usually a patty of ground meat, typically beef—placed inside a sliced 
        bun or bread roll. Hamburgers are often served with cheese, lettuce, 
        tomato, onion, pickles, bacon, or chilis; condiments such as ketchup, 
        mustard, mayonnaise, relish, or a "special sauce", often a variation of 
        Thousand Island dressing; and are frequently placed on sesame seed buns. 
        A hamburger topped with cheese is called a cheeseburger.[1]
        The term burger can also be applied to the meat patty on its own, 
        especially in the United Kingdom, where the term patty is rarely used, 
        or the term can even refer simply to ground beef. Since the term 
        hamburger usually implies beef, for clarity burger may be prefixed 
        with the type of meat or meat substitute used, as in beef burger, 
        turkey burger, bison burger, portobello burger, or veggie burger.
        </p>
        <button onClick={() => navigate('/')} className="btn btn-dark">Go back</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
