import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';
import { SignIn } from './Signin';

export default {
    title: 'Pages/SignIn',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Loged in!'
                    }))
                })
            ],
        },
    }
} as Meta

export const Default:  StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('your_mail@example.com'), 'cerisbarbosa@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('******'), '12345678')

        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            expect(canvas.getByText('Loged in!')).toBeInTheDocument()
        })
    }
}
