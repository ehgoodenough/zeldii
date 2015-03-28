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
        var stylings = {
            "width": "1em",
            "height": "1em",
            "position": "absolute",
            "backgroundSize": "4em",
            "backgroundColor": "green",
            "backgroundImage": "url(./assets/images/jink.png)",
            "top": hero.position.y + "em",
            "left": hero.position.x + "em"
        }
        if(hero.direction == "north") {
            stylings["backgroundPosition"] = "2em 0em"
        } else if(hero.direction == "south") {
            stylings["backgroundPosition"] = "0em 0em"
        } else if(hero.direction == "west") {
            stylings["backgroundPosition"] = "3em 0em"
        } else if(hero.direction == "east") {
            stylings["backgroundPosition"] = "1em 0em"
        }
        return stylings
    }
})

module.exports = Hero
