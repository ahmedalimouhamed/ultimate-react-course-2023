import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="layout">
      {isLoading && <Loader/>}

      <Header/>

      <min>
        <h1>Content</h1>
        <Outlet/>
      </min>
      <CartOverview/>
    </div>
  )
}
