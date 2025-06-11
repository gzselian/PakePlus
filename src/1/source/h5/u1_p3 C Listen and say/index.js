(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,938,1409,939],[0,0,1414,936]]},
		{name:"index_atlas_2", frames: [[0,941,1280,850],[0,0,1404,939],[1406,0,319,333],[1282,941,688,695],[1727,0,189,165],[1727,167,176,174]]}
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



(lib._10 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._11 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._12 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._13 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.位图141 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.位图143 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.位图144 = function() {
	this.initialize(ss["index_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.位图145 = function() {
	this.initialize(ss["index_atlas_2"]);
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

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgjEAZtMAAAgtcMBJvAAAMAAAAtcg");
	mask.setTransform(247.5,164.5);

	// 图层_1
	this.instance = new lib._13();
	this.instance.setTransform(16,13,0.36,0.36);

	this.instance_1 = new lib._12();
	this.instance_1.setTransform(16,10,0.35,0.35);

	this.instance_2 = new lib._11();
	this.instance_2.setTransform(18,28,0.38,0.38);

	this.instance_3 = new lib._10();
	this.instance_3.setTransform(10,22,0.35,0.35);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(10,1,1).p("Egk3gWuMBJvAAAMAAAAtdMhJvAAAg");
	this.shape.setTransform(259,183.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egk3AWvMAAAgtdMBJvAAAMAAAAtdg");
	this.shape_1.setTransform(259,183.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(18,33.1,482,301);
p.frameBounds = [rect, rect, rect, rect];


(lib.元件32复制3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AF5E5IAAgBMglTgADQh0AAgEhxIAAhRQhYgkhHhQQgtgygnhEIAZAKQCDAyBXAAIAAiFQAAh4B4AAMBCnAAAQB4AAAAB4IAAGEQgDBxh1AAI2SAAIAAAEg");
	this.shape.setTransform(237.35,31.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,474.7,62.6);
p.frameBounds = [rect, rect];


(lib.元件32复制2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgoE4IAAABIgdAAIAAgBIkqAAIAAgBI7ogCQh0AAgEhxIAAhRQhYgkhHhQQgtgygnhEIAZAKQCDAyBXAAIAAiFQAAh4B4AAMBGiAAAQB4AAgBB4IAAGEQgDBxh0AAIyaAAIAAAEg");
	this.shape.setTransform(249.85,31.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,499.7,62.6);
p.frameBounds = [rect, rect];


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
	this.shape.graphics.f("#FFFFFF").s().p("AJCE4IAAABIgMAAIAAgBMgmYgADQh0AAgEhxIAAhRQhYgkhHhQQgtgygnhEIAZAKQCDAyBXAAIAAiFQAAh4B4AAMA+3AAAQB4AAABB4IAAGEQgEBxh1AAIxIAAIAAAEg");
	this.shape.setTransform(225.35,31.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,450.7,62.6);
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
	this.shape.graphics.f("#FFFFFF").s().p("EgjpAE3Qh0AAgEhxIAAhRQhYgkhIhQQgtgygmhEIAYAKQCEAzBXgBIAAiFQAAh4B4AAMBLGAAAQB4AAAAB4IAAGEQgEBxh0AAg");
	this.shape.setTransform(264.475,31.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,529,62.2);
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, rect=new cjs.Rectangle(0,0,306,126), rect, rect];


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
	this.shape.setTransform(20.2601,10.986,0.7179,0.7183,-1.0054);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F99703").s().p("AgMALQgFAAgDgDQgDgDAAgFIAAAAQAAgEADgDQADgDAFAAIAZAAQAFAAADADQADADAAAEIAAAAQAAAFgDADQgDADgFAAg");
	this.shape_1.setTransform(20.2601,10.986,0.7179,0.7183,-1.0054);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAACsQgKABgIgJQgIgHAAgLIAAkjQAAgLAIgIQAIgHAKAAIAAAAQALAAAIAHQAIAIAAALIAAEjQAAALgIAHQgIAJgLgBg");
	this.shape_2.setTransform(22.557,22.4353,0.3436,0.269);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAACsQgKABgIgJQgIgHAAgLIAAkjQAAgLAIgIQAIgHAKAAIAAAAQALAAAIAHQAIAIAAALIAAEjQAAALgIAHQgIAJgLgBg");
	this.shape_3.setTransform(18.007,22.4353,0.3436,0.269);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F99703").s().p("Ai9BQQghAAgXgYQgYgXAAghQAAggAYgYQAXgXAhAAIF7AAQAhAAAYAXQAXAYAAAgQAAAhgXAXQgYAYghAAg");
	this.shape_4.setTransform(20.1306,14.1687,0.3437,0.3439,-0.2237);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F99703").s().p("Ag2BgQglAAAAglIgNiYIgBgBIABgBIDQAAIACACIAAAAIgSCYQAAAlgmAAg");
	this.shape_5.setTransform(20.352,23.3386,0.7179,0.7184);

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


(lib.头像 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("AmgHRQititAAj1QAAjzCtitQCsitD0AAQD1AACsCtQCtCtAADzQAAD1itCtQisCsj1AAQj0AAisisg");
	mask.setTransform(-45.1953,63.7381);

	// 图层_1
	this.instance = new lib.位图141();
	this.instance.setTransform(-133,-17,0.5062,0.5062);

	this.instance_1 = new lib.位图143();
	this.instance_1.setTransform(-128,-6,0.2335,0.2335);

	this.instance_2 = new lib.位图144();
	this.instance_2.setTransform(-126,10,0.7582,0.7582);

	this.instance_3 = new lib.位图145();
	this.instance_3.setTransform(-116,-9,0.7943,0.7943);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-104.2,9.5,118,118);
p.frameBounds = [rect, rect, new cjs.Rectangle(-104.2,10,118,117.5), new cjs.Rectangle(-104.2,9.5,118,118)];


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


(lib.元件34复制3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.元件33("single",3);
	this.instance.setTransform(542,276.95,1,1,0,0,0,565,315);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件34复制3, rect = new cjs.Rectangle(-5,-5,482,301), [rect]);


(lib.元件34复制2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.元件33("single",2);
	this.instance.setTransform(542,276.95,1,1,0,0,0,565,315);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件34复制2, rect = new cjs.Rectangle(-5,-5,482,301), [rect]);


(lib.元件34复制 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.元件33("single",1);
	this.instance.setTransform(542,276.95,1,1,0,0,0,565,315);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件34复制, rect = new cjs.Rectangle(-5,-5,482,301), [rect]);


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

	// 图层_1
	this.instance = new lib.元件33("synched",0);
	this.instance.setTransform(542,276.95,1,1,0,0,0,565,315);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件34, rect = new cjs.Rectangle(-5,-5,482,301), [rect]);


(lib.元件21复制5 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(242.9,27.5,1.7564,1.1415,0,0,0,125.5,23.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.元件23(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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AMQADANABAPQgBAQgDANQgDANgKAHQgLAIgRAAQgQAAgJgGgAJBgiQgIAGgDAJQgCAJAAAMQAAANACAKQADAJAIAFQAHAFAOAAQAMAAAHgGQAFgGADgJQACgKAAgLQAAgKgCgKQgDgJgGgGQgGgFgMAAQgOAAgHAEgAFzA2QgLgFgGgNQgGgMAAgWQAAgUAGgMQAGgNALgFQAMgFAPAAQARAAALAFQALAFAGANQAFAMAAAUQAAAWgFAMQgGANgLAFQgLAFgRAAQgPAAgMgFgAF7gjQgHAEgDAKQgCAIAAAPQAAARACAIQADAJAHAFQAIADALAAQAMAAAIgDQAGgFAEgJQACgIAAgRQAAgPgCgIQgEgKgHgEQgHgDgMAAQgLAAgIADgAD2A2QgLgFgGgNQgGgMAAgWQAAgUAGgMQAGgNALgFQALgFARAAQAPAAAMAFQALAFAGANQAFAMAAAUQAAAWgFAMQgGANgLAFQgMAFgPAAQgRAAgLgFgAD+gjQgGAEgEAKQgDAIABAPQgBARADAIQAEAJAGAFQAIADAMAAQALAAAIgDQAHgFADgJQADgIgBgRQABgPgDgIQgEgKgHgEQgHgDgLAAQgMAAgIADgAhZA7QgQAAgLgIQgLgJgFgRIgCgJIAAgIIAAgGQAAgQAHgNQAHgMANgIIALgFIALgBIACAAQASABAMASIAAgEIASAAIAAA5IABAUIADATIgCAAIgPAAQgBAAAAAAQAAgBAAAAQgBgBAAgBQAAAAgBgCIgBgMIgDAFIgFAFQgFAEgGACQgGACgHAAgAhlgfQgJAGgFAMIgCAIIgBAHIAAAFQAAAKAEAJQAFAIAIAHIAHADIAHAAIAEAAQAfABAAgmIAAgHQAAgPgFgKQgGgJgLgDIgEAAIgDAAQgMAAgIAGgAsMA2QgLgFgGgNQgGgMAAgWQAAgUAGgMQAGgNALgFQAMgFAPAAQARAAALAFQALAFAGANQAFAMAAAUQAAAWgFAMQgGANgLAFQgLAFgRAAQgPAAgMgFgAsEgjQgHAEgDAKQgCAIAAAPQAAARACAIQADAJAHAFQAIADALAAQAMAAAIgDQAGgFAEgJQACgIAAgRQAAgPgCgIQgEgKgHgEQgHgDgMAAQgLAAgIADgA3QA2QgMgFgFgNQgHgMAAgWQAAgUAHgMQAFgNAMgFQALgFAQAAQAQAAAMAFQAKAFAHANQAFAMAAAUQAAAWgFAMQgHANgKAFQgMAFgQAAQgQAAgLgFgA3IgjQgHAEgDAKQgDAIAAAPQAAARADAIQADAJAHAFQAHADAMAAQAMAAAHgDQAHgFADgJQADgIgBgRQABgPgDgIQgEgKgGgEQgIgDgLAAQgMAAgHADgA5WA0QgKgHgEgNQgDgNAAgRQAAgOADgNQAEgMAKgIQAKgIASAAQAPAAAJAGQAIAFADAKIAAhAIASAAIAACZIgPAAIgDgSQgDAJgJAFQgJAGgOAAQgSAAgKgHgA5LghQgGAHgCAJQgCAKAAAJQAAAMACAKQACAJAGAFQAHAGAMAAQANAAAHgEQAIgGADgJQADgJAAgOQAAgLgDgJQgDgKgIgFQgHgGgNABQgNAAgGAFgA75A2QgMgFgFgNQgHgMAAgWQAAgUAHgMQAFgNALgFQALgFAQAAQANAAAJAEQAJAEAFAHQAEAHACAHIABAQIAAAGIgBAHIhKAEQABAMADAHQADAIAIAEQAIADAMAAQAKAAAJgBQAJgDAHgDIAAAQIgJADIgNADIgPABQgQAAgLgFgA7ygjQgHAFgDAIQgCAIgBALIA7gFQAAgHgCgIQgCgHgFgFQgHgDgLAAQgNAAgGADgEAhBAA6QgEABgDgBQgDgCgBgDQgBgCAAgGQAAgHADgDQACgDAHABQAIgBACADQADADAAAHQAAAGgBACQgBADgDACIgFAAIgDAAgAoDA6QgFABgDgBQgDgCgBgDQgCgCAAgGQAAgHAEgDQACgDAIABQAGgBAEADQACADAAAHQABAGgCACQgBADgDACIgFAAIgCAAgASWA3QgHgCgDgIQgDgHgBgOIAAg9IgQAAIAAgOIAQAAIAAgaIASAAIAAAaIAbAAIAAAOIgbAAIAAA8IABAMQACAFADACQADACAHgBIAGAAIAFAAIAAAOIgGABIgFAAIgEAAQgKAAgGgDgAHtA3QgHgCgDgIQgEgHAAgOIAAg9IgPAAIAAgOIAPAAIAAgaIASAAIAAAaIAbAAIAAAOIgbAAIAAA8IABAMQABAFAEACQADACAGgBIAHAAIAFAAIAAAOIgFABIgHAAIgDAAQgKAAgGgDgApGA3QgGgCgEgIQgDgHAAgOIAAg9IgQAAIAAgOIAQAAIAAgaIASAAIAAAaIAbAAIAAAOIgbAAIAAA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");
	this.shape.setTransform(240.45,28.05);

	this.instance_1 = new lib.元件32复制3();
	this.instance_1.setTransform(319.85,36.65,1,1,0,0,0,327.9,42.3);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("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AMQADANABAPQgBAQgDANQgDANgKAHQgLAIgRAAQgQAAgJgGgAJBgiQgIAGgDAJQgCAJAAAMQAAANACAKQADAJAIAFQAHAFAOAAQAMAAAHgGQAFgGADgJQACgKAAgLQAAgKgCgKQgDgJgGgGQgGgFgMAAQgOAAgHAEgAFzA2QgLgFgGgNQgGgMAAgWQAAgUAGgMQAGgNALgFQAMgFAPAAQARAAALAFQALAFAGANQAFAMAAAUQAAAWgFAMQgGANgLAFQgLAFgRAAQgPAAgMgFgAF7gjQgHAEgDAKQgCAIAAAPQAAARACAIQADAJAHAFQAIADALAAQAMAAAIgDQAGgFAEgJQACgIAAgRQAAgPgCgIQgEgKgHgEQgHgDgMAAQgLAAgIADgAD2A2QgLgFgGgNQgGgMAAgWQAAgUAGgMQAGgNALgFQALgFARAAQAPAAAMAFQALAFAGANQAFAMAAAUQAAAWgFAMQgGANgLAFQgMAFgPAAQgRAAgLgFgAD+gjQgGAEgEAKQgDAIABAPQgBARADAIQAEAJAGAFQAIADAMAAQALAAAIgDQAHgFADgJQADgIgBgRQABgPgDgIQgEgKgHgEQgHgDgLAAQgMAAgIADgAhZA7QgQAAgLgIQgLgJgFgRIgCgJIAAgIIAAgGQAAgQAHgNQAHgMANgIIALgFIALgBIACAAQASABAMASIAAgEIASAAIAAA5IABAUIADATIgCAAIgPAAQgBAAAAAAQAAgBAAAAQgBgBAAgBQAAAAgBgCIgBgMIgDAFIgFAFQgFAEgGACQgGACgHAAgAhlgfQgJAGgFAMIgCAIIgBAHIAAAFQAAAKAEAJQAFAIAIAHIAHADIAHAAIAEAAQAfABAAgmIAAgHQAAgPgFgKQgGgJgLgDIgEAAIgDAAQgMAAgIAGgAsMA2QgLgFgGgNQgGgMAAgWQAAgUAGgMQAGgNALgFQAMgFAPAAQARAAALAFQALAFAGANQAFAMAAAUQAAAWgFAMQgGANgLAFQgLAFgRAAQgPAAgMgFgAsEgjQgHAEgDAKQgCAIAAAPQAAARACAIQADAJAHAFQAIADALAAQAMAAAIgDQAGgFAEgJQACgIAAgRQAAgPgCgIQgEgKgHgEQgHgDgMAAQgLAAgIADgA3QA2QgMgFgFgNQgHgMAAgWQAAgUAHgMQAFgNAMgFQALgFAQAAQAQAAAMAFQAKAFAHANQAFAMAAAUQAAAWgFAMQgHANgKAFQgMAFgQAAQgQAAgLgFgA3IgjQgHAEgDAKQgDAIAAAPQAAARADAIQADAJAHAFQAHADAMAAQAMAAAHgDQAHgFADgJQADgIgBgRQABgPgDgIQgEgKgGgEQgIgDgLAAQgMAAgHADgA5WA0QgKgHgEgNQgDgNAAgRQAAgOADgNQAEgMAKgIQAKgIASAAQAPAAAJAGQAIAFADAKIAAhAIASAAIAACZIgPAAIgDgSQgDAJgJAFQgJAGgOAAQgSAAgKgHgA5LghQgGAHgCAJQgCAKAAAJQAAAMACAKQACAJAGAFQAHAGAMAAQANAAAHgEQAIgGADgJQADgJAAgOQAAgLgDgJQgDgKgIgFQgHgGgNABQgNAAgGAFgA75A2QgMgFgFgNQgHgMAAgWQAAgUAHgMQAFgNALgFQALgFAQAAQANAAAJAEQAJAEAFAHQAEAHACAHIABAQIAAAGIgBAHIhKAEQABAMADAHQADAIAIAEQAIADAMAAQAKAAAJgBQAJgDAHgDIAAAQIgJADIgNADIgPABQgQAAgLgFgA7ygjQgHAFgDAIQgCAIgBALIA7gFQAAgHgCgIQgCgHgFgFQgHgDgLAAQgNAAgGADgEAhBAA6QgEABgDgBQgDgCgBgDQgBgCAAgGQAAgHADgDQACgDAHABQAIgBACADQADADAAAHQAAAGgBACQgBADgDACIgFAAIgDAAgAoDA6QgFABgDgBQgDgCgBgDQgCgCAAgGQAAgHAEgDQACgDAIABQAGgBAEADQACADAAAHQABAGgCACQgBADgDACIgFAAIgCAAgASWA3QgHgCgDgIQgDgHgBgOIAAg9IgQAAIAAgOIAQAAIAAgaIASAAIAAAaIAbAAIAAAOIgbAAIAAA8IABAMQACAFADACQADACAHgBIAGAAIAFAAIAAAOIgGABIgFAAIgEAAQgKAAgGgDgAHtA3QgHgCgDgIQgEgHAAgOIAAg9IgPAAIAAgOIAPAAIAAgaIASAAIAAAaIAbAAIAAAOIgbAAIAAA8IABAMQABAFAEACQADACAGgBIAHAAIAFAAIAAAOIgFABIgHAAIgDAAQgKAAgGgDgApGA3QgGgCgEgIQgDgHAAgOIAAg9IgQAAIAAgOIAQAAIAAgaIASAAIAAAaIAbAAIAAAOIgbAAIAAA8IAAAMQACAFAEACQADACAGgBIAGAAIAGAAIAAAOIgGABIgGAAIgDAAQgKAAgHgDgEAgCAA1QgGgGAAgMIAAiDIARAAIAAB/QAAAHACADQADADAFgBIAFAAIADAAIAAAOIgEABIgHAAIgCAAQgKAAgGgFgANeA1QgFgGgBgMIAAiDIARAAIAAB/QABAHACADQACADAGgBIAEAAIAEAAIAAAOIgFABIgHAAIgBAAQgLAAgGgFgAMlA1QgHgGABgMIAAiDIARAAIAAB/QgBAHADADQADADAFgBIAEAAIAEAAIAAAOIgFABIgGAAIgCAAQgLAAgFgFgAitA1QgHgGAAgMIAAiDIARAAIAAB/QABAHACADQACADAGgBIAEAAIAEAAIAAAOIgFABIgGAAIgCAAQgLAAgFgFgA/dA1QgFgGAAgMIAAiDIARAAIAAB/QAAAHACADQADADAFgBIAEAAIAEAAIAAAOIgFABIgHAAIgBAAQgLAAgGgFgAXaA6IgMAAIgLgCIgJgCIAAgOIAKACIALABIALABQAMAAAHgDQAGgFAAgJQAAgGgCgEQgBgDgGgDQgFgCgKgCQgMgCgHgFQgGgCgDgHQgDgFAAgKQAAgNAKgIQAKgIAUAAIAPABIAMADIgBAOQgFgCgHAAQgHgCgHAAQgMAAgFADQgHAEAAAJQABAFABADQACAEAEACQAFACAIABQANADAIADQAHADADAHQAEAGgBAKQAAARgKAIQgKAHgTAAIgCAAgAvlA6IgLAAIgLgCIgJgCIAAgOIAKACIAKABIALABQANAAAGgDQAGgFAAgJQABgGgCgEQgCgDgFgDQgGgCgKgCQgLgCgIgFQgGgCgDgHQgDgFAAgKQABgNAJgIQAKgIAUAAIAPABIAMADIgBAOQgFgCgHAAQgHgCgHAAQgMAAgFADQgGAEAAAJQAAAFABADQADAEAEACQAFACAIABQAMADAIADQAHADAEAHQADAGAAAKQAAARgKAIQgLAHgSAAIgDAAgAbOA5IAAhEQAAgIgDgHQgBgFgEgEQgFgCgJAAQgGgBgHACQgGACgFAEQgGAFgDAJIAABJIgRAAIAAiZIARAAIAAA8QADgGAHgEQAFgEAGgCIAOgBQAOAAAIAFQAIAEADAIQAEAIAAAKIAABLgAVBA5IAAhsIAQAAIAAAUQAEgJAGgFQAFgFAHgCIANgBIADAAIgBAQIgDAAQgGAAgHABQgHACgFAGQgFAFgEAKIAABGgARFA5IAAheIgSAAIAAgOIASAAIAAgBQAAgTAEgKQAFgJAIgDQAJgEALAAIAFABIAHABIAAANIgGAAIgGAAQgIAAgEACQgEADgCAHQgCAGAAANIAaAAIAAAOIgaAAIAABegACjA5IAAheIgTAAIAAgOIATAAIAAgBQAAgTAFgKQAEgJAIgDQAJgEAKAAIAGABIAHABIAAANIgGAAIgHAAQgHAAgEACQgFADgBAHQgCAGAAANIAaAAIAAAOIgaAAIAABegAmfA5IAAiLIATAAIAACLgAqgA5IAAhsIARAAIAAAUQAEgJAFgFQAGgFAHgCIANgBIACAAIgBAQIgCAAQgHAAgGABQgHACgGAGQgEAFgEAKIAABGgAznA5IAAhEQAAgIgCgHQgBgFgFgEQgFgCgIAAQgHgBgGACQgHACgFAEQgFAFgDAJIAABJIgRAAIAAhsIARAAIAAAPQADgGAGgEQAGgEAGgCIANgBQAPAAAIAFQAHAEAEAIQADAIAAAKIAABLgA1kA5IAAhsIARAAIAABsgA80A5IgngzIgHAAIAAAzIgRAAIAAiZIARAAIAABZIAHAAIAlgsIAWAAIguAyIAxA6gA+pA5IAAhsIARAAIAABsgEghNAA5IAAiLIASAAIAACLgA1khJQgCgCAAgHQAAgGACgCQACgCAGABQAGgBACACQACACABAGQgBAHgCACQgCACgGAAQgGAAgCgCgA+ohJQgCgCAAgHQAAgGACgCQACgCAGABQAFgBADACQACACAAAGQAAAHgCACQgDACgFAAQgGAAgCgCg");
	this.shape_1.setTransform(240.45,28.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-12.6,492,79);
p.frameBounds = [rect, rect];


(lib.元件21复制4 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(253.35,27.5,1.84,1.1415,0,0,0,125.5,23.7);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.元件23(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EAhLABSQAJAAAGgCQAGgDAEgGQAEgFACgJIgrhsIATAAIAhBZIABAAIAghZIASAAIgoBoQgEAOgHAKQgFAKgKAFQgKAFgPAAgEggvABSQAJAAAHgCQAFgDAFgGQAEgFACgJIgrhsIATAAIAgBZIACAAIAfhZIASAAIgnBoQgFAOgGAKQgGAKgJAFQgKAFgQAAgAf1A7QgRAAgLgIQgKgJgGgRIgBgJIgBgIIAAgGQAAgQAIgNQAGgMAOgIIALgFIAKgBIACAAQATABAMASIAAgEIARAAIAAA5IABAUIADATIgBAAIgQAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQgBAAAAgCIgCgMIgDAFIgFAFQgEAEgHACQgFACgHAAgAfogfQgIAGgGAMIgBAIIgBAHIAAAFQAAAKAEAJQAEAIAIAHIAHADIAHAAIAFAAQAeABAAgmIAAgHQABgPgGgKQgFgJgLgDIgEAAIgDAAQgMAAgJAGgAdfA0QgKgHgDgNQgEgNAAgRQAAgOAEgNQADgMAKgIQAJgIATAAQAQAAAHAGQAJAFADAKIAAhAIARAAIAACZIgOAAIgDgSQgDAJgJAFQgIAGgPAAQgTAAgJgHgAdqghQgGAHgCAJQgCAKAAAJQAAAMACAKQACAJAHAFQAFAGANAAQANAAAHgEQAIgGADgJQADgJAAgOQAAgLgDgJQgDgKgIgFQgHgGgNABQgMAAgHAFgAaZA2QgIgEgEgIQgCgIAAgKIAAhLIARAAIAABEQAAAIACAHQABAFAFAEQAFACAIAAQAHABAGgCQAGgCAFgEQAFgFADgJIAAhJIASAAIAABsIgQAAIgBgQQgEAIgFADQgGAEgHACQgGABgHAAQgOAAgIgFgAXtA7QgQAAgMgIQgKgJgFgRIgCgJIgBgIIAAgGQABgQAGgNQAHgMAOgIIALgFIAKgBIACAAQATABAMASIAAgEIARAAIAAA5IABAUIADATIgBAAIgQAAQAAAAgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgCIgCgMIgDAFIgEAFQgGAEgGACQgGACgGAAgAXggfQgIAGgGAMIgCAIIgBAHIAAAFQABAKAEAJQAEAIAIAHIAHADIAIAAIADAAQAfABAAgmIAAgHQABgPgGgKQgFgJgMgDIgDAAIgDAAQgMAAgJAGgAVrA6IgOgCIgKgDIAAgQIALADIAOACIARABQAPAAAJgFQAHgGAAgNQAAgIgCgFQgDgFgHgCQgHgEgNgDQgOgDgJgEQgIgEgEgIQgEgHAAgMQAAgUAMgJQALgJAYAAIANABIANABIAJACIAAARIgQgDQgJgCgKgBQgKABgGACQgGABgEAFQgDAEAAAKQAAAGACAEQACAEAGAEQAGACANAEQAPADAJAEQAKAFAEAJQAFAGgBAOQAAAUgNALQgMAJgYAAIgSgBgAQ9A2QgLgFgGgNQgGgMAAgWQAAgUAGgMQAGgNALgFQAMgFAPAAQARAAALAFQALAFAGANQAFAMAAAUQAAAWgFAMQgGANgLAFQgLAFgRAAQgPAAgMgFgARFgjQgHAEgDAKQgCAIAAAPQAAARACAIQADAJAHAFQAIADALAAQAMAAAIgDQAGgFAEgJQACgIAAgRQAAgPgCgIQgEgKgHgEQgHgDgMAAQgLAAgIADgAOEA0QgLgHgDgNQgEgNAAgRQAAgOAEgNQADgMALgIQAJgIASAAQAQAAAIAGQAJAFADAKIAAhAIARAAIAACZIgPAAIgCgSQgDAJgKAFQgIAGgPAAQgSAAgJgHgAOOghQgFAHgDAJQgBAKAAAJQAAAMABAKQACAJAHAFQAGAGAMAAQANAAAIgEQAHgGAEgJQACgJAAgOQAAgLgCgJQgEgKgHgFQgIgGgNABQgMAAgHAFgALRA7QgQAAgLgIQgKgJgGgRIgCgJIAAgIIAAgGQAAgQAHgNQAHgMAOgIIAKgFIAKgBIADAAQASABAMASIAAgEIASAAIAAA5IABAUIACATIgBAAIgQAAQAAAAAAAAQAAgBgBAAQAAgBAAgBQAAAAgBgCIgBgMIgDAFIgFAFQgFAEgGACQgGACgHAAgALFgfQgJAGgFAMIgCAIIgBAHIAAAFQAAAKAEAJQAFAIAIAHIAGADIAIAAIAEAAQAfABAAgmIAAgHQAAgPgGgKQgFgJgLgDIgEAAIgCAAQgNAAgIAGgAJEA2QgKgFgHgNQgFgMAAgWQAAgUAFgMQAHgNAKgFQAMgFAQAAQAQAAALAFQAMAFAFANQAGAMAAAUQAAAWgGAMQgFANgMAFQgLAFgQAAQgQAAgMgFgAJNgjQgHAEgDAKQgDAIAAAPQAAARADAIQADAJAHAFQAHADAMAAQAMAAAHgDQAHgFADgJQADgIAAgRQAAgPgDgIQgDgKgIgEQgGgDgMAAQgMAAgHADgAHQA1QgHgFgEgKIgCATIgPAAIAAiZIARAAIAABBQAEgKAHgGQAJgGAPAAQASAAAKAHQALAIADAMQADANAAAPQAAAQgDANQgDANgLAHQgKAIgSAAQgPAAgJgGgAHSgiQgHAGgEAJQgDAJAAAMQAAANADAKQAEAJAHAFQAIAFANAAQAMAAAGgGQAGgGADgJQABgKAAgLQAAgKgBgKQgCgJgHgGQgGgFgMAAQgNAAgIAEgAFPA2QgKgFgHgNQgFgMAAgWQAAgUAFgMQAGgNALgFQALgFAQAAQAOAAAJAEQAIAEAEAHQAFAHACAHIACAQIgBAGIAAAHIhKAEQAAAMADAHQADAIAIAEQAHADANAAQAJAAAKgBQAJgDAGgDIAAAQIgIADIgNADIgPABQgQAAgMgFgAFXgjQgHAFgCAIQgDAIAAALIA5gFQAAgHgBgIQgCgHgFgFQgHgDgLAAQgMAAgHADgAChA7QgRAAgLgIQgKgJgGgRIgBgJIgBgIIAAgGQAAgQAHgNQAGgMAPgIIALgFIAJgBIACAAQATABANASIAAgEIARAAIAAA5IABAUIACATIAAAAIgRAAQAAAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgCIgCgMIgEAFIgEAFQgFAEgGACQgGACgHAAgACTgfQgIAGgFAMIgCAIIgBAHIAAAFQAAAKAFAJQAEAIAHAHIAIADIAHAAIAEAAQAfABAAgmIAAgHQAAgPgGgKQgFgJgLgDIgDAAIgDAAQgNAAgJAGgAldA2QgMgFgGgNQgFgMgBgWQABgUAFgMQAGgNALgFQALgFAQAAQAOAAAIAEQAJAEAFAHQAEAHACAHIACAQIgBAGIAAAHIhLAEQAAAMAEAHQADAIAIAEQAHADANAAQAKAAAJgBQAJgDAGgDIAAAQIgIADIgNADIgPABQgQAAgLgFgAlWgjQgHAFgCAIQgDAIgBALIA7gFQgBgHgBgIQgCgHgFgFQgHgDgLAAQgMAAgHADgApkA2QgMgFgFgNQgHgMAAgWQAAgUAHgMQAFgNAMgFQALgFAQAAQAQAAAMAFQAKAFAHANQAFAMAAAUQAAAWgFAMQgHANgKAFQgMAFgQAAQgQAAgLgFgApcgjQgHAEgDAKQgDAIAAAPQAAARADAIQADAJAHAFQA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");
	this.shape.setTransform(253.65,28.05);

	this.instance_1 = new lib.元件32复制2();
	this.instance_1.setTransform(319.85,36.65,1,1,0,0,0,327.9,42.3);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("EAhLABSQAJAAAGgCQAGgDAEgGQAEgFACgJIgrhsIATAAIAhBZIABAAIAghZIASAAIgoBoQgEAOgHAKQgFAKgKAFQgKAFgPAAgEggvABSQAJAAAHgCQAFgDAFgGQAEgFACgJIgrhsIATAAIAgBZIACAAIAfhZIASAAIgnBoQgFAOgGAKQgGAKgJAFQgKAFgQAAgAf1A7QgRAAgLgIQgKgJgGgRIgBgJIgBgIIAAgGQAAgQAIgNQAGgMAOgIIALgFIAKgBIACAAQATABAMASIAAgEIARAAIAAA5IABAUIADATIgBAAIgQAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQgBAAAAgCIgCgMIgDAFIgFAFQgEAEgHACQgFACgHAAgAfogfQgIAGgGAMIgBAIIgBAHIAAAFQAAAKAEAJQAEAIAIAHIAHADIAHAAIAFAAQAeABAAgmIAAgHQABgPgGgKQgFgJgLgDIgEAAIgDAAQgMAAgJAGgAdfA0QgKgHgDgNQgEgNAAgRQAAgOAEgNQADgMAKgIQAJgIATAAQAQAAAHAGQAJAFADAKIAAhAIARAAIAACZIgOAAIgDgSQgDAJgJAFQgIAGgPAAQgTAAgJgHgAdqghQgGAHgCAJQgCAKAAAJQAAAMACAKQACAJAHAFQAFAGANAAQANAAAHgEQAIgGADgJQADgJAAgOQAAgLgDgJQgDgKgIgFQgHgGgNABQgMAAgHAFgAaZA2QgIgEgEgIQgCgIAAgKIAAhLIARAAIAABEQAAAIACAHQABAFAFAEQAFACAIAAQAHABAGgCQAGgCAFgEQAFgFADgJIAAhJIASAAIAABsIgQAAIgBgQQgEAIgFADQgGAEgHACQgGABgHAAQgOAAgIgFgAXtA7QgQAAgMgIQgKgJgFgRIgCgJIgBgIIAAgGQABgQAGgNQAHgMAOgIIALgFIAKgBIACAAQATABAMASIAAgEIARAAIAAA5IABAUIADATIgBAAIgQAAQAAAAgBAAQAAgBAAAAQAAgBgBgBQAAAAAAgCIgCgMIgDAFIgEAFQgGAEgGACQgGACgGAAgAXggfQgIAGgGAMIgCAIIgBAHIAAAFQABAKAEAJQAEAIAIAHIAHADIAIAAIADAAQAfABAAgmIAAgHQABgPgGgKQgFgJgMgDIgDAAIgDAAQgMAAgJAGgAVrA6IgOgCIgKgDIAAgQIALADIAOACIARABQAPAAAJgFQAHgGAAgNQAAgIgCgFQgDgFgHgCQgHgEgNgDQgOgDgJgEQgIgEgEgIQgEgHAAgMQAAgUAMgJQALgJAYAAIANABIANABIAJACIAAARIgQgDQgJgCgKgBQgKABgGACQgGABgEAFQgDAEAAAKQAAAGACAEQACAEAGAEQAGACANAEQAPADAJAEQAKAFAEAJQAFAGgBAOQAAAUgNALQgMAJgYAAIgSgBgAQ9A2QgLgFgGgNQgGgMAAgWQAAgUAGgMQAGgNALgFQAMgFAPAAQARAAALAFQALAFAGANQAFAMAAAUQAAAWgFAMQgGANgLAFQgLAFgRAAQgPAAgMgFgARFgjQgHAEgDAKQgCAIAAAPQAAARACAIQADAJAHAFQAIADALAAQAMAAAIgDQAGgFAEgJQACgIAAgRQAAgPgCgIQgEgKgHgEQgHgDgMAAQgLAAgIADgAOEA0QgLgHgDgNQgEgNAAgRQAAgOAEgNQADgMALgIQAJgIASAAQAQAAAIAGQAJAFADAKIAAhAIARAAIAACZIgPAAIgCgSQgDAJgKAFQgIAGgPAAQgSAAgJgHgAOOghQgFAHgDAJQgBAKAAAJQAAAMABAKQACAJAHAFQAGAGAMAAQANAAAIgEQAHgGAEgJQACgJAAgOQAAgLgCgJQgEgKgHgFQgIgGgNABQgMAAgHAFgALRA7QgQAAgLgIQgKgJgGgRIgCgJIAAgIIAAgGQAAgQAHgNQAHgMAOgIIAKgFIAKgBIADAAQASABAMASIAAgEIASAAIAAA5IABAUIACATIgBAAIgQAAQAAAAAAAAQAAgBgBAAQAAgBAAgBQAAAAgBgCIgBgMIgDAFIgFAFQgFAEgGACQgGACgHAAgALFgfQgJAGgFAMIgCAIIgBAHIAAAFQAAAKAEAJQAFAIAIAHIAGADIAIAAIAEAAQAfABAAgmIAAgHQAAgPgGgKQgFgJgLgDIgEAAIgCAAQgNAAgIAGgAJEA2QgKgFgHgNQgFgMAAgWQAAgUAFgMQAHgNAKgFQAMgFAQAAQAQAAALAFQAMAFAFANQAGAMAAAUQAAAWgGAMQgFANgMAFQgLAFgQAAQgQAAgMgFgAJNgjQgHAEgDAKQgDAIAAAPQAAARADAIQADAJAHAFQAHADAMAAQAMAAAHgDQAHgFADgJQADgIAAgRQAAgPgDgIQgDgKgIgEQgGgDgMAAQgMAAgHADgAHQA1QgHgFgEgKIgCATIgPAAIAAiZIARAAIAABBQAEgKAHgGQAJgGAPAAQASAAAKAHQALAIADAMQADANAAAPQAAAQgDANQgDANgLAHQgKAIgSAAQgPAAgJgGgAHSgiQgHAGgEAJQgDAJAAAMQAAANADAKQAEAJAHAFQAIAFANAAQAMAAAGgGQAGgGADgJQABgKAAgLQAAgKgBgKQgCgJgHgGQgGgFgMAAQgNAAgIAEgAFPA2QgKgFgHgNQgFgMAAgWQAAgUAFgMQAGgNALgFQALgFAQAAQAOAAAJAEQAIAEAEAHQAFAHACAHIACAQIgBAGIAAAHIhKAEQAAAMADAHQADAIAIAEQAHADANAAQAJAAAKgBQAJgDAGgDIAAAQIgIADIgNADIgPABQgQAAgMgFgAFXgjQgHAFgCAIQgDAIAAALIA5gFQAAgHgBgIQgCgHgFgFQgHgDgLAAQgMAAgHADgAChA7QgRAAgLgIQgKgJgGgRIgBgJIgBgIIAAgGQAAgQAHgNQAGgMAPgIIALgFIAJgBIACAAQATABANASIAAgEIARAAIAAA5IABAUIACATIAAAAIgRAAQAAAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgCIgCgMIgEAFIgEAFQgFAEgGACQgGACgHAAgACTgfQgIAGgFAMIgCAIIgBAHIAAAFQAAAKAFAJQAEAIAHAHIAIADIAHAAIAEAAQAfABAAgmIAAgHQAAgPgGgKQgFgJgLgDIgDAAIgDAAQgNAAgJAGgAldA2QgMgFgGgNQgFgMgBgWQABgUAFgMQAGgNALgFQALgFAQAAQAOAAAIAEQAJAEAFAHQAEAHACAHIACAQIgBAGIAAAHIhLAEQAAAMAEAHQADAIAIAEQAHADANAAQAKAAAJgBQAJgDAGgDIAAAQIgIADIgNADIgPABQgQAAgLgFgAlWgjQgHAFgCAIQgDAIgBALIA7gFQgBgHgBgIQgCgHgFgFQgHgDgLAAQgMAAgHADgApkA2QgMgFgFgNQgHgMAAgWQAAgUAHgMQAFgNAMgFQALgFAQAAQAQAAAMAFQAKAFAHANQAFAMAAAUQAAAWgFAMQgHANgKAFQgMAFgQAAQgQAAgLgFgApcgjQgHAEgDAKQgDAIAAAPQAAARADAIQADAJAHAFQAHADAMAAQAMAAAHgDQAHgFADgJQADgIgBgRQABgPgDgIQgEgKgGgEQgIgDgLAAQgMAAgHADgAuJA0QgKgHgDgNQgFgNAAgRQAAgOAFgNQADgMAKgIQAJgIASAAQAQAAAJAGQAIAFADAKIAAhAIARAAIAACZIgOAAIgDgSQgDAJgJAFQgIAGgQAAQgSAAgJgHgAt+ghQgGAHgCAJQgCAKAAAJQAAAMACAKQACAJAGAFQAHAGAMAAQANAAAIgEQAHgGADgJQADgJgBgOQABgLgDgJQgDgKgHgFQgIgGgNABQgNAAgGAFgAxrA7QgRAAgLgIQgKgJgGgRIgBgJIgBgIIAAgGQAAgQAIgNQAGgMAOgIIALgFIAKgBIACAAQASABANASIAAgEIASAAIAAA5IAAAUIADATIgBAAIgQAAQAAAAAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgCIgCgMIgDAFIgFAFQgFAEgGACQgFACgHAAgAx4gfQgJAGgFAMIgBAIIgBAHIAAAFQgBAKAFAJQAEAIAIAHIAHADIAHAAIAFAAQAeABAAgmIAAgHQAAgPgFgKQgGgJgKgDIgEAAIgDAAQgMAAgJAGgA1xA2QgLgFgGgNQgGgMAAgWQAAgUAGgMQAFgNAMgFQALgFAQAAQANAAAJAEQAJAEAEAHQAEAHADAHIABAQIAAAGIgBAHIhKAEQAAAMAEAHQACAIAIAEQAIADANAAQAJAAAJgBQAJgDAHgDIAAAQIgJADIgMADIgQABQgPAAgMgFgA1pgjQgIAFgCAIQgCAIgBALIA6gFQAAgHgBgIQgCgHgGgFQgGgDgLAAQgNAAgGADgA6uA2QgMgFgFgNQgHgMAAgWQAAgUAHgMQAFgNAMgFQALgFAQAAQAQAAAMAFQAKAFAHANQAFAMAAAUQAAAWgFAMQgHANgKAFQgMAFgQAAQgQAAgLgFgA6mgjQgHAEgDAKQgDAIAAAPQAAARADAIQADAJAHAFQAHADAMAAQAMAAAHgDQAHgFADgJQADgIgBgRQABgPgDgIQgEgKgGgEQgIgDgLAAQgMAAgHADgA9vA1QgIgFgEgKIgBATIgQAAIAAiZIARAAIAABBQAEgKAIgGQAIgGAQAAQASAAAKAHQAKAIAEAMQADANAAAPQAAAQgDANQgEANgKAHQgKAIgSAAQgQAAgIgGgA9ugiQgHAGgDAJQgDAJAAAMQAAANADAKQADAJAHAFQAIAFANAAQANAAAGgGQAGgGACgJQACgKAAgLQAAgKgCgKQgCgJgGgGQgHgFgMAAQgNAAgIAEgEAjFAA6QgFABgCgBQgDgCgBgDQgCgCABgGQAAgHACgDQADgDAHABQAIgBACADQAEADAAAHQgBAGgBACQgBADgDACIgFAAIgDAAgAZVA3QgHgCgCgIQgEgHAAgOIAAg9IgQAAIAAgOIAQAAIAAgaIARAAIAAAaIAbAAIAAAOIgbAAIAAA8IACAMQABAFADACQADACAHgBIAHAAIAFAAIAAAOIgGABIgGAAIgDAAQgKAAgHgDgAEJA3QgHgCgDgIQgEgHABgOIAAg9IgRAAIAAgOIARAAIAAgaIARAAIAAAaIAbAAIAAAOIgbAAIAAA8IABAMQACAFADACQADACAGgBIAHAAIAGAAIAAAOIgHABIgGAAIgDAAQgKAAgGgDgAmkA3QgHgCgDgIQgDgHAAgOIAAg9IgQAAIAAgOIAQAAIAAgaIARAAIAAAaIAbAAIAAAOIgbAAIAAA8IABAMQABAFAEACQADACAGgBIAHAAIAGAAIAAAOIgGABIgHAAIgDAAQgKAAgGgDgA40A3QgHgCgDgIQgEgHABgOIAAg9IgRAAIAAgOIARAAIAAgaIARAAIAAAaIAbAAIAAAOIgbAAIAAA8IABAMQACAFADACQADACAGgBIAHAAIAGAAIAAAOIgHABIgGAAIgDAAQgKAAgGgDgAgwA6IgLAAIgLgCIgJgCIAAgOIAJACIALABIALABQANAAAGgDQAGgFAAgJQABgGgCgEQgCgDgFgDQgGgCgJgCQgMgCgIgFQgGgCgDgHQgDgFAAgKQABgNAJgIQALgIATAAIAPABIANADIgCAOQgEgCgIAAQgGgCgIAAQgLAAgGADQgGAEAAAJQAAAFABADQACAEAFACQAFACAIABQAMADAIADQAHADAEAHQADAGAAAKQAAARgKAIQgLAHgSAAIgDAAgAcIA5IAAhsIARAAIAAAUQADgJAGgFQAGgFAGgCIAOgBIACAAIgBAQIgDAAQgGAAgHABQgGACgGAGQgFAFgDAKIAABGgATwA5IAAhEQAAgIgCgHQgBgFgFgEQgEgCgIAAQgIgBgGACQgGACgGAEQgEAFgEAJIAABJIgRAAIAAhsIARAAIAAAPQAEgGAFgEQAGgEAHgCIANgBQAOAAAJAFQAHAEAEAIQADAIgBAKIAABLgAMsA5IAAhsIARAAIAAAUQAEgJAGgFQAFgFAGgCIAOgBIACAAIgBAQIgCAAQgHAAgHABQgGACgFAGQgFAFgEAKIAABGgABWA5IgogzIgGAAIAAAzIgRAAIAAiZIARAAIAABZIAGAAIAmgsIAWAAIguAyIAxA6gAiyA5IAAhEQAAgIgBgHQgCgFgFgEQgEgCgIAAQgIgBgGACQgHACgEAEQgFAFgEAJIAABJIgRAAIAAhsIARAAIAAAPQAEgGAGgEQAFgEAGgCIAOgBQAPAAAHAFQAIAEAEAIQADAIAAAKIAABLgAn1A5IAAheIgTAAIAAgOIATAAIAAgBQAAgTAFgKQAEgJAIgDQAIgEALAAIAHABIAFABIAAANIgEAAIgIAAQgHAAgEACQgEADgCAHQgCAGAAANIAaAAIAAAOIgaAAIAABegArgA5IAAiLIATAAIAACLgAvKA5IAAhEQAAgIgBgHQgCgFgFgEQgEgCgIAAQgIgBgGACQgHACgEAEQgFAFgEAJIAABJIgRAAIAAhsIARAAIAAAPQAEgGAFgEQAGgEAGgCIAOgBQAPAAAHAFQAIAEAEAIQADAIAAAKIAABLgA0NA5IAAhsIARAAIAAAUQAEgJAGgFQAFgFAGgCIAOgBIACAAIgBAQIgCAAQgHAAgHABQgGACgFAGQgFAFgEAKIAABGgA23A5IAAhEQAAgIgCgHQgBgFgFgEQgEgCgIAAQgIgBgGACQgHACgFAEQgEAFgEAJIAABJIgRAAIAAiZIARAAIAAA8QAEgGAFgEQAGgEAHgCIANgBQAPAAAIAFQAHAEAEAIQADAIgBAKIAABLgA8MA5IAAhsIARAAIAAAUQAEgJAGgFQAGgFAGgCIANgBIACAAIAAAQIgDAAQgHAAgGABQgGACgGAGQgFAFgEAKIAABGgEghhAA5IAAh4IgCAAIgkBZIgTAAIglhZIAAAAIAAB4IgSAAIAAiLIAcAAIAkBZIABAAIAkhZIAdAAIAACLg");
	this.shape_1.setTransform(253.65,28.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-12.6,517,79);
p.frameBounds = [rect, rect];


(lib.元件21复制 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(230.25,27.4,1.6559,1.1415,0,0,0,125.5,23.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.元件23(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AdMBSQAJAAAGgDQAGgCAEgGQAEgGACgIIgrhsIATAAIAhBZIABAAIAghZIASAAIgoBoQgEANgHAKQgFALgKAFQgKAFgPAAgAFKBhIAAiUIARAAIAAATQADgKAIgGQAJgFAPAAQASAAAKAGQAKAIADANQAEAMAAAQQAAAQgEAMQgDANgKAHQgKAJgSgBQgPABgJgGQgIgGgDgJIAAA7gAFngiQgHAFgDAJQgDAKAAAMQAAAMADAKQADAKAHAFQAIAEANABQAMgBAHgFQAGgGACgKQACgKAAgKQAAgKgCgKQgCgKgHgFQgFgGgNAAQgNAAgIAFgAotBgIgMgCIAAgOIANACIAOAAQARAAAKgIQAIgIAAgTIAAgLQgDAKgJAFQgHAFgQABQgSAAgKgIQgKgHgEgMQgDgMAAgRQAAgPADgMQAEgMAKgIQAKgIASABQALAAAHACQAHAEAEAFQAEAEACAHIAAgUIASAAIAABkQAAAWgOANQgMAMgcABIgOgBgAovghQgGAFgCAKQgCAKAAAJQAAALACAJQACAKAHAGQAGAFAMAAQANAAAHgFQAIgFADgJQADgJAAgNQAAgLgDgKQgDgJgIgFQgHgFgNAAQgMAAgHAGgA8xBSQAKAAAGgDQAGgCAEgGQAEgGACgIIgrhsIATAAIAhBZIABAAIAghZIASAAIgoBoQgFANgGAKQgGALgJAFQgJAFgRAAgAb2A6QgRAAgLgIQgKgIgGgSIgBgIIAAgIIAAgGQgBgQAIgNQAGgNAOgIIALgEIAKgBIACAAQASAAANATIAAgFIARAAIAAA6IABAUIADASIgBAAIgQAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBgBAAgBIgCgNIgDAGIgFAEQgFAFgGACQgFABgHAAgAbpggQgJAHgFALIgBAIIgBAIIAAAEQgBALAFAJQAEAIAIAGIAHAEIAHAAIAFAAQAeAAAAgmIAAgGQAAgPgFgKQgGgJgKgEIgEAAIgDAAQgMAAgJAGgAZgAzQgKgHgDgNQgEgMgBgRQABgOAEgNQADgNAKgHQAKgIARAAQARgBAHAGQAJAGADAKIAAhAIARAAIAACZIgOAAIgDgSQgDAJgJAFQgIAGgQgBQgRABgKgIgAZrghQgGAGgCAKQgCAJAAAKQAAALACAKQACAJAHAGQAFAGANAAQANgBAHgEQAIgGADgJQADgJgBgNQABgLgDgKQgDgKgIgEQgHgGgNAAQgMAAgHAGgAWaA2QgIgEgEgJQgCgHAAgLIAAhKIARAAIAABEQAAAIACAGQABAGAFADQAEADAJAAQAHAAAGgCQAGgBAFgEQAFgFADgKIAAhIIASAAIAABsIgPAAIgCgRQgEAIgFAEQgGADgHACQgGACgHgBQgOABgIgFgATuA6QgQAAgMgIQgKgIgGgSIgBgIIgBgIIAAgGQAAgQAHgNQAHgNAOgIIALgEIAKgBIACAAQATAAAMATIAAgFIARAAIAAA6IABAUIADASIgBAAIgQAAQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAgBAAgBIgCgNIgDAGIgFAEQgEAFgHACQgGABgGAAgAThggQgIAHgGALIgCAIIgBAIIAAAEQABALAEAJQAEAIAIAGIAHAEIAHAAIAFAAQAeAAAAgmIAAgGQABgPgGgKQgFgJgLgEIgEAAIgDAAQgMAAgJAGgARtA5IgPgBIgKgDIAAgQIALACIAOACIARABQAQAAAHgEQAIgGAAgNQAAgIgCgGQgDgFgHgCQgHgDgNgDQgOgEgJgDQgIgFgEgHQgEgIAAgMQAAgTAMgKQALgJAYAAIANABIANABIAJADIAAARIgQgEQgKgCgJAAQgKAAgGACQgHACgDAFQgDAEAAAJQAAAGACAFQACAEAGADQAGADANADQAPADAJAFQAKAFAEAIQAFAHgBAOQAAAUgMAKQgNAJgYAAIgRgBgAM+A2QgKgGgHgMQgFgNAAgVQAAgUAFgNQAHgMAKgGQAMgEAQAAQAQAAALAEQAMAGAFAMQAGANAAAUQAAAVgGANQgFAMgMAGQgLAEgQAAQgQAAgMgEgANHgjQgHADgDAKQgDAJAAAPQAAAQADAJQADAJAHAEQAHAEAMAAQAMAAAHgEQAHgEADgJQADgJAAgQQAAgPgDgJQgDgKgIgDQgGgEgMAAQgMAAgHAEgAHrA6QgRAAgLgIQgKgIgGgSIgBgIIgBgIIAAgGQAAgQAHgNQAHgNAOgIIALgEIAKgBIABAAQATAAANATIAAgFIARAAIAAA6IABAUIADASIgBAAIgRAAQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAgBIgCgNIgEAGIgEAEQgFAFgGACQgGABgHAAgAHdggQgIAHgFALIg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");
	this.shape.setTransform(228.2,28.1);

	this.instance_1 = new lib.元件32复制();
	this.instance_1.setTransform(319.85,36.65,1,1,0,0,0,327.9,42.3);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AdMBSQAJAAAGgDQAGgCAEgGQAEgGACgIIgrhsIATAAIAhBZIABAAIAghZIASAAIgoBoQgEANgHAKQgFALgKAFQgKAFgPAAgAFKBhIAAiUIARAAIAAATQADgKAIgGQAJgFAPAAQASAAAKAGQAKAIADANQAEAMAAAQQAAAQgEAMQgDANgKAHQgKAJgSgBQgPABgJgGQgIgGgDgJIAAA7gAFngiQgHAFgDAJQgDAKAAAMQAAAMADAKQADAKAHAFQAIAEANABQAMgBAHgFQAGgGACgKQACgKAAgKQAAgKgCgKQgCgKgHgFQgFgGgNAAQgNAAgIAFgAotBgIgMgCIAAgOIANACIAOAAQARAAAKgIQAIgIAAgTIAAgLQgDAKgJAFQgHAFgQABQgSAAgKgIQgKgHgEgMQgDgMAAgRQAAgPADgMQAEgMAKgIQAKgIASABQALAAAHACQAHAEAEAFQAEAEACAHIAAgUIASAAIAABkQAAAWgOANQgMAMgcABIgOgBgAovghQgGAFgCAKQgCAKAAAJQAAALACAJQACAKAHAGQAGAFAMAAQANAAAHgFQAIgFADgJQADgJAAgNQAAgLgDgKQgDgJgIgFQgHgFgNAAQgMAAgHAGgA8xBSQAKAAAGgDQAGgCAEgGQAEgGACgIIgrhsIATAAIAhBZIABAAIAghZIASAAIgoBoQgFANgGAKQgGALgJAFQgJAFgRAAgAb2A6QgRAAgLgIQgKgIgGgSIgBgIIAAgIIAAgGQgBgQAIgNQAGgNAOgIIALgEIAKgBIACAAQASAAANATIAAgFIARAAIAAA6IABAUIADASIgBAAIgQAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBgBAAgBIgCgNIgDAGIgFAEQgFAFgGACQgFABgHAAgAbpggQgJAHgFALIgBAIIgBAIIAAAEQgBALAFAJQAEAIAIAGIAHAEIAHAAIAFAAQAeAAAAgmIAAgGQAAgPgFgKQgGgJgKgEIgEAAIgDAAQgMAAgJAGgAZgAzQgKgHgDgNQgEgMgBgRQABgOAEgNQADgNAKgHQAKgIARAAQARgBAHAGQAJAGADAKIAAhAIARAAIAACZIgOAAIgDgSQgDAJgJAFQgIAGgQgBQgRABgKgIgAZrghQgGAGgCAKQgCAJAAAKQAAALACAKQACAJAHAGQAFAGANAAQANgBAHgEQAIgGADgJQADgJgBgNQABgLgDgKQgDgKgIgEQgHgGgNAAQgMAAgHAGgAWaA2QgIgEgEgJQgCgHAAgLIAAhKIARAAIAABEQAAAIACAGQABAGAFADQAEADAJAAQAHAAAGgCQAGgBAFgEQAFgFADgKIAAhIIASAAIAABsIgPAAIgCgRQgEAIgFAEQgGADgHACQgGACgHgBQgOABgIgFgATuA6QgQAAgMgIQgKgIgGgSIgBgIIgBgIIAAgGQAAgQAHgNQAHgNAOgIIALgEIAKgBIACAAQATAAAMATIAAgFIARAAIAAA6IABAUIADASIgBAAIgQAAQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAgBAAgBIgCgNIgDAGIgFAEQgEAFgHACQgGABgGAAgAThggQgIAHgGALIgCAIIgBAIIAAAEQABALAEAJQAEAIAIAGIAHAEIAHAAIAFAAQAeAAAAgmIAAgGQABgPgGgKQgFgJgLgEIgEAAIgDAAQgMAAgJAGgARtA5IgPgBIgKgDIAAgQIALACIAOACIARABQAQAAAHgEQAIgGAAgNQAAgIgCgGQgDgFgHgCQgHgDgNgDQgOgEgJgDQgIgFgEgHQgEgIAAgMQAAgTAMgKQALgJAYAAIANABIANABIAJADIAAARIgQgEQgKgCgJAAQgKAAgGACQgHACgDAFQgDAEAAAJQAAAGACAFQACAEAGADQAGADANADQAPADAJAFQAKAFAEAIQAFAHgBAOQAAAUgMAKQgNAJgYAAIgRgBgAM+A2QgKgGgHgMQgFgNAAgVQAAgUAFgNQAHgMAKgGQAMgEAQAAQAQAAALAEQAMAGAFAMQAGANAAAUQAAAVgGANQgFAMgMAGQgLAEgQAAQgQAAgMgEgANHgjQgHADgDAKQgDAJAAAPQAAAQADAJQADAJAHAEQAHAEAMAAQAMAAAHgEQAHgEADgJQADgJAAgQQAAgPgDgJQgDgKgIgDQgGgEgMAAQgMAAgHAEgAHrA6QgRAAgLgIQgKgIgGgSIgBgIIgBgIIAAgGQAAgQAHgNQAHgNAOgIIALgEIAKgBIABAAQATAAANATIAAgFIARAAIAAA6IABAUIADASIgBAAIgRAAQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAgBIgCgNIgEAGIgEAEQgFAFgGACQgGABgHAAgAHdggQgIAHgFALIg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");
	this.shape_1.setTransform(228.2,28.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-12.6,468,79);
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
	this.instance.setTransform(267.5,27.4,1.9374,1.1415,0,0,0,125.5,23.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.元件23(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A2NBhIgNgCIAAgPIAOACIANAAQASAAAJgIQAJgIgBgTIAAgLQgDALgIAFQgIAFgQAAQgRAAgLgHQgJgHgEgMQgEgMAAgSQAAgOAEgNQAEgMAJgIQALgHARAAQALAAAHADQAHADAFAFQADAFACAHIAAgVIASAAIAABlQAAAWgNANQgNAMgcAAIgNAAgA2PghQgHAGgBAJQgCAKgBAJQABAMACAJQACAJAGAGQAGAFANABQANAAAHgGQAIgEACgJQADgKAAgNQAAgLgDgJQgCgJgIgGQgHgEgNAAQgNAAgGAFgA89BhIgMgCIAAgPIANACIANAAQATAAAIgIQAJgIAAgTIAAgLQgDALgJAFQgHAFgQAAQgSAAgKgHQgKgHgDgMQgEgMgBgSQABgOAEgNQADgMAKgIQAKgHASAAQAKAAAIADQAHADAEAFQAEAFACAHIAAgVIARAAIAABlQAAAWgMANQgNAMgcAAIgOAAgA8/ghQgGAGgCAJQgCAKAAAJQAAAMACAJQACAJAHAGQAFAFANABQANAAAIgGQAHgEADgJQADgKgBgNQABgLgDgJQgDgJgHgGQgIgEgNAAQgMAAgHAFgEAg/AA2QgIgEgEgIQgCgIAAgKIAAhLIARAAIAABEQAAAIACAHQABAFAFAEQAEACAJAAQAHABAGgCQAGgCAFgEQAFgFADgJIAAhJIASAAIAABsIgPAAIgCgQQgEAIgFADQgGAEgHACQgGABgHAAQgOAAgIgFgAdSA2QgKgFgHgNQgFgMAAgWQAAgUAFgMQAGgNALgFQALgFAQAAQAOAAAJAEQAIAEAEAHQAFAHACAHIACAQIgBAGIAAAHIhKAEQAAAMADAHQADAIAIAEQAHADANAAQAJAAAKgBQAJgDAGgDIAAAQIgIADIgNADIgPABQgQAAgMgFgAdagjQgHAFgCAIQgDAIAAALIA5gFQAAgHgBgIQgCgHgGgFQgGgDgLAAQgMAAgHADgAZ9A7QgQAAgLgIQgKgJgGgRIgCgJIAAgIIAAgGQAAgQAHgNQAGgMAOgIIAMgFIAKgBIABAAQATABAMASIAAgEIASAAIAAA5IABAUIADATIgBAAIgQAAQgBAAAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgCIgCgMIgEAFIgEAFQgFAEgGACQgGACgHAAgAZwgfQgIAGgFAMIgCAIIgBAHIAAAFQAAAKAFAJQADAIAIAHIAIADIAHAAIAEAAQAfABAAgmIAAgHQAAgPgFgKQgGgJgLgDIgDAAIgEAAQgMAAgJAGgAU2A0QgKgHgDgNQgEgNAAgRQAAgOAEgNQADgMAKgIQAKgIASAAQAQAAAIAGQAJAFACAKIAAhAIASAAIAACZIgPAAIgDgSQgDAJgIAFQgJAGgPAAQgSAAgKgHgAVBghQgFAHgDAJQgCAKAAAJQAAAMACAKQADAJAGAFQAGAGAMAAQAOAAAHgEQAIgGADgJQADgJgBgOQABgLgDgJQgDgKgIgFQgHgGgOABQgMAAgHAFgARUA7QgQAAgLgIQgKgJgGgRIgCgJIAAgIIAAgGQAAgQAHgNQAHgMAOgIIAKgFIAKgBIADAAQASABANASIAAgEIARAAIAAA5IABAUIACATIgBAAIgQAAQAAAAAAAAQAAgBgBAAQAAgBAAgBQAAAAgBgCIgBgMIgDAFIgFAFQgFAEgGACQgGACgHAAgARIgfQgJAGgFAMIgCAIIgBAHIAAAFQAAAKAEAJQAEAIAJAHIAGADIAIAAIAEAAQAfABAAgmIAAgHQAAgPgGgKQgFgJgLgDIgEAAIgCAAQgNAAgIAGgAMUA2QgHgEgEgIQgDgIAAgKIAAhLIASAAIAABEQgBAIACAHQACAFAFAEQAEACAIAAQAIABAGgCQAFgCAGgEQAEgFAEgJIAAhJIARAAIAABsIgPAAIgCgQQgDAIgGADQgGAEgGACQgHABgGAAQgOAAgJgFgAIiA2QgLgFgGgNQgGgMAAgWQAAgUAGgMQAGgNAKgFQALgFAQAAQAOAAAJAEQAJAEAEAHQAEAHACAHIACAQIgBAGIAAAHIhKAEQAAAMADAHQAEAIAIAEQAHADANAAQAJAAAKgBQAJgDAGgDIAAAQIgIADIgOADIgOABQgRAAgLgFgAIpgjQgGAFgDAIQgDAIAAALIA6gFQAAgHgCgIQgCgHgFgFQgGgDgMAAQgMAAgHADgAAVA0QgKgHgDgNQgEgNAAgRQAAgOAEgNQADgMAKgIQAKgIASAAQAQAAAIAGQAJAFACAKIAAhAIASAAIAACZIgOAAIgEgSQgCAJgJAFQgJAGgPAAQgSAAgKgHgAAgghQgFAHgCAJQgDAKAAAJQAAAMADAKQABAJAHAFQAGAGANAAQANAAAHgEQAIgGACgJQADgJAAgOQAAgLgDgJQgCgKgIgFQgHgGgNABQgNAAgHAFgAjWA2QgKgFgHgNQgFgMgBgWQABgUAFgMQAGgNALgFQALgFAQAAQAOAAAIAEQAJAEAFAHQAEAHACAHIACAQIgBAGIAAAHIhLAEQAAAMAEAHQADAIAIAEQAHADANAAQAJAAAKgBQAJgDAGgDIAAAQIgIADIgNADIgPABQgQAAgMgFgAjOgjQgHAFgCAIQgDAIgBALIA7gFQgBgHgBgIQgCgHgFgFQgHgDgLAAQgMAAgHADgAxnA2QgIgEgEgIQgCgIAAgKIAAhLIARAAIAABEQAAAIABAHQACAFAFAEQAFACAIAAQAHABAGgCQAGgCAFgEQAFgFADgJIAAhJIASAAIAABsIgQAAIgBgQQgEAIgFADQgGAEgHACQgGABgHAAQgOAAgIgFgAzhA2QgKgFgHgNQgFgMgBgWQABgUAFgMQAHgNAKgFQAMgFAQAAQAQAAALAFQAMAFAGANQAFAMAAAUQAAAWgFAMQgGANgMAFQgLAFgQAAQgQAAgMgFgAzYgjQgHAEgDAKQgDAIAAAPQAAARADAIQADAJAHAFQAHADAMAAQAMAAAHgDQAHgFADgJQADgIAAgRQAAgPgDgIQgDgKgIgEQgHgDgLAAQgMAAgHADgA7EA2QgLgFgGgNQgGgMAAgWQAAgUAGgMQAGgNALgFQAMgFAPAAQARAAALAFQALAFAGANQAFAMABAUQgBAWgFAMQgGANgLAFQgLAFgRAAQgPAAgMgFgA68gjQgGAEgEAKQgCAIAAAPQAAARACAIQAEAJAGAFQAIADALAAQANAAAGgDQAHgFAEgJQACgIAAgRQAAgPgCgIQgEgKgHgEQgHgDgMAAQgLAAgIADgA/uA2QgLgFgGgNQgFgMAAgWQAAgUAFgMQAGgNALgFQALgFAQAAQAOAAAJAEQAIAEAEAHQAFAHACAHIABAQIAAAGIAAAHIhKAEQgBAMAEAHQADAIAIAEQAHADAOAAQAIAAAKgBQAJgDAGgDIAAAQIgIADIgNADIgPABQgQAAgMgFgA/mgjQgHAFgDAIQgCAIAAALIA5gFQABgHgCgIQgCgHgGgFQgFgDgMAAQgNAAgGADgEAk2AA6QgFABgDgBQgDgCgBgDQgCgCAAgGQAAgHAEgDQACgDAIABQAGgBAEADQAC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");
	this.shape.setTransform(268.05,28.05);

	this.instance_1 = new lib.元件32();
	this.instance_1.setTransform(319.85,36.65,1,1,0,0,0,327.9,42.3);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("A2NBhIgNgCIAAgPIAOACIANAAQASAAAJgIQAJgIgBgTIAAgLQgDALgIAFQgIAFgQAAQgRAAgLgHQgJgHgEgMQgEgMAAgSQAAgOAEgNQAEgMAJgIQALgHARAAQALAAAHADQAHADAFAFQADAFACAHIAAgVIASAAIAABlQAAAWgNANQgNAMgcAAIgNAAgA2PghQgHAGgBAJQgCAKgBAJQABAMACAJQACAJAGAGQAGAFANABQANAAAHgGQAIgEACgJQADgKAAgNQAAgLgDgJQgCgJgIgGQgHgEgNAAQgNAAgGAFgA89BhIgMgCIAAgPIANACIANAAQATAAAIgIQAJgIAAgTIAAgLQgDALgJAFQgHAFgQAAQgSAAgKgHQgKgHgDgMQgEgMgBgSQABgOAEgNQADgMAKgIQAKgHASAAQAKAAAIADQAHADAEAFQAEAFACAHIAAgVIARAAIAABlQAAAWgMANQgNAMgcAAIgOAAgA8/ghQgGAGgCAJQgCAKAAAJQAAAMACAJQACAJAHAGQAFAFANABQANAAAIgGQAHgEADgJQADgKgBgNQABgLgDgJQgDgJgHgGQgIgEgNAAQgMAAgHAFgEAg/AA2QgIgEgEgIQgCgIAAgKIAAhLIARAAIAABEQAAAIACAHQABAFAFAEQAEACAJAAQAHABAGgCQAGgCAFgEQAFgFADgJIAAhJIASAAIAABsIgPAAIgCgQQgEAIgFADQgGAEgHACQgGABgHAAQgOAAgIgFgAdSA2QgKgFgHgNQgFgMAAgWQAAgUAFgMQAGgNALgFQALgFAQAAQAOAAAJAEQAIAEAEAHQAFAHACAHIACAQIgBAGIAAAHIhKAEQAAAMADAHQADAIAIAEQAHADANAAQAJAAAKgBQAJgDAGgDIAAAQIgIADIgNADIgPABQgQAAgMgFgAdagjQgHAFgCAIQgDAIAAALIA5gFQAAgHgBgIQgCgHgGgFQgGgDgLAAQgMAAgHADgAZ9A7QgQAAgLgIQgKgJgGgRIgCgJIAAgIIAAgGQAAgQAHgNQAGgMAOgIIAMgFIAKgBIABAAQATABAMASIAAgEIASAAIAAA5IABAUIADATIgBAAIgQAAQgBAAAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgCIgCgMIgEAFIgEAFQgFAEgGACQgGACgHAAgAZwgfQgIAGgFAMIgCAIIgBAHIAAAFQAAAKAFAJQADAIAIAHIAIADIAHAAIAEAAQAfABAAgmIAAgHQAAgPgFgKQgGgJgLgDIgDAAIgEAAQgMAAgJAGgAU2A0QgKgHgDgNQgEgNAAgRQAAgOAEgNQADgMAKgIQAKgIASAAQAQAAAIAGQAJAFACAKIAAhAIASAAIAACZIgPAAIgDgSQgDAJgIAFQgJAGgPAAQgSAAgKgHgAVBghQgFAHgDAJQgCAKAAAJQAAAMACAKQADAJAGAFQAGAGAMAAQAOAAAHgEQAIgGADgJQADgJgBgOQABgLgDgJQgDgKgIgFQgHgGgOABQgMAAgHAFgARUA7QgQAAgLgIQgKgJgGgRIgCgJIAAgIIAAgGQAAgQAHgNQAHgMAOgIIAKgFIAKgBIADAAQASABANASIAAgEIARAAIAAA5IABAUIACATIgBAAIgQAAQAAAAAAAAQAAgBgBAAQAAgBAAgBQAAAAgBgCIgBgMIgDAFIgFAFQgFAEgGACQgGACgHAAgARIgfQgJAGgFAMIgCAIIgBAHIAAAFQAAAKAEAJQAEAIAJAHIAGADIAIAAIAEAAQAfABAAgmIAAgHQAAgPgGgKQgFgJgLgDIgEAAIgCAAQgNAAgIAGgAMUA2QgHgEgEgIQgDgIAAgKIAAhLIASAAIAABEQgBAIACAHQACAFAFAEQAEACAIAAQAIABAGgCQAFgCAGgEQAEgFAEgJIAAhJIARAAIAABsIgPAAIgCgQQgDAIgGADQgGAEgGACQgHABgGAAQgOAAgJgFgAIiA2QgLgFgGgNQgGgMAAgWQAAgUAGgMQAGgNAKgFQALgFAQAAQAOAAAJAEQAJAEAEAHQAEAHACAHIACAQIgBAGIAAAHIhKAEQAAAMADAHQAEAIAIAEQAHADANAAQAJAAAKgBQAJgDAGgDIAAAQIgIADIgOADIgOABQgRAAgLgFgAIpgjQgGAFgDAIQgDAIAAALIA6gFQAAgHgCgIQgCgHgFgFQgGgDgMAAQgMAAgHADgAAVA0QgKgHgDgNQgEgNAAgRQAAgOAEgNQADgMAKgIQAKgIASAAQAQAAAIAGQAJAFACAKIAAhAIASAAIAACZIgOAAIgEgSQgCAJgJAFQgJAGgPAAQgSAAgKgHgAAgghQgFAHgCAJQgDAKAAAJQAAAMADAKQABAJAHAFQAGAGANAAQANAAAHgEQAIgGACgJQADgJAAgOQAAgLgDgJQgCgKgIgFQgHgGgNABQgNAAgHAFgAjWA2QgKgFgHgNQgFgMgBgWQABgUAFgMQAGgNALgFQALgFAQAAQAOAAAIAEQAJAEAFAHQAEAHACAHIACAQIgBAGIAAAHIhLAEQAAAMAEAHQADAIAIAEQAHADANAAQAJAAAKgBQAJgDAGgDIAAAQIgIADIgNADIgPABQgQAAgMgFgAjOgjQgHAFgCAIQgDAIgBALIA7gFQgBgHgBgIQgCgHgFgFQgHgDgLAAQgMAAgHADgAxnA2QgIgEgEgIQgCgIAAgKIAAhLIARAAIAABEQAAAIABAHQACAFAFAEQAFACAIAAQAHABAGgCQAGgCAFgEQAFgFADgJIAAhJIASAAIAABsIgQAAIgBgQQgEAIgFADQgGAEgHACQgGABgHAAQgOAAgIgFgAzhA2QgKgFgHgNQgFgMgBgWQABgUAFgMQAHgNAKgFQAMgFAQAAQAQAAALAFQAMAFAGANQAFAMAAAUQAAAWgFAMQgGANgMAFQgLAFgQAAQgQAAgMgFgAzYgjQgHAEgDAKQgDAIAAAPQAAARADAIQADAJAHAFQAHADAMAAQAMAAAHgDQAHgFADgJQADgIAAgRQAAgPgDgIQgDgKgIgEQgHgDgLAAQgMAAgHADgA7EA2QgLgFgGgNQgGgMAAgWQAAgUAGgMQAGgNALgFQAMgFAPAAQARAAALAFQALAFAGANQAFAMABAUQgBAWgFAMQgGANgLAFQgLAFgRAAQgPAAgMgFgA68gjQgGAEgEAKQgCAIAAAPQAAARACAIQAEAJAGAFQAIADALAAQANAAAGgDQAHgFAEgJQACgIAAgRQAAgPgCgIQgEgKgHgEQgHgDgMAAQgLAAgIADgA/uA2QgLgFgGgNQgFgMAAgWQAAgUAFgMQAGgNALgFQALgFAQAAQAOAAAJAEQAIAEAEAHQAFAHACAHIABAQIAAAGIAAAHIhKAEQgBAMAEAHQADAIAIAEQAHADAOAAQAIAAAKgBQAJgDAGgDIAAAQIgIADIgNADIgPABQgQAAgMgFgA/mgjQgHAFgDAIQgCAIAAALIA5gFQABgHgCgIQgCgHgGgFQgFgDgMAAQgNAAgGADgEAk2AA6QgFABgDgBQgDgCgBgDQgCgCAAgGQAAgHAEgDQACgDAIABQAGgBAEADQAC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");
	this.shape_1.setTransform(268.05,28.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-15,-12.6,546,79);
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// 图层_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#60EAE7").ss(8,1,1).p("A1ytkMArlAAAQALAAAAAaIAAaVQAAAagLAAMgrlAAAQgLAAAAgaIAA6VQAAgaALAAg");
	this.shape.setTransform(90.1,165.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#60EAE7").ss(8,1,1).p("A1ZtgMAqzAAAQALAAAAAaIAAaNQAAAagLAAMgqzAAAQgLAAAAgaIAA6NQAAgaALAAg");
	this.shape_1.setTransform(424.6,168.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#60EAE7").ss(8,1,1).p("A1jtkMArGAAAQALAAAAAaIAAaVQAAAagLAAMgrGAAAQgKAAAAgaIAA6VQAAgaAKAAg");
	this.shape_2.setTransform(91.325,365.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#60EAE7").ss(8,1,1).p("A1xtkMArjAAAQALAAAAAaIAAaVQAAAagLAAMgrjAAAQgLAAAAgaIAA6VQAAgaALAAg");
	this.shape_3.setTransform(423.875,363.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// 图层_3
	this.pg_3 = new lib.元件20();
	this.pg_3.name = "pg_3";
	this.pg_3.setTransform(420.35,364.75,0.8987,1.3753,0,0,0,148.6,62.8);
	new cjs.ButtonHelper(this.pg_3, 0, 1, 2, false, new lib.元件20(), 3);

	this.pg_2 = new lib.元件20();
	this.pg_2.name = "pg_2";
	this.pg_2.setTransform(85.5,363.85,0.9136,1.3981,0,0,0,148.6,62.8);
	new cjs.ButtonHelper(this.pg_2, 0, 1, 2, false, new lib.元件20(), 3);

	this.pg_1 = new lib.元件20();
	this.pg_1.name = "pg_1";
	this.pg_1.setTransform(419.45,163.5,0.9094,1.3753,0,0,0,148.6,62.8);
	new cjs.ButtonHelper(this.pg_1, 0, 1, 2, false, new lib.元件20(), 3);

	this.pg_0 = new lib.元件20();
	this.pg_0.name = "pg_0";
	this.pg_0.setTransform(85.65,165.6,0.9109,1.3753,0,0,0,148.6,62.8);
	new cjs.ButtonHelper(this.pg_0, 0, 1, 2, false, new lib.元件20(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pg_0},{t:this.pg_1},{t:this.pg_2},{t:this.pg_3}]}).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-50.2,77.2,612.8,375);
p.frameBounds = [rect, new cjs.Rectangle(-54.4,74.9,617,377.4), new cjs.Rectangle(-50.2,77.2,617,375), new cjs.Rectangle(-51.7,77.2,614.3,379.2), new cjs.Rectangle(-50.2,77.2,618.6,377.4)];


(lib.d1复制5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.头像("single",3);
	this.instance.setTransform(-55.5,91.3,0.711,0.711,0,0,0,-47.2,71.6);

	this.dia = new lib.元件21复制5();
	this.dia.name = "dia";
	this.dia.setTransform(127.5,91.05,1,1,0,0,0,122.4,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dia},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.d1复制5, rect = new cjs.Rectangle(-96,47.1,577.1,91.4), [rect]);


(lib.d1复制4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.头像("single",2);
	this.instance.setTransform(-55.5,91.3,0.711,0.711,0,0,0,-47.2,71.6);

	this.dia = new lib.元件21复制4();
	this.dia.name = "dia";
	this.dia.setTransform(127.5,91.05,1,1,0,0,0,122.4,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dia},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.d1复制4, rect = new cjs.Rectangle(-96,47.5,602.1,91), [rect]);


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
	this.instance = new lib.头像("single",1);
	this.instance.setTransform(-55.5,91.3,0.711,0.711,0,0,0,-47.2,71.6);

	this.dia = new lib.元件21复制();
	this.dia.name = "dia";
	this.dia.setTransform(127.5,91.05,1,1,0,0,0,122.4,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dia},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.d1复制, rect = new cjs.Rectangle(-96,47.1,553.1,91.4), [rect]);


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
	this.instance = new lib.头像("synched",0);
	this.instance.setTransform(-55.5,91.3,0.711,0.711,0,0,0,-47.2,71.6);

	this.dia = new lib.元件21();
	this.dia.name = "dia";
	this.dia.setTransform(127.5,91.05,1,1,0,0,0,122.4,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dia},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.d1, rect = new cjs.Rectangle(-96,47.1,632.1,90.4), [rect]);


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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// 跳转按钮
	this.gotoBtnMc = new lib.元件19();
	this.gotoBtnMc.name = "gotoBtnMc";
	this.gotoBtnMc.setTransform(748,298.4,1,1,0,0,0,365.4,293.7);

	this._onp = new lib.暂停播放组();
	this._onp.name = "_onp";
	this._onp.setTransform(872.05,641.9,1,1,0,0,0,37.5,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this._onp},{t:this.gotoBtnMc}]}).wait(4));

	// 标题
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AgSAbQgGgCgCgGQgCgHAAgMQAAgMACgGQACgGAGgDQAHgCALABQAMgBAHACQAGADACAGQACAGAAAMQAAAMgCAHQgCAGgGACQgHACgMAAQgLAAgHgCg");
	this.shape.setTransform(327.45,57.52);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AhGBRQAPAAAJgDQAJgDAGgGQAFgGACgIIhFiwIA1AAIApB+IACAAIAoh+IAzAAIg8CgQgIAZgJAPQgJARgLAIQgMAKgQAEQgQAEgXAAg");
	this.shape_1.setTransform(312.425,54.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgUBbQgYAAgQgMQgRgNgJgYQgDgJgCgLIgBgVIAAgHQABgYAJgTQAKgSAUgOQAIgFAIgDQAJgBAJAAIAIAAQARAAAKAEQAMAGAFAKIABABIAAABIABAAIABgFIABgBIAtAAIABAAIAAABIgCA6QAAAmADAYQACAYAFALIAAACIABAFIgBABIgtAAIgEgHIgFgSIgBAAQgHANgKAHQgLAGgPAAgAgdgtQgMAKgGAVIgBAKIgBAGQAAAUAHANQAHANANAFIAKACIAKABQAMABAJgFQAJgEAEgKQADgGADgLQABgJAAgNQAAgSgFgNQgEgMgJgGQgEgDgFgBQgHgBgGAAIgBAAQgQAAgLAKg");
	this.shape_2.setTransform(292.05,51.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgHBcQgPAAgPgCIgbgEIAAgoQAOAEAOACQAOACAMAAQAPABAHgEQAHgEAAgKQAAgIgDgEQgCgEgIgDQgGgDgOgDQgTgFgLgGQgJgFgFgJQgEgKAAgPQAAgZAQgOQARgOAmAAQAOAAAOACQANACAIACIgCAlIgNgDIgQgDIgQgBQgQAAgGAEQgGAEAAAJQAAAFADADQACADAIADIATAGQAUAFAKAGQALAGAEAKQAEAKABAQQAAAfgUANQgSANgfAAIgDAAg");
	this.shape_3.setTransform(274.4,51.2759);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("Ag6B0QgQgMgGgUQgGgVABgcQgBgaAGgUQAGgVAQgMQAPgNAdAAQAXAAAMAHQANAHAFAMIAAhfIAvAAIAAD6IgrAAIgEgZQgFAMgMAIQgNAIgXAAQgdAAgPgLgAgXgNQgIAIgDALQgCANAAAQQAAAQACANQADAMAIAHQAIAIAPAAQAQAAAJgHQAJgGAEgNQADgMAAgSQAAgRgEgNQgDgMgJgHQgJgHgQAAQgPAAgIAIg");
	this.shape_4.setTransform(246.7731,47.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AAiBbIAAhsQAAgSgGgIQgGgIgSAAQgNAAgKAGQgKAFgEAOIAAB1IgvAAIAAixIAvAAIAAAVQAIgNAPgGQANgGATAAQAWAAANAHQANAHAGANQAFANABAUIAAB5g");
	this.shape_5.setTransform(226.2,51.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgUBbQgYAAgQgMQgRgNgJgYQgDgJgCgLIgBgVIAAgHQAAgYAKgTQAKgSAUgOQAIgFAJgDQAIgBAJAAIAIAAQARAAALAEQAKAGAGAKIABABIABABIAAAAIABgFIABgBIAtAAIABAAIAAABIgCA6QAAAmADAYQACAYAFALIAAACIABAFIgBABIgtAAIgEgHIgFgSIgBAAQgHANgKAHQgLAGgPAAgAgdgtQgMAKgGAVIgCAKIAAAGQAAAUAHANQAHANANAFIAKACIAKABQANABAIgFQAJgEAEgKQADgGADgLQABgJAAgNQAAgSgFgNQgEgMgJgGQgEgDgFgBQgHgBgGAAIgBAAQgQAAgLAKg");
	this.shape_6.setTransform(204.85,51.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AAhBbIAAhsQABgSgGgIQgGgIgRAAQgPAAgJAGQgKAFgDAOIAAB1IgxAAIAAixIAxAAIAAAVQAHgNAOgGQAOgGAUAAQAVAAANAHQANAHAGANQAGANgBAUIAAB5g");
	this.shape_7.setTransform(176.3,51.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgpBVQgUgIgKgVQgKgUAAgkQAAgjAKgUQAKgUAUgIQAUgJAbABQAeAAARAKQARAKAGARQAGASAAAXIgBANIgBALIhyAHQACATALAJQAMAJAXAAQALAAALgCQAMgCAJgDQAKgCAGgEIAAAmQgJAFgSAEQgSADgYAAIgDAAQgYAAgSgHgAgYgtQgJAJgBAWIBIgGQABgKgDgIQgCgIgHgEQgHgFgOAAQgVAAgJAKg");
	this.shape_8.setTransform(156.1018,51.3251);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgFBqQgNgFgGgNQgGgNAAgXIAAhSIgXAAIAAgmIAXAAIAAgqIAvAAIAAAqIAlAAIAAAmIglAAIAABOQAAAPAEAGQAFAFAMAAIAHAAIAGgBIAAAlIgLABIgLAAIgEAAQgTAAgLgFg");
	this.shape_9.setTransform(140.5,49.3271);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgHBcQgPAAgPgCIgagEIAAgoQAMAEAPACQAOACANAAQANABAIgEQAHgEAAgKQAAgIgDgEQgDgEgGgDQgHgDgPgDQgSgFgLgGQgKgFgEgJQgDgKgBgPQAAgZAQgOQARgOAmAAQAPAAANACQANACAIACIgDAlIgMgDIgQgDIgRgBQgPAAgFAEQgHAEAAAJQAAAFACADQADADAIADIAUAGQASAFALAGQALAGAFAKQADAKAAAQQABAfgUANQgSANgfAAIgDAAg");
	this.shape_10.setTransform(126.6,51.2759);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgXB/IAAixIAvAAIAACxgAgPhNQgGgBgDgGQgCgFAAgMQAAgLACgFQADgFAGgCQAFgCAKABQALgBAGACQAFACADAFQACAFAAALQAAAMgCAFQgDAGgFABQgGACgLAAQgKAAgFgCg");
	this.shape_11.setTransform(113.775,47.595);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AhGByIAAjkIAzAAIAAC5IBaAAIAAArg");
	this.shape_12.setTransform(101.3,48.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXCXQgbgHgUgRQgTgSgLgfQgKgeAAgwQAAg5ASgjQASgjAhgOQAigPArAAQAWAAASADQASACAOAFIAAA6QgOgFgRgDQgRgDgTAAQgbAAgRAJQgSAKgIAWQgIAVgBAlQABAnAIAWQAIAVASAJQAQAIAbAAQATAAARgDQASgDARgGIAAA5QgNAGgUAEQgTADgWAAQgiAAgagGg");
	this.shape_13.setTransform(44.35,48.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D8075").s().p("AirCsQhHhHAAhlQAAhkBHhIQBHhGBkAAQBlAABHBGQBHBIAABkQAABlhHBHQhHBHhlAAQhkAAhHhHg");
	this.shape_14.setTransform(46.725,47.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// 图层 1
	this.instance = new lib.元件34复制3();
	this.instance.setTransform(484.85,164.35,0.5846,0.5846,0,0,0,257.1,135.3);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,6);

	this.instance_1 = new lib.元件34复制2();
	this.instance_1.setTransform(819.8,164.35,0.5846,0.5846,0,0,0,257.1,135.3);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,6);

	this.instance_2 = new lib.元件34复制();
	this.instance_2.setTransform(484.8,363.45,0.5846,0.5846,0,0,0,257,135.3);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,6);

	this.instance_3 = new lib.元件34();
	this.instance_3.setTransform(819.75,363.45,0.5846,0.5846,0,0,0,257,135.3);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(4));

	// 对话内容
	this.dia_1_1 = new lib.d1();
	this.dia_1_1.name = "dia_1_1";
	this.dia_1_1.setTransform(530,512.5,1,1,0,0,0,159.4,40.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FE8659").ss(8,1,1).p("Eg4LgOlMBwXAAAQCVAABoB4QBoB4AACpIAAQZQAACphoB4QhoB4iVAAMhwXAAAQiVAAhph4Qhoh4AAipIAAwZQAAipBoh4QBph4CVAAg");
	this.shape_15.setTransform(640,585.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Eg4LAOmQiUAAhph4Qhph4AAipIAAwZQAAipBph4QBph4CUAAMBwXAAAQCVAABoB4QBpB4AACpIAAQZQAACphpB4QhoB4iVAAg");
	this.shape_16.setTransform(640,585.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FCE0CE").ss(18,1,1).p("Eg4LgOlMBwXAAAQCVAABoB4QBoB4AACpIAAQZQAACphoB4QhoB4iVAAMhwXAAAQiVAAhph4Qhoh4AAipIAAwZQAAipBoh4QBph4CVAAg");
	this.shape_17.setTransform(640,585.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Eg4LAOmQiUAAhph4Qhph4AAipIAAwZQAAipBph4QBph4CUAAMBwXAAAQCVAABoB4QBpB4AACpIAAQZQAACphpB4QhoB4iVAAg");
	this.shape_18.setTransform(640,585.075);

	this.dia_2_1 = new lib.d1复制();
	this.dia_2_1.name = "dia_2_1";
	this.dia_2_1.setTransform(530,512.5,1,1,0,0,0,159.4,40.5);

	this.dia_3_1 = new lib.d1复制4();
	this.dia_3_1.name = "dia_3_1";
	this.dia_3_1.setTransform(530,512.5,1,1,0,0,0,159.4,40.5);

	this.dia_4_1 = new lib.d1复制5();
	this.dia_4_1.name = "dia_4_1";
	this.dia_4_1.setTransform(530,512.5,1,1,0,0,0,159.4,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.dia_1_1}]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.dia_2_1}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.dia_3_1}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.dia_4_1}]},1).wait(1));

	// diban
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.8)").s().p("EhkVAEsIAApXMDIrAAAIAAJXg");
	this.shape_19.setTransform(639.9,690.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(4));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(637.7,369.1,1284.5,711.3);
p.frameBounds = [rect, rect, rect, rect];
// library properties:
lib.properties = {
	id: 'E637B31863A9224E9952B4D82164A654',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1734075988339", id:"index_atlas_1"},
		{src:"images/index_atlas_2.png?1734075988339", id:"index_atlas_2"}
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