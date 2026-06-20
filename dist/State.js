"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
/*
*   The object representing the thermodynamic state of the fluid
*
*   @param {object} initValue An object containing a subset properties in the specified default units
*/
const quantity_1 = require("@neutrium/quantity");
const StateProperties_1 = require("./StateProperties");
const DEFAULT_STATE_PROPERTIES_1 = require("./DEFAULT_STATE_PROPERTIES");
class State extends StateProperties_1.StateProperties {
    constructor(initValue) {
        super();
        Object.keys(initValue)
            .forEach((key) => {
            if (State.properties.hasOwnProperty(key)) {
                const value = initValue[key];
                if (value !== undefined) {
                    this[key] = value;
                }
            }
        });
    }
    asQty() {
        Object.keys(this)
            .forEach((key) => {
            if (State.properties.hasOwnProperty(key)) {
                this[key] = new quantity_1.Quantity(this[key] + State.properties[key].default_units);
            }
        });
        return this;
    }
}
exports.State = State;
// All the properties and the default units the neutrium equations of state use
State.properties = DEFAULT_STATE_PROPERTIES_1.DEFAULT_STATE_PROPERTIES;
//# sourceMappingURL=State.js.map