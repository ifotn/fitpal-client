import { Exercise } from "@/app/types/exercise";

export default async function Exercises() {
    "use cache";
    // fetch exercise data from express server api
    const response: Response = await fetch('http://localhost:4000/api/v1/exercises');

    // convert response to array of exercises using our Exercise type
    const exercises: Exercise[] = await response.json();

    return (
        <main>
            <h1>Exercises</h1>
            <ul>
                {exercises.map((exercise) => (
                    <li key={exercise._id} className="card">
                        <h2>{exercise.name}</h2>
                        <p>Duration: {exercise.duration}</p>
                        <p>Intensity: {exercise.intensity}</p>
                        <p>Date: {new Date(exercise.date).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}