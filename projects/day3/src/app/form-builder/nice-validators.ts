import { FormGroup } from "@angular/forms";


export class NiceValidators {
    static fooValidation(){}
}

export function fooValidation( num:number ) {

    return (fg: FormGroup) => {
        const keysNum = Object.keys(fg.controls).length;
        if (keysNum > num ) {
            return {
                eyal: `keys length = ${keysNum}`
            }
        }
        return null;
    }
}
