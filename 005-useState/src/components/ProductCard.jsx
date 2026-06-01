{/*My productcards.jsx */}

import { useState } from "react"; 
{/* without import, react doesnt understand "what "useState" is,".*/}
{/* this tool let me use the store values which can change */}
 function ProductCard({ product }) {
    {/* I receive here the "products" from App.jsx. I just see them, not changing them*/}
    
    const [quantity, setQuantity] = useState (0);
    {/* the quantitiy: this is the value I read(starts at 0) */}
    {/* the setQuantitiy: this is the "function" I call the make the change */}
    {/* I never write quantitiy: 6 directly- I must always use " setQuantitiy" (6) */}

    const [isFavorite, setIsFavorite] = useState (false);
    {/* isFavorite should be "true" or "false" */}
    {/* setIsFavorite changes. */}

    console.log("Re-rendered quantitiy:", quantity, "isFavorite:", isFavorite);

    function handleIncrease(){
        setQuantity(quantity + 1);
    }
    {/* this take the current quantitiy and adds 1 on it, save it. reacht updates the info automatically*/}
    
    function handleDecrease () {
        if(quantity > 0){ {/* this only subtract if the quantity is above 0 */}
            setQuantity(quantity - 1); {/* also this one prevents the negative numbers.*/}
        }
    }

    function handleFavorite() {
        setIsFavorite(!isFavorite);
    }
    {/* "!" means "opposite of" something*/}
    {/*  So basically; if isFavorite is true -> !true = false*/}
    {/*  So, if isFavoreite is falsen -> !false*/}



    return(
        <div>
            <h2>{product.name}</h2> {/* airpods headphone */}
            <p>Price: ${product.price} </p> {/*119*/}
            <p>Category: {product.category}</p> {/* electric - Tech */}
            <p>Description: {product.description}</p> {/* noice-cancelling 10h battery live*/}
            
            <p>Quantity: {quantity}</p>
            {/* I see the current quantity value here. When it changes, React updates only this part. */}

      <button onClick={handleDecrease}>-</button>
      {/* onClick means: when this button is clicked, run handleDecrease */}

      <button onClick={handleIncrease}>+</button>
      {/* Same — runs handleIncrease on click */}

      <p>Favorite: {isFavorite ? "❤️ Yes" : "🤍 No"}</p>
      {/* if isFavorite is true  -> show ❤️ Yes -- if isFavorite is false ->show 🤍 No */}

      <button onClick={handleFavorite}>Toggle Favorite</button>
      {/* Clicking this runs handleFavorite which flips the value */}
    </div>
  );
}

export default ProductCard;
// This makes ProductCard available to import in other files like App.jsx