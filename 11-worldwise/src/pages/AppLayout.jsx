import Map from "../componnets/Map";
import Sidebar from "../componnets/Sidebar";
import styles from './AppLayout.module.css'

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar/>
      <Map/>
    </div>
  )
}
