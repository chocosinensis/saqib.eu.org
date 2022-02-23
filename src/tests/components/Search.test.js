import { render, screen, fireEvent } from '@testing-library/react'

import Search from '../../components/Search'

describe('Search', () => {
  const props = { value: '', set: jest.fn() }

  it('should render input field with given placeholder', () => {
    render(<Search {...props} placeholder='Input Field' />)

    const inputElem = screen.getByPlaceholderText(/input\sfield/i)
    expect(inputElem).toBeInTheDocument()
  })

  it('should update the input field', () => {
    let val = ''
    render(<Search {...props} set={(value) => (val = value)} />)

    const inputElem = screen.getByRole('textbox')
    fireEvent.change(inputElem, { target: { value: 'Input Value' } })

    expect(val).toBe('Input Value')
  })

  describe('.match()', () => {
    it("should match with title if doesn't start with '@'", () => {
      const title = 'My Awesome Title'
      const failing = 'My Faltu Title'
      const term = 'awes'

      expect(Search.match({ title }, term)).toBeTruthy()
      expect(Search.match({ title: failing }, term)).toBeFalsy()
    })

    it("should match with author if starts with '@'", () => {
      const author = ['My', 'Awesome Author']
      const failing = ['My', 'Faltu Author']
      const term = '@awes'

      expect(Search.match({ author }, term)).toBeTruthy()
      expect(Search.match({ author: failing }, term)).toBeFalsy()
    })
  })
})
