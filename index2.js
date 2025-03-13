document.getElementById('searchBar').addEventListener('keyup', function () {
    let filter = this.value.toUpperCase();
    let notesSection = document.getElementById('notesSection');
    let notes = document.querySelectorAll('.note-card');
    let found = false;

    notes.forEach(function (note) {
        let title = note.querySelector('h2').textContent || note.querySelector('h2').innerText;
        if (title.toUpperCase().indexOf(filter) > -1) {
            // Move the matched note to the top
            notesSection.prepend(note);
            note.style.display = "";
            found = true;
        } else {
            // Hide non-matching notes
            note.style.display = "none";
        }
    });

    // If no match is found, display a message or handle it accordingly
    if (!found) {
        console.log('No matching notes found.');
    }
});
