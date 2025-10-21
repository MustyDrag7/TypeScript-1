import { series } from "./data.js";
const tbody = document.getElementById("series-body");
const avgEl = document.getElementById("seasons-avg");
let total = 0;
series.forEach(s => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${s.id}</td>
    <td><a href="${s.link}" target="_blank">${s.name}</a></td>
    <td>${s.channel}</td>
    <td>${s.seasons}</td>`;
    tbody.appendChild(tr);
    total += s.seasons;
});
const promedio = total / series.length;
avgEl.textContent = `Seasons average: ${promedio.toFixed(0)}`;
