import{ Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'speedUnit'
})

export class SpeedUnitPipe implements PipeTransform {
    transform(speed: number, unitType: string){
        switch(unitType) {
            case "kph":
                const miles = Math.round(speed * 1.6);
                return miles + "kph";
            default:
                speed = Math.round(speed);
                return speed + "mph";
        }
    }
}