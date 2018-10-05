<template>
  <v-layout wrap>
    <v-flex xs12>
      <tool-header
        :title="$t('tools.radixConverter.title')"
        :description-html="$t('tools.radixConverter.descriptionHtml')"
      />
    </v-flex>
    <v-flex
      xs7
      md3
    >
      <v-text-field
        v-model="$v.inputValue.$model"
        :label="$t('tools.radixConverter.inputLabel')"
        :error-messages="inputValueErrors"
      />
    </v-flex>
    <v-flex
      xs5
      md3
    >
      <v-select
        v-model="inputRadix"
        :label="$t('tools.radixConverter.radixLabel')"
        :items="radixOptions"
        dense
      />
    </v-flex>
    <v-flex
      xs7
      md3
    >
      <v-text-field
        :label="$t('tools.radixConverter.outputLabel')"
        :value="outputValue"
        readonly
      />
    </v-flex>
    <v-flex
      xs5
      md3
    >
      <v-select
        v-model="outputRadix"
        :label="$t('tools.radixConverter.radixLabel')"
        :items="radixOptions"
        dense
      />
    </v-flex>
  </v-layout>
</template>

<script>
import { helpers } from 'vuelidate/lib/validators'

import ToolHeader from '~/components/ToolHeader';

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function validNumber(n, radix) {
  return !helpers.req(n) ||
    n.toUpperCase()
      .split('')
      .every((c) => {
        var index = DIGITS.indexOf(c);
        return index >= 0 && index < radix;
      });
}

export default {
  components: { ToolHeader },
  data() {
    return {
      inputValue: '',
      inputRadix: 10,
      outputRadix: 16,
    };
  },
  computed: {
    inputValueErrors() {
      if (!this.$v.inputValue.$dirty || this.$v.inputValue.validNumber) {
        return [];
      } else {
        return [this.$t('tools.radixConverter.invalidInputErrorMessage')];
      }
    },
    outputValue() {
      if (this.$v.inputValue.$error || this.inputValue === '') {
        return '';
      } else {
        return parseInt(this.inputValue, this.inputRadix).toString(this.outputRadix);
      }
    },
    radixOptions() {
      var results = [];

      for (var i = 2; i <= 36; i++) {
        if (i === 2) {
          results.push({ text: `2 (${this.$t('tools.radixConverter.binaryRadixName')})`, value: 2 });
        } else if (i === 10) {
          results.push({ text: `10 (${this.$t('tools.radixConverter.decimalRadixName')})`, value: 10 });
        } else if (i === 16) {
          results.push({ text: `16 (${this.$t('tools.radixConverter.hexadecimalRadixName')})`, value: 16 });
        } else {
          results.push({ text: i.toString(), value: i });
        }
      }

      return results;
    },
  },
  validations: {
    inputValue: {
      validNumber: (v, vm) => validNumber(v, vm.inputRadix),
    },
  },
}
</script>
