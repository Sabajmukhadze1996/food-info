import React from 'react'
import { useNavigate } from 'react-router-dom'
import crabsmall from '../asianpageimages/crab-small.png'


export const SeeMoreSingaporeanCrab = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="card mb-3 w-100 ">
  <div className="row g-0 d-flex" id="card-info-row">
    <div className="col-md-4">
      <img src={crabsmall} style={{width: '320px'}}  className="img-fluid rounded-start" alt="italianspaghetty" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">The Singaporean Chilli Crab</h5>
        <p className="card-text">
        Chilli crab (Chinese: 辣椒螃蟹; pinyin: làjiāo pángxiè; Malay: Ketam cili)
         is a Southeast Asian seafood dish originating from Singapore in the 
         1960s. It's widely associated as the national cuisines of both Malaysia 
         and Singapore. Mud crabs are commonly used and are stir-fried in a 
         semi-thick, sweet and savoury tomato-and-chilli-based sauce.
        In 1956, Cher Yam Tian and her husband Lim Choo Ngee began selling 
        stir-fried crabs mixed with bottled chilli and tomato sauce from a 
        pushcart. This was an improvised recipe; the original one did not 
        involve bottled chilli sauce.[1] A successful business selling this 
        dish prompted the establishment of a restaurant, Palm Beach Seafood,
         along Upper East Coast Road.[1] The version most widespread today 
         was created by Hooi Kok Wah in the 1960s, one of four famous Singapore 
         chefs during the era.
        </p>
        <button onClick={() => navigate('/asianpage')} className="btn btn-dark">Go back</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
