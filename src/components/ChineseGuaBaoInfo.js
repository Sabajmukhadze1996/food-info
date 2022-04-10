import React from 'react'
import { useNavigate } from 'react-router-dom'
import guabao2 from '../asianfoodimages/gua-bao-2.png'

export const ChineseGuaBaoInfo = () => {
   const navigate = useNavigate()
   return (
    <>
    <div className="card mb-3 w-100">
      <div className="row g-0" id="card-info-row">
        <div className="col-md-4">
          <img style={{width: '320px'}} src={guabao2} className="img-fluid rounded-start" alt="italianspaghetty" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Chinese GuaBao</h5>
            <p className="card-text">
            The gua bao originated from the coastal regions of Fujian province 
            in China. It is said to have come from either the cities of Quanzhou 
            or Fuzhou. In Quanzhou, gua bao is known as rou jia bao (meat between
             buns) or hu yao shi (tiger bites lion).[10][11] The custom of Hui'an
              people in Quanzhou is to eat these pork belly buns to celebrate the
               marrying off of a daughter.[12] In Jinjiang, a county of Quanzhou,
                there is a related vegetarian dish known as hu yao cao 虎咬草 
                (tiger bites grass) that replaces the pork with a solidified 
                peanut paste and the lotus leaf bread with a bread that is baked 
                in a clay oven similar to a tandoor.[13][14]
            In Taiwan, gua bao were said to be introduced to the island by 
            Fuzhounese immigrants.[15][16] The food is known colloquially in 
            parts of Taiwan as hó͘-kā-ti (虎咬豬; 'tiger bites pig') in Taiwanese 
            Hokkien due to the mouth-like form of the bun and the contents of 
            the filling.[8]
            </p>
            <button onClick={() => navigate('/')} className="btn btn-dark">Go back</button>
          </div>
        </div>
      </div>
    </div>
    </>
   )
}
