"use strict";
var EquationOfState = (function () {
    function EquationOfState() {
    }
    /*
    *   Determines the calculation mode given the provided property inputs
    *
    *   @param {array} inputs An array of the input properties e.g ['p', 't'].
    *   @param {array} modes An array of the supported modes e.g. [['p','t'], ['p','rho']].
    *   @return {integer} The index of the mode matched from modes or -1
    */
    EquationOfState.prototype.findModeIndex = function (inputs) {
        var inputList = Object.keys(inputs), noInputs = inputList.length, noModes = this.modes.length;
        var modeNum = -1;
        for (var i = 0; i < noModes; i++) {
            var mode = this.modes[i], matched = true;
            for (var j = 0, len = mode.length; j < len; j++) {
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
    };
    return EquationOfState;
}());
exports.EquationOfState = EquationOfState;
