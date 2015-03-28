var GameFrame = require("<scripts>/components/GameFrame")
var Camera = require("<scripts>/components/Camera")
var HeroStore = require("<scripts>/stores/HeroStore")
var Hero = require("<scripts>/components/Hero")
var WorldStore = require("<scripts>/stores/WorldStore")
var World = require("<scripts>/components/World")

var Game = React.createClass({
    mixins: [
        Reflux.connect(HeroStore, "heroes"),
        Reflux.connect(WorldStore, "world")
    ],
    render: function() {
        return (
            <GameFrame aspect-ratio="11x9">
                <Camera target={this.state.heroes.jink}>
                    <World data={this.state.world}/>
                    <Hero data={this.state.heroes.jink}/>
                </Camera>
            </GameFrame>
        )
    }
})

module.exports = Game
