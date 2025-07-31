async function fetchData() {
    const response = await fetch('/data');
    const data = await response.json();

    const table = document.getElementById('data-table');
    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');

    thead.innerHTML = '';
    tbody.innerHTML = '';

    if (data.length > 0) {
        const headerRow = document.createElement('tr');
        Object.keys(data[0]).forEach(key => {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

        data.forEach(row => {
            const tr = document.createElement('tr');
            Object.values(row).forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
    }
}

setInterval(fetchData, 5000);
fetchData();
