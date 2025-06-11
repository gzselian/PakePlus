(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,958,821]]}
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



(lib.位图4 = function() {
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
	this.shape.setTransform(-3.5409,0.2548,0.9827,1.1478,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_1.setTransform(-3.5409,0.2548,0.9827,1.1478,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_2.setTransform(6.9006,0.2548,0.9827,1.1478,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_3.setTransform(6.9006,0.2548,0.9827,1.1478,0,0,180);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{scaleY:1.1478,y:0.2548}},{t:this.shape_2,p:{scaleY:1.1478,y:0.2548}},{t:this.shape_1,p:{scaleY:1.1478,y:0.2548}},{t:this.shape,p:{scaleY:1.1478,y:0.2548}}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{scaleY:1.1477,y:0.2664}},{t:this.shape_2,p:{scaleY:1.1477,y:0.2664}},{t:this.shape_1,p:{scaleY:1.1477,y:0.2664}},{t:this.shape,p:{scaleY:1.1477,y:0.2664}}]},1).wait(2));

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
	this.shape.setTransform(11.9577,6.1861,0.5756,0.5756);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAjAAQAAAPgKAKQgKAKgPAAQgNAAgLgKQgKgKAAgPQAAgNAKgLQALgKANAAQAPAAAKAKQAKALAAANg");
	this.shape_1.setTransform(11.8702,6.3327,0.5756,0.5756);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAYQgKgJAAgPQAAgOAKgKQAKgKAOAAQAPAAAJAKQALAKAAAOQAAAPgLAJQgJALgPAAQgOAAgKgLg");
	this.shape_2.setTransform(11.8702,6.3327,0.5756,0.5756);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah0CDQgOgHAAgMQAAgLAOgIQAOgJASgBQALAAAKACIAAioQAAgIAGgEQADgDAFgBIChglIABAAQAQgDACANIAADEQAAALgOAJQgNAIgTABQgTABgNgHQgOgHAAgMQAAgLAOgIQANgJATgBQAMAAAKACIAAhpIiRAgIAACJQgCAJgMAHQgNAJgTABIgEAAQgQAAgMgGg");
	this.shape_3.setTransform(-3.811,-0.078,0.8996,0.8996);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F99703").ss(5,1,1).p("AjJDJQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQAMAMAKAMQAFAGAEAGQA1BIAABdQAAB2hUBTQhTBUh2AAQh1AAhUhUg");
	this.shape_4.setTransform(-0.1034,-0.0049,0.8996,0.8996);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F99703").s().p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTIAWAXIAJANQA1BIAABdQAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_5.setTransform(-0.1034,-0.0049,0.8996,0.8996);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E18803").ss(5,1,1).p("AjJDJQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQAMAMAKAMQAFAGAEAGQA1BIAABdQAAB2hUBTQhTBUh2AAQh1AAhUhUg");
	this.shape_6.setTransform(-0.009,0.0115,0.8998,0.8998);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E18904").s().p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTIAWAXIAJANQA1BIAABdQAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_7.setTransform(-0.009,0.0115,0.8998,0.8998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{x:-0.1034,y:-0.0049}},{t:this.shape_4,p:{x:-0.1034,y:-0.0049}},{t:this.shape_3,p:{scaleX:0.8996,scaleY:0.8996,x:-3.811,y:-0.078}},{t:this.shape_2,p:{scaleX:0.5756,scaleY:0.5756,x:11.8702,y:6.3327}},{t:this.shape_1,p:{scaleX:0.5756,scaleY:0.5756,x:11.8702,y:6.3327}},{t:this.shape,p:{scaleX:0.5756,scaleY:0.5756,x:11.9577,y:6.1861}}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_3,p:{scaleX:0.8998,scaleY:0.8998,x:-3.8878,y:-0.0616}},{t:this.shape_2,p:{scaleX:0.5758,scaleY:0.5758,x:12.0923,y:6.3656}},{t:this.shape_1,p:{scaleX:0.5758,scaleY:0.5758,x:12.0923,y:6.3656}},{t:this.shape,p:{scaleX:0.5758,scaleY:0.5758,x:12.1319,y:6.2169}}]},1).to({state:[{t:this.shape_5,p:{x:-0.112,y:-0.0064}},{t:this.shape_4,p:{x:-0.112,y:-0.0064}},{t:this.shape_3,p:{scaleX:0.8996,scaleY:0.8996,x:-3.8268,y:-0.0795}},{t:this.shape_2,p:{scaleX:0.5756,scaleY:0.5756,x:11.8545,y:6.3297}},{t:this.shape_1,p:{scaleX:0.5756,scaleY:0.5756,x:11.8545,y:6.3297}},{t:this.shape,p:{scaleX:0.5756,scaleY:0.5756,x:11.9419,y:6.1833}}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-28.2,-28.1,56.3,56.3);
