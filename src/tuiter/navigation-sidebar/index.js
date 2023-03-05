import React from "react";

const NavigationSidebar = (
    {
      active = 'explore'
    }
) => {
  return (
      <div className="list-group">
        <a href="./tuiter.html" className="list-group-item">
          <i className="bi bi-twitter"></i> Tuiter</a>
        <a href="./home.html" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
          <i className="bi bi-house-door-fill"></i> Home
        </a>
        <a href="./explore.html" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
          <i className="bi bi-hash"></i> Explore
        </a>
        <a href="./notifications.html" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
          <i className="bi bi-bell-fill"></i> Notifications
        </a>
        <a href="./messages.html" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
          <i className="bi bi-envelope-fill"></i> Messages
        </a>
        <a href="./bookmarks.html" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
          <i className="bi bi-bookmark-fill"></i> Bookmarks
        </a>
        <a href="./lists.html" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
          <i className="bi bi-list"></i> Lists
        </a>
        <a href="./profile.html" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
          <i className="bi bi-person-fill"></i> Profile
        </a>
        <a href="./more.html" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
          <i className="bi bi-three-dots"></i> More
        </a>
      </div>
  );

};
export default NavigationSidebar;