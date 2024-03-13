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

//update event function //NOT FINISH
function updateEvent(eventId, updatedEvent){
    //getting event ID
    fetch('/events/${eventId}', {
        method: 'PUT',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedEvent)
    })


}
