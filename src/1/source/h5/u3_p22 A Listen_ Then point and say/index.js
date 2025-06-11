(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"index_atlas_P_1", frames: [[807,0,1123,740],[0,0,805,1036],[807,742,1125,445],[0,1038,805,150],[1938,0,3,6],[1932,0,4,19]]},
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



(lib.Image_12 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_13 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_50 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image_51 = function() {
	this.initialize(ss["index_atlas_P_1"]);
	this.gotoAndStop(5);
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
	this.shape.graphics.f().s("#F99703").ss(5,1,1).p("ABChxIAADjAhBhxIAADj");
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


(lib.ClipGroup_55 = function(mode,startPosition,loop,reversed) {
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


(lib.ClipGroup_53 = function(mode,startPosition,loop,reversed) {
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


(lib.ClipGroup_38_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AAAgEIABAAIgBAJg");
	mask.setTransform(0.4,0.625);

	// 图层_3
	this.instance = new lib.Image_50();
	this.instance.setTransform(0,0,0.2216,0.2216);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_38_0, rect = new cjs.Rectangle(0.3,0.2,0.3,1), [rect]);


(lib.ClipGroup_37_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgBATIADgJIAAAJgAAAgQIgBgBIADAAIAAAJg");
	mask.setTransform(0.475,2.1);

	// 图层_3
	this.instance = new lib.Image_51();
	this.instance.setTransform(0,0,0.2216,0.2216);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_37_0, rect = new cjs.Rectangle(0.3,0.3,0.4,3.7), [rect]);


(lib.ClipGroup_14 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("At7CmIAAlLIb3AAIAAFLg");
	mask.setTransform(89.2,16.625);

	// 图层_3
	this.instance = new lib.Image_13();
	this.instance.setTransform(0,0,0.2216,0.2216);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, rect = new cjs.Rectangle(0,0,178.4,33.3), [rect]);


(lib.ClipGroup_13 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AzeHtIAAvZMAm9AAAIAAPZg");
	mask.setTransform(124.65,49.3);

	// 图层_3
	this.instance = new lib.Image_12();
	this.instance.setTransform(0,0,0.2216,0.2216);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, rect = new cjs.Rectangle(0,0,249.3,98.6), [rect]);


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
	mask.graphics.p("At7R8MAAAgj3Ib3AAMAAAAj3g");
	mask.setTransform(89.2,114.8);

	// 图层_3
	this.instance = new lib.Image_11();
	this.instance.setTransform(0,0,0.2216,0.2216);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, rect = new cjs.Rectangle(0,0,178.4,229.6), [rect]);


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

	// 图层_3
	this.instance = new lib.Image_10();
	this.instance.setTransform(0,0,0.2216,0.2216);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, rect = new cjs.Rectangle(0,0,248.9,164), [rect]);


(lib.clickname复制2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 箭头
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7000F").s().p("AAAAdIgtgnQgFgEAEgGQAGgFAEAFIAnAiIAhgpQABgCADgBQADAAACACQADABAAADQABADgCACIglAvQgCADgDAAIgBAAIgEgCg");
	this.shape.setTransform(-197.6652,-128.2951,2.2697,2.2697);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7000F").s().p("AAGBrQgCgCAAgDIgVjJQgBgHAHgBQAHgBABAHIAFA1IAQCVQAAADgCACQgCACgDAAIgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_1.setTransform(-199.0952,-145.7748,2.2697,2.2697);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7000F").s().p("AAAAdIgtgnQgFgFAEgFQAFgFAFAEIAnAjIAggpQAFgGAFAEQAGAFgEAFIglAvQgCACgDABQgEAAgBgCg");
	this.shape_2.setTransform(-54.7745,-124.0999,2.2697,2.2697);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D7000F").s().p("AAEBmIgOiVIgHg0QgBgHAIgBQAGgBABAHIAGA0IAPCVQAAAHgGABIgCAAQgGAAAAgGg");
	this.shape_3.setTransform(-56.2968,-141.5276,2.2697,2.2697);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D7000F").s().p("AAYAvIg1gdQgDAAgBgEQgBgDACgDIAggyQACgGAHADQAFAEgDAGIgbAsIAuAZQAGADgDAHQgCADgEAAIgDAAg");
	this.shape_4.setTransform(310.8674,-40.6497,2.2699,2.2699);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7000F").s().p("AioA0QgCgBgBgDQgDgHAIgCIFKhbQAHgCABAHQACAHgGACIlLBbIgCAAIgDgBg");
	this.shape_5.setTransform(342.3504,-48.4282,2.2699,2.2699);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D7000F").s().p("AAAAdIgtgnQgFgFAEgFQAFgFAFAEIAnAjIAggpQAFgGAFAEQAGAFgEAFIglAvQgCADgDAAQgEAAgBgCg");
	this.shape_6.setTransform(241.8028,-136.4435,2.2698,2.2698);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D7000F").s().p("AADBmIgOiVIgGg0QgBgHAHgBQAHgBABAHIAFA0IAQCVQAAAHgHABIgBAAQgGAAgBgGg");
	this.shape_7.setTransform(240.3363,-153.8723,2.2698,2.2698);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D7000F").s().p("AAjAcIgggpIgnAiQgFAFgFgFQgEgGAFgEIAtgoQACgCADABQACAAADACIAlAwQAEAFgGAFQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgDAAgDgDg");
	this.shape_8.setTransform(146.6679,-25.7811,2.2701,2.2701);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D7000F").s().p("AgMCbQgGAAAAgHQAMilALiDQABgHAHABQAGAAAAAIQgHBMgKB4IgHBjQAAADgCACQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_9.setTransform(144.8181,2.2985,2.2701,2.2701);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D7000F").s().p("AAAAdIgtgnQgFgFAEgFQAGgFAFAEIAmAjIAhgpQAEgGAGAEQAFAFgEAFIglAvQgBACgEABQgEAAgBgCg");
	this.shape_10.setTransform(85.3992,-123.9919,2.2701,2.2701);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D7000F").s().p("AAEBmIgVjJQgBgHAHgBQAHgBABAHIAFA0IAQCVQABAHgIABIgBAAQgFAAgBgGg");
	this.shape_11.setTransform(83.9228,-141.4505,2.2701,2.2701);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{scaleX:2.2697,scaleY:2.2697,x:-199.0952,y:-145.7748}},{t:this.shape,p:{scaleX:2.2697,scaleY:2.2697,x:-197.6652,y:-128.2951}}]},48).to({state:[{t:this.shape_1,p:{scaleX:2.2697,scaleY:2.2697,x:-199.0952,y:-145.7748}},{t:this.shape,p:{scaleX:2.2697,scaleY:2.2697,x:-197.6652,y:-128.2951}},{t:this.shape_3,p:{scaleX:2.2697,scaleY:2.2697,x:-56.2968,y:-141.5276}},{t:this.shape_2,p:{scaleX:2.2697,scaleY:2.2697,x:-54.7745,y:-124.0999}}]},58).to({state:[{t:this.shape_1,p:{scaleX:2.2698,scaleY:2.2698,x:-199.0838,y:-145.7606}},{t:this.shape,p:{scaleX:2.2698,scaleY:2.2698,x:-197.6538,y:-128.2804}},{t:this.shape_3,p:{scaleX:2.2698,scaleY:2.2698,x:-56.2677,y:-141.5019}},{t:this.shape_2,p:{scaleX:2.2698,scaleY:2.2698,x:-54.7453,y:-124.0732}},{t:this.shape_7,p:{scaleX:2.2698,scaleY:2.2698,x:240.3363,y:-153.8723}},{t:this.shape_6,p:{scaleX:2.2698,scaleY:2.2698,x:241.8028,y:-136.4435}},{t:this.shape_5,p:{x:342.3504,y:-48.4282,scaleX:2.2699,scaleY:2.2699}},{t:this.shape_4,p:{x:310.8674,y:-40.6497,scaleX:2.2699,scaleY:2.2699}}]},180).to({state:[{t:this.shape_1,p:{scaleX:2.2699,scaleY:2.2699,x:-199.0724,y:-145.7465}},{t:this.shape,p:{scaleX:2.2699,scaleY:2.2699,x:-197.6424,y:-128.2657}},{t:this.shape_3,p:{scaleX:2.2699,scaleY:2.2699,x:-56.2516,y:-141.4876}},{t:this.shape_2,p:{scaleX:2.2699,scaleY:2.2699,x:-54.7291,y:-124.0583}},{t:this.shape_7,p:{scaleX:2.2699,scaleY:2.2699,x:240.3625,y:-153.8584}},{t:this.shape_6,p:{scaleX:2.2699,scaleY:2.2699,x:241.829,y:-136.4291}}]},66).to({state:[{t:this.shape_1,p:{scaleX:2.2699,scaleY:2.2699,x:-199.0633,y:-145.7352}},{t:this.shape,p:{scaleX:2.2699,scaleY:2.2699,x:-197.6333,y:-128.2539}},{t:this.shape_3,p:{scaleX:2.2699,scaleY:2.2699,x:-56.2386,y:-141.4762}},{t:this.shape_2,p:{scaleX:2.2699,scaleY:2.2699,x:-54.7161,y:-124.0464}},{t:this.shape_7,p:{scaleX:2.2699,scaleY:2.2699,x:240.3834,y:-153.8473}},{t:this.shape_6,p:{scaleX:2.2699,scaleY:2.2699,x:241.85,y:-136.4175}},{t:this.shape_5,p:{x:342.3741,y:-48.4142,scaleX:2.2699,scaleY:2.2699}},{t:this.shape_4,p:{x:310.8902,y:-40.6356,scaleX:2.2699,scaleY:2.2699}}]},61).to({state:[{t:this.shape_1,p:{scaleX:2.27,scaleY:2.27,x:-199.0519,y:-145.721}},{t:this.shape,p:{scaleX:2.27,scaleY:2.27,x:-197.6218,y:-128.2392}},{t:this.shape_3,p:{scaleX:2.27,scaleY:2.27,x:-56.2224,y:-141.4619}},{t:this.shape_2,p:{scaleX:2.27,scaleY:2.27,x:-54.6999,y:-124.0316}},{t:this.shape_7,p:{scaleX:2.27,scaleY:2.27,x:240.4095,y:-153.8335}},{t:this.shape_6,p:{scaleX:2.27,scaleY:2.27,x:241.8762,y:-136.4031}},{t:this.shape_5,p:{x:342.4037,y:-48.3968,scaleX:2.27,scaleY:2.27}},{t:this.shape_4,p:{x:310.9187,y:-40.6179,scaleX:2.27,scaleY:2.27}}]},69).to({state:[{t:this.shape_1,p:{scaleX:2.2701,scaleY:2.2701,x:-199.0428,y:-145.7097}},{t:this.shape,p:{scaleX:2.2701,scaleY:2.2701,x:-197.6127,y:-128.2274}},{t:this.shape_3,p:{scaleX:2.2701,scaleY:2.2701,x:-56.2095,y:-141.4505}},{t:this.shape_2,p:{scaleX:2.2701,scaleY:2.2701,x:-54.6869,y:-124.0197}},{t:this.shape_7,p:{scaleX:2.2701,scaleY:2.2701,x:240.4304,y:-153.8224}},{t:this.shape_6,p:{scaleX:2.2701,scaleY:2.2701,x:241.8971,y:-136.3915}},{t:this.shape_5,p:{x:342.4273,y:-48.3829,scaleX:2.2701,scaleY:2.2701}},{t:this.shape_4,p:{x:310.9415,y:-40.6038,scaleX:2.2701,scaleY:2.2701}},{t:this.shape_9},{t:this.shape_8}]},56).to({state:[{t:this.shape_1,p:{scaleX:2.2701,scaleY:2.2701,x:-199.0428,y:-145.7097}},{t:this.shape,p:{scaleX:2.2701,scaleY:2.2701,x:-197.6127,y:-128.2274}},{t:this.shape_3,p:{scaleX:2.2701,scaleY:2.2701,x:-56.2095,y:-141.4505}},{t:this.shape_2,p:{scaleX:2.2701,scaleY:2.2701,x:-54.6869,y:-124.0197}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_7,p:{scaleX:2.2701,scaleY:2.2701,x:240.4304,y:-153.8224}},{t:this.shape_6,p:{scaleX:2.2701,scaleY:2.2701,x:241.8971,y:-136.3915}},{t:this.shape_5,p:{x:342.4273,y:-48.3829,scaleX:2.2701,scaleY:2.2701}},{t:this.shape_4,p:{x:310.9415,y:-40.6038,scaleX:2.2701,scaleY:2.2701}},{t:this.shape_9},{t:this.shape_8}]},52).to({state:[]},80).wait(236));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-929.9,-232.4,1420.7,472.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-929.9,-238.8,1421.1,478.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-929.9,-238.8,1420.7,478.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-929.9,-238.8,1421.1,478.8), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-929.9,-232.4,1420.7,472.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=null, rect, rect, rect, rect];


