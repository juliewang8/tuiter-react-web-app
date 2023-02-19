/* eslint-env jquery */
const PostSummaryItem = (post) => {
  return(`
  <li class="list-group-item d-flex flex-row align-items-center justify-content-between">
    <div class="d-flex flex-column">
      <span class="text-muted">${post.topic}</span>
      <div class="d-flex flex-row align-items-center gap-1">
        <strong class="text-white">${post.userName}</strong>
        <i class="fa fa-check-circle text-white"></i>
        <span class="text-muted">-</span>
        <span class="text-muted">${post.time}</span>
      </div>
      <strong class="text-white">${post.title}</strong>
    </div>
    <img class="ms-3" src=${post.image} height="90px"/>
  </li>
  `);
}

export default PostSummaryItem;

$('#wd-postsummary').append(PostSummaryItem({
  "topic": "Web Development",
  "userName": "ReactJS",
  "time": "2h",
  "image": "../explore/images/react.png",
  "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
 } 
));