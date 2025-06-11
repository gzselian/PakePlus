(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,379,228]]}
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



(lib.位图3 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
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
	this.shape_1.graphics.f().s("#F69602").ss(4,1,1).p("AC+i+QBPBQAABuQAABfg5BIQgKAMgMAMQhPBPhvAAQhvAAhPhPQgLgMgKgMQgIgKgHgLQgCgDgDgEQgmg+AAhNQAAhuBPhQQBPhOBvAAQBvAABPBOg");
	this.shape_1.setTransform(0.0124,0.011,0.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F69602").s().p("Ai+C/IgVgZIgOgUIgGgHQgmg+ABhNQgBhvBPhPQBPhPBvABQBvgBBQBPQBPBPAABvQAABfg6BHQgKANgLAMQhQBPhvAAQhvAAhPhPg");
	this.shape_2.setTransform(0.0124,0.011,0.9,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F69602").ss(1,1,1).p("ACHAAQAAAFgCAFQgCAFgFAEQgCADgCACIjZB9QgFACgFAAQgMAAgIgIQgHgHgBgIIgBj8QABgHAEgHQABgCADgDQAIgHAMAAQAFAAAFACIDcB/QABABAAAAQAFAFACAFQACAFAAAFg");
	this.shape_3.setTransform(3.9002,-0.1596,0.7981,0.7981);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F69602").s().p("Ah9CPQgHgHgBgIIgBj7QABgIAEgHIAEgEQAIgIAMAAQAFAAAFACIDcB/IABACQAFAEACAFQACAFAAAFQAAAGgCAEQgCAFgFAEIgEAFIjZB9QgFACgFAAQgMAAgIgIg");
	this.shape_4.setTransform(3.9002,-0.1596,0.7981,0.7981);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai+C/IgVgZIgOgUIgGgHQgmg+ABhNQgBhvBPhPQBPhPBvABQBvgBBQBPQBPBPAABvQAABfg6BHQgKANgLAMQhQBPhvAAQhvAAhPhPg");
	this.shape_5.setTransform(0.0124,0.011,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_1},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.2,-26.2,52.5,52.5);
p.frameBounds = [rect, rect, rect, rect];


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
	this.shape.graphics.f("#0F8EEB").s().p("Ax2BdQgmAAgcgcQgbgbAAgmQAAglAbgbQAcgcAmAAMAjtAAAQAdAAAXAQIAEAEIAJAIIAFAFQAXAaAAAhQAAAigXAaIgFAFIgJAIIgEAEQgXAQgdAAg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件14复制, rect = new cjs.Rectangle(-123.5,-9.2,247.2,18.6), [rect]);


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
	this.shape_4.graphics.f().s("#0F8EEB").ss(4,1,1).p("ACsirQBHBIAABjQAABVg0BAQgJALgKALQhIBIhkAAQhLAAg7gpQgUgNgRgSQgLgLgJgLQgGgIgGgJQgCgDgDgEQgig3AAhGQAAhjBHhIQA3g3BKgMQAUgDAWAAQBkAABIBGg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0F8EEB").s().p("AiGDKQgUgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBHBHAABkQAABVg0BAIgTAWQhIBHhkAAQhLAAg7gog");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0F8EEB").ss(5,1,1).p("AA/hjIABDHIh+hkg");
	this.shape_6.setTransform(-6.9,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0F8EEB").s().p("Ag+AAIB9hjIAADHg");
	this.shape_7.setTransform(-6.9,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0F8EEB").ss(5,1,1).p("AAyhjIABDHIhlhkg");
	this.shape_8.setTransform(3.55,0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0F8EEB").s().p("AgyAAIBlhjIAADHg");
	this.shape_9.setTransform(3.55,0.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0F8EEB").ss(4,1,1).p("ACsirQBHBHAABkQAABUg0BBQgJALgKALQhIBIhkAAQhLAAg7gpQgUgNgRgSQgLgLgJgLQgGgJgGgIQgCgDgDgEQgig3AAhGQAAhkBHhHQA3g3BKgMQAUgEAWAAQBkAABIBHg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiGDKQgUgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBHBHAABkQAABVg0BAIgTAWQhIBHhkAAQhLAAg7gogABWBlIAAjIIhbBbIAAhbIh+BkIB+BkIAAhbIBbBbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

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
	this.shape_4.graphics.f().s("#0F8EEB").ss(4,1,1).p("AirirQhHBHAABkQAABVA0BAQAJALAKALQBHBIBlAAQBLAAA8gpQATgNARgSQALgLAJgLQAGgIAGgJQACgDADgEQAig3AAhGQAAhkhHhHQg3g3hJgMQgVgEgWAAQhlAAhHBHg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0F8EEB").s().p("AirCrIgTgWQgzhAAAhVQAAhkBGhHQBIhGBkAAQAVAAAVADQBKAMA3A3QBGBHAABkQAABGghA3IgFAGIgMASIgUAWQgRARgTAOQg8AohLAAQhkAAhIhHg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0F8EEB").ss(5,1,1).p("AgyhjIAADHIBlhjg");
	this.shape_6.setTransform(-3.55,0.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0F8EEB").s().p("AgxhjIBkBjIhlBkg");
	this.shape_7.setTransform(-3.55,0.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0F8EEB").ss(5,1,1).p("Ag+hjIAADHIB+hjg");
	this.shape_8.setTransform(6.9,0.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0F8EEB").s().p("Ag+hjIB+BjIh+Bkg");
	this.shape_9.setTransform(6.9,0.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0F8EEB").ss(4,1,1).p("AiqirQhIBHAABkQAABUA0BBQAJALALALQBGBIBlAAQBLAAA8gpQASgNASgSQALgLAIgLQAHgJAGgIQACgDADgEQAig3AAhGQAAhkhHhHQg4g3hIgMQgVgEgWAAQhlAAhGBHg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiqCrIgUgWQg0hAAAhVQABhkBHhHQBHhGBjAAQAXAAAVADQBIAMA4A3QBHBHAABkQAABGgjA3IgEAGIgNASIgTAWQgSARgTAOQg7AohMAAQhkAAhGhHgAAGBlIB/hkIh/hkIAABcIhbhcIgBDIIBchag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{y:0.2241}},{t:this.shape_2,p:{y:0.2241}},{t:this.shape_1,p:{y:0.2241}},{t:this.shape,p:{y:0.2241}}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{y:0.2548}},{t:this.shape_2,p:{y:0.2548}},{t:this.shape_1,p:{y:0.2548}},{t:this.shape,p:{y:0.2548}}]},1).wait(2));

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
	this.shape.graphics.f("#0F8EEB").s().p("AhGBGQgegdABgpQgBgqAegdQAegdAoAAQAqAAAdAdQAeAdgBAqQABApgeAdQgdAfgqgBQgoABgegfg");
	this.shape.setTransform(0.1151,0.0705,1.089,1.089);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhwBwQguguAAhCQAAhBAugvQAvguBBAAQBCAAAuAuQAvAvAABBQAABCgvAuQguAvhCAAQhBAAgvgvg");
	this.shape_1.setTransform(0.0107,-0.0066,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件8, rect = new cjs.Rectangle(-14.3,-14.3,28.6,28.6), [rect]);


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
	this.shape_1.graphics.f().s("#F69602").ss(4,1,1).p("ACsirQBHBIAABjQAABVg0BBQgJALgKALQhIBHhkAAQhjAAhIhHQgKgLgIgLQgIgJgGgJQgCgDgCgEQgjg3AAhGQAAhjBHhIQBIhHBjAAQBkAABIBHg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F69602").s().p("AirCsIgSgWIgOgTIgEgGQgig3gBhGQABhjBGhIQBIhGBjAAQBkAABHBGQBHBIABBjQgBBVgzBBIgUAWQhHBGhkAAQhjAAhIhGg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F69602").ss(6,1,1).p("ABChxIAADjAhBhxIAADj");
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
	this.shape.graphics.f("#FF0000").s().p("EgscADhIAAnBMBY5AAAIAAHBg");
	this.shape.setTransform(284.475,22.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(0,0,569,45)];


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

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F99703").ss(2,1,1).p("AgcAAIA5AA");
	this.shape.setTransform(11.9894,6.1917,0.5756,0.5756);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAjAAQAAAPgKAKQgKAKgPAAQgNAAgLgKQgKgKAAgPQAAgNAKgLQALgKANAAQAPAAAKAKQAKALAAANg");
	this.shape_1.setTransform(11.9015,6.3387,0.5756,0.5756);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAYQgKgJAAgPQAAgOAKgKQAKgKAOAAQAPAAAJAKQALAKAAAOQAAAPgLAJQgJALgPAAQgOAAgKgLg");
	this.shape_2.setTransform(11.9015,6.3387,0.5756,0.5756);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah0CDQgOgHAAgMQAAgLAOgIQAOgJASgBQALAAAKACIAAioQAAgIAGgEQADgDAFgBIChglIABAAQAQgDACANIAADEQAAALgOAJQgNAIgTABQgTABgNgHQgOgHAAgMQAAgLAOgIQANgJATgBQAMAAAKACIAAhpIiRAgIAACJQgCAJgMAHQgNAJgTABIgEAAQgQAAgMgGg");
	this.shape_3.setTransform(-3.7795,-0.075,0.8997,0.8997);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F99703").ss(5,1,1).p("AjJDJQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQAMAMAKAMQAFAGAEAGQA1BIAABdQAAB2hUBTQhTBUh2AAQh1AAhUhUg");
	this.shape_4.setTransform(-0.0863,-0.0019,0.8997,0.8997);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F99703").s().p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTIAWAXIAJANQA1BIAABdQAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_5.setTransform(-0.0863,-0.0019,0.8997,0.8997);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E18803").ss(5,1,1).p("AjJDJQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQAMAMAKAMQAFAGAEAGQA1BIAABdQAAB2hUBTQhTBUh2AAQh1AAhUhUg");
	this.shape_6.setTransform(-0.009,0.0115,0.8998,0.8998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E18904").s().p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTIAWAXIAJANQA1BIAABdQAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_7.setTransform(-0.009,0.0115,0.8998,0.8998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{scaleX:0.8997,scaleY:0.8997,x:-0.0863,y:-0.0019}},{t:this.shape_4,p:{scaleX:0.8997,scaleY:0.8997,x:-0.0863,y:-0.0019}},{t:this.shape_3,p:{scaleX:0.8997,scaleY:0.8997,x:-3.7795,y:-0.075}},{t:this.shape_2,p:{scaleX:0.5756,scaleY:0.5756,x:11.9015,y:6.3387}},{t:this.shape_1,p:{scaleX:0.5756,scaleY:0.5756,x:11.9015,y:6.3387}},{t:this.shape,p:{scaleX:0.5756,scaleY:0.5756,x:11.9894,y:6.1917}}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_3,p:{scaleX:0.8998,scaleY:0.8998,x:-3.8878,y:-0.0616}},{t:this.shape_2,p:{scaleX:0.5758,scaleY:0.5758,x:12.0923,y:6.3656}},{t:this.shape_1,p:{scaleX:0.5758,scaleY:0.5758,x:12.0923,y:6.3656}},{t:this.shape,p:{scaleX:0.5758,scaleY:0.5758,x:12.1319,y:6.2169}}]},1).to({state:[{t:this.shape_5,p:{scaleX:0.8996,scaleY:0.8996,x:-0.1034,y:-0.0049}},{t:this.shape_4,p:{scaleX:0.8996,scaleY:0.8996,x:-0.1034,y:-0.0049}},{t:this.shape_3,p:{scaleX:0.8996,scaleY:0.8996,x:-3.811,y:-0.078}},{t:this.shape_2,p:{scaleX:0.5756,scaleY:0.5756,x:11.8702,y:6.3327}},{t:this.shape_1,p:{scaleX:0.5756,scaleY:0.5756,x:11.8702,y:6.3327}},{t:this.shape,p:{scaleX:0.5756,scaleY:0.5756,x:11.9577,y:6.1861}}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.2,-28.1,56.4,56.3);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-28.2,-28.1,56.3,56.3), rect];


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

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F99703").s().p("Ah0CDQgOgHAAgMQAAgLAOgIQAOgJASgBQALAAAKACIAAioQAAgIAGgEQADgDAFgBIChglIABAAQAQgDACANIAADEQAAALgOAJQgNAIgTABQgTABgNgHQgOgHAAgMQAAgLAOgIQANgJATgBQAMAAAKACIAAhpIiRAgIAACJQgCAJgMAHQgNAJgTABIgEAAQgQAAgMgGg");
	this.shape.setTransform(-0.9933,-0.0526,0.8999,0.8999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F99703").ss(5,1,1).p("AjJDJQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQAMAMAKAMQAFAGAEAGQA1BIAABdQAAB2hUBTQhTBUh2AAQh1AAhUhUg");
	this.shape_1.setTransform(0.0082,0.0145,0.8998,0.8998);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTIAWAXIAJANQA1BIAABdQAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_2.setTransform(0.0082,0.0145,0.8998,0.8998);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D38104").s().p("Ah0CDQgOgHAAgMQAAgLAOgIQAOgJASgBQALAAAKACIAAioQAAgIAGgEQADgDAFgBIChglIABAAQAQgDACANIAADEQAAALgOAJQgNAIgTABQgTABgNgHQgOgHAAgMQAAgLAOgIQANgJATgBQAMAAAKACIAAhpIiRAgIAACJQgCAJgMAHQgNAJgTABIgEAAQgQAAgMgGg");
	this.shape_3.setTransform(-0.9933,-0.0526,0.8999,0.8999);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBD191").s().p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTIAWAXIAJANQA1BIAABdQAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_4.setTransform(0.0082,0.0145,0.8998,0.8998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.1,-28.1,56.4,56.3);
p.frameBounds = [rect, rect, rect, rect];


(lib.元件1_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("EgscADhIAAnBMBY5AAAIAAHBg");
	this.shape_1.setTransform(284.475,22.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(0,0,569,45)];


(lib.元件18复制 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.元件1();
	this.instance.setTransform(361.6,16.5,0.5097,1,0,0,0,288.4,22.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.元件1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("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");
	this.shape.setTransform(384.475,18.4231);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AwEBzQgUgJgKgWQgKgVAAgmQAAgkAKgWQAKgVATgJQAUgJAbAAQAYAAAPAHQAPAIAIALQAIAMADANQACAOAAANIAAAKIgBAMIiBAJQAAAUAGANQAGAOANAGQANAHAXAAQAQAAAQgEQAQgDALgGIAAAcIgPAFIgXAFQgMABgOAAIgDAAQgZAAgTgIgAv3gnQgMAHgFAOQgEAOgBASIBlgHQAAgOgDgMQgDgNgKgHQgKgIgUAAQgWAAgLAIgAVQB4QgFgBgCgFQgCgFAAgKQgBgNAGgFQAFgEAMABQAMgBAFAEQAGAFgBANQABAKgDAFQgCAFgFABQgFACgIAAQgIAAgFgCgAysB4IgxizIgCAAIgzCzIgnAAIg5jyIAhAAIAtDNIACAAIAyixIAlAAIAyCxIACAAIAtjNIAgAAIg6Dyg");
	this.shape_1.setTransform(357.0292,16.3263);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("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");
	this.shape_2.setTransform(357.0292,18.4231);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(214.6,-6,290,45);
p.frameBounds = [rect, rect];


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
	this.shape.graphics.f("rgba(127,186,243,0.6)").s().p("Ax2BdQgmAAgcgcQgbgbAAgmQAAglAbgbQAcgcAmAAMAjtAAAQAdAAAXAQIAEAEIAJAIIAFAFQAXAaAAAhQAAAigXAaIgFAFIgJAIIgEAEQgXAQgdAAg");
	this.shape.setTransform(-0.025,0.025);

	this.instance = new lib.元件16();
	this.instance.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件11复制, rect = new cjs.Rectangle(-123.6,-9.2,247.2,18.6), [rect]);


(lib.元件18复制3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.元件1_1();
	this.instance.setTransform(-91.65,44.5,0.9385,1,0,0,0,287.4,22.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.元件1_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AHRB+QgUgJgKgVQgKgWAAglQAAglAKgVQAKgWATgJQAUgJAbABQAYAAAPAHQAPAHAIALQAIAMADAOQACANAAAOIAAAKIgBAMIiBAIQAAAVAGANQAGANANAHQANAGAXAAQAQAAAQgDQAQgEALgFIAAAcIgPAFIgXAEQgMACgOAAIgDAAQgZAAgTgJgAHegcQgMAHgFAOQgEANgBAUIBlgIQAAgPgDgLQgDgMgKgIQgKgHgUAAQgWAAgLAHgACCB+QgUgJgKgVQgKgWAAglQAAglAKgVQAKgWATgJQAUgJAbABQAYAAAPAHQAPAHAIALQAIAMADAOQACANAAAOIAAAKIgBAMIiBAIQAAAVAGANQAGANANAHQANAGAXAAQAQAAAQgDQAQgEALgFIAAAcIgPAFIgXAEQgMACgOAAIgDAAQgZAAgTgJgACPgcQgMAHgFAOQgEANgBAUIBlgIQAAgPgDgLQgDgMgKgIQgKgHgUAAQgWAAgLAHgAjPCBQgMgFgGgNQgGgNABgZIAAhoIgcAAIAAgaIAcAAIAAgtIAeAAIAAAtIAuAAIAAAaIguAAIAABnQgBAOADAIQACAIAGADQAGADALAAIALAAIAKgCIAAAaIgLABIgLAAIgDAAQgTAAgLgEgAnSCEIgUgCQgJgBgGgCIAAgZIARADIATADIATABQAWAAALgGQALgHAAgQQAAgLgDgGQgDgHgKgEQgJgEgSgEQgUgEgMgHQgLgHgFgKQgFgKABgPQAAgXARgOQARgOAiAAQAOAAANACQANABAHADIgCAaQgIgEgMgCQgMgCgNAAQgUAAgKAGQgKAGAAAQQAAAIADAFQADAGAIADQAHADAPAEQAVAEAOAHQANAHAFALQAGALAAASQAAAcgSANQgTANgjAAIgUgBgAEwCDIAAi8IAeAAIAAAjQAGgQAKgIQAJgJAMgCQALgDAMAAIADAAIgBAbIgEAAQgMAAgLADQgMAEgJAJQgJAJgFAQIAAB7gAAJCDIAAh3QAAgOgDgKQgDgKgHgGQgIgFgOAAQgMgBgMADQgLADgJAIQgIAIgGAPIAACAIgeAAIAAkJIAeAAIAABoQAGgMAKgGQAKgHALgDQAMgCAMAAQAXAAAOAIQAOAIAGANQAFAOAAARIAACDgApJCDIAAjyIAfAAIAADyg");
	this.shape.setTransform(-298.075,42.1763);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AVwCHQgcAAgTgJQgUgJgKgVQgLgWAAglQAAglALgVQAKgWAUgJQATgJAcABQAcgBATAJQAUAJAKAWQAKAVABAlQgBAlgKAWQgKAVgUAJQgSAJgaAAIgDAAgAVPgcQgMAGgFAQQgGAPABAcQAAAbAFAQQAFAQAMAHQANAGAUAAQAWAAAMgGQAMgHAFgQQAEgQAAgbQAAgcgEgPQgGgQgMgGQgMgHgVAAQgVAAgMAHgASYCHQgcAAgTgJQgUgJgKgVQgLgWAAglQAAglALgVQAKgWAUgJQATgJAcABQAcgBATAJQAUAJAKAWQAKAVABAlQgBAlgKAWQgKAVgUAJQgSAJgaAAIgDAAgAR3gcQgMAGgFAQQgGAPABAcQAAAbAFAQQAFAQAMAHQANAGAUAAQAWAAAMgGQALgHAGgQQAEgQAAgbQAAgcgEgPQgGgQgMgGQgMgHgVAAQgVAAgMAHgAI8B+QgUgJgJgVQgLgWAAglQAAglALgVQAJgWAUgJQATgJAbABQAYAAAPAHQAPAHAIALQAIAMADAOQACANAAAOIAAAKIgBAMIiAAIQgBAVAHANQAFANANAHQANAGAXAAQAQAAAQgDQAQgEALgFIAAAcIgPAFIgWAEQgNACgOAAIgCAAQgaAAgTgJgAJJgcQgMAHgFAOQgEANAAAUIBkgIQAAgPgDgLQgDgMgKgIQgKgHgUAAQgVAAgMAHgAA6B+QgTgJgLgVQgKgWAAglQAAglAKgVQAKgWAUgJQATgJAbABQAYAAAPAHQAPAHAIALQAIAMADAOQADANgBAOIAAAKIgBAMIiAAIQAAAVAFANQAGANANAHQANAGAXAAQAQAAAQgDQAQgEALgFIAAAcIgPAFIgWAEQgNACgOAAIgCAAQgaAAgTgJgABHgcQgMAHgFAOQgEANAAAUIBkgIQAAgPgDgLQgDgMgKgIQgKgHgUAAQgVAAgMAHgAxgB+QgUgJgKgVQgLgWAAglQAAglALgVQAKgWAUgJQATgJAcABQAQAAAMACIAVAFIAAAbQgKgEgMgCQgMgCgPAAQgUAAgNAGQgMAHgFAQQgFAPAAAbQgBAbAGAQQAFAQAMAGQANAGAVAAQAOAAAMgCQANgCALgEIAAAcIgPADIgRADIgTABIgDAAQgaAAgSgJgA0JCHQgcAAgTgJQgUgJgKgVQgLgWAAglQAAglALg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");
	this.shape_1.setTransform(-30.8,42.1763);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Af3CHQgcAAgUgJQgTgJgKgVQgLgWAAglQAAglALgVQAKgWATgJQAUgJAcABQAcgBATAJQAUAJAKAWQAKAVAAAlQAAAlgKAWQgKAVgUAJQgSAJgaAAIgDAAgAfWgcQgMAGgFAQQgGAPABAcQAAAbAFAQQAFAQAMAHQANAGAUAAQAVAAAMgGQAMgHAFgQQAFgQAAgbQAAgcgFgPQgFgQgMgGQgNgHgUAAQgVAAgMAHgAcfCHQgcAAgUgJQgTgJgKgVQgLgWAAglQAAglALgVQAKgWATgJQAUgJAcABQAcgBATAJQAUAJAKAWQAKAVAAAlQAAAlgKAWQgKAVgUAJQgSAJgaAAIgDAAgAb+gcQgMAGgFAQQgGAPABAcQAAAbAFAQQAFAQAMAHQANAGAUAAQAVAAAMgGQAMgHAFgQQAFgQAAgbQAAgcgFgPQgFgQgMgGQgNgHgUAAQgVAAgMAHgATDB+QgUgJgKgVQgKgWAAglQAAglAKgVQAKgWATgJQAUgJAbABQAYAAAPAHQAPAHAIALQAIAMADAOQACANAAAOIAAAKIgBAMIiBAIQAAAVAGANQAGANANAHQANAGAXAAQAQAAAQgDQAQgEALgFIAAAcIgPAFIgXAEQgMACgOAAIgDAAQgZAAgTgJgATQgcQgMAHgFAOQgEANgBAUIBlgIQAAgPgDgLQgDgMgKgIQgKgHgUAAQgWAAgLAHgALBB+QgUgJgKgVQgKgWAAglQAAglAKgVQAKgWATgJQAUgJAbABQAYAAAPAHQAPAHAIALQAIAMADAOQACANAAAOIAAAKIgBAMIiBAIQAAAVAGANQAGANANAHQANAGAXAAQAQAAAQgDQAQgEALgFIAAAcIgPAFIgXAEQgMACgOAAIgDAAQgZAAgTgJgALOgcQgMAHgFAOQgEANgBAUIBlgIQAAgPgDgLQgDgMgKgIQgKgHgUAAQgWAAgLAHgAnaB+QgTgJgKgVQgLgWAAglQAAglALgVQAKgWATgJQAUgJAcABQAQAAAMACIAVAFIAAAbQgKgEgMgCQgMgCgPAAQgUAAgNAGQgMAHgFAQQgFAPAAAbQgBAbAGAQQAFAQAMAGQANAGAVAAQANAAANgCQANgCAKgEIAAAcIgOADIgRADIgTABIgDAAQgaAAgTgJgAqCCHQgcAAgUgJQgTgJgKgVQgLgWAAglQAAglALg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");
	this.shape_2.setTransform(-95.475,42.1763);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-361.3,22,534,45);
p.frameBounds = [rect, rect];


(lib.元件18复制2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.元件1_1();
	this.instance.setTransform(-73.85,45.5,0.9983,1,0,0,0,287.4,22.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.元件1_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ACfB+QgUgJgKgVQgKgWAAglQAAglAKgVQAKgWATgJQAUgJAbABQAYAAAPAHQAPAHAIALQAIAMADAOQACANAAAOIAAAKIgBAMIiBAIQAAAVAGANQAGANANAHQANAGAXAAQAQAAAQgDQAQgEALgFIAAAcIgPAFIgXAEQgMACgOAAIgDAAQgZAAgTgJgACsgcQgMAHgFAOQgEANgBAUIBlgIQAAgPgDgLQgDgMgKgIQgKgHgUAAQgWAAgLAHgAivB+QgUgJgKgVQgKgWAAglQAAglAKgVQAKgWATgJQAUgJAbABQAYAAAPAHQAPAHAIALQAIAMADAOQACANAAAOIAAAKIgBAMIiBAIQAAAVAGANQAGANANAHQANAGAXAAQAQAAAQgDQAQgEALgFIAAAcIgPAFIgXAEQgMACgOAAIgDAAQgZAAgTgJgAiigcQgMAHgFAOQgEANgBAUIBlgIQAAgPgDgLQgDgMgKgIQgKgHgUAAQgWAAgLAHgAIcCEIgUgCQgJgBgGgCIAAgZIARADIATADIATABQAWAAALgGQALgHAAgQQAAgLgDgGQgDgHgKgEQgJgEgSgEQgUgEgMgHQgLgHgFgKQgFgKABgPQAAgXARgOQARgOAiAAQAOAAANACQANABAHADIgCAaQgIgEgMgCQgMgCgNAAQgUAAgKAGQgKAGAAAQQAAAIADAFQADAGAIADQAHADAPAEQAVAEAOAHQANAHAFALQAGALAAASQAAAcgSANQgTANgjAAIgUgBgAGnCDIAAi8IAeAAIAAC8gAgBCDIAAi8IAdAAIAAAjQAGgQAKgIQAJgJAMgCQALgDAMAAIADAAIgBAbIgEAAQgMAAgLADQgMAEgJAJQgJAJgFAQIAAB7gAkoCDIAAh3QAAgOgDgKQgDgKgIgGQgIgFgOAAQgMgBgMADQgLADgJAIQgIAIgGAPIAACAIgeAAIAAkJIAeAAIAABoQAGgMAKgGQAKgHALgDQAMgCAMAAQAYAAAOAIQAOAIAGANQAFAOAAARIAACDgAowCDIAAjWIhHAAIAAgcICtAAIAAAcIhHAAIAADWgAGohfQgEgDAAgLQAAgMAEgDQAEgEAKABQAJgBAFAEQAEADAAAMQAAALgEADQgFAEgJAAQgKAAgEgEg");
	this.shape.setTransform(-296.125,42.1763);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("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");
	this.shape_1.setTransform(-12.1208,45.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("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");
	this.shape_2.setTransform(-81.3708,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-360.7,23,568,45);
p.frameBounds = [rect, rect];


(lib.元件18复制_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.元件1_1();
	this.instance_1.setTransform(-71.95,16.5,1.0106,1,0,0,0,288.4,22.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.元件1_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	// 图层_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AS5CHQgcAAgTgJQgUgJgKgVQgLgWAAglQAAglALgVQAKgWAUgJQATgJAcABQAcgBATAJQAUAJAKAWQAKAVABAlQgBAlgKAWQgKAVgUAJQgSAJgaAAIgDAAgASYgcQgMAGgFAQQgFAPAAAcQAAAbAFAQQAGAQALAHQANAGAUAAQAVAAANgGQALgHAGgQQAEgQAAgbQAAgcgEgPQgGgQgMgGQgNgHgUAAQgVAAgMAHgAgXCHQgbAAgUgJQgUgJgJgVQgLgWAAglQAAglALgVQAJgWAUgJQAUgJAbABQAbgBAUAJQATAJALAWQAJAVABAlQgBAlgJAWQgLAVgTAJQgSAJgaAAIgDAAgAg4gcQgLAGgFAQQgGAPAAAcQAAAbAGAQQAFAQAMAHQANAGATAAQAWAAALgGQAMgHAFgQQAFgQAAgbQAAgcgFgPQgFgQgMgGQgMgHgVAAQgUAAgNAHgAOiB6QgRgMgGgWQgHgWABgdQgBgbAHgVQAGgWARgNQARgOAfAAQAcAAAOAKQAOAJAGARIAAhuIAeAAIAAEJIgZAAIgFgfQgGAPgPAKQgPAJgaABQgfgBgRgMgAO1gYQgKAKgDAQQgEAQAAATQAAAUAEAQQAEAQAKAKQALAKAWAAQAXAAANgJQAMgIAFgQQAGgRgBgWQABgWgGgPQgFgRgMgJQgNgJgXAAQgWAAgMALgAktB6QgRgMgGgWQgIgWABgdQgBgbAIgVQAGgWARgNQARgOAfAAQAcAAAOAKQAOAJAFARIAAhuIAfAAIAAEJIgZAAIgGgfQgFAPgPAKQgPAJgaABQgfgBgRgMgAkagYQgLAKgDAQQgDAQAAATQAAAUAEAQQADAQALAKQAKAKAWAAQAXAAANgJQANgIAFgQQAFgRgBgWQABgWgFgPQgFgRgNgJQgNgJgXAAQgWAAgLALgAqtCHQgcAAgTgPQgTgPgJgdIgCgPIgBgOIAAgLQgBgdAMgVQAMgWAYgPQAKgEAJgCQAJgCAJAAIADAAQAgAAAVAhIAAgIIABgBIABAAIAcAAIABAAIABABIAABjIAAAjIAGAgIgDABIgcAAQgBAAgBgIIgDgWIgHAJIgHAJQgJAHgKADQgKAEgNAAgArEgWQgOAKgJAUIgDAOQgCAHABAHIAAAIQgBATAIAPQAHAPAOALQAGADAGABQAHACAGAAIAHAAQA2AAAAhCIAAgMQAAgcgKgPQgKgQgSgFIgGgBIgGAAIAAAAQgWAAgPALgAn3CBQgNgFgFgNQgGgNAAgZIAAhoIgcAAIAAgaIAcAAIAAgtIAeAAIAAAtIAvAAIAAAaIgvAAIAABnQAAAOADAIQABAIAHADQAGADAKAAIAMAAIAKgCIAAAaIgLABIgLAAIgEAAQgSAAgLgEgAtCCDIAAh3QAAgOgDgKQgDgKgIgGQgIgFgOAAQgMgBgMADQgLADgJAIQgJAIgFAPIAACAIgeAAIAAkJIAeAAIAABoQAGgMAJgGQAKgHAMgDQALgCAMAAQAZAAAOAIQANAIAHANQAFAOAAARIAACDgAxJCDIgxizIgDAAIgyCzIgoAAIg4jyIAgAAIAuDOIACAAIAxixIAmAAIAyCxIABAAIAujOIAgAAIg6Dyg");
	this.shape_3.setTransform(-233.35,15.1763);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("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");
	this.shape_4.setTransform(-6.875,18.4231);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("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");
	this.shape_5.setTransform(-80.6,18.4231);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-363.3,-6,575,45);
p.frameBounds = [rect, rect];


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

	// 图层_2
	this.instance = new lib.元件1_1();
	this.instance.setTransform(-48.25,17.5,1.116,1,0,0,0,285.1,22.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.元件1_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AV3CnIgWgEIAAgZIAXADIAYABQAfAAAPgOQAPgOAAghIAAgSQgFAQgOAKQgPAJgbAAQgfAAgRgMQgRgMgHgVQgHgWABgdQgBgZAHgWQAHgWARgNQARgNAfAAQATAAAMAEQANAFAHAKQAHAIADAMIAAgkIAeAAIAACuQABAogXAWQgWAVgwABQgMAAgMgBgAVzg6QgLAKgDAQQgDAQAAASQAAAUADAPQAEAQALAKQAKAJAWABQAXAAANgJQAMgIAFgQQAGgQgBgWQABgVgGgQQgFgQgMgJQgNgIgXgBQgWABgLAKgAJpBlQgcABgUgJQgTgJgKgVQgLgWAAgmQAAgkALgVQAKgWATgJQAUgJAcABQAcgBATAJQAUAJAKAWQAKAVAAAkQAAAmgKAWQgKAVgUAJQgSAJgaAAIgDgBgAJIg+QgMAHgFAQQgGAQABAaQAAAcAFAQQAFAQAMAHQANAGAUAAQAVAAAMgGQAMgHAFgQQAFgQAAgcQAAgagFgQQgFgQgMgHQgNgGgUgBQgVABgMAGgACQBdQgTgJgKgVQgLgWAAgmQAAgkALgVQAKgWATgJQATgJAbABQAYAAAPAGQAPAIAIALQAIAMADANQADAOAAAOIgBAKIgBAMIiAAIQAAAUAGANQAFAOANAHQAOAGAWAAQAQAAAQgEQAQgDAMgFIAAAbIgQAGIgWAEQgNABgNAAIgDABQgaAAgTgJgACdg9QgMAHgEAOQgFAOAAATIBkgHQAAgPgDgMQgDgNgKgHQgKgIgUAAQgVAAgMAIgAyqBlQgbABgUgJQgUgJgKgVQgKgWAAgmQAAgkAKgVQAKgWAUgJQAUgJAbABQAcgBAUAJQATAJAKAWQAKAVABAkQgBAmgKAWQgKAVgTAJQgTAJgaAAIgDgBgAzLg+QgMAHgFAQQgFAQAAAaQAAAcAFAQQAGAQAMAHQAMAGAUAAQAWAAAMgGQAMgHAFgQQAFgQAAgcQAAgagFgQQgGgQgMgHQgMgGgVgBQgVABgMAGgAj4BaQgLgJAAgVIAAjjIAeAAIAADbQAAAOAEAFQAEAEAKAAIAHgBIAHgBIAAAZIgJABIgLABQgVAAgKgKgA2kBiIhGAAIAAjyIBGAAQAaAAAWAFQAVAFAQANQAPANAJAYQAIAYAAAlQAAAugPAbQgOAagbAMQgZAKghAAIgDAAgA3LBHIAmAAQAaAAATgIQATgJALgUQALgVAAgkQgBgmgLgUQgLgVgTgHQgTgIgZAAIgmAAgATwBiIAAh2QAAgPgCgKQgDgLgIgFQgIgGgPABQgMgBgLADQgLADgJAIQgJAIgFAQIAAB/IgeAAIAAi8IAeAAIAAAbQAGgMAJgGQAKgHAMgDQALgCAMAAQAZAAAOAHQANAIAGAOQAGAOAAASIAACCgAQXBiIAAi8IAeAAIAAC8gAOVBiIgviaIgCAAIgvCaIglAAIg0i8IAfAAIAoCeIACAAIAuieIAkAAIAwCeIADAAIAoieIAdAAIg0C8gAGYBiIAAi8IAeAAIAAAjQAGgQAKgJQAKgIALgCQAMgDALAAIAEAAIgBAbIgEAAQgNAAgLADQgLAEgJAIQgJAKgGAQIAAB7gAArBiIhEhYIgKAAIAABYIgeAAIAAkJIAeAAIAACbIALAAIBBhOIAlAAIhPBYIBTBkgAifBiIAAi8IAeAAIAAC8gAQYiAQgEgDAAgMQAAgLAEgEQAEgDAKAAQAJAAAFADQAEAEAAALQAAAMgEADQgFADgJAAQgKAAgEgDgAieiAQgEgDAAgMQAAgLAEgEQAFgDAJAAQAKAAAEADQAEAEAAALQAAAMgEADQgEADgKAAQgJAAgFgDg");
	this.shape.setTransform(-209.1745,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("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");
	this.shape_1.setTransform(-22.85,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("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");
	this.shape_2.setTransform(-48.95,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-366.4,-15.3,635,58.3);
p.frameBounds = [rect, new cjs.Rectangle(-366.4,-5,635,45)];


(lib.元件17复制 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_3
	this.instance = new lib.元件1_1();
	this.instance.setTransform(557.25,26.5,0.6767,1,0,0,0,286.4,22.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.元件1_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ag7CEIBckHIAbAAIhcEHg");
	this.shape.setTransform(537.85,26.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("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");
	this.shape_1.setTransform(552.6542,27.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("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");
	this.shape_2.setTransform(552.6542,27.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(363.5,4,385,45);
p.frameBounds = [rect, rect];


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

	// 图层_2
	this.instance = new lib.元件1_1();
	this.instance.setTransform(46.45,0.55,1,1,0,0,0,284.4,22.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.元件1_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AlkCXIgWgEIAAgZIAXADIAYABQAfABAPgPQAPgOAAghIAAgTQgFARgOAJQgPAKgbAAQgfAAgRgMQgRgMgHgWQgHgVABgcQgBgaAHgXQAHgVARgNQARgNAfAAQATAAAMAEQANAGAHAJQAHAIADALIAAgjIAeAAIAACvQABAngXAWQgWAWgwAAQgMAAgMgBgAlohKQgLAKgDAQQgDAQAAATQAAATADAPQAEARALAJQAKAJAWABQAXAAANgJQAMgIAFgQQAGgPgBgWQABgWgGgQQgFgQgMgIQgNgJgXAAQgWAAgLAKgAFDBWQgbAAgUgJQgUgJgKgWQgKgVAAgkQAAgmAKgWQAKgVAUgJQAUgJAbABQAcgBAUAJQATAJAKAVQAKAWABAmQgBAkgKAVQgKAWgTAJQgTAJgaAAIgDAAgAEihOQgMAHgFAQQgFAQAAAcQAAAaAFAQQAGAQAMAHQAMAGAUAAQAWAAAMgGQAMgHAFgQQAFgQAAgaQAAgcgFgQQgGgQgMgHQgMgGgVAAQgVAAgMAGgAhkBWQgbAAgUgJQgUgJgKgWQgKgVAAgkQAAgmAKgWQAKgVAUgJQAUgJAbABQAcgBAUAJQATAJAKAVQAKAWABAmQgBAkgKAVQgKAWgTAJQgTAJgaAAIgDAAgAiFhOQgMAHgFAQQgFAQAAAcQAAAaAFAQQAGAQAMAHQAMAGAUAAQAWAAAMgGQAMgHAFgQQAFgQAAgaQAAgcgFgQQgGgQgMgHQgMgGgVAAQgVAAgMAGgACaBQQgMgFgGgNQgGgNABgZIAAhpIgcAAIAAgZIAcAAIAAgtIAeAAIAAAtIAuAAIAAAZIguAAIAABoQgBAOADAIQACAIAGADQAGADALAAIALAAIAKgCIAAAZIgLABIgLABIgEAAQgSAAgLgEg");
	this.shape.setTransform(-176.3517,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("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");
	this.shape_1.setTransform(42.9292,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("EAnuACOQARAAAKgEQALgGAHgJQAGgKAFgQIhMi7IAhAAIA6CcIACAAIA2icIAfAAIhEC1QgJAZgKAQQgKARgRAKQgQAJgcAAgAv0CoIAAkCIAeAAIAAAiQAFgRAPgKQAOgKAbAAQAfAAARAMQARAMAHAWQAGAXAAAcQAAAagGAWQgHAWgRANQgRAOgfABQgbgBgPgKQgOgJgFgRIAABngAvAg7QgNAIgGAQQgFARAAAWQAAAVAFARQAGAQANAJQAMAJAXAAQAWgBALgJQALgLADgQQAEgRgBgSQABgUgEgQQgEgQgKgKQgLgKgWAAQgXAAgMAJgEgn1ACnIgWgEIAAgZIAXADIAYABQAfABAPgPQAPgOAAghIAAgTQgFARgOAJQgPAKgbAAQgfAAgRgMQgRgMgHgWQgHgVABgdQgBgZAHgXQAHgVARgNQARgNAfAAQATAAAMAEQANAGAHAJQAHAIADALIAAgjIAeAAIAACvQABAngXAWQgWAWgwAAQgMAAgMgBgEgn5gA6QgLAKgDAQQgDAQAAASQAAAUADAPQAEARALAJQAKAJAWABQAXAAANgJQAMgIAFgQQAGgPgBgXQABgVgGgQQgFgQgMgIQgNgJgXAAQgWAAgLAKgAGWBhQgUgGgOgOQgPgOgIgYQgHgZgBgkQABgvAOgcQANgbAagMQAZgMAkABQAQAAANABQAMACALAEIAAAdQgKgFgNgCQgNgBgQAAQgbgBgTAJQgSAKgJAUQgJAWAAAkQAAAmAJAUQAIAWASAIQARAJAbgBQARAAAOgCQANgDAOgFIAAAcQgLAEgPADQgOADgTABIgEAAQgXAAgTgFgAVGBdQgTgJgKgWQgLgVAAglQAAglALgWQAKgVATgJQATgJAbABQAYgBAPAIQAPAHAIALQAIAMADANQADAOAAAPIgBAKIgBALIiAAIQAAAVAGANQAFANANAHQAOAGAWAAQAQAAAQgEQAQgDAMgGIAAAcIgQAGIgWAEQgNACgNAAIgDAAQgaAAgTgJgAVTg9QgMAHgEAOQgFAOAAATIBkgHQAAgPgDgMQgDgNgKgHQgKgIgUABQgVgBgMAIgAhhBmQgbAAgUgJQgUgJgKgWQgKgVAAglQAAglAKgWQAKgVAUgJQAUgJAbABQAcgBAUAJQATAJAKAVQAKAWABAlQgBAlgKAVQgKAWgTAJQgTAJgaAAIgDAAgAiCg+QgMAHgFAQQgFAQAAAbQAAAbAFAQQAGAQAMAHQAMAGAUAAQAWAAAMgGQAMgHAFgQQAFgQAAgbQAAgbgFgQQgGgQgMgHQgMgGgVAAQgVAAgMAGgAz8BdQgUgJgKgWQgKgVAAglQAAglAKgWQAKgVATgJQAUgJAbABQAYgBAPAIQAPAHAIALQAIAMADANQACAOAAAPIAAAKIgBALIiBAIQAAAVAGANQAGANANAHQANAGAXAAQAQAAAQgEQAQgDALgGIAAAcIgPAGIgXAEQgMACgOAAIgDAAQgZAAgTgJgAzvg9QgMAHgFAOQgEAOgBATIBlgHQAAgPgDgMQgDgNgKgHQgKgIgUABQgWgBgLAIgA9NBmQgbAAgUgJQgUgJgKgWQgKgVAAglQAAglAKgWQAKgVAUgJQAUgJAbABQAcgBAUAJQATAJAKAVQAKAWABAlQgBAlgKAVQgKAWgTAJQgTAJgaAAIgDAAgA9ug+QgMAHgFAQQgFAQAAAbQAAAbAFAQQAGAQAMAHQAMAGAUAAQAWAAAMgGQAMgHAFgQQAFgQAAgbQAAgbgFgQQgGgQgMgHQgMgGgVAAQgVAAgMAGgEgj1ABmQgbAAgUgJQgUgJgKgWQgKgVAAglQAAglAKgWQAKgVAUgJQAUgJAbABQAcgBAUAJQATAJAKAVQAKAWABAlQgBAlgKAVQgKAWgTAJQgTAJgaAAIgDAAgEgkWgA+QgMAHgFAQQgFAQAAAbQAAAbAFAQQAGAQAMAHQAMAGAUAAQAWAAAMgGQAMgHAFgQQAFgQAAgbQAAgbgFgQQgGgQgMgHQgMgGgVAAQgVAAgMAGgEAlaABmQgcAAgTgPQgTgPgJgeIgDgPIgBgNIAAgLQAAgcAMgWQAMgWAYgPQAKgFAJgCQAJgBAJAAIADAAQAggBAVAiIAAgIIABgBIABAAIAcAAIABAAIAAABIAABjIABAjIAFAfIgCABIgcAAQgBABgCgIIgDgWIgGAJIgHAIQgJAHgKAEQgLAEgMAAgEAlDgA4QgOALgJAVIgDAOIgCANIAAAIQAAASAHAPQAIAPAOALQAGADAGACQAGABAHABIAHAAQA1gBAAhCIAAgLQAAgbgJgQQgKgQgSgFIgHgBIgFAAIAAAAQgWgBgPALgAPbBZQgRgMgHgXQgHgVABgdQgBgaAHgWQAHgWARgOQARgNAfAAQAbgBAPALQAOAJAFARIAAhuIAeAAIAAEJIgZAAIgFgfQgFAPgPAJQgPAKgaABQgfgBgRgMgAPug5QgLAKgDARQgDAQAAASQAAATADARQAEAQALAKQAKAKAWAAQAXAAANgJQAMgIAFgRQAGgQgBgWQABgVgGgRQgFgQgMgJQgNgJgXAAQgWAAgLALgAreBmQgcAAgTgPQgTgPgJgeIgCgPIgBgNIAAgLQAAgcAMgWQALgWAYgPQAKgFAJgCQAJgBAJAAIADAAQAggBAWAiIAAgIIAAgBIABAAIAcAAIABAAIABABIAABjIABAjIAFAfIgCABIgcAAQgCABgBgIIgDgWIgHAJIgHAIQgJAHgKAEQgKAEgNAAgAr0g4QgPALgIAVIgEAOIgBANIAAAIQAAASAHAPQAHAPAOALQAGADAHACQAGABAGABIAHAAQA2gBAAhCIAAgLQAAgbgKgQQgJgQgTgFIgGgBIgFAAIgBAAQgVgBgPALgA5OBgQgMgFgGgNQgGgNABgZIAAhpIgcAAIAAgZIAcAAIAAgtIAeAAIAAAtIAuAAIAAAZIguAAIAABoQgBAOADAIQACAIAGADQAGADALAAIALAAIAKgCIAAAZIgLABIgLABIgEAAQgSAAgLgEgA/2BgQgMgFgGgNQgGgNABgZIAAhpIgcAAIAAgZIAcAAIAAgtIAeAAIAAAtIAuAAIAAAZIguAAIAABoQgBAOADAIQACAIAGADQAGADALAAIALAAIAKgCIAAAZIgLABIgLABIgEAAQgSAAgLgEgEAq3ABiQgFgBgCgFQgCgEAAgKQgBgOAGgEQAFgEAMAAQAMAAAFAEQAGAEgBAOQABAKgDAEQgCAFgFABQgFACgIAAQgIAAgFgCgAdCBjIgUgCQgJgBgGgCIAAgZIARADIATADIATABQAWAAALgGQALgHAAgRQAAgKgDgGQgDgHgKgEQgJgEgSgEQgUgFgMgGQgLgGgFgKQgFgKABgRQAAgWARgPQARgNAiAAQAOAAANABQANACAHACIgCAaQgIgDgMgCQgMgCgNAAQgUAAgKAFQgKAGAAARQAAAJADAFQADAFAIAEQAHADAPAEQAVAEAOAGQANAHAFAKQAGAMAAARQAAAcgSAOQgTANgjAAIgUgBgANuBaQgKgJAAgVIAAjjIAeAAIAADbQAAAOAEAEQAEAFAJAAIAHAAIAIgCIAAAZIgJABIgLABQgVAAgLgKgEAhyABiIhGAAIAAjyIBGAAQAbAAAVAFQAWAFAPANQAQANAIAYQAJAYAAAmQAAAtgPAbQgPAagaALQgaALghAAIgDAAgEAhMABGIAmAAQAZABATgJQAUgIAKgVQALgUAAgjQAAgngLgVQgLgUgTgIQgTgHgZAAIgmAAgAZwBiIAAh2QAAgPgDgLQgDgKgIgFQgIgGgOABQgMgBgMADQgLADgJAHQgIAJgGAQIAAB/IgeAAIAAi8IAeAAIAAAbQAGgMAKgHQAKgGALgDQAMgDAMABQAYgBAOAJQAOAHAGAOQAFAOAAASIAACCgASlBiIAAi8IAeAAIAAAiQAGgPAKgJQAKgIALgDQAMgCALAAIAEAAIgBAbIgEAAQgNgBgLAEQgLADgJAKQgJAJgGAQIAAB7gAMGBiIAAi8IAeAAIAAC8gAKpBiIAAh2QABgPgDgLQgDgKgIgFQgIgGgPABQgMgBgLADQgLADgJAHQgJAJgFAQIAAB/IgeAAIAAkJIAeAAIAABoQAGgMAJgHQAKgGAMgDQALgDAMABQAZgBAOAJQANAHAGAOQAGAOAAASIAACCgACmBiIAAh2QAAgPgDgLQgDgKgIgFQgIgGgOABQgMgBgMADQgLADgJAHQgIAJgGAQIAAB/IgeAAIAAi8IAeAAIAAAbQAGgMAKgHQAKgGALgDQAMgDAMABQAYgBAOAJQAOAHAGAOQAFAOAAASIAACCgAlPBiIhFhYIgKAAIAABYIgeAAIAAkJIAeAAIAACbIALAAIBBhOIAlAAIhPBYIBUBkgApBBiIAAi8IAeAAIAAAiQAGgPAKgJQAKgIALgDQAMgCALAAIAEAAIgBAbIgEAAQgNgBgLAEQgLADgJAKQgJAJgGAQIAAB7gA11BiIAAh2QAAgPgDgLQgDgKgIgFQgIgGgOABQgMgBgMADQgLADgJAHQgIAJgGAQIAAB/IgeAAIAAkJIAeAAIAABoQAGgMAKgHQAKgGALgDQAMgDAMABQAYgBAOAJQAOAHAGAOQAFAOAAASIAACCgEgrZABiIAAjyIAfAAIAADygAbDhNQAFgOAFgQIAHgfQACgQAAgNIAeAAQAAANgEAQQgEAPgGAQQgGARgHANgAMHiAQgEgDAAgMQAAgLAEgDQAEgEAKAAQAJAAAFAEQAEADAAALQAAAMgEADQgFAEgJgBQgKABgEgEg");
	this.shape_2.setTransform(42.9292,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-240.1,-32.2,571.1,58.3);
p.frameBounds = [rect, rect];


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

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		_this.btn_music.visible = false; // 初始状态
		_this.btn_music_bz.visible = true;
		
		var _parent=this.parent;
		
		// 点击 btn_music_bz 切换到 btn_music
		_this.btn_music_bz.on('click', function() {
		    _this.btn_music.visible = true;  // 显示 btn_music
		    _this.btn_music_bz.visible = false; // 隐藏 btn_music_bz
			_parent.changeSrc('source/sound/s1.mp3');
		});
		
		// 点击 btn_music 切换到 btn_music_bz
		_this.btn_music.on('click', function() {
		    _this.btn_music.visible = false; // 隐藏 btn_music
		    _this.btn_music_bz.visible = true; // 显示 btn_music_bz
			_parent.changeSrc('source/sound/s1_bz.mp3');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.btn_music_bz = new lib.元件9();
	this.btn_music_bz.name = "btn_music_bz";
	this.btn_music_bz.setTransform(0.05,0);
	new cjs.ButtonHelper(this.btn_music_bz, 0, 1, 2, false, new lib.元件9(), 3);

	this.btn_music = new lib.元件6();
	this.btn_music.name = "btn_music";
	new cjs.ButtonHelper(this.btn_music, 0, 1, 2, false, new lib.元件6(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_music},{t:this.btn_music_bz}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件10, rect = new cjs.Rectangle(-28.2,-28.1,56.4,56.3), [rect]);


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
		var soundAry = new Array(1, 2,3,4,5,6,7);
		var mcAry = [];
		if (!this.isinit) {
			this.isinit = true;
			init();
		}
		
		
		var PathStr = 'source/sound/';
		
		//当前声音文件
		var curSoundId = 0;
		var timeArr = new Array(1, 2, 3, 4);
		var init = true;
		var audio = new Audio('source/sound/1.mp3');
		
		var autoMode = false;
		
		function init() {
			for (var item of soundAry) {
				var mc = _this.parent.getMc("mc" + String(item)); // 动态访问影片剪辑
				if (mc) {
					console.log(mc); // 输出影片剪辑对象
					mc.gotoAndStop(0);
					mc.buttonMode = true; // 设置为按钮模式
					mc.mouseChildren = false; // 防止子元素阻止事件
					mc.mcId = item;
		
					// 设置鼠标手型效果
					mc.on('mouseover', function () {
						this.cursor = 'pointer'; // 鼠标悬停时手型
					});
					mc.on('mouseout', function () {
						this.cursor = 'default'; // 鼠标离开时恢复默认
					});
		
					// 添加点击事件
					mc.on('click', function () {
						//console.log("Clicked: " + this.name); // 点击时执行的操作
						autoMode = false;
						curId = this.mcId - 1;
						_pausebtn.visible = true;
						_playbtn.visible = false;
						updata();
		
					});
					mcAry.push(mc);
				}
			}
		
			//默认自动播放
		    setTimeout(function(){
				_pausebtn.visible = false;
			    _playbtn.visible = true;
			    autoMode = true;
			    curId = 0;
			    updata();
				},200);
			/*_pausebtn.visible = false;
			_playbtn.visible = true;
			autoMode = true;
			curId = 0;
			updata();*/
		
		}
		
		
		audio.addEventListener('play', function () {
			//console.log('音频开始播放');
			//_pausebtn.visible = true;
			//_playbtn.visible = false;
			//audio.pause();
			// 这里可以添加音频播放时想要执行的代码
		});
		audio.addEventListener('ended', function () {
			for (var v of mcAry) {
				if (v.currentFrame !== 0) {
					v.gotoAndStop(0);
				}
			}
			if (autoMode) {
				onNextbtn();
			}
		});
		
		audio.oncanplaythrough = function () {
			//audio.play();
			if (init) {
				init = false;
				_pausebtn.visible = true;
				_playbtn.visible = false;
				audio.pause();
			}
		};
		this.changeSrc = function (src) {
			var tempTime = audio.currentTime;
			audio.src = src;
			audio.currentTime = tempTime;
			if (_playbtn.visible == true) {
				audio.play();
			} else {
				audio.pause();
			}
		}
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
		var theWidth = 230;
		
		//获取父级影片剪辑
		var _clip = this.parent._movieClip;
		var _timer = this.parent._Timer;
		
		
		_prevbtn.addEventListener("click", onPrevbtn.bind(this));
		function onPrevbtn(event) {
			curId -= 1;
			checkId();
			//audio.currentTime = timeArr[curId];
			_pausebtn.visible = false;
			_playbtn.visible = true;
			//audio.play();
		}
		
		_nextbtn.addEventListener("click", onNextbtn.bind(this));
		function onNextbtn(event) {
			curId += 1;
			if (curId > soundAry.length - 1) {
				_pausebtn.visible = true;
				_playbtn.visible = false;
				for (var v of mcAry) {
					v.gotoAndStop(0);
				}
				curId = 0;
				autoMode = false;
				return;
			}
			checkId();
			_pausebtn.visible = false;
			_playbtn.visible = true;
		
			updata();
			//audio.play();
		}
		
		function updata() {
		
			for (var v of mcAry) {
				v.gotoAndStop(0);
			}
			audio.src = PathStr + String(soundAry[curId]) + ".mp3";
			console.log("audio.src==============");
			console.log(PathStr + String(soundAry[curId]) + ".mp3");
			audio.play();
			mcAry[curId].gotoAndStop(1);
		
			//if(autoMode){
		
			//}
		}
		
		_pausebtn.addEventListener("click", onPausebtn.bind(this));
		function onPausebtn() {
			if (autoMode) {
				audio.play();
				_pausebtn.visible = false;
				_playbtn.visible = true;
			} else {
				_pausebtn.visible = false;
				_playbtn.visible = true;
				autoMode = true;
				curId = 0;
				updata();
			}
			//audio.play();
		}
		_playbtn.addEventListener("click", onPlaybtn.bind(this));
		function onPlaybtn(event) {
			_pausebtn.visible = true;
			_playbtn.visible = false;
			audio.pause();
		}
		
		
		function checkId() {
			if (curId < 0) {
				curId = 0;
		
			} else if (curId > soundAry.length - 1) {
				curId = soundAry.length - 1;
			}
			//console.log(curId);
			if (curId == 0) {
				_prevbtn.visible = false;
			} else {
				_prevbtn.visible = true;
			}
		
			if (curId == soundAry.length - 1) {
				_nextbtn.visible = false;
			} else {
				_nextbtn.visible = true;
			}
		
		}
		
		//不启用时间器
		//_timer.start();
		//_timer.setCallback(runTimer);
		//function runTimer(){
		//	var currentElement = audio;
		//	// 获取当前的播放进度（以秒为单位）
		//	var currentTime = currentElement.currentTime;
		//	// 获取视频的总时长（以秒为单位）
		//	var duration = currentElement.duration;
		//	// 计算播放进度百分比
		//	var progress = (currentTime / duration);
		//	
		//	//console.log(parseInt(_clip.totalFrames*progress));
		//	_clip.gotoAndStop(parseInt(_clip.totalFrames*progress)-1);
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_7
	this._seekMc = new lib.元件8();
	this._seekMc.name = "_seekMc";
	this._seekMc.setTransform(360.15,24.2);

	this.timeline.addTween(cjs.Tween.get(this._seekMc).wait(1));

	// 图层_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax2BdQgmAAgcgcQgbgbAAgmQAAglAbgbQAcgcAmAAMAjtAAAQAdAAAXAQIAEAEIAJAIIAFAFQAXAaAAAhQAAAigXAaIgFAFIgJAIIgEAEQgXAQgdAAg");
	mask.setTransform(249.225,23.925);

	// 图层_3
	this._color = new lib.元件14复制();
	this._color.name = "_color";
	this._color.setTransform(124.7,13.1,1,1,0,0,0,-124.5,-10.8);

	var maskedShapeInstanceList = [this._color];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this._color).wait(1));

	// 图层_1
	this._twBtnBar = new lib.元件10();
	this._twBtnBar.name = "_twBtnBar";
	this._twBtnBar.setTransform(488.85,24.6);

	this._seekBarMc = new lib.元件11复制();
	this._seekBarMc.name = "_seekBarMc";
	this._seekBarMc.setTransform(134.65,13.15,1,1,0,0,0,-115,-11);
	new cjs.ButtonHelper(this._seekBarMc, 0, 1, 1);

	this.instance = new lib.元件11();
	this.instance.setTransform(249.45,24.15);

	this._pausebtn = new lib.元件15();
	this._pausebtn.name = "_pausebtn";
	this._pausebtn.setTransform(2256.85,-222.75);
	new cjs.ButtonHelper(this._pausebtn, 0, 1, 2, false, new lib.元件15(), 3);

	this._prevbtn = new lib.元件13();
	this._prevbtn.name = "_prevbtn";
	this._prevbtn.setTransform(82,23.85);
	new cjs.ButtonHelper(this._prevbtn, 0, 1, 2, false, new lib.元件13(), 3);

	this._nextbtn = new lib.元件12();
	this._nextbtn.name = "_nextbtn";
	this._nextbtn.setTransform(415.75,23.85);
	new cjs.ButtonHelper(this._nextbtn, 0, 1, 2, false, new lib.元件12(), 3);

	this._playbtn = new lib.元件7复制();
	this._playbtn.name = "_playbtn";
	this._playbtn.setTransform(2256.85,-222.75);
	new cjs.ButtonHelper(this._playbtn, 0, 1, 2, false, new lib.元件7复制(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(127,186,243,0.4)").s().p("Ax6C5Qg9AAgwgkQgLgIgLgLQg2g2AAhMIAAAAQAAhMA2g2QA2g2BNAAMAj1AAAQBMAAA2A2QA3A2AABMIAAAAQAABMg3A2QgKALgLAIQgvAkg+AAgAy0g9QgbAbAAAlQAAAmAbAbQAbAcAnAAMAjtAAAQAcAAAYgQIAEgEIAJgIIAFgFQAXgagBgiQABghgXgaIgFgFIgJgIIgEgEQgYgQgcAAMgjtAAAQgnAAgbAcg");
	this.shape.setTransform(249.3,23.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this._playbtn},{t:this._nextbtn},{t:this._prevbtn},{t:this._pausebtn},{t:this.instance},{t:this._seekBarMc},{t:this._twBtnBar}]}).wait(1));

	// 图层_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAzhWIABCtIhnhXg");
	this.shape_1.setTransform(85.5409,23.7531,0.9827,1.1483);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_2.setTransform(85.5409,23.7531,0.9827,1.1483);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_3.setTransform(75.0994,23.7531,0.9827,1.1483);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_4.setTransform(75.0994,23.7531,0.9827,1.1483);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCE3FA").ss(4,1,1).p("ACsirQBHBIAABjQAABVg0BAQgJALgKALQhIBIhkAAQhLAAg7gpQgUgNgRgSQgLgLgJgLQgGgIgGgJQgCgDgDgEQgig3AAhGQAAhjBHhIQA3g3BKgMQAUgDAWAAQBkAABIBGg");
	this.shape_5.setTransform(82,23.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E1E1E1").s().p("AiGDKQgUgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBHBHAABkQAABVg0BAIgTAWQhIBHhkAAQhLAAg7gog");
	this.shape_6.setTransform(82,23.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAzhWIABCtIhnhXg");
	this.shape_7.setTransform(412.2091,23.472,0.9827,1.1475,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_8.setTransform(412.2091,23.472,0.9827,1.1475,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_9.setTransform(422.6506,23.472,0.9827,1.1475,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_10.setTransform(422.6506,23.472,0.9827,1.1475,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#CCE3FA").ss(4,1,1).p("AiqirQhIBHAABkQAABUA0BBQAJALALALQBGBIBlAAQAgAAAegIQAngKAigXQASgNASgSQALgLAIgLQAHgJAGgIQACgDADgEQAig3AAhGQAAhkhHhHQgwgwg9gPQgKgCgJgCQgVgEgWAAQhlAAhGBHg");
	this.shape_11.setTransform(415.75,23.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E1E1E1").s().p("AiqCrIgUgWQg0hAAAhVQABhkBHhHQBGhGBkAAQAXAAAVADIATAEQA9APAwAwQBHBHAABkQAABGgjA3IgEAGIgNASIgTAWQgSARgTAOQghAXgnAKQgeAIghgBQhjAAhHhHg");
	this.shape_12.setTransform(415.75,23.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(55.8,-249,2227.4,301.8);
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
		
		this.stop();
		
		var _this = this;
		_this.issubmited = false;
		
		if(!this.isinit){
			//console.log("第一次进入")
			this.isinit = true;
			
		}
		
		this.getMc=function(_name){
			return _this[_name];
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_2
	this.mc5 = new lib.元件18复制();
	this.mc5.name = "mc5";
	this.mc5.setTransform(499.05,340.45);

	this.mc7 = new lib.元件18复制3();
	this.mc7.name = "mc7";
	this.mc7.setTransform(495.05,432.15);

	this.mc6 = new lib.元件18复制2();
	this.mc6.name = "mc6";
	this.mc6.setTransform(495.05,372.75);

	this.mc3 = new lib.元件17复制();
	this.mc3.name = "mc3";
	this.mc3.setTransform(404.25,271.75);

	this.mc4 = new lib.元件18复制_1();
	this.mc4.name = "mc4";
	this.mc4.setTransform(499.05,340.45);

	this.mc2 = new lib.元件18();
	this.mc2.name = "mc2";
	this.mc2.setTransform(499.05,281.15);

	this.mc1 = new lib.元件17();
	this.mc1.name = "mc1";
	this.mc1.setTransform(373.25,238.75);

	this.instance = new lib.位图3();
	this.instance.setTransform(884,85,0.6939,0.6939);

	this.pro_bar = new lib.元件3复制2();
	this.pro_bar.name = "pro_bar";
	this.pro_bar.setTransform(-1083.3,736.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCEBED").s().p("EhXkAeZQhvAAhOhCQhOhCAAhdMAAAg1vQAAhdBOhCQBOhCBvAAMCvJAAAQBvAABOBCQBOBCAABdMAAAA1vQAABdhOBCQhOBChvAAg");
	this.shape.setTransform(640.475,360.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4D9375").ss(3,1,1).p("ADWhwQgWAngkATQgPAIgSAFQg8AQg2gfQgjgWgUgjQgDgFgCgFQgFgMgDgMQgFgSAAgQQgCgqAWgmQAfg2A7gQQA8gQA1AfQA2AfARA8QAPA8gfA1gAg7g5QgVgXgNgeQAAgBgBAAQgEgNgEgMQgUhOAohFQAohGBNgVQBNgUBFAoQBGAoAVBNQAVBOgoBGQgmBAhFAXQgFABgGABQgKACgKADQgkAFgigHIAJAFIggA3IgBAAIhog9IgIgEIAgg3IBoA8AAVA/QAHALACAQQACATgDARQgEASgKAQIhgCpQgUAighANQghANgbgPIgygdQgbgQgGgkQgFgiAUgiIBhiqQAKgQANgMQANgMARgIQAPgGAOAB");
	this.shape_1.setTransform(74.5602,127.9352,1.2693,1.2693);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ADBCC8").s().p("AhKCCQglgWgTgjIgFgKQgGgMgDgMQgEgSgBgQQgCgpAXgmQAeg2A9gQQA6gQA2AfQA1AfARA8QAPA7geA1QgXAngkATQgPAIgRAFQgVAFgTAAQgmAAgjgUg");
	this.shape_2.setTransform(85.2762,104.1647,1.2693,1.2693);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEFEFA").s().p("AjCF2IgygdQgbgQgGgkQgFgiAUgiIBhiqQAKgQANgMQANgMARgIQAPgGAOABIBoA9QAHALACAQQACATgDARQgEASgKAQIhgCpQgUAighANQgQAGgOAAQgQAAgOgIgAAVA/Ihog9IgIgEIAgg3IBoA8Ihog8QgVgXgNgeIgBgBIgIgZQgUhOAohFQAohGBNgVQBNgUBFAoQBGAoAVBNQAVBOgoBGQgmBAhFAXIgLACIgUAFQgkAFgigHIAJAFIggA3gAAulLQg7AQgfA2QgWAmACAqQAAAQAFASQADAMAFAMIAFAKQAUAjAjAWQA2AfA8gQQASgFAPgIQAkgTAWgnQAfg1gPg8QgRg8g2gfQgkgVgmAAQgTAAgUAGg");
	this.shape_3.setTransform(74.5602,127.9352,1.2693,1.2693);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAmBxIgliZIgBAAIgmCZIhMAAIg9jhIBAAAIAkCiIADAAIAniiIBEAAIAoCiIACAAIAkiiIA/AAIg9Dhg");
	this.shape_4.setTransform(245.925,140.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1BrQgYgKgNgaQgNgZAAguQAAgsANgaQANgaAZgKQAZgKAiAAQAnAAAWANQAVAMAIAXQAIAWgBAdIgBARIgBAOIiRAJQACAYAPALQAOAMAdAAQAPAAAOgDIAbgFIAUgIIAAAwQgLAGgXAEQgXAFgeAAIgDAAQggAAgYgKgAgfg6QgLANgBAbIBcgIQAAgMgDgKQgDgKgJgGQgJgGgSAAIgCAAQgZAAgLAMg");
	this.shape_5.setTransform(215.3765,140.0761);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgeChIAAjhIA8AAIAADhgAgUhiQgHgCgEgHQgCgHAAgOQAAgOACgHQAEgHAHgCQAIgCAMAAQANAAAIACQAHACADAHQADAHAAAOQAAAOgDAHQgDAHgHACQgIACgNAAQgMAAgIgCg");
	this.shape_6.setTransform(197.05,135.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkBxIhSjhIBDAAIAzCiIABAAIA1iiIBBAAIhSDhg");
	this.shape_7.setTransform(178.925,140.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag1BrQgYgKgNgaQgNgZAAguQAAgsANgaQANgaAZgKQAZgKAiAAQAnAAAWANQAVAMAIAXQAIAWgBAdIgBARIgBAOIiRAJQACAYAPALQAOAMAdAAQAPAAAOgDIAbgFIAUgIIAAAwQgLAGgXAEQgXAFgeAAIgDAAQggAAgYgKgAgfg6QgLANgBAbIBcgIQAAgMgDgKQgDgKgJgGQgJgGgSAAIgCAAQgZAAgLAMg");
	this.shape_8.setTransform(154.5765,140.0761);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAsCRIhDhqIgfAAIAABqIhAAAIAAkhIBiAAQAmgBAaAKQAYAJAMAUQAMAUAAAiQAAAkgOAUQgNAUgbAJIBRBwgAg2gHIAZAAQAVAAAMgEQANgDAGgKQAFgKABgSQgBgRgFgJQgGgKgNgDQgMgDgVAAIgZAAg");
	this.shape_9.setTransform(130.25,136.8738);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D8075").s().p("AyBFCIAAmfQAAhfBChDQBBhCBcAAIdFAAQBcAABBBCQBCBDAABfIAAGfg");
	this.shape_10.setTransform(180.35,136.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(51,51,51,0.098)").s().p("EhkVAEsIAApXMDIrAAAIAAJXg");
	this.shape_11.setTransform(639.9,690.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.pro_bar},{t:this.instance},{t:this.mc1},{t:this.mc2},{t:this.mc4},{t:this.mc3},{t:this.mc6},{t:this.mc7},{t:this.mc5}]}).wait(1));

	// diban
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.8)").s().p("EhkVAEsIAApXMDIrAAAIAAJXg");
	this.shape_12.setTransform(639.9,690.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-387.5,438,2309.7,711);
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
		{src:"images/index_atlas_1.png?1734503243288", id:"index_atlas_1"}
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