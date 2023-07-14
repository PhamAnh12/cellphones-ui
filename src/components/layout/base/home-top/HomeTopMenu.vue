<template>
  <MenuListPhone
    v-show="isMenuPhone"
    @mouseover="isMenuPhone = true"
    @mouseleave="isMenuPhone = false"
  >
  </MenuListPhone>
  <MenuListLaptop
    v-show="isMenuLaptop"
    @mouseover="isMenuLaptop = true"
    @mouseleave="isMenuLaptop = false"
  />
  <MenuListEarphone
    v-show="isMenuEarphone"
    @mouseover="isMenuEarphone = true"
    @mouseleave="isMenuEarphone = false"
  />
  <MenuListClock
    v-show="isMenuClock"
    @mouseover="isMenuClock = true"
    @mouseleave="isMenuClock = false"
  ></MenuListClock>
  <MenuListSmartHome
    v-show="isMenuSmartHome"
    @mouseover="isMenuSmartHome = true"
    @mouseleave="isMenuSmartHome = false"
  />
  <MenuListAccessory
    v-show="isMenuAccessory"
    @mouseover="isMenuAccessory = true"
    @mouseleave="isMenuAccessory = false"
  ></MenuListAccessory>
  <MenuListPC
    v-show="isMenuPC"
    @mouseover="isMenuPC = true"
    @mouseleave="isMenuPC = false"
  ></MenuListPC>
  <MenuListTivi
    v-show="isMenuTivi"
    @mouseover="isMenuTivi = true"
    @mouseleave="isMenuTivi = false"
  ></MenuListTivi>
  <MenuListPriceOld
    v-show="isMenuPriceOld"
    @mouseover="isMenuPriceOld = true"
    @mouseleave="isMenuPriceOld = false"
  ></MenuListPriceOld>
  <MenuListOld
    v-show="isMenuOld"
    @mouseover="isMenuOld = true"
    @mouseleave="isMenuOld = false"
  ></MenuListOld>
  <MenuListPromotion
    v-show="isMenuPromotion"
    @mouseover="isMenuPromotion = true"
    @mouseleave="isMenuPromotion = false"
  ></MenuListPromotion>
  <MenuListNewsTech
    v-show="isMenuNewTech"
    @mouseover="isMenuNewTech = true"
    @mouseleave="isMenuNewTech = false"
  ></MenuListNewsTech>
  <div class="home-top-menu">
    <div
      class="home-top-menu-item"
      @mouseover="isMenuPhone = true"
      @mouseleave="isMenuPhone = false"
    >
      <div class="top-menu-item-left">
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 25 25"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="iphoneIconTitle"
          stroke="#000000"
          stroke-width="1"
          stroke-linecap="square"
          stroke-linejoin="miter"
          fill="none"
          color="#000000"
        >
          <title id="iphoneIconTitle">iPhone</title>
          <path
            d="M18.75 3.125v18.75a1.042 1.042 0 0 1 -1.042 1.042H7.292a1.042 1.042 0 0 1 -1.042 -1.042V3.125a1.042 1.042 0 0 1 1.042 -1.042h10.417a1.042 1.042 0 0 1 1.042 1.042Z"
          />
          <path
            points="14 2 14 3 10 3 10 2"
            d="M14.583 2.083L14.583 3.125L10.417 3.125L10.417 2.083Z"
          />
        </svg>
        <div class="top-menu-item-content">
          <a href="/mobile">
            <span>Điện Thoại,</span>
          </a>
          <a href="">
            <span>Tablet</span>
          </a>
        </div>
      </div>
      <div class="top-menu-item-right">
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
        >
          <path
            d="M11.216 7.131 4.613 1.973A0.117 0.117 0 0 0 4.424 2.065v1.132c0 0.072 0.034 0.141 0.089 0.185l5.273 4.118 -5.273 4.118c-0.057 0.044 -0.089 0.113 -0.089 0.185V12.935c0 0.098 0.113 0.152 0.189 0.092l6.604 -5.158a0.468 0.468 0 0 0 0 -0.738z"
          />
        </svg>
      </div>
    </div>
    <div
      class="home-top-menu-item"
      @mouseover="isMenuLaptop = true"
      @mouseleave="isMenuLaptop = false"
    >
      <div class="top-menu-item-left">
        <svg
          fill="#343a40"
          width="25px"
          height="25px"
          viewBox="0 0 1 1"
          version="1.1"
          id="laptop"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          enable-background="new 0 0 32 32"
          xml:space="preserve"
        >
          <path y="26" width="32" height="2" d="M0 0.813H1V0.875H0V0.813z" />
          <path
            d="M0.938 0.125H0.063v0.625h0.875V0.125zm-0.063 0.563H0.125V0.188h0.75v0.5z"
          />
        </svg>
        <div class="top-menu-item-content">
          <a href="">
            <span>Laptop</span>
          </a>
        </div>
      </div>
      <div class="top-menu-item-right">
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
        >
          <path
            d="M11.216 7.131 4.613 1.973A0.117 0.117 0 0 0 4.424 2.065v1.132c0 0.072 0.034 0.141 0.089 0.185l5.273 4.118 -5.273 4.118c-0.057 0.044 -0.089 0.113 -0.089 0.185V12.935c0 0.098 0.113 0.152 0.189 0.092l6.604 -5.158a0.468 0.468 0 0 0 0 -0.738z"
          />
        </svg>
      </div>
    </div>
    <div
      class="home-top-menu-item top-menu-item-phone"
      @mouseover="isMenuEarphone = true"
      @mouseleave="isMenuEarphone = false"
    >
      <div class="top-menu-item-left">
        <svg
          fill="#343a40"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 25 25"
          style="enable-background: new 0 0 511.956 511.956"
          xml:space="preserve"
          width="25"
          height="25"
        >
          <g transform="translate(0 -1)">
            <g>
              <g>
                <path
                  d="M10.127 5.407c-0.075 -0.127 -0.259 -0.416 -0.27 -0.436C7.666 0.943 1.379 1.228 0.159 5.65l-0.017 0.06c-0.22 0.854 -0.174 3.405 0.056 4.24 0.185 0.678 0.409 1.244 0.754 1.773 1.345 2.062 3.793 2.621 5.227 0.748 0.016 -0.02 0.039 -0.047 0.067 -0.078l0 9.534c0 0.575 0.466 1.042 1.042 1.042h3.127c0.575 0 1.042 -0.466 1.042 -1.042V11.76c0 -2.321 -0.305 -4.05 -0.841 -5.365 -0.15 -0.369 -0.31 -0.685 -0.49 -0.988zm-0.753 15.477h-1.044V12.413c0.049 -2.029 -0.996 -3.135 -2.489 -2.358 -0.255 0.133 -0.496 0.313 -0.735 0.532 -0.244 0.224 -0.44 0.442 -0.568 0.602 -0.433 0.565 -1.192 0.391 -1.84 -0.603 -0.205 -0.315 -0.356 -0.695 -0.489 -1.185 -0.136 -0.494 -0.175 -2.677 -0.057 -3.139l0.012 -0.042c0.7 -2.536 4.526 -2.71 5.864 -0.251 0.051 0.094 0.264 0.429 0.307 0.503 0.129 0.218 0.243 0.443 0.352 0.711 0.428 1.051 0.687 2.515 0.687 4.578v9.125z"
                />
                <path
                  d="M24.864 5.741c-0.019 -0.071 -0.019 -0.071 -0.029 -0.106 -1.215 -4.407 -7.503 -4.692 -9.694 -0.663 -0.011 0.02 -0.194 0.308 -0.269 0.435 -0.18 0.303 -0.339 0.619 -0.49 0.988 -0.536 1.314 -0.841 3.043 -0.841 5.365v10.166c0 0.575 0.466 1.042 1.042 1.042h3.127c0.575 0 1.042 -0.466 1.042 -1.042V12.413c0.032 0.017 0.059 0.049 0.079 0.075 1.421 1.857 3.869 1.298 5.214 -0.764 0.345 -0.529 0.569 -1.095 0.755 -1.776 0.229 -0.834 0.276 -3.385 0.064 -4.206zm-2.073 3.656c-0.134 0.492 -0.285 0.873 -0.49 1.188 -0.648 0.994 -1.408 1.167 -1.828 0.619 -0.14 -0.176 -0.336 -0.395 -0.58 -0.618 -0.238 -0.218 -0.48 -0.399 -0.735 -0.532 -1.493 -0.777 -2.538 0.33 -2.489 2.383l0 8.447h-1.044V11.76c0 -2.064 0.258 -3.527 0.687 -4.578 0.11 -0.269 0.223 -0.493 0.352 -0.711 0.044 -0.074 0.256 -0.408 0.307 -0.502 1.338 -2.459 5.164 -2.286 5.86 0.236 0.015 0.055 0.015 0.055 0.025 0.09 0.111 0.43 0.071 2.612 -0.065 3.104z"
                />
              </g>
            </g>
          </g>
        </svg>
        <div class="top-menu-item-content">
          <a href="">
            <span>Âm thanh</span>
          </a>
        </div>
      </div>
      <div class="top-menu-item-right">
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
        >
          <path
            d="M11.216 7.131 4.613 1.973A0.117 0.117 0 0 0 4.424 2.065v1.132c0 0.072 0.034 0.141 0.089 0.185l5.273 4.118 -5.273 4.118c-0.057 0.044 -0.089 0.113 -0.089 0.185V12.935c0 0.098 0.113 0.152 0.189 0.092l6.604 -5.158a0.468 0.468 0 0 0 0 -0.738z"
          />
        </svg>
      </div>
    </div>
    <div
      class="home-top-menu-item top-menu-item-phone"
      @mouseover="isMenuClock = true"
      @mouseleave="isMenuClock = false"
    >
      <div class="top-menu-item-left">
        <svg
          fill="#343a40"
          width="25px"
          height="25px"
          viewBox="0 0 0.75 0.75"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.531 0.212V0.094a0.031 0.031 0 0 0 -0.031 -0.031H0.25a0.031 0.031 0 0 0 -0.031 0.031v0.118A0.094 0.094 0 0 0 0.188 0.281v0.188a0.094 0.094 0 0 0 0.031 0.069V0.656a0.031 0.031 0 0 0 0.031 0.031h0.25a0.031 0.031 0 0 0 0.031 -0.031v-0.118A0.094 0.094 0 0 0 0.563 0.469V0.281a0.094 0.094 0 0 0 -0.031 -0.069ZM0.281 0.125h0.188v0.063H0.281Zm0.188 0.5H0.281v-0.063h0.188Zm0.031 -0.156a0.031 0.031 0 0 1 -0.031 0.031H0.281a0.031 0.031 0 0 1 -0.031 -0.031V0.281a0.031 0.031 0 0 1 0.031 -0.031h0.188a0.031 0.031 0 0 1 0.031 0.031Z"
          />
        </svg>

        <div class="top-menu-item-content">
          <a href="">
            <span>Đồng hồ,</span>
          </a>
          <a href="">
            <span> Máy ảnh</span>
          </a>
        </div>
      </div>
      <div class="top-menu-item-right">
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
        >
          <path
            d="M11.216 7.131 4.613 1.973A0.117 0.117 0 0 0 4.424 2.065v1.132c0 0.072 0.034 0.141 0.089 0.185l5.273 4.118 -5.273 4.118c-0.057 0.044 -0.089 0.113 -0.089 0.185V12.935c0 0.098 0.113 0.152 0.189 0.092l6.604 -5.158a0.468 0.468 0 0 0 0 -0.738z"
          />
        </svg>
      </div>
    </div>
    <div
      class="home-top-menu-item top-menu-item-phone"
      @mouseover="isMenuSmartHome = true"
      @mouseleave="isMenuSmartHome = false"
    >
      <div class="top-menu-item-left">
        <svg
          fill="#343a40"
          width="25px"
          height="25px"
          viewBox="0 0 1 1"
          data-name="Layer 2"
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <path
            height="11"
            rx="1"
            ry="1"
            width="8"
            x="12"
            y="19"
            d="M0.406 0.594H0.594A0.031 0.031 0 0 1 0.625 0.625V0.906A0.031 0.031 0 0 1 0.594 0.938H0.406A0.031 0.031 0 0 1 0.375 0.906V0.625A0.031 0.031 0 0 1 0.406 0.594z"
          />
          <path
            d="M0.656 0.938H0.344a0.156 0.156 0 0 1 -0.156 -0.156v-0.25h-0.018a0.063 0.063 0 0 1 -0.058 -0.038A0.063 0.063 0 0 1 0.125 0.425L0.456 0.094a0.063 0.063 0 0 1 0.088 0L0.875 0.425a0.063 0.063 0 0 1 0.013 0.068A0.063 0.063 0 0 1 0.831 0.531H0.813v0.25a0.156 0.156 0 0 1 -0.156 0.156ZM0.219 0.469a0.031 0.031 0 0 1 0.031 0.031v0.281a0.094 0.094 0 0 0 0.094 0.094h0.313a0.094 0.094 0 0 0 0.094 -0.094v-0.281a0.031 0.031 0 0 1 0.031 -0.031h0.05L0.5 0.138 0.169 0.469Z"
          />
          <path
            d="M0.25 0.557 0.219 0.781a0.125 0.125 0 0 0 0.125 0.125h0.313c0.069 0 0.094 -0.056 0.094 -0.125v-0.125s0.026 0.109 -0.225 0.109C0.346 0.765 0.25 0.625 0.25 0.557Z"
          />
        </svg>
        <div class="top-menu-item-content">
          <a href="">
            <span>Gia dụng,</span>
          </a>
          <a href="">
            <span>Smarthome</span>
          </a>
        </div>
      </div>
      <div class="top-menu-item-right">
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
        >
          <path
            d="M11.216 7.131 4.613 1.973A0.117 0.117 0 0 0 4.424 2.065v1.132c0 0.072 0.034 0.141 0.089 0.185l5.273 4.118 -5.273 4.118c-0.057 0.044 -0.089 0.113 -0.089 0.185V12.935c0 0.098 0.113 0.152 0.189 0.092l6.604 -5.158a0.468 0.468 0 0 0 0 -0.738z"
          />
        </svg>
      </div>
    </div>
    <div
      class="home-top-menu-item top-menu-item-phone"
      @mouseover="isMenuAccessory = true"
      @mouseleave="isMenuAccessory = false"
    >
      <div class="top-menu-item-left">
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 0.625 0.625"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="layer1">
            <path
              d="M0.188 0v0.156H0.156v0.438l0.031 0.031h0.219l0.031 -0.031V0.156h-0.031V0Zm0.031 0.031h0.156v0.125H0.219Zm0.031 0.031v0.031h0.031V0.063Zm0.063 0v0.031h0.031V0.063ZM0.188 0.188h0.219v0.391l-0.016 0.016h-0.188l-0.016 -0.016Z"
              style="
                fill: #343a40;
                fill-opacity: 1;
                stroke: none;
                stroke-width: 0px;
              "
            />
          </g>
        </svg>
        <div class="top-menu-item-content">
          <a href="">
            <span>Phụ kiện</span>
          </a>
        </div>
      </div>
      <div class="top-menu-item-right">
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
        >
          <path
            d="M11.216 7.131 4.613 1.973A0.117 0.117 0 0 0 4.424 2.065v1.132c0 0.072 0.034 0.141 0.089 0.185l5.273 4.118 -5.273 4.118c-0.057 0.044 -0.089 0.113 -0.089 0.185V12.935c0 0.098 0.113 0.152 0.189 0.092l6.604 -5.158a0.468 0.468 0 0 0 0 -0.738z"
          />
        </svg>
      </div>
    </div>
    <div
      class="home-top-menu-item top-menu-item-phone"
      @mouseover="isMenuPC = true"
      @mouseleave="isMenuPC = false"
    >
      <div class="top-menu-item-left">
        <svg
          fill="#343a40"
          width="25px"
          height="25px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <g data-name="Layer 11" id="Layer_11">
            <path
              d="M28.8,1H20.2A2.21,2.21,0,0,0,18,3.2V5H3.6A2.61,2.61,0,0,0,1,7.6V22.4A2.61,2.61,0,0,0,3.6,25h6.64L9.7,29H8.86a1,1,0,1,0,0,2H19.14a1,1,0,0,0,0-2h-.86l-.68-4h6.8A2.61,2.61,0,0,0,27,22.4V7.6A2.61,2.61,0,0,0,24.4,5H20V3.2a.2.2,0,0,1,.2-.2h8.6a.2.2,0,0,1,.2.2V26.8a.2.2,0,0,1-.2.2H21a1,1,0,0,0,0,2h7.8A2.21,2.21,0,0,0,31,26.8V3.2A2.21,2.21,0,0,0,28.8,1ZM16.25,29H11.72l.54-4h3.32ZM25,7.6V22.4a.6.6,0,0,1-.6.6H3.6a.6.6,0,0,1-.6-.6V7.6A.6.6,0,0,1,3.6,7H24.4A.6.6,0,0,1,25,7.6Z"
            />
          </g>
        </svg>

        <div class="top-menu-item-content">
          <a href="">
            <span>PC,</span>
          </a>
          <a href="">
            <span>Màn hình</span>
          </a>
        </div>
      </div>
      <div class="top-menu-item-right">
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
        >
          <path
            d="M11.216 7.131 4.613 1.973A0.117 0.117 0 0 0 4.424 2.065v1.132c0 0.072 0.034 0.141 0.089 0.185l5.273 4.118 -5.273 4.118c-0.057 0.044 -0.089 0.113 -0.089 0.185V12.935c0 0.098 0.113 0.152 0.189 0.092l6.604 -5.158a0.468 0.468 0 0 0 0 -0.738z"
          />
        </svg>
      </div>
    </div>
    <div
      class="home-top-menu-item top-menu-item-phone"
      @mouseover="isMenuTivi = true"
      @mouseleave="isMenuTivi = false"
    >
      <div class="top-menu-item-left">
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 32 32"
          fill="#343a40"
          class="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.2 24.125c-0.425 0 -0.75 -0.325 -0.75 -0.75V4.4c0 -0.425 0.325 -0.75 0.75 -0.75h27.575c0.425 0 0.75 0.325 0.75 0.75V23.375c0 0.5 -0.35 0.75 -0.7 0.75h-27.625zm0.75 -1.375h26.125V5.2h-26.125V22.75z"
            fill=""
          />
          <path
            d="M22.925 20.7c-0.425 0 -0.75 -0.325 -0.75 -0.75s0.325 -0.75 0.75 -0.75h2.925c0.425 0 0.75 0.325 0.75 0.75s-0.4 0.75 -0.75 0.75h-2.925zM16 27.625c-0.425 0 -0.75 -0.325 -0.75 -0.75V23.7c0 -0.425 0.325 -0.75 0.75 -0.75s0.75 0.325 0.75 0.75v3.225c-0.025 0.375 -0.35 0.7 -0.75 0.7z"
            fill=""
          />
          <path
            d="M9.875 28.275c-0.425 0 -0.75 -0.325 -0.75 -0.75s0.325 -0.75 0.75 -0.75h12.275c0.425 0 0.75 0.325 0.75 0.75s-0.4 0.75 -0.75 0.75H9.875z"
            fill=""
          />
        </svg>

        <div class="top-menu-item-content">
          <a href="">
            <span>Tivi</span>
          </a>
        </div>
      </div>
      <div class="top-menu-item-right">
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
        >
          <path
            d="M11.216 7.131 4.613 1.973A0.117 0.117 0 0 0 4.424 2.065v1.132c0 0.072 0.034 0.141 0.089 0.185l5.273 4.118 -5.273 4.118c-0.057 0.044 -0.089 0.113 -0.089 0.185V12.935c0 0.098 0.113 0.152 0.189 0.092l6.604 -5.158a0.468 0.468 0 0 0 0 -0.738z"
          />
        </svg>
      </div>
    </div>
    <div
      class="home-top-menu-item top-menu-item-phone"
      @mouseover="isMenuPriceOld = true"
      @mouseleave="isMenuPriceOld = false"
    >
      <div class="top-menu-item-left">
        <svg
          fill="#343a40"
          width="25px"
          height="25px"
          viewBox="0 0 0.75 0.75"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.563 0.345V0.531a0.063 0.063 0 0 1 -0.063 0.063c-0.028 0 -0.053 -0.007 -0.073 -0.022a0.047 0.047 0 0 0 -0.027 -0.009 0.017 0.017 0 0 0 -0.017 0.012c-0.003 0.01 -0.001 0.021 0.005 0.028l0.109 0.122a0.016 0.016 0 0 1 -0.023 0.021L0.375 0.635l-0.098 0.11a0.016 0.016 0 1 1 -0.023 -0.021l0.102 -0.114a0.058 0.058 0 0 1 -0.002 -0.047 0.017 0.017 0 0 0 -0.002 0h-0.001a0.047 0.047 0 0 0 -0.027 0.009c-0.021 0.015 -0.046 0.022 -0.073 0.022H0.203a0.016 0.016 0 0 1 -0.016 -0.016v-0.233A0.109 0.109 0 0 0 0.094 0.453v0.281a0.016 0.016 0 1 1 -0.031 0v-0.281a0.141 0.141 0 0 1 0.125 -0.14V0.078A0.078 0.078 0 0 1 0.266 0h0.219A0.078 0.078 0 0 1 0.563 0.078v0.235a0.141 0.141 0 0 1 0.125 0.14v0.281a0.016 0.016 0 1 1 -0.031 0v-0.281a0.109 0.109 0 0 0 -0.094 -0.108Zm-0.031 -0.017V0.078A0.047 0.047 0 0 0 0.484 0.031h-0.219A0.047 0.047 0 0 0 0.219 0.078V0.563h0.031c0.022 0 0.04 -0.006 0.055 -0.017A0.078 0.078 0 0 1 0.351 0.531h0.001c0.008 0 0.016 0.002 0.024 0.006 0.007 -0.004 0.015 -0.006 0.023 -0.006a0.079 0.079 0 0 1 0.046 0.015c0.015 0.011 0.034 0.017 0.055 0.017a0.031 0.031 0 0 0 0.031 -0.031v-0.203ZM0.328 0.094a0.016 0.016 0 1 1 0 -0.031h0.094a0.016 0.016 0 1 1 0 0.031h-0.094Z"
          />
        </svg>
        <div class="top-menu-item-content">
          <a href="">
            <span>Thu cũ đổi mới</span>
          </a>
        </div>
      </div>
      <div class="top-menu-item-right">
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
        >
          <path
            d="M11.216 7.131 4.613 1.973A0.117 0.117 0 0 0 4.424 2.065v1.132c0 0.072 0.034 0.141 0.089 0.185l5.273 4.118 -5.273 4.118c-0.057 0.044 -0.089 0.113 -0.089 0.185V12.935c0 0.098 0.113 0.152 0.189 0.092l6.604 -5.158a0.468 0.468 0 0 0 0 -0.738z"
          />
        </svg>
      </div>
    </div>
    <div
      class="home-top-menu-item top-menu-item-phone"
      @mouseover="isMenuOld = true"
      @mouseleave="isMenuOld = false"
    >
      <div class="top-menu-item-left">
        <svg
          fill="#343a40"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 25 25"
          style="enable-background: new 0 0 502 502"
          xml:space="preserve"
          width="25"
          height="25"
        >
          <g>
            <g>
              <g>
                <path
                  d="M19.868 0H5.132c-0.275 0 -0.498 0.223 -0.498 0.498v24.004c0 0.275 0.223 0.498 0.498 0.498h14.737c0.275 0 0.498 -0.223 0.498 -0.498V0.498c0 -0.275 -0.223 -0.498 -0.498 -0.498zm-0.498 0.996v2.874L16.497 0.996h2.874zM5.63 7.484l0.001 -0.001 2.991 -2.991 2.135 2.135c0.097 0.097 0.225 0.146 0.352 0.146s0.255 -0.049 0.352 -0.146c0.194 -0.194 0.194 -0.51 0 -0.704l-2.135 -2.135 0.492 -0.492c0.194 -0.194 0.194 -0.51 0 -0.704 -0.194 -0.194 -0.51 -0.194 -0.704 0l-3.484 3.484V0.996h9.458l4.282 4.282v0.428L10.513 14.564l-4.814 -4.814a0.501 0.501 0 0 0 -0.069 -0.057v-2.209zm0 3.606 4.179 4.179 -4.026 4.026h-0.153V11.09zm0 12.914v-3.714h13.741V24.004H5.63zm13.741 -4.71h-0.833l0.833 -0.833v0.833zm0 -2.241 -2.241 2.241H7.191l3.674 -3.674 0 0 0 0 8.505 -8.505v6.716l-2.123 -2.123c-0.195 -0.194 -0.51 -0.194 -0.704 0 -0.194 0.194 -0.194 0.51 0 0.704l2.827 2.827v1.813z"
                />
                <path
                  d="M12.5 20.662c-0.833 0 -1.511 0.678 -1.511 1.511s0.678 1.511 1.511 1.511 1.511 -0.678 1.511 -1.511 -0.678 -1.511 -1.511 -1.511zm0 2.026c-0.284 0 -0.515 -0.231 -0.515 -0.515S12.216 21.658 12.5 21.658s0.515 0.231 0.515 0.515 -0.231 0.515 -0.515 0.515z"
                />
                <path
                  d="M13.369 9.238c0.097 0.097 0.225 0.146 0.352 0.146s0.255 -0.049 0.352 -0.146c0.194 -0.194 0.194 -0.51 0 -0.704l-1.018 -1.018c-0.194 -0.194 -0.51 -0.194 -0.704 0 -0.194 0.194 -0.194 0.51 0 0.704l1.018 1.018z"
                />
              </g>
            </g>
          </g>
        </svg>
        <div class="top-menu-item-content">
          <a href="">
            <span>Hàng cũ</span>
          </a>
        </div>
      </div>
      <div class="top-menu-item-right">
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
        >
          <path
            d="M11.216 7.131 4.613 1.973A0.117 0.117 0 0 0 4.424 2.065v1.132c0 0.072 0.034 0.141 0.089 0.185l5.273 4.118 -5.273 4.118c-0.057 0.044 -0.089 0.113 -0.089 0.185V12.935c0 0.098 0.113 0.152 0.189 0.092l6.604 -5.158a0.468 0.468 0 0 0 0 -0.738z"
          />
        </svg>
      </div>
    </div>
    <div
      class="home-top-menu-item top-menu-item-phone"
      @mouseover="isMenuPromotion = true"
      @mouseleave="isMenuPromotion = false"
    >
      <div class="top-menu-item-left">
        <svg
          fill="#343a40"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 25 25"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          width="25"
          height="25"
        >
          <g>
            <g>
              <path
                d="m8.865 13.684 8.444 5.197V0L8.865 5.197H0.335v8.487h1.654L1.423 25h8.531V19.908h-0.849c-1.092 0 -1.98 -0.888 -1.98 -1.98v-4.244h1.74zm1.089 -7.164 5.658 -3.482v12.805L9.954 12.361V6.52zm-1.697 14.987v1.796h-5.049l0.481 -9.619h1.739v4.244c0 1.736 1.209 3.195 2.829 3.579zM2.033 11.986V6.894h6.224v5.092H2.033z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="m19.818 3.671 -1.494 0.806c0.817 1.514 1.249 3.23 1.249 4.963 0 1.743 -0.437 3.468 -1.263 4.989l1.492 0.81c0.961 -1.769 1.469 -3.774 1.469 -5.799 0 -2.013 -0.502 -4.008 -1.452 -5.769z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="m22.807 2.061 -1.494 0.806c1.082 2.005 1.654 4.278 1.654 6.573 0 2.308 -0.578 4.593 -1.673 6.607l1.492 0.81c1.229 -2.262 1.878 -4.827 1.878 -7.417 0 -2.575 -0.642 -5.127 -1.858 -7.379z"
              />
            </g>
          </g>
        </svg>
        <div class="top-menu-item-content">
          <a href="">
            <span>Khuyến mãi</span>
          </a>
        </div>
      </div>
      <div class="top-menu-item-right">
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
        >
          <path
            d="M11.216 7.131 4.613 1.973A0.117 0.117 0 0 0 4.424 2.065v1.132c0 0.072 0.034 0.141 0.089 0.185l5.273 4.118 -5.273 4.118c-0.057 0.044 -0.089 0.113 -0.089 0.185V12.935c0 0.098 0.113 0.152 0.189 0.092l6.604 -5.158a0.468 0.468 0 0 0 0 -0.738z"
          />
        </svg>
      </div>
    </div>
    <div
      class="home-top-menu-item top-menu-item-phone"
      @mouseover="isMenuNewTech = true"
      @mouseleave="isMenuNewTech = false"
    >
      <div class="top-menu-item-left">
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 25 25"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>ic_fluent_news_28_regular</title>
          <desc>Created with Sketch.</desc>
          <g
            id="🔍-Product-Icons"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="ic_fluent_news_28_regular"
              fill="#212121"
              fill-rule="nonzero"
            >
              <path
                d="M20.313 21.429H4.688a2.902 2.902 0 0 1 -2.897 -2.737L1.786 18.527V5.58a2.009 2.009 0 0 1 1.871 -2.004L3.795 3.571h13.839a2.009 2.009 0 0 1 2.004 1.871L19.643 5.58V6.25h1.563a2.009 2.009 0 0 1 2.004 1.871L23.214 8.259v10.268a2.902 2.902 0 0 1 -2.737 2.897L20.313 21.429H4.688h15.625Zm-15.625 -1.339h15.625a1.563 1.563 0 0 0 1.557 -1.434l0.005 -0.129V8.259a0.67 0.67 0 0 0 -0.579 -0.663L21.205 7.589H19.643v9.598a0.67 0.67 0 0 1 -0.579 0.663L18.973 17.857a0.67 0.67 0 0 1 -0.663 -0.579l-0.006 -0.091v-11.607a0.67 0.67 0 0 0 -0.579 -0.663L17.634 4.911H3.795a0.67 0.67 0 0 0 -0.663 0.579L3.125 5.58v12.946a1.563 1.563 0 0 0 1.434 1.557l0.129 0.005h15.625Zm4.462 -8.479c0.616 0 1.116 0.5 1.116 1.116v3.122c0 0.616 -0.5 1.116 -1.116 1.116H6.027c-0.616 0 -1.116 -0.5 -1.116 -1.116v-3.122c0 -0.616 0.5 -1.116 1.116 -1.116h3.122ZM12.723 15.625h3.121a0.67 0.67 0 0 1 0.091 1.333l-0.091 0.006H12.723a0.67 0.67 0 0 1 -0.091 -1.333l0.091 -0.006h3.121Zm-3.797 -2.676H6.25V15.625h2.676v-2.676Zm3.797 -1.339h3.121a0.67 0.67 0 0 1 0.091 1.334l-0.091 0.005H12.723a0.67 0.67 0 0 1 -0.091 -1.333l0.091 -0.006h3.121ZM5.577 7.587h10.268a0.67 0.67 0 0 1 0.091 1.333l-0.091 0.006h-10.268a0.67 0.67 0 0 1 -0.09 -1.333l0.09 -0.006h10.268Z"
                id="🎨-Color"
              />
            </g>
          </g>
        </svg>

        <div class="top-menu-item-content">
          <a href="">
            <span>Tin công nghệ</span>
          </a>
        </div>
      </div>
      <div class="top-menu-item-right">
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
        >
          <path
            d="M11.216 7.131 4.613 1.973A0.117 0.117 0 0 0 4.424 2.065v1.132c0 0.072 0.034 0.141 0.089 0.185l5.273 4.118 -5.273 4.118c-0.057 0.044 -0.089 0.113 -0.089 0.185V12.935c0 0.098 0.113 0.152 0.189 0.092l6.604 -5.158a0.468 0.468 0 0 0 0 -0.738z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import MenuListPhone from "./menu/MenuListPhone.vue";
