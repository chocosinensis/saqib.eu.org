import { render, screen } from '@testing-library/react'

import { NotFound } from '../../routes'

describe('NotFound', () => {
  it('should render NotFound page', () => {
    render(<NotFound />)

    expect(screen.getByText(/404/i)).toBeInTheDocument()
    expect(screen.getByText(/not\sfound/i)).toBeInTheDocument()
    expect(document.title).toBe('404 « Not Found » Nazmus Saqib')
  })
})
