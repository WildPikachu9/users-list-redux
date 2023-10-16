import './_UsersList.scss';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectFormData, setUsers, updateForm } from './usersListSlice';

const UsersList = () => {
    const formData = useAppSelector(selectFormData);
    const users = useAppSelector(setUsers);
    const dispatch = useAppDispatch();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target;
        const name = target.name;
        dispatch(updateForm({ ...formData, [name]: target.value }));
    };

    const handleUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setUsers({ ...formData, id: Date.now() }));
    };

    const userItems = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        userItems.push(
            <div className="userItem" key={user.id} onClick={() => handleUserClick(user)}>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <p>{user.usertype}</p>
            </div>
        );
    }

    return (
        <div className="usersList">
            <form onSubmit={handleUserSubmit}>
                <label htmlFor="username">User name</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="User name"
                    onChange={handleInputChange}
                    value={formData.username}
                />
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    onChange={handleInputChange}
                    value={formData.email}
                />
                <label htmlFor="usertype">User type</label>
                <select id="usertype" name="usertype" onChange={handleInputChange} value={formData.usertype}>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>
                <button type="submit">Save</button>
            </form>
            <div className="list">
                {userItems}
            </div>
        </div>
    );
};

export default UsersList;
