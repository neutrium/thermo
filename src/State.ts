/*
*   The object representing the thermodynamic state of the fluid
*
*   @param {object} initValue An object containting a subset properties in the specified default units
*/
import {Quantity} from "@neutrium/quantity";

export class State
{
    p   : number | Quantity = null;          // Pressure (Pa)
    t   : number | Quantity  = null;          // Temperature (K)
    rho : number | Quantity  = null;          // Density (kg/m^3)
    v   : number | Quantity  = null;          // Specific Volume (m^3/kg)
    u   : number | Quantity  = null;          // Internal Energy (kJ/kg)
    s   : number | Quantity  = null;          // Entropy (kJ/kg)
    h   : number | Quantity  = null;          // Enthalpy (kJ/kg)
    cp  : number | Quantity  = null;          // Isobaric Heat Capacity (kJ/kg.K)
    cv  : number | Quantity  = null;          // Isochoric Heat Capacity (kJ/kg.K)
    w   : number | Quantity  = null;          // Speed of sound (m/s)
    mu  : number | Quantity  = null;          // Viscosity (cP)
    k   : number | Quantity  = null;          // Thermal conductivity (W/m.K)
    sigma : number | Quantity  = null;        // Surface tension (mN/m)
    epsilon : number | Quantity  = null;      // Dielectric Constant
    ic  : number | Quantity  = null;          // Ionisation constant
    n   : number | Quantity  = null;          // Number of moles

    // All the properties and the default units the neutriumjs equations of state use
    static properties = {
        "p" : {
            "name"          : "Pressure",
            "key"           : "p",
            "category"      : "pressure",
            "default_units" : "Pa"
        },
        "t" : {
            "name"          : "Temperature",
            "key"           : "t",
            "category"      : "temperature",
            "default_units" : "tempK"
        },
        "n" : {
            "name"          : "Number of moles",
            "key"           : "n",
            "category"      : "substance",
            "default_units" : "mole"
        },
        "v" : {
            "name"          : "Specific Volume",
            "key"           : "v",
            "category"      : "specific_volume",
            "default_units" : "m^3/kg"
        },
        "rho" : {
            "name"          : "Density",
            "key"           : "rho",
            "category"      : "density",
            "default_units" : "kg/m^3"
        },
        "u" : {
            "name"          : "Internal Energy",
            "key"           : "u",
            "category"      : "specific_energy",
            "default_units" : "kJ/kg"
        },
        "s" : {
            "name"          : "Entropy",
            "key"           : "s",
            "category"      : "specific_energy",
            "default_units" : "kJ/kg"
        },
        "h" : {
            "name"          : "Enthalpy",
            "key"           : "h",
            "category"      : "heat_capacity",
            "default_units" : "kJ/kg.K"
        },
        "cp" : {
            "name"          : "Isobaric Heat Capacity (Cp)",
            "key"           : "cp",
            "category"      : "heat_capacity",
            "default_units" : "kJ/kg.K"
        },
        "cv" : {
            "name"          : "Isochoric Heat Capacity (Cv)",
            "key"           : "cv",
            "category"      : "heat_capacity",
            "default_units" : "kJ/kg.K"
        },
        "w" : {
            "name"          : "Velocity",
            "key"           : "w",
            "category"      : "velocity",
            "default_units" : "m/s"
        },
        "mu" : {
            "name"          : "Viscosity",
            "key"           : "mu",
            "category"      : "viscosity",
            "default_units" : "cP"
        },
        "k" : {
            "name"          : "Thermal Conductivity",
            "key"           : "k",
            "category"      : "thermal_conductivity",
            "default_units" : "W/m.K"
        },
        "sigma" : {
            "name"          : "Surface Tension",
            "key"           : "sigma",
            "category"      : "surface_tension",
            "default_units" : "mN/m"
        },
        "epsilon" : {
            "name"          : "Dielectric Constant",
            "key"           : "epsilon",
            "category"      : "dielectric_constant",
            "default_units" : ""
        },
        "ic" : {
            "name"          : "Ionisation constant",
            "key"           : "ic",
            "category"      : "ionisation_constant",
            "default_units" : ""
        },
        "γ" : {
            "name"          : "Adibatic index",
            "key"           : "γ",
            "category"      : "dimensionless",
            "default_units" : ""
        }

    };

    constructor(initValue)
    {
        Object.keys(initValue).forEach((key) => {
            let value = initValue[key];

            if (State.properties.hasOwnProperty(key) && value)
            {
                this[key] = value;
            }
        });
    }


    asQty()
    {
        Object.keys(self).forEach((key) => {
            if (State.properties.hasOwnProperty(key))
            {
                this[key] = new Quantity(this[key] + State.properties[key].default_units);
            }
        });

        return this;
    }
}