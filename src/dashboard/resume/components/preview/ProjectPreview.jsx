import React from 'react'

function ProjectPreview({resumeInfo}) {
  return (
    <div className='my-6'>
        <h2 className='text-center font-bold text-sm mb-2'
        style={{
            color:resumeInfo?.themeColor
        }}
        >Professional Projects</h2>
        <hr style={{
            borderColor:resumeInfo?.themeColor
        }} />

        {resumeInfo?.Projects?.map((project,index)=>(
            <div key={index} className='my-5'>
                <div className='flex justify-between '>
                    <h2 className='text-sm font-bold'
                    style={{
                        color:resumeInfo?.themeColor
                    }}>{project?.title}
                    </h2>

                    <h2 className='text-sm font-bold'  style={{
                        color:resumeInfo?.themeColor
                    }}>
                    <span>{project?.githubLink && (
                        <a href={project?.githubLink} target="_blank" rel="noopener noreferrer" className='mx-2 hover:underline'>
                            GitHub
                        </a>
                    )}</span>
                    <span>{project?.liveDemoLink && (
                        <a href={project?.liveDemoLink} target="_blank" rel="noopener noreferrer" className='mx-2 hover:underline'>
                            Live Demo
                        </a>
                    )}</span>
                </h2>
                </div>
                <h2 className='text-xs flex justify-between'>{project?.technologies}
                <span>{project?.startDate} To {project?.endDate ? project.endDate : 'Present'} </span>
                </h2>
                
                <div className='text-xs my-2' dangerouslySetInnerHTML={{__html:project?.projectSummery}} />
            </div>
        ))}
    </div>
  )
}

export default ProjectPreview