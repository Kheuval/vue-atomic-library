import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import type { Component } from "vue";

export const runClassNamesTests = (component: Component, tagName: string, props?: any) => {
  test("mount component with a single class", () => {
    const wrapper = mount(component, {
      props: {
        classNames: "test-class",
        ...props,
      },
    });

    const element = wrapper.get(tagName);

    expect(element.attributes("class")).toBe("test-class");
  });

  test("mount component with a multiple classes", () => {
    const wrapper = mount(component, {
      props: {
        classNames: ["test-class-1", "test-class-2"],
        ...props,
      },
    });

    const element = wrapper.get(tagName);

    expect(element.attributes("class")).toBe("test-class-1 test-class-2");
  });
};
