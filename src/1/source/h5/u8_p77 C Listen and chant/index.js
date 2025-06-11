(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,709,845]]}
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



(lib.位图4复制 = function() {
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
	this.shape.setTransform(-3.5409,0.2664,0.9827,1.1477,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_1.setTransform(-3.5409,0.2664,0.9827,1.1477,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_2.setTransform(6.9006,0.2664,0.9827,1.1477,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_3.setTransform(6.9006,0.2664,0.9827,1.1477,0,0,180);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{y:0.2664}},{t:this.shape_2,p:{y:0.2664}},{t:this.shape_1,p:{y:0.2664}},{t:this.shape,p:{y:0.2664}}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{y:0.2875}},{t:this.shape_2,p:{y:0.2875}},{t:this.shape_1,p:{y:0.2875}},{t:this.shape,p:{y:0.2875}}]},1).wait(2));

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
	this.shape.setTransform(11.9419,6.1833,0.5756,0.5756);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAjAAQAAAPgKAKQgKAKgPAAQgNAAgLgKQgKgKAAgPQAAgNAKgLQALgKANAAQAPAAAKAKQAKALAAANg");
	this.shape_1.setTransform(11.8545,6.3297,0.5756,0.5756);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAYQgKgJAAgPQAAgOAKgKQAKgKAOAAQAPAAAJAKQALAKAAAOQAAAPgLAJQgJALgPAAQgOAAgKgLg");
	this.shape_2.setTransform(11.8545,6.3297,0.5756,0.5756);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah0CDQgOgHAAgMQAAgLAOgIQAOgJASgBQALAAAKACIAAioQAAgIAGgEQADgDAFgBIChglIABAAQAQgDACANIAADEQAAALgOAJQgNAIgTABQgTABgNgHQgOgHAAgMQAAgLAOgIQANgJATgBQAMAAAKACIAAhpIiRAgIAACJQgCAJgMAHQgNAJgTABIgEAAQgQAAgMgGg");
	this.shape_3.setTransform(-3.8268,-0.0795,0.8996,0.8996);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F99703").ss(5,1,1).p("AjJDJQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQAMAMAKAMQAFAGAEAGQA1BIAABdQAAB2hUBTQhTBUh2AAQh1AAhUhUg");
	this.shape_4.setTransform(-0.112,-0.0064,0.8996,0.8996);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F99703").s().p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTIAWAXIAJANQA1BIAABdQAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_5.setTransform(-0.112,-0.0064,0.8996,0.8996);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E18803").ss(5,1,1).p("AjJDJQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQAMAMAKAMQAFAGAEAGQA1BIAABdQAAB2hUBTQhTBUh2AAQh1AAhUhUg");
	this.shape_6.setTransform(-0.009,0.0115,0.8998,0.8998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E18904").s().p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTIAWAXIAJANQA1BIAABdQAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_7.setTransform(-0.009,0.0115,0.8998,0.8998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{x:-0.112,y:-0.0064}},{t:this.shape_4,p:{x:-0.112,y:-0.0064}},{t:this.shape_3,p:{scaleX:0.8996,scaleY:0.8996,x:-3.8268,y:-0.0795}},{t:this.shape_2,p:{scaleX:0.5756,scaleY:0.5756,x:11.8545,y:6.3297}},{t:this.shape_1,p:{scaleX:0.5756,scaleY:0.5756,x:11.8545,y:6.3297}},{t:this.shape,p:{scaleX:0.5756,scaleY:0.5756,x:11.9419,y:6.1833}}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_3,p:{scaleX:0.8998,scaleY:0.8998,x:-3.8878,y:-0.0616}},{t:this.shape_2,p:{scaleX:0.5758,scaleY:0.5758,x:12.0923,y:6.3656}},{t:this.shape_1,p:{scaleX:0.5758,scaleY:0.5758,x:12.0923,y:6.3656}},{t:this.shape,p:{scaleX:0.5758,scaleY:0.5758,x:12.1319,y:6.2169}}]},1).to({state:[{t:this.shape_5,p:{x:-0.1206,y:-0.0079}},{t:this.shape_4,p:{x:-0.1206,y:-0.0079}},{t:this.shape_3,p:{scaleX:0.8996,scaleY:0.8996,x:-3.8425,y:-0.0809}},{t:this.shape_2,p:{scaleX:0.5756,scaleY:0.5756,x:11.8389,y:6.3267}},{t:this.shape_1,p:{scaleX:0.5756,scaleY:0.5756,x:11.8389,y:6.3267}},{t:this.shape,p:{scaleX:0.5756,scaleY:0.5756,x:11.926,y:6.1806}}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.2,-28.1,56.3,56.3);
p.frameBounds = [rect, new cjs.Rectangle(-28.2,-28.1,56.4,56.3), rect=new cjs.Rectangle(-28.3,-28.1,56.4,56.3), rect];


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
	var mask_graphics_5 = new cjs.Graphics().p("ACHETIAAoHIB4AAIAAIHg");
	var mask_graphics_6 = new cjs.Graphics().p("Ah8EEIAAoHID5AAIAAIHg");
	var mask_graphics_7 = new cjs.Graphics().p("Ai9EEIAAoHIF7AAIAAIHg");
	var mask_graphics_8 = new cjs.Graphics().p("Aj+EEIAAoHIH9AAIAAIHg");
	var mask_graphics_9 = new cjs.Graphics().p("Ak/EEIAAoHIJ/AAIAAIHg");
	var mask_graphics_10 = new cjs.Graphics().p("AmAEEIAAoHIMBAAIAAIHg");
	var mask_graphics_11 = new cjs.Graphics().p("AnBEEIAAoHIODAAIAAIHg");
	var mask_graphics_12 = new cjs.Graphics().p("AoDEEIAAoHIQHAAIAAIHg");
	var mask_graphics_13 = new cjs.Graphics().p("ApEEEIAAoHISIAAIAAIHg");
	var mask_graphics_14 = new cjs.Graphics().p("AqEEEIAAoHIUJAAIAAIHg");
	var mask_graphics_15 = new cjs.Graphics().p("ArFEEIAAoHIWMAAIAAIHg");
	var mask_graphics_16 = new cjs.Graphics().p("AsHEEIAAoHIYPAAIAAIHg");
	var mask_graphics_17 = new cjs.Graphics().p("AtIEEIAAoHIaRAAIAAIHg");
	var mask_graphics_18 = new cjs.Graphics().p("AuJEEIAAoHIcTAAIAAIHg");
	var mask_graphics_19 = new cjs.Graphics().p("AvKEEIAAoHIeVAAIAAIHg");
	var mask_graphics_20 = new cjs.Graphics().p("AwLEEIAAoHMAgXAAAIAAIHg");
	var mask_graphics_21 = new cjs.Graphics().p("AxMEEIAAoHMAiZAAAIAAIHg");
	var mask_graphics_22 = new cjs.Graphics().p("AyNEEIAAoHMAkbAAAIAAIHg");
	var mask_graphics_23 = new cjs.Graphics().p("AzOEEIAAoHMAmdAAAIAAIHg");
	var mask_graphics_24 = new cjs.Graphics().p("A0PEEIAAoHMAofAAAIAAIHg");
	var mask_graphics_25 = new cjs.Graphics().p("A1QEEIAAoHMAqhAAAIAAIHg");
	var mask_graphics_26 = new cjs.Graphics().p("A2REEIAAoHMAsjAAAIAAIHg");
	var mask_graphics_27 = new cjs.Graphics().p("A3SEEIAAoHMAulAAAIAAIHg");
	var mask_graphics_28 = new cjs.Graphics().p("A4TEEIAAoHMAwnAAAIAAIHg");
	var mask_graphics_29 = new cjs.Graphics().p("A5VEEIAAoHMAyrAAAIAAIHg");
	var mask_graphics_30 = new cjs.Graphics().p("A6VEEIAAoHMA0rAAAIAAIHg");
	var mask_graphics_31 = new cjs.Graphics().p("A7XEEIAAoHMA2uAAAIAAIHg");
	var mask_graphics_32 = new cjs.Graphics().p("A8YEEIAAoHMA4xAAAIAAIHg");
	var mask_graphics_33 = new cjs.Graphics().p("A9ZEEIAAoHMA6zAAAIAAIHg");
	var mask_graphics_34 = new cjs.Graphics().p("A+aEEIAAoHMA81AAAIAAIHg");
	var mask_graphics_35 = new cjs.Graphics().p("A/bEEIAAoHMA+3AAAIAAIHg");
	var mask_graphics_36 = new cjs.Graphics().p("EggcAEEIAAoHMBA5AAAIAAIHg");
	var mask_graphics_37 = new cjs.Graphics().p("EghdAEEIAAoHMBC7AAAIAAIHg");
	var mask_graphics_38 = new cjs.Graphics().p("EgieAEEIAAoHMBE9AAAIAAIHg");
	var mask_graphics_39 = new cjs.Graphics().p("EgjfAEEIAAoHMBG/AAAIAAIHg");
	var mask_graphics_40 = new cjs.Graphics().p("EgkgAEEIAAoHMBJBAAAIAAIHg");
	var mask_graphics_41 = new cjs.Graphics().p("EglhAEEIAAoHMBLDAAAIAAIHg");
	var mask_graphics_42 = new cjs.Graphics().p("EgmiAEEIAAoHMBNFAAAIAAIHg");
	var mask_graphics_43 = new cjs.Graphics().p("EgnjAEEIAAoHMBPHAAAIAAIHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:25.525,y:27.525}).wait(1).to({graphics:mask_graphics_6,x:51.7,y:29}).wait(1).to({graphics:mask_graphics_7,x:58.3,y:29}).wait(1).to({graphics:mask_graphics_8,x:64.95,y:28.95}).wait(1).to({graphics:mask_graphics_9,x:71.575,y:28.95}).wait(1).to({graphics:mask_graphics_10,x:78.2,y:28.9}).wait(1).to({graphics:mask_graphics_11,x:84.825,y:28.9}).wait(1).to({graphics:mask_graphics_12,x:91.45,y:28.85}).wait(1).to({graphics:mask_graphics_13,x:98.1,y:28.85}).wait(1).to({graphics:mask_graphics_14,x:104.75,y:28.8}).wait(1).to({graphics:mask_graphics_15,x:111.35,y:28.8}).wait(1).to({graphics:mask_graphics_16,x:118,y:28.75}).wait(1).to({graphics:mask_graphics_17,x:124.625,y:28.75}).wait(1).to({graphics:mask_graphics_18,x:131.25,y:28.7}).wait(1).to({graphics:mask_graphics_19,x:137.875,y:28.7}).wait(1).to({graphics:mask_graphics_20,x:144.5,y:28.65}).wait(1).to({graphics:mask_graphics_21,x:151.15,y:28.65}).wait(1).to({graphics:mask_graphics_22,x:157.8,y:28.6}).wait(1).to({graphics:mask_graphics_23,x:164.4,y:28.6}).wait(1).to({graphics:mask_graphics_24,x:171.05,y:28.55}).wait(1).to({graphics:mask_graphics_25,x:177.675,y:28.5}).wait(1).to({graphics:mask_graphics_26,x:184.275,y:28.5}).wait(1).to({graphics:mask_graphics_27,x:190.925,y:28.45}).wait(1).to({graphics:mask_graphics_28,x:197.575,y:28.45}).wait(1).to({graphics:mask_graphics_29,x:204.2,y:28.4}).wait(1).to({graphics:mask_graphics_30,x:210.825,y:28.4}).wait(1).to({graphics:mask_graphics_31,x:217.45,y:28.35}).wait(1).to({graphics:mask_graphics_32,x:224.075,y:28.35}).wait(1).to({graphics:mask_graphics_33,x:230.725,y:28.3}).wait(1).to({graphics:mask_graphics_34,x:237.325,y:28.3}).wait(1).to({graphics:mask_graphics_35,x:243.975,y:28.25}).wait(1).to({graphics:mask_graphics_36,x:250.625,y:28.25}).wait(1).to({graphics:mask_graphics_37,x:257.25,y:28.2}).wait(1).to({graphics:mask_graphics_38,x:263.875,y:28.2}).wait(1).to({graphics:mask_graphics_39,x:270.5,y:28.15}).wait(1).to({graphics:mask_graphics_40,x:277.125,y:28.15}).wait(1).to({graphics:mask_graphics_41,x:283.775,y:28.1}).wait(1).to({graphics:mask_graphics_42,x:290.375,y:28.1}).wait(1).to({graphics:mask_graphics_43,x:297.025,y:28.05}).wait(87));

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgVCQQgIgCgDgIQgDgIABgOQgBgPADgIQADgHAIgDQAHgDAOABQAPgBAIADQAHADADAHQADAIAAAPQAAAOgDAIQgDAIgHACQgIADgPAAQgOAAgHgDgAgYAnIgIi5IBCAAIgIC5g");
	this.shape.setTransform(506.5464,27.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhZBnQATAAALgEQAMgEAHgHQAGgIADgLIhYjgIBEAAIA0ChIADAAIAyihIBCAAIhMDNQgLAfgMAUQgLAVgOALQgPANgUAEQgVAFgdABg");
	this.shape_1.setTransform(486.575,34.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgaB1QgfAAgUgQQgWgQgLggQgDgMgDgNIgCgbIAAgIQABgfANgYQAMgYAZgSQALgGAKgDQALgCAMAAIALAAQATgBAPAHQAOAGAIAOIAAACIAAABIABAAIABgHIABgCIA6AAIABAAIABABIgDBLQABAvACAfQAEAgAFAOIABADIACAFIgDABIg5AAIgEgIIgIgWIAAAAQgIAQgOAJQgOAHgUABgAgmg6QgOAOgIAaIgDANIAAAIQAAAZAJAQQAIAQASAHIANAEIANABQAPAAALgGQALgGAHgLQADgIACgNQACgNABgRQAAgXgHgQQgFgPgMgIQgFgDgHgCQgHgCgJAAIAAAAQgWAAgOANg");
	this.shape_2.setTransform(460.7,30.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgUCSIhkAAIAAkjIBkAAQAfAAAaAGQAbAGASAQQATAPAKAdQAKAdAAAsQAAA4gSAgQgRAgggANQgfANgoAAIgDAAgAg4BbIAhAAQAaAAARgIQASgIAIgUQAJgUAAgjQAAgkgJgUQgJgUgRgIQgSgHgZAAIghAAg");
	this.shape_3.setTransform(433.825,27.124);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgJB1QgUAAgSgCQgTgCgPgDIAAgzQAQAFATADQARACAQAAQATABAJgFQAJgFAAgNQAAgJgDgGQgEgFgJgEQgJgEgSgEQgYgGgNgHQgNgHgFgMQgFgMAAgTQAAggAVgSQAVgRAwgBQATAAARACQARADAJADIgCAuIgQgDIgVgEIgVgBQgTAAgIAFQgIAEAAAMQAAAHADAEQADAEAKADIAZAIQAZAGAOAIQANAIAGAMQAFANAAAVQAAAogYAQQgXAQgpAAIgDAAg");
	this.shape_4.setTransform(397.4021,30.2757);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgSA+IgKh7IA6AAIgLB7g");
	this.shape_5.setTransform(382.3,16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AArBzIAAiJQAAgYgIgJQgHgKgWAAQgSAAgNAHQgMAHgFARIAACVIg8AAIAAjiIA8AAIAAAcQAKgQASgIQASgIAYABQAcgBARAJQAQAJAHAQQAIASgBAYIAACag");
	this.shape_6.setTransform(364.2266,30.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ag1BsQgYgKgOgaQgNgaAAguQAAgsANgaQAOgaAZgKQAZgLAiABQAnAAAWAMQAVANAIAWQAIAXgBAdIgBASIgBAMIiRAKQABAYAPALQAPAMAdAAQAPAAAOgDQAPgCAMgDQAMgEAIgEIAAAwQgLAGgXAEQgXAGgeAAIgDAAQggAAgYgKgAgfg6QgLANgBAbIBcgIQAAgNgDgKQgDgKgJgGQgJgFgSAAIgCgBQgZAAgLANg");
	this.shape_7.setTransform(338.5515,30.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhABzIAAjiIA8AAIAAAqQAGgTAKgKQAKgKANgDQAMgEAOABIAEAAIgBA2IgGAAQgOgBgOAFQgNAEgJALQgIAKgEASIAACAg");
	this.shape_8.setTransform(319,30.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AhKCTQgUgOgIgaQgHgbAAgkQAAggAHgaQAIgaAUgRQATgPAlAAQAeAAAPAJQAQAIAGAPIAAh4IA9AAIAAE9Ig3AAIgFgfQgGAPgQALQgRAJgdABQglAAgTgPgAgegRQgKAKgDAPQgEAQABAUQgBAVAEAQQADAQAKAJQALAKATAAQAVgBALgHQAMgJAEgQQAFgQgBgXQABgVgFgRQgFgPgLgJQgLgJgVAAQgUAAgKAKg");
	this.shape_9.setTransform(295.3234,25.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgTCbQgOgHgGgNQgGgNAAgUIAAkGIA8AAIAAD3QAAAPAFAFQADAGALAAIAGgBIAGgBIAAAvIgMACIgOABQgYAAgPgGg");
	this.shape_10.setTransform(277.3,25.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgeChIAAjiIA8AAIAADigAAAhgQgNAAgHgCQgIgCgDgHQgCgHAAgOQAAgOACgHQADgHAIgCQAHgCANAAQAOAAAHACQAIACADAHQACAHAAAOQAAAOgCAHQgDAHgIACQgGACgKAAIgFAAg");
	this.shape_11.setTransform(263.7,25.595);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AArCfIAAiKQAAgXgIgJQgIgKgVAAQgSAAgNAHQgMAIgFARIAACUIg8AAIAAk9IA8AAIAAB3QAKgQASgHQARgIAZAAQAcgBARAJQAQAJAHAQQAIASgBAXIAACbg");
	this.shape_12.setTransform(244.4266,25.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgWCQQgagHgTgQQgSgRgKgdQgKgeAAgtQAAg3ASghQAQghAggOQAfgOAqAAQAVAAASACQARADANAFIAAA3QgOgFgQgDQgQgCgSAAQgagBgQAJQgRAJgIAVQgIAVAAAjQAAAlAIAVQAIAVARAIQAPAIAagBQASAAARgCQARgDAQgGIAAA3QgNAFgSAEQgTADgVAAIgFAAQgdAAgXgGg");
	this.shape_13.setTransform(218.7,27.1259);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AhZBnQATAAALgEQAMgEAHgHQAGgIADgLIhYjgIBEAAIA0ChIADAAIAyihIBCAAIhMDNQgLAfgMAUQgLAVgOALQgPANgUAEQgVAFgdABg");
	this.shape_14.setTransform(182.675,34.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AhtCeIAAk3IA9AAIAAAcQAGgNAQgJQARgJAcAAQAlAAATAOQAUAPAHAaQAIAaAAAkQAAAhgIAZQgHAbgUAPQgTAQglABQgdgBgQgIQgQgJgGgQIAABygAgfhmQgMAIgEAQQgFAQAAAXQAAAWAFAQQAEAPAMAJQALAIAUABQAVgBAKgJQAKgKADgPQAEgQAAgUQAAgVgEgQQgDgRgLgIQgKgKgUAAQgUAAgLAJg");
	this.shape_15.setTransform(157.675,34.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AhtCeIAAk3IA9AAIAAAcQAGgNAQgJQARgJAcAAQAlAAATAOQAUAPAHAaQAIAaAAAkQAAAhgIAZQgHAbgUAPQgTAQglABQgdgBgQgIQgQgJgGgQIAABygAgfhmQgMAIgEAQQgFAQAAAXQAAAWAFAQQAEAPAMAJQALAIAUABQAVgBAKgJQAKgKADgPQAEgQAAgUQAAgVgEgQQgDgRgLgIQgKgKgUAAQgUAAgLAJg");
	this.shape_16.setTransform(130.775,34.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgaB1QgeAAgWgQQgUgQgMggQgDgMgDgNIgBgbIAAgIQAAgfAMgYQANgYAYgSQALgGALgDQALgCALAAIALAAQAVgBAOAHQAOAGAIAOIABACIAAABIAAAAIABgHIABgCIA6AAIACAAIAAABIgCBLQAAAvADAfQACAgAHAOIAAADIABAFIgBABIg7AAIgDgIIgIgWIgBAAQgHAQgOAJQgOAHgTABgAglg6QgPAOgIAaIgCANIgBAIQAAAZAJAQQAJAQARAHIAMAEIAOABQAPAAALgGQALgGAHgLQADgIACgNQACgNAAgRQAAgXgFgQQgHgPgLgIQgFgDgGgCQgIgCgIAAIgBAAQgVAAgOANg");
	this.shape_17.setTransform(103,30.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AA5CSIAAiBIhyAAIAACBIg/AAIAAkjIA/AAIAABtIByAAIAAhtIBAAAIAAEjg");
	this.shape_18.setTransform(75.35,27.125);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(125));

	// 图层_5
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#008379").s().p("AgVCQQgIgCgDgIQgDgIABgOQgBgPADgIQADgHAIgDQAHgDAOABQAPgBAIADQAHADADAHQADAIAAAPQAAAOgDAIQgDAIgHACQgIADgPAAQgOAAgHgDgAgYAnIgIi5IBCAAIgIC5g");
	this.shape_19.setTransform(506.5464,27.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#008379").s().p("AhZBnQATAAALgEQAMgEAHgHQAGgIADgLIhYjgIBEAAIA0ChIADAAIAyihIBCAAIhMDNQgLAfgMAUQgLAVgOALQgPANgUAEQgVAFgdABg");
	this.shape_20.setTransform(486.575,34.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#008379").s().p("AgaB1QgfAAgUgQQgWgQgLggQgDgMgDgNIgCgbIAAgIQABgfANgYQAMgYAZgSQALgGAKgDQALgCAMAAIALAAQATgBAPAHQAOAGAIAOIAAACIAAABIABAAIABgHIABgCIA6AAIABAAIABABIgDBLQABAvACAfQAEAgAFAOIABADIACAFIgDABIg5AAIgEgIIgIgWIAAAAQgIAQgOAJQgOAHgUABgAgmg6QgOAOgIAaIgDANIAAAIQAAAZAJAQQAIAQASAHIANAEIANABQAPAAALgGQALgGAHgLQADgIACgNQACgNABgRQAAgXgHgQQgFgPgMgIQgFgDgHgCQgHgCgJAAIAAAAQgWAAgOANg");
	this.shape_21.setTransform(460.7,30.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#008379").s().p("AgUCSIhkAAIAAkjIBkAAQAfAAAaAGQAbAGASAQQATAPAKAdQAKAdAAAsQAAA4gSAgQgRAgggANQgfANgoAAIgDAAgAg4BbIAhAAQAaAAARgIQASgIAIgUQAJgUAAgjQAAgkgJgUQgJgUgRgIQgSgHgZAAIghAAg");
	this.shape_22.setTransform(433.825,27.124);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#008379").s().p("AgJB1QgUAAgSgCQgTgCgPgDIAAgzQAQAFATADQARACAQAAQATABAJgFQAJgFAAgNQAAgJgDgGQgEgFgJgEQgJgEgSgEQgYgGgNgHQgNgHgFgMQgFgMAAgTQAAggAVgSQAVgRAwgBQATAAARACQARADAJADIgCAuIgQgDIgVgEIgVgBQgTAAgIAFQgIAEAAAMQAAAHADAEQADAEAKADIAZAIQAZAGAOAIQANAIAGAMQAFANAAAVQAAAogYAQQgXAQgpAAIgDAAg");
	this.shape_23.setTransform(397.4021,30.2757);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#008379").s().p("AgSA+IgKh7IA6AAIgLB7g");
	this.shape_24.setTransform(382.3,16);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#008379").s().p("AArBzIAAiJQAAgYgIgJQgHgKgWAAQgSAAgNAHQgMAHgFARIAACVIg8AAIAAjiIA8AAIAAAcQAKgQASgIQASgIAYABQAcgBARAJQAQAJAHAQQAIASgBAYIAACag");
	this.shape_25.setTransform(364.2266,30.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#008379").s().p("Ag1BsQgYgKgOgaQgNgaAAguQAAgsANgaQAOgaAZgKQAZgLAiABQAnAAAWAMQAVANAIAWQAIAXgBAdIgBASIgBAMIiRAKQABAYAPALQAPAMAdAAQAPAAAOgDQAPgCAMgDQAMgEAIgEIAAAwQgLAGgXAEQgXAGgeAAIgDAAQggAAgYgKgAgfg6QgLANgBAbIBcgIQAAgNgDgKQgDgKgJgGQgJgFgSAAIgCgBQgZAAgLANg");
	this.shape_26.setTransform(338.5515,30.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#008379").s().p("AhABzIAAjiIA8AAIAAAqQAGgTAKgKQAKgKANgDQAMgEAOABIAEAAIgBA2IgGAAQgOgBgOAFQgNAEgJALQgIAKgEASIAACAg");
	this.shape_27.setTransform(319,30.15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#008379").s().p("AhKCTQgUgOgIgaQgHgbAAgkQAAggAHgaQAIgaAUgRQATgPAlAAQAeAAAPAJQAQAIAGAPIAAh4IA9AAIAAE9Ig3AAIgFgfQgGAPgQALQgRAJgdABQglAAgTgPgAgegRQgKAKgDAPQgEAQABAUQgBAVAEAQQADAQAKAJQALAKATAAQAVgBALgHQAMgJAEgQQAFgQgBgXQABgVgFgRQgFgPgLgJQgLgJgVAAQgUAAgKAKg");
	this.shape_28.setTransform(295.3234,25.95);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#008379").s().p("AgTCbQgOgHgGgNQgGgNAAgUIAAkGIA8AAIAAD3QAAAPAFAFQADAGALAAIAGgBIAGgBIAAAvIgMACIgOABQgYAAgPgGg");
	this.shape_29.setTransform(277.3,25.875);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#008379").s().p("AgeChIAAjiIA8AAIAADigAAAhgQgNAAgHgCQgIgCgDgHQgCgHAAgOQAAgOACgHQADgHAIgCQAHgCANAAQAOAAAHACQAIACADAHQACAHAAAOQAAAOgCAHQgDAHgIACQgGACgKAAIgFAAg");
	this.shape_30.setTransform(263.7,25.595);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#008379").s().p("AArCfIAAiKQAAgXgIgJQgIgKgVAAQgSAAgNAHQgMAIgFARIAACUIg8AAIAAk9IA8AAIAAB3QAKgQASgHQARgIAZAAQAcgBARAJQAQAJAHAQQAIASgBAXIAACbg");
	this.shape_31.setTransform(244.4266,25.75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#008379").s().p("AgWCQQgagHgTgQQgSgRgKgdQgKgeAAgtQAAg3ASghQAQghAggOQAfgOAqAAQAVAAASACQARADANAFIAAA3QgOgFgQgDQgQgCgSAAQgagBgQAJQgRAJgIAVQgIAVAAAjQAAAlAIAVQAIAVARAIQAPAIAagBQASAAARgCQARgDAQgGIAAA3QgNAFgSAEQgTADgVAAIgFAAQgdAAgXgGg");
	this.shape_32.setTransform(218.7,27.1259);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#008379").s().p("AhZBnQATAAALgEQAMgEAHgHQAGgIADgLIhYjgIBEAAIA0ChIADAAIAyihIBCAAIhMDNQgLAfgMAUQgLAVgOALQgPANgUAEQgVAFgdABg");
	this.shape_33.setTransform(182.675,34.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#008379").s().p("AhtCeIAAk3IA9AAIAAAcQAGgNAQgJQARgJAcAAQAlAAATAOQAUAPAHAaQAIAaAAAkQAAAhgIAZQgHAbgUAPQgTAQglABQgdgBgQgIQgQgJgGgQIAABygAgfhmQgMAIgEAQQgFAQAAAXQAAAWAFAQQAEAPAMAJQALAIAUABQAVgBAKgJQAKgKADgPQAEgQAAgUQAAgVgEgQQgDgRgLgIQgKgKgUAAQgUAAgLAJg");
	this.shape_34.setTransform(157.675,34.35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#008379").s().p("AhtCeIAAk3IA9AAIAAAcQAGgNAQgJQARgJAcAAQAlAAATAOQAUAPAHAaQAIAaAAAkQAAAhgIAZQgHAbgUAPQgTAQglABQgdgBgQgIQgQgJgGgQIAABygAgfhmQgMAIgEAQQgFAQAAAXQAAAWAFAQQAEAPAMAJQALAIAUABQAVgBAKgJQAKgKADgPQAEgQAAgUQAAgVgEgQQgDgRgLgIQgKgKgUAAQgUAAgLAJg");
	this.shape_35.setTransform(130.775,34.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#008379").s().p("AgaB1QgeAAgWgQQgUgQgMggQgDgMgDgNIgBgbIAAgIQAAgfAMgYQANgYAYgSQALgGALgDQALgCALAAIALAAQAVgBAOAHQAOAGAIAOIABACIAAABIAAAAIABgHIABgCIA6AAIACAAIAAABIgCBLQAAAvADAfQACAgAHAOIAAADIABAFIgBABIg7AAIgDgIIgIgWIgBAAQgHAQgOAJQgOAHgTABgAglg6QgPAOgIAaIgCANIgBAIQAAAZAJAQQAJAQARAHIAMAEIAOABQAPAAALgGQALgGAHgLQADgIACgNQACgNAAgRQAAgXgFgQQgHgPgLgIQgFgDgGgCQgIgCgIAAIgBAAQgVAAgOANg");
	this.shape_36.setTransform(103,30.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#008379").s().p("AA5CSIAAiBIhyAAIAACBIg/AAIAAkjIA/AAIAABtIByAAIAAhtIBAAAIAAEjg");
	this.shape_37.setTransform(75.35,27.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(130));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(58,-10.2,458.6,69.2);
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

	// 图层_10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_984 = new cjs.Graphics().p("EgBKAgWIAAn0ICVAAIAAH0g");
	var mask_graphics_985 = new cjs.Graphics().p("AhgD6IAAnzIDBAAIAAHzg");
	var mask_graphics_986 = new cjs.Graphics().p("Ah3D6IAAnzIDvAAIAAHzg");
	var mask_graphics_987 = new cjs.Graphics().p("AiND6IAAnzIEbAAIAAHzg");
	var mask_graphics_988 = new cjs.Graphics().p("AijD6IAAnzIFHAAIAAHzg");
	var mask_graphics_989 = new cjs.Graphics().p("Ai5D6IAAnzIFzAAIAAHzg");
	var mask_graphics_990 = new cjs.Graphics().p("AjPD6IAAnzIGfAAIAAHzg");
	var mask_graphics_991 = new cjs.Graphics().p("AjlD6IAAnzIHLAAIAAHzg");
	var mask_graphics_992 = new cjs.Graphics().p("Aj7D6IAAnzIH3AAIAAHzg");
	var mask_graphics_993 = new cjs.Graphics().p("AkSD6IAAnzIIkAAIAAHzg");
	var mask_graphics_994 = new cjs.Graphics().p("AkoD6IAAnzIJRAAIAAHzg");
	var mask_graphics_995 = new cjs.Graphics().p("Ak+D6IAAnzIJ9AAIAAHzg");
	var mask_graphics_996 = new cjs.Graphics().p("AlUD6IAAnzIKpAAIAAHzg");
	var mask_graphics_997 = new cjs.Graphics().p("AlqD6IAAnzILVAAIAAHzg");
	var mask_graphics_998 = new cjs.Graphics().p("AmBD6IAAnzIMDAAIAAHzg");
	var mask_graphics_999 = new cjs.Graphics().p("AmXD6IAAnzIMvAAIAAHzg");
	var mask_graphics_1000 = new cjs.Graphics().p("AmtD6IAAnzINbAAIAAHzg");
	var mask_graphics_1001 = new cjs.Graphics().p("AnDD6IAAnzIOHAAIAAHzg");
	var mask_graphics_1002 = new cjs.Graphics().p("AnZD6IAAnzIOzAAIAAHzg");
	var mask_graphics_1003 = new cjs.Graphics().p("AnvD6IAAnzIPfAAIAAHzg");
	var mask_graphics_1004 = new cjs.Graphics().p("AoGD6IAAnzIQNAAIAAHzg");
	var mask_graphics_1005 = new cjs.Graphics().p("AocD6IAAnzIQ5AAIAAHzg");
	var mask_graphics_1006 = new cjs.Graphics().p("AoyD6IAAnzIRlAAIAAHzg");
	var mask_graphics_1007 = new cjs.Graphics().p("ApID6IAAnzISRAAIAAHzg");
	var mask_graphics_1008 = new cjs.Graphics().p("ApeD6IAAnzIS9AAIAAHzg");
	var mask_graphics_1009 = new cjs.Graphics().p("Ap1D6IAAnzITqAAIAAHzg");
	var mask_graphics_1010 = new cjs.Graphics().p("AqLD6IAAnzIUXAAIAAHzg");
	var mask_graphics_1011 = new cjs.Graphics().p("AqhD6IAAnzIVDAAIAAHzg");
	var mask_graphics_1012 = new cjs.Graphics().p("Aq3D6IAAnzIVvAAIAAHzg");
	var mask_graphics_1013 = new cjs.Graphics().p("ArND6IAAnzIWbAAIAAHzg");
	var mask_graphics_1014 = new cjs.Graphics().p("ArkD6IAAnzIXJAAIAAHzg");
	var mask_graphics_1015 = new cjs.Graphics().p("Ar6D6IAAnzIX1AAIAAHzg");
	var mask_graphics_1016 = new cjs.Graphics().p("AsQD6IAAnzIYhAAIAAHzg");
	var mask_graphics_1017 = new cjs.Graphics().p("AsmD6IAAnzIZNAAIAAHzg");
	var mask_graphics_1018 = new cjs.Graphics().p("As8D6IAAnzIZ5AAIAAHzg");
	var mask_graphics_1019 = new cjs.Graphics().p("AtSD6IAAnzIalAAIAAHzg");
	var mask_graphics_1020 = new cjs.Graphics().p("AtpD6IAAnzIbSAAIAAHzg");
	var mask_graphics_1021 = new cjs.Graphics().p("At/D6IAAnzIb/AAIAAHzg");
	var mask_graphics_1022 = new cjs.Graphics().p("AuVD6IAAnzIcrAAIAAHzg");
	var mask_graphics_1023 = new cjs.Graphics().p("AurD6IAAnzIdXAAIAAHzg");
	var mask_graphics_1024 = new cjs.Graphics().p("AvBD6IAAnzIeDAAIAAHzg");
	var mask_graphics_1025 = new cjs.Graphics().p("AvYD6IAAnzIexAAIAAHzg");
	var mask_graphics_1026 = new cjs.Graphics().p("AvuD6IAAnzIfdAAIAAHzg");
	var mask_graphics_1027 = new cjs.Graphics().p("AwED6IAAnzMAgJAAAIAAHzg");
	var mask_graphics_1028 = new cjs.Graphics().p("AwaD6IAAnzMAg1AAAIAAHzg");
	var mask_graphics_1029 = new cjs.Graphics().p("AwwD6IAAnzMAhhAAAIAAHzg");
	var mask_graphics_1030 = new cjs.Graphics().p("AxGD6IAAnzMAiNAAAIAAHzg");
	var mask_graphics_1031 = new cjs.Graphics().p("AxdD6IAAnzMAi7AAAIAAHzg");
	var mask_graphics_1032 = new cjs.Graphics().p("AxzD6IAAnzMAjnAAAIAAHzg");
	var mask_graphics_1033 = new cjs.Graphics().p("AyJD6IAAnzMAkTAAAIAAHzg");
	var mask_graphics_1034 = new cjs.Graphics().p("AyfD6IAAnzMAk/AAAIAAHzg");
	var mask_graphics_1035 = new cjs.Graphics().p("Ay1D6IAAnzMAlrAAAIAAHzg");
	var mask_graphics_1036 = new cjs.Graphics().p("AzMD6IAAnzMAmYAAAIAAHzg");
	var mask_graphics_1037 = new cjs.Graphics().p("AziD6IAAnzMAnFAAAIAAHzg");
	var mask_graphics_1038 = new cjs.Graphics().p("Az4D6IAAnzMAnxAAAIAAHzg");
	var mask_graphics_1039 = new cjs.Graphics().p("A0OD6IAAnzMAodAAAIAAHzg");
	var mask_graphics_1040 = new cjs.Graphics().p("A0kD6IAAnzMApJAAAIAAHzg");
	var mask_graphics_1041 = new cjs.Graphics().p("A06D6IAAnzMAp1AAAIAAHzg");
	var mask_graphics_1042 = new cjs.Graphics().p("A1RD6IAAnzMAqjAAAIAAHzg");
	var mask_graphics_1043 = new cjs.Graphics().p("A1nD6IAAnzMArPAAAIAAHzg");
	var mask_graphics_1044 = new cjs.Graphics().p("A19D6IAAnzMAr7AAAIAAHzg");
	var mask_graphics_1045 = new cjs.Graphics().p("A2TD6IAAnzMAsnAAAIAAHzg");
	var mask_graphics_1046 = new cjs.Graphics().p("A2TD6IAAnzMAsnAAAIAAHzg");
	var mask_graphics_1047 = new cjs.Graphics().p("A2TD6IAAnzMAsnAAAIAAHzg");
	var mask_graphics_1048 = new cjs.Graphics().p("A2TD6IAAnzMAsnAAAIAAHzg");
	var mask_graphics_1049 = new cjs.Graphics().p("A2TD6IAAnzMAsnAAAIAAHzg");
	var mask_graphics_1050 = new cjs.Graphics().p("A2TD6IAAnzMAsnAAAIAAHzg");
	var mask_graphics_1051 = new cjs.Graphics().p("A2TD6IAAnzMAsnAAAIAAHzg");
	var mask_graphics_1052 = new cjs.Graphics().p("A2TD6IAAnzMAsnAAAIAAHzg");
	var mask_graphics_1053 = new cjs.Graphics().p("A2TD6IAAnzMAsnAAAIAAHzg");
	var mask_graphics_1054 = new cjs.Graphics().p("A2TD6IAAnzMAsnAAAIAAHzg");
	var mask_graphics_1055 = new cjs.Graphics().p("A2uD6IAAnzMAtdAAAIAAHzg");
	var mask_graphics_1056 = new cjs.Graphics().p("A3KD6IAAnzMAuUAAAIAAHzg");
	var mask_graphics_1057 = new cjs.Graphics().p("A3lD6IAAnzMAvLAAAIAAHzg");
	var mask_graphics_1058 = new cjs.Graphics().p("A4AD6IAAnzMAwBAAAIAAHzg");
	var mask_graphics_1059 = new cjs.Graphics().p("A4cD6IAAnzMAw4AAAIAAHzg");
	var mask_graphics_1060 = new cjs.Graphics().p("A43D6IAAnzMAxvAAAIAAHzg");
	var mask_graphics_1061 = new cjs.Graphics().p("A5SD6IAAnzMAylAAAIAAHzg");
	var mask_graphics_1062 = new cjs.Graphics().p("A5tD6IAAnzMAzcAAAIAAHzg");
	var mask_graphics_1063 = new cjs.Graphics().p("A6JD6IAAnzMA0TAAAIAAHzg");
	var mask_graphics_1064 = new cjs.Graphics().p("A6kD6IAAnzMA1JAAAIAAHzg");
	var mask_graphics_1065 = new cjs.Graphics().p("A6/D6IAAnzMA1/AAAIAAHzg");
	var mask_graphics_1066 = new cjs.Graphics().p("A7bD6IAAnzMA23AAAIAAHzg");
	var mask_graphics_1067 = new cjs.Graphics().p("A72D6IAAnzMA3tAAAIAAHzg");
	var mask_graphics_1068 = new cjs.Graphics().p("A8RD6IAAnzMA4jAAAIAAHzg");
	var mask_graphics_1069 = new cjs.Graphics().p("A8sD6IAAnzMA5ZAAAIAAHzg");
	var mask_graphics_1070 = new cjs.Graphics().p("A9HD6IAAnzMA6PAAAIAAHzg");
	var mask_graphics_1071 = new cjs.Graphics().p("A9jD6IAAnzMA7HAAAIAAHzg");
	var mask_graphics_1072 = new cjs.Graphics().p("A9+D6IAAnzMA79AAAIAAHzg");
	var mask_graphics_1073 = new cjs.Graphics().p("A+aD6IAAnzMA81AAAIAAHzg");
	var mask_graphics_1074 = new cjs.Graphics().p("A+1D6IAAnzMA9rAAAIAAHzg");
	var mask_graphics_1075 = new cjs.Graphics().p("A/QD6IAAnzMA+hAAAIAAHzg");
	var mask_graphics_1076 = new cjs.Graphics().p("A/rD6IAAnzMA/XAAAIAAHzg");
	var mask_graphics_1077 = new cjs.Graphics().p("EggGAD6IAAnzMBAOAAAIAAHzg");
	var mask_graphics_1078 = new cjs.Graphics().p("EggiAD6IAAnzMBBFAAAIAAHzg");
	var mask_graphics_1079 = new cjs.Graphics().p("Egg9AD6IAAnzMBB7AAAIAAHzg");
	var mask_graphics_1080 = new cjs.Graphics().p("EghYAgWIAAn0MBCxAAAIAAH0g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(984).to({graphics:mask_graphics_984,x:-7.5,y:207.0005}).wait(1).to({graphics:mask_graphics_985,x:-5.325,y:389}).wait(1).to({graphics:mask_graphics_986,x:-3.15,y:389}).wait(1).to({graphics:mask_graphics_987,x:-0.95,y:389}).wait(1).to({graphics:mask_graphics_988,x:1.225,y:389}).wait(1).to({graphics:mask_graphics_989,x:3.4,y:389}).wait(1).to({graphics:mask_graphics_990,x:5.55,y:389}).wait(1).to({graphics:mask_graphics_991,x:7.725,y:389}).wait(1).to({graphics:mask_graphics_992,x:9.925,y:389}).wait(1).to({graphics:mask_graphics_993,x:12.1,y:389}).wait(1).to({graphics:mask_graphics_994,x:14.275,y:389}).wait(1).to({graphics:mask_graphics_995,x:16.45,y:389}).wait(1).to({graphics:mask_graphics_996,x:18.625,y:389}).wait(1).to({graphics:mask_graphics_997,x:20.825,y:389}).wait(1).to({graphics:mask_graphics_998,x:23,y:389}).wait(1).to({graphics:mask_graphics_999,x:25.175,y:389}).wait(1).to({graphics:mask_graphics_1000,x:27.35,y:389}).wait(1).to({graphics:mask_graphics_1001,x:29.525,y:389}).wait(1).to({graphics:mask_graphics_1002,x:31.7,y:389}).wait(1).to({graphics:mask_graphics_1003,x:33.875,y:389}).wait(1).to({graphics:mask_graphics_1004,x:36.05,y:389}).wait(1).to({graphics:mask_graphics_1005,x:38.225,y:389}).wait(1).to({graphics:mask_graphics_1006,x:40.4,y:389}).wait(1).to({graphics:mask_graphics_1007,x:42.6,y:389}).wait(1).to({graphics:mask_graphics_1008,x:44.775,y:389}).wait(1).to({graphics:mask_graphics_1009,x:46.95,y:389}).wait(1).to({graphics:mask_graphics_1010,x:49.125,y:389}).wait(1).to({graphics:mask_graphics_1011,x:51.3,y:389}).wait(1).to({graphics:mask_graphics_1012,x:53.5,y:389}).wait(1).to({graphics:mask_graphics_1013,x:55.675,y:389}).wait(1).to({graphics:mask_graphics_1014,x:57.85,y:389}).wait(1).to({graphics:mask_graphics_1015,x:60,y:389}).wait(1).to({graphics:mask_graphics_1016,x:62.175,y:389}).wait(1).to({graphics:mask_graphics_1017,x:64.35,y:389}).wait(1).to({graphics:mask_graphics_1018,x:66.55,y:389}).wait(1).to({graphics:mask_graphics_1019,x:68.725,y:389}).wait(1).to({graphics:mask_graphics_1020,x:70.9,y:389}).wait(1).to({graphics:mask_graphics_1021,x:73.075,y:389}).wait(1).to({graphics:mask_graphics_1022,x:75.25,y:389}).wait(1).to({graphics:mask_graphics_1023,x:77.45,y:389}).wait(1).to({graphics:mask_graphics_1024,x:79.625,y:389}).wait(1).to({graphics:mask_graphics_1025,x:81.8,y:389}).wait(1).to({graphics:mask_graphics_1026,x:83.975,y:389}).wait(1).to({graphics:mask_graphics_1027,x:86.15,y:389}).wait(1).to({graphics:mask_graphics_1028,x:88.325,y:389}).wait(1).to({graphics:mask_graphics_1029,x:90.5,y:389}).wait(1).to({graphics:mask_graphics_1030,x:92.675,y:389}).wait(1).to({graphics:mask_graphics_1031,x:94.85,y:389}).wait(1).to({graphics:mask_graphics_1032,x:97.025,y:389}).wait(1).to({graphics:mask_graphics_1033,x:99.225,y:389}).wait(1).to({graphics:mask_graphics_1034,x:101.4,y:389}).wait(1).to({graphics:mask_graphics_1035,x:103.575,y:389}).wait(1).to({graphics:mask_graphics_1036,x:105.75,y:389}).wait(1).to({graphics:mask_graphics_1037,x:107.925,y:389}).wait(1).to({graphics:mask_graphics_1038,x:110.125,y:389}).wait(1).to({graphics:mask_graphics_1039,x:112.3,y:389}).wait(1).to({graphics:mask_graphics_1040,x:114.45,y:389}).wait(1).to({graphics:mask_graphics_1041,x:116.625,y:389}).wait(1).to({graphics:mask_graphics_1042,x:118.8,y:389}).wait(1).to({graphics:mask_graphics_1043,x:121,y:389}).wait(1).to({graphics:mask_graphics_1044,x:123.175,y:389}).wait(1).to({graphics:mask_graphics_1045,x:125.35,y:389}).wait(1).to({graphics:mask_graphics_1046,x:125.35,y:389}).wait(1).to({graphics:mask_graphics_1047,x:125.35,y:389}).wait(1).to({graphics:mask_graphics_1048,x:125.35,y:389}).wait(1).to({graphics:mask_graphics_1049,x:125.35,y:389}).wait(1).to({graphics:mask_graphics_1050,x:125.35,y:389}).wait(1).to({graphics:mask_graphics_1051,x:125.35,y:389}).wait(1).to({graphics:mask_graphics_1052,x:125.35,y:389}).wait(1).to({graphics:mask_graphics_1053,x:125.35,y:389}).wait(1).to({graphics:mask_graphics_1054,x:125.35,y:389}).wait(1).to({graphics:mask_graphics_1055,x:128.025,y:389}).wait(1).to({graphics:mask_graphics_1056,x:130.7,y:389}).wait(1).to({graphics:mask_graphics_1057,x:133.4,y:389}).wait(1).to({graphics:mask_graphics_1058,x:136.075,y:389}).wait(1).to({graphics:mask_graphics_1059,x:138.75,y:389}).wait(1).to({graphics:mask_graphics_1060,x:141.425,y:389}).wait(1).to({graphics:mask_graphics_1061,x:144.1,y:389}).wait(1).to({graphics:mask_graphics_1062,x:146.8,y:389}).wait(1).to({graphics:mask_graphics_1063,x:149.475,y:389}).wait(1).to({graphics:mask_graphics_1064,x:152.15,y:389}).wait(1).to({graphics:mask_graphics_1065,x:154.825,y:389}).wait(1).to({graphics:mask_graphics_1066,x:157.5,y:389}).wait(1).to({graphics:mask_graphics_1067,x:160.225,y:389}).wait(1).to({graphics:mask_graphics_1068,x:162.9,y:389}).wait(1).to({graphics:mask_graphics_1069,x:165.575,y:389}).wait(1).to({graphics:mask_graphics_1070,x:168.25,y:389}).wait(1).to({graphics:mask_graphics_1071,x:170.925,y:389}).wait(1).to({graphics:mask_graphics_1072,x:173.6,y:389}).wait(1).to({graphics:mask_graphics_1073,x:176.3,y:389}).wait(1).to({graphics:mask_graphics_1074,x:178.975,y:389}).wait(1).to({graphics:mask_graphics_1075,x:181.65,y:389}).wait(1).to({graphics:mask_graphics_1076,x:184.325,y:389}).wait(1).to({graphics:mask_graphics_1077,x:187,y:389}).wait(1).to({graphics:mask_graphics_1078,x:189.7,y:389}).wait(1).to({graphics:mask_graphics_1079,x:192.375,y:389}).wait(1).to({graphics:mask_graphics_1080,x:195.0315,y:207.0005}).wait(57));

	// 图层_34
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape.setTransform(391.075,386.5227);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1.setTransform(379.2,387.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_2.setTransform(364.375,388.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_3.setTransform(346.6023,385.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_4.setTransform(332.2,387.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAAQIBVgGQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_5.setTransform(310.825,388.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAfByIg7hLIgJAAIAABLIgaAAIAAjjIAaAAIAACDIAKAAIA3hBIAgAAIhDBKIBHBXg");
	this.shape_6.setTransform(295.65,385.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgNBvIAAihIAaAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_7.setTransform(282.6,385.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgQBqQgKgHAAgTIAAjCIAaAAIAAC8QAAAMADADQADAFAIgBIAGAAIAHgBIAAAVIgIABIgJABQgRAAgJgJg");
	this.shape_8.setTransform(275.325,385.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_9.setTransform(257.15,387.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_10.setTransform(242.325,388.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_11.setTransform(224.5523,385.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_12.setTransform(197.725,388.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgYAAIAAgWIAYAAIAAgmIAZAAIAAAmIAoAAIAAAWIgoAAIAABYQAAANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_13.setTransform(176.4,387.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKABQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_14.setTransform(162.1523,388.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_15.setTransform(143.025,388.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_16.setTransform(122.075,388.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_17.setTransform(92.675,389);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAJgSAQgHQARgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgKAFgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_18.setTransform(74.25,388.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAKgFAFgIQAGgJAEgNIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_19.setTransform(57.1,391.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_20.setTransform(32.2,388.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_21.setTransform(12.775,386.5488);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_22.setTransform(564.025,347.6969);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_23.setTransform(550.2523,338);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AgXBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAOAAAKACQALABAHADIAAAYIgTgGQgKgBgNAAQgQAAgLAFQgKAFgEAOQgFANAAAYQgBAWAGAOQAEANAKAGQALAGARgBQAMAAALgCQAKgBAJgDIAAAXIgLADIgQACIgQABQgXAAgQgIg");
	this.shape_24.setTransform(533.7,341.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AgrBMQgMgHgEgMQgFgMAAgPIAAhwIAaAAIAABmQgBAMADAKQACAIAHAFQAHAEANAAQAJABAJgCQAJgDAIgGQAHgIAFgOIAAhtIAZAAIAAChIgVAAIgEgXQgFALgIAFQgIAGgKACQgJACgKABQgVgBgMgGg");
	this.shape_25.setTransform(516.775,341.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("ABWBSIAAhlQAAgTgGgKQgHgLgSAAQgKAAgIADQgIACgGAHQgHAFgDAMIAAACIAABuIgZAAIAAhlQAAgTgGgKQgGgLgSAAQgKAAgIADQgIACgGAHQgHAFgEANIAABvIgaAAIAAihIAaAAIAAAWQAIgOAMgGQAMgEAPAAQATgBAMAIQAKAGAFANQAFgKAIgHQAIgFAKgDQAKgBAKAAQASgBAMAIQAMAGAFAMQAGAMAAAQIAABug");
	this.shape_26.setTransform(493.875,341.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_27.setTransform(463,341.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgYBSIgRgBIgMgDIAAgWIANADIARACIARABQARAAAJgFQAKgFAAgPQAAgJgCgFQgDgGgIgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJAAgNQAAgVAPgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgHgDgKgCQgLgCgLAAQgQAAgIAGQgJAEAAAOQAAAIACAEQADAFAGADQAHADALADQATADALAHQAMAEAEAJQAGAKAAAPQgBAZgQALQgPAMgdgBIgSgBg");
	this.shape_28.setTransform(446.6,341.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgYAAIAAgWIAYAAIAAgmIAZAAIAAAmIAoAAIAAAWIgoAAIAABYQAAANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_29.setTransform(426.6,339.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgNBvIAAihIAaAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_30.setTransform(417.6,338.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_31.setTransform(397.175,341.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AgOBRIg9ihIAaAAIAxCHIABAAIAwiHIAbAAIg9Chg");
	this.shape_32.setTransform(380.6,341.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgFANABAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_33.setTransform(363.4,341.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AgQBqQgKgIAAgSIAAjCIAaAAIAAC7QAAANADADQADAEAIAAIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgJg");
	this.shape_34.setTransform(350.925,338.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_35.setTransform(333.75,339);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_36.setTransform(317.425,347.6969);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgEAFgIQAGgIAEgNIhBihIAcAAIAxCGIABAAIAviGIAaAAIg6CbQgIAVgIAPQgIAOgOAIQgPAIgXAAg");
	this.shape_37.setTransform(305,344.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgYAAIAAgWIAYAAIAAgmIAYAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAIgBIAAAWIgJABIgJAAQgRAAgKgEg");
	this.shape_38.setTransform(292,339.475);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_39.setTransform(281.9,339.475);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_40.setTransform(268.225,341.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAIQgIAIgEANIAABpg");
	this.shape_41.setTransform(254.925,341.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AhIBxIAAjeIAaAAIAAAdQAFgOAMgIQANgKAWABQAbgBAOALQAPALAGASQAFAUAAAYQAAAXgFASQgGATgPALQgOAMgbABQgWAAgNgJQgMgJgFgOIAABZgAgbhTQgLAIgEAOQgFAOAAATQAAATAFANQAEAOALAIQALAHASAAQAUABAJgKQAJgJADgNQADgNAAgRQAAgRgDgOQgDgOgKgJQgJgIgTAAQgSAAgLAHg");
	this.shape_42.setTransform(239.125,344.15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_43.setTransform(212.15,341.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAOADIASACIAQABQARAAAKgFQAJgFAAgPQAAgJgCgFQgEgGgHgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJABgNQAAgVAOgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgIgDgJgCQgLgCgLAAQgQAAgJAGQgIAEgBAOQAAAIADAEQACAFAIADQAGADAMADQASADALAHQAMAEAEAJQAFAKABAPQgBAZgPALQgQAMgdgBIgRgBg");
	this.shape_44.setTransform(195.75,341.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAOADIASACIAQABQARAAAKgFQAJgFAAgPQAAgJgCgFQgEgGgHgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJABgNQAAgVAOgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgIgDgJgCQgLgCgLAAQgQAAgJAGQgIAEgBAOQAAAIADAEQACAFAIADQAGADAMADQASADALAHQAMAEAEAJQAFAKABAPQgBAZgPALQgQAMgdgBIgRgBg");
	this.shape_45.setTransform(173.7,341.25);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF0000").s().p("AgUAmIAIgZQAEgNACgMQACgOABgLIAYAAQAAALgEANQgDANgFAOQgFANgFALg");
	this.shape_46.setTransform(162.45,330.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_47.setTransform(153.3,339.475);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_48.setTransform(144.2,339);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("AgNBmQgFgEAAgMQAAgMAFgEQADgDAKAAQAKAAAFADQAEAEAAAMQAAAMgEAEQgFADgKAAQgKAAgDgDgAgJArIgEiTIAcAAIgFCTg");
	this.shape_49.setTransform(127.05,339.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_50.setTransform(112.4,341.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF0000").s().p("AguBoQgPgKgFgTQgGgSAAgaQAAgWAGgSQAFgTAPgMQAPgLAaAAQAXAAAMAIQAMAJAFAOIAAheIAaAAIAADiIgWAAIgEgaQgFANgNAIQgNAJgVAAQgaAAgPgMgAgegVQgJAJgDAOQgCAOAAAPQAAARADAPQADAOAJAIQAJAIATAAQASAAALgHQALgIAFgNQAEgOAAgUQAAgSgEgNQgFgOgLgIQgLgIgSAAQgTABgKAIg");
	this.shape_51.setTransform(93.1731,338.15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_52.setTransform(72.3,339);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF0000").s().p("AgaAoQAIgNAHgOQAGgNAEgNQADgOAAgLIAYAAQAAAMgEAPQgGAOgHANQgHAOgGAKg");
	this.shape_53.setTransform(55.25,349.55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AgYBSIgRgBIgMgDIAAgWIANADIARACIARABQARAAAJgFQAKgFAAgPQAAgJgCgFQgDgGgIgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJAAgNQAAgVAPgMQAPgLAbAAQAMgBAMACQALACAGACIgBAWQgIgDgJgCQgLgCgLAAQgQAAgIAGQgJAEAAAOQAAAIACAEQADAFAHADQAGADALADQATADALAHQAMAEAEAJQAGAKAAAPQgBAZgQALQgPAMgdgBIgSgBg");
	this.shape_54.setTransform(44.3,341.25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_55.setTransform(28.425,341.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AgNBoIAAhZIhJh2IAfAAIA3BeIACAAIA3heIAeAAIhKB2IAABZg");
	this.shape_56.setTransform(10.925,339);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_57.setTransform(486.225,291.4227);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgJgEg");
	this.shape_58.setTransform(474.35,291.925);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_59.setTransform(459.525,293.775);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_60.setTransform(441.7523,290.45);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_61.setTransform(412.325,293.75);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_62.setTransform(391.225,293.75);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_63.setTransform(373.3023,293.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_64.setTransform(351.675,293.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_65.setTransform(335.675,293.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_66.setTransform(317.25,293.75);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_67.setTransform(300.1,296.75);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AgaBvIgTgDIAAgVIAUACIAUABQAaABANgMQANgNAAgcIAAgQQgFAOgMAIQgMAJgWAAQgbAAgPgLQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPgBAKAFQALAEAGAHQAGAIADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgoAAIgUgCgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAIQAJAHATABQASAAALgHQALgIAFgNQAEgMAAgUQAAgSgEgPQgFgNgLgHQgLgIgSAAQgTAAgKAJg");
	this.shape_68.setTransform(274.4737,296.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_69.setTransform(256.1523,293.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACABAKQgBAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_70.setTransform(242.85,290.725);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_71.setTransform(234.175,293.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_72.setTransform(217.625,293.775);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_73.setTransform(200.425,293.75);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_74.setTransform(179.325,293.75);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_75.setTransform(150.525,293.75);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AAfByIg7hMIgJAAIAABMIgaAAIAAjjIAaAAIAACEIAKAAIA3hCIAgAAIhDBLIBGBWg");
	this.shape_76.setTransform(135.35,290.45);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AgMBvIAAihIAZAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_77.setTransform(122.3,290.725);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_78.setTransform(115.025,290.55);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_79.setTransform(92.675,293.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_80.setTransform(74.25,293.75);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_81.setTransform(57.1,296.75);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAEgNABgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_82.setTransform(32.2,293.75);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_83.setTransform(12.775,291.4488);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_84.setTransform(525.275,243.8727);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAKgFAFgIQAGgJAEgMIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgHAVgJAOQgIAPgOAIQgOAIgYAAg");
	this.shape_85.setTransform(510.6,249.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_86.setTransform(492.875,246.225);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_87.setTransform(474.175,243.8988);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AgXBTIgRgCIgOgDIAAgWIAPADIARACIAQABQARABAKgGQAJgFAAgOQAAgKgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgFQgKgFgEgJQgEgJABgOQAAgUAOgLQAPgMAbgBQAMABAMABQALABAHADIgDAWQgHgDgJgBQgLgCgLAAQgQgBgJAFQgIAFgBAOQAAAIADAFQACAEAIADQAGADAMADQASAEALAFQALAFAGAKQAEAJAAAQQAAAXgPAMQgRAMgcAAIgRgBg");
	this.shape_88.setTransform(448.55,246.15);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("AgUAnIAIgaQAEgNACgMQACgOABgMIAYAAQAAALgEAOQgDANgFANQgFAOgFAMg");
	this.shape_89.setTransform(437.3,235.35);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKACQgJACgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_90.setTransform(424.0023,246.05);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_91.setTransform(406.025,246.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_92.setTransform(392.725,246.05);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_93.setTransform(376.0231,243.05);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF0000").s().p("AgQBqQgKgHAAgTIAAjCIAaAAIAAC8QAAAMADADQADAFAIgBIAGAAIAHgBIAAAVIgIABIgJABQgRAAgJgJg");
	this.shape_94.setTransform(363.725,243);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACAAAKQAAAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_95.setTransform(354.35,243.175);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_96.setTransform(341.0523,242.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AgQBnQgRgFgNgMQgMgLgHgVQgHgVAAghQAAgnAMgXQAMgYAWgKQAWgKAdAAQAOAAALACQALABAJADIAAAZIgUgFQgLgCgNAAQgYAAgPAHQgPAIgIASQgHATAAAeQAAAgAHATQAHASAPAHQAOAHAXAAQAOAAAMgCQAMgCAMgEIAAAXQgJAEgNADQgNACgQAAQgVAAgRgEg");
	this.shape_97.setTransform(323.225,243.8988);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKACQgJACgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_98.setTransform(296.8523,246.05);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQAQAHAJASQAJATAAAfQAAAggJATQgJASgQAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgEgOgLgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_99.setTransform(278.25,246.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_100.setTransform(256.675,246.05);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_101.setTransform(240.125,246.225);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_102.setTransform(222.925,246.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_103.setTransform(201.825,246.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgPIAAhvIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_104.setTransform(172.425,246.35);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAJgSAQgHQARgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgEgOgLgFQgKgHgSAAQgRAAgKAHQgKAFgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_105.setTransform(154,246.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAJgFAGgIQAGgJAEgMIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_106.setTransform(136.85,249.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_107.setTransform(111.95,246.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_108.setTransform(92.7231,243.05);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_109.setTransform(70.85,244.375);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_110.setTransform(56.025,246.225);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_111.setTransform(38.2523,242.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_112.setTransform(15.475,243.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF0000").s().p("AgNBlQgFgDAAgMQAAgMAFgDQADgFAKABQAKgBAFAFQAEADAAAMQAAAMgEADQgFAEgKAAQgKAAgDgEgAgJArIgEiTIAcAAIgFCTg");
	this.shape_113.setTransform(478.95,170.05);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF0000").s().p("AAfByIg7hLIgJAAIAABLIgaAAIAAjjIAaAAIAACEIAKAAIA3hCIAgAAIhDBLIBHBWg");
	this.shape_114.setTransform(467.1,168.95);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_115.setTransform(453.425,172.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_116.setTransform(436.875,172.275);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FF0000").s().p("AguBpQgPgLgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgLgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_117.setTransform(418.3731,169.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAPADIARADIAPABQASgBAKgFQAJgGAAgOQAAgJgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgEQgKgHgEgIQgEgJABgOQAAgTAOgMQAPgMAcAAQALAAAMABQALABAHADIgDAWQgGgDgLgCQgKgBgLAAQgQgBgJAFQgIAGgBANQABAIACAFQACAEAIADQAGADAMACQASAFALAFQALAFAGAJQAEAKAAAQQAAAXgPAMQgRALgdAAIgQgBg");
	this.shape_118.setTransform(394.45,172.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_119.setTransform(382.15,170.425);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgEIAAAYQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_120.setTransform(368.475,172.25);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FF0000").s().p("AgaBvIgTgDIAAgVIAUADIAUAAQAaABANgMQANgNAAgcIAAgQQgFAOgMAJQgMAIgWAAQgbAAgPgLQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPgBAKAFQALAEAGAHQAGAIADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgoAAIgUgCgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAIQAJAHATABQASAAALgHQALgIAFgNQAEgMAAgUQAAgSgEgPQgFgNgLgHQgLgIgSAAQgTAAgKAJg");
	this.shape_121.setTransform(349.7737,175.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_122.setTransform(327.9,170.425);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACABAKQgBAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_123.setTransform(318.9,169.225);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_124.setTransform(303.925,169.05);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FF0000").s().p("AgMBvIAAihIAZAAIAAChgAgLhSQgDgDAAgKQAAgKADgCQAEgDAHAAQAIAAAEADQAEACAAAKQAAAKgEADQgEADgIAAQgHAAgEgDg");
	this.shape_125.setTransform(294.55,169.225);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_126.setTransform(285.4,170.425);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_127.setTransform(271.1523,172.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgLAAgRIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_128.setTransform(252.575,172.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_129.setTransform(232.525,169.05);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_130.setTransform(223.925,169.05);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_131.setTransform(208.725,172.275);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FF0000").s().p("AgdBrQgMgJgFgOIgDAdIgXAAIAAjjIAaAAIAABeQAFgOAMgIQANgJAWAAQAbAAAOALQAPAKAGASQAFASAAAaQAAAWgFATQgGATgPAMQgOALgbAAQgWAAgNgIgAgbgWQgLAHgEAOQgFANAAAUQAAASAFAOQAEAOALAIQALAIASAAQAUgBAJgIQAJgKADgOQADgOAAgPQAAgSgDgOQgDgNgKgIQgJgJgTAAQgSAAgLAIg");
	this.shape_132.setTransform(191.125,169.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_133.setTransform(176.05,170.425);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQAQAHAJATQAJASAAAfQAAAggJATQgJASgQAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAFgOQADgNABgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAEANQAFAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_134.setTransform(161.75,172.25);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_135.setTransform(143.2,172.25);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FF0000").s().p("AgWBzIAAiMIgbAAIAAgVIAbAAIAAgCQAAgbAHgPQAHgOALgFQAMgFARABIAJAAIAJABIAAAVIgIgBIgKgBQgLAAgHAEQgGAEgCAKQgDAKAAATIAmAAIAAAVIgmAAIAACMg");
	this.shape_136.setTransform(129.025,168.8977);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAxCFIABAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgPAIgXAAg");
	this.shape_137.setTransform(107.9,175.25);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_138.setTransform(90.175,172.275);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_139.setTransform(78.425,169.05);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FF0000").s().p("AhIBxIAAjdIAaAAIAAAcQAFgOAMgIQANgJAWAAQAbAAAOALQAPAKAGASQAFATAAAaQAAAWgFASQgGATgPAMQgOALgbAAQgWAAgNgIQgMgJgFgOIAABZgAgbhSQgLAHgEAOQgFAOAAAUQAAASAFANQAEAOALAIQALAIASAAQAUgBAJgIQAJgKADgOQADgNAAgPQAAgSgDgOQgDgOgKgIQgJgJgTAAQgSAAgLAIg");
	this.shape_140.setTransform(63.975,175.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgEIAAAYQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_141.setTransform(37.625,172.25);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_142.setTransform(15.475,169.95);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_143.setTransform(551.725,131.0969);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_144.setTransform(537.2231,121.55);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_145.setTransform(518.325,124.725);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_146.setTransform(499.8231,121.55);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_147.setTransform(473.0731,121.55);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKABQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_148.setTransform(454.7523,124.55);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_149.setTransform(435.625,124.725);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_150.setTransform(405.625,124.55);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgPIAAhvIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_151.setTransform(382.475,124.85);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_152.setTransform(359.575,124.55);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAJgFAGgIQAGgJAEgNIhBigIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgHAVgJAOQgIAPgOAIQgPAIgXAAg");
	this.shape_153.setTransform(330.1,127.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_154.setTransform(308.425,124.55);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_155.setTransform(277.6023,121.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgYAAIAAgWIAYAAIAAgmIAYAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAJgBIAKAAIAJgBIAAAWIgJABIgKAAQgRAAgKgEg");
	this.shape_156.setTransform(263.2,122.875);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAFACAAAKQAAAKgFADQgDADgIAAQgHAAgEgDg");
	this.shape_157.setTransform(254.2,121.675);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_158.setTransform(237.725,124.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FF0000").s().p("AAeByIg5hLIgJAAIAABLIgaAAIAAjjIAaAAIAACDIAJAAIA3hBIAgAAIhDBKIBGBXg");
	this.shape_159.setTransform(211.1,121.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_160.setTransform(197.425,124.55);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_161.setTransform(180.875,124.725);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FF0000").s().p("AhIBwIAAjcIAaAAIAAAdQAFgPAMgJQANgIAWgBQAbABAOAKQAPALAGATQAFASAAAaQAAAWgFASQgGATgPAMQgOALgbABQgWAAgNgJQgMgIgFgPIAABYgAgbhTQgLAIgEAOQgFAOAAAUQAAASAFANQAEAOALAIQALAIASgBQAUAAAJgJQAJgIADgOQADgNAAgQQAAgSgDgOQgDgOgKgIQgJgJgTAAQgSAAgLAHg");
	this.shape_162.setTransform(163.275,127.55);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_163.setTransform(136.925,124.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_164.setTransform(119.0023,121.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_165.setTransform(104.6,122.875);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_166.setTransform(82.6,124.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_167.setTransform(68.25,122.875);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_168.setTransform(46.25,124.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FF0000").s().p("AgaBvIgTgCIAAgXIAUAEIAUABQAagBANgMQANgMAAgcIAAgQQgFAOgMAJQgMAHgWABQgbAAgPgLQgPgKgFgTQgGgRAAgZQAAgXAGgSQAFgTAPgLQAPgLAbgBQAPABAKAEQALAEAGAIQAGAHADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgogBIgUgBgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAHQAJAJATAAQASAAALgIQALgGAFgOQAEgNAAgTQAAgSgEgOQgFgOgLgIQgLgHgSAAQgTAAgKAJg");
	this.shape_169.setTransform(26.9737,127.55);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FF0000").s().p("AgMBoIAAjPIAaAAIAADPg");
	this.shape_170.setTransform(6.1,122.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_171.setTransform(467.425,74.8227);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FF0000").s().p("AAeByIg6hMIgJAAIAABMIgZAAIAAjjIAZAAIAACDIAKAAIA3hBIAgAAIhDBKIBHBXg");
	this.shape_172.setTransform(454.15,73.85);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAHQgIAJgEANIAABpg");
	this.shape_173.setTransform(440.475,77);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_174.setTransform(423.925,77.175);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FF0000").s().p("AhIBxIAAjeIAaAAIAAAdQAFgOAMgIQANgKAWABQAbgBAOALQAPALAGASQAFAUAAAYQAAAXgFASQgGATgPALQgOAMgbABQgWAAgNgJQgMgJgFgOIAABZgAgbhTQgLAIgEAOQgFAOAAATQAAATAFANQAEAOALAIQALAHASAAQAUABAJgKQAJgJADgNQADgOAAgQQAAgRgDgOQgDgOgKgJQgJgIgTAAQgSAAgLAHg");
	this.shape_175.setTransform(406.325,80);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAHQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_176.setTransform(379.975,77.15);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_177.setTransform(362.0523,73.85);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLAAgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_178.setTransform(347.65,75.325);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAHQgIAJgEANIAABpg");
	this.shape_179.setTransform(330.325,77);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_180.setTransform(314.3,77.15);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQARgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_181.setTransform(288.05,77.15);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_182.setTransform(269.5,77.15);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FF0000").s().p("Ag/BRIAAgVIBbh1IAAgCIhTAAIAAgVIByAAIAAAUIhbB1IAAABIBgAAIAAAXg");
	this.shape_183.setTransform(252.75,77.15);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAHQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_184.setTransform(228.675,77.15);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_185.setTransform(210.7523,73.85);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgFgLABgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQABAGAGADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_186.setTransform(196.35,75.325);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_187.setTransform(174.35,77.15);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLAAgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_188.setTransform(160,75.325);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_189.setTransform(138,77.15);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FF0000").s().p("AgaBwIgTgEIAAgVIAUACIAUABQAaAAANgMQANgMAAgbIAAgRQgFAPgMAHQgMAJgWgBQgbAAgPgKQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPAAAKAEQALAEAGAIQAGAHADAKIAAgfIAaAAIAACWQAAAigTATQgUASgoABIgUgBgAgehRQgJAIgDAOQgCAOAAAQQAAARADANQADANAJAJQAJAHATABQASAAALgIQALgHAFgNQAEgNAAgTQAAgTgEgOQgFgNgLgIQgLgHgSAAQgTAAgKAJg");
	this.shape_190.setTransform(118.7237,80);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FF0000").s().p("AgrBMQgMgHgEgMQgFgMAAgPIAAhwIAaAAIAABmQgBAMADAJQACAJAHAFQAHAEANABQAJAAAJgCQAJgDAIgGQAHgIAFgOIAAhtIAZAAIAAChIgVAAIgEgXQgFALgIAFQgIAGgKACQgJACgKABQgVgBgMgGg");
	this.shape_191.setTransform(92.675,77.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_192.setTransform(74.25,77.15);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgEAFgIQAGgIAEgNIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_193.setTransform(57.1,80.15);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_194.setTransform(32.2,77.15);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_195.setTransform(12.775,74.8488);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_196.setTransform(490.975,27.2727);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAJgDAGgJQAGgIAEgOIhBigIAcAAIAxCFIABAAIAviFIAaAAIg6CcQgHAUgJAPQgIAOgOAIQgPAIgXAAg");
	this.shape_197.setTransform(476.3,32.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_198.setTransform(458.575,29.625);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_199.setTransform(439.875,27.2988);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAPADIARADIAPABQASgBAKgFQAJgGAAgOQAAgJgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgEQgKgHgEgIQgEgJABgOQAAgTAOgMQAPgMAbAAQAMAAAMABQALABAHADIgDAWQgGgDgLgCQgKgBgLAAQgQgBgJAFQgIAGgBANQABAIACAFQACAEAIADQAGADAMACQASAFAMAFQAKAFAGAJQAEAKAAAQQAAAXgPAMQgRALgdAAIgQgBg");
	this.shape_200.setTransform(414.25,29.55);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FF0000").s().p("AgUAmIAIgZQAEgNACgNQACgNABgLIAYAAQAAAKgEAOQgDANgFANQgFAOgFALg");
	this.shape_201.setTransform(403,18.75);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_202.setTransform(389.7023,29.45);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_203.setTransform(371.725,29.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_204.setTransform(358.425,29.45);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_205.setTransform(341.7231,26.45);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC8QAAALADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_206.setTransform(329.425,26.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDAAgKQAAgKADgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_207.setTransform(320.05,26.575);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_208.setTransform(306.7523,26.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FF0000").s().p("AgQBnQgRgFgNgMQgMgLgHgVQgHgVAAghQAAgnAMgXQAMgYAWgKQAWgKAdAAQAOAAALACQALABAJADIAAAZIgUgFQgLgCgNAAQgYAAgPAHQgPAIgIASQgHATAAAeQAAAgAHATQAHASAPAHQAOAHAXAAQAOAAAMgCQAMgCAMgEIAAAXQgJAEgNADQgNACgQAAQgVAAgRgEg");
	this.shape_209.setTransform(288.925,27.2988);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_210.setTransform(262.5523,29.45);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQARgIAWAAQAYAAARAIQAQAHAJATQAJASAAAfQAAAggJASQgJATgQAIQgRAHgYAAQgWAAgRgHgAAdA5QAKgGAFgOQADgNAAgYQABgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgFANABAXQAAAYAEANQAFAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_211.setTransform(243.95,29.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAFgNAAgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_212.setTransform(217.7,29.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_213.setTransform(198.4731,26.45);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgLAAgRIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_214.setTransform(172.425,29.75);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_215.setTransform(154,29.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAJgDAGgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_216.setTransform(136.85,32.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAFgNAAgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_217.setTransform(111.95,29.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_218.setTransform(92.7231,26.45);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_219.setTransform(70.85,27.775);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_220.setTransform(56.025,29.625);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_221.setTransform(38.2523,26.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_222.setTransform(15.475,27.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.shape_221,this.shape_222];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},984).wait(153));

	// 图层_9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_810 = new cjs.Graphics().p("AhKcZIAAn0ICVAAIAAH0g");
	var mask_1_graphics_811 = new cjs.Graphics().p("AhaD6IAAnzIC1AAIAAHzg");
	var mask_1_graphics_812 = new cjs.Graphics().p("AhrD6IAAnzIDXAAIAAHzg");
	var mask_1_graphics_813 = new cjs.Graphics().p("Ah7D6IAAnzID3AAIAAHzg");
	var mask_1_graphics_814 = new cjs.Graphics().p("AiMD6IAAnzIEZAAIAAHzg");
	var mask_1_graphics_815 = new cjs.Graphics().p("AicD6IAAnzIE5AAIAAHzg");
	var mask_1_graphics_816 = new cjs.Graphics().p("AisD6IAAnzIFZAAIAAHzg");
	var mask_1_graphics_817 = new cjs.Graphics().p("Ai9D6IAAnzIF6AAIAAHzg");
	var mask_1_graphics_818 = new cjs.Graphics().p("AjND6IAAnzIGbAAIAAHzg");
	var mask_1_graphics_819 = new cjs.Graphics().p("AjdD6IAAnzIG7AAIAAHzg");
	var mask_1_graphics_820 = new cjs.Graphics().p("AjuD6IAAnzIHcAAIAAHzg");
	var mask_1_graphics_821 = new cjs.Graphics().p("Aj+D6IAAnzIH9AAIAAHzg");
	var mask_1_graphics_822 = new cjs.Graphics().p("AkOD6IAAnzIIdAAIAAHzg");
	var mask_1_graphics_823 = new cjs.Graphics().p("AkfD6IAAnzII+AAIAAHzg");
	var mask_1_graphics_824 = new cjs.Graphics().p("AkvD6IAAnzIJfAAIAAHzg");
	var mask_1_graphics_825 = new cjs.Graphics().p("Ak/D6IAAnzIJ/AAIAAHzg");
	var mask_1_graphics_826 = new cjs.Graphics().p("AlQD6IAAnzIKgAAIAAHzg");
	var mask_1_graphics_827 = new cjs.Graphics().p("AlgD6IAAnzILBAAIAAHzg");
	var mask_1_graphics_828 = new cjs.Graphics().p("AlwD6IAAnzILhAAIAAHzg");
	var mask_1_graphics_829 = new cjs.Graphics().p("AmBD6IAAnzIMCAAIAAHzg");
	var mask_1_graphics_830 = new cjs.Graphics().p("AmRD6IAAnzIMjAAIAAHzg");
	var mask_1_graphics_831 = new cjs.Graphics().p("AmhD6IAAnzINDAAIAAHzg");
	var mask_1_graphics_832 = new cjs.Graphics().p("AmyD6IAAnzINlAAIAAHzg");
	var mask_1_graphics_833 = new cjs.Graphics().p("AnCD6IAAnzIOFAAIAAHzg");
	var mask_1_graphics_834 = new cjs.Graphics().p("AnSD6IAAnzIOlAAIAAHzg");
	var mask_1_graphics_835 = new cjs.Graphics().p("AnjD6IAAnzIPHAAIAAHzg");
	var mask_1_graphics_836 = new cjs.Graphics().p("AnzD6IAAnzIPnAAIAAHzg");
	var mask_1_graphics_837 = new cjs.Graphics().p("AoDD6IAAnzIQHAAIAAHzg");
	var mask_1_graphics_838 = new cjs.Graphics().p("AoUD6IAAnzIQpAAIAAHzg");
	var mask_1_graphics_839 = new cjs.Graphics().p("AokD6IAAnzIRJAAIAAHzg");
	var mask_1_graphics_840 = new cjs.Graphics().p("Ao0D6IAAnzIRpAAIAAHzg");
	var mask_1_graphics_841 = new cjs.Graphics().p("ApFD6IAAnzISLAAIAAHzg");
	var mask_1_graphics_842 = new cjs.Graphics().p("ApVD6IAAnzISrAAIAAHzg");
	var mask_1_graphics_843 = new cjs.Graphics().p("AplD6IAAnzITLAAIAAHzg");
	var mask_1_graphics_844 = new cjs.Graphics().p("Ap2D6IAAnzITtAAIAAHzg");
	var mask_1_graphics_845 = new cjs.Graphics().p("AqGD6IAAnzIUNAAIAAHzg");
	var mask_1_graphics_846 = new cjs.Graphics().p("AqWD6IAAnzIUtAAIAAHzg");
	var mask_1_graphics_847 = new cjs.Graphics().p("AqnD6IAAnzIVPAAIAAHzg");
	var mask_1_graphics_848 = new cjs.Graphics().p("Aq3D6IAAnzIVvAAIAAHzg");
	var mask_1_graphics_849 = new cjs.Graphics().p("ArID6IAAnzIWRAAIAAHzg");
	var mask_1_graphics_850 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_851 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_852 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_853 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_854 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_855 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_856 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_857 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_858 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_859 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_860 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_861 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_862 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_863 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_864 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_865 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_866 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_867 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_868 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_869 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_870 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_871 = new cjs.Graphics().p("ArYD6IAAnzIWxAAIAAHzg");
	var mask_1_graphics_872 = new cjs.Graphics().p("AryD6IAAnzIXlAAIAAHzg");
	var mask_1_graphics_873 = new cjs.Graphics().p("AsMD6IAAnzIYZAAIAAHzg");
	var mask_1_graphics_874 = new cjs.Graphics().p("AsmD6IAAnzIZNAAIAAHzg");
	var mask_1_graphics_875 = new cjs.Graphics().p("AtAD6IAAnzIaBAAIAAHzg");
	var mask_1_graphics_876 = new cjs.Graphics().p("AtbD6IAAnzIa2AAIAAHzg");
	var mask_1_graphics_877 = new cjs.Graphics().p("At1D6IAAnzIbqAAIAAHzg");
	var mask_1_graphics_878 = new cjs.Graphics().p("AuPD6IAAnzIcfAAIAAHzg");
	var mask_1_graphics_879 = new cjs.Graphics().p("AupD6IAAnzIdTAAIAAHzg");
	var mask_1_graphics_880 = new cjs.Graphics().p("AvDD6IAAnzIeHAAIAAHzg");
	var mask_1_graphics_881 = new cjs.Graphics().p("AvdD6IAAnzIe7AAIAAHzg");
	var mask_1_graphics_882 = new cjs.Graphics().p("Av3D6IAAnzIfvAAIAAHzg");
	var mask_1_graphics_883 = new cjs.Graphics().p("AwRD6IAAnzMAgjAAAIAAHzg");
	var mask_1_graphics_884 = new cjs.Graphics().p("AwsD6IAAnzMAhZAAAIAAHzg");
	var mask_1_graphics_885 = new cjs.Graphics().p("AxGD6IAAnzMAiNAAAIAAHzg");
	var mask_1_graphics_886 = new cjs.Graphics().p("AxgD6IAAnzMAjBAAAIAAHzg");
	var mask_1_graphics_887 = new cjs.Graphics().p("Ax6D6IAAnzMAj1AAAIAAHzg");
	var mask_1_graphics_888 = new cjs.Graphics().p("AyUD6IAAnzMAkpAAAIAAHzg");
	var mask_1_graphics_889 = new cjs.Graphics().p("AyuD6IAAnzMAldAAAIAAHzg");
	var mask_1_graphics_890 = new cjs.Graphics().p("AzID6IAAnzMAmRAAAIAAHzg");
	var mask_1_graphics_891 = new cjs.Graphics().p("AzjD6IAAnzMAnGAAAIAAHzg");
	var mask_1_graphics_892 = new cjs.Graphics().p("Az9D6IAAnzMAn6AAAIAAHzg");
	var mask_1_graphics_893 = new cjs.Graphics().p("A0XD6IAAnzMAovAAAIAAHzg");
	var mask_1_graphics_894 = new cjs.Graphics().p("A0xD6IAAnzMApjAAAIAAHzg");
	var mask_1_graphics_895 = new cjs.Graphics().p("A1LD6IAAnzMAqXAAAIAAHzg");
	var mask_1_graphics_896 = new cjs.Graphics().p("A1lD6IAAnzMArLAAAIAAHzg");
	var mask_1_graphics_897 = new cjs.Graphics().p("A1/D6IAAnzMAr/AAAIAAHzg");
	var mask_1_graphics_898 = new cjs.Graphics().p("A2aD6IAAnzMAs0AAAIAAHzg");
	var mask_1_graphics_899 = new cjs.Graphics().p("A20D6IAAnzMAtpAAAIAAHzg");
	var mask_1_graphics_900 = new cjs.Graphics().p("A3OD6IAAnzMAudAAAIAAHzg");
	var mask_1_graphics_901 = new cjs.Graphics().p("A3oD6IAAnzMAvRAAAIAAHzg");
	var mask_1_graphics_902 = new cjs.Graphics().p("A4CD6IAAnzMAwFAAAIAAHzg");
	var mask_1_graphics_903 = new cjs.Graphics().p("A4cD6IAAnzMAw5AAAIAAHzg");
	var mask_1_graphics_904 = new cjs.Graphics().p("A42D6IAAnzMAxtAAAIAAHzg");
	var mask_1_graphics_905 = new cjs.Graphics().p("A5QD6IAAnzMAyhAAAIAAHzg");
	var mask_1_graphics_906 = new cjs.Graphics().p("A5rD6IAAnzMAzXAAAIAAHzg");
	var mask_1_graphics_907 = new cjs.Graphics().p("A6FD6IAAnzMA0KAAAIAAHzg");
	var mask_1_graphics_908 = new cjs.Graphics().p("A6fD6IAAnzMA0/AAAIAAHzg");
	var mask_1_graphics_909 = new cjs.Graphics().p("A6fD6IAAnzMA0/AAAIAAHzg");
	var mask_1_graphics_910 = new cjs.Graphics().p("A6fD6IAAnzMA0/AAAIAAHzg");
	var mask_1_graphics_911 = new cjs.Graphics().p("A6fD6IAAnzMA0/AAAIAAHzg");
	var mask_1_graphics_912 = new cjs.Graphics().p("A6fD6IAAnzMA0/AAAIAAHzg");
	var mask_1_graphics_913 = new cjs.Graphics().p("A6fD6IAAnzMA0/AAAIAAHzg");
	var mask_1_graphics_914 = new cjs.Graphics().p("A6fD6IAAnzMA0/AAAIAAHzg");
	var mask_1_graphics_915 = new cjs.Graphics().p("A6fD6IAAnzMA0/AAAIAAHzg");
	var mask_1_graphics_916 = new cjs.Graphics().p("A6fD6IAAnzMA0/AAAIAAHzg");
	var mask_1_graphics_917 = new cjs.Graphics().p("A6fD6IAAnzMA0/AAAIAAHzg");
	var mask_1_graphics_918 = new cjs.Graphics().p("A6fD6IAAnzMA0/AAAIAAHzg");
	var mask_1_graphics_919 = new cjs.Graphics().p("A6fD6IAAnzMA0/AAAIAAHzg");
	var mask_1_graphics_920 = new cjs.Graphics().p("A66D6IAAnzMA11AAAIAAHzg");
	var mask_1_graphics_921 = new cjs.Graphics().p("A7VD6IAAnzMA2rAAAIAAHzg");
	var mask_1_graphics_922 = new cjs.Graphics().p("A7wD6IAAnzMA3hAAAIAAHzg");
	var mask_1_graphics_923 = new cjs.Graphics().p("A8LD6IAAnzMA4XAAAIAAHzg");
	var mask_1_graphics_924 = new cjs.Graphics().p("A8mD6IAAnzMA5NAAAIAAHzg");
	var mask_1_graphics_925 = new cjs.Graphics().p("A9BD6IAAnzMA6DAAAIAAHzg");
	var mask_1_graphics_926 = new cjs.Graphics().p("A9cD6IAAnzMA65AAAIAAHzg");
	var mask_1_graphics_927 = new cjs.Graphics().p("A93D6IAAnzMA7vAAAIAAHzg");
	var mask_1_graphics_928 = new cjs.Graphics().p("A+SD6IAAnzMA8lAAAIAAHzg");
	var mask_1_graphics_929 = new cjs.Graphics().p("A+tD6IAAnzMA9bAAAIAAHzg");
	var mask_1_graphics_930 = new cjs.Graphics().p("A/ID6IAAnzMA+RAAAIAAHzg");
	var mask_1_graphics_931 = new cjs.Graphics().p("A/jD6IAAnzMA/HAAAIAAHzg");
	var mask_1_graphics_932 = new cjs.Graphics().p("A/+D6IAAnzMA/9AAAIAAHzg");
	var mask_1_graphics_933 = new cjs.Graphics().p("EggZAD6IAAnzMBAzAAAIAAHzg");
	var mask_1_graphics_934 = new cjs.Graphics().p("Egg0AD6IAAnzMBBpAAAIAAHzg");
	var mask_1_graphics_935 = new cjs.Graphics().p("EghPAD6IAAnzMBCfAAAIAAHzg");
	var mask_1_graphics_936 = new cjs.Graphics().p("EghqAD6IAAnzMBDVAAAIAAHzg");
	var mask_1_graphics_937 = new cjs.Graphics().p("EgiFAD6IAAnzMBELAAAIAAHzg");
	var mask_1_graphics_938 = new cjs.Graphics().p("EgigAD6IAAnzMBFBAAAIAAHzg");
	var mask_1_graphics_939 = new cjs.Graphics().p("Egi7AD6IAAnzMBF3AAAIAAHzg");
	var mask_1_graphics_940 = new cjs.Graphics().p("EgjWAD6IAAnzMBGtAAAIAAHzg");
	var mask_1_graphics_941 = new cjs.Graphics().p("EgjxAD6IAAnzMBHjAAAIAAHzg");
	var mask_1_graphics_942 = new cjs.Graphics().p("EgkMAD6IAAnzMBIZAAAIAAHzg");
	var mask_1_graphics_943 = new cjs.Graphics().p("EgknAD6IAAnzMBJPAAAIAAHzg");
	var mask_1_graphics_944 = new cjs.Graphics().p("EglCAD6IAAnzMBKFAAAIAAHzg");
	var mask_1_graphics_945 = new cjs.Graphics().p("EgldAD6IAAnzMBK7AAAIAAHzg");
	var mask_1_graphics_946 = new cjs.Graphics().p("Egl4AD6IAAnzMBLxAAAIAAHzg");
	var mask_1_graphics_947 = new cjs.Graphics().p("EgmTAD6IAAnzMBMnAAAIAAHzg");
	var mask_1_graphics_948 = new cjs.Graphics().p("EgmuAD6IAAnzMBNdAAAIAAHzg");
	var mask_1_graphics_949 = new cjs.Graphics().p("EgnJAD6IAAnzMBOTAAAIAAHzg");
	var mask_1_graphics_950 = new cjs.Graphics().p("EgnkAD6IAAnzMBPJAAAIAAHzg");
	var mask_1_graphics_951 = new cjs.Graphics().p("Egn/AD6IAAnzMBP/AAAIAAHzg");
	var mask_1_graphics_952 = new cjs.Graphics().p("EgoaAD6IAAnzMBQ1AAAIAAHzg");
	var mask_1_graphics_953 = new cjs.Graphics().p("Ego1AD6IAAnzMBRrAAAIAAHzg");
	var mask_1_graphics_954 = new cjs.Graphics().p("EgpQAD6IAAnzMBShAAAIAAHzg");
	var mask_1_graphics_955 = new cjs.Graphics().p("EgprAD6IAAnzMBTXAAAIAAHzg");
	var mask_1_graphics_956 = new cjs.Graphics().p("EgqGAD6IAAnzMBUNAAAIAAHzg");
	var mask_1_graphics_957 = new cjs.Graphics().p("EgqhAD6IAAnzMBVDAAAIAAHzg");
	var mask_1_graphics_958 = new cjs.Graphics().p("Egq8AD6IAAnzMBV5AAAIAAHzg");
	var mask_1_graphics_959 = new cjs.Graphics().p("EgrXAD6IAAnzMBWvAAAIAAHzg");
	var mask_1_graphics_960 = new cjs.Graphics().p("EgryAD6IAAnzMBXlAAAIAAHzg");
	var mask_1_graphics_961 = new cjs.Graphics().p("EgsNAD6IAAnzMBYbAAAIAAHzg");
	var mask_1_graphics_962 = new cjs.Graphics().p("EgsoAD6IAAnzMBZRAAAIAAHzg");
	var mask_1_graphics_963 = new cjs.Graphics().p("EgtDAD6IAAnzMBaHAAAIAAHzg");
	var mask_1_graphics_964 = new cjs.Graphics().p("EgteAD6IAAnzMBa9AAAIAAHzg");
	var mask_1_graphics_965 = new cjs.Graphics().p("Egt5AD6IAAnzMBbzAAAIAAHzg");
	var mask_1_graphics_966 = new cjs.Graphics().p("EguUAcUIAAn0MBcpAAAIAAH0g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(810).to({graphics:mask_1_graphics_810,x:-7.5,y:181.6755}).wait(1).to({graphics:mask_1_graphics_811,x:-5.875,y:338.35}).wait(1).to({graphics:mask_1_graphics_812,x:-4.225,y:338.35}).wait(1).to({graphics:mask_1_graphics_813,x:-2.6,y:338.35}).wait(1).to({graphics:mask_1_graphics_814,x:-0.95,y:338.3}).wait(1).to({graphics:mask_1_graphics_815,x:0.675,y:338.3}).wait(1).to({graphics:mask_1_graphics_816,x:2.3,y:338.3}).wait(1).to({graphics:mask_1_graphics_817,x:3.95,y:338.3}).wait(1).to({graphics:mask_1_graphics_818,x:5.575,y:338.3}).wait(1).to({graphics:mask_1_graphics_819,x:7.2,y:338.3}).wait(1).to({graphics:mask_1_graphics_820,x:8.85,y:338.3}).wait(1).to({graphics:mask_1_graphics_821,x:10.475,y:338.3}).wait(1).to({graphics:mask_1_graphics_822,x:12.125,y:338.25}).wait(1).to({graphics:mask_1_graphics_823,x:13.75,y:338.25}).wait(1).to({graphics:mask_1_graphics_824,x:15.375,y:338.25}).wait(1).to({graphics:mask_1_graphics_825,x:17.025,y:338.25}).wait(1).to({graphics:mask_1_graphics_826,x:18.65,y:338.25}).wait(1).to({graphics:mask_1_graphics_827,x:20.275,y:338.25}).wait(1).to({graphics:mask_1_graphics_828,x:21.925,y:338.25}).wait(1).to({graphics:mask_1_graphics_829,x:23.55,y:338.25}).wait(1).to({graphics:mask_1_graphics_830,x:25.2,y:338.25}).wait(1).to({graphics:mask_1_graphics_831,x:26.825,y:338.2}).wait(1).to({graphics:mask_1_graphics_832,x:28.45,y:338.2}).wait(1).to({graphics:mask_1_graphics_833,x:30.1,y:338.2}).wait(1).to({graphics:mask_1_graphics_834,x:31.725,y:338.2}).wait(1).to({graphics:mask_1_graphics_835,x:33.35,y:338.2}).wait(1).to({graphics:mask_1_graphics_836,x:35,y:338.2}).wait(1).to({graphics:mask_1_graphics_837,x:36.625,y:338.2}).wait(1).to({graphics:mask_1_graphics_838,x:38.25,y:338.2}).wait(1).to({graphics:mask_1_graphics_839,x:39.9,y:338.15}).wait(1).to({graphics:mask_1_graphics_840,x:41.525,y:338.15}).wait(1).to({graphics:mask_1_graphics_841,x:43.175,y:338.15}).wait(1).to({graphics:mask_1_graphics_842,x:44.8,y:338.15}).wait(1).to({graphics:mask_1_graphics_843,x:46.425,y:338.15}).wait(1).to({graphics:mask_1_graphics_844,x:48.075,y:338.15}).wait(1).to({graphics:mask_1_graphics_845,x:49.7,y:338.15}).wait(1).to({graphics:mask_1_graphics_846,x:51.325,y:338.15}).wait(1).to({graphics:mask_1_graphics_847,x:52.975,y:338.1}).wait(1).to({graphics:mask_1_graphics_848,x:54.6,y:338.1}).wait(1).to({graphics:mask_1_graphics_849,x:56.25,y:338.1}).wait(1).to({graphics:mask_1_graphics_850,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_851,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_852,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_853,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_854,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_855,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_856,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_857,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_858,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_859,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_860,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_861,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_862,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_863,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_864,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_865,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_866,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_867,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_868,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_869,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_870,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_871,x:57.875,y:338.1}).wait(1).to({graphics:mask_1_graphics_872,x:60.5,y:338.1}).wait(1).to({graphics:mask_1_graphics_873,x:63.1,y:338.1}).wait(1).to({graphics:mask_1_graphics_874,x:65.725,y:338.1}).wait(1).to({graphics:mask_1_graphics_875,x:68.325,y:338.05}).wait(1).to({graphics:mask_1_graphics_876,x:70.95,y:338.05}).wait(1).to({graphics:mask_1_graphics_877,x:73.55,y:338.05}).wait(1).to({graphics:mask_1_graphics_878,x:76.175,y:338.05}).wait(1).to({graphics:mask_1_graphics_879,x:78.775,y:338.05}).wait(1).to({graphics:mask_1_graphics_880,x:81.4,y:338.05}).wait(1).to({graphics:mask_1_graphics_881,x:84,y:338}).wait(1).to({graphics:mask_1_graphics_882,x:86.625,y:338}).wait(1).to({graphics:mask_1_graphics_883,x:89.225,y:338}).wait(1).to({graphics:mask_1_graphics_884,x:91.85,y:338}).wait(1).to({graphics:mask_1_graphics_885,x:94.475,y:338}).wait(1).to({graphics:mask_1_graphics_886,x:97.075,y:338}).wait(1).to({graphics:mask_1_graphics_887,x:99.7,y:337.95}).wait(1).to({graphics:mask_1_graphics_888,x:102.3,y:337.95}).wait(1).to({graphics:mask_1_graphics_889,x:104.925,y:337.95}).wait(1).to({graphics:mask_1_graphics_890,x:107.525,y:337.95}).wait(1).to({graphics:mask_1_graphics_891,x:110.15,y:337.95}).wait(1).to({graphics:mask_1_graphics_892,x:112.75,y:337.95}).wait(1).to({graphics:mask_1_graphics_893,x:115.375,y:337.9}).wait(1).to({graphics:mask_1_graphics_894,x:117.975,y:337.9}).wait(1).to({graphics:mask_1_graphics_895,x:120.6,y:337.9}).wait(1).to({graphics:mask_1_graphics_896,x:123.225,y:337.9}).wait(1).to({graphics:mask_1_graphics_897,x:125.825,y:337.9}).wait(1).to({graphics:mask_1_graphics_898,x:128.45,y:337.9}).wait(1).to({graphics:mask_1_graphics_899,x:131.05,y:337.85}).wait(1).to({graphics:mask_1_graphics_900,x:133.675,y:337.85}).wait(1).to({graphics:mask_1_graphics_901,x:136.275,y:337.85}).wait(1).to({graphics:mask_1_graphics_902,x:138.9,y:337.85}).wait(1).to({graphics:mask_1_graphics_903,x:141.5,y:337.85}).wait(1).to({graphics:mask_1_graphics_904,x:144.125,y:337.85}).wait(1).to({graphics:mask_1_graphics_905,x:146.725,y:337.8}).wait(1).to({graphics:mask_1_graphics_906,x:149.35,y:337.8}).wait(1).to({graphics:mask_1_graphics_907,x:151.95,y:337.8}).wait(1).to({graphics:mask_1_graphics_908,x:154.575,y:337.8}).wait(1).to({graphics:mask_1_graphics_909,x:154.575,y:337.8}).wait(1).to({graphics:mask_1_graphics_910,x:154.575,y:337.8}).wait(1).to({graphics:mask_1_graphics_911,x:154.575,y:337.8}).wait(1).to({graphics:mask_1_graphics_912,x:154.575,y:337.8}).wait(1).to({graphics:mask_1_graphics_913,x:154.575,y:337.8}).wait(1).to({graphics:mask_1_graphics_914,x:154.575,y:337.8}).wait(1).to({graphics:mask_1_graphics_915,x:154.575,y:337.8}).wait(1).to({graphics:mask_1_graphics_916,x:154.575,y:337.8}).wait(1).to({graphics:mask_1_graphics_917,x:154.575,y:337.8}).wait(1).to({graphics:mask_1_graphics_918,x:154.575,y:337.8}).wait(1).to({graphics:mask_1_graphics_919,x:154.575,y:337.8}).wait(1).to({graphics:mask_1_graphics_920,x:157.275,y:337.8}).wait(1).to({graphics:mask_1_graphics_921,x:159.975,y:337.8}).wait(1).to({graphics:mask_1_graphics_922,x:162.675,y:337.75}).wait(1).to({graphics:mask_1_graphics_923,x:165.375,y:337.75}).wait(1).to({graphics:mask_1_graphics_924,x:168.075,y:337.75}).wait(1).to({graphics:mask_1_graphics_925,x:170.775,y:337.75}).wait(1).to({graphics:mask_1_graphics_926,x:173.475,y:337.75}).wait(1).to({graphics:mask_1_graphics_927,x:176.175,y:337.7}).wait(1).to({graphics:mask_1_graphics_928,x:178.875,y:337.7}).wait(1).to({graphics:mask_1_graphics_929,x:181.575,y:337.7}).wait(1).to({graphics:mask_1_graphics_930,x:184.275,y:337.7}).wait(1).to({graphics:mask_1_graphics_931,x:186.975,y:337.7}).wait(1).to({graphics:mask_1_graphics_932,x:189.675,y:337.7}).wait(1).to({graphics:mask_1_graphics_933,x:192.375,y:337.65}).wait(1).to({graphics:mask_1_graphics_934,x:195.075,y:337.65}).wait(1).to({graphics:mask_1_graphics_935,x:197.775,y:337.65}).wait(1).to({graphics:mask_1_graphics_936,x:200.475,y:337.65}).wait(1).to({graphics:mask_1_graphics_937,x:203.175,y:337.65}).wait(1).to({graphics:mask_1_graphics_938,x:205.875,y:337.6}).wait(1).to({graphics:mask_1_graphics_939,x:208.575,y:337.6}).wait(1).to({graphics:mask_1_graphics_940,x:211.275,y:337.6}).wait(1).to({graphics:mask_1_graphics_941,x:213.975,y:337.6}).wait(1).to({graphics:mask_1_graphics_942,x:216.675,y:337.6}).wait(1).to({graphics:mask_1_graphics_943,x:219.375,y:337.55}).wait(1).to({graphics:mask_1_graphics_944,x:222.075,y:337.55}).wait(1).to({graphics:mask_1_graphics_945,x:224.775,y:337.55}).wait(1).to({graphics:mask_1_graphics_946,x:227.475,y:337.55}).wait(1).to({graphics:mask_1_graphics_947,x:230.175,y:337.55}).wait(1).to({graphics:mask_1_graphics_948,x:232.875,y:337.5}).wait(1).to({graphics:mask_1_graphics_949,x:235.575,y:337.5}).wait(1).to({graphics:mask_1_graphics_950,x:238.275,y:337.5}).wait(1).to({graphics:mask_1_graphics_951,x:240.975,y:337.5}).wait(1).to({graphics:mask_1_graphics_952,x:243.675,y:337.5}).wait(1).to({graphics:mask_1_graphics_953,x:246.375,y:337.45}).wait(1).to({graphics:mask_1_graphics_954,x:249.075,y:337.45}).wait(1).to({graphics:mask_1_graphics_955,x:251.775,y:337.45}).wait(1).to({graphics:mask_1_graphics_956,x:254.475,y:337.45}).wait(1).to({graphics:mask_1_graphics_957,x:257.175,y:337.45}).wait(1).to({graphics:mask_1_graphics_958,x:259.875,y:337.45}).wait(1).to({graphics:mask_1_graphics_959,x:262.575,y:337.4}).wait(1).to({graphics:mask_1_graphics_960,x:265.275,y:337.4}).wait(1).to({graphics:mask_1_graphics_961,x:267.975,y:337.4}).wait(1).to({graphics:mask_1_graphics_962,x:270.675,y:337.4}).wait(1).to({graphics:mask_1_graphics_963,x:273.375,y:337.4}).wait(1).to({graphics:mask_1_graphics_964,x:276.075,y:337.35}).wait(1).to({graphics:mask_1_graphics_965,x:278.775,y:337.35}).wait(1).to({graphics:mask_1_graphics_966,x:281.4715,y:181.1755}).wait(171));

	// 图层_33
	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_223.setTransform(391.075,386.5227);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_224.setTransform(379.2,387.025);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_225.setTransform(364.375,388.875);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_226.setTransform(346.6023,385.55);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_227.setTransform(332.2,387.025);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAAQIBVgGQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_228.setTransform(310.825,388.85);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FF0000").s().p("AAfByIg7hLIgJAAIAABLIgaAAIAAjjIAaAAIAACDIAKAAIA3hBIAgAAIhDBKIBHBXg");
	this.shape_229.setTransform(295.65,385.55);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FF0000").s().p("AgNBvIAAihIAaAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_230.setTransform(282.6,385.825);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FF0000").s().p("AgQBqQgKgHAAgTIAAjCIAaAAIAAC8QAAAMADADQADAFAIgBIAGAAIAHgBIAAAVIgIABIgJABQgRAAgJgJg");
	this.shape_231.setTransform(275.325,385.65);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_232.setTransform(257.15,387.025);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_233.setTransform(242.325,388.875);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_234.setTransform(224.5523,385.55);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_235.setTransform(197.725,388.875);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgYAAIAAgWIAYAAIAAgmIAZAAIAAAmIAoAAIAAAWIgoAAIAABYQAAANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_236.setTransform(176.4,387.025);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKABQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_237.setTransform(162.1523,388.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_238.setTransform(143.025,388.875);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_239.setTransform(122.075,388.85);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_240.setTransform(92.675,389);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAJgSAQgHQARgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgKAFgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_241.setTransform(74.25,388.85);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAKgFAFgIQAGgJAEgNIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_242.setTransform(57.1,391.85);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_243.setTransform(32.2,388.85);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_244.setTransform(12.775,386.5488);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_245.setTransform(564.025,347.6969);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_246.setTransform(550.2523,338);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FF0000").s().p("AgXBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAOAAAKACQALABAHADIAAAYIgTgGQgKgBgNAAQgQAAgLAFQgKAFgEAOQgFANAAAYQgBAWAGAOQAEANAKAGQALAGARgBQAMAAALgCQAKgBAJgDIAAAXIgLADIgQACIgQABQgXAAgQgIg");
	this.shape_247.setTransform(533.7,341.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FF0000").s().p("AgrBMQgMgHgEgMQgFgMAAgPIAAhwIAaAAIAABmQgBAMADAKQACAIAHAFQAHAEANAAQAJABAJgCQAJgDAIgGQAHgIAFgOIAAhtIAZAAIAAChIgVAAIgEgXQgFALgIAFQgIAGgKACQgJACgKABQgVgBgMgGg");
	this.shape_248.setTransform(516.775,341.45);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FF0000").s().p("ABWBSIAAhlQAAgTgGgKQgHgLgSAAQgKAAgIADQgIACgGAHQgHAFgDAMIAAACIAABuIgZAAIAAhlQAAgTgGgKQgGgLgSAAQgKAAgIADQgIACgGAHQgHAFgEANIAABvIgaAAIAAihIAaAAIAAAWQAIgOAMgGQAMgEAPAAQATgBAMAIQAKAGAFANQAFgKAIgHQAIgFAKgDQAKgBAKAAQASgBAMAIQAMAGAFAMQAGAMAAAQIAABug");
	this.shape_249.setTransform(493.875,341.15);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_250.setTransform(463,341.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FF0000").s().p("AgYBSIgRgBIgMgDIAAgWIANADIARACIARABQARAAAJgFQAKgFAAgPQAAgJgCgFQgDgGgIgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJAAgNQAAgVAPgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgHgDgKgCQgLgCgLAAQgQAAgIAGQgJAEAAAOQAAAIACAEQADAFAGADQAHADALADQATADALAHQAMAEAEAJQAGAKAAAPQgBAZgQALQgPAMgdgBIgSgBg");
	this.shape_251.setTransform(446.6,341.25);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgYAAIAAgWIAYAAIAAgmIAZAAIAAAmIAoAAIAAAWIgoAAIAABYQAAANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_252.setTransform(426.6,339.475);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FF0000").s().p("AgNBvIAAihIAaAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_253.setTransform(417.6,338.275);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_254.setTransform(397.175,341.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FF0000").s().p("AgOBRIg9ihIAaAAIAxCHIABAAIAwiHIAbAAIg9Chg");
	this.shape_255.setTransform(380.6,341.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgFANABAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_256.setTransform(363.4,341.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FF0000").s().p("AgQBqQgKgIAAgSIAAjCIAaAAIAAC7QAAANADADQADAEAIAAIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgJg");
	this.shape_257.setTransform(350.925,338.1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_258.setTransform(333.75,339);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_259.setTransform(317.425,347.6969);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgEAFgIQAGgIAEgNIhBihIAcAAIAxCGIABAAIAviGIAaAAIg6CbQgIAVgIAPQgIAOgOAIQgPAIgXAAg");
	this.shape_260.setTransform(305,344.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgYAAIAAgWIAYAAIAAgmIAYAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAIgBIAAAWIgJABIgJAAQgRAAgKgEg");
	this.shape_261.setTransform(292,339.475);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_262.setTransform(281.9,339.475);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_263.setTransform(268.225,341.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAIQgIAIgEANIAABpg");
	this.shape_264.setTransform(254.925,341.15);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FF0000").s().p("AhIBxIAAjeIAaAAIAAAdQAFgOAMgIQANgKAWABQAbgBAOALQAPALAGASQAFAUAAAYQAAAXgFASQgGATgPALQgOAMgbABQgWAAgNgJQgMgJgFgOIAABZgAgbhTQgLAIgEAOQgFAOAAATQAAATAFANQAEAOALAIQALAHASAAQAUABAJgKQAJgJADgNQADgNAAgRQAAgRgDgOQgDgOgKgJQgJgIgTAAQgSAAgLAHg");
	this.shape_265.setTransform(239.125,344.15);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_266.setTransform(212.15,341.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAOADIASACIAQABQARAAAKgFQAJgFAAgPQAAgJgCgFQgEgGgHgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJABgNQAAgVAOgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgIgDgJgCQgLgCgLAAQgQAAgJAGQgIAEgBAOQAAAIADAEQACAFAIADQAGADAMADQASADALAHQAMAEAEAJQAFAKABAPQgBAZgPALQgQAMgdgBIgRgBg");
	this.shape_267.setTransform(195.75,341.25);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAOADIASACIAQABQARAAAKgFQAJgFAAgPQAAgJgCgFQgEgGgHgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJABgNQAAgVAOgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgIgDgJgCQgLgCgLAAQgQAAgJAGQgIAEgBAOQAAAIADAEQACAFAIADQAGADAMADQASADALAHQAMAEAEAJQAFAKABAPQgBAZgPALQgQAMgdgBIgRgBg");
	this.shape_268.setTransform(173.7,341.25);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FF0000").s().p("AgUAmIAIgZQAEgNACgMQACgOABgLIAYAAQAAALgEANQgDANgFAOQgFANgFALg");
	this.shape_269.setTransform(162.45,330.45);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_270.setTransform(153.3,339.475);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_271.setTransform(144.2,339);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FF0000").s().p("AgNBmQgFgEAAgMQAAgMAFgEQADgDAKAAQAKAAAFADQAEAEAAAMQAAAMgEAEQgFADgKAAQgKAAgDgDgAgJArIgEiTIAcAAIgFCTg");
	this.shape_272.setTransform(127.05,339.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_273.setTransform(112.4,341.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FF0000").s().p("AguBoQgPgKgFgTQgGgSAAgaQAAgWAGgSQAFgTAPgMQAPgLAaAAQAXAAAMAIQAMAJAFAOIAAheIAaAAIAADiIgWAAIgEgaQgFANgNAIQgNAJgVAAQgaAAgPgMgAgegVQgJAJgDAOQgCAOAAAPQAAARADAPQADAOAJAIQAJAIATAAQASAAALgHQALgIAFgNQAEgOAAgUQAAgSgEgNQgFgOgLgIQgLgIgSAAQgTABgKAIg");
	this.shape_274.setTransform(93.1731,338.15);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_275.setTransform(72.3,339);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FF0000").s().p("AgaAoQAIgNAHgOQAGgNAEgNQADgOAAgLIAYAAQAAAMgEAPQgGAOgHANQgHAOgGAKg");
	this.shape_276.setTransform(55.25,349.55);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FF0000").s().p("AgYBSIgRgBIgMgDIAAgWIANADIARACIARABQARAAAJgFQAKgFAAgPQAAgJgCgFQgDgGgIgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJAAgNQAAgVAPgMQAPgLAbAAQAMgBAMACQALACAGACIgBAWQgIgDgJgCQgLgCgLAAQgQAAgIAGQgJAEAAAOQAAAIACAEQADAFAHADQAGADALADQATADALAHQAMAEAEAJQAGAKAAAPQgBAZgQALQgPAMgdgBIgSgBg");
	this.shape_277.setTransform(44.3,341.25);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_278.setTransform(28.425,341.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FF0000").s().p("AgNBoIAAhZIhJh2IAfAAIA3BeIACAAIA3heIAeAAIhKB2IAABZg");
	this.shape_279.setTransform(10.925,339);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_280.setTransform(486.225,291.4227);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgJgEg");
	this.shape_281.setTransform(474.35,291.925);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_282.setTransform(459.525,293.775);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_283.setTransform(441.7523,290.45);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_284.setTransform(412.325,293.75);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_285.setTransform(391.225,293.75);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_286.setTransform(373.3023,293.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_287.setTransform(351.675,293.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_288.setTransform(335.675,293.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_289.setTransform(317.25,293.75);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_290.setTransform(300.1,296.75);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FF0000").s().p("AgaBvIgTgDIAAgVIAUACIAUABQAaABANgMQANgNAAgcIAAgQQgFAOgMAIQgMAJgWAAQgbAAgPgLQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPgBAKAFQALAEAGAHQAGAIADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgoAAIgUgCgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAIQAJAHATABQASAAALgHQALgIAFgNQAEgMAAgUQAAgSgEgPQgFgNgLgHQgLgIgSAAQgTAAgKAJg");
	this.shape_291.setTransform(274.4737,296.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_292.setTransform(256.1523,293.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACABAKQgBAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_293.setTransform(242.85,290.725);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_294.setTransform(234.175,293.6);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_295.setTransform(217.625,293.775);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_296.setTransform(200.425,293.75);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_297.setTransform(179.325,293.75);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_298.setTransform(150.525,293.75);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FF0000").s().p("AAfByIg7hMIgJAAIAABMIgaAAIAAjjIAaAAIAACEIAKAAIA3hCIAgAAIhDBLIBGBWg");
	this.shape_299.setTransform(135.35,290.45);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FF0000").s().p("AgMBvIAAihIAZAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_300.setTransform(122.3,290.725);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_301.setTransform(115.025,290.55);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_302.setTransform(92.675,293.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_303.setTransform(74.25,293.75);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_304.setTransform(57.1,296.75);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAEgNABgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_305.setTransform(32.2,293.75);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_306.setTransform(12.775,291.4488);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_307.setTransform(525.275,243.8727);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAKgFAFgIQAGgJAEgMIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgHAVgJAOQgIAPgOAIQgOAIgYAAg");
	this.shape_308.setTransform(510.6,249.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_309.setTransform(492.875,246.225);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_310.setTransform(474.175,243.8988);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FF0000").s().p("AgXBTIgRgCIgOgDIAAgWIAPADIARACIAQABQARABAKgGQAJgFAAgOQAAgKgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgFQgKgFgEgJQgEgJABgOQAAgUAOgLQAPgMAbgBQAMABAMABQALABAHADIgDAWQgHgDgJgBQgLgCgLAAQgQgBgJAFQgIAFgBAOQAAAIADAFQACAEAIADQAGADAMADQASAEALAFQALAFAGAKQAEAJAAAQQAAAXgPAMQgRAMgcAAIgRgBg");
	this.shape_311.setTransform(448.55,246.15);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FF0000").s().p("AgUAnIAIgaQAEgNACgMQACgOABgMIAYAAQAAALgEAOQgDANgFANQgFAOgFAMg");
	this.shape_312.setTransform(437.3,235.35);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKACQgJACgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_313.setTransform(424.0023,246.05);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_314.setTransform(406.025,246.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_315.setTransform(392.725,246.05);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_316.setTransform(376.0231,243.05);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FF0000").s().p("AgQBqQgKgHAAgTIAAjCIAaAAIAAC8QAAAMADADQADAFAIgBIAGAAIAHgBIAAAVIgIABIgJABQgRAAgJgJg");
	this.shape_317.setTransform(363.725,243);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACAAAKQAAAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_318.setTransform(354.35,243.175);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_319.setTransform(341.0523,242.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FF0000").s().p("AgQBnQgRgFgNgMQgMgLgHgVQgHgVAAghQAAgnAMgXQAMgYAWgKQAWgKAdAAQAOAAALACQALABAJADIAAAZIgUgFQgLgCgNAAQgYAAgPAHQgPAIgIASQgHATAAAeQAAAgAHATQAHASAPAHQAOAHAXAAQAOAAAMgCQAMgCAMgEIAAAXQgJAEgNADQgNACgQAAQgVAAgRgEg");
	this.shape_320.setTransform(323.225,243.8988);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKACQgJACgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_321.setTransform(296.8523,246.05);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQAQAHAJASQAJATAAAfQAAAggJATQgJASgQAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgEgOgLgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_322.setTransform(278.25,246.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_323.setTransform(256.675,246.05);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_324.setTransform(240.125,246.225);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_325.setTransform(222.925,246.2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_326.setTransform(201.825,246.2);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgPIAAhvIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_327.setTransform(172.425,246.35);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAJgSAQgHQARgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgEgOgLgFQgKgHgSAAQgRAAgKAHQgKAFgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_328.setTransform(154,246.2);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAJgFAGgIQAGgJAEgMIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_329.setTransform(136.85,249.2);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_330.setTransform(111.95,246.2);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_331.setTransform(92.7231,243.05);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_332.setTransform(70.85,244.375);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_333.setTransform(56.025,246.225);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_334.setTransform(38.2523,242.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_335.setTransform(15.475,243.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FF0000").s().p("AgNBlQgFgDAAgMQAAgMAFgDQADgFAKABQAKgBAFAFQAEADAAAMQAAAMgEADQgFAEgKAAQgKAAgDgEgAgJArIgEiTIAcAAIgFCTg");
	this.shape_336.setTransform(478.95,170.05);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FF0000").s().p("AAfByIg7hLIgJAAIAABLIgaAAIAAjjIAaAAIAACEIAKAAIA3hCIAgAAIhDBLIBHBWg");
	this.shape_337.setTransform(467.1,168.95);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_338.setTransform(453.425,172.1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_339.setTransform(436.875,172.275);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FF0000").s().p("AguBpQgPgLgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgLgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_340.setTransform(418.3731,169.1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAPADIARADIAPABQASgBAKgFQAJgGAAgOQAAgJgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgEQgKgHgEgIQgEgJABgOQAAgTAOgMQAPgMAcAAQALAAAMABQALABAHADIgDAWQgGgDgLgCQgKgBgLAAQgQgBgJAFQgIAGgBANQABAIACAFQACAEAIADQAGADAMACQASAFALAFQALAFAGAJQAEAKAAAQQAAAXgPAMQgRALgdAAIgQgBg");
	this.shape_341.setTransform(394.45,172.2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_342.setTransform(382.15,170.425);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgEIAAAYQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_343.setTransform(368.475,172.25);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FF0000").s().p("AgaBvIgTgDIAAgVIAUADIAUAAQAaABANgMQANgNAAgcIAAgQQgFAOgMAJQgMAIgWAAQgbAAgPgLQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPgBAKAFQALAEAGAHQAGAIADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgoAAIgUgCgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAIQAJAHATABQASAAALgHQALgIAFgNQAEgMAAgUQAAgSgEgPQgFgNgLgHQgLgIgSAAQgTAAgKAJg");
	this.shape_344.setTransform(349.7737,175.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_345.setTransform(327.9,170.425);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACABAKQgBAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_346.setTransform(318.9,169.225);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_347.setTransform(303.925,169.05);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FF0000").s().p("AgMBvIAAihIAZAAIAAChgAgLhSQgDgDAAgKQAAgKADgCQAEgDAHAAQAIAAAEADQAEACAAAKQAAAKgEADQgEADgIAAQgHAAgEgDg");
	this.shape_348.setTransform(294.55,169.225);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_349.setTransform(285.4,170.425);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_350.setTransform(271.1523,172.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgLAAgRIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_351.setTransform(252.575,172.4);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_352.setTransform(232.525,169.05);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_353.setTransform(223.925,169.05);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_354.setTransform(208.725,172.275);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FF0000").s().p("AgdBrQgMgJgFgOIgDAdIgXAAIAAjjIAaAAIAABeQAFgOAMgIQANgJAWAAQAbAAAOALQAPAKAGASQAFASAAAaQAAAWgFATQgGATgPAMQgOALgbAAQgWAAgNgIgAgbgWQgLAHgEAOQgFANAAAUQAAASAFAOQAEAOALAIQALAIASAAQAUgBAJgIQAJgKADgOQADgOAAgPQAAgSgDgOQgDgNgKgIQgJgJgTAAQgSAAgLAIg");
	this.shape_355.setTransform(191.125,169.1);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_356.setTransform(176.05,170.425);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQAQAHAJATQAJASAAAfQAAAggJATQgJASgQAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAFgOQADgNABgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAEANQAFAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_357.setTransform(161.75,172.25);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_358.setTransform(143.2,172.25);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FF0000").s().p("AgWBzIAAiMIgbAAIAAgVIAbAAIAAgCQAAgbAHgPQAHgOALgFQAMgFARABIAJAAIAJABIAAAVIgIgBIgKgBQgLAAgHAEQgGAEgCAKQgDAKAAATIAmAAIAAAVIgmAAIAACMg");
	this.shape_359.setTransform(129.025,168.8977);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAxCFIABAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgPAIgXAAg");
	this.shape_360.setTransform(107.9,175.25);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_361.setTransform(90.175,172.275);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_362.setTransform(78.425,169.05);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FF0000").s().p("AhIBxIAAjdIAaAAIAAAcQAFgOAMgIQANgJAWAAQAbAAAOALQAPAKAGASQAFATAAAaQAAAWgFASQgGATgPAMQgOALgbAAQgWAAgNgIQgMgJgFgOIAABZgAgbhSQgLAHgEAOQgFAOAAAUQAAASAFANQAEAOALAIQALAIASAAQAUgBAJgIQAJgKADgOQADgNAAgPQAAgSgDgOQgDgOgKgIQgJgJgTAAQgSAAgLAIg");
	this.shape_363.setTransform(63.975,175.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgEIAAAYQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_364.setTransform(37.625,172.25);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_365.setTransform(15.475,169.95);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_366.setTransform(551.725,131.0969);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_367.setTransform(537.2231,121.55);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_368.setTransform(518.325,124.725);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_369.setTransform(499.8231,121.55);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_370.setTransform(473.0731,121.55);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKABQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_371.setTransform(454.7523,124.55);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_372.setTransform(435.625,124.725);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_373.setTransform(405.625,124.55);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgPIAAhvIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_374.setTransform(382.475,124.85);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_375.setTransform(359.575,124.55);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAJgFAGgIQAGgJAEgNIhBigIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgHAVgJAOQgIAPgOAIQgPAIgXAAg");
	this.shape_376.setTransform(330.1,127.7);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_377.setTransform(308.425,124.55);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_378.setTransform(277.6023,121.4);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgYAAIAAgWIAYAAIAAgmIAYAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAJgBIAKAAIAJgBIAAAWIgJABIgKAAQgRAAgKgEg");
	this.shape_379.setTransform(263.2,122.875);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAFACAAAKQAAAKgFADQgDADgIAAQgHAAgEgDg");
	this.shape_380.setTransform(254.2,121.675);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_381.setTransform(237.725,124.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FF0000").s().p("AAeByIg5hLIgJAAIAABLIgaAAIAAjjIAaAAIAACDIAJAAIA3hBIAgAAIhDBKIBGBXg");
	this.shape_382.setTransform(211.1,121.4);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_383.setTransform(197.425,124.55);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_384.setTransform(180.875,124.725);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FF0000").s().p("AhIBwIAAjcIAaAAIAAAdQAFgPAMgJQANgIAWgBQAbABAOAKQAPALAGATQAFASAAAaQAAAWgFASQgGATgPAMQgOALgbABQgWAAgNgJQgMgIgFgPIAABYgAgbhTQgLAIgEAOQgFAOAAAUQAAASAFANQAEAOALAIQALAIASgBQAUAAAJgJQAJgIADgOQADgNAAgQQAAgSgDgOQgDgOgKgIQgJgJgTAAQgSAAgLAHg");
	this.shape_385.setTransform(163.275,127.55);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_386.setTransform(136.925,124.7);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_387.setTransform(119.0023,121.4);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_388.setTransform(104.6,122.875);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_389.setTransform(82.6,124.7);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_390.setTransform(68.25,122.875);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_391.setTransform(46.25,124.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FF0000").s().p("AgaBvIgTgCIAAgXIAUAEIAUABQAagBANgMQANgMAAgcIAAgQQgFAOgMAJQgMAHgWABQgbAAgPgLQgPgKgFgTQgGgRAAgZQAAgXAGgSQAFgTAPgLQAPgLAbgBQAPABAKAEQALAEAGAIQAGAHADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgogBIgUgBgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAHQAJAJATAAQASAAALgIQALgGAFgOQAEgNAAgTQAAgSgEgOQgFgOgLgIQgLgHgSAAQgTAAgKAJg");
	this.shape_392.setTransform(26.9737,127.55);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FF0000").s().p("AgMBoIAAjPIAaAAIAADPg");
	this.shape_393.setTransform(6.1,122.4);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_394.setTransform(467.425,74.8227);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FF0000").s().p("AAeByIg6hMIgJAAIAABMIgZAAIAAjjIAZAAIAACDIAKAAIA3hBIAgAAIhDBKIBHBXg");
	this.shape_395.setTransform(454.15,73.85);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAHQgIAJgEANIAABpg");
	this.shape_396.setTransform(440.475,77);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_397.setTransform(423.925,77.175);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FF0000").s().p("AhIBxIAAjeIAaAAIAAAdQAFgOAMgIQANgKAWABQAbgBAOALQAPALAGASQAFAUAAAYQAAAXgFASQgGATgPALQgOAMgbABQgWAAgNgJQgMgJgFgOIAABZgAgbhTQgLAIgEAOQgFAOAAATQAAATAFANQAEAOALAIQALAHASAAQAUABAJgKQAJgJADgNQADgOAAgQQAAgRgDgOQgDgOgKgJQgJgIgTAAQgSAAgLAHg");
	this.shape_398.setTransform(406.325,80);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAHQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_399.setTransform(379.975,77.15);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_400.setTransform(362.0523,73.85);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLAAgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_401.setTransform(347.65,75.325);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAHQgIAJgEANIAABpg");
	this.shape_402.setTransform(330.325,77);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_403.setTransform(314.3,77.15);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQARgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_404.setTransform(288.05,77.15);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_405.setTransform(269.5,77.15);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FF0000").s().p("Ag/BRIAAgVIBbh1IAAgCIhTAAIAAgVIByAAIAAAUIhbB1IAAABIBgAAIAAAXg");
	this.shape_406.setTransform(252.75,77.15);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAHQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_407.setTransform(228.675,77.15);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_408.setTransform(210.7523,73.85);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgFgLABgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQABAGAGADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_409.setTransform(196.35,75.325);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_410.setTransform(174.35,77.15);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLAAgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_411.setTransform(160,75.325);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_412.setTransform(138,77.15);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FF0000").s().p("AgaBwIgTgEIAAgVIAUACIAUABQAaAAANgMQANgMAAgbIAAgRQgFAPgMAHQgMAJgWgBQgbAAgPgKQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPAAAKAEQALAEAGAIQAGAHADAKIAAgfIAaAAIAACWQAAAigTATQgUASgoABIgUgBgAgehRQgJAIgDAOQgCAOAAAQQAAARADANQADANAJAJQAJAHATABQASAAALgIQALgHAFgNQAEgNAAgTQAAgTgEgOQgFgNgLgIQgLgHgSAAQgTAAgKAJg");
	this.shape_413.setTransform(118.7237,80);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FF0000").s().p("AgrBMQgMgHgEgMQgFgMAAgPIAAhwIAaAAIAABmQgBAMADAJQACAJAHAFQAHAEANABQAJAAAJgCQAJgDAIgGQAHgIAFgOIAAhtIAZAAIAAChIgVAAIgEgXQgFALgIAFQgIAGgKACQgJACgKABQgVgBgMgGg");
	this.shape_414.setTransform(92.675,77.3);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_415.setTransform(74.25,77.15);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgEAFgIQAGgIAEgNIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_416.setTransform(57.1,80.15);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_417.setTransform(32.2,77.15);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_418.setTransform(12.775,74.8488);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_419.setTransform(490.975,27.2727);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAJgDAGgJQAGgIAEgOIhBigIAcAAIAxCFIABAAIAviFIAaAAIg6CcQgHAUgJAPQgIAOgOAIQgPAIgXAAg");
	this.shape_420.setTransform(476.3,32.6);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_421.setTransform(458.575,29.625);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_422.setTransform(439.875,27.2988);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAPADIARADIAPABQASgBAKgFQAJgGAAgOQAAgJgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgEQgKgHgEgIQgEgJABgOQAAgTAOgMQAPgMAbAAQAMAAAMABQALABAHADIgDAWQgGgDgLgCQgKgBgLAAQgQgBgJAFQgIAGgBANQABAIACAFQACAEAIADQAGADAMACQASAFAMAFQAKAFAGAJQAEAKAAAQQAAAXgPAMQgRALgdAAIgQgBg");
	this.shape_423.setTransform(414.25,29.55);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FF0000").s().p("AgUAmIAIgZQAEgNACgNQACgNABgLIAYAAQAAAKgEAOQgDANgFANQgFAOgFALg");
	this.shape_424.setTransform(403,18.75);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_425.setTransform(389.7023,29.45);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_426.setTransform(371.725,29.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_427.setTransform(358.425,29.45);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_428.setTransform(341.7231,26.45);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC8QAAALADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_429.setTransform(329.425,26.4);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDAAgKQAAgKADgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_430.setTransform(320.05,26.575);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_431.setTransform(306.7523,26.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#FF0000").s().p("AgQBnQgRgFgNgMQgMgLgHgVQgHgVAAghQAAgnAMgXQAMgYAWgKQAWgKAdAAQAOAAALACQALABAJADIAAAZIgUgFQgLgCgNAAQgYAAgPAHQgPAIgIASQgHATAAAeQAAAgAHATQAHASAPAHQAOAHAXAAQAOAAAMgCQAMgCAMgEIAAAXQgJAEgNADQgNACgQAAQgVAAgRgEg");
	this.shape_432.setTransform(288.925,27.2988);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_433.setTransform(262.5523,29.45);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQARgIAWAAQAYAAARAIQAQAHAJATQAJASAAAfQAAAggJASQgJATgQAIQgRAHgYAAQgWAAgRgHgAAdA5QAKgGAFgOQADgNAAgYQABgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgFANABAXQAAAYAEANQAFAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_434.setTransform(243.95,29.6);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAFgNAAgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_435.setTransform(217.7,29.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_436.setTransform(198.4731,26.45);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgLAAgRIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_437.setTransform(172.425,29.75);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_438.setTransform(154,29.6);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAJgDAGgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_439.setTransform(136.85,32.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAFgNAAgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_440.setTransform(111.95,29.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_441.setTransform(92.7231,26.45);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_442.setTransform(70.85,27.775);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_443.setTransform(56.025,29.625);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_444.setTransform(38.2523,26.3);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_445.setTransform(15.475,27.3);

	var maskedShapeInstanceList = [this.shape_223,this.shape_224,this.shape_225,this.shape_226,this.shape_227,this.shape_228,this.shape_229,this.shape_230,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239,this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246,this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251,this.shape_252,this.shape_253,this.shape_254,this.shape_255,this.shape_256,this.shape_257,this.shape_258,this.shape_259,this.shape_260,this.shape_261,this.shape_262,this.shape_263,this.shape_264,this.shape_265,this.shape_266,this.shape_267,this.shape_268,this.shape_269,this.shape_270,this.shape_271,this.shape_272,this.shape_273,this.shape_274,this.shape_275,this.shape_276,this.shape_277,this.shape_278,this.shape_279,this.shape_280,this.shape_281,this.shape_282,this.shape_283,this.shape_284,this.shape_285,this.shape_286,this.shape_287,this.shape_288,this.shape_289,this.shape_290,this.shape_291,this.shape_292,this.shape_293,this.shape_294,this.shape_295,this.shape_296,this.shape_297,this.shape_298,this.shape_299,this.shape_300,this.shape_301,this.shape_302,this.shape_303,this.shape_304,this.shape_305,this.shape_306,this.shape_307,this.shape_308,this.shape_309,this.shape_310,this.shape_311,this.shape_312,this.shape_313,this.shape_314,this.shape_315,this.shape_316,this.shape_317,this.shape_318,this.shape_319,this.shape_320,this.shape_321,this.shape_322,this.shape_323,this.shape_324,this.shape_325,this.shape_326,this.shape_327,this.shape_328,this.shape_329,this.shape_330,this.shape_331,this.shape_332,this.shape_333,this.shape_334,this.shape_335,this.shape_336,this.shape_337,this.shape_338,this.shape_339,this.shape_340,this.shape_341,this.shape_342,this.shape_343,this.shape_344,this.shape_345,this.shape_346,this.shape_347,this.shape_348,this.shape_349,this.shape_350,this.shape_351,this.shape_352,this.shape_353,this.shape_354,this.shape_355,this.shape_356,this.shape_357,this.shape_358,this.shape_359,this.shape_360,this.shape_361,this.shape_362,this.shape_363,this.shape_364,this.shape_365,this.shape_366,this.shape_367,this.shape_368,this.shape_369,this.shape_370,this.shape_371,this.shape_372,this.shape_373,this.shape_374,this.shape_375,this.shape_376,this.shape_377,this.shape_378,this.shape_379,this.shape_380,this.shape_381,this.shape_382,this.shape_383,this.shape_384,this.shape_385,this.shape_386,this.shape_387,this.shape_388,this.shape_389,this.shape_390,this.shape_391,this.shape_392,this.shape_393,this.shape_394,this.shape_395,this.shape_396,this.shape_397,this.shape_398,this.shape_399,this.shape_400,this.shape_401,this.shape_402,this.shape_403,this.shape_404,this.shape_405,this.shape_406,this.shape_407,this.shape_408,this.shape_409,this.shape_410,this.shape_411,this.shape_412,this.shape_413,this.shape_414,this.shape_415,this.shape_416,this.shape_417,this.shape_418,this.shape_419,this.shape_420,this.shape_421,this.shape_422,this.shape_423,this.shape_424,this.shape_425,this.shape_426,this.shape_427,this.shape_428,this.shape_429,this.shape_430,this.shape_431,this.shape_432,this.shape_433,this.shape_434,this.shape_435,this.shape_436,this.shape_437,this.shape_438,this.shape_439,this.shape_440,this.shape_441,this.shape_442,this.shape_443,this.shape_444,this.shape_445];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223}]},810).wait(327));

	// 图层_8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_697 = new cjs.Graphics().p("AhKYrIAAn0ICVAAIAAH0g");
	var mask_2_graphics_698 = new cjs.Graphics().p("AhrD6IAAnzIDWAAIAAHzg");
	var mask_2_graphics_699 = new cjs.Graphics().p("AiLD6IAAnzIEXAAIAAHzg");
	var mask_2_graphics_700 = new cjs.Graphics().p("AisD6IAAnzIFZAAIAAHzg");
	var mask_2_graphics_701 = new cjs.Graphics().p("AjMD6IAAnzIGZAAIAAHzg");
	var mask_2_graphics_702 = new cjs.Graphics().p("AjtD6IAAnzIHbAAIAAHzg");
	var mask_2_graphics_703 = new cjs.Graphics().p("AkOD6IAAnzIIdAAIAAHzg");
	var mask_2_graphics_704 = new cjs.Graphics().p("AkvD6IAAnzIJfAAIAAHzg");
	var mask_2_graphics_705 = new cjs.Graphics().p("AlPD6IAAnzIKfAAIAAHzg");
	var mask_2_graphics_706 = new cjs.Graphics().p("AlwD6IAAnzILhAAIAAHzg");
	var mask_2_graphics_707 = new cjs.Graphics().p("AmQD6IAAnzIMhAAIAAHzg");
	var mask_2_graphics_708 = new cjs.Graphics().p("AmxD6IAAnzINjAAIAAHzg");
	var mask_2_graphics_709 = new cjs.Graphics().p("AnRD6IAAnzIOjAAIAAHzg");
	var mask_2_graphics_710 = new cjs.Graphics().p("AnyD6IAAnzIPlAAIAAHzg");
	var mask_2_graphics_711 = new cjs.Graphics().p("AoTD6IAAnzIQnAAIAAHzg");
	var mask_2_graphics_712 = new cjs.Graphics().p("AozD6IAAnzIRnAAIAAHzg");
	var mask_2_graphics_713 = new cjs.Graphics().p("ApUD6IAAnzISpAAIAAHzg");
	var mask_2_graphics_714 = new cjs.Graphics().p("Ap1D6IAAnzITrAAIAAHzg");
	var mask_2_graphics_715 = new cjs.Graphics().p("AqVD6IAAnzIUrAAIAAHzg");
	var mask_2_graphics_716 = new cjs.Graphics().p("Aq2D6IAAnzIVtAAIAAHzg");
	var mask_2_graphics_717 = new cjs.Graphics().p("ArXD6IAAnzIWvAAIAAHzg");
	var mask_2_graphics_718 = new cjs.Graphics().p("Ar3D6IAAnzIXvAAIAAHzg");
	var mask_2_graphics_719 = new cjs.Graphics().p("AsYD6IAAnzIYxAAIAAHzg");
	var mask_2_graphics_720 = new cjs.Graphics().p("As4D6IAAnzIZxAAIAAHzg");
	var mask_2_graphics_721 = new cjs.Graphics().p("AtZD6IAAnzIazAAIAAHzg");
	var mask_2_graphics_722 = new cjs.Graphics().p("At6D6IAAnzIb1AAIAAHzg");
	var mask_2_graphics_723 = new cjs.Graphics().p("AuaD6IAAnzIc1AAIAAHzg");
	var mask_2_graphics_724 = new cjs.Graphics().p("Au7D6IAAnzId3AAIAAHzg");
	var mask_2_graphics_725 = new cjs.Graphics().p("AvcD6IAAnzIe5AAIAAHzg");
	var mask_2_graphics_726 = new cjs.Graphics().p("Av8D6IAAnzIf5AAIAAHzg");
	var mask_2_graphics_727 = new cjs.Graphics().p("AwdD6IAAnzMAg7AAAIAAHzg");
	var mask_2_graphics_728 = new cjs.Graphics().p("Aw+D6IAAnzMAh9AAAIAAHzg");
	var mask_2_graphics_729 = new cjs.Graphics().p("AxeD6IAAnzMAi9AAAIAAHzg");
	var mask_2_graphics_730 = new cjs.Graphics().p("Ax/D6IAAnzMAj/AAAIAAHzg");
	var mask_2_graphics_731 = new cjs.Graphics().p("AyfD6IAAnzMAk/AAAIAAHzg");
	var mask_2_graphics_732 = new cjs.Graphics().p("AzAD6IAAnzMAmBAAAIAAHzg");
	var mask_2_graphics_733 = new cjs.Graphics().p("AzgD6IAAnzMAnCAAAIAAHzg");
	var mask_2_graphics_734 = new cjs.Graphics().p("A0BD6IAAnzMAoDAAAIAAHzg");
	var mask_2_graphics_735 = new cjs.Graphics().p("A0iD6IAAnzMApFAAAIAAHzg");
	var mask_2_graphics_736 = new cjs.Graphics().p("A1DD6IAAnzMAqHAAAIAAHzg");
	var mask_2_graphics_737 = new cjs.Graphics().p("A1jD6IAAnzMArHAAAIAAHzg");
	var mask_2_graphics_738 = new cjs.Graphics().p("A2ED6IAAnzMAsJAAAIAAHzg");
	var mask_2_graphics_739 = new cjs.Graphics().p("A2kD6IAAnzMAtJAAAIAAHzg");
	var mask_2_graphics_740 = new cjs.Graphics().p("A3FD6IAAnzMAuLAAAIAAHzg");
	var mask_2_graphics_741 = new cjs.Graphics().p("A3mD6IAAnzMAvNAAAIAAHzg");
	var mask_2_graphics_742 = new cjs.Graphics().p("A4GD6IAAnzMAwNAAAIAAHzg");
	var mask_2_graphics_743 = new cjs.Graphics().p("A4GD6IAAnzMAwNAAAIAAHzg");
	var mask_2_graphics_744 = new cjs.Graphics().p("A4GD6IAAnzMAwNAAAIAAHzg");
	var mask_2_graphics_745 = new cjs.Graphics().p("A4GD6IAAnzMAwNAAAIAAHzg");
	var mask_2_graphics_746 = new cjs.Graphics().p("A4GD6IAAnzMAwNAAAIAAHzg");
	var mask_2_graphics_747 = new cjs.Graphics().p("A4GD6IAAnzMAwNAAAIAAHzg");
	var mask_2_graphics_748 = new cjs.Graphics().p("A4GD6IAAnzMAwNAAAIAAHzg");
	var mask_2_graphics_749 = new cjs.Graphics().p("A4GD6IAAnzMAwNAAAIAAHzg");
	var mask_2_graphics_750 = new cjs.Graphics().p("A4GD6IAAnzMAwNAAAIAAHzg");
	var mask_2_graphics_751 = new cjs.Graphics().p("A4GD6IAAnzMAwNAAAIAAHzg");
	var mask_2_graphics_752 = new cjs.Graphics().p("A4GD6IAAnzMAwNAAAIAAHzg");
	var mask_2_graphics_753 = new cjs.Graphics().p("A4GD6IAAnzMAwNAAAIAAHzg");
	var mask_2_graphics_754 = new cjs.Graphics().p("A4GD6IAAnzMAwNAAAIAAHzg");
	var mask_2_graphics_755 = new cjs.Graphics().p("A4GD6IAAnzMAwNAAAIAAHzg");
	var mask_2_graphics_756 = new cjs.Graphics().p("A4iD6IAAnzMAxFAAAIAAHzg");
	var mask_2_graphics_757 = new cjs.Graphics().p("A4+D6IAAnzMAx9AAAIAAHzg");
	var mask_2_graphics_758 = new cjs.Graphics().p("A5aD6IAAnzMAy1AAAIAAHzg");
	var mask_2_graphics_759 = new cjs.Graphics().p("A52D6IAAnzMAztAAAIAAHzg");
	var mask_2_graphics_760 = new cjs.Graphics().p("A6SD6IAAnzMA0kAAAIAAHzg");
	var mask_2_graphics_761 = new cjs.Graphics().p("A6tD6IAAnzMA1bAAAIAAHzg");
	var mask_2_graphics_762 = new cjs.Graphics().p("A7JD6IAAnzMA2TAAAIAAHzg");
	var mask_2_graphics_763 = new cjs.Graphics().p("A7lD6IAAnzMA3LAAAIAAHzg");
	var mask_2_graphics_764 = new cjs.Graphics().p("A8BD6IAAnzMA4DAAAIAAHzg");
	var mask_2_graphics_765 = new cjs.Graphics().p("A8dD6IAAnzMA47AAAIAAHzg");
	var mask_2_graphics_766 = new cjs.Graphics().p("A85D6IAAnzMA5zAAAIAAHzg");
	var mask_2_graphics_767 = new cjs.Graphics().p("A9UD6IAAnzMA6qAAAIAAHzg");
	var mask_2_graphics_768 = new cjs.Graphics().p("A9wD6IAAnzMA7hAAAIAAHzg");
	var mask_2_graphics_769 = new cjs.Graphics().p("A+MD6IAAnzMA8ZAAAIAAHzg");
	var mask_2_graphics_770 = new cjs.Graphics().p("A+oD6IAAnzMA9RAAAIAAHzg");
	var mask_2_graphics_771 = new cjs.Graphics().p("A/ED6IAAnzMA+JAAAIAAHzg");
	var mask_2_graphics_772 = new cjs.Graphics().p("A/gD6IAAnzMA/BAAAIAAHzg");
	var mask_2_graphics_773 = new cjs.Graphics().p("A/8D6IAAnzMA/4AAAIAAHzg");
	var mask_2_graphics_774 = new cjs.Graphics().p("EggYAD6IAAnzMBAxAAAIAAHzg");
	var mask_2_graphics_775 = new cjs.Graphics().p("EggzAD6IAAnzMBBnAAAIAAHzg");
	var mask_2_graphics_776 = new cjs.Graphics().p("EghPAD6IAAnzMBCfAAAIAAHzg");
	var mask_2_graphics_777 = new cjs.Graphics().p("EghrAD6IAAnzMBDXAAAIAAHzg");
	var mask_2_graphics_778 = new cjs.Graphics().p("EgiHAD6IAAnzMBEPAAAIAAHzg");
	var mask_2_graphics_779 = new cjs.Graphics().p("EgijAD6IAAnzMBFHAAAIAAHzg");
	var mask_2_graphics_780 = new cjs.Graphics().p("Egi/AD6IAAnzMBF/AAAIAAHzg");
	var mask_2_graphics_781 = new cjs.Graphics().p("EgjbAD6IAAnzMBG3AAAIAAHzg");
	var mask_2_graphics_782 = new cjs.Graphics().p("Egj2AD6IAAnzMBHtAAAIAAHzg");
	var mask_2_graphics_783 = new cjs.Graphics().p("EgkSAD6IAAnzMBIlAAAIAAHzg");
	var mask_2_graphics_784 = new cjs.Graphics().p("EgkuAD6IAAnzMBJdAAAIAAHzg");
	var mask_2_graphics_785 = new cjs.Graphics().p("EglKAD6IAAnzMBKVAAAIAAHzg");
	var mask_2_graphics_786 = new cjs.Graphics().p("EglmAD6IAAnzMBLNAAAIAAHzg");
	var mask_2_graphics_787 = new cjs.Graphics().p("EgmCAD6IAAnzMBMFAAAIAAHzg");
	var mask_2_graphics_788 = new cjs.Graphics().p("EgmeAD6IAAnzMBM9AAAIAAHzg");
	var mask_2_graphics_789 = new cjs.Graphics().p("Egm5AD6IAAnzMBNzAAAIAAHzg");
	var mask_2_graphics_790 = new cjs.Graphics().p("EgnVAD6IAAnzMBOrAAAIAAHzg");
	var mask_2_graphics_791 = new cjs.Graphics().p("EgnxAD6IAAnzMBPjAAAIAAHzg");
	var mask_2_graphics_792 = new cjs.Graphics().p("EgoNAD6IAAnzMBQbAAAIAAHzg");
	var mask_2_graphics_793 = new cjs.Graphics().p("EgopAYSIAAn0MBRTAAAIAAH0g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(697).to({graphics:mask_2_graphics_697,x:-7.5,y:157.9005}).wait(1).to({graphics:mask_2_graphics_698,x:-4.25,y:290.75}).wait(1).to({graphics:mask_2_graphics_699,x:-0.975,y:290.65}).wait(1).to({graphics:mask_2_graphics_700,x:2.25,y:290.6}).wait(1).to({graphics:mask_2_graphics_701,x:5.5,y:290.55}).wait(1).to({graphics:mask_2_graphics_702,x:8.75,y:290.5}).wait(1).to({graphics:mask_2_graphics_703,x:12.025,y:290.4}).wait(1).to({graphics:mask_2_graphics_704,x:15.25,y:290.35}).wait(1).to({graphics:mask_2_graphics_705,x:18.5,y:290.3}).wait(1).to({graphics:mask_2_graphics_706,x:21.775,y:290.2}).wait(1).to({graphics:mask_2_graphics_707,x:25.025,y:290.15}).wait(1).to({graphics:mask_2_graphics_708,x:28.275,y:290.1}).wait(1).to({graphics:mask_2_graphics_709,x:31.5,y:290.05}).wait(1).to({graphics:mask_2_graphics_710,x:34.775,y:289.95}).wait(1).to({graphics:mask_2_graphics_711,x:38.025,y:289.9}).wait(1).to({graphics:mask_2_graphics_712,x:41.275,y:289.85}).wait(1).to({graphics:mask_2_graphics_713,x:44.525,y:289.75}).wait(1).to({graphics:mask_2_graphics_714,x:47.775,y:289.7}).wait(1).to({graphics:mask_2_graphics_715,x:51.025,y:289.65}).wait(1).to({graphics:mask_2_graphics_716,x:54.3,y:289.6}).wait(1).to({graphics:mask_2_graphics_717,x:57.55,y:289.5}).wait(1).to({graphics:mask_2_graphics_718,x:60.775,y:289.45}).wait(1).to({graphics:mask_2_graphics_719,x:64.025,y:289.4}).wait(1).to({graphics:mask_2_graphics_720,x:67.3,y:289.3}).wait(1).to({graphics:mask_2_graphics_721,x:70.55,y:289.25}).wait(1).to({graphics:mask_2_graphics_722,x:73.775,y:289.2}).wait(1).to({graphics:mask_2_graphics_723,x:77.025,y:289.1}).wait(1).to({graphics:mask_2_graphics_724,x:80.3,y:289.05}).wait(1).to({graphics:mask_2_graphics_725,x:83.55,y:289}).wait(1).to({graphics:mask_2_graphics_726,x:86.8,y:288.95}).wait(1).to({graphics:mask_2_graphics_727,x:90.05,y:288.85}).wait(1).to({graphics:mask_2_graphics_728,x:93.3,y:288.8}).wait(1).to({graphics:mask_2_graphics_729,x:96.55,y:288.75}).wait(1).to({graphics:mask_2_graphics_730,x:99.825,y:288.65}).wait(1).to({graphics:mask_2_graphics_731,x:103.05,y:288.6}).wait(1).to({graphics:mask_2_graphics_732,x:106.3,y:288.55}).wait(1).to({graphics:mask_2_graphics_733,x:109.55,y:288.5}).wait(1).to({graphics:mask_2_graphics_734,x:112.825,y:288.4}).wait(1).to({graphics:mask_2_graphics_735,x:116.075,y:288.35}).wait(1).to({graphics:mask_2_graphics_736,x:119.3,y:288.3}).wait(1).to({graphics:mask_2_graphics_737,x:122.575,y:288.2}).wait(1).to({graphics:mask_2_graphics_738,x:125.825,y:288.15}).wait(1).to({graphics:mask_2_graphics_739,x:129.075,y:288.1}).wait(1).to({graphics:mask_2_graphics_740,x:132.3,y:288.05}).wait(1).to({graphics:mask_2_graphics_741,x:135.575,y:287.95}).wait(1).to({graphics:mask_2_graphics_742,x:138.825,y:287.9}).wait(1).to({graphics:mask_2_graphics_743,x:138.825,y:287.9}).wait(1).to({graphics:mask_2_graphics_744,x:138.825,y:287.9}).wait(1).to({graphics:mask_2_graphics_745,x:138.825,y:287.9}).wait(1).to({graphics:mask_2_graphics_746,x:138.825,y:287.9}).wait(1).to({graphics:mask_2_graphics_747,x:138.825,y:287.9}).wait(1).to({graphics:mask_2_graphics_748,x:138.825,y:287.9}).wait(1).to({graphics:mask_2_graphics_749,x:138.825,y:287.9}).wait(1).to({graphics:mask_2_graphics_750,x:138.825,y:287.9}).wait(1).to({graphics:mask_2_graphics_751,x:138.825,y:287.9}).wait(1).to({graphics:mask_2_graphics_752,x:138.825,y:287.9}).wait(1).to({graphics:mask_2_graphics_753,x:138.825,y:287.9}).wait(1).to({graphics:mask_2_graphics_754,x:138.825,y:287.9}).wait(1).to({graphics:mask_2_graphics_755,x:138.825,y:287.9}).wait(1).to({graphics:mask_2_graphics_756,x:141.6,y:287.85}).wait(1).to({graphics:mask_2_graphics_757,x:144.375,y:287.8}).wait(1).to({graphics:mask_2_graphics_758,x:147.15,y:287.75}).wait(1).to({graphics:mask_2_graphics_759,x:149.925,y:287.7}).wait(1).to({graphics:mask_2_graphics_760,x:152.7,y:287.6}).wait(1).to({graphics:mask_2_graphics_761,x:155.475,y:287.55}).wait(1).to({graphics:mask_2_graphics_762,x:158.275,y:287.5}).wait(1).to({graphics:mask_2_graphics_763,x:161.05,y:287.45}).wait(1).to({graphics:mask_2_graphics_764,x:163.8,y:287.4}).wait(1).to({graphics:mask_2_graphics_765,x:166.575,y:287.35}).wait(1).to({graphics:mask_2_graphics_766,x:169.375,y:287.3}).wait(1).to({graphics:mask_2_graphics_767,x:172.15,y:287.25}).wait(1).to({graphics:mask_2_graphics_768,x:174.925,y:287.2}).wait(1).to({graphics:mask_2_graphics_769,x:177.675,y:287.15}).wait(1).to({graphics:mask_2_graphics_770,x:180.475,y:287.05}).wait(1).to({graphics:mask_2_graphics_771,x:183.25,y:287}).wait(1).to({graphics:mask_2_graphics_772,x:186.025,y:286.95}).wait(1).to({graphics:mask_2_graphics_773,x:188.8,y:286.9}).wait(1).to({graphics:mask_2_graphics_774,x:191.6,y:286.85}).wait(1).to({graphics:mask_2_graphics_775,x:194.35,y:286.8}).wait(1).to({graphics:mask_2_graphics_776,x:197.125,y:286.75}).wait(1).to({graphics:mask_2_graphics_777,x:199.9,y:286.7}).wait(1).to({graphics:mask_2_graphics_778,x:202.675,y:286.65}).wait(1).to({graphics:mask_2_graphics_779,x:205.475,y:286.55}).wait(1).to({graphics:mask_2_graphics_780,x:208.225,y:286.5}).wait(1).to({graphics:mask_2_graphics_781,x:211,y:286.45}).wait(1).to({graphics:mask_2_graphics_782,x:213.775,y:286.4}).wait(1).to({graphics:mask_2_graphics_783,x:216.575,y:286.35}).wait(1).to({graphics:mask_2_graphics_784,x:219.35,y:286.3}).wait(1).to({graphics:mask_2_graphics_785,x:222.1,y:286.25}).wait(1).to({graphics:mask_2_graphics_786,x:224.875,y:286.2}).wait(1).to({graphics:mask_2_graphics_787,x:227.675,y:286.15}).wait(1).to({graphics:mask_2_graphics_788,x:230.45,y:286.1}).wait(1).to({graphics:mask_2_graphics_789,x:233.225,y:286}).wait(1).to({graphics:mask_2_graphics_790,x:236,y:285.95}).wait(1).to({graphics:mask_2_graphics_791,x:238.775,y:285.9}).wait(1).to({graphics:mask_2_graphics_792,x:241.55,y:285.85}).wait(1).to({graphics:mask_2_graphics_793,x:244.3238,y:155.4005}).wait(344));

	// 图层_32
	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_446.setTransform(391.075,386.5227);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_447.setTransform(379.2,387.025);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_448.setTransform(364.375,388.875);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_449.setTransform(346.6023,385.55);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_450.setTransform(332.2,387.025);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAAQIBVgGQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_451.setTransform(310.825,388.85);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#FF0000").s().p("AAfByIg7hLIgJAAIAABLIgaAAIAAjjIAaAAIAACDIAKAAIA3hBIAgAAIhDBKIBHBXg");
	this.shape_452.setTransform(295.65,385.55);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#FF0000").s().p("AgNBvIAAihIAaAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_453.setTransform(282.6,385.825);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#FF0000").s().p("AgQBqQgKgHAAgTIAAjCIAaAAIAAC8QAAAMADADQADAFAIgBIAGAAIAHgBIAAAVIgIABIgJABQgRAAgJgJg");
	this.shape_454.setTransform(275.325,385.65);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_455.setTransform(257.15,387.025);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_456.setTransform(242.325,388.875);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_457.setTransform(224.5523,385.55);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_458.setTransform(197.725,388.875);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgYAAIAAgWIAYAAIAAgmIAZAAIAAAmIAoAAIAAAWIgoAAIAABYQAAANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_459.setTransform(176.4,387.025);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKABQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_460.setTransform(162.1523,388.7);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_461.setTransform(143.025,388.875);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_462.setTransform(122.075,388.85);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_463.setTransform(92.675,389);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAJgSAQgHQARgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgKAFgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_464.setTransform(74.25,388.85);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAKgFAFgIQAGgJAEgNIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_465.setTransform(57.1,391.85);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_466.setTransform(32.2,388.85);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_467.setTransform(12.775,386.5488);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_468.setTransform(564.025,347.6969);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_469.setTransform(550.2523,338);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#FF0000").s().p("AgXBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAOAAAKACQALABAHADIAAAYIgTgGQgKgBgNAAQgQAAgLAFQgKAFgEAOQgFANAAAYQgBAWAGAOQAEANAKAGQALAGARgBQAMAAALgCQAKgBAJgDIAAAXIgLADIgQACIgQABQgXAAgQgIg");
	this.shape_470.setTransform(533.7,341.3);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#FF0000").s().p("AgrBMQgMgHgEgMQgFgMAAgPIAAhwIAaAAIAABmQgBAMADAKQACAIAHAFQAHAEANAAQAJABAJgCQAJgDAIgGQAHgIAFgOIAAhtIAZAAIAAChIgVAAIgEgXQgFALgIAFQgIAGgKACQgJACgKABQgVgBgMgGg");
	this.shape_471.setTransform(516.775,341.45);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#FF0000").s().p("ABWBSIAAhlQAAgTgGgKQgHgLgSAAQgKAAgIADQgIACgGAHQgHAFgDAMIAAACIAABuIgZAAIAAhlQAAgTgGgKQgGgLgSAAQgKAAgIADQgIACgGAHQgHAFgEANIAABvIgaAAIAAihIAaAAIAAAWQAIgOAMgGQAMgEAPAAQATgBAMAIQAKAGAFANQAFgKAIgHQAIgFAKgDQAKgBAKAAQASgBAMAIQAMAGAFAMQAGAMAAAQIAABug");
	this.shape_472.setTransform(493.875,341.15);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_473.setTransform(463,341.3);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#FF0000").s().p("AgYBSIgRgBIgMgDIAAgWIANADIARACIARABQARAAAJgFQAKgFAAgPQAAgJgCgFQgDgGgIgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJAAgNQAAgVAPgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgHgDgKgCQgLgCgLAAQgQAAgIAGQgJAEAAAOQAAAIACAEQADAFAGADQAHADALADQATADALAHQAMAEAEAJQAGAKAAAPQgBAZgQALQgPAMgdgBIgSgBg");
	this.shape_474.setTransform(446.6,341.25);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgYAAIAAgWIAYAAIAAgmIAZAAIAAAmIAoAAIAAAWIgoAAIAABYQAAANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_475.setTransform(426.6,339.475);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#FF0000").s().p("AgNBvIAAihIAaAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_476.setTransform(417.6,338.275);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_477.setTransform(397.175,341.3);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#FF0000").s().p("AgOBRIg9ihIAaAAIAxCHIABAAIAwiHIAbAAIg9Chg");
	this.shape_478.setTransform(380.6,341.3);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgFANABAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_479.setTransform(363.4,341.3);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#FF0000").s().p("AgQBqQgKgIAAgSIAAjCIAaAAIAAC7QAAANADADQADAEAIAAIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgJg");
	this.shape_480.setTransform(350.925,338.1);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_481.setTransform(333.75,339);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_482.setTransform(317.425,347.6969);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgEAFgIQAGgIAEgNIhBihIAcAAIAxCGIABAAIAviGIAaAAIg6CbQgIAVgIAPQgIAOgOAIQgPAIgXAAg");
	this.shape_483.setTransform(305,344.3);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgYAAIAAgWIAYAAIAAgmIAYAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAIgBIAAAWIgJABIgJAAQgRAAgKgEg");
	this.shape_484.setTransform(292,339.475);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_485.setTransform(281.9,339.475);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_486.setTransform(268.225,341.3);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAIQgIAIgEANIAABpg");
	this.shape_487.setTransform(254.925,341.15);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#FF0000").s().p("AhIBxIAAjeIAaAAIAAAdQAFgOAMgIQANgKAWABQAbgBAOALQAPALAGASQAFAUAAAYQAAAXgFASQgGATgPALQgOAMgbABQgWAAgNgJQgMgJgFgOIAABZgAgbhTQgLAIgEAOQgFAOAAATQAAATAFANQAEAOALAIQALAHASAAQAUABAJgKQAJgJADgNQADgNAAgRQAAgRgDgOQgDgOgKgJQgJgIgTAAQgSAAgLAHg");
	this.shape_488.setTransform(239.125,344.15);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_489.setTransform(212.15,341.3);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAOADIASACIAQABQARAAAKgFQAJgFAAgPQAAgJgCgFQgEgGgHgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJABgNQAAgVAOgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgIgDgJgCQgLgCgLAAQgQAAgJAGQgIAEgBAOQAAAIADAEQACAFAIADQAGADAMADQASADALAHQAMAEAEAJQAFAKABAPQgBAZgPALQgQAMgdgBIgRgBg");
	this.shape_490.setTransform(195.75,341.25);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAOADIASACIAQABQARAAAKgFQAJgFAAgPQAAgJgCgFQgEgGgHgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJABgNQAAgVAOgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgIgDgJgCQgLgCgLAAQgQAAgJAGQgIAEgBAOQAAAIADAEQACAFAIADQAGADAMADQASADALAHQAMAEAEAJQAFAKABAPQgBAZgPALQgQAMgdgBIgRgBg");
	this.shape_491.setTransform(173.7,341.25);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#FF0000").s().p("AgUAmIAIgZQAEgNACgMQACgOABgLIAYAAQAAALgEANQgDANgFAOQgFANgFALg");
	this.shape_492.setTransform(162.45,330.45);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_493.setTransform(153.3,339.475);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_494.setTransform(144.2,339);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#FF0000").s().p("AgNBmQgFgEAAgMQAAgMAFgEQADgDAKAAQAKAAAFADQAEAEAAAMQAAAMgEAEQgFADgKAAQgKAAgDgDgAgJArIgEiTIAcAAIgFCTg");
	this.shape_495.setTransform(127.05,339.1);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_496.setTransform(112.4,341.3);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#FF0000").s().p("AguBoQgPgKgFgTQgGgSAAgaQAAgWAGgSQAFgTAPgMQAPgLAaAAQAXAAAMAIQAMAJAFAOIAAheIAaAAIAADiIgWAAIgEgaQgFANgNAIQgNAJgVAAQgaAAgPgMgAgegVQgJAJgDAOQgCAOAAAPQAAARADAPQADAOAJAIQAJAIATAAQASAAALgHQALgIAFgNQAEgOAAgUQAAgSgEgNQgFgOgLgIQgLgIgSAAQgTABgKAIg");
	this.shape_497.setTransform(93.1731,338.15);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_498.setTransform(72.3,339);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#FF0000").s().p("AgaAoQAIgNAHgOQAGgNAEgNQADgOAAgLIAYAAQAAAMgEAPQgGAOgHANQgHAOgGAKg");
	this.shape_499.setTransform(55.25,349.55);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#FF0000").s().p("AgYBSIgRgBIgMgDIAAgWIANADIARACIARABQARAAAJgFQAKgFAAgPQAAgJgCgFQgDgGgIgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJAAgNQAAgVAPgMQAPgLAbAAQAMgBAMACQALACAGACIgBAWQgIgDgJgCQgLgCgLAAQgQAAgIAGQgJAEAAAOQAAAIACAEQADAFAHADQAGADALADQATADALAHQAMAEAEAJQAGAKAAAPQgBAZgQALQgPAMgdgBIgSgBg");
	this.shape_500.setTransform(44.3,341.25);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_501.setTransform(28.425,341.3);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#FF0000").s().p("AgNBoIAAhZIhJh2IAfAAIA3BeIACAAIA3heIAeAAIhKB2IAABZg");
	this.shape_502.setTransform(10.925,339);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_503.setTransform(486.225,291.4227);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgJgEg");
	this.shape_504.setTransform(474.35,291.925);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_505.setTransform(459.525,293.775);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_506.setTransform(441.7523,290.45);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_507.setTransform(412.325,293.75);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_508.setTransform(391.225,293.75);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_509.setTransform(373.3023,293.6);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_510.setTransform(351.675,293.6);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_511.setTransform(335.675,293.9);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_512.setTransform(317.25,293.75);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_513.setTransform(300.1,296.75);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#FF0000").s().p("AgaBvIgTgDIAAgVIAUACIAUABQAaABANgMQANgNAAgcIAAgQQgFAOgMAIQgMAJgWAAQgbAAgPgLQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPgBAKAFQALAEAGAHQAGAIADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgoAAIgUgCgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAIQAJAHATABQASAAALgHQALgIAFgNQAEgMAAgUQAAgSgEgPQgFgNgLgHQgLgIgSAAQgTAAgKAJg");
	this.shape_514.setTransform(274.4737,296.6);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_515.setTransform(256.1523,293.6);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACABAKQgBAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_516.setTransform(242.85,290.725);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_517.setTransform(234.175,293.6);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_518.setTransform(217.625,293.775);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_519.setTransform(200.425,293.75);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_520.setTransform(179.325,293.75);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_521.setTransform(150.525,293.75);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#FF0000").s().p("AAfByIg7hMIgJAAIAABMIgaAAIAAjjIAaAAIAACEIAKAAIA3hCIAgAAIhDBLIBGBWg");
	this.shape_522.setTransform(135.35,290.45);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#FF0000").s().p("AgMBvIAAihIAZAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_523.setTransform(122.3,290.725);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_524.setTransform(115.025,290.55);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_525.setTransform(92.675,293.9);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_526.setTransform(74.25,293.75);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_527.setTransform(57.1,296.75);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAEgNABgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_528.setTransform(32.2,293.75);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_529.setTransform(12.775,291.4488);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_530.setTransform(525.275,243.8727);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAKgFAFgIQAGgJAEgMIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgHAVgJAOQgIAPgOAIQgOAIgYAAg");
	this.shape_531.setTransform(510.6,249.2);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_532.setTransform(492.875,246.225);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_533.setTransform(474.175,243.8988);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#FF0000").s().p("AgXBTIgRgCIgOgDIAAgWIAPADIARACIAQABQARABAKgGQAJgFAAgOQAAgKgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgFQgKgFgEgJQgEgJABgOQAAgUAOgLQAPgMAbgBQAMABAMABQALABAHADIgDAWQgHgDgJgBQgLgCgLAAQgQgBgJAFQgIAFgBAOQAAAIADAFQACAEAIADQAGADAMADQASAEALAFQALAFAGAKQAEAJAAAQQAAAXgPAMQgRAMgcAAIgRgBg");
	this.shape_534.setTransform(448.55,246.15);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#FF0000").s().p("AgUAnIAIgaQAEgNACgMQACgOABgMIAYAAQAAALgEAOQgDANgFANQgFAOgFAMg");
	this.shape_535.setTransform(437.3,235.35);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKACQgJACgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_536.setTransform(424.0023,246.05);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_537.setTransform(406.025,246.2);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_538.setTransform(392.725,246.05);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_539.setTransform(376.0231,243.05);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#FF0000").s().p("AgQBqQgKgHAAgTIAAjCIAaAAIAAC8QAAAMADADQADAFAIgBIAGAAIAHgBIAAAVIgIABIgJABQgRAAgJgJg");
	this.shape_540.setTransform(363.725,243);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACAAAKQAAAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_541.setTransform(354.35,243.175);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_542.setTransform(341.0523,242.9);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FF0000").s().p("AgQBnQgRgFgNgMQgMgLgHgVQgHgVAAghQAAgnAMgXQAMgYAWgKQAWgKAdAAQAOAAALACQALABAJADIAAAZIgUgFQgLgCgNAAQgYAAgPAHQgPAIgIASQgHATAAAeQAAAgAHATQAHASAPAHQAOAHAXAAQAOAAAMgCQAMgCAMgEIAAAXQgJAEgNADQgNACgQAAQgVAAgRgEg");
	this.shape_543.setTransform(323.225,243.8988);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKACQgJACgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_544.setTransform(296.8523,246.05);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQAQAHAJASQAJATAAAfQAAAggJATQgJASgQAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgEgOgLgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_545.setTransform(278.25,246.2);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_546.setTransform(256.675,246.05);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_547.setTransform(240.125,246.225);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_548.setTransform(222.925,246.2);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_549.setTransform(201.825,246.2);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgPIAAhvIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_550.setTransform(172.425,246.35);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAJgSAQgHQARgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgEgOgLgFQgKgHgSAAQgRAAgKAHQgKAFgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_551.setTransform(154,246.2);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAJgFAGgIQAGgJAEgMIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_552.setTransform(136.85,249.2);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_553.setTransform(111.95,246.2);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_554.setTransform(92.7231,243.05);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_555.setTransform(70.85,244.375);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_556.setTransform(56.025,246.225);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_557.setTransform(38.2523,242.9);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_558.setTransform(15.475,243.9);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#FF0000").s().p("AgNBlQgFgDAAgMQAAgMAFgDQADgFAKABQAKgBAFAFQAEADAAAMQAAAMgEADQgFAEgKAAQgKAAgDgEgAgJArIgEiTIAcAAIgFCTg");
	this.shape_559.setTransform(478.95,170.05);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#FF0000").s().p("AAfByIg7hLIgJAAIAABLIgaAAIAAjjIAaAAIAACEIAKAAIA3hCIAgAAIhDBLIBHBWg");
	this.shape_560.setTransform(467.1,168.95);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_561.setTransform(453.425,172.1);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_562.setTransform(436.875,172.275);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#FF0000").s().p("AguBpQgPgLgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgLgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_563.setTransform(418.3731,169.1);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAPADIARADIAPABQASgBAKgFQAJgGAAgOQAAgJgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgEQgKgHgEgIQgEgJABgOQAAgTAOgMQAPgMAcAAQALAAAMABQALABAHADIgDAWQgGgDgLgCQgKgBgLAAQgQgBgJAFQgIAGgBANQABAIACAFQACAEAIADQAGADAMACQASAFALAFQALAFAGAJQAEAKAAAQQAAAXgPAMQgRALgdAAIgQgBg");
	this.shape_564.setTransform(394.45,172.2);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_565.setTransform(382.15,170.425);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgEIAAAYQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_566.setTransform(368.475,172.25);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#FF0000").s().p("AgaBvIgTgDIAAgVIAUADIAUAAQAaABANgMQANgNAAgcIAAgQQgFAOgMAJQgMAIgWAAQgbAAgPgLQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPgBAKAFQALAEAGAHQAGAIADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgoAAIgUgCgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAIQAJAHATABQASAAALgHQALgIAFgNQAEgMAAgUQAAgSgEgPQgFgNgLgHQgLgIgSAAQgTAAgKAJg");
	this.shape_567.setTransform(349.7737,175.1);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_568.setTransform(327.9,170.425);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACABAKQgBAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_569.setTransform(318.9,169.225);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_570.setTransform(303.925,169.05);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#FF0000").s().p("AgMBvIAAihIAZAAIAAChgAgLhSQgDgDAAgKQAAgKADgCQAEgDAHAAQAIAAAEADQAEACAAAKQAAAKgEADQgEADgIAAQgHAAgEgDg");
	this.shape_571.setTransform(294.55,169.225);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_572.setTransform(285.4,170.425);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_573.setTransform(271.1523,172.1);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgLAAgRIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_574.setTransform(252.575,172.4);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_575.setTransform(232.525,169.05);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_576.setTransform(223.925,169.05);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_577.setTransform(208.725,172.275);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#FF0000").s().p("AgdBrQgMgJgFgOIgDAdIgXAAIAAjjIAaAAIAABeQAFgOAMgIQANgJAWAAQAbAAAOALQAPAKAGASQAFASAAAaQAAAWgFATQgGATgPAMQgOALgbAAQgWAAgNgIgAgbgWQgLAHgEAOQgFANAAAUQAAASAFAOQAEAOALAIQALAIASAAQAUgBAJgIQAJgKADgOQADgOAAgPQAAgSgDgOQgDgNgKgIQgJgJgTAAQgSAAgLAIg");
	this.shape_578.setTransform(191.125,169.1);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_579.setTransform(176.05,170.425);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQAQAHAJATQAJASAAAfQAAAggJATQgJASgQAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAFgOQADgNABgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAEANQAFAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_580.setTransform(161.75,172.25);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_581.setTransform(143.2,172.25);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#FF0000").s().p("AgWBzIAAiMIgbAAIAAgVIAbAAIAAgCQAAgbAHgPQAHgOALgFQAMgFARABIAJAAIAJABIAAAVIgIgBIgKgBQgLAAgHAEQgGAEgCAKQgDAKAAATIAmAAIAAAVIgmAAIAACMg");
	this.shape_582.setTransform(129.025,168.8977);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAxCFIABAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgPAIgXAAg");
	this.shape_583.setTransform(107.9,175.25);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_584.setTransform(90.175,172.275);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_585.setTransform(78.425,169.05);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#FF0000").s().p("AhIBxIAAjdIAaAAIAAAcQAFgOAMgIQANgJAWAAQAbAAAOALQAPAKAGASQAFATAAAaQAAAWgFASQgGATgPAMQgOALgbAAQgWAAgNgIQgMgJgFgOIAABZgAgbhSQgLAHgEAOQgFAOAAAUQAAASAFANQAEAOALAIQALAIASAAQAUgBAJgIQAJgKADgOQADgNAAgPQAAgSgDgOQgDgOgKgIQgJgJgTAAQgSAAgLAIg");
	this.shape_586.setTransform(63.975,175.1);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgEIAAAYQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_587.setTransform(37.625,172.25);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_588.setTransform(15.475,169.95);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_589.setTransform(551.725,131.0969);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_590.setTransform(537.2231,121.55);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_591.setTransform(518.325,124.725);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_592.setTransform(499.8231,121.55);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_593.setTransform(473.0731,121.55);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKABQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_594.setTransform(454.7523,124.55);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_595.setTransform(435.625,124.725);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_596.setTransform(405.625,124.55);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgPIAAhvIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_597.setTransform(382.475,124.85);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_598.setTransform(359.575,124.55);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAJgFAGgIQAGgJAEgNIhBigIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgHAVgJAOQgIAPgOAIQgPAIgXAAg");
	this.shape_599.setTransform(330.1,127.7);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_600.setTransform(308.425,124.55);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_601.setTransform(277.6023,121.4);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgYAAIAAgWIAYAAIAAgmIAYAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAJgBIAKAAIAJgBIAAAWIgJABIgKAAQgRAAgKgEg");
	this.shape_602.setTransform(263.2,122.875);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAFACAAAKQAAAKgFADQgDADgIAAQgHAAgEgDg");
	this.shape_603.setTransform(254.2,121.675);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_604.setTransform(237.725,124.7);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#FF0000").s().p("AAeByIg5hLIgJAAIAABLIgaAAIAAjjIAaAAIAACDIAJAAIA3hBIAgAAIhDBKIBGBXg");
	this.shape_605.setTransform(211.1,121.4);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_606.setTransform(197.425,124.55);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_607.setTransform(180.875,124.725);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#FF0000").s().p("AhIBwIAAjcIAaAAIAAAdQAFgPAMgJQANgIAWgBQAbABAOAKQAPALAGATQAFASAAAaQAAAWgFASQgGATgPAMQgOALgbABQgWAAgNgJQgMgIgFgPIAABYgAgbhTQgLAIgEAOQgFAOAAAUQAAASAFANQAEAOALAIQALAIASgBQAUAAAJgJQAJgIADgOQADgNAAgQQAAgSgDgOQgDgOgKgIQgJgJgTAAQgSAAgLAHg");
	this.shape_608.setTransform(163.275,127.55);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_609.setTransform(136.925,124.7);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_610.setTransform(119.0023,121.4);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_611.setTransform(104.6,122.875);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_612.setTransform(82.6,124.7);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_613.setTransform(68.25,122.875);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_614.setTransform(46.25,124.7);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#FF0000").s().p("AgaBvIgTgCIAAgXIAUAEIAUABQAagBANgMQANgMAAgcIAAgQQgFAOgMAJQgMAHgWABQgbAAgPgLQgPgKgFgTQgGgRAAgZQAAgXAGgSQAFgTAPgLQAPgLAbgBQAPABAKAEQALAEAGAIQAGAHADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgogBIgUgBgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAHQAJAJATAAQASAAALgIQALgGAFgOQAEgNAAgTQAAgSgEgOQgFgOgLgIQgLgHgSAAQgTAAgKAJg");
	this.shape_615.setTransform(26.9737,127.55);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#FF0000").s().p("AgMBoIAAjPIAaAAIAADPg");
	this.shape_616.setTransform(6.1,122.4);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_617.setTransform(467.425,74.8227);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#FF0000").s().p("AAeByIg6hMIgJAAIAABMIgZAAIAAjjIAZAAIAACDIAKAAIA3hBIAgAAIhDBKIBHBXg");
	this.shape_618.setTransform(454.15,73.85);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAHQgIAJgEANIAABpg");
	this.shape_619.setTransform(440.475,77);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_620.setTransform(423.925,77.175);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#FF0000").s().p("AhIBxIAAjeIAaAAIAAAdQAFgOAMgIQANgKAWABQAbgBAOALQAPALAGASQAFAUAAAYQAAAXgFASQgGATgPALQgOAMgbABQgWAAgNgJQgMgJgFgOIAABZgAgbhTQgLAIgEAOQgFAOAAATQAAATAFANQAEAOALAIQALAHASAAQAUABAJgKQAJgJADgNQADgOAAgQQAAgRgDgOQgDgOgKgJQgJgIgTAAQgSAAgLAHg");
	this.shape_621.setTransform(406.325,80);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAHQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_622.setTransform(379.975,77.15);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_623.setTransform(362.0523,73.85);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLAAgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_624.setTransform(347.65,75.325);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAHQgIAJgEANIAABpg");
	this.shape_625.setTransform(330.325,77);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_626.setTransform(314.3,77.15);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQARgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_627.setTransform(288.05,77.15);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_628.setTransform(269.5,77.15);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#FF0000").s().p("Ag/BRIAAgVIBbh1IAAgCIhTAAIAAgVIByAAIAAAUIhbB1IAAABIBgAAIAAAXg");
	this.shape_629.setTransform(252.75,77.15);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAHQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_630.setTransform(228.675,77.15);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_631.setTransform(210.7523,73.85);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgFgLABgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQABAGAGADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_632.setTransform(196.35,75.325);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_633.setTransform(174.35,77.15);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLAAgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_634.setTransform(160,75.325);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_635.setTransform(138,77.15);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#FF0000").s().p("AgaBwIgTgEIAAgVIAUACIAUABQAaAAANgMQANgMAAgbIAAgRQgFAPgMAHQgMAJgWgBQgbAAgPgKQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPAAAKAEQALAEAGAIQAGAHADAKIAAgfIAaAAIAACWQAAAigTATQgUASgoABIgUgBgAgehRQgJAIgDAOQgCAOAAAQQAAARADANQADANAJAJQAJAHATABQASAAALgIQALgHAFgNQAEgNAAgTQAAgTgEgOQgFgNgLgIQgLgHgSAAQgTAAgKAJg");
	this.shape_636.setTransform(118.7237,80);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#FF0000").s().p("AgrBMQgMgHgEgMQgFgMAAgPIAAhwIAaAAIAABmQgBAMADAJQACAJAHAFQAHAEANABQAJAAAJgCQAJgDAIgGQAHgIAFgOIAAhtIAZAAIAAChIgVAAIgEgXQgFALgIAFQgIAGgKACQgJACgKABQgVgBgMgGg");
	this.shape_637.setTransform(92.675,77.3);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_638.setTransform(74.25,77.15);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgEAFgIQAGgIAEgNIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_639.setTransform(57.1,80.15);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_640.setTransform(32.2,77.15);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_641.setTransform(12.775,74.8488);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_642.setTransform(490.975,27.2727);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAJgDAGgJQAGgIAEgOIhBigIAcAAIAxCFIABAAIAviFIAaAAIg6CcQgHAUgJAPQgIAOgOAIQgPAIgXAAg");
	this.shape_643.setTransform(476.3,32.6);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_644.setTransform(458.575,29.625);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_645.setTransform(439.875,27.2988);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAPADIARADIAPABQASgBAKgFQAJgGAAgOQAAgJgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgEQgKgHgEgIQgEgJABgOQAAgTAOgMQAPgMAbAAQAMAAAMABQALABAHADIgDAWQgGgDgLgCQgKgBgLAAQgQgBgJAFQgIAGgBANQABAIACAFQACAEAIADQAGADAMACQASAFAMAFQAKAFAGAJQAEAKAAAQQAAAXgPAMQgRALgdAAIgQgBg");
	this.shape_646.setTransform(414.25,29.55);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#FF0000").s().p("AgUAmIAIgZQAEgNACgNQACgNABgLIAYAAQAAAKgEAOQgDANgFANQgFAOgFALg");
	this.shape_647.setTransform(403,18.75);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_648.setTransform(389.7023,29.45);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_649.setTransform(371.725,29.6);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_650.setTransform(358.425,29.45);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_651.setTransform(341.7231,26.45);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC8QAAALADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_652.setTransform(329.425,26.4);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDAAgKQAAgKADgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_653.setTransform(320.05,26.575);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_654.setTransform(306.7523,26.3);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#FF0000").s().p("AgQBnQgRgFgNgMQgMgLgHgVQgHgVAAghQAAgnAMgXQAMgYAWgKQAWgKAdAAQAOAAALACQALABAJADIAAAZIgUgFQgLgCgNAAQgYAAgPAHQgPAIgIASQgHATAAAeQAAAgAHATQAHASAPAHQAOAHAXAAQAOAAAMgCQAMgCAMgEIAAAXQgJAEgNADQgNACgQAAQgVAAgRgEg");
	this.shape_655.setTransform(288.925,27.2988);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_656.setTransform(262.5523,29.45);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQARgIAWAAQAYAAARAIQAQAHAJATQAJASAAAfQAAAggJASQgJATgQAIQgRAHgYAAQgWAAgRgHgAAdA5QAKgGAFgOQADgNAAgYQABgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgFANABAXQAAAYAEANQAFAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_657.setTransform(243.95,29.6);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAFgNAAgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_658.setTransform(217.7,29.6);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_659.setTransform(198.4731,26.45);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgLAAgRIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_660.setTransform(172.425,29.75);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_661.setTransform(154,29.6);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAJgDAGgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_662.setTransform(136.85,32.6);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAFgNAAgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_663.setTransform(111.95,29.6);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_664.setTransform(92.7231,26.45);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_665.setTransform(70.85,27.775);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_666.setTransform(56.025,29.625);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_667.setTransform(38.2523,26.3);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_668.setTransform(15.475,27.3);

	var maskedShapeInstanceList = [this.shape_446,this.shape_447,this.shape_448,this.shape_449,this.shape_450,this.shape_451,this.shape_452,this.shape_453,this.shape_454,this.shape_455,this.shape_456,this.shape_457,this.shape_458,this.shape_459,this.shape_460,this.shape_461,this.shape_462,this.shape_463,this.shape_464,this.shape_465,this.shape_466,this.shape_467,this.shape_468,this.shape_469,this.shape_470,this.shape_471,this.shape_472,this.shape_473,this.shape_474,this.shape_475,this.shape_476,this.shape_477,this.shape_478,this.shape_479,this.shape_480,this.shape_481,this.shape_482,this.shape_483,this.shape_484,this.shape_485,this.shape_486,this.shape_487,this.shape_488,this.shape_489,this.shape_490,this.shape_491,this.shape_492,this.shape_493,this.shape_494,this.shape_495,this.shape_496,this.shape_497,this.shape_498,this.shape_499,this.shape_500,this.shape_501,this.shape_502,this.shape_503,this.shape_504,this.shape_505,this.shape_506,this.shape_507,this.shape_508,this.shape_509,this.shape_510,this.shape_511,this.shape_512,this.shape_513,this.shape_514,this.shape_515,this.shape_516,this.shape_517,this.shape_518,this.shape_519,this.shape_520,this.shape_521,this.shape_522,this.shape_523,this.shape_524,this.shape_525,this.shape_526,this.shape_527,this.shape_528,this.shape_529,this.shape_530,this.shape_531,this.shape_532,this.shape_533,this.shape_534,this.shape_535,this.shape_536,this.shape_537,this.shape_538,this.shape_539,this.shape_540,this.shape_541,this.shape_542,this.shape_543,this.shape_544,this.shape_545,this.shape_546,this.shape_547,this.shape_548,this.shape_549,this.shape_550,this.shape_551,this.shape_552,this.shape_553,this.shape_554,this.shape_555,this.shape_556,this.shape_557,this.shape_558,this.shape_559,this.shape_560,this.shape_561,this.shape_562,this.shape_563,this.shape_564,this.shape_565,this.shape_566,this.shape_567,this.shape_568,this.shape_569,this.shape_570,this.shape_571,this.shape_572,this.shape_573,this.shape_574,this.shape_575,this.shape_576,this.shape_577,this.shape_578,this.shape_579,this.shape_580,this.shape_581,this.shape_582,this.shape_583,this.shape_584,this.shape_585,this.shape_586,this.shape_587,this.shape_588,this.shape_589,this.shape_590,this.shape_591,this.shape_592,this.shape_593,this.shape_594,this.shape_595,this.shape_596,this.shape_597,this.shape_598,this.shape_599,this.shape_600,this.shape_601,this.shape_602,this.shape_603,this.shape_604,this.shape_605,this.shape_606,this.shape_607,this.shape_608,this.shape_609,this.shape_610,this.shape_611,this.shape_612,this.shape_613,this.shape_614,this.shape_615,this.shape_616,this.shape_617,this.shape_618,this.shape_619,this.shape_620,this.shape_621,this.shape_622,this.shape_623,this.shape_624,this.shape_625,this.shape_626,this.shape_627,this.shape_628,this.shape_629,this.shape_630,this.shape_631,this.shape_632,this.shape_633,this.shape_634,this.shape_635,this.shape_636,this.shape_637,this.shape_638,this.shape_639,this.shape_640,this.shape_641,this.shape_642,this.shape_643,this.shape_644,this.shape_645,this.shape_646,this.shape_647,this.shape_648,this.shape_649,this.shape_650,this.shape_651,this.shape_652,this.shape_653,this.shape_654,this.shape_655,this.shape_656,this.shape_657,this.shape_658,this.shape_659,this.shape_660,this.shape_661,this.shape_662,this.shape_663,this.shape_664,this.shape_665,this.shape_666,this.shape_667,this.shape_668];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446}]},697).wait(440));

	// 图层_7 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_584 = new cjs.Graphics().p("AhKVMIAAn0ICVAAIAAH0g");
	var mask_3_graphics_585 = new cjs.Graphics().p("Ah2D6IAAnzIDtAAIAAHzg");
	var mask_3_graphics_586 = new cjs.Graphics().p("AiiD6IAAnzIFFAAIAAHzg");
	var mask_3_graphics_587 = new cjs.Graphics().p("AjOD6IAAnzIGdAAIAAHzg");
	var mask_3_graphics_588 = new cjs.Graphics().p("Aj6D6IAAnzIH1AAIAAHzg");
	var mask_3_graphics_589 = new cjs.Graphics().p("AkmD6IAAnzIJNAAIAAHzg");
	var mask_3_graphics_590 = new cjs.Graphics().p("AlRD6IAAnzIKkAAIAAHzg");
	var mask_3_graphics_591 = new cjs.Graphics().p("Al+D6IAAnzIL8AAIAAHzg");
	var mask_3_graphics_592 = new cjs.Graphics().p("AmpD6IAAnzINTAAIAAHzg");
	var mask_3_graphics_593 = new cjs.Graphics().p("AnVD6IAAnzIOrAAIAAHzg");
	var mask_3_graphics_594 = new cjs.Graphics().p("AoBD6IAAnzIQDAAIAAHzg");
	var mask_3_graphics_595 = new cjs.Graphics().p("AotD6IAAnzIRbAAIAAHzg");
	var mask_3_graphics_596 = new cjs.Graphics().p("ApZD6IAAnzISzAAIAAHzg");
	var mask_3_graphics_597 = new cjs.Graphics().p("AqFD6IAAnzIULAAIAAHzg");
	var mask_3_graphics_598 = new cjs.Graphics().p("AqxD6IAAnzIVjAAIAAHzg");
	var mask_3_graphics_599 = new cjs.Graphics().p("ArdD6IAAnzIW7AAIAAHzg");
	var mask_3_graphics_600 = new cjs.Graphics().p("AsJD6IAAnzIYTAAIAAHzg");
	var mask_3_graphics_601 = new cjs.Graphics().p("As0D6IAAnzIZpAAIAAHzg");
	var mask_3_graphics_602 = new cjs.Graphics().p("AthD6IAAnzIbDAAIAAHzg");
	var mask_3_graphics_603 = new cjs.Graphics().p("AuMD6IAAnzIcZAAIAAHzg");
	var mask_3_graphics_604 = new cjs.Graphics().p("Au4D6IAAnzIdxAAIAAHzg");
	var mask_3_graphics_605 = new cjs.Graphics().p("AvkD6IAAnzIfJAAIAAHzg");
	var mask_3_graphics_606 = new cjs.Graphics().p("AwQD6IAAnzMAghAAAIAAHzg");
	var mask_3_graphics_607 = new cjs.Graphics().p("Aw8D6IAAnzMAh5AAAIAAHzg");
	var mask_3_graphics_608 = new cjs.Graphics().p("AxoD6IAAnzMAjRAAAIAAHzg");
	var mask_3_graphics_609 = new cjs.Graphics().p("AyUD6IAAnzMAkpAAAIAAHzg");
	var mask_3_graphics_610 = new cjs.Graphics().p("AzAD6IAAnzMAmBAAAIAAHzg");
	var mask_3_graphics_611 = new cjs.Graphics().p("AzsD6IAAnzMAnYAAAIAAHzg");
	var mask_3_graphics_612 = new cjs.Graphics().p("A0YD6IAAnzMAoxAAAIAAHzg");
	var mask_3_graphics_613 = new cjs.Graphics().p("A1DD6IAAnzMAqHAAAIAAHzg");
	var mask_3_graphics_614 = new cjs.Graphics().p("A1wD6IAAnzMArgAAAIAAHzg");
	var mask_3_graphics_615 = new cjs.Graphics().p("A1wD6IAAnzMArgAAAIAAHzg");
	var mask_3_graphics_616 = new cjs.Graphics().p("A1wD6IAAnzMArgAAAIAAHzg");
	var mask_3_graphics_617 = new cjs.Graphics().p("A1wD6IAAnzMArgAAAIAAHzg");
	var mask_3_graphics_618 = new cjs.Graphics().p("A1wD6IAAnzMArgAAAIAAHzg");
	var mask_3_graphics_619 = new cjs.Graphics().p("A1wD6IAAnzMArgAAAIAAHzg");
	var mask_3_graphics_620 = new cjs.Graphics().p("A1wD6IAAnzMArgAAAIAAHzg");
	var mask_3_graphics_621 = new cjs.Graphics().p("A1wD6IAAnzMArgAAAIAAHzg");
	var mask_3_graphics_622 = new cjs.Graphics().p("A1wD6IAAnzMArgAAAIAAHzg");
	var mask_3_graphics_623 = new cjs.Graphics().p("A1wD6IAAnzMArgAAAIAAHzg");
	var mask_3_graphics_624 = new cjs.Graphics().p("A1wD6IAAnzMArgAAAIAAHzg");
	var mask_3_graphics_625 = new cjs.Graphics().p("A1wD6IAAnzMArgAAAIAAHzg");
	var mask_3_graphics_626 = new cjs.Graphics().p("A1wD6IAAnzMArgAAAIAAHzg");
	var mask_3_graphics_627 = new cjs.Graphics().p("A1wD6IAAnzMArgAAAIAAHzg");
	var mask_3_graphics_628 = new cjs.Graphics().p("A2JD6IAAnzMAsTAAAIAAHzg");
	var mask_3_graphics_629 = new cjs.Graphics().p("A2jD6IAAnzMAtHAAAIAAHzg");
	var mask_3_graphics_630 = new cjs.Graphics().p("A28D6IAAnzMAt5AAAIAAHzg");
	var mask_3_graphics_631 = new cjs.Graphics().p("A3WD6IAAnzMAutAAAIAAHzg");
	var mask_3_graphics_632 = new cjs.Graphics().p("A3vD6IAAnzMAvfAAAIAAHzg");
	var mask_3_graphics_633 = new cjs.Graphics().p("A4JD6IAAnzMAwTAAAIAAHzg");
	var mask_3_graphics_634 = new cjs.Graphics().p("A4iD6IAAnzMAxFAAAIAAHzg");
	var mask_3_graphics_635 = new cjs.Graphics().p("A48D6IAAnzMAx5AAAIAAHzg");
	var mask_3_graphics_636 = new cjs.Graphics().p("A5WD6IAAnzMAytAAAIAAHzg");
	var mask_3_graphics_637 = new cjs.Graphics().p("A5vD6IAAnzMAzfAAAIAAHzg");
	var mask_3_graphics_638 = new cjs.Graphics().p("A6JD6IAAnzMA0SAAAIAAHzg");
	var mask_3_graphics_639 = new cjs.Graphics().p("A6iD6IAAnzMA1FAAAIAAHzg");
	var mask_3_graphics_640 = new cjs.Graphics().p("A68D6IAAnzMA15AAAIAAHzg");
	var mask_3_graphics_641 = new cjs.Graphics().p("A7VD6IAAnzMA2rAAAIAAHzg");
	var mask_3_graphics_642 = new cjs.Graphics().p("A7vD6IAAnzMA3fAAAIAAHzg");
	var mask_3_graphics_643 = new cjs.Graphics().p("A8JD6IAAnzMA4TAAAIAAHzg");
	var mask_3_graphics_644 = new cjs.Graphics().p("A8iD6IAAnzMA5FAAAIAAHzg");
	var mask_3_graphics_645 = new cjs.Graphics().p("A87D6IAAnzMA53AAAIAAHzg");
	var mask_3_graphics_646 = new cjs.Graphics().p("A9VD6IAAnzMA6rAAAIAAHzg");
	var mask_3_graphics_647 = new cjs.Graphics().p("A9uD6IAAnzMA7eAAAIAAHzg");
	var mask_3_graphics_648 = new cjs.Graphics().p("A+ID6IAAnzMA8RAAAIAAHzg");
	var mask_3_graphics_649 = new cjs.Graphics().p("A+hD6IAAnzMA9EAAAIAAHzg");
	var mask_3_graphics_650 = new cjs.Graphics().p("A+7D6IAAnzMA93AAAIAAHzg");
	var mask_3_graphics_651 = new cjs.Graphics().p("A/VD6IAAnzMA+rAAAIAAHzg");
	var mask_3_graphics_652 = new cjs.Graphics().p("A/uD6IAAnzMA/dAAAIAAHzg");
	var mask_3_graphics_653 = new cjs.Graphics().p("EggIAD6IAAnzMBARAAAIAAHzg");
	var mask_3_graphics_654 = new cjs.Graphics().p("EgghAD6IAAnzMBBDAAAIAAHzg");
	var mask_3_graphics_655 = new cjs.Graphics().p("Egg7AD6IAAnzMBB3AAAIAAHzg");
	var mask_3_graphics_656 = new cjs.Graphics().p("EghUAD6IAAnzMBCpAAAIAAHzg");
	var mask_3_graphics_657 = new cjs.Graphics().p("EghuAD6IAAnzMBDdAAAIAAHzg");
	var mask_3_graphics_658 = new cjs.Graphics().p("EgiIAD6IAAnzMBEQAAAIAAHzg");
	var mask_3_graphics_659 = new cjs.Graphics().p("EgihAD6IAAnzMBFDAAAIAAHzg");
	var mask_3_graphics_660 = new cjs.Graphics().p("Egi7AD6IAAnzMBF3AAAIAAHzg");
	var mask_3_graphics_661 = new cjs.Graphics().p("EgjUAD6IAAnzMBGpAAAIAAHzg");
	var mask_3_graphics_662 = new cjs.Graphics().p("EgjuAD6IAAnzMBHdAAAIAAHzg");
	var mask_3_graphics_663 = new cjs.Graphics().p("EgkHAD6IAAnzMBIPAAAIAAHzg");
	var mask_3_graphics_664 = new cjs.Graphics().p("EgkhAD6IAAnzMBJDAAAIAAHzg");
	var mask_3_graphics_665 = new cjs.Graphics().p("Egk6AD6IAAnzMBJ1AAAIAAHzg");
	var mask_3_graphics_666 = new cjs.Graphics().p("EglUAD6IAAnzMBKpAAAIAAHzg");
	var mask_3_graphics_667 = new cjs.Graphics().p("EgluAD6IAAnzMBLdAAAIAAHzg");
	var mask_3_graphics_668 = new cjs.Graphics().p("EgmHAD6IAAnzMBMPAAAIAAHzg");
	var mask_3_graphics_669 = new cjs.Graphics().p("EgmhAD6IAAnzMBNCAAAIAAHzg");
	var mask_3_graphics_670 = new cjs.Graphics().p("Egm6AD6IAAnzMBN1AAAIAAHzg");
	var mask_3_graphics_671 = new cjs.Graphics().p("EgnUAD6IAAnzMBOpAAAIAAHzg");
	var mask_3_graphics_672 = new cjs.Graphics().p("EgntAD6IAAnzMBPbAAAIAAHzg");
	var mask_3_graphics_673 = new cjs.Graphics().p("EgoHAD6IAAnzMBQPAAAIAAHzg");
	var mask_3_graphics_674 = new cjs.Graphics().p("EgohAD6IAAnzMBRDAAAIAAHzg");
	var mask_3_graphics_675 = new cjs.Graphics().p("Ego6AD6IAAnzMBR1AAAIAAHzg");
	var mask_3_graphics_676 = new cjs.Graphics().p("EgpUAD6IAAnzMBSpAAAIAAHzg");
	var mask_3_graphics_677 = new cjs.Graphics().p("EgptAD6IAAnzMBTbAAAIAAHzg");
	var mask_3_graphics_678 = new cjs.Graphics().p("EgqGAD6IAAnzMBUOAAAIAAHzg");
	var mask_3_graphics_679 = new cjs.Graphics().p("EgqgAD6IAAnzMBVBAAAIAAHzg");
	var mask_3_graphics_680 = new cjs.Graphics().p("Egq5AD6IAAnzMBVzAAAIAAHzg");
	var mask_3_graphics_681 = new cjs.Graphics().p("EgrTAD6IAAnzMBWnAAAIAAHzg");
	var mask_3_graphics_682 = new cjs.Graphics().p("EgrtAUkIAAn0MBXbAAAIAAH0g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(584).to({graphics:mask_3_graphics_584,x:-7.5,y:135.6255}).wait(1).to({graphics:mask_3_graphics_585,x:-3.15,y:246.1}).wait(1).to({graphics:mask_3_graphics_586,x:1.225,y:246}).wait(1).to({graphics:mask_3_graphics_587,x:5.6,y:245.85}).wait(1).to({graphics:mask_3_graphics_588,x:9.975,y:245.75}).wait(1).to({graphics:mask_3_graphics_589,x:14.325,y:245.6}).wait(1).to({graphics:mask_3_graphics_590,x:18.7,y:245.5}).wait(1).to({graphics:mask_3_graphics_591,x:23.05,y:245.35}).wait(1).to({graphics:mask_3_graphics_592,x:27.425,y:245.2}).wait(1).to({graphics:mask_3_graphics_593,x:31.8,y:245.1}).wait(1).to({graphics:mask_3_graphics_594,x:36.175,y:244.95}).wait(1).to({graphics:mask_3_graphics_595,x:40.525,y:244.85}).wait(1).to({graphics:mask_3_graphics_596,x:44.9,y:244.7}).wait(1).to({graphics:mask_3_graphics_597,x:49.25,y:244.6}).wait(1).to({graphics:mask_3_graphics_598,x:53.625,y:244.45}).wait(1).to({graphics:mask_3_graphics_599,x:58.025,y:244.35}).wait(1).to({graphics:mask_3_graphics_600,x:62.375,y:244.2}).wait(1).to({graphics:mask_3_graphics_601,x:66.75,y:244.05}).wait(1).to({graphics:mask_3_graphics_602,x:71.1,y:243.95}).wait(1).to({graphics:mask_3_graphics_603,x:75.475,y:243.8}).wait(1).to({graphics:mask_3_graphics_604,x:79.825,y:243.7}).wait(1).to({graphics:mask_3_graphics_605,x:84.2,y:243.55}).wait(1).to({graphics:mask_3_graphics_606,x:88.575,y:243.45}).wait(1).to({graphics:mask_3_graphics_607,x:92.95,y:243.3}).wait(1).to({graphics:mask_3_graphics_608,x:97.3,y:243.15}).wait(1).to({graphics:mask_3_graphics_609,x:101.675,y:243.05}).wait(1).to({graphics:mask_3_graphics_610,x:106.025,y:242.9}).wait(1).to({graphics:mask_3_graphics_611,x:110.4,y:242.8}).wait(1).to({graphics:mask_3_graphics_612,x:114.775,y:242.65}).wait(1).to({graphics:mask_3_graphics_613,x:119.15,y:242.55}).wait(1).to({graphics:mask_3_graphics_614,x:123.5,y:242.4}).wait(1).to({graphics:mask_3_graphics_615,x:123.5,y:242.4}).wait(1).to({graphics:mask_3_graphics_616,x:123.5,y:242.4}).wait(1).to({graphics:mask_3_graphics_617,x:123.5,y:242.4}).wait(1).to({graphics:mask_3_graphics_618,x:123.5,y:242.4}).wait(1).to({graphics:mask_3_graphics_619,x:123.5,y:242.4}).wait(1).to({graphics:mask_3_graphics_620,x:123.5,y:242.4}).wait(1).to({graphics:mask_3_graphics_621,x:123.5,y:242.4}).wait(1).to({graphics:mask_3_graphics_622,x:123.5,y:242.4}).wait(1).to({graphics:mask_3_graphics_623,x:123.5,y:242.4}).wait(1).to({graphics:mask_3_graphics_624,x:123.5,y:242.4}).wait(1).to({graphics:mask_3_graphics_625,x:123.5,y:242.4}).wait(1).to({graphics:mask_3_graphics_626,x:123.5,y:242.4}).wait(1).to({graphics:mask_3_graphics_627,x:123.5,y:242.4}).wait(1).to({graphics:mask_3_graphics_628,x:126.05,y:242.3}).wait(1).to({graphics:mask_3_graphics_629,x:128.575,y:242.25}).wait(1).to({graphics:mask_3_graphics_630,x:131.125,y:242.15}).wait(1).to({graphics:mask_3_graphics_631,x:133.675,y:242.1}).wait(1).to({graphics:mask_3_graphics_632,x:136.225,y:242}).wait(1).to({graphics:mask_3_graphics_633,x:138.725,y:241.95}).wait(1).to({graphics:mask_3_graphics_634,x:141.275,y:241.85}).wait(1).to({graphics:mask_3_graphics_635,x:143.825,y:241.8}).wait(1).to({graphics:mask_3_graphics_636,x:146.35,y:241.7}).wait(1).to({graphics:mask_3_graphics_637,x:148.9,y:241.65}).wait(1).to({graphics:mask_3_graphics_638,x:151.45,y:241.55}).wait(1).to({graphics:mask_3_graphics_639,x:154,y:241.5}).wait(1).to({graphics:mask_3_graphics_640,x:156.525,y:241.4}).wait(1).to({graphics:mask_3_graphics_641,x:159.075,y:241.35}).wait(1).to({graphics:mask_3_graphics_642,x:161.625,y:241.25}).wait(1).to({graphics:mask_3_graphics_643,x:164.15,y:241.2}).wait(1).to({graphics:mask_3_graphics_644,x:166.675,y:241.1}).wait(1).to({graphics:mask_3_graphics_645,x:169.225,y:241.05}).wait(1).to({graphics:mask_3_graphics_646,x:171.75,y:240.95}).wait(1).to({graphics:mask_3_graphics_647,x:174.3,y:240.9}).wait(1).to({graphics:mask_3_graphics_648,x:176.85,y:240.8}).wait(1).to({graphics:mask_3_graphics_649,x:179.4,y:240.75}).wait(1).to({graphics:mask_3_graphics_650,x:181.925,y:240.65}).wait(1).to({graphics:mask_3_graphics_651,x:184.475,y:240.6}).wait(1).to({graphics:mask_3_graphics_652,x:187.025,y:240.5}).wait(1).to({graphics:mask_3_graphics_653,x:189.55,y:240.45}).wait(1).to({graphics:mask_3_graphics_654,x:192.1,y:240.35}).wait(1).to({graphics:mask_3_graphics_655,x:194.625,y:240.3}).wait(1).to({graphics:mask_3_graphics_656,x:197.175,y:240.2}).wait(1).to({graphics:mask_3_graphics_657,x:199.7,y:240.15}).wait(1).to({graphics:mask_3_graphics_658,x:202.25,y:240.05}).wait(1).to({graphics:mask_3_graphics_659,x:204.8,y:240}).wait(1).to({graphics:mask_3_graphics_660,x:207.325,y:239.9}).wait(1).to({graphics:mask_3_graphics_661,x:209.875,y:239.85}).wait(1).to({graphics:mask_3_graphics_662,x:212.425,y:239.75}).wait(1).to({graphics:mask_3_graphics_663,x:214.975,y:239.7}).wait(1).to({graphics:mask_3_graphics_664,x:217.5,y:239.6}).wait(1).to({graphics:mask_3_graphics_665,x:220.05,y:239.55}).wait(1).to({graphics:mask_3_graphics_666,x:222.575,y:239.45}).wait(1).to({graphics:mask_3_graphics_667,x:225.1,y:239.4}).wait(1).to({graphics:mask_3_graphics_668,x:227.65,y:239.3}).wait(1).to({graphics:mask_3_graphics_669,x:230.2,y:239.25}).wait(1).to({graphics:mask_3_graphics_670,x:232.725,y:239.15}).wait(1).to({graphics:mask_3_graphics_671,x:235.275,y:239.1}).wait(1).to({graphics:mask_3_graphics_672,x:237.825,y:239}).wait(1).to({graphics:mask_3_graphics_673,x:240.375,y:238.95}).wait(1).to({graphics:mask_3_graphics_674,x:242.9,y:238.85}).wait(1).to({graphics:mask_3_graphics_675,x:245.45,y:238.8}).wait(1).to({graphics:mask_3_graphics_676,x:248,y:238.7}).wait(1).to({graphics:mask_3_graphics_677,x:250.5,y:238.65}).wait(1).to({graphics:mask_3_graphics_678,x:253.05,y:238.55}).wait(1).to({graphics:mask_3_graphics_679,x:255.6,y:238.5}).wait(1).to({graphics:mask_3_graphics_680,x:258.15,y:238.4}).wait(1).to({graphics:mask_3_graphics_681,x:260.675,y:238.35}).wait(1).to({graphics:mask_3_graphics_682,x:263.2254,y:131.6255}).wait(455));

	// 图层_31
	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_669.setTransform(391.075,386.5227);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_670.setTransform(379.2,387.025);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_671.setTransform(364.375,388.875);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_672.setTransform(346.6023,385.55);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_673.setTransform(332.2,387.025);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAAQIBVgGQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_674.setTransform(310.825,388.85);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#FF0000").s().p("AAfByIg7hLIgJAAIAABLIgaAAIAAjjIAaAAIAACDIAKAAIA3hBIAgAAIhDBKIBHBXg");
	this.shape_675.setTransform(295.65,385.55);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#FF0000").s().p("AgNBvIAAihIAaAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_676.setTransform(282.6,385.825);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#FF0000").s().p("AgQBqQgKgHAAgTIAAjCIAaAAIAAC8QAAAMADADQADAFAIgBIAGAAIAHgBIAAAVIgIABIgJABQgRAAgJgJg");
	this.shape_677.setTransform(275.325,385.65);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_678.setTransform(257.15,387.025);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_679.setTransform(242.325,388.875);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_680.setTransform(224.5523,385.55);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_681.setTransform(197.725,388.875);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgYAAIAAgWIAYAAIAAgmIAZAAIAAAmIAoAAIAAAWIgoAAIAABYQAAANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_682.setTransform(176.4,387.025);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKABQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_683.setTransform(162.1523,388.7);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_684.setTransform(143.025,388.875);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_685.setTransform(122.075,388.85);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_686.setTransform(92.675,389);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAJgSAQgHQARgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgKAFgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_687.setTransform(74.25,388.85);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAKgFAFgIQAGgJAEgNIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_688.setTransform(57.1,391.85);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_689.setTransform(32.2,388.85);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_690.setTransform(12.775,386.5488);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_691.setTransform(564.025,347.6969);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_692.setTransform(550.2523,338);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#FF0000").s().p("AgXBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAOAAAKACQALABAHADIAAAYIgTgGQgKgBgNAAQgQAAgLAFQgKAFgEAOQgFANAAAYQgBAWAGAOQAEANAKAGQALAGARgBQAMAAALgCQAKgBAJgDIAAAXIgLADIgQACIgQABQgXAAgQgIg");
	this.shape_693.setTransform(533.7,341.3);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#FF0000").s().p("AgrBMQgMgHgEgMQgFgMAAgPIAAhwIAaAAIAABmQgBAMADAKQACAIAHAFQAHAEANAAQAJABAJgCQAJgDAIgGQAHgIAFgOIAAhtIAZAAIAAChIgVAAIgEgXQgFALgIAFQgIAGgKACQgJACgKABQgVgBgMgGg");
	this.shape_694.setTransform(516.775,341.45);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#FF0000").s().p("ABWBSIAAhlQAAgTgGgKQgHgLgSAAQgKAAgIADQgIACgGAHQgHAFgDAMIAAACIAABuIgZAAIAAhlQAAgTgGgKQgGgLgSAAQgKAAgIADQgIACgGAHQgHAFgEANIAABvIgaAAIAAihIAaAAIAAAWQAIgOAMgGQAMgEAPAAQATgBAMAIQAKAGAFANQAFgKAIgHQAIgFAKgDQAKgBAKAAQASgBAMAIQAMAGAFAMQAGAMAAAQIAABug");
	this.shape_695.setTransform(493.875,341.15);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_696.setTransform(463,341.3);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#FF0000").s().p("AgYBSIgRgBIgMgDIAAgWIANADIARACIARABQARAAAJgFQAKgFAAgPQAAgJgCgFQgDgGgIgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJAAgNQAAgVAPgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgHgDgKgCQgLgCgLAAQgQAAgIAGQgJAEAAAOQAAAIACAEQADAFAGADQAHADALADQATADALAHQAMAEAEAJQAGAKAAAPQgBAZgQALQgPAMgdgBIgSgBg");
	this.shape_697.setTransform(446.6,341.25);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgYAAIAAgWIAYAAIAAgmIAZAAIAAAmIAoAAIAAAWIgoAAIAABYQAAANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_698.setTransform(426.6,339.475);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#FF0000").s().p("AgNBvIAAihIAaAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_699.setTransform(417.6,338.275);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_700.setTransform(397.175,341.3);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#FF0000").s().p("AgOBRIg9ihIAaAAIAxCHIABAAIAwiHIAbAAIg9Chg");
	this.shape_701.setTransform(380.6,341.3);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgFANABAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_702.setTransform(363.4,341.3);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#FF0000").s().p("AgQBqQgKgIAAgSIAAjCIAaAAIAAC7QAAANADADQADAEAIAAIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgJg");
	this.shape_703.setTransform(350.925,338.1);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_704.setTransform(333.75,339);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_705.setTransform(317.425,347.6969);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgEAFgIQAGgIAEgNIhBihIAcAAIAxCGIABAAIAviGIAaAAIg6CbQgIAVgIAPQgIAOgOAIQgPAIgXAAg");
	this.shape_706.setTransform(305,344.3);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgYAAIAAgWIAYAAIAAgmIAYAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAIgBIAAAWIgJABIgJAAQgRAAgKgEg");
	this.shape_707.setTransform(292,339.475);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_708.setTransform(281.9,339.475);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_709.setTransform(268.225,341.3);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAIQgIAIgEANIAABpg");
	this.shape_710.setTransform(254.925,341.15);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#FF0000").s().p("AhIBxIAAjeIAaAAIAAAdQAFgOAMgIQANgKAWABQAbgBAOALQAPALAGASQAFAUAAAYQAAAXgFASQgGATgPALQgOAMgbABQgWAAgNgJQgMgJgFgOIAABZgAgbhTQgLAIgEAOQgFAOAAATQAAATAFANQAEAOALAIQALAHASAAQAUABAJgKQAJgJADgNQADgNAAgRQAAgRgDgOQgDgOgKgJQgJgIgTAAQgSAAgLAHg");
	this.shape_711.setTransform(239.125,344.15);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_712.setTransform(212.15,341.3);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAOADIASACIAQABQARAAAKgFQAJgFAAgPQAAgJgCgFQgEgGgHgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJABgNQAAgVAOgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgIgDgJgCQgLgCgLAAQgQAAgJAGQgIAEgBAOQAAAIADAEQACAFAIADQAGADAMADQASADALAHQAMAEAEAJQAFAKABAPQgBAZgPALQgQAMgdgBIgRgBg");
	this.shape_713.setTransform(195.75,341.25);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAOADIASACIAQABQARAAAKgFQAJgFAAgPQAAgJgCgFQgEgGgHgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJABgNQAAgVAOgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgIgDgJgCQgLgCgLAAQgQAAgJAGQgIAEgBAOQAAAIADAEQACAFAIADQAGADAMADQASADALAHQAMAEAEAJQAFAKABAPQgBAZgPALQgQAMgdgBIgRgBg");
	this.shape_714.setTransform(173.7,341.25);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#FF0000").s().p("AgUAmIAIgZQAEgNACgMQACgOABgLIAYAAQAAALgEANQgDANgFAOQgFANgFALg");
	this.shape_715.setTransform(162.45,330.45);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_716.setTransform(153.3,339.475);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_717.setTransform(144.2,339);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#FF0000").s().p("AgNBmQgFgEAAgMQAAgMAFgEQADgDAKAAQAKAAAFADQAEAEAAAMQAAAMgEAEQgFADgKAAQgKAAgDgDgAgJArIgEiTIAcAAIgFCTg");
	this.shape_718.setTransform(127.05,339.1);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_719.setTransform(112.4,341.3);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#FF0000").s().p("AguBoQgPgKgFgTQgGgSAAgaQAAgWAGgSQAFgTAPgMQAPgLAaAAQAXAAAMAIQAMAJAFAOIAAheIAaAAIAADiIgWAAIgEgaQgFANgNAIQgNAJgVAAQgaAAgPgMgAgegVQgJAJgDAOQgCAOAAAPQAAARADAPQADAOAJAIQAJAIATAAQASAAALgHQALgIAFgNQAEgOAAgUQAAgSgEgNQgFgOgLgIQgLgIgSAAQgTABgKAIg");
	this.shape_720.setTransform(93.1731,338.15);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_721.setTransform(72.3,339);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#FF0000").s().p("AgaAoQAIgNAHgOQAGgNAEgNQADgOAAgLIAYAAQAAAMgEAPQgGAOgHANQgHAOgGAKg");
	this.shape_722.setTransform(55.25,349.55);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#FF0000").s().p("AgYBSIgRgBIgMgDIAAgWIANADIARACIARABQARAAAJgFQAKgFAAgPQAAgJgCgFQgDgGgIgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJAAgNQAAgVAPgMQAPgLAbAAQAMgBAMACQALACAGACIgBAWQgIgDgJgCQgLgCgLAAQgQAAgIAGQgJAEAAAOQAAAIACAEQADAFAHADQAGADALADQATADALAHQAMAEAEAJQAGAKAAAPQgBAZgQALQgPAMgdgBIgSgBg");
	this.shape_723.setTransform(44.3,341.25);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_724.setTransform(28.425,341.3);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#FF0000").s().p("AgNBoIAAhZIhJh2IAfAAIA3BeIACAAIA3heIAeAAIhKB2IAABZg");
	this.shape_725.setTransform(10.925,339);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_726.setTransform(486.225,291.4227);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgJgEg");
	this.shape_727.setTransform(474.35,291.925);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_728.setTransform(459.525,293.775);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_729.setTransform(441.7523,290.45);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_730.setTransform(412.325,293.75);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_731.setTransform(391.225,293.75);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_732.setTransform(373.3023,293.6);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_733.setTransform(351.675,293.6);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_734.setTransform(335.675,293.9);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_735.setTransform(317.25,293.75);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_736.setTransform(300.1,296.75);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#FF0000").s().p("AgaBvIgTgDIAAgVIAUACIAUABQAaABANgMQANgNAAgcIAAgQQgFAOgMAIQgMAJgWAAQgbAAgPgLQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPgBAKAFQALAEAGAHQAGAIADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgoAAIgUgCgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAIQAJAHATABQASAAALgHQALgIAFgNQAEgMAAgUQAAgSgEgPQgFgNgLgHQgLgIgSAAQgTAAgKAJg");
	this.shape_737.setTransform(274.4737,296.6);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_738.setTransform(256.1523,293.6);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACABAKQgBAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_739.setTransform(242.85,290.725);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_740.setTransform(234.175,293.6);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_741.setTransform(217.625,293.775);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_742.setTransform(200.425,293.75);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_743.setTransform(179.325,293.75);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_744.setTransform(150.525,293.75);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#FF0000").s().p("AAfByIg7hMIgJAAIAABMIgaAAIAAjjIAaAAIAACEIAKAAIA3hCIAgAAIhDBLIBGBWg");
	this.shape_745.setTransform(135.35,290.45);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#FF0000").s().p("AgMBvIAAihIAZAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_746.setTransform(122.3,290.725);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_747.setTransform(115.025,290.55);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_748.setTransform(92.675,293.9);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_749.setTransform(74.25,293.75);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_750.setTransform(57.1,296.75);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAEgNABgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_751.setTransform(32.2,293.75);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_752.setTransform(12.775,291.4488);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_753.setTransform(525.275,243.8727);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAKgFAFgIQAGgJAEgMIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgHAVgJAOQgIAPgOAIQgOAIgYAAg");
	this.shape_754.setTransform(510.6,249.2);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_755.setTransform(492.875,246.225);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_756.setTransform(474.175,243.8988);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#FF0000").s().p("AgXBTIgRgCIgOgDIAAgWIAPADIARACIAQABQARABAKgGQAJgFAAgOQAAgKgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgFQgKgFgEgJQgEgJABgOQAAgUAOgLQAPgMAbgBQAMABAMABQALABAHADIgDAWQgHgDgJgBQgLgCgLAAQgQgBgJAFQgIAFgBAOQAAAIADAFQACAEAIADQAGADAMADQASAEALAFQALAFAGAKQAEAJAAAQQAAAXgPAMQgRAMgcAAIgRgBg");
	this.shape_757.setTransform(448.55,246.15);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#FF0000").s().p("AgUAnIAIgaQAEgNACgMQACgOABgMIAYAAQAAALgEAOQgDANgFANQgFAOgFAMg");
	this.shape_758.setTransform(437.3,235.35);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKACQgJACgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_759.setTransform(424.0023,246.05);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_760.setTransform(406.025,246.2);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_761.setTransform(392.725,246.05);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_762.setTransform(376.0231,243.05);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#FF0000").s().p("AgQBqQgKgHAAgTIAAjCIAaAAIAAC8QAAAMADADQADAFAIgBIAGAAIAHgBIAAAVIgIABIgJABQgRAAgJgJg");
	this.shape_763.setTransform(363.725,243);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACAAAKQAAAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_764.setTransform(354.35,243.175);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_765.setTransform(341.0523,242.9);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#FF0000").s().p("AgQBnQgRgFgNgMQgMgLgHgVQgHgVAAghQAAgnAMgXQAMgYAWgKQAWgKAdAAQAOAAALACQALABAJADIAAAZIgUgFQgLgCgNAAQgYAAgPAHQgPAIgIASQgHATAAAeQAAAgAHATQAHASAPAHQAOAHAXAAQAOAAAMgCQAMgCAMgEIAAAXQgJAEgNADQgNACgQAAQgVAAgRgEg");
	this.shape_766.setTransform(323.225,243.8988);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKACQgJACgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_767.setTransform(296.8523,246.05);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQAQAHAJASQAJATAAAfQAAAggJATQgJASgQAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgEgOgLgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_768.setTransform(278.25,246.2);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_769.setTransform(256.675,246.05);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_770.setTransform(240.125,246.225);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_771.setTransform(222.925,246.2);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_772.setTransform(201.825,246.2);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgPIAAhvIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_773.setTransform(172.425,246.35);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAJgSAQgHQARgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgEgOgLgFQgKgHgSAAQgRAAgKAHQgKAFgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_774.setTransform(154,246.2);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAJgFAGgIQAGgJAEgMIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_775.setTransform(136.85,249.2);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_776.setTransform(111.95,246.2);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_777.setTransform(92.7231,243.05);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_778.setTransform(70.85,244.375);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_779.setTransform(56.025,246.225);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_780.setTransform(38.2523,242.9);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_781.setTransform(15.475,243.9);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#FF0000").s().p("AgNBlQgFgDAAgMQAAgMAFgDQADgFAKABQAKgBAFAFQAEADAAAMQAAAMgEADQgFAEgKAAQgKAAgDgEgAgJArIgEiTIAcAAIgFCTg");
	this.shape_782.setTransform(478.95,170.05);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#FF0000").s().p("AAfByIg7hLIgJAAIAABLIgaAAIAAjjIAaAAIAACEIAKAAIA3hCIAgAAIhDBLIBHBWg");
	this.shape_783.setTransform(467.1,168.95);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_784.setTransform(453.425,172.1);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_785.setTransform(436.875,172.275);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#FF0000").s().p("AguBpQgPgLgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgLgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_786.setTransform(418.3731,169.1);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAPADIARADIAPABQASgBAKgFQAJgGAAgOQAAgJgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgEQgKgHgEgIQgEgJABgOQAAgTAOgMQAPgMAcAAQALAAAMABQALABAHADIgDAWQgGgDgLgCQgKgBgLAAQgQgBgJAFQgIAGgBANQABAIACAFQACAEAIADQAGADAMACQASAFALAFQALAFAGAJQAEAKAAAQQAAAXgPAMQgRALgdAAIgQgBg");
	this.shape_787.setTransform(394.45,172.2);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_788.setTransform(382.15,170.425);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgEIAAAYQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_789.setTransform(368.475,172.25);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#FF0000").s().p("AgaBvIgTgDIAAgVIAUADIAUAAQAaABANgMQANgNAAgcIAAgQQgFAOgMAJQgMAIgWAAQgbAAgPgLQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPgBAKAFQALAEAGAHQAGAIADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgoAAIgUgCgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAIQAJAHATABQASAAALgHQALgIAFgNQAEgMAAgUQAAgSgEgPQgFgNgLgHQgLgIgSAAQgTAAgKAJg");
	this.shape_790.setTransform(349.7737,175.1);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_791.setTransform(327.9,170.425);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACABAKQgBAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_792.setTransform(318.9,169.225);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_793.setTransform(303.925,169.05);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#FF0000").s().p("AgMBvIAAihIAZAAIAAChgAgLhSQgDgDAAgKQAAgKADgCQAEgDAHAAQAIAAAEADQAEACAAAKQAAAKgEADQgEADgIAAQgHAAgEgDg");
	this.shape_794.setTransform(294.55,169.225);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_795.setTransform(285.4,170.425);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_796.setTransform(271.1523,172.1);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgLAAgRIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_797.setTransform(252.575,172.4);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_798.setTransform(232.525,169.05);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_799.setTransform(223.925,169.05);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_800.setTransform(208.725,172.275);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#FF0000").s().p("AgdBrQgMgJgFgOIgDAdIgXAAIAAjjIAaAAIAABeQAFgOAMgIQANgJAWAAQAbAAAOALQAPAKAGASQAFASAAAaQAAAWgFATQgGATgPAMQgOALgbAAQgWAAgNgIgAgbgWQgLAHgEAOQgFANAAAUQAAASAFAOQAEAOALAIQALAIASAAQAUgBAJgIQAJgKADgOQADgOAAgPQAAgSgDgOQgDgNgKgIQgJgJgTAAQgSAAgLAIg");
	this.shape_801.setTransform(191.125,169.1);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_802.setTransform(176.05,170.425);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQAQAHAJATQAJASAAAfQAAAggJATQgJASgQAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAFgOQADgNABgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAEANQAFAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_803.setTransform(161.75,172.25);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_804.setTransform(143.2,172.25);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#FF0000").s().p("AgWBzIAAiMIgbAAIAAgVIAbAAIAAgCQAAgbAHgPQAHgOALgFQAMgFARABIAJAAIAJABIAAAVIgIgBIgKgBQgLAAgHAEQgGAEgCAKQgDAKAAATIAmAAIAAAVIgmAAIAACMg");
	this.shape_805.setTransform(129.025,168.8977);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAxCFIABAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgPAIgXAAg");
	this.shape_806.setTransform(107.9,175.25);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_807.setTransform(90.175,172.275);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_808.setTransform(78.425,169.05);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#FF0000").s().p("AhIBxIAAjdIAaAAIAAAcQAFgOAMgIQANgJAWAAQAbAAAOALQAPAKAGASQAFATAAAaQAAAWgFASQgGATgPAMQgOALgbAAQgWAAgNgIQgMgJgFgOIAABZgAgbhSQgLAHgEAOQgFAOAAAUQAAASAFANQAEAOALAIQALAIASAAQAUgBAJgIQAJgKADgOQADgNAAgPQAAgSgDgOQgDgOgKgIQgJgJgTAAQgSAAgLAIg");
	this.shape_809.setTransform(63.975,175.1);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgEIAAAYQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_810.setTransform(37.625,172.25);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_811.setTransform(15.475,169.95);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_812.setTransform(551.725,131.0969);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_813.setTransform(537.2231,121.55);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_814.setTransform(518.325,124.725);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_815.setTransform(499.8231,121.55);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_816.setTransform(473.0731,121.55);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKABQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_817.setTransform(454.7523,124.55);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_818.setTransform(435.625,124.725);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_819.setTransform(405.625,124.55);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgPIAAhvIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_820.setTransform(382.475,124.85);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_821.setTransform(359.575,124.55);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAJgFAGgIQAGgJAEgNIhBigIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgHAVgJAOQgIAPgOAIQgPAIgXAAg");
	this.shape_822.setTransform(330.1,127.7);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_823.setTransform(308.425,124.55);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_824.setTransform(277.6023,121.4);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgYAAIAAgWIAYAAIAAgmIAYAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAJgBIAKAAIAJgBIAAAWIgJABIgKAAQgRAAgKgEg");
	this.shape_825.setTransform(263.2,122.875);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAFACAAAKQAAAKgFADQgDADgIAAQgHAAgEgDg");
	this.shape_826.setTransform(254.2,121.675);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_827.setTransform(237.725,124.7);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#FF0000").s().p("AAeByIg5hLIgJAAIAABLIgaAAIAAjjIAaAAIAACDIAJAAIA3hBIAgAAIhDBKIBGBXg");
	this.shape_828.setTransform(211.1,121.4);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_829.setTransform(197.425,124.55);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_830.setTransform(180.875,124.725);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#FF0000").s().p("AhIBwIAAjcIAaAAIAAAdQAFgPAMgJQANgIAWgBQAbABAOAKQAPALAGATQAFASAAAaQAAAWgFASQgGATgPAMQgOALgbABQgWAAgNgJQgMgIgFgPIAABYgAgbhTQgLAIgEAOQgFAOAAAUQAAASAFANQAEAOALAIQALAIASgBQAUAAAJgJQAJgIADgOQADgNAAgQQAAgSgDgOQgDgOgKgIQgJgJgTAAQgSAAgLAHg");
	this.shape_831.setTransform(163.275,127.55);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_832.setTransform(136.925,124.7);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_833.setTransform(119.0023,121.4);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_834.setTransform(104.6,122.875);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_835.setTransform(82.6,124.7);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_836.setTransform(68.25,122.875);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_837.setTransform(46.25,124.7);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#FF0000").s().p("AgaBvIgTgCIAAgXIAUAEIAUABQAagBANgMQANgMAAgcIAAgQQgFAOgMAJQgMAHgWABQgbAAgPgLQgPgKgFgTQgGgRAAgZQAAgXAGgSQAFgTAPgLQAPgLAbgBQAPABAKAEQALAEAGAIQAGAHADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgogBIgUgBgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAHQAJAJATAAQASAAALgIQALgGAFgOQAEgNAAgTQAAgSgEgOQgFgOgLgIQgLgHgSAAQgTAAgKAJg");
	this.shape_838.setTransform(26.9737,127.55);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#FF0000").s().p("AgMBoIAAjPIAaAAIAADPg");
	this.shape_839.setTransform(6.1,122.4);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_840.setTransform(467.425,74.8227);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#FF0000").s().p("AAeByIg6hMIgJAAIAABMIgZAAIAAjjIAZAAIAACDIAKAAIA3hBIAgAAIhDBKIBHBXg");
	this.shape_841.setTransform(454.15,73.85);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAHQgIAJgEANIAABpg");
	this.shape_842.setTransform(440.475,77);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_843.setTransform(423.925,77.175);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#FF0000").s().p("AhIBxIAAjeIAaAAIAAAdQAFgOAMgIQANgKAWABQAbgBAOALQAPALAGASQAFAUAAAYQAAAXgFASQgGATgPALQgOAMgbABQgWAAgNgJQgMgJgFgOIAABZgAgbhTQgLAIgEAOQgFAOAAATQAAATAFANQAEAOALAIQALAHASAAQAUABAJgKQAJgJADgNQADgOAAgQQAAgRgDgOQgDgOgKgJQgJgIgTAAQgSAAgLAHg");
	this.shape_844.setTransform(406.325,80);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAHQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_845.setTransform(379.975,77.15);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_846.setTransform(362.0523,73.85);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLAAgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_847.setTransform(347.65,75.325);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAHQgIAJgEANIAABpg");
	this.shape_848.setTransform(330.325,77);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_849.setTransform(314.3,77.15);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQARgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_850.setTransform(288.05,77.15);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_851.setTransform(269.5,77.15);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#FF0000").s().p("Ag/BRIAAgVIBbh1IAAgCIhTAAIAAgVIByAAIAAAUIhbB1IAAABIBgAAIAAAXg");
	this.shape_852.setTransform(252.75,77.15);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAHQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_853.setTransform(228.675,77.15);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_854.setTransform(210.7523,73.85);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgFgLABgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQABAGAGADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_855.setTransform(196.35,75.325);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_856.setTransform(174.35,77.15);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLAAgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_857.setTransform(160,75.325);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_858.setTransform(138,77.15);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#FF0000").s().p("AgaBwIgTgEIAAgVIAUACIAUABQAaAAANgMQANgMAAgbIAAgRQgFAPgMAHQgMAJgWgBQgbAAgPgKQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPAAAKAEQALAEAGAIQAGAHADAKIAAgfIAaAAIAACWQAAAigTATQgUASgoABIgUgBgAgehRQgJAIgDAOQgCAOAAAQQAAARADANQADANAJAJQAJAHATABQASAAALgIQALgHAFgNQAEgNAAgTQAAgTgEgOQgFgNgLgIQgLgHgSAAQgTAAgKAJg");
	this.shape_859.setTransform(118.7237,80);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#FF0000").s().p("AgrBMQgMgHgEgMQgFgMAAgPIAAhwIAaAAIAABmQgBAMADAJQACAJAHAFQAHAEANABQAJAAAJgCQAJgDAIgGQAHgIAFgOIAAhtIAZAAIAAChIgVAAIgEgXQgFALgIAFQgIAGgKACQgJACgKABQgVgBgMgGg");
	this.shape_860.setTransform(92.675,77.3);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_861.setTransform(74.25,77.15);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgEAFgIQAGgIAEgNIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_862.setTransform(57.1,80.15);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_863.setTransform(32.2,77.15);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_864.setTransform(12.775,74.8488);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_865.setTransform(490.975,27.2727);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAJgDAGgJQAGgIAEgOIhBigIAcAAIAxCFIABAAIAviFIAaAAIg6CcQgHAUgJAPQgIAOgOAIQgPAIgXAAg");
	this.shape_866.setTransform(476.3,32.6);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_867.setTransform(458.575,29.625);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_868.setTransform(439.875,27.2988);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAPADIARADIAPABQASgBAKgFQAJgGAAgOQAAgJgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgEQgKgHgEgIQgEgJABgOQAAgTAOgMQAPgMAbAAQAMAAAMABQALABAHADIgDAWQgGgDgLgCQgKgBgLAAQgQgBgJAFQgIAGgBANQABAIACAFQACAEAIADQAGADAMACQASAFAMAFQAKAFAGAJQAEAKAAAQQAAAXgPAMQgRALgdAAIgQgBg");
	this.shape_869.setTransform(414.25,29.55);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#FF0000").s().p("AgUAmIAIgZQAEgNACgNQACgNABgLIAYAAQAAAKgEAOQgDANgFANQgFAOgFALg");
	this.shape_870.setTransform(403,18.75);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_871.setTransform(389.7023,29.45);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_872.setTransform(371.725,29.6);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_873.setTransform(358.425,29.45);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_874.setTransform(341.7231,26.45);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC8QAAALADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_875.setTransform(329.425,26.4);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDAAgKQAAgKADgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_876.setTransform(320.05,26.575);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_877.setTransform(306.7523,26.3);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#FF0000").s().p("AgQBnQgRgFgNgMQgMgLgHgVQgHgVAAghQAAgnAMgXQAMgYAWgKQAWgKAdAAQAOAAALACQALABAJADIAAAZIgUgFQgLgCgNAAQgYAAgPAHQgPAIgIASQgHATAAAeQAAAgAHATQAHASAPAHQAOAHAXAAQAOAAAMgCQAMgCAMgEIAAAXQgJAEgNADQgNACgQAAQgVAAgRgEg");
	this.shape_878.setTransform(288.925,27.2988);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_879.setTransform(262.5523,29.45);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQARgIAWAAQAYAAARAIQAQAHAJATQAJASAAAfQAAAggJASQgJATgQAIQgRAHgYAAQgWAAgRgHgAAdA5QAKgGAFgOQADgNAAgYQABgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgFANABAXQAAAYAEANQAFAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_880.setTransform(243.95,29.6);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAFgNAAgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_881.setTransform(217.7,29.6);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_882.setTransform(198.4731,26.45);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgLAAgRIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_883.setTransform(172.425,29.75);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_884.setTransform(154,29.6);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAJgDAGgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_885.setTransform(136.85,32.6);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAFgNAAgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_886.setTransform(111.95,29.6);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_887.setTransform(92.7231,26.45);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_888.setTransform(70.85,27.775);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_889.setTransform(56.025,29.625);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_890.setTransform(38.2523,26.3);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_891.setTransform(15.475,27.3);

	var maskedShapeInstanceList = [this.shape_669,this.shape_670,this.shape_671,this.shape_672,this.shape_673,this.shape_674,this.shape_675,this.shape_676,this.shape_677,this.shape_678,this.shape_679,this.shape_680,this.shape_681,this.shape_682,this.shape_683,this.shape_684,this.shape_685,this.shape_686,this.shape_687,this.shape_688,this.shape_689,this.shape_690,this.shape_691,this.shape_692,this.shape_693,this.shape_694,this.shape_695,this.shape_696,this.shape_697,this.shape_698,this.shape_699,this.shape_700,this.shape_701,this.shape_702,this.shape_703,this.shape_704,this.shape_705,this.shape_706,this.shape_707,this.shape_708,this.shape_709,this.shape_710,this.shape_711,this.shape_712,this.shape_713,this.shape_714,this.shape_715,this.shape_716,this.shape_717,this.shape_718,this.shape_719,this.shape_720,this.shape_721,this.shape_722,this.shape_723,this.shape_724,this.shape_725,this.shape_726,this.shape_727,this.shape_728,this.shape_729,this.shape_730,this.shape_731,this.shape_732,this.shape_733,this.shape_734,this.shape_735,this.shape_736,this.shape_737,this.shape_738,this.shape_739,this.shape_740,this.shape_741,this.shape_742,this.shape_743,this.shape_744,this.shape_745,this.shape_746,this.shape_747,this.shape_748,this.shape_749,this.shape_750,this.shape_751,this.shape_752,this.shape_753,this.shape_754,this.shape_755,this.shape_756,this.shape_757,this.shape_758,this.shape_759,this.shape_760,this.shape_761,this.shape_762,this.shape_763,this.shape_764,this.shape_765,this.shape_766,this.shape_767,this.shape_768,this.shape_769,this.shape_770,this.shape_771,this.shape_772,this.shape_773,this.shape_774,this.shape_775,this.shape_776,this.shape_777,this.shape_778,this.shape_779,this.shape_780,this.shape_781,this.shape_782,this.shape_783,this.shape_784,this.shape_785,this.shape_786,this.shape_787,this.shape_788,this.shape_789,this.shape_790,this.shape_791,this.shape_792,this.shape_793,this.shape_794,this.shape_795,this.shape_796,this.shape_797,this.shape_798,this.shape_799,this.shape_800,this.shape_801,this.shape_802,this.shape_803,this.shape_804,this.shape_805,this.shape_806,this.shape_807,this.shape_808,this.shape_809,this.shape_810,this.shape_811,this.shape_812,this.shape_813,this.shape_814,this.shape_815,this.shape_816,this.shape_817,this.shape_818,this.shape_819,this.shape_820,this.shape_821,this.shape_822,this.shape_823,this.shape_824,this.shape_825,this.shape_826,this.shape_827,this.shape_828,this.shape_829,this.shape_830,this.shape_831,this.shape_832,this.shape_833,this.shape_834,this.shape_835,this.shape_836,this.shape_837,this.shape_838,this.shape_839,this.shape_840,this.shape_841,this.shape_842,this.shape_843,this.shape_844,this.shape_845,this.shape_846,this.shape_847,this.shape_848,this.shape_849,this.shape_850,this.shape_851,this.shape_852,this.shape_853,this.shape_854,this.shape_855,this.shape_856,this.shape_857,this.shape_858,this.shape_859,this.shape_860,this.shape_861,this.shape_862,this.shape_863,this.shape_864,this.shape_865,this.shape_866,this.shape_867,this.shape_868,this.shape_869,this.shape_870,this.shape_871,this.shape_872,this.shape_873,this.shape_874,this.shape_875,this.shape_876,this.shape_877,this.shape_878,this.shape_879,this.shape_880,this.shape_881,this.shape_882,this.shape_883,this.shape_884,this.shape_885,this.shape_886,this.shape_887,this.shape_888,this.shape_889,this.shape_890,this.shape_891];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669}]},584).wait(553));

	// 图层_6 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_467 = new cjs.Graphics().p("AhKPEIAAn0ICVAAIAAH0g");
	var mask_4_graphics_468 = new cjs.Graphics().p("AhvD6IAAnzIDfAAIAAHzg");
	var mask_4_graphics_469 = new cjs.Graphics().p("AiUD6IAAnzIEpAAIAAHzg");
	var mask_4_graphics_470 = new cjs.Graphics().p("Ai5D6IAAnzIFzAAIAAHzg");
	var mask_4_graphics_471 = new cjs.Graphics().p("AjfD6IAAnzIG/AAIAAHzg");
	var mask_4_graphics_472 = new cjs.Graphics().p("AkED6IAAnzIIIAAIAAHzg");
	var mask_4_graphics_473 = new cjs.Graphics().p("AkpD6IAAnzIJTAAIAAHzg");
	var mask_4_graphics_474 = new cjs.Graphics().p("AlOD6IAAnzIKdAAIAAHzg");
	var mask_4_graphics_475 = new cjs.Graphics().p("AlzD6IAAnzILnAAIAAHzg");
	var mask_4_graphics_476 = new cjs.Graphics().p("AmYD6IAAnzIMxAAIAAHzg");
	var mask_4_graphics_477 = new cjs.Graphics().p("Am9D6IAAnzIN7AAIAAHzg");
	var mask_4_graphics_478 = new cjs.Graphics().p("AniD6IAAnzIPFAAIAAHzg");
	var mask_4_graphics_479 = new cjs.Graphics().p("AoID6IAAnzIQRAAIAAHzg");
	var mask_4_graphics_480 = new cjs.Graphics().p("AotD6IAAnzIRbAAIAAHzg");
	var mask_4_graphics_481 = new cjs.Graphics().p("ApSD6IAAnzISlAAIAAHzg");
	var mask_4_graphics_482 = new cjs.Graphics().p("Ap3D6IAAnzITvAAIAAHzg");
	var mask_4_graphics_483 = new cjs.Graphics().p("AqcD6IAAnzIU5AAIAAHzg");
	var mask_4_graphics_484 = new cjs.Graphics().p("ArBD6IAAnzIWDAAIAAHzg");
	var mask_4_graphics_485 = new cjs.Graphics().p("ArnD6IAAnzIXPAAIAAHzg");
	var mask_4_graphics_486 = new cjs.Graphics().p("AsMD6IAAnzIYZAAIAAHzg");
	var mask_4_graphics_487 = new cjs.Graphics().p("AsxD6IAAnzIZjAAIAAHzg");
	var mask_4_graphics_488 = new cjs.Graphics().p("AtWD6IAAnzIatAAIAAHzg");
	var mask_4_graphics_489 = new cjs.Graphics().p("At7D6IAAnzIb3AAIAAHzg");
	var mask_4_graphics_490 = new cjs.Graphics().p("AugD6IAAnzIdBAAIAAHzg");
	var mask_4_graphics_491 = new cjs.Graphics().p("AvFD6IAAnzIeLAAIAAHzg");
	var mask_4_graphics_492 = new cjs.Graphics().p("AvqD6IAAnzIfVAAIAAHzg");
	var mask_4_graphics_493 = new cjs.Graphics().p("AwQD6IAAnzMAggAAAIAAHzg");
	var mask_4_graphics_494 = new cjs.Graphics().p("Aw1D6IAAnzMAhrAAAIAAHzg");
	var mask_4_graphics_495 = new cjs.Graphics().p("AxaD6IAAnzMAi1AAAIAAHzg");
	var mask_4_graphics_496 = new cjs.Graphics().p("Ax/D6IAAnzMAj/AAAIAAHzg");
	var mask_4_graphics_497 = new cjs.Graphics().p("AykD6IAAnzMAlJAAAIAAHzg");
	var mask_4_graphics_498 = new cjs.Graphics().p("AzJD6IAAnzMAmTAAAIAAHzg");
	var mask_4_graphics_499 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_500 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_501 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_502 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_503 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_504 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_505 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_506 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_507 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_508 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_509 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_510 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_511 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_512 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_513 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_514 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_515 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_516 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_517 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_518 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_519 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_520 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_521 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_522 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_523 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_524 = new cjs.Graphics().p("AzuD6IAAnzMAndAAAIAAHzg");
	var mask_4_graphics_525 = new cjs.Graphics().p("A0MD6IAAnzMAoZAAAIAAHzg");
	var mask_4_graphics_526 = new cjs.Graphics().p("A0rD6IAAnzMApXAAAIAAHzg");
	var mask_4_graphics_527 = new cjs.Graphics().p("A1JD6IAAnzMAqTAAAIAAHzg");
	var mask_4_graphics_528 = new cjs.Graphics().p("A1nD6IAAnzMArPAAAIAAHzg");
	var mask_4_graphics_529 = new cjs.Graphics().p("A2FD6IAAnzMAsLAAAIAAHzg");
	var mask_4_graphics_530 = new cjs.Graphics().p("A2jD6IAAnzMAtHAAAIAAHzg");
	var mask_4_graphics_531 = new cjs.Graphics().p("A3BD6IAAnzMAuDAAAIAAHzg");
	var mask_4_graphics_532 = new cjs.Graphics().p("A3fD6IAAnzMAu/AAAIAAHzg");
	var mask_4_graphics_533 = new cjs.Graphics().p("A3+D6IAAnzMAv9AAAIAAHzg");
	var mask_4_graphics_534 = new cjs.Graphics().p("A4cD6IAAnzMAw5AAAIAAHzg");
	var mask_4_graphics_535 = new cjs.Graphics().p("A46D6IAAnzMAx1AAAIAAHzg");
	var mask_4_graphics_536 = new cjs.Graphics().p("A5YD6IAAnzMAyxAAAIAAHzg");
	var mask_4_graphics_537 = new cjs.Graphics().p("A52D6IAAnzMAzuAAAIAAHzg");
	var mask_4_graphics_538 = new cjs.Graphics().p("A6VD6IAAnzMA0rAAAIAAHzg");
	var mask_4_graphics_539 = new cjs.Graphics().p("A6zD6IAAnzMA1nAAAIAAHzg");
	var mask_4_graphics_540 = new cjs.Graphics().p("A7RD6IAAnzMA2jAAAIAAHzg");
	var mask_4_graphics_541 = new cjs.Graphics().p("A7vD6IAAnzMA3fAAAIAAHzg");
	var mask_4_graphics_542 = new cjs.Graphics().p("A8ND6IAAnzMA4bAAAIAAHzg");
	var mask_4_graphics_543 = new cjs.Graphics().p("A8sD6IAAnzMA5ZAAAIAAHzg");
	var mask_4_graphics_544 = new cjs.Graphics().p("A9KD6IAAnzMA6VAAAIAAHzg");
	var mask_4_graphics_545 = new cjs.Graphics().p("A9oD6IAAnzMA7RAAAIAAHzg");
	var mask_4_graphics_546 = new cjs.Graphics().p("A+GD6IAAnzMA8NAAAIAAHzg");
	var mask_4_graphics_547 = new cjs.Graphics().p("A+kD6IAAnzMA9JAAAIAAHzg");
	var mask_4_graphics_548 = new cjs.Graphics().p("A/CD6IAAnzMA+GAAAIAAHzg");
	var mask_4_graphics_549 = new cjs.Graphics().p("A/gD6IAAnzMA/BAAAIAAHzg");
	var mask_4_graphics_550 = new cjs.Graphics().p("A/+D6IAAnzMA/+AAAIAAHzg");
	var mask_4_graphics_551 = new cjs.Graphics().p("EggdAD6IAAnzMBA7AAAIAAHzg");
	var mask_4_graphics_552 = new cjs.Graphics().p("Egg7AD6IAAnzMBB3AAAIAAHzg");
	var mask_4_graphics_553 = new cjs.Graphics().p("EghZAD6IAAnzMBCzAAAIAAHzg");
	var mask_4_graphics_554 = new cjs.Graphics().p("Egh3AD6IAAnzMBDwAAAIAAHzg");
	var mask_4_graphics_555 = new cjs.Graphics().p("EgiVAD6IAAnzMBErAAAIAAHzg");
	var mask_4_graphics_556 = new cjs.Graphics().p("Egi0AD6IAAnzMBFpAAAIAAHzg");
	var mask_4_graphics_557 = new cjs.Graphics().p("EgjSAD6IAAnzMBGlAAAIAAHzg");
	var mask_4_graphics_558 = new cjs.Graphics().p("EgjwAD6IAAnzMBHhAAAIAAHzg");
	var mask_4_graphics_559 = new cjs.Graphics().p("EgkOAD6IAAnzMBIdAAAIAAHzg");
	var mask_4_graphics_560 = new cjs.Graphics().p("EgksAD6IAAnzMBJZAAAIAAHzg");
	var mask_4_graphics_561 = new cjs.Graphics().p("EglLAD6IAAnzMBKXAAAIAAHzg");
	var mask_4_graphics_562 = new cjs.Graphics().p("EglpAD6IAAnzMBLTAAAIAAHzg");
	var mask_4_graphics_563 = new cjs.Graphics().p("EgmHAD6IAAnzMBMPAAAIAAHzg");
	var mask_4_graphics_564 = new cjs.Graphics().p("EgmlAD6IAAnzMBNLAAAIAAHzg");
	var mask_4_graphics_565 = new cjs.Graphics().p("EgnDAD6IAAnzMBOHAAAIAAHzg");
	var mask_4_graphics_566 = new cjs.Graphics().p("EgniAD6IAAnzMBPEAAAIAAHzg");
	var mask_4_graphics_567 = new cjs.Graphics().p("EgoAAD6IAAnzMBQAAAAIAAHzg");
	var mask_4_graphics_568 = new cjs.Graphics().p("EgoeAD6IAAnzMBQ9AAAIAAHzg");
	var mask_4_graphics_569 = new cjs.Graphics().p("Ego8APsIAAn0MBR5AAAIAAH0g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(467).to({graphics:mask_4_graphics_467,x:-7.5,y:96.3505}).wait(1).to({graphics:mask_4_graphics_468,x:-3.8,y:167.8}).wait(1).to({graphics:mask_4_graphics_469,x:-0.125,y:167.95}).wait(1).to({graphics:mask_4_graphics_470,x:3.575,y:168.05}).wait(1).to({graphics:mask_4_graphics_471,x:7.25,y:168.15}).wait(1).to({graphics:mask_4_graphics_472,x:10.95,y:168.3}).wait(1).to({graphics:mask_4_graphics_473,x:14.625,y:168.4}).wait(1).to({graphics:mask_4_graphics_474,x:18.325,y:168.5}).wait(1).to({graphics:mask_4_graphics_475,x:22,y:168.65}).wait(1).to({graphics:mask_4_graphics_476,x:25.7,y:168.75}).wait(1).to({graphics:mask_4_graphics_477,x:29.375,y:168.85}).wait(1).to({graphics:mask_4_graphics_478,x:33.075,y:169}).wait(1).to({graphics:mask_4_graphics_479,x:36.75,y:169.1}).wait(1).to({graphics:mask_4_graphics_480,x:40.45,y:169.2}).wait(1).to({graphics:mask_4_graphics_481,x:44.125,y:169.35}).wait(1).to({graphics:mask_4_graphics_482,x:47.825,y:169.45}).wait(1).to({graphics:mask_4_graphics_483,x:51.525,y:169.6}).wait(1).to({graphics:mask_4_graphics_484,x:55.225,y:169.7}).wait(1).to({graphics:mask_4_graphics_485,x:58.9,y:169.8}).wait(1).to({graphics:mask_4_graphics_486,x:62.6,y:169.95}).wait(1).to({graphics:mask_4_graphics_487,x:66.275,y:170.05}).wait(1).to({graphics:mask_4_graphics_488,x:69.975,y:170.15}).wait(1).to({graphics:mask_4_graphics_489,x:73.65,y:170.3}).wait(1).to({graphics:mask_4_graphics_490,x:77.35,y:170.4}).wait(1).to({graphics:mask_4_graphics_491,x:81.025,y:170.5}).wait(1).to({graphics:mask_4_graphics_492,x:84.725,y:170.65}).wait(1).to({graphics:mask_4_graphics_493,x:88.4,y:170.75}).wait(1).to({graphics:mask_4_graphics_494,x:92.1,y:170.85}).wait(1).to({graphics:mask_4_graphics_495,x:95.775,y:171}).wait(1).to({graphics:mask_4_graphics_496,x:99.475,y:171.1}).wait(1).to({graphics:mask_4_graphics_497,x:103.15,y:171.2}).wait(1).to({graphics:mask_4_graphics_498,x:106.85,y:171.35}).wait(1).to({graphics:mask_4_graphics_499,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_500,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_501,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_502,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_503,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_504,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_505,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_506,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_507,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_508,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_509,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_510,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_511,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_512,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_513,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_514,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_515,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_516,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_517,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_518,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_519,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_520,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_521,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_522,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_523,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_524,x:110.525,y:171.45}).wait(1).to({graphics:mask_4_graphics_525,x:113.525,y:171.55}).wait(1).to({graphics:mask_4_graphics_526,x:116.525,y:171.65}).wait(1).to({graphics:mask_4_graphics_527,x:119.525,y:171.75}).wait(1).to({graphics:mask_4_graphics_528,x:122.5,y:171.85}).wait(1).to({graphics:mask_4_graphics_529,x:125.5,y:171.9}).wait(1).to({graphics:mask_4_graphics_530,x:128.525,y:172}).wait(1).to({graphics:mask_4_graphics_531,x:131.5,y:172.1}).wait(1).to({graphics:mask_4_graphics_532,x:134.5,y:172.2}).wait(1).to({graphics:mask_4_graphics_533,x:137.5,y:172.3}).wait(1).to({graphics:mask_4_graphics_534,x:140.5,y:172.4}).wait(1).to({graphics:mask_4_graphics_535,x:143.5,y:172.5}).wait(1).to({graphics:mask_4_graphics_536,x:146.475,y:172.6}).wait(1).to({graphics:mask_4_graphics_537,x:149.5,y:172.7}).wait(1).to({graphics:mask_4_graphics_538,x:152.475,y:172.75}).wait(1).to({graphics:mask_4_graphics_539,x:155.475,y:172.85}).wait(1).to({graphics:mask_4_graphics_540,x:158.5,y:172.95}).wait(1).to({graphics:mask_4_graphics_541,x:161.475,y:173.05}).wait(1).to({graphics:mask_4_graphics_542,x:164.475,y:173.15}).wait(1).to({graphics:mask_4_graphics_543,x:167.475,y:173.25}).wait(1).to({graphics:mask_4_graphics_544,x:170.475,y:173.35}).wait(1).to({graphics:mask_4_graphics_545,x:173.475,y:173.45}).wait(1).to({graphics:mask_4_graphics_546,x:176.45,y:173.55}).wait(1).to({graphics:mask_4_graphics_547,x:179.475,y:173.6}).wait(1).to({graphics:mask_4_graphics_548,x:182.45,y:173.7}).wait(1).to({graphics:mask_4_graphics_549,x:185.45,y:173.8}).wait(1).to({graphics:mask_4_graphics_550,x:188.45,y:173.9}).wait(1).to({graphics:mask_4_graphics_551,x:191.45,y:174}).wait(1).to({graphics:mask_4_graphics_552,x:194.45,y:174.1}).wait(1).to({graphics:mask_4_graphics_553,x:197.425,y:174.2}).wait(1).to({graphics:mask_4_graphics_554,x:200.45,y:174.3}).wait(1).to({graphics:mask_4_graphics_555,x:203.45,y:174.4}).wait(1).to({graphics:mask_4_graphics_556,x:206.425,y:174.45}).wait(1).to({graphics:mask_4_graphics_557,x:209.45,y:174.55}).wait(1).to({graphics:mask_4_graphics_558,x:212.425,y:174.65}).wait(1).to({graphics:mask_4_graphics_559,x:215.425,y:174.75}).wait(1).to({graphics:mask_4_graphics_560,x:218.425,y:174.85}).wait(1).to({graphics:mask_4_graphics_561,x:221.425,y:174.95}).wait(1).to({graphics:mask_4_graphics_562,x:224.425,y:175.05}).wait(1).to({graphics:mask_4_graphics_563,x:227.4,y:175.15}).wait(1).to({graphics:mask_4_graphics_564,x:230.425,y:175.25}).wait(1).to({graphics:mask_4_graphics_565,x:233.425,y:175.3}).wait(1).to({graphics:mask_4_graphics_566,x:236.4,y:175.4}).wait(1).to({graphics:mask_4_graphics_567,x:239.4,y:175.5}).wait(1).to({graphics:mask_4_graphics_568,x:242.4,y:175.6}).wait(1).to({graphics:mask_4_graphics_569,x:245.3942,y:100.3505}).wait(568));

	// 图层_30
	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_892.setTransform(391.075,386.5227);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_893.setTransform(379.2,387.025);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_894.setTransform(364.375,388.875);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_895.setTransform(346.6023,385.55);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_896.setTransform(332.2,387.025);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAAQIBVgGQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_897.setTransform(310.825,388.85);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#FF0000").s().p("AAfByIg7hLIgJAAIAABLIgaAAIAAjjIAaAAIAACDIAKAAIA3hBIAgAAIhDBKIBHBXg");
	this.shape_898.setTransform(295.65,385.55);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#FF0000").s().p("AgNBvIAAihIAaAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_899.setTransform(282.6,385.825);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#FF0000").s().p("AgQBqQgKgHAAgTIAAjCIAaAAIAAC8QAAAMADADQADAFAIgBIAGAAIAHgBIAAAVIgIABIgJABQgRAAgJgJg");
	this.shape_900.setTransform(275.325,385.65);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_901.setTransform(257.15,387.025);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_902.setTransform(242.325,388.875);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_903.setTransform(224.5523,385.55);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_904.setTransform(197.725,388.875);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgYAAIAAgWIAYAAIAAgmIAZAAIAAAmIAoAAIAAAWIgoAAIAABYQAAANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_905.setTransform(176.4,387.025);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKABQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_906.setTransform(162.1523,388.7);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_907.setTransform(143.025,388.875);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_908.setTransform(122.075,388.85);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_909.setTransform(92.675,389);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAJgSAQgHQARgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgKAFgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_910.setTransform(74.25,388.85);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAKgFAFgIQAGgJAEgNIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_911.setTransform(57.1,391.85);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_912.setTransform(32.2,388.85);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_913.setTransform(12.775,386.5488);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_914.setTransform(564.025,347.6969);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_915.setTransform(550.2523,338);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#FF0000").s().p("AgXBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAOAAAKACQALABAHADIAAAYIgTgGQgKgBgNAAQgQAAgLAFQgKAFgEAOQgFANAAAYQgBAWAGAOQAEANAKAGQALAGARgBQAMAAALgCQAKgBAJgDIAAAXIgLADIgQACIgQABQgXAAgQgIg");
	this.shape_916.setTransform(533.7,341.3);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#FF0000").s().p("AgrBMQgMgHgEgMQgFgMAAgPIAAhwIAaAAIAABmQgBAMADAKQACAIAHAFQAHAEANAAQAJABAJgCQAJgDAIgGQAHgIAFgOIAAhtIAZAAIAAChIgVAAIgEgXQgFALgIAFQgIAGgKACQgJACgKABQgVgBgMgGg");
	this.shape_917.setTransform(516.775,341.45);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#FF0000").s().p("ABWBSIAAhlQAAgTgGgKQgHgLgSAAQgKAAgIADQgIACgGAHQgHAFgDAMIAAACIAABuIgZAAIAAhlQAAgTgGgKQgGgLgSAAQgKAAgIADQgIACgGAHQgHAFgEANIAABvIgaAAIAAihIAaAAIAAAWQAIgOAMgGQAMgEAPAAQATgBAMAIQAKAGAFANQAFgKAIgHQAIgFAKgDQAKgBAKAAQASgBAMAIQAMAGAFAMQAGAMAAAQIAABug");
	this.shape_918.setTransform(493.875,341.15);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_919.setTransform(463,341.3);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#FF0000").s().p("AgYBSIgRgBIgMgDIAAgWIANADIARACIARABQARAAAJgFQAKgFAAgPQAAgJgCgFQgDgGgIgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJAAgNQAAgVAPgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgHgDgKgCQgLgCgLAAQgQAAgIAGQgJAEAAAOQAAAIACAEQADAFAGADQAHADALADQATADALAHQAMAEAEAJQAGAKAAAPQgBAZgQALQgPAMgdgBIgSgBg");
	this.shape_920.setTransform(446.6,341.25);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgYAAIAAgWIAYAAIAAgmIAZAAIAAAmIAoAAIAAAWIgoAAIAABYQAAANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_921.setTransform(426.6,339.475);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#FF0000").s().p("AgNBvIAAihIAaAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_922.setTransform(417.6,338.275);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_923.setTransform(397.175,341.3);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#FF0000").s().p("AgOBRIg9ihIAaAAIAxCHIABAAIAwiHIAbAAIg9Chg");
	this.shape_924.setTransform(380.6,341.3);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgFANABAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_925.setTransform(363.4,341.3);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#FF0000").s().p("AgQBqQgKgIAAgSIAAjCIAaAAIAAC7QAAANADADQADAEAIAAIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgJg");
	this.shape_926.setTransform(350.925,338.1);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_927.setTransform(333.75,339);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_928.setTransform(317.425,347.6969);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgEAFgIQAGgIAEgNIhBihIAcAAIAxCGIABAAIAviGIAaAAIg6CbQgIAVgIAPQgIAOgOAIQgPAIgXAAg");
	this.shape_929.setTransform(305,344.3);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgYAAIAAgWIAYAAIAAgmIAYAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAIgBIAAAWIgJABIgJAAQgRAAgKgEg");
	this.shape_930.setTransform(292,339.475);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_931.setTransform(281.9,339.475);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_932.setTransform(268.225,341.3);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAIQgIAIgEANIAABpg");
	this.shape_933.setTransform(254.925,341.15);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#FF0000").s().p("AhIBxIAAjeIAaAAIAAAdQAFgOAMgIQANgKAWABQAbgBAOALQAPALAGASQAFAUAAAYQAAAXgFASQgGATgPALQgOAMgbABQgWAAgNgJQgMgJgFgOIAABZgAgbhTQgLAIgEAOQgFAOAAATQAAATAFANQAEAOALAIQALAHASAAQAUABAJgKQAJgJADgNQADgNAAgRQAAgRgDgOQgDgOgKgJQgJgIgTAAQgSAAgLAHg");
	this.shape_934.setTransform(239.125,344.15);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_935.setTransform(212.15,341.3);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAOADIASACIAQABQARAAAKgFQAJgFAAgPQAAgJgCgFQgEgGgHgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJABgNQAAgVAOgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgIgDgJgCQgLgCgLAAQgQAAgJAGQgIAEgBAOQAAAIADAEQACAFAIADQAGADAMADQASADALAHQAMAEAEAJQAFAKABAPQgBAZgPALQgQAMgdgBIgRgBg");
	this.shape_936.setTransform(195.75,341.25);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAOADIASACIAQABQARAAAKgFQAJgFAAgPQAAgJgCgFQgEgGgHgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJABgNQAAgVAOgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgIgDgJgCQgLgCgLAAQgQAAgJAGQgIAEgBAOQAAAIADAEQACAFAIADQAGADAMADQASADALAHQAMAEAEAJQAFAKABAPQgBAZgPALQgQAMgdgBIgRgBg");
	this.shape_937.setTransform(173.7,341.25);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#FF0000").s().p("AgUAmIAIgZQAEgNACgMQACgOABgLIAYAAQAAALgEANQgDANgFAOQgFANgFALg");
	this.shape_938.setTransform(162.45,330.45);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_939.setTransform(153.3,339.475);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_940.setTransform(144.2,339);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#FF0000").s().p("AgNBmQgFgEAAgMQAAgMAFgEQADgDAKAAQAKAAAFADQAEAEAAAMQAAAMgEAEQgFADgKAAQgKAAgDgDgAgJArIgEiTIAcAAIgFCTg");
	this.shape_941.setTransform(127.05,339.1);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_942.setTransform(112.4,341.3);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#FF0000").s().p("AguBoQgPgKgFgTQgGgSAAgaQAAgWAGgSQAFgTAPgMQAPgLAaAAQAXAAAMAIQAMAJAFAOIAAheIAaAAIAADiIgWAAIgEgaQgFANgNAIQgNAJgVAAQgaAAgPgMgAgegVQgJAJgDAOQgCAOAAAPQAAARADAPQADAOAJAIQAJAIATAAQASAAALgHQALgIAFgNQAEgOAAgUQAAgSgEgNQgFgOgLgIQgLgIgSAAQgTABgKAIg");
	this.shape_943.setTransform(93.1731,338.15);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_944.setTransform(72.3,339);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#FF0000").s().p("AgaAoQAIgNAHgOQAGgNAEgNQADgOAAgLIAYAAQAAAMgEAPQgGAOgHANQgHAOgGAKg");
	this.shape_945.setTransform(55.25,349.55);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#FF0000").s().p("AgYBSIgRgBIgMgDIAAgWIANADIARACIARABQARAAAJgFQAKgFAAgPQAAgJgCgFQgDgGgIgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJAAgNQAAgVAPgMQAPgLAbAAQAMgBAMACQALACAGACIgBAWQgIgDgJgCQgLgCgLAAQgQAAgIAGQgJAEAAAOQAAAIACAEQADAFAHADQAGADALADQATADALAHQAMAEAEAJQAGAKAAAPQgBAZgQALQgPAMgdgBIgSgBg");
	this.shape_946.setTransform(44.3,341.25);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_947.setTransform(28.425,341.3);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#FF0000").s().p("AgNBoIAAhZIhJh2IAfAAIA3BeIACAAIA3heIAeAAIhKB2IAABZg");
	this.shape_948.setTransform(10.925,339);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_949.setTransform(486.225,291.4227);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgJgEg");
	this.shape_950.setTransform(474.35,291.925);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_951.setTransform(459.525,293.775);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_952.setTransform(441.7523,290.45);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_953.setTransform(412.325,293.75);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_954.setTransform(391.225,293.75);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_955.setTransform(373.3023,293.6);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_956.setTransform(351.675,293.6);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_957.setTransform(335.675,293.9);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_958.setTransform(317.25,293.75);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_959.setTransform(300.1,296.75);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#FF0000").s().p("AgaBvIgTgDIAAgVIAUACIAUABQAaABANgMQANgNAAgcIAAgQQgFAOgMAIQgMAJgWAAQgbAAgPgLQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPgBAKAFQALAEAGAHQAGAIADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgoAAIgUgCgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAIQAJAHATABQASAAALgHQALgIAFgNQAEgMAAgUQAAgSgEgPQgFgNgLgHQgLgIgSAAQgTAAgKAJg");
	this.shape_960.setTransform(274.4737,296.6);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_961.setTransform(256.1523,293.6);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACABAKQgBAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_962.setTransform(242.85,290.725);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_963.setTransform(234.175,293.6);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_964.setTransform(217.625,293.775);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_965.setTransform(200.425,293.75);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_966.setTransform(179.325,293.75);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_967.setTransform(150.525,293.75);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#FF0000").s().p("AAfByIg7hMIgJAAIAABMIgaAAIAAjjIAaAAIAACEIAKAAIA3hCIAgAAIhDBLIBGBWg");
	this.shape_968.setTransform(135.35,290.45);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#FF0000").s().p("AgMBvIAAihIAZAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_969.setTransform(122.3,290.725);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_970.setTransform(115.025,290.55);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_971.setTransform(92.675,293.9);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_972.setTransform(74.25,293.75);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_973.setTransform(57.1,296.75);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAEgNABgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_974.setTransform(32.2,293.75);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_975.setTransform(12.775,291.4488);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_976.setTransform(525.275,243.8727);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAKgFAFgIQAGgJAEgMIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgHAVgJAOQgIAPgOAIQgOAIgYAAg");
	this.shape_977.setTransform(510.6,249.2);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_978.setTransform(492.875,246.225);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_979.setTransform(474.175,243.8988);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#FF0000").s().p("AgXBTIgRgCIgOgDIAAgWIAPADIARACIAQABQARABAKgGQAJgFAAgOQAAgKgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgFQgKgFgEgJQgEgJABgOQAAgUAOgLQAPgMAbgBQAMABAMABQALABAHADIgDAWQgHgDgJgBQgLgCgLAAQgQgBgJAFQgIAFgBAOQAAAIADAFQACAEAIADQAGADAMADQASAEALAFQALAFAGAKQAEAJAAAQQAAAXgPAMQgRAMgcAAIgRgBg");
	this.shape_980.setTransform(448.55,246.15);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#FF0000").s().p("AgUAnIAIgaQAEgNACgMQACgOABgMIAYAAQAAALgEAOQgDANgFANQgFAOgFAMg");
	this.shape_981.setTransform(437.3,235.35);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKACQgJACgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_982.setTransform(424.0023,246.05);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_983.setTransform(406.025,246.2);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_984.setTransform(392.725,246.05);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_985.setTransform(376.0231,243.05);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#FF0000").s().p("AgQBqQgKgHAAgTIAAjCIAaAAIAAC8QAAAMADADQADAFAIgBIAGAAIAHgBIAAAVIgIABIgJABQgRAAgJgJg");
	this.shape_986.setTransform(363.725,243);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACAAAKQAAAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_987.setTransform(354.35,243.175);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_988.setTransform(341.0523,242.9);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#FF0000").s().p("AgQBnQgRgFgNgMQgMgLgHgVQgHgVAAghQAAgnAMgXQAMgYAWgKQAWgKAdAAQAOAAALACQALABAJADIAAAZIgUgFQgLgCgNAAQgYAAgPAHQgPAIgIASQgHATAAAeQAAAgAHATQAHASAPAHQAOAHAXAAQAOAAAMgCQAMgCAMgEIAAAXQgJAEgNADQgNACgQAAQgVAAgRgEg");
	this.shape_989.setTransform(323.225,243.8988);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKACQgJACgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_990.setTransform(296.8523,246.05);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQAQAHAJASQAJATAAAfQAAAggJATQgJASgQAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgEgOgLgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_991.setTransform(278.25,246.2);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_992.setTransform(256.675,246.05);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_993.setTransform(240.125,246.225);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_994.setTransform(222.925,246.2);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_995.setTransform(201.825,246.2);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgPIAAhvIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_996.setTransform(172.425,246.35);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAJgSAQgHQARgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgEgOgLgFQgKgHgSAAQgRAAgKAHQgKAFgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_997.setTransform(154,246.2);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAJgFAGgIQAGgJAEgMIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_998.setTransform(136.85,249.2);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_999.setTransform(111.95,246.2);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_1000.setTransform(92.7231,243.05);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1001.setTransform(70.85,244.375);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1002.setTransform(56.025,246.225);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1003.setTransform(38.2523,242.9);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_1004.setTransform(15.475,243.9);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#FF0000").s().p("AgNBlQgFgDAAgMQAAgMAFgDQADgFAKABQAKgBAFAFQAEADAAAMQAAAMgEADQgFAEgKAAQgKAAgDgEgAgJArIgEiTIAcAAIgFCTg");
	this.shape_1005.setTransform(478.95,170.05);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#FF0000").s().p("AAfByIg7hLIgJAAIAABLIgaAAIAAjjIAaAAIAACEIAKAAIA3hCIAgAAIhDBLIBHBWg");
	this.shape_1006.setTransform(467.1,168.95);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_1007.setTransform(453.425,172.1);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1008.setTransform(436.875,172.275);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#FF0000").s().p("AguBpQgPgLgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgLgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_1009.setTransform(418.3731,169.1);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAPADIARADIAPABQASgBAKgFQAJgGAAgOQAAgJgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgEQgKgHgEgIQgEgJABgOQAAgTAOgMQAPgMAcAAQALAAAMABQALABAHADIgDAWQgGgDgLgCQgKgBgLAAQgQgBgJAFQgIAGgBANQABAIACAFQACAEAIADQAGADAMACQASAFALAFQALAFAGAJQAEAKAAAQQAAAXgPAMQgRALgdAAIgQgBg");
	this.shape_1010.setTransform(394.45,172.2);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1011.setTransform(382.15,170.425);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgEIAAAYQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1012.setTransform(368.475,172.25);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#FF0000").s().p("AgaBvIgTgDIAAgVIAUADIAUAAQAaABANgMQANgNAAgcIAAgQQgFAOgMAJQgMAIgWAAQgbAAgPgLQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPgBAKAFQALAEAGAHQAGAIADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgoAAIgUgCgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAIQAJAHATABQASAAALgHQALgIAFgNQAEgMAAgUQAAgSgEgPQgFgNgLgHQgLgIgSAAQgTAAgKAJg");
	this.shape_1013.setTransform(349.7737,175.1);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1014.setTransform(327.9,170.425);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACABAKQgBAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_1015.setTransform(318.9,169.225);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1016.setTransform(303.925,169.05);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#FF0000").s().p("AgMBvIAAihIAZAAIAAChgAgLhSQgDgDAAgKQAAgKADgCQAEgDAHAAQAIAAAEADQAEACAAAKQAAAKgEADQgEADgIAAQgHAAgEgDg");
	this.shape_1017.setTransform(294.55,169.225);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1018.setTransform(285.4,170.425);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1019.setTransform(271.1523,172.1);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgLAAgRIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_1020.setTransform(252.575,172.4);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1021.setTransform(232.525,169.05);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1022.setTransform(223.925,169.05);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1023.setTransform(208.725,172.275);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#FF0000").s().p("AgdBrQgMgJgFgOIgDAdIgXAAIAAjjIAaAAIAABeQAFgOAMgIQANgJAWAAQAbAAAOALQAPAKAGASQAFASAAAaQAAAWgFATQgGATgPAMQgOALgbAAQgWAAgNgIgAgbgWQgLAHgEAOQgFANAAAUQAAASAFAOQAEAOALAIQALAIASAAQAUgBAJgIQAJgKADgOQADgOAAgPQAAgSgDgOQgDgNgKgIQgJgJgTAAQgSAAgLAIg");
	this.shape_1024.setTransform(191.125,169.1);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1025.setTransform(176.05,170.425);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQAQAHAJATQAJASAAAfQAAAggJATQgJASgQAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAFgOQADgNABgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAEANQAFAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_1026.setTransform(161.75,172.25);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_1027.setTransform(143.2,172.25);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#FF0000").s().p("AgWBzIAAiMIgbAAIAAgVIAbAAIAAgCQAAgbAHgPQAHgOALgFQAMgFARABIAJAAIAJABIAAAVIgIgBIgKgBQgLAAgHAEQgGAEgCAKQgDAKAAATIAmAAIAAAVIgmAAIAACMg");
	this.shape_1028.setTransform(129.025,168.8977);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAxCFIABAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgPAIgXAAg");
	this.shape_1029.setTransform(107.9,175.25);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1030.setTransform(90.175,172.275);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1031.setTransform(78.425,169.05);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#FF0000").s().p("AhIBxIAAjdIAaAAIAAAcQAFgOAMgIQANgJAWAAQAbAAAOALQAPAKAGASQAFATAAAaQAAAWgFASQgGATgPAMQgOALgbAAQgWAAgNgIQgMgJgFgOIAABZgAgbhSQgLAHgEAOQgFAOAAAUQAAASAFANQAEAOALAIQALAIASAAQAUgBAJgIQAJgKADgOQADgNAAgPQAAgSgDgOQgDgOgKgIQgJgJgTAAQgSAAgLAIg");
	this.shape_1032.setTransform(63.975,175.1);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgEIAAAYQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1033.setTransform(37.625,172.25);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_1034.setTransform(15.475,169.95);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_1035.setTransform(551.725,131.0969);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_1036.setTransform(537.2231,121.55);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1037.setTransform(518.325,124.725);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_1038.setTransform(499.8231,121.55);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_1039.setTransform(473.0731,121.55);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKABQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1040.setTransform(454.7523,124.55);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1041.setTransform(435.625,124.725);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_1042.setTransform(405.625,124.55);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgPIAAhvIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_1043.setTransform(382.475,124.85);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_1044.setTransform(359.575,124.55);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAJgFAGgIQAGgJAEgNIhBigIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgHAVgJAOQgIAPgOAIQgPAIgXAAg");
	this.shape_1045.setTransform(330.1,127.7);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_1046.setTransform(308.425,124.55);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1047.setTransform(277.6023,121.4);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgYAAIAAgWIAYAAIAAgmIAYAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAJgBIAKAAIAJgBIAAAWIgJABIgKAAQgRAAgKgEg");
	this.shape_1048.setTransform(263.2,122.875);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAFACAAAKQAAAKgFADQgDADgIAAQgHAAgEgDg");
	this.shape_1049.setTransform(254.2,121.675);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_1050.setTransform(237.725,124.7);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#FF0000").s().p("AAeByIg5hLIgJAAIAABLIgaAAIAAjjIAaAAIAACDIAJAAIA3hBIAgAAIhDBKIBGBXg");
	this.shape_1051.setTransform(211.1,121.4);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_1052.setTransform(197.425,124.55);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1053.setTransform(180.875,124.725);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#FF0000").s().p("AhIBwIAAjcIAaAAIAAAdQAFgPAMgJQANgIAWgBQAbABAOAKQAPALAGATQAFASAAAaQAAAWgFASQgGATgPAMQgOALgbABQgWAAgNgJQgMgIgFgPIAABYgAgbhTQgLAIgEAOQgFAOAAAUQAAASAFANQAEAOALAIQALAIASgBQAUAAAJgJQAJgIADgOQADgNAAgQQAAgSgDgOQgDgOgKgIQgJgJgTAAQgSAAgLAHg");
	this.shape_1054.setTransform(163.275,127.55);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_1055.setTransform(136.925,124.7);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1056.setTransform(119.0023,121.4);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1057.setTransform(104.6,122.875);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1058.setTransform(82.6,124.7);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1059.setTransform(68.25,122.875);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1060.setTransform(46.25,124.7);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#FF0000").s().p("AgaBvIgTgCIAAgXIAUAEIAUABQAagBANgMQANgMAAgcIAAgQQgFAOgMAJQgMAHgWABQgbAAgPgLQgPgKgFgTQgGgRAAgZQAAgXAGgSQAFgTAPgLQAPgLAbgBQAPABAKAEQALAEAGAIQAGAHADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgogBIgUgBgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAHQAJAJATAAQASAAALgIQALgGAFgOQAEgNAAgTQAAgSgEgOQgFgOgLgIQgLgHgSAAQgTAAgKAJg");
	this.shape_1061.setTransform(26.9737,127.55);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#FF0000").s().p("AgMBoIAAjPIAaAAIAADPg");
	this.shape_1062.setTransform(6.1,122.4);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_1063.setTransform(467.425,74.8227);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#FF0000").s().p("AAeByIg6hMIgJAAIAABMIgZAAIAAjjIAZAAIAACDIAKAAIA3hBIAgAAIhDBKIBHBXg");
	this.shape_1064.setTransform(454.15,73.85);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAHQgIAJgEANIAABpg");
	this.shape_1065.setTransform(440.475,77);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1066.setTransform(423.925,77.175);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#FF0000").s().p("AhIBxIAAjeIAaAAIAAAdQAFgOAMgIQANgKAWABQAbgBAOALQAPALAGASQAFAUAAAYQAAAXgFASQgGATgPALQgOAMgbABQgWAAgNgJQgMgJgFgOIAABZgAgbhTQgLAIgEAOQgFAOAAATQAAATAFANQAEAOALAIQALAHASAAQAUABAJgKQAJgJADgNQADgOAAgQQAAgRgDgOQgDgOgKgJQgJgIgTAAQgSAAgLAHg");
	this.shape_1067.setTransform(406.325,80);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAHQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_1068.setTransform(379.975,77.15);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_1069.setTransform(362.0523,73.85);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLAAgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_1070.setTransform(347.65,75.325);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAHQgIAJgEANIAABpg");
	this.shape_1071.setTransform(330.325,77);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1072.setTransform(314.3,77.15);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQARgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1073.setTransform(288.05,77.15);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1074.setTransform(269.5,77.15);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#FF0000").s().p("Ag/BRIAAgVIBbh1IAAgCIhTAAIAAgVIByAAIAAAUIhbB1IAAABIBgAAIAAAXg");
	this.shape_1075.setTransform(252.75,77.15);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAHQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_1076.setTransform(228.675,77.15);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_1077.setTransform(210.7523,73.85);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgFgLABgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQABAGAGADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_1078.setTransform(196.35,75.325);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1079.setTransform(174.35,77.15);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLAAgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_1080.setTransform(160,75.325);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1081.setTransform(138,77.15);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#FF0000").s().p("AgaBwIgTgEIAAgVIAUACIAUABQAaAAANgMQANgMAAgbIAAgRQgFAPgMAHQgMAJgWgBQgbAAgPgKQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPAAAKAEQALAEAGAIQAGAHADAKIAAgfIAaAAIAACWQAAAigTATQgUASgoABIgUgBgAgehRQgJAIgDAOQgCAOAAAQQAAARADANQADANAJAJQAJAHATABQASAAALgIQALgHAFgNQAEgNAAgTQAAgTgEgOQgFgNgLgIQgLgHgSAAQgTAAgKAJg");
	this.shape_1082.setTransform(118.7237,80);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#FF0000").s().p("AgrBMQgMgHgEgMQgFgMAAgPIAAhwIAaAAIAABmQgBAMADAJQACAJAHAFQAHAEANABQAJAAAJgCQAJgDAIgGQAHgIAFgOIAAhtIAZAAIAAChIgVAAIgEgXQgFALgIAFQgIAGgKACQgJACgKABQgVgBgMgGg");
	this.shape_1083.setTransform(92.675,77.3);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1084.setTransform(74.25,77.15);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgEAFgIQAGgIAEgNIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_1085.setTransform(57.1,80.15);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1086.setTransform(32.2,77.15);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_1087.setTransform(12.775,74.8488);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_1088.setTransform(490.975,27.2727);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAJgDAGgJQAGgIAEgOIhBigIAcAAIAxCFIABAAIAviFIAaAAIg6CcQgHAUgJAPQgIAOgOAIQgPAIgXAAg");
	this.shape_1089.setTransform(476.3,32.6);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1090.setTransform(458.575,29.625);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_1091.setTransform(439.875,27.2988);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAPADIARADIAPABQASgBAKgFQAJgGAAgOQAAgJgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgEQgKgHgEgIQgEgJABgOQAAgTAOgMQAPgMAbAAQAMAAAMABQALABAHADIgDAWQgGgDgLgCQgKgBgLAAQgQgBgJAFQgIAGgBANQABAIACAFQACAEAIADQAGADAMACQASAFAMAFQAKAFAGAJQAEAKAAAQQAAAXgPAMQgRALgdAAIgQgBg");
	this.shape_1092.setTransform(414.25,29.55);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#FF0000").s().p("AgUAmIAIgZQAEgNACgNQACgNABgLIAYAAQAAAKgEAOQgDANgFANQgFAOgFALg");
	this.shape_1093.setTransform(403,18.75);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1094.setTransform(389.7023,29.45);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1095.setTransform(371.725,29.6);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_1096.setTransform(358.425,29.45);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_1097.setTransform(341.7231,26.45);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC8QAAALADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1098.setTransform(329.425,26.4);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDAAgKQAAgKADgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_1099.setTransform(320.05,26.575);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_1100.setTransform(306.7523,26.3);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#FF0000").s().p("AgQBnQgRgFgNgMQgMgLgHgVQgHgVAAghQAAgnAMgXQAMgYAWgKQAWgKAdAAQAOAAALACQALABAJADIAAAZIgUgFQgLgCgNAAQgYAAgPAHQgPAIgIASQgHATAAAeQAAAgAHATQAHASAPAHQAOAHAXAAQAOAAAMgCQAMgCAMgEIAAAXQgJAEgNADQgNACgQAAQgVAAgRgEg");
	this.shape_1101.setTransform(288.925,27.2988);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1102.setTransform(262.5523,29.45);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQARgIAWAAQAYAAARAIQAQAHAJATQAJASAAAfQAAAggJASQgJATgQAIQgRAHgYAAQgWAAgRgHgAAdA5QAKgGAFgOQADgNAAgYQABgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgFANABAXQAAAYAEANQAFAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1103.setTransform(243.95,29.6);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAFgNAAgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1104.setTransform(217.7,29.6);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_1105.setTransform(198.4731,26.45);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgLAAgRIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_1106.setTransform(172.425,29.75);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_1107.setTransform(154,29.6);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAJgDAGgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_1108.setTransform(136.85,32.6);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAFgNAAgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1109.setTransform(111.95,29.6);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_1110.setTransform(92.7231,26.45);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1111.setTransform(70.85,27.775);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1112.setTransform(56.025,29.625);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_1113.setTransform(38.2523,26.3);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_1114.setTransform(15.475,27.3);

	var maskedShapeInstanceList = [this.shape_892,this.shape_893,this.shape_894,this.shape_895,this.shape_896,this.shape_897,this.shape_898,this.shape_899,this.shape_900,this.shape_901,this.shape_902,this.shape_903,this.shape_904,this.shape_905,this.shape_906,this.shape_907,this.shape_908,this.shape_909,this.shape_910,this.shape_911,this.shape_912,this.shape_913,this.shape_914,this.shape_915,this.shape_916,this.shape_917,this.shape_918,this.shape_919,this.shape_920,this.shape_921,this.shape_922,this.shape_923,this.shape_924,this.shape_925,this.shape_926,this.shape_927,this.shape_928,this.shape_929,this.shape_930,this.shape_931,this.shape_932,this.shape_933,this.shape_934,this.shape_935,this.shape_936,this.shape_937,this.shape_938,this.shape_939,this.shape_940,this.shape_941,this.shape_942,this.shape_943,this.shape_944,this.shape_945,this.shape_946,this.shape_947,this.shape_948,this.shape_949,this.shape_950,this.shape_951,this.shape_952,this.shape_953,this.shape_954,this.shape_955,this.shape_956,this.shape_957,this.shape_958,this.shape_959,this.shape_960,this.shape_961,this.shape_962,this.shape_963,this.shape_964,this.shape_965,this.shape_966,this.shape_967,this.shape_968,this.shape_969,this.shape_970,this.shape_971,this.shape_972,this.shape_973,this.shape_974,this.shape_975,this.shape_976,this.shape_977,this.shape_978,this.shape_979,this.shape_980,this.shape_981,this.shape_982,this.shape_983,this.shape_984,this.shape_985,this.shape_986,this.shape_987,this.shape_988,this.shape_989,this.shape_990,this.shape_991,this.shape_992,this.shape_993,this.shape_994,this.shape_995,this.shape_996,this.shape_997,this.shape_998,this.shape_999,this.shape_1000,this.shape_1001,this.shape_1002,this.shape_1003,this.shape_1004,this.shape_1005,this.shape_1006,this.shape_1007,this.shape_1008,this.shape_1009,this.shape_1010,this.shape_1011,this.shape_1012,this.shape_1013,this.shape_1014,this.shape_1015,this.shape_1016,this.shape_1017,this.shape_1018,this.shape_1019,this.shape_1020,this.shape_1021,this.shape_1022,this.shape_1023,this.shape_1024,this.shape_1025,this.shape_1026,this.shape_1027,this.shape_1028,this.shape_1029,this.shape_1030,this.shape_1031,this.shape_1032,this.shape_1033,this.shape_1034,this.shape_1035,this.shape_1036,this.shape_1037,this.shape_1038,this.shape_1039,this.shape_1040,this.shape_1041,this.shape_1042,this.shape_1043,this.shape_1044,this.shape_1045,this.shape_1046,this.shape_1047,this.shape_1048,this.shape_1049,this.shape_1050,this.shape_1051,this.shape_1052,this.shape_1053,this.shape_1054,this.shape_1055,this.shape_1056,this.shape_1057,this.shape_1058,this.shape_1059,this.shape_1060,this.shape_1061,this.shape_1062,this.shape_1063,this.shape_1064,this.shape_1065,this.shape_1066,this.shape_1067,this.shape_1068,this.shape_1069,this.shape_1070,this.shape_1071,this.shape_1072,this.shape_1073,this.shape_1074,this.shape_1075,this.shape_1076,this.shape_1077,this.shape_1078,this.shape_1079,this.shape_1080,this.shape_1081,this.shape_1082,this.shape_1083,this.shape_1084,this.shape_1085,this.shape_1086,this.shape_1087,this.shape_1088,this.shape_1089,this.shape_1090,this.shape_1091,this.shape_1092,this.shape_1093,this.shape_1094,this.shape_1095,this.shape_1096,this.shape_1097,this.shape_1098,this.shape_1099,this.shape_1100,this.shape_1101,this.shape_1102,this.shape_1103,this.shape_1104,this.shape_1105,this.shape_1106,this.shape_1107,this.shape_1108,this.shape_1109,this.shape_1110,this.shape_1111,this.shape_1112,this.shape_1113,this.shape_1114];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892}]},467).wait(670));

	// 图层_5 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_349 = new cjs.Graphics().p("AhKLqIAAn0ICVAAIAAH0g");
	var mask_5_graphics_350 = new cjs.Graphics().p("AhmD6IAAnzIDMAAIAAHzg");
	var mask_5_graphics_351 = new cjs.Graphics().p("AiBD6IAAnzIEDAAIAAHzg");
	var mask_5_graphics_352 = new cjs.Graphics().p("AidD6IAAnzIE7AAIAAHzg");
	var mask_5_graphics_353 = new cjs.Graphics().p("Ai4D6IAAnzIFxAAIAAHzg");
	var mask_5_graphics_354 = new cjs.Graphics().p("AjUD6IAAnzIGpAAIAAHzg");
	var mask_5_graphics_355 = new cjs.Graphics().p("AjwD6IAAnzIHhAAIAAHzg");
	var mask_5_graphics_356 = new cjs.Graphics().p("AkLD6IAAnzIIXAAIAAHzg");
	var mask_5_graphics_357 = new cjs.Graphics().p("AknD6IAAnzIJPAAIAAHzg");
	var mask_5_graphics_358 = new cjs.Graphics().p("AlCD6IAAnzIKFAAIAAHzg");
	var mask_5_graphics_359 = new cjs.Graphics().p("AleD6IAAnzIK9AAIAAHzg");
	var mask_5_graphics_360 = new cjs.Graphics().p("Al6D6IAAnzIL0AAIAAHzg");
	var mask_5_graphics_361 = new cjs.Graphics().p("AmVD6IAAnzIMrAAIAAHzg");
	var mask_5_graphics_362 = new cjs.Graphics().p("AmxD6IAAnzINjAAIAAHzg");
	var mask_5_graphics_363 = new cjs.Graphics().p("AnMD6IAAnzIOZAAIAAHzg");
	var mask_5_graphics_364 = new cjs.Graphics().p("AnoD6IAAnzIPRAAIAAHzg");
	var mask_5_graphics_365 = new cjs.Graphics().p("AoDD6IAAnzIQHAAIAAHzg");
	var mask_5_graphics_366 = new cjs.Graphics().p("AofD6IAAnzIQ/AAIAAHzg");
	var mask_5_graphics_367 = new cjs.Graphics().p("Ao7D6IAAnzIR2AAIAAHzg");
	var mask_5_graphics_368 = new cjs.Graphics().p("ApWD6IAAnzIStAAIAAHzg");
	var mask_5_graphics_369 = new cjs.Graphics().p("ApyD6IAAnzITlAAIAAHzg");
	var mask_5_graphics_370 = new cjs.Graphics().p("AqND6IAAnzIUbAAIAAHzg");
	var mask_5_graphics_371 = new cjs.Graphics().p("AqpD6IAAnzIVTAAIAAHzg");
	var mask_5_graphics_372 = new cjs.Graphics().p("ArED6IAAnzIWJAAIAAHzg");
	var mask_5_graphics_373 = new cjs.Graphics().p("ArgD6IAAnzIXBAAIAAHzg");
	var mask_5_graphics_374 = new cjs.Graphics().p("Ar8D6IAAnzIX4AAIAAHzg");
	var mask_5_graphics_375 = new cjs.Graphics().p("AsXD6IAAnzIYvAAIAAHzg");
	var mask_5_graphics_376 = new cjs.Graphics().p("AszD6IAAnzIZnAAIAAHzg");
	var mask_5_graphics_377 = new cjs.Graphics().p("AtOD6IAAnzIadAAIAAHzg");
	var mask_5_graphics_378 = new cjs.Graphics().p("AtqD6IAAnzIbVAAIAAHzg");
	var mask_5_graphics_379 = new cjs.Graphics().p("AuGD6IAAnzIcNAAIAAHzg");
	var mask_5_graphics_380 = new cjs.Graphics().p("AuhD6IAAnzIdDAAIAAHzg");
	var mask_5_graphics_381 = new cjs.Graphics().p("Au9D6IAAnzId6AAIAAHzg");
	var mask_5_graphics_382 = new cjs.Graphics().p("AvYD6IAAnzIexAAIAAHzg");
	var mask_5_graphics_383 = new cjs.Graphics().p("Av0D6IAAnzIfpAAIAAHzg");
	var mask_5_graphics_384 = new cjs.Graphics().p("AwPD6IAAnzMAgfAAAIAAHzg");
	var mask_5_graphics_385 = new cjs.Graphics().p("AwrD6IAAnzMAhXAAAIAAHzg");
	var mask_5_graphics_386 = new cjs.Graphics().p("AxHD6IAAnzMAiPAAAIAAHzg");
	var mask_5_graphics_387 = new cjs.Graphics().p("AxiD6IAAnzMAjFAAAIAAHzg");
	var mask_5_graphics_388 = new cjs.Graphics().p("Ax+D6IAAnzMAj9AAAIAAHzg");
	var mask_5_graphics_389 = new cjs.Graphics().p("AyZD6IAAnzMAkzAAAIAAHzg");
	var mask_5_graphics_390 = new cjs.Graphics().p("AyZD6IAAnzMAkzAAAIAAHzg");
	var mask_5_graphics_391 = new cjs.Graphics().p("AyZD6IAAnzMAkzAAAIAAHzg");
	var mask_5_graphics_392 = new cjs.Graphics().p("AyZD6IAAnzMAkzAAAIAAHzg");
	var mask_5_graphics_393 = new cjs.Graphics().p("AyZD6IAAnzMAkzAAAIAAHzg");
	var mask_5_graphics_394 = new cjs.Graphics().p("AyZD6IAAnzMAkzAAAIAAHzg");
	var mask_5_graphics_395 = new cjs.Graphics().p("AyZD6IAAnzMAkzAAAIAAHzg");
	var mask_5_graphics_396 = new cjs.Graphics().p("AyZD6IAAnzMAkzAAAIAAHzg");
	var mask_5_graphics_397 = new cjs.Graphics().p("AyZD6IAAnzMAkzAAAIAAHzg");
	var mask_5_graphics_398 = new cjs.Graphics().p("AyZD6IAAnzMAkzAAAIAAHzg");
	var mask_5_graphics_399 = new cjs.Graphics().p("AyZD6IAAnzMAkzAAAIAAHzg");
	var mask_5_graphics_400 = new cjs.Graphics().p("Ay8D6IAAnzMAl5AAAIAAHzg");
	var mask_5_graphics_401 = new cjs.Graphics().p("AzfD6IAAnzMAm/AAAIAAHzg");
	var mask_5_graphics_402 = new cjs.Graphics().p("A0CD6IAAnzMAoFAAAIAAHzg");
	var mask_5_graphics_403 = new cjs.Graphics().p("A0lD6IAAnzMApLAAAIAAHzg");
	var mask_5_graphics_404 = new cjs.Graphics().p("A1JD6IAAnzMAqSAAAIAAHzg");
	var mask_5_graphics_405 = new cjs.Graphics().p("A1sD6IAAnzMArZAAAIAAHzg");
	var mask_5_graphics_406 = new cjs.Graphics().p("A2PD6IAAnzMAsfAAAIAAHzg");
	var mask_5_graphics_407 = new cjs.Graphics().p("A2yD6IAAnzMAtkAAAIAAHzg");
	var mask_5_graphics_408 = new cjs.Graphics().p("A3VD6IAAnzMAuqAAAIAAHzg");
	var mask_5_graphics_409 = new cjs.Graphics().p("A34D6IAAnzMAvwAAAIAAHzg");
	var mask_5_graphics_410 = new cjs.Graphics().p("A4bD6IAAnzMAw3AAAIAAHzg");
	var mask_5_graphics_411 = new cjs.Graphics().p("A4+D6IAAnzMAx9AAAIAAHzg");
	var mask_5_graphics_412 = new cjs.Graphics().p("A5hD6IAAnzMAzDAAAIAAHzg");
	var mask_5_graphics_413 = new cjs.Graphics().p("A6ED6IAAnzMA0JAAAIAAHzg");
	var mask_5_graphics_414 = new cjs.Graphics().p("A6nD6IAAnzMA1PAAAIAAHzg");
	var mask_5_graphics_415 = new cjs.Graphics().p("A7KD6IAAnzMA2VAAAIAAHzg");
	var mask_5_graphics_416 = new cjs.Graphics().p("A7tD6IAAnzMA3bAAAIAAHzg");
	var mask_5_graphics_417 = new cjs.Graphics().p("A8QD6IAAnzMA4hAAAIAAHzg");
	var mask_5_graphics_418 = new cjs.Graphics().p("A8zD6IAAnzMA5nAAAIAAHzg");
	var mask_5_graphics_419 = new cjs.Graphics().p("A9WD6IAAnzMA6tAAAIAAHzg");
	var mask_5_graphics_420 = new cjs.Graphics().p("A95D6IAAnzMA7zAAAIAAHzg");
	var mask_5_graphics_421 = new cjs.Graphics().p("A+cD6IAAnzMA85AAAIAAHzg");
	var mask_5_graphics_422 = new cjs.Graphics().p("A+/D6IAAnzMA9/AAAIAAHzg");
	var mask_5_graphics_423 = new cjs.Graphics().p("A/iD6IAAnzMA/FAAAIAAHzg");
	var mask_5_graphics_424 = new cjs.Graphics().p("EggFAD6IAAnzMBALAAAIAAHzg");
	var mask_5_graphics_425 = new cjs.Graphics().p("EggoAD6IAAnzMBBRAAAIAAHzg");
	var mask_5_graphics_426 = new cjs.Graphics().p("EghLAD6IAAnzMBCXAAAIAAHzg");
	var mask_5_graphics_427 = new cjs.Graphics().p("EghuAD6IAAnzMBDdAAAIAAHzg");
	var mask_5_graphics_428 = new cjs.Graphics().p("EgiRAD6IAAnzMBEjAAAIAAHzg");
	var mask_5_graphics_429 = new cjs.Graphics().p("Egi0AD6IAAnzMBFpAAAIAAHzg");
	var mask_5_graphics_430 = new cjs.Graphics().p("EgjXAD6IAAnzMBGvAAAIAAHzg");
	var mask_5_graphics_431 = new cjs.Graphics().p("Egj6AD6IAAnzMBH1AAAIAAHzg");
	var mask_5_graphics_432 = new cjs.Graphics().p("EgkdAD6IAAnzMBI7AAAIAAHzg");
	var mask_5_graphics_433 = new cjs.Graphics().p("EglAAD6IAAnzMBKBAAAIAAHzg");
	var mask_5_graphics_434 = new cjs.Graphics().p("EgljAD6IAAnzMBLHAAAIAAHzg");
	var mask_5_graphics_435 = new cjs.Graphics().p("EgmGAD6IAAnzMBMNAAAIAAHzg");
	var mask_5_graphics_436 = new cjs.Graphics().p("EgmpAD6IAAnzMBNTAAAIAAHzg");
	var mask_5_graphics_437 = new cjs.Graphics().p("EgnMAD6IAAnzMBOZAAAIAAHzg");
	var mask_5_graphics_438 = new cjs.Graphics().p("EgnwAD6IAAnzMBPhAAAIAAHzg");
	var mask_5_graphics_439 = new cjs.Graphics().p("EgoTAD6IAAnzMBQnAAAIAAHzg");
	var mask_5_graphics_440 = new cjs.Graphics().p("Ego2AD6IAAnzMBRsAAAIAAHzg");
	var mask_5_graphics_441 = new cjs.Graphics().p("EgpZAD6IAAnzMBSyAAAIAAHzg");
	var mask_5_graphics_442 = new cjs.Graphics().p("Egp8AD6IAAnzMBT5AAAIAAHzg");
	var mask_5_graphics_443 = new cjs.Graphics().p("EgqfAD6IAAnzMBU/AAAIAAHzg");
	var mask_5_graphics_444 = new cjs.Graphics().p("EgrCAD6IAAnzMBWEAAAIAAHzg");
	var mask_5_graphics_445 = new cjs.Graphics().p("EgrlAD6IAAnzMBXKAAAIAAHzg");
	var mask_5_graphics_446 = new cjs.Graphics().p("EgsIAD6IAAnzMBYRAAAIAAHzg");
	var mask_5_graphics_447 = new cjs.Graphics().p("EgsrAD6IAAnzMBZXAAAIAAHzg");
	var mask_5_graphics_448 = new cjs.Graphics().p("EgtOAD6IAAnzMBadAAAIAAHzg");
	var mask_5_graphics_449 = new cjs.Graphics().p("EgtxAD6IAAnzMBbjAAAIAAHzg");
	var mask_5_graphics_450 = new cjs.Graphics().p("EguUAMDIAAn0MBcpAAAIAAH0g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(349).to({graphics:mask_5_graphics_349,x:-7.5,y:74.5755}).wait(1).to({graphics:mask_5_graphics_350,x:-4.75,y:124.2}).wait(1).to({graphics:mask_5_graphics_351,x:-1.975,y:124.25}).wait(1).to({graphics:mask_5_graphics_352,x:0.775,y:124.3}).wait(1).to({graphics:mask_5_graphics_353,x:3.525,y:124.35}).wait(1).to({graphics:mask_5_graphics_354,x:6.3,y:124.4}).wait(1).to({graphics:mask_5_graphics_355,x:9.05,y:124.45}).wait(1).to({graphics:mask_5_graphics_356,x:11.8,y:124.5}).wait(1).to({graphics:mask_5_graphics_357,x:14.575,y:124.55}).wait(1).to({graphics:mask_5_graphics_358,x:17.325,y:124.6}).wait(1).to({graphics:mask_5_graphics_359,x:20.075,y:124.65}).wait(1).to({graphics:mask_5_graphics_360,x:22.85,y:124.65}).wait(1).to({graphics:mask_5_graphics_361,x:25.6,y:124.7}).wait(1).to({graphics:mask_5_graphics_362,x:28.35,y:124.75}).wait(1).to({graphics:mask_5_graphics_363,x:31.125,y:124.8}).wait(1).to({graphics:mask_5_graphics_364,x:33.875,y:124.85}).wait(1).to({graphics:mask_5_graphics_365,x:36.625,y:124.9}).wait(1).to({graphics:mask_5_graphics_366,x:39.4,y:124.95}).wait(1).to({graphics:mask_5_graphics_367,x:42.15,y:125}).wait(1).to({graphics:mask_5_graphics_368,x:44.9,y:125.05}).wait(1).to({graphics:mask_5_graphics_369,x:47.675,y:125.1}).wait(1).to({graphics:mask_5_graphics_370,x:50.425,y:125.15}).wait(1).to({graphics:mask_5_graphics_371,x:53.175,y:125.2}).wait(1).to({graphics:mask_5_graphics_372,x:55.925,y:125.25}).wait(1).to({graphics:mask_5_graphics_373,x:58.7,y:125.3}).wait(1).to({graphics:mask_5_graphics_374,x:61.45,y:125.35}).wait(1).to({graphics:mask_5_graphics_375,x:64.2,y:125.4}).wait(1).to({graphics:mask_5_graphics_376,x:66.975,y:125.45}).wait(1).to({graphics:mask_5_graphics_377,x:69.725,y:125.5}).wait(1).to({graphics:mask_5_graphics_378,x:72.475,y:125.55}).wait(1).to({graphics:mask_5_graphics_379,x:75.25,y:125.6}).wait(1).to({graphics:mask_5_graphics_380,x:78,y:125.6}).wait(1).to({graphics:mask_5_graphics_381,x:80.75,y:125.65}).wait(1).to({graphics:mask_5_graphics_382,x:83.525,y:125.7}).wait(1).to({graphics:mask_5_graphics_383,x:86.275,y:125.75}).wait(1).to({graphics:mask_5_graphics_384,x:89.025,y:125.8}).wait(1).to({graphics:mask_5_graphics_385,x:91.8,y:125.85}).wait(1).to({graphics:mask_5_graphics_386,x:94.55,y:125.9}).wait(1).to({graphics:mask_5_graphics_387,x:97.3,y:125.95}).wait(1).to({graphics:mask_5_graphics_388,x:100.075,y:126}).wait(1).to({graphics:mask_5_graphics_389,x:102.825,y:126.05}).wait(1).to({graphics:mask_5_graphics_390,x:102.825,y:126.05}).wait(1).to({graphics:mask_5_graphics_391,x:102.825,y:126.05}).wait(1).to({graphics:mask_5_graphics_392,x:102.825,y:126.05}).wait(1).to({graphics:mask_5_graphics_393,x:102.825,y:126.05}).wait(1).to({graphics:mask_5_graphics_394,x:102.825,y:126.05}).wait(1).to({graphics:mask_5_graphics_395,x:102.825,y:126.05}).wait(1).to({graphics:mask_5_graphics_396,x:102.825,y:126.05}).wait(1).to({graphics:mask_5_graphics_397,x:102.825,y:126.05}).wait(1).to({graphics:mask_5_graphics_398,x:102.825,y:126.05}).wait(1).to({graphics:mask_5_graphics_399,x:102.825,y:126.05}).wait(1).to({graphics:mask_5_graphics_400,x:106.325,y:126.1}).wait(1).to({graphics:mask_5_graphics_401,x:109.825,y:126.15}).wait(1).to({graphics:mask_5_graphics_402,x:113.325,y:126.25}).wait(1).to({graphics:mask_5_graphics_403,x:116.825,y:126.3}).wait(1).to({graphics:mask_5_graphics_404,x:120.35,y:126.35}).wait(1).to({graphics:mask_5_graphics_405,x:123.85,y:126.4}).wait(1).to({graphics:mask_5_graphics_406,x:127.35,y:126.5}).wait(1).to({graphics:mask_5_graphics_407,x:130.85,y:126.55}).wait(1).to({graphics:mask_5_graphics_408,x:134.35,y:126.6}).wait(1).to({graphics:mask_5_graphics_409,x:137.85,y:126.65}).wait(1).to({graphics:mask_5_graphics_410,x:141.35,y:126.7}).wait(1).to({graphics:mask_5_graphics_411,x:144.85,y:126.8}).wait(1).to({graphics:mask_5_graphics_412,x:148.375,y:126.85}).wait(1).to({graphics:mask_5_graphics_413,x:151.875,y:126.9}).wait(1).to({graphics:mask_5_graphics_414,x:155.375,y:126.95}).wait(1).to({graphics:mask_5_graphics_415,x:158.875,y:127}).wait(1).to({graphics:mask_5_graphics_416,x:162.375,y:127.1}).wait(1).to({graphics:mask_5_graphics_417,x:165.875,y:127.15}).wait(1).to({graphics:mask_5_graphics_418,x:169.375,y:127.2}).wait(1).to({graphics:mask_5_graphics_419,x:172.875,y:127.25}).wait(1).to({graphics:mask_5_graphics_420,x:176.375,y:127.35}).wait(1).to({graphics:mask_5_graphics_421,x:179.9,y:127.4}).wait(1).to({graphics:mask_5_graphics_422,x:183.4,y:127.45}).wait(1).to({graphics:mask_5_graphics_423,x:186.9,y:127.5}).wait(1).to({graphics:mask_5_graphics_424,x:190.4,y:127.55}).wait(1).to({graphics:mask_5_graphics_425,x:193.9,y:127.65}).wait(1).to({graphics:mask_5_graphics_426,x:197.4,y:127.7}).wait(1).to({graphics:mask_5_graphics_427,x:200.9,y:127.75}).wait(1).to({graphics:mask_5_graphics_428,x:204.4,y:127.8}).wait(1).to({graphics:mask_5_graphics_429,x:207.925,y:127.85}).wait(1).to({graphics:mask_5_graphics_430,x:211.425,y:127.95}).wait(1).to({graphics:mask_5_graphics_431,x:214.925,y:128}).wait(1).to({graphics:mask_5_graphics_432,x:218.425,y:128.05}).wait(1).to({graphics:mask_5_graphics_433,x:221.925,y:128.1}).wait(1).to({graphics:mask_5_graphics_434,x:225.425,y:128.2}).wait(1).to({graphics:mask_5_graphics_435,x:228.925,y:128.25}).wait(1).to({graphics:mask_5_graphics_436,x:232.425,y:128.3}).wait(1).to({graphics:mask_5_graphics_437,x:235.925,y:128.35}).wait(1).to({graphics:mask_5_graphics_438,x:239.45,y:128.4}).wait(1).to({graphics:mask_5_graphics_439,x:242.95,y:128.5}).wait(1).to({graphics:mask_5_graphics_440,x:246.45,y:128.55}).wait(1).to({graphics:mask_5_graphics_441,x:249.95,y:128.6}).wait(1).to({graphics:mask_5_graphics_442,x:253.45,y:128.65}).wait(1).to({graphics:mask_5_graphics_443,x:256.95,y:128.7}).wait(1).to({graphics:mask_5_graphics_444,x:260.45,y:128.8}).wait(1).to({graphics:mask_5_graphics_445,x:263.95,y:128.85}).wait(1).to({graphics:mask_5_graphics_446,x:267.475,y:128.9}).wait(1).to({graphics:mask_5_graphics_447,x:270.975,y:128.95}).wait(1).to({graphics:mask_5_graphics_448,x:274.475,y:129.05}).wait(1).to({graphics:mask_5_graphics_449,x:277.975,y:129.1}).wait(1).to({graphics:mask_5_graphics_450,x:281.4715,y:77.0755}).wait(687));

	// 图层_29
	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_1115.setTransform(391.075,386.5227);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1116.setTransform(379.2,387.025);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1117.setTransform(364.375,388.875);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1118.setTransform(346.6023,385.55);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1119.setTransform(332.2,387.025);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAAQIBVgGQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_1120.setTransform(310.825,388.85);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#FF0000").s().p("AAfByIg7hLIgJAAIAABLIgaAAIAAjjIAaAAIAACDIAKAAIA3hBIAgAAIhDBKIBHBXg");
	this.shape_1121.setTransform(295.65,385.55);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#FF0000").s().p("AgNBvIAAihIAaAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_1122.setTransform(282.6,385.825);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#FF0000").s().p("AgQBqQgKgHAAgTIAAjCIAaAAIAAC8QAAAMADADQADAFAIgBIAGAAIAHgBIAAAVIgIABIgJABQgRAAgJgJg");
	this.shape_1123.setTransform(275.325,385.65);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1124.setTransform(257.15,387.025);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1125.setTransform(242.325,388.875);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1126.setTransform(224.5523,385.55);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1127.setTransform(197.725,388.875);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgYAAIAAgWIAYAAIAAgmIAZAAIAAAmIAoAAIAAAWIgoAAIAABYQAAANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1128.setTransform(176.4,387.025);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKABQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1129.setTransform(162.1523,388.7);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1130.setTransform(143.025,388.875);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_1131.setTransform(122.075,388.85);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_1132.setTransform(92.675,389);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAJgSAQgHQARgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgKAFgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1133.setTransform(74.25,388.85);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAKgFAFgIQAGgJAEgNIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_1134.setTransform(57.1,391.85);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1135.setTransform(32.2,388.85);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_1136.setTransform(12.775,386.5488);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_1137.setTransform(564.025,347.6969);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_1138.setTransform(550.2523,338);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#FF0000").s().p("AgXBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAOAAAKACQALABAHADIAAAYIgTgGQgKgBgNAAQgQAAgLAFQgKAFgEAOQgFANAAAYQgBAWAGAOQAEANAKAGQALAGARgBQAMAAALgCQAKgBAJgDIAAAXIgLADIgQACIgQABQgXAAgQgIg");
	this.shape_1139.setTransform(533.7,341.3);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#FF0000").s().p("AgrBMQgMgHgEgMQgFgMAAgPIAAhwIAaAAIAABmQgBAMADAKQACAIAHAFQAHAEANAAQAJABAJgCQAJgDAIgGQAHgIAFgOIAAhtIAZAAIAAChIgVAAIgEgXQgFALgIAFQgIAGgKACQgJACgKABQgVgBgMgGg");
	this.shape_1140.setTransform(516.775,341.45);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#FF0000").s().p("ABWBSIAAhlQAAgTgGgKQgHgLgSAAQgKAAgIADQgIACgGAHQgHAFgDAMIAAACIAABuIgZAAIAAhlQAAgTgGgKQgGgLgSAAQgKAAgIADQgIACgGAHQgHAFgEANIAABvIgaAAIAAihIAaAAIAAAWQAIgOAMgGQAMgEAPAAQATgBAMAIQAKAGAFANQAFgKAIgHQAIgFAKgDQAKgBAKAAQASgBAMAIQAMAGAFAMQAGAMAAAQIAABug");
	this.shape_1141.setTransform(493.875,341.15);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1142.setTransform(463,341.3);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#FF0000").s().p("AgYBSIgRgBIgMgDIAAgWIANADIARACIARABQARAAAJgFQAKgFAAgPQAAgJgCgFQgDgGgIgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJAAgNQAAgVAPgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgHgDgKgCQgLgCgLAAQgQAAgIAGQgJAEAAAOQAAAIACAEQADAFAGADQAHADALADQATADALAHQAMAEAEAJQAGAKAAAPQgBAZgQALQgPAMgdgBIgSgBg");
	this.shape_1143.setTransform(446.6,341.25);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgYAAIAAgWIAYAAIAAgmIAZAAIAAAmIAoAAIAAAWIgoAAIAABYQAAANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1144.setTransform(426.6,339.475);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#FF0000").s().p("AgNBvIAAihIAaAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_1145.setTransform(417.6,338.275);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_1146.setTransform(397.175,341.3);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#FF0000").s().p("AgOBRIg9ihIAaAAIAxCHIABAAIAwiHIAbAAIg9Chg");
	this.shape_1147.setTransform(380.6,341.3);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgFANABAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1148.setTransform(363.4,341.3);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#FF0000").s().p("AgQBqQgKgIAAgSIAAjCIAaAAIAAC7QAAANADADQADAEAIAAIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgJg");
	this.shape_1149.setTransform(350.925,338.1);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_1150.setTransform(333.75,339);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_1151.setTransform(317.425,347.6969);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgEAFgIQAGgIAEgNIhBihIAcAAIAxCGIABAAIAviGIAaAAIg6CbQgIAVgIAPQgIAOgOAIQgPAIgXAAg");
	this.shape_1152.setTransform(305,344.3);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgYAAIAAgWIAYAAIAAgmIAYAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAIgBIAAAWIgJABIgJAAQgRAAgKgEg");
	this.shape_1153.setTransform(292,339.475);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1154.setTransform(281.9,339.475);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_1155.setTransform(268.225,341.3);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAIQgIAIgEANIAABpg");
	this.shape_1156.setTransform(254.925,341.15);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#FF0000").s().p("AhIBxIAAjeIAaAAIAAAdQAFgOAMgIQANgKAWABQAbgBAOALQAPALAGASQAFAUAAAYQAAAXgFASQgGATgPALQgOAMgbABQgWAAgNgJQgMgJgFgOIAABZgAgbhTQgLAIgEAOQgFAOAAATQAAATAFANQAEAOALAIQALAHASAAQAUABAJgKQAJgJADgNQADgNAAgRQAAgRgDgOQgDgOgKgJQgJgIgTAAQgSAAgLAHg");
	this.shape_1157.setTransform(239.125,344.15);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1158.setTransform(212.15,341.3);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAOADIASACIAQABQARAAAKgFQAJgFAAgPQAAgJgCgFQgEgGgHgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJABgNQAAgVAOgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgIgDgJgCQgLgCgLAAQgQAAgJAGQgIAEgBAOQAAAIADAEQACAFAIADQAGADAMADQASADALAHQAMAEAEAJQAFAKABAPQgBAZgPALQgQAMgdgBIgRgBg");
	this.shape_1159.setTransform(195.75,341.25);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAOADIASACIAQABQARAAAKgFQAJgFAAgPQAAgJgCgFQgEgGgHgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJABgNQAAgVAOgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgIgDgJgCQgLgCgLAAQgQAAgJAGQgIAEgBAOQAAAIADAEQACAFAIADQAGADAMADQASADALAHQAMAEAEAJQAFAKABAPQgBAZgPALQgQAMgdgBIgRgBg");
	this.shape_1160.setTransform(173.7,341.25);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#FF0000").s().p("AgUAmIAIgZQAEgNACgMQACgOABgLIAYAAQAAALgEANQgDANgFAOQgFANgFALg");
	this.shape_1161.setTransform(162.45,330.45);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1162.setTransform(153.3,339.475);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_1163.setTransform(144.2,339);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#FF0000").s().p("AgNBmQgFgEAAgMQAAgMAFgEQADgDAKAAQAKAAAFADQAEAEAAAMQAAAMgEAEQgFADgKAAQgKAAgDgDgAgJArIgEiTIAcAAIgFCTg");
	this.shape_1164.setTransform(127.05,339.1);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1165.setTransform(112.4,341.3);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#FF0000").s().p("AguBoQgPgKgFgTQgGgSAAgaQAAgWAGgSQAFgTAPgMQAPgLAaAAQAXAAAMAIQAMAJAFAOIAAheIAaAAIAADiIgWAAIgEgaQgFANgNAIQgNAJgVAAQgaAAgPgMgAgegVQgJAJgDAOQgCAOAAAPQAAARADAPQADAOAJAIQAJAIATAAQASAAALgHQALgIAFgNQAEgOAAgUQAAgSgEgNQgFgOgLgIQgLgIgSAAQgTABgKAIg");
	this.shape_1166.setTransform(93.1731,338.15);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_1167.setTransform(72.3,339);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#FF0000").s().p("AgaAoQAIgNAHgOQAGgNAEgNQADgOAAgLIAYAAQAAAMgEAPQgGAOgHANQgHAOgGAKg");
	this.shape_1168.setTransform(55.25,349.55);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#FF0000").s().p("AgYBSIgRgBIgMgDIAAgWIANADIARACIARABQARAAAJgFQAKgFAAgPQAAgJgCgFQgDgGgIgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJAAgNQAAgVAPgMQAPgLAbAAQAMgBAMACQALACAGACIgBAWQgIgDgJgCQgLgCgLAAQgQAAgIAGQgJAEAAAOQAAAIACAEQADAFAHADQAGADALADQATADALAHQAMAEAEAJQAGAKAAAPQgBAZgQALQgPAMgdgBIgSgBg");
	this.shape_1169.setTransform(44.3,341.25);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_1170.setTransform(28.425,341.3);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#FF0000").s().p("AgNBoIAAhZIhJh2IAfAAIA3BeIACAAIA3heIAeAAIhKB2IAABZg");
	this.shape_1171.setTransform(10.925,339);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_1172.setTransform(486.225,291.4227);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgJgEg");
	this.shape_1173.setTransform(474.35,291.925);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1174.setTransform(459.525,293.775);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_1175.setTransform(441.7523,290.45);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_1176.setTransform(412.325,293.75);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1177.setTransform(391.225,293.75);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1178.setTransform(373.3023,293.6);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_1179.setTransform(351.675,293.6);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_1180.setTransform(335.675,293.9);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1181.setTransform(317.25,293.75);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_1182.setTransform(300.1,296.75);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#FF0000").s().p("AgaBvIgTgDIAAgVIAUACIAUABQAaABANgMQANgNAAgcIAAgQQgFAOgMAIQgMAJgWAAQgbAAgPgLQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPgBAKAFQALAEAGAHQAGAIADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgoAAIgUgCgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAIQAJAHATABQASAAALgHQALgIAFgNQAEgMAAgUQAAgSgEgPQgFgNgLgHQgLgIgSAAQgTAAgKAJg");
	this.shape_1183.setTransform(274.4737,296.6);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1184.setTransform(256.1523,293.6);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACABAKQgBAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_1185.setTransform(242.85,290.725);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_1186.setTransform(234.175,293.6);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1187.setTransform(217.625,293.775);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1188.setTransform(200.425,293.75);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_1189.setTransform(179.325,293.75);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1190.setTransform(150.525,293.75);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#FF0000").s().p("AAfByIg7hMIgJAAIAABMIgaAAIAAjjIAaAAIAACEIAKAAIA3hCIAgAAIhDBLIBGBWg");
	this.shape_1191.setTransform(135.35,290.45);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#FF0000").s().p("AgMBvIAAihIAZAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_1192.setTransform(122.3,290.725);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1193.setTransform(115.025,290.55);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_1194.setTransform(92.675,293.9);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1195.setTransform(74.25,293.75);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_1196.setTransform(57.1,296.75);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAEgNABgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1197.setTransform(32.2,293.75);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_1198.setTransform(12.775,291.4488);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_1199.setTransform(525.275,243.8727);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAKgFAFgIQAGgJAEgMIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgHAVgJAOQgIAPgOAIQgOAIgYAAg");
	this.shape_1200.setTransform(510.6,249.2);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1201.setTransform(492.875,246.225);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_1202.setTransform(474.175,243.8988);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#FF0000").s().p("AgXBTIgRgCIgOgDIAAgWIAPADIARACIAQABQARABAKgGQAJgFAAgOQAAgKgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgFQgKgFgEgJQgEgJABgOQAAgUAOgLQAPgMAbgBQAMABAMABQALABAHADIgDAWQgHgDgJgBQgLgCgLAAQgQgBgJAFQgIAFgBAOQAAAIADAFQACAEAIADQAGADAMADQASAEALAFQALAFAGAKQAEAJAAAQQAAAXgPAMQgRAMgcAAIgRgBg");
	this.shape_1203.setTransform(448.55,246.15);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#FF0000").s().p("AgUAnIAIgaQAEgNACgMQACgOABgMIAYAAQAAALgEAOQgDANgFANQgFAOgFAMg");
	this.shape_1204.setTransform(437.3,235.35);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKACQgJACgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1205.setTransform(424.0023,246.05);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_1206.setTransform(406.025,246.2);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_1207.setTransform(392.725,246.05);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_1208.setTransform(376.0231,243.05);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#FF0000").s().p("AgQBqQgKgHAAgTIAAjCIAaAAIAAC8QAAAMADADQADAFAIgBIAGAAIAHgBIAAAVIgIABIgJABQgRAAgJgJg");
	this.shape_1209.setTransform(363.725,243);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACAAAKQAAAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_1210.setTransform(354.35,243.175);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1211.setTransform(341.0523,242.9);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#FF0000").s().p("AgQBnQgRgFgNgMQgMgLgHgVQgHgVAAghQAAgnAMgXQAMgYAWgKQAWgKAdAAQAOAAALACQALABAJADIAAAZIgUgFQgLgCgNAAQgYAAgPAHQgPAIgIASQgHATAAAeQAAAgAHATQAHASAPAHQAOAHAXAAQAOAAAMgCQAMgCAMgEIAAAXQgJAEgNADQgNACgQAAQgVAAgRgEg");
	this.shape_1212.setTransform(323.225,243.8988);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKACQgJACgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1213.setTransform(296.8523,246.05);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQAQAHAJASQAJATAAAfQAAAggJATQgJASgQAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgEgOgLgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1214.setTransform(278.25,246.2);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_1215.setTransform(256.675,246.05);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1216.setTransform(240.125,246.225);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_1217.setTransform(222.925,246.2);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_1218.setTransform(201.825,246.2);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgPIAAhvIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_1219.setTransform(172.425,246.35);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAJgSAQgHQARgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgEgOgLgFQgKgHgSAAQgRAAgKAHQgKAFgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1220.setTransform(154,246.2);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAJgFAGgIQAGgJAEgMIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_1221.setTransform(136.85,249.2);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1222.setTransform(111.95,246.2);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_1223.setTransform(92.7231,243.05);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1224.setTransform(70.85,244.375);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1225.setTransform(56.025,246.225);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1226.setTransform(38.2523,242.9);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_1227.setTransform(15.475,243.9);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#FF0000").s().p("AgNBlQgFgDAAgMQAAgMAFgDQADgFAKABQAKgBAFAFQAEADAAAMQAAAMgEADQgFAEgKAAQgKAAgDgEgAgJArIgEiTIAcAAIgFCTg");
	this.shape_1228.setTransform(478.95,170.05);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#FF0000").s().p("AAfByIg7hLIgJAAIAABLIgaAAIAAjjIAaAAIAACEIAKAAIA3hCIAgAAIhDBLIBHBWg");
	this.shape_1229.setTransform(467.1,168.95);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_1230.setTransform(453.425,172.1);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1231.setTransform(436.875,172.275);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#FF0000").s().p("AguBpQgPgLgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgLgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_1232.setTransform(418.3731,169.1);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAPADIARADIAPABQASgBAKgFQAJgGAAgOQAAgJgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgEQgKgHgEgIQgEgJABgOQAAgTAOgMQAPgMAcAAQALAAAMABQALABAHADIgDAWQgGgDgLgCQgKgBgLAAQgQgBgJAFQgIAGgBANQABAIACAFQACAEAIADQAGADAMACQASAFALAFQALAFAGAJQAEAKAAAQQAAAXgPAMQgRALgdAAIgQgBg");
	this.shape_1233.setTransform(394.45,172.2);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1234.setTransform(382.15,170.425);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgEIAAAYQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1235.setTransform(368.475,172.25);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#FF0000").s().p("AgaBvIgTgDIAAgVIAUADIAUAAQAaABANgMQANgNAAgcIAAgQQgFAOgMAJQgMAIgWAAQgbAAgPgLQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPgBAKAFQALAEAGAHQAGAIADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgoAAIgUgCgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAIQAJAHATABQASAAALgHQALgIAFgNQAEgMAAgUQAAgSgEgPQgFgNgLgHQgLgIgSAAQgTAAgKAJg");
	this.shape_1236.setTransform(349.7737,175.1);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1237.setTransform(327.9,170.425);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACABAKQgBAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_1238.setTransform(318.9,169.225);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1239.setTransform(303.925,169.05);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#FF0000").s().p("AgMBvIAAihIAZAAIAAChgAgLhSQgDgDAAgKQAAgKADgCQAEgDAHAAQAIAAAEADQAEACAAAKQAAAKgEADQgEADgIAAQgHAAgEgDg");
	this.shape_1240.setTransform(294.55,169.225);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1241.setTransform(285.4,170.425);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1242.setTransform(271.1523,172.1);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgLAAgRIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_1243.setTransform(252.575,172.4);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1244.setTransform(232.525,169.05);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1245.setTransform(223.925,169.05);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1246.setTransform(208.725,172.275);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#FF0000").s().p("AgdBrQgMgJgFgOIgDAdIgXAAIAAjjIAaAAIAABeQAFgOAMgIQANgJAWAAQAbAAAOALQAPAKAGASQAFASAAAaQAAAWgFATQgGATgPAMQgOALgbAAQgWAAgNgIgAgbgWQgLAHgEAOQgFANAAAUQAAASAFAOQAEAOALAIQALAIASAAQAUgBAJgIQAJgKADgOQADgOAAgPQAAgSgDgOQgDgNgKgIQgJgJgTAAQgSAAgLAIg");
	this.shape_1247.setTransform(191.125,169.1);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1248.setTransform(176.05,170.425);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQAQAHAJATQAJASAAAfQAAAggJATQgJASgQAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAFgOQADgNABgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAEANQAFAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_1249.setTransform(161.75,172.25);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_1250.setTransform(143.2,172.25);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#FF0000").s().p("AgWBzIAAiMIgbAAIAAgVIAbAAIAAgCQAAgbAHgPQAHgOALgFQAMgFARABIAJAAIAJABIAAAVIgIgBIgKgBQgLAAgHAEQgGAEgCAKQgDAKAAATIAmAAIAAAVIgmAAIAACMg");
	this.shape_1251.setTransform(129.025,168.8977);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAxCFIABAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgPAIgXAAg");
	this.shape_1252.setTransform(107.9,175.25);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1253.setTransform(90.175,172.275);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1254.setTransform(78.425,169.05);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#FF0000").s().p("AhIBxIAAjdIAaAAIAAAcQAFgOAMgIQANgJAWAAQAbAAAOALQAPAKAGASQAFATAAAaQAAAWgFASQgGATgPAMQgOALgbAAQgWAAgNgIQgMgJgFgOIAABZgAgbhSQgLAHgEAOQgFAOAAAUQAAASAFANQAEAOALAIQALAIASAAQAUgBAJgIQAJgKADgOQADgNAAgPQAAgSgDgOQgDgOgKgIQgJgJgTAAQgSAAgLAIg");
	this.shape_1255.setTransform(63.975,175.1);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgEIAAAYQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1256.setTransform(37.625,172.25);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_1257.setTransform(15.475,169.95);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_1258.setTransform(551.725,131.0969);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_1259.setTransform(537.2231,121.55);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1260.setTransform(518.325,124.725);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_1261.setTransform(499.8231,121.55);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_1262.setTransform(473.0731,121.55);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKABQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1263.setTransform(454.7523,124.55);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1264.setTransform(435.625,124.725);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_1265.setTransform(405.625,124.55);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgPIAAhvIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_1266.setTransform(382.475,124.85);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_1267.setTransform(359.575,124.55);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAJgFAGgIQAGgJAEgNIhBigIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgHAVgJAOQgIAPgOAIQgPAIgXAAg");
	this.shape_1268.setTransform(330.1,127.7);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_1269.setTransform(308.425,124.55);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1270.setTransform(277.6023,121.4);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgYAAIAAgWIAYAAIAAgmIAYAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAJgBIAKAAIAJgBIAAAWIgJABIgKAAQgRAAgKgEg");
	this.shape_1271.setTransform(263.2,122.875);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAFACAAAKQAAAKgFADQgDADgIAAQgHAAgEgDg");
	this.shape_1272.setTransform(254.2,121.675);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_1273.setTransform(237.725,124.7);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#FF0000").s().p("AAeByIg5hLIgJAAIAABLIgaAAIAAjjIAaAAIAACDIAJAAIA3hBIAgAAIhDBKIBGBXg");
	this.shape_1274.setTransform(211.1,121.4);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_1275.setTransform(197.425,124.55);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1276.setTransform(180.875,124.725);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#FF0000").s().p("AhIBwIAAjcIAaAAIAAAdQAFgPAMgJQANgIAWgBQAbABAOAKQAPALAGATQAFASAAAaQAAAWgFASQgGATgPAMQgOALgbABQgWAAgNgJQgMgIgFgPIAABYgAgbhTQgLAIgEAOQgFAOAAAUQAAASAFANQAEAOALAIQALAIASgBQAUAAAJgJQAJgIADgOQADgNAAgQQAAgSgDgOQgDgOgKgIQgJgJgTAAQgSAAgLAHg");
	this.shape_1277.setTransform(163.275,127.55);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_1278.setTransform(136.925,124.7);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1279.setTransform(119.0023,121.4);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1280.setTransform(104.6,122.875);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1281.setTransform(82.6,124.7);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1282.setTransform(68.25,122.875);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1283.setTransform(46.25,124.7);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#FF0000").s().p("AgaBvIgTgCIAAgXIAUAEIAUABQAagBANgMQANgMAAgcIAAgQQgFAOgMAJQgMAHgWABQgbAAgPgLQgPgKgFgTQgGgRAAgZQAAgXAGgSQAFgTAPgLQAPgLAbgBQAPABAKAEQALAEAGAIQAGAHADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgogBIgUgBgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAHQAJAJATAAQASAAALgIQALgGAFgOQAEgNAAgTQAAgSgEgOQgFgOgLgIQgLgHgSAAQgTAAgKAJg");
	this.shape_1284.setTransform(26.9737,127.55);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#FF0000").s().p("AgMBoIAAjPIAaAAIAADPg");
	this.shape_1285.setTransform(6.1,122.4);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_1286.setTransform(467.425,74.8227);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#FF0000").s().p("AAeByIg6hMIgJAAIAABMIgZAAIAAjjIAZAAIAACDIAKAAIA3hBIAgAAIhDBKIBHBXg");
	this.shape_1287.setTransform(454.15,73.85);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAHQgIAJgEANIAABpg");
	this.shape_1288.setTransform(440.475,77);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1289.setTransform(423.925,77.175);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#FF0000").s().p("AhIBxIAAjeIAaAAIAAAdQAFgOAMgIQANgKAWABQAbgBAOALQAPALAGASQAFAUAAAYQAAAXgFASQgGATgPALQgOAMgbABQgWAAgNgJQgMgJgFgOIAABZgAgbhTQgLAIgEAOQgFAOAAATQAAATAFANQAEAOALAIQALAHASAAQAUABAJgKQAJgJADgNQADgOAAgQQAAgRgDgOQgDgOgKgJQgJgIgTAAQgSAAgLAHg");
	this.shape_1290.setTransform(406.325,80);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAHQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_1291.setTransform(379.975,77.15);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_1292.setTransform(362.0523,73.85);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLAAgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_1293.setTransform(347.65,75.325);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAHQgIAJgEANIAABpg");
	this.shape_1294.setTransform(330.325,77);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1295.setTransform(314.3,77.15);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQARgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1296.setTransform(288.05,77.15);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1297.setTransform(269.5,77.15);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#FF0000").s().p("Ag/BRIAAgVIBbh1IAAgCIhTAAIAAgVIByAAIAAAUIhbB1IAAABIBgAAIAAAXg");
	this.shape_1298.setTransform(252.75,77.15);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAHQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_1299.setTransform(228.675,77.15);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_1300.setTransform(210.7523,73.85);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgFgLABgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQABAGAGADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_1301.setTransform(196.35,75.325);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1302.setTransform(174.35,77.15);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLAAgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_1303.setTransform(160,75.325);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1304.setTransform(138,77.15);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#FF0000").s().p("AgaBwIgTgEIAAgVIAUACIAUABQAaAAANgMQANgMAAgbIAAgRQgFAPgMAHQgMAJgWgBQgbAAgPgKQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPAAAKAEQALAEAGAIQAGAHADAKIAAgfIAaAAIAACWQAAAigTATQgUASgoABIgUgBgAgehRQgJAIgDAOQgCAOAAAQQAAARADANQADANAJAJQAJAHATABQASAAALgIQALgHAFgNQAEgNAAgTQAAgTgEgOQgFgNgLgIQgLgHgSAAQgTAAgKAJg");
	this.shape_1305.setTransform(118.7237,80);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#FF0000").s().p("AgrBMQgMgHgEgMQgFgMAAgPIAAhwIAaAAIAABmQgBAMADAJQACAJAHAFQAHAEANABQAJAAAJgCQAJgDAIgGQAHgIAFgOIAAhtIAZAAIAAChIgVAAIgEgXQgFALgIAFQgIAGgKACQgJACgKABQgVgBgMgGg");
	this.shape_1306.setTransform(92.675,77.3);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1307.setTransform(74.25,77.15);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgEAFgIQAGgIAEgNIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_1308.setTransform(57.1,80.15);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1309.setTransform(32.2,77.15);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_1310.setTransform(12.775,74.8488);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_1311.setTransform(490.975,27.2727);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAJgDAGgJQAGgIAEgOIhBigIAcAAIAxCFIABAAIAviFIAaAAIg6CcQgHAUgJAPQgIAOgOAIQgPAIgXAAg");
	this.shape_1312.setTransform(476.3,32.6);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1313.setTransform(458.575,29.625);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_1314.setTransform(439.875,27.2988);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAPADIARADIAPABQASgBAKgFQAJgGAAgOQAAgJgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgEQgKgHgEgIQgEgJABgOQAAgTAOgMQAPgMAbAAQAMAAAMABQALABAHADIgDAWQgGgDgLgCQgKgBgLAAQgQgBgJAFQgIAGgBANQABAIACAFQACAEAIADQAGADAMACQASAFAMAFQAKAFAGAJQAEAKAAAQQAAAXgPAMQgRALgdAAIgQgBg");
	this.shape_1315.setTransform(414.25,29.55);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#FF0000").s().p("AgUAmIAIgZQAEgNACgNQACgNABgLIAYAAQAAAKgEAOQgDANgFANQgFAOgFALg");
	this.shape_1316.setTransform(403,18.75);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1317.setTransform(389.7023,29.45);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1318.setTransform(371.725,29.6);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_1319.setTransform(358.425,29.45);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_1320.setTransform(341.7231,26.45);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC8QAAALADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1321.setTransform(329.425,26.4);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDAAgKQAAgKADgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_1322.setTransform(320.05,26.575);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_1323.setTransform(306.7523,26.3);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#FF0000").s().p("AgQBnQgRgFgNgMQgMgLgHgVQgHgVAAghQAAgnAMgXQAMgYAWgKQAWgKAdAAQAOAAALACQALABAJADIAAAZIgUgFQgLgCgNAAQgYAAgPAHQgPAIgIASQgHATAAAeQAAAgAHATQAHASAPAHQAOAHAXAAQAOAAAMgCQAMgCAMgEIAAAXQgJAEgNADQgNACgQAAQgVAAgRgEg");
	this.shape_1324.setTransform(288.925,27.2988);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1325.setTransform(262.5523,29.45);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQARgIAWAAQAYAAARAIQAQAHAJATQAJASAAAfQAAAggJASQgJATgQAIQgRAHgYAAQgWAAgRgHgAAdA5QAKgGAFgOQADgNAAgYQABgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgFANABAXQAAAYAEANQAFAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1326.setTransform(243.95,29.6);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAFgNAAgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1327.setTransform(217.7,29.6);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_1328.setTransform(198.4731,26.45);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgLAAgRIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_1329.setTransform(172.425,29.75);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_1330.setTransform(154,29.6);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAJgDAGgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_1331.setTransform(136.85,32.6);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAFgNAAgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1332.setTransform(111.95,29.6);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_1333.setTransform(92.7231,26.45);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1334.setTransform(70.85,27.775);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1335.setTransform(56.025,29.625);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_1336.setTransform(38.2523,26.3);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_1337.setTransform(15.475,27.3);

	var maskedShapeInstanceList = [this.shape_1115,this.shape_1116,this.shape_1117,this.shape_1118,this.shape_1119,this.shape_1120,this.shape_1121,this.shape_1122,this.shape_1123,this.shape_1124,this.shape_1125,this.shape_1126,this.shape_1127,this.shape_1128,this.shape_1129,this.shape_1130,this.shape_1131,this.shape_1132,this.shape_1133,this.shape_1134,this.shape_1135,this.shape_1136,this.shape_1137,this.shape_1138,this.shape_1139,this.shape_1140,this.shape_1141,this.shape_1142,this.shape_1143,this.shape_1144,this.shape_1145,this.shape_1146,this.shape_1147,this.shape_1148,this.shape_1149,this.shape_1150,this.shape_1151,this.shape_1152,this.shape_1153,this.shape_1154,this.shape_1155,this.shape_1156,this.shape_1157,this.shape_1158,this.shape_1159,this.shape_1160,this.shape_1161,this.shape_1162,this.shape_1163,this.shape_1164,this.shape_1165,this.shape_1166,this.shape_1167,this.shape_1168,this.shape_1169,this.shape_1170,this.shape_1171,this.shape_1172,this.shape_1173,this.shape_1174,this.shape_1175,this.shape_1176,this.shape_1177,this.shape_1178,this.shape_1179,this.shape_1180,this.shape_1181,this.shape_1182,this.shape_1183,this.shape_1184,this.shape_1185,this.shape_1186,this.shape_1187,this.shape_1188,this.shape_1189,this.shape_1190,this.shape_1191,this.shape_1192,this.shape_1193,this.shape_1194,this.shape_1195,this.shape_1196,this.shape_1197,this.shape_1198,this.shape_1199,this.shape_1200,this.shape_1201,this.shape_1202,this.shape_1203,this.shape_1204,this.shape_1205,this.shape_1206,this.shape_1207,this.shape_1208,this.shape_1209,this.shape_1210,this.shape_1211,this.shape_1212,this.shape_1213,this.shape_1214,this.shape_1215,this.shape_1216,this.shape_1217,this.shape_1218,this.shape_1219,this.shape_1220,this.shape_1221,this.shape_1222,this.shape_1223,this.shape_1224,this.shape_1225,this.shape_1226,this.shape_1227,this.shape_1228,this.shape_1229,this.shape_1230,this.shape_1231,this.shape_1232,this.shape_1233,this.shape_1234,this.shape_1235,this.shape_1236,this.shape_1237,this.shape_1238,this.shape_1239,this.shape_1240,this.shape_1241,this.shape_1242,this.shape_1243,this.shape_1244,this.shape_1245,this.shape_1246,this.shape_1247,this.shape_1248,this.shape_1249,this.shape_1250,this.shape_1251,this.shape_1252,this.shape_1253,this.shape_1254,this.shape_1255,this.shape_1256,this.shape_1257,this.shape_1258,this.shape_1259,this.shape_1260,this.shape_1261,this.shape_1262,this.shape_1263,this.shape_1264,this.shape_1265,this.shape_1266,this.shape_1267,this.shape_1268,this.shape_1269,this.shape_1270,this.shape_1271,this.shape_1272,this.shape_1273,this.shape_1274,this.shape_1275,this.shape_1276,this.shape_1277,this.shape_1278,this.shape_1279,this.shape_1280,this.shape_1281,this.shape_1282,this.shape_1283,this.shape_1284,this.shape_1285,this.shape_1286,this.shape_1287,this.shape_1288,this.shape_1289,this.shape_1290,this.shape_1291,this.shape_1292,this.shape_1293,this.shape_1294,this.shape_1295,this.shape_1296,this.shape_1297,this.shape_1298,this.shape_1299,this.shape_1300,this.shape_1301,this.shape_1302,this.shape_1303,this.shape_1304,this.shape_1305,this.shape_1306,this.shape_1307,this.shape_1308,this.shape_1309,this.shape_1310,this.shape_1311,this.shape_1312,this.shape_1313,this.shape_1314,this.shape_1315,this.shape_1316,this.shape_1317,this.shape_1318,this.shape_1319,this.shape_1320,this.shape_1321,this.shape_1322,this.shape_1323,this.shape_1324,this.shape_1325,this.shape_1326,this.shape_1327,this.shape_1328,this.shape_1329,this.shape_1330,this.shape_1331,this.shape_1332,this.shape_1333,this.shape_1334,this.shape_1335,this.shape_1336,this.shape_1337];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115}]},349).wait(788));

	// 图层_11 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_235 = new cjs.Graphics().p("AhKILIAAn0ICVAAIAAH0g");
	var mask_6_graphics_236 = new cjs.Graphics().p("AhrD6IAAnzIDXAAIAAHzg");
	var mask_6_graphics_237 = new cjs.Graphics().p("AiND6IAAnzIEbAAIAAHzg");
	var mask_6_graphics_238 = new cjs.Graphics().p("AiuD6IAAnzIFdAAIAAHzg");
	var mask_6_graphics_239 = new cjs.Graphics().p("AjPD6IAAnzIGfAAIAAHzg");
	var mask_6_graphics_240 = new cjs.Graphics().p("AjwD6IAAnzIHhAAIAAHzg");
	var mask_6_graphics_241 = new cjs.Graphics().p("AkSD6IAAnzIIlAAIAAHzg");
	var mask_6_graphics_242 = new cjs.Graphics().p("AkzD6IAAnzIJnAAIAAHzg");
	var mask_6_graphics_243 = new cjs.Graphics().p("AlUD6IAAnzIKpAAIAAHzg");
	var mask_6_graphics_244 = new cjs.Graphics().p("Al1D6IAAnzILrAAIAAHzg");
	var mask_6_graphics_245 = new cjs.Graphics().p("AmXD6IAAnzIMvAAIAAHzg");
	var mask_6_graphics_246 = new cjs.Graphics().p("Am4D6IAAnzINxAAIAAHzg");
	var mask_6_graphics_247 = new cjs.Graphics().p("AnaD6IAAnzIO1AAIAAHzg");
	var mask_6_graphics_248 = new cjs.Graphics().p("An7D6IAAnzIP3AAIAAHzg");
	var mask_6_graphics_249 = new cjs.Graphics().p("AocD6IAAnzIQ5AAIAAHzg");
	var mask_6_graphics_250 = new cjs.Graphics().p("Ao+D6IAAnzIR9AAIAAHzg");
	var mask_6_graphics_251 = new cjs.Graphics().p("ApfD6IAAnzIS/AAIAAHzg");
	var mask_6_graphics_252 = new cjs.Graphics().p("AqAD6IAAnzIUBAAIAAHzg");
	var mask_6_graphics_253 = new cjs.Graphics().p("AqhD6IAAnzIVEAAIAAHzg");
	var mask_6_graphics_254 = new cjs.Graphics().p("ArDD6IAAnzIWHAAIAAHzg");
	var mask_6_graphics_255 = new cjs.Graphics().p("ArkD6IAAnzIXJAAIAAHzg");
	var mask_6_graphics_256 = new cjs.Graphics().p("AsFD6IAAnzIYLAAIAAHzg");
	var mask_6_graphics_257 = new cjs.Graphics().p("AsmD6IAAnzIZNAAIAAHzg");
	var mask_6_graphics_258 = new cjs.Graphics().p("AtID6IAAnzIaRAAIAAHzg");
	var mask_6_graphics_259 = new cjs.Graphics().p("AtpD6IAAnzIbTAAIAAHzg");
	var mask_6_graphics_260 = new cjs.Graphics().p("AuLD6IAAnzIcXAAIAAHzg");
	var mask_6_graphics_261 = new cjs.Graphics().p("AusD6IAAnzIdZAAIAAHzg");
	var mask_6_graphics_262 = new cjs.Graphics().p("AvND6IAAnzIebAAIAAHzg");
	var mask_6_graphics_263 = new cjs.Graphics().p("AvuD6IAAnzIfdAAIAAHzg");
	var mask_6_graphics_264 = new cjs.Graphics().p("AwQD6IAAnzMAggAAAIAAHzg");
	var mask_6_graphics_265 = new cjs.Graphics().p("AwxD6IAAnzMAhjAAAIAAHzg");
	var mask_6_graphics_266 = new cjs.Graphics().p("AxSD6IAAnzMAilAAAIAAHzg");
	var mask_6_graphics_267 = new cjs.Graphics().p("AxzD6IAAnzMAjnAAAIAAHzg");
	var mask_6_graphics_268 = new cjs.Graphics().p("AyVD6IAAnzMAkrAAAIAAHzg");
	var mask_6_graphics_269 = new cjs.Graphics().p("Ay2D6IAAnzMAltAAAIAAHzg");
	var mask_6_graphics_270 = new cjs.Graphics().p("AzXD6IAAnzMAmvAAAIAAHzg");
	var mask_6_graphics_271 = new cjs.Graphics().p("Az4D6IAAnzMAnyAAAIAAHzg");
	var mask_6_graphics_272 = new cjs.Graphics().p("A0aD6IAAnzMAo1AAAIAAHzg");
	var mask_6_graphics_273 = new cjs.Graphics().p("A08D6IAAnzMAp5AAAIAAHzg");
	var mask_6_graphics_274 = new cjs.Graphics().p("A1dD6IAAnzMAq7AAAIAAHzg");
	var mask_6_graphics_275 = new cjs.Graphics().p("A1+D6IAAnzMAr9AAAIAAHzg");
	var mask_6_graphics_276 = new cjs.Graphics().p("A2fD6IAAnzMAs/AAAIAAHzg");
	var mask_6_graphics_277 = new cjs.Graphics().p("A3BD6IAAnzMAuCAAAIAAHzg");
	var mask_6_graphics_278 = new cjs.Graphics().p("A3iD6IAAnzMAvFAAAIAAHzg");
	var mask_6_graphics_279 = new cjs.Graphics().p("A4DD6IAAnzMAwHAAAIAAHzg");
	var mask_6_graphics_280 = new cjs.Graphics().p("A4lD6IAAnzMAxKAAAIAAHzg");
	var mask_6_graphics_281 = new cjs.Graphics().p("A5GD6IAAnzMAyNAAAIAAHzg");
	var mask_6_graphics_282 = new cjs.Graphics().p("A5nD6IAAnzMAzPAAAIAAHzg");
	var mask_6_graphics_283 = new cjs.Graphics().p("A6ID6IAAnzMA0RAAAIAAHzg");
	var mask_6_graphics_284 = new cjs.Graphics().p("A6qD6IAAnzMA1VAAAIAAHzg");
	var mask_6_graphics_285 = new cjs.Graphics().p("A7LD6IAAnzMA2XAAAIAAHzg");
	var mask_6_graphics_286 = new cjs.Graphics().p("A7sD6IAAnzMA3ZAAAIAAHzg");
	var mask_6_graphics_287 = new cjs.Graphics().p("A8ND6IAAnzMA4bAAAIAAHzg");
	var mask_6_graphics_288 = new cjs.Graphics().p("A8vD6IAAnzMA5fAAAIAAHzg");
	var mask_6_graphics_289 = new cjs.Graphics().p("A9QD6IAAnzMA6hAAAIAAHzg");
	var mask_6_graphics_290 = new cjs.Graphics().p("A9xD6IAAnzMA7jAAAIAAHzg");
	var mask_6_graphics_291 = new cjs.Graphics().p("A+SD6IAAnzMA8mAAAIAAHzg");
	var mask_6_graphics_292 = new cjs.Graphics().p("A+0D6IAAnzMA9pAAAIAAHzg");
	var mask_6_graphics_293 = new cjs.Graphics().p("A/VD6IAAnzMA+rAAAIAAHzg");
	var mask_6_graphics_294 = new cjs.Graphics().p("A/3D6IAAnzMA/vAAAIAAHzg");
	var mask_6_graphics_295 = new cjs.Graphics().p("EggYAD6IAAnzMBAxAAAIAAHzg");
	var mask_6_graphics_296 = new cjs.Graphics().p("Egg5AD6IAAnzMBBzAAAIAAHzg");
	var mask_6_graphics_297 = new cjs.Graphics().p("EghaAD6IAAnzMBC1AAAIAAHzg");
	var mask_6_graphics_298 = new cjs.Graphics().p("Egh8AD6IAAnzMBD4AAAIAAHzg");
	var mask_6_graphics_299 = new cjs.Graphics().p("EgidAD6IAAnzMBE7AAAIAAHzg");
	var mask_6_graphics_300 = new cjs.Graphics().p("Egi+AD6IAAnzMBF9AAAIAAHzg");
	var mask_6_graphics_301 = new cjs.Graphics().p("EgjgAD6IAAnzMBHBAAAIAAHzg");
	var mask_6_graphics_302 = new cjs.Graphics().p("EgkBAD6IAAnzMBIDAAAIAAHzg");
	var mask_6_graphics_303 = new cjs.Graphics().p("EgkiAD6IAAnzMBJFAAAIAAHzg");
	var mask_6_graphics_304 = new cjs.Graphics().p("EglDAD6IAAnzMBKIAAAIAAHzg");
	var mask_6_graphics_305 = new cjs.Graphics().p("EgllAD6IAAnzMBLLAAAIAAHzg");
	var mask_6_graphics_306 = new cjs.Graphics().p("EgmGAD6IAAnzMBMNAAAIAAHzg");
	var mask_6_graphics_307 = new cjs.Graphics().p("EgmoAD6IAAnzMBNRAAAIAAHzg");
	var mask_6_graphics_308 = new cjs.Graphics().p("EgnJAD6IAAnzMBOTAAAIAAHzg");
	var mask_6_graphics_309 = new cjs.Graphics().p("EgnqAD6IAAnzMBPVAAAIAAHzg");
	var mask_6_graphics_310 = new cjs.Graphics().p("EgoLAILIAAn0MBQXAAAIAAH0g");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(235).to({graphics:mask_6_graphics_235,x:-7.5,y:52.3005}).wait(1).to({graphics:mask_6_graphics_236,x:-4.175,y:79.6}).wait(1).to({graphics:mask_6_graphics_237,x:-0.85,y:79.6}).wait(1).to({graphics:mask_6_graphics_238,x:2.475,y:79.6}).wait(1).to({graphics:mask_6_graphics_239,x:5.775,y:79.6}).wait(1).to({graphics:mask_6_graphics_240,x:9.1,y:79.6}).wait(1).to({graphics:mask_6_graphics_241,x:12.425,y:79.6}).wait(1).to({graphics:mask_6_graphics_242,x:15.75,y:79.6}).wait(1).to({graphics:mask_6_graphics_243,x:19.075,y:79.6}).wait(1).to({graphics:mask_6_graphics_244,x:22.4,y:79.6}).wait(1).to({graphics:mask_6_graphics_245,x:25.725,y:79.6}).wait(1).to({graphics:mask_6_graphics_246,x:29.025,y:79.6}).wait(1).to({graphics:mask_6_graphics_247,x:32.375,y:79.6}).wait(1).to({graphics:mask_6_graphics_248,x:35.7,y:79.6}).wait(1).to({graphics:mask_6_graphics_249,x:39.025,y:79.6}).wait(1).to({graphics:mask_6_graphics_250,x:42.35,y:79.6}).wait(1).to({graphics:mask_6_graphics_251,x:45.675,y:79.6}).wait(1).to({graphics:mask_6_graphics_252,x:49,y:79.6}).wait(1).to({graphics:mask_6_graphics_253,x:52.3,y:79.6}).wait(1).to({graphics:mask_6_graphics_254,x:55.625,y:79.6}).wait(1).to({graphics:mask_6_graphics_255,x:58.95,y:79.6}).wait(1).to({graphics:mask_6_graphics_256,x:62.275,y:79.6}).wait(1).to({graphics:mask_6_graphics_257,x:65.6,y:79.6}).wait(1).to({graphics:mask_6_graphics_258,x:68.925,y:79.6}).wait(1).to({graphics:mask_6_graphics_259,x:72.225,y:79.6}).wait(1).to({graphics:mask_6_graphics_260,x:75.55,y:79.6}).wait(1).to({graphics:mask_6_graphics_261,x:78.875,y:79.6}).wait(1).to({graphics:mask_6_graphics_262,x:82.2,y:79.6}).wait(1).to({graphics:mask_6_graphics_263,x:85.525,y:79.6}).wait(1).to({graphics:mask_6_graphics_264,x:88.85,y:79.6}).wait(1).to({graphics:mask_6_graphics_265,x:92.175,y:79.6}).wait(1).to({graphics:mask_6_graphics_266,x:95.475,y:79.6}).wait(1).to({graphics:mask_6_graphics_267,x:98.8,y:79.6}).wait(1).to({graphics:mask_6_graphics_268,x:102.125,y:79.6}).wait(1).to({graphics:mask_6_graphics_269,x:105.45,y:79.6}).wait(1).to({graphics:mask_6_graphics_270,x:108.775,y:79.6}).wait(1).to({graphics:mask_6_graphics_271,x:112.1,y:79.6}).wait(1).to({graphics:mask_6_graphics_272,x:115.425,y:79.6}).wait(1).to({graphics:mask_6_graphics_273,x:118.75,y:79.6}).wait(1).to({graphics:mask_6_graphics_274,x:122.075,y:79.6}).wait(1).to({graphics:mask_6_graphics_275,x:125.4,y:79.6}).wait(1).to({graphics:mask_6_graphics_276,x:128.725,y:79.6}).wait(1).to({graphics:mask_6_graphics_277,x:132.05,y:79.6}).wait(1).to({graphics:mask_6_graphics_278,x:135.375,y:79.6}).wait(1).to({graphics:mask_6_graphics_279,x:138.7,y:79.6}).wait(1).to({graphics:mask_6_graphics_280,x:142,y:79.6}).wait(1).to({graphics:mask_6_graphics_281,x:145.325,y:79.6}).wait(1).to({graphics:mask_6_graphics_282,x:148.65,y:79.6}).wait(1).to({graphics:mask_6_graphics_283,x:151.975,y:79.6}).wait(1).to({graphics:mask_6_graphics_284,x:155.3,y:79.6}).wait(1).to({graphics:mask_6_graphics_285,x:158.625,y:79.6}).wait(1).to({graphics:mask_6_graphics_286,x:161.95,y:79.6}).wait(1).to({graphics:mask_6_graphics_287,x:165.25,y:79.6}).wait(1).to({graphics:mask_6_graphics_288,x:168.575,y:79.6}).wait(1).to({graphics:mask_6_graphics_289,x:171.9,y:79.6}).wait(1).to({graphics:mask_6_graphics_290,x:175.225,y:79.6}).wait(1).to({graphics:mask_6_graphics_291,x:178.55,y:79.6}).wait(1).to({graphics:mask_6_graphics_292,x:181.875,y:79.6}).wait(1).to({graphics:mask_6_graphics_293,x:185.175,y:79.6}).wait(1).to({graphics:mask_6_graphics_294,x:188.5,y:79.6}).wait(1).to({graphics:mask_6_graphics_295,x:191.825,y:79.6}).wait(1).to({graphics:mask_6_graphics_296,x:195.15,y:79.6}).wait(1).to({graphics:mask_6_graphics_297,x:198.475,y:79.6}).wait(1).to({graphics:mask_6_graphics_298,x:201.8,y:79.6}).wait(1).to({graphics:mask_6_graphics_299,x:205.15,y:79.6}).wait(1).to({graphics:mask_6_graphics_300,x:208.45,y:79.6}).wait(1).to({graphics:mask_6_graphics_301,x:211.775,y:79.6}).wait(1).to({graphics:mask_6_graphics_302,x:215.1,y:79.6}).wait(1).to({graphics:mask_6_graphics_303,x:218.425,y:79.6}).wait(1).to({graphics:mask_6_graphics_304,x:221.75,y:79.6}).wait(1).to({graphics:mask_6_graphics_305,x:225.075,y:79.6}).wait(1).to({graphics:mask_6_graphics_306,x:228.4,y:79.6}).wait(1).to({graphics:mask_6_graphics_307,x:231.7,y:79.6}).wait(1).to({graphics:mask_6_graphics_308,x:235.025,y:79.6}).wait(1).to({graphics:mask_6_graphics_309,x:238.35,y:79.6}).wait(1).to({graphics:mask_6_graphics_310,x:241.6688,y:52.3005}).wait(827));

	// 图层_28
	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_1338.setTransform(391.075,386.5227);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1339.setTransform(379.2,387.025);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1340.setTransform(364.375,388.875);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1341.setTransform(346.6023,385.55);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1342.setTransform(332.2,387.025);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAAQIBVgGQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_1343.setTransform(310.825,388.85);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#FF0000").s().p("AAfByIg7hLIgJAAIAABLIgaAAIAAjjIAaAAIAACDIAKAAIA3hBIAgAAIhDBKIBHBXg");
	this.shape_1344.setTransform(295.65,385.55);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#FF0000").s().p("AgNBvIAAihIAaAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_1345.setTransform(282.6,385.825);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#FF0000").s().p("AgQBqQgKgHAAgTIAAjCIAaAAIAAC8QAAAMADADQADAFAIgBIAGAAIAHgBIAAAVIgIABIgJABQgRAAgJgJg");
	this.shape_1346.setTransform(275.325,385.65);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1347.setTransform(257.15,387.025);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1348.setTransform(242.325,388.875);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1349.setTransform(224.5523,385.55);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1350.setTransform(197.725,388.875);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgYAAIAAgWIAYAAIAAgmIAZAAIAAAmIAoAAIAAAWIgoAAIAABYQAAANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1351.setTransform(176.4,387.025);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKABQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1352.setTransform(162.1523,388.7);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1353.setTransform(143.025,388.875);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_1354.setTransform(122.075,388.85);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_1355.setTransform(92.675,389);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAJgSAQgHQARgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgKAFgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1356.setTransform(74.25,388.85);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAKgFAFgIQAGgJAEgNIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_1357.setTransform(57.1,391.85);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1358.setTransform(32.2,388.85);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_1359.setTransform(12.775,386.5488);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_1360.setTransform(564.025,347.6969);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_1361.setTransform(550.2523,338);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#FF0000").s().p("AgXBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAOAAAKACQALABAHADIAAAYIgTgGQgKgBgNAAQgQAAgLAFQgKAFgEAOQgFANAAAYQgBAWAGAOQAEANAKAGQALAGARgBQAMAAALgCQAKgBAJgDIAAAXIgLADIgQACIgQABQgXAAgQgIg");
	this.shape_1362.setTransform(533.7,341.3);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#FF0000").s().p("AgrBMQgMgHgEgMQgFgMAAgPIAAhwIAaAAIAABmQgBAMADAKQACAIAHAFQAHAEANAAQAJABAJgCQAJgDAIgGQAHgIAFgOIAAhtIAZAAIAAChIgVAAIgEgXQgFALgIAFQgIAGgKACQgJACgKABQgVgBgMgGg");
	this.shape_1363.setTransform(516.775,341.45);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#FF0000").s().p("ABWBSIAAhlQAAgTgGgKQgHgLgSAAQgKAAgIADQgIACgGAHQgHAFgDAMIAAACIAABuIgZAAIAAhlQAAgTgGgKQgGgLgSAAQgKAAgIADQgIACgGAHQgHAFgEANIAABvIgaAAIAAihIAaAAIAAAWQAIgOAMgGQAMgEAPAAQATgBAMAIQAKAGAFANQAFgKAIgHQAIgFAKgDQAKgBAKAAQASgBAMAIQAMAGAFAMQAGAMAAAQIAABug");
	this.shape_1364.setTransform(493.875,341.15);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1365.setTransform(463,341.3);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#FF0000").s().p("AgYBSIgRgBIgMgDIAAgWIANADIARACIARABQARAAAJgFQAKgFAAgPQAAgJgCgFQgDgGgIgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJAAgNQAAgVAPgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgHgDgKgCQgLgCgLAAQgQAAgIAGQgJAEAAAOQAAAIACAEQADAFAGADQAHADALADQATADALAHQAMAEAEAJQAGAKAAAPQgBAZgQALQgPAMgdgBIgSgBg");
	this.shape_1366.setTransform(446.6,341.25);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgYAAIAAgWIAYAAIAAgmIAZAAIAAAmIAoAAIAAAWIgoAAIAABYQAAANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1367.setTransform(426.6,339.475);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#FF0000").s().p("AgNBvIAAihIAaAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_1368.setTransform(417.6,338.275);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_1369.setTransform(397.175,341.3);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#FF0000").s().p("AgOBRIg9ihIAaAAIAxCHIABAAIAwiHIAbAAIg9Chg");
	this.shape_1370.setTransform(380.6,341.3);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgFANABAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1371.setTransform(363.4,341.3);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#FF0000").s().p("AgQBqQgKgIAAgSIAAjCIAaAAIAAC7QAAANADADQADAEAIAAIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgJg");
	this.shape_1372.setTransform(350.925,338.1);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_1373.setTransform(333.75,339);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_1374.setTransform(317.425,347.6969);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgEAFgIQAGgIAEgNIhBihIAcAAIAxCGIABAAIAviGIAaAAIg6CbQgIAVgIAPQgIAOgOAIQgPAIgXAAg");
	this.shape_1375.setTransform(305,344.3);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgYAAIAAgWIAYAAIAAgmIAYAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAIgBIAAAWIgJABIgJAAQgRAAgKgEg");
	this.shape_1376.setTransform(292,339.475);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1377.setTransform(281.9,339.475);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_1378.setTransform(268.225,341.3);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAIQgIAIgEANIAABpg");
	this.shape_1379.setTransform(254.925,341.15);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#FF0000").s().p("AhIBxIAAjeIAaAAIAAAdQAFgOAMgIQANgKAWABQAbgBAOALQAPALAGASQAFAUAAAYQAAAXgFASQgGATgPALQgOAMgbABQgWAAgNgJQgMgJgFgOIAABZgAgbhTQgLAIgEAOQgFAOAAATQAAATAFANQAEAOALAIQALAHASAAQAUABAJgKQAJgJADgNQADgNAAgRQAAgRgDgOQgDgOgKgJQgJgIgTAAQgSAAgLAHg");
	this.shape_1380.setTransform(239.125,344.15);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1381.setTransform(212.15,341.3);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAOADIASACIAQABQARAAAKgFQAJgFAAgPQAAgJgCgFQgEgGgHgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJABgNQAAgVAOgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgIgDgJgCQgLgCgLAAQgQAAgJAGQgIAEgBAOQAAAIADAEQACAFAIADQAGADAMADQASADALAHQAMAEAEAJQAFAKABAPQgBAZgPALQgQAMgdgBIgRgBg");
	this.shape_1382.setTransform(195.75,341.25);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAOADIASACIAQABQARAAAKgFQAJgFAAgPQAAgJgCgFQgEgGgHgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJABgNQAAgVAOgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgIgDgJgCQgLgCgLAAQgQAAgJAGQgIAEgBAOQAAAIADAEQACAFAIADQAGADAMADQASADALAHQAMAEAEAJQAFAKABAPQgBAZgPALQgQAMgdgBIgRgBg");
	this.shape_1383.setTransform(173.7,341.25);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#FF0000").s().p("AgUAmIAIgZQAEgNACgMQACgOABgLIAYAAQAAALgEANQgDANgFAOQgFANgFALg");
	this.shape_1384.setTransform(162.45,330.45);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1385.setTransform(153.3,339.475);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_1386.setTransform(144.2,339);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#FF0000").s().p("AgNBmQgFgEAAgMQAAgMAFgEQADgDAKAAQAKAAAFADQAEAEAAAMQAAAMgEAEQgFADgKAAQgKAAgDgDgAgJArIgEiTIAcAAIgFCTg");
	this.shape_1387.setTransform(127.05,339.1);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1388.setTransform(112.4,341.3);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#FF0000").s().p("AguBoQgPgKgFgTQgGgSAAgaQAAgWAGgSQAFgTAPgMQAPgLAaAAQAXAAAMAIQAMAJAFAOIAAheIAaAAIAADiIgWAAIgEgaQgFANgNAIQgNAJgVAAQgaAAgPgMgAgegVQgJAJgDAOQgCAOAAAPQAAARADAPQADAOAJAIQAJAIATAAQASAAALgHQALgIAFgNQAEgOAAgUQAAgSgEgNQgFgOgLgIQgLgIgSAAQgTABgKAIg");
	this.shape_1389.setTransform(93.1731,338.15);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_1390.setTransform(72.3,339);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#FF0000").s().p("AgaAoQAIgNAHgOQAGgNAEgNQADgOAAgLIAYAAQAAAMgEAPQgGAOgHANQgHAOgGAKg");
	this.shape_1391.setTransform(55.25,349.55);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#FF0000").s().p("AgYBSIgRgBIgMgDIAAgWIANADIARACIARABQARAAAJgFQAKgFAAgPQAAgJgCgFQgDgGgIgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJAAgNQAAgVAPgMQAPgLAbAAQAMgBAMACQALACAGACIgBAWQgIgDgJgCQgLgCgLAAQgQAAgIAGQgJAEAAAOQAAAIACAEQADAFAHADQAGADALADQATADALAHQAMAEAEAJQAGAKAAAPQgBAZgQALQgPAMgdgBIgSgBg");
	this.shape_1392.setTransform(44.3,341.25);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_1393.setTransform(28.425,341.3);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#FF0000").s().p("AgNBoIAAhZIhJh2IAfAAIA3BeIACAAIA3heIAeAAIhKB2IAABZg");
	this.shape_1394.setTransform(10.925,339);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_1395.setTransform(486.225,291.4227);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgJgEg");
	this.shape_1396.setTransform(474.35,291.925);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1397.setTransform(459.525,293.775);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_1398.setTransform(441.7523,290.45);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_1399.setTransform(412.325,293.75);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1400.setTransform(391.225,293.75);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1401.setTransform(373.3023,293.6);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_1402.setTransform(351.675,293.6);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_1403.setTransform(335.675,293.9);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1404.setTransform(317.25,293.75);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_1405.setTransform(300.1,296.75);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#FF0000").s().p("AgaBvIgTgDIAAgVIAUACIAUABQAaABANgMQANgNAAgcIAAgQQgFAOgMAIQgMAJgWAAQgbAAgPgLQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPgBAKAFQALAEAGAHQAGAIADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgoAAIgUgCgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAIQAJAHATABQASAAALgHQALgIAFgNQAEgMAAgUQAAgSgEgPQgFgNgLgHQgLgIgSAAQgTAAgKAJg");
	this.shape_1406.setTransform(274.4737,296.6);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1407.setTransform(256.1523,293.6);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACABAKQgBAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_1408.setTransform(242.85,290.725);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_1409.setTransform(234.175,293.6);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1410.setTransform(217.625,293.775);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1411.setTransform(200.425,293.75);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_1412.setTransform(179.325,293.75);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1413.setTransform(150.525,293.75);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#FF0000").s().p("AAfByIg7hMIgJAAIAABMIgaAAIAAjjIAaAAIAACEIAKAAIA3hCIAgAAIhDBLIBGBWg");
	this.shape_1414.setTransform(135.35,290.45);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#FF0000").s().p("AgMBvIAAihIAZAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_1415.setTransform(122.3,290.725);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1416.setTransform(115.025,290.55);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_1417.setTransform(92.675,293.9);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1418.setTransform(74.25,293.75);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_1419.setTransform(57.1,296.75);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAEgNABgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1420.setTransform(32.2,293.75);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_1421.setTransform(12.775,291.4488);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_1422.setTransform(525.275,243.8727);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAKgFAFgIQAGgJAEgMIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgHAVgJAOQgIAPgOAIQgOAIgYAAg");
	this.shape_1423.setTransform(510.6,249.2);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1424.setTransform(492.875,246.225);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_1425.setTransform(474.175,243.8988);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#FF0000").s().p("AgXBTIgRgCIgOgDIAAgWIAPADIARACIAQABQARABAKgGQAJgFAAgOQAAgKgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgFQgKgFgEgJQgEgJABgOQAAgUAOgLQAPgMAbgBQAMABAMABQALABAHADIgDAWQgHgDgJgBQgLgCgLAAQgQgBgJAFQgIAFgBAOQAAAIADAFQACAEAIADQAGADAMADQASAEALAFQALAFAGAKQAEAJAAAQQAAAXgPAMQgRAMgcAAIgRgBg");
	this.shape_1426.setTransform(448.55,246.15);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#FF0000").s().p("AgUAnIAIgaQAEgNACgMQACgOABgMIAYAAQAAALgEAOQgDANgFANQgFAOgFAMg");
	this.shape_1427.setTransform(437.3,235.35);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKACQgJACgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1428.setTransform(424.0023,246.05);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_1429.setTransform(406.025,246.2);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_1430.setTransform(392.725,246.05);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_1431.setTransform(376.0231,243.05);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#FF0000").s().p("AgQBqQgKgHAAgTIAAjCIAaAAIAAC8QAAAMADADQADAFAIgBIAGAAIAHgBIAAAVIgIABIgJABQgRAAgJgJg");
	this.shape_1432.setTransform(363.725,243);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACAAAKQAAAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_1433.setTransform(354.35,243.175);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1434.setTransform(341.0523,242.9);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f("#FF0000").s().p("AgQBnQgRgFgNgMQgMgLgHgVQgHgVAAghQAAgnAMgXQAMgYAWgKQAWgKAdAAQAOAAALACQALABAJADIAAAZIgUgFQgLgCgNAAQgYAAgPAHQgPAIgIASQgHATAAAeQAAAgAHATQAHASAPAHQAOAHAXAAQAOAAAMgCQAMgCAMgEIAAAXQgJAEgNADQgNACgQAAQgVAAgRgEg");
	this.shape_1435.setTransform(323.225,243.8988);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKACQgJACgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1436.setTransform(296.8523,246.05);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQAQAHAJASQAJATAAAfQAAAggJATQgJASgQAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgEgOgLgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1437.setTransform(278.25,246.2);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_1438.setTransform(256.675,246.05);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1439.setTransform(240.125,246.225);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_1440.setTransform(222.925,246.2);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_1441.setTransform(201.825,246.2);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgPIAAhvIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_1442.setTransform(172.425,246.35);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAJgSAQgHQARgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgEgOgLgFQgKgHgSAAQgRAAgKAHQgKAFgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1443.setTransform(154,246.2);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAJgFAGgIQAGgJAEgMIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_1444.setTransform(136.85,249.2);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1445.setTransform(111.95,246.2);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_1446.setTransform(92.7231,243.05);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1447.setTransform(70.85,244.375);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1448.setTransform(56.025,246.225);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1449.setTransform(38.2523,242.9);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_1450.setTransform(15.475,243.9);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f("#FF0000").s().p("AgNBlQgFgDAAgMQAAgMAFgDQADgFAKABQAKgBAFAFQAEADAAAMQAAAMgEADQgFAEgKAAQgKAAgDgEgAgJArIgEiTIAcAAIgFCTg");
	this.shape_1451.setTransform(478.95,170.05);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f("#FF0000").s().p("AAfByIg7hLIgJAAIAABLIgaAAIAAjjIAaAAIAACEIAKAAIA3hCIAgAAIhDBLIBHBWg");
	this.shape_1452.setTransform(467.1,168.95);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_1453.setTransform(453.425,172.1);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1454.setTransform(436.875,172.275);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f("#FF0000").s().p("AguBpQgPgLgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgLgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_1455.setTransform(418.3731,169.1);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAPADIARADIAPABQASgBAKgFQAJgGAAgOQAAgJgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgEQgKgHgEgIQgEgJABgOQAAgTAOgMQAPgMAcAAQALAAAMABQALABAHADIgDAWQgGgDgLgCQgKgBgLAAQgQgBgJAFQgIAGgBANQABAIACAFQACAEAIADQAGADAMACQASAFALAFQALAFAGAJQAEAKAAAQQAAAXgPAMQgRALgdAAIgQgBg");
	this.shape_1456.setTransform(394.45,172.2);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1457.setTransform(382.15,170.425);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgEIAAAYQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1458.setTransform(368.475,172.25);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f("#FF0000").s().p("AgaBvIgTgDIAAgVIAUADIAUAAQAaABANgMQANgNAAgcIAAgQQgFAOgMAJQgMAIgWAAQgbAAgPgLQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPgBAKAFQALAEAGAHQAGAIADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgoAAIgUgCgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAIQAJAHATABQASAAALgHQALgIAFgNQAEgMAAgUQAAgSgEgPQgFgNgLgHQgLgIgSAAQgTAAgKAJg");
	this.shape_1459.setTransform(349.7737,175.1);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1460.setTransform(327.9,170.425);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACABAKQgBAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_1461.setTransform(318.9,169.225);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1462.setTransform(303.925,169.05);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f("#FF0000").s().p("AgMBvIAAihIAZAAIAAChgAgLhSQgDgDAAgKQAAgKADgCQAEgDAHAAQAIAAAEADQAEACAAAKQAAAKgEADQgEADgIAAQgHAAgEgDg");
	this.shape_1463.setTransform(294.55,169.225);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1464.setTransform(285.4,170.425);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1465.setTransform(271.1523,172.1);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgLAAgRIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_1466.setTransform(252.575,172.4);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1467.setTransform(232.525,169.05);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1468.setTransform(223.925,169.05);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1469.setTransform(208.725,172.275);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("#FF0000").s().p("AgdBrQgMgJgFgOIgDAdIgXAAIAAjjIAaAAIAABeQAFgOAMgIQANgJAWAAQAbAAAOALQAPAKAGASQAFASAAAaQAAAWgFATQgGATgPAMQgOALgbAAQgWAAgNgIgAgbgWQgLAHgEAOQgFANAAAUQAAASAFAOQAEAOALAIQALAIASAAQAUgBAJgIQAJgKADgOQADgOAAgPQAAgSgDgOQgDgNgKgIQgJgJgTAAQgSAAgLAIg");
	this.shape_1470.setTransform(191.125,169.1);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1471.setTransform(176.05,170.425);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQAQAHAJATQAJASAAAfQAAAggJATQgJASgQAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAFgOQADgNABgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAEANQAFAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_1472.setTransform(161.75,172.25);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_1473.setTransform(143.2,172.25);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("#FF0000").s().p("AgWBzIAAiMIgbAAIAAgVIAbAAIAAgCQAAgbAHgPQAHgOALgFQAMgFARABIAJAAIAJABIAAAVIgIgBIgKgBQgLAAgHAEQgGAEgCAKQgDAKAAATIAmAAIAAAVIgmAAIAACMg");
	this.shape_1474.setTransform(129.025,168.8977);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAxCFIABAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgPAIgXAAg");
	this.shape_1475.setTransform(107.9,175.25);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1476.setTransform(90.175,172.275);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1477.setTransform(78.425,169.05);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("#FF0000").s().p("AhIBxIAAjdIAaAAIAAAcQAFgOAMgIQANgJAWAAQAbAAAOALQAPAKAGASQAFATAAAaQAAAWgFASQgGATgPAMQgOALgbAAQgWAAgNgIQgMgJgFgOIAABZgAgbhSQgLAHgEAOQgFAOAAAUQAAASAFANQAEAOALAIQALAIASAAQAUgBAJgIQAJgKADgOQADgNAAgPQAAgSgDgOQgDgOgKgIQgJgJgTAAQgSAAgLAIg");
	this.shape_1478.setTransform(63.975,175.1);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgEIAAAYQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1479.setTransform(37.625,172.25);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_1480.setTransform(15.475,169.95);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_1481.setTransform(551.725,131.0969);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_1482.setTransform(537.2231,121.55);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1483.setTransform(518.325,124.725);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_1484.setTransform(499.8231,121.55);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_1485.setTransform(473.0731,121.55);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKABQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1486.setTransform(454.7523,124.55);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1487.setTransform(435.625,124.725);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_1488.setTransform(405.625,124.55);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgPIAAhvIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_1489.setTransform(382.475,124.85);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_1490.setTransform(359.575,124.55);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAJgFAGgIQAGgJAEgNIhBigIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgHAVgJAOQgIAPgOAIQgPAIgXAAg");
	this.shape_1491.setTransform(330.1,127.7);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_1492.setTransform(308.425,124.55);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1493.setTransform(277.6023,121.4);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgYAAIAAgWIAYAAIAAgmIAYAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAJgBIAKAAIAJgBIAAAWIgJABIgKAAQgRAAgKgEg");
	this.shape_1494.setTransform(263.2,122.875);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAFACAAAKQAAAKgFADQgDADgIAAQgHAAgEgDg");
	this.shape_1495.setTransform(254.2,121.675);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_1496.setTransform(237.725,124.7);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f("#FF0000").s().p("AAeByIg5hLIgJAAIAABLIgaAAIAAjjIAaAAIAACDIAJAAIA3hBIAgAAIhDBKIBGBXg");
	this.shape_1497.setTransform(211.1,121.4);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_1498.setTransform(197.425,124.55);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1499.setTransform(180.875,124.725);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f("#FF0000").s().p("AhIBwIAAjcIAaAAIAAAdQAFgPAMgJQANgIAWgBQAbABAOAKQAPALAGATQAFASAAAaQAAAWgFASQgGATgPAMQgOALgbABQgWAAgNgJQgMgIgFgPIAABYgAgbhTQgLAIgEAOQgFAOAAAUQAAASAFANQAEAOALAIQALAIASgBQAUAAAJgJQAJgIADgOQADgNAAgQQAAgSgDgOQgDgOgKgIQgJgJgTAAQgSAAgLAHg");
	this.shape_1500.setTransform(163.275,127.55);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_1501.setTransform(136.925,124.7);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1502.setTransform(119.0023,121.4);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1503.setTransform(104.6,122.875);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1504.setTransform(82.6,124.7);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1505.setTransform(68.25,122.875);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1506.setTransform(46.25,124.7);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f("#FF0000").s().p("AgaBvIgTgCIAAgXIAUAEIAUABQAagBANgMQANgMAAgcIAAgQQgFAOgMAJQgMAHgWABQgbAAgPgLQgPgKgFgTQgGgRAAgZQAAgXAGgSQAFgTAPgLQAPgLAbgBQAPABAKAEQALAEAGAIQAGAHADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgogBIgUgBgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAHQAJAJATAAQASAAALgIQALgGAFgOQAEgNAAgTQAAgSgEgOQgFgOgLgIQgLgHgSAAQgTAAgKAJg");
	this.shape_1507.setTransform(26.9737,127.55);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f("#FF0000").s().p("AgMBoIAAjPIAaAAIAADPg");
	this.shape_1508.setTransform(6.1,122.4);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_1509.setTransform(467.425,74.8227);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f("#FF0000").s().p("AAeByIg6hMIgJAAIAABMIgZAAIAAjjIAZAAIAACDIAKAAIA3hBIAgAAIhDBKIBHBXg");
	this.shape_1510.setTransform(454.15,73.85);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAHQgIAJgEANIAABpg");
	this.shape_1511.setTransform(440.475,77);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1512.setTransform(423.925,77.175);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f("#FF0000").s().p("AhIBxIAAjeIAaAAIAAAdQAFgOAMgIQANgKAWABQAbgBAOALQAPALAGASQAFAUAAAYQAAAXgFASQgGATgPALQgOAMgbABQgWAAgNgJQgMgJgFgOIAABZgAgbhTQgLAIgEAOQgFAOAAATQAAATAFANQAEAOALAIQALAHASAAQAUABAJgKQAJgJADgNQADgOAAgQQAAgRgDgOQgDgOgKgJQgJgIgTAAQgSAAgLAHg");
	this.shape_1513.setTransform(406.325,80);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAHQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_1514.setTransform(379.975,77.15);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_1515.setTransform(362.0523,73.85);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLAAgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_1516.setTransform(347.65,75.325);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAHQgIAJgEANIAABpg");
	this.shape_1517.setTransform(330.325,77);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1518.setTransform(314.3,77.15);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQARgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1519.setTransform(288.05,77.15);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1520.setTransform(269.5,77.15);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f("#FF0000").s().p("Ag/BRIAAgVIBbh1IAAgCIhTAAIAAgVIByAAIAAAUIhbB1IAAABIBgAAIAAAXg");
	this.shape_1521.setTransform(252.75,77.15);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAHQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_1522.setTransform(228.675,77.15);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_1523.setTransform(210.7523,73.85);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgFgLABgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQABAGAGADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_1524.setTransform(196.35,75.325);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1525.setTransform(174.35,77.15);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLAAgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_1526.setTransform(160,75.325);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1527.setTransform(138,77.15);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f("#FF0000").s().p("AgaBwIgTgEIAAgVIAUACIAUABQAaAAANgMQANgMAAgbIAAgRQgFAPgMAHQgMAJgWgBQgbAAgPgKQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPAAAKAEQALAEAGAIQAGAHADAKIAAgfIAaAAIAACWQAAAigTATQgUASgoABIgUgBgAgehRQgJAIgDAOQgCAOAAAQQAAARADANQADANAJAJQAJAHATABQASAAALgIQALgHAFgNQAEgNAAgTQAAgTgEgOQgFgNgLgIQgLgHgSAAQgTAAgKAJg");
	this.shape_1528.setTransform(118.7237,80);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f("#FF0000").s().p("AgrBMQgMgHgEgMQgFgMAAgPIAAhwIAaAAIAABmQgBAMADAJQACAJAHAFQAHAEANABQAJAAAJgCQAJgDAIgGQAHgIAFgOIAAhtIAZAAIAAChIgVAAIgEgXQgFALgIAFQgIAGgKACQgJACgKABQgVgBgMgGg");
	this.shape_1529.setTransform(92.675,77.3);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1530.setTransform(74.25,77.15);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgEAFgIQAGgIAEgNIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_1531.setTransform(57.1,80.15);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1532.setTransform(32.2,77.15);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_1533.setTransform(12.775,74.8488);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_1534.setTransform(490.975,27.2727);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAJgDAGgJQAGgIAEgOIhBigIAcAAIAxCFIABAAIAviFIAaAAIg6CcQgHAUgJAPQgIAOgOAIQgPAIgXAAg");
	this.shape_1535.setTransform(476.3,32.6);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1536.setTransform(458.575,29.625);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_1537.setTransform(439.875,27.2988);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAPADIARADIAPABQASgBAKgFQAJgGAAgOQAAgJgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgEQgKgHgEgIQgEgJABgOQAAgTAOgMQAPgMAbAAQAMAAAMABQALABAHADIgDAWQgGgDgLgCQgKgBgLAAQgQgBgJAFQgIAGgBANQABAIACAFQACAEAIADQAGADAMACQASAFAMAFQAKAFAGAJQAEAKAAAQQAAAXgPAMQgRALgdAAIgQgBg");
	this.shape_1538.setTransform(414.25,29.55);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f("#FF0000").s().p("AgUAmIAIgZQAEgNACgNQACgNABgLIAYAAQAAAKgEAOQgDANgFANQgFAOgFALg");
	this.shape_1539.setTransform(403,18.75);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1540.setTransform(389.7023,29.45);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1541.setTransform(371.725,29.6);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_1542.setTransform(358.425,29.45);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_1543.setTransform(341.7231,26.45);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC8QAAALADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1544.setTransform(329.425,26.4);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDAAgKQAAgKADgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_1545.setTransform(320.05,26.575);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_1546.setTransform(306.7523,26.3);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f("#FF0000").s().p("AgQBnQgRgFgNgMQgMgLgHgVQgHgVAAghQAAgnAMgXQAMgYAWgKQAWgKAdAAQAOAAALACQALABAJADIAAAZIgUgFQgLgCgNAAQgYAAgPAHQgPAIgIASQgHATAAAeQAAAgAHATQAHASAPAHQAOAHAXAAQAOAAAMgCQAMgCAMgEIAAAXQgJAEgNADQgNACgQAAQgVAAgRgEg");
	this.shape_1547.setTransform(288.925,27.2988);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1548.setTransform(262.5523,29.45);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQARgIAWAAQAYAAARAIQAQAHAJATQAJASAAAfQAAAggJASQgJATgQAIQgRAHgYAAQgWAAgRgHgAAdA5QAKgGAFgOQADgNAAgYQABgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgFANABAXQAAAYAEANQAFAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1549.setTransform(243.95,29.6);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAFgNAAgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1550.setTransform(217.7,29.6);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_1551.setTransform(198.4731,26.45);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgLAAgRIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_1552.setTransform(172.425,29.75);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_1553.setTransform(154,29.6);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAJgDAGgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_1554.setTransform(136.85,32.6);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAFgNAAgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1555.setTransform(111.95,29.6);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_1556.setTransform(92.7231,26.45);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1557.setTransform(70.85,27.775);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1558.setTransform(56.025,29.625);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_1559.setTransform(38.2523,26.3);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_1560.setTransform(15.475,27.3);

	var maskedShapeInstanceList = [this.shape_1338,this.shape_1339,this.shape_1340,this.shape_1341,this.shape_1342,this.shape_1343,this.shape_1344,this.shape_1345,this.shape_1346,this.shape_1347,this.shape_1348,this.shape_1349,this.shape_1350,this.shape_1351,this.shape_1352,this.shape_1353,this.shape_1354,this.shape_1355,this.shape_1356,this.shape_1357,this.shape_1358,this.shape_1359,this.shape_1360,this.shape_1361,this.shape_1362,this.shape_1363,this.shape_1364,this.shape_1365,this.shape_1366,this.shape_1367,this.shape_1368,this.shape_1369,this.shape_1370,this.shape_1371,this.shape_1372,this.shape_1373,this.shape_1374,this.shape_1375,this.shape_1376,this.shape_1377,this.shape_1378,this.shape_1379,this.shape_1380,this.shape_1381,this.shape_1382,this.shape_1383,this.shape_1384,this.shape_1385,this.shape_1386,this.shape_1387,this.shape_1388,this.shape_1389,this.shape_1390,this.shape_1391,this.shape_1392,this.shape_1393,this.shape_1394,this.shape_1395,this.shape_1396,this.shape_1397,this.shape_1398,this.shape_1399,this.shape_1400,this.shape_1401,this.shape_1402,this.shape_1403,this.shape_1404,this.shape_1405,this.shape_1406,this.shape_1407,this.shape_1408,this.shape_1409,this.shape_1410,this.shape_1411,this.shape_1412,this.shape_1413,this.shape_1414,this.shape_1415,this.shape_1416,this.shape_1417,this.shape_1418,this.shape_1419,this.shape_1420,this.shape_1421,this.shape_1422,this.shape_1423,this.shape_1424,this.shape_1425,this.shape_1426,this.shape_1427,this.shape_1428,this.shape_1429,this.shape_1430,this.shape_1431,this.shape_1432,this.shape_1433,this.shape_1434,this.shape_1435,this.shape_1436,this.shape_1437,this.shape_1438,this.shape_1439,this.shape_1440,this.shape_1441,this.shape_1442,this.shape_1443,this.shape_1444,this.shape_1445,this.shape_1446,this.shape_1447,this.shape_1448,this.shape_1449,this.shape_1450,this.shape_1451,this.shape_1452,this.shape_1453,this.shape_1454,this.shape_1455,this.shape_1456,this.shape_1457,this.shape_1458,this.shape_1459,this.shape_1460,this.shape_1461,this.shape_1462,this.shape_1463,this.shape_1464,this.shape_1465,this.shape_1466,this.shape_1467,this.shape_1468,this.shape_1469,this.shape_1470,this.shape_1471,this.shape_1472,this.shape_1473,this.shape_1474,this.shape_1475,this.shape_1476,this.shape_1477,this.shape_1478,this.shape_1479,this.shape_1480,this.shape_1481,this.shape_1482,this.shape_1483,this.shape_1484,this.shape_1485,this.shape_1486,this.shape_1487,this.shape_1488,this.shape_1489,this.shape_1490,this.shape_1491,this.shape_1492,this.shape_1493,this.shape_1494,this.shape_1495,this.shape_1496,this.shape_1497,this.shape_1498,this.shape_1499,this.shape_1500,this.shape_1501,this.shape_1502,this.shape_1503,this.shape_1504,this.shape_1505,this.shape_1506,this.shape_1507,this.shape_1508,this.shape_1509,this.shape_1510,this.shape_1511,this.shape_1512,this.shape_1513,this.shape_1514,this.shape_1515,this.shape_1516,this.shape_1517,this.shape_1518,this.shape_1519,this.shape_1520,this.shape_1521,this.shape_1522,this.shape_1523,this.shape_1524,this.shape_1525,this.shape_1526,this.shape_1527,this.shape_1528,this.shape_1529,this.shape_1530,this.shape_1531,this.shape_1532,this.shape_1533,this.shape_1534,this.shape_1535,this.shape_1536,this.shape_1537,this.shape_1538,this.shape_1539,this.shape_1540,this.shape_1541,this.shape_1542,this.shape_1543,this.shape_1544,this.shape_1545,this.shape_1546,this.shape_1547,this.shape_1548,this.shape_1549,this.shape_1550,this.shape_1551,this.shape_1552,this.shape_1553,this.shape_1554,this.shape_1555,this.shape_1556,this.shape_1557,this.shape_1558,this.shape_1559,this.shape_1560];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1560},{t:this.shape_1559},{t:this.shape_1558},{t:this.shape_1557},{t:this.shape_1556},{t:this.shape_1555},{t:this.shape_1554},{t:this.shape_1553},{t:this.shape_1552},{t:this.shape_1551},{t:this.shape_1550},{t:this.shape_1549},{t:this.shape_1548},{t:this.shape_1547},{t:this.shape_1546},{t:this.shape_1545},{t:this.shape_1544},{t:this.shape_1543},{t:this.shape_1542},{t:this.shape_1541},{t:this.shape_1540},{t:this.shape_1539},{t:this.shape_1538},{t:this.shape_1537},{t:this.shape_1536},{t:this.shape_1535},{t:this.shape_1534},{t:this.shape_1533},{t:this.shape_1532},{t:this.shape_1531},{t:this.shape_1530},{t:this.shape_1529},{t:this.shape_1528},{t:this.shape_1527},{t:this.shape_1526},{t:this.shape_1525},{t:this.shape_1524},{t:this.shape_1523},{t:this.shape_1522},{t:this.shape_1521},{t:this.shape_1520},{t:this.shape_1519},{t:this.shape_1518},{t:this.shape_1517},{t:this.shape_1516},{t:this.shape_1515},{t:this.shape_1514},{t:this.shape_1513},{t:this.shape_1512},{t:this.shape_1511},{t:this.shape_1510},{t:this.shape_1509},{t:this.shape_1508},{t:this.shape_1507},{t:this.shape_1506},{t:this.shape_1505},{t:this.shape_1504},{t:this.shape_1503},{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500},{t:this.shape_1499},{t:this.shape_1498},{t:this.shape_1497},{t:this.shape_1496},{t:this.shape_1495},{t:this.shape_1494},{t:this.shape_1493},{t:this.shape_1492},{t:this.shape_1491},{t:this.shape_1490},{t:this.shape_1489},{t:this.shape_1488},{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_1482},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_1477},{t:this.shape_1476},{t:this.shape_1475},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_1472},{t:this.shape_1471},{t:this.shape_1470},{t:this.shape_1469},{t:this.shape_1468},{t:this.shape_1467},{t:this.shape_1466},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_1463},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459},{t:this.shape_1458},{t:this.shape_1457},{t:this.shape_1456},{t:this.shape_1455},{t:this.shape_1454},{t:this.shape_1453},{t:this.shape_1452},{t:this.shape_1451},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_1433},{t:this.shape_1432},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338}]},235).wait(902));

	// 图层_12 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_120 = new cjs.Graphics().p("AhKEJIAAnzICVAAIAAHzg");
	var mask_7_graphics_121 = new cjs.Graphics().p("AhmD6IAAnzIDNAAIAAHzg");
	var mask_7_graphics_122 = new cjs.Graphics().p("AiCD6IAAnzIEFAAIAAHzg");
	var mask_7_graphics_123 = new cjs.Graphics().p("AidD6IAAnzIE7AAIAAHzg");
	var mask_7_graphics_124 = new cjs.Graphics().p("Ai5D6IAAnzIFzAAIAAHzg");
	var mask_7_graphics_125 = new cjs.Graphics().p("AjVD6IAAnzIGrAAIAAHzg");
	var mask_7_graphics_126 = new cjs.Graphics().p("AjxD6IAAnzIHjAAIAAHzg");
	var mask_7_graphics_127 = new cjs.Graphics().p("AkND6IAAnzIIaAAIAAHzg");
	var mask_7_graphics_128 = new cjs.Graphics().p("AkoD6IAAnzIJRAAIAAHzg");
	var mask_7_graphics_129 = new cjs.Graphics().p("AlED6IAAnzIKJAAIAAHzg");
	var mask_7_graphics_130 = new cjs.Graphics().p("AlgD6IAAnzILBAAIAAHzg");
	var mask_7_graphics_131 = new cjs.Graphics().p("Al8D6IAAnzIL5AAIAAHzg");
	var mask_7_graphics_132 = new cjs.Graphics().p("AmYD6IAAnzIMxAAIAAHzg");
	var mask_7_graphics_133 = new cjs.Graphics().p("AmzD6IAAnzINnAAIAAHzg");
	var mask_7_graphics_134 = new cjs.Graphics().p("AnPD6IAAnzIOfAAIAAHzg");
	var mask_7_graphics_135 = new cjs.Graphics().p("AnrD6IAAnzIPXAAIAAHzg");
	var mask_7_graphics_136 = new cjs.Graphics().p("AoHD6IAAnzIQPAAIAAHzg");
	var mask_7_graphics_137 = new cjs.Graphics().p("AoiD6IAAnzIRFAAIAAHzg");
	var mask_7_graphics_138 = new cjs.Graphics().p("Ao/D6IAAnzIR/AAIAAHzg");
	var mask_7_graphics_139 = new cjs.Graphics().p("ApaD6IAAnzIS1AAIAAHzg");
	var mask_7_graphics_140 = new cjs.Graphics().p("Ap2D6IAAnzITtAAIAAHzg");
	var mask_7_graphics_141 = new cjs.Graphics().p("AqSD6IAAnzIUlAAIAAHzg");
	var mask_7_graphics_142 = new cjs.Graphics().p("AquD6IAAnzIVcAAIAAHzg");
	var mask_7_graphics_143 = new cjs.Graphics().p("ArJD6IAAnzIWTAAIAAHzg");
	var mask_7_graphics_144 = new cjs.Graphics().p("ArlD6IAAnzIXLAAIAAHzg");
	var mask_7_graphics_145 = new cjs.Graphics().p("AsBD6IAAnzIYDAAIAAHzg");
	var mask_7_graphics_146 = new cjs.Graphics().p("AsdD6IAAnzIY7AAIAAHzg");
	var mask_7_graphics_147 = new cjs.Graphics().p("As4D6IAAnzIZxAAIAAHzg");
	var mask_7_graphics_148 = new cjs.Graphics().p("AtVD6IAAnzIarAAIAAHzg");
	var mask_7_graphics_149 = new cjs.Graphics().p("AtwD6IAAnzIbhAAIAAHzg");
	var mask_7_graphics_150 = new cjs.Graphics().p("AuMD6IAAnzIcZAAIAAHzg");
	var mask_7_graphics_151 = new cjs.Graphics().p("AuoD6IAAnzIdRAAIAAHzg");
	var mask_7_graphics_152 = new cjs.Graphics().p("AvDD6IAAnzIeHAAIAAHzg");
	var mask_7_graphics_153 = new cjs.Graphics().p("AvfD6IAAnzIe/AAIAAHzg");
	var mask_7_graphics_154 = new cjs.Graphics().p("Av7D6IAAnzIf3AAIAAHzg");
	var mask_7_graphics_155 = new cjs.Graphics().p("AwXD6IAAnzMAgvAAAIAAHzg");
	var mask_7_graphics_156 = new cjs.Graphics().p("AwzD6IAAnzMAhnAAAIAAHzg");
	var mask_7_graphics_157 = new cjs.Graphics().p("AxPD6IAAnzMAieAAAIAAHzg");
	var mask_7_graphics_158 = new cjs.Graphics().p("AxqD6IAAnzMAjVAAAIAAHzg");
	var mask_7_graphics_159 = new cjs.Graphics().p("AyGD6IAAnzMAkNAAAIAAHzg");
	var mask_7_graphics_160 = new cjs.Graphics().p("AyiD6IAAnzMAlFAAAIAAHzg");
	var mask_7_graphics_161 = new cjs.Graphics().p("Ay+D6IAAnzMAl9AAAIAAHzg");
	var mask_7_graphics_162 = new cjs.Graphics().p("AzaD6IAAnzMAm0AAAIAAHzg");
	var mask_7_graphics_163 = new cjs.Graphics().p("AzaD6IAAnzMAm0AAAIAAHzg");
	var mask_7_graphics_164 = new cjs.Graphics().p("AzaD6IAAnzMAm0AAAIAAHzg");
	var mask_7_graphics_165 = new cjs.Graphics().p("AzaD6IAAnzMAm0AAAIAAHzg");
	var mask_7_graphics_166 = new cjs.Graphics().p("AzaD6IAAnzMAm0AAAIAAHzg");
	var mask_7_graphics_167 = new cjs.Graphics().p("AzaD6IAAnzMAm0AAAIAAHzg");
	var mask_7_graphics_168 = new cjs.Graphics().p("AzaD6IAAnzMAm0AAAIAAHzg");
	var mask_7_graphics_169 = new cjs.Graphics().p("AzaD6IAAnzMAm0AAAIAAHzg");
	var mask_7_graphics_170 = new cjs.Graphics().p("AzaD6IAAnzMAm0AAAIAAHzg");
	var mask_7_graphics_171 = new cjs.Graphics().p("AzaD6IAAnzMAm0AAAIAAHzg");
	var mask_7_graphics_172 = new cjs.Graphics().p("AzyD6IAAnzMAnlAAAIAAHzg");
	var mask_7_graphics_173 = new cjs.Graphics().p("A0LD6IAAnzMAoXAAAIAAHzg");
	var mask_7_graphics_174 = new cjs.Graphics().p("A0kD6IAAnzMApJAAAIAAHzg");
	var mask_7_graphics_175 = new cjs.Graphics().p("A09D6IAAnzMAp7AAAIAAHzg");
	var mask_7_graphics_176 = new cjs.Graphics().p("A1WD6IAAnzMAqtAAAIAAHzg");
	var mask_7_graphics_177 = new cjs.Graphics().p("A1vD6IAAnzMArfAAAIAAHzg");
	var mask_7_graphics_178 = new cjs.Graphics().p("A2ID6IAAnzMAsRAAAIAAHzg");
	var mask_7_graphics_179 = new cjs.Graphics().p("A2hD6IAAnzMAtCAAAIAAHzg");
	var mask_7_graphics_180 = new cjs.Graphics().p("A26D6IAAnzMAt0AAAIAAHzg");
	var mask_7_graphics_181 = new cjs.Graphics().p("A3SD6IAAnzMAulAAAIAAHzg");
	var mask_7_graphics_182 = new cjs.Graphics().p("A3rD6IAAnzMAvXAAAIAAHzg");
	var mask_7_graphics_183 = new cjs.Graphics().p("A4ED6IAAnzMAwJAAAIAAHzg");
	var mask_7_graphics_184 = new cjs.Graphics().p("A4dD6IAAnzMAw7AAAIAAHzg");
	var mask_7_graphics_185 = new cjs.Graphics().p("A42D6IAAnzMAxtAAAIAAHzg");
	var mask_7_graphics_186 = new cjs.Graphics().p("A5OD6IAAnzMAyeAAAIAAHzg");
	var mask_7_graphics_187 = new cjs.Graphics().p("A5nD6IAAnzMAzPAAAIAAHzg");
	var mask_7_graphics_188 = new cjs.Graphics().p("A6BD6IAAnzMA0CAAAIAAHzg");
	var mask_7_graphics_189 = new cjs.Graphics().p("A6ZD6IAAnzMA0zAAAIAAHzg");
	var mask_7_graphics_190 = new cjs.Graphics().p("A6yD6IAAnzMA1lAAAIAAHzg");
	var mask_7_graphics_191 = new cjs.Graphics().p("A7LD6IAAnzMA2XAAAIAAHzg");
	var mask_7_graphics_192 = new cjs.Graphics().p("A7kD6IAAnzMA3JAAAIAAHzg");
	var mask_7_graphics_193 = new cjs.Graphics().p("A79D6IAAnzMA37AAAIAAHzg");
	var mask_7_graphics_194 = new cjs.Graphics().p("A8VD6IAAnzMA4rAAAIAAHzg");
	var mask_7_graphics_195 = new cjs.Graphics().p("A8vD6IAAnzMA5eAAAIAAHzg");
	var mask_7_graphics_196 = new cjs.Graphics().p("A9ID6IAAnzMA6RAAAIAAHzg");
	var mask_7_graphics_197 = new cjs.Graphics().p("A9gD6IAAnzMA7BAAAIAAHzg");
	var mask_7_graphics_198 = new cjs.Graphics().p("A95D6IAAnzMA7zAAAIAAHzg");
	var mask_7_graphics_199 = new cjs.Graphics().p("A+SD6IAAnzMA8lAAAIAAHzg");
	var mask_7_graphics_200 = new cjs.Graphics().p("A+rD6IAAnzMA9XAAAIAAHzg");
	var mask_7_graphics_201 = new cjs.Graphics().p("A/ED6IAAnzMA+JAAAIAAHzg");
	var mask_7_graphics_202 = new cjs.Graphics().p("A/dD6IAAnzMA+7AAAIAAHzg");
	var mask_7_graphics_203 = new cjs.Graphics().p("A/2D6IAAnzMA/sAAAIAAHzg");
	var mask_7_graphics_204 = new cjs.Graphics().p("EggPAD6IAAnzMBAfAAAIAAHzg");
	var mask_7_graphics_205 = new cjs.Graphics().p("EggnAD6IAAnzMBBQAAAIAAHzg");
	var mask_7_graphics_206 = new cjs.Graphics().p("EghAAD6IAAnzMBCBAAAIAAHzg");
	var mask_7_graphics_207 = new cjs.Graphics().p("EghZAD6IAAnzMBCzAAAIAAHzg");
	var mask_7_graphics_208 = new cjs.Graphics().p("EghyAD6IAAnzMBDlAAAIAAHzg");
	var mask_7_graphics_209 = new cjs.Graphics().p("EgiLAD6IAAnzMBEXAAAIAAHzg");
	var mask_7_graphics_210 = new cjs.Graphics().p("EgikAD6IAAnzMBFJAAAIAAHzg");
	var mask_7_graphics_211 = new cjs.Graphics().p("Egi9AD6IAAnzMBF6AAAIAAHzg");
	var mask_7_graphics_212 = new cjs.Graphics().p("EgjWAD6IAAnzMBGsAAAIAAHzg");
	var mask_7_graphics_213 = new cjs.Graphics().p("EgjvAD6IAAnzMBHfAAAIAAHzg");
	var mask_7_graphics_214 = new cjs.Graphics().p("EgkHAD6IAAnzMBIPAAAIAAHzg");
	var mask_7_graphics_215 = new cjs.Graphics().p("EgkgAD6IAAnzMBJBAAAIAAHzg");
	var mask_7_graphics_216 = new cjs.Graphics().p("Egk5AD6IAAnzMBJzAAAIAAHzg");
	var mask_7_graphics_217 = new cjs.Graphics().p("EglSAD6IAAnzMBKlAAAIAAHzg");
	var mask_7_graphics_218 = new cjs.Graphics().p("EglrAD6IAAnzMBLXAAAIAAHzg");
	var mask_7_graphics_219 = new cjs.Graphics().p("EgmDAD6IAAnzMBMHAAAIAAHzg");
	var mask_7_graphics_220 = new cjs.Graphics().p("EgmdAD6IAAnzMBM6AAAIAAHzg");
	var mask_7_graphics_221 = new cjs.Graphics().p("Egm1AD6IAAnzMBNrAAAIAAHzg");
	var mask_7_graphics_222 = new cjs.Graphics().p("EgnOAD6IAAnzMBOdAAAIAAHzg");
	var mask_7_graphics_223 = new cjs.Graphics().p("EgnnAD6IAAnzMBPPAAAIAAHzg");
	var mask_7_graphics_224 = new cjs.Graphics().p("EgoAAD6IAAnzMBQBAAAIAAHzg");
	var mask_7_graphics_225 = new cjs.Graphics().p("EgoZAD6IAAnzMBQzAAAIAAHzg");
	var mask_7_graphics_226 = new cjs.Graphics().p("EgoyAD6IAAnzMBRlAAAIAAHzg");
	var mask_7_graphics_227 = new cjs.Graphics().p("EgpLAD6IAAnzMBSXAAAIAAHzg");
	var mask_7_graphics_228 = new cjs.Graphics().p("EgpjAEJIAAnzMBTHAAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(120).to({graphics:mask_7_graphics_120,x:-7.5,y:26.5255}).wait(1).to({graphics:mask_7_graphics_121,x:-4.725,y:28.05}).wait(1).to({graphics:mask_7_graphics_122,x:-1.975,y:28.05}).wait(1).to({graphics:mask_7_graphics_123,x:0.8,y:28.05}).wait(1).to({graphics:mask_7_graphics_124,x:3.575,y:28.05}).wait(1).to({graphics:mask_7_graphics_125,x:6.3,y:28.05}).wait(1).to({graphics:mask_7_graphics_126,x:9.075,y:28.05}).wait(1).to({graphics:mask_7_graphics_127,x:11.85,y:28.05}).wait(1).to({graphics:mask_7_graphics_128,x:14.625,y:28.05}).wait(1).to({graphics:mask_7_graphics_129,x:17.375,y:28.05}).wait(1).to({graphics:mask_7_graphics_130,x:20.15,y:28.05}).wait(1).to({graphics:mask_7_graphics_131,x:22.925,y:28.05}).wait(1).to({graphics:mask_7_graphics_132,x:25.675,y:28.05}).wait(1).to({graphics:mask_7_graphics_133,x:28.425,y:28.05}).wait(1).to({graphics:mask_7_graphics_134,x:31.2,y:28.05}).wait(1).to({graphics:mask_7_graphics_135,x:33.95,y:28.05}).wait(1).to({graphics:mask_7_graphics_136,x:36.725,y:28.05}).wait(1).to({graphics:mask_7_graphics_137,x:39.5,y:28.05}).wait(1).to({graphics:mask_7_graphics_138,x:42.25,y:28.05}).wait(1).to({graphics:mask_7_graphics_139,x:45.025,y:28.05}).wait(1).to({graphics:mask_7_graphics_140,x:47.8,y:28.05}).wait(1).to({graphics:mask_7_graphics_141,x:50.575,y:28.05}).wait(1).to({graphics:mask_7_graphics_142,x:53.3,y:28.05}).wait(1).to({graphics:mask_7_graphics_143,x:56.075,y:28.05}).wait(1).to({graphics:mask_7_graphics_144,x:58.85,y:28.05}).wait(1).to({graphics:mask_7_graphics_145,x:61.6,y:28.05}).wait(1).to({graphics:mask_7_graphics_146,x:64.375,y:28.05}).wait(1).to({graphics:mask_7_graphics_147,x:67.15,y:28.05}).wait(1).to({graphics:mask_7_graphics_148,x:69.9,y:28.05}).wait(1).to({graphics:mask_7_graphics_149,x:72.675,y:28.05}).wait(1).to({graphics:mask_7_graphics_150,x:75.425,y:28.05}).wait(1).to({graphics:mask_7_graphics_151,x:78.175,y:28.05}).wait(1).to({graphics:mask_7_graphics_152,x:80.95,y:28.05}).wait(1).to({graphics:mask_7_graphics_153,x:83.725,y:28.05}).wait(1).to({graphics:mask_7_graphics_154,x:86.475,y:28.05}).wait(1).to({graphics:mask_7_graphics_155,x:89.25,y:28.05}).wait(1).to({graphics:mask_7_graphics_156,x:92.025,y:28.05}).wait(1).to({graphics:mask_7_graphics_157,x:94.8,y:28.05}).wait(1).to({graphics:mask_7_graphics_158,x:97.525,y:28.05}).wait(1).to({graphics:mask_7_graphics_159,x:100.3,y:28.05}).wait(1).to({graphics:mask_7_graphics_160,x:103.075,y:28.05}).wait(1).to({graphics:mask_7_graphics_161,x:105.825,y:28.05}).wait(1).to({graphics:mask_7_graphics_162,x:108.6,y:28.05}).wait(1).to({graphics:mask_7_graphics_163,x:108.6,y:28.05}).wait(1).to({graphics:mask_7_graphics_164,x:108.6,y:28.05}).wait(1).to({graphics:mask_7_graphics_165,x:108.6,y:28.05}).wait(1).to({graphics:mask_7_graphics_166,x:108.6,y:28.05}).wait(1).to({graphics:mask_7_graphics_167,x:108.6,y:28.05}).wait(1).to({graphics:mask_7_graphics_168,x:108.6,y:28.05}).wait(1).to({graphics:mask_7_graphics_169,x:108.6,y:28.05}).wait(1).to({graphics:mask_7_graphics_170,x:108.6,y:28.05}).wait(1).to({graphics:mask_7_graphics_171,x:108.6,y:28.05}).wait(1).to({graphics:mask_7_graphics_172,x:111.075,y:28.05}).wait(1).to({graphics:mask_7_graphics_173,x:113.525,y:28.05}).wait(1).to({graphics:mask_7_graphics_174,x:116.025,y:28.05}).wait(1).to({graphics:mask_7_graphics_175,x:118.5,y:28.05}).wait(1).to({graphics:mask_7_graphics_176,x:120.975,y:28.05}).wait(1).to({graphics:mask_7_graphics_177,x:123.425,y:28.05}).wait(1).to({graphics:mask_7_graphics_178,x:125.925,y:28.05}).wait(1).to({graphics:mask_7_graphics_179,x:128.4,y:28.05}).wait(1).to({graphics:mask_7_graphics_180,x:130.85,y:28.05}).wait(1).to({graphics:mask_7_graphics_181,x:133.325,y:28.05}).wait(1).to({graphics:mask_7_graphics_182,x:135.8,y:28.05}).wait(1).to({graphics:mask_7_graphics_183,x:138.3,y:28.05}).wait(1).to({graphics:mask_7_graphics_184,x:140.75,y:28.05}).wait(1).to({graphics:mask_7_graphics_185,x:143.225,y:28.05}).wait(1).to({graphics:mask_7_graphics_186,x:145.7,y:28.05}).wait(1).to({graphics:mask_7_graphics_187,x:148.2,y:28.05}).wait(1).to({graphics:mask_7_graphics_188,x:150.65,y:28.05}).wait(1).to({graphics:mask_7_graphics_189,x:153.125,y:28.05}).wait(1).to({graphics:mask_7_graphics_190,x:155.6,y:28.05}).wait(1).to({graphics:mask_7_graphics_191,x:158.075,y:28.05}).wait(1).to({graphics:mask_7_graphics_192,x:160.55,y:28.05}).wait(1).to({graphics:mask_7_graphics_193,x:163.025,y:28.05}).wait(1).to({graphics:mask_7_graphics_194,x:165.5,y:28.05}).wait(1).to({graphics:mask_7_graphics_195,x:167.95,y:28.05}).wait(1).to({graphics:mask_7_graphics_196,x:170.45,y:28.05}).wait(1).to({graphics:mask_7_graphics_197,x:172.925,y:28.05}).wait(1).to({graphics:mask_7_graphics_198,x:175.375,y:28.05}).wait(1).to({graphics:mask_7_graphics_199,x:177.85,y:28.05}).wait(1).to({graphics:mask_7_graphics_200,x:180.35,y:28.05}).wait(1).to({graphics:mask_7_graphics_201,x:182.825,y:28.05}).wait(1).to({graphics:mask_7_graphics_202,x:185.275,y:28.05}).wait(1).to({graphics:mask_7_graphics_203,x:187.75,y:28.05}).wait(1).to({graphics:mask_7_graphics_204,x:190.25,y:28.05}).wait(1).to({graphics:mask_7_graphics_205,x:192.7,y:28.05}).wait(1).to({graphics:mask_7_graphics_206,x:195.175,y:28.05}).wait(1).to({graphics:mask_7_graphics_207,x:197.65,y:28.05}).wait(1).to({graphics:mask_7_graphics_208,x:200.125,y:28.05}).wait(1).to({graphics:mask_7_graphics_209,x:202.6,y:28.05}).wait(1).to({graphics:mask_7_graphics_210,x:205.075,y:28.05}).wait(1).to({graphics:mask_7_graphics_211,x:207.55,y:28.05}).wait(1).to({graphics:mask_7_graphics_212,x:210,y:28.05}).wait(1).to({graphics:mask_7_graphics_213,x:212.5,y:28.05}).wait(1).to({graphics:mask_7_graphics_214,x:214.975,y:28.05}).wait(1).to({graphics:mask_7_graphics_215,x:217.45,y:28.05}).wait(1).to({graphics:mask_7_graphics_216,x:219.9,y:28.05}).wait(1).to({graphics:mask_7_graphics_217,x:222.4,y:28.05}).wait(1).to({graphics:mask_7_graphics_218,x:224.875,y:28.05}).wait(1).to({graphics:mask_7_graphics_219,x:227.35,y:28.05}).wait(1).to({graphics:mask_7_graphics_220,x:229.8,y:28.05}).wait(1).to({graphics:mask_7_graphics_221,x:232.275,y:28.05}).wait(1).to({graphics:mask_7_graphics_222,x:234.775,y:28.05}).wait(1).to({graphics:mask_7_graphics_223,x:237.225,y:28.05}).wait(1).to({graphics:mask_7_graphics_224,x:239.7,y:28.05}).wait(1).to({graphics:mask_7_graphics_225,x:242.175,y:28.05}).wait(1).to({graphics:mask_7_graphics_226,x:244.675,y:28.05}).wait(1).to({graphics:mask_7_graphics_227,x:247.125,y:28.05}).wait(1).to({graphics:mask_7_graphics_228,x:249.5846,y:26.5255}).wait(909));

	// 图层_35
	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_1561.setTransform(391.075,386.5227);

	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1562.setTransform(379.2,387.025);

	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1563.setTransform(364.375,388.875);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1564.setTransform(346.6023,385.55);

	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1565.setTransform(332.2,387.025);

	this.shape_1566 = new cjs.Shape();
	this.shape_1566.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAAQIBVgGQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_1566.setTransform(310.825,388.85);

	this.shape_1567 = new cjs.Shape();
	this.shape_1567.graphics.f("#FF0000").s().p("AAfByIg7hLIgJAAIAABLIgaAAIAAjjIAaAAIAACDIAKAAIA3hBIAgAAIhDBKIBHBXg");
	this.shape_1567.setTransform(295.65,385.55);

	this.shape_1568 = new cjs.Shape();
	this.shape_1568.graphics.f("#FF0000").s().p("AgNBvIAAihIAaAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_1568.setTransform(282.6,385.825);

	this.shape_1569 = new cjs.Shape();
	this.shape_1569.graphics.f("#FF0000").s().p("AgQBqQgKgHAAgTIAAjCIAaAAIAAC8QAAAMADADQADAFAIgBIAGAAIAHgBIAAAVIgIABIgJABQgRAAgJgJg");
	this.shape_1569.setTransform(275.325,385.65);

	this.shape_1570 = new cjs.Shape();
	this.shape_1570.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1570.setTransform(257.15,387.025);

	this.shape_1571 = new cjs.Shape();
	this.shape_1571.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1571.setTransform(242.325,388.875);

	this.shape_1572 = new cjs.Shape();
	this.shape_1572.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1572.setTransform(224.5523,385.55);

	this.shape_1573 = new cjs.Shape();
	this.shape_1573.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1573.setTransform(197.725,388.875);

	this.shape_1574 = new cjs.Shape();
	this.shape_1574.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgYAAIAAgWIAYAAIAAgmIAZAAIAAAmIAoAAIAAAWIgoAAIAABYQAAANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1574.setTransform(176.4,387.025);

	this.shape_1575 = new cjs.Shape();
	this.shape_1575.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKABQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1575.setTransform(162.1523,388.7);

	this.shape_1576 = new cjs.Shape();
	this.shape_1576.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1576.setTransform(143.025,388.875);

	this.shape_1577 = new cjs.Shape();
	this.shape_1577.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_1577.setTransform(122.075,388.85);

	this.shape_1578 = new cjs.Shape();
	this.shape_1578.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_1578.setTransform(92.675,389);

	this.shape_1579 = new cjs.Shape();
	this.shape_1579.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAJgSAQgHQARgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgKAFgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1579.setTransform(74.25,388.85);

	this.shape_1580 = new cjs.Shape();
	this.shape_1580.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAKgFAFgIQAGgJAEgNIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_1580.setTransform(57.1,391.85);

	this.shape_1581 = new cjs.Shape();
	this.shape_1581.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1581.setTransform(32.2,388.85);

	this.shape_1582 = new cjs.Shape();
	this.shape_1582.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_1582.setTransform(12.775,386.5488);

	this.shape_1583 = new cjs.Shape();
	this.shape_1583.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_1583.setTransform(564.025,347.6969);

	this.shape_1584 = new cjs.Shape();
	this.shape_1584.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_1584.setTransform(550.2523,338);

	this.shape_1585 = new cjs.Shape();
	this.shape_1585.graphics.f("#FF0000").s().p("AgXBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAOAAAKACQALABAHADIAAAYIgTgGQgKgBgNAAQgQAAgLAFQgKAFgEAOQgFANAAAYQgBAWAGAOQAEANAKAGQALAGARgBQAMAAALgCQAKgBAJgDIAAAXIgLADIgQACIgQABQgXAAgQgIg");
	this.shape_1585.setTransform(533.7,341.3);

	this.shape_1586 = new cjs.Shape();
	this.shape_1586.graphics.f("#FF0000").s().p("AgrBMQgMgHgEgMQgFgMAAgPIAAhwIAaAAIAABmQgBAMADAKQACAIAHAFQAHAEANAAQAJABAJgCQAJgDAIgGQAHgIAFgOIAAhtIAZAAIAAChIgVAAIgEgXQgFALgIAFQgIAGgKACQgJACgKABQgVgBgMgGg");
	this.shape_1586.setTransform(516.775,341.45);

	this.shape_1587 = new cjs.Shape();
	this.shape_1587.graphics.f("#FF0000").s().p("ABWBSIAAhlQAAgTgGgKQgHgLgSAAQgKAAgIADQgIACgGAHQgHAFgDAMIAAACIAABuIgZAAIAAhlQAAgTgGgKQgGgLgSAAQgKAAgIADQgIACgGAHQgHAFgEANIAABvIgaAAIAAihIAaAAIAAAWQAIgOAMgGQAMgEAPAAQATgBAMAIQAKAGAFANQAFgKAIgHQAIgFAKgDQAKgBAKAAQASgBAMAIQAMAGAFAMQAGAMAAAQIAABug");
	this.shape_1587.setTransform(493.875,341.15);

	this.shape_1588 = new cjs.Shape();
	this.shape_1588.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1588.setTransform(463,341.3);

	this.shape_1589 = new cjs.Shape();
	this.shape_1589.graphics.f("#FF0000").s().p("AgYBSIgRgBIgMgDIAAgWIANADIARACIARABQARAAAJgFQAKgFAAgPQAAgJgCgFQgDgGgIgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJAAgNQAAgVAPgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgHgDgKgCQgLgCgLAAQgQAAgIAGQgJAEAAAOQAAAIACAEQADAFAGADQAHADALADQATADALAHQAMAEAEAJQAGAKAAAPQgBAZgQALQgPAMgdgBIgSgBg");
	this.shape_1589.setTransform(446.6,341.25);

	this.shape_1590 = new cjs.Shape();
	this.shape_1590.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgYAAIAAgWIAYAAIAAgmIAZAAIAAAmIAoAAIAAAWIgoAAIAABYQAAANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1590.setTransform(426.6,339.475);

	this.shape_1591 = new cjs.Shape();
	this.shape_1591.graphics.f("#FF0000").s().p("AgNBvIAAihIAaAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_1591.setTransform(417.6,338.275);

	this.shape_1592 = new cjs.Shape();
	this.shape_1592.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_1592.setTransform(397.175,341.3);

	this.shape_1593 = new cjs.Shape();
	this.shape_1593.graphics.f("#FF0000").s().p("AgOBRIg9ihIAaAAIAxCHIABAAIAwiHIAbAAIg9Chg");
	this.shape_1593.setTransform(380.6,341.3);

	this.shape_1594 = new cjs.Shape();
	this.shape_1594.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgFANABAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1594.setTransform(363.4,341.3);

	this.shape_1595 = new cjs.Shape();
	this.shape_1595.graphics.f("#FF0000").s().p("AgQBqQgKgIAAgSIAAjCIAaAAIAAC7QAAANADADQADAEAIAAIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgJg");
	this.shape_1595.setTransform(350.925,338.1);

	this.shape_1596 = new cjs.Shape();
	this.shape_1596.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_1596.setTransform(333.75,339);

	this.shape_1597 = new cjs.Shape();
	this.shape_1597.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_1597.setTransform(317.425,347.6969);

	this.shape_1598 = new cjs.Shape();
	this.shape_1598.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgEAFgIQAGgIAEgNIhBihIAcAAIAxCGIABAAIAviGIAaAAIg6CbQgIAVgIAPQgIAOgOAIQgPAIgXAAg");
	this.shape_1598.setTransform(305,344.3);

	this.shape_1599 = new cjs.Shape();
	this.shape_1599.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgYAAIAAgWIAYAAIAAgmIAYAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAIgBIAAAWIgJABIgJAAQgRAAgKgEg");
	this.shape_1599.setTransform(292,339.475);

	this.shape_1600 = new cjs.Shape();
	this.shape_1600.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1600.setTransform(281.9,339.475);

	this.shape_1601 = new cjs.Shape();
	this.shape_1601.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_1601.setTransform(268.225,341.3);

	this.shape_1602 = new cjs.Shape();
	this.shape_1602.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAIQgIAIgEANIAABpg");
	this.shape_1602.setTransform(254.925,341.15);

	this.shape_1603 = new cjs.Shape();
	this.shape_1603.graphics.f("#FF0000").s().p("AhIBxIAAjeIAaAAIAAAdQAFgOAMgIQANgKAWABQAbgBAOALQAPALAGASQAFAUAAAYQAAAXgFASQgGATgPALQgOAMgbABQgWAAgNgJQgMgJgFgOIAABZgAgbhTQgLAIgEAOQgFAOAAATQAAATAFANQAEAOALAIQALAHASAAQAUABAJgKQAJgJADgNQADgNAAgRQAAgRgDgOQgDgOgKgJQgJgIgTAAQgSAAgLAHg");
	this.shape_1603.setTransform(239.125,344.15);

	this.shape_1604 = new cjs.Shape();
	this.shape_1604.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1604.setTransform(212.15,341.3);

	this.shape_1605 = new cjs.Shape();
	this.shape_1605.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAOADIASACIAQABQARAAAKgFQAJgFAAgPQAAgJgCgFQgEgGgHgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJABgNQAAgVAOgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgIgDgJgCQgLgCgLAAQgQAAgJAGQgIAEgBAOQAAAIADAEQACAFAIADQAGADAMADQASADALAHQAMAEAEAJQAFAKABAPQgBAZgPALQgQAMgdgBIgRgBg");
	this.shape_1605.setTransform(195.75,341.25);

	this.shape_1606 = new cjs.Shape();
	this.shape_1606.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAOADIASACIAQABQARAAAKgFQAJgFAAgPQAAgJgCgFQgEgGgHgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJABgNQAAgVAOgMQAPgLAbAAQAMgBAMACQALACAHACIgCAWQgIgDgJgCQgLgCgLAAQgQAAgJAGQgIAEgBAOQAAAIADAEQACAFAIADQAGADAMADQASADALAHQAMAEAEAJQAFAKABAPQgBAZgPALQgQAMgdgBIgRgBg");
	this.shape_1606.setTransform(173.7,341.25);

	this.shape_1607 = new cjs.Shape();
	this.shape_1607.graphics.f("#FF0000").s().p("AgUAmIAIgZQAEgNACgMQACgOABgLIAYAAQAAALgEANQgDANgFAOQgFANgFALg");
	this.shape_1607.setTransform(162.45,330.45);

	this.shape_1608 = new cjs.Shape();
	this.shape_1608.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1608.setTransform(153.3,339.475);

	this.shape_1609 = new cjs.Shape();
	this.shape_1609.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_1609.setTransform(144.2,339);

	this.shape_1610 = new cjs.Shape();
	this.shape_1610.graphics.f("#FF0000").s().p("AgNBmQgFgEAAgMQAAgMAFgEQADgDAKAAQAKAAAFADQAEAEAAAMQAAAMgEAEQgFADgKAAQgKAAgDgDgAgJArIgEiTIAcAAIgFCTg");
	this.shape_1610.setTransform(127.05,339.1);

	this.shape_1611 = new cjs.Shape();
	this.shape_1611.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1611.setTransform(112.4,341.3);

	this.shape_1612 = new cjs.Shape();
	this.shape_1612.graphics.f("#FF0000").s().p("AguBoQgPgKgFgTQgGgSAAgaQAAgWAGgSQAFgTAPgMQAPgLAaAAQAXAAAMAIQAMAJAFAOIAAheIAaAAIAADiIgWAAIgEgaQgFANgNAIQgNAJgVAAQgaAAgPgMgAgegVQgJAJgDAOQgCAOAAAPQAAARADAPQADAOAJAIQAJAIATAAQASAAALgHQALgIAFgNQAEgOAAgUQAAgSgEgNQgFgOgLgIQgLgIgSAAQgTABgKAIg");
	this.shape_1612.setTransform(93.1731,338.15);

	this.shape_1613 = new cjs.Shape();
	this.shape_1613.graphics.f("#FF0000").s().p("AgNBoIAAjPIAaAAIAADPg");
	this.shape_1613.setTransform(72.3,339);

	this.shape_1614 = new cjs.Shape();
	this.shape_1614.graphics.f("#FF0000").s().p("AgaAoQAIgNAHgOQAGgNAEgNQADgOAAgLIAYAAQAAAMgEAPQgGAOgHANQgHAOgGAKg");
	this.shape_1614.setTransform(55.25,349.55);

	this.shape_1615 = new cjs.Shape();
	this.shape_1615.graphics.f("#FF0000").s().p("AgYBSIgRgBIgMgDIAAgWIANADIARACIARABQARAAAJgFQAKgFAAgPQAAgJgCgFQgDgGgIgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJAAgNQAAgVAPgMQAPgLAbAAQAMgBAMACQALACAGACIgBAWQgIgDgJgCQgLgCgLAAQgQAAgIAGQgJAEAAAOQAAAIACAEQADAFAHADQAGADALADQATADALAHQAMAEAEAJQAGAKAAAPQgBAZgQALQgPAMgdgBIgSgBg");
	this.shape_1615.setTransform(44.3,341.25);

	this.shape_1616 = new cjs.Shape();
	this.shape_1616.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAJIhtAIQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_1616.setTransform(28.425,341.3);

	this.shape_1617 = new cjs.Shape();
	this.shape_1617.graphics.f("#FF0000").s().p("AgNBoIAAhZIhJh2IAfAAIA3BeIACAAIA3heIAeAAIhKB2IAABZg");
	this.shape_1617.setTransform(10.925,339);

	this.shape_1618 = new cjs.Shape();
	this.shape_1618.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_1618.setTransform(486.225,291.4227);

	this.shape_1619 = new cjs.Shape();
	this.shape_1619.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgJgEg");
	this.shape_1619.setTransform(474.35,291.925);

	this.shape_1620 = new cjs.Shape();
	this.shape_1620.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1620.setTransform(459.525,293.775);

	this.shape_1621 = new cjs.Shape();
	this.shape_1621.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_1621.setTransform(441.7523,290.45);

	this.shape_1622 = new cjs.Shape();
	this.shape_1622.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_1622.setTransform(412.325,293.75);

	this.shape_1623 = new cjs.Shape();
	this.shape_1623.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1623.setTransform(391.225,293.75);

	this.shape_1624 = new cjs.Shape();
	this.shape_1624.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1624.setTransform(373.3023,293.6);

	this.shape_1625 = new cjs.Shape();
	this.shape_1625.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_1625.setTransform(351.675,293.6);

	this.shape_1626 = new cjs.Shape();
	this.shape_1626.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_1626.setTransform(335.675,293.9);

	this.shape_1627 = new cjs.Shape();
	this.shape_1627.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1627.setTransform(317.25,293.75);

	this.shape_1628 = new cjs.Shape();
	this.shape_1628.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_1628.setTransform(300.1,296.75);

	this.shape_1629 = new cjs.Shape();
	this.shape_1629.graphics.f("#FF0000").s().p("AgaBvIgTgDIAAgVIAUACIAUABQAaABANgMQANgNAAgcIAAgQQgFAOgMAIQgMAJgWAAQgbAAgPgLQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPgBAKAFQALAEAGAHQAGAIADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgoAAIgUgCgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAIQAJAHATABQASAAALgHQALgIAFgNQAEgMAAgUQAAgSgEgPQgFgNgLgHQgLgIgSAAQgTAAgKAJg");
	this.shape_1629.setTransform(274.4737,296.6);

	this.shape_1630 = new cjs.Shape();
	this.shape_1630.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1630.setTransform(256.1523,293.6);

	this.shape_1631 = new cjs.Shape();
	this.shape_1631.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACABAKQgBAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_1631.setTransform(242.85,290.725);

	this.shape_1632 = new cjs.Shape();
	this.shape_1632.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_1632.setTransform(234.175,293.6);

	this.shape_1633 = new cjs.Shape();
	this.shape_1633.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1633.setTransform(217.625,293.775);

	this.shape_1634 = new cjs.Shape();
	this.shape_1634.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1634.setTransform(200.425,293.75);

	this.shape_1635 = new cjs.Shape();
	this.shape_1635.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_1635.setTransform(179.325,293.75);

	this.shape_1636 = new cjs.Shape();
	this.shape_1636.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1636.setTransform(150.525,293.75);

	this.shape_1637 = new cjs.Shape();
	this.shape_1637.graphics.f("#FF0000").s().p("AAfByIg7hMIgJAAIAABMIgaAAIAAjjIAaAAIAACEIAKAAIA3hCIAgAAIhDBLIBGBWg");
	this.shape_1637.setTransform(135.35,290.45);

	this.shape_1638 = new cjs.Shape();
	this.shape_1638.graphics.f("#FF0000").s().p("AgMBvIAAihIAZAAIAAChgAgLhSQgEgDABgKQgBgKAEgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_1638.setTransform(122.3,290.725);

	this.shape_1639 = new cjs.Shape();
	this.shape_1639.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1639.setTransform(115.025,290.55);

	this.shape_1640 = new cjs.Shape();
	this.shape_1640.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgQIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_1640.setTransform(92.675,293.9);

	this.shape_1641 = new cjs.Shape();
	this.shape_1641.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1641.setTransform(74.25,293.75);

	this.shape_1642 = new cjs.Shape();
	this.shape_1642.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_1642.setTransform(57.1,296.75);

	this.shape_1643 = new cjs.Shape();
	this.shape_1643.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAEgNABgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1643.setTransform(32.2,293.75);

	this.shape_1644 = new cjs.Shape();
	this.shape_1644.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_1644.setTransform(12.775,291.4488);

	this.shape_1645 = new cjs.Shape();
	this.shape_1645.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_1645.setTransform(525.275,243.8727);

	this.shape_1646 = new cjs.Shape();
	this.shape_1646.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAKgFAFgIQAGgJAEgMIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgHAVgJAOQgIAPgOAIQgOAIgYAAg");
	this.shape_1646.setTransform(510.6,249.2);

	this.shape_1647 = new cjs.Shape();
	this.shape_1647.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1647.setTransform(492.875,246.225);

	this.shape_1648 = new cjs.Shape();
	this.shape_1648.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_1648.setTransform(474.175,243.8988);

	this.shape_1649 = new cjs.Shape();
	this.shape_1649.graphics.f("#FF0000").s().p("AgXBTIgRgCIgOgDIAAgWIAPADIARACIAQABQARABAKgGQAJgFAAgOQAAgKgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgFQgKgFgEgJQgEgJABgOQAAgUAOgLQAPgMAbgBQAMABAMABQALABAHADIgDAWQgHgDgJgBQgLgCgLAAQgQgBgJAFQgIAFgBAOQAAAIADAFQACAEAIADQAGADAMADQASAEALAFQALAFAGAKQAEAJAAAQQAAAXgPAMQgRAMgcAAIgRgBg");
	this.shape_1649.setTransform(448.55,246.15);

	this.shape_1650 = new cjs.Shape();
	this.shape_1650.graphics.f("#FF0000").s().p("AgUAnIAIgaQAEgNACgMQACgOABgMIAYAAQAAALgEAOQgDANgFANQgFAOgFAMg");
	this.shape_1650.setTransform(437.3,235.35);

	this.shape_1651 = new cjs.Shape();
	this.shape_1651.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKACQgJACgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1651.setTransform(424.0023,246.05);

	this.shape_1652 = new cjs.Shape();
	this.shape_1652.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_1652.setTransform(406.025,246.2);

	this.shape_1653 = new cjs.Shape();
	this.shape_1653.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_1653.setTransform(392.725,246.05);

	this.shape_1654 = new cjs.Shape();
	this.shape_1654.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_1654.setTransform(376.0231,243.05);

	this.shape_1655 = new cjs.Shape();
	this.shape_1655.graphics.f("#FF0000").s().p("AgQBqQgKgHAAgTIAAjCIAaAAIAAC8QAAAMADADQADAFAIgBIAGAAIAHgBIAAAVIgIABIgJABQgRAAgJgJg");
	this.shape_1655.setTransform(363.725,243);

	this.shape_1656 = new cjs.Shape();
	this.shape_1656.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACAAAKQAAAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_1656.setTransform(354.35,243.175);

	this.shape_1657 = new cjs.Shape();
	this.shape_1657.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1657.setTransform(341.0523,242.9);

	this.shape_1658 = new cjs.Shape();
	this.shape_1658.graphics.f("#FF0000").s().p("AgQBnQgRgFgNgMQgMgLgHgVQgHgVAAghQAAgnAMgXQAMgYAWgKQAWgKAdAAQAOAAALACQALABAJADIAAAZIgUgFQgLgCgNAAQgYAAgPAHQgPAIgIASQgHATAAAeQAAAgAHATQAHASAPAHQAOAHAXAAQAOAAAMgCQAMgCAMgEIAAAXQgJAEgNADQgNACgQAAQgVAAgRgEg");
	this.shape_1658.setTransform(323.225,243.8988);

	this.shape_1659 = new cjs.Shape();
	this.shape_1659.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKACQgJACgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1659.setTransform(296.8523,246.05);

	this.shape_1660 = new cjs.Shape();
	this.shape_1660.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQAQAHAJASQAJATAAAfQAAAggJATQgJASgQAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgEgOgLgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1660.setTransform(278.25,246.2);

	this.shape_1661 = new cjs.Shape();
	this.shape_1661.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_1661.setTransform(256.675,246.05);

	this.shape_1662 = new cjs.Shape();
	this.shape_1662.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1662.setTransform(240.125,246.225);

	this.shape_1663 = new cjs.Shape();
	this.shape_1663.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_1663.setTransform(222.925,246.2);

	this.shape_1664 = new cjs.Shape();
	this.shape_1664.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_1664.setTransform(201.825,246.2);

	this.shape_1665 = new cjs.Shape();
	this.shape_1665.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgPIAAhvIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_1665.setTransform(172.425,246.35);

	this.shape_1666 = new cjs.Shape();
	this.shape_1666.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAJgSAQgHQARgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgEgOgLgFQgKgHgSAAQgRAAgKAHQgKAFgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1666.setTransform(154,246.2);

	this.shape_1667 = new cjs.Shape();
	this.shape_1667.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAJgFAGgIQAGgJAEgMIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_1667.setTransform(136.85,249.2);

	this.shape_1668 = new cjs.Shape();
	this.shape_1668.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1668.setTransform(111.95,246.2);

	this.shape_1669 = new cjs.Shape();
	this.shape_1669.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_1669.setTransform(92.7231,243.05);

	this.shape_1670 = new cjs.Shape();
	this.shape_1670.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1670.setTransform(70.85,244.375);

	this.shape_1671 = new cjs.Shape();
	this.shape_1671.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1671.setTransform(56.025,246.225);

	this.shape_1672 = new cjs.Shape();
	this.shape_1672.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1672.setTransform(38.2523,242.9);

	this.shape_1673 = new cjs.Shape();
	this.shape_1673.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_1673.setTransform(15.475,243.9);

	this.shape_1674 = new cjs.Shape();
	this.shape_1674.graphics.f("#FF0000").s().p("AgNBlQgFgDAAgMQAAgMAFgDQADgFAKABQAKgBAFAFQAEADAAAMQAAAMgEADQgFAEgKAAQgKAAgDgEgAgJArIgEiTIAcAAIgFCTg");
	this.shape_1674.setTransform(478.95,170.05);

	this.shape_1675 = new cjs.Shape();
	this.shape_1675.graphics.f("#FF0000").s().p("AAfByIg7hLIgJAAIAABLIgaAAIAAjjIAaAAIAACEIAKAAIA3hCIAgAAIhDBLIBHBWg");
	this.shape_1675.setTransform(467.1,168.95);

	this.shape_1676 = new cjs.Shape();
	this.shape_1676.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_1676.setTransform(453.425,172.1);

	this.shape_1677 = new cjs.Shape();
	this.shape_1677.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1677.setTransform(436.875,172.275);

	this.shape_1678 = new cjs.Shape();
	this.shape_1678.graphics.f("#FF0000").s().p("AguBpQgPgLgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgLgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_1678.setTransform(418.3731,169.1);

	this.shape_1679 = new cjs.Shape();
	this.shape_1679.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAPADIARADIAPABQASgBAKgFQAJgGAAgOQAAgJgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgEQgKgHgEgIQgEgJABgOQAAgTAOgMQAPgMAcAAQALAAAMABQALABAHADIgDAWQgGgDgLgCQgKgBgLAAQgQgBgJAFQgIAGgBANQABAIACAFQACAEAIADQAGADAMACQASAFALAFQALAFAGAJQAEAKAAAQQAAAXgPAMQgRALgdAAIgQgBg");
	this.shape_1679.setTransform(394.45,172.2);

	this.shape_1680 = new cjs.Shape();
	this.shape_1680.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1680.setTransform(382.15,170.425);

	this.shape_1681 = new cjs.Shape();
	this.shape_1681.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgEIAAAYQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1681.setTransform(368.475,172.25);

	this.shape_1682 = new cjs.Shape();
	this.shape_1682.graphics.f("#FF0000").s().p("AgaBvIgTgDIAAgVIAUADIAUAAQAaABANgMQANgNAAgcIAAgQQgFAOgMAJQgMAIgWAAQgbAAgPgLQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPgBAKAFQALAEAGAHQAGAIADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgoAAIgUgCgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAIQAJAHATABQASAAALgHQALgIAFgNQAEgMAAgUQAAgSgEgPQgFgNgLgHQgLgIgSAAQgTAAgKAJg");
	this.shape_1682.setTransform(349.7737,175.1);

	this.shape_1683 = new cjs.Shape();
	this.shape_1683.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1683.setTransform(327.9,170.425);

	this.shape_1684 = new cjs.Shape();
	this.shape_1684.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACABAKQgBAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_1684.setTransform(318.9,169.225);

	this.shape_1685 = new cjs.Shape();
	this.shape_1685.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1685.setTransform(303.925,169.05);

	this.shape_1686 = new cjs.Shape();
	this.shape_1686.graphics.f("#FF0000").s().p("AgMBvIAAihIAZAAIAAChgAgLhSQgDgDAAgKQAAgKADgCQAEgDAHAAQAIAAAEADQAEACAAAKQAAAKgEADQgEADgIAAQgHAAgEgDg");
	this.shape_1686.setTransform(294.55,169.225);

	this.shape_1687 = new cjs.Shape();
	this.shape_1687.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1687.setTransform(285.4,170.425);

	this.shape_1688 = new cjs.Shape();
	this.shape_1688.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1688.setTransform(271.1523,172.1);

	this.shape_1689 = new cjs.Shape();
	this.shape_1689.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgLAAgRIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_1689.setTransform(252.575,172.4);

	this.shape_1690 = new cjs.Shape();
	this.shape_1690.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1690.setTransform(232.525,169.05);

	this.shape_1691 = new cjs.Shape();
	this.shape_1691.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1691.setTransform(223.925,169.05);

	this.shape_1692 = new cjs.Shape();
	this.shape_1692.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1692.setTransform(208.725,172.275);

	this.shape_1693 = new cjs.Shape();
	this.shape_1693.graphics.f("#FF0000").s().p("AgdBrQgMgJgFgOIgDAdIgXAAIAAjjIAaAAIAABeQAFgOAMgIQANgJAWAAQAbAAAOALQAPAKAGASQAFASAAAaQAAAWgFATQgGATgPAMQgOALgbAAQgWAAgNgIgAgbgWQgLAHgEAOQgFANAAAUQAAASAFAOQAEAOALAIQALAIASAAQAUgBAJgIQAJgKADgOQADgOAAgPQAAgSgDgOQgDgNgKgIQgJgJgTAAQgSAAgLAIg");
	this.shape_1693.setTransform(191.125,169.1);

	this.shape_1694 = new cjs.Shape();
	this.shape_1694.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEg");
	this.shape_1694.setTransform(176.05,170.425);

	this.shape_1695 = new cjs.Shape();
	this.shape_1695.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQAQAHAJATQAJASAAAfQAAAggJATQgJASgQAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAFgOQADgNABgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAEANQAFAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_1695.setTransform(161.75,172.25);

	this.shape_1696 = new cjs.Shape();
	this.shape_1696.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_1696.setTransform(143.2,172.25);

	this.shape_1697 = new cjs.Shape();
	this.shape_1697.graphics.f("#FF0000").s().p("AgWBzIAAiMIgbAAIAAgVIAbAAIAAgCQAAgbAHgPQAHgOALgFQAMgFARABIAJAAIAJABIAAAVIgIgBIgKgBQgLAAgHAEQgGAEgCAKQgDAKAAATIAmAAIAAAVIgmAAIAACMg");
	this.shape_1697.setTransform(129.025,168.8977);

	this.shape_1698 = new cjs.Shape();
	this.shape_1698.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgDAFgJQAGgIAEgOIhBigIAcAAIAxCFIABAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgPAIgXAAg");
	this.shape_1698.setTransform(107.9,175.25);

	this.shape_1699 = new cjs.Shape();
	this.shape_1699.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1699.setTransform(90.175,172.275);

	this.shape_1700 = new cjs.Shape();
	this.shape_1700.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC7QAAAMADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1700.setTransform(78.425,169.05);

	this.shape_1701 = new cjs.Shape();
	this.shape_1701.graphics.f("#FF0000").s().p("AhIBxIAAjdIAaAAIAAAcQAFgOAMgIQANgJAWAAQAbAAAOALQAPAKAGASQAFATAAAaQAAAWgFASQgGATgPAMQgOALgbAAQgWAAgNgIQgMgJgFgOIAABZgAgbhSQgLAHgEAOQgFAOAAAUQAAASAFANQAEAOALAIQALAIASAAQAUgBAJgIQAJgKADgOQADgNAAgPQAAgSgDgOQgDgOgKgIQgJgJgTAAQgSAAgLAIg");
	this.shape_1701.setTransform(63.975,175.1);

	this.shape_1702 = new cjs.Shape();
	this.shape_1702.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgEIAAAYQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1702.setTransform(37.625,172.25);

	this.shape_1703 = new cjs.Shape();
	this.shape_1703.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_1703.setTransform(15.475,169.95);

	this.shape_1704 = new cjs.Shape();
	this.shape_1704.graphics.f("#FF0000").s().p("AgKASQgEgBgCgFQgCgEAAgIQAAgLAEgEQAFgDAJAAQAKAAAFADQAEAEAAALQAAAIgCAEQgCAFgEABQgEABgHAAQgGAAgEgBg");
	this.shape_1704.setTransform(551.725,131.0969);

	this.shape_1705 = new cjs.Shape();
	this.shape_1705.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_1705.setTransform(537.2231,121.55);

	this.shape_1706 = new cjs.Shape();
	this.shape_1706.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1706.setTransform(518.325,124.725);

	this.shape_1707 = new cjs.Shape();
	this.shape_1707.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_1707.setTransform(499.8231,121.55);

	this.shape_1708 = new cjs.Shape();
	this.shape_1708.graphics.f("#FF0000").s().p("AguBpQgPgLgFgTQgGgTAAgYQAAgXAGgSQAFgTAPgLQAPgMAagBQAXAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgVAAQgagBgPgKgAgegUQgJAIgDANQgCAOAAARQAAARADAOQADANAJAJQAJAJATgBQASABALgIQALgHAFgPQAEgNAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAKg");
	this.shape_1708.setTransform(473.0731,121.55);

	this.shape_1709 = new cjs.Shape();
	this.shape_1709.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgNgCgIQgDgJgHgFQgGgFgNABQgJAAgKABQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1709.setTransform(454.7523,124.55);

	this.shape_1710 = new cjs.Shape();
	this.shape_1710.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1710.setTransform(435.625,124.725);

	this.shape_1711 = new cjs.Shape();
	this.shape_1711.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_1711.setTransform(405.625,124.55);

	this.shape_1712 = new cjs.Shape();
	this.shape_1712.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgMAAgPIAAhvIAaAAIAABlQgBANADAIQACAJAHAFQAHAFANgBQAJABAJgDQAJgBAIgIQAHgGAFgOIAAhtIAZAAIAAChIgVAAIgEgYQgFAKgIAHQgIAFgKADQgJACgKAAQgVAAgMgIg");
	this.shape_1712.setTransform(382.475,124.85);

	this.shape_1713 = new cjs.Shape();
	this.shape_1713.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_1713.setTransform(359.575,124.55);

	this.shape_1714 = new cjs.Shape();
	this.shape_1714.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgEQAJgFAGgIQAGgJAEgNIhBigIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgHAVgJAOQgIAPgOAIQgPAIgXAAg");
	this.shape_1714.setTransform(330.1,127.7);

	this.shape_1715 = new cjs.Shape();
	this.shape_1715.graphics.f("#FF0000").s().p("ABWBTIAAhmQAAgTgGgKQgHgKgSAAQgKgBgIADQgIACgGAGQgHAHgDALIAAABIAABwIgZAAIAAhmQAAgTgGgKQgGgKgSAAQgKgBgIADQgIACgGAGQgHAGgEANIAABwIgaAAIAAihIAaAAIAAAVQAIgPAMgEQAMgGAPAAQATAAAMAHQAKAIAFAMQAFgKAIgHQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAHAFAMQAGAMAAAPIAABwg");
	this.shape_1715.setTransform(308.425,124.55);

	this.shape_1716 = new cjs.Shape();
	this.shape_1716.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1716.setTransform(277.6023,121.4);

	this.shape_1717 = new cjs.Shape();
	this.shape_1717.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgYAAIAAgWIAYAAIAAgmIAYAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAJgBIAKAAIAJgBIAAAWIgJABIgKAAQgRAAgKgEg");
	this.shape_1717.setTransform(263.2,122.875);

	this.shape_1718 = new cjs.Shape();
	this.shape_1718.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAFACAAAKQAAAKgFADQgDADgIAAQgHAAgEgDg");
	this.shape_1718.setTransform(254.2,121.675);

	this.shape_1719 = new cjs.Shape();
	this.shape_1719.graphics.f("#FF0000").s().p("AApBRIgoiEIgBAAIgpCEIggAAIgsihIAaAAIAiCHIACAAIAoiHIAeAAIApCHIACAAIAiiHIAaAAIgtChg");
	this.shape_1719.setTransform(237.725,124.7);

	this.shape_1720 = new cjs.Shape();
	this.shape_1720.graphics.f("#FF0000").s().p("AAeByIg5hLIgJAAIAABLIgaAAIAAjjIAaAAIAACDIAJAAIA3hBIAgAAIhDBKIBGBXg");
	this.shape_1720.setTransform(211.1,121.4);

	this.shape_1721 = new cjs.Shape();
	this.shape_1721.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_1721.setTransform(197.425,124.55);

	this.shape_1722 = new cjs.Shape();
	this.shape_1722.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1722.setTransform(180.875,124.725);

	this.shape_1723 = new cjs.Shape();
	this.shape_1723.graphics.f("#FF0000").s().p("AhIBwIAAjcIAaAAIAAAdQAFgPAMgJQANgIAWgBQAbABAOAKQAPALAGATQAFASAAAaQAAAWgFASQgGATgPAMQgOALgbABQgWAAgNgJQgMgIgFgPIAABYgAgbhTQgLAIgEAOQgFAOAAAUQAAASAFANQAEAOALAIQALAIASgBQAUAAAJgJQAJgIADgOQADgNAAgQQAAgSgDgOQgDgOgKgIQgJgJgTAAQgSAAgLAHg");
	this.shape_1723.setTransform(163.275,127.55);

	this.shape_1724 = new cjs.Shape();
	this.shape_1724.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgSQgJgTAAggQAAgfAJgTQAIgSARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAJIhtAHQAAASAFALQAFAMALAFQALAGATAAQAOAAANgDQAOgCAKgFIAAAXQgFADgJACIgTADQgKACgMAAQgXAAgRgHgAgXg3QgKAGgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRgBQgSAAgKAHg");
	this.shape_1724.setTransform(136.925,124.7);

	this.shape_1725 = new cjs.Shape();
	this.shape_1725.graphics.f("#FF0000").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_1725.setTransform(119.0023,121.4);

	this.shape_1726 = new cjs.Shape();
	this.shape_1726.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1726.setTransform(104.6,122.875);

	this.shape_1727 = new cjs.Shape();
	this.shape_1727.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1727.setTransform(82.6,124.7);

	this.shape_1728 = new cjs.Shape();
	this.shape_1728.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1728.setTransform(68.25,122.875);

	this.shape_1729 = new cjs.Shape();
	this.shape_1729.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgSQgJgTAAggQAAgfAJgTQAJgSARgHQAQgIAXAAQAYAAARAIQARAHAIASQAJATAAAfQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgQgHgAAdA4QAKgFAEgOQAFgOAAgXQAAgXgFgNQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1729.setTransform(46.25,124.7);

	this.shape_1730 = new cjs.Shape();
	this.shape_1730.graphics.f("#FF0000").s().p("AgaBvIgTgCIAAgXIAUAEIAUABQAagBANgMQANgMAAgcIAAgQQgFAOgMAJQgMAHgWABQgbAAgPgLQgPgKgFgTQgGgRAAgZQAAgXAGgSQAFgTAPgLQAPgLAbgBQAPABAKAEQALAEAGAIQAGAHADAKIAAgeIAaAAIAACVQAAAigTASQgUAUgogBIgUgBgAgehRQgJAJgDANQgCAOAAAQQAAARADANQADAOAJAHQAJAJATAAQASAAALgIQALgGAFgOQAEgNAAgTQAAgSgEgOQgFgOgLgIQgLgHgSAAQgTAAgKAJg");
	this.shape_1730.setTransform(26.9737,127.55);

	this.shape_1731 = new cjs.Shape();
	this.shape_1731.graphics.f("#FF0000").s().p("AgMBoIAAjPIAaAAIAADPg");
	this.shape_1731.setTransform(6.1,122.4);

	this.shape_1732 = new cjs.Shape();
	this.shape_1732.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_1732.setTransform(467.425,74.8227);

	this.shape_1733 = new cjs.Shape();
	this.shape_1733.graphics.f("#FF0000").s().p("AAeByIg6hMIgJAAIAABMIgZAAIAAjjIAZAAIAACDIAKAAIA3hBIAgAAIhDBKIBHBXg");
	this.shape_1733.setTransform(454.15,73.85);

	this.shape_1734 = new cjs.Shape();
	this.shape_1734.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAHQgIAJgEANIAABpg");
	this.shape_1734.setTransform(440.475,77);

	this.shape_1735 = new cjs.Shape();
	this.shape_1735.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1735.setTransform(423.925,77.175);

	this.shape_1736 = new cjs.Shape();
	this.shape_1736.graphics.f("#FF0000").s().p("AhIBxIAAjeIAaAAIAAAdQAFgOAMgIQANgKAWABQAbgBAOALQAPALAGASQAFAUAAAYQAAAXgFASQgGATgPALQgOAMgbABQgWAAgNgJQgMgJgFgOIAABZgAgbhTQgLAIgEAOQgFAOAAATQAAATAFANQAEAOALAIQALAHASAAQAUABAJgKQAJgJADgNQADgOAAgQQAAgRgDgOQgDgOgKgJQgJgIgTAAQgSAAgLAHg");
	this.shape_1736.setTransform(406.325,80);

	this.shape_1737 = new cjs.Shape();
	this.shape_1737.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAHQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_1737.setTransform(379.975,77.15);

	this.shape_1738 = new cjs.Shape();
	this.shape_1738.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_1738.setTransform(362.0523,73.85);

	this.shape_1739 = new cjs.Shape();
	this.shape_1739.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLAAgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_1739.setTransform(347.65,75.325);

	this.shape_1740 = new cjs.Shape();
	this.shape_1740.graphics.f("#FF0000").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKADgHAHQgIAJgEANIAABpg");
	this.shape_1740.setTransform(330.325,77);

	this.shape_1741 = new cjs.Shape();
	this.shape_1741.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1741.setTransform(314.3,77.15);

	this.shape_1742 = new cjs.Shape();
	this.shape_1742.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQARgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1742.setTransform(288.05,77.15);

	this.shape_1743 = new cjs.Shape();
	this.shape_1743.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQABgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1743.setTransform(269.5,77.15);

	this.shape_1744 = new cjs.Shape();
	this.shape_1744.graphics.f("#FF0000").s().p("Ag/BRIAAgVIBbh1IAAgCIhTAAIAAgVIByAAIAAAUIhbB1IAAABIBgAAIAAAXg");
	this.shape_1744.setTransform(252.75,77.15);

	this.shape_1745 = new cjs.Shape();
	this.shape_1745.graphics.f("#FF0000").s().p("AgiBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAIgSARgIQAQgHAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAHQAAARAFALQAFAMALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgKABgMAAQgXAAgRgIgAgXg4QgKAHgEAMQgEAMAAARIBVgHQAAgMgDgLQgCgLgJgGQgIgGgRAAQgSAAgKAFg");
	this.shape_1745.setTransform(228.675,77.15);

	this.shape_1746 = new cjs.Shape();
	this.shape_1746.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgIgGgGQgHgEgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFAMQAFANAAAOIAABwg");
	this.shape_1746.setTransform(210.7523,73.85);

	this.shape_1747 = new cjs.Shape();
	this.shape_1747.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgFgLABgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQABAGAGADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_1747.setTransform(196.35,75.325);

	this.shape_1748 = new cjs.Shape();
	this.shape_1748.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1748.setTransform(174.35,77.15);

	this.shape_1749 = new cjs.Shape();
	this.shape_1749.graphics.f("#FF0000").s().p("AgBBhQgKgEgFgLQgEgLAAgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_1749.setTransform(160,75.325);

	this.shape_1750 = new cjs.Shape();
	this.shape_1750.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQASgHAWAAQAYAAARAHQAQAIAJASQAJATAAAfQAAAggJASQgJATgQAHQgRAIgYAAQgWAAgSgIgAAdA4QAKgFAFgOQADgOAAgXQAAgXgEgNQgEgOgLgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgFANABAXQAAAXAEAOQAFAOAKAFQALAGAQAAQATAAAKgGg");
	this.shape_1750.setTransform(138,77.15);

	this.shape_1751 = new cjs.Shape();
	this.shape_1751.graphics.f("#FF0000").s().p("AgaBwIgTgEIAAgVIAUACIAUABQAaAAANgMQANgMAAgbIAAgRQgFAPgMAHQgMAJgWgBQgbAAgPgKQgPgKgFgSQgGgSAAgZQAAgWAGgUQAFgSAPgLQAPgLAbAAQAPAAAKAEQALAEAGAIQAGAHADAKIAAgfIAaAAIAACWQAAAigTATQgUASgoABIgUgBgAgehRQgJAIgDAOQgCAOAAAQQAAARADANQADANAJAJQAJAHATABQASAAALgIQALgHAFgNQAEgNAAgTQAAgTgEgOQgFgNgLgIQgLgHgSAAQgTAAgKAJg");
	this.shape_1751.setTransform(118.7237,80);

	this.shape_1752 = new cjs.Shape();
	this.shape_1752.graphics.f("#FF0000").s().p("AgrBMQgMgHgEgMQgFgMAAgPIAAhwIAaAAIAABmQgBAMADAJQACAJAHAFQAHAEANABQAJAAAJgCQAJgDAIgGQAHgIAFgOIAAhtIAZAAIAAChIgVAAIgEgXQgFALgIAFQgIAGgKACQgJACgKABQgVgBgMgGg");
	this.shape_1752.setTransform(92.675,77.3);

	this.shape_1753 = new cjs.Shape();
	this.shape_1753.graphics.f("#FF0000").s().p("AgoBMQgQgHgJgTQgJgSAAggQAAgfAJgTQAJgSAQgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgAAdA4QAKgFAEgOQAFgOAAgXQgBgXgEgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgKAGgFAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1753.setTransform(74.25,77.15);

	this.shape_1754 = new cjs.Shape();
	this.shape_1754.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAKgEAFgIQAGgIAEgNIhBihIAcAAIAwCGIACAAIAviGIAaAAIg6CbQgIAVgIAOQgIAPgOAIQgOAIgYAAg");
	this.shape_1754.setTransform(57.1,80.15);

	this.shape_1755 = new cjs.Shape();
	this.shape_1755.graphics.f("#FF0000").s().p("AgnBMQgRgHgJgTQgJgSAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAEgOABgXQAAgXgFgNQgFgOgKgGQgKgFgSAAQgRAAgKAFQgLAGgEAOQgEANAAAXQAAAXAFAOQAEAOAKAFQALAGAQAAQASAAALgGg");
	this.shape_1755.setTransform(32.2,77.15);

	this.shape_1756 = new cjs.Shape();
	this.shape_1756.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_1756.setTransform(12.775,74.8488);

	this.shape_1757 = new cjs.Shape();
	this.shape_1757.graphics.f("#FF0000").s().p("AgYBnQgEgEAAgMQAAgMAEgDQAFgEAKAAQAJAAAFAEQAEADAAAMQAAAMgEAEQgFADgJAAQgKAAgFgDgAgVAsIAAgNQAAgLAFgKQAGgKAPgLIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgOABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAUgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAGQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIg");
	this.shape_1757.setTransform(490.975,27.2727);

	this.shape_1758 = new cjs.Shape();
	this.shape_1758.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAJgDAGgJQAGgIAEgOIhBigIAcAAIAxCFIABAAIAviFIAaAAIg6CcQgHAUgJAPQgIAOgOAIQgPAIgXAAg");
	this.shape_1758.setTransform(476.3,32.6);

	this.shape_1759 = new cjs.Shape();
	this.shape_1759.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1759.setTransform(458.575,29.625);

	this.shape_1760 = new cjs.Shape();
	this.shape_1760.graphics.f("#FF0000").s().p("AgTBoIg8AAIAAjPIA8AAQAVAAATAEQASAEAOAMQANALAHAUQAHAVAAAfQAAAogMAXQgNAXgXAJQgVAJgbAAIgDAAgAg0BRIAgAAQAVAAAQgHQARgIAJgRQAJgSABgfQgBgggJgRQgKgSgQgGQgQgHgVAAIggAAg");
	this.shape_1760.setTransform(439.875,27.2988);

	this.shape_1761 = new cjs.Shape();
	this.shape_1761.graphics.f("#FF0000").s().p("AgXBSIgRgBIgOgDIAAgWIAPADIARADIAPABQASgBAKgFQAJgGAAgOQAAgJgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgEQgKgHgEgIQgEgJABgOQAAgTAOgMQAPgMAbAAQAMAAAMABQALABAHADIgDAWQgGgDgLgCQgKgBgLAAQgQgBgJAFQgIAGgBANQABAIACAFQACAEAIADQAGADAMACQASAFAMAFQAKAFAGAJQAEAKAAAQQAAAXgPAMQgRALgdAAIgQgBg");
	this.shape_1761.setTransform(414.25,29.55);

	this.shape_1762 = new cjs.Shape();
	this.shape_1762.graphics.f("#FF0000").s().p("AgUAmIAIgZQAEgNACgNQACgNABgLIAYAAQAAAKgEAOQgDANgFANQgFAOgFALg");
	this.shape_1762.setTransform(403,18.75);

	this.shape_1763 = new cjs.Shape();
	this.shape_1763.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1763.setTransform(389.7023,29.45);

	this.shape_1764 = new cjs.Shape();
	this.shape_1764.graphics.f("#FF0000").s().p("AgiBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAIgTARgHQAQgIAXAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBAKIhtAGQAAASAFAMQAFALALAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAZQgFACgJACIgTAEQgKABgMAAQgXAAgRgHgAgXg4QgKAHgEAMQgEAMAAAQIBVgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgSABgKAFg");
	this.shape_1764.setTransform(371.725,29.6);

	this.shape_1765 = new cjs.Shape();
	this.shape_1765.graphics.f("#FF0000").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABqg");
	this.shape_1765.setTransform(358.425,29.45);

	this.shape_1766 = new cjs.Shape();
	this.shape_1766.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_1766.setTransform(341.7231,26.45);

	this.shape_1767 = new cjs.Shape();
	this.shape_1767.graphics.f("#FF0000").s().p("AgQBrQgKgJAAgRIAAjDIAaAAIAAC8QAAALADAFQADAEAIgBIAGAAIAHgBIAAAVIgIACIgJAAQgRAAgJgIg");
	this.shape_1767.setTransform(329.425,26.4);

	this.shape_1768 = new cjs.Shape();
	this.shape_1768.graphics.f("#FF0000").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDAAgKQAAgKADgCQADgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgDgDg");
	this.shape_1768.setTransform(320.05,26.575);

	this.shape_1769 = new cjs.Shape();
	this.shape_1769.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_1769.setTransform(306.7523,26.3);

	this.shape_1770 = new cjs.Shape();
	this.shape_1770.graphics.f("#FF0000").s().p("AgQBnQgRgFgNgMQgMgLgHgVQgHgVAAghQAAgnAMgXQAMgYAWgKQAWgKAdAAQAOAAALACQALABAJADIAAAZIgUgFQgLgCgNAAQgYAAgPAHQgPAIgIASQgHATAAAeQAAAgAHATQAHASAPAHQAOAHAXAAQAOAAAMgCQAMgCAMgEIAAAXQgJAEgNADQgNACgQAAQgVAAgRgEg");
	this.shape_1770.setTransform(288.925,27.2988);

	this.shape_1771 = new cjs.Shape();
	this.shape_1771.graphics.f("#FF0000").s().p("AAoBTIAAhmQAAgMgCgKQgDgIgHgFQgGgEgNgBQgJAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAihIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAGQALAHAFAMQAFAMAAAPIAABwg");
	this.shape_1771.setTransform(262.5523,29.45);

	this.shape_1772 = new cjs.Shape();
	this.shape_1772.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQARgIAWAAQAYAAARAIQAQAHAJATQAJASAAAfQAAAggJASQgJATgQAIQgRAHgYAAQgWAAgRgHgAAdA5QAKgGAFgOQADgNAAgYQABgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgFANABAXQAAAYAEANQAFAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1772.setTransform(243.95,29.6);

	this.shape_1773 = new cjs.Shape();
	this.shape_1773.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAFgNAAgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1773.setTransform(217.7,29.6);

	this.shape_1774 = new cjs.Shape();
	this.shape_1774.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_1774.setTransform(198.4731,26.45);

	this.shape_1775 = new cjs.Shape();
	this.shape_1775.graphics.f("#FF0000").s().p("AgrBLQgMgGgEgMQgFgLAAgRIAAhuIAaAAIAABlQgBANADAJQACAIAHAFQAHAFANAAQAJAAAJgDQAJgBAIgIQAHgGAFgPIAAhsIAZAAIAAChIgVAAIgEgYQgFALgIAFQgIAGgKACQgJACgKAAQgVABgMgIg");
	this.shape_1775.setTransform(172.425,29.75);

	this.shape_1776 = new cjs.Shape();
	this.shape_1776.graphics.f("#FF0000").s().p("AgoBNQgQgIgJgTQgJgSAAggQAAgfAJgSQAJgTAQgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgRgHgAAdA5QAKgGAEgOQAFgNAAgYQgBgXgEgNQgEgOgLgGQgKgFgSgBQgRABgKAFQgKAGgFAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQATAAAKgFg");
	this.shape_1776.setTransform(154,29.6);

	this.shape_1777 = new cjs.Shape();
	this.shape_1777.graphics.f("#FF0000").s().p("Ag6BZQAOAAAJgFQAJgDAGgJQAGgIAEgOIhBigIAcAAIAwCFIACAAIAviFIAaAAIg6CcQgIAUgIAPQgIAOgOAIQgOAIgYAAg");
	this.shape_1777.setTransform(136.85,32.6);

	this.shape_1778 = new cjs.Shape();
	this.shape_1778.graphics.f("#FF0000").s().p("AgnBNQgRgIgJgTQgJgSAAggQAAgfAJgSQAJgTARgHQAQgIAXAAQAYAAARAIQARAHAIATQAJASAAAfQAAAggJASQgIATgRAIQgRAHgYAAQgXAAgQgHgAAdA5QAKgGAEgOQAFgNAAgYQAAgXgFgNQgFgOgKgGQgKgFgSgBQgRABgKAFQgLAGgEAOQgEANAAAXQAAAYAFANQAEAOAKAGQALAFAQAAQASAAALgFg");
	this.shape_1778.setTransform(111.95,29.6);

	this.shape_1779 = new cjs.Shape();
	this.shape_1779.graphics.f("#FF0000").s().p("AguBoQgPgKgFgSQgGgUAAgYQAAgXAGgSQAFgTAPgLQAPgMAaAAQAXgBAMAJQAMAIAFAPIAAheIAaAAIAADjIgWAAIgEgbQgFANgNAIQgNAIgVAAQgaABgPgMgAgegVQgJAJgDAOQgCAOAAAQQAAAQADAOQADAPAJAIQAJAJATAAQASAAALgIQALgHAFgOQAEgOAAgTQAAgUgEgMQgFgOgLgIQgLgIgSAAQgTAAgKAJg");
	this.shape_1779.setTransform(92.7231,26.45);

	this.shape_1780 = new cjs.Shape();
	this.shape_1780.graphics.f("#FF0000").s().p("AAABhQgLgEgFgLQgFgLAAgVIAAhaIgXAAIAAgWIAXAAIAAgmIAZAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQABAGAGADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgSAAgJgEg");
	this.shape_1780.setTransform(70.85,27.775);

	this.shape_1781 = new cjs.Shape();
	this.shape_1781.graphics.f("#FF0000").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_1781.setTransform(56.025,29.625);

	this.shape_1782 = new cjs.Shape();
	this.shape_1782.graphics.f("#FF0000").s().p("AAoByIAAhnQAAgLgCgJQgDgJgGgFQgHgEgNAAQgJAAgKACQgJADgIAHQgIAGgEANIAABuIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgGAKgCQAJgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAOIAABwg");
	this.shape_1782.setTransform(38.2523,26.3);

	this.shape_1783 = new cjs.Shape();
	this.shape_1783.graphics.f("#FF0000").s().p("AArBoIgqiZIgBAAIgrCZIgiAAIgxjPIAcAAIAnCwIACAAIAqiYIAgAAIAqCYIACAAIAmiwIAcAAIgyDPg");
	this.shape_1783.setTransform(15.475,27.3);

	this.shape_1784 = new cjs.Shape();
	this.shape_1784.graphics.f("#FF0000").s().p("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");
	this.shape_1784.setTransform(284.075,208.925);

	var maskedShapeInstanceList = [this.shape_1561,this.shape_1562,this.shape_1563,this.shape_1564,this.shape_1565,this.shape_1566,this.shape_1567,this.shape_1568,this.shape_1569,this.shape_1570,this.shape_1571,this.shape_1572,this.shape_1573,this.shape_1574,this.shape_1575,this.shape_1576,this.shape_1577,this.shape_1578,this.shape_1579,this.shape_1580,this.shape_1581,this.shape_1582,this.shape_1583,this.shape_1584,this.shape_1585,this.shape_1586,this.shape_1587,this.shape_1588,this.shape_1589,this.shape_1590,this.shape_1591,this.shape_1592,this.shape_1593,this.shape_1594,this.shape_1595,this.shape_1596,this.shape_1597,this.shape_1598,this.shape_1599,this.shape_1600,this.shape_1601,this.shape_1602,this.shape_1603,this.shape_1604,this.shape_1605,this.shape_1606,this.shape_1607,this.shape_1608,this.shape_1609,this.shape_1610,this.shape_1611,this.shape_1612,this.shape_1613,this.shape_1614,this.shape_1615,this.shape_1616,this.shape_1617,this.shape_1618,this.shape_1619,this.shape_1620,this.shape_1621,this.shape_1622,this.shape_1623,this.shape_1624,this.shape_1625,this.shape_1626,this.shape_1627,this.shape_1628,this.shape_1629,this.shape_1630,this.shape_1631,this.shape_1632,this.shape_1633,this.shape_1634,this.shape_1635,this.shape_1636,this.shape_1637,this.shape_1638,this.shape_1639,this.shape_1640,this.shape_1641,this.shape_1642,this.shape_1643,this.shape_1644,this.shape_1645,this.shape_1646,this.shape_1647,this.shape_1648,this.shape_1649,this.shape_1650,this.shape_1651,this.shape_1652,this.shape_1653,this.shape_1654,this.shape_1655,this.shape_1656,this.shape_1657,this.shape_1658,this.shape_1659,this.shape_1660,this.shape_1661,this.shape_1662,this.shape_1663,this.shape_1664,this.shape_1665,this.shape_1666,this.shape_1667,this.shape_1668,this.shape_1669,this.shape_1670,this.shape_1671,this.shape_1672,this.shape_1673,this.shape_1674,this.shape_1675,this.shape_1676,this.shape_1677,this.shape_1678,this.shape_1679,this.shape_1680,this.shape_1681,this.shape_1682,this.shape_1683,this.shape_1684,this.shape_1685,this.shape_1686,this.shape_1687,this.shape_1688,this.shape_1689,this.shape_1690,this.shape_1691,this.shape_1692,this.shape_1693,this.shape_1694,this.shape_1695,this.shape_1696,this.shape_1697,this.shape_1698,this.shape_1699,this.shape_1700,this.shape_1701,this.shape_1702,this.shape_1703,this.shape_1704,this.shape_1705,this.shape_1706,this.shape_1707,this.shape_1708,this.shape_1709,this.shape_1710,this.shape_1711,this.shape_1712,this.shape_1713,this.shape_1714,this.shape_1715,this.shape_1716,this.shape_1717,this.shape_1718,this.shape_1719,this.shape_1720,this.shape_1721,this.shape_1722,this.shape_1723,this.shape_1724,this.shape_1725,this.shape_1726,this.shape_1727,this.shape_1728,this.shape_1729,this.shape_1730,this.shape_1731,this.shape_1732,this.shape_1733,this.shape_1734,this.shape_1735,this.shape_1736,this.shape_1737,this.shape_1738,this.shape_1739,this.shape_1740,this.shape_1741,this.shape_1742,this.shape_1743,this.shape_1744,this.shape_1745,this.shape_1746,this.shape_1747,this.shape_1748,this.shape_1749,this.shape_1750,this.shape_1751,this.shape_1752,this.shape_1753,this.shape_1754,this.shape_1755,this.shape_1756,this.shape_1757,this.shape_1758,this.shape_1759,this.shape_1760,this.shape_1761,this.shape_1762,this.shape_1763,this.shape_1764,this.shape_1765,this.shape_1766,this.shape_1767,this.shape_1768,this.shape_1769,this.shape_1770,this.shape_1771,this.shape_1772,this.shape_1773,this.shape_1774,this.shape_1775,this.shape_1776,this.shape_1777,this.shape_1778,this.shape_1779,this.shape_1780,this.shape_1781,this.shape_1782,this.shape_1783,this.shape_1784];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1783},{t:this.shape_1782},{t:this.shape_1781},{t:this.shape_1780},{t:this.shape_1779},{t:this.shape_1778},{t:this.shape_1777},{t:this.shape_1776},{t:this.shape_1775},{t:this.shape_1774},{t:this.shape_1773},{t:this.shape_1772},{t:this.shape_1771},{t:this.shape_1770},{t:this.shape_1769},{t:this.shape_1768},{t:this.shape_1767},{t:this.shape_1766},{t:this.shape_1765},{t:this.shape_1764},{t:this.shape_1763},{t:this.shape_1762},{t:this.shape_1761},{t:this.shape_1760},{t:this.shape_1759},{t:this.shape_1758},{t:this.shape_1757},{t:this.shape_1756},{t:this.shape_1755},{t:this.shape_1754},{t:this.shape_1753},{t:this.shape_1752},{t:this.shape_1751},{t:this.shape_1750},{t:this.shape_1749},{t:this.shape_1748},{t:this.shape_1747},{t:this.shape_1746},{t:this.shape_1745},{t:this.shape_1744},{t:this.shape_1743},{t:this.shape_1742},{t:this.shape_1741},{t:this.shape_1740},{t:this.shape_1739},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733},{t:this.shape_1732},{t:this.shape_1731},{t:this.shape_1730},{t:this.shape_1729},{t:this.shape_1728},{t:this.shape_1727},{t:this.shape_1726},{t:this.shape_1725},{t:this.shape_1724},{t:this.shape_1723},{t:this.shape_1722},{t:this.shape_1721},{t:this.shape_1720},{t:this.shape_1719},{t:this.shape_1718},{t:this.shape_1717},{t:this.shape_1716},{t:this.shape_1715},{t:this.shape_1714},{t:this.shape_1713},{t:this.shape_1712},{t:this.shape_1711},{t:this.shape_1710},{t:this.shape_1709},{t:this.shape_1708},{t:this.shape_1707},{t:this.shape_1706},{t:this.shape_1705},{t:this.shape_1704},{t:this.shape_1703},{t:this.shape_1702},{t:this.shape_1701},{t:this.shape_1700},{t:this.shape_1699},{t:this.shape_1698},{t:this.shape_1697},{t:this.shape_1696},{t:this.shape_1695},{t:this.shape_1694},{t:this.shape_1693},{t:this.shape_1692},{t:this.shape_1691},{t:this.shape_1690},{t:this.shape_1689},{t:this.shape_1688},{t:this.shape_1687},{t:this.shape_1686},{t:this.shape_1685},{t:this.shape_1684},{t:this.shape_1683},{t:this.shape_1682},{t:this.shape_1681},{t:this.shape_1680},{t:this.shape_1679},{t:this.shape_1678},{t:this.shape_1677},{t:this.shape_1676},{t:this.shape_1675},{t:this.shape_1674},{t:this.shape_1673},{t:this.shape_1672},{t:this.shape_1671},{t:this.shape_1670},{t:this.shape_1669},{t:this.shape_1668},{t:this.shape_1667},{t:this.shape_1666},{t:this.shape_1665},{t:this.shape_1664},{t:this.shape_1663},{t:this.shape_1662},{t:this.shape_1661},{t:this.shape_1660},{t:this.shape_1659},{t:this.shape_1658},{t:this.shape_1657},{t:this.shape_1656},{t:this.shape_1655},{t:this.shape_1654},{t:this.shape_1653},{t:this.shape_1652},{t:this.shape_1651},{t:this.shape_1650},{t:this.shape_1649},{t:this.shape_1648},{t:this.shape_1647},{t:this.shape_1646},{t:this.shape_1645},{t:this.shape_1644},{t:this.shape_1643},{t:this.shape_1642},{t:this.shape_1641},{t:this.shape_1640},{t:this.shape_1639},{t:this.shape_1638},{t:this.shape_1637},{t:this.shape_1636},{t:this.shape_1635},{t:this.shape_1634},{t:this.shape_1633},{t:this.shape_1632},{t:this.shape_1631},{t:this.shape_1630},{t:this.shape_1629},{t:this.shape_1628},{t:this.shape_1627},{t:this.shape_1626},{t:this.shape_1625},{t:this.shape_1624},{t:this.shape_1623},{t:this.shape_1622},{t:this.shape_1621},{t:this.shape_1620},{t:this.shape_1619},{t:this.shape_1618},{t:this.shape_1617},{t:this.shape_1616},{t:this.shape_1615},{t:this.shape_1614},{t:this.shape_1613},{t:this.shape_1612},{t:this.shape_1611},{t:this.shape_1610},{t:this.shape_1609},{t:this.shape_1608},{t:this.shape_1607},{t:this.shape_1606},{t:this.shape_1605},{t:this.shape_1604},{t:this.shape_1603},{t:this.shape_1602},{t:this.shape_1601},{t:this.shape_1600},{t:this.shape_1599},{t:this.shape_1598},{t:this.shape_1597},{t:this.shape_1596},{t:this.shape_1595},{t:this.shape_1594},{t:this.shape_1593},{t:this.shape_1592},{t:this.shape_1591},{t:this.shape_1590},{t:this.shape_1589},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583},{t:this.shape_1582},{t:this.shape_1581},{t:this.shape_1580},{t:this.shape_1579},{t:this.shape_1578},{t:this.shape_1577},{t:this.shape_1576},{t:this.shape_1575},{t:this.shape_1574},{t:this.shape_1573},{t:this.shape_1572},{t:this.shape_1571},{t:this.shape_1570},{t:this.shape_1569},{t:this.shape_1568},{t:this.shape_1567},{t:this.shape_1566},{t:this.shape_1565},{t:this.shape_1564},{t:this.shape_1563},{t:this.shape_1562},{t:this.shape_1561}]},120).to({state:[{t:this.shape_1784}]},55).wait(962));

	// 图层_1
	this.shape_1785 = new cjs.Shape();
	this.shape_1785.graphics.f("#333333").s().p("EgkYAd+QAOAAAJgEQAKgEAFgJQAGgIAEgNIhBiiIAcAAIAyCHIABAAIAviHIAaAAIg6CdQgHAUgJAPQgJAOgOAIQgOAIgYAAgAMadbQgYAAgQgMQgQgNgIgZIgDgNIAAgMIAAgJQAAgZAKgTQAKgTAVgNIAQgFQAIgCAHAAIADAAQAbAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABWIABAeIAEAbIgBAAIgZAAQgBAAgBgGIgDgTIgFAIIgGAHQgIAGgJADQgIADgLAAgAMHbUQgNAJgHASIgDAMIgBAMIAAAHQAAAQAGAMQAGANAMAKIALAEIALABIAFAAQAuAAAAg5IAAgKQAAgXgIgOQgIgOgQgFIgFAAIgEAAIgBAAQgSAAgNAJgADpdUQgRgIgJgSQgJgTAAggQAAggAJgSQAJgTAQgHQARgIAXAAQAVAAAMAGQANAGAHAKQAHAKACAMQADAMAAAMIgBAIIgBALIhuAHQAAARAFAMQAFALAMAGQALAFATAAQAOAAAOgDQANgCAKgFIAAAYQgFACgIACIgTAEQgLABgMAAQgXAAgRgHgAD0bPQgKAGgEAMQgEAMgBARIBWgHQABgMgDgLQgDgKgIgHQgJgGgRAAQgSAAgKAGgAmqdbQgYAAgQgMQgQgNgIgZIgCgNIgBgMIAAgJQAAgZAKgTQALgTAUgNIAQgFQAIgCAIAAIACAAQAcAAASAdIAAgHIAAgBIABAAIAYAAIABAAIABABIAABWIABAeIAEAbIgCAAIgYAAQgBAAgBgGIgDgTIgGAIIgGAHQgHAGgJADQgJADgKAAgAm9bUQgMAJgIASIgDAMIgBAMIAAAHQAAAQAGAMQAHANAMAKIAKAEIALABIAGAAQAuAAAAg5IAAgKQAAgXgIgOQgIgOgQgFIgGAAIgEAAIgBAAQgSAAgNAJgAtodbQgYAAgQgMQgQgNgIgZIgCgNIgBgMIAAgJQAAgZAKgTQALgTAUgNIAQgFQAIgCAIAAIACAAQAcAAASAdIAAgHIAAgBIABAAIAYAAIABAAIABABIAABWIABAeIAEAbIgCAAIgYAAQgBAAgBgGIgDgTIgGAIIgGAHQgHAGgJADQgJADgKAAgAt7bUQgMAJgIASIgDAMIgBAMIAAAHQAAAQAGAMQAHANAMAKIAKAEIALABIAGAAQAuAAAAg5IAAgKQAAgXgIgOQgIgOgQgFIgGAAIgEAAIgBAAQgSAAgNAJgA2LdbQgYAAgQgMQgQgNgIgZIgCgNIgBgMIAAgJQAAgZAKgTQALgTAUgNIAQgFQAIgCAIAAIACAAQAcAAASAdIAAgHIAAgBIABAAIAYAAIABAAIABABIAABWIABAeIAEAbIgCAAIgYAAQgBAAgBgGIgDgTIgGAIIgGAHQgHAGgJADQgJADgKAAgA2ebUQgMAJgIASIgDAMIgBAMIAAAHQAAAQAGAMQAHANAMAKIAKAEIALABIAGAAQAuAAAAg5IAAgKQAAgXgIgOQgIgOgQgFIgGAAIgEAAIgBAAQgSAAgNAJgA+ldUQgMgGgEgMQgFgMAAgQIAAhwIAaAAIAABnQgBAMADAJQACAJAHAFQAHAEANAAQAKABAJgDQAJgCAIgHQAHgHAFgOIAAhuIAZAAIAACiIgVAAIgEgXQgFAKgIAGQgIAGgKACQgKACgKAAQgVAAgMgHgEghaAdUQgQgIgJgSQgJgTAAggQAAggAJgSQAJgTAQgHQARgIAYAAQAYAAARAIQAQAHAJATQAJASAAAgQAAAggJATQgJASgQAIQgRAHgYAAQgYAAgRgHgEggUAdAQAKgGAEgOQAEgNAAgYQAAgXgEgOQgFgOgKgFQgKgGgSAAQgSAAgKAGQgLAFgEAOQgFAOABAXQAAAYAEANQAFAOAKAGQALAGARgBQASABALgGgEgn+AdUQgRgIgJgSQgJgTAAggQAAggAJgSQAJgTARgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAgQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgEgm5AdAQAKgGAFgOQAEgNAAgYQAAgXgFgOQgEgOgLgFQgKgGgSAAQgSAAgKAGQgKAFgFAOQgEAOAAAXQAAAYAFANQAEAOAKAGQALAGARgBQATABAKgGgAQVdXQgEgEAAgMQAAgMAEgDQAFgEAKAAQAKAAAFAEQAEADAAAMQAAAMgEAEQgFADgKAAQgKAAgFgDgAO2dWQgLgEgFgLQgEgLAAgVIAAhbIgYAAIAAgWIAYAAIAAgmIAaAAIAAAmIAoAAIAAAWIgoAAIAABZQgBANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEgAHgdWQgLgEgFgLQgEgLAAgVIAAhbIgYAAIAAgWIAYAAIAAgmIAaAAIAAAmIAoAAIAAAWIgoAAIAABZQgBANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEgAhodSQgJgIAAgSIAAjEIAaAAIAAC9QAAAMADAEQAEAEAIgBIAGAAIAGgBIAAAVIgHACIgKAAQgSAAgJgIgAkOdWQgKgEgFgLQgFgLAAgVIAAhbIgYAAIAAgWIAYAAIAAgmIAaAAIAAAmIAoAAIAAAWIgoAAIAABZQAAANACAHQABAGAGADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgLgEgAw1dWQgLgEgFgLQgEgLAAgVIAAhbIgYAAIAAgWIAYAAIAAgmIAaAAIAAAmIAoAAIAAAWIgoAAIAABZQgBANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEgEgqsAdYIg8AAIAAjQIA8AAQAWAAATAEQASAEAOAMQANALAHAUQAHAVAAAgQAAAogMAXQgNAXgXAJQgVAJgcAAIgDAAgEgrNAdBIAgAAQAWAAAQgHQARgIAJgRQAJgSABgfQgBghgJgRQgKgSgQgGQgQgHgWAAIggAAgAKadYIAAhmQAAgNgDgJQgCgIgHgFQgHgFgNAAQgKAAgJACQgKADgHAHQgIAHgFAOIAABtIgaAAIAAjkIAaAAIAABZQAFgKAJgGQAIgFAKgDQAKgCAKAAQAVAAAMAHQAMAHAFAMQAFAMgBAPIAABwgACSdYIg7hLIgJAAIAABLIgaAAIAAjkIAaAAIAACFIAKAAIA4hDIAgAAIhEBMIBHBWgAgbdYIAAiiIAaAAIAACigAoqdYIAAhmQAAgNgCgJQgDgIgGgFQgHgFgNAAQgKAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAjkIAaAAIAABZQAFgKAIgGQAJgFAKgDQAKgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwgAyadYIAAhmQAAgNgCgJQgDgIgHgFQgGgFgNAAQgKAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAiiIAaAAIAAAXQAFgKAIgGQAJgFAKgDQAKgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwgA4qdYIgoiFIgCAAIgpCFIggAAIgsiiIAaAAIAiCIIACAAIAoiIIAfAAIApCIIACAAIAiiIIAaAAIgtCigAQYccIAAgNQAAgLAFgKQAGgKAQgMIAOgNQAFgGABgGQACgGAAgIQAAgNgDgHQgEgGgJgDQgIgDgPABIgWABQgMACgJADIAAgYIATgEQALgCAQAAQAVgBAPAFQAOAFAHALQAHAMAAAUQAAAQgEAKQgDAKgHAHQgHAGgJAHQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIgAgaaWQgDgDAAgKQAAgKADgCQAEgDAIAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgIAAgEgDgACWWjQAOAAAJgFQAKgEAFgIQAGgJAEgNIhBihIAcAAIAyCGIABAAIAviGIAaAAIg6CcQgHAVgJAOQgJAPgOAIQgOAIgYAAgAoJW5IAAjeIAaAAIAAAdQAFgPAMgIQAMgJAXAAQAbAAAPALQAOAKAGATQAFATAAAZQAAAWgFATQgGATgOAMQgPALgbABQgXAAgMgJQgNgIgEgPIAABZgAncT1QgLAHgFAOQgFAOABAUQgBASAFAOQAFAOALAIQALAIATAAQATAAAJgJQAKgJADgOQADgOgBgQQABgSgEgOQgDgOgJgIQgJgJgTAAQgTAAgLAIgEgkKAWmQAIgNAHgOQAGgOAEgNQADgOAAgLIAZAAQAAANgFAOQgFAPgHANQgHAOgIAKgEAmoAV4QgRgHgJgTQgJgSAAggQAAggAJgTQAJgSARgIQARgHAXAAQAOAAALACQALABAHADIAAAXIgUgFQgKgCgMAAQgSAAgLAGQgKAFgEAOQgFANAAAYQAAAXAFAOQAEANALAGQAKAFASAAQAMAAALgCQAKgBAJgEIAAAYIgLADIgQACIgQABQgXAAgRgIgEAjrAV5QgMgHgEgMQgFgLAAgQIAAhwIAaAAIAABmQgBANADAJQACAIAHAFQAHAFANAAQAKAAAJgCQAJgCAIgHQAHgHAFgOIAAhuIAZAAIAACiIgVAAIgEgYQgFALgIAGQgIAFgKADQgKACgKAAQgVAAgMgHgAbVV4QgRgHgJgTQgJgSAAggQAAggAJgTQAJgSARgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAgQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgAcaVkQAKgFAFgOQAEgOAAgXQAAgYgFgNQgEgOgLgGQgKgGgSAAQgSAAgKAGQgKAGgFAOQgEANAAAYQAAAXAFAOQAEAOAKAFQALAGARAAQATAAAKgGgARIV4QgQgHgJgTQgJgSAAggQAAggAJgTQAIgSARgIQAQgHAYAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAALIAAAJIgBAKIhuAHQAAASAFALQAFAMALAFQALAGAUAAQAOAAANgDQAOgDAKgFIAAAYQgFADgJACIgTADQgKACgMAAQgYAAgRgIgARTTzQgKAHgEAMQgEAMAAAQIBWgGQAAgNgDgKQgCgLgJgGQgIgHgRAAQgTAAgKAGgALxV4QgRgHgJgTQgJgSAAggQAAggAJgTQAJgSARgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAgQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgAM2VkQAKgFAFgOQAEgOAAgXQAAgYgFgNQgEgOgLgGQgKgGgSAAQgSAAgKAGQgKAGgFAOQgEANAAAYQAAAXAFAOQAEAOAKAFQALAGARAAQATAAAKgGgAjAV4QgRgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAXAAQAVAAAMAGQANAGAHAKQAHAKACAMQADAMAAALIgBAJIgBAKIhuAHQAAASAFALQAFAMAMAFQALAGATAAQAOAAAOgDQANgDAKgFIAAAYQgFADgIACIgTADQgLACgMAAQgXAAgRgIgAi1TzQgKAHgEAMQgEAMgBAQIBWgGQABgNgDgKQgDgLgIgGQgJgHgRAAQgSAAgKAGgAr3V4QgQgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAYAAQAYAAARAHQAQAIAJASQAJATAAAgQAAAggJASQgJATgQAHQgRAIgYAAQgYAAgRgIgAqxVkQAKgFAEgOQAEgOAAgXQAAgYgEgNQgFgOgKgGQgKgGgSAAQgSAAgKAGQgLAGgEAOQgFANABAYQAAAXAEAOQAFAOAKAFQALAGARAAQASAAALgGgA7cV4QgRgHgJgTQgJgSAAggQAAggAJgTQAJgSARgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAgQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgA6XVkQAKgFAFgOQAEgOAAgXQAAgYgFgNQgEgOgLgGQgKgGgSAAQgSAAgKAGQgKAGgFAOQgEANAAAYQAAAXAFAOQAEAOAKAFQALAGARAAQATAAAKgGgA+jV1QgPgLgFgSQgGgTAAgZQAAgXAGgTQAFgTAPgLQAPgMAaAAQAYAAAMAIQAMAJAFAOIAAheIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgWAAQgaAAgPgLgA+TT3QgJAIgDAPQgCAOAAAQQAAARADAOQADAOAJAIQAJAJATAAQATAAALgIQALgHAFgOQAEgOAAgTQAAgTgEgOQgFgOgLgIQgLgIgTAAQgTABgKAJgEgoeAV4QgRgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAXAAQAVAAAMAGQANAGAHAKQAHAKACAMQADAMAAALIgBAJIgBAKIhuAHQAAASAFALQAFAMAMAFQALAGATAAQAOAAAOgDQANgDAKgFIAAAYQgFADgIACIgTADQgLACgMAAQgXAAgRgIgEgoTATzQgKAHgEAMQgEAMgBAQIBWgGQABgNgDgKQgDgLgIgGQgJgHgRAAQgSAAgKAGgEArkAV9QgEgBgCgEQgCgEAAgJQAAgLAFgEQAEgEALABQAKgBAEAEQAFAEAAALQAAAJgCAEQgCAEgEABQgFACgGAAQgIAAgEgCgAZBV+IgRgCIgNgDIAAgWIAOADIARADIAQABQASAAAKgGQAJgFAAgOQAAgKgCgFQgDgGgIgDQgIgDgPgEQgSgEgKgFQgKgGgEgJQgEgJABgNQAAgUAOgMQAPgMAdAAQAMAAALABQALACAHACIgCAWQgHgDgKgBQgLgCgLAAQgRgBgIAGQgJAFAAANQAAAIACAFQADAEAHADQAGADANADQASAEAMAGQALAFAFAKQAFAJAAAQQgBAYgPALQgQAMgeAAIgRgBgAWQV7QgLgEgFgMQgEgLAAgVIAAhbIgYAAIAAgVIAYAAIAAgnIAaAAIAAAnIAoAAIAAAVIgoAAIAABaQgBAMACAHQACAHAFACQAFADAKAAIAJAAIAJgCIAAAWIgJABIgKABQgRAAgLgEgAKLV2QgJgIAAgSIAAjDIAaAAIAAC8QAAAMADAEQAEAEAIAAIAGAAIAGgBIAAAVIgHABIgKABQgSAAgJgJgAFCV9QgEgBgCgEQgCgEAAgJQAAgLAFgEQAEgEALABQAKgBAEAEQAFAEAAALQAAAJgCAEQgCAEgEABQgFACgGAAQgIAAgEgCgABOV7QgLgEgFgMQgEgLAAgVIAAhbIgYAAIAAgVIAYAAIAAgnIAaAAIAAAnIAoAAIAAAVIgoAAIAABaQgBAMACAHQACAHAFACQAFADAKAAIAJAAIAJgCIAAAWIgJABIgKABQgRAAgLgEgAgWV7QgLgEgFgMQgEgLAAgVIAAhbIgYAAIAAgVIAYAAIAAgnIAaAAIAAAnIAnAAIAAAVIgnAAIAABaQgBAMACAHQACAHAFACQAFADAJAAIAJAAIAJgCIAAAWIgJABIgKABQgQAAgLgEgAuLV+IgRgCIgNgDIAAgWIAOADIARADIAQABQATAAAJgGQAKgFAAgOQAAgKgDgFQgDgGgHgDQgIgDgPgEQgSgEgKgFQgKgGgEgJQgEgJAAgNQAAgUAPgMQAPgMAcAAQAMAAAMABQALACAGACIgCAWQgHgDgKgBQgKgCgLAAQgRgBgJAGQgJAFAAANQAAAIADAFQACAEAHADQAHADAMADQATAEALAGQALAFAFAKQAFAJAAAQQAAAYgQALQgQAMgeAAIgRgBgAxnV+IgRgCIgNgDIAAgWIAOADIARADIAQABQASAAAKgGQAJgFAAgOQAAgKgCgFQgDgGgIgDQgIgDgPgEQgSgEgKgFQgKgGgEgJQgEgJABgNQAAgUAOgMQAPgMAdAAQAMAAALABQALACAHACIgCAWQgHgDgKgBQgLgCgLAAQgRgBgIAGQgJAFAAANQAAAIACAFQADAEAHADQAGADANADQASAEAMAGQALAFAFAKQAFAJAAAQQgBAYgPALQgQAMgeAAIgRgBgA0cV7QgLgEgFgMQgEgLAAgVIAAhbIgYAAIAAgVIAYAAIAAgnIAaAAIAAAnIAoAAIAAAVIgoAAIAABaQgBAMACAHQACAHAFACQAFADAKAAIAJAAIAJgCIAAAWIgJABIgKABQgRAAgLgEgA4wV7QgEgDAAgMQAAgMAEgEQAEgEALABQAKgBAEAEQAFAEAAAMQAAAMgFADQgEAEgKAAQgLAAgEgEgEgl1AV+IgRgCIgNgDIAAgWIAOADIARADIAQABQASAAAKgGQAJgFAAgOQAAgKgCgFQgDgGgIgDQgIgDgPgEQgSgEgKgFQgKgGgEgJQgEgJABgNQAAgUAOgMQAPgMAdAAQAMAAALABQALACAHACIgCAWQgHgDgKgBQgLgCgLAAQgRgBgIAGQgJAFAAANQAAAIACAFQADAEAHADQAGADANADQASAEAMAGQALAFAFAKQAFAJAAAQQgBAYgPALQgQAMgeAAIgRgBgEAqOAV9IAAhnQAAgMgCgJQgDgJgGgFQgHgEgNAAQgKAAgKACQgJACgIAHQgIAHgEAOIAABuIgaAAIAAjkIAaAAIAABZQAFgKAIgGQAJgGAKgCQAKgCAKAAQAVAAAMAHQALAGAFAMQAFAMAAAQIAABwgEAiIAV9IAAhnQAAgTgGgKQgHgKgSAAQgKAAgIACQgIACgGAHQgHAGgDALIAAByIgaAAIAAhnQAAgTgGgKQgGgKgSAAQgKAAgIACQgIACgGAHQgHAGgEAMIAABxIgaAAIAAiiIAaAAIAAAVQAIgOAMgFQAMgFAPAAQATAAAMAHQALAHAFAMQAFgKAIgGQAIgGAKgCQAKgCAKAAQASAAAMAHQAMAGAFAMQAGAMAAAQIAABwgAUqV9IAAiiIAaAAIAACigAO2V9Ig9iiIAaAAIAyCIIABAAIAwiIIAbAAIg9CigAHjV9IAAjQIAbAAIAADQgAlLV9IAAiiIAaAAIAAAdQAGgNAIgHQAIgHAKgDQAKgCAKAAIADAAIgBAXIgDAAQgLAAgKADQgKADgHAIQgIAIgFAOIAABqgA2DV9IAAjQIAbAAIAADQgEghSAV9IAAjQIAbAAIAADQgEgq4AV9IAAhaIhKh2IAfAAIA4BeIACAAIA4heIAeAAIhLB2IAABagA4rVAIgFiTIAeAAIgFCTgAzUTmIAIgaQAEgNACgNQACgOAAgLIAaAAQAAALgEANQgDAOgFAOQgFANgGAMgAUrS6QgDgDAAgJQAAgKADgDQAEgDAIAAQAIAAAEADQAEADAAAKQAAAJgEADQgEADgIAAQgIAAgEgDgABlPHQAOAAAJgEQAKgEAFgJQAGgIAEgNIhBiiIAcAAIAyCHIABAAIAviHIAaAAIg6CdQgHAUgJAPQgJAOgOAIQgOAIgYAAgAh6PcIgTgDIAAgWIAUADIAUABQAbAAANgMQANgMAAgcIAAgQQgFAOgMAIQgMAIgXAAQgbAAgPgKQgPgKgFgTQgGgSAAgZQAAgXAGgTQAFgSAPgLQAPgLAbgBQAQAAAKAFQALAEAGAHQAGAIADAKIAAgfIAaAAIAACXQAAAigTASQgUATgpAAIgUgBgAh+MbQgJAIgDAOQgCAOAAAQQAAARADAOQADANAJAIQAJAIATABQATAAALgIQALgHAFgNQAEgOAAgTQAAgTgEgOQgFgNgLgIQgLgHgTAAQgTAAgKAJgEgkYAPHQAOAAAJgEQAKgEAFgJQAGgIAEgNIhBiiIAcAAIAyCHIABAAIAviHIAaAAIg6CdQgHAUgJAPQgJAOgOAIQgOAIgYAAgAbROkQgYAAgQgMQgQgNgIgZIgCgNIgBgMIAAgJQAAgZAKgTQALgTAUgNIAQgFQAIgCAIAAIACAAQAcAAASAdIAAgHIAAgBIABAAIAYAAIABAAIABABIAABWIABAeIAEAbIgCAAIgYAAQgBAAgBgGIgDgTIgGAIIgGAHQgHAGgJADQgJADgKAAgAa+MdQgMAJgIASIgDAMIgBAMIAAAHQAAAQAGAMQAHANAMAKIAKAEIALABIAGAAQAuAAAAg5IAAgKQAAgXgIgOQgIgOgQgFIgGAAIgEAAIgBAAQgSAAgNAJgAQNOdQgRgIgJgSQgJgTAAggQAAggAJgSQAJgTAQgHQARgIAXAAQAVAAAMAGQANAGAHAKQAHAKACAMQADAMAAAMIgBAIIgBALIhuAHQAAARAFAMQAFALAMAGQALAFATAAQAOAAAOgDQANgCAKgFIAAAYQgFACgIACIgTAEQgLABgMAAQgXAAgRgHgAQYMYQgKAGgEAMQgEAMgBARIBWgHQABgMgDgLQgDgKgIgHQgJgGgRAAQgSAAgKAGgAHYOdQgMgGgEgMQgFgMAAgQIAAhwIAaAAIAABnQgBAMADAJQACAJAHAFQAHAEANAAQAKABAJgDQAJgCAIgHQAHgHAFgOIAAhuIAZAAIAACiIgVAAIgEgXQgFAKgIAGQgIAGgKACQgKACgKAAQgVAAgMgHgAEjOdQgQgIgJgSQgJgTAAggQAAggAJgSQAJgTAQgHQARgIAYAAQAYAAARAIQAQAHAJATQAJASAAAgQAAAggJATQgJASgQAIQgRAHgYAAQgYAAgRgHgAFpOJQAKgGAEgOQAEgNAAgYQAAgXgEgOQgFgOgKgFQgKgGgSAAQgSAAgKAGQgLAFgEAOQgFAOABAXQAAAYAEANQAFAOAKAGQALAGARgBQASABALgGgAqhOkQgYAAgQgMQgQgNgIgZIgCgNIgBgMIAAgJQAAgZAKgTQALgTAUgNIAQgFQAIgCAIAAIACAAQAcAAASAdIAAgHIAAgBIABAAIAYAAIABAAIABABIAABWIABAeIAEAbIgCAAIgYAAQgBAAgBgGIgDgTIgGAIIgGAHQgHAGgJADQgJADgKAAgAq0MdQgMAJgIASIgDAMIgBAMIAAAHQAAAQAGAMQAHANAMAKIAKAEIALABIAGAAQAuAAAAg5IAAgKQAAgXgIgOQgIgOgQgFIgGAAIgEAAIgBAAQgSAAgNAJgAtmOdQgRgIgJgSQgJgTAAggQAAggAJgSQAJgTAQgHQARgIAXAAQAVAAAMAGQANAGAHAKQAHAKACAMQADAMAAAMIgBAIIgBALIhuAHQAAARAFAMQAFALAMAGQALAFATAAQAOAAAOgDQANgCAKgFIAAAYQgFACgIACIgTAEQgLABgMAAQgXAAgRgHgAtbMYQgKAGgEAMQgEAMgBARIBWgHQABgMgDgLQgDgKgIgHQgJgGgRAAQgSAAgKAGgA1ZOdQgRgIgJgSQgJgTAAggQAAggAJgSQAJgTAQgHQARgIAXAAQAVAAAMAGQANAGAHAKQAHAKACAMQADAMAAAMIgBAIIgBALIhuAHQAAARAFAMQAFALAMAGQALAFATAAQAOAAAOgDQANgCAKgFIAAAYQgFACgIACIgTAEQgLABgMAAQgXAAgRgHgA1OMYQgKAGgEAMQgEAMgBARIBWgHQABgMgDgLQgDgKgIgHQgJgGgRAAQgSAAgKAGgA+lOdQgMgGgEgMQgFgMAAgQIAAhwIAaAAIAABnQgBAMADAJQACAJAHAFQAHAEANAAQAKABAJgDQAJgCAIgHQAHgHAFgOIAAhuIAZAAIAACiIgVAAIgEgXQgFAKgIAGQgIAGgKACQgKACgKAAQgVAAgMgHgEghaAOdQgQgIgJgSQgJgTAAggQAAggAJgSQAJgTAQgHQARgIAYAAQAYAAARAIQAQAHAJATQAJASAAAgQAAAggJATQgJASgQAIQgRAHgYAAQgYAAgRgHgEggUAOJQAKgGAEgOQAEgNAAgYQAAgXgEgOQgFgOgKgFQgKgGgSAAQgSAAgKAGQgLAFgEAOQgFAOABAXQAAAYAEANQAFAOAKAGQALAGARgBQASABALgGgEgn+AOdQgRgIgJgSQgJgTAAggQAAggAJgSQAJgTARgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAgQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgEgm5AOJQAKgGAFgOQAEgNAAgYQAAgXgFgOQgEgOgLgFQgKgGgSAAQgSAAgKAGQgKAFgFAOQgEAOAAAXQAAAYAFANQAEAOAKAGQALAGARgBQATABAKgGgAfNOgQgFgEAAgMQAAgMAFgDQAEgEAKAAQALAAAEAEQAFADAAAMQAAAMgFAEQgEADgLAAQgKAAgEgDgAdtOfQgKgEgFgLQgFgLAAgVIAAhbIgYAAIAAgWIAYAAIAAgmIAaAAIAAAmIAoAAIAAAWIgoAAIAABZQAAANACAHQABAGAGADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgLgEgA6rObQgJgIAAgSIAAjEIAaAAIAAC9QAAAMADAEQAEAEAIgBIAGAAIAGgBIAAAVIgHACIgKAAQgSAAgJgIgEgqsAOhIg8AAIAAjQIA8AAQAWAAATAEQASAEAOAMQANALAHAUQAHAVAAAgQAAAogMAXQgNAXgXAJQgVAJgcAAIgDAAgEgrNAOKIAgAAQAWAAAQgHQARgIAJgRQAJgSABgfQgBghgJgRQgKgSgQgGQgQgHgWAAIggAAgAZROhIAAhmQAAgNgCgJQgDgIgGgFQgHgFgNAAQgKAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAjkIAaAAIAABZQAFgKAIgGQAJgFAKgDQAKgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwgAUrOhIgoiFIgCAAIgoCFIggAAIgsiiIAaAAIAiCIIACAAIAoiIIAeAAIAqCIIACAAIAiiIIAZAAIgtCigAOkOhIAAhmQABgNgDgJQgCgIgHgFQgHgFgNAAQgKAAgJACQgKADgHAHQgIAHgFAOIAABtIgaAAIAAiiIAaAAIAAAXQAFgKAJgGQAIgFAKgDQAKgCAKAAQAVAAAMAHQAMAHAFAMQAFAMgBAPIAABwgAJ8OhIAAiiIAaAAIAAAeQAFgOAIgHQAJgHAKgCQAKgDAJAAIADAAIAAAYIgEAAQgLgBgJAEQgKACgIAIQgIAIgEAOIAABqgAjuOhIAAhmQAAgNgCgJQgDgIgHgFQgGgFgNAAQgKAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAiiIAaAAIAAAXQAFgKAIgGQAJgFAKgDQAKgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwgAmpOhIAAiiIAaAAIAACigAoaOhIAAiiIAaAAIAAAeQAFgOAIgHQAJgHAKgCQAKgDAJAAIADAAIAAAYIgEAAQgLgBgJAEQgKACgIAIQgIAIgEAOIAABqgAvuOhIgoiFIgCAAIgoCFIggAAIgsiiIAaAAIAiCIIACAAIAoiIIAeAAIAqCIIACAAIAiiIIAZAAIgtCigA2wOhIg7hLIgJAAIAABLIgaAAIAAjkIAaAAIAACFIAKAAIA4hDIAgAAIhEBMIBHBWgA5eOhIAAiiIAaAAIAACigAfPNlIAAgNQAAgLAGgKQAFgKAQgMIAOgNQAFgGACgGQACgGAAgIQAAgNgEgHQgEgGgIgDQgIgDgPABIgXABQgMACgJADIAAgYIATgEQAMgCAPAAQAWgBAOAFQAOAFAHALQAIAMAAAUQgBAQgDAKQgEAKgHAHQgGAGgKAHQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIgAmnLfQgEgDAAgKQAAgKAEgCQADgDAJAAQAIAAADADQAEACAAAKQAAAKgEADQgDADgIAAQgJAAgDgDgA5dLfQgDgDAAgKQAAgKADgCQAEgDAIAAQAIAAAEADQAEACAAAKQAAAKgEADQgEADgIAAQgIAAgEgDgEAieAHsQAOAAAJgFQAKgEAFgIQAGgJAEgNIhBihIAcAAIAyCGIABAAIAviGIAaAAIg6CcQgHAVgJAOQgJAPgOAIQgOAIgYAAgA36HsQAOAAAJgFQAJgEAGgIQAGgJAEgNIhBihIAcAAIAxCGIACAAIAviGIAaAAIg6CcQgIAVgIAOQgJAPgOAIQgPAIgXAAgEAgfAHJQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgKQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAbAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABWIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgLAAgEAgMAFBQgNAJgHASIgDAMIgBAMIAAAHQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAuAAAAg4IAAgLQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgSAAgNAJgAShHBQgRgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAXAAQAVAAAMAGQANAGAHAKQAHAKACAMQADAMAAALIgBAJIgBAKIhuAHQAAASAFALQAFAMAMAFQALAGATAAQAOAAAOgDQANgDAKgFIAAAYQgFADgIACIgTADQgLACgMAAQgXAAgRgIgASsE8QgKAHgEAMQgEAMgBAQIBWgGQABgNgDgKQgDgLgIgGQgJgHgRAAQgSAAgKAGgANoG+QgOgLgGgSQgGgTABgZQgBgXAGgTQAGgTAOgLQAPgMAbAAQAXAAAMAIQANAJAEAOIAAheIAaAAIAADkIgWAAIgEgbQgEANgNAIQgNAJgWAAQgbAAgPgLgAN5FAQgJAIgDAPQgDAOAAAQQAAARADAOQADAOAJAIQAKAJATAAQATAAALgIQALgHAEgOQAEgOAAgTQAAgTgEgOQgEgOgLgIQgLgIgTAAQgUABgJAJgAF3HEQgSgEgMgMQgNgMgGgVQgHgVAAggQAAgoAMgYQAMgXAWgLQAVgKAfABQAOAAALABQALACAJADIAAAYIgUgFQgLgCgOAAQgXAAgQAIQgQAIgHASQgIASAAAfQAAAhAHASQAIASAOAIQAPAHAYAAQAOAAAMgDQALgCAMgEIAAAYQgJAEgNACQgMADgQAAQgWAAgRgFgAhiHBQgQgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAYAAQAYAAARAHQAQAIAIASQAJATAAAgQAAAggJASQgIATgQAHQgRAIgYAAQgYAAgRgIgAgcGtQAKgFAEgOQAEgOAAgXQAAgYgEgNQgFgOgKgGQgKgGgSAAQgSAAgKAGQgLAGgEAOQgFANABAYQAAAXAEAOQAFAOAKAFQALAGARAAQASAAALgGgAnAHJQgYAAgQgNQgQgNgIgZIgCgNIgBgLIAAgKQAAgZAKgSQALgTAUgNIAQgGQAIgCAIAAIACAAQAcAAASAdIAAgHIAAgBIABAAIAYAAIABAAIABABIAABWIABAeIAEAbIgCABIgYAAQgBAAgBgHIgDgTIgGAIIgGAIQgHAGgJADQgJADgKAAgAnTFBQgMAJgIASIgDAMIgBAMIAAAHQAAAQAGANQAHANAMAJIAKAEIALABIAGAAQAuAAAAg4IAAgLQAAgXgIgOQgIgOgQgEIgGgBIgEAAIgBAAQgSAAgNAJgAqFHBQgRgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAXAAQAVAAAMAGQANAGAHAKQAHAKACAMQADAMAAALIgBAJIgBAKIhuAHQAAASAFALQAFAMAMAFQALAGATAAQAOAAAOgDQANgDAKgFIAAAYQgFADgIACIgTADQgLACgMAAQgXAAgRgIgAp6E8QgKAHgEAMQgEAMgBAQIBWgGQABgNgDgKQgDgLgIgGQgJgHgRAAQgSAAgKAGgAyHHCQgMgHgFgMQgFgLAAgQIAAhwIAaAAIAABmQAAANACAJQADAIAHAFQAHAFAMAAQALAAAJgCQAJgCAHgHQAHgHAFgOIAAhuIAaAAIAACiIgWAAIgDgYQgFALgJAGQgIAFgKADQgJACgKAAQgVAAgMgHgA08HBQgRgHgJgTQgJgSAAggQAAggAJgTQAJgSARgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAgQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgAz3GtQAKgFAFgOQAEgOAAgXQAAgYgFgNQgEgOgLgGQgKgGgSAAQgSAAgKAGQgKAGgFAOQgEANAAAYQAAAXAFAOQAEAOAKAFQALAGARAAQATAAAKgGgA7hHBQgQgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAYAAQAYAAARAHQAQAIAJASQAJATAAAgQAAAggJASQgJATgQAHQgRAIgYAAQgYAAgRgIgA6bGtQAKgFAEgOQAEgOAAgXQAAgYgEgNQgFgOgKgGQgKgGgSAAQgSAAgKAGQgLAGgEAOQgFANABAYQAAAXAEAOQAFAOAKAFQALAGARAAQASAAALgGgA+oG+QgOgLgGgSQgGgTABgZQgBgXAGgTQAGgTAOgLQAPgMAbAAQAXAAAMAIQANAJAEAOIAAheIAaAAIAADkIgWAAIgEgbQgEANgNAIQgNAJgWAAQgbAAgPgLgA+XFAQgJAIgDAPQgDAOAAAQQAAARADAOQADAOAJAIQAKAJATAAQATAAALgIQALgHAEgOQAEgOAAgTQAAgTgEgOQgEgOgLgIQgLgIgTAAQgUABgJAJgEgjxAHJQgYAAgQgNQgQgNgIgZIgCgNIgBgLIAAgKQAAgZAKgSQALgTAUgNIAQgGQAIgCAIAAIACAAQAcAAASAdIAAgHIAAgBIABAAIAYAAIABAAIABABIAABWIABAeIAEAbIgCABIgYAAQgBAAgBgHIgDgTIgGAIIgGAIQgHAGgJADQgJADgKAAgEgkEAFBQgMAJgIASIgDAMIgBAMIAAAHQAAAQAGANQAHANAMAJIAKAEIALABIAGAAQAuAAAAg4IAAgLQAAgXgIgOQgIgOgQgEIgGgBIgEAAIgBAAQgSAAgNAJgEAlTAHEQgEgDAAgMQAAgMAEgEQAFgEAKABQAKgBAFAEQAEAEAAAMQAAAMgEADQgFAEgKAAQgKAAgFgEgAZUHHIgRgCIgNgDIAAgWIAOADIARADIAQABQATAAAJgGQAKgFAAgOQAAgKgDgFQgDgGgHgDQgIgDgPgEQgSgEgKgFQgKgGgEgJQgEgJAAgNQAAgUAPgMQAPgMAcAAQAMAAAMABQALACAGACIgCAWQgHgDgKgBQgKgCgLAAQgRgBgJAGQgJAFAAANQAAAIADAFQACAEAHADQAHADAMADQATAEALAGQALAFAFAKQAFAJAAAQQAAAYgQALQgQAMgeAAIgRgBgAMLG/QgJgIAAgSIAAjDIAaAAIAAC8QAAAMADAEQAEAEAIAAIAGAAIAGgBIAAAVIgHABIgKABQgSAAgJgJgEghVAHEQgKgEgFgMQgFgLAAgVIAAhbIgYAAIAAgVIAYAAIAAgnIAaAAIAAAnIAoAAIAAAVIgoAAIAABaQAAAMACAHQABAHAGACQAFADAJAAIAKAAIAIgCIAAAWIgJABIgJABQgSAAgLgEgAdZHGIg8AAIAAjQIA8AAQAWgBATAFQASAEAOALQANALAHAVQAHAUAAAhQAAAogMAWQgNAXgXAKQgVAJgcAAIgDAAgAc4GuIAgAAQAWAAAQgHQARgHAJgSQAJgRABgfQgBghgJgSQgKgSgQgGQgQgGgWAAIggAAgAWfHGIAAhnQABgMgDgJQgCgJgHgFQgHgEgNAAQgKAAgJACQgKACgHAHQgIAHgFAOIAABuIgaAAIAAiiIAaAAIAAAXQAFgKAJgGQAIgGAKgCQAKgCAKAAQAVAAAMAHQAMAGAFAMQAFAMgBAQIAABwgAQWHGIAAiiIAaAAIAAAdQAGgNAIgHQAIgHAKgDQAKgCAKAAIADAAIgBAXIgDAAQgLAAgKADQgKADgHAIQgIAIgFAOIAABqgAKxHGIAAiiIAaAAIAACigAJiHGIAAhnQAAgMgCgJQgDgJgGgFQgHgEgNAAQgKAAgKACQgJACgIAHQgIAHgEAOIAABuIgaAAIAAjkIAaAAIAABZQAFgKAIgGQAJgGAKgCQAKgCAKAAQAVAAAMAHQALAGAFAMQAFAMAAAQIAABwgACoHGIAAhnQAAgMgCgJQgDgJgHgFQgGgEgNAAQgKAAgKACQgJACgIAHQgIAHgEAOIAABuIgaAAIAAiiIAaAAIAAAXQAFgKAIgGQAJgGAKgCQAKgCAKAAQAVAAAMAHQALAGAFAMQAFAMAAAQIAABwgAk5HGIAAiiIAaAAIAAAdQAFgNAIgHQAJgHAKgDQAKgCAJAAIADAAIAAAXIgEAAQgLAAgJADQgKADgIAIQgIAIgEAOIAABqgAsNHGIgoiFIgCAAIgoCFIggAAIgsiiIAaAAIAiCIIACAAIAoiIIAeAAIAqCIIACAAIAiiIIAZAAIgtCigEglxAHGIAAhnQAAgMgCgJQgDgJgGgFQgHgEgNAAQgKAAgKACQgJACgIAHQgIAHgEAOIAABuIgaAAIAAjkIAaAAIAABZQAFgKAIgGQAJgGAKgCQAKgCAKAAQAVAAAMAHQALAGAFAMQAFAMAAAQIAABwgEgpSAHGIgqiaIgCAAIgrCaIgiAAIgxjQIAcAAIAnCwIACAAIAqiYIAhAAIAqCYIACAAIAmiwIAcAAIgyDQgEAlWAGKIAAgNQAAgLAFgKQAGgKAQgNIAOgMQAFgGABgGQACgGAAgJQAAgMgDgHQgEgHgJgCQgIgDgPAAIgWACQgMACgJADIAAgYIATgFQALgCAQAAQAVAAAPAFQAOAEAHAMQAHALAAAVQAAAQgEAKQgDAJgHAHQgHAHgJAHQgJAGgFAFQgFAFgCAFQgCAFAAAHIAAAJgAXnEvIAIgaQAEgNACgNQADgOAAgLIAZAAQAAALgDANQgDAOgGAOQgFANgGAMgAKzEDQgEgDAAgJQAAgKAEgDQADgDAJAAQAIAAADADQAEADAAAKQAAAJgEADQgDADgIAAQgJAAgDgDgAJ2jiIgTgDIAAgWIAUADIAUABQAbAAANgMQANgMAAgcIAAgQQgFAOgMAIQgMAIgXAAQgbAAgPgKQgPgKgFgTQgGgSAAgZQAAgXAGgTQAFgSAPgLQAPgLAbgBQAQAAAKAFQALAEAGAHQAGAIADAKIAAgfIAaAAIAACXQAAAigTASQgUATgpAAIgUgBgAJymjQgJAIgDAOQgCAOAAAQQAAARADAOQADANAJAIQAJAIATABQATAAALgIQALgHAFgNQAEgOAAgTQAAgTgEgOQgFgNgLgIQgLgHgTAAQgTAAgKAJgA8cj3QAOAAAJgEQAKgEAFgJQAGgIAEgNIhBiiIAcAAIAyCHIABAAIAviHIAaAAIg6CdQgHAUgJAPQgJAOgOAIQgOAIgYAAgEgjhgDhIAAjeIAaAAIAAAdQAFgOAMgJQANgJAXAAQAbAAAOALQAPALAGASQAFATAAAZQAAAXgFATQgGATgPALQgOAMgbAAQgXAAgNgIQgMgJgFgOIAABYgEgi0gGlQgLAIgEAOQgFAOAAATQAAATAFAOQAEAOALAIQALAHATAAQAUAAAJgJQAJgJADgOQADgOAAgQQAAgRgDgOQgDgOgKgJQgJgIgTAAQgTAAgLAHgAXvkaQgYAAgQgMQgQgNgIgZIgDgNIAAgMIAAgJQAAgZAKgTQAKgTAVgNIAQgFQAIgCAHAAIADAAQAbAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABWIABAeIAEAbIgBAAIgZAAQgBAAgBgGIgDgTIgFAIIgGAHQgIAGgJADQgIADgLAAgAXcmhQgNAJgHASIgDAMIgBAMIAAAHQAAAQAGAMQAGANAMAKIALAEIALABIAFAAQAuAAAAg5IAAgKQAAgXgIgOQgIgOgQgFIgFAAIgEAAIgBAAQgSAAgNAJgAUQklQgPgKgFgTQgGgTAAgZQAAgWAGgTQAFgTAPgMQAPgLAagBQAYAAAMAJQAMAIAFAPIAAhfIAaAAIAADkIgWAAIgEgaQgFANgNAIQgNAIgWAAQgaAAgPgLgAUgmjQgJAJgDAOQgCAOAAAQQAAARADAOQADAOAJAJQAJAIATAAQATAAALgHQALgIAFgOQAEgNAAgUQAAgTgEgNQgFgOgLgIQgLgIgTAAQgTAAgKAJgAMpkhQgQgIgJgSQgJgTAAggQAAggAJgSQAIgTARgHQAQgIAYAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBALIhuAHQAAARAFAMQAFALALAGQALAFAUAAQAOAAANgDQAOgCAKgFIAAAYQgFACgJACIgTAEQgKABgMAAQgYAAgRgHgAM0mmQgKAGgEAMQgEAMAAARIBWgHQAAgMgDgLQgCgKgJgHQgIgGgRAAQgTAAgKAGgAlmkhQgMgGgEgMQgFgMAAgQIAAhwIAaAAIAABnQgBAMADAJQACAJAHAFQAHAEANAAQAKABAJgDQAJgCAIgHQAHgHAFgOIAAhuIAZAAIAACiIgVAAIgEgXQgFAKgIAGQgIAGgKACQgKACgKAAQgVAAgMgHgAr6kaQgYAAgQgMQgQgNgIgZIgCgNIgBgMIAAgJQAAgZAKgTQALgTAUgNIAQgFQAIgCAIAAIACAAQAcAAASAdIAAgHIAAgBIABAAIAYAAIABAAIABABIAABWIABAeIAEAbIgCAAIgYAAQgBAAgBgGIgDgTIgGAIIgGAHQgHAGgJADQgJADgKAAgAsNmhQgMAJgIASIgDAMIgBAMIAAAHQAAAQAGAMQAHANAMAKIAKAEIALABIAGAAQAuAAAAg5IAAgKQAAgXgIgOQgIgOgQgFIgGAAIgEAAIgBAAQgSAAgNAJgAu+kiQgNgJgEgOIgDAcIgXAAIAAjkIAaAAIAABfQAFgOAMgJQAMgJAXAAQAbAAAPALQAOALAGASQAFATAAAZQAAAXgFATQgGATgOALQgPAMgbAAQgXAAgMgIgAu8mlQgLAIgFAOQgFAOABATQgBATAFAOQAFAOALAIQALAHATAAQATAAAJgJQAKgJADgOQADgOgBgQQABgRgEgOQgDgOgJgJQgJgIgTAAQgTAAgLAHgAzvkhQgQgIgJgSQgJgTAAggQAAggAJgSQAJgTAQgHQARgIAYAAQAYAAARAIQAQAHAJATQAJASAAAgQAAAggJATQgJASgQAIQgRAHgYAAQgYAAgRgHgAypk1QAKgGAEgOQAEgNAAgYQAAgXgEgOQgFgOgKgFQgKgGgSAAQgSAAgKAGQgLAFgEAOQgFAOABAXQAAAYAEANQAFAOAKAGQALAGARgBQASABALgGgA2okhQgRgIgJgSQgJgTAAggQAAggAJgSQAJgTARgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAgQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgA1jk1QAKgGAFgOQAEgNAAgYQAAgXgFgOQgEgOgLgFQgKgGgSAAQgSAAgKAGQgKAFgFAOQgEAOAAAXQAAAYAFANQAEAOAKAGQALAGARgBQATABAKgGgA+bkaQgYAAgQgMQgQgNgIgZIgDgNIAAgMIAAgJQAAgZAKgTQAKgTAVgNIAQgFQAIgCAHAAIADAAQAbAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABWIABAeIAEAbIgBAAIgZAAQgBAAgBgGIgDgTIgFAIIgGAHQgIAGgJADQgIADgLAAgA+umhQgNAJgHASIgDAMIgBAMIAAAHQAAAQAGAMQAGANAMAKIALAEIALABIAFAAQAuAAAAg5IAAgKQAAgXgIgOQgIgOgQgFIgFAAIgEAAIgBAAQgSAAgNAJgEgnCgEhQgRgIgJgSQgJgTAAggQAAggAJgSQAJgTAQgHQARgIAXAAQAVAAAMAGQANAGAHAKQAHAKACAMQADAMAAAMIgBAIIgBALIhuAHQAAARAFAMQAFALAMAGQALAFATAAQAOAAAOgDQANgCAKgFIAAAYQgFACgIACIgTAEQgLABgMAAQgXAAgRgHgEgm3gGmQgKAGgEAMQgEAMgBARIBWgHQABgMgDgLQgDgKgIgHQgJgGgRAAQgSAAgKAGgAeOkeQgEgEAAgMQAAgMAEgDQAEgEALAAQAKAAAEAEQAFADAAAMQAAAMgFAEQgEADgKAAQgLAAgEgDgAQ3kcIgRgBIgNgDIAAgWIAOADIARACIAQABQATAAAJgFQAKgGAAgOQAAgJgDgGQgDgFgHgDQgIgEgPgDQgSgEgKgGQgKgGgEgIQgEgJAAgOQAAgUAPgMQAPgLAcgBQAMAAAMACQALABAGADIgCAWQgHgDgKgCQgKgCgLAAQgRAAgJAFQgJAFAAAOQAAAIADAEQACAFAHADQAHADAMACQATAEALAGQALAGAFAJQAFAKAAAPQAAAYgQAMQgQALgeAAIgRgBgAPTkfQgKgEgFgLQgFgLAAgVIAAhbIgYAAIAAgWIAYAAIAAgmIAaAAIAAAmIAoAAIAAAWIgoAAIAABZQAAANACAHQABAGAGADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgLgEgAG1kfQgLgEgFgLQgEgLAAgVIAAhbIgYAAIAAgWIAYAAIAAgmIAaAAIAAAmIAoAAIAAAWIgoAAIAABZQgBANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEgAC1kjQgJgIAAgSIAAjEIAaAAIAAC9QAAAMADAEQAEAEAIgBIAGAAIAGgBIAAAVIgHACIgKAAQgSAAgJgIgAAMkfQgLgEgEgLQgEgLAAgVIAAhbIgYAAIAAgWIAYAAIAAgmIAZAAIAAAmIAoAAIAAAWIgoAAIAABZQgBANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEgAoUkjQgJgIAAgSIAAjEIAaAAIAAC9QAAAMADAEQAEAEAIgBIAGAAIAGgBIAAAVIgHACIgKAAQgSAAgJgIgApqkjQgJgIAAgSIAAjEIAaAAIAAC9QAAAMADAEQAEAEAIgBIAGAAIAGgBIAAAVIgHACIgKAAQgSAAgJgIgAw5kfQgKgEgFgLQgFgLAAgVIAAhbIgYAAIAAgWIAYAAIAAgmIAaAAIAAAmIAoAAIAAAWIgoAAIAABZQAAANACAHQABAGAGADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgLgEgEggZgEjQgJgIAAgSIAAjEIAaAAIAAC9QAAAMADAEQAEAEAIgBIAGAAIAGgBIAAAVIgHACIgKAAQgSAAgJgIgAdFkdIg7hLIgJAAIAABLIgaAAIAAjkIAaAAIAACFIAJAAIA4hDIAgAAIhEBMIBIBWgAZ1kdIAAiiIAaAAIAAAeQAGgOAIgHQAIgHAKgCQAKgDAKAAIADAAIgBAYIgDAAQgLgBgKAEQgKACgHAIQgIAIgFAOIAABqgAFPkdIAAiiIAaAAIAACigABbkdIAAiiIAaAAIAACigAhYkdIAAhmQAAgNgCgJQgDgIgHgFQgGgFgNAAQgKAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAiiIAaAAIAAAXQAFgKAIgGQAJgFAKgDQAKgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwgA4kkdIAAiNIgbAAIAAgVIAbAAIAAgBQAAgcAHgOQAGgOAMgFQANgFAQAAIAJAAIAJACIAAAUIgIgBIgKAAQgLAAgGAEQgGAEgDAKQgCAKgBASIAmAAIAAAVIgmAAIAACNgEgpSgEdIgqiaIgCAAIgrCaIgiAAIgxjQIAcAAIAnCxIACAAIAqiZIAhAAIAqCZIACAAIAmixIAcAAIgyDQgAeTlZIgFiUIAeAAIgFCUgAFQnfQgDgDAAgKQAAgKADgCQAEgDAIAAQAIAAAEADQAEACAAAKQAAAKgEADQgEADgIAAQgIAAgEgDgABdnfQgEgDAAgKQAAgKAEgCQADgDAJAAQAIAAADADQAEACAAAKQAAAKgEADQgDADgIAAQgJAAgDgDgAGRrSQAOAAAJgFQAKgEAFgIQAGgJAEgNIhBihIAcAAIAyCGIABAAIAviGIAaAAIg6CcQgHAVgJAOQgJAPgOAIQgOAIgYAAgA0Aq8IAAjeIAaAAIAAAdQAFgPAMgIQANgJAXAAQAbAAAOALQAPAKAGATQAFATAAAZQAAAWgFATQgGATgPAMQgOALgbABQgXAAgNgJQgMgIgFgPIAABZgAzTuAQgLAHgEAOQgFAOAAAUQAAASAFAOQAEAOALAIQALAIATAAQAUAAAJgJQAJgJADgOQADgOAAgQQAAgSgDgOQgDgOgKgIQgJgJgTAAQgTAAgLAIgEgolgK9IgTgDIAAgWIAUADIAUABQAbAAANgMQANgNAAgbIAAgRQgFAPgMAIQgMAIgXAAQgbAAgPgLQgPgKgFgSQgGgTAAgZQAAgWAGgTQAFgTAPgLQAPgLAbAAQAQAAAKAEQALAEAGAIQAGAHADAKIAAgeIAaAAIAACWQAAAigTATQgUATgpAAIgUgBgEgopgN/QgJAJgDANQgCAOAAAQQAAARADAOQADAOAJAIQAJAIATAAQATAAALgHQALgHAFgOQAEgNAAgUQAAgSgEgOQgFgOgLgHQgLgIgTAAQgTABgKAIgEAm0gMAQgOgLgGgSQgGgTABgZQgBgXAGgTQAGgTAOgLQAPgMAbAAQAXAAAMAIQANAJAEAOIAAheIAaAAIAADkIgWAAIgEgbQgEANgNAIQgNAJgWAAQgbAAgPgLgEAnFgN+QgJAIgDAPQgDAOAAAQQAAARADAOQADAOAJAIQAKAJATAAQATAAALgIQALgHAEgOQAEgOAAgTQAAgTgEgOQgEgOgLgIQgLgIgTAAQgUABgJAJgEAkdgL1QgYAAgQgNQgQgNgIgZIgCgNIgBgLIAAgKQAAgZAKgSQALgTAUgNIAQgGQAIgCAIAAIACAAQAcAAASAdIAAgHIAAgBIABAAIAYAAIABAAIABABIAABWIABAeIAEAbIgCABIgYAAQgBAAgBgHIgDgTIgGAIIgGAIQgHAGgJADQgJADgKAAgEAkKgN9QgMAJgIASIgDAMIgBAMIAAAHQAAAQAGANQAHANAMAJIAKAEIALABIAGAAQAuAAAAg4IAAgLQAAgXgIgOQgIgOgQgEIgGgBIgEAAIgBAAQgSAAgNAJgEAg+gMAQgOgLgGgSQgGgTABgZQgBgXAGgTQAGgTAOgLQAPgMAbAAQAXAAAMAIQANAJAEAOIAAheIAaAAIAADkIgWAAIgEgbQgEANgNAIQgNAJgWAAQgbAAgPgLgEAhPgN+QgJAIgDAPQgDAOAAAQQAAARADAOQADAOAJAIQAKAJATAAQATAAALgIQALgHAEgOQAEgOAAgTQAAgTgEgOQgEgOgLgIQgLgIgTAAQgUABgJAJgAczsAQgPgLgFgSQgGgTAAgZQAAgXAGgTQAFgTAPgLQAPgMAaAAQAYAAAMAIQAMAJAFAOIAAheIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgWAAQgaAAgPgLgAdDt+QgJAIgDAPQgCAOAAAQQAAARADAOQADAOAJAIQAJAJATAAQATAAALgIQALgHAFgOQAEgOAAgTQAAgTgEgOQgFgOgLgIQgLgIgTAAQgTABgKAJgAXir1QgYAAgQgNQgQgNgIgZIgCgNIgBgLIAAgKQAAgZAKgSQALgTAUgNIAQgGQAIgCAIAAIACAAQAcAAASAdIAAgHIAAgBIABAAIAYAAIABAAIABABIAABWIABAeIAEAbIgCABIgYAAQgBAAgBgHIgDgTIgGAIIgGAIQgHAGgJADQgJADgKAAgAXPt9QgMAJgIASIgDAMIgBAMIAAAHQAAAQAGANQAHANAMAJIAKAEIALABIAGAAQAuAAAAg4IAAgLQAAgXgIgOQgIgOgQgEIgGgBIgEAAIgBAAQgSAAgNAJgAOsr8QgMgHgEgMQgFgLAAgQIAAhwIAaAAIAABmQgBANADAJQACAIAHAFQAHAFANAAQAKAAAJgCQAJgCAIgHQAHgHAFgOIAAhuIAZAAIAACiIgVAAIgEgYQgFALgIAGQgIAFgKADQgKACgKAAQgVAAgMgHgAwQr1QgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgKQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAbAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABWIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgLAAgAwjt9QgNAJgHASIgDAMIgBAMIAAAHQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAuAAAAg4IAAgLQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgSAAgNAJgA3hr9QgRgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAXAAQAVAAAMAGQANAGAHAKQAHAKACAMQADAMAAALIgBAJIgBAKIhuAHQAAASAFALQAFAMAMAFQALAGATAAQAOAAAOgDQANgDAKgFIAAAYQgFADgIACIgTADQgLACgMAAQgXAAgRgIgA3WuCQgKAHgEAMQgEAMgBAQIBWgGQABgNgDgKQgDgLgIgGQgJgHgRAAQgSAAgKAGgEggGgL9QgRgHgJgTQgJgSAAggQAAggAJgTQAJgSARgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAgQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgA/BsRQAKgFAFgOQAEgOAAgXQAAgYgFgNQgEgOgLgGQgKgGgSAAQgSAAgKAGQgKAGgFAOQgEANAAAYQAAAXAFAOQAEAOAKAFQALAGARAAQATAAAKgGgEglygL9QgQgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAYAAQAYAAARAHQAQAIAJASQAJATAAAgQAAAggJASQgJATgQAHQgRAIgYAAQgYAAgRgIgEgksgMRQAKgFAEgOQAEgOAAgXQAAgYgEgNQgFgOgKgGQgKgGgSAAQgSAAgKAGQgLAGgEAOQgFANABAYQAAAXAEAOQAFAOAKAFQALAGARAAQASAAALgGgEAppgL4QgEgBgCgEQgCgEAAgJQAAgLAFgEQAEgEALABQAKgBAEAEQAFAEAAALQAAAJgCAEQgCAEgEABQgFACgGAAQgIAAgEgCgAjRr6QgLgEgFgMQgEgLAAgVIAAhbIgYAAIAAgVIAYAAIAAgnIAaAAIAAAnIAoAAIAAAVIgoAAIAABaQgBAMACAHQACAHAFACQAFADAKAAIAJAAIAJgCIAAAWIgJABIgKABQgRAAgLgEgA8Dr6QgLgEgFgMQgEgLAAgVIAAhbIgYAAIAAgVIAYAAIAAgnIAaAAIAAAnIAoAAIAAAVIgoAAIAABaQgBAMACAHQACAHAFACQAFADAKAAIAJAAIAJgCIAAAWIgJABIgKABQgRAAgLgEgEghvgL6QgKgEgFgMQgFgLAAgVIAAhbIgYAAIAAgVIAYAAIAAgnIAaAAIAAAnIAoAAIAAAVIgoAAIAABaQAAAMACAHQABAHAGACQAFADAJAAIAKAAIAIgCIAAAWIgJABIgJABQgSAAgLgEgAbTr4IAAhnQAAgMgCgJQgDgJgHgFQgGgEgNAAQgKAAgKACQgJACgIAHQgIAHgEAOIAABuIgaAAIAAiiIAaAAIAAAXQAFgKAIgGQAJgGAKgCQAKgCAKAAQAVAAAMAHQALAGAFAMQAFAMAAAQIAABwgAUVr4IAAhnQABgTgHgKQgHgKgSAAQgJAAgIACQgJACgGAHQgGAGgEALIAAByIgaAAIAAhnQABgTgHgKQgGgKgRAAQgKAAgIACQgJACgGAHQgGAGgEAMIAABxIgaAAIAAiiIAaAAIAAAVQAHgOANgFQAMgFAPAAQATAAALAHQAMAHAFAMQAFgKAIgGQAIgGAJgCQAKgCAKAAQATAAAMAHQALAGAGAMQAFAMAAAQIAABwgANJr4IAAhnQAAgTgGgKQgHgKgSAAQgKAAgIACQgIACgGAHQgHAGgDALIAAByIgaAAIAAhnQAAgTgGgKQgGgKgSAAQgKAAgIACQgIACgGAHQgHAGgEAMIAABxIgaAAIAAiiIAaAAIAAAVQAIgOAMgFQAMgFAPAAQATAAAMAHQALAHAFAMQAFgKAIgGQAIgGAKgCQAKgCAKAAQASAAAMAHQAMAGAFAMQAGAMAAAQIAABwgAFJr4IAAhnQABgTgHgKQgHgKgSAAQgJAAgIACQgJACgGAHQgGAGgEALIAAByIgaAAIAAhnQABgTgHgKQgGgKgRAAQgKAAgIACQgJACgGAHQgGAGgEAMIAABxIgaAAIAAiiIAaAAIAAAVQAHgOANgFQAMgFAPAAQATAAALAHQAMAHAFAMQAFgKAIgGQAIgGAJgCQAKgCAKAAQATAAAMAHQALAGAGAMQAFAMAAAQIAABwgAgXr4IAAhnQAAgMgDgJQgCgJgHgFQgHgEgNAAQgKAAgJACQgKACgHAHQgIAHgFAOIAABuIgaAAIAAjkIAaAAIAABZQAFgKAJgGQAIgGAKgCQAKgCAKAAQAVAAAMAHQAMAGAFAMQAEAMgBAQIAABwgAk3r4IAAiiIAaAAIAACigAmmr4IgoiFIgCAAIgoCFIggAAIgsiiIAaAAIAiCIIACAAIAoiIIAeAAIAqCIIACAAIAiiIIAZAAIgtCigAq6r4Ig7hMIgJAAIAABMIgaAAIAAjkIAaAAIAACEIAJAAIA4hCIAgAAIhEBLIBIBXgAuKr4IAAiiIAaAAIAAAdQAGgNAIgHQAIgHAKgDQAKgCAKAAIADAAIgBAXIgDAAQgLAAgKADQgKADgHAIQgIAIgFAOIAABqgA5Jr4IAAhnQAAgMgDgJQgCgJgHgFQgHgEgNAAQgKAAgJACQgKACgHAHQgIAHgFAOIAABuIgaAAIAAjkIAaAAIAABZQAFgKAJgGQAIgGAKgCQAKgCAKAAQAVAAAMAHQAMAGAFAMQAFAMgBAQIAABwgEgrogL4IAAjQIAbAAIAADQgAk2u7QgDgDAAgJQAAgKADgDQAEgDAIAAQAIAAAEADQAEADAAAKQAAAJgEADQgEADgIAAQgIAAgEgDgAR+yYIAAjeIAaAAIAAAdQAFgOAMgJQAMgJAXAAQAbAAAPALQAOALAGASQAFATAAAZQAAAXgFATQgGATgOALQgPAMgbAAQgXAAgMgIQgNgJgEgOIAABYgASr1cQgLAIgFAOQgFAOABATQgBATAFAOQAFAOALAIQALAHATAAQATAAAJgJQAKgJADgOQADgOgBgQQABgRgEgOQgDgOgJgJQgJgIgTAAQgTAAgLAHgA6QyZIgSgDIAAgWIATADIAUABQAbAAANgMQANgMAAgcIAAgQQgEAOgNAIQgMAIgXAAQgbAAgOgKQgPgKgGgTQgGgSABgZQgBgXAGgTQAGgSAPgLQAOgLAbgBQAQAAALAFQAKAEAGAHQAGAIADAKIAAgfIAaAAIAACXQABAigUASQgTATgpAAIgVgBgA6T1aQgJAIgDAOQgDAOAAAQQAAARADAOQADANAJAIQAKAIATABQATAAALgIQALgHAEgNQAEgOAAgTQAAgTgEgOQgEgNgLgIQgLgHgTAAQgUAAgJAJgEgkYgSuQAOAAAJgEQAKgEAFgJQAGgIAEgNIhBiiIAcAAIAyCHIABAAIAviHIAaAAIg6CdQgHAUgJAPQgJAOgOAIQgOAIgYAAgAVtzRQgYAAgQgMQgQgNgIgZIgCgNIgBgMIAAgJQAAgZAKgTQALgTAUgNIAQgFQAIgCAIAAIACAAQAcAAASAdIAAgHIAAgBIABAAIAYAAIABAAIABABIAABWIABAeIAEAbIgCAAIgYAAQgBAAgBgGIgDgTIgGAIIgGAHQgHAGgJADQgJADgKAAgAVa1YQgMAJgIASIgDAMIgBAMIAAAHQAAAQAGAMQAHANAMAKIAKAEIALABIAGAAQAuAAAAg5IAAgKQAAgXgIgOQgIgOgQgFIgGAAIgEAAIgBAAQgSAAgNAJgAOczYQgQgIgJgSQgJgTAAggQAAggAJgSQAIgTARgHQAQgIAYAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBALIhuAHQAAARAFAMQAFALALAGQALAFAUAAQAOAAANgDQAOgCAKgFIAAAYQgFACgJACIgTAEQgKABgMAAQgYAAgRgHgAOn1dQgKAGgEAMQgEAMAAARIBWgHQAAgMgDgLQgCgKgJgHQgIgGgRAAQgTAAgKAGgAEGzYQgRgIgJgSQgJgTAAggQAAggAJgSQAJgTARgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAgQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAFLzsQAKgGAFgOQAEgNAAgYQAAgXgFgOQgEgOgLgFQgKgGgSAAQgSAAgKAGQgKAFgFAOQgEAOAAAXQAAAYAFANQAEAOAKAGQALAGARgBQATABAKgGgAAAzYQgQgIgJgSQgJgTAAggQAAggAJgSQAJgTAQgHQAQgIAYAAQAYAAARAIQAQAHAJATQAJASAAAgQAAAggJATQgJASgQAIQgRAHgYAAQgYAAgQgHgABFzsQAKgGAEgOQAEgNAAgYQAAgXgEgOQgFgOgKgFQgKgGgSAAQgSAAgKAGQgLAFgDAOQgFAOABAXQAAAYAEANQAEAOAKAGQALAGARgBQASABALgGgAi5zYQgRgIgJgSQgJgTAAggQAAggAJgSQAJgTARgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAgQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgAh0zsQAKgGAFgOQAEgNAAgYQAAgXgFgOQgEgOgLgFQgKgGgSAAQgSAAgKAGQgKAFgFAOQgEAOAAAXQAAAYAFANQAEAOAKAGQALAGARgBQATABAKgGgApMzYQgQgIgJgSQgJgTAAggQAAggAJgSQAIgTARgHQAQgIAYAAQAUAAANAGQANAGAHAKQAGAKADAMQACAMAAAMIAAAIIgBALIhuAHQAAARAFAMQAFALALAGQALAFAUAAQAOAAANgDQAOgCAKgFIAAAYQgFACgJACIgTAEQgKABgMAAQgYAAgRgHgApB1dQgKAGgEAMQgEAMAAARIBWgHQAAgMgDgLQgCgKgJgHQgIgGgRAAQgTAAgKAGgAxxzYQgQgIgJgSQgJgTAAggQAAggAJgSQAJgTAQgHQARgIAYAAQAYAAARAIQAQAHAJATQAJASAAAgQAAAggJATQgJASgQAIQgRAHgYAAQgYAAgRgHgAwrzsQAKgGAEgOQAEgNAAgYQAAgXgEgOQgFgOgKgFQgKgGgSAAQgSAAgKAGQgLAFgEAOQgFAOABAXQAAAYAEANQAFAOAKAGQALAGARgBQASABALgGgA3czYQgRgIgJgSQgJgTAAggQAAggAJgSQAJgTARgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAgQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgA2XzsQAKgGAFgOQAEgNAAgYQAAgXgFgOQgEgOgLgFQgKgGgSAAQgSAAgKAGQgKAFgFAOQgEAOAAAXQAAAYAFANQAEAOAKAGQALAGARgBQATABAKgGgA+lzYQgMgGgEgMQgFgMAAgQIAAhwIAaAAIAABnQgBAMADAJQACAJAHAFQAHAEANAAQAKABAJgDQAJgCAIgHQAHgHAFgOIAAhuIAZAAIAACiIgVAAIgEgXQgFAKgIAGQgIAGgKACQgKACgKAAQgVAAgMgHgEghagTYQgQgIgJgSQgJgTAAggQAAggAJgSQAJgTAQgHQARgIAYAAQAYAAARAIQAQAHAJATQAJASAAAgQAAAggJATQgJASgQAIQgRAHgYAAQgYAAgRgHgEggUgTsQAKgGAEgOQAEgNAAgYQAAgXgEgOQgFgOgKgFQgKgGgSAAQgSAAgKAGQgLAFgEAOQgFAOABAXQAAAYAEANQAFAOAKAGQALAGARgBQASABALgGgEgn+gTYQgRgIgJgSQgJgTAAggQAAggAJgSQAJgTARgHQARgIAXAAQAYAAARAIQARAHAIATQAJASAAAgQAAAggJATQgIASgRAIQgRAHgYAAQgXAAgRgHgEgm5gTsQAKgGAFgOQAEgNAAgYQAAgXgFgOQgEgOgLgFQgKgGgSAAQgSAAgKAGQgKAFgFAOQgEAOAAAXQAAAYAFANQAEAOAKAGQALAGARgBQATABAKgGgAcRzVQgFgEAAgMQAAgMAFgDQAEgEAKAAQALAAAEAEQAFADAAAMQAAAMgFAEQgEADgLAAQgKAAgEgDgAJ6zWQgKgEgFgLQgFgLAAgVIAAhbIgYAAIAAgWIAYAAIAAgmIAaAAIAAAmIAoAAIAAAWIgoAAIAABZQAAANACAHQABAGAGADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgLgEgAtuzWQgKgEgFgLQgFgLAAgVIAAhbIgYAAIAAgWIAYAAIAAgmIAaAAIAAAmIAoAAIAAAWIgoAAIAABZQAAANACAHQABAGAGADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgLgEgAzZzWQgLgEgFgLQgEgLAAgVIAAhbIgYAAIAAgWIAYAAIAAgmIAaAAIAAAmIAoAAIAAAWIgoAAIAABZQgBANACAHQACAGAFADQAFADAKgBIAJAAIAJgBIAAAWIgJABIgKAAQgRAAgLgEgEgqsgTUIg8AAIAAjQIA8AAQAWAAATAEQASAEAOAMQANALAHAUQAHAVAAAgQAAAogMAXQgNAXgXAJQgVAJgcAAIgDAAgEgrNgTrIAgAAQAWAAAQgHQARgIAJgRQAJgSABgfQgBghgJgRQgKgSgQgGQgQgHgWAAIggAAgAbDzUIg7hLIgJAAIAABLIgaAAIAAjkIAaAAIAACFIAKAAIA4hDIAgAAIhEBMIBHBWgAX0zUIAAiiIAaAAIAAAeQAFgOAIgHQAJgHAKgCQAKgDAJAAIADAAIAAAYIgEAAQgLgBgJAEQgKACgIAIQgIAIgEAOIAABqgAM0zUIAAhmQAAgNgCgJQgDgIgGgFQgHgFgNAAQgKAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAjkIAaAAIAABZQAFgKAIgGQAJgFAKgDQAKgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwgAGmzUIAAiiIAaAAIAAAeQAGgOAIgHQAIgHAKgCQAKgDAKAAIADAAIgBAYIgDAAQgLgBgKAEQgKACgHAIQgIAIgFAOIAABqgAl4zUIAAgVIBbh2IAAgCIhUAAIAAgVIB0AAIAAAUIhcB2IAAACIBhAAIAAAWgAq0zUIAAhmQAAgNgCgJQgDgIgGgFQgHgFgNAAQgKAAgKACQgJADgIAHQgIAHgEAOIAABtIgaAAIAAjkIAaAAIAABZQAFgKAIgGQAJgFAKgDQAKgCAKAAQAVAAAMAHQALAHAFAMQAFAMAAAPIAABwgAcT0QIAAgNQAAgLAGgKQAFgKAQgMIAOgNQAFgGACgGQACgGAAgIQAAgNgEgHQgEgGgIgDQgIgDgPABIgXABQgMACgJADIAAgYIATgEQAMgCAPAAQAWgBAOAFQAOAFAHALQAIAMAAAUQgBAQgDAKQgEAKgHAHQgGAGgKAHQgJAGgFAFQgFAGgCAFQgCAFAAAHIAAAIgAdH6JQAOAAAJgFQAKgEAFgIQAGgJAEgNIhBihIAcAAIAyCGIABAAIAviGIAaAAIg6CcQgHAVgJAOQgJAPgOAIQgOAIgYAAgA366JQAOAAAJgFQAJgEAGgIQAGgJAEgNIhBihIAcAAIAxCGIACAAIAviGIAaAAIg6CcQgIAVgIAOQgJAPgOAIQgPAIgXAAgAbI6sQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgKQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAbAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABWIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgLAAgAa180QgNAJgHASIgDAMIgBAMIAAAHQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAuAAAAg4IAAgLQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgSAAgNAJgANK60QgRgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAXAAQAVAAAMAGQANAGAHAKQAHAKACAMQADAMAAALIgBAJIgBAKIhuAHQAAASAFALQAFAMAMAFQALAGATAAQAOAAAOgDQANgDAKgFIAAAYQgFADgIACIgTADQgLACgMAAQgXAAgRgIgANV85QgKAHgEAMQgEAMgBAQIBWgGQABgNgDgKQgDgLgIgGQgJgHgRAAQgSAAgKAGgAIR63QgOgLgGgSQgGgTABgZQgBgXAGgTQAGgTAOgLQAPgMAbAAQAXAAAMAIQANAJAEAOIAAheIAaAAIAADkIgWAAIgEgbQgEANgNAIQgNAJgWAAQgbAAgPgLgAIi81QgJAIgDAPQgDAOAAAQQAAARADAOQADAOAJAIQAKAJATAAQATAAALgIQALgHAEgOQAEgOAAgTQAAgTgEgOQgEgOgLgIQgLgIgTAAQgUABgJAJgAAg6xQgSgEgMgMQgMgMgGgVQgHgVAAggQAAgoAMgYQALgXAWgLQAVgKAfABQAOAAALABQALACAJADIAAAYIgUgFQgLgCgOAAQgXAAgQAIQgQAIgHASQgIASAAAfQAAAhAHASQAIASAOAIQAPAHAYAAQAOAAAMgDQALgCAMgEIAAAYQgJAEgNACQgMADgQAAQgWAAgRgFgAm560QgQgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAYAAQAYAAARAHQAQAIAJASQAJATAAAgQAAAggJASQgJATgQAHQgRAIgYAAQgYAAgRgIgAlz7IQAKgFAEgOQAEgOAAgXQAAgYgEgNQgFgOgKgGQgKgGgSAAQgSAAgKAGQgLAGgEAOQgFANABAYQAAAXAEAOQAFAOAKAFQALAGARAAQASAAALgGgAq/60QgRgHgJgTQgJgSAAggQAAggAJgTQAJgSARgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAgQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgAp67IQAKgFAFgOQAEgOAAgXQAAgYgFgNQgEgOgLgGQgKgGgSAAQgSAAgKAGQgKAGgFAOQgEANAAAYQAAAXAFAOQAEAOAKAFQALAGARAAQATAAAKgGgAuG63QgPgLgFgSQgGgTAAgZQAAgXAGgTQAFgTAPgLQAPgMAaAAQAYAAAMAIQAMAJAFAOIAAheIAaAAIAADkIgWAAIgEgbQgFANgNAIQgNAJgWAAQgaAAgPgLgAt281QgJAIgDAPQgCAOAAAQQAAARADAOQADAOAJAIQAJAJATAAQATAAALgIQALgHAFgOQAEgOAAgTQAAgTgEgOQgFgOgLgIQgLgIgTAAQgTABgKAJgAyH6zQgMgHgFgMQgFgLAAgQIAAhwIAaAAIAABmQAAANACAJQADAIAHAFQAHAFAMAAQALAAAJgCQAJgCAHgHQAHgHAFgOIAAhuIAaAAIAACiIgWAAIgDgYQgFALgJAGQgIAFgKADQgJACgKAAQgVAAgMgHgA0860QgRgHgJgTQgJgSAAggQAAggAJgTQAJgSARgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAgQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgAz37IQAKgFAFgOQAEgOAAgXQAAgYgFgNQgEgOgLgGQgKgGgSAAQgSAAgKAGQgKAGgFAOQgEANAAAYQAAAXAFAOQAEAOAKAFQALAGARAAQATAAAKgGgA7h60QgQgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAYAAQAYAAARAHQAQAIAJASQAJATAAAgQAAAggJASQgJATgQAHQgRAIgYAAQgYAAgRgIgA6b7IQAKgFAEgOQAEgOAAgXQAAgYgEgNQgFgOgKgGQgKgGgSAAQgSAAgKAGQgLAGgEAOQgFANABAYQAAAXAEAOQAFAOAKAFQALAGARAAQASAAALgGgA+o63QgOgLgGgSQgGgTABgZQgBgXAGgTQAGgTAOgLQAPgMAbAAQAXAAAMAIQANAJAEAOIAAheIAaAAIAADkIgWAAIgEgbQgEANgNAIQgNAJgWAAQgbAAgPgLgA+X81QgJAIgDAPQgDAOAAAQQAAARADAOQADAOAJAIQAKAJATAAQATAAALgIQALgHAEgOQAEgOAAgTQAAgTgEgOQgEgOgLgIQgLgIgTAAQgUABgJAJgEgjxgasQgYAAgQgNQgQgNgIgZIgCgNIgBgLIAAgKQAAgZAKgSQALgTAUgNIAQgGQAIgCAIAAIACAAQAcAAASAdIAAgHIAAgBIABAAIAYAAIABAAIABABIAABWIABAeIAEAbIgCABIgYAAQgBAAgBgHIgDgTIgGAIIgGAIQgHAGgJADQgJADgKAAgEgkEgc0QgMAJgIASIgDAMIgBAMIAAAHQAAAQAGANQAHANAMAJIAKAEIALABIAGAAQAuAAAAg4IAAgLQAAgXgIgOQgIgOgQgEIgGgBIgEAAIgBAAQgSAAgNAJgAf86xQgEgDAAgMQAAgMAEgEQAFgEAKABQAKgBAFAEQAEAEAAAMQAAAMgEADQgFAEgKAAQgKAAgFgEgAT96uIgRgCIgNgDIAAgWIAOADIARADIAQABQATAAAJgGQAKgFAAgOQAAgKgDgFQgDgGgHgDQgIgDgPgEQgSgEgKgFQgKgGgEgJQgEgJAAgNQAAgUAPgMQAPgMAcAAQAMAAAMABQALACAGACIgCAWQgHgDgKgBQgKgCgLAAQgRgBgJAGQgJAFAAANQAAAIADAFQACAEAHADQAHADAMADQATAEALAGQALAFAFAKQAFAJAAAQQAAAYgQALQgQAMgeAAIgRgBgAG062QgJgIAAgSIAAjDIAaAAIAAC8QAAAMADAEQAEAEAIAAIAGAAIAGgBIAAAVIgHABIgKABQgSAAgJgJgEghVgaxQgKgEgFgMQgFgLAAgVIAAhbIgYAAIAAgVIAYAAIAAgnIAaAAIAAAnIAoAAIAAAVIgoAAIAABaQAAAMACAHQABAHAGACQAFADAJAAIAKAAIAIgCIAAAWIgJABIgJABQgSAAgLgEgAYC6vIg8AAIAAjQIA8AAQAWgBATAFQASAEAOALQANALAHAVQAHAUAAAhQAAAogMAWQgNAXgXAKQgVAJgcAAIgDAAgAXh7HIAgAAQAWAAAQgHQARgHAJgSQAJgRABgfQgBghgJgSQgKgSgQgGQgQgGgWAAIggAAgARI6vIAAhnQABgMgDgJQgCgJgHgFQgHgEgNAAQgKAAgJACQgKACgHAHQgIAHgFAOIAABuIgaAAIAAiiIAaAAIAAAXQAFgKAJgGQAIgGAKgCQAKgCAKAAQAVAAAMAHQAMAGAFAMQAFAMgBAQIAABwgAK/6vIAAiiIAaAAIAAAdQAGgNAIgHQAIgHAKgDQAKgCAKAAIADAAIgBAXIgDAAQgLAAgKADQgKADgHAIQgIAIgFAOIAABqgAFa6vIAAiiIAaAAIAACigAEL6vIAAhnQAAgMgCgJQgDgJgGgFQgHgEgNAAQgKAAgKACQgJACgIAHQgIAHgEAOIAABuIgaAAIAAjkIAaAAIAABZQAFgKAIgGQAJgGAKgCQAKgCAKAAQAVAAAMAHQALAGAFAMQAFAMAAAQIAABwgAiu6vIAAhnQAAgMgCgJQgDgJgHgFQgGgEgNAAQgKAAgKACQgJACgIAHQgIAHgEAOIAABuIgaAAIAAiiIAaAAIAAAXQAFgKAIgGQAJgGAKgCQAKgCAKAAQAVAAAMAHQALAGAFAMQAFAMAAAQIAABwgEglxgavIAAhnQAAgMgCgJQgDgJgGgFQgHgEgNAAQgKAAgKACQgJACgIAHQgIAHgEAOIAABuIgaAAIAAjkIAaAAIAABZQAFgKAIgGQAJgGAKgCQAKgCAKAAQAVAAAMAHQALAGAFAMQAFAMAAAQIAABwgEgpSgavIgqiaIgCAAIgrCaIgiAAIgxjQIAcAAIAnCwIACAAIAqiYIAhAAIAqCYIACAAIAmiwIAcAAIgyDQgAf/7rIAAgNQAAgLAFgKQAGgKAQgNIAOgMQAFgGABgGQACgGAAgJQAAgMgDgHQgEgHgJgCQgIgDgPAAIgWACQgMACgJADIAAgYIATgFQALgCAQAAQAVAAAPAFQAOAEAHAMQAHALAAAVQAAAQgEAKQgDAJgHAHQgHAHgJAHQgJAGgFAFQgFAFgCAFQgCAFAAAHIAAAJgASQ9GIAIgaQAEgNACgNQADgOAAgLIAZAAQAAALgDANQgDAOgGAOQgFANgGAMgAFc9yQgEgDAAgJQAAgKAEgDQADgDAJAAQAIAAADADQAEADAAAKQAAAJgEADQgDADgIAAQgJAAgDgDg");
	this.shape_1785.setTransform(284.075,208.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_1785).wait(1137));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,570.8,409.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.instance.setTransform(562.65,-62.55,1,1,0,0,0,290.2,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1137));

	// 元件 2
	this.instance_1 = new lib.元件1("synched",0);
	this.instance_1.setTransform(379.4,193.55,1,1,0,0,0,285.4,204.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFAED").ss(0.1,1,1).p("AHMAAQAAB0iHBSQiHBSi+AAQi9AAiHhSQiHhSAAh0QAAhzCHhSQCHhSC9AAQC+AACHBSQCHBSAABzg");
	this.shape.setTransform(732,7.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlEDGQiHhSAAh0QAAhzCHhSQCHhSC9AAQC+AACHBSQCHBSAABzQAAB0iHBSQiHBSi+AAQi9AAiHhSg");
	this.shape_1.setTransform(732,7.05);

	this.instance_2 = new lib.位图4复制();
	this.instance_2.setTransform(705,-18,0.5173,0.5173);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).wait(1137));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(96.2,-92,975.6,511.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(94,-92,977.8,511.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(96.2,-92,975.6,511.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(94,-92,977.8,511.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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

}).prototype = getMCSymbolPrototype(lib.元件10, rect = new cjs.Rectangle(-28.2,-28.1,56.5,56.3), [rect]);


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
	this._movieClip.setTransform(641.95,392.75,1,1,0,0,0,561,219);

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
		{src:"images/index_atlas_1.png", id:"index_atlas_1"}
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