var World = React.createClass({
    render: function() {
        return (
            <canvas ref="canvas"
                style={this.renderStyles()}
                width={this.props.data.width * 64}
                height={this.props.data.height * 64}/>
        )
    },
    renderStyles: function() {
        return {
            "width": this.props.data.width + "em",
            "height": this.props.data.height + "em"
        }
    },
    renderCanvas: function() {
        var canvas = this.refs.canvas.getDOMNode().getContext("2d")
        for(var index in this.props.data.tiles) {
            var tile = this.props.data.tiles[index]
            canvas.fillStyle = this.tiles.images[tile.value]
            var x = tile.position.x * 64
            var y = tile.position.y * 64
            canvas.fillRect(x, y, 64, 64)
        }
        for(var index in this.props.data.doors) {
            var door = this.props.data.doors[index]
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
        return props.data.tiles != this.props.data.tiles
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
