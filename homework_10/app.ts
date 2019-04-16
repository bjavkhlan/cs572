class University {
    constructor (public name: string, public dept: string ) {}
    graduation(year: number):void {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

const mum:any = new University("MUM", "Computer Science");
mum.graduation(2019);