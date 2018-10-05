export default {
  /* Vuetify translations */
  dataIterator: {
    rowsPerPageText: 'Items per page:',
    rowsPerPageAll: 'All',
    pageText: '{0}-{1} of {2}',
    noResultsText: 'No matching records found',
    nextPage: 'Next page',
    prevPage: 'Previous page'
  },
  dataTable: {
    rowsPerPageText: 'Rows per page:'
  },
  noDataText: 'No data available',
  /* */

  appName: 'ijj.li Tools',
  toolGroups: {
    math: 'Math',
    programming: 'Programming',
    writing: 'Writing',
  },
  tools: {
    calculator: {
      title: 'Calculator',
      descriptionHtml: `<p>Simple text-based calculator.</p>
        <p>Handles arithmetic operators (<var>+</var>, <var>*</var>),
        common functions (<var>sqrt(2)</var>, <var>4^2</var>, <var>cos(45 deg)</var>),
        and constants like <var>pi</var> and <var>e</var>.</p>`,
      expressionLabel: 'Expression',
      functionResultErrorMessage: 'Unexpected end of expression',
      unitResultErrorMessage: 'Unexpected symbol',
      resultLabel: 'Result',
    },
    home: {
      description: 'ijj.li Tools is an assortment of handy utilities. Pick one from the menu to get started.',
    },
    radixConverter: {
      title: 'Radix (Base) Converter',
      descriptionHtml: '<p>Converts a number from one <a href="https://en.wikipedia.org/wiki/Radix">base</a> to another.</p>',
      inputLabel: 'Number',
      outputLabel: 'Result',
      radixLabel: 'Radix',
      binaryRadixName: 'binary',
      decimalRadixName: 'decimal',
      hexadecimalRadixName: 'hexadecimal',
      invalidInputErrorMessage: 'Number must be valid in the specified radix',
    },
    uriEncoder: {
      title: 'URI Encoder/Decoder',
      descriptionHtml: `<p>Performs <a href="https://en.wikipedia.org/wiki/Percent-encoding">URI encoding</a> (also known as URL encoding or percent-encoding).</p>
        <p>Encode or decode values by pasting them in the appropriate box.</p>`,
      decodedValueLabel: 'Unencoded Value',
      decodedValueHint: 'Paste the text you\'d like to encode',
      encodedValueLabel: 'URI-encoded Value',
      encodedValueHint: 'Paste the text you\'d like to decode',
      encodedValueInvalid: 'Please provide a valid URI-encoded value for decoding',
    },
    wordCount: {
      title: 'Word/Character Count',
      inputLabel: 'Text to count',
      characterCountLabel: 'Character count:',
      wordCountLabel: 'Word count:',
    },
  },
}
