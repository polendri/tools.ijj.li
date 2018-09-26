export default {
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

  appName: 'ijj.li Tools',
  copyright: '© 2018 Paul Hendry',
  toolGroups: {
    programming: 'Programming',
  },
  tools: {
    home: {
      description: 'ijj.li Tools is an assortment of handy utilities. Pick one from the menu to get started.',
    },
    uriEncoder: {
      title: 'URI Encoder/Decoder',
      descriptionHtml: `<p><a href="https://en.wikipedia.org/wiki/Percent-encoding">URI encoding</a>, also known as URL encoding or percent-encoding, is a way to encode special characters in URLs that would otherwise be forbidden.</p>
        <p>Encode or decode values by pasting them in the appropriate box.</p>`,
      decodedValueLabel: 'Unencoded Value',
      decodedValueHint: 'Paste the text you\'d like to encode',
      encodedValueLabel: 'URI-encoded Value',
      encodedValueHint: 'Paste the text you\'d like to decode',
      encodedValueInvalid: 'Please provide a valid URI-encoded value for decoding',
    },
  },
}
