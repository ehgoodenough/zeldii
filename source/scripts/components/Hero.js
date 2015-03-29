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
        var hero = this.props.hero
        return {
            "width": hero.size + "em",
            "height": hero.size + "em",
            "top": hero.position.y - (hero.size / 2) + "em",
            "left": hero.position.x - (hero.size / 2) + "em",
            "position": "absolute",
            "backgroundSize": "4em",
            "backgroundImage": "url(./assets/images/jink.svg)",
            "backgroundPosition": this.renderSpritesheetPosition()
        }
    },
    renderSpritesheetPosition: function() {
        var x = {
            "north": "2em",
            "south": "0em",
            "west": "3em",
            "east": "1em"
        }
        var y = {
            true: "0em",
            false: "-1em"
        }
        var hero = this.props.hero
        return x[hero.direction] + " " + y[hero.animation % 1 < 0.5]
    }
})

module.exports = Hero
