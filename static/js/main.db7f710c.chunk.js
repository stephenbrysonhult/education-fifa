(window["webpackJsonpeducation-fifa"]=window["webpackJsonpeducation-fifa"]||[]).push([[0],[,,,,,function(e,a,t){e.exports=t.p+"static/media/bmfc.31962d0c.png"},function(e,a,t){e.exports=t.p+"static/media/psg.0cb80df2.png"},function(e,a,t){e.exports=t.p+"static/media/thfc.514abec1.png"},function(e,a,t){e.exports=t.p+"static/media/rmfc.e36a999d.png"},function(e,a,t){e.exports=t.p+"static/media/cfc.d854acff.png"},function(e,a,t){e.exports=t.p+"static/media/lfc.d73b731c.png"},function(e,a,t){e.exports=t.p+"static/media/jfc.077f0505.png"},function(e,a,t){e.exports=t.p+"static/media/amfc.894b20e8.png"},function(e,a,t){e.exports=t.p+"static/media/nfc.b75ea818.png"},function(e,a,t){e.exports=t.p+"static/media/mcfc.234c942f.png"},function(e,a,t){e.exports=t.p+"static/media/fcb.9a17b93d.png"},function(e,a,t){e.exports=t.p+"static/media/mufc.01fb89c1.png"},function(e,a,t){e.exports=t.p+"static/media/efc.33888b50.png"},function(e,a,t){e.exports=t.p+"static/media/gfc.b589d536.png"},function(e,a,t){e.exports=t.p+"static/media/bfc.d68d0b14.png"},function(e,a,t){e.exports=t.p+"static/media/ifc.5b1bba52.png"},function(e,a,t){e.exports=t.p+"static/media/ef.94d79074.png"},,,,,,function(e,a,t){e.exports=t.p+"static/media/afc.63e49080.png"},function(e,a,t){e.exports=t.p+"static/media/dfc.41207aed.png"},,,,,,,function(e,a,t){e.exports=t(48)},,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(23),r=t.n(c),l=t(2),o=t(21),m=t.n(o);t(45);var g=function(){return s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"header__logo"},s.a.createElement("img",{className:"header__logo-item header__logo-item--ef",src:m.a,alt:m.a}),s.a.createElement(l.a,{className:"header__logo-item",icon:["fal","knife-kitchen"]}),s.a.createElement(l.a,{className:"header__logo-item",icon:["fal","hockey-mask"]})),s.a.createElement("nav",{className:"header__nav"},s.a.createElement("div",{className:"header__nav-item"},s.a.createElement(l.a,{className:"header__nav-item-live",icon:["fas","circle"]}),s.a.createElement("span",null,"Live"))))};t(46);var i=function(e){return s.a.createElement("div",{className:"group"},s.a.createElement("div",{className:"group__row group__row--heading"},s.a.createElement("div",{className:"group__cell group__cell--heading group__cell--player"},"Player"),s.a.createElement("div",{className:"group__cell group__cell--heading"},"P"),s.a.createElement("div",{className:"group__cell group__cell--heading"},"W"),s.a.createElement("div",{className:"group__cell group__cell--heading"},"D"),s.a.createElement("div",{className:"group__cell group__cell--heading"},"L"),s.a.createElement("div",{className:"group__cell group__cell--heading"},"GF"),s.a.createElement("div",{className:"group__cell group__cell--heading"},"GA"),s.a.createElement("div",{className:"group__cell group__cell--heading"},"GD"),s.a.createElement("div",{className:"group__cell group__cell--heading"},"PTS")),e.children)},p=t(24),d=t(25),f=t(33),u=t(26),_=t(34),E=(t(47),function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(f.a)(this,Object(u.a)(a).call(this,e))).toggleModal=function(){t.setState({isOpen:!t.state.isOpen})},t.state={isOpen:!1,playerTrophies:"0"},t}return Object(_.a)(a,e),Object(d.a)(a,[{key:"renderSwitch",value:function(){switch(this.props.playerName){case"Tej":return"1";case"Stephen":return"2";default:return"0"}}},{key:"render",value:function(){return s.a.createElement("div",{className:"".concat(this.props.className," player")},s.a.createElement("p",{className:"player__label"},this.props.playerName,s.a.createElement("span",{className:"player__trophies player__trophies--".concat(this.renderSwitch())},s.a.createElement(l.a,{className:"player__trophy",icon:["fas","star"]}),s.a.createElement(l.a,{className:"player__trophy",icon:["fas","star"]}),s.a.createElement(l.a,{className:"player__trophy",icon:["fas","star"]}))))}}]),a}(n.Component)),h=t(27),N=t.n(h),v=t(28),b=t.n(v),y=t(5),w=t.n(y),D=t(6),W=t.n(D),A=t(7),L=t.n(A),x=t(8),F=t.n(x),k=t(9),j=t.n(k),O=t(10),G=t.n(O),S=t(11),C=t.n(S),T=t(12),B=t.n(T),J=t(13),M=t.n(J),P=t(14),H=t.n(P),I=t(15),$=t.n(I),q=t(16),z=t.n(q),K=t(17),Q=t.n(K),R=t(18),U=t.n(R),V=t(19),X=t.n(V),Y=t(20),Z=t.n(Y);var ee=function(e){var a={afc:N.a,dfc:b.a,bmfc:w.a,psg:W.a,thfc:L.a,rmfc:F.a,cfc:j.a,lfc:G.a,jfc:C.a,amfc:B.a,nfc:M.a,mcfc:H.a,fcb:$.a,mufc:z.a,efc:Q.a,bfc:X.a,gfc:U.a,ifc:Z.a};return s.a.createElement("div",{className:"group__row ".concat(e.className)},s.a.createElement("div",{className:"group__cell group__cell--player"},s.a.createElement("img",{className:"group__badge",src:a[e.badge],alt:""}),s.a.createElement(E,{className:"group__player-name",playerName:e.playerName,totalWon:e.totalWon,totalDrawn:e.totalDrawn,totalLost:e.totalLost,trophies:e.trophies})),s.a.createElement("div",{className:"group__cell"},e.gamesWon+e.gamesDrawn+e.gamesLost),s.a.createElement("div",{className:"group__cell"},e.gamesWon),s.a.createElement("div",{className:"group__cell"},e.gamesDrawn),s.a.createElement("div",{className:"group__cell"},e.gamesLost),s.a.createElement("div",{className:"group__cell"},e.goalsFor),s.a.createElement("div",{className:"group__cell"},e.goalsAgainst),s.a.createElement("div",{className:"group__cell"},function(){var a=e.goalsFor-e.goalsAgainst;return a>0?"+".concat(a):a}()),s.a.createElement("div",{className:"group__cell"},3*e.gamesWon+e.gamesDrawn))};var ae=function(){return s.a.createElement("div",null,s.a.createElement("h1",{className:"h1 h1--accent"},"Oct / Nov 2019"),s.a.createElement("h2",{className:"h2"},"Group A"),s.a.createElement(i,null,s.a.createElement(ee,{badge:"afc",playerName:"Bart",gamesWon:3,gamesDrawn:0,gamesLost:0,goalsFor:11,goalsAgainst:3}),s.a.createElement(ee,{badge:"amfc",playerName:"Nick",gamesWon:1,gamesDrawn:1,gamesLost:1,goalsFor:9,goalsAgainst:6}),s.a.createElement(ee,{badge:"ifc",playerName:"Harrison",gamesWon:0,gamesDrawn:1,gamesLost:3,goalsFor:4,goalsAgainst:15}),s.a.createElement(ee,{badge:"bfc",playerName:"Sam",gamesWon:0,gamesDrawn:0,gamesLost:0,goalsFor:0,goalsAgainst:0})),s.a.createElement("h2",{className:"h2"},"Group B"),s.a.createElement(i,null,s.a.createElement(ee,{badge:"psg",playerName:"Mihai",gamesWon:1,gamesDrawn:1,gamesLost:1,goalsFor:6,goalsAgainst:7}),s.a.createElement(ee,{badge:"nfc",playerName:"Tej",gamesWon:1,gamesDrawn:0,gamesLost:0,goalsFor:4,goalsAgainst:0}),s.a.createElement(ee,{badge:"gfc",playerName:"Conor",gamesWon:0,gamesDrawn:1,gamesLost:1,goalsFor:3,goalsAgainst:6}),s.a.createElement(ee,{badge:"dfc",playerName:"Anveer",gamesWon:0,gamesDrawn:0,gamesLost:0,goalsFor:0,goalsAgainst:0})),s.a.createElement("h2",{className:"h2"},"Group C"),s.a.createElement(i,null,s.a.createElement(ee,{badge:"fcb",playerName:"Stephen",gamesWon:6,gamesDrawn:0,gamesLost:0,goalsFor:37,goalsAgainst:1}),s.a.createElement(ee,{badge:"jfc",playerName:"Michael",gamesWon:1,gamesDrawn:1,gamesLost:2,goalsFor:5,goalsAgainst:17}),s.a.createElement(ee,{badge:"lfc",playerName:"Christian",gamesWon:1,gamesDrawn:1,gamesLost:3,goalsFor:4,goalsAgainst:19}),s.a.createElement(ee,{badge:"mcfc",playerName:"Jasper",gamesWon:0,gamesDrawn:0,gamesLost:3,goalsFor:0,goalsAgainst:9})),s.a.createElement("h2",{className:"h2"},"Group D"),s.a.createElement(i,null,s.a.createElement(ee,{badge:"thfc",playerName:"Addy",gamesWon:4,gamesDrawn:0,gamesLost:0,goalsFor:9,goalsAgainst:2}),s.a.createElement(ee,{badge:"rmfc",playerName:"Christoffer",gamesWon:1,gamesDrawn:1,gamesLost:1,goalsFor:1,goalsAgainst:3}),s.a.createElement(ee,{badge:"bmfc",playerName:"Jake",gamesWon:0,gamesDrawn:1,gamesLost:2,goalsFor:1,goalsAgainst:4}),s.a.createElement(ee,{badge:"efc",playerName:"Tom",gamesWon:0,gamesDrawn:0,gamesLost:2,goalsFor:1,goalsAgainst:3})))},te=t(3),ne=t(29),se=t(30),ce=t(31),re=t(32);te.b.add(ce.a,ne.a,se.a,re.a);var le=function(){return s.a.createElement("div",{className:"container"},s.a.createElement(g,null),s.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[35,1,2]]]);
//# sourceMappingURL=main.db7f710c.chunk.js.map