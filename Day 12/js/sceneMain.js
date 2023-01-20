class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        //load our images or sounds
        this.load.image("face","images/byakuya.gif")
    }
    create() {
        //defining our objects
        this.graphics=this.add.graphics();
        this.graphics.lineStyle(8,0xff0000);
        this.graphics.fillStyle(0xff00ff,1);
        this.graphics.fillCircle(100,200,60);

        this.face=this.add.image(game.config.width/2,game.config.height/2,"face");
        this.face.setInteractive();
        this.face.on('pointerdown',this.onDown,this);
        this.face.on('pointerup',this.onUp,this);
    }

    onUp(){
        this.face.alpha=1;
    }

    onDown(){
        this.face.alpha=0.1;
    }
    update() {
        //constant running loop 
    }
}