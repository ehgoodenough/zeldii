var Hero = React.createClass({
    render: function() {
        return (
            <div className="hero" style={this.renderStyles()}/>
        )
    },
    renderStyles: function() {
        return {
            "top": this.props.data.position.y + "em",
            "left": this.props.data.position.x + "em",
            "position": "absolute",
            "width": "1em",
            "height": "1em",
            "backgroundColor": "green"
        }
    }
})

module.exports = Hero
