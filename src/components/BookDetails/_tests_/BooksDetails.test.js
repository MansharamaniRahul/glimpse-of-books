import BookDetails from "../BookDetails";
import { shallow, configure } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import { Provider } from "mobx-react";
import BooksStore from "../../../stores/Books/BooksStore";
configure({ adapter: new Adapter() });
const testProps = {
  id: "1",
  bookTitle: "xyz",
  imageURL:
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2018%2F05%2FUntitled-design-23-796x417.png&imgrefurl=https%3A%2F%2Fthenextweb.com%2Ftq%2F2018%2F05%2F22%2Ftactics-driving-business-growth%2F&docid=U0DMo3my-pUdxM&tbnid=9nrfL9UNpYJY2M%3A&vet=10ahUKEwi6zIuX97PhAhWEknAKHal1CDUQMwhcKAAwAA..i&w=796&h=417&bih=821&biw=1440&q=grow&ved=0ahUKEwi6zIuX97PhAhWEknAKHal1CDUQMwhcKAAwAA&iact=mrc&uact=8",

  imageURLSmall:
    "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2018%2F05%2FUntitled-design-23-796x417.png&imgrefurl=https%3A%2F%2Fthenextweb.com%2Ftq%2F2018%2F05%2F22%2Ftactics-driving-business-growth%2F&docid=U0DMo3my-pUdxM&tbnid=9nrfL9UNpYJY2M%3A&vet=10ahUKEwi6zIuX97PhAhWEknAKHal1CDUQMwhcKAAwAA..i&w=796&h=417&bih=821&biw=1440&q=grow&ved=0ahUKEwi6zIuX97PhAhWEknAKHal1CDUQMwhcKAAwAA&iact=mrc&uact=8",

  rating: "3",

  author: "abc",

  pubYear: "1990",

  pubMonth: "2",

  pubDate: "2"
};

describe("<BookDetails />", () => {
  it("matches the snapshot", () => {
    const tree = shallow(
      <Provider Bookstore={BooksStore}>
        <BookDetails {...testProps} />
      </Provider>
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});
