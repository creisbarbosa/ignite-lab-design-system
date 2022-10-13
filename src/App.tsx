import { Envelope } from 'phosphor-react';
import { Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Logo } from './Logo';

import './styles/global.css';

export function App() {
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
      <form className="flex flex-col items-stretch w-full max-w-sm gap-4 mt-10">
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text size="sm" className='font-semibild'>E-mail adress</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id='email' placeholder='your_mail@example.com' />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
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

