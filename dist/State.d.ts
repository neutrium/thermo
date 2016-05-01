import { Quantity } from "@neutrium/quantity";
export declare class State {
    p: number | Quantity;
    t: number | Quantity;
    rho: number | Quantity;
    v: number | Quantity;
    u: number | Quantity;
    s: number | Quantity;
    h: number | Quantity;
    cp: number | Quantity;
    cv: number | Quantity;
    w: number | Quantity;
    mu: number | Quantity;
    k: number | Quantity;
    sigma: number | Quantity;
    epsilon: number | Quantity;
    ic: number | Quantity;
    n: number | Quantity;
    static properties: {
        "p": {
            "name": string;
            "key": string;
            "category": string;
            "default_units": string;
        };
        "t": {
            "name": string;
            "key": string;
            "category": string;
            "default_units": string;
        };
        "n": {
            "name": string;
            "key": string;
            "category": string;
            "default_units": string;
        };
        "v": {
            "name": string;
            "key": string;
            "category": string;
            "default_units": string;
        };
        "rho": {
            "name": string;
            "key": string;
            "category": string;
            "default_units": string;
        };
        "u": {
            "name": string;
            "key": string;
            "category": string;
            "default_units": string;
        };
        "s": {
            "name": string;
            "key": string;
            "category": string;
            "default_units": string;
        };
        "h": {
            "name": string;
            "key": string;
            "category": string;
            "default_units": string;
        };
        "cp": {
            "name": string;
            "key": string;
            "category": string;
            "default_units": string;
        };
        "cv": {
            "name": string;
            "key": string;
            "category": string;
            "default_units": string;
        };
        "w": {
            "name": string;
            "key": string;
            "category": string;
            "default_units": string;
        };
        "mu": {
            "name": string;
            "key": string;
            "category": string;
            "default_units": string;
        };
        "k": {
            "name": string;
            "key": string;
            "category": string;
            "default_units": string;
        };
        "sigma": {
            "name": string;
            "key": string;
            "category": string;
            "default_units": string;
        };
        "epsilon": {
            "name": string;
            "key": string;
            "category": string;
            "default_units": string;
        };
        "ic": {
            "name": string;
            "key": string;
            "category": string;
            "default_units": string;
        };
        "γ": {
            "name": string;
            "key": string;
            "category": string;
            "default_units": string;
        };
    };
    constructor(initValue: any);
    asQty(): this;
}
