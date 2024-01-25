import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useRouter } from 'next/navigation'
import AddFile from '../app/add-file/page'
import { experimental } from '@/next.config'

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
        render(<AddFile/>)
        expect(screen.getByText('Document Name:')).toBeInTheDocument()
    })

    it('should render all categories in the dropdown', () => {
        render(<AddFile/>)
        fireEvent.click(screen.getByTestId('category-dropdown'))
        expect(screen.getByRole("option", {name: 'Canterbury Health Laboratories'})).toBeInTheDocument()
        expect(screen.getByRole("option", {name: 'Gender Testing/DNA'})).toBeInTheDocument()
        expect(screen.getByRole("option", {name: 'Insurance'})).toBeInTheDocument()
        expect(screen.getByRole("option", {name: 'Commercial'})).toBeInTheDocument()
        expect(screen.getByRole("option", {name: 'Misc. (Acute Demand, 24hr Surgery, Hepatitis Foundation)'})).toBeInTheDocument()
        expect(screen.getByRole("option", {name: 'Animal Tests (Gribbles)'})).toBeInTheDocument()
        expect(screen.getByRole("option", {name: 'Endoscopes, Environmental Swabs, RCPA'})).toBeInTheDocument()
        expect(screen.getByRole("option", {name: 'Other'})).toBeInTheDocument()
    })

    it('should allow user to assign a category to the file', () => {
        render(<AddFile/>)
        const dropdown = screen.getByTestId('category-dropdown')
        fireEvent.change(dropdown, {target: {value: 'Canterbury Health Laboratories'}})
        expect(dropdown.value).toBe('Canterbury Health Laboratories')
        // Change the value again
        fireEvent.change(dropdown, {target: {value: 'Commercial'}})
        expect(dropdown.value).toBe('Commercial')
    })
})