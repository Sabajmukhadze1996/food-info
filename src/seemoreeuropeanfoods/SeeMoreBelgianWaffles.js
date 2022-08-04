import React from 'react'
import { useNavigate } from 'react-router-dom'
import belgianwaffles from '../europeanpageimages/belgium-waffles-small.png'

export const SeeMoreBelgianWaffles = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="card mb-3 w-100 ">
  <div className="row g-0 d-flex" id="card-info-row">
    <div className="col-md-4">
      <img style={{width: '320px'}} src={belgianwaffles} className="img-fluid rounded-start" alt="italianspaghetty" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">The Belgian Waffles</h5>
        <p className="card-text">
        Outside of Belgium, Belgian waffles are a variety of waffle with a 
        lighter batter, larger squares, and deeper pockets than American 
        waffles. Belgian waffles were originally leavened with yeast, but
         baking powder is now often used. They are often eaten as a 
         breakfast food; toppings vary from whipped cream, confectioners 
         sugar, soft fruit, and chocolate spread, to syrup and butter or
          margarine. They may also be served with vanilla ice cream and 
          fresh fruit (such as strawberries) as a dessert.
        In Belgium itself, there are several kinds of waffle, including 
        the Brussels waffle and the Liège waffle.
        </p>
        <button onClick={() => navigate('/europeanpage')} className="btn btn-dark">Go back</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
