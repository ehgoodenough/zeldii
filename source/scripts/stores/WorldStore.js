var OverworldData = require("<scripts>/references/OverworldData")

var WorldStore = Reflux.createStore({
    data: {
        width: WIDTH || 11,
        height: HEIGHT || 9,
        tiles: {
            //tiles
        }
    },
    getData: function() {
        return this.data
    },
    init: function() {
        var world = OverworldData.layers[0]
        this.data.width = world.width
        this.data.height = world.height
        for(var x = 0; x < world.width; x++) {
            for(var y = 0; y < world.height; y++) {
                var value = world.data[y * world.width + x]
                this.data.tiles[x + "x" + y] = {
                    "value": value - 1,
                    "position": {
                        "x": x,
                        "y": y
                    }
                }
            }
        }
    },
    isWalkable: function(x, y) {
        var tiles = new Array()
        tiles.push(this.getTile(x - 0.25, y - 0.45))
        tiles.push(this.getTile(x - 0.25, y + 0.45))
        tiles.push(this.getTile(x + 0.25, y - 0.45))
        tiles.push(this.getTile(x + 0.25, y + 0.45))
        for(var index in tiles) {
            if([1, 3, 4, 7, 9].indexOf(tiles[index].value) != -1) {
                return false
            }
        }
        return true
    },
    getTile: function(x, y) {
        return this.data.tiles[Math.floor(x) + "x" + Math.floor(y)]
    }
})

module.exports = WorldStore
