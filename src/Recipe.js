import { useEffect, useState } from "react"
import Banner from "./recipe_components/Banner"
import Footer from "./recipe_components/Footer"
import List from "./recipe_components/List"
import Nav from "./recipe_components/Nav"
import Loader from "./recipe_components/Loader"

const Recipe = () => {
    //three states to track what is going on:
    const[categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // a state to staore what to filter with 
    const[f, setF] = useState("")

    //filter category
    const filterCategory = () =>{
        const filtered = categories.filter(function(cat){
            return cat.strCategory.toLowerCase().includes(f.toLowerCase())
            //.include() we want to search for words that includes what we are trying to search for
            //You can convert the one you are getting from api to lowercase and what they are searching for to lowecase
        })
        return filtered;
    }

    // hook: useEffect | useState
    const requestMaker =()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(function(fakeresp){
            return fakeresp.json()
        })
         .then(function(data){
           setCategories(data.categories)
           setLoading(false)
        })
         .catch(function(err){ 
            setCategories([])
            setLoading(false)
            setError(err)
        })
    }
    useEffect(function(){
        requestMaker();
    }, [])

    if (loading === true){
        return(
            <Loader />
        )
    }


  return (
    <div className="container-fluid">
        <Nav />
        <Banner setF={setF}/>
        <List categories={filterCategory()} />
        <Footer />
    </div>
  )
}

export default Recipe