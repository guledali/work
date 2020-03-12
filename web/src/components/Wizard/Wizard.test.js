import { render, cleanup } from '@testing-library/react'

import Wizard from './Wizard'

describe('Wizard', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Wizard />)
    }).not.toThrow()
  })
})
