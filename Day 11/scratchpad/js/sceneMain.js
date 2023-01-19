class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        //load our images or sounds
        this.load.spritesheet('boy', 'images/boy.png', { frameWidth: 120, frameHeight: 200 });
    	
    }
    create() {
        //defining our objects
        this.char=this.add.sprite(game.config.width/2,game.config.height/2,"boy");

        var frameNames= this.anims.generateFrameNames('boy');

        this.anims.create({
            key: 'walk',
            frames: frameNames,
            frameRate: 8,
            repeat: -1
        });

        this.char.play('walk');

        this.doWalk();
    }
    
    doWalk(){
        this.tweens.add({
            targets:this.char,
            duration:5000,
            x: game.config.width,
            y:0,
            alpha:0,
            onComplete: this.onCompleteHandler,
            onCompleteParams:[this]
        });
    }

    onCompleteHandler(tween,targets,scope){
        var char=targets[0];
        char.x=0;
        char.y=game.config.height/2;
        char.alpha=1;
        scope.doWalk();
    }
    update() {
        //constant running loop 
    }
}