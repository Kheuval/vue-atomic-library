import { expect, test, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import AtomImage from "./AtomImage.vue";

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

test("mount component with a single class", () => {
  const wrapper = mount(AtomImage, {
    props: {
      classNames: "image-class",
      src: "logo.png",
      alt: "Logo",
    },
  });

  const img = wrapper.get("img");

  expect(img.attributes("class")).toBe("image-class");
});

test("mount component with a multiple classes", () => {
  const wrapper = mount(AtomImage, {
    props: {
      classNames: ["image-class-1", "image-class-2"],
      src: "logo.png",
      alt: "Logo",
    },
  });

  const img = wrapper.get("img");

  expect(img.attributes("class")).toBe("image-class-1 image-class-2");
});

test("mount fails", () => {
  const spy = vitest.spyOn(global.console, "warn").mockImplementation(() => {});
  mount(AtomImage);

  expect(spy).toHaveBeenCalled();
  expect(spy.mock.calls[0][0]).toContain("[Vue warn]: Missing required prop");
});
