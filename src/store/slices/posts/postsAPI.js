import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
 
export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async function () {
      const key = "11e17d603497424db12a983a030e55e3";
      const url = `
          https://newsapi.org/v2/everything?q=apple&from=2022-09-09&to=2022-09-09&sortBy=popularity&apiKey=${key}`;
  
      const urlComments = `https://jsonplaceholder.typicode.com/posts/5/comments`;
      const response = await axios.get(url);
      const data = response.data.articles;
  
      const commentsResponse = await axios.get(urlComments);
      const comments = commentsResponse.data;
      // console.log(response);
      // console.log(data);
  
      return data.map(el => (
        { 
          ...el, 
          id: Math.random() + el.title,
          comments: comments.map(el => ({
            id: el.id,
            name: el.name.slice(0, el.name.indexOf(' ')),
            body: el.body
          }))
        }));
    }
  );
  