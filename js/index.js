
const btn = document.querySelector("#send");


btn.addEventListener("click", function(e){
    e.preventDefault();
    const esfericod = document.querySelector("#esferico-od");
    const esfericodvalue = esfericod.value;
    const esfericoe = document.querySelector("#esferico-oe");
    const esfericoevalue = esfericoe.value;
    const cilindricod = document.querySelector("#cilindrico-od");
    const cilindricodvalue = cilindricod.value;
    const cilindricoe = document.querySelector("#cilindrico-oe");
    const cilindricoevalue = cilindricoe.value;
    const total = [esfericodvalue, esfericoevalue, cilindricodvalue, cilindricoevalue];
    
    if((esfericodvalue <= 0) && (esfericodvalue >= -15) && (esfericoevalue <= 0) && (esfericoevalue >= -15) && (cilindricodvalue <= 0) && (cilindricodvalue >= -6) && (cilindricoevalue <= 0) && (cilindricoevalue >= -6) ){
        if((esfericodvalue % 0.25 == 0) && (esfericoevalue % 0.25 == 0) && (cilindricodvalue % 0.25 == 0) && (cilindricoevalue % 0.25 == 0)){
            if(((esfericodvalue <= -3) && (esfericodvalue >= -12)) || ((esfericoevalue <= -3) && (esfericoevalue >= -12))){
                if(((cilindricodvalue <= 0) && (cilindricodvalue >= -2)) || ((cilindricoevalue <= 0) && (cilindricoevalue >= -2))){
                    if(((esfericodvalue <= -3) && (esfericodvalue >= -10)) || ((esfericoevalue <= -3) && (esfericoevalue >= -10))){
                        document.getElementById('show').innerHTML = "Lente Prime";
                    }
                }
            }
            else{
                if(((esfericodvalue <= 0) && (esfericodvalue >= -15)) || ((esfericoevalue <= -0) && (esfericoevalue >= -15))){
                    if(((cilindricodvalue <= 0) && (cilindricodvalue >= -5)) || ((cilindricoevalue <= 0) && (cilindricoevalue >= -5))){
                        document.getElementById('show').innerHTML = "Lente Vision";
                    }
                }
            }
        }else{
            document.getElementById('show').innerHTML = "Apenas Multiplos de 0,25!";
        }         
    }else{
        document.getElementById('show').innerHTML = "Limite ultrapassado";
    }


});
