import React from 'react'
import { useNavigate } from 'react-router-dom'
import frenchescargot3 from '../europeanfoodimages/french-escargot-3.png'

export const FrenchEscargot = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="card mb-3 w-100 ">
      <div className="row g-0" id="card-info-row">
        <div className="col-md-4">
          <img style={{width: '320px'}} src={frenchescargot3} className="img-fluid rounded-start" alt="americanburgerhunt" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">French Escargot</h5>
            <p className="card-text">
            In French cuisine, snails are typically purged, killed, shelled, 
            and cooked (usually with garlic butter, chicken stock or wine), 
            and then placed back into the shells with the butter and sauce 
            for serving.[citation needed] Additional ingredients, such as 
            garlic, thyme, parsley, and pine nuts, may be added. Special tongs 
            for holding the shell and forks for extracting the meat are typically provided. Escargot are served on indented metal trays with places for six or 12 snails.
            In Cretan cuisine, the snails are first boiled in white wine with 
            bay leaves, celery, and onion and then coated with flour and fried 
            with rosemary and vinegar.
            In Maltese cuisine, snails (Maltese: bebbux) of the petit gris 
            variety are simmered in red wine or ale with mint, basil and marjoram. The snails are cooked, and served in their shells.
            In Nagaland, the snails are prepared with axone and pork meat, 
            especially the fats. Locally it is called 'hamok'.
            </p>
            <button onClick={() => navigate('/')} className="btn btn-dark">Go back</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
