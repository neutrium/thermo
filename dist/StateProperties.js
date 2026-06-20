"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateProperties = void 0;
class StateProperties {
    constructor() {
        this.p = null; // Pressure (Pa)
        this.t = null; // Temperature (K)
        this.rho = null; // Density (kg/m^3)
        this.v = null; // Specific Volume (m^3/kg)
        this.u = null; // Internal Energy (kJ/kg)
        this.s = null; // Entropy (kJ/kg)
        this.h = null; // Enthalpy (kJ/kg)
        this.cp = null; // Isobaric Heat Capacity (kJ/kg.K)
        this.cv = null; // Isochoric Heat Capacity (kJ/kg.K)
        this.w = null; // Speed of sound (m/s)
        this.mu = null; // Viscosity (cP)
        this.k = null; // Thermal conductivity (W/m.K)
        this.sigma = null; // Surface tension (mN/m)
        this.epsilon = null; // Dielectric Constant
        this.ic = null; // Ionisation constant
        this.n = null; // Number of moles
        this.γ = null; // Adiabatic index
    }
}
exports.StateProperties = StateProperties;
//# sourceMappingURL=StateProperties.js.map