(lib.元件75 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(124.275,47.8506);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(135).to({_off:false},0).to({_off:true},27).wait(76));

	// s
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_1.setTransform(98.775,47.8506);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(103).to({_off:false},0).to({_off:true},32).wait(103));

	// e
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_2.setTransform(70.9013,47.95);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(69).to({_off:false},0).to({_off:true},34).wait(135));

	// r
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_3.setTransform(46.625,47.7);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(38).to({_off:false},0).to({_off:true},31).wait(169));

	// d
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhZCvQgXgRgJggQgJgeAAgrQAAgnAJgfQAJgfAXgUQAYgSArgBQAkABATAKQASALAIASIAAiQIBIAAIAAF7IhCAAIgFgmQgIASgTAMQgUAMgjAAQgrABgYgSgAgkgUQgMALgEASQgEAUABAYQgBAYAEAUQAEASANALQAMALAXAAQAZABANgLQAOgJAFgTQAGgTgBgbQABgbgGgSQgFgTgOgLQgOgKgYgBQgYABgMAMg");
	this.shape_4.setTransform(17.4237,42.7);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(11).to({_off:false},0).to({_off:true},27).wait(200));

	// dress
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_5.setTransform(124.275,47.8506);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_6.setTransform(98.775,47.8506);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_7.setTransform(70.9013,47.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_8.setTransform(46.625,47.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhZCvQgXgRgJggQgJgeAAgrQAAgnAJgfQAJgfAXgUQAYgSArgBQAkABATAKQASALAIASIAAiQIBIAAIAAF7IhCAAIgFgmQgIASgTAMQgUAMgjAAQgrABgYgSgAgkgUQgMALgEASQgEAUABAYQgBAYAEAUQAEASANALQAMALAXAAQAZABANgLQAOgJAFgTQAGgTgBgbQABgbgGgSQgFgTgOgLQgOgKgYgBQgYABgMAMg");
	this.shape_9.setTransform(17.4237,42.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_10.setTransform(124.275,47.8506);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_11.setTransform(98.775,47.8506);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_12.setTransform(70.9013,47.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_13.setTransform(46.625,47.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AhZCvQgXgRgJggQgJgeAAgrQAAgnAJgfQAJgfAXgUQAYgSArgBQAkABATAKQASALAIASIAAiQIBIAAIAAF7IhCAAIgFgmQgIASgTAMQgUAMgjAAQgrABgYgSgAgkgUQgMALgEASQgEAUABAYQgBAYAEAUQAEASANALQAMALAXAAQAZABANgLQAOgJAFgTQAGgTgBgbQABgbgGgSQgFgTgOgLQgOgKgYgBQgYABgMAMg");
	this.shape_14.setTransform(17.4237,42.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},162).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},26).to({state:[]},1).wait(49));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,139.6,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,139.7,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,139.6,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件74 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(144.575,47.8506);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(166).to({_off:false},0).to({_off:true},28).wait(58));

	// t
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgIChQgUgIgJgTQgJgUABgjIAAh+IgkAAIAAg5IAkAAIAAhAIBHAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgRgIg");
	this.shape_1.setTransform(122.25,44.9015);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(135).to({_off:false},0).to({_off:true},31).wait(86));

	// r
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_2.setTransform(103.825,47.7);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(106).to({_off:false},0).to({_off:true},29).wait(117));

	// o
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_3.setTransform(75.875,47.95);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(73).to({_off:false},0).to({_off:true},33).wait(146));

	// h
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAzC+IAAilQAAgbgJgLQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAKAJATQAIAVAAAdIAAC4g");
	this.shape_4.setTransform(43.575,42.45);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(39).to({_off:false},0).to({_off:true},34).wait(179));

	// s
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_5.setTransform(14.375,47.8506);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(10).to({_off:false},0).to({_off:true},29).wait(213));

	// shorts
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_6.setTransform(144.575,47.8506);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgIChQgUgIgJgTQgJgUABgjIAAh+IgkAAIAAg5IAkAAIAAhAIBHAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgRgIg");
	this.shape_7.setTransform(122.25,44.9015);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_8.setTransform(103.825,47.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_9.setTransform(75.875,47.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAzC+IAAilQAAgbgJgLQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAKAJATQAIAVAAAdIAAC4g");
	this.shape_10.setTransform(43.575,42.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_11.setTransform(14.375,47.8506);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_12.setTransform(144.575,47.8506);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgIChQgUgIgJgTQgJgUABgjIAAh+IgkAAIAAg5IAkAAIAAhAIBHAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgRgIg");
	this.shape_13.setTransform(122.25,44.9015);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_14.setTransform(103.825,47.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_15.setTransform(75.875,47.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AAzC+IAAilQAAgbgJgLQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAKAJATQAIAVAAAdIAAC4g");
	this.shape_16.setTransform(43.575,42.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_17.setTransform(14.375,47.8506);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},194).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},29).to({state:[]},1).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,159.9,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,160,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,159.9,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件73 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// p
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiCC8IAAlxIBJAAIAAAgQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAfAAArQAAAngJAfQgIAfgYASQgXATgsAAQgjAAgTgLQgTgKgHgSIAACHgAglh6QgOAKgFATQgGATABAcQgBAZAGAUQAFARAOALQAOAKAXAAQAZAAAMgLQAMgMAEgSQAEgTAAgXQAAgagEgSQgEgUgMgLQgNgLgYgBQgXAAgOALg");
	this.shape.setTransform(76.6763,52.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(71).to({_off:false},0).to({_off:true},30).wait(40));

	// a
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_1.setTransform(42.625,47.825);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(38).to({_off:false},0).to({_off:true},33).wait(70));

	// c
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgoCAQgegNgQgeQgQgfAAg2QAAg1AQgfQAQgfAegMQAegMApAAQAUAAASADQATABAMAFIAAA8QgOgFgOgCQgPgDgRAAQgYAAgPAHQgOAIgHARQgHARAAAfQAAAfAHASQAHARAPAHQAPAHAZAAQAQAAAPgCQAPgDAPgFIAAA8QgIADgMACIgaAEIgaABIgDAAQgnAAgdgMg");
	this.shape_2.setTransform(14.625,47.95);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(11).to({_off:false},0).to({_off:true},27).wait(103));

	// cap
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AiCC8IAAlxIBJAAIAAAgQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAfAAArQAAAngJAfQgIAfgYASQgXATgsAAQgjAAgTgLQgTgKgHgSIAACHgAglh6QgOAKgFATQgGATABAcQgBAZAGAUQAFARAOALQAOAKAXAAQAZAAAMgLQAMgMAEgSQAEgTAAgXQAAgagEgSQgEgUgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_3.setTransform(76.6763,52.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_4.setTransform(42.625,47.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgoCAQgegNgQgeQgQgfAAg2QAAg1AQgfQAQgfAegMQAegMApAAQAUAAASADQATABAMAFIAAA8QgOgFgOgCQgPgDgRAAQgYAAgPAHQgOAIgHARQgHARAAAfQAAAfAHASQAHARAPAHQAPAHAZAAQAQAAAPgCQAPgDAPgFIAAA8QgIADgMACIgaAEIgaABIgDAAQgnAAgdgMg");
	this.shape_5.setTransform(14.625,47.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AiCC8IAAlxIBJAAIAAAgQAHgPAUgLQATgLAigBQAsABAXAQQAYASAIAgQAJAfAAArQAAAngJAfQgIAfgYASQgXATgsAAQgjAAgTgLQgTgKgHgSIAACHgAglh6QgOAKgFATQgGATABAcQgBAZAGAUQAFARAOALQAOAKAXAAQAZAAAMgLQAMgMAEgSQAEgTAAgXQAAgagEgSQgEgUgMgLQgNgLgYgBQgXAAgOALg");
	this.shape_6.setTransform(76.6763,52.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_7.setTransform(42.625,47.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgoCAQgegNgQgeQgQgfAAg2QAAg1AQgfQAQgfAegMQAegMApAAQAUAAASADQATABAMAFIAAA8QgOgFgOgCQgPgDgRAAQgYAAgPAHQgOAIgHARQgHARAAAfQAAAfAHASQAHARAPAHQAPAHAZAAQAQAAAPgCQAPgDAPgFIAAA8QgIADgMACIgaAEIgaABIgDAAQgnAAgdgMg");
	this.shape_8.setTransform(14.625,47.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},101).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},30).to({state:[]},1).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,95.1,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,95.2,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,95.1,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件72 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgIChQgUgIgJgTQgJgUABgjIAAh+IgkAAIAAg5IAkAAIAAhAIBHAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAGAIATAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgRgIg");
	this.shape.setTransform(100.75,44.9015);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100).to({_off:false},0).to({_off:true},30).wait(61));

	// a
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_1.setTransform(74.575,47.825);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(68).to({_off:false},0).to({_off:true},32).wait(91));

	// o
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_2.setTransform(43.525,47.95);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(35).to({_off:false},0).to({_off:true},33).wait(123));

	// c
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgoCAQgegNgQgeQgQgfAAg2QAAg1AQgfQAQgfAegMQAegMApAAQAUAAASADQATABAMAFIAAA8QgOgFgOgCQgPgDgRAAQgYAAgPAHQgOAIgHARQgHARAAAfQAAAfAHASQAHARAPAHQAPAHAZAAQAQAAAPgCQAPgDAPgFIAAA8QgIADgMACIgaAEIgaABIgDAAQgnAAgdgMg");
	this.shape_3.setTransform(14.625,47.95);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(8).to({_off:false},0).to({_off:true},27).wait(156));

	// coat
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgIChQgUgIgJgTQgJgUABgjIAAh+IgkAAIAAg5IAkAAIAAhAIBHAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAGAIATAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgRgIg");
	this.shape_4.setTransform(100.75,44.9015);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_5.setTransform(74.575,47.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_6.setTransform(43.525,47.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgoCAQgegNgQgeQgQgfAAg2QAAg1AQgfQAQgfAegMQAegMApAAQAUAAASADQATABAMAFIAAA8QgOgFgOgCQgPgDgRAAQgYAAgPAHQgOAIgHARQgHARAAAfQAAAfAHASQAHARAPAHQAPAHAZAAQAQAAAPgCQAPgDAPgFIAAA8QgIADgMACIgaAEIgaABIgDAAQgnAAgdgMg");
	this.shape_7.setTransform(14.625,47.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgIChQgUgIgJgTQgJgUABgjIAAh+IgkAAIAAg5IAkAAIAAhAIBHAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAGAIATAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgRgIg");
	this.shape_8.setTransform(100.75,44.9015);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_9.setTransform(74.575,47.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_10.setTransform(43.525,47.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgoCAQgegNgQgeQgQgfAAg2QAAg1AQgfQAQgfAegMQAegMApAAQAUAAASADQATABAMAFIAAA8QgOgFgOgCQgPgDgRAAQgYAAgPAHQgOAIgHARQgHARAAAfQAAAfAHASQAHARAPAHQAPAHAZAAQAQAAAPgCQAPgDAPgFIAAA8QgIADgMACIgaAEIgaABIgDAAQgnAAgdgMg");
	this.shape_11.setTransform(14.625,47.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},130).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},20).to({state:[]},1).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,112.9,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,113,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,112.9,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件71 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgSABIgSABIgDABQgfAAgSgIg");
	this.shape.setTransform(105.55,44.9015);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(141).to({_off:false},0).to({_off:true},33).wait(43));

	// r
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_1.setTransform(87.125,47.7);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(102).to({_off:false},0).to({_off:true},39).wait(76));

	// i
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgkDAIAAkNIBIAAIAAENgAgYh1QgJgDgEgIQgCgIAAgRQAAgRACgIQAEgIAJgDQAJgCAPAAQAQAAAJACQAJADAEAIQACAIAAARQAAARgCAIQgEAIgJADQgJACgQAAQgPAAgJgCg");
	this.shape_2.setTransform(67.5,42.2708);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(69).to({_off:false},0).to({_off:true},33).wait(115));

	// h
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAzC+IAAilQAAgbgJgLQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAKAJATQAIAVAAAdIAAC4g");
	this.shape_3.setTransform(43.525,42.45);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(35).to({_off:false},0).to({_off:true},34).wait(148));

	// s
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_4.setTransform(14.325,47.8506);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(8).to({_off:false},0).to({_off:true},27).wait(182));

	// shirt
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgSABIgSABIgDABQgfAAgSgIg");
	this.shape_5.setTransform(105.55,44.9015);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_6.setTransform(87.125,47.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgkDAIAAkNIBIAAIAAENgAgYh1QgJgDgEgIQgCgIAAgRQAAgRACgIQAEgIAJgDQAJgCAPAAQAQAAAJACQAJADAEAIQACAIAAARQAAARgCAIQgEAIgJADQgJACgQAAQgPAAgJgCg");
	this.shape_7.setTransform(67.5,42.2708);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAzC+IAAilQAAgbgJgLQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAKAJATQAIAVAAAdIAAC4g");
	this.shape_8.setTransform(43.525,42.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_9.setTransform(14.325,47.8506);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgSABIgSABIgDABQgfAAgSgIg");
	this.shape_10.setTransform(105.55,44.9015);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_11.setTransform(87.125,47.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgkDAIAAkNIBIAAIAAENgAgYh1QgJgDgEgIQgCgIAAgRQAAgRACgIQAEgIAJgDQAJgCAPAAQAQAAAJACQAJADAEAIQACAIAAARQAAARgCAIQgEAIgJADQgJACgQAAQgPAAgJgCg");
	this.shape_12.setTransform(67.5,42.2708);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAzC+IAAilQAAgbgJgLQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAKAJATQAIAVAAAdIAAC4g");
	this.shape_13.setTransform(43.525,42.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_14.setTransform(14.325,47.8506);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},174).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},22).to({state:[]},1).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,117.7,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,117.8,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,117.7,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件70 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(195.675,47.8506);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(245).to({_off:false},0).to({_off:true},31).wait(46));

	// r
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_1.setTransform(173.825,47.7);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(211).to({_off:false},0).to({_off:true},34).wait(77));

	// e
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_2.setTransform(146.7513,47.95);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(177).to({_off:false},0).to({_off:true},34).wait(111));

	// s
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_3.setTransform(118.825,47.8506);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(144).to({_off:false},0).to({_off:true},33).wait(145));

	// u
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhUB/QgUgKgJgUQgIgUAAgeIAAi3IBIAAIAACkQAAAbAJALQAJANAaAAQAUAAAPgJQAOgIAGgVIAAixIBIAAIAAENIhBAAIgGghQgLAUgVAIQgUAJgeAAQghAAgUgKg");
	this.shape_4.setTransform(89.675,48.2);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(106).to({_off:false},0).to({_off:true},38).wait(178));

	// o
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_5.setTransform(57.525,47.95);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(72).to({_off:false},0).to({_off:true},34).wait(216));

	// r
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_6.setTransform(32.475,47.7);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(38).to({_off:false},0).to({_off:true},34).wait(250));

	// t
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgSgIg");
	this.shape_7.setTransform(10.95,44.9015);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(10).to({_off:false},0).to({_off:true},28).wait(284));

	// trousers
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_8.setTransform(195.675,47.8506);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_9.setTransform(173.825,47.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_10.setTransform(146.7513,47.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_11.setTransform(118.825,47.8506);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AhUB/QgUgKgJgUQgIgUAAgeIAAi3IBIAAIAACkQAAAbAJALQAJANAaAAQAUAAAPgJQAOgIAGgVIAAixIBIAAIAAENIhBAAIgGghQgLAUgVAIQgUAJgeAAQghAAgUgKg");
	this.shape_12.setTransform(89.675,48.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_13.setTransform(57.525,47.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_14.setTransform(32.475,47.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgSgIg");
	this.shape_15.setTransform(10.95,44.9015);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_16.setTransform(195.675,47.8506);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_17.setTransform(173.825,47.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_18.setTransform(146.7513,47.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_19.setTransform(118.825,47.8506);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AhUB/QgUgKgJgUQgIgUAAgeIAAi3IBIAAIAACkQAAAbAJALQAJANAaAAQAUAAAPgJQAOgIAGgVIAAixIBIAAIAAENIhBAAIgGghQgLAUgVAIQgUAJgeAAQghAAgUgKg");
	this.shape_20.setTransform(89.675,48.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_21.setTransform(57.525,47.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_22.setTransform(32.475,47.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgSgIg");
	this.shape_23.setTransform(10.95,44.9015);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},276).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},30).to({state:[]},1).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,211,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,211.1,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,211,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件69 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(134.875,47.8506);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(132).to({_off:false},0).to({_off:true},34).wait(63));

	// e
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_1.setTransform(107.0013,47.95);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(100).to({_off:false},0).to({_off:true},32).wait(97));

	// o
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_2.setTransform(75.825,47.95);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(66).to({_off:false},0).to({_off:true},34).wait(129));

	// h
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAzC+IAAilQAAgbgJgLQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAKAJATQAIAVAAAdIAAC4g");
	this.shape_3.setTransform(43.525,42.45);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(33).to({_off:false},0).to({_off:true},33).wait(163));

	// s
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_4.setTransform(14.325,47.8506);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(6).to({_off:false},0).to({_off:true},27).wait(196));

	// shoes
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_5.setTransform(134.875,47.8506);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_6.setTransform(107.0013,47.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_7.setTransform(75.825,47.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAzC+IAAilQAAgbgJgLQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAKAJATQAIAVAAAdIAAC4g");
	this.shape_8.setTransform(43.525,42.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_9.setTransform(14.325,47.8506);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_10.setTransform(134.875,47.8506);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_11.setTransform(107.0013,47.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAACMQgpAAgdgMQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAIQANAHAUAAQAWAAANgHQANgIAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_12.setTransform(75.825,47.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAzC+IAAilQAAgbgJgLQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAKAJATQAIAVAAAdIAAC4g");
	this.shape_13.setTransform(43.525,42.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_14.setTransform(14.325,47.8506);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},166).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},31).to({state:[]},1).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,150.2,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,150.3,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,150.2,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件68 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgIChQgUgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgRgIg");
	this.shape.setTransform(102.25,44.9015);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(136).to({_off:false},0).to({_off:true},31).wait(92));

	// r
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_1.setTransform(83.825,47.7);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(103).to({_off:false},0).to({_off:true},33).wait(123));

	// i
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgDgIQgEgIAAgRQAAgRAEgIQADgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQADAIAAARQAAARgDAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_2.setTransform(64.2,42.2708);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(70).to({_off:false},0).to({_off:true},33).wait(156));

	// k
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADQIAQAAIBFhiIBUAAIhgB9IBkCQg");
	this.shape_3.setTransform(43.575,42.45);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(37).to({_off:false},0).to({_off:true},33).wait(189));

	// s
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_4.setTransform(14.375,47.8506);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(6).to({_off:false},0).to({_off:true},31).wait(222));

	// 图层_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgIChQgUgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgRgIg");
	this.shape_5.setTransform(102.25,44.9015);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_6.setTransform(83.825,47.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgDgIQgEgIAAgRQAAgRAEgIQADgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQADAIAAARQAAARgDAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_7.setTransform(64.2,42.2708);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADQIAQAAIBFhiIBUAAIhgB9IBkCQg");
	this.shape_8.setTransform(43.575,42.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_9.setTransform(14.375,47.8506);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgIChQgUgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgRgIg");
	this.shape_10.setTransform(102.25,44.9015);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_11.setTransform(83.825,47.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgDgIQgEgIAAgRQAAgRAEgIQADgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQADAIAAARQAAARgDAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_12.setTransform(64.2,42.2708);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADQIAQAAIBFhiIBUAAIhgB9IBkCQg");
	this.shape_13.setTransform(43.575,42.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_14.setTransform(14.375,47.8506);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},167).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},25).to({state:[]},1).wait(66));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,114.4,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,114.5,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,114.4,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件67 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgIChQgUgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgRgIg");
	this.shape.setTransform(157.15,44.9015);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(168).to({_off:false},0).to({_off:true},34).wait(38));

	// r
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_1.setTransform(138.725,47.7);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(133).to({_off:false},0).to({_off:true},35).wait(72));

	// i
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgDgIQgEgIAAgRQAAgRAEgIQADgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQADAIAAARQAAARgDAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_2.setTransform(119.1,42.2708);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(101).to({_off:false},0).to({_off:true},32).wait(107));

	// h
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAzC+IAAilQAAgbgJgLQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAKAJATQAIAVAAAdIAAC4g");
	this.shape_3.setTransform(95.125,42.45);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(67).to({_off:false},0).to({_off:true},34).wait(139));

	// s
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_4.setTransform(65.925,47.8506);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(34).to({_off:false},0).to({_off:true},33).wait(173));

	// T
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AglCuIAAkYIhbAAIAAhDIEBAAIAABDIhbAAIAAEYg");
	this.shape_5.setTransform(15.875,44.1);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(6).to({_off:false},0).to({_off:true},28).wait(206));

	// T-shirt
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgIChQgUgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgRgIg");
	this.shape_6.setTransform(157.15,44.9015);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_7.setTransform(138.725,47.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgDgIQgEgIAAgRQAAgRAEgIQADgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQADAIAAARQAAARgDAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_8.setTransform(119.1,42.2708);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AAzC+IAAilQAAgbgJgLQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAKAJATQAIAVAAAdIAAC4g");
	this.shape_9.setTransform(95.125,42.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_10.setTransform(65.925,47.8506);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhMAdIAAg5ICZAAIAAA5g");
	this.shape_11.setTransform(41.625,46.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AglCuIAAkYIhbAAIAAhDIEBAAIAABDIhbAAIAAEYg");
	this.shape_12.setTransform(15.875,44.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgIChQgUgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgRgIg");
	this.shape_13.setTransform(157.15,44.9015);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_14.setTransform(138.725,47.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgDgIQgEgIAAgRQAAgRAEgIQADgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQADAIAAARQAAARgDAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_15.setTransform(119.1,42.2708);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AAzC+IAAilQAAgbgJgLQgKgMgZAAQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAKAJATQAIAVAAAdIAAC4g");
	this.shape_16.setTransform(95.125,42.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_17.setTransform(65.925,47.8506);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AhMAdIAAg5ICZAAIAAA5g");
	this.shape_18.setTransform(41.625,46.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AglCuIAAkYIhbAAIAAhDIEBAAIAABDIhbAAIAAEYg");
	this.shape_19.setTransform(15.875,44.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},202).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},27).to({state:[]},1).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,169.3,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,169.4,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,169.3,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件66 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape.setTransform(195.225,47.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(206).to({_off:false},0).to({_off:true},32).wait(70));

	// e
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_1.setTransform(168.1513,47.95);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(169).to({_off:false},0).to({_off:true},37).wait(102));

	// t
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgIChQgUgIgJgTQgJgUABgjIAAh+IgkAAIAAg5IAkAAIAAhAIBHAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgRgIg");
	this.shape_2.setTransform(143.4,44.9015);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(137).to({_off:false},0).to({_off:true},32).wait(139));

	// a
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_3.setTransform(117.225,47.825);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(98).to({_off:false},0).to({_off:true},39).wait(171));

	// e
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_4.setTransform(87.0513,47.95);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(65).to({_off:false},0).to({_off:true},33).wait(210));

	// w
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAuCHIgti3IgCAAIgtC3IhbAAIhJkNIBOAAIAqDCIADAAIAwjCIBQAAIAwDCIADAAIAqjCIBNAAIhKENg");
	this.shape_5.setTransform(49.5,47.95);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(32).to({_off:false},0).to({_off:true},33).wait(243));

	// s
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_6.setTransform(14.375,47.8506);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(5).to({_off:false},0).to({_off:true},27).wait(276));

	// 图层_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_7.setTransform(195.225,47.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_8.setTransform(168.1513,47.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgIChQgUgIgJgTQgJgUABgjIAAh+IgkAAIAAg5IAkAAIAAhAIBHAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgRgIg");
	this.shape_9.setTransform(143.4,44.9015);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_10.setTransform(117.225,47.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_11.setTransform(87.0513,47.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAuCHIgti3IgCAAIgtC3IhbAAIhJkNIBOAAIAqDCIADAAIAwjCIBQAAIAwDCIADAAIAqjCIBNAAIhKENg");
	this.shape_12.setTransform(49.5,47.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_13.setTransform(14.375,47.8506);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgEQAPgFAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_14.setTransform(195.225,47.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_15.setTransform(168.1513,47.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgIChQgUgIgJgTQgJgUABgjIAAh+IgkAAIAAg5IAkAAIAAhAIBHAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgRgIg");
	this.shape_16.setTransform(143.4,44.9015);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_17.setTransform(117.225,47.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuAAAaAPQAZAQAJAaQAKAbgBAjIgBAUIgBAQIitALQABAdASANQASAOAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAHgcAGQgcAFgjABIgDAAQgnAAgcgMgAglhGQgNAQgBAgIBtgJQABgPgEgMQgEgMgLgHQgKgHgVAAQgggBgOAPg");
	this.shape_18.setTransform(87.0513,47.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AAuCHIgti3IgCAAIgtC3IhbAAIhJkNIBOAAIAqDCIADAAIAwjCIBQAAIAwDCIADAAIAqjCIBNAAIhKENg");
	this.shape_19.setTransform(49.5,47.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_20.setTransform(14.375,47.8506);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},239).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},24).to({state:[]},1).wait(44));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,206.9,81.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,207,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0,206.9,81.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件64 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AjFshQDfA2CThlQBMggC6FiIgTCAIhvAwICaQNQgoBDh9AwQj7BhmqhaQgFn3CEoxQjOgrAFhUICKljQB0hFAGAFg");
	this.shape.setTransform(45.8448,85.197);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件64, rect = new cjs.Rectangle(-1,-1,93.7,172.4), [rect]);


(lib.元件63 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AiwlWIHMgrQBcAUgXBhIhQJgIhPAGIg6jaIg7DaQjOBajjhwQA4lFB2lF");
	this.shape.setTransform(35.7397,38.5868);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件63, rect = new cjs.Rectangle(-1,-1,73.5,79.2), [rect]);


(lib.元件62 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("ADwC3QhgBLjIgrQgEAAgDAAQhhAAhEhCQhFhBAAhbQAAhcBFhBQBEhBBqAAQA/AAAxAYQANAGAMAJIAeAQQBEAcArAzQCKCih3B0");
	this.shape.setTransform(29.7854,23.0335);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件62, rect = new cjs.Rectangle(-1,-1,61.6,48.1), [rect]);


(lib.元件61 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("ABioCQAgCFBlBkQCIghAWiuIBGAVQCWCXAzCXQifAdggBTQg6BZA/CPIBlBFIALCkQg2CGkjgsQjaAqiChUIgVhqIAkm3QjkBikJgtIhKgLIABiKIFNhUIGdj6");
	this.shape.setTransform(66,51.5714);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件61, rect = new cjs.Rectangle(-1,-1,134,105.2), [rect]);


(lib.元件60 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AhjoWIFHAAIBgA/IBUBVQipBFAvCvQhMCqBnCIIA1AwIi/CfIipBvIjZAVIiPAgIg1gbIAVhfIBlrFIArhVIBahFIAWgmQAYgoAHgGg");
	this.shape.setTransform(40.8,53.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件60, rect = new cjs.Rectangle(-1,-1,83.6,109), [rect]);


(lib.元件59 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("Akjs9IALEUIi6WGIFJAqIC+zCIDaJBIBfAFIBln7IgQhgIiqhvIBFi5IglkOIpRBJ");
	this.shape.setTransform(46.65,90.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件59, rect = new cjs.Rectangle(-1,-1,95.3,182.7), [rect]);


(lib.元件58 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("Aidh1Qg/BBAhBBIDDBqICVALIAqhFIjYizIhKAlgAibiBIgCAMIgDgB");
	this.shape.setTransform(78.1228,22.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(2,1,1).p("AhKi+IhQB1ICQDNQAxA8BHgBIArgbQANhKhXi+QiSgYgHhCg");
	this.shape_1.setTransform(15.457,19.1005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件58, rect = new cjs.Rectangle(-1,-1,100.1,40.2), [rect]);


(lib.元件57 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("Ah0mSImSJLQAJBfCGALICvBQQAlAlDIAQQBMhCCyA3ICfgaIA7nMIAKi6IiKikQn3BIAGgzg");
	this.shape.setTransform(51.925,42.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件57, rect = new cjs.Rectangle(-1,-1,105.9,86.8), [rect]);


(lib.元件56 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("Ah8mqIi5BqIi5DZIB5C0ICKh/IgFHsIJ1gFIgPnXIBfA/Iglg0IA/i6IiEiUIikhVQk9ALgGAFg");
	this.shape.setTransform(49.525,44.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件56, rect = new cjs.Rectangle(-1,-1,101.1,90.5), [rect]);


(lib.元件55 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("AmEl/QkJGPgSGoIBqAlQBNgLBcmTIgYDkQAaBhFSgMQBwgOCMg/IAWg9IgVhJIhVj0ID0BfQCcAbCHg1QAwgxgrhRQiOgmjHgZQhyhriShUIhmhCQhOAehUgu");
	this.shape.setTransform(67.2418,47.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(2,1,1).p("AgGADIANgF");
	this.shape_1.setTransform(44.875,0.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(2,1,1).p("AhbAGQAzgiAtAXIBKBdIANg4QgZg6gCg8");
	this.shape_2.setTransform(37.45,9.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件55, rect = new cjs.Rectangle(-1,-1,136.5,97.6), [rect]);


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
	props.labels = {gd_label字段:0,label0:0,label1:1,label2:5,label3:9,label4:13,label5:17,label6:21,label7:25,label8:29,label9:33,label10:37,label11:41};
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(46));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},41).wait(5));

	// 单词
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AhNCJIAAkNIBIAAIAAAxQAIgWAMgLQAMgNAPgEQAPgDAQAAIAFAAIgCBAIgHAAQgRAAgPAFQgQAFgLAMQgKANgFAWIAACYg");
	this.shape_5.setTransform(98.475,198.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuABAaAOQAZAPAJAbQAKAbgBAiIgBAVIgBAQIitALQABAcASAOQASAOAjAAQARAAARgDQARgCAPgFQAOgEAJgFIAAA5QgMAIgcAFQgcAFgjABIgDAAQgnAAgcgMgAglhFQgNAPgBAfIBtgIQABgPgEgMQgEgMgLgHQgKgHgVgBQggABgOAPg");
	this.shape_6.setTransform(71.4013,199);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgIChQgUgIgJgTQgJgUABgjIAAh+IgkAAIAAg5IAkAAIAAhAIBHAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgRgIg");
	this.shape_7.setTransform(46.65,195.9515);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_8.setTransform(20.475,198.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgfAdgMQAegMAqAAQAuABAaAOQAZAPAJAbQAKAbgBAiIgBAVIgBAQIitALQABAcASAOQASAOAjAAQARAAARgDQARgCAPgFQAOgEAJgFIAAA5QgMAIgcAFQgcAFgjABIgDAAQgnAAgcgMgAglhFQgNAPgBAfIBtgIQABgPgEgMQgEgMgLgHQgKgHgVgBQggABgOAPg");
	this.shape_9.setTransform(-9.6987,199);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAuCHIgti4IgCAAIgtC4IhbAAIhJkNIBOAAIAqDCIADAAIAvjCIBRAAIAwDCIADAAIAqjCIBNAAIhKENg");
	this.shape_10.setTransform(-47.25,199);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_11.setTransform(-82.375,198.9006);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_12.setTransform(79.2,195.9515);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgDgIQgEgIAAgRQAAgRAEgIQADgIAJgDQAJgCAPAAQAQAAAJACQAJADAEAIQACAIAAARQAAARgCAIQgEAIgJADQgJACgQAAQgPAAgJgCg");
	this.shape_13.setTransform(41.15,193.3208);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAzC+IAAimQAAgZgJgMQgKgNgZABQgWgBgOAKQgPAIgGAVIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgKQAVgJAeAAQAhAAAUAKQATAKAJAVQAIATAAAdIAAC5g");
	this.shape_14.setTransform(17.175,193.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AhMAdIAAg5ICZAAIAAA5g");
	this.shape_15.setTransform(-36.325,197.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AglCtIAAkXIhbAAIAAhCIEBAAIAABCIhbAAIAAEXg");
	this.shape_16.setTransform(-62.075,195.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADRIAQAAIBFhjIBUAAIhgB9IBkCQg");
	this.shape_17.setTransform(-6.925,193.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAACMQgpABgdgNQgegNgQgeQgPgfAAg2QAAg1APgfQAQgfAegMQAdgMApAAQAqAAAeAMQAdAMAPAfQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihNQgMAHgGAUQgFASAAAgQAAAhAGASQAFATANAHQANAIAUAAQAWAAANgIQANgHAFgTQAFgSAAghQAAgggFgSQgGgUgMgHQgNgIgWAAQgVAAgNAIg");
	this.shape_18.setTransform(7.425,199);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_19.setTransform(-54.075,198.9006);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AhUB/QgUgKgJgUQgIgUAAgdIAAi5IBIAAIAAClQAAAbAJAMQAJAMAagBQAUABAPgJQAOgIAGgVIAAiyIBIAAIAAENIhBAAIgGggQgLATgVAKQgUAIgeABQghAAgUgLg");
	this.shape_20.setTransform(-9.125,199.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AhNCJIAAkNIBIAAIAAAxQAIgWAMgLQAMgNAPgEQAPgDAQAAIAFAAIgCBAIgHAAQgRAAgPAFQgQAFgLAMQgKANgFAWIAACYg");
	this.shape_21.setTransform(-66.325,198.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_22.setTransform(-87.85,195.9515);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgkDAIAAkNIBIAAIAAENgAgYh1QgJgDgDgIQgDgIAAgRQAAgRADgIQADgIAJgDQAJgCAPAAQARAAAIACQAJADADAIQADAIABARQgBARgDAIQgDAIgJADQgIACgRAAQgPAAgJgCg");
	this.shape_23.setTransform(15.35,193.3208);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgSABIgSABIgDABQgfAAgSgIg");
	this.shape_24.setTransform(51,195.9515);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgoCAQgegNgQgeQgQgfAAg2QAAg1AQgfQAQgfAegMQAegMApAAQAUAAASACQATACAMAEIAAA+QgOgFgOgDQgPgCgRAAQgYgBgPAHQgOAHgHASQgHASAAAeQAAAfAHASQAHARAPAHQAPAIAZgBQAQAAAPgDQAPgCAPgFIAAA7QgIADgMADIgaADIgaACIgDAAQgnAAgdgMg");
	this.shape_25.setTransform(-35.125,199);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AiCC7IAAlxIBJAAIAAAhQAHgQAUgKQATgLAiAAQAsAAAXAQQAYASAIAgQAJAeAAArQAAAogJAeQgIAggYATQgXASgsABQgjAAgTgMQgTgKgHgSIAACGgAglh6QgOAKgFATQgGATABAbQgBAbAGASQAFATAOAKQAOALAXAAQAZgBAMgMQAMgKAEgTQAEgTAAgYQAAgYgEgUQgEgTgMgLQgNgLgYAAQgXgBgOALg");
	this.shape_26.setTransform(35.8263,203.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgIChQgUgIgJgTQgJgUABgjIAAh+IgkAAIAAg5IAkAAIAAhAIBHAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAGAIATAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgRgIg");
	this.shape_27.setTransform(49,195.9515);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AhZCwQgXgSgJggQgJgfAAgrQAAgnAJgeQAJggAXgSQAYgTArAAQAkAAATALQASAKAIASIAAiQIBIAAIAAF6IhCAAIgFglQgIASgTAMQgUAMgjABQgrAAgYgRgAgkgUQgMALgEASQgEAUABAXQgBAaAEASQAEAUANAKQAMALAXABQAZAAANgLQAOgJAFgTQAGgTgBgcQABgZgGgUQgFgSgOgKQgOgLgYAAQgYAAgMAMg");
	this.shape_28.setTransform(-45.6763,193.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11,p:{x:-82.375}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:20.475}},{t:this.shape_7,p:{x:46.65}},{t:this.shape_6,p:{x:71.4013}},{t:this.shape_5,p:{x:98.475}}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_11,p:{x:-12.025}},{t:this.shape_14,p:{x:17.175}},{t:this.shape_13,p:{x:41.15}},{t:this.shape_5,p:{x:60.775}},{t:this.shape_12,p:{x:79.2}}]},4).to({state:[{t:this.shape_11,p:{x:-36.125}},{t:this.shape_17},{t:this.shape_13,p:{x:13.7}},{t:this.shape_5,p:{x:33.325}},{t:this.shape_12,p:{x:51.75}}]},4).to({state:[{t:this.shape_19,p:{x:-54.075}},{t:this.shape_14,p:{x:-24.875}},{t:this.shape_18,p:{x:7.425}},{t:this.shape_6,p:{x:38.6013}},{t:this.shape_11,p:{x:66.475}}]},4).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_18,p:{x:-41.275}},{t:this.shape_20},{t:this.shape_19,p:{x:20.025}},{t:this.shape_6,p:{x:47.9513}},{t:this.shape_5,p:{x:75.025}},{t:this.shape_11,p:{x:96.875}}]},4).to({state:[{t:this.shape_11,p:{x:-37.825}},{t:this.shape_14,p:{x:-8.625}},{t:this.shape_23},{t:this.shape_5,p:{x:34.975}},{t:this.shape_7,p:{x:53.4}}]},4).to({state:[{t:this.shape_25,p:{x:-35.125}},{t:this.shape_18,p:{x:-6.225}},{t:this.shape_8,p:{x:24.825}},{t:this.shape_24}]},4).to({state:[{t:this.shape_25,p:{x:-26.225}},{t:this.shape_8,p:{x:1.775}},{t:this.shape_26}]},4).to({state:[{t:this.shape_19,p:{x:-58.875}},{t:this.shape_14,p:{x:-29.675}},{t:this.shape_18,p:{x:2.625}},{t:this.shape_5,p:{x:30.575}},{t:this.shape_27},{t:this.shape_11,p:{x:71.325}}]},4).to({state:[{t:this.shape_28},{t:this.shape_5,p:{x:-16.475}},{t:this.shape_6,p:{x:7.8013}},{t:this.shape_19,p:{x:35.675}},{t:this.shape_11,p:{x:61.175}}]},4).to({state:[]},4).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-936.2,156.1,220.1,120);
p.frameBounds = [rect, rect=new cjs.Rectangle(-936.2,151.1,1046.4,125), rect, rect, rect, rect=new cjs.Rectangle(-936.2,151.1,1027.6,125), rect, rect, rect, rect=new cjs.Rectangle(-936.2,151.1,1000.1,125), rect, rect, rect, rect=new cjs.Rectangle(-936.2,151.1,1018,125), rect, rect, rect, rect=new cjs.Rectangle(-936.2,151.1,1048.4,125), rect, rect, rect, rect=new cjs.Rectangle(-936.2,151.1,1001.8,125), rect, rect, rect, rect=new cjs.Rectangle(-936.2,151.1,999.4,125), rect, rect, rect, rect=new cjs.Rectangle(-936.2,151.1,990.5,125), rect, rect, rect, rect=new cjs.Rectangle(-936.2,151.1,1022.9,125), rect, rect, rect, rect=new cjs.Rectangle(-936.2,151.1,1012.7,125), rect, rect, rect, rect=null, rect, rect, rect, rect];


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

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF7E4D").ss(1,1,1).p("AqxjMIVjAAIAAGZI1jAAg");
	this.shape.setTransform(69,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AqxDNIAAmZIVjAAIAAGZg");
	this.shape_1.setTransform(69,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(-1,-1,140,43)];


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
	props.labels = {pd_label字段:0,nul:1,sweater:3,Tshirt:268,"label3":499,shoes:693,trousers:892,shirt:1200,coat:1397,cap:1549,shorts:1682,dress:1907,end:2096,skirt:499};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_267 = function() {
		this.stop();
	}
	this.frame_498 = function() {
		this.stop();
	}
	this.frame_692 = function() {
		this.stop();
	}
	this.frame_891 = function() {
		stop();
	}
	this.frame_1199 = function() {
		this.stop();
	}
	this.frame_1396 = function() {
		this.stop();
	}
	this.frame_1548 = function() {
		this.stop();
	}
	this.frame_1681 = function() {
		this.stop();
	}
	this.frame_1906 = function() {
		this.stop();
	}
	this.frame_2095 = function() {
		this.stop();
	}
	this.frame_2098 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(265).call(this.frame_267).wait(231).call(this.frame_498).wait(194).call(this.frame_692).wait(199).call(this.frame_891).wait(308).call(this.frame_1199).wait(197).call(this.frame_1396).wait(152).call(this.frame_1548).wait(133).call(this.frame_1681).wait(225).call(this.frame_1906).wait(189).call(this.frame_2095).wait(3).call(this.frame_2098).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(2096));

	// 单词
	this.instance = new lib.元件66("synched",0);
	this.instance.setTransform(6.75,181.45,1,1,0,0,0,103.5,40.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgFQAPgEAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_5.setTransform(98.475,188.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgeAdgNQAegNAqABQAuABAaAOQAZAPAJAbQAKAagBAkIgBAUIgBAQIitALQABAdASAOQASANAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAIgcAFQgcAGgjAAIgDAAQgnAAgcgMgAglhGQgNAPgBAgIBtgIQABgPgEgMQgEgMgLgHQgKgHgVAAQggAAgOAOg");
	this.shape_6.setTransform(71.4013,188.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIChQgUgIgJgTQgJgUABgjIAAh+IgkAAIAAg5IAkAAIAAhAIBHAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgRgIg");
	this.shape_7.setTransform(46.65,185.5515);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeCLQglAAgZgTQgagTgNgmQgEgOgDgQQgCgPAAgRIAAgKQAAgkAPgdQAPgcAegWQAMgHANgDQANgEAOAAIANAAQAYAAARAIQARAIAJAQIABABIAAACIABAAIABgIQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAIBFAAIACABIAAABIgDBZQAAA5AEAlQAEAlAHARIAAADIACAHIgCABIhFAAIgEgKIgKgbIgBAAQgJAUgQAKQgRAKgXAAgAgthFQgRAQgKAfIgCAQIgBAJQAAAeAKATQALAUAVAIIAOAEQAIACAIAAQASAAAOgHQANgHAHgOQAFgKACgPQADgQAAgTQAAgcgHgTQgHgSgOgJQgFgEgJgCQgJgDgKAAIgBAAQgZAAgRAQg");
	this.shape_8.setTransform(20.475,188.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag/CAQgdgNgQgeQgQgfAAg2QAAg1AQgfQAQgeAdgNQAegNAqABQAuABAaAOQAZAPAJAbQAKAagBAkIgBAUIgBAQIitALQABAdASAOQASANAjAAQARAAARgDQARgDAPgEQAOgEAJgFIAAA5QgMAIgcAFQgcAGgjAAIgDAAQgnAAgcgMgAglhGQgNAPgBAgIBtgIQABgPgEgMQgEgMgLgHQgKgHgVAAQggAAgOAOg");
	this.shape_9.setTransform(-9.6987,188.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAuCHIgti3IgCAAIgtC3IhbAAIhJkNIBOAAIAqDCIADAAIAvjCIBRAAIAwDCIADAAIAqjCIBNAAIhKENg");
	this.shape_10.setTransform(-47.25,188.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_11.setTransform(-82.375,188.5006);

	this.instance_1 = new lib.元件67("synched",0,false);
	this.instance_1.setTransform(6.75,181.45,1,1,0,0,0,84.7,40.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QgBAXAHAIQAGAIATAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_12.setTransform(79.2,185.5515);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgjDAIAAkNIBHAAIAAENgAgYh1QgJgDgDgIQgEgIAAgRQAAgRAEgIQADgIAJgDQAJgCAPAAQAQAAAJACQAJADAEAIQACAIAAARQAAARgCAIQgEAIgJADQgJACgQAAQgPAAgJgCg");
	this.shape_13.setTransform(41.15,182.9208);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAzC+IAAilQAAgagJgNQgKgMgZABQgWAAgOAIQgPAKgGAUIAACxIhIAAIAAl7IBIAAIAACPQALgTAWgJQAVgKAeAAQAhAAAUALQATAJAJAUQAIAUAAAeIAAC4g");
	this.shape_14.setTransform(17.175,183.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhMAdIAAg5ICZAAIAAA5g");
	this.shape_15.setTransform(-36.325,186.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AglCuIAAkYIhbAAIAAhDIEBAAIAABDIhbAAIAAEYg");
	this.shape_16.setTransform(-62.075,184.75);

	this.instance_2 = new lib.元件68("synched",0);
	this.instance_2.setTransform(6.7,181.45,1,1,0,0,0,57.2,40.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAjC+IhIhzIgNAAIAABzIhIAAIAAl7IBIAAIAADQIAQAAIBFhiIBUAAIhgB9IBkCQg");
	this.shape_17.setTransform(-6.925,183.1);

	this.instance_3 = new lib.元件69("synched",0);
	this.instance_3.setTransform(6.7,181.45,1,1,0,0,0,75.1,40.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAACMQgpABgdgNQgegNgQgeQgPgfAAg2QAAg1APgfQAQgeAegNQAdgNApABQAqgBAeANQAdANAPAeQAQAfAAA1QAAA2gQAfQgPAegdANQgdAMgoAAIgDAAgAgihOQgMAJgGASQgFAUAAAfQAAAgAGAUQAFASANAIQANAHAUAAQAWAAANgHQANgIAFgSQAFgUAAggQAAgfgFgUQgGgSgMgJQgNgHgWAAQgVAAgNAHg");
	this.shape_18.setTransform(7.425,188.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgLCLQgYAAgWgDQgWgCgSgEIAAg8QAUAGAWADQAVADATAAQAWABALgGQALgGAAgQQAAgLgEgGQgEgGgLgFQgLgEgVgFQgdgHgPgJQgQgIgGgPQgGgOAAgXQAAgmAZgVQAZgVA5AAQAXAAAUACQAUADALAEIgDA3IgTgEIgYgEIgZgCQgXAAgKAGQgJAGAAANQAAAIAEAFQAEAFALAEQAJAEAVAFQAeAHAQAKQAQAJAHAPQAGAQAAAYQgBAvgcAUQgcATgyAAIgCAAg");
	this.shape_19.setTransform(-54.075,188.5006);

	this.instance_4 = new lib.元件70("synched",0);
	this.instance_4.setTransform(6.7,181.45,1,1,0,0,0,105.5,40.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhUB/QgUgKgJgUQgIgUAAgeIAAi3IBIAAIAACkQAAAaAJAMQAJANAaAAQAUAAAPgJQAOgJAGgUIAAixIBIAAIAAENIhBAAIgGghQgLATgVAJQgUAKgegBQghAAgUgKg");
	this.shape_20.setTransform(-9.125,188.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhNCKIAAkNIBIAAIAAAwQAIgWAMgMQAMgLAPgFQAPgEAQAAIAFAAIgCBBIgHAAQgRAAgPAFQgQAFgLANQgKAMgFAWIAACZg");
	this.shape_21.setTransform(-66.325,188.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIAKgBIAAA4IgRABIgSABIgDABQgfAAgSgIg");
	this.shape_22.setTransform(-87.85,185.5515);

	this.instance_5 = new lib.元件71("synched",0);
	this.instance_5.setTransform(6.75,181.45,1,1,0,0,0,58.9,40.8);

	this.instance_6 = new lib.元件72("synched",0);
	this.instance_6.setTransform(6.75,181.45,1,1,0,0,0,56.5,40.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgJChQgTgIgJgTQgJgUAAgjIAAh+IgjAAIAAg5IAjAAIAAhAIBIAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAHAIASAAIALgBIALgBIAAA4IgSABIgSABIgDABQgfAAgSgIg");
	this.shape_23.setTransform(51,185.5515);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgoCAQgegNgQgeQgQgfAAg2QAAg1AQgfQAQgeAegNQAegNApABQAUAAASADQATABAMAEIAAA9QgOgEgOgDQgPgCgRgBQgYAAgPAIQgOAGgHASQgHARAAAfQAAAfAHASQAHARAPAHQAPAHAZAAQAQAAAPgCQAPgDAPgFIAAA7QgIADgMADIgaADIgaACIgDAAQgnAAgdgMg");
	this.shape_24.setTransform(-35.125,188.6);

	this.instance_7 = new lib.元件73("synched",0);
	this.instance_7.setTransform(6.75,181.45,1,1,0,0,0,47.6,40.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AiCC8IAAlxIBJAAIAAAgQAHgPAUgLQATgLAigBQAsABAXARQAYARAIAfQAJAfAAAsQAAAngJAeQgIAggYASQgXATgsAAQgjABgTgLQgTgLgHgSIAACHgAglh6QgOAKgFATQgGATABAcQgBAZAGAUQAFASAOAKQAOAKAXAAQAZAAAMgLQAMgMAEgSQAEgTAAgXQAAgagEgSQgEgUgMgLQgNgLgYAAQgXAAgOAKg");
	this.shape_25.setTransform(35.8263,193.35);

	this.instance_8 = new lib.元件74("synched",0);
	this.instance_8.setTransform(6.75,181.45,1,1,0,0,0,80,40.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgIChQgUgIgJgTQgJgUABgjIAAh+IgkAAIAAg5IAkAAIAAhAIBHAAIAABAIA4AAIAAA5Ig4AAIAAB4QAAAXAGAIQAGAIATAAIALgBIALgBIAAA4IgRABIgSABIgEABQgfAAgRgIg");
	this.shape_26.setTransform(49,185.5515);

	this.instance_9 = new lib.元件75("synched",0);
	this.instance_9.setTransform(6.7,181.45,1,1,0,0,0,69.8,40.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},3).to({state:[{t:this.shape_11,p:{x:-82.375}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:20.475}},{t:this.shape_7},{t:this.shape_6,p:{x:71.4013}},{t:this.shape_5,p:{x:98.475}}]},264).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_11,p:{x:-12.025}},{t:this.shape_14,p:{x:17.175}},{t:this.shape_13,p:{x:41.15}},{t:this.shape_5,p:{x:60.775}},{t:this.shape_12,p:{x:79.2}}]},230).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_11,p:{x:-36.125}},{t:this.shape_17},{t:this.shape_13,p:{x:13.7}},{t:this.shape_5,p:{x:33.325}},{t:this.shape_12,p:{x:51.75}}]},193).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.shape_19,p:{x:-54.075}},{t:this.shape_14,p:{x:-24.875}},{t:this.shape_18,p:{x:7.425}},{t:this.shape_6,p:{x:38.6013}},{t:this.shape_11,p:{x:66.475}}]},198).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_18,p:{x:-41.275}},{t:this.shape_20},{t:this.shape_19,p:{x:20.025}},{t:this.shape_6,p:{x:47.9513}},{t:this.shape_5,p:{x:75.025}},{t:this.shape_11,p:{x:96.875}}]},307).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},197).to({state:[{t:this.shape_24,p:{x:-35.125}},{t:this.shape_18,p:{x:-6.225}},{t:this.shape_8,p:{x:24.825}},{t:this.shape_23}]},151).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.shape_24,p:{x:-26.225}},{t:this.shape_8,p:{x:1.775}},{t:this.shape_25}]},132).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.shape_19,p:{x:-58.875}},{t:this.shape_14,p:{x:-29.675}},{t:this.shape_18,p:{x:2.625}},{t:this.shape_5,p:{x:30.575}},{t:this.shape_26},{t:this.shape_11,p:{x:71.325}}]},224).to({state:[{t:this.instance_9}]},1).to({state:[]},189).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-936.2,370,220.1,120);
