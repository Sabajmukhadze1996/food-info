import React from 'react'
import { useNavigate } from 'react-router-dom'
import italianpasta1 from '../europeanfoodimages/italian-pasta-1.png'


export const ItalianPastaInfo = () => {
  const navigate = useNavigate()
  return (
<>
<div className="card mb-3 w-100 ">
  <div className="row g-0 d-flex" id="card-info-row">
    <div className="col-md-4">
      <img style={{width: '320px'}} src={italianpasta1} className="img-fluid rounded-start" alt="italianspaghetty" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Classic Italian Spaghetti</h5>
        <p className="card-text">
        Spaghetti (Italian: [spaˈɡetti]) is a long, thin, solid, cylindrical 
        pasta.[1] It is a staple food of traditional Italian cuisine. Like other 
        pasta, spaghetti is made of milled wheat and water and sometimes enriched 
        with vitamins and minerals. Italian spaghetti is typically made from durum 
        wheat semolina.[2] Usually the pasta is white because refined flour is used, 
        but whole wheat flour may be added. Spaghettoni is a thicker form of spaghetti, 
        while capellini is a very thin spaghetti.
        Originally, spaghetti was notably long, but shorter lengths gained in 
        popularity during the latter half of the 20th century and now it is most 
        commonly available in 25–30 cm (10–12 in) lengths. A variety of pasta dishes 
        are based on it and it is frequently served with tomato sauce or meat or 
        vegetables.
        </p>
        <button onClick={() => navigate('/')} className="btn btn-dark">Go back</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
