controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    RoboDrawing.roboReset(0, 6, RoboDrawing.Direction.Right)
    n = 1
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < n; index++) {
            RoboDrawing.roboMoveForward()
        }
        RoboDrawing.roboTurn(RoboDrawing.TurnDirection.Left)
        for (let index = 0; index < n; index++) {
            RoboDrawing.roboMoveForward()
        }
        RoboDrawing.roboTurn(RoboDrawing.TurnDirection.Right)
        n += 1
    }
})
let n = 0
RoboDrawing.roboReset(0, 6, RoboDrawing.Direction.Right)
