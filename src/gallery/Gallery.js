import Profile from "./Profile";

const persons = [
    {
        name: "Maria Skłodowska-Curie", imageId: "szV5sdG", avatarWidth: 70, avatarHeight: 70, marks: [{
            key: "Profession", desc: "physicist and chemist"
        }, {
            key: "Awards", desc: "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        }, {
            key: "Discovered", desc: "polonium (element)"
        }]
    },
    {
        name: "Katsuko Saruhashi", imageId: "YfeOqp2", avatarWidth: 70, avatarHeight: 70, marks: [{
            key: "Profession", desc: "geochemist"
        }, {
            key: "Awards", desc: "(Miyake Prize for geochemistry, Tanaka Prize)"
        }, {
            key: "Discovered", desc: "a method for measuring carbon dioxide in seawater"
        }]
    }
];
let profiles = persons.map(person => {
    return (
        <Profile person={person}/>
    );
});
export default function Gallery() {
    return (<div>
        {profiles}
    </div>);
}