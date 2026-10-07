'use client'

import { useState } from "react";

export default function Message() {

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function getMessage() {
        setError('');
        setLoading(true);
        setMessage('');

        try {
            const response = await fetch('/api/message');

            if (!response.ok) {
                throw new Error('Request failed')
            }

            const data = await response.json();
            setMessage(data.message);
        }   
        catch (err) {
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
  }

  return (
    <div>
        <button onClick={getMessage} disabled={loading}>Load server message</button>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {message && <p>{message}</p>}
    </div>
  );
}