import { getMetals, getOrderBuilder, setMetal } from "./dataAccess.js"
const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
    )
    
    export const Metals = () => {
    const orderBuilder = getOrderBuilder()
    let html = "<ul>"
    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        if (orderBuilder.metalId === metal.id) {
            html += `<li>
                <input type="radio" name="metal" value="${metal.id}" checked="checked" /> ${metal.metal}
            </li>`
        } else {
            html += `<li>
                <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
            </li>`
        }
    }

    html += "</ul>"

    return html
}

 