export interface Exercise {
    _id: string;
    name: string;
    intensity: string;
    duration: number;
    date: Date;
    sets: ISet[];
}

// child data for strength-training (mostly) sets
export interface ISet {
    _id: string;
    setCount: number;
    reps: number;
    weight: number;
    units: string;
    rest: number;
}