p.frameBounds = [rect, new cjs.Rectangle(-28.2,-28.1,56.4,56.3), rect=new cjs.Rectangle(-28.2,-28.1,56.3,56.3), rect];


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

	// 图层_10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_506 = new cjs.Graphics().p("Ahnf+IAAn+ICpAAIAAH+g");
	var mask_graphics_507 = new cjs.Graphics().p("Ah1D/IAAn9IDrAAIAAH9g");
	var mask_graphics_508 = new cjs.Graphics().p("AiWD/IAAn9IEtAAIAAH9g");
	var mask_graphics_509 = new cjs.Graphics().p("Ai3D/IAAn9IFvAAIAAH9g");
	var mask_graphics_510 = new cjs.Graphics().p("AjYD/IAAn9IGxAAIAAH9g");
	var mask_graphics_511 = new cjs.Graphics().p("Aj5D/IAAn9IHzAAIAAH9g");
	var mask_graphics_512 = new cjs.Graphics().p("AkaD/IAAn9II1AAIAAH9g");
	var mask_graphics_513 = new cjs.Graphics().p("Ak7D/IAAn9IJ3AAIAAH9g");
	var mask_graphics_514 = new cjs.Graphics().p("AlcD/IAAn9IK5AAIAAH9g");
	var mask_graphics_515 = new cjs.Graphics().p("Al9D/IAAn9IL7AAIAAH9g");
	var mask_graphics_516 = new cjs.Graphics().p("AmeD/IAAn9IM9AAIAAH9g");
	var mask_graphics_517 = new cjs.Graphics().p("Am/D/IAAn9IN/AAIAAH9g");
	var mask_graphics_518 = new cjs.Graphics().p("AngD/IAAn9IPBAAIAAH9g");
	var mask_graphics_519 = new cjs.Graphics().p("AoBD/IAAn9IQDAAIAAH9g");
	var mask_graphics_520 = new cjs.Graphics().p("AojD/IAAn9IRGAAIAAH9g");
	var mask_graphics_521 = new cjs.Graphics().p("ApED/IAAn9ISIAAIAAH9g");
	var mask_graphics_522 = new cjs.Graphics().p("AplD/IAAn9ITLAAIAAH9g");
	var mask_graphics_523 = new cjs.Graphics().p("AqGD/IAAn9IUMAAIAAH9g");
	var mask_graphics_524 = new cjs.Graphics().p("AqnD/IAAn9IVOAAIAAH9g");
	var mask_graphics_525 = new cjs.Graphics().p("ArID/IAAn9IWRAAIAAH9g");
	var mask_graphics_526 = new cjs.Graphics().p("ArpD/IAAn9IXSAAIAAH9g");
	var mask_graphics_527 = new cjs.Graphics().p("AsKD/IAAn9IYUAAIAAH9g");
	var mask_graphics_528 = new cjs.Graphics().p("AsrD/IAAn9IZXAAIAAH9g");
	var mask_graphics_529 = new cjs.Graphics().p("AtMD/IAAn9IaYAAIAAH9g");
	var mask_graphics_530 = new cjs.Graphics().p("AttD/IAAn9IbbAAIAAH9g");
	var mask_graphics_531 = new cjs.Graphics().p("AuOD/IAAn9IcdAAIAAH9g");
	var mask_graphics_532 = new cjs.Graphics().p("AuvD/IAAn9IdfAAIAAH9g");
	var mask_graphics_533 = new cjs.Graphics().p("AvQD/IAAn9IehAAIAAH9g");
	var mask_graphics_534 = new cjs.Graphics().p("AvxD/IAAn9IfjAAIAAH9g");
	var mask_graphics_535 = new cjs.Graphics().p("AwSD/IAAn9MAglAAAIAAH9g");
	var mask_graphics_536 = new cjs.Graphics().p("AwzD/IAAn9MAhnAAAIAAH9g");
	var mask_graphics_537 = new cjs.Graphics().p("AxUD/IAAn9MAipAAAIAAH9g");
	var mask_graphics_538 = new cjs.Graphics().p("Ax1D/IAAn9MAjrAAAIAAH9g");
	var mask_graphics_539 = new cjs.Graphics().p("AyWD/IAAn9MAktAAAIAAH9g");
	var mask_graphics_540 = new cjs.Graphics().p("Ay3D/IAAn9MAlvAAAIAAH9g");
	var mask_graphics_541 = new cjs.Graphics().p("AzYD/IAAn9MAmxAAAIAAH9g");
	var mask_graphics_542 = new cjs.Graphics().p("Az5D/IAAn9MAnzAAAIAAH9g");
	var mask_graphics_543 = new cjs.Graphics().p("A0aD/IAAn9MAo1AAAIAAH9g");
	var mask_graphics_544 = new cjs.Graphics().p("A07D/IAAn9MAp3AAAIAAH9g");
	var mask_graphics_545 = new cjs.Graphics().p("A1cD/IAAn9MAq5AAAIAAH9g");
	var mask_graphics_546 = new cjs.Graphics().p("A19D/IAAn9MAr7AAAIAAH9g");
	var mask_graphics_547 = new cjs.Graphics().p("A2eD/IAAn9MAs9AAAIAAH9g");
	var mask_graphics_548 = new cjs.Graphics().p("A2/D/IAAn9MAt/AAAIAAH9g");
	var mask_graphics_549 = new cjs.Graphics().p("A3gD/IAAn9MAvBAAAIAAH9g");
	var mask_graphics_550 = new cjs.Graphics().p("A4BD/IAAn9MAwDAAAIAAH9g");
	var mask_graphics_551 = new cjs.Graphics().p("A4iD/IAAn9MAxFAAAIAAH9g");
	var mask_graphics_552 = new cjs.Graphics().p("A5DD/IAAn9MAyHAAAIAAH9g");
	var mask_graphics_553 = new cjs.Graphics().p("A5kD/IAAn9MAzJAAAIAAH9g");
	var mask_graphics_554 = new cjs.Graphics().p("A6FD/IAAn9MA0LAAAIAAH9g");
	var mask_graphics_555 = new cjs.Graphics().p("A6mD/IAAn9MA1NAAAIAAH9g");
	var mask_graphics_556 = new cjs.Graphics().p("A7HD/IAAn9MA2PAAAIAAH9g");
	var mask_graphics_557 = new cjs.Graphics().p("A7oD/IAAn9MA3RAAAIAAH9g");
	var mask_graphics_558 = new cjs.Graphics().p("A8JD/IAAn9MA4TAAAIAAH9g");
	var mask_graphics_559 = new cjs.Graphics().p("A8rD/IAAn9MA5WAAAIAAH9g");
	var mask_graphics_560 = new cjs.Graphics().p("A9MD/IAAn9MA6ZAAAIAAH9g");
	var mask_graphics_561 = new cjs.Graphics().p("A9tD/IAAn9MA7aAAAIAAH9g");
	var mask_graphics_562 = new cjs.Graphics().p("A+OD/IAAn9MA8cAAAIAAH9g");
	var mask_graphics_563 = new cjs.Graphics().p("A+vf+IAAn+MA9fAAAIAAH+g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(506).to({graphics:mask_graphics_506,x:-10.375,y:204.5934}).wait(1).to({graphics:mask_graphics_507,x:-8.95,y:383.7}).wait(1).to({graphics:mask_graphics_508,x:-5.65,y:383.7}).wait(1).to({graphics:mask_graphics_509,x:-2.35,y:383.7}).wait(1).to({graphics:mask_graphics_510,x:0.95,y:383.7}).wait(1).to({graphics:mask_graphics_511,x:4.275,y:383.7}).wait(1).to({graphics:mask_graphics_512,x:7.575,y:383.7}).wait(1).to({graphics:mask_graphics_513,x:10.875,y:383.7}).wait(1).to({graphics:mask_graphics_514,x:14.175,y:383.7}).wait(1).to({graphics:mask_graphics_515,x:17.475,y:383.7}).wait(1).to({graphics:mask_graphics_516,x:20.775,y:383.7}).wait(1).to({graphics:mask_graphics_517,x:24.075,y:383.7}).wait(1).to({graphics:mask_graphics_518,x:27.375,y:383.7}).wait(1).to({graphics:mask_graphics_519,x:30.675,y:383.7}).wait(1).to({graphics:mask_graphics_520,x:34,y:383.7}).wait(1).to({graphics:mask_graphics_521,x:37.3,y:383.7}).wait(1).to({graphics:mask_graphics_522,x:40.6,y:383.7}).wait(1).to({graphics:mask_graphics_523,x:43.9,y:383.7}).wait(1).to({graphics:mask_graphics_524,x:47.2,y:383.7}).wait(1).to({graphics:mask_graphics_525,x:50.5,y:383.7}).wait(1).to({graphics:mask_graphics_526,x:53.8,y:383.7}).wait(1).to({graphics:mask_graphics_527,x:57.1,y:383.7}).wait(1).to({graphics:mask_graphics_528,x:60.4,y:383.7}).wait(1).to({graphics:mask_graphics_529,x:63.7,y:383.7}).wait(1).to({graphics:mask_graphics_530,x:67.025,y:383.7}).wait(1).to({graphics:mask_graphics_531,x:70.325,y:383.7}).wait(1).to({graphics:mask_graphics_532,x:73.625,y:383.7}).wait(1).to({graphics:mask_graphics_533,x:76.925,y:383.7}).wait(1).to({graphics:mask_graphics_534,x:80.225,y:383.7}).wait(1).to({graphics:mask_graphics_535,x:83.525,y:383.7}).wait(1).to({graphics:mask_graphics_536,x:86.825,y:383.7}).wait(1).to({graphics:mask_graphics_537,x:90.125,y:383.7}).wait(1).to({graphics:mask_graphics_538,x:93.425,y:383.7}).wait(1).to({graphics:mask_graphics_539,x:96.725,y:383.7}).wait(1).to({graphics:mask_graphics_540,x:100.05,y:383.7}).wait(1).to({graphics:mask_graphics_541,x:103.35,y:383.7}).wait(1).to({graphics:mask_graphics_542,x:106.65,y:383.7}).wait(1).to({graphics:mask_graphics_543,x:109.95,y:383.7}).wait(1).to({graphics:mask_graphics_544,x:113.25,y:383.7}).wait(1).to({graphics:mask_graphics_545,x:116.55,y:383.7}).wait(1).to({graphics:mask_graphics_546,x:119.85,y:383.7}).wait(1).to({graphics:mask_graphics_547,x:123.15,y:383.7}).wait(1).to({graphics:mask_graphics_548,x:126.45,y:383.7}).wait(1).to({graphics:mask_graphics_549,x:129.75,y:383.7}).wait(1).to({graphics:mask_graphics_550,x:133.075,y:383.7}).wait(1).to({graphics:mask_graphics_551,x:136.375,y:383.7}).wait(1).to({graphics:mask_graphics_552,x:139.675,y:383.7}).wait(1).to({graphics:mask_graphics_553,x:142.975,y:383.7}).wait(1).to({graphics:mask_graphics_554,x:146.275,y:383.7}).wait(1).to({graphics:mask_graphics_555,x:149.575,y:383.7}).wait(1).to({graphics:mask_graphics_556,x:152.875,y:383.7}).wait(1).to({graphics:mask_graphics_557,x:156.175,y:383.7}).wait(1).to({graphics:mask_graphics_558,x:159.475,y:383.7}).wait(1).to({graphics:mask_graphics_559,x:162.8,y:383.7}).wait(1).to({graphics:mask_graphics_560,x:166.1,y:383.7}).wait(1).to({graphics:mask_graphics_561,x:169.4,y:383.7}).wait(1).to({graphics:mask_graphics_562,x:172.7,y:383.7}).wait(1).to({graphics:mask_graphics_563,x:175.9791,y:204.5934}).wait(59));

	// 图层_14
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("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");
	this.shape.setTransform(193.925,208.6);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(506).to({_off:false},0).wait(116));

	// 图层_9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_451 = new cjs.Graphics().p("AhpcBIAAn+ICpAAIAAH+g");
	var mask_1_graphics_452 = new cjs.Graphics().p("AiUD/IAAn9IEpAAIAAH9g");
	var mask_1_graphics_453 = new cjs.Graphics().p("AjUD/IAAn9IGpAAIAAH9g");
	var mask_1_graphics_454 = new cjs.Graphics().p("AkVD/IAAn9IIrAAIAAH9g");
	var mask_1_graphics_455 = new cjs.Graphics().p("AlVD/IAAn9IKrAAIAAH9g");
	var mask_1_graphics_456 = new cjs.Graphics().p("AmVD/IAAn9IMrAAIAAH9g");
	var mask_1_graphics_457 = new cjs.Graphics().p("AnWD/IAAn9IOtAAIAAH9g");
	var mask_1_graphics_458 = new cjs.Graphics().p("AoWD/IAAn9IQtAAIAAH9g");
	var mask_1_graphics_459 = new cjs.Graphics().p("ApWD/IAAn9IStAAIAAH9g");
	var mask_1_graphics_460 = new cjs.Graphics().p("AqXD/IAAn9IUvAAIAAH9g");
	var mask_1_graphics_461 = new cjs.Graphics().p("ArXD/IAAn9IWvAAIAAH9g");
	var mask_1_graphics_462 = new cjs.Graphics().p("AsYD/IAAn9IYxAAIAAH9g");
	var mask_1_graphics_463 = new cjs.Graphics().p("AtYD/IAAn9IaxAAIAAH9g");
	var mask_1_graphics_464 = new cjs.Graphics().p("AuYD/IAAn9IcxAAIAAH9g");
	var mask_1_graphics_465 = new cjs.Graphics().p("AvZD/IAAn9IeyAAIAAH9g");
	var mask_1_graphics_466 = new cjs.Graphics().p("AwZD/IAAn9MAgzAAAIAAH9g");
	var mask_1_graphics_467 = new cjs.Graphics().p("AxZD/IAAn9MAizAAAIAAH9g");
	var mask_1_graphics_468 = new cjs.Graphics().p("AyaD/IAAn9MAk0AAAIAAH9g");
	var mask_1_graphics_469 = new cjs.Graphics().p("Ay2D/IAAn9MAltAAAIAAH9g");
	var mask_1_graphics_470 = new cjs.Graphics().p("AzTD/IAAn9MAmnAAAIAAH9g");
	var mask_1_graphics_471 = new cjs.Graphics().p("AzvD/IAAn9MAnfAAAIAAH9g");
	var mask_1_graphics_472 = new cjs.Graphics().p("A0MD/IAAn9MAoZAAAIAAH9g");
	var mask_1_graphics_473 = new cjs.Graphics().p("A0oD/IAAn9MApRAAAIAAH9g");
	var mask_1_graphics_474 = new cjs.Graphics().p("A1FD/IAAn9MAqLAAAIAAH9g");
	var mask_1_graphics_475 = new cjs.Graphics().p("A1hD/IAAn9MArDAAAIAAH9g");
	var mask_1_graphics_476 = new cjs.Graphics().p("A1+D/IAAn9MAr9AAAIAAH9g");
	var mask_1_graphics_477 = new cjs.Graphics().p("A2aD/IAAn9MAs1AAAIAAH9g");
	var mask_1_graphics_478 = new cjs.Graphics().p("A23D/IAAn9MAtvAAAIAAH9g");
	var mask_1_graphics_479 = new cjs.Graphics().p("A3UD/IAAn9MAuoAAAIAAH9g");
	var mask_1_graphics_480 = new cjs.Graphics().p("A3wD/IAAn9MAvhAAAIAAH9g");
	var mask_1_graphics_481 = new cjs.Graphics().p("A4ND/IAAn9MAwbAAAIAAH9g");
	var mask_1_graphics_482 = new cjs.Graphics().p("A4pD/IAAn9MAxTAAAIAAH9g");
	var mask_1_graphics_483 = new cjs.Graphics().p("A5GD/IAAn9MAyMAAAIAAH9g");
	var mask_1_graphics_484 = new cjs.Graphics().p("A5iD/IAAn9MAzFAAAIAAH9g");
	var mask_1_graphics_485 = new cjs.Graphics().p("A5/D/IAAn9MAz+AAAIAAH9g");
	var mask_1_graphics_486 = new cjs.Graphics().p("A6bD/IAAn9MA03AAAIAAH9g");
	var mask_1_graphics_487 = new cjs.Graphics().p("A64D/IAAn9MA1xAAAIAAH9g");
	var mask_1_graphics_488 = new cjs.Graphics().p("A7UD/IAAn9MA2pAAAIAAH9g");
	var mask_1_graphics_489 = new cjs.Graphics().p("A7xD/IAAn9MA3jAAAIAAH9g");
	var mask_1_graphics_490 = new cjs.Graphics().p("A8ND/IAAn9MA4bAAAIAAH9g");
	var mask_1_graphics_491 = new cjs.Graphics().p("A8qD/IAAn9MA5VAAAIAAH9g");
	var mask_1_graphics_492 = new cjs.Graphics().p("A9GD/IAAn9MA6NAAAIAAH9g");
	var mask_1_graphics_493 = new cjs.Graphics().p("A9jD/IAAn9MA7HAAAIAAH9g");
	var mask_1_graphics_494 = new cjs.Graphics().p("A+AD/IAAn9MA8AAAAIAAH9g");
	var mask_1_graphics_495 = new cjs.Graphics().p("A+cD/IAAn9MA85AAAIAAH9g");
	var mask_1_graphics_496 = new cjs.Graphics().p("A+5cBIAAn+MA9zAAAIAAH+g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(451).to({graphics:mask_1_graphics_451,x:-10.625,y:179.3434}).wait(1).to({graphics:mask_1_graphics_452,x:-6.325,y:333.2}).wait(1).to({graphics:mask_1_graphics_453,x:0.1,y:333.2}).wait(1).to({graphics:mask_1_graphics_454,x:6.55,y:333.2}).wait(1).to({graphics:mask_1_graphics_455,x:12.975,y:333.2}).wait(1).to({graphics:mask_1_graphics_456,x:19.4,y:333.2}).wait(1).to({graphics:mask_1_graphics_457,x:25.825,y:333.2}).wait(1).to({graphics:mask_1_graphics_458,x:32.275,y:333.2}).wait(1).to({graphics:mask_1_graphics_459,x:38.7,y:333.2}).wait(1).to({graphics:mask_1_graphics_460,x:45.1,y:333.2}).wait(1).to({graphics:mask_1_graphics_461,x:51.525,y:333.2}).wait(1).to({graphics:mask_1_graphics_462,x:57.975,y:333.2}).wait(1).to({graphics:mask_1_graphics_463,x:64.4,y:333.2}).wait(1).to({graphics:mask_1_graphics_464,x:70.825,y:333.2}).wait(1).to({graphics:mask_1_graphics_465,x:77.25,y:333.2}).wait(1).to({graphics:mask_1_graphics_466,x:83.7,y:333.2}).wait(1).to({graphics:mask_1_graphics_467,x:90.125,y:333.2}).wait(1).to({graphics:mask_1_graphics_468,x:96.55,y:333.2}).wait(1).to({graphics:mask_1_graphics_469,x:99.4,y:333.2}).wait(1).to({graphics:mask_1_graphics_470,x:102.25,y:333.2}).wait(1).to({graphics:mask_1_graphics_471,x:105.1,y:333.2}).wait(1).to({graphics:mask_1_graphics_472,x:107.975,y:333.2}).wait(1).to({graphics:mask_1_graphics_473,x:110.825,y:333.2}).wait(1).to({graphics:mask_1_graphics_474,x:113.675,y:333.2}).wait(1).to({graphics:mask_1_graphics_475,x:116.525,y:333.2}).wait(1).to({graphics:mask_1_graphics_476,x:119.375,y:333.2}).wait(1).to({graphics:mask_1_graphics_477,x:122.225,y:333.2}).wait(1).to({graphics:mask_1_graphics_478,x:125.075,y:333.2}).wait(1).to({graphics:mask_1_graphics_479,x:127.95,y:333.2}).wait(1).to({graphics:mask_1_graphics_480,x:130.8,y:333.2}).wait(1).to({graphics:mask_1_graphics_481,x:133.65,y:333.2}).wait(1).to({graphics:mask_1_graphics_482,x:136.5,y:333.2}).wait(1).to({graphics:mask_1_graphics_483,x:139.35,y:333.2}).wait(1).to({graphics:mask_1_graphics_484,x:142.2,y:333.2}).wait(1).to({graphics:mask_1_graphics_485,x:145.05,y:333.2}).wait(1).to({graphics:mask_1_graphics_486,x:147.925,y:333.2}).wait(1).to({graphics:mask_1_graphics_487,x:150.775,y:333.2}).wait(1).to({graphics:mask_1_graphics_488,x:153.625,y:333.2}).wait(1).to({graphics:mask_1_graphics_489,x:156.475,y:333.2}).wait(1).to({graphics:mask_1_graphics_490,x:159.325,y:333.2}).wait(1).to({graphics:mask_1_graphics_491,x:162.175,y:333.2}).wait(1).to({graphics:mask_1_graphics_492,x:165.025,y:333.2}).wait(1).to({graphics:mask_1_graphics_493,x:167.9,y:333.2}).wait(1).to({graphics:mask_1_graphics_494,x:170.75,y:333.2}).wait(1).to({graphics:mask_1_graphics_495,x:173.6,y:333.2}).wait(1).to({graphics:mask_1_graphics_496,x:176.4536,y:179.3434}).wait(126));

	// 图层_15
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("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");
	this.shape_1.setTransform(193.925,208.6);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(451).to({_off:false},0).wait(171));

	// 图层_8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_393 = new cjs.Graphics().p("AhuYjIAAn+ICpAAIAAH+g");
	var mask_2_graphics_394 = new cjs.Graphics().p("Ah2D/IAAn9IDtAAIAAH9g");
	var mask_2_graphics_395 = new cjs.Graphics().p("AiZD/IAAn9IEzAAIAAH9g");
	var mask_2_graphics_396 = new cjs.Graphics().p("Ai7D/IAAn9IF3AAIAAH9g");
	var mask_2_graphics_397 = new cjs.Graphics().p("AjdD/IAAn9IG7AAIAAH9g");
	var mask_2_graphics_398 = new cjs.Graphics().p("Aj/D/IAAn9IIAAAIAAH9g");
	var mask_2_graphics_399 = new cjs.Graphics().p("AkiD/IAAn9IJFAAIAAH9g");
	var mask_2_graphics_400 = new cjs.Graphics().p("AlED/IAAn9IKJAAIAAH9g");
	var mask_2_graphics_401 = new cjs.Graphics().p("AlmD/IAAn9ILOAAIAAH9g");
	var mask_2_graphics_402 = new cjs.Graphics().p("AmJD/IAAn9IMTAAIAAH9g");
	var mask_2_graphics_403 = new cjs.Graphics().p("AmrD/IAAn9INXAAIAAH9g");
	var mask_2_graphics_404 = new cjs.Graphics().p("AnND/IAAn9IOcAAIAAH9g");
	var mask_2_graphics_405 = new cjs.Graphics().p("AnwD/IAAn9IPhAAIAAH9g");
	var mask_2_graphics_406 = new cjs.Graphics().p("AoSD/IAAn9IQlAAIAAH9g");
	var mask_2_graphics_407 = new cjs.Graphics().p("Ao0D/IAAn9IRpAAIAAH9g");
	var mask_2_graphics_408 = new cjs.Graphics().p("ApXD/IAAn9ISvAAIAAH9g");
	var mask_2_graphics_409 = new cjs.Graphics().p("Ap5D/IAAn9ITzAAIAAH9g");
	var mask_2_graphics_410 = new cjs.Graphics().p("AqbD/IAAn9IU3AAIAAH9g");
	var mask_2_graphics_411 = new cjs.Graphics().p("Aq+D/IAAn9IV9AAIAAH9g");
	var mask_2_graphics_412 = new cjs.Graphics().p("ArgD/IAAn9IXBAAIAAH9g");
	var mask_2_graphics_413 = new cjs.Graphics().p("AsCD/IAAn9IYFAAIAAH9g");
	var mask_2_graphics_414 = new cjs.Graphics().p("AslD/IAAn9IZLAAIAAH9g");
	var mask_2_graphics_415 = new cjs.Graphics().p("AtHD/IAAn9IaPAAIAAH9g");
	var mask_2_graphics_416 = new cjs.Graphics().p("AtpD/IAAn9IbTAAIAAH9g");
	var mask_2_graphics_417 = new cjs.Graphics().p("AuMD/IAAn9IcZAAIAAH9g");
	var mask_2_graphics_418 = new cjs.Graphics().p("AuuD/IAAn9IddAAIAAH9g");
	var mask_2_graphics_419 = new cjs.Graphics().p("AvQD/IAAn9IeiAAIAAH9g");
	var mask_2_graphics_420 = new cjs.Graphics().p("AvzD/IAAn9IfnAAIAAH9g");
	var mask_2_graphics_421 = new cjs.Graphics().p("AwVD/IAAn9MAgrAAAIAAH9g");
	var mask_2_graphics_422 = new cjs.Graphics().p("Aw4D/IAAn9MAhxAAAIAAH9g");
	var mask_2_graphics_423 = new cjs.Graphics().p("AxaD/IAAn9MAi1AAAIAAH9g");
	var mask_2_graphics_424 = new cjs.Graphics().p("Ax8D/IAAn9MAj5AAAIAAH9g");
	var mask_2_graphics_425 = new cjs.Graphics().p("AyfD/IAAn9MAk/AAAIAAH9g");
	var mask_2_graphics_426 = new cjs.Graphics().p("AzBD/IAAn9MAmDAAAIAAH9g");
	var mask_2_graphics_427 = new cjs.Graphics().p("AzjD/IAAn9MAnHAAAIAAH9g");
	var mask_2_graphics_428 = new cjs.Graphics().p("A0GD/IAAn9MAoNAAAIAAH9g");
	var mask_2_graphics_429 = new cjs.Graphics().p("A0oD/IAAn9MApRAAAIAAH9g");
	var mask_2_graphics_430 = new cjs.Graphics().p("A1KD/IAAn9MAqVAAAIAAH9g");
	var mask_2_graphics_431 = new cjs.Graphics().p("A1tD/IAAn9MArbAAAIAAH9g");
	var mask_2_graphics_432 = new cjs.Graphics().p("A2PD/IAAn9MAsfAAAIAAH9g");
	var mask_2_graphics_433 = new cjs.Graphics().p("A2xD/IAAn9MAtjAAAIAAH9g");
	var mask_2_graphics_434 = new cjs.Graphics().p("A3UD/IAAn9MAupAAAIAAH9g");
	var mask_2_graphics_435 = new cjs.Graphics().p("A32D/IAAn9MAvtAAAIAAH9g");
	var mask_2_graphics_436 = new cjs.Graphics().p("A4YD/IAAn9MAwxAAAIAAH9g");
	var mask_2_graphics_437 = new cjs.Graphics().p("A47D/IAAn9MAx3AAAIAAH9g");
	var mask_2_graphics_438 = new cjs.Graphics().p("A5dD/IAAn9MAy7AAAIAAH9g");
	var mask_2_graphics_439 = new cjs.Graphics().p("A5/D/IAAn9MAz/AAAIAAH9g");
	var mask_2_graphics_440 = new cjs.Graphics().p("A6iD/IAAn9MA1FAAAIAAH9g");
	var mask_2_graphics_441 = new cjs.Graphics().p("A7ED/IAAn9MA2JAAAIAAH9g");
	var mask_2_graphics_442 = new cjs.Graphics().p("A7mD/IAAn9MA3NAAAIAAH9g");
	var mask_2_graphics_443 = new cjs.Graphics().p("A8JD/IAAn9MA4TAAAIAAH9g");
	var mask_2_graphics_444 = new cjs.Graphics().p("A8rD/IAAn9MA5XAAAIAAH9g");
	var mask_2_graphics_445 = new cjs.Graphics().p("A9ND/IAAn9MA6bAAAIAAH9g");
	var mask_2_graphics_446 = new cjs.Graphics().p("A9wD/IAAn9MA7gAAAIAAH9g");
	var mask_2_graphics_447 = new cjs.Graphics().p("A+SD/IAAn9MA8lAAAIAAH9g");
	var mask_2_graphics_448 = new cjs.Graphics().p("A+0D/IAAn9MA9pAAAIAAH9g");
	var mask_2_graphics_449 = new cjs.Graphics().p("A/XYjIAAn+MA+vAAAIAAH+g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(393).to({graphics:mask_2_graphics_393,x:-11.125,y:157.0934}).wait(1).to({graphics:mask_2_graphics_394,x:-10.325,y:288.7}).wait(1).to({graphics:mask_2_graphics_395,x:-6.875,y:288.7}).wait(1).to({graphics:mask_2_graphics_396,x:-3.45,y:288.7}).wait(1).to({graphics:mask_2_graphics_397,x:-0.025,y:288.7}).wait(1).to({graphics:mask_2_graphics_398,x:3.4,y:288.7}).wait(1).to({graphics:mask_2_graphics_399,x:6.85,y:288.7}).wait(1).to({graphics:mask_2_graphics_400,x:10.275,y:288.7}).wait(1).to({graphics:mask_2_graphics_401,x:13.7,y:288.7}).wait(1).to({graphics:mask_2_graphics_402,x:17.15,y:288.7}).wait(1).to({graphics:mask_2_graphics_403,x:20.575,y:288.7}).wait(1).to({graphics:mask_2_graphics_404,x:24,y:288.7}).wait(1).to({graphics:mask_2_graphics_405,x:27.45,y:288.7}).wait(1).to({graphics:mask_2_graphics_406,x:30.875,y:288.7}).wait(1).to({graphics:mask_2_graphics_407,x:34.3,y:288.7}).wait(1).to({graphics:mask_2_graphics_408,x:37.75,y:288.7}).wait(1).to({graphics:mask_2_graphics_409,x:41.175,y:288.7}).wait(1).to({graphics:mask_2_graphics_410,x:44.6,y:288.7}).wait(1).to({graphics:mask_2_graphics_411,x:48.025,y:288.7}).wait(1).to({graphics:mask_2_graphics_412,x:51.475,y:288.7}).wait(1).to({graphics:mask_2_graphics_413,x:54.9,y:288.7}).wait(1).to({graphics:mask_2_graphics_414,x:58.325,y:288.7}).wait(1).to({graphics:mask_2_graphics_415,x:61.775,y:288.7}).wait(1).to({graphics:mask_2_graphics_416,x:65.2,y:288.7}).wait(1).to({graphics:mask_2_graphics_417,x:68.625,y:288.7}).wait(1).to({graphics:mask_2_graphics_418,x:72.075,y:288.7}).wait(1).to({graphics:mask_2_graphics_419,x:75.5,y:288.7}).wait(1).to({graphics:mask_2_graphics_420,x:78.925,y:288.7}).wait(1).to({graphics:mask_2_graphics_421,x:82.375,y:288.7}).wait(1).to({graphics:mask_2_graphics_422,x:85.775,y:288.7}).wait(1).to({graphics:mask_2_graphics_423,x:89.2,y:288.7}).wait(1).to({graphics:mask_2_graphics_424,x:92.625,y:288.7}).wait(1).to({graphics:mask_2_graphics_425,x:96.075,y:288.7}).wait(1).to({graphics:mask_2_graphics_426,x:99.5,y:288.7}).wait(1).to({graphics:mask_2_graphics_427,x:102.925,y:288.7}).wait(1).to({graphics:mask_2_graphics_428,x:106.375,y:288.7}).wait(1).to({graphics:mask_2_graphics_429,x:109.8,y:288.7}).wait(1).to({graphics:mask_2_graphics_430,x:113.225,y:288.7}).wait(1).to({graphics:mask_2_graphics_431,x:116.675,y:288.7}).wait(1).to({graphics:mask_2_graphics_432,x:120.1,y:288.7}).wait(1).to({graphics:mask_2_graphics_433,x:123.525,y:288.7}).wait(1).to({graphics:mask_2_graphics_434,x:126.95,y:288.7}).wait(1).to({graphics:mask_2_graphics_435,x:130.4,y:288.7}).wait(1).to({graphics:mask_2_graphics_436,x:133.825,y:288.7}).wait(1).to({graphics:mask_2_graphics_437,x:137.25,y:288.7}).wait(1).to({graphics:mask_2_graphics_438,x:140.7,y:288.7}).wait(1).to({graphics:mask_2_graphics_439,x:144.125,y:288.7}).wait(1).to({graphics:mask_2_graphics_440,x:147.55,y:288.7}).wait(1).to({graphics:mask_2_graphics_441,x:151,y:288.7}).wait(1).to({graphics:mask_2_graphics_442,x:154.425,y:288.7}).wait(1).to({graphics:mask_2_graphics_443,x:157.85,y:288.7}).wait(1).to({graphics:mask_2_graphics_444,x:161.3,y:288.7}).wait(1).to({graphics:mask_2_graphics_445,x:164.725,y:288.7}).wait(1).to({graphics:mask_2_graphics_446,x:168.15,y:288.7}).wait(1).to({graphics:mask_2_graphics_447,x:171.575,y:288.7}).wait(1).to({graphics:mask_2_graphics_448,x:175.025,y:288.7}).wait(1).to({graphics:mask_2_graphics_449,x:178.4736,y:157.0934}).wait(173));

	// 图层_16
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("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");
	this.shape_2.setTransform(193.925,208.6);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(393).to({_off:false},0).wait(229));

	// 图层_7 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_351 = new cjs.Graphics().p("Ah4UzIAAn+ICpAAIAAH+g");
	var mask_3_graphics_352 = new cjs.Graphics().p("Ah6D/IAAn9ID1AAIAAH9g");
	var mask_3_graphics_353 = new cjs.Graphics().p("AihD/IAAn9IFDAAIAAH9g");
	var mask_3_graphics_354 = new cjs.Graphics().p("AjID/IAAn9IGRAAIAAH9g");
	var mask_3_graphics_355 = new cjs.Graphics().p("AjuD/IAAn9IHeAAIAAH9g");
	var mask_3_graphics_356 = new cjs.Graphics().p("AkVD/IAAn9IIrAAIAAH9g");
	var mask_3_graphics_357 = new cjs.Graphics().p("Ak7D/IAAn9IJ4AAIAAH9g");
	var mask_3_graphics_358 = new cjs.Graphics().p("AliD/IAAn9ILFAAIAAH9g");
	var mask_3_graphics_359 = new cjs.Graphics().p("AmJD/IAAn9IMTAAIAAH9g");
	var mask_3_graphics_360 = new cjs.Graphics().p("AmvD/IAAn9INgAAIAAH9g");
	var mask_3_graphics_361 = new cjs.Graphics().p("AnWD/IAAn9IOtAAIAAH9g");
	var mask_3_graphics_362 = new cjs.Graphics().p("An8D/IAAn9IP6AAIAAH9g");
	var mask_3_graphics_363 = new cjs.Graphics().p("AojD/IAAn9IRHAAIAAH9g");
	var mask_3_graphics_364 = new cjs.Graphics().p("ApKD/IAAn9ISVAAIAAH9g");
	var mask_3_graphics_365 = new cjs.Graphics().p("ApwD/IAAn9ITiAAIAAH9g");
	var mask_3_graphics_366 = new cjs.Graphics().p("AqXD/IAAn9IUvAAIAAH9g");
	var mask_3_graphics_367 = new cjs.Graphics().p("Aq9D/IAAn9IV8AAIAAH9g");
	var mask_3_graphics_368 = new cjs.Graphics().p("ArkD/IAAn9IXJAAIAAH9g");
	var mask_3_graphics_369 = new cjs.Graphics().p("AsLD/IAAn9IYXAAIAAH9g");
	var mask_3_graphics_370 = new cjs.Graphics().p("AsxD/IAAn9IZjAAIAAH9g");
	var mask_3_graphics_371 = new cjs.Graphics().p("AtYD/IAAn9IaxAAIAAH9g");
	var mask_3_graphics_372 = new cjs.Graphics().p("At+D/IAAn9Ib+AAIAAH9g");
	var mask_3_graphics_373 = new cjs.Graphics().p("AumD/IAAn9IdNAAIAAH9g");
	var mask_3_graphics_374 = new cjs.Graphics().p("AvMD/IAAn9IeZAAIAAH9g");
	var mask_3_graphics_375 = new cjs.Graphics().p("AvzD/IAAn9IfnAAIAAH9g");
	var mask_3_graphics_376 = new cjs.Graphics().p("AwZD/IAAn9MAgzAAAIAAH9g");
	var mask_3_graphics_377 = new cjs.Graphics().p("AxAD/IAAn9MAiBAAAIAAH9g");
	var mask_3_graphics_378 = new cjs.Graphics().p("AxnD/IAAn9MAjPAAAIAAH9g");
	var mask_3_graphics_379 = new cjs.Graphics().p("AyND/IAAn9MAkbAAAIAAH9g");
	var mask_3_graphics_380 = new cjs.Graphics().p("Ay0D/IAAn9MAlpAAAIAAH9g");
	var mask_3_graphics_381 = new cjs.Graphics().p("AzaD/IAAn9MAm1AAAIAAH9g");
	var mask_3_graphics_382 = new cjs.Graphics().p("A0BD/IAAn9MAoDAAAIAAH9g");
	var mask_3_graphics_383 = new cjs.Graphics().p("A0oD/IAAn9MApQAAAIAAH9g");
	var mask_3_graphics_384 = new cjs.Graphics().p("A1OD/IAAn9MAqdAAAIAAH9g");
	var mask_3_graphics_385 = new cjs.Graphics().p("A11D/IAAn9MArrAAAIAAH9g");
	var mask_3_graphics_386 = new cjs.Graphics().p("A2bD/IAAn9MAs3AAAIAAH9g");
	var mask_3_graphics_387 = new cjs.Graphics().p("A3CD/IAAn9MAuFAAAIAAH9g");
	var mask_3_graphics_388 = new cjs.Graphics().p("A3pD/IAAn9MAvSAAAIAAH9g");
	var mask_3_graphics_389 = new cjs.Graphics().p("A4PD/IAAn9MAwfAAAIAAH9g");
	var mask_3_graphics_390 = new cjs.Graphics().p("A42D/IAAn9MAxsAAAIAAH9g");
	var mask_3_graphics_391 = new cjs.Graphics().p("A5cD/IAAn9MAy5AAAIAAH9g");
	var mask_3_graphics_392 = new cjs.Graphics().p("A6DD/IAAn9MA0HAAAIAAH9g");
	var mask_3_graphics_393 = new cjs.Graphics().p("A6qD/IAAn9MA1UAAAIAAH9g");
	var mask_3_graphics_394 = new cjs.Graphics().p("A7QUzIAAn+MA2hAAAIAAH+g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(351).to({graphics:mask_3_graphics_351,x:-12.125,y:133.0934}).wait(1).to({graphics:mask_3_graphics_352,x:-11.9,y:240.7}).wait(1).to({graphics:mask_3_graphics_353,x:-8.025,y:240.7}).wait(1).to({graphics:mask_3_graphics_354,x:-4.175,y:240.7}).wait(1).to({graphics:mask_3_graphics_355,x:-0.3,y:240.7}).wait(1).to({graphics:mask_3_graphics_356,x:3.55,y:240.7}).wait(1).to({graphics:mask_3_graphics_357,x:7.4,y:240.7}).wait(1).to({graphics:mask_3_graphics_358,x:11.275,y:240.7}).wait(1).to({graphics:mask_3_graphics_359,x:15.125,y:240.7}).wait(1).to({graphics:mask_3_graphics_360,x:19,y:240.7}).wait(1).to({graphics:mask_3_graphics_361,x:22.85,y:240.7}).wait(1).to({graphics:mask_3_graphics_362,x:26.7,y:240.7}).wait(1).to({graphics:mask_3_graphics_363,x:30.575,y:240.7}).wait(1).to({graphics:mask_3_graphics_364,x:34.425,y:240.7}).wait(1).to({graphics:mask_3_graphics_365,x:38.3,y:240.7}).wait(1).to({graphics:mask_3_graphics_366,x:42.15,y:240.7}).wait(1).to({graphics:mask_3_graphics_367,x:46,y:240.7}).wait(1).to({graphics:mask_3_graphics_368,x:49.875,y:240.7}).wait(1).to({graphics:mask_3_graphics_369,x:53.725,y:240.7}).wait(1).to({graphics:mask_3_graphics_370,x:57.6,y:240.7}).wait(1).to({graphics:mask_3_graphics_371,x:61.45,y:240.7}).wait(1).to({graphics:mask_3_graphics_372,x:65.3,y:240.7}).wait(1).to({graphics:mask_3_graphics_373,x:69.15,y:240.7}).wait(1).to({graphics:mask_3_graphics_374,x:73,y:240.7}).wait(1).to({graphics:mask_3_graphics_375,x:76.85,y:240.7}).wait(1).to({graphics:mask_3_graphics_376,x:80.725,y:240.7}).wait(1).to({graphics:mask_3_graphics_377,x:84.575,y:240.7}).wait(1).to({graphics:mask_3_graphics_378,x:88.45,y:240.7}).wait(1).to({graphics:mask_3_graphics_379,x:92.3,y:240.7}).wait(1).to({graphics:mask_3_graphics_380,x:96.15,y:240.7}).wait(1).to({graphics:mask_3_graphics_381,x:100.025,y:240.7}).wait(1).to({graphics:mask_3_graphics_382,x:103.875,y:240.7}).wait(1).to({graphics:mask_3_graphics_383,x:107.75,y:240.7}).wait(1).to({graphics:mask_3_graphics_384,x:111.6,y:240.7}).wait(1).to({graphics:mask_3_graphics_385,x:115.45,y:240.7}).wait(1).to({graphics:mask_3_graphics_386,x:119.325,y:240.7}).wait(1).to({graphics:mask_3_graphics_387,x:123.175,y:240.7}).wait(1).to({graphics:mask_3_graphics_388,x:127.05,y:240.7}).wait(1).to({graphics:mask_3_graphics_389,x:130.9,y:240.7}).wait(1).to({graphics:mask_3_graphics_390,x:134.75,y:240.7}).wait(1).to({graphics:mask_3_graphics_391,x:138.625,y:240.7}).wait(1).to({graphics:mask_3_graphics_392,x:142.475,y:240.7}).wait(1).to({graphics:mask_3_graphics_393,x:146.35,y:240.7}).wait(1).to({graphics:mask_3_graphics_394,x:150.2055,y:133.0934}).wait(228));

	// 图层_18
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("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");
	this.shape_3.setTransform(193.925,208.6);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(351).to({_off:false},0).wait(271));

	// 图层_6 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_282 = new cjs.Graphics().p("AhsPdIAAn+ICpAAIAAH+g");
	var mask_4_graphics_283 = new cjs.Graphics().p("AhvD/IAAn9IDfAAIAAH9g");
	var mask_4_graphics_284 = new cjs.Graphics().p("AiLD/IAAn9IEWAAIAAH9g");
	var mask_4_graphics_285 = new cjs.Graphics().p("AimD/IAAn9IFNAAIAAH9g");
	var mask_4_graphics_286 = new cjs.Graphics().p("AjBD/IAAn9IGDAAIAAH9g");
	var mask_4_graphics_287 = new cjs.Graphics().p("AjdD/IAAn9IG7AAIAAH9g");
	var mask_4_graphics_288 = new cjs.Graphics().p("Aj4D/IAAn9IHxAAIAAH9g");
	var mask_4_graphics_289 = new cjs.Graphics().p("AkTD/IAAn9IInAAIAAH9g");
	var mask_4_graphics_290 = new cjs.Graphics().p("AkuD/IAAn9IJdAAIAAH9g");
	var mask_4_graphics_291 = new cjs.Graphics().p("AlKD/IAAn9IKVAAIAAH9g");
	var mask_4_graphics_292 = new cjs.Graphics().p("AllD/IAAn9ILLAAIAAH9g");
	var mask_4_graphics_293 = new cjs.Graphics().p("AmAD/IAAn9IMBAAIAAH9g");
	var mask_4_graphics_294 = new cjs.Graphics().p("AmbD/IAAn9IM3AAIAAH9g");
	var mask_4_graphics_295 = new cjs.Graphics().p("Am3D/IAAn9INvAAIAAH9g");
	var mask_4_graphics_296 = new cjs.Graphics().p("AnSD/IAAn9IOlAAIAAH9g");
	var mask_4_graphics_297 = new cjs.Graphics().p("AntD/IAAn9IPcAAIAAH9g");
	var mask_4_graphics_298 = new cjs.Graphics().p("AoJD/IAAn9IQTAAIAAH9g");
	var mask_4_graphics_299 = new cjs.Graphics().p("AokD/IAAn9IRJAAIAAH9g");
	var mask_4_graphics_300 = new cjs.Graphics().p("Ao/D/IAAn9IR/AAIAAH9g");
	var mask_4_graphics_301 = new cjs.Graphics().p("ApaD/IAAn9IS2AAIAAH9g");
	var mask_4_graphics_302 = new cjs.Graphics().p("Ap2D/IAAn9ITtAAIAAH9g");
	var mask_4_graphics_303 = new cjs.Graphics().p("AqRD/IAAn9IUjAAIAAH9g");
	var mask_4_graphics_304 = new cjs.Graphics().p("AqsD/IAAn9IVZAAIAAH9g");
	var mask_4_graphics_305 = new cjs.Graphics().p("ArHD/IAAn9IWPAAIAAH9g");
	var mask_4_graphics_306 = new cjs.Graphics().p("ArjD/IAAn9IXHAAIAAH9g");
	var mask_4_graphics_307 = new cjs.Graphics().p("Ar+D/IAAn9IX9AAIAAH9g");
	var mask_4_graphics_308 = new cjs.Graphics().p("AsZD/IAAn9IYzAAIAAH9g");
	var mask_4_graphics_309 = new cjs.Graphics().p("As1D/IAAn9IZrAAIAAH9g");
	var mask_4_graphics_310 = new cjs.Graphics().p("AtQD/IAAn9IahAAIAAH9g");
	var mask_4_graphics_311 = new cjs.Graphics().p("AtsD/IAAn9IbYAAIAAH9g");
	var mask_4_graphics_312 = new cjs.Graphics().p("AuHD/IAAn9IcPAAIAAH9g");
	var mask_4_graphics_313 = new cjs.Graphics().p("AuiD/IAAn9IdFAAIAAH9g");
	var mask_4_graphics_314 = new cjs.Graphics().p("Au9D/IAAn9Id7AAIAAH9g");
	var mask_4_graphics_315 = new cjs.Graphics().p("AvZD/IAAn9IeyAAIAAH9g");
	var mask_4_graphics_316 = new cjs.Graphics().p("Av0D/IAAn9IfpAAIAAH9g");
	var mask_4_graphics_317 = new cjs.Graphics().p("AwPD/IAAn9MAgfAAAIAAH9g");
	var mask_4_graphics_318 = new cjs.Graphics().p("AwrD/IAAn9MAhWAAAIAAH9g");
	var mask_4_graphics_319 = new cjs.Graphics().p("AxGD/IAAn9MAiNAAAIAAH9g");
	var mask_4_graphics_320 = new cjs.Graphics().p("AxhD/IAAn9MAjDAAAIAAH9g");
	var mask_4_graphics_321 = new cjs.Graphics().p("Ax8D/IAAn9MAj5AAAIAAH9g");
	var mask_4_graphics_322 = new cjs.Graphics().p("AyYD/IAAn9MAkxAAAIAAH9g");
	var mask_4_graphics_323 = new cjs.Graphics().p("AyzD/IAAn9MAlnAAAIAAH9g");
	var mask_4_graphics_324 = new cjs.Graphics().p("AzOD/IAAn9MAmdAAAIAAH9g");
	var mask_4_graphics_325 = new cjs.Graphics().p("AzpD/IAAn9MAnTAAAIAAH9g");
	var mask_4_graphics_326 = new cjs.Graphics().p("A0FD/IAAn9MAoLAAAIAAH9g");
	var mask_4_graphics_327 = new cjs.Graphics().p("A0gD/IAAn9MApBAAAIAAH9g");
	var mask_4_graphics_328 = new cjs.Graphics().p("A07D/IAAn9MAp3AAAIAAH9g");
	var mask_4_graphics_329 = new cjs.Graphics().p("A1XD/IAAn9MAquAAAIAAH9g");
	var mask_4_graphics_330 = new cjs.Graphics().p("A1yD/IAAn9MArlAAAIAAH9g");
	var mask_4_graphics_331 = new cjs.Graphics().p("A2ND/IAAn9MAsbAAAIAAH9g");
	var mask_4_graphics_332 = new cjs.Graphics().p("A2oD/IAAn9MAtSAAAIAAH9g");
	var mask_4_graphics_333 = new cjs.Graphics().p("A3ED/IAAn9MAuJAAAIAAH9g");
	var mask_4_graphics_334 = new cjs.Graphics().p("A3fD/IAAn9MAu/AAAIAAH9g");
	var mask_4_graphics_335 = new cjs.Graphics().p("A36D/IAAn9MAv1AAAIAAH9g");
	var mask_4_graphics_336 = new cjs.Graphics().p("A4WD/IAAn9MAwtAAAIAAH9g");
	var mask_4_graphics_337 = new cjs.Graphics().p("A4xD/IAAn9MAxjAAAIAAH9g");
	var mask_4_graphics_338 = new cjs.Graphics().p("A5MD/IAAn9MAyZAAAIAAH9g");
	var mask_4_graphics_339 = new cjs.Graphics().p("A5oPdIAAn+MAzRAAAIAAH+g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(282).to({graphics:mask_4_graphics_282,x:-10.875,y:98.8934}).wait(1).to({graphics:mask_4_graphics_283,x:-10.525,y:172.3}).wait(1).to({graphics:mask_4_graphics_284,x:-7.8,y:172.3}).wait(1).to({graphics:mask_4_graphics_285,x:-5.075,y:172.3}).wait(1).to({graphics:mask_4_graphics_286,x:-2.35,y:172.3}).wait(1).to({graphics:mask_4_graphics_287,x:0.4,y:172.3}).wait(1).to({graphics:mask_4_graphics_288,x:3.125,y:172.3}).wait(1).to({graphics:mask_4_graphics_289,x:5.85,y:172.3}).wait(1).to({graphics:mask_4_graphics_290,x:8.575,y:172.3}).wait(1).to({graphics:mask_4_graphics_291,x:11.3,y:172.3}).wait(1).to({graphics:mask_4_graphics_292,x:14,y:172.3}).wait(1).to({graphics:mask_4_graphics_293,x:16.725,y:172.3}).wait(1).to({graphics:mask_4_graphics_294,x:19.45,y:172.3}).wait(1).to({graphics:mask_4_graphics_295,x:22.175,y:172.3}).wait(1).to({graphics:mask_4_graphics_296,x:24.925,y:172.3}).wait(1).to({graphics:mask_4_graphics_297,x:27.65,y:172.3}).wait(1).to({graphics:mask_4_graphics_298,x:30.375,y:172.3}).wait(1).to({graphics:mask_4_graphics_299,x:33.1,y:172.3}).wait(1).to({graphics:mask_4_graphics_300,x:35.825,y:172.3}).wait(1).to({graphics:mask_4_graphics_301,x:38.55,y:172.3}).wait(1).to({graphics:mask_4_graphics_302,x:41.275,y:172.3}).wait(1).to({graphics:mask_4_graphics_303,x:44,y:172.3}).wait(1).to({graphics:mask_4_graphics_304,x:46.725,y:172.3}).wait(1).to({graphics:mask_4_graphics_305,x:49.45,y:172.3}).wait(1).to({graphics:mask_4_graphics_306,x:52.2,y:172.3}).wait(1).to({graphics:mask_4_graphics_307,x:54.925,y:172.3}).wait(1).to({graphics:mask_4_graphics_308,x:57.65,y:172.3}).wait(1).to({graphics:mask_4_graphics_309,x:60.375,y:172.3}).wait(1).to({graphics:mask_4_graphics_310,x:63.1,y:172.3}).wait(1).to({graphics:mask_4_graphics_311,x:65.8,y:172.3}).wait(1).to({graphics:mask_4_graphics_312,x:68.525,y:172.3}).wait(1).to({graphics:mask_4_graphics_313,x:71.25,y:172.3}).wait(1).to({graphics:mask_4_graphics_314,x:73.975,y:172.3}).wait(1).to({graphics:mask_4_graphics_315,x:76.7,y:172.3}).wait(1).to({graphics:mask_4_graphics_316,x:79.45,y:172.3}).wait(1).to({graphics:mask_4_graphics_317,x:82.175,y:172.3}).wait(1).to({graphics:mask_4_graphics_318,x:84.9,y:172.3}).wait(1).to({graphics:mask_4_graphics_319,x:87.625,y:172.3}).wait(1).to({graphics:mask_4_graphics_320,x:90.35,y:172.3}).wait(1).to({graphics:mask_4_graphics_321,x:93.075,y:172.3}).wait(1).to({graphics:mask_4_graphics_322,x:95.8,y:172.3}).wait(1).to({graphics:mask_4_graphics_323,x:98.525,y:172.3}).wait(1).to({graphics:mask_4_graphics_324,x:101.25,y:172.3}).wait(1).to({graphics:mask_4_graphics_325,x:103.975,y:172.3}).wait(1).to({graphics:mask_4_graphics_326,x:106.725,y:172.3}).wait(1).to({graphics:mask_4_graphics_327,x:109.45,y:172.3}).wait(1).to({graphics:mask_4_graphics_328,x:112.175,y:172.3}).wait(1).to({graphics:mask_4_graphics_329,x:114.9,y:172.3}).wait(1).to({graphics:mask_4_graphics_330,x:117.6,y:172.3}).wait(1).to({graphics:mask_4_graphics_331,x:120.325,y:172.3}).wait(1).to({graphics:mask_4_graphics_332,x:123.05,y:172.3}).wait(1).to({graphics:mask_4_graphics_333,x:125.775,y:172.3}).wait(1).to({graphics:mask_4_graphics_334,x:128.5,y:172.3}).wait(1).to({graphics:mask_4_graphics_335,x:131.25,y:172.3}).wait(1).to({graphics:mask_4_graphics_336,x:133.975,y:172.3}).wait(1).to({graphics:mask_4_graphics_337,x:136.7,y:172.3}).wait(1).to({graphics:mask_4_graphics_338,x:139.425,y:172.3}).wait(1).to({graphics:mask_4_graphics_339,x:142.1454,y:98.8934}).wait(283));

	// 图层_19
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("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");
	this.shape_4.setTransform(193.925,208.6);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(282).to({_off:false},0).wait(340));

	// 图层_5 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_225 = new cjs.Graphics().p("AhiLWIAAn+ICpAAIAAH+g");
	var mask_5_graphics_226 = new cjs.Graphics().p("AhuD/IAAn9IDdAAIAAH9g");
	var mask_5_graphics_227 = new cjs.Graphics().p("AiID/IAAn9IERAAIAAH9g");
	var mask_5_graphics_228 = new cjs.Graphics().p("AihD/IAAn9IFEAAIAAH9g");
	var mask_5_graphics_229 = new cjs.Graphics().p("Ai7D/IAAn9IF3AAIAAH9g");
	var mask_5_graphics_230 = new cjs.Graphics().p("AjVD/IAAn9IGrAAIAAH9g");
	var mask_5_graphics_231 = new cjs.Graphics().p("AjvD/IAAn9IHfAAIAAH9g");
	var mask_5_graphics_232 = new cjs.Graphics().p("AkJD/IAAn9IITAAIAAH9g");
	var mask_5_graphics_233 = new cjs.Graphics().p("AkjD/IAAn9IJHAAIAAH9g");
	var mask_5_graphics_234 = new cjs.Graphics().p("Ak9D/IAAn9IJ7AAIAAH9g");
	var mask_5_graphics_235 = new cjs.Graphics().p("AlXD/IAAn9IKvAAIAAH9g");
	var mask_5_graphics_236 = new cjs.Graphics().p("AlwD/IAAn9ILiAAIAAH9g");
	var mask_5_graphics_237 = new cjs.Graphics().p("AmKD/IAAn9IMVAAIAAH9g");
	var mask_5_graphics_238 = new cjs.Graphics().p("AmkD/IAAn9INJAAIAAH9g");
	var mask_5_graphics_239 = new cjs.Graphics().p("Am+D/IAAn9IN9AAIAAH9g");
	var mask_5_graphics_240 = new cjs.Graphics().p("AnYD/IAAn9IOxAAIAAH9g");
	var mask_5_graphics_241 = new cjs.Graphics().p("AnyD/IAAn9IPlAAIAAH9g");
	var mask_5_graphics_242 = new cjs.Graphics().p("AoMD/IAAn9IQZAAIAAH9g");
	var mask_5_graphics_243 = new cjs.Graphics().p("AomD/IAAn9IRNAAIAAH9g");
	var mask_5_graphics_244 = new cjs.Graphics().p("Ao/D/IAAn9ISAAAIAAH9g");
	var mask_5_graphics_245 = new cjs.Graphics().p("ApZD/IAAn9ISzAAIAAH9g");
	var mask_5_graphics_246 = new cjs.Graphics().p("ApzD/IAAn9ITnAAIAAH9g");
	var mask_5_graphics_247 = new cjs.Graphics().p("AqND/IAAn9IUbAAIAAH9g");
	var mask_5_graphics_248 = new cjs.Graphics().p("AqnD/IAAn9IVPAAIAAH9g");
	var mask_5_graphics_249 = new cjs.Graphics().p("ArBD/IAAn9IWDAAIAAH9g");
	var mask_5_graphics_250 = new cjs.Graphics().p("ArbD/IAAn9IW3AAIAAH9g");
	var mask_5_graphics_251 = new cjs.Graphics().p("Ar1D/IAAn9IXrAAIAAH9g");
	var mask_5_graphics_252 = new cjs.Graphics().p("AsOD/IAAn9IYeAAIAAH9g");
	var mask_5_graphics_253 = new cjs.Graphics().p("AsoD/IAAn9IZRAAIAAH9g");
	var mask_5_graphics_254 = new cjs.Graphics().p("AtDD/IAAn9IaHAAIAAH9g");
	var mask_5_graphics_255 = new cjs.Graphics().p("AtdD/IAAn9Ia6AAIAAH9g");
	var mask_5_graphics_256 = new cjs.Graphics().p("At2D/IAAn9IbtAAIAAH9g");
	var mask_5_graphics_257 = new cjs.Graphics().p("AuQD/IAAn9IchAAIAAH9g");
	var mask_5_graphics_258 = new cjs.Graphics().p("AuqD/IAAn9IdVAAIAAH9g");
	var mask_5_graphics_259 = new cjs.Graphics().p("AvED/IAAn9IeJAAIAAH9g");
	var mask_5_graphics_260 = new cjs.Graphics().p("AveD/IAAn9Ie9AAIAAH9g");
	var mask_5_graphics_261 = new cjs.Graphics().p("Av4D/IAAn9IfxAAIAAH9g");
	var mask_5_graphics_262 = new cjs.Graphics().p("AwSD/IAAn9MAglAAAIAAH9g");
	var mask_5_graphics_263 = new cjs.Graphics().p("AwsD/IAAn9MAhYAAAIAAH9g");
	var mask_5_graphics_264 = new cjs.Graphics().p("AxFD/IAAn9MAiLAAAIAAH9g");
	var mask_5_graphics_265 = new cjs.Graphics().p("AxfD/IAAn9MAi/AAAIAAH9g");
	var mask_5_graphics_266 = new cjs.Graphics().p("Ax5D/IAAn9MAjzAAAIAAH9g");
	var mask_5_graphics_267 = new cjs.Graphics().p("AyTD/IAAn9MAknAAAIAAH9g");
	var mask_5_graphics_268 = new cjs.Graphics().p("AytD/IAAn9MAlbAAAIAAH9g");
	var mask_5_graphics_269 = new cjs.Graphics().p("AzHD/IAAn9MAmPAAAIAAH9g");
	var mask_5_graphics_270 = new cjs.Graphics().p("AzhD/IAAn9MAnDAAAIAAH9g");
	var mask_5_graphics_271 = new cjs.Graphics().p("Az7D/IAAn9MAn2AAAIAAH9g");
	var mask_5_graphics_272 = new cjs.Graphics().p("A0UD/IAAn9MAopAAAIAAH9g");
	var mask_5_graphics_273 = new cjs.Graphics().p("A0uD/IAAn9MApdAAAIAAH9g");
	var mask_5_graphics_274 = new cjs.Graphics().p("A1ID/IAAn9MAqRAAAIAAH9g");
	var mask_5_graphics_275 = new cjs.Graphics().p("A1iD/IAAn9MArFAAAIAAH9g");
	var mask_5_graphics_276 = new cjs.Graphics().p("A18D/IAAn9MAr5AAAIAAH9g");
	var mask_5_graphics_277 = new cjs.Graphics().p("A2WD/IAAn9MAstAAAIAAH9g");
	var mask_5_graphics_278 = new cjs.Graphics().p("A2wD/IAAn9MAthAAAIAAH9g");
	var mask_5_graphics_279 = new cjs.Graphics().p("A3KD/IAAn9MAuUAAAIAAH9g");
	var mask_5_graphics_280 = new cjs.Graphics().p("A3jD/IAAn9MAvHAAAIAAH9g");
	var mask_5_graphics_281 = new cjs.Graphics().p("A39D/IAAn9MAv7AAAIAAH9g");
	var mask_5_graphics_282 = new cjs.Graphics().p("A4XLWIAAn+MAwvAAAIAAH+g");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(225).to({graphics:mask_5_graphics_225,x:-9.875,y:72.6434}).wait(1).to({graphics:mask_5_graphics_226,x:-8.65,y:119.8}).wait(1).to({graphics:mask_5_graphics_227,x:-6.075,y:119.8}).wait(1).to({graphics:mask_5_graphics_228,x:-3.5,y:119.8}).wait(1).to({graphics:mask_5_graphics_229,x:-0.9,y:119.8}).wait(1).to({graphics:mask_5_graphics_230,x:1.675,y:119.8}).wait(1).to({graphics:mask_5_graphics_231,x:4.275,y:119.8}).wait(1).to({graphics:mask_5_graphics_232,x:6.85,y:119.8}).wait(1).to({graphics:mask_5_graphics_233,x:9.45,y:119.8}).wait(1).to({graphics:mask_5_graphics_234,x:12.025,y:119.8}).wait(1).to({graphics:mask_5_graphics_235,x:14.625,y:119.8}).wait(1).to({graphics:mask_5_graphics_236,x:17.2,y:119.8}).wait(1).to({graphics:mask_5_graphics_237,x:19.8,y:119.8}).wait(1).to({graphics:mask_5_graphics_238,x:22.375,y:119.8}).wait(1).to({graphics:mask_5_graphics_239,x:24.975,y:119.8}).wait(1).to({graphics:mask_5_graphics_240,x:27.55,y:119.8}).wait(1).to({graphics:mask_5_graphics_241,x:30.15,y:119.8}).wait(1).to({graphics:mask_5_graphics_242,x:32.725,y:119.8}).wait(1).to({graphics:mask_5_graphics_243,x:35.325,y:119.8}).wait(1).to({graphics:mask_5_graphics_244,x:37.9,y:119.8}).wait(1).to({graphics:mask_5_graphics_245,x:40.5,y:119.8}).wait(1).to({graphics:mask_5_graphics_246,x:43.075,y:119.8}).wait(1).to({graphics:mask_5_graphics_247,x:45.675,y:119.8}).wait(1).to({graphics:mask_5_graphics_248,x:48.25,y:119.8}).wait(1).to({graphics:mask_5_graphics_249,x:50.85,y:119.8}).wait(1).to({graphics:mask_5_graphics_250,x:53.425,y:119.8}).wait(1).to({graphics:mask_5_graphics_251,x:56.025,y:119.8}).wait(1).to({graphics:mask_5_graphics_252,x:58.6,y:119.8}).wait(1).to({graphics:mask_5_graphics_253,x:61.2,y:119.8}).wait(1).to({graphics:mask_5_graphics_254,x:63.75,y:119.8}).wait(1).to({graphics:mask_5_graphics_255,x:66.35,y:119.8}).wait(1).to({graphics:mask_5_graphics_256,x:68.925,y:119.8}).wait(1).to({graphics:mask_5_graphics_257,x:71.525,y:119.8}).wait(1).to({graphics:mask_5_graphics_258,x:74.1,y:119.8}).wait(1).to({graphics:mask_5_graphics_259,x:76.7,y:119.8}).wait(1).to({graphics:mask_5_graphics_260,x:79.275,y:119.8}).wait(1).to({graphics:mask_5_graphics_261,x:81.875,y:119.8}).wait(1).to({graphics:mask_5_graphics_262,x:84.45,y:119.8}).wait(1).to({graphics:mask_5_graphics_263,x:87.05,y:119.8}).wait(1).to({graphics:mask_5_graphics_264,x:89.625,y:119.8}).wait(1).to({graphics:mask_5_graphics_265,x:92.225,y:119.8}).wait(1).to({graphics:mask_5_graphics_266,x:94.8,y:119.8}).wait(1).to({graphics:mask_5_graphics_267,x:97.4,y:119.8}).wait(1).to({graphics:mask_5_graphics_268,x:99.975,y:119.8}).wait(1).to({graphics:mask_5_graphics_269,x:102.575,y:119.8}).wait(1).to({graphics:mask_5_graphics_270,x:105.15,y:119.8}).wait(1).to({graphics:mask_5_graphics_271,x:107.75,y:119.8}).wait(1).to({graphics:mask_5_graphics_272,x:110.325,y:119.8}).wait(1).to({graphics:mask_5_graphics_273,x:112.925,y:119.8}).wait(1).to({graphics:mask_5_graphics_274,x:115.5,y:119.8}).wait(1).to({graphics:mask_5_graphics_275,x:118.1,y:119.8}).wait(1).to({graphics:mask_5_graphics_276,x:120.675,y:119.8}).wait(1).to({graphics:mask_5_graphics_277,x:123.275,y:119.8}).wait(1).to({graphics:mask_5_graphics_278,x:125.85,y:119.8}).wait(1).to({graphics:mask_5_graphics_279,x:128.45,y:119.8}).wait(1).to({graphics:mask_5_graphics_280,x:131.025,y:119.8}).wait(1).to({graphics:mask_5_graphics_281,x:133.6,y:119.8}).wait(1).to({graphics:mask_5_graphics_282,x:136.2217,y:72.6434}).wait(340));

	// 图层_20
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("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");
	this.shape_5.setTransform(193.925,208.6);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(225).to({_off:false},0).wait(397));

	// 图层_4 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_161 = new cjs.Graphics().p("AhsHkIAAn9ICpAAIAAH9g");
	var mask_6_graphics_162 = new cjs.Graphics().p("AiAD/IAAn9IEBAAIAAH9g");
	var mask_6_graphics_163 = new cjs.Graphics().p("AisD/IAAn9IFZAAIAAH9g");
	var mask_6_graphics_164 = new cjs.Graphics().p("AjYD/IAAn9IGxAAIAAH9g");
	var mask_6_graphics_165 = new cjs.Graphics().p("AkED/IAAn9IIJAAIAAH9g");
	var mask_6_graphics_166 = new cjs.Graphics().p("AkwD/IAAn9IJhAAIAAH9g");
	var mask_6_graphics_167 = new cjs.Graphics().p("AlcD/IAAn9IK5AAIAAH9g");
	var mask_6_graphics_168 = new cjs.Graphics().p("AmID/IAAn9IMRAAIAAH9g");
	var mask_6_graphics_169 = new cjs.Graphics().p("Am1D/IAAn9INrAAIAAH9g");
	var mask_6_graphics_170 = new cjs.Graphics().p("AnhD/IAAn9IPCAAIAAH9g");
	var mask_6_graphics_171 = new cjs.Graphics().p("AoND/IAAn9IQaAAIAAH9g");
	var mask_6_graphics_172 = new cjs.Graphics().p("Ao5D/IAAn9IRzAAIAAH9g");
	var mask_6_graphics_173 = new cjs.Graphics().p("AplD/IAAn9ITLAAIAAH9g");
	var mask_6_graphics_174 = new cjs.Graphics().p("AqRD/IAAn9IUjAAIAAH9g");
	var mask_6_graphics_175 = new cjs.Graphics().p("Aq9D/IAAn9IV7AAIAAH9g");
	var mask_6_graphics_176 = new cjs.Graphics().p("ArpD/IAAn9IXTAAIAAH9g");
	var mask_6_graphics_177 = new cjs.Graphics().p("AsVD/IAAn9IYrAAIAAH9g");
	var mask_6_graphics_178 = new cjs.Graphics().p("AtBD/IAAn9IaDAAIAAH9g");
	var mask_6_graphics_179 = new cjs.Graphics().p("AttD/IAAn9IbbAAIAAH9g");
	var mask_6_graphics_180 = new cjs.Graphics().p("AuZD/IAAn9IczAAIAAH9g");
	var mask_6_graphics_181 = new cjs.Graphics().p("AvFD/IAAn9IeLAAIAAH9g");
	var mask_6_graphics_182 = new cjs.Graphics().p("AvxD/IAAn9IfjAAIAAH9g");
	var mask_6_graphics_183 = new cjs.Graphics().p("AwdD/IAAn9MAg7AAAIAAH9g");
	var mask_6_graphics_184 = new cjs.Graphics().p("AxJD/IAAn9MAiUAAAIAAH9g");
	var mask_6_graphics_185 = new cjs.Graphics().p("Ax1D/IAAn9MAjsAAAIAAH9g");
	var mask_6_graphics_186 = new cjs.Graphics().p("AyhD/IAAn9MAlDAAAIAAH9g");
	var mask_6_graphics_187 = new cjs.Graphics().p("AzND/IAAn9MAmbAAAIAAH9g");
	var mask_6_graphics_188 = new cjs.Graphics().p("Az5D/IAAn9MAnzAAAIAAH9g");
	var mask_6_graphics_189 = new cjs.Graphics().p("A0mD/IAAn9MApNAAAIAAH9g");
	var mask_6_graphics_190 = new cjs.Graphics().p("A1SD/IAAn9MAqlAAAIAAH9g");
	var mask_6_graphics_191 = new cjs.Graphics().p("A1+D/IAAn9MAr9AAAIAAH9g");
	var mask_6_graphics_192 = new cjs.Graphics().p("A2qD/IAAn9MAtVAAAIAAH9g");
	var mask_6_graphics_193 = new cjs.Graphics().p("A3WD/IAAn9MAutAAAIAAH9g");
	var mask_6_graphics_194 = new cjs.Graphics().p("A4CD/IAAn9MAwFAAAIAAH9g");
	var mask_6_graphics_195 = new cjs.Graphics().p("A4uD/IAAn9MAxdAAAIAAH9g");
	var mask_6_graphics_196 = new cjs.Graphics().p("A5aD/IAAn9MAy1AAAIAAH9g");
	var mask_6_graphics_197 = new cjs.Graphics().p("A6GD/IAAn9MA0NAAAIAAH9g");
	var mask_6_graphics_198 = new cjs.Graphics().p("A6yD/IAAn9MA1lAAAIAAH9g");
	var mask_6_graphics_199 = new cjs.Graphics().p("A7eD/IAAn9MA29AAAIAAH9g");
	var mask_6_graphics_200 = new cjs.Graphics().p("A8KD/IAAn9MA4VAAAIAAH9g");
	var mask_6_graphics_201 = new cjs.Graphics().p("A82D/IAAn9MA5tAAAIAAH9g");
	var mask_6_graphics_202 = new cjs.Graphics().p("A9iD/IAAn9MA7FAAAIAAH9g");
	var mask_6_graphics_203 = new cjs.Graphics().p("A+OD/IAAn9MA8dAAAIAAH9g");
	var mask_6_graphics_204 = new cjs.Graphics().p("A+6D/IAAn9MA92AAAIAAH9g");
	var mask_6_graphics_205 = new cjs.Graphics().p("A/mD/IAAn9MA/NAAAIAAH9g");
	var mask_6_graphics_206 = new cjs.Graphics().p("EggSAHkIAAn9MBAlAAAIAAH9g");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(161).to({graphics:mask_6_graphics_161,x:-10.875,y:48.3934}).wait(1).to({graphics:mask_6_graphics_162,x:-8.85,y:71.3}).wait(1).to({graphics:mask_6_graphics_163,x:-4.45,y:71.3}).wait(1).to({graphics:mask_6_graphics_164,x:-0.025,y:71.3}).wait(1).to({graphics:mask_6_graphics_165,x:4.375,y:71.3}).wait(1).to({graphics:mask_6_graphics_166,x:8.775,y:71.3}).wait(1).to({graphics:mask_6_graphics_167,x:13.175,y:71.3}).wait(1).to({graphics:mask_6_graphics_168,x:17.575,y:71.3}).wait(1).to({graphics:mask_6_graphics_169,x:22,y:71.3}).wait(1).to({graphics:mask_6_graphics_170,x:26.4,y:71.3}).wait(1).to({graphics:mask_6_graphics_171,x:30.8,y:71.3}).wait(1).to({graphics:mask_6_graphics_172,x:35.2,y:71.3}).wait(1).to({graphics:mask_6_graphics_173,x:39.6,y:71.3}).wait(1).to({graphics:mask_6_graphics_174,x:44.025,y:71.3}).wait(1).to({graphics:mask_6_graphics_175,x:48.425,y:71.3}).wait(1).to({graphics:mask_6_graphics_176,x:52.825,y:71.3}).wait(1).to({graphics:mask_6_graphics_177,x:57.225,y:71.3}).wait(1).to({graphics:mask_6_graphics_178,x:61.625,y:71.3}).wait(1).to({graphics:mask_6_graphics_179,x:66.05,y:71.3}).wait(1).to({graphics:mask_6_graphics_180,x:70.45,y:71.3}).wait(1).to({graphics:mask_6_graphics_181,x:74.85,y:71.3}).wait(1).to({graphics:mask_6_graphics_182,x:79.25,y:71.3}).wait(1).to({graphics:mask_6_graphics_183,x:83.65,y:71.3}).wait(1).to({graphics:mask_6_graphics_184,x:88.05,y:71.3}).wait(1).to({graphics:mask_6_graphics_185,x:92.45,y:71.3}).wait(1).to({graphics:mask_6_graphics_186,x:96.85,y:71.3}).wait(1).to({graphics:mask_6_graphics_187,x:101.25,y:71.3}).wait(1).to({graphics:mask_6_graphics_188,x:105.65,y:71.3}).wait(1).to({graphics:mask_6_graphics_189,x:110.075,y:71.3}).wait(1).to({graphics:mask_6_graphics_190,x:114.475,y:71.3}).wait(1).to({graphics:mask_6_graphics_191,x:118.875,y:71.3}).wait(1).to({graphics:mask_6_graphics_192,x:123.275,y:71.3}).wait(1).to({graphics:mask_6_graphics_193,x:127.675,y:71.3}).wait(1).to({graphics:mask_6_graphics_194,x:132.1,y:71.3}).wait(1).to({graphics:mask_6_graphics_195,x:136.5,y:71.3}).wait(1).to({graphics:mask_6_graphics_196,x:140.9,y:71.3}).wait(1).to({graphics:mask_6_graphics_197,x:145.3,y:71.3}).wait(1).to({graphics:mask_6_graphics_198,x:149.7,y:71.3}).wait(1).to({graphics:mask_6_graphics_199,x:154.125,y:71.3}).wait(1).to({graphics:mask_6_graphics_200,x:158.525,y:71.3}).wait(1).to({graphics:mask_6_graphics_201,x:162.925,y:71.3}).wait(1).to({graphics:mask_6_graphics_202,x:167.325,y:71.3}).wait(1).to({graphics:mask_6_graphics_203,x:171.725,y:71.3}).wait(1).to({graphics:mask_6_graphics_204,x:176.15,y:71.3}).wait(1).to({graphics:mask_6_graphics_205,x:180.55,y:71.3}).wait(1).to({graphics:mask_6_graphics_206,x:184.9646,y:48.3934}).wait(416));

	// 图层_13
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("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");
	this.shape_6.setTransform(193.925,208.6);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(161).to({_off:false},0).wait(461));

	// 图层_3 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_120 = new cjs.Graphics().p("Ah8EOIAAn9ICpAAIAAH9g");
	var mask_7_graphics_121 = new cjs.Graphics().p("Ah+D/IAAn9ID9AAIAAH9g");
	var mask_7_graphics_122 = new cjs.Graphics().p("AioD/IAAn9IFRAAIAAH9g");
	var mask_7_graphics_123 = new cjs.Graphics().p("AjSD/IAAn9IGlAAIAAH9g");
	var mask_7_graphics_124 = new cjs.Graphics().p("Aj8D/IAAn9IH4AAIAAH9g");
	var mask_7_graphics_125 = new cjs.Graphics().p("AklD/IAAn9IJLAAIAAH9g");
	var mask_7_graphics_126 = new cjs.Graphics().p("AlPD/IAAn9IKfAAIAAH9g");
	var mask_7_graphics_127 = new cjs.Graphics().p("Al5D/IAAn9ILzAAIAAH9g");
	var mask_7_graphics_128 = new cjs.Graphics().p("AmjD/IAAn9INHAAIAAH9g");
	var mask_7_graphics_129 = new cjs.Graphics().p("AnND/IAAn9IObAAIAAH9g");
	var mask_7_graphics_130 = new cjs.Graphics().p("An3D/IAAn9IPuAAIAAH9g");
	var mask_7_graphics_131 = new cjs.Graphics().p("AogD/IAAn9IRBAAIAAH9g");
	var mask_7_graphics_132 = new cjs.Graphics().p("ApKD/IAAn9ISVAAIAAH9g");
	var mask_7_graphics_133 = new cjs.Graphics().p("Ap0D/IAAn9ITpAAIAAH9g");
	var mask_7_graphics_134 = new cjs.Graphics().p("AqeD/IAAn9IU9AAIAAH9g");
	var mask_7_graphics_135 = new cjs.Graphics().p("ArID/IAAn9IWRAAIAAH9g");
	var mask_7_graphics_136 = new cjs.Graphics().p("AryD/IAAn9IXlAAIAAH9g");
	var mask_7_graphics_137 = new cjs.Graphics().p("AsbD/IAAn9IY3AAIAAH9g");
	var mask_7_graphics_138 = new cjs.Graphics().p("AtFD/IAAn9IaLAAIAAH9g");
	var mask_7_graphics_139 = new cjs.Graphics().p("AtvD/IAAn9IbfAAIAAH9g");
	var mask_7_graphics_140 = new cjs.Graphics().p("AuZD/IAAn9IczAAIAAH9g");
	var mask_7_graphics_141 = new cjs.Graphics().p("AvDD/IAAn9IeHAAIAAH9g");
	var mask_7_graphics_142 = new cjs.Graphics().p("AvtD/IAAn9IfbAAIAAH9g");
	var mask_7_graphics_143 = new cjs.Graphics().p("AwXD/IAAn9MAgvAAAIAAH9g");
	var mask_7_graphics_144 = new cjs.Graphics().p("AxAD/IAAn9MAiBAAAIAAH9g");
	var mask_7_graphics_145 = new cjs.Graphics().p("AxqD/IAAn9MAjVAAAIAAH9g");
	var mask_7_graphics_146 = new cjs.Graphics().p("AyUD/IAAn9MAkpAAAIAAH9g");
	var mask_7_graphics_147 = new cjs.Graphics().p("Ay+D/IAAn9MAl9AAAIAAH9g");
	var mask_7_graphics_148 = new cjs.Graphics().p("AzoD/IAAn9MAnQAAAIAAH9g");
	var mask_7_graphics_149 = new cjs.Graphics().p("A0SD/IAAn9MAolAAAIAAH9g");
	var mask_7_graphics_150 = new cjs.Graphics().p("A07D/IAAn9MAp3AAAIAAH9g");
	var mask_7_graphics_151 = new cjs.Graphics().p("A1lD/IAAn9MArLAAAIAAH9g");
	var mask_7_graphics_152 = new cjs.Graphics().p("A2PD/IAAn9MAsfAAAIAAH9g");
	var mask_7_graphics_153 = new cjs.Graphics().p("A25D/IAAn9MAtzAAAIAAH9g");
	var mask_7_graphics_154 = new cjs.Graphics().p("A3jD/IAAn9MAvGAAAIAAH9g");
	var mask_7_graphics_155 = new cjs.Graphics().p("A4ND/IAAn9MAwbAAAIAAH9g");
	var mask_7_graphics_156 = new cjs.Graphics().p("A42D/IAAn9MAxtAAAIAAH9g");
	var mask_7_graphics_157 = new cjs.Graphics().p("A5gD/IAAn9MAzBAAAIAAH9g");
	var mask_7_graphics_158 = new cjs.Graphics().p("A6KEOIAAn9MA0VAAAIAAH9g");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(120).to({graphics:mask_7_graphics_120,x:-12.5,y:27.0184}).wait(1).to({graphics:mask_7_graphics_121,x:-12.325,y:28.55}).wait(1).to({graphics:mask_7_graphics_122,x:-8.125,y:28.55}).wait(1).to({graphics:mask_7_graphics_123,x:-3.95,y:28.55}).wait(1).to({graphics:mask_7_graphics_124,x:0.25,y:28.55}).wait(1).to({graphics:mask_7_graphics_125,x:4.425,y:28.55}).wait(1).to({graphics:mask_7_graphics_126,x:8.6,y:28.55}).wait(1).to({graphics:mask_7_graphics_127,x:12.8,y:28.55}).wait(1).to({graphics:mask_7_graphics_128,x:16.975,y:28.55}).wait(1).to({graphics:mask_7_graphics_129,x:21.15,y:28.55}).wait(1).to({graphics:mask_7_graphics_130,x:25.35,y:28.55}).wait(1).to({graphics:mask_7_graphics_131,x:29.525,y:28.55}).wait(1).to({graphics:mask_7_graphics_132,x:33.7,y:28.55}).wait(1).to({graphics:mask_7_graphics_133,x:37.9,y:28.55}).wait(1).to({graphics:mask_7_graphics_134,x:42.075,y:28.55}).wait(1).to({graphics:mask_7_graphics_135,x:46.25,y:28.55}).wait(1).to({graphics:mask_7_graphics_136,x:50.45,y:28.55}).wait(1).to({graphics:mask_7_graphics_137,x:54.625,y:28.55}).wait(1).to({graphics:mask_7_graphics_138,x:58.825,y:28.55}).wait(1).to({graphics:mask_7_graphics_139,x:63,y:28.55}).wait(1).to({graphics:mask_7_graphics_140,x:67.175,y:28.55}).wait(1).to({graphics:mask_7_graphics_141,x:71.375,y:28.55}).wait(1).to({graphics:mask_7_graphics_142,x:75.55,y:28.55}).wait(1).to({graphics:mask_7_graphics_143,x:79.75,y:28.55}).wait(1).to({graphics:mask_7_graphics_144,x:83.925,y:28.55}).wait(1).to({graphics:mask_7_graphics_145,x:88.1,y:28.55}).wait(1).to({graphics:mask_7_graphics_146,x:92.3,y:28.55}).wait(1).to({graphics:mask_7_graphics_147,x:96.475,y:28.55}).wait(1).to({graphics:mask_7_graphics_148,x:100.65,y:28.55}).wait(1).to({graphics:mask_7_graphics_149,x:104.85,y:28.55}).wait(1).to({graphics:mask_7_graphics_150,x:109.025,y:28.55}).wait(1).to({graphics:mask_7_graphics_151,x:113.2,y:28.55}).wait(1).to({graphics:mask_7_graphics_152,x:117.4,y:28.55}).wait(1).to({graphics:mask_7_graphics_153,x:121.575,y:28.55}).wait(1).to({graphics:mask_7_graphics_154,x:125.75,y:28.55}).wait(1).to({graphics:mask_7_graphics_155,x:129.95,y:28.55}).wait(1).to({graphics:mask_7_graphics_156,x:134.125,y:28.55}).wait(1).to({graphics:mask_7_graphics_157,x:138.325,y:28.55}).wait(1).to({graphics:mask_7_graphics_158,x:142.4917,y:27.0184}).wait(464));

	// 图层_17
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("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");
	this.shape_7.setTransform(193.925,208.6);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(120).to({_off:false},0).wait(502));

	// 图层_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("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");
	this.shape_8.setTransform(193.925,208.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(622));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,390.3,409.2);
