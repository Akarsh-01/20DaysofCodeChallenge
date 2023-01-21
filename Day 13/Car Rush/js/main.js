var game;
window.onload=function()
{
    var config = {
        type: Phaser.AUTO,
        width: 480,
        height: 640,
        parent: 'div-tag-name',
        scene: [SceneMain]
    };
    game = new Phaser.Game(config);
}