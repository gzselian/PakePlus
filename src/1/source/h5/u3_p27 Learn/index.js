(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,320,328]]}
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{scaleY:1.1479,y:0.203}},{t:this.shape_2,p:{scaleY:1.1479,y:0.203}},{t:this.shape_1,p:{scaleY:1.1479,y:0.203}},{t:this.shape,p:{scaleY:1.1479,y:0.203}}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{scaleY:1.1478,y:0.2241}},{t:this.shape_2,p:{scaleY:1.1478,y:0.2241}},{t:this.shape_1,p:{scaleY:1.1478,y:0.2241}},{t:this.shape,p:{scaleY:1.1478,y:0.2241}}]},1).wait(2));

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
	this.shape.graphics.f().s("#FFFFFF").ss(6,1,1).p("ABChxIAADjAhBhxIAADj");
	this.shape.setTransform(0.459,0.02,0.8145,0.8145);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F69602").ss(4,1,1).p("ACsirQBHBIAABjQAABVg0BBQgJALgKALQhIBHhkAAQhjAAhIhHQgKgLgIgLQgIgJgGgJQgCgDgCgEQgjg3AAhGQAAhjBHhIQBIhHBjAAQBkAABIBHg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F69602").s().p("AirCsIgSgWIgOgTIgEgGQgig3gBhGQABhjBGhIQBIhGBjAAQBkAABHBGQBHBIABBjQgBBVgzBBIgUAWQhHBGhkAAQhjAAhIhGg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F69602").ss(6,1,1).p("AhBhxIAADjABChxIAADj");
	this.shape_3.setTransform(0.459,0.02,0.8145,0.8145);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AirCsIgSgWIgOgTIgEgGQgig3gBhGQABhjBGhIQBIhGBjAAQBkAABHBGQBHBIABBjQgBBVgzBBIgUAWQhHBGhkAAQhjAAhIhGg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(6,1,1).p("AhBhxIAADjABChxIAADj");
	this.shape_5.setTransform(0.459,0.02,0.8145,0.8145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape_5}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.2,-26.2,52.5,52.5);
p.frameBounds = [rect, rect, rect, rect];


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
	this.shape.graphics.f().s("#FFFFFF").ss(6,1,1).p("ABChxIAADjAhBhxIAADj");
	this.shape.setTransform(0.459,0.02,0.8145,0.8145);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF7E4D").ss(4,1,1).p("ACsirQBHBIAABjQAABVg0BBQgJALgKALQhIBHhkAAQhjAAhIhHQgKgLgIgLQgIgJgGgJQgCgDgCgEQgjg3AAhGQAAhjBHhIQBIhHBjAAQBkAABIBHg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7E4D").s().p("AirCsIgSgWIgOgTIgEgGQgig3gBhGQABhjBGhIQBIhGBjAAQBkAABHBGQBHBIABBjQgBBVgzBBIgUAWQhHBGhkAAQhjAAhIhGg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF7E4D").ss(6,1,1).p("AhBhxIAADjABChxIAADj");
	this.shape_3.setTransform(0.459,0.02,0.8145,0.8145);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AirCsIgSgWIgOgTIgEgGQgig3gBhGQABhjBGhIQBIhGBjAAQBkAABHBGQBHBIABBjQgBBVgzBBIgUAWQhHBGhkAAQhjAAhIhGg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(6,1,1).p("AhBhxIAADjABChxIAADj");
	this.shape_5.setTransform(0.459,0.02,0.8145,0.8145);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape_5}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.2,-26.2,52.5,52.5);
p.frameBounds = [rect, rect, rect, rect];


