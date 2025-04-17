import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { Navlink } from './nav-link'

describe('NavLink', () => {
  it('should highlight the nav link when in the current page link', () => {
    const wrapper = render(<Navlink to="/">Home</Navlink>, {
      wrapper: ({ children }) => {
        return <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
      },
    })
    wrapper.debug()
    expect(wrapper.getByText('Home').dataset.current).toEqual('true')
  })
})
