import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useRouter } from 'next/navigation'
import AddUser from '../app/add-user/page'

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

describe('Add User Page testing', () => {
    it('should render Add User page', () => {
        render(<AddUser/>)
        expect(screen.getByText('Employee Name:')).toBeInTheDocument()
    })
})