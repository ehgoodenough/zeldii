var LoopActions = require("<source>/scripts/actions/LoopActions")
var KeyboardInputActions = require("<source>/scripts/actions/KeyboardInputActions")

var KeyboardInputStore = Reflux.createStore({
    data: {
        //keyboard inputs
    },
    getData: function() {
        return this.data
    },
    init: function() {
        document.addEventListener("keydown", function(event) {
            if(!KeyboardInputStore.hasKeyboardInput(event.keyCode)) {
                KeyboardInputActions.StartKeyboardInput(event.keyCode)
            }
        })
        document.addEventListener("keyup", function(event) {
            KeyboardInputActions.StopKeyboardInput(event.keyCode)
        })
    },
    listenables: [
        LoopActions,
        KeyboardInputActions
    ],
    onStartKeyboardInput: function(keycode) {
        this.data[keycode] = true
        this.retrigger()
    },
    onStopKeyboardInput: function(keycode) {
        delete this.data[keycode]
        this.retrigger()
    },
    hasKeyboardInput: function(keycode) {
        return this.data[keycode] == true
    },
    onTick: function(tick) {
        for(var keycode in this.data) {
            KeyboardInputActions.TickKeyboardInput(keycode, tick)
        }
    }
})

module.exports = KeyboardInputStore
