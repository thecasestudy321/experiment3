webpackJsonp([61],{169:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,n){for(var i=new PIXI.Container,r=new PIXI.filters.ColorMatrixFilter,o=a||!1,s=n||{addArrow:!1,type:"horizontal",scale:1},d=new PIXI.Container,l=0;l<3;++l){var c=l+1,h=PIXI.Sprite.fromFrame("TAP_1"+c);h.x=-h.width/2,h.y=-h.height/2;var u=new PIXI.Container;u.addChild(h),d.addChild(u)}var v=0;if(s.direction)switch(s.direction){case"top":v=-Math.PI/2;break;case"bottom":v=Math.PI/2;break;case"left":v=Math.PI;break;case"right":v=0;break;default:v=0}d.filters=[r];for(var g=0;g<d.children.length;g++){var f=d.children[g];f.scale.x=f.scale.y=2,g<2&&A(f,.75*g)}if(i.addChild(d),s.addArrow){var p,P;if(s.direction){p=PIXI.Sprite.fromFrame("oneArrow"),P=new PIXI.extras.MovieClip([p]);var E=s.scale?s.scale:1;P.scale.x=P.scale.y=E,P.pivot={x:0,y:P.height/2},P.rotation=v}else{p=PIXI.Sprite.fromFrame("NBarrow"),(P=new PIXI.extras.MovieClip([p])).pivot={x:P.width/2,y:P.height/2};var x=s.scale?s.scale:1;P.scale.x=P.scale.y=x,"horizontal"!==(s.type?s.type:"horizontal")&&(P.rotation=Math.PI/2)}i.addChild(P),i.arrow=P,i.addEventListener("hideArrow",function(){P.alpha=0,P.visible=!1}),i.addEventListener("showArrow",function(){P.alpha=1,P.visible=!0})}d.alpha=.4;var _=new PIXI.Graphics;function A(e,t){TweenMax.to(e,1.5,{delay:t,alpha:0,repeat:-1}),TweenMax.to(e.scale,1.5,{x:5,y:5,delay:t,repeat:-1})}return _.beginFill(16776960,0),_.drawRect(-50,-50,100,100),i.addChild(_),i.addEventListener(MouseEvent.MOUSE_OVER,function(){d.alpha=.6}),i.addEventListener(MouseEvent.MOUSE_OUT,function(){d.alpha=.4}),i.addEventListener(TouchEvent.TOUCH_BEGIN,function(){i.emit(i.event.TAP),!o&&i.parent&&i.parent.removeChild(i)}),i.x=e,i.y=t,i.setColor=function(e){var t=e>>16,a=e>>8&255,n=255&e;r._loadMatrix([t,0,0,0,0,0,a,0,0,0,0,0,n,0,0,0,0,0,255,0],!1),d.filters=[r]},i.setRotation=function(e){i.rotation=e},i.showAllDir=function(){if(s.direction)for(var e=0;e<3;e++){var t=new PIXI.Container;t.addChild(PIXI.Sprite.fromFrame("oneArrow")),i.addChild(t),t.pivot={x:0,y:P.height/2},t.rotation=Math.PI/2*(e+1)}else{var a=new PIXI.Container;a.addChild(PIXI.Sprite.fromFrame("NBarrow")),i.addChild(a),a.pivot={x:P.width/2,y:P.height/2},a.rotation=i.rotation+Math.PI/2}},i.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&i.scale.set(.6,.6),i}},454:function(e,t,a){"use strict";var n=r(a(524)),i=r(a(520));function r(e){return e&&e.__esModule?e:{default:e}}nb.substance0634=extendsClass(ScienceMain,{frame0:function(){for(var e=this,t=e.timeline,a=.8,r=[],o=0;o<4;o++){var s=e["step"+o];r.push(s),s.visible=!1}function d(t){var a=e["step"+t];a._isInit||(!function(e){var t=[],a=[],i=0,r=null,o=null;do{if(r=e["o"+i],o=e["box"+i],!r||!o)break;var s=r.yu=o,d=s.x,u=s.y;o.points=[new PIXI.Point(d,u)],t.push(r),r.addEventListener(n.default.event.BACK,c),r.addEventListener(TouchEvent.TOUCH_BEGIN,l),a.push(o),i++}while(r&&o);e._rankObjs=t.sort(function(e,t){return e.x-t.x}),e._rankAreas=a;var v=e._rank=n.default.classify(t,a,{isHidePosShadow:!0});v._step=e,v.addEventListener(n.default.event.REACHED,h)}(a),a._isInit=!0);for(var i=r.length,o=0;o<i;o++)r[o].visible=o===t}function l(){this.txt0.visible=!1,this.__nowArea&&(this.__nowArea.txt.text="",this.__nowArea=null)}function c(){this.txt0.visible=!0,this.__nowArea&&(this.__nowArea=null)}function h(e){var t=e.target,n=e.area;t.__nowArea=n,n.txt.text=t.txt0.text,t.txt0.visible=!1;for(var i=this,r=i._step,o=r._rankAreas,s=r._rankObjs,d=o.length,l=0;l<d;l++){var c=o[l];if(c){var h=i.getContainObjs(c)[0];if(!h)return;if(c.name.substr(-1)!==h.name.substr(-1))return}}i.setDrag(!1);var u=r.arrs,v=r.title,g=r.tip,f=r.ani;s.forEach(function(e){u.addChildWithSamePos(e)}),TweenMax.to(o,a,{alpha:0}),TweenMax.to([v,g],a,{alpha:0}),TweenMax.to(u,a,{y:500}),TweenMax.to(u.scale,a,{y:.6,x:.6,onComplete:function(){f.animationSpeed=.21,f.play()}})}d(0),i.default.init.apply(t),t.addEventListener(i.default.event.CLICK_NODE_REACHED,function(e){d(e.index>>0)})},start:function(){this.menu.addStepFromObj(this.info),this.menu.setExperimentName(this.info.labName),this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"生物之间这种像链环一样的食物关系叫做食物链，试着完成下面的食物链",labName:"食物链",CONCLUSION:"生物的生存除了需要一定的自然条件外，它们彼此之间也是相互依赖、相互影响的。",newLayOut:!0},const:{},event:{}}),e.exports=nb.substance0634},520:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={event:{CLICK_NODE:"nodeTap",CLICK_NODE_REACHED:"nodeTapReached",ON_COMPLETE:"timelineComplete",ON_PLAY:"timelinePlaying",REACHED_NODE:"reachedNode",START_DRAG:"startDrag",DRAGING:"draging",STOP_DRAG:"stopDrag"},init:function(){var e,t,a=this;if(a.bgMask){var i=a.bgMask.getChildAt(0);a.progressBar.mask=i,i.scale.x=0}var r=this.a0.x===this.a1.x?"vertical":"horizontal",o=0,s=[];a.drag.lastPos={x:a.drag.x,y:a.drag.y};for(var d=0;d<int.MAX_VALUE;d++){var l=this["a"+d];if(void 0===l){t="vertical"===r?this["a"+(d-1)].y:this["a"+(d-1)].x,o=d;break}s.push(l),0===d&&(e="vertical"===r?l.y:l.x),l.addEventListener(TouchEvent.TAP,function(){var e=this;"vertical"===r?TweenMax.to(a.drag,.5,{y:this.y}):TweenMax.to(a.drag,.5,{x:this.x,onComplete:function(){a.emit(n.event.CLICK_NODE_REACHED,{index:e.name.substr(1,1)})}}),this.totalFrames&&(s.forEach(function(e){return e.currentFrame=0}),this.currentFrame=1),a.drag.lastPos={x:this.x,y:this.y},a.emit(n.event.CLICK_NODE,{index:this.name.substr(1,1)})})}this.setDrag=function(i){i?(NBDrag.addDrag(a.drag),a.drag.on(NBDrag.event.START_DRAG,function(){var i=(a.drag.x-e)/(t-e);a.emit(n.event.START_DRAG,{time:i})}),a.drag.on(NBDrag.event.DRAG_MOVE,function(){var i=(a.drag.x-e)/(t-e);a.emit(n.event.DRAGING,{time:i})}),a.drag.on(NBDrag.event.STOP_DRAG,function(){var i=(a.drag.x-e)/(t-e);a.emit(n.event.STOP_DRAG,{time:i}),i>=1&&a.emit(n.event.ON_COMPLETE,{time:i})})):NBDrag.removeDrag(a.drag)},a.drag.addEventListener(NBDrag.event.STOP_DRAG,function(){if(!1!==a._align_){var n=o-1;if("vertical"===r){var i=Math.round((this.y-e)/(t-e)*n);i<0&&(i=0)}else{var s=Math.round((this.x-e)/(t-e)*n);s<0&&(s=0)}}}),a.drag.addEventListener(NBDrag.event.DRAG_MOVE,function(){u()});var c=!1;a.drag.constY=a.drag.y;var h,u=function(){a.drag.y=a.drag.constY,a.drag.x>=t&&(a.drag.x=t),a.drag.x<=e&&(a.drag.x=e);var i=(a.drag.x-e)/(t-e);if(i<1){c=!1,a.emit(n.event.ON_PLAY,{time:i});for(var r=0;r<s.length;r++)a.drag.lastPos.x<=s[r].x&&a.drag.x>s[r].x&&a.emit(n.event.REACHED_NODE,{index:r})}else c||(c=!0,a.emit(n.event.ON_COMPLETE,{time:i}));(a.drag.line0&&(a.drag.line0.rotation=1800*i*Math.PI/180,a.drag.line1.rotation=360*i*Math.PI/180),a.bgMask)&&(a.bgMask.getChildAt(0).scale.x=i);a.drag.lastPos={x:a.drag.x,y:a.drag.y}};this.getNodeCount=function(){return o},this.setNodePos=function(e){var t=this["a"+e];"vertical"===r?a.drag.y=t.y:a.drag.x=t.x},nb.MovieClip.ticker.add(function(){a._auto_&&!a.drag.isDragging&&("vertical"===r?a.drag.y+=a._speed_:a.drag.x+=a._speed_,u())}),this.setAutoPlay=function(e,t){this._auto_=e,this._speed_=t||.1},this.setAutoAlign=function(e){this._align_=e},this.setMomentsPause=function(e,t,n){clearTimeout(h),e&&!a.NOTafterStopPlay?(a.setAutoPlay(!1),clearTimeout(h),a.setAutoPlay(!1),h=setTimeout(function(){a.setAutoPlay(!0,n)},t)):a.setAutoPlay(!1)},this.resetTimeline=function(){(this.drag.x=this.bgMask.x,a.bgMask)&&(a.bgMask.getChildAt(0).scale.x=0)}}};t.default=n},524:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(a(169));var i={event:{ERROR:"dragError",RIGHT:"dragRight",START_DRAG:"rankStart",STOP_DRAG:"rankStop",STOP_DRAG_DELAY:"rankStopDelay",BACK:"goBack",EXCHANGE:"exchange",HITTED_AREA:"hitArea",REACHED:"reached",INIT_COMPLETE:"initComplete",CHANGE_AREA:"changedArea"}};i.classify=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||!t)return console.error("请传入必要参数objs, areas"),!1;var r=new PIXI.Sprite;function o(e){return{staticClone:e.staticShadow,areaClone:e.cloneObjs}}function s(e){var a=e.target;a.emit(i.event.START_DRAG),r.emit(i.event.START_DRAG),a.parent.addChild(a),r.isShowErr&&(a.err.alpha=0),r.isShowTapPoint&&a.removeChild(a.tapPoint),r.initDragPos=-1;for(var n=0;n<t.length;n++){var o=t[n];if(r.dragIndex=o.containObjs.indexOf(a),r.dragIndex>-1){o.containObjs.splice(r.dragIndex,1),r.initDragPos=o.id;break}}}function d(e){if(!r.isHideDragShadow){var a,n=e.target;if(a=n.hitTest2(t)){var i=n.cloneObjs[a.id],o=a.points,s=a.containObjs.length;r.initDragPos===a.id&&(s=r.dragIndex);var d=n.hitTest2(a.containObjs),l=r.initDragPos===a.id,c=r.initDragPos!==a.id&&!d;s<a.points.length&&(l||c)?(i.position.set(o[s].x,o[s].y),TweenMax.to(n.cloneObjs,r.VIR_TIMER,{alpha:0}),TweenMax.to(i,r.VIR_TIMER,{alpha:.3})):TweenMax.to(n.cloneObjs,r.VIR_TIMER,{alpha:0})}else TweenMax.to(n.cloneObjs,r.VIR_TIMER,{alpha:0})}}function l(a){var n=a.target;r.isHideDragShadow||(TweenMax.killTweensOf(n.cloneObjs),v(n.cloneObjs,"alpha",0));var o=null;if(o=n.hitTest2(t),n.emit(i.event.STOP_DRAG,null!==o),r.emit(i.event.STOP_DRAG,null!==o),v(e,"interactive",!1),setTimeout(function(){n.emit(i.event.STOP_DRAG_DELAY,{dragObj:n,area:o}),r.emit(i.event.STOP_DRAG_DELAY,{dragObj:n,area:o}),v(e,"interactive",!0),r.isShowTapPoint&&function(){for(var t=0;t<e.length;t++){var a=e[t];if(!a.hitted){a.addChild(a.tapPoint);break}}}()},1e3*r.MOVE_TIMER),n.currentArea=o,o){n.emit(i.event.HITTED_AREA,{area:o}),r.emit(i.event.HITTED_AREA,{area:o}),n.hitted=!0;var s=o.containObjs.length,d=o.points;if(r.initDragPos===o.id)s=r.dragIndex,o.containObjs.splice(r.dragIndex,0,n),TweenMax.to(n,r.MOVE_TIMER,{x:d[s].x,y:d[s].y,onComplete:function(){c(n,o)}}),n.currentPos=d[s];else{r.emit(i.event.CHANGE_AREA,{changed:!0});var l=null,g=0,f=o.containObjs;if(l=n.hitTest2(f)){g=f.indexOf(l),f.splice(g,1);var p=null;r.initDragPos>=0?(p=n.currentPos,t[r.initDragPos].containObjs.splice(r.dragIndex,0,l),l.currentArea=t[r.initDragPos]):p=l._defaultPos,r.danYu&&(l.curYu=null),TweenMax.to(l,r.MOVE_TIMER,{x:p.x,y:p.y}),TweenMax.to(n,r.MOVE_TIMER,{x:l.currentPos.x,y:l.currentPos.y,onComplete:function(){c(n,o),r.initDragPos>=0?c(l,t[r.initDragPos]):h(l)}}),n.currentPos=l.currentPos,l.currentPos=p,o.containObjs.splice(g,0,n),n.emit(i.event.EXCHANGE,l),r.emit(i.event.EXCHANGE,l)}else{if(s<o.points.length)TweenMax.to(n,r.MOVE_TIMER,{x:d[s].x,y:d[s].y,onComplete:function(){c(n,o)}}),n.currentPos=d[s];else{var P=f.pop();r.initDragPos<0?(TweenMax.to(P,r.MOVE_TIMER,{x:P._defaultX,y:P._defaultY,onComplete:function(){h(P)}}),P.currentPos=P._defaultPos):(TweenMax.to(P,r.MOVE_TIMER,{x:n.currentPos.x,y:n.currentPos.y,onComplete:function(){c(P,t[r.initDragPos])}}),P.currentPos=n.currentPos,t[r.initDragPos].containObjs.splice(r.dragIndex,0,P)),TweenMax.to(n,r.MOVE_TIMER,{x:d[d.length-1].x,y:d[d.length-1].y,onComplete:function(){c(n,o)}}),n.currentPos=d[d.length-1],n.emit(i.event.EXCHANGE,P),r.emit(i.event.EXCHANGE,P)}r.initDragPos>=0&&s<o.points.length&&u(t[r.initDragPos].containObjs,t[r.initDragPos].points)}}o.containObjs.indexOf(n)<0&&o.containObjs.push(n)}else r.danYu&&r.emit(i.event.CHANGE_AREA,{changed:!0}),n.curYu&&(n.curYu=null),TweenMax.to(n,r.MOVE_TIMER,{x:n._defaultX,y:n._defaultY,onComplete:function(){h(n)}}),r.initDragPos>=0&&u(t[r.initDragPos].containObjs,t[r.initDragPos].points)}function c(e,t){var a=!1;e.curYu=t;var n=e.yu;if(n instanceof Array){for(var o=0;o<n.length;o++)if(n[o]===t){a=!0;break}}else n===t&&(a=!0);a?(e.emit(i.event.RIGHT,{area:t}),r.emit(i.event.RIGHT,{area:t}),r.isShowErr&&(e.err.alpha=0)):(e.emit(i.event.ERROR,{area:t}),r.emit(i.event.ERROR,{area:t}),r.isShowErr&&r.immediatelyShowArr&&(e.err.alpha=1)),r.emit(i.event.REACHED,{target:e,area:t,containObjs:t.containObjs})}function h(e){e.emit(i.event.BACK),r.emit(i.event.BACK),r.isShowErr&&(e.err.alpha=0)}function u(e,t){for(var a=0;a<e.length;a++){var n=t[a];TweenMax.to(e[a],r.MOVE_TIMER,{x:n.x,y:n.y}),e[a].currentPos=n}}function v(e,t,a){for(var n=0;n<e.length;n++)e[n][t]=a}function g(e){for(var t=-1,a=null,n=0;n<e.length;n++){var i=this.hitTest(e[n]);i&&i>t&&(t=i,a=e[n])}return t>-1?a:null}return r.VIR_TIMER=0,r.MOVE_TIMER=.5,r.isShowErr=!0,r.isShowTapPoint=!0,r.isHideDragShadow=!1,r.isHidePosShadow=!1,r.danYu=!1,r.initDragPos=-1,r.dragIndex=-1,r.immediatelyShowArr=!0,a&&(r.isShowErr=void 0===a.isShowErr||a.isShowErr,r.immediatelyShowArr=void 0===a.immediatelyShowArr||a.immediatelyShowArr,r.isShowTapPoint=void 0===a.isShowTapPoint||a.isShowTapPoint,r.isHideDragShadow=a.isHideDragShadow,r.isHidePosShadow=a.isHidePosShadow,r.danYu=void 0!==a.danYu&&a.danYu),function(){e.forEach(function(e){e._defaultX=e.x,e._defaultY=e.y,e._defaultPos=e.position.clone(),e.currentPos=e.position.clone(),e.hitTest2=g;var a=e.getLocalBounds();if(e.background&&(a=e.background.getLocalBounds()),r.isShowErr){var i=PIXI.Sprite.fromFrame("err"),c=new PIXI.extras.MovieClip([i]);if(e.addChild(c),c.position.set(a.width+a.x-c.width,a.y+a.height-c.width),e.background){var h=e.background;c.position.set(h.x+h.width+a.x-c.width/2,a.y+h.y+h.height-c.height/2)}e.errPos&&(c.pivot.set(c.width/2,c.height/2),c.position.set(e.errPos.x,e.errPos.y)),e.err=c,c.alpha=0}if(r.isShowTapPoint){var u=(0,n.default)(a.width/2+a.x,a.height/2+a.y);if(e.tapPointPos&&u.position.set(e.tapPointPos.x,e.tapPointPos.y),e.background){var v=e.background;u.position.set(v.x+v.width/2+a.x,v.y+v.height/2+a.y)}e.tapPoint=u}var f=e.name;if(!r.isHidePosShadow){var p=void 0;if(e.background){var P=e.background;p=e.background.clone(),e.background.name=p.name,e.parent.addChildAt(p,0),e.background=P,p.position.set(e.x,e.y),p.alpha=.3}else(p=e.clone()).alpha=.3;e.staticShadow=p}if(!r.isHideDragShadow){for(var E=[],x=0;x<t.length;x++){var _=null;if(e.background){var A=e.background;_=e.background.clone(),e.background.name=_.name,e.background=A}else _=e.clone();e.parent.addChild(_),_.alpha=0,E.push(_)}e.cloneObjs=E}e.name=f,NBDrag.addDrag(e),e.addEventListener(NBDrag.event.START_DRAG,s),e.addEventListener(NBDrag.event.DRAG_MOVE,d),e.addEventListener(NBDrag.event.STOP_DRAG,l),e.getClone=function(){return o(e)}}),r.isShowTapPoint&&e[0].addChild(e[0].tapPoint);for(var i=0;i<t.length;i++){var c=t[i];c.id=i,a.hasObjs?c.containObjs=a.hasObjs[i]:c.containObjs=[]}}(),a.callback&&"function"==typeof a.callback&&a.callback(),r.reset=function(){e.forEach(function(t){TweenMax.to(t,.5,{x:t._defaultX,y:t._defaultY,onComplete:function(){e[0].tapPoint&&e[0].addChild(e[0].tapPoint)}}),t.currentPos=t._defaultPos,t.hitted=!1,t.err&&(t.err.alpha=0),t.tapPoint&&t.removeChild(t.tapPoint)}),t.forEach(function(e){e.containObjs=[]})},r.setDrag=function(t){t?e.forEach(function(e){NBDrag.addDrag(e)}):e.forEach(function(e){NBDrag.removeDrag(e),e.removeChild(e.tapPoint),e.removeEventListener(NBDrag.event.START_DRAG,s),e.removeEventListener(NBDrag.event.DRAG_MOVE,d),e.removeEventListener(NBDrag.event.STOP_DRAG,l)})},r.togetherShowArr=function(){if(!r.immediatelyShowArr)for(var t=0;t<e.length;t++)"undefined"!==e[t].curYu&&null!==e[t].curYu&&"undefined"!==e[t].yu&&e[t].curYu!==e[t].yu&&1!==e[t].err.alpha&&TweenMax.to(e[t].err,.3,{alpha:1})},r.getClone=o,r.getContainObjs=function(e){return e.containObjs},r.getArea=function(e){return e.currentArea},r},t.default=i}});