$(function() {
	sizeH();
	$(".btnBrowser").addClass("cur")
	
	// var images = document.querySelectorAll('img');
	//         var videos = document.querySelectorAll('video');
	//         images.forEach(function(img) {
	//             img.style.imageRendering = 'pixelated';
	//         });
	//         videos.forEach(function(vid) {
	//             vid.style.imageRendering = 'pixelated';
	//         });

	init();
});
$(window).resize(function() {
	sizeH();
});
function dataJson(data) {
	dataAry = data.wordlist;
}

function sizeH() {
	var dialogW, dialogH;
	var fontScale;
	var Scale = $(".zoom").get(0);
	dialogW = $(window).width()
	dialogH = $(window).height()
	if (dialogW / dialogH < 1280 / 720) {
		fontScale = dialogW / 1280;
		var temph = (dialogH - 720 * fontScale) / 2 / (1 - fontScale)
		Scale.style.cssText = 'transform-origin:0px ' + temph.toString() + 'px;'
		Scale.style.transform = "scale(" + fontScale + "," + fontScale + ")"

	} else {
		fontScale = dialogH / 720;
		var tempw = (dialogW - 1280 * fontScale) / 2 / (1 - fontScale)
		Scale.style.cssText = 'transform-origin:' + tempw.toString() + 'px 0px;'
		Scale.style.transform = "scale(" + fontScale + "," + fontScale + ")"
	}
}
// 获取数据
var dataAry = [];
// 当前id
var curId = 0;
//正在播放
var isPlay = false;
//自动播放
var autoPlay=false;

var audio;
var video;
//设置播放按钮状态
var btn_play;
var btnSrc_play = 'img/ico/btn_play.png';
var btnSrc_pause = 'img/ico/btn_pause.png';
var btn_prev;
var btn_next;

var tt;
var dtime;

var soundSrc='source/video/01bg.mp3';
var soundBzSrc='source/video/01bg.mp3'

var progressBar;
var progressSeek;
var progressDiv;
var timetxt;
function init() {
	myVideo = document.getElementById("video");
	myVideo.addEventListener('ended', playend);
	myVideo.addEventListener('timeupdate', updateProgress);
	myVideo.pause();
	progressSeek = document.getElementById("progressSeek");
	progressBar  = document.getElementById("progressBar");
	progressDiv= document.getElementById("progress");
	timetxt= document.getElementById("timetxt");
	progressDiv.addEventListener('click',onProgressBar)
	// myVideo.setAttribute('webkit-playsinline', ''); // 适用于Safari浏览器
	// myVideo.setAttribute('playsinline', ''); // 适用于其他浏览器
	// myVideo.setAttribute('height', '920');
	// myVideo.setAttribute('width', '520');
	
	myAudio = document.getElementById("audio");
	myAudio.addEventListener('ended', function(){console.log("音频加载结束")});
	myAudio.pause();
	
	setBplay();
	setLplay();
	
	isPlay = true;
	btn_play.src = btnSrc_pause;
	autoPlay = true;
	updata();
	
}
// 播放过程的处理函数
function updateProgress() {
    const currentTime = myVideo.currentTime; // 当前播放时间
        const duration = myVideo.duration; // 视频总时长
        // 计算进度百分比
        const progressPercentage = (currentTime / duration) * 100;
        // 创建显示文本
        var time = "当前播放时间: " + currentTime.toFixed(2) + " 秒 (" + progressPercentage.toFixed(2) + "%)";
        //console.log(time);
		timetxt.textContent = formatTime(currentTime.toFixed(0))+" / "+formatTime(duration.toFixed(0));
		// 设置进度条宽度
		progressSeek.style.width = 800*(currentTime / duration)+"px";
		//console.log(progressSeek.style.width);
}
//progressBar.addEventListener('click',onProgressBar)
function onProgressBar(e) {
    // 获取进度条的边界矩形
    const rect = progressBar.getBoundingClientRect();
    // 计算点击位置相对于进度条的偏移
    const offsetX = e.clientX - rect.left;
    // 计算点击位置的百分比
    const percentage = offsetX / rect.width; // 使用 rect.width 确保计算的准确性
    // 设置视频的当前时间
    myVideo.currentTime = myVideo.duration * percentage;
	myAudio.currentTime= myVideo.currentTime;
    //myVideo.play();
    console.log(`点击位置: ${offsetX}px，百分比: ${(percentage * 100).toFixed(2)}%`);
}
function formatTime(s) {
    const minutes = Math.floor(s / 60);
    const seconds = s % 60;
    // 使用 padStart 确保两位数格式
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// 示例使用
const time = formatTime(3661); // 输入3661秒
console.log(time); // 输出 "61:01"


function setBplay() {
	btn_play = document.getElementById('btn_play');
	btn_play.addEventListener('click', onbplay);
	function onbplay(event) {
		if (isPlay) {
			isPlay = false;
			btn_play.src = btnSrc_play;
			myVideo.pause();
			myAudio.pause();
		} else {
			isPlay = true;
			btn_play.src = btnSrc_pause;
			autoPlay = true;
			updata();
		}
	}
}
function stopSound() {
	isPlay = false;
	btn_play.src = btnSrc_play;
}

//设置播放按钮状态
var btn_luyin;
var btnSrc_luyin = 'img/ico/btn_luyin1.png';
var btnSrc_nluyin = 'img/ico/btn_luyin2.png';
var isBz=false;

function setLplay() {
	btn_luyin = document.getElementById('btn_luyin');
	btn_luyin.addEventListener('click', onLplay);
	function onLplay(event) {
		if (isBz) {
			isBz = false;
			btn_luyin.src = btnSrc_luyin;
		} else {
			isBz = true;
			btn_luyin.src = btnSrc_nluyin;
		}
		updata();
	}
}
function stopSound() {
	isPlay = false;
	btn_play.src = btnSrc_play;
	
	myVideo.currentTime=0;
	myVideo.pause();
}

// var autoPlay=true;
function playend() {
	console.log("播放结束");
	stopSound();
	// 检验超出
	// if (autoPlay) {
	// 	if (curId > dataAry.length - 1) {
	// 		curId = dataAry.length - 1
	// 	} else {
	// 		tt = setTimeout(function() {
	// 			curId += 1;
	// 			if (curId > dataAry.length - 1) {
	// 				// curId = dataAry.length - 1;
	// 				// curId = 0;
	// 				return;
	// 			}
	// 			updata();
	// 		}, dtime);
	// 	}
	// }
}

function updata() {
	if(!isBz){
		myVideo.muted = false;
		myAudio.muted = true;
		myAudio.src=soundSrc;
		// console.log("播放："+soundSrc);
	}else{
		myVideo.muted = true;
		myAudio.muted = false;
		myAudio.src=soundBzSrc;
		// console.log("播放："+soundBzSrc);
	}
	// myVideo.currentTime=0;
	if(!isPlay)return;
    myAudio.currentTime=myVideo.currentTime;
	console.log( myAudio.currentTime)
	console.log( myVideo.currentTime)
	myAudio.play();
	myVideo.play();
	//myVideo.muted = true;
}

function checkBtnStu() {
	//检测第一个和最后一个
	if (curId == 0) {
		btn_prev.style.display = 'none'
	} else {
		btn_prev.style.display = 'block'
	}
	if (curId == dataAry.length - 1) {
		btn_next.style.display = 'none'
	} else {
		btn_next.style.display = 'block'
	}
}