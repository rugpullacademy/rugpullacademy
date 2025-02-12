document.addEventListener("DOMContentLoaded", function () {
    const notifications = [
        "Cyrus V. - From US",
        "Jackson L. - From US",
        "Matthias D. - From US",
        "Thalia J. - From Canada",
        "Leander S. - From US",
        "Opal C. – From UK"
    ];

    let index = 0;

    function showNotification() {
        const container = document.querySelector(".notification-container");

        // Create notification element
        const notification = document.createElement("div");
        notification.classList.add("notification");

        // Create checkmark icon
        const checkmark = document.createElement("i");
        checkmark.classList.add("fas", "fa-check-circle", "checkmark");

        // Add text content
        const text = document.createElement("span");
        text.textContent = notifications[index];

        // Append checkmark and text to notification
        notification.appendChild(checkmark);
        notification.appendChild(text);

        // Add to container and show
        container.appendChild(notification);
        setTimeout(() => notification.classList.add("show"), 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove("show");
            setTimeout(() => container.removeChild(notification), 500);
        }, 3000);

        // Move to next notification
        index = (index + 1) % notifications.length;
    }

    // Show notification every 20 seconds
    showNotification();
    setInterval(showNotification, 20000);
});
