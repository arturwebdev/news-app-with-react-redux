import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { setComment, setName } from "../../store/slices/inputs/inputsSlice";
import { deleteText, selectPosts, setEditId } from "../../store/slices/posts/postsSlice";
import "./CommentItems.css"

function CommentItem() {
    const { dataMore } = useSelector(selectPosts);
    const dispatch = useDispatch()

  return (
    <div>
        <ol className="commentlist">
        {dataMore?.comments.map((comment) => (
                  <li key={comment.id} className="depth-1">
                    <div className="avatar">
                      <img
                        width={50}
                        height={50}
                        className="avatar"
                        src={require("../../images/user-icon.webp")}
                        alt=""
                      />
                    </div>
                    <div className="comment-content">
                      <div className="comment-info">
                        <cite>{comment.name}</cite>
                      </div>
                      <div className="comment-text">
                        <p>{comment.body}</p>

                        <span
                            className="comment-delete"
                            onClick={() => dispatch(deleteText(comment.id))}
                            >
                              Delete
                        </span>
                        <span
                            className="comment-edit"
                            onClick={() => {
                                dispatch(setEditId(comment.id));
                                dispatch(setName(comment.name));
                                dispatch(setComment(comment.body));
                              }}
                            >
                              Edit
                        </span>
                        
                      </div>
                    </div>
                  </li>
                ))}
            </ol>
    </div>
  )
}

export default CommentItem