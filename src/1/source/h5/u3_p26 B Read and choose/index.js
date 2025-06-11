(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,834,384,171],[386,834,314,168],[702,834,310,168],[1014,834,310,168],[1260,0,301,168],[0,0,1258,832]]}
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



(lib.Image_15 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_16 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_17 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_18 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_19 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.位图160 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(5);
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
	mask.graphics.p("EgovA5lMAAAhzJMBRfAAAMAAABzJg");
	mask.setTransform(260.775,368.5);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0E8F5").s().p("Ak6hlIJtgVIAIDgIptAVgAj+gDQgHAJABAPQAAAQAIAKQAIAMAOAAIACAAQAQgBAIgMIAAAKIANAAIgDhIIgNAAIAAAMQgHgLgPAAIgCAAQgPAAgIAMgAhtA1IAOgBIgDhUIAegBIAAgMIhLACIAAANIAfgCgAgMAvQAHADAJAAIADAAQALAAAGgGQAIgGgBgLQAAgMgQgHQgPgGAAgGQAAgJALAAIABAAQAIAAAFADIABgLIgPgCIgBAAQgKAAgHAGQgHAGAAAKQABAKAOAHQAQAIAAAFQABAFgFADQgDADgGAAIAAAAQgIAAgHgFgAAsg5IAEBoIANAAIgBghQgBgdAWAAQAIAAAEAGQADAGABAMIABAlIANgBIgBgqQgCgdgZAAIgBAAQgQAAgHANIAAAAIgCgsgACFgaIACBGIANAAIgChHgACqgbIACBGIANAAIgBghQAAgMAFgIQAFgIAJgBIABAAIAGABIAAgLIgHgBIgCAAQgMABgGAMIgBAAIAAgLgADoAWQAAAUAVAAIACAAQADAAAIgDIgBgLQgDADgGAAQgKAAgBgMIgBgmIATgBIgBgLIgTABIAAgVIgNAFIAAARIgQAAIAAALIAQgBgAg8AIIABALIAkgCIgBgKgACDg5IAAAPIAPgBIgBgOgAjiAwQgJAAgGgJQgFgHAAgKQgBgLAFgHQAEgIAKAAIABgBQAKAAAGAIQAFAHAAALQABAKgFAIQgFAIgLABg");
	this.shape.setTransform(95.675,460.075);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_34, rect = new cjs.Rectangle(64.2,447.8,63,24.6), [rect]);


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
	mask.graphics.p("EgovA5lMAAAhzJMBRfAAAMAAABzJg");
	mask.setTransform(260.775,368.5);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5F2EC").s().p("Aj7BoIAHjgIHwARIgHDggACZgGIAQABIgBAoQgBAVAWABIABAAQAGAAAEgCIABgLQgEACgFAAIgBAAQgKABAAgNIABgnIATABIAAgLIgSAAIAAgVIgNAEIgBAQIgQAAgABrA1IANAAIABghQABgMAFgIQAFgHAJAAIAAAAIAIABIAAgLIgJgBIAAAAQgMAAgHAMIAAgMIgMAAgABFA0IAOAAIAChGIgNgBgAATgMQAQABgBAYIgCAlIANABIACgrQABgegbgBIgBAAQgOAAgHAMIABgsIgNAAIgEBnIANABIACghQABgcATAAgAhNAsQAHAFAMgBIACAAQAKAAAGgEQAIgHAAgKQABgMgQgIQgPgHAAgGQAAgJAMAAIABAAQAKACAEADIABgLQgIgEgIAAIgBAAQgLAAgGAGQgHAFgBAKQAAAKAPAIQAPAIAAAGQAAAKgNAAIgBAAQgKgBgGgFgAiRAsIANAAIAChHIgNgBIAAALIgBAAQgHgMgQAAIgBAAQgPAAgIALQgHAJgBAOQgBAQAHALQAIAMAPAAIACAAQAOABAJgLgABIgjIAOAAIABgPIgPAAgAimAiQgKgBgFgJQgEgIAAgJQABgZATAAIAAAAQALAAAFAJQAFAHAAAKQgBAKgFAIQgGAIgJAAg");
	this.shape.setTransform(95.675,499.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_32, rect = new cjs.Rectangle(70.5,487,50.5,24.2), [rect]);


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
	mask.graphics.p("EgovA5lMAAAhzJMBRfAAAMAAABzJg");
	mask.setTransform(260.775,368.5);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF4D6").s().p("Aj4BoIAIjgIHpASIgIDfgACVgGIAQABIgBApQgBAUAWACIABAAIAKgCIABgMQgEADgFAAIAAAAQgLgBAAgMIABgmIATABIABgMIgTAAIAAgVIgNAEIAAAQIgQAAgABnA1IANAAIABggQABgNAFgIQAFgHAJAAIABAAIAHACIAAgMIgIgBIgBAAQgMAAgGAMIgBAAIABgLIgNgBgABCA0IANAAIAChHIgNAAgAAfAzIATAAIgkgpIAigdIgSgBIgdAbIACg9IgMgBIgEBoIANAAIABgkgAhJAsQAHAFAMAAIABAAQAKAAAHgFQAHgGABgLQAAgLgPgJQgPgHAAgGQAAgIAMAAIABAAQAJACAFADIABgMQgIgEgIAAIgBAAQgYAAgBAWQAAAJAPAJQAPAIAAAFQAAAKgNAAIgBAAQgJgBgHgEgAi7gSQgHAJgBAPQgBAPAHAMQAIAMAPAAIABAAQAQAAAIgLIAAAAIAAAKIAMAAIADhHIgNAAIgBAKQgHgLgQAAIgBAAQgPAAgIAKgABEgjIAPAAIAAgOIgPAAgAiiAjQgKgBgFgJQgFgIABgKQABgZATAAIAAAAQAKABAGAIQAFAHAAAKQgBALgFAHQgGAIgKABg");
	this.shape.setTransform(95.675,579.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30, rect = new cjs.Rectangle(70.8,567.2,49.8,24.2), [rect]);


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
	mask.graphics.p("EgovA5lMAAAhzJMBRfAAAMAAABzJg");
	mask.setTransform(260.775,368.5);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E2EDF8").s().p("Aj4hnIHpgRIAIDgInpARgABogZIADBkIANAAIgBgoIAAAAQAIALAPAAIABgBQAPAAAIgMQAHgLAAgQQgBgOgHgKQgJgKgOAAIgBAAQgRABgHAMIgBgLgAikgGQgIAJABAPQABAPAHALQAIAMAPAAIABAAQARgBAHgMIABAKIAMgBIgChHIgNAAIAAALQgHgKgQAAIgBAAQgPABgIALgAgmgLQgKAKAAAQQABAPAKALQAKAKAQAAIABAAQAKAAAGgDIgCgMQgGAEgHABIgBAAQgLAAgHgJQgFgHgBgLQAAgKAGgHQAGgJAKAAIABAAQAGAAAHACIABgKQgGgCgIAAIgBAAQgRAAgJALgAAVgNQgHALABAOQAAAPAIALQAIALAOAAIACAAQAQgBAIgMIAAALIANgBIgDhIIgNABIAAALQgHgLgPABIgCAAQgPAAgIALgAiJAtQgJAAgGgJQgEgIgBgKQAAgKAEgIQAFgHAKgBIABAAQAJABAGAHQAFAHABAKQAAALgEAHQgGAKgKAAgAAxAnQgJgBgGgIQgFgIAAgKQgBgLAFgGQAEgIAKgBIABAAQAKAAAGAIQAFAHAAAKQABALgFAHQgFAJgLABgACLAjQgKAAgGgJQgFgGAAgLQAAgJAFgIQAFgJAKAAIABgBQAKAAAFAJQAEAHABAJQAAAKgEAIQgFAJgKABg");
	this.shape.setTransform(95.675,618.65);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28, rect = new cjs.Rectangle(70.8,606.6,49.8,24.2), [rect]);


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
	mask.graphics.p("EgovA5lMAAAhzJMBRfAAAMAAABzJg");
	mask.setTransform(260.775,368.5);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBE7E7").s().p("AjwhnIHZgRIAIDgInZARgAi7A1QAHADAKAAIADAAQALAAAGgGQAIgGgBgLQAAgMgQgHQgQgHAAgGQAAgIANAAQAIAAAGADIAAgLQgIgDgHAAIgBAAQgLABgHAFQgHAGAAAKQABALAPAHQAQAIAAAFQABAFgFADQgDADgGAAIAAAAQgJAAgHgFgAiCgzIAEBoIANAAIgBghQgBgdAWAAQAPAAABAYIABAlIANgBIgBgqQgCgdgZAAIgBAAQgQABgHAMIgCgsgAglgLQgKAKAAAQQABAPAKAKQAKALAQAAIABAAQAPgBAKgLQAKgLgBgQQAAgPgKgKQgKgKgPAAIgBAAQgRABgJALgAAsAvIANAAIgBghQgBgNAGgHQAFgIAIAAIABAAIAHABIgBgMIgHgBIgBAAQgMAAgHAOIAAgLIgNAAgABoAaQABAUAUAAIABAAIALgCIAAgLQgFACgEAAIAAAAQgLAAAAgMIgCgmIATgBIAAgKIgTAAIgBgUIgNAEIABARIgQAAIAAALIAQgBgACTApQAGAEALAAIACAAQALgBAHgFQAHgHAAgKQgBgNgPgGQgQgGAAgGQgBgJANgBIAAAAQAJAAAFAEIAAgMQgHgCgHAAIgCAAQgZABABAWQAAAKAQAHQAQAHAAAFQAAAKgNABIgBAAQgIAAgIgEgAgKAoQgLAAgGgIQgFgHgBgLQAAgKAGgHQAGgJAKAAIABAAQAJAAAGAIQAGAGAAALQABAKgFAIQgGAJgKAAg");
	this.shape.setTransform(95.675,538.125);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26, rect = new cjs.Rectangle(71.6,526.1,48.2,24.2), [rect]);


