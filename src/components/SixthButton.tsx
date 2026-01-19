const SixthButton = () => {
    return (
        <div style={{
            background: "#fff",
            borderRadius: "12px",
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
            padding: "12px",
            position: 'relative',
            cursor: 'pointer'
        }}>
            <span style={{
                color: "#000"
            }}>ВСЕГДА</span>
            <span style={{
                color: "#000"
            }}>на связи</span>
            <img src="elements/path.svg" alt="path" />
            <img src="elements/person.svg" alt="person1" style={{
                width: 30,
                position: "absolute",
                transform: "translate(-90%, 130%) rotate(-20deg)"
            }} />
            <img src="elements/person.svg" alt="person2" style={{
                width: 30,
                position: "absolute",
                transform: "translate(120%, 215%) rotate(5deg)"
            }} />
        </div>
    )
}

export default SixthButton;