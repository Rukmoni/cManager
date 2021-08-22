import {getData} from '../mockData/_postData';
export async function getPosts(){
    
  
     try{
        const results=await getData();
        console.log("getData",results);
        return results; 
    }
    catch(error){
        console.log("Error")
    } 
}