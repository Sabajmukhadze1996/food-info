import React from 'react'
import { useNavigate } from 'react-router-dom'
import greecegyros from '../europeanpageimages/greece-gyros-small.png'

export const SeeMoreGreeceGyros = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="card mb-3 w-100 ">
  <div className="row g-0 d-flex" id="card-info-row">
    <div className="col-md-4">
      <img style={{width: '320px'}} src={greecegyros} className="img-fluid rounded-start" alt="italianspaghetty" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">The Greece Gyros</h5>
        <p className="card-text">
        Grilling a vertical spit of stacked meat and slicing it off as it cooks 
        was developed in Bursa[7] in the 19th century in the Ottoman Empire, and 
        called doner kebab (Turkish: döner kebap). Following World War II, doner 
        kebab made with lamb was present in Athens,[8][7] introduced by 
        immigrants from Anatolia and the Middle East,[6] possibly with the 
        population exchange between Greece and Turkey.[9] A distinct Greek 
        variation developed, normally made with pork and served with tzatziki, 
        which later became known as gyros.[10]
        By 1970, gyros wrapped sandwiches were already a popular fast food in 
        Athens, as well as in Chicago and New York City.[11][12][13] At that 
        time, although vertical rotisseries were starting to be mass-produced 
        in the US by Gyros Inc.[11] of Chicago, the stacks of meat were still 
        hand-made. There are several claimants to have introduced the first mass 
        produced gyros to the United States.
        </p>
        <button onClick={() => navigate('/europeanpage')} className="btn btn-dark">Go back</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
