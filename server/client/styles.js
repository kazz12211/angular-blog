(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*!\n * Start Bootstrap - Clean Blog v5.0.8 (https://startbootstrap.com/template-overviews/clean-blog)\n * Copyright 2013-2019 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-clean-blog/blob/master/LICENSE)\n */\n\n body {\n  font-size: 20px;\n  color: #212529;\n  font-family: 'Lora', 'Times New Roman', serif;\n}\n\n p {\n  line-height: 1.5;\n  margin: 30px 0;\n}\n\n p a {\n  text-decoration: underline;\n}\n\n h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 600;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n a {\n  color: #212529;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\n a:focus, a:hover {\n  color: #0085A1;\n}\n\n blockquote {\n  font-style: italic;\n  color: #868e96;\n}\n\n .section-heading {\n  font-size: 36px;\n  font-weight: 700;\n  margin-top: 60px;\n}\n\n .caption {\n  font-size: 14px;\n  font-style: italic;\n  display: block;\n  margin: 0;\n  padding: 10px;\n  text-align: center;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n ::-moz-selection {\n  color: #fff;\n  background: #0085A1;\n  text-shadow: none;\n}\n\n ::selection {\n  color: #fff;\n  background: #0085A1;\n  text-shadow: none;\n}\n\n img::-moz-selection {\n  color: #fff;\n  background: transparent;\n}\n\n img::selection {\n  color: #fff;\n  background: transparent;\n}\n\n img::-moz-selection {\n  color: #fff;\n  background: transparent;\n}\n\n #mainNav {\n  position: absolute;\n  border-bottom: 1px solid #e9ecef;\n  background-color: white;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n #mainNav .navbar-brand {\n  font-weight: 800;\n  color: #343a40;\n}\n\n #mainNav .navbar-toggler {\n  font-size: 12px;\n  font-weight: 800;\n  padding: 13px;\n  text-transform: uppercase;\n  color: #343a40;\n}\n\n #mainNav .navbar-nav > li.nav-item > a {\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\n @media only screen and (min-width: 992px) {\n  #mainNav {\n    border-bottom: 1px solid transparent;\n    background: transparent;\n  }\n  #mainNav .navbar-brand {\n    padding: 10px 20px;\n    color: #fff;\n  }\n  #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {\n    color: rgba(255, 255, 255, 0.8);\n  }\n  #mainNav .navbar-nav > li.nav-item > a {\n    padding: 10px 20px;\n    color: #fff;\n  }\n  #mainNav .navbar-nav > li.nav-item > a:focus, #mainNav .navbar-nav > li.nav-item > a:hover {\n    color: rgba(255, 255, 255, 0.8);\n  }\n}\n\n @media only screen and (min-width: 992px) {\n  #mainNav {\n    -webkit-transition: background-color 0.2s;\n    transition: background-color 0.2s;\n    /* Force Hardware Acceleration in WebKit */\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-backface-visibility: hidden;\n  }\n  #mainNav.is-fixed {\n    /* when the user scrolls down, we hide the header right above the viewport */\n    position: fixed;\n    top: -67px;\n    -webkit-transition: -webkit-transform 0.2s;\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s;\n    border-bottom: 1px solid white;\n    background-color: rgba(255, 255, 255, 0.9);\n  }\n  #mainNav.is-fixed .navbar-brand {\n    color: #212529;\n  }\n  #mainNav.is-fixed .navbar-brand:focus, #mainNav.is-fixed .navbar-brand:hover {\n    color: #0085A1;\n  }\n  #mainNav.is-fixed .navbar-nav > li.nav-item > a {\n    color: #212529;\n  }\n  #mainNav.is-fixed .navbar-nav > li.nav-item > a:focus, #mainNav.is-fixed .navbar-nav > li.nav-item > a:hover {\n    color: #0085A1;\n  }\n  #mainNav.is-visible {\n    /* if the user changes the scrolling direction, we show the header */\n    -webkit-transform: translate3d(0, 100%, 0);\n            transform: translate3d(0, 100%, 0);\n  }\n}\n\n header.masthead {\n  margin-bottom: 30px;\n  background: no-repeat center center;\n  background-color: #868e96;\n  background-attachment: scroll;\n  position: relative;\n  background-size: cover;\n}\n\n header.masthead .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #212529;\n  opacity: 0.5;\n}\n\n header.masthead .page-heading,\nheader.masthead .post-heading,\nheader.masthead .site-heading {\n  padding: 100px 0 80px;\n  color: white;\n}\n\n header.masthead .admin-heading {\n  padding: 40px 0 60px;\n  color: white;\n}\n\n @media only screen and (min-width: 768px) {\n  header.masthead .page-heading,\n  header.masthead .post-heading,\n  header.masthead .site-heading {\n    padding: 100px 0;\n  }\n  header.masthead .admin-heading {\n    padding: 60px 0;\n  }\n}\n\n header.masthead .page-heading,\nheader.masthead .site-heading {\n  text-align: center;\n}\n\n header.masthead .page-heading h1,\nheader.masthead .site-heading h1 {\n  font-size: 50px;\n  margin-top: 0;\n}\n\n header.masthead .page-heading .subheading,\nheader.masthead .site-heading .subheading {\n  font-size: 24px;\n  font-weight: 300;\n  line-height: 1.1;\n  display: block;\n  margin: 10px 0 0;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n @media only screen and (min-width: 768px) {\n  header.masthead .page-heading h1,\n  header.masthead .site-heading h1 {\n    font-size: 80px;\n  }\n}\n\n header.masthead .post-heading h1 {\n  font-size: 35px;\n}\n\n header.masthead .post-heading .meta,\nheader.masthead .post-heading .subheading {\n  line-height: 1.1;\n  display: block;\n}\n\n header.masthead .post-heading .subheading {\n  font-size: 24px;\n  font-weight: 600;\n  margin: 10px 0 30px;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n header.masthead .post-heading .meta {\n  font-size: 20px;\n  font-weight: 300;\n  font-style: italic;\n  font-family: 'Lora', 'Times New Roman', serif;\n}\n\n header.masthead .post-heading .meta a {\n  color: #fff;\n}\n\n @media only screen and (min-width: 768px) {\n  header.masthead .post-heading h1 {\n    font-size: 55px;\n  }\n  header.masthead .post-heading .subheading {\n    font-size: 30px;\n  }\n}\n\n .post-preview > a {\n  color: #212529;\n}\n\n .post-preview > a:focus, .post-preview > a:hover {\n  text-decoration: none;\n  color: #0085A1;\n}\n\n .post-preview > a > .post-title {\n  font-size: 30px;\n  margin-top: 30px;\n  margin-bottom: 10px;\n}\n\n .post-preview > a > .post-subtitle {\n  font-weight: 300;\n  margin: 0 0 10px;\n}\n\n .post-preview > p {\n  color: #212529;\n}\n\n .post-preview > .post-meta {\n  font-size: 18px;\n  font-style: italic;\n  margin-top: 0;\n  color: #868e96;\n}\n\n .post-preview > .post-meta > a {\n  text-decoration: none;\n  color: #212529;\n}\n\n .post-preview > .post-meta > a:focus, .post-preview > .post-meta > a:hover {\n  text-decoration: underline;\n  color: #0085A1;\n}\n\n @media only screen and (min-width: 768px) {\n  .post-preview > a > .post-title {\n    font-size: 36px;\n  }\n}\n\n .floating-label-form-group {\n  font-size: 14px;\n  position: relative;\n  margin-bottom: 0;\n  padding-bottom: 0.5em;\n  border-bottom: 1px solid #dee2e6;\n}\n\n .floating-label-form-group input,\n.floating-label-form-group textarea {\n  font-size: 1.5em;\n  position: relative;\n  z-index: 1;\n  padding: 0;\n  resize: none;\n  border: none;\n  border-radius: 0;\n  background: none;\n  box-shadow: none !important;\n  font-family: 'Lora', 'Times New Roman', serif;\n  color: #868e96;\n  font-family: 'Lora', 'Times New Roman', serif;\n}\n\n .floating-label-form-group label {\n  font-size: 0.85em;\n  line-height: 1.764705882em;\n  position: relative;\n  z-index: 0;\n  top: 2em;\n  display: block;\n  margin: 0;\n  -webkit-transition: top 0.3s ease, opacity 0.3s ease;\n  transition: top 0.3s ease, opacity 0.3s ease;\n  vertical-align: middle;\n  vertical-align: baseline;\n  opacity: 0;\n}\n\n .floating-label-form-group .help-block {\n  margin: 15px 0;\n}\n\n .floating-label-form-group-with-value label {\n  top: 0;\n  opacity: 1;\n}\n\n .floating-label-form-group-with-focus label {\n  color: #0085A1;\n}\n\n form .form-group:first-child .floating-label-form-group {\n  border-top: 1px solid #dee2e6;\n}\n\n footer {\n  padding: 50px 0 65px;\n}\n\n footer .list-inline {\n  margin: 0;\n  padding: 0;\n}\n\n footer .copyright {\n  font-size: 14px;\n  margin-bottom: 0;\n  text-align: center;\n}\n\n .btn {\n  font-size: 14px;\n  font-weight: 800;\n  padding: 15px 25px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  border-radius: 0;\n  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n .btn-primary {\n  background-color: #0085A1;\n  border-color: #0085A1;\n}\n\n .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n  color: #fff;\n  background-color: #00657b !important;\n  border-color: #00657b !important;\n}\n\n .btn-lg {\n  font-size: 16px;\n  padding: 25px 35px;\n}\n\n .btn-sm {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 12px;\n}\n\n .ck-editor__editable_inline {\n  min-height: 400px;\n}\n\n .aside {\n  color: #343a40;\n}\n\n .like > a {\n  cursor: pointer;\n}\n\n .like {\n  color: #0085A1;\n}\n/*# sourceMappingURL=data:application/json;base64,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QWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixjQUFjO0VBQ2QsU0FBUztFQUNULG9EQUE0QztFQUE1Qyw0Q0FBNEM7RUFDNUMsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixVQUFVO0FBQ1o7O0NBRUE7RUFDRSxjQUFjO0FBQ2hCOztDQUVBO0VBQ0UsTUFBTTtFQUNOLFVBQVU7QUFDWjs7Q0FFQTtFQUNFLGNBQWM7QUFDaEI7O0NBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0NBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0NBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztDQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0NBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQix3RUFBd0U7QUFDMUU7O0NBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztDQUVBO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0NBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztDQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0NBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0NBRUE7RUFDRSxjQUFjO0FBQ2hCOztDQUVBO0VBQ0UsZUFBZTtBQUNqQjs7Q0FFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIFN0YXJ0IEJvb3RzdHJhcCAtIENsZWFuIEJsb2cgdjUuMC44IChodHRwczovL3N0YXJ0Ym9vdHN0cmFwLmNvbS90ZW1wbGF0ZS1vdmVydmlld3MvY2xlYW4tYmxvZylcbiAqIENvcHlyaWdodCAyMDEzLTIwMTkgU3RhcnQgQm9vdHN0cmFwXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9CbGFja3JvY2tEaWdpdGFsL3N0YXJ0Ym9vdHN0cmFwLWNsZWFuLWJsb2cvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuXG4gYm9keSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGZvbnQtZmFtaWx5OiAnTG9yYScsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbn1cbiAgXG5wIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAzMHB4IDA7XG59XG4gIFxucCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4gIFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuICBcbmEge1xuICBjb2xvcjogIzIxMjUyOTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4gIFxuYTpmb2N1cywgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDA4NUExO1xufVxuICBcbmJsb2NrcXVvdGUge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjODY4ZTk2O1xufVxuICBcbi5zZWN0aW9uLWhlYWRpbmcge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG4gIFxuLmNhcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG4gIFxuOjotbW96LXNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDA4NUExO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cbiAgXG46OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDA4NUExO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cbiAgXG5pbWc6Oi1tb3otc2VsZWN0aW9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuICBcbmltZzo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuICBcbmltZzo6LW1vei1zZWxlY3Rpb24ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4gIFxuI21haW5OYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuICBcbiNtYWluTmF2IC5uYXZiYXItYnJhbmQge1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzM0M2E0MDtcbn1cbiAgXG4jbWFpbk5hdiAubmF2YmFyLXRvZ2dsZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBhZGRpbmc6IDEzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMzQzYTQwO1xufVxuICBcbiNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuICBcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgI21haW5OYXYge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICAjbWFpbk5hdiAubmF2YmFyLWJyYW5kIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgI21haW5OYXYgLm5hdmJhci1icmFuZDpmb2N1cywgI21haW5OYXYgLm5hdmJhci1icmFuZDpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgfVxuICAjbWFpbk5hdiAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYSB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gICNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhOmZvY3VzLCAjbWFpbk5hdiAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYTpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgfVxufVxuICBcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgI21haW5OYXYge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgICAvKiBGb3JjZSBIYXJkd2FyZSBBY2NlbGVyYXRpb24gaW4gV2ViS2l0ICovXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICAjbWFpbk5hdi5pcy1maXhlZCB7XG4gICAgLyogd2hlbiB0aGUgdXNlciBzY3JvbGxzIGRvd24sIHdlIGhpZGUgdGhlIGhlYWRlciByaWdodCBhYm92ZSB0aGUgdmlld3BvcnQgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAtNjdweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICB9XG4gICNtYWluTmF2LmlzLWZpeGVkIC5uYXZiYXItYnJhbmQge1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICB9XG4gICNtYWluTmF2LmlzLWZpeGVkIC5uYXZiYXItYnJhbmQ6Zm9jdXMsICNtYWluTmF2LmlzLWZpeGVkIC5uYXZiYXItYnJhbmQ6aG92ZXIge1xuICAgIGNvbG9yOiAjMDA4NUExO1xuICB9XG4gICNtYWluTmF2LmlzLWZpeGVkIC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhIHtcbiAgICBjb2xvcjogIzIxMjUyOTtcbiAgfVxuICAjbWFpbk5hdi5pcy1maXhlZCAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYTpmb2N1cywgI21haW5OYXYuaXMtZml4ZWQgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMDA4NUExO1xuICB9XG4gICNtYWluTmF2LmlzLXZpc2libGUge1xuICAgIC8qIGlmIHRoZSB1c2VyIGNoYW5nZXMgdGhlIHNjcm9sbGluZyBkaXJlY3Rpb24sIHdlIHNob3cgdGhlIGhlYWRlciAqL1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cbn1cbiAgXG5oZWFkZXIubWFzdGhlYWQge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg2OGU5NjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBzY3JvbGw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiAgXG5oZWFkZXIubWFzdGhlYWQgLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjUyOTtcbiAgb3BhY2l0eTogMC41O1xufVxuICBcbmhlYWRlci5tYXN0aGVhZCAucGFnZS1oZWFkaW5nLFxuaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcsXG5oZWFkZXIubWFzdGhlYWQgLnNpdGUtaGVhZGluZyB7XG4gIHBhZGRpbmc6IDEwMHB4IDAgODBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuaGVhZGVyLm1hc3RoZWFkIC5hZG1pbi1oZWFkaW5nIHtcbiAgcGFkZGluZzogNDBweCAwIDYwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiAgXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGhlYWRlci5tYXN0aGVhZCAucGFnZS1oZWFkaW5nLFxuICBoZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyxcbiAgaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcge1xuICAgIHBhZGRpbmc6IDEwMHB4IDA7XG4gIH1cbiAgaGVhZGVyLm1hc3RoZWFkIC5hZG1pbi1oZWFkaW5nIHtcbiAgICBwYWRkaW5nOiA2MHB4IDA7XG4gIH1cbn1cbiAgXG5oZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyxcbmhlYWRlci5tYXN0aGVhZCAuc2l0ZS1oZWFkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuICBcbmhlYWRlci5tYXN0aGVhZCAucGFnZS1oZWFkaW5nIGgxLFxuaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcgaDEge1xuICBmb250LXNpemU6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4gIFxuaGVhZGVyLm1hc3RoZWFkIC5wYWdlLWhlYWRpbmcgLnN1YmhlYWRpbmcsXG5oZWFkZXIubWFzdGhlYWQgLnNpdGUtaGVhZGluZyAuc3ViaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbiAgXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGhlYWRlci5tYXN0aGVhZCAucGFnZS1oZWFkaW5nIGgxLFxuICBoZWFkZXIubWFzdGhlYWQgLnNpdGUtaGVhZGluZyBoMSB7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICB9XG59XG4gIFxuaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgaDEge1xuICBmb250LXNpemU6IDM1cHg7XG59XG4gIFxuaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgLm1ldGEsXG5oZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyAuc3ViaGVhZGluZyB7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuICBcbmhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5zdWJoZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDEwcHggMCAzMHB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4gIFxuaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgLm1ldGEge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xufVxuICBcbmhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5tZXRhIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cbiAgXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIGhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIGgxIHtcbiAgICBmb250LXNpemU6IDU1cHg7XG4gIH1cbiAgaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgLnN1YmhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufVxuICBcbi5wb3N0LXByZXZpZXcgPiBhIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG4gIFxuLnBvc3QtcHJldmlldyA+IGE6Zm9jdXMsIC5wb3N0LXByZXZpZXcgPiBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwODVBMTtcbn1cbiAgXG4ucG9zdC1wcmV2aWV3ID4gYSA+IC5wb3N0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuICBcbi5wb3N0LXByZXZpZXcgPiBhID4gLnBvc3Qtc3VidGl0bGUge1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW46IDAgMCAxMHB4O1xufVxuICBcbi5wb3N0LXByZXZpZXcgPiBwIHtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG4gIFxuLnBvc3QtcHJldmlldyA+IC5wb3N0LW1ldGEge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6ICM4NjhlOTY7XG59XG4gIFxuLnBvc3QtcHJldmlldyA+IC5wb3N0LW1ldGEgPiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzIxMjUyOTtcbn1cbiAgXG4ucG9zdC1wcmV2aWV3ID4gLnBvc3QtbWV0YSA+IGE6Zm9jdXMsIC5wb3N0LXByZXZpZXcgPiAucG9zdC1tZXRhID4gYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzAwODVBMTtcbn1cbiAgXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5wb3N0LXByZXZpZXcgPiBhID4gLnBvc3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgfVxufVxuICBcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4gIFxuLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAgaW5wdXQsXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCB0ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogMDtcbiAgcmVzaXplOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xuICBjb2xvcjogIzg2OGU5NjtcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xufVxuICBcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc2NDcwNTg4MmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG4gIHRvcDogMmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICB0cmFuc2l0aW9uOiB0b3AgMC4zcyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICBvcGFjaXR5OiAwO1xufVxuICBcbi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIC5oZWxwLWJsb2NrIHtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG4gIFxuLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAtd2l0aC12YWx1ZSBsYWJlbCB7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMTtcbn1cbiAgXG4uZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cC13aXRoLWZvY3VzIGxhYmVsIHtcbiAgY29sb3I6ICMwMDg1QTE7XG59XG4gIFxuZm9ybSAuZm9ybS1ncm91cDpmaXJzdC1jaGlsZCAuZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuICBcbmZvb3RlciB7XG4gIHBhZGRpbmc6IDUwcHggMCA2NXB4O1xufVxuICBcbmZvb3RlciAubGlzdC1pbmxpbmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4gIFxuZm9vdGVyIC5jb3B5cmlnaHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiAgXG4uYnRuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbiAgXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NUExO1xuICBib3JkZXItY29sb3I6ICMwMDg1QTE7XG59XG4gIFxuLmJ0bi1wcmltYXJ5OmhvdmVyLCAuYnRuLXByaW1hcnk6Zm9jdXMsIC5idG4tcHJpbWFyeTphY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjU3YiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMwMDY1N2IgIWltcG9ydGFudDtcbn1cbiAgXG4uYnRuLWxnIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAyNXB4IDM1cHg7XG59XG5cbi5idG4tc20ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHggMTJweDtcbn1cbi5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuXG4uYXNpZGUge1xuICBjb2xvcjogIzM0M2E0MDtcbn1cblxuLmxpa2UgPiBhIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGlrZSB7XG4gIGNvbG9yOiAjMDA4NUExO1xufSJdfQ== */", '', '']]

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