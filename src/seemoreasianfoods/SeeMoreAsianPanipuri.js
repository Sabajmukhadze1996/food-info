import React from 'react'
import { useNavigate } from 'react-router-dom'
import panipurismall from '../asianpageimages/panipuri-small.png'


export const SeeMoreAsianPanipuri = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="card mb-3 w-100 ">
  <div className="row g-0 d-flex" id="card-info-row">
    <div className="col-md-4">
      <img src={panipurismall} style={{width: '320px'}}  className="img-fluid rounded-start" alt="italianspaghetty" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">The Indian Panipuri</h5>
        <p className="card-text">
        Panipuri consists of a round hollow puri (a deep-fried crisp flatbread),
         filled with a mixture of flavored water (known as imli pani), tamarind 
         chutney, chili powder, chaat masala, potato mash, onion or chickpeas.
        Fuchka (or fuska or puska) differs from panipuri in content and taste. 
        It uses spiced mashed potatoes as the filling. It is tangy rather than
         sweetish while the water is sour and spicy.
         Panipuri consists of a round hollow puri (a deep-fried crisp flatbread),
          filled with a mixture of flavored water (known as imli pani), tamarind
           chutney, chili powder, chaat masala, potato mash, onion or chickpeas.
         Fuchka (or fuska or puska) differs from panipuri in content and taste. 
         It uses spiced mashed potatoes as the filling. It is tangy rather than 
         sweetish while the water is sour and spicy.
        </p>
        <button onClick={() => navigate('/asianpage')} className="btn btn-dark">Go back</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
