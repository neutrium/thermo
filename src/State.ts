/*
*   The object representing the thermodynamic state of the fluid
*
*   @param {object} initValue An object containing a subset properties in the specified default units
*/
import { Quantity } from "@neutrium/quantity";
import { StateProperties } from "./StateProperties";
import { DEFAULT_STATE_PROPERTIES } from "./DEFAULT_STATE_PROPERTIES";

export class State extends StateProperties
{
	// All the properties and the default units the neutrium equations of state use
	static properties = DEFAULT_STATE_PROPERTIES;

	constructor(initValue: Partial<StateProperties>)
	{
		super();

		(Object.keys(initValue) as Array<keyof typeof State.properties>)
			.forEach((key) => {

				if(State.properties.hasOwnProperty(key))
				{
					const value = initValue[key];

					if (value !== undefined)
					{
						(this as any)[key] = value;
					}
				}
			});
	}

	asQty() : State
	{
		(Object.keys(this) as Array<keyof typeof State.properties>)
			.forEach((key) => {
				if (State.properties.hasOwnProperty(key))
				{
					(this as any)[key] = new Quantity(this[key] + State.properties[key].default_units);
				}
			});

		return this;
	}
}