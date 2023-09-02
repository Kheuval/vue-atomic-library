<template>
  <label :class="classNames" :for="id">
    {{ content }}
  </label>
</template>

<script lang="ts" setup>
import type { ClassNames } from "../AtomPropsTypes";

defineProps<
  ClassNames & {
    id: string;
    content: string;
  }
>();
</script>
