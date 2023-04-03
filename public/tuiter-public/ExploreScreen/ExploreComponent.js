import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
    <div class="d-flex flex-row align-items-center">
    <i class="position-absolute fa fa-search ms-3 text-black"></i>
    <input
      type="text"
      class="form-control rounded-pill"
      placeholder="         Search Tuiter"
    />
    <i class="fa fa-cog fa-2x ms-3 text-primary"></i>
  </div>

  <ul class="nav nav-tabs mt-3">
    <li class="nav-item">
        <a class="nav-link active" href="#">For you</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="./trending.html">Trending</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="./news.html">News</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="./sports.html">Sports</a>
    </li>
    <li class="nav-item d-none d-md-block">
      <a class="nav-link" href="./entertainment.html">Entertainment</a>
    </li>
  </ul>
  <div class="card">
    <img src="images/spacex.webp" class="w-100"/>
    <div class="spacex-text">
      <h3 class="card-title text-img-overlay">SpaceX's Starship</h3>
    </div>
  </div>
          ${PostSummaryList()}
    `);
}

export default ExploreComponent;
