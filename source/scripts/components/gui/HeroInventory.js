var HeroInventory = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyles()}>
                <HeroInventoryItem/>
                <HeroInventoryItem/>
                <HeroInventoryItem/>
            </div>
        )
    },
    renderStyles: function() {
        return {
            "marginLeft": "0.25em",
            "marginRight": "0.25em",
            "verticalAlign": "top",
            "display": "inline-block",
        }
    }
})

var HeroInventoryItem = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyles()}>
                x0
            </div>
        )
    },
    renderStyles: function() {
        return {
            "color": "#EEE",
            "fontSize": "0.5em",
            "lineHeight": "1em",
            "fontFamily": "goldfish"
        }
    }
})

module.exports = HeroInventory
