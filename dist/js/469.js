(self["webpackChunkaridni_orca_vue"]=self["webpackChunkaridni_orca_vue"]||[]).push([[469],{1469:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return ie}});n(7658);var t=n(3396),c=n(9242),o=n(816);const s=e=>((0,t.dD)("data-v-7699fac1"),e=e(),(0,t.Cn)(),e),r={class:"panelBox"},i={class:"rightSide column"},l={class:"topRow row"},u={class:"innerRightColumn"},p={class:"outerColumn column"},d={class:"bottomRightRow row"},m={href:"https://aridniorca.bandcamp.com/"},w={class:"leftSide row"},b={class:"leftColumn column"},g={class:"bottomLeftRow row"},h={class:"innerLeftColumn column"},f={class:"contact-info-bubble clickable"},v=s((()=>(0,t._)("div",{class:"contact-info"},"aridni.orca at     gmail dot com",-1))),P=[v];function y(e,a,n,s,v,y){const C=(0,t.up)("ListenPane"),x=(0,t.up)("ImagePane"),_=(0,t.up)("CyclingImagePane"),k=(0,t.up)("NavigationPane"),I=(0,t.up)("WatchPane"),W=(0,t.up)("ShowsPane");return(0,t.wg)(),(0,t.iD)("div",r,[(0,t._)("div",i,[(0,t._)("div",l,[(0,t._)("div",u,[(0,t.Wm)(C,{class:"listen-pane"})]),(0,t._)("div",p,[(0,t.Wm)(x,{class:"about-pane clickable",onClick:a[0]||(a[0]=e=>this.$router.push({name:"about"})),source:"harp-playing.webp"}),(0,t.Wm)(_,{class:"magic-pane",panes:v.magicPanes},null,8,["panes"])])]),(0,t._)("div",d,[(0,t._)("a",m,[(0,t.Wm)(k,{class:"buy-pane",source:"buy-image.webp",accentColor:"white",text:"buy"})]),(0,t.Wm)(x,{class:"featherpluck-pane",source:"featherpluck-art.webp",accentColor:"#ceeefd"})])]),(0,t._)("div",w,[(0,t._)("div",b,[(0,t.Wm)(I,{class:"watch-pane",source:"watch-image.webp",accentColor:"pink",text:"watch",destination:"watch"}),(0,t._)("div",g,[(0,t.Wm)(W,{class:"shows-pane"}),(0,t._)("img",{class:"logo clickable",src:o,onClick:a[1]||(a[1]=e=>{this.$router.push({name:"welcome"})})})])]),(0,t._)("div",h,[(0,t.Wm)(x,{class:"renaissance-pane",source:"renaissance.webp",accentColor:"orange"}),(0,t.Wm)(_,{class:"fairy-ring-pane",panes:v.fairyPanes},null,8,["panes"]),(0,t._)("div",{class:"contact-pane-box",onClick:a[2]||(a[2]=e=>v.showContactInfo=!v.showContactInfo)},[(0,t.Wm)(k,{class:"contact-pane",source:"bubble.webp",textColor:"#ff6100",text:"contact"}),(0,t.wy)((0,t._)("div",f,P,512),[[c.F8,v.showContactInfo]])])])])])}var C=n(7139);const x={id:"text"};function _(e,a,n,c,o,s){const r=(0,t.up)("ImagePane");return(0,t.wg)(),(0,t.iD)("div",{class:"container clickable",style:(0,C.j5)(s.cssProps)},[(0,t.Wm)(r,{class:"image",source:n.source,accentColor:n.accentColor,onClick:a[0]||(a[0]=e=>this.$router.push({name:n.destination}))},null,8,["source","accentColor"]),(0,t._)("div",x,(0,C.zw)(n.text),1)],4)}const k=["src"];function I(e,a,c,o,s,r){return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("img",{src:n(990)(`./${c.source}`),style:(0,C.j5)(r.cssProps)},null,12,k)])}var W={name:"ImagePane",props:{source:String,accentColor:String},computed:{cssProps(){return{"--accentColor":this.accentColor}}}},S=n(89);const N=(0,S.Z)(W,[["render",I],["__scopeId","data-v-097a24bc"]]);var B=N,F={name:"NavigationPane",props:{source:String,accentColor:String,text:String,textColor:String,destination:String},computed:{cssProps(){return{"--textColor":this.textColor||this.accentColor}}},components:{ImagePane:B}};const D=(0,S.Z)(F,[["render",_],["__scopeId","data-v-3565be92"]]);var Z=D;function L(e,a,n,c,o,s){const r=(0,t.up)("ImagePane");return(0,t.wg)(),(0,t.j4)(r,{class:"clickable",source:s.currentSource,accentColor:s.currentColor,onClick:a[0]||(a[0]=e=>s.incrementPane())},null,8,["source","accentColor"])}var R={name:"CyclingImagePane",props:{panes:Array},data(){return{paneIndex:0}},computed:{currentSource(){return this.panes[this.paneIndex].source},currentColor(){return this.panes[this.paneIndex].accentColor}},components:{ImagePane:B},methods:{incrementPane(){this.paneIndex=(this.paneIndex+1)%this.panes.length}}};const j=(0,S.Z)(R,[["render",L]]);var T=j;const E={class:"listenPaneBox"},O={class:"embeddedPlayerBackground"};function $(e,a,n,o,s,r){const i=(0,t.up)("NavigationPane"),l=(0,t.up)("ImagePane");return(0,t.wg)(),(0,t.iD)("div",E,[(0,t.Wm)(i,{class:"listenPane",source:"listen-image.webp",accentColor:"blue",text:"listen",onClick:a[0]||(a[0]=e=>s.showPlayer=!0)}),(0,t.wy)((0,t._)("div",O,null,512),[[c.F8,s.showPlayer]]),(0,t.wy)((0,t._)("iframe",{onClick:a[1]||(a[1]=e=>s.showPlayer=!1),class:"embeddedPlayer",src:"https://open.spotify.com/embed/artist/0H4Y63FfweRZmLlIohWamc?utm_source=generator&theme=1",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"},null,512),[[c.F8,s.showPlayer]]),(0,t.wy)((0,t.Wm)(l,{class:"returnToVideoButton clickable",source:"listen-image.webp",accentColor:"blue",onClick:a[2]||(a[2]=e=>s.showPlayer=!1)},null,512),[[c.F8,s.showPlayer]])])}var z={name:"ListenPane",components:{ImagePane:B,NavigationPane:Z},data(){return{showPlayer:!1}}};const H=(0,S.Z)(z,[["render",$],["__scopeId","data-v-2cd2306c"]]);var U=H,V=n(4982);const Y={class:"showsPaneBox"},A={class:"parchmentBackground"},G={class:"showsTextBox"},M=(0,t.uE)('<div class="showsText" data-v-5c1d9ca4><br data-v-5c1d9ca4>゜・future * ✧<br data-v-5c1d9ca4><br data-v-5c1d9ca4>tba<br data-v-5c1d9ca4><br data-v-5c1d9ca4>✧: * past ゜:<br data-v-5c1d9ca4><br data-v-5c1d9ca4>evade house at madrid fashion week<br data-v-5c1d9ca4>19/9/22 <br data-v-5c1d9ca4><br data-v-5c1d9ca4>peckham audio<br data-v-5c1d9ca4>13/4/23 <div class="swords" data-v-5c1d9ca4><img class="crystalSword" src="'+V+'" data-v-5c1d9ca4></div></div>',1),Q=[M];function q(e,a,n,o,s,r){const i=(0,t.up)("NavigationPane"),l=(0,t.up)("ImagePane");return(0,t.wg)(),(0,t.iD)("div",Y,[(0,t.Wm)(i,{class:"showsPane",source:"shows-image.webp",accentColor:"#bcb9af",text:"shows",onClick:a[0]||(a[0]=e=>s.showInfo=!0)}),(0,t.wy)((0,t._)("div",A,null,512),[[c.F8,s.showInfo]]),(0,t.wy)((0,t._)("div",G,Q,512),[[c.F8,s.showInfo]]),(0,t.wy)((0,t.Wm)(l,{class:"returnToVideoButton clickable",source:"shows-image.webp",accentColor:"#bcb9af",onClick:a[1]||(a[1]=e=>s.showInfo=!1)},null,512),[[c.F8,s.showInfo]])])}var J={name:"ShowsPane",components:{NavigationPane:Z,ImagePane:B},data(){return{showInfo:!1}}};const K=(0,S.Z)(J,[["render",q],["__scopeId","data-v-5c1d9ca4"]]);var X=K;const ee={class:"watchPaneBox"},ae={class:"embeddedPlayer",src:"https://www.youtube.com/embed/bGePQWRfElg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""};function ne(e,a,n,o,s,r){const i=(0,t.up)("NavigationPane");return(0,t.wg)(),(0,t.iD)("div",ee,[(0,t.Wm)(i,{class:"watchPane",source:"watch-image.webp",accentColor:"pink",text:"watch",onClick:a[0]||(a[0]=e=>s.showPlayer=!0)}),(0,t.wy)((0,t._)("iframe",ae,null,512),[[c.F8,s.showPlayer]])])}var te={name:"WatchPane",components:{NavigationPane:Z},data(){return{showPlayer:!1}}};const ce=(0,S.Z)(te,[["render",ne],["__scopeId","data-v-cfd5703c"]]);var oe=ce,se={name:"HomePage",data(){return{magicPanes:[{source:"mushrooms.webp",accentColor:"red"},{source:"magic-card.webp",accentColor:"transparent"}],fairyPanes:[{source:"fairy-ring.webp",accentColor:"transparent"},{source:"fairy-facts.webp",accentColor:"transparent"}],showContactInfo:!1}},components:{NavigationPane:Z,ImagePane:B,CyclingImagePane:T,ListenPane:U,ShowsPane:X,WatchPane:oe}};const re=(0,S.Z)(se,[["render",y],["__scopeId","data-v-7699fac1"]]);var ie=re},990:function(e,a,n){var t={"./background-video-backup.webp":7511,"./bubble.webp":1850,"./buy-image.webp":7971,"./crystal-sword.webp":4982,"./fairy-facts.webp":9135,"./fairy-ring.webp":1432,"./featherpluck-art.webp":3436,"./harp-playing.webp":3709,"./indi-face.webp":2497,"./listen-image.webp":5454,"./logo-orange.webp":816,"./logo-pink.webp":3116,"./magic-card.webp":560,"./mushroom-emoji-text-cursor.webp":938,"./mushrooms.webp":9128,"./parchment.webp":8351,"./renaissance.webp":6980,"./shows-image.webp":5646,"./watch-image.webp":7821};function c(e){var a=o(e);return n(a)}function o(e){if(!n.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}c.keys=function(){return Object.keys(t)},c.resolve=o,e.exports=c,c.id=990},1850:function(e,a,n){"use strict";e.exports=n.p+"img/bubble.webp"},7971:function(e,a,n){"use strict";e.exports=n.p+"img/buy-image.webp"},4982:function(e,a,n){"use strict";e.exports=n.p+"img/crystal-sword.webp"},9135:function(e,a,n){"use strict";e.exports=n.p+"img/fairy-facts.webp"},1432:function(e,a,n){"use strict";e.exports=n.p+"img/fairy-ring.webp"},3436:function(e,a,n){"use strict";e.exports=n.p+"img/featherpluck-art.webp"},3709:function(e,a,n){"use strict";e.exports=n.p+"img/harp-playing.webp"},2497:function(e,a,n){"use strict";e.exports=n.p+"img/indi-face.webp"},5454:function(e,a,n){"use strict";e.exports=n.p+"img/listen-image.webp"},816:function(e,a,n){"use strict";e.exports=n.p+"img/logo-orange.webp"},3116:function(e,a,n){"use strict";e.exports=n.p+"img/logo-pink.webp"},560:function(e,a,n){"use strict";e.exports=n.p+"img/magic-card.webp"},938:function(e,a,n){"use strict";e.exports=n.p+"img/mushroom-emoji-text-cursor.webp"},9128:function(e,a,n){"use strict";e.exports=n.p+"img/mushrooms.webp"},8351:function(e,a,n){"use strict";e.exports=n.p+"img/parchment.webp"},6980:function(e,a,n){"use strict";e.exports=n.p+"img/renaissance.webp"},5646:function(e,a,n){"use strict";e.exports=n.p+"img/shows-image.webp"},7821:function(e,a,n){"use strict";e.exports=n.p+"img/watch-image.webp"}}]);
//# sourceMappingURL=469.js.map