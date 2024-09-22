const NEXT_SECTION_KEY = "__child_node";
namespace SpriteKind {
    export const Tail = SpriteKind.create();
}

enum Direction {
    Up,
    Down,
    Left,
    Right
}

const size = 8;

const caterpillarHead = sprites.create(img`
    . . 3 3 3 3 . .
    . 3 2 2 2 2 3 .
    3 2 f 2 2 f 2 3
    3 2 f 2 2 f 2 3
    3 2 2 2 2 2 2 3
    3 2 2 2 2 2 2 3
    . 3 2 2 2 2 3 .
    . . 3 3 3 3 . .
`, SpriteKind.Player);
caterpillarHead.left = 4 * size;
caterpillarHead.top = 12 * size;
caterpillarHead.data = {};
let currentLeaf: Sprite;

tiles.setTilemap(tilemap`level`);

const leafImage = img`
    . . . . . f f 7
    . . . f f f 6 f
    . . f 6 7 f f f
    . f 6 7 f 7 7 f
    f f 7 f 7 7 7 f
    f 6 f 7 7 7 f .
    f 6 7 7 f f . .
    f f f f f . . .
`;

const shinyLeafImage = img`
    . . 1 . . f f 7
    . 1 . f f f 6 f
    1 . f 6 7 f f f
    . f 6 7 f 7 7 f
    f f 7 f 7 7 7 f
    f 6 f 7 7 7 f .
    f 6 7 7 f f . 1
    f f f f f . 1 .
`;
info.setScore(0);

class MyClass
{
    lastCalledTime: number;
    fpscounter: number;
    currentfps: number;
    constructor(){
        this.lastCalledTime = game.runtime();
        this.fpscounter = 0;
        this.currentfps = 0;
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
}

let myClass = new MyClass();
let debugSprite = sprites.create(img`
    .
`);


let allSprites:Sprite[] = [];
for(let i = 0; i < 220; i++)
{
    let blockSprite = sprites.create(img`
    f f f f f f
    f 6 6 6 6 f
    f 6 6 6 6 f
    f 6 6 6 6 f
    f 6 6 6 6 f
    f f f f f f
`);

blockSprite.x = -50;
blockSprite.y = -50;
    allSprites.push(blockSprite);
}

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
    // keytimer = 0;
    downkeytimer = 0;
    leftkeytimer = 0;
    rightkeytimer = 0;
    game_mode = GAME_MODE.TITLE;
    waitForDownKeyRelease = false;


    constructor() {
        this.initGame();
        this.reset();

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

    }


    reset() {


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

        this.findShadow();


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

    shadowFinderMatrix: number[][];

    findShadow() {
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
                    return;
                }
            }
            if (this.state == 2) {
                if (this.centX != 0 && this.gameMatrix[this.centY][this.centX - 1] == 0) {
                    this.gameMatrixBuffer[this.centY][this.centX - 1] = this.piece;
                    this.gameMatrixBuffer[this.centY - 1][this.centX] = 0;
                    this.state = 3;
                    return;
                }
            }
            if (this.state == 3) {
                if (this.gameMatrix[this.centY - 1][this.centX] == 0) {
                    this.gameMatrixBuffer[this.centY - 1][this.centX] = this.piece;
                    this.gameMatrixBuffer[this.centY][this.centX + 1] = 0;
                    this.state = 4;
                    return;
                }
            }
            if (this.state == 4) {
                if (this.centX != 9 && this.gameMatrix[this.centY][this.centX + 1] == 0) {
                    this.gameMatrixBuffer[this.centY][this.centX + 1] = this.piece;
                    this.gameMatrixBuffer[this.centY + 1][this.centX] = 0;
                    this.state = 1;
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
        }
        else
            ;//TODO blockcleared.play();
    }



