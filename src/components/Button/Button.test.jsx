import { render, screen } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import Button from './Button'
import userEvent from '@testing-library/user-event'

describe('Button Component', () => {
    it('renders with the correct label', () => {
        render(<Button label={'Click Me'} onClick={() => { }} />)

        expect(screen.getByText(/Click Me/i)).toBeInTheDocument()
    })

    it('calls the onclick handler when clicked', async () => {
        const handleClick = vi.fn()

        render(<Button label={'Test Button'} onClick={handleClick} />)

        await userEvent.click(screen.getByText(/Test Button/i))

        expect(handleClick).toBeCalledTimes(1)
    })
})