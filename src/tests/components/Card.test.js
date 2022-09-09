import { render, screen } from '@testing-library/react'
import { BrowserRouter as R } from 'react-router-dom'

import Card from '../../components/Card'

describe('Card', () => {
  const RoutedCard = (props) => (
    <R>
      <Card {...props} />
    </R>
  )

  it('should render card with link if provided', () => {
    render(<RoutedCard />)

    const linkElem = screen.getByRole('link')
    expect(linkElem).toBeInTheDocument()
  })

  it('should render card without link if not provided', () => {
    render(<Card nohyperlink />)

    const linkElem = screen.queryByRole('link')
    expect(linkElem).not.toBeInTheDocument()
  })

  it('should render card with the given title', () => {
    render(<Card nohyperlink title='Card Title' />)

    const titleElem = screen.getByRole('heading', { name: /card\stitle/i })
    expect(titleElem).toBeInTheDocument()
  })

  it('should render card with the given author', () => {
    render(<Card nohyperlink author='Card Author' />)

    const authorElem = screen.getByText(/card\sauthor/i)
    expect(authorElem).toBeInTheDocument()
    expect(authorElem.className).toBe('author design float')
  })
})
