import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useContext, useEffect, useState } from 'react'
import RichTextEditor from '../RichTextEditor'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../../service/GlobalApi'
import { toast } from 'sonner'
import { LoaderCircle } from 'lucide-react'

const formField={
    title:'',
    projectSummery:'',
    technologies:'',
    githubLink:'',
    liveDemoLink:'',
    startDate:'',
    endDate:'',
}
function Project() {
    const [projectList,setProjectList]=useState([]);
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);
    const params=useParams();
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        resumeInfo?.Projects?.length>0&&setProjectList(resumeInfo?.Projects);
        
    },[])

    const handleChange=(index,event)=>{
        const newEntries=projectList.slice();
        const {name,value}=event.target;
        newEntries[index][name]=value;
        console.log(newEntries)
        setProjectList(newEntries);
    }

    const AddNewProject=()=>{
    
        setProjectList([...projectList,{
            title:'',
            projectSummery:'',
            technologies:'',
            githubLink:'',
            liveDemoLink:'',
            startDate:'',
            endDate:'',
        }])
    }       
        
    const RemoveProject=()=>{
        setProjectList(projectList=>projectList.slice(0,-1))
    }

    const handleRichTextEditor=(e,name,index)=>{
        const newEntries=projectList.slice();
        newEntries[index][name]=e.target.value;
       
        setProjectList(newEntries);
    }

    useEffect(()=>{
        setResumeInfo({
            ...resumeInfo,
            Projects:projectList
        });
     
    },[projectList]);


    const onSave=()=>{
        setLoading(true)
        const data={
            data:{
                Projects:projectList.map(({ id, ...rest }) => rest)
            }
        }

         console.log(projectList)

        GlobalApi.UpdateResumeDetail(params?.resumeId,data).then(res=>{
            console.log(res);
            setLoading(false);
            toast('Details updated !')
        },(error)=>{
            setLoading(false);
            console.log(error);
        })

    }
  return (
    <div>
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Professional Projects</h2>
        <p>Add Your Projects</p>
        <div>
            {projectList.map((item,index)=>(
                <div key={index}>
                    <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                        <div>
                            <label className='text-xs'>Project Title</label>
                            <Input name="title" 
                            onChange={(event)=>handleChange(index,event)}
                            defaultValue={item?.title}
                            />
                        </div>
                        <div>
                            <label className='text-xs'>Technologies</label>
                            <Input name="technologies" 
                            onChange={(event)=>handleChange(index,event)}
                            defaultValue={item?.technologies} />
                        </div>
                        <div>
                            <label className='text-xs'>GitHub Link</label>
                            <Input name="githubLink" 
                            onChange={(event)=>handleChange(index,event)}
                            defaultValue={item?.githubLink} />
                        </div>
                        <div>
                            <label className='text-xs'>Live Demo Link</label>
                            <Input name="liveDemoLink" 
                            onChange={(event)=>handleChange(index,event)}
                            defaultValue={item?.liveDemoLink} />
                        </div>
                        <div>
                            <label className='text-xs'>Start Date</label>
                            <Input type="date"  
                            name="startDate" 
                            onChange={(event)=>handleChange(index,event)} 
                            defaultValue={item?.startDate}/>
                        </div>
                        <div>
                            <label className='text-xs'>End Date</label>
                            <Input type="date" name="endDate" 
                            onChange={(event)=>handleChange(index,event)} 
                            defaultValue={item?.endDate}
                            />
                        </div>
                        <div className='col-span-2'>
                           {/* Project Summery  */}
                           <RichTextEditor
                           index={index}
                           defaultValue={item?.projectSummery}
                           onRichTextEditorChange={(event)=>handleRichTextEditor(event,'projectSummery',index)}  />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className='flex justify-between'>
            <div className='flex gap-2'>
            <Button variant="outline" onClick={AddNewProject} className="text-primary"> + Add More Projects</Button>
            <Button variant="outline" onClick={RemoveProject} className="text-primary"> - Remove</Button>

            </div>
            <Button disabled={loading} onClick={()=>onSave()}>
            {loading?<LoaderCircle className='animate-spin' />:'Save'}    
            </Button>
        </div>
        </div>
    </div>
  )
}

export default Project