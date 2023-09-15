import {initialTravelPlan} from "./places_flat";
import {useState} from "react";
import {useImmer} from "use-immer";

function PlaceTree({id, parentId, placesById, onComplete}) {
    const place = placesById[id];
    const childIds = place.childIds;
    return (
        <li>
            {place.title}
            {' '}
            <button onClick={() => {
                onComplete(parentId, id);
            }}>
                Complete
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

export default function Part4() {
    const [plan, updatePlan] = useImmer(initialTravelPlan);

    function handleComplete(parentId, childId) {
        updatePlan(draft => {
            const parent = draft[parentId];
            parent.childIds = parent.childIds
                .filter(id => id !== childId);

            deleteAllChildren(childId);

            // 递归删除子级
            function deleteAllChildren(id) {
                const place = draft[id];
                place.childIds.forEach(deleteAllChildren);
                delete draft[id];
            }
        });
    }

    const root = plan[0];
    const rootChildIds = root.childIds;
    return (
        <>
            <h2>Places to vision</h2>
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