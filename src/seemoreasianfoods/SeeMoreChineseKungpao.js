import React from 'react'
import { useNavigate } from 'react-router-dom'
import kungpaosmall from '../asianpageimages/kungpao-small.png'


export const SeeMoreChineseKungpao = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="card mb-3 w-100 ">
  <div className="row g-0 d-flex" id="card-info-row">
    <div className="col-md-4">
      <img src={kungpaosmall} style={{width: '320px'}}  className="img-fluid rounded-start" alt="italianspaghetty" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">The Chinese Kung Pao</h5>
        <p className="card-text">
        Kung Pao chicken (Chinese: 宫保鸡丁; pinyin: Gōngbǎo jīdīng; Wade–Giles: 
        Kung¹-pao³ Chi¹-ting¹), also transcribed Gong Bao or Kung Po, is a spicy,
         stir-fried Chinese dish made with cubes of chicken, peanuts, vegetables
          (traditionally Welsh onion only), and chili peppers. The classic dish 
          in Sichuan cuisine originated in the Sichuan Province of south-western
           China and includes Sichuan peppercorns. Although the dish is found 
           throughout China, there are regional variations that are typically 
           less spicy than the Sichuan serving. Kung Pao chicken is also a 
           staple of Westernized Chinese cuisine.
           The dish is believed to be named after Ding Baozhen 
           (1820–1886), a late Qing Dynasty official and governor of 
           Sichuan Province. His title was Taizi Shaobao, which is one 
           of Gongbao (Chinese: 宫保; pinyin: Gōngbǎo; Wade–Giles: 
           Kung1-pao3; lit. 'Palace Guardian').[1] The name Kung Pao 
           chicken is derived from this title, while the use of the 
           character 丁 dīng in the name of the dish is a pun on his 
           surname Dīng, a moderately common Chinese surname that can also
            be read to mean "small cube" (like the cubes the chicken is diced 
            into for the dish).
        </p>
        <button onClick={() => navigate('/asianpage')} className="btn btn-dark">Go back</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
