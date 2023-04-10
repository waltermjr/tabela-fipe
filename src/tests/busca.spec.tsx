import { render, fireEvent, screen, within } from "@testing-library/react"
import '@testing-library/jest-dom'
import Busca from "../pages/busca"

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

const renderBusca = async() => {

  const mockRequest = [
    {
      codigo: "1252",
      nome: "teste"      
    }
  ]
  
  return await render(<Busca result={mockRequest}/>);
}

describe("Test Busca", () => {
  test("Should not render year autocomplete", async () => {
    await renderBusca()

    expect(screen.queryByTestId("year-input")).toBeNull()
  })

  test("Should render brand and model autocomplete", async () => {
    await renderBusca()
    expect(screen.getByTestId("brand-input")).toBeInTheDocument()
    expect(screen.getByTestId("model-input")).toBeInTheDocument()
  })
  
  test("Should model dropdonw is disabled", async () => {
    await renderBusca()
    const dropDownBrand = await screen.findByTestId('model-input')
    const Input = within(dropDownBrand).getByRole('combobox')
    expect(Input).toBeDisabled()
  })
})