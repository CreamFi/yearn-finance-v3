import { DefaultTheme } from 'styled-components';

import { sharedTheme } from '../default';

const lightTheme: DefaultTheme = {
  ...sharedTheme,
  colors: {
    logo: '#006AE3',

    primary: '#F0F0F0',
    background: '#FFFFFF',
    surface: '#F0F0F0',

    primaryVariant: '#929292',

    secondary: '#000000',
    secondaryVariantA: '#000000',
    secondaryVariantB: '#000000',

    surfaceVariantA: '#E8E8EA',
    surfaceVariantB: '#000000',

    selectionBar: '#000000',

    onPrimaryVariant: '#000000',
    onBackground: '#000000',

    onSurfaceH1: '#FFFFFF',
    onSurfaceH1Contrast: '#FFFFFF',
    onSurfaceH2: '#000000',
    onSurfaceH2Hover: '#FFFFFF',
    onSurfaceSH1: '#888888',
    onSurfaceSH1Hover: '#000000',

    upTrend: '#A8C300',
    downTrend: '#FF005E',

    vaultActionButton: {
      background: 'transparent',
      borderColor: '#000000',
      color: '#000000',
      disabledContrast: '0',

      selected: {
        background: 'transparent',
        borderColor: '#FFFFFF',
        color: '#FFFFFF',
      },
    },

    walletButton: {
      background: '#000000',
      color: '#FFFFFF',
    },

    txModalColors: {
      background: '#FFFFFF',
      backgroundVariant: '#E8E8EA',
      onBackgroundVariant: '#FFFFFF',
      onBackgroundVariantB: '#F0F0F0',
      onBackgroundVariantColor: '#6e6e6e',
      primary: '#00A3FF',
      loading: '#FFA800',
      error: '#FF005E',
      success: '#A8C300',
      text: '#000000',
      textContrast: '#000000',
    },
  },
};

export { lightTheme };
