"use client";
import Image from "next/image";
import { useState } from "react";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleFormSubmit(event) {
        event.preventDefault();
        await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });
    }

    return (
        <>
            <section className='mt-8'>
                <h1 className='text-center text-primary text-4xl'>Register</h1>

                <form action='' className='block max-w-xs mx-auto' onSubmit={handleFormSubmit}>
                    <input
                        type='email'
                        placeholder='email'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <input
                        type='password'
                        placeholder='password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button type='submit'>Register</button>
                    <div className='my-4 text-center text-gray-600'>or Login with provider</div>
                    <button className='flex gap-4 justify-center'>
                        <Image src={"/google.png"} alt='google' width={24} height={24} />
                        Login with Google
                    </button>
                </form>
            </section>
        </>
    );
}
