export const instant = false;  // don't try pre-rendering

import { Exercise } from "@/app/types/exercise";

export default async function ExerciseDetails({ params }: { params: { id: string }}) {
    // get id from url params
    const { id } = await params;

    // fetch selected doc from server api
    const res: Response = await fetch(`http://localhost:4000/api/v1/exercises/${id}`);

    // const data = await res.json();
    // console.log(data);

    const exercise: Exercise = await res.json();

    // check not found result
    if (!res.ok) {
        return (
            <main>
                <h1>Exercise Not Found</h1>
            </main>
        );
    }

    return (
        <main>
            <h1>Exercise Details</h1>
            <h2>{exercise.name}</h2>
            <h3>Intensity: {exercise.intensity}</h3>
            <h3>Duration: {exercise.duration}</h3>
            <h3>{new Date(exercise.date).toLocaleDateString()}</h3>
            {exercise.sets?.length > 0 &&
                <>
                    <h3>Sets</h3>
                    <ul>
                    {exercise.sets.map((set) => (
                        <li key={set._id} className="card">
                            <p>Reps: {set.reps}</p>
                            <p>Weight: {set.weight}</p>
                            <p>Units: {set.units}</p>
                            {set.rest && <p>Rest: {set.rest}</p>}
                        </li>
                    ))}
                    </ul>
                </>
            }
        </main>
    );
};