import axios from 'axios';
import {getData} from '../mockData/_postData';
export async function getPosts() {
  try {
    const results = await getData();
    console.log('getData', results);
    return results;
  } catch (error) {
    console.log('Error');
  }
}

export async function getComments() {
  try {
    const results = await axios.get(
      'https://jsonplaceholder.typicode.com/comments?postId=1',
    );
    
    return results.data;
  } catch (error) {
    console.log('Error');
  }
}

export async function getPostInfo(){
  try {
    const results = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
    console.log('getData', results);
    return results.data;
  } catch (error) {
    console.log('Error');
  }

}
