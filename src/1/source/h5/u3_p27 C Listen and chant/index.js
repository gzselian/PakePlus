(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,1143,624]]}
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

	// 图层_12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1052 = new cjs.Graphics().p("EAtrASsIAAnhICrAAIAAHhg");
	var mask_graphics_1053 = new cjs.Graphics().p("AhyDwIAAnfIDlAAIAAHfg");
	var mask_graphics_1054 = new cjs.Graphics().p("AiPDwIAAnfIEfAAIAAHfg");
	var mask_graphics_1055 = new cjs.Graphics().p("AisDwIAAnfIFZAAIAAHfg");
	var mask_graphics_1056 = new cjs.Graphics().p("AjKDwIAAnfIGUAAIAAHfg");
	var mask_graphics_1057 = new cjs.Graphics().p("AjnDwIAAnfIHPAAIAAHfg");
	var mask_graphics_1058 = new cjs.Graphics().p("AkEDwIAAnfIIJAAIAAHfg");
	var mask_graphics_1059 = new cjs.Graphics().p("AkhDwIAAnfIJDAAIAAHfg");
	var mask_graphics_1060 = new cjs.Graphics().p("Ak+DwIAAnfIJ9AAIAAHfg");
	var mask_graphics_1061 = new cjs.Graphics().p("AlcDwIAAnfIK4AAIAAHfg");
	var mask_graphics_1062 = new cjs.Graphics().p("Al5DwIAAnfILzAAIAAHfg");
	var mask_graphics_1063 = new cjs.Graphics().p("AmWDwIAAnfIMtAAIAAHfg");
	var mask_graphics_1064 = new cjs.Graphics().p("Am0DwIAAnfINoAAIAAHfg");
	var mask_graphics_1065 = new cjs.Graphics().p("AnRDwIAAnfIOjAAIAAHfg");
	var mask_graphics_1066 = new cjs.Graphics().p("AnuDwIAAnfIPdAAIAAHfg");
	var mask_graphics_1067 = new cjs.Graphics().p("AoLDwIAAnfIQXAAIAAHfg");
	var mask_graphics_1068 = new cjs.Graphics().p("AopDwIAAnfIRSAAIAAHfg");
	var mask_graphics_1069 = new cjs.Graphics().p("ApGDwIAAnfISNAAIAAHfg");
	var mask_graphics_1070 = new cjs.Graphics().p("ApjDwIAAnfITHAAIAAHfg");
	var mask_graphics_1071 = new cjs.Graphics().p("AqADwIAAnfIUBAAIAAHfg");
	var mask_graphics_1072 = new cjs.Graphics().p("AqdDwIAAnfIU7AAIAAHfg");
	var mask_graphics_1073 = new cjs.Graphics().p("Aq7DwIAAnfIV3AAIAAHfg");
	var mask_graphics_1074 = new cjs.Graphics().p("ArYDwIAAnfIWxAAIAAHfg");
	var mask_graphics_1075 = new cjs.Graphics().p("EAjKASsIAAnhIXsAAIAAHhg");
	var mask_graphics_1138 = new cjs.Graphics().p("EAjKASsIAAnhIXsAAIAAHhg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1052).to({graphics:mask_graphics_1052,x:309.375,y:119.625}).wait(1).to({graphics:mask_graphics_1053,x:613.125,y:215.2}).wait(1).to({graphics:mask_graphics_1054,x:616.05,y:215.2}).wait(1).to({graphics:mask_graphics_1055,x:618.975,y:215.2}).wait(1).to({graphics:mask_graphics_1056,x:621.9,y:215.2}).wait(1).to({graphics:mask_graphics_1057,x:624.825,y:215.2}).wait(1).to({graphics:mask_graphics_1058,x:627.725,y:215.2}).wait(1).to({graphics:mask_graphics_1059,x:630.65,y:215.2}).wait(1).to({graphics:mask_graphics_1060,x:633.575,y:215.2}).wait(1).to({graphics:mask_graphics_1061,x:636.5,y:215.2}).wait(1).to({graphics:mask_graphics_1062,x:639.425,y:215.2}).wait(1).to({graphics:mask_graphics_1063,x:642.35,y:215.2}).wait(1).to({graphics:mask_graphics_1064,x:645.25,y:215.2}).wait(1).to({graphics:mask_graphics_1065,x:648.175,y:215.2}).wait(1).to({graphics:mask_graphics_1066,x:651.1,y:215.2}).wait(1).to({graphics:mask_graphics_1067,x:654.025,y:215.2}).wait(1).to({graphics:mask_graphics_1068,x:656.95,y:215.2}).wait(1).to({graphics:mask_graphics_1069,x:659.875,y:215.2}).wait(1).to({graphics:mask_graphics_1070,x:662.775,y:215.2}).wait(1).to({graphics:mask_graphics_1071,x:665.7,y:215.2}).wait(1).to({graphics:mask_graphics_1072,x:668.625,y:215.2}).wait(1).to({graphics:mask_graphics_1073,x:671.55,y:215.2}).wait(1).to({graphics:mask_graphics_1074,x:674.475,y:215.2}).wait(1).to({graphics:mask_graphics_1075,x:376.6057,y:119.625}).wait(63).to({graphics:mask_graphics_1138,x:376.6057,y:119.625}).wait(1).to({graphics:null,x:0,y:0}).wait(15));

	// 图层_22
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("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AgKAFQgLAGgEAOQgEANAAAYQAAAXAFAOQAEAOAKAFQALAGARAAQASAAALgGgANQlvQgRgHgJgTQgJgSAAggQAAggAJgTQAJgSARgIQAQgHAYAAQAOAAALACQAKABAHADIAAAYIgTgGQgKgBgNAAQgRAAgLAFQgKAFgEAOQgFANAAAZQgBAWAGAOQAEANAKAGQALAGASgBQAMAAALgCQAKgBAJgDIAAAXIgLADIgQACIgQABQgYAAgQgIgAJjlnQgYAAgQgMQgQgNgIgaIgDgNIAAgLIAAgJQAAgZAKgTQAKgTAVgNIAQgFQAIgCAHgBIADAAQAcABASAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIACAfIADAbIgBAAIgZAAQgBAAAAgHIgDgTIgGAJIgGAHQgIAGgJADQgIADgLAAgAJQnvQgNAKgHARIgDAMIgBANIAAAGQAAARAGAMQAHANALAJIALAFIALABIAFAAQAvAAAAg5IAAgLQgBgWgHgPQgJgOgQgEIgFgBIgEAAIgBAAQgSAAgNAJgACLlvQgRgHgJgTQgIgSgBggQABggAIgTQAJgSARgIQARgHAYAAQAXAAARAHQARAIAJASQAJATAAAgQAAAggJASQgJATgRAHQgRAIgXAAQgYAAgRgIgADRmDQAJgFAFgOQAEgOAAgXQAAgYgFgNQgEgOgKgGQgLgFgRAAQgTAAgKAFQgKAGgEAOQgFANAAAYQAAAXAFAOQAFAOAJAFQALAGASAAQASAAALgGgAjSlnQgYAAgQgMQgQgNgIgaIgCgNIgBgLIAAgJQAAgZAKgTQAKgTAVgNIAQgFQAIgCAIgBIACAAQAbABATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAfIAFAbIgCAAIgYAAQgBAAgBgHIgEgTIgFAJIgGAHQgHAGgKADQgIADgLAAgAjlnvQgMAKgIARIgDAMIgBANIAAAGQAAARAGAMQAGANAMAJIALAFIALABIAFAAQAuAAAAg5IAAgLQABgWgJgPQgHgOgQgEIgGgBIgEAAIgBAAQgSAAgNAJgAmYlvQgQgHgJgTQgJgSAAggQAAggAJgTQAIgSARgIQAQgHAYAAQAVAAAMAGQANAGAHAKQAGAKADAMQACAMABAMIgBAIIgBALIhuAHQAAARAFALQAFAMAMAGQA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");
	this.shape.setTransform(880.75,121.55);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1052).to({_off:false},0).wait(86).to({_off:true},1).wait(15));

	// 图层_11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_979 = new cjs.Graphics().p("EAtrAO8IAAnhICrAAIAAHhg");
	var mask_1_graphics_980 = new cjs.Graphics().p("AhzDxIAAnhIDnAAIAAHhg");
	var mask_1_graphics_981 = new cjs.Graphics().p("AiRDxIAAnhIEjAAIAAHhg");
	var mask_1_graphics_982 = new cjs.Graphics().p("AivDxIAAnhIFfAAIAAHhg");
	var mask_1_graphics_983 = new cjs.Graphics().p("AjNDxIAAnhIGbAAIAAHhg");
	var mask_1_graphics_984 = new cjs.Graphics().p("AjsDxIAAnhIHZAAIAAHhg");
	var mask_1_graphics_985 = new cjs.Graphics().p("AkKDxIAAnhIIVAAIAAHhg");
	var mask_1_graphics_986 = new cjs.Graphics().p("AkoDxIAAnhIJRAAIAAHhg");
	var mask_1_graphics_987 = new cjs.Graphics().p("AlGDxIAAnhIKNAAIAAHhg");
	var mask_1_graphics_988 = new cjs.Graphics().p("AlkDxIAAnhILJAAIAAHhg");
	var mask_1_graphics_989 = new cjs.Graphics().p("AmDDxIAAnhIMGAAIAAHhg");
	var mask_1_graphics_990 = new cjs.Graphics().p("AmhDxIAAnhINDAAIAAHhg");
	var mask_1_graphics_991 = new cjs.Graphics().p("Am/DxIAAnhIN/AAIAAHhg");
	var mask_1_graphics_992 = new cjs.Graphics().p("AndDxIAAnhIO7AAIAAHhg");
	var mask_1_graphics_993 = new cjs.Graphics().p("An7DxIAAnhIP3AAIAAHhg");
	var mask_1_graphics_994 = new cjs.Graphics().p("AoaDxIAAnhIQ1AAIAAHhg");
	var mask_1_graphics_995 = new cjs.Graphics().p("Ao4DxIAAnhIRxAAIAAHhg");
	var mask_1_graphics_996 = new cjs.Graphics().p("ApWDxIAAnhIStAAIAAHhg");
	var mask_1_graphics_997 = new cjs.Graphics().p("Ap0DxIAAnhITpAAIAAHhg");
	var mask_1_graphics_998 = new cjs.Graphics().p("AqSDxIAAnhIUlAAIAAHhg");
	var mask_1_graphics_999 = new cjs.Graphics().p("AqxDxIAAnhIViAAIAAHhg");
	var mask_1_graphics_1000 = new cjs.Graphics().p("ArPDxIAAnhIWfAAIAAHhg");
	var mask_1_graphics_1001 = new cjs.Graphics().p("ArtDxIAAnhIXbAAIAAHhg");
	var mask_1_graphics_1002 = new cjs.Graphics().p("AsLDxIAAnhIYXAAIAAHhg");
	var mask_1_graphics_1003 = new cjs.Graphics().p("AspDxIAAnhIZTAAIAAHhg");
	var mask_1_graphics_1004 = new cjs.Graphics().p("AtIDxIAAnhIaRAAIAAHhg");
	var mask_1_graphics_1005 = new cjs.Graphics().p("AtmDxIAAnhIbNAAIAAHhg");
	var mask_1_graphics_1006 = new cjs.Graphics().p("AuEDxIAAnhIcJAAIAAHhg");
	var mask_1_graphics_1007 = new cjs.Graphics().p("AuiDxIAAnhIdFAAIAAHhg");
	var mask_1_graphics_1008 = new cjs.Graphics().p("AvADxIAAnhIeBAAIAAHhg");
	var mask_1_graphics_1009 = new cjs.Graphics().p("AvfDxIAAnhIe+AAIAAHhg");
	var mask_1_graphics_1010 = new cjs.Graphics().p("Av9DxIAAnhIf7AAIAAHhg");
	var mask_1_graphics_1011 = new cjs.Graphics().p("AwbDxIAAnhMAg3AAAIAAHhg");
	var mask_1_graphics_1012 = new cjs.Graphics().p("Aw5DxIAAnhMAhzAAAIAAHhg");
	var mask_1_graphics_1013 = new cjs.Graphics().p("AxYDxIAAnhMAiwAAAIAAHhg");
	var mask_1_graphics_1014 = new cjs.Graphics().p("Ax2DxIAAnhMAjtAAAIAAHhg");
	var mask_1_graphics_1015 = new cjs.Graphics().p("AyUDxIAAnhMAkpAAAIAAHhg");
	var mask_1_graphics_1016 = new cjs.Graphics().p("AyyDxIAAnhMAllAAAIAAHhg");
	var mask_1_graphics_1017 = new cjs.Graphics().p("AzRDxIAAnhMAmjAAAIAAHhg");
	var mask_1_graphics_1018 = new cjs.Graphics().p("AzvDxIAAnhMAneAAAIAAHhg");
	var mask_1_graphics_1019 = new cjs.Graphics().p("A0NDxIAAnhMAobAAAIAAHhg");
	var mask_1_graphics_1020 = new cjs.Graphics().p("A0rDxIAAnhMApXAAAIAAHhg");
	var mask_1_graphics_1021 = new cjs.Graphics().p("A1JDxIAAnhMAqTAAAIAAHhg");
	var mask_1_graphics_1022 = new cjs.Graphics().p("A1oDxIAAnhMArQAAAIAAHhg");
	var mask_1_graphics_1023 = new cjs.Graphics().p("A2GDxIAAnhMAsNAAAIAAHhg");
	var mask_1_graphics_1024 = new cjs.Graphics().p("A2kDxIAAnhMAtJAAAIAAHhg");
	var mask_1_graphics_1025 = new cjs.Graphics().p("A3CDxIAAnhMAuFAAAIAAHhg");
	var mask_1_graphics_1026 = new cjs.Graphics().p("A3gDxIAAnhMAvBAAAIAAHhg");
	var mask_1_graphics_1027 = new cjs.Graphics().p("A3/DxIAAnhMAv/AAAIAAHhg");
	var mask_1_graphics_1028 = new cjs.Graphics().p("A4dDxIAAnhMAw7AAAIAAHhg");
	var mask_1_graphics_1029 = new cjs.Graphics().p("A47DxIAAnhMAx3AAAIAAHhg");
	var mask_1_graphics_1030 = new cjs.Graphics().p("A5ZDxIAAnhMAyzAAAIAAHhg");
	var mask_1_graphics_1031 = new cjs.Graphics().p("A53DxIAAnhMAzvAAAIAAHhg");
	var mask_1_graphics_1032 = new cjs.Graphics().p("A6WDxIAAnhMA0sAAAIAAHhg");
	var mask_1_graphics_1033 = new cjs.Graphics().p("A60DxIAAnhMA1pAAAIAAHhg");
	var mask_1_graphics_1034 = new cjs.Graphics().p("A7SDxIAAnhMA2lAAAIAAHhg");
	var mask_1_graphics_1035 = new cjs.Graphics().p("A7wDxIAAnhMA3hAAAIAAHhg");
	var mask_1_graphics_1036 = new cjs.Graphics().p("A8ODxIAAnhMA4dAAAIAAHhg");
	var mask_1_graphics_1037 = new cjs.Graphics().p("A8tDxIAAnhMA5bAAAIAAHhg");
	var mask_1_graphics_1038 = new cjs.Graphics().p("A9LDxIAAnhMA6XAAAIAAHhg");
	var mask_1_graphics_1039 = new cjs.Graphics().p("A9pDxIAAnhMA7TAAAIAAHhg");
	var mask_1_graphics_1040 = new cjs.Graphics().p("A+HDxIAAnhMA8PAAAIAAHhg");
	var mask_1_graphics_1041 = new cjs.Graphics().p("A+lDxIAAnhMA9LAAAIAAHhg");
	var mask_1_graphics_1042 = new cjs.Graphics().p("A/EDxIAAnhMA+IAAAIAAHhg");
	var mask_1_graphics_1043 = new cjs.Graphics().p("A/iDxIAAnhMA/FAAAIAAHhg");
	var mask_1_graphics_1044 = new cjs.Graphics().p("EggAADxIAAnhMBABAAAIAAHhg");
	var mask_1_graphics_1045 = new cjs.Graphics().p("EggeADxIAAnhMBA9AAAIAAHhg");
	var mask_1_graphics_1046 = new cjs.Graphics().p("Egg8ADxIAAnhMBB5AAAIAAHhg");
	var mask_1_graphics_1047 = new cjs.Graphics().p("EghbADxIAAnhMBC3AAAIAAHhg");
	var mask_1_graphics_1048 = new cjs.Graphics().p("Egh5ADxIAAnhMBDzAAAIAAHhg");
	var mask_1_graphics_1049 = new cjs.Graphics().p("EgiXADxIAAnhMBEvAAAIAAHhg");
	var mask_1_graphics_1050 = new cjs.Graphics().p("Egi1ADxIAAnhMBFrAAAIAAHhg");
	var mask_1_graphics_1051 = new cjs.Graphics().p("EgjTADxIAAnhMBGnAAAIAAHhg");
	var mask_1_graphics_1052 = new cjs.Graphics().p("ALOO8IAAnhMBHlAAAIAAHhg");
	var mask_1_graphics_1138 = new cjs.Graphics().p("ALOO8IAAnhMBHlAAAIAAHhg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(979).to({graphics:mask_1_graphics_979,x:309.375,y:95.575}).wait(1).to({graphics:mask_1_graphics_980,x:613.225,y:167.1}).wait(1).to({graphics:mask_1_graphics_981,x:616.25,y:167.1}).wait(1).to({graphics:mask_1_graphics_982,x:619.25,y:167.1}).wait(1).to({graphics:mask_1_graphics_983,x:622.275,y:167.1}).wait(1).to({graphics:mask_1_graphics_984,x:625.3,y:167.1}).wait(1).to({graphics:mask_1_graphics_985,x:628.325,y:167.1}).wait(1).to({graphics:mask_1_graphics_986,x:631.35,y:167.1}).wait(1).to({graphics:mask_1_graphics_987,x:634.35,y:167.1}).wait(1).to({graphics:mask_1_graphics_988,x:637.375,y:167.1}).wait(1).to({graphics:mask_1_graphics_989,x:640.4,y:167.1}).wait(1).to({graphics:mask_1_graphics_990,x:643.425,y:167.1}).wait(1).to({graphics:mask_1_graphics_991,x:646.45,y:167.1}).wait(1).to({graphics:mask_1_graphics_992,x:649.475,y:167.1}).wait(1).to({graphics:mask_1_graphics_993,x:652.475,y:167.1}).wait(1).to({graphics:mask_1_graphics_994,x:655.5,y:167.1}).wait(1).to({graphics:mask_1_graphics_995,x:658.525,y:167.1}).wait(1).to({graphics:mask_1_graphics_996,x:661.55,y:167.1}).wait(1).to({graphics:mask_1_graphics_997,x:664.575,y:167.1}).wait(1).to({graphics:mask_1_graphics_998,x:667.575,y:167.1}).wait(1).to({graphics:mask_1_graphics_999,x:670.6,y:167.1}).wait(1).to({graphics:mask_1_graphics_1000,x:673.625,y:167.1}).wait(1).to({graphics:mask_1_graphics_1001,x:676.65,y:167.1}).wait(1).to({graphics:mask_1_graphics_1002,x:679.675,y:167.1}).wait(1).to({graphics:mask_1_graphics_1003,x:682.675,y:167.1}).wait(1).to({graphics:mask_1_graphics_1004,x:685.7,y:167.1}).wait(1).to({graphics:mask_1_graphics_1005,x:688.725,y:167.1}).wait(1).to({graphics:mask_1_graphics_1006,x:691.75,y:167.1}).wait(1).to({graphics:mask_1_graphics_1007,x:694.775,y:167.1}).wait(1).to({graphics:mask_1_graphics_1008,x:697.775,y:167.1}).wait(1).to({graphics:mask_1_graphics_1009,x:700.8,y:167.1}).wait(1).to({graphics:mask_1_graphics_1010,x:703.825,y:167.1}).wait(1).to({graphics:mask_1_graphics_1011,x:706.85,y:167.1}).wait(1).to({graphics:mask_1_graphics_1012,x:709.875,y:167.1}).wait(1).to({graphics:mask_1_graphics_1013,x:712.9,y:167.1}).wait(1).to({graphics:mask_1_graphics_1014,x:715.9,y:167.1}).wait(1).to({graphics:mask_1_graphics_1015,x:718.925,y:167.1}).wait(1).to({graphics:mask_1_graphics_1016,x:721.925,y:167.1}).wait(1).to({graphics:mask_1_graphics_1017,x:724.95,y:167.1}).wait(1).to({graphics:mask_1_graphics_1018,x:727.95,y:167.1}).wait(1).to({graphics:mask_1_graphics_1019,x:730.975,y:167.1}).wait(1).to({graphics:mask_1_graphics_1020,x:734,y:167.1}).wait(1).to({graphics:mask_1_graphics_1021,x:737.025,y:167.1}).wait(1).to({graphics:mask_1_graphics_1022,x:740.05,y:167.1}).wait(1).to({graphics:mask_1_graphics_1023,x:743.075,y:167.1}).wait(1).to({graphics:mask_1_graphics_1024,x:746.075,y:167.1}).wait(1).to({graphics:mask_1_graphics_1025,x:749.1,y:167.1}).wait(1).to({graphics:mask_1_graphics_1026,x:752.125,y:167.1}).wait(1).to({graphics:mask_1_graphics_1027,x:755.15,y:167.1}).wait(1).to({graphics:mask_1_graphics_1028,x:758.175,y:167.1}).wait(1).to({graphics:mask_1_graphics_1029,x:761.175,y:167.1}).wait(1).to({graphics:mask_1_graphics_1030,x:764.2,y:167.1}).wait(1).to({graphics:mask_1_graphics_1031,x:767.225,y:167.1}).wait(1).to({graphics:mask_1_graphics_1032,x:770.25,y:167.1}).wait(1).to({graphics:mask_1_graphics_1033,x:773.275,y:167.1}).wait(1).to({graphics:mask_1_graphics_1034,x:776.275,y:167.1}).wait(1).to({graphics:mask_1_graphics_1035,x:779.3,y:167.1}).wait(1).to({graphics:mask_1_graphics_1036,x:782.325,y:167.1}).wait(1).to({graphics:mask_1_graphics_1037,x:785.35,y:167.1}).wait(1).to({graphics:mask_1_graphics_1038,x:788.375,y:167.1}).wait(1).to({graphics:mask_1_graphics_1039,x:791.375,y:167.1}).wait(1).to({graphics:mask_1_graphics_1040,x:794.4,y:167.1}).wait(1).to({graphics:mask_1_graphics_1041,x:797.425,y:167.1}).wait(1).to({graphics:mask_1_graphics_1042,x:800.45,y:167.1}).wait(1).to({graphics:mask_1_graphics_1043,x:803.475,y:167.1}).wait(1).to({graphics:mask_1_graphics_1044,x:806.5,y:167.1}).wait(1).to({graphics:mask_1_graphics_1045,x:809.5,y:167.1}).wait(1).to({graphics:mask_1_graphics_1046,x:812.525,y:167.1}).wait(1).to({graphics:mask_1_graphics_1047,x:815.55,y:167.1}).wait(1).to({graphics:mask_1_graphics_1048,x:818.575,y:167.1}).wait(1).to({graphics:mask_1_graphics_1049,x:821.6,y:167.1}).wait(1).to({graphics:mask_1_graphics_1050,x:824.6,y:167.1}).wait(1).to({graphics:mask_1_graphics_1051,x:827.625,y:167.1}).wait(1).to({graphics:mask_1_graphics_1052,x:529.8513,y:95.575}).wait(86).to({graphics:mask_1_graphics_1138,x:529.8513,y:95.575}).wait(1).to({graphics:null,x:0,y:0}).wait(15));

	// 图层_21
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("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AgKAFQgLAGgEAOQgEANAAAYQAAAXAFAOQAEAOAKAFQALAGARAAQASAAALgGgANQlvQgRgHgJgTQgJgSAAggQAAggAJgTQAJgSARgIQAQgHAYAAQAOAAALACQAKABAHADIAAAYIgTgGQgKgBgNAAQgRAAgLAFQgKAFgEAOQgFANAAAZQgBAWAGAOQAEANAKAGQALAGASgBQAMAAALgCQAKgBAJgDIAAAXIgLADIgQACIgQABQgYAAgQgIgAJjlnQgYAAgQgMQgQgNgIgaIgDgNIAAgLIAAgJQAAgZAKgTQAKgTAVgNIAQgFQAIgCAHgBIADAAQAcABASAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIACAfIADAbIgBAAIgZAAQgBAAAAgHIgDgTIgGAJIgGAHQgIAGgJADQgIADgLAAgAJQnvQgNAKgHARIgDAMIgBANIAAAGQAAARAGAMQAHANALAJIALAFIALABIAFAAQAvAAAAg5IAAgLQgBgWgHgPQgJgOgQgEIgFgBIgEAAIgBAAQgSAAgNAJgACLlvQgRgHgJgTQgIgSgBggQABggAIgTQAJgSARgIQARgHAYAAQAXAAARAHQARAIAJASQAJATAAAgQAAAggJASQgJATgRAHQgRAIgXAAQgYAAgRgIgADRmDQAJgFAFgOQAEgOAAgXQAAgYgFgNQgEgOgKgGQgLgFgRAAQgTAAgKAFQgKAGgEAOQgFANAAAYQAAAXAFAOQAFAOAJAFQALAGASAAQASAAALgGgAjSlnQgYAAgQgMQgQgNgIgaIgCgNIgBgLIAAgJQAAgZAKgTQAKgTAVgNIAQgFQAIgCAIgBIACAAQAbABATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAfIAFAbIgCAAIgYAAQgBAAgBgHIgEgTIgFAJIgGAHQgHAGgKADQgIADgLAAgAjlnvQgMAKgIARIgDAMIgBANIAAAGQAAARAGAMQAGANAMAJIALAFIALABIAFAAQAuAAAAg5IAAgLQABgWgJgPQgHgOgQgEIgGgBIgEAAIgBAAQgSAAgNAJgAmYlvQgQgHgJgTQgJgSAAggQAAggAJgTQAIgSARgIQAQgHAYAAQAVAAAMAGQANAGAHAKQAGAKADAMQACAMABAMIgBAIIgBALIhuAHQAAARAFALQAFAMAMAGQALAFATAAQAOAAANgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgKABgMAAQgYAAgRgIgAmNn0QgJAHgEAMQgEAMgBARIBWgHQAAgMgCgLQgDgLgJgGQgIgGgRAAQgSAAgLAFgAualuQgMgHgEgMQgFgLAAgQIAAhwIAaAAIAABmQgBANADAJQACAJAIAEQAGAFANAAQALAAAIgCQAJgCAIgHQAHgHAFgOIAAhuIAZAAIAACiIgVAAIgEgYQgEALgJAGQgIAGgKACQgJACgKAAQgWAAgMgHgAxPlvQgQgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAYAAQAYAAARAHQARAIAIASQAJATAAAgQAAAggJASQgIATgRAHQgRAIgYAAQgYAAgRgIgAwJmDQAKgFAEgOQAFgOAAgXQgBgYgEgNQgFgOgKgGQgKgFgSAAQgSAAgKAFQgKAGgFAOQgEANAAAYQAAAXAFAOQAEAOAKAFQALAGARAAQASAAALgGgA3zlvQgQgHgKgTQgIgSgBggQABggAIgTQAKgSAQgIQARgHAYAAQAYAAAQAHQARAIAIASQAKATgBAgQABAggKASQgIATgRAHQgQAIgYAAQgYAAgRgIgA2umDQALgFAEgOQAEgOAAgXQAAgYgEgNQgFgOgKgGQgLgFgRAAQgTAAgJAFQgLAGgFAOQgEANABAYQgBAXAFAOQAEAOALAFQAKAGASAAQASAAAKgGgA66lyQgOgKgGgTQgGgTAAgZQAAgWAGgUQAGgSAOgMQAPgMAbAAQAXAAAMAIQANAJAEAPIAAhfIAaAAIAADkIgWAAIgEgaQgEANgNAHQgOAJgVAAQgbAAgPgLgA6qnwQgJAJgCAOQgDAOAAAQQAAARADAOQADAOAJAJQAJAIATAAQAUAAALgHQAKgIAFgOQAEgNAAgUQAAgTgEgOQgFgOgKgHQgLgJgUABQgTAAgKAJgEggDgFnQgYAAgQgMQgQgNgIgaIgDgNIAAgLIAAgJQAAgZAKgTQALgTAUgNIAQgFQAIgCAHgBIADAAQAcABASAdIAAgHIAAgBIABAAIAYAAIABAAIABABIAABVIABAfIADAbIgBAAIgZAAQgBAAgBgHIgCgTIgGAJIgGAHQgIAGgIADQgJADgLAAgEggWgHvQgNAKgHARIgDAMIgBANIAAAGQAAARAGAMQAGANANAJIAKAFIALABIAGAAQAuAAAAg5IAAgLQgBgWgHgPQgJgOgQgEIgFgBIgEAAIgBAAQgSAAgNAJgEAlggFrQgEgEAAgMQAAgMAEgEQAFgDAKAAQALAAAEADQAEAEAAAMQAAAMgEAEQgEADgLAAQgKAAgFgDgAPVlxQgKgIABgSIAAjDIAZAAIAAC8QAAANAEADQAEAEAHAAIAHAAIAGgBIAAAVIgHACIgKAAQgSAAgJgJgA9nlsQgKgEgGgLQgEgLAAgWIAAhbIgYAAIAAgVIAYAAIAAgnIAaAAIAAAnIAoAAIAAAVIgoAAIAABaQAAAMACAHQABAHAGACQAEADAKAAIAJAAIAJgCIAAAXIgJABIgKAAQgRAAgLgEgAGWlqIAAhnQAAgMgDgJQgCgIgHgGQgHgEgNAAQgKAAgJACQgKADgHAGQgIAIgEAOIAABtIgaAAIAAiiIAaAAIAAAXQAEgKAJgGQAJgFAJgDQALgCAKAAQAUAAAMAHQAMAGAFAMQAFANAAAPIAABwgAhMlqIAAiiIAbAAIAAAdQAFgNAIgHQAJgHAKgCQAKgDAIAAIADAAIgBAXIgDAAQgKAAgKADQgJADgIAIQgIAIgEAOIAABqgAoflqIgoiFIgCAAIgpCFIggAAIgriiIAZAAIAiCIIACAAIApiIIAeAAIAqCIIABAAIAjiIIAZAAIgtCigEgiDgFqIAAhnQAAgMgDgJQgCgIgHgGQgGgEgNAAQgLAAgJACQgKADgHAGQgIAIgFAOIAABtIgZAAIAAjkIAZAAIAABZQAGgKAIgGQAIgFAKgDQAKgCAKAAQAWAAAMAHQALAGAFAMQAFANgBAPIAABwgEglkgFqIgqiaIgDAAIgqCaIgiAAIgxjQIAcAAIAnCwIACAAIAqiYIAgAAIArCYIABAAIAniwIAcAAIgyDQgEAljgGmIAAgNQAAgLAFgKQAGgKAQgMIAOgNQAFgGACgGQABgGAAgJQAAgMgDgHQgEgHgJgCQgHgDgPAAIgXACQgMACgJADIAAgYIATgEQALgDAQAAQAVAAAPAFQAOAFAHALQAHALAAAVQAAAQgDAKQgEAJgHAIQgGAGgKAHQgJAGgFAFQgFAGgCAFQgCAFAAAGIAAAJgAbusgQAOAAAJgEQAJgEAGgJQAGgIAEgNIhBihIAcAAIAxCGIACAAIAviGIAaAAIg6CcQgHAUgJAPQgJAOgOAJQgPAHgXABgAUpsJIAAjeIAaAAIAAAcQAFgOAMgIQAMgJAXAAQAbAAAPALQAPAKAGASQAEATABAaQgBAWgEATQgGATgPAMQgPALgbAAQgXAAgMgIQgNgJgEgOIAABZgAVWvNQgLAHgEAOQgGAOABAUQgBASAGAOQAEAOALAIQALAIATAAQAUgBAJgIQAJgKADgOQADgOgBgPQABgSgEgOQgCgOgKgIQgJgJgTAAQgTAAgLAIgA7+sLIgTgDIAAgVIAUACIAUABQAaABANgMQANgNABgcIAAgQQgFAOgMAIQgMAJgYAAQgaAAgPgLQgPgKgGgSQgFgTAAgZQAAgWAFgUQAGgSAPgLQAPgLAaAAQARgBAKAFQAKAEAHAHQAGAIADAKIAAgeIAaAAIAACWQAAAigTASQgUAUgpAAIgUgCgA8CvMQgJAJgDANQgCAOAAAQQAAARADAOQADAOAIAIQAKAHATABQATAAALgHQALgIAEgNQAFgNAAgUQAAgSgFgPQgEgNgLgHQgLgIgTAAQgUABgJAIgAZvtDQgZAAgQgMQgPgNgJgZIgCgNIgBgLIAAgKQAAgZAKgTQALgSAVgOIAPgFQAIgCAIAAIACAAQAcAAATAdIAAgHIAAgBIABAAIAXAAIABAAIABABIAABWIABAeIAEAbIgBAAIgZAAQgBAAgBgGIgDgTIgGAIIgGAIQgHAFgJAEQgJACgKAAgAZbvKQgMAJgIASIgCAMIgBAMIAAAHQAAAQAFANQAHANAMAJIALAEIALABIAFAAQAuAAAAg4IAAgLQAAgXgIgOQgIgOgQgFIgGAAIgEAAIAAAAQgSAAgOAJgAQutOQgPgKgFgSQgGgUABgYQgBgXAGgTQAFgTAPgLQAPgMAaAAQAYgBAMAJQAMAIAFAPIAAheIAaAAIAADkIgWAAIgEgbQgEANgOAIQgMAIgXAAQgaABgPgMgAQ+vMQgIAJgDAPQgDAOAAAQQAAAQADAOQADAPAJAIQAKAJATAAQASAAAMgIQALgHAEgOQAEgOAAgTQAAgUgEgNQgEgOgLgIQgMgIgSAAQgUAAgKAJgALdtDQgYAAgPgMQgRgNgHgZIgDgNIAAgLIAAgKQAAgZAKgTQAKgSAUgOIAQgFQAJgCAHAAIACAAQAcAAASAdIAAgHIAAgBIABAAIAZAAIAAAAIABABIAABWIABAeIAEAbIgCAAIgYAAQgBAAgBgGIgDgTIgFAIIgGAIQgIAFgJAEQgJACgKAAgALLvKQgNAJgHASIgEAMIgBAMIAAAHQABAQAFANQAHANAMAJIAKAEIALABIAGAAQAuAAAAg4IAAgLQAAgXgIgOQgIgOgQgFIgGAAIgDAAIgCAAQgRAAgNAJgAECtKQgMgGgEgMQgFgLAAgRIAAhvIAaAAIAABmQgBANADAJQADAIAGAFQAIAFAMAAQALAAAIgDQAJgBAIgIQAHgGAFgPIAAhtIAZAAIAACiIgVAAIgDgYQgGALgIAFQgIAGgKACQgJACgLAAQgVABgMgIgAhwtKQgRgIgJgSQgIgSgBggQABggAIgTQAJgTARgHQARgIAYABQAXgBARAIQARAHAJATQAIATAAAgQAAAggIASQgJASgRAIQgRAHgXAAQgYAAgRgHgAgqteQAJgGAFgOQAEgNAAgXQAAgYgFgNQgEgOgKgGQgLgGgRAAQgTAAgKAGQgKAGgEAOQgFANAAAYQAAAXAFANQAFAOAJAGQALAGASAAQASAAALgGgAnQtKQgQgIgJgSQgJgSAAggQAAggAJgTQAIgTARgHQARgIAXABQAUAAANAFQANAHAHAJQAGALADALQADAMAAAMIgBAIIgBALIhuAHQAAASAFALQAFAMAMAFQAKAGAUAAQAOAAANgEQAOgCAKgFIAAAYQgFADgJACIgTADQgKACgMgBQgYAAgRgHgAnFvPQgKAHgDAMQgFAMAAAQIBWgHQABgMgEgKQgCgLgJgGQgIgHgRAAQgTAAgKAGgAqWtOQgPgKgFgSQgHgUABgYQgBgXAHgTQAFgTAPgLQAOgMAbAAQAYgBALAJQANAIAEAPIAAheIAaAAIAADkIgVAAIgFgbQgEANgNAIQgNAIgWAAQgbABgOgMgAqGvMQgJAJgDAPQgCAOgBAQQAAAQADAOQAEAPAJAIQAJAJATAAQATAAALgIQALgHAEgOQAEgOAAgTQAAgUgEgNQgEgOgLgIQgLgIgTAAQgTAAgKAJgAyPtKQgMgGgFgMQgFgLAAgRIAAhvIAaAAIAABmQAAANACAJQACAIAIAFQAGAFANAAQAKAAAKgDQAJgBAHgIQAHgGAFgPIAAhtIAaAAIAACiIgWAAIgEgYQgEALgJAFQgIAGgKACQgKACgKAAQgUABgMgIgA1EtKQgRgIgJgSQgJgSAAggQAAggAJgTQAJgTARgHQAQgIAYABQAYgBARAIQAQAHAJATQAJATAAAgQAAAggJASQgJASgQAIQgRAHgYAAQgYAAgQgHgAz/teQAKgGAFgOQADgNAAgXQABgYgFgNQgEgOgLgGQgKgGgSAAQgSAAgKAGQgLAGgEAOQgEANAAAYQAAAXAEANQAFAOAKAGQALAGARAAQASAAALgGgA5LtKQgRgIgIgSQgJgSAAggQAAggAJgTQAIgTARgHQARgIAXABQAYgBASAIQAQAHAIATQAJATAAAgQAAAggJASQgIASgQAIQgSAHgYAAQgXAAgRgHgA4GteQALgGAEgOQAEgNAAgXQAAgYgEgNQgFgOgLgGQgKgGgSAAQgRAAgKAGQgLAGgFAOQgEANABAYQgBAXAFANQAEAOALAGQALAGAQAAQATAAAKgGgEglKgNKQgQgIgKgSQgIgSgBggQABggAIgTQAJgTAQgHQARgIAYABQAUAAAMAFQANAHAIAJQAGALADALQACAMAAAMIAAAIIgBALIhvAHQABASAEALQAFAMAMAFQALAGATAAQAOAAAOgEQANgCALgFIAAAYQgGADgIACIgTADQgKACgMgBQgYAAgRgHgEgk/gPPQgKAHgEAMQgEAMgBAQIBXgHQAAgMgDgKQgCgLgJgGQgJgHgQAAQgTAAgKAGgAeatFQgEgBgCgFQgCgDAAgJQAAgLAEgFQAFgDAKABQALgBAEADQAFAFgBALQAAAJgCADQgBAFgFABQgEACgHgBQgHABgEgCgAXxtMQgKgIABgSIAAjDIAZAAIAAC8QAAAMAEAEQADAEAIAAIAHAAIAGgBIAAAVIgHABIgKAAQgSAAgJgIgAjZtHQgKgFgFgLQgEgLgBgVIAAhbIgXAAIAAgVIAXAAIAAgnIAaAAIAAAnIApAAIAAAVIgpAAIAABZQAAANACAHQABAGAGADQAFADAKAAIAJAAIAJgCIAAAWIgJABIgKAAQgRAAgMgDgAtztFIgQgBIgOgDIAAgWIAPADIARADIAPABQATgBAJgFQAKgGAAgOQAAgJgDgGQgDgFgHgDQgIgEgPgDQgSgEgKgFQgKgHgEgIQgEgJAAgOQAAgTAPgMQAPgMAdAAQAMAAALABQALABAGADIgCAWQgGgDgLgCQgKgBgLAAQgRgBgJAFQgJAGAAANQABAIACAFQADAEAGADQAHADANACQASAFAMAFQAKAGAGAJQAEAKAAAQQAAAXgQAMQgPALgfAAIgRgBgAvXtHQgKgFgFgLQgEgLgBgVIAAhbIgYAAIAAgVIAYAAIAAgnIAaAAIAAAnIAoAAIAAAVIgoAAIAABZQAAANACAHQACAGAFADQAFADAKAAIAJAAIAJgCIAAAWIgJABIgKAAQgRAAgMgDgA/rtFIgRgBIgNgDIAAgWIAOADIARADIAQABQASgBAKgFQAJgGAAgOQAAgJgCgGQgDgFgHgDQgJgEgPgDQgRgEgLgFQgKgHgDgIQgFgJABgOQAAgTAPgMQAOgMAdAAQAMAAALABQALABAHADIgCAWQgHgDgKgCQgKgBgLAAQgRgBgJAFQgJAGAAANQAAAIACAFQADAEAHADQAGADANACQASAFAMAFQALAGAFAJQAFAKAAAQQgBAXgPAMQgQALgeAAIgRgBgEgiggNHQgKgFgGgLQgEgLAAgVIAAhbIgYAAIAAgVIAYAAIAAgnIAaAAIAAAnIAoAAIAAAVIgoAAIAABZQgBANACAHQACAGAGADQAEADAKAAIAJAAIAJgCIAAAWIgJABIgKAAQgRAAgLgDgAPOtFIAAhnQAAgMgCgKQgDgIgGgFQgHgEgNgBQgKAAgKACQgJADgIAHQgHAHgFAOIAABuIgaAAIAAiiIAaAAIAAAWQAFgJAIgGQAJgGAKgCQAKgCAKAAQAVAAAMAGQAMAHAEAMQAGAMgBAPIAABxgAIQtFIAAhnQABgMgDgKQgDgIgHgFQgGgEgNgBQgKAAgJACQgKADgHAHQgJAHgEAOIAABuIgaAAIAAiiIAaAAIAAAWQAFgJAJgGQAIgGAKgCQAKgCAKAAQAVAAAMAGQALAHAGAMQAEAMAAAPIAABxgAB8tFIAAiiIAaAAIAAAdQAGgOAIgGQAIgHALgDQAKgCAJAAIADAAIgBAXIgDAAQgLAAgJADQgKACgIAJQgIAHgFAOIAABrgAr4tFIAAiiIAaAAIAACigEgn6gNFIAAjQIAbAAIAAC3IBaAAIAAAZgEghYgPdIAIgZQAEgNACgOQACgNABgLIAZAAQAAAKgEAOQgDANgFAOQgFAOgGALgAr2wIQgEgDABgJQgBgLAEgCQADgDAJAAQAIAAAEADQADACAAALQAAAJgDADQgEADgIAAQgJAAgDgDg");
	this.shape_1.setTransform(880.75,121.55);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(979).to({_off:false},0).wait(159).to({_off:true},1).wait(15));

	// 图层_10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_855 = new cjs.Graphics().p("EAtfALDIAAnhICrAAIAAHhg");
	var mask_2_graphics_856 = new cjs.Graphics().p("AhwDxIAAnhIDhAAIAAHhg");
	var mask_2_graphics_857 = new cjs.Graphics().p("AiMDxIAAnhIEZAAIAAHhg");
	var mask_2_graphics_858 = new cjs.Graphics().p("AioDxIAAnhIFRAAIAAHhg");
	var mask_2_graphics_859 = new cjs.Graphics().p("AjEDxIAAnhIGJAAIAAHhg");
	var mask_2_graphics_860 = new cjs.Graphics().p("AjgDxIAAnhIHBAAIAAHhg");
	var mask_2_graphics_861 = new cjs.Graphics().p("Aj8DxIAAnhIH5AAIAAHhg");
	var mask_2_graphics_862 = new cjs.Graphics().p("AkXDxIAAnhIIvAAIAAHhg");
	var mask_2_graphics_863 = new cjs.Graphics().p("AkzDxIAAnhIJnAAIAAHhg");
	var mask_2_graphics_864 = new cjs.Graphics().p("AlPDxIAAnhIKfAAIAAHhg");
	var mask_2_graphics_865 = new cjs.Graphics().p("AlrDxIAAnhILXAAIAAHhg");
	var mask_2_graphics_866 = new cjs.Graphics().p("AmHDxIAAnhIMPAAIAAHhg");
	var mask_2_graphics_867 = new cjs.Graphics().p("AmjDxIAAnhINHAAIAAHhg");
	var mask_2_graphics_868 = new cjs.Graphics().p("Am/DxIAAnhIN/AAIAAHhg");
	var mask_2_graphics_869 = new cjs.Graphics().p("AnaDxIAAnhIO1AAIAAHhg");
	var mask_2_graphics_870 = new cjs.Graphics().p("An2DxIAAnhIPuAAIAAHhg");
	var mask_2_graphics_871 = new cjs.Graphics().p("AoSDxIAAnhIQlAAIAAHhg");
	var mask_2_graphics_872 = new cjs.Graphics().p("AouDxIAAnhIRdAAIAAHhg");
	var mask_2_graphics_873 = new cjs.Graphics().p("ApKDxIAAnhISVAAIAAHhg");
	var mask_2_graphics_874 = new cjs.Graphics().p("ApmDxIAAnhITNAAIAAHhg");
	var mask_2_graphics_875 = new cjs.Graphics().p("AqCDxIAAnhIUFAAIAAHhg");
	var mask_2_graphics_876 = new cjs.Graphics().p("AqeDxIAAnhIU9AAIAAHhg");
	var mask_2_graphics_877 = new cjs.Graphics().p("Aq5DxIAAnhIVzAAIAAHhg");
	var mask_2_graphics_878 = new cjs.Graphics().p("ArVDxIAAnhIWrAAIAAHhg");
	var mask_2_graphics_879 = new cjs.Graphics().p("ArxDxIAAnhIXjAAIAAHhg");
	var mask_2_graphics_880 = new cjs.Graphics().p("AsNDxIAAnhIYbAAIAAHhg");
	var mask_2_graphics_881 = new cjs.Graphics().p("AspDxIAAnhIZTAAIAAHhg");
	var mask_2_graphics_882 = new cjs.Graphics().p("AtFDxIAAnhIaLAAIAAHhg");
	var mask_2_graphics_883 = new cjs.Graphics().p("AthDxIAAnhIbDAAIAAHhg");
	var mask_2_graphics_884 = new cjs.Graphics().p("At8DxIAAnhIb5AAIAAHhg");
	var mask_2_graphics_885 = new cjs.Graphics().p("AuYDxIAAnhIcyAAIAAHhg");
	var mask_2_graphics_886 = new cjs.Graphics().p("Au0DxIAAnhIdpAAIAAHhg");
	var mask_2_graphics_887 = new cjs.Graphics().p("AvQDxIAAnhIehAAIAAHhg");
	var mask_2_graphics_888 = new cjs.Graphics().p("AvsDxIAAnhIfZAAIAAHhg");
	var mask_2_graphics_889 = new cjs.Graphics().p("AwIDxIAAnhMAgRAAAIAAHhg");
	var mask_2_graphics_890 = new cjs.Graphics().p("AwkDxIAAnhMAhJAAAIAAHhg");
	var mask_2_graphics_891 = new cjs.Graphics().p("AxADxIAAnhMAiBAAAIAAHhg");
	var mask_2_graphics_892 = new cjs.Graphics().p("AxbDxIAAnhMAi4AAAIAAHhg");
	var mask_2_graphics_893 = new cjs.Graphics().p("Ax3DxIAAnhMAjvAAAIAAHhg");
	var mask_2_graphics_894 = new cjs.Graphics().p("AyTDxIAAnhMAknAAAIAAHhg");
	var mask_2_graphics_895 = new cjs.Graphics().p("AyvDxIAAnhMAlfAAAIAAHhg");
	var mask_2_graphics_896 = new cjs.Graphics().p("AzLDxIAAnhMAmXAAAIAAHhg");
	var mask_2_graphics_897 = new cjs.Graphics().p("AzLDxIAAnhMAmXAAAIAAHhg");
	var mask_2_graphics_898 = new cjs.Graphics().p("AzLDxIAAnhMAmXAAAIAAHhg");
	var mask_2_graphics_899 = new cjs.Graphics().p("AzLDxIAAnhMAmXAAAIAAHhg");
	var mask_2_graphics_900 = new cjs.Graphics().p("AzLDxIAAnhMAmXAAAIAAHhg");
	var mask_2_graphics_901 = new cjs.Graphics().p("AzLDxIAAnhMAmXAAAIAAHhg");
	var mask_2_graphics_902 = new cjs.Graphics().p("AzLDxIAAnhMAmXAAAIAAHhg");
	var mask_2_graphics_903 = new cjs.Graphics().p("AzLDxIAAnhMAmXAAAIAAHhg");
	var mask_2_graphics_904 = new cjs.Graphics().p("AzLDxIAAnhMAmXAAAIAAHhg");
	var mask_2_graphics_905 = new cjs.Graphics().p("AzLDxIAAnhMAmXAAAIAAHhg");
	var mask_2_graphics_906 = new cjs.Graphics().p("AzLDxIAAnhMAmXAAAIAAHhg");
	var mask_2_graphics_907 = new cjs.Graphics().p("AzLDxIAAnhMAmXAAAIAAHhg");
	var mask_2_graphics_908 = new cjs.Graphics().p("AzLDxIAAnhMAmXAAAIAAHhg");
	var mask_2_graphics_909 = new cjs.Graphics().p("AzmDxIAAnhMAnNAAAIAAHhg");
	var mask_2_graphics_910 = new cjs.Graphics().p("A0BDxIAAnhMAoDAAAIAAHhg");
	var mask_2_graphics_911 = new cjs.Graphics().p("A0cDxIAAnhMAo5AAAIAAHhg");
	var mask_2_graphics_912 = new cjs.Graphics().p("A03DxIAAnhMApvAAAIAAHhg");
	var mask_2_graphics_913 = new cjs.Graphics().p("A1SDxIAAnhMAqlAAAIAAHhg");
	var mask_2_graphics_914 = new cjs.Graphics().p("A1tDxIAAnhMArbAAAIAAHhg");
	var mask_2_graphics_915 = new cjs.Graphics().p("A2IDxIAAnhMAsRAAAIAAHhg");
	var mask_2_graphics_916 = new cjs.Graphics().p("A2iDxIAAnhMAtGAAAIAAHhg");
	var mask_2_graphics_917 = new cjs.Graphics().p("A29DxIAAnhMAt8AAAIAAHhg");
	var mask_2_graphics_918 = new cjs.Graphics().p("A3YDxIAAnhMAuyAAAIAAHhg");
	var mask_2_graphics_919 = new cjs.Graphics().p("A3zDxIAAnhMAvoAAAIAAHhg");
	var mask_2_graphics_920 = new cjs.Graphics().p("A4ODxIAAnhMAweAAAIAAHhg");
	var mask_2_graphics_921 = new cjs.Graphics().p("A4pDxIAAnhMAxTAAAIAAHhg");
	var mask_2_graphics_922 = new cjs.Graphics().p("A5EDxIAAnhMAyJAAAIAAHhg");
	var mask_2_graphics_923 = new cjs.Graphics().p("A5fDxIAAnhMAy/AAAIAAHhg");
	var mask_2_graphics_924 = new cjs.Graphics().p("A56DxIAAnhMAz1AAAIAAHhg");
	var mask_2_graphics_925 = new cjs.Graphics().p("A6VDxIAAnhMA0rAAAIAAHhg");
	var mask_2_graphics_926 = new cjs.Graphics().p("A6wDxIAAnhMA1hAAAIAAHhg");
	var mask_2_graphics_927 = new cjs.Graphics().p("A7LDxIAAnhMA2XAAAIAAHhg");
	var mask_2_graphics_928 = new cjs.Graphics().p("A7mDxIAAnhMA3NAAAIAAHhg");
	var mask_2_graphics_929 = new cjs.Graphics().p("A8BDxIAAnhMA4DAAAIAAHhg");
	var mask_2_graphics_930 = new cjs.Graphics().p("A8cDxIAAnhMA45AAAIAAHhg");
	var mask_2_graphics_931 = new cjs.Graphics().p("A83DxIAAnhMA5vAAAIAAHhg");
	var mask_2_graphics_932 = new cjs.Graphics().p("A9SDxIAAnhMA6lAAAIAAHhg");
	var mask_2_graphics_933 = new cjs.Graphics().p("A9tDxIAAnhMA7bAAAIAAHhg");
	var mask_2_graphics_934 = new cjs.Graphics().p("A+IDxIAAnhMA8RAAAIAAHhg");
	var mask_2_graphics_935 = new cjs.Graphics().p("A+jDxIAAnhMA9HAAAIAAHhg");
	var mask_2_graphics_936 = new cjs.Graphics().p("A+9DxIAAnhMA97AAAIAAHhg");
	var mask_2_graphics_937 = new cjs.Graphics().p("A/YDxIAAnhMA+xAAAIAAHhg");
	var mask_2_graphics_938 = new cjs.Graphics().p("A/zDxIAAnhMA/nAAAIAAHhg");
	var mask_2_graphics_939 = new cjs.Graphics().p("EggOADxIAAnhMBAdAAAIAAHhg");
	var mask_2_graphics_940 = new cjs.Graphics().p("EggpADxIAAnhMBBTAAAIAAHhg");
	var mask_2_graphics_941 = new cjs.Graphics().p("EghEADxIAAnhMBCJAAAIAAHhg");
	var mask_2_graphics_942 = new cjs.Graphics().p("EghfADxIAAnhMBC/AAAIAAHhg");
	var mask_2_graphics_943 = new cjs.Graphics().p("Egh6ADxIAAnhMBD1AAAIAAHhg");
	var mask_2_graphics_944 = new cjs.Graphics().p("EgiVADxIAAnhMBErAAAIAAHhg");
	var mask_2_graphics_945 = new cjs.Graphics().p("EgiwADxIAAnhMBFhAAAIAAHhg");
	var mask_2_graphics_946 = new cjs.Graphics().p("EgjLADxIAAnhMBGXAAAIAAHhg");
	var mask_2_graphics_947 = new cjs.Graphics().p("EgjmADxIAAnhMBHNAAAIAAHhg");
	var mask_2_graphics_948 = new cjs.Graphics().p("EgkBADxIAAnhMBIDAAAIAAHhg");
	var mask_2_graphics_949 = new cjs.Graphics().p("EgkcADxIAAnhMBI5AAAIAAHhg");
	var mask_2_graphics_950 = new cjs.Graphics().p("Egk3ADxIAAnhMBJvAAAIAAHhg");
	var mask_2_graphics_951 = new cjs.Graphics().p("EglSADxIAAnhMBKlAAAIAAHhg");
	var mask_2_graphics_952 = new cjs.Graphics().p("EgltADxIAAnhMBLbAAAIAAHhg");
	var mask_2_graphics_953 = new cjs.Graphics().p("EgmIADxIAAnhMBMRAAAIAAHhg");
	var mask_2_graphics_954 = new cjs.Graphics().p("EgmjADxIAAnhMBNHAAAIAAHhg");
	var mask_2_graphics_955 = new cjs.Graphics().p("Egm+ADxIAAnhMBN9AAAIAAHhg");
	var mask_2_graphics_956 = new cjs.Graphics().p("EgnYADxIAAnhMBOxAAAIAAHhg");
	var mask_2_graphics_957 = new cjs.Graphics().p("EgnzADxIAAnhMBPnAAAIAAHhg");
	var mask_2_graphics_958 = new cjs.Graphics().p("EgoOADxIAAnhMBQdAAAIAAHhg");
	var mask_2_graphics_959 = new cjs.Graphics().p("EgopADxIAAnhMBRTAAAIAAHhg");
	var mask_2_graphics_960 = new cjs.Graphics().p("EgpEADxIAAnhMBSJAAAIAAHhg");
	var mask_2_graphics_961 = new cjs.Graphics().p("EgpfADxIAAnhMBS/AAAIAAHhg");
	var mask_2_graphics_962 = new cjs.Graphics().p("Egp6ADxIAAnhMBT1AAAIAAHhg");
	var mask_2_graphics_963 = new cjs.Graphics().p("AEeLDIAAnhMBUsAAAIAAHhg");
	var mask_2_graphics_1138 = new cjs.Graphics().p("AEeLDIAAnhMBUsAAAIAAHhg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(855).to({graphics:mask_2_graphics_855,x:308.15,y:70.725}).wait(1).to({graphics:mask_2_graphics_856,x:610.525,y:117.4}).wait(1).to({graphics:mask_2_graphics_857,x:613.325,y:117.4}).wait(1).to({graphics:mask_2_graphics_858,x:616.1,y:117.4}).wait(1).to({graphics:mask_2_graphics_859,x:618.9,y:117.4}).wait(1).to({graphics:mask_2_graphics_860,x:621.675,y:117.4}).wait(1).to({graphics:mask_2_graphics_861,x:624.475,y:117.4}).wait(1).to({graphics:mask_2_graphics_862,x:627.25,y:117.4}).wait(1).to({graphics:mask_2_graphics_863,x:630.05,y:117.4}).wait(1).to({graphics:mask_2_graphics_864,x:632.825,y:117.4}).wait(1).to({graphics:mask_2_graphics_865,x:635.625,y:117.4}).wait(1).to({graphics:mask_2_graphics_866,x:638.4,y:117.4}).wait(1).to({graphics:mask_2_graphics_867,x:641.2,y:117.4}).wait(1).to({graphics:mask_2_graphics_868,x:643.975,y:117.4}).wait(1).to({graphics:mask_2_graphics_869,x:646.75,y:117.4}).wait(1).to({graphics:mask_2_graphics_870,x:649.55,y:117.4}).wait(1).to({graphics:mask_2_graphics_871,x:652.325,y:117.4}).wait(1).to({graphics:mask_2_graphics_872,x:655.125,y:117.4}).wait(1).to({graphics:mask_2_graphics_873,x:657.9,y:117.4}).wait(1).to({graphics:mask_2_graphics_874,x:660.7,y:117.4}).wait(1).to({graphics:mask_2_graphics_875,x:663.475,y:117.4}).wait(1).to({graphics:mask_2_graphics_876,x:666.275,y:117.4}).wait(1).to({graphics:mask_2_graphics_877,x:669.05,y:117.4}).wait(1).to({graphics:mask_2_graphics_878,x:671.85,y:117.4}).wait(1).to({graphics:mask_2_graphics_879,x:674.625,y:117.4}).wait(1).to({graphics:mask_2_graphics_880,x:677.425,y:117.4}).wait(1).to({graphics:mask_2_graphics_881,x:680.2,y:117.4}).wait(1).to({graphics:mask_2_graphics_882,x:683,y:117.4}).wait(1).to({graphics:mask_2_graphics_883,x:685.775,y:117.4}).wait(1).to({graphics:mask_2_graphics_884,x:688.55,y:117.4}).wait(1).to({graphics:mask_2_graphics_885,x:691.35,y:117.4}).wait(1).to({graphics:mask_2_graphics_886,x:694.125,y:117.4}).wait(1).to({graphics:mask_2_graphics_887,x:696.925,y:117.4}).wait(1).to({graphics:mask_2_graphics_888,x:699.7,y:117.4}).wait(1).to({graphics:mask_2_graphics_889,x:702.5,y:117.4}).wait(1).to({graphics:mask_2_graphics_890,x:705.275,y:117.4}).wait(1).to({graphics:mask_2_graphics_891,x:708.075,y:117.4}).wait(1).to({graphics:mask_2_graphics_892,x:710.85,y:117.4}).wait(1).to({graphics:mask_2_graphics_893,x:713.65,y:117.4}).wait(1).to({graphics:mask_2_graphics_894,x:716.425,y:117.4}).wait(1).to({graphics:mask_2_graphics_895,x:719.225,y:117.4}).wait(1).to({graphics:mask_2_graphics_896,x:722,y:117.4}).wait(1).to({graphics:mask_2_graphics_897,x:722,y:117.4}).wait(1).to({graphics:mask_2_graphics_898,x:722,y:117.4}).wait(1).to({graphics:mask_2_graphics_899,x:722,y:117.4}).wait(1).to({graphics:mask_2_graphics_900,x:722,y:117.4}).wait(1).to({graphics:mask_2_graphics_901,x:722,y:117.4}).wait(1).to({graphics:mask_2_graphics_902,x:722,y:117.4}).wait(1).to({graphics:mask_2_graphics_903,x:722,y:117.4}).wait(1).to({graphics:mask_2_graphics_904,x:722,y:117.4}).wait(1).to({graphics:mask_2_graphics_905,x:722,y:117.4}).wait(1).to({graphics:mask_2_graphics_906,x:722,y:117.4}).wait(1).to({graphics:mask_2_graphics_907,x:722,y:117.4}).wait(1).to({graphics:mask_2_graphics_908,x:722,y:117.4}).wait(1).to({graphics:mask_2_graphics_909,x:724.7,y:117.4}).wait(1).to({graphics:mask_2_graphics_910,x:727.4,y:117.4}).wait(1).to({graphics:mask_2_graphics_911,x:730.075,y:117.4}).wait(1).to({graphics:mask_2_graphics_912,x:732.775,y:117.4}).wait(1).to({graphics:mask_2_graphics_913,x:735.475,y:117.4}).wait(1).to({graphics:mask_2_graphics_914,x:738.175,y:117.4}).wait(1).to({graphics:mask_2_graphics_915,x:740.875,y:117.4}).wait(1).to({graphics:mask_2_graphics_916,x:743.55,y:117.4}).wait(1).to({graphics:mask_2_graphics_917,x:746.25,y:117.4}).wait(1).to({graphics:mask_2_graphics_918,x:748.95,y:117.4}).wait(1).to({graphics:mask_2_graphics_919,x:751.65,y:117.4}).wait(1).to({graphics:mask_2_graphics_920,x:754.35,y:117.4}).wait(1).to({graphics:mask_2_graphics_921,x:757.025,y:117.4}).wait(1).to({graphics:mask_2_graphics_922,x:759.725,y:117.4}).wait(1).to({graphics:mask_2_graphics_923,x:762.425,y:117.4}).wait(1).to({graphics:mask_2_graphics_924,x:765.125,y:117.4}).wait(1).to({graphics:mask_2_graphics_925,x:767.825,y:117.4}).wait(1).to({graphics:mask_2_graphics_926,x:770.5,y:117.4}).wait(1).to({graphics:mask_2_graphics_927,x:773.2,y:117.4}).wait(1).to({graphics:mask_2_graphics_928,x:775.9,y:117.4}).wait(1).to({graphics:mask_2_graphics_929,x:778.6,y:117.4}).wait(1).to({graphics:mask_2_graphics_930,x:781.3,y:117.4}).wait(1).to({graphics:mask_2_graphics_931,x:783.975,y:117.4}).wait(1).to({graphics:mask_2_graphics_932,x:786.675,y:117.4}).wait(1).to({graphics:mask_2_graphics_933,x:789.375,y:117.4}).wait(1).to({graphics:mask_2_graphics_934,x:792.075,y:117.4}).wait(1).to({graphics:mask_2_graphics_935,x:794.775,y:117.4}).wait(1).to({graphics:mask_2_graphics_936,x:797.45,y:117.4}).wait(1).to({graphics:mask_2_graphics_937,x:800.15,y:117.4}).wait(1).to({graphics:mask_2_graphics_938,x:802.85,y:117.4}).wait(1).to({graphics:mask_2_graphics_939,x:805.55,y:117.4}).wait(1).to({graphics:mask_2_graphics_940,x:808.25,y:117.4}).wait(1).to({graphics:mask_2_graphics_941,x:810.925,y:117.4}).wait(1).to({graphics:mask_2_graphics_942,x:813.625,y:117.4}).wait(1).to({graphics:mask_2_graphics_943,x:816.325,y:117.4}).wait(1).to({graphics:mask_2_graphics_944,x:819.025,y:117.4}).wait(1).to({graphics:mask_2_graphics_945,x:821.725,y:117.4}).wait(1).to({graphics:mask_2_graphics_946,x:824.4,y:117.4}).wait(1).to({graphics:mask_2_graphics_947,x:827.1,y:117.4}).wait(1).to({graphics:mask_2_graphics_948,x:829.8,y:117.4}).wait(1).to({graphics:mask_2_graphics_949,x:832.5,y:117.4}).wait(1).to({graphics:mask_2_graphics_950,x:835.2,y:117.4}).wait(1).to({graphics:mask_2_graphics_951,x:837.875,y:117.4}).wait(1).to({graphics:mask_2_graphics_952,x:840.575,y:117.4}).wait(1).to({graphics:mask_2_graphics_953,x:843.275,y:117.4}).wait(1).to({graphics:mask_2_graphics_954,x:845.975,y:117.4}).wait(1).to({graphics:mask_2_graphics_955,x:848.675,y:117.4}).wait(1).to({graphics:mask_2_graphics_956,x:851.35,y:117.4}).wait(1).to({graphics:mask_2_graphics_957,x:854.05,y:117.4}).wait(1).to({graphics:mask_2_graphics_958,x:856.75,y:117.4}).wait(1).to({graphics:mask_2_graphics_959,x:859.45,y:117.4}).wait(1).to({graphics:mask_2_graphics_960,x:862.15,y:117.4}).wait(1).to({graphics:mask_2_graphics_961,x:864.825,y:117.4}).wait(1).to({graphics:mask_2_graphics_962,x:867.525,y:117.4}).wait(1).to({graphics:mask_2_graphics_963,x:570.6182,y:70.725}).wait(175).to({graphics:mask_2_graphics_1138,x:570.6182,y:70.725}).wait(1).to({graphics:null,x:0,y:0}).wait(15));

	// 图层_20
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("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AgKAFQgLAGgEAOQgEANAAAYQAAAXAFAOQAEAOAKAFQALAGARAAQASAAALgGgANQlvQgRgHgJgTQgJgSAAggQAAggAJgTQAJgSARgIQAQgHAYAAQAOAAALACQAKABAHADIAAAYIgTgGQgKgBgNAAQgRAAgLAFQgKAFgEAOQgFANAAAZQgBAWAGAOQAEANAKAGQALAGASgBQAMAAALgCQAKgBAJgDIAAAXIgLADIgQACIgQABQgYAAgQgIgAJjlnQgYAAgQgMQgQgNgIgaIgDgNIAAgLIAAgJQAAgZAKgTQAKgTAVgNIAQgFQAIgCAHgBIADAAQAcABASAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIACAfIADAbIgBAAIgZAAQgBAAAAgHIgDgTIgGAJIgGAHQgIAGgJADQgIADgLAAgAJQnvQgNAKgHARIgDAMIgBANIAAAGQAAARAGAMQAHANALAJIALAFIALABIAFAAQAvAAAAg5IAAgLQgBgWgHgPQgJgOgQgEIgFgBIgEAAIgBAAQgSAAgNAJgACLlvQgRgHgJgTQgIgSgBggQABggAIgTQAJgSARgIQARgHAYAAQAXAAARAHQARAIAJASQAJATAAAgQAAAggJASQgJATgRAHQgRAIgXAAQgYAAgRgIgADRmDQAJgFAFgOQAEgOAAgXQAAgYgFgNQgEgOgKgGQgLgFgRAAQgTAAgKAFQgKAGgEAOQgFANAAAYQAAAXAFAOQAFAOAJAFQALAGASAAQASAAALgGgAjSlnQgYAAgQgMQgQgNgIgaIgCgNIgBgLIAAgJQAAgZAKgTQAKgTAVgNIAQgFQAIgCAIgBIACAAQAbABATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAfIAFAbIgCAAIgYAAQgBAAgBgHIgEgTIgFAJIgGAHQgHAGgKADQgIADgLAAgAjlnvQgMAKgIARIgDAMIgBANIAAAGQAAARAGAMQAGANAMAJIALAFIALABIAFAAQAuAAAAg5IAAgLQABgWgJgPQgHgOgQgEIgGgBIgEAAIgBAAQgSAAgNAJgAmYlvQgQgHgJgTQgJgSAAggQAAggAJgTQAIgSARgIQAQgHAYAAQAVAAAMAGQANAGAHAKQAGAKADAMQACAMABAMIgBAIIgBALIhuAHQAAARAFALQAFAMAMAGQA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");
	this.shape_2.setTransform(880.75,121.55);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(855).to({_off:false},0).wait(283).to({_off:true},1).wait(15));

	// 图层_9 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_747 = new cjs.Graphics().p("EAtaAHjIAAnhICrAAIAAHhg");
	var mask_3_graphics_748 = new cjs.Graphics().p("Ah3DxIAAnhIDvAAIAAHhg");
	var mask_3_graphics_749 = new cjs.Graphics().p("AiaDxIAAnhIE1AAIAAHhg");
	var mask_3_graphics_750 = new cjs.Graphics().p("Ai9DxIAAnhIF7AAIAAHhg");
	var mask_3_graphics_751 = new cjs.Graphics().p("AjgDxIAAnhIHBAAIAAHhg");
	var mask_3_graphics_752 = new cjs.Graphics().p("AkDDxIAAnhIIHAAIAAHhg");
	var mask_3_graphics_753 = new cjs.Graphics().p("AkmDxIAAnhIJNAAIAAHhg");
	var mask_3_graphics_754 = new cjs.Graphics().p("AlJDxIAAnhIKTAAIAAHhg");
	var mask_3_graphics_755 = new cjs.Graphics().p("AlsDxIAAnhILZAAIAAHhg");
	var mask_3_graphics_756 = new cjs.Graphics().p("AmPDxIAAnhIMfAAIAAHhg");
	var mask_3_graphics_757 = new cjs.Graphics().p("AmyDxIAAnhINlAAIAAHhg");
	var mask_3_graphics_758 = new cjs.Graphics().p("AnVDxIAAnhIOrAAIAAHhg");
	var mask_3_graphics_759 = new cjs.Graphics().p("An4DxIAAnhIPxAAIAAHhg");
	var mask_3_graphics_760 = new cjs.Graphics().p("AobDxIAAnhIQ3AAIAAHhg");
	var mask_3_graphics_761 = new cjs.Graphics().p("Ao+DxIAAnhIR9AAIAAHhg");
	var mask_3_graphics_762 = new cjs.Graphics().p("AphDxIAAnhITDAAIAAHhg");
	var mask_3_graphics_763 = new cjs.Graphics().p("AqEDxIAAnhIUJAAIAAHhg");
	var mask_3_graphics_764 = new cjs.Graphics().p("AqnDxIAAnhIVOAAIAAHhg");
	var mask_3_graphics_765 = new cjs.Graphics().p("ArJDxIAAnhIWUAAIAAHhg");
	var mask_3_graphics_766 = new cjs.Graphics().p("ArsDxIAAnhIXZAAIAAHhg");
	var mask_3_graphics_767 = new cjs.Graphics().p("AsQDxIAAnhIYhAAIAAHhg");
	var mask_3_graphics_768 = new cjs.Graphics().p("AsyDxIAAnhIZlAAIAAHhg");
	var mask_3_graphics_769 = new cjs.Graphics().p("AtVDxIAAnhIarAAIAAHhg");
	var mask_3_graphics_770 = new cjs.Graphics().p("At4DxIAAnhIbxAAIAAHhg");
	var mask_3_graphics_771 = new cjs.Graphics().p("AubDxIAAnhIc3AAIAAHhg");
	var mask_3_graphics_772 = new cjs.Graphics().p("Au+DxIAAnhId9AAIAAHhg");
	var mask_3_graphics_773 = new cjs.Graphics().p("AvhDxIAAnhIfDAAIAAHhg");
	var mask_3_graphics_774 = new cjs.Graphics().p("AwEDxIAAnhMAgJAAAIAAHhg");
	var mask_3_graphics_775 = new cjs.Graphics().p("AwnDxIAAnhMAhPAAAIAAHhg");
	var mask_3_graphics_776 = new cjs.Graphics().p("AxKDxIAAnhMAiVAAAIAAHhg");
	var mask_3_graphics_777 = new cjs.Graphics().p("AxtDxIAAnhMAjbAAAIAAHhg");
	var mask_3_graphics_778 = new cjs.Graphics().p("AyQDxIAAnhMAkhAAAIAAHhg");
	var mask_3_graphics_779 = new cjs.Graphics().p("AyzDxIAAnhMAlnAAAIAAHhg");
	var mask_3_graphics_780 = new cjs.Graphics().p("AzVDxIAAnhMAmsAAAIAAHhg");
	var mask_3_graphics_781 = new cjs.Graphics().p("Az5DxIAAnhMAnyAAAIAAHhg");
	var mask_3_graphics_782 = new cjs.Graphics().p("A0cDxIAAnhMAo5AAAIAAHhg");
	var mask_3_graphics_783 = new cjs.Graphics().p("A0/DxIAAnhMAp/AAAIAAHhg");
	var mask_3_graphics_784 = new cjs.Graphics().p("A1hDxIAAnhMArDAAAIAAHhg");
	var mask_3_graphics_785 = new cjs.Graphics().p("A2EDxIAAnhMAsKAAAIAAHhg");
	var mask_3_graphics_786 = new cjs.Graphics().p("A2nDxIAAnhMAtPAAAIAAHhg");
	var mask_3_graphics_787 = new cjs.Graphics().p("A26DxIAAnhMAt2AAAIAAHhg");
	var mask_3_graphics_788 = new cjs.Graphics().p("A3ODxIAAnhMAudAAAIAAHhg");
	var mask_3_graphics_789 = new cjs.Graphics().p("A3iDxIAAnhMAvEAAAIAAHhg");
	var mask_3_graphics_790 = new cjs.Graphics().p("A31DxIAAnhMAvrAAAIAAHhg");
	var mask_3_graphics_791 = new cjs.Graphics().p("A4IDxIAAnhMAwRAAAIAAHhg");
	var mask_3_graphics_792 = new cjs.Graphics().p("A4cDxIAAnhMAw4AAAIAAHhg");
	var mask_3_graphics_793 = new cjs.Graphics().p("A4vDxIAAnhMAxfAAAIAAHhg");
	var mask_3_graphics_794 = new cjs.Graphics().p("A5CDxIAAnhMAyFAAAIAAHhg");
	var mask_3_graphics_795 = new cjs.Graphics().p("A5WDxIAAnhMAytAAAIAAHhg");
	var mask_3_graphics_796 = new cjs.Graphics().p("A5pDxIAAnhMAzTAAAIAAHhg");
	var mask_3_graphics_797 = new cjs.Graphics().p("A59DxIAAnhMAz7AAAIAAHhg");
	var mask_3_graphics_798 = new cjs.Graphics().p("A6QDxIAAnhMA0hAAAIAAHhg");
	var mask_3_graphics_799 = new cjs.Graphics().p("A6kDxIAAnhMA1IAAAIAAHhg");
	var mask_3_graphics_800 = new cjs.Graphics().p("A63DxIAAnhMA1vAAAIAAHhg");
	var mask_3_graphics_801 = new cjs.Graphics().p("A7KDxIAAnhMA2VAAAIAAHhg");
	var mask_3_graphics_802 = new cjs.Graphics().p("A7eDxIAAnhMA29AAAIAAHhg");
	var mask_3_graphics_803 = new cjs.Graphics().p("A7xDxIAAnhMA3jAAAIAAHhg");
	var mask_3_graphics_804 = new cjs.Graphics().p("A8EDxIAAnhMA4JAAAIAAHhg");
	var mask_3_graphics_805 = new cjs.Graphics().p("A8YDxIAAnhMA4xAAAIAAHhg");
	var mask_3_graphics_806 = new cjs.Graphics().p("A8sDxIAAnhMA5YAAAIAAHhg");
	var mask_3_graphics_807 = new cjs.Graphics().p("A8/DxIAAnhMA5/AAAIAAHhg");
	var mask_3_graphics_808 = new cjs.Graphics().p("A9SDxIAAnhMA6lAAAIAAHhg");
	var mask_3_graphics_809 = new cjs.Graphics().p("A9mDxIAAnhMA7NAAAIAAHhg");
	var mask_3_graphics_810 = new cjs.Graphics().p("A95DxIAAnhMA7zAAAIAAHhg");
	var mask_3_graphics_811 = new cjs.Graphics().p("A+MDxIAAnhMA8ZAAAIAAHhg");
	var mask_3_graphics_812 = new cjs.Graphics().p("A+gDxIAAnhMA9BAAAIAAHhg");
	var mask_3_graphics_813 = new cjs.Graphics().p("A+0DxIAAnhMA9oAAAIAAHhg");
	var mask_3_graphics_814 = new cjs.Graphics().p("A/HDxIAAnhMA+PAAAIAAHhg");
	var mask_3_graphics_815 = new cjs.Graphics().p("A/aDxIAAnhMA+1AAAIAAHhg");
	var mask_3_graphics_816 = new cjs.Graphics().p("A/uDxIAAnhMA/cAAAIAAHhg");
	var mask_3_graphics_817 = new cjs.Graphics().p("EggBADxIAAnhMBADAAAIAAHhg");
	var mask_3_graphics_818 = new cjs.Graphics().p("EggVADxIAAnhMBAqAAAIAAHhg");
	var mask_3_graphics_819 = new cjs.Graphics().p("EggoADxIAAnhMBBRAAAIAAHhg");
	var mask_3_graphics_820 = new cjs.Graphics().p("Egg7ADxIAAnhMBB3AAAIAAHhg");
	var mask_3_graphics_821 = new cjs.Graphics().p("EghPADxIAAnhMBCfAAAIAAHhg");
	var mask_3_graphics_822 = new cjs.Graphics().p("EghiADxIAAnhMBDFAAAIAAHhg");
	var mask_3_graphics_823 = new cjs.Graphics().p("Egh1ADxIAAnhMBDrAAAIAAHhg");
	var mask_3_graphics_824 = new cjs.Graphics().p("EgiJADxIAAnhMBETAAAIAAHhg");
	var mask_3_graphics_825 = new cjs.Graphics().p("EgidADxIAAnhMBE6AAAIAAHhg");
	var mask_3_graphics_826 = new cjs.Graphics().p("EgiwADxIAAnhMBFhAAAIAAHhg");
	var mask_3_graphics_827 = new cjs.Graphics().p("EgjDADxIAAnhMBGHAAAIAAHhg");
	var mask_3_graphics_828 = new cjs.Graphics().p("EgjXADxIAAnhMBGuAAAIAAHhg");
	var mask_3_graphics_829 = new cjs.Graphics().p("EgjqADxIAAnhMBHVAAAIAAHhg");
	var mask_3_graphics_830 = new cjs.Graphics().p("Egj9ADxIAAnhMBH7AAAIAAHhg");
	var mask_3_graphics_831 = new cjs.Graphics().p("EgkRADxIAAnhMBIjAAAIAAHhg");
	var mask_3_graphics_832 = new cjs.Graphics().p("EgkkADxIAAnhMBJJAAAIAAHhg");
	var mask_3_graphics_833 = new cjs.Graphics().p("Egk4ADxIAAnhMBJxAAAIAAHhg");
	var mask_3_graphics_834 = new cjs.Graphics().p("EglLADxIAAnhMBKXAAAIAAHhg");
	var mask_3_graphics_835 = new cjs.Graphics().p("EglfADxIAAnhMBK+AAAIAAHhg");
	var mask_3_graphics_836 = new cjs.Graphics().p("EglyADxIAAnhMBLlAAAIAAHhg");
	var mask_3_graphics_837 = new cjs.Graphics().p("EgmFADxIAAnhMBMMAAAIAAHhg");
	var mask_3_graphics_838 = new cjs.Graphics().p("EgmZADxIAAnhMBMzAAAIAAHhg");
	var mask_3_graphics_839 = new cjs.Graphics().p("EgmsADxIAAnhMBNZAAAIAAHhg");
	var mask_3_graphics_840 = new cjs.Graphics().p("Egm/ADxIAAnhMBN/AAAIAAHhg");
	var mask_3_graphics_841 = new cjs.Graphics().p("EgnTADxIAAnhMBOnAAAIAAHhg");
	var mask_3_graphics_842 = new cjs.Graphics().p("EgnnADxIAAnhMBPPAAAIAAHhg");
	var mask_3_graphics_843 = new cjs.Graphics().p("Egn6ADxIAAnhMBP1AAAIAAHhg");
	var mask_3_graphics_844 = new cjs.Graphics().p("EgoNADxIAAnhMBQbAAAIAAHhg");
	var mask_3_graphics_845 = new cjs.Graphics().p("EgohADxIAAnhMBRDAAAIAAHhg");
	var mask_3_graphics_846 = new cjs.Graphics().p("Ego0ADxIAAnhMBRpAAAIAAHhg");
	var mask_3_graphics_847 = new cjs.Graphics().p("EgpHADxIAAnhMBSQAAAIAAHhg");
	var mask_3_graphics_848 = new cjs.Graphics().p("EgpbADxIAAnhMBS3AAAIAAHhg");
	var mask_3_graphics_849 = new cjs.Graphics().p("EgpuADxIAAnhMBTeAAAIAAHhg");
	var mask_3_graphics_850 = new cjs.Graphics().p("EgqCADxIAAnhMBUFAAAIAAHhg");
	var mask_3_graphics_851 = new cjs.Graphics().p("AERHjIAAnhMBUtAAAIAAHhg");
	var mask_3_graphics_1138 = new cjs.Graphics().p("AERHjIAAnhMBUtAAAIAAHhg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(747).to({graphics:mask_3_graphics_747,x:307.725,y:48.325}).wait(1).to({graphics:mask_3_graphics_748,x:610.375,y:72.6}).wait(1).to({graphics:mask_3_graphics_749,x:613.85,y:72.6}).wait(1).to({graphics:mask_3_graphics_750,x:617.325,y:72.6}).wait(1).to({graphics:mask_3_graphics_751,x:620.775,y:72.6}).wait(1).to({graphics:mask_3_graphics_752,x:624.275,y:72.6}).wait(1).to({graphics:mask_3_graphics_753,x:627.725,y:72.6}).wait(1).to({graphics:mask_3_graphics_754,x:631.2,y:72.6}).wait(1).to({graphics:mask_3_graphics_755,x:634.7,y:72.6}).wait(1).to({graphics:mask_3_graphics_756,x:638.15,y:72.6}).wait(1).to({graphics:mask_3_graphics_757,x:641.625,y:72.6}).wait(1).to({graphics:mask_3_graphics_758,x:645.1,y:72.6}).wait(1).to({graphics:mask_3_graphics_759,x:648.575,y:72.6}).wait(1).to({graphics:mask_3_graphics_760,x:652.025,y:72.6}).wait(1).to({graphics:mask_3_graphics_761,x:655.525,y:72.6}).wait(1).to({graphics:mask_3_graphics_762,x:658.975,y:72.6}).wait(1).to({graphics:mask_3_graphics_763,x:662.45,y:72.6}).wait(1).to({graphics:mask_3_graphics_764,x:665.95,y:72.6}).wait(1).to({graphics:mask_3_graphics_765,x:669.4,y:72.6}).wait(1).to({graphics:mask_3_graphics_766,x:672.875,y:72.6}).wait(1).to({graphics:mask_3_graphics_767,x:676.35,y:72.6}).wait(1).to({graphics:mask_3_graphics_768,x:679.825,y:72.6}).wait(1).to({graphics:mask_3_graphics_769,x:683.275,y:72.6}).wait(1).to({graphics:mask_3_graphics_770,x:686.775,y:72.6}).wait(1).to({graphics:mask_3_graphics_771,x:690.25,y:72.6}).wait(1).to({graphics:mask_3_graphics_772,x:693.7,y:72.6}).wait(1).to({graphics:mask_3_graphics_773,x:697.2,y:72.6}).wait(1).to({graphics:mask_3_graphics_774,x:700.65,y:72.6}).wait(1).to({graphics:mask_3_graphics_775,x:704.125,y:72.6}).wait(1).to({graphics:mask_3_graphics_776,x:707.6,y:72.6}).wait(1).to({graphics:mask_3_graphics_777,x:711.075,y:72.6}).wait(1).to({graphics:mask_3_graphics_778,x:714.525,y:72.6}).wait(1).to({graphics:mask_3_graphics_779,x:718.025,y:72.6}).wait(1).to({graphics:mask_3_graphics_780,x:721.5,y:72.6}).wait(1).to({graphics:mask_3_graphics_781,x:724.95,y:72.6}).wait(1).to({graphics:mask_3_graphics_782,x:728.45,y:72.6}).wait(1).to({graphics:mask_3_graphics_783,x:731.9,y:72.6}).wait(1).to({graphics:mask_3_graphics_784,x:735.375,y:72.6}).wait(1).to({graphics:mask_3_graphics_785,x:738.85,y:72.6}).wait(1).to({graphics:mask_3_graphics_786,x:742.325,y:72.6}).wait(1).to({graphics:mask_3_graphics_787,x:744.25,y:72.6}).wait(1).to({graphics:mask_3_graphics_788,x:746.2,y:72.6}).wait(1).to({graphics:mask_3_graphics_789,x:748.1,y:72.6}).wait(1).to({graphics:mask_3_graphics_790,x:750.05,y:72.6}).wait(1).to({graphics:mask_3_graphics_791,x:751.975,y:72.6}).wait(1).to({graphics:mask_3_graphics_792,x:753.9,y:72.6}).wait(1).to({graphics:mask_3_graphics_793,x:755.825,y:72.6}).wait(1).to({graphics:mask_3_graphics_794,x:757.75,y:72.6}).wait(1).to({graphics:mask_3_graphics_795,x:759.7,y:72.6}).wait(1).to({graphics:mask_3_graphics_796,x:761.625,y:72.6}).wait(1).to({graphics:mask_3_graphics_797,x:763.55,y:72.6}).wait(1).to({graphics:mask_3_graphics_798,x:765.475,y:72.6}).wait(1).to({graphics:mask_3_graphics_799,x:767.4,y:72.6}).wait(1).to({graphics:mask_3_graphics_800,x:769.35,y:72.6}).wait(1).to({graphics:mask_3_graphics_801,x:771.25,y:72.6}).wait(1).to({graphics:mask_3_graphics_802,x:773.2,y:72.6}).wait(1).to({graphics:mask_3_graphics_803,x:775.125,y:72.6}).wait(1).to({graphics:mask_3_graphics_804,x:777.05,y:72.6}).wait(1).to({graphics:mask_3_graphics_805,x:778.975,y:72.6}).wait(1).to({graphics:mask_3_graphics_806,x:780.9,y:72.6}).wait(1).to({graphics:mask_3_graphics_807,x:782.85,y:72.6}).wait(1).to({graphics:mask_3_graphics_808,x:784.775,y:72.6}).wait(1).to({graphics:mask_3_graphics_809,x:786.7,y:72.6}).wait(1).to({graphics:mask_3_graphics_810,x:788.625,y:72.6}).wait(1).to({graphics:mask_3_graphics_811,x:790.55,y:72.6}).wait(1).to({graphics:mask_3_graphics_812,x:792.5,y:72.6}).wait(1).to({graphics:mask_3_graphics_813,x:794.4,y:72.6}).wait(1).to({graphics:mask_3_graphics_814,x:796.35,y:72.6}).wait(1).to({graphics:mask_3_graphics_815,x:798.275,y:72.6}).wait(1).to({graphics:mask_3_graphics_816,x:800.2,y:72.6}).wait(1).to({graphics:mask_3_graphics_817,x:802.125,y:72.6}).wait(1).to({graphics:mask_3_graphics_818,x:804.05,y:72.6}).wait(1).to({graphics:mask_3_graphics_819,x:806,y:72.6}).wait(1).to({graphics:mask_3_graphics_820,x:807.925,y:72.6}).wait(1).to({graphics:mask_3_graphics_821,x:809.85,y:72.6}).wait(1).to({graphics:mask_3_graphics_822,x:811.775,y:72.6}).wait(1).to({graphics:mask_3_graphics_823,x:813.7,y:72.6}).wait(1).to({graphics:mask_3_graphics_824,x:815.65,y:72.6}).wait(1).to({graphics:mask_3_graphics_825,x:817.55,y:72.6}).wait(1).to({graphics:mask_3_graphics_826,x:819.5,y:72.6}).wait(1).to({graphics:mask_3_graphics_827,x:821.425,y:72.6}).wait(1).to({graphics:mask_3_graphics_828,x:823.35,y:72.6}).wait(1).to({graphics:mask_3_graphics_829,x:825.275,y:72.6}).wait(1).to({graphics:mask_3_graphics_830,x:827.2,y:72.6}).wait(1).to({graphics:mask_3_graphics_831,x:829.15,y:72.6}).wait(1).to({graphics:mask_3_graphics_832,x:831.075,y:72.6}).wait(1).to({graphics:mask_3_graphics_833,x:833,y:72.6}).wait(1).to({graphics:mask_3_graphics_834,x:834.925,y:72.6}).wait(1).to({graphics:mask_3_graphics_835,x:836.85,y:72.6}).wait(1).to({graphics:mask_3_graphics_836,x:838.8,y:72.6}).wait(1).to({graphics:mask_3_graphics_837,x:840.7,y:72.6}).wait(1).to({graphics:mask_3_graphics_838,x:842.65,y:72.6}).wait(1).to({graphics:mask_3_graphics_839,x:844.575,y:72.6}).wait(1).to({graphics:mask_3_graphics_840,x:846.5,y:72.6}).wait(1).to({graphics:mask_3_graphics_841,x:848.425,y:72.6}).wait(1).to({graphics:mask_3_graphics_842,x:850.35,y:72.6}).wait(1).to({graphics:mask_3_graphics_843,x:852.3,y:72.6}).wait(1).to({graphics:mask_3_graphics_844,x:854.225,y:72.6}).wait(1).to({graphics:mask_3_graphics_845,x:856.15,y:72.6}).wait(1).to({graphics:mask_3_graphics_846,x:858.075,y:72.6}).wait(1).to({graphics:mask_3_graphics_847,x:860,y:72.6}).wait(1).to({graphics:mask_3_graphics_848,x:861.95,y:72.6}).wait(1).to({graphics:mask_3_graphics_849,x:863.85,y:72.6}).wait(1).to({graphics:mask_3_graphics_850,x:865.8,y:72.6}).wait(1).to({graphics:mask_3_graphics_851,x:569.3692,y:48.325}).wait(287).to({graphics:mask_3_graphics_1138,x:569.3692,y:48.325}).wait(1).to({graphics:null,x:0,y:0}).wait(15));

	// 图层_19
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("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AgKAFQgLAGgEAOQgEANAAAYQAAAXAFAOQAEAOAKAFQALAGARAAQASAAALgGgANQlvQgRgHgJgTQgJgSAAggQAAggAJgTQAJgSARgIQAQgHAYAAQAOAAALACQAKABAHADIAAAYIgTgGQgKgBgNAAQgRAAgLAFQgKAFgEAOQgFANAAAZQgBAWAGAOQAEANAKAGQALAGASgBQAMAAALgCQAKgBAJgDIAAAXIgLADIgQACIgQABQgYAAgQgIgAJjlnQgYAAgQgMQgQgNgIgaIgDgNIAAgLIAAgJQAAgZAKgTQAKgTAVgNIAQgFQAIgCAHgBIADAAQAcABASAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIACAfIADAbIgBAAIgZAAQgBAAAAgHIgDgTIgGAJIgGAHQgIAGgJADQgIADgLAAgAJQnvQgNAKgHARIgDAMIgBANIAAAGQAAARAGAMQAHANALAJIALAFIALABIAFAAQAvAAAAg5IAAgLQgBgWgHgPQgJgOgQgEIgFgBIgEAAIgBAAQgSAAgNAJgACLlvQgRgHgJgTQgIgSgBggQABggAIgTQAJgSARgIQARgHAYAAQAXAAARAHQARAIAJASQAJATAAAgQAAAggJASQgJATgRAHQgRAIgXAAQgYAAgRgIgADRmDQAJgFAFgOQAEgOAAgXQAAgYgFgNQgEgOgKgGQgLgFgRAAQgTAAgKAFQgKAGgEAOQgFANAAAYQAAAXAFAOQAFAOAJAFQALAGASAAQASAAALgGgAjSlnQgYAAgQgMQgQgNgIgaIgCgNIgBgLIAAgJQAAgZAKgTQAKgTAVgNIAQgFQAIgCAIgBIACAAQAbABATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAfIAFAbIgCAAIgYAAQgBAAgBgHIgEgTIgFAJIgGAHQgHAGgKADQgIADgLAAgAjlnvQgMAKgIARIgDAMIgBANIAAAGQAAARAGAMQAGANAMAJIALAFIALABIAFAAQAuAAAAg5IAAgLQABgWgJgPQgHgOgQgEIgGgBIgEAAIgBAAQgSAAgNAJgAmYlvQgQgHgJgTQgJgSAAggQAAggAJgTQAIgSARgIQAQgHAYAAQAVAAAMAGQANAGAHAKQAGAKADAMQACAMABAMIgBAIIgBALIhuAHQAAARAFALQAFAMAMAGQA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");
	this.shape_3.setTransform(880.75,121.55);
	this.shape_3._off = true;

	var maskedShapeInstanceList = [this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(747).to({_off:false},0).wait(391).to({_off:true},1).wait(15));

	// 图层_8 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_620 = new cjs.Graphics().p("EAtiAD/IAAngICrAAIAAHgg");
	var mask_4_graphics_621 = new cjs.Graphics().p("AhwDwIAAnfIDhAAIAAHfg");
	var mask_4_graphics_622 = new cjs.Graphics().p("AiLDwIAAnfIEXAAIAAHfg");
	var mask_4_graphics_623 = new cjs.Graphics().p("AinDwIAAnfIFPAAIAAHfg");
	var mask_4_graphics_624 = new cjs.Graphics().p("AjCDwIAAnfIGFAAIAAHfg");
	var mask_4_graphics_625 = new cjs.Graphics().p("AjeDwIAAnfIG9AAIAAHfg");
	var mask_4_graphics_626 = new cjs.Graphics().p("Aj5DwIAAnfIHzAAIAAHfg");
	var mask_4_graphics_627 = new cjs.Graphics().p("AkVDwIAAnfIIrAAIAAHfg");
	var mask_4_graphics_628 = new cjs.Graphics().p("AkwDwIAAnfIJhAAIAAHfg");
	var mask_4_graphics_629 = new cjs.Graphics().p("AlLDwIAAnfIKXAAIAAHfg");
	var mask_4_graphics_630 = new cjs.Graphics().p("AlnDwIAAnfILOAAIAAHfg");
	var mask_4_graphics_631 = new cjs.Graphics().p("AmCDwIAAnfIMFAAIAAHfg");
	var mask_4_graphics_632 = new cjs.Graphics().p("AmeDwIAAnfIM8AAIAAHfg");
	var mask_4_graphics_633 = new cjs.Graphics().p("Am5DwIAAnfINzAAIAAHfg");
	var mask_4_graphics_634 = new cjs.Graphics().p("AnUDwIAAnfIOpAAIAAHfg");
	var mask_4_graphics_635 = new cjs.Graphics().p("AnwDwIAAnfIPhAAIAAHfg");
	var mask_4_graphics_636 = new cjs.Graphics().p("AoLDwIAAnfIQXAAIAAHfg");
	var mask_4_graphics_637 = new cjs.Graphics().p("AonDwIAAnfIRPAAIAAHfg");
	var mask_4_graphics_638 = new cjs.Graphics().p("ApCDwIAAnfISFAAIAAHfg");
	var mask_4_graphics_639 = new cjs.Graphics().p("ApdDwIAAnfIS7AAIAAHfg");
	var mask_4_graphics_640 = new cjs.Graphics().p("Ap5DwIAAnfITzAAIAAHfg");
	var mask_4_graphics_641 = new cjs.Graphics().p("AqUDwIAAnfIUpAAIAAHfg");
	var mask_4_graphics_642 = new cjs.Graphics().p("AqwDwIAAnfIVgAAIAAHfg");
	var mask_4_graphics_643 = new cjs.Graphics().p("ArLDwIAAnfIWXAAIAAHfg");
	var mask_4_graphics_644 = new cjs.Graphics().p("ArmDwIAAnfIXNAAIAAHfg");
	var mask_4_graphics_645 = new cjs.Graphics().p("AsCDwIAAnfIYFAAIAAHfg");
	var mask_4_graphics_646 = new cjs.Graphics().p("AsdDwIAAnfIY7AAIAAHfg");
	var mask_4_graphics_647 = new cjs.Graphics().p("As5DwIAAnfIZzAAIAAHfg");
	var mask_4_graphics_648 = new cjs.Graphics().p("AtUDwIAAnfIapAAIAAHfg");
	var mask_4_graphics_649 = new cjs.Graphics().p("AtwDwIAAnfIbhAAIAAHfg");
	var mask_4_graphics_650 = new cjs.Graphics().p("AuLDwIAAnfIcXAAIAAHfg");
	var mask_4_graphics_651 = new cjs.Graphics().p("AumDwIAAnfIdNAAIAAHfg");
	var mask_4_graphics_652 = new cjs.Graphics().p("AvCDwIAAnfIeFAAIAAHfg");
	var mask_4_graphics_653 = new cjs.Graphics().p("AvdDwIAAnfIe7AAIAAHfg");
	var mask_4_graphics_654 = new cjs.Graphics().p("Av5DwIAAnfIfyAAIAAHfg");
	var mask_4_graphics_655 = new cjs.Graphics().p("AwUDwIAAnfMAgpAAAIAAHfg");
	var mask_4_graphics_656 = new cjs.Graphics().p("AwvDwIAAnfMAhfAAAIAAHfg");
	var mask_4_graphics_657 = new cjs.Graphics().p("AxLDwIAAnfMAiXAAAIAAHfg");
	var mask_4_graphics_658 = new cjs.Graphics().p("AxmDwIAAnfMAjNAAAIAAHfg");
	var mask_4_graphics_659 = new cjs.Graphics().p("AyCDwIAAnfMAkFAAAIAAHfg");
	var mask_4_graphics_660 = new cjs.Graphics().p("AydDwIAAnfMAk7AAAIAAHfg");
	var mask_4_graphics_661 = new cjs.Graphics().p("Ay4DwIAAnfMAlxAAAIAAHfg");
	var mask_4_graphics_662 = new cjs.Graphics().p("AzUDwIAAnfMAmpAAAIAAHfg");
	var mask_4_graphics_681 = new cjs.Graphics().p("AzUDwIAAnfMAmpAAAIAAHfg");
	var mask_4_graphics_682 = new cjs.Graphics().p("AzqDwIAAnfMAnVAAAIAAHfg");
	var mask_4_graphics_683 = new cjs.Graphics().p("A0BDwIAAnfMAoDAAAIAAHfg");
	var mask_4_graphics_684 = new cjs.Graphics().p("A0XDwIAAnfMAovAAAIAAHfg");
	var mask_4_graphics_685 = new cjs.Graphics().p("A0tDwIAAnfMApbAAAIAAHfg");
	var mask_4_graphics_686 = new cjs.Graphics().p("A1EDwIAAnfMAqJAAAIAAHfg");
	var mask_4_graphics_687 = new cjs.Graphics().p("A1aDwIAAnfMAq1AAAIAAHfg");
	var mask_4_graphics_688 = new cjs.Graphics().p("A1wDwIAAnfMArhAAAIAAHfg");
	var mask_4_graphics_689 = new cjs.Graphics().p("A2HDwIAAnfMAsPAAAIAAHfg");
	var mask_4_graphics_690 = new cjs.Graphics().p("A2dDwIAAnfMAs7AAAIAAHfg");
	var mask_4_graphics_691 = new cjs.Graphics().p("A2zDwIAAnfMAtnAAAIAAHfg");
	var mask_4_graphics_692 = new cjs.Graphics().p("A3KDwIAAnfMAuVAAAIAAHfg");
	var mask_4_graphics_693 = new cjs.Graphics().p("A3gDwIAAnfMAvBAAAIAAHfg");
	var mask_4_graphics_694 = new cjs.Graphics().p("A32DwIAAnfMAvtAAAIAAHfg");
	var mask_4_graphics_695 = new cjs.Graphics().p("A4NDwIAAnfMAwaAAAIAAHfg");
	var mask_4_graphics_696 = new cjs.Graphics().p("A4jDwIAAnfMAxHAAAIAAHfg");
	var mask_4_graphics_697 = new cjs.Graphics().p("A45DwIAAnfMAxzAAAIAAHfg");
	var mask_4_graphics_698 = new cjs.Graphics().p("A5QDwIAAnfMAygAAAIAAHfg");
	var mask_4_graphics_699 = new cjs.Graphics().p("A5mDwIAAnfMAzNAAAIAAHfg");
	var mask_4_graphics_700 = new cjs.Graphics().p("A58DwIAAnfMAz5AAAIAAHfg");
	var mask_4_graphics_701 = new cjs.Graphics().p("A6TDwIAAnfMA0mAAAIAAHfg");
	var mask_4_graphics_702 = new cjs.Graphics().p("A6pDwIAAnfMA1TAAAIAAHfg");
	var mask_4_graphics_703 = new cjs.Graphics().p("A6/DwIAAnfMA1/AAAIAAHfg");
	var mask_4_graphics_704 = new cjs.Graphics().p("A7WDwIAAnfMA2sAAAIAAHfg");
	var mask_4_graphics_705 = new cjs.Graphics().p("A7sDwIAAnfMA3ZAAAIAAHfg");
	var mask_4_graphics_706 = new cjs.Graphics().p("A8CDwIAAnfMA4FAAAIAAHfg");
	var mask_4_graphics_707 = new cjs.Graphics().p("A8ZDwIAAnfMA4zAAAIAAHfg");
	var mask_4_graphics_708 = new cjs.Graphics().p("A8vDwIAAnfMA5fAAAIAAHfg");
	var mask_4_graphics_709 = new cjs.Graphics().p("A9FDwIAAnfMA6LAAAIAAHfg");
	var mask_4_graphics_710 = new cjs.Graphics().p("A9cDwIAAnfMA65AAAIAAHfg");
	var mask_4_graphics_711 = new cjs.Graphics().p("A9yDwIAAnfMA7lAAAIAAHfg");
	var mask_4_graphics_712 = new cjs.Graphics().p("A+IDwIAAnfMA8RAAAIAAHfg");
	var mask_4_graphics_713 = new cjs.Graphics().p("A+fDwIAAnfMA8/AAAIAAHfg");
	var mask_4_graphics_714 = new cjs.Graphics().p("A+1DwIAAnfMA9rAAAIAAHfg");
	var mask_4_graphics_715 = new cjs.Graphics().p("A/LDwIAAnfMA+XAAAIAAHfg");
	var mask_4_graphics_716 = new cjs.Graphics().p("A/iDwIAAnfMA/FAAAIAAHfg");
	var mask_4_graphics_717 = new cjs.Graphics().p("A/4DwIAAnfMA/xAAAIAAHfg");
	var mask_4_graphics_718 = new cjs.Graphics().p("EggOADwIAAnfMBAdAAAIAAHfg");
	var mask_4_graphics_719 = new cjs.Graphics().p("EgglADwIAAnfMBBLAAAIAAHfg");
	var mask_4_graphics_720 = new cjs.Graphics().p("Egg7ADwIAAnfMBB3AAAIAAHfg");
	var mask_4_graphics_721 = new cjs.Graphics().p("EghRADwIAAnfMBCjAAAIAAHfg");
	var mask_4_graphics_722 = new cjs.Graphics().p("EghoADwIAAnfMBDRAAAIAAHfg");
	var mask_4_graphics_723 = new cjs.Graphics().p("Egh+ADwIAAnfMBD9AAAIAAHfg");
	var mask_4_graphics_724 = new cjs.Graphics().p("EgiUADwIAAnfMBEqAAAIAAHfg");
	var mask_4_graphics_725 = new cjs.Graphics().p("EgirADwIAAnfMBFXAAAIAAHfg");
	var mask_4_graphics_726 = new cjs.Graphics().p("EgjBADwIAAnfMBGDAAAIAAHfg");
	var mask_4_graphics_727 = new cjs.Graphics().p("EgjXADwIAAnfMBGwAAAIAAHfg");
	var mask_4_graphics_728 = new cjs.Graphics().p("EgjuADwIAAnfMBHdAAAIAAHfg");
	var mask_4_graphics_729 = new cjs.Graphics().p("EgkEADwIAAnfMBIJAAAIAAHfg");
	var mask_4_graphics_730 = new cjs.Graphics().p("EgkbADwIAAnfMBI3AAAIAAHfg");
	var mask_4_graphics_731 = new cjs.Graphics().p("EgkxADwIAAnfMBJjAAAIAAHfg");
	var mask_4_graphics_732 = new cjs.Graphics().p("EglHADwIAAnfMBKPAAAIAAHfg");
	var mask_4_graphics_733 = new cjs.Graphics().p("EgleADwIAAnfMBK9AAAIAAHfg");
	var mask_4_graphics_734 = new cjs.Graphics().p("AJDD/IAAngMBLqAAAIAAHgg");
	var mask_4_graphics_1138 = new cjs.Graphics().p("AJDD/IAAngMBLqAAAIAAHgg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(620).to({graphics:mask_4_graphics_620,x:308.525,y:25.525}).wait(1).to({graphics:mask_4_graphics_621,x:611.25,y:27}).wait(1).to({graphics:mask_4_graphics_622,x:613.975,y:27}).wait(1).to({graphics:mask_4_graphics_623,x:616.725,y:27}).wait(1).to({graphics:mask_4_graphics_624,x:619.475,y:27}).wait(1).to({graphics:mask_4_graphics_625,x:622.2,y:27}).wait(1).to({graphics:mask_4_graphics_626,x:624.95,y:27}).wait(1).to({graphics:mask_4_graphics_627,x:627.7,y:27}).wait(1).to({graphics:mask_4_graphics_628,x:630.425,y:27}).wait(1).to({graphics:mask_4_graphics_629,x:633.175,y:27}).wait(1).to({graphics:mask_4_graphics_630,x:635.9,y:27}).wait(1).to({graphics:mask_4_graphics_631,x:638.65,y:27}).wait(1).to({graphics:mask_4_graphics_632,x:641.4,y:27}).wait(1).to({graphics:mask_4_graphics_633,x:644.125,y:27}).wait(1).to({graphics:mask_4_graphics_634,x:646.875,y:27}).wait(1).to({graphics:mask_4_graphics_635,x:649.625,y:27}).wait(1).to({graphics:mask_4_graphics_636,x:652.35,y:27}).wait(1).to({graphics:mask_4_graphics_637,x:655.1,y:27}).wait(1).to({graphics:mask_4_graphics_638,x:657.85,y:27}).wait(1).to({graphics:mask_4_graphics_639,x:660.575,y:27}).wait(1).to({graphics:mask_4_graphics_640,x:663.325,y:27}).wait(1).to({graphics:mask_4_graphics_641,x:666.075,y:27}).wait(1).to({graphics:mask_4_graphics_642,x:668.8,y:27}).wait(1).to({graphics:mask_4_graphics_643,x:671.55,y:27}).wait(1).to({graphics:mask_4_graphics_644,x:674.275,y:27}).wait(1).to({graphics:mask_4_graphics_645,x:677.025,y:27}).wait(1).to({graphics:mask_4_graphics_646,x:679.775,y:27}).wait(1).to({graphics:mask_4_graphics_647,x:682.5,y:27}).wait(1).to({graphics:mask_4_graphics_648,x:685.25,y:27}).wait(1).to({graphics:mask_4_graphics_649,x:688,y:27}).wait(1).to({graphics:mask_4_graphics_650,x:690.725,y:27}).wait(1).to({graphics:mask_4_graphics_651,x:693.475,y:27}).wait(1).to({graphics:mask_4_graphics_652,x:696.225,y:27}).wait(1).to({graphics:mask_4_graphics_653,x:698.95,y:27}).wait(1).to({graphics:mask_4_graphics_654,x:701.7,y:27}).wait(1).to({graphics:mask_4_graphics_655,x:704.425,y:27}).wait(1).to({graphics:mask_4_graphics_656,x:707.175,y:27}).wait(1).to({graphics:mask_4_graphics_657,x:709.925,y:27}).wait(1).to({graphics:mask_4_graphics_658,x:712.65,y:27}).wait(1).to({graphics:mask_4_graphics_659,x:715.4,y:27}).wait(1).to({graphics:mask_4_graphics_660,x:718.15,y:27}).wait(1).to({graphics:mask_4_graphics_661,x:720.875,y:27}).wait(1).to({graphics:mask_4_graphics_662,x:723.625,y:27}).wait(19).to({graphics:mask_4_graphics_681,x:723.625,y:27}).wait(1).to({graphics:mask_4_graphics_682,x:725.85,y:27}).wait(1).to({graphics:mask_4_graphics_683,x:728.1,y:27}).wait(1).to({graphics:mask_4_graphics_684,x:730.325,y:27}).wait(1).to({graphics:mask_4_graphics_685,x:732.55,y:27}).wait(1).to({graphics:mask_4_graphics_686,x:734.8,y:27}).wait(1).to({graphics:mask_4_graphics_687,x:737.025,y:27}).wait(1).to({graphics:mask_4_graphics_688,x:739.275,y:27}).wait(1).to({graphics:mask_4_graphics_689,x:741.5,y:27}).wait(1).to({graphics:mask_4_graphics_690,x:743.725,y:27}).wait(1).to({graphics:mask_4_graphics_691,x:745.975,y:27}).wait(1).to({graphics:mask_4_graphics_692,x:748.2,y:27}).wait(1).to({graphics:mask_4_graphics_693,x:750.425,y:27}).wait(1).to({graphics:mask_4_graphics_694,x:752.675,y:27}).wait(1).to({graphics:mask_4_graphics_695,x:754.9,y:27}).wait(1).to({graphics:mask_4_graphics_696,x:757.125,y:27}).wait(1).to({graphics:mask_4_graphics_697,x:759.375,y:27}).wait(1).to({graphics:mask_4_graphics_698,x:761.6,y:27}).wait(1).to({graphics:mask_4_graphics_699,x:763.825,y:27}).wait(1).to({graphics:mask_4_graphics_700,x:766.075,y:27}).wait(1).to({graphics:mask_4_graphics_701,x:768.3,y:27}).wait(1).to({graphics:mask_4_graphics_702,x:770.55,y:27}).wait(1).to({graphics:mask_4_graphics_703,x:772.775,y:27}).wait(1).to({graphics:mask_4_graphics_704,x:775,y:27}).wait(1).to({graphics:mask_4_graphics_705,x:777.25,y:27}).wait(1).to({graphics:mask_4_graphics_706,x:779.475,y:27}).wait(1).to({graphics:mask_4_graphics_707,x:781.7,y:27}).wait(1).to({graphics:mask_4_graphics_708,x:783.925,y:27}).wait(1).to({graphics:mask_4_graphics_709,x:786.15,y:27}).wait(1).to({graphics:mask_4_graphics_710,x:788.375,y:27}).wait(1).to({graphics:mask_4_graphics_711,x:790.625,y:27}).wait(1).to({graphics:mask_4_graphics_712,x:792.85,y:27}).wait(1).to({graphics:mask_4_graphics_713,x:795.075,y:27}).wait(1).to({graphics:mask_4_graphics_714,x:797.325,y:27}).wait(1).to({graphics:mask_4_graphics_715,x:799.55,y:27}).wait(1).to({graphics:mask_4_graphics_716,x:801.8,y:27}).wait(1).to({graphics:mask_4_graphics_717,x:804.025,y:27}).wait(1).to({graphics:mask_4_graphics_718,x:806.25,y:27}).wait(1).to({graphics:mask_4_graphics_719,x:808.5,y:27}).wait(1).to({graphics:mask_4_graphics_720,x:810.725,y:27}).wait(1).to({graphics:mask_4_graphics_721,x:812.95,y:27}).wait(1).to({graphics:mask_4_graphics_722,x:815.2,y:27}).wait(1).to({graphics:mask_4_graphics_723,x:817.425,y:27}).wait(1).to({graphics:mask_4_graphics_724,x:819.65,y:27}).wait(1).to({graphics:mask_4_graphics_725,x:821.9,y:27}).wait(1).to({graphics:mask_4_graphics_726,x:824.125,y:27}).wait(1).to({graphics:mask_4_graphics_727,x:826.35,y:27}).wait(1).to({graphics:mask_4_graphics_728,x:828.6,y:27}).wait(1).to({graphics:mask_4_graphics_729,x:830.825,y:27}).wait(1).to({graphics:mask_4_graphics_730,x:833.075,y:27}).wait(1).to({graphics:mask_4_graphics_731,x:835.3,y:27}).wait(1).to({graphics:mask_4_graphics_732,x:837.525,y:27}).wait(1).to({graphics:mask_4_graphics_733,x:839.775,y:27}).wait(1).to({graphics:mask_4_graphics_734,x:542.0605,y:25.525}).wait(404).to({graphics:mask_4_graphics_1138,x:542.0605,y:25.525}).wait(1).to({graphics:null,x:0,y:0}).wait(15));

	// 图层_18
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("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AgKAFQgLAGgEAOQgEANAAAYQAAAXAFAOQAEAOAKAFQALAGARAAQASAAALgGgANQlvQgRgHgJgTQgJgSAAggQAAggAJgTQAJgSARgIQAQgHAYAAQAOAAALACQAKABAHADIAAAYIgTgGQgKgBgNAAQgRAAgLAFQgKAFgEAOQgFANAAAZQgBAWAGAOQAEANAKAGQALAGASgBQAMAAALgCQAKgBAJgDIAAAXIgLADIgQACIgQABQgYAAgQgIgAJjlnQgYAAgQgMQgQgNgIgaIgDgNIAAgLIAAgJQAAgZAKgTQAKgTAVgNIAQgFQAIgCAHgBIADAAQAcABASAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIACAfIADAbIgBAAIgZAAQgBAAAAgHIgDgTIgGAJIgGAHQgIAGgJADQgIADgLAAgAJQnvQgNAKgHARIgDAMIgBANIAAAGQAAARAGAMQAHANALAJIALAFIALABIAFAAQAvAAAAg5IAAgLQgBgWgHgPQgJgOgQgEIgFgBIgEAAIgBAAQgSAAgNAJgACLlvQgRgHgJgTQgIgSgBggQABggAIgTQAJgSARgIQARgHAYAAQAXAAARAHQARAIAJASQAJATAAAgQAAAggJASQgJATgRAHQgRAIgXAAQgYAAgRgIgADRmDQAJgFAFgOQAEgOAAgXQAAgYgFgNQgEgOgKgGQgLgFgRAAQgTAAgKAFQgKAGgEAOQgFANAAAYQAAAXAFAOQAFAOAJAFQALAGASAAQASAAALgGgAjSlnQgYAAgQgMQgQgNgIgaIgCgNIgBgLIAAgJQAAgZAKgTQAKgTAVgNIAQgFQAIgCAIgBIACAAQAbABATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAfIAFAbIgCAAIgYAAQgBAAgBgHIgEgTIgFAJIgGAHQgHAGgKADQgIADgLAAgAjlnvQgMAKgIARIgDAMIgBANIAAAGQAAARAGAMQAGANAMAJIALAFIALABIAFAAQAuAAAAg5IAAgLQABgWgJgPQgHgOgQgEIgGgBIgEAAIgBAAQgSAAgNAJgAmYlvQgQgHgJgTQgJgSAAggQAAggAJgTQAIgSARgIQAQgHAYAAQAVAAAMAGQANAGAHAKQAGAKADAMQACAMABAMIgBAIIgBALIhuAHQAAARAFALQAFAMAMAGQA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");
	this.shape_4.setTransform(880.75,121.55);
	this.shape_4._off = true;

	var maskedShapeInstanceList = [this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(620).to({_off:false},0).wait(518).to({_off:true},1).wait(15));

	// 图层_7 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_560 = new cjs.Graphics().p("AhdScIAAngICqAAIAAHgg");
	var mask_5_graphics_561 = new cjs.Graphics().p("AiTDwIAAnfIEoAAIAAHfg");
	var mask_5_graphics_562 = new cjs.Graphics().p("AjSDwIAAnfIGmAAIAAHfg");
	var mask_5_graphics_563 = new cjs.Graphics().p("AkRDwIAAnfIIkAAIAAHfg");
	var mask_5_graphics_564 = new cjs.Graphics().p("AlQDwIAAnfIKiAAIAAHfg");
	var mask_5_graphics_565 = new cjs.Graphics().p("AmPDwIAAnfIMgAAIAAHfg");
	var mask_5_graphics_566 = new cjs.Graphics().p("AnODwIAAnfIOeAAIAAHfg");
	var mask_5_graphics_567 = new cjs.Graphics().p("AoODwIAAnfIQdAAIAAHfg");
	var mask_5_graphics_568 = new cjs.Graphics().p("ApNDwIAAnfISbAAIAAHfg");
	var mask_5_graphics_569 = new cjs.Graphics().p("AqMDwIAAnfIUZAAIAAHfg");
	var mask_5_graphics_570 = new cjs.Graphics().p("ArLDwIAAnfIWXAAIAAHfg");
	var mask_5_graphics_571 = new cjs.Graphics().p("AsKDwIAAnfIYVAAIAAHfg");
	var mask_5_graphics_572 = new cjs.Graphics().p("AtJDwIAAnfIaTAAIAAHfg");
	var mask_5_graphics_573 = new cjs.Graphics().p("AuIScIAAngIcRAAIAAHgg");
	var mask_5_graphics_1138 = new cjs.Graphics().p("AuIScIAAngIcRAAIAAHgg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(560).to({graphics:mask_5_graphics_560,x:-9.375,y:118.05}).wait(1).to({graphics:mask_5_graphics_561,x:-3.9,y:212.05}).wait(1).to({graphics:mask_5_graphics_562,x:2.4,y:212.05}).wait(1).to({graphics:mask_5_graphics_563,x:8.7,y:212.05}).wait(1).to({graphics:mask_5_graphics_564,x:15,y:212.05}).wait(1).to({graphics:mask_5_graphics_565,x:21.3,y:212.05}).wait(1).to({graphics:mask_5_graphics_566,x:27.6,y:212.05}).wait(1).to({graphics:mask_5_graphics_567,x:33.925,y:212.05}).wait(1).to({graphics:mask_5_graphics_568,x:40.225,y:212.05}).wait(1).to({graphics:mask_5_graphics_569,x:46.525,y:212.05}).wait(1).to({graphics:mask_5_graphics_570,x:52.825,y:212.05}).wait(1).to({graphics:mask_5_graphics_571,x:59.125,y:212.05}).wait(1).to({graphics:mask_5_graphics_572,x:65.425,y:212.05}).wait(1).to({graphics:mask_5_graphics_573,x:71.7016,y:118.05}).wait(565).to({graphics:mask_5_graphics_1138,x:71.7016,y:118.05}).wait(1).to({graphics:null,x:0,y:0}).wait(15));

	// 图层_17
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("EgmTAQxQAOAAAJgFQAJgEAGgIQAGgIAEgNIhBiiIAcAAIAxCHIACAAIAviHIAaAAIg6CcQgIAVgIAOQgJAPgOAIQgPAIgXAAgA3xQGQgQgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAYAAQAYAAARAHQAQAIAJASQAJATAAAgQAAAggJASQgJATgQAHQgRAIgYAAQgYAAgRgIgA2rPyQAKgFAEgOQAEgOAAgXQAAgYgEgNQgFgOgKgGQgKgFgSAAQgSAAgKAFQgLAGgEAOQgFANABAYQAAAXAEAOQAFAOAKAFQALAGARAAQASAAALgGgA6qQGQgRgHgJgTQgJgSAAggQAAggAJgTQAJgSARgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAgQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgA5lPyQAKgFAFgOQAEgOAAgXQAAgYgFgNQgEgOgLgGQgKgFgSAAQgSAAgKAFQgKAGgFAOQgEANAAAYQAAAXAFAOQAEAOAKAFQALAGARAAQATAAAKgGgA/5QGQgQgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAYAAQAOAAAKACQALABAHADIAAAYIgTgGQgKgBgNAAQgRAAgLAFQgKAFgFAOQgEANAAAZQgBAWAFAOQAFANAKAGQALAGASgBQALAAALgCQALgBAJgDIAAAXIgMADIgPACIgQABQgYAAgRgIgAzzQMQgEgBgCgFQgCgEAAgIQAAgMAEgEQAFgEAKABQAKgBAFAEQAEAEAAAMQAAAIgCAEQgCAFgEABQgEABgHAAQgHAAgEgBgA1HQFQgJgJAAgSIAAjDIAaAAIAAC8QAAANADADQAEAEAIAAIAGAAIAGgBIAAAVIgHACIgKAAQgSAAgJgIgEgiNAQMIgRgBIgNgEIAAgVIAOACIARADIAQABQATAAAJgGQAKgFAAgOQAAgJgDgGQgDgGgHgDQgIgDgPgEQgSgEgKgFQgKgGgEgIQgEgKAAgNQAAgUAPgMQAPgMAcAAQAMAAAMACQALABAGACIgCAWQgHgCgKgCQgKgCgLAAQgRgBgJAGQgJAFAAANQAAAJADAEQACAFAHADQAHACAMADQATAEALAGQALAGAFAJQAFAJAAAQQAAAYgQAMQgQALgeAAIgRgBgA8SQLIAAhnQAAgMgDgJQgCgIgHgGQgHgEgNAAQgKAAgJACQgKADgHAGQgIAIgFAOIAABtIgaAAIAAjkIAaAAIAABZQAFgKAJgGQAIgFAKgDQAKgCAKAAQAVAAAMAHQAMAGAFAMQAFANgBAPIAABwgEgnbAQLIAAhnQAAgSgGgLQgHgKgSAAQgKAAgIACQgIACgGAHQgHAGgDALIAAByIgaAAIAAhnQAAgSgGgLQgGgKgSAAQgKAAgIACQgIACgGAHQgHAGgEAMIAABxIgaAAIAAiiIAaAAIAAAVQAIgOAMgFQAMgFAPAAQATAAAMAHQALAHAFAMQAFgKAIgGQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAGAFAMQAGANAAAPIAABwgAnxJsIAAjeIAaAAIAAAcQAFgOAMgIQAMgJAXAAQAbAAAPALQAOAKAGASQAFATAAAaQAAAWgFATQgGATgOAMQgPALgbAAQgXAAgMgIQgNgJgEgOIAABZgAnEGoQgLAHgFAOQgFAOABAUQgBASAFAOQAFAOALAIQALAIATAAQATgBAJgIQAKgKADgOQADgOgBgPQABgSgEgOQgDgOgJgIQgJgJgTAAQgTAAgLAIgAeAIrQgRgIgJgSQgJgSAAggQAAggAJgTQAJgTARgHQARgIAXABQAYgBARAIQARAHAIATQAJATAAAgQAAAggJASQgIASgRAIQgRAHgYAAQgXAAgRgHgAfFIXQAKgGAFgOQAEgNAAgXQAAgYgFgNQgEgOgLgGQgKgGgSAAQgSAAgKAGQgKAGgFAOQgEANAAAYQAAAXAFANQAEAOAKAGQALAGARAAQATAAAKgGgAaFIrQgQgIgJgSQgJgSAAggQAAggAJgTQAIgTARgHQAQgIAYABQAUAAANAFQANAHAHAKQAGAKADALQACAMAAAMIAAAIIgBALIhuAHQAAASAFALQAFAMALAFQALAGAUAAQAOAAANgEQAOgCAKgFIAAAYQgFADgJACIgTADQgKACgMgBQgYAAgRgHgAaQGmQgKAHgEAMQgEAMAAAQIBWgHQAAgMgDgKQgCgLgJgGQgIgHgRAAQgTAAgKAGgATRIyQgYAAgQgMQgQgNgIgZIgCgNIgBgLIAAgKQAAgZAKgTQALgSAUgOIAQgFQAIgCAIAAIACAAQAcAAASAdIAAgHIAAgBIABAAIAYAAIABAAIABABIAABWIAB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ABQgSAAgJgJgAY/BSQgKgEgFgMQgFgLAAgUIAAhbIgYAAIAAgVIAYAAIAAgmIAaAAIAAAmIAoAAIAAAVIgoAAIAABZQAAAMACAIQABAGAGADQAFACAJAAIAKAAIAIgBIAAAVIgJABIgJABQgSAAgLgEgAWvBVIgRgCIgNgCIAAgXIAOAEIARACIAQABQASAAAKgGQAJgFAAgOQAAgKgCgFQgDgFgIgDQgIgEgPgDQgSgFgKgFQgKgFgEgJQgEgJABgNQAAgUAOgMQAPgMAdAAQAMAAALACQALABAHACIgCAXQgHgDgKgCQgLgCgLAAQgRAAgIAFQgJAFAAAOQAAAHACAFQADAFAHADQAGADANACQASAEAMAGQALAFAFAJQAFAJAAAQQgBAYgPALQgQAMgeAAIgRgBgAREBSQgKgEgFgMQgFgLAAgUIAAhbIgYAAIAAgVIAYAAIAAgmIAaAAIAAAmIAoAAIAAAVIgoAAIAABZQAAAMACAIQABAGAGADQAFACAJAAIAKAAIAIgBIAAAVIgJABIgJABQgSAAgLgEgANnBVIgRgCIgNgCIAAgXIAOAEIARACIAQABQASAAAKgGQAJgFAAgOQAAgKgCgFQgDgFgIgDQgIgEgPgDQgSgFgKgFQgKgFgEgJQgEgJABgNQAAgUAOgMQAPgMAdAAQAMAAALACQALABAHACIgCAXQgHgDgKgCQgLgCgLAAQgRAAgIAFQgJAFAAAOQAAAHACAFQADAFAHADQAGADANACQASAEAMAGQALAFAFAJQAFAJAAAQQgBAYgPALQgQAMgeAAIgRgBgAMDBSQgLgEgFgMQgEgLAAgUIAAhbIgYAAIAAgVIAYAAIAAgmIAaAAIAAAmIAoAAIAAAVIgoAAIAABZQgBAMACAIQACAGAFADQAFACAKAAIAJAAIAJgBIAAAVIgJABIgKABQgRAAgLgEgACOBVIgRgCIgNgCIAAgXIAOAEIARACIAQABQASAAAKgGQAJgFAAgOQAAgKgCgFQgDgFgIgDQgIgEgPgDQgSgFgKgFQgKgFgEgJQgEgJABgNQAAgUAOgMQAPgMAdAAQAMAAALACQALABAHACIgCAXQgHgDgKgCQgLgCgLAAQgRAAgIAFQgJAFAAAOQAAAHACAFQADAFAHADQAGADANACQASAEAMAGQALAFAFAJQAFAJAAAQQgBAYg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");
	this.shape_5.setTransform(276.875,124.4);
	this.shape_5._off = true;

	var maskedShapeInstanceList = [this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(560).to({_off:false},0).wait(578).to({_off:true},1).wait(15));

	// 图层_6 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_479 = new cjs.Graphics().p("AhdPEIAAngICqAAIAAHgg");
	var mask_6_graphics_480 = new cjs.Graphics().p("AhvDwIAAnfIDfAAIAAHfg");
	var mask_6_graphics_481 = new cjs.Graphics().p("AiJDwIAAnfIETAAIAAHfg");
	var mask_6_graphics_482 = new cjs.Graphics().p("AijDwIAAnfIFHAAIAAHfg");
	var mask_6_graphics_483 = new cjs.Graphics().p("Ai+DwIAAnfIF9AAIAAHfg");
	var mask_6_graphics_484 = new cjs.Graphics().p("AjYDwIAAnfIGxAAIAAHfg");
	var mask_6_graphics_485 = new cjs.Graphics().p("AjyDwIAAnfIHlAAIAAHfg");
	var mask_6_graphics_486 = new cjs.Graphics().p("AkMDwIAAnfIIaAAIAAHfg");
	var mask_6_graphics_487 = new cjs.Graphics().p("AknDwIAAnfIJPAAIAAHfg");
	var mask_6_graphics_488 = new cjs.Graphics().p("AlBDwIAAnfIKDAAIAAHfg");
	var mask_6_graphics_489 = new cjs.Graphics().p("AlbDwIAAnfIK3AAIAAHfg");
	var mask_6_graphics_490 = new cjs.Graphics().p("Al2DwIAAnfILtAAIAAHfg");
	var mask_6_graphics_491 = new cjs.Graphics().p("AmQDwIAAnfIMhAAIAAHfg");
	var mask_6_graphics_492 = new cjs.Graphics().p("AmqDwIAAnfINVAAIAAHfg");
	var mask_6_graphics_493 = new cjs.Graphics().p("AnFDwIAAnfIOLAAIAAHfg");
	var mask_6_graphics_494 = new cjs.Graphics().p("AnfDwIAAnfIO/AAIAAHfg");
	var mask_6_graphics_495 = new cjs.Graphics().p("An5DwIAAnfIPzAAIAAHfg");
	var mask_6_graphics_496 = new cjs.Graphics().p("AoTDwIAAnfIQoAAIAAHfg");
	var mask_6_graphics_497 = new cjs.Graphics().p("AouDwIAAnfIRdAAIAAHfg");
	var mask_6_graphics_498 = new cjs.Graphics().p("ApIDwIAAnfISRAAIAAHfg");
	var mask_6_graphics_499 = new cjs.Graphics().p("ApiDwIAAnfITGAAIAAHfg");
	var mask_6_graphics_500 = new cjs.Graphics().p("Ap9DwIAAnfIT7AAIAAHfg");
	var mask_6_graphics_501 = new cjs.Graphics().p("AqXDwIAAnfIUvAAIAAHfg");
	var mask_6_graphics_502 = new cjs.Graphics().p("AqxDwIAAnfIVjAAIAAHfg");
	var mask_6_graphics_503 = new cjs.Graphics().p("ArLDwIAAnfIWYAAIAAHfg");
	var mask_6_graphics_504 = new cjs.Graphics().p("ArmDwIAAnfIXNAAIAAHfg");
	var mask_6_graphics_505 = new cjs.Graphics().p("AsBDwIAAnfIYCAAIAAHfg");
	var mask_6_graphics_506 = new cjs.Graphics().p("AsbDwIAAnfIY3AAIAAHfg");
	var mask_6_graphics_507 = new cjs.Graphics().p("As1DwIAAnfIZrAAIAAHfg");
	var mask_6_graphics_508 = new cjs.Graphics().p("AtPDwIAAnfIafAAIAAHfg");
	var mask_6_graphics_509 = new cjs.Graphics().p("AtqDwIAAnfIbVAAIAAHfg");
	var mask_6_graphics_510 = new cjs.Graphics().p("AuEDwIAAnfIcJAAIAAHfg");
	var mask_6_graphics_511 = new cjs.Graphics().p("AueDwIAAnfIc9AAIAAHfg");
	var mask_6_graphics_512 = new cjs.Graphics().p("Au5DwIAAnfIdyAAIAAHfg");
	var mask_6_graphics_513 = new cjs.Graphics().p("AvTDwIAAnfIenAAIAAHfg");
	var mask_6_graphics_514 = new cjs.Graphics().p("AvtDwIAAnfIfbAAIAAHfg");
	var mask_6_graphics_515 = new cjs.Graphics().p("AwIDwIAAnfMAgRAAAIAAHfg");
	var mask_6_graphics_516 = new cjs.Graphics().p("AwiDwIAAnfMAhFAAAIAAHfg");
	var mask_6_graphics_517 = new cjs.Graphics().p("Aw8DwIAAnfMAh5AAAIAAHfg");
	var mask_6_graphics_518 = new cjs.Graphics().p("AxWDwIAAnfMAitAAAIAAHfg");
	var mask_6_graphics_519 = new cjs.Graphics().p("AxxDwIAAnfMAjjAAAIAAHfg");
	var mask_6_graphics_520 = new cjs.Graphics().p("AyLDwIAAnfMAkXAAAIAAHfg");
	var mask_6_graphics_521 = new cjs.Graphics().p("AylDwIAAnfMAlLAAAIAAHfg");
	var mask_6_graphics_522 = new cjs.Graphics().p("AzADwIAAnfMAmAAAAIAAHfg");
	var mask_6_graphics_523 = new cjs.Graphics().p("AzaDwIAAnfMAm1AAAIAAHfg");
	var mask_6_graphics_524 = new cjs.Graphics().p("Az0DwIAAnfMAnpAAAIAAHfg");
	var mask_6_graphics_525 = new cjs.Graphics().p("A0ODwIAAnfMAodAAAIAAHfg");
	var mask_6_graphics_526 = new cjs.Graphics().p("A0pDwIAAnfMApTAAAIAAHfg");
	var mask_6_graphics_527 = new cjs.Graphics().p("A1DDwIAAnfMAqHAAAIAAHfg");
	var mask_6_graphics_528 = new cjs.Graphics().p("A1dDwIAAnfMAq7AAAIAAHfg");
	var mask_6_graphics_529 = new cjs.Graphics().p("A1dDwIAAnfMAq7AAAIAAHfg");
	var mask_6_graphics_530 = new cjs.Graphics().p("A1dDwIAAnfMAq7AAAIAAHfg");
	var mask_6_graphics_531 = new cjs.Graphics().p("A1dDwIAAnfMAq7AAAIAAHfg");
	var mask_6_graphics_532 = new cjs.Graphics().p("A1dDwIAAnfMAq7AAAIAAHfg");
	var mask_6_graphics_533 = new cjs.Graphics().p("A2JDwIAAnfMAsSAAAIAAHfg");
	var mask_6_graphics_534 = new cjs.Graphics().p("A20DwIAAnfMAtpAAAIAAHfg");
	var mask_6_graphics_535 = new cjs.Graphics().p("A3fDwIAAnfMAu/AAAIAAHfg");
	var mask_6_graphics_536 = new cjs.Graphics().p("A4KDwIAAnfMAwVAAAIAAHfg");
	var mask_6_graphics_537 = new cjs.Graphics().p("A41DwIAAnfMAxrAAAIAAHfg");
	var mask_6_graphics_538 = new cjs.Graphics().p("A5hDwIAAnfMAzCAAAIAAHfg");
	var mask_6_graphics_539 = new cjs.Graphics().p("A6MDwIAAnfMA0ZAAAIAAHfg");
	var mask_6_graphics_540 = new cjs.Graphics().p("A63DwIAAnfMA1vAAAIAAHfg");
	var mask_6_graphics_541 = new cjs.Graphics().p("A7iDwIAAnfMA3FAAAIAAHfg");
	var mask_6_graphics_542 = new cjs.Graphics().p("A8NDwIAAnfMA4bAAAIAAHfg");
	var mask_6_graphics_543 = new cjs.Graphics().p("A85DwIAAnfMA5yAAAIAAHfg");
	var mask_6_graphics_544 = new cjs.Graphics().p("A9kDwIAAnfMA7JAAAIAAHfg");
	var mask_6_graphics_545 = new cjs.Graphics().p("A+PDwIAAnfMA8fAAAIAAHfg");
	var mask_6_graphics_546 = new cjs.Graphics().p("A+6DwIAAnfMA91AAAIAAHfg");
	var mask_6_graphics_547 = new cjs.Graphics().p("A/lDwIAAnfMA/LAAAIAAHfg");
	var mask_6_graphics_548 = new cjs.Graphics().p("EggRADwIAAnfMBAiAAAIAAHfg");
	var mask_6_graphics_549 = new cjs.Graphics().p("Egg8ADwIAAnfMBB5AAAIAAHfg");
	var mask_6_graphics_550 = new cjs.Graphics().p("EghnADwIAAnfMBDPAAAIAAHfg");
	var mask_6_graphics_551 = new cjs.Graphics().p("EgiSADwIAAnfMBElAAAIAAHfg");
	var mask_6_graphics_552 = new cjs.Graphics().p("Egi9ADwIAAnfMBF7AAAIAAHfg");
	var mask_6_graphics_553 = new cjs.Graphics().p("EgjpADwIAAnfMBHSAAAIAAHfg");
	var mask_6_graphics_554 = new cjs.Graphics().p("EgkUADwIAAnfMBIpAAAIAAHfg");
	var mask_6_graphics_555 = new cjs.Graphics().p("Egk/ADwIAAnfMBJ/AAAIAAHfg");
	var mask_6_graphics_556 = new cjs.Graphics().p("EglqADwIAAnfMBLVAAAIAAHfg");
	var mask_6_graphics_557 = new cjs.Graphics().p("EgmVADwIAAnfMBMrAAAIAAHfg");
	var mask_6_graphics_558 = new cjs.Graphics().p("EgnAADwIAAnfMBOBAAAIAAHfg");
	var mask_6_graphics_559 = new cjs.Graphics().p("EgnsADwIAAnfMBPZAAAIAAHfg");
	var mask_6_graphics_560 = new cjs.Graphics().p("EgoXAPEIAAngMBQvAAAIAAHgg");
	var mask_6_graphics_1138 = new cjs.Graphics().p("EgoXAPEIAAngMBQvAAAIAAHgg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(479).to({graphics:mask_6_graphics_479,x:-9.375,y:96.45}).wait(1).to({graphics:mask_6_graphics_480,x:-7.575,y:168.85}).wait(1).to({graphics:mask_6_graphics_481,x:-4.95,y:168.85}).wait(1).to({graphics:mask_6_graphics_482,x:-2.3,y:168.85}).wait(1).to({graphics:mask_6_graphics_483,x:0.325,y:168.85}).wait(1).to({graphics:mask_6_graphics_484,x:2.95,y:168.85}).wait(1).to({graphics:mask_6_graphics_485,x:5.575,y:168.85}).wait(1).to({graphics:mask_6_graphics_486,x:8.2,y:168.85}).wait(1).to({graphics:mask_6_graphics_487,x:10.825,y:168.85}).wait(1).to({graphics:mask_6_graphics_488,x:13.475,y:168.85}).wait(1).to({graphics:mask_6_graphics_489,x:16.1,y:168.85}).wait(1).to({graphics:mask_6_graphics_490,x:18.725,y:168.85}).wait(1).to({graphics:mask_6_graphics_491,x:21.35,y:168.85}).wait(1).to({graphics:mask_6_graphics_492,x:23.975,y:168.85}).wait(1).to({graphics:mask_6_graphics_493,x:26.625,y:168.85}).wait(1).to({graphics:mask_6_graphics_494,x:29.25,y:168.85}).wait(1).to({graphics:mask_6_graphics_495,x:31.875,y:168.85}).wait(1).to({graphics:mask_6_graphics_496,x:34.5,y:168.85}).wait(1).to({graphics:mask_6_graphics_497,x:37.125,y:168.85}).wait(1).to({graphics:mask_6_graphics_498,x:39.75,y:168.85}).wait(1).to({graphics:mask_6_graphics_499,x:42.4,y:168.85}).wait(1).to({graphics:mask_6_graphics_500,x:45.025,y:168.85}).wait(1).to({graphics:mask_6_graphics_501,x:47.65,y:168.85}).wait(1).to({graphics:mask_6_graphics_502,x:50.275,y:168.85}).wait(1).to({graphics:mask_6_graphics_503,x:52.9,y:168.85}).wait(1).to({graphics:mask_6_graphics_504,x:55.525,y:168.85}).wait(1).to({graphics:mask_6_graphics_505,x:58.15,y:168.85}).wait(1).to({graphics:mask_6_graphics_506,x:60.775,y:168.85}).wait(1).to({graphics:mask_6_graphics_507,x:63.4,y:168.85}).wait(1).to({graphics:mask_6_graphics_508,x:66.025,y:168.85}).wait(1).to({graphics:mask_6_graphics_509,x:68.675,y:168.85}).wait(1).to({graphics:mask_6_graphics_510,x:71.3,y:168.85}).wait(1).to({graphics:mask_6_graphics_511,x:73.925,y:168.85}).wait(1).to({graphics:mask_6_graphics_512,x:76.55,y:168.85}).wait(1).to({graphics:mask_6_graphics_513,x:79.175,y:168.85}).wait(1).to({graphics:mask_6_graphics_514,x:81.8,y:168.85}).wait(1).to({graphics:mask_6_graphics_515,x:84.45,y:168.85}).wait(1).to({graphics:mask_6_graphics_516,x:87.075,y:168.85}).wait(1).to({graphics:mask_6_graphics_517,x:89.7,y:168.85}).wait(1).to({graphics:mask_6_graphics_518,x:92.325,y:168.85}).wait(1).to({graphics:mask_6_graphics_519,x:94.95,y:168.85}).wait(1).to({graphics:mask_6_graphics_520,x:97.6,y:168.85}).wait(1).to({graphics:mask_6_graphics_521,x:100.225,y:168.85}).wait(1).to({graphics:mask_6_graphics_522,x:102.85,y:168.85}).wait(1).to({graphics:mask_6_graphics_523,x:105.475,y:168.85}).wait(1).to({graphics:mask_6_graphics_524,x:108.1,y:168.85}).wait(1).to({graphics:mask_6_graphics_525,x:110.725,y:168.85}).wait(1).to({graphics:mask_6_graphics_526,x:113.375,y:168.85}).wait(1).to({graphics:mask_6_graphics_527,x:116,y:168.85}).wait(1).to({graphics:mask_6_graphics_528,x:118.625,y:168.85}).wait(1).to({graphics:mask_6_graphics_529,x:118.625,y:168.85}).wait(1).to({graphics:mask_6_graphics_530,x:118.625,y:168.85}).wait(1).to({graphics:mask_6_graphics_531,x:118.625,y:168.85}).wait(1).to({graphics:mask_6_graphics_532,x:118.625,y:168.85}).wait(1).to({graphics:mask_6_graphics_533,x:122.95,y:168.85}).wait(1).to({graphics:mask_6_graphics_534,x:127.275,y:168.85}).wait(1).to({graphics:mask_6_graphics_535,x:131.575,y:168.85}).wait(1).to({graphics:mask_6_graphics_536,x:135.9,y:168.85}).wait(1).to({graphics:mask_6_graphics_537,x:140.225,y:168.85}).wait(1).to({graphics:mask_6_graphics_538,x:144.55,y:168.85}).wait(1).to({graphics:mask_6_graphics_539,x:148.875,y:168.85}).wait(1).to({graphics:mask_6_graphics_540,x:153.175,y:168.85}).wait(1).to({graphics:mask_6_graphics_541,x:157.5,y:168.85}).wait(1).to({graphics:mask_6_graphics_542,x:161.825,y:168.85}).wait(1).to({graphics:mask_6_graphics_543,x:166.15,y:168.85}).wait(1).to({graphics:mask_6_graphics_544,x:170.45,y:168.85}).wait(1).to({graphics:mask_6_graphics_545,x:174.775,y:168.85}).wait(1).to({graphics:mask_6_graphics_546,x:179.1,y:168.85}).wait(1).to({graphics:mask_6_graphics_547,x:183.425,y:168.85}).wait(1).to({graphics:mask_6_graphics_548,x:187.75,y:168.85}).wait(1).to({graphics:mask_6_graphics_549,x:192.05,y:168.85}).wait(1).to({graphics:mask_6_graphics_550,x:196.375,y:168.85}).wait(1).to({graphics:mask_6_graphics_551,x:200.7,y:168.85}).wait(1).to({graphics:mask_6_graphics_552,x:205.025,y:168.85}).wait(1).to({graphics:mask_6_graphics_553,x:209.35,y:168.85}).wait(1).to({graphics:mask_6_graphics_554,x:213.65,y:168.85}).wait(1).to({graphics:mask_6_graphics_555,x:217.975,y:168.85}).wait(1).to({graphics:mask_6_graphics_556,x:222.3,y:168.85}).wait(1).to({graphics:mask_6_graphics_557,x:226.625,y:168.85}).wait(1).to({graphics:mask_6_graphics_558,x:230.925,y:168.85}).wait(1).to({graphics:mask_6_graphics_559,x:235.25,y:168.85}).wait(1).to({graphics:mask_6_graphics_560,x:239.5868,y:96.45}).wait(578).to({graphics:mask_6_graphics_1138,x:239.5868,y:96.45}).wait(1).to({graphics:null,x:0,y:0}).wait(15));

	// 图层_16
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("EgmTAQxQAOAAAJgFQAJgEAGgIQAGgIAEgNIhBiiIAcAAIAxCHIACAAIAviHIAaAAIg6CcQgIAVgIAOQgJAPgOAIQgPAIgXAAgA3xQGQgQgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAYAAQAYAAARAHQAQAIAJASQAJATAAAgQAAAggJASQgJATgQAHQgRAIgYAAQgYAAgRgIgA2rPyQAKgFAEgOQAEgOAAgXQAAgYgEgNQgFgOgKgGQgKgFgSAAQgSAAgKAFQgLAGgEAOQgFANABAYQAAAXAEAOQAFAOAKAFQALAGARAAQASAAALgGgA6qQGQgRgHgJgTQgJgSAAggQAAggAJgTQAJgSARgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAgQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgA5lPyQAKgFAFgOQAEgOAAgXQAAgYgFgNQgEgOgLgGQgKgFgSAAQgSAAgKAFQgKAGgFAOQgEANAAAYQAAAXAFAOQAEAOAKAFQALAGARAAQATAAAKgGgA/5QGQgQgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAYAAQAOAAAKACQALABAHADIAAAYIgTgGQgKgBgNAAQgRAAgLAFQgKAFgFAOQgEANAAAZQgBAWAFAOQAFANAKAGQALAGASgBQALAAALgCQALgBAJgDIAAAXIgMADIgPACIgQABQgYAAgRgIgAzzQMQgEgBgCgFQgCgEAAgIQAAgMAEgEQAFgEAKABQAKgBAFAEQAEAEAAAMQAAAIgCAEQgCAFgEABQgEABgHAAQgHAAgEgBgA1HQFQgJgJAAgSIAAjDIAaAAIAAC8QAAANADADQAEAEAIAAIAGAAIAGgBIAAAVIgHACIgKAAQgSAAgJgIgEgiNAQMIgRgBIgNgEIAAgVIAOACIARADIAQABQATAAAJgGQAKgFAAgOQAAgJgDgGQgDgGgHgDQgIgDgPgEQgSgEgKgFQgKgGgEgIQgEgKAAgNQAAgUAPgMQAPgMAcAAQAMAAAMACQALABAGACIgCAWQgHgCgKgCQgKgCgLAAQgRgBgJAGQgJAFAAANQAAAJADAEQACAFAHADQAHACAMADQATAEALAGQALAGAFAJQAFAJAAAQQAAAYgQAMQgQALgeAAIgRgBgA8SQLIAAhnQAAgMgDgJQgCgIgHgGQgHgEgNAAQgKAAgJACQgKADgHAGQgIAIgFAOIAABtIgaAAIAAjkIAaAAIAABZQAFgKAJgGQAIgFAKgDQAKgCAKAAQAVAAAMAHQAMAGAFAMQAFANgBAPIAABwgEgnbAQLIAAhnQAAgSgGgLQgHgKgSAAQgKAAgIACQgIACgGAHQgHAGgDALIAAByIgaAAIAAhnQAAgSgGgLQgGgKgSAAQgKAAgIACQgIACgGAHQgHAGgEAMIAABxIgaAAIAAiiIAaAAIAAAVQAIgOAMgFQAMgFAPAAQATAAAMAHQALAHAFAMQAFgKAIgGQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAGAFAMQAGANAAAPIAABwgAnxJsIAAjeIAaAAIAAAcQAFgOAMgIQAMgJAXAAQAbAAAPALQAOAKAGASQAFATAAAaQAAAWgFATQgGATgOAMQgPALgbAAQgXAAgMgIQgNgJgEgOIAABZgAnEGoQgLAHgFAOQgFAOABAUQgBASAFAOQAFAOALAIQALAIATAAQATgBAJgIQAKgKADgOQADgOgBgPQABgSgEgOQgDgOgJgIQgJgJgTAAQgTAAgLAIgAeAIrQgRgIgJgSQgJgSAAggQAAggAJgTQAJgTARgHQARgIAXABQAYgBARAIQARAHAIATQAJATAAAgQAAAggJASQgIASgRAIQgRAHgYAAQgXAAgRgHgAfFIXQAKgGAFgOQAEgNAAgXQAAgYgFgNQgEgOgLgGQgKgGgSAAQgSAAgKAGQgKAGgFAOQgEANAAAYQAAAXAFANQAEAOAKAGQALAGARAAQATAAAKgGgAaFIrQgQgIgJgSQgJgSAAggQAAggAJgTQAIgTARgHQAQgIAYABQAUAAANAFQANAHAHAKQAGAKADALQACAMAAAMIAAAIIgBALIhuAHQAAASAFALQAFAMALAFQALAGAUAAQAOAAANgEQAOgCAKgFIAAAYQgFADgJACIgTADQgKACgMgBQgYAAgRgHgAaQGmQgKAHgEAMQgEAMAAAQIBWgHQAAgMgDgKQgCgLgJgGQgIgHgRAAQgTAAgKAGgATRIyQgYAAgQgMQgQgNgIgZIgCgNIgBgLIAAgKQAAgZAKgTQALgSAUgOIAQgFQAIgCAIAAIACAAQAcAAASAdIAAgHIAAgBIABAAIAYAAIABAAIABABIAABWIAB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ABQgSAAgJgJgAY/BSQgKgEgFgMQgFgLAAgUIAAhbIgYAAIAAgVIAYAAIAAgmIAaAAIAAAmIAoAAIAAAVIgoAAIAABZQAAAMACAIQABAGAGADQAFACAJAAIAKAAIAIgBIAAAVIgJABIgJABQgSAAgLgEgAWvBVIgRgCIgNgCIAAgXIAOAEIARACIAQABQASAAAKgGQAJgFAAgOQAAgKgCgFQgDgFgIgDQgIgEgPgDQgSgFgKgFQgKgFgEgJQgEgJABgNQAAgUAOgMQAPgMAdAAQAMAAALACQALABAHACIgCAXQgHgDgKgCQgLgCgLAAQgRAAgIAFQgJAFAAAOQAAAHACAFQADAFAHADQAGADANACQASAEAMAGQALAFAFAJQAFAJAAAQQgBAYgPALQgQAMgeAAIgRgBgAREBSQgKgEgFgMQgFgLAAgUIAAhbIgYAAIAAgVIAYAAIAAgmIAaAAIAAAmIAoAAIAAAVIgoAAIAABZQAAAMACAIQABAGAGADQAFACAJAAIAKAAIAIgBIAAAVIgJABIgJABQgSAAgLgEgANnBVIgRgCIgNgCIAAgXIAOAEIARACIAQABQASAAAKgGQAJgFAAgOQAAgKgCgFQgDgFgIgDQgIgEgPgDQgSgFgKgFQgKgFgEgJQgEgJABgNQAAgUAOgMQAPgMAdAAQAMAAALACQALABAHACIgCAXQgHgDgKgCQgLgCgLAAQgRAAgIAFQgJAFAAAOQAAAHACAFQADAFAHADQAGADANACQASAEAMAGQALAFAFAJQAFAJAAAQQgBAYgPALQgQAMgeAAIgRgBgAMDBSQgLgEgFgMQgEgLAAgUIAAhbIgYAAIAAgVIAYAAIAAgmIAaAAIAAAmIAoAAIAAAVIgoAAIAABZQgBAMACAIQACAGAFADQAFACAKAAIAJAAIAJgBIAAAVIgJABIgKABQgRAAgLgEgACOBVIgRgCIgNgCIAAgXIAOAEIARACIAQABQASAAAKgGQAJgFAAgOQAAgKgCgFQgDgFgIgDQgIgEgPgDQgSgFgKgFQgKgFgEgJQgEgJABgNQAAgUAOgMQAPgMAdAAQAMAAALACQALABAHACIgCAXQgHgDgKgCQgLgCgLAAQgRAAgIAFQgJAFAAAOQAAAHACAFQADAFAHADQAGADANACQASAEAMAGQALAFAFAJQAFAJAAAQQgBAYg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");
	this.shape_6.setTransform(276.875,124.4);
	this.shape_6._off = true;

	var maskedShapeInstanceList = [this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(479).to({_off:false},0).wait(659).to({_off:true},1).wait(15));

	// 图层_5 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_367 = new cjs.Graphics().p("AhULQIAAnhICqAAIAAHhg");
	var mask_7_graphics_368 = new cjs.Graphics().p("AhwDwIAAngIDhAAIAAHgg");
	var mask_7_graphics_369 = new cjs.Graphics().p("AiNDwIAAngIEbAAIAAHgg");
	var mask_7_graphics_370 = new cjs.Graphics().p("AipDwIAAngIFTAAIAAHgg");
	var mask_7_graphics_371 = new cjs.Graphics().p("AjFDwIAAngIGLAAIAAHgg");
	var mask_7_graphics_372 = new cjs.Graphics().p("AjhDwIAAngIHDAAIAAHgg");
	var mask_7_graphics_373 = new cjs.Graphics().p("Aj9DwIAAngIH7AAIAAHgg");
	var mask_7_graphics_374 = new cjs.Graphics().p("AkZDwIAAngIIzAAIAAHgg");
	var mask_7_graphics_375 = new cjs.Graphics().p("Ak1DwIAAngIJrAAIAAHgg");
	var mask_7_graphics_376 = new cjs.Graphics().p("AlRDwIAAngIKjAAIAAHgg");
	var mask_7_graphics_377 = new cjs.Graphics().p("AltDwIAAngILbAAIAAHgg");
	var mask_7_graphics_378 = new cjs.Graphics().p("AmJDwIAAngIMTAAIAAHgg");
	var mask_7_graphics_379 = new cjs.Graphics().p("AmlDwIAAngINLAAIAAHgg");
	var mask_7_graphics_380 = new cjs.Graphics().p("AnBDwIAAngIODAAIAAHgg");
	var mask_7_graphics_381 = new cjs.Graphics().p("AndDwIAAngIO7AAIAAHgg");
	var mask_7_graphics_382 = new cjs.Graphics().p("An5DwIAAngIPzAAIAAHgg");
	var mask_7_graphics_383 = new cjs.Graphics().p("AoVDwIAAngIQsAAIAAHgg");
	var mask_7_graphics_384 = new cjs.Graphics().p("AoxDwIAAngIRkAAIAAHgg");
	var mask_7_graphics_385 = new cjs.Graphics().p("ApNDwIAAngISbAAIAAHgg");
	var mask_7_graphics_386 = new cjs.Graphics().p("ApqDwIAAngITVAAIAAHgg");
	var mask_7_graphics_387 = new cjs.Graphics().p("AqGDwIAAngIUNAAIAAHgg");
	var mask_7_graphics_388 = new cjs.Graphics().p("AqGDwIAAngIUNAAIAAHgg");
	var mask_7_graphics_389 = new cjs.Graphics().p("AqGDwIAAngIUNAAIAAHgg");
	var mask_7_graphics_390 = new cjs.Graphics().p("AqGDwIAAngIUNAAIAAHgg");
	var mask_7_graphics_391 = new cjs.Graphics().p("AqGDwIAAngIUNAAIAAHgg");
	var mask_7_graphics_392 = new cjs.Graphics().p("AqiDwIAAngIVFAAIAAHgg");
	var mask_7_graphics_393 = new cjs.Graphics().p("Aq+DwIAAngIV9AAIAAHgg");
	var mask_7_graphics_394 = new cjs.Graphics().p("AraDwIAAngIW1AAIAAHgg");
	var mask_7_graphics_395 = new cjs.Graphics().p("Ar2DwIAAngIXtAAIAAHgg");
	var mask_7_graphics_396 = new cjs.Graphics().p("AsSDwIAAngIYlAAIAAHgg");
	var mask_7_graphics_397 = new cjs.Graphics().p("AsuDwIAAngIZdAAIAAHgg");
	var mask_7_graphics_398 = new cjs.Graphics().p("AtKDwIAAngIaVAAIAAHgg");
	var mask_7_graphics_399 = new cjs.Graphics().p("AtnDwIAAngIbPAAIAAHgg");
	var mask_7_graphics_400 = new cjs.Graphics().p("AuDDwIAAngIcHAAIAAHgg");
	var mask_7_graphics_401 = new cjs.Graphics().p("AufDwIAAngIc/AAIAAHgg");
	var mask_7_graphics_402 = new cjs.Graphics().p("Au7DwIAAngId3AAIAAHgg");
	var mask_7_graphics_403 = new cjs.Graphics().p("AvXDwIAAngIevAAIAAHgg");
	var mask_7_graphics_404 = new cjs.Graphics().p("AvzDwIAAngIfnAAIAAHgg");
	var mask_7_graphics_405 = new cjs.Graphics().p("AwPDwIAAngMAgfAAAIAAHgg");
	var mask_7_graphics_406 = new cjs.Graphics().p("AwrDwIAAngMAhXAAAIAAHgg");
	var mask_7_graphics_407 = new cjs.Graphics().p("AxIDwIAAngMAiRAAAIAAHgg");
	var mask_7_graphics_408 = new cjs.Graphics().p("AxkDwIAAngMAjJAAAIAAHgg");
	var mask_7_graphics_409 = new cjs.Graphics().p("AyADwIAAngMAkBAAAIAAHgg");
	var mask_7_graphics_410 = new cjs.Graphics().p("AycDwIAAngMAk5AAAIAAHgg");
	var mask_7_graphics_411 = new cjs.Graphics().p("AycDwIAAngMAk5AAAIAAHgg");
	var mask_7_graphics_412 = new cjs.Graphics().p("AycDwIAAngMAk5AAAIAAHgg");
	var mask_7_graphics_413 = new cjs.Graphics().p("AycDwIAAngMAk5AAAIAAHgg");
	var mask_7_graphics_414 = new cjs.Graphics().p("AycDwIAAngMAk5AAAIAAHgg");
	var mask_7_graphics_415 = new cjs.Graphics().p("AycDwIAAngMAk5AAAIAAHgg");
	var mask_7_graphics_416 = new cjs.Graphics().p("AycDwIAAngMAk5AAAIAAHgg");
	var mask_7_graphics_417 = new cjs.Graphics().p("AycDwIAAngMAk5AAAIAAHgg");
	var mask_7_graphics_418 = new cjs.Graphics().p("AycDwIAAngMAk5AAAIAAHgg");
	var mask_7_graphics_419 = new cjs.Graphics().p("AycDwIAAngMAk5AAAIAAHgg");
	var mask_7_graphics_420 = new cjs.Graphics().p("AycDwIAAngMAk5AAAIAAHgg");
	var mask_7_graphics_421 = new cjs.Graphics().p("AycDwIAAngMAk5AAAIAAHgg");
	var mask_7_graphics_422 = new cjs.Graphics().p("AycDwIAAngMAk5AAAIAAHgg");
	var mask_7_graphics_423 = new cjs.Graphics().p("AycDwIAAngMAk5AAAIAAHgg");
	var mask_7_graphics_424 = new cjs.Graphics().p("AycDwIAAngMAk5AAAIAAHgg");
	var mask_7_graphics_425 = new cjs.Graphics().p("AycDwIAAngMAk5AAAIAAHgg");
	var mask_7_graphics_426 = new cjs.Graphics().p("AycDwIAAngMAk5AAAIAAHgg");
	var mask_7_graphics_427 = new cjs.Graphics().p("AycDwIAAngMAk5AAAIAAHgg");
	var mask_7_graphics_428 = new cjs.Graphics().p("AycDwIAAngMAk5AAAIAAHgg");
	var mask_7_graphics_429 = new cjs.Graphics().p("AzBDwIAAngMAmEAAAIAAHgg");
	var mask_7_graphics_430 = new cjs.Graphics().p("AznDwIAAngMAnPAAAIAAHgg");
	var mask_7_graphics_431 = new cjs.Graphics().p("A0NDwIAAngMAobAAAIAAHgg");
	var mask_7_graphics_432 = new cjs.Graphics().p("A0yDwIAAngMApmAAAIAAHgg");
	var mask_7_graphics_433 = new cjs.Graphics().p("A1YDwIAAngMAqxAAAIAAHgg");
	var mask_7_graphics_434 = new cjs.Graphics().p("A1+DwIAAngMAr9AAAIAAHgg");
	var mask_7_graphics_435 = new cjs.Graphics().p("A2jDwIAAngMAtHAAAIAAHgg");
	var mask_7_graphics_436 = new cjs.Graphics().p("A3JDwIAAngMAuTAAAIAAHgg");
	var mask_7_graphics_437 = new cjs.Graphics().p("A3uDwIAAngMAveAAAIAAHgg");
	var mask_7_graphics_438 = new cjs.Graphics().p("A4UDwIAAngMAwpAAAIAAHgg");
	var mask_7_graphics_439 = new cjs.Graphics().p("A46DwIAAngMAx1AAAIAAHgg");
	var mask_7_graphics_440 = new cjs.Graphics().p("A5fDwIAAngMAy/AAAIAAHgg");
	var mask_7_graphics_441 = new cjs.Graphics().p("A6FDwIAAngMA0LAAAIAAHgg");
	var mask_7_graphics_442 = new cjs.Graphics().p("A6qDwIAAngMA1VAAAIAAHgg");
	var mask_7_graphics_443 = new cjs.Graphics().p("A7QDwIAAngMA2hAAAIAAHgg");
	var mask_7_graphics_444 = new cjs.Graphics().p("A72DwIAAngMA3tAAAIAAHgg");
	var mask_7_graphics_445 = new cjs.Graphics().p("A8bDwIAAngMA43AAAIAAHgg");
	var mask_7_graphics_446 = new cjs.Graphics().p("A9BDwIAAngMA6DAAAIAAHgg");
	var mask_7_graphics_447 = new cjs.Graphics().p("A9mDwIAAngMA7NAAAIAAHgg");
	var mask_7_graphics_448 = new cjs.Graphics().p("A+MDwIAAngMA8ZAAAIAAHgg");
	var mask_7_graphics_449 = new cjs.Graphics().p("A+yDwIAAngMA9lAAAIAAHgg");
	var mask_7_graphics_450 = new cjs.Graphics().p("A/XDwIAAngMA+vAAAIAAHgg");
	var mask_7_graphics_451 = new cjs.Graphics().p("A/9DwIAAngMA/7AAAIAAHgg");
	var mask_7_graphics_452 = new cjs.Graphics().p("EggiADwIAAngMBBGAAAIAAHgg");
	var mask_7_graphics_453 = new cjs.Graphics().p("EghIADwIAAngMBCRAAAIAAHgg");
	var mask_7_graphics_454 = new cjs.Graphics().p("EghuADwIAAngMBDdAAAIAAHgg");
	var mask_7_graphics_455 = new cjs.Graphics().p("EgiTADwIAAngMBEnAAAIAAHgg");
	var mask_7_graphics_456 = new cjs.Graphics().p("Egi5ADwIAAngMBFzAAAIAAHgg");
	var mask_7_graphics_457 = new cjs.Graphics().p("EgjeADwIAAngMBG+AAAIAAHgg");
	var mask_7_graphics_458 = new cjs.Graphics().p("EgkEADwIAAngMBIJAAAIAAHgg");
	var mask_7_graphics_459 = new cjs.Graphics().p("EgkqADwIAAngMBJVAAAIAAHgg");
	var mask_7_graphics_460 = new cjs.Graphics().p("EglPADwIAAngMBKfAAAIAAHgg");
	var mask_7_graphics_461 = new cjs.Graphics().p("Egl1ADwIAAngMBLrAAAIAAHgg");
	var mask_7_graphics_462 = new cjs.Graphics().p("EgmaADwIAAngMBM1AAAIAAHgg");
	var mask_7_graphics_463 = new cjs.Graphics().p("EgnAADwIAAngMBOBAAAIAAHgg");
	var mask_7_graphics_464 = new cjs.Graphics().p("EgnmADwIAAngMBPNAAAIAAHgg");
	var mask_7_graphics_465 = new cjs.Graphics().p("EgoLADwIAAngMBQYAAAIAAHgg");
	var mask_7_graphics_466 = new cjs.Graphics().p("EgoxADwIAAngMBRjAAAIAAHgg");
	var mask_7_graphics_467 = new cjs.Graphics().p("EgpWADwIAAngMBStAAAIAAHgg");
	var mask_7_graphics_468 = new cjs.Graphics().p("Egp8ADwIAAngMBT5AAAIAAHgg");
	var mask_7_graphics_469 = new cjs.Graphics().p("EgqiADwIAAngMBVFAAAIAAHgg");
	var mask_7_graphics_470 = new cjs.Graphics().p("EgrHADwIAAngMBWPAAAIAAHgg");
	var mask_7_graphics_471 = new cjs.Graphics().p("EgrtADwIAAngMBXbAAAIAAHgg");
	var mask_7_graphics_472 = new cjs.Graphics().p("EgsTADwIAAngMBYnAAAIAAHgg");
	var mask_7_graphics_473 = new cjs.Graphics().p("Egs4ALQIAAnhMBZxAAAIAAHhg");
	var mask_7_graphics_1138 = new cjs.Graphics().p("Egs4ALQIAAnhMBZxAAAIAAHhg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(367).to({graphics:mask_7_graphics_367,x:-7.75,y:71.975}).wait(1).to({graphics:mask_7_graphics_368,x:-4.95,y:119.9}).wait(1).to({graphics:mask_7_graphics_369,x:-2.125,y:119.9}).wait(1).to({graphics:mask_7_graphics_370,x:0.675,y:119.9}).wait(1).to({graphics:mask_7_graphics_371,x:3.475,y:119.9}).wait(1).to({graphics:mask_7_graphics_372,x:6.275,y:119.9}).wait(1).to({graphics:mask_7_graphics_373,x:9.1,y:119.9}).wait(1).to({graphics:mask_7_graphics_374,x:11.9,y:119.9}).wait(1).to({graphics:mask_7_graphics_375,x:14.7,y:119.9}).wait(1).to({graphics:mask_7_graphics_376,x:17.5,y:119.9}).wait(1).to({graphics:mask_7_graphics_377,x:20.325,y:119.9}).wait(1).to({graphics:mask_7_graphics_378,x:23.125,y:119.9}).wait(1).to({graphics:mask_7_graphics_379,x:25.925,y:119.9}).wait(1).to({graphics:mask_7_graphics_380,x:28.725,y:119.9}).wait(1).to({graphics:mask_7_graphics_381,x:31.525,y:119.9}).wait(1).to({graphics:mask_7_graphics_382,x:34.35,y:119.9}).wait(1).to({graphics:mask_7_graphics_383,x:37.15,y:119.9}).wait(1).to({graphics:mask_7_graphics_384,x:39.95,y:119.9}).wait(1).to({graphics:mask_7_graphics_385,x:42.75,y:119.9}).wait(1).to({graphics:mask_7_graphics_386,x:45.575,y:119.9}).wait(1).to({graphics:mask_7_graphics_387,x:48.375,y:119.9}).wait(1).to({graphics:mask_7_graphics_388,x:48.375,y:119.9}).wait(1).to({graphics:mask_7_graphics_389,x:48.375,y:119.9}).wait(1).to({graphics:mask_7_graphics_390,x:48.375,y:119.9}).wait(1).to({graphics:mask_7_graphics_391,x:48.375,y:119.9}).wait(1).to({graphics:mask_7_graphics_392,x:51.175,y:119.9}).wait(1).to({graphics:mask_7_graphics_393,x:54,y:119.9}).wait(1).to({graphics:mask_7_graphics_394,x:56.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_395,x:59.625,y:119.9}).wait(1).to({graphics:mask_7_graphics_396,x:62.425,y:119.9}).wait(1).to({graphics:mask_7_graphics_397,x:65.25,y:119.9}).wait(1).to({graphics:mask_7_graphics_398,x:68.05,y:119.9}).wait(1).to({graphics:mask_7_graphics_399,x:70.875,y:119.9}).wait(1).to({graphics:mask_7_graphics_400,x:73.675,y:119.9}).wait(1).to({graphics:mask_7_graphics_401,x:76.5,y:119.9}).wait(1).to({graphics:mask_7_graphics_402,x:79.3,y:119.9}).wait(1).to({graphics:mask_7_graphics_403,x:82.125,y:119.9}).wait(1).to({graphics:mask_7_graphics_404,x:84.925,y:119.9}).wait(1).to({graphics:mask_7_graphics_405,x:87.75,y:119.9}).wait(1).to({graphics:mask_7_graphics_406,x:90.55,y:119.9}).wait(1).to({graphics:mask_7_graphics_407,x:93.375,y:119.9}).wait(1).to({graphics:mask_7_graphics_408,x:96.175,y:119.9}).wait(1).to({graphics:mask_7_graphics_409,x:99,y:119.9}).wait(1).to({graphics:mask_7_graphics_410,x:101.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_411,x:101.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_412,x:101.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_413,x:101.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_414,x:101.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_415,x:101.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_416,x:101.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_417,x:101.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_418,x:101.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_419,x:101.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_420,x:101.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_421,x:101.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_422,x:101.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_423,x:101.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_424,x:101.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_425,x:101.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_426,x:101.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_427,x:101.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_428,x:101.8,y:119.9}).wait(1).to({graphics:mask_7_graphics_429,x:105.55,y:119.9}).wait(1).to({graphics:mask_7_graphics_430,x:109.325,y:119.9}).wait(1).to({graphics:mask_7_graphics_431,x:113.075,y:119.9}).wait(1).to({graphics:mask_7_graphics_432,x:116.85,y:119.9}).wait(1).to({graphics:mask_7_graphics_433,x:120.6,y:119.9}).wait(1).to({graphics:mask_7_graphics_434,x:124.375,y:119.9}).wait(1).to({graphics:mask_7_graphics_435,x:128.125,y:119.9}).wait(1).to({graphics:mask_7_graphics_436,x:131.875,y:119.9}).wait(1).to({graphics:mask_7_graphics_437,x:135.65,y:119.9}).wait(1).to({graphics:mask_7_graphics_438,x:139.4,y:119.9}).wait(1).to({graphics:mask_7_graphics_439,x:143.175,y:119.9}).wait(1).to({graphics:mask_7_graphics_440,x:146.925,y:119.9}).wait(1).to({graphics:mask_7_graphics_441,x:150.7,y:119.9}).wait(1).to({graphics:mask_7_graphics_442,x:154.45,y:119.9}).wait(1).to({graphics:mask_7_graphics_443,x:158.2,y:119.9}).wait(1).to({graphics:mask_7_graphics_444,x:161.975,y:119.9}).wait(1).to({graphics:mask_7_graphics_445,x:165.725,y:119.9}).wait(1).to({graphics:mask_7_graphics_446,x:169.5,y:119.9}).wait(1).to({graphics:mask_7_graphics_447,x:173.25,y:119.9}).wait(1).to({graphics:mask_7_graphics_448,x:177,y:119.9}).wait(1).to({graphics:mask_7_graphics_449,x:180.775,y:119.9}).wait(1).to({graphics:mask_7_graphics_450,x:184.525,y:119.9}).wait(1).to({graphics:mask_7_graphics_451,x:188.3,y:119.9}).wait(1).to({graphics:mask_7_graphics_452,x:192.05,y:119.9}).wait(1).to({graphics:mask_7_graphics_453,x:195.825,y:119.9}).wait(1).to({graphics:mask_7_graphics_454,x:199.575,y:119.9}).wait(1).to({graphics:mask_7_graphics_455,x:203.325,y:119.9}).wait(1).to({graphics:mask_7_graphics_456,x:207.1,y:119.9}).wait(1).to({graphics:mask_7_graphics_457,x:210.85,y:119.9}).wait(1).to({graphics:mask_7_graphics_458,x:214.625,y:119.9}).wait(1).to({graphics:mask_7_graphics_459,x:218.375,y:119.9}).wait(1).to({graphics:mask_7_graphics_460,x:222.125,y:119.9}).wait(1).to({graphics:mask_7_graphics_461,x:225.9,y:119.9}).wait(1).to({graphics:mask_7_graphics_462,x:229.65,y:119.9}).wait(1).to({graphics:mask_7_graphics_463,x:233.425,y:119.9}).wait(1).to({graphics:mask_7_graphics_464,x:237.175,y:119.9}).wait(1).to({graphics:mask_7_graphics_465,x:240.95,y:119.9}).wait(1).to({graphics:mask_7_graphics_466,x:244.7,y:119.9}).wait(1).to({graphics:mask_7_graphics_467,x:248.45,y:119.9}).wait(1).to({graphics:mask_7_graphics_468,x:252.225,y:119.9}).wait(1).to({graphics:mask_7_graphics_469,x:255.975,y:119.9}).wait(1).to({graphics:mask_7_graphics_470,x:259.75,y:119.9}).wait(1).to({graphics:mask_7_graphics_471,x:263.5,y:119.9}).wait(1).to({graphics:mask_7_graphics_472,x:267.275,y:119.9}).wait(1).to({graphics:mask_7_graphics_473,x:271.0236,y:71.975}).wait(665).to({graphics:mask_7_graphics_1138,x:271.0236,y:71.975}).wait(1).to({graphics:null,x:0,y:0}).wait(15));

	// 图层_15
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("EgmTAQxQAOAAAJgFQAJgEAGgIQAGgIAEgNIhBiiIAcAAIAxCHIACAAIAviHIAaAAIg6CcQgIAVgIAOQgJAPgOAIQgPAIgXAAgA3xQGQgQgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAYAAQAYAAARAHQAQAIAJASQAJATAAAgQAAAggJASQgJATgQAHQgRAIgYAAQgYAAgRgIgA2rPyQAKgFAEgOQAEgOAAgXQAAgYgEgNQgFgOgKgGQgKgFgSAAQgSAAgKAFQgLAGgEAOQgFANABAYQAAAXAEAOQAFAOAKAFQALAGARAAQASAAALgGgA6qQGQgRgHgJgTQgJgSAAggQAAggAJgTQAJgSARgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAgQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgA5lPyQAKgFAFgOQAEgOAAgXQAAgYgFgNQgEgOgLgGQgKgFgSAAQgSAAgKAFQgKAGgFAOQgEANAAAYQAAAXAFAOQAEAOAKAFQALAGARAAQATAAAKgGgA/5QGQgQgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAYAAQAOAAAKACQALABAHADIAAAYIgTgGQgKgBgNAAQgRAAgLAFQgKAFgFAOQgEANAAAZQgBAWAFAOQAFANAKAGQALAGASgBQALAAALgCQALgBAJgDIAAAXIgMADIgPACIgQABQgYAAgRgIgAzzQMQgEgBgCgFQgCgEAAgIQAAgMAEgEQAFgEAKABQAKgBAFAEQAEAEAAAMQAAAIgCAEQgCAFgEABQgEABgHAAQgHAAgEgBgA1HQFQgJgJAAgSIAAjDIAaAAIAAC8QAAANADADQAEAEAIAAIAGAAIAGgBIAAAVIgHACIgKAAQgSAAgJgIgEgiNAQMIgRgBIgNgEIAAgVIAOACIARADIAQABQATAAAJgGQAKgFAAgOQAAgJgDgGQgDgGgHgDQgIgDgPgEQgSgEgKgFQgKgGgEgIQgEgKAAgNQAAgUAPgMQAPgMAcAAQAMAAAMACQALABAGACIgCAWQgHgCgKgCQgKgCgLAAQgRgBgJAGQgJAFAAANQAAAJADAEQACAFAHADQAHACAMADQATAEALAGQALAGAFAJQAFAJAAAQQAAAYgQAMQgQALgeAAIgRgBgA8SQLIAAhnQAAgMgDgJQgCgIgHgGQgHgEgNAAQgKAAgJACQgKADgHAGQgIAIgFAOIAABtIgaAAIAAjkIAaAAIAABZQAFgKAJgGQAIgFAKgDQAKgCAKAAQAVAAAMAHQAMAGAFAMQAFANgBAPIAABwgEgnbAQLIAAhnQAAgSgGgLQgHgKgSAAQgKAAgIACQgIACgGAHQgHAGgDALIAAByIgaAAIAAhnQAAgSgGgLQgGgKgSAAQgKAAgIACQgIACgGAHQgHAGgEAMIAABxIgaAAIAAiiIAaAAIAAAVQAIgOAMgFQAMgFAPAAQATAAAMAHQALAHAFAMQAFgKAIgGQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAGAFAMQAGANAAAPIAABwgAnxJsIAAjeIAaAAIAAAcQAFgOAMgIQAMgJAXAAQAbAAAPALQAOAKAGASQAFATAAAaQAAAWgFATQgGATgOAMQgPALgbAAQgXAAgMgIQgNgJgEgOIAABZgAnEGoQgLAHgFAOQgFAOABAUQgBASAFAOQAFAOALAIQALAIATAAQATgBAJgIQAKgKADgOQADgOgBgPQABgSgEgOQgDgOgJgIQgJgJgTAAQgTAAgLAIgAeAIrQgRgIgJgSQgJgSAAggQAAggAJgTQAJgTARgHQARgIAXABQAYgBARAIQARAHAIATQAJATAAAgQAAAggJASQgIASgRAIQgRAHgYAAQgXAAgRgHgAfFIXQAKgGAFgOQAEgNAAgXQAAgYgFgNQgEgOgLgGQgKgGgSAAQgSAAgKAGQgKAGgFAOQgEANAAAYQAAAXAFANQAEAOAKAGQALAGARAAQATAAAKgGgAaFIrQgQgIgJgSQgJgSAAggQAAggAJgTQAIgTARgHQAQgIAYABQAUAAANAFQANAHAHAKQAGAKADALQACAMAAAMIAAAIIgBALIhuAHQAAASAFALQAFAMALAFQALAGAUAAQAOAAANgEQAOgCAKgFIAAAYQgFADgJACIgTADQgKACgMgBQgYAAgRgHgAaQGmQgKAHgEAMQgEAMAAAQIBWgHQAAgMgDgKQgCgLgJgGQgIgHgRAAQgTAAgKAGgATRIyQgYAAgQgMQgQgNgIgZIgCgNIgBgLIAAgKQAAgZAKgTQALgSAUgOIAQgFQAIgCAIAAIACAAQAcAAASAdIAAgHIAAgBIABAAIAYAAIABAAIABABIAABWIAB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ABQgSAAgJgJgAY/BSQgKgEgFgMQgFgLAAgUIAAhbIgYAAIAAgVIAYAAIAAgmIAaAAIAAAmIAoAAIAAAVIgoAAIAABZQAAAMACAIQABAGAGADQAFACAJAAIAKAAIAIgBIAAAVIgJABIgJABQgSAAgLgEgAWvBVIgRgCIgNgCIAAgXIAOAEIARACIAQABQASAAAKgGQAJgFAAgOQAAgKgCgFQgDgFgIgDQgIgEgPgDQgSgFgKgFQgKgFgEgJQgEgJABgNQAAgUAOgMQAPgMAdAAQAMAAALACQALABAHACIgCAXQgHgDgKgCQgLgCgLAAQgRAAgIAFQgJAFAAAOQAAAHACAFQADAFAHADQAGADANACQASAEAMAGQALAFAFAJQAFAJAAAQQgBAYgPALQgQAMgeAAIgRgBgAREBSQgKgEgFgMQgFgLAAgUIAAhbIgYAAIAAgVIAYAAIAAgmIAaAAIAAAmIAoAAIAAAVIgoAAIAABZQAAAMACAIQABAGAGADQAFACAJAAIAKAAIAIgBIAAAVIgJABIgJABQgSAAgLgEgANnBVIgRgCIgNgCIAAgXIAOAEIARACIAQABQASAAAKgGQAJgFAAgOQAAgKgCgFQgDgFgIgDQgIgEgPgDQgSgFgKgFQgKgFgEgJQgEgJABgNQAAgUAOgMQAPgMAdAAQAMAAALACQALABAHACIgCAXQgHgDgKgCQgLgCgLAAQgRAAgIAFQgJAFAAAOQAAAHACAFQADAFAHADQAGADANACQASAEAMAGQALAFAFAJQAFAJAAAQQgBAYgPALQgQAMgeAAIgRgBgAMDBSQgLgEgFgMQgEgLAAgUIAAhbIgYAAIAAgVIAYAAIAAgmIAaAAIAAAmIAoAAIAAAVIgoAAIAABZQgBAMACAIQACAGAFADQAFACAKAAIAJAAIAJgBIAAAVIgJABIgKABQgRAAgLgEgACOBVIgRgCIgNgCIAAgXIAOAEIARACIAQABQASAAAKgGQAJgFAAgOQAAgKgCgFQgDgFgIgDQgIgEgPgDQgSgFgKgFQgKgFgEgJQgEgJABgNQAAgUAOgMQAPgMAdAAQAMAAALACQALABAHACIgCAXQgHgDgKgCQgLgCgLAAQgRAAgIAFQgJAFAAAOQAAAHACAFQADAFAHADQAGADANACQASAEAMAGQALAFAFAJQAFAJAAAQQgBAYg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");
	this.shape_7.setTransform(276.875,124.4);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(367).to({_off:false},0).wait(771).to({_off:true},1).wait(15));

	// 图层_4 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_257 = new cjs.Graphics().p("AhUHbIAAngICqAAIAAHgg");
	var mask_8_graphics_258 = new cjs.Graphics().p("Ah2DwIAAnfIDtAAIAAHfg");
	var mask_8_graphics_259 = new cjs.Graphics().p("AiYDwIAAnfIExAAIAAHfg");
	var mask_8_graphics_260 = new cjs.Graphics().p("Ai6DwIAAnfIF1AAIAAHfg");
	var mask_8_graphics_261 = new cjs.Graphics().p("AjcDwIAAnfIG5AAIAAHfg");
	var mask_8_graphics_262 = new cjs.Graphics().p("Aj+DwIAAnfIH9AAIAAHfg");
	var mask_8_graphics_263 = new cjs.Graphics().p("AkgDwIAAnfIJBAAIAAHfg");
	var mask_8_graphics_264 = new cjs.Graphics().p("AlCDwIAAnfIKFAAIAAHfg");
	var mask_8_graphics_265 = new cjs.Graphics().p("AlkDwIAAnfILJAAIAAHfg");
	var mask_8_graphics_266 = new cjs.Graphics().p("AmGDwIAAnfIMNAAIAAHfg");
	var mask_8_graphics_267 = new cjs.Graphics().p("AmoDwIAAnfINRAAIAAHfg");
	var mask_8_graphics_268 = new cjs.Graphics().p("AnKDwIAAnfIOVAAIAAHfg");
	var mask_8_graphics_269 = new cjs.Graphics().p("AnsDwIAAnfIPZAAIAAHfg");
	var mask_8_graphics_270 = new cjs.Graphics().p("AoODwIAAnfIQdAAIAAHfg");
	var mask_8_graphics_271 = new cjs.Graphics().p("AowDwIAAnfIRhAAIAAHfg");
	var mask_8_graphics_272 = new cjs.Graphics().p("ApSDwIAAnfISlAAIAAHfg");
	var mask_8_graphics_273 = new cjs.Graphics().p("Ap0DwIAAnfITpAAIAAHfg");
	var mask_8_graphics_274 = new cjs.Graphics().p("AqWDwIAAnfIUtAAIAAHfg");
	var mask_8_graphics_275 = new cjs.Graphics().p("Aq3DwIAAnfIVwAAIAAHfg");
	var mask_8_graphics_276 = new cjs.Graphics().p("ArZDwIAAnfIWzAAIAAHfg");
	var mask_8_graphics_277 = new cjs.Graphics().p("Ar8DwIAAnfIX5AAIAAHfg");
	var mask_8_graphics_278 = new cjs.Graphics().p("AseDwIAAnfIY9AAIAAHfg");
	var mask_8_graphics_279 = new cjs.Graphics().p("AtADwIAAnfIaAAAIAAHfg");
	var mask_8_graphics_280 = new cjs.Graphics().p("AtiDwIAAnfIbFAAIAAHfg");
	var mask_8_graphics_281 = new cjs.Graphics().p("AuEDwIAAnfIcIAAIAAHfg");
	var mask_8_graphics_282 = new cjs.Graphics().p("AumDwIAAnfIdNAAIAAHfg");
	var mask_8_graphics_283 = new cjs.Graphics().p("AvIDwIAAnfIeRAAIAAHfg");
	var mask_8_graphics_284 = new cjs.Graphics().p("AvpDwIAAnfIfTAAIAAHfg");
	var mask_8_graphics_285 = new cjs.Graphics().p("AwLDwIAAnfMAgXAAAIAAHfg");
	var mask_8_graphics_286 = new cjs.Graphics().p("AwtDwIAAnfMAhbAAAIAAHfg");
	var mask_8_graphics_287 = new cjs.Graphics().p("AxPDwIAAnfMAifAAAIAAHfg");
	var mask_8_graphics_288 = new cjs.Graphics().p("AxxDwIAAnfMAjjAAAIAAHfg");
	var mask_8_graphics_289 = new cjs.Graphics().p("AyTDwIAAnfMAknAAAIAAHfg");
	var mask_8_graphics_290 = new cjs.Graphics().p("Ay1DwIAAnfMAlrAAAIAAHfg");
	var mask_8_graphics_291 = new cjs.Graphics().p("AzXDwIAAnfMAmvAAAIAAHfg");
	var mask_8_graphics_292 = new cjs.Graphics().p("Az5DwIAAnfMAnzAAAIAAHfg");
	var mask_8_graphics_293 = new cjs.Graphics().p("A0bDwIAAnfMAo3AAAIAAHfg");
	var mask_8_graphics_294 = new cjs.Graphics().p("A09DwIAAnfMAp7AAAIAAHfg");
	var mask_8_graphics_295 = new cjs.Graphics().p("A1fDwIAAnfMAq/AAAIAAHfg");
	var mask_8_graphics_296 = new cjs.Graphics().p("A2BDwIAAnfMAsDAAAIAAHfg");
	var mask_8_graphics_304 = new cjs.Graphics().p("A2BDwIAAnfMAsDAAAIAAHfg");
	var mask_8_graphics_305 = new cjs.Graphics().p("A2cDwIAAnfMAs5AAAIAAHfg");
	var mask_8_graphics_306 = new cjs.Graphics().p("A23DwIAAnfMAtvAAAIAAHfg");
	var mask_8_graphics_307 = new cjs.Graphics().p("A3SDwIAAnfMAulAAAIAAHfg");
	var mask_8_graphics_308 = new cjs.Graphics().p("A3tDwIAAnfMAvbAAAIAAHfg");
	var mask_8_graphics_309 = new cjs.Graphics().p("A4IDwIAAnfMAwRAAAIAAHfg");
	var mask_8_graphics_310 = new cjs.Graphics().p("A4jDwIAAnfMAxHAAAIAAHfg");
	var mask_8_graphics_311 = new cjs.Graphics().p("A4+DwIAAnfMAx9AAAIAAHfg");
	var mask_8_graphics_312 = new cjs.Graphics().p("A5ZDwIAAnfMAyzAAAIAAHfg");
	var mask_8_graphics_313 = new cjs.Graphics().p("A50DwIAAnfMAzpAAAIAAHfg");
	var mask_8_graphics_314 = new cjs.Graphics().p("A6PDwIAAnfMA0fAAAIAAHfg");
	var mask_8_graphics_315 = new cjs.Graphics().p("A6qDwIAAnfMA1VAAAIAAHfg");
	var mask_8_graphics_316 = new cjs.Graphics().p("A7FDwIAAnfMA2LAAAIAAHfg");
	var mask_8_graphics_317 = new cjs.Graphics().p("A7hDwIAAnfMA3DAAAIAAHfg");
	var mask_8_graphics_318 = new cjs.Graphics().p("A78DwIAAnfMA35AAAIAAHfg");
	var mask_8_graphics_319 = new cjs.Graphics().p("A8XDwIAAnfMA4vAAAIAAHfg");
	var mask_8_graphics_320 = new cjs.Graphics().p("A8yDwIAAnfMA5lAAAIAAHfg");
	var mask_8_graphics_321 = new cjs.Graphics().p("A9NDwIAAnfMA6bAAAIAAHfg");
	var mask_8_graphics_322 = new cjs.Graphics().p("A9oDwIAAnfMA7RAAAIAAHfg");
	var mask_8_graphics_323 = new cjs.Graphics().p("A+DDwIAAnfMA8HAAAIAAHfg");
	var mask_8_graphics_324 = new cjs.Graphics().p("A+eDwIAAnfMA89AAAIAAHfg");
	var mask_8_graphics_325 = new cjs.Graphics().p("A+5DwIAAnfMA9zAAAIAAHfg");
	var mask_8_graphics_326 = new cjs.Graphics().p("A/UDwIAAnfMA+pAAAIAAHfg");
	var mask_8_graphics_327 = new cjs.Graphics().p("A/vDwIAAnfMA/fAAAIAAHfg");
	var mask_8_graphics_328 = new cjs.Graphics().p("EggKADwIAAnfMBAVAAAIAAHfg");
	var mask_8_graphics_329 = new cjs.Graphics().p("EgglADwIAAnfMBBLAAAIAAHfg");
	var mask_8_graphics_330 = new cjs.Graphics().p("EghAADwIAAnfMBCBAAAIAAHfg");
	var mask_8_graphics_331 = new cjs.Graphics().p("EghbADwIAAnfMBC3AAAIAAHfg");
	var mask_8_graphics_332 = new cjs.Graphics().p("Egh2ADwIAAnfMBDtAAAIAAHfg");
	var mask_8_graphics_333 = new cjs.Graphics().p("EgiRADwIAAnfMBEjAAAIAAHfg");
	var mask_8_graphics_334 = new cjs.Graphics().p("EgisADwIAAnfMBFZAAAIAAHfg");
	var mask_8_graphics_335 = new cjs.Graphics().p("EgjHADwIAAnfMBGPAAAIAAHfg");
	var mask_8_graphics_340 = new cjs.Graphics().p("EgjHADwIAAnfMBGPAAAIAAHfg");
	var mask_8_graphics_341 = new cjs.Graphics().p("EgjlADwIAAnfMBHKAAAIAAHfg");
	var mask_8_graphics_342 = new cjs.Graphics().p("EgkCADwIAAnfMBIFAAAIAAHfg");
	var mask_8_graphics_343 = new cjs.Graphics().p("EgkfADwIAAnfMBI/AAAIAAHfg");
	var mask_8_graphics_344 = new cjs.Graphics().p("Egk9ADwIAAnfMBJ7AAAIAAHfg");
	var mask_8_graphics_345 = new cjs.Graphics().p("EglaADwIAAnfMBK1AAAIAAHfg");
	var mask_8_graphics_346 = new cjs.Graphics().p("Egl3ADwIAAnfMBLvAAAIAAHfg");
	var mask_8_graphics_347 = new cjs.Graphics().p("EgmVADwIAAnfMBMrAAAIAAHfg");
	var mask_8_graphics_348 = new cjs.Graphics().p("EgmyADwIAAnfMBNlAAAIAAHfg");
	var mask_8_graphics_349 = new cjs.Graphics().p("EgnPADwIAAnfMBOfAAAIAAHfg");
	var mask_8_graphics_350 = new cjs.Graphics().p("EgnsADwIAAnfMBPZAAAIAAHfg");
	var mask_8_graphics_351 = new cjs.Graphics().p("EgoKADwIAAnfMBQVAAAIAAHfg");
	var mask_8_graphics_352 = new cjs.Graphics().p("EgonAHbIAAngMBRPAAAIAAHgg");
	var mask_8_graphics_1138 = new cjs.Graphics().p("EgonAHbIAAngMBRPAAAIAAHgg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(257).to({graphics:mask_8_graphics_257,x:-7.75,y:47.525}).wait(1).to({graphics:mask_8_graphics_258,x:-4.35,y:71}).wait(1).to({graphics:mask_8_graphics_259,x:-0.95,y:71}).wait(1).to({graphics:mask_8_graphics_260,x:2.425,y:71}).wait(1).to({graphics:mask_8_graphics_261,x:5.825,y:71}).wait(1).to({graphics:mask_8_graphics_262,x:9.225,y:71}).wait(1).to({graphics:mask_8_graphics_263,x:12.625,y:71}).wait(1).to({graphics:mask_8_graphics_264,x:16.025,y:71}).wait(1).to({graphics:mask_8_graphics_265,x:19.4,y:71}).wait(1).to({graphics:mask_8_graphics_266,x:22.8,y:71}).wait(1).to({graphics:mask_8_graphics_267,x:26.2,y:71}).wait(1).to({graphics:mask_8_graphics_268,x:29.6,y:71}).wait(1).to({graphics:mask_8_graphics_269,x:33,y:71}).wait(1).to({graphics:mask_8_graphics_270,x:36.375,y:71}).wait(1).to({graphics:mask_8_graphics_271,x:39.775,y:71}).wait(1).to({graphics:mask_8_graphics_272,x:43.175,y:71}).wait(1).to({graphics:mask_8_graphics_273,x:46.575,y:71}).wait(1).to({graphics:mask_8_graphics_274,x:49.975,y:71}).wait(1).to({graphics:mask_8_graphics_275,x:53.35,y:71}).wait(1).to({graphics:mask_8_graphics_276,x:56.75,y:71}).wait(1).to({graphics:mask_8_graphics_277,x:60.125,y:71}).wait(1).to({graphics:mask_8_graphics_278,x:63.525,y:71}).wait(1).to({graphics:mask_8_graphics_279,x:66.9,y:71}).wait(1).to({graphics:mask_8_graphics_280,x:70.3,y:71}).wait(1).to({graphics:mask_8_graphics_281,x:73.7,y:71}).wait(1).to({graphics:mask_8_graphics_282,x:77.1,y:71}).wait(1).to({graphics:mask_8_graphics_283,x:80.5,y:71}).wait(1).to({graphics:mask_8_graphics_284,x:83.875,y:71}).wait(1).to({graphics:mask_8_graphics_285,x:87.275,y:71}).wait(1).to({graphics:mask_8_graphics_286,x:90.675,y:71}).wait(1).to({graphics:mask_8_graphics_287,x:94.075,y:71}).wait(1).to({graphics:mask_8_graphics_288,x:97.475,y:71}).wait(1).to({graphics:mask_8_graphics_289,x:100.85,y:71}).wait(1).to({graphics:mask_8_graphics_290,x:104.25,y:71}).wait(1).to({graphics:mask_8_graphics_291,x:107.65,y:71}).wait(1).to({graphics:mask_8_graphics_292,x:111.05,y:71}).wait(1).to({graphics:mask_8_graphics_293,x:114.45,y:71}).wait(1).to({graphics:mask_8_graphics_294,x:117.825,y:71}).wait(1).to({graphics:mask_8_graphics_295,x:121.225,y:71}).wait(1).to({graphics:mask_8_graphics_296,x:124.625,y:71}).wait(8).to({graphics:mask_8_graphics_304,x:124.625,y:71}).wait(1).to({graphics:mask_8_graphics_305,x:127.325,y:71}).wait(1).to({graphics:mask_8_graphics_306,x:130.025,y:71}).wait(1).to({graphics:mask_8_graphics_307,x:132.75,y:71}).wait(1).to({graphics:mask_8_graphics_308,x:135.45,y:71}).wait(1).to({graphics:mask_8_graphics_309,x:138.15,y:71}).wait(1).to({graphics:mask_8_graphics_310,x:140.85,y:71}).wait(1).to({graphics:mask_8_graphics_311,x:143.55,y:71}).wait(1).to({graphics:mask_8_graphics_312,x:146.275,y:71}).wait(1).to({graphics:mask_8_graphics_313,x:148.975,y:71}).wait(1).to({graphics:mask_8_graphics_314,x:151.675,y:71}).wait(1).to({graphics:mask_8_graphics_315,x:154.375,y:71}).wait(1).to({graphics:mask_8_graphics_316,x:157.075,y:71}).wait(1).to({graphics:mask_8_graphics_317,x:159.8,y:71}).wait(1).to({graphics:mask_8_graphics_318,x:162.5,y:71}).wait(1).to({graphics:mask_8_graphics_319,x:165.2,y:71}).wait(1).to({graphics:mask_8_graphics_320,x:167.9,y:71}).wait(1).to({graphics:mask_8_graphics_321,x:170.6,y:71}).wait(1).to({graphics:mask_8_graphics_322,x:173.3,y:71}).wait(1).to({graphics:mask_8_graphics_323,x:176.025,y:71}).wait(1).to({graphics:mask_8_graphics_324,x:178.725,y:71}).wait(1).to({graphics:mask_8_graphics_325,x:181.425,y:71}).wait(1).to({graphics:mask_8_graphics_326,x:184.125,y:71}).wait(1).to({graphics:mask_8_graphics_327,x:186.825,y:71}).wait(1).to({graphics:mask_8_graphics_328,x:189.55,y:71}).wait(1).to({graphics:mask_8_graphics_329,x:192.25,y:71}).wait(1).to({graphics:mask_8_graphics_330,x:194.95,y:71}).wait(1).to({graphics:mask_8_graphics_331,x:197.65,y:71}).wait(1).to({graphics:mask_8_graphics_332,x:200.35,y:71}).wait(1).to({graphics:mask_8_graphics_333,x:203.075,y:71}).wait(1).to({graphics:mask_8_graphics_334,x:205.775,y:71}).wait(1).to({graphics:mask_8_graphics_335,x:208.475,y:71}).wait(5).to({graphics:mask_8_graphics_340,x:208.475,y:71}).wait(1).to({graphics:mask_8_graphics_341,x:211.4,y:71}).wait(1).to({graphics:mask_8_graphics_342,x:214.35,y:71}).wait(1).to({graphics:mask_8_graphics_343,x:217.275,y:71}).wait(1).to({graphics:mask_8_graphics_344,x:220.2,y:71}).wait(1).to({graphics:mask_8_graphics_345,x:223.125,y:71}).wait(1).to({graphics:mask_8_graphics_346,x:226.075,y:71}).wait(1).to({graphics:mask_8_graphics_347,x:229,y:71}).wait(1).to({graphics:mask_8_graphics_348,x:231.925,y:71}).wait(1).to({graphics:mask_8_graphics_349,x:234.85,y:71}).wait(1).to({graphics:mask_8_graphics_350,x:237.775,y:71}).wait(1).to({graphics:mask_8_graphics_351,x:240.725,y:71}).wait(1).to({graphics:mask_8_graphics_352,x:243.6587,y:47.525}).wait(786).to({graphics:mask_8_graphics_1138,x:243.6587,y:47.525}).wait(1).to({graphics:null,x:0,y:0}).wait(15));

	// 图层_14
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("EgmTAQxQAOAAAJgFQAJgEAGgIQAGgIAEgNIhBiiIAcAAIAxCHIACAAIAviHIAaAAIg6CcQgIAVgIAOQgJAPgOAIQgPAIgXAAgA3xQGQgQgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAYAAQAYAAARAHQAQAIAJASQAJATAAAgQAAAggJASQgJATgQAHQgRAIgYAAQgYAAgRgIgA2rPyQAKgFAEgOQAEgOAAgXQAAgYgEgNQgFgOgKgGQgKgFgSAAQgSAAgKAFQgLAGgEAOQgFANABAYQAAAXAEAOQAFAOAKAFQALAGARAAQASAAALgGgA6qQGQgRgHgJgTQgJgSAAggQAAggAJgTQAJgSARgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAgQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgA5lPyQAKgFAFgOQAEgOAAgXQAAgYgFgNQgEgOgLgGQgKgFgSAAQgSAAgKAFQgKAGgFAOQgEANAAAYQAAAXAFAOQAEAOAKAFQALAGARAAQATAAAKgGgA/5QGQgQgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAYAAQAOAAAKACQALABAHADIAAAYIgTgGQgKgBgNAAQgRAAgLAFQgKAFgFAOQgEANAAAZQgBAWAFAOQAFANAKAGQALAGASgBQALAAALgCQALgBAJgDIAAAXIgMADIgPACIgQABQgYAAgRgIgAzzQMQgEgBgCgFQgCgEAAgIQAAgMAEgEQAFgEAKABQAKgBAFAEQAEAEAAAMQAAAIgCAEQgCAFgEABQgEABgHAAQgHAAgEgBgA1HQFQgJgJAAgSIAAjDIAaAAIAAC8QAAANADADQAEAEAIAAIAGAAIAGgBIAAAVIgHACIgKAAQgSAAgJgIgEgiNAQMIgRgBIgNgEIAAgVIAOACIARADIAQABQATAAAJgGQAKgFAAgOQAAgJgDgGQgDgGgHgDQgIgDgPgEQgSgEgKgFQgKgGgEgIQgEgKAAgNQAAgUAPgMQAPgMAcAAQAMAAAMACQALABAGACIgCAWQgHgCgKgCQgKgCgLAAQgRgBgJAGQgJAFAAANQAAAJADAEQACAFAHADQAHACAMADQATAEALAGQALAGAFAJQAFAJAAAQQAAAYgQAMQgQALgeAAIgRgBgA8SQLIAAhnQAAgMgDgJQgCgIgHgGQgHgEgNAAQgKAAgJACQgKADgHAGQgIAIgFAOIAABtIgaAAIAAjkIAaAAIAABZQAFgKAJgGQAIgFAKgDQAKgCAKAAQAVAAAMAHQAMAGAFAMQAFANgBAPIAABwgEgnbAQLIAAhnQAAgSgGgLQgHgKgSAAQgKAAgIACQgIACgGAHQgHAGgDALIAAByIgaAAIAAhnQAAgSgGgLQgGgKgSAAQgKAAgIACQgIACgGAHQgHAGgEAMIAABxIgaAAIAAiiIAaAAIAAAVQAIgOAMgFQAMgFAPAAQATAAAMAHQALAHAFAMQAFgKAIgGQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAGAFAMQAGANAAAPIAABwgAnxJsIAAjeIAaAAIAAAcQAFgOAMgIQAMgJAXAAQAbAAAPALQAOAKAGASQAFATAAAaQAAAWgFATQgGATgOAMQgPALgbAAQgXAAgMgIQgNgJgEgOIAABZgAnEGoQgLAHgFAOQgFAOABAUQgBASAFAOQAFAOALAIQALAIATAAQATgBAJgIQAKgKADgOQADgOgBgPQABgSgEgOQgDgOgJgIQgJgJgTAAQgTAAgLAIgAeAIrQgRgIgJgSQgJgSAAggQAAggAJgTQAJgTARgHQARgIAXABQAYgBARAIQARAHAIATQAJATAAAgQAAAggJASQgIASgRAIQgRAHgYAAQgXAAgRgHgAfFIXQAKgGAFgOQAEgNAAgXQAAgYgFgNQgEgOgLgGQgKgGgSAAQgSAAgKAGQgKAGgFAOQgEANAAAYQAAAXAFANQAEAOAKAGQALAGARAAQATAAAKgGgAaFIrQgQgIgJgSQgJgSAAggQAAggAJgTQAIgTARgHQAQgIAYABQAUAAANAFQANAHAHAKQAGAKADALQACAMAAAMIAAAIIgBALIhuAHQAAASAFALQAFAMALAFQALAGAUAAQAOAAANgEQAOgCAKgFIAAAYQgFADgJACIgTADQgKACgMgBQgYAAgRgHgAaQGmQgKAHgEAMQgEAMAAAQIBWgHQAAgMgDgKQgCgLgJgGQgIgHgRAAQgTAAgKAGgATRIyQgYAAgQgMQgQgNgIgZIgCgNIgBgLIAAgKQAAgZAKgTQALgSAUgOIAQgFQAIgCAIAAIACAAQAcAAASAdIAAgHIAAgBIABAAIAYAAIABAAIABABIAABWIAB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ABQgSAAgJgJgAY/BSQgKgEgFgMQgFgLAAgUIAAhbIgYAAIAAgVIAYAAIAAgmIAaAAIAAAmIAoAAIAAAVIgoAAIAABZQAAAMACAIQABAGAGADQAFACAJAAIAKAAIAIgBIAAAVIgJABIgJABQgSAAgLgEgAWvBVIgRgCIgNgCIAAgXIAOAEIARACIAQABQASAAAKgGQAJgFAAgOQAAgKgCgFQgDgFgIgDQgIgEgPgDQgSgFgKgFQgKgFgEgJQgEgJABgNQAAgUAOgMQAPgMAdAAQAMAAALACQALABAHACIgCAXQgHgDgKgCQgLgCgLAAQgRAAgIAFQgJAFAAAOQAAAHACAFQADAFAHADQAGADANACQASAEAMAGQALAFAFAJQAFAJAAAQQgBAYgPALQgQAMgeAAIgRgBgAREBSQgKgEgFgMQgFgLAAgUIAAhbIgYAAIAAgVIAYAAIAAgmIAaAAIAAAmIAoAAIAAAVIgoAAIAABZQAAAMACAIQABAGAGADQAFACAJAAIAKAAIAIgBIAAAVIgJABIgJABQgSAAgLgEgANnBVIgRgCIgNgCIAAgXIAOAEIARACIAQABQASAAAKgGQAJgFAAgOQAAgKgCgFQgDgFgIgDQgIgEgPgDQgSgFgKgFQgKgFgEgJQgEgJABgNQAAgUAOgMQAPgMAdAAQAMAAALACQALABAHACIgCAXQgHgDgKgCQgLgCgLAAQgRAAgIAFQgJAFAAAOQAAAHACAFQADAFAHADQAGADANACQASAEAMAGQALAFAFAJQAFAJAAAQQgBAYgPALQgQAMgeAAIgRgBgAMDBSQgLgEgFgMQgEgLAAgUIAAhbIgYAAIAAgVIAYAAIAAgmIAaAAIAAAmIAoAAIAAAVIgoAAIAABZQgBAMACAIQACAGAFADQAFACAKAAIAJAAIAJgBIAAAVIgJABIgKABQgRAAgLgEgACOBVIgRgCIgNgCIAAgXIAOAEIARACIAQABQASAAAKgGQAJgFAAgOQAAgKgCgFQgDgFgIgDQgIgEgPgDQgSgFgKgFQgKgFgEgJQgEgJABgNQAAgUAOgMQAPgMAdAAQAMAAALACQALABAHACIgCAXQgHgDgKgCQgLgCgLAAQgRAAgIAFQgJAFAAAOQAAAHACAFQADAFAHADQAGADANACQASAEAMAGQALAFAFAJQAFAJAAAQQgBAYg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");
	this.shape_8.setTransform(276.875,124.4);
	this.shape_8._off = true;

	var maskedShapeInstanceList = [this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(257).to({_off:false},0).wait(881).to({_off:true},1).wait(15));

	// 图层_3 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_136 = new cjs.Graphics().p("AhUDwIAAnfICqAAIAAHfg");
	var mask_9_graphics_137 = new cjs.Graphics().p("AhuDwIAAnfIDeAAIAAHfg");
	var mask_9_graphics_138 = new cjs.Graphics().p("AiIDwIAAnfIERAAIAAHfg");
	var mask_9_graphics_139 = new cjs.Graphics().p("AiiDwIAAnfIFFAAIAAHfg");
	var mask_9_graphics_140 = new cjs.Graphics().p("Ai8DwIAAnfIF5AAIAAHfg");
	var mask_9_graphics_141 = new cjs.Graphics().p("AjWDwIAAnfIGtAAIAAHfg");
	var mask_9_graphics_142 = new cjs.Graphics().p("AjwDwIAAnfIHhAAIAAHfg");
	var mask_9_graphics_143 = new cjs.Graphics().p("AkKDwIAAnfIIVAAIAAHfg");
	var mask_9_graphics_144 = new cjs.Graphics().p("AkkDwIAAnfIJJAAIAAHfg");
	var mask_9_graphics_145 = new cjs.Graphics().p("Ak+DwIAAnfIJ9AAIAAHfg");
	var mask_9_graphics_146 = new cjs.Graphics().p("AlYDwIAAnfIKxAAIAAHfg");
	var mask_9_graphics_147 = new cjs.Graphics().p("AlyDwIAAnfILlAAIAAHfg");
	var mask_9_graphics_148 = new cjs.Graphics().p("AmMDwIAAnfIMZAAIAAHfg");
	var mask_9_graphics_149 = new cjs.Graphics().p("AmmDwIAAnfINNAAIAAHfg");
	var mask_9_graphics_150 = new cjs.Graphics().p("AnADwIAAnfIOBAAIAAHfg");
	var mask_9_graphics_151 = new cjs.Graphics().p("AnaDwIAAnfIO1AAIAAHfg");
	var mask_9_graphics_152 = new cjs.Graphics().p("AnzDwIAAnfIPnAAIAAHfg");
	var mask_9_graphics_153 = new cjs.Graphics().p("AoNDwIAAnfIQcAAIAAHfg");
	var mask_9_graphics_154 = new cjs.Graphics().p("AonDwIAAnfIRQAAIAAHfg");
	var mask_9_graphics_155 = new cjs.Graphics().p("ApBDwIAAnfISDAAIAAHfg");
	var mask_9_graphics_156 = new cjs.Graphics().p("ApbDwIAAnfIS3AAIAAHfg");
	var mask_9_graphics_157 = new cjs.Graphics().p("Ap1DwIAAnfITrAAIAAHfg");
	var mask_9_graphics_158 = new cjs.Graphics().p("AqPDwIAAnfIUfAAIAAHfg");
	var mask_9_graphics_159 = new cjs.Graphics().p("AqpDwIAAnfIVTAAIAAHfg");
	var mask_9_graphics_160 = new cjs.Graphics().p("ArDDwIAAnfIWHAAIAAHfg");
	var mask_9_graphics_161 = new cjs.Graphics().p("ArdDwIAAnfIW7AAIAAHfg");
	var mask_9_graphics_162 = new cjs.Graphics().p("Ar3DwIAAnfIXvAAIAAHfg");
	var mask_9_graphics_163 = new cjs.Graphics().p("AsRDwIAAnfIYjAAIAAHfg");
	var mask_9_graphics_164 = new cjs.Graphics().p("AsrDwIAAnfIZXAAIAAHfg");
	var mask_9_graphics_165 = new cjs.Graphics().p("AtFDwIAAnfIaLAAIAAHfg");
	var mask_9_graphics_166 = new cjs.Graphics().p("AtfDwIAAnfIa/AAIAAHfg");
	var mask_9_graphics_167 = new cjs.Graphics().p("At5DwIAAnfIbzAAIAAHfg");
	var mask_9_graphics_168 = new cjs.Graphics().p("AuTDwIAAnfIcnAAIAAHfg");
	var mask_9_graphics_169 = new cjs.Graphics().p("AutDwIAAnfIdbAAIAAHfg");
	var mask_9_graphics_170 = new cjs.Graphics().p("AvGDwIAAnfIeOAAIAAHfg");
	var mask_9_graphics_171 = new cjs.Graphics().p("AvgDwIAAnfIfCAAIAAHfg");
	var mask_9_graphics_172 = new cjs.Graphics().p("Av6DwIAAnfIf1AAIAAHfg");
	var mask_9_graphics_173 = new cjs.Graphics().p("AwUDwIAAnfMAgpAAAIAAHfg");
	var mask_9_graphics_174 = new cjs.Graphics().p("AwuDwIAAnfMAheAAAIAAHfg");
	var mask_9_graphics_175 = new cjs.Graphics().p("AxIDwIAAnfMAiRAAAIAAHfg");
	var mask_9_graphics_176 = new cjs.Graphics().p("AxiDwIAAnfMAjFAAAIAAHfg");
	var mask_9_graphics_177 = new cjs.Graphics().p("Ax8DwIAAnfMAj5AAAIAAHfg");
	var mask_9_graphics_178 = new cjs.Graphics().p("AyWDwIAAnfMAktAAAIAAHfg");
	var mask_9_graphics_179 = new cjs.Graphics().p("AywDwIAAnfMAlhAAAIAAHfg");
	var mask_9_graphics_180 = new cjs.Graphics().p("AzKDwIAAnfMAmVAAAIAAHfg");
	var mask_9_graphics_181 = new cjs.Graphics().p("AzkDwIAAnfMAnJAAAIAAHfg");
	var mask_9_graphics_196 = new cjs.Graphics().p("AzkDwIAAnfMAnJAAAIAAHfg");
	var mask_9_graphics_197 = new cjs.Graphics().p("A0CDwIAAnfMAoFAAAIAAHfg");
	var mask_9_graphics_198 = new cjs.Graphics().p("A0gDwIAAnfMApBAAAIAAHfg");
	var mask_9_graphics_199 = new cjs.Graphics().p("A0+DwIAAnfMAp9AAAIAAHfg");
	var mask_9_graphics_200 = new cjs.Graphics().p("A1cDwIAAnfMAq5AAAIAAHfg");
	var mask_9_graphics_201 = new cjs.Graphics().p("A16DwIAAnfMAr1AAAIAAHfg");
	var mask_9_graphics_202 = new cjs.Graphics().p("A2YDwIAAnfMAsxAAAIAAHfg");
	var mask_9_graphics_203 = new cjs.Graphics().p("A21DwIAAnfMAtsAAAIAAHfg");
	var mask_9_graphics_204 = new cjs.Graphics().p("A3TDwIAAnfMAuoAAAIAAHfg");
	var mask_9_graphics_205 = new cjs.Graphics().p("A3xDwIAAnfMAvjAAAIAAHfg");
	var mask_9_graphics_206 = new cjs.Graphics().p("A4PDwIAAnfMAwgAAAIAAHfg");
	var mask_9_graphics_207 = new cjs.Graphics().p("A4tDwIAAnfMAxbAAAIAAHfg");
	var mask_9_graphics_208 = new cjs.Graphics().p("A5LDwIAAnfMAyXAAAIAAHfg");
	var mask_9_graphics_209 = new cjs.Graphics().p("A5pDwIAAnfMAzTAAAIAAHfg");
	var mask_9_graphics_210 = new cjs.Graphics().p("A6HDwIAAnfMA0PAAAIAAHfg");
	var mask_9_graphics_211 = new cjs.Graphics().p("A6lDwIAAnfMA1LAAAIAAHfg");
	var mask_9_graphics_212 = new cjs.Graphics().p("A7DDwIAAnfMA2HAAAIAAHfg");
	var mask_9_graphics_213 = new cjs.Graphics().p("A7hDwIAAnfMA3DAAAIAAHfg");
	var mask_9_graphics_214 = new cjs.Graphics().p("A7/DwIAAnfMA3/AAAIAAHfg");
	var mask_9_graphics_215 = new cjs.Graphics().p("A8dDwIAAnfMA47AAAIAAHfg");
	var mask_9_graphics_216 = new cjs.Graphics().p("A87DwIAAnfMA53AAAIAAHfg");
	var mask_9_graphics_217 = new cjs.Graphics().p("A9ZDwIAAnfMA6zAAAIAAHfg");
	var mask_9_graphics_218 = new cjs.Graphics().p("A93DwIAAnfMA7vAAAIAAHfg");
	var mask_9_graphics_219 = new cjs.Graphics().p("A+VDwIAAnfMA8rAAAIAAHfg");
	var mask_9_graphics_220 = new cjs.Graphics().p("A+yDwIAAnfMA9mAAAIAAHfg");
	var mask_9_graphics_221 = new cjs.Graphics().p("A/QDwIAAnfMA+iAAAIAAHfg");
	var mask_9_graphics_222 = new cjs.Graphics().p("A/uDwIAAnfMA/dAAAIAAHfg");
	var mask_9_graphics_223 = new cjs.Graphics().p("EggMADwIAAnfMBAaAAAIAAHfg");
	var mask_9_graphics_224 = new cjs.Graphics().p("EggqADwIAAnfMBBWAAAIAAHfg");
	var mask_9_graphics_225 = new cjs.Graphics().p("EghIADwIAAnfMBCRAAAIAAHfg");
	var mask_9_graphics_226 = new cjs.Graphics().p("EghmADwIAAnfMBDNAAAIAAHfg");
	var mask_9_graphics_227 = new cjs.Graphics().p("EgiEADwIAAnfMBEJAAAIAAHfg");
	var mask_9_graphics_228 = new cjs.Graphics().p("EgiiADwIAAnfMBFFAAAIAAHfg");
	var mask_9_graphics_229 = new cjs.Graphics().p("EgjAADwIAAnfMBGBAAAIAAHfg");
	var mask_9_graphics_230 = new cjs.Graphics().p("EgjeADwIAAnfMBG9AAAIAAHfg");
	var mask_9_graphics_231 = new cjs.Graphics().p("Egj8ADwIAAnfMBH5AAAIAAHfg");
	var mask_9_graphics_232 = new cjs.Graphics().p("EgkaADwIAAnfMBI1AAAIAAHfg");
	var mask_9_graphics_233 = new cjs.Graphics().p("Egk4ADwIAAnfMBJxAAAIAAHfg");
	var mask_9_graphics_234 = new cjs.Graphics().p("EglWADwIAAnfMBKtAAAIAAHfg");
	var mask_9_graphics_235 = new cjs.Graphics().p("Egl0ADwIAAnfMBLpAAAIAAHfg");
	var mask_9_graphics_1138 = new cjs.Graphics().p("Egl0ADwIAAnfMBLpAAAIAAHfg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(136).to({graphics:mask_9_graphics_136,x:-7.75,y:23.3}).wait(1).to({graphics:mask_9_graphics_137,x:-5.15,y:23.3}).wait(1).to({graphics:mask_9_graphics_138,x:-2.55,y:23.3}).wait(1).to({graphics:mask_9_graphics_139,x:0.025,y:23.3}).wait(1).to({graphics:mask_9_graphics_140,x:2.625,y:23.3}).wait(1).to({graphics:mask_9_graphics_141,x:5.225,y:23.3}).wait(1).to({graphics:mask_9_graphics_142,x:7.825,y:23.3}).wait(1).to({graphics:mask_9_graphics_143,x:10.4,y:23.3}).wait(1).to({graphics:mask_9_graphics_144,x:13,y:23.3}).wait(1).to({graphics:mask_9_graphics_145,x:15.6,y:23.3}).wait(1).to({graphics:mask_9_graphics_146,x:18.2,y:23.3}).wait(1).to({graphics:mask_9_graphics_147,x:20.8,y:23.3}).wait(1).to({graphics:mask_9_graphics_148,x:23.375,y:23.3}).wait(1).to({graphics:mask_9_graphics_149,x:25.975,y:23.3}).wait(1).to({graphics:mask_9_graphics_150,x:28.575,y:23.3}).wait(1).to({graphics:mask_9_graphics_151,x:31.175,y:23.3}).wait(1).to({graphics:mask_9_graphics_152,x:33.75,y:23.3}).wait(1).to({graphics:mask_9_graphics_153,x:36.35,y:23.3}).wait(1).to({graphics:mask_9_graphics_154,x:38.95,y:23.3}).wait(1).to({graphics:mask_9_graphics_155,x:41.55,y:23.3}).wait(1).to({graphics:mask_9_graphics_156,x:44.15,y:23.3}).wait(1).to({graphics:mask_9_graphics_157,x:46.725,y:23.3}).wait(1).to({graphics:mask_9_graphics_158,x:49.325,y:23.3}).wait(1).to({graphics:mask_9_graphics_159,x:51.925,y:23.3}).wait(1).to({graphics:mask_9_graphics_160,x:54.525,y:23.3}).wait(1).to({graphics:mask_9_graphics_161,x:57.1,y:23.3}).wait(1).to({graphics:mask_9_graphics_162,x:59.7,y:23.3}).wait(1).to({graphics:mask_9_graphics_163,x:62.3,y:23.3}).wait(1).to({graphics:mask_9_graphics_164,x:64.9,y:23.3}).wait(1).to({graphics:mask_9_graphics_165,x:67.5,y:23.3}).wait(1).to({graphics:mask_9_graphics_166,x:70.075,y:23.3}).wait(1).to({graphics:mask_9_graphics_167,x:72.675,y:23.3}).wait(1).to({graphics:mask_9_graphics_168,x:75.275,y:23.3}).wait(1).to({graphics:mask_9_graphics_169,x:77.875,y:23.3}).wait(1).to({graphics:mask_9_graphics_170,x:80.45,y:23.3}).wait(1).to({graphics:mask_9_graphics_171,x:83.05,y:23.3}).wait(1).to({graphics:mask_9_graphics_172,x:85.65,y:23.3}).wait(1).to({graphics:mask_9_graphics_173,x:88.25,y:23.3}).wait(1).to({graphics:mask_9_graphics_174,x:90.85,y:23.3}).wait(1).to({graphics:mask_9_graphics_175,x:93.425,y:23.3}).wait(1).to({graphics:mask_9_graphics_176,x:96.025,y:23.3}).wait(1).to({graphics:mask_9_graphics_177,x:98.625,y:23.3}).wait(1).to({graphics:mask_9_graphics_178,x:101.225,y:23.3}).wait(1).to({graphics:mask_9_graphics_179,x:103.8,y:23.3}).wait(1).to({graphics:mask_9_graphics_180,x:106.4,y:23.3}).wait(1).to({graphics:mask_9_graphics_181,x:109,y:23.3}).wait(15).to({graphics:mask_9_graphics_196,x:109,y:23.3}).wait(1).to({graphics:mask_9_graphics_197,x:112,y:23.3}).wait(1).to({graphics:mask_9_graphics_198,x:115,y:23.3}).wait(1).to({graphics:mask_9_graphics_199,x:117.975,y:23.3}).wait(1).to({graphics:mask_9_graphics_200,x:120.975,y:23.3}).wait(1).to({graphics:mask_9_graphics_201,x:123.975,y:23.3}).wait(1).to({graphics:mask_9_graphics_202,x:126.975,y:23.3}).wait(1).to({graphics:mask_9_graphics_203,x:129.95,y:23.3}).wait(1).to({graphics:mask_9_graphics_204,x:132.95,y:23.3}).wait(1).to({graphics:mask_9_graphics_205,x:135.95,y:23.3}).wait(1).to({graphics:mask_9_graphics_206,x:138.95,y:23.3}).wait(1).to({graphics:mask_9_graphics_207,x:141.925,y:23.3}).wait(1).to({graphics:mask_9_graphics_208,x:144.925,y:23.3}).wait(1).to({graphics:mask_9_graphics_209,x:147.925,y:23.3}).wait(1).to({graphics:mask_9_graphics_210,x:150.925,y:23.3}).wait(1).to({graphics:mask_9_graphics_211,x:153.925,y:23.3}).wait(1).to({graphics:mask_9_graphics_212,x:156.9,y:23.3}).wait(1).to({graphics:mask_9_graphics_213,x:159.9,y:23.3}).wait(1).to({graphics:mask_9_graphics_214,x:162.9,y:23.3}).wait(1).to({graphics:mask_9_graphics_215,x:165.9,y:23.3}).wait(1).to({graphics:mask_9_graphics_216,x:168.875,y:23.3}).wait(1).to({graphics:mask_9_graphics_217,x:171.875,y:23.3}).wait(1).to({graphics:mask_9_graphics_218,x:174.875,y:23.3}).wait(1).to({graphics:mask_9_graphics_219,x:177.875,y:23.3}).wait(1).to({graphics:mask_9_graphics_220,x:180.85,y:23.3}).wait(1).to({graphics:mask_9_graphics_221,x:183.85,y:23.3}).wait(1).to({graphics:mask_9_graphics_222,x:186.85,y:23.3}).wait(1).to({graphics:mask_9_graphics_223,x:189.85,y:23.3}).wait(1).to({graphics:mask_9_graphics_224,x:192.85,y:23.3}).wait(1).to({graphics:mask_9_graphics_225,x:195.825,y:23.3}).wait(1).to({graphics:mask_9_graphics_226,x:198.825,y:23.3}).wait(1).to({graphics:mask_9_graphics_227,x:201.825,y:23.3}).wait(1).to({graphics:mask_9_graphics_228,x:204.825,y:23.3}).wait(1).to({graphics:mask_9_graphics_229,x:207.8,y:23.3}).wait(1).to({graphics:mask_9_graphics_230,x:210.8,y:23.3}).wait(1).to({graphics:mask_9_graphics_231,x:213.8,y:23.3}).wait(1).to({graphics:mask_9_graphics_232,x:216.8,y:23.3}).wait(1).to({graphics:mask_9_graphics_233,x:219.775,y:23.3}).wait(1).to({graphics:mask_9_graphics_234,x:222.775,y:23.3}).wait(1).to({graphics:mask_9_graphics_235,x:225.7746,y:23.3}).wait(903).to({graphics:mask_9_graphics_1138,x:225.7746,y:23.3}).wait(1).to({graphics:null,x:0,y:0}).wait(15));

	// 图层_2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("EgmTAQxQAOAAAJgFQAJgEAGgIQAGgIAEgNIhBiiIAcAAIAxCHIACAAIAviHIAaAAIg6CcQgIAVgIAOQgJAPgOAIQgPAIgXAAgA3xQGQgQgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAYAAQAYAAARAHQAQAIAJASQAJATAAAgQAAAggJASQgJATgQAHQgRAIgYAAQgYAAgRgIgA2rPyQAKgFAEgOQAEgOAAgXQAAgYgEgNQgFgOgKgGQgKgFgSAAQgSAAgKAFQgLAGgEAOQgFANABAYQAAAXAEAOQAFAOAKAFQALAGARAAQASAAALgGgA6qQGQgRgHgJgTQgJgSAAggQAAggAJgTQAJgSARgIQARgHAXAAQAYAAARAHQARAIAIASQAJATAAAgQAAAggJASQgIATgRAHQgRAIgYAAQgXAAgRgIgA5lPyQAKgFAFgOQAEgOAAgXQAAgYgFgNQgEgOgLgGQgKgFgSAAQgSAAgKAFQgKAGgFAOQgEANAAAYQAAAXAFAOQAEAOAKAFQALAGARAAQATAAAKgGgA/5QGQgQgHgJgTQgJgSAAggQAAggAJgTQAJgSAQgIQARgHAYAAQAOAAAKACQALABAHADIAAAYIgTgGQgKgBgNAAQgRAAgLAFQgKAFgFAOQgEANAAAZQgBAWAFAOQAFANAKAGQALAGASgBQALAAALgCQALgBAJgDIAAAXIgMADIgPACIgQABQgYAAgRgIgAzzQMQgEgBgCgFQgCgEAAgIQAAgMAEgEQAFgEAKABQAKgBAFAEQAEAEAAAMQAAAIgCAEQgCAFgEABQgEABgHAAQgHAAgEgBgA1HQFQgJgJAAgSIAAjDIAaAAIAAC8QAAANADADQAEAEAIAAIAGAAIAGgBIAAAVIgHACIgKAAQgSAAgJgIgEgiNAQMIgRgBIgNgEIAAgVIAOACIARADIAQABQATAAAJgGQAKgFAAgOQAAgJgDgGQgDgGgHgDQgIgDgPgEQgSgEgKgFQgKgGgEgIQgEgKAAgNQAAgUAPgMQAPgMAcAAQAMAAAMACQALABAGACIgCAWQgHgCgKgCQgKgCgLAAQgRgBgJAGQgJAFAAANQAAAJADAEQACAFAHADQAHACAMADQATAEALAGQALAGAFAJQAFAJAAAQQAAAYgQAMQgQALgeAAIgRgBgA8SQLIAAhnQAAgMgDgJQgCgIgHgGQgHgEgNAAQgKAAgJACQgKADgHAGQgIAIgFAOIAABtIgaAAIAAjkIAaAAIAABZQAFgKAJgGQAIgFAKgDQAKgCAKAAQAVAAAMAHQAMAGAFAMQAFANgBAPIAABwgEgnbAQLIAAhnQAAgSgGgLQgHgKgSAAQgKAAgIACQgIACgGAHQgHAGgDALIAAByIgaAAIAAhnQAAgSgGgLQgGgKgSAAQgKAAgIACQgIACgGAHQgHAGgEAMIAABxIgaAAIAAiiIAaAAIAAAVQAIgOAMgFQAMgFAPAAQATAAAMAHQALAHAFAMQAFgKAIgGQAIgFAKgDQAKgCAKAAQASAAAMAHQAMAGAFAMQAGANAAAPIAABwgAnxJsIAAjeIAaAAIAAAcQAFgOAMgIQAMgJAXAAQAbAAAPALQAOAKAGASQAFATAAAaQAAAWgFATQgGATgOAMQgPALgbAAQgXAAgMgIQgNgJgEgOIAABZgAnEGoQgLAHgFAOQgFAOABAUQgBASAFAOQAFAOALAIQALAIATAAQATgBAJgIQAKgKADgOQADgOgBgPQABgSgEgOQgDgOgJgIQgJgJgTAAQgTAAgLAIgAeAIrQgRgIgJgSQgJgSAAggQAAggAJgTQAJgTARgHQARgIAXABQAYgBARAIQARAHAIATQAJATAAAgQAAAggJASQgIASgRAIQgRAHgYAAQgXAAgRgHgAfFIXQAKgGAFgOQAEgNAAgXQAAgYgFgNQgEgOgLgGQgKgGgSAAQgSAAgKAGQgKAGgFAOQgEANAAAYQAAAXAFANQAEAOAKAGQALAGARAAQATAAAKgGgAaFIrQgQgIgJgSQgJgSAAggQAAggAJgTQAIgTARgHQAQgIAYABQAUAAANAFQANAHAHAKQAGAKADALQACAMAAAMIAAAIIgBALIhuAHQAAASAFALQAFAMALAFQALAGAUAAQAOAAANgEQAOgCAKgFIAAAYQgFADgJACIgTADQgKACgMgBQgYAAgRgHgAaQGmQgKAHgEAMQgEAMAAAQIBWgHQAAgMgDgKQgCgLgJgGQgIgHgRAAQgTAAgKAGgATRIyQgYAAgQgMQgQgNgIgZIgCgNIgBgLIAAgKQAAgZAKgTQALgSAUgOIAQgFQAIgCAIAAIACAAQAcAAASAdIAAgHIAAgBIABAAIAYAAIABAAIABABIAABWIAB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ABQgSAAgJgJgAY/BSQgKgEgFgMQgFgLAAgUIAAhbIgYAAIAAgVIAYAAIAAgmIAaAAIAAAmIAoAAIAAAVIgoAAIAABZQAAAMACAIQABAGAGADQAFACAJAAIAKAAIAIgBIAAAVIgJABIgJABQgSAAgLgEgAWvBVIgRgCIgNgCIAAgXIAOAEIARACIAQABQASAAAKgGQAJgFAAgOQAAgKgCgFQgDgFgIgDQgIgEgPgDQgSgFgKgFQgKgFgEgJQgEgJABgNQAAgUAOgMQAPgMAdAAQAMAAALACQALABAHACIgCAXQgHgDgKgCQgLgCgLAAQgRAAgIAFQgJAFAAAOQAAAHACAFQADAFAHADQAGADANACQASAEAMAGQALAFAFAJQAFAJAAAQQgBAYgPALQgQAMgeAAIgRgBgAREBSQgKgEgFgMQgFgLAAgUIAAhbIgYAAIAAgVIAYAAIAAgmIAaAAIAAAmIAoAAIAAAVIgoAAIAABZQAAAMACAIQABAGAGADQAFACAJAAIAKAAIAIgBIAAAVIgJABIgJABQgSAAgLgEgANnBVIgRgCIgNgCIAAgXIAOAEIARACIAQABQASAAAKgGQAJgFAAgOQAAgKgCgFQgDgFgIgDQgIgEgPgDQgSgFgKgFQgKgFgEgJQgEgJABgNQAAgUAOgMQAPgMAdAAQAMAAALACQALABAHACIgCAXQgHgDgKgCQgLgCgLAAQgRAAgIAFQgJAFAAAOQAAAHACAFQADAFAHADQAGADANACQASAEAMAGQALAFAFAJQAFAJAAAQQgBAYgPALQgQAMgeAAIgRgBgAMDBSQgLgEgFgMQgEgLAAgUIAAhbIgYAAIAAgVIAYAAIAAgmIAaAAIAAAmIAoAAIAAAVIgoAAIAABZQgBAMACAIQACAGAFADQAFACAKAAIAJAAIAJgBIAAAVIgJABIgKABQgRAAgLgEgACOBVIgRgCIgNgCIAAgXIAOAEIARACIAQABQASAAAKgGQAJgFAAgOQAAgKgCgFQgDgFgIgDQgIgEgPgDQgSgFgKgFQgKgFgEgJQgEgJABgNQAAgUAOgMQAPgMAdAAQAMAAALACQALABAHACIgCAXQgHgDgKgCQgLgCgLAAQgRAAgIAFQgJAFAAAOQAAAHACAFQADAFAHADQAGADANACQASAEAMAGQALAFAFAJQAFAJAAAQQgBAYg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");
	this.shape_9.setTransform(276.875,124.4);
	this.shape_9._off = true;

	var maskedShapeInstanceList = [this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(136).to({_off:false},0).wait(1002).to({_off:true},1).wait(15));

	// 图层_1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("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");
	this.shape_10.setTransform(570.675,124.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1138).to({_off:true},1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1143.4,240.8);
p.frameBounds = [rect, rect=new cjs.Rectangle(2.8,14.9,1135.8,219), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	var mask_graphics_6 = new cjs.Graphics().p("AiWFGIAAqLIDsAAIAAKLg");
	var mask_graphics_7 = new cjs.Graphics().p("AiZFGIAAqLIEzAAIAAKLg");
	var mask_graphics_8 = new cjs.Graphics().p("Ai9FGIAAqLIF7AAIAAKLg");
	var mask_graphics_9 = new cjs.Graphics().p("AjhFGIAAqLIHDAAIAAKLg");
	var mask_graphics_10 = new cjs.Graphics().p("AkFFGIAAqLIILAAIAAKLg");
	var mask_graphics_11 = new cjs.Graphics().p("AkpFGIAAqLIJTAAIAAKLg");
	var mask_graphics_12 = new cjs.Graphics().p("AlNFGIAAqLIKbAAIAAKLg");
	var mask_graphics_13 = new cjs.Graphics().p("AlxFGIAAqLILjAAIAAKLg");
	var mask_graphics_14 = new cjs.Graphics().p("AmVFGIAAqLIMrAAIAAKLg");
	var mask_graphics_15 = new cjs.Graphics().p("Am5FGIAAqLINzAAIAAKLg");
	var mask_graphics_16 = new cjs.Graphics().p("AndFGIAAqLIO6AAIAAKLg");
	var mask_graphics_17 = new cjs.Graphics().p("AoBFGIAAqLIQCAAIAAKLg");
	var mask_graphics_18 = new cjs.Graphics().p("AolFGIAAqLIRKAAIAAKLg");
	var mask_graphics_19 = new cjs.Graphics().p("ApJFGIAAqLISSAAIAAKLg");
	var mask_graphics_20 = new cjs.Graphics().p("ApsFGIAAqLITZAAIAAKLg");
	var mask_graphics_21 = new cjs.Graphics().p("AqQFGIAAqLIUhAAIAAKLg");
	var mask_graphics_22 = new cjs.Graphics().p("Aq0FGIAAqLIVpAAIAAKLg");
	var mask_graphics_23 = new cjs.Graphics().p("ArYFGIAAqLIWxAAIAAKLg");
	var mask_graphics_24 = new cjs.Graphics().p("Ar8FGIAAqLIX5AAIAAKLg");
	var mask_graphics_25 = new cjs.Graphics().p("AsgFGIAAqLIZBAAIAAKLg");
	var mask_graphics_26 = new cjs.Graphics().p("AsgFGIAAqLIZBAAIAAKLg");
	var mask_graphics_27 = new cjs.Graphics().p("AsgFGIAAqLIZBAAIAAKLg");
	var mask_graphics_28 = new cjs.Graphics().p("AsgFGIAAqLIZBAAIAAKLg");
	var mask_graphics_29 = new cjs.Graphics().p("AsgFGIAAqLIZBAAIAAKLg");
	var mask_graphics_30 = new cjs.Graphics().p("AsgFGIAAqLIZBAAIAAKLg");
	var mask_graphics_31 = new cjs.Graphics().p("AsgFGIAAqLIZBAAIAAKLg");
	var mask_graphics_32 = new cjs.Graphics().p("AsyFGIAAqLIZlAAIAAKLg");
	var mask_graphics_33 = new cjs.Graphics().p("AtDFGIAAqLIaHAAIAAKLg");
	var mask_graphics_34 = new cjs.Graphics().p("AtVFGIAAqLIarAAIAAKLg");
	var mask_graphics_35 = new cjs.Graphics().p("AtmFGIAAqLIbNAAIAAKLg");
	var mask_graphics_36 = new cjs.Graphics().p("At4FGIAAqLIbwAAIAAKLg");
	var mask_graphics_37 = new cjs.Graphics().p("AuJFGIAAqLIcTAAIAAKLg");
	var mask_graphics_38 = new cjs.Graphics().p("AubFGIAAqLIc2AAIAAKLg");
	var mask_graphics_39 = new cjs.Graphics().p("AusFGIAAqLIdZAAIAAKLg");
	var mask_graphics_40 = new cjs.Graphics().p("Au+FGIAAqLId9AAIAAKLg");
	var mask_graphics_41 = new cjs.Graphics().p("AvPFGIAAqLIefAAIAAKLg");
	var mask_graphics_42 = new cjs.Graphics().p("AvhFGIAAqLIfDAAIAAKLg");
	var mask_graphics_43 = new cjs.Graphics().p("AvyFGIAAqLIflAAIAAKLg");
	var mask_graphics_44 = new cjs.Graphics().p("AwEFGIAAqLMAgJAAAIAAKLg");
	var mask_graphics_45 = new cjs.Graphics().p("AwVFGIAAqLMAgrAAAIAAKLg");
	var mask_graphics_46 = new cjs.Graphics().p("AwnFGIAAqLMAhOAAAIAAKLg");
	var mask_graphics_47 = new cjs.Graphics().p("Aw4FGIAAqLMAhxAAAIAAKLg");
	var mask_graphics_48 = new cjs.Graphics().p("AxKFGIAAqLMAiUAAAIAAKLg");
	var mask_graphics_49 = new cjs.Graphics().p("AxbFGIAAqLMAi3AAAIAAKLg");
	var mask_graphics_50 = new cjs.Graphics().p("AxtFGIAAqLMAjbAAAIAAKLg");
	var mask_graphics_51 = new cjs.Graphics().p("Ax+FGIAAqLMAj9AAAIAAKLg");
	var mask_graphics_52 = new cjs.Graphics().p("AyQFGIAAqLMAkhAAAIAAKLg");
	var mask_graphics_53 = new cjs.Graphics().p("AyhFGIAAqLMAlDAAAIAAKLg");
	var mask_graphics_54 = new cjs.Graphics().p("AyzFGIAAqLMAlmAAAIAAKLg");
	var mask_graphics_55 = new cjs.Graphics().p("AzEFGIAAqLMAmJAAAIAAKLg");
	var mask_graphics_56 = new cjs.Graphics().p("AzWFGIAAqLMAmsAAAIAAKLg");
	var mask_graphics_57 = new cjs.Graphics().p("AznFGIAAqLMAnPAAAIAAKLg");
	var mask_graphics_58 = new cjs.Graphics().p("Az5FGIAAqLMAnzAAAIAAKLg");
	var mask_graphics_59 = new cjs.Graphics().p("A0KFGIAAqLMAoVAAAIAAKLg");
	var mask_graphics_60 = new cjs.Graphics().p("A0cFGIAAqLMAo5AAAIAAKLg");
	var mask_graphics_61 = new cjs.Graphics().p("A0tFGIAAqLMApbAAAIAAKLg");
	var mask_graphics_62 = new cjs.Graphics().p("A0/FGIAAqLMAp/AAAIAAKLg");
	var mask_graphics_63 = new cjs.Graphics().p("A1QFGIAAqLMAqhAAAIAAKLg");
	var mask_graphics_64 = new cjs.Graphics().p("A1iFGIAAqLMArEAAAIAAKLg");
	var mask_graphics_65 = new cjs.Graphics().p("A1zFGIAAqLMArnAAAIAAKLg");
	var mask_graphics_66 = new cjs.Graphics().p("A2FFGIAAqLMAsKAAAIAAKLg");
	var mask_graphics_67 = new cjs.Graphics().p("A2WFGIAAqLMAstAAAIAAKLg");
	var mask_graphics_68 = new cjs.Graphics().p("A2oFGIAAqLMAtRAAAIAAKLg");
	var mask_graphics_69 = new cjs.Graphics().p("A25FGIAAqLMAtzAAAIAAKLg");
	var mask_graphics_70 = new cjs.Graphics().p("A3KFGIAAqLMAuVAAAIAAKLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_6,x:-15.075,y:15.5}).wait(1).to({graphics:mask_graphics_7,x:-14.725,y:15.5}).wait(1).to({graphics:mask_graphics_8,x:-11.15,y:15.5}).wait(1).to({graphics:mask_graphics_9,x:-7.55,y:15.5}).wait(1).to({graphics:mask_graphics_10,x:-3.95,y:15.5}).wait(1).to({graphics:mask_graphics_11,x:-0.35,y:15.5}).wait(1).to({graphics:mask_graphics_12,x:3.225,y:15.5}).wait(1).to({graphics:mask_graphics_13,x:6.825,y:15.5}).wait(1).to({graphics:mask_graphics_14,x:10.425,y:15.5}).wait(1).to({graphics:mask_graphics_15,x:14.025,y:15.5}).wait(1).to({graphics:mask_graphics_16,x:17.6,y:15.5}).wait(1).to({graphics:mask_graphics_17,x:21.2,y:15.5}).wait(1).to({graphics:mask_graphics_18,x:24.8,y:15.5}).wait(1).to({graphics:mask_graphics_19,x:28.4,y:15.5}).wait(1).to({graphics:mask_graphics_20,x:31.975,y:15.5}).wait(1).to({graphics:mask_graphics_21,x:35.575,y:15.5}).wait(1).to({graphics:mask_graphics_22,x:39.175,y:15.5}).wait(1).to({graphics:mask_graphics_23,x:42.775,y:15.5}).wait(1).to({graphics:mask_graphics_24,x:46.35,y:15.5}).wait(1).to({graphics:mask_graphics_25,x:49.95,y:15.5}).wait(1).to({graphics:mask_graphics_26,x:49.95,y:15.5}).wait(1).to({graphics:mask_graphics_27,x:49.95,y:15.5}).wait(1).to({graphics:mask_graphics_28,x:49.95,y:15.5}).wait(1).to({graphics:mask_graphics_29,x:49.95,y:15.5}).wait(1).to({graphics:mask_graphics_30,x:49.95,y:15.5}).wait(1).to({graphics:mask_graphics_31,x:49.95,y:15.5}).wait(1).to({graphics:mask_graphics_32,x:51.7,y:15.5}).wait(1).to({graphics:mask_graphics_33,x:53.45,y:15.5}).wait(1).to({graphics:mask_graphics_34,x:55.2,y:15.5}).wait(1).to({graphics:mask_graphics_35,x:56.95,y:15.5}).wait(1).to({graphics:mask_graphics_36,x:58.7,y:15.5}).wait(1).to({graphics:mask_graphics_37,x:60.45,y:15.5}).wait(1).to({graphics:mask_graphics_38,x:62.2,y:15.5}).wait(1).to({graphics:mask_graphics_39,x:63.95,y:15.5}).wait(1).to({graphics:mask_graphics_40,x:65.7,y:15.5}).wait(1).to({graphics:mask_graphics_41,x:67.45,y:15.5}).wait(1).to({graphics:mask_graphics_42,x:69.2,y:15.5}).wait(1).to({graphics:mask_graphics_43,x:70.95,y:15.5}).wait(1).to({graphics:mask_graphics_44,x:72.7,y:15.5}).wait(1).to({graphics:mask_graphics_45,x:74.45,y:15.5}).wait(1).to({graphics:mask_graphics_46,x:76.2,y:15.5}).wait(1).to({graphics:mask_graphics_47,x:77.95,y:15.5}).wait(1).to({graphics:mask_graphics_48,x:79.7,y:15.5}).wait(1).to({graphics:mask_graphics_49,x:81.45,y:15.5}).wait(1).to({graphics:mask_graphics_50,x:83.2,y:15.5}).wait(1).to({graphics:mask_graphics_51,x:84.95,y:15.5}).wait(1).to({graphics:mask_graphics_52,x:86.7,y:15.5}).wait(1).to({graphics:mask_graphics_53,x:88.45,y:15.5}).wait(1).to({graphics:mask_graphics_54,x:90.2,y:15.5}).wait(1).to({graphics:mask_graphics_55,x:91.95,y:15.5}).wait(1).to({graphics:mask_graphics_56,x:93.7,y:15.5}).wait(1).to({graphics:mask_graphics_57,x:95.45,y:15.5}).wait(1).to({graphics:mask_graphics_58,x:97.2,y:15.5}).wait(1).to({graphics:mask_graphics_59,x:98.95,y:15.5}).wait(1).to({graphics:mask_graphics_60,x:100.7,y:15.5}).wait(1).to({graphics:mask_graphics_61,x:102.45,y:15.5}).wait(1).to({graphics:mask_graphics_62,x:104.2,y:15.5}).wait(1).to({graphics:mask_graphics_63,x:105.95,y:15.5}).wait(1).to({graphics:mask_graphics_64,x:107.7,y:15.5}).wait(1).to({graphics:mask_graphics_65,x:109.45,y:15.5}).wait(1).to({graphics:mask_graphics_66,x:111.2,y:15.5}).wait(1).to({graphics:mask_graphics_67,x:112.95,y:15.5}).wait(1).to({graphics:mask_graphics_68,x:114.7,y:15.5}).wait(1).to({graphics:mask_graphics_69,x:116.45,y:15.5}).wait(1).to({graphics:mask_graphics_70,x:118.1818,y:15.5}).wait(73));

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AipBRIgNgEIAOgYIAKACQAEACAGAAIAEgBIAEgBIADgCIABgFIgBgEIgEgDQgCgBgDAAIgGgBIgHABIgHADIACgIQgJgFgFgIQgFgHAAgLQAAgGACgFQADgGAEgFQAFgFAHgEQAHgDAKAAIAJABIAHACIACgPIAXAKIgIAOQAFAFACAFQACAFAAAGQAAAJgDAGQgEAGgHAFQAOAIAAAPQAAAIgDAFQgDAHgGADQgGAEgJACQgLACgHAAQgKAAgLgCgAiRgCQgFACgCABQgCADAAADQABAEAEACQAEACAEgCQAEAAADgEQACgDAAgDQgCgDgDgCIgEgBIgEABgAoPg2IAqgFIgDBNIAhgHQAAgIADgGQAEgIAFgGQAFgGAIgDQAIgDAJAAQAOAAAKAIQAKAGAFANIgqAeIAJACQAHAAAEgDIAIgFIAOAXQgJAGgJACQgJADgLAAQgKAAgIgDQgHgDgGgGQgGgFgDgIIgBgDIABAXIhKAHgAmjgDIgEADIgCADIgBAGIAAADIABACIAVgOQgCgDgCgBIgGAAIgFABgAB+AyQgHgGAAgMIAAg5IAfgDIgBAzQAAADACACIAFABQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQACgCAAgDIgBgwIAggDIgCBSIgZABIAAgMIgBAAQgDAIgFACQgGAEgIAAQgLAAgGgHgAHYA1QgIgDgGgGQgEgEgFgJQgDgIAAgIQAAgLAEgHQADgIAGgGQAFgGAIgDQAIgDAIAAQAOAAALAIQAKAHAFAMIgqAeIAEABIAFABQAGAAAFgDIAIgFIANAXQgIAGgJACQgIADgNAAQgKAAgHgDgAHjgDIgEADIgDADIgBAGIABADIABACIAVgOIgFgEIgFAAIgFABgAF5A1QgHgDgFgFQgFgFgDgIQgEgHAAgLQAAgIADgIQACgIAGgGQAEgGAIgDQAGgDAKAAIAJABIAIAEIgCgiIAhgCIgBBxIgbACIAAgIIgBAAQgCADgHADQgFACgHAAQgGAAgHgDgAGHACQgDABgCACIgDAEIgCAFIABAFIADAEIAEADIAFABIAGgBIAFgDIAEgEIABgFIgBgFIgCgEIgEgDIgGgBIgGABgAE+gYIAfgCIgCBQIgdACgADWAyQgHgGAAgOIAAggIgIAAIABgYIAGAAIAAgJIAfgOIAAAXIALgCIgBAaIgKAAIAAAYQAAAEABABQABACAFAAIADAAIACgBIgFAcIgJAAQgNAAgIgGgAkRA4IgLgDIAAgaIAQADIAEAAIAEgBIADgBIABgDQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAgBIgMgEQgDgBgEgDQgEgCgCgFQgCgEAAgGIACgJQACgEAEgEQAEgEAGgCQAIgDAIAAIATACIAFABIAAAZIgHgBIgKgBIgEABIgDABQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAIANAFIAHAEQADACACAFQADAFAAAGQAAAIgEAFQgCAEgGAEQgFADgIABIgOABgAllAyQgIgGAAgOIAAggIgIAAIABgYIAHAAIAAgJIAegOIAAAXIAMgCIgCAaIgJAAIAAAYQAAAEABABQABACAEAAIADAAIACgBIgFAcIgIAAQgOAAgHgGgAA8A3QgIgCgIgFQgHgFgEgHQgFgIAAgJQgCgKACgIQAEgJAEgFQAFgFAIgFQAIgEAJgCQAKgBAHACQAJACAHAFQAGAEAFAIQAEAHACAJQABAJgCAJQgDAIgFAGQgEAHgIAEQgGADgLACIgHABIgLgBgABCABQgGADgDAEQgCAGACAFQADAFAFACQAFACAGgDQAHgDACgFQADgFgDgFQgCgGgFgBIgEAAQgEAAgEABgAhEA3QgHgCgIgFQgHgFgEgHQgEgGgCgLQgBgJACgJQACgGAFgIQAFgFAIgFQAJgEAIgCQALgBAHACQAJACAGAFQAIAFADAHQAFAHABAJQACAJgDAJQgCAIgFAGQgFAHgIAEQgGAEgLABIgHABIgLgBgAg9ABQgHADgCAEQgCAGACAFQACAFAFACQAGABAGgCQAHgDACgFQACgFgCgFQgDgGgFgBIgEAAQgDAAgEABgAD8A1IAAgaIAQADIAEAAIAEgBIADgBIABgDIgCgDIgNgEQgDgBgEgDQgEgEgBgDQgCgFAAgFQAAgFACgEQABgEAFgEQAEgEAGgCQAHgDAJAAIATACIAFABIAAAZIgHgBIgKgBIgEABIgDABQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAIAMAFIAIAEIAFAHQACAEAAAHQAAAIgDAFQgEAFgFADQgFADgHABIgaABgAE9g7IAhgBIgCAYIgfADgAk6g2IALgcIALAJIgQAVg");
	this.shape.setTransform(127.9947,20.1917,2.4252,2.4252);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6).to({_off:false},0).wait(137));

	// 图层_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#008379").s().p("AipBRIgNgEIAOgYIAKACQAEACAGAAIAEgBIAEgBIADgCIABgFIgBgEIgEgDQgCgBgDAAIgGgBIgHABIgHADIACgIQgJgFgFgIQgFgHAAgLQAAgGACgFQADgGAEgFQAFgFAHgEQAHgDAKAAIAJABIAHACIACgPIAXAKIgIAOQAFAFACAFQACAFAAAGQAAAJgDAGQgEAGgHAFQAOAIAAAPQAAAIgDAFQgDAHgGADQgGAEgJACQgLACgHAAQgKAAgLgCgAiRgCQgFACgCABQgCADAAADQABAEAEACQAEACAEgCQAEAAADgEQACgDAAgDQgCgDgDgCIgEgBIgEABgAoPg2IAqgFIgDBNIAhgHQAAgIADgGQAEgIAFgGQAFgGAIgDQAIgDAJAAQAOAAAKAIQAKAGAFANIgqAeIAJACQAHAAAEgDIAIgFIAOAXQgJAGgJACQgJADgLAAQgKAAgIgDQgHgDgGgGQgGgFgDgIIgBgDIABAXIhKAHgAmjgDIgEADIgCADIgBAGIAAADIABACIAVgOQgCgDgCgBIgGAAIgFABgAB+AyQgHgGAAgMIAAg5IAfgDIgBAzQAAADACACIAFABQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQACgCAAgDIgBgwIAggDIgCBSIgZABIAAgMIgBAAQgDAIgFACQgGAEgIAAQgLAAgGgHgAHYA1QgIgDgGgGQgEgEgFgJQgDgIAAgIQAAgLAEgHQADgIAGgGQAFgGAIgDQAIgDAIAAQAOAAALAIQAKAHAFAMIgqAeIAEABIAFABQAGAAAFgDIAIgFIANAXQgIAGgJACQgIADgNAAQgKAAgHgDgAHjgDIgEADIgDADIgBAGIABADIABACIAVgOIgFgEIgFAAIgFABgAF5A1QgHgDgFgFQgFgFgDgIQgEgHAAgLQAAgIADgIQACgIAGgGQAEgGAIgDQAGgDAKAAIAJABIAIAEIgCgiIAhgCIgBBxIgbACIAAgIIgBAAQgCADgHADQgFACgHAAQgGAAgHgDgAGHACQgDABgCACIgDAEIgCAFIABAFIADAEIAEADIAFABIAGgBIAFgDIAEgEIABgFIgBgFIgCgEIgEgDIgGgBIgGABgAE+gYIAfgCIgCBQIgdACgADWAyQgHgGAAgOIAAggIgIAAIABgYIAGAAIAAgJIAfgOIAAAXIALgCIgBAaIgKAAIAAAYQAAAEABABQABACAFAAIADAAIACgBIgFAcIgJAAQgNAAgIgGgAkRA4IgLgDIAAgaIAQADIAEAAIAEgBIADgBIABgDQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAgBIgMgEQgDgBgEgDQgEgCgCgFQgCgEAAgGIACgJQACgEAEgEQAEgEAGgCQAIgDAIAAIATACIAFABIAAAZIgHgBIgKgBIgEABIgDABQAAAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAIANAFIAHAEQADACACAFQADAFAAAGQAAAIgEAFQgCAEgGAEQgFADgIABIgOABgAllAyQgIgGAAgOIAAggIgIAAIABgYIAHAAIAAgJIAegOIAAAXIAMgCIgCAaIgJAAIAAAYQAAAEABABQABACAEAAIADAAIACgBIgFAcIgIAAQgOAAgHgGgAA8A3QgIgCgIgFQgHgFgEgHQgFgIAAgJQgCgKACgIQAEgJAEgFQAFgFAIgFQAIgEAJgCQAKgBAHACQAJACAHAFQAGAEAFAIQAEAHACAJQABAJgCAJQgDAIgFAGQgEAHgIAEQgGADgLACIgHABIgLgBgABCABQgGADgDAEQgCAGACAFQADAFAFACQAFACAGgDQAHgDACgFQADgFgDgFQgCgGgFgBIgEAAQgEAAgEABgAhEA3QgHgCgIgFQgHgFgEgHQgEgGgCgLQgBgJACgJQACgGAFgIQAFgFAIgFQAJgEAIgCQALgBAHACQAJACAGAFQAIAFADAHQAFAHABAJQACAJgDAJQgCAIgFAGQgFAHgIAEQgGAEgLABIgHABIgLgBgAg9ABQgHADgCAEQgCAGACAFQACAFAFACQAGABAGgCQAHgDACgFQACgFgCgFQgDgGgFgBIgEAAQgDAAgEABgAD8A1IAAgaIAQADIAEAAIAEgBIADgBIABgDIgCgDIgNgEQgDgBgEgDQgEgEgBgDQgCgFAAgFQAAgFACgEQABgEAFgEQAEgEAGgCQAHgDAJAAIATACIAFABIAAAZIgHgBIgKgBIgEABIgDABQgBAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAIAMAFIAIAEIAFAHQACAEAAAHQAAAIgDAFQgEAFgFADQgFADgHABIgaABgAE9g7IAhgBIgCAYIgfADgAk6g2IALgcIALAJIgQAVg");
	this.shape_1.setTransform(127.9947,20.1917,2.4252,2.4252);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(143));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,256,40.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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

	// 元件 2
	this.instance = new lib.元件2("synched",0);
	this.instance.setTransform(552.25,162.95,1,1,0,0,0,571.6,120.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1139));

	// 元件 1
	this.instance_1 = new lib.元件1("synched",0,false);
	this.instance_1.setTransform(565.7,-27.5,1,1,0,0,0,128,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1139));

	// 图层 1
	this.instance_2 = new lib.Bitmap1();
	this.instance_2.setTransform(387,-36,0.6666,0.6666);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1139));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16.5,-47.7,1165.5,427.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
		{src:"images/index_atlas_1.png?1733300814747", id:"index_atlas_1"}
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