webpackJsonp([187],{304:function(t,e,a){"use strict";var i=function(t){return t&&t.__esModule?t:{default:t}}(a(520));nb.substance0054=extendsClass(ScienceMain,{frame0:function(){var t=this;i.default.init.apply(t.timeline),t.timeline.addEventListener(i.default.event.ON_PLAY,function(e){void 0!==e.time&&(t.txt0.text=Math.round(15*e.time+20)+"℃",t.txt1.text=Math.round(7*e.time+20)+"℃",t.txt2.text=Math.round(6*e.time+20)+"℃",t.txt3.text=Math.round(5*e.time+20)+"℃",t.txt4.text=Math.round(12*e.time+20)+"℃")}),t.timeline.setAutoPlay(!0,1)},start:function(){this.menu.addStepFromObj(this.info),this.menu.setExperimentName(this.info.labName),this.bindScriptToSprite(this.frame0,"frame0")},info:{experimentImport:"为什么，夏天人们喜欢穿浅颜色的衣服，冬天喜欢穿深颜色的衣服呢？衣服的颜色跟吸热有关系吗？",labName:"物体的颜色与吸热",title0:"控制时间，观察不同的时间4种纸袋里温度计的温度",CONCLUSION:"物体的颜色与吸热的本领有关系，深色物体比浅色物体会吸收更多的热。",newLayOut:!0},const:{},event:{}}),t.exports=nb.substance0054},520:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={event:{CLICK_NODE:"nodeTap",CLICK_NODE_REACHED:"nodeTapReached",ON_COMPLETE:"timelineComplete",ON_PLAY:"timelinePlaying",REACHED_NODE:"reachedNode",START_DRAG:"startDrag",DRAGING:"draging",STOP_DRAG:"stopDrag"},init:function(){var t,e,a=this;if(a.bgMask){var n=a.bgMask.getChildAt(0);a.progressBar.mask=n,n.scale.x=0}var r=this.a0.x===this.a1.x?"vertical":"horizontal",s=0,o=[];a.drag.lastPos={x:a.drag.x,y:a.drag.y};for(var d=0;d<int.MAX_VALUE;d++){var g=this["a"+d];if(void 0===g){e="vertical"===r?this["a"+(d-1)].y:this["a"+(d-1)].x,s=d;break}o.push(g),0===d&&(t="vertical"===r?g.y:g.x),g.addEventListener(TouchEvent.TAP,function(){var t=this;"vertical"===r?TweenMax.to(a.drag,.5,{y:this.y}):TweenMax.to(a.drag,.5,{x:this.x,onComplete:function(){a.emit(i.event.CLICK_NODE_REACHED,{index:t.name.substr(1,1)})}}),this.totalFrames&&(o.forEach(function(t){return t.currentFrame=0}),this.currentFrame=1),a.drag.lastPos={x:this.x,y:this.y},a.emit(i.event.CLICK_NODE,{index:this.name.substr(1,1)})})}this.setDrag=function(n){n?(NBDrag.addDrag(a.drag),a.drag.on(NBDrag.event.START_DRAG,function(){var n=(a.drag.x-t)/(e-t);a.emit(i.event.START_DRAG,{time:n})}),a.drag.on(NBDrag.event.DRAG_MOVE,function(){var n=(a.drag.x-t)/(e-t);a.emit(i.event.DRAGING,{time:n})}),a.drag.on(NBDrag.event.STOP_DRAG,function(){var n=(a.drag.x-t)/(e-t);a.emit(i.event.STOP_DRAG,{time:n}),n>=1&&a.emit(i.event.ON_COMPLETE,{time:n})})):NBDrag.removeDrag(a.drag)},a.drag.addEventListener(NBDrag.event.STOP_DRAG,function(){if(!1!==a._align_){var i=s-1;if("vertical"===r){var n=Math.round((this.y-t)/(e-t)*i);n<0&&(n=0)}else{var o=Math.round((this.x-t)/(e-t)*i);o<0&&(o=0)}}}),a.drag.addEventListener(NBDrag.event.DRAG_MOVE,function(){c()});var u=!1;a.drag.constY=a.drag.y;var l,c=function(){a.drag.y=a.drag.constY,a.drag.x>=e&&(a.drag.x=e),a.drag.x<=t&&(a.drag.x=t);var n=(a.drag.x-t)/(e-t);if(n<1){u=!1,a.emit(i.event.ON_PLAY,{time:n});for(var r=0;r<o.length;r++)a.drag.lastPos.x<=o[r].x&&a.drag.x>o[r].x&&a.emit(i.event.REACHED_NODE,{index:r})}else u||(u=!0,a.emit(i.event.ON_COMPLETE,{time:n}));(a.drag.line0&&(a.drag.line0.rotation=1800*n*Math.PI/180,a.drag.line1.rotation=360*n*Math.PI/180),a.bgMask)&&(a.bgMask.getChildAt(0).scale.x=n);a.drag.lastPos={x:a.drag.x,y:a.drag.y}};this.getNodeCount=function(){return s},this.setNodePos=function(t){var e=this["a"+t];"vertical"===r?a.drag.y=e.y:a.drag.x=e.x},nb.MovieClip.ticker.add(function(){a._auto_&&!a.drag.isDragging&&("vertical"===r?a.drag.y+=a._speed_:a.drag.x+=a._speed_,c())}),this.setAutoPlay=function(t,e){this._auto_=t,this._speed_=e||.1},this.setAutoAlign=function(t){this._align_=t},this.setMomentsPause=function(t,e,i){clearTimeout(l),t&&!a.NOTafterStopPlay?(a.setAutoPlay(!1),clearTimeout(l),a.setAutoPlay(!1),l=setTimeout(function(){a.setAutoPlay(!0,i)},e)):a.setAutoPlay(!1)},this.resetTimeline=function(){(this.drag.x=this.bgMask.x,a.bgMask)&&(a.bgMask.getChildAt(0).scale.x=0)}}};e.default=i}});