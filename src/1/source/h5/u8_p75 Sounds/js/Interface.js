//外部接口库及公用函数库，依赖JQuery库，请先引用
//所有和后台进行硬件交互的函数都可以放在这儿
var iframeMaxWidth=request("maxW");//获取传入的父级弹窗最大宽度
var iframeMaxHeight = request("maxH");//获取传入的父级弹窗最大高度
var fullS = request("fullS");
var isRecording=false;//是否正在录音
var targetOrigin = "";
var recordSoundPath="";//录制好的声音文件
$(function () {	
	setFontSize();//监控缩放
//  if (request("isfUll") == 1) {   
//      transformFun();
//  }
})
//解析调用页面的地址，从页面参数中解析
function getParentWinUrl(){
	var url=request("domainName");
	url=url.substr(0,url.indexOf('/'));
	var parentUrl="http://"+url;	
	return parentUrl
}

//监听父域的消息
window.addEventListener("message", messageHandler, true);
//接收父域的消息函数
function messageHandler(e) {	
	if (e.origin == targetOrigin) {
        notify(e.data);
    } else {
        // 忽略从其它域来的消处
    }
}

//根据参数调用不同的方法
function notify(message) { 	
	var msgArr = message.split('#');	
	var funcName=msgArr[0];//函数名
	var funcVal=msgArr[1];//函数名
	console.log("当前获得的回传值为："+message);
    if (funcName == "getCheckState") {//获取软硬环境，是否有麦克风支持，或是否有录音权限	
		var state=funcVal.split(':')[0];
		var stateVal=funcVal.split(':')[1];	
		if(browserRedirect()){//移动端
			//移动端检查有无音权限			
	    	console.log("移动端回传的录音权限值。"+funcVal);   
	    	if(funcVal=="true"){ 	
	    		showMessage("您是否确定开始扮演！","开始扮演",false);				
	    	}
	    	else{	    		
	    		showMessage("没有录音权限！","确定",true) ; 	
	    		//置灰按钮
                $(".btnAction").addClass("disable");  
                $(".btnAction").off('click', function () {                    	                  	
					rolePlay();
				});
	    		console.log("移动端没有获得录音权限。");      
	    	}	    	
		}
		else{//pc端检查有无麦克风
			if(state=="hasMicro"){
				if(stateVal=="true"){    				
					//showMsg("有麦！","确定");    
					console.log("有麦克风，准备弹窗。");  
					showMessage("您是否确定开始扮演！","开始扮演",false);		
				}
				else{					
					showMessage("没有检查到麦克风！","确定",true) ; 	
				}    			
			}    	          
		}		 
    }   
    else if (funcName == "getBackSoundFile") {//获得回传的声音文件路径    	
    	if (checkURL(funcVal)) {    		
	        console.log("录制的声音文件地址为：" + funcVal);	        
	        showMessage("角色扮演结束！","确定",true) ; 		        
	        recordSoundPath=funcVal;	
	        console.log("recordSoundPath值为："+recordSoundPath);
	        //绑定回放功能
	        $(".btnView").removeClass("disable");
	        $(".btnView").on('click', function () {	
	        	$.replayView();
	        });	  
	        //绑定重新扮演功能
//	        $(".btnReAct").removeClass("disable");
//	        $(".btnReAct").on('click', function () {	
//	        	$.replayAction();
//	        });	  
	        //addCookie("soundFile", funcVal, 0);//将值存入cookie中，以供下个应用调用  
	    }
	    else {	    	
	    	console.log("不合格的声音文件：" + funcVal);  
	    }
	    document.getElementById("msgbox").style.display = "none";	      	
    }  
}
//发送消息，所有和父域交互的通讯都从这儿发出
function sendString(s) {
	targetOrigin=getParentWinUrl();	//获取调用页面的域名	
	window.top.postMessage(s, targetOrigin);
}

//初始化从配置中加载动画及声音文件
function loadSourceFile(){	
	$("#media").attr("src",soundPath);	
	$("#media").get(0).load();//视频预先加载	
	$("#sound").attr("src",movPath);
	$("#sound").get(0).load();//音频预先加载	
}

//获取回放录音文件,在startRecord（）方法中获得并赋给了全局变量
function getSoundPath(){   
    var soundFile = getCookie("soundFile");//从COOKIE中读取出来，以供回放    
    alert("cookie中要播放的声音文件为：" + soundFile);
    return soundFile;
}

////////////////////////////////////////////////////////////////////通用函数//////////////////////////////////////////////////////////////////////
/*--获取网页传递的参数：
 如获取Default.aspx?ID=123这个URL中ID的值时，调用方法：request("ID")
 --*/
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

/*addCookie方法和getCookie方法调用方法*/
//写入Cookie
function addCookie(objName, objValue, objHours) {
    var str = objName + "=" + escape(objValue);    
    if (objHours > 0) {//为0时不设定过期时间，浏览器关闭时cookie自动消失
        var date = new Date();
        var ms = objHours * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
        alert("2");
    }
    str += "; path=/";
    document.cookie = str;    
}

//读取Cookie
function getCookie(objName) {//获取指定名称的cookie的值
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName) return unescape(temp[1]);
    }
    return "";
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

//检测是否移动设备来访
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsAndroid || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsCE || bIsWM) {
        return true;
    } else {
        return false;
    }
}

//判断url是否是合法http（s）
function checkURL(URL) {
    var str = URL;
    //判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
    //下面的代码中应用了转义字符"\"输出一个字符"/"
    var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    var objExp = new RegExp(Expression);
    if (objExp.test(str) == true) {
        return true;
    } else {
        return false;
    }
}
//固定宽高的资源页，缩放比例
function transformFun() {
    //var scaleS = 900 / 1280;    //资源的比例  
    //$(body).css({ "-webkit-transform": "scale(" + scaleS + ")", "-webkit-transform-origin": "0 0", "transform": "scale(" + scaleS + ")", "transform-origin": "0 0", "overflow": "hidden" });    
}
//动态缩放,只缩放影响显示的区域
var setFontSize = function(){
	var width = document.documentElement.clientWidth;//获取页面可见宽度	
	var w = width/1280;//缩放比，以宽度为主		
	if(width<=1280){
		$(".contentbox").width(width).height(w*720);
		$("#picContainer").height(w*360);
		$("#picBg").width(w*480).height(w*360);
		$("#currentPic").width(w*400).height(w*300);		
		$(".logo").width(w*180).height(w*54);		
	}
	else{
		$(".contentbox").width(1280).height(720);
		$("#picContainer").height(360);
		$("#picBg").width(480).height(360);
		$("#currentPic").width(400).height(300);	
		$(".logo").width(180).height(54);		
	}
	//var allH=$(".wrap").height();
	var allH=document.documentElement.clientHeight;//获取页面可见高度	
	if(allH>$(".contentbox").height()){
		var spaceTop=(allH-$(".contentbox").height())/2;
		$(".contentbox").css({"margin-top":spaceTop})
	}
}
//动态缩放窗体时调节大小
$(window).resize(function () {
    setFontSize();    
});