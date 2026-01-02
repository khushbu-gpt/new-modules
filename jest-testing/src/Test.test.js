import { fireEvent, render,screen } from "@testing-library/react";
import App from "./App";

// test("first test",()=>{
//   render(<App/>)
//   const heading=screen.getByText("khushbu")
//   const anchor=screen.getByAltText("logo")
//   expect(heading).toBeInTheDocument()
//   expect(anchor).toBeInTheDocument()
// })

test("Input Test",()=>{
  render(<App/>)
  const checkInput=screen.getByRole("textbox")
  const checkPlaceholder=screen.getByPlaceholderText(/Enter Name/i)
  expect(checkInput).toBeInTheDocument()
  expect(checkPlaceholder).toBeInTheDocument()
  expect(checkPlaceholder).toHaveAttribute("name","name")
}) 

// describe.skip("Group Test",()=>{
// test("Input Test",()=>{
//   render(<App/>)
//   const checkInput=screen.getByRole("textbox")
//  expect(checkInput).toBeInTheDocument()
// });

// test("Input Test1",()=>{
//   render(<App/>)
//   const checkInput=screen.getByRole("textbox")
//  expect(checkInput).toBeInTheDocument()
// })
// })

// describe.only("Group Test2",()=>{
// test("Input Test",()=>{
//   render(<App/>)
//   const checkInput=screen.getByRole("textbox")
//  expect(checkInput).toBeInTheDocument()
// });

// test("Input Test1",()=>{
//   render(<App/>)
//   const checkInput=screen.getByRole("textbox")
//  expect(checkInput).toBeInTheDocument()
// })
// describe("Nesting Test",()=>{
// test("Input Test",()=>{
//   render(<App/>)
//   const checkInput=screen.getByRole("textbox")
//  expect(checkInput).toBeInTheDocument()
// });

// test("Input Test1",()=>{
//   render(<App/>)
//   const checkInput=screen.getByRole("textbox")
//  expect(checkInput).toBeInTheDocument()
// })
// })
// })



// test("check for input",()=>{
//   render(<App/>)
//   const input=screen.getByRole("textbox")
//   fireEvent.change(input,{target:{value:"abc"}})
//   expect(input.value).toBe("abc")
// })


// test("testing for button",()=>{
//   render(<App/>)
//   const button=screen.getByRole("button")
//   fireEvent.click(button)
//   expect(screen.getByText("Hello")).toBeInTheDocument()
// })


test("testing for button",()=>{
  render(<App/>)
  const button=screen.getByRole("button")
  fireEvent.click(button)
  expect(screen.getByText("Hello")).toBeInTheDocument()
})


