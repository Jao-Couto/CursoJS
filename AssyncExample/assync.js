let assinc = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://pokeapi.co/api/v2/');
    xhr.onload = function () {
        if (xhr.status === 200) {
            resolve(xhr.responseText);
        } else {
            reject(xhr.status);
        }
    };
    xhr.send();
});


assinc
    .then(res => {
        document.querySelector('body').innerHTML = '<p>' + res + '<p>'
    })
    .catch(err => console.log(err))


let assinc2 = async () => {
    return await fetch('https://pokeapi.co/api/v2/')
}
assinc2()
    .then(res => {
        res.text()
            .then(texto => {
                let p = document.createElement('p');
                p.innerHTML = texto;
                document.querySelector('body').append(p)
            })

    })
    .catch(err => console.log(err))

