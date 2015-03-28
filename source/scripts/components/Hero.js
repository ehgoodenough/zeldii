var LoopStore = require("<scripts>/stores/LoopStore")
var KeyboardInputStore = require("<scripts>/stores/KeyboardInputStore")
var InputBindingStore = require("<scripts>/stores/InputBindingStore")
var HeroActions = require("<scripts>/actions/HeroActions")

var Hero = React.createClass({
    componentDidMount: function() {
        InputBindingStore.addAction("w", HeroActions.HeroMovesNorth)
        InputBindingStore.addAction("s", HeroActions.HeroMovesSouth)
        InputBindingStore.addAction("a", HeroActions.HeroMovesWest)
        InputBindingStore.addAction("d", HeroActions.HeroMovesEast)
    },
    render: function() {
        return (
            <div style={this.renderStyles()}/>
        )
    },
    renderStyles: function() {
        var hero = this.props.data
        return {
            "width": hero.size + "em",
            "height": hero.size + "em",
            "top": hero.position.y - (hero.size / 2) + "em",
            "left": hero.position.x - (hero.size / 2) + "em",
            "position": "absolute",
            "backgroundSize": "4em",
            "backgroundColor": "green",
            "backgroundImage": "url(./assets/images/jink.png)",
            "backgroundPosition": this.spritesheet[hero.direction]
        }
    },
    spritesheet: {
        "north": "2em 0em",
        "south": "0em 0em",
        "west": "3em 0em",
        "east": "1em 0em"
    }
})

module.exports = Hero
