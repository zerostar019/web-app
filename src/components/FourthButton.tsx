const FourthButton = () => {
    return (
        <div
            onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://t.me/c/1882043739/1228';
            }}
            style={{
            background: "#fff",
            borderRadius: '12px',
            padding: '12px',
            position: 'relative',
            textAlign: "center"
        }}>
            <span style={{
                color: "#000"
            }}>МОИ</span>
            <div style={{
                position: "relative",
                width: "100%",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: '0 auto'
            }}>
                <img
                    src="elements/name.svg"
                    alt="name"
                    style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        left: 0,
                        top: 0
                    }}
                />
                <span
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -40%)",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        pointerEvents: "none",
                        width: "100%",
                        color: "#000",
                        fontWeight: 600,
                        fontSize: "0.7rem"
                    }}
                >
                    философия
                </span>
            </div>
            <span style={{
                color: "#000"
            }}>&</span>
            <div style={{
                position: "relative",
                width: "100%",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: '0 auto'
            }}>
                <img
                    src="elements/name-black.svg"
                    alt="name"
                    style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        left: 0,
                        top: 0
                    }}
                />
                <span
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -40%)",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        pointerEvents: "none",
                        width: "100%",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "0.7rem"
                    }}
                >
                    политика
                </span>
            </div>
        </div>
    )
}

export default FourthButton;