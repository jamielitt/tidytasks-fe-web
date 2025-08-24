import { Props } from "../../components/ui/interfaces/propsWithChildren";
import { AccountContext, defaultUser } from "./useAccountProvider";

const defaultContext = {
   currentUser: defaultUser 
}

export default function AccountProvider({children}: Props) {
    return (
        <AccountContext value={defaultContext}>
            {children}
        </AccountContext>
    );
}