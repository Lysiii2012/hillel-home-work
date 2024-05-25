function carrent(f){
    return function(a){
        return function(b){
            return a * b
        }
    }
}

const res = carrent();

console.log(res(5)(2))