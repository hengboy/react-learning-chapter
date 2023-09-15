import {useState} from "react";
import {useImmer} from "use-immer";

export default function Part5() {
    let defaultProfile = {
        'name': {
            'lastName': '于', 'firstName': '起宇'
        }
    };
    const [isEdit, setIsEdit] = useState(false);
    const [profile, updateProfile] = useImmer(defaultProfile);
    let fullName = profile.name.lastName + profile.name.firstName;

    function handleChangeLastName(e) {
        updateProfile(draft => {
            draft.name.lastName = e.target.value
        });
    }

    function handleChangeFirstName(e) {
        updateProfile(draft => {
            draft.name.firstName = e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsEdit(!isEdit);
    }

    return (<form onSubmit={handleSubmit}>
        <p>
            姓氏:{' '}
            <b>{isEdit ? (
                <input type="text"
                       name="lastName"
                       onChange={handleChangeLastName}
                       value={profile.name.lastName}/>
            ) : profile.name.lastName}</b>
        </p>
        <p>
            名字:{' '}
            <b>{isEdit ? (
                <input type="text"
                       name="firstName"
                       onChange={handleChangeFirstName}
                       value={profile.name.firstName}/>
            ) : profile.name.firstName}</b>
        </p>
        <button type="submit">
            {isEdit ? '保存' : '编辑'}
        </button>
        <p><i>{fullName}，欢迎您!</i></p>
    </form>);
}