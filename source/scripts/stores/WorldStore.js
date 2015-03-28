var OverworldData = require("<scripts>/references/OverworldData")

var WorldStore = Reflux.createStore({
    data: {
        width: WIDTH || 11,
        height: HEIGHT || 9,
        tiles: {
            //tiles
        },
        doors: {
            //doors
        }
    },
    getData: function() {
        return this.data
    },
    init: function() {
        this.data.width = OverworldData.width
        this.data.height = OverworldData.height
        this.data.rwidth = OverworldData.width / WIDTH
        this.data.rheight = OverworldData.height / HEIGHT
        var tiles = OverworldData.layers[0].data
        for(var x = 0; x < OverworldData.width; x++) {
            for(var y = 0; y < OverworldData.height; y++) {
                var value = tiles[y * OverworldData.width + x]
                this.data.tiles[x + "x" + y] = {
                    "value": value - 1,
                    "position": {
                        "x": x,
                        "y": y
                    }
                }
            }
        }
        var doors = OverworldData.layers[1].objects
        for(var index in doors) {
            var door = doors[index]
            var x = Math.floor(door.x / 64)
            var y = Math.floor((door.y - 1) / 64)
            var location = door.properties.location || "nowhere"
            this.data.doors[x + "x" + y] = {
                "location": location,
                "position": {
                    "x": x,
                    "y": y
                }
            }
        }
    },
    getTile: function(x, y) {
        return this.data.tiles[Math.floor(x) + "x" + Math.floor(y)]
    },
    getDoor: function(x, y) {
        return this.data.doors[Math.floor(x) + "x" + Math.floor(y)]
    },
    isWalkableTile: function(x, y) {
        var tiles = new Array()
        tiles.push(this.getTile(x - 0.25, y))
        tiles.push(this.getTile(x - 0.25, y + 0.45))
        tiles.push(this.getTile(x + 0.25, y))
        tiles.push(this.getTile(x + 0.25, y + 0.45))
        for(var index in tiles) {
            var tile = tiles[index]
            if(tile != undefined) {
                if([1, 3, 4, 7, 9].indexOf(tile.value) != -1) {
                    return false
                }
            }
        }
        return true
    },
    isDoor: function(x, y) {
        return this.getDoor(x, y) != undefined
    }
})

module.exports = WorldStore
