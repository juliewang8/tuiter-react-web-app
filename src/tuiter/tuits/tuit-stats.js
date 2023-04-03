import React from "react";
import {useDispatch} from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";
const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  return(
  <div className="row mt-3">
    <div className="col">
        <i className="me-2 bi bi-chat"></i>
      {tuit.replies}
    </div>
    <div className="col">
      <i className="me-2 bi bi-arrow-repeat"></i>
      {tuit.retuits}
    </div>
      <div>
      {tuit.likes}
      <i onClick={() => dispatch(updateTuitThunk({
        ...tuit,
        likes: tuit.likes + 1
      }))} className="bi bi-heart-fill me-2 text-danger"></i>
    </div>
    <div>
      {tuit.dislikes}
      <i onClick={() => dispatch(updateTuitThunk({
        ...tuit,
        dislikes: tuit.dislikes + 1
      }))} className="bi bi-hand-thumbs-down-fill me-2 text-danger"></i>
    </div>
    <div className="col">
      <i className="me-2 bi bi-share"></i>
    </div>
  </div>
 );
};
export default TuitStats;