webpackJsonp([152],{169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,a){for(var o=new PIXI.Container,i=new PIXI.filters.ColorMatrixFilter,r=n||!1,s=a||{addArrow:!1,type:"horizontal",scale:1},l=new PIXI.Container,d=0;d<3;++d){var c=d+1,p=PIXI.Sprite.fromFrame("TAP_1"+c);p.x=-p.width/2,p.y=-p.height/2;var f=new PIXI.Container;f.addChild(p),l.addChild(f)}var u=0;if(s.direction)switch(s.direction){case"top":u=-Math.PI/2;break;case"bottom":u=Math.PI/2;break;case"left":u=Math.PI;break;case"right":u=0;break;default:u=0}l.filters=[i];for(var v=0;v<l.children.length;v++){var h=l.children[v];h.scale.x=h.scale.y=2,v<2&&y(h,.75*v)}if(o.addChild(l),s.addArrow){var m,T;if(s.direction){m=PIXI.Sprite.fromFrame("oneArrow"),T=new PIXI.extras.MovieClip([m]);var C=s.scale?s.scale:1;T.scale.x=T.scale.y=C,T.pivot={x:0,y:T.height/2},T.rotation=u}else{m=PIXI.Sprite.fromFrame("NBarrow"),(T=new PIXI.extras.MovieClip([m])).pivot={x:T.width/2,y:T.height/2};var w=s.scale?s.scale:1;T.scale.x=T.scale.y=w,"horizontal"!==(s.type?s.type:"horizontal")&&(T.rotation=Math.PI/2)}o.addChild(T),o.arrow=T,o.addEventListener("hideArrow",function(){T.alpha=0,T.visible=!1}),o.addEventListener("showArrow",function(){T.alpha=1,T.visible=!0})}l.alpha=.4;var x=new PIXI.Graphics;function y(e,t){TweenMax.to(e,1.5,{delay:t,alpha:0,repeat:-1}),TweenMax.to(e.scale,1.5,{x:5,y:5,delay:t,repeat:-1})}return x.beginFill(16776960,0),x.drawRect(-50,-50,100,100),o.addChild(x),o.addEventListener(MouseEvent.MOUSE_OVER,function(){l.alpha=.6}),o.addEventListener(MouseEvent.MOUSE_OUT,function(){l.alpha=.4}),o.addEventListener(TouchEvent.TOUCH_BEGIN,function(){o.emit(o.event.TAP),!r&&o.parent&&o.parent.removeChild(o)}),o.x=e,o.y=t,o.setColor=function(e){var t=e>>16,n=e>>8&255,a=255&e;i._loadMatrix([t,0,0,0,0,0,n,0,0,0,0,0,a,0,0,0,0,0,255,0],!1),l.filters=[i]},o.setRotation=function(e){o.rotation=e},o.showAllDir=function(){if(s.direction)for(var e=0;e<3;e++){var t=new PIXI.Container;t.addChild(PIXI.Sprite.fromFrame("oneArrow")),o.addChild(t),t.pivot={x:0,y:T.height/2},t.rotation=Math.PI/2*(e+1)}else{var n=new PIXI.Container;n.addChild(PIXI.Sprite.fromFrame("NBarrow")),o.addChild(n),n.pivot={x:T.width/2,y:T.height/2},n.rotation=o.rotation+Math.PI/2}},o.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&o.scale.set(.6,.6),o}},347:function(e,t,n){"use strict";var a=i(n(525)),o=i(n(169));function i(e){return e&&e.__esModule?e:{default:e}}var r=10040217;nb.substance0638=extendsClass(ScienceMain,{frame0:function(){for(var e=this,t=e.spoon,n=e.beaker,i=e.gllassRod,s=e.kmno4,l=e.kmno4Mask,d=e.cup,c=0;c<6;c++){var p=s["line"+c];p.mask=s.maskBox.children[0],TweenMax.to(p,5*Math.random()+5,{y:0,repeat:-1,ease:Power0.easeNone})}s.mask=l.children[0],i.alpha=0,u(t);var f=a.default.dump({from:t,to:n,startColor:16777215,startAlpha:.3,startCapacity:"100%",endAlpha:.4,substance:t.medicine,isAuto:!0,endPointOffsetX:120,endPointOffsetY:-30,onReady:function(){TweenMax.to(s,4,{y:"+=163",onComplete:function(){TweenMax.to(i,.8,{alpha:1}),u(i),NBDrag.addDrag(i),i.addEventListener(NBDrag.event.START_DRAG,v),i.addEventListener(NBDrag.event.STOP_DRAG,h)}}),TweenMax.to(s,200,{alpha:.7}),n.setColor(r,.3,{timer:200})},onComplete:function(){n.txt.text="高锰酸钾",TweenMax.to([t,d],.8,{alpha:0,onComplete:function(){t.removeAllListeners(),e.removeChild(t),d.removeAllListeners(),e.removeChild(d)}})}});function u(e){var t=(0,o.default)(0,0);e._tapPoint=t,e.addChild(t),instance.NBDownTip.showTip("spoon"===e.name?"舀一勺高锰酸钾放入水中观察现象":"用玻璃棒搅拌烧杯内液体")}function v(){var e=this._tapPoint;e&&this.removeChild(e),instance.NBDownTip.hideTip()}function h(){i.hitTest(n)?TweenMax.to(i,.5,{x:430,y:380,onComplete:function(){a.default.stir({container:n,tool:i,endColor:r,endAlpha:.7,distance:80,onStart:function(){TweenMax.killTweensOf(s),TweenMax.to(s,3.5,{alpha:0})},onComplete:function(){TweenMax.to(i,.8,{alpha:0,onComplete:function(){i.removeAllListeners(),e.removeChild(i)}}),TweenMax.to(n,.8,{x:"+=160",onComplete:function(){i.removeAllListeners(),e.removeChild(i)}}),n.txt.text="高锰酸钾溶液"}})}}):u(i)}t.medicine.visible=!1,NBDrag.addDrag(t),t.addEventListener(NBDrag.event.START_DRAG,v),t.addEventListener(NBDrag.event.STOP_DRAG,function e(){if(t.hitTest(d)){t.removeEventListener(NBDrag.event.START_DRAG,v),t.removeEventListener(NBDrag.event.STOP_DRAG,e);var n=d.x,a=d.y,o=new TimelineMax({onComplete:f.dumpPlay});o.to(t,.5,{x:n,y:a-20,onComplete:function(){t.medicine.visible=!0}}),o.to(t,.5,{rotation:"+=0.3",repeat:1,yoyo:!0})}else u(t)})},start:function(){this.menu.addStepFromObj(this.info),this.menu.setExperimentName(this.info.labName),this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"人们常用高锰酸钾来消毒和防腐。它是什么样子的？它进入水中是否溶解呢？",labName:"高锰酸钾的溶解",CONCLUSION:"高猛酸钾进入水中就往下扩散，划出一条条纵向的紫色线条，下面的水变红了，搅拌后高锰酸钾看不见紫色的颗粒，逐渐分散到水中去紫色均匀了。",newLayOut:!0},const:{},event:{}}),e.exports=nb.substance0638},525:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(n(169));var o={},i=Power0.easeNone;function r(e){if(e){var t=e.getTotalCapacity(),n=e.getCurrentCapacity();e.setCapacityTween(98.5*n/t+"%",.2),setTimeout(function(){e.setCapacityTween(101*n/t+"%",.15)},200)}}o.initCapacity=function(e,t){var n=t.color,a=t.alpha,o=t.capacity;void 0!==n&&e.setColor(n,a),void 0!==o&&e.setCurrentCapacity(o)},o.dump=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={},n=Object.assign({isTapPoint:!0,tapPointOffsetX:0,tapPointOffsetY:0,gotoEndTimer:.8,endPointOffsetX:0,endPointOffsetY:0,particleSpeed:1,isGoBack:!0,onBack:function(){}},e),s=n.from,l=n.to,d=n.tapPointOffsetX,c=n.tapPointOffsetY,p=n.isTapPoint,f=n.startColor,u=n.startAlpha,v=n.startCapacity,h=n.endColor,m=n.endAlpha,T=(n.endCapacity,n.tip),C=n.particle,w=n.particleSpeed,x=n.substance,y=n.endPointOffsetX,P=n.endPointOffsetY,M=n.gotoEndTimer,A=n.onInit,g=n.onReady,D=n.onComplete,I=n.isDebug,S=n.isAuto,O=n.isGoBack,_=n.onBack;if(s&&l)return o.initCapacity(l,{color:f,alpha:u,capacity:v}),C&&(C.visible=!1),S||(R(),NBDrag.addDrag(s),s.addEventListener(NBDrag.event.START_DRAG,b),s.addEventListener(NBDrag.event.STOP_DRAG,B),s._dumpStartX=s.x,s._dumpStartY=s.y),N(A),S&&(t.dumpPlay=E),t;function N(e){"function"==typeof e&&e()}function b(){instance.NBDownTip.hideTip();var e=s._dumpTapPoint;e&&(s.removeChild(e),s._dumpTapPoint=null)}function B(){(l.hitBox||l).hitTest(s)?E():O?(NBDrag.removeDrag(s),TweenMax.to(s,.8,{x:s._dumpStartX,y:s._dumpStartY,onComplete:function(){NBDrag.addDrag(s),R(),N(_)}})):R()}function E(){s.removeEventListener(NBDrag.event.START_DRAG,b),s.removeEventListener(NBDrag.event.STOP_DRAG,B),NBDrag.removeDrag(s);var e=C||l,t=e.x,n=e.y,a=new TimelineMax({onComplete:D});if(a.to(s,M,{x:t+y,y:n+P,onComplete:function(){N(g)}}),!I){var o=[TweenMax.to(s,.4,{rotation:"-=0.5"})];if(x&&o.push(TweenMax.to(x.scale,.5,{x:0,y:0})),C){var d=C.totalFrames,c=.05*d*w;o.push(TweenMax.to(C,c,{onStart:function(){C.visible=!0;new TimelineMax;r(l)},onUpdate:function(){},currentFrame:d,ease:i}))}(h||m)&&o.push(l.setColor(h||f,m||u,{timer:.8})),a.add(o)}}function R(){if(p){var e=(0,a.default)(d,c);s._dumpTapPoint=e,s.addChild(e)}T&&instance.NBDownTip.showTip(T)}console.error("请准确传入from, to")},o.stir=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({timer:.6,repeat:6},e),n=t.container,a=t.tool,o=t.endColor,s=t.endAlpha,l=(t.endCapacity,t.distance),d=t.onStart,c=t.onComplete,p=t.repeat,f=t.timer;if(n&&a){void 0===l&&(l=.5*n.width);var u=new TimelineMax({onStart:d,onComplete:c}),v=[TweenMax.to(a,f,{repeat:p,yoyo:!0,x:"+="+l,ease:i,onStart:function(){r(n)}})];return(o||s)&&v.push(n.setColor(o,s,{timer:f*p})),u.add(v),-1===p&&(a.stirStop=function(){TweenMax.killTweensOf(u)}),u}console.error("请准确传入container, tool")},t.default=o}});