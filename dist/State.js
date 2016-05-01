"use strict";
/*
*   The object representing the thermodynamic state of the fluid
*
*   @param {object} initValue An object containting a subset properties in the specified default units
*/
var quantity_1 = require("@neutrium/quantity");
var State = (function () {
    function State(initValue) {
        var _this = this;
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
        Object.keys(initValue).forEach(function (key) {
            var value = initValue[key];
            if (State.properties.hasOwnProperty(key) && value) {
                _this[key] = value;
            }
        });
    }
    State.prototype.asQty = function () {
        var _this = this;
        Object.keys(self).forEach(function (key) {
            if (State.properties.hasOwnProperty(key)) {
                _this[key] = new quantity_1.Quantity(_this[key] + State.properties[key].default_units);
            }
        });
        return this;
    };
    // All the properties and the default units the neutriumjs equations of state use
    State.properties = {
        "p": {
            "name": "Pressure",
            "key": "p",
            "category": "pressure",
            "default_units": "Pa"
        },
        "t": {
            "name": "Temperature",
            "key": "t",
            "category": "temperature",
            "default_units": "tempK"
        },
        "n": {
            "name": "Number of moles",
            "key": "n",
            "category": "substance",
            "default_units": "mole"
        },
        "v": {
            "name": "Specific Volume",
            "key": "v",
            "category": "specific_volume",
            "default_units": "m^3/kg"
        },
        "rho": {
            "name": "Density",
            "key": "rho",
            "category": "density",
            "default_units": "kg/m^3"
        },
        "u": {
            "name": "Internal Energy",
            "key": "u",
            "category": "specific_energy",
            "default_units": "kJ/kg"
        },
        "s": {
            "name": "Entropy",
            "key": "s",
            "category": "specific_energy",
            "default_units": "kJ/kg"
        },
        "h": {
            "name": "Enthalpy",
            "key": "h",
            "category": "heat_capacity",
            "default_units": "kJ/kg.K"
        },
        "cp": {
            "name": "Isobaric Heat Capacity (Cp)",
            "key": "cp",
            "category": "heat_capacity",
            "default_units": "kJ/kg.K"
        },
        "cv": {
            "name": "Isochoric Heat Capacity (Cv)",
            "key": "cv",
            "category": "heat_capacity",
            "default_units": "kJ/kg.K"
        },
        "w": {
            "name": "Velocity",
            "key": "w",
            "category": "velocity",
            "default_units": "m/s"
        },
        "mu": {
            "name": "Viscosity",
            "key": "mu",
            "category": "viscosity",
            "default_units": "cP"
        },
        "k": {
            "name": "Thermal Conductivity",
            "key": "k",
            "category": "thermal_conductivity",
            "default_units": "W/m.K"
        },
        "sigma": {
            "name": "Surface Tension",
            "key": "sigma",
            "category": "surface_tension",
            "default_units": "mN/m"
        },
        "epsilon": {
            "name": "Dielectric Constant",
            "key": "epsilon",
            "category": "dielectric_constant",
            "default_units": ""
        },
        "ic": {
            "name": "Ionisation constant",
            "key": "ic",
            "category": "ionisation_constant",
            "default_units": ""
        },
        "γ": {
            "name": "Adibatic index",
            "key": "γ",
            "category": "dimensionless",
            "default_units": ""
        }
    };
    return State;
}());
exports.State = State;
