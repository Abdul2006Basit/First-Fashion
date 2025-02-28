function addtocompare(name, brand, price, category) {
    let comparisonList = JSON.parse(localStorage.getItem("comparisonList")) || [];

    if (comparisonList.length >= 3) {
        alert("You can compare up to 3 products at a time.");
        return;
    }

    let product = { name, brand, price, category };
    comparisonList.push(product);
    localStorage.setItem("comparisonList", JSON.stringify(comparisonList));

    alert(name + " added to comparison!");
}

// Function to Display the Comparison Table on comparison.html
function displayComparison() {
    let comparisonList = JSON.parse(localStorage.getItem("comparisonList")) || [];
    let tableBody = document.getElementById("compareList");
    tableBody.innerHTML = "";

    if (comparisonList.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='4'>No products selected for comparison.</td></tr>";
        return;
    }

    comparisonList.forEach((product, index) => {
        let row = `<tr>
            <td>${product.name}</td>
            <td>${product.brand}</td>
            <td>$${product.price}</td>
            <td><button onclick="removeFromCompare(${index})">Remove</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Function to Remove a Product from Comparison List
function removeFromCompare(index) {
    let comparisonList = JSON.parse(localStorage.getItem("comparisonList")) || [];
    comparisonList.splice(index, 1);
    localStorage.setItem("comparisonList", JSON.stringify(comparisonList));
    displayComparison();
}

// Call displayComparison when the page loads
if (window.location.pathname.includes("compare.html")) {
    window.onload = displayComparison;
}