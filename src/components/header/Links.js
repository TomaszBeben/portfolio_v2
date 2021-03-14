import React,{useState} from 'react'

const Links = () => {
    const[animGit, setAnimGit]= useState('link-shape github-link')
    const[animLinkedin, setAnimLinkedin]= useState('link-shape linkedin-link')

    return (
        <div className='header-links'>
            <a className={animGit} href="https://github.com/TomaszBeben"></a>
            <a className={animLinkedin} href="https://www.linkedin.com/in/tomasz-bęben-1944021a2/"></a>
        </div>
    )
}

export default Links
