const FirstButton = () => {
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    textAlign: 'center',
                    height: '100%',
                    width: '100%',
                }}
            >
                <span style={{ display: 'block', width: '100%', textAlign: 'center' }}>СДЕЛКА</span>
                <span style={{ display: 'block', width: '100%', textAlign: 'center' }}>НА</span>
                <div
                    style={{
                        position: 'relative',
                        width: '80px',
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto'
                    }}
                >
                    <img
                        src="elements/Union.svg"
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
                        src="elements/8500.svg"
                        alt="8500"
                        style={{
                            position: 'absolute',
                            width: 60,
                            height: 31,
                            zIndex: 2,
                            pointerEvents: 'none',
                            transform: 'translate(3%, 5%)',
                            objectFit: 'contain',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default FirstButton