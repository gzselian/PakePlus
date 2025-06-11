(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,225,235]]}
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



(lib.位图42 = function() {
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
	mask.graphics.p("EgovA5lMAAAhzJMBRfAAAMAAABzJg");
	mask.setTransform(260.775,368.5);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB7281").s().p("AgnBiQgYAAgRgRQgRgRAAgYIAAhPQAAgYARgRQARgRAYAAIBPAAQAYAAARARQARARAAAYIAABPQAAAYgRARQgRARgYAAgAhGhGQgNANAAASIAABPQAAASANANQANANASAAIBPAAQASAAANgNQANgNAAgSIAAhPQAAgSgNgNQgMgNgTAAIhPAAQgTAAgMANg");
	this.shape.setTransform(196.025,189.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBbQgVAAgPgPQgPgPAAgVIAAhPQAAgVAPgPQAPgPAVAAIBPAAQAVAAAPAPQAPAPAAAVIAABPQAAAVgPAPQgPAPgVAAg");
	this.shape_1.setTransform(196.025,189.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9E9E9F").s().p("AF5G3IAAgKIAPAAIALgBIADAJIgOACgAmHG3QgFAAgIgCIACgJIALABIAPAAIAAAKgAG1GKQABgFAAgGIAAgPIAKAAIAAAPQAAAHgCAHgAm/F/IAAgPIAKAAIABAaIgJADQgCgHAAgHgAG2lvIAAgPIgBgLIAJgDIACAOIAAAPgAm/lvIAAgPIACgOIAJADIgBAagAGImsIgPAAIAAgKIAPAAQAHAAAHABIgDAKgAmUm1QAGgBAHAAIAPAAIAAAKIgPAAIgLABg");
	this.shape_2.setTransform(414.575,172.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9E9E9F").s().p("AFIAFIAAgJIAeAAIAAAJgAEXAFIAAgJIAdAAIAAAJgADmAFIAAgJIAdAAIAAAJgAC1AFIAAgJIAeAAIAAAJgACEAFIAAgJIAdAAIAAAJgABTAFIAAgJIAeAAIAAAJgAAiAFIAAgJIAdAAIAAAJgAgOAFIAAgJIAdAAIAAAJgAg/AFIAAgJIAdAAIAAAJgAhwAFIAAgJIAeAAIAAAJgAihAFIAAgJIAdAAIAAAJgAjSAFIAAgJIAdAAIAAAJgAkDAFIAAgJIAeAAIAAAJgAk0AFIAAgJIAdAAIAAAJgAllAFIAAgJIAeAAIAAAJg");
	this.shape_3.setTransform(414.6,128.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9E9E9F").s().p("AgLgDIAFgIQALAHAHALIgIAFQgFgJgKgGg");
	this.shape_4.setTransform(457.35,130.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9E9E9F").s().p("AgEFbIAAgeIAJAAIAAAegAgEEoIAAgeIAJAAIAAAegAgED1IAAgeIAJAAIAAAegAgEDCIAAgfIAJAAIAAAfgAgECPIAAgfIAJAAIAAAfgAgEBcIAAgfIAJAAIAAAfgAgEApIAAgfIAJAAIAAAfgAgEgJIAAgfIAJAAIAAAfgAgEg8IAAgfIAJAAIAAAfgAgEhwIAAgeIAJAAIAAAegAgEijIAAgeIAJAAIAAAegAgEjWIAAgeIAJAAIAAAegAgEkJIAAgeIAJAAIAAAegAgEk8IAAgeIAJAAIAAAeg");
	this.shape_5.setTransform(458.875,172.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9E9E9F").s().p("AgLAEQAKgGAFgJIAIAFQgGALgMAHg");
	this.shape_6.setTransform(457.35,214.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9E9E9F").s().p("AFIAFIAAgJIAeAAIAAAJgAEXAFIAAgJIAeAAIAAAJgADmAFIAAgJIAeAAIAAAJgAC1AFIAAgJIAeAAIAAAJgACEAFIAAgJIAeAAIAAAJgABTAFIAAgJIAeAAIAAAJgAAiAFIAAgJIAeAAIAAAJgAgOAFIAAgJIAdAAIAAAJgAg/AFIAAgJIAeAAIAAAJgAhwAFIAAgJIAeAAIAAAJgAihAFIAAgJIAeAAIAAAJgAjSAFIAAgJIAeAAIAAAJgAkDAFIAAgJIAeAAIAAAJgAk0AFIAAgJIAeAAIAAAJgAllAFIAAgJIAeAAIAAAJg");
	this.shape_7.setTransform(414.575,215.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9E9E9F").s().p("AgLgGIAIgFQAGAKAJAFIgFAIQgMgHgGgLg");
	this.shape_8.setTransform(371.8,214.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9E9E9F").s().p("AgEFbIAAgeIAJAAIAAAegAgEEoIAAgeIAJAAIAAAegAgED1IAAgfIAJAAIAAAfgAgEDCIAAgfIAJAAIAAAfgAgECPIAAgfIAJAAIAAAfgAgEBcIAAgfIAJAAIAAAfgAgEApIAAgfIAJAAIAAAfgAgEgJIAAgfIAJAAIAAAfgAgEg8IAAgfIAJAAIAAAfgAgEhwIAAgeIAJAAIAAAegAgEijIAAgeIAJAAIAAAegAgEjWIAAgeIAJAAIAAAegAgEkJIAAgeIAJAAIAAAegAgEk8IAAgeIAJAAIAAAeg");
	this.shape_9.setTransform(370.3,172.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9E9E9F").s().p("AgLAHQAHgLALgHIAFAIQgJAFgGAKg");
	this.shape_10.setTransform(371.8,130.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AmHGyQgVAAgPgPQgPgPAAgVIAAr9QAAgVAPgPQAPgPAVAAIMPAAQAVAAAPAPQAPAPAAAVIAAL9QAAAVgPAPQgPAPgVAAg");
	this.shape_11.setTransform(414.575,172.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009FE8").s().p("AgnBiQgYAAgRgRQgRgRAAgYIAAhPQAAgYARgRQARgRAYAAIBPAAQAYAAARARQARARAAAYIAABPQAAAYgRARQgRARgYAAgAhHhGQgMANAAASIAABPQAAASAMANQAOANASAAIBPAAQASAAAOgNQAMgNAAgSIAAhPQAAgSgMgNQgNgNgTAAIhPAAQgTAAgNANg");
	this.shape_12.setTransform(136.4,189.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnBbQgVAAgPgPQgPgPAAgVIAAhPQAAgVAPgPQAPgPAVAAIBPAAQAVAAAPAPQAPAPAAAVIAABPQAAAVgPAPQgPAPgVAAg");
	this.shape_13.setTransform(136.4,189.075);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_42, rect = new cjs.Rectangle(126.6,128.4,332.8,87.9), [rect]);


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
	mask.graphics.p("AnZAEIAAgHIOyAAIAAAHg");
	mask.setTransform(47.35,0.35);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C1715").s().p("AnZAEIAAgHIOyAAIAAAHg");
	this.shape.setTransform(47.35,0.35);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_41, rect = new cjs.Rectangle(0,0,94.7,0.7), [rect]);


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
	mask.graphics.p("EgovA5lMAAAhzJMBRfAAAMAAABzJg");
	mask.setTransform(260.775,368.5);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF6E17").s().p("AkOA3QgcABgUgUQgTgUgBgbIAAgrQABAaATAUQAVASAbAAIIdAAQAcAAAUgSQATgUAAgaIAAArQAAAbgTAUQgUAUgcgBg");
	this.shape.setTransform(431.3,342.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD7524").s().p("AibA3QgSAAgPgJIAJhKQBPAPBKAAQB2AABhgpIAAASQgJAJAAAOIAAA8IABAIg");
	this.shape_1.setTransform(419.8,363.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EB8D31").s().p("AhyD4IgBgIIAAg9QAAgOAKgJIAAhhIgDAAIgKgBIgIgCIgMgGIgGgGIgHgJIgDgFIgDgIIAChcIAGgGIAEgFIACgCIAIgFIAGgEIACgBIAKgCIAJgBIAiAAQADgJAHgFIAAgvQgGgFgEgJIgCgJIAAgKQAAgQAQgIIAAghICWAAQAcAAAUATQATAVAAAbIAAFpQAAAbgTAVQgUATgcAAg");
	this.shape_2.setTransform(449.4,343.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EB8D31").s().p("AkOD4QgcAAgUgTQgTgVgBgbIAAlpQABgbATgVQAUgTAcAAIIdAAQAcAAAUATQATAVAAAbIAAFpQAAAbgTAVQgUATgcAAg");
	this.shape_3.setTransform(431.3,343.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AA5622").s().p("AByA7IAAhNQAAgIgGgFQgHgFgIAAIi5AAQgJAAgGAFQgGAFAAAIIAABNIgVAAIAAhfQAAgKAHgGQAHgGAKAAIDcAAQALAAAHAGQAHAGAAAKIAABfg");
	this.shape_4.setTransform(432.625,316.625);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_40, rect = new cjs.Rectangle(397.5,310.7,67.7,57.9), [rect]);


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
	mask.graphics.p("EgovA5lMAAAhzJMBRfAAAMAAABzJg");
	mask.setTransform(260.775,368.5);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#21B2A5").s().p("AgRAYQgHAAgBgHIABAAIAjAAQAEAAACgCQACgDAAgDIAAggQAHACAAAGIAAAfQAAAIgIAAg");
	this.shape.setTransform(412.325,346.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#63C1BF").s().p("AgRAYQgIAAAAgIIAAgfQAAgIAIAAIAjAAQAIAAAAAIIAAAfQAAAIgIAAg");
	this.shape_1.setTransform(412.325,346.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghAuQgGAAgFgFQgFgFABgHIAAg5QgBgHAFgFQAFgFAGAAIBCAAQAHAAAEAFQAFAFABAHIAAA5QgBAHgFAFQgEAFgHAAg");
	this.shape_2.setTransform(412.35,346.525);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_39, rect = new cjs.Rectangle(407.4,342,9.9,9.2), [rect]);


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
	mask.graphics.p("EgovA5lMAAAhzJMBRfAAAMAAABzJg");
	mask.setTransform(260.775,368.5);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C2601A").s().p("AgrAWIgBAAIgHgJIgDgGIgDgHIAAgWIAWAAIAAAKQgBALAIAHQAHAHALABIBDAAIAAAAIgdAAQgIAAgDAIg");
	this.shape.setTransform(439.4,346.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D36620").s().p("AgSA9IgCgIIAAg8QAAgPAKgJIAAgSIAVgLIAAAdQAAAKAJACIgGAAQgFAAgEADQgDAEAAAFIAAA8QAAAEADAEg");
	this.shape_1.setTransform(439.85,362.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DD7A2A").s().p("AgIByIgDAAIgMgBIgGgCIgLgGIgGgFIA8AAIAAAEIAABOIgWALgAg7A3IABhGIAHgGIADgFIACgCIAIgFIAHgEIABgBIAKgCIAJgBIAhAAQADgJAHgFIAAgvQgGgFgEgJIgBgJIAAgKQAAgQAPgIIAAghIAXAAIAAAvIABAFIgIAAQgIgBAAAGIAAAKQAAAHAKgBIABAAIAABQIgBAAQgEAAgDABQgDACAAADIAAALQAAAAAAABQAAAAABABQAAAAABABQAAAAABAAIg8AAQgKABgHAIQgIAHAAAKIAAAwg");
	this.shape_2.setTransform(439.65,338.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C55D1A").s().p("ABYAdQgsgMgvAAQgvAAgtAMIgDABQgFAAgEgDQgEgEgBgFIAAgBIAAgBIAGACIADgBQAsgMAwAAQAvAAAsAMIADABQAFAAAEgDQAEgEABgFIAIgcIAAgHQAFADACAFQACAFgBAFIAAAAIAAAAIAAABIgIAcQgDAMgLAAg");
	this.shape_3.setTransform(433.0417,311.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CF6E17").s().p("ABcAlQhcgZhbAZQgFACgFgDQgFgEgCgGIgIgcQgBgHADgFQADgGAGgCQBpgdBqAdQAGACADAGQAEAFgCAHIgIAcQgCAGgFAEQgDACgEAAIgDgBg");
	this.shape_4.setTransform(432.6364,311.0375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#21B2A5").s().p("AgRAYQgHAAgBgHIABAAIAjAAQAEAAACgCQACgDAAgDIAAggQAHACAAAGIAAAfQAAAIgIAAg");
	this.shape_5.setTransform(450.125,346.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#63C1BF").s().p("AgRAYQgDAAgDgCQgCgCAAgEIAAgfQAAgEACgCQADgCADAAIAjAAQAIAAAAAIIAAAfQAAAIgIAAg");
	this.shape_6.setTransform(450.125,346.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggAuQgHAAgFgFQgFgFAAgHIAAg5QAAgHAFgFQAFgFAHAAIBBAAQAHAAAFAFQAFAFAAAHIAAA5QAAAHgFAFQgFAFgHAAg");
	this.shape_7.setTransform(450.125,346.525);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_38, rect = new cjs.Rectangle(420.9,307.3,34.2,61.4), [rect]);


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
	mask.graphics.p("EgovA5lMAAAhzJMBRfAAAMAAABzJg");
	mask.setTransform(260.775,368.5);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C02827").s().p("AjPAMQgEAAgDgDQgDgDAAgEIAAgNIGzAAIAAANQAAAEgDADQgDADgFAAg");
	this.shape.setTransform(467.325,323.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD4241").s().p("AjPAkQgEAAgDgDQgDgDAAgEIAAgzQAAgEADgDQADgDAEAAIGeAAQAFAAADADQADADAAAEIAAAzQAAAEgDADQgDADgFAAg");
	this.shape_1.setTransform(467.325,321.125);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_37, rect = new cjs.Rectangle(445.6,317.5,43.6,7.3), [rect]);


(lib.ClipGroup_36 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#C02827").s().p("AjvAPQgFAAgEgEQgDgDAAgGIAAgQIH3AAIAAAQQAAAGgDADQgEAEgFAAg");
	this.shape.setTransform(466.225,359.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD4241").s().p("AjvBCQgFAAgEgEQgDgDAAgGIAAhqQAAgFADgDQAEgDAFgBIHfAAQAFABAEADQADADAAAFIAABqQAAAGgDADQgEAEgFAAg");
	this.shape_1.setTransform(466.225,354.05);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_36, rect = new cjs.Rectangle(441,347.5,50.4,13.1), [rect]);


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
	mask.graphics.p("EgovA5lMAAAhzJMBRfAAAMAAABzJg");
	mask.setTransform(260.775,368.5);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2FB5AA").s().p("AjvAOQgFAAgEgDQgDgDAAgFIAAgQIH3AAIAAAQQAAAFgDADQgEADgEAAg");
	this.shape.setTransform(465.25,367.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#63C1BF").s().p("AjvAqQgFAAgEgDQgDgEAAgEIAAg8QAAgFADgEQAEgDAFAAIHgAAQAEAAAEADQADAEAAAFIAAA8QAAAEgDAEQgEADgEAAg");
	this.shape_1.setTransform(465.25,364.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C02827").s().p("AhFARQgJAAAAgJIAAgPQAAgJAJAAICLAAQAEAAACADQADADAAADIAAAPQAAAEgDACQgCADgEAAg");
	this.shape_2.setTransform(463.8,353.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C02827").s().p("AghARQgDAAgDgDQgCgDAAgDIAAgPQAAgDACgDQADgDADAAIBDAAQAIAAAAAJIAAAPQAAAJgIAAg");
	this.shape_3.setTransform(448.075,353.475);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_35, rect = new cjs.Rectangle(440.1,351.8,50.4,17.1), [rect]);


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
	this.shape.graphics.f("#EBC03D").s().p("Ai/ALQgKAAAAgGIAAgJQAAgGAIAAIGCAAQAJAAAAAGIAAAJQAAAGgLAAg");
	this.shape.setTransform(464.25,325.25);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_34, rect = new cjs.Rectangle(444.1,324.2,40.4,2.2), [rect]);


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
	mask.graphics.p("EgovA5lMAAAhzJMBRfAAAMAAABzJg");
	mask.setTransform(260.775,368.5);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBC03D").s().p("AjBALQgIAAAAgFIAAgKQAAgCADgCQADgCAEAAIF+AAQAEAAAEACQADACAAACIAAAKQAAAFgJAAg");
	this.shape.setTransform(464.25,335.35);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_33, rect = new cjs.Rectangle(444.1,334.3,40.4,2.2), [rect]);


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
	this.shape.graphics.f("#D39526").s().p("AgOAFIAAgKIAdAAIAAAGQAAAEgJAAg");
	this.shape.setTransform(482.975,335.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DFA830").s().p("AgOAFIAAgJIASAAQAEAAAEABQADACAAACIAAAEg");
	this.shape_1.setTransform(482.975,334.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFDBC7").s().p("AgCALQAHAAAAgFQAAAFgCAAgAACgIQgCgCgEAAIAHAAQACAAAAAGQAAgCgDgCg");
	this.shape_2.setTransform(483.95,335.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D39526").s().p("AgOAEIAAgHIAUAAQAJAAAAAEIAAADg");
	this.shape_3.setTransform(482.975,324.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DFA830").s().p("AgOAHIAAgNIAdAAIAAAHQAAAGgLAAg");
	this.shape_4.setTransform(482.975,325.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFDBC7").s().p("AgEADQAJAAAAgFQAAAFgCAAg");
	this.shape_5.setTransform(483.975,326.0625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B72422").s().p("AgBAAIAAgCIABAAQABAAABAFQgBgDgCAAg");
	this.shape_6.setTransform(484.3,324.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E1B638").s().p("AgLAFQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAgFIAdAAIAAAJg");
	this.shape_7.setTransform(445.575,335.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EBCA45").s().p("AgOAFIAAgEQAAgCADgCQADgBAEAAIATAAIAAAJg");
	this.shape_8.setTransform(445.575,334.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E1B638").s().p("AgOAEIAAgDQAAgEAIAAIAVAAIAAAHg");
	this.shape_9.setTransform(445.575,324.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EBCA45").s().p("AgEAHQgKAAAAgGIAAgHIAdAAIAAANg");
	this.shape_10.setTransform(445.575,325.675);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_32, rect = new cjs.Rectangle(444.1,324.2,40.4,12.3), [rect]);


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
	mask.graphics.p("EgovA5lMAAAhzJMBRfAAAMAAABzJg");
	mask.setTransform(260.775,368.5);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#63C1BF").s().p("AirA3QgMAAgHgIQgIgHAAgMIAAg4QAAgLAIgIQAHgIAMAAIFyABIAABug");
	this.shape.setTransform(455.7,341.925);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_31, rect = new cjs.Rectangle(435.8,336.4,39.9,11.1), [rect]);


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
	this.shape.graphics.f("#2FB5AA").s().p("AisAKQgJAAgIgGQgGgFgDgIIGNAAIAAATg");
	this.shape.setTransform(455.75,346.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhbAjQgHAAAAgHIAAg3QABgHAGAAIC+AAIAABFg");
	this.shape_1.setTransform(477.4,341.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2FB5AA").s().p("AhcA4QgLAAgIgIQgIgIAAgLIAAg4QABgMAHgIQAIgIALABIDMAAQADAAADACQACACAAADIAAAGQAAADgCADQgDACgDAAIjMgBIAABFIDMAAQAIAAAAAHIAAAHQAAAHgIAAg");
	this.shape_2.setTransform(477.45,341.9485);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6CC4C6").s().p("ABDAGIAAgLICCAAIAAALgAAHAGIAAgLIATAAIAAALgAjFAGQAJgLANAAICOAAIAAALg");
	this.shape_3.setTransform(455.9,336.975);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_30, rect = new cjs.Rectangle(435.9,336.4,53.6,11.1), [rect]);


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
	mask.graphics.p("EgovA5lMAAAhzJMBRfAAAMAAABzJg");
	mask.setTransform(260.775,368.5);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#63C1BF").s().p("AgNChIgbgFQgIgBABgIIA0kzIArAIIg0EyQAAADgDACQAAABgBAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgCAAg");
	this.shape.setTransform(397.1944,359.4393);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_29, rect = new cjs.Rectangle(392.4,343.4,9.6,32.2), [rect]);


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
	this.shape.graphics.f("#43B9B0").s().p("AgCAPIgHgBIAFgcIAOADIgDATQgBADgDACQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAIgCAAg");
	this.shape.setTransform(396.05,374.0393);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E7E9").s().p("AgGAjIgHgBIANhEIANACIgKA9QAAADgDACQgBABgDAAIgCAAg");
	this.shape_1.setTransform(396.4,371.98);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#43B9B0").s().p("AgbCeIgHgBIA2k7IAPADIg0EzQgBADgCACIgEACIgDgBg");
	this.shape_2.setTransform(398.525,359.6667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#63C1BF").s().p("AAKARIgZgEQgIgCABgIIADgTIAqAHIgDAUQgBADgCACQgDABgCAAIgCAAg");
	this.shape_3.setTransform(394.7194,373.78);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAHAlIgagEQgIgCABgIIALg8IAqAHIgLA8QAAAEgDACQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAIgCgBg");
	this.shape_4.setTransform(395.0694,371.7643);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_28, rect = new cjs.Rectangle(392.4,343.8,9.6,31.8), [rect]);


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
	mask.graphics.p("EgovA5lMAAAhzJMBRfAAAMAAABzJg");
	mask.setTransform(260.775,368.5);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB8D31").s().p("AgNCEIgNkIIAogCIANEIQAAABAAABQgBAAAAABQAAAAgBAAQgBAAAAAAIghACIgCAAQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAgBg");
	this.shape.setTransform(385.825,359.8111);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_27, rect = new cjs.Rectangle(383.2,346.3,5.4,27), [rect]);


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
	this.shape.graphics.f("#E66D33").s().p("AgLiFIAKAAIANEIQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAIgIABg");
	this.shape.setTransform(387.35,359.75);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_26, rect = new cjs.Rectangle(386.2,346.3,2.3,26.9), [rect]);


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
	mask.graphics.p("EgovA5lMAAAhzJMBRfAAAMAAABzJg");
	mask.setTransform(260.775,368.5);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E66D33").s().p("AgBAIQADgEgBgEIAAgKIAIgBIAAAKQAAAFgDADQgEAEgEAAIgGABQAEgBADgDg");
	this.shape.setTransform(387.325,374.3125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB8D31").s().p("AgLAJQgEgEgBgFIAAgJIAhgCIAAAKQAAAFgDADQgEAEgFAAIgIABIgBAAQgEAAgDgDg");
	this.shape_1.setTransform(386.525,374.3281);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_25, rect = new cjs.Rectangle(384.8,373.2,3.4,2.4), [rect]);


(lib.ClipGroup_24 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EBC03D").s().p("AhtAPQgFAAgDgDQgEgDAAgFIAAgIQAAgEAEgDQADgDAFgBIDbAAQAFABADADQAEADAAAEIAAAIQAAAFgEADQgDADgFAAg");
	this.shape.setTransform(391.875,354.35);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_24, rect = new cjs.Rectangle(379.7,352.8,24.4,3.1), [rect]);


(lib.ClipGroup_23 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#DFA830").s().p("AhKBtIAAgBIgEgiQAzgfAbguQAXgnAJg2IiFAAIgBgMIDNAAIgcDZg");
	this.shape.setTransform(392.025,366.825);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_23, rect = new cjs.Rectangle(381.7,355.9,20.7,21.9), [rect]);


(lib.ClipGroup_22 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EBC03D").s().p("AhtAPQgFAAgDgDQgEgDAAgFIAAgIQAAgEAEgDQADgDAFgBIDbAAQAFABADADQAEADAAAEIAAAIQAAAFgEADQgDADgFAAg");
	this.shape.setTransform(391.875,354.35);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_22, rect = new cjs.Rectangle(379.7,352.8,24.4,3.1), [rect]);


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
	mask.graphics.p("EgovA5lMAAAhzJMBRfAAAMAAABzJg");
	mask.setTransform(260.775,368.5);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#60B79C").s().p("ArRAXQgCgCAAgEIACgEIAFgCQADAAACACQACABAAADQAAAEgCACQgCACgDAAQgCAAgDgCgALIgBQgCgCAAgDQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAADgCACQgCABgDAAQgDAAgCgBgAC8gBQgCgCAAgDQAAgDACgCQACgCADAAQADAAACACIACAFIgCAFQgCABgDAAQgDAAgCgBgAnOgMIgCgEQAAgEACgCQACgCACAAQAEAAACACQABACAAAEQAAADgBABQgCACgEAAIgEgCg");
	this.shape.setTransform(377.8,236.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#60B79C").s().p("AjxAPQgBgDACgCQACgDADAAQACgBADACQACABABADQABAHgHACIgCAAQgFAAgBgGgADpARQgGgCACgHQACgHAHACQAGACgCAHQgBAFgFAAIgDAAgAjWAKQgBgHAHgCQAHgBABAHQABADgCADQgBACgDAAIgDABQgEAAgCgGgAi6AFQgBgGAHgBQAHgBABAGQAAADgBACQgCACgDABIgCAAQgFAAgBgGgADPAKQgDgBgBgDQgCgCABgDQACgGAGACQADABABACQACACgBACQAAADgDACIgDABIgCAAgAieABQgBgCACgDQACgCADAAQACgBADACQACACABADQABAGgHABIgCAAQgGAAAAgGgAC0AEQgHgCABgFQABgDACgCQADgBACAAQAHABgBAHQgBAGgGAAIgBgBgAiDgCQAAgDACgCQACgCACgBQAHgBABAHQABAGgHABIgCABQgFAAgBgGgAhngFQAAgHAGgBQAHgBABAIQAAAGgGAAIgCABQgGAAAAgGgACZAAQgHAAABgHQABgHAHABQAHABgBAHQgBAFgGAAIgBAAgAhLgIQgBgDACgCQACgCADAAQADgBADACQACACAAADQAAADgCACQgCACgDABIgBAAQgGAAAAgHgAB9gCQgHgBABgHQABgHAHABQACAAACACQACACAAADQAAADgCACQgBABAAAAQgBAAgBABQAAAAgBAAQAAAAgBAAIgBAAgAgvgKQgBgDACgCQACgCADAAQAHgBABAHQAAAHgHABQgHAAAAgHgABbgMQABgHAGAAQAHABAAAHQgBAHgGAAQgHgBAAgHgAgUgMQAAgGAHgBQAHAAABAHQAAAGgHABQgHAAgBgHgABBgIQgCgCAAgDQAAgHAHAAQAHAAAAAIQAAAGgHAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgAAHgNQAAgHAHAAQADAAACACQABABAAAAQAAABABABQAAAAAAABQAAAAAAABQABADgCACQgDACgCAAQgIAAAAgHgAAjgNQAAgHAHAAQAHAAAAAHQAAAHgHAAQgHAAAAgHg");
	this.shape_1.setTransform(423.3435,233.6063);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#60B79C").s().p("ABAAMQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAAHgHAAQgHAAAAgHgABeARQgCgCAAgDQAAgDACgCQACgCADAAQAHAAAAAHQAAAHgHAAIgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAgAB5AMQAAgHAHgBQAHAAAAAHQAAAIgHAAQgHAAAAgHgAAjAMQAAgHAIAAQAHAAAAAHQAAAHgIAAQgHAAAAgHgAAHALQABgHAGAAQAHAAAAAHQAAAHgHAAQgHAAAAgHgACVALQAAgDACgCQACgCADAAQAHAAAAAHQAAAHgHAAQgHAAAAgHgAgUAKQAAgHAHAAQAHABAAAHQAAAHgIAAQgHgBABgHgACxAKQAAgHAHAAQAHgBABAHQAAAIgHAAQgHAAgBgHgAgxAJQAAgHAIAAQAGABAAAHQAAAHgHAAQgHgBAAgHgADOAJQAAgHAGgBQAHAAABAHQAAAGgHABQgGAAgBgGgAhNAIQAAgDACgCQACgCADAAQADAAACADQACACAAADQAAAGgIAAQgGAAAAgHgAhqAGQABgGAHAAQAHAAAAAHQgBAHgHAAQgHgBAAgHgADqAHQgBgHAIAAQAHAAAAAFQABADgCADQgCACgDAAIgCAAQgFAAgBgGgAh/AMQgDAAgCgCQgCgDAAgDQAAgDADgBQACgCADABQAGAAAAAGQgBAHgFAAIgBAAgAEJAJQgCgCAAgDQgBgGAHgBQAHgBABAGQABAHgIABIgBAAQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAgBAAgAicAKQgDgBgCgCQgCgCABgDQAAgCACgCQACgCADABQADAAACACQACABAAADQgBAHgFAAIgCAAgAi4AHQgIgBABgGQABgHAHABQAHABgBAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgBAAgAEjAAQgBgBACgDQACgCADgBQAHgBABAHQABAGgHABIgCAAQgFAAgBgGgAjVAFQgHgBABgGQAAgHAIABQADAAACACQACACgBADQgBAGgFAAIgCAAgAjxACQgHgBABgGQABgHAHABQAHAAgBAHQgBAGgFAAIgCAAgAkNgBQgHgBABgHQABgHAHABQACABACACQACACAAADQgBAGgGAAIgBAAgAkqgEQgCgBgCgCQgCgDAAgCQABgDACgCQADgCACABQADAAACACQACADgBADQgBAGgFAAIgCAAg");
	this.shape_2.setTransform(364.5263,236.12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#60B79C").s().p("AhrAUQgDgBgBgDQgCgCABgDQAAgDADgBQACgCADABQADAAABADQAEAGgGADQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgCAAgAhUAHQgDgBgBgDQgCgFAGgDQAIgCABAGQADAFgHADIgCABIgDgBgAg+gEQgBgHAGgCQADAAADABQACACABADQABAGgHABIgBABQgFAAgCgFgABpAAQgHAAABgHQABgHAHABQAHABgBAHQgBAFgFAAIgCAAgABPgCQgIgBABgHQABgHAHABQAHABgBAGQgBAHgFAAIgBAAgAgjgJQgBgDACgDQACgCADAAQAHgBABAHQAAADgCADQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAIgCAAQgFAAgBgGgAAvgGQgCgDAAgDQAAgDADgCQACgCADABQAGAAAAAHQAAAHgHAAQgDAAgCgCgAgIgMQAAgGAHgBQAGAAAAAHQABAGgHABQgHAAAAgHgAAUgHQgCgDAAgCQAAgHAHAAQAHAAAAAHQAAAHgHAAQgDAAgCgCg");
	this.shape_3.setTransform(318.6146,234.805);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#60B79C").s().p("ArVAXQgCgCAAgEQAAgCACgCQACgCADAAIAFACIACAEQAAAEgCACQgCACgDAAQgDAAgCgCgALMgBQgCgDAAgCQAAgCACgDQACgCADAAQADAAACACIACAFQAAACgCADQgCABgDAAQgDAAgCgBgAC9gBIgCgFIACgFQACgCADAAQADAAACACQACACAAADQAAADgCACQgCABgDAAQgDAAgCgBgAnRgMIgCgEQAAgEACgCQACgCADAAQADAAACACQACACAAAEQAAACgCACQgCACgDAAIgFgCg");
	this.shape_4.setTransform(132.075,236.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#60B79C").s().p("AjzAPQAAgDACgCQABgDADAAQADgBACACQADABAAADQACAHgHACIgCAAQgFAAgCgGgADrARQgHgCACgHQACgHAHACQACABACADQABACgBADQgBAFgEAAIgDAAgAjXAKQgBgHAHgCQAHgBABAHQACAHgIABIgCABQgFAAgBgGgAi5AKQgCgCAAgDQgBgGAHgBQACgBADACQACABABADQABAHgHABIgCAAIgEgBgADQAKQgDgBgBgDQgCgCABgDQACgGAGACQAHABgCAGQAAADgDACIgDABIgCAAgAigABQgBgGAIgBQAGgBACAHQABAGgIABIgBAAQgFAAgCgGgAC1AEQgHgCABgFQABgIAHACQAHABgBAHQgBAGgFAAIgCgBgAiEgCQgBgHAIgBQACAAADACQACACAAACQABAGgHABIgBABQgGAAgBgGgAhogFQAAgDACgCQACgCADgBQAGgBABAIQABAGgHAAIgCABQgFAAgBgGgACZAAQgHAAABgHQABgHAHABQAHABgBAHQgBAFgFAAIgCAAgAhJgDQgDgCAAgDQAAgDACgCQACgCADAAQAGgBABAHQABAHgHABIgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBgAB+gCQgHgBAAgHQABgHAHABQAHAAAAAHQgBAHgGAAIgBAAgAgwgKQAAgDACgCQACgCADAAQADgBACACQACACAAADQABAHgHABQgIAAAAgHgABbgMQABgHAHAAQAHABAAAHQgBAHgHAAQgHgBAAgHgAgUgMQgBgGAIgBQAHAAAAAHQAAAGgGABQgIAAAAgHgABGgGQgHAAAAgHQAAgHAIAAQADAAACADQACACgBADQAAADgCACQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgCgBgAAHgNQAAgHAHAAQADAAACACQABABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAAHgHAAQgHAAAAgHgAAjgNQAAgHAHAAQAHAAAAAHQAAAHgHAAQgHAAAAgHg");
	this.shape_5.setTransform(177.865,233.6063);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#60B79C").s().p("ABAAMQAAgDACgCQACgCADAAQAHAAAAAHQAAAHgHAAQgHAAAAgHgABfARQgCgCAAgDQAAgDACgCQACgCADAAQAHAAAAAHQAAAHgHAAIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgAB5AMQAAgHAHgBQAHAAABAHQAAAIgHAAQgIAAAAgHgAAkAMQAAgHAHAAQAHAAAAAHQAAAHgHAAQgHAAAAgHgAAJAQQgCgCAAgDQAAgHAHAAQADAAACACQACADAAACQAAAHgHAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBgBgACWALQAAgDACgCQACgCADAAQAGAAABAHQAAAHgHAAQgGAAgBgHgAgVAKQABgHAHAAQAHABAAAHQAAAHgIAAQgHgBAAgHgACzAKQgBgDACgCQACgCADAAQAHgBABAHQAAAIgHAAQgHAAAAgHgAgxAJQABgHAGAAQAHABAAAHQgBAHgGAAQgHgBAAgHgADPAJQgBgHAIgBQAGAAABAHQAAAGgGABQgIAAAAgGgAhOAIQABgIAHABQADAAACADQACACgBADQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgDAAQgHAAAAgHgAhqAGQABgGAGAAQADAAACACQACACAAADQAAAHgIAAQgGgBAAgHgADuALQgCgCAAgCQgBgHAHAAQAHAAABAFQAAADgCADQgCACgDAAIgBAAQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAAAgBgBgAiAAMQgDAAgCgCQgCgDAAgDQABgGAHABQADAAACABQACACgBADQAAADgCACQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgBAAgAELAJQgDgCAAgDQgBgGAHgBQAHgBABAGQABAHgHABIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAidAKQgDgBgCgCQgCgCABgDQABgGAGABQADAAACACQACABAAADQAAADgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgBAAgAi5AHQgIgBABgGQABgHAHABQAHABgBAGQAAADgCACQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgBAAgAEkAAQAAgBACgDQABgCADgBQAHgBABAHQABACgCADQgCACgDAAIgBAAQgFAAgCgGgAjWAFQgHgBABgGQABgHAHABQACAAACACQACACAAADQAAACgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgBAAgAjyACQgHgBAAgGQABgHAHABQAHAAAAAHQgBAGgGAAIgBAAgAkPgBQgHgBABgHQABgCACgCQACgCADAAQAHABgBAHQgBAGgFAAIgCAAgAkrgEQgDgBgCgCQgCgDABgCQABgHAHABQAHABgBAHQgBAGgGAAIgBAAg");
	this.shape_6.setTransform(118.7263,236.1188);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#60B79C").s().p("AhwAQQgCgCABgDQABgDACgBQAGgFAEAHQABACAAADQAAADgDABIgEACQgDAAgDgEgAhYADQgDgFAHgDQAHgCACAGQADAFgHADIgDABQgFAAgBgFgAg7AAQgDgCAAgCQgBgHAGgCQADAAADABQACACAAADQACAGgGABIgCABIgEgBgABqAAQgHAAABgHQABgHAHABQAHABgBAHQgBAFgFAAIgCAAgABPgCQgHgBABgHQABgHAHABQADAAABACQACADAAACQAAADgDACIgEACIgBAAgAgjgJQgBgHAHgBQAHgBABAHQABADgDADQgBACgEAAIgBAAQgGAAAAgGgAAugMQABgHAGABQAHAAAAAHQgBAHgHAAQgGAAAAgIgAgIgMQAAgGAHgBQAGAAAAAHQABAGgHABQgHAAAAgHgAATgMQAAgHAGAAQAIAAgBAHQABAHgIAAQgGAAAAgHg");
	this.shape_7.setTransform(72.55,234.805);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_21, rect = new cjs.Rectangle(59.3,231.5,391,7.3), [rect]);


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

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqAyQgRAAAAgRIAAhBQAAgRARAAIBVAAQARAAAAARIAABBQAAARgRAAg");
	this.shape.setTransform(31.1188,26.9841,1.0997,1.0997);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_1.setTransform(19.716,27.2091,1.0807,1.2628);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_2.setTransform(19.716,27.2091,1.0807,1.2628);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(6,1,2).p("AC9i8QBOBOAABuQAABdg5BHQgKAMgLAMQhOBPhvAAQhSAAhCgtQgVgPgTgTQgMgMgJgMQgIgJgGgKQgCgEgDgDQgmg+AAhMQAAhuBOhOQA9g9BQgNQAXgEAYAAQBvAABOBOg");
	this.shape_3.setTransform(26.675,26.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AiUDeQgVgPgTgTQgMgMgJgMIgOgTIgFgHQgmg+AAhMQAAhuBOhOQA9g9BQgNQAXgEAYAAQBvAABOBOQBOBOAABuQAABdg5BHIgVAYQhOBPhvAAQhSAAhCgtg");
	this.shape_4.setTransform(26.675,26.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件2, rect = new cjs.Rectangle(-3,-3,59.4,59.4), [rect]);


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

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqAyQgRAAAAgRIAAhBQAAgRARAAIBVAAQARAAAAARIAABBQAAARgRAAg");
	this.shape.setTransform(21.2188,26.9841,1.0997,1.0997);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_1.setTransform(33.934,27.3859,1.0807,1.2625,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_2.setTransform(33.934,27.3859,1.0807,1.2625,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(4,1,1).p("Ai7i8QhPBPAABtQAABdA5BHQAKAMAMAMQBOBPBuAAQBTAABBgtQAVgOATgUQAMgMAKgMQAHgJAHgKQACgDADgEQAlg+AAhMQAAhthOhPQg9g9hQgNQgXgEgYAAQhuAAhOBOg");
	this.shape_3.setTransform(26.65,26.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("Ai7C8IgWgYQg4hHgBhdQAAhuBPhOQBNhOBvAAQAXABAYADQBQAOA9A8QBOBOgBBuQABBMgmA+IgEAHIgOATIgWAYQgTATgVAOQhBAuhTgBQhvABhNhPg");
	this.shape_4.setTransform(26.65,26.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件1, rect = new cjs.Rectangle(-2,-2,57.3,57.3), [rect]);


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
	this.shape_7.graphics.f("#FF0000").s().p("ADWBoIAAiWIAYAAIAACWgACMBoIAAhgQAAgLgDgIQgCgIgGgEQgGgFgMAAQgJAAgKACQgJACgHAHQgGAGgFAMIAABnIgYAAIAAiWIAYAAIAAAVQAFgJAHgGQAIgFAKgCQAJgCAJAAQAUAAALAGQALAGAFALQAEAMAAAOIAABogAghBoIAAiWIAYAAIAACWgAh2BoIhfiqIgBAAIAACqIgaAAIAAjCIAoAAIBYChIADAAIAAihIAYAAIAADCgADihKQgIAAgDgDQgEgCAAgJQAAgKAEgCQADgDAIAAQAIAAADADQAEACAAAKQAAAJgEACQgDADgGAAIgCAAgAgVhKQgIAAgDgDQgEgCABgJQgBgKAEgCQADgDAIAAQAIAAADADQADACAAAKQAAAJgDACQgDADgGAAIgCAAg");
	this.shape_7.setTransform(-214.35,-167.3286);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhTCXIDlkSYAJgLgCgPgKgJYgLgJgOABgJAKIj5EBYgOAPAAAYAPAOYAPAPAYAAAPgQYAAAAABgBABgB");
	this.shape_8.setTransform(-139,-98,0.6695,0.6695,0,0,0,0.7,-0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AhPgsIBWBwYAPATAbAEATgPYATgOADgcgOgTYgCgCgDgDgDgCIhvhXYgLgIgQACgJAKYgHAKABAMAGAJ");
	this.shape_9.setTransform(-150.8,-93.25,0.6695,0.6695,0,0,0,-1.2,-1.2);

	this.instance = new lib.位图42();
	this.instance.setTransform(227,-218,0.7124,0.7124);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("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");
	this.shape_10.setTransform(54.55,83.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AJBCDIgRgDIAAgUIASACIATABQAZAAAMgLQAMgMAAgZIAAgQQgEAOgMAHQgLAIgWAAQgZAAgNgKQgOgKgFgRQgGgRABgWQgBgVAGgSQAFgRAOgLQANgKAZAAQAPAAAKAEQAKAEAGAHQAFAHADAJIAAgcIAYAAIAACLQABAggSARQgSASgnAAIgTgBgAI+gxQgJAIgCANQgDANAAAPQAAAPADAMQADANAIAIQAJAHASABQASAAAKgHQAKgHAEgMQAEgNAAgRQAAgSgEgMQgEgNgKgHQgKgHgSAAQgSAAgJAIgApyBNIgQAAIgQgCIgMgCIAAgVIANADIAQACIAPABQARAAAJgFQAJgFAAgNQAAgJgCgFQgDgFgHgDQgIgEgOgDQgQgDgKgFQgJgFgEgIQgDgJAAgMQAAgTAOgLQANgLAbAAQALAAALABIAQAEIgBAUIgRgEQgJgCgLAAQgQAAgHAFQgJAFAAAMQAAAIADAEQACAEAGADIASAFQASAEAKAFQAKAFAFAJQAFAIAAAPQgBAWgOALQgOAKgaAAIgDAAgAHVBMIAAhfQAAgMgCgIQgCgIgHgEQgGgFgMAAQgJAAgJACQgJACgHAHQgHAGgFANIAABmIgYAAIAAiWIAYAAIAAAVQAFgJAIgGQAIgFAJgCQAJgCAKAAQATAAALAGQALAGAFALQAFAMgBAOIAABogAEnBMIAAiWIAYAAIAACWgADdBMIAAhfQABgSgHgJQgGgKgRAAQgJAAgHACQgIADgGAFQgGAGgDALIAABpIgYAAIAAhfQAAgSgGgJQgFgKgRAAQgJAAgIACQgHACgGAGQgGAGgEAMIAABoIgYAAIAAiWIAYAAIAAATQAHgNAMgFQALgEAOAAQASAAAKAGQALAHAFALQAFgJAHgGQAIgFAJgCQAJgCAJAAQASAAAKAGQALAGAFALQAGAMAAAOIAABogAgkBMIAAhfQABgSgHgJQgGgKgRAAQgJAAgHACQgIADgGAFQgGAGgDALIAABpIgYAAIAAhfQAAgSgGgJQgFgKgRAAQgJAAgIACQgHACgGAGQgGAGgEAMIAABoIgYAAIAAiWIAYAAIAAATQAHgNAMgFQALgEAOAAQASAAAKAGQALAHAFALQAFgJAHgGQAIgFAJgCQAJgCAJAAQASAAAKAGQALAGAFALQAGAMAAAOIAABogAknBMIAAiWIAYAAIAACWgAmOBMIgmh7IgBAAIgmB7IgeAAIgpiWIAYAAIAgB9IACAAIAlh9IAdAAIAmB9IACAAIAgh9IAYAAIgqCWgAEzhmQgHAAgEgDQgDgCAAgJQAAgKADgCQAEgDAHAAQAIAAADADQAEACAAAKQAAAJgEACQgCADgGAAIgDAAgAkbhmQgHAAgEgDQgDgCAAgJQAAgKADgCQAEgDAHAAQAIAAADADQAEACAAAKQAAAJgEACQgCADgGAAIgDAAg");
	this.shape_11.setTransform(313.1007,84.1214);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("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");
	this.shape_12.setTransform(-258.05,126.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_9,p:{x:-150.8,scaleX:0.6695,scaleY:0.6695}},{t:this.shape_8,p:{x:-139,scaleX:0.6695,scaleY:0.6695,y:-98}},{t:this.shape_7}]},9).to({state:[{t:this.shape_9,p:{x:-150.8,scaleX:0.6695,scaleY:0.6695}},{t:this.shape_8,p:{x:-138.95,scaleX:0.6695,scaleY:0.6695,y:-98}},{t:this.instance},{t:this.shape_7}]},10).to({state:[{t:this.shape_9,p:{x:-150.75,scaleX:0.6695,scaleY:0.6695}},{t:this.shape_8,p:{x:-138.95,scaleX:0.6695,scaleY:0.6695,y:-98}},{t:this.instance},{t:this.shape_10},{t:this.shape_7}]},10).to({state:[{t:this.shape_9,p:{x:-150.75,scaleX:0.6695,scaleY:0.6695}},{t:this.shape_8,p:{x:-138.95,scaleX:0.6695,scaleY:0.6695,y:-98}},{t:this.instance},{t:this.shape_10},{t:this.shape_11},{t:this.shape_7}]},10).to({state:[{t:this.shape_9,p:{x:-150.75,scaleX:0.6696,scaleY:0.6696}},{t:this.shape_8,p:{x:-138.95,scaleX:0.6696,scaleY:0.6696,y:-97.95}},{t:this.instance},{t:this.shape_10},{t:this.shape_11},{t:this.shape_12},{t:this.shape_7}]},10).wait(10));

	// 图层_1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("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");
	this.shape_13.setTransform(-228.495,-125.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#005E89").s().p("ANTCDQgVgJgLgWQgLgWgBgnQABgnALgVQALgWAWgJQAVgJAfAAQAhAAASALQASALAHATQAHATAAAZIgBAPIgBAMIh9AIQABAUANAKQAMAKAaAAQAMAAANgCIAXgFQAKgDAHgEIAAApQgJAGgUAEQgUAEgaAAIgDAAQgcAAgUgJgANmgLQgKALAAAWIBPgGQAAgLgCgHQgDgJgIgFQgHgFgPAAIgCAAQgXAAgJAKgAiXCDQgVgJgLgWQgLgWgBgnQABgnALgVQALgWAWgJQAVgJAfAAQAhAAASALQASALAHATQAHATAAAZIgBAPIgBAMIh9AIQABAUANAKQAMAKAaAAQAMAAANgCIAXgFQAKgDAHgEIAAApQgJAGgUAEQgUAEgaAAIgDAAQgcAAgUgJgAiEgLQgKALAAAWIBPgGQAAgLgCgHQgDgJgIgFQgHgFgPAAIgCAAQgXAAgJAKgAmMB/QgRgMgGgXQgHgWAAgfQAAgcAHgWQAGgWARgOQARgOAfAAQAaAAAOAIQAOAIAFANIAAhoIA0AAIAAEQIgvAAIgEgbQgGAOgOAIQgOAJgaAAQgfAAgRgNgAlmgNQgJAIgDANQgCAOAAARQAAASADAOQADAOAIAHQAJAIASAAQARAAAKgHQAKgHAEgOQAEgNgBgUQABgTgEgNQgEgNgKgIQgKgIgRAAQgSAAgJAJgAppCEQgOgHgHgOQgGgPAAgVIAAiEIA0AAIAAB2QAAATAHAJQAGAJATgBQAPABAKgHQALgGAEgPIAAh/IA0AAIAADBIgvAAIgEgXQgIAOgPAGQgPAHgWAAQgYAAgOgIgAu7CJQgTgDgMgDIAAgwQAIADAMACIAYAEIAbABQAYAAAKgGQAKgHAAgRQAAgJgEgGQgDgGgKgFQgKgFgTgEQgagGgPgIQgPgJgHgMQgGgOAAgWQABgnAXgSQAYgRAsABQAVAAAQADQARACAKAEIAAAtIgRgEIgWgEIgXgBQgVAAgKAFQgJAGAAAPQgBAJAEAFQADAFAJAEQAJAEASAEQAeAHAQAJQAPAJAGAPQAGAQAAAXQAAAkgWAUQgXATgzAAQgWAAgUgDgAEdCFQgOgGgGgOQgHgOAAgZIAAhaIgZAAIAAgpIAZAAIAAguIA1AAIAAAuIAoAAIAAApIgoAAIAABWQgBAQAFAGQAFAGANAAIAIgBIAHgBIAAApIgMABIgNAAIgEAAQgVAAgNgFgArlCFQgOgGgGgOQgHgOAAgZIAAhaIgZAAIAAgpIAZAAIAAguIA1AAIAAAuIAoAAIAAApIgoAAIAABWQgBAQAFAGQAFAGANAAIAIgBIAHgBIAAApIgMABIgNAAIgEAAQgVAAgNgFgALaCFQgMgFgFgMQgFgLAAgRIAAjgIA0AAIAADTQAAANADAFQAEAEAJAAIAFAAIAGgBIAAAoIgLACIgMAAQgVAAgNgFgAJcCIIAAjBIA0AAIAADBgAHlCIIAAiYIgeAAIAAgpIAeAAIAAgCQAAghAJgRQAKgRARgGQARgGAXAAIAMABIALABIAAAmIgIgCIgIAAQgNAAgHADQgGAEgDAJQgCAKAAARIAmAAIAAApIgmAAIAACYgACXCIIAAh3QAAgSgGgJQgHgIgTAAQgQAAgLAGQgKAGgEANIAACBIg0AAIAAjBIA0AAIAAAXQAIgNAQgHQAPgHAWAAQAYAAAOAIQAOAHAGAPQAGAOAAAUIAACFgAJkhWQgGgCgDgGQgCgGAAgMQAAgMACgGQADgGAGgBQAHgCALAAQAMAAAGACQAHABACAGQACAGAAAMQAAAMgCAGQgCAGgHACQgGACgMAAQgLAAgHgCg");
	this.shape_14.setTransform(-0.2733,-234.2287);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("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");
	this.shape_15.setTransform(-20.52,111.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#60B79C").s().p("AgjBIQgQgHgJgRQgJgSAAgeQAAgdAJgRQAJgSARgGQAQgHAXAAQAaAAAOAIQAOAJAGAPQAFAPAAATIgBALIgBAJIhgAGQABAQAKAIQAKAIATAAQAJAAAKgCIASgEQAIgCAFgDIAAAgQgHAEgQADQgPADgUAAIgDAAQgUAAgQgGgAgUgmQgIAIAAASIA9gFQAAgIgCgHQgCgHgGgEQgGgEgMAAQgRAAgIAJg");
	this.shape_16.setTransform(39.5771,3.0267);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#60B79C").s().p("ABIBNIAAhbQgBgQgFgGQgFgHgNAAQgMAAgHAFQgGAFgDAMIAABiIgoAAIAAhbQAAgQgFgGQgFgHgMAAQgMAAgHAEQgGAGgDAKIAABkIgpAAIAAiWIApAAIAAARQAFgKALgFQALgFAPAAQARAAALAGQAJAEAFALQAGgLAMgFQANgFARAAQAZAAANANQAMANAAAcIAABjg");
	this.shape_17.setTransform(18.2,2.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#60B79C").s().p("AgEBaQgMgEgEgLQgFgLAAgUIAAhFIgUAAIAAggIAUAAIAAgkIAnAAIAAAkIAgAAIAAAgIggAAIAABCQABANADAEQAEAFAKAAIAHAAIAFgBIAAAfIgKABIgKAAIgDAAQgQAAgJgEg");
	this.shape_18.setTransform(-7.3,1.3275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#60B79C").s().p("AgRBNQgTAAgLgGQgLgFgFgMQgFgLAAgQIAAhnIApAAIAABcQAAAPAFAGQAFAHAPAAQAKAAAJgFQAHgEAEgMIAAhjIApAAIAACWIglAAIgEgSQgGALgMAFQgKAFgOAAIgDAAg");
	this.shape_19.setTransform(-21.1,3.1773);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#60B79C").s().p("AAABOQgXABgQgHQgRgHgIgRQgJgSAAgeQAAgdAJgRQAIgSARgGQAQgHAXAAQAXAAARAHQARAGAIASQAJARAAAdQAAAegJASQgIARgRAHQgQAGgVAAIgDAAgAgSgrQgIAFgDAKQgCALAAARQAAASADALQADAKAHAFQAHAEALAAQAMAAAHgEQAIgFADgKQADgLgBgSQABgRgEgLQgDgKgHgFQgHgEgMAAIgBAAQgLAAgGAEg");
	this.shape_20.setTransform(-38.575,3.0267);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#60B79C").s().p("AgKBoQgJgCgFgGQgGgFgDgHIgCAVIglAAIAAjTIAoAAIAABPQAEgJALgFQALgHATAAQAYAAANAJQANAKAFASQAFAQAAAZQAAAVgFASQgFARgNALQgNALgYAAQgNgBgKgDgAgUgMQgIAFgDAKQgDALAAAQQAAAOADALQADAKAIAGQAHAGANAAQAOAAAHgHQAHgGACgKQACgLAAgNQAAgOgCgMQgDgJgHgHQgGgFgOAAQgNgBgHAGg");
	this.shape_21.setTransform(-55.825,0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#60B79C").s().p("AA4BhIgRgwIhOAAIgRAwIgsAAIBJjBIA4AAIBIDBgAAbAOIgZhJIgDAAIgaBJIA2AAg");
	this.shape_22.setTransform(-75.325,0.875);

	this.instance_1 = new lib.ClipGroup_21();
	this.instance_1.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1C1715").s().p("AwSAJIAAgRMAglAAAIAAARg");
	this.shape_23.setTransform(-258.825,141.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1C1715").s().p("Aq2AJIAAgRIVtAAIAAARg");
	this.shape_24.setTransform(313.825,100.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1C1715").s().p("AteAJIAAgRIa9AAIAAARg");
	this.shape_25.setTransform(51.8752,100.025,1.469,1);

	this.instance_2 = new lib.ClipGroup_22();
	this.instance_2.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DFA830").s().p("AhmAEIgBgHIDPAAIgBAHg");
	this.shape_26.setTransform(261.7927,247.8128,2.0706,2.0706);

	this.instance_3 = new lib.ClipGroup_23();
	this.instance_3.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.instance_4 = new lib.ClipGroup_24();
	this.instance_4.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EBC03D").s().p("AhKBxIgdjhIDPAAIgdDhg");
	this.shape_27.setTransform(261.7927,270.4345,2.0706,2.0706);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EBC03D").s().p("AhKBxIgdjhIDPAAIgdDhg");
	this.shape_28.setTransform(261.7927,270.4345,2.0706,2.0706);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1D1B1E").s().p("AgDgbIAXA0IgnADg");
	this.shape_29.setTransform(247.5571,223.5347,2.0706,2.0706);

	this.instance_5 = new lib.ClipGroup_25();
	this.instance_5.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E8E5E2").s().p("AgEgFIAJAAIAAALIgJAAg");
	this.shape_30.setTransform(250.8183,230.0572,2.0706,2.0706);

	this.instance_6 = new lib.ClipGroup_26();
	this.instance_6.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgTgEIAngCIAAALIgnACg");
	this.shape_31.setTransform(247.6606,230.2125,2.0706,2.0706);

	this.instance_7 = new lib.ClipGroup_27();
	this.instance_7.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1D1B1E").s().p("AgJALIAOgZIAFAdg");
	this.shape_32.setTransform(279.0825,214.4239,2.0706,2.0706);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F8D380").s().p("AgVAXIAfg1IALA9g");
	this.shape_33.setTransform(277.9954,217.7887,2.0706,2.0706);

	this.instance_8 = new lib.ClipGroup_28();
	this.instance_8.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BBE1E3").s().p("AgNAvIAPhdIAMACIgQBbg");
	this.shape_34.setTransform(273.1812,232.4384,2.0706,2.0706);

	this.instance_9 = new lib.ClipGroup_29();
	this.instance_9.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgMACIABgFIAYACIgBAFg");
	this.shape_35.setTransform(257.962,209.3508,2.0706,2.0706);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgMADIABgGIAYACIgBAFg");
	this.shape_36.setTransform(257.6514,214.3203,2.0706,2.0706);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgMACIAAgFIAZACIgBAFg");
	this.shape_37.setTransform(257.3408,219.3416,2.0706,2.0706);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgWACIABgGIAsADIgBAGg");
	this.shape_38.setTransform(260.3433,204.0189,2.0706,2.0706);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgWACIABgGIAsADIgBAGg");
	this.shape_39.setTransform(258.9973,224.4664,2.0706,2.0706);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgMACIABgFIAYABIgBAGg");
	this.shape_40.setTransform(256.6161,229.3324,2.0706,2.0706);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMADIABgGIAYACIgBAFg");
	this.shape_41.setTransform(256.3055,234.302,2.0706,2.0706);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgMADIABgGIAYABIgBAGg");
	this.shape_42.setTransform(255.9949,239.3232,2.0706,2.0706);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgWACIAAgGIAsADIAAAGg");
	this.shape_43.setTransform(257.7032,244.4481,2.0706,2.0706);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgMACIABgFIAYABIAAAGg");
	this.shape_44.setTransform(255.2702,249.314,2.0706,2.0706);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgMACIABgFIAYACIgBAFg");
	this.shape_45.setTransform(254.9596,254.2836,2.0706,2.0706);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgMADIABgGIAYACIgBAFg");
	this.shape_46.setTransform(254.649,259.2531,2.0706,2.0706);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgWACIABgGIArADIAAAGg");
	this.shape_47.setTransform(256.3573,264.4297,2.0706,2.0706);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgMACIAAgFIAZACIgBAFg");
	this.shape_48.setTransform(254.0278,269.2439,2.0706,2.0706);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgMACIABgFIAYABIAAAGg");
	this.shape_49.setTransform(253.6137,274.2652,2.0706,2.0706);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgMADIABgGIAYACIgBAFg");
	this.shape_50.setTransform(253.3031,279.2347,2.0706,2.0706);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgWACIABgGIAsADIgBAGg");
	this.shape_51.setTransform(255.0631,284.4113,2.0706,2.0706);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C22D2B").s().p("AgUDVIAbmqIAOABIgbGqg");
	this.shape_52.setTransform(254.5455,243.9822,2.0706,2.0706);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#DD4241").s().p("Ag0DTIAcmqIBNAFIgcGrg");
	this.shape_53.setTransform(261.068,244.3963,2.0706,2.0706);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#DFA830").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_54.setTransform(403.6828,229.1254,2.0706,2.0706);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DFA830").s().p("AgUAKIAAgTIApAAIAAATg");
	this.shape_55.setTransform(391.259,229.1254,2.0706,2.0706);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EBC03D").s().p("AgTA4IAAhvIAnAAIAABvg");
	this.shape_56.setTransform(403.6828,219.704,2.0706,2.0706);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EBC03D").s().p("AgUA4IAAhvIApAAIAABvg");
	this.shape_57.setTransform(391.259,219.704,2.0706,2.0706);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#DDDFE2").s().p("AhiACIAAgDIDEAAIAAADg");
	this.shape_58.setTransform(438.573,222.0335,2.0706,2.0706);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DDDFE2").s().p("AhiAEIAAgHIDEAAIAAAHg");
	this.shape_59.setTransform(438.573,224.8288,2.0706,2.0706);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DDDFE2").s().p("AhiAEIAAgGIDEAAIAAAGg");
	this.shape_60.setTransform(438.573,218.4098,2.0706,2.0706);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#DDDFE2").s().p("AhiAEIAAgGIDEAAIAAAGg");
	this.shape_61.setTransform(438.573,214.6827,2.0706,2.0706);

	this.instance_10 = new lib.ClipGroup_30();
	this.instance_10.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.instance_11 = new lib.ClipGroup_31();
	this.instance_11.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B9BEBE").s().p("AgNACIAAgDIAaAAIAAADg");
	this.shape_62.setTransform(447.5802,197.5482,2.0706,2.0706);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B9BEBE").s().p("AgNAEIAAgHIAaAAIAAAHg");
	this.shape_63.setTransform(447.5802,201.5342,2.0706,2.0706);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B9BEBE").s().p("AgNADIAAgFIAaAAIAAAFg");
	this.shape_64.setTransform(447.5802,193.9246,2.0706,2.0706);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B9BEBE").s().p("AgNAEIAAgGIAaAAIAAAGg");
	this.shape_65.setTransform(447.5802,189.5245,2.0706,2.0706);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D5D8D8").s().p("AgNAnIAAgHIAaAAIAAAHgAgNAZIAAgOIAaAAIAAAOgAgNAIIAAgMIAaAAIAAAMgAgNgKIAAgPIAaAAIAAAPgAgNggIAAgGIAaAAIAAAGg");
	this.shape_66.setTransform(447.5802,195.6329,2.0706,2.0706);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E2E4E7").s().p("AgMACIAAgDIAaAAIAAADg");
	this.shape_67.setTransform(374.5904,197.5482,2.0706,2.0706);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E2E4E7").s().p("AgMAEIAAgHIAaAAIAAAHg");
	this.shape_68.setTransform(374.5904,201.5342,2.0706,2.0706);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgMAOIAAgHIAaAAIAAAHgAgMAAIAAgNIAaAAIAAANg");
	this.shape_69.setTransform(374.5904,200.8612,2.0706,2.0706);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E2E4E7").s().p("AgMADIAAgFIAaAAIAAAFg");
	this.shape_70.setTransform(374.5904,193.9246,2.0706,2.0706);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgMAGIAAgLIAaAAIAAALg");
	this.shape_71.setTransform(374.5904,195.8917,2.0706,2.0706);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E2E4E7").s().p("AgMAEIAAgGIAaAAIAAAGg");
	this.shape_72.setTransform(374.5904,189.5245,2.0706,2.0706);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgMAOIAAgOIAaAAIAAAOgAgMgGIAAgHIAaAAIAAAHg");
	this.shape_73.setTransform(374.5904,190.3528,2.0706,2.0706);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#DDDFE2").s().p("Ai9ACIAAgDIF7AAIAAADg");
	this.shape_74.setTransform(411.0853,197.5482,2.0706,2.0706);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#DDDFE2").s().p("Ai9AEIAAgHIF7AAIAAAHg");
	this.shape_75.setTransform(411.0853,201.5342,2.0706,2.0706);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#DDDFE2").s().p("Ai9ADIAAgFIF7AAIAAAFg");
	this.shape_76.setTransform(411.0853,193.9246,2.0706,2.0706);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#DDDFE2").s().p("Ai9AEIAAgGIF7AAIAAAGg");
	this.shape_77.setTransform(411.0853,189.5245,2.0706,2.0706);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("Ai9AnIAAhNIF7AAIAABNg");
	this.shape_78.setTransform(411.0853,195.6329,2.0706,2.0706);

	this.instance_12 = new lib.ClipGroup_32();
	this.instance_12.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#DFA830").s().p("ABxAGIAAgBIkcAAIAAgJIFXAAIAAAKg");
	this.shape_79.setTransform(411.4477,207.2284,2.0706,2.0706);

	this.instance_13 = new lib.ClipGroup_33();
	this.instance_13.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#DFA830").s().p("AirAEIAAgHIFXAAIAAAHg");
	this.shape_80.setTransform(411.4477,183.7785,2.0706,2.0706);

	this.instance_14 = new lib.ClipGroup_34();
	this.instance_14.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#DFA830").s().p("AgVAOIAAgbIAqAAIAAAbg");
	this.shape_81.setTransform(376.0399,272.7122,2.0706,2.0706);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EBC03D").s().p("AgVAqIAAhTIAqAAIAABTg");
	this.shape_82.setTransform(376.0399,266.9662,2.0706,2.0706);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#DFA830").s().p("AgJAPIAAgdIATAAIAAAdg");
	this.shape_83.setTransform(451.6697,272.5569,2.0706,2.0706);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EBC03D").s().p("AgJAPIAAgdIATAAIAAAdg");
	this.shape_84.setTransform(443.9049,272.5569,2.0706,2.0706);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EBC03D").s().p("AgJAqIAAhTIATAAIAABTg");
	this.shape_85.setTransform(451.6697,266.9662,2.0706,2.0706);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EBC03D").s().p("AgJAqIAAhTIATAAIAABTg");
	this.shape_86.setTransform(443.9049,266.9662,2.0706,2.0706);

	this.instance_15 = new lib.ClipGroup_35();
	this.instance_15.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#DFA830").s().p("AgKAPIAAgdIAVAAIAAAdg");
	this.shape_87.setTransform(453.6886,255.1636,2.0706,2.0706);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#DFA830").s().p("AgJAPIAAgdIATAAIAAAdg");
	this.shape_88.setTransform(445.872,255.1636,2.0706,2.0706);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#DFA830").s().p("AgVAPIAAgdIAqAAIAAAdg");
	this.shape_89.setTransform(435.6741,255.1636,2.0706,2.0706);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EBC03D").s().p("AgKBBIAAiBIAVAAIAACBg");
	this.shape_90.setTransform(453.6886,244.8104,2.0706,2.0706);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EBC03D").s().p("AgJBBIAAiBIATAAIAACBg");
	this.shape_91.setTransform(445.872,244.8104,2.0706,2.0706);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EBC03D").s().p("AgVBBIAAiBIAqAAIAACBg");
	this.shape_92.setTransform(435.6741,244.8104,2.0706,2.0706);

	this.instance_16 = new lib.ClipGroup_36();
	this.instance_16.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#DFA830").s().p("AgRAJIAAgRIAkAAIAAARg");
	this.shape_93.setTransform(385.3577,180.9832,2.0706,2.0706);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EBC03D").s().p("AgRAkIAAhHIAkAAIAABHg");
	this.shape_94.setTransform(385.3577,176.6348,2.0706,2.0706);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#DFA830").s().p("AgIAKIAAgTIARAAIAAATg");
	this.shape_95.setTransform(450.738,180.8279,2.0706,2.0706);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#DFA830").s().p("AgIAKIAAgTIARAAIAAATg");
	this.shape_96.setTransform(444.0084,180.8279,2.0706,2.0706);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EBC03D").s().p("AgIAkIAAhHIARAAIAABHg");
	this.shape_97.setTransform(450.738,176.6348,2.0706,2.0706);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EBC03D").s().p("AgIAkIAAhHIARAAIAABHg");
	this.shape_98.setTransform(444.0084,176.6348,2.0706,2.0706);

	this.instance_17 = new lib.ClipGroup_37();
	this.instance_17.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.instance_18 = new lib.ClipGroup_38();
	this.instance_18.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#21B2A5").s().p("AgGD4IAAnvIANAAIAAHvg");
	this.shape_99.setTransform(386.4966,223.5864,2.0706,2.0706);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#21B2A5").s().p("AgbgBIAAgQIAbASIAbgSIAAAQIgbATg");
	this.shape_100.setTransform(382.2518,253.0929,2.0706,2.0706);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#63C1BF").s().p("AgbD4IAAnvIA2AAIAAHvg");
	this.shape_101.setTransform(382.2518,223.5864,2.0706,2.0706);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CF6E17").s().p("AgLD4IAAnvIAXAAIAAHvg");
	this.shape_102.setTransform(390.3272,223.5864,2.0706,2.0706);

	this.instance_19 = new lib.ClipGroup_39();
	this.instance_19.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#21B2A5").s().p("AgGD4IAAnvIANAAIAAHvg");
	this.shape_103.setTransform(308.2266,223.5864,2.0706,2.0706);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#21B2A5").s().p("AgbgBIAAgQIAbASIAbgSIAAAQIgbATg");
	this.shape_104.setTransform(303.9818,253.0929,2.0706,2.0706);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#63C1BF").s().p("AgbD4IAAnvIA2AAIAAHvg");
	this.shape_105.setTransform(303.9818,223.5864,2.0706,2.0706);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#CF6E17").s().p("AgLD4IAAnvIAXAAIAAHvg");
	this.shape_106.setTransform(312.0573,223.5864,2.0706,2.0706);

	this.instance_20 = new lib.ClipGroup_40();
	this.instance_20.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#AA5622").s().p("AgeAOIAAgbIA9AAIAAAbg");
	this.shape_107.setTransform(321.2716,172.39,2.0706,2.0706);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C8C9CA").s().p("ACMAqQgIgGgFgKQgFgKAAgNQAAgMAGgNQAGgMAJgGQAKgHALAAQAKAAAJAGQAJAGAEAKQAEAKAAAMQAAANgFAMQgGAMgKAHQgKAHgLAAQgKAAgIgGgACWgdQgHAGgDAIQgEAIAAAKQAAALADAGQADAHAGAEQAEADAGAAQAIAAAGgEQAHgFAEgJQADgHAAgLQAAgKgDgHQgDgHgGgEQgFgEgGAAQgHAAgGAFgABTAuIgCgFIAAhJIgWAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgCgCAAgDQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABgBQABAAAAAAIA6AAQADAAACACQABABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAADgCACQgCACgDAAIgWAAIAABJQAAADgCACIgFACIgFgCgAgJAqQgJgHgEgJQgFgKAAgNQAAgMAGgNQAGgMAJgGQAJgHALAAQAKAAAJAGQAIAFAFALQAEAKAAAMQAAANgFAMQgGAMgKAHQgKAHgLAAQgJAAgIgGgAAAgdQgFAFgEAJQgEAIAAAKQAAALADAGQADAGAFAFQAEADAGAAQAIAAAGgEQAGgFAEgJQAEgHAAgLQAAgKgDgHQgDgHgGgEQgFgEgGAAQgHAAgGAFgAg3AuQgCgCAAgDIAAgnIgzAHIAAAgQAAACgCADQgCACgDAAQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAQgCgCAAgDIAAhRQAAgDACgCQABAAAAgBQABAAAAAAQABAAAAgBQABAAABAAQADAAACACQACADAAACIAAAlIAzgIIAAgdQAAgDACgCQACgCADAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQACADAAACIAABRQAAACgCADQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgDAAgCgCgAjFAuQgCgCAAgDIAAhPIABgGQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAIAJgBQAbAAAMAIQANAHAAAPQAAAMgIAGQgJAJgLACQgMAEgLAAIAAAZIgCAFQgDACgCAAIgFgCgAi5ADQAMgBANgEQAMgEAAgLQAAgIgJgEQgJgEgSAAIgBAAg");
	this.shape_108.setTransform(308.6925,-131.5789,2.0706,2.0706);

	this.instance_21 = new lib.ClipGroup_41();
	this.instance_21.setTransform(-203.4,-150.9,2.0706,2.0706,0,0,0,47.4,0.4);

	this.instance_22 = new lib.ClipGroup_42();
	this.instance_22.setTransform(-9.95,274.7,2.0706,2.0706,0,0,0,260.8,368.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E6F3F3").s().p("EhDQAKAIAAz/MCGhAAAIAAT/g");
	this.shape_109.setTransform(-9.475,118);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#E6F3F3").s().p("EghbAQuMAAAghbMBC3AAAMAAAAhbg");
	this.shape_110.setTransform(-228.95,-139.95);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#E6F3F3").s().p("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");
	this.shape_111.setTransform(-10.3,-10.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.instance_22},{t:this.instance_21},{t:this.shape_108},{t:this.shape_107},{t:this.instance_20},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.instance_19},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.instance_18},{t:this.instance_17},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.instance_16},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.instance_15},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.instance_14},{t:this.shape_80},{t:this.instance_13},{t:this.shape_79},{t:this.instance_12},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_11},{t:this.instance_10},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_9},{t:this.shape_34},{t:this.instance_8},{t:this.shape_33},{t:this.shape_32},{t:this.instance_7},{t:this.shape_31},{t:this.instance_6},{t:this.shape_30},{t:this.instance_5},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance_4},{t:this.instance_3},{t:this.shape_26},{t:this.instance_2},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance_1},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1144.2,-488.3,1674.3,1526.1);
p.frameBounds = [rect, rect=new cjs.Rectangle(-549.9,-488.3,1080,1526.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


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

	this.instance = new lib.元件2();
	this.instance.setTransform(224.15,1.75,1,1,0,0,0,26.7,26.7);

	this._nextbtnShow = new lib.元件12复制();
	this._nextbtnShow.name = "_nextbtnShow";
	this._nextbtnShow.setTransform(360.75,1.7,1.1,1.1);
	new cjs.ButtonHelper(this._nextbtnShow, 0, 1, 2, false, new lib.元件12复制(), 3);

	this.instance_1 = new lib.元件1();
	this.instance_1.setTransform(360.8,1.75,1,1,0,0,0,26.7,26.7);

	this._seekBarMc = new lib.元件11复制();
	this._seekBarMc.name = "_seekBarMc";
	this._seekBarMc.setTransform(134.65,771.05,1,1,0,0,0,-115,-11);
	new cjs.ButtonHelper(this._seekBarMc, 0, 1, 1);

	this.instance_2 = new lib.元件11();
	this.instance_2.setTransform(249.45,782.05);

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

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,126,77,0.2)").s().p("Ax6C5Qg9AAgwgkQgLgIgLgLQg2g2AAhMIAAAAQAAhMA2g2QA2g2BNAAMAj1AAAQBMAAA2A2QA3A2AABMIAAAAQAABMg3A2QgKALgLAIQgvAkg+AAgAy0g9QgbAbAAAlQAAAmAbAbQAbAcAnAAMAjtAAAQAcAAAYgQIAEgEIAJgIIAFgFQAXgagBgiQABghgXgaIgFgFIgJgIIgEgEQgYgQgcAAMgjtAAAQgnAAgbAcg");
	this.shape.setTransform(249.3,781.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this._playbtn},{t:this._nextbtn},{t:this._prevbtn},{t:this._pausebtn},{t:this.instance_2},{t:this._seekBarMc},{t:this.instance_1},{t:this._nextbtnShow},{t:this.instance},{t:this._prevbtnShow}]}).wait(1));

	// 图层_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAzhWIABCtIhnhXg");
	this.shape_1.setTransform(412.2091,781.3162,0.9827,1.1473,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_2.setTransform(412.2091,781.3162,0.9827,1.1473,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_3.setTransform(422.6506,781.3162,0.9827,1.1473,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_4.setTransform(422.6506,781.3162,0.9827,1.1473,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E1E1E1").ss(4,1,1).p("AiqirQhIBHAABkQAABUA0BBQAJALALALQBGBIBlAAQAgAAAegIQAngKAigXQASgNASgSQALgLAIgLQAHgJAGgIQACgDADgEQAig3AAhGQAAhkhHhHQgwgwg9gPQgKgCgJgCQgVgEgWAAQhlAAhGBHg");
	this.shape_5.setTransform(415.75,781.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E1E1E1").s().p("AiqCrIgUgWQg0hAAAhVQABhkBHhHQBGhGBkAAQAXAAAVADIATAEQA9APAwAwQBHBHAABkQAABGgjA3IgEAGIgNASIgTAWQgSARgTAOQghAXgnAKQgeAIghgBQhjAAhHhHg");
	this.shape_6.setTransform(415.75,781.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAzhWIABCtIhnhXg");
	this.shape_7.setTransform(85.5409,781.6531,0.9827,1.1483);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgzAAIBmhWIABCtg");
	this.shape_8.setTransform(85.5409,781.6531,0.9827,1.1483);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(5,1,1).p("ABAhWIAACtIh/hXg");
	this.shape_9.setTransform(75.0994,781.6531,0.9827,1.1483);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhAAAICAhWIABCtg");
	this.shape_10.setTransform(75.0994,781.6531,0.9827,1.1483);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E1E1E1").ss(4,1,1).p("ACsirQBHBHAABkQAABUg0BBQgJALgKALQhIBIhkAAQhLAAg7gpQgUgNgRgSQgLgLgJgLQgGgJgGgIQgCgDgDgEQgig3AAhGQAAhkBHhHQA3g3BKgMQAUgEAWAAQBkAABIBHg");
	this.shape_11.setTransform(82,781.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E1E1E1").s().p("AiGDKQgUgOgRgRIgUgWIgMgSIgFgGQghg3AAhGQAAhkBGhHQA3g3BKgMQAUgDAWAAQBkAABIBGQBHBHAABkQAABVg0BAIgTAWQhIBHhkAAQhLAAg7gog");
	this.shape_12.setTransform(82,781.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2,-27.9,444,836);
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
	this.shape.graphics.f("#231F20").s().p("AgSAbQgGgCgCgGQgCgHAAgMQAAgMACgGQACgGAGgDQAGgCAMABQAMgBAHACQAGADACAGQACAGAAAMQAAAMgCAHQgCAGgGACQgHACgMAAQgMAAgGgCg");
	this.shape.setTransform(341.65,57.52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgpBVQgUgIgKgVQgKgUAAgkQAAgjAKgUQAKgUAUgIQAUgJAbABQAeAAARAKQARAKAGARQAGASAAAXIgBANIgBALIhyAHQACATALAJQAMAJAXAAQALAAALgCQAMgCAJgDQAKgCAGgEIAAAmQgJAFgSAEQgSADgYAAIgDAAQgYAAgSgHgAgYgtQgJAJgBAWIBIgGQABgKgDgIQgCgIgHgEQgHgFgOAAQgVAAgJAKg");
	this.shape_1.setTransform(326.5518,51.3251);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgFBqQgNgFgGgNQgGgNAAgXIAAhSIgXAAIAAgmIAXAAIAAgqIAvAAIAAAqIAlAAIAAAmIglAAIAABOQAAAPAEAGQAFAFAMAAIAHAAIAGgBIAAAlIgLABIgLAAIgEAAQgTAAgLgFg");
	this.shape_2.setTransform(310.95,49.3271);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgXB/IAAixIAvAAIAACxgAgPhNQgGgBgDgGQgCgFAAgMQAAgLACgFQADgFAGgCQAFgCAKABQALgBAGACQAFACADAFQACAFAAALQAAAMgCAFQgDAGgFABQgGACgLAAQgKAAgFgCg");
	this.shape_3.setTransform(300.375,47.595);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgzBbIAAixIAwAAIAAAgQAFgPAIgIQAIgHAKgDQAJgDALAAIAEAAIgCArIgEAAQgMAAgKADQgKADgIAJQgGAIgDAOIAABlg");
	this.shape_4.setTransform(289.975,51.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AAeBZIgeh5IgBAAIgcB5Ig9AAIgwixIAzAAIAcB/IACAAIAfh/IA1AAIAgB/IACAAIAch/IAyAAIgxCxg");
	this.shape_5.setTransform(268,51.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("Ag6B0QgQgMgGgUQgGgVABgcQgBgaAGgUQAGgVAQgMQAPgNAdAAQAXAAAMAHQANAHAFAMIAAhfIAvAAIAAD6IgrAAIgEgZQgFAMgMAIQgNAIgXAAQgdAAgPgLgAgXgNQgIAIgDALQgCANAAAQQAAAQACANQADAMAIAHQAIAIAPAAQAQAAAJgHQAJgGAEgNQADgMAAgSQAAgRgEgNQgDgMgJgHQgJgHgQAAQgPAAgIAIg");
	this.shape_6.setTransform(234.0231,47.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AAiBbIAAhsQAAgSgGgIQgHgIgQAAQgOAAgKAGQgJAFgFAOIAAB1IgwAAIAAixIAwAAIAAAVQAIgNAPgGQANgGAUAAQAVAAANAHQANAHAGANQAGANgBAUIAAB5g");
	this.shape_7.setTransform(213.45,51.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgTBbQgZAAgRgMQgQgNgJgYQgDgJgBgLIgCgVIAAgHQABgYAJgTQAKgSATgOQAJgFAJgDQAIgBAJAAIAJAAQAPAAAMAEQAKAGAHAKIAAABIABABIAAAAIAAgFIABgBIAuAAIABAAIAAABIgCA6QAAAmACAYQADAYAEALIABACIABAFIgCABIgtAAIgCgHIgHgSIgBAAQgGANgKAHQgLAGgPAAgAgdgtQgLAKgHAVIgCAKIAAAGQAAAUAHANQAHANANAFIALACIAKABQAMABAIgFQAJgEAFgKQADgGABgLQACgJAAgNQAAgSgEgNQgGgMgIgGQgEgDgGgBQgFgBgHAAIAAAAQgRAAgLAKg");
	this.shape_8.setTransform(192.1,51.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("Ag6B0QgQgMgGgUQgGgVABgcQgBgaAGgUQAGgVAQgMQAPgNAdAAQAXAAAMAHQANAHAFAMIAAhfIAvAAIAAD6IgrAAIgEgZQgFAMgMAIQgNAIgXAAQgdAAgPgLgAgXgNQgIAIgDALQgCANAAAQQAAAQACANQADAMAIAHQAIAIAPAAQAQAAAJgHQAJgGAEgNQADgMAAgSQAAgRgEgNQgDgMgJgHQgJgHgQAAQgPAAgIAIg");
	this.shape_9.setTransform(162.9731,47.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgTBbQgZAAgRgMQgQgNgJgYQgDgJgBgLIgCgVIAAgHQAAgYAKgTQAKgSAUgOQAIgFAJgDQAIgBAJAAIAJAAQAPAAAMAEQAKAGAHAKIAAABIABABIAAAAIABgFIABgBIAtAAIABAAIAAABIgCA6QAAAmACAYQADAYAEALIABACIABAFIgCABIgtAAIgCgHIgGgSIgBAAQgHANgKAHQgLAGgPAAgAgdgtQgMAKgGAVIgCAKIAAAGQAAAUAHANQAHANANAFIAKACIALABQAMABAIgFQAJgEAEgKQAEgGACgLQABgJAAgNQAAgSgEgNQgGgMgIgGQgEgDgGgBQgFgBgHAAIAAAAQgRAAgLAKg");
	this.shape_10.setTransform(142.05,51.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgpBVQgUgIgKgVQgKgUAAgkQAAgjAKgUQAKgUAUgIQAUgJAbABQAeAAARAKQARAKAGARQAGASAAAXIgBANIgBALIhyAHQACATALAJQAMAJAXAAQALAAALgCQAMgCAJgDQAKgCAGgEIAAAmQgJAFgSAEQgSADgYAAIgDAAQgYAAgSgHgAgYgtQgJAJgBAWIBIgGQABgKgDgIQgCgIgHgEQgHgFgOAAQgVAAgJAKg");
	this.shape_11.setTransform(122.8018,51.3251);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AAjByIg1hTIgZAAIAABTIgyAAIAAjkIBOAAQAeAAATAIQAUAGAJARQAJAQAAAaQAAAcgKAQQgKAQgWAHIBABYgAgrgGIAUAAQARABAJgDQALgDAEgHQAFgIAAgPQAAgOgFgGQgEgIgLgCQgJgDgRAAIgUAAg");
	this.shape_12.setTransform(103.625,48.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABYCZIgahMIh7AAIgbBMIhFAAIBykxIBYAAIBxExgAAqAWIgnhzIgFAAIgoBzIBUAAg");
	this.shape_13.setTransform(46.675,48.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D8075").s().p("AirCsQhHhHAAhlQAAhkBHhIQBHhGBkAAQBlAABHBGQBHBIAABkQAABlhHBHQhHBHhlAAQhkAAhHhHg");
	this.shape_14.setTransform(46.725,47.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层_2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A9F2").s().p("AgOAPQgEgBAAgEQAAgDACgHQAEgKAGgDQAEgDAIABQAJgBADADQADADgEAKQgDAHgDADQgDAEgEABIgJABIgJgBg");
	this.shape_15.setTransform(1039.2231,93.2214);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A9F2").s().p("AgpBUQgIgEgBgJQAAgKAIgSIAdhOIgVAAIAIgTIAVAAIALghIAWAAIgMAhIAjAAIgIATIgjAAIgcBNQgEAKgBAGQgBAGAEACQAEADAIAAIAIgBIAHgBIgGATIgIABIgIAAIgEABQgNAAgHgEg");
	this.shape_16.setTransform(1034.475,86.1028);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A9F2").s().p("AgvBgIA1iLIAWAAIg0CLgAARhHQgCgDADgIQAEgJAEgCQAEgDAHABQAHgBACADQADACgEAJQgDAIgEADQgEACgHAAQgHAAgDgCg");
	this.shape_17.setTransform(1026.1521,85.0708);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00A9F2").s().p("Ag4BCQgMgGgBgQQgCgQALgcQAKgbAOgQQAOgQAQgGQAQgHAUAAQASAAAJAGQAJAFADAIQADAJgCAKQgCALgEAKIgDAHIgEAIIhhAGQgGAQABAKQAAAJAIAFQAIAFARAAQAMAAAMgDQANgCAJgEIgIAVIgMADIgRAEIgUABIgDAAQgTAAgLgHgAgDgwQgKAGgIAKQgHAKgGAPIBMgGQAEgLABgJQACgJgGgGQgFgFgPAAQgQAAgKAFg");
	this.shape_18.setTransform(1007.6306,87.6767);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00A9F2").s().p("AgpBUQgIgEgBgJQAAgKAIgSIAdhOIgVAAIAIgTIAVAAIALghIAWAAIgMAhIAjAAIgIATIgjAAIgcBNQgEAKgBAGQgBAGAEACQAEADAIAAIAIgBIAHgBIgGATIgIABIgIAAIgEABQgNAAgHgEg");
	this.shape_19.setTransform(997.025,86.1028);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00A9F2").s().p("Ag4BCQgMgGgBgQQgCgQALgcQAKgbAOgQQAOgQAQgGQAQgHAUAAQASAAAJAGQAJAFADAIQADAJgCAKQgCALgEAKIgDAHIgEAIIhhAGQgGAQABAKQAAAJAIAFQAIAFARAAQAMAAAMgDQANgCAJgEIgIAVIgMADIgRAEIgUABIgDAAQgTAAgLgHgAgDgwQgKAGgIAKQgHAKgGAPIBMgGQAEgLABgJQACgJgGgGQgFgFgPAAQgQAAgKAFg");
	this.shape_20.setTransform(983.8306,87.6767);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00A9F2").s().p("AgqBcQgFgGAGgQIA/ioIAXAAIg9CiQgEAKABADQACAEAHAAIAFAAIAFgBIgGASIgHABIgIABQgQAAgFgIg");
	this.shape_21.setTransform(973.656,84.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00A9F2").s().p("AhaBiIBJjAIAWAAIgJAZQAIgNAOgHQANgIAUAAQAXAAAKAKQAIAJgBAQQgBAQgJAWQgHAUgLAPQgLARgQAKQgRAKgWAAQgUAAgIgHQgIgIABgMIgeBNgAAMhHQgMAGgHAMQgJAMgGARQgGARgBALQgBALAIAIQAHAGAPAAQARAAAKgHQALgJAIgMQAHgLAFgOQAGgPACgMQACgMgFgIQgGgGgQgBQgRAAgMAHg");
	this.shape_22.setTransform(959.0303,90.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00A9F2").s().p("AA1BHIAihYQAHgQgDgIQgDgJgPAAQgIAAgIACQgIACgHAFQgIAGgGAJIgBABIgkBgIgWAAIAghYQAHgQgCgIQgCgJgPAAQgIAAgIACQgHACgIAFQgIAGgHAKIglBgIgXAAIA2iLIAWAAIgHATQALgNAMgEQANgFAMAAQAQABAIAFQAHAGABAMQAHgJAJgGQAJgEAJgCQAKgDAIAAQARABAHAFQAIAGABALQABAKgFANIglBgg");
	this.shape_23.setTransform(939.7023,87.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00A9F2").s().p("AgaBJQgVAAgMgHQgMgGgCgQQgBgQAKgcQALgbANgQQAOgQARgGQAQgHAVAAQAVAAAMAHQAMAGABAQQABAQgKAbQgLAcgNAQQgOAQgRAGQgPAHgTAAIgCAAgAAGAxQALgFAJgMQAIgMAHgUQAIgTABgMQAAgMgHgFQgHgFgPAAQgQAAgKAFQgLAFgIAMQgIAMgIATQgIAUAAAMQgBAMAHAFQAIAFAPAAQAPAAAKgFg");
	this.shape_24.setTransform(920.225,87.6767);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00A9F2").s().p("Ag2BCQgMgGgBgQQgCgQALgcQAKgbAOgQQAOgQARgGQAQgHAVAAQALAAAJACQAJABAFADIgIAUIgOgFQgJgBgLAAQgPAAgLAEQgKAFgIAMQgJAMgIATQgHAVgBALQAAAMAHAEQAIAFAPAAIATgBQAKgCAJgDIgIAVIgLACIgNACIgOABIgCAAQgTAAgMgHg");
	this.shape_25.setTransform(906.7656,87.6767);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00A9F2").s().p("Ag9BHIA1iLIAWAAIgKAZQAJgLAKgGQAJgGAJgCQAKgDAJAAIACAAIgJAVIgDAAQgJAAgJADQgKACgJAHQgJAGgIAMIgjBbg");
	this.shape_26.setTransform(888.675,87.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00A9F2").s().p("Ag4BCQgMgGgBgQQgCgQALgcQAKgbAOgQQAOgQAQgGQAQgHAUAAQASAAAJAGQAJAFADAIQADAJgCAKQgCALgEAKIgDAHIgEAIIhhAGQgGAQABAKQAAAJAIAFQAIAFARAAQAMAAAMgDQANgCAJgEIgIAVIgMADIgRAEIgUABIgDAAQgTAAgLgHgAgDgwQgKAGgIAKQgHAKgGAPIBMgGQAEgLABgJQACgJgGgGQgFgFgPAAQgQAAgKAFg");
	this.shape_27.setTransform(875.3806,87.6767);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00A9F2").s().p("AAOBjIAhhZQAFgKABgIQAAgHgEgEQgFgEgLAAQgIAAgJACQgJACgIAGQgJAGgJALIgkBfIgWAAIBLjFIAVAAIgcBNQAIgIAIgFQAJgFAJgCQAKgCAJAAQASAAAIAGQAIAFAAALQABAKgGANIglBhg");
	this.shape_28.setTransform(859.1771,84.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00A9F2").s().p("AhaBiIBJjAIAWAAIgJAZQAIgNAOgHQANgIAUAAQAXAAAKAKQAIAJgBAQQgBAQgJAWQgHAUgLAPQgLARgQAKQgRAKgWAAQgUAAgIgHQgIgIABgMIgeBNgAAMhHQgMAGgHAMQgJAMgGARQgGARgBALQgBALAIAIQAHAGAPAAQARAAAKgHQALgJAIgMQAHgLAFgOQAGgPACgMQACgMgFgIQgGgGgQgBQgRAAgMAHg");
	this.shape_29.setTransform(835.2803,90.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00A9F2").s().p("AgqBcQgFgGAGgQIA/ioIAXAAIg9CiQgEAKABADQACAEAHAAIAFAAIAFgBIgGASIgHABIgIABQgQAAgFgIg");
	this.shape_30.setTransform(825.956,84.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00A9F2").s().p("Ag4BCQgMgGgBgQQgCgQALgcQAKgbAOgQQAOgQAQgGQAQgHAUAAQASAAAJAGQAJAFADAIQADAJgCAKQgCALgEAKIgDAHIgEAIIhhAGQgGAQABAKQAAAJAIAFQAIAFARAAQAMAAAMgDQANgCAJgEIgIAVIgMADIgRAEIgUABIgDAAQgTAAgLgHgAgDgwQgKAGgIAKQgHAKgGAPIBMgGQAEgLABgJQACgJgGgGQgFgFgPAAQgQAAgKAFg");
	this.shape_31.setTransform(813.6306,87.6767);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00A9F2").s().p("AAKBaIAhhXIhYAAIghBXIgXAAIBEizIAYAAIgcBJIBYAAIAchJIAXAAIhECzg");
	this.shape_32.setTransform(797.525,85.675);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00A9F2").s().p("AgOAPQgEgBAAgEQAAgDACgHQAEgKAGgDQAEgDAIABQAJgBADADQADADgEAKQgDAHgDADQgDAEgEABIgJABIgJgBg");
	this.shape_33.setTransform(774.8231,93.2214);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00A9F2").s().p("AgqBcQgFgGAGgQIA/ioIAXAAIg9CiQgEAKABADQACAEAHAAIAFAAIAFgBIgGASIgHABIgIABQgQAAgFgIg");
	this.shape_34.setTransform(770.506,84.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00A9F2").s().p("AgaBJQgVAAgMgHQgMgGgCgQQgBgQAKgcQALgbANgQQAOgQARgGQAQgHAVAAQAVAAAMAHQAMAGABAQQABAQgKAbQgLAcgNAQQgOAQgRAGQgPAHgTAAIgCAAgAAGAxQALgFAJgMQAIgMAHgUQAIgTABgMQAAgMgHgFQgHgFgPAAQgQAAgKAFQgLAFgIAMQgIAMgIATQgIAUAAAMQgBAMAHAFQAIAFAPAAQAPAAAKgFg");
	this.shape_35.setTransform(757.525,87.6767);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00A9F2").s().p("AgaBJQgVAAgMgHQgMgGgCgQQgBgQAKgcQALgbANgQQAOgQARgGQAQgHAVAAQAVAAAMAHQAMAGABAQQABAQgKAbQgLAcgNAQQgOAQgRAGQgPAHgTAAIgCAAgAAGAxQALgFAJgMQAIgMAHgUQAIgTABgMQAAgMgHgFQgHgFgPAAQgQAAgKAFQgLAFgIAMQgIAMgIATQgIAUAAAMQgBAMAHAFQAIAFAPAAQAPAAAKgFg");
	this.shape_36.setTransform(741.475,87.6767);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00A9F2").s().p("AAOBjIAhhZQAFgKABgIQAAgHgEgEQgFgEgLAAQgIAAgJACQgJACgIAGQgJAGgJALIgkBfIgWAAIBLjFIAVAAIgcBNQAIgIAIgFQAJgFAJgCQAKgCAJAAQASAAAIAGQAIAFAAALQABAKgGANIglBhg");
	this.shape_37.setTransform(724.9271,84.825);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00A9F2").s().p("Ag2BCQgMgGgBgQQgCgQALgcQAKgbAOgQQAOgQARgGQAQgHAVAAQALAAAJACQAJABAFADIgIAUIgOgFQgJgBgLAAQgPAAgLAEQgKAFgIAMQgJAMgIATQgHAVgBALQAAAMAHAEQAIAFAPAAIATgBQAKgCAJgDIgIAVIgLACIgNACIgOABIgCAAQgTAAgMgHg");
	this.shape_38.setTransform(711.9656,87.6767);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00A9F2").s().p("AgsBIIgPgCIgKgCIAIgTIALACIANACIAOABQAQAAAJgFQAKgEAFgMQADgJgBgEQAAgFgGgDQgGgDgLgDQgOgDgHgEQgGgFgBgIQAAgIAEgLQAHgSARgKQAPgKAZAAQALAAAJABQAJABAFACIgJATIgNgEQgJgBgJAAQgPAAgJAEQgJAFgEALQgDAHABAEQABAEAFADQADACAKADQAPADAIAFQAIAEABAIQABAIgFAOQgIAVgSAJQgQAKgaAAIgOAAg");
	this.shape_39.setTransform(698.025,87.625);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00A9F2").s().p("AgJBGIAIhyIgBAAIhPByIgcAAIAQiLIAWAAIgPB1IACAAIBPh1IAZAAIgJB1IACAAIBLh1IAWAAIhdCLg");
	this.shape_40.setTransform(676.5,87.675);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00A9F2").s().p("Ag4BCQgMgGgBgQQgCgQALgcQAKgbAOgQQAOgQAQgGQAQgHAUAAQASAAAJAGQAJAFADAIQADAJgCAKQgCALgEAKIgDAHIgEAIIhhAGQgGAQABAKQAAAJAIAFQAIAFARAAQAMAAAMgDQANgCAJgEIgIAVIgMADIgRAEIgUABIgDAAQgTAAgLgHgAgDgwQgKAGgIAKQgHAKgGAPIBMgGQAEgLABgJQACgJgGgGQgFgFgPAAQgQAAgKAFg");
	this.shape_41.setTransform(656.4306,87.6767);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00A9F2").s().p("AAOBHIAhhYQAFgKABgIQAAgIgEgEQgFgDgLAAQgIAAgJACQgJABgIAHQgJAFgJANIgkBdIgWAAIA1iLIAXAAIgIAUQAIgIAIgGQAJgEAJgCQAKgDAJAAQASABAIAFQAIAGAAALQABAKgGANIglBgg");
	this.shape_42.setTransform(640.2271,87.55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00A9F2").s().p("Ag9BHIA1iLIAWAAIgKAZQAJgLAKgGQAJgGAJgCQAKgDAJAAIACAAIgJAVIgDAAQgJAAgJADQgKACgJAHQgJAGgIAMIgjBbg");
	this.shape_43.setTransform(622.075,87.55);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00A9F2").s().p("Ag4BCQgMgGgBgQQgCgQALgcQAKgbAOgQQAOgQAQgGQAQgHAUAAQASAAAJAGQAJAFADAIQADAJgCAKQgCALgEAKIgDAHIgEAIIhhAGQgGAQABAKQAAAJAIAFQAIAFARAAQAMAAAMgDQANgCAJgEIgIAVIgMADIgRAEIgUABIgDAAQgTAAgLgHgAgDgwQgKAGgIAKQgHAKgGAPIBMgGQAEgLABgJQACgJgGgGQgFgFgPAAQgQAAgKAFg");
	this.shape_44.setTransform(608.7806,87.6767);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00A9F2").s().p("AAOBjIAhhZQAFgKABgIQAAgHgEgEQgFgEgLAAQgIAAgJACQgJACgIAGQgJAGgJALIgkBfIgWAAIBLjFIAVAAIgcBNQAIgIAIgFQAJgFAJgCQAKgCAJAAQASAAAIAGQAIAFAAALQABAKgGANIglBhg");
	this.shape_45.setTransform(592.5771,84.825);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00A9F2").s().p("Ag9BHIA1iLIAWAAIgKAZQAJgLAKgGQAJgGAJgCQAKgDAJAAIACAAIgJAVIgDAAQgJAAgJADQgKACgJAHQgJAGgIAMIgjBbg");
	this.shape_46.setTransform(574.425,87.55);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00A9F2").s().p("AgaBJQgVAAgMgHQgMgGgCgQQgBgQAKgcQALgbANgQQAOgQARgGQAQgHAVAAQAVAAAMAHQAMAGABAQQABAQgKAbQgLAcgNAQQgOAQgRAGQgPAHgTAAIgCAAgAAGAxQALgFAJgMQAIgMAHgUQAIgTABgMQAAgMgHgFQgHgFgPAAQgQAAgKAFQgLAFgIAMQgIAMgIATQgIAUAAAMQgBAMAHAFQAIAFAPAAQAPAAAKgFg");
	this.shape_47.setTransform(560.475,87.6767);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00A9F2").s().p("AhEBjIAuh5IgXAAIAHgSIAYAAIAAgBQAJgYAJgNQAMgMAMgEQAMgFAOABIAIAAIAHABIgHASIgGgBIgJAAQgJgBgHAEQgHADgFAJQgGAJgGAQIAhAAIgHASIghAAIguB5g");
	this.shape_48.setTransform(550.45,84.7725);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00A9F2").s().p("Ag4BCQgMgGgBgQQgCgQALgcQAKgbAOgQQAOgQAQgGQAQgHAUAAQASAAAJAGQAJAFADAIQADAJgCAKQgCALgEAKIgDAHIgEAIIhhAGQgGAQABAKQAAAJAIAFQAIAFARAAQAMAAAMgDQANgCAJgEIgIAVIgMADIgRAEIgUABIgDAAQgTAAgLgHgAgDgwQgKAGgIAKQgHAKgGAPIBMgGQAEgLABgJQACgJgGgGQgFgFgPAAQgQAAgKAFg");
	this.shape_49.setTransform(529.3306,87.6767);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00A9F2").s().p("AgqBcQgFgGAGgQIA/ioIAXAAIg9CiQgEAKABADQACAEAHAAIAFAAIAFgBIgGASIgHABIgIABQgQAAgFgIg");
	this.shape_50.setTransform(519.156,84.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00A9F2").s().p("AgvBgIA1iLIAWAAIg0CLgAARhHQgCgDADgIQAEgJAEgCQAEgDAHABQAHgBACADQADACgEAJQgDAIgEADQgEACgHAAQgHAAgDgCg");
	this.shape_51.setTransform(511.7021,85.0708);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00A9F2").s().p("AhEBjIAvh5IgYAAIAHgSIAYAAIAAgBQAJgYAKgNQALgMALgEQAMgFAPABIAIAAIAHABIgHASIgGgBIgJAAQgKgBgGAEQgHADgGAJQgFAJgGAQIAhAAIgHASIghAAIguB5g");
	this.shape_52.setTransform(505.25,84.7725);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00A9F2").s().p("AgpBUQgIgEgBgJQAAgKAIgSIAdhOIgVAAIAIgTIAVAAIALghIAWAAIgMAhIAjAAIgIATIgjAAIgcBNQgEAKgBAGQgBAGAEACQAEADAIAAIAIgBIAHgBIgGATIgIABIgIAAIgEABQgNAAgHgEg");
	this.shape_53.setTransform(488.575,86.1028);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00A9F2").s().p("AAOBHIAhhYQAFgKABgIQAAgIgEgEQgFgDgLAAQgIAAgJACQgJABgIAHQgJAFgJANIgkBdIgWAAIA1iLIAXAAIgIAUQAIgIAIgGQAJgEAJgCQAKgDAJAAQASABAIAFQAIAGAAALQABAKgGANIglBgg");
	this.shape_54.setTransform(474.2271,87.55);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00A9F2").s().p("Ag4BCQgMgGgBgQQgCgQALgcQAKgbAOgQQAOgQAQgGQAQgHAUAAQASAAAJAGQAJAFADAIQADAJgCAKQgCALgEAKIgDAHIgEAIIhhAGQgGAQABAKQAAAJAIAFQAIAFARAAQAMAAAMgDQANgCAJgEIgIAVIgMADIgRAEIgUABIgDAAQgTAAgLgHgAgDgwQgKAGgIAKQgHAKgGAPIBMgGQAEgLABgJQACgJgGgGQgFgFgPAAQgQAAgKAFg");
	this.shape_55.setTransform(459.3306,87.6767);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00A9F2").s().p("AhTBbQgJgKABgPQACgRAIgWQAHgTAMgQQAKgQARgKQAQgKAXgBQAUAAAIAIQAIAHgBAMIAfhRIAWAAIhLDEIgRAAIAEgWQgHAKgOAIQgPAHgTAAQgXAAgJgJgAgbgSQgLAIgHALQgHAMgFAOQgGAPgCAMQgCAMAFAIQAGAHAQAAQARAAALgGQAMgHAIgMQAIgMAGgRQAHgQABgLQAAgMgHgHQgHgHgQAAQgQAAgLAIg");
	this.shape_56.setTransform(444.9398,84.95);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00A9F2").s().p("AhEBBQgIgFAAgKQgBgLAGgNIAlhhIAWAAIgiBYQgEALgBAIQgBAHAFAEQAEAFALAAQAJAAAJgCQAIgCAIgGQAJgGAIgMIAlhfIAWAAIg2CMIgSAAIAEgVQgIAKgHAFQgJAFgKACIgSABQgSABgIgHg");
	this.shape_57.setTransform(427.6979,87.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00A9F2").s().p("AgpBUQgIgEgBgJQAAgKAIgSIAdhOIgVAAIAIgTIAVAAIALghIAWAAIgMAhIAjAAIgIATIgjAAIgcBNQgEAKgBAGQgBAGAEACQAEADAIAAIAIgBIAHgBIgGATIgIABIgIAAIgEABQgNAAgHgEg");
	this.shape_58.setTransform(416.275,86.1028);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00A9F2").s().p("AgsBIIgPgCIgKgCIAIgTIALACIANACIAOABQAQAAAJgFQAKgEAFgMQADgJgBgEQAAgFgGgDQgGgDgLgDQgOgDgHgEQgGgFgBgIQAAgIAEgLQAHgSARgKQAPgKAZAAQALAAAJABQAJABAFACIgJATIgNgEQgJgBgJAAQgPAAgJAEQgJAFgEALQgDAHABAEQABAEAFADQADACAKADQAPADAIAFQAIAEABAIQABAIgFAOQgIAVgSAJQgQAKgaAAIgOAAg");
	this.shape_59.setTransform(403.975,87.625);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00A9F2").s().p("AgsBIIgPgCIgKgCIAIgTIALACIANACIAOABQAQAAAJgFQAKgEAFgMQADgJgBgEQAAgFgGgDQgGgDgLgDQgOgDgHgEQgGgFgBgIQAAgIAEgLQAHgSARgKQAPgKAZAAQALAAAJABQAJABAFACIgJATIgNgEQgJgBgJAAQgPAAgJAEQgJAFgEALQgDAHABAEQABAEAFADQADACAKADQAPADAIAFQAIAEABAIQABAIgFAOQgIAVgSAJQgQAKgaAAIgOAAg");
	this.shape_60.setTransform(384.825,87.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00A9F2").s().p("AgeAhIAPgWIAPgWIAIgVIAXAAQgEAJgHAMIgRAXIgRAVg");
	this.shape_61.setTransform(378.95,78.275);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00A9F2").s().p("AgvBgIA1iLIAWAAIg0CLgAARhHQgCgDADgIQAEgJAEgCQAEgDAHABQAHgBACADQADACgEAJQgDAIgEADQgEACgHAAQgHAAgDgCg");
	this.shape_62.setTransform(369.3521,85.0708);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00A9F2").s().p("AAOBHIAhhYQAFgKABgIQAAgIgEgEQgFgDgLAAQgIAAgJACQgJABgIAHQgJAFgJANIgkBdIgWAAIA1iLIAXAAIgIAUQAIgIAIgGQAJgEAJgCQAKgDAJAAQASABAIAFQAIAGAAALQABAKgGANIglBgg");
	this.shape_63.setTransform(356.3771,87.55);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00A9F2").s().p("AgvBgIA1iLIAWAAIg0CLgAARhHQgCgDADgIQAEgJAEgCQAEgDAHABQAHgBACADQADACgEAJQgDAIgEADQgEACgHAAQgHAAgDgCg");
	this.shape_64.setTransform(346.3521,85.0708);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00A9F2").s().p("AAGBaIgaieIgCAAIg8CeIgXAAIBEizIAlAAIAYCVIACAAIA5iVIAXAAIhECzg");
	this.shape_65.setTransform(333.1,85.675);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00A9F2").s().p("AgsBIIgPgCIgKgCIAIgTIALACIANACIAOABQAQAAAJgFQAKgEAFgMQADgJgBgEQAAgFgGgDQgGgDgLgDQgOgDgHgEQgGgFgBgIQAAgIAEgLQAHgSARgKQAPgKAZAAQALAAAJABQAJABAFACIgJATIgNgEQgJgBgJAAQgPAAgJAEQgJAFgEALQgDAHABAEQABAEAFADQADACAKADQAPADAIAFQAIAEABAIQABAIgFAOQgIAVgSAJQgQAKgaAAIgOAAg");
	this.shape_66.setTransform(309.575,87.625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00A9F2").s().p("AgvBgIA1iLIAWAAIg0CLgAARhHQgCgDADgIQAEgJAEgCQAEgDAHABQAHgBACADQADACgEAJQgDAIgEADQgEACgHAAQgHAAgDgCg");
	this.shape_67.setTransform(301.1021,85.0708);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00A9F2").s().p("Ag4BCQgMgGgBgQQgCgQALgcQAKgbAOgQQAOgQAQgGQAQgHAUAAQASAAAJAGQAJAFADAIQADAJgCAKQgCALgEAKIgDAHIgEAIIhhAGQgGAQABAKQAAAJAIAFQAIAFARAAQAMAAAMgDQANgCAJgEIgIAVIgMADIgRAEIgUABIgDAAQgTAAgLgHgAgDgwQgKAGgIAKQgHAKgGAPIBMgGQAEgLABgJQACgJgGgGQgFgFgPAAQgQAAgKAFg");
	this.shape_68.setTransform(282.5806,87.6767);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00A9F2").s().p("Ag9BHIA1iLIAWAAIgKAZQAJgLAKgGQAJgGAJgCQAKgDAJAAIACAAIgJAVIgDAAQgJAAgJADQgKACgJAHQgJAGgIAMIgjBbg");
	this.shape_69.setTransform(270.975,87.55);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00A9F2").s().p("Ag4BCQgMgGgBgQQgCgQALgcQAKgbAOgQQAOgQAQgGQAQgHAUAAQASAAAJAGQAJAFADAIQADAJgCAKQgCALgEAKIgDAHIgEAIIhhAGQgGAQABAKQAAAJAIAFQAIAFARAAQAMAAAMgDQANgCAJgEIgIAVIgMADIgRAEIgUABIgDAAQgTAAgLgHgAgDgwQgKAGgIAKQgHAKgGAPIBMgGQAEgLABgJQACgJgGgGQgFgFgPAAQgQAAgKAFg");
	this.shape_70.setTransform(257.6806,87.6767);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00A9F2").s().p("AAKBaIAhhXIhYAAIghBXIgXAAIBEizIAYAAIgcBJIBYAAIAchJIAXAAIhECzg");
	this.shape_71.setTransform(241.575,85.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(1));

	// 内容
	this._showbar = new lib.元件4();
	this._showbar.name = "_showbar";
	this._showbar.setTransform(639.95,376.95,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get(this._showbar).wait(1));

	// csz
	this.pro_bar = new lib.元件3复制();
	this.pro_bar.name = "pro_bar";
	this.pro_bar.setTransform(342.75,654.75);

	this.timeline.addTween(cjs.Tween.get(this.pro_bar).wait(1));

	// diban
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(255,255,255,0.8)").s().p("EhkVAEsIAApXMDIrAAAIAAJXg");
	this.shape_72.setTransform(639.9,690.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(193,273.1,1729.2,1549.7);
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
		{src:"images/index_atlas_1.png?1734507416555", id:"index_atlas_1"}
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