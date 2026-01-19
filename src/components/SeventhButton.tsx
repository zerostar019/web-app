const SeventhButton = () => {
    return (
        <div
            onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://t.me/c/1882043739/615';
            }}
            style={{
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
            justifyContent: "center"
        }}>
            <span>HELLO</span>
            <div
                style={{
                    position: 'relative',
                    width: '80px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto'
                }}
            >
                <img
                    src="elements/name-pink.svg"
                    alt="union"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        objectFit: 'contain',
                    }}
                />
                <img
                    src="elements/hola.svg"
                    alt="8500"
                    style={{
                        position: 'absolute',
                        width: 70,
                        height: 31,
                        zIndex: 2,
                        pointerEvents: 'none',
                        transform: 'translate(1%, -25%)',
                        objectFit: 'contain',
                    }}
                />
            </div>
            <span style={{
                color: "#fff"
            }}>ПРИВЕТ</span>
        </div>
    )
}

export default SeventhButton;