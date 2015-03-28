var HeroStore = require("<scripts>/stores/HeroStore")

var Camera = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyles()}>
                {this.props.children}
            </div>
        )
    },
    renderStyles: function() {
        var target = this.props.target
        var rx = Math.floor(target.position.x / WIDTH) * WIDTH
        var ry = Math.floor(target.position.y / HEIGHT) * HEIGHT
        return {
            "top": ry * -1 + "em",
            "left": rx * -1 + "em",
            "position": "absolute",
            "transitionDuration": "0.5s",
            "transitionProperty": "top left"
        }
    }
})

module.exports = Camera
