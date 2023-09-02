import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import AtomButton from "./AtomButton.vue";

test("mount component with a slot", () => {
  const wrapper = mount(AtomButton, {
    slots: {
      default: "Button content",
    },
  });

  const button = wrapper.get("button");

  expect(button.html()).toContain("Button content");
});

test("mount component with a single class", () => {
  const wrapper = mount(AtomButton, {
    props: {
      classNames: "button-class",
    },
  });

  const button = wrapper.get("button");

  expect(button.attributes("class")).toBe("button-class");
});

test("mount component with a multiple classes", () => {
  const wrapper = mount(AtomButton, {
    props: {
      classNames: ["button-class-1", "button-class-2"],
    },
  });

  const button = wrapper.get("button");

  expect(button.attributes("class")).toBe("button-class-1 button-class-2");
});

test("emit click event", async () => {
  const wrapper = mount(AtomButton);

  await wrapper.get("button").trigger("click");

  expect(wrapper.emitted("click")).toBeTruthy();
});
