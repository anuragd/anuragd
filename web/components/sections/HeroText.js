import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './HeroText.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'


function HeroText (props) {
  const {heading, tagline, text, style} = props

  return (
    <div className={styles.root} style={style}>
      <div className={styles.content}>
        <h1 className={styles.title}>{heading}</h1>
        <h4 className={styles.tagline}>{tagline}</h4>
        <div className={styles.text}>{text && <SimpleBlockContent blocks={text} />}</div>
      </div>
    </div>
  )
}

HeroText.propTypes = {
  heading: PropTypes.string,
  tagline: PropTypes.string,
  text: PropTypes.array
}

export default HeroText
