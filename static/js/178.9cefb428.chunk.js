"use strict";(self.webpackChunkcinaf_app_store=self.webpackChunkcinaf_app_store||[]).push([[178],{8807:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(885),r=a(2791),i=a(7821),o=a.n(i),s=a(184);function l(e){var t=e.title,a=e.children,i=(0,r.useState)(""),l=(0,n.Z)(i,2),c=l[0],d=l[1];return(0,r.useEffect)((function(){return d(window.document.title),window.document.title=t,function(){window.document.title=c,window.scrollTo({top:0,left:0,behavior:"smooth"})}}),[t]),(0,s.jsxs)("div",{className:"page",children:[a,(0,s.jsx)(o(),{smooth:!0})]})}},8178:function(e,t,a){a.r(t),a.d(t,{default:function(){return _}});var n=a(8807),r=a(4395),i=a(885),o=a(2791),s=a(5017),l=a(984),c=a(4942),d=a(3366),u=a(7462),v=a(8182),m=a(4419),h=a(2065),p=a(277),f=a(5513),x=a(8826),Z=a(753),b=a(3026),g=a(7933),j=a(7164),y=a(5878);var S=(0,y.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]),N=a(9282),C=a(1217);function k(e){return(0,C.Z)("MuiMenuItem",e)}var w=(0,y.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),M=a(184),V=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],z=(0,p.ZP)(Z.Z,{shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((function(e){var t,a=e.theme,n=e.ownerState;return(0,u.Z)({},a.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!n.disableGutters&&{paddingLeft:16,paddingRight:16},n.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,c.Z)(t,"&.".concat(w.selected),(0,c.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,h.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(w.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,h.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,c.Z)(t,"&.".concat(w.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,h.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,h.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),(0,c.Z)(t,"&.".concat(w.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,c.Z)(t,"&.".concat(w.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),(0,c.Z)(t,"& + .".concat(j.Z.root),{marginTop:a.spacing(1),marginBottom:a.spacing(1)}),(0,c.Z)(t,"& + .".concat(j.Z.inset),{marginLeft:52}),(0,c.Z)(t,"& .".concat(N.Z.root),{marginTop:0,marginBottom:0}),(0,c.Z)(t,"& .".concat(N.Z.inset),{paddingLeft:36}),(0,c.Z)(t,"& .".concat(S.root),{minWidth:36}),t),!n.dense&&(0,c.Z)({},a.breakpoints.up("sm"),{minHeight:"auto"}),n.dense&&(0,u.Z)({minHeight:32,paddingTop:4,paddingBottom:4},a.typography.body2,(0,c.Z)({},"& .".concat(S.root," svg"),{fontSize:"1.25rem"})))})),F=o.forwardRef((function(e,t){var a=(0,f.Z)({props:e,name:"MuiMenuItem"}),n=a.autoFocus,r=void 0!==n&&n,i=a.component,s=void 0===i?"li":i,l=a.dense,c=void 0!==l&&l,h=a.divider,p=void 0!==h&&h,Z=a.disableGutters,j=void 0!==Z&&Z,y=a.focusVisibleClassName,S=a.role,N=void 0===S?"menuitem":S,C=a.tabIndex,w=a.className,F=(0,d.Z)(a,V),I=o.useContext(x.Z),P={dense:c||I.dense||!1,disableGutters:j},L=o.useRef(null);(0,b.Z)((function(){r&&L.current&&L.current.focus()}),[r]);var O,D=(0,u.Z)({},a,{dense:P.dense,divider:p,disableGutters:j}),R=function(e){var t=e.disabled,a=e.dense,n=e.divider,r=e.disableGutters,i=e.selected,o=e.classes,s={root:["root",a&&"dense",t&&"disabled",!r&&"gutters",n&&"divider",i&&"selected"]},l=(0,m.Z)(s,k,o);return(0,u.Z)({},o,l)}(a),W=(0,g.Z)(L,t);return a.disabled||(O=void 0!==C?C:-1),(0,M.jsx)(x.Z.Provider,{value:P,children:(0,M.jsx)(z,(0,u.Z)({ref:W,role:N,tabIndex:O,component:s,focusVisibleClassName:(0,v.Z)(R.focusVisible,y),className:(0,v.Z)(R.root,w)},F,{ownerState:D,classes:R}))})})),I=a(1898),P=a(2479),L=a(9365),O=a(1395),D=a(2837),R=a.n(D),W=a(6580),A=a(6015),H=a(8946),T=a(4012),G=a(1087),q=a(4869),B=function(){var e,t=o.useState(0),a=(0,i.Z)(t,2),n=a[0],r=a[1],c=o.useState("Suivant"),d=(0,i.Z)(c,2),u=d[0],v=d[1],m=o.useState(1),h=(0,i.Z)(m,2),p=h[0],f=h[1],x=o.useState(!1),Z=(0,i.Z)(x,2),b=Z[0],g=Z[1],j=o.useState(!1),y=(0,i.Z)(j,2),S=y[0],N=y[1],C=o.useState(!1),k=(0,i.Z)(C,2),w=k[0],V=k[1],z=o.useState(!1),D=(0,i.Z)(z,2),B=D[0],_=D[1],E=[{title:"Informations personnelles",isActive:!1},{title:"Vous'y \xeates presque",isActive:!1},{title:"Importer votre CV",isActive:!1}],U=o.useState((0,M.jsx)(O.Z,{className:"cv-file"})),J=(0,i.Z)(U,2),K=J[0],Q=(J[1],o.useState((0,M.jsx)(l.Z,{className:"cv-file"}))),X=(0,i.Z)(Q,2),Y=X[0],$=X[1],ee=o.useState(""),te=(0,i.Z)(ee,2),ae=te[0],ne=te[1],re=o.useState(""),ie=(0,i.Z)(re,2),oe=ie[0],se=ie[1],le=o.useState("homme"),ce=(0,i.Z)(le,2),de=ce[0],ue=ce[1],ve=o.useState(""),me=(0,i.Z)(ve,2),he=me[0],pe=me[1],fe=o.useState(""),xe=(0,i.Z)(fe,2),Ze=xe[0],be=xe[1],ge=o.useState(""),je=(0,i.Z)(ge,2),ye=je[0],Se=je[1],Ne=o.useState(""),Ce=(0,i.Z)(Ne,2),ke=Ce[0],we=Ce[1],Me=o.useState(""),Ve=(0,i.Z)(Me,2),ze=Ve[0],Fe=Ve[1],Ie=o.useState("10"),Pe=(0,i.Z)(Ie,2),Le=Pe[0],Oe=Pe[1];return(0,M.jsxs)("form",{method:"post",onSubmit:function(e){if(e.preventDefault(),console.log(p),4===p){g(!0),N(!0);var t=new FormData;t.append("file",ae),t.append("sex",de),t.append("phone",he),t.append("cni",Ze),t.append("name",ke),t.append("surname",ze),t.append("age",Le),t.append("email",ye),R().post(q.Z.api_url+"/seeker",t).then((function(e){V(!0),f(1),g(!1)})).catch((function(e){_(!0),f(1),g(!1),console.log(e)}))}},autoComplete:"false",children:[!1===S&&(0,M.jsxs)("div",{className:"card home card-widget",children:[(0,M.jsxs)("div",{className:"card-header",children:[(0,M.jsx)("h1",{className:"white title",children:null===(e=E[n])||void 0===e?void 0:e.title}),(0,M.jsx)("br",{})]}),0===n&&(0,M.jsxs)("div",{className:"card-content flexed-form",children:[(0,M.jsx)(s.Z,{id:"outlined-basic",label:"Nom",variant:"outlined",fullWidth:!0,autoFocus:!0,value:ke,onChange:function(e){var t;return we(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}}),(0,M.jsx)(s.Z,{id:"outlined-basic",label:"Pr\xe9nom",variant:"outlined",fullWidth:!0,value:ze,onChange:function(e){var t;return Fe(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}}),(0,M.jsx)(s.Z,{id:"outlined-basic",label:"Age",variant:"outlined",type:"number",fullWidth:!0,value:Le,onChange:function(e){var t;return Oe(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}})]}),1===n&&(0,M.jsxs)("div",{className:"card-content flexed-form",children:[(0,M.jsx)(s.Z,{id:"outlined-basic",label:"Num\xe9ro de CNI",variant:"outlined",fullWidth:!0,autoFocus:!0,value:Ze,onChange:function(e){var t;return be(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}}),(0,M.jsx)(s.Z,{id:"outlined-basic",label:"Num\xe9ro de t\xe9l\xe9phone",variant:"outlined",fullWidth:!0,value:he,onChange:function(e){var t;return pe(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}}),(0,M.jsx)(s.Z,{id:"outlined-basic",label:"Adresse email",variant:"outlined",fullWidth:!0,value:ye,onChange:function(e){var t;return Se(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}}),(0,M.jsxs)(I.Z,{fullWidth:!0,children:[(0,M.jsx)(L.Z,{id:"demo-simple-select-label",children:"Sexe"}),(0,M.jsxs)(P.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:de,label:"Age",onChange:function(e){ue(e.target.value)},children:[(0,M.jsx)(F,{value:"homme",children:"Homme"}),(0,M.jsx)(F,{value:"femme",children:"Femme"})]})]})]}),2===n&&(0,M.jsxs)("div",{className:"card-content center-form column-form",children:[(0,M.jsx)("label",{htmlFor:"cv",children:(0,M.jsx)("div",{className:"cv-container",children:Y})}),(0,M.jsx)("input",{type:"file",id:"cv",className:"d-none",onChange:function(e){var t,a,n;ne(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.files[0]),se(null===e||void 0===e||null===(a=e.target)||void 0===a||null===(n=a.files[0])||void 0===n?void 0:n.name),$(K)}}),oe&&(0,M.jsx)("div",{className:"subtitle",children:oe},"1")]}),(0,M.jsx)("div",{className:"card-footer",children:(0,M.jsx)("button",{className:"btn btn-primary-light btn-normal mt-10",onClick:function(){f(p+1),E.length-1>n&&r(n+1),E.length-2===n&&v("Envoyer ma demande")},type:"submit",children:u})})]}),b&&(0,M.jsxs)("div",{className:"card home card-widget flex-center",children:[(0,M.jsx)("div",{className:"card-header flex-center",children:(0,M.jsx)("span",{className:"white center",children:"Envoi de votre demande en cour..."})}),(0,M.jsx)("div",{className:"card-content flexed-form",children:(0,M.jsx)(W.Z,{})})]}),w&&(0,M.jsxs)("div",{className:"card home card-widget flex-center",children:[(0,M.jsx)("div",{className:"card-header flex-center",children:(0,M.jsx)("span",{className:"white center",children:"Votre demande \xe0 \xe9t\xe9 prise en compte, nous vous recontacterons d\xe8s que possible !"})}),(0,M.jsxs)("div",{className:"card-content flexed-center",children:[(0,M.jsx)("br",{}),(0,M.jsx)(A.Z,{sx:{display:"flex"},className:"guihon-icon",children:(0,M.jsx)(H.Z,{})}),(0,M.jsx)("br",{}),(0,M.jsx)(A.Z,{sx:{display:"flex"},className:"",children:(0,M.jsx)(G.rU,{to:"/",className:"btn btn-primary-light btn-normal mt-10",children:"Acceuil"})})]})]}),B&&(0,M.jsxs)("div",{className:"card home card-widget flex-center",children:[(0,M.jsx)("div",{className:"card-header flex-center",children:(0,M.jsx)("span",{className:"white center",children:"Une erreur est survenue lors de la soumission de votre demande !"})}),(0,M.jsxs)("div",{className:"card-content flexed-center",children:[(0,M.jsx)("br",{}),(0,M.jsx)(A.Z,{sx:{display:"flex"},className:"guihon-icon-error",children:(0,M.jsx)(T.Z,{})}),(0,M.jsx)("br",{}),(0,M.jsx)(A.Z,{sx:{display:"flex"},className:"",children:(0,M.jsx)(G.rU,{to:"/",className:"btn btn-primary-light btn-normal mt-10",children:"Re\xe9ssayer"})})]})]})]})},_=function(){return(0,M.jsx)(n.Z,{title:"Vous recherchez un emploi, enregistrez vous",children:(0,M.jsx)("div",{className:"seek-components",children:(0,M.jsx)(r.Z,{children:(0,M.jsx)(B,{})})})})}},4395:function(e,t,a){var n=a(184);t.Z=function(e){var t=e.children;return(0,n.jsx)("div",{className:"Frame",children:t})}},8946:function(e,t,a){var n=a(4836);t.Z=void 0;var r=n(a(5649)),i=a(184),o=(0,r.default)((0,i.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline");t.Z=o},984:function(e,t,a){var n=a(4836);t.Z=void 0;var r=n(a(5649)),i=a(184),o=(0,r.default)((0,i.jsx)("path",{d:"M15 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7l-5-5zM6 20V4h8v4h4v12H6zm10-10v5c0 2.21-1.79 4-4 4s-4-1.79-4-4V8.5c0-1.47 1.26-2.64 2.76-2.49 1.3.13 2.24 1.32 2.24 2.63V15h-2V8.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V15c0 1.1.9 2 2 2s2-.9 2-2v-5h2z"}),"FilePresent");t.Z=o},4012:function(e,t,a){var n=a(4836);t.Z=void 0;var r=n(a(5649)),i=a(184),o=(0,r.default)((0,i.jsx)("path",{d:"M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24C5.68 15.15 5 13.66 5 12c0-2.61 1.67-4.83 4-5.65V4.26C5.55 5.15 3 8.27 3 12zm8 5h2v-2h-2v2zM21 4h-6v6l2.24-2.24C18.32 8.85 19 10.34 19 12c0 2.61-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64L21 4zm-10 9h2V7h-2v6z"}),"SyncProblem");t.Z=o},1395:function(e,t,a){var n=a(4836);t.Z=void 0;var r=n(a(5649)),i=a(184),o=(0,r.default)((0,i.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-3.06 16L7.4 14.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L10.94 18zM13 9V3.5L18.5 9H13z"}),"Task");t.Z=o},6580:function(e,t,a){a.d(t,{Z:function(){return F}});var n=a(168),r=a(3366),i=a(7462),o=a(2791),s=a(8182),l=a(4419),c=a(2554),d=a(9853),u=a(5513),v=a(277),m=a(1217);function h(e){return(0,m.Z)("MuiCircularProgress",e)}(0,a(5878).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var p,f,x,Z,b,g,j,y,S=a(184),N=["className","color","disableShrink","size","style","thickness","value","variant"],C=44,k=(0,c.F4)(b||(b=p||(p=(0,n.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),w=(0,c.F4)(g||(g=f||(f=(0,n.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),M=(0,v.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["color".concat((0,d.Z)(a.color))]]}})((function(e){var t=e.ownerState,a=e.theme;return(0,i.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:a.transitions.create("transform")},"inherit"!==t.color&&{color:(a.vars||a).palette[t.color].main})}),(function(e){return"indeterminate"===e.ownerState.variant&&(0,c.iv)(j||(j=x||(x=(0,n.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),k)})),V=(0,v.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(e,t){return t.svg}})({display:"block"}),z=(0,v.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(e,t){var a=e.ownerState;return[t.circle,t["circle".concat((0,d.Z)(a.variant))],a.disableShrink&&t.circleDisableShrink]}})((function(e){var t=e.ownerState,a=e.theme;return(0,i.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:a.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(e){var t=e.ownerState;return"indeterminate"===t.variant&&!t.disableShrink&&(0,c.iv)(y||(y=Z||(Z=(0,n.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),w)})),F=o.forwardRef((function(e,t){var a=(0,u.Z)({props:e,name:"MuiCircularProgress"}),n=a.className,o=a.color,c=void 0===o?"primary":o,v=a.disableShrink,m=void 0!==v&&v,p=a.size,f=void 0===p?40:p,x=a.style,Z=a.thickness,b=void 0===Z?3.6:Z,g=a.value,j=void 0===g?0:g,y=a.variant,k=void 0===y?"indeterminate":y,w=(0,r.Z)(a,N),F=(0,i.Z)({},a,{color:c,disableShrink:m,size:f,thickness:b,value:j,variant:k}),I=function(e){var t=e.classes,a=e.variant,n=e.color,r=e.disableShrink,i={root:["root",a,"color".concat((0,d.Z)(n))],svg:["svg"],circle:["circle","circle".concat((0,d.Z)(a)),r&&"circleDisableShrink"]};return(0,l.Z)(i,h,t)}(F),P={},L={},O={};if("determinate"===k){var D=2*Math.PI*((C-b)/2);P.strokeDasharray=D.toFixed(3),O["aria-valuenow"]=Math.round(j),P.strokeDashoffset="".concat(((100-j)/100*D).toFixed(3),"px"),L.transform="rotate(-90deg)"}return(0,S.jsx)(M,(0,i.Z)({className:(0,s.Z)(I.root,n),style:(0,i.Z)({width:f,height:f},L,x),ownerState:F,ref:t,role:"progressbar"},O,w,{children:(0,S.jsx)(V,{className:I.svg,ownerState:F,viewBox:"".concat(22," ").concat(22," ").concat(C," ").concat(C),children:(0,S.jsx)(z,{className:I.circle,style:P,ownerState:F,cx:C,cy:C,r:(C-b)/2,fill:"none",strokeWidth:b})})}))}))},7164:function(e,t,a){a.d(t,{V:function(){return r}});var n=a(1217);function r(e){return(0,n.Z)("MuiDivider",e)}var i=(0,a(5878).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=i},9282:function(e,t,a){a.d(t,{L:function(){return r}});var n=a(1217);function r(e){return(0,n.Z)("MuiListItemText",e)}var i=(0,a(5878).Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);t.Z=i}}]);
//# sourceMappingURL=178.9cefb428.chunk.js.map