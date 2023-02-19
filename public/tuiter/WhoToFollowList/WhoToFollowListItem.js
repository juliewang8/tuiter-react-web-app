/* eslint-env jquery */
const WhoToFollowListItem = (who) => {
  return(`
  <div class="list-group-item">
  <div class="d-flex flex-row align-items-center gap-2">
    <div>
      <img class="rounded-circle me-1" src=${who.avatarIcon} width="50px"/>
    </div>
    <div class="flex-fill d-flex flex-column">
      <div class="d-flex flex-row gap-1">
        <strong>${who.userName}</strong>
        <i class="fa fa-solid fa-check-circle mt-1"></i>
      </div>
      <div>
      @${who.handle}
      </div>
    </div>
    <button type="button" class="btn btn-primary rounded-pill follow-button">
      Follow
    </button>
  </div>
</div>`
  );
}

export default WhoToFollowListItem;

$('#wd-whotofollowlist').append(WhoToFollowListItem({
  avatarIcon: '../explore/images/virgin-galactic.png',
  userName: 'Virgin Galactic',
  handle: 'virgingalactic',
}
));