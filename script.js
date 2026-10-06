// Price & Discount Calculator

// Product variables
let name = "Wireless Headphones";
let basePrice = 800;
let discountPercent = 10;
let taxRate = 18;
let stockStatus = "in_stock";

// Function to calculate discounted price
function calculateDiscountedPrice(price, discount) {
    let discountAmount = (price * discount) / 100;
    return price - discountAmount;
}

// Function to calculate tax amount
function calculateTax(price, taxRate) {
    return (price * taxRate) / 100;
}

// Function to calculate final price
function calculateFinalPrice(price, discount, taxRate) {
    let discountedPrice = calculateDiscountedPrice(price, discount);
    let taxAmount = calculateTax(discountedPrice, taxRate);
    return discountedPrice + taxAmount;
}

// Function to check shipping
function isFreeShipping(finalPrice) {
    if (finalPrice >= 500) {
        return "Free Shipping";
    } else {
        return "Shipping: Rs.49";
    }
}

// Function to get stock message
function getStockMessage(status) {
    if (status === "in_stock") {
        return "In Stock";
    } else if (status === "limited") {
        return "Limited Stock";
    } else {
        return "Out of Stock";
    }
}

// Calling the functions
let discountedPrice = calculateDiscountedPrice(basePrice, discountPercent);
let taxAmount = calculateTax(discountedPrice, taxRate);
let finalPrice = calculateFinalPrice(basePrice, discountPercent, taxRate);
let shipping = isFreeShipping(finalPrice);
let stockMessage = getStockMessage(stockStatus);

// Price summary
console.log("----- Price Summary -----");
console.log("Product Name:", name);
console.log("Base Price: Rs." + basePrice);
console.log("Discounted Price: Rs." + discountedPrice);
console.log("Tax Amount: Rs." + taxAmount);
console.log("Final Price: Rs." + finalPrice);
console.log("Shipping:", shipping);
console.log("Stock Status:", stockMessage);