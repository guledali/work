import { render, cleanup } from '@testing-library/react'

import CoverpagePage from './CoverpagePage'

describe('CoverpagePage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<CoverpagePage />)
    }).not.toThrow()
  })
})
