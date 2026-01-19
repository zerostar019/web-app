const SecondButton = () => {
    return (
        <div
            onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://t.me/c/1882043739/615';
            }}
            style={{
                background: "#fff",
                borderRadius: '12px',
                padding: '12px',
                position: 'relative'
            }}>
            <div style={{
                color: "#000"
            }}>
                <span style={{
                    color: "#000",
                    whiteSpace: "nowrap"
                }}> КАК Я</span>{" "}
                <span style={{
                    color: "#000"
                }}>ПОТЕРЯЛ</span>
            </div>

            <img src="elements/million.svg" alt="million" style={{
                position: "absolute"
            }} />

            <img src="elements/heart.svg" alt="heart" style={{
                position: "absolute",
                width: '50px',
                height: "50px",
                bottom: 0,
                left: 0
            }} />
        </div>
    )
}

export default SecondButton;