import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'temperatureUnit'
})

export class TemperatureUnitPipe implements PipeTransform{
    transform(temperature: number, unitType: string){
        switch(unitType){
            case "C":
                const celsius = (temperature - 32) * 5 / 9;
                return Math.round(celsius);
            default:
                return Math.round(temperature);
        }
    }
}