import Typography from "typography";
import ms from "modularscale";
import { MIN_DEFAULT_MEDIA_QUERY } from "typography-breakpoint-constants";
import {
  lighten,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_TERTIARY,
  COLOR_QUARTERLY,
  COLOR_BACKGROUND,
} from "./brand";

//const newFontSize = (value, ratio) => {
//    const baseFont = options.baseFontSize.slice(0, -2)
//    return `${ms(value, options.scaleRatio) * baseFont}px`
//}

const theme = {
  //scaleRatio: 2,
  baseFontSize: "16px",
  baseLineHeight: 1.6,
  googleFonts: [
    //{
    //  name: 'Open Sans',
    //  styles: ['400', '400i', '700', '700i'],
    //},
    {
      name: "Merriweather Sans",
      styles: ["300", "300i", "400", "400i", "700", "700i"],
    },
    //{
    //  name: 'Merriweather',
    //  styles: ['300', '300i', '400', '400i', '700', '700i'],
    //},
    //
    //{
    //  name: 'Raleway',
    //  styles: ['300'],
    //},
    //
    //{
    //  name: 'Alegreya Sans',
    //  styles: ['300', '300i', '400', '400i', '700', '700i'],
    //},
    //
    //{
    //  name: 'Asap',
    //  styles: ['400', '400i', '700', '700i'],
    //},
    //
  ],
  headerFontFamily: ["Merriweather Sans", "sans-serif"], //['Open Sans', 'sans-serif'],
  bodyFontFamily: ["Merriweather Sans", "sans-serif"],
  bodyColor: "#333",
  headerColor: "#000",
  headerWeight: 400,
  bodyWeight: 300,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    const textify = arr => `${JSON.stringify(arr[0])}, ${arr[1]}`;
    const small = scale(-1 / 5);
    const xSmall = scale(-1.5 / 5);
    const bodyFont = textify(options.bodyFontFamily);
    const bodySerifFont = textify(["Merriweather", "serif"]);
    const aside = {
      fontFamily: bodyFont,
      fontWeight: options.bodyWeight,
      fontStyle: "italic",
    };
    const alternate = {
      ...adjustFontSizeTo(small),
      fontFamily: bodySerifFont,
      fontWeight: 400,
    };
    const body = {
      fontFamily: bodyFont,
      fontWeight: options.bodyWeight,
      fontStyle: "normal",
    };

    return {
      h1: {
        ...scale(1),
        color: "#000",
        marginBottom: rhythm(1),
        //textTransform: "uppercase"
      },
      h2: {
        ...scale(3 / 5),
        marginTop: rhythm(2),
      },
      h3: {
        ...scale(2 / 5),
        marginBottom: 0,
      },
      h4: {
        ...scale(0),
        marginBottom: 0,
      },
      h5: {
        ...small,
        marginBottom: 0,
      },
      h6: {
        ...xSmall,
        marginBottom: 0,
      },
      //
      //".markdown > p:first-of-type": {
      //   fontFamily: textify( ['Merriweather', 'serif']),
      //  ...scale(1),
      //   // fontWeight: 400,
      //},
      "a, a:visited": {
        color: COLOR_PRIMARY,
        fontWeight: 400,
        textDecoration: "underline",
      },
      //"a:visited": {
      //  color: lighten(COLOR_PRIMARY, 1),
      //},
      "a:hover,a:active": {
        color: COLOR_PRIMARY,
        backgroundColor: lighten(COLOR_PRIMARY, 3),
        // color: options.bodyColor,
      },
      blockquote: {
        paddingTop: rhythm(1),
        paddingBottom: rhythm(1),
        backgroundColor: lighten(COLOR_PRIMARY, 5),
        marginLeft: rhythm(-3 / 4),
        paddingLeft: rhythm(3 / 4 - 22 / 100),
        borderLeft: `${rhythm(22 / 100)} solid ${lighten(COLOR_PRIMARY, 2)}`,
        marginRight: rhythm(-3 / 4),
        paddingRight: rhythm(3 / 4),
        ...aside,
      },
      cite: {
        ...body,
      },
      figure: {
        textAlign: "center",
      },
      small: {
        ...small,
      },
      figcaption: {
        ...small,
        ...aside,
        color: "#999",
        display: "block",
        textAlign: "center",
      },
      "figure img": {
        maxWidth: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 0,
      },
      ".contrast": {
        ...small,
        ...aside,
        //fontStyle: "normal",
        //color: "#333",
        // backgroundColor: "#ccc",
        margin: `${rhythm(1)} ${rhythm(-3 / 4)}`,
        padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
        backgroundColor: lighten(COLOR_PRIMARY, 4),
      },
      ".contrast header": {
        fontStyle: "normal",
        display: "block",
        marginBottom: rhythm(1),
        columnGap: 0,
        gridTemplateColumns: "none",
      },
      ".contrast p:last-of-type": {
        marginBottom: 0,
      },
      header: {
        display: "grid",
        columnGap: rhythm(1 / 2),
        gridTemplateColumns: "1fr 8fr",
        //color: "#fff",
      },
      "header h1": {
        //...scale(0),
        fontWeight: 700,
        //color: "#fff",
        marginRight: rhythm(1),
        marginLeft: rhythm(1),
      },
      "header h1 a, header h1 a:hover, header h1 a:active, header h1 a:visited": {
        textTransform: "none",
        backgroundColor: "transparent",
      },
      "header h1 span:first-of-type": {
        fontWeight: 300,
      },
      footer: {
        color: "#999",
        ...small,
      },
      html: {
        overflow: "auto",
      },
      [MIN_DEFAULT_MEDIA_QUERY]: {
        h1: {
          //...scale(3),
          marginBottom: rhythm(1),
        },
        h2: {
          //...scale(2),
        },
        h3: {
          //...scale(1),
        },
        figure: {
          display: "grid",
          columnGap: rhythm(1 / 2),
          gridTemplateColumns: "100% 200px",
        },
        figcaption: {
          ...xSmall,
          padding: `0 ${rhythm(1 / 2)}`,
          textAlign: "left",
        },
        blockquote: {
          marginLeft: 0,
          paddingLeft: rhythm(1 - 22 / 100),
          borderLeft: `${rhythm(22 / 100)} solid ${lighten(COLOR_PRIMARY, 2)}`,
          marginRight: 0,
          paddingRight: rhythm(1),
        },
      },
    };
  },
};

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export const { scale, rhythm, options } = typography;
export default typography;
