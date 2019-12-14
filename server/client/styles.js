(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*!\n * Start Bootstrap - Clean Blog v5.0.8 (https://startbootstrap.com/template-overviews/clean-blog)\n * Copyright 2013-2019 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-clean-blog/blob/master/LICENSE)\n */\n\n body {\n    font-size: 20px;\n    color: #212529;\n    font-family: 'Lora', 'Times New Roman', serif;\n  }\n\n p {\n    line-height: 1.5;\n    margin: 30px 0;\n  }\n\n p a {\n    text-decoration: underline;\n  }\n\n h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: 800;\n    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\n a {\n    color: #212529;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s;\n  }\n\n a:focus, a:hover {\n    color: #0085A1;\n  }\n\n blockquote {\n    font-style: italic;\n    color: #868e96;\n  }\n\n .section-heading {\n    font-size: 36px;\n    font-weight: 700;\n    margin-top: 60px;\n  }\n\n .caption {\n    font-size: 14px;\n    font-style: italic;\n    display: block;\n    margin: 0;\n    padding: 10px;\n    text-align: center;\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  }\n\n ::-moz-selection {\n    color: #fff;\n    background: #0085A1;\n    text-shadow: none;\n  }\n\n ::selection {\n    color: #fff;\n    background: #0085A1;\n    text-shadow: none;\n  }\n\n img::-moz-selection {\n    color: #fff;\n    background: transparent;\n  }\n\n img::selection {\n    color: #fff;\n    background: transparent;\n  }\n\n img::-moz-selection {\n    color: #fff;\n    background: transparent;\n  }\n\n #mainNav {\n    position: absolute;\n    border-bottom: 1px solid #e9ecef;\n    background-color: white;\n    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\n #mainNav .navbar-brand {\n    font-weight: 800;\n    color: #343a40;\n  }\n\n #mainNav .navbar-toggler {\n    font-size: 12px;\n    font-weight: 800;\n    padding: 13px;\n    text-transform: uppercase;\n    color: #343a40;\n  }\n\n #mainNav .navbar-nav > li.nav-item > a {\n    font-size: 12px;\n    font-weight: 800;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n  }\n\n @media only screen and (min-width: 992px) {\n    #mainNav {\n      border-bottom: 1px solid transparent;\n      background: transparent;\n    }\n    #mainNav .navbar-brand {\n      padding: 10px 20px;\n      color: #fff;\n    }\n    #mainNav .navbar-brand:focus, #mainNav .navbar-brand:hover {\n      color: rgba(255, 255, 255, 0.8);\n    }\n    #mainNav .navbar-nav > li.nav-item > a {\n      padding: 10px 20px;\n      color: #fff;\n    }\n    #mainNav .navbar-nav > li.nav-item > a:focus, #mainNav .navbar-nav > li.nav-item > a:hover {\n      color: rgba(255, 255, 255, 0.8);\n    }\n  }\n\n @media only screen and (min-width: 992px) {\n    #mainNav {\n      -webkit-transition: background-color 0.2s;\n      transition: background-color 0.2s;\n      /* Force Hardware Acceleration in WebKit */\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0);\n      -webkit-backface-visibility: hidden;\n    }\n    #mainNav.is-fixed {\n      /* when the user scrolls down, we hide the header right above the viewport */\n      position: fixed;\n      top: -67px;\n      -webkit-transition: -webkit-transform 0.2s;\n      transition: -webkit-transform 0.2s;\n      transition: transform 0.2s;\n      transition: transform 0.2s, -webkit-transform 0.2s;\n      border-bottom: 1px solid white;\n      background-color: rgba(255, 255, 255, 0.9);\n    }\n    #mainNav.is-fixed .navbar-brand {\n      color: #212529;\n    }\n    #mainNav.is-fixed .navbar-brand:focus, #mainNav.is-fixed .navbar-brand:hover {\n      color: #0085A1;\n    }\n    #mainNav.is-fixed .navbar-nav > li.nav-item > a {\n      color: #212529;\n    }\n    #mainNav.is-fixed .navbar-nav > li.nav-item > a:focus, #mainNav.is-fixed .navbar-nav > li.nav-item > a:hover {\n      color: #0085A1;\n    }\n    #mainNav.is-visible {\n      /* if the user changes the scrolling direction, we show the header */\n      -webkit-transform: translate3d(0, 100%, 0);\n              transform: translate3d(0, 100%, 0);\n    }\n  }\n\n header.masthead {\n    margin-bottom: 30px;\n    background: no-repeat center center;\n    background-color: #868e96;\n    background-attachment: scroll;\n    position: relative;\n    background-size: cover;\n  }\n\n header.masthead .overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: #212529;\n    opacity: 0.5;\n  }\n\n header.masthead .page-heading,\n  header.masthead .post-heading,\n  header.masthead .site-heading {\n    padding: 100px 0 80px;\n    color: white;\n  }\n\n header.masthead .admin-heading {\n    padding: 40px 0 60px;\n    color: white;\n  }\n\n @media only screen and (min-width: 768px) {\n    header.masthead .page-heading,\n    header.masthead .post-heading,\n    header.masthead .site-heading {\n      padding: 100px 0;\n    }\n    header.masthead .admin-heading {\n      padding: 60px 0;\n    }\n  }\n\n header.masthead .page-heading,\n  header.masthead .site-heading {\n    text-align: center;\n  }\n\n header.masthead .page-heading h1,\n  header.masthead .site-heading h1 {\n    font-size: 50px;\n    margin-top: 0;\n  }\n\n header.masthead .page-heading .subheading,\n  header.masthead .site-heading .subheading {\n    font-size: 24px;\n    font-weight: 300;\n    line-height: 1.1;\n    display: block;\n    margin: 10px 0 0;\n    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\n @media only screen and (min-width: 768px) {\n    header.masthead .page-heading h1,\n    header.masthead .site-heading h1 {\n      font-size: 80px;\n    }\n  }\n\n header.masthead .post-heading h1 {\n    font-size: 35px;\n  }\n\n header.masthead .post-heading .meta,\n  header.masthead .post-heading .subheading {\n    line-height: 1.1;\n    display: block;\n  }\n\n header.masthead .post-heading .subheading {\n    font-size: 24px;\n    font-weight: 600;\n    margin: 10px 0 30px;\n    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\n header.masthead .post-heading .meta {\n    font-size: 20px;\n    font-weight: 300;\n    font-style: italic;\n    font-family: 'Lora', 'Times New Roman', serif;\n  }\n\n header.masthead .post-heading .meta a {\n    color: #fff;\n  }\n\n @media only screen and (min-width: 768px) {\n    header.masthead .post-heading h1 {\n      font-size: 55px;\n    }\n    header.masthead .post-heading .subheading {\n      font-size: 30px;\n    }\n  }\n\n .post-preview > a {\n    color: #212529;\n  }\n\n .post-preview > a:focus, .post-preview > a:hover {\n    text-decoration: none;\n    color: #0085A1;\n  }\n\n .post-preview > a > .post-title {\n    font-size: 30px;\n    margin-top: 30px;\n    margin-bottom: 10px;\n  }\n\n .post-preview > a > .post-subtitle {\n    font-weight: 300;\n    margin: 0 0 10px;\n  }\n\n .post-preview > p {\n    color: #212529;\n  }\n\n .post-preview > .post-meta {\n    font-size: 18px;\n    font-style: italic;\n    margin-top: 0;\n    color: #868e96;\n  }\n\n .post-preview > .post-meta > a {\n    text-decoration: none;\n    color: #212529;\n  }\n\n .post-preview > .post-meta > a:focus, .post-preview > .post-meta > a:hover {\n    text-decoration: underline;\n    color: #0085A1;\n  }\n\n @media only screen and (min-width: 768px) {\n    .post-preview > a > .post-title {\n      font-size: 36px;\n    }\n  }\n\n .floating-label-form-group {\n    font-size: 14px;\n    position: relative;\n    margin-bottom: 0;\n    padding-bottom: 0.5em;\n    border-bottom: 1px solid #dee2e6;\n  }\n\n .floating-label-form-group input,\n  .floating-label-form-group textarea {\n    font-size: 1.5em;\n    position: relative;\n    z-index: 1;\n    padding: 0;\n    resize: none;\n    border: none;\n    border-radius: 0;\n    background: none;\n    box-shadow: none !important;\n    font-family: 'Lora', 'Times New Roman', serif;\n  }\n\n .floating-label-form-group input::-webkit-input-placeholder,\n  .floating-label-form-group textarea::-webkit-input-placeholder {\n    color: #868e96;\n    font-family: 'Lora', 'Times New Roman', serif;\n  }\n\n .floating-label-form-group label {\n    font-size: 0.85em;\n    line-height: 1.764705882em;\n    position: relative;\n    z-index: 0;\n    top: 2em;\n    display: block;\n    margin: 0;\n    -webkit-transition: top 0.3s ease, opacity 0.3s ease;\n    transition: top 0.3s ease, opacity 0.3s ease;\n    vertical-align: middle;\n    vertical-align: baseline;\n    opacity: 0;\n  }\n\n .floating-label-form-group .help-block {\n    margin: 15px 0;\n  }\n\n .floating-label-form-group-with-value label {\n    top: 0;\n    opacity: 1;\n  }\n\n .floating-label-form-group-with-focus label {\n    color: #0085A1;\n  }\n\n form .form-group:first-child .floating-label-form-group {\n    border-top: 1px solid #dee2e6;\n  }\n\n footer {\n    padding: 50px 0 65px;\n  }\n\n footer .list-inline {\n    margin: 0;\n    padding: 0;\n  }\n\n footer .copyright {\n    font-size: 14px;\n    margin-bottom: 0;\n    text-align: center;\n  }\n\n .btn {\n    font-size: 14px;\n    font-weight: 800;\n    padding: 15px 25px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    border-radius: 0;\n    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n\n .btn-primary {\n    background-color: #0085A1;\n    border-color: #0085A1;\n  }\n\n .btn-primary:hover, .btn-primary:focus, .btn-primary:active {\n    color: #fff;\n    background-color: #00657b !important;\n    border-color: #00657b !important;\n  }\n\n .btn-lg {\n    font-size: 16px;\n    padding: 25px 35px;\n  }\n\n .btn-sm {\n    font-size: 14px;\n    font-weight: 600;\n    padding: 10px 12px;\n  }\n\n .ck-editor__editable_inline {\n    min-height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixjQUFjO0lBQ2QsU0FBUztJQUNULG9EQUE0QztJQUE1Qyw0Q0FBNEM7SUFDNUMsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7O0NBRUE7SUFDRSxjQUFjO0VBQ2hCOztDQUVBO0lBQ0UsTUFBTTtJQUNOLFVBQVU7RUFDWjs7Q0FFQTtJQUNFLGNBQWM7RUFDaEI7O0NBRUE7SUFDRSw2QkFBNkI7RUFDL0I7O0NBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0NBRUE7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOztDQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0NBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQix3RUFBd0U7RUFDMUU7O0NBRUE7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0VBQ3ZCOztDQUVBO0lBQ0UsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxnQ0FBZ0M7RUFDbEM7O0NBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztDQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0NBQ0E7SUFDRSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIFN0YXJ0IEJvb3RzdHJhcCAtIENsZWFuIEJsb2cgdjUuMC44IChodHRwczovL3N0YXJ0Ym9vdHN0cmFwLmNvbS90ZW1wbGF0ZS1vdmVydmlld3MvY2xlYW4tYmxvZylcbiAqIENvcHlyaWdodCAyMDEzLTIwMTkgU3RhcnQgQm9vdHN0cmFwXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9CbGFja3JvY2tEaWdpdGFsL3N0YXJ0Ym9vdHN0cmFwLWNsZWFuLWJsb2cvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuXG4gYm9keSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbiAgfVxuICBcbiAgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBtYXJnaW46IDMwcHggMDtcbiAgfVxuICBcbiAgcCBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuICBcbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIGEge1xuICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB9XG4gIFxuICBhOmZvY3VzLCBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwODVBMTtcbiAgfVxuICBcbiAgYmxvY2txdW90ZSB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiAjODY4ZTk2O1xuICB9XG4gIFxuICAuc2VjdGlvbi1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICB9XG4gIFxuICAuY2FwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIH1cbiAgXG4gIDo6LW1vei1zZWxlY3Rpb24ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICMwMDg1QTE7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgXG4gIDo6c2VsZWN0aW9uIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NUExO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG4gIFxuICBpbWc6Oi1tb3otc2VsZWN0aW9uIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgaW1nOjpzZWxlY3Rpb24ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICBpbWc6Oi1tb3otc2VsZWN0aW9uIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgI21haW5OYXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gICNtYWluTmF2IC5uYXZiYXItYnJhbmQge1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY29sb3I6ICMzNDNhNDA7XG4gIH1cbiAgXG4gICNtYWluTmF2IC5uYXZiYXItdG9nZ2xlciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgcGFkZGluZzogMTNweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjMzQzYTQwO1xuICB9XG4gIFxuICAjbWFpbk5hdiAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgI21haW5OYXYge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgICNtYWluTmF2IC5uYXZiYXItYnJhbmQge1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgICNtYWluTmF2IC5uYXZiYXItYnJhbmQ6Zm9jdXMsICNtYWluTmF2IC5uYXZiYXItYnJhbmQ6aG92ZXIge1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICB9XG4gICAgI21haW5OYXYgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEge1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgICNtYWluTmF2IC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhOmZvY3VzLCAjbWFpbk5hdiAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYTpob3ZlciB7XG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICNtYWluTmF2IHtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgICAgIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gICAgI21haW5OYXYuaXMtZml4ZWQge1xuICAgICAgLyogd2hlbiB0aGUgdXNlciBzY3JvbGxzIGRvd24sIHdlIGhpZGUgdGhlIGhlYWRlciByaWdodCBhYm92ZSB0aGUgdmlld3BvcnQgKi9cbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogLTY3cHg7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICB9XG4gICAgI21haW5OYXYuaXMtZml4ZWQgLm5hdmJhci1icmFuZCB7XG4gICAgICBjb2xvcjogIzIxMjUyOTtcbiAgICB9XG4gICAgI21haW5OYXYuaXMtZml4ZWQgLm5hdmJhci1icmFuZDpmb2N1cywgI21haW5OYXYuaXMtZml4ZWQgLm5hdmJhci1icmFuZDpob3ZlciB7XG4gICAgICBjb2xvcjogIzAwODVBMTtcbiAgICB9XG4gICAgI21haW5OYXYuaXMtZml4ZWQgLm5hdmJhci1uYXYgPiBsaS5uYXYtaXRlbSA+IGEge1xuICAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgfVxuICAgICNtYWluTmF2LmlzLWZpeGVkIC5uYXZiYXItbmF2ID4gbGkubmF2LWl0ZW0gPiBhOmZvY3VzLCAjbWFpbk5hdi5pcy1maXhlZCAubmF2YmFyLW5hdiA+IGxpLm5hdi1pdGVtID4gYTpob3ZlciB7XG4gICAgICBjb2xvcjogIzAwODVBMTtcbiAgICB9XG4gICAgI21haW5OYXYuaXMtdmlzaWJsZSB7XG4gICAgICAvKiBpZiB0aGUgdXNlciBjaGFuZ2VzIHRoZSBzY3JvbGxpbmcgZGlyZWN0aW9uLCB3ZSBzaG93IHRoZSBoZWFkZXIgKi9cbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gICAgfVxuICB9XG4gIFxuICBoZWFkZXIubWFzdGhlYWQge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg2OGU5NjtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuICBcbiAgaGVhZGVyLm1hc3RoZWFkIC5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTI1Mjk7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIFxuICBoZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyxcbiAgaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcsXG4gIGhlYWRlci5tYXN0aGVhZCAuc2l0ZS1oZWFkaW5nIHtcbiAgICBwYWRkaW5nOiAxMDBweCAwIDgwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIGhlYWRlci5tYXN0aGVhZCAuYWRtaW4taGVhZGluZyB7XG4gICAgcGFkZGluZzogNDBweCAwIDYwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaGVhZGVyLm1hc3RoZWFkIC5wYWdlLWhlYWRpbmcsXG4gICAgaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcsXG4gICAgaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcge1xuICAgICAgcGFkZGluZzogMTAwcHggMDtcbiAgICB9XG4gICAgaGVhZGVyLm1hc3RoZWFkIC5hZG1pbi1oZWFkaW5nIHtcbiAgICAgIHBhZGRpbmc6IDYwcHggMDtcbiAgICB9XG4gIH1cbiAgXG4gIGhlYWRlci5tYXN0aGVhZCAucGFnZS1oZWFkaW5nLFxuICBoZWFkZXIubWFzdGhlYWQgLnNpdGUtaGVhZGluZyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICBoZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyBoMSxcbiAgaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcgaDEge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIFxuICBoZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyAuc3ViaGVhZGluZyxcbiAgaGVhZGVyLm1hc3RoZWFkIC5zaXRlLWhlYWRpbmcgLnN1YmhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBoZWFkZXIubWFzdGhlYWQgLnBhZ2UtaGVhZGluZyBoMSxcbiAgICBoZWFkZXIubWFzdGhlYWQgLnNpdGUtaGVhZGluZyBoMSB7XG4gICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgfVxuICB9XG4gIFxuICBoZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyBoMSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICB9XG4gIFxuICBoZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyAubWV0YSxcbiAgaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgLnN1YmhlYWRpbmcge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIGhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5zdWJoZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW46IDEwcHggMCAzMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgfVxuICBcbiAgaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgLm1ldGEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LWZhbWlseTogJ0xvcmEnLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG4gIH1cbiAgXG4gIGhlYWRlci5tYXN0aGVhZCAucG9zdC1oZWFkaW5nIC5tZXRhIGEge1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gIFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgaGVhZGVyLm1hc3RoZWFkIC5wb3N0LWhlYWRpbmcgaDEge1xuICAgICAgZm9udC1zaXplOiA1NXB4O1xuICAgIH1cbiAgICBoZWFkZXIubWFzdGhlYWQgLnBvc3QtaGVhZGluZyAuc3ViaGVhZGluZyB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICB9XG4gIFxuICAucG9zdC1wcmV2aWV3ID4gYSB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gIH1cbiAgXG4gIC5wb3N0LXByZXZpZXcgPiBhOmZvY3VzLCAucG9zdC1wcmV2aWV3ID4gYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMDA4NUExO1xuICB9XG4gIFxuICAucG9zdC1wcmV2aWV3ID4gYSA+IC5wb3N0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIFxuICAucG9zdC1wcmV2aWV3ID4gYSA+IC5wb3N0LXN1YnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gIH1cbiAgXG4gIC5wb3N0LXByZXZpZXcgPiBwIHtcbiAgICBjb2xvcjogIzIxMjUyOTtcbiAgfVxuICBcbiAgLnBvc3QtcHJldmlldyA+IC5wb3N0LW1ldGEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBjb2xvcjogIzg2OGU5NjtcbiAgfVxuICBcbiAgLnBvc3QtcHJldmlldyA+IC5wb3N0LW1ldGEgPiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gIH1cbiAgXG4gIC5wb3N0LXByZXZpZXcgPiAucG9zdC1tZXRhID4gYTpmb2N1cywgLnBvc3QtcHJldmlldyA+IC5wb3N0LW1ldGEgPiBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogIzAwODVBMTtcbiAgfVxuICBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5wb3N0LXByZXZpZXcgPiBhID4gLnBvc3QtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgIH1cbiAgfVxuICBcbiAgLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG4gIH1cbiAgXG4gIC5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIGlucHV0LFxuICAuZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCB0ZXh0YXJlYSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogJ0xvcmEnLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG4gIH1cbiAgXG4gIC5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxuICAuZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCB0ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM4NjhlOTY7XG4gICAgZm9udC1mYW1pbHk6ICdMb3JhJywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xuICB9XG4gIFxuICAuZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cCBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNzY0NzA1ODgyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG4gICAgdG9wOiAyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRyYW5zaXRpb246IHRvcCAwLjNzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIC5oZWxwLWJsb2NrIHtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgfVxuICBcbiAgLmZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAtd2l0aC12YWx1ZSBsYWJlbCB7XG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgXG4gIC5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwLXdpdGgtZm9jdXMgbGFiZWwge1xuICAgIGNvbG9yOiAjMDA4NUExO1xuICB9XG4gIFxuICBmb3JtIC5mb3JtLWdyb3VwOmZpcnN0LWNoaWxkIC5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgfVxuICBcbiAgZm9vdGVyIHtcbiAgICBwYWRkaW5nOiA1MHB4IDAgNjVweDtcbiAgfVxuICBcbiAgZm9vdGVyIC5saXN0LWlubGluZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIGZvb3RlciAuY29weXJpZ2h0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5idG4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODVBMTtcbiAgICBib3JkZXItY29sb3I6ICMwMDg1QTE7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeTpob3ZlciwgLmJ0bi1wcmltYXJ5OmZvY3VzLCAuYnRuLXByaW1hcnk6YWN0aXZlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NTdiICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA2NTdiICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5idG4tbGcge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiAyNXB4IDM1cHg7XG4gIH1cblxuICAuYnRuLXNtIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIH1cbiAgLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcbn0iXX0= */", '', '']]

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