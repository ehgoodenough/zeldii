var HeroActions = require("<scripts>/actions/HeroActions")
var LoopActions = require("<scripts>/actions/LoopActions")

var HeroStore = Reflux.createStore({
    name: "jink",
    data: {
        "jink": {
            "position": {
                "x": 10,
                "y": 8
            },
            "velocity": {
                "x": 0,
                "y": 0,
            },
            "acceleration": 1,
            "deacceleration": 0.5,
            "maxvelocity": 0.1
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
        hero.direction = "north"
        this.retrigger()
    },
    onHeroMovesSouth: function(tick) {
        var hero = this.data[this.name]
        hero.velocity.y += hero.acceleration * tick
        if(hero.velocity.y > hero.maxvelocity) {
            hero.velocity.y = hero.maxvelocity
        }
        hero.direction = "south"
        this.retrigger()
    },
    onHeroMovesWest: function(tick) {
        var hero = this.data[this.name]
        hero.velocity.x -= hero.acceleration * tick
        if(hero.velocity.x < -hero.maxvelocity) {
            hero.velocity.x = -hero.maxvelocity
        }
        hero.direction = "west"
        this.retrigger()
    },
    onHeroMovesEast: function(tick) {
        var hero = this.data[this.name]
        hero.velocity.x += hero.acceleration * tick
        if(hero.velocity.x > hero.maxvelocity) {
            hero.velocity.x = hero.maxvelocity
        }
        hero.direction = "east"
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
        this.retrigger()
    }
})

module.exports = HeroStore
