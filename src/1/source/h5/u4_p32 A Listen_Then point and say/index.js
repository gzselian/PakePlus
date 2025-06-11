(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"index_atlas_P_1", frames: [[0,1602,968,798],[0,2402,968,798],[0,0,968,799],[0,801,968,799],[970,0,195,1595]]},
		{name:"index_atlas_NP_1", frames: [[0,0,0,0]]}
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
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_11 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_7 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_8 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_9 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.scene01_bg = function() {
	this.initialize(ss["index_atlas_NP_1"]);
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
	this.shape.graphics.f().s("#F99703").ss(5,1,1).p("AhBhxIAADjABChxIAADj");
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


(lib.元件19 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(1177.088,28.5,0.9111,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F99703").s().p("Ag+A9QgZAAAAgZIAAhGQAAgaAZAAICWAAIAAB5g");
	this.shape_1.setTransform(1161.6041,28.5026,1.1,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F99703").ss(5,1,1).p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQAMALAKAMQAFAGAEAHQA1BIAABdQAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_2.setTransform(1168.875,28.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTIAWAYIAJAMQA1BIAABdQAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_3.setTransform(1168.875,28.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F99703").s().p("AhpB4QgFgGgCgHIAAjSQAAgGAEgGIADgEQAHgHAKAAQAFAAADACIC5BrIABABQAEADABAFQACAEAAAEQAAAFgCAEQgBAEgEADIgEAFIi1BoQgEACgFAAQgKgBgHgGg");
	this.shape_4.setTransform(20.662,28.5,0.9111,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F99703").s().p("Ag+A9QgZAAAAgZIAAhGQAAgaAZAAICWAAIAAB5g");
	this.shape_5.setTransform(36.1459,28.5026,1.1,1.1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F99703").ss(5,1,1).p("AjJDJQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQAMALAKAMQAFAGAEAHQA1BIAABdQAAB2hUBTQhTBUh2AAQh1AAhUhUg");
	this.shape_6.setTransform(28.525,28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjJDJQhThTAAh2QAAh1BThUQBUhTB1AAQB2AABTBTIAWAYIAJAMQA1BIAABdQAAB2hUBTQhTBUh2AAQh1AAhUhUg");
	this.shape_7.setTransform(28.525,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件19, rect = new cjs.Rectangle(-2.5,-2.5,1202.4,62), [rect]);


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


(lib.元件17复制2 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AtmLOIAA2bIbNAAIAAWbg");
	mask.setTransform(87.125,71.8);

	// 图层_3
	this.instance = new lib.Image_11();
	this.instance.setTransform(0,0,0.18,0.1799);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, rect = new cjs.Rectangle(0,0,174.2,143.6), [rect]);


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
	mask.graphics.p("AtmLOIAA2bIbNAAIAAWbg");
	mask.setTransform(87.125,71.8);

	// 图层_3
	this.instance = new lib.Image_10();
	this.instance.setTransform(0,0,0.18,0.1799);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, rect = new cjs.Rectangle(0,0,174.2,143.6), [rect]);


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
	mask.graphics.p("AivWbMAAAgs1IFeAAMAAAAs1g");
	mask.setTransform(17.55,143.475);

	// 图层_3
	this.instance = new lib.Image_9();
	this.instance.setTransform(0,0,0.18,0.1799);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, rect = new cjs.Rectangle(0,0,35.1,286.9), [rect]);


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
	mask.graphics.p("AtmLPIAA2dIbNAAIAAWdg");
	mask.setTransform(87.125,71.875);

	// 图层_3
	this.instance = new lib.Image_8();
	this.instance.setTransform(0,0,0.18,0.1799);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, rect = new cjs.Rectangle(0,0,174.2,143.7), [rect]);


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AtmLPIAA2dIbNAAIAAWdg");
	mask.setTransform(87.125,71.875);

	// 图层_3
	this.instance = new lib.Image_7();
	this.instance.setTransform(0,0,0.18,0.1799);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, rect = new cjs.Rectangle(0,0,174.2,143.7), [rect]);


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
	this.shape.setTransform(-10.4997,119.093,2.188,2.188);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件53, rect = new cjs.Rectangle(-44.2,87.2,67.5,63.9), [rect]);


(lib.元件51 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {label1:1,label2:3,label3:5,label4:7,label5:9,label6:11,label7:13,label8:15};
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},15).wait(3));

	// 单词
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhNCJIAAkNIBIAAIAAAxQAIgWAMgLQAMgNAPgEQAPgDAQAAIAFAAIgCBAIgHAAQgRAAgPAFQgQAFgLAMQgKANgFAWIAACYg");
	this.shape_5.setTransform(55.925,198.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuABAaAOQAZAPAJAbQAKAbgBAiIgBAVIgBAQIitALQABAcASAOQASAOAjAAQARAAARgDQARgCAPgFQAOgEAJgFIAAA5QgMAIgcAFQgcAFgjABIgDAAQgnAAgcgMgAglhFQgNAPgBAfIBtgIQABgPgEgMQgEgMgLgHQgKgHgVgBQggABgOAPg");
	this.shape_6.setTransform(28.8513,199);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgsCHIhhkNIBQAAIA9DBIACAAIA/jBIBNAAIhiENg");
	this.shape_7.setTransform(-1.325,199);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgkDAIAAkNIBIAAIAAENgAgYh1QgJgDgEgIQgCgIAAgRQAAgRACgIQAEgIAJgDQAJgCAPAAQAQAAAJACQAJADAEAIQADAIAAARQAAARgDAIQgEAIgJADQgJACgQAAQgPAAgJgCg");
	this.shape_8.setTransform(-23.95,193.3208);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhNCJIAAkNIBIAAIAAAxQAIgWAMgLQAMgNAPgEQAPgDAQAAIAFAAIgCBAIgHAAQgRAAgPAFQgQAFgLAMQgKANgFAWIAACYg");
	this.shape_9.setTransform(-40.675,198.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_10.setTransform(26.325,198.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAzC+IAAimQAAgZgJgMQgKgNgZABQgWgBgOAKQgPAIgGAVIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgKQAVgJAeAAQAhAAAUAKQATAKAJAVQAIATAAAdIAAC5g");
	this.shape_11.setTransform(-35.375,193.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuABAaAOQAZAPAJAbQAKAbgBAiIgBAVIgBAQIitALQABAcASAOQASAOAjAAQARAAARgDQARgCAPgFQAOgEAJgFIAAA5QgMAIgcAFQgcAFgjABIgDAAQgnAAgcgMgAglhFQgNAPgBAfIBtgIQABgPgEgMQgEgMgLgHQgKgHgVgBQggABgOAPg");
	this.shape_12.setTransform(7.6013,199);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgSC7QgQgFgKgKQgKgKgFgMIgFAlIhCAAIAAl6IBJAAIAACOQAHgQAUgKQATgLAiAAQAsAAAXAQQAYASAIAgQAJAdAAArQAAAogJAfQgIAggYATQgXASgsABQgYAAgRgGgAglgWQgOAKgFASQgGATABAbQgBAbAGASQAFAUAOAKQAOALAXAAQAZgBAMgMQAMgKAEgUQAEgTAAgYQAAgYgEgUQgEgSgMgLQgNgLgYAAQgXgBgOALg");
	this.shape_13.setTransform(-23.4237,193.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AhZCwQgXgSgJggQgJgfAAgrQAAgnAJgeQAJggAXgSQAYgTArAAQAkAAATALQASAKAIASIAAiQIBIAAIAAF6IhCAAIgFglQgIASgTAMQgUAMgjABQgrAAgYgRgAgkgUQgMALgEASQgEAUABAXQgBAaAEASQAEAUANAKQAMALAXABQAZAAANgLQAOgJAFgTQAGgTgBgcQABgZgGgUQgFgSgOgKQgOgLgYAAQgYAAgMAMg");
	this.shape_14.setTransform(40.1737,193.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgkDAIAAkNIBIAAIAAENgAgYh1QgJgDgEgIQgCgIAAgRQAAgRACgIQAEgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQAEAIAAARQAAARgEAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_15.setTransform(-4.35,193.3208);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADRIAQAAIBFhjIBUAAIhgB9IBkCQg");
	this.shape_16.setTransform(60.625,193.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgoCAQgegNgQgeQgQgfAAg2QAAg1AQgfQAQgfAegMQAegMApAAQAUAAASACQATACAMAEIAAA+QgOgFgOgDQgPgCgRAAQgYgBgPAHQgOAHgHASQgHASAAAeQAAAfAHASQAHARAPAHQAPAIAZgBQAQAAAPgDQAPgCAPgFIAAA7QgIADgMADIgaADIgaACIgDAAQgnAAgdgMg");
	this.shape_17.setTransform(31.225,199);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AhUB/QgUgKgJgUQgIgUAAgdIAAi5IBIAAIAAClQAAAbAJAMQAJAMAagBQAUABAPgJQAOgIAGgVIAAiyIBIAAIAAENIhBAAIgGggQgLATgVAKQgUAIgeABQghAAgUgLg");
	this.shape_18.setTransform(1.825,199.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgWC4QgRgHgIgQQgHgQAAgXIAAk4IBIAAIAAEmQAAASAFAGQAFAGAMAAIAHAAIAIgBIAAA3IgPACIgQABQgdABgRgIg");
	this.shape_19.setTransform(-38.175,193.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_20.setTransform(62.025,198.9006);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_21.setTransform(36.525,198.9006);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("Ag4C6QgVgCgRgDIAAg6QAQAEATADQATACASgBQAqABAUgPQAUgPAAgnIAAgOQgIASgTAKQgTAKgjAAQgrAAgYgRQgYgRgJgeQgKgeABgqQgBglAKggQAJgfAYgSQAYgTArAAQAjgBAUALQASAKAIATIAAgjIBIAAIAAD5QAAAlgOAbQgOAbghAPQgiAPg2gBQgTAAgUgBgAgkh4QgNALgDATQgEATAAAWQAAAXAEAUQAEASAMALQAMALAYAAQAaABAOgLQAOgKAFgRQAFgTgBgbQABgagFgSQgFgTgOgKQgOgLgaABQgYAAgMAMg");
	this.shape_22.setTransform(-46.5004,203.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:28.8513}},{t:this.shape_5,p:{x:55.925}}]},1).to({state:[{t:this.shape_11},{t:this.shape_6,p:{x:-3.8487}},{t:this.shape_10,p:{x:26.325}},{t:this.shape_5,p:{x:55.125}}]},2).to({state:[{t:this.shape_13,p:{x:-23.4237}},{t:this.shape_12},{t:this.shape_6,p:{x:37.9013}}]},2).to({state:[{t:this.shape_13,p:{x:-27.8237}},{t:this.shape_15},{t:this.shape_5,p:{x:15.275}},{t:this.shape_14,p:{x:40.1737}}]},2).to({state:[{t:this.shape_14,p:{x:-31.5763}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:60.625}}]},2).to({state:[{t:this.shape_19},{t:this.shape_10,p:{x:-16.475}},{t:this.shape_16,p:{x:16.825}},{t:this.shape_6,p:{x:45.0013}}]},2).to({state:[{t:this.shape_22},{t:this.shape_5,p:{x:-17.225}},{t:this.shape_10,p:{x:6.925}},{t:this.shape_21},{t:this.shape_20}]},2).to({state:[]},2).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-936.2,156.1,220.1,120);
p.frameBounds = [rect, rect=new cjs.Rectangle(-936.2,151.1,1003.8,125), rect, rect=new cjs.Rectangle(-936.2,151.1,1003,125), rect, rect=new cjs.Rectangle(-936.2,151.1,991.8,125), rect, rect=new cjs.Rectangle(-936.2,151.1,1003.2,125), rect, rect=new cjs.Rectangle(-936.2,151.1,1012.4,125), rect, rect=new cjs.Rectangle(-936.2,151.1,998.9,125), rect, rect=new cjs.Rectangle(-936.2,151.1,1013.6,125), rect, rect=null, rect, rect];


(lib.元件37 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AmoDYIAAmvINRAAIAAGvg");
	this.shape.setTransform(42.5,21.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(0,0,85,43.2)];


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

	// s
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape.setTransform(109.175,47.8506);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(126).to({_off:false},0).to({_off:true},31).wait(72));

	// s
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_1.setTransform(83.675,47.8506);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(97).to({_off:false},0).to({_off:true},29).wait(103));

	// a
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_2.setTransform(54.075,47.825);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(64).to({_off:false},0).to({_off:true},33).wait(132));

	// r
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_3.setTransform(29.925,47.7);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(35).to({_off:false},0).to({_off:true},29).wait(165));

	// g
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Ag4C6QgVgCgRgDIAAg5QAQADATACQATADASAAQAqAAAUgPQAUgQAAgmIAAgOQgIASgTAKQgTALgjAAQgrAAgYgSQgYgRgJgeQgKgfABgpQgBgmAKgeQAJgfAYgUQAYgSArgBQAjAAAUALQASAKAIATIAAgiIBIAAIAAD3QAAAmgOAbQgOAbghAOQghAPg3ABQgTAAgUgCgAgkh4QgNALgDATQgEATAAAWQAAAYAEASQAEATAMALQAMAMAYAAQAaAAAOgKQAOgLAFgRQAFgTgBgbQABgagFgSQgFgTgOgKQgOgLgaAAQgYABgMAMg");
	this.shape_4.setTransform(0.6496,52.7);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(7).to({_off:false},0).to({_off:true},28).wait(194));

	// 图层_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_5.setTransform(109.175,47.8506);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_6.setTransform(83.675,47.8506);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_7.setTransform(54.075,47.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_8.setTransform(29.925,47.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag4C6QgVgCgRgDIAAg5QAQADATACQATADASAAQAqAAAUgPQAUgQAAgmIAAgOQgIASgTAKQgTALgjAAQgrAAgYgSQgYgRgJgeQgKgfABgpQgBgmAKgeQAJgfAYgUQAYgSArgBQAjAAAUALQASAKAIATIAAgiIBIAAIAAD3QAAAmgOAbQgOAbghAOQghAPg3ABQgTAAgUgCgAgkh4QgNALgDATQgEATAAAWQAAAYAEASQAEATAMALQAMAMAYAAQAaAAAOgKQAOgLAFgRQAFgTgBgbQABgagFgSQgFgTgOgKQgOgLgaAAQgYABgMAMg");
	this.shape_9.setTransform(0.6496,52.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_10.setTransform(109.175,47.8506);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_11.setTransform(83.675,47.8506);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_12.setTransform(54.075,47.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_13.setTransform(29.925,47.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("Ag4C6QgVgCgRgDIAAg5QAQADATACQATADASAAQAqAAAUgPQAUgQAAgmIAAgOQgIASgTAKQgTALgjAAQgrAAgYgSQgYgRgJgeQgKgfABgpQgBgmAKgeQAJgfAYgUQAYgSArgBQAjAAAUALQASAKAIATIAAgiIBIAAIAAD3QAAAmgOAbQgOAbghAOQghAPg3ABQgTAAgUgCgAgkh4QgNALgDATQgEATAAAWQAAAYAEASQAEATAMALQAMAMAYAAQAaAAAOgKQAOgLAFgRQAFgTgBgbQABgagFgSQgFgTgOgKQgOgLgaAAQgYABgMAMg");
	this.shape_14.setTransform(0.6496,52.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},157).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},31).to({state:[]},1).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-16.8,0,141.3,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-16.8,0,141.4,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-16.8,0,141.3,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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

	// k
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape.setTransform(100.9013,47.95);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100).to({_off:false},0).to({_off:true},29).wait(64));

	// c
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADQIAQAAIBFhiIBUAAIhgB9IBkCQg");
	this.shape_1.setTransform(72.725,42.45);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(70).to({_off:false},0).to({_off:true},29).wait(94));

	// a
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_2.setTransform(39.425,47.825);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(37).to({_off:false},0).to({_off:true},33).wait(123));

	// l
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgWC4QgRgIgIgPQgHgQAAgYIAAk3IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA4IgPABIgQABQgdAAgRgHg");
	this.shape_3.setTransform(17.725,42.6);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(7).to({_off:false},0).to({_off:true},30).wait(156));

	// lack
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_4.setTransform(100.9013,47.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADQIAQAAIBFhiIBUAAIhgB9IBkCQg");
	this.shape_5.setTransform(72.725,42.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_6.setTransform(39.425,47.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgWC4QgRgIgIgPQgHgQAAgYIAAk3IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA4IgPABIgQABQgdAAgRgHg");
	this.shape_7.setTransform(17.725,42.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_8.setTransform(100.9013,47.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADQIAQAAIBFhiIBUAAIhgB9IBkCQg");
	this.shape_9.setTransform(72.725,42.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_10.setTransform(39.425,47.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgWC4QgRgIgIgPQgHgQAAgYIAAk3IBIAAIAAEmQAAARAFAHQAFAGAMAAIAHAAIAIgBIAAA4IgPABIgQABQgdAAgRgHg");
	this.shape_11.setTransform(17.725,42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},129).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},25).to({state:[]},1).wait(38));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(6.6,0,112,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(6.6,0,112.1,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(6.6,0,112,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件19_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// k
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADQIAQAAIBFhiIBUAAIhgB9IBkCQg");
	this.shape_8.setTransform(100.325,42.45);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(93).to({_off:false},0).to({_off:true},27).wait(51));

	// c
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgoCAQgegNgQgeQgQgfAAg2QAAg1AQgfQAQgfAegMQAegMApAAQAUAAASADQATABAMAFIAAA8QgOgFgOgCQgPgDgRAAQgYAAgPAHQgOAIgHARQgHARAAAfQAAAfAHASQAHARAPAHQAPAHAZAAQAQAAAPgCQAPgDAPgFIAAA8QgIADgMACIgaAEIgaABIgDAAQgnAAgdgMg");
	this.shape_9.setTransform(70.925,47.95);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(64).to({_off:false},0).to({_off:true},29).wait(78));

	// u
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhUB/QgUgKgJgUQgIgUAAgeIAAi3IBIAAIAACkQAAAbAJALQAJANAaAAQAUAAAPgJQAOgIAGgVIAAixIBIAAIAAENIhBAAIgGghQgLAUgVAIQgUAJgeAAQghAAgUgKg");
	this.shape_10.setTransform(41.525,48.2);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(34).to({_off:false},0).to({_off:true},30).wait(107));

	// d
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhZCvQgXgRgJggQgJgeAAgrQAAgnAJgfQAJgfAXgUQAYgSArgBQAkABATAKQASALAIASIAAiQIBIAAIAAF7IhCAAIgFgmQgIASgTAMQgUAMgjAAQgrABgYgSgAgkgUQgMALgEASQgEAUABAYQgBAYAEAUQAEASANALQAMALAXAAQAZABANgLQAOgJAFgTQAGgTgBgbQABgbgGgSQgFgTgOgLQgOgKgYgBQgYABgMAMg");
	this.shape_11.setTransform(8.1237,42.7);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(9).to({_off:false},0).to({_off:true},25).wait(137));

	// 图层_1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADQIAQAAIBFhiIBUAAIhgB9IBkCQg");
	this.shape_12.setTransform(100.325,42.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgoCAQgegNgQgeQgQgfAAg2QAAg1AQgfQAQgfAegMQAegMApAAQAUAAASADQATABAMAFIAAA8QgOgFgOgCQgPgDgRAAQgYAAgPAHQgOAIgHARQgHARAAAfQAAAfAHASQAHARAPAHQAPAHAZAAQAQAAAPgCQAPgDAPgFIAAA8QgIADgMACIgaAEIgaABIgDAAQgnAAgdgMg");
	this.shape_13.setTransform(70.925,47.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhUB/QgUgKgJgUQgIgUAAgeIAAi3IBIAAIAACkQAAAbAJALQAJANAaAAQAUAAAPgJQAOgIAGgVIAAixIBIAAIAAENIhBAAIgGghQgLAUgVAIQgUAJgeAAQghAAgUgKg");
	this.shape_14.setTransform(41.525,48.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhZCvQgXgRgJggQgJgeAAgrQAAgnAJgfQAJgfAXgUQAYgSArgBQAkABATAKQASALAIASIAAiQIBIAAIAAF7IhCAAIgFgmQgIASgTAMQgUAMgjAAQgrABgYgSgAgkgUQgMALgEASQgEAUABAYQgBAYAEAUQAEASANALQAMALAXAAQAZABANgLQAOgJAFgTQAGgTgBgbQABgbgGgSQgFgTgOgLQgOgKgYgBQgYABgMAMg");
	this.shape_15.setTransform(8.1237,42.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADQIAQAAIBFhiIBUAAIhgB9IBkCQg");
	this.shape_16.setTransform(100.325,42.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgoCAQgegNgQgeQgQgfAAg2QAAg1AQgfQAQgfAegMQAegMApAAQAUAAASADQATABAMAFIAAA8QgOgFgOgCQgPgDgRAAQgYAAgPAHQgOAIgHARQgHARAAAfQAAAfAHASQAHARAPAHQAPAHAZAAQAQAAAPgCQAPgDAPgFIAAA8QgIADgMACIgaAEIgaABIgDAAQgnAAgdgMg");
	this.shape_17.setTransform(70.925,47.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AhUB/QgUgKgJgUQgIgUAAgeIAAi3IBIAAIAACkQAAAbAJALQAJANAaAAQAUAAAPgJQAOgIAGgVIAAixIBIAAIAAENIhBAAIgGghQgLAUgVAIQgUAJgeAAQghAAgUgKg");
	this.shape_18.setTransform(41.525,48.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AhZCvQgXgRgJggQgJgeAAgrQAAgnAJgfQAJgfAXgUQAYgSArgBQAkABATAKQASALAIASIAAiQIBIAAIAAF7IhCAAIgFgmQgIASgTAMQgUAMgjAAQgrABgYgSgAgkgUQgMALgEASQgEAUABAYQgBAYAEAUQAEASANALQAMALAXAAQAZABANgLQAOgJAFgTQAGgTgBgbQABgbgGgSQgFgTgOgLQgOgKgYgBQgYABgMAMg");
	this.shape_19.setTransform(8.1237,42.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},120).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},27).to({state:[]},1).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-9.3,0,125.2,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-9.3,0,125.3,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-9.3,0,125.2,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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

	// d
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhZCvQgXgRgJggQgJgeAAgrQAAgnAJgfQAJgfAXgUQAYgSArgBQAkABATAKQASALAIASIAAiQIBIAAIAAF7IhCAAIgFgmQgIASgTAMQgUAMgjAAQgrABgYgSgAgkgUQgMALgEASQgEAUABAYQgBAYAEAUQAEASANALQAMALAXAAQAZABANgLQAOgJAFgTQAGgTgBgbQABgbgGgSQgFgTgOgLQgOgKgYgBQgYABgMAMg");
	this.shape.setTransform(82.3737,42.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100).to({_off:false},0).to({_off:true},33).wait(61));

	// r
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_1.setTransform(57.475,47.7);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(71).to({_off:false},0).to({_off:true},29).wait(94));

	// i
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgDgIQgDgIAAgRQAAgRADgIQADgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQADAIABARQgBARgDAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_2.setTransform(37.85,42.2708);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(40).to({_off:false},0).to({_off:true},31).wait(123));

	// b
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgSC7QgQgFgKgKQgKgJgFgNIgFAmIhCAAIAAl7IBJAAIAACOQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAeAAArQAAAngJAgQgIAfgYASQgXATgsAAQgYABgRgGgAglgWQgOAKgFASQgGATABAcQgBAZAGAUQAFASAOALQAOAKAXAAQAZAAAMgLQAMgMAEgTQAEgTAAgXQAAgagEgSQgEgTgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_3.setTransform(14.3763,42.7);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(11).to({_off:false},0).to({_off:true},29).wait(154));

	// bird
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhZCvQgXgRgJggQgJgeAAgrQAAgnAJgfQAJgfAXgUQAYgSArgBQAkABATAKQASALAIASIAAiQIBIAAIAAF7IhCAAIgFgmQgIASgTAMQgUAMgjAAQgrABgYgSgAgkgUQgMALgEASQgEAUABAYQgBAYAEAUQAEASANALQAMALAXAAQAZABANgLQAOgJAFgTQAGgTgBgbQABgbgGgSQgFgTgOgLQgOgKgYgBQgYABgMAMg");
	this.shape_4.setTransform(82.3737,42.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_5.setTransform(57.475,47.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgDgIQgDgIAAgRQAAgRADgIQADgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQADAIABARQgBARgDAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_6.setTransform(37.85,42.2708);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSC7QgQgFgKgKQgKgJgFgNIgFAmIhCAAIAAl7IBJAAIAACOQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAeAAArQAAAngJAgQgIAfgYASQgXATgsAAQgYABgRgGgAglgWQgOAKgFASQgGATABAcQgBAZAGAUQAFASAOALQAOAKAXAAQAZAAAMgLQAMgMAEgTQAEgTAAgXQAAgagEgSQgEgTgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_7.setTransform(14.3763,42.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhZCvQgXgRgJggQgJgeAAgrQAAgnAJgfQAJgfAXgUQAYgSArgBQAkABATAKQASALAIASIAAiQIBIAAIAAF7IhCAAIgFgmQgIASgTAMQgUAMgjAAQgrABgYgSgAgkgUQgMALgEASQgEAUABAYQgBAYAEAUQAEASANALQAMALAXAAQAZABANgLQAOgJAFgTQAGgTgBgbQABgbgGgSQgFgTgOgLQgOgKgYgBQgYABgMAMg");
	this.shape_8.setTransform(82.3737,42.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_9.setTransform(57.475,47.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgDgIQgDgIAAgRQAAgRADgIQADgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQADAIABARQgBARgDAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_10.setTransform(37.85,42.2708);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgSC7QgQgFgKgKQgKgJgFgNIgFAmIhCAAIAAl7IBJAAIAACOQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAeAAArQAAAngJAgQgIAfgYASQgXATgsAAQgYABgRgGgAglgWQgOAKgFASQgGATABAcQgBAZAGAUQAFASAOALQAOAKAXAAQAZAAAMgLQAMgMAEgTQAEgTAAgXQAAgagEgSQgEgTgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_11.setTransform(14.3763,42.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},133).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},22).to({state:[]},1).wait(38));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-4.4,0,106.6,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-4.4,0,106.7,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-4.4,0,106.6,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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

	// e
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape.setTransform(91.3013,47.95);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(65).to({_off:false},0).to({_off:true},30).wait(52));

	// e
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_1.setTransform(61.0013,47.95);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(33).to({_off:false},0).to({_off:true},32).wait(82));

	// b
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgSC7QgQgFgKgKQgKgJgFgNIgFAmIhCAAIAAl7IBJAAIAACOQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAeAAArQAAAngJAgQgIAfgYASQgXATgsAAQgYABgRgGgAglgWQgOAKgFASQgGATABAcQgBAZAGAUQAFASAOALQAOAKAXAAQAZAAAMgLQAMgMAEgTQAEgTAAgXQAAgagEgSQgEgTgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_2.setTransform(29.9763,42.7);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(9).to({_off:false},0).to({_off:true},24).wait(114));

	// bee
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_3.setTransform(91.3013,47.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_4.setTransform(61.0013,47.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSC7QgQgFgKgKQgKgJgFgNIgFAmIhCAAIAAl7IBJAAIAACOQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAeAAArQAAAngJAgQgIAfgYASQgXATgsAAQgYABgRgGgAglgWQgOAKgFASQgGATABAcQgBAZAGAUQAFASAOALQAOAKAXAAQAZAAAMgLQAMgMAEgTQAEgTAAgXQAAgagEgSQgEgTgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_5.setTransform(29.9763,42.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_6.setTransform(91.3013,47.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_7.setTransform(61.0013,47.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgSC7QgQgFgKgKQgKgJgFgNIgFAmIhCAAIAAl7IBJAAIAACOQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAeAAArQAAAngJAgQgIAfgYASQgXATgsAAQgYABgRgGgAglgWQgOAKgFASQgGATABAcQgBAZAGAUQAFASAOALQAOAKAXAAQAZAAAMgLQAMgMAEgTQAEgTAAgXQAAgagEgSQgEgTgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_8.setTransform(29.9763,42.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},95).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},27).to({state:[]},1).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(11.2,0,97.8,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(11.2,0,97.9,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(11.2,0,97.8,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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


(lib.元件14_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// r
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_1.setTransform(109.325,47.7);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(100).to({_off:false},0).to({_off:true},28).wait(72));

	// a
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_2.setTransform(80.525,47.825);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(66).to({_off:false},0).to({_off:true},34).wait(100));

	// e
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_3.setTransform(50.3513,47.95);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(33).to({_off:false},0).to({_off:true},33).wait(134));

	// h
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAzC+IAAilQAAgbgJgLQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAKAJATQAIAVAAAdIAAC4g");
	this.shape_4.setTransform(18.825,42.45);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(7).to({_off:false},0).to({_off:true},26).wait(167));

	// hear
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_5.setTransform(109.325,47.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_6.setTransform(80.525,47.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_7.setTransform(50.3513,47.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAzC+IAAilQAAgbgJgLQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAKAJATQAIAVAAAdIAAC4g");
	this.shape_8.setTransform(18.825,42.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_9.setTransform(109.325,47.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_10.setTransform(80.525,47.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_11.setTransform(50.3513,47.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAzC+IAAilQAAgbgJgLQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAKAJATQAIAVAAAdIAAC4g");
	this.shape_12.setTransform(18.825,42.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},128).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},22).to({state:[]},1).wait(49));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.8,0,120.2,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0.8,0,120.3,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0.8,0,120.2,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{scaleY:1.1478,y:0.2548}},{t:this.shape_2,p:{scaleY:1.1478,y:0.2548}},{t:this.shape_1,p:{scaleY:1.1478,y:0.2548}},{t:this.shape,p:{scaleY:1.1478,y:0.2548}}]}).to({state:[{t:this.shape_10},{t:this.shape_4},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{scaleY:1.1477,y:0.2664}},{t:this.shape_2,p:{scaleY:1.1477,y:0.2664}},{t:this.shape_1,p:{scaleY:1.1477,y:0.2664}},{t:this.shape,p:{scaleY:1.1477,y:0.2664}}]},1).wait(2));

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


