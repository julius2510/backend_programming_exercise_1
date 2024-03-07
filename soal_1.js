function prima(angka) {
   if(angka <= 1) {
    return false;
   }
   for(let i = 2; i <= angka / 2; i++) {
     if(angka % i === 0) {
        return false;
        }
    }
}
function bilangan_prima() {
    for (let angka = 2; angka <= 1000; angka++) {
        if(prima(angka)) {
            console.log(angka);
        }
    }
}

bilangan_prima();
     

    

