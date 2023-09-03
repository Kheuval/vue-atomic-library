import { expect, test, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import AtomTitle from "./AtomTitle.vue";
import { runClassNamesTests } from "@/components/ClassNamesTest";

test("mount component with a slot", () => {
  const wrapper = mount(AtomTitle, {
    props: {
      tag: "h1",
    },
    slots: {
      default: "Title",
    },
  });

  const title = wrapper.get("h1");

  expect(title.html()).toContain("Title");
  expect(title.element.tagName).toBe("H1");
});

runClassNamesTests(AtomTitle, "h1", { props: { tag: "h1" } });

test("mount fails", () => {
  const spy = vitest.spyOn(global.console, "warn").mockImplementation(() => {});
  mount(AtomTitle);

  expect(spy).toHaveBeenCalled();
  expect(spy.mock.calls[0][0]).toContain("[Vue warn]: Missing required prop");
});
