import { Exercise } from "@/app/types/exercise";
import Link from "next/link";

export default async function Exercises() {
    "use cache";

    // get server api url from env var
    const apiDomain: string = process.env.NEXT_PUBLIC_API_DOMAIN!;

    // fetch exercise data from express server api
    const response: Response = await fetch(`${apiDomain}/exercises`);

    // convert response to array of exercises using our Exercise type
    const exercises: Exercise[] = await response.json();

    return (
        <main>
            <h1>Exercises</h1>
            <ul>
                {exercises.map((exercise) => (
                    <li key={exercise._id} className="card">
                        <Link href={`/exercises/${exercise._id}`}>
                            <h2>{exercise.name}</h2>
                            <p>Duration: {exercise.duration}</p>
                            <p>Intensity: {exercise.intensity}</p>
                            <p>Date: {new Date(exercise.date).toLocaleDateString()}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}