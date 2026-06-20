import { State } from "./State";
export declare abstract class EquationOfState<T = number> {
    protected modes: string[][];
    abstract name: string;
    constructor();
    abstract solve(inputs: any, fluid?: any): State<T>;
    protected findModeIndex(inputs: any): number;
}
