import { useEffect } from "react";
import { selectPosts } from "../../store/slices/posts/postsSlice";
import { useNavigate } from "react-router-dom";
import Comments from "../Comments/Comments";
import LeaveComment from "../LeaveComment/LeaveComment";
import { useDispatch, useSelector } from "react-redux";
import "./More.css";


function More() {
  
  const { dataMore } = useSelector(selectPosts);
  const { data } = useSelector(selectPosts);
  const navigate = useNavigate();
  const dispatch =useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (dataMore.id === undefined) {
      navigate("/");
    }
  }, [dataMore]);

  return (
    <>
      <section id="content-wrap" className="blog-single">
        <div className="row">
          <div className="col-twelve">
            <article className="format-standard">
              <div className="content-media">
                <div className="post-thumb">
                  <img src={dataMore?.urlToImage} alt="" />
                </div>
              </div>
              <div className="primary-content">
                <h1 className="page-title">{dataMore?.title}.</h1>
                <ul className="entry-meta">
                  <li className="date">{dataMore?.publishedAt}</li>
                  <li className="cat">
                    <span style={{ color: "#770804" }}>
                      {" "}
                      <a target="_blank" rel="noreferrer" href={dataMore?.url}>
                        {dataMore?.source?.name}
                      </a>
                    </span>
                  </li>
                  <p>Autor {dataMore?.author}</p>
                </ul>
                <p className="lead">{dataMore?.content}.</p>
                <p>{dataMore?.description}.</p>
              </div>
              {/* <div className="pagenav group">
                <div className="prev-nav">
                <NavLink 
                  onClick={() => {
                    dispatch(setDataMore(data[data.findIndex(el => el.id === dataMore.id) + 1].id               ))
                  }} to={`/home/${
                    data[data.findIndex(el => el.id === dataMore.id) - 1].id               
                  }`} >
                    Previous
                  </NavLink>
                </div>
                <div className="next-nav">
                  <NavLink 
                  onClick={() => {
                    dispatch(setDataMore(data[data.findIndex(el => el.id === dataMore.id) + 1].id               ))
                  }} to={`/home/${
                    data[data.findIndex(el => el.id === dataMore.id) + 1].id               
                  }`} >
                    Next
                  </NavLink>
                </div>
              </div> */}
            </article>
          </div>
        </div>
        <div className="comments-wrap">
          <div id="comments" className="row">
            <div className="col-full">
                <Comments />
                <LeaveComment />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default More;
