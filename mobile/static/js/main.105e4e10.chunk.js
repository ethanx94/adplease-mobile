(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),c=n(45),l=(n(80),n(81),n(82),n(83),n(2)),s=(n(86),n(87),n(88),n(89),n(90),n(46)),u=n.n(s),d=n(62),m=n(8),f=r.a.createContext();var p=function(e){var t,n,o=e.children,i=Object(a.useState)(!0),c=Object(m.a)(i,2),l=c[0],s=c[1];return t=Object(d.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:s(!1);case 1:case"end":return e.stop()}},e)})),n=[],Object(a.useEffect)(function(){t()},n),r.a.createElement(f.Provider,{value:{loading:l}},o)},g=function(e){var t=e.back,n=e.title,a=e.add,o=e.save,i=e.rightCallback;return r.a.createElement(l.Toolbar,null,r.a.createElement("div",{className:"left ".concat(t?"":"hidden")},r.a.createElement(l.BackButton,null,"Back")),r.a.createElement("div",{className:"center"},n),r.a.createElement("div",{className:"right ".concat(a||o?"":"hidden")},r.a.createElement(l.ToolbarButton,{onClick:i},a&&r.a.createElement(l.Icon,{size:{default:32,material:40},icon:{default:"ion-compose"}}),o&&"Save")))},v=function(e){var t=e.children,n=e.headerOptions;return r.a.createElement(l.Page,{renderToolbar:function(){return r.a.createElement(g,n)}},t)},h=(n(92),function(e){var t=e.children,n=e.background;return r.a.createElement("div",{className:"List"},r.a.Children.map(t,function(e){return e.props.background?e:r.a.cloneElement(e,{background:n})}))}),b=n(63),E=n(64),w=n(70),k=n(65),T=n(71),y=(n(93),function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(w.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(o)))).listElement=r.a.createRef(null),n.wrapper=r.a.createRef(null),n.background=r.a.createRef(null),n.dragStartX=0,n.left=0,n.dragged=!1,n.fpsInterval=1e3/60,n.onDragStartMouse=function(e){n.onDragStart(e.clientX),window.addEventListener("mousemove",n.onMouseMove)},n.onDragStartTouch=function(e){var t=e.targetTouches[0];n.onDragStart(t.clientX),window.addEventListener("touchmove",n.onTouchMove)},n.onDragStart=function(e){n.dragged=!0,n.dragStartX=e,n.listElement.current.className="ListItem",n.startTime=Date.now(),requestAnimationFrame(n.updatePosition)},n.onDragEndMouse=function(e){window.removeEventListener("mousemove",n.onMouseMove),n.onDragEnd()},n.onDragEndTouch=function(e){window.removeEventListener("touchmove",n.onTouchMove),n.onDragEnd()},n.onDragEnd=function(){if(n.dragged){n.dragged=!1;var e=n.props.threshold||.3;n.left<n.listElement.current.offsetWidth*e*-1?(n.left=2*-n.listElement.current.offsetWidth,n.wrapper.current.style.maxHeight=0,n.onSwiped()):n.left=0,n.listElement.current.className="BouncingListItem",n.listElement.current.style.transform="translateX(".concat(n.left,"px)")}},n.onMouseMove=function(e){var t=e.clientX-n.dragStartX;t<0&&(n.left=t)},n.onTouchMove=function(e){var t=e.targetTouches[0].clientX-n.dragStartX;t<0&&(n.left=t)},n.updatePosition=function(){n.dragged&&requestAnimationFrame(n.updatePosition);var e=Date.now()-n.startTime;if(n.dragged&&e>n.fpsInterval){n.listElement.current.style.transform="translateX(".concat(n.left,"px)");var t=(Math.abs(n.left)/100).toFixed(2);t<1&&t.toString()!==n.background.current.style.opacity&&(n.background.current.style.opacity=t.toString()),t>=1&&(n.background.current.style.opacity="1"),n.startTime=Date.now()}},n.onClicked=function(){n.props.onSwipe&&n.props.onSwipe(),n.props.onClick&&n.props.onClick()},n.onSwiped=function(){n.props.onSwipe&&n.props.onSwipe()},n}return Object(T.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("mouseup",this.onDragEndMouse),window.addEventListener("touchend",this.onDragEndTouch)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mouseup",this.onDragEndMouse),window.removeEventListener("touchend",this.onDragEndTouch)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Wrapper",ref:this.wrapper},r.a.createElement("div",{ref:this.background,className:"Background"},this.props.background?this.props.background:r.a.createElement("span",null,"Delete")),r.a.createElement("div",{onClick:this.onClicked,ref:this.listElement,onMouseDown:this.onDragStartMouse,onTouchStart:this.onDragStartTouch,className:"ListItem"},this.props.children)))}}]),t}(r.a.Component)),D=n(13),O=n(21),S=n(72),j=n(69),M=n(66),C=n.n(M),N=function(e){var t=e.title,n=e.defaultText,o=e.defaultDate,i=e.setTimeData,c=e.handleDismiss,l=e.timeProp,s=e.handleValueChange,u=Object(a.useState)(!1),d=Object(m.a)(u,2),f=d[0],p=d[1],g=r.a.createElement(j.a,{rootNativeProps:{"data-xx":"yy"},defaultDate:o||new Date,onValueChange:function(e){return s(l,e)},mode:"time",use12Hours:!0});return r.a.createElement("div",null,r.a.createElement(C.a,{onVisibleChange:function(){p(!f)},picker:g,onOk:function(e){return i(l,e)},transitionName:"rmc-picker-popup-slide-fade",maskTransitionName:"rmc-picker-popup-fade",title:t||"Time picker",onDismiss:function(){return c(l)}},r.a.createElement("input",{type:"text",value:n,readOnly:!0})))},L=function(e){e.navigator;var t=Object(S.a)(e,["navigator"]),n=Object(a.useState)({startTime:null,endTime:null}),o=Object(m.a)(n,2),i=o[0],c=o[1],l=Object(a.useState)({startTime:null,endTime:null}),s=Object(m.a)(l,2),u=s[0],d=s[1],f=Object(a.useState)({startTime:null,endTime:null}),p=Object(m.a)(f,2),g=p[0],h=p[1],b=function(e){c(Object(O.a)({},i,Object(D.a)({},e,null))),h(Object(O.a)({},g,Object(D.a)({},e,null)))},E=function(e,t){c(Object(O.a)({},i,Object(D.a)({},e,u[e]))),h(Object(O.a)({},g,Object(D.a)({},e,t)))},w=function(e,t){var n,a,r=Object(m.a)(t,1)[0],o=Object(m.a)(t,3),i=o[1],c=o[2];"0"===r&&(r="12"),n=e,a="".concat(r.padStart(2,0),":").concat(i.padStart(2,0)," ").concat(Number(c)?"PM":"AM"),d(Object(O.a)({},u,Object(D.a)({},n,a)))};return r.a.createElement(v,{headerOptions:{title:"TimeCard",back:!0,save:!0}},JSON.stringify(t.data),r.a.createElement(N,{title:"Choose Start Time",defaultText:i.startTime||"Start Time...",defaultDate:g.startTime,setTimeData:E,handleDismiss:b,timeProp:"startTime",handleValueChange:w}),r.a.createElement(N,{title:"Choose End Time",defaultText:i.endTime||"End Time...",defaultDate:g.endTime||g.startTime,setTimeData:E,handleDismiss:b,timeProp:"endTime",handleValueChange:w}))},P=r.a.createElement(l.Icon,{size:{default:32,material:40},icon:{default:"ion-ios-trash-outline"}}),x=function(e){var t=e.navigator,n=Object(a.useState)([]),o=Object(m.a)(n,2),i=o[0],c=o[1],s=Object(a.useState)([]),u=Object(m.a)(s,2),d=u[0],f=u[1];return Object(a.useEffect)(function(){c(["8:20AM - 8:30AM","8:30AM - 8:45AM","8:45AM - 9:00AM","9:00AM - 12:00PM","1:00PM - 5:00PM"]),f(!1)}),r.a.createElement(v,{headerOptions:{title:"Time Entries for {dayName}",add:!0,back:!0,rightCallback:function(){return t.pushPage({component:L,props:{back:!0}})}}},d?"Now Loading, please wait":r.a.createElement(h,null,i.map(function(e,n){return r.a.createElement(y,{background:P,key:n,onClick:function(){return t.pushPage({component:L,props:{back:!0,data:{startDate:new Date}}})}},r.a.createElement(l.Button,{modifier:"quiet",style:{color:"black"}},r.a.createElement("div",{className:"ItemContent"},e)))})))},A=function(){for(var e=new Date,t=e.getDay(),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=1;a<=7;a++){var r=e.getDate()-t+a,o=new Date(e.setDate(r));t===a-1&&(n[a-1]="TODAY ".concat(n[a-1])),n[a-1]+=" (".concat(o.getMonth()+1,"/").concat(o.getDay(),")")}return n},I=function(e,t,n,a,o){return r.a.createElement(e,{active:n===t,key:t,tabbar:a,navigator:o})},X=[{component:function(e){var t=e.navigator,n=A();return r.a.createElement(v,{headerOptions:{title:"Time Card"}},r.a.createElement(l.List,{dataSource:n,renderRow:function(e,n){return r.a.createElement(l.ListItem,{key:n,tappable:!0,onClick:function(){return t.pushPage({component:x,props:{back:!0,data:{startDate:new Date}}})}},r.a.createElement("div",{style:{paddingTop:20,paddingBottom:20},className:"center"},e))}}))},title:"Time Card",icon:"md-info"},{component:function(){var e=[{key:"onDataClear",callback:function(){return t()},displayItems:["Clear Data"],type:"alert"}],t=function(){localStorage.clear(),window.location.reload()};return r.a.createElement(v,{headerOptions:{title:"Settings"}},r.a.createElement(l.List,{dataSource:e,renderRow:function(e){return r.a.createElement(l.ListItem,{key:e.key,tappable:!0,onClick:e.callback},r.a.createElement("div",{className:"center"},e.displayItems))}}))},title:"Settings",icon:"md-settings"}],B=function(e){var t=e.navigator;return r.a.createElement(l.Page,null,r.a.createElement(l.Tabbar,{initialIndex:0,renderTabs:function(e,n){return X.map(function(a,o){return{content:I(a.component,o,e,n,t),tab:r.a.createElement(l.Tab,{key:o,label:a.title,icon:a.icon})}})}}))},W=function(){return r.a.createElement(p,null,r.a.createElement(l.Navigator,{initialRoute:{component:B,props:{key:"main"}},renderPage:function(e,t){var n=e.props||{};return n.navigator=t,r.a.createElement(e.component,n)}}))},R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}!function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat(".","/service-worker.js");R?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):F(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):F(e)})}}(),i.a.render(r.a.createElement(W,null),document.getElementById("root")),c.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape",""))},73:function(e,t,n){e.exports=n(135)},83:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){}},[[73,1,2]]]);
//# sourceMappingURL=main.105e4e10.chunk.js.map