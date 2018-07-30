class Gua_Animation {
    constructor(game) {
        this.game = game
        // 为了省事在这里，在这里硬编码一套动画
        this.animations = {
            idle: [],
            w : []
        }
        for (var i = 1; i < 8; i++) {
            var name = `w${i}`
            var t = game.textureByName(name)
            this.animations["w"].push(t)
        }
        for (var i = 1; i < 11; i++) {
            var name = `idle${i}`
            var t = game.textureByName(name)
            this.animations["idle"].push(t)
        }
        this.animationName = "idle"
        this.w = 150
        this.h = 130
        this.texture =this.frames()[0]
        this.frameIndex = 1 // 播放图片的下标
        this.frameCount = 3 // 每隔一段时间播放
        this.flipX = false
    }
    static new(game) {
        return new this(game)
    }
    draw() {
        var context = this.game.context
        if(this.flipX) {
            context.save()
            var x = this.x + this.w / 2
            context.translate(x, 0)
            context.scale(-1, 1)
            context.translate(-x, 0)
            context.drawImage(this.texture, this.x, this.y,  this.w, this.h)
            context.restore()
        }else {
            context.drawImage(this.texture, this.x, this.y, this.w, this.h)
        }
    }
    frames() {
        return this.animations[this.animationName]
    }
    update() {
        this.frameCount--
        if(this.frameCount === 0) {
            this.frameCount = 3
            // 切换下标
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.frames()[this.frameIndex]
        }
    }
    move(x, keyStatus) {
        this.flipX = x < 0
        var animationName = {
            down: "w",
            up: "idle",
        }
        var name = animationName[keyStatus]
        this.changeAnimation(name)
        this.x += x

        // if(keyStatus === "down") {
        //     this.changeAnimation("w")
        // }else if(keyStatus === "up") {
        //     this.changeAnimation("idle")
        //
        // }
    }
    changeAnimation(name) {
        this.animationName = name
    }
}
