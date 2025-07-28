const event = [ // changed 'event' to 'Events' for clarity
    {
        title: "music concert",
        location: "festac town",
        date: "August 19, 2025"
    },
    {
        title: "art exhibition",
        location: "lekki",
        date: "September 5, 2025"
    },
    {
        title: "food festival",
        location: "ikeja",
        date: "October 10, 2025"
    },
];
const eventContainer = document.getElementById("event-list");
const searchinput = document.getElementById("search-input");

function displayEvents(filter = "") {
    addEventListener. innerHTML = ""; // Fixed: use eventContainer, not addEventListener
    events
    Events
    .filter(e => e.title.toLowerCase().includes(filter.toLowerCase()))
    .forEach(event =>{
        const Div =  document.createElement("div"); // Fixed: use eventDiv, not Div
        eventDiv.className = "event";
        eventDiv.innerHTML = `
            <h2>${event.title}</h2>
            <p>Location: ${event.location}</p>
            <p>Date: ${event.date}</p>
            <botton on click="alert(ticket bought for ${event.title})">Buy Ticket</button>
        `;
        EventList.appendchild(eventDiv);
    });
}

searchinput.addEventListener("input", (e) => {
    displayEvents(searchinput.value);
});

    displayEvents();