import { mount } from "@vue/test-utils";
import { expect, test, vitest } from "vitest";
import AtomLabel from "./AtomLabel.vue";
import { runClassNamesTests } from "@/components/ClassNamesTest";

test("mount component", async () => {
  const wrapper = mount(AtomLabel, {
    props: {
      id: "username",
      content: "Identifiant",
    },
  });

  expect(wrapper.get("label").attributes("for")).toBe("username");
  expect(wrapper.html()).toContain("Identifiant");
});

runClassNamesTests(AtomLabel, "label", { id: "username", content: "Identifiant" });

test("mount fails", () => {
  const spy = vitest.spyOn(global.console, "warn").mockImplementation(() => {});
  mount(AtomLabel);

  expect(spy).toHaveBeenCalled();
  expect(spy.mock.calls[0][0]).toContain("[Vue warn]: Missing required prop");
});
