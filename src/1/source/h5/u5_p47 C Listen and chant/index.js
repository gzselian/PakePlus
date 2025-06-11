(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,866,681]]}
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


(lib.Timer = function(mode,startPosition,loop,reversed) {
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
		this.time = 0;
		this.interval = null;
		this.isPaused = false;
		this.callback = null; // 用于存储回调函数
		this.pl = 10; // 定时器间隔
		
		this.start = function () {
			if (this.interval) return; // 防止重复启动
			this.interval = setInterval(function () {
				if (!this.isPaused) {
					this.time++;
					//console.log(this.time);
					if (this.callback) {
						this.callback(this.time); // 调用回调函数
					}
				}
			}.bind(this), this.pl); // 使用 bind 绑定 this
		};
		
		this.pause = function () {
			this.isPaused = true;
		};
		
		this.resume = function () {
			this.isPaused = false;
		};
		
		this.stop = function () {
			clearInterval(this.interval);
			this.interval = null;
			this.isPaused = false;
			this.time = 0;
		};
		
		this.setCallback = function (fn) {
			this.callback = fn; // 设置回调函数
		};
		
		//用法
		//const timer = new Timer();
		
		//document.getElementById('startBtn').addEventListener('click', () => timer.start());
		//document.getElementById('pauseBtn').addEventListener('click', () => timer.pause());
		//document.getElementById('pauseBtn').addEventListener('click', () => timer.resume());
		//document.getElementById('stopBtn').addEventListener('click', () => timer.stop());
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#476BB0").s().p("AgzBbIAAixIAwAAIAAAgQAFgPAIgIQAIgHAKgDQAJgDALAAIAEAAIgCArIgEAAQgMAAgKADQgKADgIAJQgGAIgDAOIAABlg");
	this.shape.setTransform(36.775,2.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#476BB0").s().p("AgpBVQgUgIgKgVQgKgUAAgkQAAgjAKgUQAKgUAUgIQAUgJAbABQAeAAARAKQARAKAGARQAGASAAAXIgBANIgBALIhyAHQACATALAJQAMAJAXAAQALAAALgCQAMgCAJgDQAKgCAGgEIAAAmQgJAFgSAEQgSADgYAAIgDAAQgYAAgSgHgAgYgtQgJAJgBAWIBIgGQABgKgDgIQgCgIgHgEQgHgFgOAAQgVAAgJAKg");
	this.shape_1.setTransform(19.5518,2.7251);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#476BB0").s().p("ABUBbIAAhsQABgSgHgIQgGgIgPAAQgOAAgIAGQgJAGgDAOIAAB0IgvAAIAAhsQABgSgHgIQgGgIgOAAQgPAAgHAGQgIAFgDANIAAB2IgwAAIAAixIAwAAIAAAUQAHgMAMgGQANgGASAAQAUAAANAHQALAGAGAMQAIgNANgGQAPgGAUAAQAeAAAPAPQAOAQAAAhIAAB1g");
	this.shape_2.setTransform(-5.65,2.5742);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#476BB0").s().p("AgXB/IAAixIAvAAIAACxgAgPhNQgGgBgDgGQgCgFAAgMQAAgLACgFQADgFAGgCQAFgCAKABQALgBAGACQAFACADAFQACAFAAALQAAAMgCAFQgDAGgFABQgGACgLAAQgKAAgFgCg");
	this.shape_3.setTransform(-25.975,-1.005);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#476BB0").s().p("AgGBqQgNgFgFgNQgGgNAAgXIAAhSIgXAAIAAgmIAXAAIAAgqIAvAAIAAAqIAlAAIAAAmIglAAIAABOQgBAPAFAGQAEAFAMAAIAIAAIAHgBIAAAlIgMABIgMAAIgDAAQgTAAgMgFg");
	this.shape_4.setTransform(-36.6,0.7271);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AnaHbIAAu1IO1AAIAAO1g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Timer, rect = new cjs.Rectangle(-48.5,-47.5,97,95), [rect]);


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


(lib.元件2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_11 = new cjs.Graphics().p("AhoEEIAAoHIB3AAIAAIHg");
	var mask_graphics_12 = new cjs.Graphics().p("AhqEEIAAoHIDVAAIAAIHg");
	var mask_graphics_13 = new cjs.Graphics().p("AiaEEIAAoHIE1AAIAAIHg");
	var mask_graphics_14 = new cjs.Graphics().p("AjJEEIAAoHIGTAAIAAIHg");
	var mask_graphics_15 = new cjs.Graphics().p("Aj5EEIAAoHIHzAAIAAIHg");
	var mask_graphics_16 = new cjs.Graphics().p("AkoEEIAAoHIJRAAIAAIHg");
	var mask_graphics_17 = new cjs.Graphics().p("AlXEEIAAoHIKvAAIAAIHg");
	var mask_graphics_18 = new cjs.Graphics().p("AmGEEIAAoHIMNAAIAAIHg");
	var mask_graphics_19 = new cjs.Graphics().p("Am2EEIAAoHINsAAIAAIHg");
	var mask_graphics_20 = new cjs.Graphics().p("AnlEEIAAoHIPLAAIAAIHg");
	var mask_graphics_21 = new cjs.Graphics().p("AoUEEIAAoHIQpAAIAAIHg");
	var mask_graphics_22 = new cjs.Graphics().p("ApEEEIAAoHISIAAIAAIHg");
	var mask_graphics_23 = new cjs.Graphics().p("ApzEEIAAoHITnAAIAAIHg");
	var mask_graphics_24 = new cjs.Graphics().p("AqiEEIAAoHIVFAAIAAIHg");
	var mask_graphics_25 = new cjs.Graphics().p("Aq+EEIAAoHIV+AAIAAIHg");
	var mask_graphics_26 = new cjs.Graphics().p("ArbEEIAAoHIW3AAIAAIHg");
	var mask_graphics_27 = new cjs.Graphics().p("Ar3EEIAAoHIXvAAIAAIHg");
	var mask_graphics_28 = new cjs.Graphics().p("AsTEEIAAoHIYnAAIAAIHg");
	var mask_graphics_29 = new cjs.Graphics().p("AsvEEIAAoHIZfAAIAAIHg");
	var mask_graphics_30 = new cjs.Graphics().p("AtMEEIAAoHIaZAAIAAIHg");
	var mask_graphics_31 = new cjs.Graphics().p("AtoEEIAAoHIbRAAIAAIHg");
	var mask_graphics_32 = new cjs.Graphics().p("AuEEEIAAoHIcJAAIAAIHg");
	var mask_graphics_33 = new cjs.Graphics().p("AuhEEIAAoHIdDAAIAAIHg");
	var mask_graphics_34 = new cjs.Graphics().p("Au9EEIAAoHId7AAIAAIHg");
	var mask_graphics_35 = new cjs.Graphics().p("AvZEEIAAoHIezAAIAAIHg");
	var mask_graphics_36 = new cjs.Graphics().p("Av1EEIAAoHIfrAAIAAIHg");
	var mask_graphics_37 = new cjs.Graphics().p("AwSEEIAAoHMAgkAAAIAAIHg");
	var mask_graphics_38 = new cjs.Graphics().p("AwuEEIAAoHMAhdAAAIAAIHg");
	var mask_graphics_39 = new cjs.Graphics().p("AxKEEIAAoHMAiVAAAIAAIHg");
	var mask_graphics_40 = new cjs.Graphics().p("AxmEEIAAoHMAjNAAAIAAIHg");
	var mask_graphics_41 = new cjs.Graphics().p("AyDEEIAAoHMAkHAAAIAAIHg");
	var mask_graphics_42 = new cjs.Graphics().p("AyfEEIAAoHMAk/AAAIAAIHg");
	var mask_graphics_43 = new cjs.Graphics().p("Ay7EEIAAoHMAl3AAAIAAIHg");
	var mask_graphics_44 = new cjs.Graphics().p("AzXEEIAAoHMAmvAAAIAAIHg");
	var mask_graphics_45 = new cjs.Graphics().p("Az0EEIAAoHMAnpAAAIAAIHg");
	var mask_graphics_46 = new cjs.Graphics().p("A0QEEIAAoHMAohAAAIAAIHg");
	var mask_graphics_47 = new cjs.Graphics().p("A0sEEIAAoHMApZAAAIAAIHg");
	var mask_graphics_48 = new cjs.Graphics().p("A1IEEIAAoHMAqRAAAIAAIHg");
	var mask_graphics_49 = new cjs.Graphics().p("A1kEEIAAoHMArKAAAIAAIHg");
	var mask_graphics_50 = new cjs.Graphics().p("A2BEEIAAoHMAsDAAAIAAIHg");
	var mask_graphics_51 = new cjs.Graphics().p("A2dEEIAAoHMAs7AAAIAAIHg");
	var mask_graphics_52 = new cjs.Graphics().p("A25EEIAAoHMAtzAAAIAAIHg");
	var mask_graphics_53 = new cjs.Graphics().p("A3VEEIAAoHMAusAAAIAAIHg");
	var mask_graphics_54 = new cjs.Graphics().p("A3yEEIAAoHMAvlAAAIAAIHg");
	var mask_graphics_55 = new cjs.Graphics().p("A4OEEIAAoHMAwdAAAIAAIHg");
	var mask_graphics_56 = new cjs.Graphics().p("A4qEEIAAoHMAxVAAAIAAIHg");
	var mask_graphics_57 = new cjs.Graphics().p("A5HEEIAAoHMAyPAAAIAAIHg");
	var mask_graphics_58 = new cjs.Graphics().p("A5jEEIAAoHMAzHAAAIAAIHg");
	var mask_graphics_59 = new cjs.Graphics().p("A5/EEIAAoHMAz/AAAIAAIHg");
	var mask_graphics_60 = new cjs.Graphics().p("A6bEEIAAoHMA03AAAIAAIHg");
	var mask_graphics_61 = new cjs.Graphics().p("A64EEIAAoHMA1xAAAIAAIHg");
	var mask_graphics_62 = new cjs.Graphics().p("A7UEEIAAoHMA2pAAAIAAIHg");
	var mask_graphics_63 = new cjs.Graphics().p("A7wEEIAAoHMA3hAAAIAAIHg");
	var mask_graphics_64 = new cjs.Graphics().p("A8MEEIAAoHMA4ZAAAIAAIHg");
	var mask_graphics_65 = new cjs.Graphics().p("A8pEEIAAoHMA5SAAAIAAIHg");
	var mask_graphics_66 = new cjs.Graphics().p("A9FEEIAAoHMA6LAAAIAAIHg");
	var mask_graphics_67 = new cjs.Graphics().p("A9hEEIAAoHMA7DAAAIAAIHg");
	var mask_graphics_68 = new cjs.Graphics().p("A99EEIAAoHMA77AAAIAAIHg");
	var mask_graphics_69 = new cjs.Graphics().p("A+aEEIAAoHMA81AAAIAAIHg");
	var mask_graphics_70 = new cjs.Graphics().p("A+2EEIAAoHMA9tAAAIAAIHg");
	var mask_graphics_71 = new cjs.Graphics().p("A/SEEIAAoHMA+lAAAIAAIHg");
	var mask_graphics_72 = new cjs.Graphics().p("A/uEEIAAoHMA/dAAAIAAIHg");
	var mask_graphics_73 = new cjs.Graphics().p("EggKAEEIAAoHMBAVAAAIAAIHg");
	var mask_graphics_74 = new cjs.Graphics().p("EggnAEEIAAoHMBBPAAAIAAIHg");
	var mask_graphics_75 = new cjs.Graphics().p("EghDAEEIAAoHMBCHAAAIAAIHg");
	var mask_graphics_76 = new cjs.Graphics().p("EghfAEEIAAoHMBC/AAAIAAIHg");
	var mask_graphics_77 = new cjs.Graphics().p("Egh7AEEIAAoHMBD4AAAIAAIHg");
	var mask_graphics_78 = new cjs.Graphics().p("EgiYAEEIAAoHMBExAAAIAAIHg");
	var mask_graphics_79 = new cjs.Graphics().p("Egi0AEEIAAoHMBFpAAAIAAIHg");
	var mask_graphics_80 = new cjs.Graphics().p("EgjQAEEIAAoHMBGhAAAIAAIHg");
	var mask_graphics_81 = new cjs.Graphics().p("EgjtAEEIAAoHMBHaAAAIAAIHg");
	var mask_graphics_82 = new cjs.Graphics().p("EgkJAEEIAAoHMBITAAAIAAIHg");
	var mask_graphics_83 = new cjs.Graphics().p("EgklAEEIAAoHMBJLAAAIAAIHg");
	var mask_graphics_84 = new cjs.Graphics().p("EglBAEEIAAoHMBKDAAAIAAIHg");
	var mask_graphics_85 = new cjs.Graphics().p("EgleAEEIAAoHMBK8AAAIAAIHg");
	var mask_graphics_86 = new cjs.Graphics().p("Egl6AEEIAAoHMBL1AAAIAAIHg");
	var mask_graphics_87 = new cjs.Graphics().p("EgmWAEEIAAoHMBMtAAAIAAIHg");
	var mask_graphics_88 = new cjs.Graphics().p("EgmyAEEIAAoHMBNlAAAIAAIHg");
	var mask_graphics_89 = new cjs.Graphics().p("EgnPAEEIAAoHMBOeAAAIAAIHg");
	var mask_graphics_90 = new cjs.Graphics().p("EgnrAEEIAAoHMBPXAAAIAAIHg");
	var mask_graphics_91 = new cjs.Graphics().p("EgoHAEEIAAoHMBQPAAAIAAIHg");
	var mask_graphics_92 = new cjs.Graphics().p("EgojAEEIAAoHMBRHAAAIAAIHg");
	var mask_graphics_93 = new cjs.Graphics().p("EgpAAEEIAAoHMBSAAAAIAAIHg");
	var mask_graphics_94 = new cjs.Graphics().p("EgpcAEEIAAoHMBS5AAAIAAIHg");
	var mask_graphics_95 = new cjs.Graphics().p("Egp4AEEIAAoHMBTxAAAIAAIHg");
	var mask_graphics_96 = new cjs.Graphics().p("EgqUAEEIAAoHMBUpAAAIAAIHg");
	var mask_graphics_97 = new cjs.Graphics().p("EgqwAEEIAAoHMBVhAAAIAAIHg");
	var mask_graphics_98 = new cjs.Graphics().p("EgrNAEEIAAoHMBWbAAAIAAIHg");
	var mask_graphics_99 = new cjs.Graphics().p("EgrpAEEIAAoHMBXTAAAIAAIHg");
	var mask_graphics_100 = new cjs.Graphics().p("EgsFAEEIAAoHMBYLAAAIAAIHg");
	var mask_graphics_101 = new cjs.Graphics().p("EgshAEEIAAoHMBZDAAAIAAIHg");
	var mask_graphics_102 = new cjs.Graphics().p("Egs+AEEIAAoHMBZ9AAAIAAIHg");
	var mask_graphics_103 = new cjs.Graphics().p("EgtaAEEIAAoHMBa1AAAIAAIHg");
	var mask_graphics_104 = new cjs.Graphics().p("Egt2AEEIAAoHMBbtAAAIAAIHg");
	var mask_graphics_105 = new cjs.Graphics().p("EguTAEEIAAoHMBcnAAAIAAIHg");
	var mask_graphics_106 = new cjs.Graphics().p("EguvAEEIAAoHMBdfAAAIAAIHg");
	var mask_graphics_107 = new cjs.Graphics().p("EgvLAEEIAAoHMBeXAAAIAAIHg");
	var mask_graphics_108 = new cjs.Graphics().p("EgvnAEEIAAoHMBfPAAAIAAIHg");
	var mask_graphics_109 = new cjs.Graphics().p("EgwEAEEIAAoHMBgIAAAIAAIHg");
	var mask_graphics_110 = new cjs.Graphics().p("EgwgAEEIAAoHMBhBAAAIAAIHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_graphics_11,x:-10.475,y:17.05}).wait(1).to({graphics:mask_graphics_12,x:-10.175,y:17.05}).wait(1).to({graphics:mask_graphics_13,x:-5.425,y:17.1}).wait(1).to({graphics:mask_graphics_14,x:-0.65,y:17.1}).wait(1).to({graphics:mask_graphics_15,x:4.1,y:17.1}).wait(1).to({graphics:mask_graphics_16,x:8.875,y:17.15}).wait(1).to({graphics:mask_graphics_17,x:13.65,y:17.15}).wait(1).to({graphics:mask_graphics_18,x:18.375,y:17.15}).wait(1).to({graphics:mask_graphics_19,x:23.15,y:17.15}).wait(1).to({graphics:mask_graphics_20,x:27.925,y:17.2}).wait(1).to({graphics:mask_graphics_21,x:32.675,y:17.2}).wait(1).to({graphics:mask_graphics_22,x:37.45,y:17.2}).wait(1).to({graphics:mask_graphics_23,x:42.2,y:17.25}).wait(1).to({graphics:mask_graphics_24,x:46.975,y:17.25}).wait(1).to({graphics:mask_graphics_25,x:49.8,y:17.25}).wait(1).to({graphics:mask_graphics_26,x:52.675,y:17.25}).wait(1).to({graphics:mask_graphics_27,x:55.5,y:17.3}).wait(1).to({graphics:mask_graphics_28,x:58.325,y:17.3}).wait(1).to({graphics:mask_graphics_29,x:61.2,y:17.3}).wait(1).to({graphics:mask_graphics_30,x:64.025,y:17.3}).wait(1).to({graphics:mask_graphics_31,x:66.9,y:17.3}).wait(1).to({graphics:mask_graphics_32,x:69.725,y:17.3}).wait(1).to({graphics:mask_graphics_33,x:72.55,y:17.35}).wait(1).to({graphics:mask_graphics_34,x:75.425,y:17.35}).wait(1).to({graphics:mask_graphics_35,x:78.25,y:17.35}).wait(1).to({graphics:mask_graphics_36,x:81.1,y:17.35}).wait(1).to({graphics:mask_graphics_37,x:83.95,y:17.35}).wait(1).to({graphics:mask_graphics_38,x:86.775,y:17.4}).wait(1).to({graphics:mask_graphics_39,x:89.65,y:17.4}).wait(1).to({graphics:mask_graphics_40,x:92.475,y:17.4}).wait(1).to({graphics:mask_graphics_41,x:95.3,y:17.4}).wait(1).to({graphics:mask_graphics_42,x:98.175,y:17.4}).wait(1).to({graphics:mask_graphics_43,x:101,y:17.45}).wait(1).to({graphics:mask_graphics_44,x:103.825,y:17.45}).wait(1).to({graphics:mask_graphics_45,x:106.7,y:17.45}).wait(1).to({graphics:mask_graphics_46,x:109.525,y:17.45}).wait(1).to({graphics:mask_graphics_47,x:112.4,y:17.45}).wait(1).to({graphics:mask_graphics_48,x:115.225,y:17.45}).wait(1).to({graphics:mask_graphics_49,x:118.05,y:17.5}).wait(1).to({graphics:mask_graphics_50,x:120.925,y:17.5}).wait(1).to({graphics:mask_graphics_51,x:123.75,y:17.5}).wait(1).to({graphics:mask_graphics_52,x:126.575,y:17.5}).wait(1).to({graphics:mask_graphics_53,x:129.45,y:17.5}).wait(1).to({graphics:mask_graphics_54,x:132.275,y:17.55}).wait(1).to({graphics:mask_graphics_55,x:135.125,y:17.55}).wait(1).to({graphics:mask_graphics_56,x:137.975,y:17.55}).wait(1).to({graphics:mask_graphics_57,x:140.8,y:17.55}).wait(1).to({graphics:mask_graphics_58,x:143.675,y:17.55}).wait(1).to({graphics:mask_graphics_59,x:146.5,y:17.6}).wait(1).to({graphics:mask_graphics_60,x:149.325,y:17.6}).wait(1).to({graphics:mask_graphics_61,x:152.2,y:17.6}).wait(1).to({graphics:mask_graphics_62,x:155.025,y:17.6}).wait(1).to({graphics:mask_graphics_63,x:157.9,y:17.6}).wait(1).to({graphics:mask_graphics_64,x:160.725,y:17.6}).wait(1).to({graphics:mask_graphics_65,x:163.55,y:17.65}).wait(1).to({graphics:mask_graphics_66,x:166.425,y:17.65}).wait(1).to({graphics:mask_graphics_67,x:169.25,y:17.65}).wait(1).to({graphics:mask_graphics_68,x:172.075,y:17.65}).wait(1).to({graphics:mask_graphics_69,x:174.95,y:17.65}).wait(1).to({graphics:mask_graphics_70,x:177.775,y:17.7}).wait(1).to({graphics:mask_graphics_71,x:180.6,y:17.7}).wait(1).to({graphics:mask_graphics_72,x:183.475,y:17.7}).wait(1).to({graphics:mask_graphics_73,x:186.3,y:17.7}).wait(1).to({graphics:mask_graphics_74,x:189.175,y:17.7}).wait(1).to({graphics:mask_graphics_75,x:192,y:17.7}).wait(1).to({graphics:mask_graphics_76,x:194.825,y:17.75}).wait(1).to({graphics:mask_graphics_77,x:197.7,y:17.75}).wait(1).to({graphics:mask_graphics_78,x:200.525,y:17.75}).wait(1).to({graphics:mask_graphics_79,x:203.375,y:17.75}).wait(1).to({graphics:mask_graphics_80,x:206.225,y:17.75}).wait(1).to({graphics:mask_graphics_81,x:209.05,y:17.8}).wait(1).to({graphics:mask_graphics_82,x:211.925,y:17.8}).wait(1).to({graphics:mask_graphics_83,x:214.75,y:17.8}).wait(1).to({graphics:mask_graphics_84,x:217.575,y:17.8}).wait(1).to({graphics:mask_graphics_85,x:220.45,y:17.8}).wait(1).to({graphics:mask_graphics_86,x:223.275,y:17.85}).wait(1).to({graphics:mask_graphics_87,x:226.1,y:17.85}).wait(1).to({graphics:mask_graphics_88,x:228.975,y:17.85}).wait(1).to({graphics:mask_graphics_89,x:231.8,y:17.85}).wait(1).to({graphics:mask_graphics_90,x:234.675,y:17.85}).wait(1).to({graphics:mask_graphics_91,x:237.5,y:17.85}).wait(1).to({graphics:mask_graphics_92,x:240.325,y:17.9}).wait(1).to({graphics:mask_graphics_93,x:243.2,y:17.9}).wait(1).to({graphics:mask_graphics_94,x:246.025,y:17.9}).wait(1).to({graphics:mask_graphics_95,x:248.85,y:17.9}).wait(1).to({graphics:mask_graphics_96,x:251.725,y:17.9}).wait(1).to({graphics:mask_graphics_97,x:254.55,y:17.95}).wait(1).to({graphics:mask_graphics_98,x:257.4,y:17.95}).wait(1).to({graphics:mask_graphics_99,x:260.25,y:17.95}).wait(1).to({graphics:mask_graphics_100,x:263.075,y:17.95}).wait(1).to({graphics:mask_graphics_101,x:265.95,y:17.95}).wait(1).to({graphics:mask_graphics_102,x:268.775,y:18}).wait(1).to({graphics:mask_graphics_103,x:271.6,y:18}).wait(1).to({graphics:mask_graphics_104,x:274.475,y:18}).wait(1).to({graphics:mask_graphics_105,x:277.3,y:18}).wait(1).to({graphics:mask_graphics_106,x:280.175,y:18}).wait(1).to({graphics:mask_graphics_107,x:283,y:18}).wait(1).to({graphics:mask_graphics_108,x:285.825,y:18.05}).wait(1).to({graphics:mask_graphics_109,x:288.7,y:18.05}).wait(1).to({graphics:mask_graphics_110,x:291.525,y:18.05}).wait(20));

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AHvgYIAdgDIAAAJQAEgEAFgCQAFgDAHAAQAHAAAIAEQAIAEAEAGQAFAFACAIQADAHAAAHIAFgGQADgDAGgCQAFgCAGAAQAHAAAEACIAIADIAAgDQAAgHgEgBQgFgCgGAAIgMABIgLADIAGgWIAdgEQAHAAAGACQAHABAFAEQAFAEADAGQADAGgBAHIgBA0IgcADIAAgJIgBAAQgEAFgFACQgHACgGAAIgKgCQgFgCgEgEQgEgDgCgGIgCgHQgDAHgFAFQgFAHgHAEQgHADgJAAIgJgBQgEgBgFgFIABAcIgeADgAJjAVIgIACQgDAEAAADQABADADABQAEACAFgBQAGgBACgDQADgCAAgDQgBgDgDgBQgCgCgDAAIgEABgAIUADQgGADgDAGQgCAFACAFIAEADQAAABABAAQAAABABAAQAAAAABAAQABABAAAAIAGAAIAGgCQAGgCACgGQADgFgDgFQgCgEgFgCIgEgBQgEAAgEACgASWBPIAMghIgbhEIAfgDIAJAdIABAAIAGgdIAdACIgeBpgAzAgVIgSACIABgjIBLgGIgEAhIgQADIAABNIgoAFgAPuA3QgGgDgGgGQgFgGgDgHIgCgHQgDAJgEAGQgFAFgIAFQgJAEgIACQgLABgHgCQgJgCgGgFQgHgFgFgHQgDgFgCgMQgCgJADgJQACgHAFgHQAFgGAIgEQAGgEALgCQAIgBAKACQAHACAIAEQAHAFAEAHQAEAGABAGIABgEQADgHAFgGQAFgHAHgDQAHgEAJAAQAGAAADACQAEAAAEAEIgBgiIAggCIgBBxIgbACIAAgIQgFAEgFACQgGACgFABQgIAAgGgDgAP9ADIgGADIgDAFIgBAEIABAFQAAACACACIAEADIAGABQACAAAEgBQACAAADgDIADgEIABgFIAAgFIgDgEIgEgCQgCgCgDAAgAOnACQgHACgCAGQgCAEACAGQADAFAFABQAFADAGgEQAHgCACgFQADgFgCgGQgDgEgFgCIgEgBIgIACgANeAzQgHgGAAgOIAAggIgIAAIABgYIAGAAIAAgJIAfgOIAAAXIALgCIgBAaIgKAAIAAAYIABAGIAGABIADAAIACgBIgFAcIgJABQgNgBgIgGgAL0AWIABAhIgdADIgBhxIAggCIgDA6IAAAAIANgcIAfADIgSAjIAVAgIgdAPgAD7AzQgIgGAAgOIAAggIgHAAIAAgYIAHAAIAAgJIAegOIAAAXIAMgCIgCAaIgJAAIAAAYQAAAEABACIAFABIADAAIACgBIgFAcIgIABQgNgBgIgGgACeAGQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgFgCQgDAAgCACQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIAAA0IgdgDIgChOIAegDIAAALIAAAAQAEgGAGgCQAFgDAFAAQAFAAAFACQAGACACAEQADAEACAFIABAKIAAA2IgeADgABIgWIAggDIgCBQIgeADgAgKAzQgHgGAAgOIAAggIgIAAIABgYIAHAAIAAgJIAdgOIAAAXIALgCIgBAaIgKAAIAAAYIABAGIAGABIADAAIACgBIgFAcIgJABQgMgBgIgGgAlWAzQgIgGAAgOIAAggIgHAAIABgYIAGAAIAAgJIAfgOIAAAXIALgCIgCAaIgJAAIAAAYQAAAEABACIAFABIADAAIACgBIgEAcIgJABQgNgBgIgGgAmMgWIAggDIgCBQIgeADgAs3A3IAAgbIAIACIAIABIAFAAIADgBIADgBQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBIgMgEIgHgEQgDgDgCgEQgCgEAAgGQAAgGACgEIAFgIQAFgDAGgCQAGgDAJAAIAHAAIARAEIAAAYIgGgCIgKAAIgEAAIgDABIgCACQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAIAMAFIAIAEQADADACAEQACADAAAIQAAAIgDAEQgDAGgGACQgFADgHACQgHABgIABgAGJA2QgIgEgGgFQgGgGgDgHQgDgHAAgJQAAgMADgGQADgIAGgGQAHgFAHgDQAHgEAJAAQANABALAGQALAIAFALIgqAfIAEABIAEABQAIgBADgCQAFgDADgCIAOAXQgJAGgIADQgKACgLAAQgKAAgHgDgAGUgDIgEADIgDAEIgBAGIAAADIABACIAVgPIgEgDIgFAAgAFOAGQAAAAAAgBQgBAAAAgBQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABQgBAAAAABQAAABAAAAQAAABAAAAIAAAzIgdgCIgBhuIAfgCIgBAnIAAAAQAEgEAEgCQAEgCAHgBQAGABAEACQAFACADADQADAFABAEQACAFAAAGIgBA2IgdACgAkaA2QgIgEgGgFQgGgGgDgHQgDgHAAgJQAAgKADgIQAEgHAFgHQAHgFAHgDQAHgEAJAAQANABALAGQALAIAFALIgqAfIAEABIAEABQAIgBADgCQAFgDADgCIAOAXQgIAFgJAEQgKACgLAAQgJAAgIgDgAkPgDIgEADIgDAEIgBAGIABAFIAVgPIgEgDIgFAAgAm0AGQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABIAAAzIgdgCIgBhuIAfgCIgBAnIABAAQACgDAGgDQAEgCAGgBQAHABAEACQAEACADADQADAFACAEQABAFAAAGIgBA2IgdACgAuUA2QgIgEgGgFQgGgGgDgHQgDgIAAgIQAAgLADgHQAEgIAGgGQAFgFAIgDQAIgEAIAAQAOABALAGQALAJAEAKIgqAfIAEABIAFABQAHgBAEgCQAFgDADgCIANAXQgIAFgJAEQgKACgLAAQgJAAgIgDgAuJgDIgEADIgDAEIgBAGIABADIABACIAVgPIgFgDIgFAAgAwfA2QgHgEgGgFQgHgGgCgHQgDgIAAgIQAAgLADgHQADgHAGgHQAGgFAHgDQAIgEAJAAQAOABAKAGQAKAIAFALIgqAfIAEABIAFABQAIgBADgCIAIgFIAOAXQgIAFgKAEQgKACgKAAQgJAAgJgDgAwUgDIgEADIgCAEIgBAGIAAADIABACIAVgPIgEgDIgGAAgAxaAGQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAAzIgegCIgBhuIAggCIgBAnQADgEAFgCQAEgCAGgBQAHABAEACQAEACADADQAEAFABAEQACAFAAAGIgBA2IgeACgAKcgYIAdgDIAAAPQAEgPARAAIAHAAIgHAeIgFAAQgHgBgDAEQgFAEAAAIIAAAkIgdADgAifA1QgHgDgHgGQgFgFgEgIQgDgHAAgKQAAgKADgHQADgIAHgFQAFgGAKgDQAJgDAJgBQAJABAIADIANAGIgTAYIgEgCIgGgCIgFAAIgEABIgEADIgDAEIgBAFQAAADABACQADAGAFABQAFAAAGgCIAHgDIATAZIgHAFIgIAEIgJABIgIABQgJAAgJgEgAobARIgIAlIgcADIgWhSIAfgDIAIAmIABAAIAIgjIAWgCIAIAmIAAAAIAIgnIAfADIgWBPIgdADgAvjgYIAcgDIAAAPIABAAQAEgPARAAIAHAAIgIAeIgEAAQgHgBgEAEQgEAEAAAIIAAAkIgdADgARmAvQgEAFgGACIgMACIgLgCQgFgCgEgEQgDgDgDgGQgCgGAAgGQAAgFACgGQACgEAEgEQADgDAGgCQAFgCAHAAQAHAAADACIAIADIAAgDQAAgHgEgBQgFgCgGAAQgGAAgGABIgKADIAFgWIAdgEQAHAAAGACQAIABAEAEQAFAEADAGQADAFAAAIIgCA0IgcADgARUAVQgFAAgDACQgDAEABADQABADADABQACACAHgBQAFgBADgDQACgCAAgDQgBgDgDgBQgBgCgEAAIgEABgAg+AvQgDAFgHACQgHACgFAAIgLgCQgFgCgEgEQgDgDgDgGQgCgEAAgIQAAgGACgFQACgFAFgDQADgDAGgCQAEgCAHAAQAHAAAEACIAHADIAAgDQAAgHgEgBQgFgCgGAAQgGAAgFABIgLADIAFgWIAdgEQAIAAAGACQAGABAFAEQAFAEADAGQADAGAAAHIgCA0IgcADgAhPAVQgFAAgDACQgDAEAAADQAAADAEABQADACAGgBQAFgBADgDQADgCgBgDQgBgDgCgBQgCgCgEAAIgDABgAqfAvIgBAAQgEAFgFACQgHACgGAAIgKgCQgFgCgEgEQgEgDgCgGQgCgEAAgIQAAgGACgFQACgEAEgEQADgDAGgCQAFgCAGAAQAHAAAEACIAIADIAAgDQAAgHgEgBQgFgCgGAAIgMABIgLADIAGgWIAdgEQAHAAAGACQAHABAFAEQAFAEADAGQADAGgBAHIgBA0IgcADgAqxAVIgIACQgDAEAAADQABADADABQAEACAFgBQAGgBACgDQADgCAAgDQgBgDgDgBQgCgCgDAAIgEABgABIg6IAggBIgBAZIgfACgAmMg6IAggBIgBAZIgfACgAtVg1IAMgcIALAJIgRAVg");
	this.shape.setTransform(290.264,19.2469,2.35,2.35);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(11).to({_off:false},0).wait(119));

	// 图层_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008379").s().p("AHvgYIAdgDIAAAJQAEgEAFgCQAFgDAHAAQAHAAAIAEQAIAEAEAGQAFAFACAIQADAHAAAHIAFgGQADgDAGgCQAFgCAGAAQAHAAAEACIAIADIAAgDQAAgHgEgBQgFgCgGAAIgMABIgLADIAGgWIAdgEQAHAAAGACQAHABAFAEQAFAEADAGQADAGgBAHIgBA0IgcADIAAgJIgBAAQgEAFgFACQgHACgGAAIgKgCQgFgCgEgEQgEgDgCgGIgCgHQgDAHgFAFQgFAHgHAEQgHADgJAAIgJgBQgEgBgFgFIABAcIgeADgAJjAVIgIACQgDAEAAADQABADADABQAEACAFgBQAGgBACgDQADgCAAgDQgBgDgDgBQgCgCgDAAIgEABgAIUADQgGADgDAGQgCAFACAFIAEADQAAABABAAQAAABABAAQAAAAABAAQABABAAAAIAGAAIAGgCQAGgCACgGQADgFgDgFQgCgEgFgCIgEgBQgEAAgEACgASWBPIAMghIgbhEIAfgDIAJAdIABAAIAGgdIAdACIgeBpgAzAgVIgSACIABgjIBLgGIgEAhIgQADIAABNIgoAFgAPuA3QgGgDgGgGQgFgGgDgHIgCgHQgDAJgEAGQgFAFgIAFQgJAEgIACQgLABgHgCQgJgCgGgFQgHgFgFgHQgDgFgCgMQgCgJADgJQACgHAFgHQAFgGAIgEQAGgEALgCQAIgBAKACQAHACAIAEQAHAFAEAHQAEAGABAGIABgEQADgHAFgGQAFgHAHgDQAHgEAJAAQAGAAADACQAEAAAEAEIgBgiIAggCIgBBxIgbACIAAgIQgFAEgFACQgGACgFABQgIAAgGgDgAP9ADIgGADIgDAFIgBAEIABAFQAAACACACIAEADIAGABQACAAAEgBQACAAADgDIADgEIABgFIAAgFIgDgEIgEgCQgCgCgDAAgAOnACQgHACgCAGQgCAEACAGQADAFAFABQAFADAGgEQAHgCACgFQADgFgCgGQgDgEgFgCIgEgBIgIACgANeAzQgHgGAAgOIAAggIgIAAIABgYIAGAAIAAgJIAfgOIAAAXIALgCIgBAaIgKAAIAAAYIABAGIAGABIADAAIACgBIgFAcIgJABQgNgBgIgGgAL0AWIABAhIgdADIgBhxIAggCIgDA6IAAAAIANgcIAfADIgSAjIAVAgIgdAPgAD7AzQgIgGAAgOIAAggIgHAAIAAgYIAHAAIAAgJIAegOIAAAXIAMgCIgCAaIgJAAIAAAYQAAAEABACIAFABIADAAIACgBIgFAcIgIABQgNgBgIgGgACeAGQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgFgCQgDAAgCACQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIAAA0IgdgDIgChOIAegDIAAALIAAAAQAEgGAGgCQAFgDAFAAQAFAAAFACQAGACACAEQADAEACAFIABAKIAAA2IgeADgABIgWIAggDIgCBQIgeADgAgKAzQgHgGAAgOIAAggIgIAAIABgYIAHAAIAAgJIAdgOIAAAXIALgCIgBAaIgKAAIAAAYIABAGIAGABIADAAIACgBIgFAcIgJABQgMgBgIgGgAlWAzQgIgGAAgOIAAggIgHAAIABgYIAGAAIAAgJIAfgOIAAAXIALgCIgCAaIgJAAIAAAYQAAAEABACIAFABIADAAIACgBIgEAcIgJABQgNgBgIgGgAmMgWIAggDIgCBQIgeADgAs3A3IAAgbIAIACIAIABIAFAAIADgBIADgBQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAAAgBgBIgMgEIgHgEQgDgDgCgEQgCgEAAgGQAAgGACgEIAFgIQAFgDAGgCQAGgDAJAAIAHAAIARAEIAAAYIgGgCIgKAAIgEAAIgDABIgCACQAAAAAAABQABAAAAABQAAAAABABQAAAAABAAIAMAFIAIAEQADADACAEQACADAAAIQAAAIgDAEQgDAGgGACQgFADgHACQgHABgIABgAGJA2QgIgEgGgFQgGgGgDgHQgDgHAAgJQAAgMADgGQADgIAGgGQAHgFAHgDQAHgEAJAAQANABALAGQALAIAFALIgqAfIAEABIAEABQAIgBADgCQAFgDADgCIAOAXQgJAGgIADQgKACgLAAQgKAAgHgDgAGUgDIgEADIgDAEIgBAGIAAADIABACIAVgPIgEgDIgFAAgAFOAGQAAAAAAgBQgBAAAAgBQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABQgBAAAAABQAAABAAAAQAAABAAAAIAAAzIgdgCIgBhuIAfgCIgBAnIAAAAQAEgEAEgCQAEgCAHgBQAGABAEACQAFACADADQADAFABAEQACAFAAAGIgBA2IgdACgAkaA2QgIgEgGgFQgGgGgDgHQgDgHAAgJQAAgKADgIQAEgHAFgHQAHgFAHgDQAHgEAJAAQANABALAGQALAIAFALIgqAfIAEABIAEABQAIgBADgCQAFgDADgCIAOAXQgIAFgJAEQgKACgLAAQgJAAgIgDgAkPgDIgEADIgDAEIgBAGIABAFIAVgPIgEgDIgFAAgAm0AGQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABIAAAzIgdgCIgBhuIAfgCIgBAnIABAAQACgDAGgDQAEgCAGgBQAHABAEACQAEACADADQADAFACAEQABAFAAAGIgBA2IgdACgAuUA2QgIgEgGgFQgGgGgDgHQgDgIAAgIQAAgLADgHQAEgIAGgGQAFgFAIgDQAIgEAIAAQAOABALAGQALAJAEAKIgqAfIAEABIAFABQAHgBAEgCQAFgDADgCIANAXQgIAFgJAEQgKACgLAAQgJAAgIgDgAuJgDIgEADIgDAEIgBAGIABADIABACIAVgPIgFgDIgFAAgAwfA2QgHgEgGgFQgHgGgCgHQgDgIAAgIQAAgLADgHQADgHAGgHQAGgFAHgDQAIgEAJAAQAOABAKAGQAKAIAFALIgqAfIAEABIAFABQAIgBADgCIAIgFIAOAXQgIAFgKAEQgKACgKAAQgJAAgJgDgAwUgDIgEADIgCAEIgBAGIAAADIABACIAVgPIgEgDIgGAAgAxaAGQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAAzIgegCIgBhuIAggCIgBAnQADgEAFgCQAEgCAGgBQAHABAEACQAEACADADQAEAFABAEQACAFAAAGIgBA2IgeACgAKcgYIAdgDIAAAPQAEgPARAAIAHAAIgHAeIgFAAQgHgBgDAEQgFAEAAAIIAAAkIgdADgAifA1QgHgDgHgGQgFgFgEgIQgDgHAAgKQAAgKADgHQADgIAHgFQAFgGAKgDQAJgDAJgBQAJABAIADIANAGIgTAYIgEgCIgGgCIgFAAIgEABIgEADIgDAEIgBAFQAAADABACQADAGAFABQAFAAAGgCIAHgDIATAZIgHAFIgIAEIgJABIgIABQgJAAgJgEgAobARIgIAlIgcADIgWhSIAfgDIAIAmIABAAIAIgjIAWgCIAIAmIAAAAIAIgnIAfADIgWBPIgdADgAvjgYIAcgDIAAAPIABAAQAEgPARAAIAHAAIgIAeIgEAAQgHgBgEAEQgEAEAAAIIAAAkIgdADgARmAvQgEAFgGACIgMACIgLgCQgFgCgEgEQgDgDgDgGQgCgGAAgGQAAgFACgGQACgEAEgEQADgDAGgCQAFgCAHAAQAHAAADACIAIADIAAgDQAAgHgEgBQgFgCgGAAQgGAAgGABIgKADIAFgWIAdgEQAHAAAGACQAIABAEAEQAFAEADAGQADAFAAAIIgCA0IgcADgARUAVQgFAAgDACQgDAEABADQABADADABQACACAHgBQAFgBADgDQACgCAAgDQgBgDgDgBQgBgCgEAAIgEABgAg+AvQgDAFgHACQgHACgFAAIgLgCQgFgCgEgEQgDgDgDgGQgCgEAAgIQAAgGACgFQACgFAFgDQADgDAGgCQAEgCAHAAQAHAAAEACIAHADIAAgDQAAgHgEgBQgFgCgGAAQgGAAgFABIgLADIAFgWIAdgEQAIAAAGACQAGABAFAEQAFAEADAGQADAGAAAHIgCA0IgcADgAhPAVQgFAAgDACQgDAEAAADQAAADAEABQADACAGgBQAFgBADgDQADgCgBgDQgBgDgCgBQgCgCgEAAIgDABgAqfAvIgBAAQgEAFgFACQgHACgGAAIgKgCQgFgCgEgEQgEgDgCgGQgCgEAAgIQAAgGACgFQACgEAEgEQADgDAGgCQAFgCAGAAQAHAAAEACIAIADIAAgDQAAgHgEgBQgFgCgGAAIgMABIgLADIAGgWIAdgEQAHAAAGACQAHABAFAEQAFAEADAGQADAGgBAHIgBA0IgcADgAqxAVIgIACQgDAEAAADQABADADABQAEACAFgBQAGgBACgDQADgCAAgDQgBgDgDgBQgCgCgDAAIgEABgABIg6IAggBIgBAZIgfACgAmMg6IAggBIgBAZIgfACgAtVg1IAMgcIALAJIgRAVg");
	this.shape_1.setTransform(290.264,19.2469,2.35,2.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(130));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,580.6,38.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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

	// 图层_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1009 = new cjs.Graphics().p("EgBcAgoIAAmlIB4AAIAAGlg");
	var mask_graphics_1010 = new cjs.Graphics().p("AhWDSIAAmjICtAAIAAGjg");
	var mask_graphics_1011 = new cjs.Graphics().p("AhxDSIAAmjIDjAAIAAGjg");
	var mask_graphics_1012 = new cjs.Graphics().p("AiMDSIAAmjIEZAAIAAGjg");
	var mask_graphics_1013 = new cjs.Graphics().p("AimDSIAAmjIFNAAIAAGjg");
	var mask_graphics_1014 = new cjs.Graphics().p("AjBDSIAAmjIGDAAIAAGjg");
	var mask_graphics_1015 = new cjs.Graphics().p("AjcDSIAAmjIG5AAIAAGjg");
	var mask_graphics_1016 = new cjs.Graphics().p("Aj3DSIAAmjIHvAAIAAGjg");
	var mask_graphics_1017 = new cjs.Graphics().p("AkSDSIAAmjIIkAAIAAGjg");
	var mask_graphics_1018 = new cjs.Graphics().p("AksDSIAAmjIJZAAIAAGjg");
	var mask_graphics_1019 = new cjs.Graphics().p("AlHDSIAAmjIKPAAIAAGjg");
	var mask_graphics_1020 = new cjs.Graphics().p("AliDSIAAmjILFAAIAAGjg");
	var mask_graphics_1021 = new cjs.Graphics().p("Al9DSIAAmjIL7AAIAAGjg");
	var mask_graphics_1022 = new cjs.Graphics().p("AmYDSIAAmjIMwAAIAAGjg");
	var mask_graphics_1023 = new cjs.Graphics().p("AmyDSIAAmjINlAAIAAGjg");
	var mask_graphics_1024 = new cjs.Graphics().p("AnNDSIAAmjIObAAIAAGjg");
	var mask_graphics_1025 = new cjs.Graphics().p("AnoDSIAAmjIPRAAIAAGjg");
	var mask_graphics_1026 = new cjs.Graphics().p("AoDDSIAAmjIQHAAIAAGjg");
	var mask_graphics_1027 = new cjs.Graphics().p("AoeDSIAAmjIQ9AAIAAGjg");
	var mask_graphics_1028 = new cjs.Graphics().p("Ao5DSIAAmjIRzAAIAAGjg");
	var mask_graphics_1029 = new cjs.Graphics().p("ApTDSIAAmjISnAAIAAGjg");
	var mask_graphics_1030 = new cjs.Graphics().p("ApuDSIAAmjITdAAIAAGjg");
	var mask_graphics_1031 = new cjs.Graphics().p("AqJDSIAAmjIUTAAIAAGjg");
	var mask_graphics_1032 = new cjs.Graphics().p("AqkDSIAAmjIVJAAIAAGjg");
	var mask_graphics_1033 = new cjs.Graphics().p("Aq/DSIAAmjIV/AAIAAGjg");
	var mask_graphics_1034 = new cjs.Graphics().p("ArZDSIAAmjIWzAAIAAGjg");
	var mask_graphics_1035 = new cjs.Graphics().p("Ar0DSIAAmjIXpAAIAAGjg");
	var mask_graphics_1036 = new cjs.Graphics().p("AsPDSIAAmjIYfAAIAAGjg");
	var mask_graphics_1037 = new cjs.Graphics().p("AsqDSIAAmjIZVAAIAAGjg");
	var mask_graphics_1038 = new cjs.Graphics().p("AtFDSIAAmjIaLAAIAAGjg");
	var mask_graphics_1039 = new cjs.Graphics().p("AtfDSIAAmjIa/AAIAAGjg");
	var mask_graphics_1040 = new cjs.Graphics().p("At6DSIAAmjIb1AAIAAGjg");
	var mask_graphics_1041 = new cjs.Graphics().p("AuVDSIAAmjIcrAAIAAGjg");
	var mask_graphics_1042 = new cjs.Graphics().p("AuwDSIAAmjIdhAAIAAGjg");
	var mask_graphics_1043 = new cjs.Graphics().p("AvLDSIAAmjIeWAAIAAGjg");
	var mask_graphics_1044 = new cjs.Graphics().p("AvmDSIAAmjIfMAAIAAGjg");
	var mask_graphics_1045 = new cjs.Graphics().p("AwADSIAAmjMAgBAAAIAAGjg");
	var mask_graphics_1046 = new cjs.Graphics().p("AwbDSIAAmjMAg3AAAIAAGjg");
	var mask_graphics_1047 = new cjs.Graphics().p("Aw2DSIAAmjMAhtAAAIAAGjg");
	var mask_graphics_1048 = new cjs.Graphics().p("AxRDSIAAmjMAijAAAIAAGjg");
	var mask_graphics_1049 = new cjs.Graphics().p("AxsDSIAAmjMAjYAAAIAAGjg");
	var mask_graphics_1050 = new cjs.Graphics().p("AyGDSIAAmjMAkNAAAIAAGjg");
	var mask_graphics_1051 = new cjs.Graphics().p("AyhDSIAAmjMAlDAAAIAAGjg");
	var mask_graphics_1052 = new cjs.Graphics().p("Ay8DSIAAmjMAl5AAAIAAGjg");
	var mask_graphics_1053 = new cjs.Graphics().p("AzXDSIAAmjMAmvAAAIAAGjg");
	var mask_graphics_1054 = new cjs.Graphics().p("AzyDSIAAmjMAnlAAAIAAGjg");
	var mask_graphics_1055 = new cjs.Graphics().p("A0MDSIAAmjMAoZAAAIAAGjg");
	var mask_graphics_1056 = new cjs.Graphics().p("A0nDSIAAmjMApPAAAIAAGjg");
	var mask_graphics_1057 = new cjs.Graphics().p("A1CDSIAAmjMAqFAAAIAAGjg");
	var mask_graphics_1058 = new cjs.Graphics().p("A1dDSIAAmjMAq7AAAIAAGjg");
	var mask_graphics_1059 = new cjs.Graphics().p("A14DSIAAmjMArxAAAIAAGjg");
	var mask_graphics_1060 = new cjs.Graphics().p("A2TDSIAAmjMAsnAAAIAAGjg");
	var mask_graphics_1061 = new cjs.Graphics().p("A2tDSIAAmjMAtbAAAIAAGjg");
	var mask_graphics_1062 = new cjs.Graphics().p("A3IDSIAAmjMAuRAAAIAAGjg");
	var mask_graphics_1063 = new cjs.Graphics().p("A3jDSIAAmjMAvHAAAIAAGjg");
	var mask_graphics_1064 = new cjs.Graphics().p("A3+DSIAAmjMAv8AAAIAAGjg");
	var mask_graphics_1065 = new cjs.Graphics().p("A4ZDSIAAmjMAwyAAAIAAGjg");
	var mask_graphics_1066 = new cjs.Graphics().p("A4zDSIAAmjMAxnAAAIAAGjg");
	var mask_graphics_1067 = new cjs.Graphics().p("A5ODSIAAmjMAydAAAIAAGjg");
	var mask_graphics_1068 = new cjs.Graphics().p("A5pDSIAAmjMAzTAAAIAAGjg");
	var mask_graphics_1069 = new cjs.Graphics().p("A6EDSIAAmjMA0JAAAIAAGjg");
	var mask_graphics_1070 = new cjs.Graphics().p("A6fDSIAAmjMA0+AAAIAAGjg");
	var mask_graphics_1071 = new cjs.Graphics().p("A65DSIAAmjMA1zAAAIAAGjg");
	var mask_graphics_1072 = new cjs.Graphics().p("A7UDSIAAmjMA2pAAAIAAGjg");
	var mask_graphics_1073 = new cjs.Graphics().p("A7vDSIAAmjMA3fAAAIAAGjg");
	var mask_graphics_1074 = new cjs.Graphics().p("A8KDSIAAmjMA4VAAAIAAGjg");
	var mask_graphics_1075 = new cjs.Graphics().p("A8lDSIAAmjMA5KAAAIAAGjg");
	var mask_graphics_1076 = new cjs.Graphics().p("A8/DSIAAmjMA5/AAAIAAGjg");
	var mask_graphics_1077 = new cjs.Graphics().p("A9aDSIAAmjMA61AAAIAAGjg");
	var mask_graphics_1078 = new cjs.Graphics().p("A91DSIAAmjMA7rAAAIAAGjg");
	var mask_graphics_1079 = new cjs.Graphics().p("A+QDSIAAmjMA8hAAAIAAGjg");
	var mask_graphics_1080 = new cjs.Graphics().p("A+rDSIAAmjMA9XAAAIAAGjg");
	var mask_graphics_1081 = new cjs.Graphics().p("A/GDSIAAmjMA+NAAAIAAGjg");
	var mask_graphics_1082 = new cjs.Graphics().p("A/gDSIAAmjMA/BAAAIAAGjg");
	var mask_graphics_1083 = new cjs.Graphics().p("A/7DSIAAmjMA/3AAAIAAGjg");
	var mask_graphics_1084 = new cjs.Graphics().p("EggWADSIAAmjMBAtAAAIAAGjg");
	var mask_graphics_1085 = new cjs.Graphics().p("EggxADSIAAmjMBBjAAAIAAGjg");
	var mask_graphics_1086 = new cjs.Graphics().p("EghMADSIAAmjMBCZAAAIAAGjg");
	var mask_graphics_1087 = new cjs.Graphics().p("EghmADSIAAmjMBDNAAAIAAGjg");
	var mask_graphics_1088 = new cjs.Graphics().p("EgiBADSIAAmjMBEDAAAIAAGjg");
	var mask_graphics_1089 = new cjs.Graphics().p("EgicADSIAAmjMBE5AAAIAAGjg");
	var mask_graphics_1090 = new cjs.Graphics().p("Egi3ADSIAAmjMBFvAAAIAAGjg");
	var mask_graphics_1091 = new cjs.Graphics().p("EgjSADSIAAmjMBGkAAAIAAGjg");
	var mask_graphics_1092 = new cjs.Graphics().p("EgjsADSIAAmjMBHZAAAIAAGjg");
	var mask_graphics_1093 = new cjs.Graphics().p("EgkHADSIAAmjMBIPAAAIAAGjg");
	var mask_graphics_1094 = new cjs.Graphics().p("EgkiADSIAAmjMBJFAAAIAAGjg");
	var mask_graphics_1095 = new cjs.Graphics().p("Egk9ADSIAAmjMBJ7AAAIAAGjg");
	var mask_graphics_1096 = new cjs.Graphics().p("EglYADSIAAmjMBKwAAAIAAGjg");
	var mask_graphics_1097 = new cjs.Graphics().p("EglzADSIAAmjMBLmAAAIAAGjg");
	var mask_graphics_1098 = new cjs.Graphics().p("EgmNADSIAAmjMBMbAAAIAAGjg");
	var mask_graphics_1099 = new cjs.Graphics().p("EgmoADSIAAmjMBNRAAAIAAGjg");
	var mask_graphics_1100 = new cjs.Graphics().p("EgnDADSIAAmjMBOHAAAIAAGjg");
	var mask_graphics_1101 = new cjs.Graphics().p("EgneADSIAAmjMBO9AAAIAAGjg");
	var mask_graphics_1102 = new cjs.Graphics().p("Egn5ADSIAAmjMBPzAAAIAAGjg");
	var mask_graphics_1103 = new cjs.Graphics().p("EgoTADSIAAmjMBQnAAAIAAGjg");
	var mask_graphics_1104 = new cjs.Graphics().p("EgouADSIAAmjMBRdAAAIAAGjg");
	var mask_graphics_1105 = new cjs.Graphics().p("EgpJADSIAAmjMBSTAAAIAAGjg");
	var mask_graphics_1106 = new cjs.Graphics().p("EgpkADSIAAmjMBTJAAAIAAGjg");
	var mask_graphics_1107 = new cjs.Graphics().p("Egp/ADSIAAmjMBT/AAAIAAGjg");
	var mask_graphics_1108 = new cjs.Graphics().p("EgqZADSIAAmjMBUzAAAIAAGjg");
	var mask_graphics_1109 = new cjs.Graphics().p("Egq0ADSIAAmjMBVpAAAIAAGjg");
	var mask_graphics_1110 = new cjs.Graphics().p("EgrPADSIAAmjMBWfAAAIAAGjg");
	var mask_graphics_1111 = new cjs.Graphics().p("EgrqAgeIAAmkMBXVAAAIAAGkg");
	var mask_graphics_1175 = new cjs.Graphics().p("EgrqAgeIAAmkMBXVAAAIAAGkg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1009).to({graphics:mask_graphics_1009,x:-9.25,y:208.75}).wait(1).to({graphics:mask_graphics_1010,x:-9.825,y:396.5}).wait(1).to({graphics:mask_graphics_1011,x:-7.15,y:396.45}).wait(1).to({graphics:mask_graphics_1012,x:-4.45,y:396.45}).wait(1).to({graphics:mask_graphics_1013,x:-1.775,y:396.4}).wait(1).to({graphics:mask_graphics_1014,x:0.9,y:396.4}).wait(1).to({graphics:mask_graphics_1015,x:3.575,y:396.4}).wait(1).to({graphics:mask_graphics_1016,x:6.275,y:396.35}).wait(1).to({graphics:mask_graphics_1017,x:8.95,y:396.35}).wait(1).to({graphics:mask_graphics_1018,x:11.625,y:396.3}).wait(1).to({graphics:mask_graphics_1019,x:14.3,y:396.3}).wait(1).to({graphics:mask_graphics_1020,x:17,y:396.3}).wait(1).to({graphics:mask_graphics_1021,x:19.675,y:396.25}).wait(1).to({graphics:mask_graphics_1022,x:22.35,y:396.25}).wait(1).to({graphics:mask_graphics_1023,x:25.025,y:396.25}).wait(1).to({graphics:mask_graphics_1024,x:27.725,y:396.2}).wait(1).to({graphics:mask_graphics_1025,x:30.4,y:396.2}).wait(1).to({graphics:mask_graphics_1026,x:33.075,y:396.15}).wait(1).to({graphics:mask_graphics_1027,x:35.75,y:396.15}).wait(1).to({graphics:mask_graphics_1028,x:38.45,y:396.15}).wait(1).to({graphics:mask_graphics_1029,x:41.125,y:396.1}).wait(1).to({graphics:mask_graphics_1030,x:43.8,y:396.1}).wait(1).to({graphics:mask_graphics_1031,x:46.475,y:396.05}).wait(1).to({graphics:mask_graphics_1032,x:49.175,y:396.05}).wait(1).to({graphics:mask_graphics_1033,x:51.85,y:396.05}).wait(1).to({graphics:mask_graphics_1034,x:54.525,y:396}).wait(1).to({graphics:mask_graphics_1035,x:57.2,y:396}).wait(1).to({graphics:mask_graphics_1036,x:59.9,y:395.95}).wait(1).to({graphics:mask_graphics_1037,x:62.575,y:395.95}).wait(1).to({graphics:mask_graphics_1038,x:65.25,y:395.95}).wait(1).to({graphics:mask_graphics_1039,x:67.925,y:395.9}).wait(1).to({graphics:mask_graphics_1040,x:70.625,y:395.9}).wait(1).to({graphics:mask_graphics_1041,x:73.3,y:395.85}).wait(1).to({graphics:mask_graphics_1042,x:75.975,y:395.85}).wait(1).to({graphics:mask_graphics_1043,x:78.65,y:395.85}).wait(1).to({graphics:mask_graphics_1044,x:81.35,y:395.8}).wait(1).to({graphics:mask_graphics_1045,x:84.025,y:395.8}).wait(1).to({graphics:mask_graphics_1046,x:86.7,y:395.75}).wait(1).to({graphics:mask_graphics_1047,x:89.375,y:395.75}).wait(1).to({graphics:mask_graphics_1048,x:92.075,y:395.75}).wait(1).to({graphics:mask_graphics_1049,x:94.75,y:395.7}).wait(1).to({graphics:mask_graphics_1050,x:97.425,y:395.7}).wait(1).to({graphics:mask_graphics_1051,x:100.1,y:395.7}).wait(1).to({graphics:mask_graphics_1052,x:102.8,y:395.65}).wait(1).to({graphics:mask_graphics_1053,x:105.475,y:395.65}).wait(1).to({graphics:mask_graphics_1054,x:108.15,y:395.6}).wait(1).to({graphics:mask_graphics_1055,x:110.825,y:395.6}).wait(1).to({graphics:mask_graphics_1056,x:113.525,y:395.6}).wait(1).to({graphics:mask_graphics_1057,x:116.2,y:395.55}).wait(1).to({graphics:mask_graphics_1058,x:118.875,y:395.55}).wait(1).to({graphics:mask_graphics_1059,x:121.55,y:395.5}).wait(1).to({graphics:mask_graphics_1060,x:124.25,y:395.5}).wait(1).to({graphics:mask_graphics_1061,x:126.925,y:395.5}).wait(1).to({graphics:mask_graphics_1062,x:129.6,y:395.45}).wait(1).to({graphics:mask_graphics_1063,x:132.275,y:395.45}).wait(1).to({graphics:mask_graphics_1064,x:134.95,y:395.4}).wait(1).to({graphics:mask_graphics_1065,x:137.65,y:395.4}).wait(1).to({graphics:mask_graphics_1066,x:140.325,y:395.4}).wait(1).to({graphics:mask_graphics_1067,x:143,y:395.35}).wait(1).to({graphics:mask_graphics_1068,x:145.675,y:395.35}).wait(1).to({graphics:mask_graphics_1069,x:148.375,y:395.3}).wait(1).to({graphics:mask_graphics_1070,x:151.05,y:395.3}).wait(1).to({graphics:mask_graphics_1071,x:153.725,y:395.3}).wait(1).to({graphics:mask_graphics_1072,x:156.4,y:395.25}).wait(1).to({graphics:mask_graphics_1073,x:159.1,y:395.25}).wait(1).to({graphics:mask_graphics_1074,x:161.775,y:395.25}).wait(1).to({graphics:mask_graphics_1075,x:164.45,y:395.2}).wait(1).to({graphics:mask_graphics_1076,x:167.125,y:395.2}).wait(1).to({graphics:mask_graphics_1077,x:169.825,y:395.15}).wait(1).to({graphics:mask_graphics_1078,x:172.5,y:395.15}).wait(1).to({graphics:mask_graphics_1079,x:175.175,y:395.15}).wait(1).to({graphics:mask_graphics_1080,x:177.85,y:395.1}).wait(1).to({graphics:mask_graphics_1081,x:180.55,y:395.1}).wait(1).to({graphics:mask_graphics_1082,x:183.225,y:395.05}).wait(1).to({graphics:mask_graphics_1083,x:185.9,y:395.05}).wait(1).to({graphics:mask_graphics_1084,x:188.575,y:395.05}).wait(1).to({graphics:mask_graphics_1085,x:191.275,y:395}).wait(1).to({graphics:mask_graphics_1086,x:193.95,y:395}).wait(1).to({graphics:mask_graphics_1087,x:196.625,y:394.95}).wait(1).to({graphics:mask_graphics_1088,x:199.3,y:394.95}).wait(1).to({graphics:mask_graphics_1089,x:202,y:394.95}).wait(1).to({graphics:mask_graphics_1090,x:204.675,y:394.9}).wait(1).to({graphics:mask_graphics_1091,x:207.35,y:394.9}).wait(1).to({graphics:mask_graphics_1092,x:210.025,y:394.85}).wait(1).to({graphics:mask_graphics_1093,x:212.725,y:394.85}).wait(1).to({graphics:mask_graphics_1094,x:215.4,y:394.85}).wait(1).to({graphics:mask_graphics_1095,x:218.075,y:394.8}).wait(1).to({graphics:mask_graphics_1096,x:220.75,y:394.8}).wait(1).to({graphics:mask_graphics_1097,x:223.45,y:394.75}).wait(1).to({graphics:mask_graphics_1098,x:226.125,y:394.75}).wait(1).to({graphics:mask_graphics_1099,x:228.8,y:394.75}).wait(1).to({graphics:mask_graphics_1100,x:231.475,y:394.7}).wait(1).to({graphics:mask_graphics_1101,x:234.175,y:394.7}).wait(1).to({graphics:mask_graphics_1102,x:236.85,y:394.7}).wait(1).to({graphics:mask_graphics_1103,x:239.525,y:394.65}).wait(1).to({graphics:mask_graphics_1104,x:242.2,y:394.65}).wait(1).to({graphics:mask_graphics_1105,x:244.9,y:394.6}).wait(1).to({graphics:mask_graphics_1106,x:247.575,y:394.6}).wait(1).to({graphics:mask_graphics_1107,x:250.25,y:394.6}).wait(1).to({graphics:mask_graphics_1108,x:252.925,y:394.55}).wait(1).to({graphics:mask_graphics_1109,x:255.625,y:394.55}).wait(1).to({graphics:mask_graphics_1110,x:258.3,y:394.5}).wait(1).to({graphics:mask_graphics_1111,x:260.9502,y:207.75}).wait(64).to({graphics:mask_graphics_1175,x:260.9502,y:207.75}).wait(1).to({graphics:null,x:0,y:0}).wait(8));

	// 图层_13
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("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");
	this.shape.setTransform(262.05,321.575);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1009).to({_off:false},0).wait(166).to({_off:true},1).wait(8));

	// 图层_4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_900 = new cjs.Graphics().p("AhccsIAAmkIB4AAIAAGkg");
	var mask_1_graphics_901 = new cjs.Graphics().p("AhhDSIAAmjIDDAAIAAGjg");
	var mask_1_graphics_902 = new cjs.Graphics().p("AiHDSIAAmjIEPAAIAAGjg");
	var mask_1_graphics_903 = new cjs.Graphics().p("AiuDSIAAmjIFcAAIAAGjg");
	var mask_1_graphics_904 = new cjs.Graphics().p("AjUDSIAAmjIGpAAIAAGjg");
	var mask_1_graphics_905 = new cjs.Graphics().p("Aj6DSIAAmjIH1AAIAAGjg");
	var mask_1_graphics_906 = new cjs.Graphics().p("AkgDSIAAmjIJBAAIAAGjg");
	var mask_1_graphics_907 = new cjs.Graphics().p("AlGDSIAAmjIKNAAIAAGjg");
	var mask_1_graphics_908 = new cjs.Graphics().p("AltDSIAAmjILbAAIAAGjg");
	var mask_1_graphics_909 = new cjs.Graphics().p("AmTDSIAAmjIMmAAIAAGjg");
	var mask_1_graphics_910 = new cjs.Graphics().p("Am5DSIAAmjINzAAIAAGjg");
	var mask_1_graphics_911 = new cjs.Graphics().p("AnfDSIAAmjIO/AAIAAGjg");
	var mask_1_graphics_912 = new cjs.Graphics().p("AoFDSIAAmjIQLAAIAAGjg");
	var mask_1_graphics_913 = new cjs.Graphics().p("AorDSIAAmjIRXAAIAAGjg");
	var mask_1_graphics_914 = new cjs.Graphics().p("ApSDSIAAmjISlAAIAAGjg");
	var mask_1_graphics_915 = new cjs.Graphics().p("Ap4DSIAAmjITxAAIAAGjg");
	var mask_1_graphics_916 = new cjs.Graphics().p("AqeDSIAAmjIU9AAIAAGjg");
	var mask_1_graphics_917 = new cjs.Graphics().p("ArEDSIAAmjIWJAAIAAGjg");
	var mask_1_graphics_918 = new cjs.Graphics().p("ArqDSIAAmjIXVAAIAAGjg");
	var mask_1_graphics_919 = new cjs.Graphics().p("AsQDSIAAmjIYhAAIAAGjg");
	var mask_1_graphics_920 = new cjs.Graphics().p("As3DSIAAmjIZuAAIAAGjg");
	var mask_1_graphics_921 = new cjs.Graphics().p("AtdDSIAAmjIa7AAIAAGjg");
	var mask_1_graphics_922 = new cjs.Graphics().p("AuDDSIAAmjIcHAAIAAGjg");
	var mask_1_graphics_923 = new cjs.Graphics().p("AupDSIAAmjIdTAAIAAGjg");
	var mask_1_graphics_924 = new cjs.Graphics().p("AvPDSIAAmjIefAAIAAGjg");
	var mask_1_graphics_925 = new cjs.Graphics().p("Av2DSIAAmjIftAAIAAGjg");
	var mask_1_graphics_926 = new cjs.Graphics().p("AwcDSIAAmjMAg4AAAIAAGjg");
	var mask_1_graphics_927 = new cjs.Graphics().p("AxCDSIAAmjMAiFAAAIAAGjg");
	var mask_1_graphics_928 = new cjs.Graphics().p("AxoDSIAAmjMAjRAAAIAAGjg");
	var mask_1_graphics_929 = new cjs.Graphics().p("AyODSIAAmjMAkdAAAIAAGjg");
	var mask_1_graphics_930 = new cjs.Graphics().p("Ay0DSIAAmjMAlpAAAIAAGjg");
	var mask_1_graphics_931 = new cjs.Graphics().p("AzbDSIAAmjMAm3AAAIAAGjg");
	var mask_1_graphics_932 = new cjs.Graphics().p("A0BDSIAAmjMAoDAAAIAAGjg");
	var mask_1_graphics_933 = new cjs.Graphics().p("A0nDSIAAmjMApPAAAIAAGjg");
	var mask_1_graphics_934 = new cjs.Graphics().p("A1NDSIAAmjMAqbAAAIAAGjg");
	var mask_1_graphics_935 = new cjs.Graphics().p("A1zDSIAAmjMArnAAAIAAGjg");
	var mask_1_graphics_936 = new cjs.Graphics().p("A2ZDSIAAmjMAszAAAIAAGjg");
	var mask_1_graphics_937 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_1_graphics_938 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_1_graphics_939 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_1_graphics_940 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_1_graphics_941 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_1_graphics_942 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_1_graphics_943 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_1_graphics_944 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_1_graphics_945 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_1_graphics_946 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_1_graphics_947 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_1_graphics_948 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_1_graphics_949 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_1_graphics_950 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_1_graphics_951 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_1_graphics_952 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_1_graphics_953 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_1_graphics_954 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_1_graphics_955 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_1_graphics_956 = new cjs.Graphics().p("A3RDSIAAmjMAujAAAIAAGjg");
	var mask_1_graphics_957 = new cjs.Graphics().p("A3iDSIAAmjMAvFAAAIAAGjg");
	var mask_1_graphics_958 = new cjs.Graphics().p("A30DSIAAmjMAvpAAAIAAGjg");
	var mask_1_graphics_959 = new cjs.Graphics().p("A4FDSIAAmjMAwLAAAIAAGjg");
	var mask_1_graphics_960 = new cjs.Graphics().p("A4XDSIAAmjMAwvAAAIAAGjg");
	var mask_1_graphics_961 = new cjs.Graphics().p("A4oDSIAAmjMAxRAAAIAAGjg");
	var mask_1_graphics_962 = new cjs.Graphics().p("A46DSIAAmjMAx1AAAIAAGjg");
	var mask_1_graphics_963 = new cjs.Graphics().p("A5LDSIAAmjMAyXAAAIAAGjg");
	var mask_1_graphics_964 = new cjs.Graphics().p("A5cDSIAAmjMAy5AAAIAAGjg");
	var mask_1_graphics_965 = new cjs.Graphics().p("A5uDSIAAmjMAzdAAAIAAGjg");
	var mask_1_graphics_966 = new cjs.Graphics().p("A5/DSIAAmjMAz/AAAIAAGjg");
	var mask_1_graphics_967 = new cjs.Graphics().p("A6RDSIAAmjMA0jAAAIAAGjg");
	var mask_1_graphics_968 = new cjs.Graphics().p("A6iDSIAAmjMA1FAAAIAAGjg");
	var mask_1_graphics_969 = new cjs.Graphics().p("A60DSIAAmjMA1pAAAIAAGjg");
	var mask_1_graphics_970 = new cjs.Graphics().p("A7FDSIAAmjMA2LAAAIAAGjg");
	var mask_1_graphics_971 = new cjs.Graphics().p("A7WDSIAAmjMA2tAAAIAAGjg");
	var mask_1_graphics_972 = new cjs.Graphics().p("A7oDSIAAmjMA3RAAAIAAGjg");
	var mask_1_graphics_973 = new cjs.Graphics().p("A75DSIAAmjMA3zAAAIAAGjg");
	var mask_1_graphics_974 = new cjs.Graphics().p("A8LDSIAAmjMA4XAAAIAAGjg");
	var mask_1_graphics_975 = new cjs.Graphics().p("A8cDSIAAmjMA45AAAIAAGjg");
	var mask_1_graphics_976 = new cjs.Graphics().p("A8uDSIAAmjMA5cAAAIAAGjg");
	var mask_1_graphics_977 = new cjs.Graphics().p("A8/DSIAAmjMA5/AAAIAAGjg");
	var mask_1_graphics_978 = new cjs.Graphics().p("A9QDSIAAmjMA6hAAAIAAGjg");
	var mask_1_graphics_979 = new cjs.Graphics().p("A9iDSIAAmjMA7FAAAIAAGjg");
	var mask_1_graphics_980 = new cjs.Graphics().p("A9zDSIAAmjMA7nAAAIAAGjg");
	var mask_1_graphics_981 = new cjs.Graphics().p("A+FDSIAAmjMA8KAAAIAAGjg");
	var mask_1_graphics_982 = new cjs.Graphics().p("A+WDSIAAmjMA8tAAAIAAGjg");
	var mask_1_graphics_983 = new cjs.Graphics().p("A+oDSIAAmjMA9QAAAIAAGjg");
	var mask_1_graphics_984 = new cjs.Graphics().p("A+5DSIAAmjMA9zAAAIAAGjg");
	var mask_1_graphics_985 = new cjs.Graphics().p("A/KDSIAAmjMA+VAAAIAAGjg");
	var mask_1_graphics_986 = new cjs.Graphics().p("A/cDSIAAmjMA+5AAAIAAGjg");
	var mask_1_graphics_987 = new cjs.Graphics().p("A/tDSIAAmjMA/bAAAIAAGjg");
	var mask_1_graphics_988 = new cjs.Graphics().p("A//DSIAAmjMA/+AAAIAAGjg");
	var mask_1_graphics_989 = new cjs.Graphics().p("EggQADSIAAmjMBAhAAAIAAGjg");
	var mask_1_graphics_990 = new cjs.Graphics().p("EggiADSIAAmjMBBEAAAIAAGjg");
	var mask_1_graphics_991 = new cjs.Graphics().p("EggzADSIAAmjMBBnAAAIAAGjg");
	var mask_1_graphics_992 = new cjs.Graphics().p("EghEADSIAAmjMBCJAAAIAAGjg");
	var mask_1_graphics_993 = new cjs.Graphics().p("EghWAcsIAAmkMBCtAAAIAAGkg");
	var mask_1_graphics_1175 = new cjs.Graphics().p("EghWAcsIAAmkMBCtAAAIAAGkg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(900).to({graphics:mask_1_graphics_900,x:-9.25,y:183.575}).wait(1).to({graphics:mask_1_graphics_901,x:-8.675,y:346.15}).wait(1).to({graphics:mask_1_graphics_902,x:-4.875,y:346.15}).wait(1).to({graphics:mask_1_graphics_903,x:-1.05,y:346.15}).wait(1).to({graphics:mask_1_graphics_904,x:2.775,y:346.15}).wait(1).to({graphics:mask_1_graphics_905,x:6.575,y:346.15}).wait(1).to({graphics:mask_1_graphics_906,x:10.4,y:346.15}).wait(1).to({graphics:mask_1_graphics_907,x:14.225,y:346.15}).wait(1).to({graphics:mask_1_graphics_908,x:18.05,y:346.15}).wait(1).to({graphics:mask_1_graphics_909,x:21.85,y:346.15}).wait(1).to({graphics:mask_1_graphics_910,x:25.675,y:346.15}).wait(1).to({graphics:mask_1_graphics_911,x:29.5,y:346.15}).wait(1).to({graphics:mask_1_graphics_912,x:33.3,y:346.15}).wait(1).to({graphics:mask_1_graphics_913,x:37.125,y:346.15}).wait(1).to({graphics:mask_1_graphics_914,x:40.95,y:346.15}).wait(1).to({graphics:mask_1_graphics_915,x:44.775,y:346.15}).wait(1).to({graphics:mask_1_graphics_916,x:48.575,y:346.15}).wait(1).to({graphics:mask_1_graphics_917,x:52.4,y:346.15}).wait(1).to({graphics:mask_1_graphics_918,x:56.225,y:346.15}).wait(1).to({graphics:mask_1_graphics_919,x:60.025,y:346.15}).wait(1).to({graphics:mask_1_graphics_920,x:63.85,y:346.15}).wait(1).to({graphics:mask_1_graphics_921,x:67.675,y:346.15}).wait(1).to({graphics:mask_1_graphics_922,x:71.475,y:346.15}).wait(1).to({graphics:mask_1_graphics_923,x:75.3,y:346.15}).wait(1).to({graphics:mask_1_graphics_924,x:79.125,y:346.15}).wait(1).to({graphics:mask_1_graphics_925,x:82.95,y:346.15}).wait(1).to({graphics:mask_1_graphics_926,x:86.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_927,x:90.575,y:346.15}).wait(1).to({graphics:mask_1_graphics_928,x:94.4,y:346.15}).wait(1).to({graphics:mask_1_graphics_929,x:98.2,y:346.15}).wait(1).to({graphics:mask_1_graphics_930,x:102.025,y:346.15}).wait(1).to({graphics:mask_1_graphics_931,x:105.85,y:346.15}).wait(1).to({graphics:mask_1_graphics_932,x:109.675,y:346.15}).wait(1).to({graphics:mask_1_graphics_933,x:113.475,y:346.15}).wait(1).to({graphics:mask_1_graphics_934,x:117.3,y:346.15}).wait(1).to({graphics:mask_1_graphics_935,x:121.125,y:346.15}).wait(1).to({graphics:mask_1_graphics_936,x:124.925,y:346.15}).wait(1).to({graphics:mask_1_graphics_937,x:128.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_938,x:128.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_939,x:128.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_940,x:128.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_941,x:128.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_942,x:128.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_943,x:128.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_944,x:128.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_945,x:128.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_946,x:128.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_947,x:128.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_948,x:128.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_949,x:128.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_950,x:128.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_951,x:128.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_952,x:128.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_953,x:128.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_954,x:128.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_955,x:128.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_956,x:130.5,y:346.15}).wait(1).to({graphics:mask_1_graphics_957,x:132.225,y:346.15}).wait(1).to({graphics:mask_1_graphics_958,x:133.975,y:346.15}).wait(1).to({graphics:mask_1_graphics_959,x:135.725,y:346.15}).wait(1).to({graphics:mask_1_graphics_960,x:137.475,y:346.15}).wait(1).to({graphics:mask_1_graphics_961,x:139.2,y:346.15}).wait(1).to({graphics:mask_1_graphics_962,x:140.95,y:346.15}).wait(1).to({graphics:mask_1_graphics_963,x:142.7,y:346.15}).wait(1).to({graphics:mask_1_graphics_964,x:144.425,y:346.15}).wait(1).to({graphics:mask_1_graphics_965,x:146.175,y:346.15}).wait(1).to({graphics:mask_1_graphics_966,x:147.925,y:346.15}).wait(1).to({graphics:mask_1_graphics_967,x:149.675,y:346.15}).wait(1).to({graphics:mask_1_graphics_968,x:151.4,y:346.15}).wait(1).to({graphics:mask_1_graphics_969,x:153.15,y:346.15}).wait(1).to({graphics:mask_1_graphics_970,x:154.9,y:346.15}).wait(1).to({graphics:mask_1_graphics_971,x:156.625,y:346.15}).wait(1).to({graphics:mask_1_graphics_972,x:158.375,y:346.15}).wait(1).to({graphics:mask_1_graphics_973,x:160.125,y:346.15}).wait(1).to({graphics:mask_1_graphics_974,x:161.875,y:346.15}).wait(1).to({graphics:mask_1_graphics_975,x:163.6,y:346.15}).wait(1).to({graphics:mask_1_graphics_976,x:165.35,y:346.15}).wait(1).to({graphics:mask_1_graphics_977,x:167.1,y:346.15}).wait(1).to({graphics:mask_1_graphics_978,x:168.825,y:346.15}).wait(1).to({graphics:mask_1_graphics_979,x:170.575,y:346.15}).wait(1).to({graphics:mask_1_graphics_980,x:172.325,y:346.15}).wait(1).to({graphics:mask_1_graphics_981,x:174.05,y:346.15}).wait(1).to({graphics:mask_1_graphics_982,x:175.8,y:346.15}).wait(1).to({graphics:mask_1_graphics_983,x:177.55,y:346.15}).wait(1).to({graphics:mask_1_graphics_984,x:179.3,y:346.15}).wait(1).to({graphics:mask_1_graphics_985,x:181.025,y:346.15}).wait(1).to({graphics:mask_1_graphics_986,x:182.775,y:346.15}).wait(1).to({graphics:mask_1_graphics_987,x:184.525,y:346.15}).wait(1).to({graphics:mask_1_graphics_988,x:186.25,y:346.15}).wait(1).to({graphics:mask_1_graphics_989,x:188,y:346.15}).wait(1).to({graphics:mask_1_graphics_990,x:189.75,y:346.15}).wait(1).to({graphics:mask_1_graphics_991,x:191.5,y:346.15}).wait(1).to({graphics:mask_1_graphics_992,x:193.225,y:346.15}).wait(1).to({graphics:mask_1_graphics_993,x:194.9502,y:183.575}).wait(182).to({graphics:mask_1_graphics_1175,x:194.9502,y:183.575}).wait(1).to({graphics:null,x:0,y:0}).wait(8));

	// 图层_14
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("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");
	this.shape_1.setTransform(262.05,321.575);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(900).to({_off:false},0).wait(275).to({_off:true},1).wait(8));

	// 图层_5 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_786 = new cjs.Graphics().p("AhcYwIAAmkIB4AAIAAGkg");
	var mask_2_graphics_787 = new cjs.Graphics().p("AhTDSIAAmjICmAAIAAGjg");
	var mask_2_graphics_788 = new cjs.Graphics().p("AhqDSIAAmjIDVAAIAAGjg");
	var mask_2_graphics_789 = new cjs.Graphics().p("AiCDSIAAmjIEFAAIAAGjg");
	var mask_2_graphics_790 = new cjs.Graphics().p("AiZDSIAAmjIEzAAIAAGjg");
	var mask_2_graphics_791 = new cjs.Graphics().p("AixDSIAAmjIFjAAIAAGjg");
	var mask_2_graphics_792 = new cjs.Graphics().p("AjIDSIAAmjIGRAAIAAGjg");
	var mask_2_graphics_793 = new cjs.Graphics().p("AjgDSIAAmjIHBAAIAAGjg");
	var mask_2_graphics_794 = new cjs.Graphics().p("Aj4DSIAAmjIHxAAIAAGjg");
	var mask_2_graphics_795 = new cjs.Graphics().p("AkPDSIAAmjIIfAAIAAGjg");
	var mask_2_graphics_796 = new cjs.Graphics().p("AknDSIAAmjIJOAAIAAGjg");
	var mask_2_graphics_797 = new cjs.Graphics().p("Ak+DSIAAmjIJ9AAIAAGjg");
	var mask_2_graphics_798 = new cjs.Graphics().p("AlWDSIAAmjIKtAAIAAGjg");
	var mask_2_graphics_799 = new cjs.Graphics().p("AltDSIAAmjILbAAIAAGjg");
	var mask_2_graphics_800 = new cjs.Graphics().p("AmFDSIAAmjIMLAAIAAGjg");
	var mask_2_graphics_801 = new cjs.Graphics().p("AmcDSIAAmjIM5AAIAAGjg");
	var mask_2_graphics_802 = new cjs.Graphics().p("Am0DSIAAmjINpAAIAAGjg");
	var mask_2_graphics_803 = new cjs.Graphics().p("AnMDSIAAmjIOZAAIAAGjg");
	var mask_2_graphics_804 = new cjs.Graphics().p("AnjDSIAAmjIPHAAIAAGjg");
	var mask_2_graphics_805 = new cjs.Graphics().p("An7DSIAAmjIP2AAIAAGjg");
	var mask_2_graphics_806 = new cjs.Graphics().p("AoSDSIAAmjIQlAAIAAGjg");
	var mask_2_graphics_807 = new cjs.Graphics().p("AoqDSIAAmjIRVAAIAAGjg");
	var mask_2_graphics_808 = new cjs.Graphics().p("ApBDSIAAmjISDAAIAAGjg");
	var mask_2_graphics_809 = new cjs.Graphics().p("ApZDSIAAmjISzAAIAAGjg");
	var mask_2_graphics_810 = new cjs.Graphics().p("ApwDSIAAmjIThAAIAAGjg");
	var mask_2_graphics_811 = new cjs.Graphics().p("AqIDSIAAmjIURAAIAAGjg");
	var mask_2_graphics_812 = new cjs.Graphics().p("AqgDSIAAmjIVBAAIAAGjg");
	var mask_2_graphics_813 = new cjs.Graphics().p("Aq3DSIAAmjIVvAAIAAGjg");
	var mask_2_graphics_814 = new cjs.Graphics().p("ArPDSIAAmjIWeAAIAAGjg");
	var mask_2_graphics_815 = new cjs.Graphics().p("ArmDSIAAmjIXNAAIAAGjg");
	var mask_2_graphics_816 = new cjs.Graphics().p("Ar+DSIAAmjIX9AAIAAGjg");
	var mask_2_graphics_817 = new cjs.Graphics().p("AsVDSIAAmjIYrAAIAAGjg");
	var mask_2_graphics_818 = new cjs.Graphics().p("AstDSIAAmjIZbAAIAAGjg");
	var mask_2_graphics_819 = new cjs.Graphics().p("AtEDSIAAmjIaJAAIAAGjg");
	var mask_2_graphics_820 = new cjs.Graphics().p("AtcDSIAAmjIa5AAIAAGjg");
	var mask_2_graphics_821 = new cjs.Graphics().p("AtzDSIAAmjIbnAAIAAGjg");
	var mask_2_graphics_822 = new cjs.Graphics().p("AuLDSIAAmjIcXAAIAAGjg");
	var mask_2_graphics_823 = new cjs.Graphics().p("AujDSIAAmjIdGAAIAAGjg");
	var mask_2_graphics_824 = new cjs.Graphics().p("Au6DSIAAmjId1AAIAAGjg");
	var mask_2_graphics_825 = new cjs.Graphics().p("AvSDSIAAmjIelAAIAAGjg");
	var mask_2_graphics_826 = new cjs.Graphics().p("AvpDSIAAmjIfTAAIAAGjg");
	var mask_2_graphics_827 = new cjs.Graphics().p("AwBDSIAAmjMAgDAAAIAAGjg");
	var mask_2_graphics_828 = new cjs.Graphics().p("AwYDSIAAmjMAgxAAAIAAGjg");
	var mask_2_graphics_829 = new cjs.Graphics().p("AwwDSIAAmjMAhhAAAIAAGjg");
	var mask_2_graphics_830 = new cjs.Graphics().p("AxHDSIAAmjMAiPAAAIAAGjg");
	var mask_2_graphics_831 = new cjs.Graphics().p("AxfDSIAAmjMAi/AAAIAAGjg");
	var mask_2_graphics_832 = new cjs.Graphics().p("Ax3DSIAAmjMAjvAAAIAAGjg");
	var mask_2_graphics_833 = new cjs.Graphics().p("AyODSIAAmjMAkdAAAIAAGjg");
	var mask_2_graphics_834 = new cjs.Graphics().p("AymDSIAAmjMAlMAAAIAAGjg");
	var mask_2_graphics_835 = new cjs.Graphics().p("Ay9DSIAAmjMAl7AAAIAAGjg");
	var mask_2_graphics_836 = new cjs.Graphics().p("AzVDSIAAmjMAmrAAAIAAGjg");
	var mask_2_graphics_837 = new cjs.Graphics().p("AzsDSIAAmjMAnZAAAIAAGjg");
	var mask_2_graphics_838 = new cjs.Graphics().p("A0EDSIAAmjMAoJAAAIAAGjg");
	var mask_2_graphics_839 = new cjs.Graphics().p("A0bDSIAAmjMAo3AAAIAAGjg");
	var mask_2_graphics_840 = new cjs.Graphics().p("A0zDSIAAmjMApnAAAIAAGjg");
	var mask_2_graphics_841 = new cjs.Graphics().p("A1LDSIAAmjMAqXAAAIAAGjg");
	var mask_2_graphics_842 = new cjs.Graphics().p("A1iDSIAAmjMArFAAAIAAGjg");
	var mask_2_graphics_843 = new cjs.Graphics().p("A16DSIAAmjMAr0AAAIAAGjg");
	var mask_2_graphics_844 = new cjs.Graphics().p("A2RDSIAAmjMAsjAAAIAAGjg");
	var mask_2_graphics_845 = new cjs.Graphics().p("A2pDSIAAmjMAtTAAAIAAGjg");
	var mask_2_graphics_846 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_2_graphics_847 = new cjs.Graphics().p("A3YDSIAAmjMAuxAAAIAAGjg");
	var mask_2_graphics_848 = new cjs.Graphics().p("A3vDSIAAmjMAvfAAAIAAGjg");
	var mask_2_graphics_849 = new cjs.Graphics().p("A4HDSIAAmjMAwPAAAIAAGjg");
	var mask_2_graphics_850 = new cjs.Graphics().p("A4eDSIAAmjMAw9AAAIAAGjg");
	var mask_2_graphics_851 = new cjs.Graphics().p("A42DSIAAmjMAxtAAAIAAGjg");
	var mask_2_graphics_852 = new cjs.Graphics().p("A5ODSIAAmjMAycAAAIAAGjg");
	var mask_2_graphics_853 = new cjs.Graphics().p("A5lDSIAAmjMAzLAAAIAAGjg");
	var mask_2_graphics_854 = new cjs.Graphics().p("A59DSIAAmjMAz7AAAIAAGjg");
	var mask_2_graphics_855 = new cjs.Graphics().p("A6UDSIAAmjMA0pAAAIAAGjg");
	var mask_2_graphics_856 = new cjs.Graphics().p("A6sDSIAAmjMA1ZAAAIAAGjg");
	var mask_2_graphics_857 = new cjs.Graphics().p("A7DDSIAAmjMA2HAAAIAAGjg");
	var mask_2_graphics_858 = new cjs.Graphics().p("A7bDSIAAmjMA23AAAIAAGjg");
	var mask_2_graphics_859 = new cjs.Graphics().p("A7yDSIAAmjMA3lAAAIAAGjg");
	var mask_2_graphics_860 = new cjs.Graphics().p("A8KDSIAAmjMA4VAAAIAAGjg");
	var mask_2_graphics_861 = new cjs.Graphics().p("A8iDSIAAmjMA5EAAAIAAGjg");
	var mask_2_graphics_862 = new cjs.Graphics().p("A85DSIAAmjMA5zAAAIAAGjg");
	var mask_2_graphics_863 = new cjs.Graphics().p("A9RDSIAAmjMA6jAAAIAAGjg");
	var mask_2_graphics_864 = new cjs.Graphics().p("A9oDSIAAmjMA7RAAAIAAGjg");
	var mask_2_graphics_865 = new cjs.Graphics().p("A+ADSIAAmjMA8BAAAIAAGjg");
	var mask_2_graphics_866 = new cjs.Graphics().p("A+XDSIAAmjMA8vAAAIAAGjg");
	var mask_2_graphics_867 = new cjs.Graphics().p("A+vDSIAAmjMA9fAAAIAAGjg");
	var mask_2_graphics_868 = new cjs.Graphics().p("A/GDSIAAmjMA+NAAAIAAGjg");
	var mask_2_graphics_869 = new cjs.Graphics().p("A/eDSIAAmjMA+9AAAIAAGjg");
	var mask_2_graphics_870 = new cjs.Graphics().p("A/2DSIAAmjMA/sAAAIAAGjg");
	var mask_2_graphics_871 = new cjs.Graphics().p("EggNADSIAAmjMBAbAAAIAAGjg");
	var mask_2_graphics_872 = new cjs.Graphics().p("EgglADSIAAmjMBBLAAAIAAGjg");
	var mask_2_graphics_873 = new cjs.Graphics().p("Egg8ADSIAAmjMBB5AAAIAAGjg");
	var mask_2_graphics_874 = new cjs.Graphics().p("EghUADSIAAmjMBCpAAAIAAGjg");
	var mask_2_graphics_875 = new cjs.Graphics().p("EghrADSIAAmjMBDXAAAIAAGjg");
	var mask_2_graphics_876 = new cjs.Graphics().p("EgiDAYwIAAmkMBEHAAAIAAGkg");
	var mask_2_graphics_1175 = new cjs.Graphics().p("EgiDAYwIAAmkMBEHAAAIAAGkg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(786).to({graphics:mask_2_graphics_786,x:-9.25,y:158.425}).wait(1).to({graphics:mask_2_graphics_787,x:-10.15,y:295.85}).wait(1).to({graphics:mask_2_graphics_788,x:-7.8,y:295.85}).wait(1).to({graphics:mask_2_graphics_789,x:-5.425,y:295.85}).wait(1).to({graphics:mask_2_graphics_790,x:-3.075,y:295.85}).wait(1).to({graphics:mask_2_graphics_791,x:-0.725,y:295.85}).wait(1).to({graphics:mask_2_graphics_792,x:1.625,y:295.85}).wait(1).to({graphics:mask_2_graphics_793,x:3.975,y:295.85}).wait(1).to({graphics:mask_2_graphics_794,x:6.35,y:295.85}).wait(1).to({graphics:mask_2_graphics_795,x:8.7,y:295.85}).wait(1).to({graphics:mask_2_graphics_796,x:11.05,y:295.85}).wait(1).to({graphics:mask_2_graphics_797,x:13.4,y:295.85}).wait(1).to({graphics:mask_2_graphics_798,x:15.775,y:295.85}).wait(1).to({graphics:mask_2_graphics_799,x:18.125,y:295.85}).wait(1).to({graphics:mask_2_graphics_800,x:20.475,y:295.85}).wait(1).to({graphics:mask_2_graphics_801,x:22.825,y:295.85}).wait(1).to({graphics:mask_2_graphics_802,x:25.175,y:295.85}).wait(1).to({graphics:mask_2_graphics_803,x:27.55,y:295.85}).wait(1).to({graphics:mask_2_graphics_804,x:29.9,y:295.85}).wait(1).to({graphics:mask_2_graphics_805,x:32.25,y:295.85}).wait(1).to({graphics:mask_2_graphics_806,x:34.6,y:295.85}).wait(1).to({graphics:mask_2_graphics_807,x:36.95,y:295.85}).wait(1).to({graphics:mask_2_graphics_808,x:39.325,y:295.85}).wait(1).to({graphics:mask_2_graphics_809,x:41.675,y:295.85}).wait(1).to({graphics:mask_2_graphics_810,x:44.025,y:295.85}).wait(1).to({graphics:mask_2_graphics_811,x:46.375,y:295.85}).wait(1).to({graphics:mask_2_graphics_812,x:48.75,y:295.85}).wait(1).to({graphics:mask_2_graphics_813,x:51.1,y:295.85}).wait(1).to({graphics:mask_2_graphics_814,x:53.45,y:295.85}).wait(1).to({graphics:mask_2_graphics_815,x:55.8,y:295.85}).wait(1).to({graphics:mask_2_graphics_816,x:58.15,y:295.85}).wait(1).to({graphics:mask_2_graphics_817,x:60.525,y:295.85}).wait(1).to({graphics:mask_2_graphics_818,x:62.875,y:295.85}).wait(1).to({graphics:mask_2_graphics_819,x:65.225,y:295.85}).wait(1).to({graphics:mask_2_graphics_820,x:67.575,y:295.85}).wait(1).to({graphics:mask_2_graphics_821,x:69.925,y:295.85}).wait(1).to({graphics:mask_2_graphics_822,x:72.3,y:295.85}).wait(1).to({graphics:mask_2_graphics_823,x:74.65,y:295.85}).wait(1).to({graphics:mask_2_graphics_824,x:77,y:295.85}).wait(1).to({graphics:mask_2_graphics_825,x:79.35,y:295.85}).wait(1).to({graphics:mask_2_graphics_826,x:81.7,y:295.85}).wait(1).to({graphics:mask_2_graphics_827,x:84.075,y:295.85}).wait(1).to({graphics:mask_2_graphics_828,x:86.425,y:295.85}).wait(1).to({graphics:mask_2_graphics_829,x:88.775,y:295.85}).wait(1).to({graphics:mask_2_graphics_830,x:91.125,y:295.85}).wait(1).to({graphics:mask_2_graphics_831,x:93.5,y:295.85}).wait(1).to({graphics:mask_2_graphics_832,x:95.85,y:295.85}).wait(1).to({graphics:mask_2_graphics_833,x:98.2,y:295.85}).wait(1).to({graphics:mask_2_graphics_834,x:100.55,y:295.85}).wait(1).to({graphics:mask_2_graphics_835,x:102.9,y:295.85}).wait(1).to({graphics:mask_2_graphics_836,x:105.275,y:295.85}).wait(1).to({graphics:mask_2_graphics_837,x:107.625,y:295.85}).wait(1).to({graphics:mask_2_graphics_838,x:109.975,y:295.85}).wait(1).to({graphics:mask_2_graphics_839,x:112.325,y:295.85}).wait(1).to({graphics:mask_2_graphics_840,x:114.675,y:295.85}).wait(1).to({graphics:mask_2_graphics_841,x:117.05,y:295.85}).wait(1).to({graphics:mask_2_graphics_842,x:119.4,y:295.85}).wait(1).to({graphics:mask_2_graphics_843,x:121.75,y:295.85}).wait(1).to({graphics:mask_2_graphics_844,x:124.1,y:295.85}).wait(1).to({graphics:mask_2_graphics_845,x:126.45,y:295.85}).wait(1).to({graphics:mask_2_graphics_846,x:128.825,y:295.85}).wait(1).to({graphics:mask_2_graphics_847,x:131.175,y:295.85}).wait(1).to({graphics:mask_2_graphics_848,x:133.525,y:295.85}).wait(1).to({graphics:mask_2_graphics_849,x:135.875,y:295.85}).wait(1).to({graphics:mask_2_graphics_850,x:138.225,y:295.85}).wait(1).to({graphics:mask_2_graphics_851,x:140.6,y:295.85}).wait(1).to({graphics:mask_2_graphics_852,x:142.95,y:295.85}).wait(1).to({graphics:mask_2_graphics_853,x:145.3,y:295.85}).wait(1).to({graphics:mask_2_graphics_854,x:147.65,y:295.85}).wait(1).to({graphics:mask_2_graphics_855,x:150.025,y:295.85}).wait(1).to({graphics:mask_2_graphics_856,x:152.375,y:295.85}).wait(1).to({graphics:mask_2_graphics_857,x:154.725,y:295.85}).wait(1).to({graphics:mask_2_graphics_858,x:157.075,y:295.85}).wait(1).to({graphics:mask_2_graphics_859,x:159.425,y:295.85}).wait(1).to({graphics:mask_2_graphics_860,x:161.8,y:295.85}).wait(1).to({graphics:mask_2_graphics_861,x:164.15,y:295.85}).wait(1).to({graphics:mask_2_graphics_862,x:166.5,y:295.85}).wait(1).to({graphics:mask_2_graphics_863,x:168.85,y:295.85}).wait(1).to({graphics:mask_2_graphics_864,x:171.2,y:295.85}).wait(1).to({graphics:mask_2_graphics_865,x:173.575,y:295.85}).wait(1).to({graphics:mask_2_graphics_866,x:175.925,y:295.85}).wait(1).to({graphics:mask_2_graphics_867,x:178.275,y:295.85}).wait(1).to({graphics:mask_2_graphics_868,x:180.625,y:295.85}).wait(1).to({graphics:mask_2_graphics_869,x:183,y:295.85}).wait(1).to({graphics:mask_2_graphics_870,x:185.35,y:295.85}).wait(1).to({graphics:mask_2_graphics_871,x:187.7,y:295.85}).wait(1).to({graphics:mask_2_graphics_872,x:190.05,y:295.85}).wait(1).to({graphics:mask_2_graphics_873,x:192.4,y:295.85}).wait(1).to({graphics:mask_2_graphics_874,x:194.775,y:295.85}).wait(1).to({graphics:mask_2_graphics_875,x:197.125,y:295.85}).wait(1).to({graphics:mask_2_graphics_876,x:199.4502,y:158.425}).wait(299).to({graphics:mask_2_graphics_1175,x:199.4502,y:158.425}).wait(1).to({graphics:null,x:0,y:0}).wait(8));

	// 图层_15
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("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");
	this.shape_2.setTransform(262.05,321.575);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(786).to({_off:false},0).wait(389).to({_off:true},1).wait(8));

	// 图层_6 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_669 = new cjs.Graphics().p("AhcU1IAAmkIB4AAIAAGkg");
	var mask_3_graphics_670 = new cjs.Graphics().p("AhhDSIAAmjIDDAAIAAGjg");
	var mask_3_graphics_671 = new cjs.Graphics().p("AiHDSIAAmjIEPAAIAAGjg");
	var mask_3_graphics_672 = new cjs.Graphics().p("AiuDSIAAmjIFcAAIAAGjg");
	var mask_3_graphics_673 = new cjs.Graphics().p("AjUDSIAAmjIGpAAIAAGjg");
	var mask_3_graphics_674 = new cjs.Graphics().p("Aj6DSIAAmjIH1AAIAAGjg");
	var mask_3_graphics_675 = new cjs.Graphics().p("AkgDSIAAmjIJBAAIAAGjg");
	var mask_3_graphics_676 = new cjs.Graphics().p("AlGDSIAAmjIKNAAIAAGjg");
	var mask_3_graphics_677 = new cjs.Graphics().p("AlsDSIAAmjILZAAIAAGjg");
	var mask_3_graphics_678 = new cjs.Graphics().p("AmSDSIAAmjIMlAAIAAGjg");
	var mask_3_graphics_679 = new cjs.Graphics().p("Am5DSIAAmjINzAAIAAGjg");
	var mask_3_graphics_680 = new cjs.Graphics().p("AnfDSIAAmjIO/AAIAAGjg");
	var mask_3_graphics_681 = new cjs.Graphics().p("AoFDSIAAmjIQLAAIAAGjg");
	var mask_3_graphics_682 = new cjs.Graphics().p("AorDSIAAmjIRXAAIAAGjg");
	var mask_3_graphics_683 = new cjs.Graphics().p("ApRDSIAAmjISjAAIAAGjg");
	var mask_3_graphics_684 = new cjs.Graphics().p("Ap3DSIAAmjITvAAIAAGjg");
	var mask_3_graphics_685 = new cjs.Graphics().p("AqdDSIAAmjIU7AAIAAGjg");
	var mask_3_graphics_686 = new cjs.Graphics().p("ArEDSIAAmjIWJAAIAAGjg");
	var mask_3_graphics_687 = new cjs.Graphics().p("ArqDSIAAmjIXUAAIAAGjg");
	var mask_3_graphics_688 = new cjs.Graphics().p("AsQDSIAAmjIYhAAIAAGjg");
	var mask_3_graphics_689 = new cjs.Graphics().p("As2DSIAAmjIZtAAIAAGjg");
	var mask_3_graphics_690 = new cjs.Graphics().p("AtcDSIAAmjIa5AAIAAGjg");
	var mask_3_graphics_691 = new cjs.Graphics().p("AuCDSIAAmjIcFAAIAAGjg");
	var mask_3_graphics_692 = new cjs.Graphics().p("AuoDSIAAmjIdRAAIAAGjg");
	var mask_3_graphics_693 = new cjs.Graphics().p("AvPDSIAAmjIeeAAIAAGjg");
	var mask_3_graphics_694 = new cjs.Graphics().p("Av1DSIAAmjIfrAAIAAGjg");
	var mask_3_graphics_695 = new cjs.Graphics().p("AwbDSIAAmjMAg3AAAIAAGjg");
	var mask_3_graphics_696 = new cjs.Graphics().p("AxBDSIAAmjMAiDAAAIAAGjg");
	var mask_3_graphics_697 = new cjs.Graphics().p("AxnDSIAAmjMAjPAAAIAAGjg");
	var mask_3_graphics_698 = new cjs.Graphics().p("AyHDSIAAmjMAkPAAAIAAGjg");
	var mask_3_graphics_699 = new cjs.Graphics().p("AynDSIAAmjMAlOAAAIAAGjg");
	var mask_3_graphics_700 = new cjs.Graphics().p("AzGDSIAAmjMAmNAAAIAAGjg");
	var mask_3_graphics_701 = new cjs.Graphics().p("AzmDSIAAmjMAnNAAAIAAGjg");
	var mask_3_graphics_702 = new cjs.Graphics().p("A0GDSIAAmjMAoMAAAIAAGjg");
	var mask_3_graphics_703 = new cjs.Graphics().p("A0lDSIAAmjMApLAAAIAAGjg");
	var mask_3_graphics_704 = new cjs.Graphics().p("A1FDSIAAmjMAqLAAAIAAGjg");
	var mask_3_graphics_705 = new cjs.Graphics().p("A1lDSIAAmjMArLAAAIAAGjg");
	var mask_3_graphics_706 = new cjs.Graphics().p("A2EDSIAAmjMAsJAAAIAAGjg");
	var mask_3_graphics_707 = new cjs.Graphics().p("A2kDSIAAmjMAtJAAAIAAGjg");
	var mask_3_graphics_708 = new cjs.Graphics().p("A3EDSIAAmjMAuJAAAIAAGjg");
	var mask_3_graphics_709 = new cjs.Graphics().p("A3kDSIAAmjMAvJAAAIAAGjg");
	var mask_3_graphics_710 = new cjs.Graphics().p("A4DDSIAAmjMAwHAAAIAAGjg");
	var mask_3_graphics_711 = new cjs.Graphics().p("A4jDSIAAmjMAxHAAAIAAGjg");
	var mask_3_graphics_712 = new cjs.Graphics().p("A5DDSIAAmjMAyHAAAIAAGjg");
	var mask_3_graphics_713 = new cjs.Graphics().p("A5iDSIAAmjMAzFAAAIAAGjg");
	var mask_3_graphics_714 = new cjs.Graphics().p("A6CDSIAAmjMA0FAAAIAAGjg");
	var mask_3_graphics_715 = new cjs.Graphics().p("A6iDSIAAmjMA1FAAAIAAGjg");
	var mask_3_graphics_716 = new cjs.Graphics().p("A7CDSIAAmjMA2FAAAIAAGjg");
	var mask_3_graphics_717 = new cjs.Graphics().p("A7hDSIAAmjMA3DAAAIAAGjg");
	var mask_3_graphics_718 = new cjs.Graphics().p("A8BDSIAAmjMA4DAAAIAAGjg");
	var mask_3_graphics_719 = new cjs.Graphics().p("A8hDSIAAmjMA5CAAAIAAGjg");
	var mask_3_graphics_720 = new cjs.Graphics().p("A9ADSIAAmjMA6BAAAIAAGjg");
	var mask_3_graphics_721 = new cjs.Graphics().p("A9gDSIAAmjMA7BAAAIAAGjg");
	var mask_3_graphics_722 = new cjs.Graphics().p("A+ADSIAAmjMA8BAAAIAAGjg");
	var mask_3_graphics_723 = new cjs.Graphics().p("A+fDSIAAmjMA8/AAAIAAGjg");
	var mask_3_graphics_724 = new cjs.Graphics().p("A+/DSIAAmjMA9/AAAIAAGjg");
	var mask_3_graphics_725 = new cjs.Graphics().p("A/fDSIAAmjMA+/AAAIAAGjg");
	var mask_3_graphics_726 = new cjs.Graphics().p("A//DSIAAmjMA/+AAAIAAGjg");
	var mask_3_graphics_727 = new cjs.Graphics().p("EggeADSIAAmjMBA9AAAIAAGjg");
	var mask_3_graphics_728 = new cjs.Graphics().p("Egg+ADSIAAmjMBB9AAAIAAGjg");
	var mask_3_graphics_729 = new cjs.Graphics().p("EgheADSIAAmjMBC9AAAIAAGjg");
	var mask_3_graphics_730 = new cjs.Graphics().p("Egh9ADSIAAmjMBD7AAAIAAGjg");
	var mask_3_graphics_731 = new cjs.Graphics().p("EgidADSIAAmjMBE7AAAIAAGjg");
	var mask_3_graphics_732 = new cjs.Graphics().p("EgivADSIAAmjMBFfAAAIAAGjg");
	var mask_3_graphics_733 = new cjs.Graphics().p("EgjBADSIAAmjMBGDAAAIAAGjg");
	var mask_3_graphics_734 = new cjs.Graphics().p("EgjTADSIAAmjMBGnAAAIAAGjg");
	var mask_3_graphics_735 = new cjs.Graphics().p("EgjlADSIAAmjMBHLAAAIAAGjg");
	var mask_3_graphics_736 = new cjs.Graphics().p("Egj3ADSIAAmjMBHvAAAIAAGjg");
	var mask_3_graphics_737 = new cjs.Graphics().p("EgkJADSIAAmjMBITAAAIAAGjg");
	var mask_3_graphics_738 = new cjs.Graphics().p("EgkcADSIAAmjMBI5AAAIAAGjg");
	var mask_3_graphics_739 = new cjs.Graphics().p("EgkuADSIAAmjMBJdAAAIAAGjg");
	var mask_3_graphics_740 = new cjs.Graphics().p("EglAADSIAAmjMBKBAAAIAAGjg");
	var mask_3_graphics_741 = new cjs.Graphics().p("EglSADSIAAmjMBKlAAAIAAGjg");
	var mask_3_graphics_742 = new cjs.Graphics().p("EglkADSIAAmjMBLJAAAIAAGjg");
	var mask_3_graphics_743 = new cjs.Graphics().p("Egl2ADSIAAmjMBLtAAAIAAGjg");
	var mask_3_graphics_744 = new cjs.Graphics().p("EgmIADSIAAmjMBMRAAAIAAGjg");
	var mask_3_graphics_745 = new cjs.Graphics().p("EgmaADSIAAmjMBM1AAAIAAGjg");
	var mask_3_graphics_746 = new cjs.Graphics().p("EgmsADSIAAmjMBNZAAAIAAGjg");
	var mask_3_graphics_747 = new cjs.Graphics().p("Egm+ADSIAAmjMBN9AAAIAAGjg");
	var mask_3_graphics_748 = new cjs.Graphics().p("EgnQADSIAAmjMBOhAAAIAAGjg");
	var mask_3_graphics_749 = new cjs.Graphics().p("EgniADSIAAmjMBPFAAAIAAGjg");
	var mask_3_graphics_750 = new cjs.Graphics().p("Egn0ADSIAAmjMBPpAAAIAAGjg");
	var mask_3_graphics_751 = new cjs.Graphics().p("EgoGADSIAAmjMBQNAAAIAAGjg");
	var mask_3_graphics_752 = new cjs.Graphics().p("EgoYADSIAAmjMBQxAAAIAAGjg");
	var mask_3_graphics_753 = new cjs.Graphics().p("EgoqADSIAAmjMBRVAAAIAAGjg");
	var mask_3_graphics_754 = new cjs.Graphics().p("Ego9ADSIAAmjMBR6AAAIAAGjg");
	var mask_3_graphics_755 = new cjs.Graphics().p("EgpPADSIAAmjMBSeAAAIAAGjg");
	var mask_3_graphics_756 = new cjs.Graphics().p("EgphADSIAAmjMBTDAAAIAAGjg");
	var mask_3_graphics_757 = new cjs.Graphics().p("EgpzADSIAAmjMBTmAAAIAAGjg");
	var mask_3_graphics_758 = new cjs.Graphics().p("EgqFADSIAAmjMBULAAAIAAGjg");
	var mask_3_graphics_759 = new cjs.Graphics().p("EgqXADSIAAmjMBUvAAAIAAGjg");
	var mask_3_graphics_760 = new cjs.Graphics().p("EgqpAU/IAAmkMBVTAAAIAAGkg");
	var mask_3_graphics_1175 = new cjs.Graphics().p("EgqpAU/IAAmkMBVTAAAIAAGkg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(669).to({graphics:mask_3_graphics_669,x:-9.25,y:133.275}).wait(1).to({graphics:mask_3_graphics_670,x:-8.675,y:245.6}).wait(1).to({graphics:mask_3_graphics_671,x:-4.875,y:245.6}).wait(1).to({graphics:mask_3_graphics_672,x:-1.05,y:245.65}).wait(1).to({graphics:mask_3_graphics_673,x:2.75,y:245.65}).wait(1).to({graphics:mask_3_graphics_674,x:6.575,y:245.7}).wait(1).to({graphics:mask_3_graphics_675,x:10.375,y:245.7}).wait(1).to({graphics:mask_3_graphics_676,x:14.2,y:245.75}).wait(1).to({graphics:mask_3_graphics_677,x:18.025,y:245.8}).wait(1).to({graphics:mask_3_graphics_678,x:21.825,y:245.8}).wait(1).to({graphics:mask_3_graphics_679,x:25.65,y:245.85}).wait(1).to({graphics:mask_3_graphics_680,x:29.45,y:245.85}).wait(1).to({graphics:mask_3_graphics_681,x:33.275,y:245.9}).wait(1).to({graphics:mask_3_graphics_682,x:37.075,y:245.9}).wait(1).to({graphics:mask_3_graphics_683,x:40.9,y:245.95}).wait(1).to({graphics:mask_3_graphics_684,x:44.725,y:246}).wait(1).to({graphics:mask_3_graphics_685,x:48.525,y:246}).wait(1).to({graphics:mask_3_graphics_686,x:52.35,y:246.05}).wait(1).to({graphics:mask_3_graphics_687,x:56.15,y:246.05}).wait(1).to({graphics:mask_3_graphics_688,x:59.975,y:246.1}).wait(1).to({graphics:mask_3_graphics_689,x:63.775,y:246.1}).wait(1).to({graphics:mask_3_graphics_690,x:67.6,y:246.15}).wait(1).to({graphics:mask_3_graphics_691,x:71.425,y:246.2}).wait(1).to({graphics:mask_3_graphics_692,x:75.225,y:246.2}).wait(1).to({graphics:mask_3_graphics_693,x:79.05,y:246.25}).wait(1).to({graphics:mask_3_graphics_694,x:82.85,y:246.25}).wait(1).to({graphics:mask_3_graphics_695,x:86.675,y:246.3}).wait(1).to({graphics:mask_3_graphics_696,x:90.475,y:246.3}).wait(1).to({graphics:mask_3_graphics_697,x:94.3,y:246.35}).wait(1).to({graphics:mask_3_graphics_698,x:97.475,y:246.35}).wait(1).to({graphics:mask_3_graphics_699,x:100.65,y:246.4}).wait(1).to({graphics:mask_3_graphics_700,x:103.8,y:246.4}).wait(1).to({graphics:mask_3_graphics_701,x:106.975,y:246.45}).wait(1).to({graphics:mask_3_graphics_702,x:110.15,y:246.45}).wait(1).to({graphics:mask_3_graphics_703,x:113.325,y:246.5}).wait(1).to({graphics:mask_3_graphics_704,x:116.5,y:246.5}).wait(1).to({graphics:mask_3_graphics_705,x:119.675,y:246.55}).wait(1).to({graphics:mask_3_graphics_706,x:122.825,y:246.55}).wait(1).to({graphics:mask_3_graphics_707,x:126,y:246.6}).wait(1).to({graphics:mask_3_graphics_708,x:129.175,y:246.6}).wait(1).to({graphics:mask_3_graphics_709,x:132.35,y:246.65}).wait(1).to({graphics:mask_3_graphics_710,x:135.525,y:246.65}).wait(1).to({graphics:mask_3_graphics_711,x:138.7,y:246.7}).wait(1).to({graphics:mask_3_graphics_712,x:141.85,y:246.7}).wait(1).to({graphics:mask_3_graphics_713,x:145.025,y:246.75}).wait(1).to({graphics:mask_3_graphics_714,x:148.2,y:246.75}).wait(1).to({graphics:mask_3_graphics_715,x:151.375,y:246.75}).wait(1).to({graphics:mask_3_graphics_716,x:154.55,y:246.8}).wait(1).to({graphics:mask_3_graphics_717,x:157.7,y:246.8}).wait(1).to({graphics:mask_3_graphics_718,x:160.875,y:246.85}).wait(1).to({graphics:mask_3_graphics_719,x:164.05,y:246.85}).wait(1).to({graphics:mask_3_graphics_720,x:167.225,y:246.9}).wait(1).to({graphics:mask_3_graphics_721,x:170.4,y:246.9}).wait(1).to({graphics:mask_3_graphics_722,x:173.575,y:246.95}).wait(1).to({graphics:mask_3_graphics_723,x:176.725,y:246.95}).wait(1).to({graphics:mask_3_graphics_724,x:179.9,y:247}).wait(1).to({graphics:mask_3_graphics_725,x:183.075,y:247}).wait(1).to({graphics:mask_3_graphics_726,x:186.25,y:247.05}).wait(1).to({graphics:mask_3_graphics_727,x:189.425,y:247.05}).wait(1).to({graphics:mask_3_graphics_728,x:192.6,y:247.1}).wait(1).to({graphics:mask_3_graphics_729,x:195.75,y:247.1}).wait(1).to({graphics:mask_3_graphics_730,x:198.925,y:247.15}).wait(1).to({graphics:mask_3_graphics_731,x:202.1,y:247.15}).wait(1).to({graphics:mask_3_graphics_732,x:203.9,y:247.15}).wait(1).to({graphics:mask_3_graphics_733,x:205.7,y:247.2}).wait(1).to({graphics:mask_3_graphics_734,x:207.525,y:247.2}).wait(1).to({graphics:mask_3_graphics_735,x:209.325,y:247.2}).wait(1).to({graphics:mask_3_graphics_736,x:211.125,y:247.2}).wait(1).to({graphics:mask_3_graphics_737,x:212.925,y:247.25}).wait(1).to({graphics:mask_3_graphics_738,x:214.75,y:247.25}).wait(1).to({graphics:mask_3_graphics_739,x:216.55,y:247.25}).wait(1).to({graphics:mask_3_graphics_740,x:218.35,y:247.25}).wait(1).to({graphics:mask_3_graphics_741,x:220.15,y:247.3}).wait(1).to({graphics:mask_3_graphics_742,x:221.975,y:247.3}).wait(1).to({graphics:mask_3_graphics_743,x:223.775,y:247.3}).wait(1).to({graphics:mask_3_graphics_744,x:225.575,y:247.35}).wait(1).to({graphics:mask_3_graphics_745,x:227.375,y:247.35}).wait(1).to({graphics:mask_3_graphics_746,x:229.2,y:247.35}).wait(1).to({graphics:mask_3_graphics_747,x:231,y:247.35}).wait(1).to({graphics:mask_3_graphics_748,x:232.8,y:247.4}).wait(1).to({graphics:mask_3_graphics_749,x:234.6,y:247.4}).wait(1).to({graphics:mask_3_graphics_750,x:236.425,y:247.4}).wait(1).to({graphics:mask_3_graphics_751,x:238.225,y:247.45}).wait(1).to({graphics:mask_3_graphics_752,x:240.025,y:247.45}).wait(1).to({graphics:mask_3_graphics_753,x:241.825,y:247.45}).wait(1).to({graphics:mask_3_graphics_754,x:243.65,y:247.45}).wait(1).to({graphics:mask_3_graphics_755,x:245.45,y:247.5}).wait(1).to({graphics:mask_3_graphics_756,x:247.25,y:247.5}).wait(1).to({graphics:mask_3_graphics_757,x:249.05,y:247.5}).wait(1).to({graphics:mask_3_graphics_758,x:250.875,y:247.5}).wait(1).to({graphics:mask_3_graphics_759,x:252.675,y:247.55}).wait(1).to({graphics:mask_3_graphics_760,x:254.4502,y:134.275}).wait(415).to({graphics:mask_3_graphics_1175,x:254.4502,y:134.275}).wait(1).to({graphics:null,x:0,y:0}).wait(8));

	// 图层_16
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("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");
	this.shape_3.setTransform(262.05,321.575);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(669).to({_off:false},0).wait(506).to({_off:true},1).wait(8));

	// 图层_7 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_520 = new cjs.Graphics().p("AhZPUIAAmkIB3AAIAAGkg");
	var mask_4_graphics_521 = new cjs.Graphics().p("AhTDSIAAmjICnAAIAAGjg");
	var mask_4_graphics_522 = new cjs.Graphics().p("AhsDSIAAmjIDZAAIAAGjg");
	var mask_4_graphics_523 = new cjs.Graphics().p("AiEDSIAAmjIEJAAIAAGjg");
	var mask_4_graphics_524 = new cjs.Graphics().p("AicDSIAAmjIE5AAIAAGjg");
	var mask_4_graphics_525 = new cjs.Graphics().p("Ai1DSIAAmjIFqAAIAAGjg");
	var mask_4_graphics_526 = new cjs.Graphics().p("AjNDSIAAmjIGbAAIAAGjg");
	var mask_4_graphics_527 = new cjs.Graphics().p("AjlDSIAAmjIHLAAIAAGjg");
	var mask_4_graphics_528 = new cjs.Graphics().p("Aj+DSIAAmjIH9AAIAAGjg");
	var mask_4_graphics_529 = new cjs.Graphics().p("AkWDSIAAmjIItAAIAAGjg");
	var mask_4_graphics_530 = new cjs.Graphics().p("AkuDSIAAmjIJdAAIAAGjg");
	var mask_4_graphics_531 = new cjs.Graphics().p("AlHDSIAAmjIKPAAIAAGjg");
	var mask_4_graphics_532 = new cjs.Graphics().p("AlfDSIAAmjIK/AAIAAGjg");
	var mask_4_graphics_533 = new cjs.Graphics().p("Al3DSIAAmjILvAAIAAGjg");
	var mask_4_graphics_534 = new cjs.Graphics().p("AmQDSIAAmjIMgAAIAAGjg");
	var mask_4_graphics_535 = new cjs.Graphics().p("AmoDSIAAmjINRAAIAAGjg");
	var mask_4_graphics_536 = new cjs.Graphics().p("AnADSIAAmjIOBAAIAAGjg");
	var mask_4_graphics_537 = new cjs.Graphics().p("AnYDSIAAmjIOxAAIAAGjg");
	var mask_4_graphics_538 = new cjs.Graphics().p("AnxDSIAAmjIPjAAIAAGjg");
	var mask_4_graphics_539 = new cjs.Graphics().p("AoJDSIAAmjIQTAAIAAGjg");
	var mask_4_graphics_540 = new cjs.Graphics().p("AohDSIAAmjIRDAAIAAGjg");
	var mask_4_graphics_541 = new cjs.Graphics().p("Ao6DSIAAmjIR1AAIAAGjg");
	var mask_4_graphics_542 = new cjs.Graphics().p("ApSDSIAAmjISlAAIAAGjg");
	var mask_4_graphics_543 = new cjs.Graphics().p("ApqDSIAAmjITVAAIAAGjg");
	var mask_4_graphics_544 = new cjs.Graphics().p("AqDDSIAAmjIUGAAIAAGjg");
	var mask_4_graphics_545 = new cjs.Graphics().p("AqbDSIAAmjIU3AAIAAGjg");
	var mask_4_graphics_546 = new cjs.Graphics().p("AqzDSIAAmjIVnAAIAAGjg");
	var mask_4_graphics_547 = new cjs.Graphics().p("ArMDSIAAmjIWYAAIAAGjg");
	var mask_4_graphics_548 = new cjs.Graphics().p("ArkDSIAAmjIXJAAIAAGjg");
	var mask_4_graphics_549 = new cjs.Graphics().p("Ar8DSIAAmjIX5AAIAAGjg");
	var mask_4_graphics_550 = new cjs.Graphics().p("AsVDSIAAmjIYqAAIAAGjg");
	var mask_4_graphics_551 = new cjs.Graphics().p("AstDSIAAmjIZbAAIAAGjg");
	var mask_4_graphics_552 = new cjs.Graphics().p("AtFDSIAAmjIaLAAIAAGjg");
	var mask_4_graphics_553 = new cjs.Graphics().p("AteDSIAAmjIa9AAIAAGjg");
	var mask_4_graphics_554 = new cjs.Graphics().p("At2DSIAAmjIbtAAIAAGjg");
	var mask_4_graphics_555 = new cjs.Graphics().p("AuODSIAAmjIcdAAIAAGjg");
	var mask_4_graphics_556 = new cjs.Graphics().p("AumDSIAAmjIdNAAIAAGjg");
	var mask_4_graphics_557 = new cjs.Graphics().p("Au/DSIAAmjId/AAIAAGjg");
	var mask_4_graphics_558 = new cjs.Graphics().p("AvXDSIAAmjIevAAIAAGjg");
	var mask_4_graphics_559 = new cjs.Graphics().p("AvvDSIAAmjIffAAIAAGjg");
	var mask_4_graphics_560 = new cjs.Graphics().p("AwIDSIAAmjMAgQAAAIAAGjg");
	var mask_4_graphics_561 = new cjs.Graphics().p("AwgDSIAAmjMAhBAAAIAAGjg");
	var mask_4_graphics_562 = new cjs.Graphics().p("Aw4DSIAAmjMAhxAAAIAAGjg");
	var mask_4_graphics_563 = new cjs.Graphics().p("AxRDSIAAmjMAijAAAIAAGjg");
	var mask_4_graphics_564 = new cjs.Graphics().p("AxpDSIAAmjMAjTAAAIAAGjg");
	var mask_4_graphics_565 = new cjs.Graphics().p("AyBDSIAAmjMAkDAAAIAAGjg");
	var mask_4_graphics_566 = new cjs.Graphics().p("AyaDSIAAmjMAk1AAAIAAGjg");
	var mask_4_graphics_567 = new cjs.Graphics().p("AyyDSIAAmjMAllAAAIAAGjg");
	var mask_4_graphics_568 = new cjs.Graphics().p("AzKDSIAAmjMAmVAAAIAAGjg");
	var mask_4_graphics_569 = new cjs.Graphics().p("AzjDSIAAmjMAnGAAAIAAGjg");
	var mask_4_graphics_570 = new cjs.Graphics().p("Az7DSIAAmjMAn3AAAIAAGjg");
	var mask_4_graphics_571 = new cjs.Graphics().p("A0TDSIAAmjMAonAAAIAAGjg");
	var mask_4_graphics_572 = new cjs.Graphics().p("A0sDSIAAmjMApYAAAIAAGjg");
	var mask_4_graphics_573 = new cjs.Graphics().p("A1EDSIAAmjMAqJAAAIAAGjg");
	var mask_4_graphics_574 = new cjs.Graphics().p("A1cDSIAAmjMAq5AAAIAAGjg");
	var mask_4_graphics_575 = new cjs.Graphics().p("A10DSIAAmjMArpAAAIAAGjg");
	var mask_4_graphics_576 = new cjs.Graphics().p("A2NDSIAAmjMAsbAAAIAAGjg");
	var mask_4_graphics_577 = new cjs.Graphics().p("A2lDSIAAmjMAtLAAAIAAGjg");
	var mask_4_graphics_578 = new cjs.Graphics().p("A29DSIAAmjMAt7AAAIAAGjg");
	var mask_4_graphics_579 = new cjs.Graphics().p("A3WDSIAAmjMAusAAAIAAGjg");
	var mask_4_graphics_580 = new cjs.Graphics().p("A3uDSIAAmjMAvdAAAIAAGjg");
	var mask_4_graphics_581 = new cjs.Graphics().p("A4GDSIAAmjMAwNAAAIAAGjg");
	var mask_4_graphics_582 = new cjs.Graphics().p("A4fDSIAAmjMAw+AAAIAAGjg");
	var mask_4_graphics_583 = new cjs.Graphics().p("A43DSIAAmjMAxvAAAIAAGjg");
	var mask_4_graphics_584 = new cjs.Graphics().p("A5PDSIAAmjMAyfAAAIAAGjg");
	var mask_4_graphics_585 = new cjs.Graphics().p("A5oDSIAAmjMAzRAAAIAAGjg");
	var mask_4_graphics_586 = new cjs.Graphics().p("A6ADSIAAmjMA0BAAAIAAGjg");
	var mask_4_graphics_587 = new cjs.Graphics().p("A6YDSIAAmjMA0xAAAIAAGjg");
	var mask_4_graphics_588 = new cjs.Graphics().p("A6xDSIAAmjMA1jAAAIAAGjg");
	var mask_4_graphics_589 = new cjs.Graphics().p("A7JDSIAAmjMA2TAAAIAAGjg");
	var mask_4_graphics_590 = new cjs.Graphics().p("A7JDSIAAmjMA2TAAAIAAGjg");
	var mask_4_graphics_591 = new cjs.Graphics().p("A7JDSIAAmjMA2TAAAIAAGjg");
	var mask_4_graphics_592 = new cjs.Graphics().p("A7JDSIAAmjMA2TAAAIAAGjg");
	var mask_4_graphics_593 = new cjs.Graphics().p("A7JDSIAAmjMA2TAAAIAAGjg");
	var mask_4_graphics_594 = new cjs.Graphics().p("A7JDSIAAmjMA2TAAAIAAGjg");
	var mask_4_graphics_595 = new cjs.Graphics().p("A7fDSIAAmjMA2/AAAIAAGjg");
	var mask_4_graphics_596 = new cjs.Graphics().p("A72DSIAAmjMA3tAAAIAAGjg");
	var mask_4_graphics_597 = new cjs.Graphics().p("A8NDSIAAmjMA4aAAAIAAGjg");
	var mask_4_graphics_598 = new cjs.Graphics().p("A8jDSIAAmjMA5HAAAIAAGjg");
	var mask_4_graphics_599 = new cjs.Graphics().p("A86DSIAAmjMA51AAAIAAGjg");
	var mask_4_graphics_600 = new cjs.Graphics().p("A9QDSIAAmjMA6hAAAIAAGjg");
	var mask_4_graphics_601 = new cjs.Graphics().p("A9nDSIAAmjMA7PAAAIAAGjg");
	var mask_4_graphics_602 = new cjs.Graphics().p("A9+DSIAAmjMA78AAAIAAGjg");
	var mask_4_graphics_603 = new cjs.Graphics().p("A+UDSIAAmjMA8pAAAIAAGjg");
	var mask_4_graphics_604 = new cjs.Graphics().p("A+rDSIAAmjMA9WAAAIAAGjg");
	var mask_4_graphics_605 = new cjs.Graphics().p("A/BDSIAAmjMA+DAAAIAAGjg");
	var mask_4_graphics_606 = new cjs.Graphics().p("A/YDSIAAmjMA+xAAAIAAGjg");
	var mask_4_graphics_607 = new cjs.Graphics().p("A/uDSIAAmjMA/dAAAIAAGjg");
	var mask_4_graphics_608 = new cjs.Graphics().p("EggFADSIAAmjMBALAAAIAAGjg");
	var mask_4_graphics_609 = new cjs.Graphics().p("EggcADSIAAmjMBA4AAAIAAGjg");
	var mask_4_graphics_610 = new cjs.Graphics().p("EggyADSIAAmjMBBlAAAIAAGjg");
	var mask_4_graphics_611 = new cjs.Graphics().p("EghJADSIAAmjMBCTAAAIAAGjg");
	var mask_4_graphics_612 = new cjs.Graphics().p("EghfADSIAAmjMBC/AAAIAAGjg");
	var mask_4_graphics_613 = new cjs.Graphics().p("Egh2ADSIAAmjMBDtAAAIAAGjg");
	var mask_4_graphics_614 = new cjs.Graphics().p("EgiNADSIAAmjMBEbAAAIAAGjg");
	var mask_4_graphics_615 = new cjs.Graphics().p("EgijADSIAAmjMBFHAAAIAAGjg");
	var mask_4_graphics_616 = new cjs.Graphics().p("Egi6ADSIAAmjMBF1AAAIAAGjg");
	var mask_4_graphics_617 = new cjs.Graphics().p("EgjQADSIAAmjMBGhAAAIAAGjg");
	var mask_4_graphics_618 = new cjs.Graphics().p("EgjnAPKIAAmkMBHPAAAIAAGkg");
	var mask_4_graphics_1175 = new cjs.Graphics().p("EgjnAPKIAAmkMBHPAAAIAAGkg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(520).to({graphics:mask_4_graphics_520,x:-9,y:98}).wait(1).to({graphics:mask_4_graphics_521,x:-9.575,y:175}).wait(1).to({graphics:mask_4_graphics_522,x:-7.125,y:174.95}).wait(1).to({graphics:mask_4_graphics_523,x:-4.7,y:174.95}).wait(1).to({graphics:mask_4_graphics_524,x:-2.275,y:174.9}).wait(1).to({graphics:mask_4_graphics_525,x:0.15,y:174.9}).wait(1).to({graphics:mask_4_graphics_526,x:2.6,y:174.85}).wait(1).to({graphics:mask_4_graphics_527,x:5.025,y:174.85}).wait(1).to({graphics:mask_4_graphics_528,x:7.45,y:174.85}).wait(1).to({graphics:mask_4_graphics_529,x:9.875,y:174.8}).wait(1).to({graphics:mask_4_graphics_530,x:12.325,y:174.8}).wait(1).to({graphics:mask_4_graphics_531,x:14.75,y:174.75}).wait(1).to({graphics:mask_4_graphics_532,x:17.175,y:174.75}).wait(1).to({graphics:mask_4_graphics_533,x:19.6,y:174.7}).wait(1).to({graphics:mask_4_graphics_534,x:22.05,y:174.7}).wait(1).to({graphics:mask_4_graphics_535,x:24.475,y:174.65}).wait(1).to({graphics:mask_4_graphics_536,x:26.9,y:174.65}).wait(1).to({graphics:mask_4_graphics_537,x:29.325,y:174.65}).wait(1).to({graphics:mask_4_graphics_538,x:31.775,y:174.6}).wait(1).to({graphics:mask_4_graphics_539,x:34.2,y:174.6}).wait(1).to({graphics:mask_4_graphics_540,x:36.625,y:174.55}).wait(1).to({graphics:mask_4_graphics_541,x:39.075,y:174.55}).wait(1).to({graphics:mask_4_graphics_542,x:41.5,y:174.5}).wait(1).to({graphics:mask_4_graphics_543,x:43.925,y:174.5}).wait(1).to({graphics:mask_4_graphics_544,x:46.35,y:174.5}).wait(1).to({graphics:mask_4_graphics_545,x:48.8,y:174.45}).wait(1).to({graphics:mask_4_graphics_546,x:51.225,y:174.45}).wait(1).to({graphics:mask_4_graphics_547,x:53.65,y:174.4}).wait(1).to({graphics:mask_4_graphics_548,x:56.075,y:174.4}).wait(1).to({graphics:mask_4_graphics_549,x:58.525,y:174.35}).wait(1).to({graphics:mask_4_graphics_550,x:60.95,y:174.35}).wait(1).to({graphics:mask_4_graphics_551,x:63.375,y:174.35}).wait(1).to({graphics:mask_4_graphics_552,x:65.8,y:174.3}).wait(1).to({graphics:mask_4_graphics_553,x:68.25,y:174.3}).wait(1).to({graphics:mask_4_graphics_554,x:70.675,y:174.25}).wait(1).to({graphics:mask_4_graphics_555,x:73.1,y:174.25}).wait(1).to({graphics:mask_4_graphics_556,x:75.525,y:174.2}).wait(1).to({graphics:mask_4_graphics_557,x:77.975,y:174.2}).wait(1).to({graphics:mask_4_graphics_558,x:80.4,y:174.15}).wait(1).to({graphics:mask_4_graphics_559,x:82.825,y:174.15}).wait(1).to({graphics:mask_4_graphics_560,x:85.25,y:174.15}).wait(1).to({graphics:mask_4_graphics_561,x:87.7,y:174.1}).wait(1).to({graphics:mask_4_graphics_562,x:90.125,y:174.1}).wait(1).to({graphics:mask_4_graphics_563,x:92.55,y:174.05}).wait(1).to({graphics:mask_4_graphics_564,x:94.975,y:174.05}).wait(1).to({graphics:mask_4_graphics_565,x:97.425,y:174}).wait(1).to({graphics:mask_4_graphics_566,x:99.85,y:174}).wait(1).to({graphics:mask_4_graphics_567,x:102.275,y:174}).wait(1).to({graphics:mask_4_graphics_568,x:104.7,y:173.95}).wait(1).to({graphics:mask_4_graphics_569,x:107.15,y:173.95}).wait(1).to({graphics:mask_4_graphics_570,x:109.575,y:173.9}).wait(1).to({graphics:mask_4_graphics_571,x:112,y:173.9}).wait(1).to({graphics:mask_4_graphics_572,x:114.45,y:173.85}).wait(1).to({graphics:mask_4_graphics_573,x:116.875,y:173.85}).wait(1).to({graphics:mask_4_graphics_574,x:119.3,y:173.85}).wait(1).to({graphics:mask_4_graphics_575,x:121.725,y:173.8}).wait(1).to({graphics:mask_4_graphics_576,x:124.175,y:173.8}).wait(1).to({graphics:mask_4_graphics_577,x:126.6,y:173.75}).wait(1).to({graphics:mask_4_graphics_578,x:129.025,y:173.75}).wait(1).to({graphics:mask_4_graphics_579,x:131.45,y:173.7}).wait(1).to({graphics:mask_4_graphics_580,x:133.9,y:173.7}).wait(1).to({graphics:mask_4_graphics_581,x:136.325,y:173.65}).wait(1).to({graphics:mask_4_graphics_582,x:138.75,y:173.65}).wait(1).to({graphics:mask_4_graphics_583,x:141.175,y:173.65}).wait(1).to({graphics:mask_4_graphics_584,x:143.625,y:173.6}).wait(1).to({graphics:mask_4_graphics_585,x:146.05,y:173.6}).wait(1).to({graphics:mask_4_graphics_586,x:148.475,y:173.55}).wait(1).to({graphics:mask_4_graphics_587,x:150.9,y:173.55}).wait(1).to({graphics:mask_4_graphics_588,x:153.35,y:173.5}).wait(1).to({graphics:mask_4_graphics_589,x:155.775,y:173.5}).wait(1).to({graphics:mask_4_graphics_590,x:155.775,y:173.5}).wait(1).to({graphics:mask_4_graphics_591,x:155.775,y:173.5}).wait(1).to({graphics:mask_4_graphics_592,x:155.775,y:173.5}).wait(1).to({graphics:mask_4_graphics_593,x:155.775,y:173.5}).wait(1).to({graphics:mask_4_graphics_594,x:155.775,y:173.5}).wait(1).to({graphics:mask_4_graphics_595,x:158.025,y:173.5}).wait(1).to({graphics:mask_4_graphics_596,x:160.3,y:173.45}).wait(1).to({graphics:mask_4_graphics_597,x:162.55,y:173.45}).wait(1).to({graphics:mask_4_graphics_598,x:164.8,y:173.4}).wait(1).to({graphics:mask_4_graphics_599,x:167.075,y:173.4}).wait(1).to({graphics:mask_4_graphics_600,x:169.325,y:173.4}).wait(1).to({graphics:mask_4_graphics_601,x:171.575,y:173.35}).wait(1).to({graphics:mask_4_graphics_602,x:173.85,y:173.35}).wait(1).to({graphics:mask_4_graphics_603,x:176.1,y:173.3}).wait(1).to({graphics:mask_4_graphics_604,x:178.35,y:173.3}).wait(1).to({graphics:mask_4_graphics_605,x:180.625,y:173.25}).wait(1).to({graphics:mask_4_graphics_606,x:182.875,y:173.25}).wait(1).to({graphics:mask_4_graphics_607,x:185.125,y:173.25}).wait(1).to({graphics:mask_4_graphics_608,x:187.4,y:173.2}).wait(1).to({graphics:mask_4_graphics_609,x:189.65,y:173.2}).wait(1).to({graphics:mask_4_graphics_610,x:191.9,y:173.15}).wait(1).to({graphics:mask_4_graphics_611,x:194.175,y:173.15}).wait(1).to({graphics:mask_4_graphics_612,x:196.425,y:173.15}).wait(1).to({graphics:mask_4_graphics_613,x:198.675,y:173.1}).wait(1).to({graphics:mask_4_graphics_614,x:200.95,y:173.1}).wait(1).to({graphics:mask_4_graphics_615,x:203.2,y:173.05}).wait(1).to({graphics:mask_4_graphics_616,x:205.45,y:173.05}).wait(1).to({graphics:mask_4_graphics_617,x:207.725,y:173}).wait(1).to({graphics:mask_4_graphics_618,x:209.9502,y:97}).wait(557).to({graphics:mask_4_graphics_1175,x:209.9502,y:97}).wait(1).to({graphics:null,x:0,y:0}).wait(8));

	// 图层_17
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("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");
	this.shape_4.setTransform(263.525,97.775);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(520).to({_off:false},0).wait(655).to({_off:true},1).wait(8));

	// 图层_8 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_405 = new cjs.Graphics().p("AhZLcIAAmkIB3AAIAAGkg");
	var mask_5_graphics_406 = new cjs.Graphics().p("AhQDSIAAmjIChAAIAAGjg");
	var mask_5_graphics_407 = new cjs.Graphics().p("AhlDSIAAmjIDLAAIAAGjg");
	var mask_5_graphics_408 = new cjs.Graphics().p("Ah5DSIAAmjIDzAAIAAGjg");
	var mask_5_graphics_409 = new cjs.Graphics().p("AiODSIAAmjIEdAAIAAGjg");
	var mask_5_graphics_410 = new cjs.Graphics().p("AijDSIAAmjIFHAAIAAGjg");
	var mask_5_graphics_411 = new cjs.Graphics().p("Ai4DSIAAmjIFxAAIAAGjg");
	var mask_5_graphics_412 = new cjs.Graphics().p("AjNDSIAAmjIGbAAIAAGjg");
	var mask_5_graphics_413 = new cjs.Graphics().p("AjhDSIAAmjIHDAAIAAGjg");
	var mask_5_graphics_414 = new cjs.Graphics().p("Aj2DSIAAmjIHtAAIAAGjg");
	var mask_5_graphics_415 = new cjs.Graphics().p("AkLDSIAAmjIIXAAIAAGjg");
	var mask_5_graphics_416 = new cjs.Graphics().p("AkgDSIAAmjIJAAAIAAGjg");
	var mask_5_graphics_417 = new cjs.Graphics().p("Ak0DSIAAmjIJpAAIAAGjg");
	var mask_5_graphics_418 = new cjs.Graphics().p("AlJDSIAAmjIKTAAIAAGjg");
	var mask_5_graphics_419 = new cjs.Graphics().p("AleDSIAAmjIK9AAIAAGjg");
	var mask_5_graphics_420 = new cjs.Graphics().p("AlzDSIAAmjILnAAIAAGjg");
	var mask_5_graphics_421 = new cjs.Graphics().p("AmIDSIAAmjIMQAAIAAGjg");
	var mask_5_graphics_422 = new cjs.Graphics().p("AmcDSIAAmjIM5AAIAAGjg");
	var mask_5_graphics_423 = new cjs.Graphics().p("AmxDSIAAmjINjAAIAAGjg");
	var mask_5_graphics_424 = new cjs.Graphics().p("AnGDSIAAmjIONAAIAAGjg");
	var mask_5_graphics_425 = new cjs.Graphics().p("AnbDSIAAmjIO3AAIAAGjg");
	var mask_5_graphics_426 = new cjs.Graphics().p("AnvDSIAAmjIPfAAIAAGjg");
	var mask_5_graphics_427 = new cjs.Graphics().p("AoEDSIAAmjIQJAAIAAGjg");
	var mask_5_graphics_428 = new cjs.Graphics().p("AoZDSIAAmjIQzAAIAAGjg");
	var mask_5_graphics_429 = new cjs.Graphics().p("AouDSIAAmjIRcAAIAAGjg");
	var mask_5_graphics_430 = new cjs.Graphics().p("ApCDSIAAmjISFAAIAAGjg");
	var mask_5_graphics_431 = new cjs.Graphics().p("ApXDSIAAmjISvAAIAAGjg");
	var mask_5_graphics_432 = new cjs.Graphics().p("ApsDSIAAmjITZAAIAAGjg");
	var mask_5_graphics_433 = new cjs.Graphics().p("AqBDSIAAmjIUDAAIAAGjg");
	var mask_5_graphics_434 = new cjs.Graphics().p("AqWDSIAAmjIUsAAIAAGjg");
	var mask_5_graphics_435 = new cjs.Graphics().p("AqqDSIAAmjIVVAAIAAGjg");
	var mask_5_graphics_436 = new cjs.Graphics().p("Aq/DSIAAmjIV/AAIAAGjg");
	var mask_5_graphics_437 = new cjs.Graphics().p("ArUDSIAAmjIWpAAIAAGjg");
	var mask_5_graphics_438 = new cjs.Graphics().p("ArpDSIAAmjIXTAAIAAGjg");
	var mask_5_graphics_439 = new cjs.Graphics().p("Ar9DSIAAmjIX7AAIAAGjg");
	var mask_5_graphics_440 = new cjs.Graphics().p("AsSDSIAAmjIYlAAIAAGjg");
	var mask_5_graphics_441 = new cjs.Graphics().p("AsnDSIAAmjIZPAAIAAGjg");
	var mask_5_graphics_442 = new cjs.Graphics().p("As8DSIAAmjIZ5AAIAAGjg");
	var mask_5_graphics_443 = new cjs.Graphics().p("AtRDSIAAmjIajAAIAAGjg");
	var mask_5_graphics_444 = new cjs.Graphics().p("AtlDSIAAmjIbLAAIAAGjg");
	var mask_5_graphics_445 = new cjs.Graphics().p("At6DSIAAmjIb1AAIAAGjg");
	var mask_5_graphics_446 = new cjs.Graphics().p("AuPDSIAAmjIcfAAIAAGjg");
	var mask_5_graphics_447 = new cjs.Graphics().p("AukDSIAAmjIdIAAIAAGjg");
	var mask_5_graphics_448 = new cjs.Graphics().p("Au4DSIAAmjIdxAAIAAGjg");
	var mask_5_graphics_449 = new cjs.Graphics().p("AvNDSIAAmjIebAAIAAGjg");
	var mask_5_graphics_450 = new cjs.Graphics().p("AviDSIAAmjIfFAAIAAGjg");
	var mask_5_graphics_451 = new cjs.Graphics().p("Av3DSIAAmjIfvAAIAAGjg");
	var mask_5_graphics_452 = new cjs.Graphics().p("AwMDSIAAmjMAgYAAAIAAGjg");
	var mask_5_graphics_453 = new cjs.Graphics().p("AwgDSIAAmjMAhBAAAIAAGjg");
	var mask_5_graphics_454 = new cjs.Graphics().p("Aw1DSIAAmjMAhrAAAIAAGjg");
	var mask_5_graphics_455 = new cjs.Graphics().p("AxKDSIAAmjMAiVAAAIAAGjg");
	var mask_5_graphics_456 = new cjs.Graphics().p("AxfDSIAAmjMAi/AAAIAAGjg");
	var mask_5_graphics_457 = new cjs.Graphics().p("AxzDSIAAmjMAjnAAAIAAGjg");
	var mask_5_graphics_458 = new cjs.Graphics().p("AyIDSIAAmjMAkRAAAIAAGjg");
	var mask_5_graphics_459 = new cjs.Graphics().p("AydDSIAAmjMAk7AAAIAAGjg");
	var mask_5_graphics_460 = new cjs.Graphics().p("AyyDSIAAmjMAlkAAAIAAGjg");
	var mask_5_graphics_461 = new cjs.Graphics().p("AzGDSIAAmjMAmNAAAIAAGjg");
	var mask_5_graphics_462 = new cjs.Graphics().p("AzbDSIAAmjMAm3AAAIAAGjg");
	var mask_5_graphics_463 = new cjs.Graphics().p("AzwDSIAAmjMAnhAAAIAAGjg");
	var mask_5_graphics_464 = new cjs.Graphics().p("A0FDSIAAmjMAoLAAAIAAGjg");
	var mask_5_graphics_465 = new cjs.Graphics().p("A0aDSIAAmjMAo0AAAIAAGjg");
	var mask_5_graphics_466 = new cjs.Graphics().p("A0uDSIAAmjMApdAAAIAAGjg");
	var mask_5_graphics_467 = new cjs.Graphics().p("A1DDSIAAmjMAqHAAAIAAGjg");
	var mask_5_graphics_468 = new cjs.Graphics().p("A1YDSIAAmjMAqxAAAIAAGjg");
	var mask_5_graphics_469 = new cjs.Graphics().p("A1tDSIAAmjMArbAAAIAAGjg");
	var mask_5_graphics_470 = new cjs.Graphics().p("A2BDSIAAmjMAsDAAAIAAGjg");
	var mask_5_graphics_471 = new cjs.Graphics().p("A2WDSIAAmjMAstAAAIAAGjg");
	var mask_5_graphics_472 = new cjs.Graphics().p("A2rDSIAAmjMAtXAAAIAAGjg");
	var mask_5_graphics_473 = new cjs.Graphics().p("A3ADSIAAmjMAuBAAAIAAGjg");
	var mask_5_graphics_474 = new cjs.Graphics().p("A3VDSIAAmjMAurAAAIAAGjg");
	var mask_5_graphics_475 = new cjs.Graphics().p("A3pDSIAAmjMAvTAAAIAAGjg");
	var mask_5_graphics_476 = new cjs.Graphics().p("A3+DSIAAmjMAv9AAAIAAGjg");
	var mask_5_graphics_477 = new cjs.Graphics().p("A4TDSIAAmjMAwnAAAIAAGjg");
	var mask_5_graphics_478 = new cjs.Graphics().p("A4oDSIAAmjMAxQAAAIAAGjg");
	var mask_5_graphics_479 = new cjs.Graphics().p("A48DSIAAmjMAx5AAAIAAGjg");
	var mask_5_graphics_480 = new cjs.Graphics().p("A5RDSIAAmjMAyjAAAIAAGjg");
	var mask_5_graphics_481 = new cjs.Graphics().p("A5mDSIAAmjMAzNAAAIAAGjg");
	var mask_5_graphics_482 = new cjs.Graphics().p("A57DSIAAmjMAz3AAAIAAGjg");
	var mask_5_graphics_483 = new cjs.Graphics().p("A6QDSIAAmjMA0gAAAIAAGjg");
	var mask_5_graphics_484 = new cjs.Graphics().p("A6kDSIAAmjMA1JAAAIAAGjg");
	var mask_5_graphics_485 = new cjs.Graphics().p("A65DSIAAmjMA1zAAAIAAGjg");
	var mask_5_graphics_486 = new cjs.Graphics().p("A7ODSIAAmjMA2dAAAIAAGjg");
	var mask_5_graphics_487 = new cjs.Graphics().p("A7jDSIAAmjMA3HAAAIAAGjg");
	var mask_5_graphics_488 = new cjs.Graphics().p("A73DSIAAmjMA3vAAAIAAGjg");
	var mask_5_graphics_489 = new cjs.Graphics().p("A8MDSIAAmjMA4ZAAAIAAGjg");
	var mask_5_graphics_490 = new cjs.Graphics().p("A8hDSIAAmjMA5DAAAIAAGjg");
	var mask_5_graphics_491 = new cjs.Graphics().p("A82DSIAAmjMA5sAAAIAAGjg");
	var mask_5_graphics_492 = new cjs.Graphics().p("A9KDSIAAmjMA6VAAAIAAGjg");
	var mask_5_graphics_493 = new cjs.Graphics().p("A9fDSIAAmjMA6/AAAIAAGjg");
	var mask_5_graphics_494 = new cjs.Graphics().p("A90DSIAAmjMA7pAAAIAAGjg");
	var mask_5_graphics_495 = new cjs.Graphics().p("A+JDSIAAmjMA8TAAAIAAGjg");
	var mask_5_graphics_496 = new cjs.Graphics().p("A+eDSIAAmjMA88AAAIAAGjg");
	var mask_5_graphics_497 = new cjs.Graphics().p("A+yDSIAAmjMA9lAAAIAAGjg");
	var mask_5_graphics_498 = new cjs.Graphics().p("A/HDSIAAmjMA+PAAAIAAGjg");
	var mask_5_graphics_499 = new cjs.Graphics().p("A/cDSIAAmjMA+5AAAIAAGjg");
	var mask_5_graphics_500 = new cjs.Graphics().p("A/xDSIAAmjMA/jAAAIAAGjg");
	var mask_5_graphics_501 = new cjs.Graphics().p("EggFADSIAAmjMBALAAAIAAGjg");
	var mask_5_graphics_502 = new cjs.Graphics().p("EggaADSIAAmjMBA1AAAIAAGjg");
	var mask_5_graphics_503 = new cjs.Graphics().p("EggvADSIAAmjMBBfAAAIAAGjg");
	var mask_5_graphics_504 = new cjs.Graphics().p("EghEADSIAAmjMBCJAAAIAAGjg");
	var mask_5_graphics_505 = new cjs.Graphics().p("EghZADSIAAmjMBCzAAAIAAGjg");
	var mask_5_graphics_506 = new cjs.Graphics().p("EghtADSIAAmjMBDbAAAIAAGjg");
	var mask_5_graphics_507 = new cjs.Graphics().p("EgiCADSIAAmjMBEFAAAIAAGjg");
	var mask_5_graphics_508 = new cjs.Graphics().p("EgiXALcIAAmkMBEvAAAIAAGkg");
	var mask_5_graphics_1175 = new cjs.Graphics().p("EgiXALcIAAmkMBEvAAAIAAGkg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(405).to({graphics:mask_5_graphics_405,x:-9,y:73.175}).wait(1).to({graphics:mask_5_graphics_406,x:-9.925,y:125.35}).wait(1).to({graphics:mask_5_graphics_407,x:-7.85,y:125.35}).wait(1).to({graphics:mask_5_graphics_408,x:-5.775,y:125.35}).wait(1).to({graphics:mask_5_graphics_409,x:-3.7,y:125.35}).wait(1).to({graphics:mask_5_graphics_410,x:-1.625,y:125.35}).wait(1).to({graphics:mask_5_graphics_411,x:0.475,y:125.35}).wait(1).to({graphics:mask_5_graphics_412,x:2.55,y:125.35}).wait(1).to({graphics:mask_5_graphics_413,x:4.625,y:125.35}).wait(1).to({graphics:mask_5_graphics_414,x:6.7,y:125.35}).wait(1).to({graphics:mask_5_graphics_415,x:8.775,y:125.35}).wait(1).to({graphics:mask_5_graphics_416,x:10.85,y:125.35}).wait(1).to({graphics:mask_5_graphics_417,x:12.925,y:125.35}).wait(1).to({graphics:mask_5_graphics_418,x:15,y:125.35}).wait(1).to({graphics:mask_5_graphics_419,x:17.075,y:125.35}).wait(1).to({graphics:mask_5_graphics_420,x:19.15,y:125.35}).wait(1).to({graphics:mask_5_graphics_421,x:21.25,y:125.35}).wait(1).to({graphics:mask_5_graphics_422,x:23.325,y:125.35}).wait(1).to({graphics:mask_5_graphics_423,x:25.4,y:125.35}).wait(1).to({graphics:mask_5_graphics_424,x:27.475,y:125.35}).wait(1).to({graphics:mask_5_graphics_425,x:29.55,y:125.35}).wait(1).to({graphics:mask_5_graphics_426,x:31.625,y:125.35}).wait(1).to({graphics:mask_5_graphics_427,x:33.7,y:125.35}).wait(1).to({graphics:mask_5_graphics_428,x:35.775,y:125.35}).wait(1).to({graphics:mask_5_graphics_429,x:37.85,y:125.35}).wait(1).to({graphics:mask_5_graphics_430,x:39.925,y:125.35}).wait(1).to({graphics:mask_5_graphics_431,x:42.025,y:125.35}).wait(1).to({graphics:mask_5_graphics_432,x:44.1,y:125.35}).wait(1).to({graphics:mask_5_graphics_433,x:46.175,y:125.35}).wait(1).to({graphics:mask_5_graphics_434,x:48.25,y:125.35}).wait(1).to({graphics:mask_5_graphics_435,x:50.325,y:125.35}).wait(1).to({graphics:mask_5_graphics_436,x:52.4,y:125.35}).wait(1).to({graphics:mask_5_graphics_437,x:54.475,y:125.35}).wait(1).to({graphics:mask_5_graphics_438,x:56.55,y:125.35}).wait(1).to({graphics:mask_5_graphics_439,x:58.625,y:125.35}).wait(1).to({graphics:mask_5_graphics_440,x:60.7,y:125.35}).wait(1).to({graphics:mask_5_graphics_441,x:62.8,y:125.35}).wait(1).to({graphics:mask_5_graphics_442,x:64.875,y:125.35}).wait(1).to({graphics:mask_5_graphics_443,x:66.95,y:125.35}).wait(1).to({graphics:mask_5_graphics_444,x:69.025,y:125.35}).wait(1).to({graphics:mask_5_graphics_445,x:71.1,y:125.35}).wait(1).to({graphics:mask_5_graphics_446,x:73.175,y:125.35}).wait(1).to({graphics:mask_5_graphics_447,x:75.25,y:125.35}).wait(1).to({graphics:mask_5_graphics_448,x:77.325,y:125.35}).wait(1).to({graphics:mask_5_graphics_449,x:79.4,y:125.35}).wait(1).to({graphics:mask_5_graphics_450,x:81.475,y:125.35}).wait(1).to({graphics:mask_5_graphics_451,x:83.575,y:125.35}).wait(1).to({graphics:mask_5_graphics_452,x:85.65,y:125.35}).wait(1).to({graphics:mask_5_graphics_453,x:87.725,y:125.35}).wait(1).to({graphics:mask_5_graphics_454,x:89.8,y:125.35}).wait(1).to({graphics:mask_5_graphics_455,x:91.875,y:125.35}).wait(1).to({graphics:mask_5_graphics_456,x:93.95,y:125.35}).wait(1).to({graphics:mask_5_graphics_457,x:96.025,y:125.35}).wait(1).to({graphics:mask_5_graphics_458,x:98.1,y:125.35}).wait(1).to({graphics:mask_5_graphics_459,x:100.175,y:125.35}).wait(1).to({graphics:mask_5_graphics_460,x:102.25,y:125.35}).wait(1).to({graphics:mask_5_graphics_461,x:104.325,y:125.35}).wait(1).to({graphics:mask_5_graphics_462,x:106.4,y:125.35}).wait(1).to({graphics:mask_5_graphics_463,x:108.5,y:125.35}).wait(1).to({graphics:mask_5_graphics_464,x:110.575,y:125.35}).wait(1).to({graphics:mask_5_graphics_465,x:112.65,y:125.35}).wait(1).to({graphics:mask_5_graphics_466,x:114.725,y:125.35}).wait(1).to({graphics:mask_5_graphics_467,x:116.8,y:125.35}).wait(1).to({graphics:mask_5_graphics_468,x:118.875,y:125.35}).wait(1).to({graphics:mask_5_graphics_469,x:120.95,y:125.35}).wait(1).to({graphics:mask_5_graphics_470,x:123.025,y:125.35}).wait(1).to({graphics:mask_5_graphics_471,x:125.1,y:125.35}).wait(1).to({graphics:mask_5_graphics_472,x:127.175,y:125.35}).wait(1).to({graphics:mask_5_graphics_473,x:129.275,y:125.35}).wait(1).to({graphics:mask_5_graphics_474,x:131.35,y:125.35}).wait(1).to({graphics:mask_5_graphics_475,x:133.425,y:125.35}).wait(1).to({graphics:mask_5_graphics_476,x:135.5,y:125.35}).wait(1).to({graphics:mask_5_graphics_477,x:137.575,y:125.35}).wait(1).to({graphics:mask_5_graphics_478,x:139.65,y:125.35}).wait(1).to({graphics:mask_5_graphics_479,x:141.725,y:125.35}).wait(1).to({graphics:mask_5_graphics_480,x:143.8,y:125.35}).wait(1).to({graphics:mask_5_graphics_481,x:145.875,y:125.35}).wait(1).to({graphics:mask_5_graphics_482,x:147.95,y:125.35}).wait(1).to({graphics:mask_5_graphics_483,x:150.05,y:125.35}).wait(1).to({graphics:mask_5_graphics_484,x:152.125,y:125.35}).wait(1).to({graphics:mask_5_graphics_485,x:154.2,y:125.35}).wait(1).to({graphics:mask_5_graphics_486,x:156.275,y:125.35}).wait(1).to({graphics:mask_5_graphics_487,x:158.35,y:125.35}).wait(1).to({graphics:mask_5_graphics_488,x:160.425,y:125.35}).wait(1).to({graphics:mask_5_graphics_489,x:162.5,y:125.35}).wait(1).to({graphics:mask_5_graphics_490,x:164.575,y:125.35}).wait(1).to({graphics:mask_5_graphics_491,x:166.65,y:125.35}).wait(1).to({graphics:mask_5_graphics_492,x:168.725,y:125.35}).wait(1).to({graphics:mask_5_graphics_493,x:170.825,y:125.35}).wait(1).to({graphics:mask_5_graphics_494,x:172.9,y:125.35}).wait(1).to({graphics:mask_5_graphics_495,x:174.975,y:125.35}).wait(1).to({graphics:mask_5_graphics_496,x:177.05,y:125.35}).wait(1).to({graphics:mask_5_graphics_497,x:179.125,y:125.35}).wait(1).to({graphics:mask_5_graphics_498,x:181.2,y:125.35}).wait(1).to({graphics:mask_5_graphics_499,x:183.275,y:125.35}).wait(1).to({graphics:mask_5_graphics_500,x:185.35,y:125.35}).wait(1).to({graphics:mask_5_graphics_501,x:187.425,y:125.35}).wait(1).to({graphics:mask_5_graphics_502,x:189.5,y:125.35}).wait(1).to({graphics:mask_5_graphics_503,x:191.6,y:125.35}).wait(1).to({graphics:mask_5_graphics_504,x:193.675,y:125.35}).wait(1).to({graphics:mask_5_graphics_505,x:195.75,y:125.35}).wait(1).to({graphics:mask_5_graphics_506,x:197.825,y:125.35}).wait(1).to({graphics:mask_5_graphics_507,x:199.9,y:125.35}).wait(1).to({graphics:mask_5_graphics_508,x:201.9501,y:73.175}).wait(667).to({graphics:mask_5_graphics_1175,x:201.9501,y:73.175}).wait(1).to({graphics:null,x:0,y:0}).wait(8));

	// 图层_18
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("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");
	this.shape_5.setTransform(263.525,97.775);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(405).to({_off:false},0).wait(770).to({_off:true},1).wait(8));

	// 图层_9 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_297 = new cjs.Graphics().p("AhZHjIAAmjIB3AAIAAGjg");
	var mask_6_graphics_298 = new cjs.Graphics().p("AhUDSIAAmjICpAAIAAGjg");
	var mask_6_graphics_299 = new cjs.Graphics().p("AhtDSIAAmjIDaAAIAAGjg");
	var mask_6_graphics_300 = new cjs.Graphics().p("AiFDSIAAmjIELAAIAAGjg");
	var mask_6_graphics_301 = new cjs.Graphics().p("AieDSIAAmjIE9AAIAAGjg");
	var mask_6_graphics_302 = new cjs.Graphics().p("Ai3DSIAAmjIFvAAIAAGjg");
	var mask_6_graphics_303 = new cjs.Graphics().p("AjQDSIAAmjIGgAAIAAGjg");
	var mask_6_graphics_304 = new cjs.Graphics().p("AjoDSIAAmjIHRAAIAAGjg");
	var mask_6_graphics_305 = new cjs.Graphics().p("AkBDSIAAmjIIDAAIAAGjg");
	var mask_6_graphics_306 = new cjs.Graphics().p("AkaDSIAAmjII1AAIAAGjg");
	var mask_6_graphics_307 = new cjs.Graphics().p("AkyDSIAAmjIJlAAIAAGjg");
	var mask_6_graphics_308 = new cjs.Graphics().p("AlLDSIAAmjIKXAAIAAGjg");
	var mask_6_graphics_309 = new cjs.Graphics().p("AlkDSIAAmjILJAAIAAGjg");
	var mask_6_graphics_310 = new cjs.Graphics().p("Al9DSIAAmjIL7AAIAAGjg");
	var mask_6_graphics_311 = new cjs.Graphics().p("AmVDSIAAmjIMrAAIAAGjg");
	var mask_6_graphics_312 = new cjs.Graphics().p("AmuDSIAAmjINdAAIAAGjg");
	var mask_6_graphics_313 = new cjs.Graphics().p("AnHDSIAAmjIOPAAIAAGjg");
	var mask_6_graphics_314 = new cjs.Graphics().p("AngDSIAAmjIPBAAIAAGjg");
	var mask_6_graphics_315 = new cjs.Graphics().p("An4DSIAAmjIPxAAIAAGjg");
	var mask_6_graphics_316 = new cjs.Graphics().p("AoRDSIAAmjIQjAAIAAGjg");
	var mask_6_graphics_317 = new cjs.Graphics().p("AoqDSIAAmjIRVAAIAAGjg");
	var mask_6_graphics_318 = new cjs.Graphics().p("ApDDSIAAmjISHAAIAAGjg");
	var mask_6_graphics_319 = new cjs.Graphics().p("ApbDSIAAmjIS3AAIAAGjg");
	var mask_6_graphics_320 = new cjs.Graphics().p("Ap0DSIAAmjITpAAIAAGjg");
	var mask_6_graphics_321 = new cjs.Graphics().p("AqNDSIAAmjIUaAAIAAGjg");
	var mask_6_graphics_322 = new cjs.Graphics().p("AqlDSIAAmjIVLAAIAAGjg");
	var mask_6_graphics_323 = new cjs.Graphics().p("Aq+DSIAAmjIV9AAIAAGjg");
	var mask_6_graphics_324 = new cjs.Graphics().p("ArXDSIAAmjIWvAAIAAGjg");
	var mask_6_graphics_325 = new cjs.Graphics().p("ArwDSIAAmjIXgAAIAAGjg");
	var mask_6_graphics_326 = new cjs.Graphics().p("AsIDSIAAmjIYRAAIAAGjg");
	var mask_6_graphics_327 = new cjs.Graphics().p("AshDSIAAmjIZDAAIAAGjg");
	var mask_6_graphics_328 = new cjs.Graphics().p("As6DSIAAmjIZ1AAIAAGjg");
	var mask_6_graphics_329 = new cjs.Graphics().p("AtTDSIAAmjIamAAIAAGjg");
	var mask_6_graphics_330 = new cjs.Graphics().p("AtrDSIAAmjIbXAAIAAGjg");
	var mask_6_graphics_331 = new cjs.Graphics().p("AuEDSIAAmjIcJAAIAAGjg");
	var mask_6_graphics_332 = new cjs.Graphics().p("AudDSIAAmjIc7AAIAAGjg");
	var mask_6_graphics_333 = new cjs.Graphics().p("Au2DSIAAmjIdsAAIAAGjg");
	var mask_6_graphics_334 = new cjs.Graphics().p("AvODSIAAmjIedAAIAAGjg");
	var mask_6_graphics_335 = new cjs.Graphics().p("AvnDSIAAmjIfPAAIAAGjg");
	var mask_6_graphics_336 = new cjs.Graphics().p("AwADSIAAmjMAgBAAAIAAGjg");
	var mask_6_graphics_337 = new cjs.Graphics().p("AwYDSIAAmjMAgxAAAIAAGjg");
	var mask_6_graphics_338 = new cjs.Graphics().p("AwxDSIAAmjMAhjAAAIAAGjg");
	var mask_6_graphics_339 = new cjs.Graphics().p("AxKDSIAAmjMAiVAAAIAAGjg");
	var mask_6_graphics_340 = new cjs.Graphics().p("AxjDSIAAmjMAjHAAAIAAGjg");
	var mask_6_graphics_341 = new cjs.Graphics().p("Ax7DSIAAmjMAj3AAAIAAGjg");
	var mask_6_graphics_342 = new cjs.Graphics().p("AyUDSIAAmjMAkpAAAIAAGjg");
	var mask_6_graphics_343 = new cjs.Graphics().p("AytDSIAAmjMAlbAAAIAAGjg");
	var mask_6_graphics_344 = new cjs.Graphics().p("AzGDSIAAmjMAmNAAAIAAGjg");
	var mask_6_graphics_345 = new cjs.Graphics().p("AzeDSIAAmjMAm9AAAIAAGjg");
	var mask_6_graphics_346 = new cjs.Graphics().p("Az3DSIAAmjMAnvAAAIAAGjg");
	var mask_6_graphics_347 = new cjs.Graphics().p("A0QDSIAAmjMAohAAAIAAGjg");
	var mask_6_graphics_348 = new cjs.Graphics().p("A0pDSIAAmjMApTAAAIAAGjg");
	var mask_6_graphics_349 = new cjs.Graphics().p("A1BDSIAAmjMAqDAAAIAAGjg");
	var mask_6_graphics_350 = new cjs.Graphics().p("A1aDSIAAmjMAq1AAAIAAGjg");
	var mask_6_graphics_351 = new cjs.Graphics().p("A1zDSIAAmjMArnAAAIAAGjg");
	var mask_6_graphics_352 = new cjs.Graphics().p("A2MDSIAAmjMAsZAAAIAAGjg");
	var mask_6_graphics_353 = new cjs.Graphics().p("A2kDSIAAmjMAtJAAAIAAGjg");
	var mask_6_graphics_354 = new cjs.Graphics().p("A29DSIAAmjMAt7AAAIAAGjg");
	var mask_6_graphics_355 = new cjs.Graphics().p("A3WDSIAAmjMAusAAAIAAGjg");
	var mask_6_graphics_356 = new cjs.Graphics().p("A3uDSIAAmjMAvdAAAIAAGjg");
	var mask_6_graphics_357 = new cjs.Graphics().p("A4HDSIAAmjMAwPAAAIAAGjg");
	var mask_6_graphics_358 = new cjs.Graphics().p("A4gDSIAAmjMAxBAAAIAAGjg");
	var mask_6_graphics_359 = new cjs.Graphics().p("A45DSIAAmjMAxyAAAIAAGjg");
	var mask_6_graphics_360 = new cjs.Graphics().p("A5RDSIAAmjMAyjAAAIAAGjg");
	var mask_6_graphics_361 = new cjs.Graphics().p("A5qDSIAAmjMAzVAAAIAAGjg");
	var mask_6_graphics_362 = new cjs.Graphics().p("A6DDSIAAmjMA0HAAAIAAGjg");
	var mask_6_graphics_363 = new cjs.Graphics().p("A6cDSIAAmjMA04AAAIAAGjg");
	var mask_6_graphics_364 = new cjs.Graphics().p("A60DSIAAmjMA1pAAAIAAGjg");
	var mask_6_graphics_365 = new cjs.Graphics().p("A7NDSIAAmjMA2bAAAIAAGjg");
	var mask_6_graphics_366 = new cjs.Graphics().p("A7mDSIAAmjMA3NAAAIAAGjg");
	var mask_6_graphics_367 = new cjs.Graphics().p("A7/DSIAAmjMA3+AAAIAAGjg");
	var mask_6_graphics_368 = new cjs.Graphics().p("A8XDSIAAmjMA4vAAAIAAGjg");
	var mask_6_graphics_369 = new cjs.Graphics().p("A8wDSIAAmjMA5hAAAIAAGjg");
	var mask_6_graphics_370 = new cjs.Graphics().p("A9JDSIAAmjMA6TAAAIAAGjg");
	var mask_6_graphics_371 = new cjs.Graphics().p("A9hDSIAAmjMA7DAAAIAAGjg");
	var mask_6_graphics_372 = new cjs.Graphics().p("A96DSIAAmjMA71AAAIAAGjg");
	var mask_6_graphics_373 = new cjs.Graphics().p("A+TDSIAAmjMA8nAAAIAAGjg");
	var mask_6_graphics_374 = new cjs.Graphics().p("A+sDSIAAmjMA9ZAAAIAAGjg");
	var mask_6_graphics_375 = new cjs.Graphics().p("A/EDSIAAmjMA+JAAAIAAGjg");
	var mask_6_graphics_376 = new cjs.Graphics().p("A/dDSIAAmjMA+7AAAIAAGjg");
	var mask_6_graphics_377 = new cjs.Graphics().p("A/2DSIAAmjMA/tAAAIAAGjg");
	var mask_6_graphics_378 = new cjs.Graphics().p("EggPADSIAAmjMBAfAAAIAAGjg");
	var mask_6_graphics_379 = new cjs.Graphics().p("EggnADSIAAmjMBBPAAAIAAGjg");
	var mask_6_graphics_380 = new cjs.Graphics().p("EghAADSIAAmjMBCBAAAIAAGjg");
	var mask_6_graphics_381 = new cjs.Graphics().p("EghZADSIAAmjMBCzAAAIAAGjg");
	var mask_6_graphics_382 = new cjs.Graphics().p("EghyADSIAAmjMBDlAAAIAAGjg");
	var mask_6_graphics_383 = new cjs.Graphics().p("EgiKADSIAAmjMBEVAAAIAAGjg");
	var mask_6_graphics_384 = new cjs.Graphics().p("EgijADSIAAmjMBFHAAAIAAGjg");
	var mask_6_graphics_385 = new cjs.Graphics().p("Egi8ADSIAAmjMBF4AAAIAAGjg");
	var mask_6_graphics_386 = new cjs.Graphics().p("EgjUADSIAAmjMBGpAAAIAAGjg");
	var mask_6_graphics_387 = new cjs.Graphics().p("EgjtADSIAAmjMBHbAAAIAAGjg");
	var mask_6_graphics_388 = new cjs.Graphics().p("EgkGADSIAAmjMBINAAAIAAGjg");
	var mask_6_graphics_389 = new cjs.Graphics().p("EgkfADSIAAmjMBI/AAAIAAGjg");
	var mask_6_graphics_390 = new cjs.Graphics().p("Egk3ADSIAAmjMBJvAAAIAAGjg");
	var mask_6_graphics_391 = new cjs.Graphics().p("EglQADSIAAmjMBKhAAAIAAGjg");
	var mask_6_graphics_392 = new cjs.Graphics().p("EglpAHjIAAmjMBLTAAAIAAGjg");
	var mask_6_graphics_1175 = new cjs.Graphics().p("EglpAHjIAAmjMBLTAAAIAAGjg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(297).to({graphics:mask_6_graphics_297,x:-9,y:48.35}).wait(1).to({graphics:mask_6_graphics_298,x:-9.525,y:75.7}).wait(1).to({graphics:mask_6_graphics_299,x:-7.05,y:75.7}).wait(1).to({graphics:mask_6_graphics_300,x:-4.575,y:75.7}).wait(1).to({graphics:mask_6_graphics_301,x:-2.1,y:75.7}).wait(1).to({graphics:mask_6_graphics_302,x:0.375,y:75.7}).wait(1).to({graphics:mask_6_graphics_303,x:2.85,y:75.7}).wait(1).to({graphics:mask_6_graphics_304,x:5.325,y:75.7}).wait(1).to({graphics:mask_6_graphics_305,x:7.8,y:75.7}).wait(1).to({graphics:mask_6_graphics_306,x:10.25,y:75.7}).wait(1).to({graphics:mask_6_graphics_307,x:12.725,y:75.7}).wait(1).to({graphics:mask_6_graphics_308,x:15.2,y:75.7}).wait(1).to({graphics:mask_6_graphics_309,x:17.675,y:75.7}).wait(1).to({graphics:mask_6_graphics_310,x:20.15,y:75.7}).wait(1).to({graphics:mask_6_graphics_311,x:22.625,y:75.7}).wait(1).to({graphics:mask_6_graphics_312,x:25.1,y:75.7}).wait(1).to({graphics:mask_6_graphics_313,x:27.575,y:75.7}).wait(1).to({graphics:mask_6_graphics_314,x:30.05,y:75.7}).wait(1).to({graphics:mask_6_graphics_315,x:32.525,y:75.7}).wait(1).to({graphics:mask_6_graphics_316,x:35,y:75.7}).wait(1).to({graphics:mask_6_graphics_317,x:37.475,y:75.7}).wait(1).to({graphics:mask_6_graphics_318,x:39.95,y:75.7}).wait(1).to({graphics:mask_6_graphics_319,x:42.425,y:75.7}).wait(1).to({graphics:mask_6_graphics_320,x:44.9,y:75.7}).wait(1).to({graphics:mask_6_graphics_321,x:47.35,y:75.7}).wait(1).to({graphics:mask_6_graphics_322,x:49.825,y:75.7}).wait(1).to({graphics:mask_6_graphics_323,x:52.3,y:75.7}).wait(1).to({graphics:mask_6_graphics_324,x:54.775,y:75.7}).wait(1).to({graphics:mask_6_graphics_325,x:57.25,y:75.7}).wait(1).to({graphics:mask_6_graphics_326,x:59.725,y:75.7}).wait(1).to({graphics:mask_6_graphics_327,x:62.2,y:75.7}).wait(1).to({graphics:mask_6_graphics_328,x:64.675,y:75.7}).wait(1).to({graphics:mask_6_graphics_329,x:67.15,y:75.7}).wait(1).to({graphics:mask_6_graphics_330,x:69.625,y:75.7}).wait(1).to({graphics:mask_6_graphics_331,x:72.1,y:75.7}).wait(1).to({graphics:mask_6_graphics_332,x:74.575,y:75.7}).wait(1).to({graphics:mask_6_graphics_333,x:77.05,y:75.7}).wait(1).to({graphics:mask_6_graphics_334,x:79.525,y:75.7}).wait(1).to({graphics:mask_6_graphics_335,x:82,y:75.7}).wait(1).to({graphics:mask_6_graphics_336,x:84.475,y:75.7}).wait(1).to({graphics:mask_6_graphics_337,x:86.925,y:75.7}).wait(1).to({graphics:mask_6_graphics_338,x:89.4,y:75.7}).wait(1).to({graphics:mask_6_graphics_339,x:91.875,y:75.7}).wait(1).to({graphics:mask_6_graphics_340,x:94.35,y:75.7}).wait(1).to({graphics:mask_6_graphics_341,x:96.825,y:75.7}).wait(1).to({graphics:mask_6_graphics_342,x:99.3,y:75.7}).wait(1).to({graphics:mask_6_graphics_343,x:101.775,y:75.7}).wait(1).to({graphics:mask_6_graphics_344,x:104.25,y:75.7}).wait(1).to({graphics:mask_6_graphics_345,x:106.725,y:75.7}).wait(1).to({graphics:mask_6_graphics_346,x:109.2,y:75.7}).wait(1).to({graphics:mask_6_graphics_347,x:111.675,y:75.7}).wait(1).to({graphics:mask_6_graphics_348,x:114.15,y:75.7}).wait(1).to({graphics:mask_6_graphics_349,x:116.625,y:75.7}).wait(1).to({graphics:mask_6_graphics_350,x:119.1,y:75.7}).wait(1).to({graphics:mask_6_graphics_351,x:121.575,y:75.7}).wait(1).to({graphics:mask_6_graphics_352,x:124.05,y:75.7}).wait(1).to({graphics:mask_6_graphics_353,x:126.5,y:75.7}).wait(1).to({graphics:mask_6_graphics_354,x:128.975,y:75.7}).wait(1).to({graphics:mask_6_graphics_355,x:131.45,y:75.7}).wait(1).to({graphics:mask_6_graphics_356,x:133.925,y:75.7}).wait(1).to({graphics:mask_6_graphics_357,x:136.4,y:75.7}).wait(1).to({graphics:mask_6_graphics_358,x:138.875,y:75.7}).wait(1).to({graphics:mask_6_graphics_359,x:141.35,y:75.7}).wait(1).to({graphics:mask_6_graphics_360,x:143.825,y:75.7}).wait(1).to({graphics:mask_6_graphics_361,x:146.3,y:75.7}).wait(1).to({graphics:mask_6_graphics_362,x:148.775,y:75.7}).wait(1).to({graphics:mask_6_graphics_363,x:151.25,y:75.7}).wait(1).to({graphics:mask_6_graphics_364,x:153.725,y:75.7}).wait(1).to({graphics:mask_6_graphics_365,x:156.2,y:75.7}).wait(1).to({graphics:mask_6_graphics_366,x:158.675,y:75.7}).wait(1).to({graphics:mask_6_graphics_367,x:161.15,y:75.7}).wait(1).to({graphics:mask_6_graphics_368,x:163.625,y:75.7}).wait(1).to({graphics:mask_6_graphics_369,x:166.075,y:75.7}).wait(1).to({graphics:mask_6_graphics_370,x:168.55,y:75.7}).wait(1).to({graphics:mask_6_graphics_371,x:171.025,y:75.7}).wait(1).to({graphics:mask_6_graphics_372,x:173.5,y:75.7}).wait(1).to({graphics:mask_6_graphics_373,x:175.975,y:75.7}).wait(1).to({graphics:mask_6_graphics_374,x:178.45,y:75.7}).wait(1).to({graphics:mask_6_graphics_375,x:180.925,y:75.7}).wait(1).to({graphics:mask_6_graphics_376,x:183.4,y:75.7}).wait(1).to({graphics:mask_6_graphics_377,x:185.875,y:75.7}).wait(1).to({graphics:mask_6_graphics_378,x:188.35,y:75.7}).wait(1).to({graphics:mask_6_graphics_379,x:190.825,y:75.7}).wait(1).to({graphics:mask_6_graphics_380,x:193.3,y:75.7}).wait(1).to({graphics:mask_6_graphics_381,x:195.775,y:75.7}).wait(1).to({graphics:mask_6_graphics_382,x:198.25,y:75.7}).wait(1).to({graphics:mask_6_graphics_383,x:200.725,y:75.7}).wait(1).to({graphics:mask_6_graphics_384,x:203.175,y:75.7}).wait(1).to({graphics:mask_6_graphics_385,x:205.65,y:75.7}).wait(1).to({graphics:mask_6_graphics_386,x:208.125,y:75.7}).wait(1).to({graphics:mask_6_graphics_387,x:210.6,y:75.7}).wait(1).to({graphics:mask_6_graphics_388,x:213.075,y:75.7}).wait(1).to({graphics:mask_6_graphics_389,x:215.55,y:75.7}).wait(1).to({graphics:mask_6_graphics_390,x:218.025,y:75.7}).wait(1).to({graphics:mask_6_graphics_391,x:220.5,y:75.7}).wait(1).to({graphics:mask_6_graphics_392,x:222.9501,y:48.35}).wait(783).to({graphics:mask_6_graphics_1175,x:222.9501,y:48.35}).wait(1).to({graphics:null,x:0,y:0}).wait(8));

	// 图层_19
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("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");
	this.shape_6.setTransform(263.525,97.775);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(297).to({_off:false},0).wait(878).to({_off:true},1).wait(8));

	// 图层_10 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_178 = new cjs.Graphics().p("Ag7DSIAAmjIB3AAIAAGjg");
	var mask_7_graphics_179 = new cjs.Graphics().p("AhbDSIAAmjIC3AAIAAGjg");
	var mask_7_graphics_180 = new cjs.Graphics().p("Ah7DSIAAmjID3AAIAAGjg");
	var mask_7_graphics_181 = new cjs.Graphics().p("AibDSIAAmjIE3AAIAAGjg");
	var mask_7_graphics_182 = new cjs.Graphics().p("Ai7DSIAAmjIF3AAIAAGjg");
	var mask_7_graphics_183 = new cjs.Graphics().p("AjaDSIAAmjIG1AAIAAGjg");
	var mask_7_graphics_184 = new cjs.Graphics().p("Aj6DSIAAmjIH1AAIAAGjg");
	var mask_7_graphics_185 = new cjs.Graphics().p("AkaDSIAAmjII1AAIAAGjg");
	var mask_7_graphics_186 = new cjs.Graphics().p("Ak6DSIAAmjIJ1AAIAAGjg");
	var mask_7_graphics_187 = new cjs.Graphics().p("AlaDSIAAmjIK0AAIAAGjg");
	var mask_7_graphics_188 = new cjs.Graphics().p("Al6DSIAAmjIL0AAIAAGjg");
	var mask_7_graphics_189 = new cjs.Graphics().p("AmZDSIAAmjIMzAAIAAGjg");
	var mask_7_graphics_190 = new cjs.Graphics().p("Am5DSIAAmjINzAAIAAGjg");
	var mask_7_graphics_191 = new cjs.Graphics().p("AnZDSIAAmjIOzAAIAAGjg");
	var mask_7_graphics_192 = new cjs.Graphics().p("An5DSIAAmjIPzAAIAAGjg");
	var mask_7_graphics_193 = new cjs.Graphics().p("AoZDSIAAmjIQzAAIAAGjg");
	var mask_7_graphics_194 = new cjs.Graphics().p("Ao5DSIAAmjIRzAAIAAGjg");
	var mask_7_graphics_195 = new cjs.Graphics().p("ApYDSIAAmjISxAAIAAGjg");
	var mask_7_graphics_196 = new cjs.Graphics().p("Ap4DSIAAmjITxAAIAAGjg");
	var mask_7_graphics_197 = new cjs.Graphics().p("AqYDSIAAmjIUxAAIAAGjg");
	var mask_7_graphics_198 = new cjs.Graphics().p("Aq4DSIAAmjIVxAAIAAGjg");
	var mask_7_graphics_199 = new cjs.Graphics().p("ArYDSIAAmjIWxAAIAAGjg");
	var mask_7_graphics_200 = new cjs.Graphics().p("Ar4DSIAAmjIXwAAIAAGjg");
	var mask_7_graphics_201 = new cjs.Graphics().p("AsXDSIAAmjIYvAAIAAGjg");
	var mask_7_graphics_202 = new cjs.Graphics().p("As3DSIAAmjIZvAAIAAGjg");
	var mask_7_graphics_203 = new cjs.Graphics().p("AtXDSIAAmjIavAAIAAGjg");
	var mask_7_graphics_204 = new cjs.Graphics().p("At3DSIAAmjIbvAAIAAGjg");
	var mask_7_graphics_205 = new cjs.Graphics().p("AuXDSIAAmjIcvAAIAAGjg");
	var mask_7_graphics_206 = new cjs.Graphics().p("Au3DSIAAmjIduAAIAAGjg");
	var mask_7_graphics_207 = new cjs.Graphics().p("AvXDSIAAmjIevAAIAAGjg");
	var mask_7_graphics_208 = new cjs.Graphics().p("Av2DSIAAmjIftAAIAAGjg");
	var mask_7_graphics_209 = new cjs.Graphics().p("AwWDSIAAmjMAgtAAAIAAGjg");
	var mask_7_graphics_210 = new cjs.Graphics().p("Aw2DSIAAmjMAhtAAAIAAGjg");
	var mask_7_graphics_211 = new cjs.Graphics().p("AxWDSIAAmjMAitAAAIAAGjg");
	var mask_7_graphics_212 = new cjs.Graphics().p("Ax2DSIAAmjMAjtAAAIAAGjg");
	var mask_7_graphics_213 = new cjs.Graphics().p("AyWDSIAAmjMAksAAAIAAGjg");
	var mask_7_graphics_214 = new cjs.Graphics().p("Ay1DSIAAmjMAlrAAAIAAGjg");
	var mask_7_graphics_215 = new cjs.Graphics().p("AzVDSIAAmjMAmrAAAIAAGjg");
	var mask_7_graphics_216 = new cjs.Graphics().p("Az1DSIAAmjMAnrAAAIAAGjg");
	var mask_7_graphics_217 = new cjs.Graphics().p("A0VDSIAAmjMAorAAAIAAGjg");
	var mask_7_graphics_218 = new cjs.Graphics().p("A01DSIAAmjMAprAAAIAAGjg");
	var mask_7_graphics_219 = new cjs.Graphics().p("A1VDSIAAmjMAqqAAAIAAGjg");
	var mask_7_graphics_220 = new cjs.Graphics().p("A11DSIAAmjMArrAAAIAAGjg");
	var mask_7_graphics_221 = new cjs.Graphics().p("A2UDSIAAmjMAspAAAIAAGjg");
	var mask_7_graphics_222 = new cjs.Graphics().p("A20DSIAAmjMAtpAAAIAAGjg");
	var mask_7_graphics_223 = new cjs.Graphics().p("A3UDSIAAmjMAupAAAIAAGjg");
	var mask_7_graphics_224 = new cjs.Graphics().p("A30DSIAAmjMAvpAAAIAAGjg");
	var mask_7_graphics_225 = new cjs.Graphics().p("A4UDSIAAmjMAwpAAAIAAGjg");
	var mask_7_graphics_226 = new cjs.Graphics().p("A40DSIAAmjMAxoAAAIAAGjg");
	var mask_7_graphics_227 = new cjs.Graphics().p("A5TDSIAAmjMAynAAAIAAGjg");
	var mask_7_graphics_228 = new cjs.Graphics().p("A5zDSIAAmjMAznAAAIAAGjg");
	var mask_7_graphics_229 = new cjs.Graphics().p("A6TDSIAAmjMA0nAAAIAAGjg");
	var mask_7_graphics_230 = new cjs.Graphics().p("A6zDSIAAmjMA1nAAAIAAGjg");
	var mask_7_graphics_231 = new cjs.Graphics().p("A7TDSIAAmjMA2nAAAIAAGjg");
	var mask_7_graphics_232 = new cjs.Graphics().p("A7zDSIAAmjMA3mAAAIAAGjg");
	var mask_7_graphics_233 = new cjs.Graphics().p("A8SDSIAAmjMA4lAAAIAAGjg");
	var mask_7_graphics_234 = new cjs.Graphics().p("A8yDSIAAmjMA5lAAAIAAGjg");
	var mask_7_graphics_235 = new cjs.Graphics().p("A9SDSIAAmjMA6lAAAIAAGjg");
	var mask_7_graphics_236 = new cjs.Graphics().p("A9yDSIAAmjMA7lAAAIAAGjg");
	var mask_7_graphics_237 = new cjs.Graphics().p("A+SDSIAAmjMA8lAAAIAAGjg");
	var mask_7_graphics_238 = new cjs.Graphics().p("A+yDSIAAmjMA9lAAAIAAGjg");
	var mask_7_graphics_239 = new cjs.Graphics().p("A/SDSIAAmjMA+lAAAIAAGjg");
	var mask_7_graphics_240 = new cjs.Graphics().p("A/xDSIAAmjMA/jAAAIAAGjg");
	var mask_7_graphics_241 = new cjs.Graphics().p("EggRADSIAAmjMBAjAAAIAAGjg");
	var mask_7_graphics_242 = new cjs.Graphics().p("EggxADSIAAmjMBBjAAAIAAGjg");
	var mask_7_graphics_243 = new cjs.Graphics().p("EghRADSIAAmjMBCjAAAIAAGjg");
	var mask_7_graphics_244 = new cjs.Graphics().p("EghxADSIAAmjMBDiAAAIAAGjg");
	var mask_7_graphics_245 = new cjs.Graphics().p("EgiRADSIAAmjMBEiAAAIAAGjg");
	var mask_7_graphics_246 = new cjs.Graphics().p("EgiwADSIAAmjMBFhAAAIAAGjg");
	var mask_7_graphics_247 = new cjs.Graphics().p("EgjQADSIAAmjMBGhAAAIAAGjg");
	var mask_7_graphics_248 = new cjs.Graphics().p("EgjwADSIAAmjMBHhAAAIAAGjg");
	var mask_7_graphics_249 = new cjs.Graphics().p("EgkQADSIAAmjMBIhAAAIAAGjg");
	var mask_7_graphics_250 = new cjs.Graphics().p("EgkwADSIAAmjMBJhAAAIAAGjg");
	var mask_7_graphics_251 = new cjs.Graphics().p("EglQADSIAAmjMBKhAAAIAAGjg");
	var mask_7_graphics_252 = new cjs.Graphics().p("EglvADSIAAmjMBLfAAAIAAGjg");
	var mask_7_graphics_253 = new cjs.Graphics().p("EgmPADSIAAmjMBMfAAAIAAGjg");
	var mask_7_graphics_254 = new cjs.Graphics().p("EgmvADSIAAmjMBNfAAAIAAGjg");
	var mask_7_graphics_255 = new cjs.Graphics().p("EgnPADSIAAmjMBOfAAAIAAGjg");
	var mask_7_graphics_256 = new cjs.Graphics().p("EgnvADSIAAmjMBPfAAAIAAGjg");
	var mask_7_graphics_257 = new cjs.Graphics().p("EgoPADSIAAmjMBQeAAAIAAGjg");
	var mask_7_graphics_258 = new cjs.Graphics().p("EgouADSIAAmjMBRdAAAIAAGjg");
	var mask_7_graphics_259 = new cjs.Graphics().p("EgpOADSIAAmjMBSdAAAIAAGjg");
	var mask_7_graphics_260 = new cjs.Graphics().p("EgpuADSIAAmjMBTdAAAIAAGjg");
	var mask_7_graphics_261 = new cjs.Graphics().p("EgqOADSIAAmjMBUdAAAIAAGjg");
	var mask_7_graphics_262 = new cjs.Graphics().p("EgquADrIAAmjMBVdAAAIAAGjg");
	var mask_7_graphics_1175 = new cjs.Graphics().p("EgquADrIAAmjMBVdAAAIAAGjg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(178).to({graphics:mask_7_graphics_178,x:-12,y:26.05}).wait(1).to({graphics:mask_7_graphics_179,x:-8.825,y:26.05}).wait(1).to({graphics:mask_7_graphics_180,x:-5.625,y:26.05}).wait(1).to({graphics:mask_7_graphics_181,x:-2.45,y:26.05}).wait(1).to({graphics:mask_7_graphics_182,x:0.75,y:26.05}).wait(1).to({graphics:mask_7_graphics_183,x:3.925,y:26.05}).wait(1).to({graphics:mask_7_graphics_184,x:7.1,y:26.05}).wait(1).to({graphics:mask_7_graphics_185,x:10.3,y:26.05}).wait(1).to({graphics:mask_7_graphics_186,x:13.475,y:26.05}).wait(1).to({graphics:mask_7_graphics_187,x:16.65,y:26.05}).wait(1).to({graphics:mask_7_graphics_188,x:19.85,y:26.05}).wait(1).to({graphics:mask_7_graphics_189,x:23.025,y:26.05}).wait(1).to({graphics:mask_7_graphics_190,x:26.2,y:26.05}).wait(1).to({graphics:mask_7_graphics_191,x:29.4,y:26.05}).wait(1).to({graphics:mask_7_graphics_192,x:32.575,y:26.05}).wait(1).to({graphics:mask_7_graphics_193,x:35.775,y:26.05}).wait(1).to({graphics:mask_7_graphics_194,x:38.95,y:26.05}).wait(1).to({graphics:mask_7_graphics_195,x:42.125,y:26.05}).wait(1).to({graphics:mask_7_graphics_196,x:45.325,y:26.05}).wait(1).to({graphics:mask_7_graphics_197,x:48.5,y:26.05}).wait(1).to({graphics:mask_7_graphics_198,x:51.675,y:26.05}).wait(1).to({graphics:mask_7_graphics_199,x:54.875,y:26.05}).wait(1).to({graphics:mask_7_graphics_200,x:58.05,y:26.05}).wait(1).to({graphics:mask_7_graphics_201,x:61.225,y:26.05}).wait(1).to({graphics:mask_7_graphics_202,x:64.425,y:26.05}).wait(1).to({graphics:mask_7_graphics_203,x:67.6,y:26.05}).wait(1).to({graphics:mask_7_graphics_204,x:70.8,y:26.05}).wait(1).to({graphics:mask_7_graphics_205,x:73.975,y:26.05}).wait(1).to({graphics:mask_7_graphics_206,x:77.15,y:26.05}).wait(1).to({graphics:mask_7_graphics_207,x:80.35,y:26.05}).wait(1).to({graphics:mask_7_graphics_208,x:83.525,y:26.05}).wait(1).to({graphics:mask_7_graphics_209,x:86.7,y:26.05}).wait(1).to({graphics:mask_7_graphics_210,x:89.9,y:26.05}).wait(1).to({graphics:mask_7_graphics_211,x:93.075,y:26.05}).wait(1).to({graphics:mask_7_graphics_212,x:96.25,y:26.05}).wait(1).to({graphics:mask_7_graphics_213,x:99.45,y:26.05}).wait(1).to({graphics:mask_7_graphics_214,x:102.625,y:26.05}).wait(1).to({graphics:mask_7_graphics_215,x:105.825,y:26.05}).wait(1).to({graphics:mask_7_graphics_216,x:109,y:26.05}).wait(1).to({graphics:mask_7_graphics_217,x:112.175,y:26.05}).wait(1).to({graphics:mask_7_graphics_218,x:115.375,y:26.05}).wait(1).to({graphics:mask_7_graphics_219,x:118.55,y:26.05}).wait(1).to({graphics:mask_7_graphics_220,x:121.75,y:26.05}).wait(1).to({graphics:mask_7_graphics_221,x:124.925,y:26.05}).wait(1).to({graphics:mask_7_graphics_222,x:128.1,y:26.05}).wait(1).to({graphics:mask_7_graphics_223,x:131.3,y:26.05}).wait(1).to({graphics:mask_7_graphics_224,x:134.475,y:26.05}).wait(1).to({graphics:mask_7_graphics_225,x:137.65,y:26.05}).wait(1).to({graphics:mask_7_graphics_226,x:140.85,y:26.05}).wait(1).to({graphics:mask_7_graphics_227,x:144.025,y:26.05}).wait(1).to({graphics:mask_7_graphics_228,x:147.225,y:26.05}).wait(1).to({graphics:mask_7_graphics_229,x:150.4,y:26.05}).wait(1).to({graphics:mask_7_graphics_230,x:153.575,y:26.05}).wait(1).to({graphics:mask_7_graphics_231,x:156.775,y:26.05}).wait(1).to({graphics:mask_7_graphics_232,x:159.95,y:26.05}).wait(1).to({graphics:mask_7_graphics_233,x:163.125,y:26.05}).wait(1).to({graphics:mask_7_graphics_234,x:166.325,y:26.05}).wait(1).to({graphics:mask_7_graphics_235,x:169.5,y:26.05}).wait(1).to({graphics:mask_7_graphics_236,x:172.675,y:26.05}).wait(1).to({graphics:mask_7_graphics_237,x:175.875,y:26.05}).wait(1).to({graphics:mask_7_graphics_238,x:179.05,y:26.05}).wait(1).to({graphics:mask_7_graphics_239,x:182.25,y:26.05}).wait(1).to({graphics:mask_7_graphics_240,x:185.425,y:26.05}).wait(1).to({graphics:mask_7_graphics_241,x:188.6,y:26.05}).wait(1).to({graphics:mask_7_graphics_242,x:191.8,y:26.05}).wait(1).to({graphics:mask_7_graphics_243,x:194.975,y:26.05}).wait(1).to({graphics:mask_7_graphics_244,x:198.15,y:26.05}).wait(1).to({graphics:mask_7_graphics_245,x:201.35,y:26.05}).wait(1).to({graphics:mask_7_graphics_246,x:204.525,y:26.05}).wait(1).to({graphics:mask_7_graphics_247,x:207.7,y:26.05}).wait(1).to({graphics:mask_7_graphics_248,x:210.9,y:26.05}).wait(1).to({graphics:mask_7_graphics_249,x:214.075,y:26.05}).wait(1).to({graphics:mask_7_graphics_250,x:217.275,y:26.05}).wait(1).to({graphics:mask_7_graphics_251,x:220.45,y:26.05}).wait(1).to({graphics:mask_7_graphics_252,x:223.625,y:26.05}).wait(1).to({graphics:mask_7_graphics_253,x:226.825,y:26.05}).wait(1).to({graphics:mask_7_graphics_254,x:230,y:26.05}).wait(1).to({graphics:mask_7_graphics_255,x:233.175,y:26.05}).wait(1).to({graphics:mask_7_graphics_256,x:236.375,y:26.05}).wait(1).to({graphics:mask_7_graphics_257,x:239.55,y:26.05}).wait(1).to({graphics:mask_7_graphics_258,x:242.725,y:26.05}).wait(1).to({graphics:mask_7_graphics_259,x:245.925,y:26.05}).wait(1).to({graphics:mask_7_graphics_260,x:249.1,y:26.05}).wait(1).to({graphics:mask_7_graphics_261,x:252.3,y:26.05}).wait(1).to({graphics:mask_7_graphics_262,x:255.4502,y:23.525}).wait(913).to({graphics:mask_7_graphics_1175,x:255.4502,y:23.525}).wait(1).to({graphics:null,x:0,y:0}).wait(8));

	// 图层_12
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("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");
	this.shape_7.setTransform(263.525,97.775);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(178).to({_off:false},0).wait(997).to({_off:true},1).wait(8));

	// 图层_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("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");
	this.shape_8.setTransform(263.45,211.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1175).to({_off:true},1).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,529.4,414.2);
p.frameBounds = [rect, rect=new cjs.Rectangle(2.4,14.9,522.2,392.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.元件1复制 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层 1
	this.instance = new lib.元件2("synched",0,false);
	this.instance.setTransform(566.65,-46.55,1,1,0,0,0,290.2,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1176));

	// 元件 2
	this.instance_1 = new lib.元件1("synched",0);
	this.instance_1.setTransform(344.2,201.15,1,1,0,0,0,264.6,207.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1176));

	// 图层 1
	this.instance_2 = new lib.Bitmap1();
	this.instance_2.setTransform(541,8,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1176));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(82,-65.7,1036.3,527.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
		_this.btn_music.visible = true; // 初始状态
		_this.btn_music_bz.visible = false;
		
		var _parent=this.parent;
		
		// 点击 btn_music_bz 切换到 btn_music
		_this.btn_music_bz.on('click', function() {
		    _this.btn_music.visible = true;  // 显示 btn_music
		    _this.btn_music_bz.visible = false; // 隐藏 btn_music_bz
			_parent.changeSrc('sounds/s1.mp3');
		});
		
		// 点击 btn_music 切换到 btn_music_bz
		_this.btn_music.on('click', function() {
		    _this.btn_music.visible = false; // 隐藏 btn_music
		    _this.btn_music_bz.visible = true; // 显示 btn_music_bz
			_parent.changeSrc('sounds/s1_bz.mp3');
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
		
		if (!this.isinit) {
			this.isinit = true;
			init();
		}
		var autoPlayer;
		function init() {
			console.log(_this.x);
			console.log();
			
			//自动播放
			autoPlayer=setTimeout(function(){
				_pausebtn.visible = false;
			    _playbtn.visible = true;
			    audio.play();
			},200)
			
		}
		var audio = new Audio('sounds/s1.mp3');
		audio.addEventListener('play', function() {
		    //console.log('音频开始播放');
			//_pausebtn.visible = true;
		    //_playbtn.visible = false;
		    //audio.pause();
		    // 这里可以添加音频播放时想要执行的代码
		});
		var timeArr = new Array(1, 2, 3, 4);
		var init=true;
		audio.oncanplaythrough = function () {
			//audio.play();
			if(init){init=false;
			_pausebtn.visible = true;
		    _playbtn.visible = false;
		    audio.pause();}
		};
		this.changeSrc=function(src){
			var tempTime=audio.currentTime;
			audio.src=src;
			audio.currentTime = tempTime;
			if(_playbtn.visible == true){
				audio.play();
			}else{
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
		var theWidth=230;
		
		//获取父级影片剪辑
		var _clip=this.parent._movieClip;
		var _timer=this.parent._Timer;
		//console.log(_this._seekBarMc.getBounds().width);
		
		audio.addEventListener('timeupdate', function (event) {
			var currentElement = event.target;
			// 获取当前的播放进度（以秒为单位）
			var currentTime = currentElement.currentTime;
			// 获取视频的总时长（以秒为单位）
			var duration = currentElement.duration;
			// 计算播放进度百分比
			var progress = (currentTime / duration);
			seekMc.x = gx + _this._seekBarMc.getBounds().width * progress;
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
			//clearTimeout(autoPlayer);
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
			setTimeout(function(){audio.pause();},100)
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
			//console.log(curId);
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
		
		//
		_timer.start();
		_timer.setCallback(runTimer);
		function runTimer(){
			var currentElement = audio;
			// 获取当前的播放进度（以秒为单位）
			var currentTime = currentElement.currentTime;
			// 获取视频的总时长（以秒为单位）
			var duration = currentElement.duration;
			// 计算播放进度百分比
			var progress = (currentTime / duration);
			
			//console.log(parseInt(_clip.totalFrames*progress));
			_clip.gotoAndStop(parseInt(_clip.totalFrames*progress)-1);
		}
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
	this._seekBarMc = new lib.元件11复制();
	this._seekBarMc.name = "_seekBarMc";
	this._seekBarMc.setTransform(134.65,13.15,1,1,0,0,0,-115,-11);
	new cjs.ButtonHelper(this._seekBarMc, 0, 1, 1);

	this.instance = new lib.元件11();
	this.instance.setTransform(249.45,24.15);

	this._prevbtn = new lib.元件13();
	this._prevbtn.name = "_prevbtn";
	this._prevbtn.setTransform(82,23.85);
	new cjs.ButtonHelper(this._prevbtn, 0, 1, 2, false, new lib.元件13(), 3);

	this._nextbtn = new lib.元件12();
	this._nextbtn.name = "_nextbtn";
	this._nextbtn.setTransform(415.75,23.85);
	new cjs.ButtonHelper(this._nextbtn, 0, 1, 2, false, new lib.元件12(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(127,186,243,0.4)").s().p("Ax6C5Qg9AAgwgkQgLgIgLgLQg2g2AAhMIAAAAQAAhMA2g2QA2g2BNAAMAj1AAAQBMAAA2A2QA3A2AABMIAAAAQAABMg3A2QgKALgLAIQgvAkg+AAgAy0g9QgbAbAAAlQAAAmAbAbQAbAcAnAAMAjtAAAQAcAAAYgQIAEgEIAJgIIAFgFQAXgagBgiQABghgXgaIgFgFIgJgIIgEgEQgYgQgcAAMgjtAAAQgnAAgbAcg");
	this.shape.setTransform(249.3,23.875);

	this._twBtnBar = new lib.元件10();
	this._twBtnBar.name = "_twBtnBar";
	this._twBtnBar.setTransform(1761.2,-109.45);

	this._pausebtn = new lib.元件15();
	this._pausebtn.name = "_pausebtn";
	this._pausebtn.setTransform(1670.7,-108.75);
	new cjs.ButtonHelper(this._pausebtn, 0, 1, 2, false, new lib.元件15(), 3);

	this._playbtn = new lib.元件7复制();
	this._playbtn.name = "_playbtn";
	this._playbtn.setTransform(1670.7,-108.75);
	new cjs.ButtonHelper(this._playbtn, 0, 1, 2, false, new lib.元件7复制(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this._playbtn},{t:this._pausebtn},{t:this._twBtnBar},{t:this.shape},{t:this._nextbtn},{t:this._prevbtn},{t:this.instance},{t:this._seekBarMc}]}).wait(1));

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
p.nominalBounds = rect = new cjs.Rectangle(55.8,-137.6,1733.7,187.7);
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
		_this.issubmited = false;
		
		if(!this.isinit){
			//console.log("第一次进入")
			this.isinit = true;
			
		}
		init();
		
		function init(){
			
			
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7E4D").s().p("EgqCAXIQh4AAAAh4MAAAgqfQAAh4B4AAMBUFAAAQB4AAAAB4MAAAAqfQAAB4h4AAg");
	this.shape.setTransform(-805.175,822.225);

	this._Timer = new lib.Timer();
	this._Timer.name = "_Timer";
	this._Timer.setTransform(-831.6,872.55);

	this.pro_bar = new lib.元件3复制2();
	this.pro_bar.name = "pro_bar";
	this.pro_bar.setTransform(-1076.4,754.75);

	this._movieClip = new lib.元件1复制();
	this._movieClip.name = "_movieClip";
	this._movieClip.setTransform(636.55,374,1,1,0,0,0,561,219);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgSAbQgGgCgCgGQgCgHAAgMQAAgMACgGQACgGAGgDQAGgCAMABQAMgBAHACQAGADACAGQACAGAAAMQAAAMgCAHQgCAGgGACQgHACgMAAQgMAAgGgCg");
	this.shape_1.setTransform(362.35,57.52);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgFBqQgNgFgGgNQgGgNAAgXIAAhSIgXAAIAAgmIAXAAIAAgqIAvAAIAAAqIAlAAIAAAmIglAAIAABOQAAAPAEAGQAFAFAMAAIAHAAIAGgBIAAAlIgLABIgLAAIgEAAQgTAAgLgFg");
	this.shape_2.setTransform(351,49.3271);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAhBbIAAhsQABgSgGgIQgGgIgRAAQgPAAgJAGQgKAFgDAOIAAB1IgxAAIAAixIAxAAIAAAVQAHgNAOgGQAOgGAUAAQAVAAANAHQANAHAGANQAGANgBAUIAAB5g");
	this.shape_3.setTransform(334.7,51.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgTBbQgZAAgRgMQgQgNgJgYQgDgJgCgLIgBgVIAAgHQABgYAJgTQAKgSATgOQAJgFAIgDQAJgBAJAAIAIAAQAQAAALAEQAMAGAFAKIABABIAAABIABAAIAAgFIABgBIAuAAIABAAIAAABIgCA6QAAAmADAYQACAYAEALIABACIABAFIgCABIgtAAIgDgHIgGgSIgBAAQgFANgLAHQgLAGgPAAgAgdgtQgMAKgGAVIgBAKIgBAGQAAAUAHANQAHANAOAFIAKACIAKABQALABAJgFQAJgEAFgKQACgGACgLQACgJAAgNQAAgSgFgNQgEgMgJgGQgEgDgGgBQgFgBgHAAIAAAAQgRAAgLAKg");
	this.shape_4.setTransform(313.35,51.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AAhB9IAAhtQABgRgHgIQgGgIgQABQgPgBgJAGQgKAGgDANIAAB1IgxAAIAAj5IAxAAIAABeQAHgNAOgGQANgGAVAAQAVAAANAHQANAGAGAOQAGANgBASIAAB6g");
	this.shape_5.setTransform(293.3,47.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgaBVQgUgIgKgVQgLgUAAgkQAAgjALgUQAKgUAUgIQATgJAbABQAOAAAMABQAMACAIACIAAApQgJgEgKgBQgJgCgMAAQgPAAgKAEQgJAFgFAMQgFAMAAATQAAAVAFALQAFAMAJAEQAKAFAQAAIAVgCQAKgBAKgEIAAAoIgNADIgRADIgSAAIgDAAQgZAAgSgHg");
	this.shape_6.setTransform(274.575,51.3251);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("Ag6B0QgQgMgGgUQgGgVABgcQgBgaAGgUQAGgVAQgMQAPgNAdAAQAXAAAMAHQANAHAFAMIAAhfIAvAAIAAD6IgrAAIgEgZQgFAMgMAIQgNAIgXAAQgdAAgPgLgAgXgNQgIAIgDALQgCANAAAQQAAAQACANQADAMAIAHQAIAIAPAAQAQAAAJgHQAJgGAEgNQADgMAAgSQAAgRgEgNQgDgMgJgHQgJgHgQAAQgPAAgIAIg");
	this.shape_7.setTransform(246.7731,47.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AAiBbIAAhsQAAgSgGgIQgGgIgSAAQgNAAgKAGQgKAFgEAOIAAB1IgvAAIAAixIAvAAIAAAVQAIgNAPgGQANgGATAAQAWAAANAHQANAHAGANQAFANABAUIAAB5g");
	this.shape_8.setTransform(226.2,51.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgUBbQgYAAgQgMQgRgNgJgYQgDgJgCgLIgBgVIAAgHQAAgYAKgTQAKgSAUgOQAIgFAJgDQAIgBAJAAIAIAAQARAAALAEQAKAGAGAKIABABIABABIAAAAIABgFIABgBIAtAAIABAAIAAABIgCA6QAAAmADAYQACAYAFALIAAACIABAFIgBABIgtAAIgEgHIgFgSIgBAAQgHANgKAHQgLAGgPAAgAgdgtQgMAKgGAVIgCAKIAAAGQAAAUAHANQAHANANAFIAKACIAKABQANABAIgFQAJgEAEgKQADgGADgLQABgJAAgNQAAgSgFgNQgEgMgJgGQgEgDgFgBQgHgBgGAAIgBAAQgQAAgLAKg");
	this.shape_9.setTransform(204.85,51.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AAhBbIAAhsQABgSgGgIQgGgIgRAAQgPAAgJAGQgKAFgDAOIAAB1IgxAAIAAixIAxAAIAAAVQAHgNAOgGQAOgGAUAAQAVAAANAHQANAHAGANQAGANgBAUIAAB5g");
	this.shape_10.setTransform(176.3,51.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgpBVQgUgIgKgVQgKgUAAgkQAAgjAKgUQAKgUAUgIQAUgJAbABQAeAAARAKQARAKAGARQAGASAAAXIgBANIgBALIhyAHQACATALAJQAMAJAXAAQALAAALgCQAMgCAJgDQAKgCAGgEIAAAmQgJAFgSAEQgSADgYAAIgDAAQgYAAgSgHgAgYgtQgJAJgBAWIBIgGQABgKgDgIQgCgIgHgEQgHgFgOAAQgVAAgJAKg");
	this.shape_11.setTransform(156.1018,51.3251);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgFBqQgNgFgGgNQgGgNAAgXIAAhSIgXAAIAAgmIAXAAIAAgqIAvAAIAAAqIAlAAIAAAmIglAAIAABOQAAAPAEAGQAFAFAMAAIAHAAIAGgBIAAAlIgLABIgLAAIgEAAQgTAAgLgFg");
	this.shape_12.setTransform(140.5,49.3271);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgHBcQgPAAgPgCIgagEIAAgoQAMAEAPACQAOACANAAQANABAIgEQAHgEAAgKQAAgIgDgEQgDgEgGgDQgHgDgPgDQgSgFgLgGQgKgFgEgJQgDgKgBgPQAAgZAQgOQARgOAmAAQAPAAANACQANACAIACIgDAlIgMgDIgQgDIgRgBQgPAAgFAEQgHAEAAAJQAAAFACADQADADAIADIAUAGQASAFALAGQALAGAFAKQADAKAAAQQABAfgUANQgSANgfAAIgDAAg");
	this.shape_13.setTransform(126.6,51.2759);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AgXB/IAAixIAvAAIAACxgAgPhNQgGgBgDgGQgCgFAAgMQAAgLACgFQADgFAGgCQAFgCAKABQALgBAGACQAFACADAFQACAFAAALQAAAMgCAFQgDAGgFABQgGACgLAAQgKAAgFgCg");
	this.shape_14.setTransform(113.775,47.595);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AhGByIAAjkIAzAAIAAC5IBaAAIAAArg");
	this.shape_15.setTransform(101.3,48.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXCXQgbgHgTgRQgUgSgLgfQgKgeAAgwQABg5ARgjQATgjAggOQAhgPAtAAQAVAAASADQASACAOAFIAAA6QgOgFgRgDQgRgDgTAAQgcAAgQAJQgSAKgIAWQgJAVAAAlQAAAnAJAWQAIAVASAJQAQAIAbAAQATAAARgDQASgDARgGIAAA5QgOAGgTAEQgTADgWAAQghAAgbgGg");
	this.shape_16.setTransform(45.9,47.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D8075").s().p("AirCsQhHhHAAhlQAAhkBHhIQBHhGBkAAQBlAABHBGQBHBIAABkQAABlhHBHQhHBHhlAAQhkAAhHhHg");
	this.shape_17.setTransform(46.725,47.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this._movieClip},{t:this.pro_bar},{t:this._Timer},{t:this.shape}]}).wait(1));

	// diban
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.8)").s().p("EhkVAEsIAApXMDIrAAAIAAJXg");
	this.shape_18.setTransform(639.9,690.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-446.2,368.5,2368.4,961.8);
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
		{src:"images/index_atlas_1.png?1734506045352", id:"index_atlas_1"}
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