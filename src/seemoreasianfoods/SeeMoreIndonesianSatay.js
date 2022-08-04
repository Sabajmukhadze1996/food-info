import React from 'react'
import { useNavigate } from 'react-router-dom'
import sataysmall from '../asianpageimages/satay-small.png'


export const SeeMoreIndonesianSatay = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="card mb-3 w-100 ">
  <div className="row g-0 d-flex" id="card-info-row">
    <div className="col-md-4">
      <img src={sataysmall} style={{width: '320px'}}  className="img-fluid rounded-start" alt="italianspaghetty" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">The Indonesian Satay</h5>
        <p className="card-text">
        Satay may consist of diced or sliced chicken, goat, mutton, beef, pork, 
        fish, other meats, or tofu; bamboo skewers are often used, while rustic
         style of preparations employ skewers from the midrib of the coconut 
         palm frond. These are grilled or barbecued over a wood or charcoal 
         fire, then served with various spicy seasonings. Satay can be served 
         in various sauces; however, most often they are served in a combination 
         of soy and peanut sauce.[20] Hence, peanut sauce is often called satay 
         sauce.[21] It is popular as street food,[2] and it can be obtained 
         from a travelling satay vendor, from a street-side tent-restaurant, 
         in an upper-class restaurant, or at traditional celebration feasts.
        Close analogues are yakitori from Japan, kǎoròu chuàn from China, 
        seekh kebab from the Indian Subcontinent, shish kebab from Turkey 
        and the Middle East, shashlik from the Caucasus, and sosatie from 
        South Africa. It is listed at number 14 on World's 50 most delicious 
        foods readers' poll compiled by CNN Go in 2011.
        </p>
        <button onClick={() => navigate('/asianpage')} className="btn btn-dark">Go back</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
