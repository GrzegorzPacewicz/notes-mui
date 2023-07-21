import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditNote = () => {
    const { id } = useParams(); // Access the note ID from the URL params
    const [note, setNote] = useState(null); // State to hold the note data

    // Effect to fetch the note data from local storage when the component mounts
    useEffect(() => {
        fetchNoteById(id);
    }, [id]);

    // Function to fetch the note data by ID from local storage
    const fetchNoteById = () => {
        try {
            // Retrieve the notes data from local storage
            const notes = JSON.parse(localStorage.getItem("notes")) || [];

            // Find the note with the matching ID
            const foundNote = notes.find((n) => n.id === id);

            if (foundNote) {
                setNote(foundNote); // Update the state with the found note data
            } else {
                // Handle the case when the note with the provided ID is not found
                console.log("Note not found.");
            }
        } catch (error) {
            // Handle errors if any
            console.error("Error fetching note:", error);
        }
    };

    // JSX structure to display the note for editing (You can use Material-UI components as needed)
    return (
        <div>
            {note ? (
                <div>
                    {/* Display the note data for editing */}
                    <h1>{note.title}</h1>
                    <p>{note.category}</p>
                    <p>{note.details}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default EditNote;
