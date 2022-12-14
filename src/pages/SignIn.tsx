import { Checkbox } from "@radix-ui/react-checkbox";
import { FormEvent, useState } from "react";
import axios from 'axios';
import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../Logo";

export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    function handleSignIn(event: FormEvent) {
        event.preventDefault()

        axios.post('/sessions', {
            email: 'creisbarbosa@gmail.com',
            password: '12345678',
        })

        setIsUserSignedIn(true)
    }

    return (
        <div className="w-creen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
            <header className='flex flex-col items-center'>
                <Logo />
                <Heading size="lg" className='mt-4'>
                    Ignite Lab
                </Heading >

                <Text size="lg" className='text-gray-400 mt-2'>
                    Log into your acount and star using!
                </Text>
            </header>

                <form onSubmit={handleSignIn} className="flex flex-col items-stretch w-full max-w-sm gap-4 mt-10">
                    { isUserSignedIn && <Text>Loged in!</Text> } 

                <label htmlFor="email" className='flex flex-col gap-3'>
                    <Text size="sm" className='font-semibild'>E-mail adress</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Envelope />
                        </TextInput.Icon>
                        <TextInput.Input id='email' placeholder='your_mail@example.com' />
                    </TextInput.Root>
                </label>

                <label htmlFor='password' className='flex flex-col gap-3'>
                    <Text size='sm' className='font-semibild'>Your passwrd</Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Lock />
                        </TextInput.Icon>
                        <TextInput.Input id='password' placeholder='******' />
                    </TextInput.Root>
                </label>

                <label htmlFor="remember" className='flex items-center gap-2'>
                    <Checkbox id='remember' />
                    <Text size='sm' className='text-gray-200'>Remeber-me for 30 days</Text>
                </label>

                <Button type="submit" className='mt-4'>Login</Button>

            </form>

            <footer className='flex flex-col items-center gap-2 mt-8'>
                <Text asChild size='sm'>
                    <a href="" className='text-gray-400 underline hover:text-gray-200'>Forgot your password?</a>
                </Text>
                <Text asChild size='sm'>
                    <a href="" className='text-gray-400 underline hover:text-gray-200'>Missing an account? Create one now!</a>
                </Text>
            </footer>

        </div>
    )
}