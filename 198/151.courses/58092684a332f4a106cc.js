webpackJsonp([151],{169:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){for(var i=new PIXI.Container,o=new PIXI.filters.ColorMatrixFilter,r=a||!1,s=n||{addArrow:!1,type:"horizontal",scale:1},l=new PIXI.Container,d=0;d<3;++d){var p=d+1,c=PIXI.Sprite.fromFrame("TAP_1"+p);c.x=-c.width/2,c.y=-c.height/2;var f=new PIXI.Container;f.addChild(c),l.addChild(f)}var h=0;if(s.direction)switch(s.direction){case"top":h=-Math.PI/2;break;case"bottom":h=Math.PI/2;break;case"left":h=Math.PI;break;case"right":h=0;break;default:h=0}l.filters=[o];for(var u=0;u<l.children.length;u++){var v=l.children[u];v.scale.x=v.scale.y=2,u<2&&x(v,.75*u)}if(i.addChild(l),s.addArrow){var C,T;if(s.direction){C=PIXI.Sprite.fromFrame("oneArrow"),T=new PIXI.extras.MovieClip([C]);var m=s.scale?s.scale:1;T.scale.x=T.scale.y=m,T.pivot={x:0,y:T.height/2},T.rotation=h}else{C=PIXI.Sprite.fromFrame("NBarrow"),(T=new PIXI.extras.MovieClip([C])).pivot={x:T.width/2,y:T.height/2};var w=s.scale?s.scale:1;T.scale.x=T.scale.y=w,"horizontal"!==(s.type?s.type:"horizontal")&&(T.rotation=Math.PI/2)}i.addChild(T),i.arrow=T,i.addEventListener("hideArrow",function(){T.alpha=0,T.visible=!1}),i.addEventListener("showArrow",function(){T.alpha=1,T.visible=!0})}l.alpha=.4;var g=new PIXI.Graphics;function x(e,t){TweenMax.to(e,1.5,{delay:t,alpha:0,repeat:-1}),TweenMax.to(e.scale,1.5,{x:5,y:5,delay:t,repeat:-1})}return g.beginFill(16776960,0),g.drawRect(-50,-50,100,100),i.addChild(g),i.addEventListener(MouseEvent.MOUSE_OVER,function(){l.alpha=.6}),i.addEventListener(MouseEvent.MOUSE_OUT,function(){l.alpha=.4}),i.addEventListener(TouchEvent.TOUCH_BEGIN,function(){i.emit(i.event.TAP),!r&&i.parent&&i.parent.removeChild(i)}),i.x=e,i.y=t,i.setColor=function(e){var t=e>>16,a=e>>8&255,n=255&e;o._loadMatrix([t,0,0,0,0,0,a,0,0,0,0,0,n,0,0,0,0,0,255,0],!1),l.filters=[o]},i.setRotation=function(e){i.rotation=e},i.showAllDir=function(){if(s.direction)for(var e=0;e<3;e++){var t=new PIXI.Container;t.addChild(PIXI.Sprite.fromFrame("oneArrow")),i.addChild(t),t.pivot={x:0,y:T.height/2},t.rotation=Math.PI/2*(e+1)}else{var a=new PIXI.Container;a.addChild(PIXI.Sprite.fromFrame("NBarrow")),i.addChild(a),a.pivot={x:T.width/2,y:T.height/2},a.rotation=i.rotation+Math.PI/2}},i.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&i.scale.set(.6,.6),i}},348:function(e,t,a){"use strict";var n=o(a(525)),i=o(a(169));function o(e){return e&&e.__esModule?e:{default:e}}nb.substance0126=extendsClass(ScienceMain,{frame0:function(){var e=this,t=(0,i.default)(0,0,!0);e.spoon1.addChild(t),e.addChild(e.spoon1);var a=["胶水溶液","洗发水溶液"];e.tool1.alpha=0,e.tool2.alpha=0,e.ani1.alpha=0;for(var o=[{},{color:16777215,alpha:.3},{color:16777215,alpha:.8}],r=function(a){var i=e["gllassRod"+a],o=e["beaker"+a];i.visible=!1,i.alpha=0,i.startX=i.x,i.startY=i.y;var r=e["spoon"+a];r.bind=e["ref"+a],r.startX=r.x,r.startY=r.y,NBDrag.addDrag(r),r.addEventListener(NBDrag.event.START_DRAG,function(){r.test.alpha=0,r.removeChild(t)}),r.addEventListener(NBDrag.event.DRAG_MOVE,function(){r.removeChild(t)}),r.addEventListener(NBDrag.event.STOP_DRAG,function(){r.hitTest(r.bind)&&(r.isOK=!0)}),e["gllassRod"+a].addEventListener(NBDrag.event.START_DRAG,l),e["gllassRod"+a].addEventListener(NBDrag.event.STOP_DRAG,d),e["gllassRod"+a].addEventListener(NBDrag.event.DRAG_MOVE,function(){e["gllassRod"+a].removeChild(t)}),n.default.dump({from:r,to:o,startColor:16777215,startAlpha:.3,startCapacity:"100%",tip:"将胶水加入左侧烧杯中",particle:e["particle"+a],endAlpha:.3,isTapPoint:!1,substance:r.medicine,onComplete:function(){r.isOK=!0,(new TimelineMax).add([TweenMax.to(r,.8,{alpha:0,onComplete:function(){e.spoon2.isOK&&e.spoon1.isOK?p():c()}})])},onBack:c})},s=1;s<3;s++)r(s);function l(){this.removeChild(t),instance.NBDownTip.hideTip(),this.test.alpha=0}function d(){var i=this,r=this;this.interactive=!1;var s=0;if(this.hitTest(e.ref1)&&!e.ref1.isHit)s=1,e.ref1.isHit=!0;else{if(!this.hitTest(e.ref2)||e.ref2.isHit)return void TweenMax.to(this,.5,{x:this.startX,y:this.startY,ease:Sine.easeInOut,onComplete:function(){i.addChild(t),i.interactive=!0}});s=2,e.ref2.isHit=!0}TweenMax.killTweensOf(r),TweenMax.to(this,.5,{x:e["tool"+s].x,y:e["tool"+s].y,ease:Sine.easeInOut,onComplete:function(){e["tool"+s].alpha=1,r.visible=!1,e["ani"+s].play(),e["ani"+s].loop=!1,e["ani"+s].animationSpeed=.1,TweenMax.to(e["particle"+s],.8,{alpha:0}),TweenMax.to(e["ani"+s],.2,{alpha:1}),n.default.stir({container:e["beaker"+s],timer:.5,repeat:6,tool:e["tool"+s],endColor:o[s].color,distance:60,endAlpha:o[s].alpha,onComplete:function(){TweenMax.to(e["tool"+s],.5,{alpha:0,onComplete:function(){e.ref1.isHit&&e.ref2.isHit||(e.gllassRod2.visible=!0,TweenMax.to(e.gllassRod2,.5,{alpha:1}),NBDrag.addDrag(e.gllassRod2),e.gllassRod2.addChild(t),e.gllassRod2.point=t),e["beaker"+s].txt.text=a[s-1]}})}})}})}function p(){e.gllassRod1.visible=!0,TweenMax.to(e.gllassRod1,.8,{alpha:1,onComplete:function(){e.gllassRod1.addChild(t),NBDrag.addDrag(e.gllassRod1),e.addChild(e.gllassRod1),instance.NBDownTip.showTip("用玻璃棒进行搅拌")}})}function c(){e.spoon1.isOK||(e.spoon1.test.alpha=1),e.spoon2.isOK||(e.spoon2.test.alpha=1),e.spoon1.isOK?e.spoon2.isOK?p():(e.spoon2.addChild(t),instance.NBDownTip.showTip("将洗发水加入右侧烧杯中")):(e.spoon1.addChild(t),instance.NBDownTip.showTip("将胶水加入左侧烧杯中"))}},start:function(){this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"某些固体物质溶解在水里，能够形成均匀、透明、稳定的溶液。那么，液体也能像食盐和高锰酸钾那样溶解在水中吗？",labName:"液体溶解1",CONCLUSION:"胶水和洗发液可以形成稳定的水溶液均匀的分散在水中。",newLayOut:!0},const:{},event:{}}),e.exports=nb.substance0126},525:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(a(169));var i={},o=Power0.easeNone;function r(e){if(e){var t=e.getTotalCapacity(),a=e.getCurrentCapacity();e.setCapacityTween(98.5*a/t+"%",.2),setTimeout(function(){e.setCapacityTween(101*a/t+"%",.15)},200)}}i.initCapacity=function(e,t){var a=t.color,n=t.alpha,i=t.capacity;void 0!==a&&e.setColor(a,n),void 0!==i&&e.setCurrentCapacity(i)},i.dump=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={},a=Object.assign({isTapPoint:!0,tapPointOffsetX:0,tapPointOffsetY:0,gotoEndTimer:.8,endPointOffsetX:0,endPointOffsetY:0,particleSpeed:1,isGoBack:!0,onBack:function(){}},e),s=a.from,l=a.to,d=a.tapPointOffsetX,p=a.tapPointOffsetY,c=a.isTapPoint,f=a.startColor,h=a.startAlpha,u=a.startCapacity,v=a.endColor,C=a.endAlpha,T=(a.endCapacity,a.tip),m=a.particle,w=a.particleSpeed,g=a.substance,x=a.endPointOffsetX,y=a.endPointOffsetY,P=a.gotoEndTimer,D=a.onInit,M=a.onReady,I=a.onComplete,O=a.isDebug,R=a.isAuto,A=a.isGoBack,S=a.onBack;if(s&&l)return i.initCapacity(l,{color:f,alpha:h,capacity:u}),m&&(m.visible=!1),R||(E(),NBDrag.addDrag(s),s.addEventListener(NBDrag.event.START_DRAG,B),s.addEventListener(NBDrag.event.STOP_DRAG,N),s._dumpStartX=s.x,s._dumpStartY=s.y),b(D),R&&(t.dumpPlay=_),t;function b(e){"function"==typeof e&&e()}function B(){instance.NBDownTip.hideTip();var e=s._dumpTapPoint;e&&(s.removeChild(e),s._dumpTapPoint=null)}function N(){(l.hitBox||l).hitTest(s)?_():A?(NBDrag.removeDrag(s),TweenMax.to(s,.8,{x:s._dumpStartX,y:s._dumpStartY,onComplete:function(){NBDrag.addDrag(s),E(),b(S)}})):E()}function _(){s.removeEventListener(NBDrag.event.START_DRAG,B),s.removeEventListener(NBDrag.event.STOP_DRAG,N),NBDrag.removeDrag(s);var e=m||l,t=e.x,a=e.y,n=new TimelineMax({onComplete:I});if(n.to(s,P,{x:t+x,y:a+y,onComplete:function(){b(M)}}),!O){var i=[TweenMax.to(s,.4,{rotation:"-=0.5"})];if(g&&i.push(TweenMax.to(g.scale,.5,{x:0,y:0})),m){var d=m.totalFrames,p=.05*d*w;i.push(TweenMax.to(m,p,{onStart:function(){m.visible=!0;new TimelineMax;r(l)},onUpdate:function(){},currentFrame:d,ease:o}))}(v||C)&&i.push(l.setColor(v||f,C||h,{timer:.8})),n.add(i)}}function E(){if(c){var e=(0,n.default)(d,p);s._dumpTapPoint=e,s.addChild(e)}T&&instance.NBDownTip.showTip(T)}console.error("请准确传入from, to")},i.stir=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({timer:.6,repeat:6},e),a=t.container,n=t.tool,i=t.endColor,s=t.endAlpha,l=(t.endCapacity,t.distance),d=t.onStart,p=t.onComplete,c=t.repeat,f=t.timer;if(a&&n){void 0===l&&(l=.5*a.width);var h=new TimelineMax({onStart:d,onComplete:p}),u=[TweenMax.to(n,f,{repeat:c,yoyo:!0,x:"+="+l,ease:o,onStart:function(){r(a)}})];return(i||s)&&u.push(a.setColor(i,s,{timer:f*c})),h.add(u),-1===c&&(n.stirStop=function(){TweenMax.killTweensOf(h)}),h}console.error("请准确传入container, tool")},t.default=i}});