var GameFrame = require("<scripts>/components/GameFrame")
var HeroStore = require("<scripts>/stores/HeroStore")
var Hero = require("<scripts>/components/Hero")

var Game = React.createClass({
    mixins: [
        Reflux.connect(HeroStore, "heroes")
    ],
    render: function() {
        return (
            <GameFrame aspect-ratio="11x9">
                {this.renderEntities(Hero, "heroes")}
            </GameFrame>
        )
    },
    renderEntities: function(Class, entities) {
        var renderings = new Array()
        for(var id in this.state[entities]) {
            var data = this.state[entities][id]
            renderings.push(
                <Class key={id} data={data}/>
            )
        }
        return renderings
    }
})

module.exports = Game
