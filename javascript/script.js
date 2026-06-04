const f = document.getElementById("f");
let miChart; // Variable para controlar la gráfica

let boton=ocument.getElementById("btn");

f.addEventListener("click", function(event) {
    event.preventDefault();

    const getData = (id) => parseFloat(document.getElementById(id).value) || 0;

    // Obtener Nombres de productos
    let n1 = document.getElementById("prod").value || "Producto 1";
    let n2 = document.getElementById("prod2").value || "Producto 2";
    let n3 = document.getElementById("prod3").value || "Producto 3";

    // Cálculos Producto 1
    let prea = getData("prea"), prep = getData("prep"), cons = getData("cons");
    document.getElementById("p").innerText = `El ${n1}:`;
    document.getElementById("resau").innerText = (prep - prea).toFixed(2) + " Bs";
    document.getElementById("porc").innerText = (((prep - prea) * 100) / (prea || 1)).toFixed(2) + "%";
    document.getElementById("sem").innerText = (prep * cons).toFixed(2) + " Bs";

    // Cálculos Producto 2
    let prea2 = getData("prea2"), prep2 = getData("prep2"), cons2 = getData("cons2");
    document.getElementById("p2").innerText = `El ${n2}:`;
    document.getElementById("resau2").innerText = (prep2 - prea2).toFixed(2) + " Bs";
    document.getElementById("porc2").innerText = (((prep2 - prea2) * 100) / (prea2 || 1)).toFixed(2) + "%";
    document.getElementById("sem2").innerText = (prep2 * cons2).toFixed(2) + " Bs";

    // Cálculos Producto 3
    let prea3 = getData("prea3"), prep3 = getData("prep3"), cons3 = getData("cons3");
    document.getElementById("p3").innerText = `El ${n3}:`;
    document.getElementById("resau3").innerText = (prep3 - prea3).toFixed(2) + " Bs";
    document.getElementById("porc3").innerText = (((prep3 - prea3) * 100) / (prea3 || 1)).toFixed(2) + "%";
    document.getElementById("sem3").innerText = (prep3 * cons3).toFixed(2) + " Bs";

    // Totales
    let tAnt = (prea * cons) + (prea2 * cons2) + (prea3 * cons3);
    let tAct = (prep * cons) + (prep2 * cons2) + (prep3 * cons3);
    
    document.getElementById("sumfa").innerText = tAnt.toFixed(2) + " Bs";
    document.getElementById("sumfp").innerText = tAct.toFixed(2) + " Bs";
    document.getElementById("aupor").innerText = (((tAct - tAnt) * 100) / (tAnt || 1)).toFixed(2) + "%";


    const contenedor = document.querySelector('.grafica-container');
    contenedor.style.display = "block"; // Aquí es donde ocurre la magia: se vuelve visible

    // --- LÓGICA DE LA GRÁFICA ---
    const ctx = document.getElementById('miGrafica').getContext('2d');
    if (miChart) { miChart.destroy(); } // Borrar gráfica anterior

    miChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [n1, n2, n3],
            datasets: [{
                label: 'Gasto Anterior Total (Bs)',
                data: [prea * cons, prea2 * cons2, prea3 * cons3],
                backgroundColor: 'rgba(76, 175, 80, 0.6)'
            }, {
                label: 'Gasto Actual Total (Bs)',
                data: [prep * cons, prep2 * cons2, prep3 * cons3],
                backgroundColor: 'rgba(255, 152, 0, 0.6)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, 
            plugins: {
                title: { 
                    display: true, 
                    text: 'Comparativa de Gasto Semanal',
                    font: { size: 20 } // Aprovechamos para agrandar el título
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { font: { size: 14 } } // Números del lateral más grandes
                },
                x: {
                    ticks: { font: { size: 14 } } // Nombres de productos más grandes
                }
            }
        }
    });
});
