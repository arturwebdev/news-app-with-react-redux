import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setDataMore } from "../../store/slices/posts/postsSlice";


function DesignPhotography({title, urlToImage, author, description, url, source, id}) {
  const dispatch = useDispatch()
  return (
    <article className="brick entry format-standard animate-this">
      <div className="entry-thumb">
        <Link  onClick={() => dispatch(setDataMore(id))}  to={`/home/${id}`} className="thumb-link">
          <img src={urlToImage} alt="building" />
        </Link>
      </div>

      <div className="entry-text">
        <div className="entry-header">
          <div className="entry-meta">
            <span className="cat-links">
              <a target="_blank" rel="noreferrer" href={url}>
                {source}
              </a>
            </span>
          </div>

          <h1 className="entry-title">
            <Link onClick={() => dispatch(setDataMore(id))} to={`/home/${id}`}>{title}</Link>
          </h1>
        </div>
        <div className="entry-excerpt">
         {description}
        </div>
      </div>
    </article>
  );
}

export default DesignPhotography;
