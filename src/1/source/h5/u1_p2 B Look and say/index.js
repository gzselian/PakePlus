(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[329,529,30,28],[242,557,16,9],[131,583,15,19],[272,509,55,22],[148,592,2,11],[180,565,1,2],[131,509,81,38],[224,561,5,15],[214,509,56,22],[131,549,52,14],[167,586,5,5],[172,565,6,15],[148,586,17,4],[180,570,5,15],[388,509,47,19],[154,565,16,19],[224,545,16,14],[214,533,33,10],[249,533,18,10],[185,549,37,19],[242,545,21,10],[329,509,57,18],[131,565,21,16],[0,509,129,129],[0,0,393,507]]}
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



(lib.Image_12 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_13 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_14 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_15 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_17 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image_20 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Image_21 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Image_23 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Image_27 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image_28 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Image_29 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Image_30 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Image_31 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Image_32 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Image_33 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Image_34 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Image_35 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Image_36 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Image_37 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Image_39 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Image_40 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Image_41 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Image_42 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Image_43 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.位图35复制 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(24);
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

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AzmDrIAAnVMAnNAAAIAAHVg");
	this.shape.setTransform(125.475,22.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect, rect, new cjs.Rectangle(0,-1,251,47)];


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

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgwAlIAAhKIBhAAIAABKg");
	mask.setTransform(4.9,3.75);

	// 图层_3
	this.instance = new lib.Image_42();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,9.8,7.5);
p.frameBounds = [rect, rect];


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

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiHApIAAhSIEPAAIAABSg");
	mask.setTransform(13.575,4.15);

	// 图层_3
	this.instance = new lib.Image_41();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,27.2,8.3);
p.frameBounds = [rect, rect];


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
	mask.graphics.p("AgwAYIAAgvIBhAAIAAAvg");
	mask.setTransform(4.925,2.4);

	// 图层_3
	this.instance = new lib.Image_40();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,9.9,4.8);
p.frameBounds = [rect, rect];


(lib.ClipGroup_75 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AhXAtIAAhZICvAAIAABZg");
	mask.setTransform(8.8,4.475);

	// 图层_3
	this.instance = new lib.Image_39();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,17.6,9);
p.frameBounds = [rect, rect];


(lib.ClipGroup_35 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgpAXIAAgtIBTAAIAAAtg");
	mask.setTransform(4.225,2.25);

	// 图层_3
	this.instance = new lib.Image_37();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,8.5,4.5);
p.frameBounds = [rect, rect];


(lib.ClipGroup_34 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AhMAWIAAgrICZAAIAAArg");
	mask.setTransform(7.725,2.225);

	// 图层_3
	this.instance = new lib.Image_36();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,15.5,4.5);
p.frameBounds = [rect, rect];


(lib.ClipGroup_33 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AglAfIAAg+IBKAAIAAA+g");
	mask.setTransform(3.75,3.15);

	// 图层_3
	this.instance = new lib.Image_35();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,7.5,6.3);
p.frameBounds = [rect, rect];


(lib.ClipGroup_32 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgkAtIAAhZIBJAAIAABZg");
	mask.setTransform(3.7,4.5);

	// 图层_3
	this.instance = new lib.Image_34();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,7.4,9);
p.frameBounds = [rect, rect];


(lib.ClipGroup_31_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AiZCaIAAkzIEyAAIAAEzg");
	mask.setTransform(15.35,15.375);

	// 图层_3
	this.instance = new lib.Image_43();
	this.instance.setTransform(0,0,0.2381,0.2381);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,30.7,30.7);
p.frameBounds = [rect, rect];


(lib.ClipGroup_31 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AhuAtIAAhZIDdAAIAABZg");
	mask.setTransform(11.125,4.5);

	// 图层_3
	this.instance = new lib.Image_33();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,22.3,9);
p.frameBounds = [rect, rect];


