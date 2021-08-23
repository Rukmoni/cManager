import axios from 'axios';
import {getData} from '../mockData/_postData';
export async function getPosts() {
  try {
    const results = await axios.get('https://jsonplaceholder.typicode.com/posts',
    );
    return results.data;
  } catch (error) {
    console.log('Error');
  }
}

export async function getComments(id) {
  try {
    const results = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
    );

    return results.data;
  } catch (error) {
    console.log('Error');
  }
}

export async function getPostInfo(id) {
  try {
    const results = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    console.log('getData', results);
    return results.data;
  } catch (error) {
    console.log('Error');
  }
}
