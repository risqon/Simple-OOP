class carFactory{
    constructor(){
        this.number = [Math.floor(Math.random()*4) + 1];
     }
    startBuild() {
        let result = []
        let startBuildJazz = new Jazz(4, 4);
        let startBuildInova = new Inova (4, 6);
        let startBuildMazda = new Mazda (2 ,2);
        for (let index = 0; index < this.number; index++) {
            result.push(startBuildJazz.buildJazz());
            result.push(startBuildInova.buildInova());
            result.push(startBuildMazda.buildMazda());
            
            
        }
     console.log(this.number);
     console.log(result);   
    }
}

class Car{
    constructor(seat, door){
        this.tyre = new tyre();
        this.tahunPembuatan = 2019;
        this.seat = seat;
        this.door = door;
        
    }
    garansi(){
        let year = new Date();
        return(year.getFullYear() + (Math.floor(Math.random() * 3)))
    }

}

class tyre{
    constructor(){
        const tyreBrands = ['GT Radial','Bridgestone', 'Dunlop','Yokohama'];
        this.tyreBrand = tyreBrands[Math.floor(Math.random() * 4)]
    }
    getBrand(){
        console.log(`Tyre brand: ${this.tyreBrand}`)
    }
}

class Jazz extends Car {
    buildJazz() {
        let objBuild = {
            carBrand:'Honda Jazz',
            door: `${this.door}`,
            seat:`${this.seat}`,
            tyre:`${this.tyre.tyreBrand}`,
            garansi:`${this.garansi() - this.tahunPembuatan >= 2? 'Active' : 'Expired'}`
        }
        return objBuild;
    }

}
class Inova extends Car {
    buildInova() {
        let objBuild = {
            carBrand:'Inova',
            door: `${this.door}`,
            seat:`${this.seat}`,
            tyre:`${this.tyre.tyreBrand}`,
            garansi:`${this.garansi() - this.tahunPembuatan >= 2? 'Active' : 'Expired'}`
        }
        return objBuild;
    }

}
class Mazda extends Car {
    buildMazda() {
        let objBuild = {
            carBrand:'Mazda',
            door: `${this.door}`,
            seat:`${this.seat}`,
            tyre:`${this.tyre.tyreBrand}`,
            garansi:`${this.garansi() - this.tahunPembuatan >= 2? 'Active' : 'Expired'}`
        }
        return objBuild;
    }

}
 let cars = new carFactory();
 cars.startBuild();


