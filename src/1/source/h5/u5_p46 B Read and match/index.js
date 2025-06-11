(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1028,820],[0,822,144,73]]}
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



(lib.Bitmap1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.位图3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
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


(lib.元件14 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF7E4D").s().p("Ax2BdQgmAAgcgcQgbgbAAgmQAAglAbgbQAcgcAmAAMAjtAAAQAdAAAXAQIAEAEIAJAIIAFAFQAXAaAAAhQAAAigXAaIgFAFIgJAIIgEAEQgXAQgdAAg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件14, rect = new cjs.Rectangle(-123.5,-9.2,247.2,18.6), [rect]);


(lib.元件7 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1.graphics.f().s("#FF7E4D").ss(4,1,1).p("ACsirQBHBIAABjQAABVg0BBQgJALgKALQhIBHhkAAQhjAAhIhHQgKgLgIgLQgIgJgGgJQgCgDgCgEQgjg3AAhGQAAhjBHhIQBIhHBjAAQBkAABIBHg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7E4D").s().p("AirCsIgSgWIgOgTIgEgGQgig3gBhGQABhjBGhIQBIhGBjAAQBkAABHBGQBHBIABBjQgBBVgzBBIgUAWQhHBGhkAAQhjAAhIhGg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF7E4D").ss(6,1,1).p("ABChxIAADjAhBhxIAADj");
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
	this.shape_1.graphics.f().s("#FF7E4D").ss(4,1,1).p("AC+i+QBPBQAABuQAABfg5BIQgKAMgMAMQhPBPhvAAQhvAAhPhPQgLgMgKgMQgIgKgHgLQgCgDgDgEQgmg+AAhNQAAhuBPhQQBPhOBvAAQBvAABPBOg");
	this.shape_1.setTransform(0.0124,0.011,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7E4D").s().p("Ai+C/IgVgZIgOgUIgGgHQgmg+ABhNQgBhvBPhPQBPhPBvABQBvgBBQBPQBPBPAABvQAABfg6BHQgKANgLAMQhQBPhvAAQhvAAhPhPg");
	this.shape_2.setTransform(0.0124,0.011,0.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF7E4D").ss(4,1,1).p("ACHAAQAAAFgCAFQgCAFgFAEQgCADgCACIjZB9QgFACgFAAQgMAAgIgIQgHgHgBgIIgBj8QABgHAEgHQABgCADgDQAIgHAMAAQAFAAAFACIDcB/QABABAAAAQAFAFACAFQACAFAAAFg");
	this.shape_3.setTransform(3.9002,-0.1596,0.7981,0.7981);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF7E4D").s().p("Ah9CPQgHgHgBgIIgBj7QABgIAEgHIAEgEQAIgIAMAAQAFAAAFACIDcB/IABACQAFAEACAFQACAFAAAFQAAAGgCAEQgCAFgFAEIgEAFIjZB9QgFACgFAAQgMAAgIgIg");
	this.shape_4.setTransform(3.9002,-0.1596,0.7981,0.7981);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai+C/IgVgZIgOgUIgGgHQgmg+ABhNQgBhvBPhPQBPhPBvABQBvgBBQBPQBPBPAABvQAABfg6BHQgKANgLAMQhQBPhvAAQhvAAhPhPg");
	this.shape_5.setTransform(0.0124,0.011,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_1},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.2,-26.2,52.5,52.5);
p.frameBounds = [rect, rect, rect, rect];


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
	this.shape_4.graphics.f().s("#FF7E4D").ss(4,1,1).p("ACsirQBHBIAABjQAABVg0BAQgJALgKALQhIBIhkAAQhLAAg7gpQgUgNgRgSQgLgLgJgLQgGgIgGgJQgCgDgDgEQgig3AAhGQAAhjBHhIQA3g3BKgMQAUgDAWAAQBkAABIBGg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF7E4D").s().p("AiGDKQgUgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBHBHAABkQAABVg0BAIgTAWQhIBHhkAAQhLAAg7gog");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF7E4D").ss(5,1,1).p("AA/hjIABDHIh+hkg");
	this.shape_6.setTransform(-6.9,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF7E4D").s().p("Ag+AAIB9hjIAADHg");
	this.shape_7.setTransform(-6.9,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF7E4D").ss(5,1,1).p("AAyhjIABDHIhlhkg");
	this.shape_8.setTransform(3.55,0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF7E4D").s().p("AgyAAIBlhjIAADHg");
	this.shape_9.setTransform(3.55,0.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF7E4D").ss(4,1,1).p("ACsirQBHBHAABkQAABVg0BAQgJALgKALQhHBIhlAAQhLAAg8gpQgTgNgRgSQgLgLgJgLQgGgIgGgJQgCgDgDgEQgig3AAhGQAAhkBHhHQA3g3BJgMQAVgEAWAAQBlAABHBHg");

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
	this.shape_5.graphics.f().s("#F99703").ss(1,1,1).p("AgqgxIBVAAQARAAAAARIAABBQAAARgRAAIhVAAQgRAAAAgRIAAhBQAAgRARAAg");
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
	this.shape.setTransform(-3.5409,0.203,0.9827,1.1479,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_1.setTransform(-3.5409,0.203,0.9827,1.1479,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_2.setTransform(6.9006,0.203,0.9827,1.1479,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_3.setTransform(6.9006,0.203,0.9827,1.1479,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF7E4D").ss(4,1,1).p("AirirQhHBHAABkQAABVA0BAQAJALAKALQBHBIBlAAQBLAAA8gpQATgNARgSQALgLAJgLQAGgIAGgJQACgDADgEQAig3AAhGQAAhkhHhHQg3g3hJgMQgVgEgWAAQhlAAhHBHg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF7E4D").s().p("AirCrIgTgWQgzhAAAhVQAAhkBGhHQBIhGBkAAQAVAAAVADQBKAMA3A3QBGBHAABkQAABGghA3IgFAGIgMASIgUAWQgRARgTAOQg8AohLAAQhkAAhIhHg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF7E4D").ss(5,1,1).p("AgyhjIAADHIBlhjg");
	this.shape_6.setTransform(-3.55,0.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF7E4D").s().p("AgxhjIBkBjIhlBkg");
	this.shape_7.setTransform(-3.55,0.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF7E4D").ss(5,1,1).p("Ag+hjIAADHIB+hjg");
	this.shape_8.setTransform(6.9,0.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF7E4D").s().p("Ag+hjIB+BjIh+Bkg");
	this.shape_9.setTransform(6.9,0.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AirCrIgTgWQgzhAAAhVQAAhkBGhHQBIhGBkAAQAVAAAVADQBKAMA3A3QBGBHAABkQAABGghA3IgFAGIgMASIgUAWQgRARgTAOQg8AohLAAQhkAAhIhHgAAFBlIB/hkIh+hkIAABcIhbhcIAADIIBbhag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{scaleY:1.1479,y:0.203}},{t:this.shape_2,p:{scaleY:1.1479,y:0.203}},{t:this.shape_1,p:{scaleY:1.1479,y:0.203}},{t:this.shape,p:{scaleY:1.1479,y:0.203}}]}).to({state:[{t:this.shape_10},{t:this.shape_4},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{scaleY:1.1478,y:0.2241}},{t:this.shape_2,p:{scaleY:1.1478,y:0.2241}},{t:this.shape_1,p:{scaleY:1.1478,y:0.2241}},{t:this.shape,p:{scaleY:1.1478,y:0.2241}}]},1).wait(2));

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
	this.shape.graphics.f("#FF7E4D").s().p("AhMBMQghgfAAgtQAAgtAhggQAggfAtAAQAtAAAfAfQAhAgAAAtQAAAtghAfQgfAhgtAAQgtAAggghg");
	this.shape.setTransform(0.1,0.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhwBwQguguAAhCQAAhBAugvQAvguBBAAQBCAAAuAuQAvAvAABBQAABCgvAuQguAvhCAAQhBAAgvgvg");
	this.shape_1.setTransform(0.0107,-0.0066,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件8, rect = new cjs.Rectangle(-14.3,-14.3,28.6,28.6), [rect]);


(lib.元件4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {label1:1,label2:10,label3:20,label4:30,label5:40,label6:50,label7:58,label8:67,label9:77,label10:87,label11:97,label12:107};
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
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_57 = function() {
		this.stop();
	}
	this.frame_66 = function() {
		this.stop();
	}
	this.frame_76 = function() {
		this.stop();
	}
	this.frame_86 = function() {
		this.stop();
	}
	this.frame_96 = function() {
		this.stop();
	}
	this.frame_106 = function() {
		this.stop();
	}
	this.frame_114 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(8).call(this.frame_57).wait(9).call(this.frame_66).wait(10).call(this.frame_76).wait(10).call(this.frame_86).wait(10).call(this.frame_96).wait(10).call(this.frame_106).wait(8).call(this.frame_114).wait(1));

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiEDEIAAhtIgVAJIgWAJIgZgwQA+gWAugbQAugaAcgiIAnAAQAfAjAsAaQAsAaA9AWIgVAyIgXgKIgWgKIAABtgAhOCVICfAAIAAgrIifAAgAggAcQgTAOgXAOICXAAQgXgOgUgOQgTgOgOgOQgOAOgTAOgAiqgqIAegOIAfgQIAegRIAcgSIhIAAIAAAoIg1AAIAAhYICVAAIgIglIA7gDIAHAoICUAAIAABYIgvAAIAWANIAUALIgWAtIgdgRIgigTIgjgSIgdgPIAYgoIhjAAIAZApQgdAVgeARQgeARghAOgABWhaIAnAUIAAglIhKAAIAjARg");
	this.shape.setTransform(-877.1,-42.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AA4COIAhgDQAQgCAFgFQAEgFAAgOIAAg0IgcAmIgSgXIgWgYIgWgYIgWgWQgNAagXAYQgWAXghAaIgZgcIAAB1Ig2AAIAAlRICNAAIAAg0IA2ACIAAAyICOAAIAAEVQAAARgCAKQgDALgGAGQgHAHgMADQgLADgTACIgiADgAhyAxQAYgQAQgQQAQgQAKgQQAKgRAFgSQAFgSABgVIhXAAgAAYhEIgDAUIAXAVIAZAYIAZAXIAUAXIAAiEIhYAAIgCAVg");
	this.shape_1.setTransform(-918.175,-41.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhQCFIAhgCIAOgBQAFgBACgCQADgDABgEIAAgMIAAiAIifAAIAAg2IFvAAIAAA2IiWAAIAACVQAAAQgEALQgDAKgHAHQgIAGgNADQgLAEgSABIgiACgACEB+IgWgnIgXgjIgUgbIAsgdIAWAZIAYAhIAXAjIATAgIgwAoIgTgjgAjGCAIAZgfIAZgiQAMgRAKgRQALgRAHgPIAwAZIgSAjQgKASgMASIgXAjQgNARgMAOgAiNiGIAAg2IEfAAIAAA2g");
	this.shape_2.setTransform(-959.825,-40.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ai+C6IAAgyIB6AAIAAgrIAAhlIhQAAIAAixIEpAAIAACxIhQAAIAABpIAAAnIB6AAIAAAygAgOCIIAeAAIAAiQIgeAAgAhfg4IC+AAIAAgQIi+AAgAhfh4IC+AAIAAgQIi+AAgAh8BnIgQgbIgRgaIgPgWIAqgdIAPATIAQAaIAQAbIAPAWIgsAhIgMgXgABFBhIAQgXIAQgbIAPgaIALgVIAsAaIgNAXIgPAcIgQAaIgOAWg");
	this.shape_3.setTransform(-1000.8,-41.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("ABWCTIAdgEQANgBADgGQAEgGAAgNIAAk0IAzACIAAFDQAAARgCALQgCALgGAHQgGAGgKADQgLAEgRACIgdADgAhXDEIAAiJIggAAIAABvIgvAAIAAiiIBPAAIAAgYIhiAAIAAgyIAiAAIghgLQAMgaAJgbQAJgbAFgbIAxAIIgDAOIgEAPIAUAAIAAgyIA0ADIAAAvIBHAAIAAAxIhHAAIAAAgIBQAAIAAAyIhQAAIAAAYIBLAAIAAB1QAAAYgJAJQgKAJgSACIgVADIgPgxIAPgCQAHgBACgDQADgDAAgIIAAgvIgdAAIAACJgAiBhRIgHAPIAxAAIAAggIgkAAIgGARgAA8BjIAAj/IAyACIAAD9g");
	this.shape_4.setTransform(-1042.675,-41.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ai3CVIAYgDQAJgCADgEQADgFAAgLIAAhQIgWAJIgTAJIgOg2IAZgIIAegMIAAg+IgnAAIAAg2IAnAAIAAhDIAzACIAABBIAaAAIAAA2IgaAAIAAAqIASgIIAIAjIAEARIgeALIAAB1QAAAPgCAKQgDAKgFAHQgGAGgJADQgJAEgMABIgdADgAhDC3IAAg0IBnAAIAAg8IhJAAIAAgsIgBABIgbgrQAagQAVgTQAWgSATgTIAgAkQgSATgVARQgTARgWARIC2AAIgXgSIgYgSIgXgRIgTgOIAdgpIAXAPIAdAXIAdAVIAWARIgeArIgDgDIgEgEIAAAwIhHAAIAAA8IBmAAIAAA0gACMg9IAAgrIiUAAIAAArIgxAAIAAhfIBfAAIgJgmIA0gEIAJAqIBiAAIAABfg");
	this.shape_5.setTransform(-1083.7,-41.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("A4NJ2IAAzrMAwbAAAIAATrg");
	this.shape_6.setTransform(-985.2,-37.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF0000").ss(3,1,1).p("AmvnVQGgBVBbG2QAYBuBABgQBkCUCoA+");
	this.shape_7.setTransform(-253.725,-194.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(3,1,1).p("AmvnVQGgBVBbG2QAYBuBABgQBkCUCoA+");
	this.shape_8.setTransform(-253.725,-194.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(3,1,1).p("Amy1eQIOFQAbJ+QAXIkAWInQAPGNEAEX");
	this.shape_9.setTransform(7.55,-6.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(3,1,1).p("Amy9XQGbHOBFJpQA/IrAaIuQAcJHBLJDQAgDtClCo");
	this.shape_10.setTransform(-254.45,39.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FF0000").ss(3,1,1).p("Amy9XQGbHOBFJpQA/IrAaIuQAcJHBLJDQAgDtClCo");
	this.shape_11.setTransform(-254.45,39.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(3,1,1).p("AzSghQJHBZJLgPQJZgOJSgzQA0gDA0gQ");
	this.shape_12.setTransform(90.525,233.3511);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FF0000").ss(3,1,1).p("AnLO7QFQnYBDpEQBEpVHAkE");
	this.shape_13.setTransform(-253.95,-147.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(3,1,1).p("AnLO7QFQnYBDpEQBEpVHAkE");
	this.shape_14.setTransform(-253.95,-147.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FF0000").ss(3,1,1).p("AmtuNQGfD8ABIWQAAB0AcB2QB0HWErFJ");
	this.shape_15.setTransform(7.05,-147.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF0000").ss(3,1,1).p("AmtuNQGfD8ABIWQAAB0AcB2QB0HWErFJ");
	this.shape_16.setTransform(7.05,-147.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FF0000").ss(3,1,1).p("Amy1eQIOFQAbJ+QAXIkAWInQAPGNEAEX");
	this.shape_17.setTransform(7.55,-6.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF0000").ss(3,1,1).p("AmZAlQGLiQGoCL");
	this.shape_18.setTransform(-253.95,37.3083);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FF0000").ss(3,1,1).p("AmZAlQGLiQGoCL");
	this.shape_19.setTransform(-253.95,37.3083);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF0000").ss(3,1,1).p("AzrO7QHk+GfzAR");
	this.shape_20.setTransform(89.025,-54.4831);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF0000").ss(3,1,1).p("AzrO7QHk+GfzAR");
	this.shape_21.setTransform(89.025,-54.4831);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF0000").ss(3,1,1).p("AmXANQEbgjEcAOQB8AKB8AL");
	this.shape_22.setTransform(-255.7,134.7168);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FF0000").ss(3,1,1).p("AmXANQEbgjEcAOQB8AKB8AL");
	this.shape_23.setTransform(-255.7,134.7168);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF0000").ss(3,1,1).p("Am3dJQFblkggn7QgenXANnYQANnmCXnNQBjkvC7kKQCCi5ABje");
	this.shape_24.setTransform(7.05,-54.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FF0000").ss(3,1,1).p("Am3dJQFblkggn7QgenXANnYQANnmCXnNQBjkvC7kKQCCi5ABje");
	this.shape_25.setTransform(7.05,-54.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF0000").ss(3,1,1).p("Am3VpQELjkA2ieQA2idAanIICB1BQAdlJFAhg");
	this.shape_26.setTransform(-254.95,89.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FF0000").ss(3,1,1).p("Am3VpQELjkA2ieQA2idAanIICB1BQAdlJFAhg");
	this.shape_27.setTransform(-254.95,89.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FF0000").ss(3,1,1).p("AzcmiQHplWGdIbQC9D2D9C/QIGGFJLg+QAWgEASgS");
	this.shape_28.setTransform(88.525,-13.0657);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_9}]},9).to({state:[{t:this.shape_8},{t:this.shape_11},{t:this.shape_7},{t:this.shape_10},{t:this.shape_9}]},10).to({state:[{t:this.shape_8},{t:this.shape_11},{t:this.shape_7},{t:this.shape_10},{t:this.shape_12},{t:this.shape_9}]},10).to({state:[{t:this.shape_8},{t:this.shape_11},{t:this.shape_14},{t:this.shape_7},{t:this.shape_10},{t:this.shape_12},{t:this.shape_13},{t:this.shape_9}]},10).to({state:[{t:this.shape_8},{t:this.shape_17},{t:this.shape_11},{t:this.shape_14},{t:this.shape_16},{t:this.shape_7},{t:this.shape_9},{t:this.shape_10},{t:this.shape_12},{t:this.shape_13},{t:this.shape_15}]},10).to({state:[{t:this.shape_8},{t:this.shape_17},{t:this.shape_11},{t:this.shape_14},{t:this.shape_16},{t:this.shape_19},{t:this.shape_7},{t:this.shape_9},{t:this.shape_10},{t:this.shape_12},{t:this.shape_13},{t:this.shape_15},{t:this.shape_18}]},8).to({state:[{t:this.shape_8},{t:this.shape_17},{t:this.shape_11},{t:this.shape_14},{t:this.shape_16},{t:this.shape_19},{t:this.shape_21},{t:this.shape_7},{t:this.shape_9},{t:this.shape_10},{t:this.shape_12},{t:this.shape_13},{t:this.shape_15},{t:this.shape_18},{t:this.shape_20}]},9).to({state:[{t:this.shape_8},{t:this.shape_17},{t:this.shape_11},{t:this.shape_14},{t:this.shape_16},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23},{t:this.shape_7},{t:this.shape_9},{t:this.shape_10},{t:this.shape_12},{t:this.shape_13},{t:this.shape_15},{t:this.shape_18},{t:this.shape_20},{t:this.shape_22}]},10).to({state:[{t:this.shape_8},{t:this.shape_17},{t:this.shape_11},{t:this.shape_14},{t:this.shape_16},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23},{t:this.shape_25},{t:this.shape_7},{t:this.shape_9},{t:this.shape_10},{t:this.shape_12},{t:this.shape_13},{t:this.shape_15},{t:this.shape_18},{t:this.shape_20},{t:this.shape_22},{t:this.shape_24}]},10).to({state:[{t:this.shape_8},{t:this.shape_17},{t:this.shape_11},{t:this.shape_14},{t:this.shape_16},{t:this.shape_19},{t:this.shape_21},{t:this.shape_23},{t:this.shape_25},{t:this.shape_27},{t:this.shape_7},{t:this.shape_9},{t:this.shape_10},{t:this.shape_12},{t:this.shape_13},{t:this.shape_15},{t:this.shape_18},{t:this.shape_20},{t:this.shape_22},{t:this.shape_24},{t:this.shape_26}]},10).to({state:[{t:this.shape_7},{t:this.shape_9},{t:this.shape_10},{t:this.shape_12},{t:this.shape_13},{t:this.shape_15},{t:this.shape_18},{t:this.shape_20},{t:this.shape_22},{t:this.shape_24},{t:this.shape_26},{t:this.shape_28}]},10).wait(8));

	// 图层_1
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("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");
	this.shape_29.setTransform(25.7,-6.5469);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(115));

	// 图层_4
	this.instance = new lib.位图3();
	this.instance.setTransform(-164,-175,0.76,0.76);

	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(-305,-283,0.6666,0.6666);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231815").s().p("AggAFQAAgXAIgOQAKgRAWgBQAKABAKADIgCAPQgKgDgIAAQgLAAgFAKQgFAHgBANIAAAAQAHgKALAAQANAAAJAJQAHAHAAANQAAAjghAAQggAAAAgtgAgNATQAAARANAAQANAAAAgRQAAgTgNAAQgNAAAAATg");
	this.shape_30.setTransform(-484.6724,229.7003,2.3499,2.3499);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231815").s().p("AgeAvIABgSQALAFAJAAQAJAAAEgEQAHgEAAgJQAAgRgWAAQgKAAgHADIABg0IA3AAIAAAPIgkAAIgBAVIAJgBQAMAAAIAGQAKAIABAQQgBAPgJAJQgKAKgRAAQgLAAgNgDg");
	this.shape_31.setTransform(-484.3199,136.5838,2.3499,2.3499);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231815").s().p("AAGAxIAAgUIgqAAIAAgQIAkg9IAYAAIAAA+IANAAIAAAPIgNAAIAAAUgAgSAOIAYAAIAAgqIgBAAg");
	this.shape_32.setTransform(-484.7312,40.9997,2.3499,2.3499);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231815").s().p("AgeAvIABgQQAMAEAJAAQAIAAAFgDQAHgEAAgHQAAgPgVAAIgJAAIAAgOIAJAAQAUAAABgNQgBgNgPAAQgLAAgLAFIgBgQQANgFAOAAQALAAAJAFQAMAHAAAOQAAAQgTAHIAAAAQATABAAAVQAAAQgNAIQgKAGgNAAQgQAAgKgEg");
	this.shape_33.setTransform(-485.0249,-53.8793,2.3499,2.3499);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231815").s().p("AggAyIAAgRQAQgNAJgLQARgSAAgLQAAgHgFgDQgEgEgGAAQgJAAgNAIIgCgQQANgHAQAAQAdAAAAAdQAAANgMAPQgGAHgSATIAnAAIAAAQg");
	this.shape_34.setTransform(-484.9074,-148.3471,2.3499,2.3499);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231815").s().p("AAEAxIAAhKIgQANIgKgNIAbgXIASAAIAABhg");
	this.shape_35.setTransform(-485.8474,-242.5211,2.3499,2.3499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_1},{t:this.instance}]}).wait(115));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1144.2,-283,1644.6,546.6);
p.frameBounds = [rect, rect=new cjs.Rectangle(-493.3,-283,988.6,546.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,126,77,0.4)").s().p("Ax2BdQgmAAgcgcQgbgbAAgmQAAglAbgbQAcgcAmAAMAjtAAAQAdAAAXAQIAEAEIAJAIIAFAFQAXAaAAAhQAAAigXAaIgFAFIgJAIIgEAEQgXAQgdAAg");
	this.shape.setTransform(-0.025,0.025);

	this.instance = new lib.元件16();
	this.instance.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件11复制, rect = new cjs.Rectangle(-123.6,-9.2,247.2,18.6), [rect]);


(lib.元件3复制 = function(mode,startPosition,loop,reversed) {
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
		
		if (!this.isinit) {
			this.isinit = true;
			init();
		}
		var showNum = 0;
		var len = 12; //对应label1-label4;
		function init() {
			console.log(_this.x);
			console.log();
			showNum=0;
			checkNum();
		}
		var audio = new Audio('sounds/s01.mp3');
		audio.addEventListener('play', function () {
			//console.log('音频开始播放');
		});
		var timeArr = new Array(0, 30, 61, 90);
		
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
	this._seekMc.setTransform(360.15,782.1);

	this.timeline.addTween(cjs.Tween.get(this._seekMc).wait(1));

	// 图层_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax2BdQgmAAgcgcQgbgbAAgmQAAglAbgbQAcgcAmAAMAjtAAAQAdAAAXAQIAEAEIAJAIIAFAFQAXAaAAAhQAAAigXAaIgFAFIgJAIIgEAEQgXAQgdAAg");
	mask.setTransform(249.225,23.925);

	// 图层_3
	this._color = new lib.元件14();
	this._color.name = "_color";
	this._color.setTransform(123.5,771.25,1,1,0,0,0,-124.5,-10.8);

	var maskedShapeInstanceList = [this._color];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this._color).wait(1));

	// 图层_1
	this._prevbtnShow = new lib.元件13复制();
	this._prevbtnShow.name = "_prevbtnShow";
	this._prevbtnShow.setTransform(224.15,1.7,1.1,1.1);
	new cjs.ButtonHelper(this._prevbtnShow, 0, 1, 2, false, new lib.元件13复制(), 3);

	this._nextbtnShow = new lib.元件12复制();
	this._nextbtnShow.name = "_nextbtnShow";
	this._nextbtnShow.setTransform(360.75,1.7,1.1,1.1);
	new cjs.ButtonHelper(this._nextbtnShow, 0, 1, 2, false, new lib.元件12复制(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqAyQgRAAAAgRIAAhBQAAgRARAAIBVAAQARAAAAARIAABBQAAARgRAAg");
	this.shape.setTransform(355.3192,2.186,1.0998,1.0998);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_1.setTransform(368.0632,2.3744,1.0807,1.2626,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_2.setTransform(368.0632,2.3744,1.0807,1.2626,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#999999").ss(4,1,1).p("Ai8i8QhNBOAABuQAABdA4BHQAKAMALAMQBOBPBvAAQBTAABBgtQAVgOATgUQAMgMAKgMQAHgKAGgKQACgCADgFQAlg9AAhMQAAhuhNhOQg9g9hQgNQgYgEgXAAQhvAAhOBOg");
	this.shape_3.setTransform(360.75,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ai7C8IgWgYQg4hHgBhdQAAhtBPhPQBOhOBuABQAYgBAXAEQBQANA9A9QBNBPAABtQAABMglA+IgEAGIgPAUIgVAYQgTATgVAPQhCAshSABQhuAAhOhPg");
	this.shape_4.setTransform(360.75,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqAyQgRAAAAgRIAAhBQAAgRARAAIBVAAQARAAAAARIAABBQAAARgRAAg");
	this.shape_5.setTransform(228.5692,2.186,1.0998,1.0998);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_6.setTransform(216.9868,2.1572,1.0807,1.2628);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_7.setTransform(216.9868,2.1572,1.0807,1.2628);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#999999").ss(4,1,1).p("ACsirQBHBIAABjQAABVg0BAQgJALgKALQhIBIhkAAQhLAAg7gpQgUgNgRgSQgLgLgJgLQgGgIgGgJQgCgDgDgEQgig3AAhGQAAhjBHhIQA3g3BKgMQAUgDAWAAQBkAABIBGg");
	this.shape_8.setTransform(224.1492,1.7298,1.1,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AiGDKQgUgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBHBHAABkQAABVg0BAIgTAWQhIBHhkAAQhLAAg7gog");
	this.shape_9.setTransform(224.1492,1.7298,1.1,1.1);

	this._seekBarMc = new lib.元件11复制();
	this._seekBarMc.name = "_seekBarMc";
	this._seekBarMc.setTransform(134.65,771.05,1,1,0,0,0,-115,-11);
	new cjs.ButtonHelper(this._seekBarMc, 0, 1, 1);

	this.instance = new lib.元件11();
	this.instance.setTransform(249.45,782.05);

	this._pausebtn = new lib.元件15();
	this._pausebtn.name = "_pausebtn";
	this._pausebtn.setTransform(24.25,781.75);
	new cjs.ButtonHelper(this._pausebtn, 0, 1, 2, false, new lib.元件15(), 3);

	this._prevbtn = new lib.元件13();
	this._prevbtn.name = "_prevbtn";
	this._prevbtn.setTransform(82,781.75);
	new cjs.ButtonHelper(this._prevbtn, 0, 1, 2, false, new lib.元件13(), 3);

	this._nextbtn = new lib.元件12();
	this._nextbtn.name = "_nextbtn";
	this._nextbtn.setTransform(415.75,781.75);
	new cjs.ButtonHelper(this._nextbtn, 0, 1, 2, false, new lib.元件12(), 3);

	this._playbtn = new lib.元件7();
	this._playbtn.name = "_playbtn";
	this._playbtn.setTransform(24.25,781.75);
	new cjs.ButtonHelper(this._playbtn, 0, 1, 2, false, new lib.元件7(), 3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,126,77,0.2)").s().p("Ax6C5Qg9AAgwgkQgLgIgLgLQg2g2AAhMIAAAAQAAhMA2g2QA2g2BNAAMAj1AAAQBMAAA2A2QA3A2AABMIAAAAQAABMg3A2QgKALgLAIQgvAkg+AAgAy0g9QgbAbAAAlQAAAmAbAbQAbAcAnAAMAjtAAAQAcAAAYgQIAEgEIAJgIIAFgFQAXgagBgiQABghgXgaIgFgFIgJgIIgEgEQgYgQgcAAMgjtAAAQgnAAgbAcg");
	this.shape_10.setTransform(249.3,781.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this._playbtn},{t:this._nextbtn},{t:this._prevbtn},{t:this._pausebtn},{t:this.instance},{t:this._seekBarMc},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this._nextbtnShow},{t:this._prevbtnShow}]}).wait(1));

	// 图层_4
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAzhWIABCtIhnhXg");
	this.shape_11.setTransform(412.2091,781.3932,0.9827,1.1474,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_12.setTransform(412.2091,781.3932,0.9827,1.1474,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_13.setTransform(422.6506,781.3932,0.9827,1.1474,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_14.setTransform(422.6506,781.3932,0.9827,1.1474,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#E1E1E1").ss(4,1,1).p("AiqirQhIBHAABkQAABUA0BBQAJALALALQBGBIBlAAQAgAAAegIQAngKAigXQASgNASgSQALgLAIgLQAHgJAGgIQACgDADgEQAig3AAhGQAAhkhHhHQgwgwg9gPQgKgCgJgCQgVgEgWAAQhlAAhGBHg");
	this.shape_15.setTransform(415.75,781.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E1E1E1").s().p("AiqCrIgUgWQg0hAAAhVQABhkBHhHQBGhGBkAAQAXAAAVADIATAEQA9APAwAwQBHBHAABkQAABGgjA3IgEAGIgNASIgTAWQgSARgTAOQghAXgnAKQgeAIghgBQhjAAhHhHg");
	this.shape_16.setTransform(415.75,781.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAzhWIABCtIhnhXg");
	this.shape_17.setTransform(85.5409,781.6531,0.9827,1.1483);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_18.setTransform(85.5409,781.6531,0.9827,1.1483);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_19.setTransform(75.0994,781.6531,0.9827,1.1483);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_20.setTransform(75.0994,781.6531,0.9827,1.1483);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#E1E1E1").ss(4,1,1).p("ACsirQBHBHAABkQAABUg0BBQgJALgKALQhIBIhkAAQhLAAg7gpQgUgNgRgSQgLgLgJgLQgGgJgGgIQgCgDgDgEQgig3AAhGQAAhkBHhHQA3g3BKgMQAUgEAWAAQBkAABIBHg");
	this.shape_21.setTransform(82,781.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E1E1E1").s().p("AiGDKQgUgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBHBHAABkQAABVg0BAIgTAWQhIBHhkAAQhLAAg7gog");
	this.shape_22.setTransform(82,781.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2,-27.1,444,835.2);
p.frameBounds = [rect];


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
	this.shape.setTransform(359.7,57.52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AAhB9IAAhtQAAgRgFgIQgHgIgQABQgPgBgJAGQgKAGgDANIAAB1IgxAAIAAj5IAxAAIAABeQAHgNAOgGQAOgGATAAQAWAAANAHQANAGAGAOQAGANAAASIAAB6g");
	this.shape_1.setTransform(343.8,47.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgaBVQgUgIgKgVQgLgUAAgkQAAgjALgUQAKgUAUgIQATgJAbABQAOAAAMABQAMACAIACIAAApQgJgEgKgBQgJgCgMAAQgPAAgKAEQgJAFgFAMQgFAMAAATQAAAVAFALQAFAMAJAEQAKAFAQAAIAVgCQAKgBAKgEIAAAoIgNADIgRADIgSAAIgDAAQgZAAgSgHg");
	this.shape_2.setTransform(325.075,51.3251);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgGBqQgNgFgFgNQgGgNAAgXIAAhSIgXAAIAAgmIAXAAIAAgqIAvAAIAAAqIAlAAIAAAmIglAAIAABOQgBAPAFAGQAEAFAMAAIAIAAIAHgBIAAAlIgMABIgMAAIgDAAQgTAAgMgFg");
	this.shape_3.setTransform(310.9,49.3271);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgTBbQgZAAgRgMQgQgNgJgYQgDgJgBgLIgCgVIAAgHQABgYAJgTQAKgSATgOQAJgFAJgDQAIgBAJAAIAJAAQAPAAAMAEQAKAGAHAKIAAABIABABIAAAAIAAgFIABgBIAuAAIABAAIAAABIgCA6QAAAmACAYQADAYAEALIABACIABAFIgCABIgtAAIgCgHIgHgSIgBAAQgGANgKAHQgLAGgPAAgAgdgtQgLAKgHAVIgCAKIAAAGQAAAUAHANQAHANANAFIALACIAKABQAMABAIgFQAJgEAFgKQADgGABgLQACgJAAgNQAAgSgEgNQgGgMgIgGQgEgDgGgBQgFgBgHAAIAAAAQgRAAgLAKg");
	this.shape_4.setTransform(294.25,51.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("ABUBbIAAhsQAAgSgFgIQgHgIgPAAQgOAAgIAGQgJAGgDAOIAAB0IgvAAIAAhsQAAgSgFgIQgHgIgOAAQgOAAgIAGQgIAFgDANIAAB2IgwAAIAAixIAwAAIAAAUQAHgMAMgGQAMgGATAAQAUAAANAHQALAGAGAMQAHgNAOgGQAPgGATAAQAeAAAPAPQAPAQAAAhIAAB1g");
	this.shape_5.setTransform(269.15,51.1742);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("Ag6B0QgQgMgGgUQgGgVABgcQgBgaAGgUQAGgVAQgMQAPgNAdAAQAXAAAMAHQANAHAFAMIAAhfIAvAAIAAD6IgrAAIgEgZQgFAMgMAIQgNAIgXAAQgdAAgPgLgAgXgNQgIAIgDALQgCANAAAQQAAAQACANQADAMAIAHQAIAIAPAAQAQAAAJgHQAJgGAEgNQADgMAAgSQAAgRgEgNQgDgMgJgHQgJgHgQAAQgPAAgIAIg");
	this.shape_6.setTransform(234.0231,47.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AAiBbIAAhsQAAgSgGgIQgHgIgQAAQgOAAgKAGQgJAFgFAOIAAB1IgwAAIAAixIAwAAIAAAVQAIgNAPgGQANgGAUAAQAVAAANAHQANAHAGANQAGANgBAUIAAB5g");
	this.shape_7.setTransform(213.45,51.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgTBbQgZAAgRgMQgQgNgJgYQgDgJgBgLIgCgVIAAgHQABgYAJgTQAKgSATgOQAJgFAJgDQAIgBAJAAIAJAAQAPAAAMAEQAKAGAHAKIAAABIABABIAAAAIAAgFIABgBIAuAAIABAAIAAABIgCA6QAAAmACAYQADAYAEALIABACIABAFIgCABIgtAAIgCgHIgHgSIgBAAQgGANgKAHQgLAGgPAAgAgdgtQgLAKgHAVIgCAKIAAAGQAAAUAHANQAHANANAFIALACIAKABQAMABAIgFQAJgEAFgKQADgGABgLQACgJAAgNQAAgSgEgNQgGgMgIgGQgEgDgGgBQgFgBgHAAIAAAAQgRAAgLAKg");
	this.shape_8.setTransform(192.1,51.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("Ag6B0QgQgMgGgUQgGgVABgcQgBgaAGgUQAGgVAQgMQAPgNAdAAQAXAAAMAHQANAHAFAMIAAhfIAvAAIAAD6IgrAAIgEgZQgFAMgMAIQgNAIgXAAQgdAAgPgLgAgXgNQgIAIgDALQgCANAAAQQAAAQACANQADAMAIAHQAIAIAPAAQAQAAAJgHQAJgGAEgNQADgMAAgSQAAgRgEgNQgDgMgJgHQgJgHgQAAQgPAAgIAIg");
	this.shape_9.setTransform(162.9731,47.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgTBbQgZAAgRgMQgQgNgJgYQgDgJgBgLIgCgVIAAgHQAAgYAKgTQAKgSAUgOQAIgFAJgDQAIgBAJAAIAJAAQAPAAAMAEQAKAGAHAKIAAABIABABIAAAAIABgFIABgBIAtAAIABAAIAAABIgCA6QAAAmACAYQADAYAEALIABACIABAFIgCABIgtAAIgCgHIgGgSIgBAAQgHANgKAHQgLAGgPAAgAgdgtQgMAKgGAVIgCAKIAAAGQAAAUAHANQAHANANAFIAKACIALABQAMABAIgFQAJgEAEgKQAEgGACgLQABgJAAgNQAAgSgEgNQgGgMgIgGQgEgDgGgBQgFgBgHAAIAAAAQgRAAgLAKg");
	this.shape_10.setTransform(142.05,51.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgpBVQgUgIgKgVQgKgUAAgkQAAgjAKgUQAKgUAUgIQAUgJAbABQAeAAARAKQARAKAGARQAGASAAAXIgBANIgBALIhyAHQACATALAJQAMAJAXAAQALAAALgCQAMgCAJgDQAKgCAGgEIAAAmQgJAFgSAEQgSADgYAAIgDAAQgYAAgSgHgAgYgtQgJAJgBAWIBIgGQABgKgDgIQgCgIgHgEQgHgFgOAAQgVAAgJAKg");
	this.shape_11.setTransform(122.8018,51.3251);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AAjByIg1hTIgZAAIAABTIgyAAIAAjkIBOAAQAeAAATAIQAUAGAJARQAJAQAAAaQAAAcgKAQQgKAQgWAHIBABYgAgrgGIAUAAQARABAJgDQALgDAEgHQAFgIAAgPQAAgOgFgGQgEgIgLgCQgJgDgRAAIgUAAg");
	this.shape_12.setTransform(103.625,48.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhwCZIAAkxIBnAAQArAAAZAJQAZAKAKASQAKASgBAcQABAYgKAPQgLAQgYAHIAAACQAbAGANARQAOASAAAdQAAAcgKATQgKAUgZAKQgZALgrAAgAgtBjIAeAAQAXAAANgDQANgDAGgJQAFgIAAgQQAAgOgFgIQgFgJgOgEQgNgEgXABIgeAAgAgtgaIAWAAQAWAAAMgCQAOgDAGgIQAHgIAAgPQAAgQgHgIQgGgIgNgCQgNgCgWAAIgWAAg");
	this.shape_13.setTransform(47.4012,48.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D8075").s().p("AirCsQhHhHAAhlQAAhkBHhIQBHhGBkAAQBlAABHBGQBHBIAABkQAABlhHBHQhHBHhlAAQhkAAhHhHg");
	this.shape_14.setTransform(46.725,47.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 内容
	this._showbar = new lib.元件4();
	this._showbar.name = "_showbar";
	this._showbar.setTransform(653,360);

	this.timeline.addTween(cjs.Tween.get(this._showbar).wait(1));

	// csz
	this.pro_bar = new lib.元件3复制();
	this.pro_bar.name = "pro_bar";
	this.pro_bar.setTransform(342.75,654.75);

	this.timeline.addTween(cjs.Tween.get(this.pro_bar).wait(1));

	// diban
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.8)").s().p("EhkVAEsIAApXMDIrAAAIAAJXg");
	this.shape_15.setTransform(639.9,690.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(148.8,369.1,1773.4,1453.7);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: 'E637B31863A9224E9952B4D82164A654',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1736388786328", id:"index_atlas_1"}
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