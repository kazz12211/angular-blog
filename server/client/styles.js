(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*!\n * Start Bootstrap - Clean Blog v5.0.8 (https://startbootstrap.com/template-overviews/clean-blog)\n * Copyright 2013-2019 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-clean-blog/blob/master/LICENSE)\n */\n\n body {\n  font-size: 20px;\n  color: #212529;\n  font-family: 'Lora', 'Times New Roman', serif;\n}\n\n p {\n  line-height: 1.5;\n  margin: 30px 0;\n}\n\n p a {\n  text-decoration: underline;\n}\n\n h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 600;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n a {\n  color: #212529;\n  transition: all 0.2s;\n}\n\n a:focus, a:hover {\n  color: #0085A1;\n}\n\n blockquote {\n  font-style: italic;\n  color: #868e96;\n}\n\n .section-heading {\n  font-size: 36px;\n  font-weight: 700;\n  margin-top: 60px;\n}\n\n .caption {\n  font-size: 14px;\n  font-style: italic;\n  display: block;\n  margin: 0;\n  padding: 10px;\n  text-align: center;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n ::-moz-selection {\n  color: #fff;\n  background: #0085A1;\n  text-shadow: none;\n}\n\n ::selection {\n  color: #fff;\n  background: #0085A1;\n  text-shadow: none;\n}\n\n img::-moz-selection {\n  color: #fff;\n  background: transparent;\n}\n\n img::selection {\n  color: #fff;\n  background: transparent;\n}\n\n img::-moz-selection {\n  color: #fff;\n  background: transparent;\n}\n\n #mainNav {\n  position: absolute;\n  border-bottom: 1px solid #e9ecef;\n  background-color: white;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n #mainNav .navbar-brand {\n  font-weight: 800;\n  color: #343a40;\n}\n\n #mainNav .navbar-toggler {\n  font-size: 12px;\n  font-weight: 800;\n  padding: 13px;\n  text-transform: uppercase;\n  color: #343a40;\n}\n\n #mainNav .navbar-nav > li.nav-item > a {\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n @media only screen and (min-width: 992px) {\n  #mainNav {\n    border-bottom: 1px solid transparent;\n    background: transparent;\n  }\n  #mainNav .navbar-brand {\n    padding: 10px 20px;\n    color: #fff;\n  }\n  #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {\n    color: rgba(255, 255, 255, 0.8);\n  }\n  #mainNav .navbar-nav > li.nav-item > a {\n    padding: 10px 20px;\n    color: #fff;\n  }\n  #mainNav .navbar-nav > li.nav-item > a:focus, #mainNav .navbar-nav > li.nav-item > a:hover {\n    color: rgba(255, 255, 255, 0.8);\n  }\n}\n\n @media only screen and (min-width: 992px) {\n  #mainNav {\n    transition: background-color 0.2s;\n    /* Force Hardware Acceleration in WebKit */\n    transform: translate3d(0, 0, 0);\n    -webkit-backface-visibility: hidden;\n  }\n  #mainNav.is-fixed {\n    /* when the user scrolls down, we hide the header right above the viewport */\n    position: fixed;\n    top: -67px;\n    transition: transform 0.2s;\n    border-bottom: 1px solid white;\n    background-color: rgba(255, 255, 255, 0.9);\n  }\n  #mainNav.is-fixed .navbar-brand {\n    color: #212529;\n  }\n  #mainNav.is-fixed .navbar-brand:focus, #mainNav.is-fixed .navbar-brand:hover {\n    color: #0085A1;\n  }\n  #mainNav.is-fixed .navbar-nav > li.nav-item > a {\n    color: #212529;\n  }\n  #mainNav.is-fixed .navbar-nav > li.nav-item > a:focus, #mainNav.is-fixed .navbar-nav > li.nav-item > a:hover {\n    color: #0085A1;\n  }\n  #mainNav.is-visible {\n    /* if the user changes the scrolling direction, we show the header */\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n header.masthead {\n  margin-bottom: 30px;\n  background: no-repeat center center;\n  background-color: #868e96;\n  background-attachment: scroll;\n  position: relative;\n  background-size: cover;\n}\n\n header.masthead .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #212529;\n  opacity: 0.5;\n}\n\n header.masthead .page-heading,\nheader.masthead .post-heading,\nheader.masthead .site-heading {\n  padding: 100px 0 80px;\n  color: white;\n}\n\n header.masthead .admin-heading {\n  padding: 80px 0 60px;\n  color: white;\n}\n\n @media only screen and (min-width: 768px) {\n  header.masthead .page-heading,\n  header.masthead .post-heading,\n  header.masthead .site-heading {\n    padding: 100px 0;\n  }\n  header.masthead .admin-heading {\n    padding: 100px 0;\n  }\n}\n\n header.masthead .page-heading,\nheader.masthead .site-heading {\n  text-align: center;\n}\n\n header.masthead .page-heading h1,\nheader.masthead .site-heading h1 {\n  font-size: 40px;\n  margin-top: 0;\n}\n\n header.masthead .page-heading .subheading,\nheader.masthead .site-heading .subheading {\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 1.1;\n  display: block;\n  margin: 10px 0 0;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n @media only screen and (min-width: 768px) {\n  header.masthead .page-heading h1,\n  header.masthead .site-heading h1 {\n    font-size: 36px;\n  }\n}\n\n @media only screen and (min-width: 400px) {\n  header.masthead .page-heading h1,\n  header.masthead .site-heading h1 {\n    font-size: 32px;\n  }\n}\n\n header.masthead .post-heading h1 {\n  font-size: 28px;\n}\n\n header.masthead .post-heading .meta,\nheader.masthead .post-heading .subheading {\n  line-height: 1.1;\n  display: block;\n}\n\n header.masthead .post-heading .subheading {\n  font-size: 20px;\n  font-weight: 600;\n  margin: 10px 0 30px;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n header.masthead .post-heading .meta {\n  font-size: 20px;\n  font-weight: 300;\n  font-style: italic;\n  font-family: 'Lora', 'Times New Roman', serif;\n}\n\n header.masthead .post-heading .meta a {\n  color: #fff;\n}\n\n @media only screen and (min-width: 768px) {\n  header.masthead .post-heading h1 {\n    font-size: 40px;\n  }\n  header.masthead .post-heading .subheading {\n    font-size: 18px;\n  }\n}\n\n @media only screen and (min-width: 400px) {\n  header.masthead .post-heading h1 {\n    font-size: 32px;\n  }\n  header.masthead .post-heading .subheading {\n    font-size: 14px;\n  }\n}\n\n .post-preview > a {\n  color: #212529;\n}\n\n .post-preview > a:focus, .post-preview > a:hover {\n  text-decoration: none;\n  color: #0085A1;\n}\n\n .post-preview > a > .post-title {\n  font-size: 30px;\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n\n .post-preview > a > .post-subtitle {\n  font-weight: 300;\n  margin: 0 0 10px;\n}\n\n .post-preview > p {\n  color: #212529;\n}\n\n .post-preview > .post-meta {\n  font-size: 18px;\n  font-style: italic;\n  margin-top: 0;\n  color: #868e96;\n}\n\n .post-preview > .post-meta > a {\n  text-decoration: none;\n  color: #212529;\n}\n\n .post-preview > .post-meta > a:focus, .post-preview > .post-meta > a:hover {\n  text-decoration: underline;\n  color: #0085A1;\n}\n\n .post-preview img {\n  width: 80%;\n}\n\n @media only screen and (min-width: 768px) {\n  .post-preview > a > .post-title {\n    font-size: 28px;\n  }\n}\n\n @media only screen and (min-width: 420px) {\n  .post-preview > a > .post-title {\n    font-size: 24px;\n  }\n}\n\n .floating-label-form-group {\n  font-size: 14px;\n  position: relative;\n  margin-bottom: 0;\n  padding-bottom: 0.5em;\n  border-bottom: 1px solid #dee2e6;\n}\n\n .floating-label-form-group input,\n.floating-label-form-group textarea {\n  font-size: 1.5em;\n  position: relative;\n  z-index: 1;\n  padding: 0;\n  resize: none;\n  border: none;\n  border-radius: 0;\n  background: none;\n  box-shadow: none !important;\n  font-family: 'Lora', 'Times New Roman', serif;\n  color: #868e96;\n  font-family: 'Lora', 'Times New Roman', serif;\n}\n\n .floating-label-form-group label {\n  font-size: 0.85em;\n  line-height: 1.764705882em;\n  position: relative;\n  z-index: 0;\n  top: 2em;\n  display: block;\n  margin: 0;\n  transition: top 0.3s ease, opacity 0.3s ease;\n  vertical-align: middle;\n  vertical-align: baseline;\n  opacity: 0;\n}\n\n .floating-label-form-group .help-block {\n  margin: 15px 0;\n}\n\n .floating-label-form-group-with-value label {\n  top: 0;\n  opacity: 1;\n}\n\n .floating-label-form-group-with-focus label {\n  color: #0085A1;\n}\n\n form .form-group:first-child .floating-label-form-group {\n  border-top: 1px solid #dee2e6;\n}\n\n footer {\n  padding: 50px 0 65px;\n}\n\n footer .list-inline {\n  margin: 0;\n  padding: 0;\n}\n\n footer .copyright {\n  font-size: 14px;\n  margin-bottom: 0;\n  text-align: center;\n}\n\n .btn {\n  font-size: 14px;\n  font-weight: 800;\n  padding: 15px 25px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  border-radius: 0;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n .btn-primary {\n  background-color: #0085A1;\n  border-color: #0085A1;\n}\n\n .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  color: #fff;\n  background-color: #00657b !important;\n  border-color: #00657b !important;\n}\n\n .btn-lg {\n  font-size: 16px;\n  padding: 25px 35px;\n}\n\n .btn-sm {\n  font-size: 14px;\n}\n\n .post-preview > p {\n    color: #212529;\n}\n\n .post-preview > .post-meta {\n  font-size: 18px;\n  font-style: italic;\n  margin-top: 0;\n  color: #868e96;\n}\n\n .ck-editor__editable_inline {\n  min-height: 400px;\n}\n\n .aside {\n  color: #343a40;\n}\n\n .like > a {\n  cursor: pointer;\n}\n\n .like {\n  color: #0085A1;\n}\n\n .post-comment > p {\n  font-size: 16px;\n  color: #212529;\n}\n\n .post-comment > .post-comment-meta {\n  font-size: 16px;\n  font-style: italic;\n  margin-top: 0;\n  color: #868e96;\n}\n\n .post-comment {\n  padding: 1rem;\n  border: none;\n  border-radius: 4px;\n  box-shadow: 1px 1px 4px #ccc;\n}\n\n .card-grid {\n  width: 100%;\n  margin: 1rem;\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n}\n\n @media only screen and (min-width: 768px) {\n\n  .card-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n}\n\n .articles th {\n  font-size: 80%;\n}\n\n .articles td {\n  font-size: 80%;\n}\n\n .users th {\n  font-size: 80%;\n}\n\n .users td {\n  font-size: 80%;\n}\n\n .comments th {\n  font-size: 80%;\n}\n\n .comments td {\n  font-size: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,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a0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7Q0FHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztBQUN2Qzs7Q0FFQTs7RUFFRTtJQUNFLHFDQUFxQztFQUN2Qzs7QUFFRjs7Q0FFQTtFQUNFLGNBQWM7QUFDaEI7O0NBQ0E7RUFDRSxjQUFjO0FBQ2hCOztDQUVBO0VBQ0UsY0FBYztBQUNoQjs7Q0FDQTtFQUNFLGNBQWM7QUFDaEI7O0NBRUE7RUFDRSxjQUFjO0FBQ2hCOztDQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogU3RhcnQgQm9vdHN0cmFwIC0gQ2xlYW4gQmxvZyB2NS4wLjggKGh0dHBzOi8vc3RhcnRib290c3RyYXAuY29tL3RlbXBsYXRlLW92ZXJ2aWV3cy9jbGVhbi1ibG9nKVxuICogQ29weXJpZ2h0IDIwMTMtMjAxOSBTdGFydCBCb290c3RyYXBcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL0JsYWNrcm9ja0RpZ2l0YWwvc3RhcnRib290c3RyYXAtY2xlYW4tYmxvZy9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICovXG5cbiBib2R5IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzIxMjUyOTtcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xufVxuICBcbnAge1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDMwcHggMDtcbn1cbiAgXG5wIGEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbiAgXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4gIFxuYSB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbiAgXG5hOmZvY3VzLCBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMDg1QTE7XG59XG4gIFxuYmxvY2txdW90ZSB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICM4NjhlOTY7XG59XG4gIFxuLnNlY3Rpb24taGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbiAgXG4uY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cbiAgXG46Oi1tb3otc2VsZWN0aW9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDg1QTE7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuICBcbjo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDg1QTE7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuICBcbmltZzo6LW1vei1zZWxlY3Rpb24ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4gIFxuaW1nOjpzZWxlY3Rpb24ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4gIFxuaW1nOjotbW96LXNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiAgXG4jbWFpbk5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4gIFxuI21haW5OYXYgLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjMzQzYTQwO1xufVxuICBcbiNtYWluTmF2IC5uYXZiYXItdG9nZ2xlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZzogMTNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMzNDNhNDA7XG59XG4gIFxuI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4gIFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAjbWFpbk5hdiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gICNtYWluTmF2IC5uYXZiYXItYnJhbmQge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAjbWFpbk5hdiAubmF2YmFyLWJyYW5kOmZvY3VzLCAjbWFpbk5hdiAubmF2YmFyLWJyYW5kOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICB9XG4gICNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGE6Zm9jdXMsICNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICB9XG59XG4gIFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAjbWFpbk5hdiB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICAgIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gICNtYWluTmF2LmlzLWZpeGVkIHtcbiAgICAvKiB3aGVuIHRoZSB1c2VyIHNjcm9sbHMgZG93biwgd2UgaGlkZSB0aGUgaGVhZGVyIHJpZ2h0IGFib3ZlIHRoZSB2aWV3cG9ydCAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IC02N3B4O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIH1cbiAgI21haW5OYXYuaXMtZml4ZWQgLm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gIH1cbiAgI21haW5OYXYuaXMtZml4ZWQgLm5hdmJhci1icmFuZDpmb2N1cywgI21haW5OYXYuaXMtZml4ZWQgLm5hdmJhci1icmFuZDpob3ZlciB7XG4gICAgY29sb3I6ICMwMDg1QTE7XG4gIH1cbiAgI21haW5OYXYuaXMtZml4ZWQgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEge1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICB9XG4gICNtYWluTmF2LmlzLWZpeGVkIC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhOmZvY3VzLCAjbWFpbk5hdi5pcy1maXhlZCAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYTpob3ZlciB7XG4gICAgY29sb3I6ICMwMDg1QTE7XG4gIH1cbiAgI21haW5OYXYuaXMtdmlzaWJsZSB7XG4gICAgLyogaWYgdGhlIHVzZXIgY2hhbmdlcyB0aGUgc2Nyb2xsaW5nIGRpcmVjdGlvbiwgd2Ugc2hvdyB0aGUgaGVhZGVyICovXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcbiAgfVxufVxuICBcbmhlYWRlci5tYXN0aGVhZCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODY4ZTk2O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuICBcbmhlYWRlci5tYXN0aGVhZCAub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICBvcGFjaXR5OiAwLjU7XG59XG4gIFxuaGVhZGVyLm1hc3RoZWFkIC5wYWdlLWhlYWRpbmcsXG5oZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyxcbmhlYWRlci5tYXN0aGVhZCAuc2l0ZS1oZWFkaW5nIHtcbiAgcGFkZGluZzogMTAwcHggMCA4MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5oZWFkZXIubWFzdGhlYWQgLmFkbWluLWhlYWRpbmcge1xuICBwYWRkaW5nOiA4MHB4IDAgNjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuICBcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaGVhZGVyLm1hc3RoZWFkIC5wYWdlLWhlYWRpbmcsXG4gIGhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nLFxuICBoZWFkZXIubWFzdGhlYWQgLnNpdGUtaGVhZGluZyB7XG4gICAgcGFkZGluZzogMTAwcHggMDtcbiAgfVxuICBoZWFkZXIubWFzdGhlYWQgLmFkbWluLWhlYWRpbmcge1xuICAgIHBhZGRpbmc6IDEwMHB4IDA7XG4gIH1cbn1cbiAgXG5oZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyxcbmhlYWRlci5tYXN0aGVhZCAuc2l0ZS1oZWFkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuICBcbmhlYWRlci5tYXN0aGVhZCAucGFnZS1oZWFkaW5nIGgxLFxuaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcgaDEge1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4gIFxuaGVhZGVyLm1hc3RoZWFkIC5wYWdlLWhlYWRpbmcgLnN1YmhlYWRpbmcsXG5oZWFkZXIubWFzdGhlYWQgLnNpdGUtaGVhZGluZyAuc3ViaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbiAgXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGhlYWRlci5tYXN0aGVhZCAucGFnZS1oZWFkaW5nIGgxLFxuICBoZWFkZXIubWFzdGhlYWQgLnNpdGUtaGVhZGluZyBoMSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICB9XG59XG4gIFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xuICBoZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyBoMSxcbiAgaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcgaDEge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxufVxuXG5oZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyBoMSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbiAgXG5oZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyAubWV0YSxcbmhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5zdWJoZWFkaW5nIHtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4gIFxuaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgLnN1YmhlYWRpbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMTBweCAwIDMwcHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbiAgXG5oZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyAubWV0YSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LWZhbWlseTogJ0xvcmEnLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG59XG4gIFxuaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgLm1ldGEgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuICBcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgaDEge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxuICBoZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyAuc3ViaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG4gIFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xuICBoZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyBoMSB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICB9XG4gIGhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5zdWJoZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuLnBvc3QtcHJldmlldyA+IGEge1xuICBjb2xvcjogIzIxMjUyOTtcbn1cbiAgXG4ucG9zdC1wcmV2aWV3ID4gYTpmb2N1cywgLnBvc3QtcHJldmlldyA+IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMDA4NUExO1xufVxuICBcbi5wb3N0LXByZXZpZXcgPiBhID4gLnBvc3QtdGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4gIFxuLnBvc3QtcHJldmlldyA+IGEgPiAucG9zdC1zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG59XG4gIFxuLnBvc3QtcHJldmlldyA+IHAge1xuICBjb2xvcjogIzIxMjUyOTtcbn1cbiAgXG4ucG9zdC1wcmV2aWV3ID4gLnBvc3QtbWV0YSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogIzg2OGU5Njtcbn1cbiAgXG4ucG9zdC1wcmV2aWV3ID4gLnBvc3QtbWV0YSA+IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuICBcbi5wb3N0LXByZXZpZXcgPiAucG9zdC1tZXRhID4gYTpmb2N1cywgLnBvc3QtcHJldmlldyA+IC5wb3N0LW1ldGEgPiBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjMDA4NUExO1xufVxuXG4ucG9zdC1wcmV2aWV3IGltZyB7XG4gIHdpZHRoOiA4MCU7XG59XG4gIFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAucG9zdC1wcmV2aWV3ID4gYSA+IC5wb3N0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbn1cbiAgXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyMHB4KSB7XG4gIC5wb3N0LXByZXZpZXcgPiBhID4gLnBvc3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuICBcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIGlucHV0LFxuLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAgdGV4dGFyZWEge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDA7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbiAgY29sb3I6ICM4NjhlOTY7XG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbn1cbiAgXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBsaW5lLWhlaWdodDogMS43NjQ3MDU4ODJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xuICB0b3A6IDJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgdHJhbnNpdGlvbjogdG9wIDAuM3MgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgb3BhY2l0eTogMDtcbn1cbiAgXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCAuaGVscC1ibG9jayB7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuICBcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwLXdpdGgtdmFsdWUgbGFiZWwge1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDE7XG59XG4gIFxuLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAtd2l0aC1mb2N1cyBsYWJlbCB7XG4gIGNvbG9yOiAjMDA4NUExO1xufVxuICBcbmZvcm0gLmZvcm0tZ3JvdXA6Zmlyc3QtY2hpbGQgLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbn1cbiAgXG5mb290ZXIge1xuICBwYWRkaW5nOiA1MHB4IDAgNjVweDtcbn1cbiAgXG5mb290ZXIgLmxpc3QtaW5saW5lIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuICBcbmZvb3RlciAuY29weXJpZ2h0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4gIFxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4gIFxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODVBMTtcbiAgYm9yZGVyLWNvbG9yOiAjMDA4NUExO1xufVxuICBcbi5idG4tcHJpbWFyeTpob3ZlciwgLmJ0bi1wcmltYXJ5OmZvY3VzLCAuYnRuLXByaW1hcnk6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY1N2IgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMDA2NTdiICFpbXBvcnRhbnQ7XG59XG4gIFxuLmJ0bi1sZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMjVweCAzNXB4O1xufVxuXG4uYnRuLXNtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucG9zdC1wcmV2aWV3ID4gcCB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG59XG4gICAgXG4ucG9zdC1wcmV2aWV3ID4gLnBvc3QtbWV0YSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogIzg2OGU5Njtcbn1cbiAgICBcbi5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuXG4uYXNpZGUge1xuICBjb2xvcjogIzM0M2E0MDtcbn1cblxuLmxpa2UgPiBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGlrZSB7XG4gIGNvbG9yOiAjMDA4NUExO1xufVxuXG4ucG9zdC1jb21tZW50ID4gcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG4gIFxuLnBvc3QtY29tbWVudCA+IC5wb3N0LWNvbW1lbnQtbWV0YSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogIzg2OGU5Njtcbn1cbiAgXG4ucG9zdC1jb21tZW50IHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNHB4ICNjY2M7XG59XG5cblxuLmNhcmQtZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDFyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAuY2FyZC1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG5cbn1cblxuLmFydGljbGVzIHRoIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG4uYXJ0aWNsZXMgdGQge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLnVzZXJzIHRoIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG4udXNlcnMgdGQge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLmNvbW1lbnRzIHRoIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG4uY29tbWVudHMgdGQge1xuICBmb250LXNpemU6IDgwJTtcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ktsubaki/workspaces/js/Angular/angular-blog/client/src/styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map