export async function RegisterBackLog(data) {
    const response = await fetch("http://localhost/BackEndBackLog/methods.php", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            perfil: data.perfil,
            quero: data.quero,
            para: data.para,
            acao: data.acao
        })
    });

    const result = await response.json();
    return result;
}


export async function SearchBackLog() {
    const response = await fetch("http://localhost/BackEndBackLog/methods.php", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            acao: "SearchBackLog"
        })
    });

    const result = await response.json();
    return result;

}
