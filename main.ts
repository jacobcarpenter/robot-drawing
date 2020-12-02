controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    RoboDrawing.roboReset()
    n = 1
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < n; index++) {
            RoboDrawing.roboMoveForward()
        }
        RoboDrawing.roboTurnLeft()
        for (let index = 0; index < n; index++) {
            RoboDrawing.roboMoveForward()
        }
        RoboDrawing.roboTurnRight()
        n += 1
    }
})
let n = 0
RoboDrawing.roboReset()
