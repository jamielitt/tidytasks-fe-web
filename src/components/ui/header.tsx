import { useContext } from "react";
import { AccountContext } from "../../providers/account/useAccountProvider";

export default function Header() {
  const context = useContext(AccountContext);
  return (
    <header className="flex gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <p>Header Component</p>
        <p>User: {context.currentUser.Name}</p>        
    </header>
  )
}