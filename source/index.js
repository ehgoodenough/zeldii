window.React = require("react/addons")
window.Reflux = require("reflux")

window.Reflux.StoreMethods.getInitialState = function() {if(this.getData) {return this.getData()}}
window.Reflux.StoreMethods.retrigger = function() {if(this.getData) {this.trigger(this.getData())}}

var Game = require("<scripts>/components/Game")
React.render(<Game/>, document.body)
