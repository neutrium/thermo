"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquationOfState = void 0;
class EquationOfState {
    constructor() {
        this.modes = [];
    }
    /*
    *   Determines the calculation mode given the provided property inputs
    *
    *   @param {array} inputs An array of the input properties e.g ['p', 't'].
    *   @param {array} modes An array of the supported modes e.g. [['p','t'], ['p','rho']].
    *   @return {integer} The index of the mode matched from modes or -1
    */
    findModeIndex(inputs) {
        let inputList = Object.keys(inputs), noInputs = inputList.length, noModes = this.modes.length;
        let modeNum = -1;
        for (let i = 0; i < noModes; i++) {
            let mode = this.modes[i], matched = true;
            for (let j = 0, len = mode.length; j < len; j++) {
                if (inputList.indexOf(mode[j]) === -1) {
                    // An property of this mode is not matched in inputs
                    matched = false;
                }
            }
            if (matched) {
                modeNum = i;
                break;
            }
            else {
                modeNum = -1;
            }
        }
        return modeNum;
    }
}
exports.EquationOfState = EquationOfState;
//# sourceMappingURL=EquationOfState.js.map