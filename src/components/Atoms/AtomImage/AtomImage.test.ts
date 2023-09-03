import { expect, test, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import AtomImage from "./AtomImage.vue";
import { runClassNamesTests } from "@/components/ClassNamesTest";

test("mount component", async () => {
  const wrapper = mount(AtomImage, {
    props: {
      src: "logo.png",
      alt: "Logo",
    },
  });

  const img = wrapper.get("img");

  expect(img.attributes("src")).toBe("logo.png");
  expect(img.attributes("alt")).toBe("Logo");
});

runClassNamesTests(AtomImage, "img", { props: { src: "logo.png", alt: "Logo" } });

test("mount fails", () => {
  const spy = vitest.spyOn(global.console, "warn").mockImplementation(() => {});
  mount(AtomImage);

  expect(spy).toHaveBeenCalled();
  expect(spy.mock.calls[0][0]).toContain("[Vue warn]: Missing required prop");
});
