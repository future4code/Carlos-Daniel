´´´function calculaNota(ex, p1, p2) {
´´´ let prova1 = p1 * 2 
´´´ let prova2 = p2 * 3
´´´ let exercicio = ex * 1 
´´´ let notaFinal = (prova1 + prova2 + exercicio) / 6
´´´ if (notaFinal >= 9){ 
´´´    return  "A" 
´´´    }else if (notaFinal >= 7.5 && notaFinal < 9) {
 
´´´        return  "B"
´´´ } else if (notaFinal >= 6 && notaFinal < 7.5) {
´´´   return  "C"
´´´  } else (notaFinal <6) 
´´´    return  "D"
´´´   }
´´´   console.log(calculaNota)