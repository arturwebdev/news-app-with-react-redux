import React, { useEffect } from "react";
import DesignPhotography from "../../Components/DesignPhotography/DesignPhotography";
import Pagination from "../../Components/Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../../store/slices/posts/postsSlice";
import { fetchPosts } from "../../store/slices/posts/postsAPI";
import { setPages } from "../../store/slices/pages/pagesSlice";
import { selectPages } from "../../store/slices/pages/pagesSlice";
import { selectSearch } from "../../store/slices/search/searchSlice";
import "./Home.css"



function Home({data}) {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();
  const { currentPage } = useSelector(selectPages)
  const search = useSelector(selectSearch)


  useEffect(() => {
    dispatch(setPages(posts.data.filter(el => el.title.includes(search)).length))
  }, [search])

  
  useEffect(() => {
    if(!posts.data.length){
        dispatch(fetchPosts());
    }
  }, []);

  return (
    <div className="top">
        <section id="bricks">
        <div className="row masonry">
          <div className="bricks-wrapper">
            {
              posts.data.filter(el => el.title.includes(search)).filter((el, idx) => idx >= (currentPage - 1) * 10 && idx < currentPage * 10).map((el) => (
              <DesignPhotography
                key={el.id}
                id={el.id}
                title={el.title}
                urlToImage={el.urlToImage}
                description={el.description}
                source={el.source.name}
                url={el.url}
                author={el.author}
              />
            ))
            }
          </div>
        </div>

        <Pagination />
   
      </section>

    </div>
  );
}

export default Home