(lib.元件10_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// r
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_3.setTransform(110.125,47.7);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(131).to({_off:false},0).to({_off:true},32).wait(67));

	// e
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_4.setTransform(83.0513,47.95);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(98).to({_off:false},0).to({_off:true},33).wait(99));

	// v
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgsCHIhhkNIBQAAIA9DCIACAAIA/jCIBNAAIhiENg");
	this.shape_5.setTransform(52.875,47.95);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(65).to({_off:false},0).to({_off:true},33).wait(132));

	// i
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgEgIQgDgIAAgRQAAgRADgIQAEgIAJgDQAJgCAPAAQAQAAAJACQAJADAEAIQACAIAAARQAAARgCAIQgEAIgJADQgJACgQAAQgPAAgJgCg");
	this.shape_6.setTransform(30.25,42.2708);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(31).to({_off:false},0).to({_off:true},34).wait(165));

	// r
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_7.setTransform(13.525,47.7);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(6).to({_off:false},0).to({_off:true},25).wait(199));

	// 图层_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_8.setTransform(110.125,47.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_9.setTransform(83.0513,47.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgsCHIhhkNIBQAAIA9DCIACAAIA/jCIBNAAIhiENg");
	this.shape_10.setTransform(52.875,47.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgEgIQgDgIAAgRQAAgRADgIQAEgIAJgDQAJgCAPAAQAQAAAJACQAJADAEAIQACAIAAARQAAARgCAIQgEAIgJADQgJACgQAAQgPAAgJgCg");
	this.shape_11.setTransform(30.25,42.2708);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_12.setTransform(13.525,47.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_13.setTransform(110.125,47.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_14.setTransform(83.0513,47.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgsCHIhhkNIBQAAIA9DCIACAAIA/jCIBNAAIhiENg");
	this.shape_15.setTransform(52.875,47.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgEgIQgDgIAAgRQAAgRADgIQAEgIAJgDQAJgCAPAAQAQAAAJACQAJADAEAIQACAIAAARQAAARgCAIQgEAIgJADQgJACgQAAQgPAAgJgCg");
	this.shape_16.setTransform(30.25,42.2708);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_17.setTransform(13.525,47.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},163).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},24).to({state:[]},1).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,121.8,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,121.9,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,121.8,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
	this.btnpage_1 = new lib.元件3复制2();
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
	this.btnpage_3 = new lib.元件18复制();
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

	this.instance = new lib.元件17复制2();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnpage_2}]}).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-32.1,-31.8,64.7,64.6);
p.frameBounds = [rect, new cjs.Rectangle(-31,-31,62.1,62)];


