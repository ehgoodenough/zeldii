var GameFrame = React.createClass({
    getDefaultProps: function() {
        return {
            "aspect-ratio": "4x3"
        }
    },
    render: function() {
        return (
            <div id="game-frame" {...this.props}
                className={"_" + this.props["aspect-ratio"]}/>
        )
    }
})

module.exports = GameFrame
