var GameFrame = React.createClass({
    getDefaultProps: function() {
        return {
            ratio: "4x3"
        }
    },
    render: function() {
        return (
            <div id="game-frame" {...this.props}
                className={"_" + this.props.ratio}/>
        )
    }
})

module.exports = GameFrame
