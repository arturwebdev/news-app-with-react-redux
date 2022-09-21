import React from "react"
import { useSelector } from "react-redux";
import { selectPosts } from "../../store/slices/posts/postsSlice";
import CommentItems from "../CommentItems/CommentItems";
import "./Comments.css"

function Comments() {
    const { dataMore } = useSelector(selectPosts);

  return (
    <div className="comments-wrap">
          <div id="comments" className="row">
            <div className="col-full">
              <h3>{dataMore?.comments.length} Comments</h3>

              <ol className="commentlist">
                <CommentItems />
              </ol>
            </div>
          </div>
        </div>
  )
}

export default Comments