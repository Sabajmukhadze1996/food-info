import React from 'react'
import { useNavigate} from 'react-router-dom';
import germanwurst2 from '../europeanpageimages/german-wurst-2.png';

export const SeeMoreGermanWurst = () => {
  const navigate = useNavigate();
  return (
    <>
<div className="card mb-3 w-100 ">
  <div className="row g-0 d-flex" id="card-info-row">
    <div className="col-md-4">
      <img style={{width: '320px'}} src={germanwurst2} className="img-fluid rounded-start" alt="italianspaghetty" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">The German Wurst</h5>
        <p className="card-text">
        Recipes for the sausage vary by region and even locality; some sources
         list over 40 different varieties of German bratwurst,[4][5] many of 
         the best known originating in Franconia (today for the most part 
         situated in northern Bavaria, but still culturally quite distinct), 
         its northern neighbour Thuringia and adjacent areas. How the sausages 
         are served is also locally different, but most commonly they are 
         regarded as a simple snack served with or in a white bread roll 
         made from wheat flour and eaten with mustard. As a pub dish, it 
         is often accompanied by sauerkraut or potato salad and sometimes 
         served with dark, crusty country bread made predominantly from rye 
         flour, less commonly with a Brezel (pretzel). It is a very popular 
         form of fast food in German-speaking countries, often cooked and sold 
         by street vendors from small stands, and is also traditionally popular 
         with fans at soccer games.
        </p>
        <button onClick={() => navigate('/europeanpage')} className="btn btn-dark">Go back</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