(lib.单词拼读mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {label0:0,river:2,hear:191,bee:343,bird:467,duck:624,lake:773,grass:929,end:1118};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_190 = function() {
		this.stop();
	}
	this.frame_342 = function() {
		this.stop();
	}
	this.frame_466 = function() {
		this.stop();
	}
	this.frame_623 = function() {
		this.stop();
	}
	this.frame_772 = function() {
		this.stop();
	}
	this.frame_928 = function() {
		this.stop();
	}
	this.frame_1117 = function() {
		this.stop();
	}
	this.frame_1133 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(189).call(this.frame_190).wait(152).call(this.frame_342).wait(124).call(this.frame_466).wait(157).call(this.frame_623).wait(149).call(this.frame_772).wait(156).call(this.frame_928).wait(189).call(this.frame_1117).wait(16).call(this.frame_1133).wait(7));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ag5CKQBPgWASg2Ig9AAQgKAAgNADIgLgLIBgAAQAFgeAAg8IAcANIgKAIQgCA0gEARIAtAAIAQgPIAVAXIhTAAIgKAVQAjALARAKQARAKADAJQACAJgDADQgDAEgDAAQgGAAgIgMQgMgRgpgVQggArhFALgAhmBtQAFgGAAgLIAAh1IgEAAQgQAAgNADIgLgLIAsAAIALgLIAPAQIgLAJIAAB1IAtgbIADADQgoAjgOASgAgLAhQgJgPgSgNIABgEQAdAKAGAGQAFAGAAAGQAAAEgDAFQgCAFgBABQgDAAgFgLgAAGgBQgGgNgTgPIACgEQAbAIAFAIQAFAGAAAFQAAAFgDADQgDAGgBAAQgDgBgEgIgABegSIAQgfIiJAAQgKAAgNAEIgLgLIBVAAIAAgmIgdAAQgQABgNAEIgLgLIBFAAIgBgqIAaAMIgJAJIAAAVIArAAIAOgOIATAUIhMAAIAAAmIBEAAIAMgNIAWAWQgRABgaAegAhfhbQgDgPgRgUIACgEQARAKALAKQAMAJgCAKQgCAKgHADIgCABQgGAAgDgOg");
	this.shape.setTransform(-781.875,429.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ABGBbIAAhIIg1AAQgCAwgRAcQgTAcgeASIgDgEQAXgRAOgcQAQgcABgtIgbAAIgMACIgJgKIAwAAIAAhIIgJAAIgKACIgKgKIBXAAQAJgOAKgVQAJgWACgPIAbASQgMADgMARIgaAiIAeAAIAPgPIAXAXIguAAIAABIIARAAIAQgOIAXAWIg4AAIAABSIABAgIgTAJIABgzgAARALIA1AAIAAhIIg1AAgAiDB0IAAgFQAZADAHAAQAHgBABgOIAAhWQgiAXgBAHIgQgWQAMgCAngUIAAg8IgdAAIgMACIgKgKIAzAAIgBhHIAdANIgLAKIAAAwIAMAAIAOgNIAUAVIguAAIAAA1IAogVIADAFIgrAbIAABpQAAAWgaAKQgBgOgegKgAAHhdQgDgSgQgYIADgDQAcAUAFAJQAFAJgDAHQgCAHgEAEIgFAEQgGAAgCgPg");
	this.shape_1.setTransform(-811.65,429.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AA4BtIAAgFQAkADAIAAQAHgBAAgJIAAjUIhoAAQgJABgNADIgLgLICHAAIAMgMIASASIgMAIIAADVQAAALgFAHQgGAHgNAFQgHgSgkgIgAhdBhQAFgIAAgJIAAhzIgGAAQgPABgOADIgLgLIAsAAIAMgMIAQAQIgKAHIAABvIAogkIACAEIgdAmIgTAdgAgWAYIgBg2IARAJIAwAAIAMgNIARARIgLAIIABBKIgQAHIAAgXIgzAAIAAAXIgRAIIABg4gAgGAqIAzAAIAAg4IgzAAgAgqhCIBhAAIANgOIAUAVIhgAAQgJAAgOAEgAhThkQgGgRgQgOIACgDQAXAIAKAJQAKAJgCAKQgDAJgGADIgDAAQgFAAgEgOg");
	this.shape_2.setTransform(-842.2,429.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgLBFIhoAAIgQADIgJgKICBAAIAAgmIhCAAIAAAOIgSAIIABhDIgBhDIATAKIBbAAQAJgNAJgTQAJgSADgOIAZASQgKAEgMAMQgLAMgOASIAwAAIAJgKIAUAOIgLAIQAABJABAXIgRAHIAAgNIhEAAIAAAmIBaAAIAUgTIAaAaIiIAAQAAAyABAQIgTAIIAChKgAAFARIBEAAIAAgpIhEAAgAhNARIBCAAIAAgpIhCAAgAAFgfIBEAAIAAgnIhEAAgAhNgfIBCAAIAAgnIhCAAgAgqhiQgHgTgRgTIADgEQAQAKANAKQANAKgBAJQgBAJgEAEIgFAEQgFAAgFgOg");
	this.shape_3.setTransform(-871.6,429.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AxLJYIAAyvMAiXAAAIAASvg");
	this.shape_4.setTransform(-826.175,430);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},929).to({state:[]},189).wait(22));

	// 单词
	this.instance = new lib.元件10_1("synched",0);
	this.instance.setTransform(6.7,181.45,1,1,0,0,0,60.9,40.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgFQAPgEAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_5.setTransform(55.925,188.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgeAdgNQAegNAqABQAuABAaAOQAZAPAJAbQAKAagBAkIgBAUIgBAQIitALQABAdASAOQASANAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAIgcAFQgcAGgjAAIgDAAQgnAAgcgMgAglhGQgNAPgBAgIBtgIQABgPgEgMQgEgMgLgHQgKgHgVAAQggAAgOAOg");
	this.shape_6.setTransform(28.8513,188.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgsCHIhhkNIBQAAIA9DCIACAAIA/jCIBNAAIhiENg");
	this.shape_7.setTransform(-1.325,188.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgkDAIAAkNIBIAAIAAENgAgYh1QgJgDgEgIQgCgIAAgRQAAgRACgIQAEgIAJgDQAJgCAPAAQAQAAAJACQAJADAEAIQADAIAAARQAAARgDAIQgEAIgJADQgJACgQAAQgPAAgJgCg");
	this.shape_8.setTransform(-23.95,182.9208);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgFQAPgEAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_9.setTransform(-40.675,188.35);

	this.instance_1 = new lib.元件14_1("synched",0);
	this.instance_1.setTransform(6.7,181.45,1,1,0,0,0,60.9,40.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_10.setTransform(26.325,188.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAzC+IAAilQAAgagJgNQgKgMgZABQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAJAJAUQAIAUAAAeIAAC4g");
	this.shape_11.setTransform(-35.375,183.1);

	this.instance_2 = new lib.元件17("synched",0);
	this.instance_2.setTransform(6.7,181.45,1,1,0,0,0,60.1,40.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgeAdgNQAegNAqABQAuABAaAOQAZAPAJAbQAKAagBAkIgBAUIgBAQIitALQABAdASAOQASANAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAIgcAFQgcAGgjAAIgDAAQgnAAgcgMgAglhGQgNAPgBAgIBtgIQABgPgEgMQgEgMgLgHQgKgHgVAAQggAAgOAOg");
	this.shape_12.setTransform(7.6013,188.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSC7QgQgFgKgKQgKgJgFgOIgFAnIhCAAIAAl8IBJAAIAACPQAHgPAUgLQATgLAigBQAsABAXARQAYARAIAfQAJAeAAAsQAAAngJAfQgIAggYASQgXATgsAAQgYAAgRgFgAglgWQgOAKgFASQgGATABAcQgBAZAGAUQAFATAOAKQAOAKAXAAQAZAAAMgLQAMgMAEgTQAEgTAAgXQAAgagEgSQgEgTgMgLQgNgLgYAAQgXAAgOAKg");
	this.shape_13.setTransform(-23.4237,183.35);

	this.instance_3 = new lib.元件18("synched",0);
	this.instance_3.setTransform(6.7,181.45,1,1,0,0,0,48.9,40.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhZCvQgXgRgJgfQgJggAAgqQAAgnAJgfQAJgfAXgUQAYgSArgBQAkAAATALQASALAIASIAAiRIBIAAIAAF8IhCAAIgFgmQgIASgTANQgUALgjAAQgrAAgYgRgAgkgVQgMAMgEATQgEATABAYQgBAYAEATQAEAUANALQAMAKAXAAQAZABANgKQAOgKAFgTQAGgTgBgbQABgagGgTQgFgTgOgLQgOgLgYABQgYAAgMALg");
	this.shape_14.setTransform(40.1737,183.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgkDAIAAkNIBIAAIAAENgAgYh1QgJgDgEgIQgCgIAAgRQAAgRACgIQAEgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQAEAIAAARQAAARgEAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_15.setTransform(-4.35,182.9208);

	this.instance_4 = new lib.元件19_1("synched",0);
	this.instance_4.setTransform(6.7,181.45,1,1,0,0,0,53.3,40.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADQIAQAAIBFhiIBUAAIhgB9IBkCQg");
	this.shape_16.setTransform(53.725,183.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgoCAQgegNgQgeQgQgfAAg2QAAg1AQgfQAQgeAegNQAegNApABQAUAAASADQATABAMAEIAAA9QgOgEgOgDQgPgCgRgBQgYAAgPAIQgOAGgHASQgHARAAAfQAAAfAHASQAHARAPAHQAPAHAZAAQAQAAAPgCQAPgDAPgFIAAA7QgIADgMADIgaADIgaACIgDAAQgnAAgdgMg");
	this.shape_17.setTransform(24.325,188.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhUB/QgUgKgJgUQgIgUAAgeIAAi3IBIAAIAACkQAAAaAJAMQAJANAaAAQAUAAAPgJQAOgJAGgUIAAixIBIAAIAAENIhBAAIgGghQgLATgVAJQgUAKgegBQghAAgUgKg");
	this.shape_18.setTransform(-5.075,188.85);

	this.instance_5 = new lib.元件20("synched",0);
	this.instance_5.setTransform(6.7,181.45,1,1,0,0,0,62.6,40.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgWC4QgRgIgIgPQgHgPAAgZIAAk4IBIAAIAAEnQAAASAFAGQAFAHAMgBIAHAAIAIgCIAAA5IgPACIgQABQgdgBgRgHg");
	this.shape_19.setTransform(-38.175,183.25);

	this.instance_6 = new lib.元件21("synched",0);
	this.instance_6.setTransform(6.75,181.45,1,1,0,0,0,53.9,40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:28.8513}},{t:this.shape_5,p:{x:55.925}}]},188).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_11},{t:this.shape_6,p:{x:-3.8487}},{t:this.shape_10,p:{x:26.325}},{t:this.shape_5,p:{x:55.125}}]},151).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_13,p:{x:-23.4237}},{t:this.shape_12},{t:this.shape_6,p:{x:37.9013}}]},123).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_13,p:{x:-27.8237}},{t:this.shape_15},{t:this.shape_5,p:{x:15.275}},{t:this.shape_14,p:{x:40.1737}}]},156).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.shape_14,p:{x:-38.4763}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:53.725}}]},148).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.shape_19},{t:this.shape_10,p:{x:-16.475}},{t:this.shape_16,p:{x:16.825}},{t:this.shape_6,p:{x:45.0013}}]},155).to({state:[{t:this.instance_6}]},1).to({state:[]},189).wait(22));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-936.2,370,220.1,120);
