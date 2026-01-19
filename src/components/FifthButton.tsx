const FifthButton = () => {
    return (
        <div
            onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://t.me/+1oW-F_6w5YtlNzNi';
            }}
            style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
        }}>
            <img src="elements/community.svg" alt="community" />
        </div>
    )
}

export default FifthButton;