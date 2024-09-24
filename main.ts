/*
    TODO 
    - DONE make each new level change the tilemap background
    - DONE Make FPS info not look like a chat bubble
    - DONE Show game over screen with instructions
    - DONE print game over text to the main sprite
*/
tiles.setTilemap(tilemap`level`);

let debugSprite = sprites.create(img`
    .
`);



//it's way more performant to have a single game sprite vs 200 little sprites
//having over 200 sprites makes the FPS go to 5fps
let boardSprite = sprites.create(img`
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111
`);


boardSprite.x = 80;
boardSprite.y = 60;

let nextPieceSprite = sprites.create(img`
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
    111111111111111111111111111111
`);

nextPieceSprite.x = 135;
nextPieceSprite.y = 30;


debugSprite.x = 23;
debugSprite.y = 20;

enum GAME_MODE {
    TITLE = 1,
    PLAYING = 2,
    PAUSED = 3

}


class MyApp {

    message: string = '';
    downKey: boolean;
    leftKey: boolean;
    rightKey: boolean;
    gameMatrix: number[][];
    gameMatrixBuffer: number[][];
    nextPieceMatrix: number[][];
    shadowFinderMatrix: number[][];
    piece: number;
    timer: number;
    centX: number;
    centY: number;
    state: number;
    toMakePiece: boolean;
    toClear: boolean;
    nextPiece: number;
    score: number;
    level: number;
    levelSpeed: number;
    lines: number;
    nextLevel: number;
    fps: number;
    delay: number;
    drawNextPiece: boolean = false;
    // keytimer = 0;
    downkeytimer = 0;
    leftkeytimer = 0;
    rightkeytimer = 0;
    game_mode = GAME_MODE.TITLE;
    waitForDownKeyRelease = false;

    //FPS
    lastCalledTime: number;
    fpscounter: number;
    currentfps: number;

    constructor() {
        this.lastCalledTime = game.runtime();
        this.fpscounter = 0;
        this.currentfps = 0;

        this.initGame();
        this.reset();

    }

    countFPS() {
        this.fpscounter++;
        let delta = (game.runtime() - this.lastCalledTime) / 1000;
        if (delta > 1) {
            this.currentfps = this.fpscounter;
            this.fpscounter = 0;
            this.lastCalledTime = game.runtime();
        }
    }

    /* KEYBOARD CONTROLS */

    dropKey = false;
    upKey = false;
    
    keyboardStuff(){

    }
    

