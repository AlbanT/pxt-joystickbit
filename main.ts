
//% color="#AA278D"
//% groups="['Buttons', 'Joystick']"
namespace Joystickbit {
	export enum Buttons {
		A = 0x1,
		B = 0x2,
		C = 0x3,
		D = 0x4,
		E = 0x5,
		F = 0x6
	}

	function HelloWorldData(){
		return "Hello World"
	}

	//% block
    //% group="Buttons"
	export function HelloWorld(){
		basic.showString("Hello?")
	}
}
