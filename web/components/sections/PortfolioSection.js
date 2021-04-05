import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './PortfolioSection.module.css'
import client from '../../client'
import groq from 'groq'
import SimpleBlockContent from '../SimpleBlockContent'
import project from '../../../studio/schemas/documents/project'
import { render } from 'react-dom'

const builder = imageUrlBuilder(client)

class PortfolioSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: null
    }
  }

  urlFor(source) {
    let test = builder.image(source)
    console.log(test)
    return builder.image(source)
  }
  
  componentDidMount() {
    if(this.props.projects) {
      // client.getDocuments(this.props.projects.map(p => p._ref)).then(results => {
      //   console.log(this.props.projects, results)
      // })
      let projectRefs = this.props.projects.map(p => p._ref)
      let query = groq`*[_type == "project" && _id in $projects]{_id,title,client,overview,baseColor,"imageUrl":heroImage.asset->url}`
      client.fetch(query,{projects: projectRefs}).then(results => {
        this.setState({projects: results})
      });
    }
  }

  render() {
    let {projects} = this.state
    return(
      <div className={styles.root}>
        {!projects && <div className={styles.loader}>Loading...</div>}
        {projects && projects.map(project =>
          <div key={project._id} className={styles.project_container} style={project.imageUrl && {backgroundImage: `url(${project.imageUrl})`, backgroundColor:"#"+project.baseColor}}>
            <div className={styles.project_title}>{project.title}</div>
            <div className={styles.client}>{project.client}</div>
            <div className={styles.overview}>{project.overview}</div>
          </div>  
        )}
      </div>
    )
  }

}
// function PortfolioSection (props) {
//     const {projects} = props
//     let projectDetails ;
//     client.getDocuments(projects.map(p => p._ref)).then(results => projectDetails = results)
  
//     return (
//       <div >
//         {/* {projectDetails && projectDetails.map( p => p.title)} */}
//       </div>
//     )
//   }
  
  PortfolioSection.propTypes = {
    projects: PropTypes.array
  }
  
  export default PortfolioSection
  