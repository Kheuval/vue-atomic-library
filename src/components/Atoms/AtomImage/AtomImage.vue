<template>
  <img :class="classNames" :src="src" :alt="alt" />
</template>

<script lang="ts" setup>
import type { ClassNames } from "../AtomPropsTypes";

defineProps<
  ClassNames & {
    src: string;
    alt: string;
  }
>();
</script>
