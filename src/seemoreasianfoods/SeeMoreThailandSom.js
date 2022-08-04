import React from 'react'
import { useNavigate } from 'react-router-dom'
import thailandsmall from '../asianpageimages/thailand-small.png'


export const SeeMoreThailandSom = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="card mb-3 w-100 ">
  <div className="row g-0 d-flex" id="card-info-row">
    <div className="col-md-4">
      <img src={thailandsmall} style={{width: '320px'}}  className="img-fluid rounded-start" alt="italianspaghetty" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">The Som Tum Thai from Thailand</h5>
        <p className="card-text">
        Papaya and chili peppers were introduced to Southeast Asia by the 
        Spanish and Portuguese explorers in the 17th century from the Americas.
        [8] Although it is unknown when papayas entered Laos specifically, 
        they had already been integrated into Lao culture by the time of 
        Jean-Baptiste Pallegoix's visit in 1836.[9]
        Thai historian Sujit Wongthes has speculated that the green papaya 
        salad originated in the communities of ethnic Chinese–Lao settlers 
        living in the Chao Phraya plains of what is now Central Thailand—where 
        it became known as som tam—during the early Rattanakosin period 
        (late 18th to early 19th centuries). The new dish, along with the 
        papaya, then spread to today's Northeast Thailand following the 
        construction of the Northeastern railway line during the turn of 
        the 19th–20th centuries, and became more popular after the opening 
        of Mittraphap Road in 1957 helped bring new papaya cultivars into 
        the region. The dish has since become widely adopted by the ethnic 
        Lao people of both Isan and Laos.
        </p>
        <button onClick={() => navigate('/asianpage')} className="btn btn-dark">Go back</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
