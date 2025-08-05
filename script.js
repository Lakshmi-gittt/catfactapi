function getCatFact() {
    fetch('https://catfact.ninja/fact?max_length=140')
        .then(response => response.json())
        .then(data => {
            const factElement = document.createElement('p');
            factElement.textContent = data.fact;
            document.body.appendChild(factElement);
        })
        .catch(error => console.error('Error fetching cat fact:', error));
}