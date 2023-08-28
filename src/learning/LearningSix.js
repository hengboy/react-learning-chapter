function Button({onClick, children}) {
    return (
        <button onClick={e => {
            // 阻止事件传播到父组件
            e.stopPropagation();
            onClick();
        }} style={{marginLeft: 50, marginTop: 30}}>
            {children}
        </button>
    );
}

function PlayMovieButton({movieName}) {
    function handlePlayClick() {
        alert(`正在播放 ${movieName}`);
    }

    return (
        <Button onClick={handlePlayClick}>
            播放："{movieName}"
        </Button>
    );
}

function UploadButton() {
    return (
        <Button onClick={() => alert('正在上传图片!')}>
            上传图片
        </Button>
    );
}

function Toolbar() {
    return (
        <div onClick={() => alert('点击了Toolbar!')}>
            <PlayMovieButton movieName="钢铁侠1"/>
            <UploadButton/>
        </div>
    );
}

function Signup() {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            alert('提交表单!');
        }}>
            <input/>
            <button>发送</button>
        </form>
    );
}

export default function LearningSix() {
    return (
        <>
            <Toolbar/>
            <Signup/>
        </>
    );
}