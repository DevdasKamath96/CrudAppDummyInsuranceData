/* DOMContentLoaded loads the content without waiting for images and stylesheet to finish loading */
document.addEventListener("DOMContentLoaded", () => {
    /* Search every single input field and run the function for each input fields */
  document.querySelectorAll(".search-input").forEach((inputField) => {
    /* Go to the closest table and select all the tr from tbody i.e it stores the data */
    const tableRows = inputField.closest("table").querySelectorAll("tbody  tr");
    /* This is to determine which index of the cell which needs to be searched */
    const headerCell = inputField.closest("th");
    /* This is to select all the table headers */
    const otherHeaderCells = inputField.closest("tr").querySelectorAll("th");
    /* This is to retrieve the index of the cell on basis of which searching will work. */
    const columnIndex = Array.from(otherHeaderCells).indexOf(headerCell);

    const searchableCells = Array.from(tableRows)
      .map(row => row.querySelectorAll("td")[columnIndex]);

      /* Listen for input events */
      inputField.addEventListener("input", () => {
        /* To achieve case-insensitive searching we are converting the search values to lower case */
        const searchQuery = inputField.value.toLowerCase();

        for (const tableCell of searchableCells) {
          const row = tableCell.closest("tr");
          const value = tableCell.textContent.toLowerCase().replace(",", "");

          row.style.visibility = null;

          if (value.search(searchQuery) === -1) {
            row.style.visibility = "collapse";
          }
        }
      });
  });
});