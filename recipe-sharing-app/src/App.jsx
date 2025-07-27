import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
  <>
  <Routes>
    <Route path="/" element={
      <>
        <div><AddRecipeForm /></div>
        <div><RecipeList /></div> 
      </>}
    ></Route>
    <Route path="/recipe/:recipeId" element={<RecipeDetails />}></Route>
  </Routes>
  </>
    
  )
}

export default App
