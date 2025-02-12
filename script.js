document.addEventListener("DOMContentLoaded", function () {
    const notifications = [
        { name: "Cyrus V.", country: "the United States" },
        { name: "Jackson L.", country: "the United States" },
        { name: "Matthias D.", country: "the United States" },
        { name: "Thalia J.", country: "Canada" },
        { name: "Leander S.", country: "the United States" },
        { name: "Opal C.", country: "the United Kingdom" },
        { name: "Zara V.", country: "the Netherlands" }
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

        // Create text span with glowing red effect
        const text = document.createElement("span");
        text.innerHTML = `<span class="highlight">${notifications[index].name}</span> from <span class="highlight">${notifications[index].country}</span> just joined the academy!`;

        // Append elements
        notification.appendChild(checkmark);
        notification.appendChild(text);
        container.appendChild(notification);

        // Show notification
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
