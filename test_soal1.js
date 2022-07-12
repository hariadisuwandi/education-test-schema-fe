var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]

var gabungArray = data1.concat(data2).concat(data3);

function modus(array)
{
    if(array.length == 0)
        return null;
    var nilaiModus = {};
    var nilaiMax = array[0], jumlahMax = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(nilaiModus[el] == null)
            nilaiModus[el] = 1;
        else
            nilaiModus[el]++;  
        if(nilaiModus[el] > jumlahMax)
        {
            nilaiMax = el;
            jumlahMax = nilaiModus[el];
        }
    }
    return nilaiMax;
}
console.log(modus(gabungArray))