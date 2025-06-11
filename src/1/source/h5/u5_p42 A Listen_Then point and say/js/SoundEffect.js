var SoundEffect = {
    rightSoundUrl:"sounds/right.mp3",
    wrongSoundUrl:"sounds/wrong.mp3",
    buttonSoundUrl:"sounds/u3_b_listen_and_circle.mp3",
	button1SoundUrl:"sounds/button1.mp3",
	sound:new Audio(),
	sound2:new Audio(),
	pausetime:0,
/*new Audio("../../../soundeffect/great.mp3")*/
	greatSound:null,
	playRight:function()
	{
		if(this.sound)
		{
            this.sound.src = SoundEffect.rightSoundUrl;
            this.sound.play();
            
		}
	},
	playWrong:function()
	{
        if(this.sound)
        {
            this.sound.src = SoundEffect.wrongSoundUrl;
            this.sound.play();
            
        }
    },
	playButton:function()
	{
        if(this.sound)
        {
            this.sound.src = SoundEffect.buttonSoundUrl;
            this.sound.play();
            
        }
    },
	playButton1:function()
	{
        if(this.sound2)
        {
            this.sound2.src = SoundEffect.button1SoundUrl;
            this.sound2.play();
            
        }
    },
	playGreat:function()
	{
        if(this.sound)
        {
            this.sound.src = SoundEffect.rightSoundUrl;
            this.sound.play();
            
        }
    },
	playASound:function(s,funa){
		if(this.sound)
        {
            this.sound.src = "sounds/u3_b_listen_and_circle.mp3";
			//SoundEffect.rightSoundUrl;
			this.sound.currentTime=this.pausetime;
            this.sound.play();

			this.sound.onended= function(){
				console.log("2024.3.27");
				this.pausetime = 0;
				exportRoot.sndComplete();
			}
            
        }
	},
	pause:function()
	{
		if(this.sound)
        {
			this.pausetime = this.sound.currentTime;
			this.sound.pause();
		}
	},
	reset:function()
	{
		//未使用
		if(this.sound)
        {
			this.sound.pause();
		}
        if(this.sound2)
        {
			this.sound2.pause();
        }
		
		this.pausetime = 0;
	}

}