p.frameBounds = [rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1003.8,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1003.9,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1003.8,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1003,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1003.1,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1003,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,991.8,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,991.9,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,991.8,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,996.2,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,996.3,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,996.2,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1005.5,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1005.6,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1005.5,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,998.9,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,999,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,998.9,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1013.6,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1013.7,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1013.6,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=null, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.ClipGroup_64 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AtkLNIAA2ZIbJAAIAAWZg");
	mask.setTransform(87.3,72.05);

	// 图层_3
	this.instance = new lib.ClipGroup_8();
	this.instance.setTransform(87.1,71.9,1,1,0,0,0,87.1,71.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_64, rect = new cjs.Rectangle(0.4,0.4,173.9,143.4), [rect]);


(lib.ClipGroup_63 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_9();
	this.instance.setTransform(87.1,71.9,1,1,0,0,0,87.1,71.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_63, rect = new cjs.Rectangle(0,0,174.3,143.8), [rect]);


(lib.ClipGroup_62 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_10();
	this.instance.setTransform(17.6,143.5,1,1,0,0,0,17.6,143.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_62, rect = new cjs.Rectangle(0,0,35.1,287), [rect]);


(lib.ClipGroup_61 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_11();
	this.instance.setTransform(87.1,71.8,1,1,0,0,0,87.1,71.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_61, rect = new cjs.Rectangle(0,0,174.3,143.6), [rect]);


(lib.ClipGroup_60 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_12();
	this.instance.setTransform(87.1,71.8,1,1,0,0,0,87.1,71.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_60, rect = new cjs.Rectangle(0,0,174.3,143.6), [rect]);


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_3
	this.s_river = new lib.元件37();
	this.s_river.name = "s_river";
	this.s_river.setTransform(42.55,28.6,1,1,0,0,0,42.5,21.6);
	new cjs.ButtonHelper(this.s_river, 0, 1, 2, false, new lib.元件37(), 3);

	this.timeline.addTween(cjs.Tween.get(this.s_river).to({_off:true},1).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape.setTransform(69.075,30.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_1.setTransform(53.1792,30.5265);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgPBUIg/inIAbAAIAzCMIABAAIAxiMIAdAAIg/Cng");
	this.shape_2.setTransform(36.05,30.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMBzIAAinIAaAAIAACngAgLhVQgEgDAAgKQAAgKAEgDQAEgDAHAAQAIAAAFADQADADAAAKQAAAKgDADQgFADgIAAQgHAAgEgDg");
	this.shape_3.setTransform(23.75,27.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_4.setTransform(14.825,30.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmMCmIAAlMIMZAAIAAFMg");
	this.shape_5.setTransform(39.675,28.6855,1,1.1201);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_6.setTransform(69.075,30.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_7.setTransform(53.1792,30.5265);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgPBUIg/inIAbAAIAzCMIABAAIAxiMIAdAAIg/Cng");
	this.shape_8.setTransform(36.05,30.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgMBzIAAinIAaAAIAACngAgLhVQgEgDAAgKQAAgKAEgDQAEgDAHAAQAIAAAFADQADADAAAKQAAAKgDADQgFADgIAAQgHAAgEgDg");
	this.shape_9.setTransform(23.75,27.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_10.setTransform(14.825,30.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,85.1,52.1);
p.frameBounds = [rect, new cjs.Rectangle(0,0,79.4,52.1)];


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_3
	this.s_grass = new lib.元件37();
	this.s_grass.name = "s_grass";
	this.s_grass.setTransform(45,28.6,1.0588,1,0,0,0,42.5,21.6);
	new cjs.ButtonHelper(this.s_grass, 0, 1, 2, false, new lib.元件37(), 3);

	this.timeline.addTween(cjs.Tween.get(this.s_grass).to({_off:true},1).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIARADIARAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgPgEQgSgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgLgCgLAAQgQAAgKAFQgJAGAAAOQABAIACAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgRAMgeAAIgSgBg");
	this.shape.setTransform(78.9,30.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIARADIARAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgPgEQgSgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgLgCgLAAQgQAAgKAFQgJAGABAOQAAAIACAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgRAMgeAAIgSgBg");
	this.shape_1.setTransform(64.05,30.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIBXQgZAAgRgOQgQgMgJgaIgCgOIgBgMIAAgJQAAgZALgUQAKgTAWgOQAIgDAIgCQAIgDAIAAIACAAQAcAAAUAfIAAgIIAAAAIABgBIAZAAIAAABIABAAIAABYIABAfQABAPADANIgCAAIgZAAQgBABgCgHIgCgUIgGAIIgGAIQgIAHgJACQgJADgKABgAgcg1QgNAKgIASIgCANQgCAGAAAGIAAAHQAAAQAGANQAHANAMALQAGACAFABQAGACAGgBIAFAAQAvAAAAg6IAAgKQAAgYgIgOQgJgPgRgFIgFAAIgFAAIAAAAQgRAAgOAJg");
	this.shape_2.setTransform(46.45,30.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_3.setTransform(32.875,30.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbBzIgTgDIAAgWIAUACIAVABQAaABAOgNQAOgNAAgcIAAgRQgFAPgNAIQgNAIgXAAQgbAAgPgKQgQgLgGgTQgFgSAAgaQAAgXAFgUQAGgTAQgLQAPgMAbAAQAQAAALAEQALAFAGAHQAGAIAEAKIAAgfIAaAAIAACaQAAAjgUAUQgTATgqAAIgVgBgAgfhUQgJAJgDAOQgDAPAAAQQAAASADANQADAOAKAIQAKAJATAAQATAAALgIQAMgHAEgOQAFgNgBgUQABgTgFgOQgEgOgMgIQgLgIgTAAQgUAAgKAJg");
	this.shape_4.setTransform(15.575,33.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIARADIARAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgPgEQgSgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgLgCgLAAQgQAAgKAFQgJAGAAAOQABAIACAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgRAMgeAAIgSgBg");
	this.shape_5.setTransform(78.9,30.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIARADIARAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgPgEQgSgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgLgCgLAAQgQAAgKAFQgJAGABAOQAAAIACAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgRAMgeAAIgSgBg");
	this.shape_6.setTransform(64.05,30.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIBXQgZAAgRgOQgQgMgJgaIgCgOIgBgMIAAgJQAAgZALgUQAKgTAWgOQAIgDAIgCQAIgDAIAAIACAAQAcAAAUAfIAAgIIAAAAIABgBIAZAAIAAABIABAAIAABYIABAfQABAPADANIgCAAIgZAAQgBABgCgHIgCgUIgGAIIgGAIQgIAHgJACQgJADgKABgAgcg1QgNAKgIASIgCANQgCAGAAAGIAAAHQAAAQAGANQAHANAMALQAGACAFABQAGACAGgBIAFAAQAvAAAAg6IAAgKQAAgYgIgOQgJgPgRgFIgFAAIgFAAIAAAAQgRAAgOAJg");
	this.shape_7.setTransform(46.45,30.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_8.setTransform(32.875,30.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbBzIgTgDIAAgWIAUACIAVABQAaABAOgNQAOgNAAgcIAAgRQgFAPgNAIQgNAIgXAAQgbAAgPgKQgQgLgGgTQgFgSAAgaQAAgXAFgUQAGgTAQgLQAPgMAbAAQAQAAALAEQALAFAGAHQAGAIAEAKIAAgfIAaAAIAACaQAAAjgUAUQgTATgqAAIgVgBgAgfhUQgJAJgDAOQgDAPAAAQQAAASADANQADAOAKAIQAKAJATAAQATAAALgIQAMgHAEgOQAFgNgBgUQABgTgFgOQgEgOgMgIQgLgIgTAAQgUAAgKAJg");
	this.shape_9.setTransform(15.575,33.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AmMCmIAAlMIMZAAIAAFMg");
	this.shape_10.setTransform(46.3654,30.8355,1.1688,1.1201);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIARADIARAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgPgEQgSgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgLgCgLAAQgQAAgKAFQgJAGAAAOQABAIACAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgRAMgeAAIgSgBg");
	this.shape_11.setTransform(78.9,30.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIARADIARAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgPgEQgSgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgLgCgLAAQgQAAgKAFQgJAGABAOQAAAIACAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgRAMgeAAIgSgBg");
	this.shape_12.setTransform(64.05,30.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgIBXQgZAAgRgOQgQgMgJgaIgCgOIgBgMIAAgJQAAgZALgUQAKgTAWgOQAIgDAIgCQAIgDAIAAIACAAQAcAAAUAfIAAgIIAAAAIABgBIAZAAIAAABIABAAIAABYIABAfQABAPADANIgCAAIgZAAQgBABgCgHIgCgUIgGAIIgGAIQgIAHgJACQgJADgKABgAgcg1QgNAKgIASIgCANQgCAGAAAGIAAAHQAAAQAGANQAHANAMALQAGACAFABQAGACAGgBIAFAAQAvAAAAg6IAAgKQAAgYgIgOQgJgPgRgFIgFAAIgFAAIAAAAQgRAAgOAJg");
	this.shape_13.setTransform(46.45,30.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_14.setTransform(32.875,30.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgbBzIgTgDIAAgWIAUACIAVABQAaABAOgNQAOgNAAgcIAAgRQgFAPgNAIQgNAIgXAAQgbAAgPgKQgQgLgGgTQgFgSAAgaQAAgXAFgUQAGgTAQgLQAPgMAbAAQAQAAALAEQALAFAGAHQAGAIAEAKIAAgfIAaAAIAACaQAAAjgUAUQgTATgqAAIgVgBgAgfhUQgJAJgDAOQgDAPAAAQQAAASADANQADAOAKAIQAKAJATAAQATAAALgIQAMgHAEgOQAFgNgBgUQABgTgFgOQgEgOgMgIQgLgIgTAAQgUAAgKAJg");
	this.shape_15.setTransform(15.575,33.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,92.8,52.1);
p.frameBounds = [rect, rect];


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_3
	this.s_bee = new lib.元件37();
	this.s_bee.name = "s_bee";
	this.s_bee.setTransform(42.55,28.6,1,1,0,0,0,42.5,21.6);
	new cjs.ButtonHelper(this.s_bee, 0, 1, 2, false, new lib.元件37(), 3);

	this.timeline.addTween(cjs.Tween.get(this.s_bee).to({_off:true},1).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape.setTransform(59.3292,30.5265);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_1.setTransform(41.4292,30.5265);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeBuQgNgIgEgPIgEAdIgXAAIAAjqIAbAAIAABiQAFgPAMgJQANgJAXAAQAcAAAPALQAPALAGATQAFATAAAaQAAAXgFAUQgGATgPAMQgPAMgcAAQgXAAgNgJgAgcgXQgLAIgFAOQgFANAAAVQAAATAFAOQAFAPALAIQALAIATAAQAUgBAKgJQAJgJADgOQADgPAAgQQAAgSgDgPQgDgNgKgJQgJgJgUAAQgTAAgLAIg");
	this.shape_2.setTransform(23.075,27.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AmMCmIAAlMIMZAAIAAFMg");
	this.shape_3.setTransform(39.675,29.5355,1,1.1201);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_4.setTransform(59.3292,30.5265);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_5.setTransform(41.4292,30.5265);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgeBuQgNgIgEgPIgEAdIgXAAIAAjqIAbAAIAABiQAFgPAMgJQANgJAXAAQAcAAAPALQAPALAGATQAFATAAAaQAAAXgFAUQgGATgPAMQgPAMgcAAQgXAAgNgJgAgcgXQgLAIgFAOQgFANAAAVQAAATAFAOQAFAPALAIQALAIATAAQAUgBAKgJQAJgJADgOQADgPAAgQQAAgSgDgPQgDgNgKgJQgJgJgUAAQgTAAgLAIg");
	this.shape_6.setTransform(23.075,27.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,85.1,52.1);
p.frameBounds = [rect, new cjs.Rectangle(0,0,79.4,52.1)];


(lib.元件33 = function(mode,startPosition,loop,reversed) {
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

	// 图层_3
	this.s_hear = new lib.元件37();
	this.s_hear.name = "s_hear";
	this.s_hear.setTransform(39.5,28.6,0.9294,1,0,0,0,42.5,21.6);
	new cjs.ButtonHelper(this.s_hear, 0, 1, 2, false, new lib.元件37(), 3);

	this.timeline.addTween(cjs.Tween.get(this.s_hear).to({_off:true},1).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape.setTransform(68.125,30.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJBXQgYAAgRgOQgRgMgHgaIgDgOIgBgMIAAgJQAAgZALgUQALgTAUgOQAJgDAIgCQAJgDAHAAIACAAQAcAAATAfIAAgIIAAAAIABgBIAZAAIABABIAAAAIAABYIABAfQACAPADANIgBAAIgaAAQgBABgBgHIgDgUIgFAIIgHAIQgIAHgJACQgJADgKABgAgcg1QgNAKgHASIgEANQgBAGAAAGIAAAHQAAAQAHANQAGANAMALQAFACAGABQAFACAGgBIAGAAQAvAAAAg6IAAgKQAAgYgJgOQgIgPgQgFIgGAAIgEAAIgBAAQgRAAgOAJg");
	this.shape_1.setTransform(51,30.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_2.setTransform(33.2792,30.5265);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAqB2IAAhqQAAgMgDgJQgCgJgHgFQgHgFgOAAQgJAAgKACQgKADgIAHQgIAHgEAOIAABxIgbAAIAAjrIAbAAIAABcQAFgKAIgGQAJgGALgDQAJgCAKAAQAWAAAMAHQAMAHAGAMQAFANgBAPIAAB0g");
	this.shape_3.setTransform(14.7773,27.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmMCmIAAlMIMZAAIAAFMg");
	this.shape_4.setTransform(39.675,28.3355,1,1.1201);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_5.setTransform(68.125,30.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgJBXQgYAAgRgOQgRgMgHgaIgDgOIgBgMIAAgJQAAgZALgUQALgTAUgOQAJgDAIgCQAJgDAHAAIACAAQAcAAATAfIAAgIIAAAAIABgBIAZAAIABABIAAAAIAABYIABAfQACAPADANIgBAAIgaAAQgBABgBgHIgDgUIgFAIIgHAIQgIAHgJACQgJADgKABgAgcg1QgNAKgHASIgEANQgBAGAAAGIAAAHQAAAQAHANQAGANAMALQAFACAGABQAFACAGgBIAGAAQAvAAAAg6IAAgKQAAgYgJgOQgIgPgQgFIgGAAIgEAAIgBAAQgRAAgOAJg");
	this.shape_6.setTransform(51,30.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_7.setTransform(33.2792,30.5265);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAqB2IAAhqQAAgMgDgJQgCgJgHgFQgHgFgOAAQgJAAgKACQgKADgIAHQgIAHgEAOIAABxIgbAAIAAjrIAbAAIAABcQAFgKAIgGQAJgGALgDQAJgCAKAAQAWAAAMAHQAMAHAGAMQAFANgBAPIAAB0g");
	this.shape_8.setTransform(14.7773,27.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,79.4,52.1);
p.frameBounds = [rect, rect];


(lib.元件32 = function(mode,startPosition,loop,reversed) {
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

	// 图层_3
	this.s_lake = new lib.元件37();
	this.s_lake.name = "s_lake";
	this.s_lake.setTransform(42.55,28.6,1,1,0,0,0,42.5,21.6);
	new cjs.ButtonHelper(this.s_lake, 0, 1, 2, false, new lib.元件37(), 3);

	this.timeline.addTween(cjs.Tween.get(this.s_lake).to({_off:true},1).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape.setTransform(61.7292,30.5265);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAfB2Ig8hOIgJAAIAABOIgbAAIAAjrIAbAAIAACIIAKAAIA5hEIAhAAIhGBNIBKBag");
	this.shape_1.setTransform(46.075,27.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJBXQgYAAgRgOQgQgMgJgaIgCgOIgBgMIAAgJQAAgZALgUQALgTAUgOQAJgDAIgCQAJgDAHAAIACAAQAcAAAUAfIAAgIIAAAAIABgBIAZAAIAAABIABAAIAABYIABAfQABAPADANIgCAAIgZAAQgBABgCgHIgCgUIgGAIIgGAIQgIAHgJACQgJADgKABgAgcg1QgNAKgHASIgDANQgCAGAAAGIAAAHQAAAQAGANQAHANAMALQAGACAFABQAFACAHgBIAFAAQAvAAAAg6IAAgKQAAgYgIgOQgJgPgRgFIgFAAIgEAAIgBAAQgRAAgOAJg");
	this.shape_2.setTransform(26.55,30.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgRBuQgKgIAAgTIAAjJIAbAAIAADCQAAAMADAFQAEAEAIgBIAGAAIAGgBIAAAWIgIABIgJABQgSAAgJgJg");
	this.shape_3.setTransform(14.45,27.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmMCmIAAlMIMZAAIAAFMg");
	this.shape_4.setTransform(39.675,28.8355,1,1.1201);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_5.setTransform(61.7292,30.5265);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAfB2Ig8hOIgJAAIAABOIgbAAIAAjrIAbAAIAACIIAKAAIA5hEIAhAAIhGBNIBKBag");
	this.shape_6.setTransform(46.075,27.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgJBXQgYAAgRgOQgQgMgJgaIgCgOIgBgMIAAgJQAAgZALgUQALgTAUgOQAJgDAIgCQAJgDAHAAIACAAQAcAAAUAfIAAgIIAAAAIABgBIAZAAIAAABIABAAIAABYIABAfQABAPADANIgCAAIgZAAQgBABgCgHIgCgUIgGAIIgGAIQgIAHgJACQgJADgKABgAgcg1QgNAKgHASIgDANQgCAGAAAGIAAAHQAAAQAGANQAHANAMALQAGACAFABQAFACAHgBIAFAAQAvAAAAg6IAAgKQAAgYgIgOQgJgPgRgFIgFAAIgEAAIgBAAQgRAAgOAJg");
	this.shape_7.setTransform(26.55,30.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgRBuQgKgIAAgTIAAjJIAbAAIAADCQAAAMADAFQAEAEAIgBIAGAAIAGgBIAAAWIgIABIgJABQgSAAgJgJg");
	this.shape_8.setTransform(14.45,27.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,85.1,52.1);
p.frameBounds = [rect, new cjs.Rectangle(0,0,79.4,52.1)];


(lib.元件24 = function(mode,startPosition,loop,reversed) {
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

	// 图层_3
	this.s_duck = new lib.元件37();
	this.s_duck.name = "s_duck";
	this.s_duck.setTransform(42.55,28.6,1,1,0,0,0,42.5,21.6);
	new cjs.ButtonHelper(this.s_duck, 0, 1, 2, false, new lib.元件37(), 3);

	this.timeline.addTween(cjs.Tween.get(this.s_duck).to({_off:true},1).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAfB2Ig8hOIgJAAIAABOIgbAAIAAjrIAbAAIAACIIAKAAIA5hEIAhAAIhGBNIBKBag");
	this.shape.setTransform(70.025,27.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQASgIAYAAQAOAAALACQALACAHADIAAAYQgJgEgLgCQgKgCgNAAQgRAAgLAGQgLAGgFAOQgEAOAAAXQgBAZAFANQAFAOALAGQALAFARAAQAMAAALgBQAMgCAJgEIAAAZIgMADIgQACIgQABIgDAAQgWAAgRgIg");
	this.shape_1.setTransform(53.175,30.5265);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgtBOQgLgGgGgNQgEgMAAgQIAAhzIAaAAIAABpQAAANADAJQACAJAHAFQAHAFANAAQAKAAAJgCQAKgDAHgHQAIgHAFgOIAAhxIAbAAIAACmIgXAAIgDgYQgGALgJAGQgIAGgKACQgJACgKAAQgWAAgNgHg");
	this.shape_2.setTransform(35.7,30.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgwBsQgPgLgGgTQgFgUAAgZQAAgYAFgSQAGgUAPgMQAPgMAcAAQAXAAANAJQANAIAFAPIAAhhIAaAAIAADqIgWAAIgEgbQgFANgOAJQgNAIgWAAQgcAAgPgLgAgfgVQgJAJgDANQgDAPAAARQAAARADAPQADAOAKAJQAKAJATAAQATAAALgIQAMgIAEgOQAFgOgBgUQABgUgFgNQgEgPgMgIQgLgIgTAAQgUAAgKAKg");
	this.shape_3.setTransform(15.925,27.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmMCmIAAlMIMZAAIAAFMg");
	this.shape_4.setTransform(39.675,29.6355,1,1.1201);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAfB2Ig8hOIgJAAIAABOIgbAAIAAjrIAbAAIAACIIAKAAIA5hEIAhAAIhGBNIBKBag");
	this.shape_5.setTransform(70.025,27.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgZBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQASgIAYAAQAOAAALACQALACAHADIAAAYQgJgEgLgCQgKgCgNAAQgRAAgLAGQgLAGgFAOQgEAOAAAXQgBAZAFANQAFAOALAGQALAFARAAQAMAAALgBQAMgCAJgEIAAAZIgMADIgQACIgQABIgDAAQgWAAgRgIg");
	this.shape_6.setTransform(53.175,30.5265);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgtBOQgLgGgGgNQgEgMAAgQIAAhzIAaAAIAABpQAAANADAJQACAJAHAFQAHAFANAAQAKAAAJgCQAKgDAHgHQAIgHAFgOIAAhxIAbAAIAACmIgXAAIgDgYQgGALgJAGQgIAGgKACQgJACgKAAQgWAAgNgHg");
	this.shape_7.setTransform(35.7,30.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgwBsQgPgLgGgTQgFgUAAgZQAAgYAFgSQAGgUAPgMQAPgMAcAAQAXAAANAJQANAIAFAPIAAhhIAaAAIAADqIgWAAIgEgbQgFANgOAJQgNAIgWAAQgcAAgPgLgAgfgVQgJAJgDANQgDAPAAARQAAARADAPQADAOAKAJQAKAJATAAQATAAALgIQAMgIAEgOQAFgOgBgUQABgUgFgNQgEgPgMgIQgLgIgTAAQgUAAgKAKg");
	this.shape_8.setTransform(15.925,27.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,85.1,52.1);
p.frameBounds = [rect, new cjs.Rectangle(0,0,79.4,52.1)];


(lib.元件23 = function(mode,startPosition,loop,reversed) {
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

	// 图层_3
	this.s_bird = new lib.元件37();
	this.s_bird.name = "s_bird";
	this.s_bird.setTransform(42.55,28.6,1,1,0,0,0,42.5,21.6);
	new cjs.ButtonHelper(this.s_bird, 0, 1, 2, false, new lib.元件37(), 3);

	this.timeline.addTween(cjs.Tween.get(this.s_bird).to({_off:true},1).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgwBsQgPgLgGgTQgFgUAAgZQAAgYAFgSQAGgUAPgMQAPgMAcAAQAXAAANAJQANAIAFAPIAAhhIAaAAIAADqIgWAAIgEgbQgFANgOAJQgNAIgWAAQgcAAgPgLgAgfgVQgJAJgDANQgDAPAAARQAAARADAPQADAOAKAJQAKAJATAAQATAAALgIQAMgIAEgOQAFgOgBgUQABgUgFgNQgEgPgMgIQgLgIgTAAQgUAAgKAKg");
	this.shape.setTransform(59.025,27.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_1.setTransform(44.875,30.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNBzIAAinIAaAAIAACngAgLhVQgEgDAAgKQAAgKAEgDQADgDAJAAQAIAAAEADQADADAAAKQAAAKgDADQgEADgIAAQgJAAgDgDg");
	this.shape_2.setTransform(33.75,27.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeBuQgNgIgEgPIgEAdIgXAAIAAjqIAbAAIAABiQAFgPAMgJQANgJAXAAQAcAAAPALQAPALAGATQAFATAAAaQAAAXgFAUQgGATgPAMQgPAMgcAAQgXAAgNgJgAgcgXQgLAIgFAOQgFANAAAVQAAATAFAOQAFAPALAIQALAIATAAQAUgBAKgJQAJgJADgOQADgPAAgQQAAgSgDgPQgDgNgKgJQgJgJgUAAQgTAAgLAIg");
	this.shape_3.setTransform(20.225,27.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmMCmIAAlMIMZAAIAAFMg");
	this.shape_4.setTransform(39.675,27.3855,1,1.1201);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgwBsQgPgLgGgTQgFgUAAgZQAAgYAFgSQAGgUAPgMQAPgMAcAAQAXAAANAJQANAIAFAPIAAhhIAaAAIAADqIgWAAIgEgbQgFANgOAJQgNAIgWAAQgcAAgPgLgAgfgVQgJAJgDANQgDAPAAARQAAARADAPQADAOAKAJQAKAJATAAQATAAALgIQAMgIAEgOQAFgOgBgUQABgUgFgNQgEgPgMgIQgLgIgTAAQgUAAgKAKg");
	this.shape_5.setTransform(59.025,27.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_6.setTransform(44.875,30.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgNBzIAAinIAaAAIAACngAgLhVQgEgDAAgKQAAgKAEgDQADgDAJAAQAIAAAEADQADADAAAKQAAAKgDADQgEADgIAAQgJAAgDgDg");
	this.shape_7.setTransform(33.75,27.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgeBuQgNgIgEgPIgEAdIgXAAIAAjqIAbAAIAABiQAFgPAMgJQANgJAXAAQAcAAAPALQAPALAGATQAFATAAAaQAAAXgFAUQgGATgPAMQgPAMgcAAQgXAAgNgJgAgcgXQgLAIgFAOQgFANAAAVQAAATAFAOQAFAPALAIQALAIATAAQAUgBAKgJQAJgJADgOQADgPAAgQQAAgSgDgPQgDgNgKgJQgJgJgUAAQgTAAgLAIg");
	this.shape_8.setTransform(20.225,27.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,85.1,52.1);
p.frameBounds = [rect, new cjs.Rectangle(0,0,79.4,52.1)];


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
				console.log(_this.parent.audio);
				console.log(_this.parent.audio.paused);
				if (!_this.parent.audio || _this.parent.audio.ended) {
					console.log("音频无法播放");
					return;
				}
				
		
				// 更新按钮状态
				_this._pausebtn.visible = true;
				_this._playbtn.visible = false;
				_this._replaybtn.visible = false;
		
				// 调用父级的播放方法
				console.log(_this.parent);
				_this.parent.onplaybtn();
			} else if (_this._pausebtn.visible == true) {
				// 检查音频是否可以暂停
				console.log(_this.parent.audio);
				console.log(_this.parent.audio.ended);
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

	this._seekBarMc = new lib.元件11复制();
	this._seekBarMc.name = "_seekBarMc";
	this._seekBarMc.setTransform(134.65,13.15,1,1,0,0,0,-115,-11);
	new cjs.ButtonHelper(this._seekBarMc, 0, 1, 1);

	this.instance = new lib.元件11();
	this.instance.setTransform(249.45,24.15);

	this._pausebtn = new lib.元件15();
	this._pausebtn.name = "_pausebtn";
	this._pausebtn.setTransform(24.25,23.85);
	new cjs.ButtonHelper(this._pausebtn, 0, 1, 2, false, new lib.元件15(), 3);

	this._prevbtn = new lib.元件13();
	this._prevbtn.name = "_prevbtn";
	this._prevbtn.setTransform(82,23.85);
	new cjs.ButtonHelper(this._prevbtn, 0, 1, 2, false, new lib.元件13(), 3);

	this._nextbtn = new lib.元件12();
	this._nextbtn.name = "_nextbtn";
	this._nextbtn.setTransform(415.75,23.85);
	new cjs.ButtonHelper(this._nextbtn, 0, 1, 2, false, new lib.元件12(), 3);

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
	this.shape_1.setTransform(412.2091,23.4432,0.9827,1.1474,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_2.setTransform(412.2091,23.4432,0.9827,1.1474,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_3.setTransform(422.6506,23.4432,0.9827,1.1474,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_4.setTransform(422.6506,23.4432,0.9827,1.1474,0,0,180);

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


(lib.元件38 = function(mode,startPosition,loop,reversed) {
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
		this.addEventListener("click", onthis);
		var _this = this;
		function onthis(e) {
			if(!e.target.name)return;
			var _cliname = e.target.name;
			if (_cliname.split("_")[0] == "s") {
				_this.parent.parent.parent.toPlayWord(_cliname.split("_")[1]);
				if (e.target.parent) {
					_this.reset();
					e.target.parent.gotoAndStop(1);
				}
			}
			
		}
		
		
		function getAllChildren(mc) {
			if (!mc || !mc.children) {
				console.error('无效的 MovieClip 对象或 children 未定义');
				return []; // 返回空数组
			}
		
			var allChildren = [];
			var children = mc.children;
		
			for (var i = 0; i < children.length; i++) {
				var child = children[i];
				allChildren.push(child);
				// 递归获取子元件的子元件
				/*var childChildren = getAllChildren(child);
				allChildren = allChildren.concat(childChildren);*/
			}
			return allChildren;
		}
		
		// 使用函数获取所有子元件
		var allChildren = getAllChildren(this);
		
		this.reset = function () {
			for (var j = 0; j < allChildren.length; j++) {
				console.log(j);
				console.log("所有子元件名称: " + allChildren[j].name);
				allChildren[j].gotoAndStop(0);
			}
		}
		//this.reset();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.instance = new lib.元件35();
	this.instance.setTransform(46.4,274,1,1,0,0,0,46.4,26.1);

	this.instance_1 = new lib.元件36();
	this.instance_1.setTransform(47.05,439.9,1,1,0,0,0,39.6,26.1);

	this.instance_2 = new lib.元件34();
	this.instance_2.setTransform(530.75,264.7,1,1,0,0,0,39.6,26.1);

	this.instance_3 = new lib.元件33();
	this.instance_3.setTransform(378.95,196.6,1,1,0,0,0,39.6,26.1);

	this.instance_4 = new lib.元件32();
	this.instance_4.setTransform(656.75,144.65,1,1,0,0,0,39.6,26.1);

	this.instance_5 = new lib.元件24();
	this.instance_5.setTransform(634.1,37.45,1,1,0,0,0,39.6,26.1);

	this.instance_6 = new lib.元件23();
	this.instance_6.setTransform(494.8,26.1,1,1,0,0,0,39.6,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件38, rect = new cjs.Rectangle(0,0,696.5,465.9), [rect]);


(lib.clickname = function(mode,startPosition,loop,reversed) {
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
		this._cliWordMc.visible=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(586));

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ag5CKQBPgVASg3Ig9AAQgKAAgNAEIgLgMIBgAAQAFgdAAg+IAcAOIgKAJQgCAzgEARIAtAAIAQgPIAVAXIhTAAIgKAWQAjAKARAKQARAKADAJQACAJgDADQgDAFgDAAQgGAAgIgNQgMgQgpgXQggAshFALgAhmBtQAFgGAAgLIAAh2IgEAAQgQAAgNAEIgLgLIAsAAIALgLIAPAQIgLAIIAAB2IAtgcIADAEQgoAjgOASgAgLAhQgJgPgSgNIABgDQAdAJAGAGQAFAGAAAGQAAAEgDAFQgCAGgBgBQgDAAgFgKgAAGgCQgGgMgTgPIACgEQAbAJAFAGQAFAHAAAFQAAAEgDAFQgDAEgBAAQgDABgEgKgABegTIAQgdIiJAAQgKAAgNADIgLgLIBVAAIAAglIgdAAQgQAAgNADIgLgLIBFAAIgBgpIAaANIgJAIIAAAUIArAAIAOgNIATAVIhMAAIAAAlIBEAAIAMgNIAWAVQgRACgaAegAhfhbQgDgPgRgUIACgDQARAJALAJQAMALgCAJQgCAKgHAEIgCAAQgGAAgDgOg");
	this.shape.setTransform(-771.125,-67.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ABsB8QgGgUgTgbIACgEQAYASAJALQAJAMAAAGQAAAGgFAHIgFAFQgGAAgDgOgAh6CHQgEgDAAgDQAAgDAGgGQALgIAFgHQAFgHALgWIAEAAQgHAvgIAIQgIAIgGgBQgEAAgFgDgAgfB8QgCgSgNgYIACgEQAaAUADAIQACAHAAAEQAAAIgFAGQgFAGgBgBQgGAAgBgMgAAiB4QgDgUgOgUIADgDQAWARAGAKQAGAJAAAEQAAAGgGAGQgFAGgCAAQgFAAgCgPgAhSAPIgBg5IAUAKIA0AAQAAhSgCgXIAbALIgJAJIAAAdIBPAAIAQgQIAVAXIh0AAIAAAxIA9AAIAMgNIATATIgLAIIABBNIgSAHIAAgSIiEAAIAAAOIgUAIIABg3gAg/ApICEAAIAAhCIiEAAg");
	this.shape_1.setTransform(-800.9,-67.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AA4BuIAAgHQAkAEAHgBQAIAAAAgKIAAjSIhoAAQgJgBgNAEIgLgLICHAAIAMgMIASASIgMAIIAADVQAAAKgGAIQgFAHgOAFQgGgSgkgHgAhdBgQAFgHAAgKIAAhxIgGAAQgPAAgOADIgLgLIArAAIAMgMIAQAPIgJAIIAABuIAogjIACAEIgcAlIgVAdgAgVAXIgBg1IAQAIIAwAAIAMgLIARARIgLAHIABBKIgRAHIAAgXIgyAAIAAAXIgQAHIABg4gAgGAqIAyAAIAAg4IgyAAgAgqhCIBhAAIAOgNIATAUIhgAAQgKAAgNADgAhThkQgGgRgQgNIADgEQAWAJAJAIQALAKgDAIQgCAKgHADIgCAAQgFAAgEgOg");
	this.shape_2.setTransform(-831.45,-66.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgMBFIhmAAIgQACIgKgKICAAAIAAglIhBAAIAAAPIgSAHIABhDIgBhEIATALIBbAAQAIgNAKgTQAJgSAEgOIAXASQgJAEgLAMQgMAMgPASIAxAAIAJgLIAUAPIgLAJQAABIACAXIgRAHIAAgNIhGAAIAAAlIBbAAIATgTIAbAbIiJAAQAAAyABAPIgSAJIABhKgAAEARIBGAAIAAgoIhGAAgAhNARIBBAAIAAgoIhBAAgAAEgeIBGAAIAAgpIhGAAgAhNgeIBBAAIAAgpIhBAAgAgqhjQgHgRgRgUIACgDQASAJAMALQANAKgBAIQAAAJgFAEIgFAEQgFAAgFgPg");
	this.shape_3.setTransform(-860.85,-67.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AzDJOIAAybMAmHAAAIAASbg");
	this.shape_4.setTransform(-807.9,-63.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(586));

	// click
	this._cliWordMc = new lib.元件38();
	this._cliWordMc.name = "_cliWordMc";
	this._cliWordMc.setTransform(34.65,-5.6,1,1,0,0,0,351.1,233);

	this.timeline.addTween(cjs.Tween.get(this._cliWordMc).wait(586));

	// txt
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("ABMBtQgRgIgJgTQgJgTAAghQAAghAJgTQAJgTARgIQAQgHAZAAQAVAAANAGQAOAGAGALQAIAKACAMQADALAAANIAAAIIgCALIhxAIQAAASAEAMQAFALAMAGQAMAGAVAAQAOAAANgDQAPgDAKgFIAAAYQgFADgJACIgUAEQgLABgMAAIgCABQgYAAgQgIgABXgcQgKAHgEAMQgEALAAASIBZgHQgBgNgCgKQgDgLgJgGQgIgHgSAAQgUAAgKAGgADmBxIAAimIAbAAIAAAeQAFgOAIgHQAJgHAKgDQAKgCALAAIADAAIgBAYIgEAAQgLAAgKADQgKADgIAIQgIAIgEAOIAABtgAhKBxIg/imIAbAAIA0CMIACAAIAwiMIAbAAIg9CmgAjCBxIAAimIAbAAIAACmgAk4BxIAAimIAbAAIAAAeQAFgOAJgHQAIgHALgDQAKgCAKAAIAEAAIgBAYIgFAAQgKAAgKADQgLADgHAIQgJAIgEAOIAABtgAjBhXQgEgDAAgKQAAgKAEgDQADgDAJAAQAJAAADADQAEADAAAKQAAAKgEADQgDADgJAAQgJAAgDgDg");
	this.shape_5.setTransform(-267.05,202.7515);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AmMCmIAAlMIMZAAIAAFMg");
	this.shape_6.setTransform(-269.325,203.8855,1,1.1201);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("ACTBwQgRgIgJgTQgJgTAAghQAAghAJgTQAJgTARgIQAQgHAZAAQAVAAANAGQANAGAHALQAHAKADAMQADALgBANIAAAIIgBALIhyAIQAAASAFAMQAFALAMAGQAMAGAUAAQAOAAAOgDQAPgDAKgFIAAAYQgFADgJACIgUAEQgLABgMAAIgCAAQgYAAgQgHgACegZQgKAHgEAMQgEALgBASIBZgHQAAgNgCgKQgDgLgJgGQgJgHgRAAQgUAAgKAGgAgfBwQgRgIgJgTQgJgTAAghQAAghAJgTQAJgTARgIQAQgHAYAAQAVAAANAGQANAGAHALQAHAKADAMQADALgBANIAAAIIgBALIhxAIQAAASAFAMQAFALAMAGQAMAGATAAQAOAAAOgDQAPgDAKgFIAAAYQgFADgJACIgUAEQgLABgMAAIgCAAQgXAAgQgHgAgUgZQgKAHgEAMQgEALgBASIBYgHQAAgNgCgKQgDgLgJgGQgJgHgRAAQgTAAgKAGgAjRBuQgNgIgFgPIgDAdIgYAAIAAjqIAbAAIAABiQAFgPANgJQANgJAXAAQAcAAAPALQAPALAGATQAGATAAAaQAAAXgGAUQgGATgPAMQgPAMgcAAQgYAAgMgJgAjPgXQgMAIgFAOQgEANAAAVQAAATAEAOQAFAPAMAIQALAIAUAAQAUgBAJgJQAKgJADgOQADgPAAgQQAAgSgDgPQgEgNgJgJQgKgJgTAAQgUAAgLAIg");
	this.shape_7.setTransform(215.7042,27.2765);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AOwHEQgRgIgJgTQgJgTAAghQAAghAJgTQAJgTARgIQAQgIAZAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBALIhyAHQAAASAFAMQAFAMAMAGQAMAFAUAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgCAAQgYAAgQgIgAO7E7QgKAGgEANQgEAMgBARIBZgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgUAAgKAHgAL9HEQgRgIgJgTQgJgTAAghQAAghAJgTQAJgTARgIQAQgIAZAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBALIhyAHQAAASAFAMQAFAMAMAGQAMAFAUAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgCAAQgYAAgQgIgAMIE7QgKAGgEANQgEAMgBARIBZgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgUAAgKAHgAJLHDQgNgJgFgOIgDAdIgYAAIAAjsIAbAAIAABiQAFgPANgJQANgJAXAAQAcAAAPALQAPALAGAUQAGATAAAaQAAAYgGATQgGAUgPAMQgPALgcABQgYAAgMgJgAJNE8QgMAIgFAPQgEAOAAAUQAAATAEAPQAFAOAMAIQALAIAUAAQAUAAAJgJQAKgJADgPQADgOAAgRQAAgSgDgOQgEgPgJgJQgKgIgTAAQgUAAgLAHgAtCjkQgRgIgJgTQgJgTAAghQAAghAJgTQAJgTARgIQARgIAYAAQAVAAAOAHQANAGAHAKQAHAKADANQACAMAAAMIAAAJIgCALIhxAHQAAASAFAMQAFAMAMAGQALAFAVAAQAOAAAOgDQAOgDAKgFIAAAZQgFADgJACIgTADQgLACgMAAIgDAAQgXAAgRgIgAs2ltQgLAGgEANQgEAMAAARIBZgGQAAgNgDgLQgDgLgIgHQgJgHgSAAQgTAAgKAHgAp2jcQgYAAgRgNQgRgNgIgaIgCgOIgBgMIAAgJQAAgaALgUQAKgTAVgNQAJgEAIgCQAIgCAIAAIACAAQAdAAATAeIAAgIIABgBIAZAAIABABIAAAAIAABZIABAfQACAPADANIgCABIgZAAQgBAAgCgHIgCgUIgGAJIgGAIQgIAGgJADQgJADgLAAgAqJloQgNAJgIATIgDAMQgBAGAAAHIAAAHQAAAQAGANQAHAOAMAKQAFACAGABQAFACAGAAIAGAAQAwAAAAg7IAAgKQAAgZgJgOQgIgOgRgFIgFAAIgFgBIAAAAQgTAAgNAKgAnrjfIAAioIAbAAIAAAfQAFgOAJgHQAJgIAKgCQAKgDAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgIAIQgIAJgFAOIAABugAutjfIAAhqQAAgNgCgJQgDgJgHgFQgHgFgNAAQgLAAgKACQgJADgIAHQgIAHgFAPIAABxIgbAAIAAjsIAbAAIAABcQAFgKAJgGQAJgGAKgDQAKgCALAAQAVAAANAHQAMAHAFAMQAFANAAAQIAAB0g");
	this.shape_8.setTransform(136.0042,-6.7735);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIARADIARAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgPgEQgSgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgLgCgLAAQgQAAgJAFQgKAGABAOQgBAIADAFQADAFAHADIASAFQAUAEAMAGQALAFAFAKQAFAKAAAQQAAAZgRALQgPAMgfAAIgSgBg");
	this.shape_9.setTransform(-237.55,39.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIARADIARAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgPgEQgSgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgLgCgLAAQgQAAgJAFQgKAGABAOQgBAIADAFQADAFAHADIASAFQAUAEAMAGQALAFAFAKQAFAKAAAQQAAAZgRALQgPAMgfAAIgSgBg");
	this.shape_10.setTransform(-252.4,39.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgJBXQgYgBgRgNQgQgNgJgaIgCgNIgBgMIAAgJQAAgaALgTQALgUAUgMQAJgFAIgBQAIgCAIAAIACAAQAcAAAUAeIAAgIIAAgBIABAAIAZAAIAAAAIABABIAABYIABAfQABAPADANIgCABIgZAAQgBAAgCgHIgCgUIgGAJIgGAIQgIAFgJAEQgJADgKAAgAgcg1QgNAKgIASIgCANQgCAGAAAGIAAAGQAAARAGANQAHANAMALQAGACAFABQAFABAHAAIAFAAQAvABAAg7IAAgJQAAgZgIgOQgJgOgRgGIgFAAIgEAAIgBAAQgRAAgOAJg");
	this.shape_11.setTransform(-270,39.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_12.setTransform(-283.575,39.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgbBzIgTgDIAAgWIAUACIAVABQAaABAOgNQAOgNAAgcIAAgRQgFAPgNAIQgNAIgXAAQgbAAgPgKQgQgLgGgTQgFgSAAgaQAAgXAFgUQAGgTAQgLQAPgMAbAAQAQAAALAEQALAFAGAHQAGAIAEAKIAAgfIAaAAIAACaQAAAjgUAUQgTATgqAAIgVgBgAgfhUQgJAJgDAOQgDAPAAAQQAAASADANQADAOAKAIQAKAJATAAQATAAALgIQAMgHAEgOQAFgNgBgUQABgTgFgOQgEgOgMgIQgLgIgTAAQgUAAgKAJg");
	this.shape_13.setTransform(-300.875,42.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIARADIARAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgPgEQgSgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgLgCgLAAQgQAAgJAFQgKAGABAOQgBAIADAFQADAFAHADIASAFQAUAEAMAGQALAFAFAKQAFAKAAAQQAAAZgRALQgPAMgfAAIgSgBg");
	this.shape_14.setTransform(-237.55,39.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIARADIARAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgPgEQgSgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgLgCgLAAQgQAAgJAFQgKAGABAOQgBAIADAFQADAFAHADIASAFQAUAEAMAGQALAFAFAKQAFAKAAAQQAAAZgRALQgPAMgfAAIgSgBg");
	this.shape_15.setTransform(-252.4,39.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgJBXQgYgBgRgNQgQgNgJgaIgCgNIgBgMIAAgJQAAgaALgTQALgUAUgMQAJgFAIgBQAIgCAIAAIACAAQAcAAAUAeIAAgIIAAgBIABAAIAZAAIAAAAIABABIAABYIABAfQABAPADANIgCABIgZAAQgBAAgCgHIgCgUIgGAJIgGAIQgIAFgJAEQgJADgKAAgAgcg1QgNAKgIASIgCANQgCAGAAAGIAAAGQAAARAGANQAHANAMALQAGACAFABQAFABAHAAIAFAAQAvABAAg7IAAgJQAAgZgIgOQgJgOgRgGIgFAAIgEAAIgBAAQgRAAgOAJg");
	this.shape_16.setTransform(-270,39.85);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_17.setTransform(-283.575,39.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgbBzIgTgDIAAgWIAUACIAVABQAaABAOgNQAOgNAAgcIAAgRQgFAPgNAIQgNAIgXAAQgbAAgPgKQgQgLgGgTQgFgSAAgaQAAgXAFgUQAGgTAQgLQAPgMAbAAQAQAAALAEQALAFAGAHQAGAIAEAKIAAgfIAaAAIAACaQAAAjgUAUQgTATgqAAIgVgBgAgfhUQgJAJgDAOQgDAPAAAQQAAASADANQADAOAKAIQAKAJATAAQATAAALgIQAMgHAEgOQAFgNgBgUQABgTgFgOQgEgOgMgIQgLgIgTAAQgUAAgKAJg");
	this.shape_18.setTransform(-300.875,42.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6,p:{scaleX:1,x:-269.325,y:203.8855}},{t:this.shape_5}]},18).to({state:[]},29).to({state:[{t:this.shape_7}]},5).to({state:[{t:this.shape_8}]},53).to({state:[]},1).to({state:[{t:this.shape_6,p:{scaleX:1.1688,x:-270.0846,y:40.1355}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},380).to({state:[{t:this.shape_6,p:{scaleX:1.1688,x:-270.0846,y:40.1355}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},64).wait(36));

	// 图层_5
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_19.setTransform(-239.925,205.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_20.setTransform(-255.8208,205.7265);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgPBUIg/inIAbAAIAzCMIACAAIAwiMIAcAAIg+Cng");
	this.shape_21.setTransform(-272.95,205.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMBzIAAimIAaAAIAACmgAgLhVQgEgDAAgKQAAgKAEgDQADgDAIAAQAJAAADADQAEADAAAKQAAAKgEADQgDADgJAAQgIAAgDgDg");
	this.shape_22.setTransform(-285.25,202.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_23.setTransform(-294.175,205.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AmMCmIAAlMIMZAAIAAFMg");
	this.shape_24.setTransform(-269.325,203.8855,1,1.1201);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AhoBwQgRgIgJgTQgJgTAAghQAAghAJgTQAJgTARgIQARgHAYAAQAVAAAOAGQANAGAHALQAHAKACAMQACALAAANIAAAIIgCALIhwAIQAAASAFAMQAFALAMAGQALAGAVAAQAOAAAOgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgLABgMAAIgDAAQgXAAgRgHgAhcgZQgLAHgEAMQgEALAAASIBZgHQAAgNgDgKQgDgLgIgGQgJgHgSAAQgTAAgKAGgABjB3QgYAAgRgNQgRgNgIgaIgCgNIgBgMIAAgKQAAgaALgSQAKgUAVgNQAJgEAIgCQAIgCAIAAIACAAQAdAAATAeIAAgIIABAAIAZAAIABAAIAAABIAABYIABAfQACAPADANIgCAAIgZAAQgBAAgCgGIgCgUIgGAIIgGAIQgIAGgJADQgJADgLAAgABQgUQgNAKgIARIgDANQgBAGAAAGIAAAHQAAARAGANQAHANAMAKQAFADAGABQAFABAGAAIAGAAQAwAAAAg6IAAgLQAAgYgJgNQgIgPgRgFIgFAAIgFAAIAAAAQgTAAgNAJgADuB0IAAimIAbAAIAAAeQAFgOAJgHQAJgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgIAIQgIAIgFAOIAABtgAjTB0IAAhqQAAgMgCgJQgDgJgHgFQgHgEgNAAQgLgBgKADQgJACgIAHQgIAIgFANIAABxIgbAAIAAjqIAbAAIAABcQAFgLAJgGQAJgGAKgCQAKgCALAAQAVAAANAHQAMAHAFAMQAFAMAAAPIAAB0g");
	this.shape_25.setTransform(63.025,-40.8235);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AmMCmIAAlMIMZAAIAAFMg");
	this.shape_26.setTransform(62.575,-39.7645,1,1.1201);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AmMCmIAAlMIMZAAIAAFMg");
	this.shape_27.setTransform(-269.325,203.8855,1,1.1201);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_28.setTransform(91.025,-37.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgIBXQgZgBgRgNQgQgNgJgaIgCgNIgBgMIAAgJQAAgaALgTQAKgUAWgMQAIgFAIgBQAIgCAIAAIACAAQAcAAAUAdIAAgHIAAgBIABAAIAZAAIAAAAIABABIAABYIABAfQABAPADANIgCABIgZAAQgBAAgCgHIgCgUIgGAJIgGAIQgIAFgJAEQgJADgKAAgAgcg1QgNAKgIASIgCANQgCAGAAAGIAAAGQAAARAGANQAHANAMALQAGACAFABQAGABAGAAIAFAAQAvABAAg7IAAgJQAAgZgIgOQgJgOgRgGIgFAAIgFAAIAAAAQgRAAgOAJg");
	this.shape_29.setTransform(73.9,-37.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_30.setTransform(56.1792,-37.5735);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AAqB2IAAhqQAAgMgDgJQgCgJgHgFQgHgFgOAAQgJAAgKACQgKADgIAHQgIAHgEAOIAABxIgbAAIAAjrIAbAAIAABcQAFgKAIgGQAJgGALgDQAJgCAKAAQAWAAAMAHQAMAHAGAMQAFANgBAPIAAB0g");
	this.shape_31.setTransform(37.6773,-40.975);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgIBXQgZgBgRgNQgQgNgJgaIgCgNIgBgMIAAgJQAAgaALgTQAKgUAWgMQAIgFAIgBQAIgCAIAAIACAAQAcAAAUAdIAAgHIAAgBIABAAIAZAAIAAAAIABABIAABYIABAfQABAPADANIgCABIgZAAQgBAAgCgHIgCgUIgGAJIgGAIQgIAFgJAEQgJADgKAAgAgcg1QgNAKgIASIgCANQgCAGAAAGIAAAGQAAARAGANQAHANAMALQAGACAFABQAGABAGAAIAFAAQAvABAAg7IAAgJQAAgZgIgOQgJgOgRgGIgFAAIgFAAIAAAAQgRAAgOAJg");
	this.shape_32.setTransform(73.9,-37.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAqB2IAAhqQAAgMgDgJQgCgJgHgFQgHgFgOAAQgJAAgKACQgKADgIAHQgIAHgEAOIAABxIgbAAIAAjrIAbAAIAABcQAFgKAIgGQAJgGALgDQAJgCAKAAQAWAAAMAHQAMAHAGAMQAFANgBAPIAAB0g");
	this.shape_33.setTransform(37.6773,-40.975);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_34.setTransform(-255.8208,205.7265);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_35.setTransform(-294.175,205.575);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_36.setTransform(216.1292,30.5265);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgeBuQgNgIgEgPIgEAdIgXAAIAAjqIAbAAIAABiQAFgPAMgJQANgJAXAAQAcAAAPALQAPALAGATQAFATAAAaQAAAXgFAUQgGATgPAMQgPAMgcAAQgXAAgNgJgAgcgXQgLAIgFAOQgFANAAAVQAAATAFAOQAFAPALAIQALAIATAAQAUgBAKgJQAJgJADgOQADgPAAgQQAAgSgDgPQgDgNgKgJQgJgJgUAAQgTAAgLAIg");
	this.shape_37.setTransform(197.775,27.275);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgeBuQgNgIgEgPIgEAdIgXAAIAAjqIAbAAIAABiQAFgPAMgJQANgJAXAAQAcAAAPALQAPALAGATQAFATAAAaQAAAXgFAUQgGATgPAMQgPAMgcAAQgXAAgNgJgAgcgXQgLAIgFAOQgFANAAAVQAAATAFAOQAFAPALAIQALAIATAAQAUgBAKgJQAJgJADgOQADgPAAgQQAAgSgDgPQgDgNgKgJQgJgJgUAAQgTAAgLAIg");
	this.shape_38.setTransform(197.775,27.275);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_39.setTransform(56.1792,-37.5735);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_40.setTransform(-255.8208,205.7265);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AgwBsQgPgLgGgTQgFgUAAgZQAAgYAFgSQAGgUAPgMQAPgMAcAAQAXAAANAJQANAIAFAPIAAhhIAaAAIAADqIgWAAIgEgbQgFANgOAJQgNAIgWAAQgcAAgPgLgAgfgVQgJAJgDANQgDAPAAARQAAARADAPQADAOAKAJQAKAJATAAQATAAALgIQAMgIAEgOQAFgOgBgUQABgUgFgNQgEgPgMgIQgLgIgTAAQgUAAgKAKg");
	this.shape_41.setTransform(197.775,-211.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AgMBzIAAinIAaAAIAACngAgLhVQgEgDAAgKQAAgKAEgDQAEgDAHAAQAIAAAFADQADADAAAKQAAAKgDADQgFADgIAAQgHAAgEgDg");
	this.shape_42.setTransform(172.5,-211.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AmMCmIAAlMIMZAAIAAFMg");
	this.shape_43.setTransform(-269.325,203.8855,1,1.1201);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgwBsQgPgLgGgTQgFgUAAgZQAAgYAFgSQAGgUAPgMQAPgMAcAAQAXAAANAJQANAIAFAPIAAhhIAaAAIAADqIgWAAIgEgbQgFANgOAJQgNAIgWAAQgcAAgPgLgAgfgVQgJAJgDANQgDAPAAARQAAARADAPQADAOAKAJQAKAJATAAQATAAALgIQAMgIAEgOQAFgOgBgUQABgUgFgNQgEgPgMgIQgLgIgTAAQgUAAgKAKg");
	this.shape_44.setTransform(197.775,-211.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgMBzIAAinIAaAAIAACngAgLhVQgEgDAAgKQAAgKAEgDQAEgDAHAAQAIAAAFADQADADAAAKQAAAKgDADQgFADgIAAQgHAAgEgDg");
	this.shape_45.setTransform(172.5,-211.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgeBuQgNgIgEgPIgEAdIgXAAIAAjqIAbAAIAABiQAFgPAMgJQANgJAXAAQAcAAAPALQAPALAGATQAFATAAAaQAAAXgFAUQgGATgPAMQgPAMgcAAQgXAAgNgJgAgcgXQgLAIgFAOQgFANAAAVQAAATAFAOQAFAPALAIQALAIATAAQAUgBAKgJQAJgJADgOQADgPAAgQQAAgSgDgPQgDgNgKgJQgJgJgUAAQgTAAgLAIg");
	this.shape_46.setTransform(197.775,27.275);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_47.setTransform(-294.175,205.575);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF0000").s().p("ABRBwQgRgIgJgTQgJgTAAghQAAghAJgTQAJgTARgIQARgHAaAAQAOAAALACQALACAHACIAAAYQgJgDgLgCQgLgCgMAAQgTAAgKAGQgLAFgFAOQgFANAAAZQAAAYAFAOQAFAOALAFQAKAGATAAQAMAAALgCQALgCAKgDIAAAYIgNADIgPADIgQAAIgDAAQgYAAgQgHgAhwBwQgMgGgFgNQgGgMAAgQIAAhzIAbAAIAABpQAAANACAJQADAJAHAFQAHAFAOAAQAKAAAKgCQAJgDAIgHQAHgHAEgOIAAhxIAbAAIAACmIgWAAIgEgYQgFALgIAGQgJAGgKACQgKACgLAAQgVAAgMgHgAk6BsQgPgLgFgTQgGgUAAgZQAAgYAGgSQAFgUAPgMQAPgMAcAAQAZAAAMAJQANAIAFAPIAAhhIAbAAIAADqIgXAAIgEgbQgFANgNAJQgOAIgXAAQgcAAgPgLgAkpgVQgJAJgCANQgDAPgBARQABARADAPQACAOAKAJQAKAJATAAQAUAAAMgIQALgIAFgOQAEgOgBgUQABgUgEgNQgFgPgLgIQgMgIgUAAQgUAAgKAKgAEyB0Ig9hOIgJAAIAABOIgbAAIAAjqIAbAAIAACHIAKAAIA6hDIAhAAIhGBNIBKBZg");
	this.shape_48.setTransform(320.55,-199.9735);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF0000").s().p("ACyBwQgRgIgJgTQgJgTAAghQAAghAJgTQAJgTARgIQARgHAYAAQAVAAAOAGQANAGAHALQAHAKADAMQACALAAANIAAAIIgCALIhxAIQAAASAFAMQAFALAMAGQALAGAVAAQAOAAAOgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgLABgMAAIgDAAQgXAAgRgHgAC+gZQgLAHgEAMQgEALAAASIBZgHQAAgNgDgKQgDgLgIgGQgJgHgSAAQgTAAgKAGgAiSB3QgYAAgRgNQgRgNgIgaIgCgNIgBgMIAAgKQAAgaALgSQAKgUAVgNQAJgEAIgCQAIgCAIAAIACAAQAdAAATAeIAAgIIABAAIAZAAIABAAIAAABIAABYIABAfQACAPADANIgCAAIgZAAQgBAAgCgGIgCgUIgGAIIgGAIQgIAGgJADQgJADgLAAgAilgUQgNAKgIARIgDANQgBAGAAAGIAAAHQAAARAGANQAHANAMAKQAFADAGABQAFABAGAAIAGAAQAwAAAAg6IAAgLQAAgYgJgNQgIgPgRgFIgFAAIgFAAIAAAAQgTAAgNAJgAkTBuQgKgJAAgTIAAjIIAbAAIAADCQAAAMAEAEQADAEAJAAIAGAAIAGgCIAAAWIgIACIgJAAQgTAAgJgIgABZB0Ig9hOIgJAAIAABOIgaAAIAAjqIAaAAIAACHIAKAAIA6hDIAhAAIhHBNIBLBZg");
	this.shape_49.setTransform(340.9792,-92.7735);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AmMCmIAAlMIMZAAIAAFMg");
	this.shape_50.setTransform(62.575,-39.7645,1,1.1201);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AmMCmIAAlMIMZAAIAAFMg");
	this.shape_51.setTransform(-269.325,203.8855,1,1.1201);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("ACyBwQgRgIgJgTQgJgTAAghQAAghAJgTQAJgTARgIQARgHAYAAQAVAAAOAGQANAGAHALQAHAKADAMQACALAAANIAAAIIgCALIhxAIQAAASAFAMQAFALAMAGQALAGAVAAQAOAAAOgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgLABgMAAIgDAAQgXAAgRgHgAC+gZQgLAHgEAMQgEALAAASIBZgHQAAgNgDgKQgDgLgIgGQgJgHgSAAQgTAAgKAGgAiSB3QgYAAgRgNQgRgNgIgaIgCgNIgBgMIAAgKQAAgaALgSQAKgUAVgNQAJgEAIgCQAIgCAIAAIACAAQAdAAATAeIAAgIIABAAIAZAAIABAAIAAABIAABYIABAfQACAPADANIgCAAIgZAAQgBAAgCgGIgCgUIgGAIIgGAIQgIAGgJADQgJADgLAAgAilgUQgNAKgIARIgDANQgBAGAAAGIAAAHQAAARAGANQAHANAMAKQAFADAGABQAFABAGAAIAGAAQAwAAAAg6IAAgLQAAgYgJgNQgIgPgRgFIgFAAIgFAAIAAAAQgTAAgNAJgAkTBuQgKgJAAgTIAAjIIAbAAIAADCQAAAMAEAEQADAEAJAAIAGAAIAGgCIAAAWIgIACIgJAAQgTAAgJgIgABZB0Ig9hOIgJAAIAABOIgaAAIAAjqIAaAAIAACHIAKAAIA6hDIAhAAIhHBNIBLBZg");
	this.shape_52.setTransform(340.9792,-92.7735);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("ABRBwQgRgIgJgTQgJgTAAghQAAghAJgTQAJgTARgIQARgHAaAAQAOAAALACQALACAHACIAAAYQgJgDgLgCQgLgCgMAAQgTAAgKAGQgLAFgFAOQgFANAAAZQAAAYAFAOQAFAOALAFQAKAGATAAQAMAAALgCQALgCAKgDIAAAYIgNADIgPADIgQAAIgDAAQgYAAgQgHgAhwBwQgMgGgFgNQgGgMAAgQIAAhzIAbAAIAABpQAAANACAJQADAJAHAFQAHAFAOAAQAKAAAKgCQAJgDAIgHQAHgHAEgOIAAhxIAbAAIAACmIgWAAIgEgYQgFALgIAGQgJAGgKACQgKACgLAAQgVAAgMgHgAk6BsQgPgLgFgTQgGgUAAgZQAAgYAGgSQAFgUAPgMQAPgMAcAAQAZAAAMAJQANAIAFAPIAAhhIAbAAIAADqIgXAAIgEgbQgFANgNAJQgOAIgXAAQgcAAgPgLgAkpgVQgJAJgCANQgDAPgBARQABARADAPQACAOAKAJQAKAJATAAQAUAAAMgIQALgIAFgOQAEgOgBgUQABgUgEgNQgFgPgLgIQgMgIgUAAQgUAAgKAKgAEyB0Ig9hOIgJAAIAABOIgbAAIAAjqIAbAAIAACHIAKAAIA6hDIAhAAIhGBNIBKBZg");
	this.shape_53.setTransform(320.55,-199.9735);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF0000").s().p("AAfB2Ig8hOIgJAAIAABOIgbAAIAAjrIAbAAIAACIIAKAAIA5hEIAhAAIhGBNIBKBag");
	this.shape_54.setTransform(346.775,-92.925);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF0000").s().p("AgIBXQgZAAgRgOQgQgNgJgZIgCgOIgBgMIAAgJQAAgZALgUQAKgUAWgNQAIgDAIgCQAIgCAIgBIACAAQAcABAUAeIAAgIIAAAAIABgBIAZAAIAAABIABAAIAABYIABAfQABAPADANIgCAAIgZAAQgBABgCgHIgCgUIgGAIIgGAIQgIAHgJACQgJAEgKAAgAgcg1QgNAKgIASIgCANQgCAGAAAGIAAAHQAAAQAGANQAHAOAMAKQAGACAFABQAFACAHgBIAFAAQAvABAAg7IAAgJQAAgZgIgOQgJgPgRgFIgFAAIgEAAIgBAAQgRAAgOAJg");
	this.shape_55.setTransform(327.25,-89.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF0000").s().p("AgRBuQgKgIAAgTIAAjJIAbAAIAADCQAAAMADAFQAEAEAIgBIAGAAIAGgBIAAAWIgIABIgJABQgSAAgJgJg");
	this.shape_56.setTransform(315.15,-92.825);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAfB2Ig8hOIgJAAIAABOIgbAAIAAjrIAbAAIAACIIAKAAIA5hEIAhAAIhGBNIBKBag");
	this.shape_57.setTransform(348.075,-200.125);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgZBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQASgIAYAAQAOAAALACQALACAHADIAAAYQgJgEgLgCQgKgCgNAAQgRAAgLAGQgLAGgFAOQgEAOAAAXQgBAZAFANQAFAOALAGQALAFARAAQAMAAALgBQAMgCAJgEIAAAZIgMADIgQACIgQABIgDAAQgWAAgRgIg");
	this.shape_58.setTransform(331.225,-196.7235);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgsBOQgMgGgFgNQgGgMAAgQIAAhzIAbAAIAABpQAAANACAJQADAJAHAFQAHAFAOAAQAJAAAKgCQAJgDAIgHQAHgHAEgOIAAhxIAbAAIAACmIgWAAIgEgYQgFALgIAGQgJAGgKACQgJACgLAAQgVAAgMgHg");
	this.shape_59.setTransform(313.75,-196.575);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgwBsQgPgLgGgTQgFgUAAgZQAAgYAFgSQAGgUAPgMQAPgMAcAAQAXAAANAJQANAIAFAPIAAhhIAaAAIAADqIgWAAIgEgbQgFANgOAJQgNAIgWAAQgcAAgPgLgAgfgVQgJAJgDANQgDAPAAARQAAARADAPQADAOAKAJQAKAJATAAQATAAALgIQAMgIAEgOQAFgOgBgUQABgUgFgNQgEgPgMgIQgLgIgTAAQgUAAgKAKg");
	this.shape_60.setTransform(197.775,-211.325);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgIBXQgZAAgRgOQgQgNgJgZIgCgOIgBgMIAAgJQAAgZALgUQAKgUAWgNQAIgDAIgCQAIgCAIgBIACAAQAcABAUAeIAAgIIAAAAIABgBIAZAAIAAABIABAAIAABYIABAfQABAPADANIgCAAIgZAAQgBABgCgHIgCgUIgGAIIgGAIQgIAHgJACQgJAEgKAAgAgcg1QgNAKgIASIgCANQgCAGAAAGIAAAHQAAAQAGANQAHAOAMAKQAGACAFABQAFACAHgBIAFAAQAvABAAg7IAAgJQAAgZgIgOQgJgPgRgFIgFAAIgEAAIgBAAQgRAAgOAJg");
	this.shape_61.setTransform(327.25,-89.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgRBuQgKgIAAgTIAAjJIAbAAIAADCQAAAMADAFQAEAEAIgBIAGAAIAGgBIAAAWIgIABIgJABQgSAAgJgJg");
	this.shape_62.setTransform(315.15,-92.825);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAfB2Ig8hOIgJAAIAABOIgbAAIAAjrIAbAAIAACIIAKAAIA5hEIAhAAIhGBNIBKBag");
	this.shape_63.setTransform(348.075,-200.125);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_64.setTransform(-255.8208,205.7265);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24,p:{x:-269.325,y:203.8855}},{t:this.shape_23,p:{x:-294.175,y:205.575}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:-255.8208,y:205.7265}},{t:this.shape_19,p:{x:-239.925,y:205.575}}]},5).to({state:[]},13).to({state:[{t:this.shape_24,p:{x:-269.325,y:203.8855}},{t:this.shape_23,p:{x:-294.175,y:205.575}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:-255.8208,y:205.7265}},{t:this.shape_19,p:{x:-239.925,y:205.575}}]},29).to({state:[{t:this.shape_27,p:{x:-269.325,y:203.8855}},{t:this.shape_26,p:{x:62.575,y:-39.7645}},{t:this.shape_23,p:{x:-294.175,y:205.575}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:-255.8208,y:205.7265}},{t:this.shape_19,p:{x:-239.925,y:205.575}},{t:this.shape_24,p:{x:214.375,y:29.5355}},{t:this.shape_25}]},5).to({state:[{t:this.shape_26,p:{x:-269.325,y:203.8855}},{t:this.shape_24,p:{x:62.575,y:-39.7645}},{t:this.shape_23,p:{x:-294.175,y:205.575}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:-255.8208,y:205.7265}},{t:this.shape_19,p:{x:-239.925,y:205.575}},{t:this.shape_31},{t:this.shape_30,p:{x:56.1792,y:-37.5735}},{t:this.shape_29},{t:this.shape_28,p:{x:91.025,y:-37.725}}]},54).to({state:[{t:this.shape_26,p:{x:-269.325,y:203.8855}},{t:this.shape_24,p:{x:62.575,y:-39.7645}},{t:this.shape_35,p:{x:-294.175}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_34,p:{x:-255.8208,y:205.7265}},{t:this.shape_23,p:{x:-239.925,y:205.575}},{t:this.shape_33},{t:this.shape_20,p:{x:56.1792,y:-37.5735}},{t:this.shape_32},{t:this.shape_19,p:{x:91.025,y:-37.725}}]},58).to({state:[{t:this.shape_27,p:{x:-269.325,y:203.8855}},{t:this.shape_26,p:{x:62.575,y:-39.7645}},{t:this.shape_24,p:{x:214.375,y:29.5355}},{t:this.shape_35,p:{x:-294.175}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_34,p:{x:-255.8208,y:205.7265}},{t:this.shape_23,p:{x:-239.925,y:205.575}},{t:this.shape_33},{t:this.shape_20,p:{x:56.1792,y:-37.5735}},{t:this.shape_32},{t:this.shape_19,p:{x:91.025,y:-37.725}},{t:this.shape_37,p:{x:197.775,y:27.275}},{t:this.shape_36},{t:this.shape_30,p:{x:234.0292,y:30.5265}}]},1).to({state:[{t:this.shape_27,p:{x:-269.325,y:203.8855}},{t:this.shape_26,p:{x:62.575,y:-39.7645}},{t:this.shape_24,p:{x:214.375,y:29.5355}},{t:this.shape_35,p:{x:-294.175}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_40,p:{x:-255.8208,y:205.7265}},{t:this.shape_23,p:{x:-239.925,y:205.575}},{t:this.shape_33},{t:this.shape_39,p:{x:56.1792,y:-37.5735}},{t:this.shape_32},{t:this.shape_19,p:{x:91.025,y:-37.725}},{t:this.shape_38,p:{x:197.775,y:27.275}},{t:this.shape_34,p:{x:216.1292,y:30.5265}},{t:this.shape_20,p:{x:234.0292,y:30.5265}}]},64).to({state:[{t:this.shape_43,p:{x:-269.325,y:203.8855}},{t:this.shape_27,p:{x:62.575,y:-39.7645}},{t:this.shape_26,p:{x:214.375,y:29.5355}},{t:this.shape_24,p:{x:178.425,y:-211.2145}},{t:this.shape_35,p:{x:-294.175}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_40,p:{x:-255.8208,y:205.7265}},{t:this.shape_23,p:{x:-239.925,y:205.575}},{t:this.shape_33},{t:this.shape_39,p:{x:56.1792,y:-37.5735}},{t:this.shape_32},{t:this.shape_19,p:{x:91.025,y:-37.725}},{t:this.shape_38,p:{x:197.775,y:27.275}},{t:this.shape_34,p:{x:216.1292,y:30.5265}},{t:this.shape_20,p:{x:234.0292,y:30.5265}},{t:this.shape_37,p:{x:158.975,y:-211.325}},{t:this.shape_42},{t:this.shape_28,p:{x:183.625,y:-208.225}},{t:this.shape_41}]},1).to({state:[{t:this.shape_43,p:{x:-269.325,y:203.8855}},{t:this.shape_27,p:{x:62.575,y:-39.7645}},{t:this.shape_26,p:{x:214.375,y:29.5355}},{t:this.shape_24,p:{x:178.425,y:-211.2145}},{t:this.shape_47},{t:this.shape_22},{t:this.shape_21},{t:this.shape_40,p:{x:-255.8208,y:205.7265}},{t:this.shape_35,p:{x:-239.925}},{t:this.shape_33},{t:this.shape_39,p:{x:56.1792,y:-37.5735}},{t:this.shape_32},{t:this.shape_23,p:{x:91.025,y:-37.725}},{t:this.shape_46},{t:this.shape_34,p:{x:216.1292,y:30.5265}},{t:this.shape_20,p:{x:234.0292,y:30.5265}},{t:this.shape_38,p:{x:158.975,y:-211.325}},{t:this.shape_45},{t:this.shape_19,p:{x:183.625,y:-208.225}},{t:this.shape_44,p:{x:197.775,y:-211.325}}]},55).to({state:[{t:this.shape_51},{t:this.shape_50,p:{x:62.575,y:-39.7645}},{t:this.shape_43,p:{x:214.375,y:29.5355}},{t:this.shape_27,p:{x:340.375,y:-91.2145}},{t:this.shape_26,p:{x:178.425,y:-211.2145}},{t:this.shape_24,p:{x:317.725,y:-197.6145}},{t:this.shape_47},{t:this.shape_22},{t:this.shape_21},{t:this.shape_40,p:{x:-255.8208,y:205.7265}},{t:this.shape_35,p:{x:-239.925}},{t:this.shape_33},{t:this.shape_39,p:{x:56.1792,y:-37.5735}},{t:this.shape_32},{t:this.shape_23,p:{x:91.025,y:-37.725}},{t:this.shape_46},{t:this.shape_34,p:{x:216.1292,y:30.5265}},{t:this.shape_20,p:{x:234.0292,y:30.5265}},{t:this.shape_38,p:{x:158.975,y:-211.325}},{t:this.shape_45},{t:this.shape_19,p:{x:183.625,y:-208.225}},{t:this.shape_44,p:{x:197.775,y:-211.325}},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50,p:{x:62.575,y:-39.7645}},{t:this.shape_43,p:{x:214.375,y:29.5355}},{t:this.shape_27,p:{x:340.375,y:-91.2145}},{t:this.shape_26,p:{x:178.425,y:-211.2145}},{t:this.shape_24,p:{x:317.725,y:-197.6145}},{t:this.shape_47},{t:this.shape_22},{t:this.shape_21},{t:this.shape_40,p:{x:-255.8208,y:205.7265}},{t:this.shape_35,p:{x:-239.925}},{t:this.shape_33},{t:this.shape_39,p:{x:56.1792,y:-37.5735}},{t:this.shape_32},{t:this.shape_23,p:{x:91.025,y:-37.725}},{t:this.shape_46},{t:this.shape_34,p:{x:216.1292,y:30.5265}},{t:this.shape_20,p:{x:234.0292,y:30.5265}},{t:this.shape_38,p:{x:158.975,y:-211.325}},{t:this.shape_45},{t:this.shape_19,p:{x:183.625,y:-208.225}},{t:this.shape_44,p:{x:197.775,y:-211.325}},{t:this.shape_53},{t:this.shape_52}]},81).to({state:[{t:this.shape_50,p:{x:-269.325,y:203.8855}},{t:this.shape_43,p:{x:62.575,y:-39.7645}},{t:this.shape_27,p:{x:214.375,y:29.5355}},{t:this.shape_26,p:{x:178.425,y:-211.2145}},{t:this.shape_24,p:{x:317.725,y:-197.6145}},{t:this.shape_47},{t:this.shape_22},{t:this.shape_21},{t:this.shape_40,p:{x:-255.8208,y:205.7265}},{t:this.shape_35,p:{x:-239.925}},{t:this.shape_33},{t:this.shape_39,p:{x:56.1792,y:-37.5735}},{t:this.shape_32},{t:this.shape_23,p:{x:91.025,y:-37.725}},{t:this.shape_46},{t:this.shape_34,p:{x:216.1292,y:30.5265}},{t:this.shape_20,p:{x:234.0292,y:30.5265}},{t:this.shape_38,p:{x:158.975,y:-211.325}},{t:this.shape_45},{t:this.shape_19,p:{x:183.625,y:-208.225}},{t:this.shape_44,p:{x:197.775,y:-211.325}},{t:this.shape_48}]},1).to({state:[{t:this.shape_50,p:{x:-269.325,y:203.8855}},{t:this.shape_43,p:{x:62.575,y:-39.7645}},{t:this.shape_27,p:{x:214.375,y:29.5355}},{t:this.shape_26,p:{x:178.425,y:-211.2145}},{t:this.shape_24,p:{x:317.725,y:-197.6145}},{t:this.shape_47},{t:this.shape_22},{t:this.shape_21},{t:this.shape_40,p:{x:-255.8208,y:205.7265}},{t:this.shape_35,p:{x:-239.925}},{t:this.shape_33},{t:this.shape_39,p:{x:56.1792,y:-37.5735}},{t:this.shape_32},{t:this.shape_23,p:{x:91.025,y:-37.725}},{t:this.shape_46},{t:this.shape_34,p:{x:216.1292,y:30.5265}},{t:this.shape_20,p:{x:234.0292,y:30.5265}},{t:this.shape_38,p:{x:158.975,y:-211.325}},{t:this.shape_45},{t:this.shape_19,p:{x:183.625,y:-208.225}},{t:this.shape_44,p:{x:197.775,y:-211.325}},{t:this.shape_53}]},39).to({state:[{t:this.shape_51},{t:this.shape_50,p:{x:62.575,y:-39.7645}},{t:this.shape_43,p:{x:214.375,y:29.5355}},{t:this.shape_27,p:{x:340.375,y:-91.2145}},{t:this.shape_26,p:{x:178.425,y:-211.2145}},{t:this.shape_24,p:{x:317.725,y:-197.6145}},{t:this.shape_47},{t:this.shape_22},{t:this.shape_21},{t:this.shape_40,p:{x:-255.8208,y:205.7265}},{t:this.shape_35,p:{x:-239.925}},{t:this.shape_33},{t:this.shape_39,p:{x:56.1792,y:-37.5735}},{t:this.shape_32},{t:this.shape_23,p:{x:91.025,y:-37.725}},{t:this.shape_46},{t:this.shape_34,p:{x:216.1292,y:30.5265}},{t:this.shape_20,p:{x:234.0292,y:30.5265}},{t:this.shape_38,p:{x:158.975,y:-211.325}},{t:this.shape_45},{t:this.shape_19,p:{x:183.625,y:-208.225}},{t:this.shape_60},{t:this.shape_44,p:{x:293.975,y:-199.975}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57,p:{x:348.075,y:-200.125}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_30,p:{x:362.4292,y:-89.5235}}]},1).to({state:[{t:this.shape_51},{t:this.shape_50,p:{x:62.575,y:-39.7645}},{t:this.shape_43,p:{x:214.375,y:29.5355}},{t:this.shape_27,p:{x:340.375,y:-91.2145}},{t:this.shape_26,p:{x:178.425,y:-211.2145}},{t:this.shape_24,p:{x:317.725,y:-197.6145}},{t:this.shape_47},{t:this.shape_22},{t:this.shape_21},{t:this.shape_64},{t:this.shape_35,p:{x:-239.925}},{t:this.shape_33},{t:this.shape_40,p:{x:56.1792,y:-37.5735}},{t:this.shape_32},{t:this.shape_23,p:{x:91.025,y:-37.725}},{t:this.shape_46},{t:this.shape_39,p:{x:216.1292,y:30.5265}},{t:this.shape_34,p:{x:234.0292,y:30.5265}},{t:this.shape_38,p:{x:158.975,y:-211.325}},{t:this.shape_45},{t:this.shape_19,p:{x:183.625,y:-208.225}},{t:this.shape_60},{t:this.shape_44,p:{x:293.975,y:-199.975}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_57,p:{x:346.775,y:-92.925}},{t:this.shape_20,p:{x:362.4292,y:-89.5235}}]},55).to({state:[{t:this.shape_51},{t:this.shape_50,p:{x:62.575,y:-39.7645}},{t:this.shape_43,p:{x:214.375,y:29.5355}},{t:this.shape_27,p:{x:340.375,y:-91.2145}},{t:this.shape_26,p:{x:178.425,y:-211.2145}},{t:this.shape_24,p:{x:317.725,y:-197.6145}},{t:this.shape_47},{t:this.shape_22},{t:this.shape_21},{t:this.shape_64},{t:this.shape_35,p:{x:-239.925}},{t:this.shape_33},{t:this.shape_40,p:{x:56.1792,y:-37.5735}},{t:this.shape_32},{t:this.shape_23,p:{x:91.025,y:-37.725}},{t:this.shape_46},{t:this.shape_39,p:{x:216.1292,y:30.5265}},{t:this.shape_34,p:{x:234.0292,y:30.5265}},{t:this.shape_38,p:{x:158.975,y:-211.325}},{t:this.shape_45},{t:this.shape_19,p:{x:183.625,y:-208.225}},{t:this.shape_60},{t:this.shape_44,p:{x:293.975,y:-199.975}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_57,p:{x:346.775,y:-92.925}},{t:this.shape_20,p:{x:362.4292,y:-89.5235}}]},10).wait(113));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-929.9,-238.6,1310,465.9);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"label6":599,"end":600,"label0":1,"label1":5,"label2":48,"label3":230,"label4":286,"label5":474,可以点击:599,"river":5,"hear":106,"bee":165,"bird":230,"duck":368,"lake":418,"grass":474};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this._cliMc._cliWordMc.visible=false;
		//this._cliMc.visible=false;
		//this._cliWordMc.visible=true;
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_47 = function() {
		this.stop();
	}
	this.frame_105 = function() {
		this.stop();
	}
	this.frame_164 = function() {
		this.stop();
	}
	this.frame_229 = function() {
		this.stop();
	}
	this.frame_285 = function() {
		this.stop();
	}
	this.frame_367 = function() {
		this.stop();
	}
	this.frame_417 = function() {
		this.stop();
	}
	this.frame_473 = function() {
		this.stop();
	}
	this.frame_550 = function() {
		this.stop();
	}
	this.frame_599 = function() {
		this.stop();
		//this._cliMc.visible=true;
		
		this._cliMc._cliWordMc.visible=true;
	}
	this.frame_614 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(43).call(this.frame_47).wait(58).call(this.frame_105).wait(59).call(this.frame_164).wait(65).call(this.frame_229).wait(56).call(this.frame_285).wait(82).call(this.frame_367).wait(50).call(this.frame_417).wait(56).call(this.frame_473).wait(77).call(this.frame_550).wait(49).call(this.frame_599).wait(15).call(this.frame_614).wait(1));

	// _climc
	this._cliMc = new lib.clickname("synched",0);
	this._cliMc.name = "_cliMc";
	this._cliMc.setTransform(-20,12.15);

	this.timeline.addTween(cjs.Tween.get(this._cliMc).wait(615));

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(2,1,1).p("AcwDYQABAAAAABQACABACAAQEaAEDqg3IABgBQNPk2G6CQIhJPIMhv9AAVIg/+5QKCDeHRFtQACACADAAIWsBVQIGBfGlDdQACAAABABQONCYQwA/");
	this.shape.setTransform(-1.55,168.2125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(3,1,1).p("AcwDOIAAAAQwwhFuLiWQmnjfoJhgQgBAAgBAAI2phVQnWlxqNjgQgDgBgEABQgDABgCADQgCACAAAEIBAfSQAAAEADADQADADAEAAMBwQgAVQAEgBADgCQADgDAAgEIBKvYQABgEgCgCQgCgDgDgBQm9iZtcFHIAAgBQAAAAh4AXQh3AXiOgCQiAgCgLAEQgBABAAAAQABADAAACg");
	this.shape_1.setTransform(-1.5496,167.9985);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Eg4UAPxQgDgDAAgEIhA/SQAAgEACgCQACgDADgBQAEgBADABQKNDgHWFxIWpBVIACAAQIJBgGnDfQOLCWQwBFIAAAAIgBABIAAAAIABAFIAAgGQALgECAACQCOACB3gXIB4gXIAAABQNclHG9CZQADABACADQACACgBAEIhKPYQAAAEgDADQgDACgEABMhwQAAVIAAAAQgEAAgDgDgEg4DAPgMBv9gAVIBJvJQm6iQtQE2IgBACQjpA2kagDQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIgBgBIgDACQwwg/uNiYIgDgBQmljdoGhfI2shVQgDAAgCgCQnRltqCjegAcvDPIAAAAIABgBIAAAGIgBgFg");
	this.shape_2.setTransform(-1.5496,167.9985);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFF00").ss(2,1,1).p("AklgwQAABJg4A0Qg4A1hPAAQhQAAg4g1Qg4g0AAhJQAAhLA4g0QA4g1BQAAQBPAAA4A1QA4A0AABLgAKlABQAABehHBDQhIBDhlAAQhlAAhIhDQhHhDAAheQAAheBHhDQBIhEBlABQBlgBBIBEQBHBDAABeg");
	this.shape_3.setTransform(177.1,2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(3,1,1).p("AlPBcQA+g7AAhSQAAhSg+g7Qg+g6hYAAQhXAAg+A6Qg+A7AABSQAABSA+A7QA+A6BXAAQBYAAA+g6gAJrCwQBOhIAAhoQAAhmhOhJQhNhIhtgBQhtABhNBIQhOBJAABmQAABoBOBIQBNBJBtAAQBtAABNhJg");
	this.shape_4.setTransform(177.1,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AD3CwQhOhIAAhoQAAhmBOhJQBNhIBtgBQBtABBNBIQBOBJAABmQAABohOBIQhNBJhtAAQhtAAhNhJgAJeCiQBHhDAAhfQAAhdhHhDQhIhEhlABQhlgBhIBEQhHBDAABdQAABfBHBDQBIBDBlAAQBlAABIhDgAp6BcQg+g7AAhSQAAhSA+g7QA+g6BXAAQBYAAA+A6QA+A7AABSQAABSg+A7Qg+A6hYAAQhXAAg+g6gAldBNQA4g0AAhKQAAhKg4g0Qg4g1hQAAQhPAAg4A1Qg4A0AABKQAABKA4A0QA4A1BPAAQBQAAA4g1g");
	this.shape_5.setTransform(177.1,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(3,1,1).p("ACVCNQA+g6AAhTQAAhSg+g6Qg+g6hXgBQhWABg+A6Qg+A6gBBSQABBTA+A6QA+A6BWABQBXgBA+g6g");
	this.shape_6.setTransform(128.55,-2.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFF00").ss(2,1,1).p("ADAAAQAABKg4A1Qg4A1hQAAQhPAAg4g1Qg4g1ABhKQgBhJA4g1QA4g1BPABQBQgBA4A1QA4A1AABJg");
	this.shape_7.setTransform(128.55,-2.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AiUCNQg/g6AAhTQAAhSA/g6QA+g6BWAAQBXAAA+A6QA+A6AABSQAABTg+A6Qg+A6hXAAQhWAAg+g6gACIB/QA3g1AAhKQAAhJg3g1Qg4g1hQAAQhPAAg4A1Qg4A1ABBJQgBBKA4A1QA4A1BPAAQBQAAA4g1g");
	this.shape_8.setTransform(128.55,-2.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FF0000").ss(3,1,1).p("AC6CwQBOhIAAhoQAAhmhOhJQhNhJhtAAQhsAAhNBJQhOBJAABmQAABoBOBIQBNBJBsAAQBtAABNhJg");
	this.shape_9.setTransform(220.4,2.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFF00").ss(2,1,1).p("AD0AAQAABfhHBDQhIBDhlAAQhkAAhIhDQhHhDAAhfQAAhdBHhDQBIhEBkAAQBlAABIBEQBHBDAABdg");
	this.shape_10.setTransform(220.4,2.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("Ai5CwQhOhIAAhoQAAhmBOhJQBNhJBsAAQBtAABNBJQBOBJAABmQAABohOBIQhNBJhtAAQhsAAhNhJgACtCiQBHhDAAhfQAAhdhHhDQhIhEhlAAQhkAAhIBEQhHBDAABdQAABfBHBDQBIBDBkAAQBlAABIhDg");
	this.shape_11.setTransform(220.4,2.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FF0000").ss(3,1,1).p("AAAFSQCOAABlhjIAAAAQBlhjAAiMQAAiLhlhkQhkhiiPAAQiOAAhkBiQhlBkAACLQAACMBlBjQBkBjCOAAg");
	this.shape_12.setTransform(84.85,-198.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFF00").ss(3,1,1).p("AFEAAQAACEhfBdQheBdiHAAQiFAAhfhdQhfhdAAiEQAAiDBehdQAAAAABgBQBfhcCFAAQCHAABeBdQBfBdAACDg");
	this.shape_13.setTransform(84.85,-198.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(3,1,1).p("AjrjoIAAABADsDoIAAAB");
	this.shape_14.setTransform(85.525,-197.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AjzDvQhkhjAAiMQAAiLBkhjQBmhkCNABQCOgBBlBkQBlBjAACLQAACMhlBjIAAAAQhlBkiOgBQiNAAhmhjgAlDAAQAACEBfBdQBfBeCFAAQCHAABeheQBfhdAAiEQAAiDhfhdQheheiHAAQiFAAhfBeIAAgBQhfBeAACDg");
	this.shape_15.setTransform(84.85,-198.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFF00").ss(3,1,1).p("AFEAAQAACEhfBdQheBdiHAAQiFAAhfhdQhfhdAAiEQAAiDBehdIABgBQBfhcCFAAQCHAABeBdQBfBdAACDg");
	this.shape_16.setTransform(84.85,-198.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFF00").ss(2,1,1).p("AE+lLQABAAAAAAQBFgSA+gCQA+gCBvAcQBrAbAOAQIAAAAQAMAQAQENIAMEAIpiBdQiIjlkMhNQAAAAAAAAQiEggiDgpQj5hQgphLQAAgBAAAAIABgYQAIgjAfgaQBqhaE/AhQABAAAAAAIEWAJQAJAAAIAA");
	this.shape_17.setTransform(291.475,-117.3336);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF0000").ss(3,1,1).p("AgXlQQgIgBgIAAIkVgJQlKghhvBfQgkAggJApQAAABgBABIgBAbQAAABABACQABADACADQAAAAAAABQAAAAAAAAQAqBQEDBTQCDAqCFAgIAAAAQEHBMCEDjQACACADACQADABACAAIJyhgQAEAAACgDQADgDgBgEIgNkJQgQkYgQgRIAAgBQgOgTh2geQhygdhAACQg/ADhFAR");
	this.shape_18.setTransform(291.5,-117.2819);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AClF0QgDgCgCgCQiEjjkHhMIAAAAQiFggiDgqQkDhTgqhQIAAAAIAAgBIgDgGIgBgDIABgbIABgCQAJgpAkggQBvhfFKAhIEVAJIARABIAAAUIgRgBIkWgJIgBAAQk/gghqBZQgfAbgJAiIgBAYIABACQApBKD5BQQCDAqCEAgIAAAAQEMBNCIDlIJihdIgNkAQgPkNgMgRIAAAAQgPgPhqgbQhvgdg+ACQg/ADhEARIgBAAIAAgUQBEgRA/gDQBAgCByAdQB2AeAOATIAAABQAQARAQEYIAOEJQAAAEgDADQgCADgEAAIpyBgIgBAAIgEgBg");
	this.shape_19.setTransform(291.5,-117.2819);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFF00").ss(2,1,1).p("ArnkMQBqhaE/AhQABAAAAAAIEWAJQEgACBGgRQBFgSA+gCQA+gCBvAcQBrAbAOAQIAAAAQAMAQAQENIAMEAIpiBdQiIjlkMhNQAAAAAAAAQiEggiDgpQj5hQgphLQAAgBAAAAIABgYQAIgjAfgag");
	this.shape_20.setTransform(291.475,-117.3336);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FF0000").ss(3,1,1).p("Ar1kcQgkAggJApQAAABgBABIgBAbQAAABABACQABADACADQAAAAAAABQAAAAAAAAQAqBQEDBTQCDAqCFAgIAAAAQEHBMCEDjQACACADACQADABACAAIJyhgQAEAAACgDQADgDgBgEIgNkJQgQkYgQgRIAAgBQgOgTh2geQhygdhAACQhAADhHASQhFARkcgDIkVgJQlKghhvBfg");
	this.shape_21.setTransform(291.5,-117.2819);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AClF0QgDgCgCgCQiEjjkHhMIAAAAQiFggiDgqQkDhTgqhQIAAAAIAAgBIgDgGIgBgDIABgbIABgCQAJgpAkggQBvhfFKAhIEVAJQEcADBFgRQBHgSBAgDQBAgCByAdQB2AeAOATIAAABQAQARAQEYIAOEJQAAAEgDADQgCADgEAAIpyBgIgBAAIgEgBgArnkNQgfAbgJAiIgBAYIABACQApBKD5BQQCDAqCEAgIAAAAQEMBNCIDlIJihdIgNkAQgPkNgMgRIAAAAQgPgPhqgbQhvgdg+ACQg/ADhEARQhGASkggDIkWgJIgBAAQhVgIhGAAQjAAAhOBBg");
	this.shape_22.setTransform(291.5,-117.2819);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFF00").ss(2,1,1).p("Egu/ANlIpIlFQgfjOgSjOQgelhAblkQE4hfE4hfQNYkCNcj3QEyhYE3hJQEMhCEQgzQHQhWHYgnQLlg2LpgcQHvgSHxgFQCzgCC0gCIAECPQicgQifgBQoUgEoUAvIAAAAQg2AHgqAhQgfAaAPAjQAoBmB7AxQGFCbGcBdQCmAnCqgBQBngBBigTIAPZLIgPQSQgrgVgvgMIAAAAQlIhNlFBpQj/BTkEA8QjgA0jmAYQkpAaksgRQmcgYmThaQkOg7kBhgIAAAAQjQhNjVhFIABAAQjFhBjPgeQlRgzlWAEQmSAFmKhXQlyhRlIi+g");
	this.shape_23.setTransform(-0.3432,12.9346);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FF0000").ss(3,1,1).p("Eg4VAIvIJMFIIAAAAQFLC/F0BSQGMBXGVgFQFVgEFPAzQDOAdDCBBIAAAAQDVBFDPBNQEDBgEOA8QGVBaGeAYQEtARErgaIAAAAQDngYDig1QEFg8D/hTQE/hnFDBLQA1AOAvAYQADACADgBQAEAAACgDQACgDAAgDIAQwiIgP5XQAAgDgCgDQgBgCgDgCQgDgBgDABQhmAVhrABQinABikgnQmbhcmDiaQhygugnhfQgIgVATgQQAlgeAwgGQITgvITAEQCkABCgASQADAAADgBQADgCABgCQACgDgBgDIgFilQAAgEgDgDQgCgCgFAAQi4ACi4ACQnxAFnwASIAAAAQrqAcrlA2QnYAnnSBXQkQAzkNBBQk3BJkyBZQtcD3tZECQk7Bgk7BgQgDABgCACQgCADAAADQgcFoAeFnQASDRAfDRQABACABACQACACACABg");
	this.shape_24.setTransform(-0.3467,12.9372);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AUzcHQmegYmVhaQkOg8kDhgQjPhNjVhFIAAAAQjChBjOgdQlPgzlVAEQmVAFmMhXQl0hSlLi/IAAAAIpMlIIgEgDIgCgEQgfjRgSjRQgelnAcloQAAgDACgDQACgCADgBIJ2jAQNZkCNcj3QEyhZE3hJQENhBEQgzQHShXHYgnQLlg2LqgcIAAAAQHwgSHxgFIFwgEQAFAAACACQADADAAAEIAFClQABADgCADQgBACgDACQgDABgDAAQiggSikgBQoTgEoTAvQgwAGglAeQgTAQAIAVQAnBfByAuQGDCaGbBcQCkAnCngBQBrgBBmgVQADgBADABQADACABACQACADAAADIAPZXIgQQiQAAADgCADQgCADgEAAQgDABgDgCQgvgYg1gOQlDhLk/BnQj/BTkFA8QjiA1jnAYIAAAAQi1APi1AAQh3AAh3gGgAgKXmIAAAAQEBBgEOA7QGTBaGcAYQEsAREpgaQDmgYDgg0QEEg8D/hTQFFhpFIBNIAAAAQAvAMArAVIAPwSIgP5LQhiAThnABQiqABimgnQmchdmFibQh7gxgohmQgPgjAfgaQAqghA2gHIAAAAQIUgvIUAEQCfABCcAQIgEiPIlnAEQnxAFnvASQrpAcrlA2QnYAnnQBWQkQAzkMBCQk3BJkyBYQtcD3tYECIpwC+QgbFkAeFhQASDOAfDOIJIFFIAAAAQFIC+FyBRQGKBXGSgFQFWgEFRAzQDPAeDFBBIgBAAQDVBFDQBNg");
	this.shape_25.setTransform(-0.3467,12.9372);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[]},17).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[]},19).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},5).to({state:[]},22).to({state:[{t:this.shape_5},{t:this.shape_3},{t:this.shape_4}]},10).to({state:[]},21).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},27).to({state:[{t:this.shape_8},{t:this.shape_6},{t:this.shape_7}]},9).to({state:[]},22).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},5).to({state:[]},20).to({state:[{t:this.shape_11},{t:this.shape_9},{t:this.shape_10}]},13).to({state:[]},27).to({state:[{t:this.shape_15,p:{scaleX:1,scaleY:1,x:84.85,y:-198.1}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:85.525,y:-197.4}},{t:this.shape_13},{t:this.shape_12,p:{scaleX:1,scaleY:1,x:84.85,y:-198.1}}]},1).to({state:[]},24).to({state:[{t:this.shape_15,p:{scaleX:1,scaleY:1,x:84.85,y:-198.1}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:85.525,y:-197.4}},{t:this.shape_16,p:{scaleX:1,scaleY:1,x:84.85,y:-198.1}},{t:this.shape_12,p:{scaleX:1,scaleY:1,x:84.85,y:-198.1}}]},8).to({state:[]},23).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_15,p:{scaleX:0.7979,scaleY:0.7979,x:306.6042,y:-131.0195}},{t:this.shape_14,p:{scaleX:0.7979,scaleY:0.7979,x:307.1428,y:-130.461}},{t:this.shape_16,p:{scaleX:0.7978,scaleY:0.7978,x:306.5964,y:-131.0014}},{t:this.shape_12,p:{scaleX:0.7978,scaleY:0.7978,x:306.5964,y:-131.0014}}]},1).to({state:[]},19).to({state:[{t:this.shape_19},{t:this.shape_17},{t:this.shape_18},{t:this.shape_15,p:{scaleX:0.7978,scaleY:0.7978,x:306.5964,y:-131.4014}},{t:this.shape_14,p:{scaleX:0.7978,scaleY:0.7978,x:307.1349,y:-130.8429}},{t:this.shape_16,p:{scaleX:0.7977,scaleY:0.7977,x:306.5886,y:-131.3832}},{t:this.shape_12,p:{scaleX:0.7977,scaleY:0.7977,x:306.5886,y:-131.3832}}]},14).to({state:[]},48).to({state:[{t:this.shape_15,p:{scaleX:0.7979,scaleY:0.7979,x:306.599,y:-131.3074}},{t:this.shape_14,p:{scaleX:0.7979,scaleY:0.7979,x:307.1376,y:-130.7489}},{t:this.shape_16,p:{scaleX:0.7977,scaleY:0.7977,x:306.5886,y:-131.2832}},{t:this.shape_12,p:{scaleX:0.7977,scaleY:0.7977,x:306.5886,y:-131.2832}}]},1).to({state:[]},21).to({state:[{t:this.shape_15,p:{scaleX:0.7978,scaleY:0.7978,x:306.5938,y:-131.5953}},{t:this.shape_14,p:{scaleX:0.7978,scaleY:0.7978,x:307.1323,y:-131.0369}},{t:this.shape_16,p:{scaleX:0.7977,scaleY:0.7977,x:306.5809,y:-131.5651}},{t:this.shape_12,p:{scaleX:0.7977,scaleY:0.7977,x:306.5809,y:-131.5651}}]},6).to({state:[]},22).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[]},23).to({state:[{t:this.shape_22},{t:this.shape_20},{t:this.shape_21}]},6).to({state:[]},26).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},13).to({state:[]},26).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},12).to({state:[]},26).wait(65));

	// 图层_3
	this.instance = new lib.ClipGroup_60();
	this.instance.setTransform(135.6,137.05,1.9224,1.9224,0,0,0,87.1,71.8);

	this.instance_1 = new lib.ClipGroup_61();
	this.instance_1.setTransform(-198.55,137.05,1.9224,1.9224,0,0,0,87.1,71.8);

	this.instance_2 = new lib.ClipGroup_62();
	this.instance_2.setTransform(336.2,-0.7,1.9224,1.9224,0,0,0,17.6,143.5);

	this.instance_3 = new lib.ClipGroup_63();
	this.instance_3.setTransform(135.6,-138.35,1.9224,1.9224,0,0,0,87.1,71.9);

	this.instance_4 = new lib.ClipGroup_64();
	this.instance_4.setTransform(-198.55,-138.35,1.9224,1.9224,0,0,0,87.1,71.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},5).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},34).wait(576));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-949.9,-276.5,1319.8,551.7);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-949.9,-276.5,1323.4,551.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-949.9,-276.5,1319.8,551.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-949.9,-276.5,1323.4,551.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-949.9,-276.5,1319.8,551.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-949.9,-276.5,1323.4,551.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-949.9,-276.5,1319.8,551.7), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-949.9,-276.5,1323.4,551.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-949.9,-276.5,1319.8,551.7), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
			console.log(lenAry);
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
			if(curId>=1){gdDeTime=(_this.audio.duration*1.2)*1000+deTime;}
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
						}
					}
					break;
				case "2":
					//if (autoMode) {
						//获取音频时长，设置时长，设置延迟
						console.log(gdDeTime);
						if(curId>=1 && curId< len - 1){dingAudio.play();_this._gdIco.visible=true;}
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
							/*_this._mov.gotoAndStop(0);*/
					        _this._pdMc.gotoAndStop(0);
							_this._playAndpause.rePlayStu();
							console.log("最后一个播放结束。");
						}
					}
					break;
			}
		
		});
		//点击单词声音
		var wordAudio = new Audio('sounds/s01.mp3');
		wordAudio.addEventListener('play', function () {
			//console.log('被点击的单词开始播放');
		});
		wordAudio.addEventListener('ended', function () {
			//重置黑色
			_this._mov._cliMc._cliWordMc.reset();
		
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
					case "s":
						//console.log(wordSoundStr+e.target.name.split("_")[1]);
						//toPlayWord(wordSoundStr+e.target.name.split("_")[1]);
						break;
				}
			}
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
		    console.log("切换了paid:",pgid);
			if (pgid == 2 || pgid==3) {
				curId = 0;
				console.log("curID2", curId)
			} else {		
				curId = 0;
				console.log("curID1", curId)
			}
		
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
		    clearTimeout(timeoutFun);
			_this.checkNum();
			switch (pgid) {
				case "1":
					console.log("学习。");
					if (curId > len - 1) {
						curId = len - 1;
						return;
					}
					_this._mov.gotoAndPlay("label" + String(curId));
					toPlaySound(data[pgid - 1][curId].sound);
					//console.log(data[pgid - 1][curId].sound);
					break;
				case "2":
					//console.log("跟读。");
					if (curId > len - 1) {
						curId = len - 1;
						return;
					}
					_this._gdMc.gotoAndStop("label" + String(curId));
					toPlaySound(data[pgid - 1][curId].sound);
				    _this._mov.gotoAndPlay(data[pgid - 1][curId].label);
					break;
				case "3":
					//console.log("拼读。");
					if (curId > len - 1) {
						curId = len - 1;
						return;
					}
				    _this._mov.gotoAndPlay(data[pgid - 1][curId].label);
				 	_this._pdMc.gotoAndPlay(data[pgid - 1][curId].label);
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
		this._mov._cliMc.visible=true;
	}
	this.frame_2 = function() {
		this.stop();
		this._mov._cliMc.visible=false;
		this._gdIco.visible=false;
	}
	this.frame_3 = function() {
		this.stop();
		this._mov._cliMc.visible=false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// 内容
	this._showbar = new lib.元件4();
	this._showbar.name = "_showbar";
	this._showbar.setTransform(700,1080.9);
	this._showbar._off = true;

	this.timeline.addTween(cjs.Tween.get(this._showbar).wait(1).to({_off:false},0).wait(1).to({x:672},0).wait(2));

	// csz
	this.pro_bar = new lib.元件3复制();
	this.pro_bar.name = "pro_bar";
	this.pro_bar.setTransform(373.25,816.95);
	this.pro_bar._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pro_bar).wait(1).to({_off:false},0).wait(3));

	// 菜单按钮等等
	this.btnMc_1 = new lib.元件9();
	this.btnMc_1.name = "btnMc_1";
	this.btnMc_1.setTransform(554.8,657.15);

	this.btnMc_3 = new lib.元件6();
	this.btnMc_3.name = "btnMc_3";
	this.btnMc_3.setTransform(717.2,657.15);

	this.btnMc_2 = new lib.元件5();
	this.btnMc_2.name = "btnMc_2";
	this.btnMc_2.setTransform(635.8,656.75);

	this._playAndpause = new lib.元件29();
	this._playAndpause.name = "_playAndpause";
	this._playAndpause.setTransform(760.1,853.55,0.8056,0.8044,0,0,0,0.1,1.9);
	this._playAndpause.alpha = 0.6992;

	this.btn_next = new lib.元件28();
	this.btn_next.name = "btn_next";
	this.btn_next.setTransform(1210.15,313);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 1);

	this.btn_prev = new lib.元件27();
	this.btn_prev.name = "btn_prev";
	this.btn_prev.setTransform(69.8,313);
	new cjs.ButtonHelper(this.btn_prev, 0, 1, 1);

	this.instance = new lib.元件19();
	this.instance.setTransform(640,313,1,1,0,0,0,598.7,28.5);
	this.instance.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -100, 0))];
	this.instance.cache(-4,-4,1206,66);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this._playAndpause,p:{y:853.55}},{t:this.btnMc_2,p:{x:635.8}},{t:this.btnMc_3,p:{x:717.2}},{t:this.btnMc_1,p:{x:554.8}}]}).to({state:[{t:this._playAndpause,p:{y:658.55}},{t:this.btnMc_2,p:{x:606.55}},{t:this.btnMc_3,p:{x:687.95}},{t:this.btnMc_1,p:{x:525.55}},{t:this.instance},{t:this.btn_prev},{t:this.btn_next}]},1).wait(3));

	// move
	this.instance_1 = new lib.ClipGroup_60();
	this.instance_1.setTransform(774.65,461.1,1.9224,1.9224,0,0,0,87.1,71.8);

	this.instance_2 = new lib.ClipGroup_61();
	this.instance_2.setTransform(440.5,461.1,1.9224,1.9224,0,0,0,87.1,71.8);

	this.instance_3 = new lib.ClipGroup_62();
	this.instance_3.setTransform(975.25,323.35,1.9224,1.9224,0,0,0,17.6,143.5);

	this.instance_4 = new lib.ClipGroup_63();
	this.instance_4.setTransform(774.65,185.7,1.9224,1.9224,0,0,0,87.1,71.9);

	this.instance_5 = new lib.ClipGroup_64();
	this.instance_5.setTransform(440.5,185.7,1.9224,1.9224,0,0,0,87.1,71.9);

	this.instance_6 = new lib.scene01_bg();
	this.instance_6.setTransform(639.05,324.05);

	this.instance_7 = new lib.scene01_bg();
	this.instance_7.setTransform(639.05,324.05);

	this.instance_8 = new lib.scene01_bg();
	this.instance_8.setTransform(639.05,324.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},1).wait(3));

	// 单词
	this._gdIco = new lib.元件53();
	this._gdIco.name = "_gdIco";
	this._gdIco.setTransform(256.05,72.6,0.7,0.7,0,0,0,-8.3,125);

	this._gdMc = new lib.元件51();
	this._gdMc.name = "_gdMc";
	this._gdMc.setTransform(744.2,446.2,1,1,0,0,0,110,60);

	this._pdMc = new lib.单词拼读mc();
	this._pdMc.name = "_pdMc";
	this._pdMc.setTransform(742.2,458.35,1,1,0,0,0,110,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this._gdMc},{t:this._gdIco}]},2).to({state:[{t:this._pdMc}]},1).wait(1));

	// 图层_3
	this._mov = new lib.元件22();
	this._mov.name = "_mov";
	this._mov.setTransform(639.05,324.05);
	this._mov._off = true;

	this.timeline.addTween(cjs.Tween.get(this._mov).wait(1).to({_off:false},0).wait(1).to({scaleX:0.919,scaleY:0.919,x:642.1,y:300.55},0).wait(2));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(640,360,1280,877);
p.frameBounds = [rect, new cjs.Rectangle(329.2,360,1590.9,1085.6), new cjs.Rectangle(338,360,1582,1085.6), new cjs.Rectangle(336,360,1584,1085.6)];
// library properties:
lib.properties = {
	id: 'E637B31863A9224E9952B4D82164A654',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_P_1.png", id:"index_atlas_P_1"},
		{src:"images/index_atlas_NP_1.jpg", id:"index_atlas_NP_1"}
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