(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,777,933]]}
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

	// 图层_18 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_829 = new cjs.Graphics().p("AhwE5IAApxIDhAAIAAJxg");
	var mask_graphics_830 = new cjs.Graphics().p("AiEE5IAApxIEJAAIAAJxg");
	var mask_graphics_831 = new cjs.Graphics().p("AiYE5IAApxIEwAAIAAJxg");
	var mask_graphics_832 = new cjs.Graphics().p("AirE5IAApxIFXAAIAAJxg");
	var mask_graphics_833 = new cjs.Graphics().p("Ai/E5IAApxIF+AAIAAJxg");
	var mask_graphics_834 = new cjs.Graphics().p("AjSE5IAApxIGlAAIAAJxg");
	var mask_graphics_835 = new cjs.Graphics().p("AjmE5IAApxIHNAAIAAJxg");
	var mask_graphics_836 = new cjs.Graphics().p("Aj5E5IAApxIHzAAIAAJxg");
	var mask_graphics_837 = new cjs.Graphics().p("AkNE5IAApxIIbAAIAAJxg");
	var mask_graphics_838 = new cjs.Graphics().p("AkhE5IAApxIJDAAIAAJxg");
	var mask_graphics_839 = new cjs.Graphics().p("Ak0E5IAApxIJqAAIAAJxg");
	var mask_graphics_840 = new cjs.Graphics().p("AlIE5IAApxIKRAAIAAJxg");
	var mask_graphics_841 = new cjs.Graphics().p("AlbE5IAApxIK3AAIAAJxg");
	var mask_graphics_842 = new cjs.Graphics().p("AlvE5IAApxILfAAIAAJxg");
	var mask_graphics_843 = new cjs.Graphics().p("AmDE5IAApxIMHAAIAAJxg");
	var mask_graphics_844 = new cjs.Graphics().p("AmWE5IAApxIMtAAIAAJxg");
	var mask_graphics_845 = new cjs.Graphics().p("AmqE5IAApxINVAAIAAJxg");
	var mask_graphics_846 = new cjs.Graphics().p("Am9E5IAApxIN7AAIAAJxg");
	var mask_graphics_853 = new cjs.Graphics().p("Am9E5IAApxIN7AAIAAJxg");
	var mask_graphics_854 = new cjs.Graphics().p("Am9E5IAApxIN7AAIAAJxg");
	var mask_graphics_855 = new cjs.Graphics().p("AnVE5IAApxIOrAAIAAJxg");
	var mask_graphics_856 = new cjs.Graphics().p("AnuE5IAApxIPdAAIAAJxg");
	var mask_graphics_857 = new cjs.Graphics().p("AoGE5IAApxIQNAAIAAJxg");
	var mask_graphics_858 = new cjs.Graphics().p("AoeE5IAApxIQ9AAIAAJxg");
	var mask_graphics_859 = new cjs.Graphics().p("Ao2E5IAApxIRtAAIAAJxg");
	var mask_graphics_860 = new cjs.Graphics().p("ApOE5IAApxISdAAIAAJxg");
	var mask_graphics_861 = new cjs.Graphics().p("ApmE5IAApxITNAAIAAJxg");
	var mask_graphics_862 = new cjs.Graphics().p("Ap+E5IAApxIT9AAIAAJxg");
	var mask_graphics_863 = new cjs.Graphics().p("AqWE5IAApxIUtAAIAAJxg");
	var mask_graphics_864 = new cjs.Graphics().p("AquE5IAApxIVdAAIAAJxg");
	var mask_graphics_865 = new cjs.Graphics().p("ArGE5IAApxIWNAAIAAJxg");
	var mask_graphics_866 = new cjs.Graphics().p("AreE5IAApxIW9AAIAAJxg");
	var mask_graphics_867 = new cjs.Graphics().p("Ar2E5IAApxIXuAAIAAJxg");
	var mask_graphics_868 = new cjs.Graphics().p("AsPE5IAApxIYfAAIAAJxg");
	var mask_graphics_869 = new cjs.Graphics().p("AsnE5IAApxIZPAAIAAJxg");
	var mask_graphics_870 = new cjs.Graphics().p("As/E5IAApxIZ/AAIAAJxg");
	var mask_graphics_871 = new cjs.Graphics().p("AtXE5IAApxIavAAIAAJxg");
	var mask_graphics_872 = new cjs.Graphics().p("AtvE5IAApxIbfAAIAAJxg");
	var mask_graphics_873 = new cjs.Graphics().p("AuHE5IAApxIcPAAIAAJxg");
	var mask_graphics_874 = new cjs.Graphics().p("AufE5IAApxIc/AAIAAJxg");
	var mask_graphics_875 = new cjs.Graphics().p("Au3E5IAApxIdvAAIAAJxg");
	var mask_graphics_876 = new cjs.Graphics().p("AvPE5IAApxIegAAIAAJxg");
	var mask_graphics_877 = new cjs.Graphics().p("AvnE5IAApxIfPAAIAAJxg");
	var mask_graphics_878 = new cjs.Graphics().p("Av/E5IAApxMAgAAAAIAAJxg");
	var mask_graphics_879 = new cjs.Graphics().p("AwYE5IAApxMAgxAAAIAAJxg");
	var mask_graphics_880 = new cjs.Graphics().p("AwwE5IAApxMAhhAAAIAAJxg");
	var mask_graphics_881 = new cjs.Graphics().p("AxIE5IAApxMAiRAAAIAAJxg");
	var mask_graphics_882 = new cjs.Graphics().p("AxgE5IAApxMAjBAAAIAAJxg");
	var mask_graphics_883 = new cjs.Graphics().p("Ax4E5IAApxMAjxAAAIAAJxg");
	var mask_graphics_884 = new cjs.Graphics().p("AyQE5IAApxMAkhAAAIAAJxg");
	var mask_graphics_885 = new cjs.Graphics().p("AyoE5IAApxMAlRAAAIAAJxg");
	var mask_graphics_886 = new cjs.Graphics().p("AzAE5IAApxMAmBAAAIAAJxg");
	var mask_graphics_887 = new cjs.Graphics().p("AzYE5IAApxMAmxAAAIAAJxg");
	var mask_graphics_888 = new cjs.Graphics().p("AzwE5IAApxMAnhAAAIAAJxg");
	var mask_graphics_889 = new cjs.Graphics().p("A0IE5IAApxMAoRAAAIAAJxg");
	var mask_graphics_890 = new cjs.Graphics().p("A0hE5IAApxMApDAAAIAAJxg");
	var mask_graphics_891 = new cjs.Graphics().p("A05E5IAApxMApzAAAIAAJxg");
	var mask_graphics_892 = new cjs.Graphics().p("A1RE5IAApxMAqjAAAIAAJxg");
	var mask_graphics_893 = new cjs.Graphics().p("A1pE5IAApxMArTAAAIAAJxg");
	var mask_graphics_894 = new cjs.Graphics().p("A2BE5IAApxMAsDAAAIAAJxg");
	var mask_graphics_895 = new cjs.Graphics().p("A2ZE5IAApxMAszAAAIAAJxg");
	var mask_graphics_896 = new cjs.Graphics().p("A2xE5IAApxMAtjAAAIAAJxg");
	var mask_graphics_897 = new cjs.Graphics().p("A3KE5IAApxMAuVAAAIAAJxg");
	var mask_graphics_898 = new cjs.Graphics().p("A3iE5IAApxMAvEAAAIAAJxg");
	var mask_graphics_899 = new cjs.Graphics().p("A36E5IAApxMAv0AAAIAAJxg");
	var mask_graphics_900 = new cjs.Graphics().p("A4SE5IAApxMAwlAAAIAAJxg");
	var mask_graphics_901 = new cjs.Graphics().p("A4qE5IAApxMAxVAAAIAAJxg");
	var mask_graphics_902 = new cjs.Graphics().p("A5CE5IAApxMAyFAAAIAAJxg");
	var mask_graphics_903 = new cjs.Graphics().p("A5aE5IAApxMAy1AAAIAAJxg");
	var mask_graphics_904 = new cjs.Graphics().p("A5yE5IAApxMAzlAAAIAAJxg");
	var mask_graphics_905 = new cjs.Graphics().p("A6KE5IAApxMA0VAAAIAAJxg");
	var mask_graphics_906 = new cjs.Graphics().p("A6iE5IAApxMA1FAAAIAAJxg");
	var mask_graphics_907 = new cjs.Graphics().p("A66E5IAApxMA11AAAIAAJxg");
	var mask_graphics_908 = new cjs.Graphics().p("A7SE5IAApxMA2lAAAIAAJxg");
	var mask_graphics_909 = new cjs.Graphics().p("A7rE5IAApxMA3XAAAIAAJxg");
	var mask_graphics_910 = new cjs.Graphics().p("A8DE5IAApxMA4GAAAIAAJxg");
	var mask_graphics_911 = new cjs.Graphics().p("A8bE5IAApxMA43AAAIAAJxg");
	var mask_graphics_912 = new cjs.Graphics().p("A8zE5IAApxMA5nAAAIAAJxg");
	var mask_graphics_913 = new cjs.Graphics().p("A9LE5IAApxMA6XAAAIAAJxg");
	var mask_graphics_914 = new cjs.Graphics().p("A9jE5IAApxMA7HAAAIAAJxg");
	var mask_graphics_915 = new cjs.Graphics().p("A97E5IAApxMA73AAAIAAJxg");
	var mask_graphics_916 = new cjs.Graphics().p("A+TE5IAApxMA8nAAAIAAJxg");
	var mask_graphics_917 = new cjs.Graphics().p("A+rE5IAApxMA9XAAAIAAJxg");
	var mask_graphics_918 = new cjs.Graphics().p("A/DE5IAApxMA+HAAAIAAJxg");
	var mask_graphics_919 = new cjs.Graphics().p("A/bE5IAApxMA+3AAAIAAJxg");
	var mask_graphics_920 = new cjs.Graphics().p("A/0E5IAApxMA/pAAAIAAJxg");
	var mask_graphics_921 = new cjs.Graphics().p("EggMAE5IAApxMBAYAAAIAAJxg");
	var mask_graphics_922 = new cjs.Graphics().p("EggkAE5IAApxMBBJAAAIAAJxg");
	var mask_graphics_923 = new cjs.Graphics().p("Egg8AE5IAApxMBB5AAAIAAJxg");
	var mask_graphics_924 = new cjs.Graphics().p("EghUAE5IAApxMBCpAAAIAAJxg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(829).to({graphics:mask_graphics_829,x:-16.625,y:420.575}).wait(1).to({graphics:mask_graphics_830,x:-14.675,y:420.575}).wait(1).to({graphics:mask_graphics_831,x:-12.7,y:420.575}).wait(1).to({graphics:mask_graphics_832,x:-10.75,y:420.575}).wait(1).to({graphics:mask_graphics_833,x:-8.8,y:420.575}).wait(1).to({graphics:mask_graphics_834,x:-6.825,y:420.575}).wait(1).to({graphics:mask_graphics_835,x:-4.875,y:420.575}).wait(1).to({graphics:mask_graphics_836,x:-2.925,y:420.575}).wait(1).to({graphics:mask_graphics_837,x:-0.95,y:420.575}).wait(1).to({graphics:mask_graphics_838,x:0.975,y:420.575}).wait(1).to({graphics:mask_graphics_839,x:2.95,y:420.575}).wait(1).to({graphics:mask_graphics_840,x:4.9,y:420.575}).wait(1).to({graphics:mask_graphics_841,x:6.85,y:420.575}).wait(1).to({graphics:mask_graphics_842,x:8.825,y:420.575}).wait(1).to({graphics:mask_graphics_843,x:10.775,y:420.575}).wait(1).to({graphics:mask_graphics_844,x:12.725,y:420.575}).wait(1).to({graphics:mask_graphics_845,x:14.7,y:420.575}).wait(1).to({graphics:mask_graphics_846,x:16.65,y:420.575}).wait(7).to({graphics:mask_graphics_853,x:16.65,y:420.575}).wait(1).to({graphics:mask_graphics_854,x:16.65,y:420.575}).wait(1).to({graphics:mask_graphics_855,x:19.05,y:420.575}).wait(1).to({graphics:mask_graphics_856,x:21.475,y:420.575}).wait(1).to({graphics:mask_graphics_857,x:23.875,y:420.575}).wait(1).to({graphics:mask_graphics_858,x:26.275,y:420.575}).wait(1).to({graphics:mask_graphics_859,x:28.7,y:420.575}).wait(1).to({graphics:mask_graphics_860,x:31.1,y:420.575}).wait(1).to({graphics:mask_graphics_861,x:33.5,y:420.575}).wait(1).to({graphics:mask_graphics_862,x:35.925,y:420.575}).wait(1).to({graphics:mask_graphics_863,x:38.325,y:420.575}).wait(1).to({graphics:mask_graphics_864,x:40.725,y:420.575}).wait(1).to({graphics:mask_graphics_865,x:43.15,y:420.575}).wait(1).to({graphics:mask_graphics_866,x:45.55,y:420.575}).wait(1).to({graphics:mask_graphics_867,x:47.95,y:420.575}).wait(1).to({graphics:mask_graphics_868,x:50.375,y:420.575}).wait(1).to({graphics:mask_graphics_869,x:52.775,y:420.575}).wait(1).to({graphics:mask_graphics_870,x:55.2,y:420.575}).wait(1).to({graphics:mask_graphics_871,x:57.6,y:420.575}).wait(1).to({graphics:mask_graphics_872,x:60,y:420.575}).wait(1).to({graphics:mask_graphics_873,x:62.4,y:420.575}).wait(1).to({graphics:mask_graphics_874,x:64.825,y:420.575}).wait(1).to({graphics:mask_graphics_875,x:67.225,y:420.575}).wait(1).to({graphics:mask_graphics_876,x:69.65,y:420.575}).wait(1).to({graphics:mask_graphics_877,x:72.05,y:420.575}).wait(1).to({graphics:mask_graphics_878,x:74.45,y:420.575}).wait(1).to({graphics:mask_graphics_879,x:76.875,y:420.575}).wait(1).to({graphics:mask_graphics_880,x:79.275,y:420.575}).wait(1).to({graphics:mask_graphics_881,x:81.675,y:420.575}).wait(1).to({graphics:mask_graphics_882,x:84.1,y:420.575}).wait(1).to({graphics:mask_graphics_883,x:86.5,y:420.575}).wait(1).to({graphics:mask_graphics_884,x:88.9,y:420.575}).wait(1).to({graphics:mask_graphics_885,x:91.325,y:420.575}).wait(1).to({graphics:mask_graphics_886,x:93.725,y:420.575}).wait(1).to({graphics:mask_graphics_887,x:96.125,y:420.575}).wait(1).to({graphics:mask_graphics_888,x:98.55,y:420.575}).wait(1).to({graphics:mask_graphics_889,x:100.95,y:420.575}).wait(1).to({graphics:mask_graphics_890,x:103.325,y:420.575}).wait(1).to({graphics:mask_graphics_891,x:105.75,y:420.575}).wait(1).to({graphics:mask_graphics_892,x:108.15,y:420.575}).wait(1).to({graphics:mask_graphics_893,x:110.55,y:420.575}).wait(1).to({graphics:mask_graphics_894,x:112.975,y:420.575}).wait(1).to({graphics:mask_graphics_895,x:115.375,y:420.575}).wait(1).to({graphics:mask_graphics_896,x:117.775,y:420.575}).wait(1).to({graphics:mask_graphics_897,x:120.2,y:420.575}).wait(1).to({graphics:mask_graphics_898,x:122.6,y:420.575}).wait(1).to({graphics:mask_graphics_899,x:125,y:420.575}).wait(1).to({graphics:mask_graphics_900,x:127.425,y:420.575}).wait(1).to({graphics:mask_graphics_901,x:129.825,y:420.575}).wait(1).to({graphics:mask_graphics_902,x:132.225,y:420.575}).wait(1).to({graphics:mask_graphics_903,x:134.65,y:420.575}).wait(1).to({graphics:mask_graphics_904,x:137.05,y:420.575}).wait(1).to({graphics:mask_graphics_905,x:139.475,y:420.575}).wait(1).to({graphics:mask_graphics_906,x:141.875,y:420.575}).wait(1).to({graphics:mask_graphics_907,x:144.275,y:420.575}).wait(1).to({graphics:mask_graphics_908,x:146.675,y:420.575}).wait(1).to({graphics:mask_graphics_909,x:149.1,y:420.575}).wait(1).to({graphics:mask_graphics_910,x:151.5,y:420.575}).wait(1).to({graphics:mask_graphics_911,x:153.925,y:420.575}).wait(1).to({graphics:mask_graphics_912,x:156.325,y:420.575}).wait(1).to({graphics:mask_graphics_913,x:158.725,y:420.575}).wait(1).to({graphics:mask_graphics_914,x:161.15,y:420.575}).wait(1).to({graphics:mask_graphics_915,x:163.55,y:420.575}).wait(1).to({graphics:mask_graphics_916,x:165.95,y:420.575}).wait(1).to({graphics:mask_graphics_917,x:168.375,y:420.575}).wait(1).to({graphics:mask_graphics_918,x:170.775,y:420.575}).wait(1).to({graphics:mask_graphics_919,x:173.175,y:420.575}).wait(1).to({graphics:mask_graphics_920,x:175.6,y:420.575}).wait(1).to({graphics:mask_graphics_921,x:178,y:420.575}).wait(1).to({graphics:mask_graphics_922,x:180.4,y:420.575}).wait(1).to({graphics:mask_graphics_923,x:182.825,y:420.575}).wait(1).to({graphics:mask_graphics_924,x:185.225,y:420.575}).wait(18).to({graphics:null,x:0,y:0}).wait(117));

	// 图层_17
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("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");
	this.shape.setTransform(237.65,231.85);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(829).to({_off:false},0).wait(164).to({_off:true},1).wait(65));

	// 图层_16 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_713 = new cjs.Graphics().p("AhWE5IAApxICtAAIAAJxg");
	var mask_1_graphics_714 = new cjs.Graphics().p("AhwE5IAApxIDhAAIAAJxg");
	var mask_1_graphics_715 = new cjs.Graphics().p("AiKE5IAApxIEVAAIAAJxg");
	var mask_1_graphics_716 = new cjs.Graphics().p("AikE5IAApxIFJAAIAAJxg");
	var mask_1_graphics_717 = new cjs.Graphics().p("Ai/E5IAApxIF/AAIAAJxg");
	var mask_1_graphics_718 = new cjs.Graphics().p("AjZE5IAApxIGzAAIAAJxg");
	var mask_1_graphics_719 = new cjs.Graphics().p("AjzE5IAApxIHnAAIAAJxg");
	var mask_1_graphics_720 = new cjs.Graphics().p("AkNE5IAApxIIbAAIAAJxg");
	var mask_1_graphics_721 = new cjs.Graphics().p("AknE5IAApxIJPAAIAAJxg");
	var mask_1_graphics_722 = new cjs.Graphics().p("AlBE5IAApxIKDAAIAAJxg");
	var mask_1_graphics_723 = new cjs.Graphics().p("AlbE5IAApxIK3AAIAAJxg");
	var mask_1_graphics_724 = new cjs.Graphics().p("Al2E5IAApxILtAAIAAJxg");
	var mask_1_graphics_725 = new cjs.Graphics().p("AmQE5IAApxIMhAAIAAJxg");
	var mask_1_graphics_726 = new cjs.Graphics().p("AmqE5IAApxINVAAIAAJxg");
	var mask_1_graphics_727 = new cjs.Graphics().p("AnEE5IAApxIOJAAIAAJxg");
	var mask_1_graphics_728 = new cjs.Graphics().p("AneE5IAApxIO9AAIAAJxg");
	var mask_1_graphics_729 = new cjs.Graphics().p("An5E5IAApxIPzAAIAAJxg");
	var mask_1_graphics_730 = new cjs.Graphics().p("AoTE5IAApxIQnAAIAAJxg");
	var mask_1_graphics_731 = new cjs.Graphics().p("AotE5IAApxIRbAAIAAJxg");
	var mask_1_graphics_732 = new cjs.Graphics().p("ApHE5IAApxISPAAIAAJxg");
	var mask_1_graphics_733 = new cjs.Graphics().p("AphE5IAApxITDAAIAAJxg");
	var mask_1_graphics_734 = new cjs.Graphics().p("Ap7E5IAApxIT3AAIAAJxg");
	var mask_1_graphics_735 = new cjs.Graphics().p("AqVE5IAApxIUrAAIAAJxg");
	var mask_1_graphics_736 = new cjs.Graphics().p("AqwE5IAApxIVhAAIAAJxg");
	var mask_1_graphics_737 = new cjs.Graphics().p("ArKE5IAApxIWVAAIAAJxg");
	var mask_1_graphics_738 = new cjs.Graphics().p("ArkE5IAApxIXJAAIAAJxg");
	var mask_1_graphics_739 = new cjs.Graphics().p("Ar+E5IAApxIX9AAIAAJxg");
	var mask_1_graphics_740 = new cjs.Graphics().p("AsYE5IAApxIYxAAIAAJxg");
	var mask_1_graphics_741 = new cjs.Graphics().p("AsyE5IAApxIZlAAIAAJxg");
	var mask_1_graphics_742 = new cjs.Graphics().p("AtNE5IAApxIabAAIAAJxg");
	var mask_1_graphics_743 = new cjs.Graphics().p("AtnE5IAApxIbPAAIAAJxg");
	var mask_1_graphics_744 = new cjs.Graphics().p("AuBE5IAApxIcDAAIAAJxg");
	var mask_1_graphics_745 = new cjs.Graphics().p("AubE5IAApxIc3AAIAAJxg");
	var mask_1_graphics_746 = new cjs.Graphics().p("Au1E5IAApxIdrAAIAAJxg");
	var mask_1_graphics_747 = new cjs.Graphics().p("AvPE5IAApxIefAAIAAJxg");
	var mask_1_graphics_748 = new cjs.Graphics().p("AvpE5IAApxIfTAAIAAJxg");
	var mask_1_graphics_749 = new cjs.Graphics().p("AwEE5IAApxMAgJAAAIAAJxg");
	var mask_1_graphics_750 = new cjs.Graphics().p("AweE5IAApxMAg9AAAIAAJxg");
	var mask_1_graphics_751 = new cjs.Graphics().p("Aw4E5IAApxMAhxAAAIAAJxg");
	var mask_1_graphics_772 = new cjs.Graphics().p("Aw4E5IAApxMAhxAAAIAAJxg");
	var mask_1_graphics_773 = new cjs.Graphics().p("AxjE5IAApxMAjHAAAIAAJxg");
	var mask_1_graphics_774 = new cjs.Graphics().p("AyOE5IAApxMAkdAAAIAAJxg");
	var mask_1_graphics_775 = new cjs.Graphics().p("Ay5E5IAApxMAl0AAAIAAJxg");
	var mask_1_graphics_776 = new cjs.Graphics().p("AzkE5IAApxMAnJAAAIAAJxg");
	var mask_1_graphics_777 = new cjs.Graphics().p("A0QE5IAApxMAohAAAIAAJxg");
	var mask_1_graphics_778 = new cjs.Graphics().p("A07E5IAApxMAp3AAAIAAJxg");
	var mask_1_graphics_779 = new cjs.Graphics().p("A1mE5IAApxMArNAAAIAAJxg");
	var mask_1_graphics_780 = new cjs.Graphics().p("A2RE5IAApxMAsjAAAIAAJxg");
	var mask_1_graphics_781 = new cjs.Graphics().p("A28E5IAApxMAt5AAAIAAJxg");
	var mask_1_graphics_782 = new cjs.Graphics().p("A3nE5IAApxMAvPAAAIAAJxg");
	var mask_1_graphics_783 = new cjs.Graphics().p("A4SE5IAApxMAwlAAAIAAJxg");
	var mask_1_graphics_784 = new cjs.Graphics().p("A49E5IAApxMAx8AAAIAAJxg");
	var mask_1_graphics_785 = new cjs.Graphics().p("A5pE5IAApxMAzTAAAIAAJxg");
	var mask_1_graphics_786 = new cjs.Graphics().p("A6UE5IAApxMA0pAAAIAAJxg");
	var mask_1_graphics_787 = new cjs.Graphics().p("A6/E5IAApxMA1/AAAIAAJxg");
	var mask_1_graphics_788 = new cjs.Graphics().p("A7qE5IAApxMA3VAAAIAAJxg");
	var mask_1_graphics_789 = new cjs.Graphics().p("A8VE5IAApxMA4rAAAIAAJxg");
	var mask_1_graphics_790 = new cjs.Graphics().p("A9BE5IAApxMA6DAAAIAAJxg");
	var mask_1_graphics_791 = new cjs.Graphics().p("A9sE5IAApxMA7YAAAIAAJxg");
	var mask_1_graphics_792 = new cjs.Graphics().p("A+XE5IAApxMA8vAAAIAAJxg");
	var mask_1_graphics_793 = new cjs.Graphics().p("A/CE5IAApxMA+FAAAIAAJxg");
	var mask_1_graphics_794 = new cjs.Graphics().p("A/tE5IAApxMA/bAAAIAAJxg");
	var mask_1_graphics_795 = new cjs.Graphics().p("EggYAE5IAApxMBAxAAAIAAJxg");
	var mask_1_graphics_796 = new cjs.Graphics().p("EghDAE5IAApxMBCHAAAIAAJxg");
	var mask_1_graphics_797 = new cjs.Graphics().p("EghuAE5IAApxMBDdAAAIAAJxg");
	var mask_1_graphics_798 = new cjs.Graphics().p("EgiaAE5IAApxMBE0AAAIAAJxg");
	var mask_1_graphics_799 = new cjs.Graphics().p("EgjFAE5IAApxMBGKAAAIAAJxg");
	var mask_1_graphics_800 = new cjs.Graphics().p("EgjwAE5IAApxMBHhAAAIAAJxg");
	var mask_1_graphics_801 = new cjs.Graphics().p("EgkbAE5IAApxMBI3AAAIAAJxg");
	var mask_1_graphics_802 = new cjs.Graphics().p("EglGAE5IAApxMBKNAAAIAAJxg");
	var mask_1_graphics_803 = new cjs.Graphics().p("EglxAE5IAApxMBLjAAAIAAJxg");
	var mask_1_graphics_804 = new cjs.Graphics().p("EgmcAE5IAApxMBM5AAAIAAJxg");
	var mask_1_graphics_805 = new cjs.Graphics().p("EgnHAE5IAApxMBOPAAAIAAJxg");
	var mask_1_graphics_806 = new cjs.Graphics().p("EgnzAE5IAApxMBPmAAAIAAJxg");
	var mask_1_graphics_993 = new cjs.Graphics().p("EgnzAE5IAApxMBPmAAAIAAJxg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(713).to({graphics:mask_1_graphics_713,x:-16.625,y:368.625}).wait(1).to({graphics:mask_1_graphics_714,x:-14,y:368.625}).wait(1).to({graphics:mask_1_graphics_715,x:-11.4,y:368.625}).wait(1).to({graphics:mask_1_graphics_716,x:-8.775,y:368.625}).wait(1).to({graphics:mask_1_graphics_717,x:-6.2,y:368.625}).wait(1).to({graphics:mask_1_graphics_718,x:-3.6,y:368.625}).wait(1).to({graphics:mask_1_graphics_719,x:-0.975,y:368.625}).wait(1).to({graphics:mask_1_graphics_720,x:1.625,y:368.625}).wait(1).to({graphics:mask_1_graphics_721,x:4.25,y:368.625}).wait(1).to({graphics:mask_1_graphics_722,x:6.875,y:368.625}).wait(1).to({graphics:mask_1_graphics_723,x:9.45,y:368.625}).wait(1).to({graphics:mask_1_graphics_724,x:12.075,y:368.625}).wait(1).to({graphics:mask_1_graphics_725,x:14.675,y:368.625}).wait(1).to({graphics:mask_1_graphics_726,x:17.275,y:368.625}).wait(1).to({graphics:mask_1_graphics_727,x:19.9,y:368.625}).wait(1).to({graphics:mask_1_graphics_728,x:22.5,y:368.625}).wait(1).to({graphics:mask_1_graphics_729,x:25.1,y:368.625}).wait(1).to({graphics:mask_1_graphics_730,x:27.725,y:368.625}).wait(1).to({graphics:mask_1_graphics_731,x:30.325,y:368.625}).wait(1).to({graphics:mask_1_graphics_732,x:32.95,y:368.625}).wait(1).to({graphics:mask_1_graphics_733,x:35.55,y:368.625}).wait(1).to({graphics:mask_1_graphics_734,x:38.15,y:368.625}).wait(1).to({graphics:mask_1_graphics_735,x:40.775,y:368.625}).wait(1).to({graphics:mask_1_graphics_736,x:43.375,y:368.625}).wait(1).to({graphics:mask_1_graphics_737,x:45.975,y:368.625}).wait(1).to({graphics:mask_1_graphics_738,x:48.6,y:368.625}).wait(1).to({graphics:mask_1_graphics_739,x:51.2,y:368.625}).wait(1).to({graphics:mask_1_graphics_740,x:53.8,y:368.625}).wait(1).to({graphics:mask_1_graphics_741,x:56.425,y:368.625}).wait(1).to({graphics:mask_1_graphics_742,x:59,y:368.625}).wait(1).to({graphics:mask_1_graphics_743,x:61.625,y:368.625}).wait(1).to({graphics:mask_1_graphics_744,x:64.25,y:368.625}).wait(1).to({graphics:mask_1_graphics_745,x:66.85,y:368.625}).wait(1).to({graphics:mask_1_graphics_746,x:69.475,y:368.625}).wait(1).to({graphics:mask_1_graphics_747,x:72.075,y:368.625}).wait(1).to({graphics:mask_1_graphics_748,x:74.65,y:368.625}).wait(1).to({graphics:mask_1_graphics_749,x:77.275,y:368.625}).wait(1).to({graphics:mask_1_graphics_750,x:79.875,y:368.625}).wait(1).to({graphics:mask_1_graphics_751,x:82.5,y:368.625}).wait(21).to({graphics:mask_1_graphics_772,x:82.5,y:368.625}).wait(1).to({graphics:mask_1_graphics_773,x:86.825,y:368.625}).wait(1).to({graphics:mask_1_graphics_774,x:91.125,y:368.625}).wait(1).to({graphics:mask_1_graphics_775,x:95.45,y:368.625}).wait(1).to({graphics:mask_1_graphics_776,x:99.75,y:368.625}).wait(1).to({graphics:mask_1_graphics_777,x:104.075,y:368.625}).wait(1).to({graphics:mask_1_graphics_778,x:108.375,y:368.625}).wait(1).to({graphics:mask_1_graphics_779,x:112.7,y:368.625}).wait(1).to({graphics:mask_1_graphics_780,x:117,y:368.625}).wait(1).to({graphics:mask_1_graphics_781,x:121.325,y:368.625}).wait(1).to({graphics:mask_1_graphics_782,x:125.625,y:368.625}).wait(1).to({graphics:mask_1_graphics_783,x:129.95,y:368.625}).wait(1).to({graphics:mask_1_graphics_784,x:134.25,y:368.625}).wait(1).to({graphics:mask_1_graphics_785,x:138.575,y:368.625}).wait(1).to({graphics:mask_1_graphics_786,x:142.875,y:368.625}).wait(1).to({graphics:mask_1_graphics_787,x:147.2,y:368.625}).wait(1).to({graphics:mask_1_graphics_788,x:151.5,y:368.625}).wait(1).to({graphics:mask_1_graphics_789,x:155.825,y:368.625}).wait(1).to({graphics:mask_1_graphics_790,x:160.1,y:368.625}).wait(1).to({graphics:mask_1_graphics_791,x:164.4,y:368.625}).wait(1).to({graphics:mask_1_graphics_792,x:168.725,y:368.625}).wait(1).to({graphics:mask_1_graphics_793,x:173.025,y:368.625}).wait(1).to({graphics:mask_1_graphics_794,x:177.35,y:368.625}).wait(1).to({graphics:mask_1_graphics_795,x:181.65,y:368.625}).wait(1).to({graphics:mask_1_graphics_796,x:185.975,y:368.625}).wait(1).to({graphics:mask_1_graphics_797,x:190.275,y:368.625}).wait(1).to({graphics:mask_1_graphics_798,x:194.6,y:368.625}).wait(1).to({graphics:mask_1_graphics_799,x:198.9,y:368.625}).wait(1).to({graphics:mask_1_graphics_800,x:203.225,y:368.625}).wait(1).to({graphics:mask_1_graphics_801,x:207.525,y:368.625}).wait(1).to({graphics:mask_1_graphics_802,x:211.85,y:368.625}).wait(1).to({graphics:mask_1_graphics_803,x:216.15,y:368.625}).wait(1).to({graphics:mask_1_graphics_804,x:220.475,y:368.625}).wait(1).to({graphics:mask_1_graphics_805,x:224.775,y:368.625}).wait(1).to({graphics:mask_1_graphics_806,x:229.1,y:368.625}).wait(187).to({graphics:mask_1_graphics_993,x:229.1,y:368.625}).wait(1).to({graphics:null,x:0,y:0}).wait(65));

	// 图层_15
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("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");
	this.shape_1.setTransform(237.65,231.85);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(713).to({_off:false},0).wait(280).to({_off:true},1).wait(65));

	// 图层_14 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_599 = new cjs.Graphics().p("Ah3EfIAAo8IDvAAIAAI8g");
	var mask_2_graphics_600 = new cjs.Graphics().p("AiLEfIAAo8IEXAAIAAI8g");
	var mask_2_graphics_601 = new cjs.Graphics().p("AigEfIAAo8IFAAAIAAI8g");
	var mask_2_graphics_602 = new cjs.Graphics().p("Ai0EfIAAo8IFpAAIAAI8g");
	var mask_2_graphics_603 = new cjs.Graphics().p("AjIEfIAAo8IGRAAIAAI8g");
	var mask_2_graphics_604 = new cjs.Graphics().p("AjdEfIAAo8IG7AAIAAI8g");
	var mask_2_graphics_605 = new cjs.Graphics().p("AjxEfIAAo8IHjAAIAAI8g");
	var mask_2_graphics_606 = new cjs.Graphics().p("AkFEfIAAo8IILAAIAAI8g");
	var mask_2_graphics_607 = new cjs.Graphics().p("AkZEfIAAo8IIzAAIAAI8g");
	var mask_2_graphics_608 = new cjs.Graphics().p("AkuEfIAAo8IJdAAIAAI8g");
	var mask_2_graphics_609 = new cjs.Graphics().p("AlCEfIAAo8IKFAAIAAI8g");
	var mask_2_graphics_610 = new cjs.Graphics().p("AlWEfIAAo8IKtAAIAAI8g");
	var mask_2_graphics_611 = new cjs.Graphics().p("AlrEfIAAo8ILWAAIAAI8g");
	var mask_2_graphics_612 = new cjs.Graphics().p("Al/EfIAAo8IL/AAIAAI8g");
	var mask_2_graphics_613 = new cjs.Graphics().p("AmTEfIAAo8IMnAAIAAI8g");
	var mask_2_graphics_614 = new cjs.Graphics().p("AmnEfIAAo8INPAAIAAI8g");
	var mask_2_graphics_615 = new cjs.Graphics().p("Am8EfIAAo8IN4AAIAAI8g");
	var mask_2_graphics_616 = new cjs.Graphics().p("AnQEfIAAo8IOhAAIAAI8g");
	var mask_2_graphics_617 = new cjs.Graphics().p("AnkEfIAAo8IPJAAIAAI8g");
	var mask_2_graphics_618 = new cjs.Graphics().p("An4EfIAAo8IPxAAIAAI8g");
	var mask_2_graphics_619 = new cjs.Graphics().p("AoNEfIAAo8IQbAAIAAI8g");
	var mask_2_graphics_620 = new cjs.Graphics().p("AohEfIAAo8IRDAAIAAI8g");
	var mask_2_graphics_621 = new cjs.Graphics().p("Ao1EfIAAo8IRrAAIAAI8g");
	var mask_2_graphics_622 = new cjs.Graphics().p("ApKEfIAAo8ISVAAIAAI8g");
	var mask_2_graphics_623 = new cjs.Graphics().p("ApeEfIAAo8IS9AAIAAI8g");
	var mask_2_graphics_624 = new cjs.Graphics().p("ApyEfIAAo8ITlAAIAAI8g");
	var mask_2_graphics_625 = new cjs.Graphics().p("AqGEfIAAo8IUNAAIAAI8g");
	var mask_2_graphics_626 = new cjs.Graphics().p("AqbEfIAAo8IU3AAIAAI8g");
	var mask_2_graphics_627 = new cjs.Graphics().p("AqvEfIAAo8IVfAAIAAI8g");
	var mask_2_graphics_628 = new cjs.Graphics().p("ArDEfIAAo8IWHAAIAAI8g");
	var mask_2_graphics_629 = new cjs.Graphics().p("ArYEfIAAo8IWwAAIAAI8g");
	var mask_2_graphics_630 = new cjs.Graphics().p("ArsEfIAAo8IXZAAIAAI8g");
	var mask_2_graphics_631 = new cjs.Graphics().p("AsAEfIAAo8IYBAAIAAI8g");
	var mask_2_graphics_632 = new cjs.Graphics().p("AsUEfIAAo8IYpAAIAAI8g");
	var mask_2_graphics_633 = new cjs.Graphics().p("AspEfIAAo8IZSAAIAAI8g");
	var mask_2_graphics_634 = new cjs.Graphics().p("As9EfIAAo8IZ7AAIAAI8g");
	var mask_2_graphics_635 = new cjs.Graphics().p("AtREfIAAo8IajAAIAAI8g");
	var mask_2_graphics_636 = new cjs.Graphics().p("AtmEfIAAo8IbNAAIAAI8g");
	var mask_2_graphics_637 = new cjs.Graphics().p("At6EfIAAo8Ib1AAIAAI8g");
	var mask_2_graphics_638 = new cjs.Graphics().p("AuOEfIAAo8IcdAAIAAI8g");
	var mask_2_graphics_639 = new cjs.Graphics().p("AuiEfIAAo8IdFAAIAAI8g");
	var mask_2_graphics_640 = new cjs.Graphics().p("Au3EfIAAo8IdvAAIAAI8g");
	var mask_2_graphics_641 = new cjs.Graphics().p("AvLEfIAAo8IeXAAIAAI8g");
	var mask_2_graphics_642 = new cjs.Graphics().p("AvfEfIAAo8Ie/AAIAAI8g");
	var mask_2_graphics_643 = new cjs.Graphics().p("Av0EfIAAo8IfoAAIAAI8g");
	var mask_2_graphics_644 = new cjs.Graphics().p("AwIEfIAAo8MAgRAAAIAAI8g");
	var mask_2_graphics_645 = new cjs.Graphics().p("AwcEfIAAo8MAg5AAAIAAI8g");
	var mask_2_graphics_646 = new cjs.Graphics().p("AwwEfIAAo8MAhhAAAIAAI8g");
	var mask_2_graphics_647 = new cjs.Graphics().p("AwwEfIAAo8MAhhAAAIAAI8g");
	var mask_2_graphics_648 = new cjs.Graphics().p("AwwEfIAAo8MAhhAAAIAAI8g");
	var mask_2_graphics_649 = new cjs.Graphics().p("AwwEfIAAo8MAhhAAAIAAI8g");
	var mask_2_graphics_650 = new cjs.Graphics().p("AwwEfIAAo8MAhhAAAIAAI8g");
	var mask_2_graphics_651 = new cjs.Graphics().p("AwwEfIAAo8MAhhAAAIAAI8g");
	var mask_2_graphics_652 = new cjs.Graphics().p("AwwEfIAAo8MAhhAAAIAAI8g");
	var mask_2_graphics_653 = new cjs.Graphics().p("AwwEfIAAo8MAhhAAAIAAI8g");
	var mask_2_graphics_654 = new cjs.Graphics().p("AwwEfIAAo8MAhhAAAIAAI8g");
	var mask_2_graphics_655 = new cjs.Graphics().p("AwwEfIAAo8MAhhAAAIAAI8g");
	var mask_2_graphics_656 = new cjs.Graphics().p("AwwEfIAAo8MAhhAAAIAAI8g");
	var mask_2_graphics_657 = new cjs.Graphics().p("AwwEfIAAo8MAhhAAAIAAI8g");
	var mask_2_graphics_658 = new cjs.Graphics().p("AwwEfIAAo8MAhhAAAIAAI8g");
	var mask_2_graphics_659 = new cjs.Graphics().p("AxKEfIAAo8MAiVAAAIAAI8g");
	var mask_2_graphics_660 = new cjs.Graphics().p("AxjEfIAAo8MAjHAAAIAAI8g");
	var mask_2_graphics_661 = new cjs.Graphics().p("Ax9EfIAAo8MAj7AAAIAAI8g");
	var mask_2_graphics_662 = new cjs.Graphics().p("AyWEfIAAo8MAktAAAIAAI8g");
	var mask_2_graphics_663 = new cjs.Graphics().p("AywEfIAAo8MAlgAAAIAAI8g");
	var mask_2_graphics_664 = new cjs.Graphics().p("AzJEfIAAo8MAmTAAAIAAI8g");
	var mask_2_graphics_665 = new cjs.Graphics().p("AzjEfIAAo8MAnHAAAIAAI8g");
	var mask_2_graphics_666 = new cjs.Graphics().p("Az8EfIAAo8MAn5AAAIAAI8g");
	var mask_2_graphics_667 = new cjs.Graphics().p("A0WEfIAAo8MAotAAAIAAI8g");
	var mask_2_graphics_668 = new cjs.Graphics().p("A0vEfIAAo8MApfAAAIAAI8g");
	var mask_2_graphics_669 = new cjs.Graphics().p("A1IEfIAAo8MAqRAAAIAAI8g");
	var mask_2_graphics_670 = new cjs.Graphics().p("A1iEfIAAo8MArFAAAIAAI8g");
	var mask_2_graphics_671 = new cjs.Graphics().p("A17EfIAAo8MAr3AAAIAAI8g");
	var mask_2_graphics_672 = new cjs.Graphics().p("A2VEfIAAo8MAsrAAAIAAI8g");
	var mask_2_graphics_673 = new cjs.Graphics().p("A2uEfIAAo8MAtdAAAIAAI8g");
	var mask_2_graphics_674 = new cjs.Graphics().p("A3IEfIAAo8MAuRAAAIAAI8g");
	var mask_2_graphics_675 = new cjs.Graphics().p("A3hEfIAAo8MAvDAAAIAAI8g");
	var mask_2_graphics_676 = new cjs.Graphics().p("A37EfIAAo8MAv3AAAIAAI8g");
	var mask_2_graphics_677 = new cjs.Graphics().p("A4UEfIAAo8MAwpAAAIAAI8g");
	var mask_2_graphics_678 = new cjs.Graphics().p("A4uEfIAAo8MAxcAAAIAAI8g");
	var mask_2_graphics_679 = new cjs.Graphics().p("A5HEfIAAo8MAyPAAAIAAI8g");
	var mask_2_graphics_680 = new cjs.Graphics().p("A5hEfIAAo8MAzCAAAIAAI8g");
	var mask_2_graphics_681 = new cjs.Graphics().p("A56EfIAAo8MAz1AAAIAAI8g");
	var mask_2_graphics_682 = new cjs.Graphics().p("A6TEfIAAo8MA0nAAAIAAI8g");
	var mask_2_graphics_683 = new cjs.Graphics().p("A6tEfIAAo8MA1bAAAIAAI8g");
	var mask_2_graphics_684 = new cjs.Graphics().p("A7GEfIAAo8MA2NAAAIAAI8g");
	var mask_2_graphics_685 = new cjs.Graphics().p("A7gEfIAAo8MA3BAAAIAAI8g");
	var mask_2_graphics_686 = new cjs.Graphics().p("A75EfIAAo8MA3zAAAIAAI8g");
	var mask_2_graphics_687 = new cjs.Graphics().p("A8TEfIAAo8MA4nAAAIAAI8g");
	var mask_2_graphics_688 = new cjs.Graphics().p("A8sEfIAAo8MA5ZAAAIAAI8g");
	var mask_2_graphics_689 = new cjs.Graphics().p("A9GEfIAAo8MA6MAAAIAAI8g");
	var mask_2_graphics_690 = new cjs.Graphics().p("A9fEfIAAo8MA6/AAAIAAI8g");
	var mask_2_graphics_691 = new cjs.Graphics().p("A95EfIAAo8MA7zAAAIAAI8g");
	var mask_2_graphics_692 = new cjs.Graphics().p("A+SEfIAAo8MA8lAAAIAAI8g");
	var mask_2_graphics_693 = new cjs.Graphics().p("A+sEfIAAo8MA9ZAAAIAAI8g");
	var mask_2_graphics_694 = new cjs.Graphics().p("A/FEfIAAo8MA+LAAAIAAI8g");
	var mask_2_graphics_695 = new cjs.Graphics().p("A/eEfIAAo8MA+9AAAIAAI8g");
	var mask_2_graphics_696 = new cjs.Graphics().p("A/4EfIAAo8MA/xAAAIAAI8g");
	var mask_2_graphics_697 = new cjs.Graphics().p("EggRAEfIAAo8MBAjAAAIAAI8g");
	var mask_2_graphics_993 = new cjs.Graphics().p("EggRAEfIAAo8MBAjAAAIAAI8g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(599).to({graphics:mask_2_graphics_599,x:-17.3,y:318}).wait(1).to({graphics:mask_2_graphics_600,x:-15.275,y:318}).wait(1).to({graphics:mask_2_graphics_601,x:-13.25,y:318}).wait(1).to({graphics:mask_2_graphics_602,x:-11.225,y:318}).wait(1).to({graphics:mask_2_graphics_603,x:-9.175,y:318}).wait(1).to({graphics:mask_2_graphics_604,x:-7.15,y:318}).wait(1).to({graphics:mask_2_graphics_605,x:-5.125,y:318}).wait(1).to({graphics:mask_2_graphics_606,x:-3.1,y:318}).wait(1).to({graphics:mask_2_graphics_607,x:-1.075,y:318}).wait(1).to({graphics:mask_2_graphics_608,x:0.95,y:318}).wait(1).to({graphics:mask_2_graphics_609,x:2.975,y:318}).wait(1).to({graphics:mask_2_graphics_610,x:5,y:318}).wait(1).to({graphics:mask_2_graphics_611,x:7.05,y:318}).wait(1).to({graphics:mask_2_graphics_612,x:9.075,y:318}).wait(1).to({graphics:mask_2_graphics_613,x:11.1,y:318}).wait(1).to({graphics:mask_2_graphics_614,x:13.125,y:318}).wait(1).to({graphics:mask_2_graphics_615,x:15.15,y:318}).wait(1).to({graphics:mask_2_graphics_616,x:17.175,y:318}).wait(1).to({graphics:mask_2_graphics_617,x:19.2,y:318}).wait(1).to({graphics:mask_2_graphics_618,x:21.225,y:318}).wait(1).to({graphics:mask_2_graphics_619,x:23.275,y:318}).wait(1).to({graphics:mask_2_graphics_620,x:25.3,y:318}).wait(1).to({graphics:mask_2_graphics_621,x:27.325,y:318}).wait(1).to({graphics:mask_2_graphics_622,x:29.35,y:318}).wait(1).to({graphics:mask_2_graphics_623,x:31.375,y:318}).wait(1).to({graphics:mask_2_graphics_624,x:33.4,y:318}).wait(1).to({graphics:mask_2_graphics_625,x:35.425,y:318}).wait(1).to({graphics:mask_2_graphics_626,x:37.45,y:318}).wait(1).to({graphics:mask_2_graphics_627,x:39.5,y:318}).wait(1).to({graphics:mask_2_graphics_628,x:41.525,y:318}).wait(1).to({graphics:mask_2_graphics_629,x:43.55,y:318}).wait(1).to({graphics:mask_2_graphics_630,x:45.575,y:318}).wait(1).to({graphics:mask_2_graphics_631,x:47.6,y:318}).wait(1).to({graphics:mask_2_graphics_632,x:49.625,y:318}).wait(1).to({graphics:mask_2_graphics_633,x:51.65,y:318}).wait(1).to({graphics:mask_2_graphics_634,x:53.675,y:318}).wait(1).to({graphics:mask_2_graphics_635,x:55.725,y:318}).wait(1).to({graphics:mask_2_graphics_636,x:57.75,y:318}).wait(1).to({graphics:mask_2_graphics_637,x:59.775,y:318}).wait(1).to({graphics:mask_2_graphics_638,x:61.8,y:318}).wait(1).to({graphics:mask_2_graphics_639,x:63.825,y:318}).wait(1).to({graphics:mask_2_graphics_640,x:65.85,y:318}).wait(1).to({graphics:mask_2_graphics_641,x:67.875,y:318}).wait(1).to({graphics:mask_2_graphics_642,x:69.9,y:318}).wait(1).to({graphics:mask_2_graphics_643,x:71.95,y:318}).wait(1).to({graphics:mask_2_graphics_644,x:73.975,y:318}).wait(1).to({graphics:mask_2_graphics_645,x:76,y:318}).wait(1).to({graphics:mask_2_graphics_646,x:78.025,y:318}).wait(1).to({graphics:mask_2_graphics_647,x:78.025,y:318}).wait(1).to({graphics:mask_2_graphics_648,x:78.025,y:318}).wait(1).to({graphics:mask_2_graphics_649,x:78.025,y:318}).wait(1).to({graphics:mask_2_graphics_650,x:78.025,y:318}).wait(1).to({graphics:mask_2_graphics_651,x:78.025,y:318}).wait(1).to({graphics:mask_2_graphics_652,x:78.025,y:318}).wait(1).to({graphics:mask_2_graphics_653,x:78.025,y:318}).wait(1).to({graphics:mask_2_graphics_654,x:78.025,y:318}).wait(1).to({graphics:mask_2_graphics_655,x:78.025,y:318}).wait(1).to({graphics:mask_2_graphics_656,x:78.025,y:318}).wait(1).to({graphics:mask_2_graphics_657,x:78.025,y:318}).wait(1).to({graphics:mask_2_graphics_658,x:78.025,y:318}).wait(1).to({graphics:mask_2_graphics_659,x:80.575,y:318}).wait(1).to({graphics:mask_2_graphics_660,x:83.125,y:318}).wait(1).to({graphics:mask_2_graphics_661,x:85.675,y:318}).wait(1).to({graphics:mask_2_graphics_662,x:88.2,y:318}).wait(1).to({graphics:mask_2_graphics_663,x:90.75,y:318}).wait(1).to({graphics:mask_2_graphics_664,x:93.3,y:318}).wait(1).to({graphics:mask_2_graphics_665,x:95.85,y:318}).wait(1).to({graphics:mask_2_graphics_666,x:98.4,y:318}).wait(1).to({graphics:mask_2_graphics_667,x:100.95,y:318}).wait(1).to({graphics:mask_2_graphics_668,x:103.475,y:318}).wait(1).to({graphics:mask_2_graphics_669,x:106.025,y:318}).wait(1).to({graphics:mask_2_graphics_670,x:108.575,y:318}).wait(1).to({graphics:mask_2_graphics_671,x:111.125,y:318}).wait(1).to({graphics:mask_2_graphics_672,x:113.675,y:318}).wait(1).to({graphics:mask_2_graphics_673,x:116.225,y:318}).wait(1).to({graphics:mask_2_graphics_674,x:118.775,y:318}).wait(1).to({graphics:mask_2_graphics_675,x:121.3,y:318}).wait(1).to({graphics:mask_2_graphics_676,x:123.85,y:318}).wait(1).to({graphics:mask_2_graphics_677,x:126.4,y:318}).wait(1).to({graphics:mask_2_graphics_678,x:128.95,y:318}).wait(1).to({graphics:mask_2_graphics_679,x:131.5,y:318}).wait(1).to({graphics:mask_2_graphics_680,x:134.05,y:318}).wait(1).to({graphics:mask_2_graphics_681,x:136.575,y:318}).wait(1).to({graphics:mask_2_graphics_682,x:139.125,y:318}).wait(1).to({graphics:mask_2_graphics_683,x:141.675,y:318}).wait(1).to({graphics:mask_2_graphics_684,x:144.225,y:318}).wait(1).to({graphics:mask_2_graphics_685,x:146.775,y:318}).wait(1).to({graphics:mask_2_graphics_686,x:149.325,y:318}).wait(1).to({graphics:mask_2_graphics_687,x:151.875,y:318}).wait(1).to({graphics:mask_2_graphics_688,x:154.4,y:318}).wait(1).to({graphics:mask_2_graphics_689,x:156.95,y:318}).wait(1).to({graphics:mask_2_graphics_690,x:159.5,y:318}).wait(1).to({graphics:mask_2_graphics_691,x:162.05,y:318}).wait(1).to({graphics:mask_2_graphics_692,x:164.6,y:318}).wait(1).to({graphics:mask_2_graphics_693,x:167.15,y:318}).wait(1).to({graphics:mask_2_graphics_694,x:169.675,y:318}).wait(1).to({graphics:mask_2_graphics_695,x:172.225,y:318}).wait(1).to({graphics:mask_2_graphics_696,x:174.775,y:318}).wait(1).to({graphics:mask_2_graphics_697,x:177.325,y:318}).wait(296).to({graphics:mask_2_graphics_993,x:177.325,y:318}).wait(1).to({graphics:null,x:0,y:0}).wait(65));

	// 图层_13
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("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");
	this.shape_2.setTransform(237.65,231.85);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(599).to({_off:false},0).wait(394).to({_off:true},1).wait(65));

	// 图层_12 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_547 = new cjs.Graphics().p("AhWFNIAAqZICtAAIAAKZg");
	var mask_3_graphics_548 = new cjs.Graphics().p("AiEFNIAAqZIEJAAIAAKZg");
	var mask_3_graphics_549 = new cjs.Graphics().p("AiyFNIAAqZIFlAAIAAKZg");
	var mask_3_graphics_550 = new cjs.Graphics().p("AjgFNIAAqZIHBAAIAAKZg");
	var mask_3_graphics_551 = new cjs.Graphics().p("AkOFNIAAqZIIdAAIAAKZg");
	var mask_3_graphics_552 = new cjs.Graphics().p("Ak8FNIAAqZIJ5AAIAAKZg");
	var mask_3_graphics_553 = new cjs.Graphics().p("AlqFNIAAqZILVAAIAAKZg");
	var mask_3_graphics_554 = new cjs.Graphics().p("AmYFNIAAqZIMxAAIAAKZg");
	var mask_3_graphics_555 = new cjs.Graphics().p("AnGFNIAAqZIONAAIAAKZg");
	var mask_3_graphics_556 = new cjs.Graphics().p("An0FNIAAqZIPpAAIAAKZg");
	var mask_3_graphics_557 = new cjs.Graphics().p("AoiFNIAAqZIRFAAIAAKZg");
	var mask_3_graphics_558 = new cjs.Graphics().p("ApQFNIAAqZIShAAIAAKZg");
	var mask_3_graphics_559 = new cjs.Graphics().p("Ap+FNIAAqZIT9AAIAAKZg");
	var mask_3_graphics_560 = new cjs.Graphics().p("AqsFNIAAqZIVZAAIAAKZg");
	var mask_3_graphics_561 = new cjs.Graphics().p("AraFNIAAqZIW1AAIAAKZg");
	var mask_3_graphics_562 = new cjs.Graphics().p("AsIFNIAAqZIYRAAIAAKZg");
	var mask_3_graphics_563 = new cjs.Graphics().p("As2FNIAAqZIZtAAIAAKZg");
	var mask_3_graphics_564 = new cjs.Graphics().p("AtkFNIAAqZIbJAAIAAKZg");
	var mask_3_graphics_565 = new cjs.Graphics().p("AuSFNIAAqZIclAAIAAKZg");
	var mask_3_graphics_566 = new cjs.Graphics().p("AvAFNIAAqZIeBAAIAAKZg");
	var mask_3_graphics_567 = new cjs.Graphics().p("AvuFNIAAqZIfdAAIAAKZg");
	var mask_3_graphics_568 = new cjs.Graphics().p("AwcFNIAAqZMAg5AAAIAAKZg");
	var mask_3_graphics_569 = new cjs.Graphics().p("AxKFNIAAqZMAiVAAAIAAKZg");
	var mask_3_graphics_570 = new cjs.Graphics().p("Ax4FNIAAqZMAjxAAAIAAKZg");
	var mask_3_graphics_571 = new cjs.Graphics().p("AymFNIAAqZMAlNAAAIAAKZg");
	var mask_3_graphics_572 = new cjs.Graphics().p("AzUFNIAAqZMAmpAAAIAAKZg");
	var mask_3_graphics_573 = new cjs.Graphics().p("A0CFNIAAqZMAoFAAAIAAKZg");
	var mask_3_graphics_574 = new cjs.Graphics().p("A0wFNIAAqZMAphAAAIAAKZg");
	var mask_3_graphics_575 = new cjs.Graphics().p("A1eFNIAAqZMAq9AAAIAAKZg");
	var mask_3_graphics_576 = new cjs.Graphics().p("A2MFNIAAqZMAsZAAAIAAKZg");
	var mask_3_graphics_577 = new cjs.Graphics().p("A26FNIAAqZMAt1AAAIAAKZg");
	var mask_3_graphics_578 = new cjs.Graphics().p("A3oFNIAAqZMAvRAAAIAAKZg");
	var mask_3_graphics_579 = new cjs.Graphics().p("A4WFNIAAqZMAwtAAAIAAKZg");
	var mask_3_graphics_580 = new cjs.Graphics().p("A5EFNIAAqZMAyJAAAIAAKZg");
	var mask_3_graphics_581 = new cjs.Graphics().p("A5yFNIAAqZMAzlAAAIAAKZg");
	var mask_3_graphics_582 = new cjs.Graphics().p("A6gFNIAAqZMA1BAAAIAAKZg");
	var mask_3_graphics_583 = new cjs.Graphics().p("A7OFNIAAqZMA2dAAAIAAKZg");
	var mask_3_graphics_584 = new cjs.Graphics().p("A78FNIAAqZMA35AAAIAAKZg");
	var mask_3_graphics_585 = new cjs.Graphics().p("A8qFNIAAqZMA5VAAAIAAKZg");
	var mask_3_graphics_586 = new cjs.Graphics().p("A9YFNIAAqZMA6xAAAIAAKZg");
	var mask_3_graphics_587 = new cjs.Graphics().p("A+GFNIAAqZMA8NAAAIAAKZg");
	var mask_3_graphics_588 = new cjs.Graphics().p("A+0FNIAAqZMA9pAAAIAAKZg");
	var mask_3_graphics_993 = new cjs.Graphics().p("A+0FNIAAqZMA9pAAAIAAKZg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(547).to({graphics:mask_3_graphics_547,x:-16.625,y:255.975}).wait(1).to({graphics:mask_3_graphics_548,x:-12.025,y:255.975}).wait(1).to({graphics:mask_3_graphics_549,x:-7.425,y:255.975}).wait(1).to({graphics:mask_3_graphics_550,x:-2.825,y:255.975}).wait(1).to({graphics:mask_3_graphics_551,x:1.775,y:255.975}).wait(1).to({graphics:mask_3_graphics_552,x:6.375,y:255.975}).wait(1).to({graphics:mask_3_graphics_553,x:10.975,y:255.975}).wait(1).to({graphics:mask_3_graphics_554,x:15.575,y:255.975}).wait(1).to({graphics:mask_3_graphics_555,x:20.175,y:255.975}).wait(1).to({graphics:mask_3_graphics_556,x:24.775,y:255.975}).wait(1).to({graphics:mask_3_graphics_557,x:29.375,y:255.975}).wait(1).to({graphics:mask_3_graphics_558,x:33.975,y:255.975}).wait(1).to({graphics:mask_3_graphics_559,x:38.575,y:255.975}).wait(1).to({graphics:mask_3_graphics_560,x:43.175,y:255.975}).wait(1).to({graphics:mask_3_graphics_561,x:47.775,y:255.975}).wait(1).to({graphics:mask_3_graphics_562,x:52.375,y:255.975}).wait(1).to({graphics:mask_3_graphics_563,x:56.975,y:255.975}).wait(1).to({graphics:mask_3_graphics_564,x:61.575,y:255.975}).wait(1).to({graphics:mask_3_graphics_565,x:66.175,y:255.975}).wait(1).to({graphics:mask_3_graphics_566,x:70.775,y:255.975}).wait(1).to({graphics:mask_3_graphics_567,x:75.4,y:255.975}).wait(1).to({graphics:mask_3_graphics_568,x:79.975,y:255.975}).wait(1).to({graphics:mask_3_graphics_569,x:84.6,y:255.975}).wait(1).to({graphics:mask_3_graphics_570,x:89.2,y:255.975}).wait(1).to({graphics:mask_3_graphics_571,x:93.8,y:255.975}).wait(1).to({graphics:mask_3_graphics_572,x:98.4,y:255.975}).wait(1).to({graphics:mask_3_graphics_573,x:103,y:255.975}).wait(1).to({graphics:mask_3_graphics_574,x:107.6,y:255.975}).wait(1).to({graphics:mask_3_graphics_575,x:112.2,y:255.975}).wait(1).to({graphics:mask_3_graphics_576,x:116.8,y:255.975}).wait(1).to({graphics:mask_3_graphics_577,x:121.4,y:255.975}).wait(1).to({graphics:mask_3_graphics_578,x:126,y:255.975}).wait(1).to({graphics:mask_3_graphics_579,x:130.6,y:255.975}).wait(1).to({graphics:mask_3_graphics_580,x:135.2,y:255.975}).wait(1).to({graphics:mask_3_graphics_581,x:139.8,y:255.975}).wait(1).to({graphics:mask_3_graphics_582,x:144.4,y:255.975}).wait(1).to({graphics:mask_3_graphics_583,x:149,y:255.975}).wait(1).to({graphics:mask_3_graphics_584,x:153.6,y:255.975}).wait(1).to({graphics:mask_3_graphics_585,x:158.2,y:255.975}).wait(1).to({graphics:mask_3_graphics_586,x:162.8,y:255.975}).wait(1).to({graphics:mask_3_graphics_587,x:167.4,y:255.975}).wait(1).to({graphics:mask_3_graphics_588,x:172,y:255.975}).wait(405).to({graphics:mask_3_graphics_993,x:172,y:255.975}).wait(1).to({graphics:null,x:0,y:0}).wait(65));

	// 图层_11
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("EAC1AhKQARAAAKgEQALgGAHgJQAHgKAEgQIhLi8IAgAAIA6CdIACAAIA2idIAfAAIhEC3QgIAYgLAQQgKASgRAIQgQAKgcAAgEgB0AgZQgTgJgKgVQgKgWAAgmQAAglAKgWQAKgVATgJQATgJAbAAQAYAAAQAIQAPAHAHALQAIAMACAOQADAOAAAOIAAAJIgCAMIh/AJQAAAUAGANQAGAOANAGQANAHAXAAQAPAAAQgDQARgEALgFIAAAcIgPAEIgXAFQgMABgOABIgDAAQgaAAgTgJgAhmd+QgMAHgFAOQgEAOgBAUIBkgIQAAgPgDgMQgDgMgJgIQgKgHgVAAQgVAAgLAHgEgXIAgZQgTgJgLgVQgKgWAAgmQAAglAKgWQALgVASgJQAUgJAbAAQAYAAAPAIQAPAHAIALQAIAMADAOQACAOAAAOIAAAJIgBAMIiAAJQAAAUAFANQAGAOANAGQANAHAXAAQAQAAAQgDQAQgEAMgFIAAAcIgQAEIgWAFQgNABgNABIgDAAQgaAAgTgJgA27d+QgMAHgFAOQgEAOAAAUIBkgIQAAgPgDgMQgDgMgKgIQgKgHgUAAQgVAAgMAHgEgixAgiQgjAAgXgLQgYgLgMgcQgLgbgBgwQABgxALgbQAMgcAYgLQAXgLAjAAQAiAAAXALQAYALALAcQAMAbAAAxQAAAwgMAbQgLAcgYALQgWALghAAIgCAAgEgjeAdNQgQALgGAVQgGAWABAiQgBAiAGAVQAGAXAQAKQAPAKAeAAQAdAAAQgKQAPgKAGgXQAGgVAAgiQAAgigGgWQgGgVgPgLQgQgLgdAAQgeAAgPALgEAPzAgiQgbgBgUgPQgSgOgKgeIgCgOIgBgOIAAgLQAAgdAMgWQALgWAYgPQAKgEAJgDQAJgCAJAAIADAAQAhAAAVAiIAAgIIAAgBIACAAIAcAAIABAAIAAABIAABkIABAjIAFAgIgCABIgcAAQgCAAgBgIIgDgXIgGAKIgIAIQgIAIgKADQgLADgNABgAPdeDQgOALgJAVIgEAOIgBAOIAAAIQAAASAHAQQAIAPAOAKQAFAEAHABQAGACAHgBIAHAAQA1ABAAhCIAAgNQAAgbgKgQQgJgQgTgGIgGAAIgFgBIgBAAQgVABgPAKgEgThAgiQgcgBgTgPQgTgOgJgeIgCgOIgCgOIAAgLQAAgdANgWQALgWAYgPQAKgEAJgDQAJgCAJAAIADAAQAgAAAVAiIAAgIIABgBIABAAIAcAAIABAAIABABIAABkIABAjIAEAgIgBABIgcAAQgCAAgBgIIgEgXIgGAKIgHAIQgJAIgKADQgLADgMABgAz3eDQgPALgJAVIgDAOIgBAOIAAAIQAAASAGAQQAIAPAOAKQAGAEAGABQAHACAGgBIAHAAQA2ABgBhCIAAgNQAAgbgJgQQgKgQgSgGIgHAAIgEgBIgBAAQgVABgPAKgEgf4AgZQgOgHgGgOQgFgOAAgSIAAiDIAeAAIAAB4QAAAOACALQAEAKAHAFQAJAGAPAAQAMAAAKgCQAKgDAJgJQAJgHAFgQIAAiBIAeAAIAAC9IgZAAIgEgcQgGANgKAHQgJAHgMACQgLACgLABQgZAAgOgJgEgZCAgbQgMgEgGgNQgFgNAAgZIAAhqIgcAAIAAgZIAcAAIAAgtIAeAAIAAAtIAvAAIAAAZIgvAAIAABpQgBAOADAIQACAIAGADQAGADALAAIALAAIAKgCIAAAaIgKABIgLAAIgEAAQgTAAgLgFgEAVgAgfQgEgCgDgFQgCgEAAgLQAAgNAFgFQAFgEAMABQAMgBAFAEQAGAFAAANQAAALgCAEQgCAFgFACQgFABgJAAQgIAAgFgBgEAT/AgXQgKgKAAgVIAAjkIAdAAIAADcQAAAOAFAEQADAFAKAAIAHAAIAIgCIAAAZIgJACIgLAAQgWAAgKgJgEASbAgXQgKgKAAgVIAAjkIAdAAIAADcQAAAOAFAEQADAFAKAAIAHAAIAIgCIAAAZIgJACIgLAAQgWAAgKgJgEAHoAgfIgUgCQgKgBgFgCIAAgaIAQAEIAUADIASAAQAWABALgHQALgGAAgQQABgMgDgFQgDgHgKgEQgJgEgSgEQgVgEgLgHQgLgHgGgKQgEgLABgPQgBgXASgOQARgOAhgBQAOAAANACQAOACAHADIgDAaQgHgEgNgCQgLgCgOAAQgTgBgKAGQgLAHABAQQAAAJACAFQADAFAIAEQAIADAPADQAVAFAOAGQANAIAFAKQAGALAAATQAAAcgTANQgSANgjAAIgUgBgEgIyAgfIgUgCQgJgBgGgCIAAgaIAQAEIAUADIATAAQAWABAKgHQAMgGAAgQQAAgMgEgFQgCgHgKgEQgJgEgSgEQgUgEgMgHQgLgHgGgKQgEgLAAgPQABgXARgOQAQgOAjgBQAOAAANACQANACAHADIgCAaQgJgEgMgCQgLgCgNAAQgVgBgKAGQgKAHAAAQQAAAJADAFQAEAFAIAEQAHADAOADQAWAFANAGQANAIAGAKQAGALAAATQgBAcgRANQgTANgjAAIgUgBgEANeAgeIAAh4QABgVgIgNQgJgLgUgBQgMABgJACQgJADgIAHQgHAIgFANIAACEIgeAAIAAh4QABgVgIgNQgGgLgVgBQgLAAgKADQgKACgHAIQgIAIgEAOIAACDIgeAAIAAi9IAeAAIAAAZQAJgQAOgHQAOgGASAAQAWAAANAJQANAIAHAPQAFgNAJgHQAKgGAMgDQAKgCAMgBQAWAAAOAIQAOAJAGANQAGAOAAATIAACCgEAA5AgeIAAi9IAfAAIAAAiQAFgPALgIQAJgJAMgDQALgDALAAIAEAAIgBAbIgEAAQgNABgKADQgMADgJAKQgJAJgFARIAAB7gEgEeAgeIhHi9IAfAAIA5CfIACAAIA3ifIAgAAIhGC9gEgKoAgeIAAi9IAfAAIAAC9gEgNeAgeIAAh4QABgVgJgNQgHgLgVgBQgLABgKACQgJADgIAHQgHAIgEANIAACEIgfAAIAAh4QABgVgHgNQgHgLgVgBQgLAAgLADQgJACgHAIQgHAIgFAOIAACDIgeAAIAAi9IAeAAIAAAZQAJgQAOgHQAPgGARAAQAWAAANAJQAOAIAFAPQAGgNAKgHQAJgGALgDQAMgCAMgBQAVAAAOAIQAOAJAGANQAHAOgBATIAACCgEgc5AgeIAAi9IAeAAIAAAiQAGgPAKgIQAKgJALgDQALgDAMAAIAEAAIgBAbIgFAAQgMABgLADQgMADgJAKQgIAJgGARIAAB7gAqmc7QgFgDAAgLQAAgMAFgDQAEgEAJABQAKgBAFAEQADADAAAMQAAALgDADQgFAEgKAAQgJAAgEgEgAKZY6IgVgEIAAgZIAWADIAZABQAeAAAQgOQAPgOAAghIAAgTQgGARgOAJQgOAKgbAAQgfAAgSgMQgQgMgHgWQgHgVAAgdQAAgaAHgXQAHgVAQgNQASgNAfAAQATAAAMAEQANAGAGAJQAIAIADAMIAAgkIAeAAIAACwQABAngXAWQgXAVgvABQgNAAgMgBgAKWVYQgLAKgEAQQgCAQAAATQgBAUAEAPQAEARALAJQAKAJAWABQAWAAANgJQANgIAFgQQAFgPAAgXQAAgWgFgQQgFgQgNgJQgNgIgWgBQgXABgKAKgAB4YhQARAAAKgFQALgEAHgKQAGgKAFgQIhMi8IAhAAIA6CdIACAAIA3idIAeAAIhEC2QgJAZgKARQgKAQgRAKQgQAJgcAAgAmVY7IAAkDIAdAAIAAAiQAGgRAOgKQAPgKAaAAQAgAAARAMQARAMAHAXQAGAVAAAeQAAAagGAWQgHAWgRAOQgRANggAAQgaAAgPgKQgOgJgGgRIAABngAlhVWQgNAKgGAPQgFARAAAXQAAAVAFARQAGAQANAJQAMAJAXAAQAWgBALgKQALgKADgRQAEgQgBgSQABgVgEgQQgEgQgLgKQgLgKgVgBQgXABgMAIgAVGX4QgbABgUgJQgUgJgKgWQgLgVAAglQAAgmALgVQAKgWAUgJQATgJAcABQAcgBATAJQAUAJAKAWQAKAVABAmQgBAlgKAVQgKAWgUAJQgSAJgaAAIgDgBgAUlVUQgMAHgFAQQgFAQAAAcQAAAbAFAQQAGAQALAHQANAGAUAAQAVAAANgGQALgHAGgQQAEgQAAgbQAAgcgEgQQgGgQgMgHQgNgGgUgBQgVABgMAGgARuX4QgcABgTgJQgUgJgKgWQgLgVAAglQAAgmALgVQAKgWAUgJQATgJAcABQAcgBATAJQAUAJAKAWQAKAVABAmQgBAlgKAVQgKAWgUAJQgSAJgaAAIgDgBgARNVUQgMAHgFAQQgFAQAAAcQAAAbAFAQQAGAQALAHQANAGAUAAQAVAAANgGQALgHAGgQQAEgQAAgbQAAgcgEgQQgGgQgMgHQgNgGgUgBQgVABgMAGgAvIX4QgbABgVgJQgTgJgKgWQgKgVAAglQAAgmAKgVQAKgWATgJQAVgJAbABQAcgBAUAJQATAJAKAWQAKAVAAAmQAAAlgKAVQgKAWgTAJQgTAJgaAAIgDgBgAvpVUQgMAHgFAQQgFAQAAAcQAAAbAFAQQAGAQAMAHQAMAGAUAAQAVAAAMgGQANgHAFgQQAEgQABgbQgBgcgEgQQgGgQgMgHQgNgGgUgBQgVABgMAGgA/PX4QgcABgUgJQgTgJgLgWQgKgVAAglQAAgmAKgVQALgWATgJQAUgJAcABQAbgBAUAJQAUAJAJAWQALAVAAAmQAAAlgLAVQgJAWgUAJQgSAJgbAAIgCgBgA/xVUQgLAHgGAQQgFAQABAcQAAAbAEAQQAGAQAMAHQAMAGAVAAQAVAAAMgGQAMgHAFgQQAFgQAAgbQAAgcgFgQQgGgQgMgHQgMgGgUgBQgWABgMAGgAdfX4QgcAAgUgOQgSgPgKgdIgCgQIgBgNIAAgLQAAgdAMgWQALgWAYgPQALgEAIgDQAKgBAIAAIAEAAQAgAAAVAgIAAgHIABgBIABgBIAcAAIABABIAAABIAABkIABAjIAFAfIgCABIgcAAQgBAAgCgHIgDgWIgGAJIgIAJQgIAGgLAEQgKADgMAAgAdIVbQgOAKgJAVIgEAOIgBAOIAAAIQAAASAHAPQAIAPANAMQAHACAGACQAGACAHAAIAHAAQA1AAAAhDIAAgMQAAgbgJgQQgKgRgSgEIgHgBIgFAAIgBAAQgVAAgPALgAZ5XuQgOgJgFgRIgEAhIgaAAIAAkKIAeAAIAABvQAGgRAOgKQAOgKAbAAQAgAAAQAMQARAMAHAXQAHAVAAAeQAAAagHAWQgHAWgRAOQgQANggAAQgbAAgPgKgAZ8VWQgNAKgGAPQgEARAAAXQAAAVAEARQAGAQANAJQANAJAWAAQAWgBALgKQALgKAEgRQADgQgBgSQABgVgDgQQgFgQgKgKQgLgKgWgBQgWABgNAIgAgbX4QgcAAgTgOQgTgPgJgdIgDgQIgBgNIAAgLQABgdAMgWQALgWAYgPQAKgEAJgDQAJgBAJAAIADAAQAfAAAWAgIAAgHIAAgBIABgBIAcAAIABABIAAABIAABkIABAjIAGAfIgCABIgcAAQgCAAgCgHIgDgWIgGAJIgHAJQgJAGgKAEQgKADgMAAgAgyVbQgOAKgIAVIgEAOIgCAOIAAAIQABASAGAPQAIAPAOAMQAGACAHACQAFACAHAAIAHAAQA1AAgBhDIAAgMQAAgbgJgQQgJgRgSgEIgHgBIgEAAIgBAAQgVAAgQALgAskXxQgOgIgGgOQgGgOABgSIAAiDIAdAAIAAB3QABAPACAKQADALAIAGQAIAFAPAAQAMAAALgDQAKgCAJgJQAIgHAFgRIAAiAIAfAAIAAC9IgaAAIgEgbQgFAMgKAHQgJAGgMADQgMACgLAAQgYAAgOgHgAzAXuQgOgJgFgRIgFAhIgaAAIAAkKIAfAAIAABvQAFgRAPgKQAOgKAaAAQAgAAARAMQARAMAGAXQAHAVAAAeQAAAagHAWQgGAWgRAOQgRANggAAQgbAAgOgKgAy+VWQgNAKgFAPQgFARAAAXQAAAVAFARQAFAQANAJQANAJAXAAQAWgBALgKQALgKADgRQADgQAAgSQAAgVgDgQQgEgQgKgKQgMgKgVgBQgXABgNAIgA2OX4QgdAAgSgOQgUgPgIgdIgDgQIgBgNIAAgLQAAgdAMgWQAMgWAXgPQAKgEAKgDQAIgBAKAAIADAAQAgAAAVAgIAAgHIABgBIAAgBIAcAAIABABIABABIAABkIABAjIAFAfIgCABIgcAAQgBAAgCgHIgDgWIgHAJIgHAJQgIAGgLAEQgKADgMAAgA2lVbQgOAKgJAVIgEAOIgBAOIAAAIQAAASAHAPQAHAPAOAMQAHACAGACQAGACAGAAIAHAAQA2AAAAhDIAAgMQAAgbgJgQQgKgRgSgEIgHgBIgFAAIgBAAQgVAAgPALgEAjmAX3QgLAAgGgDQgEgFAAgOQAAgNAEgFQAGgEALAAQAMAAAGAEQAFAFAAANQAAAOgFAFQgFADgKAAIgDAAgAXqXzQgMgFgGgNQgFgNABgZIAAhpIgcAAIAAgaIAcAAIAAgtIAdAAIAAAtIAvAAIAAAaIgvAAIAABnQAAAPACAIQACAIAGADQAHADAKAAIALgBIAKgBIAAAZIgKABIgLABIgEAAQgSAAgMgEgApNXzQgMgFgGgNQgFgNAAgZIAAhpIgcAAIAAgaIAcAAIAAgtIAeAAIAAAtIAuAAIAAAaIguAAIAABnQAAAPACAIQACAIAGADQAGADALAAIALgBIAKgBIAAAZIgLABIgLABIgDAAQgTAAgLgEgEAhqAXtQgLgJAAgVIAAjkIAfAAIAADcQAAAOADAFQAEAEAKAAIAHgBIAHgBIAAAZIgJABIgKABQgWAAgKgKgEAgGAXtQgLgJAAgVIAAjkIAeAAIAADcQABAOAEAFQADAEAKAAIAHgBIAHgBIAAAZIgJABIgKABQgVAAgLgKgAitXtQgLgJAAgVIAAjkIAeAAIAADcQAAAOAEAFQAEAEAKAAIAHgBIAHgBIAAAZIgJABIgLABQgVAAgKgKgAOuX1IAAikIggAAIAAgZIAgAAIAAgBQAAghAIgRQAHgQAPgGQAOgGAUAAIAKABIAKACIAAAXIgJgBIgLAAQgOAAgGAFQgIAEgDAMQgDAMAAAVIAsAAIAAAZIgsAAIAACkgAITX1IAAh3QAAgPgCgLQgDgKgIgFQgIgGgPABQgMgBgMADQgKADgKAHQgIAJgFAQIAACAIgfAAIAAi9IAfAAIAAAbQAFgMAKgHQAKgGAMgDQALgCAMAAQAZAAAOAIQANAHAGAOQAGAOgBASIAACDgAE6X1IAAi9IAdAAIAAC9gA6jX1IgvibIgCAAIgwCbIglAAIgzi9IAfAAIAnCfIADAAIAuifIAkAAIAwCfIACAAIApifIAdAAIg1C9gEgh8AX1IAAh1Ih4AAIAAB1IgfAAIAAjzIAfAAIAABjIB4AAIAAhjIAgAAIAADzgEAjZAWvIAAgPQgBgNAHgLQAGgMATgPIAQgPQAGgGACgHQACgHAAgKQAAgPgEgIQgEgIgKgDQgKgDgSABQgMAAgOABQgNACgLAEIAAgcQAJgDANgCQANgDASAAQAaAAAQAFQARAGAJANQAHAOABAYQAAATgFALQgEALgHAIQgIAIgLAIQgLAHgGAGQgGAGgCAGQgCAGAAAIIAAAKgAE7USQgEgDAAgMQAAgLAEgDQAEgEAKAAQAJAAAEAEQAEADABALQgBAMgEADQgEAEgJgBQgKABgEgEgAAwP8QAKgPAGgRQAIgQAFgPQAEgQgBgNIAdAAQABAPgGARQgGARgJAQQgIAPgJAMgA9MP8QAKgPAGgRQAIgQAFgPQADgQAAgNIAdAAQABAPgGARQgGARgJAQQgIAPgJAMgALqPPQgcABgUgJQgTgJgLgVQgKgWAAgmQAAglAKgVQALgWATgJQAUgJAcAAQAbAAAUAJQAUAJAJAWQAKAVABAlQgBAmgKAWQgJAVgUAJQgSAJgbAAIgCgBgALIMsQgLAGgGAQQgFAQABAbQAAAcAEAQQAGAQAMAGQAMAHAVAAQAVAAAMgHQAMgGAFgQQAFgQAAgcQAAgbgFgQQgGgQgLgGQgNgIgUAAQgWAAgMAIgAhIPPQgcABgUgJQgTgJgLgVQgKgWAAgmQAAglAKgVQALgWATgJQAUgJAcAAQAbAAAUAJQAUAJAIAWQAKAVABAlQgBAmgKAWQgIAVgUAJQgSAJgbAAIgCgBgAhqMsQgLAGgGAQQgFAQABAbQAAAcAEAQQAGAQAMAGQAMAHAVAAQAVAAAMgHQAMgGAFgQQAFgQAAgcQAAgbgFgQQgGgQgLgGQgNgIgUAAQgWAAgMAIgAySPPQgcABgUgJQgTgJgLgVQgKgWAAgmQAAglAKgVQALgWATgJQAUgJAcAAQAbAAAUAJQAUAJAJAWQAKAVABAlQgBAmgKAWQgJAVgUAJQgSAJgbAAIgCgBgAy0MsQgLAGgGAQQgFAQABAbQAAAcAEAQQAGAQAMAGQAMAHAVAAQAVAAAMgHQAMgGAFgQQAFgQAAgcQAAgbgFgQQgGgQgLgGQgNgIgUAAQgWAAgMAIgA/FPPQgcABgUgJQgTgJgLgVQgKgWAAgmQAAglAKgVQALgWATgJQAUgJAcAAQAbAAAUAJQAUAJAJAWQAKAVABAlQgBAmgKAWQgJAVgUAJQgSAJgbAAIgCgBgA/nMsQgLAGgGAQQgFAQABAbQAAAcAEAQQAGAQAMAGQAMAHAVAAQAVAAAMgHQAMgGAFgQQAFgQAAgcQAAgbgFgQQgGgQgLgGQgNgIgUAAQgWAAgMAIgAHTPDQgRgNgHgVQgGgXAAgdQAAgaAGgWQAHgWARgNQARgOAfgBQAbABAPAJQAOAKAFARIAAhuIAeAAIAAEKIgYAAIgGgfQgFAPgPAKQgPAJgaAAQgfAAgRgMgAHmMvQgLALgDAQQgDARAAASQAAAUAEARQADAQALAKQAKAKAXAAQAWAAANgJQAMgIAGgRQAFgQgBgXQABgWgFgPQgGgRgMgJQgNgJgWgBQgXABgLAKgA2pPDQgRgNgHgVQgGgXAAgdQAAgaAGgWQAHgWARgNQARgOAfgBQAbABAPAJQAOAKAFARIAAhuIAeAAIAAEKIgYAAIgGgfQgFAPgPAKQgPAJgaAAQgfAAgRgMgA2WMvQgLALgDAQQgDARAAASQAAAUAEARQADAQALAKQAKAKAXAAQAWAAANgJQAMgIAGgRQAFgQgBgXQABgWgFgPQgGgRgMgJQgNgJgWgBQgXABgLAKgATFPJQgNgEgFgNQgGgNAAgZIAAhqIgbAAIAAgZIAbAAIAAgtIAeAAIAAAtIAvAAIAAAZIgvAAIAABpQAAAOADAIQABAIAHADQAGADAKAAIAMgBIAKgBIAAAaIgLABIgLAAIgEAAQgSAAgLgFgAq3PJQgNgEgFgNQgGgNAAgZIAAhqIgcAAIAAgZIAcAAIAAgtIAeAAIAAAtIAvAAIAAAZIgvAAIAABpQAAAOADAIQABAIAHADQAGADAKAAIAMgBIAKgBIAAAaIgLABIgLAAIgEAAQgSAAgLgFgAUqPNQgFgCgDgFQgBgEAAgLQgBgNAFgFQAGgEAMABQAMgBAFAEQAFAFAAANQAAALgCAEQgCAFgFACQgFABgIAAQgJAAgEgBgApSPNQgFgCgDgFQgBgEAAgLQgBgNAFgFQAGgEAMABQAMgBAFAEQAFAFAAANQAAALgCAEQgCAFgFACQgFABgIAAQgJAAgEgBgAPxPMIAAh4QAAgPgCgJQgEgKgHgGQgJgFgOgBQgMAAgLADQgLACgKAJQgIAIgFAQIAACAIgfAAIAAi9IAfAAIAAAbQAFgMAKgGQAKgIAMgCQALgCAMgBQAZABAOAHQANAJAGANQAGAOAAASIAACDgAEGPMIAAjzIAgAAIAADzgAj+PMIh4jWIgCAAIAADWIgeAAIAAjzIAxAAIBvDJIACAAIAAjJIAfAAIAADzgAuLPMIAAh4QAAgPgCgJQgEgKgHgGQgJgFgOgBQgMAAgLADQgLACgKAJQgIAIgFAQIAACAIgfAAIAAi9IAfAAIAAAbQAFgMAKgGQAKgIAMgCQALgCAMgBQAZABAOAHQANAJAGANQAGAOAAASIAACDgA52PMIAAjzIAgAAIAADzgEgh7APMIh4jWIgCAAIAADWIgeAAIAAjzIAxAAIBvDJIACAAIAAjJIAfAAIAADzgAREMbQAFgNAFgQIAHgfQADgPAAgOIAeAAQgBANgEAPQgDAQgHARQgGAPgGANgAs4MbQAGgNAEgQIAHgfQADgPAAgOIAeAAQgBANgEAPQgDAQgHARQgGAPgGANgANFHoIgVgEIAAgZIAWADIAYABQAfABAQgPQAPgOAAghIAAgTQgGARgOAJQgOAKgbAAQggAAgRgMQgRgMgGgWQgIgVABgdQgBgaAIgXQAGgVARgNQARgNAgAAQASAAAMAEQANAGAHAJQAHAIAEALIAAgjIAeAAIAACwQAAAngWAWQgXAWgvAAQgNAAgMgBgANBEGQgLAKgDAQQgDAQAAATQAAAUADAPQAEARALAJQALAJAVABQAXAAANgJQANgIAEgQQAGgPAAgXQAAgWgGgQQgEgQgNgIQgNgJgXAAQgWAAgLAKgAEHHpIAAkDIAfAAIAAAiQAFgRAPgKQAOgKAaAAQAgAAARAMQARAMAGAWQAHAXAAAdQAAAagHAWQgGAWgRANQgRAOggABQgbgBgOgKQgOgJgFgRIAABngAE7EFQgNAIgFAQQgFARAAAXQAAAVAFARQAFAQANAJQANAJAXAAQAWgBALgJQALgLADgQQADgRAAgSQAAgVgDgQQgEgQgKgKQgMgKgVAAQgXAAgNAJgAAqHpIAAkDIAeAAIAAAiQAGgRAOgKQAOgKAbAAQAgAAAQAMQARAMAHAWQAHAXAAAdQAAAagHAWQgHAWgRANQgQAOggABQgbgBgPgKQgOgJgFgRIAABngABeEFQgNAIgGAQQgEARAAAXQAAAVAEARQAGAQANAJQANAJAWAAQAWgBALgJQALgLAEgQQADgRAAgSQAAgVgDgQQgFgQgKgKQgLgKgWAAQgWAAgNAJgA72HPQARAAAKgEQALgGAHgJQAGgKAFgQIhLi8IAgAAIA6CdIACAAIA2idIAfAAIhEC2QgIAZgKAQQgLARgQAKQgRAJgcAAgAqYGeQgUgJgJgWQgLgVAAglQAAgmALgWQAKgVASgJQAUgJAbABQAYgBAPAIQAPAHAIALQAIAMADANQADAPAAAOIgBAKIgBAMIiBAIQAAAVAHANQAFANANAHQAOAGAWAAQAQAAAQgEQAQgDAMgGIAAAcIgQAGIgXAEQgMACgOAAIgCAAQgaAAgTgJgAqLEDQgMAHgEAOQgFAOgBATIBlgHQAAgPgDgMQgDgNgKgHQgKgIgUABQgWgBgLAIgA3oGnQgcAAgUgJQgTgJgLgWQgKgVAAglQAAgmAKgWQALgVATgJQAUgJAcABQAbgBAUAJQAUAJAJAVQAKAWABAmQgBAlgKAVQgJAWgUAJQgSAJgbAAIgCAAgA4KECQgLAHgGAQQgFAQABAcQAAAbAEAQQAGAQAMAGQAMAHAVAAQAVAAAMgHQAMgGAFgQQAFgQAAgbQAAgcgFgQQgGgQgLgHQgNgGgUAAQgWAAgMAGgA/TGnQgbAAgVgJQgTgJgKgWQgKgVAAglQAAgmAKgWQAKgVATgJQAVgJAbABQAcgBAUAJQATAJAKAVQAKAWAAAmQAAAlgKAVQgKAWgTAJQgTAJgaAAIgDAAgA/0ECQgMAHgFAQQgFAQAAAcQAAAbAFAQQAGAQAMAGQAMAHAUAAQAVAAAMgHQANgGAEgQQAFgQABgbQgBgcgFgQQgFgQgMgHQgNgGgUAAQgVAAgMAGgA1FGfQgOgIgFgOQgHgOABgSIAAiDIAeAAIAAB3QAAAPADAKQADALAHAFQAJAGAPAAQAMAAAKgDQAKgCAJgJQAIgHAGgRIAAiAIAeAAIAAC9IgaAAIgDgcQgGANgKAHQgJAGgLADQgMADgMAAQgYgBgOgHgAQcGlQgMAAgFgDQgEgFAAgOQAAgNAEgFQAFgEAMAAQANAAAFAEQAFAFAAANQAAAOgFAFQgFADgKAAIgDAAgAl5GkIgTgCQgKgBgGgCIAAgZIARADIATADIATABQAWAAALgHQALgGAAgRQABgKgEgGQgDgHgKgEQgIgEgTgEQgUgFgLgGQgMgHgFgKQgFgKABgRQAAgWARgPQARgNAiAAQAOAAANABQANACAHACIgCAaQgIgDgMgCQgLgCgOAAQgUAAgKAFQgKAGAAARQAAAJADAFQADAFAIAEQAHADAPAEQAWAEANAGQANAIAGAKQAFAMAAARQAAAcgSAOQgTANgjAAIgUgBgAwiGbQgKgJAAgVIAAjkIAeAAIAADcQAAAOAEAEQAEAFAKAAIAGAAIAIgCIAAAZIgJABIgLABQgVAAgLgKgEgjNAGjIhGAAIAAjzIBGAAQAaAAAWAFQAVAFAPANQAQANAJAYQAIAYAAAmQAAAugPAbQgPAagaALQgZALghAAIgDAAgEgj0AGHIAmAAQAaABASgJQAUgIALgVQALgUgBgkQAAgngLgVQgLgUgTgIQgTgHgZAAIgmAAgAK+GjIAAh3QAAgPgCgLQgDgKgIgFQgIgGgPABQgMgBgLADQgLADgJAHQgIAJgGAQIAACAIgeAAIAAi9IAeAAIAAAbQAGgMAJgHQAKgGAMgDQAMgDALABQAZgBAOAJQANAHAHAOQAFAOAAASIAACDgAHlGjIAAi9IAeAAIAAC9gAgzGjIAAi9IAeAAIAAC9gAh8GjIhEhYIgLAAIAABYIgeAAIAAkKIAeAAIAACbIAMAAIBBhOIAlAAIhQBYIBVBlgAr9GjIhFhYIgKAAIAABYIgeAAIAAkKIAeAAIAACbIALAAIBChOIAlAAIhQBYIBUBlgAvIGjIAAi9IAeAAIAAC9gAQOFdIAAgPQAAgNAHgMQAHgLASgPIARgPQAFgGACgHQACgHAAgKQAAgPgEgIQgEgIgKgDQgKgDgRABQgNAAgNABQgPACgKAEIAAgcQAIgDAOgCQAOgDARAAQAaAAARAFQAQAGAJAOQAHANAAAYQAAASgDAMQgFALgHAIQgJAIgKAIQgLAHgGAGQgFAGgDAGQgCAGAAAIIAAAKgAHmDAQgEgDAAgMQAAgLAEgDQAEgEAKAAQAJAAAFAEQAEADAAALQAAAMgEADQgFAEgJgBQgKABgEgEgAgyDAQgEgDAAgMQAAgLAEgDQAFgEAJAAQAKAAAEAEQAEADAAALQAAAMgEADQgEAEgKgBQgJABgFgEgAvHDAQgEgDAAgMQAAgLAEgDQAEgEAKAAQAJAAAFAEQAEADAAALQAAAMgEADQgFAEgJgBQgKABgEgEgAzjiaIgVgDIAAgZIAWADIAZABQAeAAAQgOQAPgOAAghIAAgSQgGAQgOAKQgOAJgbAAQgfAAgSgMQgQgMgHgVQgHgWAAgdQAAgbAHgVQAHgWAQgNQASgNAfgBQATABAMAFQANAEAGAKQAIAIADAMIAAgkIAeAAIAACvQABAogXAWQgXAVgvABQgNAAgMgCgAzml7QgLAKgEAQQgCAQAAATQgBAUAEAPQAEARALAJQAKAKAWAAQAWAAANgJQANgIAFgQQAFgQAAgWQAAgWgFgQQgFgQgNgJQgNgIgWgBQgXABgKAKgAczjjQgUgJgKgVQgLgWAAgmQAAglALgVQAKgWATgJQAUgJAbAAQAYABAOAGQAPAIAJALQAHAMADANQADAOAAAOIgBAKIgBANIiAAIQAAAVAGAMQAFAOAOAHQANAGAXAAQAQAAAPgDQAQgEAMgFIAAAcIgQAFIgWAEQgNACgNgBIgDABQgaAAgSgJgAc/l+QgMAHgEAOQgEAOgBATIBlgHQgBgPgCgMQgEgNgKgHQgKgIgTAAQgWAAgMAIgAZojjQgUgJgKgVQgKgWAAgmQAAglAKgVQALgWASgJQAUgJAbAAQAYABAPAGQAPAIAIALQAIAMADANQACAOABAOIgBAKIgBANIiBAIQABAVAFAMQAGAOANAHQAOAGAWAAQAQAAAQgDQAQgEAMgFIAAAcIgQAFIgXAEQgMACgNgBIgDABQgaAAgTgJgAZ1l+QgMAHgEAOQgFAOgBATIBlgHQAAgPgDgMQgDgNgKgHQgKgIgUAAQgWAAgLAIgAMOjbQgbABgUgJQgTgJgLgVQgKgWAAgmQAAglAKgVQALgWATgJQAUgJAbAAQAcAAAUAJQATAJALAWQAJAVABAlQgBAmgJAWQgLAVgTAJQgSAJgbAAIgDgBgALtl+QgMAGgFAQQgFAQABAbQAAAcAEAQQAGAQAMAHQAMAGAUAAQAWAAAMgGQAMgHAFgQQAFgQAAgcQAAgbgFgQQgFgQgMgGQgNgIgVAAQgVAAgMAIgAHcjbQgbABgUgJQgTgJgLgVQgKgWAAgmQAAglAKgVQALgWATgJQAUgJAbAAQAcAAAUAJQATAJALAWQAJAVABAlQgBAmgJAWQgLAVgTAJQgSAJgbAAIgDgBgAG7l+QgMAGgFAQQgFAQABAbQAAAcAEAQQAGAQAMAHQANAGATAAQAWAAAMgGQAMgHAFgQQAFgQAAgcQAAgbgFgQQgFgQgMgGQgNgIgVAAQgVAAgMAIgAm2jjQgUgJgJgVQgLgWAAgmQAAglALgVQAKgWASgJQAUgJAbAAQAYABAPAGQAPAIAIALQAIAMADANQACAOABAOIgBAKIgBANIiBAIQABAVAFAMQAGAOANAHQAOAGAWAAQAQAAAQgDQAQgEAMgFIAAAcIgQAFIgXAEQgMACgNgBIgDABQgaAAgTgJgAmpl+QgMAHgEAOQgFAOgBATIBlgHQAAgPgDgMQgDgNgKgHQgKgIgUAAQgWAAgLAIgA/xjbQgbABgUgJQgUgJgJgVQgLgWAAgmQAAglALgVQAJgWAUgJQAUgJAbAAQAcAAAUAJQATAJALAWQAJAVABAlQgBAmgJAWQgLAVgTAJQgSAJgbAAIgDgBgEggSgF+QgLAGgFAQQgGAQAAAbQAAAcAGAQQAFAQAMAHQANAGATAAQAWAAAMgGQAMgHAFgQQAFgQAAgcQAAgbgFgQQgFgQgMgGQgNgIgVAAQgUAAgNAIgAsljbQgcABgTgPQgTgPgJgdIgCgPIgBgOIAAgLQgBgdAMgWQAMgWAYgPQAKgEAJgCQAJgCAJAAIADAAQAgAAAVAgIAAgIIABAAIABgBIAcAAIABABIABAAIAABlIAAAjIAGAgIgDAAIgcAAQgBAAgBgHIgDgWIgHAJIgHAJQgJAGgKAEQgKAEgNgBgAs7l4QgPAKgJAVIgDAOQgCAHABAHIAAAIQgBATAIAPQAHAOAOAMQAGADAGABQAHABAGAAIAHAAQA2AAAAhCIAAgLQAAgcgKgQQgKgRgSgEIgGgBIgGgBIAAAAQgWAAgOAMgASSjgQgNgFgGgNQgFgNAAgZIAAhpIgcAAIAAgaIAcAAIAAgtIAfAAIAAAtIAuAAIAAAaIguAAIAABnQgBAPADAIQABAIAHADQAFADAMAAIALgBIAJgBIAAAaIgKAAIgLABIgEAAQgSAAgLgEgAARjgQgMgFgFgNQgFgNAAgZIAAhpIgcAAIAAgaIAcAAIAAgtIAdAAIAAAtIAvAAIAAAaIgvAAIAABnQgBAPADAIQACAIAGADQAGADALAAIALgBIAKgBIAAAaIgKAAIgLABIgEAAQgTAAgLgEgAu7jgQgNgFgFgNQgGgNAAgZIAAhpIgcAAIAAgaIAcAAIAAgtIAfAAIAAAtIAuAAIAAAaIguAAIAABnQgBAPADAIQABAIAHADQAFADAMAAIALgBIAKgBIAAAaIgLAAIgLABIgEAAQgSAAgLgEgAfojdQgEgCgDgFQgCgFAAgJQAAgOAFgEQAFgFAMABQAMgBAFAFQAGAEAAAOQAAAJgCAFQgCAFgFACQgFABgJAAQgIAAgFgBgAjxjdIgUgCQgJgBgGgCIAAgZIARADIATACIATABQAWABALgGQALgHAAgRQABgKgEgHQgDgGgJgEQgKgEgRgEQgVgFgMgGQgLgHgFgKQgFgLABgQQAAgXARgOQARgNAigBQAOABANACQANABAIACIgDAbQgIgEgMgCQgLgCgOAAQgUgBgKAHQgKAFAAAQQAAAKADAFQADAGAIADQAHADAPAEQAWAEANAHQANAGAGAMQAFALAAASQAAAbgSAOQgSANgkAAIgUgBgAXHjeIAAi9IAeAAIAAAjQAGgQAKgJQAJgIAMgCQALgDAMgBIAEAAIgBAbIgFAAQgMAAgLAEQgMAEgJAIQgIAKgGAQIAAB8gAVqjeIAAh3QABgQgDgJQgDgLgIgFQgIgGgPAAQgMAAgLADQgLACgJAJQgIAIgGAQIAACAIgeAAIAAkKIAeAAIAABoQAGgMAJgGQAKgIAMgCQAMgDALAAQAZABAOAHQANAJAHANQAFAOAAASIAACDgAObjeIAAi9IAeAAIAAAjQAFgQALgJQAJgIAMgCQALgDAMgBIADAAIgBAbIgEAAQgMAAgLAEQgMAEgJAIQgJAKgFAQIAAB8gAEPjeIgvibIgCAAIgwCbIglAAIgzi9IAfAAIAnCeIADAAIAuieIAkAAIAwCeIACAAIApieIAdAAIg1C9gAobjeIhFhYIgKAAIAABYIgeAAIAAkKIAeAAIAACaIALAAIBChNIAlAAIhQBYIBUBlgA1pjeIAAh3QAAgQgCgJQgDgLgIgFQgIgGgPAAQgMAAgMADQgKACgKAJQgIAIgFAQIAACAIgfAAIAAi9IAfAAIAAAbQAFgMAKgGQAKgIAMgCQALgDAMAAQAZABAOAHQANAJAGANQAGAOgBASIAACDgA5CjeIAAi9IAdAAIAAC9gA7EjeIgvibIgCAAIgvCbIglAAIg0i9IAeAAIApCeIABAAIAvieIAkAAIAwCeIADAAIAnieIAeAAIg0C9gEgiHgDeIhDhiIgGAAIgFABIgfAAIAABhIgfAAIAAjzIA+AAQAhAAAVAHQAUAHAJAPQAJAQAAAbQAAAfgMAQQgNARgZAGIBJBlgEgj0gFaIAbAAQAXAAAOgDQAOgDAHgLQAGgKAAgUQAAgSgGgKQgHgJgOgFQgOgDgXABIgbAAgA5BnBQgEgDAAgMQAAgLAEgEQAEgDAKAAQAJAAAEADQAEAEABALQgBAMgEADQgEADgJAAQgKAAgEgDgAELrBIgMgBIgLgBIAAgZIALABIAOABQANAAAHgEQAHgFACgMQADgLAAgSIAAi4IAeAAIAAC6QAAAegHAQQgHAQgOAGQgOAFgTAAIgDAAgEgjagMJQgTgFgPgOQgPgNgHgZQgIgYgBgmQABgvAOgbQAOgcAZgMQAagMAjAAQARAAAMACQAMACALAEIAAAcQgKgEgNgCQgMgCgQAAQgcAAgSAJQgTAJgIAVQgJAWAAAkQgBAnAJAUQAJAWARAIQARAJAbgBQARAAAOgCQANgCAOgFIAAAbQgKAEgQADQgOAEgTAAIgEAAQgXAAgTgGgAVSsMQgUgJgKgWQgKgVAAglQAAgmAKgWQALgVASgJQAUgJAbAAQAYAAAPAIQAPAHAIALQAIAMADAOQACAOABAOIgBAKIgBALIiBAJQABAUAFAOQAGANANAGQAOAHAWAAQAQAAAQgEQAQgDAMgGIAAAdIgQAEIgWAFQgNABgNABIgDAAQgaAAgTgJgAVfunQgMAHgEAOQgFAOgBAUIBlgIQAAgPgDgMQgDgMgKgIQgKgHgUAAQgWAAgLAHgAHXsDQgbAAgVgJQgTgJgKgWQgKgVAAglQAAgmAKgWQAKgVATgJQAVgJAbAAQAcAAAUAJQATAJAKAVQAKAWAAAmQAAAlgKAVQgKAWgTAJQgTAJgaAAIgDAAgAG2unQgMAGgFAQQgFAQAAAcQAAAbAFAQQAGAQAMAGQAMAHAUAAQAVAAAMgHQANgGAEgQQAFgQABgbQgBgcgFgQQgFgQgMgGQgNgIgUABQgVgBgMAIgAq/sMQgUgJgKgWQgLgVAAglQAAgmALgWQAKgVATgJQAUgJAbAAQAYAAAOAIQAPAHAJALQAHAMADAOQADAOAAAOIgBAKIgBALIiAAJQAAAUAGAOQAFANAOAGQANAHAXAAQAQAAAPgEQAQgDAMgGIAAAdIgQAEIgWAFQgMABgOABIgDAAQgaAAgSgJgAqzunQgMAHgEAOQgEAOgBAUIBkgIQAAgPgCgMQgEgMgKgIQgKgHgTAAQgWAAgMAHgAwOsMQgUgJgKgWQgLgVAAglQAAgmALgWQAKgVATgJQATgJAcAAQAXAAAPAIQAPAHAJALQAIAMADAOQACAOAAAOIAAAKIgBALIiBAJQAAAUAGAOQAFANANAGQAOAHAWAAQARAAAQgEQAQgDALgGIAAAdIgQAEIgWAFQgNABgNABIgDAAQgaAAgSgJgAwCunQgMAHgEAOQgFAOAAAUIBlgIQAAgPgEgMQgCgMgKgIQgLgHgTAAQgWAAgMAHgA4LsMQgTgJgKgWQgLgVAAglQAAgmALgWQAKgVASgJQAUgJAbAAQAYAAAPAIQAPAHAIALQAIAMADAOQADAOAAAOIgBAKIgBALIiBAJQAAAUAHAOQAFANANAGQAOAHAWAAQAQAAAQgEQAQgDALgGIAAAdIgPAEIgXAFQgMABgOABIgCAAQgaAAgTgJgA3+unQgMAHgEAOQgFAOgBAUIBlgIQAAgPgDgMQgDgMgKgIQgKgHgUAAQgWAAgLAHgA/2sDQgbAAgVgJQgTgJgKgWQgKgVAAglQAAgmAKgWQAKgVATgJQAVgJAbAAQAcAAAUAJQATAJAKAVQAKAWAAAmQAAAlgKAVQgKAWgTAJQgTAJgaAAIgDAAgEggXgOnQgMAGgFAQQgFAQAAAcQAAAbAFAQQAGAQAMAGQAMAHAUAAQAWAAALgHQANgGAEgQQAFgQABgbQgBgcgFgQQgFgQgMgGQgMgIgVABQgVgBgMAIgAAIsQQgQgNgGgVQgHgXABgcQgBgbAHgWQAGgWAQgNQARgOAfgBQAcAAAOAKQAOAKAGARIAAhuIAeAAIAAEKIgZAAIgFgfQgGAPgOAKQgPAJgbABQgfgBgRgMgAAbukQgKALgDARQgEAQAAATQABATADARQADAQALAKQALAKAWAAQAXAAANgJQAMgJAFgQQAGgQgBgWQABgXgGgPQgFgRgMgJQgNgJgXAAQgWAAgMAKgAl/sDQgbgBgUgPQgSgOgKgeIgCgOIgBgOIAAgLQAAgdAMgWQALgWAYgPQAKgFAJgCQAJgCAJAAIADAAQAgAAAWAiIAAgIIAAgBIACAAIAcAAIABAAIAAABIAABkIABAjIAFAfIgCACIgcAAQgCAAgBgIIgDgXIgGAKIgHAIQgKAIgJADQgLADgNABgAmVuiQgOALgJAVIgEAOIgBAOIAAAIQAAATAHAOQAIAQANAKQAGAEAHABQAGABAHAAIAHAAQA1ABAAhCIAAgNQAAgbgKgQQgJgRgTgFIgGAAIgFgBIgBAAQgVAAgPALgAYIsHQgFgBgCgFQgCgEAAgLQgBgNAFgFQAFgDANAAQAMAAAFADQAGAFgBANQAAALgCAEQgCAFgFABQgFACgIAAQgJAAgEgCgATZsHIAAh4QAAgWgIgMQgHgMgVAAQgLABgKACQgKADgHAHQgHAHgFAOIAACEIgeAAIAAh4QABgWgIgMQgHgMgUAAQgLAAgKADQgKACgHAIQgHAHgFAPIAACDIgeAAIAAi9IAeAAIAAAZQAJgRAOgGQAPgGARAAQAWABANAIQANAIAHAOQAFgMAKgHQAJgGAMgDQALgCALgBQAWAAAOAJQAOAHAGAOQAHAOgBATIAACCgAM8sHIAAh4QAAgOgCgLQgDgJgIgGQgIgFgPgBQgMAAgLADQgLADgJAHQgIAJgGAQIAACAIgeAAIAAi9IAeAAIAAAbQAGgMAJgHQAKgGAMgDQAMgCALgBQAZAAAOAJQANAHAHAOQAFAOAAASIAACDgAJjsHIAAi9IAeAAIAAC9gAhmsHIAAh4QAAgOgDgLQgCgJgJgGQgHgFgPgBQgMAAgMADQgLADgIAHQgJAJgGAQIAACAIgdAAIAAi9IAdAAIAAAbQAHgMAJgHQAKgGALgDQAMgCAMgBQAYAAAOAJQAOAHAGAOQAFAOAAASIAACDgAtgsHIAAi9IAdAAIAAAiQAHgPAJgIQAKgJALgDQAMgDAMAAIADAAIgBAbIgEAAQgNABgLADQgLADgJAKQgJAJgGARIAAB7gAyIsHIAAh4QABgOgDgLQgDgJgIgGQgIgFgPgBQgMAAgLADQgLADgJAHQgIAJgGAQIAACAIgeAAIAAkKIAeAAIAABoQAGgMAJgHQAKgGAMgDQAMgCALgBQAZAAAOAJQANAHAHAOQAFAOAAASIAACDgA6EsHIAAh4QAAgWgHgMQgIgMgVAAQgMABgJACQgKADgHAHQgHAHgFAOIAACEIgdAAIAAh4QAAgWgIgMQgHgMgUAAQgLAAgKADQgKACgHAIQgHAHgFAPIAACDIgeAAIAAi9IAeAAIAAAZQAJgRAOgGQAPgGAQAAQAXABANAIQANAIAHAOQAFgMAJgHQAKgGAMgDQAKgCAMgBQAWAAAOAJQANAHAHAOQAGAOAAATIAACCgAJkvqQgEgDAAgLQAAgMAEgDQAEgEAKABQAJgBAFAEQAEADAAAMQAAALgEADQgFAEgJAAQgKAAgEgEgAEuvqQgEgDAAgLQAAgMAEgDQAEgEAKABQAJgBAFAEQAEADAAAMQAAALgEADQgFAEgJAAQgKAAgEgEgAir0BQAJgOAHgQQAHgQAFgRQAEgPAAgOIAdAAQAAAQgGARQgFARgJAPQgIAQgJALgA7k0BQAJgOAIgQQAHgQAEgRQAEgPABgOIAdAAQgBAQgFARQgGARgIAPQgJAQgIALgAIN0tQgbABgVgJQgTgJgKgVQgKgWAAgmQAAglAKgVQAKgWATgJQAVgJAbABQAcgBAUAJQATAJAKAWQAKAVAAAlQAAAmgKAWQgKAVgTAJQgTAJgaAAIgDgBgAHs3RQgMAHgFAQQgFAQAAAbQAAAcAFAQQAGAQAMAHQAMAGAUAAQAVAAAMgGQANgHAEgQQAFgQABgcQgBgbgFgQQgFgQgMgHQgNgGgUgBQgVABgMAGgAnv01QgTgJgKgVQgLgWABgmQgBglALgVQAKgWATgJQAUgJAaABQAYAAAPAGQAQAIAHALQAJAMACANQADAOAAAOIgBAKIgBANIiAAIQAAAUAGANQAGAOANAHQANAGAXAAQAPAAAQgEQARgDALgFIAAAbIgPAGIgXAEQgMABgOAAIgDABQgaAAgTgJgAni3QQgLAHgFAOQgEAOgBATIBkgHQAAgPgCgMQgDgNgLgHQgJgIgVAAQgVAAgMAIgAwr0tQgbABgUgJQgUgJgJgVQgLgWAAgmQAAglALgVQAJgWAUgJQAUgJAbABQAdgBATAJQAUAJAJAWQALAVAAAlQAAAmgLAWQgJAVgUAJQgSAJgbAAIgDgBgAxL3RQgNAHgEAQQgGAQAAAbQABAcAFAQQAFAQAMAHQANAGATAAQAWAAAMgGQAMgHAFgQQAFgQAAgcQAAgbgFgQQgGgQgMgHQgMgGgVgBQgUABgMAGgEggngU1QgTgJgKgVQgLgWAAgmQAAglALgVQAKgWASgJQAUgJAbABQAYAAAPAGQAPAIAIALQAIAMADANQADAOAAAOIgBAKIgBANIiBAIQAAAUAHANQAFAOANAHQAOAGAWAAQAQAAAQgEQAQgDALgFIAAAbIgPAGIgXAEQgMABgOAAIgCABQgaAAgTgJgEggagXQQgMAHgEAOQgFAOgBATIBlgHQAAgPgDgMQgDgNgKgHQgKgIgUAAQgWAAgLAIgAD205QgQgMgHgXQgHgVAAgeQAAgaAHgWQAHgWAQgOQARgNAgAAQAbAAAOAKQAOAJAGARIAAhuIAeAAIAAEKIgZAAIgFgfQgFAPgQAJQgOAKgaAAQggAAgRgMgAEK3MQgLAJgEASQgCAQAAASQgBAVAEAQQAEAQALAKQAKAKAWAAQAWAAANgJQANgJAFgPQAFgRAAgXQAAgWgFgQQgFgQgNgJQgNgJgWgBQgXABgKALgA1B05QgRgMgGgXQgIgVABgeQgBgaAIgWQAGgWARgOQARgNAfAAQAbAAAPAKQAOAJAGARIAAhuIAdAAIAAEKIgZAAIgEgfQgGAPgPAJQgPAKgaAAQgfAAgRgMgA0u3MQgLAJgDASQgDAQAAASQAAAVADAQQAEAQALAKQALAKAVAAQAXAAANgJQANgJAEgPQAGgRAAgXQAAgWgGgQQgEgQgNgJQgNgJgXgBQgWABgLALgAKh0wQgFgBgDgFQgBgFAAgJQgBgOAFgEQAGgFAMABQAMgBAFAFQAFAEAAAOQAAAJgCAFQgCAFgFABQgFACgIAAQgJAAgEgCgAkp0vIgUgCQgJgBgGgCIAAgZIARADIATACIASABQAXABALgGQALgHgBgRQABgLgDgGQgEgGgJgEQgJgEgSgEQgVgFgLgGQgMgHgEgKQgFgLAAgQQAAgWARgPQASgNAhAAQAOAAANACQANABAIACIgDAaQgIgDgLgCQgMgCgOAAQgUgBgJAHQgKAFAAAQQAAAKADAFQADAGAHADQAIADAPAEQAVAEANAHQAOAGAFAMQAGALAAARQgBAcgSAOQgSANgjAAIgUgBgAuX0wQgEgBgDgFQgCgFAAgJQgBgOAGgEQAFgFAMABQANgBAEAFQAGAEAAAOQAAAJgCAFQgDAFgEABQgGACgIAAQgIAAgFgCgA9i0vIgTgCQgKgBgGgCIAAgZIARADIATACIATABQAWABALgGQALgHAAgRQAAgLgDgGQgDgGgKgEQgIgEgTgEQgUgFgLgGQgMgHgFgKQgEgLAAgQQAAgWARgPQARgNAiAAQAOAAANACQANABAHACIgCAaQgIgDgMgCQgMgCgNAAQgUgBgKAHQgKAFAAAQQAAAKADAFQADAGAIADQAHADAPAEQAWAEANAHQANAGAGAMQAFALAAARQAAAcgSAOQgTANgjAAIgUgBgAAq0wIAAjzIAfAAIAADzgAqj0wIAAhoIhWiLIAkAAIBCBuIACAAIBBhuIAjAAIhXCKIAABpgA4O0wIAAjzIAfAAIAADzgEgjbgUwIAAhoIhXiLIAlAAIBCBuIABAAIBBhuIAjAAIhWCKIAABpgAJO8VIgWgCIAAgaIAXADIAXABQAgAAAPgOQAPgOAAggIAAgTQgGARgOAIQgOAKgbAAQgfAAgSgMQgRgMgGgWQgHgVABgdQgBgbAHgWQAGgVARgNQASgNAfgBQATAAAMAGQAMAFAHAIQAHAJAEALIAAgjIAeAAIAACvQAAAogWAWQgXAWgvAAQgNAAgLgCgAJJ/2QgKAKgDAQQgEAQAAATQABAUADAQQADAPALAKQALAKAWAAQAXgBANgHQAMgJAFgQQAGgQgBgWQABgWgGgQQgFgQgMgIQgNgJgXAAQgWAAgMAKgA728tQARAAAKgEQALgGAHgJQAGgKAFgQIhLi8IAgAAIA6CdIACAAIA2idIAfAAIhEC3QgIAYgKAQQgLASgQAIQgRAKgcAAgAW19VQgbAAgUgJQgUgJgJgVQgLgWAAglQAAgmALgWQAJgVAUgJQAUgJAbAAQAcAAAUAJQAUAJAKAVQAKAWAAAmQAAAlgKAWQgKAVgUAJQgSAJgbAAIgDAAgAWV/5QgNAGgEAQQgGAQAAAcQABAbAFAQQAFAQAMAGQANAHATAAQAWAAAMgHQAMgGAFgQQAFgQAAgbQAAgcgFgQQgGgQgMgGQgMgIgVABQgUgBgMAIgAi/9VQgcAAgUgJQgUgJgKgVQgKgWAAglQAAgmAKgWQAKgVAUgJQAUgJAcAAQAcAAATAJQATAJAKAVQALAWAAAmQAAAlgLAWQgKAVgTAJQgSAJgbAAIgCAAgAjh/5QgMAGgFAQQgFAQABAcQAAAbAEAQQAGAQAMAGQAMAHAVAAQAVAAAMgHQAMgGAFgQQAFgQAAgbQAAgcgFgQQgGgQgMgGQgMgIgUABQgWgBgMAIgAqY9eQgUgJgJgVQgLgWAAglQAAgmALgWQAKgVASgJQAUgJAbAAQAYAAAPAIQAPAHAIALQAIAMADAOQADAOAAAOIgBAJIgBAMIiBAJQAAAUAHAOQAFANANAGQAOAHAWAAQAQAAAQgDQAQgEAMgFIAAAcIgQAEIgXAFQgMABgOABIgCAAQgaAAgTgJgAqL/5QgMAHgEAOQgFAOgBAUIBlgIQAAgPgDgMQgDgMgKgIQgKgHgUAAQgWAAgLAHgA3o9VQgcAAgUgJQgTgJgLgVQgKgWAAglQAAgmAKgWQALgVATgJQAUgJAcAAQAbAAAUAJQAUAJAJAVQAKAWABAmQgBAlgKAWQgJAVgUAJQgSAJgbAAIgCAAgA4K/5QgLAGgGAQQgFAQABAcQAAAbAEAQQAGAQAMAGQAMAHAVAAQAVAAAMgHQAMgGAFgQQAFgQAAgbQAAgcgFgQQgGgQgLgGQgNgIgUABQgWgBgMAIgA/T9VQgbAAgVgJQgTgJgKgVQgKgWAAglQAAgmAKgWQAKgVATgJQAVgJAbAAQAcAAAUAJQATAJAKAVQAKAWAAAmQAAAlgKAWQgKAVgTAJQgTAJgaAAIgDAAgA/0/5QgMAGgFAQQgFAQAAAcQAAAbAFAQQAGAQAMAGQAMAHAUAAQAVAAAMgHQANgGAEgQQAFgQABgbQgBgcgFgQQgFgQgMgGQgNgIgUABQgVgBgMAIgAZ69VQgcgBgTgPQgSgOgJgeIgDgOIgBgOIAAgLQAAgdAMgWQALgWAZgPQAKgEAIgDQAJgCAKAAIACAAQAhAAAVAiIAAgJIAAAAIABAAIAdAAIABAAIAAAAIAABlIABAjIAFAgIgCABIgcAAQgCAAgBgIIgDgXIgGAKIgHAIQgJAIgKADQgLADgNABgAZk/0QgPALgIAVIgDAOIgCAOIAAAIQAAASAHAQQAIAPAOAKQAFAEAHABQAGACAHgBIAGAAQA2ABAAhCIAAgNQAAgbgKgQQgJgQgTgGIgGAAIgFgBIAAAAQgWABgPAKgAS+9fQgOgKgGgRIgEAhIgaAAIAAkKIAeAAIAABvQAGgRAOgKQAPgLAaAAQAgAAARANQAQANAHAVQAGAXAAAdQAAAagGAWQgHAWgQANQgRAOggABQgbgBgOgJgATA/3QgNAIgGARQgEAQAAAXQAAAWAEAPQAGARANAJQAMAJAXAAQAXAAALgKQAKgLADgQQAEgRAAgSQAAgUgEgRQgDgRgLgJQgLgKgWAAQgXAAgMAJgAOV9VQgcgBgTgPQgTgOgJgeIgDgOIgBgOIAAgLQABgdAMgWQALgWAYgPQAKgEAJgDQAJgCAJAAIADAAQAgAAAWAiIAAgJIAAAAIABAAIAcAAIABAAIAAAAIAABlIABAjIAFAgIgBABIgcAAQgCAAgCgIIgDgXIgGAKIgHAIQgJAIgKADQgLADgMABgAN+/0QgOALgIAVIgEAOIgCAOIAAAIQABASAGAQQAIAPAOAKQAGAEAHABQAFACAHgBIAHAAQA1ABAAhCIAAgNQAAgbgJgQQgJgQgTgGIgHAAIgEgBIgBAAQgVABgQAKgA1F9dQgOgIgFgOQgHgOABgSIAAiDIAeAAIAAB4QAAAOADALQADAKAHAFQAJAGAPAAQAMAAAKgCQAKgDAJgJQAIgHAGgQIAAiBIAeAAIAAC9IgaAAIgDgcQgGANgKAHQgJAHgLACQgMACgMABQgYAAgOgIgAex9XQgNABgEgFQgFgEgBgOQABgOAFgEQAEgFANABQAMgBAFAFQAFAEAAAOQAAAOgFAEQgFAEgKAAIgCAAgAcw9cQgMgEgGgNQgFgNAAgZIAAhqIgcAAIAAgZIAcAAIAAgtIAeAAIAAAtIAuAAIAAAZIguAAIAABpQAAAOACAIQACAIAGADQAGADALAAIALAAIAKgCIAAAaIgLABIgLAAIgDAAQgTAAgLgFgAwi9gQgKgKAAgVIAAjkIAeAAIAADcQAAAOAEAEQAEAFAKAAIAGAAIAIgCIAAAZIgJACIgLAAQgVAAgLgJgEgjNgdZIhGAAIAAjzIBGAAQAaAAAWAFQAVAFAPANQAQANAJAYQAIAYAAAlQAAAvgPAbQgPAbgaAKQgZALghAAIgDAAgEgj0gd1IAmAAQAaAAASgHQAUgJALgVQALgUgBglQAAgmgLgVQgLgUgTgIQgTgHgZABIgmAAgAHH9ZIAAh4QAAgPgDgKQgCgJgJgGQgHgFgPgBQgMAAgMADQgLACgIAJQgJAIgGAQIAACAIgdAAIAAi9IAdAAIAAAbQAHgMAJgHQAKgGALgDQAMgCAMgBQAYAAAOAIQAOAJAGANQAFAOAAASIAACDgADt9ZIAAi9IAfAAIAAC9gABs9ZIgvibIgCAAIgwCbIgkAAIgzi9IAfAAIAnCeIADAAIAtieIAkAAIAwCeIACAAIApieIAdAAIg1C9gAmQ9ZIAAi9IAeAAIAAAiQAGgPAKgIQAKgJALgDQALgDAMAAIAEAAIgBAbIgFAAQgMABgLADQgMADgJAKQgIAJgGARIAAB7gAr99ZIhFhYIgKAAIAABYIgeAAIAAkKIAeAAIAACaIALAAIBChNIAlAAIhQBYIBUBlgAvI9ZIAAi9IAeAAIAAC9gAei+eIAAgQQABgNAGgMQAGgMAUgOIAQgOQAFgHACgHQACgIAAgKQAAgOgEgIQgEgIgKgDQgKgDgRAAQgNAAgNADQgOABgLAEIAAgcQAJgDANgCQAOgCASgBQAZAAARAGQAQAFAIAOQAJANgBAXQAAATgDAMQgFALgIAIQgHAIgMAHQgKAIgGAGQgFAGgDAGQgDAGAAAIIAAALgEADvgg8QgFgDAAgLQAAgMAFgEQAEgDAJABQAKgBAFADQADAEAAAMQAAALgDADQgFAEgKAAQgJAAgEgEgEgPHgg8QgEgDAAgLQAAgMAEgEQAEgDAKABQAJgBAFADQAEAEAAAMQAAALgEADQgFAEgJAAQgKAAgEgEg");
	this.shape_3.setTransform(237.65,231.85);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(547).to({_off:false},0).wait(446).to({_off:true},1).wait(65));

	// 图层_10 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_432 = new cjs.Graphics().p("AhqFAIAAp/IDVAAIAAJ/g");
	var mask_4_graphics_433 = new cjs.Graphics().p("AiOFAIAAp/IEdAAIAAJ/g");
	var mask_4_graphics_434 = new cjs.Graphics().p("AizFAIAAp/IFnAAIAAJ/g");
	var mask_4_graphics_435 = new cjs.Graphics().p("AjXFAIAAp/IGvAAIAAJ/g");
	var mask_4_graphics_436 = new cjs.Graphics().p("Aj7FAIAAp/IH3AAIAAJ/g");
	var mask_4_graphics_437 = new cjs.Graphics().p("AkgFAIAAp/IJBAAIAAJ/g");
	var mask_4_graphics_438 = new cjs.Graphics().p("AlEFAIAAp/IKJAAIAAJ/g");
	var mask_4_graphics_439 = new cjs.Graphics().p("AlpFAIAAp/ILTAAIAAJ/g");
	var mask_4_graphics_440 = new cjs.Graphics().p("AmNFAIAAp/IMbAAIAAJ/g");
	var mask_4_graphics_441 = new cjs.Graphics().p("AmyFAIAAp/INlAAIAAJ/g");
	var mask_4_graphics_442 = new cjs.Graphics().p("AnWFAIAAp/IOtAAIAAJ/g");
	var mask_4_graphics_443 = new cjs.Graphics().p("An7FAIAAp/IP3AAIAAJ/g");
	var mask_4_graphics_444 = new cjs.Graphics().p("AofFAIAAp/IQ/AAIAAJ/g");
	var mask_4_graphics_445 = new cjs.Graphics().p("ApDFAIAAp/ISIAAIAAJ/g");
	var mask_4_graphics_446 = new cjs.Graphics().p("ApoFAIAAp/ITRAAIAAJ/g");
	var mask_4_graphics_447 = new cjs.Graphics().p("AqMFAIAAp/IUZAAIAAJ/g");
	var mask_4_graphics_448 = new cjs.Graphics().p("AqxFAIAAp/IVjAAIAAJ/g");
	var mask_4_graphics_449 = new cjs.Graphics().p("ArVFAIAAp/IWrAAIAAJ/g");
	var mask_4_graphics_450 = new cjs.Graphics().p("Ar6FAIAAp/IX1AAIAAJ/g");
	var mask_4_graphics_451 = new cjs.Graphics().p("AseFAIAAp/IY9AAIAAJ/g");
	var mask_4_graphics_452 = new cjs.Graphics().p("AtDFAIAAp/IaHAAIAAJ/g");
	var mask_4_graphics_453 = new cjs.Graphics().p("AtnFAIAAp/IbPAAIAAJ/g");
	var mask_4_graphics_454 = new cjs.Graphics().p("AuMFAIAAp/IcZAAIAAJ/g");
	var mask_4_graphics_455 = new cjs.Graphics().p("AuwFAIAAp/IdhAAIAAJ/g");
	var mask_4_graphics_456 = new cjs.Graphics().p("AvUFAIAAp/IeqAAIAAJ/g");
	var mask_4_graphics_457 = new cjs.Graphics().p("Av5FAIAAp/IfzAAIAAJ/g");
	var mask_4_graphics_458 = new cjs.Graphics().p("AwdFAIAAp/MAg7AAAIAAJ/g");
	var mask_4_graphics_459 = new cjs.Graphics().p("AxCFAIAAp/MAiFAAAIAAJ/g");
	var mask_4_graphics_460 = new cjs.Graphics().p("AxmFAIAAp/MAjNAAAIAAJ/g");
	var mask_4_graphics_461 = new cjs.Graphics().p("AyLFAIAAp/MAkXAAAIAAJ/g");
	var mask_4_graphics_462 = new cjs.Graphics().p("AyvFAIAAp/MAlfAAAIAAJ/g");
	var mask_4_graphics_463 = new cjs.Graphics().p("AzUFAIAAp/MAmpAAAIAAJ/g");
	var mask_4_graphics_464 = new cjs.Graphics().p("Az4FAIAAp/MAnxAAAIAAJ/g");
	var mask_4_graphics_465 = new cjs.Graphics().p("A0cFAIAAp/MAo6AAAIAAJ/g");
	var mask_4_graphics_466 = new cjs.Graphics().p("A1BFAIAAp/MAqDAAAIAAJ/g");
	var mask_4_graphics_467 = new cjs.Graphics().p("A1lFAIAAp/MArLAAAIAAJ/g");
	var mask_4_graphics_468 = new cjs.Graphics().p("A2KFAIAAp/MAsVAAAIAAJ/g");
	var mask_4_graphics_469 = new cjs.Graphics().p("A2uFAIAAp/MAtdAAAIAAJ/g");
	var mask_4_graphics_470 = new cjs.Graphics().p("A3TFAIAAp/MAunAAAIAAJ/g");
	var mask_4_graphics_471 = new cjs.Graphics().p("A33FAIAAp/MAvvAAAIAAJ/g");
	var mask_4_graphics_472 = new cjs.Graphics().p("A4cFAIAAp/MAw5AAAIAAJ/g");
	var mask_4_graphics_473 = new cjs.Graphics().p("A5AFAIAAp/MAyBAAAIAAJ/g");
	var mask_4_graphics_474 = new cjs.Graphics().p("A5kFAIAAp/MAzKAAAIAAJ/g");
	var mask_4_graphics_475 = new cjs.Graphics().p("A6JFAIAAp/MA0TAAAIAAJ/g");
	var mask_4_graphics_476 = new cjs.Graphics().p("A6tFAIAAp/MA1bAAAIAAJ/g");
	var mask_4_graphics_477 = new cjs.Graphics().p("A7SFAIAAp/MA2lAAAIAAJ/g");
	var mask_4_graphics_478 = new cjs.Graphics().p("A72FAIAAp/MA3tAAAIAAJ/g");
	var mask_4_graphics_479 = new cjs.Graphics().p("A8bFAIAAp/MA43AAAIAAJ/g");
	var mask_4_graphics_480 = new cjs.Graphics().p("A8/FAIAAp/MA5/AAAIAAJ/g");
	var mask_4_graphics_481 = new cjs.Graphics().p("A9kFAIAAp/MA7JAAAIAAJ/g");
	var mask_4_graphics_482 = new cjs.Graphics().p("A+IFAIAAp/MA8RAAAIAAJ/g");
	var mask_4_graphics_483 = new cjs.Graphics().p("A+tFAIAAp/MA9bAAAIAAJ/g");
	var mask_4_graphics_484 = new cjs.Graphics().p("A/RFAIAAp/MA+jAAAIAAJ/g");
	var mask_4_graphics_485 = new cjs.Graphics().p("A/1FAIAAp/MA/sAAAIAAJ/g");
	var mask_4_graphics_486 = new cjs.Graphics().p("EggaAFAIAAp/MBA1AAAIAAJ/g");
	var mask_4_graphics_487 = new cjs.Graphics().p("Egg+AFAIAAp/MBB9AAAIAAJ/g");
	var mask_4_graphics_488 = new cjs.Graphics().p("EghjAFAIAAp/MBDHAAAIAAJ/g");
	var mask_4_graphics_489 = new cjs.Graphics().p("EgiHAFAIAAp/MBEPAAAIAAJ/g");
	var mask_4_graphics_490 = new cjs.Graphics().p("EgisAFAIAAp/MBFZAAAIAAJ/g");
	var mask_4_graphics_491 = new cjs.Graphics().p("EgjQAFAIAAp/MBGhAAAIAAJ/g");
	var mask_4_graphics_492 = new cjs.Graphics().p("Egj1AFAIAAp/MBHrAAAIAAJ/g");
	var mask_4_graphics_493 = new cjs.Graphics().p("EgkZAFAIAAp/MBIzAAAIAAJ/g");
	var mask_4_graphics_494 = new cjs.Graphics().p("Egk9AFAIAAp/MBJ8AAAIAAJ/g");
	var mask_4_graphics_495 = new cjs.Graphics().p("EgliAFAIAAp/MBLFAAAIAAJ/g");
	var mask_4_graphics_496 = new cjs.Graphics().p("EgmGAFAIAAp/MBMOAAAIAAJ/g");
	var mask_4_graphics_993 = new cjs.Graphics().p("EgmGAFAIAAp/MBMOAAAIAAJ/g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(432).to({graphics:mask_4_graphics_432,x:-14.625,y:197.3}).wait(1).to({graphics:mask_4_graphics_433,x:-10.975,y:197.3}).wait(1).to({graphics:mask_4_graphics_434,x:-7.325,y:197.3}).wait(1).to({graphics:mask_4_graphics_435,x:-3.7,y:197.3}).wait(1).to({graphics:mask_4_graphics_436,x:-0.05,y:197.3}).wait(1).to({graphics:mask_4_graphics_437,x:3.6,y:197.3}).wait(1).to({graphics:mask_4_graphics_438,x:7.25,y:197.3}).wait(1).to({graphics:mask_4_graphics_439,x:10.9,y:197.3}).wait(1).to({graphics:mask_4_graphics_440,x:14.525,y:197.3}).wait(1).to({graphics:mask_4_graphics_441,x:18.175,y:197.3}).wait(1).to({graphics:mask_4_graphics_442,x:21.825,y:197.3}).wait(1).to({graphics:mask_4_graphics_443,x:25.475,y:197.3}).wait(1).to({graphics:mask_4_graphics_444,x:29.125,y:197.3}).wait(1).to({graphics:mask_4_graphics_445,x:32.75,y:197.3}).wait(1).to({graphics:mask_4_graphics_446,x:36.4,y:197.3}).wait(1).to({graphics:mask_4_graphics_447,x:40.05,y:197.3}).wait(1).to({graphics:mask_4_graphics_448,x:43.7,y:197.3}).wait(1).to({graphics:mask_4_graphics_449,x:47.35,y:197.3}).wait(1).to({graphics:mask_4_graphics_450,x:50.975,y:197.3}).wait(1).to({graphics:mask_4_graphics_451,x:54.625,y:197.3}).wait(1).to({graphics:mask_4_graphics_452,x:58.275,y:197.3}).wait(1).to({graphics:mask_4_graphics_453,x:61.925,y:197.3}).wait(1).to({graphics:mask_4_graphics_454,x:65.575,y:197.3}).wait(1).to({graphics:mask_4_graphics_455,x:69.2,y:197.3}).wait(1).to({graphics:mask_4_graphics_456,x:72.85,y:197.3}).wait(1).to({graphics:mask_4_graphics_457,x:76.5,y:197.3}).wait(1).to({graphics:mask_4_graphics_458,x:80.15,y:197.3}).wait(1).to({graphics:mask_4_graphics_459,x:83.8,y:197.3}).wait(1).to({graphics:mask_4_graphics_460,x:87.425,y:197.3}).wait(1).to({graphics:mask_4_graphics_461,x:91.075,y:197.3}).wait(1).to({graphics:mask_4_graphics_462,x:94.725,y:197.3}).wait(1).to({graphics:mask_4_graphics_463,x:98.375,y:197.3}).wait(1).to({graphics:mask_4_graphics_464,x:102.025,y:197.3}).wait(1).to({graphics:mask_4_graphics_465,x:105.65,y:197.3}).wait(1).to({graphics:mask_4_graphics_466,x:109.3,y:197.3}).wait(1).to({graphics:mask_4_graphics_467,x:112.95,y:197.3}).wait(1).to({graphics:mask_4_graphics_468,x:116.6,y:197.3}).wait(1).to({graphics:mask_4_graphics_469,x:120.225,y:197.3}).wait(1).to({graphics:mask_4_graphics_470,x:123.875,y:197.3}).wait(1).to({graphics:mask_4_graphics_471,x:127.525,y:197.3}).wait(1).to({graphics:mask_4_graphics_472,x:131.175,y:197.3}).wait(1).to({graphics:mask_4_graphics_473,x:134.825,y:197.3}).wait(1).to({graphics:mask_4_graphics_474,x:138.45,y:197.3}).wait(1).to({graphics:mask_4_graphics_475,x:142.1,y:197.3}).wait(1).to({graphics:mask_4_graphics_476,x:145.75,y:197.3}).wait(1).to({graphics:mask_4_graphics_477,x:149.4,y:197.3}).wait(1).to({graphics:mask_4_graphics_478,x:153.05,y:197.3}).wait(1).to({graphics:mask_4_graphics_479,x:156.675,y:197.3}).wait(1).to({graphics:mask_4_graphics_480,x:160.325,y:197.3}).wait(1).to({graphics:mask_4_graphics_481,x:163.975,y:197.3}).wait(1).to({graphics:mask_4_graphics_482,x:167.625,y:197.3}).wait(1).to({graphics:mask_4_graphics_483,x:171.275,y:197.3}).wait(1).to({graphics:mask_4_graphics_484,x:174.9,y:197.3}).wait(1).to({graphics:mask_4_graphics_485,x:178.55,y:197.3}).wait(1).to({graphics:mask_4_graphics_486,x:182.2,y:197.3}).wait(1).to({graphics:mask_4_graphics_487,x:185.85,y:197.3}).wait(1).to({graphics:mask_4_graphics_488,x:189.5,y:197.3}).wait(1).to({graphics:mask_4_graphics_489,x:193.125,y:197.3}).wait(1).to({graphics:mask_4_graphics_490,x:196.775,y:197.3}).wait(1).to({graphics:mask_4_graphics_491,x:200.425,y:197.3}).wait(1).to({graphics:mask_4_graphics_492,x:204.075,y:197.3}).wait(1).to({graphics:mask_4_graphics_493,x:207.725,y:197.3}).wait(1).to({graphics:mask_4_graphics_494,x:211.35,y:197.3}).wait(1).to({graphics:mask_4_graphics_495,x:215,y:197.3}).wait(1).to({graphics:mask_4_graphics_496,x:218.65,y:197.3}).wait(497).to({graphics:mask_4_graphics_993,x:218.65,y:197.3}).wait(1).to({graphics:null,x:0,y:0}).wait(65));

	// 图层_9
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("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");
	this.shape_4.setTransform(237.65,231.85);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(432).to({_off:false},0).wait(561).to({_off:true},1).wait(65));

	// 图层_8 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_374 = new cjs.Graphics().p("AhWEYIAAovICtAAIAAIvg");
	var mask_5_graphics_375 = new cjs.Graphics().p("AiAEYIAAovIEBAAIAAIvg");
	var mask_5_graphics_376 = new cjs.Graphics().p("AirEYIAAovIFXAAIAAIvg");
	var mask_5_graphics_377 = new cjs.Graphics().p("AjWEYIAAovIGtAAIAAIvg");
	var mask_5_graphics_378 = new cjs.Graphics().p("AkAEYIAAovIIBAAIAAIvg");
	var mask_5_graphics_379 = new cjs.Graphics().p("AkrEYIAAovIJXAAIAAIvg");
	var mask_5_graphics_380 = new cjs.Graphics().p("AlVEYIAAovIKrAAIAAIvg");
	var mask_5_graphics_381 = new cjs.Graphics().p("AmAEYIAAovIMBAAIAAIvg");
	var mask_5_graphics_382 = new cjs.Graphics().p("AmqEYIAAovINVAAIAAIvg");
	var mask_5_graphics_383 = new cjs.Graphics().p("AnVEYIAAovIOrAAIAAIvg");
	var mask_5_graphics_384 = new cjs.Graphics().p("AoAEYIAAovIQAAAIAAIvg");
	var mask_5_graphics_385 = new cjs.Graphics().p("AoqEYIAAovIRVAAIAAIvg");
	var mask_5_graphics_386 = new cjs.Graphics().p("ApVEYIAAovISrAAIAAIvg");
	var mask_5_graphics_387 = new cjs.Graphics().p("Ap/EYIAAovIT/AAIAAIvg");
	var mask_5_graphics_388 = new cjs.Graphics().p("AqqEYIAAovIVVAAIAAIvg");
	var mask_5_graphics_389 = new cjs.Graphics().p("ArVEYIAAovIWrAAIAAIvg");
	var mask_5_graphics_390 = new cjs.Graphics().p("Ar/EYIAAovIX/AAIAAIvg");
	var mask_5_graphics_391 = new cjs.Graphics().p("AsqEYIAAovIZUAAIAAIvg");
	var mask_5_graphics_392 = new cjs.Graphics().p("AtUEYIAAovIapAAIAAIvg");
	var mask_5_graphics_393 = new cjs.Graphics().p("At/EYIAAovIb/AAIAAIvg");
	var mask_5_graphics_394 = new cjs.Graphics().p("AupEYIAAovIdTAAIAAIvg");
	var mask_5_graphics_395 = new cjs.Graphics().p("AvUEYIAAovIepAAIAAIvg");
	var mask_5_graphics_396 = new cjs.Graphics().p("Av/EYIAAovIf/AAIAAIvg");
	var mask_5_graphics_397 = new cjs.Graphics().p("AwpEYIAAovMAhTAAAIAAIvg");
	var mask_5_graphics_398 = new cjs.Graphics().p("AxUEYIAAovMAipAAAIAAIvg");
	var mask_5_graphics_399 = new cjs.Graphics().p("Ax+EYIAAovMAj9AAAIAAIvg");
	var mask_5_graphics_400 = new cjs.Graphics().p("AypEYIAAovMAlTAAAIAAIvg");
	var mask_5_graphics_401 = new cjs.Graphics().p("AzTEYIAAovMAmnAAAIAAIvg");
	var mask_5_graphics_402 = new cjs.Graphics().p("Az+EYIAAovMAn9AAAIAAIvg");
	var mask_5_graphics_403 = new cjs.Graphics().p("A0pEYIAAovMApSAAAIAAIvg");
	var mask_5_graphics_404 = new cjs.Graphics().p("A1TEYIAAovMAqnAAAIAAIvg");
	var mask_5_graphics_405 = new cjs.Graphics().p("A1+EYIAAovMAr9AAAIAAIvg");
	var mask_5_graphics_406 = new cjs.Graphics().p("A2oEYIAAovMAtRAAAIAAIvg");
	var mask_5_graphics_407 = new cjs.Graphics().p("A3TEYIAAovMAunAAAIAAIvg");
	var mask_5_graphics_408 = new cjs.Graphics().p("A39EYIAAovMAv7AAAIAAIvg");
	var mask_5_graphics_409 = new cjs.Graphics().p("A4oEYIAAovMAxRAAAIAAIvg");
	var mask_5_graphics_410 = new cjs.Graphics().p("A5TEYIAAovMAymAAAIAAIvg");
	var mask_5_graphics_411 = new cjs.Graphics().p("A59EYIAAovMAz7AAAIAAIvg");
	var mask_5_graphics_412 = new cjs.Graphics().p("A6oEYIAAovMA1RAAAIAAIvg");
	var mask_5_graphics_413 = new cjs.Graphics().p("A7SEYIAAovMA2lAAAIAAIvg");
	var mask_5_graphics_414 = new cjs.Graphics().p("A79EYIAAovMA37AAAIAAIvg");
	var mask_5_graphics_415 = new cjs.Graphics().p("A8oEYIAAovMA5RAAAIAAIvg");
	var mask_5_graphics_416 = new cjs.Graphics().p("A9SEYIAAovMA6lAAAIAAIvg");
	var mask_5_graphics_417 = new cjs.Graphics().p("A99EYIAAovMA76AAAIAAIvg");
	var mask_5_graphics_418 = new cjs.Graphics().p("A+nEYIAAovMA9PAAAIAAIvg");
	var mask_5_graphics_419 = new cjs.Graphics().p("A/SEYIAAovMA+lAAAIAAIvg");
	var mask_5_graphics_420 = new cjs.Graphics().p("A/8EYIAAovMA/5AAAIAAIvg");
	var mask_5_graphics_421 = new cjs.Graphics().p("EggnAEYIAAovMBBPAAAIAAIvg");
	var mask_5_graphics_422 = new cjs.Graphics().p("EghSAEYIAAovMBClAAAIAAIvg");
	var mask_5_graphics_423 = new cjs.Graphics().p("Egh8AEYIAAovMBD5AAAIAAIvg");
	var mask_5_graphics_993 = new cjs.Graphics().p("Egh8AEYIAAovMBD5AAAIAAIvg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(374).to({graphics:mask_5_graphics_374,x:-13.975,y:141.3}).wait(1).to({graphics:mask_5_graphics_375,x:-9.725,y:141.3}).wait(1).to({graphics:mask_5_graphics_376,x:-5.45,y:141.3}).wait(1).to({graphics:mask_5_graphics_377,x:-1.2,y:141.3}).wait(1).to({graphics:mask_5_graphics_378,x:3.05,y:141.3}).wait(1).to({graphics:mask_5_graphics_379,x:7.3,y:141.3}).wait(1).to({graphics:mask_5_graphics_380,x:11.575,y:141.3}).wait(1).to({graphics:mask_5_graphics_381,x:15.825,y:141.3}).wait(1).to({graphics:mask_5_graphics_382,x:20.075,y:141.3}).wait(1).to({graphics:mask_5_graphics_383,x:24.35,y:141.3}).wait(1).to({graphics:mask_5_graphics_384,x:28.6,y:141.3}).wait(1).to({graphics:mask_5_graphics_385,x:32.85,y:141.3}).wait(1).to({graphics:mask_5_graphics_386,x:37.125,y:141.3}).wait(1).to({graphics:mask_5_graphics_387,x:41.375,y:141.3}).wait(1).to({graphics:mask_5_graphics_388,x:45.625,y:141.3}).wait(1).to({graphics:mask_5_graphics_389,x:49.9,y:141.3}).wait(1).to({graphics:mask_5_graphics_390,x:54.15,y:141.3}).wait(1).to({graphics:mask_5_graphics_391,x:58.4,y:141.3}).wait(1).to({graphics:mask_5_graphics_392,x:62.65,y:141.3}).wait(1).to({graphics:mask_5_graphics_393,x:66.925,y:141.3}).wait(1).to({graphics:mask_5_graphics_394,x:71.175,y:141.3}).wait(1).to({graphics:mask_5_graphics_395,x:75.425,y:141.3}).wait(1).to({graphics:mask_5_graphics_396,x:79.7,y:141.3}).wait(1).to({graphics:mask_5_graphics_397,x:83.95,y:141.3}).wait(1).to({graphics:mask_5_graphics_398,x:88.2,y:141.3}).wait(1).to({graphics:mask_5_graphics_399,x:92.475,y:141.3}).wait(1).to({graphics:mask_5_graphics_400,x:96.725,y:141.3}).wait(1).to({graphics:mask_5_graphics_401,x:100.975,y:141.3}).wait(1).to({graphics:mask_5_graphics_402,x:105.25,y:141.3}).wait(1).to({graphics:mask_5_graphics_403,x:109.5,y:141.3}).wait(1).to({graphics:mask_5_graphics_404,x:113.75,y:141.3}).wait(1).to({graphics:mask_5_graphics_405,x:118.025,y:141.3}).wait(1).to({graphics:mask_5_graphics_406,x:122.275,y:141.3}).wait(1).to({graphics:mask_5_graphics_407,x:126.525,y:141.3}).wait(1).to({graphics:mask_5_graphics_408,x:130.775,y:141.3}).wait(1).to({graphics:mask_5_graphics_409,x:135.05,y:141.3}).wait(1).to({graphics:mask_5_graphics_410,x:139.3,y:141.3}).wait(1).to({graphics:mask_5_graphics_411,x:143.55,y:141.3}).wait(1).to({graphics:mask_5_graphics_412,x:147.825,y:141.3}).wait(1).to({graphics:mask_5_graphics_413,x:152.075,y:141.3}).wait(1).to({graphics:mask_5_graphics_414,x:156.325,y:141.3}).wait(1).to({graphics:mask_5_graphics_415,x:160.6,y:141.3}).wait(1).to({graphics:mask_5_graphics_416,x:164.85,y:141.3}).wait(1).to({graphics:mask_5_graphics_417,x:169.1,y:141.3}).wait(1).to({graphics:mask_5_graphics_418,x:173.375,y:141.3}).wait(1).to({graphics:mask_5_graphics_419,x:177.625,y:141.3}).wait(1).to({graphics:mask_5_graphics_420,x:181.875,y:141.3}).wait(1).to({graphics:mask_5_graphics_421,x:186.125,y:141.3}).wait(1).to({graphics:mask_5_graphics_422,x:190.4,y:141.3}).wait(1).to({graphics:mask_5_graphics_423,x:194.65,y:141.3}).wait(570).to({graphics:mask_5_graphics_993,x:194.65,y:141.3}).wait(1).to({graphics:null,x:0,y:0}).wait(65));

	// 图层_7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("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");
	this.shape_5.setTransform(237.65,231.85);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(374).to({_off:false},0).wait(619).to({_off:true},1).wait(65));

	// 图层_6 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_259 = new cjs.Graphics().p("AhPEEIAAoHICfAAIAAIHg");
	var mask_6_graphics_260 = new cjs.Graphics().p("Ah/EEIAAoHID/AAIAAIHg");
	var mask_6_graphics_261 = new cjs.Graphics().p("AivEEIAAoHIFgAAIAAIHg");
	var mask_6_graphics_262 = new cjs.Graphics().p("AjgEEIAAoHIHBAAIAAIHg");
	var mask_6_graphics_263 = new cjs.Graphics().p("AkQEEIAAoHIIhAAIAAIHg");
	var mask_6_graphics_264 = new cjs.Graphics().p("AlBEEIAAoHIKDAAIAAIHg");
	var mask_6_graphics_265 = new cjs.Graphics().p("AlxEEIAAoHILjAAIAAIHg");
	var mask_6_graphics_266 = new cjs.Graphics().p("AmhEEIAAoHINDAAIAAIHg");
	var mask_6_graphics_267 = new cjs.Graphics().p("AnSEEIAAoHIOlAAIAAIHg");
	var mask_6_graphics_268 = new cjs.Graphics().p("AnSEEIAAoHIOlAAIAAIHg");
	var mask_6_graphics_269 = new cjs.Graphics().p("AnSEEIAAoHIOlAAIAAIHg");
	var mask_6_graphics_270 = new cjs.Graphics().p("AnSEEIAAoHIOlAAIAAIHg");
	var mask_6_graphics_271 = new cjs.Graphics().p("AnSEEIAAoHIOlAAIAAIHg");
	var mask_6_graphics_272 = new cjs.Graphics().p("AnSEEIAAoHIOlAAIAAIHg");
	var mask_6_graphics_273 = new cjs.Graphics().p("AnSEEIAAoHIOlAAIAAIHg");
	var mask_6_graphics_274 = new cjs.Graphics().p("AnjEEIAAoHIPHAAIAAIHg");
	var mask_6_graphics_275 = new cjs.Graphics().p("An0EEIAAoHIPpAAIAAIHg");
	var mask_6_graphics_276 = new cjs.Graphics().p("AoGEEIAAoHIQNAAIAAIHg");
	var mask_6_graphics_277 = new cjs.Graphics().p("AoXEEIAAoHIQvAAIAAIHg");
	var mask_6_graphics_278 = new cjs.Graphics().p("AopEEIAAoHIRSAAIAAIHg");
	var mask_6_graphics_279 = new cjs.Graphics().p("Ao6EEIAAoHIR1AAIAAIHg");
	var mask_6_graphics_280 = new cjs.Graphics().p("ApLEEIAAoHISXAAIAAIHg");
	var mask_6_graphics_281 = new cjs.Graphics().p("ApdEEIAAoHIS7AAIAAIHg");
	var mask_6_graphics_282 = new cjs.Graphics().p("ApuEEIAAoHITdAAIAAIHg");
	var mask_6_graphics_283 = new cjs.Graphics().p("Ap/EEIAAoHIT/AAIAAIHg");
	var mask_6_graphics_284 = new cjs.Graphics().p("AqREEIAAoHIUjAAIAAIHg");
	var mask_6_graphics_285 = new cjs.Graphics().p("AqiEEIAAoHIVFAAIAAIHg");
	var mask_6_graphics_286 = new cjs.Graphics().p("Aq0EEIAAoHIVpAAIAAIHg");
	var mask_6_graphics_287 = new cjs.Graphics().p("ArFEEIAAoHIWLAAIAAIHg");
	var mask_6_graphics_288 = new cjs.Graphics().p("ArWEEIAAoHIWtAAIAAIHg");
	var mask_6_graphics_289 = new cjs.Graphics().p("AroEEIAAoHIXRAAIAAIHg");
	var mask_6_graphics_290 = new cjs.Graphics().p("Ar5EEIAAoHIXzAAIAAIHg");
	var mask_6_graphics_291 = new cjs.Graphics().p("AsKEEIAAoHIYWAAIAAIHg");
	var mask_6_graphics_292 = new cjs.Graphics().p("AscEEIAAoHIY5AAIAAIHg");
	var mask_6_graphics_293 = new cjs.Graphics().p("AstEEIAAoHIZbAAIAAIHg");
	var mask_6_graphics_294 = new cjs.Graphics().p("As/EEIAAoHIZ/AAIAAIHg");
	var mask_6_graphics_295 = new cjs.Graphics().p("AtQEEIAAoHIahAAIAAIHg");
	var mask_6_graphics_296 = new cjs.Graphics().p("AthEEIAAoHIbDAAIAAIHg");
	var mask_6_graphics_297 = new cjs.Graphics().p("AthEEIAAoHIbDAAIAAIHg");
	var mask_6_graphics_298 = new cjs.Graphics().p("AthEEIAAoHIbDAAIAAIHg");
	var mask_6_graphics_299 = new cjs.Graphics().p("AthEEIAAoHIbDAAIAAIHg");
	var mask_6_graphics_300 = new cjs.Graphics().p("AthEEIAAoHIbDAAIAAIHg");
	var mask_6_graphics_301 = new cjs.Graphics().p("AthEEIAAoHIbDAAIAAIHg");
	var mask_6_graphics_302 = new cjs.Graphics().p("AthEEIAAoHIbDAAIAAIHg");
	var mask_6_graphics_303 = new cjs.Graphics().p("AthEEIAAoHIbDAAIAAIHg");
	var mask_6_graphics_304 = new cjs.Graphics().p("AthEEIAAoHIbDAAIAAIHg");
	var mask_6_graphics_305 = new cjs.Graphics().p("AthEEIAAoHIbDAAIAAIHg");
	var mask_6_graphics_306 = new cjs.Graphics().p("AthEEIAAoHIbDAAIAAIHg");
	var mask_6_graphics_307 = new cjs.Graphics().p("AthEEIAAoHIbDAAIAAIHg");
	var mask_6_graphics_308 = new cjs.Graphics().p("AthEEIAAoHIbDAAIAAIHg");
	var mask_6_graphics_309 = new cjs.Graphics().p("AthEEIAAoHIbDAAIAAIHg");
	var mask_6_graphics_310 = new cjs.Graphics().p("AthEEIAAoHIbDAAIAAIHg");
	var mask_6_graphics_311 = new cjs.Graphics().p("AthEEIAAoHIbDAAIAAIHg");
	var mask_6_graphics_312 = new cjs.Graphics().p("AthEEIAAoHIbDAAIAAIHg");
	var mask_6_graphics_313 = new cjs.Graphics().p("AthEEIAAoHIbDAAIAAIHg");
	var mask_6_graphics_314 = new cjs.Graphics().p("AthEEIAAoHIbDAAIAAIHg");
	var mask_6_graphics_315 = new cjs.Graphics().p("At7EEIAAoHIb3AAIAAIHg");
	var mask_6_graphics_316 = new cjs.Graphics().p("AuUEEIAAoHIcpAAIAAIHg");
	var mask_6_graphics_317 = new cjs.Graphics().p("AuuEEIAAoHIddAAIAAIHg");
	var mask_6_graphics_318 = new cjs.Graphics().p("AvHEEIAAoHIePAAIAAIHg");
	var mask_6_graphics_319 = new cjs.Graphics().p("AvgEEIAAoHIfBAAIAAIHg");
	var mask_6_graphics_320 = new cjs.Graphics().p("Av6EEIAAoHIf1AAIAAIHg");
	var mask_6_graphics_321 = new cjs.Graphics().p("AwTEEIAAoHMAgnAAAIAAIHg");
	var mask_6_graphics_322 = new cjs.Graphics().p("AwtEEIAAoHMAhbAAAIAAIHg");
	var mask_6_graphics_323 = new cjs.Graphics().p("AxHEEIAAoHMAiPAAAIAAIHg");
	var mask_6_graphics_324 = new cjs.Graphics().p("AxgEEIAAoHMAjBAAAIAAIHg");
	var mask_6_graphics_325 = new cjs.Graphics().p("Ax5EEIAAoHMAjzAAAIAAIHg");
	var mask_6_graphics_326 = new cjs.Graphics().p("AyTEEIAAoHMAknAAAIAAIHg");
	var mask_6_graphics_327 = new cjs.Graphics().p("AysEEIAAoHMAlZAAAIAAIHg");
	var mask_6_graphics_328 = new cjs.Graphics().p("AzGEEIAAoHMAmNAAAIAAIHg");
	var mask_6_graphics_329 = new cjs.Graphics().p("AzfEEIAAoHMAm/AAAIAAIHg");
	var mask_6_graphics_330 = new cjs.Graphics().p("Az4EEIAAoHMAnxAAAIAAIHg");
	var mask_6_graphics_331 = new cjs.Graphics().p("A0KEEIAAoHMAoVAAAIAAIHg");
	var mask_6_graphics_332 = new cjs.Graphics().p("A0bEEIAAoHMAo3AAAIAAIHg");
	var mask_6_graphics_333 = new cjs.Graphics().p("A0sEEIAAoHMApZAAAIAAIHg");
	var mask_6_graphics_334 = new cjs.Graphics().p("A0+EEIAAoHMAp8AAAIAAIHg");
	var mask_6_graphics_335 = new cjs.Graphics().p("A1PEEIAAoHMAqfAAAIAAIHg");
	var mask_6_graphics_336 = new cjs.Graphics().p("A1gEEIAAoHMArBAAAIAAIHg");
	var mask_6_graphics_337 = new cjs.Graphics().p("A1yEEIAAoHMArlAAAIAAIHg");
	var mask_6_graphics_338 = new cjs.Graphics().p("A2DEEIAAoHMAsHAAAIAAIHg");
	var mask_6_graphics_339 = new cjs.Graphics().p("A2UEEIAAoHMAspAAAIAAIHg");
	var mask_6_graphics_340 = new cjs.Graphics().p("A2mEEIAAoHMAtNAAAIAAIHg");
	var mask_6_graphics_341 = new cjs.Graphics().p("A23EEIAAoHMAtvAAAIAAIHg");
	var mask_6_graphics_342 = new cjs.Graphics().p("A3IEEIAAoHMAuRAAAIAAIHg");
	var mask_6_graphics_343 = new cjs.Graphics().p("A3aEEIAAoHMAu0AAAIAAIHg");
	var mask_6_graphics_344 = new cjs.Graphics().p("A3rEEIAAoHMAvXAAAIAAIHg");
	var mask_6_graphics_345 = new cjs.Graphics().p("A38EEIAAoHMAv5AAAIAAIHg");
	var mask_6_graphics_346 = new cjs.Graphics().p("A4OEEIAAoHMAwdAAAIAAIHg");
	var mask_6_graphics_347 = new cjs.Graphics().p("A4fEEIAAoHMAw/AAAIAAIHg");
	var mask_6_graphics_348 = new cjs.Graphics().p("A4wEEIAAoHMAxhAAAIAAIHg");
	var mask_6_graphics_349 = new cjs.Graphics().p("A5CEEIAAoHMAyEAAAIAAIHg");
	var mask_6_graphics_350 = new cjs.Graphics().p("A5TEEIAAoHMAynAAAIAAIHg");
	var mask_6_graphics_351 = new cjs.Graphics().p("A5kEEIAAoHMAzJAAAIAAIHg");
	var mask_6_graphics_352 = new cjs.Graphics().p("A52EEIAAoHMAztAAAIAAIHg");
	var mask_6_graphics_353 = new cjs.Graphics().p("A6HEEIAAoHMA0PAAAIAAIHg");
	var mask_6_graphics_354 = new cjs.Graphics().p("A6YEEIAAoHMA0xAAAIAAIHg");
	var mask_6_graphics_355 = new cjs.Graphics().p("A6qEEIAAoHMA1UAAAIAAIHg");
	var mask_6_graphics_993 = new cjs.Graphics().p("A6qEEIAAoHMA1UAAAIAAIHg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(259).to({graphics:mask_6_graphics_259,x:-12,y:83.3}).wait(1).to({graphics:mask_6_graphics_260,x:-7.175,y:83.3}).wait(1).to({graphics:mask_6_graphics_261,x:-2.35,y:83.3}).wait(1).to({graphics:mask_6_graphics_262,x:2.475,y:83.3}).wait(1).to({graphics:mask_6_graphics_263,x:7.325,y:83.3}).wait(1).to({graphics:mask_6_graphics_264,x:12.125,y:83.3}).wait(1).to({graphics:mask_6_graphics_265,x:16.95,y:83.3}).wait(1).to({graphics:mask_6_graphics_266,x:21.775,y:83.3}).wait(1).to({graphics:mask_6_graphics_267,x:26.6,y:83.3}).wait(1).to({graphics:mask_6_graphics_268,x:26.6,y:83.3}).wait(1).to({graphics:mask_6_graphics_269,x:26.6,y:83.3}).wait(1).to({graphics:mask_6_graphics_270,x:26.6,y:83.3}).wait(1).to({graphics:mask_6_graphics_271,x:26.6,y:83.3}).wait(1).to({graphics:mask_6_graphics_272,x:26.6,y:83.3}).wait(1).to({graphics:mask_6_graphics_273,x:26.6,y:83.3}).wait(1).to({graphics:mask_6_graphics_274,x:28.35,y:83.3}).wait(1).to({graphics:mask_6_graphics_275,x:30.075,y:83.3}).wait(1).to({graphics:mask_6_graphics_276,x:31.825,y:83.3}).wait(1).to({graphics:mask_6_graphics_277,x:33.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_278,x:35.3,y:83.3}).wait(1).to({graphics:mask_6_graphics_279,x:37.025,y:83.3}).wait(1).to({graphics:mask_6_graphics_280,x:38.775,y:83.3}).wait(1).to({graphics:mask_6_graphics_281,x:40.5,y:83.3}).wait(1).to({graphics:mask_6_graphics_282,x:42.25,y:83.3}).wait(1).to({graphics:mask_6_graphics_283,x:43.975,y:83.3}).wait(1).to({graphics:mask_6_graphics_284,x:45.725,y:83.3}).wait(1).to({graphics:mask_6_graphics_285,x:47.425,y:83.3}).wait(1).to({graphics:mask_6_graphics_286,x:49.175,y:83.3}).wait(1).to({graphics:mask_6_graphics_287,x:50.9,y:83.3}).wait(1).to({graphics:mask_6_graphics_288,x:52.65,y:83.3}).wait(1).to({graphics:mask_6_graphics_289,x:54.375,y:83.3}).wait(1).to({graphics:mask_6_graphics_290,x:56.125,y:83.3}).wait(1).to({graphics:mask_6_graphics_291,x:57.85,y:83.3}).wait(1).to({graphics:mask_6_graphics_292,x:59.6,y:83.3}).wait(1).to({graphics:mask_6_graphics_293,x:61.325,y:83.3}).wait(1).to({graphics:mask_6_graphics_294,x:63.075,y:83.3}).wait(1).to({graphics:mask_6_graphics_295,x:64.8,y:83.3}).wait(1).to({graphics:mask_6_graphics_296,x:66.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_297,x:66.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_298,x:66.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_299,x:66.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_300,x:66.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_301,x:66.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_302,x:66.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_303,x:66.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_304,x:66.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_305,x:66.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_306,x:66.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_307,x:66.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_308,x:66.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_309,x:66.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_310,x:66.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_311,x:66.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_312,x:66.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_313,x:66.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_314,x:66.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_315,x:69.1,y:83.3}).wait(1).to({graphics:mask_6_graphics_316,x:71.625,y:83.3}).wait(1).to({graphics:mask_6_graphics_317,x:74.175,y:83.3}).wait(1).to({graphics:mask_6_graphics_318,x:76.725,y:83.3}).wait(1).to({graphics:mask_6_graphics_319,x:79.25,y:83.3}).wait(1).to({graphics:mask_6_graphics_320,x:81.8,y:83.3}).wait(1).to({graphics:mask_6_graphics_321,x:84.325,y:83.3}).wait(1).to({graphics:mask_6_graphics_322,x:86.875,y:83.3}).wait(1).to({graphics:mask_6_graphics_323,x:89.4,y:83.3}).wait(1).to({graphics:mask_6_graphics_324,x:91.925,y:83.3}).wait(1).to({graphics:mask_6_graphics_325,x:94.475,y:83.3}).wait(1).to({graphics:mask_6_graphics_326,x:97.025,y:83.3}).wait(1).to({graphics:mask_6_graphics_327,x:99.55,y:83.3}).wait(1).to({graphics:mask_6_graphics_328,x:102.1,y:83.3}).wait(1).to({graphics:mask_6_graphics_329,x:104.625,y:83.3}).wait(1).to({graphics:mask_6_graphics_330,x:107.175,y:83.3}).wait(1).to({graphics:mask_6_graphics_331,x:108.9,y:83.3}).wait(1).to({graphics:mask_6_graphics_332,x:110.65,y:83.3}).wait(1).to({graphics:mask_6_graphics_333,x:112.375,y:83.3}).wait(1).to({graphics:mask_6_graphics_334,x:114.1,y:83.3}).wait(1).to({graphics:mask_6_graphics_335,x:115.85,y:83.3}).wait(1).to({graphics:mask_6_graphics_336,x:117.575,y:83.3}).wait(1).to({graphics:mask_6_graphics_337,x:119.3,y:83.3}).wait(1).to({graphics:mask_6_graphics_338,x:121.05,y:83.3}).wait(1).to({graphics:mask_6_graphics_339,x:122.775,y:83.3}).wait(1).to({graphics:mask_6_graphics_340,x:124.5,y:83.3}).wait(1).to({graphics:mask_6_graphics_341,x:126.25,y:83.3}).wait(1).to({graphics:mask_6_graphics_342,x:127.975,y:83.3}).wait(1).to({graphics:mask_6_graphics_343,x:129.7,y:83.3}).wait(1).to({graphics:mask_6_graphics_344,x:131.425,y:83.3}).wait(1).to({graphics:mask_6_graphics_345,x:133.175,y:83.3}).wait(1).to({graphics:mask_6_graphics_346,x:134.9,y:83.3}).wait(1).to({graphics:mask_6_graphics_347,x:136.625,y:83.3}).wait(1).to({graphics:mask_6_graphics_348,x:138.375,y:83.3}).wait(1).to({graphics:mask_6_graphics_349,x:140.1,y:83.3}).wait(1).to({graphics:mask_6_graphics_350,x:141.825,y:83.3}).wait(1).to({graphics:mask_6_graphics_351,x:143.575,y:83.3}).wait(1).to({graphics:mask_6_graphics_352,x:145.3,y:83.3}).wait(1).to({graphics:mask_6_graphics_353,x:147.025,y:83.3}).wait(1).to({graphics:mask_6_graphics_354,x:148.775,y:83.3}).wait(1).to({graphics:mask_6_graphics_355,x:150.5,y:83.3}).wait(638).to({graphics:mask_6_graphics_993,x:150.5,y:83.3}).wait(1).to({graphics:null,x:0,y:0}).wait(65));

	// 图层_5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("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");
	this.shape_6.setTransform(237.65,231.85);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(259).to({_off:false},0).wait(734).to({_off:true},1).wait(65));

	// 图层_4 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_143 = new cjs.Graphics().p("AhqFaIAAq0IDUAAIAAK0g");
	var mask_7_graphics_144 = new cjs.Graphics().p("AiEFaIAAq0IEJAAIAAK0g");
	var mask_7_graphics_145 = new cjs.Graphics().p("AieFaIAAq0IE9AAIAAK0g");
	var mask_7_graphics_146 = new cjs.Graphics().p("Ai4FaIAAq0IFxAAIAAK0g");
	var mask_7_graphics_147 = new cjs.Graphics().p("AjSFaIAAq0IGlAAIAAK0g");
	var mask_7_graphics_148 = new cjs.Graphics().p("AjsFaIAAq0IHZAAIAAK0g");
	var mask_7_graphics_149 = new cjs.Graphics().p("AkGFaIAAq0IINAAIAAK0g");
	var mask_7_graphics_150 = new cjs.Graphics().p("AkhFaIAAq0IJDAAIAAK0g");
	var mask_7_graphics_151 = new cjs.Graphics().p("Ak7FaIAAq0IJ3AAIAAK0g");
	var mask_7_graphics_152 = new cjs.Graphics().p("AlVFaIAAq0IKrAAIAAK0g");
	var mask_7_graphics_153 = new cjs.Graphics().p("AlvFaIAAq0ILfAAIAAK0g");
	var mask_7_graphics_154 = new cjs.Graphics().p("AmJFaIAAq0IMTAAIAAK0g");
	var mask_7_graphics_155 = new cjs.Graphics().p("AmjFaIAAq0INHAAIAAK0g");
	var mask_7_graphics_156 = new cjs.Graphics().p("Am9FaIAAq0IN7AAIAAK0g");
	var mask_7_graphics_157 = new cjs.Graphics().p("AnYFaIAAq0IOxAAIAAK0g");
	var mask_7_graphics_158 = new cjs.Graphics().p("AnyFaIAAq0IPlAAIAAK0g");
	var mask_7_graphics_159 = new cjs.Graphics().p("AoMFaIAAq0IQZAAIAAK0g");
	var mask_7_graphics_160 = new cjs.Graphics().p("AomFaIAAq0IRNAAIAAK0g");
	var mask_7_graphics_161 = new cjs.Graphics().p("ApAFaIAAq0ISBAAIAAK0g");
	var mask_7_graphics_162 = new cjs.Graphics().p("ApaFaIAAq0IS1AAIAAK0g");
	var mask_7_graphics_163 = new cjs.Graphics().p("Ap0FaIAAq0ITqAAIAAK0g");
	var mask_7_graphics_164 = new cjs.Graphics().p("AqPFaIAAq0IUfAAIAAK0g");
	var mask_7_graphics_165 = new cjs.Graphics().p("AqpFaIAAq0IVTAAIAAK0g");
	var mask_7_graphics_166 = new cjs.Graphics().p("ArDFaIAAq0IWHAAIAAK0g");
	var mask_7_graphics_167 = new cjs.Graphics().p("ArdFaIAAq0IW7AAIAAK0g");
	var mask_7_graphics_168 = new cjs.Graphics().p("Ar3FaIAAq0IXvAAIAAK0g");
	var mask_7_graphics_169 = new cjs.Graphics().p("AsRFaIAAq0IYkAAIAAK0g");
	var mask_7_graphics_170 = new cjs.Graphics().p("AsrFaIAAq0IZXAAIAAK0g");
	var mask_7_graphics_171 = new cjs.Graphics().p("AtGFaIAAq0IaNAAIAAK0g");
	var mask_7_graphics_172 = new cjs.Graphics().p("AtgFaIAAq0IbBAAIAAK0g");
	var mask_7_graphics_173 = new cjs.Graphics().p("At6FaIAAq0Ib1AAIAAK0g");
	var mask_7_graphics_174 = new cjs.Graphics().p("AuVFaIAAq0IcqAAIAAK0g");
	var mask_7_graphics_175 = new cjs.Graphics().p("AuvFaIAAq0IdfAAIAAK0g");
	var mask_7_graphics_176 = new cjs.Graphics().p("AvJFaIAAq0IeTAAIAAK0g");
	var mask_7_graphics_177 = new cjs.Graphics().p("AvjFaIAAq0IfHAAIAAK0g");
	var mask_7_graphics_178 = new cjs.Graphics().p("Av9FaIAAq0If7AAIAAK0g");
	var mask_7_graphics_179 = new cjs.Graphics().p("AwXFaIAAq0MAgvAAAIAAK0g");
	var mask_7_graphics_180 = new cjs.Graphics().p("AwxFaIAAq0MAhjAAAIAAK0g");
	var mask_7_graphics_181 = new cjs.Graphics().p("AwxFaIAAq0MAhjAAAIAAK0g");
	var mask_7_graphics_182 = new cjs.Graphics().p("AwxFaIAAq0MAhjAAAIAAK0g");
	var mask_7_graphics_183 = new cjs.Graphics().p("AwxFaIAAq0MAhjAAAIAAK0g");
	var mask_7_graphics_184 = new cjs.Graphics().p("AwxFaIAAq0MAhjAAAIAAK0g");
	var mask_7_graphics_185 = new cjs.Graphics().p("AwxFaIAAq0MAhjAAAIAAK0g");
	var mask_7_graphics_186 = new cjs.Graphics().p("AwxFaIAAq0MAhjAAAIAAK0g");
	var mask_7_graphics_187 = new cjs.Graphics().p("AwxFaIAAq0MAhjAAAIAAK0g");
	var mask_7_graphics_188 = new cjs.Graphics().p("AwxFaIAAq0MAhjAAAIAAK0g");
	var mask_7_graphics_189 = new cjs.Graphics().p("AwxFaIAAq0MAhjAAAIAAK0g");
	var mask_7_graphics_190 = new cjs.Graphics().p("AwxFaIAAq0MAhjAAAIAAK0g");
	var mask_7_graphics_191 = new cjs.Graphics().p("AwxFaIAAq0MAhjAAAIAAK0g");
	var mask_7_graphics_192 = new cjs.Graphics().p("AwxFaIAAq0MAhjAAAIAAK0g");
	var mask_7_graphics_193 = new cjs.Graphics().p("AwxFaIAAq0MAhjAAAIAAK0g");
	var mask_7_graphics_194 = new cjs.Graphics().p("AwxFaIAAq0MAhjAAAIAAK0g");
	var mask_7_graphics_195 = new cjs.Graphics().p("AwxFaIAAq0MAhjAAAIAAK0g");
	var mask_7_graphics_196 = new cjs.Graphics().p("AwxFaIAAq0MAhjAAAIAAK0g");
	var mask_7_graphics_197 = new cjs.Graphics().p("AwxFaIAAq0MAhjAAAIAAK0g");
	var mask_7_graphics_198 = new cjs.Graphics().p("AxVFaIAAq0MAirAAAIAAK0g");
	var mask_7_graphics_199 = new cjs.Graphics().p("Ax5FaIAAq0MAjzAAAIAAK0g");
	var mask_7_graphics_200 = new cjs.Graphics().p("AydFaIAAq0MAk7AAAIAAK0g");
	var mask_7_graphics_201 = new cjs.Graphics().p("AzBFaIAAq0MAmDAAAIAAK0g");
	var mask_7_graphics_202 = new cjs.Graphics().p("AzkFaIAAq0MAnJAAAIAAK0g");
	var mask_7_graphics_203 = new cjs.Graphics().p("A0IFaIAAq0MAoRAAAIAAK0g");
	var mask_7_graphics_204 = new cjs.Graphics().p("A0sFaIAAq0MApZAAAIAAK0g");
	var mask_7_graphics_205 = new cjs.Graphics().p("A1QFaIAAq0MAqhAAAIAAK0g");
	var mask_7_graphics_206 = new cjs.Graphics().p("A10FaIAAq0MArpAAAIAAK0g");
	var mask_7_graphics_207 = new cjs.Graphics().p("A2YFaIAAq0MAsxAAAIAAK0g");
	var mask_7_graphics_208 = new cjs.Graphics().p("A27FaIAAq0MAt3AAAIAAK0g");
	var mask_7_graphics_209 = new cjs.Graphics().p("A3fFaIAAq0MAu/AAAIAAK0g");
	var mask_7_graphics_210 = new cjs.Graphics().p("A4DFaIAAq0MAwHAAAIAAK0g");
	var mask_7_graphics_211 = new cjs.Graphics().p("A4nFaIAAq0MAxPAAAIAAK0g");
	var mask_7_graphics_212 = new cjs.Graphics().p("A5LFaIAAq0MAyWAAAIAAK0g");
	var mask_7_graphics_213 = new cjs.Graphics().p("A5uFaIAAq0MAzdAAAIAAK0g");
	var mask_7_graphics_214 = new cjs.Graphics().p("A6SFaIAAq0MA0lAAAIAAK0g");
	var mask_7_graphics_215 = new cjs.Graphics().p("A62FaIAAq0MA1tAAAIAAK0g");
	var mask_7_graphics_216 = new cjs.Graphics().p("A7ZFaIAAq0MA20AAAIAAK0g");
	var mask_7_graphics_217 = new cjs.Graphics().p("A79FaIAAq0MA37AAAIAAK0g");
	var mask_7_graphics_218 = new cjs.Graphics().p("A8hFaIAAq0MA5DAAAIAAK0g");
	var mask_7_graphics_219 = new cjs.Graphics().p("A9FFaIAAq0MA6LAAAIAAK0g");
	var mask_7_graphics_220 = new cjs.Graphics().p("A9pFaIAAq0MA7TAAAIAAK0g");
	var mask_7_graphics_221 = new cjs.Graphics().p("A+MFaIAAq0MA8aAAAIAAK0g");
	var mask_7_graphics_222 = new cjs.Graphics().p("A+wFaIAAq0MA9iAAAIAAK0g");
	var mask_7_graphics_223 = new cjs.Graphics().p("A/UFaIAAq0MA+pAAAIAAK0g");
	var mask_7_graphics_224 = new cjs.Graphics().p("A/4FaIAAq0MA/xAAAIAAK0g");
	var mask_7_graphics_225 = new cjs.Graphics().p("EggcAFaIAAq0MBA5AAAIAAK0g");
	var mask_7_graphics_226 = new cjs.Graphics().p("EghAAFaIAAq0MBCBAAAIAAK0g");
	var mask_7_graphics_227 = new cjs.Graphics().p("EghjAFaIAAq0MBDHAAAIAAK0g");
	var mask_7_graphics_228 = new cjs.Graphics().p("EgiHAFaIAAq0MBEPAAAIAAK0g");
	var mask_7_graphics_229 = new cjs.Graphics().p("EgirAFaIAAq0MBFXAAAIAAK0g");
	var mask_7_graphics_230 = new cjs.Graphics().p("EgjPAFaIAAq0MBGfAAAIAAK0g");
	var mask_7_graphics_231 = new cjs.Graphics().p("EgjzAFaIAAq0MBHnAAAIAAK0g");
	var mask_7_graphics_232 = new cjs.Graphics().p("EgkWAFaIAAq0MBItAAAIAAK0g");
	var mask_7_graphics_233 = new cjs.Graphics().p("Egk6AFaIAAq0MBJ1AAAIAAK0g");
	var mask_7_graphics_234 = new cjs.Graphics().p("EgleAFaIAAq0MBK9AAAIAAK0g");
	var mask_7_graphics_993 = new cjs.Graphics().p("EgleAFaIAAq0MBK9AAAIAAK0g");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(143).to({graphics:mask_7_graphics_143,x:-15.95,y:26.65}).wait(1).to({graphics:mask_7_graphics_144,x:-13.325,y:26.65}).wait(1).to({graphics:mask_7_graphics_145,x:-10.725,y:26.65}).wait(1).to({graphics:mask_7_graphics_146,x:-8.1,y:26.65}).wait(1).to({graphics:mask_7_graphics_147,x:-5.5,y:26.65}).wait(1).to({graphics:mask_7_graphics_148,x:-2.875,y:26.65}).wait(1).to({graphics:mask_7_graphics_149,x:-0.275,y:26.65}).wait(1).to({graphics:mask_7_graphics_150,x:2.35,y:26.65}).wait(1).to({graphics:mask_7_graphics_151,x:4.975,y:26.65}).wait(1).to({graphics:mask_7_graphics_152,x:7.575,y:26.65}).wait(1).to({graphics:mask_7_graphics_153,x:10.175,y:26.65}).wait(1).to({graphics:mask_7_graphics_154,x:12.775,y:26.65}).wait(1).to({graphics:mask_7_graphics_155,x:15.4,y:26.65}).wait(1).to({graphics:mask_7_graphics_156,x:18,y:26.65}).wait(1).to({graphics:mask_7_graphics_157,x:20.625,y:26.65}).wait(1).to({graphics:mask_7_graphics_158,x:23.25,y:26.65}).wait(1).to({graphics:mask_7_graphics_159,x:25.85,y:26.65}).wait(1).to({graphics:mask_7_graphics_160,x:28.475,y:26.65}).wait(1).to({graphics:mask_7_graphics_161,x:31.075,y:26.65}).wait(1).to({graphics:mask_7_graphics_162,x:33.7,y:26.65}).wait(1).to({graphics:mask_7_graphics_163,x:36.3,y:26.65}).wait(1).to({graphics:mask_7_graphics_164,x:38.925,y:26.65}).wait(1).to({graphics:mask_7_graphics_165,x:41.525,y:26.65}).wait(1).to({graphics:mask_7_graphics_166,x:44.15,y:26.65}).wait(1).to({graphics:mask_7_graphics_167,x:46.775,y:26.65}).wait(1).to({graphics:mask_7_graphics_168,x:49.375,y:26.65}).wait(1).to({graphics:mask_7_graphics_169,x:52,y:26.65}).wait(1).to({graphics:mask_7_graphics_170,x:54.6,y:26.65}).wait(1).to({graphics:mask_7_graphics_171,x:57.2,y:26.65}).wait(1).to({graphics:mask_7_graphics_172,x:59.8,y:26.65}).wait(1).to({graphics:mask_7_graphics_173,x:62.425,y:26.65}).wait(1).to({graphics:mask_7_graphics_174,x:65.05,y:26.65}).wait(1).to({graphics:mask_7_graphics_175,x:67.65,y:26.65}).wait(1).to({graphics:mask_7_graphics_176,x:70.275,y:26.65}).wait(1).to({graphics:mask_7_graphics_177,x:72.875,y:26.65}).wait(1).to({graphics:mask_7_graphics_178,x:75.5,y:26.65}).wait(1).to({graphics:mask_7_graphics_179,x:78.1,y:26.65}).wait(1).to({graphics:mask_7_graphics_180,x:80.725,y:26.65}).wait(1).to({graphics:mask_7_graphics_181,x:80.725,y:26.65}).wait(1).to({graphics:mask_7_graphics_182,x:80.725,y:26.65}).wait(1).to({graphics:mask_7_graphics_183,x:80.725,y:26.65}).wait(1).to({graphics:mask_7_graphics_184,x:80.725,y:26.65}).wait(1).to({graphics:mask_7_graphics_185,x:80.725,y:26.65}).wait(1).to({graphics:mask_7_graphics_186,x:80.725,y:26.65}).wait(1).to({graphics:mask_7_graphics_187,x:80.725,y:26.65}).wait(1).to({graphics:mask_7_graphics_188,x:80.725,y:26.65}).wait(1).to({graphics:mask_7_graphics_189,x:80.725,y:26.65}).wait(1).to({graphics:mask_7_graphics_190,x:80.725,y:26.65}).wait(1).to({graphics:mask_7_graphics_191,x:80.725,y:26.65}).wait(1).to({graphics:mask_7_graphics_192,x:80.725,y:26.65}).wait(1).to({graphics:mask_7_graphics_193,x:80.725,y:26.65}).wait(1).to({graphics:mask_7_graphics_194,x:80.725,y:26.65}).wait(1).to({graphics:mask_7_graphics_195,x:80.725,y:26.65}).wait(1).to({graphics:mask_7_graphics_196,x:80.725,y:26.65}).wait(1).to({graphics:mask_7_graphics_197,x:80.725,y:26.65}).wait(1).to({graphics:mask_7_graphics_198,x:84.3,y:26.65}).wait(1).to({graphics:mask_7_graphics_199,x:87.9,y:26.65}).wait(1).to({graphics:mask_7_graphics_200,x:91.475,y:26.65}).wait(1).to({graphics:mask_7_graphics_201,x:95.05,y:26.65}).wait(1).to({graphics:mask_7_graphics_202,x:98.625,y:26.65}).wait(1).to({graphics:mask_7_graphics_203,x:102.225,y:26.65}).wait(1).to({graphics:mask_7_graphics_204,x:105.8,y:26.65}).wait(1).to({graphics:mask_7_graphics_205,x:109.375,y:26.65}).wait(1).to({graphics:mask_7_graphics_206,x:112.95,y:26.65}).wait(1).to({graphics:mask_7_graphics_207,x:116.55,y:26.65}).wait(1).to({graphics:mask_7_graphics_208,x:120.125,y:26.65}).wait(1).to({graphics:mask_7_graphics_209,x:123.7,y:26.65}).wait(1).to({graphics:mask_7_graphics_210,x:127.3,y:26.65}).wait(1).to({graphics:mask_7_graphics_211,x:130.875,y:26.65}).wait(1).to({graphics:mask_7_graphics_212,x:134.45,y:26.65}).wait(1).to({graphics:mask_7_graphics_213,x:138.025,y:26.65}).wait(1).to({graphics:mask_7_graphics_214,x:141.625,y:26.65}).wait(1).to({graphics:mask_7_graphics_215,x:145.2,y:26.65}).wait(1).to({graphics:mask_7_graphics_216,x:148.8,y:26.65}).wait(1).to({graphics:mask_7_graphics_217,x:152.375,y:26.65}).wait(1).to({graphics:mask_7_graphics_218,x:155.975,y:26.65}).wait(1).to({graphics:mask_7_graphics_219,x:159.55,y:26.65}).wait(1).to({graphics:mask_7_graphics_220,x:163.125,y:26.65}).wait(1).to({graphics:mask_7_graphics_221,x:166.7,y:26.65}).wait(1).to({graphics:mask_7_graphics_222,x:170.3,y:26.65}).wait(1).to({graphics:mask_7_graphics_223,x:173.875,y:26.65}).wait(1).to({graphics:mask_7_graphics_224,x:177.45,y:26.65}).wait(1).to({graphics:mask_7_graphics_225,x:181.05,y:26.65}).wait(1).to({graphics:mask_7_graphics_226,x:184.625,y:26.65}).wait(1).to({graphics:mask_7_graphics_227,x:188.2,y:26.65}).wait(1).to({graphics:mask_7_graphics_228,x:191.775,y:26.65}).wait(1).to({graphics:mask_7_graphics_229,x:195.375,y:26.65}).wait(1).to({graphics:mask_7_graphics_230,x:198.95,y:26.65}).wait(1).to({graphics:mask_7_graphics_231,x:202.525,y:26.65}).wait(1).to({graphics:mask_7_graphics_232,x:206.1,y:26.65}).wait(1).to({graphics:mask_7_graphics_233,x:209.7,y:26.65}).wait(1).to({graphics:mask_7_graphics_234,x:213.275,y:26.65}).wait(759).to({graphics:mask_7_graphics_993,x:213.275,y:26.65}).wait(1).to({graphics:null,x:0,y:0}).wait(65));

	// 图层_2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("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");
	this.shape_7.setTransform(237.65,231.85);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(143).to({_off:false},0).wait(850).to({_off:true},1).wait(65));

	// 图层_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("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");
	this.shape_8.setTransform(237.65,231.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(993).to({_off:true},1).wait(65));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,476.1,454.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(2.2,17.1,470.9,429.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.标题 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_7 = new cjs.Graphics().p("AhGCnIAAlNIBkAAIAAFNg");
	var mask_graphics_8 = new cjs.Graphics().p("AhDCnIAAlNICGAAIAAFNg");
	var mask_graphics_9 = new cjs.Graphics().p("AhUCnIAAlNICpAAIAAFNg");
	var mask_graphics_10 = new cjs.Graphics().p("AhlCnIAAlNIDLAAIAAFNg");
	var mask_graphics_11 = new cjs.Graphics().p("Ah3CnIAAlNIDvAAIAAFNg");
	var mask_graphics_12 = new cjs.Graphics().p("AiICnIAAlNIERAAIAAFNg");
	var mask_graphics_13 = new cjs.Graphics().p("AiaCnIAAlNIE1AAIAAFNg");
	var mask_graphics_14 = new cjs.Graphics().p("AirCnIAAlNIFXAAIAAFNg");
	var mask_graphics_15 = new cjs.Graphics().p("Ai8CnIAAlNIF5AAIAAFNg");
	var mask_graphics_16 = new cjs.Graphics().p("AjOCnIAAlNIGcAAIAAFNg");
	var mask_graphics_17 = new cjs.Graphics().p("AjfCnIAAlNIG/AAIAAFNg");
	var mask_graphics_18 = new cjs.Graphics().p("AjwCnIAAlNIHhAAIAAFNg");
	var mask_graphics_19 = new cjs.Graphics().p("AkCCnIAAlNIIFAAIAAFNg");
	var mask_graphics_20 = new cjs.Graphics().p("AkTCnIAAlNIInAAIAAFNg");
	var mask_graphics_21 = new cjs.Graphics().p("AklCnIAAlNIJLAAIAAFNg");
	var mask_graphics_22 = new cjs.Graphics().p("Ak2CnIAAlNIJtAAIAAFNg");
	var mask_graphics_23 = new cjs.Graphics().p("AlHCnIAAlNIKPAAIAAFNg");
	var mask_graphics_24 = new cjs.Graphics().p("AlZCnIAAlNIKyAAIAAFNg");
	var mask_graphics_25 = new cjs.Graphics().p("AlqCnIAAlNILVAAIAAFNg");
	var mask_graphics_26 = new cjs.Graphics().p("Al7CnIAAlNIL3AAIAAFNg");
	var mask_graphics_27 = new cjs.Graphics().p("AmNCnIAAlNIMbAAIAAFNg");
	var mask_graphics_28 = new cjs.Graphics().p("AmeCnIAAlNIM9AAIAAFNg");
	var mask_graphics_29 = new cjs.Graphics().p("AmvCnIAAlNINgAAIAAFNg");
	var mask_graphics_30 = new cjs.Graphics().p("AnBCnIAAlNIODAAIAAFNg");
	var mask_graphics_31 = new cjs.Graphics().p("AnSCnIAAlNIOlAAIAAFNg");
	var mask_graphics_32 = new cjs.Graphics().p("AnkCnIAAlNIPJAAIAAFNg");
	var mask_graphics_33 = new cjs.Graphics().p("An1CnIAAlNIPrAAIAAFNg");
	var mask_graphics_34 = new cjs.Graphics().p("AoGCnIAAlNIQNAAIAAFNg");
	var mask_graphics_35 = new cjs.Graphics().p("AoYCnIAAlNIQxAAIAAFNg");
	var mask_graphics_36 = new cjs.Graphics().p("AopCnIAAlNIRTAAIAAFNg");
	var mask_graphics_37 = new cjs.Graphics().p("Ao6CnIAAlNIR2AAIAAFNg");
	var mask_graphics_38 = new cjs.Graphics().p("ApMCnIAAlNISZAAIAAFNg");
	var mask_graphics_39 = new cjs.Graphics().p("ApdCnIAAlNIS7AAIAAFNg");
	var mask_graphics_40 = new cjs.Graphics().p("ApvCnIAAlNITfAAIAAFNg");
	var mask_graphics_41 = new cjs.Graphics().p("AqACnIAAlNIUBAAIAAFNg");
	var mask_graphics_42 = new cjs.Graphics().p("AqRCnIAAlNIUjAAIAAFNg");
	var mask_graphics_43 = new cjs.Graphics().p("AqjCnIAAlNIVHAAIAAFNg");
	var mask_graphics_44 = new cjs.Graphics().p("Aq0CnIAAlNIVpAAIAAFNg");
	var mask_graphics_45 = new cjs.Graphics().p("ArFCnIAAlNIWMAAIAAFNg");
	var mask_graphics_46 = new cjs.Graphics().p("ArXCnIAAlNIWvAAIAAFNg");
	var mask_graphics_47 = new cjs.Graphics().p("AroCnIAAlNIXRAAIAAFNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_graphics_7,x:-7.05,y:5.725}).wait(1).to({graphics:mask_graphics_8,x:-7.35,y:5.725}).wait(1).to({graphics:mask_graphics_9,x:-5.6,y:5.725}).wait(1).to({graphics:mask_graphics_10,x:-3.875,y:5.725}).wait(1).to({graphics:mask_graphics_11,x:-2.125,y:5.725}).wait(1).to({graphics:mask_graphics_12,x:-0.4,y:5.725}).wait(1).to({graphics:mask_graphics_13,x:1.35,y:5.725}).wait(1).to({graphics:mask_graphics_14,x:3.075,y:5.725}).wait(1).to({graphics:mask_graphics_15,x:4.825,y:5.725}).wait(1).to({graphics:mask_graphics_16,x:6.55,y:5.725}).wait(1).to({graphics:mask_graphics_17,x:8.3,y:5.725}).wait(1).to({graphics:mask_graphics_18,x:10.025,y:5.725}).wait(1).to({graphics:mask_graphics_19,x:11.775,y:5.725}).wait(1).to({graphics:mask_graphics_20,x:13.5,y:5.725}).wait(1).to({graphics:mask_graphics_21,x:15.25,y:5.725}).wait(1).to({graphics:mask_graphics_22,x:16.975,y:5.725}).wait(1).to({graphics:mask_graphics_23,x:18.725,y:5.725}).wait(1).to({graphics:mask_graphics_24,x:20.45,y:5.725}).wait(1).to({graphics:mask_graphics_25,x:22.2,y:5.725}).wait(1).to({graphics:mask_graphics_26,x:23.925,y:5.725}).wait(1).to({graphics:mask_graphics_27,x:25.675,y:5.725}).wait(1).to({graphics:mask_graphics_28,x:27.375,y:5.725}).wait(1).to({graphics:mask_graphics_29,x:29.1,y:5.725}).wait(1).to({graphics:mask_graphics_30,x:30.85,y:5.725}).wait(1).to({graphics:mask_graphics_31,x:32.575,y:5.725}).wait(1).to({graphics:mask_graphics_32,x:34.325,y:5.725}).wait(1).to({graphics:mask_graphics_33,x:36.05,y:5.725}).wait(1).to({graphics:mask_graphics_34,x:37.8,y:5.725}).wait(1).to({graphics:mask_graphics_35,x:39.525,y:5.725}).wait(1).to({graphics:mask_graphics_36,x:41.275,y:5.725}).wait(1).to({graphics:mask_graphics_37,x:43,y:5.725}).wait(1).to({graphics:mask_graphics_38,x:44.75,y:5.725}).wait(1).to({graphics:mask_graphics_39,x:46.475,y:5.725}).wait(1).to({graphics:mask_graphics_40,x:48.225,y:5.725}).wait(1).to({graphics:mask_graphics_41,x:49.95,y:5.725}).wait(1).to({graphics:mask_graphics_42,x:51.7,y:5.725}).wait(1).to({graphics:mask_graphics_43,x:53.425,y:5.725}).wait(1).to({graphics:mask_graphics_44,x:55.175,y:5.725}).wait(1).to({graphics:mask_graphics_45,x:56.9,y:5.725}).wait(1).to({graphics:mask_graphics_46,x:58.65,y:5.725}).wait(1).to({graphics:mask_graphics_47,x:60.3796,y:5.725}).wait(53));

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("ABoBOIgIgZIADAAQAGAAADgDQAEgDAAgGIAAhDIAegDIAABJQAAAJgCAGQgCAHgFAEQgEAEgGACQgFACgIAAgAJgA4IgIgEIgGgFIgDgHQAAgDABgCQABgEADgBIAFgEIAIAAIAJABIAIAEQADADACADIADAFQABAEgBACIgEAGIgGADIgHAAIgJgBgApgA3QgKgDgGgFQgLgJgFgJQgFgLAAgJQgCgKADgKQACgKAFgKIALgQQAFgGAIgGIAKgEIAMgDQAKAAAEACQAHABAKAGQAIAFAJAKIgZAeQgHgIgGgCQgFgCgFABQgEACgCADIgFAHIgEALIABACQABAFACADQADAEAEACQAEACAHgDQAJgDAJgJIAcAdQgDAEgEAEQgFAEgIAEIgPAGQgGACgMABQgKAAgHgCgAGeAvQgGgHAAgLIAAg6IAfgCIgBAzQABADABABQACACADAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIgBgxIAggCIgBBSIgaABIAAgNQgEAIgFADQgHAEgIAAQgJgBgIgGgAFHACQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgDgCgCAAIgGACQAAAAAAABQgBAAAAAAQAAAAAAABQgBABAAAAIABAzIgdgCIgChOIAdgDIAAAKIABAAQAFgGAEgCQAFgCAGAAQAGAAAEACQAEACAEAEQADAEACAEIABALIAAA2IgeADgAhKACQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAIgFACQgBAAAAABQAAAAgBAAQAAAAAAABQAAABAAAAIABAzIgfgCIgBhOIAdgDIAAAKIABAAQAEgGAGgCQAEgCAGAAQAHAAAEACQAEACADAEIAFAIIABALIAAA2IgeADgAH0A1IgLgDIAAgaIAIACIAMABIADgBIAEgBIABgDQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgNgEIgHgEIgFgHQgCgEAAgGQAAgFACgEIAFgIQAFgEAGgDQAGgCAJAAIAHAAIASADIAAAZIgHgCIgKAAIgEAAIgDABQAAABgBAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAFACIAIACIAHAFIAFAGQACAFABAHQgBAIgDAEQgDAFgGADQgFADgHACIgPABgADygaIAggDIgCBPIgeADgAgRAyQgGgCgGgGQgFgGgDgHQgDgIAAgKQAAgIACgIQAEgJAEgFQAFgGAHgDQAHgDAJgBIAIABQAGADACACIgBgiIAggCIgBBwIgbADIAAgIQgDAEgHACQgEACgGAAQgHAAgHgDgAgCAAQgDAAgDACIgDAEIgBAFIABAFIACAEIAFADIAEABIAGgBIAFgDIAEgEIAAgFIAAgFIgCgEIgFgCIgFgBIgFABgAkvAxQgIgCgHgGQgEgGgEgHQgDgIAAgIQgBgLAEgHQADgIAGgGQAFgFAJgEQAHgDAIAAQAPAAAKAIQAKAGAGAMIgrAfIAFABIAEABQAGAAAFgDIAIgFIAOAWQgKAHgHACQgKADgLAAQgLAAgGgEgAkkgGIgFADIgDAEIAAAIIABACIAVgPIgEgDIgGAAIgEABgAm/AyIgChPIAdgCIAAANQAEgFAGgEQAGgEAIAAQAFAAAGACQAFACADAEQAEgDAEgDQAGgCAEAAQAGAAAGACQAEACAEAEQADAEABAFQACAFAAAHIABA0IgeADIABgzQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAgBQgCgBgEAAQgDAAgBACQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIABAwIgfADIAAgzQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBgBQgCgBgDAAIgFABQgCACAAACIACAzgAC2AzQgIgBgIgFQgHgEgEgIQgEgIgCgJQgCgJADgIQADgIAFgHQAFgGAHgEQAJgFAIgBQAKgBAIACQAJACAHAFQAGAEAEAHQAFAIACAIQABAJgCAJQgDAJgFAGQgFAHgIAEQgIAEgIABIgJABIgJgCgAC8gCQgHACgCAFQgDAFACAFQADAGAFABQAGACAGgDQAGgDADgEQACgFgCgGQgCgEgFgCIgFAAQgEAAgDABgAn8AzQgHgBgIgFQgHgFgEgHQgEgHgCgKQgBgJACgIQADgIAEgHQAFgFAIgFQAIgFAJgBQAKgBAIACQAJACAGAFQAHAFAEAGQAEAHACAJQACALgDAHQgCAJgFAGQgFAHgIAEQgIAEgJABIgIABIgKgCgAn1gCQgHACgCAFQgDAFADAFQACAGAFABQAGACAGgDQAHgDACgEQACgGgCgFQgDgEgFgCIgEAAIgHABgAidAqIAAAAQgFAFgFACQgEACgJAAQgFAAgFgCQgFgBgEgEQgEgEgCgFQgCgFAAgHQAAgHACgEQACgFAEgDQAFgEAEAAQAHgDAEAAQAFAAAHACIAHADIAAgDQAAgGgEgCQgGgDgFAAIgLACQgGAAgGADIAGgXIAOgCIAPgBQAHAAAHABQAFACAGAEQAFADADAGQADAHgBAHIgBA0IgcACgAivARQgEAAgEADQgCACAAAEQAAACADACQAEACAFgBQAGAAACgDQADgDAAgEIgDgEIgGgBIgEABgAJyATIgJgCIgKABIgJACIAIhgIApgCIgMBlQgEgDgFgBgABwg+IAfgBIgBAYIgeADgADyg+IAggBIgBAYIgfADg");
	this.shape.setTransform(64.7,7.85);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(7).to({_off:false},0).wait(93));

	// 图层_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008379").s().p("ABoBOIgIgZIADAAQAGAAADgDQAEgDAAgGIAAhDIAegDIAABJQAAAJgCAGQgCAHgFAEQgEAEgGACQgFACgIAAgAJgA4IgIgEIgGgFIgDgHQAAgDABgCQABgEADgBIAFgEIAIAAIAJABIAIAEQADADACADIADAFQABAEgBACIgEAGIgGADIgHAAIgJgBgApgA3QgKgDgGgFQgLgJgFgJQgFgLAAgJQgCgKADgKQACgKAFgKIALgQQAFgGAIgGIAKgEIAMgDQAKAAAEACQAHABAKAGQAIAFAJAKIgZAeQgHgIgGgCQgFgCgFABQgEACgCADIgFAHIgEALIABACQABAFACADQADAEAEACQAEACAHgDQAJgDAJgJIAcAdQgDAEgEAEQgFAEgIAEIgPAGQgGACgMABQgKAAgHgCgAGeAvQgGgHAAgLIAAg6IAfgCIgBAzQABADABABQACACADAAQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIgBgxIAggCIgBBSIgaABIAAgNQgEAIgFADQgHAEgIAAQgJgBgIgGgAFHACQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgDgCgCAAIgGACQAAAAAAABQgBAAAAAAQAAAAAAABQgBABAAAAIABAzIgdgCIgChOIAdgDIAAAKIABAAQAFgGAEgCQAFgCAGAAQAGAAAEACQAEACAEAEQADAEACAEIABALIAAA2IgeADgAhKACQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAIgFACQgBAAAAABQAAAAgBAAQAAAAAAABQAAABAAAAIABAzIgfgCIgBhOIAdgDIAAAKIABAAQAEgGAGgCQAEgCAGAAQAHAAAEACQAEACADAEIAFAIIABALIAAA2IgeADgAH0A1IgLgDIAAgaIAIACIAMABIADgBIAEgBIABgDQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAIgNgEIgHgEIgFgHQgCgEAAgGQAAgFACgEIAFgIQAFgEAGgDQAGgCAJAAIAHAAIASADIAAAZIgHgCIgKAAIgEAAIgDABQAAABgBAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIAFACIAIACIAHAFIAFAGQACAFABAHQgBAIgDAEQgDAFgGADQgFADgHACIgPABgADygaIAggDIgCBPIgeADgAgRAyQgGgCgGgGQgFgGgDgHQgDgIAAgKQAAgIACgIQAEgJAEgFQAFgGAHgDQAHgDAJgBIAIABQAGADACACIgBgiIAggCIgBBwIgbADIAAgIQgDAEgHACQgEACgGAAQgHAAgHgDgAgCAAQgDAAgDACIgDAEIgBAFIABAFIACAEIAFADIAEABIAGgBIAFgDIAEgEIAAgFIAAgFIgCgEIgFgCIgFgBIgFABgAkvAxQgIgCgHgGQgEgGgEgHQgDgIAAgIQgBgLAEgHQADgIAGgGQAFgFAJgEQAHgDAIAAQAPAAAKAIQAKAGAGAMIgrAfIAFABIAEABQAGAAAFgDIAIgFIAOAWQgKAHgHACQgKADgLAAQgLAAgGgEgAkkgGIgFADIgDAEIAAAIIABACIAVgPIgEgDIgGAAIgEABgAm/AyIgChPIAdgCIAAANQAEgFAGgEQAGgEAIAAQAFAAAGACQAFACADAEQAEgDAEgDQAGgCAEAAQAGAAAGACQAEACAEAEQADAEABAFQACAFAAAHIABA0IgeADIABgzQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAgBQgCgBgEAAQgDAAgBACQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIABAwIgfADIAAgzQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBgBQgCgBgDAAIgFABQgCACAAACIACAzgAC2AzQgIgBgIgFQgHgEgEgIQgEgIgCgJQgCgJADgIQADgIAFgHQAFgGAHgEQAJgFAIgBQAKgBAIACQAJACAHAFQAGAEAEAHQAFAIACAIQABAJgCAJQgDAJgFAGQgFAHgIAEQgIAEgIABIgJABIgJgCgAC8gCQgHACgCAFQgDAFACAFQADAGAFABQAGACAGgDQAGgDADgEQACgFgCgGQgCgEgFgCIgFAAQgEAAgDABgAn8AzQgHgBgIgFQgHgFgEgHQgEgHgCgKQgBgJACgIQADgIAEgHQAFgFAIgFQAIgFAJgBQAKgBAIACQAJACAGAFQAHAFAEAGQAEAHACAJQACALgDAHQgCAJgFAGQgFAHgIAEQgIAEgJABIgIABIgKgCgAn1gCQgHACgCAFQgDAFADAFQACAGAFABQAGACAGgDQAHgDACgEQACgGgCgFQgDgEgFgCIgEAAIgHABgAidAqIAAAAQgFAFgFACQgEACgJAAQgFAAgFgCQgFgBgEgEQgEgEgCgFQgCgFAAgHQAAgHACgEQACgFAEgDQAFgEAEAAQAHgDAEAAQAFAAAHACIAHADIAAgDQAAgGgEgCQgGgDgFAAIgLACQgGAAgGADIAGgXIAOgCIAPgBQAHAAAHABQAFACAGAEQAFADADAGQADAHgBAHIgBA0IgcACgAivARQgEAAgEADQgCACAAAEQAAACADACQAEACAFgBQAGAAACgDQADgDAAgEIgDgEIgGgBIgEABgAJyATIgJgCIgKABIgJACIAIhgIApgCIgMBlQgEgDgFgBgABwg+IAfgBIgBAYIgeADgADyg+IAggBIgBAYIgfADg");
	this.shape_1.setTransform(64.7,7.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,129.4,15.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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

	// 图层_4
	this.instance = new lib.标题("synched",0,false);
	this.instance.setTransform(564.95,-38.95,2.9158,2.9158,0,0,0,64.7,7.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(994));

	// 图层 1
	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(654,41,0.4247,0.4247);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(994));

	// 图层_6
	this.instance_2 = new lib.元件2("synched",0);
	this.instance_2.setTransform(363.1,227.1,1,1,0,0,0,238.1,227.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(994));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(127.2,-61.7,856.8,508.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.shape_7.setTransform(412.2091,23.549,0.9827,1.1476,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_8.setTransform(412.2091,23.549,0.9827,1.1476,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_9.setTransform(422.6506,23.549,0.9827,1.1476,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_10.setTransform(422.6506,23.549,0.9827,1.1476,0,0,180);

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
	this._movieClip.setTransform(636.55,360.05,1,1,0,0,0,561,219);

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
		{src:"images/index_atlas_1.png?1733297351803", id:"index_atlas_1"}
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