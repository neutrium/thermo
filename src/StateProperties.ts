import { Quantity } from "@neutrium/quantity";

export class StateProperties<T = number>
{
	p   : T | null = null;		// Pressure (Pa)
	t   : T | null = null;		// Temperature (K)
	rho : T | null = null;		// Density (kg/m^3)
	v   : T | null = null;		// Specific Volume (m^3/kg)
	u   : T | null = null;		// Internal Energy (kJ/kg)
	s   : T | null = null;		// Entropy (kJ/kg)
	h   : T | null = null;		// Enthalpy (kJ/kg)
	cp  : T | null = null;		// Isobaric Heat Capacity (kJ/kg.K)
	cv  : T | null = null;		// Isochoric Heat Capacity (kJ/kg.K)
	w   : T | null = null;		// Speed of sound (m/s)
	mu  : T | null = null;		// Viscosity (cP)
	k   : T | null = null;		// Thermal conductivity (W/m.K)
	sigma : T | null = null;	// Surface tension (mN/m)
	epsilon : T | null = null;	// Dielectric Constant
	ic  : T | null = null;		// Ionisation constant
	n   : T | null = null;		// Number of moles
	γ   : T | null = null;		// Adiabatic index
}