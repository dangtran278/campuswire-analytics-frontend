import React from "react";
// import "./sidebar.css";

const SidebarCW = (props) => {
  return (
    <div class="list-wrapper">
      <div class="list-wrapper-scroller no-scrollbar d-flex flex-column">
        <div class="brand-logo">Campuswire</div>
        <ul class="nav-list">
          <li class="active">
            <div class="notification-btn-wrap" tabindex="0">
              <button type="button" class="icon-btn">
                <i class="fal fa-bell"></i>
                <span>Notifications</span>
              </button>
            </div>
          </li>
          <li class="">
            <button type="button" class="icon-btn">
              <i class="fal fa-comment"></i>
              <span>DMs</span>
            </button>
          </li>
          <li class="">
            <button type="button" class="icon-btn">
              <i class="fal fa-calendar-alt"></i>
              <span>Calendar</span>
            </button>
          </li>
          <li class="">
            <button type="button" class="icon-btn">
              <i class="fal fa-search"></i>
              <span>Search</span>
            </button>
          </li>
        </ul>
        <div class="group-nav-wrap">
          <div class="user-top-groups d-flex flex-wrap align-items-center" tabindex="0">
            <div class="user-img-wrap active" tabindex="0">
              <div class="img-wrap">
                <img src="https://files.campuswire.com/9dcb53a5-7edb-4a44-8a63-f968140a5513/1692107837674.png" />
              </div>
            </div>
            <div class="user-img-wrap" tabindex="0">
              <div class="img-wrap">
                <img src="https://s3-us-west-2.amazonaws.com/campuswire-default-images/group-architecture.png" />
              </div>
            </div>
            <div class="top-groups-action">
              <button type="button" class="btn btn-outline">
                <i class="fa-regular fa-chevron-down"></i>
              </button>
            </div>
          </div>
          <ul class="group-nav">
            <li class="">
              <button type="button" class="icon-btn">
                <i class="feeds-icon"></i>
                <span>Class feed</span>
              </button>
            </li>
            <li class="">
              <button type="button" class="icon-btn">
                <i class="fal fa-hashtag"></i>
                <span>Rooms</span>
              </button>
            </li>
            <li class="">
              <button type="button" class="icon-btn">
                <i class="fal fa-folder"></i>
                <span>Files</span>
              </button>
            </li>
            <li class="">
              <button type="button" class="icon-btn">
                <i class="grades-icon">A+</i>
                <span>Grades</span>
              </button>
            </li>
            <li class="">
              <button type="button" class="icon-btn">
                <i class="fal fa-cog"></i>
                <span>Settings</span>
              </button>
            </li>
          </ul>
        </div>
        <div class="collapse-btn-wrap d-flex align-items-center">
          <i class="far fa-arrow-left-from-line"></i>
          <span>Collapse</span>
        </div>
      </div>
      <div class="settings-nav-wrap">
        <div class="settings-nav">
          <div class="settings-actions d-flex">
            <a
              href="mailto:help@campuswire.com"
              rel="noopener noreferrer"
              class="icon-btn text-center"
            >
              <i class="far fa-question-circle"></i>
            </a>
            <button
              type="button"
              class="icon-btn"
              data-canny-changelog="true"
              style="position: relative;"
            >
              <i class="far fa-gift"></i>
              <div class="Canny_BadgeContainer">
                <div class="Canny_Badge"></div>
              </div>
            </button>
          </div>
          <div class="user-settings-wrap d-flex align-items-center">
            <div tabindex="0">
              <div class="user-img-wrap">
                <div class="img-wrap">
                  <img src="https://s3-us-west-2.amazonaws.com/campuswire-default-images/user-cyan.png" />
                </div>
                <span class="user-status idle"></span>
              </div>
            </div>
            <div class="user-info">
              <h6>Dang</h6>
              <p>Idle</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarCW;
