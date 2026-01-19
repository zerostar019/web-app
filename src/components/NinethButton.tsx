const NinethButton = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: 'center'
        }}>
            <span style={{
                color: "rgba(251, 97, 7, 1)",
                fontSize: "20px"
            }}>100/365</span>
            <span style={{
                whiteSpace: "nowrap"
            }}>ДНЕЙ БЕГА</span>
            <div style={{
                position: "relative",
                height: '100%',
                width: "100%"
            }}>
                <img src="elements/body/body.svg" alt="body" style={{
                    position: "absolute",
                    transform: "translate(100%, 100%)"
                }} />
                <img src="elements/body/right-arm.svg" alt="right-arm" style={{
                    position: "absolute",
                    transform: "translate(240%, 43px)"
                }} />
                <img src="elements/body/left-arm.svg" alt="left-arm" style={{
                    position: "absolute",
                    transform: "translate(95%, 40px)"
                }} />
                <img src="elements/body/head.png" alt="head" style={{

                    transform: "translate(150%, 5px)"
                }} />
            </div>
        </div>
    )
}

export default NinethButton;