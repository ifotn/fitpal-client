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

    return (
        <main>
            <h1>Exercise Details</h1>
            <form>
                <fieldset>
                    <label htmlFor="name">Name:</label>
                    <input />
                </fieldset>
                <fieldset>
                    <label htmlFor="intensity">Intensity:</label>
                    <input />
                </fieldset>
                <fieldset>
                    <label htmlFor="duration">Duration:</label>
                    <input type="number" min="1" />
                </fieldset>
                <button>Save</button>
            </form>
        </main>
    );
};