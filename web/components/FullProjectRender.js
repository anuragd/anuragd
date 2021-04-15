import React, {Component} from 'react'
import PropTypes from 'prop-types'

import styles from './FullProjectRender.module.css'

const roleMap = {
    "uxd": "UX Designer",
    "fe": "Frontend Engineer",
    "pl": "Project Lead"
  }

class FullProjectRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            closingProject: false
        }
    }
    clickHandler = e => {
        this.setState({closingProject:true})
        setTimeout(() => {
            this.props.closeProject()
        },500)
    }
    scrollHandler = e => {
        console.log(e);
        e.preventDefault();
    }
    render() {
        let {project,closeProject} = this.props
        let {closingProject} = this.state
        return(
            <div className={closingProject?styles.closing_project:styles.focus_project_container} style={{backgroundColor:'#'+project.baseColor}} onScroll={this.scrollHandler}>
                <div className={styles.close_button} onClick={this.clickHandler}>Close</div>
                    <div className={styles.project_section}>
                        <div className={styles.focusText}>
                            <div className={styles.project_focus}>
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
                        <div className={styles.bgImage}>
                            <img src={project.imageUrl} />
                        </div>
                    </div>
                    <div className={styles.project_section}>
                        <div className={styles.focusText}>
                            <div className={styles.project_focus}>
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
                        <div className={styles.bgImage}>
                            <img src={project.imageUrl} />
                        </div>
                    </div>
            </div>
        );
    }
}

FullProjectRender.propTypes = {
    project: PropTypes.object,
    closeProject: PropTypes.func
}

export default FullProjectRender