const f = document.getElementById("f");

f.addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener valores y asegurar que sean números
    const getData = (id) => parseFloat(document.getElementById(id).value) || 0;

    // Producto 1
    let prea = getData("prea"), prep = getData("prep"), cons = getData("cons");
    let prod = document.getElementById("prod").value || "Producto 1";
    document.getElementById("p").innerText = `El ${prod} tiene este incremento`
    document.getElementById("resau").innerText = aumentoprecio(prea, prep).toFixed(2) + "Bs";
    document.getElementById("porc").innerText = porcentaje(prea, prep).toFixed(2) + "%";
    document.getElementById("sem").innerText = semanal(prep, cons).toFixed(2) + "Bs";

    // Producto 2
    let prea2 = getData("prea2"), prep2 = getData("prep2"), cons2 = getData("cons2");
    let prod2 = document.getElementById("prod2").value || "Producto 2";
    document.getElementById("p2").innerText = `El ${prod2} tiene este incremento`
    document.getElementById("resau2").innerText = aumentoprecio(prea2, prep2).toFixed(2) + "Bs" ;
    document.getElementById("porc2").innerText = porcentaje(prea2, prep2).toFixed(2) + "%";
    document.getElementById("sem2").innerText = semanal(prep2, cons2).toFixed(2) + "Bs";

    // Producto 3
    let prea3 = getData("prea3"), prep3 = getData("prep3"), cons3 = getData("cons3");
    let prod3 = document.getElementById("prod3").value || "Producto 3";
    document.getElementById("p3").innerText = `El ${prod3} tiene este incremento`
    document.getElementById("resau3").innerText = aumentoprecio(prea3, prep3).toFixed(2) + "Bs";
    document.getElementById("porc3").innerText = porcentaje(prea3, prep3).toFixed(2) + "%";
    document.getElementById("sem3").innerText = semanal(prep3, cons3).toFixed(2) + "Bs";

    // TOTALES
    let totalAnterior = (prea * cons) + (prea2 * cons2) + (prea3 * cons3);
    let totalActual = semanal(prep, cons) + semanal(prep2, cons2) + semanal(prep3, cons3);

    document.getElementById("sumfa").innerText = totalAnterior.toFixed(2) + "Bs";
    document.getElementById("sumfp").innerText = totalActual.toFixed(2) + "Bs";

    let aupor = porcentaje(totalAnterior, totalActual);
    document.getElementById("aupor").innerText = aupor.toFixed(2) + "%";
});

function aumentoprecio(x, y) { return y - x; }
function porcentaje(x, y) { 
    if (x === 0) return 0;
    return ((y - x) * 100) / x; 
}
function semanal(x, y) { return x * y; }