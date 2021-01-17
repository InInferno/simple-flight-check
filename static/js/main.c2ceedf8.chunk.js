(this["webpackJsonpsimple-flight-check"]=this["webpackJsonpsimple-flight-check"]||[]).push([[0],{23:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s(1),r=s.n(i),c=s(9),n=s.n(c),o=s(4),l=s(5),h=s(8),u=s(7),p=s(10),m=(s(23),"APP_LOGIN"),g="APP_LOGOUT",d="GET_FLIGHTS",j="FETCH_IS_START",f="FETCH_ERROR";function b(){return{type:m,isLogin:!0}}function O(e){return{type:d,flights:e}}function _(e){return{type:j,isFetchStart:e}}function v(e){return{type:f,isFetchError:e}}var x=s(3),N=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).handleUserInput=function(e){var t=e.target.name,s=e.target.value;a.setState(Object(p.a)({},t,s),(function(){a.validateField(t,s)}))},a.submitForm=function(e){e.preventDefault(),localStorage.isLogin=!0,console.log("login",a.props),console.log("login2",localStorage.isLogin),a.props.getLogin()},a.state={email:"",password:"",formErrors:{email:"",password:""},emailValid:!1,passwordValid:!1,formValid:!1},a}return Object(l.a)(s,[{key:"validateField",value:function(e,t){var s=this.state.formErrors,a=this.state.emailValid,i=this.state.passwordValid;switch(e){case"email":a=t.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),s.email=a?"":"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 email";break;case"password":i=t.match(/[\da-zA-Z~!@#$%^&*()_+=\-;:`'"]{8,}/gim),s.password=i?"":" \u041f\u0430\u0440\u043e\u043b\u044c \u043e\u0442 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u0431\u0435\u0437 \u043a\u0438\u0440\u0438\u043b\u0438\u0446\u044b"}this.setState({formErrors:s,emailValid:a,passwordValid:i},this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.emailValid&&this.state.passwordValid})}},{key:"errorClass",value:function(e){return 0===e.length?"":"signin__error_active"}},{key:"errorClassLabel",value:function(e){return 0===e.length?"":"signin__label_error"}},{key:"errorClassInput",value:function(e){return 0===e.length?"":"signin__input_error"}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"page-signin-bg"}),Object(a.jsx)("div",{className:"page-signin",children:Object(a.jsxs)("form",{className:"signin",onSubmit:this.submitForm,children:[Object(a.jsx)("h1",{className:"signin__title",children:"Simple Flight Check"}),Object(a.jsx)("label",{className:"signin__label ".concat(this.errorClassLabel(this.state.formErrors.email)),children:"\u041b\u043e\u0433\u0438\u043d:"}),Object(a.jsx)("input",{className:"signin__input ".concat(this.errorClassInput(this.state.formErrors.email)),name:"email",value:this.state.email,onChange:this.handleUserInput}),Object(a.jsx)("p",{className:"signin__error-email ".concat(this.errorClass(this.state.formErrors.email)),children:this.state.formErrors.email}),Object(a.jsx)("label",{className:"signin__label signin__label_password ".concat(this.errorClassLabel(this.state.formErrors.password)),value:this.state.password,children:"\u041f\u0430\u0440\u043e\u043b\u044c:"}),Object(a.jsx)("input",{className:"signin__input ".concat(this.errorClassInput(this.state.formErrors.password)),type:"password",name:"password",value:this.state.password,onChange:this.handleUserInput}),Object(a.jsx)("p",{className:"signin__error-password ".concat(this.errorClass(this.state.formErrors.password)),children:this.state.formErrors.password}),Object(a.jsx)("button",{className:"signin__button",disabled:!this.state.formValid,type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})})]})}}]),s}(i.Component),y=Object(x.b)((function(e){return e}),(function(e){return{getLogin:function(){return e(b())}}}))(N),w=(s(30),s.p+"static/media/arrow.9725e5ac.svg"),k=(s.p,s.p+"static/media/imageOne.e0a9fc40.jpg"),F=s.p+"static/media/imageTwo.a7be6045.jpg",C=s.p+"static/media/imageThree.627491ab.jpg",L=s.p+"static/media/imageFour.f65964c8.jpg",E=s.p+"static/media/plane.95545d26.svg",S=s.p+"static/media/arrowRight.1582dbef.svg",T=s.p+"static/media/likeActive.89fe6427.svg",I=s.p+"static/media/like.27d71800.svg",V=s.p+"static/media/iconExit.6e45871d.svg";var P=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).logout=function(e){e.preventDefault(),localStorage.isLogin="",a.props.getLogout()},a.handleChangeInput=function(e){a.props.getFlights(e.target.value),console.log(a.props)},a.carusel=r.a.createRef(),a.state={like:!1},a}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=["\u042f\u043d\u0432\u0430\u0440\u044f","\u0424\u0435\u0432\u0440\u0430\u043b\u044f","\u041c\u0430\u0440\u0442\u0430","\u0410\u043f\u0440\u0435\u043b\u044f","\u041c\u0430\u044f","\u0418\u044e\u043d\u044f","\u0418\u044e\u043b\u044f","\u0410\u0432\u0433\u0443\u0441\u0442\u0430","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u041e\u043a\u0442\u044f\u0431\u0440\u044f","\u041d\u043e\u044f\u0431\u0440\u044f","\u0414\u0435\u043a\u0430\u0431\u0440\u044f"];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"page-flights-bg"}),Object(a.jsxs)("p",{className:"logout",onClick:this.logout,children:["\u0412\u044b\u0439\u0442\u0438",Object(a.jsx)("img",{className:"icon-logout",src:V,alt:"exit"})]}),Object(a.jsx)("div",{className:"page-flights",children:Object(a.jsxs)("form",{className:"flights",children:[Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("p",{className:"info__text",children:"\u0412\u044b\u043b\u0435\u0442\u044b"}),Object(a.jsx)("img",{className:"info__icon-arrow",src:w,alt:"arrow"}),Object(a.jsx)("p",{className:"info__text",children:"SVO - JFK"}),Object(a.jsx)("input",{className:"info__date-input",onChange:this.handleChangeInput,type:"date",id:"davaToday"})]}),Object(a.jsxs)("div",{className:"images",onWheel:function(t){return function(t){100===t.deltaY?e.carusel.current.scrollLeft+=20:e.carusel.current.scrollLeft-=20}(t)},ref:this.carusel,children:[Object(a.jsx)("img",{className:"images__image",src:k,alt:"city"}),Object(a.jsx)("img",{className:"images__image",src:F,alt:"city"}),Object(a.jsx)("img",{className:"images__image",src:C,alt:"city"}),Object(a.jsx)("img",{className:"images__image",src:L,alt:"city"})]}),Object(a.jsx)("div",{className:"favorites",children:Object(a.jsxs)("p",{className:"favorites__text",children:["\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435:\xa0",Object(a.jsx)("span",{className:"favorites__num",children:"10"}),"\xa0\u0440\u0435\u0439\u0441\u043e\u0432"]})}),Object(a.jsxs)("div",{className:"cards",children:[this.props.flights?Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card__elipse",children:Object(a.jsx)("img",{className:"card__plane",src:E,alt:"plane"})}),Object(a.jsxs)("div",{className:"card__item-data",children:[Object(a.jsxs)("p",{className:"card__cities",children:[this.props.flights.Places[1].CityName," (",this.props.flights.Places[1].SkyscannerCode,")",Object(a.jsx)("img",{className:"card__icon-arrow-right",src:S,alt:"arrow right"}),this.props.flights.Places[0].CityName," (",this.props.flights.Places[0].SkyscannerCode,")"]}),Object(a.jsx)("p",{className:"card__time",children:function(e){var s=new Date(Date.parse(e));return"".concat(s.getDate()," ").concat(t[s.getMonth()],", ").concat(s.getFullYear()," - ").concat(s.getHours(),":").concat(s.getMinutes())}(this.props.flights.Quotes[0].QuoteDateTime)}),Object(a.jsx)("p",{className:"card__time",children:this.props.flights.Carriers[0].Name})]}),Object(a.jsxs)("div",{className:"price",children:[Object(a.jsx)("img",{className:"price__heart",onClick:function(){e.setState({like:!e.state.like})},src:"".concat(this.state.like?T:I),alt:"price__heart"}),Object(a.jsxs)("p",{className:"price__price",children:["Price:\xa0",Object(a.jsxs)("span",{className:"price__num",children:[this.props.flights.Quotes[0].MinPrice," ",this.props.flights.Currencies[0].Symbol]})]})]})]}):Object(a.jsx)("p",{className:"cards__text-clear",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0432 \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u0435, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0431\u0438\u043b\u0435\u0442\u044b."}),this.props.isFetchStart&&Object(a.jsx)("div",{className:"preloader"}),this.props.isFetchError&&Object(a.jsx)("h2",{className:"error-block",children:this.props.isFetchError})]})]})})]})}}]),s}(i.Component),D=Object(x.b)((function(e){return e}),(function(e){return{getLogout:function(){return e({type:g,isLogin:!1})},getFlights:function(t){return e(function(e){return function(t){t(_(!0)),t(O(null)),t(v(null)),fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/RU/RUB/ru-RU/SVO-sky/JFK-sky/".concat(e),{method:"GET",headers:{"x-rapidapi-key":"c13f70326cmsh8e2722f893b4104p1ff122jsn59eef51f3095","x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com","Content-Type":"application/json"}}).then((function(e){if(200!==e.status)throw new Error(e.status);return e.json()})).then((function(e){console.log("fetch",e),t(O(e))})).finally((function(e){t(_(!1))})).catch((function(e){console.log(e),t(v(function(e){switch(e){case"400":return"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0435";case"401":return"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d";case"404":return"\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b";case"Failed to fetch":return"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430";default:return"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430"}}(e.message)))}))}}(t))}}}))(P),R=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"componentDidMount",value:function(){localStorage.isLogin&&this.props.getLogin()}},{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:this.props.isLogin?Object(a.jsx)(D,{}):Object(a.jsx)(y,{})})}}]),s}(i.Component),U=Object(x.b)((function(e){return e}),(function(e){return{getLogin:function(){return e(b())}}}))(R),A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,32)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),a(e),i(e),r(e),c(e)}))},G=s(6),M=s(16),H=s(17),J=s(2),B={isLogin:!1,flights:"",favorites:""};var Q=Object(G.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(J.a)(Object(J.a)({},e),{},{isLogin:!0});case g:return Object(J.a)(Object(J.a)({},e),{},{isLogin:!1});case d:return Object(J.a)(Object(J.a)({},e),{},{flights:t.flights});case j:return Object(J.a)(Object(J.a)({},e),{},{isFetchStart:t.isFetchStart});case f:return Object(J.a)(Object(J.a)({},e),{},{isFetchError:t.isFetchError});default:return e}}),Object(H.composeWithDevTools)(Object(G.applyMiddleware)(M.a)));n.a.render(Object(a.jsx)(x.a,{store:Q,children:Object(a.jsx)(U,{})}),document.getElementById("root")),A()}},[[31,1,2]]]);
//# sourceMappingURL=main.c2ceedf8.chunk.js.map