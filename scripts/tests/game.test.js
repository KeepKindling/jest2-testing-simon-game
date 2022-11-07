/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore } = require("../game")

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game objects contains correct keys", () => {
    test("score key exits", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exits", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exits", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exits", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contains correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.currentGame = ["button1", "button2"];
        game.playerMoves = ["button1", "button2"];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set game score to 0", () => {
        expect(game.score).toEqual(0);
    });
    test("should clear the computer sequence array", () => {
        expect(game.currentGame.length).toBe(0);
    });
    test("should clear the playerMoves array", () => {
        expect(game.playerMoves.length).toBe(0)
    });
    test("should display 0 for the element with the id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});