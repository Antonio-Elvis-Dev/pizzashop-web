import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { vi } from 'vitest'

import { Pagination } from './pagination'

const onPageChangeCallback = vi.fn() // espiao -> funcao que verifica a execucao de acoes
//

describe('Pagination', () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear()
  })

  it('should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination pageIndex={0} totalCount={200} perPage={10} onPageChange={() => {}} />,
    )
    expect(wrapper.getByText('Página 1 de 20')).toBeInTheDocument()
    expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
  })

  // proxima page
  it('should be able to navigation to the next page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', { name: 'Próxima página' })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(1)
  })
  // pagina anterior
  it('should be able to navigation to the previous page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', { name: 'Página anterior' }) // TODO: simula um click no botao

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(4)
  })
  // primeira pagina
  it('should be able to navigation to the first page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', { name: 'Primeira página' }) // TODO: simula um click no botao

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(0)
  })
  // ultima pagina
  it('should be able to navigation to the last page', async () => {
    const user = userEvent.setup()
    const wrapper = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', { name: 'Última página' }) // TODO: simula um click no botao

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(19)
  })
})
