import React from 'react'
import { useNavigate } from 'react-router-dom'
import cheesefondue from '../europeanpageimages/switzerland-fondue-small.png'

export const SeeMoreSwitzerlandFondue = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="card mb-3 w-100 ">
  <div className="row g-0 d-flex" id="card-info-row">
    <div className="col-md-4">
      <img style={{width: '320px'}} src={cheesefondue} className="img-fluid rounded-start" alt="italianspaghetty" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">The Switzerlan Cheese-Fondue</h5>
        <p className="card-text">
        The earliest known recipe for the modern form of cheese fondue comes 
        from a 1699 book published in Zürich, under the name "Käss mit Wein zu 
        kochen" 'to cook cheese with wine'.[9] It calls for grated or cut-up 
        cheese to be melted with wine, and for bread to be dipped in it.
        However, the name "cheese fondue", until the late 19th century, referred
         to a dish composed of eggs and cheese, as in la Chapelle's 1735 Fonduë 
         de Fromage, aux Truffes Fraiches;[7] it was something between scrambled
          eggs with cheese and a cheese soufflé.[10] Brillat-Savarin wrote in 
          1834 that it is "nothing other than scrambled eggs with cheese".[11] 
          Variations included cream ("à la genevoise") and truffles ("à la 
          piémontaise") in addition to eggs, as well as what is now called "
          raclette" ("fondue valaisanne").[12]
        The first known recipe for the modern cheese fondue under that name, 
        with cheese and wine but no eggs, was published in 1875, and was already 
        presented as a Swiss national dish.
        </p>
        <button onClick={() => navigate('/europeanpage')} className="btn btn-dark">Go back</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}

