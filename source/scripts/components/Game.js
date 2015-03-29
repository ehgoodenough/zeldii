var HeroStore = require("<scripts>/stores/HeroStore")
var WorldStore = require("<scripts>/stores/WorldStore")
var PlaythroughStore = require("<scripts>/stores/PlaythroughStore")

var GameFrame = require("<scripts>/components/GameFrame")
var Camera = require("<scripts>/components/Camera")
var Screen = require("<scripts>/components/Screen")

var Hero = require("<scripts>/components/Hero")
var World = require("<scripts>/components/World")

var WorldMap = require("<scripts>/components/gui/WorldMap")
var HeroInventory = require("<scripts>/components/gui/HeroInventory")
var HeroEquipment = require("<scripts>/components/gui/HeroEquipment")
var HeroHearts = require("<scripts>/components/gui/HeroHearts")

var Game = React.createClass({
    mixins: [
        Reflux.connect(HeroStore, "heroes"),
        Reflux.connect(WorldStore, "worlds"),
        Reflux.connect(PlaythroughStore, "playthrough"),
    ],
    render: function() {
        var playthrough = this.state.playthrough
        var hero = this.state.heroes[playthrough.hero.name]
        var world = this.state.worlds[playthrough.world.location]
        return (
            <GameFrame aspect-ratio="1x1">
                <Screen width={11} height={2} ypadding={0.25}>
                    <WorldMap hero={hero}/>
                    <HeroInventory hero={hero}/>
                    <HeroEquipment hero={hero}/>
                    <HeroHearts hero={hero}/>
                </Screen>
                <Screen y={2} width={11} height={9}>
                    <Camera target={hero}>
                        <World world={world}/>
                        <Hero hero={hero}/>
                    </Camera>
                </Screen>
                <ReactGoogleAnalytics.Initializer/>
            </GameFrame>
        )
    },
    componentDidMount: function() {
        if(document.URL.indexOf("ehgoodenough.github.io/zeldii") > -1) {
            ReactGoogleAnalytics("create", "UA-51900554-2", "auto")
            ReactGoogleAnalytics("send", "pageview")
            console.log("Google Analytics!")
        }
    }
})

module.exports = Game