p.frameBounds = [rect, rect=new cjs.Rectangle(2.4,14.9,383.2,387.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	var mask_graphics_5 = new cjs.Graphics().p("AFKEEIAAoHIB4AAIAAIHg");
	var mask_graphics_6 = new cjs.Graphics().p("AhsEEIAAoHIDZAAIAAIHg");
	var mask_graphics_7 = new cjs.Graphics().p("AidEEIAAoHIE7AAIAAIHg");
	var mask_graphics_8 = new cjs.Graphics().p("AjOEEIAAoHIGdAAIAAIHg");
	var mask_graphics_9 = new cjs.Graphics().p("Aj/EEIAAoHIH/AAIAAIHg");
	var mask_graphics_10 = new cjs.Graphics().p("AkwEEIAAoHIJhAAIAAIHg");
	var mask_graphics_11 = new cjs.Graphics().p("AlhEEIAAoHILDAAIAAIHg");
	var mask_graphics_12 = new cjs.Graphics().p("AmSEEIAAoHIMlAAIAAIHg");
	var mask_graphics_13 = new cjs.Graphics().p("AnDEEIAAoHIOHAAIAAIHg");
	var mask_graphics_14 = new cjs.Graphics().p("An0EEIAAoHIPpAAIAAIHg");
	var mask_graphics_15 = new cjs.Graphics().p("AomEEIAAoHIRMAAIAAIHg");
	var mask_graphics_16 = new cjs.Graphics().p("ApWEEIAAoHISuAAIAAIHg");
	var mask_graphics_17 = new cjs.Graphics().p("AqIEEIAAoHIUQAAIAAIHg");
	var mask_graphics_18 = new cjs.Graphics().p("Aq5EEIAAoHIVzAAIAAIHg");
	var mask_graphics_19 = new cjs.Graphics().p("ArqEEIAAoHIXVAAIAAIHg");
	var mask_graphics_20 = new cjs.Graphics().p("AsbEEIAAoHIY3AAIAAIHg");
	var mask_graphics_21 = new cjs.Graphics().p("AtMEEIAAoHIaZAAIAAIHg");
	var mask_graphics_22 = new cjs.Graphics().p("At9EEIAAoHIb7AAIAAIHg");
	var mask_graphics_23 = new cjs.Graphics().p("AuuEEIAAoHIddAAIAAIHg");
	var mask_graphics_24 = new cjs.Graphics().p("AvfEEIAAoHIe/AAIAAIHg");
	var mask_graphics_25 = new cjs.Graphics().p("AwQEEIAAoHMAghAAAIAAIHg");
	var mask_graphics_26 = new cjs.Graphics().p("AxBEEIAAoHMAiDAAAIAAIHg");
	var mask_graphics_27 = new cjs.Graphics().p("AxyEEIAAoHMAjlAAAIAAIHg");
	var mask_graphics_28 = new cjs.Graphics().p("AyjEEIAAoHMAlHAAAIAAIHg");
	var mask_graphics_29 = new cjs.Graphics().p("AzUEEIAAoHMAmpAAAIAAIHg");
	var mask_graphics_30 = new cjs.Graphics().p("A0FEEIAAoHMAoLAAAIAAIHg");
	var mask_graphics_31 = new cjs.Graphics().p("A02EEIAAoHMAptAAAIAAIHg");
	var mask_graphics_32 = new cjs.Graphics().p("A1nEEIAAoHMArPAAAIAAIHg");
	var mask_graphics_33 = new cjs.Graphics().p("A2YEEIAAoHMAsxAAAIAAIHg");
	var mask_graphics_34 = new cjs.Graphics().p("A3JEEIAAoHMAuTAAAIAAIHg");
	var mask_graphics_35 = new cjs.Graphics().p("A36EEIAAoHMAv1AAAIAAIHg");
	var mask_graphics_36 = new cjs.Graphics().p("A4sEEIAAoHMAxZAAAIAAIHg");
	var mask_graphics_37 = new cjs.Graphics().p("A5dEEIAAoHMAy6AAAIAAIHg");
	var mask_graphics_38 = new cjs.Graphics().p("A6NEEIAAoHMA0cAAAIAAIHg");
	var mask_graphics_39 = new cjs.Graphics().p("A6/EEIAAoHMA1/AAAIAAIHg");
	var mask_graphics_40 = new cjs.Graphics().p("A7wEEIAAoHMA3hAAAIAAIHg");
	var mask_graphics_41 = new cjs.Graphics().p("A8hEEIAAoHMA5DAAAIAAIHg");
	var mask_graphics_42 = new cjs.Graphics().p("A9SEEIAAoHMA6lAAAIAAIHg");
	var mask_graphics_43 = new cjs.Graphics().p("A+DEEIAAoHMA8HAAAIAAIHg");
	var mask_graphics_44 = new cjs.Graphics().p("A+0EEIAAoHMA9pAAAIAAIHg");
	var mask_graphics_45 = new cjs.Graphics().p("A/lEEIAAoHMA/LAAAIAAIHg");
	var mask_graphics_46 = new cjs.Graphics().p("EggWAEEIAAoHMBAtAAAIAAIHg");
	var mask_graphics_47 = new cjs.Graphics().p("EghHAEEIAAoHMBCPAAAIAAIHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:45.025,y:13.05}).wait(1).to({graphics:mask_graphics_6,x:89,y:13.15}).wait(1).to({graphics:mask_graphics_7,x:93.925,y:13.3}).wait(1).to({graphics:mask_graphics_8,x:98.875,y:13.4}).wait(1).to({graphics:mask_graphics_9,x:103.825,y:13.55}).wait(1).to({graphics:mask_graphics_10,x:108.775,y:13.65}).wait(1).to({graphics:mask_graphics_11,x:113.675,y:13.75}).wait(1).to({graphics:mask_graphics_12,x:118.625,y:13.9}).wait(1).to({graphics:mask_graphics_13,x:123.575,y:14}).wait(1).to({graphics:mask_graphics_14,x:128.5,y:14.1}).wait(1).to({graphics:mask_graphics_15,x:133.45,y:14.25}).wait(1).to({graphics:mask_graphics_16,x:138.4,y:14.35}).wait(1).to({graphics:mask_graphics_17,x:143.35,y:14.5}).wait(1).to({graphics:mask_graphics_18,x:148.275,y:14.6}).wait(1).to({graphics:mask_graphics_19,x:153.225,y:14.7}).wait(1).to({graphics:mask_graphics_20,x:158.175,y:14.85}).wait(1).to({graphics:mask_graphics_21,x:163.075,y:14.95}).wait(1).to({graphics:mask_graphics_22,x:168.025,y:15.05}).wait(1).to({graphics:mask_graphics_23,x:172.975,y:15.2}).wait(1).to({graphics:mask_graphics_24,x:177.925,y:15.3}).wait(1).to({graphics:mask_graphics_25,x:182.85,y:15.45}).wait(1).to({graphics:mask_graphics_26,x:187.8,y:15.55}).wait(1).to({graphics:mask_graphics_27,x:192.75,y:15.65}).wait(1).to({graphics:mask_graphics_28,x:197.675,y:15.8}).wait(1).to({graphics:mask_graphics_29,x:202.625,y:15.9}).wait(1).to({graphics:mask_graphics_30,x:207.575,y:16.05}).wait(1).to({graphics:mask_graphics_31,x:212.525,y:16.15}).wait(1).to({graphics:mask_graphics_32,x:217.425,y:16.25}).wait(1).to({graphics:mask_graphics_33,x:222.375,y:16.4}).wait(1).to({graphics:mask_graphics_34,x:227.325,y:16.5}).wait(1).to({graphics:mask_graphics_35,x:232.25,y:16.6}).wait(1).to({graphics:mask_graphics_36,x:237.2,y:16.75}).wait(1).to({graphics:mask_graphics_37,x:242.15,y:16.85}).wait(1).to({graphics:mask_graphics_38,x:247.1,y:17}).wait(1).to({graphics:mask_graphics_39,x:252.025,y:17.1}).wait(1).to({graphics:mask_graphics_40,x:256.975,y:17.2}).wait(1).to({graphics:mask_graphics_41,x:261.925,y:17.35}).wait(1).to({graphics:mask_graphics_42,x:266.825,y:17.45}).wait(1).to({graphics:mask_graphics_43,x:271.775,y:17.55}).wait(1).to({graphics:mask_graphics_44,x:276.725,y:17.7}).wait(1).to({graphics:mask_graphics_45,x:281.675,y:17.8}).wait(1).to({graphics:mask_graphics_46,x:286.6,y:17.95}).wait(1).to({graphics:mask_graphics_47,x:291.55,y:18.05}).wait(83));

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgLCHQgNABgIgDQgHgCgCgHQgCgHAAgNQAAgOACgGQACgHAHgDQAIgCANAAQAMAAAHACQAHADADAHQACAGAAAOQAAANgCAHQgDAHgHACQgGACgJAAIgEAAgAgiAvIAAgRQgBgLADgJQADgIAGgHQAHgIALgJIALgMQAFgFABgGQACgGAAgIQAAgRgJgFQgIgGgWAAQgMAAgNACQgMACgKADIAAgvQALgDAPgCQAPgCARAAQAeAAATAGQAUAFAJAPQAJAPAAAaQAAASgDALQgEAMgHAJQgIAJgMAJQgMAIgGAGQgGAGgCAFQgCAGAAAGIAAAJg");
	this.shape.setTransform(476.375,16.2292);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("ABgBpIAAh9QABgVgHgJQgIgJgQABQgRgBgJAHQgKAHgEARIAACFIg2AAIAAh9QABgVgIgJQgHgJgQABQgQgBgJAHQgKAGgDAPIAACIIg3AAIAAjMIA3AAIAAAXQAIgOAOgHQAOgGAWAAQAWAAAPAHQANAHAHAPQAIgQARgGQARgHAXAAQAigBARASQARASAAAmIAACHg");
	this.shape_1.setTransform(449.8,19.0993);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AABBqQggABgWgKQgWgJgMgXQgMgYAAgpQAAgoAMgXQAMgYAWgJQAWgKAgABQAfgBAXAKQAWAJAMAYQALAXABAoQgBApgLAYQgMAXgWAJQgWAJgdAAIgDAAgAgZg6QgKAGgEAOQgEAOAAAYQAAAZAEAOQAFAOAJAGQAKAGAQAAQAQAAAKgGQAJgGAEgOQAFgOAAgZQAAgYgFgOQgEgOgJgGQgLgGgPAAQgQAAgKAGg");
	this.shape_2.setTransform(420.05,19.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AABBqQggABgWgKQgXgJgLgXQgMgYgBgpQABgoAMgXQALgYAXgJQAWgKAgABQAfgBAXAKQAWAJALAYQAMAXABAoQgBApgMAYQgLAXgWAJQgWAJgdAAIgDAAgAgZg6QgKAGgEAOQgEAOAAAYQAAAZAEAOQAFAOAJAGQAKAGAQAAQAQAAAKgGQAJgGAEgOQAEgOABgZQAAgYgFgOQgEgOgJgGQgKgGgQAAQgRAAgJAGg");
	this.shape_3.setTransform(396.55,19.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Ag7BoIAAjLIA3AAIAAAkQAGgRAJgIQAKgJAKgEQAMgDAMAAIAEAAIgCAyIgEAAQgNAAgMADQgMAEgJAJQgHAKgEARIAABzg");
	this.shape_4.setTransform(378.3,19.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ag7BoIAAjLIA4AAIAAAkQAEgRAKgIQAJgJAMgEQALgDAMAAIAFAAIgDAyIgEAAQgNAAgNADQgLAEgJAJQgHAKgDARIAABzg");
	this.shape_5.setTransform(353.3,19.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgXBoQgZAAgPgHQgPgIgIgPQgGgQAAgWIAAiLIA4AAIAAB8QgBAUAHAKQAHAJATAAQAQAAAKgHQAMgGAEgQIAAiGIA3AAIAADMIgyAAIgEgZQgJAPgPAHQgPAGgUAAIgDAAg");
	this.shape_6.setTransform(332.5,19.4767);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAABqQgfABgWgKQgXgJgMgXQgLgYgBgpQABgoALgXQAMgYAXgJQAWgKAfABQAggBAWAKQAXAJALAYQAMAXAAAoQAAApgMAYQgLAXgXAJQgVAJgdAAIgEAAgAgZg6QgKAGgEAOQgEAOAAAYQAAAZAEAOQAFAOAJAGQAKAGAPAAQARAAAJgGQAKgGAFgOQADgOAAgZQAAgYgEgOQgEgOgKgGQgKgGgQAAQgQAAgJAGg");
	this.shape_7.setTransform(308.85,19.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhRBdQARAAALgEQALgCAGgIQAGgGACgLIhPjJIA9AAIAvCRIACAAIAuiRIA7AAIhFC4QgKAcgKASQgKATgMALQgOAKgSAFQgTAEgbABg");
	this.shape_8.setTransform(286.075,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAmBoIAAh9QABgUgHgJQgHgJgUAAQgQAAgLAHQgLAGgEAPIAACHIg3AAIAAjLIA3AAIAAAYQAIgPAQgGQAQgIAXAAQAZAAAPAIQAPAIAGAQQAHAPgBAWIAACLg");
	this.shape_9.setTransform(253.3,19.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgbCSIAAjMIA2AAIAADMgAAAhXQgLAAgHgCQgHgCgCgGQgDgGAAgNQAAgNADgGQACgGAHgCQAHgCALAAQANAAAGACQAHACADAGQACAGAAANQAAANgCAGQgDAGgHACQgFACgJAAIgFAAg");
	this.shape_10.setTransform(235.775,14.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgIBpQgSAAgRgBQgQgCgOgDIAAguQAPAFAQACQAQADAPAAQAQAAAJgEQAIgFAAgMQAAgIgDgFQgDgFgJgDQgHgEgRgDQgVgGgMgHQgMgFgFgLQgEgLAAgSQAAgdATgQQATgPArgBQARAAAQACQAPACAIADIgCAqIgOgDIgTgDIgTgBQgRAAgHAEQgIAEABALQgBAGADAEQADADAJADIAXAHQAWAFAMAIQANAHAFALQAEAMAAATQAAAjgWAPQgUAPgjAAIgFgBg");
	this.shape_11.setTransform(211.325,19.2031);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgPA4IgLhvIA1AAIgKBvg");
	this.shape_12.setTransform(197.65,6.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgGB6QgPgGgHgOQgHgPABgbIAAhfIgbAAIAAgrIAbAAIAAgxIA2AAIAAAxIAqAAIAAArIgqAAIAABaQgBASAFAGQAFAGAOAAIAJAAIAIgBIAAAqIgNABIgOABIgEAAQgWAAgNgGg");
	this.shape_13.setTransform(186.425,16.9519);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgXBqQgcAAgTgPQgTgPgLgdQgDgKgBgLIgCgZIAAgIQAAgbALgWQAMgWAWgQQAKgGAKgCQAKgCAKgBIAKAAQASAAANAHQANAFAHANIAAABIAAAAIABAAIABgFIABgCIA0AAIABAAIABABIgDBEQAAArADAcQADAcAFANIABADIABAEIgCABIg0AAIgDgHIgHgVIgBAAQgHAQgMAHQgNAIgSAAgAgig0QgNAMgHAYIgCALIgBAHQAAAXAIAOQAIAQAQAGIALADIAMABQAOAAAKgFQAKgFAGgKQADgJACgLQACgMAAgOQAAgWgGgOQgFgOgKgHQgEgDgHgBQgHgCgHAAIgBAAQgTAAgNAMg");
	this.shape_14.setTransform(167.275,19.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AAnCQIAAh+QAAgTgHgJQgIgJgTAAQgQAAgLAHQgLAGgFAQIAACGIg3AAIAAkfIA3AAIAABsQAJgOAQgIQAQgHAXAAQAZAAAPAIQAOAIAHAPQAGAPAAAWIAACMg");
	this.shape_15.setTransform(144.2,15.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AApCEIgpimIgBAAIgqCmIhIAAIg5kHIA8AAIAmDCIACAAIApioIBBAAIAmCoIADAAIAmjCIA8AAIg8EHg");
	this.shape_16.setTransform(114.025,16.375);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(125));

	// 图层_1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#008379").s().p("AgLCHQgNABgIgDQgHgCgCgHQgCgHAAgNQAAgOACgGQACgHAHgDQAIgCANAAQAMAAAHACQAHADADAHQACAGAAAOQAAANgCAHQgDAHgHACQgGACgJAAIgEAAgAgiAvIAAgRQgBgLADgJQADgIAGgHQAHgIALgJIALgMQAFgFABgGQACgGAAgIQAAgRgJgFQgIgGgWAAQgMAAgNACQgMACgKADIAAgvQALgDAPgCQAPgCARAAQAeAAATAGQAUAFAJAPQAJAPAAAaQAAASgDALQgEAMgHAJQgIAJgMAJQgMAIgGAGQgGAGgCAFQgCAGAAAGIAAAJg");
	this.shape_17.setTransform(476.375,16.2292);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#008379").s().p("ABgBpIAAh9QABgVgHgJQgIgJgQABQgRgBgJAHQgKAHgEARIAACFIg2AAIAAh9QABgVgIgJQgHgJgQABQgQgBgJAHQgKAGgDAPIAACIIg3AAIAAjMIA3AAIAAAXQAIgOAOgHQAOgGAWAAQAWAAAPAHQANAHAHAPQAIgQARgGQARgHAXAAQAigBARASQARASAAAmIAACHg");
	this.shape_18.setTransform(449.8,19.0993);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#008379").s().p("AABBqQggABgWgKQgWgJgMgXQgMgYAAgpQAAgoAMgXQAMgYAWgJQAWgKAgABQAfgBAXAKQAWAJAMAYQALAXABAoQgBApgLAYQgMAXgWAJQgWAJgdAAIgDAAgAgZg6QgKAGgEAOQgEAOAAAYQAAAZAEAOQAFAOAJAGQAKAGAQAAQAQAAAKgGQAJgGAEgOQAFgOAAgZQAAgYgFgOQgEgOgJgGQgLgGgPAAQgQAAgKAGg");
	this.shape_19.setTransform(420.05,19.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#008379").s().p("AABBqQggABgWgKQgXgJgLgXQgMgYgBgpQABgoAMgXQALgYAXgJQAWgKAgABQAfgBAXAKQAWAJALAYQAMAXABAoQgBApgMAYQgLAXgWAJQgWAJgdAAIgDAAgAgZg6QgKAGgEAOQgEAOAAAYQAAAZAEAOQAFAOAJAGQAKAGAQAAQAQAAAKgGQAJgGAEgOQAEgOABgZQAAgYgFgOQgEgOgJgGQgKgGgQAAQgRAAgJAGg");
	this.shape_20.setTransform(396.55,19.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#008379").s().p("Ag7BoIAAjLIA3AAIAAAkQAGgRAJgIQAKgJAKgEQAMgDAMAAIAEAAIgCAyIgEAAQgNAAgMADQgMAEgJAJQgHAKgEARIAABzg");
	this.shape_21.setTransform(378.3,19.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#008379").s().p("Ag7BoIAAjLIA4AAIAAAkQAEgRAKgIQAJgJAMgEQALgDAMAAIAFAAIgDAyIgEAAQgNAAgNADQgLAEgJAJQgHAKgDARIAABzg");
	this.shape_22.setTransform(353.3,19.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#008379").s().p("AgXBoQgZAAgPgHQgPgIgIgPQgGgQAAgWIAAiLIA4AAIAAB8QgBAUAHAKQAHAJATAAQAQAAAKgHQAMgGAEgQIAAiGIA3AAIAADMIgyAAIgEgZQgJAPgPAHQgPAGgUAAIgDAAg");
	this.shape_23.setTransform(332.5,19.4767);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#008379").s().p("AAABqQgfABgWgKQgXgJgMgXQgLgYgBgpQABgoALgXQAMgYAXgJQAWgKAfABQAggBAWAKQAXAJALAYQAMAXAAAoQAAApgMAYQgLAXgXAJQgVAJgdAAIgEAAgAgZg6QgKAGgEAOQgEAOAAAYQAAAZAEAOQAFAOAJAGQAKAGAPAAQARAAAJgGQAKgGAFgOQADgOAAgZQAAgYgEgOQgEgOgKgGQgKgGgQAAQgQAAgJAGg");
	this.shape_24.setTransform(308.85,19.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#008379").s().p("AhRBdQARAAALgEQALgCAGgIQAGgGACgLIhPjJIA9AAIAvCRIACAAIAuiRIA7AAIhFC4QgKAcgKASQgKATgMALQgOAKgSAFQgTAEgbABg");
	this.shape_25.setTransform(286.075,23.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#008379").s().p("AAmBoIAAh9QABgUgHgJQgHgJgUAAQgQAAgLAHQgLAGgEAPIAACHIg3AAIAAjLIA3AAIAAAYQAIgPAQgGQAQgIAXAAQAZAAAPAIQAPAIAGAQQAHAPgBAWIAACLg");
	this.shape_26.setTransform(253.3,19.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#008379").s().p("AgbCSIAAjMIA2AAIAADMgAAAhXQgLAAgHgCQgHgCgCgGQgDgGAAgNQAAgNADgGQACgGAHgCQAHgCALAAQANAAAGACQAHACADAGQACAGAAANQAAANgCAGQgDAGgHACQgFACgJAAIgFAAg");
	this.shape_27.setTransform(235.775,14.975);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#008379").s().p("AgIBpQgSAAgRgBQgQgCgOgDIAAguQAPAFAQACQAQADAPAAQAQAAAJgEQAIgFAAgMQAAgIgDgFQgDgFgJgDQgHgEgRgDQgVgGgMgHQgMgFgFgLQgEgLAAgSQAAgdATgQQATgPArgBQARAAAQACQAPACAIADIgCAqIgOgDIgTgDIgTgBQgRAAgHAEQgIAEABALQgBAGADAEQADADAJADIAXAHQAWAFAMAIQANAHAFALQAEAMAAATQAAAjgWAPQgUAPgjAAIgFgBg");
	this.shape_28.setTransform(211.325,19.2031);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#008379").s().p("AgPA4IgLhvIA1AAIgKBvg");
	this.shape_29.setTransform(197.65,6.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#008379").s().p("AgGB6QgPgGgHgOQgHgPABgbIAAhfIgbAAIAAgrIAbAAIAAgxIA2AAIAAAxIAqAAIAAArIgqAAIAABaQgBASAFAGQAFAGAOAAIAJAAIAIgBIAAAqIgNABIgOABIgEAAQgWAAgNgGg");
	this.shape_30.setTransform(186.425,16.9519);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#008379").s().p("AgXBqQgcAAgTgPQgTgPgLgdQgDgKgBgLIgCgZIAAgIQAAgbALgWQAMgWAWgQQAKgGAKgCQAKgCAKgBIAKAAQASAAANAHQANAFAHANIAAABIAAAAIABAAIABgFIABgCIA0AAIABAAIABABIgDBEQAAArADAcQADAcAFANIABADIABAEIgCABIg0AAIgDgHIgHgVIgBAAQgHAQgMAHQgNAIgSAAgAgig0QgNAMgHAYIgCALIgBAHQAAAXAIAOQAIAQAQAGIALADIAMABQAOAAAKgFQAKgFAGgKQADgJACgLQACgMAAgOQAAgWgGgOQgFgOgKgHQgEgDgHgBQgHgCgHAAIgBAAQgTAAgNAMg");
	this.shape_31.setTransform(167.275,19.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#008379").s().p("AAnCQIAAh+QAAgTgHgJQgIgJgTAAQgQAAgLAHQgLAGgFAQIAACGIg3AAIAAkfIA3AAIAABsQAJgOAQgIQAQgHAXAAQAZAAAPAIQAOAIAHAPQAGAPAAAWIAACMg");
	this.shape_32.setTransform(144.2,15.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#008379").s().p("AApCEIgpimIgBAAIgqCmIhIAAIg5kHIA8AAIAmDCIACAAIApioIBBAAIAmCoIADAAIAmjCIA8AAIg8EHg");
	this.shape_33.setTransform(114.025,16.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(130));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(94,-17.6,392.9,63);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.instance.setTransform(599.95,-46.55,1,1,0,0,0,290.2,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(623));

	// 元件 2
	this.instance_1 = new lib.元件3("synched",0);
	this.instance_1.setTransform(367.2,191.65,1,1,0,0,0,195.2,204.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(623));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApmFJQj/iJAAjAQAAjAD/iIQD/iIFnAAQFoAAD/CIQD/CIAADAQAADAj/CJQj/CIloAAQlnAAj/iIg");
	this.shape.setTransform(684,-3.45);

	this.instance_2 = new lib.位图4();
	this.instance_2.setTransform(602,-23,0.5388,0.5388);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.shape}]}).wait(623));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(174.4,-83.4,943.9,502.8);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this._movieClip.setTransform(602.45,383.9,1,1,0,0,0,561,219);

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
		{src:"images/index_atlas_1.png?1733368696826", id:"index_atlas_1"}
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