(lib.元件16_1 = function(mode,startPosition,loop,reversed) {
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


(lib.元件15_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah9CPQgHgHgBgIIgBj7QABgIAEgHIAEgEQAIgIAMAAQAFAAAFACIDcB/IABACQAFAEACAFQACAFAAAFQAAAGgCAEQgCAFgFAEIgEAFIjZB9QgFACgFAAQgMAAgIgIg");
	this.shape_6.setTransform(3.9002,-0.1596,0.7981,0.7981);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FF7E4D").ss(4,1,1).p("AC+i+QBPBQAABuQAABfg5BIQgKAMgMAMQhPBPhvAAQhvAAhPhPQgLgMgKgMQgIgKgHgLQgCgDgDgEQgmg+AAhNQAAhuBPhQQBPhOBvAAQBvAABPBOg");
	this.shape_7.setTransform(0.0124,0.011,0.9,0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF7E4D").s().p("Ai+C/IgVgZIgOgUIgGgHQgmg+ABhNQgBhvBPhPQBPhPBvABQBvgBBQBPQBPBPAABvQAABfg6BHQgKANgLAMQhQBPhvAAQhvAAhPhPg");
	this.shape_8.setTransform(0.0124,0.011,0.9,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF7E4D").ss(4,1,1).p("ACHAAQAAAFgCAFQgCAFgFAEQgCADgCACIjZB9QgFACgFAAQgMAAgIgIQgHgHgBgIIgBj8QABgHAEgHQABgCADgDQAIgHAMAAQAFAAAFACIDcB/QABABAAAAQAFAFACAFQACAFAAAFg");
	this.shape_9.setTransform(3.9002,-0.1596,0.7981,0.7981);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF7E4D").s().p("Ah9CPQgHgHgBgIIgBj7QABgIAEgHIAEgEQAIgIAMAAQAFAAAFACIDcB/IABACQAFAEACAFQACAFAAAFQAAAGgCAEQgCAFgFAEIgEAFIjZB9QgFACgFAAQgMAAgIgIg");
	this.shape_10.setTransform(3.9002,-0.1596,0.7981,0.7981);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ai+C/IgVgZIgOgUIgGgHQgmg+ABhNQgBhvBPhPQBPhPBvABQBvgBBQBPQBPBPAABvQAABfg6BHQgKANgLAMQhQBPhvAAQhvAAhPhPg");
	this.shape_11.setTransform(0.0124,0.011,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_11},{t:this.shape_7},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(2));

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
	this.shape_3.graphics.f().s("#FF7E4D").ss(4,1,1).p("ACsirQBHBIAABjQAABVg0BAQgJALgKALQhIBIhkAAQhLAAg7gpQgUgNgRgSQgLgLgJgLQgGgIgGgJQgCgDgDgEQgig3AAhGQAAhjBHhIQA3g3BKgMQAUgDAWAAQBkAABIBGg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF7E4D").s().p("AiGDKQgUgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBHBHAABkQAABVg0BAIgTAWQhIBHhkAAQhLAAg7gog");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF7E4D").s().p("AgqAyQgRAAAAgRIAAhBQAAgRARAAIBVAAQARAAAAARIAABBQAAARgRAAg");
	this.shape_5.setTransform(4.05,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF7E4D").ss(5,1,1).p("AA/hjIABDHIh+hkg");
	this.shape_6.setTransform(-6.9,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF7E4D").s().p("Ag+AAIB9hjIAADHg");
	this.shape_7.setTransform(-6.9,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF7E4D").ss(4,1,1).p("ACsirQBHBHAABkQAABVg0BAQgJALgKALQhHBIhlAAQhLAAg8gpQgTgNgRgSQgLgLgJgLQgGgIgGgJQgCgDgDgEQgig3AAhGQAAhkBHhHQA3g3BJgMQAVgEAWAAQBlAABHBHg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiHDKQgTgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBGBHAABkQAABVgzBAIgTAWQhIBHhkAAQhLAAg8gogABWBlIAAjIIhaBbIgBhbIh+BkIB/BkIAAhbIBaBbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.2,-26.2,52.5,52.5);
p.frameBounds = [rect, rect, rect, rect];


(lib.元件13_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAzhWIABCtIhnhXg");
	this.shape_12.setTransform(3.5409,-0.0969,0.9827,1.1483);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_13.setTransform(3.5409,-0.0969,0.9827,1.1483);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_14.setTransform(-6.9006,-0.0969,0.9827,1.1483);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_15.setTransform(-6.9006,-0.0969,0.9827,1.1483);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF7E4D").ss(4,1,1).p("ACsirQBHBIAABjQAABVg0BAQgJALgKALQhIBIhkAAQhLAAg7gpQgUgNgRgSQgLgLgJgLQgGgIgGgJQgCgDgDgEQgig3AAhGQAAhjBHhIQA3g3BKgMQAUgDAWAAQBkAABIBGg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF7E4D").s().p("AiGDKQgUgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBHBHAABkQAABVg0BAIgTAWQhIBHhkAAQhLAAg7gog");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF7E4D").ss(5,1,1).p("AA/hjIABDHIh+hkg");
	this.shape_18.setTransform(-6.9,0.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF7E4D").s().p("Ag+AAIB9hjIAADHg");
	this.shape_19.setTransform(-6.9,0.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF7E4D").ss(5,1,1).p("AAyhjIABDHIhlhkg");
	this.shape_20.setTransform(3.55,0.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF7E4D").s().p("AgyAAIBlhjIAADHg");
	this.shape_21.setTransform(3.55,0.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF7E4D").ss(4,1,1).p("ACsirQBHBHAABkQAABVg0BAQgJALgKALQhHBIhlAAQhLAAg8gpQgTgNgRgSQgLgLgJgLQgGgIgGgJQgCgDgDgEQgig3AAhGQAAhkBHhHQA3g3BJgMQAVgEAWAAQBlAABHBHg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AiHDKQgTgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBGBHAABkQAABVgzBAIgTAWQhIBHhkAAQhLAAg8gogABWBlIAAjIIhaBbIgBhbIh+BkIB/BkIAAhbIBaBbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(2));

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
	this.shape_3.graphics.f().s("#FF7E4D").ss(4,1,1).p("AirirQhHBHAABkQAABVA0BAQAJALAKALQBHBIBlAAQBLAAA8gpQATgNARgSQALgLAJgLQAGgIAGgJQACgDADgEQAig3AAhGQAAhkhHhHQg3g3hJgMQgVgEgWAAQhlAAhHBHg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF7E4D").s().p("AirCrIgTgWQgzhAAAhVQAAhkBGhHQBIhGBkAAQAVAAAVADQBKAMA3A3QBGBHAABkQAABGghA3IgFAGIgMASIgUAWQgRARgTAOQg8AohLAAQhkAAhIhHg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF7E4D").s().p("AgqAyQgRAAAAgRIAAhBQAAgRARAAIBVAAQARAAAAARIAABBQAAARgRAAg");
	this.shape_5.setTransform(-4.9,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF7E4D").ss(5,1,1).p("Ag+hjIAADHIB+hjg");
	this.shape_6.setTransform(6.9,0.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF7E4D").s().p("Ag+hjIB+BjIh+Bkg");
	this.shape_7.setTransform(6.9,0.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AirCrIgTgWQgzhAAAhVQAAhkBGhHQBIhGBkAAQAVAAAVADQBKAMA3A3QBGBHAABkQAABGghA3IgFAGIgMASIgUAWQgRARgTAOQg8AohLAAQhkAAhIhHgAAFBlIB/hkIh+hkIAABcIhbhcIAADIIBbhag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{y:0.0492}},{t:this.shape_1,p:{y:0.0492}},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_3},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{y:0.0799}},{t:this.shape_1,p:{y:0.0799}},{t:this.shape}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.2,-26.2,52.5,52.5);
p.frameBounds = [rect, rect, rect, rect];


(lib.元件12_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAzhWIABCtIhnhXg");
	this.shape_12.setTransform(-3.5409,0.1722,0.9827,1.1479,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_13.setTransform(-3.5409,0.1722,0.9827,1.1479,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_14.setTransform(6.9006,0.1722,0.9827,1.1479,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_15.setTransform(6.9006,0.1722,0.9827,1.1479,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FF7E4D").ss(4,1,1).p("AirirQhHBHAABkQAABVA0BAQAJALAKALQBHBIBlAAQBLAAA8gpQATgNARgSQALgLAJgLQAGgIAGgJQACgDADgEQAig3AAhGQAAhkhHhHQg3g3hJgMQgVgEgWAAQhlAAhHBHg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF7E4D").s().p("AirCrIgTgWQgzhAAAhVQAAhkBGhHQBIhGBkAAQAVAAAVADQBKAMA3A3QBGBHAABkQAABGghA3IgFAGIgMASIgUAWQgRARgTAOQg8AohLAAQhkAAhIhHg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF7E4D").ss(5,1,1).p("AgyhjIAADHIBlhjg");
	this.shape_18.setTransform(-3.55,0.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF7E4D").s().p("AgxhjIBkBjIhlBkg");
	this.shape_19.setTransform(-3.55,0.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FF7E4D").ss(5,1,1).p("Ag+hjIAADHIB+hjg");
	this.shape_20.setTransform(6.9,0.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF7E4D").s().p("Ag+hjIB+BjIh+Bkg");
	this.shape_21.setTransform(6.9,0.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AirCrIgTgWQgzhAAAhVQAAhkBGhHQBIhGBkAAQAVAAAVADQBKAMA3A3QBGBHAABkQAABGghA3IgFAGIgMASIgUAWQgRARgTAOQg8AohLAAQhkAAhIhHgAAFBlIB/hkIh+hkIAABcIhbhcIAADIIBbhag");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{y:0.1722}},{t:this.shape_14,p:{y:0.1722}},{t:this.shape_13,p:{y:0.1722}},{t:this.shape_12,p:{y:0.1722}}]}).to({state:[{t:this.shape_22},{t:this.shape_16},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{y:0.203}},{t:this.shape_14,p:{y:0.203}},{t:this.shape_13,p:{y:0.203}},{t:this.shape_12,p:{y:0.203}}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-26.2,-26.2,52.5,52.5);
p.frameBounds = [rect, rect, rect, rect];


(lib.元件11_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(12.0052,6.1945,0.5757,0.5757);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAjAAQAAAPgKAKQgKAKgPAAQgNAAgLgKQgKgKAAgPQAAgNAKgLQALgKANAAQAPAAAKAKQAKALAAANg");
	this.shape_1.setTransform(11.9171,6.3417,0.5757,0.5757);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAYQgKgJAAgPQAAgOAKgKQAKgKAOAAQAPAAAJAKQALAKAAAOQAAAPgLAJQgJALgPAAQgOAAgKgLg");
	this.shape_2.setTransform(11.9171,6.3417,0.5757,0.5757);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah0CDQgOgHAAgMQAAgLAOgIQAOgJASgBQALAAAKACIAAioQAAgIAGgEQADgDAFgBIChglIABAAQAQgDACANIAADEQAAALgOAJQgNAIgTABQgTABgNgHQgOgHAAgMQAAgLAOgIQANgJATgBQAMAAAKACIAAhpIiRAgIAACJQgCAJgMAHQgNAJgTABIgEAAQgQAAgMgGg");
	this.shape_3.setTransform(-3.7638,-0.0735,0.8997,0.8997);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F99703").ss(5,1,1).p("AjJDJQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQAMAMAKAMQAFAGAEAGQA1BIAABdQAAB2hUBTQhTBUh2AAQh1AAhUhUg");
	this.shape_4.setTransform(-0.0777,-0.0004,0.8997,0.8997);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F99703").s().p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTIAWAXIAJANQA1BIAABdQAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_5.setTransform(-0.0777,-0.0004,0.8997,0.8997);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E18803").ss(5,1,1).p("AjJDJQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQAMAMAKAMQAFAGAEAGQA1BIAABdQAAB2hUBTQhTBUh2AAQh1AAhUhUg");
	this.shape_6.setTransform(-0.009,0.0115,0.8998,0.8998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E18904").s().p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTIAWAXIAJANQA1BIAABdQAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_7.setTransform(-0.009,0.0115,0.8998,0.8998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{x:-0.0777,y:-0.0004}},{t:this.shape_4,p:{x:-0.0777,y:-0.0004}},{t:this.shape_3,p:{scaleX:0.8997,scaleY:0.8997,x:-3.7638,y:-0.0735}},{t:this.shape_2,p:{scaleX:0.5757,scaleY:0.5757,x:11.9171,y:6.3417}},{t:this.shape_1,p:{scaleX:0.5757,scaleY:0.5757,x:11.9171,y:6.3417}},{t:this.shape,p:{scaleX:0.5757,scaleY:0.5757,x:12.0052,y:6.1945}}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_3,p:{scaleX:0.8998,scaleY:0.8998,x:-3.8878,y:-0.0616}},{t:this.shape_2,p:{scaleX:0.5758,scaleY:0.5758,x:12.0923,y:6.3656}},{t:this.shape_1,p:{scaleX:0.5758,scaleY:0.5758,x:12.0923,y:6.3656}},{t:this.shape,p:{scaleX:0.5758,scaleY:0.5758,x:12.1319,y:6.2169}}]},1).to({state:[{t:this.shape_5,p:{x:-0.0863,y:-0.0019}},{t:this.shape_4,p:{x:-0.0863,y:-0.0019}},{t:this.shape_3,p:{scaleX:0.8997,scaleY:0.8997,x:-3.7795,y:-0.075}},{t:this.shape_2,p:{scaleX:0.5756,scaleY:0.5756,x:11.9015,y:6.3387}},{t:this.shape_1,p:{scaleX:0.5756,scaleY:0.5756,x:11.9015,y:6.3387}},{t:this.shape,p:{scaleX:0.5756,scaleY:0.5756,x:11.9894,y:6.1917}}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.2,-28.1,56.4,56.3);
p.frameBounds = [rect, rect, rect, rect];


(lib.元件8_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7E4D").s().p("AhMBMQghgfAAgtQAAgtAhggQAggfAtAAQAtAAAfAfQAhAgAAAtQAAAtghAfQgfAhgtAAQgtAAggghg");
	this.shape_2.setTransform(0.1,0.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhwBwQguguAAhCQAAhBAugvQAvguBBAAQBCAAAuAuQAvAvAABBQAABCgvAuQguAvhCAAQhBAAgvgvg");
	this.shape_3.setTransform(0.0107,-0.0066,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件8_1, rect = new cjs.Rectangle(-14.3,-14.3,28.6,28.6), [rect]);


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
	this.shape.graphics.f("#FF0000").s().p("EgwMAD6IAAnzMBgZAAAIAAHzg");
	this.shape.setTransform(308.475,25);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(0,0,617,50)];


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_5
	this.instance = new lib.元件1();
	this.instance.setTransform(130.45,0.05,1.2124,1,0,0,0,308.8,25);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.元件1(), 3);

	this.instance_1 = new lib.元件1();
	this.instance_1.setTransform(62.45,72.05,1,1,0,0,0,308.4,25);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.元件1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(2));

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhEBZQgUgJgKgVQgKgWAAglQAAgkAKgWQAKgVATgKQAUgIAbAAQAXAAAPAHQAPAHAIALQAIAMADAOQACAOAAAOIAAAKIgBALIiAAIQAAAVAGANQAGANANAHQANAGAXAAQAQAAAPgDQAQgDALgGIAAAcIgPAFIgXAFQgLABgOAAIgDAAQgZAAgTgJgAg3hAQgMAGgFAOQgEAOgBAUIBkgIQAAgOgDgNQgDgMgKgHQgJgIgUAAQgWAAgLAIgACiBiQgcAAgTgPQgTgPgJgdIgDgPIgBgOIAAgKQAAgcAMgXQAMgWAYgPQAKgEAJgCQAJgCAJAAIADAAQAgAAAVAhIAAgIIABgBIABAAIAcAAIABAAIAAABIAABjIABAjIAFAgIgCABIgcAAQgBAAgCgHIgDgXIgGAKIgHAIQgJAHgKAEQgLADgMAAgACLg7QgOAKgJAVIgDAPIgCANIAAAHQAAATAHAPQAIAPAOALQAGADAGABQAGACAHAAIAHAAQA1AAAAhCIAAgLQAAgcgJgPQgKgRgSgFIgHgBIgFAAIAAAAQgWAAgPALgAE/BfIAAi8IAeAAIAAAiQAGgPAKgJQAJgIAMgDQALgDAMAAIADAAIgBAbIgEAAQgMAAgLAEQgMADgJAJQgJAJgFARIAAB7gAjiBfIgvibIgCAAIgwCbIglAAIgzi8IAeAAIAoCdIACAAIAvidIAkAAIAwCdIACAAIAoidIAeAAIg1C8g");
	this.shape.setTransform(-178.225,73.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("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");
	this.shape_1.setTransform(60.5542,69.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("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QALgGAAgRQABgLgEgGQgDgGgJgEQgJgEgSgEQgVgFgLgGQgMgHgFgKQgEgLAAgPQAAgXARgOQARgNAigBQAOAAANACQANACAIACIgDAaQgIgDgMgCQgLgCgOAAQgUgBgKAGQgKAGAAAQQAAAKADAEQADAFAIAEQAIADAOADQAWAFANAGQANAHAGALQAGALAAASQgBAcgSAOQgSANgjAAIgUgBgAAfCBIgUgCQgJgBgFgCIAAgaIAQAEIATACIATABQAWABALgHQALgGAAgRQAAgLgDgGQgDgGgKgEQgJgEgSgEQgUgFgMgGQgLgHgFgKQgEgLAAgPQAAgXARgOQARgNAigBQAOAAANACQANACAHACIgCAaQgIgDgMgCQgMgCgNAAQgUgBgKAGQgKAGAAAQQAAAKADAEQADAFAIAEQAHADAPADQAVAFAOAGQANAHAFALQAGALAAASQAAAcgSAOQgTANgjAAIgUgBgAsaCBIgUgCQgKgBgFgCIAAgaIAQAEIAUACIASABQAWABALgHQALgGAAgRQABgLgEgGQgDgGgJgEQgJgEgSgEQgVgFgLgGQgMgHgFgKQgEgLAAgPQAAgXARgOQARgNAigBQAOAAANACQANACAIACIgDAaQgIgDgMgCQgLgCgOAAQgUgBgKAGQgKAGAAAQQAAAKADAEQADAFAIAEQAIADAOADQAWAFANAGQANAHAGALQAGALAAASQgBAcgSAOQgSANgjAAIgUgBgAvCCBIgUgCQgJgBgGgCIAAgaIARAEIATACIATABQAWABALgHQALgGAAgRQAAgLgDgGQgDgGgKgEQgJgEgSgEQgUgFgMgGQgLgHgFgKQgFgLABgPQAAgXARgOQARgNAigBQAOAAANACQANACAHACIgCAaQgIgDgMgCQgMgCgNAAQgUgBgKAGQgKAGAAAQQAAAKADAEQADAFAIAEQAHADAPADQAVAFAOAGQANAHAFALQAGALAAASQAAAcgSAOQgTANgjAAIgUgBgEAo6ACAIAAi8IAeAAIAAAiQAGgPAKgJQAKgIALgDQAMgDALAAIAEAAIgBAbIgEAAQgNAAgLAEQgLADgJAJQgJAKgGAPIAAB8gAaVCAIAAi8IAeAAIAAAiQAGgPAKgJQAKgIALgDQAMgDALAAIAEAAIgBAbIgEAAQgNAAgLAEQgLADgJAJQgJAKgGAPIAAB8gASLCAIAAh4QAAgOgCgKQgDgKgIgFQgIgGgPAAQgMAAgLADQgLACgJAIQgJAJgFAPIAACAIgeAAIAAi8IAeAAIAAAbQAGgMAJgHQAKgHAMgCQALgDAMAAQAZAAAOAIQANAIAGAOQAGAOAAASIAACCgAHlCAIAAi8IAeAAIAAAiQAGgPAKgJQAKgIALgDQAMgDALAAIAEAAIgBAbIgEAAQgNAAgLAEQgLADgJAJQgJAKgGAPIAAB8gAGHCAIAAi8IAeAAIAAC8gAErCAIAAh4QAAgOgDgKQgDgKgIgFQgIgGgOAAQgMAAgMADQgLACgJAIQgIAJgGAPIAACAIgeAAIAAkJIAeAAIAABoQAGgMAKgHQAKgHALgCQAMgDAMAAQAYAAAOAIQAOAIAGAOQAFAOAAASIAACCgA0oCAIAAi8IAeAAIAAAiQAGgPAKgJQAJgIAMgDQALgDAMAAIADAAIgBAbIgEAAQgMAAgLAEQgMADgJAJQgJAKgFAPIAAB8gEggUACAIAAi8IAeAAIAAAiQAGgPAKgJQAJgIAMgDQALgDAMAAIADAAIgBAbIgEAAQgMAAgLAEQgMADgJAJQgJAKgFAPIAAB8gEgo2ACAIgviaIgCAAIgwCaIglAAIgzi8IAeAAIAoCdIACAAIAvidIAkAAIAwCdIACAAIAoidIAeAAIg1C8gEguRACAIAAjyIAgAAIAADygAGIhiQgEgDAAgMQAAgLAEgEQAFgDAJAAQAKAAAEADQAEAEAAALQAAAMgEADQgEADgKAAQgJAAgFgDg");
	this.shape_2.setTransform(60.5542,69.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).wait(1));

	// 图层_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("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");
	this.shape_3.setTransform(198.925,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AP/B+QgUgJgKgVQgLgWAAglQAAglALgVQAKgWATgJQAUgJAbABQAYAAAOAHQAPAHAJALQAHAMAEAOQACANAAAOIgBAKIgBAMIiAAIQAAAVAGANQAFANANAHQAOAGAWAAQARAAAQgDQAPgEAMgFIAAAcIgQAFIgWAEQgNACgNAAIgDAAQgaAAgSgJgAQLgcQgMAHgEAOQgFANAAAUIBlgIQAAgPgDgLQgEgMgKgIQgKgHgTAAQgWAAgMAHgAjmCHQgbAAgVgJQgTgJgKgVQgKgWAAglQAAglAKgVQAKgWATgJQAVgJAbABQAcgBAUAJQATAJAKAWQAKAVAAAlQAAAlgKAWQgKAVgTAJQgTAJgaAAIgDAAgAkHgcQgMAGgFAQQgFAPAAAcQAAAbAFAQQAGAQAMAHQAMAGAUAAQAVAAAMgGQANgHAEgQQAFgQABgbQgBgcgFgPQgFgQgMgGQgNgHgUAAQgVAAgMAHgATlCHQgbAAgUgPQgSgPgKgdIgCgPIgBgOIAAgLQAAgdAMgVQALgWAZgPQAJgEAJgCQAJgCAJAAIADAAQAhAAAVAhIAAgIIAAgBIABAAIAdAAIABAAIAAABIAABjIABAjIAFAgIgCABIgcAAQgCAAgBgIIgDgWIgGAJIgHAJQgJAHgKADQgLAEgNAAgATPgWQgPAKgIAUIgDAOIgCAOIAAAIQAAATAHAPQAIAPAOALQAFADAHABQAGACAHAAIAGAAQA2AAAAhCIAAgMQAAgcgKgPQgJgQgTgFIgGgBIgFAAIAAAAQgWAAgPALgAn9B6QgQgMgHgWQgHgWAAgdQAAgbAHgVQAHgWAQgNQARgOAgAAQAbAAAOAKQAOAJAGARIAAhuIAeAAIAAEJIgZAAIgFgfQgGAPgPAKQgOAJgaABQgggBgRgMgAnpgYQgLAKgEAQQgCAQAAATQgBAUAEAQQAEAQALAKQAKAKAWAAQAWAAANgJQANgIAFgQQAFgRAAgWQAAgWgFgPQgFgRgNgJQgNgJgWAAQgXAAgKALgAt8CHQgcAAgTgPQgUgPgJgdIgCgPIgBgOIAAgLQAAgdAMgVQAMgWAXgPQALgEAIgCQAKgCAIAAIAEAAQAgAAAVAhIAAgIIABgBIABAAIAbAAIABAAIABABIAABjIABAjIAFAgIgCABIgcAAQgBAAgCgIIgDgWIgHAJIgHAJQgIAHgLADQgKAEgMAAgAuTgWQgOAKgJAUIgEAOIgBAOIAAAIQAAATAHAPQAHAPAOALQAHADAGABQAGACAGAAIAIAAQA1AAAAhCIAAgMQAAgcgJgPQgKgQgSgFIgHgBIgFAAIgBAAQgVAAgPALgArHCBQgMgFgGgNQgFgNAAgZIAAhoIgcAAIAAgaIAcAAIAAgtIAeAAIAAAtIAvAAIAAAaIgvAAIAABnQgBAOADAIQACAIAGADQAGADALAAIALAAIAKgCIAAAaIgKABIgLAAIgEAAQgTAAgLgEgAWDCDIAAi8IAdAAIAAAjQAHgQAKgIQAJgJALgCQAMgDAMAAIADAAIgBAbIgEAAQgMAAgLADQgMAEgJAJQgJAJgGAQIAAB7gANgCDIguiaIgCAAIgwCaIglAAIgzi8IAeAAIAoCeIACAAIAvieIAkAAIAvCeIADAAIAoieIAdAAIg0C8gAwSCDIAAh3QABgOgDgKQgEgKgHgGQgJgFgOAAQgMgBgLADQgLADgKAIQgIAIgFAPIAACAIgfAAIAAkJIAfAAIAABoQAFgMAKgGQAKgHAMgDQALgCAMAAQAZAAAOAIQANAIAGANQAGAOAAARIAACDgA0ZCDIgwizIgDAAIgyCzIgoAAIg5jyIAhAAIAuDOIACAAIAxixIAmAAIAxCxIACAAIAtjOIAgAAIg6Dyg");
	this.shape_4.setTransform(-86.8,-1.7237);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("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");
	this.shape_5.setTransform(125.2,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-245.9,-32.2,750,129.4);
p.frameBounds = [rect, new cjs.Rectangle(-245.9,-24.9,750,122)];


(lib.元件11复制_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1.graphics.f("rgba(255,126,77,0.4)").s().p("Ax2BdQgmAAgcgcQgbgbAAgmQAAglAbgbQAcgcAmAAMAjtAAAQAdAAAXAQIAEAEIAJAIIAFAFQAXAaAAAhQAAAigXAaIgFAFIgJAIIgEAEQgXAQgdAAg");
	this.shape_1.setTransform(-0.025,0.025);

	this.instance_1 = new lib.元件16_1();
	this.instance_1.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件11复制_1, rect = new cjs.Rectangle(-123.6,-9.2,247.2,18.6), [rect]);


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
		var soundAry = new Array("1");
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
		    console.log(soundAry);
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
	this.shape_7.setTransform(412.2091,23.5202,0.9827,1.1476,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_8.setTransform(412.2091,23.5202,0.9827,1.1476,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_9.setTransform(422.6506,23.5202,0.9827,1.1476,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_10.setTransform(422.6506,23.5202,0.9827,1.1476,0,0,180);

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
		
		function init() {
			console.log(_this.x);
			console.log();
		}
		var audio = new Audio('sounds/s01.mp3');
		audio.addEventListener('play', function () {
			//console.log('音频开始播放');
		});
		var timeArr = new Array(0, 30, 61, 90);
		var len = 4; //对应label1-label4;
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
		
		var showNum = 0;
		this.addEventListener("click", onthis.bind(this));
		function onthis(event) {
			//console.log(event.target.name);
			switch (event.target.name) {
				case "_prevbtnShow":
					showPrev();
					break;
				case "_nextbtnShow":
					showNext();
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
	this._seekMc = new lib.元件8_1();
	this._seekMc.name = "_seekMc";
	this._seekMc.setTransform(360.15,24.2);

	this.timeline.addTween(cjs.Tween.get(this._seekMc).wait(1));

	// 图层_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax2BdQgmAAgcgcQgbgbAAgmQAAglAbgbQAcgcAmAAMAjtAAAQAdAAAXAQIAEAEIAJAIIAFAFQAXAaAAAhQAAAigXAaIgFAFIgJAIIgEAEQgXAQgdAAg");
	mask.setTransform(249.225,23.925);

	// 图层_3
	this._color = new lib.元件14();
	this._color.name = "_color";
	this._color.setTransform(123.5,13.35,1,1,0,0,0,-124.5,-10.8);

	var maskedShapeInstanceList = [this._color];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this._color).wait(1));

	// 图层_1
	this._prevbtnShow = new lib.元件13复制();
	this._prevbtnShow.name = "_prevbtnShow";
	this._prevbtnShow.setTransform(486.15,22.65);
	new cjs.ButtonHelper(this._prevbtnShow, 0, 1, 2, false, new lib.元件13复制(), 3);

	this._nextbtnShow = new lib.元件12复制();
	this._nextbtnShow.name = "_nextbtnShow";
	this._nextbtnShow.setTransform(551.3,22.65);
	new cjs.ButtonHelper(this._nextbtnShow, 0, 1, 2, false, new lib.元件12复制(), 3);

	this._seekBarMc = new lib.元件11复制_1();
	this._seekBarMc.name = "_seekBarMc";
	this._seekBarMc.setTransform(134.65,13.15,1,1,0,0,0,-115,-11);
	new cjs.ButtonHelper(this._seekBarMc, 0, 1, 1);

	this.instance = new lib.元件11_1();
	this.instance.setTransform(249.45,24.15);

	this._pausebtn = new lib.元件15_1();
	this._pausebtn.name = "_pausebtn";
	this._pausebtn.setTransform(24.25,23.85);
	new cjs.ButtonHelper(this._pausebtn, 0, 1, 2, false, new lib.元件15_1(), 3);

	this._prevbtn = new lib.元件13_1();
	this._prevbtn.name = "_prevbtn";
	this._prevbtn.setTransform(82,23.85);
	new cjs.ButtonHelper(this._prevbtn, 0, 1, 2, false, new lib.元件13_1(), 3);

	this._nextbtn = new lib.元件12_1();
	this._nextbtn.name = "_nextbtn";
	this._nextbtn.setTransform(415.75,23.85);
	new cjs.ButtonHelper(this._nextbtn, 0, 1, 2, false, new lib.元件12_1(), 3);

	this._playbtn = new lib.元件7();
	this._playbtn.name = "_playbtn";
	this._playbtn.setTransform(24.25,23.85);
	new cjs.ButtonHelper(this._playbtn, 0, 1, 2, false, new lib.元件7(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,126,77,0.2)").s().p("Ax6C5Qg9AAgwgkQgLgIgLgLQg2g2AAhMIAAAAQAAhMA2g2QA2g2BNAAMAj1AAAQBMAAA2A2QA3A2AABMIAAAAQAABMg3A2QgKALgLAIQgvAkg+AAgAy0g9QgbAbAAAlQAAAmAbAbQAbAcAnAAMAjtAAAQAcAAAYgQIAEgEIAJgIIAFgFQAXgagBgiQABghgXgaIgFgFIgJgIIgEgEQgYgQgcAAMgjtAAAQgnAAgbAcg");
	this.shape.setTransform(249.3,23.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this._playbtn},{t:this._nextbtn},{t:this._prevbtn},{t:this._pausebtn},{t:this.instance},{t:this._seekBarMc},{t:this._nextbtnShow},{t:this._prevbtnShow}]}).wait(1));

	// 图层_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAzhWIABCtIhnhXg");
	this.shape_1.setTransform(412.2091,23.6164,0.9827,1.1477,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_2.setTransform(412.2091,23.6164,0.9827,1.1477,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_3.setTransform(422.6506,23.6164,0.9827,1.1477,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_4.setTransform(422.6506,23.6164,0.9827,1.1477,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E1E1E1").ss(4,1,1).p("AiqirQhIBHAABkQAABUA0BBQAJALALALQBGBIBlAAQAgAAAegIQAngKAigXQASgNASgSQALgLAIgLQAHgJAGgIQACgDADgEQAig3AAhGQAAhkhHhHQgwgwg9gPQgKgCgJgCQgVgEgWAAQhlAAhGBHg");
	this.shape_5.setTransform(415.75,23.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E1E1E1").s().p("AiqCrIgUgWQg0hAAAhVQABhkBHhHQBGhGBkAAQAXAAAVADIATAEQA9APAwAwQBHBHAABkQAABGgjA3IgEAGIgNASIgTAWQgSARgTAOQghAXgnAKQgeAIghgBQhjAAhHhHg");
	this.shape_6.setTransform(415.75,23.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAzhWIABCtIhnhXg");
	this.shape_7.setTransform(85.5409,23.7531,0.9827,1.1483);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_8.setTransform(85.5409,23.7531,0.9827,1.1483);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_9.setTransform(75.0994,23.7531,0.9827,1.1483);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_10.setTransform(75.0994,23.7531,0.9827,1.1483);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E1E1E1").ss(4,1,1).p("ACsirQBHBHAABkQAABUg0BBQgJALgKALQhIBIhkAAQhLAAg7gpQgUgNgRgSQgLgLgJgLQgGgJgGgIQgCgDgDgEQgig3AAhGQAAhkBHhHQA3g3BKgMQAUgEAWAAQBkAABIBHg");
	this.shape_11.setTransform(82,23.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E1E1E1").s().p("AiGDKQgUgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBHBHAABkQAABVg0BAIgTAWQhIBHhkAAQhLAAg7gog");
	this.shape_12.setTransform(82,23.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2,-3.6,579.6,53.7);
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8D5D7").s().p("Ah5BMQgzggAAgsQAAgrAzggQAyggBHAAQBHAAAzAgQAyAgAAArQAAAsgyAgQgzAghHgBQhHABgyggg");
	this.shape.setTransform(904.65,267.2);

	this.instance = new lib.Bitmap1();
	this.instance.setTransform(905,230,0.666,0.666);

	this.mc1 = new lib.元件17();
	this.mc1.name = "mc1";
	this.mc1.setTransform(355.5,297.5);

	this.pro_bar = new lib.元件3复制2();
	this.pro_bar.name = "pro_bar";
	this.pro_bar.setTransform(-1083.3,736.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8D5D7").s().p("EhXkAeZQhvAAhOhCQhOhCAAhdMAAAg1vQAAhdBOhCQBOhCBvAAMCvJAAAQBvAABOBCQBOBCAABdMAAAA1vQAABdhOBCQhOBChvAAg");
	this.shape_1.setTransform(640.025,360.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4D9375").ss(3,1,1).p("Ag7g5QgVgXgNgeQAAgBgBAAQgEgNgEgMQgUhOAohFQAohGBNgVQBNgUBFAoQBGAoAVBNQAVBOgoBGQgmBAhFAXQgFABgGABQgKACgKADQgkAFgigHIAJAFIggA3IgBAAIhog9IgIgEIAgg3IBoA8ADWhwQgWAngkATQgPAIgSAFQg8AQg2gfQgjgWgUgjQgDgFgCgFQgFgMgDgMQgFgSAAgQQgCgqAWgmQAfg2A7gQQA8gQA1AfQA2AfARA8QAPA8gfA1gAAVA/QAHALACAQQACATgDARQgEASgKAQIhgCpQgUAighANQghANgbgPIgygdQgbgQgGgkQgFgiAUgiIBhiqQAKgQANgMQANgMARgIQAPgGAOAB");
	this.shape_2.setTransform(74.5602,127.9352,1.2693,1.2693);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ADBCC8").s().p("AhKCCQglgWgTgjIgFgKQgGgMgDgMQgEgSgBgQQgCgpAXgmQAeg2A9gQQA6gQA2AfQA1AfARA8QAPA7geA1QgXAngkATQgPAIgRAFQgVAFgTAAQgmAAgjgUg");
	this.shape_3.setTransform(85.2762,104.1647,1.2693,1.2693);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEFEFA").s().p("AjCF2IgygdQgbgQgGgkQgFgiAUgiIBhiqQAKgQANgMQANgMARgIQAPgGAOABIBoA9Ihog9IgIgEIAgg3QgVgXgNgeIgBgBIgIgZQgUhOAohFQAohGBNgVQBNgUBFAoQBGAoAVBNQAVBOgoBGQgmBAhFAXIgLACIgUAFQgkAFgigHIhog8IBoA8IAJAFIggA3IgBAAQAHALACAQQACATgDARQgEASgKAQIhgCpQgUAighANQgQAGgOAAQgQAAgOgIgAAulLQg7AQgfA2QgWAmACAqQAAAQAFASQADAMAFAMIAFAKQAUAjAjAWQA2AfA8gQQASgFAPgIQAkgTAWgnQAfg1gPg8QgRg8g2gfQgkgVgmAAQgTAAgUAGg");
	this.shape_4.setTransform(74.5602,127.9352,1.2693,1.2693);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AArBzIAAiJQAAgXgIgKQgHgKgWAAQgSAAgMAHQgMAHgGARIAACVIg8AAIAAjhIA8AAIAAAbQAKgQASgHQASgIAYAAQAcAAARAJQAQAIAHARQAHARAAAZIAACZg");
	this.shape_5.setTransform(211.775,139.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhBBzIAAjhIA9AAIAAApQAGgTAKgJQALgKAMgEQAMgDAOAAIAFAAIgCA2IgGAAQgOAAgNAEQgNAEgKALQgIAKgEATIAAB/g");
	this.shape_6.setTransform(191.175,139.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZB0QgfAAgVgQQgWgQgLgfIgFgZIgCgbIAAgIQAAgfANgYQAMgYAZgSQALgGALgCQALgDAKAAIAMAAQAUAAAOAHQAPAGAHANIAAACIAAABIABAAIABgHIABgCIA6AAIABAAIABACIgDBKQAAAvADAgQAEAfAGAOIAAADIABAFIgBABIg6AAIgEgIIgIgXIgBAAQgHARgOAIQgOAIgUAAgAglg6QgPAOgIAaIgCANIAAAIQAAAZAIAQQAJAQASAHIALAEIAOABQAPAAALgGQALgGAHgLQADgJACgMQADgNAAgRQgBgXgFgQQgHgPgKgHQgFgEgHgCQgIgCgIAAIgBAAQgVAAgOANg");
	this.shape_7.setTransform(167.9,139.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag1BrQgYgKgNgaQgNgZAAguQAAgsANgaQANgaAZgKQAZgKAiAAQAnAAAWANQAVAMAIAXQAIAWgBAdIgBARIgBAOIiRAJQACAYAPALQAOAMAdAAQAPAAAOgDIAbgFIAUgIIAAAwQgLAGgXAEQgXAFgeAAIgDAAQggAAgYgKgAgfg6QgLANgBAbIBcgIQAAgMgDgKQgDgKgJgGQgJgGgSAAIgCAAQgZAAgLAMg");
	this.shape_8.setTransform(143.4265,140.0761);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhZCRIAAkhIBAAAIAADqIByAAIAAA3g");
	this.shape_9.setTransform(121.3,136.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D8075").s().p("AtvE5IAAmTQgBhcBChBQBBhBBbAAIUlAAQBcAABABBQBBBBAABcIAAGTg");
	this.shape_10.setTransform(153.3548,136.2441,1.0033,1.0309);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(51,51,51,0.098)").s().p("EhkVAEsIAApXMDIrAAAIAAJXg");
	this.shape_11.setTransform(639.9,690.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.pro_bar},{t:this.mc1},{t:this.instance},{t:this.shape}]}).wait(1));

	// 内容
	this._showbar = new lib.元件4();
	this._showbar.name = "_showbar";
	this._showbar.setTransform(640,1019.95);

	this.timeline.addTween(cjs.Tween.get(this._showbar).wait(1));

	// csz
	this.pro_bar_1 = new lib.元件3复制();
	this.pro_bar_1.name = "pro_bar_1";
	this.pro_bar_1.setTransform(352.25,1314.7);

	this.timeline.addTween(cjs.Tween.get(this.pro_bar_1).wait(1));

	// diban
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.8)").s().p("EhkVAEsIAApXMDIrAAAIAAJXg");
	this.shape_12.setTransform(639.9,690.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-387.5,438,2309.7,1286.9);
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
		{src:"images/index_atlas_1.png?1733304171923", id:"index_atlas_1"}
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