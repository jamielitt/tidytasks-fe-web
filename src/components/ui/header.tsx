import { useContext } from "react";
import { AccountContext } from "../../providers/account/useAccountProvider";

export default function Header() {
  const context = useContext(AccountContext);
  return (
    <header className="App-header">
        <p>Header Component</p>
        <p>User: {context.currentUser.Name}</p>        
    </header>
  )
}