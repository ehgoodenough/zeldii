var World = React.createClass({
    render: function() {
        return (
            <canvas ref="canvas"
                style={this.renderStyles()}
                width={this.props.world.width * 64}
                height={this.props.world.height * 64}/>
        )
    },
    renderStyles: function() {
        return {
            "width": this.props.world.width + "em",
            "height": this.props.world.height + "em"
        }
    },
    renderCanvas: function() {
        var canvas = this.refs.canvas.getDOMNode().getContext("2d")
        for(var index in this.props.world.tiles) {
            var tile = this.props.world.tiles[index]
            canvas.fillStyle = this.tiles.images[tile.value]
            var x = tile.position.x * 64
            var y = tile.position.y * 64
            canvas.fillRect(x, y, 64, 64)
        }
        for(var index in this.props.world.doors) {
            var door = this.props.world.doors[index]
            canvas.fillStyle = "#000000"
            var x = door.position.x * 64
            var y = door.position.y * 64
            canvas.fillRect(x, y, 64, 64)
        }
    },
    componentDidMount: function() {
        this.renderCanvas()
    },
    shouldComponentUpdate: function(props) {
        return props.world.tiles != this.props.world.tiles
    },
    componentDidUpdate: function() {
        this.renderCanvas()
    },
    tiles: {
        "images": {
            0: "#EFE4B0",
            1: "#B97A57",
            2: "#3F48CC",
            3: "#22B14C",
            4: "#00A2E8",
            5: "#3F48CC",
            6: "#7F7F7F",
            7: "#C3C3C3",
            8: "#C3C3C3",
            9: "#FFFFFF",
            10: "#111111",
            11: "#EFE4B0",
            12: "#EFE4B0"
        }
    }
})

module.exports = World
