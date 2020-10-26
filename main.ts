//% color="#AA278D"
//% groups="['Buttons', 'Joystick']"
//% block="Joystick:bit" icon="\uf11b";
namespace JoyStickBit {
    
    /**
     * The user selects the 4-way dc motor.
     */
    export enum JoystickButtons {
        A = 0x1,
        B = 0x2,
        C = 0x3,
        D = 0x4,
        E = 0x5,
        F = 0x6
    }


    /**
     * This is a reporter block that returns the X-value from the joystick
     */
    //% block="Joystick X value"
    //% group="Joystick"
    export function JoystickXvalue(): number {
        return pins.analogReadPin(AnalogPin.P0)
    }

    /**
     * This is a reporter block that returns the Y-value from the joystick
     */
    //% block="Joystick Y value"
    //% group="Joystick"
    export function JoystickYvalue(): number {
        return pins.analogReadPin(AnalogPin.P1)
    }

    /**
     * This is a reporter block that returns the analog value for the buttons
     */
    //% block="Buttons analog value"
    //% group="Buttons"
    export function JoystickButtonvalue(): number {
        return pins.analogReadPin(AnalogPin.P2)
    }

    //% block="Joystick:bit | %index is pressed"
    //% button.fieldEditor="gridpicker"
    //% button.fieldOptions.columns=3
    //% button.fieldOptions.tooltips="false"
    export function isPressed(index: JoystickButtons): boolean {
        let aVal = pins.analogReadPin(AnalogPin.P2);
        switch (index){
            case 0x1:
                if (aVal == 2){
                    return true;
                }
                break;
            case 0x2:
                if (aVal == 516){
                    return true;
                }
                break;
            case 0x3:
                if (aVal == 686){
                    return true;
                }
                break;
            case 0x4:
                if (aVal == 770){
                    return true;
                }
                break;
            case 0x5:
                if (aVal == 854){
                    return true;
                }
                break;
            case 0x6:
                if (aVal == 820){
                    return true;
                }
                break;
            default:
            break;
        }
        return false;
    }  
}
