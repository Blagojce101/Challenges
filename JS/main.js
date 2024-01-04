// I. Iterate through the array of books. For each book, make a list with the book
// title and book author like so: "The Hobbit by J.R.R. Tolkien".

booksData.forEach((book) => {
  const li = document.createElement("li");
  li.innerText = `${book.title} by ${book.author}`;
  list.append(li);
});
const listOfBooks = () => {};

listOfBooks();

// II. - Now use an if/else statement to change the output depending on whether
// you read it yet or not (check if maxPages is equal to onPage). If you read it, list
// it in the format ‘ You already read "The Hobbit" by J.R.R. Tolkien’- in green
// text , and if not, ‘ You still need to read "The Lord of the Rings" by J.R.R.
// Tolkien . ‘ -in red text.'

const listOfReadedBooks = () => {
  booksData.forEach((book) => {
    if (book.maxPages === book.onPage) {
      const li = document.createElement("li");
      li.innerText = `You already have read ${book.title} by ${book.author}`;
      li.style.color = "green";
      readedBooksList.append(li);
    } else {
      const li = document.createElement("li");
      li.innerText = `You steel need to read ${book.title} by ${book.author}`;
      li.style.color = "red";
      readedBooksList.append(li);
    }
  });
};

listOfReadedBooks();

// III. Make a table and populate it with info about the books. Next to every book,
// there should be a progress bar. Calculate the percentage of how far away you
// are in the book and show it through the progress bar.

function createRowInTable() {
  booksData.forEach((book) => {
    const row = document.createElement("tr");
    const cellTitle = document.createElement("td");
    cellTitle.innerText = book.title;

    const cellAuthor = document.createElement("td");
    cellAuthor.innerText = book.author;

    const cellMaxPage = document.createElement("td");
    cellMaxPage.innerText = book.maxPages;

    const cellOnPage = document.createElement("td");
    cellOnPage.innerText = book.onPage;

    const cellProgress = document.createElement("td");
    const progressDiv = document.createElement("div");
    progressDiv.classList.add("progress");
    const progressbar = document.createElement("div");
    progressbar.classList.add("progress-bar");
    progressbar.style.width = `${Math.floor(
      (book.onPage / book.maxPages) * 100
    )}%`;
    progressbar.innerText = `${Math.floor(
      Math.floor((book.onPage / book.maxPages) * 100)
    )}%`;
    progressDiv.append(progressbar);
    cellProgress.append(progressDiv);

    row.append(cellTitle, cellAuthor, cellMaxPage, cellOnPage, cellProgress);
    tbody.append(row);
  });
}

createRowInTable();

// IV. Under the table, make a form to add a new object (or add the values to the
// object through multiple prompts). After clicking submit, the object should be
// automatically added to the table together with the progress bar.

addToList.addEventListener("click", () => {
  const row = document.createElement("tr");
  const cellTitle = document.createElement("td");
  cellTitle.innerText = bookTitle.value;

  const cellAuthor = document.createElement("td");
  cellAuthor.innerText = bookAuthor.value;

  const cellMaxPage = document.createElement("td");
  cellMaxPage.innerText = maxPagesBook.value;

  const cellOnPage = document.createElement("td");
  cellOnPage.innerText = pageOnBook.value;

  const cellProgress = document.createElement("td");
  const progressDiv = document.createElement("div");
  progressDiv.classList.add("progress");
  const progressbar = document.createElement("div");
  progressbar.classList.add("progress-bar");
  progressbar.style.width = `${Math.floor(
    (pageOnBook.value / maxPagesBook.value) * 100
  )}%`;
  progressbar.innerText = `${Math.floor(
    Math.floor((pageOnBook.value / maxPagesBook.value) * 100)
  )}%`;
  progressDiv.append(progressbar);
  cellProgress.append(progressDiv);

  row.append(cellTitle, cellAuthor, cellMaxPage, cellOnPage, cellProgress);
  tbody.append(row);

  bookTitle.value = "";
  bookAuthor.value = "";
  pageOnBook.value = "";
  maxPagesBook.value = "";
});