    requestNextFrame() {
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
        

        let randomColor = Math.randomRange(0, 15);;

        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 10; j++) {
                // this.gameMatrixBuffer[i][j] = 0;

                let x = j;
                let y = i;

                let currentSprite = allSprites[(10 * y) + x];

                currentSprite.x = 50 + (6*x);
                currentSprite.y = (6 * y)+3;

                if (this.gameMatrixBuffer[y][x] == 8 || this.gameMatrix[y][x] == 8) {
                    // element.style["background-image"] = 'linear-gradient(-45deg,' + randomColor + ', lightblue)';
                    // element.style["background-color"] = randomColor;
                    currentSprite.image.fillRect(0, 0, 6, 6, randomColor)
                    currentSprite.image.drawRect(0, 0, 6, 6, 15)

                }
                else if (this.gameMatrixBuffer[y][x] > 0 || this.gameMatrix[y][x] > 0) {
                    let blue = 9;
                    // if (this.gameMatrixBuffer[y][x] == 1 || this.gameMatrix[y][x] == 1) color = 'darkblue';
                    // if (this.gameMatrixBuffer[y][x] == 2 || this.gameMatrix[y][x] == 2) color = 'darkorange';
                    // if (this.gameMatrixBuffer[y][x] == 3 || this.gameMatrix[y][x] == 3) color = 'rgb(90, 34, 107)';
                    // if (this.gameMatrixBuffer[y][x] == 4 || this.gameMatrix[y][x] == 4) color = 'darkred';
                    // if (this.gameMatrixBuffer[y][x] == 5 || this.gameMatrix[y][x] == 5) color = 'darkcyan';
                    // if (this.gameMatrixBuffer[y][x] == 6 || this.gameMatrix[y][x] == 6) color = 'darkgreen';
                    // if (this.gameMatrixBuffer[y][x] == 7 || this.gameMatrix[y][x] == 7) color = 'rgb(209, 209, 0)';
                    // element.style["background-image"] = 'linear-gradient(-45deg,blue, lightblue)';
                    currentSprite.image.fillRect(0, 0, 6, 6, blue)
                    currentSprite.image.drawRect(0, 0, 6, 6, 15)

                }
                else if (this.shadowFinderMatrix && this.shadowFinderMatrix[y][x] > 0) {
                    // element.style["background-image"] = 'linear-gradient(grey, grey)';
                    let grey = 13;
                    currentSprite.image.fillRect(0, 0, 6, 6, grey)
                    // currentSprite.image.drawRect(0, 0, 6, 6, 15)

                }
                else {
                    // element.style["background-image"] = 'linear-gradient(white, white)';
                    let white = 1;
                    currentSprite.image.fillRect(0, 0, 6, 6, white)
                }


            }
        }

        //draw next piece
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 5; j++)
            {
                let x = j;
                let y = i;

                let currentSprite = allSprites[200 + (5 * y) + x];

                currentSprite.x = 123 + (6 * x);
                currentSprite.y = 25 + (6 * y) + 3;

                if (this.nextPieceMatrix[y][x] > 0)
                {
                    let blue = 9;
                    currentSprite.image.fillRect(0, 0, 6, 6, blue)
                    currentSprite.image.drawRect(0, 0, 6, 6, 15)
                }
                else
                {
                    let white = 1;
                    currentSprite.image.fillRect(0, 0, 6, 6, white)
                }

                
            }
        }
        // $("[nextpiece-block]").toArray().forEach(element => {

        //     let x = parseInt(element.attributes["x"].value);
        //     let y = parseInt(element.attributes["y"].value);

        //     if (this.nextPieceMatrix[y][x] > 0)
        //         element.style["background-color"] = 'blue';
        //     else
        //         element.style["background-color"] = 'white';

        // });

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


let direction = Direction.Up;
let addSection = true;
let enqueued = false;
let lastIteration = 0;
let timeout = 500;


