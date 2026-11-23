import EditExerciseForm from "@/app/components/editExerciseForm";

type Props = {
    id: string;
}

export default async function EditExercisePage({ params }: { params: { id: string }}) {
    const { id } = await params;
    console.log(`id: `, id);
    // fetch selected Exercise from db using id in url

    return (
      <main>
          <h1>Exercise Details</h1>
          <EditExerciseForm />
      </main>
    );
}