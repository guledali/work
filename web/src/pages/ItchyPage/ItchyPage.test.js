import { render, cleanup } from '@testing-library/react'

import ItchyPage from './ItchyPage'

describe('ItchyPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ItchyPage />)
    }).not.toThrow()
  })
})
