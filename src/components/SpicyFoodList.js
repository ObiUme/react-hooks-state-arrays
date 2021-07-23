import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();

//   STEP 2  Here, we're using the spread operator (...) to make a copy of our foods array, and insert it into a new array. We're also adding the newly generated food returned by the getNewSpicyFood function at the end of the array.

// Remember, whenever we are updating state, it's important that we always pass a new object/array to setState. That's why we're using the spread operator here to make a copy of the array, instead of .push, which will mutate the original array.

// Again, to repeat! React will only re-render our component when we set state with a new value; so we need to create a new copy of our original array to pass to the setter function, rather than mutating the original array directly and passing a reference to the original array.

    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray)
  }
  function handleLiClick(id){
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
  }

  function handleLiClick(id) {
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  } 
  
  //  STEP 1: First, let's update our component to return some JSX elements based on this array in state. We can use .map on our array to generate an array of <li> elements from our array of foods, and display them in the <ul>:

  const foodList = foods.map((food) => (
     <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ))
  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
