// Set up date pickers to prevent selecting past dates
document.addEventListener("DOMContentLoaded", function() {
    // Get the current date in YYYY-MM-DD format
    const today = new Date().toISOString().split("T")[0];

    // Set the minimum date for the check-in and check-out date pickers
    const checkinDate = document.getElementById("checkin-date");
    const checkoutDate = document.getElementById("checkout-date");

    checkinDate.min = today; // Prevent past dates for check-in
    checkoutDate.min = today; // Prevent past dates for check-out

    // Automatically set the checkout date to one day after the check-in date
    checkinDate.addEventListener("change", function() {
        // Set the checkout date's min value to be one day after check-in date
        const checkinValue = checkinDate.value;
        if (checkinValue) {
            const nextDay = new Date(checkinValue);
            nextDay.setDate(nextDay.getDate() + 1); // Set next day
            checkoutDate.min = nextDay.toISOString().split("T")[0];
        }
    });

    // Optional: Ensure checkout date is always after check-in date
    checkoutDate.addEventListener("change", function() {
        if (checkoutDate.value <= checkinDate.value) {
            alert("Check-out date must be after the check-in date.");
            checkoutDate.value = ""; // Reset invalid selection
        }
    });
});