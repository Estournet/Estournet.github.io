(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{177:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),o=n.n(c),l=n(56),i=n.n(l),s=n(49),u=n.n(s),m=n(29),p=n(21),f=n(76),d=n.n(f),h=n(48),E=n.n(h),g=n(28),b=n.n(g)()({typography:{useNextVariants:!0,fontFamily:'"Google Sans", "Roboto"'},palette:{primary:{main:d.a[600]},secondary:{main:E.a[700]},type:"light"}}),v=n(26),y=n.n(v),j=n(64),x=n.n(j),k=n(6),w=n.n(k),O=n(53),N=n(77),C=w()(function(e){return{footer:{padding:"20px 10%"},divider:{margin:e.spacing.unit},link:{color:e.palette.secondary.dark,textDecoration:"none"}}})(function(e){return r.a.createElement("footer",{className:e.classes.footer},r.a.createElement(x.a,{className:e.classes.divider}),r.a.createElement(y.a,{color:"textSecondary",align:"center"},r.a.createElement(O.a,{flip:"horizontal",icon:N.a,fixedWidth:!0})," ","Copyleft 2019 - Cr\xe9\xe9 par Vincent Monard."),r.a.createElement(y.a,{variant:"caption",color:"textSecondary",align:"center"},"Site sous license ",r.a.createElement("a",{href:"https://www.gnu.org/licenses/gpl-3.0.fr.html",rel:"noopener noreferrer",target:"_blank",className:e.classes.link},"GNU GPL v3"),". Voir le projet sur ",r.a.createElement("a",{href:"https://github.com/Estournet/",rel:"noopener noreferrer",target:"_blank",className:e.classes.link},"GitHub"),"."))}),P=n(51),S=n.n(P),D=n(79),G=n(36),V=n(37),z=n(39),B=n(38),F=n(40),H=function(e){return function(t){function n(e){var t;return Object(G.a)(this,n),(t=Object(z.a)(this,Object(B.a)(n).call(this,e))).state={Component:null},t}return Object(F.a)(n,t),Object(V.a)(n,[{key:"componentDidMount",value:function(){var t=Object(D.a)(S.a.mark(function t(){var n,a;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,a=n.default,this.setState({Component:a});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.Component;return e?r.a.createElement(e,this.props):null}}]),n}(r.a.PureComponent)},I=H(function(){return Promise.resolve().then(n.bind(null,81))}),J=H(function(){return Promise.all([n.e(0),n.e(4),n.e(6)]).then(n.bind(null,356))}),M=H(function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,355))}),R=Object(p.e)(function(){return r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/project/:projectName",render:function(e){return r.a.createElement(M,e)}}),r.a.createElement(p.a,{path:"/",render:function(e){return r.a.createElement(J,e)}}),r.a.createElement(p.a,{render:function(e){return r.a.createElement(I,Object.assign({error:"404 Not found"},e))}}))}),T=n(81),W=function(e){function t(e){var n;return Object(G.a)(this,t),(n=Object(z.a)(this,Object(B.a)(t).call(this,e))).state={hasError:!1},n}return Object(F.a)(t,e),Object(V.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0,error:e}),console.error(e,t)}},{key:"render",value:function(){var e=this.state,t=e.hasError,n=e.error;return t?r.a.createElement(T.default,{error:n.toString()}):this.props.children}}]),t}(r.a.PureComponent),_=n(19),L=n.n(_),U=w()(function(e){return{root:{display:"flex",flexDirection:"row-reverse",justifyContent:"center"},page:{maxWidth:"1200px"},content:{backgroundColor:e.palette.background.default,padding:3*e.spacing.unit,minHeight:"100vh"}}},{withTheme:!0})(function(e){return r.a.createElement("div",{className:e.classes.root},r.a.createElement(L.a,{container:!0,className:e.classes.page},r.a.createElement(L.a,{item:!0,xs:12},r.a.createElement("main",{className:e.classes.content},r.a.createElement(W,null,r.a.createElement(R,null)))),r.a.createElement(L.a,{item:!0,xs:12},r.a.createElement(C,null))))}),q=function(){return r.a.createElement(m.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null),r.a.createElement(u.a,{theme:b},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",render:function(){return r.a.createElement(U,null)}})))))};o.a.render(r.a.createElement(q,null),document.getElementById("root"))},81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),o=n(19),l=n.n(o),i=n(26),s=n.n(i),u=n(73),m=n.n(u),p=n(6),f=n.n(p),d=function(e){return r.a.createElement(l.a,{container:!0,spacing:40,justify:"center",alignContent:"center",alignItems:"center",direction:"column"},r.a.createElement(l.a,{item:!0,xs:12},r.a.createElement(s.a,{variant:"h2",align:"center"},e.error)),r.a.createElement(l.a,{item:!0,xs:12},r.a.createElement(m.a,{variant:"contained",size:"large",color:"primary",component:c.b,to:"/",className:e.classes.button},"Retourner \xe0 l'accueil")))};d.defaultProps={error:"Erreur inattendue"},t.default=f()(function(e){return{button:{marginTop:4*e.spacing.unit,marginBottom:4*e.spacing.unit}}})(d)},89:function(e,t,n){e.exports=n(177)}},[[89,2,3]]]);
//# sourceMappingURL=main.d5ec1fad.chunk.js.map