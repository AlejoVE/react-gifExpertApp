import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../components/AddCategory";

describe("Tests in component  <AddCategory />", () => {
  test("should throw an error if I dont pass  the setCategories property", () => {
    let wrapper = <AddCategory />;

    expect(wrapper).toThrowErrorMatchingSnapshot();
  });
});
