import React,{useEffect} from "react";
import{useDispatch,useSelector} from 'react-redux';
const Dashboard=()=>{
    const dispatch=useDispatch();
    const{items,loading,error}=useSelector((state)=>state.pokemon);
    useEffect(()=>{
        dispatch(fetchPokemons())
    },[dispatch]);
    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error</p>
    }
    return(
        <div>
            <h2>Pokemon List</h2>
        </div>
    );
};
export default Dashboard;