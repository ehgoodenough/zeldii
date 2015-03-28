var GameFrame = require("<scripts>/components/GameFrame")
var Camera = require("<scripts>/components/Camera")
var HeroStore = require("<scripts>/stores/HeroStore")
var Hero = require("<scripts>/components/Hero")
var WorldStore = require("<scripts>/stores/WorldStore")
var World = require("<scripts>/components/World")
var PlaythroughStore = require("<scripts>/stores/PlaythroughStore")

var Game = React.createClass({
    mixins: [
        Reflux.connect(HeroStore, "heroes"),
        Reflux.connect(WorldStore, "worlds"),
        Reflux.connect(PlaythroughStore, "playthrough"),
    ],
    render: function() {
        var playthrough = this.state.playthrough
        return (
            <GameFrame aspect-ratio="11x9">
                <Camera target={this.state.heroes[playthrough.hero.name]}>
                    <World data={this.state.worlds[playthrough.world.location]}/>
                    <Hero data={this.state.heroes[playthrough.hero.name]}/>
                </Camera>
            </GameFrame>
        )
    }
})

module.exports = Game
