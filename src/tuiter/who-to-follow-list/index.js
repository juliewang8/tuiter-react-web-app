import React from "react";
import {useSelector} from 'react-redux';
import WhoToFollowListItem
  from "./who-to-follow-list-item";

const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who);
  return(
    <ul className="list-group">
      <li className="list-group-item">
        <h3>Who to follow</h3>
      </li>
      {
        whoArray.map(who =>
          <WhoToFollowListItem
            key={who._id}
            who={who}/>
        )
      }
    </ul>
  );
};

export default WhoToFollowList;