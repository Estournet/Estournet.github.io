(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{189:function(e,a,t){e.exports=t.p+"static/media/author_picture.a3755efb.png"},190:function(e,a,t){e.exports=t.p+"static/media/screenshot_ecarlate_1.870033c1.png"},191:function(e,a,t){e.exports=t.p+"static/media/screenshot_ecarlate_2.f87b430d.png"},192:function(e,a,t){e.exports=t.p+"static/media/screenshot_ecarlate_3.cab30d62.png"},193:function(e,a,t){e.exports=t.p+"static/media/screenshot_ecarlate_4.84d2574c.png"},194:function(e,a,t){e.exports=t.p+"static/media/screenshot_ecarlate_5.f62e73c0.png"},195:function(e,a,t){e.exports=t.p+"static/media/screenshot_ecarlate_6.3deb4a30.png"},196:function(e,a,t){e.exports=t.p+"static/media/screenshot_lucy_1.421ffd52.png"},197:function(e,a,t){e.exports=t.p+"static/media/screenshot_lucy_2.1f5db1e6.png"},198:function(e,a,t){e.exports=t.p+"static/media/screenshot_peche_1.567ef457.png"},199:function(e,a,t){e.exports=t.p+"static/media/screenshot_peche_2.7861eb09.png"},200:function(e,a,t){e.exports=t.p+"static/media/screenshot_peche_3.27085dbc.png"},201:function(e,a,t){e.exports=t.p+"static/media/screenshot_peche_4.2702b712.png"},202:function(e,a,t){"use strict";var n=t(0),s=t.n(n),r=t(6),i=t.n(r),c=t(185),o=t.n(c),l=t(53),u=t(184),p={react:{icon:u.l,name:"React"},android:{icon:u.a,name:"Android"},java:{icon:u.g,name:"Java"},node:{icon:u.j,name:"Node.js"}};a.a=i()(function(e){return{root:{display:"flex",justifyContent:"left",flexWrap:"wrap",paddingTop:e.spacing.unit,paddingBottom:e.spacing.unit},chip:{marginRight:e.spacing.unit/2}}})(function(e){return s.a.createElement("div",{className:e.classes.root},e.chips.map(function(a){return s.a.createElement(o.a,{key:a,icon:s.a.createElement(l.a,{icon:p[a].icon,size:"lg",fixedWidth:!0}),color:"secondary",variant:"outlined",label:p[a].name,className:e.classes.chip})}))})},204:function(e,a,t){var n={"./author_picture.png":189,"./ecarlate_banner.png":205,"./ecarlate_logo.png":206,"./lucy_banner.png":207,"./lucy_logo.png":208,"./peche_banner.png":209,"./peche_logo.png":210,"./screenshots/screenshot_ecarlate_1.png":190,"./screenshots/screenshot_ecarlate_2.png":191,"./screenshots/screenshot_ecarlate_3.png":192,"./screenshots/screenshot_ecarlate_4.png":193,"./screenshots/screenshot_ecarlate_5.png":194,"./screenshots/screenshot_ecarlate_6.png":195,"./screenshots/screenshot_lucy_1.png":196,"./screenshots/screenshot_lucy_2.png":197,"./screenshots/screenshot_peche_1.png":198,"./screenshots/screenshot_peche_2.png":199,"./screenshots/screenshot_peche_3.png":200,"./screenshots/screenshot_peche_4.png":201};function s(e){var a=r(e);return t(a)}function r(e){var a=n[e];if(!(a+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id=204},205:function(e,a,t){e.exports=t.p+"static/media/ecarlate_banner.3aa82718.png"},206:function(e,a,t){e.exports=t.p+"static/media/ecarlate_logo.ca105e9f.png"},207:function(e,a,t){e.exports=t.p+"static/media/lucy_banner.34f98bca.png"},208:function(e,a,t){e.exports=t.p+"static/media/lucy_logo.4cc4ec4f.png"},209:function(e,a,t){e.exports=t.p+"static/media/peche_banner.a261d24f.png"},210:function(e,a,t){e.exports=t.p+"static/media/peche_logo.aee3bd07.png"},226:function(e){e.exports={projects:[{name:"P\xeache",logo:"peche_logo.png",banner:"peche_banner.png",shortDescription:"P\xeache est une application de gestion de dette que j'ai cr\xe9\xe9e pour ma famille et moi. Elle nous permet de savoir qui doit rembourser. Vous ne pourrez pas l'utiliser sur le Play Store, ayant restreint l'acc\xe8s \xe0 mes proches uniquement.",descriptions:["P\xeache est une application de gestion de dette que j'ai cr\xe9\xe9e pour ma famille et moi. Elle nous permet de savoir qui doit rembourser qui. Vous ne pourrez pas l'utiliser sur le Play Store, ayant restreint l'acc\xe8s \xe0 mes proches uniquement.","J'ai \xe9crit cette application en Java, il y a environ deux ans maintenant. Je continue de temps en temps \xe0 y faire des mises \xe0 jour. La base de donn\xe9es que j'utilise est Firebase. Je voulais essayer ce service et il s'av\xe8re tr\xe8s pratique. L'application fonctionne donc en temps r\xe9el, tout s'actualise d\xe8s qu'une modification est faite par un autre utilisateur."],languages:["android"],link:"https://play.google.com/store/apps/details?id=com.vincent.peche",screenshots:["screenshot_peche_1.png","screenshot_peche_2.png","screenshot_peche_3.png","screenshot_peche_4.png"]},{name:"Lucy",logo:"lucy_logo.png",banner:"lucy_banner.png",shortDescription:"Lucy est un site qui permet de visualiser des statistiques sur les conversations Facebook Messenger. Il permet de voir combien de messages sont envoy\xe9s au cours du temps, qui poste le plus de messages etc.",descriptions:["Lucy est un site qui permet de visualiser des statistiques sur les conversations Facebook Messenger. Il permet de voir combien de messages sont envoy\xe9s au cours du temps, qui poste le plus de messages etc.","C'est un site front-end uniquement, c'est \xe0 dire que tout est fait sur la machine du client. C'est pour cela que, sur des grosses conversations, cela prend un peu de temps pour tout calculer. Le site a \xe9t\xe9 fait en React avec un Material UI et charts.js pour le design. Il permet donc de visualiser des statistiques mais aussi de chiffrer et d\xe9chiffrer des conversation. C'est pourquoi certaines conversations vous seront inaccessibles.","Je vous invite, bien \xe9videmment, \xe0 tester le site avec la conversation de test 'Pok\xe9mon Version Rouge' ou bien avec votre propre conversation Facebook ! (Promis, je garde aucune donn\xe9e)."],languages:["react","node"],link:"https://estournet.github.io/lucy/",screenshots:["screenshot_lucy_1.png","screenshot_lucy_2.png"]},{name:"\xc9carlate",logo:"ecarlate_logo.png",banner:"ecarlate_banner.png",shortDescription:"Mon projet de stage de fin d'\xe9tudes. Pendant 6 mois, j'ai d\xe9velopp\xe9 \xc9carlate, un site de gestion de projet, qui pr\xe9sente les projets de fa\xe7on globale et, ainsi, permet en un seul coup d'oeil de voir quels projets m\xe9ritent une attention particuli\xe8re.",descriptions:["Mon projet de stage de fin d'\xe9tudes. Pendant 6 mois, j'ai d\xe9velopp\xe9 \xc9carlate, un site de gestion de projet, qui pr\xe9sente les projets de fa\xe7on globale et, ainsi, permet en un seul coup d'oeil de voir quels projets m\xe9ritent une attention particuli\xe8re.","On peut cr\xe9er des projets et, semaine apr\xe8s semaine, mettre \xe0 jour l'\xe9tat du projet et souligner les soucis potentiels. On a donc les developpeurs et chefs de projets qui mettent \xe0 jour les projets dont ils s'occupent et les managers qui peuvent consulter, d'un seul coup d'oeil, l'\xe9tat de tous les projets. Le site permet notament d'avoir des utilisateurs avec diff\xe9rents privil\xe8ges, qui leur permet d'effectuer certaines actions (ajouter, supprimer, modifier...). Il a donc fallu g\xe9rer en front-end ainsi qu'en back-end que chaque utilisateur avait le droit d'effectuer une action.","J'ai d\xe9velopp\xe9 ce site en totale autonomie, j'ai donc pu choisir les technologies \xe0 utiliser, la charte graphique, les outils que je veux utiliser... J'ai donc fait le site en React, en utilisant notamment les libraires Material-UI, React Router, Redux. Le back-end est un serveur Node.JS avec le framework hapijs, qui permet de cr\xe9er facilement des API REST. Enfin, la base de donn\xe9es est une base MongoDB classique. Il a aussi fallu rendre le site facilement d\xe9ployable, j'ai donc fait un petit script Docker pour que Jenkins puisse d\xe9ployer le site automatiquement.","Vous ne pouvez, cenpendant, pas voir le projet, le projet \xe9tant interne \xe0 l'entreprise. Seules quelques captures d'\xe9cran sont disponibles."],languages:["react","node"],screenshots:["screenshot_ecarlate_1.png","screenshot_ecarlate_2.png","screenshot_ecarlate_3.png","screenshot_ecarlate_4.png","screenshot_ecarlate_5.png","screenshot_ecarlate_6.png"]}]}},338:function(e){e.exports={steps:[{year:2013,label:"Bac Scientifique"},{year:2015,label:"Stage \xe0 la BRED (3\xa0mois)"},{year:2015,label:"DUT Informatique"},{year:2017,label:"Stage \xe0 l'INA (3\xa0mois)"},{year:2018,label:"Stage chez Oui.SNCF (6\xa0mois)"},{year:2018,label:"Dipl\xf4me d'ing\xe9nieur ESIEE\xa0Paris"}]}},356:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(6),i=t.n(r),c=t(26),o=t.n(c),l=t(180),u=t.n(l),p=t(212),m=t.n(p),d=t(211),g=t.n(d),h=t(203),f=t.n(h),E=t(188),v=t.n(E),_=t(202),b=t(29),y=t(53),x=t(187),j=i()({media:{height:340}})(function(e){return s.a.createElement(v.a,null,s.a.createElement(f.a,{className:e.classes.media,image:t(204)("./"+e.banner),title:e.name}),s.a.createElement(g.a,null,s.a.createElement(o.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),s.a.createElement(_.a,{chips:e.languages}),s.a.createElement(o.a,{align:"justify",component:"p"},e.shortDescription)),s.a.createElement(m.a,null,e.link&&s.a.createElement(u.a,{size:"small",color:"primary",href:e.link,target:"_blank",rel:"noopener noreferrer"},"Voir le projet\xa0",s.a.createElement(y.a,{icon:x.b,fixedWidth:!0})),s.a.createElement(u.a,{size:"small",variant:"contained",color:"primary",component:b.b,to:"/project/"+e.name},"En savoir plus")))}),q=t(181),k=t.n(q),N=t(189),w=t.n(N),S=t(178),L=t.n(S),M=t(213),D=t.n(M),J=t(216),P=t.n(J),z=t(214),I=t.n(z),C=t(217),F=t.n(C),R=t(218),B=t.n(R),W=t(333),T=t.n(W),O=t(335),V=t.n(O),A=t(336),U=t.n(A),G=t(184),H=t(219),Q=t.n(H),K=i()(function(e){return{paper:{padding:2*e.spacing.unit,display:"flex",justifyContent:"center"},inline:{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap"},picture:{maxWidth:"256px",margin:2*e.spacing.unit}}})(function(e){return s.a.createElement(L.a,{className:e.classes.paper},s.a.createElement(k.a,{container:!0,spacing:40},s.a.createElement(k.a,{item:!0,xs:12,className:e.classes.inline},s.a.createElement("img",{src:w.a,alt:"Vincent Monard",className:e.classes.picture}),s.a.createElement("div",null,s.a.createElement(o.a,{align:"center",variant:"h2",paragraph:!0},"Vincent Monard"),s.a.createElement(o.a,{align:"center",color:"textSecondary",variant:"h4"},"D\xe9veloppeur Fullstack"))),s.a.createElement(k.a,{item:!0,xs:12},s.a.createElement(D.a,{variant:"middle"})),s.a.createElement(k.a,{item:!0,xs:12},s.a.createElement(k.a,{container:!0,spacing:16},s.a.createElement(k.a,{item:!0,md:6,xs:12},s.a.createElement(I.a,null,s.a.createElement(P.a,null,s.a.createElement(F.a,null,s.a.createElement(T.a,null)),s.a.createElement(B.a,{primary:"25 ans"})),s.a.createElement(P.a,null,s.a.createElement(F.a,null,s.a.createElement(V.a,null)),s.a.createElement(B.a,{primary:"Paris, France"})),s.a.createElement(P.a,null,s.a.createElement(F.a,null,s.a.createElement(U.a,null)),s.a.createElement(B.a,{primary:"vincent.monard[at]free.fr"})),s.a.createElement(P.a,{button:!0,component:"a",target:"_blank",href:"https://github.com/Estournet/"},s.a.createElement(F.a,null,s.a.createElement(y.a,{icon:G.e,size:"lg",fixedWidth:!0})),s.a.createElement(B.a,{primary:"github.com/Estournet/"}),s.a.createElement(Q.a,null,s.a.createElement(y.a,{icon:x.b,fixedWidth:!0}))),s.a.createElement(P.a,{button:!0,component:"a",target:"_blank",href:"https://www.linkedin.com/in/vincent-monard/"},s.a.createElement(F.a,null,s.a.createElement(y.a,{icon:G.h,size:"lg",fixedWidth:!0})),s.a.createElement(B.a,{primary:"linkedin.com/in/vincent-monard/"}),s.a.createElement(Q.a,null,s.a.createElement(y.a,{icon:x.b,fixedWidth:!0}))))),s.a.createElement(k.a,{item:!0,md:6,xs:12},s.a.createElement(o.a,{variant:"body1",paragraph:!0},"Bienvenue sur mon portfolio. Sur ce site vous trouverez quelques informations sur mon parcours et mes comp\xe9tences mais, surtout, acc\xe9der \xe0 mes diff\xe9rents projets. Je vous invite \xe0 aller sur mon"," ",s.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/vincent-monard/",rel:"noopener noreferrer"},"LinkedIn")," ","si vous souhaitez plus d'information ou \xe0 m'envoyer directement un email."),s.a.createElement(o.a,{variant:"body1",paragraph:!0},"Fraichement diplom\xe9 de mon \xe9cole d'ing\xe9nieur, ESIEE Paris, je suis un d\xe9veloppeur polyvalant. Comme vous pourrez le voir, j'ai pu travailler sur des technologies web, mobile mais j'ai aussi des connaissances dans l'algorithmique, le parall\xe9lisme, les compilateurs etc."),s.a.createElement(o.a,{variant:"body1",paragraph:!0},"J'ai aussi pas mal voyag\xe9, notamment en Tha\xeflande pour faire un semestre d'\xe9tudes \xe0 l'\xe9tranger, ou encore en Am\xe9rique du Sud, seul, pendant quelques mois."))))))}),X=t(220),Y=t.n(X),Z=t(222),$=t.n(Z),ee=t(223),ae=t.n(ee),te=t(182),ne=t.n(te),se=t(225),re=t.n(se),ie=t(338),ce=function(e){return"xs"===e.width},oe=re()()(function(e){return s.a.createElement(L.a,null,s.a.createElement(Y.a,{orientation:ce(e)?"vertical":"horizontal",alternativeLabel:!ce(e),activeStep:ie.steps.length},ie.steps.map(function(e){return s.a.createElement($.a,{key:e.label},s.a.createElement(ae.a,{icon:s.a.createElement(ne.a,{variant:"body1"},e.year)},e.label))})))}),le=t(227),ue=t(226),pe=t(228),me=t.n(pe),de=t(229),ge=t.n(de),he={sectionName:"Langages web",langages:[{name:"React",icon:G.l},{name:"PHP",icon:G.k},{name:"Node.js",icon:G.j},{name:"HTML 5",icon:G.f},{name:"CSS 3",icon:G.b}]},fe={sectionName:"Langages classiques",langages:[{name:"Java",icon:G.g},{name:"Android",icon:G.a},{name:"C"}]},Ee={sectionName:"Bases de donn\xe9es",langages:[{name:"MySQL",icon:x.a},{name:"MongoDB",icon:x.a},{name:"Firebase",icon:x.a}]},ve={sectionName:"Divers",langages:[{name:"GNU/Linux",icon:G.i},{name:"Git",icon:G.d},{name:"Docker",icon:G.c}]},_e=function(e,a){return s.a.createElement(s.a.Fragment,null,s.a.createElement(k.a,{item:!0,xs:12},s.a.createElement(le.a,{variant:"h5",paragraph:!0,className:e.classes.title},a.sectionName)),s.a.createElement(k.a,{item:!0,xs:12},s.a.createElement(k.a,{container:!0,spacing:8},a.langages.map(function(a){return s.a.createElement(k.a,{item:!0,md:2,sm:4,xs:12,key:a.name},s.a.createElement(v.a,null,s.a.createElement(me.a,{avatar:s.a.createElement(ge.a,{className:e.classes.avatar},a.icon?s.a.createElement(y.a,{icon:a.icon,size:"lg",fixedWidth:!0}):a.name.charAt(0)),title:a.name})))}))))},be=i()(function(e){return{title:{marginTop:2*e.spacing.unit,marginBottom:e.spacing.unit},avatar:{background:e.palette.primary.main}}})(function(e){return s.a.createElement(k.a,{container:!0,spacing:8},_e(e,he),_e(e,fe),_e(e,Ee),_e(e,ve))});a.default=i()(function(e){return{title:{marginTop:2*e.spacing.unit,marginBottom:e.spacing.unit}}})(function(e){return s.a.createElement(k.a,{container:!0,spacing:32},s.a.createElement(k.a,{item:!0,xs:12},s.a.createElement(K,null)),s.a.createElement(k.a,{item:!0,xs:12},s.a.createElement(le.a,{variant:"h4",className:e.classes.title},"Mon parcours")),s.a.createElement(k.a,{item:!0,xs:12},s.a.createElement(oe,null)),s.a.createElement(k.a,{item:!0,xs:12},s.a.createElement(le.a,{variant:"h4",className:e.classes.title},"Mes comp\xe9tences")),s.a.createElement(k.a,{item:!0,xs:12},s.a.createElement(be,null))," ",s.a.createElement(k.a,{item:!0,xs:12},s.a.createElement(le.a,{variant:"h4",className:e.classes.title},"Mes projets")),ue.projects.map(function(e){return s.a.createElement(k.a,{item:!0,md:4,xs:12,key:e.name},s.a.createElement(j,e))}))})}}]);
//# sourceMappingURL=6.03e468ea.chunk.js.map