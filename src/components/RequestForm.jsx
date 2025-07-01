import React, { useState } from 'react';

const RequestForm = () => {
    const [requestData, setRequestData] = useState({
        title: '',
        description: '',
        priority: 'normal',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRequestData({
            ...requestData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission, e.g., sending data to an API
        console.log('Request submitted:', requestData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={requestData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={requestData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="priority">Priority:</label>
                <select
                    id="priority"
                    name="priority"
                    value={requestData.priority}
                    onChange={handleChange}
                >
                    <option value="low">Low</option>
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                </select>
            </div>
            <button type="submit">Submit Request</button>
        </form>
    );
};

export default RequestForm;