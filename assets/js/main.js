function deleteEvent(eventId) {
    fetch(`/events/${eventId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            // Reload or update the event list
            location.reload(); // Example: reload the page
            cosole.log('Event deleted');
        } else {
            // Handle error
            console.error('Failed to delete event');
        }
    })
    .catch(error => console.error('Error:', error));
}


//getting ID function
function getId(id){
    localStorage.setItem('myItem',id);
}

//getting info function
function getInfo(){
    const updateEvents ={
        name: document.getElementById("name").value,
        location : document.getElementById("location").value,
        date : document.getElementById("date").value,
        host : document.getElementById("host").value,
        additionalMessage : document.getElementById("additionalMessage").value,
        //add more if needed

    };
    var item = localStorage.getItem('myItem');
    updateEvent(item, updateEvents);
}


//update event function //NOT FINISH
function updateEvent(eventId, updatedEvent){
    //getting event ID
    fetch( `/events/${eventId}`, { //The HTTP request being made, which will call the update method in our routes.js based on the method (not DELETE, IT's PUT).
        method: 'PUT',
        header: {
            'Content-Type': 'application/json'  //request body will be sent in JSON format
        },
        body: JSON.stringify(updatedEvent) //Converts object into JSON string. data being sent in the request body
    })
    .then(response => { // Check if anything goes wrong
        if (response.ok){
            //reload or update the event list
            location.reload(); // Example: Reload the page
            console.log('Event Deleted');
        }
        else{
            //Handle Error 
            console.error('Failed to delete event');
        }
    })
    .catch(error => console.error('Error:', error));


}
