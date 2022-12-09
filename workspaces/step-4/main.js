function attachEventHandlers(name) {
    let module_id = "module-" + name
    let info_id = "info-" + name
    let module_element = document.getElementById(module_id)
    let info_element = document.getElementById(info_id)

    module_element.addEventListener("click", (event) => {
        let selectedModuleElement = document.getElementsByClassName("module selected")
        if (selectedModuleElement.length > 0)
            selectedModuleElement[0].classList.remove("selected")

        event.target.closest(".module").classList.add("selected")

        let visibleInfoElement = document.getElementsByClassName("info show")
        if (visibleInfoElement.length > 0)
            visibleInfoElement[0].classList.remove("show")
        info_element.classList.add("show")
    })
}

names = [
    "duplicate",
]

names.forEach(name => attachEventHandlers(name))