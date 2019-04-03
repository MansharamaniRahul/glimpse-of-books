import BooksStore from "./BooksStore";

describe("<BooksStore />", () => {
  const path = "/test";
  const sampleData = {
    GoodreadsResponse: {
      search: {
        results: {
          work: [
            {
              best_book: {
                id: { _text: "12" },
                title: { _text: "Demo Test" },
                image_url: { _text: "Demo Test" },
                small_image_url: { _text: "Demo Test" },
                author: { name: { _text: "Demo Test" } }
              },
              average_rating: { _text: "2" },
              original_publication_year: { _text: "1991" },
              original_publication_month: { _text: "1" },
              original_publication_day: { _text: "19" }
            }
          ]
        }
      }
    }
  };
  const bookDesc = {
    name: "Demo",
    author: "XYZ"
  };
  it("sets error code ", () => {
    BooksStore.setErrorCode("500");
    expect(BooksStore.errorCode).toBe("500");
  });
  it("sets book list ", () => {
    BooksStore.setBooksList(JSON.stringify(sampleData));
    expect(BooksStore.booksList[0]).toEqual(sampleData);
  });
  it("sets book desc ", () => {
    BooksStore.setSelectedBookDesc(JSON.stringify(bookDesc));
    expect(BooksStore.selectedBookDesc).toEqual(bookDesc);
  });
});
