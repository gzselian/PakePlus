(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[599,0,403,434],[849,436,314,422],[1004,0,301,422],[419,1093,438,340],[0,635,454,422],[456,635,391,456],[0,1059,417,426],[0,0,597,633],[1090,860,221,268],[859,860,229,263]]}
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
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_11 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_12 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_13 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_6 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image_7 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Image_8 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Image_9 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.位图730 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.位图731 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(9);
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


(lib.元件32复制 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Egn8AGCQhqAAgNheIgCAAIAAgIIAAjyQhXgkhHhPQgugzgmhEIAYAKQCEAzBWgBIAAiFQABh4B4AAMBTsAAAQB4AAAAB4IAAIlIAAAIIgCAAQgFArgZAXQgeAcg6AAg");
	this.shape.setTransform(299.45,40.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件32复制, rect = new cjs.Rectangle(7.5,1.5,584,77.1), [rect]);


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
	mask.graphics.p("AoJGVIAAsoIQTAAIAAMog");
	mask.setTransform(52.55,40.8);

	// 图层_3
	this.instance = new lib.Image_13();
	this.instance.setTransform(0,0,0.2397,0.2399);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_31, rect = new cjs.Rectangle(0.4,0.4,104.4,80.9), [rect]);


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
	mask.graphics.p("AllH3IAAvtILLAAIAAPtg");
	mask.setTransform(35.975,50.425);

	// 图层_3
	this.instance = new lib.Image_12();
	this.instance.setTransform(0,0,0.2394,0.2395);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30, rect = new cjs.Rectangle(0.2,0.1,71.6,100.7), [rect]);


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
	mask.graphics.p("AlzH3IAAvtILnAAIAAPtg");
	mask.setTransform(37.525,50.425);

	// 图层_3
	this.instance = new lib.Image_11();
	this.instance.setTransform(0,0,0.2393,0.2395);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29, rect = new cjs.Rectangle(0.3,0.1,74.5,100.7), [rect]);


