import { render, cleanup } from '@testing-library/react'

import BackgroundLayout from './BackgroundLayout'

describe('BackgroundLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<BackgroundLayout />)
    }).not.toThrow()
  })
})
