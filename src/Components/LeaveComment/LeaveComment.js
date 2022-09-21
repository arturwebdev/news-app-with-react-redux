import React from "react"
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectInputs, setComment, setName } from "../../store/slices/inputs/inputsSlice";
import { addNewComment, editComment, selectPosts } from "../../store/slices/posts/postsSlice";
import "./LeaveComment.css"


function LeaveComment() {
    const { editId } = useSelector(selectPosts);
    const dispatch = useDispatch();
    const inputs = useSelector(selectInputs);

    const handleSubmit = useCallback(
        (e) => {
          e.preventDefault();
    
          if (editId) {
            dispatch(editComment(inputs));
          } else {
            dispatch(
              addNewComment({
                name: inputs.name,
                body: inputs.comment,
              })
            );
          }
          dispatch(setName(""));
          dispatch(setComment(""));
        },
        [inputs, editId]
      );


  return (
    <div className="respond">
      <h3>Leave a Comment</h3>
      <form
        name="contactForm"
        id="contactForm"
        onSubmit={handleSubmit}
      >
        <fieldset>
          <div className="form-field">
            <input
              value={inputs.name}
              onChange={(e) => dispatch(setName(e.target.value))}
              name="cName"
              type="text"
              id="cName"
              className="full-width"
              placeholder="Your Name"
            />
          </div>
          <div className="message form-field">
            <textarea
              value={inputs.comment}
              onChange={(e) => dispatch(setComment(e.target.value))}
              name="cMessage"
              id="cMessage"
              className="full-width"
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className="submit button-primary">
            Submit
          </button>
        </fieldset>
      </form>
  </div>
  )
}

export default LeaveComment