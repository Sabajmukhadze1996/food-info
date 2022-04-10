import React from 'react'
import { useNavigate } from 'react-router-dom'
import spanishpaella1 from '../europeanfoodimages/spanish-paella-2.png'


export const SpanishPaellaInfo = () => {
    const navigate= useNavigate()
    return (
      <>
  <div className="card mb-3 w-100 ">
    <div className="row g-0" id="card-info-row">
      <div className="col-md-4">
        <img style={{width: '320px'}} src={spanishpaella1} className="img-fluid rounded-start" alt="italianspaghetty" />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">The Spanish Paella</h5>
          <p className="card-text">
          Paella (/paɪˈɛlə/,[1] /pɑːˈeɪjə/,[2] py-EL-ə, pah-AY-yə, Valencian:
           [paˈeʎa], Spanish: [paˈeʎa]) is a rice dish originally from Valencia.
            While it is commonly viewed by non-Spaniards as Spain's national 
            dish, Spaniards almost unanimously consider it to be a dish from 
            the Valencian region. Valencians, in turn, regard paella as one of 
            their identifying symbols.[3][4] It is one of the best-known dishes 
            in Spanish cuisine.
          The dish takes its name from the wide, shallow traditional pan used
          to cook the dish on an open fire, paella being the word for a frying 
          pan in Valencia's regional language. As a dish, it may have ancient 
          roots, but in its modern form it is traced back to the mid-19th century,
           in the rural area around the Albufera lagoon adjacent to the city of 
           Valencia, on the Mediterranean coast of Spain.[5]
          Paella valenciana is the traditional paella of the Valencia region, 
          believed to be the original recipe.
          </p>
          <button onClick={() => navigate('/')} className="btn btn-dark">Go back</button>
        </div>
      </div>
    </div>
  </div>
  </>
    )
  }
