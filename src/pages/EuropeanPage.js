import React from 'react'
import { useNavigate } from 'react-router-dom'
import europeanmainimage from '../europeanpageimages/european-main-1.png'
import germanfood from '../europeanpageimages/german-wurst-1.png'
import spanishtortilla2 from '../europeanpageimages/spanish-tortilla.png'
import italianpizza1 from '../europeanpageimages/italian-pizza-1.png'
import switzerlandcheesefondue from '../europeanpageimages/switzerland-fondue-big.png'
import greecegyros1 from '../europeanpageimages/greece-gyros-big.png'
import swedishmeatballs2 from '../europeanpageimages/swedish-meatballs-big.png'
import belgianwaffle3 from '../europeanpageimages/belgium-waffles-big.png'
import frenchnicoise2 from '../europeanpageimages/french-nicoise-small.png'

export const EuropeanPage = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="container-fluid px-0  py-3">
          <h1 className="text-center py-3"><i id="european-title">European Cuisine</i></h1>
         <img id="europeanmain" className="img-fluid w-100 py-2" src={europeanmainimage}
          alt="european-cousine"/>
      
      <h1 className="text-center py-3"><i>Types of Food</i></h1>
      <div className="row row-cols-1 row-cols-sm-2 g-4 py-3 ">
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={germanfood} className="card-img-top" alt="italianpasta" />
      <div className="card-body">
        <h5 className="card-title">The German Wurst</h5>
        <p className="card-text">A sausage is a type of meat product usually made from ground meat.</p>
       <button onClick={() => navigate("/europeanpage/seemoregermanwurst")} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={spanishtortilla2} className="card-img-top" alt="americanburger" />
      <div className="card-body">
        <h5 className="card-title">The Spanish Tortilla</h5>
        <p className="card-text">It is an omelette made with eggs and potatoes, optionally including onion.</p>
        <button onClick={() => navigate("/europeanpage/seemorespanishtortilla")} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={italianpizza1} className="card-img-top" alt="indianchicken" />
      <div className="card-body">
        <h5 className="card-title">The Italian Pizza</h5>
        <p className="card-text"> usually round, flat base of leavened wheat-based dough topped with tomatoes.</p>
        <button onClick={() => navigate('/europeanpage/seemoreitalianpizza')} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={switzerlandcheesefondue} className="card-img-top" alt="frenchescargots" />
      <div className="card-body">
        <h5 className="card-title">The Switzerland Cheese Fongue</h5>
        <p className="card-text">with cheese and wine but no eggs, was published <br /> in 1875.</p>
        <button onClick={() => navigate('seemoreswitzerlandfondue')} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={greecegyros1} className="card-img-top" alt="frenchescargots" />
      <div className="card-body">
        <h5 className="card-title">The Greece Gyros</h5>
        <p className="card-text">it cooks was developed in Bursa in the 19th <br /> century.</p>
        <button onClick={() => navigate('seemoregreecegyros')} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={swedishmeatballs2} className="card-img-top" alt="frenchescargots" />
      <div className="card-body">
        <h5 className="card-title">The Swedish Meatball</h5>
        <p className="card-text">A meatball is ground meat rolled into a small ball, sometimes along with other ingredients.</p>
        <button onClick={() => navigate('seemoreswedishmeat')} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={belgianwaffle3} className="card-img-top" alt="frenchescargots" />
      <div className="card-body">
        <h5 className="card-title">The Belgian Waffles</h5>
        <p className="card-text">Belgian waffles were originally leavened with yeast, but baking powder is now often used.</p>
        <button onClick={() => navigate('seemorebelgianwaffles')} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={frenchnicoise2} className="card-img-top" alt="frenchescargots" />
      <div className="card-body">
        <h5 className="card-title">The French Nicoise</h5>
        <p className="card-text">It can be served either as a composed salad or as a tossed salad. Freshly cooked or canned tuna may be added.</p>
        <button onClick={() => navigate("seemorefrenchnicoise")} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}
