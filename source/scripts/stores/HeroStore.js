var HeroActions = require("<scripts>/actions/HeroActions")
var LoopActions = require("<scripts>/actions/LoopActions")

var HeroStore = Reflux.createStore({
    name: "jink",
    data: {
        "jink": {
            "position": {
                "x": 82.5,
                "y": 69.5
            },
            "velocity": {
                "x": 0,
                "y": 0,
            },
            "size": 1,
            "acceleration": 1,
            "deacceleration": 0.5,
            "maxvelocity": 0.085,
            "direction": "south",
            "animation": 0
        }
    },
    getData: function() {
        return this.data
    },
    listenables: [
        HeroActions,
        LoopActions
    ],
    onHeroMovesNorth: function(tick) {
        var hero = this.data[this.name]
        hero.velocity.y -= hero.acceleration * tick
        if(hero.velocity.y < -hero.maxvelocity) {
            hero.velocity.y = -hero.maxvelocity
        }
        if(hero.velocity.x < hero.maxvelocity / 2
        && hero.velocity.x > -hero.maxvelocity / 2) {
            hero.direction = "north"
        }
        this.retrigger()
    },
    onHeroMovesSouth: function(tick) {
        var hero = this.data[this.name]
        hero.velocity.y += hero.acceleration * tick
        if(hero.velocity.y > hero.maxvelocity) {
            hero.velocity.y = hero.maxvelocity
        }
        if(hero.velocity.x < hero.maxvelocity / 2
        && hero.velocity.x > -hero.maxvelocity / 2) {
            hero.direction = "south"
        }
        this.retrigger()
    },
    onHeroMovesWest: function(tick) {
        var hero = this.data[this.name]
        hero.velocity.x -= hero.acceleration * tick
        if(hero.velocity.x < -hero.maxvelocity) {
            hero.velocity.x = -hero.maxvelocity
        }
        if(hero.velocity.y < hero.maxvelocity / 2
        && hero.velocity.y > -hero.maxvelocity / 2) {
            hero.direction = "west"
        }
        this.retrigger()
    },
    onHeroMovesEast: function(tick) {
        var hero = this.data[this.name]
        hero.velocity.x += hero.acceleration * tick
        if(hero.velocity.x > hero.maxvelocity) {
            hero.velocity.x = hero.maxvelocity
        }
        if(hero.velocity.y < hero.maxvelocity / 2
        && hero.velocity.y > -hero.maxvelocity / 2) {
            hero.direction = "east"
        }
        this.retrigger()
    },
    onTick: function(tick) {
        var hero = this.data[this.name]
        if(hero.velocity.x < 0) {
            hero.velocity.x += hero.deacceleration * tick
            if(hero.velocity.x > 0) {
                hero.velocity.x = 0
            }
        } else if(hero.velocity.x > 0) {
            hero.velocity.x -= hero.deacceleration * tick
            if(hero.velocity.x < 0) {
                hero.velocity.x = 0
            }
        }
        if(hero.velocity.y < 0) {
            hero.velocity.y += hero.deacceleration * tick
            if(hero.velocity.y > 0) {
                hero.velocity.y = 0
            }
        } else if(hero.velocity.y > 0) {
            hero.velocity.y -= hero.deacceleration * tick
            if(hero.velocity.y < 0) {
                hero.velocity.y = 0
            }
        }
        hero.position.x += hero.velocity.x
        hero.position.y += hero.velocity.y
        if(hero.velocity.x != 0 || hero.velocity.y != 0) {
            var vx = hero.velocity.x
            var vy = hero.velocity.y
            var maxv = hero.maxvelocity
            var v = Math.sqrt(vx * vx + vy * vy)
            hero.animation += Math.min(v, maxv)
        } else {
            hero.animation = 0
        }
        this.retrigger()
    }
})

module.exports = HeroStore
