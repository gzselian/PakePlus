/*
 * audio V1.0
 * Date: 2017-03-09 
 * http://www.kingsunsoft.cn
 * (c) 2017-2019 Binyong, http://www.kingsunsoft.cn
 * 动画交互脚本，封装了Audio和Video操作，字幕和画面同步 
 */

    var isFullScreen = true;//全屏状态
    isFullScreen = false;
	var isAction=false;//是否打开角色扮演面板，工具栏会有变化
	//字幕相关配置参数
	var n=0;
	var idArr = [];//定时器数组		
	var wordChArr = subtitleJson.wordChArr;
	var wordArr = subtitleJson.wordArr;
	var timeArr = subtitleJson.timeArr;
	var startTimsArr=[];//单句开始时间数组
	var endTimsArr=[];//单句结束时间数组
	var isEnglish=true;//是否显示英文开关，true为英文，false为中文
	var isShowWord=true;//是否显示字幕开关，true为显示字幕，false为关闭字幕
	var wordbox=$("#word").get(0);//单词对象
	var movObj=$("#media").get(0);//Video对象
	var audioObj=$("#audio").get(0);//audio对象
	var prevWord = $(".btnprev");
	var nextWord = $(".btnnext");
	var barPlayed  = $(".timebar");
	var playPause = $(".btn_play");
	var switchWord = $(".btnword");
	var switchWordzh = $(".btnwordzh");
	var goBack = $(".btnback");
	var userAction = $(".btnactive");
	var cssClass = {

		"playing":"btnPause",
		"flag": '1'
	};

	var isUseActMode = false;//角色扮演模式是否打开，默认关闭
	var selectedUser=[];//被选中的角色数组
var curWordIndex = 0;//当前选中的句子的序号
var curBreakerIndex = 0;//
var timeObjId = 1;
var isPlaying=false;//是否正在播放状态中
var ruleNameArray= subtitleJson.allrole;
var perWord_Rolearray = subtitleJson.rolepoints;
//--每一句话对应的角色。

//-----更新mp4的路径。
$(movObj).attr("src", movPath);
	//var sizeRatio=parseInt(movRatio.split(':')[0])/parseInt(movRatio.split(':')[1]);//画面尺寸宽度比，宽度除以高度，用来计算全屏状态下动画的宽度
	//ipad的分辩率为1024*768，所以动画的最小尺寸要等于或小于这个尺寸
	//默认动画尺寸1280*720按照IPAD上的屏幕宽度进行缩放，所以画面的最小尺寸为1024*576		
	//拖动兼容
	console.log("2024.4.2");
	var isTouch = 'ontouchstart' in window,
		eStart = isTouch ? 'touchstart' : 'mousedown',
		eMove = isTouch ? 'touchmove' : 'mousemove',
		eEnd = isTouch ? 'touchend' : 'mouseup',
		eCancel = isTouch ? 'touchcancel' : 'mouseup';


	//var audioObj=$("#audio").get(0);//audio对象		

// csz自动播放
autoPlay();
function autoPlay(){
	movObj.volume =1;
	audioObj.volume = 0;
	movObj.play();
    audioObj.pause();
    $(".btn_play").addClass("btn_pause");
}

	/*时间转换器*/
function numFormat(time){
    time = parseInt(time);
    var h = addZero(Math.floor(time/3600));
    var  m = addZero(Math.floor((time%3600)/60));
    var s = addZero(Math.floor(time%60));
	//---不需要时，一般是几分钟。
	//h+":"+
    return String(m)+":"+s;
}

