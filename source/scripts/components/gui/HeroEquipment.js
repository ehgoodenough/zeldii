var HeroEquipment = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyles()}>
                <HeroEquipmentSlot/>
                <HeroEquipmentSlot/>
            </div>
        )
    },
    renderStyles: function() {
        return {
            "verticalAlign": "top",
            "display": "inline-block"
        }
    }
})

var HeroEquipmentSlot = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyles()}/>
        )
    },
    renderStyles: function() {
        return {
            "width": "1em",
            "height": "1.5em",
            "marginRight": "0.25em",
            "borderStyle": "solid",
            "borderWidth": "0.1em",
            "borderRadius": "0.15em",
            "borderColor": "#3F48CC",
            "display": "inline-block",
            "fontFamily": "goldfish"
        }
    }
})

module.exports = HeroEquipment
