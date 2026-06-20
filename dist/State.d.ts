import { Quantity } from "@neutrium/quantity";
import { StateProperties } from "./StateProperties";
export declare class State<T = number> extends StateProperties<T> {
    static properties: {
        p: {
            name: string;
            key: string;
            category: string;
            default_units: string;
        };
        t: {
            name: string;
            key: string;
            category: string;
            default_units: string;
        };
        n: {
            name: string;
            key: string;
            category: string;
            default_units: string;
        };
        v: {
            name: string;
            key: string;
            category: string;
            default_units: string;
        };
        rho: {
            name: string;
            key: string;
            category: string;
            default_units: string;
        };
        u: {
            name: string;
            key: string;
            category: string;
            default_units: string;
        };
        s: {
            name: string;
            key: string;
            category: string;
            default_units: string;
        };
        h: {
            name: string;
            key: string;
            category: string;
            default_units: string;
        };
        cp: {
            name: string;
            key: string;
            category: string;
            default_units: string;
        };
        cv: {
            name: string;
            key: string;
            category: string;
            default_units: string;
        };
        w: {
            name: string;
            key: string;
            category: string;
            default_units: string;
        };
        mu: {
            name: string;
            key: string;
            category: string;
            default_units: string;
        };
        k: {
            name: string;
            key: string;
            category: string;
            default_units: string;
        };
        sigma: {
            name: string;
            key: string;
            category: string;
            default_units: string;
        };
        epsilon: {
            name: string;
            key: string;
            category: string;
            default_units: string;
        };
        ic: {
            name: string;
            key: string;
            category: string;
            default_units: string;
        };
        γ: {
            name: string;
            key: string;
            category: string;
            default_units: string;
        };
    };
    constructor(initValue: Partial<StateProperties<T>>);
    asQty(): State<Quantity>;
}
