var HeroActions = require("<scripts>/actions/HeroActions")

var HeroStore = Reflux.createStore({
    data: {
        "jink": {
            "position": {
                "x": 10,
                "y": 8
            }
        }
    },
    getData: function() {
        return this.data
    },
    listenables: [
        HeroActions
    ],
    onHeroMovesNorth: function() {
        console.log("!")
    }
})

module.exports = HeroStore
