import { render, screen, fireEvent } from '@testing-library/react'

import { SelectLangs } from '../../components'

describe('SelectLangs', () => {
  const setLang = jest.fn()

  const clickButton = () => {
    const buttonElem = screen.getByText(/select\slanguages/i)
    fireEvent.click(buttonElem)
  }

  const checkLangs = (...langs) => {
    for (const [name, checked] of langs) {
      const checkboxLangElem = screen.getByRole('checkbox', { name, checked })
      fireEvent.click(checkboxLangElem)
      checked ? expect(checkboxLangElem).not.toBeChecked() : expect(checkboxLangElem).toBeChecked()
    }
  }

  it('should render "Select Languages" button', () => {
    render(<SelectLangs lang={[]} setLang={setLang} />)

    const buttonElem = screen.getByText(/select\slanguages/i)
    expect(buttonElem).toBeInTheDocument()
  })

  it('should render languages list when clicked', () => {
    render(<SelectLangs lang={[]} setLang={setLang} />)

    clickButton()

    const languagesListElem = screen.getAllByRole('checkbox')
    expect(languagesListElem.length).toBeGreaterThanOrEqual(4)

    const hideButtonElem = screen.getByText(/hide/i)
    expect(hideButtonElem).toBeInTheDocument()
  })

  it('should check the languages which are passed as props', () => {
    render(<SelectLangs lang={['ara', 'eng:sai', 'ban']} setLang={setLang} />)

    clickButton()

    const checkedElems = screen.getAllByRole('checkbox', { checked: true })
    expect(checkedElems.length).toBe(3)
  })

  it('should check or uncheck the languages if clicked', () => {
    render(<SelectLangs lang={['ara']} setLang={setLang} />)

    clickButton()

    checkLangs([/ara/i, true], [/ban/i, false])
  })

  it('should show "Select Languages" button again if clicked "Hide"', () => {
    render(<SelectLangs lang={[]} setLang={setLang} />)

    clickButton()

    const hideButtonElem = screen.getByText(/hide/i)
    fireEvent.click(hideButtonElem)

    const buttonElem = screen.getByText(/select\slanguages/i)
    expect(buttonElem).toBeInTheDocument()
    expect(hideButtonElem).not.toBeInTheDocument()
  })
})
