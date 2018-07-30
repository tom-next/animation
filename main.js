var enableDebugMode = function(game, enable) {
    if(!enable) {
        return;
    }
    window.addEventListener("keydown", function(event) {
        var k = event.key
        if(k === "p") {
            // 暂停功能
            paused = !paused
        }else if ("123456789".includes(k)) {
            // 关卡
            blocks = loadLeves(game, Number(k))
        }
    })

    // 控制速度
    document.querySelector("#id-input-speed").addEventListener("input", function(e) {
        window.fps = Number(e.target.value)
    })
}


var __main = function() {
    var images = {
        sky0: "img/bg/sky0.png",
        sky1: "img/bg/sky1.png",
        sky2: "img/bg/sky2.png",
        sky3: "img/bg/sky3.png",
        sky4: "img/bg/sky4.png",
        sky5: "img/bg/sky5.png",
        player: "img/player.png",
        cloud: "img/cloud/cloud1.png",
        bullet: "img/bullet.png",
        player_bullet0: "img/bullet/player_bullet0.png",
        enemy1: "img/enemy1.png",
        enemy2: "img/enemy2.png",
        enemy3: "img/enemy3.png",
        enemy4: "img/enemy4.png",
        bullet: "img/bullet.png",
        fire1: "img/fire1.png",
        fire2: "img/fire2.png",
        enemyParticle: "img/enemyParticle.png",
        enemyfire: "img/6.png",
        particle: "img/particle111.png",
        wsparticle_07: "img/particle/wsparticle_07.png",
        wsparticle_smoke03: "img/particle/wsparticle_smoke03.png",


        // 走路动画
        idle1: "img/idle/Idle (1).png",
        idle2: "img/idle/Idle (2).png",
        idle3: "img/idle/Idle (3).png",
        idle4: "img/idle/Idle (4).png",
        idle5: "img/idle/Idle (5).png",
        idle6: "img/idle/Idle (6).png",
        idle7: "img/idle/Idle (7).png",
        idle8: "img/idle/Idle (8).png",
        idle9: "img/idle/Idle (9).png",
        idle10: "img/idle/Idle (10).png",
        w1: "img/walking/Run1.png",
        w2: "img/walking/Run2.png",
        w3: "img/walking/Run3.png",
        w4: "img/walking/Run4.png",
        w5: "img/walking/Run5.png",
        w6: "img/walking/Run6.png",
        w7: "img/walking/Run7.png",
        w8: "img/walking/Run8.png",

    }
    // 异步记载
    var game = Game.instance(30, images, function(game) {
        // var s = SceneStart.new(game)
        var s = SceneTitle.new(game)
        game.runWithScene(s)
        enableDebugMode(game, true)
    })
}

__main()
