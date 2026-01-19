const EigthButton = () => {
    return (
        <div
            onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://t.me/c/1882043739/1191';
            }}
            style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
                cursor: "pointer"
            }}
        >
            <span style={{ color: "#000", marginBottom: 4 }}>ПЕРВОЕ</span>
            <div
                style={{
                    position: "relative",
                    width: 44,
                    height: 44,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 4
                }}
            >
                <img
                    src="elements/mic.svg"
                    alt="mic"
                    style={{
                        width: 60,
                        height: 60,
                        display: "block"
                    }}
                />
                <img
                    src="elements/icon.svg"
                    alt="icon"
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        transform: "translate(28px, 10px)",
                        width: 22,
                        height: 22
                    }}
                />
            </div>
            <span style={{
                color: "#000",
                fontSize: "12px",
                marginTop: "15px"
            }}>ВЫСТУПЛЕНИЕ</span>
        </div>
    )
}

export default EigthButton;