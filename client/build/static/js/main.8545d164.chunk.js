(this["webpackJsonpbeerhouse-ba"]=this["webpackJsonpbeerhouse-ba"]||[]).push([[0],{101:function(e,t,c){},131:function(e,t){},159:function(e,t,c){},160:function(e,t,c){},163:function(e,t,c){},164:function(e,t,c){},165:function(e,t,c){},166:function(e,t,c){},184:function(e,t,c){},185:function(e,t,c){},186:function(e,t,c){},187:function(e,t,c){},188:function(e,t,c){},189:function(e,t,c){},190:function(e,t,c){},196:function(e,t,c){},197:function(e,t,c){},205:function(e,t,c){},206:function(e,t,c){},207:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(19),n=c.n(s),r=c(7),i=c(21),o=c(2),l="AUTH",j="LOGOUT",d="ADD_TO_CART",m="REMOVE_FROM_CART",b="INCREASE_ITEM",u="DECREASE_ITEM",O="CLEAR_CART",h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return localStorage.setItem("profile",JSON.stringify(Object(o.a)({},null===t||void 0===t?void 0:t.data))),Object(o.a)(Object(o.a)({},e),{},{authData:t.data,loading:!1,errors:null});case j:return localStorage.clear(),Object(o.a)(Object(o.a)({},e),{},{authData:null,loading:!1,errors:null});default:return e}},_=c(33),x={cartItems:localStorage.getItem("products")?JSON.parse(localStorage.getItem("products")):[]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(o.a)(Object(o.a)({},e),{},{cartItems:[].concat(Object(_.a)(e.cartItems),[t.payload])});case m:return Object(o.a)(Object(o.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e!==t.payload}))});case b:var c=e.cartItems.findIndex((function(e){return e.item.id===t.payload}));return e.cartItems[c]=Object(o.a)(Object(o.a)({},e.cartItems[c]),{},{qty:e.cartItems[c].qty+1}),Object(o.a)(Object(o.a)({},e),{},{cartItems:Object(_.a)(e.cartItems)});case u:var a=e.cartItems.findIndex((function(e){return e.item.id===t.payload}));return e.cartItems[a]=Object(o.a)(Object(o.a)({},e.cartItems[a]),{},{qty:1===e.cartItems[a].qty?e.cartItems[a].qty=1:e.cartItems[a].qty-1}),Object(o.a)(Object(o.a)({},e),{},{cartItems:Object(_.a)(e.cartItems)});case O:return Object(o.a)({},x);default:return e}},f=Object(i.b)({auth:h,cart:p}),v=c(53),N=(c(101),c(12)),g=c.n(N),C=c(22),y=c(5),k=c(4),I=c(6),S=c(87);c(156).config();var E=Object(S.createClient)({space:"5tgzqrr3gegh",environment:"master",accessToken:"TP97iOVCY5Au2X0Ci9XDcaO5nR9o67XX0p-82tKuZhU"}),T=(c(159),c.p+"static/media/beer1.5b532d2a.png"),w=(c(160),c(0)),q=function(){var e=Object(I.f)();return Object(w.jsxs)("div",{className:"hero-container animate__animated animate__fadeIn",children:[Object(w.jsxs)("div",{className:"hero-title__container",children:[Object(w.jsx)("div",{className:"hero-title",children:"BEER HOUSE"}),Object(w.jsx)("div",{className:"hero-subtitle",children:"Las mejores cerveza del mundo en tu casa"}),Object(w.jsx)("button",{className:"hero-button",onClick:function(){return e.push("/tienda")},children:"COMPRAR"})]}),Object(w.jsx)("img",{src:T,alt:"",className:"hero-img"})]})},A=(c(163),function(e){var t=e.beers,c=Object(I.f)();return Object(w.jsx)("div",{className:"productCard__container",children:t.map((function(e){return Object(w.jsxs)("div",{className:"productCard",onClick:function(){return c.push("/tienda/".concat(e.sys.id))},children:[Object(w.jsx)("img",{src:e.fields.image.fields.file.url,alt:"",className:"productCard__image"}),Object(w.jsx)("h1",{className:"productCard__title",children:e.fields.name}),Object(w.jsxs)("span",{className:"productCard__price",children:["$ ",e.fields.price]}),Object(w.jsx)("p",{className:"productCard__description",children:e.fields.description})]},e.fields.id)})).splice(0,5)})}),P=(c(164),function(e){var t=e.beers,c=e.setBeers,a=e.loading;return Object(w.jsxs)("div",{className:"products__container",id:"ofertas",children:[Object(w.jsx)("h1",{className:"products__title",children:"Cervezas En Oferta"}),Object(w.jsx)("p",{className:"products__description",children:"Importadas desde los pa\xedses con m\xe1s tradici\xf3n cervecera y bajo estrictos est\xe1ndares de calidad. No te pierdas las mejores ofertas para este verano"}),Object(w.jsx)("div",{className:"products__wrapper animate__animated animate__fadeIn",children:a?Object(w.jsx)("h1",{children:"Loading"}):Object(w.jsx)(A,{beers:t,setBeers:c})})]})}),L=(c(71),function(e){var t=e.text,c=e.image,a=e.name,s=e.profession;return Object(w.jsx)("div",{className:"col-sm-4",children:Object(w.jsxs)("div",{className:"card text-center",children:[Object(w.jsx)("div",{className:"content",children:Object(w.jsx)("div",{className:"text",children:t})}),Object(w.jsxs)("div",{className:"author",children:[Object(w.jsx)("div",{className:"image",children:Object(w.jsx)("img",{src:c,alt:"",className:"img-responsive"})}),Object(w.jsx)("div",{className:"details",children:Object(w.jsxs)("h2",{children:[a,Object(w.jsx)("br",{}),Object(w.jsx)("span",{children:s})]})})]})]})})}),B=function(){return Object(w.jsxs)("section",{className:"testimonials__section",children:[Object(w.jsx)("h1",{className:"testimonials__title",children:"Clientes Que Nos Eligen"}),Object(w.jsx)("div",{className:"container-fluid",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)(L,{image:"https://pbs.twimg.com/profile_images/606196213369720832/lSvWN_q-_400x400.jpg",name:"Marcos Arlia",profession:"M\xfasico y Escritor",text:"Siempre es bueno para un artista tener una cerveza fr\xeda para esos momentos de falta de inspiraci\xf3n. Con Beerhouse puedo tener  una siempre ya que los env\xedos son muy r\xe1pidos y eficientes"}),Object(w.jsx)(L,{image:"https://s3media.247sports.com/Uploads/Assets/769/656/9656769.jpg",name:"Beatr\xedz Soria",profession:"Escritora y Ensayista",text:"Realmente la variedad y calidad de los productos de Beerhouse es muy dif\xedcil de encontrar en otras cervecer\xedas de Buenos Aires. Cada vez que puedo, hago un pedido y en un rato me llega"}),Object(w.jsx)(L,{image:"https://rocksalta.com/wp-content/uploads/2021/04/Manuel-Moretti-Estelares.jpg",name:"Manuel Moretti",profession:"M\xfasico y Cantante",text:"Le recomiendo Beerhouse a todos mis amigos y bandas amigas ya que la variedad de cervezas que disponen es enorme. Nada como una buena cerveza con amigos un fin de semana!"})]})})})]})},z=(c(72),function(e){var t=e.icon,c=e.service,a=e.description;return Object(w.jsx)("div",{className:"services__card",children:Object(w.jsxs)("div",{className:"services__box",children:[Object(w.jsx)("i",{className:t}),Object(w.jsx)("h3",{children:c}),Object(w.jsx)("p",{children:a})]})})}),D=function(){return Object(w.jsx)("div",{className:"services",children:Object(w.jsxs)("div",{className:"services__container",children:[Object(w.jsx)("h1",{children:"Nuestros Servicios"}),Object(w.jsx)("div",{className:"services__content",children:[{icon:"fas fa-beer",service:"World Beers",description:"Cervezas importadas de todo el mundo. Rubias, rojas, doradas, negras. Para todo gusto."},{icon:"fas fa-truck",service:"Env\xedos a Domicilio",description:"Te llevamos las cervezas que quieras a donde quieras, para que no te falte nunca una birra."},{icon:"fas fa-gift",service:"Regal\xe1 Cerveza",description:"\xbfTen\xe9s un cumplea\xf1os y no sab\xe9s que regalar? Consult\xe1 nuestros packs especiales de regalos."},{icon:"far fa-id-card",service:"Hac\xe9te miembro",description:"Asociete al Club Beerhouse y recib\xed novedades, descuentos y particip\xe1 de sorteos."}].map((function(e){return Object(w.jsx)(z,{icon:e.icon,service:e.service,description:e.description},e.service)}))})]})})},R=c(20),F=(c(165),c(9));c(45);F.a.configure();var M={name:"",email:"",message:""},H=function(){var e=Object(a.useState)(M),t=Object(y.a)(e,2),c=t[0],s=t[1],n=function(e){return s(Object(o.a)(Object(o.a)({},c),{},Object(R.a)({},e.target.name,e.target.value)))};return Object(w.jsxs)("div",{className:"contact",id:"contacto",children:[Object(w.jsxs)("div",{className:"contact__content",children:[Object(w.jsx)("h1",{children:"Contact\xe1nos"}),Object(w.jsx)("p",{children:"Hacenos tu consulta o pedido, te respondemos siempre lo m\xe1s pronto posible"})]}),Object(w.jsxs)("div",{className:"contact__container",children:[Object(w.jsxs)("div",{className:"contact__contactInfo",children:[Object(w.jsxs)("div",{className:"contact__box",children:[Object(w.jsx)("div",{className:"contact__icon",children:Object(w.jsx)("i",{className:"fa fa-map-marker"})}),Object(w.jsxs)("div",{className:"contact__text",children:[Object(w.jsx)("h3",{children:"Direcci\xf3n"}),Object(w.jsx)("p",{children:"Talcahuano 1095, Buenos Aires."})]})]}),Object(w.jsxs)("div",{className:"contact__box",children:[Object(w.jsx)("div",{className:"contact__icon",children:Object(w.jsx)("i",{className:"fab fa-whatsapp"})}),Object(w.jsxs)("div",{className:"contact__text",children:[Object(w.jsx)("h3",{children:"Whatsapp"}),Object(w.jsx)("p",{children:" (011) 22334455"})]})]}),Object(w.jsxs)("div",{className:"contact__box",children:[Object(w.jsx)("div",{className:"contact__icon",children:Object(w.jsx)("i",{className:"fa fa-envelope"})}),Object(w.jsxs)("div",{className:"contact__text",children:[Object(w.jsx)("h3",{children:"Email"}),Object(w.jsx)("p",{children:"beerhouse@craftbeer.com"})]})]})]}),Object(w.jsx)("div",{className:"contact__form",children:Object(w.jsxs)("form",{children:[Object(w.jsx)("h2",{className:"contact__form__title",children:"Enviar Mensaje"}),Object(w.jsxs)("div",{className:"contact__form__input",children:[Object(w.jsx)("input",{type:"text",name:"name",required:"required",onChange:n}),Object(w.jsx)("span",{children:"Nombre"})]}),Object(w.jsxs)("div",{className:"contact__form__input",children:[Object(w.jsx)("input",{type:"email",name:"email",required:"required",onChange:n}),Object(w.jsx)("span",{children:"Email"})]}),Object(w.jsxs)("div",{className:"contact__form__input",children:[Object(w.jsx)("textarea",{required:"required",name:"message",onChange:n}),Object(w.jsx)("span",{children:"Mensaje"})]}),Object(w.jsx)("div",{className:"contact__form__input",children:Object(w.jsx)("input",{type:"submit",name:"",value:"Enviar",onClick:function(e){e.preventDefault(),s(M),Object(F.a)("Mensaje enviado. Te contestamos a la brevedad. Gracias!",{position:F.a.POSITION.TOP_LEFT})}})})]})})]})]})},U=c.p+"static/media/beer2.383425c0.jpeg",J=c.p+"static/media/beer3.b5c43d40.jpeg",V=(c(166),function(){return Object(w.jsx)("section",{id:"nosotros",children:Object(w.jsxs)("div",{className:"about wrapper",children:[Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)("h1",{className:"about__title",children:"Nuestra Historia"}),Object(w.jsxs)("div",{className:"row align-items-center",children:[Object(w.jsx)("div",{className:"col-lg-7 col-md-12 mb-lg-0 mb-5",children:Object(w.jsx)("div",{className:"card border-0",children:Object(w.jsx)("img",{src:U,alt:"",className:"img-fluid about__image"})})}),Object(w.jsxs)("div",{className:"col-lg-5 col-md-12 text-secondary",children:[Object(w.jsx)("h2",{children:"Desde hace 5 a\xf1os llevando a tu casa la mejor cerveza"}),Object(w.jsx)("p",{children:"Beerhouse nace como el proyecto de 5 amigos que, cansados de consumir siempre las mismas 5 marcas de cerveza decidieron comenzar a importarlas de todo el mundo y no s\xf3lo eso, tambi\xe9n llev\xe1rtelas."}),Object(w.jsx)("button",{className:"main-btn mt-4",children:"Leer M\xe1s"})]})]})]}),Object(w.jsx)("div",{className:"container about-type",children:Object(w.jsxs)("div",{className:"row align-items-center",children:[Object(w.jsxs)("div",{className:"col-lg-5 col-md-12 text-secondary mb-lg-0 mb-5",children:[Object(w.jsx)("h2",{children:"Calidad y Servicio"}),Object(w.jsx)("p",{children:"Realiz\xe1 tu pedido ahora, si viv\xeds en Buenos Aires obten\xe9lo en tu casa dentro de las pr\xf3ximas 24 horas. Hacemos env\xedos a todo el pa\xeds, consult\xe1 los plazos de entrega."}),Object(w.jsxs)("ul",{className:"list-unstyled py-3",children:[Object(w.jsx)("li",{children:"Cervezas de todo el mundo"}),Object(w.jsx)("li",{children:"Ofertas todas las semanas"}),Object(w.jsx)("li",{children:"Env\xedo dentro de 24 horas"})]}),Object(w.jsx)("button",{className:"main-btn mt-4",children:"Leer M\xe1s"})]}),Object(w.jsx)("div",{className:"col-lg-7 col-md-12",children:Object(w.jsx)("div",{className:"card border-8",children:Object(w.jsx)("img",{src:J,alt:"",className:"img-fluid about__image2"})})})]})})]})})}),G=function(e){var t=e.beers,c=e.setBeers,a=e.loading;return Object(w.jsxs)("div",{className:"home__container",children:[Object(w.jsx)(q,{}),Object(w.jsx)(P,{beers:t,setBeers:c,loading:a}),Object(w.jsx)(D,{}),Object(w.jsx)(V,{}),Object(w.jsx)(B,{}),Object(w.jsx)(H,{})]})},Y=c.p+"static/media/beerhouse5.ee59b8ea.jpg",$=c(89),W=c.n($).a.create({baseURL:"http://localhost:5000"});W.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var X=function(e){return W.post("/user/signin",e)},Z=function(e){return W.post("/user/signup",e)};F.a.configure();var K=function(){Object(F.a)("Te logueaste correctamente",{position:F.a.POSITION.TOP_LEFT})},Q=function(){Object(F.a)("Error. Credenciales Inv\xe1lidas",{position:F.a.POSITION.TOP_LEFT})},ee=(c(184),{email:"",password:"",confirmPassword:""}),te=function(){var e=Object(I.f)(),t=Object(r.b)(),c=Object(a.useState)(ee),s=Object(y.a)(c,2),n=s[0],i=s[1],j=Object(a.useState)(!1),d=Object(y.a)(j,2),m=d[0],b=d[1],u=function(e){return i(Object(o.a)(Object(o.a)({},n),{},Object(R.a)({},e.target.name,e.target.value)))};return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("section",{className:"login py-5",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"row  container__row g-0",children:[Object(w.jsx)("div",{className:"col-lg-5 col-md-5 col-sm-12 col-12",children:Object(w.jsx)("img",{src:Y,alt:"",className:"img-fluid"})}),Object(w.jsxs)("div",{className:"col-lg-7 com-md-7 com-sm-12 col-12 text-center py-5",children:[Object(w.jsx)("h1",{className:"animate__animated animate__zoomInDown animate__delay-0.7s",children:"Logueate y Ped\xed tus cervezas"}),Object(w.jsxs)("form",{onSubmit:function(c){c.preventDefault(),t(m?function(e,t){return function(){var c=Object(C.a)(g.a.mark((function c(a){var s,n;return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Z(e);case 3:s=c.sent,n=s.data,a({type:l,data:n}),t.push("/tienda"),K(),c.next=14;break;case 10:c.prev=10,c.t0=c.catch(0),console.log(c.t0.message),Q();case 14:case"end":return c.stop()}}),c,null,[[0,10]])})));return function(e){return c.apply(this,arguments)}}()}(n,e):function(e,t){return function(){var c=Object(C.a)(g.a.mark((function c(a){var s,n;return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,X(e);case 3:s=c.sent,n=s.data,a({type:l,data:n}),t.push("/tienda"),K(),c.next=14;break;case 10:c.prev=10,c.t0=c.catch(0),console.log(c.t0.message),Q();case 14:case"end":return c.stop()}}),c,null,[[0,10]])})));return function(e){return c.apply(this,arguments)}}()}(n,e))},children:[Object(w.jsx)("div",{className:"form-row pt-4",children:Object(w.jsx)("div",{className:"offset-1 col-lg-10",children:Object(w.jsx)("input",{id:"email",name:"email",type:"email",placeholder:"Email",onChange:u,autoFocus:!0,className:"input-email my-3 px-3"})})}),Object(w.jsx)("div",{className:"form-row pt-4",children:Object(w.jsx)("div",{className:"offset-1 col-lg-10",children:Object(w.jsx)("input",{id:"password",name:"password",type:"password",placeholder:"Password",onChange:u,className:"input-password px-3"})})}),m&&Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:"form-row pt-4",children:Object(w.jsx)("div",{className:"offset-1 col-lg-10",children:Object(w.jsx)("input",{id:"password",name:"confirmPassword",type:"password",placeholder:"Confirmar Password",onChange:u,className:"input-password px-3"})})})}),Object(w.jsx)("div",{className:"login__account__container",children:Object(w.jsx)("span",{className:"login__account",onClick:function(){i(ee),b((function(e){return!e}))},children:m?"\xbfYa ten\xe9s una cuenta? Logueate":"\xbfNo ten\xe9s una cuenta? Registrate"})}),Object(w.jsx)("div",{className:"form-row pt-4 pb-3",children:Object(w.jsx)("div",{className:"offset-1 col-lg-10",children:Object(w.jsx)("button",{className:"btn-login mt-3",type:"submit",children:m?"Registrarse":"Ingresar"})})})]})]})]})})})})},ce=(c(185),function(e){var t=e.beer;return Object(w.jsx)("div",{className:"product__card",children:Object(w.jsxs)(k.b,{to:"/tienda/".concat(t.sys.id),children:[Object(w.jsxs)("div",{className:"product__card__body",children:[Object(w.jsx)("img",{src:t.fields.image.fields.file.url,alt:"beer",className:"product__card__img__top"}),Object(w.jsx)("h3",{className:"product__card__title",children:t.fields.name}),Object(w.jsxs)("span",{className:"product__card__price",children:["$ ",t.fields.price]}),Object(w.jsx)("p",{className:"product__card__description",children:t.fields.description})]}),Object(w.jsx)("div",{className:"product__card__button",children:Object(w.jsx)("button",{className:"hero-button",children:"DETALLES"})})]})})}),ae=(c(186),function(e){for(var t=e.beersPerPage,c=e.totalBeers,a=e.paginate,s=[],n=1;n<=Math.ceil(c/t);n++)s.push(n);return Object(w.jsx)("nav",{children:Object(w.jsxs)("ul",{className:"pagination",children:[Object(w.jsx)("button",{onClick:function(){return a(s-1)},className:"page__link",children:"<"}),s.map((function(e,t){return Object(w.jsx)("li",{className:"page__item",children:Object(w.jsx)("button",{onClick:function(){return a(e)},className:"page__link",children:e})},t)})),Object(w.jsx)("button",{onClick:function(){return a(s+1)},className:"page__link",children:">"})]})})}),se=(c(187),function(e){var t=e.paginate,c=e.currentBeers,s=e.beersPerPage,n=e.totalBeers;return Object(a.useEffect)((function(){window.scrollTo(0,40)}),[]),Object(w.jsxs)("div",{className:"products__container",children:[Object(w.jsx)("h1",{children:"CAT\xc1LOGO DE CERVEZAS"}),Object(w.jsx)("div",{className:"products__list",children:c.map((function(e){return Object(w.jsx)(ce,{beer:e},e.fields.id)}))}),Object(w.jsx)(ae,{paginate:t,beersPerPage:s,totalBeers:n})]})}),ne=(c(188),function(){var e,t,c,s=Object(a.useState)(1),n=Object(y.a)(s,2),i=n[0],o=n[1],l=Object(I.f)(),j=Object(a.useState)([]),m=Object(y.a)(j,2),b=m[0],u=m[1],O=JSON.parse(localStorage.getItem("profile")),h=Object(I.h)().id;F.a.configure();var _=Object(r.b)(),x=function(e,t){O?(_(function(e,t){return{type:d,payload:{item:e,qty:t}}}(e,t)),Object(F.a)("Cerveza agregada",{position:F.a.POSITION.TOP_LEFT})):l.push("/login")},p=Object(a.useCallback)(Object(C.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.getEntry(h);case 3:t=e.sent,u(t.fields),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[h]);return Object(a.useEffect)((function(){p()}),[p]),Object(a.useEffect)((function(){window.scrollTo(0,40)}),[]),Object(w.jsxs)("div",{className:"product__container",children:[Object(w.jsx)("div",{className:"product__left",children:Object(w.jsx)("div",{className:"product__image__container",children:Object(w.jsx)("img",{src:null===b||void 0===b||null===(e=b.image)||void 0===e||null===(t=e.fields)||void 0===t||null===(c=t.file)||void 0===c?void 0:c.url,alt:"",className:"product__image"})})}),Object(w.jsxs)("div",{className:"product__right",children:[Object(w.jsx)("h1",{className:"product__title",children:b.name}),Object(w.jsxs)("span",{className:"product__price",children:["$",b.price]}),Object(w.jsx)("p",{className:"product__description",children:b.descriptionExtended}),Object(w.jsx)("div",{className:"product__itemCount",children:Object(w.jsxs)("div",{className:"itemCount",children:[Object(w.jsxs)("div",{className:"btn-container",children:[Object(w.jsx)("button",{onClick:function(){o(i+1)},className:"btn-counter",children:"+"}),Object(w.jsx)("p",{className:"counter",children:i}),Object(w.jsx)("button",{onClick:function(){0!==i&&o(i-1)},className:"btn-counter",children:"-"})]}),Object(w.jsx)("div",{className:"btn-cart-container",children:Object(w.jsx)("button",{onClick:function(){return x(b,i)},className:"btn-cart",children:"Agregar Al Carro"})})]})})]})]})}),re=(c(189),c(190),function(e){var t=e.itemData,c=Object(r.b)();return Object(w.jsxs)("div",{className:"cartItem",children:[Object(w.jsx)("img",{className:"cartItem__image",src:t.item.image.fields.file.url,alt:t.item.name}),Object(w.jsxs)("div",{className:"cartItem__details",children:[Object(w.jsx)("p",{className:"cartItem__details__title",children:t.item.name}),Object(w.jsx)("p",{className:"cartItem__details__description",children:t.item.description}),Object(w.jsxs)("p",{className:"cartItem__details__price",children:["Precio p/u: ",Object(w.jsx)("br",{})," ",Object(w.jsxs)("b",{children:["$ ",t.item.price]})]})]}),Object(w.jsxs)("div",{className:"cartItem__actions",children:[Object(w.jsx)("label",{htmlFor:"qty",children:"Cantidad"}),Object(w.jsxs)("div",{className:"cartItem__qty",children:[Object(w.jsx)("button",{onClick:function(){return c((e=t.item.id,{type:u,payload:e}));var e},children:"-"}),Object(w.jsx)("span",{children:t.qty}),Object(w.jsx)("button",{onClick:function(){return c((e=t.item.id,{type:b,payload:e}));var e},children:"+"})]}),Object(w.jsx)("button",{onClick:function(){return c({type:m,payload:t})},className:"cartItem__actions__deleteItemBtn",children:Object(w.jsx)("i",{className:"fas fa-trash-alt"})})]})]})}),ie=function(e){var t=e.totalPrice,c=e.totalItems,a=Object(r.c)((function(e){return e.cart})).cartItems,s=Object(I.f)();return Object(w.jsxs)("div",{className:"cart",children:[Object(w.jsx)("div",{className:"cart__items",children:0===(null===a||void 0===a?void 0:a.length)?Object(w.jsxs)("div",{className:"cart__no__beer__container",children:[Object(w.jsx)("h1",{className:"cart__no__beer__message",children:"No hay cervezas en el carro"}),Object(w.jsx)(k.b,{to:"/tienda",children:Object(w.jsx)("button",{className:"cart__no__beer__backToStore__button",children:"Ir a la Tienda"})})]}):null===a||void 0===a?void 0:a.map((function(e){return Object(w.jsx)(re,{itemData:e},e.item.id)}))}),Object(w.jsxs)("div",{className:"cart__summary",children:[Object(w.jsx)("h4",{className:"cart__summary__title",children:"En tu carro:"}),Object(w.jsxs)("div",{className:"cart__summary__price",children:[Object(w.jsxs)("span",{children:["TOTAL: (",c," items)"]}),Object(w.jsxs)("span",{children:["$ ",t]})]}),Object(w.jsx)("button",{className:"cart__summary__checkoutBtn",onClick:function(){s.push("/checkout")},disabled:0===a.length,children:"Terminar Compra"})]})]})},oe=c(90),le=c.n(oe),je=c(91),de=c.n(je),me=(c(196),function(e){var t=e.totalPrice,c=Object(I.f)(),s=Object(a.useState)({name:"",phone:"",document:"",address:"",zipCode:"",time:"",creditCardNumber:"",date:"",code:""}),n=Object(y.a)(s,2),i=n[0],l=n[1],j=Object(a.useState)(1),d=Object(y.a)(j,2),m=d[0],b=d[1],u=Object(r.c)((function(e){return e.cart})).cartItems,O=de()(le.a),h=function(e){l(Object(o.a)(Object(o.a)({},i),{},Object(R.a)({},e.target.name,e.target.value)))};return Object(w.jsxs)("div",{className:"contact",id:"contacto",children:[Object(w.jsxs)("div",{className:"contact__content",children:[Object(w.jsx)("h1",{style:{marginTop:"70px"},children:"Confirmar Compra"}),Object(w.jsx)("p",{children:"Por favor ingrese sus datos"})]}),Object(w.jsx)("div",{className:"contact__container",children:Object(w.jsx)("div",{className:"contact__form",children:Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),localStorage.removeItem("products"),O.fire({title:Object(w.jsx)("p",{children:"Hello World"}),footer:"Copyright 2018",didOpen:function(){O.clickConfirm()}}).then((function(){return O.fire(Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h2",{children:"Compra Confirmada"}),Object(w.jsx)("p",{children:"Le enviamos un mail con su orden."})]}))})).then((function(){c.go("/")})),c.push("/")},children:[Object(w.jsxs)("h2",{className:"contact__form__title",children:["Paso N\xb0 ",m," de 3"]}),1===m?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"contact__form__input",children:[Object(w.jsx)("input",{type:"text",name:"name",required:"required",onChange:h,value:i.name}),Object(w.jsx)("span",{children:"Nombre"})]}),Object(w.jsxs)("div",{className:"contact__form__input",children:[Object(w.jsx)("input",{type:"tel",maxLength:10,name:"phone",required:"required",value:i.phone,onChange:h}),Object(w.jsx)("span",{children:"Tel\xe9fono"})]}),Object(w.jsxs)("div",{className:"contact__form__input",children:[Object(w.jsx)("input",{type:"tel",maxLength:8,name:"document",required:"required",value:i.document,onChange:h}),Object(w.jsx)("span",{children:"Documento"})]})]}):null,2===m?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"contact__form__input",children:[Object(w.jsx)("input",{type:"text",name:"address",required:"required",value:i.address,onChange:h}),Object(w.jsx)("span",{children:"Direcci\xf3n"})]}),Object(w.jsxs)("div",{className:"contact__form__input",children:[Object(w.jsx)("input",{type:"number",name:"zipCode",required:"required",value:i.zipCode,onChange:h}),Object(w.jsx)("span",{children:"C\xf3digo Postal"})]}),Object(w.jsxs)("div",{className:"contact__form__input",children:[Object(w.jsx)("input",{type:"text",name:"time",required:"required",value:i.time,onChange:h}),Object(w.jsx)("span",{children:"Horario de Entrega"})]})]}):null,3===m?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h1",{style:{fontSize:"1.5rem",textAlign:"center",marginTop:"30px",textDecoration:"underline"},children:"Su Compra:"}),Object(w.jsxs)("div",{children:[u.map((function(e){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("p",{style:{textAlign:"center",marginTop:"20px"},children:[e.item.name," x ",e.qty," unidades \ud83c\udf7a"," "]},e.id)})})),Object(w.jsxs)("p",{style:{textAlign:"center"},children:["Total a Pagar: ",Object(w.jsxs)("b",{children:["$ ",t]})]})]}),Object(w.jsx)("h1",{style:{fontSize:"1.5rem",textAlign:"center",marginTop:"40px",marginBottom:"20px",textDecoration:"underline"},children:"Pago:"}),Object(w.jsxs)("div",{className:"contact__form__input",children:[Object(w.jsx)("input",{type:"tel",name:"creditCardNumber",required:"required",maxLength:16,value:i.creditCardNumber,onChange:h}),Object(w.jsx)("span",{children:"N\xfamero de Tarjeta"})]}),Object(w.jsxs)("div",{className:"contact__form__input",children:[Object(w.jsx)("input",{type:"date",name:"date",required:"required",value:i.date,onChange:h}),Object(w.jsx)("span",{children:"Fecha de Vencimiento"})]}),Object(w.jsxs)("div",{className:"contact__form__input",children:[Object(w.jsx)("input",{type:"tel",name:"code",required:"required",value:i.code,maxLength:3,onChange:h}),Object(w.jsx)("span",{children:"C\xf3digo (3 n\xfameros)"})]})]}):null,Object(w.jsxs)("div",{className:"checkout__form__buttons__container",children:[3===m?Object(w.jsx)("div",{className:"checkout__form__input",children:Object(w.jsx)("button",{type:"submit",name:"pagar",className:"checkout__form__input__button ",children:"Pagar"})}):null,2===m||3===m?Object(w.jsx)("div",{className:"checkout__form__input",children:Object(w.jsx)("button",{className:"checkout__form__input__button",type:"submit",name:"volver",value:"Volver",onClick:function(){return b(m-1)},disabled:m<2,children:"Volver"})}):null,1===m||2===m?Object(w.jsx)("div",{className:"checkout__form__input",children:Object(w.jsx)("button",{type:"submit",className:"checkout__form__input__button",name:"continuar",onClick:function(){return b(m+1)},disabled:m>2,children:"Continuar"})}):null]})]})})})]})}),be=c.p+"static/media/homer.c50e4f9d.gif",ue=(c(197),function(){var e=Object(I.f)();return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:"notFound_container",children:Object(w.jsxs)("div",{className:"notFound_objects",children:[Object(w.jsx)("h1",{className:"notFound_title",children:"HEY! NO HAY NADA AC\xc1!"}),Object(w.jsx)("img",{src:be,alt:"",className:"notFound_image"}),Object(w.jsx)("button",{className:"notFound__goHome",onClick:function(){e.push("/")},children:"Inicio"})]})})})}),Oe=c(27),he=c(92),_e=(c(205),function(e){var t=e.totalItems,c=Object(a.useState)(!1),s=Object(y.a)(c,2),n=s[0],i=s[1],o=Object(a.useState)(!1),l=Object(y.a)(o,2),d=l[0],m=l[1],b=Object(a.useState)(JSON.parse(localStorage.getItem("profile"))),u=Object(y.a)(b,2),O=u[0],h=u[1],_=Object(I.g)(),x=Object(r.b)(),p=Object(I.f)(),f=function(){x({type:j}),p.push("/login"),p.go(0),h(null)},v=function(){window.scrollY>=80?m(!0):m(!1)};Object(a.useEffect)((function(){window.addEventListener("scroll",v)}),[]);var N=function(){Oe.animateScroll.scrollToTop()};Object(a.useEffect)((function(){var e=null===O||void 0===O?void 0:O.token;e&&(1e3*Object(he.a)(e).exp<(new Date).getTime()&&f());h(JSON.parse(localStorage.getItem("profile")))}),[_]);var g=function(){return i(!n)},C=function(){i(!n)};return"/"===window.location.pathname?Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("nav",{className:"navigation",scrollnav:d.toString(),children:[Object(w.jsx)(k.b,{to:"/",className:"navbar-logotype",onClick:N,children:"BEERHOUSE"}),Object(w.jsx)("div",{className:"menu-icon",onClick:g,children:Object(w.jsx)("i",{className:n?"fas fa-times":"fas fa-bars"})}),Object(w.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[Object(w.jsx)("div",{}),Object(w.jsx)("li",{className:"nav__item",children:Object(w.jsx)(Oe.Link,{to:"ofertas",smooth:"true",duration:500,exact:"true",offset:-80,className:"nav__links",onClick:C,children:"OFERTAS"})}),Object(w.jsx)("li",{className:"nav__item",children:Object(w.jsx)(Oe.Link,{to:"nosotros",className:"nav__links",smooth:"true",duration:500,exact:"true",offset:-60,onClick:C,children:"NOSOTROS"})}),Object(w.jsx)("li",{className:"nav__item",children:Object(w.jsx)(Oe.Link,{to:"contacto",className:"nav__links",smooth:"true",duration:500,exact:"true",offset:0,onClick:C,children:"CONTACTO"})}),Object(w.jsx)("li",{className:"nav__item",children:Object(w.jsxs)(k.b,{to:"/tienda",className:"nav__links",onClick:C,children:["TIENDA ",Object(w.jsx)("i",{className:"fas fa-beer"})]})}),Object(w.jsx)("li",{className:"nav__item",children:O?Object(w.jsx)(k.b,{to:"/login",className:"nav__links",onClick:f,children:"LOGOUT"}):Object(w.jsx)(k.b,{to:"/login",className:"nav__links",onClick:C,children:"LOGIN"})}),Object(w.jsx)("li",{className:"nav__item",children:Object(w.jsxs)(k.b,{to:"/cart",onClick:C,className:"nav__item__icon",children:[Object(w.jsx)("i",{className:"fas fa-cart-arrow-down cart__icon"}),Object(w.jsx)("div",{className:"counter__icon",children:Object(w.jsx)("span",{className:"counter__icon__text",children:t})})]})})]})]})}):Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("nav",{className:"navigation",scrollnav:d.toString(),children:[Object(w.jsx)("a",{href:"/",className:"navbar-logotype",onClick:N,children:"BEERHOUSE"}),Object(w.jsx)("div",{className:"menu-icon",onClick:g,children:Object(w.jsx)("i",{className:n?"fas fa-times":"fas fa-bars"})}),Object(w.jsxs)("ul",{className:n?"nav-menu active":"nav-menu",children:[Object(w.jsx)("li",{className:"nav__item",children:Object(w.jsxs)(k.b,{to:"/tienda",className:"nav__links",onClick:C,children:["TIENDA ",Object(w.jsx)("i",{className:"fas fa-beer"})]})}),Object(w.jsx)("li",{className:"nav__item",children:O?Object(w.jsx)(k.b,{to:"/login",className:"nav__links",onClick:f,children:"LOGOUT"}):Object(w.jsx)(k.b,{to:"/login",className:"nav__links",onClick:C,children:"LOGIN"})}),Object(w.jsx)("li",{className:"nav__item",children:Object(w.jsxs)(k.b,{to:"/cart",onClick:C,className:"nav__item__icon",children:[Object(w.jsx)("i",{className:"fas fa-cart-arrow-down cart__icon"}),Object(w.jsx)("div",{className:"counter__icon__two",children:Object(w.jsx)("span",{className:"counter__icon__text",children:t})})]})})]})]})})}),xe=(c(206),function(){return Object(w.jsxs)("div",{className:"footer__container",children:[Object(w.jsx)("div",{className:"footer__item",children:Object(w.jsx)("img",{src:"https://i0.wp.com/laderasur.com/wp-content/uploads/2018/07/f376447d-01e3-4f57-8cab-068656e3ca2b.jpg?resize=1136%2C759&ssl=1",alt:"footer",className:"footer__image"})}),Object(w.jsxs)("div",{className:"footer__item",children:[Object(w.jsx)("div",{className:"footer__card",children:Object(w.jsx)("h2",{className:"footer__motto",children:"LA CERVEZA VA A TU CASA."})}),Object(w.jsxs)("div",{className:"footer__card",children:[Object(w.jsx)("h1",{className:"footer__title",children:"CONTACTANOS"}),Object(w.jsxs)("p",{className:"footer__text",children:["Talcahuano 1095",Object(w.jsx)("br",{})," Buenos Aires, 1088",Object(w.jsx)("br",{})," (011) 22334455"]})]}),Object(w.jsxs)("div",{className:"footer__card",children:[Object(w.jsx)("h1",{className:"footer__title",children:"HORARIOS"}),Object(w.jsxs)("p",{className:"footer__text",children:["LUNES A VIERNES",Object(w.jsx)("br",{})," 9:00 - 18:00"]}),Object(w.jsxs)("p",{className:"footer__text",children:["S\xc1BADOS Y DOMINGOS",Object(w.jsx)("br",{})," 12:00 - 24:00"]})]})]})]})});var pe=function(){var e=Object(a.useState)([]),t=Object(y.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),i=Object(y.a)(n,2),o=i[0],l=i[1],j=Object(a.useState)(1),d=Object(y.a)(j,2),m=d[0],b=d[1],u=Object(a.useState)(4),O=Object(y.a)(u,1)[0],h=Object(r.c)((function(e){return e.cart})).cartItems,_=function(){var e=Object(C.a)(g.a.mark((function e(){var t,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),e.next=4,E.getEntries({content_type:"beerHouseProject"});case 4:return t=e.sent,e.next=7,t.items;case 7:c=e.sent,s(c),l(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),l(!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){_()}),[]);var x=Object(a.useState)(0),p=Object(y.a)(x,2),f=p[0],v=p[1],N=Object(a.useState)(0),S=Object(y.a)(N,2),T=S[0],q=S[1];Object(a.useEffect)((function(){var e=0,t=0;h.forEach((function(c){e+=c.qty,t+=c.qty*c.item.price})),localStorage.setItem("products",JSON.stringify(h)),q(e),v(t)}),[h,f,T,v,q]);var A=m*O,P=A-O,L=c.slice(P,A);return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(k.a,{children:[Object(w.jsx)(_e,{totalItems:T}),Object(w.jsxs)(I.c,{children:[Object(w.jsx)(I.a,{exact:!0,path:"/",children:Object(w.jsx)(G,{beers:c,setBeers:s,loading:o})}),Object(w.jsx)(I.a,{exact:!0,path:"/tienda",children:Object(w.jsx)(se,{paginate:function(e){return b(e)},beers:c,currentBeers:L,setBeers:s,totalBeers:c.length,beersPerPage:O})}),Object(w.jsx)(I.a,{exact:!0,path:"/tienda/:id",children:Object(w.jsx)(ne,{beers:c})}),Object(w.jsx)(I.a,{exact:!0,path:"/login",component:te}),Object(w.jsx)(I.a,{exact:!0,path:"/cart",children:Object(w.jsx)(ie,{totalPrice:f,totalItems:T})}),Object(w.jsx)(I.a,{exact:!0,path:"/checkout",children:Object(w.jsx)(me,{totalItems:T,totalPrice:f})}),Object(w.jsx)(I.a,{path:"*",component:ue})]}),Object(w.jsx)(xe,{})]})})},fe=[v.a],ve=Object(i.d)(f,{},Object(i.c)(Object(i.a)(v.a),Object(i.c)(i.a.apply(void 0,fe))));n.a.render(Object(w.jsx)(r.a,{store:ve,children:Object(w.jsx)(pe,{})}),document.getElementById("root"))},50:function(e,t){},71:function(e,t,c){},72:function(e,t,c){}},[[207,1,2]]]);
//# sourceMappingURL=main.8545d164.chunk.js.map