p.frameBounds = [rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1046.4,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1046.5,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1046.4,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1027.6,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1027.7,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1027.6,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1000.1,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1000.2,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1000.1,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1018,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1018.1,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1018,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1048.4,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1048.5,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1048.4,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1001.8,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1001.9,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1001.8,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,999.4,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,999.5,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,999.4,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,990.5,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,990.6,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,990.5,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1022.9,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1023,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1022.9,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1012.7,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1012.8,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,140.7,1012.7,349.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-936.2,370,220.1,120), rect, rect];


(lib.ClipGroup_79 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(124.5,82,1,1,0,0,0,124.5,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_79, rect = new cjs.Rectangle(0,0,248.9,164), [rect]);


(lib.ClipGroup_78 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(89.2,114.8,1,1,0,0,0,89.2,114.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_78, rect = new cjs.Rectangle(0,0,178.4,229.6), [rect]);


(lib.ClipGroup_77 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_13();
	this.instance.setTransform(124.7,49.3,1,1,0,0,0,124.7,49.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_77, rect = new cjs.Rectangle(0,0,249.3,98.6), [rect]);


(lib.ClipGroup_76 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("At5CkIAAlHIbzAAIAAFHg");
	mask.setTransform(89.025,16.375);

	// 图层_3
	this.instance = new lib.ClipGroup_14();
	this.instance.setTransform(89.2,16.6,1,1,0,0,0,89.2,16.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_76, rect = new cjs.Rectangle(0,0,178.1,32.8), [rect]);


(lib.元件65 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_37_0();
	this.instance.setTransform(21.15,276.4,2.2706,2.2706,0,0,0,0.5,2);

	this.instance_1 = new lib.ClipGroup_38_0();
	this.instance_1.setTransform(59.75,273.6,2.2706,2.2706,0,0,0,0.2,0.6);

	this.instance_2 = new lib.ClipGroup_53();
	this.instance_2.setTransform(215.75,114.65,2.2706,2.2706,0,0,0,20.6,5.5);

	this.instance_3 = new lib.ClipGroup_55();
	this.instance_3.setTransform(215.75,114.65,2.2706,2.2706,0,0,0,20.6,5.5);

	this.instance_4 = new lib.ClipGroup_76();
	this.instance_4.setTransform(767.4,557.9,2.2706,2.2706,0,0,0,89.2,16.7);

	this.instance_5 = new lib.ClipGroup_77();
	this.instance_5.setTransform(282.9,483.65,2.2706,2.2706,0,0,0,124.6,49.3);

	this.instance_6 = new lib.ClipGroup_78();
	this.instance_6.setTransform(767.4,260.45,2.2706,2.2706,0,0,0,89.2,114.7);

	this.instance_7 = new lib.ClipGroup_79();
	this.instance_7.setTransform(283.35,186.65,2.2706,2.2706,0,0,0,124.4,82);

	this.instance_8 = new lib.scene01_bg();
	this.instance_8.setTransform(434.65,294.45);

	this.instance_9 = new lib.scene01_bg();
	this.instance_9.setTransform(434.65,294.45);

	this.instance_10 = new lib.scene01_bg();
	this.instance_10.setTransform(434.65,294.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,970,595.6);
p.frameBounds = [rect];


(lib.元件22复制4_只留箭头 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"固定label+点读配置不需要label":0,"label0":1,"label1":5,"label2":48,"label3":106,"label4":171,"label5":230,"label6":286,"label7":482,"label8":538,"label9":590,可以点击:670,"sweater":5,"Tshirt":48,"skirt":106,"shoes":171,"trousers":230,"shirt":352,"coat":413,"cap":482,"shorts":538,"dress":590};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		//this._cliMc._cliWordMc.visible=false;
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
	this.frame_170 = function() {
		this.stop();
	}
	this.frame_229 = function() {
		this.stop();
	}
	this.frame_285 = function() {
		this.stop();
	}
	this.frame_351 = function() {
		this.stop();
	}
	this.frame_412 = function() {
		this.stop();
	}
	this.frame_481 = function() {
		this.stop();
	}
	this.frame_537 = function() {
		this.stop();
	}
	this.frame_589 = function() {
		this.stop();
	}
	this.frame_670 = function() {
		this.stop();
		//this._cliMc.visible=true;
		
		//this._cliMc._cliWordMc.visible=true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(43).call(this.frame_47).wait(58).call(this.frame_105).wait(65).call(this.frame_170).wait(59).call(this.frame_229).wait(56).call(this.frame_285).wait(66).call(this.frame_351).wait(61).call(this.frame_412).wait(69).call(this.frame_481).wait(56).call(this.frame_537).wait(52).call(this.frame_589).wait(81).call(this.frame_670).wait(121));

	// _climc
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiJCJQA1gQAigZQAkgaANguIhfAAQgPAAgNAEIgLgLICHAAQAEgnAAgvIABhIIAgAQIgNAJIgCBDIgEBCIBHAAIAVgUIAbAbIh5AAQgCAKgFAMQA+AaAcANQAbAOAAASQgBARgGAAQgFAAgLgNQgVgahMgrQgTAogmATQglAUgvALgAhGgNQgLgTgegZIADgEQAuARAFAIQAHAIgBAHQAAAGgCAHQgDAHgDAAQgFAAgGgMgAgphJQgJgRgigZIADgEQAqANAJAIQAIAIAAAJQAAADgCAIQgDAIgEAAQgEAAgGgLg");
	this.shape.setTransform(-1043.8,-95.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAsB2IAAgFQAfAFAFgBQADgBAAgJQAAhlgBgSIAcAOIgKAJIAABiQAAALgDAIQgEAIgQAHQgFgRgcgIgAg8B5IAAgEQAbACAFAAQADgBAAgGIAAgcIg7AAIAAAyIgQAHIABhaIgBg7IATALIA3AAIAMgLIAPAOIgJAIIAABkQAAAJgEAGQgCAGgQAIQgFgQgZgGgAhUBNIA7AAIAAgeIg7AAgAhUAnIA7AAIAAgcIg7AAgAAdAqIgBgrIAaANIgJAIQAABCABAJIgSAJIABg+gAiMgeICfAAIAKgXIAGgWIAXAQIgLADQgNAPgHALIBHAAIATgRIAYAYIjwAAQgQABgNADgAgxgpQgEgLgNgRIADgCQAUAKAHAFQAFAHgCAGQgDAGgCADIgFABQgDAAgDgIgAiCgzQAOgQAIgNQAIgNAJgRIAMgeIAaAQIgLADIgNAQIAuAAIARgPIAUAXIg6AAQAUAJAEAFQADAGgBADQABAGgFADQgDAFgDgBQgDgBgDgIQgCgIgFgIQgEgHgGgEIgVAAQgFAEgJANQgJALgXAVgAgKg8QAQgbAIgSQAIgSAFgSIAYAOIgLAGIgJAOIA6AAIASgQIAVAXIhJAAQAXALADAFQACAFAAAEQAAAFgCAFQgDAGgEgBQgEAAgCgJQgCgIgFgIQgEgGgIgJIgVAAQgPAWgUAUg");
	this.shape_1.setTransform(-1074.75,-95.2);

	this._cliMc = new lib.clickname复制2("synched",0);
	this._cliMc.name = "_cliMc";
	this._cliMc.setTransform(-20,12.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this._cliMc},{t:this.shape_1},{t:this.shape}]}).to({state:[]},738).wait(53));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1168.2,-294.4,1703.6,595.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-434.6,-294.4,970,595.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.元件22复制2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"固定label+点读配置不需要label":0,"label0":1,"label1":5,"label2":48,"label3":106,"label4":171,"label5":230,"label6":286,"label7":482,"label8":538,"label9":590,"end":647,"sweater":5,"Tshirt":48,"skirt":106,"shoes":171,"trousers":230,"shirt":352,"coat":413,"cap":482,"shorts":538,"dress":590,"可以点击":646,"?":0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		/*this._cliMc._cliWordMc.visible=false;
		console.log("#############");
		console.log(parent.currentFrame);
		if(parent.currentFrame!==1){
			this._cliMc._cliWordMc.visible=false;
		}*/
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
	this.frame_170 = function() {
		this.stop();
	}
	this.frame_229 = function() {
		this.stop();
	}
	this.frame_285 = function() {
		this.stop();
	}
	this.frame_351 = function() {
		this.stop();
	}
	this.frame_412 = function() {
		this.stop();
	}
	this.frame_481 = function() {
		this.stop();
	}
	this.frame_537 = function() {
		this.stop();
	}
	this.frame_589 = function() {
		this.stop();
	}
	this.frame_646 = function() {
		this.stop();
		//this._cliMc.visible=true;
		
		//this._cliMc._cliWordMc.visible=true;
	}
	this.frame_662 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(43).call(this.frame_47).wait(58).call(this.frame_105).wait(65).call(this.frame_170).wait(59).call(this.frame_229).wait(56).call(this.frame_285).wait(66).call(this.frame_351).wait(61).call(this.frame_412).wait(69).call(this.frame_481).wait(56).call(this.frame_537).wait(52).call(this.frame_589).wait(57).call(this.frame_646).wait(16).call(this.frame_662).wait(122));

	// 图层_1
	this.instance = new lib.元件61();
	this.instance.setTransform(235,18.75,1,1,0,0,0,66,51.6);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(286).to({_off:false},0).to({_off:true},23).wait(11).to({_off:false},0).to({_off:true},22).wait(442));

	// 图层_2
	this.instance_1 = new lib.元件55();
	this.instance_1.setTransform(-310.6,6.85,1,1,0,0,0,67.2,47.8);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.instance_2 = new lib.元件56();
	this.instance_2.setTransform(-217.5,-64.4,1,1,0,0,0,49.5,44.2);
	this.instance_2.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.instance_3 = new lib.元件57();
	this.instance_3.setTransform(-84.75,-57.2,1,1,0,0,0,51.9,42.4);
	this.instance_3.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.instance_4 = new lib.元件58();
	this.instance_4.setTransform(-313.95,176.5,1,1,0,0,0,49,19.1);
	this.instance_4.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.instance_5 = new lib.元件59();
	this.instance_5.setTransform(-4.25,-10.3,1,1,0,0,0,46.6,90.3);
	this.instance_5.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.instance_6 = new lib.元件60();
	this.instance_6.setTransform(202.95,-54.55,1,1,0,0,0,40.8,53.5);
	this.instance_6.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.instance_7 = new lib.元件61();
	this.instance_7.setTransform(235,18.75,1,1,0,0,0,66,51.6);
	this.instance_7.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.instance_8 = new lib.元件62();
	this.instance_8.setTransform(309.05,24.65,1,1,0,0,0,29.8,23);
	this.instance_8.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.instance_9 = new lib.元件63();
	this.instance_9.setTransform(139.65,-59.95,1,1,0,0,0,35.8,38.6);
	this.instance_9.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.instance_10 = new lib.元件64();
	this.instance_10.setTransform(69.75,-19.4,1,1,0,0,0,45.9,85.2);
	this.instance_10.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},5).to({state:[]},17).to({state:[{t:this.instance_1}]},6).to({state:[]},19).to({state:[{t:this.instance_2}]},1).to({state:[]},21).to({state:[{t:this.instance_2}]},12).to({state:[]},24).to({state:[{t:this.instance_3}]},1).to({state:[]},24).to({state:[{t:this.instance_3}]},13).to({state:[]},27).to({state:[{t:this.instance_4}]},1).to({state:[]},24).to({state:[{t:this.instance_4}]},8).to({state:[]},26).to({state:[{t:this.instance_5}]},1).to({state:[]},22).to({state:[{t:this.instance_5}]},11).to({state:[]},22).to({state:[{t:this.instance_6}]},1).to({state:[]},23).to({state:[{t:this.instance_6}]},11).to({state:[]},22).to({state:[{t:this.instance_6}]},10).to({state:[]},23).to({state:[{t:this.instance_6}]},10).to({state:[]},21).to({state:[{t:this.instance_7}]},7).to({state:[]},25).to({state:[{t:this.instance_7}]},14).to({state:[]},29).to({state:[{t:this.instance_8}]},1).to({state:[]},24).to({state:[{t:this.instance_8}]},8).to({state:[]},23).to({state:[{t:this.instance_9}]},1).to({state:[]},22).to({state:[{t:this.instance_9}]},7).to({state:[]},22).to({state:[{t:this.instance_10}]},1).to({state:[]},20).to({state:[{t:this.instance_10}]},12).to({state:[]},24).to({state:[]},68).wait(70));

	// 图层_3
	this.instance_11 = new lib.元件65("synched",0);
	this.instance_11.setTransform(35.25,282.55,1,1,0,0,0,469.9,577);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(784));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-949.9,-294.4,1485.2,595.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-434.6,-294.4,970,595.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.s_sweater = new lib.元件18();
	this.s_sweater.name = "s_sweater";
	this.s_sweater.setTransform(51.25,24.6,1,1,0,0,0,69,20.5);
	new cjs.ButtonHelper(this.s_sweater, 0, 1, 2, false, new lib.元件18(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AFSBhQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQARgIAYAAQAVAAAOAHQAMAGAHAKQAIAKACANQADAMgBALIAAAJIgBALIhxAHQAAASAEAMQAFAMAMAGQAMAFAVAAQAOAAAOgDQAOgDAKgFIAAAZQgFADgJACIgTADQgLACgNAAIgCAAQgYAAgQgIgAFegnQgLAGgEANQgEAMAAAQIBYgGQAAgMgCgLQgDgLgIgHQgJgHgSAAQgUAAgJAHgAiGBhQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQARgIAYAAQAVAAANAHQAOAGAGAKQAHAKAEANQACAMAAALIAAAJIgCALIhxAHQgBASAGAMQAFAMALAGQAMAFAUAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgLAAIgDAAQgYAAgQgIgAh7gnQgKAGgEANQgEAMAAAQIBZgGQgBgMgCgLQgDgLgJgHQgIgHgSAAQgUAAgKAHgABFBpQgZAAgQgNQgRgNgIgaIgCgOIgBgMIAAgJQAAgZAKgUQALgTAVgNQAJgEAIgCQAIgCAHAAIADAAQAdAAATAeIAAgIIABgBIAZAAIABABIAAAAIAABYIABAfQABAPADANIgBABIgaAAQAAAAgCgHIgCgUIgGAJIgHAIQgHAGgJADQgKADgLAAgAAxgiQgNAJgHATIgDALQgBAGAAAHIAAAHQgBAQAHANQAGAOANAKQAFACAGABQAFACAGAAIAGAAQAwAAAAg7IAAgKQAAgYgJgOQgIgOgRgFIgGAAIgEgBIAAAAQgTAAgOAKgADmBkQgLgFgFgLQgEgMgBgVIAAhdIgZAAIAAgXIAZAAIAAgnIAbAAIAAAnIAqAAIAAAXIgqAAIAABbQAAANACAHQABAHAGADQAFACAKAAIAKAAIAJgCIAAAXIgJABIgKABQgTAAgLgEgAogBnIgRgCIgNgDIAAgXIAOAEIARACIARABQATAAAKgGQAKgFAAgPQAAgJgDgGQgCgGgJgDQgIgEgQgDQgSgEgKgGQgLgGgDgJQgFgJAAgNQAAgVAQgMQAPgMAegBQAMAAAMACQAMABAGADIgCAWIgSgEQgLgCgLAAQgRAAgKAFQgJAFAAAOQABAJACAEQADAFAHADIAUAFQASAEAMAGQAMAGAFAKQAFAJAAAQQAAAZgQAMQgRAMgfAAIgSgBgAHrBmIAAinIAbAAIAAAfQAGgOAIgHQAJgIAKgCQALgDAJAAIAEAAIgBAYIgEAAQgKAAgKADQgLADgIAIQgIAJgFAOIAABtgAkSBmIgpiJIgCAAIgqCJIghAAIgtinIAaAAIAkCMIABAAIAqiMIAgAAIAqCMIACAAIAkiMIAaAAIgvCng");
	this.shape.setTransform(48.45,25.7515);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_1.setTransform(49.4822,26.5836,1.1914,1.2547);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AFSBhQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQARgIAYAAQAVAAAOAHQAMAGAHAKQAIAKACANQADAMgBALIAAAJIgBALIhxAHQAAASAEAMQAFAMAMAGQAMAFAVAAQAOAAAOgDQAOgDAKgFIAAAZQgFADgJACIgTADQgLACgNAAIgCAAQgYAAgQgIgAFegnQgLAGgEANQgEAMAAAQIBYgGQAAgMgCgLQgDgLgIgHQgJgHgSAAQgUAAgJAHgAiGBhQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQARgIAYAAQAVAAANAHQAOAGAGAKQAHAKAEANQACAMAAALIAAAJIgCALIhxAHQgBASAGAMQAFAMALAGQAMAFAUAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgLAAIgDAAQgYAAgQgIgAh7gnQgKAGgEANQgEAMAAAQIBZgGQgBgMgCgLQgDgLgJgHQgIgHgSAAQgUAAgKAHgABFBpQgZAAgQgNQgRgNgIgaIgCgOIgBgMIAAgJQAAgZAKgUQALgTAVgNQAJgEAIgCQAIgCAHAAIADAAQAdAAATAeIAAgIIABgBIAZAAIABABIAAAAIAABYIABAfQABAPADANIgBABIgaAAQAAAAgCgHIgCgUIgGAJIgHAIQgHAGgJADQgKADgLAAgAAxgiQgNAJgHATIgDALQgBAGAAAHIAAAHQgBAQAHANQAGAOANAKQAFACAGABQAFACAGAAIAGAAQAwAAAAg7IAAgKQAAgYgJgOQgIgOgRgFIgGAAIgEgBIAAAAQgTAAgOAKgADmBkQgLgFgFgLQgEgMgBgVIAAhdIgZAAIAAgXIAZAAIAAgnIAbAAIAAAnIAqAAIAAAXIgqAAIAABbQAAANACAHQABAHAGADQAFACAKAAIAKAAIAJgCIAAAXIgJABIgKABQgTAAgLgEgAogBnIgRgCIgNgDIAAgXIAOAEIARACIARABQATAAAKgGQAKgFAAgPQAAgJgDgGQgCgGgJgDQgIgEgQgDQgSgEgKgGQgLgGgDgJQgFgJAAgNQAAgVAQgMQAPgMAegBQAMAAAMACQAMABAGADIgCAWIgSgEQgLgCgLAAQgRAAgKAFQgJAFAAAOQABAJACAEQADAFAHADIAUAFQASAEAMAGQAMAGAFAKQAFAJAAAQQAAAZgQAMQgRAMgfAAIgSgBgAHrBmIAAinIAbAAIAAAfQAGgOAIgHQAJgIAKgCQALgDAJAAIAEAAIgBAYIgEAAQgKAAgKADQgLADgIAIQgIAJgFAOIAABtgAkSBmIgpiJIgCAAIgqCJIghAAIgtinIAaAAIAkCMIABAAIAqiMIAgAAIAqCMIACAAIAkiMIAaAAIgvCng");
	this.shape_2.setTransform(48.45,25.7515);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.s_sweater}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.s_sweater}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-18.7,2,140,49.3);
