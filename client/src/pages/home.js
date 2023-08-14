import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <section>
    
    
    <div class="abc">
    <img src="https://tse2.mm.bing.net/th?id=OIP.uL8BvP29Gm85uIjiXxFiPQHaLH&pid=Api&P=0&h=180" alt="Image not found"></img>
    
    <button class="add-to-cart" onclick="alert('Item added to cart!!! Check the botom for cart')">READ</button>
    <button class="add-to-cart" onclick="alert('Item added to cart!!! Check the botom for cart')">SAVE</button>
            
                
  </div>
  <div class="abc">
    <img src="https://tse4.mm.bing.net/th?id=OIP.2jSJL6sirQf8GvSvMva1RAHaLH&pid=Api&P=0&h=180" alt="Image not found"></img>
    

    <button class="add-to-cart" onclick="alert('Item added to cart!!! Check the botom for cart')">READ</button>
    <button class="add-to-cart" onclick="alert('Item added to cart!!! Check the botom for cart')">SAVE</button>
                
  </div>
  <div class="abc">
    <img src="https://tse3.mm.bing.net/th?id=OIP.YI48lFiMuRB3DPVEYK0m6QHaLH&pid=Api&P=0&h=180" alt="Image not found"></img>
    

    <button class="add-to-cart" onclick="alert('Item added to cart!!! Check the botom for cart')">READ</button>
    <button class="add-to-cart" onclick="alert('Item added to cart!!! Check the botom for cart')">SAVE</button>
            
                
  </div>
  <div class="abc">
    <img src="https://tse4.mm.bing.net/th?id=OIP.90W2EjL3FnxNh7qvp60FYwDMEy&pid=Api&P=0&h=180" alt="Image not found"></img>
    

    <button class="add-to-cart" onclick="alert('Item added to cart!!! Check the botom for cart')">READ</button>
    <button class="add-to-cart" onclick="alert('Item added to cart!!! Check the botom for cart')">SAVE</button>
            
                
  </div>
  <div class="abc">
    <img src="https://tse1.mm.bing.net/th?id=OIP.U05GeRIiIyN9jfbBLy4OGwHaLH&pid=Api&P=0&h=180" alt="Image not found"></img>
    

    <button class="add-to-cart" onclick="alert('Item added to cart!!! Check the botom for cart')">READ</button>
    <button class="add-to-cart" onclick="alert('Item added to cart!!! Check the botom for cart')">SAVE</button>
            
             
  </div>
   
  </section>
  
   
  );
};