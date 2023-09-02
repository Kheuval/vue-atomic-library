<template>
  <RouterLink :class="classNames" :to="to" @click="$emit('click')">
    <slot></slot>
  </RouterLink>
</template>

<script lang="ts" setup>
import type { ClassNames } from "../AtomPropsTypes";

defineProps<
  ClassNames & {
    to: string;
  }
>();

defineEmits<{ click: [void] }>();
</script>
