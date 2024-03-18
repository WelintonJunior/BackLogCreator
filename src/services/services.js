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


export async function UpdateList(destino, item) {
    let nivel = 0;

    if (destino === "list1") {
        nivel = 2
    } else if (destino === "list2") {
        nivel = 1
    } else {
        nivel = 0
    }

    const response = await fetch("http://localhost/BackEndBackLog/methods.php", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: item.id,
            niv: nivel,
            acao: "UpdateList"
        })
    })
    const result = await response.text();
    return result;
}