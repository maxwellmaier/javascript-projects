// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {
    // Add event listeners here
    document.getElementById('takeoff').addEventListener('click', function() {
        let confirmTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmTakeoff) {
            // Change flight status
            document.getElementById('flightStatus').textContent = "Shuttle in flight";
            // Change background color
            document.getElementById('shuttleBackground').style.backgroundColor = "blue";
            // Increase shuttle height
            let currentHeight = parseInt(document.getElementById('spaceShuttleHeight').textContent);
            document.getElementById('spaceShuttleHeight').textContent = currentHeight + 10000;
        }
    });
    document.getElementById('landing').addEventListener('click', function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        // Change flight status
        document.getElementById('flightStatus').textContent = "The shuttle has landed.";
        // Change background color
        document.getElementById('shuttleBackground').style.backgroundColor = "green";
        // Set shuttle height to 0
        document.getElementById('spaceShuttleHeight').textContent = 0;
    });
    document.getElementById('missionAbort').addEventListener('click', function() {
        let confirmAbort = window.confirm("Confirm that you want to abort the mission.");
        if (confirmAbort) {
            // Change flight status
            document.getElementById('flightStatus').textContent = "Mission aborted.";
            // Change background color
            document.getElementById('shuttleBackground').style.backgroundColor = "green";
            // Set shuttle height to 0
            document.getElementById('spaceShuttleHeight').textContent = 0;
        }
    });
    document.getElementById('up').addEventListener('click', function() {
        moveRocket('up');
    });
    
    document.getElementById('down').addEventListener('click', function() {
        moveRocket('down');
    });
    
    document.getElementById('right').addEventListener('click', function() {
        moveRocket('right');
    });
    
    document.getElementById('left').addEventListener('click', function() {
        moveRocket('left');
    });
    
    function moveRocket(direction) {
        let rocket = document.getElementById('rocket');
        let currentTop = parseInt(rocket.style.top) || 0;
        let currentLeft = parseInt(rocket.style.left) || 0;
        let increment = 10;
        
        if (direction === 'up') {
            rocket.style.top = currentTop - increment + 'px';
            // Decrease shuttle height
            let currentHeight = parseInt(document.getElementById('spaceShuttleHeight').textContent);
            document.getElementById('spaceShuttleHeight').textContent = currentHeight + 10000;
        } else if (direction === 'down') {
            rocket.style.top = currentTop + increment + 'px';
            // Increase shuttle height
            let currentHeight = parseInt(document.getElementById('spaceShuttleHeight').textContent);
            document.getElementById('spaceShuttleHeight').textContent = currentHeight - 10000;
        } else if (direction === 'right') {
            rocket.style.left = currentLeft + increment + 'px';
        } else if (direction === 'left') {
            rocket.style.left = currentLeft - increment + 'px';
        }
    }
    
});