//前面补充0
function addZero(num){
    if(num<10){
        return "0"+String(num);
    }else{
        return '' + String(num);
    }
}


	adjustCurrentTime = function (e) {
		theRealEvent = isTouch ? e.originalEvent.touches[0] : e;
		var curTime=Math.round((audioObj.duration * (theRealEvent.pageX - theBar.offset().left)) / theBar.width());
		audioObj.currentTime = curTime;
		movObj.currentTime = curTime;
		//console.log("当前时间点："+audioObj.currentTime);
	},
	updateLoadBar = function () {
		// var interval = setInterval(function () {
		// 	if (audioObj.buffered.length < 1) return true;
		// 	barLoaded.width((audioObj.buffered.end(0) / audioObj.duration) * 100 + '%');
		// 	if (Math.floor(audioObj.buffered.end(0)) >= Math.floor(audioObj.duration)) clearInterval(interval);
		// }, 100);
	};
	movObj.addEventListener('play',function(){
		movObj.play();
		movObj.loop=false;
	});

	var preTime=0;//字幕前置显示时间提前1秒
	movObj.addEventListener('ended', function () {
		//-------------
		if(true)
		{
			//--普通播放。
			// if(movObj.paused){}
			movObj.pause();
			audioObj.pause();
			movObj.currentTime =0;
			audioObj.currentTime =0;
			playPause.removeClass("btn_pause");
			$(prevWord).addClass('btnprev_dis');
			$(nextWord).addClass('btnnext_dis');
			
		}else
		{
			//--角色扮演。
		}
	});
	movObj.addEventListener('timeupdate', function () {                	
		var millTime=Math.round(movObj.currentTime*1000);//毫秒
		//console.log("当前时间（毫秒数）："+millTime);        
		//字幕同步显示
		for(var i=0;i<timeArr.length;i++){
			var t1=parseInt(timeArr[i]-preTime);
			var t2=parseInt(timeArr[i+1]);
			var wordIndex=parseInt(i/2);
			if(i%2==0){//每一句开始时间,要显示字幕（如果设置了关闭字幕，则不显示，如果设置中英文切换，则对应显示）
				if(millTime>=t1&&millTime<=t2){                				
					if(isShowWord){
						$(wordbox).show();
					}
					else{
						$(wordbox).hide();
					}
					if(isEnglish){
						if((wordArr[wordIndex].indexOf("'")!=-1) && (wordArr[wordIndex].indexOf("</i>")<0)){
							wordArr[wordIndex] = wordArr[wordIndex].replace(/'/ig, "<i class=\"danyh\">' </i>");
						}
						$(wordbox).html("<span>"+wordArr[wordIndex]+"</span>");	
					}
					else{
						$(wordbox).html("<span>"+wordChArr[wordIndex]+"</span>");	
					}
					//-------如果是角色扮演模式。
					if(isUseActMode)
					{
						$(wordbox).show();
						if(selectedUser.indexOf(perWord_Rolearray[wordIndex]) >=0)
						{
							//如果这句话是所选角色 说的话，则需要进行静音处理。
							//console.log("这句话是所选角色 说的话",perWord_Rolearray[wordIndex]);
							movObj.volume=0;
							audioObj.volume = 0.5;
						}
						else
						{
							movObj.volume=1;
							audioObj.volume = 0;
						}
					}         				
				} 
			}
			else{//每一句结束时间
				if(millTime>=t1+preTime&&millTime<=t2){
					$(wordbox).hide();                				
				}
			}                		
		if(i>1 && i%2==0){
				if(millTime<timeArr[i]&&millTime>timeArr[i-1]){
					$(wordbox).hide();
				}
			}
			if(i<=1){
				if(millTime<timeArr[0]){
					$(wordbox).hide();
				}
			}
		}
		var nTime=numFormat(movObj.currentTime);
			$("#nTime").html(nTime);
			//console.log(movObj.duration);
			if(isNaN(movObj.duration))
			{
				$("#aTime").html("00:00");
			}else
			{
				nTime=numFormat(movObj.duration);
				$("#aTime").html(nTime);
			}
		
		//最后一项时关闭字幕
		if(millTime>timeArr[timeArr.length-1]){
			$(wordbox).hide();
		}
		if(millTime>timeArr[timeArr.length-2]){
			//console.log("到达了最后一句啦,要改变上一句下一句按钮状态。");
			if(movObj.paused){
				$(prevWord).addClass('btnprev_dis');
				$(nextWord).addClass('btnnext_dis');
			}else{
				$(nextWord).addClass('btnnext_dis');
				$(prevWord).removeClass('btnprev_dis');
			}
		}
		if(millTime>timeArr[2] && (millTime<timeArr[timeArr.length-2])){
			//----中间段的 上一句下一句按钮状态
			if(movObj.paused){
				$(prevWord).addClass('btnprev_dis');
				$(nextWord).addClass('btnnext_dis');
			}else{
				$(prevWord).removeClass('btnprev_dis');
				$(nextWord).removeClass('btnnext_dis');
			}
		}
		if(millTime<timeArr[2]){
			//-------第一句时 的 上一句下一句按钮状态-------
			if(movObj.paused){
				$(prevWord).addClass('btnprev_dis');
				$(nextWord).addClass('btnnext_dis');
			}else{
				$(prevWord).addClass('btnprev_dis');
				$(nextWord).removeClass('btnnext_dis');
			}
		}
		//timeCurrent.html(secondsToTime(audioObj.currentTime));movObj
		//------随时调整进度条的宽度。
		barPlayed.width((movObj.currentTime / movObj.duration) * 100 + '%');
	});

	//------------
	audioObj.addEventListener('play',function(){
		// if(audioObj.currentTime==0){
		// 	movObj.currentTime=0;
		// 	movObj.play();
		// 	audioObj.play();
		// }
	});



	//分解开始时间数组和结束时间数组
	splitTimesArray=function() {					
		for(var i=1;i<timeArr.length;i+=2){	
			endTimsArr.push(timeArr[i]);
		}								
		for(var i=0;i<timeArr.length;i+=2){	
			startTimsArr.push(timeArr[i]);
		}
	};
	//上一句播放事件
	palyPrevWord=function(){
		var curTimes= Math.ceil(movObj.currentTime*1000);	
		$("btnnext").removeClass('btnnext_dis');
		for(var i=0;i<endTimsArr.length;i++){
			if(curTimes>endTimsArr[i]){	//在结束时间数组中循环	
				var prevIndex=i;
				var prevStartTime=startTimsArr[prevIndex]/1000;
				audioObj.currentTime=prevStartTime;
				movObj.currentTime=prevStartTime;							    											    
			}
			else{
				//console.log("当前序号："+i);
			}
		}					
	};
	//上一句
		prevWord.on('click', function () {
			palyPrevWord();
		});
	//下一句播放事件
	palyNextWord=function(){
		var curTimes= Math.ceil(movObj.currentTime*1000);		
		$("btnprev").removeClass('btnprev_dis');
		//console.log("当前时间："+curTimes+"开时时间："+startTimsArr.join(','));					
		for(var i=0;i<startTimsArr.length;i++){//在开始时间数组中循环	
			if(curTimes<startTimsArr[i]){	
				//console.log("当前时间："+curTimes+"开时时间："+startTimsArr[i]);		
				var nextStartTime=startTimsArr[i]/1000;
				audioObj.currentTime=nextStartTime;
				movObj.currentTime=nextStartTime;							   
				break;
			}
		}
	};
	//下一句				
	nextWord.on('click', function (e) {
		palyNextWord(e);
	});
	//中英文切换
	switchWordzh.on('click', function () {				
		obj=$(this);
		$(".btnwordzh").toggleClass("btnwordzhclose");
		var curIndex=parseInt(n/2);//当前字幕的序号			
		if(!$(obj).hasClass("btnEnglish")){
			$(obj).addClass("btnEnglish");
			$(obj).attr("title","英文");
			//中文字幕显示
			isEnglish=false;
			//立即更新字幕内容
			//$(wordbox).html(wordChArr[curIndex]);
		}
		else{
			$(obj).removeClass("btnEnglish");
			$(obj).attr("title","中文");
			//英文字幕显示
			isEnglish=true;
			//立即更新字幕内容
			//(wordbox).html(wordArr[curIndex]);							
		}	
	});
	//显示或关闭字幕
	switchWord.on('click', function () {	
		obj=$(this);
		$(".btnword").toggleClass("btnwordclose");
		if(!$(obj).hasClass("btnCloseWord")){
			$(obj).addClass("btnCloseWord");
			$(obj).attr("title","打开字幕");		
			//字幕关闭
			//$("#word").hide();
			isShowWord=false;
			if(wordbox.style.display=="block"){
				$(wordbox).hide();
			}						
		}
		else{
			$(obj).removeClass("btnCloseWord");
			$(obj).attr("title","关闭字幕");
			//字幕显示
			//$("#word").show();
			isShowWord=true;	
			if($(wordbox).text()!=""){
				$(wordbox).show();
			}						
		}	
	});
	
	/* switchWordzh.on('click', function () {
		obj=$(this);
		$(".btnwordzh").toggleClass("btnwordzhclose");
		if(!$(obj).hasClass("btnCloseWord")){
			$(obj).addClass("btnCloseWord");
			$(obj).attr("title","中文");		
			//字幕关闭
			//$("#word").hide();
			isShowWord=false;
			if(wordbox.style.display=="block"){
				$(wordbox).hide();
			}						
		}
		else{
			$(obj).removeClass("btnCloseWord");
			$(obj).attr("title","英文");
			//字幕显示
			//$("#word").show();
			isShowWord=true;	
			if($(wordbox).text()!=""){
				$(wordbox).show();
			}						
		}	
	}); */
	//返回
	goBack.on('click', function () {	
		if(isRecording){//如果正在录音，则发送强制关闭录音信息						
			//stopRecord();
			var message="stopRecording:强制结束录音";
			//sendString(message);		
		}
		window.location.reload();					
	});

	playPause.on('click', function () {            	
		if($(this).hasClass("btn_pause")){             		
			//$(this).attr('title', params.strPlay).find('a').html(params.strPlay);
			//thePlayer.removeClass(cssClass.playing).addClass(cssClass.stopped);
			$(this).removeClass("btn_pause");
			//绑定上下一句的事件及样式
			prevWord.off('click');//绑定上一句
			nextWord.off('click');//绑定下一句
			//$(prevWord).addClass('disable');
			//$(nextWord).addClass('disable');
			//isSupport ? audioObj.pause() : audioObj.Stop();       
			movObj.pause();
			audioObj.pause();
			console.log("role running. pause.",isUseActMode); 
			if(isUseActMode)                
			{
				
			}
		}
		else{
			//$(this).attr('title', params.strPause).find('a').html(params.strPause);
			//thePlayer.addClass(cssClass.playing).removeClass(cssClass.stopped);
			$(this).addClass("btn_pause");
			//isSupport ? audioObj.play() : audioObj.Play();
			console.log("role running. play.");
			movObj.play();
			if(!isUseActMode)
			{
				audioObj.volume =0;
			}
			audioObj.play();
			//绑定上下一句的事件及样式
			prevWord.off('click');
			prevWord.on('click', function () {
				palyPrevWord();           	
			});//绑定上一句
			nextWord.off('click');
			nextWord.on('click', function () {
				palyNextWord();	
			});//绑定下一句
			// $(prevWord).addClass('disable');
			// $(nextWord).removeClass('disable');
			//点击后再绑定角色扮演,延迟两秒再打开角色扮演按钮，否则在移动端容易出现找不到录音权限的问题
			// setTimeout(function(){
			// 	userAction.removeClass("disable");  
			// 	userAction.on('click', function () {                    	                  	
			// 		rolePlay();
			// 	});
			// },300)
			
		}
		return false;
	});
	splitTimesArray();
	var dlg_obj;
	function rolePlay(e)
	{
		// dlg_obj = art.dialog({
		// 	title:"welcome",
		// 	content:"<p>Abc<b>XYZ</b></p>",
		// 	ok: function(){
		// 		console.log(2024);
		// 	}
		// });
	}

	$(".role_check").on("click",function(){
		$(this).toggleClass("role_check_ed");
	});
	//-------取消角色扮演， 就是点击X。
	$(".act_btn_close").on("click",function(){
		// $(this).toggleClass("role_check_ed");
		$(".maskWin").hide();
		$(".showact_dialog").hide();	
	});
	//-----点击了角色扮演按钮，弹出选择角色的面板。
	$(".btnactive").on("click",function(){
		// 首先，要把动画视频进行暂停。
		movObj.pause();
		audioObj.pause();
		$(".btn_play").removeClass("btn_pause");

		$(".maskWin").show();
		$(".showact_dialog").show();
		// $("#normal").hide();
		// $("#playmode").show();
	});
	
	//--------当选好角色后，点击“开始扮演”的按钮。
	$(".act_ok").on("click",function(){
		selectedUser = [];
		//点击“开始扮演”, 先检查一下，是否选择了角色。
		if($(".role_check_ed").length ==0)
		{
			alert("还没有选中角色，请选择一个。");
			return;
		}else
		{
			$(".role_check").each(function() {
				var ele  = $(this);
				var ele_pos = 0;
				if($(this).hasClass("role_check_ed"))
				{
					ele_pos = $(".role_check").index(ele);
					//console.log(ele_pos);
					selectedUser.push(ruleNameArray[ele_pos]);
				}
			});
			console.log("选中的角色为：",selectedUser);
		}
		//-------------------
		$(".maskWin").hide();
		$(".showact_dialog").hide();
		$("#normal").hide();
		$("#playmode").show();
		//-------同时，开始播放动画。

		isUseActMode = true;

		movObj.volume =1;
		movObj.currentTime=0;
		audioObj.volume =0;
		audioObj.currentTime =0;
		movObj.play();
		audioObj.play();
		$(".btn_play").addClass("btn_pause");
	});
	//===============重新扮演。
	$(".btn_act_redo").on("click",function(){
		//重新扮演。。
		movObj.pause();
		audioObj.pause();
		// movObj.currentTime=0;
		$(".btn_play").removeClass("btn_pause");
		$(".maskWin").show();
		$(".showact_dialog").show();
	});
	
	$(".btn_act_back").on("click",function(){
		// 从扮演中返回。
		movObj.volume =1;
		movObj.pause();
		movObj.currentTime=0;
		audioObj.currentTime=0;
		audioObj.volume = 0;
		audioObj.pause();
		$(".btn_play").removeClass("btn_pause");
		$("#normal").show();
		$("#playmode").hide();
		isUseActMode = false;
	});

	$(".programbar").on("click",function(evt){
		// 进度条的点击，直接定位到该位置。
		//console.log(evt.pageX,evt);
		//console.log("offsetX:",evt.offsetX);
		var curclickOffset = evt.offsetX;
		curclickOffset = curclickOffset/$(".programbar").width()*movObj.duration;
		movObj.currentTime = curclickOffset;
		audioObj.currentTime =curclickOffset;
	});
	//--全屏按钮的点击。
	$(".btnfullscreen").on("click",function(evt){
		// 全屏与否。
		//console.log($(this));
		if(isFullScreen)
		{
			$(".btnfullscreen").removeClass("btnfullscreen_ed");
			$(".mov88").removeClass("mov88Screen");
			$(".mediaObj").removeClass("mediaScreen");
		}else
		{
			$(".btnfullscreen").addClass("btnfullscreen_ed");
			$(".mov88").addClass("mov88Screen");
			$(".mediaObj").addClass("mediaScreen");
		}
		isFullScreen = !isFullScreen;
		
	});