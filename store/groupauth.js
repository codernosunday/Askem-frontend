import React, { createContext, useState, useEffect } from 'react';

const GroupAuthContext = createContext();
const { Provider } = GroupAuthContext;

const GroupAuthProvider = ({ children }) => {
    const [valueGroup, setValueGroup] = useState('defaultValue');

    useEffect(() => {
        // Kiểm tra nếu đang ở phía client
        if (typeof window !== 'undefined') {
            const storedValue = localStorage.getItem('GroupName');
            setValueGroup(storedValue ? JSON.parse(storedValue) : 'defaultValue');
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('GroupName', JSON.stringify(valueGroup));
        }
    }, [valueGroup]);

    return (
        <Provider value={{ valueGroup, setValueGroup }}>
            {children}
        </Provider>
    );
};

export { GroupAuthContext, GroupAuthProvider };
