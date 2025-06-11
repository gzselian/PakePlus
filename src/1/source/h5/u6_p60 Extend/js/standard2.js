$(function(){
	var iframeMaxWidth = request("maxW");//获取传入的父级弹窗最大宽度
	var iframeMaxHeight = request("maxH");//获取传入的父级弹窗最大高度
	var winWidth,winHeight;
	var sizeRatio = 16/9;
	var isPc,isIpad;
	/*--获取网页传递的参数：
	 如获取Default.aspx?ID=123这个URL中ID的值时，调用方法：request("ID")
	 --*/
	 //var der = 0; // 设定 der 的值
	     // 根据 der 的值来控制元素显示
	console.log(ver+"版本");
	if (ver == 1) {
	    document.getElementById("btnwordzh").style.display = "block";
	}
	function request(paras)
	{
	    var url = location.href;
	    var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");
	    var paraObj = {}
	    for (i=0; j=paraString[i]; i++){
	        paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length);
	    }
	    var returnValue = paraObj[paras.toLowerCase()];
	    if(typeof(returnValue)=="undefined"){
	        return "";
	    }else{
	        return returnValue;
	    }
	}
	//获取浏览器实际高度和宽度
	function findDimensions() //函数：获取尺寸
	{
	    //获取窗口宽度
	    if (window.innerWidth)
	        winWidth = window.innerWidth;
	    else if ((document.body) && (document.body.clientWidth))
	        winWidth = document.body.clientWidth;
	    //获取窗口高度
	    if (window.innerHeight)
	        winHeight = window.innerHeight;
	    else if ((document.body) && (document.body.clientHeight))
	        winHeight = document.body.clientHeight;
	    //通过深入Document内部对body进行检测，获取窗口大小
	    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
	        winHeight = document.documentElement.clientHeight;
	        winWidth = document.documentElement.clientWidth;
	    }
	}

	//自动切换全屏和最小化
	fullScreenSize=function(){
	    var dialogW,dialogH;
	    var fontScale;
	    if(iframeMaxWidth!="" && iframeMaxHeight!=""){
	        //iframeMaxWidth和iframeMaxHeight如果有值，表示此资源加载到父级弹窗中显示的
	        dialogW=iframeMaxWidth;
	        dialogH=iframeMaxHeight;
	    }
	    else{
	        //否则为直接单机预览，采用findDimensions获得当前网页的最大宽高值
	        findDimensions();
	        dialogW=winWidth;
	        dialogH=winHeight;
	    }
	    
	    //全屏时是按高度来拉伸动画的尺寸，根据宽高比通过高度来计算拉伸后的宽度
	    //var movWidth=parseInt(wraperH*sizeRatio);//全屏时计算后的依比例拉伸的动画高度
	    
	   fontScale = dialogW/1920;
	  if(dialogW/dialogH < 1920/1080){
			fontScale = dialogW/1920;
			//$(".w").css({"height":dialogH});
		  	//$(".w").css({"width":dialogW});
	   }else{
			fontScale = dialogH/1080;
			//$(".w").css({"height":dialogH});
			//$(".w").css({"width":parseInt(dialogH*sizeRatio)});
	   }
	   console.log("窗口的宽度=",dialogW);
	   console.log("fontScale=",fontScale);
	   browserRedirectFun();
	   if(isIpad){
		   /*
		   $(".blank").css("width","8rem");
		   $(".inputtxt").css("margin-left","-8rem");
	   }else{
		$(".blank").css("width","6.5rem");
		$(".inputtxt").css("margin-left","-6.6rem");
		
		*/
	   }
		$(".scaleable-wrapper").css({height: String(winHeight*1)+"px"});
		//----设置显示比例。
		var t1Width,t1Height,outw,outh,showbit;
		t1Width = $(".scaleable-wrapper").width();
		t1Height = $(".scaleable-wrapper").height();
		
		outw= $(".very-specific-design").outerWidth();
		outh = $(".very-specific-design").outerHeight();
		showbit = Math.min(t1Width/outw,t1Height/outh);
		$(".very-specific-design").css({
			transform:"translate(-50%, -50%) scale(" + String(showbit)+")"
			});

	};

	fullScreenSize();
	$(window).resize(function(){
		fullScreenSize();
	});
/*----------------------------------------------------*/
/*----------------------------------------------------*/
	//发送消息，所有和父域交互的通讯都从这儿发出
	function sendString(s) {
		targetOrigin=getParentWinUrl();	//获取调用页面的域名
//		window.top.postMessage(s, targetOrigin);
	}
	//解析调用页面的地址，从页面参数中解析
	function getParentWinUrl(){
		var url=request("domainName");
		url=url.substr(0,url.indexOf('/'));
		var parentUrl="http://"+url;
		return parentUrl
	}
	//绑定监听事件mousedown、touchstart
	if (typeof window.addEventListener != "undefined") {//如果支持addEventListener，FF和Chrome
		var isMob = isMobilePlatform();//判断是否是移动设备
		if (isMob) {
			//移动端
			document.addEventListener("touchstart", ChangeToolBar, false);
		}
		else {//PC端和电子白板
			document.addEventListener("mousedown", ChangeToolBar, false);
		}

	} else {//如果不支持addEventListener，则用attachEvent，IE
		document.attachEvent("mousedown", ChangeToolBar);
	}

	function ChangeToolBar(){
		var message="ChangeToolBar:";
		sendString(message);
	}

//判断浏览设备
	function browserRedirectFun() {
		var sUserAgent = navigator.userAgent.toLowerCase();
		var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		var bIsMidp = sUserAgent.match(/midp/i) == "midp";
		var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
		var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
		var bIsAndroid = sUserAgent.match(/android/i) == "android";
		var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
		var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
		//document.writeln("您的浏览设备为：");
		if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsCE || bIsWM) {
			//document.writeln("phone");
			//alert("我是移动端");
			//appAction();
			isPc=false;
		} else {
			//document.writeln("pc");
			//alert("我是pc端")
			//pcAction();
			//appAction();
			isPc=true;
		}   
		if(bIsIpad){
			isIpad = true;
		}else{
			isIpad = false;
		}
		//alert(isPc);
	}
//检查是否是移动平台
	function isMobilePlatform() {
		var isTrue = false;
		//判断是否移动端设备的JS代码，超短，百度都用它
		if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
			isTrue = true;
			//console.log("移动平台");
		}
		else {
			isTrue = false;
			//console.log("PC");
		}
		return isTrue;
	}
});

