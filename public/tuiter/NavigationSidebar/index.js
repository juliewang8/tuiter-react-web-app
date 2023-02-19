/* eslint-env jquery */

const NavigationSidebar = () => {
  return(`
  <div class="list-group">
  <a href="" class="list-group-item list-group-item-action">
    <i class="fab fa-twitter"></i>
    </a>
  <a href="" class="list-group-item list-group-item-action">
    <i class="fas fa-home me-1"></i>
    <span class="d-none d-xl-inline">
      Home
    </span>
    </a>
  <a href="" class="list-group-item list-group-item-action active">
    <i class="fa fa-hashtag me-1"></i>
    <span class="d-none d-xl-inline">
      Explore
    </span>
  </a>
  <a href="" class="list-group-item list-group-item-action">
    <i class="fa fa-bell me-1"></i>
    <span class="d-none d-xl-inline">
      Notifications
    </span></a>
  <a href="" class="list-group-item list-group-item-action">
    <i class="fa fa-envelope me-1"></i>
    <span class="d-none d-xl-inline">
      Messages
    </span></a>
  <a href="" class="list-group-item list-group-item-action">
    <i class="fa fa-bookmark me-1"></i>
    <span class="d-none d-xl-inline">
      Bookmarks
    </span></a>
  <a href="" class="list-group-item list-group-item-action">
    <i class="fa fa-list me-1"></i>
    <span class="d-none d-xl-inline">
      Lists
    </span></a>
  <a href="" class="list-group-item list-group-item-action">
    <i class="fa fa-user me-1"></i>
    <span class="d-none d-xl-inline">
      Profile
    </span></a>
  <a href="" class="list-group-item list-group-item-action">
    <i class="fa fa-ellipsis-h me-1"></i>
    <span class="d-none d-xl-inline">
      More
    </span></a>
 </div>
 <button type="button" class="btn btn-primary w-100 rounded-pill mt-2 px-0">Tuit</button>
  `);
 }

 export default NavigationSidebar;