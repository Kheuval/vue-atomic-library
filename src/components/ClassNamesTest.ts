import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import type { Component } from "vue";

export const runClassNamesTests = (component: Component, tagName: string, options?: any) => {
  test("mount component with a single class", () => {
    const wrapper = mount(component, getOptions("single", options));

    const element = wrapper.get(tagName);

    expect(element.attributes("class")).toBe("test-class");
  });

  test("mount component with multiple classes", () => {
    const wrapper = mount(component, getOptions("multiple", options));

    const element = wrapper.get(tagName);

    expect(element.attributes("class")).toBe("test-class-1 test-class-2");
  });
};

const getOptions = (testType: "single" | "multiple", options?: any) => {
  let localOptions = { ...options };

  if (localOptions && localOptions.props) {
    localOptions.props = {
      classNames: testType === "single" ? "test-class" : ["test-class-1", "test-class-2"],
      ...options.props,
    };
  } else {
    localOptions = {
      props: {
        classNames: testType === "single" ? "test-class" : ["test-class-1", "test-class-2"],
      },
    };
  }

  return localOptions;
};
