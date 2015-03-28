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
        return (
            <GameFrame aspect-ratio="1x1">
                <Screen width={11} height={2} ypadding={0.25}>
                    <WorldMap hero={this.state.heroes[playthrough.hero.name]}/>
                    <HeroInventory hero={this.state.heroes[playthrough.hero.name]}/>
                    <HeroEquipment hero={this.state.heroes[playthrough.hero.name]}/>
                    <HeroHearts hero={this.state.heroes[playthrough.hero.name]}/>
                </Screen>
                <Screen y={2} width={11} height={9}>
                    <Camera target={this.state.heroes[playthrough.hero.name]}>
                        <World data={this.state.worlds[playthrough.world.location]}/>
                        <Hero data={this.state.heroes[playthrough.hero.name]}/>
                    </Camera>
                </Screen>
            </GameFrame>
        )
    }
})

module.exports = Game