(lib.ClipGroup_17 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EgqEA66MAAAh1zMBUJAAAMAAAB1zg");
	mask.setTransform(269.3,377.025);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AA5AGQgSgDgIgCQgHgCgQgDIgIAAQgFAAgEgCQgIgDgNAAIgKABIgFgBQgLgCgGAAIgUAAIAAgEIAUAAIARAEIAPAAQAOAAAIADQADACAFgBIAIABIAYAFIAaAEQARADAIAHIgCADQgHgIgRgCg");
	this.shape.setTransform(100.125,399.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#848484").s().p("AA5AGQgSgCgIgDQgHgCgQgCIgGgBIgCABQgFgBgEgCQgIgDgNAAIgKAAIgFAAQgLgCgGAAIgHgBIgNABIAAgEIAUAAIARAEIAPAAQAOgBAIAEQADACAFgBIAIABIAYAFIAaAEQARADAIAIIgCACQgHgIgRgCg");
	this.shape_1.setTransform(100.125,402.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#848484").s().p("AA5AGIgagFIgXgEIgIgBQgGABgDgCQgIgEgNABIgPAAIgRgEIgUAAIAAgCIANgBIAHABIAJABIAIABIAPAAQAOAAAIAEQADABAFABIAIAAIAYAGQAHABATACQARADAIAHIgCACQgHgGgRgDg");
	this.shape_2.setTransform(100.125,405.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#848484").s().p("AhVAmIAGgFIAGgGIAYgNIAGgEIAEAAIABAAIAEgBIAEgDIAHgEIAVgGIAPgIIAdgMIALgEIAKgDQAPgFAHgDIABACIgLAEIgLAEIgVAIIgdALIgOAJIgLADIgMADQgDABgCACIgFAEIgFABIgEAAIgFAEIgYANQgIAIgFACg");
	this.shape_3.setTransform(121.925,397.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#848484").s().p("AhVAlQAEgBAIgJIAMgHIAMgFIAGgFIAEgBIABAAIAEAAIAFgDIAGgEIALgCIALgEIAOgJIAdgLIAVgIQAEgBAHgCIALgEIABADIgWAHQgHAEgOADIgdAMIgOAJIgWAGIgGADIgFADIgFABIgBAAIgDABIgFAEIgYAMQgIAJgFACg");
	this.shape_4.setTransform(124.025,399.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#848484").s().p("AhVAmIAGgFIAGgGIAZgMIAGgFIAEAAIAAAAIAEgBIAFgDIAGgDIAWgGIAOgJIAdgMQAPgEAGgDQAPgFAHgDIABACQgHAEgPAEQgHAEgOAEIgdALIgOAJQgFACgRAEIgGADIgFAEIgFABIAAAAIgEAAIgFAEIgYANQgIAIgFACg");
	this.shape_5.setTransform(125.675,401.775);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17, rect = new cjs.Rectangle(91.9,393.5,42.5,13.3), [rect]);


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
	mask.graphics.p("AnfIGIAAwLIO/AAIAAQLg");
	mask.setTransform(48.325,52.05);

	// 图层_3
	this.instance = new lib.Image_10();
	this.instance.setTransform(0,0,0.2397,0.2397);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, rect = new cjs.Rectangle(0.4,0.3,96,103.6), [rect]);


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
	mask.graphics.p("AnpIHIAAwNIPTAAIAAQNg");
	mask.setTransform(49.1,52.1);

	// 图层_3
	this.instance = new lib.Image_9();
	this.instance.setTransform(0,0,0.1646,0.1646);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, rect = new cjs.Rectangle(0.1,0.2,98,103.9), [rect]);


(lib.ClipGroup_10_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("EgqEA66MAAAh1zMBUJAAAMAAAB1zg");
	mask.setTransform(269.3,377.025);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#028379").s().p("AgnBiQgYAAgRgRQgRgRAAgYIAAhPQAAgYARgRQARgRAYAAIBPAAQAYAAARARQARARAAAYIAABPQAAAYgRARQgRARgYAAgAhGhGQgNAMAAATIAABPQAAATANANQANANASgBIBPAAQASABANgNQANgNAAgTIAAhPQAAgTgNgMQgNgNgSgBIhPAAQgSABgNANg");
	this.shape.setTransform(319.975,446.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBbQgVAAgPgPQgPgPAAgVIAAhPQAAgWAPgOQAPgPAVAAIBPAAQAVAAAPAPQAPAOAAAWIAABPQAAAVgPAPQgPAPgVAAg");
	this.shape_1.setTransform(319.975,446.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#028379").s().p("AgnBiQgYAAgRgRQgRgRAAgYIAAhPQAAgYARgRQARgRAYAAIBPAAQAYAAARARQARARAAAYIAABPQAAAYgRARQgRARgYAAgAhGhGQgNAMAAATIAABPQAAATANANQANANASgBIBPAAQASABANgNQANgNAAgTIAAhPQAAgTgNgMQgNgNgSgBIhPAAQgSABgNANg");
	this.shape_2.setTransform(425.925,446.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnBbQgVAAgPgPQgPgPAAgVIAAhPQAAgWAPgOQAPgPAVAAIBPAAQAVAAAPAPQAPAOAAAWIAABPQAAAVgPAPQgPAPgVAAg");
	this.shape_3.setTransform(425.925,446.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#028379").s().p("AgnBiQgYAAgRgRQgRgRAAgYIAAhPQAAgYARgRQARgRAYAAIBPAAQAYAAARARQARARAAAYIAABPQAAAYgRARQgRARgYAAgAhGhGQgNAMAAATIAABPQAAATANANQANANASgBIBPAAQASABANgNQANgNAAgTIAAhPQAAgTgNgMQgNgNgSgBIhPAAQgSABgNANg");
	this.shape_4.setTransform(214.025,446.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnBbQgVAAgPgPQgPgPAAgVIAAhPQAAgWAPgOQAPgPAVAAIBPAAQAVAAAPAPQAPAOAAAWIAABPQAAAVgPAPQgPAPgVAAg");
	this.shape_5.setTransform(214.025,446.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#028379").s().p("AgnBiQgYAAgRgRQgRgRAAgYIAAhPQAAgYARgRQARgRAYAAIBPAAQAYAAARARQARARAAAYIAABPQAAAYgRARQgRARgYAAgAhGhGQgNAMAAATIAABPQAAATANANQANANASgBIBPAAQASABANgNQANgNAAgTIAAhPQAAgTgNgMQgNgNgSgBIhPAAQgSABgNANg");
	this.shape_6.setTransform(108.075,446.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnBbQgVAAgPgPQgPgPAAgVIAAhPQAAgWAPgOQAPgPAVAAIBPAAQAVAAAPAPQAPAOAAAWIAABPQAAAVgPAPQgPAPgVAAg");
	this.shape_7.setTransform(108.075,446.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#028379").s().p("AgnBiQgYAAgRgRQgRgRAAgYIAAhPQAAgYARgRQARgRAYAAIBPAAQAYAAARARQARARAAAYIAABPQAAAYgRARQgRARgYAAgAhGhGQgNAMAAATIAABPQAAASANANQANANASABIBPAAQASgBANgNQANgNAAgSIAAhPQAAgTgNgMQgNgNgSgBIhPAAQgSABgNANg");
	this.shape_8.setTransform(319.975,286.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnBbQgVAAgPgPQgPgPAAgVIAAhPQAAgVAPgPQAPgPAVAAIBPAAQAVAAAPAPQAPAPAAAVIAABPQAAAVgPAPQgPAPgVAAg");
	this.shape_9.setTransform(319.975,286.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#028379").s().p("AgnBiQgYAAgRgRQgRgRAAgYIAAhPQAAgYARgRQARgRAYAAIBPAAQAYAAARARQARARAAAYIAABPQAAAYgRARQgRARgYAAgAhGhGQgNAMAAATIAABPQAAASANANQANANASABIBPAAQASgBANgNQANgNAAgSIAAhPQAAgTgNgMQgNgNgSgBIhPAAQgSABgNANg");
	this.shape_10.setTransform(425.925,286.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnBbQgVAAgPgPQgPgPAAgVIAAhPQAAgVAPgPQAPgPAVAAIBPAAQAVAAAPAPQAPAPAAAVIAABPQAAAVgPAPQgPAPgVAAg");
	this.shape_11.setTransform(425.925,286.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#028379").s().p("AgnBiQgYAAgRgRQgRgRAAgYIAAhPQAAgYARgRQARgRAYAAIBPAAQAYAAARARQARARAAAYIAABPQAAAYgRARQgRARgYAAgAhGhGQgNAMAAATIAABPQAAASANANQANANASABIBPAAQASgBANgNQANgNAAgSIAAhPQAAgTgNgMQgNgNgSgBIhPAAQgSABgNANg");
	this.shape_12.setTransform(214.025,286.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnBbQgVAAgPgPQgPgPAAgVIAAhPQAAgVAPgPQAPgPAVAAIBPAAQAVAAAPAPQAPAPAAAVIAABPQAAAVgPAPQgPAPgVAAg");
	this.shape_13.setTransform(214.025,286.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#028379").s().p("AgnBiQgYAAgRgRQgRgRAAgYIAAhPQAAgYARgRQARgRAYAAIBPAAQAYAAARARQARARAAAYIAABPQAAAYgRARQgRARgYAAgAhGhGQgNAMAAATIAABPQAAASANANQANANASABIBPAAQASgBANgNQANgNAAgSIAAhPQAAgTgNgMQgNgNgSgBIhPAAQgSABgNANg");
	this.shape_14.setTransform(108.075,286.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgnBbQgVAAgPgPQgPgPAAgVIAAhPQAAgVAPgPQAPgPAVAAIBPAAQAVAAAPAPQAPAPAAAVIAABPQAAAVgPAPQgPAPgVAAg");
	this.shape_15.setTransform(108.075,286.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10_0, rect = new cjs.Rectangle(98.3,276.4,337.4,180.4), [rect]);


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
	mask.graphics.p("AnxH7IAAv1IPjAAIAALAIg2BJIA2BKIAACig");
	mask.setTransform(50.125,50.975);

	// 图层_3
	this.instance = new lib.Image_8();
	this.instance.setTransform(0,0,0.2399,0.2395);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, rect = new cjs.Rectangle(0.4,0.3,99.6,101.5), [rect]);


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
	mask.graphics.p("AnTIgIAAuuIKXAAIAAiQIEQAAIAAKBIhSCAIBSBqIAADTg");
	mask.setTransform(46.875,54.7);

	// 图层_3
	this.instance = new lib.Image_7();
	this.instance.setTransform(0,0,0.2399,0.2397);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, rect = new cjs.Rectangle(0.1,0.4,93.6,108.7), [rect]);


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
	mask.graphics.p("AocH3IAAvtIAPAAIAAA/IHXAAIAAg/IJTAAIAAPtg");
	mask.setTransform(54.375,50.425);

	// 图层_3
	this.instance = new lib.Image_6();
	this.instance.setTransform(0,0,0.2396,0.2395);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, rect = new cjs.Rectangle(0.3,0.1,108.3,100.7), [rect]);


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
	this.shape.setTransform(157.9823,0.5339,0.5842,0.7169);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFAED").s().p("A35J2IAAzrMAvzAAAIAATrg");
	this.shape_1.setTransform(157.9823,0.5339,0.5842,0.7169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},4).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect=new cjs.Rectangle(68.6,-44.6,178.8,90.4), rect, rect, rect, rect, rect];


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
	this.shape.setTransform(20.2734,10.9751,0.7179,0.7183,-1.0066);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F99703").s().p("AgMALQgFAAgDgDQgDgDAAgFIAAAAQAAgEADgDQADgDAFAAIAZAAQAFAAADADQADADAAAEIAAAAQAAAFgDADQgDADgFAAg");
	this.shape_1.setTransform(20.2734,10.9751,0.7179,0.7183,-1.0066);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAACsQgKABgIgJQgIgHAAgLIAAkjQAAgLAIgIQAIgHAKAAIAAAAQALAAAIAHQAIAIAAALIAAEjQAAALgIAHQgIAJgLgBg");
	this.shape_2.setTransform(22.5783,22.4041,0.3436,0.269);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAACsQgKABgIgJQgIgHAAgLIAAkjQAAgLAIgIQAIgHAKAAIAAAAQALAAAIAHQAIAIAAALIAAEjQAAALgIAHQgIAJgLgBg");
	this.shape_3.setTransform(18.0283,22.4041,0.3436,0.269);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F99703").s().p("Ai9BQQghAAgXgYQgYgXAAghQAAggAYgYQAXgXAhAAIF7AAQAhAAAYAXQAXAYAAAgQAAAhgXAXQgYAYghAAg");
	this.shape_4.setTransform(20.1509,14.1754,0.3437,0.344,-0.2262);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F99703").s().p("Ag2BgQglAAAAglIgNiYIgBgBIABgBIDQAAIACACIAAAAIgSCYQAAAlgmAAg");
	this.shape_5.setTransform(20.3762,23.3401,0.7179,0.7184);

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
	this.shape.graphics.f().s("#F69602").ss(6,1,1).p("AhBhxIAADjABChxIAADj");
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
	mask.graphics.p("AocH3IAAvtIQ5AAIAAPtg");
	mask.setTransform(54.375,50.425);

	// 图层_3
	this.instance = new lib.ClipGroup_8();
	this.instance.setTransform(54.4,50.5,1,1,0,0,0,54.4,50.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18, rect = new cjs.Rectangle(0.3,0.1,108.3,100.7), [rect]);


(lib.ClipGroup_16 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AnTIgIAAw+IOnAAIAAKBIhSCAIBSBqIAADTg");
	mask.setTransform(46.875,54.7);

	// 图层_3
	this.instance = new lib.ClipGroup_9();
	this.instance.setTransform(46.9,54.6,1,1,0,0,0,46.9,54.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, rect = new cjs.Rectangle(0.1,0.4,93.6,108.7), [rect]);


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
	mask.graphics.p("AnxH7IAAv1IPjAAIAALAIg2BJIA2BKIAACig");
	mask.setTransform(50.125,50.975);

	// 图层_3
	this.instance = new lib.ClipGroup_10();
	this.instance.setTransform(50,51,1,1,0,0,0,50,51);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15, rect = new cjs.Rectangle(0.4,0.3,99.6,101.5), [rect]);


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
	mask.graphics.p("AnpIHIAAwNIPTAAIAAQNg");
	mask.setTransform(49.1,52.1);

	// 图层_3
	this.instance = new lib.ClipGroup_11();
	this.instance.setTransform(49.1,52.1,1,1,0,0,0,49.1,52.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, rect = new cjs.Rectangle(0.1,0.2,98,103.9), [rect]);


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
	mask.graphics.p("AnfIGIAAwLIO/AAIAAQLg");
	mask.setTransform(48.325,52.05);

	// 图层_3
	this.instance = new lib.ClipGroup_12();
	this.instance.setTransform(48.3,52,1,1,0,0,0,48.3,52);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, rect = new cjs.Rectangle(0.4,0.3,96,103.6), [rect]);


(lib.ClipGroup_9_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AlzH3IAAvtILnAAIAAPtg");
	mask.setTransform(37.525,50.425);

	// 图层_3
	this.instance = new lib.ClipGroup_29();
	this.instance.setTransform(37.6,50.5,1,1,0,0,0,37.6,50.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9_0, rect = new cjs.Rectangle(0.3,0.1,74.5,100.7), [rect]);


(lib.ClipGroup_8_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AllH3IAAvtILLAAIAAPtg");
	mask.setTransform(35.975,50.425);

	// 图层_3
	this.instance = new lib.ClipGroup_30();
	this.instance.setTransform(36,50.5,1,1,0,0,0,36,50.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8_0, rect = new cjs.Rectangle(0.2,0.1,71.6,100.7), [rect]);


(lib.ClipGroup_7_0 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AoJGVIAAsoIQTAAIAAMog");
	mask.setTransform(52.55,40.8);

	// 图层_3
	this.instance = new lib.ClipGroup_31();
	this.instance.setTransform(52.5,40.8,1,1,0,0,0,52.5,40.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7_0, rect = new cjs.Rectangle(0.4,0.4,104.4,80.9), [rect]);


(lib.元件21复制2 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(271.25,41.15,2.1517,1.3613,0,0,0,125.5,23.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.元件23(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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gXgBHIAKgSIAHgSQACgKAAgHIARAAQABAIgEALQgDAJgFAJIgKAQgEAkZgBhQgQAAgMgIQgKgJgGgRIgBgIIgBgIIAAgGQAAgRAHgNQAHgNAOgIIALgEIAKgBIACAAQATAAAMATIAAgFIARAAIAAA7IABAUIADASIgBABIgQAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAgBIgCgNIgDAGIgFAEQgEAEgHADQgGABgGAAgEAkMgC7QgIAFgGANIgCAIIAAAIIAAAEQAAALAEAIQAEAJAIAGIAHADIAHABIAFAAQAeAAAAgmIAAgHQABgPgGgKQgFgKgLgDIgEAAIgDAAQgMAAgJAHgEAiVgBmQgJgGgDgJIgCATIgPAAIAAiaIARAAIAABAQADgKAJgGQAIgFAPgBQATABAJAGQALAIADAMQAEANgBARQABAPgEANQgDANgLAHQgJAJgTgBQgPAAgIgFgEAiWgC+QgHAFgDAJQgEAKAAANQAAAMAEAKQADAJAHAGQAIAEANABQAMgBAGgFQAHgGABgKQACgKAAgKQAAgLgCgKQgCgJgGgGQgGgGgMAAQgNAAgIAFgAfQhmQgLgEgGgNQgGgMAAgWQAAgVAGgNQAGgMALgGQAKgEARgBQANABAJAEQAIAEAFAGQAEAHACAIIACAQIgBAFIAAAIIhKAEQAAANAEAHQACAIAJAEQAHADANAAQAJAAAJgCQAKgCAGgDIAAAQIgIADIgOADIgOAAQgQABgMgGgAfYi/QgIAEgCAJQgCAHgBALIA6gEQAAgIgCgHQgBgIgGgEQgGgEgLAAQgNAAgGAEgAachhQgQAAgMgIQgKgJgFgRIgCgIIgBgIIAAgGQABgRAGgNQAHgNAOgIIALgEIAKgBIACAAQASAAANATIAAgFIARAAIAAA7IACAUIACASIgBABIgQAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAgBIgBgNIgEAGIgEAEQgGAEgGADQgFABgIAAgAaPi7QgJAFgEANIgDAIIgBAIIAAAEQABALAEAIQAEAJAIAGIAHADIAIABIADAAQAfAAABgmIAAgHQAAgPgGgKQgFgKgMgDIgDAAIgDAAQgNAAgIAHgAYXhmQgIgGgEgJIgCATIgOAAIAAiaIAQAAIAABAQAEgKAIgGQAJgFAPgBQASABAKAGQAKAIADAMQAEANAAARQAAAPgEANQgDANgKAHQgKAJgSgBQgPAAgJgFgAYZi+QgIAFgDAJQgDAKAAANQAAAMADAKQADAJAIAGQAHAEANABQAMgBAHgFQAGgGACgKQACgKAAgKQAAgLgCgKQgCgJgHgGQgFgGgNAAQgNAAgHAFgAPPhhQgRAAgLgIQgLgJgFgRIgBgIIgBgIIAAgGQAAgRAHgNQAGgNAPgIIALgEIAJgBIACAAQATAAANATIAAgFIARAAIAAA7IABAUIACASIgBABIgQAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAgBIgCgNIgEAGIgEAEQgFAEgGADQgGABgHAAgAPBi7QgIAFgFANIgCAIIgBAIIAAAEQAAALAEAIQAFAJAHAGIAHADIAIABIAEAAQAfAAAAgmIAAgHQAAgPgGgKQgFgKgLgDIgEAAIgCAAQgNAAgJAHgAJLhoQgLgHgDgNQgEgNAAgQQAAgPAEgNQADgMALgJQAJgHASgBQAQAAAIAGQAIAGAEAKIAAhAIARAAIAACaIgOAAIgDgSQgEAIgJAGQgIAFgPAAQgSABgJgIgAJWi9QgHAGgCAJQgBAKAAALQAAALABAKQADAJAGAGQAGAGAMAAQANAAAIgFQAHgFADgKQAEgJgBgNQABgNgEgJQgDgKgHgEQgIgGgNAAQgMAAgGAGgAFphhQgRAAgLgIQgKgJgGgRIgBgIIgBgIIAAgGQAAgRAHgNQAGgNAPgIIALgEIAKgBIABAAQATAAANATIAAgFIARAAIAAA7IABAUIADASIgBABIgRAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIgCgNIgEAGIgEAEQgFAEgGADQgGABgHAAgAFbi7QgIAFgFANIgCAIIgBAIIAAAEQAAALAFAIQAEAJAHAGIAIADIAHABIAEAAQAfAAAAgmIAAgHQAAgPgGgKQgFgKgLgDIgDAAIgEAAQgMAAgJAHgAiUhoQgKgHgDgNQgEgNAAgQQAAgPAEgNQADgMAKgJQAKgHASgBQAQAAAIAGQAJAGACAKIAAhAIASAAIAACaIgPAAIgDgSQgDAIgIAGQgJAFgPAAQgSABgKgIgAiJi9QgGAGgCAJQgCAKAAALQAAALACAKQACAJAHAGQAGAGAMAAQAOAAAHgFQAIgFADgKQADgJgBgNQABgNgDgJQgDgKgIgEQgHgGgOAAQgMAAgHAGgAj5hhQgRAAgKgIQgLgJgFgRIgCgIIAAgIIAAgGQAAgRAGgNQAHgNAOgIIALgEIAKgBIACAAQASAAANATIAAgFIASAAIAAA7IABAUIACASIgBABIgQAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBIgBgNIgEAGIgEAEQgFAEgGADQgHABgHAAgAkGi7QgJAFgEANIgCAIIgCAIIAAAEQAAALAFAIQAEAJAIAGIAHADIAIABIADAAQAgAAAAgmIAAgHQgBgPgFgKQgGgKgLgDIgDAAIgDAAQgNAAgIAHgAl+hmQgMgEgGgNQgFgMgBgWQABgVAFgNQAGgMALgGQALgEAQgBQAOABAIAEQAJAEAFAGQAEAHACAIIACAQIgBAFIAAAIIhLAEQAAANAEAHQADAIAIAEQAHADANAAQAKAAAJgCQAJgCAHgDIAAAQIgJADIgNADIgPAAQgQABgLgGgAl3i/QgHAEgCAJQgDAHgBALIA7gEQgBgIgBgHQgCgIgFgEQgHgEgLAAQgMAAgHAEgAp0hmQgLgEgGgNQgGgMAAgWQAAgVAGgNQAGgMALgGQAKgEARgBQANABAJAEQAJAEAEAGQAEAHACAIIACAQIgBAFIAAAIIhKAEQAAANADAHQAEAIAIAEQAHADANAAQAJAAAJgCQAKgCAGgDIAAAQIgIADIgOADIgOAAQgRABgLgGgApti/QgGAEgDAJQgCAHgBALIA6gEQAAgIgCgHQgCgIgFgEQgGgEgLAAQgNAAgHAEgAzThmQgLgEgGgNQgGgMAAgWQAAgVAGgNQAFgMALgGQAMgEAPgBQAOABAJAEQAIAEAFAGQAFAHACAIIABAQIAAAFIgBAIIhKAEQAAANADAHQAEAIAHAEQAIADANAAQAJAAAKgCQAIgCAHgDIAAAQIgJADIgMADIgQAAQgPABgMgGgAzMi/QgGAEgDAJQgDAHAAALIA6gEQAAgIgBgHQgCgIgGgEQgGgEgMAAQgMAAgHAEgA3EhmQgLgEgGgNQgGgMAAgWQAAgVAGgNQAGgMAKgGQALgEAQgBQAOABAJAEQAIAEAFAGQAEAHACAIIACAQIgBAFIAAAIIhKAEQAAANADAHQADAIAIAEQAIADANAAQAJAAAKgCQAIgCAHgDIAAAQIgIADIgOADIgPAAQgPABgMgGgA29i/QgGAEgDAJQgDAHAAALIA6gEQAAgIgCgHQgCgIgFgEQgGgEgMAAQgMAAgHAEgEgh3gBmQgMgEgFgNQgHgMAAgWQAAgVAHgNQAFgMAMgGQALgEAQgBQAQABAMAEQAKAGAHAMQAFANAAAVQAAAWgFAMQgHANgKAEQgMAGgQgBQgQABgLgGgEghvgC/QgHAEgDAJQgDAJAAAQQAAAQADAJQADAJAHAEQAHAEAMAAQAMAAAHgEQAHgEADgJQADgJgBgQQABgQgDgJQgEgJgGgEQgIgEgLAAQgMAAgHAEgEglggBmQgLgEgGgNQgGgMAAgWQAAgVAGgNQAGgMALgGQAKgEARgBQANABAJAEQAIAEAFAGQAEAHACAIIACAQIgBAFIAAAIIhKAEQAAANAEAHQACAIAJAEQAHADANAAQAJAAAJgCQAKgCAGgDIAAAQIgIADIgOADIgOAAQgQABgMgGgEglYgC/QgIAEgCAJQgCAHgBALIA6gEQAAgIgCgHQgBgIgGgEQgGgEgLAAQgNAAgGAEgEAn0gBhQgGAAgCgBQgDgBgBgDQgBgDgBgFQAAgIADgDQAEgCAHAAQAGAAAEACQACADAAAIQAAAFgBADQgBADgDABIgFABIgCAAgAwshhQgFAAgDgBQgDgBgBgDQgBgDgBgFQAAgIAEgDQACgCAIAAQAHAAADACQACADAAAIQABAFgCADQgBADgDABIgFABIgCAAgEAhCgBkQgHgCgDgIQgEgIABgOIAAg9IgRAAIAAgOIARAAIAAgaIARAAIAAAaIAbAAIAAAOIgbAAIAAA8IABANQACAEADACQADACAHAAIAGAAIAGgBIAAAPIgHABIgFAAIgEAAQgKAAgGgDgEAmzgBnQgFgFAAgNIAAiDIARAAIAAB/QAAAIACACQADADAFAAIAEAAIAEgBIAAAPIgFABIgHAAIgBAAQgLAAgGgGgEAl5gBnQgFgFgBgNIAAiDIARAAIAAB/QAAAIADACQACADAGAAIAEAAIAEgBIAAAPIgFABIgHAAIgBAAQgLAAgGgGgAN6hnQgGgFAAgNIAAiDIARAAIAAB/QAAAIADACQACADAGAAIADAAIAFgBIAAAPIgGABIgGAAIgCAAQgLAAgFgGgAtXhnQgFgFAAgNIAAiDIARAAIAAB/QAAAIACACQADADAFAAIAEAAIAEgBIAAAPIgFABIgHAAIgBAAQgLAAgGgGgEgi8gBnQgGgFAAgNIAAiDIARAAIAAB/QAAAIACACQADADAFAAIAFAAIADgBIAAAPIgEABIgHAAIgCAAQgKAAgGgGgEgj2gBnQgGgFAAgNIAAiDIARAAIAAB/QAAAIACACQADADAGAAIADAAIAFgBIAAAPIgGABIgGAAIgCAAQgLAAgFgGgAcPhhIgMgBIgLgBIgIgCIAAgOIAJABIALACIALAAQANABAFgEQAHgEAAgJQABgGgCgEQgDgEgFgCQgFgDgKgCQgMgCgHgEQgHgEgCgGQgDgGAAgJQAAgNAKgJQAKgHATgBIAQACIAMACIgCAPQgEgCgHgBQgHgBgIgBQgLABgGADQgFADAAAKQgBAFACADQACADAFACQAEACAIACQANADAHADQAIAEADAHQADAGABAKQAAAQgLAIQgKAIgTAAIgCAAgAeWhiIgog0IgGAAIAAA0IgRAAIAAiaIARAAIAABZIAHAAIAlgsIAWAAIguAyIAxA7gAURhiIAAhGQAAgIgCgGQgBgFgFgEQgFgDgIAAQgHAAgGABQgHACgFAFQgFAEgDAKIAABKIgRAAIAAhtIARAAIAAAPQADgHAGgEQAGgEAGgBIANgCQAPAAAIAFQAHAFAEAHQADAJAAAKIAABMgASUhiIAAhtIARAAIAABtgAIKhiIAAhGQAAgIgCgGQgBgFgEgEQgFgDgJAAQgGAAgHABQgGACgGAFQgFAEgDAKIAABKIgRAAIAAhtIARAAIAAAPQADgHAHgEQAFgEAHgBIANgCQAOAAAJAFQAHAFADAHQAEAJgBAKIAABMgABehiIAAhGQgBgIgBgGQgCgFgEgEQgFgDgIAAQgHAAgHABQgGACgFAFQgFAEgDAKIAABKIgRAAIAAhtIARAAIAAAPQADgHAGgEQAFgEAHgBIAOgCQAOAAAIAFQAHAFAEAHQADAJAAAKIAABMgAgehiIAAhtIARAAIAABtgAnbhiIAAhtIAQAAIAAAUQAEgJAGgGQAFgEAHgCIANgCIADAAIgBAQIgDAAQgGAAgHACQgGACgGAFQgFAGgEAJIAABIgAquhiIgog0IgGAAIAAA0IgRAAIAAiaIARAAIAABZIAHAAIAlgsIAWAAIguAyIAxA7gAsjhiIAAhtIARAAIAABtgAvIhiIAAiNIATAAIAACNgAxvhiIAAhtIARAAIAABtgA0mhiIAAhfIgTAAIAAgOIATAAIAAgBQAAgTAEgKQAEgKAJgDQAIgDALAAIAGABIAGABIAAANIgFgBIgHAAQgHAAgEADQgFACgCAIQgBAGAAANIAaAAIAAAOIgaAAIAABfgA1ghiIAAhtIARAAIAABtgA4/hiIAAiNIBOAAIAAAQIg7AAIAAAuIA3AAIAAAQIg3AAIAAA/gA6phiIAAhGQABgMgEgHQgGgHgLAAQgHAAgFABQgGACgEAFQgEADgCAIIAABNIgSAAIAAhGQAAgMgEgHQgEgHgMAAQgHAAgFABQgFACgFAEQgEAFgDAIIAABMIgRAAIAAhtIARAAIAAAOQAFgJAJgEQAIgEAKAAQANAAAHAFQAIAFADAIQADgGAGgFQAGgEAGgBQAGgCAIAAQAMAAAIAFQAIAFAEAHQADAJAAAKIAABMgA+bhiIAAiNIATAAIAACNgEgmogBiIAAhFIhFAAIAABFIgTAAIAAiNIATAAIAAA6IBFAAIAAg6IATAAIAACNgA9pjIIAFgRIAFgSIABgRIASAAQgBAIgCAJQgCAJgDAJIgIARgASUjmQgCgCAAgGQAAgHACgCQADgBAFAAQAGAAACABQACACABAHQgBAGgCACQgCACgGAAQgFAAgDgCgAgejmQgDgCABgGQgBgHADgCQADgBAFAAQAGAAACABQACACAAAHQAAAGgCACQgCACgGAAQgFAAgDgCgAsjjmQgCgCAAgGQAAgHACgCQADgBAFAAQAGAAACABQADACAAAHQAAAGgDACQgCACgGAAQgFAAgDgCgAxujmQgCgCAAgGQAAgHACgCQACgBAGAAQAFAAADABQACACAAAHQAAAGgCACQgDACgFAAQgGAAgCgCgA1fjmQgDgCAAgGQAAgHADgCQACgBAFAAQAGAAACABQADACAAAHQAAAGgDACQgCACgGAAQgFAAgCgCg");
	this.shape.setTransform(272.25,42.6);

	this.instance_1 = new lib.元件32复制();
	this.instance_1.setTransform(254.85,42.25,1,1,0,0,180,327.9,42.3);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("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gXgBHIAKgSIAHgSQACgKAAgHIARAAQABAIgEALQgDAJgFAJIgKAQgEAkZgBhQgQAAgMgIQgKgJgGgRIgBgIIgBgIIAAgGQAAgRAHgNQAHgNAOgIIALgEIAKgBIACAAQATAAAMATIAAgFIARAAIAAA7IABAUIADASIgBABIgQAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAgBIgCgNIgDAGIgFAEQgEAEgHADQgGABgGAAgEAkMgC7QgIAFgGANIgCAIIAAAIIAAAEQAAALAEAIQAEAJAIAGIAHADIAHABIAFAAQAeAAAAgmIAAgHQABgPgGgKQgFgKgLgDIgEAAIgDAAQgMAAgJAHgEAiVgBmQgJgGgDgJIgCATIgPAAIAAiaIARAAIAABAQADgKAJgGQAIgFAPgBQATABAJAGQALAIADAMQAEANgBARQABAPgEANQgDANgLAHQgJAJgTgBQgPAAgIgFgEAiWgC+QgHAFgDAJQgEAKAAANQAAAMAEAKQADAJAHAGQAIAEANABQAMgBAGgFQAHgGABgKQACgKAAgKQAAgLgCgKQgCgJgGgGQgGgGgMAAQgNAAgIAFgAfQhmQgLgEgGgNQgGgMAAgWQAAgVAGgNQAGgMALgGQAKgEARgBQANABAJAEQAIAEAFAGQAEAHACAIIACAQIgBAFIAAAIIhKAEQAAANAEAHQACAIAJAEQAHADANAAQAJAAAJgCQAKgCAGgDIAAAQIgIADIgOADIgOAAQgQABgMgGgAfYi/QgIAEgCAJQgCAHgBALIA6gEQAAgIgCgHQgBgIgGgEQgGgEgLAAQgNAAgGAEgAachhQgQAAgMgIQgKgJgFgRIgCgIIgBgIIAAgGQABgRAGgNQAHgNAOgIIALgEIAKgBIACAAQASAAANATIAAgFIARAAIAAA7IACAUIACASIgBABIgQAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAgBIgBgNIgEAGIgEAEQgGAEgGADQgFABgIAAgAaPi7QgJAFgEANIgDAIIgBAIIAAAEQABALAEAIQAEAJAIAGIAHADIAIABIADAAQAfAAABgmIAAgHQAAgPgGgKQgFgKgMgDIgDAAIgDAAQgNAAgIAHgAYXhmQgIgGgEgJIgCATIgOAAIAAiaIAQAAIAABAQAEgKAIgGQAJgFAPgBQASABAKAGQAKAIADAMQAEANAAARQAAAPgEANQgDANgKAHQgKAJgSgBQgPAAgJgFgAYZi+QgIAFgDAJQgDAKAAANQAAAMADAKQADAJAIAGQAHAEANABQAMgBAHgFQAGgGACgKQACgKAAgKQAAgLgCgKQgCgJgHgGQgFgGgNAAQgNAAgHAFgAPPhhQgRAAgLgIQgLgJgFgRIgBgIIgBgIIAAgGQAAgRAHgNQAGgNAPgIIALgEIAJgBIACAAQATAAANATIAAgFIARAAIAAA7IABAUIACASIgBABIgQAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAgBIgCgNIgEAGIgEAEQgFAEgGADQgGABgHAAgAPBi7QgIAFgFANIgCAIIgBAIIAAAEQAAALAEAIQAFAJAHAGIAHADIAIABIAEAAQAfAAAAgmIAAgHQAAgPgGgKQgFgKgLgDIgEAAIgCAAQgNAAgJAHgAJLhoQgLgHgDgNQgEgNAAgQQAAgPAEgNQADgMALgJQAJgHASgBQAQAAAIAGQAIAGAEAKIAAhAIARAAIAACaIgOAAIgDgSQgEAIgJAGQgIAFgPAAQgSABgJgIgAJWi9QgHAGgCAJQgBAKAAALQAAALABAKQADAJAGAGQAGAGAMAAQANAAAIgFQAHgFADgKQAEgJgBgNQABgNgEgJQgDgKgHgEQgIgGgNAAQgMAAgGAGgAFphhQgRAAgLgIQgKgJgGgRIgBgIIgBgIIAAgGQAAgRAHgNQAGgNAPgIIALgEIAKgBIABAAQATAAANATIAAgFIARAAIAAA7IABAUIADASIgBABIgRAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIgCgNIgEAGIgEAEQgFAEgGADQgGABgHAAgAFbi7QgIAFgFANIgCAIIgBAIIAAAEQAAALAFAIQAEAJAHAGIAIADIAHABIAEAAQAfAAAAgmIAAgHQAAgPgGgKQgFgKgLgDIgDAAIgEAAQgMAAgJAHgAiUhoQgKgHgDgNQgEgNAAgQQAAgPAEgNQADgMAKgJQAKgHASgBQAQAAAIAGQAJAGACAKIAAhAIASAAIAACaIgPAAIgDgSQgDAIgIAGQgJAFgPAAQgSABgKgIgAiJi9QgGAGgCAJQgCAKAAALQAAALACAKQACAJAHAGQAGAGAMAAQAOAAAHgFQAIgFADgKQADgJgBgNQAB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");
	this.shape_1.setTransform(272.25,42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15.7,-5.6,601,94);
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
	this.instance.setTransform(315.95,40.15,2.1819,1.3613,0,0,0,125.5,23.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.元件23(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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EghdgBHIAKgSIAHgSQACgKAAgHIARAAQAAAIgDALQgDAJgFAJIgKAQgEAlggBhQgRAAgLgIQgKgJgGgRIgBgIIgBgIIAAgGQAAgRAHgNQAHgNAOgIIALgEIAKgBIACAAQASAAANATIAAgFIARAAIAAA7IABAUIADASIgBABIgQAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIgCgNIgDAGIgFAEQgFAEgGADQgGABgHAAgEAlTgC7QgJAFgFANIgCAIIgBAIIAAAEQAAALAFAIQAEAJAIAGIAHADIAHABIAEAAQAfAAAAgmIAAgHQAAgPgFgKQgGgKgLgDIgDAAIgDAAQgNAAgIAHgEAjbgBmQgIgGgEgJIgCATIgPAAIAAiaIARAAIAABAQAEgKAIgGQAIgFAQgBQASABAKAGQAKAIADAMQAEANAAARQAAAPgEANQgDANgKAHQgKAJgSgBQgQAAgIgFgEAjcgC+QgHAFgDAJQgDAKAAANQAAAMADAKQADAJAHAGQAIAEANABQAMgBAHgFQAGgGACgKQACgKAAgKQAAgLgCgKQgCgJgHgGQgGgGgMAAQgNAAgIAFgEAgOgBmQgLgEgGgNQgGgMAAgWQAAgVAGgNQAGgMALgGQAMgEAQgBQAQABALAEQALAGAGAMQAGANAAAVQAAAWgGAMQgGANgLAEQgLAGgQgBQgQABgMgGgEAgXgC/QgHAEgDAJQgDAJAAAQQAAAQADAJQADAJAHAEQAHAEAMAAQAMAAAHgEQAHgEADgJQADgJgBgQQABgQgDgJQgEgJgHgEQgHgEgLAAQgMAAgHAEgAeShmQgLgEgGgNQgGgMAAgWQAAgVAGgNQAGgMALgGQALgEAQgBQAQABAMAEQALAGAGAMQAFANAAAVQAAAWgFAMQgGANgLAEQgMAGgQgBQgQABgLgGgAeai/QgHAEgDAJQgDAJAAAQQAAAQADAJQADAJAHAEQAHAEAMAAQAMAAAHgEQAHgEADgJQADgJAAgQQAAgQgDgJQgDgJgHgEQgHgEgMAAQgMAAgHAEgAUPhhQgQAAgLgIQgLgJgFgRIgCgIIAAgIIAAgGQAAgRAHgNQAGgNAOgIIALgEIAKgBIACAAQATAAAMATIAAgFIASAAIAAA7IABAUIACASIgBABIgQAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBIgBgNIgEAGIgEAEQgFAEgGADQgGABgHAAgAUCi7QgIAFgFANIgCAIIgBAIIAAAEQAAALAEAIQAEAJAIAGIAHADIAIABIAEAAQAfAAAAgmIAAgHQAAgPgGgKQgFgKgLgDIgEAAIgDAAQgMAAgJAHgAOLhoQgKgHgEgNQgEgNAAgQQAAgPAEgNQAEgMAKgJQAJgHASgBQAQAAAIAGQAJAGADAKIAAhAIARAAIAACaIgOAAIgDgSQgDAIgJAGQgJAFgPAAQgSABgJgIgAOWi9QgGAGgCAJQgCAKAAALQAAALACAKQACAJAGAGQAGAGANAAQANAAAHgFQAIgFADgKQADgJgBgNQABgNgDgJQgDgKgIgEQgHgGgNAAQgNAAgGAGgAKphhQgRAAgLgIQgKgJgGgRIgBgIIgBgIIAAgGQAAgRAHgNQAHgNAOgIIALgEIAKgBIACAAQASAAANATIAAgFIARAAIAAA7IABAUIADASIgBABIgQAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAgBIgCgNIgDAGIgFAEQgFAEgGADQgGABgHAAgAKci7QgJAFgFANIgCAIIgBAIIAAAEQAAALAFAIQAEAJAIAGIAHADIAHABIAEAAQAfAAAAgmIAAgHQAAgPgFgKQgGgKgLgDIgDAAIgDAAQgNAAgIAHgADNhmQgLgEgGgNQgGgMAAgWQAAgVAGgNQAGgMALgGQAMgEAQgBIAQACIAMADIAAAQQgGgDgHgBQgHgBgIgBQgMABgHADQgHAEgDAJQgDAJAAAQQAAAQADAJQADAJAHAEQAHADAMAAIAPgBQAIgBAGgCIAAAQIgIACIgLABIgKAAQgQABgMgGgAgahhQgQAAgLgIQgLgJgFgRIgCgIIAAgIIAAgGQAAgRAHgNQAGgNAOgIIALgEIAKgBIACAAQATAAALATIAAgFIASAAIAAA7IABAUIACASIgBABIgQAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBIgBgNIgEAGIgEAEQgEAEgGADQgGABgHAAgAgni7QgIAFgFANIgCAIIgBAIIAAAEQAAALAEAIQAEAJAIAGIAHADIAIABIAEAAQAeAAAAgmIAAgHQAAgPgGgKQgEgKgLgDIgEAAIgDAAQgMAAgJAHgAiwhoQgKgHgDgNQgEgNAAgQQAAgPAEgNQADgMAKgJQAKgHASgBQAQAAAIAGQAIAGADAKIAAhAIASAAIAACaIgPAAIgDgSQgDAIgJAGQgIAFgPAAQgSABgKgIgAili9QgGAGgCAJQgCAKAAALQAAALACAKQACAJAHAGQAGAGAMAAQANAAAIgFQAHgFADgKQADgJAAgNQAAgNgDgJQgDgKgHgEQgIgGgNAAQgMAAgHAGgAlThmQgLgEgGgNQgGgMAAgWQAAgVAGgNQAFgMALgGQALgEAQgBQAOABAJAEQAIAEAFAGQAEAHACAIIACAQIgBAFIAAAIIhKAEQAAANADAHQADAIAIAEQAIADANAAQAJAAAJgCQAJgCAHgDIAAAQIgJADIgNADIgPAAQgQABgLgGgAlMi/QgHAEgCAJQgDAHAAALIA6gEQAAgIgCgHQgCgIgFgEQgGgEgMAAQgMAAgHAEgAvvhhQgQAAgLgIQgLgJgFgRIgCgIIAAgIIAAgGQAAgRAHgNQAGgNAOgIIALgEIAKgBIACAAQATAAAMATIAAgFIASAAIAAA7IABAUIACASIgBABIgQAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBIgBgNIgEAGIgEAEQgFAEgGADQgGABgHAAgAv8i7QgIAFgFANIgCAIIgBAIIAAAEQAAALAEAIQAEAJAIAGIAHADIAIABIAEAAQAfAAAAgmIAAgHQAAgPgGgKQgFgKgLgDIgEAAIgDAAQgMAAgJAHgA2ahhQgQAAgLgIQgLgJgFgRIgCgIIAAgIIAAgGQAAgRAHgNQAGgNAOgIIALgEIAKgBIACAAQATAAAMATIAAgFIASAAIAAA7IABAUIACASIgBABIgQAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBgBgBIgBgNIgEAGIgEAEQgFAEgGADQgGABgHAAgA2ni7QgIAFgFANIgCAIIgBAIIAAAEQAAALAEAIQAEAJAIAGIAHADIAIABIAEAAQAfAAAAgmIAAgHQAAgPgGgKQgFgKgLgDIgEAAIgDAAQgMAAgJAHgEgi+gBmQgLgEgGgNQgGgMAAgWQAAgVAGgNQAGgMALgGQAMgEAQgBQAQABALAEQALAGAGAMQAGANAAAVQAAAWgGAMQgGANgLAEQgLAGgQgBQgQABgMgGgEgi1gC/QgHAEgDAJQgDAJAAAQQAAAQADAJQADAJAHAEQAHAEAMAAQAMAAAHgEQAHgEADgJQADgJgBgQQABgQgDgJQgEgJgHgEQgHgEgLAAQgMAAgHAEgEgmmgBmQgLgEgGgNQgGgMAAgWQAAgVAGgNQAFgMALgGQALgEAQgBQAOABAJAEQAIAEAFAGQAEAHACAIIACAQIgBAFIAAAIIhKAEQAAANADAHQADAIAIAEQAIADANAAQAJAAAJgCQAJgCAHgDIAAAQIgJADIgNADIgPAAQgQABgLgGgEgmfgC/QgHAEgCAJQgDAHAAALIA6gEQAAgIgCgHQgCgIgFgEQgGgEgMAAQgMAAgHAEgEAo6gBhQgFAAgDgBQgDgBgBgDQgBgDAAgFQAAgIADgDQADgCAHAAQAHAAADACQADADAAAIQAAAFgCADQgBADgDABIgEABIgDAAgAsMhhQgFAAgCgBQgDgBgBgDQgCgDAAgFQAAgIADgDQADgCAHAAQAHAAADACQADADAAAIQAAAFgBADQgBADgDABIgFABIgDAAgEAiIgBkQgHgCgDgIQgDgIAAgOIAAg9IgQAAIAAgOIAQAAIAAgaIARAAIAAAaIAbAAIAAAOIgbAAIAAA8IABANQACAEADACQADACAHAAIAGAAIAGgBIAAAPIgGABIgGAAIgEAAQgJAAgHgDgEAn6gBnQgGgFAAgNIAAiDIARAAIAAB/QAAAIACACQADADAFAAIAEAAIAEgBIAAAPIgFABIgGAAIgCAAQgLAAgFgGgEAnAgBnQgGgFAAgNIAAiDIARAAIAAB/QAAAIACACQADADAFAAIAEAAIAEgBIAAAPIgFABIgGAAIgCAAQgLAAgFgGgAS6hnQgGgFAAgNIAAiDIARAAIAAB/QAAAIADACQACADAGAAIAEAAIAEgBIAAAPIgFABIgHAAIgCAAQgKAAgGgGgAo2hnQgGgFAAgNIAAiDIARAAIAAB/QAAAIADACQACADAGAAIAEAAIAEgBIAAAPIgFABIgHAAIgCAAQgKAAgGgGgEgkCgBnQgGgFAAgNIAAiDIARAAIAAB/QAAAIACACQADADAFAAIAEAAIAEgBIAAAPIgFABIgGAAIgCAAQgLAAgFgGgEgk8gBnQgGgFAAgNIAAiDIARAAIAAB/QAAAIACACQADADAFAAIAEAAIAEgBIAAAPIgFABIgGAAIgCAAQgLAAgFgGgAc+hiIAAhfIgSAAIAA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");
	this.shape.setTransform(313.275,42.6);

	this.instance_1 = new lib.元件32复制();
	this.instance_1.setTransform(328.85,42.25,1,1,0,0,0,327.9,42.3);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("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EghdgBHIAKgSIAHgSQACgKAAgHIARAAQAAAIgDALQgDAJgFAJIgKAQgEAlggBhQgRAAgLgIQgKgJgGgRIgBgIIgBgIIAAgGQAAgRAHgNQAHgNAOgIIALgEIAKgBIACAAQASAAANATIAAgFIARAAIAAA7IABAUIADASIgBABIgQAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAgBIgCgNIgDAGIgFAEQgFAEgGADQgGABgHAAgEAlTgC7QgJAFgFANIgCAIIgBAIIAAAEQAAALAFAIQAEAJAIAGIAHADIAHABIAEAAQAfAAAAgmIAAgHQAAgPgFgKQgGgKgLgDIgDAAIgDAAQgNAAgIAHgEAjbgBmQgIgGgEgJIgCATIgPAAIAAiaIARAAIAABAQAEgKAIgGQAIgFAQgBQASABAKAGQAKAIADAMQAEANAAARQAAAPgEANQgDANgKAHQgKAJgSgBQgQAAgIgFgEAjcgC+QgHAFgDAJQgDAKAAANQAAAMADAKQADAJAHAGQAIAEANABQAMgBAHgFQAGgGACgKQACgKAAgKQAAgLgCgKQgCgJgHgGQgGgGgMAAQgNAAgIAFgEAgOgBmQgLgEgGgNQgGgMAAgWQAAgVAGgNQAGgMALgGQAMgEAQgBQAQABALAEQALAGAGAMQAGANAAAVQAAAWgGAMQgGANgLAEQgLAGgQgBQgQABgMgGgEAgXgC/QgHAEgDAJQgDAJAAAQQAAAQADAJQADAJAHAEQAHAEAMAAQAMAAAHgEQAHgEADgJQADgJgBgQQABgQgDgJQgEgJgHgEQgHgEgLAAQgMAAgHAEgAeShmQgLgEgGgNQgGgMAAgWQAAgVAGgNQAGgMALgGQALgEAQgBQAQABAMAEQALAGAGAMQAFANAAAVQAAAWgFAMQgGANgLAEQgMAGgQgBQgQABgLgGgAeai/QgHAEgDAJQgDAJAAAQQAAAQADAJQADAJAHAEQAHAEAMAAQAMAAAHgEQAHgEADgJQADgJAAgQQAAgQgDgJQgDgJgHgEQgHgEgMAAQgMAAgHAEgAUPhhQgQAAgLgIQgLgJgFgRIgCgIIAAgIIAAgGQAAgRAHgNQAGgNAOgIIALgEIAKgBIACAAQATAAAMATIAAgFIASAAIAAA7IABAUIACASIgBABIgQAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBIgBgNIgEAGIgEAEQgFAEgGADQgGABgHAAgAUCi7QgIAFgFANIgCAIIgBAIIAAAEQAAALAEAIQAEAJAIAGIAHADIAIABIAEAAQAfAAAAgmIAAgHQAAgPgGgKQgFgKgLgDIgEAAIgDAAQgMAAgJAHgAOLhoQgKgHgEgNQgEgNAAgQQAAgPAEgNQAEgMAKgJQAJgHASgBQAQAAAIAGQAJAGADAKIAAhAIARAAIAACaIgOAAIgDgSQgDAIgJAGQgJAFgPAAQgSABgJgIgAOWi9QgGAGgCAJQgCAKAAALQAAALACAKQACAJAGAGQAGAGANAAQANAAAHgFQAIgFADgKQADgJgBgNQABgNgDgJQgDgKgIgEQgHgGgNAAQgNAAgGAGgAKphhQgRAAgLgIQgKgJgGgRIgBgIIgBgIIAAgGQAAgRAHgNQAHgNAOgIIALgEIAKgBIACAAQASAAANATIAAgFIARAAIAAA7IABAUIADASIgBABIgQAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAgBAAgBIgCgNIgDAGIgFAEQgFAEgGADQgGABgHAAgAKci7QgJAFgFANIgCAIIgBAIIAAAEQAAALAFAIQAEAJAIAGIAHADIAHABIAEAAQAfAAAAgmIAAgHQAAgPgFgKQgGgKgLgDIgDAAIgDAAQgNAAgIAHgADNhmQgLgEgGgNQgGgMAAgWQAAgVAGgNQAGgMALgGQAMgEAQgBIAQACIAMADIAAAQQgGgDgHgBQgHgBgIgBQgMABgHADQgHAEgDAJQgDAJAAAQQAAAQADAJQADAJAHAEQAHADAMAAIAPgBQAIgBAGgCIAAAQIgIACIgLABIgKAAQgQABgMgGgAgahhQgQAAgLgIQgLgJgFgRIgCgIIAAgIIAAgGQAAgRAHgNQAGgNAOgIIALgEIAKgBIACAAQATAAALATIAAgFIASAAIAAA7IABAUIACASIgBABIgQAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBIgBgNIgEAGIgEAEQgEAEgGADQgGABgHAAgAgni7QgIAFgFANIgCAIIgBAIIAAAEQAAALAEAIQAEAJAIAGIAHADIAIABIAEAAQAeAAAAgmIAAgHQAAgPgGgKQgEgKgLgDIgEAAIgDAAQgMAAgJAHgAiwhoQgKgHgDgNQgEgNAAgQQAAgPAEgNQADgMAKgJQAKgHASgBQAQAAAIAGQAIAGADAKIAAhAIASAAIAACaIgPAAIgDgSQgDAIgJAGQgIAFgPAAQgSABgKgIgAili9QgGAGgCAJQgCAKAAALQAAALACAKQACAJAHAGQAGAGAMAAQANAAAIgFQAHgFADgKQADgJAAgNQAAgNgDgJQgDgKgHgEQgIgGgNAAQgMAAgHAGgAlThmQgLgEgGgNQgGgMAAgWQAAgVAGgNQAFgMALgGQALgEAQgBQAOABAJAEQAIAEAFAGQAEAHACAIIACAQIgBAFIAAAIIhKAEQAAANADAHQADAIAIAEQAIADANAAQAJAAAJgCQAJgCAHgDIAAAQIgJADIgNADIgPAAQgQABgLgGgAlMi/QgHAEgCAJQgDAHAAALIA6gEQAAgIgCgHQgCgIgFgEQgGgEgMAAQgMAAgHAEgAvvhhQgQAAgLgIQgLgJgFgRIgCgIIAAgIIAAgGQAAgRAHgNQAGgNAOgIIALgEIAKgBIACAAQATAAAMATIAAgFIASAAIAAA7IABAUIACASIgBABIgQAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBgBAAgBIgBgNIgEAGIgEAEQgFAEgGADQgGABgHAAgAv8i7QgIAFgFANIgCAIIgBAIIAAAEQAAALAEAIQAEAJAIAGIAHADIAIABIAEAAQAfAAAAgmIAAgHQAAgPgGgKQgFgKgLgDIgEAAIgDAAQgMAAgJAHgA2ahhQgQAAgLgIQgLgJgFgRIgCgIIAAgIIAAgGQAAgRAHgNQAGgNAOgIIALgEIAKgBIACAAQATAAAMATIAAgFIASAAIAAA7IABAUIACASIgBABIgQAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBgBgBIgBgNIgEAGIgEAEQgFAEgGADQgGABgHAAgA2ni7QgIAFgFANIgCAIIgBAIIAAAEQAAALAEAIQAEAJAIAGIAHADIAIABIAEAAQAfAAAAgmIAAgHQAAgPgGgKQgFgKgLgDIgEAAIgDAAQgMAAgJAHgEgi+gBmQgLgEgGgNQgGgMAAgWQAAgVAGgNQAGgMALgGQAMgEAQgBQAQABALAEQALAGAGAMQAGANAAAVQAAAWgGAMQgGANgLAEQgLAGgQgBQgQABgMgGgEgi1gC/QgHAEgDAJQgDAJAAAQQAAAQADAJQADAJAHAEQAHAEAMAAQAMAAAHgEQAHgEADgJQADgJgBgQQABgQgDgJQgEgJgHgEQgHgEgLAAQgMAAgHAEgEgmmgBmQgLgEgGgNQgGgMAAgWQAAgVAGgNQAFgMALgGQALgEAQgBQAOABAJAEQAIAEAFAGQAEAHACAIIACAQIgBAFIAAAIIhKAEQAAANADAHQADAIAIAEQAIADANAAQAJAAAJgCQAJgCAHgDIAAAQIgJADIgNADIgPAAQgQABgLgGgEgmfgC/QgHAEgCAJQgDAHAAALIA6gEQAAgIgCgHQgCgIgFgEQgGgEgMAAQgMAAgHAEgEAo6gBhQgFAAgDgBQgDgBgBgDQgBgDAAgFQAAgIADgDQADgCAHAAQAHAAADACQADADAAAIQAAAFgCADQgBADgDABIgEABIgDAAgAsMhhQgFAAgCgBQgDgBgBgDQgCgDAAgFQAAgIADgDQADgCAHAAQAHAAADACQADADAAAIQAAAFgBADQgBADgDABIgFABIgDAAgEAiIgBkQgHgCgDgIQgDgIAAgOIAAg9IgQAAIAAgOIAQAAIAAgaIARAAIAAAaIAbAAIAAAOIgbAAIAAA8IABANQACAEADACQADACAHAAIAGAAIAGgBIAAAPIgGABIgGAAIgEAAQgJAAgHgDgEAn6gBnQgGgFAAgNIAAiDIARAAIAAB/QAAAIACACQADADAFAAIAEAAIAEgBIAAAPIgFABIgGAAIgCAAQgLAAgFgGgEAnAgBnQgGgFAAgNIAAiDIARAAIAAB/QAAAIACACQADADAFAAIAEAAIAEgBIAAAPIgFABIgGAAIgCAAQgLAAgFgGgAS6hnQgGgFAAgNIAAiDIARAAIAAB/QAAAIADACQACADAGAAIAEAAIAEgBIAAAPIgFABIgHAAIgCAAQgKAAgGgGgAo2hnQgGgFAAgNIAAiDIARAAIAAB/QAAAIADACQACADAGAAIAEAAIAEgBIAAAPIgFABIgHAAIgCAAQgKAAgGgGgEgkCgBnQgGgFAAgNIAAiDIARAAIAAB/QAAAIACACQADADAFAAIAEAAIAEgBIAAAPIgFABIgGAAIgCAAQgLAAgFgGgEgk8gBnQgGgFAAgNIAAiDIARAAIAAB/QAAAIACACQADADAFAAIAEAAIAEgBIAAAPIgFABIgGAAIgCAAQgLAAgFgGgAc+hiIAAhfIgSAAIAA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");
	this.shape_1.setTransform(313.275,42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(1.4,-5.6,602,94);
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// 图层_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhTCXIDlkSYAJgLgCgPgKgJYgLgJgOABgJAKIj5EBYgOAPAAAYAPAOYAPAPAYAAAPgQYAAAAABgBABgB");
	this.shape.setTransform(80.05,167.15,0.4451,0.4451,0,0,0,0.7,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhPgsIBWBwYAPATAbAEATgPYATgOADgcgOgTYgCgCgDgDgDgCIhvhXYgLgIgQACgJAKYgHAKABAMAGAJ");
	this.shape_1.setTransform(72.1,170.4,0.4451,0.4451,0,0,0,-1.2,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhTCXIDlkSYAJgLgCgPgKgJYgLgJgOABgJAKIj5EBYgOAPAAAYAPAOYAPAPAYAAAPgQYAAAAABgBABgB");
	this.shape_2.setTransform(200.25,167.2,0.4451,0.4451,0,0,0,0.7,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhPgsIBWBwYAPATAbAEATgPYATgOADgcgOgTYgCgCgDgDgDgCIhvhXYgLgIgQACgJAKYgHAKABAMAGAJ");
	this.shape_3.setTransform(192.2,170.5,0.4451,0.4451,0,0,0,-1.2,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AhTCXIDlkSYAJgLgCgPgKgJYgLgJgOABgJAKIj5EBYgOAPAAAYAPAOYAPAPAYAAAPgQYAAAAABgBABgB");
	this.shape_4.setTransform(-40.1,167.25,0.4452,0.4452,0,0,0,0.7,-0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhPgsIBWBwYAPATAbAEATgPYATgOADgcgOgTYgCgCgDgDgDgCIhvhXYgLgIgQACgJAKYgHAKABAMAGAJ");
	this.shape_5.setTransform(-47.95,170.4,0.4452,0.4452,0,0,0,-1.2,-1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#60C0EA").ss(6,1,1).p("EgpogNcMBTRAAAQAVAAAAAZIAAaHQAAAagVAAMhTRAAAQgVAAAAgaIAA6HQAAgZAVAAg");
	this.shape_6.setTransform(139.825,97.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#60C0EA").ss(6,1,1).p("EgpkgNwMBTKAAAQAUAAAAAaIAAatQAAAagUAAMhTKAAAQgVAAAAgaIAA6tQAAgaAVAAg");
	this.shape_7.setTransform(139.325,279.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5,p:{scaleX:0.4452,scaleY:0.4452,x:-47.95,y:170.4}},{t:this.shape_4,p:{scaleX:0.4452,scaleY:0.4452,x:-40.1,y:167.25}},{t:this.shape_3,p:{scaleX:0.4451,scaleY:0.4451,x:192.2,y:170.5}},{t:this.shape_2,p:{scaleX:0.4451,scaleY:0.4451,x:200.25,y:167.2}},{t:this.shape_1,p:{scaleX:0.4451,scaleY:0.4451,x:72.1,y:170.4}},{t:this.shape,p:{scaleX:0.4451,scaleY:0.4451,x:80.05,y:167.15}}]},1).to({state:[{t:this.shape_7},{t:this.shape_5,p:{scaleX:0.4543,scaleY:0.4543,x:-48.05,y:353.9}},{t:this.shape_4,p:{scaleX:0.4543,scaleY:0.4543,x:-40.05,y:350.45}},{t:this.shape_3,p:{scaleX:0.4543,scaleY:0.4543,x:192.5,y:353.75}},{t:this.shape_2,p:{scaleX:0.4543,scaleY:0.4543,x:200.45,y:350.4}},{t:this.shape_1,p:{scaleX:0.4543,scaleY:0.4543,x:312.6,y:353.7}},{t:this.shape,p:{scaleX:0.4543,scaleY:0.4543,x:320.6,y:350.4}}]},1).wait(1));

	// 图层_3
	this.pg_1 = new lib.元件20();
	this.pg_1.name = "pg_1";
	this.pg_1.setTransform(111.5,401.45,3.0015,1.9637,0,0,0,148.6,62.6);
	new cjs.ButtonHelper(this.pg_1, 0, 1, 2, false, new lib.元件20(), 3);

	this.pg_0 = new lib.元件20();
	this.pg_0.name = "pg_0";
	this.pg_0.setTransform(110.75,219.1,3.0015,1.9637,0,0,0,148.6,62.6);
	new cjs.ButtonHelper(this.pg_0, 0, 1, 2, false, new lib.元件20(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pg_0},{t:this.pg_1}]}).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-129.3,8.5,537.3,359.8);
p.frameBounds = [rect, new cjs.Rectangle(-131.7,8.2,543.2,360.1), new cjs.Rectangle(-131.9,8.5,542.5,362)];


(lib.d1复制 = function(mode,startPosition,loop,reversed) {
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
	this.dia = new lib.元件21复制2();
	this.dia.name = "dia";
	this.dia.setTransform(102.65,61.7,1,1,0,0,0,122.4,20.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8BLQgZgeAAgtQAAgsAZgfQAZgfAjAAQAkAAAZAfQAaAfgBAsQABAtgaAeQgZAggkAAQgjAAgZggg");
	this.shape.setTransform(643.031,24.314,0.8999,0.8999);

	this.instance = new lib.位图731();
	this.instance.setTransform(569.45,20.75,0.3308,0.3308);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape},{t:this.dia}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.d1复制, rect = new cjs.Rectangle(-35.4,14.8,686.4,115.5), [rect]);


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
	this.instance = new lib.位图730();
	this.instance.setTransform(-107,15,0.3429,0.3429);

	this.dia = new lib.元件21();
	this.dia.name = "dia";
	this.dia.setTransform(104.65,61.7,1,1,0,0,0,122.4,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dia},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.d1, rect = new cjs.Rectangle(-107,15,691.7,115.2), [rect]);


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
	// timeline functions:
	this.frame_0 = function() {
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
			if (_this.pgId == _pg && _this.start == true) {
				return;
			}
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 跳转按钮
	this._onp = new lib.暂停播放组();
	this._onp.name = "_onp";
	this._onp.setTransform(872.05,641.9,1,1,0,0,0,37.5,20.4);

	this.gotoBtnMc = new lib.元件19();
	this.gotoBtnMc.name = "gotoBtnMc";
	this.gotoBtnMc.setTransform(657.85,229.95,1,1,0,0,0,153.1,153.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gotoBtnMc},{t:this._onp}]}).wait(2));

	// 标题
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgSAbQgGgCgDgGQgBgHAAgMQAAgMABgGQADgGAGgDQAGgCAMABQAMgBAHACQAGADACAGQACAGAAAMQAAAMgCAHQgCAGgGACQgHACgMAAQgMAAgGgCg");
	this.shape.setTransform(484.2,57.52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgFBqQgNgFgGgNQgGgNAAgXIAAhSIgXAAIAAgmIAXAAIAAgqIAvAAIAAAqIAlAAIAAAmIglAAIAABOQAAAPAEAGQAFAFAMAAIAHAAIAGgBIAAAlIgKABIgMAAIgEAAQgTAAgLgFg");
	this.shape_1.setTransform(472.85,49.3271);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgaBVQgUgIgKgVQgLgUAAgkQAAgjALgUQAKgUAUgIQATgJAbABQAOAAAMABQAMACAIACIAAApQgJgEgKgBQgJgCgMAAQgPAAgKAEQgJAFgFAMQgFAMAAATQAAAVAFALQAFAMAJAEQAKAFAQAAIAVgCQAKgBAKgEIAAAoIgNADIgRADIgSAAIgDAAQgZAAgSgHg");
	this.shape_2.setTransform(458.825,51.3251);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgUBbQgYAAgQgMQgRgNgJgYQgDgJgCgLIgBgVIAAgHQAAgYAKgTQAKgSAUgOQAIgFAJgDQAIgBAJAAIAIAAQARAAALAEQAKAGAGAKIABABIABABIAAAAIABgFIABgBIAtAAIABAAIAAABIgCA6QAAAmACAYQADAYAFALIAAACIABAFIgBABIgtAAIgEgHIgFgSIgBAAQgHANgKAHQgLAGgPAAgAgdgtQgMAKgGAVIgCAKIAAAGQAAAUAHANQAHANANAFIAKACIAKABQANABAIgFQAJgEAEgKQADgGADgLQABgJAAgNQAAgSgFgNQgEgMgJgGQgEgDgFgBQgHgBgGAAIgBAAQgQAAgLAKg");
	this.shape_3.setTransform(439.75,51.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAhBbIAAhsQABgSgGgIQgGgIgRAAQgPAAgJAGQgKAFgDAOIAAB1IgxAAIAAixIAxAAIAAAVQAHgNAOgGQAOgGAUAAQAVAAANAHQANAHAGANQAGANgBAUIAAB5g");
	this.shape_4.setTransform(411.2,51.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgpBVQgUgIgKgVQgKgUAAgkQAAgjAKgUQAKgUAUgIQAUgJAbABQAeAAARAKQARAKAGARQAGASAAAXIgBANIgBALIhyAHQACATALAJQAMAJAXAAQALAAALgCQAMgCAJgDQAKgCAGgEIAAAmQgJAFgSAEQgSADgYAAIgDAAQgYAAgSgHgAgYgtQgJAJgBAWIBIgGQABgKgDgIQgCgIgHgEQgHgFgOAAQgVAAgJAKg");
	this.shape_5.setTransform(391.0018,51.3251);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AAiB9IAAhtQAAgRgHgIQgFgIgRABQgPgBgJAGQgJAGgFANIAAB1IgwAAIAAj5IAwAAIAABeQAIgNAOgGQANgGAVAAQAVAAANAHQANAGAGAOQAFANAAASIAAB6g");
	this.shape_6.setTransform(370.85,47.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AgYByIAAi3Ig8AAIAAgtICpAAIAAAtIg8AAIAAC3g");
	this.shape_7.setTransform(351.2,48.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgSAbQgGgCgDgGQgBgHAAgMQAAgMABgGQADgGAGgDQAGgCAMABQAMgBAGACQAHADACAGQACAGAAAMQAAAMgCAHQgCAGgHACQgGACgMAAQgMAAgGgCg");
	this.shape_8.setTransform(328.2,57.52);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AAXB9IgwhMIgIAAIAABMIgvAAIAAj5IAvAAIAACJIAKAAIAuhBIA4AAIg/BSIBBBfg");
	this.shape_9.setTransform(314.5,47.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgaBVQgUgIgKgVQgLgUAAgkQAAgjALgUQAKgUAUgIQATgJAbABQAOAAAMABQAMACAIACIAAApQgJgEgKgBQgJgCgMAAQgPAAgKAEQgJAFgFAMQgFAMAAATQAAAVAFALQAFAMAJAEQAKAFAQAAIAVgCQAKgBAKgEIAAAoIgNADIgRADIgSAAIgDAAQgZAAgSgHg");
	this.shape_10.setTransform(295.775,51.3251);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgXB/IAAixIAvAAIAACxgAgPhNQgGgBgDgGQgCgFAAgMQAAgLACgFQADgFAGgCQAFgCAKABQALgBAGACQAFACADAFQACAFAAALQAAAMgCAFQgDAGgFABQgGACgLAAQgKAAgFgCg");
	this.shape_11.setTransform(282.775,47.595);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgFBqQgNgFgGgNQgGgNAAgXIAAhSIgXAAIAAgmIAXAAIAAgqIAvAAIAAAqIAlAAIAAAmIglAAIAABOQAAAPAEAGQAFAFAMAAIAHAAIAGgBIAAAlIgKABIgMAAIgEAAQgTAAgLgFg");
	this.shape_12.setTransform(272.15,49.3271);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("Ag6B0QgQgMgGgUQgGgVABgcQgBgaAGgUQAGgVAQgMQAPgNAdAAQAXAAAMAHQANAHAFAMIAAhfIAvAAIAAD6IgrAAIgEgZQgFAMgMAIQgNAIgXAAQgdAAgPgLgAgXgNQgIAIgDALQgCANAAAQQAAAQACANQADAMAIAHQAIAIAPAAQAQAAAJgHQAJgGAEgNQADgMAAgSQAAgRgEgNQgDgMgJgHQgJgHgQAAQgPAAgIAIg");
	this.shape_13.setTransform(246.7731,47.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AAiBbIAAhsQAAgSgGgIQgGgIgSAAQgNAAgKAGQgKAFgEAOIAAB1IgvAAIAAixIAvAAIAAAVQAIgNAPgGQANgGATAAQAWAAANAHQANAHAGANQAFANABAUIAAB5g");
	this.shape_14.setTransform(226.2,51.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AgUBbQgYAAgQgMQgRgNgJgYQgDgJgCgLIgBgVIAAgHQAAgYAKgTQAKgSAUgOQAIgFAJgDQAIgBAJAAIAIAAQARAAALAEQAKAGAGAKIABABIABABIAAAAIABgFIABgBIAtAAIABAAIAAABIgCA6QAAAmADAYQACAYAFALIAAACIABAFIgBABIgtAAIgEgHIgFgSIgBAAQgHANgKAHQgLAGgPAAgAgdgtQgMAKgGAVIgCAKIAAAGQAAAUAHANQAHANANAFIAKACIAKABQANABAIgFQAJgEAEgKQADgGADgLQABgJAAgNQAAgSgFgNQgEgMgJgGQgEgDgFgBQgHgBgGAAIgBAAQgQAAgLAKg");
	this.shape_15.setTransform(204.85,51.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AAhBbIAAhsQABgSgGgIQgGgIgRAAQgPAAgJAGQgKAFgDAOIAAB1IgxAAIAAixIAxAAIAAAVQAHgNAOgGQAOgGAUAAQAVAAANAHQANAHAGANQAGANgBAUIAAB5g");
	this.shape_16.setTransform(176.3,51.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgpBVQgUgIgKgVQgKgUAAgkQAAgjAKgUQAKgUAUgIQAUgJAbABQAeAAARAKQARAKAGARQAGASAAAXIgBANIgBALIhyAHQACATALAJQAMAJAXAAQALAAALgCQAMgCAJgDQAKgCAGgEIAAAmQgJAFgSAEQgSADgYAAIgDAAQgYAAgSgHgAgYgtQgJAJgBAWIBIgGQABgKgDgIQgCgIgHgEQgHgFgOAAQgVAAgJAKg");
	this.shape_17.setTransform(156.1018,51.3251);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgFBqQgNgFgGgNQgGgNAAgXIAAhSIgXAAIAAgmIAXAAIAAgqIAvAAIAAAqIAlAAIAAAmIglAAIAABOQAAAPAEAGQAFAFAMAAIAHAAIAGgBIAAAlIgLABIgLAAIgEAAQgTAAgLgFg");
	this.shape_18.setTransform(140.5,49.3271);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231F20").s().p("AgHBcQgPAAgPgCIgagEIAAgoQAMAEAPACQAOACANAAQANABAIgEQAHgEAAgKQAAgIgDgEQgDgEgGgDQgHgDgPgDQgSgFgLgGQgKgFgEgJQgDgKgBgPQAAgZAQgOQARgOAmAAQAPAAANACQANACAIACIgDAlIgMgDIgQgDIgRgBQgPAAgFAEQgHAEAAAJQAAAFACADQADADAIADIAUAGQASAFALAGQALAGAFAKQADAKAAAQQABAfgUANQgSANgfAAIgDAAg");
	this.shape_19.setTransform(126.6,51.2759);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AgXB/IAAixIAvAAIAACxgAgPhNQgGgBgDgGQgCgFAAgMQAAgLACgFQADgFAGgCQAFgCAKABQALgBAGACQAFACADAFQACAFAAALQAAAMgCAFQgDAGgFABQgGACgLAAQgKAAgFgCg");
	this.shape_20.setTransform(113.775,47.595);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231F20").s().p("AhGByIAAjkIAzAAIAAC5IBaAAIAAArg");
	this.shape_21.setTransform(101.3,48.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABYCZIgahMIh7AAIgbBMIhFAAIBykxIBYAAIBxExgAAqAWIgnhzIgFAAIgoBzIBUAAg");
	this.shape_22.setTransform(47.625,47.175);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0D8075").s().p("AirCsQhHhHAAhlQAAhkBHhIQBHhGBkAAQBlAABHBGQBHBIAABkQAABlhHBHQhHBHhlAAQhkAAhHhHg");
	this.shape_23.setTransform(46.725,47.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// 图层 1
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231815").s().p("ABFAQQAAgQAJgKQAJgKAQAAQAfAAAAAoIgzAAQAAAKAHAHQAHAHAJAAQAMAAALgHIAAANQgQAEgHAAQglAAAAgmgAB4AKQAAgIgFgFQgEgGgJAAQgRAAgCATIAlAAIAAAAgAhmAQQAAgQAKgKQAJgKAPAAQAgAAgBAoIgyAAQAAAKAGAHQAIAHAJAAQANAAAJgHIAAANQgPAEgIAAQglAAAAgmgAgyAKQAAgIgFgFQgFgGgIAAQgRAAgCATIAlAAIAAAAgACZA1IAAhHIAOAAIAABHgAAbA1IAAg8IgQAAIAAgLIAQAAIAAgGQAAgPAFgGQAGgIANAAIAJABIAAAKIgHAAQgHAAgDAEQgCAEAAAIIAAAIIATAAIAAALIgTAAIAAA8gAgRA1IAAhHIANAAIAABHgAimA1IAAhhIA0AAIAAAMIgmAAIAAAdIAkAAIAAALIgkAAIAAAtgACYgiIAAgPIAPAAIAAAPgAgSgiIAAgPIAPAAIAAAPg");
	this.shape_24.setTransform(431.1511,284.8963,1.1342,1.1342);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FCE7E7").s().p("AjrB/IAAj9IHXAAIAAD9gABOgNQgJAKAAAPQAAAnAlAAQAHAAAPgFIAAgNQgKAHgMAAQgJAAgHgGQgHgHAAgLIAzAAQAAgnggAAQgPAAgJAKgAhcgNQgKAKAAAPQAAAnAlAAQAIAAAPgFIAAgNQgJAHgNAAQgKAAgHgGQgHgHAAgLIAzAAQAAgngfAAQgPAAgJAKgACZAxIANAAIAAhGIgNAAgAALgLIAQAAIAAA8IAOAAIAAg8IASAAIAAgKIgSAAIAAgIQAAgJACgDQACgFAIAAIAHABIAAgLIgJgBQgNAAgGAIQgFAHAAAOIAAAHIgQAAgAgRAxIANAAIAAhGIgNAAgAimAxIAOAAIAAgsIAkAAIAAgMIgkAAIAAgcIAlAAIAAgNIgzAAgACYglIAPAAIAAgPIgPAAgAgSglIAPAAIAAgPIgPAAgABTAHQACgTARAAQAIAAAFAGQAFAFAAAIgAhYAHQACgTASAAQAIAAAFAGQAEAFAAAIg");
	this.shape_25.setTransform(431.1794,285.2933,1.1342,1.1342);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231815").s().p("ACRAoQgHgLAAgQQAAgPAHgJQAJgLAPAAQAQAAAIALIAAAAIAAgLIANAAIAABIIgMAAIAAgKIgBAAQgHAMgRAAQgQAAgIgMgACdgDQgFAGAAALQAAAKAFAIQAFAJAKAAQAKAAAGgJQAFgIAAgKQAAgLgGgGQgFgIgLgBQgJABgFAIgAiVAoQgHgLAAgQQAAgPAHgJQAJgLAOAAQARAAAHALIABAAIAAgLIAMAAIAABIIgMAAIAAgKIAAAAQgIAMgRAAQgPAAgIgMgAiKgDQgFAGAAALQAAAKAFAIQAGAJAKAAQAJAAAGgJQAGgIAAgKQgBgLgFgGQgGgIgKgBQgKABgFAIgAEWAyIAAglQABgYgPgBIgCAAQgUABgBAcIAAAhIgMAAIAAhGIAMAAIAAALIAAAAQAHgNARAAQAbAAAAAdIAAArgABpAyIAAhGIAOAAIAABGgABFAyIAAglQgBgYgPgBIgBAAQgUABAAAcIAAAhIgOAAIAAhGIANAAIAAALIABAAQAGgNARAAQAaAAAAAdIAAArgAgQAyIAAglQAAgYgPgBIgBAAQgVABAAAcIAAAhIgNAAIAAhGIAMAAIAAALIABAAQAGgNASAAQAaAAAAAdIAAArgAi9AyIAAhGIAOAAIAABGgAjoAyIgshQIgBAAIAABQIgNAAIAAhhIASAAIAsBOIAAAAIAAhOIAOAAIAABhgABpglIAAgOIAPAAIAAAOgAi+glIAAgOIAPAAIAAAOg");
	this.shape_26.setTransform(445.3286,103.4525,1.1342,1.1342);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E4F1E0").s().p("AlnB/IAAj9ILPAAIAAD9gACSgMQgHAJgBAPQABAQAHALQAIAMAQAAQAQAAAHgMIABAAIAAAKIANAAIAAhIIgOAAIAAALIAAAAQgHgLgQAAQgQAAgIALgAiVgMQgHAJAAAPQAAAQAHALQAJAMAPAAQAQAAAIgMIAAAAIAAAKIANAAIAAhIIgNAAIAAALIgBAAQgHgLgQAAQgPAAgJALgAEIgNQAPABAAAYIAAAlIANAAIAAgrQAAgdgbAAQgQAAgHANIAAAAIAAgMIgNAAIAABHIANAAIAAghQAAgdAVAAgABqAxIANAAIAAhHIgNAAgAA2gNQAPABAAAYIAAAlIANAAIAAgrQAAgdgaAAQgRAAgHANIgBAAIAAgMIgMAAIAABHIANAAIAAghQAAgdAVAAgAgfgNQAPABABAYIAAAlIAMAAIAAgrQAAgdgaAAQgRAAgGANIgBAAIAAgMIgNAAIAABHIAOAAIAAghQAAgdAUAAgAi8AxIANAAIAAhHIgNAAgAkUgfIAtBQIASAAIAAhhIgPAAIAABOIAAAAIgrhOIgTAAIAABhIAOAAIAAhQgABpgmIAPAAIAAgOIgPAAgAi9gmIAOAAIAAgOIgOAAgACdAfQgFgIABgKQgBgLAFgGQAFgJAKAAQALAAAFAJQAGAGgBALQAAAKgEAIQgHAJgJAAQgLAAgFgJgAiKAfQgEgIAAgKQAAgLAEgGQAGgJAKAAQAKAAAGAJQAFAGAAALQAAAKgFAIQgGAJgKAAQgKAAgGgJg");
	this.shape_27.setTransform(445.2719,103.5943,1.1342,1.1342);

	this.instance = new lib.ClipGroup_7_0();
	this.instance.setTransform(818.1,348.6,1.1342,1.1342,0,0,0,52.6,40.8);

	this.instance_1 = new lib.ClipGroup_8_0();
	this.instance_1.setTransform(702.9,349.6,1.1342,1.1342,0,0,0,36.1,50.6);

	this.instance_2 = new lib.ClipGroup_9_0();
	this.instance_2.setTransform(582.65,349.6,1.1342,1.1342,0,0,0,37.5,50.6);

	this.instance_3 = new lib.ClipGroup_10_0();
	this.instance_3.setTransform(645.35,346.25,1.1342,1.1342,0,0,0,269.3,376.9);

	this.instance_4 = new lib.ClipGroup_13();
	this.instance_4.setTransform(822.95,168.45,1.1342,1.1342,0,0,0,48.4,52);

	this.instance_5 = new lib.ClipGroup_14();
	this.instance_5.setTransform(706.8,173.35,1.1342,1.1342,0,0,0,49.1,52);

	this.instance_6 = new lib.ClipGroup_15();
	this.instance_6.setTransform(579.85,167.2,1.1342,1.1342,0,0,0,50,50.9);

	this.instance_7 = new lib.ClipGroup_16();
	this.instance_7.setTransform(463.9,163.1,1.1342,1.1342,0,0,0,46.8,54.6);

	this.instance_8 = new lib.ClipGroup_17();
	this.instance_8.setTransform(645.35,346.25,1.1342,1.1342,0,0,0,269.3,376.9);

	this.instance_9 = new lib.ClipGroup_18();
	this.instance_9.setTransform(464.2,349.6,1.1342,1.1342,0,0,0,54.4,50.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]}).wait(2));

	// 对话内容
	this.dia_1_1 = new lib.d1();
	this.dia_1_1.name = "dia_1_1";
	this.dia_1_1.setTransform(530,512.5,1,1,0,0,0,159.4,40.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FE8659").ss(8,1,1).p("Eg4LgRLMBwXAAAQCVAABoB3QBpB4AACqIAAVlQAACphpB4QhoB4iVAAMhwXAAAQiVAAhph4Qhnh4AAipIAA1lQAAiqBnh4QBph3CVAAg");
	this.shape_28.setTransform(640,568.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Eg4LARMQiVAAhoh4Qhoh3AAiqIAA1lQAAipBoh4QBoh4CVAAMBwXAAAQCVAABoB4QBpB4AACpIAAVlQAACqhpB3QhoB4iVAAg");
	this.shape_29.setTransform(640,568.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FCE0CE").ss(18,1,1).p("Eg4LgRLMBwXAAAQCVAABoB3QBpB4AACqIAAVlQAACphpB4QhoB4iVAAMhwXAAAQiVAAhph4Qhnh4AAipIAA1lQAAiqBnh4QBph3CVAAg");
	this.shape_30.setTransform(640,568.45);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Eg4LARMQiVAAhoh4Qhoh3AAiqIAA1lQAAipBoh4QBoh4CVAAMBwXAAAQCVAABoB4QBpB4AACpIAAVlQAACqhpB3QhoB4iVAAg");
	this.shape_31.setTransform(640,568.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FE8659").ss(8,1,1).p("Eg4LgRLMBwXAAAQCVAABoB3QBpB4AACqIAAVlQAACphpB4QhoB4iVAAMhwXAAAQiVAAhph4Qhnh4AAipIAA1lQAAiqBnh4QBph3CVAAg");
	this.shape_32.setTransform(640,568.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Eg4LARMQiVAAhoh4Qhoh3AAiqIAA1lQAAipBoh4QBoh4CVAAMBwXAAAQCVAABoB4QBpB4AACpIAAVlQAACqhpB3QhoB4iVAAg");
	this.shape_33.setTransform(640,568.45);

	this.dia_2_1 = new lib.d1复制();
	this.dia_2_1.name = "dia_2_1";
	this.dia_2_1.setTransform(530,512.5,1,1,0,0,0,159.4,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.dia_1_1}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.dia_2_1}]},1).wait(1));

	// diban
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.8)").s().p("EhkVAEsIAApXMDIrAAAIAAJXg");
	this.shape_34.setTransform(639.9,690.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(637.7,278.8,1284.5,855.3);
p.frameBounds = [rect, rect];
// library properties:
lib.properties = {
	id: 'E637B31863A9224E9952B4D82164A654',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1733295648204", id:"index_atlas_1"}
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