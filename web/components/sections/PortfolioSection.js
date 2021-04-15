import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './PortfolioSection.module.css'
import client from '../../client'
import groq from 'groq'
import SimpleBlockContent from '../SimpleBlockContent'
import project from '../../../studio/schemas/documents/project'
import { render } from 'react-dom'
import FullProjectRender from '../FullProjectRender'

const builder = imageUrlBuilder(client)
const roleMap = {
  "uxd": "UX Designer",
  "fe": "Frontend Engineer",
  "pl": "Project Lead"
}

class PortfolioSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: null,
      focusProject:null,
      position:{x:null,y:null}
    }
  }

  urlFor(source) {
    let test = builder.image(source)
    console.log(test)
    return builder.image(source)
  }

  clickHandler = (e,project) => {
    this.setState({focusProject: project});
  }
  
  componentDidMount() {
    if(this.props.projects) {
      // client.getDocuments(this.props.projects.map(p => p._ref)).then(results => {
      //   console.log(this.props.projects, results)
      // })
      let projectRefs = this.props.projects.map(p => p._ref)
      let query = groq`*[_type == "project" && _id in $projects] | order(date desc) {_id,title,client,overview,role, teamSize,baseColor,"imageUrl":heroImage.asset->url}`
      client.fetch(query,{projects: projectRefs}).then(results => {
        this.setState({projects: results})
      });
    }
  }

  render() {
    let {projects, focusProject, position} = this.state
    return(
      <div className={focusProject?styles.hideScroll:styles.root}>
        {focusProject && <FullProjectRender project={focusProject} closeProject={e => this.setState({focusProject:null})}/>}
        {!projects && <div className={styles.loader}>Loading...</div>}
        {projects && projects.map(project =>
          <div  key={project._id} 
                className={styles.project_container} 
                style={{backgroundColor:"#"+project.baseColor}}
                onClick={e => this.clickHandler(e,project)}>
            <div className={styles.inner_container} style={project.imageUrl && {backgroundImage: `url(${project.imageUrl})`, backgroundColor:"#"+project.baseColor}}>
              <div className={styles.project_title}>{project.title}</div>
              <div className={styles.client}>{project.client}</div>
              <div className={styles.overview}>{project.overview}</div>
              <div className={styles.project_snapshot}>
                <div className={styles.snapshot_item}>
                  <div className={styles.snapshot_item_label}>Role</div>
                  <div className={styles.snapshot_item_value}>{project.role.map((role,key) => <span key={key}>{roleMap[role]}</span>)}</div>
                </div>
                <div className={styles.snapshot_item}>
                  <div className={styles.snapshot_item_label}>Team Size</div>
                  <div className={styles.snapshot_item_value}>{project.teamSize}</div>
                </div>
              </div>
            </div>
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
  