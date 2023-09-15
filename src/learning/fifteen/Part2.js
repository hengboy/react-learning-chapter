import {initialTravelPlan} from "./places";
import {useState} from "react";

function PlaceTree({place}) {
    const childPlaces = place.childPlaces;
    return (
        <li>
            {place.title}
            {childPlaces.length > 0 && (
                <ol>
                    {childPlaces.map(place => (
                        <PlaceTree key={place.id} place={place}/>
                    ))}
                </ol>
            )}
        </li>
    );
}

export default function Part2() {
    const [plan, setPlan] = useState(initialTravelPlan);
    const rootPlaces = plan.childPlaces;
    return (
        <>
            <h2>Places to visit</h2>
            <ol>
                {rootPlaces.map(place => (
                    <PlaceTree key={place.id} place={place}/>
                ))}
            </ol>
        </>
    );
}