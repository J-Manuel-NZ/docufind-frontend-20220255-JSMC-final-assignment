import React, {createContext} from 'react'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useRouter } from 'next/navigation'
import Navbar from '../components/Navbar'

afterEach(cleanup)


jest.mock('next/navigation', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
    push: jest.fn(),
  }),
  usePathname() {
    return '';
  },
}))


let mockUserData = {
    name: 'Anna Smith',
    employeeID: 'AS001',
    email: 'example@work.com',
    password: 'password',
    isAdmin: true,
}


describe('Navbar tests', () => {
  it('Renders the logo on the navbar', () => {
      render(<Navbar testParams={mockUserData} />)
      expect(screen.getByAltText('Docufind Logo')).toBeInTheDocument();
  })
    
    it('Renders the dashboard button on the navbar', () => {
        render(<Navbar testParams={mockUserData} />)
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
    })

    it('Renders the add new file button on the navbar', () => {
        render(<Navbar testParams={mockUserData} />)
        expect(screen.getByText('Add New File')).toBeInTheDocument();
    })

    it('Renders the add new user button on the navbar', () => {
        render(<Navbar testParams={mockUserData} />)
        expect(screen.getByText('Add New User')).toBeInTheDocument();
    })
    
    it('Renders the sign up button on the navbar', () => {
        render(<Navbar testParams={mockUserData} />)
        expect(screen.getByText('Sign Out')).toBeInTheDocument();
    })

})