/*eslint-env jquery*/
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
   return(`
      <div class="list-group">
          <div class="list-group-item">
            <strong>Who to follow</strong>
          </div>
      ${
        who.map(todo => {
           return(WhoToFollowListItem(todo));
        }).join('')
     }
     </div>
   `);
}
export default WhoToFollowList;
