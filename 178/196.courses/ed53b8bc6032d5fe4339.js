webpackJsonp([196],{169:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){for(var i=new PIXI.Container,r=new PIXI.filters.ColorMatrixFilter,o=a||!1,s=n||{addArrow:!1,type:"horizontal",scale:1},d=new PIXI.Container,v=0;v<3;++v){var l=v+1,h=PIXI.Sprite.fromFrame("TAP_1"+l);h.x=-h.width/2,h.y=-h.height/2;var c=new PIXI.Container;c.addChild(h),d.addChild(c)}var p=0;if(s.direction)switch(s.direction){case"top":p=-Math.PI/2;break;case"bottom":p=Math.PI/2;break;case"left":p=Math.PI;break;case"right":p=0;break;default:p=0}d.filters=[r];for(var f=0;f<d.children.length;f++){var u=d.children[f];u.scale.x=u.scale.y=2,f<2&&g(u,.75*f)}if(i.addChild(d),s.addArrow){var T,w;if(s.direction){T=PIXI.Sprite.fromFrame("oneArrow"),w=new PIXI.extras.MovieClip([T]);var x=s.scale?s.scale:1;w.scale.x=w.scale.y=x,w.pivot={x:0,y:w.height/2},w.rotation=p}else{T=PIXI.Sprite.fromFrame("NBarrow"),(w=new PIXI.extras.MovieClip([T])).pivot={x:w.width/2,y:w.height/2};var m=s.scale?s.scale:1;w.scale.x=w.scale.y=m,"horizontal"!==(s.type?s.type:"horizontal")&&(w.rotation=Math.PI/2)}i.addChild(w),i.arrow=w,i.addEventListener("hideArrow",function(){w.alpha=0,w.visible=!1}),i.addEventListener("showArrow",function(){w.alpha=1,w.visible=!0})}d.alpha=.4;var b=new PIXI.Graphics;function g(e,t){TweenMax.to(e,1.5,{delay:t,alpha:0,repeat:-1}),TweenMax.to(e.scale,1.5,{x:5,y:5,delay:t,repeat:-1})}return b.beginFill(16776960,0),b.drawRect(-50,-50,100,100),i.addChild(b),i.addEventListener(MouseEvent.MOUSE_OVER,function(){d.alpha=.6}),i.addEventListener(MouseEvent.MOUSE_OUT,function(){d.alpha=.4}),i.addEventListener(TouchEvent.TOUCH_BEGIN,function(){i.emit(i.event.TAP),!o&&i.parent&&i.parent.removeChild(i)}),i.x=e,i.y=t,i.setColor=function(e){var t=e>>16,a=e>>8&255,n=255&e;r._loadMatrix([t,0,0,0,0,0,a,0,0,0,0,0,n,0,0,0,0,0,255,0],!1),d.filters=[r]},i.setRotation=function(e){i.rotation=e},i.showAllDir=function(){if(s.direction)for(var e=0;e<3;e++){var t=new PIXI.Container;t.addChild(PIXI.Sprite.fromFrame("oneArrow")),i.addChild(t),t.pivot={x:0,y:w.height/2},t.rotation=Math.PI/2*(e+1)}else{var a=new PIXI.Container;a.addChild(PIXI.Sprite.fromFrame("NBarrow")),i.addChild(a),a.pivot={x:w.width/2,y:w.height/2},a.rotation=i.rotation+Math.PI/2}},i.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&i.scale.set(.6,.6),i}},453:function(e,t,a){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}}(a(169));nb.substance0632=extendsClass(ScienceMain,{frame0:function(){var e=this,t=e.step0,a=e.step1,i=e.tab0,r=e.tab1,o=Power0.easeNone,s=[function(){s[0]=null;var e=t,a=[],i=0,r=40,d=15,v=.5,l=e.right,h=e.left,c=e.tubeMask,p=e.rice,f=e.tube,u=e.btn0,T=e.btn1;function w(){if(p.hitTest(f)){NBDrag.removeDrag(p),p.removeEventListener(NBDrag.event.STOP_DRAG,w);var e=a[0],t=e.x,n=e.y;TweenMax.to(p,v,{x:t,y:n,onComplete:function(){u.visible=T.visible=!0}})}}function x(){b(!0),u.visible=T.visible=!1}function m(){b(),u.visible=T.visible=!1}function b(e){if(!TweenMax.isTweening(h)&&!TweenMax.isTweening(l)){if(i>=a.length)return i=0,void(u.visible=T.visible=!0);var t=new TimelineMax({onComplete:function(){b(e)}});if(0===i){var n=a[0],s=n.x,c=n.y;l.x=s+r,h.x=s-r,l.y=h.y=c,l.handBitmap.alpha=h.handBitmap.alpha=0,p.x=s,p.y=c,t.to(p,v,{alpha:1})}var f=a[i],w=f.x,x=f.y;0!==i&&e&&(t.add([TweenMax.to(h,v,{ease:o,x:"-="+(r-d)}),TweenMax.to(l,v,{ease:o,x:"+="+(r-d)})]),t.add([TweenMax.to(h,v,{ease:o,x:w-r,y:x}),TweenMax.to(l,v,{ease:o,x:w+r,y:x})]));var m=[TweenMax.to([l.handBitmap,h.handBitmap],v,{ease:o,alpha:1}),TweenMax.to(h,v,{ease:o,x:w-d,y:x}),TweenMax.to(l,v,{ease:o,x:w+d,y:x})],g=v,y=0;if(e&&(g=y=v/2),i<a.length-1){var A=a[i+1],M=A.x,P=A.y;m.push(TweenMax.to(p,g,{x:M,y:P,ease:o,delay:y}))}else m.push(TweenMax.to(p,g,{y:"+=100",alpha:0,ease:o,delay:y}));t.add(m),i+=1}}return function(){u.visible=T.visible=!1;for(var t=0;t<6;t++){var i=e["p"+t];a.push(i)}var o=a[0],s=o.x,d=o.y;l.x=s+r,h.x=s-r,l.y=h.y=d,l.handBitmap.alpha=h.handBitmap.alpha=0,l.pre.mask=h.pre.mask=c.children[0],p.x=900,p.y=400,p._tap&&p.removeChild(p._tap),p._tap=(0,n.default)(0,0),p.addChild(p._tap),instance.NBDownTip.showTip("将米饭放入透明软管中"),NBDrag.addDrag(p),p.addEventListener(NBDrag.event.STOP_DRAG,w),u.addEventListener(TouchEvent.TAP,x),T.addEventListener(TouchEvent.TAP,m)}(),{removeEvent:function(){NBDrag.removeDrag(p),p.removeEventListener(NBDrag.event.STOP_DRAG,w),u.removeEventListener(TouchEvent.TAP,x),T.removeEventListener(TouchEvent.TAP,m)}}},function(){s[1]=null;var e=a,t=e.hands,i=e.bag,r=e.food,d=e.btn,v=e.cap,l=e.water,h=e.waterTarget,c=0,p=!1,f=!1,u=i.totalFrames,T=t.totalFrames/30,w=.8;function x(){this._tapPoint&&this.removeChild(this._tapPoint),instance.NBDownTip.hideTip()}function m(){function e(e){var t=e.tap,a=t.x,i=t.y,r=(0,n.default)(a,i);e.addChild(r),e._tapPoint=r,instance.NBDownTip.showTip("将水和蔬菜水果放入塑料袋中")}v.interactive=r.interactive=!0,p?f?function(){var e=t.x,a=t.y;TweenMax.to([i,l,r],w,{x:e,y:a,onComplete:function(){d.visible=!0}})}():e(v):e(r)}function b(){if(r.area.hitTest(i.area)){v.interactive=r.interactive=!1,NBDrag.removeDrag(r),r.removeEventListener(NBDrag.event.START_DRAG,x),r.removeEventListener(NBDrag.event.STOP_DRAG,b),p=!0;var e=i.x,t=i.y;TweenMax.to(r,w,{x:e,y:t,onComplete:m})}else m()}function g(){if(v.area.hitTest(i.area)){v.interactive=r.interactive=!1,v.removeEventListener(NBDrag.event.START_DRAG,x),v.removeEventListener(NBDrag.event.STOP_DRAG,g),f=!0;var e=h.x,t=h.y,a=new TimelineMax({onComplete:m});a.to(v,w,{x:e,y:t}),a.add([TweenMax.to(v,w,{rotation:-Math.PI/2}),TweenMax.to(v.water,w,{alpha:0}),TweenMax.to(l,w,{alpha:1})]),a.to(v,w,{alpha:0})}else m()}function y(){t.gotoAndStop(0),i.gotoAndStop(0),r.gotoAndStop(0),t.visible=!0,function e(){if(TweenMax.isTweening(t)||c>u)return c=0,t.visible=!1,void(d.visible=!0);t.gotoAndStop(0);TweenMax.to(t,T,{currentFrame:t.totalFrames,ease:o,onComplete:function(){(c+=1)<=u&&(i.gotoAndStop(c),r.gotoAndStop(c),l.gotoAndStop(c)),e()}})}(),d.visible=!1}t.visible=!1,d.visible=!1,l.alpha=0,NBDrag.addDrag(r),NBDrag.addDrag(v),r.addEventListener(NBDrag.event.START_DRAG,x),r.addEventListener(NBDrag.event.STOP_DRAG,b),v.addEventListener(NBDrag.event.START_DRAG,x),v.addEventListener(NBDrag.event.STOP_DRAG,g),d.addEventListener(TouchEvent.TAP,y),m()}];function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;instance.NBDownTip.hideTip(),s[t]&&s[t](),e["step"+t].visible=!0,e["step"+Math.abs(1-t)].visible=!1,e["tab"+t].gotoAndStop(1),e["tab"+Math.abs(1-t)].gotoAndStop(0)}d(),i.addEventListener(TouchEvent.TAP,function(){d(0)}),r.addEventListener(TouchEvent.TAP,function(){d(1)})},start:function(){this.menu.addStepFromObj(this.info),this.menu.setExperimentName(this.info.labName),this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"食道怎么将食物送人胃？胃怎么将食物磨碎？",labName:"模拟部分消化过程",CONCLUSION:"食道光滑，通过蠕动方式将食物从口腔送入胃；胃像个袋子，通过蠕动的方式将食物磨碎。",newLayOut:!0},const:{},event:{}}),e.exports=nb.substance0632}});