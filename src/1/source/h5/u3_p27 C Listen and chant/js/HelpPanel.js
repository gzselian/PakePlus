/*
	@弹出面板类    @author:王辉
	
		----------------------------------------------------------------------------

*/
var HelpPanel = {
	closeBtn:null,//关闭按钮
	backMask:null,//背景遮罩
	stageAnsBtn:null,//舞台答案按钮
	me:null,
	myParent:null,
	//用来调整遮罩颜色
	backShape:null,

	bindControler:function(mycanvas,answerBtn){
		answerBtn?HelpPanel.stageAnsBtn = answerBtn:null;
		HelpPanel.me = mycanvas;
		HelpPanel.myParent = HelpPanel.me.parent;

		HelpPanel.closeBtn = HelpPanel.me.closeBtn;
		HelpPanel.backMask = HelpPanel.me.backMc;

		backShape = new createjs.Shape();
		backShape.graphics.beginFill("rgba(0,0,0,0.5)");
		backShape.graphics.drawRect(0,0,1280,720);
		backShape.graphics.endFill();
		HelpPanel.backMask.addChildAt(backShape,0);
		backShape.alpha = 0.01

		HelpPanel.stageAnsBtn?HelpPanel.stageAnsBtn.addEventListener("mousedown",HelpPanel.ansHandle):null;
		HelpPanel.closeBtn?HelpPanel.closeBtn.addEventListener("mousedown",HelpPanel.closeHandle):null;
		HelpPanel.backMask?HelpPanel.backMask.addEventListener("mousedown",HelpPanel.backHandle):null;
	},
	ansHandle:function(e){
		//console.log("显示录音原文面板！");

		HelpPanel.me.x = 0;
		HelpPanel.me.y = 0;

		var backTween =  createjs.Tween.get(backShape, {
		})
		.to({
			alpha: 1
		}, 500)
		//HelpPanel.myParent.setChildIndex(HelpPanel.me,HelpPanel.myParent.numChildren-1);
	},
	closeHandle:function(e){
		//console.log("关闭录音原文面板！");
		HelpPanel.me.x = 2000;
		backShape.alpha = 0.01;
		// var backTween =  createjs.Tween.get(backShape, {
		// })
		// .to({
		// 	alpha: 0.01
		// }, 500)
	},
	backHandle:function(e){
		//侦听背景后才能挡住下面的按钮不被点击
	}
}
var fzHelpPanel = HelpPanel;