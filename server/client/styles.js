(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*!\n * Start Bootstrap - Clean Blog v5.0.8 (https://startbootstrap.com/template-overviews/clean-blog)\n * Copyright 2013-2019 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-clean-blog/blob/master/LICENSE)\n */\n\n body {\n  font-size: 20px;\n  color: #212529;\n  font-family: 'Lora', 'Times New Roman', serif;\n}\n\n p {\n  line-height: 1.5;\n  margin: 30px 0;\n}\n\n p a {\n  text-decoration: underline;\n}\n\n h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 600;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n a {\n  color: #212529;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\n a:focus, a:hover {\n  color: #0085A1;\n}\n\n blockquote {\n  font-style: italic;\n  color: #868e96;\n}\n\n .section-heading {\n  font-size: 36px;\n  font-weight: 700;\n  margin-top: 60px;\n}\n\n .caption {\n  font-size: 14px;\n  font-style: italic;\n  display: block;\n  margin: 0;\n  padding: 10px;\n  text-align: center;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n ::-moz-selection {\n  color: #fff;\n  background: #0085A1;\n  text-shadow: none;\n}\n\n ::selection {\n  color: #fff;\n  background: #0085A1;\n  text-shadow: none;\n}\n\n img::-moz-selection {\n  color: #fff;\n  background: transparent;\n}\n\n img::selection {\n  color: #fff;\n  background: transparent;\n}\n\n img::-moz-selection {\n  color: #fff;\n  background: transparent;\n}\n\n #mainNav {\n  position: absolute;\n  border-bottom: 1px solid #e9ecef;\n  background-color: white;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n #mainNav .navbar-brand {\n  font-weight: 800;\n  color: #343a40;\n}\n\n #mainNav .navbar-toggler {\n  font-size: 12px;\n  font-weight: 800;\n  padding: 13px;\n  text-transform: uppercase;\n  color: #343a40;\n}\n\n #mainNav .navbar-nav > li.nav-item > a {\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n @media only screen and (min-width: 992px) {\n  #mainNav {\n    border-bottom: 1px solid transparent;\n    background: transparent;\n  }\n  #mainNav .navbar-brand {\n    padding: 10px 20px;\n    color: #fff;\n  }\n  #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {\n    color: rgba(255, 255, 255, 0.8);\n  }\n  #mainNav .navbar-nav > li.nav-item > a {\n    padding: 10px 20px;\n    color: #fff;\n  }\n  #mainNav .navbar-nav > li.nav-item > a:focus, #mainNav .navbar-nav > li.nav-item > a:hover {\n    color: rgba(255, 255, 255, 0.8);\n  }\n}\n\n @media only screen and (min-width: 992px) {\n  #mainNav {\n    -webkit-transition: background-color 0.2s;\n    transition: background-color 0.2s;\n    /* Force Hardware Acceleration in WebKit */\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-backface-visibility: hidden;\n  }\n  #mainNav.is-fixed {\n    /* when the user scrolls down, we hide the header right above the viewport */\n    position: fixed;\n    top: -67px;\n    -webkit-transition: -webkit-transform 0.2s;\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s;\n    border-bottom: 1px solid white;\n    background-color: rgba(255, 255, 255, 0.9);\n  }\n  #mainNav.is-fixed .navbar-brand {\n    color: #212529;\n  }\n  #mainNav.is-fixed .navbar-brand:focus, #mainNav.is-fixed .navbar-brand:hover {\n    color: #0085A1;\n  }\n  #mainNav.is-fixed .navbar-nav > li.nav-item > a {\n    color: #212529;\n  }\n  #mainNav.is-fixed .navbar-nav > li.nav-item > a:focus, #mainNav.is-fixed .navbar-nav > li.nav-item > a:hover {\n    color: #0085A1;\n  }\n  #mainNav.is-visible {\n    /* if the user changes the scrolling direction, we show the header */\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n  }\n}\n\n header.masthead {\n  margin-bottom: 30px;\n  background: no-repeat center center;\n  background-color: #868e96;\n  background-attachment: scroll;\n  position: relative;\n  background-size: cover;\n}\n\n header.masthead .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #212529;\n  opacity: 0.5;\n}\n\n header.masthead .page-heading,\nheader.masthead .post-heading,\nheader.masthead .site-heading {\n  padding: 100px 0 80px;\n  color: white;\n}\n\n header.masthead .admin-heading {\n  padding: 40px 0 60px;\n  color: white;\n}\n\n @media only screen and (min-width: 768px) {\n  header.masthead .page-heading,\n  header.masthead .post-heading,\n  header.masthead .site-heading {\n    padding: 100px 0;\n  }\n  header.masthead .admin-heading {\n    padding: 60px 0;\n  }\n}\n\n header.masthead .page-heading,\nheader.masthead .site-heading {\n  text-align: center;\n}\n\n header.masthead .page-heading h1,\nheader.masthead .site-heading h1 {\n  font-size: 50px;\n  margin-top: 0;\n}\n\n header.masthead .page-heading .subheading,\nheader.masthead .site-heading .subheading {\n  font-size: 24px;\n  font-weight: 300;\n  line-height: 1.1;\n  display: block;\n  margin: 10px 0 0;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n @media only screen and (min-width: 768px) {\n  header.masthead .page-heading h1,\n  header.masthead .site-heading h1 {\n    font-size: 80px;\n  }\n}\n\n header.masthead .post-heading h1 {\n  font-size: 35px;\n}\n\n header.masthead .post-heading .meta,\nheader.masthead .post-heading .subheading {\n  line-height: 1.1;\n  display: block;\n}\n\n header.masthead .post-heading .subheading {\n  font-size: 24px;\n  font-weight: 600;\n  margin: 10px 0 30px;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n header.masthead .post-heading .meta {\n  font-size: 20px;\n  font-weight: 300;\n  font-style: italic;\n  font-family: 'Lora', 'Times New Roman', serif;\n}\n\n header.masthead .post-heading .meta a {\n  color: #fff;\n}\n\n @media only screen and (min-width: 768px) {\n  header.masthead .post-heading h1 {\n    font-size: 55px;\n  }\n  header.masthead .post-heading .subheading {\n    font-size: 30px;\n  }\n}\n\n .post-preview > a {\n  color: #212529;\n}\n\n .post-preview > a:focus, .post-preview > a:hover {\n  text-decoration: none;\n  color: #0085A1;\n}\n\n .post-preview > a > .post-title {\n  font-size: 30px;\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n\n .post-preview > a > .post-subtitle {\n  font-weight: 300;\n  margin: 0 0 10px;\n}\n\n .post-preview > p {\n  color: #212529;\n}\n\n .post-preview > .post-meta {\n  font-size: 18px;\n  font-style: italic;\n  margin-top: 0;\n  color: #868e96;\n}\n\n .post-preview > .post-meta > a {\n  text-decoration: none;\n  color: #212529;\n}\n\n .post-preview > .post-meta > a:focus, .post-preview > .post-meta > a:hover {\n  text-decoration: underline;\n  color: #0085A1;\n}\n\n @media only screen and (min-width: 768px) {\n  .post-preview > a > .post-title {\n    font-size: 36px;\n  }\n}\n\n .floating-label-form-group {\n  font-size: 14px;\n  position: relative;\n  margin-bottom: 0;\n  padding-bottom: 0.5em;\n  border-bottom: 1px solid #dee2e6;\n}\n\n .floating-label-form-group input,\n.floating-label-form-group textarea {\n  font-size: 1.5em;\n  position: relative;\n  z-index: 1;\n  padding: 0;\n  resize: none;\n  border: none;\n  border-radius: 0;\n  background: none;\n  box-shadow: none !important;\n  font-family: 'Lora', 'Times New Roman', serif;\n  color: #868e96;\n  font-family: 'Lora', 'Times New Roman', serif;\n}\n\n .floating-label-form-group label {\n  font-size: 0.85em;\n  line-height: 1.764705882em;\n  position: relative;\n  z-index: 0;\n  top: 2em;\n  display: block;\n  margin: 0;\n  -webkit-transition: top 0.3s ease, opacity 0.3s ease;\n  transition: top 0.3s ease, opacity 0.3s ease;\n  vertical-align: middle;\n  vertical-align: baseline;\n  opacity: 0;\n}\n\n .floating-label-form-group .help-block {\n  margin: 15px 0;\n}\n\n .floating-label-form-group-with-value label {\n  top: 0;\n  opacity: 1;\n}\n\n .floating-label-form-group-with-focus label {\n  color: #0085A1;\n}\n\n form .form-group:first-child .floating-label-form-group {\n  border-top: 1px solid #dee2e6;\n}\n\n footer {\n  padding: 50px 0 65px;\n}\n\n footer .list-inline {\n  margin: 0;\n  padding: 0;\n}\n\n footer .copyright {\n  font-size: 14px;\n  margin-bottom: 0;\n  text-align: center;\n}\n\n .btn {\n  font-size: 14px;\n  font-weight: 800;\n  padding: 15px 25px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  border-radius: 0;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n .btn-primary {\n  background-color: #0085A1;\n  border-color: #0085A1;\n}\n\n .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  color: #fff;\n  background-color: #00657b !important;\n  border-color: #00657b !important;\n}\n\n .btn-lg {\n  font-size: 16px;\n  padding: 25px 35px;\n}\n\n .btn-sm {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 12px;\n}\n\n .ck-editor__editable_inline {\n  min-height: 400px;\n}\n\n .aside {\n  color: #343a40;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7O0NBRUQ7RUFDQyxlQUFlO0VBQ2YsY0FBYztFQUNkLDZDQUE2QztBQUMvQzs7Q0FFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztDQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztDQUVBOzs7Ozs7RUFNRSxnQkFBZ0I7RUFDaEIsd0VBQXdFO0FBQzFFOztDQUVBO0VBQ0UsY0FBYztFQUNkLDRCQUFvQjtFQUFwQixvQkFBb0I7QUFDdEI7O0NBRUE7RUFDRSxjQUFjO0FBQ2hCOztDQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0NBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7Q0FFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQiw4QkFBOEI7QUFDaEM7O0NBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7Q0FFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztDQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7Q0FFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0NBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztDQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyx1QkFBdUI7RUFDdkIsd0VBQXdFO0FBQzFFOztDQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0NBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7Q0FFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7Q0FFQTtFQUNFO0lBQ0Usb0NBQW9DO0lBQ3BDLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjtFQUNBO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0VBQ0E7SUFDRSwrQkFBK0I7RUFDakM7QUFDRjs7Q0FFQTtFQUNFO0lBQ0UseUNBQWlDO0lBQWpDLGlDQUFpQztJQUNqQywwQ0FBMEM7SUFDMUMsdUNBQStCO1lBQS9CLCtCQUErQjtJQUMvQixtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLDRFQUE0RTtJQUM1RSxlQUFlO0lBQ2YsVUFBVTtJQUNWLDBDQUEwQjtJQUExQixrQ0FBMEI7SUFBMUIsMEJBQTBCO0lBQTFCLGtEQUEwQjtJQUMxQiw4QkFBOEI7SUFDOUIsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxvRUFBb0U7SUFDcEUsMENBQWtDO1lBQWxDLGtDQUFrQztFQUNwQztBQUNGOztDQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1DQUFtQztFQUNuQyx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0NBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0NBRUE7OztFQUdFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0NBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtBQUNkOztDQUVBO0VBQ0U7OztJQUdFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztDQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7Q0FFQTs7RUFFRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOztDQUVBOztFQUVFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsd0VBQXdFO0FBQzFFOztDQUVBO0VBQ0U7O0lBRUUsZUFBZTtFQUNqQjtBQUNGOztDQUVBO0VBQ0UsZUFBZTtBQUNqQjs7Q0FFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7Q0FFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHdFQUF3RTtBQUMxRTs7Q0FFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZDQUE2QztBQUMvQzs7Q0FFQTtFQUNFLFdBQVc7QUFDYjs7Q0FFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztDQUVBO0VBQ0UsY0FBYztBQUNoQjs7Q0FFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztDQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0NBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztDQUVBO0VBQ0UsY0FBYztBQUNoQjs7Q0FFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0NBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7Q0FFQTtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0FBQ2hCOztDQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0NBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZ0NBQWdDO0FBQ2xDOztDQUVBOztFQUVFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLDZDQUE2QztFQUM3QyxjQUFjO0VBQ2QsNkNBQTZDO0FBQy9DOztDQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixjQUFjO0VBQ2QsU0FBUztFQUNULG9EQUE0QztFQUE1Qyw0Q0FBNEM7RUFDNUMsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixVQUFVO0FBQ1o7O0NBRUE7RUFDRSxjQUFjO0FBQ2hCOztDQUVBO0VBQ0UsTUFBTTtFQUNOLFVBQVU7QUFDWjs7Q0FFQTtFQUNFLGNBQWM7QUFDaEI7O0NBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0NBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0NBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztDQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0NBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQix3RUFBd0U7QUFDMUU7O0NBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztDQUVBO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0NBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztDQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0NBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0NBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBTdGFydCBCb290c3RyYXAgLSBDbGVhbiBCbG9nIHY1LjAuOCAoaHR0cHM6Ly9zdGFydGJvb3RzdHJhcC5jb20vdGVtcGxhdGUtb3ZlcnZpZXdzL2NsZWFuLWJsb2cpXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE5IFN0YXJ0IEJvb3RzdHJhcFxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vQmxhY2tyb2NrRGlnaXRhbC9zdGFydGJvb3RzdHJhcC1jbGVhbi1ibG9nL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKi9cblxuIGJvZHkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBmb250LWZhbWlseTogJ0xvcmEnLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG59XG4gIFxucCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuICBcbnAgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuICBcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbiAgXG5hIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuICBcbmE6Zm9jdXMsIGE6aG92ZXIge1xuICBjb2xvcjogIzAwODVBMTtcbn1cbiAgXG5ibG9ja3F1b3RlIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogIzg2OGU5Njtcbn1cbiAgXG4uc2VjdGlvbi1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuICBcbi5jYXB0aW9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xufVxuICBcbjo6LW1vei1zZWxlY3Rpb24ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwODVBMTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG4gIFxuOjpzZWxlY3Rpb24ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwODVBMTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG4gIFxuaW1nOjotbW96LXNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiAgXG5pbWc6OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbiAgXG5pbWc6Oi1tb3otc2VsZWN0aW9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuICBcbiNtYWluTmF2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbiAgXG4jbWFpbk5hdiAubmF2YmFyLWJyYW5kIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICMzNDNhNDA7XG59XG4gIFxuI21haW5OYXYgLm5hdmJhci10b2dnbGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiAxM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzM0M2E0MDtcbn1cbiAgXG4jbWFpbk5hdiAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbiAgXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICNtYWluTmF2IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgI21haW5OYXYgLm5hdmJhci1icmFuZCB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gICNtYWluTmF2IC5uYXZiYXItYnJhbmQ6Zm9jdXMsICNtYWluTmF2IC5uYXZiYXItYnJhbmQ6aG92ZXIge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIH1cbiAgI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAjbWFpbk5hdiAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYTpmb2N1cywgI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGE6aG92ZXIge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIH1cbn1cbiAgXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICNtYWluTmF2IHtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gICAgLyogRm9yY2UgSGFyZHdhcmUgQWNjZWxlcmF0aW9uIGluIFdlYktpdCAqL1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgI21haW5OYXYuaXMtZml4ZWQge1xuICAgIC8qIHdoZW4gdGhlIHVzZXIgc2Nyb2xscyBkb3duLCB3ZSBoaWRlIHRoZSBoZWFkZXIgcmlnaHQgYWJvdmUgdGhlIHZpZXdwb3J0ICovXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogLTY3cHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgfVxuICAjbWFpbk5hdi5pcy1maXhlZCAubmF2YmFyLWJyYW5kIHtcbiAgICBjb2xvcjogIzIxMjUyOTtcbiAgfVxuICAjbWFpbk5hdi5pcy1maXhlZCAubmF2YmFyLWJyYW5kOmZvY3VzLCAjbWFpbk5hdi5pcy1maXhlZCAubmF2YmFyLWJyYW5kOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwODVBMTtcbiAgfVxuICAjbWFpbk5hdi5pcy1maXhlZCAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYSB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gIH1cbiAgI21haW5OYXYuaXMtZml4ZWQgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGE6Zm9jdXMsICNtYWluTmF2LmlzLWZpeGVkIC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwODVBMTtcbiAgfVxuICAjbWFpbk5hdi5pcy12aXNpYmxlIHtcbiAgICAvKiBpZiB0aGUgdXNlciBjaGFuZ2VzIHRoZSBzY3JvbGxpbmcgZGlyZWN0aW9uLCB3ZSBzaG93IHRoZSBoZWFkZXIgKi9cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICB9XG59XG4gIFxuaGVhZGVyLm1hc3RoZWFkIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NjhlOTY7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4gIFxuaGVhZGVyLm1hc3RoZWFkIC5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbiAgXG5oZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyxcbmhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nLFxuaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcge1xuICBwYWRkaW5nOiAxMDBweCAwIDgwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmhlYWRlci5tYXN0aGVhZCAuYWRtaW4taGVhZGluZyB7XG4gIHBhZGRpbmc6IDQwcHggMCA2MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4gIFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICBoZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyxcbiAgaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcsXG4gIGhlYWRlci5tYXN0aGVhZCAuc2l0ZS1oZWFkaW5nIHtcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xuICB9XG4gIGhlYWRlci5tYXN0aGVhZCAuYWRtaW4taGVhZGluZyB7XG4gICAgcGFkZGluZzogNjBweCAwO1xuICB9XG59XG4gIFxuaGVhZGVyLm1hc3RoZWFkIC5wYWdlLWhlYWRpbmcsXG5oZWFkZXIubWFzdGhlYWQgLnNpdGUtaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiAgXG5oZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyBoMSxcbmhlYWRlci5tYXN0aGVhZCAuc2l0ZS1oZWFkaW5nIGgxIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuICBcbmhlYWRlci5tYXN0aGVhZCAucGFnZS1oZWFkaW5nIC5zdWJoZWFkaW5nLFxuaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcgLnN1YmhlYWRpbmcge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEwcHggMCAwO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4gIFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICBoZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyBoMSxcbiAgaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcgaDEge1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgfVxufVxuICBcbmhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIGgxIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuICBcbmhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5tZXRhLFxuaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgLnN1YmhlYWRpbmcge1xuICBsaW5lLWhlaWdodDogMS4xO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiAgXG5oZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyAuc3ViaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAxMHB4IDAgMzBweDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuICBcbmhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5tZXRhIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbn1cbiAgXG5oZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyAubWV0YSBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG4gIFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICBoZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyBoMSB7XG4gICAgZm9udC1zaXplOiA1NXB4O1xuICB9XG4gIGhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5zdWJoZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn1cbiAgXG4ucG9zdC1wcmV2aWV3ID4gYSB7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuICBcbi5wb3N0LXByZXZpZXcgPiBhOmZvY3VzLCAucG9zdC1wcmV2aWV3ID4gYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMDg1QTE7XG59XG4gIFxuLnBvc3QtcHJldmlldyA+IGEgPiAucG9zdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiAgXG4ucG9zdC1wcmV2aWV3ID4gYSA+IC5wb3N0LXN1YnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbn1cbiAgXG4ucG9zdC1wcmV2aWV3ID4gcCB7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuICBcbi5wb3N0LXByZXZpZXcgPiAucG9zdC1tZXRhIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiAjODY4ZTk2O1xufVxuICBcbi5wb3N0LXByZXZpZXcgPiAucG9zdC1tZXRhID4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG4gIFxuLnBvc3QtcHJldmlldyA+IC5wb3N0LW1ldGEgPiBhOmZvY3VzLCAucG9zdC1wcmV2aWV3ID4gLnBvc3QtbWV0YSA+IGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICMwMDg1QTE7XG59XG4gIFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAucG9zdC1wcmV2aWV3ID4gYSA+IC5wb3N0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gIH1cbn1cbiAgXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuICBcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIGlucHV0LFxuLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAgdGV4dGFyZWEge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDA7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbiAgY29sb3I6ICM4NjhlOTY7XG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbn1cbiAgXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBsaW5lLWhlaWdodDogMS43NjQ3MDU4ODJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xuICB0b3A6IDJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgdHJhbnNpdGlvbjogdG9wIDAuM3MgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2U7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgb3BhY2l0eTogMDtcbn1cbiAgXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCAuaGVscC1ibG9jayB7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuICBcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwLXdpdGgtdmFsdWUgbGFiZWwge1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDE7XG59XG4gIFxuLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAtd2l0aC1mb2N1cyBsYWJlbCB7XG4gIGNvbG9yOiAjMDA4NUExO1xufVxuICBcbmZvcm0gLmZvcm0tZ3JvdXA6Zmlyc3QtY2hpbGQgLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbn1cbiAgXG5mb290ZXIge1xuICBwYWRkaW5nOiA1MHB4IDAgNjVweDtcbn1cbiAgXG5mb290ZXIgLmxpc3QtaW5saW5lIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuICBcbmZvb3RlciAuY29weXJpZ2h0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4gIFxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgcGFkZGluZzogMTVweCAyNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4gIFxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODVBMTtcbiAgYm9yZGVyLWNvbG9yOiAjMDA4NUExO1xufVxuICBcbi5idG4tcHJpbWFyeTpob3ZlciwgLmJ0bi1wcmltYXJ5OmZvY3VzLCAuYnRuLXByaW1hcnk6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY1N2IgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMDA2NTdiICFpbXBvcnRhbnQ7XG59XG4gIFxuLmJ0bi1sZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMjVweCAzNXB4O1xufVxuXG4uYnRuLXNtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG59XG4uY2stZWRpdG9yX19lZGl0YWJsZV9pbmxpbmUge1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbn1cblxuLmFzaWRlIHtcbiAgY29sb3I6ICMzNDNhNDA7XG59XG5cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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