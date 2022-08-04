import React from 'react'
import { useNavigate } from 'react-router-dom'
import frenchnicoise1 from '../europeanpageimages/french-nicoise-big.png'

export const SeeMoreFrenchNicoise = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="card mb-3 w-100 ">
  <div className="row g-0 d-flex" id="card-info-row">
    <div className="col-md-4">
      <img style={{width: '320px'}} src={frenchnicoise1} className="img-fluid rounded-start" alt="italianspaghetty" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">The French Nicoise Salad</h5>
        <p className="card-text">
        Salade niçoise (French pronunciation: ​[saˈlad niˈswaz]), salada 
        nissarda in the Niçard dialect of the Occitan language, insalata 
        nizzarda in Italian, is a salad that originated in the French city 
        of Nice. It is traditionally made of tomatoes, hard-boiled eggs, 
        Niçoise olives and anchovies or tuna, dressed with olive oil, or 
        in some historical versions, a vinaigrette. It has been popular 
        worldwide since the early 20th century, and has been prepared and 
        discussed by many chefs. Delia Smith called it "one of the best 
        combinations of salad ingredients ever invented"[1] and Gordon Ramsay 
        said that "it must be the finest summer salad of all".[2]
        It can be served either as a composed salad or as a tossed salad. 
        Freshly cooked or canned tuna may be added.
        </p>
        <button onClick={() => navigate('/europeanpage')} className="btn btn-dark">Go back</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
