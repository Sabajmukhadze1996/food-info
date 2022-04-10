import React from 'react'
import { useNavigate } from 'react-router-dom'
import sushi2 from '../asianfoodimages/sushi-2.png'

export const JapaneseSushiInfo = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="card mb-3 w-100 ">
      <div className="row g-0 d-flex" id="card-info-row">
        <div className="col-md-4">
          <img style={{width: '320px'}} src={sushi2} className="img-fluid rounded-start" alt="italianspaghetty" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Japanese Sushi</h5>
            <p className="card-text">
            The inventor of modern sushi is believed to be Hanaya Yohei, who 
            invented nigiri-zushi, a type of sushi most known today, in which 
            seafood is placed on hand-pressed vinegared rice, around 1824 in 
            the Edo period (1603－1867). It was the fast food of the chōnin 
            class in the Edo period.[2][3][4]
            Sushi is traditionally made with medium-grain white rice, though 
            it can be prepared with brown rice or short-grain rice. It is very 
            often prepared with seafood, such as squid, eel, yellowtail, salmon,
             tuna or imitation crab meat. Many types of sushi are vegetarian. 
             It is often served with pickled ginger (gari), wasabi, and soy sauce. Daikon radish or pickled daikon (takuan) are popular garnishes for the dish.
            Sushi is sometimes confused with sashimi, a related dish in Japanese
             cuisine that consists of thinly sliced raw fish or occasionally 
             meat.[5]
            </p>
            <button onClick={() => navigate('/')} className="btn btn-dark">Go back</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
