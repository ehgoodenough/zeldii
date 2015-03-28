var OverworldData = require("<scripts>/references/OverworldData")
var SingleRoomData = require("<scripts>/references/SingleRoomData")

var PlaythroughStore = require("<scripts>/stores/PlaythroughStore")
var HeroActions = require("<scripts>/actions/HeroActions")

var WorldStore = Reflux.createStore({
    data: {
        //worlds
    },
    getData: function() {
        return this.data
    },
    init: function() {
        this.data["overworld"] = this.createWorld(OverworldData, "overworld")
        this.data["takethis"] = this.createWorld(SingleRoomData, "takethis")
        
        PlaythroughStore.listen(this.onPlaythroughStore)
        this.onPlaythroughStore(PlaythroughStore.getInitialState())
    },
    listenables: [
        HeroActions
    ],
    onPlaythroughStore: function(playthrough) {
        this.location = playthrough.world.location
    },
    onHeroMovesToNewWorld: function(location) {
        if(location != "overworld") {
            HeroActions.HeroMovesTo(this.data[location].spawn)
        }
    },
    createWorld: function(tiledmap, location) {
        var world = {
            "location": location,
            "tiles": {
                //tiles
            },
            "doors": {
                //doors
            }
        }
        world.spawn = JSON.parse(tiledmap.properties.spawn)
        world.spawn.x += 0.5
        world.spawn.y += 0.5
        world.width = tiledmap.width
        world.height = tiledmap.height
        world.rwidth = tiledmap.width / WIDTH
        world.rheight = tiledmap.height / HEIGHT
        var layer0 = tiledmap.layers[0]
        var layer1 = tiledmap.layers[1]
        for(var x = 0; x < tiledmap.width; x++) {
            for(var y = 0; y < tiledmap.height; y++) {
                var value = layer0.data[y * tiledmap.width + x]
                world.tiles[x + "x" + y] = {
                    "value": value - 1,
                    "position": {
                        "x": x,
                        "y": y
                    }
                }
            }
        }
        if(layer1) {
            for(var index in layer1.objects) {
                var door = layer1.objects[index]
                var x = Math.floor(door.x / 64)
                var y = Math.floor((door.y - 1) / 64)
                var location = door.properties.location || "nowhere"
                world.doors[x + "x" + y] = {
                    "location": location,
                    "position": {
                        "x": x,
                        "y": y
                    }
                }
            }
        }
        return world
    },
    getWorld: function() {
        return this.data[this.location]
    },
    getTile: function(x, y) {
        return this.getWorld().tiles[Math.floor(x) + "x" + Math.floor(y)]
    },
    getDoor: function(x, y) {
        return this.getWorld().doors[Math.floor(x) + "x" + Math.floor(y)]
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
