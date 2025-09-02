import MyComponent from './components/MyComponent';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 >Titulo do projeto</h1>

      <h2 className={styles.heading_module}>Titulo do projeto H2</h2>
      <div className={styles.container}>
        <p>Texto herdado</p>
      </div>
      <div className={styles.container}>
        <h1>Texto sem herança</h1>
      </div>
      <MyComponent />
    </div>
  );
}
