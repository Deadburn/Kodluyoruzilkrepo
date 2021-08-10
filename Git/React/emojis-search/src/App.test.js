import { render, screen } from '@testing-library/react';

import userEvent from "@testing-library/user-event";
import App from './App'
import Header from './components/Header/Header';


describe("Emoji tests", () => {
  let headerElement, input;

  beforeEach(() => {
    render(<App />)
    
    input = screen.getByLabelText("Text")
  })

  test("Header Render edilmeli", () => {
    headerElement = screen.getByText(/Emoji Search/i)
    expect(headerElement).toBeInTheDocument();
  })

  test("Uygulama açılır açılmaz emoji listesinin renderi", () => {
    headerElement = screen.getByText(/100/i)
    expect(headerElement).toBeInTheDocument();
  })

  test("Arama yapılması işlemi düzgün çalışmalı", () => {
    const name = "100"
    userEvent.type(input, name)

    expect(screen.getByText(name)).toBeInTheDocument
  })

})


// test('renders', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
