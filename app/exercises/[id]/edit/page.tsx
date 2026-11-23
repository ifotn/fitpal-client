import EditExerciseForm from "@/app/components/editExerciseForm";
import {Exercise} from "@/app/types/exercise";

// disable pre-rendering, don't render to browser until fetch complete
export const instant = false;

type Props = {
    id: string;
}

export default async function EditExercisePage({ params }: { params: { id: string }}) {
    const { id } = await params;
    console.log(`id: `, id);

    // fetch selected Exercise from db using id in url
    const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN!;

    const res: Response = await fetch(`${apiDomain}/exercises/${id}`);

    // if anything goes wrong fetching the exercise
    if (!res.ok) {
        return (<h1>Could not load Exercise</h1>);
    }

    const exercise: Exercise = await res.json();

    return (
      <main>
          <h1>Exercise Details</h1>
          <EditExerciseForm id={id} exercise={exercise} />
      </main>
    );
}