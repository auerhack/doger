// Dropdown
document.addEventListener("mousedown", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("drop-active")
    }

    document.querySelectorAll("[data-dropdown].drop-active").forEach( dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("drop-active")
    })
})
