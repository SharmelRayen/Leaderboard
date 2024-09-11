document.addEventListener('DOMContentLoaded', () => {
    const eventMenu = document.getElementById('eventMenu');
    const scoreTable = document.getElementById('scoreTable');

    // Fetch events and populate menu
    fetch('/api/events')
        .then(response => response.json())
        .then(events => {
            events.forEach(event => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = '#';
                a.textContent = event.name;
                a.addEventListener('click', () => loadLeaderboard(event.id));
                li.appendChild(a);
                eventMenu.appendChild(li);
            });
        });

    // Load leaderboard for selected event
    function loadLeaderboard(eventId) {
        fetch(`/api/leaderboard/${eventId}`)
            .then(response => response.json())
            .then(scores => {
                scoreTable.innerHTML = '';
                scores.forEach(score => {
                    const tr = document.createElement('tr');
                    const tdName = document.createElement('td');
                    const tdScore = document.createElement('td');
                    tdName.textContent = score.participant_name;
                    tdScore.textContent = score.score;
                    tr.appendChild(tdName);
                    tr.appendChild(tdScore);
                    scoreTable.appendChild(tr);
                });
            });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const navbarMenu = document.getElementById('navbarMenu');

    toggleButton.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    // Handle menu item clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const eventId = link.getAttribute('data-event-id');
            loadLeaderboard(eventId);
            // Close menu after selecting
            navbarMenu.classList.remove('active');
        });
    });

    // Load leaderboard for the first event by default (if needed)
    if (navbarMenu.querySelector('.nav-link')) {
        loadLeaderboard(navbarMenu.querySelector('.nav-link').getAttribute('data-event-id'));
    }

    function loadLeaderboard(eventId) {
        fetch(`/api/leaderboard/${eventId}`)
            .then(response => response.json())
            .then(scores => {
                const scoreTable = document.getElementById('scoreTable');
                scoreTable.innerHTML = '';
                scores.forEach(score => {
                    const tr = document.createElement('tr');
                    const tdName = document.createElement('td');
                    const tdScore = document.createElement('td');
                    tdName.textContent = score.participant_name;
                    tdScore.textContent = score.score;
                    tr.appendChild(tdName);
                    tr.appendChild(tdScore);
                    scoreTable.appendChild(tr);
                });
            });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const navbarMenu = document.getElementById('navbarMenu');

    toggleButton.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    // Handle menu item clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const eventId = link.getAttribute('data-event-id');
            loadLeaderboard(eventId);
            // Close menu after selecting
            navbarMenu.classList.remove('active');
        });
    });

    // Load leaderboard for the first event by default (if needed)
    if (navbarMenu.querySelector('.nav-link')) {
        loadLeaderboard(navbarMenu.querySelector('.nav-link').getAttribute('data-event-id'));
    }

    function loadLeaderboard(eventId) {
        fetch(`/api/leaderboard/${eventId}`)
            .then(response => response.json())
            .then(scores => {
                const scoreTable = document.getElementById('scoreTable');
                scoreTable.innerHTML = '';
                scores.forEach(score => {
                    const tr = document.createElement('tr');
                    const tdName = document.createElement('td');
                    const tdScore = document.createElement('td');
                    tdName.textContent = score.participant_name;
                    tdScore.textContent = score.score;
                    tr.appendChild(tdName);
                    tr.appendChild(tdScore);
                    scoreTable.appendChild(tr);
                });
            });
    }
});document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const navbarMenu = document.getElementById('navbarMenu');

    toggleButton.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    // Handle menu item clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const eventId = link.getAttribute('data-event-id');
            loadLeaderboard(eventId);
            // Close menu after selecting
            navbarMenu.classList.remove('active');
        });
    });

    // Load leaderboard for the first event by default (if needed)
    if (navbarMenu.querySelector('.nav-link')) {
        loadLeaderboard(navbarMenu.querySelector('.nav-link').getAttribute('data-event-id'));
    }

    function loadLeaderboard(eventId) {
        fetch(`/api/leaderboard/${eventId}`)
            .then(response => response.json())
            .then(scores => {
                const scoreTable = document.getElementById('scoreTable');
                scoreTable.innerHTML = '';
                scores.forEach(score => {
                    const tr = document.createElement('tr');
                    const tdName = document.createElement('td');
                    const tdScore = document.createElement('td');
                    tdName.textContent = score.participant_name;
                    tdScore.textContent = score.score;
                    tr.appendChild(tdName);
                    tr.appendChild(tdScore);
                    scoreTable.appendChild(tr);
                });
            });
    }
});

