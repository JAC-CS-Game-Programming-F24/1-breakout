import {
	CANVAS_HEIGHT,
	CANVAS_WIDTH,
	context,
	images,
	keys,
	stateMachine
} from "../globals.js";
import State from "./State.js";

/**
 * The state in which we've lost all of our health and get our score displayed to us.
 * Should transition to the EnterHighScore state if we exceeded one of our stored high
 * scores, else back to the StartState.
 */
export default class GameOverState extends State {
	constructor() {
		super();
	}

	enter(parameters) {
		this.score = parameters.score;
	}

	update(dt) {
		if (keys.Enter) {
			keys.Enter = false;
			stateMachine.change('title-screen');
		}
	}

	render() {
		images.background.render(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		context.save();
		context.font = "40px Joystix";
		context.fillStyle = "white";
		context.textBaseline = 'middle';
		context.textAlign = 'center';
		context.fillText(`GAME OVER`, CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.5);
		context.font = "20px Joystix";
		context.fillText(`Final Score: ${this.score}`, CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.8);
		context.fillText(`Press Enter to continue...`, CANVAS_WIDTH * 0.5, CANVAS_HEIGHT * 0.9);
		context.restore();
	}
}
