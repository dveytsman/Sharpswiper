class Music {
  constructor(){
    this.music = new Audio("assets/sound/starwars.mp3");
    this.music.loop = true;
    this.music.volume = .2;
    this.music.muted = true;
  }

  play(){
    this.music.play();
    console.log('hi');
  }
}
export default Music;
