<template>
  <component :class="classNames" :is="tag">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
import type { ClassNames } from "../AtomPropsTypes";

defineProps<
  ClassNames & {
    tag: string;
  }
>();
</script>
