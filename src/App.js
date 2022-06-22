import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Home } from './components/Home'; //home component
import{ Navbar} from './components/Navbar'; //home component
import { Footer } from './components/Footer'; //home component
import { ItalianPastaInfo } from './components/ItalianPastaInfo'; //home component
import { TheSandwichHutInfo } from './components/TheSandwichHutInfo'; //home component
import { ChickenMakhaniInfo } from './components/ChickenMakhaniInfo'; //home component
import { FrenchEscargot } from './components/FrenchEscargot'; //home component
import { ItalianPizzaInfo } from './components/ItalianPizzaInfo'; //home component
import { SpanishPaellaInfo } from './components/SpanishPaellaInfo'; //home component
import { ChineseGuaBaoInfo } from './components/ChineseGuaBaoInfo'; //home component
import { JapaneseSushiInfo } from './components/JapaneseSushiInfo'; //home component
import { AmericanPage } from './pages/AmericanPage'; //american page component
import { EuropeanPage } from './pages/EuropeanPage'; //european page component
import { AsianPage } from './pages/AsianPage'; //asian page component
import { SeeMoreGermanWurst } from './seemoreeuropeanfoods/SeeMoreGermanWurst'; //nested german wurst component
import { SeeMoreSpanishTortilla } from './seemoreeuropeanfoods/SeeMoreSpanishTortilla'; //nested spanish tortilla component
import { SeeMoreItalianPizza } from './seemoreeuropeanfoods/SeeMoreItalianPizza'; //nested italian pizza component
import { SeeMoreSwitzerlandFondue } from './seemoreeuropeanfoods/SeeMoreSwitzerlandFondue'; //neset switzerland fondue component
import { SeeMoreGreeceGyros } from './seemoreeuropeanfoods/SeeMoreGreeceGyros'; // nested
import { SeeMoreSwedishMeat } from './seemoreeuropeanfoods/SeeMoreSwedishMeat'; //nested
import { SeeMoreBelgianWaffles } from './seemoreeuropeanfoods/SeeMoreBelgianWaffles'; //nested
import { SeeMoreFrenchNicoise } from './seemoreeuropeanfoods/SeeMoreFrenchNicoise'; //nested
import { SeeMoreAsianSushi } from './seemoreasianfoods/SeeMoreAsianSushi';
import { SeeMoreAsianPanipuri } from './seemoreasianfoods/SeeMoreAsianPanipuri';
import { SeeMoreChineseKungpao } from './seemoreasianfoods/SeeMoreChineseKungpao';
import { SeeMoreIndonesianSatay } from './seemoreasianfoods/SeeMoreIndonesianSatay';
import { SeeMoreSingaporeanCrab } from './seemoreasianfoods/SeeMoreSingaporeanCrab';
import { SeeMoreKoreanKimchi } from './seemoreasianfoods/SeeMoreKoreanKimchi';
import { SeeMoreThailandSom } from './seemoreasianfoods/SeeMoreThailandSom';
import { SeeMoreNepalMomos } from './seemoreasianfoods/SeeMoreNepalMomos';


const App = () => {
 
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main id="main">
        <Routes>
          <Route path="/*" element={<Home />}/>
            <Route path="/seemoreitalianpasta" element={<ItalianPastaInfo />} />
             <Route path="/thesandwichinfo" element={<TheSandwichHutInfo />} />
            <Route path="/thechickenmakhani" element={<ChickenMakhaniInfo />} />
             <Route path="/frenchescargot" element={<FrenchEscargot />} />
            <Route path="/italianpizzainfo" element={<ItalianPizzaInfo />} />
             <Route path="/spanishpaellainfo" element={<SpanishPaellaInfo />} />
            <Route path="/chineseguabaoinfo" element={<ChineseGuaBaoInfo />} />
             <Route path="/japanesesushiinfo" element={<JapaneseSushiInfo />} />
             <Route path="/americanpage" element={<AmericanPage />} />
            <Route path="/europeanpage" element={<EuropeanPage />} />
             <Route path="/europeanpage/seemoregermanwurst" element={<SeeMoreGermanWurst />}/>
            <Route path="/europeanpage/seemorespanishtortilla" element={<SeeMoreSpanishTortilla />}/>
             <Route path="/europeanpage/seemoreitalianpizza" element={<SeeMoreItalianPizza />}/>
            <Route path="/europeanpage/seemoreswitzerlandfondue" element={<SeeMoreSwitzerlandFondue />}/>
             <Route path="/europeanpage/seemoregreecegyros"  element={<SeeMoreGreeceGyros />}/>
            <Route path="/europeanpage/seemoreswedishmeat" element={<SeeMoreSwedishMeat />}/>
             <Route path="/europeanpage/seemorebelgianwaffles" element={<SeeMoreBelgianWaffles />} />
            <Route path="/europeanpage/seemorefrenchnicoise" element={<SeeMoreFrenchNicoise />} />
            <Route path="/asianpage" element={<AsianPage />} />
             <Route path="/asianpage/seemoreasiansushi" element={<SeeMoreAsianSushi />} />
            <Route path="/asianpage/seemoreasianpanipuri" element={<SeeMoreAsianPanipuri />} />
             <Route path="/asianpage/seemorechinesekungpao" element={<SeeMoreChineseKungpao />} />
            <Route path="/asianpage/seemoreindonesiansatay" element={<SeeMoreIndonesianSatay />} />
             <Route path="/asianpage/seemoresingaporeancrab" element={<SeeMoreSingaporeanCrab />} />
            <Route path="/asianpage/seemorekoreankimchi" element={<SeeMoreKoreanKimchi />} />
             <Route path="/asianpage/seemorethailandsom" element={<SeeMoreThailandSom />} />
            <Route path="/asianpage/seemorenepalmomos" element={<SeeMoreNepalMomos />} />
        </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}


export default App;


