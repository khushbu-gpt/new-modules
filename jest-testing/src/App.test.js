import { render,screen } from "@testing-library/react";
import App from "./App";

test("first test",()=>{
  render(<App/>)
  const heading=screen.getByText("khushbu")
  const anchor=screen.getByAltText("logo")
  expect(heading).toBeInTheDocument()
  expect(anchor).toBeInTheDocument()
})


