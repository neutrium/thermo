import { Quantity } from "@neutrium/quantity";

export class StateProperties
{
	p   : number | Quantity | null = null;		// Pressure (Pa)
	t   : number | Quantity | null = null;		// Temperature (K)
	rho : number | Quantity | null = null;		// Density (kg/m^3)
	v   : number | Quantity | null = null;		// Specific Volume (m^3/kg)
	u   : number | Quantity | null = null;		// Internal Energy (kJ/kg)
	s   : number | Quantity | null = null;		// Entropy (kJ/kg)
	h   : number | Quantity | null = null;		// Enthalpy (kJ/kg)
	cp  : number | Quantity | null = null;		// Isobaric Heat Capacity (kJ/kg.K)
	cv  : number | Quantity | null = null;		// Isochoric Heat Capacity (kJ/kg.K)
	w   : number | Quantity | null = null;		// Speed of sound (m/s)
	mu  : number | Quantity | null = null;		// Viscosity (cP)
	k   : number | Quantity | null = null;		// Thermal conductivity (W/m.K)
	sigma : number | Quantity | null = null;	// Surface tension (mN/m)
	epsilon : number | Quantity | null = null;	// Dielectric Constant
	ic  : number | Quantity | null = null;		// Ionisation constant
	n   : number | Quantity | null = null;		// Number of moles
	γ   : number | Quantity | null = null;		// Adiabatic index
}