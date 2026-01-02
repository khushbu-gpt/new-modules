import { render } from "@testing-library/react"
import { screen } from "@testing-library/react"
import { fireEvent } from "@testing-library/react"
import App from "../App"
test("check for input",()=>{
  render(<App/>)
  const input=screen.getByRole("textbox")
  fireEvent.change(input,{target:{value:"abc"}})
  expect(input.value).toBe("abc")
})

