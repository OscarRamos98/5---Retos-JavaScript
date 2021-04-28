function FindIntersection(strArr) { 

    var a = strArr[0].split(', ')
    var b = strArr[1].split(', ')
    var resultado = a.filter(x => b.find(a => a === x))
    return resultado.length > 0 ? resultado.join(',') : 'false'
  
  }     
console.log(FindIntersection(["1, 3, 4, 7, 13", "5, 2, 0, 10, 1"]));    