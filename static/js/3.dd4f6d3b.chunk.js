(this.webpackJsonpvincentportfolio=this.webpackJsonpvincentportfolio||[]).push([[3],{203:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var i=a(181),r=a(1),n=a(3),o=a(0),l=a.n(o),s=(a(34),a(2),a(4)),c=a(5),m=o.forwardRef((function(e,t){var a=e.cellHeight,i=void 0===a?180:a,l=e.children,c=e.classes,m=e.className,u=e.cols,p=void 0===u?2:u,d=e.component,f=void 0===d?"ul":d,h=e.spacing,g=void 0===h?4:h,v=e.style,b=Object(n.a)(e,["cellHeight","children","classes","className","cols","component","spacing","style"]);return o.createElement(f,Object(r.a)({className:Object(s.a)(c.root,m),ref:t,style:Object(r.a)({margin:-g/2},v)},b),o.Children.map(l,(function(e){if(!o.isValidElement(e))return null;var t=e.props.cols||1,a=e.props.rows||1;return o.cloneElement(e,{style:Object(r.a)({width:"".concat(100/p*t,"%"),height:"auto"===i?"auto":i*a+g,padding:g/2},e.props.style)})})))})),u=Object(c.a)({root:{display:"flex",flexWrap:"wrap",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"}},{name:"MuiGridList"})(m),p=a(28);var d=a(76),f=function(e,t){var a,i,r,n;e&&e.complete&&(e.width/e.height>e.parentElement.offsetWidth/e.parentElement.offsetHeight?((a=e.classList).remove.apply(a,Object(p.a)(t.imgFullWidth.split(" "))),(i=e.classList).add.apply(i,Object(p.a)(t.imgFullHeight.split(" ")))):((r=e.classList).remove.apply(r,Object(p.a)(t.imgFullHeight.split(" "))),(n=e.classList).add.apply(n,Object(p.a)(t.imgFullWidth.split(" ")))))};var h=o.forwardRef((function(e,t){var a=e.children,i=e.classes,l=e.className,c=(e.cols,e.component),m=void 0===c?"li":c,u=(e.rows,Object(n.a)(e,["children","classes","className","cols","component","rows"])),p=o.useRef(null);return o.useEffect((function(){!function(e,t){e&&(e.complete?f(e,t):e.addEventListener("load",(function(){f(e,t)})))}(p.current,i)})),o.useEffect((function(){var e=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function i(){for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];var o=this,l=function(){e.apply(o,r)};clearTimeout(t),t=setTimeout(l,a)}return i.clear=function(){clearTimeout(t)},i}((function(){f(p.current,i)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[i]),o.createElement(m,Object(r.a)({className:Object(s.a)(i.root,l),ref:t},u),o.createElement("div",{className:i.tile},o.Children.map(a,(function(e){return o.isValidElement(e)?"img"===e.type||Object(d.a)(e,["Image"])?o.cloneElement(e,{ref:p}):e:null}))))})),g=Object(c.a)({root:{boxSizing:"border-box",flexShrink:0},tile:{position:"relative",display:"block",height:"100%",overflow:"hidden"},imgFullHeight:{height:"100%",transform:"translateX(-50%)",position:"relative",left:"50%"},imgFullWidth:{width:"100%",position:"relative",transform:"translateY(-50%)",top:"50%"}},{name:"MuiGridListTile"})(h),v=o.forwardRef((function(e,t){var a=e.actionIcon,i=e.actionPosition,l=void 0===i?"right":i,c=e.classes,m=e.className,u=e.subtitle,p=e.title,d=e.titlePosition,f=void 0===d?"bottom":d,h=Object(n.a)(e,["actionIcon","actionPosition","classes","className","subtitle","title","titlePosition"]),g=a&&l;return o.createElement("div",Object(r.a)({className:Object(s.a)(c.root,m,"top"===f?c.titlePositionTop:c.titlePositionBottom,u&&c.rootSubtitle),ref:t},h),o.createElement("div",{className:Object(s.a)(c.titleWrap,{left:c.titleWrapActionPosLeft,right:c.titleWrapActionPosRight}[g])},o.createElement("div",{className:c.title},p),u?o.createElement("div",{className:c.subtitle},u):null),a?o.createElement("div",{className:Object(s.a)(c.actionIcon,"left"===g&&c.actionIconActionPosLeft)},a):null)})),b=Object(c.a)((function(e){return{root:{position:"absolute",left:0,right:0,height:48,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:e.typography.fontFamily},titlePositionBottom:{bottom:0},titlePositionTop:{top:0},rootSubtitle:{height:68},titleWrap:{flexGrow:1,marginLeft:16,marginRight:16,color:e.palette.common.white,overflow:"hidden"},titleWrapActionPosLeft:{marginLeft:0},titleWrapActionPosRight:{marginRight:0},title:{fontSize:e.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},subtitle:{fontSize:e.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},actionIcon:{},actionIconActionPosLeft:{order:-1}}}),{name:"MuiGridListTileBar"})(v),E=a(13);const w=({files:e,cellHeight:t,cols:a})=>{const r=y(),n=r.tile,o=r.imgFullWidth,s=r.gridList,c=r.titleBar;return l.a.createElement(u,{cols:a,cellHeight:t,spacing:16,className:s},e.map(({file:e,description:t},a)=>l.a.createElement(g,{key:a,component:i.a,href:e,target:"_blank",rel:"noopener noreferrer",classes:{imgFullWidth:o,tile:n}},l.a.createElement("img",{src:e,alt:t}),t&&l.a.createElement(b,{title:t,className:c}))))},y=a.n(E)()(e=>({gridList:{flexWrap:"nowrap",borderRadius:2*e.shape.borderRadius,transform:"translateZ(0)"},titleBar:{color:e.palette.grey[50],backgroundColor:e.palette.grey[600]},tile:{borderRadius:2*e.shape.borderRadius},imgFullWidth:{borderRadius:2*e.shape.borderRadius,transform:"none",position:"unset"}}))},204:function(e,t,a){"use strict";var i=a(17);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){0;return(0,r.useTheme)()||n.default};var r=a(45),n=(i(a(0)),i(a(120)))},210:function(e,t,a){"use strict";a.r(t);var i=a(20),r=a(15),n=a(194),o=a(74),l=a(159),s=a(29),c=a(160),m=a(181),u=a(13),p=a.n(u),d=a(204),f=a.n(d),h=a(40),g=a(77),v=a(203),b=a(30),E=a(0),w=a.n(E);const y=[{file:h.n},{file:h.o},{file:h.p}],j=p()(e=>({paper:{padding:e.spacing(2),[e.breakpoints.down("sm")]:{padding:e.spacing()}},logo:{maxWidth:"128px",[e.breakpoints.down("sm")]:{maxWidth:"64px"}}}));t.default=()=>{const e=j(),t=f()(),a=Object(n.a)(t.breakpoints.down("sm")),u=a?1.2:2.5,p=a?200:500;return w.a.createElement(o.a,{container:!0,spacing:2},w.a.createElement(o.a,{item:!0,xs:12},w.a.createElement(l.a,{className:e.paper},w.a.createElement(o.a,{container:!0,justify:"flex-start",alignItems:"center",spacing:2},w.a.createElement(o.a,{item:!0},w.a.createElement("img",{src:h.f,alt:"Logo du projet",className:e.logo})),w.a.createElement(o.a,{item:!0},w.a.createElement(s.a,{variant:"h3"},"Lucy"),w.a.createElement(g.a,{chips:[b.d,b.c]}))))),w.a.createElement(o.a,{item:!0,xs:12},w.a.createElement(s.a,{variant:"h4",gutterBottom:!0},"Description"),w.a.createElement(s.a,{variant:"body1",paragraph:!0},w.a.createElement("strong",null,"Lucy")," est un site qui permet de ",w.a.createElement("b",null,"visualiser des statistiques sur les conversations Facebook Messenger"),". Il permet de voir combien de messages sont envoy\xe9s au cours du temps, qui poste le plus de messages etc."),w.a.createElement(s.a,{variant:"body1",paragraph:!0},"C'est un site ",w.a.createElement("b",null,"front-end uniquement"),", c'est \xe0 dire que tout est fait sur la machine du client. C'est pour cela que, sur des grosses conversations, cela prend un peu de temps pour tout calculer. Le site a \xe9t\xe9 fait en ",w.a.createElement("b",null,"React")," avec un ",w.a.createElement(m.a,{target:"_blank",rel:"noopener noreferrer",href:"https://material-ui.com"},"Material-UI\xa0",w.a.createElement(r.a,{icon:i.b,fixedWidth:!0,size:"xs"}))," pour l'interface globale et ",w.a.createElement(m.a,{target:"_blank",rel:"noopener noreferrer",href:"https://www.chartjs.org/"},"charts.js\xa0",w.a.createElement(r.a,{icon:i.b,fixedWidth:!0,size:"xs"}))," pour les graphiques. Il permet donc de visualiser des statistiques mais aussi de chiffrer et d\xe9chiffrer des conversations. C'est pourquoi certaines conversations vous seront inaccessibles."),w.a.createElement(s.a,{variant:"body1",paragraph:!0},"Je vous invite, bien \xe9videmment, \xe0 tester le site avec la conversation de test ",w.a.createElement("i",null,"'Pok\xe9mon Version Rouge'")," ou bien avec votre propre conversation Facebook ! (Promis, je ne garde aucune donn\xe9e)")),w.a.createElement(o.a,{item:!0,xs:12},w.a.createElement(c.a,{variant:"contained",fullWidth:!0,color:"primary",href:"https://estournet.github.io/lucy/",target:"_blank",rel:"noopener noreferrer"},"Voir le projet\xa0",w.a.createElement(r.a,{icon:i.b,fixedWidth:!0}))),w.a.createElement(o.a,{item:!0,xs:12},w.a.createElement(s.a,{variant:"h4",gutterBottom:!0},"Galerie"),w.a.createElement(v.a,{files:y,cols:u,cellHeight:p})))}}}]);
//# sourceMappingURL=3.dd4f6d3b.chunk.js.map