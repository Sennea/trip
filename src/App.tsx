import "./App.css";
import Day from "./components/Day";
import { createId } from "./components/Day/Day";
import Navigation from "./components/Navigation";
import { tripData } from "./pageStructure";
import styles from "./App.module.scss";

function App() {
  const { title, details } = tripData;
  const navigation: { title: string; id: string; level: number }[] = [];
  details.forEach((detail) => {
    navigation.push({
      title: detail.title,
      id: createId(detail.title),
      level: 0,
    });

    detail.parts.forEach((part) => {
      navigation.push({
        title: part.title,
        id: createId(detail.title + part.title),
        level: 1,
      });
    });
  });

  return (
    <div className="App">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        {details.map((day) => (
          <Day day={day} />
        ))}
      </div>
      <Navigation navigation={navigation} />
    </div>
  );
}

export default App;
