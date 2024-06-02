import React, { useState } from 'react';
import AdminSidebar from '../../components/AdminSidebar';

// Dummy user data for demonstration
const users = [
    { id: 1, name: 'John Doe', avatar: 'https://via.placeholder.com/50', online: true },
    { id: 2, name: 'Jane Smith', avatar: 'https://via.placeholder.com/50', online: false },
    // Add more user data as needed
];

// UserListItem component to render each user profile
const UserListItem = ({ user }) => (
    <div className="flex items-center p-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600">
        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-4" />
        <div>
            <div className="font-semibold">{user.name}</div>
            <div className={`text-xs ${user.online ? 'text-green-500' : 'text-gray-500'}`}>
                {user.online ? 'Online' : 'Offline'}
            </div>
        </div>
    </div>
);

export default function ContactQueries() {
    // State to manage the messages
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    // Function to handle sending messages
    const sendMessage = () => {
        if (messageInput.trim() !== '') {
            setMessages([...messages, { text: messageInput, sender: 'admin' }]);
            setMessageInput('');
            // Code to send message to backend or wherever you want
        }
    };

    return (
        <>
        <AdminSidebar/>
        <div className="p-4 sm:ml-64 mt-20">
            {/* <AdminSidebar/> */}
            <div className="flex h-screen">
                {/* Chat sidebar */}
                <div className="flex-shrink-0 w-1/4 bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-600 h-80">
                    <div className="p-4">User List</div>
                    {/* Render user profiles */}
                    {users.map((user) => (
                        <UserListItem key={user.id} user={user} />
                    ))}
                </div>
                {/* Chat area */}
                <div className="flex-grow bg-white dark:bg-gray-700 flex flex-col h-80">
                    <div className="p-4 flex-grow">
                        {/* Chat messages */}
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.sender === 'admin' ? 'justify-start' : 'justify-end'} mb-2`}
                            >
                                <div
                                    className={`p-3 rounded-lg ${
                                        msg.sender === 'admin' ? 'bg-gray-200 text-gray-800' : 'bg-blue-500 text-white'
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Message input */}
                    <div className="p-4">
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                                className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        sendMessage();
                                    }
                                }}
                            />
                            <button
                                onClick={sendMessage}
                                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
