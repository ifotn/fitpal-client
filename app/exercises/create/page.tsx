'use client';

import { Exercise } from "@/app/types/exercise";
import { useForm,  Controller } from "react-hook-form";

interface FormData {
    name: string;
    intensity: string;
    duration: number;
}

export default function CreateExercise() {
    // set up react-hook-form
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }} = useForm<FormData>({
        defaultValues: {
            name: '',
            intensity: '',
            duration: 0
        }
    });

    const onSubmit = async (data:FormData) => {
        // console.log(`Submitted: `, data);

        try {
            // build json payload from form data
            const payload = {
                name: data.name,
                intensity: data.intensity,
                duration: data.duration
            };

            // get server api url from env var
            const apiDomain: string = process.env.NEXT_PUBLIC_API_DOMAIN!;

            // try POST request to server api
            const res: Response = await fetch(`${apiDomain}/exercises`, {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(payload)
            });

            const apiResponse = await res.json();
            console.log(apiResponse);
        }
        catch (error: unknown) {
            console.log(error);
        }
    }

    return (
        <main>
            <h1>Exercise Details</h1>
            {isSubmitSuccessful && <p className="success">Exercise Created</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="name">Name:</label>
                    <input {...register("name", { required: "Name is required" })} />
                    {errors.name && <span className="error">{errors.name.message}</span>}
                </fieldset>
                <fieldset>
                    <label htmlFor="intensity">Intensity:</label>
                    <input {...register("intensity", { required: "Intensity is required" })} />
                    {errors.intensity && <span className="error">{errors.intensity.message}</span>}
                </fieldset>
                <fieldset>
                    <label htmlFor="duration">Duration:</label>
                    <input type="number" min="1" {...register("duration", { required: "Duration is required" })} />
                    {errors.duration && <span className="error">{errors.duration.message}</span>}
                </fieldset>
                <button>Save</button>
            </form>
        </main>
    );
};