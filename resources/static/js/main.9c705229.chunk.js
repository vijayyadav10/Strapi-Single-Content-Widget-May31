(this["webpackJsonpentando-mf-template"]=this["webpackJsonpentando-mf-template"]||[]).push([[0],{76:function(e,t){},77:function(e,t){},78:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var a=n(26),r=n(27),c=n(28),o=n(30),s=n(31),i=n(29),u=n.n(i),l=n(5),d=n(0),p=n.n(d),m=n(2),f=n(13),b=n(14),h=n(4),v=n.n(h),j="".concat("http://localhost:1337"),g=("".concat("/entando-template-api/api","/template/searchby/"),"EntKcToken"),I={Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU0MDczMTY5LCJleHAiOjE2NTY2NjUxNjl9.5RokPt050BdQblyjCsfr3hmvfle3ScQbzt_F7l0a9ME")},y=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat("/entando-template-api/api","/template/"),N({}));case 2:return n=e.sent,a=n.data,r=a.filter((function(e){return t.indexOf(e.id+"")>-1})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(p.a.mark((function e(t,n){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t||n.length||console.error(t),a=n.map((function(e){return"".concat(j,"/content-manager/collection-types/api::").concat(t,".").concat(t,"/").concat(e)})),e.next=4,v.a.all(a.map((function(e){return v.a.get(e,N({},g))})));case 4:return r=e.sent,e.abrupt("return",r.map((function(e){return e.data})));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(m.a)(p.a.mark((function e(t,n,a){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("".concat(j,"/content-manager/collection-types/api::").concat(t,".").concat(t,"?page=1&pageSize=100&sort=createdAt:DESC&filters[").concat(n,"][$containsi]=").concat(a),N({},g));case 2:r=e.sent,console.log("fullListData >===>",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),x=function(e){return console.log("ET-Widget",""),e===g?{headers:I}:{}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Bearer",n=x(t);return Object(b.a)(Object(b.a)({},e),n)},A=(n(78),n(3)),T=n(55),w="http://localhost:1337";var D=function(e){var t=e.contentName,n=e.contentIdsAndTemplateIds,a=e.saveQueryDetails,r=e.colLabelName;console.log("APP.JS saveQueryDetails",a,"fieldSearchBy()()()()",r),t=t||"banner",n=n||"%5B%7B%22templateId%22:%2250%22,%22contentId%22:5%7D,%7B%22templateId%22:%2248%22,%22contentId%22:3%7D,%7B%22templateId%22:%2248%22,%22contentId%22:2%7D%5D";var c=Object(l.useState)(null),o=Object(f.a)(c,2),s=o[0],i=o[1],u=Object(l.useState)(decodeURI(n)),d=Object(f.a)(u,2),b=d[0];function h(e,t,n){if(e&&t&&Object.keys(n).length){var a=n.map((function(n){var a=t.filter((function(e){return e.id===n.contentId})),r=e.filter((function(e){return+e.id===+n.templateId}));return r.length&&a[0]&&Object.keys(a[0]).length?(Object.keys(a[0]).map((function(e,t){a[0][e]&&Array.isArray(a[0][e])?a[0][e]&&a[0][e][0]&&a[0][e][0].ext&&a[0][e].map((function(e){return e.url=w+e.url})):a[0][e]&&"object"===typeof a[0][e]&&(a[0][e]&&a[0][e].ext&&"object"===typeof a[0][e]&&(a[0][e].url=w+a[0][e].url),console.log("filterContent[0][key]",a[0][e]))})),T.render(r[0].contentShape,{content:a[0]})):""}));i(a)}}return d[1],Object(l.useEffect)(Object(m.a)(p.a.mark((function e(){var n,c,o,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=b.length&&JSON.parse(b),!(t&&a&&r)){e.next=8;break}return console.log("This is Save As Method",t,a,r),c=JSON.parse(decodeURI("%7B%22templateId%22:%2249%22,%22searchTerm%22:%22Title%22%7D")),console.log("ZZZZ",c),e.next=7,k(t,r,c.searchTerm);case 7:e.sent;case 8:return e.next=10,y(n.map((function(e){return e.templateId})));case 10:return o=e.sent,e.next=13,O(t,n.map((function(e){return e.contentId})));case 13:s=e.sent,h(o,s,n);case 15:case"end":return e.stop()}}),e)}))),[]),Object(A.jsx)(A.Fragment,{children:s?Object(A.jsx)("div",{dangerouslySetInnerHTML:{__html:s}}):Object(A.jsx)("h1",{children:"Loading..."})})},S={contentName:"contentName",contentIdsAndTemplateIds:"contentIdsAndTemplateIds",saveQueryDetails:"saveQueryDetails",colLabelName:"colLabelName"},C=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"attributeChangedCallback",value:function(e,t,n){if(!Object.values(S).includes(e))throw new Error("Untracked changed attribute: ".concat(e));this.mountPoint&&n!==t&&this.render()}},{key:"connectedCallback",value:function(){this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),this.render()}},{key:"render",value:function(){var e=this.getAttribute(S.contentName),t=this.getAttribute(S.contentIdsAndTemplateIds),n=this.getAttribute(S.saveQueryDetails),a=this.getAttribute(S.colLabelName);console.log("contentName ==>",e,"contentIdsAndTemplateIds ==>",t,"saveQueryDetails ==>",n,"colLabelName<<<<<>>>>>",a),u.a.render(Object(A.jsx)(D,{contentName:e,contentIdsAndTemplateIds:t,saveQueryDetails:n,colLabelName:a}),this.mountPoint)}}],[{key:"observedAttributes",get:function(){return Object.values(S)}}]),n}(Object(s.a)(HTMLElement));customElements.get("my-list-widget")||customElements.define("my-list-widget",C)}},[[80,1,2]]]);
//# sourceMappingURL=main.9c705229.chunk.js.map