(lib.ClipGroup_30_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AiTCjIAAlFIEnAAIAAFFg");
	mask.setTransform(14.775,16.275);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#808080").s().p("AgHBEQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAQgBgGACgKIAEgRIAIhCIADgRQABgKgBgHIABAAQACAGAAAKIgBAQIgIBEIgBARQgCALgDAGIgBABIgBAAg");
	this.shape.setTransform(2.52,18.6167);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808080").s().p("AgLAcIgBAAIgBAAIgJgBQgGgCgBgFQAAgHAEgLIAEgGQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIACgEQAGgHAPgGIAMgEQAHgDAFACQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgDgBgHACIgKAEQgLAGgDADQgHAGgBAJQgBAKAJAFQABAAAAABQABAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgBgBg");
	this.shape_1.setTransform(3.5277,3.2094);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#808080").s().p("AAVAKIgRACQgJAAgMgDIgLgCIgLgBQgBAAAAABQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQADgDAKgBIAXgBQAbAAANgIQAFgDAEAFQAEAFgEAEIgGAFIAAABQAAADgDABIgFABQgEAAgDgCg");
	this.shape_2.setTransform(5.53,5.3305);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#989898").s().p("AAhAdIgEAAIgHABIgIgCIgBABQgKABgIgDIgCgBIgDABQgGAAgHgDQgSAGgCgMQgCgMAIgOQAFgHAPgKIABgBQADgCADACQADgDAGgBQAHgBAJADQAWAIAEAJQADAFgBAGQACADgBAFQABAGgDAHIAAABIABAEQAAAFgFAAQgDAAgCgCgAgfAFIgBAGIAAAEQABABAFgDIACgBIABAAIABgBIgDgBIgFgFgAgEAMIAAgEIgDADIgBABIAEAAIAAAAgAANAGIgCABIACADIABgBIAAAAIABAAIABgCIABgBIAAAAIgEAAgAgcAAIABgBIgBgBIAAACg");
	this.shape_3.setTransform(5.0138,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#989898").s().p("AgGANIgCgBQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQgIgHAMgJQAJgHAMgBQABAAAAAAQABAAAAABQABAAAAAAQABABAAABQAAAAABABQAAAAAAABQAAAAAAABQgBABAAAAIgCADIABABQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIgCABQgDAAgFAEIgHAJIgDABIgDgBg");
	this.shape_4.setTransform(5.253,3.9444);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4D4D").s().p("AgLAWQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQALgNADgGQADgGABgHIAEgKIACAAQAEAIgIASQgHAQgJAEIgBABIgCgCg");
	this.shape_5.setTransform(7.686,9.4063);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D4D4D").s().p("AgKAVQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAFgFIAGgHQAEgHABgOQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAFAMgHAOQgJAPgHAAIgDgBg");
	this.shape_6.setTransform(7.475,9.7035);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6E6E5").s().p("AAHAXIgHgKIAAgDIgCgDIgEgFQgEgFAAgEIACgHQABgFgBgDIABgBQADACAAAGQgBALADAEIAEADIADAFIABAGIAFAGQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAIgBABIgCgBg");
	this.shape_7.setTransform(1.9667,8.47);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6E6E5").s().p("AgLBFQAFhFAPhGIABgBQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAAAQgJBEgHBHQAAADgEAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBAAAAg");
	this.shape_8.setTransform(1.9219,18.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#989898").s().p("AAAATIgCgCQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgBIABAAIgBgBIAAAAIAAgBIAAgBIAAAAIAAgEIAAgFIAAgEIAAgGQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAIAAgBIAAAAIABgCIABgCQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABABAAIgBAKIABACIgBAOIgBAHQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgBAAgAAFACIgBAEIABAAIAAgKIAAAAIAAAGg");
	this.shape_9.setTransform(2.6458,27.1792);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#989898").s().p("AAIAKIgJgDIgCgCIAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIAAgGIAAgCIAAAAIgBgDQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABABAAAAQAAAAAAABIACAEIACACIACAEIAFADQADACABACQABABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgCgBg");
	this.shape_10.setTransform(1.3183,6.5865);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#989898").s().p("AgEAFQgCgDAFgDIADgDIADgBIABABIgDACIgCACIgBADIgCADIgBAAIgBgBg");
	this.shape_11.setTransform(2.1442,9.645);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#989898").s().p("AALAfQgFgCACgEIgFABQgEABgCgEQgFAAgFgDIADAAIABgEIgIgDIAAAAQgBAEAEACIABABQgHABgFgBQgGgBgDgFQgFgEABgGIAAAAQgHgEgDgGQgDgGADgEQgBgFACgFIABAAIAAgBIAAgBIAAABIAAgBQACgFAFACIABAAQAXAHARACIAcgBQAEAAABADIAAABIABgBQAEgBADABQAFAAABAEIABABIAAAAIAAABQADALgNAKIgMALIgCACIgHAJQgCAEgDAAIgDgCgAAjAJIAAABIACgBIgBgBIgBABgAgRgEIAAgCIgDgBIAAAAIgBACIABAAIADABgAgvgagAgugbIAAAAIgBABIABgBgAgugbIAAAAg");
	this.shape_12.setTransform(5.2019,8.9625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#989898").s().p("AgQBKQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAAAIAHgiIAVhrQABgEAEABQAFABgBAEIgWBrIgJAgIgBACQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAIgCAAg");
	this.shape_13.setTransform(5.1591,18.2681);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#989898").s().p("AADAWIAAAAIgBgBIABABQgCAAgCgBIgBgBIgBABQgJABgBgNIAAgIQABgFAEgJIABgCQABgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAIADAAIAAAAIAAAAIAAgCQAAgEAFABQAEABAAAEIAAABIAAAAIgCAHIABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQAEABgBAEIAAAHIgCANQAAAFgFAAQgBAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_14.setTransform(2.359,23.69);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#989898").s().p("AAFAdQgBgBgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAIgBgBIAAAAQgDgCABgEIAAgCIAAAAQgEgBgBgDIgDAHQAAABgBAAQAAABAAAAQgBAAgBAAQAAABgBAAQgDgBgCgCIgDAAQgEAAAAgEIAAgBIAEgcIAAgIQABgDAEAAIABAAIABAAQABgBAAAAQAAAAABABQAAAAAAAAQAAABABAAQAAAEAAADIgBABIAAAFIABgGIgBAIIABAMIAMgcQABgDAEAAQAEAAAAADIAAAEQABgBAAAAQAAAAABAAQAAAAABAAQABAAAAABIADACIABAAIACABQAFABgBAEIgNAkIABgFIgCAEIgCAEIAAABQgBABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBAAg");
	this.shape_15.setTransform(4.4398,13.3469);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#989898").s().p("AgDA/QgFgBABgFIAAgBIAAgDQgFgCABgFIAAgDQgCAJgDAFQgCADgEgBQgEgBAAgDIANhsQAAgEAFAAIABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIABABIACAAIACAAQABgEAFAAQAGABgBAFIAAAAIACAAQAEABAAAEIADAAQAEABAAACQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIgYBkIAAABIgBAAIAAACQgBAEgDAAIgBAAg");
	this.shape_16.setTransform(3.731,17.425);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.2,0.4,10.1,28.7);
p.frameBounds = [rect, rect];


(lib.ClipGroup_30 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgKAkIAAhHIAVAAIAABHg");
	mask.setTransform(1.125,3.6);

	// 图层_3
	this.instance = new lib.Image_32();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,2.3,7.2);
p.frameBounds = [rect, rect];


(lib.ClipGroup_29_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AiTCjIAAlFIEnAAIAAFFg");
	mask.setTransform(14.775,16.275);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323333").s().p("AAqAiQgDgBgBgDIAAgTQAAgLgEgHQgJgQgWgCQgYgCgNARQgEAGgDAKIgFARIgBAAQgBgKADgLQAEgKAGgIQANgRAbAAQAaAAALAUQALAUgGAYQgBAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAIgBAAg");
	this.shape.setTransform(5.298,3.3781);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#323333").s().p("AAqARQgCgEABgGQACgHgBgBQgBgGgLgBIgQAAQghgBgagIIABAAIAkADIAkACQAPAAACAHQACADgCAHQgBAHABAEQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgCgBg");
	this.shape_1.setTransform(5.9375,7.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#323333").s().p("AgYARIgKgDQgGgCgBgEQgBgHADgWQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAABIAAAYQAAAGAKACQAFABAJABIAbADIAaAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgQABQgVAAgbgGg");
	this.shape_2.setTransform(4.2399,7.776);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#808080").s().p("AgJAHQgKgBgHgEIgLgDIgFgDQgDgCgDAAIAAgBQADgCADABIAEABIAHACIAIADQAFACAHAAQAVABAigBQAFgBAAAFQAAAFgFAAIgPAAQgSAAgUgCg");
	this.shape_3.setTransform(5.425,6.7163);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,10.5,10.1);
p.frameBounds = [rect, rect];


(lib.ClipGroup_29 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgnAJIAAgRIBPAAIAAARg");
	mask.setTransform(4,0.85);

	// 图层_3
	this.instance = new lib.Image_31();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,8,1.7);
p.frameBounds = [rect, rect];


(lib.ClipGroup_28_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AiTCjIAAlFIEnAAIAAFFg");
	mask.setTransform(14.775,16.275);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323333").s().p("AgQBIQAAgBgBAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAEgEACgLIAShaQAEgZAFgLIABAAQAAAIgGAhIgOBQIgDANQgCAJgHACIgBAAIgBgBg");
	this.shape.setTransform(5.375,19.0813);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#323333").s().p("AALBMQgNgDgGgDQgGgDAAgGQAAgFACgSIANhxIAAAAIgFBPIgDAoIgCAMQAAAHAEADIAIADIAJADQABAAABABQAAAAAAAAQAAABABAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgCAAg");
	this.shape_1.setTransform(2.1,18.6417);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#323333").s().p("AgDALQgUgDgJgFQgLgFAEgJIABgBIABACQgBAGAHAEIANACIATAEQANADAKgDQAIgDAHgJIACAAQAAAAAAAAQAAAAAAAAQABAAgBABQAAAAAAAAQgIAMgIAEQgFACgIAAIgPgCg");
	this.shape_2.setTransform(5.0417,10.4817);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#323333").s().p("AgJgNIABAAIASAaIgBABIgSgbg");
	this.shape_3.setTransform(7.75,4.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#323333").s().p("AAJAQIgJgQIgKgPIABgBIATAfIAAABIgBABIAAgBg");
	this.shape_4.setTransform(6.5083,4.6125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#323333").s().p("AgKgUIAAgBIAVArIgBAAQgHgLgNgfg");
	this.shape_5.setTransform(4.95,4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#323333").s().p("AgJgRIABAAQAPAWADANIgBAAQgLgYgHgLg");
	this.shape_6.setTransform(3.7,4.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#323333").s().p("AAJARIgUghIABAAQAMAOAJASIAAABIgCAAg");
	this.shape_7.setTransform(2.7042,4.4833);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#323333").s().p("AgPALQALgHAUgPIABABQgMAMgUAKg");
	this.shape_8.setTransform(6.95,4.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#323333").s().p("AgVARIAVgRIAUgSIABABQgNARgbASg");
	this.shape_9.setTransform(6.15,3.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#323333").s().p("AAVgUIABABQgQATgbAVg");
	this.shape_10.setTransform(4.925,3.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#323333").s().p("AgXAUIAZgUIAKgKQAGgGAEgEQABABAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIgLALIgLAJIgZATg");
	this.shape_11.setTransform(3.5143,2.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.7,0.8,8.5,25.6);
p.frameBounds = [rect, rect];


(lib.ClipGroup_28 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgLAjIAAhFIAXAAIAABFg");
	mask.setTransform(1.225,3.475);

	// 图层_3
	this.instance = new lib.Image_30();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,2.5,7);
p.frameBounds = [rect, rect];


(lib.ClipGroup_27_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AiTCjIAAlFIEnAAIAAFFg");
	mask.setTransform(14.775,16.275);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323333").s().p("AhgA4QgPgCgLgJQgNgKADgOIABAAIABAAQAIAcAjgCQAlgCAHgUIABgGQgmABgEgUQgDgOASgFQAQgEAMAHQAMAHAAARIAAABIAOgDQAVgGAHgOIgGgDQgLgGgDgLQgCgHAEgFQAEgEAHABQAOABAFAPQACAGgBAHQAKACAOgBQAsgCAjghQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAgBABQgVAbglAKQgeAIgXgGIgEAHQgPATghAEQgCAKgFAIQgIAMgSAFQgMADgMAAIgJAAgAhKgCQAAAJAOACQAKACAKgBIAAgHQgCgLgMgCIgFAAQgQAAABAIgAABgmQAAADACADIAGAGIAHADQAAgFgBgEQgDgGgGgCIgCAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgBAAAAABg");
	this.shape.setTransform(16.1742,26.9455);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#323333").s().p("AgBAQQgGgCgBgIQAAgFACgRIABAAIACAVQAAAEADACIACABQABAAAAgGIAAgGIACgMQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIgCAPIAAAJQgBAEgEAAIgDgBg");
	this.shape_1.setTransform(2.7258,27.5536);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.9,21.4,27.7,11.2);
p.frameBounds = [rect, rect];


(lib.ClipGroup_27 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgKAKIAAgTIAVAAIAAATg");
	mask.setTransform(1.125,1);

	// 图层_3
	this.instance = new lib.Image_29();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,2.3,2);
p.frameBounds = [rect, rect];


(lib.ClipGroup_26_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AiTCjIAAlFIEnAAIAAFFg");
	mask.setTransform(14.775,16.275);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#323333").s().p("AgEAOQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBQAFgHACgDQACgGgDgIIABAAQAHAEgDAKQgCAHgFAHIgCABIgBgBg");
	this.shape.setTransform(8.6397,8.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#323333").s().p("AgOAEIABgBQAIABAGgDQAEgBAGgGIACAAIACACQAAAGgNAFIgFABQgFAAgGgEg");
	this.shape_1.setTransform(8.95,9.3875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#323333").s().p("AgLAKIAGgDQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBABAAIAHgFQADgCAEgGQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIgBABQgGAHgDACIgCADIgLAFg");
	this.shape_2.setTransform(7.3417,10.5833);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#323333").s().p("AgNBIQgDgBAAgDQAGglAIggQAKgzAHgTQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQgBAPgEAUIgIAjIgNBHQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgCAAg");
	this.shape_3.setTransform(4.876,18.9625);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(3.2,7.4,7.2,18.8);
p.frameBounds = [rect, rect];


(lib.ClipGroup_26 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("Ah7AgIAAg/ID3AAIAAA/g");
	mask.setTransform(12.4,3.225);

	// 图层_3
	this.instance = new lib.Image_28();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,24.8,6.5);
p.frameBounds = [rect, rect];


(lib.ClipGroup_25_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AkRCIIAAkPIIjAAIAAEPg");
	mask.setTransform(27.4,13.6);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkAPIgEgGIAFgMQAHgNAHgEQAGgEAJAEIANAIQAJAEAKgSQAFAFAKANQgKAYgPAGQgKADgGgJQgIgKgDAAQgFgBgFALIgFALQgFgFgFgHg");
	this.shape.setTransform(26.6,16.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#79A7AD").s().p("AgYAXQgGgNAIgRQAHgQALgIQANgLANAMIAGAGQgMgFgHAEQgIAFgIANQgLANABAJIADAXQgHgIgDgHg");
	this.shape_1.setTransform(24.9259,14.6495);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5DFEA").s().p("AgTAmQgSgOgHgPQgGgLAJgTQAHgPAKgIQAOgLAMAMQANAKAMANQAUAVAAALQgBAMgMAMQgMAMgMACIgDAAQgKABgQgNg");
	this.shape_2.setTransform(26.8515,15.9741);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#93CAD1").s().p("AgOArQgPgKgIgJQgEgEgFgMIgDgKIArgzQAQAJATAUQAWAXgBANQgBAQgJAMQgKALgNACIgDABQgLAAgRgLg");
	this.shape_3.setTransform(27.1771,16.4583);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#547478").s().p("AgkApQgOgQgFgSQgEgLAGgUIAHgRQAGgJAEgDQAGgEAOgCQAQgDAZATQAcAUAEAXQAEAXgUATQgSATgXAAQgSAAgSgUg");
	this.shape_4.setTransform(27.6696,16.7795);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EA601A").s().p("AhDAkQgHgKAGgMIAIgLIASAPQAXANAUgHQAUgGAEgVQAGgiACgEQAIgPAIgDQAGgCAHAGQAJAGABAHIgIAHQgHAJABAEIgFgDQgEgBgBAEQgGAigDAHQgMAlgXADIgQABQglAAgSgYg");
	this.shape_5.setTransform(38.0241,17.1505);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E84818").s().p("AAGAPQgDgEgKgBIgJgDIABgLIADgLQAPgCAJAHQAFAEABADQgEATgFAAIgDgBg");
	this.shape_6.setTransform(21.545,13.6618);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghAYQAAgUAHgGQAEgEAHACIAMADQAIgBALgdQAKADAIAFQgBAZgKAMQgGAHgLgCQgKgCgEAAQgEABgCAHIAAAHg");
	this.shape_7.setTransform(13.425,10.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EE7D1A").s().p("AgZAAIAEgKQACgEAGgDQALAGAPAEQAHADADADQAEAFgBAOQghgJgSgJg");
	this.shape_8.setTransform(14.86,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA601A").s().p("AABAMQABgNgDgGQgDgDgHgDIAPACQAEACABAFQAEAFgCAOg");
	this.shape_9.setTransform(17.3725,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A5D8E0").s().p("AgMAeQgIgTAIgWQAIgWAHAAQAFAAAJACQgHAEgFALQgLATAEAfg");
	this.shape_10.setTransform(11.2185,10.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#79A7AD").s().p("AgRAcIAQg/QAGAAANAEQgFABgDAGQgFAJgEARQgEASABAGQABAEADAGg");
	this.shape_11.setTransform(11.675,10.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B5DFEA").s().p("AgjAXQgIgSAIgXQAIgVAIAAQAIgBATAGQAXAHAFAIQAGAIgEAVQgFAXgJAFQgDACgFAAQgQAAgjgRg");
	this.shape_12.setTransform(13.515,10.9576);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#93CAD1").s().p("AgJApQgSgFgHgEQgFgDgCgEIgBgEIAQg/IAFgBQAGgCAEAAIAXAGQAYAIAFALQAGANgIAZQgHAagLABIgEABQgKAAgQgFg");
	this.shape_13.setTransform(14.2333,11.2033);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#547478").s().p("AgZAzQgVgJgBgOQgDgfAMghIANgMQAQgLAPADQAUADALANQALAMABARQAAAWgGASQgIAZgTADIgLABQgPAAgPgHg");
	this.shape_14.setTransform(15.6229,11.5581);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E84818").s().p("ABbALQgSgXgVgGQgagHgIAPQgNAXgZAJQghALg6gQIgygRQADgPALgBQAjARA2gIQAwgHANgRQAPgRAfAFQAjAEAaAgQAYAcAQAJQAJAEADgBIgSAMQgkgKgRgYg");
	this.shape_15.setTransform(28.225,9.0018);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(9.6,4.5,35.7,18.7);
p.frameBounds = [rect, rect];


(lib.ClipGroup_25 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AiEAzIAAhmIEJAAIAABmg");
	mask.setTransform(13.325,5.15);

	// 图层_3
	this.instance = new lib.Image_27();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,26.7,10.3);
p.frameBounds = [rect, rect];


(lib.ClipGroup_24_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AiiCjIAAlFIFFAAIAAFFg");
	mask.setTransform(16.275,16.275);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231815").s().p("AhIBgIAAgDIAAAAQAGAAAGgDQAPgHAIgRQAIgRACgUQACgbAHgYQAIgaAKgRQAKgMAMgIQASgKAWAAIALAAIAAADIgLAAQgVAAgRAKQgQAKgJARQgSAegGA2QgDAhgOARQgJAMgOAEIgHABg");
	this.shape.setTransform(12.1,13.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231815").s().p("AhQBnQAFgVANgeQAbg7AlgoQAjgmArgSIABADQgqASghAkQgbAbgVAmQgYAsgLApg");
	this.shape_1.setTransform(16.7,16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231815").s().p("AhGBeQgDgNAAgIQAAgMAFgKQAIgLAOgFQAMgEAagFQAWgFAOgOQANgKAJgTQAOgeAHgyIADABQgIA4gRAfQgNAYgWALQgKAFgPAEIgiAIQgOAFgGAKQgFAIAAAMQAAALADAIQACAIABABIgDACg");
	this.shape_2.setTransform(19.425,18.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231815").s().p("AgXAtQgfgRgWgcQgbgfgIggIACgBIABAAIAAABIAAACIAEAJQAGAPAHANQAcAtAqAVQAkAUAwAAQAXAAAagFIAAADQgaAFgXAAQgwAAgmgUg");
	this.shape_3.setTransform(14.75,19.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231815").s().p("AhcBeQgngnAAg3QAAg2AngmQAngnA1AAQA3AAAmAnQAnAmAAA2QAAA3gnAnQgmAmg3AAQg1AAgngmgAhahaQgmAmAAA0QAAA1AmAmQAlAmA1AAQA1AAAmgmQAmgmAAg1QAAg0gmgmQglgmg2AAQg1AAglAmg");
	this.shape_4.setTransform(16.25,16.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E95513").s().p("AhbBdQgngnABg2QgBg1AngmQAmgnA1AAQA2AAAmAnQAnAmAAA1QAAA2gnAnQgmAmg2AAQg1AAgmgmg");
	this.shape_5.setTransform(16.25,16.275);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(3.1,3.1,26.4,26.5);
p.frameBounds = [rect, rect];


(lib.ClipGroup_21 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgEASIAAgjIAJAAIAAAjg");
	mask.setTransform(0.5,1.8);

	// 图层_3
	this.instance = new lib.Image_23();
	this.instance.setTransform(0,0,0.2025,0.2377);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1,3.6);
p.frameBounds = [rect, rect];


(lib.ClipGroup_19 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AhgAtIAAhZIDBAAIAABZg");
	mask.setTransform(9.725,4.5);

	// 图层_3
	this.instance = new lib.Image_21();
	this.instance.setTransform(0,0,0.2397,0.2376);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,19.4,9);
p.frameBounds = [rect, rect];


(lib.ClipGroup_18 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AAAABIAAgCIABAAIAAACg");
	mask.setTransform(0.1,0.15);

	// 图层_3
	this.instance = new lib.Image_20();
	this.instance.setTransform(0,0,0.1811,0.1499);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,0.2,0.3);
p.frameBounds = [rect, rect];


(lib.ClipGroup_15 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgBANIAAgZIACAAIAAAZg");
	mask.setTransform(0.15,1.275);

	// 图层_3
	this.instance = new lib.Image_17();
	this.instance.setTransform(0,0,0.1499,0.2324);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,0.3,2.6);
p.frameBounds = [rect, rect];


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
	mask.graphics.p("AiBA0IAAhnIEDAAIAABng");
	mask.setTransform(13,5.175);

	// 图层_3
	this.instance = new lib.Image_15();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,26,10.4);
p.frameBounds = [rect, rect];


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
	mask.graphics.p("AgjAsIAAhXIBHAAIAABXg");
	mask.setTransform(3.55,4.425);

	// 图层_3
	this.instance = new lib.Image_14();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,7.1,8.9);
p.frameBounds = [rect, rect];


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
	mask.graphics.p("AgkAUIAAgnIBJAAIAAAng");
	mask.setTransform(3.675,1.975);

	// 图层_3
	this.instance = new lib.Image_13();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,7.4,4);
p.frameBounds = [rect, rect];


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
	mask.graphics.p("AhHBCIAAiDICPAAIAACDg");
	mask.setTransform(7.15,6.6);

	// 图层_3
	this.instance = new lib.Image_12();
	this.instance.setTransform(0,0,0.48,0.48);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,14.3,13.2);
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

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egp2AGnQh4AAAAh4IAAj9QiQhRhjj1QCUBVBfgCIAAhtQAAh4B4AAMBXgAAAQB4AAAAB4IAAJdQAAB4h4AAg");
	this.shape.setTransform(304.175,42.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,608.4,84.7);
p.frameBounds = [rect, rect];


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

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.149)").s().p("A35J2IAAzrMAvzAAAIAATrg");
	this.shape.setTransform(153,63);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFAED").s().p("A35J2IAAzrMAvzAAAIAATrg");
	this.shape_1.setTransform(153,63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},4).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect=new cjs.Rectangle(0,0,306,126), rect, rect, rect, rect, rect];


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
	this.shape.graphics.f().s("#F99703").ss(0.5,1,1).p("AgMgKIAZAAQAFAAADADQADADAAAEIAAAAQAAAFgDADQgDADgFAAIgZAAQgFAAgDgDQgDgDAAgFIAAAAQAAgEADgDQADgDAFAAg");
	this.shape.setTransform(20.2868,10.9643,0.7179,0.7184,-1.0078);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F99703").s().p("AgMALQgFAAgDgDQgDgDAAgFIAAAAQAAgEADgDQADgDAFAAIAZAAQAFAAADADQADADAAAEIAAAAQAAAFgDADQgDADgFAAg");
	this.shape_1.setTransform(20.2868,10.9643,0.7179,0.7184,-1.0078);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAACsQgKABgIgJQgIgHAAgLIAAkjQAAgLAIgIQAIgHAKAAIAAAAQALAAAIAHQAIAIAAALIAAEjQAAALgIAHQgIAJgLgBg");
	this.shape_2.setTransform(22.5995,22.3228,0.3437,0.2691);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAACsQgKABgIgJQgIgHAAgLIAAkjQAAgLAIgIQAIgHAKAAIAAAAQALAAAIAHQAIAIAAALIAAEjQAAALgIAHQgIAJgLgBg");
	this.shape_3.setTransform(18.0495,22.3228,0.3437,0.2691);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F99703").s().p("Ai9BQQghAAgXgYQgYgXAAghQAAggAYgYQAXgXAhAAIF7AAQAhAAAYAXQAXAYAAAgQAAAhgXAXQgYAYghAAg");
	this.shape_4.setTransform(20.1713,14.1731,0.3437,0.344,-0.2288);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F99703").s().p("Ag2BgQglAAAAglIgNiYIgBgBIABgBIDQAAIACACIAAAAIgSCYQAAAlgmAAg");
	this.shape_5.setTransform(20.4003,23.3432,0.718,0.7184);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F99703").ss(3,1,1).p("AiQCQQg8g7AAhVQAAhUA8g8QA8g8BUAAQBUAAA8A8QAJAIAHAJQADAEAEAFQAmA0AABCQAABVg9A7Qg8A9hUAAQhUAAg8g9g");
	this.shape_6.setTransform(20.475,20.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiQCQQg8g7AAhVQAAhUA8g8QA8g8BUAAQBUAAA8A8IAQARIAHAJQAmA0AABCQAABVg9A7Qg8A9hUAAQhUAAg8g9g");
	this.shape_7.setTransform(20.475,20.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.5,-1.5,44,44);
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

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F69602").ss(6,1,1).p("ABChxIAADjAhBhxIAADj");
	this.shape.setTransform(20.4957,20.4917,0.7181,0.7185);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F69602").ss(3,1,1).p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQBUBUAAB1QAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_1.setTransform(20.4598,20.4917,0.7181,0.7185);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjJDIQhThSAAh2QAAh1BThUQBUhTB1AAQB2AABTBTQBUBUAAB1QAAB2hUBSQhTBVh2AAQh1AAhUhVg");
	this.shape_2.setTransform(20.4598,20.4917,0.7181,0.7185);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.5,-1.5,44,44);
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

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F99703").s().p("Ah9CPQgHgHgBgIIgBj7QABgIAEgHIAEgEQAIgIAMAAQAFAAAFACIDcB/IABACQAFAEACAFQACAFAAAFQAAAGgCAEQgCAFgFAEIgEAFIjZB9QgFACgFAAQgMAAgIgIg");
	this.shape.setTransform(23.281,20.4775,0.684,0.6844);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F99703").ss(3,1,1).p("AiKCKQg6g5AAhRQAAhQA6g6QA6g5BQAAQBRAAA6A5QA6A6AABQQAABRg6A5Qg6A6hRAAQhQAAg6g6g");
	this.shape_1.setTransform(20.4871,20.4731,1.0426,1.0432);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiKCKQg5g5gBhRQABhQA5g6QA5g5BRAAQBRAAA5A5QA7A6AABQQAABRg7A5Qg5A6hRAAQhRAAg5g6g");
	this.shape_2.setTransform(20.4871,20.4731,1.0426,1.0432);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1.5,-1.5,44,44);
p.frameBounds = [rect, rect];


(lib.暂停播放组 = function(mode,startPosition,loop,reversed) {
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
		_this.stop();
		
		// 初始化状态
		function init(showPlay) {
		    _this.b_play.visible = showPlay;  // 根据参数控制播放按钮的显示
		    _this.b_pause.visible = !showPlay; // 根据参数控制暂停按钮的显示
		}
		_this.setStu=function(showPlay){
			
		    _this.b_play.visible = showPlay;  // 根据参数控制播放按钮的显示
		    _this.b_pause.visible = !showPlay; // 根据参数控制暂停按钮的显示
			
		}
		
		// 事件监听
		this.b_play.addEventListener("click", () => fl_MouseClickHandler_3(true));
		this.b_pause.addEventListener("click", () => fl_MouseClickHandler_3(false));
		
		function fl_MouseClickHandler_3(isPlay) { 
		    if (isPlay) {
		        _this.parent.onPlay();
		        _this.b_play.visible = false; 
		        _this.b_pause.visible = true;  
		    } else {
		        _this.parent.onPause();
		        _this.b_play.visible = true; 
		        _this.b_pause.visible = false;  
		    }
		    //_this.parent.isPlaying = !_this.parent.isPlaying; // 切换播放状态
		}
		
		// 调用初始化方法，初始状态为播放按钮显示
		init(true);
		
		
		this.b_clear.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			_this.parent.onClear();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.b_clear = new lib.元件18();
	this.b_clear.name = "b_clear";
	this.b_clear.setTransform(76.2,20.4,1,1,0,0,0,20.4,20.4);
	new cjs.ButtonHelper(this.b_clear, 0, 1, 1);

	this.b_pause = new lib.元件17();
	this.b_pause.name = "b_pause";
	this.b_pause.setTransform(20.4,20.4,1,1,0,0,0,20.4,20.4);
	new cjs.ButtonHelper(this.b_pause, 0, 1, 1);

	this.b_play = new lib.元件10();
	this.b_play.name = "b_play";
	this.b_play.setTransform(20.4,20.4,1,1,0,0,0,20.4,20.4);
	new cjs.ButtonHelper(this.b_play, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b_play},{t:this.b_pause},{t:this.b_clear}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.暂停播放组, rect = new cjs.Rectangle(-1.5,-1.5,99.8,44), [rect]);


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

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhHBCIASgRIASgRIADgEIABAAIAAgCIgBAAIAAgBIBFg8IAAgJIAAgBIAAgIIAAgCIAAgFIABgCIgXATQAJgOAKgIQAEAAAQAKIAAABQAEACACACQABAFACACQAHAIACAAIgHAQIgBABIgYA9IgGAXg");
	mask.setTransform(7.15,6.6);

	// 图层_3
	this.instance = new lib.ClipGroup_10();
	this.instance.setTransform(7.2,6.7,1,1,0,0,0,7.2,6.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,14.3,13.2);
p.frameBounds = [rect, rect];


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

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAFASIgngFIgBgBQAAgEAIgIQAJgGgBgFIABgBIAGgDQAAgBABAAQAAgBABAAQAAgBAAAAQAAAAAAgBIAuACIgBAHIgHgCIgBAAIAAACIAAACIAAATIABAHIAAACg");
	mask.setTransform(3.7486,1.975);

	// 图层_3
	this.instance = new lib.ClipGroup_11();
	this.instance.setTransform(3.9,2.1,1,1,0,0,0,3.9,2.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.2,0,7.2,4);
p.frameBounds = [rect, rect];


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

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgiAPIAAgCIAAAAIABgBIABAAIABAAIAAgBIgBAAIAsgjIAAAAIAYgTIgBACIAAAFIAAACIAAAIIgBABIAAAJIhFA8g");
	mask.setTransform(3.55,4.425);

	// 图层_3
	this.instance = new lib.ClipGroup_12();
	this.instance.setTransform(3.6,4.5,1,1,0,0,0,3.6,4.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,7.1,8.9);
p.frameBounds = [rect, rect];


(lib.ClipGroup_59 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AAkA0IiGgzIgKgJIAAAAIgCgBQgGgCgCgEQgDgEgCgJIgDgOIgDgJIAEABIAoAFIAXACIACABIC8A4IACAAIgDAEIgSARIgSARg");
	mask.setTransform(13,5.175);

	// 图层_3
	this.instance = new lib.ClipGroup_13();
	this.instance.setTransform(13.2,5.2,1,1,0,0,0,13.2,5.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,26,10.4);
p.frameBounds = [rect, rect];


(lib.ClipGroup_57 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_15();
	this.instance.setTransform(0.1,1.2,1,1,0,0,0,0.1,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,0.3,2.6);
p.frameBounds = [rect, rect];


(lib.ClipGroup_54 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ClipGroup_18();
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,0.2,0.3);
p.frameBounds = [rect, rect];


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

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhRgHIgOgEIAEgdIAAgDICxAxIACAAIAAAAIAIACIgDAEIAAAeIAAAAIgCACg");
	mask.setTransform(9.725,4.5);

	// 图层_3
	this.instance = new lib.ClipGroup_19();
	this.instance.setTransform(9.7,4.5,1,1,0,0,0,9.7,4.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.1,0.1,19.3,8.8);
p.frameBounds = [rect, rect];


(lib.ClipGroup_51 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AAAARIgCgBIAAgCIgBgHIAAgTIAAgBIAAgCIABgBIAGACIAAACIgEAdg");
	mask.setTransform(0.475,1.8);

	// 图层_3
	this.instance = new lib.ClipGroup_21();
	this.instance.setTransform(0.5,1.8,1,1,0,0,0,0.5,1.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0.1,0.1,0.9,3.4);
p.frameBounds = [rect, rect];


(lib.ClipGroup_47 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AA/AzIgBAAIAAgBIgCAAIgPgEIgBAAIiigtIgBgBIgBAAIgMgDIABgBIABAAIArgYIACgBIAogWICfAoIABAAIAPAEIABAAIABAAIABABIAAABIgbAVIgBABIgoAhIgBABg");
	mask.setTransform(13.325,5.15);

	// 图层_3
	this.instance = new lib.ClipGroup_25();
	this.instance.setTransform(13.5,5.2,1,1,0,0,0,13.5,5.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,26.7,10.3);
p.frameBounds = [rect, rect];


(lib.ClipGroup_46 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AB4AgIhOgJIgBAAIifgSIgBAAIgBgBIgBgCQgBgIAAgOIgBgEIAAgCIABgBIAAgEIACAAICaAQIACABIBWAIIAAABIACAAIAAABIAAABIgBAjg");
	mask.setTransform(12.4,3.225);

	// 图层_3
	this.instance = new lib.ClipGroup_26();
	this.instance.setTransform(12.5,3.4,1,1,0,0,0,12.5,3.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,24.8,6.5);
p.frameBounds = [rect, rect];


(lib.ClipGroup_45 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AABAKIgFgBIgEAAIAAgBIgCAAIACgCIABAAIADgDIAAAAIADgCIABgBIABgBIAKgIIAAACIgBABIgGANIAAACIgBABg");
	mask.setTransform(1.1125,1.025);

	// 图层_3
	this.instance = new lib.ClipGroup_27();
	this.instance.setTransform(1.2,1.2,1,1,0,0,0,1.2,1.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0.1,2.3,2);
p.frameBounds = [rect, rect];


(lib.ClipGroup_44 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgLAaIABgDIAUg5IABABIAAAAIABABIgUA6IgBABIgCAIg");
	mask.setTransform(1.225,3.475);

	// 图层_3
	this.instance = new lib.ClipGroup_28();
	this.instance.setTransform(1.4,3.6,1,1,0,0,0,1.4,3.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,2.5,7);
p.frameBounds = [rect, rect];


(lib.ClipGroup_43 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgmAAIgBAAIAAAAIABAAIACAAIAAgBIAFgFIABAAIAAgBIABgBIBEAQIAAAAIABABg");
	mask.setTransform(3.95,0.85);

	// 图层_3
	this.instance = new lib.ClipGroup_29();
	this.instance.setTransform(4,1,1,1,0,0,0,4,1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,7.9,1.7);
p.frameBounds = [rect, rect];


(lib.ClipGroup_42 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgKAeIAAgCIAAgMIABgCIAAgEIAAgEIAJgYIAAgCIACgDIAEgMIABACIABACIAAAAIAAABIAAABIABACIABAAIAAACIAAAAIAAABIABABIgVA7g");
	mask.setTransform(1.125,3.6);

	// 图层_3
	this.instance = new lib.ClipGroup_30();
	this.instance.setTransform(1.2,3.6,1,1,0,0,0,1.2,3.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,2.3,7.2);
p.frameBounds = [rect, rect];


(lib.ClipGroup_41 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("ABrAtIAAgBIgBAAIgQgDIgBAAIi5gtIgBAAIgBAAIgJgCIgBgBIAAgDIgCgPIAAgPIAAgCIAAgBIABgBIACAAIC7AqIABAAIARADIABAAIAAAAIABABIABAAIAKACIAAAAIAAABIgBACIAAADIgBADIAAAcIAAADIAAABg");
	mask.setTransform(11.125,4.5);

	// 图层_3
	this.instance = new lib.ClipGroup_31();
	this.instance.setTransform(11.2,4.5,1,1,0,0,0,11.2,4.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,22.3,9);
p.frameBounds = [rect, rect];


(lib.ClipGroup_40 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgkAtIAAgXIABgBIAAgFIAAgCIAAgCIABgEIABAAIAAgBIAAABIABAAIAAAAIANgKIA4gqIAAAEIAAACIAAADIgBACIAAAHIAAABIAAACIAAAKIhEA3IgCABIgBACg");
	mask.setTransform(3.7,4.475);

	// 图层_3
	this.instance = new lib.ClipGroup_32();
	this.instance.setTransform(3.9,4.5,1,1,0,0,0,3.9,4.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,7.4,9);
p.frameBounds = [rect, rect];


(lib.ClipGroup_39 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgkAfIgBgBIAAgDIABABIAAAAIABgBIAAgBIAAgBIACAAIBEg3IAAgBIABABIABAAIAAACIhFA4IgBABIgBABIgBAAIgBABg");
	mask.setTransform(3.75,3.15);

	// 图层_3
	this.instance = new lib.ClipGroup_33();
	this.instance.setTransform(3.9,3.4,1,1,0,0,0,3.9,3.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,7.5,6.3);
p.frameBounds = [rect, rect];


(lib.ClipGroup_38 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AhKgMIAAAAIAAAAIAEgBIAAAAIABAAIAOgIIACABIAAAAIACABIB+Apg");
	mask.setTransform(7.525,2.175);

	// 图层_3
	this.instance = new lib.ClipGroup_34();
	this.instance.setTransform(7.9,2.4,1,1,0,0,0,7.9,2.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,15.1,4.4);
p.frameBounds = [rect, rect];


(lib.ClipGroup_37 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgRAWIAAgBIgCAAIgBAAIAAAAIgRgEIAAAAIgCAAIgBAAIgBgBIACgBIABAAIAAAAIBLgiIACgBIADgCIghAXQgVAQgCAEIgBABIgBABIgBgBg");
	mask.setTransform(4.225,2.2625);

	// 图层_3
	this.instance = new lib.ClipGroup_35();
	this.instance.setTransform(4.3,2.4,1,1,0,0,0,4.3,2.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,8.5,4.5);
p.frameBounds = [rect, rect];


(lib.ClipGroup_35_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("ABVAtIibgyIgBAAIgLgEIgBAAIAAAAQgDgBAAgPIAAAAQgCgGACgJIAAgCIABgCIABAAICaAtIABAAIAAABIACAAIABAAIAOAEIgBABIAAAAIgBABIAAABIAAABIgCANIABATIABABIAAACg");
	mask.setTransform(8.8,4.475);

	// 图层_3
	this.instance = new lib.ClipGroup_75();
	this.instance.setTransform(8.8,4.5,1,1,0,0,0,8.8,4.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,17.6,9);
p.frameBounds = [rect, rect];


(lib.ClipGroup_34_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgwAYIAAgBIAAgCIAAgBIAAABIACgCIACgBIANgFIBNgjIABgBIAAABIACAAIAAAAIAAACIhbApIgDAAIgCADIAAAAg");
	mask.setTransform(4.925,2.4);

	// 图层_3
	this.instance = new lib.ClipGroup_76();
	this.instance.setTransform(5,2.4,1,1,0,0,0,5,2.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,9.9,4.8);
p.frameBounds = [rect, rect];


(lib.ClipGroup_33_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AAoApIgCAAIgBAAIgBgBIgBAAIipgxIgBAAIAAgBIAEAAIACAAIAAgBIBEgUIAAgBIACAAIAOgEIAPgFIClAoIAAABIABAAIAAABIhdAmIgBABIAAAAIgBAAIgBABg");
	mask.setTransform(13.575,4.15);

	// 图层_3
	this.instance = new lib.ClipGroup_77();
	this.instance.setTransform(13.7,4.3,1,1,0,0,0,13.7,4.3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,27.2,8.3);
p.frameBounds = [rect, rect];


(lib.ClipGroup_32_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AgvAlIAAAAIAAgCIAAgFIgBgBIAAgNIABAAIAAgHIAAAAIAAgCIABgBIAAgCIABgBIABAAIAAgBIABABIABAAIADgCIBYglIAAACIgBABIAAAFIAAABIAAAIIgBABIAAACIABABIgBABIAAAHIABABIgBAAIAAABIhaAoIgCABIgBABg");
	mask.setTransform(4.9,3.725);

	// 图层_3
	this.instance = new lib.ClipGroup_78();
	this.instance.setTransform(5,3.9,1,1,0,0,0,5,3.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,9.8,7.5);
p.frameBounds = [rect, rect];


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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_3
	this.instance = new lib.元件23();
	this.instance.setTransform(307.15,39.55,2.3036,1.7021,0,0,0,125.5,23.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.元件23(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A7rD8IgMgBIAAgPIANACIANAAQASAAAJgHQAJgJAAgSIAAgMQgDALgJAEQgIAGgPAAQgSAAgKgHQgKgHgEgMQgEgMAAgSQAAgPAEgNQAEgMAKgIQAKgHASAAQAKAAAIADQAHADAEAFQAEAFACAHIAAgVIARAAIAABmQAAAWgNANQgMAMgcAAIgOgBgA7tB7QgGAFgCAJQgCAKAAAKQAAAMACAJQACAJAGAGQAGAFANABQANAAAHgGQAIgEADgJQADgKgBgNQABgMgDgKQgDgJgIgFQgHgEgNAAQgNgBgGAHgA0hDXQgRAAgLgIQgKgJgGgRIgBgJIgBgIIAAgFQAAgSAHgNQAHgMAOgIIALgFIAKgBIACAAQASAAANATIAAgEIARAAIAAA6IABAUIADATIgBAAIgQAAQAAAAgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgCIgCgMIgDAFIgFAFQgFAEgGACQgGACgHAAgA0uB8QgJAGgFAMIgCAIIgBAJIAAAEQAAAKAFAJQAEAIAIAHIAHADIAHAAIAEAAQAfABAAgnIAAgHQAAgPgFgKQgGgJgLgDIgDAAIgDgBQgNABgIAGgA2WDSQgLgFgGgNQgGgMAAgVQAAgWAGgMQAGgNALgFQALgFAQAAIARABIAMADIAAAQQgGgCgHgCQgHgBgJAAQgMAAgHADQgHAFgDAJQgDAJAAAQQAAAQADAIQADAKAHADQAIAEAMgBIAPAAQAHgCAGgCIAAAQIgIACIgKACIgLAAQgQAAgLgFgEgmcADXQgQAAgLgIQgLgJgFgRIgCgJIAAgIIAAgFQAAgSAHgNQAGgMAOgIIALgFIAKgBIACAAQATAAAMATIAAgEIASAAIAAA6IABAUIACATIgBAAIgQAAQAAAAAAAAQAAgBgBAAQAAgBAAgBQAAAAgBgCIgBgMIgEAFIgEAFQgFAEgGACQgGACgHAAgEgmpAB8QgIAGgFAMIgCAIIgBAJIAAAEQAAAKAEAJQAEAIAIAHIAHADIAIAAIAEAAQAfABAAgnIAAgHQAAgPgGgKQgFgJgLgDIgEAAIgDgBQgMABgJAGgEgoRADSQgLgFgGgNQgGgMAAgVQAAgWAGgMQAGgNALgFQAMgFAQAAIAQABIAMADIAAAQQgGgCgHgCQgHgBgIAAQgMAAgHADQgHAFgDAJQgDAJAAAQQAAAQADAIQADAKAHADQAHAEAMgBIAPAAQAIgCAGgCIAAAQIgIACIgLACIgKAAQgQAAgMgFgAmYDWQgFAAgDAAQgDgCgBgDQgBgCAAgGQAAgHADgDQADgDAHABQAHgBADADQADADAAAHQAAAGgCACQgBADgDACIgEAAIgDAAgA53DWQgFAAgCAAQgDgCgBgDQgCgCAAgGQAAgHADgDQADgDAHABQAHgBADADQADADAAAHQAAAGgBACQgBADgDACIgFAAIgDAAgAwGDTQgHgCgDgIQgEgHAAgOIAAg+IgQAAIAAgOIAQAAIAAgaIASAAIAAAaIAbAAIAAAOIgbAAIAAA9IABAMQABAFAEACQADACAGgBIAHAAIAFAAIAAAOIgGABIgGAAIgDAAQgKAAgGgDgEgiBADTQgHgCgDgIQgDgHAAgOIAAg+IgQAAIAAgOIAQAAIAAgaIARAAIAAAaIAbAAIAAAOIgbAAIAAA9IABAMQACAFADACQADACAHgBIAGAAIAGAAIAAAOIgGABIgGAAIgEAAQgJAAgHgDgAuDDWIgMAAIgLgBIgJgDIAAgOIAKACIALABIALABQAMAAAGgDQAHgFAAgJQAAgGgCgEQgCgDgFgCQgFgDgKgCQgMgDgHgEQgHgDgCgHQgDgGAAgIQAAgOAKgIQAKgIATAAIAQABIAMADIgCAOQgEgCgHgBQgHgBgIAAQgLAAgGADQgGAEAAAJQAAAGACADQACADAEABQAFACAIACQANADAHADQAIAFADAGQADAGAAAKQAAARgKAIQgLAHgSAAIgCAAgA/+DWIgLAAIgMgBIgIgDIAAgOIAJACIALABIALABQANAAAGgDQAGgFAAgJQABgGgCgEQgCgDgFgCQgGgDgKgCQgMgDgHgEQgGgDgDgHQgDgGAAgIQABgOAJgIQAKgIAUAAIAPABIAMADIgBAOQgFgCgHgBQgHgBgHAAQgMAAgFADQgGAEAAAJQAAAGABADQACADAFABQAEACAJACQAMADAIADQAHAFADAGQAEAGAAAKQAAARgLAIQgKAHgSAAIgDAAgAnaDVIAAhFQABgMgFgHQgFgIgMAAQgGABgFABQgGACgEAEQgEAEgDAHIAABNIgRAAIAAhFQAAgMgEgHQgEgIgMAAQgHABgFABQgGABgEAFQgEAEgDAIIAABMIgRAAIAAhtIARAAIAA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gDAAIgDgBQgNABgIAGgAcChmQgLgFgGgMQgGgNAAgVQAAgWAGgNQAGgMALgFQAMgFAQAAIAQABIAMADIAAAQQgGgDgHgBQgHgBgIAAQgMAAgHAEQgHADgDAJQgDAKAAAQQAAAPADAKQADAIAHAEQAHAEAMgBIAPgBQAIAAAGgDIAAAQIgIACIgLABIgKABQgQAAgMgFgAWhhoQgKgIgEgMQgEgNAAgQQAAgPAEgNQAEgNAKgIQAJgIASAAQAQAAAIAFQAJAHADAJIAAg/IARAAIAACZIgOAAIgDgSQgDAJgJAFQgJAGgPAAQgSAAgJgHgAWsi9QgGAFgCAKQgCAKAAALQAAALACAJQACAKAGAGQAGAFANAAQANAAAHgEQAIgGADgJQADgJgBgNQABgNgDgKQgDgJgIgFQgHgFgNgBQgNAAgGAHgAU7hhQgQAAgLgJQgLgIgFgRIgCgJIAAgIIAAgFQAAgRAHgOQAGgMAOgJIALgDIAKgBIACAAQATgBAMAUIAAgGIASAAIAAA7IABAUIACATIgBAAIgQAAQAAAAAAAAQAAgBgBAAQAAgBAAgBQAAAAgBgCIgBgNIgEAGIgEAFQgFAEgGACQgGACgHAAgAUui8QgIAGgFAMIgCAIIgBAJIAAAEQAAALAEAIQAEAJAIAGIAHADIAIAAIAEAAQAfAAAAgmIAAgHQAAgPgGgJQgFgKgLgDIgEAAIgDgBQgMABgJAGgAS2hmQgLgFgGgMQgGgNAAgVQAAgWAGgNQAFgMALgFQALgFAQAAQAOAAAJAEQAIAEAFAHQAEAGACAJIACAQIgBAFIAAAIIhKAEQAAAMADAIQADAHAIAEQAIAEANgBQAJAAAJgCQAJgBAHgDIAAAPIgJAEIgNACIgPABQgQAAgLgFgAS9i/QgHAEgCAIQgDAIAAALIA6gEQAAgIgCgIQgCgHgFgEQgGgFgMAAQgMAAgHAFgANOhhQgRAAgLgJQgKgIgGgRIgBgJIgBgIIAAgFQAAgRAHgOQAHgMAOgJIALgDIAKgBIACAAQASgBANAUIAAgGIARAAIAAA7IABAUIADATIgBAAIgQAAQAAAAgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgCIgCgNIgDAGIgFAFQgFAEgGACQgGACgHAAgANBi8QgJAGgFAMIgCAIIgBAJIAAAEQAAALAFAIQAEAJA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AAQAHABAGgCQAGgBAFgFQAFgEADgKIAAhKIASAAIAABtIgPAAIgCgQQgEAHgFAEQgGAEgGACQgHABgHAAQgOAAgIgEgEAqAgBiQgFAAgCAAQgDgBgBgEQgCgCAAgFQAAgJADgCQADgCAHAAQAHAAADACQADACAAAJQAAAFgBACQgBAEgDABIgFAAIgDAAgAYihiQgFAAgDAAQgDgBgBgEQgBgCAAgFQAAgJADgCQADgCAHAAQAHAAADACQADACAAAJQAAAFgCACQgBAEgDABIgEAAIgDAAgAH4hiQgFAAgCAAQgDgBgBgEQgCgCAAgFQAAgJADgCQADgCAHAAQAHAAADACQADACAAAJQAAAFgBACQgBAEgDABIgFAAIgDAAgA40hiQgFAAgCAAQgDgBgBgEQgCgCAAgFQAAgJADgCQADgCAHAAQAHAAADACQADACAAAJQAAAFgBACQgBAEgDABIgFAAIgDAAgEAo+gBkQgHgDgDgHQgDgIAAgPIAAg9IgQAAIAAgOIAQAAIAAgaIARAAIAAAaIAbAAIAAAOIgbAAIAAA8IABANQACAFADACQADACAHgBIAGAAIAGgBIAAAPIgGABIgGAAIgEAAQgJAAgHgCgABHhkQgHgDgDgHQgDgIAAgPIAAg9IgQAAIAAgOIAQAAIAAgaIARAAIAAAaIAbAAIAAAOIgbAAIAAA8IABANQACAFADACQADACAHgBIAGAAIAGgBIAAAPIgGABIgGAAIgEAAQgJAAgHgCgAG4hnQgGgGAAgMIAAiDIARAAIAAB/QAAAHADADQACADAGgBIAEAAIAEgBIAAAPIgFABIgHAAIgCAAQgKAAgGgFgAF/hnQgGgGAAgMIAAiDIARAAIAAB/QAAAHACADQADADAFgBIAEAAIAEgBIAAAPIgFABIgGAAIgCAAQgLAAgFgFgAtNhnQgGgGAAgMIAAiDIARAAIAAB/QAAAHACADQADADAFgBIAEAAIAEgBIAAAPIgFABIgGAAIgCAAQgLAAgFgFgAjrhiIgLAAIgMgBIgIgCIAAgPIAJACIALABIALABQANAAAGgEQAGgEAAgIQABgHgCgEQgCgEgFgBQgGgDgKgCQgMgCgHgEQgGgFgDgGQgDgGAAgIQABgOAJgIQAKgIAUAAIAPABIAMADIgBAPQgFgDgHgBQgHgBgHAAQgMAAgFADQgGAEAAAJQAAAGABADQACACAFACQAEACAJACQAMADAIADQAHAFADAGQAEAHAAAJQAAARgLAHQgKAIgSAAIgDAAgEAn7gBjIAAhFQAAgJgCgFQgBgGgFgDQgEgEgJAAQgHABgGABQgHABgFAFQgFAFgDAKIAABJIgRAAIAAhtIARAAIAAAPQADgGAGgEQAGgEAGgBIAOgCQAOAAAIAEQAIAFADAIQAEAIgBAKIAABMgEAl+gBjIAAhtIARAAIAABtgEAgYgBjIAAhFQAAgJgBgFQgCgGgEgDQgFgEgIAAQgHABgHABQgGABgFAFQgFAFgEAKIAABJIgRAAIAAhtIARAAIAAAPQAEgGAGgEQAFgEAHgBIANgCQAPAAAIAEQAHAFAEAIQADAIAAAKIAABMgAaHhjIAAiMIASAAIAACMgARZhjIAAhtIARAAIAAAUQADgJAGgFQAGgEAGgCIAOgCIACAAIgBAPIgCAAQgHAAgHACQgGADgGAFQgFAFgDAKIAABHgAPvhjIAAhFQAAgJgBgFQgCgGgEgDQgFgEgIAAQgHABgHABQgGABgFAFQgFAFgEAKIAABJIgRAAIAAhtIARAAIAAAPQAEgGAGgEQAFgEAHgBIANgCQAPAAAIAEQAHAFAEAIQADAIAAAKIAABMgAJdhjIAAiMIATAAIAACMgAhkhjIgogzIgGAAIAAAzIgRAAIAAiZIARAAIAABZIAGAAIAmgtIAWAAIguAyIAwA7gAw9hjIAAhFQAAgJgBgFQgCgGgEgDQgFgEgIAAQgHABgHABQgGABgFAFQgFAFgEAKIAABJIgRAAIAAhtIARAAIAAAPQAEgGAGgEQAFgEAHgBIANgCQAPAAAIAEQAHAFAEAIQADAIAAAKIAABMgA3PhjIAAiMIATAAIAACMgA72hjIAAhFQAAgJgBgFQgCgGgEgDQgFgEgIAAQgHABgHABQgGABgFAFQgFAFgEAKIAABJIgRAAIAAhtIARAAIAAAPQAEgGAGgEQAFgEAHgBIANgCQAPAAAIAEQAHAFAEAIQADAIAAAKIAABMgA9zhjIAAhtIARAAIAABtgA+qhjIAAh6IgBAAIgkBaIgUAAIgkhaIgBAAIAAB6IgSAAIAAiMIAdAAIAkBaIABAAIAkhaIAcAAIAACMgEgkxgBjIAAiMIATAAIAAB7IA8AAIAAARgEgmagBjIAAhFQAAgMgEgIQgFgHgMAAQgGABgGABQgGABgEAFQgEAEgCAHIAABNIgSAAIAAhFQABgMgFgIQgEgHgMAAQgGABgGABQgFACgFADQgEAFgDAIIAABMIgRAAIAAhtIARAAIAAAOQAGgJAIgDQAIgEAKAAQANAAAHAEQAIAFAEAJQADgHAFgEQAGgEAGgBQAHgCAHAAQAMAAAIAEQAIAFAEAIQADAIAAAKIAABMgEgqMgBjIAAiMIASAAIAACMgEgpbgDIIAGgRIAEgSIABgRIASAAQAAAHgDAJQgCAKgDAJIgIARgEAl+gDmQgCgCAAgHQAAgGACgCQADgCAFAAQAGAAACACQADACAAAGQAAAHgDACQgCACgGAAQgFAAgDgCgA9yjmQgDgCABgHQgBgGADgCQACgCAGAAQAFAAADACQACACAAAGQAAAHgCACQgDACgFAAQgGAAgCgCg");
	this.shape.setTransform(305.325,36.85);

	this.instance_1 = new lib.元件32();
	this.instance_1.setTransform(319.85,36.65,1,1,0,0,0,327.9,42.3);
	this.instance_1.shadow = new cjs.Shadow("rgba(51,51,51,1)",0,0,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("A7rD8IgMgBIAAgPIANACIANAAQASAAAJgHQAJgJAAgSIAAgMQgDALgJAEQgIAGgPAAQgSAAgKgHQgKgHgEgMQgEgMAAgSQAAgPAEgNQAEgMAKgIQAKgHASAAQAKAAAIADQAHADAEAFQAEAFACAHIAAgVIARAAIAABmQAAAWgNANQgMAMgcAAIgOgBgA7tB7QgGAFgCAJQgCAKAAAKQAAAMACAJQACAJAGAGQAGAFANABQANAAAHgGQAIgEADgJQADgKgBgNQABgMgDgKQgDgJgIgFQgHgEgNAAQgNgBgGAHgA0hDXQgRAAgLgIQgKgJgGgRIgBgJIgBgIIAAgFQAAgSAHgNQAHgMAOgIIALgFIAKgBIACAAQASAAANATIAAgEIARAAIAAA6IABAUIADATIgBAAIgQAAQAAAAgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgCIgCgMIgDAFIgFAFQgFAEgGACQgGACgHAAgA0uB8QgJAGgFAMIgCAIIgBAJIAAAEQAAAKAFAJQAEAIAIAHIAHADIAHAAIAEAAQAfABAAgnIAAgHQAAgPgFgKQgGgJgLgDIgDAAIgDgBQgNABgIAGgA2WDSQgLgFgGgNQgGgMAAgVQAAgWAGgMQAGgNALgFQALgFAQAAIARABIAMADIAAAQQgGgCgHgCQgHgBgJAAQgMAAgHADQgHAFgDAJQgDAJAAAQQAAAQADAIQADAKAHADQAIAEAMgBIAPAAQAHgCAGgCIAAAQIgIACIgKACIgLAAQgQAAgLgFgEgmcADXQgQAAgLgIQgLgJgFgRIgCgJIAAgIIAAgFQAAgSAHgNQAGgMAOgIIALgFIAKgBIACAAQATAAAMATIAAgEIASAAIAAA6IABAUIACATIgBAAIgQAAQAAAAAAAAQAAgBgBAAQAAgBAAgBQAAAAgBgCIgBgMIgEAFIgEAFQgFAEgGACQgGACgHAAgEgmpAB8QgIAGgFAMIgCAIIgBAJIAAAEQAAAKAEAJQAEAIAIAHIAHADIAIAAIAEAAQAfABAAgnIAAgHQAAgPgGgKQgFgJgLgDIgEAAIgDgBQgMABgJAGgEgoRADSQgLgFgGgNQgGgMAAgVQAAgWAGgMQAGgNALgFQAMgFAQAAIAQABIAMADIAAAQQgGgCgHgCQgHgBgIAAQgMAAgHADQgHAFgDAJQgDAJAAAQQAAAQADAIQADAKAHADQAHAEAMgBIAPAAQAIgCAGgCIAAAQIgIACIgLACIgKAAQgQAAgMgFgAmYDWQgFAAgDAAQgDgCgBgDQgBgCAAgGQAAgHADgDQADgDAHABQAHgBADADQADADAAAHQAAAGgCACQgBADgDACIgEAAIgDAAgA53DWQgFAAgCAAQgDgCgBgDQgCgCAAgGQAAgHADgDQADgDAHABQAHgBADADQADADAAAHQAAAGgBACQgBADgDACIgFAAIgDAAgAwGDTQgHgCgDgIQgEgHAAgOIAAg+IgQAAIAAgOIAQAAIAAgaIASAAIAAAaIAbAAIAAAOIgbAAIAAA9IABAMQABAFAEACQADACAGgBIAHAAIAFAAIAAAOIgGABIgGAAIgDAAQgKAAgGgDgEgiBADTQgHgCgDgIQgDgHAAgOIAAg+IgQAAIAAgOIAQAAIAAgaIARAAIAAAaIAbAAIAAAOIgbAAIAAA9IABAMQACAFADACQADACAHgBIAGAAIAGAAIAAAOIgGABIgGAAIgEAAQgJAAgHgDgAuDDWIgMAAIgLgBIgJgDIAAgOIAKACIALABIALABQAMAAAGgDQAHgFAAgJQAAgGgCgEQgCgDgFgCQgFgDgKgCQgMgDgHgEQgHgDgCgHQgDgGAAgIQAAgOAKgIQAKgIATAAIAQABIAMADIgCAOQgEgCgHgBQgHgBgIAAQgLAAgGADQgGAEAAAJQAAAGACADQACADAEABQAFACAIACQANADAHADQAIAFADAGQADAGAAAKQAAARgKAIQgLAHgSAAIgCAAgA/+DWIgLAAIgMgBIgIgDIAAgOIAJACIALABIALABQANAAAGgDQAGgFAAgJQABgGgCgEQgCgDgFgCQgGgDgKgCQgMgDgHgEQgGgDgDgHQgDgGAAgIQABgOAJgIQAKgIAUAAIAPABIAMADIgBAOQgFgCgHgBQgHgBgHAAQgMAAgFADQgGAEAAAJQAAAGABADQACADAFABQAEACAJACQAMADAIADQAHAFADAGQAEAGAAAKQAAARgLAIQgKAHgSAAIgDAAgAnaDVIAAhFQABgMgFgHQgFgIgMAAQgGABgFABQgGACgEAEQgEAEgDAHIAABNIgRAAIAAhFQAAgMgEgHQgEgIgMAAQgHABgFABQgGABgEAFQgEAEgDAIIAABMIgRAAIAAhtIARAAIAA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gDAAIgDgBQgNABgIAGgAcChmQgLgFgGgMQgGgNAAgVQAAgWAGgNQAGgMALgFQAMgFAQAAIAQABIAMADIAAAQQgGgDgHgBQgHgBgIAAQgMAAgHAEQgHADgDAJQgDAKAAAQQAAAPADAKQADAIAHAEQAHAEAMgBIAPgBQAIAAAGgDIAAAQIgIACIgLABIgKABQgQAAgMgFgAWhhoQgKgIgEgMQgEgNAAgQQAAgPAEgNQAEgNAKgIQAJgIASAAQAQAAAIAFQAJAHADAJIAAg/IARAAIAACZIgOAAIgDgSQgDAJgJAFQgJAGgPAAQgSAAgJgHgAWsi9QgGAFgCAKQgCAKAAALQAAALACAJQACAKAGAGQAGAFANAAQANAAAHgEQAIgGADgJQADgJgBgNQABgNgDgKQgDgJgIgFQgHgFgNgBQgNAAgGAHgAU7hhQgQAAgLgJQgLgIgFgRIgCgJIAAgIIAAgFQAAgRAHgOQAGgMAOgJIALgDIAKgBIACAAQATgBAMAUIAAgGIASAAIAAA7IABAUIACATIgBAAIgQAAQAAAAAAAAQAAgBgBAAQAAgBAAgBQAAAAgBgCIgBgNIgEAGIgEAFQgFAEgGACQgGACgHAAgAUui8QgIAGgFAMIgCAIIgBAJIAAAEQAAALAEAIQAEAJAIAGIAHADIAIAAIAEAAQAfAAAAgmIAAgHQAAgPgGgJQgFgKgLgDIgEAAIgDgBQgMABgJAGgAS2hmQgLgFgGgMQgGgNAAgVQAAgWAGgNQAFgMALgFQALgFAQAAQAOAAAJAEQAIAEAFAHQAEAGACAJIACAQIgBAFIAAAIIhKAEQAAAMADAIQADAHAIAEQAIAEANgBQAJAAAJgCQAJgBAHgDIAAAPIgJAEIgNACIgPABQgQAAgLgFgAS9i/QgHAEgCAIQgDAIAAALIA6gEQAAgIgCgIQgCgHgFgEQgGgFgMAAQgMAAgHAFgANOhhQgRAAgLgJQgKgIgGgRIgBgJIgBgIIAAgFQAAgRAHgOQAHgMAOgJIALgDIAKgBIACAAQASgBANAUIAAgGIARAAIAAA7IABAUIADATIgBAAIgQAAQAAAAgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgCIgCgNIgDAGIgFAFQgFAEgGACQgGACgHAAgANBi8QgJAGgFAMIgCAIIgBAJIAAAEQAAALAFAIQAEAJA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AAQAHABAGgCQAGgBAFgFQAFgEADgKIAAhKIASAAIAABtIgPAAIgCgQQgEAHgFAEQgGAEgGACQgHABgHAAQgOAAgIgEgEAqAgBiQgFAAgCAAQgDgBgBgEQgCgCAAgFQAAgJADgCQADgCAHAAQAHAAADACQADACAAAJQAAAFgBACQgBAEgDABIgFAAIgDAAgAYihiQgFAAgDAAQgDgBgBgEQgBgCAAgFQAAgJADgCQADgCAHAAQAHAAADACQADACAAAJQAAAFgCACQgBAEgDABIgEAAIgDAAgAH4hiQgFAAgCAAQgDgBgBgEQgCgCAAgFQAAgJADgCQADgCAHAAQAHAAADACQADACAAAJQAAAFgBACQgBAEgDABIgFAAIgDAAgA40hiQgFAAgCAAQgDgBgBgEQgCgCAAgFQAAgJADgCQADgCAHAAQAHAAADACQADACAAAJQAAAFgBACQgBAEgDABIgFAAIgDAAgEAo+gBkQgHgDgDgHQgDgIAAgPIAAg9IgQAAIAAgOIAQAAIAAgaIARAAIAAAaIAbAAIAAAOIgbAAIAAA8IABANQACAFADACQADACAHgBIAGAAIAGgBIAAAPIgGABIgGAAIgEAAQgJAAgHgCgABHhkQgHgDgDgHQgDgIAAgPIAAg9IgQAAIAAgOIAQAAIAAgaIARAAIAAAaIAbAAIAAAOIgbAAIAAA8IABANQACAFADACQADACAHgBIAGAAIAGgBIAAAPIgGABIgGAAIgEAAQgJAAgHgCgAG4hnQgGgGAAgMIAAiDIARAAIAAB/QAAAHADADQACADAGgBIAEAAIAEgBIAAAPIgFABIgHAAIgCAAQgKAAgGgFgAF/hnQgGgGAAgMIAAiDIARAAIAAB/QAAAHACADQADADAFgBIAEAAIAEgBIAAAPIgFABIgGAAIgCAAQgLAAgFgFgAtNhnQgGgGAAgMIAAiDIARAAIAAB/QAAAHACADQADADAFgBIAEAAIAEgBIAAAPIgFABIgGAAIgCAAQgLAAgFgFgAjrhiIgLAAIgMgBIgIgCIAAgPIAJACIALABIALABQANAAAGgEQAGgEAAgIQABgHgCgEQgCgEgFgBQgGgDgKgCQgMgCgHgEQgGgFgDgGQgDgGAAgIQABgOAJgIQAKgIAUAAIAPABIAMADIgBAPQgFgDgHgBQgHgBgHAAQgMAAgFADQgGAEAAAJQAAAGABADQACACAFACQAEACAJACQAMADAIADQAHAFADAGQAEAHAAAJQAAARgLAHQgKAIgSAAIgDAAgEAn7gBjIAAhFQAAgJgCgFQgBgGgFgDQgEgEgJAAQgHABgGABQgHABgFAFQgFAFgDAKIAABJIgRAAIAAhtIARAAIAAAPQADgGAGgEQAGgEAGgBIAOgCQAOAAAIAEQAIAFADAIQAEAIgBAKIAABMgEAl+gBjIAAhtIARAAIAABtgEAgYgBjIAAhFQAAgJgBgFQgCgGgEgDQgFgEgIAAQgHABgHABQgGABgFAFQgFAFgEAKIAABJIgRAAIAAhtIARAAIAAAPQAEgGAGgEQAFgEAHgBIANgCQAPAAAIAEQAHAFAEAIQADAIAAAKIAABMgAaHhjIAAiMIASAAIAACMgARZhjIAAhtIARAAIAAAUQADgJAGgFQAGgEAGgCIAOgCIACAAIgBAPIgCAAQgHAAgHACQgGADgGAFQgFAFgDAKIAABHgAPvhjIAAhFQAAgJgBgFQgCgGgEgDQgFgEgIAAQgHABgHABQgGABgFAFQgFAFgEAKIAABJIgRAAIAAhtIARAAIAAAPQAEgGAGgEQAFgEAHgBIANgCQAPAAAIAEQAHAFAEAIQADAIAAAKIAABMgAJdhjIAAiMIATAAIAACMgAhkhjIgogzIgGAAIAAAzIgRAAIAAiZIARAAIAABZIAGAAIAmgtIAWAAIguAyIAwA7gAw9hjIAAhFQAAgJgBgFQgCgGgEgDQgFgEgIAAQgHABgHABQgGABgFAFQgFAFgEAKIAABJIgRAAIAAhtIARAAIAAAPQAEgGAGgEQAFgEAHgBIANgCQAPAAAIAEQAHAFAEAIQADAIAAAKIAABMgA3PhjIAAiMIATAAIAACMgA72hjIAAhFQAAgJgBgFQgCgGgEgDQgFgEgIAAQgHABgHABQgGABgFAFQgFAFgEAKIAABJIgRAAIAAhtIARAAIAAAPQAEgGAGgEQAFgEAHgBIANgCQAPAAAIAEQAHAFAEAIQADAIAAAKIAABMgA9zhjIAAhtIARAAIAABtgA+qhjIAAh6IgBAAIgkBaIgUAAIgkhaIgBAAIAAB6IgSAAIAAiMIAdAAIAkBaIABAAIAkhaIAcAAIAACMgEgkxgBjIAAiMIATAAIAAB7IA8AAIAAARgEgmagBjIAAhFQAAgMgEgIQgFgHgMAAQgGABgGABQgGABgEAFQgEAEgCAHIAABNIgSAAIAAhFQABgMgFgIQgEgHgMAAQgGABgGABQgFACgFADQgEAFgDAIIAABMIgRAAIAAhtIARAAIAAAOQAGgJAIgDQAIgEAKAAQANAAAHAEQAIAFAEAJQADgHAFgEQAGgEAGgBQAHgCAHAAQAMAAAIAEQAIAFAEAIQADAIAAAKIAABMgEgqMgBjIAAiMIASAAIAACMgEgpbgDIIAGgRIAEgSIABgRIASAAQAAAHgDAJQgCAKgDAJIgIARgEAl+gDmQgCgCAAgHQAAgGACgCQADgCAFAAQAGAAACACQADACAAAGQAAAHgDACQgCACgGAAQgFAAgDgCgA9yjmQgDgCABgHQgBgGADgCQACgCAGAAQAFAAADACQACACAAAGQAAAHgCACQgDACgFAAQgGAAgCgCg");
	this.shape_1.setTransform(305.325,36.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-19,-16.6,634,110);
p.frameBounds = [rect, rect];


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

	// timeline functions:
	this.frame_0 = function() {
		var _this=this;
		_this.stop();
		
		_this.addEventListener("click", fl_MouseClickHandler.bind(this));
		function fl_MouseClickHandler(e)
		{
			console.log(e.target.name);
			_this.gotoAndStop(parseInt(e.target.name.split("_")[1]) + 1);
			_this.parent.gotoPage(e.target.name.split("_")[1]);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#60C0EA").ss(6,1,1).p("EhKtgTsMCVbAAAQAlAAAAAmMAAAAmNQAAAmglAAMiVbAAAQglAAAAgmMAAAgmNQAAgmAlAAg");
	this.shape.setTransform(135.3661,219.2855,0.9916,0.9777);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// 图层_3
	this.pg_0 = new lib.元件20();
	this.pg_0.name = "pg_0";
	this.pg_0.setTransform(120.5,219.1,3.1227,1.9637,0,0,0,148.6,62.6);
	new cjs.ButtonHelper(this.pg_0, 0, 1, 2, false, new lib.元件20(), 3);

	this.timeline.addTween(cjs.Tween.get(this.pg_0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-343.5,96.2,955.6,247.4);
p.frameBounds = [rect, new cjs.Rectangle(-345.5,93.1,961.8,252.5)];


(lib.d1 = function(mode,startPosition,loop,reversed) {
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
	this.dia = new lib.元件21();
	this.dia.name = "dia";
	this.dia.setTransform(104.65,59.7,1,1,0,0,0,122.4,20.9);

	this.instance = new lib.位图35复制();
	this.instance.setTransform(-107,4,0.2073,0.2073);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dia}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.d1, rect = new cjs.Rectangle(-107,4,703.2,128.2), [rect]);


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
		
		_this.pgId;
		_this.diaAry;
		_this.diaMcAry;
		_this.data;
		_this.curId = 0;
		_this.curPgDia; //存储当前页的所有对话mc
		_this.clickMode = false;
		_this.canClick = false;
		_this.start = false;
		_this.isEnded = false;
		//点击单词声音
		_this.audio;
		
		if (!this.isinit) {
			//console.log("第一次进入")
			this.isinit = true;
			init();
		}
		
		/*function playSoundBySrc(src) {
			audio.currentTime = 0;
			audio.pause();
			audio.src = src;
			console.log(audio.src);
			audio.play();
			_this.isEnded = false;
			_this._onp.setStu(false);
		}*/
		function playSoundBySrc(src) {
		    // 如果新源与当前源相同，不必重新设置
		    if (audio.src !== src) {
		        audio.pause(); // 暂停当前音频
		        audio.src = src; // 设置新音频源
		        audio.currentTime = 0; // 重置播放时间
		        
		        // 确保音频加载完成后再播放
		        audio.oncanplaythrough = function() {
		            audio.play().catch(function(error) {
		                console.error("播放错误:", error);
		            });
		            _this.isEnded = false;
		            _this._onp.setStu(false);
		            audio.oncanplaythrough = null; // 清除事件监听器
		        };
		        
		        // 触发加载
		        audio.load();
		    } else {
		        audio.currentTime = 0; // 如果源相同，重置播放时间并播放
		        audio.play().catch(function(error) {
		            console.error("播放错误:", error);
		        });
		        _this.isEnded = false;
		        _this._onp.setStu(false);
		    }
		}
		
		
		function init() {
			_this.pgId = 0;
			_this.diaAry = [2, 2, 2];
			_this.data = lesdata;
			hideDia();
		
			audio = new Audio();
			audio.addEventListener('play', function () {
				//console.log('被点击的单词开始播放');
			});
			audio.addEventListener('ended', function () {
				//播放结束事件。
				//console.log("播放结束。");
				_this.isEnded = true;
				resetDia();
				if (_this.clickMode) {
					_this._onp.setStu(true);
					//_this.clickMode=false;
					return;
				} //点读模式
				nextFun();
			});
		
		    //隐藏播放和清除按钮
		    _this._onp.visible=false;
		}
		
		_this.gotoPage = function (_pg) {
			/*if (_this.pgId == _pg && _this.start == true) {
				return;
			}*/
			//reset();
			_this.isEnded = true;
			_this.start = true;
			_this.pgId = _pg;
			_this.curId = 0;
			if(audio)audio.pause();
			_this.canClick = false;
			_this.clickMode = false;
			_this.gotoAndStop(_this.pgId);
			hideDia();
			updata();
		
			//reset();
			//console.log(_this.diaMcAry);
			//setTimeout(reset,1000);
		}
		
		function hideDia() {
			_this.curPgDia = [];
			//for(var i=1;i<=_this.diaAry[_this.pgId];i++){
			//console.log("##############################");
			//console.log(_this.data);
		    //console.log(_this.data[_this.pgId]);
			//console.log(_this.data);
			for (var i = 1; i <= _this.data[_this.pgId].length; i++) {
				_this["dia_" + (parseInt(_this.pgId) + 1) + "_" + i].visible = false;
				_this["dia_" + (parseInt(_this.pgId) + 1) + "_" + i]["dia"].addEventListener("click", ondiamc);
				_this.curPgDia.push(_this["dia_" + (parseInt(_this.pgId) + 1) + "_" + i]);
				console.log("dia_" + (parseInt(_this.pgId) + 1) + "_" + i);
			}
		}
		function resetDia() {
			for (var v of _this.curPgDia) {
				v.dia.gotoAndStop(0);
			}
		}
		function updata() {
			_this.curPgDia[_this.curId].visible = true;
			_this._onp.visible=true;
			resetDia();
			_this.curPgDia[_this.curId].dia.gotoAndStop(1);
			playSoundBySrc(_this.data[_this.pgId][_this.curId].soundPath);
		}
		function nextFun() {
			//
			/*console.log("下一个");
			console.log(_this.curId);
			console.log(_this.curPgDia.length-1);*/
			if (_this.curId < _this.curPgDia.length - 1) {
				_this.curId += 1;
				updata();
			} else {
				_this.canClick = true;
				_this._onp.setStu(true);
				return;
			}
		}
		function prevFun() {
			//
			_this.curId += 1;
		}
		
		
		function ondiamc(e) {
			if (!_this.canClick) {
				return
			}
			_this.clickMode = true;
			for (var item of _this.curPgDia) {
				item.gotoAndStop(0);
			}
			e.currentTarget.gotoAndStop(1);
			const lastChar = e.currentTarget.parent.name.slice(-1);
			_this.curId = Number(lastChar) - 1; // 将 lastChar 转为数字并减去 1
			console.log(_this.curId);
			//点击对话框
			updata();
		}
		
		//子机控制父级
		_this.onPause = function () {
			if (!audio.paused && !audio.ended) {
				audio.pause();
			}
		};
		
		_this.onPlay = function () {
			//if (audio.paused || audio.ended) {
			if (_this.canClick && _this.isEnded) {
				_this.curId = 0;
				_this.clickMode = false;
				_this.canClick = false;
				hideDia();
				updata();
				return;
			} else if (audio.paused) {
				audio.play();
			}
		};
		_this.onClear = function () {
			if (!audio.paused && !audio.ended) {
				audio.pause();
			}
			_this.curId = 0;
			_this.clickMode = false;
			_this.canClick = true;
			_this.isEnded = true;
			hideDia();
			_this._onp.setStu(true);
			//updata();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 跳转按钮
	this._onp = new lib.暂停播放组();
	this._onp.name = "_onp";
	this._onp.setTransform(872.05,641.9,1,1,0,0,0,37.5,20.4);

	this.gotoBtnMc = new lib.元件19();
	this.gotoBtnMc.name = "gotoBtnMc";
	this.gotoBtnMc.setTransform(657.85,229.95,1,1,0,0,0,153.1,153.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gotoBtnMc},{t:this._onp}]}).wait(1));

	// 标题
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgSAbQgGgCgCgGQgCgHAAgMQAAgMACgGQACgGAGgDQAHgCALABQAMgBAHACQAGADACAGQACAGAAAMQAAAMgCAHQgCAGgGACQgHACgMAAQgLAAgHgCg");
	this.shape.setTransform(309.45,57.52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AhGBRQAPAAAJgDQAJgDAGgGQAFgGACgIIhFiwIA1AAIApB+IACAAIAoh+IAzAAIg8CgQgIAZgJAPQgJARgLAIQgMAKgQAEQgQAEgXAAg");
	this.shape_1.setTransform(294.425,54.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgUBbQgYAAgQgMQgRgNgJgYQgDgJgCgLIgBgVIAAgHQABgYAJgTQAKgSAUgOQAIgFAIgDQAJgBAJAAIAIAAQARAAAKAEQAMAGAFAKIABABIAAABIABAAIABgFIABgBIAtAAIABAAIAAABIgCA6QAAAmADAYQACAYAFALIAAACIABAFIgBABIgtAAIgEgHIgFgSIgBAAQgHANgKAHQgLAGgPAAgAgdgtQgMAKgGAVIgBAKIgBAGQAAAUAHANQAHANANAFIAKACIAKABQAMABAJgFQAJgEAEgKQADgGADgLQABgJAAgNQAAgSgFgNQgEgMgJgGQgEgDgFgBQgHgBgGAAIgBAAQgQAAgLAKg");
	this.shape_2.setTransform(274.05,51.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgHBcQgPAAgPgCIgbgEIAAgoQAOAEAOACQAOACAMAAQAPABAHgEQAHgEAAgKQAAgIgDgEQgCgEgIgDQgGgDgOgDQgTgFgLgGQgJgFgFgJQgEgKAAgPQAAgZAQgOQARgOAmAAQAOAAAOACQANACAIACIgCAlIgNgDIgQgDIgQgBQgQAAgGAEQgGAEAAAJQAAAFADADQACADAIADIATAGQAUAFAKAGQALAGAEAKQAEAKABAQQAAAfgUANQgSANgfAAIgDAAg");
	this.shape_3.setTransform(256.4,51.2759);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("Ag6B0QgQgMgGgUQgGgVABgcQgBgaAGgUQAGgVAQgMQAPgNAdAAQAXAAAMAHQANAHAFAMIAAhfIAvAAIAAD6IgrAAIgEgZQgFAMgMAIQgNAIgXAAQgdAAgPgLgAgXgNQgIAIgDALQgCANAAAQQAAAQACANQADAMAIAHQAIAIAPAAQAQAAAJgHQAJgGAEgNQADgMAAgSQAAgRgEgNQgDgMgJgHQgJgHgQAAQgPAAgIAIg");
	this.shape_4.setTransform(228.7731,47.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AAiBbIAAhsQAAgSgGgIQgGgIgSAAQgNAAgKAGQgKAFgEAOIAAB1IgvAAIAAixIAvAAIAAAVQAIgNAPgGQANgGATAAQAWAAANAHQANAHAGANQAFANABAUIAAB5g");
	this.shape_5.setTransform(208.2,51.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgUBbQgYAAgQgMQgRgNgJgYQgDgJgCgLIgBgVIAAgHQAAgYAKgTQAKgSAUgOQAIgFAJgDQAIgBAJAAIAIAAQARAAALAEQAKAGAGAKIABABIABABIAAAAIABgFIABgBIAtAAIABAAIAAABIgCA6QAAAmADAYQACAYAFALIAAACIABAFIgBABIgtAAIgEgHIgFgSIgBAAQgHANgKAHQgLAGgPAAgAgdgtQgMAKgGAVIgCAKIAAAGQAAAUAHANQAHANANAFIAKACIAKABQANABAIgFQAJgEAEgKQADgGADgLQABgJAAgNQAAgSgFgNQgEgMgJgGQgEgDgFgBQgHgBgGAAIgBAAQgQAAgLAKg");
	this.shape_6.setTransform(186.85,51.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AAXB9IgwhMIgIAAIAABMIgvAAIAAj5IAvAAIAACJIAKAAIAuhBIA4AAIg/BSIBCBfg");
	this.shape_7.setTransform(160.5,47.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AAABcQgbABgTgIQgUgIgKgVQgKgUAAgkQAAgjAKgUQAKgUAUgIQATgJAbABQAcgBATAJQAUAIAKAUQAKAUAAAjQAAAkgKAUQgKAVgUAIQgSAHgaAAIgDAAgAgWgzQgIAGgEAMQgDANAAAUQAAAWADAMQAEAMAIAFQAJAFANAAQAPAAAIgFQAIgFAEgMQADgMAAgWQAAgUgDgNQgEgMgIgGQgJgFgOAAQgOAAgIAFg");
	this.shape_8.setTransform(139.725,51.3251);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AAABcQgbABgTgIQgUgIgKgVQgKgUAAgkQAAgjAKgUQAKgUAUgIQATgJAbABQAcgBATAJQAUAIAKAUQAKAUAAAjQAAAkgKAUQgKAVgUAIQgSAHgaAAIgDAAgAgWgzQgIAGgEAMQgDANAAAUQAAAWADAMQAEAMAIAFQAJAFANAAQAPAAAIgFQAIgFAEgMQADgMAAgWQAAgUgDgNQgEgMgIgGQgJgFgOAAQgOAAgIAFg");
	this.shape_9.setTransform(119.275,51.3251);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AhGByIAAjkIAzAAIAAC5IBaAAIAAArg");
	this.shape_10.setTransform(101.3,48.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhwCZIAAkxIBnAAQArAAAZAJQAZAKAKASQAKASgBAcQABAYgKAPQgLAQgYAHIAAACQAbAGANARQAOASAAAdQAAAcgKATQgKAUgZAKQgZALgrAAgAgtBjIAeAAQAXAAANgDQANgDAGgJQAFgIAAgQQAAgOgFgIQgFgJgOgEQgNgEgXABIgeAAgAgtgaIAWAAQAWAAAMgCQAOgDAGgIQAHgIAAgPQAAgQgHgIQgGgIgNgCQgNgCgWAAIgWAAg");
	this.shape_11.setTransform(48.3512,47.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D8075").s().p("AirCsQhHhHAAhlQAAhkBHhIQBHhGBkAAQBlAABHBGQBHBIAABkQAABlhHBHQhHBHhlAAQhkAAhHhHg");
	this.shape_12.setTransform(46.725,47.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag3BAQAMAAAHgCQAIgDADgEQAFgFACgHIg3iKIApAAIAhBjIABAAIAghjIAoAAIgvB+QgHATgHANQgHAMgIAIQgKAHgMADQgNADgSAAg");
	this.shape_13.setTransform(266.7,239.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgEBTQgKgEgEgKQgFgKAAgSIAAhBIgTAAIAAgeIATAAIAAghIAkAAIAAAhIAdAAIAAAeIgdAAIAAA+QAAAMAEAEQADAEAJAAIAHAAIAFgBIAAAdIgJABIgKAAIgDABQgPAAgIgFg");
	this.shape_14.setTransform(254.45,235.6525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSBkIAAiMIAlAAIAACMgAgMg8QgFgCgBgEQgCgEAAgJQAAgJACgEQABgEAFgCIAMgBIANABQAFACABAEQACAEAAAJQAAAJgCAEQgBAEgFACIgNABIgMgBg");
	this.shape_15.setTransform(246.125,234.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWBGIgziLIAqAAIAfBkIABAAIAghkIApAAIg0CLg");
	this.shape_16.setTransform(234.9,237.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSBkIAAiMIAlAAIAACMgAgMg8QgFgCgBgEQgCgEAAgJQAAgJACgEQABgEAFgCIAMgBIANABQAFACABAEQACAEAAAJQAAAJgCAEQgBAEgFACIgNABIgMgBg");
	this.shape_17.setTransform(223.625,234.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEBTQgKgEgFgKQgFgKABgSIAAhBIgSAAIAAgeIASAAIAAghIAkAAIAAAhIAdAAIAAAeIgdAAIAAA+QAAAMADAEQAEAEAKAAIAGAAIAFgBIAAAdIgJABIgKAAIgDABQgPAAgIgFg");
	this.shape_18.setTransform(215.2,235.6525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVBDQgPgHgIgQQgIgQAAgcQAAgbAIgQQAIgQAPgGQAQgHAVAAIAUABIARAEIAAAfIgQgEIgQgBQgMAAgIAEQgHAEgEAJQgDAJgBAPQABAQADAJQAEAJAHAEQAIAEANAAIAQgCQAIgBAIgDIAAAfIgLADIgNACIgOABIgDAAQgTAAgPgGg");
	this.shape_19.setTransform(204.15,237.2268);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA0BaIgQgsIhIAAIgQAsIgoAAIBCizIA0AAIBECzgAAZANIgYhEIgCAAIgYBEIAyAAg");
	this.shape_20.setTransform(188.25,235.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcBhIgVgDIAAgeIATAEIATABQAWAAAKgIQAKgIAAgUIAAgIQgEAKgKAFQgJAGgSgBQgXAAgMgJQgNgIgEgQQgGgQAAgVQAAgTAGgRQAEgQANgJQAMgKAXgBQARAAALAGQAJAFAEAKIAAgSIAlAAIAACAQAAAUgGAOQgIAOgRAIQgSAHgbAAIgUAAgAgSg+QgHAGgCAJQgBALAAALQAAAMACAKQACAJAGAGQAGAGAMAAQANAAAIgFQAHgGACgIQADgKAAgOQAAgNgDgKQgCgKgHgFQgIgGgNABQgMgBgGAHg");
	this.shape_21.setTransform(268.05,360.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAaBHIAAhUQABgPgFgGQgFgGgOAAQgKAAgIAEQgHAFgEAKIAABcIglAAIAAiLIAlAAIAAARQAGgKAMgFQAKgFAPAAQASAAAKAGQAKAFAFALQAEAKAAAQIAABeg");
	this.shape_22.setTransform(251.8025,358.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSBkIAAiMIAlAAIAACMgAgMg8QgFgCgBgEQgCgEAAgJQAAgJACgEQABgEAFgCIAMgBIANABQAFACABAEQACAEAAAJQAAAJgCAEQgBAEgFACIgNABIgMgBg");
	this.shape_23.setTransform(239.775,355.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AA3BaIAAiNIgBAAIgjBrIgmAAIgjhrIgBAAIAACNIgnAAIAAizIBBAAIAdBkIABAAIAfhkIA/AAIAACzg");
	this.shape_24.setTransform(224.575,356.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgrBCQgLgFgEgKQgEgLgBgPIAAhgIAmAAIAABWQAAAOAFAFQAEAHAOAAQAKAAAIgFQAGgEAEgKIAAhdIAlAAIAACMIgiAAIgDgRQgFAKgLAFQgKAEgQAAQgRAAgKgFg");
	this.shape_25.setTransform(198.15,358.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag3BaIAAizIAoAAIAACRIBHAAIAAAig");
	this.shape_26.setTransform(183.825,356.225);

	this.instance = new lib.ClipGroup_32_0();
	this.instance.setTransform(721.5,234.75,2.3343,2.3343,0,0,0,5.1,3.9);

	this.instance_1 = new lib.ClipGroup_33_0();
	this.instance_1.setTransform(701.9,225.85,2.3343,2.3343,0,0,0,13.7,4.4);

	this.instance_2 = new lib.ClipGroup_34_0();
	this.instance_2.setTransform(721.75,238.45,2.3343,2.3343,0,0,0,5.1,2.5);

	this.instance_3 = new lib.ClipGroup_35_0();
	this.instance_3.setTransform(690.25,233.65,2.3343,2.3343,0,0,0,8.9,4.6);

	this.instance_4 = new lib.ClipGroup_37();
	this.instance_4.setTransform(721.8,239.75,2.3343,2.3343,0,0,0,4.4,2.5);

	this.instance_5 = new lib.ClipGroup_38();
	this.instance_5.setTransform(684.3,236.55,2.3343,2.3343,0,0,0,8,2.5);

	this.instance_6 = new lib.ClipGroup_39();
	this.instance_6.setTransform(725.7,247.1,2.3343,2.3343,0,0,0,3.9,3.4);

	this.instance_7 = new lib.ClipGroup_40();
	this.instance_7.setTransform(725.7,242.8,2.3343,2.3343,0,0,0,3.9,4.6);

	this.instance_8 = new lib.ClipGroup_41();
	this.instance_8.setTransform(691.45,243.6,2.3343,2.3343,0,0,0,11.2,4.6);

	this.instance_9 = new lib.ClipGroup_42();
	this.instance_9.setTransform(727.15,249.05,2.3343,2.3343,0,0,0,1.2,3.6);

	this.instance_10 = new lib.ClipGroup_43();
	this.instance_10.setTransform(676.35,244.8,2.3343,2.3343,0,0,0,4,1);

	this.instance_11 = new lib.ClipGroup_44();
	this.instance_11.setTransform(727.6,251.65,2.3343,2.3343,0,0,0,1.4,3.6);

	this.instance_12 = new lib.ClipGroup_45();
	this.instance_12.setTransform(724.05,248.6,2.3343,2.3343,0,0,0,1.2,1.2);

	this.instance_13 = new lib.ClipGroup_46();
	this.instance_13.setTransform(696,252.35,2.3343,2.3343,0,0,0,12.5,3.4);

	this.instance_14 = new lib.ClipGroup_47();
	this.instance_14.setTransform(702.45,250.45,2.3343,2.3343,0,0,0,13.5,5.3);

	this.instance_15 = new lib.ClipGroup_51();
	this.instance_15.setTransform(672,253.55,2.3343,2.3343,0,0,0,0.6,1.9);

	this.instance_16 = new lib.ClipGroup_53();
	this.instance_16.setTransform(694.25,260.05,2.3343,2.3343,0,0,0,9.7,4.5);

	this.instance_17 = new lib.ClipGroup_54();
	this.instance_17.setTransform(670.85,250.4,2.3343,2.3343,0,0,0,0.1,0.1);

	this.instance_18 = new lib.ClipGroup_59();
	this.instance_18.setTransform(686.15,267.6,2.3343,2.3343,0,0,0,13.2,5.3);

	this.instance_19 = new lib.ClipGroup_60();
	this.instance_19.setTransform(724.4,259.95,2.3343,2.3343,0,0,0,3.6,4.6);

	this.instance_20 = new lib.ClipGroup_61();
	this.instance_20.setTransform(664.9,252.9,2.3343,2.3343,0,0,0,3.9,2.2);

	this.instance_21 = new lib.ClipGroup_62();
	this.instance_21.setTransform(723.85,264.3,2.3343,2.3343,0,0,0,7.2,6.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ai5CbIAAk1IFzAAIAAE1g");
	this.shape_27.setTransform(697.8132,243.446,2.3343,2.3343);

	this.instance_22 = new lib.ClipGroup_25_0();
	this.instance_22.setTransform(1041.45,243.45,2.3339,2.3339,0,0,0,27.5,14);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AkRCIIAAkPIIjAAIAAEPg");
	this.shape_28.setTransform(1040.6462,243.7233,2.3339,2.3339);

	this.instance_23 = new lib.ClipGroup_31_0();
	this.instance_23.setTransform(866.2,243.05,2.3339,2.3339,0,0,0,15.5,15.5);

	this.instance_24 = new lib.ClipGroup_24_0();
	this.instance_24.setTransform(543.5,243.5,2.3343,2.3343,0,0,0,16.3,16.3);

	this.instance_25 = new lib.ClipGroup_26_0();
	this.instance_25.setTransform(377.4,242.4,2.3339,2.3339,0,0,0,15.1,16.4);

	this.instance_26 = new lib.ClipGroup_27_0();
	this.instance_26.setTransform(377.4,242.4,2.3339,2.3339,0,0,0,15.1,16.4);

	this.instance_27 = new lib.ClipGroup_28_0();
	this.instance_27.setTransform(377.4,242.4,2.3339,2.3339,0,0,0,15.1,16.4);

	this.instance_28 = new lib.ClipGroup_29_0();
	this.instance_28.setTransform(377.4,242.4,2.3339,2.3339,0,0,0,15.1,16.4);

	this.instance_29 = new lib.ClipGroup_30_0();
	this.instance_29.setTransform(377.4,242.4,2.3339,2.3339,0,0,0,15.1,16.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#4495CB").ss(3,1,1).p("EAwxgTKIZ2AAIAATKIAATLI52AAI50AAI5zAAI50AAI50AAI0IAAIAAzLIAAzKIUIAAIAATKIAATLEAwxgTKIAATKIAATLAW9zKIAATKIZ0AAIZ2AAAW9zKIZ0AAAW9AAIAATLAi2zKIAATKIAATLA8qzKIAATKIZ0AAIZzAAA8qzKIZ0AAIZzAAEhKmAAAIUIAAIZ0AAIAATLEg2egTKIZ0AA");
	this.shape_29.setTransform(640.025,295.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#52A3DA").s().p("AqDTLIAAzLIUHAAI0HAAIAAzKIUHAAIAATKIAATLg");
	this.shape_30.setTransform(226.925,295.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#52A3DA").s().p("AACgIQgOAAgOALIgJAIIgCADIgBABIgFgEQAFgGAIgGQAQgNAQAAQAXAAATAZIgFAEQgRgXgUAAg");
	this.shape_31.setTransform(1037.323,369.0541,3.7853,3.7853);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#52A3DA").s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_32.setTransform(1050.0984,348.6136,3.7853,3.7853);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#52A3DA").s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_33.setTransform(1025.494,348.6136,3.7853,3.7853);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#458ECC").s().p("Ag1A1QgWgWAAgfQAAgdAWgXQAXgVAeAAQAfAAAXAVQAWAXAAAdQAAAfgWAWQgXAVgfAAQgeAAgXgVgAgzgyQgVAWAAAcQAAAdAVAWQAWAUAdAAQAeAAAWgUQAVgWAAgdQAAgcgVgWQgWgUgegBQgdABgWAUg");
	this.shape_34.setTransform(1037.323,358.3607,3.7853,3.7853);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag0A0QgWgWAAgeQAAgdAWgVQAWgWAeABQAfgBAWAWQAWAVAAAdQAAAegWAWQgWAUgfABQgegBgWgUg");
	this.shape_35.setTransform(1037.323,358.3607,3.7853,3.7853);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#52A3DA").s().p("AgeACIgNgMIAFgDIABABQAFAHAJAFQANAJAMAAQAUAAARgWIAFADQgTAZgXgBQgPAAgRgMg");
	this.shape_36.setTransform(871.573,368.9794,3.7853,3.7853);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#52A3DA").s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_37.setTransform(884.3484,348.6334,3.7853,3.7853);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#52A3DA").s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_38.setTransform(859.744,348.6334,3.7853,3.7853);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#458ECC").s().p("Ag1A0QgWgVAAgfQAAgeAWgVQAXgWAeAAQAfAAAXAWQAWAVAAAeQAAAfgWAVQgXAWgfAAQgeAAgXgWgAgzgxQgVAVAAAcQAAAeAVAUQAWAVAdAAQAeAAAWgVQAVgUAAgeQAAgcgVgVQgWgWgeAAQgdAAgWAWg");
	this.shape_39.setTransform(871.573,358.3806,3.7853,3.7853);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ag0A0QgWgWAAgeQAAgdAWgVQAWgWAeAAQAfAAAWAWQAWAVAAAdQAAAegWAWQgWAVgfAAQgeAAgWgVg");
	this.shape_40.setTransform(871.573,358.2859,3.7853,3.7853);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#52A3DA").s().p("AgeABIgNgLIAFgEIABABQAFAHAJAGQANAJAMAAQAUAAARgXIAFAEQgTAZgXAAQgQAAgQgOg");
	this.shape_41.setTransform(705.873,369.0993,3.7853,3.7853);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#52A3DA").s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_42.setTransform(718.6484,348.7533,3.7853,3.7853);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#52A3DA").s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_43.setTransform(694.044,348.7533,3.7853,3.7853);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#458ECC").s().p("Ag1A0QgWgVAAgfQAAgdAWgWQAXgWAeAAQAfAAAXAWQAWAWAAAdQAAAfgWAVQgXAWgfAAQgeAAgXgWgAgzgxQgVAVAAAcQAAAdAVAVQAWAVAdAAQAeAAAWgVQAVgVAAgdQAAgcgVgVQgWgVgeAAQgdAAgWAVg");
	this.shape_44.setTransform(705.873,358.4058,3.7853,3.7853);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag0A0QgWgWAAgeQAAgdAWgVQAWgWAeAAQAfAAAWAWQAWAVAAAdQAAAegWAWQgWAVgfAAQgeAAgWgVg");
	this.shape_45.setTransform(705.873,358.4058,3.7853,3.7853);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#52A3DA").s().p("AgeACIgNgMIAFgDIABABQAFAGAJAGQANAJAMAAQAUAAARgWIAFADQgTAZgXAAQgQgBgQgMg");
	this.shape_46.setTransform(540.173,369.1191,3.7853,3.7853);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#52A3DA").s().p("AgIAJQgEgEAAgFQAAgFAEgDQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_47.setTransform(552.9484,348.7732,3.7853,3.7853);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#52A3DA").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_48.setTransform(528.344,348.7732,3.7853,3.7853);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#458ECC").s().p("Ag1A0QgWgWAAgeQAAgeAWgVQAXgWAeAAQAfAAAXAWQAWAVAAAeQAAAegWAWQgXAWgfAAQgeAAgXgWgAgzgxQgVAVAAAcQAAAdAVAVQAWAVAdAAQAeAAAWgVQAVgVAAgdQAAgcgVgVQgWgVgeAAQgdAAgWAVg");
	this.shape_49.setTransform(540.173,358.4257,3.7853,3.7853);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("Ag0AzQgWgVAAgeQAAgdAWgVQAWgWAeAAQAfAAAWAWQAWAVAAAdQAAAegWAVQgWAWgfAAQgeAAgWgWg");
	this.shape_50.setTransform(540.173,358.4257,3.7853,3.7853);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#52A3DA").s().p("AACgIQgNAAgPAKIgJAJIgCACIgBABIgFgDQAFgHAIgEQAQgNAQgBQAXABATAYIgFADQgRgWgUAAg");
	this.shape_51.setTransform(374.473,369.239,3.7853,3.7853);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#52A3DA").s().p("AgIAJQgEgEAAgFQAAgFAEgDQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_52.setTransform(387.2484,348.893,3.7853,3.7853);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#52A3DA").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_53.setTransform(362.644,348.893,3.7853,3.7853);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#458ECC").s().p("Ag1A0QgWgWAAgeQAAgeAWgVQAXgWAeAAQAfAAAXAWQAWAVAAAeQAAAegWAWQgXAWgfAAQgeAAgXgWgAgzgxQgVAUAAAdQAAAdAVAWQAWAUAdAAQAeAAAWgUQAVgWAAgdQAAgdgVgUQgWgVgeAAQgdAAgWAVg");
	this.shape_54.setTransform(374.473,358.4509,3.7853,3.7853);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("Ag0AzQgWgVAAgeQAAgdAWgVQAWgWAeAAQAfAAAWAWQAWAVAAAdQAAAegWAVQgWAWgfAAQgeAAgWgWg");
	this.shape_55.setTransform(374.473,358.5455,3.7853,3.7853);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#008379").s().p("AiuA/QgHgCgGgFQgDgEAAgFQgBgDADgCQACgDAEAAQADAAADAEIAHAHIAFACIAGABQAIAAAEgCQADgCACgEQACgDAAgFIABgNQgGAHgFACQgEADgJAAQgJAAgHgFQgHgEgEgJQgEgJAAgKQAAgHADgIQACgHAEgEQAEgFAGgCQAGgDAGAAQAJAAAEADQAGADAGAHIAAgDQAAgEACgDQACgDAEAAQAGAAABAEQACADAAAHIAAA1QAAAKgCAGQgCAHgEAEQgFAFgHACQgJACgJAAQgJAAgHgDgAipgRQgFAGAAALQAAALAFAGQAEAFAJAAQAFAAAEgCQADgCADgGQADgFAAgHQAAgJgFgIQgFgGgIAAQgJAAgEAGgAI7AcQgKgLAAgRQAAgHADgHQACgHAEgGQAGgFAGgCQAIgDAHAAQALAAAJAFQAHAEAEAIQAEAHAAAHQAAAGgEADQgGACgFAAIglAAQAAAGADAFQADAFADACQAFADAFAAIAFgBIAGgDIAKgIQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAABABQAAAAAAABQAAABAAAAIgCAGQgCAEgEADQgGAEgEABQgGACgIAAQgSAAgKgKgAJmgFQAAgJgFgFQgGgFgGAAQgHAAgFAFQgEAFgBAJIAiAAIAAAAgAISAjQgDgDAAgGIAAgoQgBgDgDgDQgCgCgEAAQgEAAgDACQgDACgDAEQgBAGAAAJIAAAZQgBAGgCADQgDADgEAAQgDAAgEgDQgDgDABgGIgBgnQAAgEgDgDQgCgCgEAAQgJAAgEAGQgDAHAAAKIAAAZQAAAHgCACQgCADgFAAQgEAAgDgDQgDgDABgGIAAg0QgBgFADgDQADgDAEAAQADAAADADQACACAAAFIAAACQAGgGAEgDQAHgDAGAAQAHAAAFADQAFACAEAHQAEgGAGgDQAFgDAGAAQAJAAAFADQAFADADAGQACAGABAKIAAAjQAAAGgEADQgCADgEAAQgEAAgDgDgAGVAjQgDgDABgFIAAg1QgBgFADgDQAEgDADAAQAEAAADADQADADAAAFIAAA1QAAAFgDADQgDADgEAAQgDAAgEgDgAFrAjQgEgDgBgFQgCgFAAgJIAAgjIgDAAQgDAAgCgCQgCgBgBgEQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBABAAQACgCAEAAIACAAIABgTIABgEIADgDIAFgBQADAAADACIADAFIAAAUIAGAAQAFAAABACQADABAAADQAAAEgDACQgDABgGAAIgDAAIAAAoIACAEQAAABAAAAQABAAAAAAQABABABAAQAAAAABAAIAJgCQABAAAAAAQAAAAABABQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQAAADgFAEQgEACgKAAQgJAAgFgDgADyAcQgLgKABgSQgBgJADgFQACgHAFgGQAGgFAFgCQAIgDAIAAQALAAAIAFQAIAEADAIQAFAHAAAHQAAAGgFADQgFACgGAAIgkAAQgBAGADAFQACAFAFACQAEADAFAAIAGgBIAFgDIAKgIQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQABAAAAAAQABAAABABQAAAAABAAQAAAAAAABQABAAAAABQABAAAAABQAAAAAAABQABABAAAAIgDAGQgCAEgDADQgHAEgEABQgFACgIAAQgTAAgJgKgAEdgFQgBgJgFgFQgFgFgGAAQgHAAgFAFQgEAFgBAJIAiAAIAAAAgACeAcQgKgLAAgRQAAgHADgHQADgJAEgEQAGgFAGgCQAGgDAJAAQALAAAIAFQAHAEAEAIQAEAGAAAIQAAAHgEACQgFACgGAAIgkAAQAAAHACAEQADAFAEACQAEADAFAAIAFgBIAGgDIAFgDIAFgFQABgBAAAAQABAAAAAAQABgBAAAAQABAAABAAQADAAABACQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAAEgCACQgCAEgEADQgEADgGACQgGACgIAAQgSAAgKgKgADJgFQgBgKgEgEQgFgFgHAAQgGAAgGAFQgEAFAAAJIAhAAIAAAAgABhAjQgDgCAAgGIAAgzQAAgNAJAAQAEAAACADQACACABAHQADgGADgDQAFgDAFAAQAGAAAGADQAFADAAAFQAAADgCACQgDADgDAAIgEgCIgIgBQgEAAgCACQgDACgBAFIgCAKIAAAdQAAAFgDADQgDADgEAAQgEAAgCgDgAA1AjQgDgDAAgFIAAgxIgFAAQgFAAgCgCQgCgBAAgEQAAgGAKAAIAEAAIAAgGQAAgIADgGQACgFAFgCQAGgDAIAAQARAAAAAIQAAABAAAAQAAABAAABQgBAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgIgBQgFAAgBADQgCADAAAFIAAAFIAEAAQALAAAAAGQAAAFgDABQgCABgGAAIgEAAIAAAxQAAAFgDADQgCADgEAAQgFAAgCgDgAg1AjQgHgDgDgFQgDgEAAgFQAAgDACgCQACgCADAAQABAAABAAQAAAAABAAQAAAAABAAQAAABABAAIACAEQADAFAFACQAEADAGAAQAHAAACgDQAFgCAAgDQAAgFgFgCQgCgCgJgDIgRgFQgGgCgDgEQgEgEABgGQAAgGACgFQAEgFAGgDQAIgDAJAAQAGAAAGACQAIACACACQADACADADIACAGQAAADgDADQgBACgFAAQgDAAgBgCIgFgFIgFgEQgEgCgDAAQgFAAgEACQgDACAAAEQAAADACABQACACAFABIALADIAOAGQAFABADAEQAEAFAAAFQAAAHgFAGQgDAGgIACQgFADgNAAQgJAAgIgDgAjfAjQgDgDAAgFIAAgeQAAgKgCgFQgDgEgIAAQgEAAgFACQgEADgBAGQgCAEAAAKIAAAYQAAAFgDADQgCADgEAAQgEAAgDgDQgCgCAAgGIAAg1QAAgGACgCQACgDAEAAIAEABIADAEQACACAAADIAAADQAEgHAHgDQAFgDAIAAQAIAAAFADQAGADADAGIADAIIAAAsQAAAFgDADQgCADgEAAQgEAAgDgDgAk0AjQgDgDAAgFIAAg1QAAgFADgDQACgDAEAAQADAAAEADQACADAAAFIAAA1QAAAFgCADQgDADgEAAQgEAAgCgDgAlbAjQgDgDAAgGIAAhEIgSBIIgDAGQgDACgFAAQgDAAgDgCIgEgDIgCgGIgRhFIAABEQAAAGgDADQgCADgFAAQgEAAgCgDQgDgDgBgGIAAhOQAAgGAEgDQAEgCAGAAIAGAAQAGAAACABQABABAAAAQABAAAAABQABAAAAABQAAAAABABIACAIIAPA2IAOg2IAEgIQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQACgBAGAAIAHAAQAFAAAEACQAEADgBAGIAABOQABAGgDADQgDADgEAAQgEAAgDgDgAnwAjQgDgDAAgFIAAgCIgHAHQgEAEgEAAQgEACgGAAQgGAAgGgDQgGgDgDgFQgDgHAAgKIAAgkQAAgFACgDQAEgDADAAQAEAAADADQADADAAAFIAAAdIABALQABAEADADQACACAGAAQADAAAGgCQAEgEABgEQACgDAAgNIAAgXQAAgFADgDQADgDADAAQAEAAADADQACACAAAGIAAA1QAAAGgCACQgCADgEAAQgEAAgCgDgAprAkQgGAAgDgDQgDgDAAgGIAAhMQAAgHADgDQADgDAEAAQAFAAADADQACADAAAHIAABIIAqAAQAFAAACACQACACABAEQgBAEgCACQgCACgFAAgAhigZIgBgDQAAgDACgCIAGgEQADgEgBgDIAAAAQgFAAgDgDQgCgDAAgEQAAgFACgDQADgDAFAAQAEAAACACQACACACADQACAEAAAFQAAAHgDAGQgEAHgDACQgDADgFAAgAGVgwQgCgDAAgEQAAgEACgCQAEgDADAAQAEAAADACQADADAAAEQAAAFgDACQgDACgEAAQgFAAgCgCgAk0gwQgDgDAAgEQAAgEADgCQADgDADAAQAEAAADACQACAEAAADQAAAEgCADQgDACgEAAQgEAAgCgCg");
	this.shape_56.setTransform(640.0095,128.6247,2.1719,2.1719);

	this.instance_30 = new lib.ClipGroup_57();
	this.instance_30.setTransform(1425.3,223.95,2.3343,2.3343,0,0,0,0.2,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_30},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.shape_28},{t:this.instance_22},{t:this.shape_27},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// 对话内容
	this.dia_1_1 = new lib.d1();
	this.dia_1_1.name = "dia_1_1";
	this.dia_1_1.setTransform(530,512.5,1,1,0,0,0,159.4,40.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FE8659").ss(8,1,1).p("Eg4LgRLMBwXAAAQCVAABoB3QBpB4AACqIAAVlQAACphpB4QhoB4iVAAMhwXAAAQiVAAhph4Qhnh4AAipIAA1lQAAiqBnh4QBph3CVAAg");
	this.shape_57.setTransform(640,568.45);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("Eg4LARMQiVAAhoh4Qhoh3AAiqIAA1lQAAipBoh4QBoh4CVAAMBwXAAAQCVAABoB4QBpB4AACpIAAVlQAACqhpB3QhoB4iVAAg");
	this.shape_58.setTransform(640,568.45);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FCE0CE").ss(18,1,1).p("Eg4LgRLMBwXAAAQCVAABoB3QBpB4AACqIAAVlQAACphpB4QhoB4iVAAMhwXAAAQiVAAhph4Qhnh4AAipIAA1lQAAiqBnh4QBph3CVAAg");
	this.shape_59.setTransform(640,568.45);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("Eg4LARMQiVAAhoh4Qhoh3AAiqIAA1lQAAipBoh4QBoh4CVAAMBwXAAAQCVAABoB4QBpB4AACpIAAVlQAACqhpB3QhoB4iVAAg");
	this.shape_60.setTransform(640,568.45);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FE8659").ss(8,1,1).p("Eg4LgRLMBwXAAAQCVAABoB3QBpB4AACqIAAVlQAACphpB4QhoB4iVAAMhwXAAAQiVAAhph4Qhnh4AAipIAA1lQAAiqBnh4QBph3CVAAg");
	this.shape_61.setTransform(640,568.45);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("Eg4LARMQiVAAhoh4Qhoh3AAiqIAA1lQAAipBoh4QBoh4CVAAMBwXAAAQCVAABoB4QBpB4AACpIAAVlQAACqhpB3QhoB4iVAAg");
	this.shape_62.setTransform(640,568.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.dia_1_1}]}).wait(1));

	// diban
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.8)").s().p("EhkVAEsIAApXMDIrAAAIAAJXg");
	this.shape_63.setTransform(639.9,690.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_63).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(637.7,368.2,1427.9,712.3);
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
		{src:"images/index_atlas_1.png?1733291495230", id:"index_atlas_1"}
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