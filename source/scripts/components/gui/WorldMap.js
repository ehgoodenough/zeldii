var WorldMap = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyles()}>
                <WorldMapHero data={this.props.hero}/>
            </div>
        )
    },
    renderStyles: function() {
        return {
            "width": "16em",
            "height": "8em",
            "fontSize": "0.1875em",
            "position": "relative",
            "verticalAlign": "top",
            "display": "inline-block",
            "backgroundColor": "#888",
        }
    }
})

var WorldMapHero = React.createClass({
    render: function() {
        return <div style={this.renderStyles()}/>
    },
    renderStyles: function() {
        return {
            "width": "1em",
            "height": "1em",
            "position": "absolute",
            "backgroundColor": "#EEE",
            "transitionDuration": "0.25s",
            "transitionProperty": "top left",
            "top": Math.floor(this.props.data.position.y / HEIGHT) + "em",
            "left": Math.floor(this.props.data.position.x / WIDTH) + "em"
        }
    }
})

module.exports = WorldMap
