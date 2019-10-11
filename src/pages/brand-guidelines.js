import React from 'react'
import Layout from '../components/Layout'
import Color from '../components/brand-guidelines/Color'
import Logo from '../components/brand/Logo'
import Logomark from '../components/brand/Logomark'
import Wordmark from '../components/brand/Wordmark'
import Display from '../components/brand-guidelines/Display'
import Scale from '../components/brand-guidelines/Scale'
import Font from '../components/brand-guidelines/Font'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { rhythm, scale, options} from '../utils/typography'
import * as brand from '../utils/brand'

class BrandGuidelines extends React.Component {
  render() {
    const colors = brand.COLOR_PRIMARY
    const logoStyles = {
        height: rhythm(5),
        width: rhythm(5),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
    const s = 3;
    return (
      <Layout>
        <Helmet title="Brand Guidelines" />
        
        <h1>Brand Guidelines</h1>

        <h2>Logo</h2>
        <div style={{
           //display: "grid",
           //columnGap: rhythm(1/2),
           //rowGap: rhythm(1/2),
           //gridTemplateColumns: "1fr",
     
        }}>
            <Display><Logo size={1} /></Display>
            <Display><Logo size={1.5} /></Display>
            <Display><Logo size={2} /></Display>
            <Display><Logo size={3} /></Display>
            <Display><Logo size={4} /></Display>
        </div>
        
        <h2>Logomark</h2>
        <div style={{
            display: "grid",
            columnGap: rhythm(1/2),
            rowGap: rhythm(1/2),
            gridTemplateColumns: "1fr 1fr",
     
        }}>
            <Display><Logomark size={s} /></Display>
            <Display color="#000"><Logomark size={s} /></Display>
            <Display><Logomark color="#000" size={s} /></Display>
            <Display color="#000"><Logomark color="#fff" size={s} /></Display>
            <Display><Logomark size={s} color={brand.COLOR_PRIMARY} /></Display>
            <Display><Logomark size={s} color={brand.COLOR_SECONDARY} /></Display>
            <Display><Logomark size={s} color={brand.COLOR_TERTIARY} /></Display>
            <Display><Logomark size={s} color={brand.COLOR_QUARTERLY} /></Display>
        </div>
        
        <h2>Wordmark</h2>
        <div style={{
            display: "grid",
            columnGap: rhythm(1/2),
            rowGap: rhythm(1/2),
            gridTemplateColumns: "1fr 1fr",
     
        }}>
            <Display><Wordmark /></Display>
            <Display color="#000" ><Wordmark color="#fff" /></Display>
            <Display><Wordmark colors={[null, brand.COLOR_PRIMARY]} /></Display>
            <Display><Wordmark colors={[null, brand.COLOR_SECONDARY]} /></Display>
            <Display><Wordmark colors={[null, brand.COLOR_TERTIARY]} /></Display>
            <Display><Wordmark colors={[null, brand.COLOR_QUARTERLY]} /></Display>
            <Display><Wordmark color={brand.COLOR_PRIMARY} /></Display>
            <Display><Wordmark color={brand.COLOR_SECONDARY} /></Display>
            <Display><Wordmark color={brand.COLOR_TERTIARY} /></Display>
            <Display><Wordmark color={brand.COLOR_QUARTERLY} /></Display>
        </div>
        
        <h2>Colors</h2>
        <Color color={options.headerColor}   name="Headers" />
        <Color color={options.bodyColor}     name="Body" />
        <Color color={brand.COLOR_PRIMARY}   name="Primary"   scale="" />
        <Color color={brand.COLOR_SECONDARY} name="Secondary" scale="" />
        <Color color={brand.COLOR_TERTIARY}  name="Tertiary"  scale="" />
        <Color color={brand.COLOR_QUARTERLY} name="Quarterly" scale="" />
        
        <h2>Fonts</h2>
        <Font name="Header Font"
              fontFamily={options.headerFontFamily[0]}
              fontWeight={options.headerWeight}
              fontColor={options.headerColor}
              style={scale(1)} />
        <Font name="Body Font" 
              fontFamily={options.bodyFontFamily[0]}
              fontWeight={options.bodyWeight}
              fontColor={options.bodyColor}
              style={scale(0)} />

        <h2>Scale</h2>
        <Scale />
              
              
        <h2>Test</h2>
              <div style={{
                  display: "grid",
                  columnGap: rhythm(1/2),
                  rowGap: rhythm(1/2),
                  gridTemplateColumns: "1fr 1fr",
     
              }}>  
             <div>   
             <p style={{marginBottom: 0}}>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
              <Logo size={1} />
              
               <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
              </div>
              <div>
              <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
              </div>
              </div>
      </Layout>
    )
  }
}

export default BrandGuidelines

