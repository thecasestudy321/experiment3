webpackJsonp([133],{169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,a){for(var i=new PIXI.Container,r=new PIXI.filters.ColorMatrixFilter,o=n||!1,s=a||{addArrow:!1,type:"horizontal",scale:1},d=new PIXI.Container,l=0;l<3;++l){var c=l+1,h=PIXI.Sprite.fromFrame("TAP_1"+c);h.x=-h.width/2,h.y=-h.height/2;var u=new PIXI.Container;u.addChild(h),d.addChild(u)}var f=0;if(s.direction)switch(s.direction){case"top":f=-Math.PI/2;break;case"bottom":f=Math.PI/2;break;case"left":f=Math.PI;break;case"right":f=0;break;default:f=0}d.filters=[r];for(var v=0;v<d.children.length;v++){var g=d.children[v];g.scale.x=g.scale.y=2,v<2&&I(g,.75*v)}if(i.addChild(d),s.addArrow){var p,P;if(s.direction){p=PIXI.Sprite.fromFrame("oneArrow"),P=new PIXI.extras.MovieClip([p]);var w=s.scale?s.scale:1;P.scale.x=P.scale.y=w,P.pivot={x:0,y:P.height/2},P.rotation=f}else{p=PIXI.Sprite.fromFrame("NBarrow"),(P=new PIXI.extras.MovieClip([p])).pivot={x:P.width/2,y:P.height/2};var E=s.scale?s.scale:1;P.scale.x=P.scale.y=E,"horizontal"!==(s.type?s.type:"horizontal")&&(P.rotation=Math.PI/2)}i.addChild(P),i.arrow=P,i.addEventListener("hideArrow",function(){P.alpha=0,P.visible=!1}),i.addEventListener("showArrow",function(){P.alpha=1,P.visible=!0})}d.alpha=.4;var T=new PIXI.Graphics;function I(e,t){TweenMax.to(e,1.5,{delay:t,alpha:0,repeat:-1}),TweenMax.to(e.scale,1.5,{x:5,y:5,delay:t,repeat:-1})}return T.beginFill(16776960,0),T.drawRect(-50,-50,100,100),i.addChild(T),i.addEventListener(MouseEvent.MOUSE_OVER,function(){d.alpha=.6}),i.addEventListener(MouseEvent.MOUSE_OUT,function(){d.alpha=.4}),i.addEventListener(TouchEvent.TOUCH_BEGIN,function(){i.emit(i.event.TAP),!o&&i.parent&&i.parent.removeChild(i)}),i.x=e,i.y=t,i.setColor=function(e){var t=e>>16,n=e>>8&255,a=255&e;r._loadMatrix([t,0,0,0,0,0,n,0,0,0,0,0,a,0,0,0,0,0,255,0],!1),d.filters=[r]},i.setRotation=function(e){i.rotation=e},i.showAllDir=function(){if(s.direction)for(var e=0;e<3;e++){var t=new PIXI.Container;t.addChild(PIXI.Sprite.fromFrame("oneArrow")),i.addChild(t),t.pivot={x:0,y:P.height/2},t.rotation=Math.PI/2*(e+1)}else{var n=new PIXI.Container;n.addChild(PIXI.Sprite.fromFrame("NBarrow")),i.addChild(n),n.pivot={x:P.width/2,y:P.height/2},n.rotation=i.rotation+Math.PI/2}},i.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&i.scale.set(.6,.6),i}},477:function(e,t,n){"use strict";var a=function(e){return e&&e.__esModule?e:{default:e}}(n(524));nb.substance0660=extendsClass(ScienceMain,{frame0:function(){var e=this,t=[],n=[];!function(){for(var a=e.txt0,i=0;i<9;i++){var r=e["area"+i];r.points=[{x:r.x+r.width/2-a.width/2,y:r.y+r.height/2-a.height/2}],t.push(r)}for(var o=0;o<9;o++){var s=e["txt"+o];s.yu=o<6?o%2==0?[t[o],t[o+1]]:[t[o],t[o-1]]:[t[6],t[7],t[8]],n.push(s)}}();var i=a.default.classify(n,t,{isHidePosShadow:!0,isHideDragShadow:!0,isShowTapPoint:!1});console.log(i)},start:function(){this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"人体的活动需要各个器官协同工作，举个例子看看。",labName:"人体器官协同工作",title0:"人",CONCLUSION:"从例子可以看出，人的活动需要多个器官协同工作。",noTitle:!0,newLayOut:!0},const:{},event:{}}),e.exports=nb.substance0660},524:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e&&e.__esModule?e:{default:e}}(n(169));var i={event:{ERROR:"dragError",RIGHT:"dragRight",START_DRAG:"rankStart",STOP_DRAG:"rankStop",STOP_DRAG_DELAY:"rankStopDelay",BACK:"goBack",EXCHANGE:"exchange",HITTED_AREA:"hitArea",REACHED:"reached",INIT_COMPLETE:"initComplete",CHANGE_AREA:"changedArea"}};i.classify=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||!t)return console.error("请传入必要参数objs, areas"),!1;var r=new PIXI.Sprite;function o(e){return{staticClone:e.staticShadow,areaClone:e.cloneObjs}}function s(e){var n=e.target;n.emit(i.event.START_DRAG),r.emit(i.event.START_DRAG),n.parent.addChild(n),r.isShowErr&&(n.err.alpha=0),r.isShowTapPoint&&n.removeChild(n.tapPoint),r.initDragPos=-1;for(var a=0;a<t.length;a++){var o=t[a];if(r.dragIndex=o.containObjs.indexOf(n),r.dragIndex>-1){o.containObjs.splice(r.dragIndex,1),r.initDragPos=o.id;break}}}function d(e){if(!r.isHideDragShadow){var n,a=e.target;if(n=a.hitTest2(t)){var i=a.cloneObjs[n.id],o=n.points,s=n.containObjs.length;r.initDragPos===n.id&&(s=r.dragIndex);var d=a.hitTest2(n.containObjs),l=r.initDragPos===n.id,c=r.initDragPos!==n.id&&!d;s<n.points.length&&(l||c)?(i.position.set(o[s].x,o[s].y),TweenMax.to(a.cloneObjs,r.VIR_TIMER,{alpha:0}),TweenMax.to(i,r.VIR_TIMER,{alpha:.3})):TweenMax.to(a.cloneObjs,r.VIR_TIMER,{alpha:0})}else TweenMax.to(a.cloneObjs,r.VIR_TIMER,{alpha:0})}}function l(n){var a=n.target;r.isHideDragShadow||(TweenMax.killTweensOf(a.cloneObjs),f(a.cloneObjs,"alpha",0));var o=null;if(o=a.hitTest2(t),a.emit(i.event.STOP_DRAG,null!==o),r.emit(i.event.STOP_DRAG,null!==o),f(e,"interactive",!1),setTimeout(function(){a.emit(i.event.STOP_DRAG_DELAY,{dragObj:a,area:o}),r.emit(i.event.STOP_DRAG_DELAY,{dragObj:a,area:o}),f(e,"interactive",!0),r.isShowTapPoint&&function(){for(var t=0;t<e.length;t++){var n=e[t];if(!n.hitted){n.addChild(n.tapPoint);break}}}()},1e3*r.MOVE_TIMER),a.currentArea=o,o){a.emit(i.event.HITTED_AREA,{area:o}),r.emit(i.event.HITTED_AREA,{area:o}),a.hitted=!0;var s=o.containObjs.length,d=o.points;if(r.initDragPos===o.id)s=r.dragIndex,o.containObjs.splice(r.dragIndex,0,a),TweenMax.to(a,r.MOVE_TIMER,{x:d[s].x,y:d[s].y,onComplete:function(){c(a,o)}}),a.currentPos=d[s];else{r.emit(i.event.CHANGE_AREA,{changed:!0});var l=null,v=0,g=o.containObjs;if(l=a.hitTest2(g)){v=g.indexOf(l),g.splice(v,1);var p=null;r.initDragPos>=0?(p=a.currentPos,t[r.initDragPos].containObjs.splice(r.dragIndex,0,l),l.currentArea=t[r.initDragPos]):p=l._defaultPos,r.danYu&&(l.curYu=null),TweenMax.to(l,r.MOVE_TIMER,{x:p.x,y:p.y}),TweenMax.to(a,r.MOVE_TIMER,{x:l.currentPos.x,y:l.currentPos.y,onComplete:function(){c(a,o),r.initDragPos>=0?c(l,t[r.initDragPos]):h(l)}}),a.currentPos=l.currentPos,l.currentPos=p,o.containObjs.splice(v,0,a),a.emit(i.event.EXCHANGE,l),r.emit(i.event.EXCHANGE,l)}else{if(s<o.points.length)TweenMax.to(a,r.MOVE_TIMER,{x:d[s].x,y:d[s].y,onComplete:function(){c(a,o)}}),a.currentPos=d[s];else{var P=g.pop();r.initDragPos<0?(TweenMax.to(P,r.MOVE_TIMER,{x:P._defaultX,y:P._defaultY,onComplete:function(){h(P)}}),P.currentPos=P._defaultPos):(TweenMax.to(P,r.MOVE_TIMER,{x:a.currentPos.x,y:a.currentPos.y,onComplete:function(){c(P,t[r.initDragPos])}}),P.currentPos=a.currentPos,t[r.initDragPos].containObjs.splice(r.dragIndex,0,P)),TweenMax.to(a,r.MOVE_TIMER,{x:d[d.length-1].x,y:d[d.length-1].y,onComplete:function(){c(a,o)}}),a.currentPos=d[d.length-1],a.emit(i.event.EXCHANGE,P),r.emit(i.event.EXCHANGE,P)}r.initDragPos>=0&&s<o.points.length&&u(t[r.initDragPos].containObjs,t[r.initDragPos].points)}}o.containObjs.indexOf(a)<0&&o.containObjs.push(a)}else r.danYu&&r.emit(i.event.CHANGE_AREA,{changed:!0}),a.curYu&&(a.curYu=null),TweenMax.to(a,r.MOVE_TIMER,{x:a._defaultX,y:a._defaultY,onComplete:function(){h(a)}}),r.initDragPos>=0&&u(t[r.initDragPos].containObjs,t[r.initDragPos].points)}function c(e,t){var n=!1;e.curYu=t;var a=e.yu;if(a instanceof Array){for(var o=0;o<a.length;o++)if(a[o]===t){n=!0;break}}else a===t&&(n=!0);n?(e.emit(i.event.RIGHT,{area:t}),r.emit(i.event.RIGHT,{area:t}),r.isShowErr&&(e.err.alpha=0)):(e.emit(i.event.ERROR,{area:t}),r.emit(i.event.ERROR,{area:t}),r.isShowErr&&r.immediatelyShowArr&&(e.err.alpha=1)),r.emit(i.event.REACHED,{target:e,area:t,containObjs:t.containObjs})}function h(e){e.emit(i.event.BACK),r.emit(i.event.BACK),r.isShowErr&&(e.err.alpha=0)}function u(e,t){for(var n=0;n<e.length;n++){var a=t[n];TweenMax.to(e[n],r.MOVE_TIMER,{x:a.x,y:a.y}),e[n].currentPos=a}}function f(e,t,n){for(var a=0;a<e.length;a++)e[a][t]=n}function v(e){for(var t=-1,n=null,a=0;a<e.length;a++){var i=this.hitTest(e[a]);i&&i>t&&(t=i,n=e[a])}return t>-1?n:null}return r.VIR_TIMER=0,r.MOVE_TIMER=.5,r.isShowErr=!0,r.isShowTapPoint=!0,r.isHideDragShadow=!1,r.isHidePosShadow=!1,r.danYu=!1,r.initDragPos=-1,r.dragIndex=-1,r.immediatelyShowArr=!0,n&&(r.isShowErr=void 0===n.isShowErr||n.isShowErr,r.immediatelyShowArr=void 0===n.immediatelyShowArr||n.immediatelyShowArr,r.isShowTapPoint=void 0===n.isShowTapPoint||n.isShowTapPoint,r.isHideDragShadow=n.isHideDragShadow,r.isHidePosShadow=n.isHidePosShadow,r.danYu=void 0!==n.danYu&&n.danYu),function(){e.forEach(function(e){e._defaultX=e.x,e._defaultY=e.y,e._defaultPos=e.position.clone(),e.currentPos=e.position.clone(),e.hitTest2=v;var n=e.getLocalBounds();if(e.background&&(n=e.background.getLocalBounds()),r.isShowErr){var i=PIXI.Sprite.fromFrame("err"),c=new PIXI.extras.MovieClip([i]);if(e.addChild(c),c.position.set(n.width+n.x-c.width,n.y+n.height-c.width),e.background){var h=e.background;c.position.set(h.x+h.width+n.x-c.width/2,n.y+h.y+h.height-c.height/2)}e.errPos&&(c.pivot.set(c.width/2,c.height/2),c.position.set(e.errPos.x,e.errPos.y)),e.err=c,c.alpha=0}if(r.isShowTapPoint){var u=(0,a.default)(n.width/2+n.x,n.height/2+n.y);if(e.tapPointPos&&u.position.set(e.tapPointPos.x,e.tapPointPos.y),e.background){var f=e.background;u.position.set(f.x+f.width/2+n.x,f.y+f.height/2+n.y)}e.tapPoint=u}var g=e.name;if(!r.isHidePosShadow){var p=void 0;if(e.background){var P=e.background;p=e.background.clone(),e.background.name=p.name,e.parent.addChildAt(p,0),e.background=P,p.position.set(e.x,e.y),p.alpha=.3}else(p=e.clone()).alpha=.3;e.staticShadow=p}if(!r.isHideDragShadow){for(var w=[],E=0;E<t.length;E++){var T=null;if(e.background){var I=e.background;T=e.background.clone(),e.background.name=T.name,e.background=I}else T=e.clone();e.parent.addChild(T),T.alpha=0,w.push(T)}e.cloneObjs=w}e.name=g,NBDrag.addDrag(e),e.addEventListener(NBDrag.event.START_DRAG,s),e.addEventListener(NBDrag.event.DRAG_MOVE,d),e.addEventListener(NBDrag.event.STOP_DRAG,l),e.getClone=function(){return o(e)}}),r.isShowTapPoint&&e[0].addChild(e[0].tapPoint);for(var i=0;i<t.length;i++){var c=t[i];c.id=i,n.hasObjs?c.containObjs=n.hasObjs[i]:c.containObjs=[]}}(),n.callback&&"function"==typeof n.callback&&n.callback(),r.reset=function(){e.forEach(function(t){TweenMax.to(t,.5,{x:t._defaultX,y:t._defaultY,onComplete:function(){e[0].tapPoint&&e[0].addChild(e[0].tapPoint)}}),t.currentPos=t._defaultPos,t.hitted=!1,t.err&&(t.err.alpha=0),t.tapPoint&&t.removeChild(t.tapPoint)}),t.forEach(function(e){e.containObjs=[]})},r.setDrag=function(t){t?e.forEach(function(e){NBDrag.addDrag(e)}):e.forEach(function(e){NBDrag.removeDrag(e),e.removeChild(e.tapPoint),e.removeEventListener(NBDrag.event.START_DRAG,s),e.removeEventListener(NBDrag.event.DRAG_MOVE,d),e.removeEventListener(NBDrag.event.STOP_DRAG,l)})},r.togetherShowArr=function(){if(!r.immediatelyShowArr)for(var t=0;t<e.length;t++)"undefined"!==e[t].curYu&&null!==e[t].curYu&&"undefined"!==e[t].yu&&e[t].curYu!==e[t].yu&&1!==e[t].err.alpha&&TweenMax.to(e[t].err,.3,{alpha:1})},r.getClone=o,r.getContainObjs=function(e){return e.containObjs},r.getArea=function(e){return e.currentArea},r},t.default=i}});