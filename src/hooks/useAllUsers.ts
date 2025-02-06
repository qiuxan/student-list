import { useEffect, useState } from 'react';
import {getAlltudent} from '../services/users';

// There are a lot of components that need to access the list of user, so we can create a custom hook to fetch the list of users and return it to the components that need it.

export default function useAllUsers<T>() {
    const [users, setUsers] = useState<T[]>([]);

    useEffect(() => {
        (async ()=>{
            const { users } = await getAlltudent();
            setUsers(users);
        })();
    }, []);

    return users;
}