(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"index_atlas_NP_1", frames: [[0,909,1364,908],[1366,909,1277,853],[1383,0,1276,848],[0,0,1381,907],[1366,1764,650,408],[0,0,0,0]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._2 = function() {
	this.initialize(ss["index_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.initialize(ss["index_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["index_atlas_NP_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.initialize(ss["index_atlas_NP_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.initialize(ss["index_atlas_NP_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.scene01_bg = function() {
	this.initialize(ss["index_atlas_NP_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.元件20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AsklEIZJAAIAAKJI5JAAg");
	this.shape.setTransform(80.5,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AskFFIAAqJIZJAAIAAKJg");
	this.shape_1.setTransform(80.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-1,-1,163,67)];


(lib.元件55 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("At+LkQhdAAhChCQhChCAAhdIAAwFQAAhdBChCQBChCBdAAIb9AAQBdAABCBCQBCBCAABdIAAQFQAABdhCBCQhCBChdAAg");
	mask.setTransform(122,95);

	// 图层_1
	this.instance = new lib._6();
	this.instance.setTransform(-1,16,0.38,0.38);

	this.instance_1 = new lib._5();
	this.instance_1.setTransform(2,20,0.17,0.17);

	this.instance_2 = new lib._4();
	this.instance_2.setTransform(1,16,0.19,0.19);

	this.instance_3 = new lib._3();
	this.instance_3.setTransform(3,15,0.19,0.19);

	this.instance_4 = new lib._2();
	this.instance_4.setTransform(6,17,0.17,0.17);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(10,21,224,148);
p.frameBounds = [rect, rect, rect, rect, rect];


(lib.元件54 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FCCB81").ss(3,1,1).p("AyPxJMAkfAAAMAAAAiTMgkfAAAg");
	this.shape.setTransform(116.925,109.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCCB81").s().p("AyPRKMAAAgiTMAkfAAAMAAAAiTg");
	this.shape_1.setTransform(116.925,109.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	// 图层_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(252,203,129,0.098)").s().p("AuGRCQi7AAAAi7IAA8NQAAi7C7AAIcNAAQC7AAAAC7IAAcNQAAC7i7AAg");
	this.shape_2.setTransform(109,109.0247,1,1.0005);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, new cjs.Rectangle(0,0,218,218.1), null, new cjs.Rectangle(-1.4,-1.4,236.7,222.6)];


(lib.元件53 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F99703").s().p("AiZATQAAhKA1g2QAXgWAbgOQATAPADAdQgEAkAGAKQAGAIAVAWQATASABAGQABAHgIALIgJAJQgFAHAOAHQADAJgcAIQgIACAJACQAHADAJgBQAIABgCAKQAAAGgLADQgOAFAHAJQAJANgDAJQgJAQgygEQgcAAgPAPQgzg1AAhKgABuCFQgHgFAFgKIACgDQATgWADgaQACgLgBgMQgIgkgXgWIgBgBIgBgCQgEgGAEgGQAHgFAIAEIACACQAlAjAAAzIAAALQgEAdgYAfQgHAFgFAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgABRBmIgBgBQgFgEABgIIABgBQAJgNADgMIACgKQgCgVgMgLIgBgBIgCgCQgFgHAHgHQAGgEAJAFIACACQASAXABAXIgCAMQgFASgMAQIgCABQgEACgDAAIgDAAgAAwBRQgEgDgBgCQgBgEACgDQAAgBAAABQAEgGACgEQACgKgIgLIgBAAIABAAIgBgEQAAgEACgDQADgEAEAAQADAAAEACIAEAEQAJALAAAQIAAAAIAAAFQgCAJgIAKIgCABIgFADIgBAAQgDAAgDgDg");
	this.shape.setTransform(180.9503,102.943,2.188,2.188);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件53, rect = new cjs.Rectangle(147.2,71.1,67.5,63.9), [rect]);


(lib.元件52 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F99703").ss(0.1,1,1).p("AA/hNQAQAOAJATQAJASABAUIABAGQAAAQgFAQQgHAUgOAQQgNAQgTAJQgSAJgUABQgEABgDAAQgQAAgQgGQgUgGgPgOQgQgNgJgTIglASQANAaAXAUQAWATAbAJQAWAHAXAAIAKgBQAcgCAZgMQAbgOATgVQATgXAJgcQAHgVAAgXIgBgKQgCgcgMgZQgNgagWgUQgXgTgcgJQgZgIgdACQgdACgYAMQgVALgTASIgagWIgHBdIBbgWIgagWIgBAAQANgMAOgHQASgIAUgCQAUgBASAGQAUAGAQAOg");
	this.shape.setTransform(28.525,28.4882);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F99703").s().p("AgwCKQgbgJgWgTQgXgUgNgaIAlgSQAJATAQANQAPAOAUAGQAQAGAQAAIAHgBQAUgBASgJQATgJANgQQAOgQAHgUQAFgQAAgQIgBgGQgBgUgJgSQgJgTgQgOQgQgOgUgGQgSgGgUABQgUACgSAIQgOAHgNAMIABAAIAaAWIhbAWIAHhdIAaAWQATgSAVgLQAYgMAdgCQAdgCAZAIQAcAJAXATQAWAUANAaQAMAZACAcIABAKQAAAXgHAVQgJAcgTAXQgTAVgbAOQgZAMgcACIgKABQgXAAgWgHg");
	this.shape_1.setTransform(28.525,28.4882);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F99703").ss(5,1,1).p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQBUBUAAB1QAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_2.setTransform(28.525,28.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQBUBUAAB1QAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_3.setTransform(28.525,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.5,-2.5,62.1,62);
p.frameBounds = [rect];


(lib.元件51 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {label0:1,label1:5,label2:9,label3:13,label4:17};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this=this;
		this.getCurrentFrame=function(){
			return _this.currentFrame;
		}
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(4).call(this.frame_8).wait(4).call(this.frame_12).wait(4).call(this.frame_16).wait(4).call(this.frame_20).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhkCKQBAgMAzgjQgVgYgUghIgMAAIgLACIgKgJIB+AAIALgMIASATIgMAGQgbAjgTARQAmAYBAADIAAAEQgTAEgDAMQg6gLghgaQg6AghDAJgAAZBSQAZgXAQgZIhWAAQAXAfAWARgAiMCMQAZgqAGguQAHguAAgvQABgvgDgYIAVAMIBfAAQgBgHgFgIQgDgJgNgQIAEgCQAbAMADAHIAFAIQAAAHgKAIIBPAAIARgQIAYAXIjfAAQACBKgGAnQgFAogMAeQgNAcgSAZgAgagoIggAAIgOACIgKgKIA4AAIgBgnIAaANIgJAGIAAAUIBDAAQAAgUgBgSIAcAMIgLAHIAAATIAWAAIAQgQIAYAYIg+AAQAAAjABAJIgRAIIAAgLIhDAAIAAAGIgRAHIABg2gAgKgFIBDAAIAAgjIhDAAg");
	this.shape.setTransform(-782,215.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAABwQACgFAAgNIAAifIgBg/IAQAKIBMAAIAKgLIARARIgKAHIABBnIgRAJIAAgKIgxAAQAGAdAPAYQARgMANgMQAMgMAHgKIARAVIgMACQgcAQgWANQAcAmAuALIAAADQgRADgIALQhIgqgKhTIgTAAIAABoIApgWIABAEQgkAegNARgAASgLIBMAAIAAguIhMAAgAAShAIBMAAIAAgvIhMAAgAiPBpIAagGQAAhWgBgUIAaALIgLAJIAABSIAagHIAAh9IgVAAIAAAJIgRAGQACgYAAgcQAAgbgCgaIARAJIA3AAIALgLIAPAPIgKAJQgBA1ACAUIgQAHIAAgMIgUAAIAAA0IAVAAIANgMIASATIg0AAIAAA+IAxgQIACAFQgkAQgfAMQghANgSALgAhigtIA4AAIAAhCIg4AAg");
	this.shape_1.setTransform(-811.85,215.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AA4BuIAAgHQAkAEAIAAQAHgBAAgJIAAjTIhoAAQgJAAgNADIgLgLICHAAIAMgMIASASIgMAJIAADUQAAAKgFAIQgGAHgNAFQgHgSgkgHgAhdBhQAFgIAAgJIAAhyIgGAAQgPAAgOADIgLgLIAsAAIAMgMIAQAPIgKAIIAABvIAogkIACAEIgdAlIgTAegAgWAXIgBg1IARAIIAwAAIAMgMIARASIgLAHIABBKIgQAHIAAgXIgzAAIAAAXIgRAIIABg5gAgGAqIAzAAIAAg4IgzAAgAgqhCIBhAAIANgNIAUAUIhgAAQgJAAgOAEgAhThkQgGgRgQgOIACgDQAXAIAKAKQAKAIgCAKQgDAJgGADIgDAAQgFAAgEgOg");
	this.shape_2.setTransform(-842.2,215.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgLBFIhoAAIgQADIgJgLICBAAIAAglIhCAAIAAAPIgSAHIABhDIgBhDIATAKIBbAAQAJgNAJgTQAJgTADgNIAZASQgKAEgMAMQgLAMgOASIAwAAIAJgKIAUAOIgLAIQAABJABAXIgRAIIAAgOIhEAAIAAAlIBaAAIAUgTIAaAbIiIAAQAAAxABARIgTAIIAChKgAAFARIBEAAIAAgoIhEAAgAhNARIBCAAIAAgoIhCAAgAAFgfIBEAAIAAgnIhEAAgAhNgfIBCAAIAAgnIhCAAgAgqhiQgHgTgRgTIADgEQAQAKANAKQANAKgBAJQgBAIgEAFIgFAEQgFAAgFgOg");
	this.shape_3.setTransform(-871.6,215.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AxLJYIAAyvMAiXAAAIAASvg");
	this.shape_4.setTransform(-826.175,216.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(21));

	// 单词
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ag/CAQgdgMgQgfQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegNAqABQAuAAAaAPQAZAPAJAbQAKAbgBAiIgBAVIgBAQIitALQABAcASAOQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhFQgNAPgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQggAAgOAPg");
	this.shape_5.setTransform(145.5513,185.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AB/CKIAAilQABgbgKgMQgJgMgWABQgWgBgNAKQgMAJgFAVIAACwIhIAAIAAilQABgbgKgMQgJgMgVABQgXgBgLAJQgMAJgFATIAACzIhIAAIAAkNIBIAAIAAAeQALgSASgJQATgIAcAAQAfAAATAJQARAKAKATQALgUAWgJQAVgJAeAAQAugBAWAYQAWAXAAAyIAACyg");
	this.shape_6.setTransform(106.35,185.5995);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_7.setTransform(65.375,185.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ag4C6QgVgCgRgDIAAg6QAQAFATACQATACASAAQAqAAAUgPQAUgPAAgnIAAgOQgIASgTAKQgTAKgjAAQgrAAgYgRQgYgRgJgeQgKgfABgpQgBgmAKgfQAJgeAYgTQAYgTArgBQAjAAAUALQASAKAIATIAAgjIBIAAIAAD5QAAAlgOAbQgOAbghAOQghAQg3gBQgTAAgUgBgAgkh4QgNALgDATQgEATAAAWQAAAYAEASQAEASAMAMQAMALAYAAQAaABAOgKQAOgLAFgRQAFgTgBgbQABgagFgSQgFgTgOgKQgOgLgaAAQgYABgMAMg");
	this.shape_8.setTransform(32.9996,190.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_9.setTransform(-13.575,185.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhqB7QAWAAAOgFQAOgEAIgJQAIgJADgOIhokKIBQAAIA/DAIACAAIA9jAIBNAAIhaD0QgNAkgOAYQgNAZgRAOQgRAOgZAGQgZAGgiAAg");
	this.shape_10.setTransform(-57.5,190.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_11.setTransform(-89.325,185.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgWC4QgRgHgIgQQgHgQAAgXIAAk4IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA3IgPACIgQABQgdABgRgIg");
	this.shape_12.setTransform(-111.025,180.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AiCC7IAAlxIBJAAIAAAhQAHgPAUgLQATgLAigBQAsAAAXARQAYASAIAgQAJAfAAAqQAAAogJAfQgIAfgYASQgXATgsABQgjAAgTgMQgTgKgHgSIAACGgAglh6QgOAKgFATQgGATABAbQgBAbAGASQAFASAOALQAOALAXgBQAZAAAMgMQAMgKAEgTQAEgTAAgYQAAgYgEgUQgEgTgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_13.setTransform(-136.4237,190.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAACMQgpABgdgNQgegMgQgfQgPgfAAg2QAAg1APgfQAQgfAegMQAdgNApABQAqgBAeANQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAfgdAMQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFATAAAfQAAAgAGATQAFATANAHQANAIAUAAQAWAAANgIQANgHAFgTQAFgTAAggQAAgfgFgTQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_14.setTransform(146.925,185.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_15.setTransform(121.4,182.8015);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AAACMQgpABgdgNQgegMgQgfQgPgfAAg2QAAg1APgfQAQgfAegMQAdgNApABQAqgBAeANQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAfgdAMQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFATAAAfQAAAgAGATQAFATANAHQANAIAUAAQAWAAANgIQANgHAFgTQAFgTAAggQAAgfgFgTQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_16.setTransform(96.075,185.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AAzC+IAAimQAAgZgJgMQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUAKQATALAJATQAIAVAAAcIAAC5g");
	this.shape_17.setTransform(63.775,180.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADRIAQAAIBFhjIBUAAIhgB9IBkCQg");
	this.shape_18.setTransform(-88.625,180.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgSABIgSABIgDABQgfAAgSgIg");
	this.shape_19.setTransform(-146.55,182.8015);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_20.setTransform(130.5,182.8015);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgSC7QgQgFgKgKQgKgJgFgNIgFAlIhCAAIAAl6IBJAAIAACOQAHgPAUgLQATgLAigBQAsAAAXARQAYASAIAgQAJAeAAAqQAAAogJAgQgIAfgYASQgXATgsABQgYAAgRgGgAglgWQgOAKgFASQgGATABAbQgBAbAGASQAFATAOALQAOALAXgBQAZAAAMgMQAMgKAEgUQAEgTAAgYQAAgYgEgUQgEgSgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_21.setTransform(41.4763,180.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAtCHIgsi4IgCAAIgtC4IhbAAIhJkNIBOAAIAqDCIADAAIAwjCIBQAAIAwDCIADAAIAqjCIBNAAIhKENg");
	this.shape_22.setTransform(-57.7,185.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AhNCJIAAkNIBIAAIAAAxQAIgWAMgLQAMgNAPgDQAPgEAQgBIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLAMQgKANgFAWIAACYg");
	this.shape_23.setTransform(-121.125,185.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AAzCJIAAikQAAgbgJgMQgJgMgaABQgWgBgOAJQgPAIgGAUIAACyIhIAAIAAkNIBIAAIAAAhQALgTAWgKQAVgIAegBQAhAAAUALQATAKAJAUQAIAUAAAeIAAC3g");
	this.shape_24.setTransform(208.475,185.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgDgIQgEgIAAgRQAAgRAEgIQADgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQADAIAAARQAAARgDAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_25.setTransform(184.35,180.1708);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AAzCJIAAikQAAgbgJgMQgJgMgaABQgWgBgOAJQgPAIgGAUIAACyIhIAAIAAkNIBIAAIAAAhQALgTAWgKQAVgIAegBQAhAAAUALQATAKAJAUQAIAUAAAeIAAC3g");
	this.shape_26.setTransform(109.575,185.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AhUB/QgUgKgJgUQgIgUAAgdIAAi5IBIAAIAAClQAAAbAJAMQAJAMAagBQAUABAPgJQAOgIAGgVIAAiyIBIAAIAAENIhBAAIgGggQgLATgVAKQgUAIgeABQghAAgUgLg");
	this.shape_27.setTransform(76.725,186.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("ACACKIAAilQAAgbgJgMQgKgMgXABQgVgBgNAKQgMAJgFAVIAACwIhIAAIAAilQAAgbgJgMQgJgMgWABQgWgBgLAJQgLAJgGATIAACzIhIAAIAAkNIBIAAIAAAeQALgSATgJQASgIAdAAQAeAAASAJQATAKAIATQALgUAWgJQAWgJAeAAQAugBAWAYQAWAXAAAyIAACyg");
	this.shape_28.setTransform(4.6,185.5995);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AB/CKIAAilQABgbgKgMQgJgMgWABQgWgBgNAKQgMAJgFAVIAACwIhIAAIAAilQABgbgKgMQgJgMgVABQgXgBgLAJQgMAJgFATIAACzIhIAAIAAkNIBIAAIAAAeQALgSASgJQATgIAcAAQAfAAATAJQARAKAJATQAMgUAWgJQAVgJAeAAQAugBAWAYQAWAXAAAyIAACyg");
	this.shape_29.setTransform(-136.2,185.5995);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgDgIQgEgIAAgRQAAgRAEgIQADgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQADAIAAARQAAARgDAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_30.setTransform(-168,180.1708);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgoCAQgegMgQgfQgQgfAAg2QAAg1AQgfQAQgfAegMQAegNApABQAUAAASACQATADAMAEIAAA9QgOgFgOgDQgPgCgRAAQgYgBgPAHQgOAHgHASQgHASAAAeQAAAfAHASQAHARAPAHQAPAIAZgBQAQAAAPgDQAPgCAPgFIAAA8QgIADgMACIgaAEIgaABIgDAAQgnAAgdgMg");
	this.shape_31.setTransform(-204.775,185.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AhrB7QAXAAAOgFQAOgEAIgJQAIgJAEgOIhqkKIBRAAIA+DAIADAAIA8jAIBPAAIhbD0QgNAkgNAYQgOAZgRAOQgSAOgYAGQgYAGgkAAg");
	this.shape_32.setTransform(122.8,190.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_33.setTransform(23.175,185.7506);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgWC4QgRgHgIgQQgHgQAAgXIAAk4IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA3IgPACIgQABQgdABgRgIg");
	this.shape_34.setTransform(-72.025,180.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgJChQgTgIgJgTQgJgUABgjIAAh+IgkAAIAAg5IAkAAIAAhAIBHAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgSgIg");
	this.shape_35.setTransform(-121.45,182.8015);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13,p:{x:-136.4237}},{t:this.shape_12,p:{x:-111.025}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:-13.575}},{t:this.shape_8},{t:this.shape_7,p:{x:65.375}},{t:this.shape_6},{t:this.shape_5,p:{x:145.5513}}]},1).to({state:[{t:this.shape_19},{t:this.shape_9,p:{x:-121.925}},{t:this.shape_18},{t:this.shape_5,p:{x:-60.4487}},{t:this.shape_7,p:{x:-16.425}},{t:this.shape_13,p:{x:31.4763}},{t:this.shape_17},{t:this.shape_16,p:{x:96.075}},{t:this.shape_15,p:{x:121.4}},{t:this.shape_14,p:{x:146.925}}]},4).to({state:[{t:this.shape_23,p:{x:-121.125}},{t:this.shape_16,p:{x:-96.075}},{t:this.shape_22},{t:this.shape_9,p:{x:-6.425}},{t:this.shape_21,p:{x:41.4763}},{t:this.shape_14,p:{x:73.275}},{t:this.shape_7,p:{x:104.325}},{t:this.shape_20}]},4).to({state:[{t:this.shape_31},{t:this.shape_12,p:{x:-182.275}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_21,p:{x:-94.9737}},{t:this.shape_9,p:{x:-50.225}},{t:this.shape_28},{t:this.shape_14,p:{x:44.575}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_15,p:{x:135.25}},{t:this.shape_7,p:{x:159.875}},{t:this.shape_25},{t:this.shape_24}]},4).to({state:[{t:this.shape_35},{t:this.shape_5,p:{x:-96.6987}},{t:this.shape_34},{t:this.shape_12,p:{x:-55.825}},{t:this.shape_7,p:{x:-20.275}},{t:this.shape_33},{t:this.shape_15,p:{x:45.25}},{t:this.shape_14,p:{x:70.775}},{t:this.shape_23,p:{x:98.725}},{t:this.shape_32}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-936.2,156.1,220.1,120);
p.frameBounds = [rect, rect=new cjs.Rectangle(-936.2,137.9,1099.5,138.2), rect, rect, rect, rect=new cjs.Rectangle(-936.2,137.9,1101.7,138.2), rect, rect, rect, rect=new cjs.Rectangle(-936.2,137.9,1078.9,138.2), rect, rect, rect, rect=new cjs.Rectangle(-936.2,137.9,1163.6,138.2), rect, rect, rect, rect=new cjs.Rectangle(-936.2,137.9,1076.6,138.2), rect, rect, rect];


(lib.元件36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// y
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhrB6QAXABAOgFQAOgEAIgJQAIgJAEgNIhqkLIBRAAIA+DAIAEAAIA7jAIBPAAIhbD0QgNAkgNAYQgPAYgQAOQgRAPgZAGQgZAGgjAAg");
	this.shape.setTransform(255.2,52.95);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(331).to({_off:false},0).to({_off:true},28).wait(99));

	// r
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_1.setTransform(231.125,47.7);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(300).to({_off:false},0).to({_off:true},31).wait(127));

	// o
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_2.setTransform(203.175,47.95);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(264).to({_off:false},0).to({_off:true},36).wait(158));

	// t
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_3.setTransform(177.65,44.9015);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(227).to({_off:false},0).to({_off:true},38).wait(193));

	// s
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_4.setTransform(155.575,47.8506);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(190).to({_off:false},0).to({_off:true},38).wait(230));

	// a
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_5.setTransform(112.125,47.825);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(152).to({_off:false},0).to({_off:true},38).wait(268));

	// l
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgWC4QgRgIgIgPQgHgQAAgYIAAk3IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA4IgPABIgQABQgdAAgRgHg");
	this.shape_6.setTransform(76.575,42.6);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(105).to({_off:false},0).to({_off:true},47).wait(306));

	// l
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgWC4QgRgIgIgPQgHgQAAgYIAAk3IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA4IgPABIgQABQgdAAgRgHg");
	this.shape_7.setTransform(60.375,42.6);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(67).to({_off:false},0).to({_off:true},38).wait(353));

	// e
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_8.setTransform(35.7013,47.95);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(30).to({_off:false},0).to({_off:true},37).wait(391));

	// t
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgSgIg");
	this.shape_9.setTransform(10.95,44.9015);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(6).to({_off:false},0).to({_off:true},24).wait(428));

	// tell a story
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhrB6QAXABAOgFQAOgEAIgJQAIgJAEgNIhqkLIBRAAIA+DAIAEAAIA7jAIBPAAIhbD0QgNAkgNAYQgPAYgQAOQgRAPgZAGQgZAGgjAAg");
	this.shape_10.setTransform(255.2,52.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_11.setTransform(231.125,47.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_12.setTransform(203.175,47.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_13.setTransform(177.65,44.9015);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_14.setTransform(155.575,47.8506);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_15.setTransform(112.125,47.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgWC4QgRgIgIgPQgHgQAAgYIAAk3IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA4IgPABIgQABQgdAAgRgHg");
	this.shape_16.setTransform(76.575,42.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgWC4QgRgIgIgPQgHgQAAgYIAAk3IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA4IgPABIgQABQgdAAgRgHg");
	this.shape_17.setTransform(60.375,42.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_18.setTransform(35.7013,47.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgSgIg");
	this.shape_19.setTransform(10.95,44.9015);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AhrB6QAXABAOgFQAOgEAIgJQAIgJAEgNIhqkLIBRAAIA+DAIAEAAIA7jAIBPAAIhbD0QgNAkgNAYQgPAYgQAOQgRAPgZAGQgZAGgjAAg");
	this.shape_20.setTransform(255.2,52.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_21.setTransform(231.125,47.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_22.setTransform(203.175,47.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_23.setTransform(177.65,44.9015);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_24.setTransform(155.575,47.8506);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_25.setTransform(112.125,47.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgWC4QgRgIgIgPQgHgQAAgYIAAk3IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA4IgPABIgQABQgdAAgRgHg");
	this.shape_26.setTransform(76.575,42.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgWC4QgRgIgIgPQgHgQAAgYIAAk3IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA4IgPABIgQABQgdAAgRgHg");
	this.shape_27.setTransform(60.375,42.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_28.setTransform(35.7013,47.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgSgIg");
	this.shape_29.setTransform(10.95,44.9015);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},359).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},46).to({state:[]},1).wait(52));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,272.8,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,272.9,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,272.8,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// n
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAzCKIAAilQAAgbgJgMQgJgMgaABQgWgBgOAJQgPAIgGAVIAACyIhIAAIAAkNIBIAAIAAAgQALgTAWgKQAVgIAegBQAhAAAUALQATAKAJAUQAIAUAAAeIAAC4g");
	this.shape.setTransform(427.875,47.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(431).to({_off:false},0).to({_off:true},31).wait(76));

	// i
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgEgIQgDgIAAgRQAAgRADgIQAEgIAJgDQAJgCAPAAQAQAAAJACQAJADAEAIQACAIAAARQAAARgCAIQgEAIgJADQgJACgQAAQgPAAgJgCg");
	this.shape_1.setTransform(403.75,42.2708);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(399).to({_off:false},0).to({_off:true},32).wait(107));

	// a
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_2.setTransform(379.275,47.825);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(365).to({_off:false},0).to({_off:true},34).wait(139));

	// t
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUABgjIAAh+IgkAAIAAg5IAkAAIAAhAIBHAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgSgIg");
	this.shape_3.setTransform(354.65,44.9015);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(331).to({_off:false},0).to({_off:true},34).wait(173));

	// n
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAzCKIAAilQAAgbgJgMQgJgMgaABQgWgBgOAJQgPAIgGAVIAACyIhIAAIAAkNIBIAAIAAAgQALgTAWgKQAVgIAegBQAhAAAUALQATAKAJAUQAIAUAAAeIAAC4g");
	this.shape_4.setTransform(328.975,47.7);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(301).to({_off:false},0).to({_off:true},30).wait(207));

	// u
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhUB/QgUgKgJgUQgIgUAAgeIAAi3IBIAAIAACkQAAAbAJALQAJANAaAAQAUAAAPgJQAOgIAGgVIAAixIBIAAIAAENIhBAAIgGghQgLAUgVAIQgUAJgeAAQghAAgUgKg");
	this.shape_5.setTransform(296.125,48.2);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(267).to({_off:false},0).to({_off:true},34).wait(237));

	// o
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_6.setTransform(263.975,47.95);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(238).to({_off:false},0).to({_off:true},29).wait(271));

	// m
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("ACACKIAAilQAAgbgJgMQgKgMgXABQgVgBgNAKQgMAJgFAVIAACwIhIAAIAAilQABgbgKgMQgJgMgVABQgXgBgLAJQgLAJgGATIAACzIhIAAIAAkNIBIAAIAAAeQALgSASgJQATgIAdAAQAeAAASAJQATAKAIATQALgUAXgJQAVgJAeAAQAtgBAXAYQAWAWAAAzIAACyg");
	this.shape_7.setTransform(224,47.6995);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(205).to({_off:false},0).to({_off:true},33).wait(300));

	// a
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_8.setTransform(169.175,47.825);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(170).to({_off:false},0).to({_off:true},35).wait(333));

	// b
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgSC7QgQgFgKgKQgKgJgFgNIgFAmIhCAAIAAl7IBJAAIAACOQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAeAAArQAAAngJAgQgIAfgYASQgXATgsAAQgYABgRgGgAglgWQgOAKgFASQgGATABAcQgBAZAGAUQAFASAOALQAOAKAXAAQAZAAAMgLQAMgMAEgTQAEgTAAgXQAAgagEgSQgEgTgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_9.setTransform(124.4263,42.7);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(134).to({_off:false},0).to({_off:true},36).wait(368));

	// m
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AB/CKIAAilQABgbgKgMQgJgMgWABQgWgBgMAKQgNAJgFAVIAACwIhHAAIAAilQgBgbgIgMQgKgMgWABQgVgBgMAJQgMAJgEATIAACzIhJAAIAAkNIBJAAIAAAeQAKgSASgJQATgIAcAAQAfAAATAJQARAKAKATQALgUAVgJQAWgJAeAAQAugBAWAYQAWAWAAAzIAACyg");
	this.shape_10.setTransform(83.2,47.6995);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(102).to({_off:false},0).to({_off:true},32).wait(404));

	// i
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgEgIQgDgIAAgRQAAgRADgIQAEgIAJgDQAJgCAPAAQAQAAAJACQAJADAEAIQACAIAAARQAAARgCAIQgEAIgJADQgJACgQAAQgPAAgJgCg");
	this.shape_11.setTransform(51.4,42.2708);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(67).to({_off:false},0).to({_off:true},35).wait(436));

	// l
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgWC4QgRgIgIgPQgHgQAAgYIAAk3IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA4IgPABIgQABQgdAAgRgHg");
	this.shape_12.setTransform(37.125,42.6);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(33).to({_off:false},0).to({_off:true},34).wait(471));

	// c
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgoCAQgegNgQgeQgQgfAAg2QAAg1AQgfQAQgfAegMQAegMApAAQAUAAASADQATABAMAFIAAA8QgOgFgOgCQgPgDgRAAQgYAAgPAHQgOAIgHARQgHARAAAfQAAAfAHASQAHARAPAHQAPAHAZAAQAQAAAPgCQAPgDAPgFIAAA8QgIADgMACIgaAEIgaABIgDAAQgnAAgdgMg");
	this.shape_13.setTransform(14.625,47.95);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(6).to({_off:false},0).to({_off:true},27).wait(505));

	// climb a mountain
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAzCKIAAilQAAgbgJgMQgJgMgaABQgWgBgOAJQgPAIgGAVIAACyIhIAAIAAkNIBIAAIAAAgQALgTAWgKQAVgIAegBQAhAAAUALQATAKAJAUQAIAUAAAeIAAC4g");
	this.shape_14.setTransform(427.875,47.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgEgIQgDgIAAgRQAAgRADgIQAEgIAJgDQAJgCAPAAQAQAAAJACQAJADAEAIQACAIAAARQAAARgCAIQgEAIgJADQgJACgQAAQgPAAgJgCg");
	this.shape_15.setTransform(403.75,42.2708);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_16.setTransform(379.275,47.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgJChQgTgIgJgTQgJgUABgjIAAh+IgkAAIAAg5IAkAAIAAhAIBHAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgSgIg");
	this.shape_17.setTransform(354.65,44.9015);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAzCKIAAilQAAgbgJgMQgJgMgaABQgWgBgOAJQgPAIgGAVIAACyIhIAAIAAkNIBIAAIAAAgQALgTAWgKQAVgIAegBQAhAAAUALQATAKAJAUQAIAUAAAeIAAC4g");
	this.shape_18.setTransform(328.975,47.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhUB/QgUgKgJgUQgIgUAAgeIAAi3IBIAAIAACkQAAAbAJALQAJANAaAAQAUAAAPgJQAOgIAGgVIAAixIBIAAIAAENIhBAAIgGghQgLAUgVAIQgUAJgeAAQghAAgUgKg");
	this.shape_19.setTransform(296.125,48.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_20.setTransform(263.975,47.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ACACKIAAilQAAgbgJgMQgKgMgXABQgVgBgNAKQgMAJgFAVIAACwIhIAAIAAilQABgbgKgMQgJgMgVABQgXgBgLAJQgLAJgGATIAACzIhIAAIAAkNIBIAAIAAAeQALgSASgJQATgIAdAAQAeAAASAJQATAKAIATQALgUAXgJQAVgJAeAAQAtgBAXAYQAWAWAAAzIAACyg");
	this.shape_21.setTransform(224,47.6995);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_22.setTransform(169.175,47.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgSC7QgQgFgKgKQgKgJgFgNIgFAmIhCAAIAAl7IBJAAIAACOQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAeAAArQAAAngJAgQgIAfgYASQgXATgsAAQgYABgRgGgAglgWQgOAKgFASQgGATABAcQgBAZAGAUQAFASAOALQAOAKAXAAQAZAAAMgLQAMgMAEgTQAEgTAAgXQAAgagEgSQgEgTgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_23.setTransform(124.4263,42.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AB/CKIAAilQABgbgKgMQgJgMgWABQgWgBgMAKQgNAJgFAVIAACwIhHAAIAAilQgBgbgIgMQgKgMgWABQgVgBgMAJQgMAJgEATIAACzIhJAAIAAkNIBJAAIAAAeQAKgSASgJQATgIAcAAQAfAAATAJQARAKAKATQALgUAVgJQAWgJAeAAQAugBAWAYQAWAWAAAzIAACyg");
	this.shape_24.setTransform(83.2,47.6995);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgEgIQgDgIAAgRQAAgRADgIQAEgIAJgDQAJgCAPAAQAQAAAJACQAJADAEAIQACAIAAARQAAARgCAIQgEAIgJADQgJACgQAAQgPAAgJgCg");
	this.shape_25.setTransform(51.4,42.2708);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgWC4QgRgIgIgPQgHgQAAgYIAAk3IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA4IgPABIgQABQgdAAgRgHg");
	this.shape_26.setTransform(37.125,42.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgoCAQgegNgQgeQgQgfAAg2QAAg1AQgfQAQgfAegMQAegMApAAQAUAAASADQATABAMAFIAAA8QgOgFgOgCQgPgDgRAAQgYAAgPAHQgOAIgHARQgHARAAAfQAAAfAHASQAHARAPAHQAPAHAZAAQAQAAAPgCQAPgDAPgFIAAA8QgIADgMACIgaAEIgaABIgDAAQgnAAgdgMg");
	this.shape_27.setTransform(14.625,47.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AAzCKIAAilQAAgbgJgMQgJgMgaABQgWgBgOAJQgPAIgGAVIAACyIhIAAIAAkNIBIAAIAAAgQALgTAWgKQAVgIAegBQAhAAAUALQATAKAJAUQAIAUAAAeIAAC4g");
	this.shape_28.setTransform(427.875,47.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgEgIQgDgIAAgRQAAgRADgIQAEgIAJgDQAJgCAPAAQAQAAAJACQAJADAEAIQACAIAAARQAAARgCAIQgEAIgJADQgJACgQAAQgPAAgJgCg");
	this.shape_29.setTransform(403.75,42.2708);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_30.setTransform(379.275,47.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUABgjIAAh+IgkAAIAAg5IAkAAIAAhAIBHAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgSgIg");
	this.shape_31.setTransform(354.65,44.9015);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AAzCKIAAilQAAgbgJgMQgJgMgaABQgWgBgOAJQgPAIgGAVIAACyIhIAAIAAkNIBIAAIAAAgQALgTAWgKQAVgIAegBQAhAAAUALQATAKAJAUQAIAUAAAeIAAC4g");
	this.shape_32.setTransform(328.975,47.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AhUB/QgUgKgJgUQgIgUAAgeIAAi3IBIAAIAACkQAAAbAJALQAJANAaAAQAUAAAPgJQAOgIAGgVIAAixIBIAAIAAENIhBAAIgGghQgLAUgVAIQgUAJgeAAQghAAgUgKg");
	this.shape_33.setTransform(296.125,48.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_34.setTransform(263.975,47.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("ACACKIAAilQAAgbgJgMQgKgMgXABQgVgBgNAKQgMAJgFAVIAACwIhIAAIAAilQABgbgKgMQgJgMgVABQgXgBgLAJQgLAJgGATIAACzIhIAAIAAkNIBIAAIAAAeQALgSASgJQATgIAdAAQAeAAASAJQATAKAIATQALgUAXgJQAVgJAeAAQAtgBAXAYQAWAWAAAzIAACyg");
	this.shape_35.setTransform(224,47.6995);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_36.setTransform(169.175,47.825);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgSC7QgQgFgKgKQgKgJgFgNIgFAmIhCAAIAAl7IBJAAIAACOQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAeAAArQAAAngJAgQgIAfgYASQgXATgsAAQgYABgRgGgAglgWQgOAKgFASQgGATABAcQgBAZAGAUQAFASAOALQAOAKAXAAQAZAAAMgLQAMgMAEgTQAEgTAAgXQAAgagEgSQgEgTgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_37.setTransform(124.4263,42.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AB/CKIAAilQABgbgKgMQgJgMgWABQgWgBgMAKQgNAJgFAVIAACwIhHAAIAAilQgBgbgIgMQgKgMgWABQgVgBgMAJQgMAJgEATIAACzIhJAAIAAkNIBJAAIAAAeQAKgSASgJQATgIAcAAQAfAAATAJQARAKAKATQALgUAVgJQAWgJAeAAQAugBAWAYQAWAWAAAzIAACyg");
	this.shape_38.setTransform(83.2,47.6995);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgEgIQgDgIAAgRQAAgRADgIQAEgIAJgDQAJgCAPAAQAQAAAJACQAJADAEAIQACAIAAARQAAARgCAIQgEAIgJADQgJACgQAAQgPAAgJgCg");
	this.shape_39.setTransform(51.4,42.2708);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AgWC4QgRgIgIgPQgHgQAAgYIAAk3IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA4IgPABIgQABQgdAAgRgHg");
	this.shape_40.setTransform(37.125,42.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgoCAQgegNgQgeQgQgfAAg2QAAg1AQgfQAQgfAegMQAegMApAAQAUAAASADQATABAMAFIAAA8QgOgFgOgCQgPgDgRAAQgYAAgPAHQgOAIgHARQgHARAAAfQAAAfAHASQAHARAPAHQAPAHAZAAQAQAAAPgCQAPgDAPgFIAAA8QgIADgMACIgaAEIgaABIgDAAQgnAAgdgMg");
	this.shape_41.setTransform(14.625,47.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},462).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},51).to({state:[]},1).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,446.8,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,446.9,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,446.8,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape.setTransform(288,44.9015);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(228).to({_off:false},0).to({_off:true},32).wait(43));

	// a
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_1.setTransform(261.825,47.825);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(194).to({_off:false},0).to({_off:true},34).wait(75));

	// o
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_2.setTransform(230.775,47.95);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(162).to({_off:false},0).to({_off:true},32).wait(109));

	// b
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgSC7QgQgFgKgKQgKgJgFgNIgFAmIhCAAIAAl7IBJAAIAACOQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAeAAArQAAAngJAgQgIAfgYASQgXATgsAAQgYABgRgGgAglgWQgOAKgFASQgGATABAcQgBAZAGAUQAFASAOALQAOAKAXAAQAZAAAMgLQAMgMAEgTQAEgTAAgXQAAgagEgSQgEgTgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_3.setTransform(198.9763,42.7);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(130).to({_off:false},0).to({_off:true},32).wait(141));

	// a
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_4.setTransform(151.075,47.825);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(93).to({_off:false},0).to({_off:true},37).wait(173));

	// w
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAtCHIgsi3IgCAAIgtC3IhbAAIhIkNIBNAAIAqDCIADAAIAwjCIBQAAIAwDCIADAAIAqjCIBNAAIhKENg");
	this.shape_5.setTransform(99.8,47.95);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(58).to({_off:false},0).to({_off:true},35).wait(210));

	// o
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_6.setTransform(61.425,47.95);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(28).to({_off:false},0).to({_off:true},30).wait(245));

	// r
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_7.setTransform(36.375,47.7);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(4).to({_off:false},0).to({_off:true},24).wait(275));

	// take a photo
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_8.setTransform(288,44.9015);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_9.setTransform(261.825,47.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_10.setTransform(230.775,47.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSC7QgQgFgKgKQgKgJgFgNIgFAmIhCAAIAAl7IBJAAIAACOQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAeAAArQAAAngJAgQgIAfgYASQgXATgsAAQgYABgRgGgAglgWQgOAKgFASQgGATABAcQgBAZAGAUQAFASAOALQAOAKAXAAQAZAAAMgLQAMgMAEgTQAEgTAAgXQAAgagEgSQgEgTgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_11.setTransform(198.9763,42.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_12.setTransform(151.075,47.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAtCHIgsi3IgCAAIgtC3IhbAAIhIkNIBNAAIAqDCIADAAIAwjCIBQAAIAwDCIADAAIAqjCIBNAAIhKENg");
	this.shape_13.setTransform(99.8,47.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_14.setTransform(61.425,47.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_15.setTransform(36.375,47.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_16.setTransform(288,44.9015);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_17.setTransform(261.825,47.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_18.setTransform(230.775,47.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgSC7QgQgFgKgKQgKgJgFgNIgFAmIhCAAIAAl7IBJAAIAACOQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAeAAArQAAAngJAgQgIAfgYASQgXATgsAAQgYABgRgGgAglgWQgOAKgFASQgGATABAcQgBAZAGAUQAFASAOALQAOAKAXAAQAZAAAMgLQAMgMAEgTQAEgTAAgXQAAgagEgSQgEgTgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_19.setTransform(198.9763,42.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_20.setTransform(151.075,47.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AAtCHIgsi3IgCAAIgtC3IhbAAIhIkNIBNAAIAqDCIADAAIAwjCIBQAAIAwDCIADAAIAqjCIBNAAIhKENg");
	this.shape_21.setTransform(99.8,47.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_22.setTransform(61.425,47.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_23.setTransform(36.375,47.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},260).wait(43));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(22.9,0,277.3,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(22.9,0,277.4,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(22.9,0,277.3,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F99703").s().p("Ah9CPQgHgHgBgIIgBj7QABgIAEgHIAEgEQAIgIAMAAQAFAAAFACIDcB/IABACQAFAEACAFQACAFAAAFQAAAGgCAEQgCAFgFAEIgEAFIjZB9QgFACgFAAQgMAAgIgIg");
	this.shape.setTransform(3.8522,-0.0294,0.9526,0.9526);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F99703").ss(3,1,1).p("AiKCKQg6g5AAhRQAAhQA6g6QA6g5BQAAQBRAAA6A5QA6A6AABQQAABRg6A5Qg6A6hRAAQhQAAg6g6g");
	this.shape_1.setTransform(-0.0192,-0.0055,1.452,1.452);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiKCKQg5g5gBhRQABhQA5g6QA5g5BRAAQBRAAA5A5QA7A6AABQQAABRg7A5Qg5A6hRAAQhRAAg5g6g");
	this.shape_2.setTransform(-0.0192,-0.0055,1.452,1.452);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-30,-30,60.1,60);
p.frameBounds = [rect];


(lib.元件30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F99703").ss(5,1,1).p("ABChxIAADjAhBhxIAADj");
	this.shape.setTransform(0.075,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F99703").ss(5,1,1).p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQBUBUAAB1QAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQBUBUAAB1QAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-31,62.1,62);
p.frameBounds = [rect];


(lib.元件28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F99703").s().p("AhpB4QgFgGgCgHIAAjSQAAgGAEgGIADgEQAHgHAKAAQAFAAADACIC5BrIABABQAEADABAFQACAEAAAEQAAAFgCAEQgBAEgEADIgEAFIi1BoQgEACgFAAQgKgBgHgGg");
	this.shape.setTransform(8.238,0,0.9111,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F99703").s().p("Ag+A9QgZAAAAgZIAAhGQAAgaAZAAICWAAIAAB5g");
	this.shape_1.setTransform(-7.2459,0.0026,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F99703").ss(5,1,1).p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQAMALAKAMQAFAGAEAHQA1BIAABdQAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_2.setTransform(0.025,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTIAWAYIAJAMQA1BIAABdQAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_3.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-31,62.1,62);
p.frameBounds = [rect];


(lib.元件27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F99703").s().p("AhpB4QgFgGgCgHIAAjSQAAgGAEgGIADgEQAHgHAKAAQAFAAADACIC5BrIABABQAEADABAFQACAEAAAEQAAAFgCAEQgBAEgEADIgEAFIi1BoQgEACgFAAQgKgBgHgGg");
	this.shape.setTransform(-7.838,0,0.9111,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F99703").s().p("Ag+A9QgZAAAAgZIAAhGQAAgaAZAAICWAAIAAB5g");
	this.shape_1.setTransform(7.6459,0.0026,1.1,1.1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F99703").ss(5,1,1).p("AjJDJQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQAMALAKAMQAFAGAEAHQA1BIAABdQAAB2hUBTQhTBUh2AAQh1AAhUhUg");
	this.shape_2.setTransform(0.025,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjJDJQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTIAWAYIAJAMQA1BIAABdQAAB2hUBTQhTBUh2AAQh1AAhUhUg");
	this.shape_3.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-31,62.1,62);
p.frameBounds = [rect];


(lib.元件21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// o
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape.setTransform(302.175,47.95);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(269).to({_off:false},0).to({_off:true},31).wait(76));

	// t
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_1.setTransform(276.65,44.9015);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(242).to({_off:false},0).to({_off:true},27).wait(107));

	// o
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_2.setTransform(251.325,47.95);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(211).to({_off:false},0).to({_off:true},31).wait(134));

	// h
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAzC+IAAilQAAgbgJgLQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAKAJATQAIAVAAAdIAAC4g");
	this.shape_3.setTransform(219.025,42.45);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(180).to({_off:false},0).to({_off:true},31).wait(165));

	// p
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AiCC8IAAlxIBJAAIAAAgQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAfAAArQAAAngJAfQgIAfgYASQgXATgsAAQgjAAgTgLQgTgKgHgSIAACHgAglh6QgOAKgFATQgGATABAcQgBAZAGAUQAFARAOALQAOAKAXAAQAZAAAMgLQAMgMAEgSQAEgTAAgXQAAgagEgSQgEgUgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_4.setTransform(186.7263,52.7);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(151).to({_off:false},0).to({_off:true},29).wait(196));

	// a
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_5.setTransform(138.825,47.825);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(119).to({_off:false},0).to({_off:true},32).wait(225));

	// e
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_6.setTransform(94.8013,47.95);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(89).to({_off:false},0).to({_off:true},30).wait(257));

	// k
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADQIAQAAIBFhiIBUAAIhgB9IBkCQg");
	this.shape_7.setTransform(66.625,42.45);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(59).to({_off:false},0).to({_off:true},30).wait(287));

	// a
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_8.setTransform(33.325,47.825);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(26).to({_off:false},0).to({_off:true},33).wait(317));

	// t
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgSABIgRABIgEABQgfAAgSgIg");
	this.shape_9.setTransform(8.7,44.9015);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(4).to({_off:false},0).to({_off:true},22).wait(350));

	// play a game
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_10.setTransform(302.175,47.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_11.setTransform(276.65,44.9015);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_12.setTransform(251.325,47.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAzC+IAAilQAAgbgJgLQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAKAJATQAIAVAAAdIAAC4g");
	this.shape_13.setTransform(219.025,42.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AiCC8IAAlxIBJAAIAAAgQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAfAAArQAAAngJAfQgIAfgYASQgXATgsAAQgjAAgTgLQgTgKgHgSIAACHgAglh6QgOAKgFATQgGATABAcQgBAZAGAUQAFARAOALQAOAKAXAAQAZAAAMgLQAMgMAEgSQAEgTAAgXQAAgagEgSQgEgUgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_14.setTransform(186.7263,52.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_15.setTransform(138.825,47.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_16.setTransform(94.8013,47.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADQIAQAAIBFhiIBUAAIhgB9IBkCQg");
	this.shape_17.setTransform(66.625,42.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_18.setTransform(33.325,47.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgSABIgRABIgEABQgfAAgSgIg");
	this.shape_19.setTransform(8.7,44.9015);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_20.setTransform(302.175,47.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_21.setTransform(276.65,44.9015);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_22.setTransform(251.325,47.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AAzC+IAAilQAAgbgJgLQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAKAJATQAIAVAAAdIAAC4g");
	this.shape_23.setTransform(219.025,42.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AiCC8IAAlxIBJAAIAAAgQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAfAAArQAAAngJAfQgIAfgYASQgXATgsAAQgjAAgTgLQgTgKgHgSIAACHgAglh6QgOAKgFATQgGATABAcQgBAZAGAUQAFARAOALQAOAKAXAAQAZAAAMgLQAMgMAEgSQAEgTAAgXQAAgagEgSQgEgUgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_24.setTransform(186.7263,52.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_25.setTransform(138.825,47.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_26.setTransform(94.8013,47.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADQIAQAAIBFhiIBUAAIhgB9IBkCQg");
	this.shape_27.setTransform(66.625,42.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_28.setTransform(33.325,47.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgSABIgRABIgEABQgfAAgSgIg");
	this.shape_29.setTransform(8.7,44.9015);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},300).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},47).to({state:[]},1).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.2,0,323,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-2.2,0,323.1,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-2.2,0,323,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件20_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// e
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_2.setTransform(300.8013,47.95);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(262).to({_off:false},0).to({_off:true},33).wait(70));

	// m
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AB/CKIAAilQABgbgKgMQgJgMgWABQgWgBgMAKQgNAJgFAVIAACwIhHAAIAAilQAAgbgKgMQgJgMgVABQgXgBgLAJQgMAJgFATIAACzIhIAAIAAkNIBIAAIAAAeQALgSASgJQATgIAcAAQAfAAATAJQARAKAJATQALgUAXgJQAVgJAeAAQAugBAWAYQAWAWAAAzIAACyg");
	this.shape_3.setTransform(261.6,47.6995);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(229).to({_off:false},0).to({_off:true},33).wait(103));

	// a
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_4.setTransform(220.625,47.825);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(200).to({_off:false},0).to({_off:true},29).wait(136));

	// g
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ag4C6QgVgCgRgDIAAg5QAQADATACQATADASAAQAqAAAUgPQAUgQAAgmIAAgOQgIASgTAKQgTALgjAAQgrAAgYgSQgYgRgJgeQgKgfABgpQgBgmAKgeQAJgfAYgUQAYgSArgBQAjAAAUALQASAKAIATIAAgiIBIAAIAAD3QAAAmgOAbQgOAbghAOQghAPg3ABQgTAAgUgCgAgkh4QgNALgDATQgEATAAAWQAAAYAEASQAEATAMALQAMAMAYAAQAaAAAOgKQAOgLAFgRQAFgTgBgbQABgagFgSQgFgTgOgKQgOgLgaAAQgYABgMAMg");
	this.shape_5.setTransform(188.2496,52.7);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(161).to({_off:false},0).to({_off:true},39).wait(165));

	// a
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_6.setTransform(141.675,47.825);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(131).to({_off:false},0).to({_off:true},30).wait(204));

	// y
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AhqB6QAWABAOgFQAOgEAIgJQAIgJADgNIhokLIBQAAIA/DAIACAAIA9jAIBNAAIhaD0QgNAkgOAYQgNAYgRAOQgRAPgZAGQgZAGgiAAg");
	this.shape_7.setTransform(97.75,52.95);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(101).to({_off:false},0).to({_off:true},30).wait(234));

	// a
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_8.setTransform(65.925,47.825);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(73).to({_off:false},0).to({_off:true},28).wait(264));

	// l
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgWC4QgRgIgIgPQgHgQAAgYIAAk3IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA4IgPABIgQABQgdAAgRgHg");
	this.shape_9.setTransform(44.225,42.6);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(39).to({_off:false},0).to({_off:true},34).wait(292));

	// p
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AiCC8IAAlxIBJAAIAAAgQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAfAAArQAAAngJAfQgIAfgYASQgXATgsAAQgjAAgTgLQgTgKgHgSIAACHgAglh6QgOAKgFATQgGATABAcQgBAZAGAUQAFARAOALQAOAKAXAAQAZAAAMgLQAMgMAEgSQAEgTAAgXQAAgagEgSQgEgUgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_10.setTransform(18.8263,52.7);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(13).to({_off:false},0).to({_off:true},26).wait(326));

	// play a game
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_11.setTransform(300.8013,47.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AB/CKIAAilQABgbgKgMQgJgMgWABQgWgBgMAKQgNAJgFAVIAACwIhHAAIAAilQAAgbgKgMQgJgMgVABQgXgBgLAJQgMAJgFATIAACzIhIAAIAAkNIBIAAIAAAeQALgSASgJQATgIAcAAQAfAAATAJQARAKAJATQALgUAXgJQAVgJAeAAQAugBAWAYQAWAWAAAzIAACyg");
	this.shape_12.setTransform(261.6,47.6995);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_13.setTransform(220.625,47.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("Ag4C6QgVgCgRgDIAAg5QAQADATACQATADASAAQAqAAAUgPQAUgQAAgmIAAgOQgIASgTAKQgTALgjAAQgrAAgYgSQgYgRgJgeQgKgfABgpQgBgmAKgeQAJgfAYgUQAYgSArgBQAjAAAUALQASAKAIATIAAgiIBIAAIAAD3QAAAmgOAbQgOAbghAOQghAPg3ABQgTAAgUgCgAgkh4QgNALgDATQgEATAAAWQAAAYAEASQAEATAMALQAMAMAYAAQAaAAAOgKQAOgLAFgRQAFgTgBgbQABgagFgSQgFgTgOgKQgOgLgaAAQgYABgMAMg");
	this.shape_14.setTransform(188.2496,52.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_15.setTransform(141.675,47.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AhqB6QAWABAOgFQAOgEAIgJQAIgJADgNIhokLIBQAAIA/DAIACAAIA9jAIBNAAIhaD0QgNAkgOAYQgNAYgRAOQgRAPgZAGQgZAGgiAAg");
	this.shape_16.setTransform(97.75,52.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_17.setTransform(65.925,47.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgWC4QgRgIgIgPQgHgQAAgYIAAk3IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA4IgPABIgQABQgdAAgRgHg");
	this.shape_18.setTransform(44.225,42.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AiCC8IAAlxIBJAAIAAAgQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAfAAArQAAAngJAfQgIAfgYASQgXATgsAAQgjAAgTgLQgTgKgHgSIAACHgAglh6QgOAKgFATQgGATABAcQgBAZAGAUQAFARAOALQAOAKAXAAQAZAAAMgLQAMgMAEgSQAEgTAAgXQAAgagEgSQgEgUgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_19.setTransform(18.8263,52.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_20.setTransform(300.8013,47.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AB/CKIAAilQABgbgKgMQgJgMgWABQgWgBgMAKQgNAJgFAVIAACwIhHAAIAAilQAAgbgKgMQgJgMgVABQgXgBgLAJQgMAJgFATIAACzIhIAAIAAkNIBIAAIAAAeQALgSASgJQATgIAcAAQAfAAATAJQARAKAJATQALgUAXgJQAVgJAeAAQAugBAWAYQAWAWAAAzIAACyg");
	this.shape_21.setTransform(261.6,47.6995);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_22.setTransform(220.625,47.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("Ag4C6QgVgCgRgDIAAg5QAQADATACQATADASAAQAqAAAUgPQAUgQAAgmIAAgOQgIASgTAKQgTALgjAAQgrAAgYgSQgYgRgJgeQgKgfABgpQgBgmAKgeQAJgfAYgUQAYgSArgBQAjAAAUALQASAKAIATIAAgiIBIAAIAAD3QAAAmgOAbQgOAbghAOQghAPg3ABQgTAAgUgCgAgkh4QgNALgDATQgEATAAAWQAAAYAEASQAEATAMALQAMAMAYAAQAaAAAOgKQAOgLAFgRQAFgTgBgbQABgagFgSQgFgTgOgKQgOgLgaAAQgYABgMAMg");
	this.shape_23.setTransform(188.2496,52.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_24.setTransform(141.675,47.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AhqB6QAWABAOgFQAOgEAIgJQAIgJADgNIhokLIBQAAIA/DAIACAAIA9jAIBNAAIhaD0QgNAkgOAYQgNAYgRAOQgRAPgZAGQgZAGgiAAg");
	this.shape_25.setTransform(97.75,52.95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_26.setTransform(65.925,47.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgWC4QgRgIgIgPQgHgQAAgYIAAk3IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA4IgPABIgQABQgdAAgRgHg");
	this.shape_27.setTransform(44.225,42.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AiCC8IAAlxIBJAAIAAAgQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAfAAArQAAAngJAfQgIAfgYASQgXATgsAAQgjAAgTgLQgTgKgHgSIAACHgAglh6QgOAKgFATQgGATABAcQgBAZAGAUQAFARAOALQAOAKAXAAQAZAAAMgLQAMgMAEgSQAEgTAAgXQAAgagEgSQgEgUgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_28.setTransform(18.8263,52.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},295).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},44).to({state:[]},1).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,318.5,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,318.6,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,318.5,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgA3IgKgbIgsAAIgJAbIgaAAIAqhuIAgAAIAoBugAAPAIIgOgqIgBAAIgPAqIAeAAg");
	this.shape.setTransform(36.65,25.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F99703").s().p("AglBYQgyAAAAgyIAAhLQAAgyAyAAIBLAAQAyAAAAAyIAABLQAAAygyAAg");
	this.shape_1.setTransform(36.7,26.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIA3QgKgDgHgGQgHgGgEgLQgDgLAAgSQAAgUAGgNQAHgMAMgGQAMgFAPAAIAPABQAGABAFACIAAAVIgLgDIgNgBQgKAAgGADQgGAEgDAIQgDAIAAAMQAAAOADAIQADAIAGADQAGADAJAAIAOgBQAGgBAGgCIAAAVIgMADIgPABQgMAAgJgCg");
	this.shape_2.setTransform(45.275,43.2479);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F99703").s().p("AglBYQgyAAAAgyIAAhLQAAgyAyAAIBLAAQAyAAAAAyIAABLQAAAygyAAg");
	this.shape_3.setTransform(45.55,43.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoA3IAAhtIAmAAQAPAAAIADQAKADADAHQAEAGgBAKQABAJgEAGQgDAGgKACIAAABQAKACAFAGQAFAGAAALQAAAJgEAIQgDAHgJAEQgKADgPAAgAgQAkIALAAIANgBQAFgBACgEQACgDAAgFQAAgFgCgDQgCgEgFgBIgNgBIgLAAgAgQgJIAIAAQAIAAAEAAQAFgCACgDQACgDABgFQAAgFgDgDQgCgEgFgBIgMAAIgIAAg");
	this.shape_4.setTransform(28.4,43.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F99703").s().p("AglBYQgyAAAAgyIAAhLQAAgyAyAAIBLAAQAyAAAAAyIAABLQAAAygyAAg");
	this.shape_5.setTransform(27.9,43.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(242,244,230,0)").s().p("AlsFtIAArZILZAAIAALZg");
	this.shape_6.setTransform(36.5,36.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F99703").ss(5,1,1).p("AjJDIQhThSAAh2QAAh1BThUQAhggAlgUQA7gfBIAAQAWAAAWADQBaANBDBDQASARANATQA1BIAABdQAABeg1BHQgNATgSAQQggAigmAUQgoAVgvAHQgWADgWAAQhIAAg7gfQglgUghgig");
	this.shape_7.setTransform(36.525,36.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiDD9QglgTghgiQhThSAAh2QAAh1BThUQAhggAlgUQA7gfBIAAQAWAAAWAEQBaAMBDBDQASARANATQA1BIAABdQAABeg1BHQgNASgSARQggAigmATQgoAWgvAHQgWADgWAAQhIAAg7ggg");
	this.shape_8.setTransform(36.525,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,73,73);
p.frameBounds = [rect];


(lib.元件17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiZATQAAhKA1g2QAXgWAbgOQATAPADAdQgEAkAGAKQAGAIAVAWQATASABAGQABAHgIALIgJAJQgFAHAOAHQADAJgcAIQgIACAJACQAHADAJgBQAIABgCAKQAAAGgLADQgOAFAHAJQAJANgDAJQgJAQgygEQgcAAgPAPQgzg1AAhKgABuCFQgHgFAFgKIACgDQATgWADgaQACgLgBgMQgIgkgXgWIgBgBIgBgCQgEgGAEgGQAHgFAIAEIACACQAlAjAAAzIAAALQgEAdgYAfQgHAFgFAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgABRBmIgBgBQgFgEABgIIABgBQAJgNADgMIACgKQgCgVgMgLIgBgBIgCgCQgFgHAHgHQAGgEAJAFIACACQASAXABAXIgCAMQgFASgMAQIgCABQgEACgDAAIgDAAgAAwBRQgEgDgBgCQgBgEACgDQAAgBAAABQAEgGACgEQACgKgIgLIgBAAIABAAIgBgEQAAgEACgDQADgEAEAAQADAAAEACIAEAEQAJALAAAQIAAAAIAAAFQgCAJgIAKIgCABIgFADIgBAAQgDAAgDgDg");
	this.shape.setTransform(0.2235,0.4198,1.0314,1.0314);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F99703").ss(5,1,1).p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQBUBUAAB1QAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F99703").s().p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQBUBUAAB1QAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_2.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-31,62.1,62);
p.frameBounds = [rect];


(lib.元件10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F99703").s().p("AiZATQAAhKA1g2QAXgWAbgOQATAPADAdQgEAkAGAKQAGAIAVAWQATASABAGQABAHgIALIgJAJQgFAHAOAHQADAJgcAIQgIACAJACQAHADAJgBQAIABgCAKQAAAGgLADQgOAFAHAJQAJANgDAJQgJAQgygEQgcAAgPAPQgzg1AAhKgABuCFQgHgFAFgKIACgDQATgWADgaQACgLgBgMQgIgkgXgWIgBgBIgBgCQgEgGAEgGQAHgFAIAEIACACQAlAjAAAzIAAALQgEAdgYAfQgHAFgFAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgABRBmIgBgBQgFgEABgIIABgBQAJgNADgMIACgKQgCgVgMgLIgBgBIgCgCQgFgHAHgHQAGgEAJAFIACACQASAXABAXIgCAMQgFASgMAQIgCABQgEACgDAAIgDAAgAAwBRQgEgDgBgCQgBgEACgDQAAgBAAABQAEgGACgEQACgKgIgLIgBAAIABAAIgBgEQAAgEACgDQADgEAEAAQADAAAEACIAEAEQAJALAAAQIAAAAIAAAFQgCAJgIAKIgCABIgFADIgBAAQgDAAgDgDg");
	this.shape.setTransform(1.7235,-1.0302,1.0314,1.0314);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F99703").ss(5,1,1).p("AjSDSQgLgMgKgMQhChPAAhrQAAh6BXhYQAighAngVQA+ghBLAAQAXAAAYAEQBeANBGBGQASASAOATQA3BMAABhQAABig3BLQgGAGgFAHQgKAMgLAMQgiAigoAVQgqAXgwAHQgYADgXAAQhLAAg+ghQgngVgigig");
	this.shape_1.setTransform(0.225,0.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiJEJQgngVgigiIgVgYQhChPAAhrQAAh6BXhYQAighAngVQA+ghBLAAQAXAAAYAEQBeANBGBGQASASAOATQA3BMAABhQAABig3BLIgLANIgVAYQgiAigoAVQgqAXgwAHQgYADgXAAQhLAAg+ghg");
	this.shape_2.setTransform(0.225,0.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.1,-31.8,64.7,64.6);
p.frameBounds = [rect];


(lib.元件4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"label1":1,"label2":10,"label3":20,"label4":30};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(15));

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AADBTIAAiGIgoAIIAAgdIAxgKIAaAAIAAClg");
	this.shape.setTransform(-276.85,-34.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag5BVIAAggIAlgeQAOgNAIgKQAJgIAEgIQAEgHAAgIQAAgOgIgEQgIgFgMgBIgSACIgUAEIAAgcQAKgDALgCQALgBAMgBQAbAAAPAMQAQAMAAAYQAAAKgDAIQgCAJgGAJQgHAJgLALQgMALgRAPIgKAIIAAACIBHAAIAAAdg");
	this.shape_1.setTransform(-209.825,-34.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Ag1BTIAAgeIASADIASABIANgBQAHgBAEgDQAFgCADgFQADgEAAgHQgBgOgKgFQgKgEgUAAIgMAAIAAgaIAMAAQASAAAJgFQALgEAAgNQgBgLgHgEQgIgEgOAAIgQABIgQADIAAgcIAQgDIAVgCQAMAAAMADQALACAIAFQAIAGAEAIQAEAJAAANQABANgHAJQgGAJgOAFIAAABQAPACAIALQAIAKAAAPQAAAagSAMQgRAMgjAAQgVAAgQgDg");
	this.shape_2.setTransform(-139.55,-34.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AALBTIAAgjIhJAAIAAgiIBChgIApAAIAABkIASAAIAAAeIgSAAIAAAjgAghARIAAABIAsAAIAAhAIgBAAg");
	this.shape_3.setTransform(-57,-34.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape},{t:this.shape_1}]},9).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_2}]},10).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_2},{t:this.shape_3}]},10).wait(24));

	// 图层_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("EgznAO/QgRAAAAgRIAA9bQAAgRARAAMBnPAAAQARAAAAARIAAdbQAAARgRAAg");
	this.shape_4.setTransform(0.025,-91.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(54));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-332.1,-187,664.3,191.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F99703").ss(1,2,1).p("ACfhcIAADWQAAAIgFABIkyAAQgGgBAAgIIAAjWQAAgIAGgBIAbAAIAAgGQBSgoArAcQAsgcBSAoIAAAGIAbAAQAGABAAAIg");
	this.shape.setTransform(28.475,28.4648);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F99703").ss(0.5,2,1).p("AB+hdIAACsIj7AAIAAisIgOAAIAAC7IEXAAIAAi7g");
	this.shape_1.setTransform(28.475,29.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F99703").s().p("AiYCDQgGgBAAgIIAAjWQAAgIAGgBIAbAAIAAgGQBSgoArAcQAsgcBSAoIAAAGIAbAAQAGABAAAIIAADWQAAAIgFABgAiLBsIEXAAIAAi7IgOAAIAACsIj7AAIAAisIgOAAgAAJBPIBXAAQgegLgWAAQgWAAgNALgAhfBPIBXAAQgOgLgVAAQgWAAgeALgABwBFIAAioQhGgcgiAUIAACnQARgHAUAAQAeAAAlAQgAhwhjIAACoQA/gcAqATIAAinQgOgIgVAAQgcAAgqAQg");
	this.shape_2.setTransform(28.475,28.4648);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F99703").ss(5,1,1).p("AjJDJQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQAMAMAKAMQAFAGAEAGQA1BIAABdQAAB2hUBTQhTBUh2AAQh1AAhUhUg");
	this.shape_3.setTransform(28.525,28.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTIAWAXIAJANQA1BIAABdQAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_4.setTransform(28.525,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.5,-2.5,62.1,62);
p.frameBounds = [rect];


(lib.元件1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,102,51,0.8)").ss(3,1,1).p("AoHnTIQPAAQCWAAAACWIAAJ7QAACWiWAAIwPAAQiWAAAAiWIAAp7QAAiWCWAAg");
	this.shape.setTransform(65.0611,43.7569,0.9713,0.9363);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0.298)").s().p("AoHHTQiWABAAiXIAAp5QAAiWCWgBIQPAAQCWABAACWIAAJ5QAACXiWgBg");
	this.shape_1.setTransform(65.0611,43.7569,0.9713,0.9363);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.5,-1.5,133.2,90.6);
p.frameBounds = [rect];


(lib.单词拼读mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"label0":1,"label1":342,"label2":691,"label3":995,"label4":1510};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_341 = function() {
		this.stop();
	}
	this.frame_690 = function() {
		this.stop();
	}
	this.frame_994 = function() {
		this.stop();
	}
	this.frame_1509 = function() {
		this.stop();
	}
	this.frame_1916 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(341).call(this.frame_341).wait(349).call(this.frame_690).wait(304).call(this.frame_994).wait(515).call(this.frame_1509).wait(407).call(this.frame_1916).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AhkCKQBAgMAzgjQgVgXgUgiIgMAAIgLACIgKgJIB+AAIALgLIASASIgMAGQgbAjgTARQAmAYBAADIAAAFQgTADgDAMQg6gLghgbQg6AihDAIgAAZBSQAZgXAQgZIhWAAQAXAfAWARgAiMCMQAZgqAGguQAHguAAgvQABgwgDgXIAVANIBfAAQgBgIgFgIQgDgJgNgQIAEgCQAbAMADAHIAFAIQAAAHgKAJIBPAAIARgRIAYAXIjfAAQACBKgGAnQgFApgMAdQgNAcgSAZgAgagpIggAAIgOADIgKgKIA4AAIgBgoIAaAOIgJAGIAAAUIBDAAQAAgUgBgTIAcANIgLAHIAAATIAWAAIAQgPIAYAWIg+AAQAAAkABAJIgRAIIAAgLIhDAAIAAAGIgRAHIABg3gAgKgFIBDAAIAAgkIhDAAg");
	this.shape.setTransform(-782,429.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAABwQACgFAAgNIAAifIgBg/IAQAKIBMAAIAKgLIARARIgKAHIABBnIgRAJIAAgKIgxAAQAGAdAPAYQARgMANgMQAMgMAHgKIARAVIgMACQgcAQgWANQAcAmAuALIAAADQgRADgIALQhIgqgKhTIgTAAIAABoIApgWIABAEQgkAegNARgAASgLIBMAAIAAguIhMAAgAAShAIBMAAIAAgvIhMAAgAiPBpIAagGQAAhWgBgUIAaALIgLAJIAABSIAagHIAAh9IgVAAIAAAJIgRAGQACgYAAgcQAAgbgCgaIARAJIA3AAIALgLIAPAPIgKAJQgBA1ACAUIgQAHIAAgMIgUAAIAAA0IAVAAIANgMIASATIg0AAIAAA+IAxgQIACAFQgkAQgfAMQghANgSALgAhigtIA4AAIAAhCIg4AAg");
	this.shape_1.setTransform(-811.85,429.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AA4BtIAAgFQAkADAIAAQAHgBAAgJIAAjUIhoAAQgJABgNADIgLgLICHAAIAMgMIASASIgMAIIAADVQAAALgFAHQgGAHgNAFQgHgSgkgIgAhdBhQAFgIAAgJIAAhzIgGAAQgPABgOADIgLgLIAsAAIAMgMIAQAQIgKAHIAABvIAogkIACAEIgdAmIgTAdgAgWAYIgBg2IARAJIAwAAIAMgNIARARIgLAIIABBKIgQAHIAAgXIgzAAIAAAXIgRAIIABg4gAgGAqIAzAAIAAg4IgzAAgAgqhCIBhAAIANgOIAUAVIhgAAQgJAAgOAEgAhThkQgGgRgQgOIACgDQAXAIAKAJQAKAJgCAKQgDAJgGADIgDAAQgFAAgEgOg");
	this.shape_2.setTransform(-842.2,429.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgLBFIhoAAIgQADIgJgKICBAAIAAgmIhCAAIAAAOIgSAIIABhDIgBhDIATAKIBbAAQAJgNAJgTQAJgSADgOIAZASQgKAEgMAMQgLAMgOASIAwAAIAJgKIAUAOIgLAIQAABJABAXIgRAHIAAgNIhEAAIAAAmIBaAAIAUgTIAaAaIiIAAQAAAyABAQIgTAIIAChKgAAFARIBEAAIAAgpIhEAAgAhNARIBCAAIAAgpIhCAAgAAFgfIBEAAIAAgnIhEAAgAhNgfIBCAAIAAgnIhCAAgAgqhiQgHgTgRgTIADgEQAQAKANAKQANAKgBAJQgBAJgEAEIgFAEQgFAAgFgOg");
	this.shape_3.setTransform(-871.6,429.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AxLJYIAAyvMAiXAAAIAASvg");
	this.shape_4.setTransform(-826.175,430);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1916).wait(1));

	// 单词
	this.instance = new lib.元件20_1("synched",0);
	this.instance.setTransform(3.95,193.2,1,1,0,0,0,159.2,40.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuABAaAOQAZAPAJAbQAKAbgBAiIgBAVIgBAQIitALQABAcASAOQASAOAjAAQARAAARgDQARgCAPgFQAOgEAJgFIAAA5QgMAIgcAFQgcAFgjABIgDAAQgnAAgcgMgAglhFQgNAPgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVgBQggABgOAPg");
	this.shape_5.setTransform(145.5513,200.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AB/CKIAAilQABgbgKgMQgJgMgWABQgWgBgNAKQgMAJgFAVIAACwIhIAAIAAilQABgbgKgMQgJgMgVABQgXgBgLAJQgMAJgFATIAACzIhIAAIAAkNIBIAAIAAAeQALgSASgJQATgIAcAAQAfAAATAJQARAKAKATQALgUAWgJQAVgJAeAAQAugBAWAYQAWAXAAAyIAACyg");
	this.shape_6.setTransform(106.35,200.0995);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_7.setTransform(65.375,200.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag4C5QgVgBgRgDIAAg6QAQAEATADQATABASABQAqAAAUgPQAUgPAAgnIAAgOQgIASgTAKQgTAKgjAAQgrAAgYgRQgYgRgJgeQgKgeABgqQgBglAKggQAJgfAYgSQAYgTArAAQAjgBAUALQASAKAIATIAAgjIBIAAIAAD5QAAAlgOAbQgOAbghAPQghAPg3gBQgTAAgUgCgAgkh4QgNALgDATQgEATAAAWQAAAXAEAUQAEASAMALQAMALAYAAQAaABAOgLQAOgKAFgRQAFgTgBgbQABgagFgSQgFgTgOgKQgOgLgaABQgYAAgMAMg");
	this.shape_8.setTransform(32.9996,205.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_9.setTransform(-13.575,200.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhqB7QAWgBAOgEQAOgEAIgJQAIgJADgOIhokKIBQAAIA/C/IACAAIA9i/IBNAAIhaD0QgNAkgOAYQgNAZgRAOQgRAOgZAGQgZAGgiAAg");
	this.shape_10.setTransform(-57.5,205.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_11.setTransform(-89.325,200.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWC4QgRgHgIgQQgHgQAAgXIAAk4IBIAAIAAEmQAAASAFAGQAFAGAMAAIAHAAIAIgBIAAA3IgPACIgQABQgdABgRgIg");
	this.shape_12.setTransform(-111.025,195);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AiCC7IAAlxIBJAAIAAAhQAHgQAUgKQATgLAiAAQAsAAAXAQQAYASAIAgQAJAeAAArQAAAogJAeQgIAggYATQgXASgsABQgjAAgTgMQgTgKgHgSIAACGgAglh6QgOAKgFATQgGATABAbQgBAbAGASQAFATAOAKQAOALAXAAQAZgBAMgMQAMgLAEgSQAEgTAAgYQAAgYgEgUQgEgTgMgLQgNgLgYAAQgXgBgOALg");
	this.shape_13.setTransform(-136.4237,205.1);

	this.instance_1 = new lib.元件21("synched",0);
	this.instance_1.setTransform(3.95,193.2,1,1,0,0,0,159.2,40.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAACMQgpABgdgNQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAHQANAIAUAAQAWAAANgIQANgHAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_14.setTransform(146.925,200.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_15.setTransform(121.4,197.3015);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAACMQgpABgdgNQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAHQANAIAUAAQAWAAANgIQANgHAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_16.setTransform(96.075,200.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAzC+IAAimQAAgZgJgMQgKgNgZABQgWgBgOAKQgPAIgGAVIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgKQAVgJAeAAQAhAAAUAKQATAKAJAVQAIATAAAdIAAC5g");
	this.shape_17.setTransform(63.775,194.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADRIAQAAIBFhjIBUAAIhgB9IBkCQg");
	this.shape_18.setTransform(-88.625,194.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgSABIgSABIgDABQgfAAgSgIg");
	this.shape_19.setTransform(-146.55,197.3015);

	this.instance_2 = new lib.元件34("synched",0,false);
	this.instance_2.setTransform(4,193.2,1,1,0,0,0,161.5,40.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_20.setTransform(130.5,197.3015);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgSC7QgQgFgKgKQgKgKgFgMIgFAlIhCAAIAAl6IBJAAIAACOQAHgQAUgKQATgLAiAAQAsAAAXAQQAYASAIAgQAJAdAAArQAAAogJAfQgIAggYATQgXASgsABQgYAAgRgGgAglgWQgOAKgFASQgGATABAbQgBAbAGASQAFAUAOAKQAOALAXAAQAZgBAMgMQAMgLAEgTQAEgTAAgYQAAgYgEgUQgEgSgMgLQgNgLgYAAQgXgBgOALg");
	this.shape_21.setTransform(41.4763,195.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAtCHIgsi4IgCAAIgtC4IhbAAIhJkNIBOAAIAqDCIADAAIAwjCIBQAAIAwDCIADAAIAqjCIBNAAIhKENg");
	this.shape_22.setTransform(-57.7,200.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhNCJIAAkNIBIAAIAAAxQAIgWAMgLQAMgNAPgDQAPgEAQAAIAFAAIgCBAIgHAAQgRAAgPAFQgQAFgLAMQgKANgFAWIAACYg");
	this.shape_23.setTransform(-121.125,200.1);

	this.instance_3 = new lib.元件35("synched",0);
	this.instance_3.setTransform(4,193.2,1,1,0,0,0,223.4,40.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAzCJIAAikQAAgbgJgMQgJgMgaAAQgWAAgOAJQgPAIgGAUIAACyIhIAAIAAkNIBIAAIAAAhQALgTAWgJQAVgJAeAAQAhgBAUALQATAKAJAUQAIAUAAAeIAAC3g");
	this.shape_24.setTransform(208.475,200.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgDgIQgEgIAAgRQAAgRAEgIQADgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQADAIAAARQAAARgDAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_25.setTransform(184.35,194.6708);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAzCJIAAikQAAgbgJgMQgJgMgaAAQgWAAgOAJQgPAIgGAUIAACyIhIAAIAAkNIBIAAIAAAhQALgTAWgJQAVgJAeAAQAhgBAUALQATAKAJAUQAIAUAAAeIAAC3g");
	this.shape_26.setTransform(109.575,200.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhUB/QgUgKgJgUQgIgUAAgdIAAi5IBIAAIAAClQAAAbAJAMQAJAMAagBQAUABAPgJQAOgIAGgVIAAiyIBIAAIAAENIhBAAIgGggQgLATgVAKQgUAIgeABQghAAgUgLg");
	this.shape_27.setTransform(76.725,200.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("ACACKIAAilQAAgbgJgMQgKgMgXABQgVgBgNAKQgMAJgFAVIAACwIhIAAIAAilQAAgbgJgMQgJgMgWABQgWgBgLAJQgLAJgGATIAACzIhIAAIAAkNIBIAAIAAAeQALgSATgJQASgIAdAAQAeAAASAJQATAKAIATQALgUAWgJQAWgJAeAAQAugBAWAYQAWAXAAAyIAACyg");
	this.shape_28.setTransform(4.6,200.0995);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AB/CKIAAilQABgbgKgMQgJgMgWABQgWgBgNAKQgMAJgFAVIAACwIhIAAIAAilQABgbgKgMQgJgMgVABQgXgBgLAJQgMAJgFATIAACzIhIAAIAAkNIBIAAIAAAeQALgSASgJQATgIAcAAQAfAAATAJQARAKAJATQAMgUAWgJQAVgJAeAAQAugBAWAYQAWAXAAAyIAACyg");
	this.shape_29.setTransform(-136.2,200.0995);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgDgIQgEgIAAgRQAAgRAEgIQADgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQADAIAAARQAAARgDAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_30.setTransform(-168,194.6708);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgoCAQgegNgQgeQgQgfAAg2QAAg1AQgfQAQgfAegMQAegMApAAQAUAAASACQATACAMAEIAAA+QgOgFgOgDQgPgCgRAAQgYgBgPAHQgOAHgHASQgHASAAAeQAAAfAHASQAHARAPAHQAPAIAZgBQAQAAAPgDQAPgCAPgFIAAA8QgIACgMADIgaADIgaACIgDAAQgnAAgdgMg");
	this.shape_31.setTransform(-204.775,200.35);

	this.instance_4 = new lib.元件36("synched",0);
	this.instance_4.setTransform(4,193.2,1,1,0,0,0,136.4,40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_13,p:{x:-136.4237}},{t:this.shape_12,p:{x:-111.025}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:-13.575}},{t:this.shape_8},{t:this.shape_7,p:{x:65.375}},{t:this.shape_6},{t:this.shape_5,p:{x:145.5513}}]},340).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_19},{t:this.shape_9,p:{x:-121.925}},{t:this.shape_18},{t:this.shape_5,p:{x:-60.4487}},{t:this.shape_7,p:{x:-16.425}},{t:this.shape_13,p:{x:31.4763}},{t:this.shape_17},{t:this.shape_16,p:{x:96.075}},{t:this.shape_15,p:{x:121.4}},{t:this.shape_14,p:{x:146.925}}]},348).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_23},{t:this.shape_16,p:{x:-96.075}},{t:this.shape_22},{t:this.shape_9,p:{x:-6.425}},{t:this.shape_21,p:{x:41.4763}},{t:this.shape_14,p:{x:73.275}},{t:this.shape_7,p:{x:104.325}},{t:this.shape_20}]},303).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_31},{t:this.shape_12,p:{x:-182.275}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_21,p:{x:-94.9737}},{t:this.shape_9,p:{x:-50.225}},{t:this.shape_28},{t:this.shape_14,p:{x:44.575}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_15,p:{x:135.25}},{t:this.shape_7,p:{x:159.875}},{t:this.shape_25},{t:this.shape_24}]},514).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},406).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-936.2,370,220.1,120);
p.frameBounds = [rect, rect=new cjs.Rectangle(-936.2,152.4,1099.5,337.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,152.4,1099.6,337.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,152.4,1099.5,337.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,152.4,1101.7,337.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,152.4,1101.8,337.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,152.4,1101.7,337.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,152.4,1078.9,337.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,152.4,1079,337.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,152.4,1078.9,337.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,152.4,1163.6,337.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,152.4,1163.7,337.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,152.4,1163.6,337.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,152.4,1076.6,337.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,152.4,1076.7,337.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,152.4,1076.6,337.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(-132.4,152.4,272.8,81.5)];


(lib.单词学习 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"label0":1,label0_red:5,"label1":6,label1_red:10,"label2":11,label2_red:15,"label3":16,label3_red:20,"label4":21,label4_red:25};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this=this;
		this.getCurrentFrame=function(){
			return _this.currentFrame;
		}
	}
	this.frame_1 = function() {
		/* Mouse Click 事件
		单击此指定的元件实例会执行您可在其中添加自己的自定义代码的函数。
		
		说明:
		1. 在以下"// 开始您的自定义代码"行后的新行上添加您的自定义代码。
		单击此元件实例时，此代码将执行。
		*/
		var _this=this;
		this.play1_cur.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		
		function fl_MouseClickHandler_6()
		{
			_this.parent.playCur();
		}
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(1).call(this.frame_5).wait(4).call(this.frame_9).wait(1).call(this.frame_10).wait(4).call(this.frame_14).wait(1).call(this.frame_15).wait(4).call(this.frame_19).wait(1).call(this.frame_20).wait(4).call(this.frame_24).wait(1).call(this.frame_25).wait(1));

	// 图层_4
	this.play1_cur = new lib.元件20();
	this.play1_cur.name = "play1_cur";
	this.play1_cur.setTransform(4,185.55,2.8189,1,0,0,0,80.4,32.5);
	this.play1_cur._off = true;
	new cjs.ButtonHelper(this.play1_cur, 0, 1, 2, false, new lib.元件20(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play1_cur).wait(1).to({_off:false},0).wait(25));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAHBcIAkgEQAJAAAGgCQAFgCAEgCQAEgEACgFQACgFABgIIAAgRIACgbIABggIABghIABgbIAAgOIjBAAIAAgoIDtAAIgBAMIgBAYIgBAeIgBAjIgBAiIgBAgIgBAYIgBAPQAAAOgFAKQgEAJgHAGQgIAGgLADQgKAEgOABIgmACgAh8A1IA5gVIA9gaIgSgPIgXgSIgXgQIgTgMIAXggIATALIAXAQIAWAPQAKAJAHAGIgUAjIAigOIAhgQIAGAUIAHATQgvAWgsATQgtATgsARg");
	this.shape.setTransform(-783.075,220.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ag6BmIAXgBIAMgCQAEAAACgDQACgDAAgFIAAgPIAAgHIhyAAIAAgmIByAAIAAgMIAmgSIhlAAIAAglICfAAIAAAlIgzAeIBkAAIAAAmIhpAAIAAASIgBAbQgBAKgFAGQgEAGgJADQgIADgQACIgIABIgIABIgJABgABZgaIAAgeIiwAAIAAAeIgmAAIAAhDIAnAAIgHgSIgFgOIAkgLIADAHIAEALIAFANIAFAMIAeAAIgGgWIgFgRIAjgKIAHAZIAHAYIAVAAIAMgaIALgYIAmAPIgTAjIAoAAIAABDg");
	this.shape_1.setTransform(-811.925,220.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AA1BpIAUgDIAJgBIAFgDIADgFIAAgIIAAivIiAAAIAAglICmAAIAADgQAAALgCAIQgCAHgEAEQgFAFgHACQgHACgKABIgZADgAhqBpQAEgFABgGQABgGAAgKIAAhYIgbAAIAAgnIA/AAIAAB1IAGgGIAGgGIANAkIgPANIgTARIgEAFIgFAEgAgnBdIAAhpIBtAAIAABpgAgFA6IApAAIAAglIgpAAgAgtggIAAgjIB9AAIAAAjgAhVhKIgKgQIgLgPIgKgMIAegWIAJAMIALAOIAKAOIAIANIgdAYIgIgMg");
	this.shape_2.setTransform(-841.875,220.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgRCKIAAguIhxAAIAAgjIBxAAIAAgSIhaAAIAAiNIAsAAIgMggIAqgDIAKAjIAvAAIAMgiIApADIgMAfIArAAIAACNIhZAAIAAASIBwAAIAAAjIhwAAIAAAugAATAFIA0AAIAAgSIg0AAgAhGAFIA1AAIAAgSIg1AAgAATgvIA0AAIAAgVIg0AAgAhGgvIA1AAIAAgVIg1AAg");
	this.shape_3.setTransform(-870.9,220.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AxLJYIAAyvMAiXAAAIAASvg");
	this.shape_4.setTransform(-826.175,216.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(26));

	// 单词
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("Ag/CAQgdgMgQgfQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegNAqABQAuAAAaAPQAZAPAJAbQAKAbgBAiIgBAVIgBAQIitALQABAcASAOQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhFQgNAPgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQggAAgOAPg");
	this.shape_5.setTransform(145.5513,185.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AB/CKIAAilQABgbgKgMQgJgMgWABQgWgBgNAKQgMAJgFAVIAACwIhIAAIAAilQABgbgKgMQgJgMgVABQgXgBgLAJQgMAJgFATIAACzIhIAAIAAkNIBIAAIAAAeQALgSASgJQATgIAcAAQAfAAATAJQARAKAKATQALgUAWgJQAVgJAeAAQAugBAWAYQAWAXAAAyIAACyg");
	this.shape_6.setTransform(106.35,185.5995);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_7.setTransform(65.375,185.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ag4C6QgVgCgRgDIAAg6QAQAFATACQATACASAAQAqAAAUgPQAUgPAAgnIAAgOQgIASgTAKQgTAKgjAAQgrAAgYgRQgYgRgJgeQgKgfABgpQgBgmAKgfQAJgeAYgTQAYgTArgBQAjAAAUALQASAKAIATIAAgjIBIAAIAAD5QAAAlgOAbQgOAbghAOQghAQg3gBQgTAAgUgBgAgkh4QgNALgDATQgEATAAAWQAAAYAEASQAEASAMAMQAMALAYAAQAaABAOgKQAOgLAFgRQAFgTgBgbQABgagFgSQgFgTgOgKQgOgLgaAAQgYABgMAMg");
	this.shape_8.setTransform(32.9996,190.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_9.setTransform(-13.575,185.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhqB7QAWAAAOgFQAOgEAIgJQAIgJADgOIhokKIBQAAIA/DAIACAAIA9jAIBNAAIhaD0QgNAkgOAYQgNAZgRAOQgRAOgZAGQgZAGgiAAg");
	this.shape_10.setTransform(-57.5,190.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_11.setTransform(-89.325,185.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgWC4QgRgHgIgQQgHgQAAgXIAAk4IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA3IgPACIgQABQgdABgRgIg");
	this.shape_12.setTransform(-111.025,180.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AiCC7IAAlxIBJAAIAAAhQAHgPAUgLQATgLAigBQAsAAAXARQAYASAIAgQAJAfAAAqQAAAogJAfQgIAfgYASQgXATgsABQgjAAgTgMQgTgKgHgSIAACGgAglh6QgOAKgFATQgGATABAbQgBAbAGASQAFASAOALQAOALAXgBQAZAAAMgMQAMgKAEgTQAEgTAAgYQAAgYgEgUQgEgTgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_13.setTransform(-136.4237,190.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("Ag/CAQgdgMgQgfQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegNAqABQAuAAAaAPQAZAPAJAbQAKAbgBAiIgBAVIgBAQIitALQABAcASAOQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhFQgNAPgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQggAAgOAPg");
	this.shape_14.setTransform(145.5513,185.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AB/CKIAAilQABgbgKgMQgJgMgWABQgWgBgNAKQgMAJgFAVIAACwIhIAAIAAilQABgbgKgMQgJgMgVABQgXgBgLAJQgMAJgFATIAACzIhIAAIAAkNIBIAAIAAAeQALgSASgJQATgIAcAAQAfAAATAJQARAKAKATQALgUAWgJQAVgJAeAAQAugBAWAYQAWAXAAAyIAACyg");
	this.shape_15.setTransform(106.35,185.5995);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_16.setTransform(65.375,185.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("Ag4C6QgVgCgRgDIAAg6QAQAFATACQATACASAAQAqAAAUgPQAUgPAAgnIAAgOQgIASgTAKQgTAKgjAAQgrAAgYgRQgYgRgJgeQgKgfABgpQgBgmAKgfQAJgeAYgTQAYgTArgBQAjAAAUALQASAKAIATIAAgjIBIAAIAAD5QAAAlgOAbQgOAbghAOQghAQg3gBQgTAAgUgBgAgkh4QgNALgDATQgEATAAAWQAAAYAEASQAEASAMAMQAMALAYAAQAaABAOgKQAOgLAFgRQAFgTgBgbQABgagFgSQgFgTgOgKQgOgLgaAAQgYABgMAMg");
	this.shape_17.setTransform(32.9996,190.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_18.setTransform(-13.575,185.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AhqB7QAWAAAOgFQAOgEAIgJQAIgJADgOIhokKIBQAAIA/DAIACAAIA9jAIBNAAIhaD0QgNAkgOAYQgNAZgRAOQgRAOgZAGQgZAGgiAAg");
	this.shape_19.setTransform(-57.5,190.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_20.setTransform(-89.325,185.725);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgWC4QgRgHgIgQQgHgQAAgXIAAk4IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA3IgPACIgQABQgdABgRgIg");
	this.shape_21.setTransform(-111.025,180.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AiCC7IAAlxIBJAAIAAAhQAHgPAUgLQATgLAigBQAsAAAXARQAYASAIAgQAJAfAAAqQAAAogJAfQgIAfgYASQgXATgsABQgjAAgTgMQgTgKgHgSIAACGgAglh6QgOAKgFATQgGATABAbQgBAbAGASQAFASAOALQAOALAXgBQAZAAAMgMQAMgKAEgTQAEgTAAgYQAAgYgEgUQgEgTgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_22.setTransform(-136.4237,190.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AAACMQgpABgdgNQgegMgQgfQgPgfAAg2QAAg1APgfQAQgfAegMQAdgNApABQAqgBAeANQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAfgdAMQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFATAAAfQAAAgAGATQAFATANAHQANAIAUAAQAWAAANgIQANgHAFgTQAFgTAAggQAAgfgFgTQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_23.setTransform(146.925,185.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_24.setTransform(121.4,182.8015);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AAACMQgpABgdgNQgegMgQgfQgPgfAAg2QAAg1APgfQAQgfAegMQAdgNApABQAqgBAeANQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAfgdAMQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFATAAAfQAAAgAGATQAFATANAHQANAIAUAAQAWAAANgIQANgHAFgTQAFgTAAggQAAgfgFgTQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_25.setTransform(96.075,185.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AAzC+IAAimQAAgZgJgMQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUAKQATALAJATQAIAVAAAcIAAC5g");
	this.shape_26.setTransform(63.775,180.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADRIAQAAIBFhjIBUAAIhgB9IBkCQg");
	this.shape_27.setTransform(-88.625,180.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgSABIgSABIgDABQgfAAgSgIg");
	this.shape_28.setTransform(-146.55,182.8015);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AAACMQgpABgdgNQgegMgQgfQgPgfAAg2QAAg1APgfQAQgfAegMQAdgNApABQAqgBAeANQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAfgdAMQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFATAAAfQAAAgAGATQAFATANAHQANAIAUAAQAWAAANgIQANgHAFgTQAFgTAAggQAAgfgFgTQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_29.setTransform(146.925,185.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_30.setTransform(121.4,182.8015);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AAACMQgpABgdgNQgegMgQgfQgPgfAAg2QAAg1APgfQAQgfAegMQAdgNApABQAqgBAeANQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAfgdAMQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFATAAAfQAAAgAGATQAFATANAHQANAIAUAAQAWAAANgIQANgHAFgTQAFgTAAggQAAgfgFgTQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_31.setTransform(96.075,185.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AAzC+IAAimQAAgZgJgMQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUAKQATALAJATQAIAVAAAcIAAC5g");
	this.shape_32.setTransform(63.775,180.35);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADRIAQAAIBFhjIBUAAIhgB9IBkCQg");
	this.shape_33.setTransform(-88.625,180.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgSABIgSABIgDABQgfAAgSgIg");
	this.shape_34.setTransform(-146.55,182.8015);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_35.setTransform(130.5,182.8015);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgSC7QgQgFgKgKQgKgJgFgNIgFAlIhCAAIAAl6IBJAAIAACOQAHgPAUgLQATgLAigBQAsAAAXARQAYASAIAgQAJAeAAAqQAAAogJAgQgIAfgYASQgXATgsABQgYAAgRgGgAglgWQgOAKgFASQgGATABAbQgBAbAGASQAFATAOALQAOALAXgBQAZAAAMgMQAMgKAEgUQAEgTAAgYQAAgYgEgUQgEgSgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_36.setTransform(41.4763,180.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AAtCHIgsi4IgCAAIgtC4IhbAAIhJkNIBOAAIAqDCIADAAIAwjCIBQAAIAwDCIADAAIAqjCIBNAAIhKENg");
	this.shape_37.setTransform(-57.7,185.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AhNCJIAAkNIBIAAIAAAxQAIgWAMgLQAMgNAPgDQAPgEAQgBIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLAMQgKANgFAWIAACYg");
	this.shape_38.setTransform(-121.125,185.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_39.setTransform(130.5,182.8015);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AgSC7QgQgFgKgKQgKgJgFgNIgFAlIhCAAIAAl6IBJAAIAACOQAHgPAUgLQATgLAigBQAsAAAXARQAYASAIAgQAJAeAAAqQAAAogJAgQgIAfgYASQgXATgsABQgYAAgRgGgAglgWQgOAKgFASQgGATABAbQgBAbAGASQAFATAOALQAOALAXgBQAZAAAMgMQAMgKAEgUQAEgTAAgYQAAgYgEgUQgEgSgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_40.setTransform(41.4763,180.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AAtCHIgsi4IgCAAIgtC4IhbAAIhJkNIBOAAIAqDCIADAAIAwjCIBQAAIAwDCIADAAIAqjCIBNAAIhKENg");
	this.shape_41.setTransform(-57.7,185.85);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AhNCJIAAkNIBIAAIAAAxQAIgWAMgLQAMgNAPgDQAPgEAQgBIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLAMQgKANgFAWIAACYg");
	this.shape_42.setTransform(-121.125,185.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AAzCJIAAikQAAgbgJgMQgJgMgaABQgWgBgOAJQgPAIgGAUIAACyIhIAAIAAkNIBIAAIAAAhQALgTAWgKQAVgIAegBQAhAAAUALQATAKAJAUQAIAUAAAeIAAC3g");
	this.shape_43.setTransform(208.475,185.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgDgIQgEgIAAgRQAAgRAEgIQADgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQADAIAAARQAAARgDAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_44.setTransform(184.35,180.1708);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AAzCJIAAikQAAgbgJgMQgJgMgaABQgWgBgOAJQgPAIgGAUIAACyIhIAAIAAkNIBIAAIAAAhQALgTAWgKQAVgIAegBQAhAAAUALQATAKAJAUQAIAUAAAeIAAC3g");
	this.shape_45.setTransform(109.575,185.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AhUB/QgUgKgJgUQgIgUAAgdIAAi5IBIAAIAAClQAAAbAJAMQAJAMAagBQAUABAPgJQAOgIAGgVIAAiyIBIAAIAAENIhBAAIgGggQgLATgVAKQgUAIgeABQghAAgUgLg");
	this.shape_46.setTransform(76.725,186.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("ACACKIAAilQAAgbgJgMQgKgMgXABQgVgBgNAKQgMAJgFAVIAACwIhIAAIAAilQAAgbgJgMQgJgMgWABQgWgBgLAJQgLAJgGATIAACzIhIAAIAAkNIBIAAIAAAeQALgSATgJQASgIAdAAQAeAAASAJQATAKAIATQALgUAWgJQAWgJAeAAQAugBAWAYQAWAXAAAyIAACyg");
	this.shape_47.setTransform(4.6,185.5995);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AB/CKIAAilQABgbgKgMQgJgMgWABQgWgBgNAKQgMAJgFAVIAACwIhIAAIAAilQABgbgKgMQgJgMgVABQgXgBgLAJQgMAJgFATIAACzIhIAAIAAkNIBIAAIAAAeQALgSASgJQATgIAcAAQAfAAATAJQARAKAJATQAMgUAWgJQAVgJAeAAQAugBAWAYQAWAXAAAyIAACyg");
	this.shape_48.setTransform(-136.2,185.5995);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgDgIQgEgIAAgRQAAgRAEgIQADgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQADAIAAARQAAARgDAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_49.setTransform(-168,180.1708);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgoCAQgegMgQgfQgQgfAAg2QAAg1AQgfQAQgfAegMQAegNApABQAUAAASACQATADAMAEIAAA9QgOgFgOgDQgPgCgRAAQgYgBgPAHQgOAHgHASQgHASAAAeQAAAfAHASQAHARAPAHQAPAIAZgBQAQAAAPgDQAPgCAPgFIAAA8QgIADgMACIgaAEIgaABIgDAAQgnAAgdgMg");
	this.shape_50.setTransform(-204.775,185.85);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AAzCJIAAikQAAgbgJgMQgJgMgaABQgWgBgOAJQgPAIgGAUIAACyIhIAAIAAkNIBIAAIAAAhQALgTAWgKQAVgIAegBQAhAAAUALQATAKAJAUQAIAUAAAeIAAC3g");
	this.shape_51.setTransform(208.475,185.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgDgIQgEgIAAgRQAAgRAEgIQADgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQADAIAAARQAAARgDAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_52.setTransform(184.35,180.1708);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AAzCJIAAikQAAgbgJgMQgJgMgaABQgWgBgOAJQgPAIgGAUIAACyIhIAAIAAkNIBIAAIAAAhQALgTAWgKQAVgIAegBQAhAAAUALQATAKAJAUQAIAUAAAeIAAC3g");
	this.shape_53.setTransform(109.575,185.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AhUB/QgUgKgJgUQgIgUAAgdIAAi5IBIAAIAAClQAAAbAJAMQAJAMAagBQAUABAPgJQAOgIAGgVIAAiyIBIAAIAAENIhBAAIgGggQgLATgVAKQgUAIgeABQghAAgUgLg");
	this.shape_54.setTransform(76.725,186.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("ACACKIAAilQAAgbgJgMQgKgMgXABQgVgBgNAKQgMAJgFAVIAACwIhIAAIAAilQAAgbgJgMQgJgMgWABQgWgBgLAJQgLAJgGATIAACzIhIAAIAAkNIBIAAIAAAeQALgSATgJQASgIAdAAQAeAAASAJQATAKAIATQALgUAWgJQAWgJAeAAQAugBAWAYQAWAXAAAyIAACyg");
	this.shape_55.setTransform(4.6,185.5995);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AB/CKIAAilQABgbgKgMQgJgMgWABQgWgBgNAKQgMAJgFAVIAACwIhIAAIAAilQABgbgKgMQgJgMgVABQgXgBgLAJQgMAJgFATIAACzIhIAAIAAkNIBIAAIAAAeQALgSASgJQATgIAcAAQAfAAATAJQARAKAJATQAMgUAWgJQAVgJAeAAQAugBAWAYQAWAXAAAyIAACyg");
	this.shape_56.setTransform(-136.2,185.5995);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgDgIQgEgIAAgRQAAgRAEgIQADgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQADAIAAARQAAARgDAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_57.setTransform(-168,180.1708);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AgoCAQgegMgQgfQgQgfAAg2QAAg1AQgfQAQgfAegMQAegNApABQAUAAASACQATADAMAEIAAA9QgOgFgOgDQgPgCgRAAQgYgBgPAHQgOAHgHASQgHASAAAeQAAAfAHASQAHARAPAHQAPAIAZgBQAQAAAPgDQAPgCAPgFIAAA8QgIADgMACIgaAEIgaABIgDAAQgnAAgdgMg");
	this.shape_58.setTransform(-204.775,185.85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AhrB7QAXAAAOgFQAOgEAIgJQAIgJAEgOIhqkKIBRAAIA+DAIADAAIA8jAIBPAAIhbD0QgNAkgNAYQgOAZgRAOQgSAOgYAGQgYAGgkAAg");
	this.shape_59.setTransform(122.8,190.85);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_60.setTransform(23.175,185.7506);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgWC4QgRgHgIgQQgHgQAAgXIAAk4IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA3IgPACIgQABQgdABgRgIg");
	this.shape_61.setTransform(-72.025,180.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgJChQgTgIgJgTQgJgUABgjIAAh+IgkAAIAAg5IAkAAIAAhAIBHAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgSgIg");
	this.shape_62.setTransform(-121.45,182.8015);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("AhrB7QAXAAAOgFQAOgEAIgJQAIgJAEgOIhqkKIBRAAIA+DAIADAAIA8jAIBPAAIhbD0QgNAkgNAYQgOAZgRAOQgSAOgYAGQgYAGgkAAg");
	this.shape_63.setTransform(122.8,190.85);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_64.setTransform(23.175,185.7506);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AgWC4QgRgHgIgQQgHgQAAgXIAAk4IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA3IgPACIgQABQgdABgRgIg");
	this.shape_65.setTransform(-72.025,180.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUABgjIAAh+IgkAAIAAg5IAkAAIAAhAIBHAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgSgIg");
	this.shape_66.setTransform(-121.45,182.8015);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13,p:{x:-136.4237}},{t:this.shape_12,p:{x:-111.025}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:-13.575}},{t:this.shape_8},{t:this.shape_7,p:{x:65.375}},{t:this.shape_6},{t:this.shape_5,p:{x:145.5513}}]},1).to({state:[{t:this.shape_22,p:{x:-136.4237}},{t:this.shape_21,p:{x:-111.025}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:-13.575}},{t:this.shape_17},{t:this.shape_16,p:{x:65.375}},{t:this.shape_15},{t:this.shape_14,p:{x:145.5513}}]},4).to({state:[{t:this.shape_28},{t:this.shape_9,p:{x:-121.925}},{t:this.shape_27},{t:this.shape_5,p:{x:-60.4487}},{t:this.shape_7,p:{x:-16.425}},{t:this.shape_13,p:{x:31.4763}},{t:this.shape_26},{t:this.shape_25,p:{x:96.075}},{t:this.shape_24,p:{x:121.4}},{t:this.shape_23,p:{x:146.925}}]},1).to({state:[{t:this.shape_34},{t:this.shape_18,p:{x:-121.925}},{t:this.shape_33},{t:this.shape_14,p:{x:-60.4487}},{t:this.shape_16,p:{x:-16.425}},{t:this.shape_22,p:{x:31.4763}},{t:this.shape_32},{t:this.shape_31,p:{x:96.075}},{t:this.shape_30,p:{x:121.4}},{t:this.shape_29,p:{x:146.925}}]},4).to({state:[{t:this.shape_38,p:{x:-121.125}},{t:this.shape_25,p:{x:-96.075}},{t:this.shape_37},{t:this.shape_9,p:{x:-6.425}},{t:this.shape_36,p:{x:41.4763}},{t:this.shape_23,p:{x:73.275}},{t:this.shape_7,p:{x:104.325}},{t:this.shape_35}]},1).to({state:[{t:this.shape_42,p:{x:-121.125}},{t:this.shape_31,p:{x:-96.075}},{t:this.shape_41},{t:this.shape_18,p:{x:-6.425}},{t:this.shape_40,p:{x:41.4763}},{t:this.shape_29,p:{x:73.275}},{t:this.shape_16,p:{x:104.325}},{t:this.shape_39}]},4).to({state:[{t:this.shape_50},{t:this.shape_12,p:{x:-182.275}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_36,p:{x:-94.9737}},{t:this.shape_9,p:{x:-50.225}},{t:this.shape_47},{t:this.shape_23,p:{x:44.575}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_24,p:{x:135.25}},{t:this.shape_7,p:{x:159.875}},{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_58},{t:this.shape_21,p:{x:-182.275}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_40,p:{x:-94.9737}},{t:this.shape_18,p:{x:-50.225}},{t:this.shape_55},{t:this.shape_29,p:{x:44.575}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_30,p:{x:135.25}},{t:this.shape_16,p:{x:159.875}},{t:this.shape_52},{t:this.shape_51}]},4).to({state:[{t:this.shape_62},{t:this.shape_5,p:{x:-96.6987}},{t:this.shape_61},{t:this.shape_12,p:{x:-55.825}},{t:this.shape_7,p:{x:-20.275}},{t:this.shape_60},{t:this.shape_24,p:{x:45.25}},{t:this.shape_23,p:{x:70.775}},{t:this.shape_38,p:{x:98.725}},{t:this.shape_59}]},1).to({state:[{t:this.shape_66},{t:this.shape_14,p:{x:-96.6987}},{t:this.shape_65},{t:this.shape_21,p:{x:-55.825}},{t:this.shape_16,p:{x:-20.275}},{t:this.shape_64},{t:this.shape_30,p:{x:45.25}},{t:this.shape_29,p:{x:70.775}},{t:this.shape_42,p:{x:98.725}},{t:this.shape_63}]},4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-936.2,156.1,220.1,120);
p.frameBounds = [rect, rect=new cjs.Rectangle(-936.2,137.9,1168.5,138.2), rect, rect, new cjs.Rectangle(-936.2,137.9,1168.8,138.2), rect=new cjs.Rectangle(-936.2,137.9,1168.5,138.2), rect, rect, new cjs.Rectangle(-936.2,137.9,1168.8,138.2), rect=new cjs.Rectangle(-936.2,137.9,1168.5,138.2), rect, rect, new cjs.Rectangle(-936.2,137.9,1168.8,138.2), rect=new cjs.Rectangle(-936.2,137.9,1168.5,138.2), rect, rect, new cjs.Rectangle(-936.2,137.9,1168.8,138.2), rect=new cjs.Rectangle(-936.2,137.9,1168.5,138.2), rect, rect, new cjs.Rectangle(-936.2,137.9,1168.8,138.2), rect=new cjs.Rectangle(-936.2,137.9,1168.5,138.2), rect, rect, new cjs.Rectangle(-936.2,137.9,1168.8,138.2), new cjs.Rectangle(-936.2,137.9,1168.5,138.2)];


(lib.元件22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"label0":1,"label1":5,"label2":9,"label3":14,"label4":19,read:1,sing:5,paint:9,dance:14,swim:19};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		//this.cur_1.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		var _this = this;
		var len = _this.parent.getLen();
		for (var i = 1; i <= len; i++) {
			//console.log(i);
			this["cur_" + String(i)].addEventListener("click", fl_MouseClickHandler_5.bind(this));
		}
		
		function fl_MouseClickHandler_5(e) {
		
			_this.parent.changCurId(e.currentTarget.name.split("_")[1]);
		}
		
		_this.init = function () {
			len = _this.parent.getLen();
			for (var i = 1; i <= len; i++) {
				//console.log(i);
				this["cur_" + String(i)].addEventListener("click", fl_MouseClickHandler_5.bind(this));
			}
		}
		this.stop();
		
		//this._cliMc._cliWordMc.visible=false;
		//this._cliMc.visible=false;
		//this._cliWordMc.visible=true;
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(4).call(this.frame_8).wait(5).call(this.frame_13).wait(5).call(this.frame_18).wait(5).call(this.frame_23).wait(1));

	// _climc
	this.cur_5 = new lib.元件54();
	this.cur_5.name = "cur_5";
	this.cur_5.setTransform(285.75,476.9,0.5537,0.3856,0,0,0,107,110.6);
	new cjs.ButtonHelper(this.cur_5, 0, 1, 2, false, new lib.元件54(), 3);

	this.cur_4 = new lib.元件54();
	this.cur_4.name = "cur_4";
	this.cur_4.setTransform(140.3,476.9,0.5537,0.3856,0,0,0,107,110.6);
	new cjs.ButtonHelper(this.cur_4, 0, 1, 2, false, new lib.元件54(), 3);

	this.cur_3 = new lib.元件54();
	this.cur_3.name = "cur_3";
	this.cur_3.setTransform(-5.2,476.9,0.5537,0.3856,0,0,0,107,110.6);
	new cjs.ButtonHelper(this.cur_3, 0, 1, 2, false, new lib.元件54(), 3);

	this.cur_2 = new lib.元件54();
	this.cur_2.name = "cur_2";
	this.cur_2.setTransform(-151.7,476.9,0.5537,0.3856,0,0,0,107,110.6);
	new cjs.ButtonHelper(this.cur_2, 0, 1, 2, false, new lib.元件54(), 3);

	this.cur_1 = new lib.元件54();
	this.cur_1.name = "cur_1";
	this.cur_1.setTransform(-295.4,477.45,0.5537,0.3856,0,0,0,107,110.6);
	new cjs.ButtonHelper(this.cur_1, 0, 1, 2, false, new lib.元件54(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cur_1},{t:this.cur_2},{t:this.cur_3},{t:this.cur_4},{t:this.cur_5}]}).wait(24));

	// pic
	this.instance = new lib.元件55("single",4);
	this.instance.setTransform(14.85,99.05,2.1608,2.1608,0,0,0,122.3,89.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({startPosition:3},0).wait(4).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(5).to({startPosition:0},0).wait(5));

	// 当前标志
	this.instance_1 = new lib.元件1("synched",0);
	this.instance_1.setTransform(-292.15,476.6,1,1,0,0,0,65,43.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(4).to({x:-145.4,y:476.1},0).wait(4).to({x:0},0).wait(5).to({x:144.95},0).wait(5).to({x:291.2,y:475.65},0).wait(5));

	// 底框
	this.instance_2 = new lib.元件55("single",0);
	this.instance_2.setTransform(297.85,472.2,0.5774,0.5774,0,0,0,133.7,88);

	this.instance_3 = new lib.元件55("single",1);
	this.instance_3.setTransform(152,472.2,0.5774,0.5774,0,0,0,133.2,88);

	this.instance_4 = new lib.元件55("single",2);
	this.instance_4.setTransform(6.5,472.2,0.5774,0.5774,0,0,0,133.3,88);

	this.instance_5 = new lib.元件55("single",3);
	this.instance_5.setTransform(-139,472.2,0.5774,0.5774,0,0,0,133.3,88);

	this.instance_6 = new lib.元件55("single",4);
	this.instance_6.setTransform(-284.5,472.2,0.5774,0.5774,0,0,0,133.3,88);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF7E4D").ss(6,1,1).p("Eg41gJIMBxqAAAQBcAABCBCQBBBCAABdIAALPQAABdhBBCQhCBChcAAMhxqAAAQhcAAhBhCQhBhCAAhdIAArPQAAhdBBhCQBBhCBcAAg");
	this.shape.setTransform(-0.025,476.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg41AJJQhcAAhBhCQhBhCAAhdIAArPQAAhdBBhCQBBhCBcAAMBxqAAAQBcAABCBCQBBBCAABdIAALPQAABdhBBCQhCBChcAAg");
	this.shape_1.setTransform(-0.025,476.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,126,77,0.498)").ss(12,1,1).p("Eg41gJIMBxqAAAQBcAABCBCQBBBCAABdIAALPQAABdhBBCQhCBChcAAMhxqAAAQhcAAhBhCQhBhCAAhdIAArPQAAhdBBhCQBBhCBcAAg");
	this.shape_2.setTransform(-0.025,476.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Eg41AJJQhcAAhBhCQhBhCAAhdIAArPQAAhdBBhCQBBhCBcAAMBxqAAAQBcAABCBCQBBBCAABdIAALPQAABdhBBCQhCBChcAAg");
	this.shape_3.setTransform(-0.025,476.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-392,-48.7,784.1,590.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.btnpage_1 = new lib.元件3();
	this.btnpage_1.name = "btnpage_1";
	this.btnpage_1.setTransform(0,0,1,1,0,0,0,28.5,28.5);
	new cjs.ButtonHelper(this.btnpage_1, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,2,1).p("AB+hdIAACsIj7AAIAAisIgOAAIAAC7IEXAAIAAi7g");
	this.shape.setTransform(-0.025,1.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,2,1).p("ACfhcIAADWQAAAIgFABIkyAAQgGgBAAgIIAAjWQAAgIAGgBIAbAAIAAgGQBSgoArAcQAsgcBSAoIAAAGIAbAAQAGABAAAIg");
	this.shape_1.setTransform(-0.025,-0.0352);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiYCDQgGgBAAgIIAAjWQAAgIAGgBIAbAAIAAgGQBSgoArAcQAsgcBSAoIAAAGIAbAAQAGABAAAIIAADWQAAAIgFABgAiLBsIEXAAIAAi7IgOAAIAACsIj7AAIAAisIgOAAgAAJBPIBXAAQgegLgWAAQgWAAgNALgAhfBPIBXAAQgOgLgVAAQgWAAgeALgABwBFIAAioQhGgcgiAUIAACnQARgHAUAAQAeAAAlAQgAhwhjIAACoQA/gcAqATIAAinQgOgIgVAAQgcAAgqAQg");
	this.shape_2.setTransform(-0.025,-0.0352);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F99703").ss(5,1,1).p("AjJDJQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQAMAMAKAMQAFAGAEAGQA1BIAABdQAAB2hUBTQhTBUh2AAQh1AAhUhUg");
	this.shape_3.setTransform(0.025,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F99703").s().p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTIAWAXIAJANQA1BIAABdQAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_4.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnpage_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-31,-31,62.1,62);
p.frameBounds = [rect, rect];


(lib.元件6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.btnpage_3 = new lib.元件18();
	this.btnpage_3.name = "btnpage_3";
	this.btnpage_3.setTransform(0,0,1,1,0,0,0,36.5,36.5);
	new cjs.ButtonHelper(this.btnpage_3, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F99703").s().p("AAgA4IgJgcIgsAAIgKAcIgZAAIAphuIAfAAIAqBugAAQAIIgPgpIgBAAIgPApIAfAAg");
	this.shape.setTransform(0.15,-10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglBYQgyAAAAgyIAAhLQAAgyAyAAIBLAAQAyAAAAAyIAABLQAAAygyAAg");
	this.shape_1.setTransform(0.2,-9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F99703").s().p("AgIA3QgKgDgHgGQgHgGgEgLQgDgLAAgSQAAgUAGgNQAHgMAMgGQAMgFAPAAIAPABQAGABAFACIAAAVIgLgDIgNgBQgKAAgGADQgGAEgDAIQgDAIAAAMQAAAOADAIQADAIAGADQAGADAJAAIAOgBQAGgBAGgCIAAAVIgMADIgPABQgMAAgJgCg");
	this.shape_2.setTransform(8.775,6.7479);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglBYQgyAAAAgyIAAhLQAAgyAyAAIBLAAQAyAAAAAyIAABLQAAAygyAAg");
	this.shape_3.setTransform(9.05,6.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F99703").s().p("AgoA4IAAhvIAlAAQAPAAAKAEQAJADADAHQAEAHAAAKQAAAIgEAGQgDAFgJADIAAABQAKACAEAFQAFAHAAAKQAAAKgDAIQgEAHgKADQgIAFgQAAgAgQAkIAMAAIALgBQAGgBABgDQACgDAAgGQAAgFgCgEQgCgCgEgCIgMgBIgMAAgAgQgJIAJAAQAHAAAEgBQAFgBADgCQABgDAAgGQABgGgCgDQgDgCgFgBIgLgBIgJAAg");
	this.shape_4.setTransform(-8.1,6.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglBYQgyAAAAgyIAAhLQAAgyAyAAIBLAAQAyAAAAAyIAABLQAAAygyAAg");
	this.shape_5.setTransform(-8.6,6.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F99703").ss(5,1,1).p("AjJDJQhThTAAh2QAAh1BThUQAhggAlgUQA7gfBIAAQAWAAAWADQBaANBDBDQASARANATQA1BIAABdQAABeg1BHQgNATgSARQggAhgmAUQgoAVgvAHQgWADgWAAQhIAAg7gfQglgUghghg");
	this.shape_6.setTransform(0.025,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F99703").s().p("AiDD+QglgVghggQhThTAAh2QAAh1BThUQAhggAlgUQA7gfBIAAQAWAAAWADQBaANBDBDQASARANATQA1BIAABdQAABdg1BIQgNATgSARQggAggmAVQgoAVgvAHQgWADgWAAQhIAAg7gfg");
	this.shape_7.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnpage_3}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-36.5,-36.5,73,73);
p.frameBounds = [rect, new cjs.Rectangle(-31,-31,62.1,62)];


(lib.元件5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.btnpage_2 = new lib.元件10();
	this.btnpage_2.name = "btnpage_2";
	new cjs.ButtonHelper(this.btnpage_2, 0, 1, 1);

	this.instance = new lib.元件17();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnpage_2}]}).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.1,-31.8,64.7,64.6);
p.frameBounds = [rect, new cjs.Rectangle(-31,-31,62.1,62)];


(lib.元件29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		
		var _this = this;
		if(!_this.isinit){
			_this.isinit=true;
			init();
		}
		
		function init(){
			_this._pausebtn.visible = false;
		    _this._replaybtn.visible = false;
		    _this._playbtn.visible = true;
			//_this._playbtn.visible = false;
		}
		
		this.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4() {
			// 假设 _this 是当前上下文
			if (_this._playbtn.visible == true) {
				// 检查音频是否可以播放
				//console.log(_this.parent.audio);
				//console.log(_this.parent.audio.paused);
				if (!_this.parent.audio || _this.parent.audio.ended) {
					console.log("音频无法播放");
					return;
				}
				
		
				// 更新按钮状态
				_this._pausebtn.visible = true;
				_this._playbtn.visible = false;
				_this._replaybtn.visible = false;
		
				// 调用父级的播放方法
				//console.log(_this.parent);
				_this.parent.onplaybtn();
			} else if (_this._pausebtn.visible == true) {
				// 检查音频是否可以暂停
				//console.log(_this.parent.audio);
				//console.log(_this.parent.audio.ended);
				if (!_this.parent.audio || _this.parent.audio.paused) {
					console.log("音频无法暂停");
					return;
				}
		
				// 更新按钮状态
				_this._pausebtn.visible = false;
				_this._replaybtn.visible = false;
				_this._playbtn.visible = true;
		
				// 调用父级的暂停方法
				_this.parent.onpausebtn();
			} else if (_this._replaybtn.visible == true) {
				//_this.toPlayFun();
				_this._pausebtn.visible = true;
				_this._playbtn.visible = false;
				_this._replaybtn.visible = false;
		
				_this.parent.onreplaybtn();
			}
		}
		_this.resetFun = function () {
			_this._pausebtn.visible = false;
			_this._replaybtn.visible = false;
			_this._playbtn.visible = true;
		}
		_this.toPlayFun = function () {
			//console.log("执行播放按钮状态切换");
			_this._pausebtn.visible = true;
			_this._playbtn.visible = false;
			_this._replaybtn.visible = false;
			/*_this._pausebtn.alpha = 0;
			_this._playbtn.alpha = 0;
			_this._replaybtn.alpha = 0;*/
		}
		_this.rePlayStu = function () {
			console.log("打开了");
			_this._pausebtn.visible = false;
			_this._replaybtn.visible = true;
			_this._playbtn.visible = false;
		}
		
		/*function toPlayFun(){
			this._pausebtn.visible=true;
		    this._playbtn.visible=false;
		}
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_3
	this._replaybtn = new lib.元件52();
	this._replaybtn.name = "_replaybtn";
	this._replaybtn.setTransform(0,0,1,1,0,0,0,28.5,28.5);
	new cjs.ButtonHelper(this._replaybtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this._replaybtn).wait(1));

	// 图层_2
	this._pausebtn = new lib.元件30();
	this._pausebtn.name = "_pausebtn";
	new cjs.ButtonHelper(this._pausebtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this._pausebtn).wait(1));

	// 图层_1
	this._playbtn = new lib.元件31();
	this._playbtn.name = "_playbtn";
	new cjs.ButtonHelper(this._playbtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this._playbtn).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件29, rect = new cjs.Rectangle(-31,-31,62.1,62), [rect]);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {scen1:1,scen2:2,scen3:3};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.issubmited = false;
		_this.stop();
		
		if (!this.isinit) {
			//console.log("第一次进入")
			this.isinit = true;
			init();
		}
		
		var data;
		var pgBtnAry;
		var pgid = 0;
		//len 模块题长
		var lenAry;
		var len = lenAry[pgid];
		var curId = 0;
		var autoMode = true;
		var deTime = 1000;
		var gdDeTime;
		var timeoutFun;
		var wordSoundStr = "source/sound/dc/";
		
		var allLisBtn = [];
		
		function init() {
			//初始化2024-09-26
			data = lesdata;
			lenAry = []
			//获取数据
			for (var j in data) {
				lenAry.push(data[j].length);
			}
			//console.log(lenAry);
			pgBtnAry = [_this.btnMc_1, _this.btnMc_2, _this.btnMc_3];
			allLisBtn = [_this.btn_prev, _this.btn_next, _this.btnMc_1, _this.btnMc_2, _this.btnMc_3];
			for (var i in allLisBtn) {
				allLisBtn[i].addEventListener("click", onPgBtn);
			}
			//_this.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		}
		
		var dingAudio = new Audio('sounds/gdsound.mp3');
		_this.audio = new Audio('sounds/gdsound.mp3');
		_this.audio.addEventListener('play', function () {
			//console.log('音频开始播放');
		});
		_this.audio.addEventListener('canplaythrough', function () {
		    //console.log('音频已加载完成，可以开始播放');
			//计算时长
			if(curId>=0){gdDeTime=(_this.audio.duration*1.2)*1000+deTime;}
		    else{gdDeTime=10}
		});
		_this.audio.addEventListener('ended', function () {
			console.log('音频播放结束');
			switch (pgid) {
				case "1":
					if (autoMode) {
						if (curId < len - 1) {
							timeoutFun = setTimeout(function () {
								next();
								updata();
							}, deTime);
						} else {
							/*_this._mov.gotoAndStop(0);
					        _this._gdMc.gotoAndStop(0);*/
							_this._playAndpause.rePlayStu();
							console.log("最后一个播放结束。");
							autoMode=false;
						}
					}
				    //点击变红
				    if(_this.isClickPlay){
						_this.isClickPlay=false;
						_this._wMc.gotoAndPlay("label" + String(curId));
					}
					break;
				case "2":
					//if (autoMode) {
						//获取音频时长，设置时长，设置延迟
						//console.log(gdDeTime);
						if(curId>=0)dingAudio.play();_this._gdIco.visible=true;
						if (curId < len - 1) {
							//if (!autoMode){return}
							timeoutFun = setTimeout(function () {
								_this._gdIco.visible=false;
								if (autoMode){
									next();
								    updata();
								}
							}, gdDeTime);
						} else {
							timeoutFun = setTimeout(function () {
								_this._gdIco.visible=false;
								_this._gdMc.gotoAndStop(0);
							}, gdDeTime);
						    _this._playAndpause.rePlayStu();
						    console.log("最后一个播放结束。");
						}
					//}
					break;
				case "3":
					if (autoMode) {
						if (curId < len - 1) {
							timeoutFun = setTimeout(function () {
								next();
								updata();
							}, deTime);
						} else {
							_this._mov.gotoAndStop(0);
					        _this._pdMc.gotoAndStop(0);
							_this._playAndpause.rePlayStu();
							console.log("最后一个播放结束。");
						}
					}
					break;
			}
		
		});
		//点击单词声音
		var wordAudio = new Audio('sounds/gdsound.mp3');
		wordAudio.addEventListener('play', function () {
			//console.log('被点击的单词开始播放');
		});
		wordAudio.addEventListener('ended', function () {
			//重置黑色
			//_this._mov._cliMc._cliWordMc.reset();
		
		});
		
		function onPgBtn(e) {
			//console.log(e.target.name);
			if (e.target.name) {
				switch (e.target.name.split("_")[0]) {
					case "btnpage":
						if (e.target.parent) {
							//页面id
							pgid = e.target.name.split("_")[1];
							onclickpagebtn(e.target.parent.name);
							//单词模块
							_this.gotoAndStop(pgid);
							len = lenAry[pgid - 1];
							//curId = 0;
							_this._mov.gotoAndStop(0);
							updata();
		
						};
						break;
					case "btn":
						switch (e.target.name.split("_")[1]) {
							case "prev":
								_this._gdIco.visible=false;
								prev();
								updata();
								//_this._playAndpause.visible = false;
							    _this._playAndpause.rePlayStu();
								autoMode = false;
								break;
							case "next":
								_this._gdIco.visible=false;
								next();
								//updata();
								//_this._playAndpause.visible = false;
							    _this._playAndpause.rePlayStu();
								autoMode = false;
								break;
						}
						break;
					/*case "cur":
						curId = parseInt(e.target.name.split("_")[1]) - 1;
					    console.log(curId);
					    updata();
						break;*/
					case "s":
						//console.log(wordSoundStr+e.target.name.split("_")[1]);
						//toPlayWord(wordSoundStr+e.target.name.split("_")[1]);
						break;
				}
			}
		}
		this.playCur=function(){
			if(autoMode)return
			 toPlaySound("source/sound/dc/"+data[pgid - 1][curId].label+".mp3");
			//变红
			_this.isClickPlay=true;
			_this._wMc.gotoAndStop("label" + String(curId)+"_red");
		}
		this.changCurId=function(num){
			//console.log(num);
			autoMode=false;
			_this._playAndpause.rePlayStu();
			curId = parseInt(num) - 1;
			//console.log(curId);
			updata();
		}
		
		//点击换页按钮
		function onclickpagebtn(btnName) {
			for (var i in pgBtnAry) {
				if (btnName == pgBtnAry[i].name) {
					pgBtnAry[i].gotoAndStop(1);
				} else {
					pgBtnAry[i].gotoAndStop(0);
				}
			}
		    //console.log("切换了paid:",pgid);
			curId = 0;
		    _this._mov.init();//重置侦听
		    _this._gdIco.visible=false;
		 
			//停止声音时间
			clearTimeout(timeoutFun);
		    //自动模式打开
		    autoMode=true;
			if (!_this.audio.paused) {
				_this.audio.pause();
			}
			if (!wordAudio.paused) {
				wordAudio.pause();
			}
		   if (!dingAudio.paused) {
				dingAudio.pause();
			}
			setTimeout(function () {
				_this._playAndpause.toPlayFun(), 10
			});
		}
		
		
		this.toPlayWord = function (wordName) {
			if (!_this.audio.paused) {
				_this.audio.pause();
			}
			_this._mov.gotoAndPlay(wordName);
			wordAudio.src = wordSoundStr + wordName + ".mp3";
			wordAudio.play();
		}
		//function toPlaySound(src) {
		//	if (!wordAudio.paused) {
		//		wordAudio.pause();
		//	}
		//	_this.audio.src = src;
		//	_this.audio.play();
		//   /* if(!autoMode){}
		//	setTimeout(function () {
		//		_this._playAndpause.toPlayFun(), 10
		//	});*/
		//}
		function toPlaySound(src) {
		    if (!wordAudio.paused) {
		        wordAudio.pause();
		    }
		
		    // 设置新音频源并加载
		    _this.audio.src = src;
		
		    // 监听音频加载完成事件
		    _this.audio.oncanplaythrough = function() {
		        _this.audio.play().catch(function(error) {
		            console.error("播放错误:", error);
		        });
		        _this.audio.oncanplaythrough = null; // 清除事件监听器
		    };
		
		    // 触发加载
		    _this.audio.load();
		}
		
		function prev() {
			_this._mov.gotoAndStop(0);
			_this._gdMc.gotoAndStop(0);
			curId -= 1;
			if (curId < 0) {
				curId = 0;
			} else {
				updata();
			}
		    _this.checkNum();
		
		}
		function next() {
			//_this._mov.gotoAndStop(0);
			_this._gdMc.gotoAndStop(0);
			curId += 1;
			if (curId > len - 1) {
				curId = len - 1;
		
			} else {
				updata();
			}
		    _this.checkNum();
		
		}
		
		//播放暂停
		this.onplaybtn = function () {
			//console.log("点击了播放按钮");
			if (_this.audio.paused) {
				_this.audio.play();
				switch(pgid){
					case "3":
						_this._pdMc.gotoAndPlay(_this._pdMc.currentFrame);
						break;
				}
			}
		}
		this.onpausebtn = function () {
			//console.log("点击了暂停按钮");
			if (!_this.audio.paused) {
				_this.audio.pause();
				switch(pgid){
					case "3":
						_this._pdMc.gotoAndStop(_this._pdMc.currentFrame);
						break;
				}
			}
		}
		this.onreplaybtn = function () {
			//_this._playAndpause.toPlayFun()
			curId = 0;
			autoMode=true;
			_this._mov.gotoAndStop(0);
			updata();
		}
		
		function updata() {
			_this.checkNum();_this._gdIco.visible=false;
		    clearTimeout(timeoutFun);
			switch (pgid) {
				case "1":
					//console.log("学习。");
					if (curId > len - 1) {
						curId = len - 1;
						return;
					}
					_this._mov.gotoAndPlay("label" + String(curId));
				    _this._wMc.gotoAndPlay("label" + String(curId));
					toPlaySound(data[pgid - 1][curId].sound);
					//console.log(data[pgid - 1][curId].sound);
				    //console.log("label" + String(curId));
					break;
				case "2":
					//console.log("跟读。");
					if (curId > len - 1) {
						curId = len - 1;
						return;
					}
					_this._gdMc.gotoAndStop("label" + String(curId));
				    _this._mov.gotoAndPlay("label" + String(curId));
					toPlaySound(data[pgid - 1][curId].sound);
					break;
				case "3":
					//console.log("拼读。");
					if (curId > len - 1) {
						curId = len - 1;
						return;
					}
				    _this._mov.gotoAndPlay(data[pgid - 1][curId].label);
				 	_this._pdMc.gotoAndPlay("label" + String(curId));
					toPlaySound(data[pgid - 1][curId].sound);
					break;
			}
		}
		
		this.getLen=function(){
			len = lenAry[pgid - 1];
			return len;
		}
		//检测是否是最前一个或者最后一个
		this.checkNum=function(){
			//检测最前
			if(_this.currentFrame==0)return;
			
			if(curId==_this.getLen()-1){
				_this.btn_next.visible=false;
			}else{
				_this.btn_next.visible=true;
			}
		    //检测最后
		    if(curId==0){
				_this.btn_prev.visible=false;
			}else{
				_this.btn_prev.visible=true;
			}
		    
		}
	}
	this.frame_1 = function() {
		this.stop();
		//this._mov._cliMc.visible=true;
	}
	this.frame_2 = function() {
		this.stop();
		//this._mov._cliMc.visible=false;
		this._gdIco.visible=false;
	}
	this.frame_3 = function() {
		this.stop();
		//this._mov._cliMc.visible=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// 内容
	this._showbar = new lib.元件4();
	this._showbar.name = "_showbar";
	this._showbar.setTransform(672,1345.9);
	this._showbar._off = true;

	this.timeline.addTween(cjs.Tween.get(this._showbar).wait(2).to({_off:false},0).wait(2));

	// 菜单按钮等等
	this.btnMc_1 = new lib.元件9();
	this.btnMc_1.name = "btnMc_1";
	this.btnMc_1.setTransform(929.9,479.2);

	this.btnMc_3 = new lib.元件6();
	this.btnMc_3.name = "btnMc_3";
	this.btnMc_3.setTransform(1092.3,479.2);

	this.btnMc_2 = new lib.元件5();
	this.btnMc_2.name = "btnMc_2";
	this.btnMc_2.setTransform(1010.9,478.8);

	this.btn_prev = new lib.元件27();
	this.btn_prev.name = "btn_prev";
	this.btn_prev.setTransform(200.75,225.4);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(5,1,1).p("AjJDJQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQAMAMAKAMQAFAGAEAGQA1BIAABdQAAB2hUBTQhTBUh2AAQh1AAhUhUg");
	this.shape.setTransform(200.775,225.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBB9IimhpIgDgDQgEgEgBgEQgBgFAAgEQAAgEABgEQABgEAEgEIABgBICphrQACgCAFABQAIAAAHAGIADAEQADAFAAAHIAAAmIB6AAQAbAAAAAbIAABNQAAAbgbAAIh6AAIAAAqQgBAGgFAFQgHAIgIAAQgFgBgDgBg");
	this.shape_1.setTransform(200.375,225.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTIAWAXIAJANQA1BIAABdQAAB2hUBSQhTBVh2AAQh1AAhUhVgAgEh8IipBrIgBABQgEAEgBAEQgBAEAAAEQAAAEABAFQABAEAEAEIADADICmBpQAEABAEABQAIAAAHgIQAFgFABgGIAAgqIB6AAQAbAAAAgbIAAhNQAAgbgbAAIh6AAIAAgmQAAgHgDgFIgDgEQgHgGgIAAQgEgBgDACg");
	this.shape_2.setTransform(200.775,225.4);

	this.btn_next = new lib.元件28();
	this.btn_next.name = "btn_next";
	this.btn_next.setTransform(1079.2,225.4);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(5,1,1).p("AjJDJQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQAMAMAKAMQAFAGAEAGQA1BIAABdQAAB2hUBTQg5A5hJATQgiAIglAAQglAAgigIQhJgTg5g5g");
	this.shape_3.setTransform(1079.225,225.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVB3QgFgFgBgGIAAgqIh6AAQgbAAAAgbIAAhNQAAgbAbAAIB6AAIAAgmQAAgHADgFIADgEQAHgGAIAAQAFgBACACICpBrIABABQAEAEABAEQABAEAAAEQAAAEgBAFQgBAEgEAEIgDADIimBpQgDABgFABQgIAAgHgIg");
	this.shape_4.setTransform(1079.975,225.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AhHEVQhJgTg5g6QhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTIAWAXIAJANQA1BIAABdQAAB2hUBSQg5A6hJATQgiAIglAAQglAAgigIgAipgmIAABNQAAAbAcAAIB5AAIAAAqQACAGAFAFQAGAIAIAAQAEgBAEgBICmhpIADgDQAEgEABgEQACgFAAgEQAAgEgCgEQgBgEgEgEIAAgBIiphrQgEgCgEABQgIAAgGAGIgDAEQgEAFAAAHIAAAmIh5AAQgcAAAAAbg");
	this.shape_5.setTransform(1079.225,225.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnMc_2},{t:this.btnMc_3},{t:this.btnMc_1}]}).to({state:[{t:this.btnMc_2},{t:this.btnMc_3},{t:this.btnMc_1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.btn_next},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btn_prev}]},1).wait(3));

	// move
	this.instance = new lib.scene01_bg();
	this.instance.setTransform(639.05,324.05);

	this.instance_1 = new lib.scene01_bg();
	this.instance_1.setTransform(639.05,324.05);

	this.instance_2 = new lib.scene01_bg();
	this.instance_2.setTransform(639.05,324.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(3));

	// 单词
	this._gdIco = new lib.元件53();
	this._gdIco.name = "_gdIco";
	this._gdIco.setTransform(196.85,86.7,0.7,0.7,0,0,0,179.5,106.5);

	this._wMc = new lib.单词学习();
	this._wMc.name = "_wMc";
	this._wMc.setTransform(744.2,310.15,1,1,0,0,0,110,60);

	this._gdMc = new lib.元件51();
	this._gdMc.name = "_gdMc";
	this._gdMc.setTransform(744.2,310.15,1,1,0,0,0,110,60);

	this._pdMc = new lib.单词拼读mc();
	this._pdMc.name = "_pdMc";
	this._pdMc.setTransform(742.2,296.05,1,1,0,0,0,110,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this._wMc},{t:this._gdIco}]},1).to({state:[{t:this._gdMc},{t:this._gdIco}]},1).to({state:[{t:this._pdMc}]},1).wait(1));

	// 图层_3
	this._mov = new lib.元件22();
	this._mov.name = "_mov";
	this._mov.setTransform(632.85,299.7,1,1,0,0,0,13.5,189.3);

	this.timeline.addTween(cjs.Tween.get(this._mov).wait(4));

	// bg
	this._playAndpause = new lib.元件29();
	this._playAndpause.name = "_playAndpause";
	this._playAndpause.setTransform(1166.95,891.1,0.8056,0.8044,0,0,0,0.1,1.9);
	this._playAndpause.alpha = 0.6992;

	this.timeline.addTween(cjs.Tween.get(this._playAndpause).wait(1).to({y:480.6},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(867.3,413.1,964.6,861.5);
p.frameBounds = [rect, new cjs.Rectangle(338,413.1,1493.9,598.7), new cjs.Rectangle(338,413.1,1493.9,1297.6), new cjs.Rectangle(336,413.1,1495.9,1297.6)];
// library properties:
lib.properties = {
	id: 'E637B31863A9224E9952B4D82164A654',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_NP_1.jpg", id:"index_atlas_NP_1"},
		{src:"sounds/letters01.mp3", id:"letters01"},
		{src:"sounds/letters01_1.mp3", id:"letters01_1"},
		{src:"sounds/letters01_2.mp3", id:"letters01_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E637B31863A9224E9952B4D82164A654'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;