import { createContext } from "react"

export class User {
    Name = '';
};

export const defaultUser = new User();
defaultUser.Name = 'Jamie';

export const AccountContext = createContext({ currentUser: defaultUser });
