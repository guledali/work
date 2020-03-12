import { render, cleanup } from '@testing-library/react'

import RednessPage from './RednessPage'

describe('RednessPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<RednessPage />)
    }).not.toThrow()
  })
})
