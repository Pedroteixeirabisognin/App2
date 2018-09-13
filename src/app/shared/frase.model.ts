export class Frase {
    //Podemos fazer assim
    /*
    public fraseEng:string
    public frasePtBr:string
    
    constructor(fraseEng:string, frasePtBr:string) {
        
        this.fraseEng = fraseEng
        this.frasePtBr= frasePtBr
        
    }
    */
    //Ou assim:
    constructor(public fraseEng:string,public frasePtBr:string) {}
}