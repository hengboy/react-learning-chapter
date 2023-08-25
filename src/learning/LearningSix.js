function AlertButton({message, children}) {
    return (
        <button onClick={() => alert(message)} style={{marginLeft: 20,marginTop:50}}>
            {children}
        </button>
    );
}

function Toolbar() {
    return (
        <div>
            <AlertButton message="正在播放!">
                播放电影
            </AlertButton>
            <AlertButton message="正在上传!">
                上传文件
            </AlertButton>
        </div>
    );
}

export default function LearningSix() {
    return <Toolbar/>
}