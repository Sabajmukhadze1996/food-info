import React from 'react'
import { useNavigate } from 'react-router-dom'
import momossmall from '../asianpageimages/momos-small.png'


export const SeeMoreNepalMomos = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="card mb-3 w-100 ">
  <div className="row g-0 d-flex" id="card-info-row">
    <div className="col-md-4">
      <img src={momossmall} style={{width: '320px'}}  className="img-fluid rounded-start" alt="italianspaghetty" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">The Momos From Nepal</h5>
        <p className="card-text">
           As for the Himalayan momo, the dish is believed to have spread to 
           Nepal along with the influx of the Tibetan diaspora. Since this dish 
           was initially popular among the Newar community of the Kathmandu 
           Valley of Nepal, one prevalent belief is that travelling Nepali 
           Newar merchants took the recipe of momo from Tibet where the 
           Nepali Newar Merchants used to go to trade and brought it back 
           home to Nepal.[4] In Tibet, the filling of the dish was typically 
           meat, such as yak and occasionally potatoes and cheese. However, 
           after arriving in the Indo-Gangetic Plains, the momo was made 
           vegetarian in the modern era to feed the large population of 
           vegetarian Hindus.[1] Unproven, but substantiated by the dates 
           and references to momo in colloquial references, the civil war 
           in Nepal pushed out the Nepali diaspora to seek a livelihood in 
           India, which further increased to the prevalence of Himalayan 
           style momo in the southern half of India.
        </p>
        <button onClick={() => navigate('/asianpage')} className="btn btn-dark">Go back</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
