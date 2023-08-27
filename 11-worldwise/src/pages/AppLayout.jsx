import Map from "../componnets/Map";
import Sidebar from "../componnets/Sidebar";
import User from "../componnets/User";
import styles from './AppLayout.module.css'

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar/>
      <Map/>
      <User/>
    </div>
  )
}
