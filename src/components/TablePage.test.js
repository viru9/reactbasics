const TablePage = require("./TablePage")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new TablePage.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
