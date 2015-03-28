var HeroActions = require("<scripts>/actions/HeroActions")

var PlaythroughStore = Reflux.createStore({
    data: {
        "hero": {
            "name": "jink"
        },
        "world": {
            "location": "overworld"
        }
    },
    getData: function() {
        return this.data
    },
    listenables: [
        HeroActions
    ],
    onHeroMovesToNewWorld: function(location) {
        this.data.world.location = location
        this.retrigger()
    }
})

module.exports = PlaythroughStore