webpackJsonp([0,7],{169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,i){for(var a=new PIXI.Container,r=new PIXI.filters.ColorMatrixFilter,o=n||!1,s=i||{addArrow:!1,type:"horizontal",scale:1},d=new PIXI.Container,l=0;l<3;++l){var c=l+1,u=PIXI.Sprite.fromFrame("TAP_1"+c);u.x=-u.width/2,u.y=-u.height/2;var h=new PIXI.Container;h.addChild(u),d.addChild(h)}var p=0;if(s.direction)switch(s.direction){case"top":p=-Math.PI/2;break;case"bottom":p=Math.PI/2;break;case"left":p=Math.PI;break;case"right":p=0;break;default:p=0}d.filters=[r];for(var f=0;f<d.children.length;f++){var v=d.children[f];v.scale.x=v.scale.y=2,f<2&&E(v,.75*f)}if(a.addChild(d),s.addArrow){var g,m;if(s.direction){g=PIXI.Sprite.fromFrame("oneArrow"),m=new PIXI.extras.MovieClip([g]);var x=s.scale?s.scale:1;m.scale.x=m.scale.y=x,m.pivot={x:0,y:m.height/2},m.rotation=p}else{g=PIXI.Sprite.fromFrame("NBarrow"),(m=new PIXI.extras.MovieClip([g])).pivot={x:m.width/2,y:m.height/2};var T=s.scale?s.scale:1;m.scale.x=m.scale.y=T,"horizontal"!==(s.type?s.type:"horizontal")&&(m.rotation=Math.PI/2)}a.addChild(m),a.arrow=m,a.addEventListener("hideArrow",function(){m.alpha=0,m.visible=!1}),a.addEventListener("showArrow",function(){m.alpha=1,m.visible=!0})}d.alpha=.4;var _=new PIXI.Graphics;function E(e,t){TweenMax.to(e,1.5,{delay:t,alpha:0,repeat:-1}),TweenMax.to(e.scale,1.5,{x:5,y:5,delay:t,repeat:-1})}return _.beginFill(16776960,0),_.drawRect(-50,-50,100,100),a.addChild(_),a.addEventListener(MouseEvent.MOUSE_OVER,function(){d.alpha=.6}),a.addEventListener(MouseEvent.MOUSE_OUT,function(){d.alpha=.4}),a.addEventListener(TouchEvent.TOUCH_BEGIN,function(){a.emit(a.event.TAP),!o&&a.parent&&a.parent.removeChild(a)}),a.x=e,a.y=t,a.setColor=function(e){var t=e>>16,n=e>>8&255,i=255&e;r._loadMatrix([t,0,0,0,0,0,n,0,0,0,0,0,i,0,0,0,0,0,255,0],!1),d.filters=[r]},a.setRotation=function(e){a.rotation=e},a.showAllDir=function(){if(s.direction)for(var e=0;e<3;e++){var t=new PIXI.Container;t.addChild(PIXI.Sprite.fromFrame("oneArrow")),a.addChild(t),t.pivot={x:0,y:m.height/2},t.rotation=Math.PI/2*(e+1)}else{var n=new PIXI.Container;n.addChild(PIXI.Sprite.fromFrame("NBarrow")),a.addChild(n),n.pivot={x:m.width/2,y:m.height/2},n.rotation=a.rotation+Math.PI/2}},a.event={TAP:"pointTap",HIDEARR:"hideArrow",SHOWARR:"showArrow"},instance.info&&instance.info.newLayOut&&a.scale.set(.6,.6),a}},254:function(e,t,n){"use strict";var i=o(n(521)),a=o(n(520)),r=o(n(169));function o(e){return e&&e.__esModule?e:{default:e}}nb.substance0620=extendsClass(ScienceMain,{frame0:function(){var e=this,t=(0,r.default)(0,0,!1,{addArrow:!0,direction:"right"});i.default.apply(e),a.default.init.apply(e.timeline),e.timeline.NOTafterStopPlay=!0;var n=new nb.Box2d(e.step0,{gravityX:10,gravityY:0});e.step0.j0.b2Joint.EnableMotor(!0),e.step0.j0.b2Joint.SetMotorSpeed(30),this.onUpdate=function(){n.render(),e.step0.j0.b2Joint.SetMaxMotorTorque(200*-(e.step0.hammer.rotation+Math.PI/2))},NBGesture.addGesture(e.step0.bar,NBGesture.gesture.PAN,function(n){"begin"===n.type?(clearTimeout(this.timeoutID),e.step0.hammer.b2Body.SetFixedRotation(!0),instance.NBDownTip.hideTip(),e.step0.TXT&&(e.step0.TXT.visible=!1)):"end"===n.type&&(e.step0.hammer.head.hitTest(e.step0.tuningFork)?(e.step0.isDrag=!0,e.step0.isSlide||(e.step0.hammer.head.addChild(t),instance.NBDownTip.showTip("拖动锤子敲打鼓"))):e.step0.isDrag||instance.NBDownTip.showTip("拖动锤子到鼓旁边"),this.timeoutID=setTimeout(function(){e.step0.hammer.b2Body.SetFixedRotation(!1)},100))}),e.step0.forkArea.on(Box2dEvent.BEGIN_CONTACT,function(t){if(e.step0.isDrag&&(e.step0.isSlide=!0),!e.step0.tuningFork.playing){TweenMax.killTweensOf(this);var n=Math.abs(t.bodyB.GetAngularVelocity());if(n){n>5&&(n=5),this.sound=SoundManager.play(instance.const.DRUM_SOUND,null,null,null,null,n/5);var i=TweenMax.to(this,n,{onUpdate:function(){i&&(e.step0.tuningFork.animationSpeed=Math.sqrt(1-i.progress()))},onComplete:function(){e.step0.tuningFork.gotoAndStop(0)}});e.step0.tuningFork.play()}}}),e.step0.hammer.addEventListener(TouchEvent.TOUCH_BEGIN,function(){e.step0.hammer.head.removeChild(t)}),e.step0.hammer.head.addEventListener(TouchEvent.TOUCH_END,function(){!e.step0.isSlide&&e.step0.isDrag&&e.step0.hammer.head.addChild(t)}),e.step0.hammer.addEventListener(TouchEvent.TOUCH_END,function(){!e.step0.isSlide&&e.step0.isDrag&&e.step0.hammer.head.addChild(t)}),instance.frame1.apply(e.step1,[{step:!0}])},frame1:function(){var e=this.club,t=this.tuningFork,n=this.tuningFork0,i=this.tuningFork1,a=this.waterRef,o=this.cup,s=e.ball,d=(0,r.default)(s.x,s.y,!0,{addArrow:!0,direction:"right"}),l=(0,r.default)(0,90,!0),c=0,u=null;function h(){(t._isInWater?i:n).visible=!0,t.parent.addChild(t),l&&(l.parent.removeChild(l),instance.NBDownTip.hideTip(),l=null)}function p(){if(n.visible=!1,i.visible=!1,t.interactive=!1,!this._isInWater&&this.hitTest(a)){t.parent.setChildIndex(t,0);var e=n.x,r=n.y,o=n.rotation;TweenMax.to(t,.3,{x:e,y:r,rotation:o,onComplete:function(){t._isInWater=!0}})}else TweenMax.to(t,.5,{x:t.startX,y:t.startY,rotation:0,onComplete:function(){t._isInWater=!1,TweenMax.isTweening(t.ani)&&(t.interactive=!0)}})}function f(){this._isTouchStart=!0,TweenMax.killTweensOf(e),d&&(d.parent.removeChild(d),d=null,instance.NBDownTip.hideTip())}function v(t){if(this._isTouchStart){var n=t.data.global,i=e.toGlobal({x:0,y:0}),a={x:n.x-i.x,y:n.y-i.y},r=Math.PI-Math.atan2(a.x,a.y);r>=Math.PI/2&&(r=e.rotation<=Math.PI/4?0:Math.PI/2),e.rotation=r,function(e){c=e/(Math.PI/40)>>0}(r)}}function g(){this._isTouchStart=!1,function(n){var i=new TimelineMax({onComplete:n});if(t._isInWater)return void i.to(e,.3,{rotation:0});u&&(u.stop(),u=null);var a=function(e){var t=(e.y0-e.y1)/(e.x0-e.x1),n=e.y0-t*e.x0;return{k:t,b:n}}({x0:0,y0:8.77,x1:20,y1:0}),r=1e3*(c*a.k+a.b);u=SoundManager.play(instance.const.FORK_SOUND,"none",300,r,0,1,0),i.to(e,.3,{rotation:-.09,ease:Power3.easeIn,onComplete:function(){l&&(t.addChild(l),instance.NBDownTip.showTip("在发声过程中拖动音叉放入水中观察现象")),t.interactive=!0,TweenMax.killTweensOf(t),TweenMax.killTweensOf(t.ani),t.ani.rotation=0;var e=0,n=2*c*.2,i=TweenMax.to(t.ani,n,{onComplete:function(){u.stop(),o.gotoAndStop(0),t._isInWater?t.interactive=!0:t.interactive=!1},onUpdate:function(){if(i){var n=i.progress(),a=-.05*n+.05,r=a*Math.sin(e);e+=1,t.ani.rotation=r,t._isInWater&&TweenMax.isTweening(t.ani)&&o.play()}}});TweenMax.to(u,n,{volume:0})}}),i.to(e,.5,{rotation:0,ease:window.Elastic.easeOut.config(1.5,.08)})}()}e.addChild(d),e.addChild(s),n.visible=!1,i.visible=!1,t.startX=t.x,t.startY=t.y,s.addEventListener(TouchEvent.TOUCH_BEGIN,f),s.addEventListener(TouchEvent.TOUCH_END,g),s.addEventListener(TouchEvent.TOUCH_END_OUDSIDE,g),s.addEventListener(TouchEvent.TOUCH_MOVE,v),NBDrag.addDrag(t),t.addEventListener(NBDrag.event.START_DRAG,h),t.addEventListener(NBDrag.event.STOP_DRAG,p),t.interactive=!1},start:function(){this.menu.addStepFromObj(this.info),this.menu.setExperimentName(this.info.labName),SoundManager.register({src:n(548),id:instance.const.FORK_SOUND}),SoundManager.register({src:n(549),id:instance.const.LUO_SOUND}),SoundManager.register({src:n(550),id:instance.const.DRUM_SOUND}),this.bindScriptToSprite(this.frame0,"frame0"),this.bindScriptToSprite(this.frame1,"frame1")},info:{experimentImport:"发声的物体都在振动吗?",labName:"观察物体发声状态",title0:"使物体发声",CONCLUSION:"鼓发声时在振动；音叉发声时也在振动。",newLayOut:!0},const:{FORK_SOUND:"forkSound",LUO_SOUND:"luoSound",DRUM_SOUND:"drumSound",LINE_SOUND:"linesound",ALLOW_LEFT_RIGHT:!1,ALLOW_CHANGE_VOLUME:!0,SENSITIVITY:0,VERTICAL_MIN_ANGLE:.2,MAX_ANGLE_PARAM:.4,SPEED:.1},event:{}}),e.exports=nb.substance0620},442:function(e,t,n){"use strict";n(254),nb.substance0621=extendsClass(ScienceMain,{frame0:function(){instance.getNBLib("0620").frame1.apply(this)},start:function(){this.menu.addStepFromObj(this.info),this.menu.setExperimentName(this.info.labName),SoundManager.register({src:n(581),id:instance.const.FORK_SOUND}),SoundManager.register({src:n(582),id:instance.const.LUO_SOUND}),SoundManager.register({src:n(583),id:instance.const.DRUM_SOUND}),this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"观察发声的音叉是怎样引起水面波动的呢？",labName:"声音的传播1",title0:"使物体发声",CONCLUSION:"音叉的振动导致水面产生波纹。",newLayOut:!0},const:{FORK_SOUND:"forkSound",LUO_SOUND:"luoSound",DRUM_SOUND:"drumSound",LINE_SOUND:"linesound",ALLOW_LEFT_RIGHT:!1,ALLOW_CHANGE_VOLUME:!0,SENSITIVITY:0,VERTICAL_MIN_ANGLE:.2,MAX_ANGLE_PARAM:.4,SPEED:.1},event:{}}),e.exports=nb.substance0621},520:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={event:{CLICK_NODE:"nodeTap",CLICK_NODE_REACHED:"nodeTapReached",ON_COMPLETE:"timelineComplete",ON_PLAY:"timelinePlaying",REACHED_NODE:"reachedNode",START_DRAG:"startDrag",DRAGING:"draging",STOP_DRAG:"stopDrag"},init:function(){var e,t,n=this;if(n.bgMask){var a=n.bgMask.getChildAt(0);n.progressBar.mask=a,a.scale.x=0}var r=this.a0.x===this.a1.x?"vertical":"horizontal",o=0,s=[];n.drag.lastPos={x:n.drag.x,y:n.drag.y};for(var d=0;d<int.MAX_VALUE;d++){var l=this["a"+d];if(void 0===l){t="vertical"===r?this["a"+(d-1)].y:this["a"+(d-1)].x,o=d;break}s.push(l),0===d&&(e="vertical"===r?l.y:l.x),l.addEventListener(TouchEvent.TAP,function(){var e=this;"vertical"===r?TweenMax.to(n.drag,.5,{y:this.y}):TweenMax.to(n.drag,.5,{x:this.x,onComplete:function(){n.emit(i.event.CLICK_NODE_REACHED,{index:e.name.substr(1,1)})}}),this.totalFrames&&(s.forEach(function(e){return e.currentFrame=0}),this.currentFrame=1),n.drag.lastPos={x:this.x,y:this.y},n.emit(i.event.CLICK_NODE,{index:this.name.substr(1,1)})})}this.setDrag=function(a){a?(NBDrag.addDrag(n.drag),n.drag.on(NBDrag.event.START_DRAG,function(){var a=(n.drag.x-e)/(t-e);n.emit(i.event.START_DRAG,{time:a})}),n.drag.on(NBDrag.event.DRAG_MOVE,function(){var a=(n.drag.x-e)/(t-e);n.emit(i.event.DRAGING,{time:a})}),n.drag.on(NBDrag.event.STOP_DRAG,function(){var a=(n.drag.x-e)/(t-e);n.emit(i.event.STOP_DRAG,{time:a}),a>=1&&n.emit(i.event.ON_COMPLETE,{time:a})})):NBDrag.removeDrag(n.drag)},n.drag.addEventListener(NBDrag.event.STOP_DRAG,function(){if(!1!==n._align_){var i=o-1;if("vertical"===r){var a=Math.round((this.y-e)/(t-e)*i);a<0&&(a=0)}else{var s=Math.round((this.x-e)/(t-e)*i);s<0&&(s=0)}}}),n.drag.addEventListener(NBDrag.event.DRAG_MOVE,function(){h()});var c=!1;n.drag.constY=n.drag.y;var u,h=function(){n.drag.y=n.drag.constY,n.drag.x>=t&&(n.drag.x=t),n.drag.x<=e&&(n.drag.x=e);var a=(n.drag.x-e)/(t-e);if(a<1){c=!1,n.emit(i.event.ON_PLAY,{time:a});for(var r=0;r<s.length;r++)n.drag.lastPos.x<=s[r].x&&n.drag.x>s[r].x&&n.emit(i.event.REACHED_NODE,{index:r})}else c||(c=!0,n.emit(i.event.ON_COMPLETE,{time:a}));(n.drag.line0&&(n.drag.line0.rotation=1800*a*Math.PI/180,n.drag.line1.rotation=360*a*Math.PI/180),n.bgMask)&&(n.bgMask.getChildAt(0).scale.x=a);n.drag.lastPos={x:n.drag.x,y:n.drag.y}};this.getNodeCount=function(){return o},this.setNodePos=function(e){var t=this["a"+e];"vertical"===r?n.drag.y=t.y:n.drag.x=t.x},nb.MovieClip.ticker.add(function(){n._auto_&&!n.drag.isDragging&&("vertical"===r?n.drag.y+=n._speed_:n.drag.x+=n._speed_,h())}),this.setAutoPlay=function(e,t){this._auto_=e,this._speed_=t||.1},this.setAutoAlign=function(e){this._align_=e},this.setMomentsPause=function(e,t,i){clearTimeout(u),e&&!n.NOTafterStopPlay?(n.setAutoPlay(!1),clearTimeout(u),n.setAutoPlay(!1),u=setTimeout(function(){n.setAutoPlay(!0,i)},t)):n.setAutoPlay(!1)},this.resetTimeline=function(){(this.drag.x=this.bgMask.x,n.bgMask)&&(n.bgMask.getChildAt(0).scale.x=0)}}};t.default=i},521:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e=e||{};var t=this,n=[];i.default.init.apply(this.timeline);for(var a=0;a<this.timeline.getNodeCount();a++){var r=this["step"+a];n.push(r),r.alpha=0,r.visible=!1}var o=this.step0;o.visible=!0,o.alpha=1;var s=0;this.timeline.on(i.default.event.CLICK_NODE,function(i){if(void 0!==i.index&&i.index!=s){var a=e.offset||1200;a=i.index>s?$s(a):-$s(a);var r=void 0!==o.currentX?o.currentX:o.currentX=o.x;TweenMax.to(o,e.oldTm||.6,{x:r+a,alpha:0,onComplete:function(t){t.visible=!1,e.isFix||(t.y=0)},onCompleteParams:[o],ease:Expo.easeOut}),s=i.index,(o=n[s]).visible=!0,r=void 0!==o.currentX?o.currentX:o.currentX=o.x,o.x=r-a,TweenMax.to(o,e.newTm||1,{x:r,alpha:1,ease:Expo.easeOut,onComplete:function(){t.emit(t.boxSwitch_event.CHANGE_COM,{target:o,index:i.index})}})}}),this.addEventListener("render",function(){o.onUpdate&&o.onUpdate()}),t.boxSwitch_event={CHANGE_COM:"changeCom"}};var i=function(e){return e&&e.__esModule?e:{default:e}}(n(520))},548:function(e,t,n){e.exports=n.p+"bb3999a31d07fc699b214fc0add8dd1e.mp3"},549:function(e,t,n){e.exports=n.p+"c5585bdde2e60b506b085fb5b8da969f.mp3"},550:function(e,t,n){e.exports=n.p+"df5f9ac230b228003b514e3dafd19fdb.mp3"},581:function(e,t,n){e.exports=n.p+"bb3999a31d07fc699b214fc0add8dd1e.mp3"},582:function(e,t,n){e.exports=n.p+"c5585bdde2e60b506b085fb5b8da969f.mp3"},583:function(e,t,n){e.exports=n.p+"df5f9ac230b228003b514e3dafd19fdb.mp3"}});