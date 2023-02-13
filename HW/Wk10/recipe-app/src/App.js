import Axios from "axios";
import { useState } from "react";
import "./App.css";
import Main from "main.js"

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([])


<div>
</div>

  //                  **********************    'search' removed from btwn + +
  // var url = "https://api.edamam.com/api/recipes/v2?type=public&app_id=ca8a7842&app_key=8467fdd6590ea00b728798aacaf54866"
//   Axios.get(
//     "https://api.edamam.com/api/recipes/v2?type=public&q=" + +"&app_id=ca8a7842&app_key=8467fdd6590ea00b728798aacaf54866"
// )


  async function getRecipes() {
    var result = await Axios.get();
    setrecipes(result.data.hits);
    console.log(result.data);
  }

//  ******changing getRecipes to search was an idea...nothing happened
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className ="app">
      <h1 > Ambar's Recipe Search 🍽️ </h1>
      {/* ***searchbar next to txt */}
      <form className ="search_Bar" onSubmit={onSubmit}>
        <input
          type="text"
          className="search_Input"
          placeholder="Type ingredients here"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="search_Submit" type="submit" value="Search" />
      </form>
      <div>
        {recipes.map(recipe => {
          return <p>{recipe["recipe"]["label"]}</p>
        })}
      </div>
    </div>
  
);
}

export default App;
