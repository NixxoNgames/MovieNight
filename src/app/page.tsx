import styles from "./page.module.css";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <main className={styles.main}>
      <link
        href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>

      <Nav />
      <span>Watch Videos online with your friends!</span>
      <div className={styles.login}>
        <span>MovieParty</span>
        <form>
          <input type="textbox" placeholder="yourEmail@gmail.com"></input>
          <input type="textbox" placeholder="username"></input>
          <input type="textbox" placeholder="password"></input>
        </form>
        <span className={styles.forgot}>Forgot password?</span>
        <div className={styles.loginFooter}>
          <button>LOG IN</button>
        </div>
      </div>
    </main>
  );
}
