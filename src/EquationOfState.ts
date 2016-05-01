import {State} from "./State";

export abstract class EquationOfState
{
    protected modes: string[][];
    public name: string;

    public constructor() {}

    public abstract solve(inputs : any, fluid ?: any) : State;

    /*
    *   Determines the calculation mode given the provided property inputs
    *
    *   @param {array} inputs An array of the input properties e.g ['p', 't'].
    *   @param {array} modes An array of the supported modes e.g. [['p','t'], ['p','rho']].
    *   @return {integer} The index of the mode matched from modes or -1
    */
    protected findModeIndex(inputs: any): number
    {
        let inputList = Object.keys(inputs),
            noInputs = inputList.length,
            noModes = this.modes.length;

        for (let i = 0; i < noModes; i++)
        {
            let mode = this.modes[i],
                matched = true;

            for (let j = 0, len = mode.length; j < len; j++)
            {
                if (inputList.indexOf(mode[j]) === -1)
                {
                    // An property of this mode is not matched in inputs
                    matched = false;
                    break;
                }
            }

            if (matched)
            {
                return i;
            }
            else
            {
                return -1;
            }
        }
    }
}