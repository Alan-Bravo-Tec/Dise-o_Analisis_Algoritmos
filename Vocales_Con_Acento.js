function Promedio_NumerosPositivos (V_Acento){
    var Frase = 'áéíóú';
    V_Acento=0

    for (let i=0; i< Frase.length; i++ ){
        if (á=Frase[i]){
            V_Acento= V_Acento +1
        }
        if (é=Frase[i]){
            V_Acento= V_Acento +1
        }
        if (í=Frase[i]){
            V_Acento= V_Acento +1
        }
        if (ó=Frase[i]){
            V_Acento= V_Acento +1
        }
        if (ú=Frase[i]){
            V_Acento= V_Acento +1
        }
    }
    return V_Acento

}