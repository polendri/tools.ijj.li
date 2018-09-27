<template>
  <v-layout
    justify-start
    row
    wrap
  >
    <v-flex xs12>
      <tool-header
        :title="$t('tools.calculator.title')"
        :description-html="$t('tools.calculator.descriptionHtml')"
      />
    </v-flex>
    <v-flex xs12>
      <v-textarea
        :label="$t('tools.calculator.expressionLabel')"
        :value="expression"
        :error-messages="(showError && error) ? [error] : []"
        box
        spellcheck="false"
        @input="onExpressionChange"
      />
    </v-flex>
    <v-flex
      xs12
      sm6
      md4
    >
      <v-list-tile>
        <v-list-tile-content>{{ $t('tools.calculator.resultLabel') }}</v-list-tile-content>
        <v-list-tile-action>{{ result }}</v-list-tile-action>
      </v-list-tile>
    </v-flex>
  </v-layout>
</template>

<script>
import { debounce } from 'lodash';
import { eval as mathJsEval } from 'mathjs';

import ToolHeader from '~/components/ToolHeader';

export default {
  components: { ToolHeader },
  data() {
    return {
      error: null,
      expression: '',
      showError: false,
      result: '',
    };
  },
  methods: {
    onExpressionChange(expr) {
      this.expression = expr;
      var result;

      try {
        result = mathJsEval(this.expression);
        this.error = null;
      } catch(e) {
        this.error = e.message;
      }

      if (typeof result === 'function') {
        this.error = this.$t('tools.calculator.functionResultErrorMessage');
      } else if (typeof result === 'object') {
        this.error = this.$t('tools.calculator.unitResultErrorMessage');
      }

      if (this.error === null) {
        if (result === null || typeof result === 'undefined') {
          this.result = '';
        } else if (typeof result === 'number') {
          this.result = result.toLocaleString(undefined, { maximumFractionDigits: 20 });
        } else {
          this.result = result;
        }

        this.showError = false;
      } else {
        this.result = '';
        this.setShowError();
      }
    },
    setShowError: debounce(function() {
      if (this.error) {
        this.showError = true;
      }
    }, 500),
  },
}
</script>
