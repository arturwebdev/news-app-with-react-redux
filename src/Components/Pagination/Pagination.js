import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../../store/slices/posts/postsSlice";
import { selectPages, setPages, setCurrentPage } from "../../store/slices/pages/pagesSlice";
import "./Pagination.css";

function Pagination() {
  const { max } = useSelector(selectPosts);
  const { pages } = useSelector(selectPages);
  const { currentPage } = useSelector(selectPages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPages(max));
   
  }, [max]);

  return (
    <div className="row">
      <nav className="pagination">
        {pages.map((el) => (
          <span
            style={{ cursor: "pointer" }}
            key={el.id}
            onClick={() =>
              currentPage !== el.page && dispatch(setCurrentPage(el.page))
            }
            className={
              el.page === currentPage ? "page-numbers current" : "page-numbers"
            }
          >
            {el.page}
          </span>
        ))}
      </nav>
    </div>
  );
}

export default Pagination;
