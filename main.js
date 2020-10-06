$.ajax({
    url: "https://www.datos.gov.co/resource/gt2j-8ykr.json",
    type: "GET",
    data: {
        $limit: 25,
    },
}).done(function (data) {
    let str = ``;
    for (let i = 0; i < 25; i++) {
        let caso = data[i];
        str += `<tr>
                    <td>${caso.fecha_de_notificaci_n}</td>
                    <td>${caso.ciudad_de_ubicaci_n}</td>
                    <td>${caso.atenci_n}</td>
                    <td>${caso.edad}</td>
                    <td>${caso.sexo}</td>
                    <td>${caso.tipo}</td>
                    <td>${caso.estado}</td>
                    <td>${caso.ubicaci_n_recuperado}</td>
                </tr>`;
    }
    document.getElementById("cargar").innerHTML = str;
});
