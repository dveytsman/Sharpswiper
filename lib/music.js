class Music {
  constructor(){
    this.bgmusic = new Audio("assets/sound/starwars.mp3");
    this.bgmusic.loop = true;
    this.bgmusic.volume = .2;
    this.bgmusic.muted = true;
  }

  play(){
    this.bgmusic.play();
    console.log('hi');
  }
}
export default Music;