    findGreatest(nums: number[]): number {
        let greatest = 0;
        let greatestIndex = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > greatest) {
                greatestIndex = i;
                greatest = nums[i]
            }
        }
        return greatestIndex;
    }

    getRandomNumber(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }

    newGame_Click() {
        this.reset();
    }

    initGame() {

        this.fps = 0;
        this.nextLevel = 0;
        this.timer = 0;
        this.piece = 0;
        this.state = 0;
        this.centX = 0;
        this.centY = 0;
        this.score = 0;
        this.level = 0;
        this.lines = 0;

        this.nextPiece = this.getRandomNumber(7) + 1;
        this.toClear = false;
        this.toMakePiece = true;
        this.downKey = false;
        this.leftKey = false;
        this.rightKey = false;
        this.gameMatrix = [];
        this.gameMatrixBuffer = [];
        this.delay = 32;
        for (let i = 0; i < 20; i++) {
            let arr1: number[] = [];
            let arr2: number[] = [];
            this.gameMatrix.push(arr1);
            this.gameMatrixBuffer.push(arr2);
            for (let j = 0; j < 10; j++) {
                this.gameMatrix[i][j] = 0;
                this.gameMatrixBuffer[i][j] = 0;
            }

        }

        this.nextPieceMatrix = [];
        for (let i = 0; i < 4; i++) {
            let arr3:number[] = [];
            this.nextPieceMatrix.push(arr3);
            for (let j = 0; j < 5; j++)
                this.nextPieceMatrix[i][j] = 0;
        }

        //initialize shadowFinderMatrix
        if (!this.shadowFinderMatrix) {
            this.shadowFinderMatrix = [];
            for (let i = 0; i < 20; i++) {
                let arr1: number[] = [];
                this.shadowFinderMatrix.push(arr1);
                for (let j = 0; j < 10; j++) {
                    this.shadowFinderMatrix[i][j] = 0;
                }
            }
        }

    }


    reset() {

        boardSprite.image.fill(1);
        tiles.setTilemap(tilemap`level`);
        this.game_mode = GAME_MODE.PLAYING;

        info.setScore(0);

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 5; j++)
                this.nextPieceMatrix[i][j] = 0;
        }

        this.nextLevel = 0;
        this.timer = 0;
        this.piece = 0;
        this.state = 0;
        this.centX = 0;
        this.centY = 0;
        this.score = 0;
        this.level = 1;
        this.lines = 0;
        this.waitForDownKeyRelease = false;

        this.nextPiece = this.getRandomNumber(7) + 1;
        this.toClear = false;
        this.toMakePiece = true;
        this.downKey = false;
        this.leftKey = false;
        this.rightKey = false;

        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 10; j++) {
                this.gameMatrix[i][j] = 0;
                this.gameMatrixBuffer[i][j] = 0;
            }

        }
    }

    gameLoop() {

        //program loop
        if (this.game_mode != GAME_MODE.PLAYING) {
            return;
        }

        //put delays on directional keys - for right/left move once then wait
        if (this.downKey)
            this.downkeytimer++;
        else
            this.downkeytimer = 0;
        if (this.leftKey)
            this.leftkeytimer++;
        else
            this.leftkeytimer = 0;
        if (this.rightKey)
            this.rightkeytimer++;
        else
            this.rightkeytimer = 0;

        if (this.level == 1)
            this.levelSpeed = 30;
        if (this.level == 2)
            this.levelSpeed = 25;
        if (this.level == 3)
            this.levelSpeed = 20;
        if (this.level == 4)
            this.levelSpeed = 17;
        if (this.level == 5)
            this.levelSpeed = 14;
        if (this.level == 6)
            this.levelSpeed = 10;
        if (this.level == 7)
            this.levelSpeed = 8;
        if (this.level == 8)
            this.levelSpeed = 5;
        if (this.level == 9)
            this.levelSpeed = 3;
        if (this.level == 10)
            this.levelSpeed = 2;


        if (this.timer == -1)
            this.checkMatrix();

        if (this.toClear)
            this.timer--;
        else
            this.timer++;

        if (this.timer == -24) {
            this.clearBlocks();
            this.toClear = false;
            this.timer = 0;
        }

        if (this.toMakePiece && this.timer >= 0) {
            this.makePiece();
            this.toMakePiece = false;

            if (this.downKey) //prevent constant downkey if new piece is generated
            {
                this.waitForDownKeyRelease = true;
            }
        }

        if (this.downKey && !this.toClear && !this.waitForDownKeyRelease) {
            if (this.downkeytimer % 3 == 0)
                this.moveDown();
        }

        if (this.leftKey && !this.toClear) {
            if (this.leftkeytimer == 1 || (this.leftkeytimer > 15 && this.leftkeytimer % 3 == 0))
                this.moveLeft();
        }

        if (this.rightKey && !this.toClear) {
            if (this.rightkeytimer == 1 || (this.rightkeytimer > 15 && this.rightkeytimer % 3 == 0))
                this.moveRight();
        }

        if (this.timer == this.levelSpeed) {
            this.timer = 0;
            this.moveDown();
        }

        //TODO - this slows it down by about 10 FPS
        // this.findShadow();


    }

    gameover() {
        this.game_mode = GAME_MODE.TITLE;
        for (let i = 0; i < 4; i++)
            for (let j = 0; j < 5; j++)
                this.nextPieceMatrix[i][j] = 0;
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 10; j++) {
                this.gameMatrix[i][j] = 0;
                this.gameMatrixBuffer[i][j] = 0;
            }

        }

        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 10; j++) {
                this.shadowFinderMatrix[i][j] = 0;
            }
        }

    }

    makePiece() {
        this.piece = this.nextPiece;
        this.nextPiece = this.getRandomNumber(7) + 1;
        for (let i = 0; i < 4; i++)
            for (let j = 0; j < 5; j++)
                this.nextPieceMatrix[i][j] = 0;
        if (this.gameMatrix[1][4] != 0) {
            this.gameover();
            return;
        }
        if (this.nextPiece == 1) {
            this.nextPieceMatrix[1][2] = 1;
            this.nextPieceMatrix[2][2] = 1;
            this.nextPieceMatrix[2][1] = 1;
            this.nextPieceMatrix[2][3] = 1;
        }
        if (this.nextPiece == 2) {
            this.nextPieceMatrix[1][3] = 2;
            this.nextPieceMatrix[1][2] = 2;
            this.nextPieceMatrix[2][2] = 2;
            this.nextPieceMatrix[2][1] = 2;
        }
        if (this.nextPiece == 3) {
            this.nextPieceMatrix[1][1] = 3;
            this.nextPieceMatrix[1][2] = 3;
            this.nextPieceMatrix[2][2] = 3;
            this.nextPieceMatrix[2][3] = 3;
        }
        if (this.nextPiece == 4) {
            this.nextPieceMatrix[1][3] = 4;
            this.nextPieceMatrix[2][3] = 4;
            this.nextPieceMatrix[2][2] = 4;
            this.nextPieceMatrix[2][1] = 4;
        }
        if (this.nextPiece == 5) {
            this.nextPieceMatrix[1][1] = 5;
            this.nextPieceMatrix[2][1] = 5;
            this.nextPieceMatrix[2][2] = 5;
            this.nextPieceMatrix[2][3] = 5;
        }
        if (this.nextPiece == 6) {
            this.nextPieceMatrix[1][3] = 6;
            this.nextPieceMatrix[1][2] = 6;
            this.nextPieceMatrix[2][2] = 6;
            this.nextPieceMatrix[2][3] = 6;
        }
        if (this.nextPiece == 7) {
            this.nextPieceMatrix[0][2] = 7;
            this.nextPieceMatrix[1][2] = 7;
            this.nextPieceMatrix[2][2] = 7;
            this.nextPieceMatrix[3][2] = 7;
        }
        if (this.piece == 1) {
            this.gameMatrixBuffer[0][5] = 1;
            this.gameMatrixBuffer[1][5] = 1;
            this.gameMatrixBuffer[1][4] = 1;
            this.gameMatrixBuffer[1][6] = 1;
            this.centX = 5;
            this.centY = 1;
            this.state = 1;
        }
        if (this.piece == 2) {
            this.gameMatrixBuffer[0][5] = 2;
            this.gameMatrixBuffer[0][4] = 2;
            this.gameMatrixBuffer[1][4] = 2;
            this.gameMatrixBuffer[1][3] = 2;
            this.centX = 4;
            this.centY = 1;
            this.state = 1;
        }
        if (this.piece == 3) {
            this.gameMatrixBuffer[0][3] = 3;
            this.gameMatrixBuffer[0][4] = 3;
            this.gameMatrixBuffer[1][4] = 3;
            this.gameMatrixBuffer[1][5] = 3;
            this.centX = 4;
            this.centY = 1;
            this.state = 1;
        }
        if (this.piece == 4) {
            this.gameMatrixBuffer[0][5] = 4;
            this.gameMatrixBuffer[1][5] = 4;
            this.gameMatrixBuffer[1][4] = 4;
            this.gameMatrixBuffer[1][3] = 4;
            this.centX = 4;
            this.centY = 1;
            this.state = 1;
        }
        if (this.piece == 5) {
            this.gameMatrixBuffer[0][3] = 5;
            this.gameMatrixBuffer[1][3] = 5;
            this.gameMatrixBuffer[1][4] = 5;
            this.gameMatrixBuffer[1][5] = 5;
            this.centX = 4;
            this.centY = 1;
            this.state = 1;
        }
        if (this.piece == 6) {
            this.gameMatrixBuffer[0][5] = 6;
            this.gameMatrixBuffer[0][4] = 6;
            this.gameMatrixBuffer[1][4] = 6;
            this.gameMatrixBuffer[1][5] = 6;
        }
        if (this.piece == 7) {
            this.gameMatrixBuffer[0][5] = 7;
            this.gameMatrixBuffer[1][5] = 7;
            this.gameMatrixBuffer[2][5] = 7;
            this.gameMatrixBuffer[3][5] = 7;
            this.centX = 5;
            this.centY = 1;
            this.state = 1;
        }
        this.drawNextPiece = true;
        this.findShadow();
    }

    moveLeft() {
        if (this.game_mode != GAME_MODE.PLAYING)
            return;
        let success = true;
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 20; j++) {
                if (this.gameMatrixBuffer[j][i] != 0 && i == 0)
                    success = false;
                if (this.gameMatrixBuffer[j][i] != 0 && i != 0 && this.gameMatrix[j][i - 1] != 0)
                    success = false;
            }
        }
        if (success) {
            this.centX -= 1;
            for (let i = 1; i < 10; i++) {
                for (let j = 0; j < 20; j++) {
                    if (this.gameMatrixBuffer[j][i] != 0) {
                        this.gameMatrixBuffer[j][i - 1] = this.gameMatrixBuffer[j][i];
                        this.gameMatrixBuffer[j][i] = 0;
                    }
                }
            }
            this.findShadow();
        }

    }

    moveRight() {
        if (this.game_mode != GAME_MODE.PLAYING)
            return;
        let success = true;
        for (let i = 9; i > -1; i--) {
            for (let j = 0; j < 20; j++) {
                if (this.gameMatrixBuffer[j][i] != 0 && i == 9)
                    success = false;
                if (this.gameMatrixBuffer[j][i] != 0 && i != 9 && this.gameMatrix[j][i + 1] != 0)
                    success = false;
            }
        }
        if (success) {
            this.centX += 1;
            for (let i = 8; i > -1; i--) {
                for (let j = 0; j < 20; j++) {
                    if (this.gameMatrixBuffer[j][i] != 0) {
                        this.gameMatrixBuffer[j][i + 1] = this.gameMatrixBuffer[j][i];
                        this.gameMatrixBuffer[j][i] = 0;
                    }
                }
            }
            this.findShadow();
        }

    }

    drop() {
        let counter = 0; //failsafe
        while (this.toMakePiece == false) {
            counter++;
            if (counter > 100)
                return;

            if (this.game_mode == GAME_MODE.PLAYING)
                this.moveDown();

        }

    }

    //this method is slow so we try to only call it when needed
    findShadow() {

        //copy gameMatrixBuffer to shadowFinderMatrix
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 10; j++) {
                this.shadowFinderMatrix[i][j] = this.gameMatrixBuffer[i][j];
            }
        }

        let shadowFound = false;
        let preventInfiniteLoopCounter = 0;
        while (shadowFound == false) {
            preventInfiniteLoopCounter++;
            if (preventInfiniteLoopCounter > 20)
                break;

            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 20; j++) {
                    if (this.shadowFinderMatrix[j][i] != 0 && j == 19)
                        shadowFound = true;
                    if (this.shadowFinderMatrix[j][i] != 0 && j != 19 && this.gameMatrix[j + 1][i] != 0)
                        shadowFound = true;
                }
            }
            if (!shadowFound) {
                for (let i = 19; i > -1; i--) {
                    for (let j = 0; j < 10; j++) {
                        if (this.shadowFinderMatrix[i][j] != 0) {
                            this.shadowFinderMatrix[i + 1][j] = this.shadowFinderMatrix[i][j];
                            this.shadowFinderMatrix[i][j] = 0;
                        }
                    }
                }
            }
        }

    }

    moveDown() {
        let success = true;
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 20; j++) {
                if (this.gameMatrixBuffer[j][i] != 0 && j == 19)
                    success = false;
                if (this.gameMatrixBuffer[j][i] != 0 && j != 19 && this.gameMatrix[j + 1][i] != 0)
                    success = false;
            }
        }
        if (success) {
            this.centY += 1;
            for (let i = 19; i > -1; i--) {
                for (let j = 0; j < 10; j++) {
                    if (this.gameMatrixBuffer[i][j] != 0) {
                        this.gameMatrixBuffer[i + 1][j] = this.gameMatrixBuffer[i][j];
                        this.gameMatrixBuffer[i][j] = 0;
                    }
                }
            }
            this.timer = 0;
        }
        else {
            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 10; j++) {
                    if (this.gameMatrixBuffer[i][j] != 0) {
                        this.gameMatrix[i][j] = this.gameMatrixBuffer[i][j];
                        this.gameMatrixBuffer[i][j] = 0;
                    }
                }
            }
            this.toMakePiece = true;
            this.timer = -1;
        }
    }

    rotate() {
        if (this.game_mode != GAME_MODE.PLAYING)
            return;

        if (this.toClear)
            return;

        if (this.piece == 1) {
            if (this.state == 1) {
                if (this.centY != 19 && this.gameMatrix[this.centY + 1][this.centX] == 0) {
                    this.gameMatrixBuffer[this.centY + 1][this.centX] = this.piece;
                    this.gameMatrixBuffer[this.centY][this.centX - 1] = 0;
                    this.state = 2;
                    this.findShadow();
                    return;
                }
            }
            if (this.state == 2) {
                if (this.centX != 0 && this.gameMatrix[this.centY][this.centX - 1] == 0) {
                    this.gameMatrixBuffer[this.centY][this.centX - 1] = this.piece;
                    this.gameMatrixBuffer[this.centY - 1][this.centX] = 0;
                    this.state = 3;
                    this.findShadow();
                    return;
                }
            }
            if (this.state == 3) {
                if (this.gameMatrix[this.centY - 1][this.centX] == 0) {
                    this.gameMatrixBuffer[this.centY - 1][this.centX] = this.piece;
                    this.gameMatrixBuffer[this.centY][this.centX + 1] = 0;
                    this.state = 4;
                    this.findShadow();
                    return;
                }
            }
            if (this.state == 4) {
                if (this.centX != 9 && this.gameMatrix[this.centY][this.centX + 1] == 0) {
                    this.gameMatrixBuffer[this.centY][this.centX + 1] = this.piece;
                    this.gameMatrixBuffer[this.centY + 1][this.centX] = 0;
                    this.state = 1;
                    this.findShadow();
                    return;
                }
            }
        }//this.piece 1
        if (this.piece == 2) {
            if (this.state == 1) {
                if (this.centY != 19 && this.gameMatrix[this.centY + 1][this.centX] == 0 && this.gameMatrix[this.centY - 1][this.centX - 1] == 0) {
                    this.gameMatrixBuffer[this.centY + 1][this.centX] = this.piece;
                    this.gameMatrixBuffer[this.centY - 1][this.centX - 1] = this.piece;
                    this.gameMatrixBuffer[this.centY - 1][this.centX] = 0;
                    this.gameMatrixBuffer[this.centY - 1][this.centX + 1] = 0;
                    this.state = 2;
                    this.findShadow();
                    return;
                }
            }
            if (this.state == 2) {
                if (this.centX != 9 && this.gameMatrix[this.centY - 1][this.centX] == 0 && this.gameMatrix[this.centY - 1][this.centX + 1] == 0) {
                    this.gameMatrixBuffer[this.centY - 1][this.centX] = this.piece;
                    this.gameMatrixBuffer[this.centY - 1][this.centX + 1] = this.piece;
                    this.gameMatrixBuffer[this.centY + 1][this.centX] = 0;
                    this.gameMatrixBuffer[this.centY - 1][this.centX - 1] = 0;
                    this.state = 1;
                    this.findShadow();
                    return;
                }
            }
        }//this.piece 2
        if (this.piece == 3) {
            if (this.state == 1) {
                if (this.centY != 19 && this.gameMatrix[this.centY + 1][this.centX] == 0 && this.gameMatrix[this.centY - 1][this.centX + 1] == 0) {
                    this.gameMatrixBuffer[this.centY + 1][this.centX] = this.piece;
                    this.gameMatrixBuffer[this.centY - 1][this.centX + 1] = this.piece;
                    this.gameMatrixBuffer[this.centY - 1][this.centX] = 0;
                    this.gameMatrixBuffer[this.centY - 1][this.centX - 1] = 0;
                    this.state = 2;
                    this.findShadow();
                    return;
                }
            }
            if (this.state == 2) {
                if (this.centX != 0 && this.gameMatrix[this.centY - 1][this.centX] == 0 && this.gameMatrix[this.centY - 1][this.centX - 1] == 0) {
                    this.gameMatrixBuffer[this.centY - 1][this.centX] = this.piece;
                    this.gameMatrixBuffer[this.centY - 1][this.centX - 1] = this.piece;
                    this.gameMatrixBuffer[this.centY + 1][this.centX] = 0;
                    this.gameMatrixBuffer[this.centY - 1][this.centX + 1] = 0;
                    this.state = 1;
                    this.findShadow();
                    return;
                }
            }
        }//this.piece 3
        if (this.piece == 4) {
            if (this.state == 1) {
                if (this.centY != 19 && this.gameMatrix[this.centY - 1][this.centX] == 0 && this.gameMatrix[this.centY + 1][this.centX] == 0 && this.gameMatrix[this.centY + 1][this.centX + 1] == 0) {
                    this.gameMatrixBuffer[this.centY - 1][this.centX] = this.piece;
                    this.gameMatrixBuffer[this.centY + 1][this.centX] = this.piece;
                    this.gameMatrixBuffer[this.centY + 1][this.centX + 1] = this.piece;
                    this.gameMatrixBuffer[this.centY][this.centX - 1] = 0;
                    this.gameMatrixBuffer[this.centY][this.centX + 1] = 0;
                    this.gameMatrixBuffer[this.centY - 1][this.centX + 1] = 0;
                    this.state = 2;
                    this.findShadow();
                    return;
                }
            }
            if (this.state == 2) {
                if (this.centX != 0 && this.gameMatrix[this.centY][this.centX - 1] == 0 && this.gameMatrix[this.centY + 1][this.centX - 1] == 0 && this.gameMatrix[this.centY][this.centX + 1] == 0) {
                    this.gameMatrixBuffer[this.centY][this.centX - 1] = this.piece;
                    this.gameMatrixBuffer[this.centY + 1][this.centX - 1] = this.piece;
                    this.gameMatrixBuffer[this.centY][this.centX + 1] = this.piece;
                    this.gameMatrixBuffer[this.centY + 1][this.centX] = 0;
                    this.gameMatrixBuffer[this.centY + 1][this.centX + 1] = 0;
                    this.gameMatrixBuffer[this.centY - 1][this.centX] = 0;
                    this.state = 3;
                    this.findShadow();
                    return;
                }
            }
            if (this.state == 3) {
                if (this.gameMatrix[this.centY - 1][this.centX] == 0 && this.gameMatrix[this.centY - 1][this.centX - 1] == 0 && this.gameMatrix[this.centY + 1][this.centX] == 0) {
                    this.gameMatrixBuffer[this.centY - 1][this.centX] = this.piece;
                    this.gameMatrixBuffer[this.centY - 1][this.centX - 1] = this.piece;
                    this.gameMatrixBuffer[this.centY + 1][this.centX] = this.piece;
                    this.gameMatrixBuffer[this.centY][this.centX - 1] = 0;
                    this.gameMatrixBuffer[this.centY + 1][this.centX - 1] = 0;
                    this.gameMatrixBuffer[this.centY][this.centX + 1] = 0;
                    this.state = 4;
                    this.findShadow();
                    return;
                }
            }
            if (this.state == 4) {
                if (this.centX != 9 && this.gameMatrix[this.centY][this.centX - 1] == 0 && this.gameMatrix[this.centY][this.centX + 1] == 0 && this.gameMatrix[this.centY - 1][this.centX + 1] == 0) {
                    this.gameMatrixBuffer[this.centY][this.centX - 1] = this.piece;
                    this.gameMatrixBuffer[this.centY][this.centX + 1] = this.piece;
                    this.gameMatrixBuffer[this.centY - 1][this.centX + 1] = this.piece;
                    this.gameMatrixBuffer[this.centY - 1][this.centX] = 0;
                    this.gameMatrixBuffer[this.centY - 1][this.centX - 1] = 0;
                    this.gameMatrixBuffer[this.centY + 1][this.centX] = 0;
                    this.state = 1;
                    this.findShadow();
                    return;
                }
            }
        }//this.piece 4
        if (this.piece == 5) {
            if (this.state == 1) {
                if (this.centY != 19 && this.gameMatrix[this.centY - 1][this.centX] == 0 && this.gameMatrix[this.centY + 1][this.centX] == 0 && this.gameMatrix[this.centY - 1][this.centX + 1] == 0) {
                    this.gameMatrixBuffer[this.centY - 1][this.centX] = this.piece;
                    this.gameMatrixBuffer[this.centY + 1][this.centX] = this.piece;
                    this.gameMatrixBuffer[this.centY - 1][this.centX + 1] = this.piece;
                    this.gameMatrixBuffer[this.centY][this.centX - 1] = 0;
                    this.gameMatrixBuffer[this.centY][this.centX + 1] = 0;
                    this.gameMatrixBuffer[this.centY - 1][this.centX - 1] = 0;
                    this.state = 2;
                    this.findShadow();
                    return;
                }
            }
            if (this.state == 2) {
                if (this.centX != 0 && this.gameMatrix[this.centY][this.centX - 1] == 0 && this.gameMatrix[this.centY + 1][this.centX + 1] == 0 && this.gameMatrix[this.centY][this.centX + 1] == 0) {
                    this.gameMatrixBuffer[this.centY][this.centX - 1] = this.piece;
                    this.gameMatrixBuffer[this.centY + 1][this.centX + 1] = this.piece;
                    this.gameMatrixBuffer[this.centY][this.centX + 1] = this.piece;
                    this.gameMatrixBuffer[this.centY + 1][this.centX] = 0;
                    this.gameMatrixBuffer[this.centY - 1][this.centX + 1] = 0;
                    this.gameMatrixBuffer[this.centY - 1][this.centX] = 0;
                    this.state = 3;
                    this.findShadow();
                    return;
                }
            }
            if (this.state == 3) {
                if (this.gameMatrix[this.centY - 1][this.centX] == 0 && this.gameMatrix[this.centY + 1][this.centX - 1] == 0 && this.gameMatrix[this.centY + 1][this.centX] == 0) {
                    this.gameMatrixBuffer[this.centY - 1][this.centX] = this.piece;
                    this.gameMatrixBuffer[this.centY + 1][this.centX - 1] = this.piece;
                    this.gameMatrixBuffer[this.centY + 1][this.centX] = this.piece;
                    this.gameMatrixBuffer[this.centY][this.centX - 1] = 0;
                    this.gameMatrixBuffer[this.centY + 1][this.centX + 1] = 0;
                    this.gameMatrixBuffer[this.centY][this.centX + 1] = 0;
                    this.state = 4;
                    this.findShadow();
                    return;
                }
            }
            if (this.state == 4) {
                if (this.centX != 9 && this.gameMatrix[this.centY][this.centX - 1] == 0 && this.gameMatrix[this.centY][this.centX + 1] == 0 && this.gameMatrix[this.centY - 1][this.centX - 1] == 0) {
                    this.gameMatrixBuffer[this.centY][this.centX - 1] = this.piece;
                    this.gameMatrixBuffer[this.centY][this.centX + 1] = this.piece;
                    this.gameMatrixBuffer[this.centY - 1][this.centX - 1] = this.piece;
                    this.gameMatrixBuffer[this.centY - 1][this.centX] = 0;
                    this.gameMatrixBuffer[this.centY + 1][this.centX] = 0;
                    this.gameMatrixBuffer[this.centY + 1][this.centX - 1] = 0;
                    this.state = 1;
                    this.findShadow();
                    return;
                }
            }
        }//this.piece 5
        if (this.piece == 7) {
            if (this.state == 1) {
                if (this.centX != 0 && this.centX != 1 && this.centX != 9 && this.gameMatrix[this.centY][this.centX - 1] == 0 && this.gameMatrix[this.centY][this.centX - 2] == 0 && this.gameMatrix[this.centY][this.centX + 1] == 0) {
                    this.gameMatrixBuffer[this.centY][this.centX - 1] = this.piece;
                    this.gameMatrixBuffer[this.centY][this.centX - 2] = this.piece;
                    this.gameMatrixBuffer[this.centY][this.centX + 1] = this.piece;
                    this.gameMatrixBuffer[this.centY - 1][this.centX] = 0;
                    this.gameMatrixBuffer[this.centY + 1][this.centX] = 0;
                    this.gameMatrixBuffer[this.centY + 2][this.centX] = 0;
                    this.state = 2;
                    this.findShadow();
                    return;
                }
            }
            if (this.state == 2) {
                if (this.centY != 19 && this.centY != 18 && this.gameMatrix[this.centY - 1][this.centX] == 0 && this.gameMatrix[this.centY + 1][this.centX] == 0 && this.gameMatrix[this.centY + 2][this.centX] == 0) {
                    this.gameMatrixBuffer[this.centY + 2][this.centX] = this.piece;
                    this.gameMatrixBuffer[this.centY + 1][this.centX] = this.piece;
                    this.gameMatrixBuffer[this.centY - 1][this.centX] = this.piece;
                    this.gameMatrixBuffer[this.centY][this.centX - 1] = 0;
                    this.gameMatrixBuffer[this.centY][this.centX - 2] = 0;
                    this.gameMatrixBuffer[this.centY][this.centX + 1] = 0;
                    this.state = 1;
                    this.findShadow();
                    return;
                }
            }
        }//this.piece 7
    }

    checkMatrix() {
        for (let i = 0; i < 20; i++) {
            let temp = true;
            for (let j = 0; j < 10; j++) {
                if (this.gameMatrix[i][j] == 0)
                    temp = false;
            }
            if (temp) {
                for (let k = 0; k < 10; k++)
                    this.gameMatrix[i][k] = 8;
                this.toClear = true;
            }
        }
        if (this.toClear) { }
        //TODO blockclear.play();
        else {
            //TODO dropblock.play();
            this.score++;
        }
    }

    clearBlocks() {
        let tempLines = 0;
        for (let i = 0; i < 20; i++) {
            let temp = false;
            for (let j = 0; j < 10; j++) {
                if (this.gameMatrix[i][j] == 8) {
                    temp = true;
                    for (let k = i; k > 0; k--) {
                        this.gameMatrix[k][j] = this.gameMatrix[k - 1][j];
                    }
                    this.gameMatrix[0][j] = 0;
                }
            }
            if (temp)
                tempLines++;

        }
        if (tempLines == 1)
            this.score += 50;
        if (tempLines == 2)
            this.score += 100;
        if (tempLines == 3)
            this.score += 300;
        if (tempLines == 4)
            this.score += 1000;
        this.lines += tempLines;

        info.setScore(this.lines);
        
        this.nextLevel += tempLines;
        if (this.nextLevel >= 10) {
            //TODO newlevel.play();
            this.nextLevel -= 10;
            this.level++;
            if (this.level == 2) tiles.setTilemap(tilemap`level2`);
            if (this.level == 3) tiles.setTilemap(tilemap`level3`);
            if (this.level == 4) tiles.setTilemap(tilemap`level4`);
            if (this.level == 5) tiles.setTilemap(tilemap`level5`);
            if (this.level == 6) tiles.setTilemap(tilemap`level6`);
            if (this.level == 7) tiles.setTilemap(tilemap`level7`);
            if (this.level == 8) tiles.setTilemap(tilemap`level8`);
            if (this.level == 9) tiles.setTilemap(tilemap`level9`);
            if (this.level == 10) tiles.setTilemap(tilemap`level10`);
        }
        else
            ;//TODO blockcleared.play();
    }



    requestNextFrame() {

        //this takes about half my cpu budget (goes from 40fps to 25fps)
        this.gameLoop();
        this.newPaint();
    }

    getMessage(): string {
        return 'New Game';
    }

    // getRandomColor(): string {
    //     var letters = '0123456789ABCDEF';
    //     var color = '#';
    //     for (var i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }

    newPaint() {
        
        /* COLORS
        0: transparent
        1: white
        2: red
        3: pink
        4: orange
        5: yellow
        6: teal
        7: green
        8: blue
        9: light blue
        10: purple
        11: light purple
        12: dark purple
        13: tan
        14: brown
        15: black
        */

        if (this.game_mode == GAME_MODE.PLAYING)
        {

            //since we are doing getPixel below we can't set
            //the random color to red or white or grey
            let randomColor = Math.randomRange(3, 12);

            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 10; j++) {

                    let x = j;
                    let y = i;

                    let boardX = x * 6;
                    let boardY = y * 6;

                    if (this.gameMatrixBuffer[y][x] == 8 || this.gameMatrix[y][x] == 8) {
                        //flashing colors animation
                        boardSprite.image.fillRect(boardX, boardY, 6, 6, randomColor);
                    }
                    else if (this.gameMatrixBuffer[y][x] > 0 || this.gameMatrix[y][x] > 0) {
                        let red = 2;

                        //only draw it one for performance
                        if (boardSprite.image.getPixel(boardX + 2, boardY + 2) != red) {
                            boardSprite.image.fillRect(boardX, boardY, 6, 6, red);
                            boardSprite.image.drawRect(boardX, boardY, 6, 6, 15);
                        }
                    }
                    else if (this.shadowFinderMatrix[y][x] > 0) {
                        let grey = 13;

                        //only draw it one for performance
                        if (boardSprite.image.getPixel(boardX + 2, boardY + 2) != grey) {
                            boardSprite.image.fillRect(boardX, boardY, 6, 6, grey);
                        }
                    }
                    else {
                        let white = 1;

                        //only draw it one for performance
                        if (boardSprite.image.getPixel(boardX + 2, boardY + 2) != white) {
                            boardSprite.image.fillRect(boardX, boardY, 6, 6, white);
                        }
                    }
                }
            }

            //draw next piece
            if (this.drawNextPiece) {
                this.drawNextPiece = false;
                for (let i = 0; i < 4; i++) {
                    for (let j = 0; j < 5; j++) {
                        let x = j;
                        let y = i;

                        let boardX = x * 6;
                        let boardY = y * 6;

                        if (this.nextPieceMatrix[y][x] > 0) {
                            let red = 2;
                            if (nextPieceSprite.image.getPixel(boardX + 2, boardY + 2) != red) {
                                nextPieceSprite.image.fillRect(boardX, boardY, 6, 6, red);
                                nextPieceSprite.image.drawRect(boardX, boardY, 6, 6, 15);
                            }
                        }
                        else {
                            let white = 1;
                            if (nextPieceSprite.image.getPixel(boardX + 2, boardY + 2) != white) {
                                nextPieceSprite.image.fillRect(boardX, boardY, 6, 6, white);
                            }
                        }
                    }
                }
            }
        }

        if (this.game_mode == GAME_MODE.TITLE) {
            let orange = 4;

            //only draw it once for performance
            if (boardSprite.image.getPixel(3,33) != orange)
            {
                boardSprite.image.fill(1);
                boardSprite.image.fillRect(0, 30, 60, 50, orange);
                boardSprite.image.drawRect(0, 30, 60, 50, 15);
                boardSprite.image.printCenter("Game Over", 35, 15, image.font8)
                boardSprite.image.printCenter("Press A", 45, 15, image.font8)
                boardSprite.image.printCenter("for", 55, 15, image.font8)
                boardSprite.image.printCenter("new game", 65, 15, image.font8)
                boardSprite.x = 80;
                boardSprite.y = 60;
                boardSprite.z = 100;
            }
        }
    }

    btnClick() {
        this.reset();
    }

    btnPause() {
        if (this.game_mode == GAME_MODE.TITLE)
            return;

        if (this.game_mode == GAME_MODE.PAUSED)
            this.game_mode = GAME_MODE.PLAYING;
        else
            this.game_mode = GAME_MODE.PAUSED;
    }

    getPauseButtonText(): string {
        if (this.game_mode == GAME_MODE.PAUSED)
            return "Resume";
        else
            return "Pause";
    }


}

