<template>
  <v-layout wrap>
    <v-flex xs12>
      <tool-header
        :title="$t('tools.uriEncoder.title')"
        :description-html="$t('tools.uriEncoder.descriptionHtml')"
      />
    </v-flex>
    <v-flex xs12>
      <v-textarea
        :hint="$t('tools.uriEncoder.decodedValueHint')"
        :label="$t('tools.uriEncoder.decodedValueLabel')"
        :value="decoded.value"
        box
        @input="onDecodedValueChange"
      />
    </v-flex>
    <v-flex xs12>
      <v-textarea
        :hint="$t('tools.uriEncoder.encodedValueHint')"
        :label="$t('tools.uriEncoder.encodedValueLabel')"
        :rules="[() => encoded.valid || $t('tools.uriEncoder.encodedValueInvalid')]"
        :value="encoded.value"
        box
        @input="onEncodedValueChange"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import ToolHeader from '~/components/ToolHeader';

export default {
  components: { ToolHeader },
  data() {
    return {
      decoded: {
        value: '',
      },
      encoded: {
        value: '',
        valid: true,
      },
    };
  },
  methods: {
    onDecodedValueChange(decodedValue) {
      this.decoded.value = decodedValue;
      this.encoded.valid = true;
      this.encoded.value = encodeURIComponent(decodedValue);
    },
    onEncodedValueChange(encodedValue) {
      this.encoded.value = encodedValue;
      this.decoded.valid = true;

      try {
        this.decoded.value = decodeURIComponent(encodedValue);
        this.encoded.valid = true;
      } catch {
        this.decoded.value = '';
        this.encoded.valid = false;
      }
    },
  },
}
</script>
