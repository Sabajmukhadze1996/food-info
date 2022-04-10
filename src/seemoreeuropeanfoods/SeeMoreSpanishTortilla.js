import React from 'react'
import { useNavigate } from 'react-router-dom'
import spanishtortilla1 from '../europeanpageimages/spanish-tortilla-1.png'

export const SeeMoreSpanishTortilla = () => {
  const navigate = useNavigate();
  return (
  <>
    <div className="card mb-3 w-100 ">
  <div className="row g-0 d-flex" id="card-info-row">
    <div className="col-md-4">
      <img style={{width: '320px'}} src={spanishtortilla1} className="img-fluid rounded-start" alt="italianspaghetty" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">The Spainsh Tortilla</h5>
        <p className="card-text">
        The first reference to the tortilla in Spanish is found in a Navarrese 
        document, as an anonymous "Mousehole's memorial" addressed to the Navarra
         region's court in 1817. It explains the sparse conditions of Navarre's
          farmers in contrast with those in Pamplona (the capital) and la Ribera
           (in southern Navarre). After listing the sparse food eaten by 
           highlanders, the next quote follows: "…two to three eggs in 
           tortilla for 5 or 6 [people] as our women do know how to make 
           it big and thick with fewer eggs, mixing potatoes, breadcrumbs 
           or whatever."[4]
        According to legend, during the siege of Bilbao, Carlist general 
        Tomás de Zumalacárregui invented the "tortilla de patatas" as an 
        easy, fast and nutritious dish to satisfy the scarcities of the 
        Carlist army. Although it remains unknown whether this is true, 
        it appears the tortilla started to spread during the early Carlist 
        Wars.[5]
        </p>
        <button onClick={() => navigate('/europeanpage')} className="btn btn-dark">Go back</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
