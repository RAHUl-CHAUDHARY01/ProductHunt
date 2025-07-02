'use client';

import { useState } from 'react';

export default function HomePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage('User created successfully!');
      setName('');
      setEmail('');
    } else {
      setMessage(data.error || 'Something went wrong');
    }
  };

  return (
    <main className="p-4">
      <h1 className='text-2xl font-bold mb-4'>ProductHunt</h1>
      <h1 className="text-2xl font-bold mb-4">Create User</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border px-3 py-2 w-full"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border px-3 py-2 w-full"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </main>
  );
}
