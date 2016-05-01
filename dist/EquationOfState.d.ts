import { State } from "./State";
export declare abstract class EquationOfState {
    protected modes: string[][];
    name: string;
    constructor();
    abstract solve(inputs: any, fluid?: any): State;
    protected findModeIndex(inputs: any): number;
}
