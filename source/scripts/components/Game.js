var GameFrame = require("<scripts>/components/GameFrame")
var Camera = require("<scripts>/components/Camera")
var HeroStore = require("<scripts>/stores/HeroStore")
var Hero = require("<scripts>/components/Hero")

var Game = React.createClass({
    mixins: [
        Reflux.connect(HeroStore, "heroes")
    ],
    render: function() {
        return (
            <GameFrame aspect-ratio="11x9">
                <Camera target={this.state["heroes"]["jink"]}>
                    {this.renderEntities(Hero, this.state["heroes"])}
                </Camera>
            </GameFrame>
        )
    },
    renderEntities: function(Class, entities) {
        var renderings = []
        for(var index in entities) {
            var data = entities[index]
            renderings.push(
                <Class key={index} data={data}/>
            )
        }
        return renderings
    }
})

module.exports = Game
