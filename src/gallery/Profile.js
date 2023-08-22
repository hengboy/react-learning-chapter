import {getImageUrl} from "../units/utils";

export default function Profile({person}) {
    let marks = person.marks.map(mark => {
        return (
            <li>
                <b>{mark.key}：</b>
                {mark.desc}
            </li>
        );
    });
    return (
        <section className="profile">
            <h2>{person.name}</h2>
            <img
                className="avatar"
                src={getImageUrl(person.imageId)}
                alt={person.name}
                width={person.avatarWidth}
                height={person.avatarHeight}
            />
            <ul>
                {marks}
            </ul>
        </section>
    );
}