(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed1c3e00"],{"02bd":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"sweep"}},[i("div",{attrs:{id:"sweep-head"}},[i("div",{staticClass:"sweep-head-left"},[i("div",[e._v("雷："+e._s(e.mineTotalCount))]),i("div",[e._v("标记："+e._s(e.tagTotalCount))])]),e.isGameStart?i("div",{staticClass:"handles"},[i("div",{on:{click:function(t){return e.restart()}}},[e._v("重新开始")]),i("div",{on:{click:function(t){return e.quitGame()}}},[e._v("结束")])]):i("div",{staticClass:"handles"},[i("div",{on:{click:function(t){return e.openStartPanel()}}},[e._v("开始")])]),i("div",[e._v("用时："+e._s(e.usedTime)+"s")])]),i("div",{style:{width:15*e.gridCellSize*e.level+10+"px",height:11*e.gridCellSize*e.level+"px"},attrs:{id:"sweep-body"}},e._l(e.gridCellOptions,(function(t,s){return i("div",{key:s,staticClass:"grid-cell",style:{width:e.gridCellSize+"px",height:e.gridCellSize+"px"},attrs:{type:t.type,"data-index":t.index,desc:t.desc},on:{click:function(i){return e.openCell(t.index,t.type,t.desc)},contextmenu:function(t){return t.preventDefault(),e.tabMine(s)}}},[i("Mine",{directives:[{name:"show",rawName:"v-show",value:"mine"==t.type&&1==t.isOpen,expression:"v.type == 'mine' && v.isOpen == true"}]}),i("Flag",{directives:[{name:"show",rawName:"v-show",value:1==t.isTag&&0==t.isOpen,expression:"v.isTag == true && v.isOpen == false"}]}),i("span",{directives:[{name:"show",rawName:"v-show",value:"common"==t.type&&1==t.isOpen,expression:"v.type == 'common' && v.isOpen == true"}],style:{fontSize:60/e.level+"px"}},[e._v(e._s(t.desc))])],1)})),0),i("div",{directives:[{name:"show",rawName:"v-show",value:e.startVisibility,expression:"startVisibility"}],staticClass:"game-start-container"},[i("div",{staticClass:"game-start"},[e._m(0),i("div",{staticClass:"game-start-body"},[i("div",{staticClass:"game-start-option"},[i("span",[e._v("player")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.playerName,expression:"playerName"}],staticClass:"player-name",attrs:{type:"text"},domProps:{value:e.playerName},on:{input:function(t){t.target.composing||(e.playerName=t.target.value)}}}),i("div",{attrs:{title:"随机生成名字"},on:{click:function(t){return e.createRandomName()}}},[i("Random")],1)]),i("div",{staticClass:"game-start-option"},[i("span",[e._v("难度")]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"level"}],staticClass:"levels",on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.level=t.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"1"}},[e._v("1")]),i("option",{attrs:{value:"2"}},[e._v("2")]),i("option",{attrs:{value:"3"}},[e._v("3")])])])]),i("div",{staticClass:"game-start-foot"},[i("div",{staticClass:"game-start-foot-btn",on:{click:function(t){return e.startGame()}}},[e._v("确定")])])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.quitVisibility,expression:"quitVisibility"}],staticClass:"game-tips-quit-container"},[i("div",{staticClass:"game-tips-quit"},[i("div",{staticClass:"game-tips-quit-head"},[i("div",{staticClass:"game-tips-quit-title"},[e._v("游戏结束")]),i("div",{staticClass:"game-tips-quit-close",on:{mouseover:function(t){e.isCloseHover=!0},mouseleave:function(t){e.isCloseHover=!1},click:function(t){return e.closeQuitPanel()}}},[i("CloseBlack",{directives:[{name:"show",rawName:"v-show",value:!e.isCloseHover,expression:"!isCloseHover"}]}),i("CloseWhite",{directives:[{name:"show",rawName:"v-show",value:e.isCloseHover,expression:"isCloseHover"}]})],1)]),i("div",{staticClass:"game-tips-quit-body"},[i("span",[e._v("player："+e._s(e.playerName))]),i("span",[e._v("得分："+e._s(e.score))])]),i("div",{staticClass:"game-tips-quit-foot"},[i("div",{staticClass:"game-tips-quit-btn",on:{click:function(t){return e.quitGame()}}},[e._v("结束")])])])])])},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"game-start-head"},[i("div",{staticClass:"game-start-title"},[e._v("游戏选项")])])}],l=(i("ac6a"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"close"},[i("svg",{staticClass:"icon",attrs:{t:"1653628309677",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2871","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"200",height:"200"}},[i("path",{attrs:{d:"M512 456.310154L94.247385 38.557538a39.542154 39.542154 0 0 0-55.689847 0 39.266462 39.266462 0 0 0 0 55.689847L456.310154 512 38.557538 929.752615a39.542154 39.542154 0 0 0 0 55.689847 39.266462 39.266462 0 0 0 55.689847 0L512 567.689846l417.752615 417.752616c15.163077 15.163077 40.290462 15.36 55.689847 0a39.266462 39.266462 0 0 0 0-55.689847L567.689846 512 985.442462 94.247385a39.542154 39.542154 0 0 0 0-55.689847 39.266462 39.266462 0 0 0-55.689847 0L512 456.310154z","p-id":"2872"}})])])}),n=[],r={},o=r,c=i("2877"),u=Object(c["a"])(o,l,n,!1,null,null,null),p=u.exports,d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"close"},[i("svg",{staticClass:"icon",attrs:{t:"1653628826967",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2871",width:"200",height:"200"}},[i("path",{attrs:{d:"M525.269211 510.837524 918.101111 116.227118c7.17747-7.209192 7.14984-18.871813-0.059352-26.049283-7.210215-7.176446-18.87079-7.151887-26.049283 0.059352L499.278257 484.72889 106.563014 90.236164c-7.17747-7.209192-18.84009-7.235798-26.049283-0.059352-7.209192 7.17747-7.235798 18.84009-0.059352 26.049283L473.287303 510.837524 80.45438 905.446907c-7.176446 7.209192-7.150864 18.871813 0.059352 26.049283 3.593851 3.577478 8.29492 5.365194 12.994965 5.365194 4.727675 0 9.455349-1.809205 13.054317-5.424546l392.715243-394.491703 392.715243 394.491703c3.599991 3.615341 8.326643 5.424546 13.054317 5.424546 4.700045 0 9.402137-1.787716 12.994965-5.365194 7.209192-7.17747 7.235798-18.84009 0.059352-26.049283L525.269211 510.837524z","p-id":"2872",fill:"#ffffff"}})])])},v=[],h={},g=h,m=Object(c["a"])(g,d,v,!1,null,null,null),_=m.exports,f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("svg",{staticClass:"icon",attrs:{t:"1653651023803",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4058",width:"200",height:"200"}},[i("path",{attrs:{d:"M538.084425 223.580786c-37.263464 0-68.564774 28.320233-71.545851 64.093159v7.452693c0 40.244541 32.791849 73.03639 73.03639 73.03639h93.90393c38.754003 0 70.055313-31.30131 73.03639-70.055313v-2.981077c0-40.244541-32.791849-73.03639-73.03639-73.036391h-95.394469zM427.784571 123.714702c1.490539 0 4.471616 0 5.962154-1.490539l58.131004-44.716157c4.471616-2.981077 5.962154-10.43377 1.490539-14.905386-2.981077-4.471616-10.43377-5.962154-14.905386-1.490538L421.822416 104.3377c-4.471616 2.981077-5.962154 10.43377-1.490538 14.905386 1.490539 2.981077 4.471616 4.471616 7.452693 4.471616zM386.049491 111.790393c5.962154 0 10.43377-4.471616 10.43377-10.43377V32.791849c0-5.962154-4.471616-10.43377-10.43377-10.43377-5.962154 0-10.43377 4.471616-10.43377 10.43377v70.055313c0 4.471616 4.471616 8.943231 10.43377 8.943231zM497.839884 193.770015c38.754003-8.943231 65.583697-5.962154 80.489083 8.943231 1.490539 1.490539 2.981077 2.981077 2.981077 4.471616h22.358078c-2.981077-5.962154-5.962154-11.924309-11.924308-17.886463-19.377001-19.377001-52.16885-23.848617-98.375546-13.414847-43.225619 10.43377-74.526929 7.452693-90.922853-7.452693-14.905386-13.414847-11.924309-35.772926-11.924309-35.772926 1.490539-4.471616-2.981077-10.43377-7.452693-10.43377-4.471616-1.490539-10.43377 2.981077-10.43377 7.452693 0 1.490539-5.962154 31.30131 16.395925 53.659389 22.358079 19.377001 58.131004 22.358079 108.809316 10.43377zM335.371179 117.752547c1.490539 1.490539 4.471616 2.981077 7.452693 2.981077s5.962154-1.490539 7.452693-2.981077c4.471616-4.471616 4.471616-10.43377 0-14.905385l-55.149927-55.149928c-4.471616-4.471616-10.43377-4.471616-14.905386 0-4.471616 4.471616-4.471616 10.43377 0 14.905386l55.149927 55.149927zM256.372635 156.50655l77.508005-4.471616c5.962154 0 10.43377-4.471616 10.43377-10.43377 0-5.962154-4.471616-10.43377-10.43377-10.43377l-77.508005 4.471616c-5.962154 0-10.43377 4.471616-10.43377 10.43377 0 5.962154 4.471616 10.43377 10.43377 10.43377z",fill:"#2c2c2c","p-id":"4059"}}),i("path",{attrs:{d:"M712.477438 305.560408c-1.490539 38.754003-41.73508 74.526929-80.489083 74.526928H536.593886c-40.244541 0-80.489083-37.263464-80.489083-77.508006v-7.452692C327.918486 338.352256 242.957787 460.576419 242.957787 605.158661c0 181.845706 147.563319 329.409025 329.409025 329.409025 181.845706 0 329.409025-147.563319 329.409025-329.409025-1.490539-134.148472-74.526929-247.429403-189.298399-299.598253z",fill:"#2c2c2c","p-id":"4060"}})])},C=[],O={},w=O,S=Object(c["a"])(w,f,C,!1,null,null,null),y=S.exports,b=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("svg",{staticClass:"icon",attrs:{t:"1653923148192",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1983",width:"200",height:"200"}},[i("path",{attrs:{d:"M207.868 34c16.27 0 29.505 13.006 29.88 29.191l0.008 0.706-0.001 11.498h667.861c22.626 0 41.013 18.165 41.378 40.712l0.006 0.684a41.405 41.405 0 0 1-9.265 26.102L810.734 299.27a11.502 11.502 0 0 0 0 14.501L937.735 470.15c14.411 17.744 11.714 43.815-6.025 58.23a41.375 41.375 0 0 1-26.094 9.267H237.755v372.56h46.593c16.506 0 29.888 13.386 29.888 29.897 0 16.276-13.002 29.514-29.182 29.889l-0.706 0.008h-152.46C115.38 970 102 956.615 102 940.103c0-16.275 13.001-29.514 29.182-29.888l0.705-0.009h46.093V63.896c0-16.51 13.382-29.896 29.888-29.896z m659.108 101.19h-629.22v342.663h629.22L764.34 351.474c-21.05-25.919-21.27-62.934-0.658-89.084l0.658-0.822 102.636-126.379z",fill:"#333333","p-id":"1984"}})])},T=[],x={},L=x,M=Object(c["a"])(L,b,T,!1,null,null,null),N=M.exports,E=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("svg",{staticClass:"icon",attrs:{t:"1654000673516",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2360",width:"200",height:"200"}},[i("path",{attrs:{d:"M956.915826 484.47273l-105.340577 106.496578c-8.706131 8.344881-22.758767 8.344881-31.392648 0l-104.690327-106.496578c-12.354759-14.594511-4.082128-19.760389 4.551753-28.213646h95.911946c-26.515769-143.59698-152.194736-252.47781-303.522473-252.47781-117.081211 0-218.84541 65.025048-271.262823 160.936993l-52.309039-20.91639c60.94292-116.539335 182.828759-196.158894 323.571862-196.158894 182.467509 0 333.144994 133.879348 360.202639 308.616101h79.800184c8.597756 8.453256 13.113385 19.83264 4.479503 28.213646z m-751.1838-22.614267l105.340577 106.388203c8.706131 8.453256 4.190503 19.83264-4.551753 28.285896H215.341283c36.666902 129.43597 155.698864 224.372539 297.056092 224.372539 107.544204 0 202.191773-54.98229 257.463064-138.358851l52.850914 21.097015c-64.302547 103.895576-179.071756 173.400127-310.313978 173.400127-172.605376 0-316.527482-119.826713-354.531009-280.51083H74.164679c-8.633881-8.453256-16.906512-13.691385-4.443378-28.285896l104.618077-106.388203c8.633881-8.453256 22.686517-8.453256 31.392648 0z",fill:"#231815","p-id":"2361"}})])},I=[],P={},k=P,q=Object(c["a"])(k,E,I,!1,null,null,null),R=q.exports,D=i("ed08"),z={components:{Mine:y,Flag:N,CloseBlack:p,CloseWhite:_,Random:R},data:function(){return{playerName:"",isGameQuit:!1,level:1,isGameStart:!1,score:0,usedTime:0,usedTimeIntervalTimer:0,gridCellOptions:[],gridCellSize:screen.availWidth/20,isCloseHover:!1,quitVisibility:!1,startVisibility:!1,showTagMine:!1,mineTotalCount:0,tagTotalCount:0}},methods:{getCache:function(){var e=this,t=localStorage.getItem("playerNames"),i=localStorage.getItem("cacheGridOptions");if(this.playerName=t?JSON.parse(localStorage.getItem("playerNames"))[JSON.parse(localStorage.getItem("playerNames")).length]:"","[]"!=i&&i){this.level=localStorage.getItem("cacheLevel"),this.gridCellSize=screen.availWidth/(20*this.level),this.gridCellOptions=JSON.parse(i);var s=0;this.gridCellOptions.forEach((function(t){s=t.isTag?s+1:s,e.mineTotalCount="mine"==t.type?e.mineTotalCount+1:e.mineTotalCount})),this.tagTotalCount=s,this.isGameStart=!0,this.usedTime=localStorage.getItem("cacheUsedTime")||0,this.playerName=localStorage.getItem("cachePlayerName")}},createRandomName:function(){for(var e="",t=parseInt(3*Math.random()+3),i=0;i<t;i++)e+=createRandomCNChar();this.playerName=e},openStartPanel:function(){this.startVisibility=!0,this.playerName=localStorage.getItem("prevPlayerName")?localStorage.getItem("prevPlayerName"):""},startGame:function(){var e=this;this.isGameStart=!0,this.gridCellOptions=[],this.gridCellSize=screen.availWidth/(20*this.level),this.usedTimeIntervalTimer=setInterval((function(){e.usedTime++}),1e3);for(var t=1;t<=15*Math.pow(this.level,2)*8;t++){var i=Math.random()<.15?"mine":"common";this.mineTotalCount="mine"==i?this.mineTotalCount+1:this.mineTotalCount;var s={type:i,desc:"",isOpen:!1,index:t,isTag:!1};this.gridCellOptions.push(s)}this.gridCellOptions.forEach((function(t,i){var s=0;"common"==t.type&&(1==t.index&&(t.index-1)%15==0||(e.gridCellOptions[i-(15*e.level+1)]&&"mine"==e.gridCellOptions[i-(15*e.level+1)].type&&s++,e.gridCellOptions[i-1]&&"mine"==e.gridCellOptions[i-1].type&&s++,e.gridCellOptions[i+(15*e.level-1)]&&"mine"==e.gridCellOptions[i+(15*e.level-1)].type&&s++),t.index%15!=0&&(e.gridCellOptions[i-(15*e.level-1)]&&"mine"==e.gridCellOptions[i-(15*e.level-1)].type&&s++,e.gridCellOptions[i+(15*e.level+1)]&&"mine"==e.gridCellOptions[i+(15*e.level+1)].type&&s++,e.gridCellOptions[i+1]&&"mine"==e.gridCellOptions[i+1].type&&s++),e.gridCellOptions[i-15*e.level]&&"mine"==e.gridCellOptions[i-15*e.level].type&&s++,e.gridCellOptions[i+15*e.level]&&"mine"==e.gridCellOptions[i+15*e.level].type&&s++),t.desc=s})),this.startVisibility=!1},restart:function(){},quitGame:function(){this.quitVisibility=!1,this.isGameStart=!1,this.gridCellOptions=[],this.mineTotalCount=0,this.tagTotalCount=0},closeQuitPanel:function(){this.quitVisibility=!1},showQuitpanel:function(){var e=this,t=0;this.gridCellOptions.forEach((function(e){1==e.isOpen&&"mine"!=e.type&&t++})),this.score=t,clearInterval(this.usedTimeIntervalTimer),localStorage.removeItem("cacheGridOptions"),localStorage.removeItem("cacheUsedTime"),localStorage.removeItem("cacheLevel"),localStorage.setItem("prevPlayerName",this.playerName);var i=JSON.parse(localStorage.getItem("allSweepRecords"))||[];i.push({player:this.playerName,score:this.score,level:this.level,time:Object(D["a"])(new Date)}),localStorage.removeItem("allSweepRecords"),localStorage.setItem("allSweepRecords",JSON.stringify(i)),setTimeout((function(){e.gridCellOptions.forEach((function(e){e.isOpen=!0}))}),500),this.quitVisibility=!0},createGrids:function(){},openCell:function(e,t,i){if(this.gridCellOptions[e-1].isOpen=!0,"mine"==t)clearInterval(this.usedTimeIntervalTimer),this.showQuitpanel();else if(0==i){var s=e-1;1==e&&(e-1)%15==0||(this.gridCellOptions[s-(15*this.level+1)]&&(this.gridCellOptions[s-(15*this.level+1)].isOpen=!0),this.gridCellOptions[s-1]&&(this.gridCellOptions[s-1].isOpen=!0),this.gridCellOptions[s+(15*this.level-1)]&&(this.gridCellOptions[s+(15*this.level-1)].isOpen=!0)),e%15!=0&&(this.gridCellOptions[s-(15*this.level-1)]&&(this.gridCellOptions[s-(15*this.level-1)].isOpen=!0),this.gridCellOptions[s+(15*this.level+1)]&&(this.gridCellOptions[s+(15*this.level+1)].isOpen=!0),this.gridCellOptions[s+1]&&(this.gridCellOptions[s+1].isOpen=!0)),this.gridCellOptions[s-15*this.level]&&(this.gridCellOptions[s-15*this.level].isOpen=!0),this.gridCellOptions[s+15*this.level]&&(this.gridCellOptions[s+15*this.level].isOpen=!0)}},dealNearNoMine:function(){},tabMine:function(e){this.gridCellOptions[e].isTag=!this.gridCellOptions[e].isTag;var t=0;this.gridCellOptions.forEach((function(e){t=e.isTag?t+1:t})),this.tagTotalCount=t},setCache:function(){localStorage.setItem("cacheGridOptions",JSON.stringify(this.gridCellOptions)),localStorage.setItem("cacheUsedTime",this.usedTime),localStorage.setItem("cacheLevel",this.level),localStorage.setItem("cachePlayerName",this.playerName)}},mounted:function(){var e=this;this.getCache(),window.onbeforeunload=function(){e.setCache()}},watch:{"$route.fullPath":function(e,t){console.log(t,e)}}},G=z,V=(i("349a"),Object(c["a"])(G,s,a,!1,null,null,null));t["default"]=V.exports},"0bfb":function(e,t,i){"use strict";var s=i("cb7c");e.exports=function(){var e=s(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"2e08":function(e,t,i){var s=i("9def"),a=i("9744"),l=i("be13");e.exports=function(e,t,i,n){var r=String(l(e)),o=r.length,c=void 0===i?" ":String(i),u=s(t);if(u<=o||""==c)return r;var p=u-o,d=a.call(c,Math.ceil(p/c.length));return d.length>p&&(d=d.slice(0,p)),n?d+r:r+d}},"349a":function(e,t,i){"use strict";i("b904")},3846:function(e,t,i){i("9e1e")&&"g"!=/./g.flags&&i("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:i("0bfb")})},"6b54":function(e,t,i){"use strict";i("3846");var s=i("cb7c"),a=i("0bfb"),l=i("9e1e"),n="toString",r=/./[n],o=function(e){i("2aba")(RegExp.prototype,n,e,!0)};i("79e5")((function(){return"/a/b"!=r.call({source:"a",flags:"b"})}))?o((function(){var e=s(this);return"/".concat(e.source,"/","flags"in e?e.flags:!l&&e instanceof RegExp?a.call(e):void 0)})):r.name!=n&&o((function(){return r.call(this)}))},9744:function(e,t,i){"use strict";var s=i("4588"),a=i("be13");e.exports=function(e){var t=String(a(this)),i="",l=s(e);if(l<0||l==1/0)throw RangeError("Count can't be negative");for(;l>0;(l>>>=1)&&(t+=t))1&l&&(i+=t);return i}},ac6a:function(e,t,i){for(var s=i("cadf"),a=i("0d58"),l=i("2aba"),n=i("7726"),r=i("32e9"),o=i("84f2"),c=i("2b4c"),u=c("iterator"),p=c("toStringTag"),d=o.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=a(v),g=0;g<h.length;g++){var m,_=h[g],f=v[_],C=n[_],O=C&&C.prototype;if(O&&(O[u]||r(O,u,d),O[p]||r(O,p,_),o[_]=d,f))for(m in s)O[m]||l(O,m,s[m],!0)}},b904:function(e,t,i){},ed08:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return formatTime}));var core_js_modules_es7_string_pad_start__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("f576"),core_js_modules_es7_string_pad_start__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es7_string_pad_start__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("6b54"),core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__),createRandomCNChar=function createRandomCNChar(){var unicode="\\u"+(Math.round(20901*Math.random())+19968).toString(16);return eval("'"+unicode+"'")},formatTime=function(e){if(e instanceof Date){var t=e.getFullYear(),i=e.getMonth()+1,s=e.getDate(),a=e.getHours().toString().padStart(2,"0"),l=e.getMinutes().toString().padStart(2,"0"),n=e.getSeconds().toString().padStart(2,"0");return"".concat(t,"-").concat(i,"-").concat(s," ").concat(a,":").concat(l,":").concat(n)}return"参数不是Date对象"}},f576:function(e,t,i){"use strict";var s=i("5ca1"),a=i("2e08"),l=i("a25f"),n=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(l);s(s.P+s.F*n,"String",{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0,!0)}})}}]);
//# sourceMappingURL=chunk-ed1c3e00.8ec2a5fb.js.map