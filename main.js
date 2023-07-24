let s = prompt('Введіть заданий рядок').replace(/\s+/g, '');
let p1 = prompt('Введіть перший рядок').replace(/\s+/g, ''); 
let p2 = prompt('Введіть другий рядок').replace(/\s+/g, '');

const stringChecker = function (s, p1, p2) {
    let copyS = '';

    for (let i = s.length-1; i >=0 ; i--) {

        if(s[i]==p1[p1.length-1]){
            copyS += p1[p1.length-1];
            p1 = p1.slice(0, -1)
        } else if(s[i]==p2[p2.length-1]){
            copyS += p2[p2.length-1];
            p2 = p2.slice(0, -1)
        } else {
            return false
        }  

    }

    if(p1.length !== 0 && p2.length !== 0){
        return false
    }
    
    copyS = copyS.split('').reverse().join('')

    return s === copyS ? true : false;

};

alert(stringChecker(s, p1, p2));