(lib.ClipGroup_20 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AkNCWIAAkrIIbAAIAAErgAjvhnIAIDgIHYgRIgIjgg");
	mask.setTransform(27,15.025);

	// 图层_3
	this.instance = new lib.Image_19();
	this.instance.setTransform(0,0,0.18,0.18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_20, rect = new cjs.Rectangle(0,0,54,30.1), [rect]);


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
	mask.graphics.p("AkVCWIAAkrIIrAAIAAErgAj4hnIAIDgIHpgRIgIjgg");
	mask.setTransform(27.975,15.225);

	// 图层_3
	this.instance = new lib.Image_18();
	this.instance.setTransform(0,0,0.18,0.18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_19, rect = new cjs.Rectangle(0.2,0.2,55.7,30.1), [rect]);


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
	mask.graphics.p("AkVCWIAAkrIIrAAIAAErgAj4BoIHpARIAIjfInpgSg");
	mask.setTransform(27.975,15.2);

	// 图层_3
	this.instance = new lib.Image_17();
	this.instance.setTransform(0,0,0.18,0.18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_18, rect = new cjs.Rectangle(0.2,0.2,55.7,30.1), [rect]);


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
	mask.graphics.p("AkZCXIAAktIIzAAIAAEtgAj7BnIHwASIAHjgInwgRg");
	mask.setTransform(28.15,15.125);

	// 图层_3
	this.instance = new lib.Image_16();
	this.instance.setTransform(0,0,0.18,0.18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17, rect = new cjs.Rectangle(0,0,56.3,30.3), [rect]);


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
	mask.graphics.p("AlYCZIAAkxIKxAAIAAExgAk6hlIAIDgIJsgWIgIjgg");
	mask.setTransform(34.625,15.5);

	// 图层_3
	this.instance = new lib.Image_15();
	this.instance.setTransform(0,0,0.18,0.18);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, rect = new cjs.Rectangle(0.2,0.2,68.9,30.6), [rect]);


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
	this.shape_3.graphics.f().s("#F99703").ss(4,1,1).p("ACsirQBHBIAABjQAABVg0BAQgJALgKALQhIBIhkAAQhLAAg7gpQgUgNgRgSQgLgLgJgLQgGgIgGgJQgCgDgDgEQgig3AAhGQAAhjBHhIQA3g3BKgMQAUgDAWAAQBkAABIBGg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F99703").s().p("AiGDKQgUgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBHBHAABkQAABVg0BAIgTAWQhIBHhkAAQhLAAg7gog");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F99703").ss(4,1,1).p("AgqgxIBVAAQARAAAAARIAABBQAAARgRAAIhVAAQgRAAAAgRIAAhBQAAgRARAAg");
	this.shape_5.setTransform(4.05,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F99703").s().p("AgqAyQgRAAAAgRIAAhBQAAgRARAAIBVAAQARAAAAARIAABBQAAARgRAAg");
	this.shape_6.setTransform(4.05,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F99703").ss(5,1,1).p("AA/hjIABDHIh+hkg");
	this.shape_7.setTransform(-6.9,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F99703").s().p("Ag+AAIB9hjIAADHg");
	this.shape_8.setTransform(-6.9,0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F99703").ss(4,1,1).p("ACsirQBHBHAABkQAABVg0BAQgJALgKALQhHBIhlAAQhLAAg8gpQgTgNgRgSQgLgLgJgLQgGgIgGgJQgCgDgDgEQgig3AAhGQAAhkBHhHQA3g3BJgMQAVgEAWAAQBlAABHBHg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiHDKQgTgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBGBHAABkQAABVgzBAIgTAWQhIBHhkAAQhLAAg8gog");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

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
	this.shape_3.graphics.f().s("#F99703").ss(4,1,1).p("AirirQhHBHAABkQAABVA0BAQAJALAKALQBHBIBlAAQBLAAA8gpQATgNARgSQALgLAJgLQAGgIAGgJQACgDADgEQAig3AAhGQAAhkhHhHQg3g3hJgMQgVgEgWAAQhlAAhHBHg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F99703").s().p("AirCrIgTgWQgzhAAAhVQAAhkBGhHQBIhGBkAAQAVAAAVADQBKAMA3A3QBGBHAABkQAABGghA3IgFAGIgMASIgUAWQgRARgTAOQg8AohLAAQhkAAhIhHg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F99703").ss(1,1,1).p("AgqgxIBVAAQARAAAAARIAABBQAAARgRAAIhVAAQgRAAAAgRIAAhBQAAgRARAAg");
	this.shape_5.setTransform(-4.9,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F99703").s().p("AgqAyQgRAAAAgRIAAhBQAAgRARAAIBVAAQARAAAAARIAABBQAAARgRAAg");
	this.shape_6.setTransform(-4.9,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F99703").ss(5,1,1).p("Ag+hjIAADHIB+hjg");
	this.shape_7.setTransform(6.9,0.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F99703").s().p("Ag+hjIB+BjIh+Bkg");
	this.shape_8.setTransform(6.9,0.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AirCrIgTgWQgzhAAAhVQAAhkBGhHQBIhGBkAAQAVAAAVADQBKAMA3A3QBGBHAABkQAABGghA3IgFAGIgMASIgUAWQgRARgTAOQg8AohLAAQhkAAhIhHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_3},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

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
	mask.graphics.p("AlYCZIAAkxIKxAAIAAExg");
	mask.setTransform(34.625,15.5);

	// 图层_3
	this.instance = new lib.ClipGroup_16();
	this.instance.setTransform(34.6,15.4,1,1,0,0,0,34.6,15.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_35, rect = new cjs.Rectangle(0.2,0.2,68.9,30.6), [rect]);


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
	mask.graphics.p("AkZCXIAAktIIzAAIAAEtg");
	mask.setTransform(28.15,15.125);

	// 图层_3
	this.instance = new lib.ClipGroup_17();
	this.instance.setTransform(28.2,15.1,1,1,0,0,0,28.2,15.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_33, rect = new cjs.Rectangle(0,0,56.3,30.3), [rect]);


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
	mask.graphics.p("AkVCWIAAkrIIrAAIAAErg");
	mask.setTransform(27.975,15.2);

	// 图层_3
	this.instance = new lib.ClipGroup_18();
	this.instance.setTransform(27.9,15.1,1,1,0,0,0,27.9,15.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_31, rect = new cjs.Rectangle(0.2,0.2,55.7,30.1), [rect]);


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
	mask.graphics.p("AkVCWIAAkrIIrAAIAAErg");
	mask.setTransform(27.975,15.225);

	// 图层_3
	this.instance = new lib.ClipGroup_19();
	this.instance.setTransform(27.9,15.1,1,1,0,0,0,27.9,15.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29, rect = new cjs.Rectangle(0.2,0.2,55.7,30.1), [rect]);


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
	mask.graphics.p("AkNCWIAAkrIIbAAIAAErg");
	mask.setTransform(27,15.025);

	// 图层_3
	this.instance = new lib.ClipGroup_20();
	this.instance.setTransform(27.1,15.1,1,1,0,0,0,27.1,15.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27, rect = new cjs.Rectangle(0,0,54,30.1), [rect]);


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


(lib.元件4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {label1:1,label2:10,label3:20,label4:30,label5:40,label6:50};
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
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(10).call(this.frame_39).wait(10).call(this.frame_49).wait(10).call(this.frame_59).wait(1));

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AiEDEIAAhtIgVAJIgWAJIgZgwQA+gWAugbQAugaAcgiIAnAAQAfAjAsAaQAsAaA9AWIgVAyIgXgKIgWgKIAABtgAhOCVICfAAIAAgrIifAAgAggAcQgTAOgXAOICXAAQgXgOgUgOQgTgOgOgOQgOAOgTAOgAiqgqIAegOIAfgQIAegRIAcgSIhIAAIAAAoIg1AAIAAhYICVAAIgIglIA7gDIAHAoICUAAIAABYIgvAAIAWANIAUALIgWAtIgdgRIgigTIgjgSIgdgPIAYgoIhjAAIAZApQgdAVgeARQgeARghAOgABWhaIAnAUIAAglIhKAAIAjARg");
	this.shape.setTransform(-877.1,-42.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AA4COIAhgDQAQgCAFgFQAEgFAAgOIAAg0IgcAmIgSgXIgWgYIgWgYIgWgWQgNAagXAYQgWAXghAaIgZgcIAAB1Ig2AAIAAlRICNAAIAAg0IA2ACIAAAyICOAAIAAEVQAAARgCAKQgDALgGAGQgHAHgMADQgLADgTACIgiADgAhyAxQAYgQAQgQQAQgQAKgQQAKgRAFgSQAFgSABgVIhXAAgAAYhEIgDAUIAXAVIAZAYIAZAXIAUAXIAAiEIhYAAIgCAVg");
	this.shape_1.setTransform(-918.175,-41.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhQCFIAhgCIAOgBQAFgBACgCQADgDABgEIAAgMIAAiAIifAAIAAg2IFvAAIAAA2IiWAAIAACVQAAAQgEALQgDAKgHAHQgIAGgNADQgLAEgSABIgiACgACEB+IgWgnIgXgjIgUgbIAsgdIAWAZIAYAhIAXAjIATAgIgwAoIgTgjgAjGCAIAZgfIAZgiQAMgRAKgRQALgRAHgPIAwAZIgSAjQgKASgMASIgXAjQgNARgMAOgAiNiGIAAg2IEfAAIAAA2g");
	this.shape_2.setTransform(-959.825,-40.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("Ai+C6IAAgyIB6AAIAAgrIAAhlIhQAAIAAixIEpAAIAACxIhQAAIAABpIAAAnIB6AAIAAAygAgOCIIAeAAIAAiQIgeAAgAhfg4IC+AAIAAgQIi+AAgAhfh4IC+AAIAAgQIi+AAgAh8BnIgQgbIgRgaIgPgWIAqgdIAPATIAQAaIAQAbIAPAWIgsAhIgMgXgABFBhIAQgXIAQgbIAPgaIALgVIAsAaIgNAXIgPAcIgQAaIgOAWg");
	this.shape_3.setTransform(-1000.8,-41.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("ABWCTIAdgEQANgBADgGQAEgGAAgNIAAk0IAzACIAAFDQAAARgCALQgCALgGAHQgGAGgKADQgLAEgRACIgdADgAhXDEIAAiJIggAAIAABvIgvAAIAAiiIBPAAIAAgYIhiAAIAAgyIAiAAIghgLQAMgaAJgbQAJgbAFgbIAxAIIgDAOIgEAPIAUAAIAAgyIA0ADIAAAvIBHAAIAAAxIhHAAIAAAgIBQAAIAAAyIhQAAIAAAYIBLAAIAAB1QAAAYgJAJQgKAJgSACIgVADIgPgxIAPgCQAHgBACgDQADgDAAgIIAAgvIgdAAIAACJgAiBhRIgHAPIAxAAIAAggIgkAAIgGARgAA8BjIAAj/IAyACIAAD9g");
	this.shape_4.setTransform(-1042.675,-41.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ai3CVIAYgDQAJgCADgEQADgFAAgLIAAhQIgWAJIgTAJIgOg2IAZgIIAegMIAAg+IgnAAIAAg2IAnAAIAAhDIAzACIAABBIAaAAIAAA2IgaAAIAAAqIASgIIAIAjIAEARIgeALIAAB1QAAAPgCAKQgDAKgFAHQgGAGgJADQgJAEgMABIgdADgAhDC3IAAg0IBnAAIAAg8IhJAAIAAgsIgBABIgbgrQAagQAVgTQAWgSATgTIAgAkQgSATgVARQgTARgWARIC2AAIgXgSIgYgSIgXgRIgTgOIAdgpIAXAPIAdAXIAdAVIAWARIgeArIgDgDIgEgEIAAAwIhHAAIAAA8IBmAAIAAA0gACMg9IAAgrIiUAAIAAArIgxAAIAAhfIBfAAIgJgmIA0gEIAJAqIBiAAIAABfg");
	this.shape_5.setTransform(-1083.7,-41.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("A4NJ2IAAzrMAwbAAAIAATrg");
	this.shape_6.setTransform(-985.2,-37.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgOCWQgNgFgIgIQgIgHgEgLIgEAfIg1AAIAAkvIA6AAIAAByQAGgMAQgJQAPgJAcAAQAiAAATAOQASANAHAZQAIAZgBAiQABAggIAYQgHAagSAPQgTAPgiAAQgUAAgNgEgAgegSQgLAJgEAOQgEAPAAAWQAAAVAEAPQAEAPALAIQAMAJASAAQAUAAAKgKQAJgIADgQQAEgPAAgTQAAgUgEgPQgDgPgKgJQgJgIgUgBQgSAAgMAIg");
	this.shape_7.setTransform(-70.55,-53.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhGCMQgTgOgHgZQgIgYABgjQgBggAIgXQAHgaATgPQASgOAjgBQAcAAAPAIQAPAJAGAPIAAh0IA6AAIAAEvIg0AAIgFgeQgGAPgPAJQgQAKgcAAQgjAAgSgOgAgcgQQgKAJgDAOQgDAQAAATQAAAUADAPQAEAPAJAJQAKAJATAAQATAAALgIQALgIAEgPQAEgPAAgWQAAgVgEgPQgEgPgLgIQgLgJgTAAQgTABgKAJg");
	this.shape_8.setTransform(59.8984,-53.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgyBmQgYgKgMgYQgNgYAAgsQAAgqANgZQAMgZAYgKQAYgJAhAAQAlAAAUAMQAVANAHAUQAIAWgBAcIAAAQIgCANIiKAIQACAXAOALQAOAMAcgBQANABAOgDQAOgCALgEQAMgDAHgEIAAAuQgKAGgWAEQgWAFgdAAIgDAAQgeAAgWgKgAgdg3QgLALgBAaIBYgHQAAgMgDgJQgDgKgJgFQgIgGgRgBQgaABgKAMg");
	this.shape_9.setTransform(266.3516,-49.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgYBvQgeAAgUgQQgUgPgLgeIgFgXQgCgNAAgNIAAgIQAAgdAMgXQAMgXAYgRQAKgFAKgDQALgDAKAAIALAAQATAAAOAGQANAHAIAMIAAABIAAACIABAAIABgGIABgDIA3AAIABABIABABIgDBHQAAAtADAeQADAdAGAOIAAACIACAGIgCABIg3AAIgEgIIgHgVIgBAAQgHAPgNAIQgOAIgSAAgAgkg3QgOAMgHAaIgCAMIgBAHQAAAZAIAPQAJAPARAHIALADIANABQAOABALgGQAKgFAGgLQAEgJACgMQACgMAAgPQAAgXgGgPQgFgOgLgIQgFgDgGgCQgIgBgIgBIAAAAQgUAAgOANg");
	this.shape_10.setTransform(-89.575,172.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AggBmQgYgJgNgZQgMgYAAgsQAAgqAMgZQANgZAYgJQAYgKAhAAQAQAAAOACIAZAEIAAAyQgLgFgMgCQgLgBgOAAQgTgBgMAGQgLAGgGAOQgGAOAAAYQAAAZAGAOQAGAOALAFQANAHATgBQANAAAMgCQANgCALgEIAAAvIgQAFIgUADIgVABIgDAAQgfAAgXgKg");
	this.shape_11.setTransform(64.775,172.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgyBmQgYgJgMgZQgNgYAAgsQAAgqANgZQAMgZAYgJQAYgKAhAAQAlAAAUAMQAVAMAHAWQAIAVgBAcIAAAQIgCANIiKAIQACAXAOALQAOALAcAAQANAAAOgCQAOgCALgEQAMgDAHgEIAAAuQgKAGgWAEQgWAFgdAAIgDAAQgeAAgWgKgAgdg3QgLALgBAaIBYgHQAAgMgDgJQgDgKgJgGQgIgFgRgBQgaAAgKANg");
	this.shape_12.setTransform(263.2016,172.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7},{t:this.shape_8}]},9).to({state:[{t:this.shape_7},{t:this.shape_8},{t:this.shape_9}]},10).to({state:[{t:this.shape_7},{t:this.shape_8},{t:this.shape_9},{t:this.shape_10}]},10).to({state:[{t:this.shape_7},{t:this.shape_8},{t:this.shape_9},{t:this.shape_10},{t:this.shape_11}]},10).to({state:[{t:this.shape_7},{t:this.shape_8},{t:this.shape_9},{t:this.shape_10},{t:this.shape_11},{t:this.shape_12}]},10).wait(10));

	// 图层_5
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231815").s().p("AhIBxIAAjeIAaAAIAAAdQAFgOAMgIQANgKAWABQAbgBAOAMQAPAKAGASQAFAUAAAYQAAAXgFASQgGATgPALQgOAMgbAAQgWABgNgJQgMgIgFgPIAABZgAgbhTQgLAIgEAOQgFAOAAATQAAATAFANQAEAOALAIQALAHASABQAUAAAJgKQAJgJADgOQADgNAAgQQAAgRgDgOQgDgOgKgJQgJgIgTAAQgSAAgLAHg");
	this.shape_13.setTransform(-355.675,200.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231815").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_14.setTransform(-375.475,198.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231815").s().p("AgXBMQgRgHgJgTQgJgSAAggQAAgfAJgSQAJgTARgIQARgHAWAAQAOAAALACQAKABAIADIAAAYIgUgGQgKgBgNAAQgQgBgLAGQgKAFgFAOQgEAOAAAXQgBAWAFAOQAFAOAKAFQALAGARgBQAMAAALgCQAKgBAJgDIAAAXIgLADIgQACIgQABQgWAAgRgIg");
	this.shape_15.setTransform(-391.25,198.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231815").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_16.setTransform(-416.425,198.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231815").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgYAAIAAgWIAYAAIAAgmIAYAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgRAAgKgEg");
	this.shape_17.setTransform(-350.6,106.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231815").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgDAJABIADAAIAAAXIgEAAQgLAAgJADQgKACgHAJQgIAHgEAOIAABpg");
	this.shape_18.setTransform(-360.225,107.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231815").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACABAKQgBAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_19.setTransform(-370.95,105.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231815").s().p("AAeByIg6hMIgJAAIAABMIgZAAIAAjjIAZAAIAACEIAKAAIA3hCIAgAAIhDBKIBHBXg");
	this.shape_20.setTransform(-381.5,104.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231815").s().p("AgXBSIgSgBIgMgDIAAgWIANADIARADIARAAQARAAAKgFQAJgGAAgOQAAgJgCgFQgEgGgHgDQgIgDgOgEQgSgEgKgEQgKgHgEgIQgEgJABgNQAAgVAOgMQAPgLAbAAQANgBALACQALACAHACIgCAWQgHgDgKgCQgLgCgLAAQgQAAgIAGQgJAEAAAOQAAAIACAEQADAFAHADQAGADALADQATADALAHQAMAEAEAJQAGAKAAAPQgBAZgPALQgQALgdAAIgRgBg");
	this.shape_21.setTransform(-397.7,108.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231815").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_22.setTransform(-422.425,108.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231815").s().p("AAABhQgLgEgFgLQgFgLABgVIAAhaIgYAAIAAgWIAYAAIAAgmIAYAAIAAAmIApAAIAAAWIgpAAIAABYQAAANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgRAAgKgEg");
	this.shape_23.setTransform(-350.6,-83.675);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231815").s().p("AgnBTIAAihIAaAAIAAAdQAFgOAIgGQAIgIAKgCQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABpg");
	this.shape_24.setTransform(-360.225,-82);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231815").s().p("AgNBvIAAihIAZAAIAAChgAgLhSQgDgDgBgKQABgKADgCQAEgDAHAAQAIAAADADQAEACABAKQgBAKgEADQgDADgIAAQgHAAgEgDg");
	this.shape_25.setTransform(-370.95,-84.875);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231815").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJACgIAIQgIAGgEAOIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAGAFANQAFALAAAPIAABwg");
	this.shape_26.setTransform(-384.2477,-85.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231815").s().p("AgXBTIgRgCIgOgDIAAgWIAPADIARACIAPABQASABAKgGQAJgFAAgOQAAgKgDgGQgDgFgHgDQgIgEgOgDQgSgEgKgFQgKgFgEgJQgEgJABgOQAAgUAOgLQAPgMAbgBQAMABAMABQALABAHADIgDAWQgGgDgLgBQgKgCgLAAQgQgBgJAFQgIAFgBAOQABAIACAFQACAEAIADQAGADAMACQASAFALAFQALAFAGAKQAEAJAAAQQAAAXgPAMQgRAMgdAAIgQgBg");
	this.shape_27.setTransform(-400.7,-81.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231815").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_28.setTransform(-425.425,-81.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231815").s().p("AgYBTIgRgCIgMgDIAAgWIANADIARACIAQABQASABAJgGQAKgFAAgOQAAgKgDgFQgCgGgIgDQgIgEgOgDQgSgEgKgFQgKgFgEgJQgEgJAAgOQAAgTAPgNQAPgLAcgBQAMABALABQALACAGACIgCAWQgHgDgKgBQgKgCgLgBQgQAAgIAFQgKAFABAOQgBAIADAEQADAFAGADQAHADALADQATAEAMAFQAKAFAFAKQAGAJgBAPQAAAYgQAMQgQAMgdAAIgRgBg");
	this.shape_29.setTransform(-352.85,12.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231815").s().p("AgBBhQgKgEgFgLQgEgLAAgVIAAhaIgZAAIAAgWIAZAAIAAgmIAZAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgSAAgKgEg");
	this.shape_30.setTransform(-365.15,10.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231815").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABog");
	this.shape_31.setTransform(-374.775,11.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#231815").s().p("AgnBMQgRgHgJgSQgJgTAAggQAAgfAJgTQAJgSARgIQAQgHAXAAQAYAAARAHQARAIAIASQAJATAAAfQAAAggJATQgIASgRAHQgRAIgYAAQgXAAgQgIgAAdA4QAKgFAEgOQAEgNABgYQAAgWgFgOQgFgOgKgFQgKgHgSAAQgRAAgKAHQgLAFgEAOQgEAOAAAWQAAAYAFANQAEAOAKAFQALAHAQgBQASABALgHg");
	this.shape_32.setTransform(-390.8,12.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#231815").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFALQAFAMAAAPIAABwg");
	this.shape_33.setTransform(-409.2977,8.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#231815").s().p("AgYBTIgRgCIgMgDIAAgWIANADIARACIAQABQASABAJgGQAKgFAAgOQAAgKgDgFQgCgGgIgDQgIgEgOgDQgSgEgKgFQgKgFgEgJQgEgJAAgOQAAgTAPgNQAPgLAcgBQAMABALABQALACAGACIgCAWQgGgDgLgBQgKgCgLgBQgQAAgIAFQgKAFABAOQAAAIACAEQADAFAGADQAHADALADQATAEAMAFQALAFAEAKQAGAJgBAPQAAAYgQAMQgQAMgdAAIgRgBg");
	this.shape_34.setTransform(-425.75,12.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#231815").s().p("AgBBhQgKgEgFgLQgEgLgBgVIAAhaIgYAAIAAgWIAYAAIAAgmIAaAAIAAAmIAnAAIAAAWIgnAAIAABYQgBANACAHQACAGAFADQAFADAJgBIAKAAIAIgBIAAAWIgJABIgJAAQgRAAgLgEg");
	this.shape_35.setTransform(-337.6,-174.675);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#231815").s().p("AgnBSIAAihIAaAAIAAAeQAFgNAIgIQAIgGAKgDQAKgCAJgBIADAAIAAAYIgEAAQgLgBgJAEQgKADgHAHQgIAJgEAOIAABog");
	this.shape_36.setTransform(-347.225,-173);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#231815").s().p("AgMBvIAAihIAZAAIAAChgAgLhSQgDgDAAgKQAAgKADgCQAEgDAHAAQAIAAAEADQADACAAAKQAAAKgDADQgEADgIAAQgHAAgEgDg");
	this.shape_37.setTransform(-357.95,-175.875);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#231815").s().p("AAoByIAAhmQAAgMgCgJQgDgJgGgEQgHgFgNAAQgJAAgKACQgJADgIAGQgIAIgEANIAABtIgaAAIAAjjIAaAAIAABZQAFgKAIgGQAJgFAKgDQAJgCAKAAQAVAAAMAHQALAHAFALQAFAMAAAPIAABwg");
	this.shape_38.setTransform(-371.2477,-176.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#231815").s().p("AgYBTIgRgCIgMgDIAAgWIANADIARACIARABQARABAJgGQAKgFAAgOQAAgKgCgFQgDgGgIgDQgIgEgOgDQgSgEgKgFQgKgFgEgJQgEgJAAgOQAAgTAPgNQAPgLAbgBQAMABAMABQALACAGACIgBAWQgIgDgJgBQgLgCgLgBQgQAAgIAFQgJAFAAAOQAAAIACAEQADAFAGADQAHADALADQATAEALAFQAMAFAEAKQAGAJAAAPQgBAYgQAMQgQAMgcAAIgSgBg");
	this.shape_39.setTransform(-387.7,-172.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#231815").s().p("AgrALIAAgVIBXAAIAAAVg");
	this.shape_40.setTransform(-401.525,-173.975);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#231815").s().p("AgMBoIAAi3Ig9AAIAAgYICTAAIAAAYIg9AAIAAC3g");
	this.shape_41.setTransform(-415.975,-175.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#231815").s().p("AgIBUQgYAAgQgNQgQgNgIgZIgDgNIAAgLIAAgJQAAgZAKgSQAKgTAVgNIAQgGQAIgCAHAAIADAAQAaAAATAdIAAgHIAAgBIABAAIAYAAIABAAIAAABIAABVIABAeIAEAbIgBABIgZAAQgBAAgBgHIgDgTIgFAIIgGAIQgIAGgJADQgIADgKAAgAgbgzQgNAJgHASIgDAMIgBAMIAAAGQAAAQAGANQAGANAMAJIALAEIALABIAFAAQAtAAAAg4IAAgKQAAgXgIgOQgIgOgQgEIgFgBIgEAAIgBAAQgRAAgNAJg");
	this.shape_42.setTransform(-441.425,-172.825);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#231815").s().p("AgMAUQgEgCgDgEQgCgFAAgJQAAgMAFgEQAFgFALAAQAMAAAFAFQAFAEAAAMQAAAJgCAFQgDAEgEACQgFABgIAAQgHAAgFgBg");
	this.shape_43.setTransform(423.825,185.05);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#231815").s().p("AhCBlQAQAAAKgFQALgFAGgJQAHgKAEgPIhJi2IAfAAIA3CYIACAAIA2iYIAdAAIhCCxQgIAXgKAQQgJARgQAJQgQAJgbAAg");
	this.shape_44.setTransform(409.775,181.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#231815").s().p("AgJBfQgcAAgRgOQgTgOgJgdIgDgPIgBgNIAAgKQAAgcAMgVQALgWAYgPIATgGQAIgCAIAAIAEAAQAeAAAVAhIAAgIIAAgBIABAAIAcAAIAAAAIABABIAABhQgBARACAQQABARAEAOIgCABIgcAAQgBAAgBgIIgDgVIgHAJIgHAJQgIAGgKAEQgKADgLAAgAgfg6QgOAKgIAVIgEANIgBAOIAAAHQAAASAHAPQAHAOANALIANAEIAMABIAGAAQA0AAAAhAIAAgKQgBgagIgRQgKgQgSgEIgGgBIgFAAIgBAAQgTAAgPAKg");
	this.shape_45.setTransform(389.65,177.85);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#231815").s().p("Ag0B3QgRgMgGgWQgHgVABgcQgBgaAHgVQAGgVARgNQAQgNAfAAQAZgBAOAKQAOAJAFARIAAhrIAeAAIAAECIgZAAIgFgfQgFAPgPAJQgPAKgXAAQgfAAgQgMgAgigXQgKAKgDAPQgDAPAAATQAAATADAQQADAQALAJQALAKAVAAQAVAAAMgJQANgIAEgPQAFgQAAgWQAAgVgFgQQgEgPgNgJQgMgJgVAAQgWAAgLALg");
	this.shape_46.setTransform(368.6982,174.25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#231815").s().p("AgtBXQgTgJgKgVQgKgVAAgkQAAgjAKgVQAKgVATgJQATgJAaABQAbgBATAJQATAJAKAVQAKAVAAAjQAAAkgKAVQgKAVgTAJQgTAIgbAAQgaAAgTgIgAAhBAQALgGAFgQQAFgPAAgbQAAgagGgPQgEgQgMgGQgMgHgUAAQgUAAgLAHQgMAGgFAQQgFAPAAAaQAAAbAGAPQAFAQAMAGQALAHATgBQAUABANgHg");
	this.shape_47.setTransform(347.9,177.8237);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#231815").s().p("AgBBuQgMgFgFgMQgGgNABgYIAAhmIgbAAIAAgYIAbAAIAAgsIAcAAIAAAsIAtAAIAAAYIgtAAIAABkQAAAPACAHQACAIAFADQAHADAKAAIALgBIAJgBIAAAZIgKABIgKAAIgEABQgSAAgKgFg");
	this.shape_48.setTransform(331.65,175.7523);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_49.setTransform(308.75,192.75);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_50.setTransform(291.75,192.75);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_51.setTransform(274.75,192.75);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_52.setTransform(257.75,192.75);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_53.setTransform(240.75,192.75);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_54.setTransform(223.75,192.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_55.setTransform(206.75,192.75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#231815").s().p("Ag0B3QgRgMgGgWQgHgVABgcQgBgaAHgVQAGgVARgNQAQgNAfAAQAZgBAOAKQAOAJAFARIAAhrIAeAAIAAECIgZAAIgFgfQgFAPgPAJQgPAKgXAAQgfAAgQgMgAgigXQgKAKgDAPQgDAPAAATQAAATADAQQADAQALAJQALAKAVAAQAVAAAMgJQANgIAEgPQAFgQAAgWQAAgVgFgQQgEgPgNgJQgMgJgVAAQgWAAgLALg");
	this.shape_56.setTransform(178.1982,174.25);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#231815").s().p("AAtBeIAAhzQAAgPgCgKQgDgKgIgFQgHgFgPAAQgKgBgLADQgLADgJAHQgIAJgGAPIAAB8IgdAAIAAi3IAdAAIAAAaQAGgMAKgGQAJgHAMgCQAKgCALAAQAYAAANAHQAOAIAGANQAFANAAATIAAB+g");
	this.shape_57.setTransform(157.4771,177.65);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#231815").s().p("AgJBfQgcAAgRgOQgTgOgJgdIgDgPIgBgNIAAgKQAAgcAMgVQALgWAYgPIASgGQAJgCAIAAIAEAAQAeAAAVAhIAAgIIAAgBIABAAIAcAAIAAAAIABABIAABhQgBARACAQQACARACAOIgBABIgcAAQgBAAgBgIIgDgVIgGAJIgIAJQgIAGgKAEQgKADgLAAgAgfg6QgOAKgIAVIgEANIgBAOIAAAHQAAASAHAPQAHAOANALIANAEIAMABIAGAAQA0AAAAhAIAAgKQgBgagIgRQgKgQgSgEIgGgBIgFAAIgBAAQgTAAgPAKg");
	this.shape_58.setTransform(135.75,177.85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_59.setTransform(108.85,192.75);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_60.setTransform(91.85,192.75);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_61.setTransform(74.85,192.75);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_62.setTransform(57.85,192.75);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_63.setTransform(40.85,192.75);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_64.setTransform(23.85,192.75);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_65.setTransform(6.85,192.75);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#231815").s().p("AgdAtQAJgPAHgQQAHgOAFgQQADgPAAgNIAcAAQAAAPgFAQQgGAQgJAPQgIAPgHAMg");
	this.shape_66.setTransform(-16.35,187.175);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_67.setTransform(-29.15,192.75);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_68.setTransform(-46.15,192.75);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_69.setTransform(-63.15,192.75);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_70.setTransform(-80.15,192.75);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_71.setTransform(-97.15,192.75);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_72.setTransform(-114.15,192.75);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_73.setTransform(-131.15,192.75);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#231815").s().p("AgtBeIAAi3IAdAAIAAAhQAHgPAJgIQAIgIAMgDQALgCALAAIADAAIgBAaIgDAAQgMAAgMADQgLAEgIAJQgIAIgGAQIAAB4g");
	this.shape_74.setTransform(-153.65,177.65);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#231815").s().p("AgJBfQgbAAgTgOQgSgOgJgdIgCgPIgBgNIAAgKQAAgcALgVQALgWAYgPIASgGQAJgCAJAAIACAAQAfAAAVAhIAAgIIAAgBIABAAIAbAAIABAAIAAABIAABhQAAARACAQQACARACAOIgBABIgcAAQgBAAgCgIIgDgVIgGAJIgGAJQgJAGgKAEQgKADgLAAgAgfg6QgOAKgJAVIgDANIgBAOIAAAHQAAASAHAPQAHAOAOALIALAEIANABIAGAAQAzAAAAhAIAAgKQABgagKgRQgJgQgSgEIgGgBIgFAAIAAAAQgUAAgPAKg");
	this.shape_75.setTransform(-172.45,177.85);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#231815").s().p("AgmBXQgUgJgJgVQgKgVAAgkQAAgjAKgVQAJgVATgJQATgJAZABQAXAAAPAHQAOAHAIALQAIALADANQACAOAAAOIAAAJIgBALIh8AIQAAAUAGANQAFANANAGQANAGAVAAQAPAAAQgDQAQgDALgGIAAAbQgGADgKACIgVAFQgNABgNAAQgaAAgSgIgAgbg/QgLAHgEAOQgFANAAATIBhgHQAAgOgDgMQgDgMgKgIQgJgHgUAAQgUAAgMAHg");
	this.shape_76.setTransform(-191.9,177.8237);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#231815").s().p("AAuBcIgtiWIgBAAIgvCWIgkAAIgxi3IAcAAIAnCZIADAAIAtiZIAiAAIAvCZIABAAIAniZIAeAAIgzC3g");
	this.shape_77.setTransform(-215.8,177.825);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#231815").s().p("AgPB2IAAjrIAfAAIAADrg");
	this.shape_78.setTransform(-243.3,175.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#231815").s().p("AAAB3QgLAAgFgEQgFgEAAgOQAAgNAFgEQAFgEALAAQALAAAFAEQAGAEAAANQAAAOgGAEQgEAEgKAAIgCAAgAgKAwIgGimIAhAAIgFCmg");
	this.shape_79.setTransform(5.225,124.3028);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#231815").s().p("AgTB5QgKgJAAgVIAAjcIAdAAIAADVQAAANADAFQAEAEAJAAIAHAAIAHgCIAAAYIgJACIgLAAQgSAAgLgJg");
	this.shape_80.setTransform(-4.45,123.175);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#231815").s().p("AgtBXQgTgJgKgVQgKgVAAgkQAAgjAKgVQAKgVATgJQATgJAaABQAcgBASAJQATAJAKAVQAKAVAAAjQAAAkgKAVQgKAVgTAJQgSAIgcAAQgaAAgTgIgAAgBAQAMgGAFgQQAFgPAAgbQAAgagGgPQgEgQgMgGQgMgHgUAAQgUAAgLAHQgMAGgFAQQgFAPABAaQAAAbAEAPQAGAQALAGQANAHASgBQAVABALgHg");
	this.shape_81.setTransform(-21.05,126.8237);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#231815").s().p("AgtBXQgTgJgKgVQgKgVAAgkQAAgjAKgVQAKgVATgJQATgJAaABQAcgBASAJQATAJAKAVQAKAVAAAjQAAAkgKAVQgKAVgTAJQgSAIgcAAQgaAAgTgIgAAhBAQALgGAFgQQAFgPgBgbQABgagFgPQgGgQgLgGQgMgHgUAAQgUAAgLAHQgMAGgFAQQgFAPAAAaQABAbAFAPQAEAQANAGQALAHATgBQAUABANgHg");
	this.shape_82.setTransform(-42.05,126.8237);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#231815").s().p("AAtCBIAAh0QABgNgDgKQgDgKgIgFQgHgFgPgBQgKAAgLADQgLACgJAIQgIAIgGAPIAAB8IgdAAIAAkBIAdAAIAABlQAGgMAKgGQAJgHAMgCQAKgDALAAQAYAAANAIQAOAIAGANQAFANAAARIAAB/g");
	this.shape_83.setTransform(-62.9729,123.075);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#231815").s().p("AgbBXQgTgJgKgVQgKgVAAgkQAAgjAKgVQAKgVATgJQATgJAaABQAQAAAMACQANACAHADIAAAaQgKgDgMgDQgLgCgOAAQgTAAgMAGQgMAHgFAPQgFAQAAAZQgBAbAGAPQAFAPAMAGQAMAHATgBQANAAANgBQAMgCAKgEIAAAaIgNAEIgSACIgSABQgaAAgTgIg");
	this.shape_84.setTransform(-81.775,126.8237);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#231815").s().p("AgbBdIgTgCQgJAAgGgCIAAgZIAQADIATADIASABQAUAAALgHQALgFAAgQQAAgLgDgGQgDgHgJgDQgJgEgQgEQgUgFgMgFQgLgHgEgJQgFgLAAgPQAAgWARgOQARgNAfgBQAOAAANACQANACAHADIgCAZQgJgDgLgDQgLgBgNgBQgTAAgJAGQgKAGAAAPQAAAJADAGQADAFAHADQAIADANADQAVAEANAHQAMAGAGAKQAGALgBARQAAAcgSANQgSAMggAAIgUgBg");
	this.shape_85.setTransform(-98.5981,126.75);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#231815").s().p("AgsBdIAAi2IAcAAIAAAhQAHgPAJgIQAJgIALgDQALgDALAAIAEAAIgBAbIgFAAQgMAAgKAEQgMACgHAJQgJAKgGAQIAAB2g");
	this.shape_86.setTransform(-120.75,126.65);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#231815").s().p("AgtBXQgTgJgKgVQgKgVAAgkQAAgjAKgVQAKgVATgJQATgJAaABQAbgBATAJQATAJAKAVQAKAVAAAjQAAAkgKAVQgKAVgTAJQgTAIgbAAQgaAAgTgIgAAhBAQALgGAFgQQAFgPgBgbQABgagFgPQgGgQgLgGQgMgHgUAAQgUAAgLAHQgMAGgFAQQgFAPAAAaQAAAbAGAPQAEAQANAGQALAHATgBQAUABANgHg");
	this.shape_87.setTransform(-138.9,126.8237);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#231815").s().p("AgZCCIAAieIgeAAIAAgZIAeAAIAAgCQAAgfAIgQQAIgQAMgGQAOgFATAAIAKABIAKABIAAAYIgJgCIgLAAQgNAAgGAEQgIAFgCALQgEAMAAAUIArAAIAAAZIgrAAIAACeg");
	this.shape_88.setTransform(-154.95,123);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#231815").s().p("AgmBXQgUgJgJgVQgKgVAAgkQAAgjAKgVQAJgVATgJQATgJAZABQAXAAAPAHQAOAHAIALQAIALADANQACAOAAAOIAAAJIgBALIh8AIQAAAUAGANQAFANANAGQANAGAVAAQAPAAAQgDQAQgDALgGIAAAbQgGADgKACIgVAFQgNABgNAAQgaAAgSgIgAgbg/QgLAHgEAOQgFANAAATIBhgHQAAgOgDgMQgDgMgKgIQgJgHgUAAQgUAAgMAHg");
	this.shape_89.setTransform(-179.75,126.8237);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#231815").s().p("ABhBeIAAhzQAAgWgHgLQgIgMgUAAQgLAAgJADQgKACgGAHQgIAHgEANIAAACIAAB+IgcAAIAAhzQABgWgIgLQgHgMgUAAQgLAAgKACQgIADgHAHQgIAHgFAOIAAB/IgdAAIAAi3IAdAAIAAAYQAJgQAOgGQAOgGAQABQAXAAAMAIQAMAIAGAOQAGgMAJgHQAJgGALgDQALgCALAAQAWAAANAHQANAIAGAOQAGANAAASIAAB+g");
	this.shape_90.setTransform(-205.15,126.6481);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#231815").s().p("AgOB+IAAi2IAcAAIAAC2gAAAhaQgIAAgFgDQgEgDAAgLQAAgLAEgEQAFgDAIAAQAJAAAEADQAFAEAAALQAAALgFADQgDADgIAAIgCAAg");
	this.shape_91.setTransform(-225.425,123.3969);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#231815").s().p("AgOB2IAAjQIhFAAIAAgbICnAAIAAAbIhFAAIAADQg");
	this.shape_92.setTransform(-238.975,124.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#231815").s().p("AgMAUQgEgBgDgFQgCgFAAgJQAAgMAFgFQAFgEALAAQAMAAAFAEQAFAFAAAMQAAAJgCAFQgDAFgEABQgFABgIABQgHgBgFgBg");
	this.shape_93.setTransform(431.825,-37.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#231815").s().p("AhCBlQAQAAAKgFQALgFAGgJQAHgKAEgPIhJi2IAfAAIA3CYIACAAIA2iYIAdAAIhCCxQgIAXgKAQQgJARgQAJQgQAJgbAAg");
	this.shape_94.setTransform(417.775,-41.725);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#231815").s().p("AgJBfQgcAAgRgPQgTgOgJgcIgDgPIgBgNIAAgKQAAgcAMgVQALgWAYgOIASgHQAJgCAIAAIAEAAQAeAAAVAhIAAgIIAAgBIABgBIAcAAIAAABIABABIAABgQgBASACAQQACAQACAPIgBABIgcAAQgBAAgBgHIgDgXIgGAKIgIAIQgIAHgKAEQgKADgLAAgAgfg5QgOAJgIAVIgEAOIgBANIAAAHQAAASAHAPQAHAOANALIANAEIAMABIAGAAQA0ABAAhBIAAgKQgBgbgIgQQgKgQgSgEIgGgBIgFAAIgBAAQgTAAgPALg");
	this.shape_95.setTransform(397.65,-45.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#231815").s().p("Ag0B3QgRgNgGgUQgHgWABgdQgBgZAHgVQAGgVARgNQAQgNAfAAQAZAAAOAJQAOAKAFAQIAAhrIAeAAIAAECIgZAAIgFgfQgFAPgPAKQgPAJgXAAQgfgBgQgLgAgigXQgKAJgDAQQgDAQAAARQAAAUADAQQADAQALAJQALAKAVAAQAVAAAMgJQANgIAEgPQAFgQAAgXQAAgVgFgPQgEgPgNgJQgMgJgVAAQgWAAgLALg");
	this.shape_96.setTransform(376.6982,-48.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#231815").s().p("AgtBXQgTgJgKgVQgKgVAAgkQAAgjAKgVQAKgVATgJQATgJAaABQAbgBATAJQATAJAKAVQAJAVABAjQgBAkgJAVQgKAVgTAJQgTAIgbAAQgaAAgTgIgAAhBAQALgGAFgQQAFgPAAgbQAAgagGgPQgEgQgMgGQgMgHgUAAQgTAAgMAHQgMAGgFAQQgFAPAAAaQAAAbAGAPQAFAQALAGQAMAHATgBQAVABAMgHg");
	this.shape_97.setTransform(355.9,-45.1263);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#231815").s().p("AgBBuQgMgFgFgMQgGgNABgYIAAhmIgbAAIAAgYIAbAAIAAgsIAcAAIAAAsIAtAAIAAAYIgtAAIAABkQAAAPACAHQACAIAGADQAFADAMAAIAKgBIAJgBIAAAZIgKABIgKAAIgEABQgSAAgKgFg");
	this.shape_98.setTransform(339.65,-47.1977);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_99.setTransform(316.75,-30.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_100.setTransform(299.75,-30.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_101.setTransform(282.75,-30.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_102.setTransform(265.75,-30.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_103.setTransform(248.75,-30.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_104.setTransform(231.75,-30.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_105.setTransform(214.75,-30.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#231815").s().p("Ag0B3QgRgNgGgUQgHgWABgdQgBgZAHgVQAGgVARgNQAQgNAfAAQAZAAAOAJQAOAKAFAQIAAhrIAeAAIAAECIgZAAIgFgfQgFAPgPAKQgPAJgXAAQgfgBgQgLgAgigXQgKAJgDAQQgDAQAAARQAAAUADAQQADAQALAJQALAKAVAAQAVAAAMgJQANgIAEgPQAFgQAAgXQAAgVgFgPQgEgPgNgJQgMgJgVAAQgWAAgLALg");
	this.shape_106.setTransform(186.1982,-48.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#231815").s().p("AAtBeIAAhzQAAgPgCgKQgDgJgIgGQgHgFgPAAQgKAAgLACQgLADgJAHQgIAJgGAQIAAB7IgdAAIAAi3IAdAAIAAAaQAGgMAKgGQAJgHAMgCQAKgDALABQAYAAANAHQAOAIAGANQAFAOAAARIAAB/g");
	this.shape_107.setTransform(165.4771,-45.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#231815").s().p("AgJBfQgcAAgRgPQgTgOgJgcIgDgPIgBgNIAAgKQAAgcAMgVQAMgWAXgOIASgHQAJgCAIAAIAEAAQAeAAAVAhIAAgIIAAgBIABgBIAcAAIAAABIABABIAABgQAAASABAQQABAQADAPIgBABIgcAAQgBAAgBgHIgEgXIgFAKIgIAIQgIAHgKAEQgKADgLAAgAgfg5QgOAJgIAVIgEAOIgBANIAAAHQAAASAHAPQAHAOANALIANAEIAMABIAGAAQA0ABgBhBIAAgKQAAgbgJgQQgJgQgSgEIgGgBIgFAAIgBAAQgTAAgPALg");
	this.shape_108.setTransform(143.75,-45.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_109.setTransform(116.85,-30.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_110.setTransform(99.85,-30.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_111.setTransform(82.85,-30.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_112.setTransform(65.85,-30.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_113.setTransform(48.85,-30.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_114.setTransform(31.85,-30.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_115.setTransform(14.85,-30.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#231815").s().p("AgdAtQAJgPAHgQQAIgOADgQQAEgPAAgNIAcAAQAAAPgGAQQgFAQgIAPQgJAPgHAMg");
	this.shape_116.setTransform(-8.35,-35.775);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_117.setTransform(-21.15,-30.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_118.setTransform(-38.15,-30.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_119.setTransform(-55.15,-30.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_120.setTransform(-72.15,-30.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_121.setTransform(-89.15,-30.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_122.setTransform(-106.15,-30.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#231815").s().p("AhUAMIAAgXICpAAIAAAXg");
	this.shape_123.setTransform(-123.15,-30.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#231815").s().p("AgtBeIAAi3IAdAAIAAAiQAHgQAJgIQAIgIAMgDQALgDALABIADAAIgBAaIgDAAQgMAAgMADQgKAEgIAIQgJAKgGAPIAAB4g");
	this.shape_124.setTransform(-145.65,-45.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#231815").s().p("AgJBfQgcAAgSgPQgSgOgJgcIgCgPIgBgNIAAgKQAAgcALgVQAMgWAXgOIATgHQAIgCAJAAIACAAQAfAAAVAhIAAgIIAAgBIABgBIAbAAIABABIAAABIAABgQABASABAQQACAQADAPIgCABIgcAAQgBAAgCgHIgDgXIgGAKIgGAIQgJAHgKAEQgKADgLAAgAgfg5QgOAJgJAVIgDAOIgBANIAAAHQAAASAHAPQAHAOAOALIALAEIANABIAGAAQAzABAAhBIAAgKQABgbgKgQQgJgQgSgEIgGgBIgFAAIAAAAQgUAAgPALg");
	this.shape_125.setTransform(-164.45,-45.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#231815").s().p("AgmBXQgUgJgJgVQgLgVAAgkQAAgjALgVQAJgVATgJQATgJAZABQAXAAAPAHQAOAHAIALQAIALADANQADAOAAAOIgBAJIgBALIh8AIQAAAUAFANQAGANANAGQANAGAVAAQAPAAAQgDQAPgDAMgGIAAAbQgGADgKACIgVAFQgNABgMAAQgbAAgSgIgAgbg/QgLAHgEAOQgEANgBATIBhgHQAAgOgDgMQgDgMgKgIQgJgHgUAAQgUAAgMAHg");
	this.shape_126.setTransform(-183.9,-45.1263);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#231815").s().p("AAuBcIgtiWIgCAAIguCWIgkAAIgxi3IAcAAIAnCZIADAAIAtiZIAhAAIAwCZIACAAIAmiZIAdAAIgyC3g");
	this.shape_127.setTransform(-207.8,-45.125);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#231815").s().p("AgPB2IAAjrIAfAAIAADrg");
	this.shape_128.setTransform(-235.3,-47.75);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#231815").s().p("AgMAUQgEgCgDgEQgCgFAAgJQAAgNAFgEQAFgDALAAQAMAAAFADQAFAEAAANQAAAJgCAFQgDAEgEACQgFABgIAAQgHAAgFgBg");
	this.shape_129.setTransform(238.375,-94.45);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#231815").s().p("AgTB5QgKgJAAgVIAAjcIAdAAIAADVQAAANADAFQAEAEAJAAIAHAAIAHgCIAAAYIgIACIgMAAQgSAAgLgJg");
	this.shape_130.setTransform(229.65,-105.325);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#231815").s().p("AgtBXQgTgJgKgVQgKgVAAgkQAAgjAKgVQAKgVATgJQATgJAaABQAbgBATAJQATAJAKAVQAJAVABAjQgBAkgJAVQgKAVgTAJQgTAIgbAAQgaAAgTgIgAAgBAQAMgGAFgQQAFgPAAgbQAAgagGgPQgEgQgMgGQgMgHgUAAQgTAAgMAHQgMAGgFAQQgFAPABAaQAAAbAEAPQAGAQALAGQANAHASgBQAVABALgHg");
	this.shape_131.setTransform(213.05,-101.6763);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#231815").s().p("AgtBXQgTgJgKgVQgKgVAAgkQAAgjAKgVQAKgVATgJQATgJAaABQAcgBASAJQATAJAKAVQAJAVABAjQgBAkgJAVQgKAVgTAJQgSAIgcAAQgaAAgTgIgAAhBAQALgGAFgQQAFgPgBgbQABgagFgPQgGgQgLgGQgMgHgUAAQgUAAgLAHQgMAGgFAQQgFAPAAAaQABAbAEAPQAFAQANAGQALAHATgBQAUABANgHg");
	this.shape_132.setTransform(192.05,-101.6763);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#231815").s().p("AAtCBIAAh0QABgNgDgKQgDgKgIgFQgHgFgPgBQgKAAgLADQgLACgJAIQgIAIgGAPIAAB8IgdAAIAAkBIAdAAIAABlQAGgMAKgGQAJgHAMgCQAKgDALAAQAYAAANAIQAOAIAGANQAFANAAARIAAB/g");
	this.shape_133.setTransform(171.1271,-105.425);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#231815").s().p("AgbBXQgTgJgKgVQgKgVAAgkQAAgjAKgVQAKgVATgJQATgJAaABQAQAAAMACQANACAHADIAAAaQgKgDgMgDQgLgCgOAAQgTAAgMAGQgMAHgFAPQgFAQAAAZQgBAbAGAPQAFAPAMAGQAMAHATgBQANAAANgBQAMgCAKgEIAAAaIgNAEIgSACIgSABQgaAAgTgIg");
	this.shape_134.setTransform(152.325,-101.6763);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#231815").s().p("AgbBdIgTgCQgJgBgGgBIAAgaIAQAEIATADIASABQAUAAALgHQALgFAAgQQAAgLgDgGQgDgHgJgDQgJgEgQgEQgUgEgMgGQgLgGgEgKQgFgKAAgQQAAgWARgOQARgNAfgBQAOAAANACQANACAHACIgCAaQgJgEgLgCQgLgCgNAAQgTAAgJAGQgKAFAAAQQAAAJADAGQADAFAHADQAIADANADQAVAFANAGQAMAGAGAKQAGALgBASQAAAbgSAMQgSANggAAIgUgBg");
	this.shape_135.setTransform(135.5019,-101.75);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#231815").s().p("AgsBdIAAi2IAcAAIAAAiQAHgQAJgIQAJgIALgDQALgDALAAIAEAAIgBAbIgFAAQgLAAgLAEQgMACgHAJQgJAKgGAQIAAB2g");
	this.shape_136.setTransform(113.35,-101.85);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#231815").s().p("AgtBXQgTgJgKgVQgKgVAAgkQAAgjAKgVQAKgVATgJQATgJAaABQAcgBASAJQATAJAKAVQAKAVAAAjQAAAkgKAVQgKAVgTAJQgSAIgcAAQgaAAgTgIgAAhBAQALgGAFgQQAFgPgBgbQABgagFgPQgGgQgLgGQgMgHgUAAQgUAAgLAHQgMAGgFAQQgFAPAAAaQABAbAFAPQAEAQANAGQALAHATgBQAUABANgHg");
	this.shape_137.setTransform(95.2,-101.6763);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#231815").s().p("AgZCCIAAifIgeAAIAAgYIAeAAIAAgCQABgeAHgRQAHgQANgGQAOgFATAAIAKABIAKABIAAAYIgJgCIgLAAQgMAAgHAEQgIAFgCALQgEAMAAAUIArAAIAAAYIgrAAIAACfg");
	this.shape_138.setTransform(79.15,-105.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#231815").s().p("AhCBlQAQAAAKgFQALgFAGgJQAHgKAEgPIhJi2IAfAAIA3CYIACAAIA2iYIAdAAIhCCxQgIAXgKAQQgJARgQAJQgQAJgbAAg");
	this.shape_139.setTransform(55.225,-98.275);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#231815").s().p("Ag0B2QgRgMgGgUQgHgWABgdQgBgZAHgUQAGgWARgNQAQgNAfgBQAZAAAOAKQAOAKAFAQIAAhrIAeAAIAAEBIgZAAIgFgdQgFAOgPAKQgPAIgXABQgfgBgQgMgAgigYQgKALgDAOQgDAQAAASQAAAUADAQQADAQALAKQALAJAVAAQAVAAAMgIQANgJAEgQQAFgPAAgXQAAgVgFgOQgEgRgNgIQgMgJgVAAQgWABgLAJg");
	this.shape_140.setTransform(34.9482,-105.25);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#231815").s().p("AgJBfQgbAAgTgPQgSgOgJgdIgDgOIAAgNIAAgKQAAgcALgWQAMgVAXgPIASgGQAJgCAJAAIACAAQAfAAAVAhIAAgIIAAgBIABgBIAbAAIABABIAAABIAABgQAAASACARQABAQADAOIgBABIgcAAQgBAAgBgHIgEgXIgFAKIgHAIQgJAHgKADQgKAEgLAAgAgfg5QgOAJgJAVIgDANIgBAOIAAAHQAAASAHAOQAHAPANALIAMAFIANABIAGAAQAzAAAAhAIAAgLQABgbgKgPQgJgQgSgGIgGAAIgFAAIAAAAQgUAAgPALg");
	this.shape_141.setTransform(13.5,-101.65);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#231815").s().p("AgnBXQgSgJgKgVQgKgVAAgkQAAgjAKgVQAKgVASgJQASgJAaABQAXAAAPAHQAOAHAIALQAIALADANQACAOAAAOIAAAJIgBALIh8AIQAAAUAGANQAFANANAGQANAGAVAAQAPAAAQgDQAPgDALgGIAAAbQgFADgKACIgVAFQgMABgOAAQgaAAgTgIgAgbg/QgKAHgFAOQgEANgBATIBhgHQAAgOgDgMQgDgMgKgIQgJgHgUAAQgUAAgMAHg");
	this.shape_142.setTransform(-5.95,-101.6763);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#231815").s().p("AgsBdIAAi2IAdAAIAAAiQAFgQAKgIQAIgIAMgDQALgDALAAIAEAAIgBAbIgFAAQgMAAgKAEQgLACgJAJQgIAKgFAQIAAB2g");
	this.shape_143.setTransform(-21.05,-101.85);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#231815").s().p("AgBBuQgMgFgFgMQgGgNABgYIAAhmIgbAAIAAgYIAbAAIAAgsIAcAAIAAAsIAtAAIAAAYIgtAAIAABkQAAAPACAHQACAIAFADQAHADAKAAIALgBIAJgBIAAAZIgKABIgKAAIgEABQgSAAgKgFg");
	this.shape_144.setTransform(-43.2,-103.7477);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#231815").s().p("AgnBXQgSgJgLgVQgKgVAAgkQAAgjAKgVQALgVASgJQASgJAaABQAXAAAPAHQAOAHAIALQAIALACANQADAOABAOIgBAJIgCALIh7AIQAAAUAFANQAGANANAGQANAGAVAAQAQAAAPgDQAQgDAKgGIAAAbQgFADgJACIgWAFQgMABgNAAQgaAAgUgIgAgag/QgMAHgEAOQgFANAAATIBggHQABgOgDgMQgDgMgKgIQgKgHgTAAQgUAAgLAHg");
	this.shape_145.setTransform(-58.65,-101.6763);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#231815").s().p("AgeB+IgVgDIAAgZQALACALACIAXAAQAeAAAPgOQAOgNAAggIAAgSQgFARgOAIQgOAKgZgBQgfABgQgMQgRgMgGgVQgHgUABgcQgBgaAHgVQAGgVARgMQAQgNAfgBQARABAMAEQAMAFAHAJQAHAJADALIAAgjIAeAAIAACqQAAAmgWAVQgWAVgtABQgMgBgMgBgAgihcQgKAJgDAQQgDAQAAASQAAAUADAOQADAQALAIQALAKAVAAQAVAAAMgIQANgIAEgQQAFgOAAgWQAAgVgFgPQgEgQgNgJQgMgIgVAAQgWABgLAJg");
	this.shape_146.setTransform(-79.8018,-98.45);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#231815").s().p("AgtBXQgTgJgKgVQgKgVAAgkQAAgjAKgVQAKgVATgJQATgJAaABQAcgBASAJQATAJAKAVQAJAVABAjQgBAkgJAVQgKAVgTAJQgSAIgcAAQgaAAgTgIgAAgBAQAMgGAFgQQAFgPgBgbQABgagFgPQgGgQgLgGQgMgHgUAAQgUAAgLAHQgMAGgFAQQgFAPABAaQAAAbAEAPQAFAQAMAGQANAHASgBQAVABALgHg");
	this.shape_147.setTransform(-109.35,-101.6763);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#231815").s().p("AAABuQgMgFgGgMQgFgNAAgYIAAhmIgcAAIAAgYIAcAAIAAgsIAcAAIAAAsIAuAAIAAAYIguAAIAABkQAAAPACAHQACAIAGADQAGADAKAAIAMgBIAJgBIAAAZIgKABIgLAAIgEABQgSAAgJgFg");
	this.shape_148.setTransform(-125.6,-103.7477);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#231815").s().p("Ag0B2QgRgMgGgUQgHgWABgdQgBgZAHgUQAGgWARgNQAQgNAfgBQAZAAAOAKQAOAKAFAQIAAhrIAeAAIAAEBIgZAAIgFgdQgFAOgPAKQgPAIgXABQgfgBgQgMgAgigYQgKALgDAOQgDAQAAASQAAAUADAQQADAQALAKQALAJAVAAQAVAAAMgIQANgJAEgQQAFgPAAgXQAAgVgFgOQgEgRgNgIQgMgJgVAAQgWABgLAJg");
	this.shape_149.setTransform(-151.3018,-105.25);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#231815").s().p("AgmBXQgUgJgKgVQgJgVgBgkQABgjAJgVQALgVASgJQASgJAaABQAXAAAPAHQAOAHAIALQAIALACANQAEAOAAAOIgBAJIgBALIh8AIQAAAUAFANQAGANANAGQANAGAVAAQAPAAAQgDQAPgDAMgGIAAAbQgGADgKACIgVAFQgMABgNAAQgbAAgSgIgAgbg/QgLAHgEAOQgFANAAATIBhgHQAAgOgDgMQgDgMgKgIQgJgHgUAAQgUAAgMAHg");
	this.shape_150.setTransform(-171.4,-101.6763);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#231815").s().p("AgnBXQgSgJgLgVQgKgVAAgkQAAgjAKgVQAKgVATgJQASgJAaABQAXAAAPAHQAOAHAIALQAIALACANQADAOAAAOIAAAJIgCALIh7AIQAAAUAFANQAGANANAGQANAGAVAAQAQAAAPgDQAQgDAKgGIAAAbQgFADgJACIgWAFQgNABgNAAQgZAAgUgIgAgag/QgLAHgFAOQgEANgBATIBggHQABgOgDgMQgDgMgKgIQgKgHgTAAQgUAAgLAHg");
	this.shape_151.setTransform(-191.05,-101.6763);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#231815").s().p("AAtBdIAAhzQAAgOgCgKQgDgKgIgFQgHgFgPgBQgKAAgLADQgLACgJAJQgIAHgGAQIAAB7IgdAAIAAi2IAdAAIAAAaQAGgLAKgHQAJgHAMgCQAKgDALAAQAYAAANAIQAOAIAGAOQAFANAAARIAAB+g");
	this.shape_152.setTransform(-211.3229,-101.85);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#231815").s().p("AgPB2IAAjrIAfAAIAADrg");
	this.shape_153.setTransform(-235.3,-104.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#231815").s().p("AAAB3QgLAAgFgEQgFgEAAgOQAAgNAFgEQAFgEALAAQALAAAFAEQAGAEAAANQAAAOgGAEQgEAEgKAAIgCAAgAgKAwIgGimIAhAAIgFCmg");
	this.shape_154.setTransform(-12.975,-160.6972);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#231815").s().p("AgMAUQgEgBgDgFQgCgFAAgJQAAgMAFgFQAFgDALAAQAMAAAFADQAFAFAAAMQAAAJgCAFQgDAFgEABQgFACgIAAQgHAAgFgCg");
	this.shape_155.setTransform(-24.175,-150.95);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#231815").s().p("ABhBeIAAhzQAAgWgHgLQgIgMgUAAQgLAAgJADQgJACgIAHQgHAHgEANIAAACIAAB+IgcAAIAAhzQABgWgIgLQgHgMgUAAQgLAAgKACQgIADgHAHQgIAHgFAOIAAB/IgdAAIAAi3IAdAAIAAAYQAJgQAOgGQAOgGAQABQAXAAAMAIQAMAIAGAOQAGgMAJgHQAJgGALgDQALgCAMAAQAUAAAOAHQANAIAGAOQAGANAAASIAAB+g");
	this.shape_156.setTransform(-44.85,-158.3519);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#231815").s().p("AgMAUQgEgBgDgFQgCgFAAgJQAAgMAFgFQAFgDALAAQAMAAAFADQAFAFAAAMQAAAJgCAFQgDAFgEABQgFACgIAAQgHAAgFgCg");
	this.shape_157.setTransform(-65.725,-150.95);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#231815").s().p("AgJBfQgbAAgTgPQgSgNgJgeIgCgOIgBgNIAAgKQAAgcALgVQALgWAYgOIASgHQAJgCAJAAIACAAQAfAAAVAhIAAgIIAAgBIABgBIAbAAIABABIAAABIAABgQAAASACAQQACAQACAPIgBABIgcAAQgBAAgCgHIgDgXIgGAKIgGAIQgJAHgKADQgKAEgLAAgAgfg5QgOAKgJAUIgDAOIgBANIAAAHQAAASAHAPQAHAOAOALIALAEIANABIAGAAQAzABAAhBIAAgKQABgbgKgQQgJgPgSgFIgGgBIgFAAIAAAAQgUAAgPALg");
	this.shape_158.setTransform(-82,-158.15);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#231815").s().p("AgxB2IBljQIiBAAIAAgbICbAAIAAAeIhgDNg");
	this.shape_159.setTransform(-110.325,-160.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#231815").s().p("AgbBeIgTgDQgJgBgGgCIAAgZIAQAEIATADIASABQAUAAALgHQALgFAAgQQAAgLgDgGQgDgGgJgEQgJgEgQgEQgUgFgMgFQgLgGgEgLQgFgKAAgPQAAgWARgOQARgNAfAAQAOAAANABQANACAHACIgCAZQgJgCgLgCQgLgDgNAAQgTAAgJAGQgKAGAAAPQAAAJADAGQADAEAHAEQAIADANADQAVAEANAHQAMAGAGALQAGAKgBASQAAAbgSAMQgSAOggAAIgUgBg");
	this.shape_160.setTransform(-136.8481,-158.25);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#231815").s().p("AgXAsIAKgdIAGgdQADgPAAgOIAcAAQAAANgEAPQgEAPgGAQQgFAPgGANg");
	this.shape_161.setTransform(-149.625,-170.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#231815").s().p("AgBBuQgMgFgFgMQgGgNABgYIAAhmIgbAAIAAgYIAbAAIAAgsIAcAAIAAAsIAuAAIAAAYIguAAIAABkQAAAPACAHQACAIAGADQAFADAMAAIAKgBIAJgBIAAAZIgJABIgLAAIgEABQgSAAgKgFg");
	this.shape_162.setTransform(-159.95,-160.2477);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#231815").s().p("AgOB+IAAi2IAcAAIAAC2gAAAhaQgIAAgFgDQgEgDAAgLQAAgLAEgEQAFgDAIAAQAJAAAEADQAFAEAAALQAAALgFADQgDADgIAAIgCAAg");
	this.shape_163.setTransform(-170.125,-161.6031);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#231815").s().p("AgdAtQAJgPAIgQQAGgOAFgQQADgPAAgNIAcAAQAAAPgFAQQgGAQgJAPQgHAPgIAMg");
	this.shape_164.setTransform(-189.4,-148.825);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#231815").s().p("AAtCBIAAh0QABgNgDgKQgDgKgIgFQgHgFgPgBQgKAAgLADQgLACgJAIQgIAIgGAPIAAB8IgdAAIAAkBIAdAAIAABlQAGgMAKgGQAJgHAMgCQAKgDALAAQAYAAANAIQAOAIAGANQAFANAAARIAAB/g");
	this.shape_165.setTransform(-204.1229,-161.925);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#231815").s().p("AAAB5QggABgXgLQgXgLgLgaQgMgbAAgvQAAguAMgbQALgaAXgLQAXgLAgAAQAhAAAXALQAXALALAaQAMAbAAAuQAAAvgMAbQgLAagXALQgWALgfAAIgDgBgAgrhUQgPAKgFAVQgGAVAAAgQAAAhAGAVQAFAVAPAKQAQAKAbAAQAcAAAQgKQAPgKAGgVQAFgVAAghQAAgggFgVQgGgVgPgKQgQgLgcAAQgbAAgQALg");
	this.shape_166.setTransform(-227.325,-160.7989);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(60));

	// 图层_1
	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#00A8F1").s().p("Ag4BcQgJAAgDgDQgCgDAFgLQAFgKAFgDQAFgDAJAAQAJAAACADQADADgFAKQgFALgFADQgEADgHAAIgDAAgAgqAmIAFgLQAEgJAIgJQAJgJASgKIARgLIAKgKQAFgFADgHQAFgLgBgGQAAgGgHgCQgGgDgNABIgTABQgLACgJACIAKgVIAQgDQALgCAOAAQATAAAKAEQALAEACAKQABAKgIARQgGAOgIAJQgGAIgJAGIgTALIgQAKQgGAEgEAEQgEAFgCAGIgEAHg");
	this.shape_167.setTransform(413.2561,-287.4969);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#00A8F1").s().p("AhdBNQAMAAALgEQAJgDAIgHQAJgIAIgLIAHiLIAYAAIgKBzIACAAIBdhzIAWAAIhvCHQgOARgNANQgOANgQAGQgOAHgVAAg");
	this.shape_168.setTransform(398.55,-282.875);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#00A8F1").s().p("AgsBJQgVAAgJgLQgJgMADgVIADgLIAEgKIAEgIQAJgVARgQQAQgRAXgLIAPgFIAOgBIACAAQAYAAAFAZIADgGIAAgBIABAAIAVAAIAAAAIABABIgiBJIgLAaIgHAYIgCAAIgVAAQgBAAACgGIAFgRIgIAIIgHAHQgJAEgJADQgIACgKABgAgHgsQgPAIgOAPIgHALQgDAFgCAFIgDAFQgGAOAAALQAAAMAHAHQADADAFABIAJABIAFAAQAmAAAXgxIAEgIQAJgUgCgMQgBgNgMgEIgFAAIgDAAIgBAAQgQAAgNAIg");
	this.shape_169.setTransform(384.0375,-285.45);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#00A8F1").s().p("AhaBbQgJgKADgPQACgRAKgWQAJgTAMgQQAMgQASgKQARgKAWgBQAUAAAHAIQAIAHgBAMIAkhRIAWAAIhZDEIgRAAIAHgWQgJAKgPAIQgPAHgTAAQgXAAgIgJgAgbgSQgLAIgIALQgIAMgGAOQgHAPgDAMQgDANAFAGQAFAIAQAAQARAAAMgGQAMgHAJgMQAJgMAHgRQAIgQACgLQABgMgGgHQgHgHgQAAQgQAAgMAIg");
	this.shape_170.setTransform(369.7875,-288.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#00A8F1").s().p("AgfBJQgWAAgLgHQgLgGgBgQQAAgQAMgcQANgbAPgQQAOgQASgGQAQgHAVAAQAVAAALAHQAMAGAAAQQAAAQgMAbQgNAcgOAQQgPAQgSAGQgPAHgTAAIgCAAgAADAxQALgFAJgMQAJgMAJgUQAKgTABgMQABgMgGgFQgHgFgPAAQgQAAgKAFQgMAFgIAMQgKAMgJATQgJAUgCAMQgBAMAHAFQAHAFAPAAQAQAAAKgFg");
	this.shape_171.setTransform(351.699,-285.4733);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#00A8F1").s().p("AguBUQgIgEAAgJQAAgKAJgSIAjhOIgUAAIAIgTIAVAAIAOghIAWAAIgPAhIAjAAIgJATIgjAAIghBNQgGAKAAAGQgCAGADACQAEADAIAAIAJgBIAGgBIgHATIgIABIgIAAIgDABQgOAAgGgEg");
	this.shape_172.setTransform(340.8,-287.0472);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#00A8F1").s().p("AgwBcQgGgHAIgQIBLinIAXAAIhJCiQgFAKABADQACAEAHAAIAGAAIAGgBIgJASIgHABIgIABQgQAAgEgIg");
	this.shape_173.setTransform(325.95,-288.25);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#00A8F1").s().p("AgfBJQgWAAgLgHQgLgGgBgQQAAgQAMgcQANgbAPgQQAOgQASgGQAQgHAVAAQAVAAALAHQAMAGAAAQQAAAQgMAbQgNAcgOAQQgPAQgSAGQgPAHgTAAIgCAAgAADAxQALgFAJgMQAJgMAJgUQAKgTABgMQABgMgGgFQgHgFgPAAQgQAAgKAFQgMAFgIAMQgKAMgJATQgJAUgCAMQgBAMAHAFQAHAFAPAAQAQAAAKgFg");
	this.shape_174.setTransform(312.749,-285.4733);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#00A8F1").s().p("AgfBJQgWAAgLgHQgLgGgBgQQAAgQAMgcQANgbAPgQQAOgQASgGQAQgHAVAAQAVAAALAHQAMAGAAAQQAAAQgMAbQgNAcgOAQQgPAQgSAGQgPAHgTAAIgCAAgAADAxQALgFAJgMQAJgMAJgUQAKgTABgMQABgMgGgFQgHgFgPAAQgQAAgKAFQgMAFgIAMQgKAMgJATQgJAUgCAMQgBAMAHAFQAHAFAPAAQAQAAAKgFg");
	this.shape_175.setTransform(296.699,-285.4733);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#00A8F1").s().p("AAJBjIAohZQAGgKABgIQABgHgEgEQgEgEgLAAQgJAAgJACQgJACgKAGQgIAGgJALIgrBfIgXAAIBYjFIAXAAIgiBNQAIgIAJgFQAKgFAJgCQAKgCAIAAQASAAAIAGQAIAFgBALQAAAKgGANIgsBhg");
	this.shape_176.setTransform(280.0516,-288.325);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#00A8F1").s().p("Ag7BCQgLgGgBgQQAAgQAMgcQANgbAPgQQAOgQARgGQARgHAVAAQAMAAAJACQAIABAFADIgJAUIgOgFQgIgBgLAAQgPAAgMAEQgKAFgKAMQgJAMgJATQgJAVgCALQgBAMAHAEQAHAFAQAAIATgBQAKgCAJgDIgJAVIgLACIgOACIgNABIgDAAQgUAAgKgHg");
	this.shape_177.setTransform(267.249,-285.4733);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#00A8F1").s().p("AgxBIIgPgCIgKgCIAJgTIALACIAOACIANABQAQAAAKgFQAKgEAFgMQAEgJgBgEQABgFgGgDQgFgDgLgDQgOgDgGgEQgHgFAAgIQAAgIAFgLQAIgSASgKQAQgKAZAAQAKAAAKABQAJABAFACIgKATIgOgEQgIgBgKAAQgOAAgKAEQgJAFgFALQgDAHAAAEQABAEAFADQADACAKADQAPADAHAFQAIAEAAAIQABAIgHAOQgJAVgTAJQgQAKgaAAIgOAAg");
	this.shape_178.setTransform(253.25,-285.525);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#00A8F1").s().p("AgvBUQgHgEAAgJQAAgKAJgSIAjhOIgVAAIAJgTIAVAAIAOghIAWAAIgPAhIAjAAIgIATIgjAAIgjBNQgEAKgCAGQgBAGAEACQADADAJAAIAIgBIAHgBIgIATIgIABIgIAAIgDABQgOAAgHgEg");
	this.shape_179.setTransform(237.7,-287.0472);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#00A8F1").s().p("AgsBJQgVAAgJgLQgJgMADgVIADgLIAEgKIAEgIQAJgVARgQQAQgRAXgLIAPgFIAOgBIACAAQAYAAAFAZIADgGIAAgBIABAAIAVAAIAAAAIABABIgiBJIgLAaIgHAYIgCAAIgVAAQgBAAACgGIAFgRIgIAIIgHAHQgJAEgJADQgIACgKABgAgHgsQgPAIgOAPIgHALQgDAFgCAFIgDAFQgGAOAAALQAAAMAHAHQADADAFABIAJABIAFAAQAmAAAXgxIAEgIQAJgUgCgMQgBgNgMgEIgFAAIgDAAIgBAAQgQAAgNAIg");
	this.shape_180.setTransform(223.7375,-285.45);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#00A8F1").s().p("AhCBHIA/iLIAWAAIgMAZQAKgLAKgGQAKgGAJgDQAKgCAJAAIACAAIgKAUIgDAAQgJABgJADQgKACgKAHQgKAGgIANIgqBag");
	this.shape_181.setTransform(205.275,-285.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#00A8F1").s().p("AgsBJQgVAAgJgLQgJgMADgVIADgLIAEgKIAEgIQAJgVARgQQAQgRAXgLIAPgFIAOgBIACAAQAYAAAFAZIADgGIAAgBIABAAIAVAAIAAAAIABABIgiBJIgLAaQgEANgDALIgCAAIgVAAQgBAAACgGIAFgRIgIAIIgHAHQgJAEgJADQgIACgKABgAgHgsQgPAIgOAPIgHALQgDAFgCAFIgDAFQgGAOAAALQAAAMAHAHQADADAFABIAJABIAFAAQAmAAAXgxIAEgIQAJgUgCgMQgBgNgMgEIgFAAIgDAAIgBAAQgQAAgNAIg");
	this.shape_182.setTransform(191.2875,-285.45);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#00A8F1").s().p("Ag9BCQgLgGAAgQQgBgQANgcQAMgbAPgQQAPgQARgGQAQgHAUAAQASAAAJAGQAJAFACAIQACAJgDAKQgCALgFAKIgDAHIgGAIIhhAGQgHAQAAAKQAAAJAIAFQAHAFARAAQAMAAAMgDQANgCAKgEIgJAVIgNADIgRAEIgUABIgDAAQgTAAgLgHgAAAgwQgKAGgIAKQgIAKgHAPIBMgGQAFgLACgJQACgJgFgGQgFgFgPAAQgQAAgLAFg");
	this.shape_183.setTransform(176.0935,-285.4733);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#00A8F1").s().p("AgOBGIAPhyIgBAAIhWByIgcAAIAZiLIAXAAIgYB1IACAAIBYh1IAZAAIgRB1IABAAIBUh1IAWAAIhmCLg");
	this.shape_184.setTransform(159.55,-285.475);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#00A8F1").s().p("AhcBNQALAAAKgEQAKgDAIgHQAIgIAJgLIAHiLIAZAAIgLBzIACAAIBchzIAXAAIhvCHQgPARgNANQgNANgPAGQgPAHgVAAg");
	this.shape_185.setTransform(132.9,-282.875);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#00A8F1").s().p("AhCBHIA/iLIAWAAIgMAZQAKgLAKgGQAKgGAJgDQAKgCAJAAIACAAIgKAUIgDAAQgJABgJADQgKACgKAHQgKAGgIANIgqBag");
	this.shape_186.setTransform(122.525,-285.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#00A8F1").s().p("AgsBJQgVAAgJgLQgJgMADgVIADgLIAEgKIAEgIQAJgVARgQQAQgRAXgLIAPgFIAOgBIACAAQAYAAAFAZIADgGIAAgBIABAAIAVAAIAAAAIABABIgiBJIgLAaIgHAYIgCAAIgVAAQgBAAACgGIAFgRIgIAIIgHAHQgJAEgJADQgIACgKABgAgHgsQgPAIgOAPIgHALQgDAFgCAFIgDAFQgGAOAAALQAAAMAHAHQADADAFABIAJABIAFAAQAmAAAXgxIAEgIQAJgUgCgMQgBgNgMgEIgFAAIgDAAIgBAAQgQAAgNAIg");
	this.shape_187.setTransform(108.5375,-285.45);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#00A8F1").s().p("AhFBZQgOgEgGgKQgGgLACgSQADgSAMgcQAQgiATgUQAUgUAXgJQAXgJAbAAIARABIAPACIAMAEIgJAVQgIgDgLgCQgKgCgOAAQgUgBgRAGQgQAHgOAPQgPAQgOAcQgKAXgCAOQgCAPAEAHQAFAIAKADQAKADAQAAIAPgBIAOgDIAZg4IgjAAIAIgSIA7AAIgqBaIgYAGQgPACgRAAIgEAAQgSAAgMgEg");
	this.shape_188.setTransform(93.5653,-287.4738);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#00A8F1").s().p("AhaBbQgJgKADgPQACgRAKgWQAJgTAMgQQAMgQASgKQARgKAWgBQAUAAAHAIQAIAHgBAMIAkhRIAWAAIhZDEIgRAAIAHgWQgJAKgPAIQgPAHgTAAQgXAAgIgJgAgbgSQgLAIgIALQgIAMgGAOQgHAPgDAMQgDANAFAGQAFAIAQAAQARAAAMgGQAMgHAJgMQAJgMAHgRQAIgQACgLQABgMgGgHQgHgHgQAAQgQAAgMAIg");
	this.shape_189.setTransform(69.7875,-288.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#00A8F1").s().p("AAJBHIAohYQAFgLACgHQABgIgEgDQgEgEgLgBQgJABgJACQgJABgKAHQgIAFgJANIgrBdIgXAAIBAiLIAVAAIgIAUQAIgIAJgGQAKgEAJgDQAKgCAIAAQASAAAIAHQAIAFgBALQAAAKgGANIgsBgg");
	this.shape_190.setTransform(51.1016,-285.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#00A8F1").s().p("AgsBJQgVAAgJgLQgJgMADgVIADgLIAEgKIAEgIQAJgVARgQQAQgRAXgLIAPgFIAOgBIACAAQAYAAAFAZIADgGIAAgBIABAAIAVAAIAAAAIABABIgiBJIgLAaQgEANgDALIgCAAIgVAAQgBAAACgGIAFgRIgIAIIgHAHQgJAEgJADQgIACgKABgAgHgsQgPAIgOAPIgHALQgDAFgCAFIgDAFQgGAOAAALQAAAMAHAHQADADAFABIAJABIAFAAQAmAAAXgxIAEgIQAJgUgCgMQgBgNgMgEIgFAAIgDAAIgBAAQgQAAgNAIg");
	this.shape_191.setTransform(35.5875,-285.45);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#00A8F1").s().p("AAJBHIAohYQAFgLACgHQABgIgEgDQgEgEgLgBQgJABgJACQgJABgKAHQgIAFgJANIgrBdIgXAAIBAiLIAVAAIgIAUQAIgIAJgGQAKgEAJgDQAKgCAIAAQASAAAIAHQAIAFgBALQAAAKgGANIgsBgg");
	this.shape_192.setTransform(12.4516,-285.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#00A8F1").s().p("Ag9BCQgLgGAAgQQgBgQANgcQAMgbAPgQQAPgQARgGQAQgHAUAAQASAAAJAGQAJAFACAIQACAJgDAKQgCALgFAKIgDAHIgGAIIhhAGQgHAQAAAKQAAAJAIAFQAHAFARAAQAMAAAMgDQANgCAKgEIgJAVIgNADIgRAEIgUABIgDAAQgTAAgLgHgAAAgwQgKAGgIAKQgIAKgHAPIBMgGQAFgLACgJQACgJgFgGQgFgFgPAAQgQAAgLAFg");
	this.shape_193.setTransform(-2.3065,-285.4733);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#00A8F1").s().p("AAJBjIAohZQAGgKABgIQABgHgEgEQgEgEgLAAQgJAAgJACQgJACgKAGQgIAGgJALIgrBfIgXAAIBYjFIAXAAIgiBNQAIgIAJgFQAKgFAJgCQAKgCAIAAQASAAAIAGQAIAFgBALQAAAKgGANIgsBhg");
	this.shape_194.setTransform(-18.5984,-288.325);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#00A8F1").s().p("AhBBZQgNgEgGgKQgGgLACgSQADgSAMgcQAQgiATgUQAUgUAWgJQAXgJAaAAQAMAAAJACQAJABAHACIgKAWIgPgFQgJgBgMAAQgUAAgRAGQgPAHgOAQQgOAQgMAaQgNAcgBAQQgBAQAKAGQAKAGAVAAQAMAAAKgCIAXgFIgJAUIgVAGQgMACgNAAIgEAAQgRAAgMgEg");
	this.shape_195.setTransform(-31.4118,-287.4738);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#00A8F1").s().p("AhKBBQgHgFAAgLQABgJAGgOIAshhIAXAAIgpBZQgEAKgCAIQgCAIAFADQAEAFAKAAQAKAAAIgCQAJgCAJgGQAJgGAJgMIArhfIAWAAIg/CMIgTAAIAGgVQgIAKgJAFQgJAFgKACIgSACQgRAAgJgHg");
	this.shape_196.setTransform(-55.7,-285.35);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#00A8F1").s().p("AgXBaIAXiEIgBAAIhiCEIgeAAIAnizIAZAAIgjCYIABAAIBgiDIAcAAIgXCDIACAAIBmiYIAYAAIh9Czg");
	this.shape_197.setTransform(-72.9,-287.475);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#00A8F1").s().p("AgfBJQgWAAgLgHQgLgGgBgQQAAgQAMgcQANgbAPgQQAOgQASgGQAQgHAVAAQAVAAALAHQAMAGAAAQQAAAQgMAbQgNAcgOAQQgPAQgSAGQgPAHgTAAIgCAAgAADAxQALgFAJgMQAJgMAJgUQAKgTABgMQABgMgGgFQgHgFgPAAQgQAAgKAFQgMAFgIAMQgKAMgJATQgJAUgCAMQgBAMAHAFQAHAFAPAAQAQAAAKgFg");
	this.shape_198.setTransform(-102.301,-285.4733);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#00A8F1").s().p("AhaBbQgJgKADgPQACgRAKgWQAJgTAMgQQAMgQASgKQARgKAWgBQAUAAAHAIQAIAHgBAMIAkhRIAWAAIhZDEIgRAAIAHgWQgJAKgPAIQgPAHgTAAQgXAAgIgJgAgbgSQgLAIgIALQgIAMgGAOQgHAPgDAMQgDANAFAGQAFAIAQAAQARAAAMgGQAMgHAJgMQAJgMAHgRQAIgQACgLQABgMgGgHQgHgHgQAAQgQAAgMAIg");
	this.shape_199.setTransform(-116.7625,-288.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#00A8F1").s().p("AguBUQgIgEAAgJQAAgKAJgSIAkhOIgWAAIAJgTIAVAAIAOghIAWAAIgPAhIAjAAIgJATIgjAAIgiBNQgEAKgBAGQgCAGAEACQADADAIAAIAJgBIAGgBIgHATIgIABIgIAAIgDABQgOAAgGgEg");
	this.shape_200.setTransform(-136.4,-287.0472);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#00A8F1").s().p("AgsBJQgVAAgJgLQgJgMADgVIADgLIAEgKIAEgIQAJgVARgQQAQgRAXgLIAPgFIAOgBIACAAQAYAAAFAZIADgGIAAgBIABAAIAVAAIAAAAIABABIgiBJIgLAaQgEANgDALIgCAAIgVAAQgBAAACgGIAFgRIgIAIIgHAHQgJAEgJADQgIACgKABgAgHgsQgPAIgOAPIgHALQgDAFgCAFIgDAFQgGAOAAALQAAAMAHAHQADADAFABIAJABIAFAAQAmAAAXgxIAEgIQAJgUgCgMQgBgNgMgEIgFAAIgDAAIgBAAQgQAAgNAIg");
	this.shape_201.setTransform(-150.3625,-285.45);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#00A8F1").s().p("AAJBjIAohZQAGgKABgIQABgHgEgEQgEgEgLAAQgJAAgJACQgJACgKAGQgIAGgJALIgrBfIgXAAIBYjFIAXAAIgiBNQAIgIAJgFQAKgFAJgCQAKgCAIAAQASAAAIAGQAIAFgBALQAAAKgGANIgsBhg");
	this.shape_202.setTransform(-166.7984,-288.325);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#00A8F1").s().p("AgXBaIAXiEIgBAAIhiCEIgdAAIAmizIAZAAIgjCYIABAAIBhiDIAbAAIgXCDIACAAIBmiYIAYAAIh8Czg");
	this.shape_203.setTransform(-182.9,-287.475);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#00A8F1").s().p("AgPAPQgDgBgBgEQAAgDAEgHQAEgKAGgDQAEgDAIABQAJgBADADQADADgFAKQgDAHgEADQgDAEgEABIgJABIgJgBg");
	this.shape_204.setTransform(-210.7054,-279.9286);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#00A8F1").s().p("Ag9BCQgLgGAAgQQgBgQANgcQAMgbAPgQQAPgQARgGQAQgHAUAAQASAAAJAGQAJAFACAIQACAJgDAKQgCALgFAKIgDAHIgGAIIhhAGQgHAQAAAKQAAAJAIAFQAHAFARAAQAMAAAMgDQANgCAKgEIgJAVIgNADIgRAEIgUABIgDAAQgTAAgLgHgAAAgwQgKAGgIAKQgIAKgHAPIBMgGQAFgLACgJQACgJgFgGQgFgFgPAAQgQAAgLAFg");
	this.shape_205.setTransform(-219.5065,-285.4733);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#00A8F1").s().p("AhaBbQgJgKADgPQACgRAKgWQAJgTAMgQQAMgQASgKQARgKAWgBQAUAAAHAIQAIAHgBAMIAkhRIAWAAIhZDEIgRAAIAHgWQgJAKgPAIQgPAHgTAAQgXAAgIgJgAgbgSQgLAIgIALQgIAMgGAOQgHAPgDAMQgDANAFAGQAFAIAQAAQARAAAMgGQAMgHAJgMQAJgMAHgRQAIgQACgLQABgMgGgHQgHgHgQAAQgQAAgMAIg");
	this.shape_206.setTransform(-233.6125,-288.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#00A8F1").s().p("Ag1BgIA+iLIAXAAIg/CLgAAXhHQgCgDAEgIQAEgJAEgCQAEgDAHABQAHgBACADQADACgEAJQgEAIgFADQgEACgHAAQgHAAgCgCg");
	this.shape_207.setTransform(-246.0269,-288.0792);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#00A8F1").s().p("AgyBIIgNgCIgKgCIAIgTIALACIANACIAOABQAQAAAKgFQAKgEAFgMQAEgJAAgEQgBgFgFgDQgGgDgLgDQgOgDgGgEQgGgFAAgIQAAgIAGgLQAHgSASgKQAQgKAZAAQAKAAAKABQAJABAEACIgKATIgNgEQgIgBgJAAQgQAAgJAEQgJAFgFALQgDAHABAEQAAAEAFADQADACAKADQAPADAIAFQAGAEABAIQAAAIgFAOQgKAVgSAJQgRAKgaAAIgPAAg");
	this.shape_208.setTransform(-257.1,-285.525);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#00A8F1").s().p("AgvBUQgHgEAAgJQAAgKAJgSIAjhOIgVAAIAJgTIAVAAIAOghIAWAAIgPAhIAjAAIgIATIgjAAIgiBNQgFAKgCAGQgBAGADACQAEADAJAAIAIgBIAHgBIgIATIgIABIgIAAIgDABQgOAAgHgEg");
	this.shape_209.setTransform(-265.95,-287.0472);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#00A8F1").s().p("AhKBBQgHgFAAgLQABgJAGgOIAshhIAXAAIgpBZQgFAKgBAIQgBAIAEADQAEAFALAAQAIAAAKgCQAIgCAJgGQAIgGAKgMIArhfIAWAAIg/CMIgTAAIAGgVQgIAKgJAFQgJAFgKACIgSACQgRAAgJgHg");
	this.shape_210.setTransform(-279.25,-285.35);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#00A8F1").s().p("AgfBJQgWAAgLgHQgLgGgBgQQAAgQAMgcQANgbAPgQQAOgQASgGQAQgHAVAAQAVAAALAHQAMAGAAAQQAAAQgMAbQgNAcgOAQQgPAQgSAGQgPAHgTAAIgCAAgAADAxQALgFAJgMQAJgMAJgUQAKgTABgMQABgMgGgFQgHgFgPAAQgQAAgKAFQgMAFgIAMQgKAMgJATQgJAUgCAMQgBAMAHAFQAHAFAPAAQAQAAAKgFg");
	this.shape_211.setTransform(-295.801,-285.4733);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#00A8F1").s().p("AhdBNQANAAAJgEQAKgDAIgHQAJgIAIgLIAHiLIAZAAIgKBzIABAAIBchzIAXAAIhvCHQgOARgOANQgNANgQAGQgPAHgUAAg");
	this.shape_212.setTransform(-317.8,-282.875);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#00A8F1").s().p("AAJBHIAohYQAFgLACgHQABgIgEgDQgEgEgLgBQgJABgJACQgJABgKAHQgIAFgJANIgrBdIgXAAIBAiLIAVAAIgIAUQAIgIAJgGQAKgEAJgDQAKgCAIAAQASAAAIAHQAIAFgBALQAAAKgGANIgsBgg");
	this.shape_213.setTransform(-332.8484,-285.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#00A8F1").s().p("AAJBHIAohYQAFgLACgHQABgIgEgDQgEgEgLgBQgJABgJACQgJABgKAHQgIAFgJANIgrBdIgXAAIBAiLIAVAAIgIAUQAIgIAJgGQAKgEAJgDQAKgCAIAAQASAAAIAHQAIAFgBALQAAAKgGANIgsBgg");
	this.shape_214.setTransform(-348.8984,-285.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#00A8F1").s().p("AhJBBQgIgFAAgLQABgJAGgOIAshhIAXAAIgpBZQgFAKgBAIQgBAIADADQAFAFALAAQAIAAAKgCQAIgCAJgGQAJgGAJgMIArhfIAWAAIg/CMIgTAAIAGgVQgIAKgIAFQgKAFgKACIgSACQgSAAgHgHg");
	this.shape_215.setTransform(-363.75,-285.35);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#00A8F1").s().p("AgxBIIgPgCIgJgCIAIgTIALACIAOACIANABQAQAAAKgFQAKgEAGgMQADgJgBgEQAAgFgFgDQgGgDgKgDQgOgDgHgEQgGgFAAgIQAAgIAFgLQAIgSASgKQAQgKAZAAQALAAAJABQAJABAEACIgKATIgNgEQgIgBgJAAQgQAAgJAEQgJAFgFALQgDAHAAAEQABAEAFADQADACAKADQAOADAJAFQAGAEABAIQABAIgHAOQgJAVgTAJQgQAKgaAAIgOAAg");
	this.shape_216.setTransform(-378.75,-285.525);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#00A8F1").s().p("AgxBIIgPgCIgKgCIAJgTIALACIAOACIANABQAQAAAKgFQAKgEAFgMQAEgJgBgEQABgFgGgDQgFgDgLgDQgOgDgGgEQgHgFAAgIQAAgIAFgLQAJgSARgKQAQgKAZAAQAKAAAKABQAJABAFACIgKATIgOgEQgIgBgKAAQgOAAgKAEQgJAFgFALQgDAHAAAEQABAEAFADQADACAKADQAPADAHAFQAIAEAAAIQAAAIgGAOQgJAVgTAJQgQAKgaAAIgOAAg");
	this.shape_217.setTransform(-397.9,-285.525);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#00A8F1").s().p("Ag1BgIA+iLIAXAAIg/CLgAAXhHQgCgDAEgIQAEgJAEgCQAEgDAHABQAHgBACADQADACgEAJQgEAIgFADQgEACgHAAQgHAAgCgCg");
	this.shape_218.setTransform(-406.2269,-288.0792);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#00A8F1").s().p("AgvBUQgHgEAAgJQAAgKAJgSIAjhOIgUAAIAIgTIAVAAIAOghIAWAAIgPAhIAjAAIgIATIgjAAIgiBNQgGAKgBAGQgBAGADACQAEADAJAAIAIgBIAGgBIgHATIgIABIgIAAIgDABQgOAAgHgEg");
	this.shape_219.setTransform(-420.4,-287.0472);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#00A8F1").s().p("Ag0BaIBRizIAYAAIhRCzg");
	this.shape_220.setTransform(-428.9,-287.475);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("Eg7XAKbIAA01MBh7AAAQFDIhPwC9IAAJXg");
	this.shape_221.setTransform(80.7898,161.196,0.9299,0.9299);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("Eg7WANwIAA7fMBizAAAQEuMXPMEfIAAKpg");
	this.shape_222.setTransform(85.7648,-109.0609,0.9299,0.9299);

	this.instance = new lib.位图160();
	this.instance.setTransform(-307.3,-285.15,0.6438,0.6438);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#231815").s().p("AgoBSQgTgIgKgUQgKgTAAgjQAAgiAKgUQAKgTATgIQATgIAbAAQAdAAARAKQAQAKAGARQAGARAAAWIgBANIgBAKIhuAHQABASALAJQALAJAWAAIAWgCIAUgEIAQgGIAAAkQgJAFgRAEQgSADgXAAIgDABQgXAAgSgIgAgXgsQgJAJAAAVIBFgGQAAgJgCgIQgCgIgHgEQgHgFgNAAQgVAAgIAKg");
	this.shape_223.setTransform(-483.175,182.3515);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#231815").s().p("Ag4BwQgPgKgGgVQgGgUABgbQgBgaAGgSQAGgVAPgLQAPgNAcAAQAWAAAMAHQAMAGAFAMIAAhcIAuAAIAADyIgqAAIgDgYQgFAMgNAIQgMAHgWAAQgcAAgPgLgAgWgNQgIAIgDALQgCAMAAAQQAAAQADAMQACAMAIAHQAIAHAPAAQAPAAAJgGQAJgHADgLQADgNAAgRQAAgRgDgNQgEgLgIgHQgJgGgPgBQgPABgIAHg");
	this.shape_224.setTransform(-483.6519,85.35);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#231815").s().p("AgZBSQgUgIgKgUQgKgTAAgjQAAgiAKgUQAKgTAUgIQATgIAaAAQANAAALACQAMABAIADIAAAnQgJgEgJgBQgKgCgKAAQgQAAgJAFQgJAEgFAMQgEALAAATQAAAUAEALQAFALAJAFQAKAEAQAAIAUgBIATgFIAAAmIgNADIgQADIgRAAIgDABQgYAAgSgIg");
	this.shape_225.setTransform(-483.175,-4.9985);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#231815").s().p("AgLB3QgLgDgGgGQgGgGgDgIIgEAYIgqAAIAAjyIAuAAIAABbQAFgKANgGQAMgIAWAAQAbAAAPALQAPALAGAUQAGATAAAcQAAAZgGAUQgGAUgPAMQgPAMgbAAQgQAAgKgEgAgXgOQgJAGgEAMQgDAMAAASQAAAQADAMQAEANAJAGQAIAHAPAAQAQAAAIgIQAHgHADgMQACgMAAgPQAAgQgCgMQgDgMgIgHQgIgHgPAAQgPAAgIAGg");
	this.shape_226.setTransform(-482.725,-102);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#231815").s().p("AgTBZQgYAAgQgMQgQgNgJgYIgEgTIgBgUIAAgGQAAgXAKgTQAJgSATgOIAQgHQAJgCAIAAIAJAAQAPAAALAFQALAFAFAKIABABIAAABIABAAIAAgFIABgBIAsAAIABAAIAAABIgBA5QAAAkACAYQACAXAFALIAAACIABAEIgBABIgsAAIgDgGIgGgRIgBAAQgFAMgLAHQgLAGgOAAgAgcgsQgLAKgHAVIgBAJIgBAGQAAATAHANQAHAMANAFQAFACAFABIAJABQAMAAAIgEQAJgFAFgJQACgGACgKQACgKAAgMQAAgSgFgMQgEgMgJgFQgEgDgFgBQgGgCgGAAIgBAAQgQAAgKAKg");
	this.shape_227.setTransform(-483.775,-192.375);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FBE7E7").s().p("AiqA2QgLAAgGgDIAAgMQAIAFAIAAIABAAQANAAAAgLQAAgFgQgIQgQgHAAgLQgBgKAIgGQAGgFALgBIACAAQAGAAAJADIgBALQgGgDgIAAQgMAAAAAJQAAAFAQAHQAPAHABAMQAAALgHAGQgHAGgKAAgAiCg1IANAAIACAsQAHgMAPgBIACAAQAZAAABAdIACAqIgOABIgBglQAAgYgQAAQgWAAABAdIACAhIgNAAgAgLAxQgPAAgKgLQgKgKgBgPQgBgQAKgKQAKgLAQgBIACAAQAOAAAKAKQAKAKABAPQAAAQgJALQgKALgPABgAgcgFQgGAHABAKQAAALAGAHQAGAIAKAAIABAAQAKAAAGgJQAFgIAAgKQgBgLgGgGQgFgIgKAAIgBAAQgKAAgGAJgAApgZIAMAAIABALQAGgOAMAAIACAAIAHABIAAAMIgGgBIgBAAQgJAAgFAIQgFAIAAAMIACAhIgOAAgAB8AsQgUAAgBgUIgBgpIgQABIgBgLIAQAAIAAgRIANgEIAAAUIATAAIABAKIgTABIABAmQAAAMALAAIABAAQAEAAAFgCIAAALIgLACgACjArQgLAAgGgEIABgLQAHAEAJAAIAAAAQANgBAAgKQAAgFgQgHQgPgHgBgKQAAgLAHgGQAGgGAMAAIABAAQAHAAAIACIgBAMQgFgEgIAAIgBAAQgMABAAAJQAAAGAQAGQAQAGAAANQABAKgIAHQgHAFgKABg");
	this.shape_228.setTransform(-387.811,8.5921,2.3507,2.3507);

	this.instance_1 = new lib.ClipGroup_26();
	this.instance_1.setTransform(0.15,-390.65,2.3507,2.3507,0,0,0,260.8,368.5);

	this.instance_2 = new lib.ClipGroup_27();
	this.instance_2.setTransform(-387.75,8.3,2.3507,2.3507,0,0,0,27.1,15.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#E2EDF8").s().p("ABrA0IgEhkIANAAIAAAKQAIgMAQgBIABAAQAPAAAIALQAIAJAAAPQABAQgHAKQgIAMgPABIgCAAQgPAAgHgLIgBAAIACAogACKgoQgKABgGAIQgFAIABALQAAAKAFAGQAGAIAKAAIAAAAQAKAAAFgKQAFgGgBgKQAAgLgFgHQgFgIgJAAgAiNAhQgOAAgIgMQgIgKAAgPQgBgPAHgKQAIgLAPgBIACAAQAPAAAHALIAAgLIANgBIADBIIgNAAIAAgKQgIAMgQABgAiZgVQgFAHABALQAAAJAFAHQAFAJAKAAIAAAAQALAAAFgJQAFgIgBgJQAAgLgFgHQgGgIgKAAIgBAAQgKAAgEAJgAgMAcQgPAAgKgKQgKgKgBgPQgBgQAKgLQAKgLAQAAIABAAQAIAAAGACIgBALQgGgDgGAAIgBAAQgLABgGAIQgGAIABALQAAAJAGAHQAGAJAMAAIABAAQAHAAAGgFIABAMQgFADgKAAgAAtAaQgPAAgIgLQgHgLgBgOQgBgPAIgLQAIgLAPAAIABAAQAQAAAHAKIAAgLIANAAIACBHIgMABIgBgKQgHAMgRAAgAAggcQgEAHAAALQABAKAEAHQAGAJAJAAIABAAQAKgBAGgJQAEgGAAgLQgBgKgFgIQgGgIgJAAIgBAAQgKABgFAIg");
	this.shape_229.setTransform(-387.8209,202.7568,2.3507,2.3507);

	this.instance_3 = new lib.ClipGroup_28();
	this.instance_3.setTransform(0.15,-390.65,2.3507,2.3507,0,0,0,260.8,368.5);

	this.instance_4 = new lib.ClipGroup_29();
	this.instance_4.setTransform(-388.1,197.15,2.3507,2.3507,0,0,0,27.9,15.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFF4D6").s().p("AC5A5QgWgBAAgVIACgpIgQAAIAAgLIAQABIABgRIANgDIgBAUIATABIAAALIgTgBIgBAmQgBAMALABIABAAQAFAAADgCIAAALIgLACgABmA0IADhGIAMAAIAAALIAAAAQAGgMAMAAIABAAIAJABIgBAMIgHgBIgBAAQgIAAgFAHQgGAHAAANIgCAhgABBAzIADhHIANABIgDBGgAAfAyIgfgmIAAAkIgNAAIADhoIAMABIgCA9IAegbIASABIgiAdIAkApgAg2AwQgMAAgIgEIABgMQAHAFAKABIAAAAQANAAAAgKQAAgGgPgIQgPgIABgKQAAgVAYAAIABAAQAIAAAJADIgCAMQgEgDgJgCIgBAAQgMAAAAAJQAAAGAPAHQAPAIgBAMQAAAKgHAGQgHAFgKAAgAimAsQgPAAgIgMQgHgLAAgQQABgOAIgKQAIgKAOAAIABAAQARAAAHAMIAAgLIANAAIgCBIIgNAAIABgLIgBAAQgHALgQAAgAi2AGQAAAKAEAIQAFAJAKABIABAAQAKAAAGgJQAFgHAAgKQAAgKgFgIQgFgIgKgBIgBAAQgTAAgBAZgABDgkIABgOIAPAAIgBAPg");
	this.shape_230.setTransform(-387.7561,105.0868,2.3507,2.3507);

	this.instance_5 = new lib.ClipGroup_30();
	this.instance_5.setTransform(0.15,-390.65,2.3507,2.3507,0,0,0,260.8,368.5);

	this.instance_6 = new lib.ClipGroup_31();
	this.instance_6.setTransform(-388.1,104.8,2.3507,2.3507,0,0,0,27.9,15.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#E5F2EC").s().p("AC8A5QgVgBAAgVIACgoIgRgBIABgKIAQAAIABgQIANgEIgBAVIATAAIAAALIgTgBIgCAmQAAANALAAIABAAQAEAAAEgCIAAALIgLACgABqA0IADhGIAMAAIAAAMQAGgNAMAAIABAAIAJACIgBALIgHgBIgBAAQgIAAgGAHQgFAHgBANIgBAhgABFAzIAChGIAOAAIgDBHgAAgAyIABglQABgYgPgBIgCAAQgTAAgBAbIgBAiIgNgBIADhoIAOABIgCArQAHgLAPAAIABAAQAbABgCAeIgBAqgAg6AwQgMAAgIgEIACgMQAGAFAKABIAAAAQANAAABgKQAAgGgQgIQgPgIABgKQAAgKAHgGQAHgFAKAAIACAAQAHAAAJADIgCAMQgDgDgKgCIgBAAQgMAAAAAJQAAAGAPAHQAPAIAAAMQgBAKgHAGQgHAFgKAAgAiSAsIABgLQgJALgPAAIgBAAQgPAAgIgMQgHgLAAgQQABgOAIgKQAIgKAOAAIACAAQAQAAAHAMIAAAAIAAgLIAOAAIgDBIgAi6AGQAAAKAFAIQAFAJAJABIABAAQAKAAAGgJQAFgHAAgKQABgKgFgIQgGgIgKgBIgBAAQgTAAgBAZgABHgjIABgPIAPAAIgBAPg");
	this.shape_231.setTransform(-387.8149,-83.5538,2.3507,2.3507);

	this.instance_7 = new lib.ClipGroup_32();
	this.instance_7.setTransform(0.15,-390.65,2.3507,2.3507,0,0,0,260.8,368.5);

	this.instance_8 = new lib.ClipGroup_33();
	this.instance_8.setTransform(-387.9,-83.6,2.3507,2.3507,0,0,0,28.2,15.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#E0E8F5").s().p("AjoA7QgOAAgIgMQgIgLAAgPQgBgQAHgIQAIgMAPgBIACAAQAPAAAHAMIAAgMIANgBIADBIIgNABIAAgKQgIAMgQABgAjmgEQgKAAgEAIQgFAGABAMQAAAJAFAHQAGAJAJAAIAAAAQALAAAFgJQAFgHgBgLQAAgKgFgIQgGgHgKAAgAhyggIgfACIAAgNIBLgDIAAAMIgeACIADBUIgOABgAACAyQgJAAgHgDIABgMQAHAFAIAAIAAAAQAOAAgBgLQAAgGgPgHQgPgHgBgKQAAgKAHgHQAHgFAKgBIABAAIAPADIgBALQgFgDgIAAIgBAAQgLAAAAAJQAAAGAPAGQAQAHAAAMQABALgIAGQgGAFgLABgAAqg5IANAAIACAsIAAAAQAHgNAQAAIABgBQAZAAACAdIABArIgNAAIgBglQgBgMgDgFQgEgHgIAAQgWAAABAeIABAgIgNABgACDgbIANAAIACBGIgNABgACqArIgChGIAMgBIAAALIABAAQAGgMAMgBIACAAIAHABIAAALIgGgBIgBAAQgJAAgFAJQgFAHAAANIABAhgAD7AqQgVgBAAgTIgCgpIgQAAIAAgKIAQAAIAAgRIANgFIAAAVIATgBIABALIgTABIABAlQABANAKAAQAGgBADgCIABALQgIACgDABgAg+AIIAkgBIABAKIgkABgACBg5IAOAAIABAOIgPAAg");
	this.shape_232.setTransform(-387.4134,-175.2884,2.3507,2.3507);

	this.instance_9 = new lib.ClipGroup_34();
	this.instance_9.setTransform(0.15,-390.65,2.3507,2.3507,0,0,0,260.8,368.5);

	this.instance_10 = new lib.ClipGroup_35();
	this.instance_10.setTransform(-388.1,-175.55,2.3507,2.3507,0,0,0,34.5,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.shape_232},{t:this.instance_8},{t:this.instance_7},{t:this.shape_231},{t:this.instance_6},{t:this.instance_5},{t:this.shape_230},{t:this.instance_4},{t:this.instance_3},{t:this.shape_229},{t:this.instance_2},{t:this.instance_1},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.instance},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167}]}).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1144.2,-1256.8,1757.4,1732.5);
p.frameBounds = [rect, rect=new cjs.Rectangle(-612.9,-1256.8,1226,1732.5), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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
		var showNum = 0;
		var len = 6; //对应label1-label4;
		function init() {
			console.log(_this.x);
			console.log();
			showNum=0;
			checkNum();
		}
		var audio = new Audio('sounds/s01.mp3');
		audio.addEventListener('play', function () {
			//console.log('音频开始播放');
		});
		var timeArr = new Array(0, 30, 61, 90);
		
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
		
		this.addEventListener("click", onthis.bind(this));
		function onthis(event) {
			//console.log(event.target.name);
			switch (event.target.name) {
				case "_prevbtnShow":
					showPrev();checkNum();
					break;
				case "_nextbtnShow":
					showNext();checkNum();
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
		//检测是否是最前一个或者最后一个
		function checkNum(){
			//检测最前
			console.log(showNum);
			if(showNum==len){
				_this._nextbtnShow.visible=false;
			}else{
				_this._nextbtnShow.visible=true;
			}
		    //检测最后
		    if(showNum==0){
				_this._prevbtnShow.visible=false;
			}else{
				_this._prevbtnShow.visible=true;
			}
		    
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
	this._seekMc.setTransform(360.15,782.1);

	this.timeline.addTween(cjs.Tween.get(this._seekMc).wait(1));

	// 图层_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax2BdQgmAAgcgcQgbgbAAgmQAAglAbgbQAcgcAmAAMAjtAAAQAdAAAXAQIAEAEIAJAIIAFAFQAXAaAAAhQAAAigXAaIgFAFIgJAIIgEAEQgXAQgdAAg");
	mask.setTransform(249.225,23.925);

	// 图层_3
	this._color = new lib.元件14();
	this._color.name = "_color";
	this._color.setTransform(123.5,771.25,1,1,0,0,0,-124.5,-10.8);

	var maskedShapeInstanceList = [this._color];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this._color).wait(1));

	// 图层_1
	this._prevbtnShow = new lib.元件13复制();
	this._prevbtnShow.name = "_prevbtnShow";
	this._prevbtnShow.setTransform(224.15,1.7,1.1,1.1);
	new cjs.ButtonHelper(this._prevbtnShow, 0, 1, 2, false, new lib.元件13复制(), 3);

	this._nextbtnShow = new lib.元件12复制();
	this._nextbtnShow.name = "_nextbtnShow";
	this._nextbtnShow.setTransform(360.75,1.7,1.1,1.1);
	new cjs.ButtonHelper(this._nextbtnShow, 0, 1, 2, false, new lib.元件12复制(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqAyQgRAAAAgRIAAhBQAAgRARAAIBVAAQARAAAAARIAABBQAAARgRAAg");
	this.shape.setTransform(355.319,2.035,1.0998,1.0998);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_1.setTransform(368.0271,2.3551,1.0807,1.2625,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_2.setTransform(368.0271,2.3551,1.0807,1.2625,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#999999").ss(4,1,1).p("Ai8i8QhNBOAABuQAABdA4BHQAKAMALAMQBOBPBvAAQBTAABBgtQAVgOATgUQAMgMAKgMQAHgKAGgKQACgCADgFQAlg9AAhMQAAhuhNhOQg9g9hQgNQgYgEgXAAQhvAAhOBOg");
	this.shape_3.setTransform(360.75,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Ai7C8IgWgYQg4hHgBhdQAAhtBPhPQBOhOBuABQAYgBAXAEQBQANA9A9QBNBPAABtQAABMglA+IgEAGIgPAUIgVAYQgTATgVAPQhCAshSABQhuAAhOhPg");
	this.shape_4.setTransform(360.75,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqAyQgRAAAAgRIAAhBQAAgRARAAIBVAAQARAAAAARIAABBQAAARgRAAg");
	this.shape_5.setTransform(228.569,2.035,1.0998,1.0998);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_6.setTransform(217.0729,2.1783,1.0807,1.2628);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_7.setTransform(217.0729,2.1783,1.0807,1.2628);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#999999").ss(4,1,1).p("ACsirQBHBIAABjQAABVg0BAQgJALgKALQhIBIhkAAQhLAAg7gpQgUgNgRgSQgLgLgJgLQgGgIgGgJQgCgDgDgEQgig3AAhGQAAhjBHhIQA3g3BKgMQAUgDAWAAQBkAABIBGg");
	this.shape_8.setTransform(224.1492,1.7298,1.1,1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AiGDKQgUgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBHBHAABkQAABVg0BAIgTAWQhIBHhkAAQhLAAg7gog");
	this.shape_9.setTransform(224.1492,1.7298,1.1,1.1);

	this._seekBarMc = new lib.元件11复制();
	this._seekBarMc.name = "_seekBarMc";
	this._seekBarMc.setTransform(134.65,771.05,1,1,0,0,0,-115,-11);
	new cjs.ButtonHelper(this._seekBarMc, 0, 1, 1);

	this.instance = new lib.元件11();
	this.instance.setTransform(249.45,782.05);

	this._pausebtn = new lib.元件15();
	this._pausebtn.name = "_pausebtn";
	this._pausebtn.setTransform(24.25,781.75);
	new cjs.ButtonHelper(this._pausebtn, 0, 1, 2, false, new lib.元件15(), 3);

	this._prevbtn = new lib.元件13();
	this._prevbtn.name = "_prevbtn";
	this._prevbtn.setTransform(82,781.75);
	new cjs.ButtonHelper(this._prevbtn, 0, 1, 2, false, new lib.元件13(), 3);

	this._nextbtn = new lib.元件12();
	this._nextbtn.name = "_nextbtn";
	this._nextbtn.setTransform(415.75,781.75);
	new cjs.ButtonHelper(this._nextbtn, 0, 1, 2, false, new lib.元件12(), 3);

	this._playbtn = new lib.元件7();
	this._playbtn.name = "_playbtn";
	this._playbtn.setTransform(24.25,781.75);
	new cjs.ButtonHelper(this._playbtn, 0, 1, 2, false, new lib.元件7(), 3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,126,77,0.2)").s().p("Ax6C5Qg9AAgwgkQgLgIgLgLQg2g2AAhMIAAAAQAAhMA2g2QA2g2BNAAMAj1AAAQBMAAA2A2QA3A2AABMIAAAAQAABMg3A2QgKALgLAIQgvAkg+AAgAy0g9QgbAbAAAlQAAAmAbAbQAbAcAnAAMAjtAAAQAcAAAYgQIAEgEIAJgIIAFgFQAXgagBgiQABghgXgaIgFgFIgJgIIgEgEQgYgQgcAAMgjtAAAQgnAAgbAcg");
	this.shape_10.setTransform(249.3,781.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this._playbtn},{t:this._nextbtn},{t:this._prevbtn},{t:this._pausebtn},{t:this.instance},{t:this._seekBarMc},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this._nextbtnShow},{t:this._prevbtnShow}]}).wait(1));

	// 图层_4
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAzhWIABCtIhnhXg");
	this.shape_11.setTransform(412.2091,781.3643,0.9827,1.1474,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_12.setTransform(412.2091,781.3643,0.9827,1.1474,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_13.setTransform(422.6506,781.3643,0.9827,1.1474,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_14.setTransform(422.6506,781.3643,0.9827,1.1474,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#E1E1E1").ss(4,1,1).p("AiqirQhIBHAABkQAABUA0BBQAJALALALQBGBIBlAAQAgAAAegIQAngKAigXQASgNASgSQALgLAIgLQAHgJAGgIQACgDADgEQAig3AAhGQAAhkhHhHQgwgwg9gPQgKgCgJgCQgVgEgWAAQhlAAhGBHg");
	this.shape_15.setTransform(415.75,781.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E1E1E1").s().p("AiqCrIgUgWQg0hAAAhVQABhkBHhHQBGhGBkAAQAXAAAVADIATAEQA9APAwAwQBHBHAABkQAABGgjA3IgEAGIgNASIgTAWQgSARgTAOQghAXgnAKQgeAIghgBQhjAAhHhHg");
	this.shape_16.setTransform(415.75,781.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAzhWIABCtIhnhXg");
	this.shape_17.setTransform(85.5409,781.6531,0.9827,1.1483);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_18.setTransform(85.5409,781.6531,0.9827,1.1483);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_19.setTransform(75.0994,781.6531,0.9827,1.1483);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_20.setTransform(75.0994,781.6531,0.9827,1.1483);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#E1E1E1").ss(4,1,1).p("ACsirQBHBHAABkQAABUg0BBQgJALgKALQhIBIhkAAQhLAAg7gpQgUgNgRgSQgLgLgJgLQgGgJgGgIQgCgDgDgEQgig3AAhGQAAhkBHhHQA3g3BKgMQAUgEAWAAQBkAABIBHg");
	this.shape_21.setTransform(82,781.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E1E1E1").s().p("AiGDKQgUgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBHBHAABkQAABVg0BAIgTAWQhIBHhkAAQhLAAg7gog");
	this.shape_22.setTransform(82,781.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2,-27.1,444,835.2);
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 标题
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgSAbQgGgCgDgGQgBgHAAgMQAAgMABgGQADgGAGgDQAGgCAMABQAMgBAGACQAHADACAGQACAGAAAMQAAAMgCAHQgCAGgHACQgGACgMAAQgMAAgGgCg");
	this.shape.setTransform(372.85,57.52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgpBVQgUgIgKgVQgKgUAAgkQAAgjAKgUQAKgUAUgIQAUgJAbABQAeAAARAKQARAKAGARQAGASAAAXIgBANIgBALIhyAHQACATALAJQAMAJAXAAQALAAALgCQAMgCAJgDQAKgCAGgEIAAAmQgJAFgSAEQgSADgYAAIgDAAQgYAAgSgHgAgYgtQgJAJgBAWIBIgGQABgKgDgIQgCgIgHgEQgHgFgOAAQgVAAgJAKg");
	this.shape_1.setTransform(357.7518,51.3251);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgHBcQgPAAgPgCIgbgEIAAgoQAOAEAOACQAOACAMAAQAPABAHgEQAHgEAAgKQAAgIgDgEQgCgEgIgDQgGgDgOgDQgTgFgLgGQgJgFgFgJQgEgKAAgPQAAgZAQgOQARgOAmAAQAPAAANACQANACAIACIgDAlIgMgDIgQgDIgRgBQgPAAgFAEQgHAEAAAJQAAAFADADQACADAIADIATAGQATAFALAGQALAGAEAKQAEAKAAAQQABAfgUANQgSANgfAAIgDAAg");
	this.shape_2.setTransform(340,51.2759);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAABcQgbABgTgIQgUgIgKgVQgKgUAAgkQAAgjAKgUQAKgUAUgIQATgJAbABQAcgBATAJQAUAIAKAUQAKAUAAAjQAAAkgKAUQgKAVgUAIQgSAHgaAAIgDAAgAgWgzQgIAGgEAMQgDANAAAUQAAAWADAMQAEAMAIAFQAJAFANAAQAPAAAIgFQAIgFAEgMQADgMAAgWQAAgUgDgNQgEgMgIgGQgJgFgOAAQgOAAgIAFg");
	this.shape_3.setTransform(321.675,51.3251);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAABcQgbABgTgIQgUgIgKgVQgKgUAAgkQAAgjAKgUQAKgUAUgIQATgJAbABQAcgBATAJQAUAIAKAUQAKAUAAAjQAAAkgKAUQgKAVgUAIQgSAHgaAAIgDAAgAgWgzQgIAGgEAMQgDANAAAUQAAAWADAMQAEAMAIAFQAJAFANAAQAPAAAIgFQAIgFAEgMQADgMAAgWQAAgUgDgNQgEgMgIgGQgJgFgOAAQgOAAgIAFg");
	this.shape_4.setTransform(301.225,51.3251);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AAhB9IAAhtQAAgRgFgIQgHgIgRABQgNgBgKAGQgKAGgEANIAAB1IgvAAIAAj5IAvAAIAABeQAIgNAOgGQAOgGATAAQAWAAANAHQANAGAGAOQAFANABASIAAB6g");
	this.shape_5.setTransform(280.55,47.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgaBVQgUgIgKgVQgLgUAAgkQAAgjALgUQAKgUAUgIQATgJAbABQAOAAAMABQAMACAIACIAAApQgJgEgKgBQgJgCgMAAQgPAAgKAEQgJAFgFAMQgFAMAAATQAAAVAFALQAFAMAJAEQAKAFAQAAIAVgCQAKgBAKgEIAAAoIgNADIgRADIgSAAIgDAAQgZAAgSgHg");
	this.shape_6.setTransform(261.825,51.3251);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("Ag6B0QgQgMgGgUQgGgVABgcQgBgaAGgUQAGgVAQgMQAPgNAdAAQAXAAAMAHQANAHAFAMIAAhfIAvAAIAAD6IgrAAIgEgZQgFAMgMAIQgNAIgXAAQgdAAgPgLgAgXgNQgIAIgDALQgCANAAAQQAAAQACANQADAMAIAHQAIAIAPAAQAQAAAJgHQAJgGAEgNQADgMAAgSQAAgRgEgNQgDgMgJgHQgJgHgQAAQgPAAgIAIg");
	this.shape_7.setTransform(234.0231,47.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AAiBbIAAhsQAAgSgGgIQgHgIgQAAQgOAAgKAGQgJAFgFAOIAAB1IgwAAIAAixIAwAAIAAAVQAIgNAPgGQANgGAUAAQAVAAANAHQANAHAGANQAGANgBAUIAAB5g");
	this.shape_8.setTransform(213.45,51.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgTBbQgZAAgRgMQgQgNgJgYQgDgJgBgLIgCgVIAAgHQABgYAJgTQAKgSATgOQAJgFAJgDQAIgBAJAAIAJAAQAPAAAMAEQAKAGAHAKIAAABIABABIAAAAIAAgFIABgBIAuAAIABAAIAAABIgCA6QAAAmACAYQADAYAEALIABACIABAFIgCABIgtAAIgCgHIgHgSIgBAAQgGANgKAHQgLAGgPAAgAgdgtQgLAKgHAVIgCAKIAAAGQAAAUAHANQAHANANAFIALACIAKABQAMABAIgFQAJgEAFgKQADgGABgLQACgJAAgNQAAgSgEgNQgGgMgIgGQgEgDgGgBQgFgBgHAAIAAAAQgRAAgLAKg");
	this.shape_9.setTransform(192.1,51.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("Ag6B0QgQgMgGgUQgGgVABgcQgBgaAGgUQAGgVAQgMQAPgNAdAAQAXAAAMAHQANAHAFAMIAAhfIAvAAIAAD6IgrAAIgEgZQgFAMgMAIQgNAIgXAAQgdAAgPgLgAgXgNQgIAIgDALQgCANAAAQQAAAQACANQADAMAIAHQAIAIAPAAQAQAAAJgHQAJgGAEgNQADgMAAgSQAAgRgEgNQgDgMgJgHQgJgHgQAAQgPAAgIAIg");
	this.shape_10.setTransform(162.9731,47.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgTBbQgZAAgRgMQgQgNgJgYQgDgJgBgLIgCgVIAAgHQAAgYAKgTQAKgSAUgOQAIgFAJgDQAIgBAJAAIAJAAQAPAAAMAEQAKAGAHAKIAAABIABABIAAAAIABgFIABgBIAtAAIABAAIAAABIgCA6QAAAmACAYQADAYAEALIABACIABAFIgCABIgtAAIgCgHIgGgSIgBAAQgHANgKAHQgLAGgPAAgAgdgtQgMAKgGAVIgCAKIAAAGQAAAUAHANQAHANANAFIAKACIALABQAMABAIgFQAJgEAEgKQAEgGACgLQABgJAAgNQAAgSgEgNQgGgMgIgGQgEgDgGgBQgFgBgHAAIAAAAQgRAAgLAKg");
	this.shape_11.setTransform(142.05,51.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgpBVQgUgIgKgVQgKgUAAgkQAAgjAKgUQAKgUAUgIQAUgJAbABQAeAAARAKQARAKAGARQAGASAAAXIgBANIgBALIhyAHQACATALAJQAMAJAXAAQALAAALgCQAMgCAJgDQAKgCAGgEIAAAmQgJAFgSAEQgSADgYAAIgDAAQgYAAgSgHgAgYgtQgJAJgBAWIBIgGQABgKgDgIQgCgIgHgEQgHgFgOAAQgVAAgJAKg");
	this.shape_12.setTransform(122.8018,51.3251);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AAjByIg1hTIgZAAIAABTIgyAAIAAjkIBOAAQAeAAATAIQAUAGAJARQAJAQAAAaQAAAcgKAQQgKAQgWAHIBABYgAgrgGIAUAAQARABAJgDQALgDAEgHQAFgIAAgPQAAgOgFgGQgEgIgLgCQgJgDgRAAIgUAAg");
	this.shape_13.setTransform(103.625,48.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhwCZIAAkxIBnAAQArAAAZAJQAZAKAKASQAKASgBAcQABAYgKAPQgLAQgYAHIAAACQAbAGANARQAOASAAAdQAAAcgKATQgKAUgZAKQgZALgrAAgAgtBjIAeAAQAXAAANgDQANgDAGgJQAFgIAAgQQAAgOgFgIQgFgJgOgEQgNgEgXABIgeAAgAgtgaIAWAAQAWAAAMgCQAOgDAGgIQAHgIAAgPQAAgQgHgIQgGgIgNgCQgNgCgWAAIgWAAg");
	this.shape_14.setTransform(47.3012,48.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D8075").s().p("AirCsQhHhHAAhlQAAhkBHhIQBHhGBkAAQBlAABHBGQBHBIAABkQAABlhHBHQhHBHhlAAQhkAAhHhHg");
	this.shape_15.setTransform(46.725,47.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 内容
	this._showbar = new lib.元件4();
	this._showbar.name = "_showbar";
	this._showbar.setTransform(640,375);

	this.timeline.addTween(cjs.Tween.get(this._showbar).wait(1));

	// csz
	this.pro_bar = new lib.元件3复制();
	this.pro_bar.name = "pro_bar";
	this.pro_bar.setTransform(342.75,654.75);

	this.timeline.addTween(cjs.Tween.get(this.pro_bar).wait(1));

	// diban
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.8)").s().p("EhkVAEsIAApXMDIrAAAIAAJXg");
	this.shape_16.setTransform(639.9,690.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(135.8,-521.8,1786.4,2344.6);
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
		{src:"images/index_atlas_1.png?1731923429771", id:"index_atlas_1"}
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