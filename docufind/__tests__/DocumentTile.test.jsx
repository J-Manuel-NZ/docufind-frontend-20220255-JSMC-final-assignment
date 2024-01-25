import { render, fireEvent, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useRouter } from 'next/navigation'
import DocumentTile from '../components/DocumentTile'

afterEach(cleanup)

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
  }),
}))

const mockDocumentData = {
    title: 'Document Title', 
    description: 'Document Description', 
    id: "DC002", 
    pdf: '', 
    category: "Medical", 
    notes: '',  
}

let mockUserData = {
    name: 'Anna Smith',
    employeeID: 'AS001',
    email: 'example@work.com',
    password: 'password',
    isAdmin: true,
}

describe('Document Tile Tests', () => {
    it('Renders the document title', () => {
        render(<DocumentTile testParams={mockUserData} title={mockDocumentData.title} description={mockDocumentData.description} id={mockDocumentData.id} pdf='' category={mockDocumentData.category} notes=''  />)
        expect(screen.getByText('Document Title')).toBeInTheDocument();
    })

    it('Renders the document description', () => {
        render(<DocumentTile testParams={mockUserData} title={mockDocumentData.title} description={mockDocumentData.description} id={mockDocumentData.id} pdf='' category={mockDocumentData.category} notes=''  />)
        expect(screen.getByText('Document Description')).toBeInTheDocument();
    })

    it('Renders the document category', () => {
        render(<DocumentTile testParams={mockUserData} title={mockDocumentData.title} description={mockDocumentData.description} id={mockDocumentData.id} pdf='' category={mockDocumentData.category} notes=''  />)
        expect(screen.getByText('Medical')).toBeInTheDocument();
    })

    it('Renders the document id', () => {
        render(<DocumentTile testParams={mockUserData} title={mockDocumentData.title} description={mockDocumentData.description} id={mockDocumentData.id} pdf='' category={mockDocumentData.category} notes=''  />)
        expect(screen.getByText('ID: DC002')).toBeInTheDocument();
    })

    it('Tests if the edit state changes when the edit button is clicked', () => {
        render(<DocumentTile testParams={mockUserData} title={mockDocumentData.title} description={mockDocumentData.description} id={mockDocumentData.id} pdf='' category={mockDocumentData.category} notes=''  />)
       
        const title = screen.getByText('Document Title');
        expect(title).toBeInTheDocument();
        const editButton = screen.getByTestId('edit-button');
        fireEvent.click(editButton);
        expect(title).not.toBeInTheDocument();
    })


})
