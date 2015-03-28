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
    }
})

module.exports = HeroStore
