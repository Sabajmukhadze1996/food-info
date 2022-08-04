import React from 'react'
import { useNavigate } from 'react-router-dom'
import asianmainimage from '../asianpageimages/asianmainimage.png'
import sushibig from '../asianpageimages/sushi-big.png';
import indianpanipuribig from '../asianpageimages/indian-panipuri-big.png'
import chinesechicken from '../asianpageimages/chinese-chicken-big.png'
import indonesiansataybig from '../asianpageimages/indonesian-satay-big.png'
import singaporiancrabbig from '../asianpageimages/singaporian-crab-big.png'
import koreankimchibig from '../asianpageimages/korean-kimchi-big.png'
import tailandsomtambig from '../asianpageimages/tailand-som-tam-big.png'
import nepalmomosbig from '../asianpageimages/nepal-momos-big.png'

export const AsianPage = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className="container-fluid px-0  py-3">
          <h1 className="text-center py-3"><i id="asian-title">Asian Cuisine</i></h1>
         <img id="asianmain" className="img-fluid w-100 py-2 px-0" src={asianmainimage}
          alt="european-cousine"/>
      
      <h1 className="text-center py-3"><i>Types of Food</i></h1>
      <div className="row row-cols-1 row-cols-sm-2 g-4  py-3 ">
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={sushibig} className="card-img-top" alt="italianpasta" />
      <div className="card-body">
        <h5 className="card-title">The Japanese Sushi</h5>
        <p className="card-text">Sushi is a Japanese dish of prepared vinegared rice usually with some sugar and salt.</p>
       <button onClick={() => {navigate("/asianpage/seemoreasiansushi"); window.scrollTo(0, 0)}} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={indianpanipuribig} className="card-img-top" alt="americanburger" />
      <div className="card-body">
        <h5 className="card-title">The Indian Panipuri</h5>
        <p className="card-text">Panipuri consists of a round hollow puri a deep-fried crisp flatbread, filled with a mixture of flavored water.</p>
        <button onClick={() => {navigate("/asianpage/seemoreasianpanipuri"); window.scrollTo(0, 0)}} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={chinesechicken} className="card-img-top" alt="Kung Pao" />
      <div className="card-body">
        <h5 className="card-title">The Chinese Kung Pao</h5>
        <p className="card-text">The dish is believed to be named after Ding Baozhen 1820–1886, a late Qing Dynasty official.</p>
        <button onClick={() => {navigate('/asianpage/seemorechinesekungpao'); window.scrollTo(0, 0)}} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={indonesiansataybig} className="card-img-top" alt="frenchescargots" />
      <div className="card-body">
        <h5 className="card-title">The Indonesian Satay</h5>
        <p className="card-text">Satay may consist of diced or sliced chicken, goat, mutton, beef, pork, fish, other meats, or tofu.</p>
        <button onClick={() => {navigate('/asianpage/seemoreindonesiansatay'); window.scrollTo(0, 0)}} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={singaporiancrabbig} className="card-img-top" alt="frenchescargots" />
      <div className="card-body">
        <h5 className="card-title">The Singaporean Chilli Crab</h5>
        <p className="card-text">Chilli crab sauce is described as "sensuous" and "sweet, yet savoury".</p>
        <button onClick={() => {navigate('/asianpage/seemoresingaporeancrab'); window.scrollTo(0, 0)}} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={koreankimchibig} className="card-img-top" alt="frenchescargots" />
      <div className="card-body">
        <h5 className="card-title">The Korean Kimchi</h5>
        <p className="card-text">Kimchi is a traditional Korean side dish of salted and fermented vegetables.</p>
        <button onClick={() => {navigate('/asianpage/seemorekoreankimchi'); window.scrollTo(0, 0)}} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={tailandsomtambig} className="card-img-top" alt="frenchescargots" />
      <div className="card-body">
        <h5 className="card-title">The Som Tum Thai from Thailand</h5>
        <p className="card-text">Green papaya salad is a spicy salad made from shredded unripe papaya.</p>
        <button onClick={() => {navigate('/asianpage/seemorethailandsom'); window.scrollTo(0, 0)}} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" id="home-card-border">
      <img src={nepalmomosbig} className="card-img-top" alt="frenchescargots" />
      <div className="card-body">
        <h5 className="card-title">The Momos From Nepal</h5>
        <p className="card-text">Momo is a type of steamed dumpling with some form of filling.</p>
        <button onClick={() => {navigate("/asianpage/seemorenepalmomos"); window.scrollTo(0, 0)}} className="btn btn-dark">See more...</button>
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}
