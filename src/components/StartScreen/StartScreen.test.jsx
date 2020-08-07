import React from "react"
import { shallow } from "enzyme"
import StartScreen from "./StartScreen"
// setup file
import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({ adapter: new Adapter() })

describe("<StartScreen />", () => {
  it("renders 1 Questation logo", () => {
    const wrapper = shallow(<StartScreen />)
    expect(wrapper.find(".ss__logo")).to.have.lengthOf(1)
  })
})