p.frameBounds = [rect, rect];


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.s_shoes = new lib.元件18();
	this.s_shoes.name = "s_shoes";
	this.s_shoes.setTransform(70.7,28.95,0.7898,1,0,0,0,69.2,20.5);
	new cjs.ButtonHelper(this.s_shoes, 0, 1, 2, false, new lib.元件18(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIARADIARAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgPgEQgSgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgLgCgLAAQgQAAgKAFQgJAGABAOQAAAIACAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgRAMgeAAIgSgBg");
	this.shape.setTransform(107.25,30.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_1.setTransform(90.8792,30.5265);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAABXQgYAAgRgIQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQARgIAYAAQAZAAARAIQARAIAJATQAJATAAAgQAAAhgJATQgJATgRAIQgQAIgXAAIgDAAgAgcg6QgLAGgFAPQgEAOAAAXQAAAYAFAOQAEAPALAFQALAGARAAQATAAALgGQAKgFAFgPQAEgOAAgYQAAgXgFgOQgEgPgLgGQgLgGgSABIgCAAQgRAAgJAFg");
	this.shape_2.setTransform(72.325,30.5265);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAqB2IAAhqQAAgMgDgJQgCgJgHgFQgHgFgOAAQgJAAgKACQgKADgIAHQgIAHgEAOIAABxIgbAAIAAjrIAbAAIAABcQAFgKAIgGQAJgGALgDQAJgCAKAAQAWAAAMAHQAMAHAGAMQAFANgBAPIAAB0g");
	this.shape_3.setTransform(53.2273,27.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYBVIgSgCIgNgCIAAgXIAOADIARADIARAAQATABAJgGQAKgGAAgOQAAgKgCgGQgEgFgHgEQgJgDgPgEQgSgEgKgFQgKgGgFgJQgDgJAAgOQAAgVAPgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgKgCgMAAQgRAAgIAFQgJAGAAAOQAAAIACAFQADAFAHADIASAFQAUAEAMAGQALAFAFAKQAFAKAAAQQAAAZgRALQgQAMgdAAIgSgBg");
	this.shape_4.setTransform(36.2,30.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_5.setTransform(66.2822,28.487,1.1914,1.1349);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIARADIARAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgPgEQgSgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgLgCgLAAQgQAAgKAFQgJAGABAOQAAAIACAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgRAMgeAAIgSgBg");
	this.shape_6.setTransform(107.25,30.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_7.setTransform(90.8792,30.5265);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAABXQgYAAgRgIQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQARgIAYAAQAZAAARAIQARAIAJATQAJATAAAgQAAAhgJATQgJATgRAIQgQAIgXAAIgDAAgAgcg6QgLAGgFAPQgEAOAAAXQAAAYAFAOQAEAPALAFQALAGARAAQATAAALgGQAKgFAFgPQAEgOAAgYQAAgXgFgOQgEgPgLgGQgLgGgSABIgCAAQgRAAgJAFg");
	this.shape_8.setTransform(72.325,30.5265);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAqB2IAAhqQAAgMgDgJQgCgJgHgFQgHgFgOAAQgJAAgKACQgKADgIAHQgIAHgEAOIAABxIgbAAIAAjrIAbAAIAABcQAFgKAIgGQAJgGALgDQAJgCAKAAQAWAAAMAHQAMAHAGAMQAFANgBAPIAAB0g");
	this.shape_9.setTransform(53.2273,27.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgYBVIgSgCIgNgCIAAgXIAOADIARADIARAAQATABAJgGQAKgGAAgOQAAgKgCgGQgEgFgHgEQgJgDgPgEQgSgEgKgFQgKgGgFgJQgDgJAAgOQAAgVAPgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgKgCgMAAQgRAAgIAFQgJAGAAAOQAAAIACAFQADAFAHADIASAFQAUAEAMAGQALAFAFAKQAFAKAAAQQAAAZgRALQgQAMgdAAIgSgBg");
	this.shape_10.setTransform(36.2,30.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.s_shoes}]}).to({state:[{t:this.shape_5},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,132.6,52.1);
p.frameBounds = [rect, rect];


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.s_trousers = new lib.元件18();
	this.s_trousers.name = "s_trousers";
	this.s_trousers.setTransform(66.15,47,0.942,1,0,0,0,69.2,20.5);
	new cjs.ButtonHelper(this.s_trousers, 0, 1, 2, false, new lib.元件18(), 3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYBVIgSgCIgNgCIAAgXIAOADIASADIAQAAQATABAJgGQAKgGAAgOQAAgKgCgGQgEgFgHgEQgJgDgPgEQgSgEgKgFQgKgGgFgJQgDgJAAgOQAAgVAPgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgKgCgMAAQgRAAgIAFQgJAGAAAOQAAAIACAFQADAFAHADIASAFQAUAEAMAGQALAFAFAKQAFAKAAAQQAAAZgRALQgQAMgdAAIgSgBg");
	this.shape_3.setTransform(119.45,48.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_4.setTransform(107.225,48.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_5.setTransform(91.3292,48.9765);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIASADIAQAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgOgEQgTgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAIAYABQAMACAGACIgCAXIgSgFQgLgCgLAAQgRAAgJAFQgJAGAAAOQABAIACAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgRAMgeAAIgSgBg");
	this.shape_6.setTransform(74.95,48.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgtBOQgMgGgFgNQgEgMAAgQIAAhzIAaAAIAABpQAAANACAJQADAJAHAFQAHAFANAAQAKAAAKgCQAJgDAIgHQAHgHAFgOIAAhxIAbAAIAACmIgXAAIgEgYQgFALgJAGQgIAGgKACQgJACgLAAQgVAAgNgHg");
	this.shape_7.setTransform(57.95,49.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAABXQgYAAgRgIQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQARgIAYAAQAZAAARAIQARAIAJATQAJATAAAgQAAAhgJATQgJATgRAIQgQAIgXAAIgDAAgAgcg6QgLAGgFAPQgEAOAAAXQAAAYAFAOQAEAPALAFQALAGARAAQATAAALgGQAKgFAFgPQAEgOAAgYQAAgXgFgOQgEgPgLgGQgLgGgSABIgCAAQgRAAgJAFg");
	this.shape_8.setTransform(38.925,48.9765);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_9.setTransform(24.575,48.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAABkQgLgEgGgMQgEgLAAgVIAAheIgZAAIAAgWIAZAAIAAgoIAaAAIAAAoIApAAIAAAWIgpAAIAABcQAAANACAHQABAHAGADQAFACAJAAIAKAAIAJgCIAAAXIgJABIgKAAQgSAAgKgEg");
	this.shape_10.setTransform(12.3,47.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_11.setTransform(66.2822,46.937,1.1914,1.1349);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgYBVIgSgCIgNgCIAAgXIAOADIASADIAQAAQATABAJgGQAKgGAAgOQAAgKgCgGQgEgFgHgEQgJgDgPgEQgSgEgKgFQgKgGgFgJQgDgJAAgOQAAgVAPgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgKgCgMAAQgRAAgIAFQgJAGAAAOQAAAIACAFQADAFAHADIASAFQAUAEAMAGQALAFAFAKQAFAKAAAQQAAAZgRALQgQAMgdAAIgSgBg");
	this.shape_12.setTransform(119.45,48.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_13.setTransform(107.225,48.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_14.setTransform(91.3292,48.9765);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIASADIAQAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgOgEQgTgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAIAYABQAMACAGACIgCAXIgSgFQgLgCgLAAQgRAAgJAFQgJAGAAAOQABAIACAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgRAMgeAAIgSgBg");
	this.shape_15.setTransform(74.95,48.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgtBOQgMgGgFgNQgEgMAAgQIAAhzIAaAAIAABpQAAANACAJQADAJAHAFQAHAFANAAQAKAAAKgCQAJgDAIgHQAHgHAFgOIAAhxIAbAAIAACmIgXAAIgEgYQgFALgJAGQgIAGgKACQgJACgLAAQgVAAgNgHg");
	this.shape_16.setTransform(57.95,49.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AAABXQgYAAgRgIQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQARgIAYAAQAZAAARAIQARAIAJATQAJATAAAgQAAAhgJATQgJATgRAIQgQAIgXAAIgDAAgAgcg6QgLAGgFAPQgEAOAAAXQAAAYAFAOQAEAPALAFQALAGARAAQATAAALgGQAKgFAFgPQAEgOAAgYQAAgXgFgOQgEgPgLgGQgLgGgSABIgCAAQgRAAgJAFg");
	this.shape_17.setTransform(38.925,48.9765);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_18.setTransform(24.575,48.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AAABkQgLgEgGgMQgEgLAAgVIAAheIgZAAIAAgWIAZAAIAAgoIAaAAIAAAoIApAAIAAAWIgpAAIAABcQAAANACAHQABAHAGADQAFACAJAAIAKAAIAJgCIAAAXIgJABIgKAAQgSAAgKgEg");
	this.shape_19.setTransform(12.3,47.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.s_trousers}]}).to({state:[{t:this.shape_11},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,18.5,132.6,52.1);
p.frameBounds = [rect, rect];


(lib.元件9_1 = function(mode,startPosition,loop,reversed) {
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
	this.s_shorts = new lib.元件18();
	this.s_shorts.name = "s_shorts";
	this.s_shorts.setTransform(61.65,28,0.7898,1,0,0,0,69.2,20.5);
	new cjs.ButtonHelper(this.s_shorts, 0, 1, 2, false, new lib.元件18(), 3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYBVIgSgCIgNgCIAAgXIAOADIASADIAQAAQATABAJgGQAKgGAAgOQAAgKgCgGQgEgFgIgEQgIgDgOgEQgTgEgKgFQgLgGgEgJQgDgJAAgOQAAgVAPgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgLgCgLAAQgRAAgJAFQgIAGgBAOQAAAIADAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgQAMgeAAIgSgBg");
	this.shape_5.setTransform(97.65,30.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAABlQgMgFgEgMQgFgLAAgVIAAheIgZAAIAAgWIAZAAIAAgoIAZAAIAAAoIAqAAIAAAWIgqAAIAABcQAAANADAHQABAHAFADQAGACAJAAIAKAAIAJgCIAAAXIgJABIgKAAQgSAAgKgDg");
	this.shape_6.setTransform(84.9,28.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_7.setTransform(74.975,30.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAABXQgYAAgRgIQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQARgIAYAAQAZAAARAIQARAIAJATQAJATAAAgQAAAhgJATQgJATgRAIQgQAIgXAAIgDAAgAgcg6QgLAGgFAPQgEAOAAAXQAAAYAFAOQAEAPALAFQALAGARAAQATAAALgGQAKgFAFgPQAEgOAAgYQAAgXgFgOQgEgPgLgGQgLgGgSABIgCAAQgRAAgJAFg");
	this.shape_8.setTransform(58.425,30.5265);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAqB2IAAhqQAAgMgDgJQgCgJgHgFQgHgFgOAAQgJAAgKACQgKADgIAHQgIAHgEAOIAABxIgbAAIAAjrIAbAAIAABcQAFgKAIgGQAJgGALgDQAJgCAKAAQAWAAAMAHQAMAHAGAMQAFANgBAPIAAB0g");
	this.shape_9.setTransform(39.3273,27.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIASADIAQAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgOgEQgTgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAIAYABQAMACAGACIgCAXIgSgFQgLgCgLAAQgRAAgJAFQgJAGAAAOQABAIACAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgRAMgeAAIgSgBg");
	this.shape_10.setTransform(22.3,30.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_11.setTransform(61.6218,28.487,1.1073,1.1349);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgYBVIgSgCIgNgCIAAgXIAOADIASADIAQAAQATABAJgGQAKgGAAgOQAAgKgCgGQgEgFgIgEQgIgDgOgEQgTgEgKgFQgLgGgEgJQgDgJAAgOQAAgVAPgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgLgCgLAAQgRAAgJAFQgIAGgBAOQAAAIADAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgQAMgeAAIgSgBg");
	this.shape_12.setTransform(97.65,30.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAABlQgMgFgEgMQgFgLAAgVIAAheIgZAAIAAgWIAZAAIAAgoIAZAAIAAAoIAqAAIAAAWIgqAAIAABcQAAANADAHQABAHAFADQAGACAJAAIAKAAIAJgCIAAAXIgJABIgKAAQgSAAgKgDg");
	this.shape_13.setTransform(84.9,28.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_14.setTransform(74.975,30.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AAABXQgYAAgRgIQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQARgIAYAAQAZAAARAIQARAIAJATQAJATAAAgQAAAhgJATQgJATgRAIQgQAIgXAAIgDAAgAgcg6QgLAGgFAPQgEAOAAAXQAAAYAFAOQAEAPALAFQALAGARAAQATAAALgGQAKgFAFgPQAEgOAAgYQAAgXgFgOQgEgPgLgGQgLgGgSABIgCAAQgRAAgJAFg");
	this.shape_15.setTransform(58.425,30.5265);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AAqB2IAAhqQAAgMgDgJQgCgJgHgFQgHgFgOAAQgJAAgKACQgKADgIAHQgIAHgEAOIAABxIgbAAIAAjrIAbAAIAABcQAFgKAIgGQAJgGALgDQAJgCAKAAQAWAAAMAHQAMAHAGAMQAFANgBAPIAAB0g");
	this.shape_16.setTransform(39.3273,27.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIASADIAQAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgOgEQgTgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAIAYABQAMACAGACIgCAXIgSgFQgLgCgLAAQgRAAgJAFQgJAGAAAOQABAIACAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgRAMgeAAIgSgBg");
	this.shape_17.setTransform(22.3,30.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.s_shorts}]}).to({state:[{t:this.shape_11},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,123.3,52.1);
p.frameBounds = [rect, rect];


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.s_cap = new lib.元件18();
	this.s_cap.name = "s_cap";
	this.s_cap.setTransform(51.05,30,0.7029,1,0,0,0,69.3,20.5);
	new cjs.ButtonHelper(this.s_cap, 0, 1, 2, false, new lib.元件18(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhKB0IAAjkIAbAAIAAAeQAFgPAMgJQANgJAXAAQAcAAAPALQAPALAGATQAFAUAAAaQAAAXgFATQgGATgPAMQgPAMgcAAQgXAAgNgJQgNgIgEgPIAABbgAgchVQgLAIgFAOQgFAOAAAVQAAATAFANQAFAPALAIQALAIATAAQAUgBAKgJQAJgJADgOQADgOAAgQQAAgSgDgPQgDgOgKgJQgJgJgUAAQgTAAgLAIg");
	this.shape.setTransform(65.275,33.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJBXQgYAAgRgOQgRgMgHgaIgDgOIgBgMIAAgJQAAgZALgUQALgTAUgOQAJgDAIgCQAJgDAHAAIACAAQAcAAATAfIAAgIIAAAAIACgBIAYAAIABABIAAAAIAABYIACAfQABAPADANIgBAAIgaAAQgBABgBgHIgDgUIgFAIIgHAIQgIAHgJACQgJADgKABgAgcg1QgNAKgHASIgEANQgBAGAAAGIAAAHQAAAQAGANQAHANAMALQAFACAGABQAFACAHgBIAFAAQAvAAAAg6IAAgKQAAgYgIgOQgJgPgQgFIgGAAIgEAAIgBAAQgRAAgOAJg");
	this.shape_1.setTransform(44.8,30.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQASgIAYAAQAOAAALACQALACAHADIAAAYQgJgEgLgCQgKgCgNAAQgRAAgLAGQgLAGgFAOQgEAOAAAXQgBAZAFANQAFAOALAGQALAFARAAQAMAAALgBQAMgCAJgEIAAAZIgMADIgQACIgQABIgDAAQgWAAgRgIg");
	this.shape_2.setTransform(28.525,30.5265);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_3.setTransform(50.2805,29.737,0.9039,1.1349);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhKB0IAAjkIAbAAIAAAeQAFgPAMgJQANgJAXAAQAcAAAPALQAPALAGATQAFAUAAAaQAAAXgFATQgGATgPAMQgPAMgcAAQgXAAgNgJQgNgIgEgPIAABbgAgchVQgLAIgFAOQgFAOAAAVQAAATAFANQAFAPALAIQALAIATAAQAUgBAKgJQAJgJADgOQADgOAAgQQAAgSgDgPQgDgOgKgJQgJgJgUAAQgTAAgLAIg");
	this.shape_4.setTransform(65.275,33.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgJBXQgYAAgRgOQgRgMgHgaIgDgOIgBgMIAAgJQAAgZALgUQALgTAUgOQAJgDAIgCQAJgDAHAAIACAAQAcAAATAfIAAgIIAAAAIACgBIAYAAIABABIAAAAIAABYIACAfQABAPADANIgBAAIgaAAQgBABgBgHIgDgUIgFAIIgHAIQgIAHgJACQgJADgKABgAgcg1QgNAKgHASIgEANQgBAGAAAGIAAAHQAAAQAGANQAHANAMALQAFACAGABQAFACAHgBIAFAAQAvAAAAg6IAAgKQAAgYgIgOQgJgPgQgFIgGAAIgEAAIgBAAQgRAAgOAJg");
	this.shape_5.setTransform(44.8,30.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgZBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQASgIAYAAQAOAAALACQALACAHADIAAAYQgJgEgLgCQgKgCgNAAQgRAAgLAGQgLAGgFAOQgEAOAAAXQgBAZAFANQAFAOALAGQALAFARAAQAMAAALgBQAMgCAJgEIAAAZIgMADIgQACIgQABIgDAAQgWAAgRgIg");
	this.shape_6.setTransform(28.525,30.5265);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.s_cap}]}).to({state:[{t:this.shape_3},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,100.6,52.1);
p.frameBounds = [rect, rect];


(lib.元件6_1 = function(mode,startPosition,loop,reversed) {
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
	this.s_coat = new lib.元件18();
	this.s_coat.name = "s_coat";
	this.s_coat.setTransform(54.7,29,0.7898,1,0,0,0,69.2,20.5);
	new cjs.ButtonHelper(this.s_coat, 0, 1, 2, false, new lib.元件18(), 3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAABlQgLgFgGgMQgEgLAAgVIAAheIgZAAIAAgWIAZAAIAAgoIAaAAIAAAoIApAAIAAAWIgpAAIAABcQAAANACAHQABAHAGADQAFACAJAAIAKAAIAJgCIAAAXIgJABIgKAAQgSAAgKgDg");
	this.shape_8.setTransform(78.9,28.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJBXQgYAAgRgOQgRgMgHgaIgDgOIgBgMIAAgJQAAgZALgUQALgTAUgOQAJgDAIgCQAJgDAHAAIADAAQAbAAATAfIAAgIIAAAAIABgBIAZAAIABABIAAAAIAABYIABAfQACAPADANIgBAAIgaAAQgBABgBgHIgDgUIgFAIIgHAIQgIAHgJACQgJADgKABgAgcg1QgNAKgHASIgEANQgBAGAAAGIAAAHQAAAQAHANQAGANAMALQAFACAGABQAFACAGgBIAGAAQAvAAAAg6IAAgKQAAgYgJgOQgIgPgQgFIgGAAIgEAAIgBAAQgRAAgOAJg");
	this.shape_9.setTransform(63.6,30.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAABXQgYAAgRgIQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQARgIAYAAQAZAAARAIQARAIAJATQAJATAAAgQAAAhgJATQgJATgRAIQgQAIgXAAIgDAAgAgcg6QgLAGgFAPQgEAOAAAXQAAAYAFAOQAEAPALAFQALAGARAAQATAAALgGQAKgFAFgPQAEgOAAgYQAAgXgFgOQgEgPgLgGQgLgGgSABIgCAAQgRAAgJAFg");
	this.shape_10.setTransform(45.225,30.5265);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQASgIAYAAQAOAAALACQALACAHADIAAAYQgJgEgLgCQgKgCgNAAQgRAAgLAGQgLAGgFAOQgEAOAAAXQgBAZAFANQAFAOALAGQALAFARAAQAMAAALgBQAMgCAJgEIAAAZIgMADIgQACIgQABIgDAAQgWAAgRgIg");
	this.shape_11.setTransform(28.175,30.5265);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_12.setTransform(55.65,29.287,1,1.1349);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AAABlQgLgFgGgMQgEgLAAgVIAAheIgZAAIAAgWIAZAAIAAgoIAaAAIAAAoIApAAIAAAWIgpAAIAABcQAAANACAHQABAHAGADQAFACAJAAIAKAAIAJgCIAAAXIgJABIgKAAQgSAAgKgDg");
	this.shape_13.setTransform(78.9,28.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgJBXQgYAAgRgOQgRgMgHgaIgDgOIgBgMIAAgJQAAgZALgUQALgTAUgOQAJgDAIgCQAJgDAHAAIADAAQAbAAATAfIAAgIIAAAAIABgBIAZAAIABABIAAAAIAABYIABAfQACAPADANIgBAAIgaAAQgBABgBgHIgDgUIgFAIIgHAIQgIAHgJACQgJADgKABgAgcg1QgNAKgHASIgEANQgBAGAAAGIAAAHQAAAQAHANQAGANAMALQAFACAGABQAFACAGgBIAGAAQAvAAAAg6IAAgKQAAgYgJgOQgIgPgQgFIgGAAIgEAAIgBAAQgRAAgOAJg");
	this.shape_14.setTransform(63.6,30.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AAABXQgYAAgRgIQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQARgIAYAAQAZAAARAIQARAIAJATQAJATAAAgQAAAhgJATQgJATgRAIQgQAIgXAAIgDAAgAgcg6QgLAGgFAPQgEAOAAAXQAAAYAFAOQAEAPALAFQALAGARAAQATAAALgGQAKgFAFgPQAEgOAAgYQAAgXgFgOQgEgPgLgGQgLgGgSABIgCAAQgRAAgJAFg");
	this.shape_15.setTransform(45.225,30.5265);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgZBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQASgIAYAAQAOAAALACQALACAHADIAAAYQgJgEgLgCQgKgCgNAAQgRAAgLAGQgLAGgFAOQgEAOAAAXQgBAZAFANQAFAOALAGQALAFARAAQAMAAALgBQAMgCAJgEIAAAZIgMADIgQACIgQABIgDAAQgWAAgRgIg");
	this.shape_16.setTransform(28.175,30.5265);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.s_coat}]}).to({state:[{t:this.shape_12},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.9,0,112.2,52.1);
p.frameBounds = [rect, new cjs.Rectangle(0,0,111.3,52.1)];


(lib.元件5_1 = function(mode,startPosition,loop,reversed) {
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
	this.s_shirt = new lib.元件18();
	this.s_shirt.name = "s_shirt";
	this.s_shirt.setTransform(54.65,28,0.7898,1,0,0,0,69.2,20.5);
	new cjs.ButtonHelper(this.s_shirt, 0, 1, 2, false, new lib.元件18(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEGBzQgLgFgFgLQgFgMAAgVIAAhdIgZAAIAAgXIAZAAIAAgnIAbAAIAAAnIApAAIAAAXIgpAAIAABbQAAANACAHQABAHAGADQAFACAKAAIAKAAIAIgCIAAAXIgJABIgKABQgSAAgLgEgAkXB2IgRgCIgNgDIAAgXIAOAEIARACIARABQATAAAKgGQAKgFAAgPQAAgJgDgGQgDgGgIgDQgIgEgQgDQgSgEgKgGQgLgGgEgJQgEgKAAgMQAAgVAQgMQAPgMAegBQAMAAAMACQALABAHADIgCAWIgSgEQgLgCgLAAQgSAAgJAFQgJAFAAAOQAAAIADAEQADAFAHADIATAGQATAEAMAGQAMAGAFAKQAFAJAAAQQAAAZgRAMQgQAMgfAAIgSgBgAB6B1IAAinIAbAAIAAAfQAFgOAJgHQAJgIAKgCQAKgDAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgIAIQgIAJgFANIAABugAAnB1IAAinIAbAAIAACngAgpB1IAAhqQAAgMgDgJQgCgJgHgFQgHgFgOAAQgKAAgKACQgKADgIAHQgIAHgEAOIAABxIgbAAIAAjrIAbAAIAABcQAFgKAIgGQAJgGALgDQAKgCAKAAQAWAAAMAHQAMAHAGAMQAFANgBAPIAAB0gAAphTQgEgDAAgKQAAgKAEgDQADgDAJAAQAIAAAEADQAEADAAAKQAAAKgEADQgEADgIAAQgJAAgDgDg");
	this.shape.setTransform(56.425,27.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_1.setTransform(55.65,28.587,1,1.1349);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AEGBzQgLgFgFgLQgFgMAAgVIAAhdIgZAAIAAgXIAZAAIAAgnIAbAAIAAAnIApAAIAAAXIgpAAIAABbQAAANACAHQABAHAGADQAFACAKAAIAKAAIAIgCIAAAXIgJABIgKABQgSAAgLgEgAkXB2IgRgCIgNgDIAAgXIAOAEIARACIARABQATAAAKgGQAKgFAAgPQAAgJgDgGQgDgGgIgDQgIgEgQgDQgSgEgKgGQgLgGgEgJQgEgKAAgMQAAgVAQgMQAPgMAegBQAMAAAMACQALABAHADIgCAWIgSgEQgLgCgLAAQgSAAgJAFQgJAFAAAOQAAAIADAEQADAFAHADIATAGQATAEAMAGQAMAGAFAKQAFAJAAAQQAAAZgRAMQgQAMgfAAIgSgBgAB6B1IAAinIAbAAIAAAfQAFgOAJgHQAJgIAKgCQAKgDAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgIAIQgIAJgFANIAABugAAnB1IAAinIAbAAIAACngAgpB1IAAhqQAAgMgDgJQgCgJgHgFQgHgFgOAAQgKAAgKACQgKADgIAHQgIAHgEAOIAABxIgbAAIAAjrIAbAAIAABcQAFgKAIgGQAJgGALgDQAKgCAKAAQAWAAAMAHQAMAHAGAMQAFANgBAPIAAB0gAAphTQgEgDAAgKQAAgKAEgDQADgDAJAAQAIAAAEADQAEADAAAKQAAAKgEADQgEADgIAAQgJAAgDgDg");
	this.shape_2.setTransform(56.425,27.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.s_shirt}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.s_shirt}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-0.9,6.3,112.3,44.6);
p.frameBounds = [rect, rect];


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.s_dress = new lib.元件18();
	this.s_dress.name = "s_dress";
	this.s_dress.setTransform(55.65,28,0.7898,1,0,0,0,69.2,20.5);
	new cjs.ButtonHelper(this.s_dress, 0, 1, 2, false, new lib.元件18(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYBVIgSgCIgNgCIAAgXIAOADIASADIAQAAQATABAJgGQAKgGAAgOQAAgKgCgGQgEgFgIgEQgIgDgOgEQgTgEgKgFQgLgGgDgJQgEgJgBgOQABgVAPgMQAPgMAdAAIAYABQAMACAGACIgCAXIgSgFQgKgCgMAAQgRAAgJAFQgIAGgBAOQABAIACAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgQAMgeAAIgSgBg");
	this.shape.setTransform(86.3,30.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYBVIgSgCIgNgCIAAgXIAOADIASADIAQAAQATABAJgGQAKgGAAgOQAAgKgCgGQgEgFgIgEQgIgDgOgEQgTgEgKgFQgLgGgDgJQgEgJAAgOQAAgVAPgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgLgCgLAAQgRAAgJAFQgIAGgBAOQAAAIADAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgQAMgeAAIgSgBg");
	this.shape_1.setTransform(72.45,30.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_2.setTransform(57.0792,30.5265);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_3.setTransform(44.325,30.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgwBsQgPgLgGgTQgFgUAAgZQAAgYAFgSQAGgUAPgMQAPgMAcAAQAXAAANAJQANAIAFAPIAAhhIAaAAIAADqIgWAAIgEgbQgFANgOAJQgNAIgWAAQgcAAgPgLgAgfgVQgJAJgDANQgDAPAAARQAAARADAPQADAOAKAJQAKAJATAAQATAAALgIQAMgIAEgOQAFgOgBgUQABgUgFgNQgEgPgMgIQgLgIgTAAQgUAAgKAKg");
	this.shape_4.setTransform(28.025,27.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_5.setTransform(55.65,27.937,1,1.1349);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgYBVIgSgCIgNgCIAAgXIAOADIASADIAQAAQATABAJgGQAKgGAAgOQAAgKgCgGQgEgFgIgEQgIgDgOgEQgTgEgKgFQgLgGgDgJQgEgJgBgOQABgVAPgMQAPgMAdAAIAYABQAMACAGACIgCAXIgSgFQgKgCgMAAQgRAAgJAFQgIAGgBAOQABAIACAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgQAMgeAAIgSgBg");
	this.shape_6.setTransform(86.3,30.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgYBVIgSgCIgNgCIAAgXIAOADIASADIAQAAQATABAJgGQAKgGAAgOQAAgKgCgGQgEgFgIgEQgIgDgOgEQgTgEgKgFQgLgGgDgJQgEgJAAgOQAAgVAPgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgLgCgLAAQgRAAgJAFQgIAGgBAOQAAAIADAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgQAMgeAAIgSgBg");
	this.shape_7.setTransform(72.45,30.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_8.setTransform(57.0792,30.5265);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_9.setTransform(44.325,30.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgwBsQgPgLgGgTQgFgUAAgZQAAgYAFgSQAGgUAPgMQAPgMAcAAQAXAAANAJQANAIAFAPIAAhhIAaAAIAADqIgWAAIgEgbQgFANgOAJQgNAIgWAAQgcAAgPgLgAgfgVQgJAJgDANQgDAPAAARQAAARADAPQADAOAKAJQAKAJATAAQATAAALgIQAMgIAEgOQAFgOgBgUQABgUgFgNQgEgPgMgIQgLgIgTAAQgUAAgKAKg");
	this.shape_10.setTransform(28.025,27.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.s_dress}]}).to({state:[{t:this.shape_5},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,111.3,52.1);
p.frameBounds = [rect, rect];


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.s_skirt = new lib.元件18();
	this.s_skirt.name = "s_skirt";
	this.s_skirt.setTransform(55.65,27,0.7898,1,0,0,0,69.2,20.5);
	new cjs.ButtonHelper(this.s_skirt, 0, 1, 2, false, new lib.元件18(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAABlQgLgFgGgMQgEgLAAgVIAAheIgZAAIAAgWIAZAAIAAgoIAaAAIAAAoIApAAIAAAWIgpAAIAABcQAAANABAHQACAHAGADQAFACAJAAIALAAIAIgCIAAAXIgJABIgKAAQgSAAgKgDg");
	this.shape.setTransform(79.9,28.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_1.setTransform(69.975,30.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBzIAAinIAaAAIAACngAgLhVQgEgDAAgKQAAgKAEgDQAEgDAHAAQAIAAAFADQADADAAAKQAAAKgDADQgFADgIAAQgHAAgEgDg");
	this.shape_2.setTransform(58.85,27.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAfB2Ig8hOIgJAAIAABOIgbAAIAAjrIAbAAIAACIIAKAAIA5hEIAhAAIhGBNIBKBag");
	this.shape_3.setTransform(48.025,27.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYBVIgSgCIgNgCIAAgXIAOADIARADIARAAQATABAJgGQAKgGAAgOQAAgKgCgGQgEgFgHgEQgJgDgOgEQgTgEgKgFQgKgGgFgJQgDgJAAgOQAAgVAPgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgKgCgMAAQgRAAgIAFQgJAGAAAOQAAAIACAFQADAFAHADIASAFQAUAEAMAGQALAFAFAKQAFAKAAAQQAAAZgRALQgQAMgdAAIgSgBg");
	this.shape_4.setTransform(31.25,30.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_5.setTransform(55.65,27.187,1,1.1349);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAABlQgLgFgGgMQgEgLAAgVIAAheIgZAAIAAgWIAZAAIAAgoIAaAAIAAAoIApAAIAAAWIgpAAIAABcQAAANABAHQACAHAGADQAFACAJAAIALAAIAIgCIAAAXIgJABIgKAAQgSAAgKgDg");
	this.shape_6.setTransform(79.9,28.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_7.setTransform(69.975,30.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgMBzIAAinIAaAAIAACngAgLhVQgEgDAAgKQAAgKAEgDQAEgDAHAAQAIAAAFADQADADAAAKQAAAKgDADQgFADgIAAQgHAAgEgDg");
	this.shape_8.setTransform(58.85,27.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AAfB2Ig8hOIgJAAIAABOIgbAAIAAjrIAbAAIAACIIAKAAIA5hEIAhAAIhGBNIBKBag");
	this.shape_9.setTransform(48.025,27.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgYBVIgSgCIgNgCIAAgXIAOADIARADIARAAQATABAJgGQAKgGAAgOQAAgKgCgGQgEgFgHgEQgJgDgOgEQgTgEgKgFQgKgGgFgJQgDgJAAgOQAAgVAPgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgKgCgMAAQgRAAgIAFQgJAGAAAOQAAAIACAFQADAFAHADIASAFQAUAEAMAGQALAFAFAKQAFAKAAAQQAAAZgRALQgQAMgdAAIgSgBg");
	this.shape_10.setTransform(31.25,30.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.s_skirt}]}).to({state:[{t:this.shape_5},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,111.3,52.1);
p.frameBounds = [rect, rect];


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.s_Tshirt = new lib.元件18();
	this.s_Tshirt.name = "s_Tshirt";
	this.s_Tshirt.setTransform(56.65,26,0.7898,1,0,0,0,69.2,20.5);
	new cjs.ButtonHelper(this.s_Tshirt, 0, 1, 2, false, new lib.元件18(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAABlQgLgFgGgMQgEgLAAgVIAAheIgZAAIAAgWIAZAAIAAgoIAaAAIAAAoIApAAIAAAWIgpAAIAABcQAAANACAHQABAHAGADQAFACAJAAIALAAIAIgCIAAAXIgJABIgKAAQgSAAgKgDg");
	this.shape.setTransform(98.35,28.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_1.setTransform(88.425,30.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMBzIAAinIAaAAIAACngAgLhVQgEgDAAgKQAAgKAEgDQAEgDAHAAQAIAAAFADQADADAAAKQAAAKgDADQgFADgIAAQgHAAgEgDg");
	this.shape_2.setTransform(77.3,27.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAqB2IAAhqQAAgMgDgJQgCgJgHgFQgHgFgOAAQgJAAgKACQgKADgIAHQgIAHgEAOIAABxIgbAAIAAjrIAbAAIAABcQAFgKAIgGQAJgGALgDQAJgCAKAAQAWAAAMAHQAMAHAGAMQAFANgBAPIAAB0g");
	this.shape_3.setTransform(63.6273,27.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIASADIAQAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgOgEQgTgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAIAYABQAMACAGACIgCAXIgSgFQgLgCgLAAQgRAAgJAFQgJAGAAAOQABAIACAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgRAMgeAAIgSgBg");
	this.shape_4.setTransform(46.6,30.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgtALIAAgVIBbAAIAAAVg");
	this.shape_5.setTransform(32.325,29.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNBrIAAi9Ig/AAIAAgZICZAAIAAAZIg/AAIAAC9g");
	this.shape_6.setTransform(17.375,28.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_7.setTransform(55.65,26.587,1,1.1349);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AAABlQgLgFgGgMQgEgLAAgVIAAheIgZAAIAAgWIAZAAIAAgoIAaAAIAAAoIApAAIAAAWIgpAAIAABcQAAANACAHQABAHAGADQAFACAJAAIALAAIAIgCIAAAXIgJABIgKAAQgSAAgKgDg");
	this.shape_8.setTransform(98.35,28.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_9.setTransform(88.425,30.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgMBzIAAinIAaAAIAACngAgLhVQgEgDAAgKQAAgKAEgDQAEgDAHAAQAIAAAFADQADADAAAKQAAAKgDADQgFADgIAAQgHAAgEgDg");
	this.shape_10.setTransform(77.3,27.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAqB2IAAhqQAAgMgDgJQgCgJgHgFQgHgFgOAAQgJAAgKACQgKADgIAHQgIAHgEAOIAABxIgbAAIAAjrIAbAAIAABcQAFgKAIgGQAJgGALgDQAJgCAKAAQAWAAAMAHQAMAHAGAMQAFANgBAPIAAB0g");
	this.shape_11.setTransform(63.6273,27.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIASADIAQAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgOgEQgTgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAIAYABQAMACAGACIgCAXIgSgFQgLgCgLAAQgRAAgJAFQgJAGAAAOQABAIACAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgRAMgeAAIgSgBg");
	this.shape_12.setTransform(46.6,30.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgtALIAAgVIBbAAIAAAVg");
	this.shape_13.setTransform(32.325,29.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgNBrIAAi9Ig/AAIAAgZICZAAIAAAZIg/AAIAAC9g");
	this.shape_14.setTransform(17.375,28.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.s_Tshirt}]}).to({state:[{t:this.shape_7},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,112.1,52.1);
p.frameBounds = [rect, new cjs.Rectangle(0,0,111.3,52.1)];


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


(lib._cliWordMc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.元件17();
	this.instance.setTransform(-46.85,129.8,1,1,0,0,0,66.3,27.1);

	this.instance_1 = new lib.元件14();
	this.instance_1.setTransform(86,375.4,1,1,0,0,0,66.3,26.1);

	this.instance_2 = new lib.元件10_1();
	this.instance_2.setTransform(357.7,175.4,1,1,0,0,0,78,35.2);

	this.instance_3 = new lib.元件9_1();
	this.instance_3.setTransform(515.15,224.1,1,1,0,0,0,61.6,26.1);

	this.instance_4 = new lib.元件7();
	this.instance_4.setTransform(769.25,173.55,1,1,0,0,0,50.3,26.1);

	this.instance_5 = new lib.元件6_1();
	this.instance_5.setTransform(786.5,94.7,1,1,0,0,0,55.6,26.1);

	this.instance_6 = new lib.元件5_1();
	this.instance_6.setTransform(583.2,-51.25,1,1,0,0,0,55.6,26.1);

	this.instance_7 = new lib.元件3();
	this.instance_7.setTransform(424.6,-33.95,1,1,0,0,0,55.6,26.1);

	this.instance_8 = new lib.元件2();
	this.instance_8.setTransform(295.9,-27.9,1,1,0,0,0,55.6,26.1);

	this.instance_9 = new lib.元件1();
	this.instance_9.setTransform(154,-30.6,1,1,0,0,0,55.6,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._cliWordMc, rect = new cjs.Rectangle(-130.9,-71,973.1,472.5), [rect]);


(lib.clickname复制 = function(mode,startPosition,loop,reversed) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(906));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},737).to({state:[]},1).to({state:[]},163).wait(5));

	// clik
	this._cliWordMc = new lib._cliWordMc();
	this._cliWordMc.name = "_cliWordMc";
	this._cliWordMc.setTransform(59.95,34,1,1,0,0,0,411.4,195.4);

	this.timeline.addTween(cjs.Tween.get(this._cliWordMc).wait(737).to({_off:true},1).wait(168));

	// txt
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AFSBhQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQARgIAYAAQAVAAAOAHQAMAGAHAKQAIAKACANQADAMgBALIAAAJIgBALIhxAHQAAASAEAMQAFAMAMAGQAMAFAVAAQAOAAAOgDQAOgDAKgFIAAAZQgFADgJACIgTADQgLACgNAAIgCAAQgYAAgQgIgAFegnQgLAGgEANQgEAMAAAQIBYgGQAAgMgCgLQgDgLgIgHQgJgHgSAAQgUAAgJAHgAiGBhQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQARgIAYAAQAVAAANAHQAOAGAGAKQAHAKAEANQACAMAAALIAAAJIgCALIhyAHQAAASAGAMQAFAMALAGQAMAFAUAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgLAAIgDAAQgYAAgQgIgAh7gnQgKAGgEANQgEAMgBAQIBagGQgBgMgCgLQgDgLgJgHQgIgHgSAAQgUAAgKAHgABFBpQgZAAgQgNQgRgNgIgaIgCgOIgBgMIAAgJQAAgZAKgUQALgTAVgNQAJgEAIgCQAIgCAHAAIADAAQAdAAATAeIAAgIIABgBIAZAAIABABIAAAAIAABYIABAfQABAPADANIgBABIgaAAQgBAAgBgHIgCgUIgGAJIgHAIQgHAGgJADQgKADgLAAgAAxgiQgNAJgHATIgDALQgBAGAAAHIAAAHQgBAQAHANQAGAOANAKQAFACAGABQAFACAGAAIAGAAQAwAAAAg7IAAgKQAAgYgJgOQgIgOgRgFIgGAAIgEgBIAAAAQgTAAgOAKgADmBkQgLgFgFgLQgEgMgBgVIAAhdIgZAAIAAgXIAZAAIAAgnIAbAAIAAAnIAqAAIAAAXIgqAAIAABbQAAANACAHQABAHAGADQAFACAKAAIAKAAIAJgCIAAAXIgJABIgKABQgTAAgLgEgAogBnIgRgCIgNgDIAAgXIAOAEIARACIARABQATAAAKgGQAKgFAAgPQAAgJgDgGQgCgGgJgDQgIgEgQgDQgSgEgKgGQgLgGgDgJQgFgJAAgNQAAgVAQgMQAPgMAegBQAMAAAMACQAMABAGADIgCAWIgSgEQgLgCgLAAQgRAAgKAFQgJAFAAAOQABAJACAEQADAFAHADIAUAFQASAEAMAGQAMAGAFAKQAFAJAAAQQAAAZgQAMQgRAMgfAAIgSgBgAHrBmIAAinIAbAAIAAAfQAFgOAJgHQAJgIAKgCQALgDAJAAIAEAAIgBAYIgEAAQgKAAgKADQgLADgIAIQgIAJgFAOIAABtgAkSBmIgpiJIgCAAIgqCJIghAAIgtinIAaAAIAkCMIABAAIAqiMIAgAAIAqCMIACAAIAkiMIAaAAIgvCng");
	this.shape_5.setTransform(-416.4,-33.0485);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_6.setTransform(-415.3678,-32.2164,1.1914,1.2547);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AGjBzQgMgFgFgLQgEgMAAgVIAAhdIgZAAIAAgXIAZAAIAAgnIAaAAIAAAnIAqAAIAAAXIgqAAIAABbQAAANACAHQACAHAFADQAFACAKAAIAKAAIAJgCIAAAXIgJABIgKABQgSAAgLgEgAh6B2IgSgCIgNgDIAAgXIAOAEIASACIAQABQAUAAAJgGQAKgFAAgPQAAgJgCgGQgDgGgIgDQgJgEgPgDQgTgEgKgGQgKgGgEgJQgEgKAAgMQAAgVAPgMQAPgMAegBQAMAAAMACQAMABAGADIgCAWIgSgEQgKgCgMAAQgRAAgJAFQgJAFAAAOQAAAIACAEQADAFAHADIAUAGQATAEAMAGQALAGAFAKQAFAJAAAQQAAAZgQAMQgQAMgfAAIgSgBgAEXB1IAAinIAbAAIAAAfQAFgOAJgHQAIgIALgCQAKgDAKAAIADAAIgBAYIgEAAQgKAAgKADQgLADgIAIQgIAJgEANIAABugADEB1IAAinIAbAAIAACngAByB1IAAhqQAAgMgCgJQgDgJgHgFQgHgFgNAAQgLAAgKACQgJADgIAHQgIAHgFAOIAABxIgbAAIAAjrIAbAAIAABcQAFgKAJgGQAJgGAKgDQAKgCALAAQAVAAANAHQAMAHAFAMQAFANAAAPIAAB0gAmTB1IAAi+Ig/AAIAAgYICaAAIAAAYIg/AAIAAC+gAkdAhIAAgXIBbAAIAAAXgADFhTQgEgDAAgKQAAgKAEgDQAEgDAJAAQAIAAAEADQADADAAAKQAAAKgDADQgEADgIAAQgJAAgEgDg");
	this.shape_7.setTransform(-196.225,-190.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AD3BzQgMgFgFgLQgEgMAAgVIAAhdIgZAAIAAgXIAZAAIAAgnIAaAAIAAAnIAqAAIAAAXIgqAAIAABbQAAANACAHQACAHAFADQAFACAKAAIAKAAIAJgCIAAAXIgJABIgKABQgSAAgLgEgAkHB2IgSgCIgNgDIAAgXIAOAEIASACIAQABQAUAAAJgGQAKgFAAgPQAAgJgCgGQgDgGgIgDQgJgEgPgDQgTgEgKgGQgKgGgEgJQgEgKAAgMQAAgVAPgMQAPgMAegBQAMAAAMACQAMABAGADIgCAWIgSgEQgKgCgMAAQgRAAgJAFQgJAFAAAOQAAAIACAEQADAFAHADIAUAGQATAEAMAGQALAGAFAKQAFAJAAAQQAAAZgQAMQgQAMgfAAIgSgBgABrB1IAAinIAbAAIAAAfQAFgOAJgHQAIgIALgCQAKgDAKAAIADAAIgBAYIgEAAQgKAAgKADQgLADgIAIQgIAJgEANIAABugAAYB1IAAinIAbAAIAACngAgnB1Ig9hOIgJAAIAABOIgbAAIAAjrIAbAAIAACIIAKAAIA6hEIAhAAIhHBNIBLBagAAZhTQgEgDAAgKQAAgKAEgDQAEgDAJAAQAIAAAEADQADADAAAKQAAAKgDADQgEADgIAAQgJAAgEgDg");
	this.shape_8.setTransform(-55.575,-188.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("ACbBwQgRgIgJgTQgJgTAAghQAAghAJgTQAJgTARgIQARgHAYAAQAVAAAOAGQANAGAHALQAHAKADAMQACALAAANIAAAIIgCALIhxAIQAAASAFAMQAFALAMAGQALAGAVAAQAOAAAOgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgLABgMAAIgDAAQgXAAgRgHgACngZQgLAHgEAMQgEALAAASIBZgHQAAgNgDgKQgDgLgIgGQgJgHgSAAQgTAAgKAGgAAGB3QgYABgRgIQgRgIgJgTQgJgTAAghQAAghAJgTQAJgTARgIQARgHAYAAQAZAAARAHQARAIAJATQAJATAAAhQAAAhgJATQgJATgRAIQgQAHgXAAIgDAAgAgWgZQgLAGgFAOQgEANAAAZQAAAYAFAOQAEAOALAGQALAGARAAQATAAALgGQAKgGAFgOQAEgOAAgYQAAgZgFgNQgEgOgLgGQgLgGgSAAIgDAAQgQAAgJAGgAFKB1IgSgCIgNgCIAAgXIAOADIASADIAQAAQAUABAJgGQAKgGAAgOQAAgKgCgGQgDgFgIgEQgJgDgPgEQgTgEgKgGQgKgGgEgJQgEgJAAgNQAAgVAPgMQAPgMAeAAQAMAAAMABQAMACAGACIgCAXIgSgFQgKgCgMAAQgRAAgJAFQgJAGAAAOQAAAHACAFQADAFAHADIAUAFQATAEAMAGQALAGAFAKQAFAKAAAQQAAAZgQALQgQAMgfAAIgSgBgAl8B1IgRgCIgNgCIAAgXIAOADIARADIARAAQATABAKgGQAKgGAAgOQAAgKgDgGQgDgFgIgEQgIgDgQgEQgSgEgKgGQgLgGgEgJQgEgJAAgNQAAgVAQgMQAPgMAeAAQAMAAAMABQALACAHACIgCAXIgSgFQgLgCgLAAQgSAAgJAFQgJAGAAAOQAAAHADAFQADAFAHADIATAFQATAEAMAGQAMAGAFAKQAFAKAAAQQAAAZgRALQgQAMgfAAIgSgBgAiOB0IAAhqQAAgMgDgJQgCgJgHgFQgHgEgOAAQgKgBgKADQgKACgIAHQgIAIgEANIAABxIgbAAIAAjqIAbAAIAABcQAFgLAIgGQAJgGALgCQAKgCAKAAQAWAAAMAHQAMAHAGAMQAFAMgBAPIAAB0g");
	this.shape_9.setTransform(-259.575,215.1265);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("ADWBhQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAZAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBALIAAAJIgBALIhyAHQAAASAFAMQAFAMAMAGQAMAFAUAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgXAAgQgIgADhgnQgKAGgEANQgEAMgBAQIBZgGQAAgMgCgLQgDgLgJgHQgJgHgRAAQgUAAgKAHgAkRBpQgZAAgRgIQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQARgIAZAAQAZAAARAIQARAIAJATQAJATAAAgQAAAhgJATQgJATgRAIQgQAIgXAAIgDAAgAkugoQgLAGgFAPQgEAOAAAXQAAAYAFAOQAEAPALAFQALAGASAAQATAAALgGQAKgFAFgPQAEgOAAgYQAAgXgFgOQgEgPgLgGQgLgGgSABIgDAAQgRAAgJAFgAiABiQgMgHgFgMQgFgNAAgQIAAhzIAaAAIAABpQAAANADAJQACAJAHAFQAHAFAOAAQAKAAAKgCQAJgCAIgHQAHgIAFgOIAAhxIAbAAIAACnIgXAAIgDgYQgGAKgIAGQgJAGgKADQgKACgKAAQgWAAgMgHgAH6BnIgSgCIgNgDIAAgXIAOAEIASACIAQABQAUAAAJgGQAKgFAAgPQAAgJgCgGQgDgGgIgDQgJgEgPgDQgTgEgKgGQgKgGgEgJQgEgJAAgNQAAgVAPgMQAPgMAegBQAMAAAMACQAMABAGADIgCAWIgSgEQgKgCgMAAQgRAAgJAFQgJAFAAAOQAAAJACAEQADAFAHADIAUAFQATAEAMAGQALAGAFAKQAFAJAAAQQAAAZgQAMQgQAMgfAAIgSgBgAA9BnIgSgCIgNgDIAAgXIAOAEIASACIAQABQAUAAAJgGQAKgFAAgPQAAgJgCgGQgDgGgIgDQgJgEgPgDQgTgEgKgGQgKgGgEgJQgEgJAAgNQAAgVAPgMQAPgMAegBQAMAAAMACQAMABAGADIgCAWIgSgEQgKgCgMAAQgRAAgJAFQgJAFAAAOQAAAJACAEQADAFAHADIAUAFQATAEAMAGQALAGAFAKQAFAJAAAQQAAAZgQAMQgQAMgfAAIgSgBgAocBkQgMgFgFgLQgEgMAAgVIAAhdIgZAAIAAgXIAZAAIAAgnIAaAAIAAAnIAqAAIAAAXIgqAAIAABbQAAANACAHQACAHAFADQAFACAKAAIAKAAIAJgCIAAAXIgJABIgKABQgSAAgLgEgAFvBmIAAinIAbAAIAAAfQAFgOAJgHQAJgIAKgCQAKgDAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgIAIQgIAJgFAOIAABtgAnKBmIAAinIAbAAIAAAfQAFgOAJgHQAIgIALgCQAKgDAKAAIADAAIgBAYIgEAAQgKAAgKADQgLADgIAIQgIAJgEAOIAABtg");
	this.shape_10.setTransform(-4.975,25.9015);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhLBpQgZAAgRgIQgSgIgIgTQgKgTABghQgBggAKgTQAIgTASgIQARgIAZAAQAYAAASAIQARAIAJATQAIATAAAgQAAAhgIATQgJATgRAIQgQAIgXAAIgDAAgAhpgoQgLAGgEAPQgEAOAAAXQAAAYAEAOQAFAPALAFQALAGASAAQASAAAMgGQAKgFAEgPQAFgOAAgYQAAgXgFgOQgFgPgKgGQgLgGgSABIgDAAQgRAAgKAFgAkPBhQgSgIgIgTQgJgTAAghQAAggAJgTQAIgTASgIQARgIAZAAQAOAAALACQALACAHADIAAAYQgJgEgKgCQgLgCgNAAQgSAAgLAGQgLAGgFAOQgEAOAAAXQgBAZAFANQAFAOALAGQALAFASAAQAMAAAMgBQALgCAJgEIAAAZIgMADIgQACIgQABIgDAAQgXAAgQgIgABiBpQgZAAgRgNQgQgNgIgaIgDgOIAAgMIAAgJQgBgZALgUQALgTAVgNQAIgEAJgCQAIgCAHAAIADAAQAcAAAUAeIAAgIIABgBIAZAAIABABIAAAAIAABYIABAfQABAPAEANIgCABIgZAAQgCAAgBgHIgDgUIgFAJIgGAIQgIAGgJADQgKADgKAAgABPgiQgOAJgHATIgDALQgCAGABAHIAAAHQAAAQAGANQAGAOANAKQAFACAGABQAFACAGAAIAGAAQAwAAgBg7IAAgKQAAgYgIgOQgJgOgQgFIgFAAIgFgBIgBAAQgSAAgNAKgAEEBkQgMgFgFgLQgFgMAAgVIAAhdIgYAAIAAgXIAYAAIAAgnIAbAAIAAAnIAqAAIAAAXIgqAAIAABbQAAANACAHQABAHAGADQAFACAKAAIAKAAIAJgCIAAAXIgJABIgKABQgTAAgKgEg");
	this.shape_11.setTransform(432.75,-64.1485);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AEGBzQgLgFgFgLQgFgMAAgVIAAhdIgZAAIAAgXIAZAAIAAgnIAbAAIAAAnIApAAIAAAXIgpAAIAABbQAAANACAHQABAHAGADQAFACAKAAIAKAAIAIgCIAAAXIgJABIgKABQgSAAgLgEgAkXB2IgRgCIgNgDIAAgXIAOAEIARACIARABQATAAAKgGQAKgFAAgPQAAgJgDgGQgDgGgIgDQgIgEgQgDQgSgEgKgGQgLgGgEgJQgEgKAAgMQAAgVAQgMQAPgMAegBQAMAAAMACQALABAHADIgCAWIgSgEQgLgCgLAAQgSAAgJAFQgJAFAAAOQAAAIADAEQADAFAHADIATAGQATAEAMAGQAMAGAFAKQAFAJAAAQQAAAZgRAMQgQAMgfAAIgSgBgAB6B1IAAinIAbAAIAAAfQAFgOAJgHQAJgIAKgCQAKgDAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgIAIQgIAJgFANIAABugAAnB1IAAinIAbAAIAACngAgpB1IAAhqQAAgMgDgJQgCgJgHgFQgHgFgOAAQgKAAgKACQgKADgIAHQgIAHgEAOIAABxIgbAAIAAjrIAbAAIAABcQAFgKAIgGQAJgGALgDQAKgCAKAAQAWAAAMAHQAMAHAGAMQAFANgBAPIAAB0gAAphTQgEgDAAgKQAAgKAEgDQADgDAJAAQAIAAAEADQAEADAAAKQAAAKgEADQgEADgIAAQgJAAgDgDg");
	this.shape_12.setTransform(233.025,-211.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("ABlB0IAAjkIAbAAIAAAeQAFgPANgJQANgJAXAAQAcAAAPALQAPALAGATQAGAUAAAaQAAAXgGATQgGATgPAMQgPAMgcAAQgYAAgMgJQgNgIgFgPIAABbgACUhVQgMAIgFAOQgEAOAAAVQAAATAEANQAFAPAMAIQALAIAUAAQAUgBAJgJQAKgJADgOQADgOAAgQQAAgSgDgPQgEgOgJgJQgKgJgTAAQgUAAgLAIgAjYAyQgRgIgJgTQgJgTAAggQAAgiAJgTQAJgTARgIQASgHAZAAQAOAAALACQALACAHACIAAAYQgJgDgLgCQgKgCgNAAQgSAAgLAGQgLAFgFAOQgEAOAAAZQgBAYAFANQAFAOALAFQALAGASAAQAMAAALgCQAMgCAJgDIAAAYIgMADIgQADIgQAAIgDAAQgXAAgRgHgAglA5QgYAAgRgNQgRgNgIgaIgCgMIgBgMIAAgKQAAgaALgTQAKgUAVgNQAJgEAIgCQAIgCAIAAIACAAQAdAAASAeIAAgIIABAAIAZAAIABAAIAAABIAABZIABAeQACAPADANIgCAAIgZAAQgBAAgCgGIgCgUIgGAIIgGAIQgHAGgJADQgJADgLAAgAg4hSQgNAKgIASIgDANQgBAGAAAGIAAAHQAAARAGAMQAHANAMAKQAFADAGABQAFABAGAAIAGAAQAvAAAAg5IAAgLQAAgYgJgOQgIgPgQgFIgFAAIgFAAIAAAAQgTAAgNAJg");
	this.shape_13.setTransform(415.575,19.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgOB3QgZABgSgIQgRgIgJgTQgJgTAAghQAAghAJgTQAJgTARgIQASgHAZAAQAXAAASAHQARAIAJATQAJATAAAhQAAAhgJATQgJATgRAIQgRAHgVAAIgDAAgAgsgZQgLAGgEAOQgFANABAZQAAAYAEAOQAFAOALAGQALAGASAAQARAAALgGQALgGAEgOQAFgOgBgYQABgZgFgNQgFgOgLgGQgKgGgRAAIgDAAQgRAAgKAGgAFfB1IgRgCIgNgCIAAgXIAOADIARADIARAAQATABAKgGQAKgGAAgOQAAgKgDgGQgDgFgIgEQgIgDgQgEQgSgEgKgGQgLgGgEgJQgEgJAAgNQAAgVAQgMQAPgMAeAAQAMAAAMABQALACAHACIgCAXIgSgFQgLgCgLAAQgSAAgJAFQgJAGAAAOQAAAHADAFQADAFAHADIATAFQATAEAMAGQAMAGAFAKQAFAKAAAQQAAAZgRALQgQAMgfAAIgSgBgAD4ByQgLgEgFgMQgFgLAAgWIAAhdIgZAAIAAgWIAZAAIAAgoIAbAAIAAAoIApAAIAAAWIgpAAIAABcQAAAMACAIQABAHAGACQAFADAKAAIAKgBIAIgBIAAAXIgJABIgKAAQgSAAgLgEgAmRB1IgSgCIgNgCIAAgXIAOADIASADIAQAAQAUABAJgGQAKgGAAgOQAAgKgCgGQgDgFgIgEQgJgDgPgEQgTgEgKgGQgKgGgEgJQgEgJAAgNQAAgVAPgMQAPgMAeAAQAMAAAMABQAMACAGACIgCAXIgSgFQgKgCgMAAQgRAAgJAFQgJAGAAAOQAAAHACAFQADAFAHADIAUAFQATAEAMAGQALAGAFAKQAFAKAAAQQAAAZgQALQgQAMgfAAIgSgBgABsB0IAAimIAbAAIAAAeQAFgOAJgHQAJgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgIAIQgIAIgFAOIAABtgAikB0IAAhqQAAgMgCgJQgDgJgHgFQgHgEgNAAQgLgBgKADQgJACgIAHQgIAIgFANIAABxIgbAAIAAjqIAbAAIAABcQAFgLAJgGQAJgGAKgCQAKgCALAAQAVAAANAHQAMAHAFAMQAFAMAAAPIAAB0g");
	this.shape_14.setTransform(162.525,63.8265);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgaBwQgRgIgKgTQgJgTAAghQAAghAJgTQAKgTARgIQAQgHAXAAQAWAAANAGQANAGAHALQAHAKADAMQACALAAANIAAAIIgBALIhxAIQAAASAFAMQAFALAMAGQALAGAUAAQAOAAAOgDQAOgDALgFIAAAYQgFADgKACIgTAEQgLABgMAAIgDAAQgWAAgQgHgAgPgZQgKAHgEAMQgFALAAASIBYgHQAAgNgCgKQgEgLgIgGQgJgHgSAAQgSAAgKAGgAlKBsQgPgLgFgTQgGgUAAgZQAAgYAGgSQAFgUAPgMQAPgMAdAAQAYAAAMAJQANAIAFAPIAAhhIAaAAIAADqIgWAAIgEgbQgFANgOAJQgNAIgWAAQgdAAgPgLgAk5gVQgJAJgCANQgDAPgBARQABARADAPQACAOAKAJQAKAJATAAQAUAAAMgIQALgIAFgOQAEgOgBgUQABgUgEgNQgFgPgLgIQgMgIgUAAQgUAAgKAKgAEUB1IgSgCIgNgCIAAgXIAOADIASADIAQAAQAUABAJgGQAKgGAAgOQAAgKgCgGQgEgFgIgEQgIgDgPgEQgTgEgKgGQgLgGgDgJQgEgJgBgNQABgVAPgMQAPgMAeAAIAYABQAMACAGACIgCAXIgSgFQgKgCgMAAQgSAAgJAFQgIAGgBAOQABAHACAFQADAFAHADIAUAFQASAEAMAGQAMAGAFAKQAFAKAAAQQAAAZgQALQgQAMgfAAIgSgBgACJB1IgSgCIgMgCIAAgXIANADIASADIAQAAQAUABAJgGQAKgGAAgOQAAgKgCgGQgDgFgIgEQgIgDgQgEQgTgEgKgGQgKgGgEgJQgEgJAAgNQAAgVAQgMQAPgMAeAAQAMAAALABQAMACAGACIgCAXIgSgFQgKgCgLAAQgSAAgJAFQgJAGAAAOQAAAHACAFQAEAFAGADIAUAFQATAEAMAGQALAGAGAKQAEAKAAAQQAAAZgQALQgQAMgfAAIgSgBgAigB0IAAimIAbAAIAAAeQAFgOAKgHQAIgHALgDQAKgCAKAAIADAAIgBAYIgEAAQgKAAgKADQgLADgIAIQgIAIgFAOIAABtg");
	this.shape_15.setTransform(74.2,-194.2235);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6,p:{scaleX:1.1914,scaleY:1.2547,x:-415.3678,y:-32.2164}},{t:this.shape_5}]},18).to({state:[]},29).to({state:[{t:this.shape_6,p:{scaleX:1,scaleY:1.1349,x:-196.95,y:-191.563}},{t:this.shape_7}]},1).to({state:[]},57).to({state:[{t:this.shape_6,p:{scaleX:1,scaleY:1.1349,x:-55.05,y:-188.263}},{t:this.shape_8}]},1).to({state:[]},64).to({state:[{t:this.shape_6,p:{scaleX:1.1914,scaleY:1.1349,x:-265.0178,y:216.337}},{t:this.shape_9}]},1).to({state:[]},58).to({state:[{t:this.shape_6,p:{scaleX:1.1914,scaleY:1.1349,x:-5.0178,y:25.687}},{t:this.shape_10}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},56).to({state:[]},65).to({state:[{t:this.shape_6,p:{scaleX:1,scaleY:1.1349,x:232.25,y:-210.213}},{t:this.shape_12}]},1).to({state:[]},60).to({state:[{t:this.shape_6,p:{scaleX:1,scaleY:1.1349,x:435.55,y:-63.563}},{t:this.shape_11}]},1).to({state:[]},68).to({state:[{t:this.shape_6,p:{scaleX:0.9039,scaleY:1.1349,x:418.2305,y:15.737}},{t:this.shape_13}]},1).to({state:[]},55).to({state:[{t:this.shape_6,p:{scaleX:1.1073,scaleY:1.1349,x:164.1718,y:65.037}},{t:this.shape_14}]},1).to({state:[]},51).to({state:[{t:this.shape_15}]},1).to({state:[]},80).to({state:[]},164).wait(72));

	// 图层_5
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AFSBhQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQARgIAYAAQAVAAAOAHQAMAGAHAKQAIAKACANQADAMgBALIAAAJIgBALIhxAHQAAASAEAMQAFAMAMAGQAMAFAVAAQAOAAAOgDQAOgDAKgFIAAAZQgFADgJACIgTADQgLACgNAAIgCAAQgYAAgQgIgAFegnQgLAGgEANQgEAMAAAQIBYgGQAAgMgCgLQgDgLgIgHQgJgHgSAAQgUAAgJAHgAiGBhQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQARgIAYAAQAVAAANAHQAOAGAGAKQAHAKAEANQACAMAAALIAAAJIgCALIhyAHQAAASAGAMQAFAMALAGQAMAFAUAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgLAAIgDAAQgYAAgQgIgAh7gnQgKAGgEANQgEAMgBAQIBagGQgBgMgCgLQgDgLgJgHQgIgHgSAAQgUAAgKAHgABFBpQgZAAgQgNQgRgNgIgaIgCgOIgBgMIAAgJQAAgZAKgUQALgTAVgNQAJgEAIgCQAIgCAHAAIADAAQAdAAATAeIAAgIIABgBIAZAAIABABIAAAAIAABYIABAfQABAPADANIgBABIgaAAQgBAAgBgHIgCgUIgGAJIgHAIQgHAGgJADQgKADgLAAgAAxgiQgNAJgHATIgDALQgBAGAAAHIAAAHQgBAQAHANQAGAOANAKQAFACAGABQAFACAGAAIAGAAQAwAAAAg7IAAgKQAAgYgJgOQgIgOgRgFIgGAAIgEgBIAAAAQgTAAgOAKgADmBkQgLgFgFgLQgEgMgBgVIAAhdIgZAAIAAgXIAZAAIAAgnIAbAAIAAAnIAqAAIAAAXIgqAAIAABbQAAANACAHQABAHAGADQAFACAKAAIAKAAIAJgCIAAAXIgJABIgKABQgTAAgLgEgAogBnIgRgCIgNgDIAAgXIAOAEIARACIARABQATAAAKgGQAKgFAAgPQAAgJgDgGQgCgGgJgDQgIgEgQgDQgSgEgKgGQgLgGgDgJQgFgJAAgNQAAgVAQgMQAPgMAegBQAMAAAMACQAMABAGADIgCAWIgSgEQgLgCgLAAQgRAAgKAFQgJAFAAAOQABAJACAEQADAFAHADIAUAFQASAEAMAGQAMAGAFAKQAFAJAAAQQAAAZgQAMQgRAMgfAAIgSgBgAHrBmIAAinIAbAAIAAAfQAFgOAJgHQAJgIAKgCQALgDAJAAIAEAAIgBAYIgEAAQgKAAgKADQgLADgIAIQgIAJgFAOIAABtgAkSBmIgpiJIgCAAIgqCJIghAAIgtinIAaAAIAkCMIABAAIAqiMIAgAAIAqCMIACAAIAkiMIAaAAIgvCng");
	this.shape_16.setTransform(-416.4,-33.0485);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_17.setTransform(-415.3678,-32.2164,1.1914,1.2547);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AGjBzQgMgFgFgLQgEgMAAgVIAAhdIgZAAIAAgXIAZAAIAAgnIAaAAIAAAnIAqAAIAAAXIgqAAIAABbQAAANACAHQACAHAFADQAFACAKAAIAKAAIAJgCIAAAXIgJABIgKABQgSAAgLgEgAh6B2IgSgCIgNgDIAAgXIAOAEIASACIAQABQAUAAAJgGQAKgFAAgPQAAgJgCgGQgDgGgIgDQgJgEgPgDQgTgEgKgGQgKgGgEgJQgEgKAAgMQAAgVAPgMQAPgMAegBQAMAAAMACQAMABAGADIgCAWIgSgEQgKgCgMAAQgRAAgJAFQgJAFAAAOQAAAIACAEQADAFAHADIAUAGQATAEAMAGQALAGAFAKQAFAJAAAQQAAAZgQAMQgQAMgfAAIgSgBgAEXB1IAAinIAbAAIAAAfQAFgOAJgHQAIgIALgCQAKgDAKAAIADAAIgBAYIgEAAQgKAAgKADQgLADgIAIQgIAJgEANIAABugADEB1IAAinIAbAAIAACngAByB1IAAhqQAAgMgCgJQgDgJgHgFQgHgFgNAAQgLAAgKACQgJADgIAHQgIAHgFAOIAABxIgbAAIAAjrIAbAAIAABcQAFgKAJgGQAJgGAKgDQAKgCALAAQAVAAANAHQAMAHAFAMQAFANAAAPIAAB0gAmTB1IAAi+Ig/AAIAAgYICaAAIAAAYIg/AAIAAC+gAkdAhIAAgXIBbAAIAAAXgADFhTQgEgDAAgKQAAgKAEgDQAEgDAJAAQAIAAAEADQADADAAAKQAAAKgDADQgEADgIAAQgJAAgEgDg");
	this.shape_18.setTransform(-196.225,-190.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_19.setTransform(-196.95,-191.563,1,1.1349);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("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");
	this.shape_20.setTransform(-250,-112.6735);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_21.setTransform(-196.95,-191.563,1,1.1349);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_22.setTransform(-363.075,-31.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_23.setTransform(-378.9708,-31.2235);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAABlQgLgFgGgMQgEgLAAgWIAAhdIgZAAIAAgWIAZAAIAAgoIAaAAIAAAoIApAAIAAAWIgpAAIAABcQAAAMACAIQABAHAGADQAFACAJAAIAKAAIAJgCIAAAXIgJABIgKAAQgSAAgKgDg");
	this.shape_24.setTransform(-393.25,-33.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgJBWQgYAAgRgNQgRgMgHgaIgDgOIgBgMIAAgJQAAgZALgUQAKgTAVgOQAJgDAJgDQAHgCAIAAIADAAQAbAAATAfIAAgIIAAAAIABgBIAZAAIABABIAAAAIAABYIABAfQACAPADANIgBAAIgaAAQgBAAgBgGIgDgUIgFAIIgHAIQgIAHgJACQgJADgKAAgAgcg0QgNAJgHASIgEANQgBAGAAAGIAAAHQAAAQAHANQAGAOANAJQAEADAGABQAGABAFAAIAGAAQAvAAAAg6IAAgKQAAgYgJgOQgIgPgQgEIgGAAIgFgBIAAAAQgRAAgOAKg");
	this.shape_25.setTransform(-408.55,-31.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_26.setTransform(-426.2708,-31.2235);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAqBUIgqiJIgBAAIgqCJIggAAIgtinIAaAAIAkCMIABAAIApiMIAgAAIAqCMIACAAIAkiMIAaAAIgvCng");
	this.shape_27.setTransform(-448.05,-31.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIARADIARAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgPgEQgSgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgLgCgLAAQgQAAgKAFQgJAGAAAOQABAIACAFQADAFAHADIATAFQASAEAMAGQAMAFAFAKQAFAKAAAQQAAAZgQALQgRAMgeAAIgSgBg");
	this.shape_28.setTransform(-468.3,-31.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgZBVIgRgCIgNgCIAAgXIAOADIARADIARAAQASABAKgGQAKgGAAgOQAAgKgDgGQgCgFgJgEQgIgDgPgEQgSgEgKgFQgLgGgDgJQgFgJAAgOQAAgVAQgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgLgCgLAAQgQAAgJAFQgKAGABAOQgBAIADAFQADAFAHADIASAFQAUAEAMAGQALAFAFAKQAFAKAAAQQAAAZgRALQgPAMgfAAIgSgBg");
	this.shape_29.setTransform(-224.05,218.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgjBPQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQAQgIAYAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBAKIhxAHQAAASAFAMQAFAMAMAGQAMAFATAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgWAAgQgIgAgYg5QgKAGgEANQgEAMgBARIBYgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgTAAgKAHg");
	this.shape_30.setTransform(-240.4208,218.3765);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAABXQgYAAgRgIQgRgIgJgTQgJgTAAghQAAggAJgTQAJgTARgIQARgIAYAAQAZAAARAIQARAIAJATQAJATAAAgQAAAhgJATQgJATgRAIQgQAIgXAAIgDAAgAgcg6QgLAGgFAPQgEAOAAAXQAAAYAFAOQAEAPALAFQALAGARAAQATAAALgGQAKgFAFgPQAEgOAAgYQAAgXgFgOQgEgPgLgGQgLgGgSABIgCAAQgRAAgJAFg");
	this.shape_31.setTransform(-258.975,218.3765);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAqB2IAAhqQAAgMgDgJQgCgJgHgFQgHgFgOAAQgJAAgKACQgKADgIAHQgIAHgEAOIAABxIgbAAIAAjrIAbAAIAABcQAFgKAIgGQAJgGALgDQAJgCAKAAQAWAAAMAHQAMAHAGAMQAFANgBAPIAAB0g");
	this.shape_32.setTransform(-278.0727,214.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYBVIgSgCIgNgCIAAgXIAOADIASADIAQAAQATABAJgGQAKgGAAgOQAAgKgCgGQgDgFgIgEQgJgDgOgEQgTgEgKgFQgLgGgEgJQgDgJAAgOQAAgVAPgMQAPgMAdAAQAMAAAMABQALACAHACIgCAXIgSgFQgKgCgMAAQgQAAgKAFQgIAGgBAOQAAAIADAFQADAFAHADIASAFQAUAEALAGQAMAFAFAKQAFAKAAAQQAAAZgRALQgPAMgeAAIgSgBg");
	this.shape_33.setTransform(-295.1,218.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAABkQgLgEgGgMQgEgLAAgVIAAheIgZAAIAAgWIAZAAIAAgoIAaAAIAAAoIApAAIAAAWIgpAAIAABcQAAANABAHQACAHAGADQAFACAJAAIALgBIAIgBIAAAXIgJABIgKABQgSgBgKgEg");
	this.shape_34.setTransform(-30.8,-186.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_35.setTransform(-40.725,-185.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgMBzIAAinIAaAAIAACngAgLhVQgEgDAAgKQAAgKAEgDQAEgDAHAAQAIAAAFADQADADAAAKQAAAKgDADQgFADgIAAQgHAAgEgDg");
	this.shape_36.setTransform(-51.85,-188.05);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAfB2Ig8hOIgJAAIAABOIgbAAIAAjrIAbAAIAACIIAKAAIA5hEIAhAAIhGBNIBKBag");
	this.shape_37.setTransform(-62.675,-188.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgYBVIgSgCIgNgCIAAgXIAOADIARADIARAAQATABAJgGQAKgGAAgOQAAgKgCgGQgEgFgHgEQgJgDgPgEQgSgEgKgFQgKgGgFgJQgDgJAAgOQAAgVAPgMQAPgMAdAAQAMAAAMABQAMACAGACIgCAXIgSgFQgKgCgMAAQgRAAgIAFQgJAGAAAOQAAAIACAFQADAFAHADIASAFQAUAEAMAGQALAFAFAKQAFAKAAAQQAAAZgRALQgQAMgdAAIgSgBg");
	this.shape_38.setTransform(-79.45,-184.975);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAABkQgMgEgEgMQgFgLAAgVIAAheIgZAAIAAgWIAZAAIAAgoIAZAAIAAAoIAqAAIAAAWIgqAAIAABcQAAANACAHQACAHAFADQAFACALAAIAKgBIAIgBIAAAXIgJABIgKABQgSgBgKgEg");
	this.shape_39.setTransform(-154.25,-189.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgpBVIAAimIAbAAIAAAeQAFgOAJgHQAIgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgHAIQgIAIgFAPIAABsg");
	this.shape_40.setTransform(-164.175,-187.775);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgNBzIAAinIAaAAIAACngAgLhVQgEgDAAgKQAAgKAEgDQADgDAJAAQAHAAAEADQAEADAAAKQAAAKgEADQgEADgHAAQgJAAgDgDg");
	this.shape_41.setTransform(-175.3,-190.75);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAqB2IAAhqQAAgMgDgJQgCgJgHgFQgHgFgOAAQgJAAgKACQgKADgIAHQgIAHgEAOIAABxIgbAAIAAjrIAbAAIAABcQAFgKAIgGQAJgGALgDQAJgCAKAAQAWAAAMAHQAMAHAGAMQAFANgBAPIAAB0g");
	this.shape_42.setTransform(-188.9727,-191.025);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgYBVIgSgCIgNgCIAAgXIAOADIASADIAQAAQATABAJgGQAKgGAAgOQAAgKgCgGQgDgFgIgEQgJgDgOgEQgTgEgKgFQgLgGgEgJQgDgJAAgOQAAgVAPgMQAPgMAdAAQAMAAAMABQALACAHACIgCAXIgSgFQgKgCgMAAQgQAAgKAFQgIAGgBAOQAAAIADAFQADAFAHADIASAFQAUAEALAGQAMAFAFAKQAFAKAAAQQAAAZgRALQgPAMgeAAIgSgBg");
	this.shape_43.setTransform(-206,-187.675);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgtALIAAgVIBbAAIAAAVg");
	this.shape_44.setTransform(-220.275,-188.775);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNBrIAAi9Ig/AAIAAgZICZAAIAAAZIg/AAIAAC9g");
	this.shape_45.setTransform(-235.225,-190);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_46.setTransform(-196.95,-191.563,1,1.1349);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("EgFTAheQgRgIgJgTQgJgTAAghQAAgiAJgTQAJgTARgIQARgHAYAAQAVAAAOAGQANAGAHALQAHAKADAMQACAMAAANIAAAIIgCALIhxAIQAAASAFAMQAFALAMAGQALAGAVAAQAOAAAOgDQAOgDAKgFIAAAYQgFADgJACIgTAEQgLABgMAAIgDAAQgXAAgRgHgAlHfUQgLAHgEAMQgEAMAAASIBZgHQAAgNgDgLQgDgLgIgGQgJgHgSAAQgTAAgKAGgEgHoAhlQgZABgRgIQgRgIgJgTQgJgTAAghQAAgiAJgTQAJgTARgIQARgHAZAAQAZAAARAHQARAIAJATQAJATAAAiQAAAhgJATQgJATgRAIQgQAHgXAAIgDAAgAoFfUQgLAGgFAOQgEAOAAAZQAAAYAFAOQAEAOALAGQALAGASAAQATAAALgGQAKgGAFgOQAEgOAAgYQAAgZgFgOQgEgOgLgGQgLgGgSAAIgDAAQgRAAgJAGgEgCkAhjIgSgCIgNgCIAAgXIAOADIASADIAQAAQAUABAJgGQAKgGAAgOQAAgKgCgGQgDgFgIgEQgJgDgPgEQgTgEgKgGQgKgGgEgJQgEgJAAgOQAAgVAPgMQAPgMAeAAQAMAAAMABQAMACAGACIgCAXIgSgFQgKgCgMAAQgRAAgJAFQgJAGAAAOQAAAIACAFQADAFAHADIAUAFQATAEAMAGQALAGAFAKQAFAKAAAQQAAAZgQALQgQAMgfAAIgSgBgEgNrAhjIgRgCIgNgCIAAgXIAOADIARADIARAAQATABAKgGQAKgGAAgOQAAgKgDgGQgDgFgIgEQgIgDgQgEQgSgEgKgGQgLgGgEgJQgEgJAAgOQAAgVAQgMQAPgMAeAAQAMAAAMABQALACAHACIgCAXIgSgFQgLgCgLAAQgSAAgJAFQgJAGAAAOQAAAIADAFQADAFAHADIATAFQATAEAMAGQAMAGAFAKQAFAKAAAQQAAAZgRALQgQAMgfAAIgSgBgEgJ9AhiIAAhqQAAgNgDgJQgCgJgHgFQgHgEgOAAQgKgBgKADQgKACgIAHQgIAIgEAOIAABxIgbAAIAAjrIAbAAIAABcQAFgLAIgGQAJgGALgCQAKgCAKAAQAWAAAMAHQAMAHAGAMQAFAMgBAQIAAB0gEAjZADrQgRgIgJgTQgJgTAAghQAAghAJgTQAJgTARgIQAQgIAZAAQAVAAANAHQANAGAHAKQAHAKADANQADAMgBAMIAAAJIgBALIhyAHQAAASAFAMQAFAMAMAGQAMAFAUAAQAOAAAOgDQAPgDAKgFIAAAZQgFADgJACIgUADQgLACgMAAIgDAAQgXAAgQgIgEAjkABiQgKAGgEANQgEAMgBARIBZgGQAAgNgCgLQgDgLgJgHQgJgHgRAAQgUAAgKAHgAbxDzQgZAAgRgIQgRgIgJgTQgJgTAAghQAAghAJgTQAJgTARgIQARgIAZAAQAZAAARAIQARAIAJATQAJATAAAhQAAAhgJATQgJATgRAIQgQAIgXAAIgDAAgAbUBhQgLAGgFAPQgEAOAAAYQAAAYAFAOQAEAPALAFQALAGASAAQATAAALgGQAKgFAFgPQAEgOAAgYQAAgYgFgOQgEgPgLgGQgLgGgSABIgDAAQgRAAgJAFgAeCDsQgMgHgFgMQgFgNAAgQIAAh0IAaAAIAABqQAAANADAJQACAJAHAFQAHAFAOAAQAKAAAKgCQAJgCAIgHQAHgIAFgOIAAhyIAbAAIAACoIgXAAIgDgYQgGAKgIAGQgJAGgKADQgKACgKAAQgWAAgMgHgEAn9ADxIgSgCIgNgDIAAgXIAOAEIASACIAQABQAUAAAJgGQAKgFAAgPQAAgJgCgGQgDgGgIgDQgJgEgPgDQgTgEgKgGQgKgGgEgJQgEgKAAgNQAAgVAPgMQAPgMAegBQAMAAAMACQAMABAGADIgCAWIgSgEQgKgCgMAAQgRAAgJAFQgJAFAAAOQAAAJACAEQADAFAHADIAUAGQATAEAMAGQALAGAFAKQAFAJAAAQQAAAZgQAMQgQAMgfAAIgSgBgEAhAADxIgSgCIgNgDIAAgXIAOAEIASACIAQABQAUAAAJgGQAKgFAAgPQAAgJgCgGQgDgGgIgDQgJgEgPgDQgTgEgKgGQgKgGgEgJQgEgKAAgNQAAgVAPgMQAPgMAegBQAMAAAMACQAMABAGADIgCAWIgSgEQgKgCgMAAQgRAAgJAFQgJAFAAAOQAAAJACAEQADAFAHADIAUAGQATAEAMAGQALAGAFAKQAFAJAAAQQAAAZgQAMQgQAMgfAAIgSgBgAXmDuQgMgFgFgLQgEgMAAgVIAAheIgZAAIAAgXIAZAAIAAgnIAaAAIAAAnIAqAAIAAAXIgqAAIAABcQAAANACAHQACAHAFADQAFACAKAAIAKAAIAJgCIAAAXIgJABIgKABQgSAAgLgEgEAlyADwIAAioIAbAAIAAAfQAFgOAJgHQAJgIAKgCQAKgDAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgIAIQgIAJgFAOIAABugAY4DwIAAioIAbAAIAAAfQAFgOAJgHQAIgIALgCQAKgDAKAAIADAAIgBAYIgEAAQgKAAgKADQgLADgIAIQgIAJgEAOIAABugA68lhQgRgIgJgTQgJgTAAghQAAgiAJgTQAJgTARgIQAQgHAZAAQAVAAANAGQANAGAHALQAHAKADAMQADAMgBANIAAAIIgBALIhyAIQAAASAFAMQAFALAMAGQAMAGAUAAQAOAAAOgDQAPgDAKgFIAAAYQgFADgJACIgUAEQgLABgMAAIgDAAQgXAAgQgHgA6xnrQgKAHgEAMQgEAMgBASIBZgHQAAgNgCgLQgDgLgJgGQgJgHgRAAQgUAAgKAGgEgiVgFhQgRgIgJgTQgJgTAAghQAAgiAJgTQAJgTARgIQAQgHAZAAQAVAAANAGQANAGAHALQAHAKADAMQADAMgBANIAAAIIgBALIhyAIQAAASAFAMQAFALAMAGQAMAGAUAAQAOAAAOgDQAPgDAKgFIAAAYQgFADgJACIgUAEQgLABgMAAIgDAAQgXAAgQgHgEgiKgHrQgKAHgEAMQgEAMgBASIBZgHQAAgNgCgLQgDgLgJgGQgJgHgRAAQgUAAgKAGgA/JlaQgZAAgRgNQgQgNgIgaIgDgNIgBgMIAAgKQAAgaALgTQALgUAVgNQAIgEAJgCQAIgCAHAAIADAAQAcAAAUAeIAAgIIABAAIAZAAIAAAAIABABIAABZIABAfQABAPADANIgBAAIgaAAQgBAAgBgGIgDgUIgFAIIgHAIQgHAGgKADQgJADgLAAgA/dnmQgNAKgHASIgDANQgCAGAAAGIAAAHQAAARAHANQAGANANAKQAFADAFABQAGABAGAAIAGAAQAvAAAAg6IAAgLQAAgYgIgOQgJgPgQgFIgGAAIgEAAIgBAAQgSAAgOAJgA8olfQgLgEgFgMQgFgLAAgWIAAheIgZAAIAAgWIAZAAIAAgoIAbAAIAAAoIApAAIAAAWIgpAAIAABdQAAAMACAIQABAHAGACQAFADAKAAIAKgBIAIgBIAAAXIgJABIgKAAQgSAAgLgEgEgovgFcIgRgCIgNgCIAAgXIAOADIARADIARAAQATABAKgGQAKgGAAgOQAAgKgDgGQgDgFgIgEQgIgDgQgEQgSgEgKgGQgLgGgEgJQgEgJAAgOQAAgVAQgMQAPgMAeAAQAMAAAMABQALACAHACIgCAXIgSgFQgLgCgLAAQgSAAgJAFQgJAGAAAOQAAAIADAFQADAFAHADIATAFQATAEAMAGQAMAGAFAKQAFAKAAAQQAAAZgRALQgQAMgfAAIgSgBgA4jldIAAinIAbAAIAAAeQAFgOAJgHQAJgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgIAIQgIAIgFAPIAABtgEgkhgFdIgpiJIgCAAIgqCJIghAAIgtinIAaAAIAkCMIABAAIAqiMIAgAAIAqCMIACAAIAkiMIAaAAIgvCngAcA9gQgMgEgFgMQgEgLAAgWIAAheIgZAAIAAgWIAZAAIAAgoIAaAAIAAAoIAqAAIAAAWIgqAAIAABdQAAAMACAIQACAHAFACQAFADAKAAIAKgBIAJgBIAAAXIgJABIgKAAQgSAAgLgEgAUB9dIgSgCIgNgCIAAgXIAOADIASADIAQAAQAUABAJgGQAKgGAAgOQAAgKgCgGQgDgFgIgEQgJgDgPgEQgTgEgKgGQgKgGgEgJQgEgJAAgOQAAgVAPgMQAPgMAeAAQAMAAAMABQAMACAGACIgCAXIgSgFQgKgCgMAAQgRAAgJAFQgJAGAAAOQAAAIACAFQADAFAHADIAUAFQATAEAMAGQALAGAFAKQAFAKAAAQQAAAZgQALQgQAMgfAAIgSgBgAZ09eIAAinIAbAAIAAAeQAFgOAJgHQAIgHALgDQAKgCAKAAIADAAIgBAYIgEAAQgKAAgKADQgLADgIAIQgIAIgEAPIAABtgAYh9eIAAinIAbAAIAACngAXh9eIg9hOIgJAAIAABOIgbAAIAAjrIAbAAIAACIIAKAAIA6hEIAhAAIhHBOIBLBZgAIt97QgLgEgFgMQgFgLAAgWIAAheIgZAAIAAgWIAZAAIAAgoIAbAAIAAAoIApAAIAAAWIgpAAIAABdQAAAMACAIQABAHAGACQAFADAKAAIAKgBIAIgBIAAAXIgJABIgKAAQgSAAgLgEgAAP94IgQgCIgNgCIAAgXIAOADIAQADIARAAQATABAKgGQAKgGAAgOQAAgKgDgGQgDgFgIgEQgIgDgQgEQgSgEgKgGQgKgGgEgJQgEgJAAgOQAAgVAPgMQAPgMAeAAQAMAAAMABQALACAHACIgCAXIgSgFQgLgCgLAAQgSAAgJAFQgJAGAAAOQAAAIADAFQADAFAHADIATAFQATAEAMAGQAMAGAFAKQAFAKAAAQQAAAZgRALQgQAMgfAAIgSgBgAGh95IAAinIAbAAIAAAeQAFgOAJgHQAJgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgIAIQgIAIgFAPIAABtgAFO95IAAinIAbAAIAACngAD995IAAhqQAAgNgDgJQgCgJgHgFQgHgEgOAAQgKgBgKADQgKACgIAHQgIAIgEAOIAABxIgbAAIAAjrIAbAAIAABcQAFgLAIgGQAJgGALgCQAKgCAKAAQAWAAAMAHQAMAHAGAMQAFAMgBAQIAAB0gAkI95IAAi+Ig/AAIAAgZICZAAIAAAZIg+AAIAAC+gAiT/NIAAgWIBcAAIAAAWgEAYiggnQgEgDAAgKQAAgKAEgDQAEgDAJAAQAIAAAEADQADADAAAKQAAAKgDADQgEADgIAAQgJAAgEgDgEAFQghCQgEgDAAgKQAAgKAEgDQADgDAJAAQAIAAAEADQAEADAAAKQAAAKgEADQgEADgIAAQgJAAgDgDg");
	this.shape_47.setTransform(-210.075,12.1265);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_48.setTransform(-196.95,-191.563,1,1.1349);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("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");
	this.shape_49.setTransform(-5.2,1.8015);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_50.setTransform(-55.05,-188.263,1,1.1349);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_51.setTransform(-196.95,-191.563,1,1.1349);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("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");
	this.shape_52.setTransform(-104.925,1.8015);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("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");
	this.shape_53.setTransform(-5.2,1.8015);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_54.setTransform(-196.95,-191.563,1,1.1349);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgOB3QgZABgSgIQgRgIgJgTQgJgTAAghQAAghAJgTQAJgTARgIQASgHAZAAQAXAAASAHQARAIAJATQAJATAAAhQAAAhgJATQgJATgRAIQgRAHgVAAIgDAAgAgsgZQgLAGgEAOQgFANABAZQAAAYAEAOQAFAOALAGQALAGASAAQARAAALgGQALgGAEgOQAFgOgBgYQABgZgFgNQgFgOgLgGQgKgGgRAAIgDAAQgRAAgKAGgAFfB1IgRgCIgNgCIAAgXIAOADIARADIARAAQATABAKgGQAKgGAAgOQAAgKgDgGQgDgFgIgEQgIgDgQgEQgSgEgKgGQgLgGgEgJQgEgJAAgNQAAgVAQgMQAPgMAeAAQAMAAAMABQALACAHACIgCAXIgSgFQgLgCgLAAQgSAAgJAFQgJAGAAAOQAAAHADAFQADAFAHADIATAFQATAEAMAGQAMAGAFAKQAFAKAAAQQAAAZgRALQgQAMgfAAIgSgBgAD4ByQgLgEgFgMQgFgLAAgWIAAhdIgZAAIAAgWIAZAAIAAgoIAbAAIAAAoIApAAIAAAWIgpAAIAABcQAAAMACAIQABAHAGACQAFADAKAAIAKgBIAIgBIAAAXIgJABIgKAAQgSAAgLgEgAmRB1IgSgCIgNgCIAAgXIAOADIASADIAQAAQAUABAJgGQAKgGAAgOQAAgKgCgGQgDgFgIgEQgJgDgPgEQgTgEgKgGQgKgGgEgJQgEgJAAgNQAAgVAPgMQAPgMAeAAQAMAAAMABQAMACAGACIgCAXIgSgFQgKgCgMAAQgRAAgJAFQgJAGAAAOQAAAHACAFQADAFAHADIAUAFQATAEAMAGQALAGAFAKQAFAKAAAQQAAAZgQALQgQAMgfAAIgSgBgABsB0IAAimIAbAAIAAAeQAFgOAJgHQAJgHAKgDQAKgCAKAAIAEAAIgBAYIgEAAQgLAAgKADQgKADgIAIQgIAIgFAOIAABtgAikB0IAAhqQAAgMgCgJQgDgJgHgFQgHgEgNAAQgLgBgKADQgJACgIAHQgIAIgFANIAABxIgbAAIAAjqIAbAAIAABcQAFgLAJgGQAJgGAKgCQAKgCALAAQAVAAANAHQAMAHAFAMQAFAMAAAPIAAB0g");
	this.shape_55.setTransform(162.525,63.8265);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_56.setTransform(-196.95,-191.563,1,1.1349);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgaBwQgRgIgKgTQgJgTAAghQAAghAJgTQAKgTARgIQAQgHAXAAQAWAAANAGQANAGAHALQAHAKADAMQACALAAANIAAAIIgBALIhxAIQAAASAFAMQAFALAMAGQALAGAUAAQAOAAAOgDQAOgDALgFIAAAYQgFADgKACIgTAEQgLABgMAAIgDAAQgWAAgQgHgAgPgZQgKAHgEAMQgFALAAASIBYgHQAAgNgCgKQgEgLgIgGQgJgHgSAAQgSAAgKAGgAlKBsQgPgLgFgTQgGgUAAgZQAAgYAGgSQAFgUAPgMQAPgMAdAAQAYAAAMAJQANAIAFAPIAAhhIAaAAIAADqIgWAAIgEgbQgFANgOAJQgNAIgWAAQgdAAgPgLgAk5gVQgJAJgCANQgDAPgBARQABARADAPQACAOAKAJQAKAJATAAQAUAAAMgIQALgIAFgOQAEgOgBgUQABgUgEgNQgFgPgLgIQgMgIgUAAQgUAAgKAKgAEUB1IgSgCIgNgCIAAgXIAOADIASADIAQAAQAUABAJgGQAKgGAAgOQAAgKgCgGQgEgFgIgEQgIgDgPgEQgTgEgKgGQgLgGgDgJQgEgJgBgNQABgVAPgMQAPgMAeAAIAYABQAMACAGACIgCAXIgSgFQgKgCgMAAQgSAAgJAFQgIAGgBAOQABAHACAFQADAFAHADIAUAFQASAEAMAGQAMAGAFAKQAFAKAAAQQAAAZgQALQgQAMgfAAIgSgBgACJB1IgSgCIgMgCIAAgXIANADIASADIAQAAQAUABAJgGQAKgGAAgOQAAgKgCgGQgDgFgIgEQgIgDgQgEQgTgEgKgGQgKgGgEgJQgEgJAAgNQAAgVAQgMQAPgMAeAAQAMAAALABQAMACAGACIgCAXIgSgFQgKgCgLAAQgSAAgJAFQgJAGAAAOQAAAHACAFQAEAFAGADIAUAFQATAEAMAGQALAGAGAKQAEAKAAAQQAAAZgQALQgQAMgfAAIgSgBgAigB0IAAimIAbAAIAAAeQAFgOAKgHQAIgHALgDQAKgCAKAAIADAAIgBAYIgEAAQgKAAgKADQgLADgIAIQgIAIgFAOIAABtg");
	this.shape_57.setTransform(74.2,-194.2235);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AorDEIAAmHIRXAAIAAGHg");
	this.shape_58.setTransform(-196.95,-191.563,1,1.1349);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17,p:{scaleX:1.1914,scaleY:1.2547,x:-415.3678,y:-32.2164}},{t:this.shape_16}]},5).to({state:[{t:this.shape_19,p:{x:-196.95,y:-191.563,scaleX:1,scaleY:1.1349}},{t:this.shape_17,p:{scaleX:1.1914,scaleY:1.2547,x:-415.3678,y:-32.2164}},{t:this.shape_18},{t:this.shape_16}]},43).to({state:[{t:this.shape_21,p:{x:-196.95,y:-191.563,scaleX:1,scaleY:1.1349}},{t:this.shape_19,p:{x:-55.05,y:-188.263,scaleX:1,scaleY:1.1349}},{t:this.shape_17,p:{scaleX:1.1914,scaleY:1.2547,x:-415.3678,y:-32.2164}},{t:this.shape_20}]},58).to({state:[{t:this.shape_46,p:{x:-196.95,y:-191.563,scaleX:1}},{t:this.shape_21,p:{x:-55.05,y:-188.263,scaleX:1,scaleY:1.1349}},{t:this.shape_19,p:{x:-265.0178,y:216.337,scaleX:1.1914,scaleY:1.1349}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_17,p:{scaleX:1.1914,scaleY:1.2547,x:-415.3678,y:-32.2164}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},65).to({state:[{t:this.shape_48,p:{x:-196.95,y:-191.563,scaleX:1}},{t:this.shape_46,p:{x:-55.05,y:-188.263,scaleX:1}},{t:this.shape_21,p:{x:-5.0178,y:25.687,scaleX:1.1914,scaleY:1.1349}},{t:this.shape_19,p:{x:-265.0178,y:216.337,scaleX:1.1914,scaleY:1.1349}},{t:this.shape_17,p:{scaleX:1.1914,scaleY:1.2547,x:-415.3678,y:-32.2164}},{t:this.shape_47}]},59).to({state:[{t:this.shape_51,p:{x:-196.95,y:-191.563}},{t:this.shape_50,p:{x:-55.05,y:-188.263,scaleX:1}},{t:this.shape_48,p:{x:232.25,y:-210.213,scaleX:1}},{t:this.shape_46,p:{x:435.55,y:-63.563,scaleX:1}},{t:this.shape_21,p:{x:-5.0178,y:25.687,scaleX:1.1914,scaleY:1.1349}},{t:this.shape_19,p:{x:-265.0178,y:216.337,scaleX:1.1914,scaleY:1.1349}},{t:this.shape_17,p:{scaleX:1.1914,scaleY:1.2547,x:-415.3678,y:-32.2164}},{t:this.shape_49}]},56).to({state:[{t:this.shape_50,p:{x:-196.95,y:-191.563,scaleX:1}},{t:this.shape_48,p:{x:-55.05,y:-188.263,scaleX:1}},{t:this.shape_46,p:{x:232.25,y:-210.213,scaleX:1}},{t:this.shape_21,p:{x:-5.0178,y:25.687,scaleX:1.1914,scaleY:1.1349}},{t:this.shape_19,p:{x:-265.0178,y:216.337,scaleX:1.1914,scaleY:1.1349}},{t:this.shape_17,p:{scaleX:1.1914,scaleY:1.2547,x:-415.3678,y:-32.2164}},{t:this.shape_52}]},66).to({state:[{t:this.shape_51,p:{x:-196.95,y:-191.563}},{t:this.shape_50,p:{x:-55.05,y:-188.263,scaleX:1}},{t:this.shape_48,p:{x:232.25,y:-210.213,scaleX:1}},{t:this.shape_46,p:{x:435.55,y:-63.563,scaleX:1}},{t:this.shape_21,p:{x:-5.0178,y:25.687,scaleX:1.1914,scaleY:1.1349}},{t:this.shape_19,p:{x:-265.0178,y:216.337,scaleX:1.1914,scaleY:1.1349}},{t:this.shape_17,p:{scaleX:1.1914,scaleY:1.2547,x:-415.3678,y:-32.2164}},{t:this.shape_52}]},61).to({state:[{t:this.shape_51,p:{x:-196.95,y:-191.563}},{t:this.shape_50,p:{x:-55.05,y:-188.263,scaleX:1}},{t:this.shape_48,p:{x:232.25,y:-210.213,scaleX:1}},{t:this.shape_46,p:{x:435.55,y:-63.563,scaleX:1}},{t:this.shape_21,p:{x:-5.0178,y:25.687,scaleX:1.1914,scaleY:1.1349}},{t:this.shape_19,p:{x:-265.0178,y:216.337,scaleX:1.1914,scaleY:1.1349}},{t:this.shape_17,p:{scaleX:1.1914,scaleY:1.2547,x:-415.3678,y:-32.2164}},{t:this.shape_49}]},68).to({state:[{t:this.shape_54,p:{x:-196.95,y:-191.563}},{t:this.shape_51,p:{x:-55.05,y:-188.263}},{t:this.shape_50,p:{x:232.25,y:-210.213,scaleX:1}},{t:this.shape_48,p:{x:435.55,y:-63.563,scaleX:1}},{t:this.shape_46,p:{x:418.2305,y:15.737,scaleX:0.9039}},{t:this.shape_21,p:{x:-5.0178,y:25.687,scaleX:1.1914,scaleY:1.1349}},{t:this.shape_19,p:{x:-265.0178,y:216.337,scaleX:1.1914,scaleY:1.1349}},{t:this.shape_17,p:{scaleX:1.1914,scaleY:1.2547,x:-415.3678,y:-32.2164}},{t:this.shape_53}]},1).to({state:[{t:this.shape_56,p:{x:-196.95,y:-191.563}},{t:this.shape_54,p:{x:-55.05,y:-188.263}},{t:this.shape_51,p:{x:232.25,y:-210.213}},{t:this.shape_50,p:{x:435.55,y:-63.563,scaleX:1}},{t:this.shape_48,p:{x:418.2305,y:15.737,scaleX:0.9039}},{t:this.shape_46,p:{x:-5.0178,y:25.687,scaleX:1.1914}},{t:this.shape_21,p:{x:-265.0178,y:216.337,scaleX:1.1914,scaleY:1.1349}},{t:this.shape_19,p:{x:-415.3678,y:-32.2164,scaleX:1.1914,scaleY:1.2547}},{t:this.shape_53},{t:this.shape_17,p:{scaleX:1.1073,scaleY:1.1349,x:164.1718,y:65.037}},{t:this.shape_55}]},56).to({state:[{t:this.shape_58},{t:this.shape_56,p:{x:-55.05,y:-188.263}},{t:this.shape_54,p:{x:232.25,y:-210.213}},{t:this.shape_51,p:{x:435.55,y:-63.563}},{t:this.shape_50,p:{x:418.2305,y:15.737,scaleX:0.9039}},{t:this.shape_48,p:{x:-5.0178,y:25.687,scaleX:1.1914}},{t:this.shape_46,p:{x:-265.0178,y:216.337,scaleX:1.1914}},{t:this.shape_21,p:{x:-415.3678,y:-32.2164,scaleX:1.1914,scaleY:1.2547}},{t:this.shape_53},{t:this.shape_19,p:{x:164.1718,y:65.037,scaleX:1.1073,scaleY:1.1349}},{t:this.shape_55},{t:this.shape_17,p:{scaleX:1,scaleY:1.1349,x:73.65,y:-193.563}},{t:this.shape_57}]},52).to({state:[]},80).wait(236));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-929.9,-232.4,1420.7,472.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-929.9,-232.5,1421.1,472.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-929.9,-232.5,1420.7,472.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-929.9,-232.5,1421.1,472.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-929.9,-232.4,1420.7,472.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=null, rect, rect, rect, rect];


(lib.元件22复制3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"固定label+点读配置不需要label":0,"label10":670,"label0":1,"label1":5,"label2":48,"label3":106,"label4":171,"label5":230,"label6":286,"label7":482,"label8":538,"label9":590,"可以点击":670,"sweater":5,"Tshirt":48,"skirt":106,"shoes":171,"trousers":230,"shirt":352,"coat":413,"cap":482,"shorts":538,"dress":590,"?":0};
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
	this.frame_170 = function() {
		this.stop();
	}
	this.frame_229 = function() {
		this.stop();
	}
	this.frame_285 = function() {
		this.stop();
	}
	this.frame_351 = function() {
		this.stop();
	}
	this.frame_412 = function() {
		this.stop();
	}
	this.frame_481 = function() {
		this.stop();
	}
	this.frame_537 = function() {
		this.stop();
	}
	this.frame_589 = function() {
		this.stop();
	}
	this.frame_669 = function() {
		this.stop();
	}
	this.frame_670 = function() {
		this.stop();
		//this._cliMc.visible=true;
		
		this._cliMc._cliWordMc.visible=true;
	}
	this.frame_689 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(43).call(this.frame_47).wait(58).call(this.frame_105).wait(65).call(this.frame_170).wait(59).call(this.frame_229).wait(56).call(this.frame_285).wait(66).call(this.frame_351).wait(61).call(this.frame_412).wait(69).call(this.frame_481).wait(56).call(this.frame_537).wait(52).call(this.frame_589).wait(80).call(this.frame_669).wait(1).call(this.frame_670).wait(19).call(this.frame_689).wait(119));

	// _climc
	this._cliMc = new lib.clickname复制("synched",0);
	this._cliMc.name = "_cliMc";
	this._cliMc.setTransform(-20,12.15);

	this.timeline.addTween(cjs.Tween.get(this._cliMc).to({_off:true},738).wait(70));

	// 图层_1
	this.instance = new lib.元件61();
	this.instance.setTransform(235,18.75,1,1,0,0,0,66,51.6);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(286).to({_off:false},0).to({_off:true},23).wait(11).to({_off:false},0).to({_off:true},22).wait(466));

	// 图层_2
	this.instance_1 = new lib.元件55();
	this.instance_1.setTransform(-310.6,6.85,1,1,0,0,0,67.2,47.8);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.instance_2 = new lib.元件56();
	this.instance_2.setTransform(-217.5,-64.4,1,1,0,0,0,49.5,44.2);
	this.instance_2.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.instance_3 = new lib.元件57();
	this.instance_3.setTransform(-84.75,-57.2,1,1,0,0,0,51.9,42.4);
	this.instance_3.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.instance_4 = new lib.元件58();
	this.instance_4.setTransform(-313.95,176.5,1,1,0,0,0,49,19.1);
	this.instance_4.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.instance_5 = new lib.元件59();
	this.instance_5.setTransform(-4.25,-10.3,1,1,0,0,0,46.6,90.3);
	this.instance_5.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.instance_6 = new lib.元件60();
	this.instance_6.setTransform(202.95,-54.55,1,1,0,0,0,40.8,53.5);
	this.instance_6.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.instance_7 = new lib.元件61();
	this.instance_7.setTransform(235,18.75,1,1,0,0,0,66,51.6);
	this.instance_7.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.instance_8 = new lib.元件62();
	this.instance_8.setTransform(309.05,24.65,1,1,0,0,0,29.8,23);
	this.instance_8.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.instance_9 = new lib.元件63();
	this.instance_9.setTransform(139.65,-59.95,1,1,0,0,0,35.8,38.6);
	this.instance_9.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.instance_10 = new lib.元件64();
	this.instance_10.setTransform(69.75,-19.4,1,1,0,0,0,45.9,85.2);
	this.instance_10.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},5).to({state:[]},17).to({state:[{t:this.instance_1}]},6).to({state:[]},19).to({state:[{t:this.instance_2}]},1).to({state:[]},21).to({state:[{t:this.instance_2}]},12).to({state:[]},24).to({state:[{t:this.instance_3}]},1).to({state:[]},24).to({state:[{t:this.instance_3}]},13).to({state:[]},27).to({state:[{t:this.instance_4}]},1).to({state:[]},24).to({state:[{t:this.instance_4}]},8).to({state:[]},26).to({state:[{t:this.instance_5}]},1).to({state:[]},22).to({state:[{t:this.instance_5}]},11).to({state:[]},22).to({state:[{t:this.instance_6}]},1).to({state:[]},23).to({state:[{t:this.instance_6}]},11).to({state:[]},22).to({state:[{t:this.instance_6}]},10).to({state:[]},23).to({state:[{t:this.instance_6}]},10).to({state:[]},21).to({state:[{t:this.instance_7}]},7).to({state:[]},25).to({state:[{t:this.instance_7}]},14).to({state:[]},29).to({state:[{t:this.instance_8}]},1).to({state:[]},24).to({state:[{t:this.instance_8}]},8).to({state:[]},23).to({state:[{t:this.instance_9}]},1).to({state:[]},22).to({state:[{t:this.instance_9}]},7).to({state:[]},22).to({state:[{t:this.instance_10}]},1).to({state:[]},20).to({state:[{t:this.instance_10}]},12).to({state:[]},47).to({state:[]},69).wait(70));

	// 图层_3
	this.instance_11 = new lib.元件65("synched",0);
	this.instance_11.setTransform(35.25,282.55,1,1,0,0,0,469.9,577);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(808));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-949.9,-294.4,1485.2,595.6);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(-434.6,-294.4,970,595.6), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
		var wordAudio = new Audio('source/sound/dc/null.mp3');
		wordAudio.addEventListener('play', function () {
			//console.log('被点击的单词开始播放');
		});
		wordAudio.addEventListener('ended', function () {
			//重置黑色
			_this._mov._cliMc._cliWordMc.reset();
			_this._mov_jiantou.gotoAndStop(0);
		
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
							_this._mov_jiantou.gotoAndStop(0);
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
				//console.log("curID2", curId)
			} else {		
				curId = 0;
				//console.log("curID1", curId)
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
		    //_this._mov_jiantou.gotoAndPlay(wordName)
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
			_this._mov_jiantou.gotoAndStop(0);
			updata();
		}
		
		function updata() {
			_this.checkNum();
		    clearTimeout(timeoutFun);
			switch (pgid) {
				case "1":
					console.log("学习。");
					if (curId > len - 1) {
						curId = len - 1;
						return;
					}
					_this._mov.gotoAndPlay("label" + String(curId));
				    _this._mov_jiantou.gotoAndPlay("label" + String(curId));
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
				    console.log(data[pgid - 1][curId].label)
				    _this._mov1.gotoAndPlay(data[pgid - 1][curId].label);
				    //_this._mov1.gotoAndPlay("label" + String(curId));
					break;
				case "3":
					//console.log("拼读。");
					if (curId > len - 1) {
						curId = len - 1;
						return;
					}
				    _this._mov1.gotoAndPlay(data[pgid - 1][curId].label);
				     console.log(data[pgid - 1][curId].label)
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
	this._showbar.setTransform(672,1080.9);
	this._showbar._off = true;

	this.timeline.addTween(cjs.Tween.get(this._showbar).wait(2).to({_off:false},0).wait(2));

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
	this._playAndpause.setTransform(760.1,816.6,0.8056,0.8044,0,0,0,0.1,1.9);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this._playAndpause,p:{y:816.6}},{t:this.btnMc_2,p:{x:635.8}},{t:this.btnMc_3,p:{x:717.2}},{t:this.btnMc_1,p:{x:554.8}}]}).to({state:[{t:this._playAndpause,p:{y:658.55}},{t:this.btnMc_2,p:{x:606.55}},{t:this.btnMc_3,p:{x:687.95}},{t:this.btnMc_1,p:{x:525.55}},{t:this.instance},{t:this.btn_prev},{t:this.btn_next}]},1).wait(3));

	// move
	this.instance_1 = new lib.元件65("synched",0);
	this.instance_1.setTransform(674.3,606.6,1,1,0,0,0,469.9,577);

	this.instance_2 = new lib.scene01_bg();
	this.instance_2.setTransform(639.05,324.05);

	this.instance_3 = new lib.scene01_bg();
	this.instance_3.setTransform(639.05,324.05);

	this.instance_4 = new lib.scene01_bg();
	this.instance_4.setTransform(639.05,324.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},1).wait(3));

	// 单词
	this._gdIco = new lib.元件53();
	this._gdIco.name = "_gdIco";
	this._gdIco.setTransform(71.65,174.3,0.7,0.7,0,0,0,-8.3,125);

	this._gdMc = new lib.元件51();
	this._gdMc.name = "_gdMc";
	this._gdMc.setTransform(744.2,446.2,1,1,0,0,0,110,60);

	this._pdMc = new lib.单词拼读mc();
	this._pdMc.name = "_pdMc";
	this._pdMc.setTransform(742.2,458.35,1,1,0,0,0,110,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this._gdMc},{t:this._gdIco}]},2).to({state:[{t:this._pdMc}]},1).wait(1));

	// 图层_3
	this._mov_jiantou = new lib.元件22复制4_只留箭头();
	this._mov_jiantou.name = "_mov_jiantou";
	this._mov_jiantou.setTransform(639.05,324.05);

	this._mov = new lib.元件22复制3();
	this._mov.name = "_mov";
	this._mov.setTransform(639.05,324.05);

	this._mov1 = new lib.元件22复制2();
	this._mov1.name = "_mov1";
	this._mov1.setTransform(630.55,283.75,0.919,0.919);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this._mov},{t:this._mov_jiantou}]},1).to({state:[{t:this._mov1}]},1).wait(2));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape.setTransform(654,360);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({x:640},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(654,360,1280,840);
p.frameBounds = [rect, new cjs.Rectangle(110.8,360,1823.2,720), new cjs.Rectangle(338,360,1582,1085.6), new cjs.Rectangle(336,360,1584,1085.6)];
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