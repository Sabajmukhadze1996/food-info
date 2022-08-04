import React from 'react'
import { useState } from 'react'
import americanimage1 from '../americanpageimages/american-cuisine-1.png'
import hotdog from '../americanpageimages/hot-dog-1.png'
import chocolate from '../americanpageimages/chocolate-1.png'
import cronut from '../americanpageimages/cronut-1.png'
import chicken from '../americanpageimages/chicken-1.png'
import pancake from '../americanpageimages/pancake-1.png'
import { ForHotDog } from '../americanpagerecipes/ForHotDog'
import { ForChocolate } from '../americanpagerecipes/ForChocolate'
import { ForCronut } from '../americanpagerecipes/ForCronut'
import { ForChicken } from '../americanpagerecipes/ForChicken'
import { ForPancake } from '../americanpagerecipes/ForPancake'

export const AmericanPage = () => {
    const [showHotDogRecipe, setShowHotDogRecipe] = useState(false); 
    const [showChocolate, setShowChocolate] = useState(false); 
    const [showCronut, setShowCronut] = useState(false);
    const [showChicken, setShowChicken] = useState(false);
    const [showPancake, setShowPancake] = useState(false);

    return (
    <>
      <div className="container-fluid px-0 py-3">
         <h1 className="text-center py-3 "><i id="american-title">American Cuisine</i></h1>
         <img id="american-main" className="img-fluid py-2 px-0" src={americanimage1} 
         alt="american-cuisine"/>
     
         <h1 className="py-3 text-center"><i>Famous List</i></h1>

        <div className="card mb-3 w-100">
  <div className="row g-0" id="card-info-row">
    <div className="col-md-4">
      <img src={hotdog} className="img-fluid rounded-start" alt="ragaca" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">The American Hot Dog</h5>
        <p className="card-text">
        A hot dog[1][2] (less commonly spelled hotdog[3]) is a food consisting
         of a grilled or steamed sausage served in the slit of a partially sliced
          bun.[4] The term hot dog can also refer to the sausage itself. The 
          sausage used is a wiener (Vienna sausage) or a frankfurter (Frankfurter
           Würstchen, also just called frank). The names of these sausages also 
           commonly refer to their assembled dish.[5] Some consider a hot dog to 
           technically be a sandwich. Hot dog preparation and condiments vary 
           worldwide. Typical condiments include mustard, ketchup, mayonnaise, 
           relish, and cheese sauce,[citation needed] and common garnishes 
           include onions, sauerkraut, jalapeños, chili, grated cheese, coleslaw,
            bacon, and olives.
        </p>
        <button onClick={() => setShowHotDogRecipe(!showHotDogRecipe)} 
        className="btn btn-dark">
            Recipe...
        </button>
      </div>
    </div>
  </div>
</div>


<div>
  {showHotDogRecipe && <ForHotDog /> }
</div>



<div className="card mb-3 w-100">
  <div className="row g-0" id="card-info-row">
    <div className="col-md-4">
      <img src={chocolate} className="img-fluid rounded-start" alt="ragaca" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Chocolate Chip Cookies</h5>
        <p className="card-text">
        A chocolate chip cookie is a drop cookie that features chocolate chips
         or chocolate morsels as its distinguishing ingredient. Chocolate chip 
         cookies originated in the United States around 1938, when Ruth Graves 
         Wakefield chopped up a Nestlé semi-sweet chocolate bar and added the 
         chopped chocolate to a cookie recipe.
        Generally, the recipe starts with a dough composed of flour, 
        butter, both brown and white sugar, semi-sweet chocolate chips,
         eggs, and vanilla. Variations on the recipe may add other types 
         of chocolate, as well as additional ingredients such as nuts or 
         oatmeal. There are also vegan versions with the necessary ingredient 
         substitutions, such as vegan chocolate chips, vegan margarine, and egg 
         substitutes. A chocolate chocolate chip cookie uses a dough flavored 
         with chocolate or cocoa powder, before chocolate chips are mixed in.
        </p>
        <button onClick={() => setShowChocolate(!showChocolate)} className="btn btn-dark">Recipe...</button>     
    </div>
    </div>
  </div>
</div>

<div>
    {showChocolate && <ForChocolate />}
</div>


<div className="card mb-3 w-100">
  <div className="row g-0" id="card-info-row">
    <div className="col-md-4">
      <img src={cronut} className="img-fluid rounded-start" alt="ragaca" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">American Cronut</h5>
        <p className="card-text">
        In 2013, bakery owner Dominique Ansel created the pastry out of dough 
        similar to that of a croissant (a pastry that he had been more familiar 
        with) with flavored cream inside.[3][4]
        The Cronut was introduced on May 10, 2013, at Ansel's bakery, Dominique
         Ansel Bakery, in New York's SoHo neighborhood. On the same night, a 
         blogger from Grub Street, the online restaurant blog from New York 
         magazine, reported on the new pastry.[3][1] The post resulted in much 
         interest and online circulation, and by the third day, a line of over 
         100 people had formed outside the shop to buy it.[4]
        Within nine days of introducing the pastry to the bakery's menu, Ansel 
        filed for a trademark for the name "Cronut" at the United States Patent and Trademark Office,[5] which was approved.[6][7]
        </p>
        <button onClick={() => setShowCronut(!showCronut)} className="btn btn-dark">Recipe...</button>   
      </div>
    </div>
  </div>
</div>

<div>
    {showCronut && <ForCronut />}
</div>


<div className="card mb-3 w-100">
  <div className="row g-0" id="card-info-row">
    <div className="col-md-4">
      <img src={chicken} className="img-fluid rounded-start" alt="ragaca" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Chicken and Waffles</h5>
        <p className="card-text">
        Chicken and Waffles, as a combined recipe, first appeared in the United 
        States' colonial period in the 1600s in Pennsylvania Dutch country.[2] 
        The traditional Pennsylvania Dutch version consists of a plain waffle 
        with pulled, stewed chicken on top, covered in gravy.[3] Although the 
        dish originated in eastern Pennsylvania, it is generally found throughout
         the Northeastern United States.
        A version using fried chicken is associated with American soul food. 
        The soul food version of chicken and waffles first appeared after the opening of the Wells Supper Club in Harlem, New York, in 1938.[4] The waffle is served as it would be for breakfast, with condiments such as butter and syrup. 
        </p>
        <button onClick={() => setShowChicken(!showChicken)} className="btn btn-dark">Recipe...</button>   
      </div>
    </div>
  </div>
</div>

<div>
   {showChicken && <ForChicken />}
</div>


<div className="card mb-3 w-100">
  <div className="row g-0" id="card-info-row">
    <div className="col-md-4">
      <img src={pancake} className="img-fluid rounded-start" alt="ragaca" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">The American Pancake</h5>
        <p className="card-text">
        A pancake (or hot-cake, griddlecake, or flapjack) is a flat cake, often 
        thin and round, prepared from a starch-based batter that may contain 
        eggs, milk and butter and cooked on a hot surface such as a griddle or 
        frying pan, often frying with oil or butter. It is a type of batter 
        bread. Archaeological evidence suggests that pancakes were probably 
        the earliest and most widespread cereal food eaten in prehistoric 
        societies.[1]
        The pancake's shape and structure varies worldwide. In the United 
        Kingdom, pancakes are often unleavened and resemble a crêpe.[2] In 
        North America, a leavening agent is used (typically baking powder) 
        creating a thick fluffy pancake. A crêpe is a thin Breton pancake of 
        French origin cooked on one or both sides in a special pan or crepe 
        maker to achieve a lacelike network of fine bubbles.
        </p>
        <button onClick={() => setShowPancake(!showPancake)} className="btn btn-dark">Recipe...</button>   
      </div>
    </div>
  </div>
</div>

<div>
  {showPancake && <ForPancake />}
</div>

  </div>
</>
  )
}
