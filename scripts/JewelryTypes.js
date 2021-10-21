import { getOrderBuilder, getTypes } from "./dataAccess.js"
import { setType } from "./dataAccess.js"
const types = getTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))
        }
    }
    )
    
    export const JewelryTypes = () => {
    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = types.map(type => {
        if (orderBuilder.typeId === type.id) {
            return `<li>
                <input type="radio" name="type" value="${type.id}" checked="checked" /> ${type.type}
            </li>`
        } else {
            return `<li>
                <input type="radio" name="type" value="${type.id}" /> ${type.type}
            </li>`
        }
    })


    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html
}