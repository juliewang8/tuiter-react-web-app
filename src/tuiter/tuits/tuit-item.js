import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import { deleteTuit } from "./tuits-reducer";

const TuitItem = ({tuit}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }

  return(

    <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img width={70} className="float-end rounded-5" alt="" src={`/tuiter/explore/images/${tuit.image}`}/>
          </div>
          <div className="col-10">
            <div className="mb-2">
              <i className="bi bi-x-lg float-end"
                 onClick={() => deleteTuitHandler(tuit._id)}></i>
              <div className="row">
                <div className="fw-bolder col-auto p-0">
                  {tuit.userName}
                </div>
                <i className="bi bi-patch-check col-auto pe-0 ps-2"></i>
                <div className="col-auto ps-2">
                  {tuit.handle} • {tuit.time}
                </div>
              </div>
              <div>{tuit.tuit}</div>
            </div>
            <TuitStats tuit={tuit}/>
          </div>
        </div>
      </li>

 );
};
export default TuitItem;