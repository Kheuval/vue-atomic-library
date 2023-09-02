<template>
  <button :class="classNames" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import type { ClassNames } from "../AtomPropsTypes";

defineProps<ClassNames>();

defineEmits<{ click: [void] }>();
</script>
