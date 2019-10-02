interface Persona{
    name: string,
    age: number
}

class Main{
    personas: Persona[]=[];
    constructor(){
        let btnAdd = document.getElementById("addItem");
        let btnPrint = document.getElementById("print");
        btnAdd.addEventListener("click", (e:Event) => this.add());
        btnPrint.addEventListener("click", (e:Event) => this.print());
    }

    public add(){
        console.log("addToArray");
        console.log((<HTMLInputElement>document.getElementById("name")).value);
        console.log((<HTMLInputElement>document.getElementById("age")).value);
    }

    public print(){
        console.log("printArray");
        console.log(this.personas);
    }
    /*
    document.getElementById("addItem").onclick = function() {
    var userInput = prompt("Enter your Todo: ");
    personas.push = userInput;
    console.log(personas);
    }*/
}