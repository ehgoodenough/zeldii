var HeroHearts = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyles()}>
                <div>-LIFE-</div>
                {this.renderHearts()}
            </div>
        )
    },
    renderStyles: function() {
        return {
            "color": "#C00",
            "fontSize": "0.5em",
            "lineHeight": "1em",
            "verticalAlign": "top",
            "display": "inline-block",
            "fontFamily": "goldfish",
        }
    },
    renderHearts: function() {
        var hearts = ""
        for(var index = 0; index < this.props.hero.hearts; index++) {
            hearts += "\u2764"
        }
        return hearts
    }
})

module.exports = HeroHearts
