document.addEventListener('DOMContentLoaded', () => {
    const notesContainer = document.querySelector('main .grid');
    const addNoteButton = document.querySelector('header button');
    let notes = [];

    // Function to render notes
    function renderNotes() {
        notesContainer.innerHTML = ''; // Clear existing notes
        notes.forEach((note, index) => {
            const noteElement = document.createElement('div');
            noteElement.classList.add('bg-white', 'p-4', 'rounded', 'shadow');
            noteElement.innerHTML = `
                <h2 class="text-xl font-semibold text-gray-800">${note.title}</h2>
                <p class="text-gray-600 mt-2">${note.content}</p>
                <div class="flex justify-end mt-4">
                    <button class="text-blue-500 hover:text-blue-600 mr-2" onclick="editNote(${index})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="text-red-500 hover:text-red-600" onclick="deleteNote(${index})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            `;
            notesContainer.appendChild(noteElement);
        });
    }

    // Function to add a new note
    function addNote() {
        const title = prompt('Enter note title:');
        const content = prompt('Enter note content:');
        if (title && content) {
            notes.push({ title, content });
            renderNotes();
        }
    }

    // Function to edit an existing note
    window.editNote = function(index) {
        const title = prompt('Edit note title:', notes[index].title);
        const content = prompt('Edit note content:', notes[index].content);
        if (title && content) {
            notes[index] = { title, content };
            renderNotes();
        }
    };

    // Function to delete a note
    window.deleteNote = function(index) {
        if (confirm('Are you sure you want to delete this note?')) {
            notes.splice(index, 1);
            renderNotes();
        }
    };

    // Event listener for adding a note
    addNoteButton.addEventListener('click', addNote);
});
