// Sample notifications
let notifications = [
  {
    id: 1,
    message: "Your repository Code Amigos received a new star.",
    time: "2 minutes ago",
    unread: true,
  },
  {
    id: 2,
    message: "New pull request opened in your project.",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    message: "You were mentioned in an issue comment.",
    time: "Yesterday",
    unread: false,
  }
];

const notifList = document.getElementById("notif-list");
const markAllBtn = document.getElementById("markAllBtn");

// Render notifications
function renderNotifications() {
  notifList.innerHTML = "";

  notifications.forEach((item) => {
    const div = document.createElement("div");
    div.className = `notification-item ${item.unread ? "" : "read"}`;

    div.innerHTML = `
      <div style="display:flex; justify-content:space-between;">
        <div>
          <p>${item.message}</p>
          <small style="color:lightgray">${item.time}</small>
        </div>

        ${item.unread ? `<div class="unread-dot"></div>` : ""}
      </div>
    `;

    notifList.appendChild(div);
  });
}

// Mark all read
markAllBtn.addEventListener("click", () => {
  notifications = notifications.map((n) => ({ ...n, unread: false }));
  renderNotifications();
});

// Floating circles (same as your Sign-In aesthetic)
const bg = document.getElementById("notif-bg");

for (let i = 0; i < 15; i++) {
  const circle = document.createElement("div");
  const size = Math.random() * 100 + 40;

  circle.style.width = size + "px";
  circle.style.height = size + "px";
  circle.style.position = "absolute";
  circle.style.borderRadius = "50%";
  circle.style.background = "rgba(188,212,242,0.15)";
  circle.style.top = Math.random() * 100 + "%";
  circle.style.left = Math.random() * 100 + "%";
  circle.style.animation = "float 12s infinite ease-in-out";
  circle.style.animationDelay = Math.random() * 5 + "s";

  bg.appendChild(circle);
}

// Float animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  0% { transform: translateY(0); opacity: 0.6; }
  50% { transform: translateY(-40px); opacity: 1; }
  100% { transform: translateY(0); opacity: 0.6; }
}
`;
document.head.appendChild(style);

// Initial render
renderNotifications();

