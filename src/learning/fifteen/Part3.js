import {initialTravelPlan} from "./places_flat";
import {useState} from "react";

function PlaceTree({id, parentId, placesById, onComplete}) {
    const place = placesById[id];
    const childIds = place.childIds;
    return (
        <li>
            {place.title}
            {' '}
            <button onClick={() => {
                onComplete(parentId, id);
            }}>Complete
            </button>
            {childIds.length > 0 && (
                <ol>
                    {childIds.map(childId => (
                        <PlaceTree
                            key={childId}
                            id={childId}
                            parentId={id}
                            placesById={placesById}
                            onComplete={onComplete}
                        />
                    ))}
                </ol>
            )}
        </li>
    );
}

export default function Part3() {
    const [plan, setPlan] = useState(initialTravelPlan);
    const root = plan[0];
    const rootChildIds = root.childIds;

    function handleComplete(parentId, childId) {
        const parent = plan[parentId];
        const nextParent = {
            ...parent,
            childIds: parent.childIds
                .filter(id => id !== childId)
        }
        setPlan({
            ...plan,
            [parentId]: nextParent
        })
    }

    return (
        <>
            <h2>Places to visit</h2>
            <ol>
                {rootChildIds.map(id => (
                    <PlaceTree
                        key={id}
                        id={id}
                        parentId={0}
                        placesById={plan}
                        onComplete={handleComplete}
                    />
                ))}
            </ol>
        </>
    );
}