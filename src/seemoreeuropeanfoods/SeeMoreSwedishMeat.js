import React from 'react'
import { useNavigate } from 'react-router-dom'
import swedishmeatballs from '../europeanpageimages/swedish-meatballs-small.png'

export const SeeMoreSwedishMeat = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="card mb-3 w-100 ">
  <div className="row g-0 d-flex" id="card-info-row">
    <div className="col-md-4">
      <img style={{width: '320px'}} src={swedishmeatballs} className="img-fluid rounded-start" alt="italianspaghetty" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">The Swedish Meatballs</h5>
        <p className="card-text">
        A meatball is ground meat rolled into a small ball, sometimes along with 
        other ingredients, such as bread crumbs, minced onion, eggs, butter, and 
        seasoning.[1] Meatballs are cooked by frying, baking, steaming, or 
        braising in sauce. There are many types of meatballs using different 
        types of meats and spices. The term is sometimes extended to meatless 
        versions based on vegetables or fish; the latter are also commonly known 
        as fishballs.
        The ancient Roman cookbook Apicius included many meatball-type recipes.[2]
        Early recipes included in some of the earliest known Persian cookbooks generally 
        feature seasoned lamb rolled into orange-sized balls and glazed with egg yolk
         and sometimes saffron. This method was taken to the West and is referred to
          as gilding. Many regional variations exist, notable among them the 
          unusually large kufte Tabrīzī, from Iran's North-Western region, 
          having an average diameter of 20 centimetres (7.9 in).
        </p>
        <button onClick={() => navigate('/europeanpage')} className="btn btn-dark">Go back</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
