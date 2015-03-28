var Hero = React.createClass({
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
