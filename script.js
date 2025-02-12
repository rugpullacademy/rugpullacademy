document.addEventListener("DOMContentLoaded", function () {
    const notifications = [
        { name: "Cyrus V.", country: "United States" },
        { name: "Jackson L.", country: "United States" },
        { name: "Matthias D.", country: "United States" },
        { name: "Thalia J.", country: "Canada" },
        { name: "Leander S.", country: "United States" },
        { name: "Opal C.", country: "United Kingdom" },
        { name: "Zara V.", country: "Netherlands" }
    ];

    let index = 0;
    let notificationExists = false; // Prevent duplicates

    function showNotification() {
        if (notificationExists) return; // Prevent duplicate notifications

        const container = document.querySelector(".notification-container");

        // Create notification element
        const notification = document.createElement("div");
        notification.classList.add("notification");

        // Create checkmark icon
        const checkmark = document.createElement("i");
        checkmark.classList.add("fas", "fa-check-circle", "checkmark");

        // Create text span with proper highlighting (excluding "the")
        const text = document.createElement("span");
        text.innerHTML = `<span class="highlight">${notifications[index].name}</span> from ${
            notifications[index].country.includes("United States") || notifications[index].country.includes("United Kingdom")
                ? "the " // Only add "the" for "United States" and "United Kingdom"
                : ""
        }<span class="highlight">${notifications[index].country}</span> just joined the academy!`;

        // Append elements
        notification.appendChild(checkmark);
        notification.appendChild(text);
        container.appendChild(notification);

        // Show notification
        setTimeout(() => notification.classList.add("show"), 100);
        notificationExists = true; // Mark notification as active

        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove("show");
            setTimeout(() => {
                container.removeChild(notification);
                notificationExists = false; // Allow new notifications
            }, 500);
        }, 3000);

        // Move to next notification
        index = (index + 1) % notifications.length;
    }

    // Show notification every 20 seconds
    showNotification();
    setInterval(showNotification, 20000);
});
