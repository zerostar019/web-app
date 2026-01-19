const ThirdButton = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
                textAlign: 'center',
            }}
        >
            <img
                src="elements/question.svg"
                alt="question"
                style={{
                    transform: "rotate(-15deg)",
                    height: '40px',
                    display: 'block',
                    margin: '0 auto'
                }}
            />
            <span style={{ display: "block" }}>ПОЧЕМУ БИЗНЕС</span>
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
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        pointerEvents: "none",
                        width: "100%",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "0.7rem"
                    }}
                >
                    не зарабатывает
                </span>
            </div>
        </div>
    );
}

export default ThirdButton