let myApp = new MyApp();

//never use forever() loops instead use onUpdate
//otherwise it will just crash on the Retro Arcade handheld
game.onUpdate(() =>{
    myApp.countFPS();
    debugSprite.sayText("FPS: " + myApp.currentfps)
    myApp.requestNextFrame();

    //USE THIS IF YOU WANT INFO TEXT
    //HOWEVER I JUST FOUND IT DISTRACTING
    //updateTextSprite();
})

// function updateTextSprite(){
//     let font: image.Font = image.font8
//     infoSprite.image.fill(7);
//     infoSprite.image.printCenter("Lines: " + myApp.lines, 10, 15, font)
//     infoSprite.image.printCenter("Level: " + myApp.level, 20, 15, font)
//     infoSprite.image.printCenter("Score: " + myApp.score, 30, 15, font)
//     infoSprite.x = 25;
//     infoSprite.y = 50;
//     infoSprite.setFlag(SpriteFlag.Invisible, false);
// }


// PRESSED
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!myApp.dropKey) {
        myApp.drop();
        myApp.dropKey = true;
    }
});

controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    myApp.downKey = true;
});

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    myApp.leftKey = true;
});

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    myApp.rightKey = true;
});

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!myApp.upKey) {
        myApp.rotate();
        myApp.upKey = true;
    }
});

// RELEASED
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    myApp.dropKey = false;
});

controller.down.onEvent(ControllerButtonEvent.Released, function () {
    myApp.waitForDownKeyRelease = false;
    myApp.downKey = false;
});

controller.left.onEvent(ControllerButtonEvent.Released, function () {
    myApp.leftKey = false;
});

controller.right.onEvent(ControllerButtonEvent.Released, function () {
    myApp.rightKey = false;
});

controller.A.onEvent(ControllerButtonEvent.Released, function () {
    myApp.upKey = false;

    if (myApp.game_mode == GAME_MODE.TITLE)
    {
        myApp.newGame_Click();
    }
});
