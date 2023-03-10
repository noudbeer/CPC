<!--**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 *-->

<template>
  <div
    class="ps-number"
    :class="{ 'hover-buttons': hoverButtons }"
  >
    <input
      type="number"
      class="form-control"
      :class="{ danger }"
      :value="value"
      placeholder="0"
      @keyup="onKeyup($event)"
      @keydown="onKeydown($event)"
      @focus="focusIn"
      @blur="focusOut($event)"
    >
    <div
      class="ps-number-spinner d-flex"
      v-if="buttons"
    >
      <span
        class="ps-number-up"
        @click="increment"
      />
      <span
        class="ps-number-down"
        @click="decrement"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue';

  export default defineComponent({
    props: {
      value: {
        type: [Number, String],
        default: 0,
      },
      danger: {
        type: Boolean,
        default: false,
      },
      buttons: {
        type: Boolean,
        default: false,
      },
      hoverButtons: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      onKeyup($event: Event): void {
        this.$emit('keyup', $event);
      },
      onKeydown($event: Event): void {
        this.$emit('keydown', $event);
      },
      focusIn(): void {
        this.$emit('focus');
      },
      focusOut($event: Event): void {
        this.$emit('blur', $event);
      },
      increment() {
        const value = Number.isNaN(this.value) ? 0 : Number.parseInt(<string> this.value, 10);
        this.$emit('change', Number.isNaN(value) ? 1 : value + 1);
      },
      decrement(): void {
        const value = Number.isNaN(this.value) ? 0 : Number.parseInt(<string> this.value, 10);
        this.$emit('change', Number.isNaN(value) ? -1 : value - 1);
      },
    },
  });
</script>
