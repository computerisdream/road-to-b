// Function to calculate and update the results
function calculateProfit() {
    // Get values from input fields, and set to 0 if they are empty
    var wholesale = parseFloat(document.getElementById("wholesale").value) || 0;
    var purchase = parseFloat(document.getElementById("purchase").value) || 0;
    var advertising = parseFloat(document.getElementById("advertising").value) || 0;
    var shipping = parseFloat(document.getElementById("shipping").value) || 0;
    var misc = parseFloat(document.getElementById("misc").value) || 0;
    var units = parseFloat(document.getElementById("units").value) || 1; // default units to 1 if empty
    
    // Calculate total cost per unit and total profit per unit
    var totalCostPerUnit = wholesale + advertising + shipping + misc;
    var profitPerUnit = purchase - totalCostPerUnit;
    
    // Calculate total profit and total cost based on units
    var totalProfit = profitPerUnit * units;
    var totalCost = totalCostPerUnit * units;
    
    // Avoid division by zero when purchase price is zero
    var profitMargin = purchase > 0 ? (profitPerUnit / purchase) * 100 : 0;
    
    // Display the results
    document.getElementById("profit").innerHTML = "$" + profitPerUnit.toFixed(2);
    document.getElementById("margin").innerHTML = profitMargin.toFixed(2) + "%";
    document.getElementById("totalProfit").innerHTML = "$" + totalProfit.toFixed(2);
    document.getElementById("totalCost").innerHTML = "$" + totalCost.toFixed(2);
}

// Attach event listeners to the input fields to trigger calculation when values change
document.getElementById("wholesale").addEventListener('input', calculateProfit);
document.getElementById("purchase").addEventListener('input', calculateProfit);
document.getElementById("advertising").addEventListener('input', calculateProfit);
document.getElementById("shipping").addEventListener('input', calculateProfit);
document.getElementById("misc").addEventListener('input', calculateProfit);
document.getElementById("units").addEventListener('input', calculateProfit);
