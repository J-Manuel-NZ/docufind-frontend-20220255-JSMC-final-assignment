import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useRouter } from 'next/navigation'
import Home from '../app/page'

afterEach(cleanup)

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
  }),
}))

describe('Sign In (Home) Page Tests', () => {
  it('Renders the email input on the hompage', () => {
    render(<Home />)
    expect(screen.getByLabelText('email')).toBeInTheDocument();
  })

  it('Renders the password input on the hompage', () => {
    render(<Home />)
    expect(screen.getByLabelText('password')).toBeInTheDocument();
  })

  it('Renders the sign in button on the hompage', () => {
    render(<Home />)
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  })
})
