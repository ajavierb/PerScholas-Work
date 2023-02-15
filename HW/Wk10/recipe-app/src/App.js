
import { useState } from "react";
import "./App.css";
import Main from "./main"
import RecipeCard from "./RecipeCard";
export default App;


function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState(vegan);
  //                  **********************    'search' removed from btwn + +
  // async () => {
  //   var result = await Axios.get();
  //   setrecipes(result.data.hits);
  //   console.log(result.data);
  // }
//  ******changing getRecipes to search was an idea...nothing happened
  const onSubmit = (e) => {
    e.preventDefault();
    setrecipes();
  
  return (
    <div className ="app">
      <h1 > Ambar's Recipe Search 🍽️ </h1>
      /* ***searchbar next to txt */
      <form className ="search_Bar" onSubmit={onSubmit}>
        <input
          type="text"
          className="search_Input"
          placeholder="Type ingredients here"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="search_Submit" type="submit" value="Search" />

        <select className="app_healthlabels">
          <option onClick={() => sethealthLabel(vegan)}>Vegan</option>
          <option onClick={() => sethealthLabel(vegetarian)}>Vegetarian</option>
          <option onClick={() => sethealthLabel(pescetarian)}>pescetarian</option>
          <option onClick={() => sethealthLabel(high-protein)}>High Protein</option>
          <option onClick={() => sethealthLabel(low-sodium)}>low sodium</option>
        </select>
      </form>
      <div className="app_recipes">
        {recipes.map((recipe) => {
          return <RecipeCard recipe={recipe} />;
        })}
      </div>
      <div>
        <Main />
      </div>
    </div>
  
);
      }}