forever(function () {
    myClass.countFPS();
    debugSprite.sayText("FPS: " + myClass.currentfps)

    myApp.requestNextFrame();

    /*
    if (caterpillarHead.left < 0 || caterpillarHead.right > screen.width
        || caterpillarHead.top < 0 || caterpillarHead.bottom > screen.height) {
        game.over(false);
    }

    if (!enqueued && game.runtime() - lastIteration < timeout) {
        return;
    }

    if (addSection) {
        addToBody();
    } else {
        move(caterpillarHead);
    }

    switch (direction) {
        case Direction.Up:
            caterpillarHead.y -= size;
            break;
        case Direction.Down:
            caterpillarHead.y += size;
            break;
        case Direction.Left:
            caterpillarHead.x -= size;
            break;
        case Direction.Right:
            caterpillarHead.x += size;
            break;
    }

    enqueued = false;
    lastIteration = game.runtime();

    function addToBody() {
        const newSection = sprites.create(img`
            . . f f f f . .
            . f 1 1 1 1 f .
            f 1 1 1 1 1 1 f
            f 1 1 1 1 1 1 f
            f 1 1 1 1 1 1 f
            f 1 1 1 1 1 1 f
            . f 1 1 1 1 f .
            . . f f f f . .
        `, SpriteKind.Tail);
        newSection.data = {};

        let newColor: number;

        do {
            newColor = randint(0x1, 0xE);
        } while (newColor === 0x6);
        newSection.image.replace(0x1, newColor);

        do {
            newColor = randint(0x1, 0xE);
        } while (newColor === 0x6);
        newSection.image.replace(0xF, newColor);

        newSection.x = caterpillarHead.x;
        newSection.y = caterpillarHead.y;

        newSection.data[NEXT_SECTION_KEY] = caterpillarHead.data[NEXT_SECTION_KEY];
        caterpillarHead.data[NEXT_SECTION_KEY] = newSection;
        addSection = false;
    }

    function move(piece: Sprite) {
        const next = piece.data[NEXT_SECTION_KEY];
        if (next) {
            move(next);
            next.x = piece.x;
            next.y = piece.y;
        }
    }
    */
});

// sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite: Sprite, otherSprite: Sprite) {
//     info.changeScoreBy(1);
//     otherSprite.destroy(effects.disintegrate);
//     music.baDing.play();
//     timeout = Math.max(150, timeout - 50);
//     addSection = true;
//     placeFruit();
// });

// sprites.onOverlap(SpriteKind.Player, SpriteKind.Tail, function (sprite: Sprite, otherSprite: Sprite) {
//     game.over(false);
// });

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

        /*
            keyDown(event: KeyboardEvent) {
        
                let app = window.myApp as MyApp;
        
                if (event.key == 'ArrowDown' || event.key == 'Down')
                    app.downKey = true;
        
                if (event.key == 'ArrowLeft' || event.key == 'Left') {
                    app.leftKey = true;
                }
                if (event.key == 'ArrowRight' || event.key == 'Right') {
                    app.rightKey = true;
                }
                if (event.key == 'a' && !app.dropKey) {
                    app.drop();
                    app.dropKey = true;
                }
                if ((event.key == 'ArrowUp' || event.key == 'Up') && !app.upKey) {
                    app.rotate();
                    app.upKey = true;
                }
        
                if (event.key == 'p') {
                    app.btnPause();
                }
                if (event.key == 'n') {
                    app.newGame_Click();
                }
        
        
            }



        
            keyUp(event: KeyboardEvent) {
                let app = window.myApp as MyApp;
                // console.log(event);
        
                if (event.key == 'a') {
                    app.dropKey = false;
                }
                if ((event.key == 'ArrowUp' || event.key == 'Up')) {
                    app.upKey = false;
                }
        
        
                if (event.key == 'ArrowDown' || event.key == 'Down') {
                    app.waitForDownKeyRelease = false;
                    app.downKey = false;
                }
        
        
                if (event.key == 'ArrowLeft' || event.key == 'Left') {
                    app.leftKey = false;
                }
                if (event.key == 'ArrowRight' || event.key == 'Right') {
                    app.rightKey = false;
                }
            }
            */

// function setDirection(targetDir: Direction, oppositeDir: Direction, im: Image) {
//     if (!enqueued && direction !== targetDir && direction !== oppositeDir) {
//         caterpillarHead.setImage(im);
//         direction = targetDir;
//         enqueued = true;
//     }
// }

// function placeFruit() {
//     currentLeaf = sprites.create(leafImage, SpriteKind.Food);
//     do {
//         currentLeaf.left = randint(0, 19) * size;
//         currentLeaf.top = randint(0, 14) * size;
//     } while (
//         (currentLeaf.top === 0 && currentLeaf.right === screen.width)
//         || sprites
//             .allOfKind(SpriteKind.Tail)
//             .some(s => s.overlapsWith(currentLeaf))
//     );
// }

// game.onUpdateInterval(500, function () {
//     if (currentLeaf.image === leafImage) {
//         currentLeaf.setImage(shinyLeafImage);
//     } else {
//         currentLeaf.setImage(leafImage);
//     }
// });

