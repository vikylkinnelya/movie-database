(this["webpackJsonpmovie-db"]=this["webpackJsonpmovie-db"]||[]).push([[6],{183:function(t,e,n){},190:function(t,e,n){"use strict";n.r(e);var a=n(3),c=n(105),i=(n(183),n(0)),o=n.n(i),s=n(81),l=function(t,e,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",o=arguments.length>6?arguments[6]:void 0,s=arguments.length>7?arguments[7]:void 0,l=arguments.length>8?arguments[8]:void 0,r=arguments.length>9?arguments[9]:void 0,u="a6a004a3";fetch("https://www.omdbapi.com/?".concat(t,"=").concat(e,"&page=").concat(a,"&type=").concat(2===c.length?c="":c,"&y=").concat(i,"&apikey=").concat(u)).then((function(t){return t.json()})).then((function(e){if("False"===e.Response)throw o(e.Error),console.log(e.Error),new Error(e.statusText);"s"===t&&(n(e.Search),s(e.totalResults)),"i"===t&&e&&n(e),o(null),l(!1),r(!1)})).catch((function(t){var e=t.message;l(!1),o(e)}))},r=n(69),u=o.a.lazy((function(){return Promise.all([n.e(4),n.e(5)]).then(n.bind(null,191))})),d=function(t){var e=t.state,n=Object(i.useContext)(s.a),o=n.favList,d=n.watchList,h=n.q,b=n.setMovie,f=n.setLoading,v=n.setError,g=n.setTotalResults,m=n.setActivateModal,p=n.setDetailRequest,j=n.setShowDetail,w=n.genreList,D=n.yearValue,I=n.currPage,O=Object(i.useCallback)((function(){l("s",h,b,I,w,D,v,g,f,p)}),[h,I,w,D]);Object(i.useEffect)((function(){f(!0),v(null),b(null),g(null),O()}),[O]);var k=[];return Object(a.jsx)(a.Fragment,{children:null!==e&&e.length>0&&e.slice(0,10).map((function(t){if(!k.includes(t.imdbID))return k.push(t.imdbID),Object(a.jsx)(i.Suspense,{fallback:Object(a.jsx)(r.a,{}),children:Object(a.jsx)(u,Object(c.a)({isFav:o.includes(t)||localStorage.getItem("fav_"+t.imdbID),isWatch:d.includes(t)||localStorage.getItem("watch_"+t.imdbID),ClickHandler:function(){return e=t,m(!0),p(!0),void l("i",e.imdbID,j,I,w,D,v,g,f,p);var e},result:t},t),t.imdbID)})}))})};e.default=d}}]);
//# sourceMappingURL=6.e17d8e9a.chunk.js.map