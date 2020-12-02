namespace RoboDrawing {
    const waitInterval = 300;
    const headingProperty = 'roboHeading';
    const roboImages = [img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . 5 5 5 5 . . . . . .
        . . . . . . 5 5 5 5 . . . . . .
        . . . . . . 5 5 5 5 . . . . . .
        . . . . . 5 5 5 5 5 5 . . . . .
        . . . . . 5 5 5 5 5 5 . . . . .
        . . . . 5 5 5 5 5 5 5 5 . . . .
        . . . . 5 5 5 5 5 5 5 5 . . . .
        . . . . 5 5 5 5 5 5 5 5 . . . .
        . . . 5 5 5 5 5 5 5 5 5 5 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . 5 . . . . . . . . . . . . .
        . . 5 5 5 5 . . . . . . . . . .
        . . 5 5 5 5 5 5 . . . . . . . .
        . . 5 5 5 5 5 5 5 5 5 . . . . .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 5 5 5 . . . . .
        . . 5 5 5 5 5 5 . . . . . . . .
        . . 5 5 5 5 . . . . . . . . . .
        . . 5 . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 5 5 5 5 5 5 5 5 5 5 . . .
        . . . . 5 5 5 5 5 5 5 5 . . . .
        . . . . 5 5 5 5 5 5 5 5 . . . .
        . . . . 5 5 5 5 5 5 5 5 . . . .
        . . . . . 5 5 5 5 5 5 . . . . .
        . . . . . 5 5 5 5 5 5 . . . . .
        . . . . . . 5 5 5 5 . . . . . .
        . . . . . . 5 5 5 5 . . . . . .
        . . . . . . 5 5 5 5 . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . . 5 5 . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . 5 . .
        . . . . . . . . . . 5 5 5 5 . .
        . . . . . . . . 5 5 5 5 5 5 . .
        . . . . . 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . .
        . . 5 5 5 5 5 5 5 5 5 5 5 5 . .
        . . . . . 5 5 5 5 5 5 5 5 5 . .
        . . . . . . . . 5 5 5 5 5 5 . .
        . . . . . . . . . . 5 5 5 5 . .
        . . . . . . . . . . . . . 5 . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `];

    let robo: Sprite;
    let cellSize = 16;
    let gridSize = 7;

    //% block
    export function roboReset() {
        if (robo) {
            robo.destroy();
            scene.backgroundImage().fill(0);
        }

        let initialHeading = 1;

        robo = sprites.create(roboImages[initialHeading]);
        robo.data[headingProperty] = initialHeading;

        let background = scene.backgroundImage();
        const horizontalMargin = (scene.screenWidth() - gridSize * cellSize) / 2;
        const verticalMargin = (scene.screenHeight() - gridSize * cellSize) / 2;

        for (let cellEdge = 0; cellEdge <= gridSize; cellEdge++) {
            const screenX = horizontalMargin + cellEdge * cellSize;
            background.drawLine(screenX, verticalMargin, screenX, scene.screenHeight() - verticalMargin, 1);

            const screenY = verticalMargin + cellEdge * cellSize;
            background.drawLine(horizontalMargin, screenY, scene.screenWidth() - horizontalMargin, screenY, 1);
        }

        robo.setPosition(horizontalMargin + cellSize / 2, scene.screenHeight() - verticalMargin - cellSize / 2);
        pause(waitInterval);
    }

    //% block
    export function roboMoveForward() {
        const lastX = robo.x;
        const lastY = robo.y;

        switch (robo.data[headingProperty]) {
            case 0: robo.y -= cellSize; break;
            case 1: robo.x += cellSize; break;
            case 2: robo.y += cellSize; break;
            case 3: robo.x -= cellSize; break;
        }

        scene.backgroundImage().drawLine(lastX, lastY, robo.x, robo.y, 3);
        pause(waitInterval);
    }

    //% block
    export function roboTurnRight() {
        robo.data[headingProperty] = (robo.data[headingProperty] + 1) % 4;
        updateRoboImage();
        pause(waitInterval);
    }

    //% block
    export function roboTurnLeft() {
        robo.data[headingProperty] = (robo.data[headingProperty] - 1 + 4) % 4;
        updateRoboImage();
        pause(waitInterval);
    }

    function updateRoboImage() {
        robo.setImage(roboImages[robo.data[headingProperty] as number]);
    }
}