var Screen = React.createClass({
    propTypes: {
        x: React.PropTypes.number,
        y: React.PropTypes.number,
        width: React.PropTypes.number.isRequired,
        height: React.PropTypes.number.isRequired
    },
    getDefaultProps: function() {
        return {
            x: 0,
            y: 0
        }
    },
    render: function() {
        return (
            <div style={this.renderStyles()}>
                {this.props.children}
            </div>
        )
    },
    renderStyles: function() {
        return {
            "overflow": "hidden",
            "position": "absolute",
            "top": this.props.y + "em",
            "left": this.props.x + "em",
            "width": this.props.width + "em",
            "height": this.props.height + "em",
        }
    }
})

module.exports = Screen
