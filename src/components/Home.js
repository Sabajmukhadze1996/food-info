import React from 'react'
import { useNavigate } from 'react-router-dom'
import americanburger from '../americanfoodimages/american-burger.png'
import frenchescargot from '../europeanfoodimages/french-escargot.png'
import asianpapipuri from '../asianfoodimages/indian-papipuri.png'
import italianpasta from '../europeanfoodimages/italian-pasta.png'
import americanburgerhut from '../americanfoodimages/american-burger-hut.png'
import indianchicken from '../asianfoodimages/indian-chicken.png'
import frenchescargot2 from '../europeanfoodimages/french-escargot-4.png'
import italianpizza from '../europeanfoodimages/italian-pizza-1.png'
import spanishpaella from '../europeanfoodimages/spanish-paella-1.png'
import guabao from '../asianfoodimages/gua-bao-1.png'
import sushi from '../asianfoodimages/sushi-1.png'


export const Home = () => {
  const navigate = useNavigate()
  
  return (
    <>
    <h1 className="text-center py-3"><i id="home-title">Home</i></h1>
    <div className="container-fluid d-flex justify-content-center py-3 px-0">
     <div id="carouselExampleCaptions" className="carousel slide w-100" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={americanburger} className="d-block w-100 vh-50" alt="americanburger" />
      <div className="carousel-caption d-none d-md-block">
        <h5>American Burger</h5>
        <p>A burger without cheese is like a hug without a squeeze</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={frenchescargot}className="d-block w-100" alt="frencescargot" />
      <div className="carousel-caption d-none d-md-block">
        <h5>French Escargot</h5>
        <p>Bring me an order of escargots, but hold the slugs</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={asianpapipuri} className="d-block w-100" alt="papipuri" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Indian Panipuri</h5>
        <p>Hmm, Keep calm and eat panipuri</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>


    <div className="row row-cols-1 row-cols-sm-2 g-4 py-3 ">
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={italianpasta} className="card-img-top" alt="italianpasta" />
      <div className="card-body">
        <h5 className="card-title">Classic Italian Spaghetti</h5>
        <p className="card-text">Fresh or dry spaghetti is cooked in a large pot of salted, boiling water and then drained in a colander.</p>
       <button onClick={() => {navigate('seemoreitalianpasta'); window.scrollTo(0, 0)}} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={americanburgerhut} className="card-img-top" alt="americanburger" />
      <div className="card-body">
        <h5 className="card-title">The American Burger</h5>
        <p className="card-text">A sandwich is a food typically consisting of vegetables, sliced cheese or meat.</p>
        <button onClick={() => {navigate('thesandwichinfo'); window.scrollTo(0, 0)}} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={indianchicken} className="card-img-top" alt="indianchicken" />
      <div className="card-body">
        <h5 className="card-title">Chicken Makhani</h5>
        <p className="card-text"> Made from chicken with a spiced tomato and butter (makhan) sauce.</p>
        <button onClick={() => {navigate('thechickenmakhani'); window.scrollTo(0, 0)}} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={frenchescargot2} className="card-img-top" alt="frenchescargots" />
      <div className="card-body">
        <h5 className="card-title">French Escargot</h5>
        <p className="card-text">A beloved French delicacy <br /> made from cooked snails.</p>
        <button onClick={() => {navigate('frenchescargot'); window.scrollTo(0, 0)}} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
</div>





<div className="row row-cols-1 row-cols-sm-2 g-4">
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={italianpizza} className="card-img-top" alt="italianpasta" />
      <div className="card-body">
        <h5 className="card-title">Delicious Italian Pizza</h5>
        <p className="card-text">A small pizza is sometimes called <br /> a pizzetta.</p>
       <button onClick={() => {navigate('italianpizzainfo'); window.scrollTo(0, 0)}} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={spanishpaella} className="card-img-top" alt="americanburger" />
      <div className="card-body">
        <h5 className="card-title">Spanish Seafood Paella</h5>
        <p className="card-text">Paella valenciana is the traditional paella of the Valencia region.</p>
        <button onClick={() => {navigate('spanishpaellainfo'); window.scrollTo(0, 0)}} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={guabao} className="card-img-top" alt="indianchicken" />
      <div className="card-body">
        <h5 className="card-title">Chinese GuaBao</h5>
        <p className="card-text">It consists of a slice of stewed meat and condiments sandwiched.</p>
        <button onClick={() => {navigate('chineseguabaoinfo'); window.scrollTo(0, 0)}} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={sushi} className="card-img-top" alt="frenchescargots" />
      <div className="card-body">
        <h5 className="card-title">Japanese Sushi</h5>
        <p className="card-text">Sushi is traditionally made with medium-grain white <br /> rice.</p>
        <button onClick={() => {navigate('japanesesushiinfo'); window.scrollTo(0, 0)}} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
