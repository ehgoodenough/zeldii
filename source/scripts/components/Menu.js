var Menu = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyles()}/>
        )
    },
    renderStyles: function() {
        return {
            "width": "11em",
            "height": "2em",
            "backgroundColor": "#111"
        }
    }
})

module.exports = Menu
