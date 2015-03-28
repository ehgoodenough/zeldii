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
        return {
            "width": "1em",
            "height": "1em",
            "position": "absolute",
            "backgroundSize": "4em",
            "backgroundColor": "green",
            "backgroundImage": "url(./assets/images/jink.png)",
            "top": this.props.data.position.y + "em",
            "left": this.props.data.position.x + "em"
        }
    }
})

module.exports = Hero
