import React from "react";
import {useDispatch} from "react-redux";
import { likeButtonToggle } from "./tuits-reducer";
const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const toggleLikeButton = (tuit) => {
    dispatch(likeButtonToggle(tuit))
  }
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
    <div className="col">
      <i onClick={()=> toggleLikeButton(tuit)} className={`me-2 bi ${tuit.liked ? "bi-heart-fill text-danger" : "bi-heart"}`}></i>
      {tuit.likes}
    </div>
    <div className="col">
      <i className="me-2 bi bi-share"></i>
    </div>
  </div>
 );
};
export default TuitStats;