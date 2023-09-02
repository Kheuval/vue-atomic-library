import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import AtomButton from "./AtomButton.vue";
import { runClassNamesTests } from "@/components/ClassNamesTest";

test("mount component with a slot", () => {
  const wrapper = mount(AtomButton, {
    slots: {
      default: "Button content",
    },
  });

  const button = wrapper.get("button");

  expect(button.html()).toContain("Button content");
});

runClassNamesTests(AtomButton, "button");

test("emit click event", async () => {
  const wrapper = mount(AtomButton);

  await wrapper.get("button").trigger("click");

  expect(wrapper.emitted("click")).toBeTruthy();
});