import MenuListLaptop from "./menu/MenuListLaptop.vue";
import MenuListEarphone from "./menu/MenuListEarphone.vue";
import MenuListClock from "./menu/MenuListClock.vue";
import MenuListSmartHome from "./menu/MenuListSmartHome.vue";
import MenuListAccessory from "./menu/MenuListAccessory.vue";
import MenuListPC from "./menu/MenuListPC.vue";
import MenuListTivi from "./menu/MenuListTivi.vue";
import MenuListPriceOld from "./menu/MenuListPriceOld.vue";
import MenuListOld from "./menu/MenuListOld.vue";
import MenuListPromotion from "./menu/MenuListPromotion.vue";
import MenuListNewsTech from "./menu/MenuListNewsTech.vue";
export default {
  components: {
    MenuListPhone,
    MenuListLaptop,
    MenuListEarphone,
    MenuListClock,
    MenuListSmartHome,
    MenuListAccessory,
    MenuListPC,
    MenuListTivi,
    MenuListPriceOld,
    MenuListOld,
    MenuListPromotion,
    MenuListNewsTech,
  },
  data() {
    return {
      isMenuPhone: false,
      isMenuLaptop: false,
      isMenuEarphone: false,
      isMenuClock: false,
      isMenuSmartHome: false,
      isMenuAccessory: false,
      isMenuPC: false,
      isMenuTivi: false,
      isMenuPriceOld: false,
      isMenuOld: false,
      isMenuPromotion: false,
      isMenuNewTech: false,
    };
  },
};
</script>

<style scoped>
.home-top-menu {
  position: relative;
}

.home-top-menu-item {
  align-items: center;
  color: #343a40;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  min-height: 31.3px;
  -webkit-text-decoration: none;
  text-decoration: none;
  width: 100%;
  padding-left: 10px;
}
.home-top-menu-item:hover {
  background: #f3f4f6;
}
.top-menu-item-right {
  display: flex;
  align-items: center;
}
.top-menu-item-left {
  display: flex;
  align-items: center;
}
.icon-cate {
  height: 25px;
  margin-right: 5px;
  text-align: center;
  width: 25px;
}
.top-menu-item-content a span {
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: #343a40;
  font-size: 12px;
  font-weight: 700;
  overflow: hidden;
  text-decoration: none;
  margin-left: 5px;
}

.top-menu-item-content a :hover {
  color: var(--color--primary);
}
.top-menu-item-phonee:hover ~ .top-menu-list {
  display: block;
}
</style>>

