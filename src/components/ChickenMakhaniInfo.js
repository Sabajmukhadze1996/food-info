import React from 'react'
import { useNavigate } from 'react-router-dom'
import chickenmakhani from '../asianfoodimages/chicken-makhani.png';

export const ChickenMakhaniInfo = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="card mb-3 w-100 ">
  <div className="row g-0 " id="card-info-row">
    <div className="col-md-4">
      <img style={{width: '320px'}} src={chickenmakhani} className="img-fluid rounded-start" alt="americanburgerhunt" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">The Chicken Makhani</h5>
        <p className="card-text">
        Butter chicken, traditionally known as Murgh makhani, (pronounced [mʊrg ˈmək.kʰə.ni]) 
        is a type of curry made from chicken with a spiced tomato and butter (makhan) sauce. 
        Its sauce is known for its rich texture. In addition sometimes the cream gives the curry 
        sauce a silky smooth rich texture.
        It originated in the Indian subcontinent as a curry.
        It is similar to chicken tikka masala, which uses a tomato paste.[7]
        The curry was developed in the 1950s[8] by Kundan Lal Jaggi and Kundan 
        Lal Gujral,[9][10] founders of the Moti Mahal restaurant in Delhi, 
        India.[1][2] The curry was made "by chance" by mixing leftover tandoori 
        chicken in a tomato gravy, rich in butter (makhan).[11] In 1974, a 
        recipe was published for "Murgh makhanii (Tandoori chicken cooked in 
        butter and tomato sauce)".
        </p>
        <button onClick={() => navigate('/')} className="btn btn-dark">Go back</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
