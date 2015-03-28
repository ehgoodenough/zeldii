var World = React.createClass({
    render: function() {
        return (
            <canvas ref="canvas"
                width={this.props.data.width * 64}
                height={this.props.data.height * 64}
                style={this.renderStyles()}/>
        )
    },
    renderStyles: function() {
        return {
            "width": this.props.data.width + "em",
            "height": this.props.data.height + "em"
        }
    },
    componentDidMount: function() {
        var canvas = this.refs.canvas.getDOMNode().getContext("2d")
        for(var index in this.props.data.tiles) {
            var tile = this.props.data.tiles[index]
            console.log(tile.value, this.tiles.images[tile.value])
            canvas.fillStyle = this.tiles.images[tile.value]
            var x = tile.position.x * 64
            var y = tile.position.y * 64
            canvas.fillRect(x, y, 64, 64)
        }
    },
    tiles: {
        "images": {
            0: "#EFE4B0",
            1: "#B97A57",
            2: "#B97A57", //ladder
            3: "#22B14C",
            4: "#00A2E8",
            5: "#22B14C", //ladder
            6: "#7F7F7F",
            7: "#C3C3C3",
            8: "#C3C3C3",
            9: "#FFFFFF",
            10: "#000000",
            11: "#000000", //dock
            12: "#000000" //sand
        }
    }
})

module.exports = World
