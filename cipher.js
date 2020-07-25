const caesar = function(string, l) {
    let n = l%26;

    const str = string.split('');
    const y = [...Array(26)].reduce(A=>A+String.fromCharCode(i++),'',i=65);
    const capsAlp = y.split('');
    const x = [...Array(26)].reduce(a=>a+String.fromCharCode(i++),'',i=97);
    const Alp = x.split('');
    let k = ''; //index of lowercase alphabet in the Alp array
    let char = ''; //variable holder for str[i]
    let j = ''; // k+n = new index in Alp
        for(let i=0; i < str.length; i++) {
            char = str[i];
            
            if(char == char.toLowerCase()) {
            k = Alp.indexOf(char);
            } else {
                k = capsAlp.indexOf(char);
            }

            j=k+n;

            if(j > 25) {
                j -=26;
                    if(j<0)
                        {j+=26;
                        }   
            } else if (j<0) {
                j+=26;
            }

            if(char.toLowerCase() != char.toUpperCase()){
                if(char == char.toLowerCase()) {
                    str.splice(i, 1, Alp[j]);
                } else {
                    str.splice(i, 1, capsAlp[j]);
                } 
            }
        }
    return str.join('');
    }