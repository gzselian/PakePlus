var bookJson={"bookName":"英语 三年级下册","TotalPages":88,"startPage":0};
var folderName=["fm001","ml001","ml002"];
var endFolderName=["blank"];
var breakAudioPages=[];
var breakAudioPagesTime={};
var sentenceKuaPages=[];
var copyrightInformation={"ISBNNUM":"XXXXx","productionCompany":"有限公司","Press":"xx出版社"};
// 临时挂平台测试/

//sz
var ver=1;//0教参，1市场
var szDebug=true;
////
/*
"fy002","fy003","fy004","fy005","ml001","ml002"
"hj000","hj001","hj002",
   变量说明：
   bookJson：课本的名称，总页码，起始页码数
   folderName：正文前面的书页配置。
   endFolderName：正文后面的书页配置。
   breakAudioPages：记录有跨页翻页的书页，一般是偶数；
   breakAudioPagesTime：跨页翻页对应书页右下角那一段的最后一个字的声音时间点，以秒为单位；
   sentenceKuaPages：记录一段文字左右跨页（不翻页）的页码数，一般是奇数；
   copyrightInformation：出版物的版号等。
*/