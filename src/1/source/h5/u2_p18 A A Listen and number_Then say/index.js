(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,745,825,742],[0,0,825,743],[827,745,825,742],[827,0,825,743],[1174,1489,585,522],[0,1489,585,526],[587,1489,585,526]]},
		{name:"index_atlas_2", frames: [[587,0,184,71],[587,292,184,50],[0,524,184,72],[587,73,184,71],[587,344,184,50],[186,524,184,72],[587,146,184,71],[587,396,184,50],[372,524,184,72],[587,219,184,71],[587,448,184,50],[558,524,184,72],[0,0,585,522]]}
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



(lib.Image_10 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_11 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_12 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_13 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_15 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_16 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image_17 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Image_18 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_20 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Image_21 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Image_22 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_5 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Image_6 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Image_7 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Image_8 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.位图22 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.位图23 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.位图24 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.位图25 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(12);
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


(lib.元件16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.元件14复制 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F97703").s().p("Ay0A7QgUAAgPgSQgPgRAAgYQAAgXAPgRQAPgSAUAAMAlpAAAQAUAAAPASQAPARAAAXQAAAYgPARQgPASgUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件14复制, rect = new cjs.Rectangle(-125.4,-5.9,250.9,11.8), [rect]);


(lib.元件13复制 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgqAyQgRAAAAgRIAAhBQAAgRARAAIBVAAQARAAAAARIAABBQAAARgRAAg");
	this.shape.setTransform(4.05,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_1.setTransform(-6.9006,-0.0969,0.9827,1.1483);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_2.setTransform(-6.9006,-0.0969,0.9827,1.1483);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F99703").ss(4,1,1).p("ACsirQBHBIAABjQAABVg0BAQgJALgKALQhIBIhkAAQhLAAg7gpQgUgNgRgSQgLgLgJgLQgGgIgGgJQgCgDgDgEQgig3AAhGQAAhjBHhIQA3g3BKgMQAUgDAWAAQBkAABIBGg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F99703").s().p("AiGDKQgUgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBHBHAABkQAABVg0BAIgTAWQhIBHhkAAQhLAAg7gog");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F99703").ss(4,1,1).p("AgqgxIBVAAQARAAAAARIAABBQAAARgRAAIhVAAQgRAAAAgRIAAhBQAAgRARAAg");
	this.shape_5.setTransform(4.05,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F99703").s().p("AgqAyQgRAAAAgRIAAhBQAAgRARAAIBVAAQARAAAAARIAABBQAAARgRAAg");
	this.shape_6.setTransform(4.05,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F99703").ss(5,1,1).p("AA/hjIABDHIh+hkg");
	this.shape_7.setTransform(-6.9,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F99703").s().p("Ag+AAIB9hjIAADHg");
	this.shape_8.setTransform(-6.9,0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F99703").ss(4,1,1).p("ACsirQBHBHAABkQAABVg0BAQgJALgKALQhHBIhlAAQhLAAg8gpQgTgNgRgSQgLgLgJgLQgGgIgGgJQgCgDgDgEQgig3AAhGQAAhkBHhHQA3g3BJgMQAVgEAWAAQBlAABHBHg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiHDKQgTgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBGBHAABkQAABVgzBAIgTAWQhIBHhkAAQhLAAg8gog");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.2,-26.2,52.5,52.5);
p.frameBounds = [rect, rect, rect, rect];


(lib.元件13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAzhWIABCtIhnhXg");
	this.shape.setTransform(3.5409,-0.0969,0.9827,1.1483);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_1.setTransform(3.5409,-0.0969,0.9827,1.1483);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_2.setTransform(-6.9006,-0.0969,0.9827,1.1483);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_3.setTransform(-6.9006,-0.0969,0.9827,1.1483);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F99703").ss(4,1,1).p("ACsirQBHBIAABjQAABVg0BAQgJALgKALQhIBIhkAAQhLAAg7gpQgUgNgRgSQgLgLgJgLQgGgIgGgJQgCgDgDgEQgig3AAhGQAAhjBHhIQA3g3BKgMQAUgDAWAAQBkAABIBGg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F99703").s().p("AiGDKQgUgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBHBHAABkQAABVg0BAIgTAWQhIBHhkAAQhLAAg7gog");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F99703").ss(5,1,1).p("AA/hjIABDHIh+hkg");
	this.shape_6.setTransform(-6.9,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F99703").s().p("Ag+AAIB9hjIAADHg");
	this.shape_7.setTransform(-6.9,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F99703").ss(5,1,1).p("AAyhjIABDHIhlhkg");
	this.shape_8.setTransform(3.55,0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F99703").s().p("AgyAAIBlhjIAADHg");
	this.shape_9.setTransform(3.55,0.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F99703").ss(4,1,1).p("ACsirQBHBHAABkQAABVg0BAQgJALgKALQhHBIhlAAQhLAAg8gpQgTgNgRgSQgLgLgJgLQgGgIgGgJQgCgDgDgEQgig3AAhGQAAhkBHhHQA3g3BJgMQAVgEAWAAQBlAABHBHg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiHDKQgTgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBGBHAABkQAABVgzBAIgTAWQhIBHhkAAQhLAAg8gogABWBlIAAjIIhaBbIgBhbIh+BkIB/BkIAAhbIBaBbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.2,-26.2,52.5,52.5);
p.frameBounds = [rect, rect, rect, rect];


(lib.元件12复制 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgqAyQgRAAAAgRIAAhBQAAgRARAAIBVAAQARAAAAARIAABBQAAARgRAAg");
	this.shape.setTransform(-4.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_1.setTransform(6.9006,0.0492,0.9827,1.148,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_2.setTransform(6.9006,0.0492,0.9827,1.148,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F99703").ss(4,1,1).p("AirirQhHBHAABkQAABVA0BAQAJALAKALQBHBIBlAAQBLAAA8gpQATgNARgSQALgLAJgLQAGgIAGgJQACgDADgEQAig3AAhGQAAhkhHhHQg3g3hJgMQgVgEgWAAQhlAAhHBHg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F99703").s().p("AirCrIgTgWQgzhAAAhVQAAhkBGhHQBIhGBkAAQAVAAAVADQBKAMA3A3QBGBHAABkQAABGghA3IgFAGIgMASIgUAWQgRARgTAOQg8AohLAAQhkAAhIhHg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F99703").ss(4,1,1).p("AgqgxIBVAAQARAAAAARIAABBQAAARgRAAIhVAAQgRAAAAgRIAAhBQAAgRARAAg");
	this.shape_5.setTransform(-4.9,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F99703").s().p("AgqAyQgRAAAAgRIAAhBQAAgRARAAIBVAAQARAAAAARIAABBQAAARgRAAg");
	this.shape_6.setTransform(-4.9,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F99703").ss(5,1,1).p("Ag+hjIAADHIB+hjg");
	this.shape_7.setTransform(6.9,0.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F99703").s().p("Ag+hjIB+BjIh+Bkg");
	this.shape_8.setTransform(6.9,0.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AirCrIgTgWQgzhAAAhVQAAhkBGhHQBIhGBkAAQAVAAAVADQBKAMA3A3QBGBHAABkQAABGghA3IgFAGIgMASIgUAWQgRARgTAOQg8AohLAAQhkAAhIhHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.2,-26.2,52.5,52.5);
p.frameBounds = [rect, rect, rect, rect];


(lib.元件12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAzhWIABCtIhnhXg");
	this.shape.setTransform(-3.5409,0.2241,0.9827,1.1478,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_1.setTransform(-3.5409,0.2241,0.9827,1.1478,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_2.setTransform(6.9006,0.2241,0.9827,1.1478,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_3.setTransform(6.9006,0.2241,0.9827,1.1478,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F99703").ss(4,1,1).p("AirirQhHBHAABkQAABVA0BAQAJALAKALQBHBIBlAAQBLAAA8gpQATgNARgSQALgLAJgLQAGgIAGgJQACgDADgEQAig3AAhGQAAhkhHhHQg3g3hJgMQgVgEgWAAQhlAAhHBHg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F99703").s().p("AirCrIgTgWQgzhAAAhVQAAhkBGhHQBIhGBkAAQAVAAAVADQBKAMA3A3QBGBHAABkQAABGghA3IgFAGIgMASIgUAWQgRARgTAOQg8AohLAAQhkAAhIhHg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F99703").ss(5,1,1).p("AgyhjIAADHIBlhjg");
	this.shape_6.setTransform(-3.55,0.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F99703").s().p("AgxhjIBkBjIhlBkg");
	this.shape_7.setTransform(-3.55,0.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F99703").ss(5,1,1).p("Ag+hjIAADHIB+hjg");
	this.shape_8.setTransform(6.9,0.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F99703").s().p("Ag+hjIB+BjIh+Bkg");
	this.shape_9.setTransform(6.9,0.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AirCrIgTgWQgzhAAAhVQAAhkBGhHQBIhGBkAAQAVAAAVADQBKAMA3A3QBGBHAABkQAABGghA3IgFAGIgMASIgUAWQgRARgTAOQg8AohLAAQhkAAhIhHgAAFBlIB/hkIh+hkIAABcIhbhcIAADIIBbhag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{y:0.2241}},{t:this.shape_2,p:{y:0.2241}},{t:this.shape_1,p:{y:0.2241}},{t:this.shape,p:{y:0.2241}}]}).to({state:[{t:this.shape_10},{t:this.shape_4},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{y:0.2548}},{t:this.shape_2,p:{y:0.2548}},{t:this.shape_1,p:{y:0.2548}},{t:this.shape,p:{y:0.2548}}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.2,-26.2,52.5,52.5);
p.frameBounds = [rect, rect, rect, rect];


(lib.元件11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];


(lib.元件8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F97703").s().p("AhwBwQguguAAhCQAAhBAugvQAvguBBAAQBCAAAuAuQAvAvAABBQAABCgvAuQguAvhCAAQhBAAgvgvg");
	this.shape.setTransform(-3.7259,-0.0987,0.8302,0.8302);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(6,1,1).p("ACfAAQAABCgvAuQguAvhCAAQhBAAgvgvQguguAAhCQAAhBAugvQAvguBBAAQBCAAAuAuQAvAvAABBg");
	this.shape_1.setTransform(-3.7462,0.0777,0.8302,0.8302);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件8, rect = new cjs.Rectangle(-19.9,-16.1,32.4,32.4), [rect]);


(lib.元件7复制 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").ss(6,1,1).p("AhBhxIAADjABChxIAADj");
	this.shape.setTransform(0.459,0.02,0.8145,0.8145);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F99703").ss(4,1,1).p("ACsirQBHBIAABjQAABVg0BBQgJALgKALQhIBHhkAAQhjAAhIhHQgKgLgIgLQgIgJgGgJQgCgDgCgEQgjg3AAhGQAAhjBHhIQBIhHBjAAQBkAABIBHg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F99703").s().p("AirCsIgSgWIgOgTIgEgGQgig3gBhGQABhjBGhIQBIhGBjAAQBkAABHBGQBHBIABBjQgBBVgzBBIgUAWQhHBGhkAAQhjAAhIhGg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F99703").ss(6,1,1).p("ABChxIAADjAhBhxIAADj");
	this.shape_3.setTransform(0.459,0.02,0.8145,0.8145);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AirCsIgSgWIgOgTIgEgGQgig3gBhGQABhjBGhIQBIhGBjAAQBkAABHBGQBHBIABBjQgBBVgzBBIgUAWQhHBGhkAAQhjAAhIhGg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(6,1,1).p("ABChxIAADjAhBhxIAADj");
	this.shape_5.setTransform(0.459,0.02,0.8145,0.8145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape_5}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.2,-26.2,52.5,52.5);
p.frameBounds = [rect, rect, rect, rect];


(lib.ClipGroup_29 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgXA2QhKAAhCAFIAAh4IFHAAIAAB7QhlgIhWAAg");
	mask.setTransform(16.55,6.475);

	// 图层_3
	this.instance = new lib.Image_22();
	this.instance.setTransform(0,0,0.1798,0.1801);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29, rect = new cjs.Rectangle(0.2,0.3,32.8,12.5), [rect]);


(lib.ClipGroup_27 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("ACkKbIAAhPIAhADQAiACBoAOQBWALA0ACIAcABQCsABAPiCQAKhUgYieQgaimAEhNQADg3AKhlQAMhuADgwQAGhdgEgoQgHhNgmguQglgthMAAQgcAAggAFIh7AWQhKANgwADQhXAGhCAAQhQAAhKgIQgygFhkgVQhkgUgzgFIgkgCQheAAg6A0Qg8A2gKBiQgFA3AEBRIAICIQADB3gWCsIgRBtQgMBKgCAyQgECVBXA1QA/AmBWAAQAzAABbgRQBQgMBJgHIAABTIo9AAIAA01IXBAAIAAU1g");
	mask.setTransform(74.625,66.85);

	// 图层_3
	this.instance = new lib.Image_18();
	this.instance.setTransform(0,0,0.18,0.18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27, rect = new cjs.Rectangle(0.9,0.2,147.5,133.4), [rect]);


(lib.ClipGroup_25 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("ACkKaIAAhPIAhADQAcACBuAOQBVALA1ACIAcABQCsABAPiBQAKhVgYidQgainAEhMQADg4AKhlQAMhvADguQAGhegEgoQgHhNgmguQglgthMAAQgVAAgnAFIh7AVQhKAOgwADQhMAGhNAAQhUAAhGgIQgygFhkgVQhkgTgzgGIghgCIgFAAQhdACg6AzQg7A1gKBiQgFA3AEBSIAICIQADB2gWCrIgRBtQgMBLgCAyQgECVBXA1QA/AmBWAAQAgAAAngFQAZgDAugIQBPgOBKgFIAABSIo9AAIAA0zIXBAAIAAUzg");
	mask.setTransform(74.625,66.75);

	// 图层_3
	this.instance = new lib.Image_13();
	this.instance.setTransform(0,0,0.18,0.18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25, rect = new cjs.Rectangle(0.9,0.2,147.5,133.2), [rect]);


(lib.ClipGroup_11 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AHZJsQg0gDhWgKQhpgOgggDQkdgajlAnQhhARgzAAQhSgBg9gmQhXg0AEiVQACgyAMhLIARhtQAWisgDh2IgIiIQgEhSAFg3QAKhiA8g1QA6g0BeAAIAkACQAzAFBkAUQBkAVAyAFQCHAOCsgMQAwgEBKgNIB7gVQA4gIAlAFQA0AIAcAjQAmAuAHBNQAEAqgGBbQgDAxgLBtQgLBmgDA2QgEBMAaCnQAYCegKBUQgOCBisAAIgdgBg");
	mask.setTransform(70.1259,62.0938);

	// 图层_3
	this.instance = new lib.位图22();
	this.instance.setTransform(0,-1,0.24,0.24);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, rect = new cjs.Rectangle(1.1,0,138.1,124.2), [rect]);


(lib.ClipGroup_9_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AHZJsQg0gDhWgKQhpgOgggDQkdgajlAnQhhARgzAAQhSgBg9gmQhXg0AEiVQACgyAMhLIARhtQAWisgDh2IgIiIQgEhSAFg3QAKhiA8g1QA7g0BdAAIAkACQAzAFBkAUQBkAVAyAFQCHAOCsgMQAwgEBKgNIB7gVQA4gJAlAGQA0AIAcAjQAmAuAHBNQAEAqgGBbQgDAxgLBtQgLBlgDA3QgEBMAaCnQAYCegKBUQgOCBisAAIgdgBg");
	mask.setTransform(70.1259,62.1688);

	// 图层_3
	this.instance = new lib.位图24();
	this.instance.setTransform(0,-1,0.24,0.24);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_0, rect = new cjs.Rectangle(1.1,0.1,138.1,124.3), [rect]);


(lib.ClipGroup_9 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("ACkKbIAAhPIAhADQAhACBpAOQBVALA1ACIAcABQCtABAOiCQAKhUgZieQgaimAFhNQADg2AKhmQAMhtADgxQAGhbgEgqQgHhNgmguQgmgthLAAQgcAAggAFIh7AWQhKANgwADQhXAGhCAAQhQAAhKgIQgzgFhjgVQhlgUgzgFIgjgCQhdAAg7A0Qg8A2gKBiQgGA2AFBSIAHCIQADB3gVCsIgSBtQgMBKgBAyQgECVBXA1QA+AmBWAAQA0AABbgRQBHgMBSgHIAABTIo9AAIAA01IXBAAIAAU1g");
	mask.setTransform(74.6,66.85);

	// 图层_3
	this.instance = new lib.Image_8();
	this.instance.setTransform(0,0,0.18,0.18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, rect = new cjs.Rectangle(0.9,0.2,147.4,133.4), [rect]);


(lib.ClipGroup_7_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AHZJsQg1gDhVgKQhugOgcgDQkcgajlAoQhiAQgyAAQhSgBg9gmQhXg0AEiVQACgyAMhLIARhtQAWisgDh2IgIiIQgEhRAFg3QAKhiA7g1QA6g0BdgBIAFAAIAhACQAzAFBkAUQBkAVAyAFQCIAOCrgMQAwgDBKgOIB7gVQA4gIAlAFQA0AIAcAjQAmAuAHBNQAEAogGBdQgDAvgMBvQgKBlgDA3QgEBNAaCnQAYCdgKBVQgPCAirAAIgdgBg");
	mask.setTransform(70.1259,62.0939);

	// 图层_3
	this.instance = new lib.位图25();
	this.instance.setTransform(0,0,0.24,0.24);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_0, rect = new cjs.Rectangle(1.1,0,138.1,124.2), [rect]);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("ACkKaIAAhPIAhACQAhADBpAOQBVAKA1AEIAcABQCtAAAOiCQAKhUgZieQgaimAFhNQADg2AKhmQAMhtADgxQAGhbgEgqQgHhNgmguQgmgthLAAQgcAAggAFIh7AWQhKANgwADQhXAGhCAAQhQAAhKgIQgzgFhjgUQhlgUgzgGQgRgBgRAAIgCAAQhdAAg7AzQg7A2gKBhQgGA3AFBSIAHCJQADB1gVCtIgSBtQgMBLgBAxQgECVBXA0QA+AnBWAAQA0AABbgQQBQgNBJgGIAABSIo9AAIAA0zIXBAAIAAUzg");
	mask.setTransform(74.6,66.8);

	// 图层_3
	this.instance = new lib.Image_3();
	this.instance.setTransform(0,0,0.18,0.18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, rect = new cjs.Rectangle(0.9,0.2,147.4,133.2), [rect]);


(lib.ClipGroup_5_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AHZJsQg0gDhWgKQhogOgigDQkbgajmAnQhhARgzAAQhSgBg9gmQhXg0AEiVQACgyAMhLIARhtQAWisgDh2IgIiIQgEhSAFg3QAKhiA8g1QA6g0BeAAIAkACQAzAFBkAUQBkAVAyAFQCHAOCsgMQAwgEBKgNIB7gVQA4gIAlAFQA0AIAcAjQAmAuAHBNQAEAogGBdQgDAvgMBvQgKBlgDA3QgEBMAaCnQAYCegKBUQgOCBisAAIgdgBg");
	mask.setTransform(70.1259,62.1438);

	// 图层_3
	this.instance = new lib.位图23();
	this.instance.setTransform(0,-1,0.24,0.24);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5_0, rect = new cjs.Rectangle(1.1,0.1,138.1,124.2), [rect]);


(lib.ClipGroup_3_2 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AijA+IAAh7IFHAAIAAB7g");
	mask.setTransform(16.55,6.425);

	// 图层_3
	this.instance = new lib.Image_15();
	this.instance.setTransform(0,0,0.18,0.18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_2, rect = new cjs.Rectangle(0.2,0.3,32.8,12.4), [rect]);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AijA+IAAh7IFHAAIAAB7g");
	mask.setTransform(16.575,6.425);

	// 图层_3
	this.instance = new lib.Image_10();
	this.instance.setTransform(0,0,0.18,0.18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, rect = new cjs.Rectangle(0.2,0.3,32.8,12.4), [rect]);


(lib.ClipGroup_3_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AijA+IAAh7IFHAAIAAB7g");
	mask.setTransform(16.575,6.425);

	// 图层_3
	this.instance = new lib.Image_5();
	this.instance.setTransform(0,0,0.18,0.18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_0, rect = new cjs.Rectangle(0.2,0.3,32.8,12.4), [rect]);


(lib.ClipGroup_2_3 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AijA+IAAh7IFHAAIAAB7g");
	mask.setTransform(16.55,6.425);

	// 图层_3
	this.instance = new lib.Image_20();
	this.instance.setTransform(0,0,0.18,0.18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_3, rect = new cjs.Rectangle(0.2,0.3,32.8,12.4), [rect]);


(lib.ClipGroup_2_2 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AijAsIAAhRQBJgGBDAAQBZAABiAJIAABOg");
	mask.setTransform(16.55,4.475);

	// 图层_3
	this.instance = new lib.Image_16();
	this.instance.setTransform(0,0,0.18,0.18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_2, rect = new cjs.Rectangle(0.2,0.1,32.8,8.8), [rect]);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AijAsIAAhSQBCgFBJAAQBXAABlAIIAABPg");
	mask.setTransform(16.575,4.525);

	// 图层_3
	this.instance = new lib.Image_11();
	this.instance.setTransform(0,0,0.18,0.18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, rect = new cjs.Rectangle(0.2,0.2,32.8,8.8), [rect]);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AijAsIAAhSQBCgFBJAAQBXAABlAIIAABPg");
	mask.setTransform(16.575,4.525);

	// 图层_3
	this.instance = new lib.Image_6();
	this.instance.setTransform(0,0,0.18,0.18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, rect = new cjs.Rectangle(0.2,0.2,32.8,8.8), [rect]);


(lib.ClipGroup_1_3 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AijAsIAAhSQBCgFBKAAQBWAABlAIIAABPg");
	mask.setTransform(16.55,4.525);

	// 图层_3
	this.instance = new lib.Image_21();
	this.instance.setTransform(0,0,0.18,0.18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_3, rect = new cjs.Rectangle(0.2,0.2,32.8,8.8), [rect]);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgXA2QhDAAhJAFIAAh4IFHAAIAAB8QhigJhZAAg");
	mask.setTransform(16.55,6.5);

	// 图层_3
	this.instance = new lib.Image_17();
	this.instance.setTransform(0,0,0.1799,0.1799);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, rect = new cjs.Rectangle(0.2,0.3,32.8,12.5), [rect]);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgYA2QhJAAhCAFIAAh4IFHAAIAAB7QhlgIhXAAg");
	mask.setTransform(16.575,6.475);

	// 图层_3
	this.instance = new lib.Image_12();
	this.instance.setTransform(0,0,0.1799,0.1801);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, rect = new cjs.Rectangle(0.2,0.3,32.8,12.5), [rect]);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgYA2QhJAAhCAFIAAh4IFHAAIAAB7QhlgIhXAAg");
	mask.setTransform(16.575,6.475);

	// 图层_3
	this.instance = new lib.Image_7();
	this.instance.setTransform(0,0,0.1799,0.1799);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, rect = new cjs.Rectangle(0.2,0.3,32.8,12.5), [rect]);


(lib.元件15 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ah9CPQgHgHgBgIIgBj7QABgIAEgHIAEgEQAIgIAMAAQAFAAAFACIDcB/IABACQAFAEACAFQACAFAAAFQAAAGgCAEQgCAFgFAEIgEAFIjZB9QgFACgFAAQgMAAgIgIg");
	this.shape.setTransform(3.9002,-0.1596,0.7981,0.7981);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F99703").ss(4,1,1).p("AC+i+QBPBQAABuQAABfg5BIQgKAMgMAMQhPBPhvAAQhvAAhPhPQgLgMgKgMQgIgKgHgLQgCgDgDgEQgmg+AAhNQAAhuBPhQQBPhOBvAAQBvAABPBOg");
	this.shape_1.setTransform(0.0124,0.011,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F99703").s().p("Ai+C/IgVgZIgOgUIgGgHQgmg+ABhNQgBhvBPhPQBPhPBvABQBvgBBQBPQBPBPAABvQAABfg6BHQgKANgLAMQhQBPhvAAQhvAAhPhPg");
	this.shape_2.setTransform(0.0124,0.011,0.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F99703").ss(4,1,1).p("ACHAAQAAAFgCAFQgCAFgFAEQgCADgCACIjZB9QgFACgFAAQgMAAgIgIQgHgHgBgIIgBj8QABgHAEgHQABgCADgDQAIgHAMAAQAFAAAFACIDcB/QABABAAAAQAFAFACAFQACAFAAAFg");
	this.shape_3.setTransform(3.9002,-0.1596,0.7981,0.7981);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F99703").s().p("Ah9CPQgHgHgBgIIgBj7QABgIAEgHIAEgEQAIgIAMAAQAFAAAFACIDcB/IABACQAFAEACAFQACAFAAAFQAAAGgCAEQgCAFgFAEIgEAFIjZB9QgFACgFAAQgMAAgIgIg");
	this.shape_4.setTransform(3.9002,-0.1596,0.7981,0.7981);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai+C/IgVgZIgOgUIgGgHQgmg+ABhNQgBhvBPhPQBPhPBvABQBvgBBQBPQBPBPAABvQAABfg6BHQgKANgLAMQhQBPhvAAQhvAAhPhPg");
	this.shape_5.setTransform(0.0124,0.011,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_1},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.2,-26.2,52.5,52.5);
p.frameBounds = [rect, rect, rect, rect];


(lib.元件11复制 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.元件16();
	this.instance.alpha = 0.0117;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(249,151,3,0.4)").s().p("ASrA7MglWAAAQgYAAgRgRQgSgSABgYQgBgXASgSQARgRAYAAMAlWAAAQAZAAARARQASASAAAXQAAAYgSASQgRARgYAAIgBAAg");
	this.shape.setTransform(-0.75,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件11复制, rect = new cjs.Rectangle(-126.2,-5.3,250.9,11.8), [rect]);


(lib.元件3复制2 = function(mode,startPosition,loop,reversed) {
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
		var showNum = 0;
		var timeArr = new Array(0,11.7,20.465,30.609);
		var len = 4; //对应label1-label4;
		if (!this.isinit) {
			this.isinit = true;
			init();
		}
		
		function init() {
			console.log(_this.x);
			console.log();
			checkNum();
		}
		var audio = new Audio('sounds/s01.mp3');
		audio.addEventListener('play', function () {
			//console.log('音频开始播放');
		});
		
		
		var init = true;
		audio.oncanplaythrough = function () {
			//audio.play();
			if (init) {
				init = false;
				_pausebtn.visible = true;
				_playbtn.visible = false;
				audio.pause();
			}
		};
		var curId = 0;
		var bar = _this;
		var seekBarMc = _this._seekBarMc;
		var seekMc = _this._seekMc;
		var _prevbtn = _this._prevbtn;
		var _nextbtn = _this._nextbtn
		var _color = _this._color;
		
		var _playbtn = _this._playbtn;
		var _pausebtn = _this._pausebtn;
		
		var gx = _this._seekBarMc.x;
		seekMc.x = gx;
		_color.scaleX = 0.01;
		var theWidth = 230;
		//console.log(_this._seekBarMc.getBounds().width);
		
		audio.addEventListener('timeupdate', function (event) {
			var currentElement = event.target;
			// 获取当前的播放进度（以秒为单位）
			var currentTime = currentElement.currentTime;
			// 获取视频的总时长（以秒为单位）
			var duration = currentElement.duration;
			// 计算播放进度百分比
			var progress = (currentTime / duration);
			seekMc.x = gx + (_this._seekBarMc.getBounds().width - seekMc.getBounds().width / 2) * progress;
			//seekMc.x = gx + theWidth * progress;
			_color.scaleX = progress;
		
			for (var i = 0; i < timeArr.length; i++) {
				//if (i < timeArr.length - 2) {
				if (currentTime > timeArr[timeArr.length - 1]) {
					curId = timeArr.length - 1;
				} else if (currentTime > timeArr[i] && currentTime <= timeArr[i + 1] - 0.1) {
					curId = i;
					break;
				}
				//}
			}
			checkId();
		
		});
		seekBarMc.addEventListener("click", fl_MouseClickHandler.bind(this));
		function fl_MouseClickHandler(event) {
			if (_pausebtn.visible == true && _playbtn.visible == false) {
				return
			}
			var localPoint = _this._seekBarMc.globalToLocal(event.stageX, event.stageY);
			//console.log(_this._seekBarMc.getBounds().width);
			var clickX = localPoint.x + _this._seekBarMc.getBounds().width / 2;
			// 确保点击位置在进度条的有效范围内
			var barWidth = _this._seekBarMc.getBounds().width;
			//clickX = Math.max(0, Math.min(clickX, barWidth));
			// 计算进度百分比
			var progress = clickX / barWidth;
			// 更新进度条的位置
			seekMc.x = gx + clickX;
			// 可选：同步更新音频的播放位置
			audio.currentTime = progress * audio.duration;
			// 打印进度百分比或点击位置，用于调试
			//console.log("Progress: " + progress.toFixed(2) + ", Click X: " + clickX);
			_pausebtn.visible = false;
			_playbtn.visible = true;
		}
		
		
		_prevbtn.addEventListener("click", onPrevbtn.bind(this));
		function onPrevbtn(event) {
			curId -= 1;
			checkId();
			audio.currentTime = timeArr[curId];
			_pausebtn.visible = false;
			_playbtn.visible = true;
			audio.play();
		}
		
		_nextbtn.addEventListener("click", onNextbtn.bind(this));
		function onNextbtn(event) {
			curId += 1;
			checkId();
			audio.currentTime = timeArr[curId];
			_pausebtn.visible = false;
			_playbtn.visible = true;
			audio.play();
		}
		
		_pausebtn.addEventListener("click", onPausebtn.bind(this));
		function onPausebtn(event) {
			_pausebtn.visible = false;
			_playbtn.visible = true;
			audio.play();
		}
		_playbtn.addEventListener("click", onPlaybtn.bind(this));
		function onPlaybtn(event) {
			_pausebtn.visible = true;
			_playbtn.visible = false;
			audio.pause();
		}
		
		audio.addEventListener('ended', function () {
			audio.currentTime = 0;
			setTimeout(function () {
				audio.pause();
			}, 100)
			//audio.pause();
			_pausebtn.visible = true;
			_playbtn.visible = false;
		});
		
		function checkId() {
			if (curId < 0) {
				curId = 0;
		
			} else if (curId > timeArr.length) {
				curId = timeArr.length;
			}
			if (curId == 0) {
				_prevbtn.visible = false;
			} else {
				_prevbtn.visible = true;
			}
		
			if (curId == timeArr.length - 1) {
				_nextbtn.visible = false;
			} else {
				_nextbtn.visible = true;
			}
		
		}
		
		
		this.addEventListener("click", onthis.bind(this));
		function onthis(event) {
			//console.log(event.target.name);
			switch (event.target.name) {
				case "_prevbtnShow":
					showPrev();checkNum();
					break;
				case "_nextbtnShow":
					showNext();checkNum();
					break;
			}
		}
		function showPrev() {
			showNum -= 1;
			if (showNum < 0) {
				showNum = 0;
			}
			gotoPlayLabel();
		}
		function showNext() {
			showNum += 1;
			if (showNum > len) {
				showNum = len;
			}
			gotoPlayLabel()
		}
		//检测是否是最前一个或者最后一个
		function checkNum(){
			//检测最前
			console.log(showNum);
			if(showNum==len){
				_this._nextbtnShow.visible=false;
			}else{
				_this._nextbtnShow.visible=true;
			}
		    //检测最后
		    if(showNum==0){
				_this._prevbtnShow.visible=false;
			}else{
				_this._prevbtnShow.visible=true;
			}
		    
		}
		function gotoPlayLabel() {
			
			if (showNum == 0) {
				_this.parent._showbar.gotoAndStop(0);
				return;
			}
			var labelStr = 'label' + String(showNum);console.log("跳转："+labelStr);
			_this.parent._showbar.gotoAndPlay(labelStr);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_7
	this._seekMc = new lib.元件8();
	this._seekMc.name = "_seekMc";
	this._seekMc.setTransform(204.55,24.5,0.6445,0.6418,0,0,0,-4.2,-0.6);

	this.timeline.addTween(cjs.Tween.get(this._seekMc).wait(1));

	// SEEK
	this._seekBarMc = new lib.元件11复制();
	this._seekBarMc.name = "_seekBarMc";
	this._seekBarMc.setTransform(128.25,20.65,1,1,0,0,0,-120.5,-4.2);
	new cjs.ButtonHelper(this._seekBarMc, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this._seekBarMc).wait(1));

	// 图层_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyrA7QgYAAgRgRQgRgRAAgZQAAgYARgQQARgSAYAAMAlXAAAQAYAAASASQAQAQAAAYQAAAZgQARQgSARgYAAg");
	mask.setTransform(248,25.45);

	// 图层_3
	this._color = new lib.元件14复制();
	this._color.name = "_color";
	this._color.setTransform(124.8,14.5,1,1,0,0,0,-123.2,-10.8);

	var maskedShapeInstanceList = [this._color];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this._color).wait(1));

	// 图层_1
	this.instance = new lib.元件11复制();
	this.instance.setTransform(130.95,19.2,1,1,0,0,0,-117.8,-5.5);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDD59A").s().p("ASsB3MglXAAAQgxAAgigjQgkgjAAgxQAAgwAkgjQAigjAxAAMAlXAAAQAxAAAiAjQAkAjgBAwQABAxgkAjQgiAjgxAAIAAAAg");
	this.shape.setTransform(248,25.3);

	this._pausebtn = new lib.元件15();
	this._pausebtn.name = "_pausebtn";
	this._pausebtn.setTransform(24.25,23.85);
	new cjs.ButtonHelper(this._pausebtn, 0, 1, 2, false, new lib.元件15(), 3);

	this._nextbtnShow = new lib.元件12复制();
	this._nextbtnShow.name = "_nextbtnShow";
	this._nextbtnShow.setTransform(551.3,22.65);
	new cjs.ButtonHelper(this._nextbtnShow, 0, 1, 2, false, new lib.元件12复制(), 3);

	this._prevbtnShow = new lib.元件13复制();
	this._prevbtnShow.name = "_prevbtnShow";
	this._prevbtnShow.setTransform(486.15,22.65);
	new cjs.ButtonHelper(this._prevbtnShow, 0, 1, 2, false, new lib.元件13复制(), 3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("ACMC5IAAAAIgVgXIAAgBQg4hFAAhcQAAhsBNhNIAAAAQBNhMBtAAQAYgBAWAEQBQANA8A8IAAAAQBMBNAABsQAABLglA8IAAACIgFAFIgNATIAAABIgVAXIAAAAQgTATgVAOQhAAshSAAQhtAAhNhNgADZggIAABBQAAARARAAIBIAAIAAAyQAAAKAHAHQAHAIAJAAQAKABAIgGIB/hjQAGgFACgIQACgHgCgGQgCgIgGgFIh/hkQgHgGgKAAQgKABgHAHQgGAIAAAJIAAAyIhJAAQgRAAAAARgAnYDaQgUgOgTgTIAAAAIgVgXIAAgBIgNgTIgFgFIAAgCQglg8AAhLQAAhsBMhNIAAAAQA8g8BPgNQAXgEAYABQBtAABNBMIAAAAQBNBNAABsQAABcg4BFIAAABIgVAXIAAAAQhNBNhtAAQhSAAhBgsgAlah3Ih/BkQgGAFgCAHQgCAHACAHQACAHAGAFIB/BkQAIAGAKgBQAJgBAHgHQAHgHAAgKIAAgxIBAAAQARAAAAgRIAAhBQAAgRgRAAIhAAAIgBgzQAAgKgGgHQgHgHgKgBIgCAAQgJAAgGAGg");
	this.shape_1.setTransform(518.725,22.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AFJB+QgJgBgHgHQgHgHAAgKIAAgzIhIAAQgRAAAAgRIAAhBQAAgRARAAIBJAAIAAgxQAAgKAGgHQAHgHAKgBQAKgBAHAGIB/BlQAGAFACAHQACAGgCAIQgCAHgGAFIh/BjQgHAGgJAAIgCAAgAlaB3Ih/hkQgGgEgCgIQgCgHACgHQACgHAGgFIB+hkQAIgGAKAAQAKABAGAHQAHAHAAAKIABAzIBAAAQARAAAAARIAABBQAAARgRAAIhAAAIAAAxQAAAKgHAHQgHAHgJABIgCAAQgJAAgHgFg");
	this.shape_2.setTransform(518.7253,22.6263);

	this.instance_1 = new lib.元件11();
	this.instance_1.setTransform(248,25.45);

	this._playbtn = new lib.元件7复制();
	this._playbtn.name = "_playbtn";
	this._playbtn.setTransform(24.25,23.85);
	new cjs.ButtonHelper(this._playbtn, 0, 1, 2, false, new lib.元件7复制(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this._playbtn},{t:this.instance_1},{t:this.shape_2},{t:this.shape_1},{t:this._prevbtnShow},{t:this._nextbtnShow},{t:this._pausebtn},{t:this.shape},{t:this.instance}]}).wait(1));

	// 图层_4
	this._prevbtn = new lib.元件13();
	this._prevbtn.name = "_prevbtn";
	this._prevbtn.setTransform(82,23.85);
	new cjs.ButtonHelper(this._prevbtn, 0, 1, 2, false, new lib.元件13(), 3);

	this._nextbtn = new lib.元件12();
	this._nextbtn.name = "_nextbtn";
	this._nextbtn.setTransform(415.75,23.85);
	new cjs.ButtonHelper(this._nextbtn, 0, 1, 2, false, new lib.元件12(), 3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AiSDaQgUgOgTgTIAAAAIgVgXIAAgBIgOgTIgEgFIAAgBQglg9gBhLQAAhsBNhNIAAAAQA8g8BPgNQAXgEAXAAQBtAABMBNIABAAQBNBNAABsQgBBcg3BFIAAABIgVAXIAAAAQhNBNhtABQhRgBhBgsgAgVh4Ih+BlQgGAFgDAHQgCAHADAHQACAHAGAFIB/BkQAIAGAJgBQAJgBAHgHQAGgHABgKIAAgfIAxAxQAHAHALAAQAKAAAHgIQAIgHAAgKIgBjHQAAgKgHgIQgIgHgKAAQgKAAgIAHIgxAxIAAgfQAAgKgHgHQgGgHgJgBIgCAAQgJAAgHAFg");
	this.shape_3.setTransform(82,23.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AACB4Ih+hkQgGgFgCgHQgDgHADgHQACgHAGgFIB9hlQAIgGAKABQAKABAGAHQAHAHAAAKIAAAfIAxgxQAIgHAKAAQAKAAAIAHQAHAIAAAKIABDHQAAAKgIAHQgHAIgKAAQgLAAgHgHIgxgxIAAAfQgBAKgGAHQgHAHgJABIgDAAQgIAAgHgFg");
	this.shape_4.setTransform(79.6987,23.7513);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("Ai5C5IAAAAIgUgXIgBgBQg3hFAAhcQgBhsBNhNIAAAAQBNhNBsAAQAYAAAXAEQBPANA8A8IAAAAQBNBNgBBsQAABLglA9IAAABIgEAFIgNATIgBABIgUAXIgBAAQgTATgUAOQhBAshSABQhsgBhNhNgAgSBkQgBAKAHAHQAHAIAIAAQAKABAIgGIB/hkQAGgFACgHQADgIgDgGQgCgHgGgFIh/hkQgHgGgKABQgJAAgGAIQgHAHAAAJIAAAgIgygxQgHgHgKAAQgKgBgIAIQgHAHAAAKIAADIQgBAKAIAHQAHAHAKAAQALABAHgIIAygwg");
	this.shape_5.setTransform(415.75,23.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTB9QgJgBgHgHQgHgHAAgKIABgfIgyAxQgIAHgKAAQgKAAgHgIQgIgHAAgKIABjHQAAgKAHgIQAIgHAKAAQAKAAAHAHIAyAxIAAgfQAAgKAHgHQAGgHAKgBQAKgBAHAGIB+BkQAGAFACAHQADAHgDAHQgCAIgGAFIh+BkQgHAFgIAAIgDAAg");
	this.shape_6.setTransform(418.0582,23.9004);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAzhWIABCtIhnhXg");
	this.shape_7.setTransform(412.2091,23.5009,0.9827,1.1475,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_8.setTransform(412.2091,23.5009,0.9827,1.1475,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_9.setTransform(422.6506,23.5009,0.9827,1.1475,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_10.setTransform(422.6506,23.5009,0.9827,1.1475,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E1E1E1").ss(4,1,1).p("AiqirQhIBHAABkQAABUA0BBQAJALALALQBGBIBlAAQAgAAAegIQAngKAigXQASgNASgSQALgLAIgLQAHgJAGgIQACgDADgEQAig3AAhGQAAhkhHhHQgwgwg9gPQgKgCgJgCQgVgEgWAAQhlAAhGBHg");
	this.shape_11.setTransform(415.75,23.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E1E1E1").s().p("AiqCrIgUgWQg0hAAAhVQABhkBHhHQBGhGBkAAQAXAAAVADIATAEQA9APAwAwQBHBHAABkQAABGgjA3IgEAGIgNASIgTAWQgSARgTAOQghAXgnAKQgeAIghgBQhjAAhHhHg");
	this.shape_12.setTransform(415.75,23.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this._nextbtn},{t:this._prevbtn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2,-3.6,579.6,53.7);
p.frameBounds = [rect];


(lib.ClipGroup_12 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EgqEA66MAAAh1zMBUJAAAMAAAB1zg");
	mask.setTransform(269.3,377.025);

	// 图层_3
	this.instance = new lib.ClipGroup_7();
	this.instance.setTransform(177.45,214.4,1,1,0,0,0,74.2,66.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, rect = new cjs.Rectangle(103.3,147.6,148.5,133.5), [rect]);


(lib.ClipGroup_10 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EgqEA66MAAAh1zMBUJAAAMAAAB1zg");
	mask.setTransform(269.3,377.025);

	// 图层_3
	this.instance = new lib.ClipGroup_9();
	this.instance.setTransform(177.45,371.2,1,1,0,0,0,74.2,66.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhaBbQgmglAAg2QAAg0AmgnQAlgmA1ABQA1gBAmAmQAmAnAAA0QAAA2gmAlQgmAng1AAQg1AAglgng");
	this.shape.setTransform(177.875,277);

	this.instance_1 = new lib.ClipGroup_1_0();
	this.instance_1.setTransform(177.9,266.85,1,1,0,0,0,16.6,6.5);

	this.instance_2 = new lib.ClipGroup_2_0();
	this.instance_2.setTransform(177.9,276.6,1,1,0,0,0,16.6,4.5);

	this.instance_3 = new lib.ClipGroup_3_0();
	this.instance_3.setTransform(177.9,287.15,1,1,0,0,0,16.6,6.4);

	var maskedShapeInstanceList = [this.instance,this.shape,this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, rect = new cjs.Rectangle(103.3,260.4,148.5,177.8), [rect]);


(lib.ClipGroup_8_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EgqEA66MAAAh1zMBUJAAAMAAAB1zg");
	mask.setTransform(269.3,377.025);

	// 图层_3
	this.instance = new lib.ClipGroup_25();
	this.instance.setTransform(379,374.2,1,1,0,0,0,74.2,66.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhaBcQgmgmAAg2QAAg0AmgmQAlgmA1AAQA1AAAmAmQAmAmAAA0QAAA2gmAmQgmAlg1AAQg1AAglglg");
	this.shape.setTransform(177.875,433.925);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.setTransform(177.9,423.8,1,1,0,0,0,16.6,6.5);

	this.instance_2 = new lib.ClipGroup_2_1();
	this.instance_2.setTransform(177.9,433.55,1,1,0,0,0,16.6,4.5);

	this.instance_3 = new lib.ClipGroup_3_1();
	this.instance_3.setTransform(177.9,444.1,1,1,0,0,0,16.6,6.4);

	var maskedShapeInstanceList = [this.instance,this.shape,this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_0, rect = new cjs.Rectangle(161.3,307.4,292,143.1), [rect]);


(lib.ClipGroup_6_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EgqEA66MAAAh1zMBUJAAAMAAAB1zg");
	mask.setTransform(269.3,377.025);

	// 图层_3
	this.instance = new lib.ClipGroup_27();
	this.instance.setTransform(379,214.25,1,1,0,0,0,74.2,66.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhbBbQglglgBg2QABg0AlgnQAmgmA1ABQA1gBAnAmQAmAngBA0QABA2gmAlQgnAng1AAQg1AAgmgng");
	this.shape.setTransform(379.45,436.75);

	this.instance_1 = new lib.ClipGroup_1_2();
	this.instance_1.setTransform(379.5,426.6,1,1,0,0,0,16.6,6.5);

	this.instance_2 = new lib.ClipGroup_2_2();
	this.instance_2.setTransform(379.5,436.4,1,1,0,0,0,16.6,4.5);

	this.instance_3 = new lib.ClipGroup_3_2();
	this.instance_3.setTransform(379.5,446.9,1,1,0,0,0,16.6,6.4);

	var maskedShapeInstanceList = [this.instance,this.shape,this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6_0, rect = new cjs.Rectangle(304.8,147.5,148.5,305.9), [rect]);


(lib.ClipGroup_4_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EgqEA66MAAAh1zMBUJAAAMAAAB1zg");
	mask.setTransform(269.3,377.025);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhbBbQglglgBg2QABg0AlgnQAmgmA1ABQA1gBAnAmQAmAngBA0QABA2gmAlQgnAng1AAQg1AAgmgng");
	this.shape.setTransform(379.45,277);

	this.instance = new lib.ClipGroup_29();
	this.instance.setTransform(379.5,266.85,1,1,0,0,0,16.6,6.5);

	this.instance_1 = new lib.ClipGroup_1_3();
	this.instance_1.setTransform(379.5,276.6,1,1,0,0,0,16.6,4.5);

	this.instance_2 = new lib.ClipGroup_2_3();
	this.instance_2.setTransform(379.5,287.15,1,1,0,0,0,16.6,6.4);

	var maskedShapeInstanceList = [this.shape,this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_0, rect = new cjs.Rectangle(362.9,260.4,33.1,33.2), [rect]);


(lib.元件4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {label1:1,label2:10,label3:20,label4:30};
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(1));

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAEB5IAAjEIg7AMIAAgqIBIgQIAmAAIAADyg");
	this.shape.setTransform(-162.65,-32.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhUB7IAAgtQArgiAYgXQAXgWALgPQAKgQAAgNQAAgUgMgIQgLgHgTAAQgLAAgOACQgOACgPAFIAAgqQAOgFAQgCQARgCARAAQAnAAAXARQAWARAAAjQAAAOgDANQgEANgJANQgJANgRAQQgQAQgaAVIgPAMIAAADIBpAAIAAAqg");
	this.shape_1.setTransform(-161.225,221.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAEB6IAAjFIg7AMIAAgqIBIgPIAmAAIAADyg");
	this.shape_2.setTransform(-162.65,-32.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ag1B8QgNgBgMgCIAAgsIAaAEQAMACAOAAQAPAAALgDQAMgDAHgHQAHgIAAgNQgBgUgPgGQgPgIgcABIgSAAIAAgmIASAAQAaAAANgHQAPgHAAgSQAAgQgLgHQgLgGgVAAQgLAAgNACQgNACgKAEIAAgqQAJgDAPgBQAOgDAQAAQAaAAAUAGQAUAGAKAPQALAPAAAZQAAATgJANQgKANgUAHIAAACQAXAEALAOQAMAQAAAWQgBAlgZARQgaASgyAAIgegBg");
	this.shape_3.setTransform(166.075,-32.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAQB5IAAgzIhrAAIAAgyIBhiNIA7AAIAACUIAbAAIAAArIgbAAIAAAzgAgwAZIAAACIBAAAIAAhfIgCAAg");
	this.shape_4.setTransform(164.825,224.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},9).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1}]},10).to({state:[{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_4}]},10).wait(10));

	// 图层_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231815").s().p("AgcAqQgHgLAAgPQAAgQAHgJQAJgMAPAAQAMAAAIAKIABAAIAAgpIASAAIAABoIgSAAIAAgIIAAAAQgIAKgNAAQgPAAgJgMgAgPAQQAAAIAEAHQAEAIAHAAQAIAAAFgIQADgHAAgIQAAgKgDgGQgFgHgIAAQgOAAgBAXg");
	this.shape_5.setTransform(34.5494,30.2777,1.6212,1.6212);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231815").s().p("AgQArIAAAAIAAAJIgSAAIAAhoIASAAIAAAqIABAAQAIgLAMAAQAQAAAIALQAGAKAAAQQAAAQgGAKQgIALgQAAQgOAAgHgKgAgMAAQgEAHAAAJQAAAJAEAGQAFAIAHAAQAIAAAEgIQAEgGAAgJQAAgWgQAAQgHAAgFAGg");
	this.shape_6.setTransform(35.3195,-213.0285,1.6212,1.6212);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231815").s().p("AgRAbQgJgKAAgRQAAgQAJgKQAJgLAQAAQALAAAHADIgCAOQgGgCgGAAQgJAAgEAGQgFAGAAAKQAAAXASAAQAHAAAHgDIABAPQgJADgKAAQgQAAgJgLg");
	this.shape_7.setTransform(-300.8428,32.8312,1.6212,1.6212);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231815").s().p("AgbAaQgIgKABgQQgBgPAIgKQAIgMAPAAQANAAAIALIAAAAIAAgJIATAAIAABHIgSAAIAAgIIgBAAQgHAKgOAAQgPAAgIgMgAgOAAQAAAJADAGQAEAIAHAAQAIAAAFgHQAEgHAAgJQAAgIgEgGQgFgIgIAAQgOAAAAAWg");
	this.shape_8.setTransform(-299.5053,-210.5156,1.6212,1.6212);

	this.instance = new lib.ClipGroup_4_0();
	this.instance.setTransform(-12.75,129.5,1.6212,1.6212,0,0,0,269.4,377.1);

	this.instance_1 = new lib.ClipGroup_5_0();
	this.instance_1.setTransform(165.75,-134.55,1.6212,1.6212,0,0,0,70.2,62.1);

	this.instance_2 = new lib.ClipGroup_6_0();
	this.instance_2.setTransform(-12.75,129.5,1.6212,1.6212,0,0,0,269.4,377.1);

	this.instance_3 = new lib.ClipGroup_7_0();
	this.instance_3.setTransform(165.75,124.6,1.6212,1.6212,0,0,0,70.2,62.2);

	this.instance_4 = new lib.ClipGroup_8_0();
	this.instance_4.setTransform(-12.75,129.5,1.6212,1.6212,0,0,0,269.4,377.1);

	this.instance_5 = new lib.ClipGroup_9_0();
	this.instance_5.setTransform(-161.15,119.9,1.6212,1.6212,0,0,0,70.2,62.2);

	this.instance_6 = new lib.ClipGroup_10();
	this.instance_6.setTransform(-12.75,129.5,1.6212,1.6212,0,0,0,269.4,377.1);

	this.instance_7 = new lib.ClipGroup_11();
	this.instance_7.setTransform(-161.15,-134.45,1.6212,1.6212,0,0,0,70.2,62.1);

	this.instance_8 = new lib.ClipGroup_12();
	this.instance_8.setTransform(-12.75,129.5,1.6212,1.6212,0,0,0,269.4,377.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#028379").s().p("AlzA/QgHgDgFgEQgEgFAAgEQAAgDACgCQACgCAEAAQAEAAAEADIAGAHIAFACIAGABQAIAAADgCQAEgCABgEQACgDABgFIAAgNQgFAHgFACQgFADgJAAQgJAAgHgEQgGgFgFgJQgDgIAAgLQAAgJACgGQADgHAEgEQAEgFAGgCQAGgDAFAAQAJAAAGADQAEADAGAHIAAgDQAAgEADgDQACgDAEAAQAFAAACAEQACAEAAAGIAAA1QAAAKgDAGQgBAHgFAEQgDAEgIADQgGACgMAAQgJAAgIgDgAlugRQgEAGAAALQAAALAEAGQAFAGAJAAQAEAAAEgDQAEgCADgGQADgFAAgHQgBgKgFgGQgEgHgJAAQgIAAgFAGgALQAjQgIgDgDgFQgEgFAAgEQAAgDADgCQABgCAEAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABAAIACAEQAEAFAEADQADACAHAAQAGAAAEgDQADgCAAgDQAAgFgDgCIgNgFIgPgFQgHgBgDgFQgEgFAAgFQAAgHAEgEQACgFAIgDQAFgDAKAAQAHAAAGACQAFABAEADQAEABADAEQACADgBADQABAEgCACQgDACgEAAIgEgCIgFgFIgFgEQgDgCgFAAQgFAAgDACQgEADAAADQAAADADABQACACAEACIAMADQAIABAGAEQAGACACAEQADADAAAGQAAAIgEAFQgDAFgHADQgIADgKAAQgLAAgGgDgAKjAjQgCgCAAgGIAAgBIgHAHIgIAEQgFABgFAAQgGAAgGgDQgHgDgDgFQgEgFgCgHQgCgGAAgJQgBgSAJgJQAJgKANAAQAJAAAFADQAFADAGAGIAAgcQAAgGACgDQADgDAEAAQAEAAACADQADADAAAFIAABRQAAAGgDACQgCADgEAAQgEAAgDgDgAKFgUQgFADgBAFQgDAHAAAFQAAAHADAGQACAGAEACQAEADAFAAQAEAAAFgDQADgDADgFQACgEABgJQgBgHgCgFQgDgGgDgCQgFgDgEAAQgGAAgDADgAJLAjQgDgDABgFIAAgeQgBgJgCgFQgDgFgIAAQgEAAgFADQgEADgBAFQgCAEAAAKIAAAYQAAAGgDACQgCADgEAAQgEAAgDgDQgCgDAAgFIAAg1QAAgFACgDQACgDAEAAIAEABIAEAEIABAGIAAACQAFgHAGgDQAGgDAHAAQAHAAAHADQAFAEADAGIADAHIAAAsQAAAFgCADQgCADgFAAQgEAAgDgDgAHMAcQgKgKAAgSQABgHACgHQACgHAFgFQAEgFAHgDQAHgDAJAAQALAAAIAFQAIAEADAIQAFAHAAAIQAAAFgFADQgEACgHAAIglAAQABAGACAFQACAFAEACQAFADAFAAIAGgBIAFgDIALgIQAAgBABAAQAAAAAAAAQABgBABAAQAAAAABAAQABAAAAAAQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQABABAAAAIgCAGQgDAEgDADIgKAFQgIACgHAAQgRAAgLgKgAH4gFQgBgJgFgFQgFgFgHAAQgGAAgFAFQgFAFgBAJIAjAAIAAAAgAGiAjQgCgDAAgFIAAg1QAAgFACgDQADgDAEAAQAEAAADADQADACgBAGIAAA1QABAGgDACQgDADgEAAQgEAAgDgDgAFlAjQgDgDAAgFIAAgzQABgNAIAAQAGAAABADQACAEAAAFIAHgJQAEgDAGAAQAFAAAGADQAGADAAAFQAAADgCADQgDACgDAAIgLgDQgFAAgDACIgDAHIgDAKIAAAdQAAAGgDACQgDADgDAAQgEAAgDgDgAE6AjQgDgDAAgFIAAgxIgFAAQgFAAgCgCQgCgBAAgDQAAgHAJAAIAFAAIAAgGQAAgJACgFQACgFAGgCQAGgDAIAAQAQAAAAAIQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAgBAAIgJgBQgFAAgBADQgBADAAAFIAAAFIAEAAQALAAAAAGQAAAFgDABIgIABIgEAAIAAAxQAAAGgDACQgCADgFAAQgDAAgDgDgADsAbIAAgfQAAgIgCgGQgDgEgIAAQgEAAgFACQgEADgCAFQgCAFABAJIAAAZQgBAGgCACQgCADgEAAQgKAAAAgLIAAhQQAAgFACgEQADgDAFAAQAEAAACADQACADABAGIAAAbIAHgGIAHgEIAJgBQAIAAAFADQAEADAEAGIADAHIAAAtQABAFgDADQgCADgFAAQgJAAAAgLgACWAjQgFgDgBgFQgCgFAAgJIAAgjIgDAAQgDAAgCgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgEACgBQACgCAEAAIACAAIAAgSIACgFIACgDIAGgBQADAAACADQABAAABABQAAAAAAABQABAAAAABQAAAAAAABIABAUIAHAAQADAAACACQACABAAAEQAAADgDACQgDABgFAAIgDAAIAAAiIAAAGQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAABAAAAQABAAAAAAQABABABAAQAAAAABAAIAJgBIAEABIABAFQAAAFgEACQgGACgIAAQgJAAgEgDgABnAjQgCgDAAgFIAAg1QAAgFACgDQADgDAEAAQAEAAADADQADACgBAGIAAA1QABAGgDACQgDADgEAAQgEAAgDgDgAAzAkIgEgFIgMgsIgLAkIgFALQgCAEgGAAIgFgBIgEgEIgCgFIgSg5QgBgDADgCQADgDADAAQAEAAACADIAEAJIALApIAOgvIADgEQACgCAFAAQAEAAACACIADAFIADAIIALAmIAOgwIACgDQADgCADAAQAEAAABADQADACAAADIgCAJIgTA0IgDAEQgDACgDAAQgEAAgDgCgAhRAjQgDgDAAgFIAAgeQAAgJgDgFQgDgFgHAAQgFAAgEADQgEADgCAFQgBAEgBAKIAAAYQABAGgDACQgCADgFAAQgDAAgEgDQgCgDAAgFIAAg1QAAgFACgDQADgDADAAIAFABIADAEIABAGIAAACQAFgHAGgDQAGgDAIAAQAHAAAGADQAFAEADAGIADAHIABAsQAAAFgDADQgCADgEAAQgFAAgCgDgAilAjQgCgDgBgEIAAgDIgHAHIgHAFIgLABQgHAAgFgDQgFgCgDgGQgEgFABgMIAAgkQgBgFADgDQACgDAFAAQAEAAADADQACACAAAGIAAAdQAAAHACAEQAAADADAEQADADAFAAQAEAAAFgDQAEgDACgFQACgDgBgNIAAgXQABgFACgDQACgDAFAAQAEAAADADQACADAAAFIAAA1QAAAGgCACQgDADgEAAQgEAAgCgDgAkBAjQgCgCgBgGIAAgxIgFAAQgEAAgCgCQgDgBAAgDQAAgHAKAAIAEAAIAAgGQAAgJACgFQADgFAFgCQAGgDAJAAQAQAAAAAIQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgIgBQgFAAgCADQgBADAAAFIAAAFIAFAAQAKAAABAGQAAAFgEABIgHABIgFAAIAAAxQAAAFgCADQgDADgFAAQgDAAgDgDgAmkAjQgCgDAAgFIAAgeQgBgKgCgEQgCgFgIAAQgFAAgEADQgFADgBAFQgBAEAAAKIAAAYQAAAFgDADQgDADgEAAQgEAAgCgDQgDgCAAgGIAAg1QAAgGACgCQADgDAEAAIAEABQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQACACAAAEIAAACQAEgHAGgDQAGgDAHAAQAIAAAGADQAFAEAEAGIACAHIAAAsQAAAFgCADQgDADgEAAQgEAAgDgDgAn5AjQgDgDAAgFIAAg1QAAgFADgDQACgDAEAAQAFAAACADQADADAAAFIAAA1QAAAFgDADQgCADgFAAQgEAAgCgDgAoyAkIgDgEIgVgzIgCgDIgCgHIACgEIADgDIAEgBQAEAAADADIADAJIAQApIAQgrIAEgIQACgCAEAAQADAAADADQACACAAADIAAADIgBADIgCADIgUAxIgDAFQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgCABgDAAQgEAAgDgCgApiAjIgGgHQgHAFgGACQgHADgHAAQgHAAgGgDQgGgDgCgEQgDgFAAgGQAAgHAEgGQAGgFAIgBIAggIQAAgHgDgDQgDgEgIAAQgHAAgEACIgGAGIgEAFQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQgEAAgCgCQgCgBAAgEQAAgEADgFQAFgFAHgDQAHgDALAAQALAAAJADQAHADACAGQADAGAAALIAAAUIABALQADAFAAADQAAACgDADQgDACgDAAQgDAAgDgDgAqAAGQgEABgCACQgCADAAAEQgBAEAEADQADADAFAAQAHAAADgDQAGgCACgEQACgFAAgJIAAgCgAq9AjQgDgDAAgGIAAghIgsAAIAAAhQAAAFgDAEQgDADgEAAQgEAAgDgDQgDgEAAgFIAAhOQAAgGADgDQADgEAEAAQAEAAADAEQADACAAAHIAAAcIAsAAIAAgcQAAgGADgDQACgEAFAAQAFAAADAEQADADAAAGIAABOQAAAGgDADQgDADgFAAQgFAAgCgDgAGjgwQgDgCAAgFQAAgDADgDQACgDAEAAQADAAAEADQADACgBAEQABAEgDADQgEADgDAAQgEAAgCgDgABogwQgDgCAAgFQAAgDADgDQACgDAEAAQADAAAEADQADACgBAEQABAEgDADQgEADgDAAQgEAAgCgDgAn5gwQgDgCAAgFQABgDADgDQACgDAEAAQADAAADADQADACAAAEQAAAEgDADQgDADgDAAQgEAAgDgDg");
	this.shape_9.setTransform(-12.4663,-268.7989,1.6212,1.6212);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-449.5,-481.8,873.2,1222.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 标题
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgSAbQgGgCgDgGQgBgHAAgMQAAgMABgGQADgGAGgDQAGgCAMABQAMgBAGACQAHADACAGQACAGAAAMQAAAMgCAHQgCAGgHACQgGACgMAAQgMAAgGgCg");
	this.shape.setTransform(561.5,57.52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AhGBRQAPAAAJgDQAJgDAGgGQAFgGACgIIhFiwIA1AAIApB+IACAAIAoh+IAzAAIg8CgQgIAZgJAPQgJARgLAIQgMAKgQAEQgQAEgXAAg");
	this.shape_1.setTransform(546.475,54.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgTBbQgZAAgRgMQgQgNgJgYQgDgJgBgLIgCgVIAAgHQABgYAJgTQAKgSATgOQAJgFAJgDQAIgBAJAAIAJAAQAPAAALAEQALAGAHAKIAAABIAAABIABAAIAAgFIABgBIAuAAIABAAIAAABIgCA6QAAAmACAYQADAYAEALIABACIABAFIgCABIgtAAIgCgHIgHgSIgBAAQgFANgLAHQgLAGgPAAgAgdgtQgLAKgHAVIgBAKIgBAGQAAAUAHANQAHANAOAFIAKACIAKABQALABAJgFQAJgEAFgKQACgGACgLQACgJAAgNQAAgSgEgNQgGgMgIgGQgEgDgGgBQgFgBgHAAIAAAAQgRAAgLAKg");
	this.shape_2.setTransform(526.1,51.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgHBcQgQAAgOgCIgagEIAAgoQANAEAOACQAOACANAAQANABAIgEQAHgEAAgKQAAgIgCgEQgDgEgHgDQgHgDgPgDQgSgFgKgGQgLgFgEgJQgDgKAAgPQgBgZARgOQAQgOAmAAQAPAAANACQANACAHACIgCAlIgMgDIgQgDIgRgBQgPAAgFAEQgHAEABAJQgBAFACADQADADAHADIAVAGQASAFAMAGQAKAGAFAKQADAKAAAQQAAAfgSANQgTANgfAAIgDAAg");
	this.shape_3.setTransform(508.45,51.2759);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAhBbIAAhsQABgSgGgIQgGgIgRAAQgPAAgJAGQgKAFgDAOIAAB1IgxAAIAAixIAxAAIAAAVQAHgNAOgGQAOgGAUAAQAVAAANAHQANAHAGANQAGANgBAUIAAB5g");
	this.shape_4.setTransform(481.4,51.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgpBVQgUgIgKgVQgKgUAAgkQAAgjAKgUQAKgUAUgIQAUgJAbABQAeAAARAKQARAKAGARQAGASAAAXIgBANIgBALIhyAHQACATALAJQAMAJAXAAQALAAALgCQAMgCAJgDQAKgCAGgEIAAAmQgJAFgSAEQgSADgYAAIgDAAQgYAAgSgHgAgYgtQgJAJgBAWIBIgGQABgKgDgIQgCgIgHgEQgHgFgOAAQgVAAgJAKg");
	this.shape_5.setTransform(461.2018,51.3251);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AAiB9IAAhtQAAgRgHgIQgFgIgRABQgPgBgJAGQgJAGgFANIAAB1IgwAAIAAj5IAwAAIAABeQAIgNAOgGQANgGAVAAQAVAAANAHQANAGAGAOQAFANAAASIAAB6g");
	this.shape_6.setTransform(441.05,47.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgYByIAAi3Ig8AAIAAgtICpAAIAAAtIg8AAIAAC3g");
	this.shape_7.setTransform(421.4,48.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgSAbQgGgCgDgGQgBgHAAgMQAAgMABgGQADgGAGgDQAGgCAMABQAMgBAGACQAHADACAGQACAGAAAMQAAAMgCAHQgCAGgHACQgGACgMAAQgMAAgGgCg");
	this.shape_8.setTransform(398.4,57.52);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgzBbIAAixIAwAAIAAAgQAFgPAIgIQAIgHAKgDQAJgDALAAIAEAAIgCArIgEAAQgMAAgKADQgKADgIAJQgGAIgDAOIAABlg");
	this.shape_9.setTransform(387.275,51.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgpBVQgUgIgKgVQgKgUAAgkQAAgjAKgUQAKgUAUgIQAUgJAbABQAeAAARAKQARAKAGARQAGASAAAXIgBANIgBALIhyAHQACATALAJQAMAJAXAAQALAAALgCQAMgCAJgDQAKgCAGgEIAAAmQgJAFgSAEQgSADgYAAIgDAAQgYAAgSgHgAgYgtQgJAJgBAWIBIgGQABgKgDgIQgCgIgHgEQgHgFgOAAQgVAAgJAKg");
	this.shape_10.setTransform(370.0518,51.3251);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgLB7QgLgDgHgGQgGgHgDgIIgEAZIgrAAIAAj6IAwAAIAABeQAFgKANgHQAMgHAWgBQAdAAAQAMQAPALAGAVQAGATgBAdQABAagGAUQgGAVgPAMQgQANgdAAQgPAAgLgEgAgYgOQgJAGgEAMQgDANAAASQAAARADAMQAEANAJAHQAJAHAPAAQARAAAIgIQAIgIACgMQADgNAAgPQAAgRgDgNQgDgLgIgIQgIgHgQAAQgPAAgJAHg");
	this.shape_11.setTransform(350.2269,47.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("ABUBbIAAhsQAAgSgFgIQgHgIgPAAQgOAAgJAGQgIAGgDAOIAAB0IgvAAIAAhsQAAgSgFgIQgHgIgOAAQgPAAgHAGQgIAFgDANIAAB2IgwAAIAAixIAwAAIAAAUQAHgMAMgGQAMgGATAAQAUAAAMAHQAMAGAGAMQAHgNAOgGQAPgGATAAQAeAAAPAPQAPAQAAAhIAAB1g");
	this.shape_12.setTransform(323.7,51.1742);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgUBaQgWAAgNgGQgNgHgGgNQgGgNAAgUIAAh5IAwAAIAABsQAAASAGAIQAGAIARAAQANAAAKgGQAJgFAEgOIAAh1IAwAAIAACxIgrAAIgEgVQgHANgOAGQgNAGgRAAIgDgBg");
	this.shape_13.setTransform(297.625,51.5019);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AAhBbIAAhsQABgSgGgIQgHgIgRAAQgNAAgKAGQgKAFgDAOIAAB1IgwAAIAAixIAwAAIAAAVQAHgNAOgGQAOgGATAAQAWAAANAHQANAHAGANQAGANAAAUIAAB5g");
	this.shape_14.setTransform(276.85,51.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("Ag6B0QgQgMgGgUQgGgVABgcQgBgaAGgUQAGgVAQgMQAPgNAdAAQAXAAAMAHQANAHAFAMIAAhfIAvAAIAAD6IgrAAIgEgZQgFAMgMAIQgNAIgXAAQgdAAgPgLgAgXgNQgIAIgDALQgCANAAAQQAAAQACANQADAMAIAHQAIAIAPAAQAQAAAJgHQAJgGAEgNQADgMAAgSQAAgRgEgNQgDgMgJgHQgJgHgQAAQgPAAgIAIg");
	this.shape_15.setTransform(246.7731,47.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AAiBbIAAhsQAAgSgGgIQgGgIgSAAQgNAAgKAGQgKAFgEAOIAAB1IgvAAIAAixIAvAAIAAAVQAIgNAPgGQANgGATAAQAWAAANAHQANAHAGANQAFANABAUIAAB5g");
	this.shape_16.setTransform(226.2,51.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgUBbQgYAAgQgMQgRgNgJgYQgDgJgCgLIgBgVIAAgHQAAgYAKgTQAKgSAUgOQAIgFAJgDQAIgBAJAAIAIAAQARAAALAEQAKAGAGAKIABABIABABIAAAAIABgFIABgBIAtAAIABAAIAAABIgCA6QAAAmADAYQACAYAFALIAAACIABAFIgBABIgtAAIgEgHIgFgSIgBAAQgHANgKAHQgLAGgPAAgAgdgtQgMAKgGAVIgCAKIAAAGQAAAUAHANQAHANANAFIAKACIAKABQANABAIgFQAJgEAEgKQADgGADgLQABgJAAgNQAAgSgFgNQgEgMgJgGQgEgDgFgBQgHgBgGAAIgBAAQgQAAgLAKg");
	this.shape_17.setTransform(204.85,51.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AAhBbIAAhsQABgSgGgIQgGgIgRAAQgPAAgJAGQgKAFgDAOIAAB1IgxAAIAAixIAxAAIAAAVQAHgNAOgGQAOgGAUAAQAVAAANAHQANAHAGANQAGANgBAUIAAB5g");
	this.shape_18.setTransform(176.3,51.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgpBVQgUgIgKgVQgKgUAAgkQAAgjAKgUQAKgUAUgIQAUgJAbABQAeAAARAKQARAKAGARQAGASAAAXIgBANIgBALIhyAHQACATALAJQAMAJAXAAQALAAALgCQAMgCAJgDQAKgCAGgEIAAAmQgJAFgSAEQgSADgYAAIgDAAQgYAAgSgHgAgYgtQgJAJgBAWIBIgGQABgKgDgIQgCgIgHgEQgHgFgOAAQgVAAgJAKg");
	this.shape_19.setTransform(156.1018,51.3251);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AgFBqQgNgFgGgNQgGgNAAgXIAAhSIgXAAIAAgmIAXAAIAAgqIAvAAIAAAqIAlAAIAAAmIglAAIAABOQAAAPAEAGQAFAFAMAAIAHAAIAGgBIAAAlIgLABIgLAAIgEAAQgTAAgLgFg");
	this.shape_20.setTransform(140.5,49.3271);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AgHBcQgPAAgPgCIgagEIAAgoQAMAEAPACQAOACANAAQANABAIgEQAHgEAAgKQAAgIgDgEQgDgEgGgDQgHgDgPgDQgSgFgLgGQgKgFgEgJQgDgKgBgPQAAgZAQgOQARgOAmAAQAPAAANACQANACAIACIgDAlIgMgDIgQgDIgRgBQgPAAgFAEQgHAEAAAJQAAAFACADQADADAIADIAUAGQASAFALAGQALAGAFAKQADAKAAAQQABAfgUANQgSANgfAAIgDAAg");
	this.shape_21.setTransform(126.6,51.2759);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgXB/IAAixIAvAAIAACxgAgPhNQgGgBgDgGQgCgFAAgMQAAgLACgFQADgFAGgCQAFgCAKABQALgBAGACQAFACADAFQACAFAAALQAAAMgCAFQgDAGgFABQgGACgLAAQgKAAgFgCg");
	this.shape_22.setTransform(113.775,47.595);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231F20").s().p("AhGByIAAjkIAzAAIAAC5IBaAAIAAArg");
	this.shape_23.setTransform(101.3,48.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ABYCZIgahMIh7AAIgbBMIhFAAIBykxIBYAAIBxExgAAqAWIgnhzIgFAAIgoBzIBUAAg");
	this.shape_24.setTransform(46.325,47.175);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0D8075").s().p("AirCsQhHhHAAhlQAAhkBHhIQBHhGBkAAQBlAABHBGQBHBIAABkQAABlhHBHQhHBHhlAAQhkAAhHhHg");
	this.shape_25.setTransform(46.725,47.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层 1
	this._showbar = new lib.元件4();
	this._showbar.name = "_showbar";
	this._showbar.setTransform(649.45,354.45,0.9556,0.9556);

	this.timeline.addTween(cjs.Tween.get(this._showbar).wait(1));

	// csz
	this.pro_bar = new lib.元件3复制2();
	this.pro_bar.name = "pro_bar";
	this.pro_bar.setTransform(637.55,666.95,1,1,0,0,0,286.3,26.2);

	this.timeline.addTween(cjs.Tween.get(this.pro_bar).wait(1));

	// diban
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.8)").s().p("EhkVAEsIAApXMDIrAAAIAAJXg");
	this.shape_26.setTransform(639.9,690.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(637.7,254,1284.5,1168.3);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: 'E637B31863A9224E9952B4D82164A654',
	width: 1280,
	height: 720,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1731917417362", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png?1731917417362", id:"index_atlas_2"}
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