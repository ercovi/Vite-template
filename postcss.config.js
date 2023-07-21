import atImport from 'postcss-import';
import pxtorem from 'postcss-pxtorem';
import autoprefixer from 'autoprefixer';
import cssnanoPlugin from 'cssnano';
import atImport from 'postcss-import';
export default {
  plugins: [
    pxtorem({
      replace: false,
      rootValue: 16, // base font size in pixels
      propList: [
          '*', // convert all properties that include a pixel value
          '!border',
          '!border-width',
          '!border-radius',
          '!box-shadow',
          '!translate',
      ], 
    }),
    autoprefixer ({
      cascade: false,
    }),
    cssnanoPlugin({

    }),
    atImport({
      path: ['assets/css/'];
    })
  ],
  
};