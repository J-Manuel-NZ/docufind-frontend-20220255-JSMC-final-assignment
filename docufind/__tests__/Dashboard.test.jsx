import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useRouter } from 'next/navigation'
import Dashboard from '../app/dashboard/page'

afterEach(cleanup)

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
    push: jest.fn(),
  }),
}))

describe('Dashboard testing', () => {
    it('should render Add User page', () => {
        render(<Dashboard/>)
        const searchInput = screen.getByTestId('search-input')
        expect(searchInput).toBeInTheDocument()
    })

    it('should allow the user to type in a search query', () => {
        render(<Dashboard/>)
        const searchInput = screen.getByTestId('search-input')
        fireEvent.change(searchInput, {target: {value: 'Medical'}})
        expect(searchInput.value).toBe('Medical')
    })

})