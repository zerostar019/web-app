import styles from "./App.module.css";
import EigthButton from "./components/EigthButton";
import FifthButton from "./components/FifthButton";
import FirstButton from "./components/FirstButton";
import FourthButton from "./components/FourthButton";
import SecondButton from "./components/SecondButton";
import SeventhButton from "./components/SeventhButton";
import SixthButton from "./components/SixthButton";
import ThirdButton from "./components/ThirdButton";

function App() {

  return (
    <div className={styles['layout']}>
      <div className={styles['header']}>
        <span className={styles['header-subheader']}>КУДРЯВЫЙ</span>
        <span style={{
          color: "#fff"
        }}>БИЗНЕСМЕН</span>
      </div>
      <div>
        <img src="images/photo.png" alt="businessman" className={styles['image']} />
        <div className={styles['name-layout']} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="elements/name.svg" alt="matvey" style={{ display: "block", width: "100%" }} />
          <span
            className={styles['name']}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              width: "100%",
            }}
          >
            МАТВЕЙ НЕВЕРОВ
          </span>
        </div>
      </div>
      <div className={styles['buttons-grid']}>
        <FirstButton />
        <SecondButton />
        <ThirdButton />
        <FourthButton />
        <FifthButton />
        <SixthButton />
        <SeventhButton />
        <EigthButton />
      </div>
    </div>
  )
}

export default App
