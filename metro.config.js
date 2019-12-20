/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
      resolver: {
        // 'ts' must be here to work with some deps written in TS, e.g. @react-native-community/netinfo
        sourceExts: ['jsx', 'js', 'ts'],
      },
    }),
  },
};
