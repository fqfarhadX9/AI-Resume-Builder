import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import ResumePreview from '@/dashboard/resume/components/ResumePreview'
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../service/GlobalApi'
import { RWebShare } from 'react-web-share'

function ViewResume() {

    const [resumeInfo,setResumeInfo]=useState();
    const {resumeId}=useParams();

    console.log("Header", Header);
    console.log("ResumePreview", ResumePreview);
    console.log("Button", Button);

    console.log("Resume Info:", resumeInfo);
    console.log("rewebshare", RWebShare);
    console.log("resumeId", resumeId);

    useEffect(()=>{
        console.log("calling APi");
        GetResumeInfo();
    },[])
    const GetResumeInfo=()=>{
        console.log("inside getresueInfo");
        GlobalApi.GetResumeById(resumeId).then(resp=>{
            console.log("Resume Info1:", resp.data.data);
            setResumeInfo(resp.data.data);
        }).catch(err=>{
        console.log("API ERROR",err);
    });
    }

    const HandleDownload=()=>{
        window.print();
    }

  return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}} >
        <div id="no-print">
        <Header/>

        <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
            <h2 className='text-center text-2xl font-medium'>
                Congrats! Your Ultimate AI generates Resume is ready ! </h2>
                <p className='text-center text-gray-400'>Now you are ready to download your resume and you can share unique 
                    resume url with your friends and family </p>
            <div className='flex justify-between px-44 my-10'>
                <Button onClick={HandleDownload}>Download</Button>

                 {console.log("share url", import.meta.env.VITE_BASE_URL+"/my-resume/"+resumeId+"/view")}

                {console.log({
                text: "Hello Everyone",
                url: import.meta.env.VITE_BASE_URL+"/my-resume/"+resumeId+"/view",
                title: resumeInfo?.firstName+" "+resumeInfo?.lastName+" resume",
                })}; 

                {/* <Button onClick={() => {
                navigator.share({
                    title: `${resumeInfo?.firstName} ${resumeInfo?.lastName} Resume`,
                    text: "Hello Everyone, This is my resume",
                    url: `https://ai-resume-builder-f9cf.onrender.com/my-resume/${resumeId}/view`
                })
                }}>
                Share
                </Button> */}

                {resumeInfo && (
                <RWebShare
                    data={{
                    text: "Hello Everyone",
                    url: import.meta.env.VITE_BASE_URL + "/my-resume/" + resumeId + "/view",
                    title: resumeInfo.firstName + " " + resumeInfo.lastName + " resume",
                    }}
                >
                    <Button>Share</Button>
                </RWebShare>
                )}
               
                {/* <RWebShare
                    data={{
                    text: "Hello Everyone, This is my resume please open url to see it",
                    url: import.meta.env.VITE_BASE_URL+"/my-resume/"+resumeId+"/view",
                    title: resumeInfo?.firstName+" "+resumeInfo?.lastName+" resume",
                    }}
                    onClick={() => console.log("shared successfully!")}
                > <Button>Share</Button>
                 {console.log("share url2", import.meta.env.VITE_BASE_URL+"/my-resume/"+resumeId+"/view")}
                </RWebShare> */}
            </div>
        </div>
            
        </div>
        <div className='my-10 mx-10 md:mx-20 lg:mx-36'>
            {/* <div id="print-area" >
                <ResumePreview/>
            </div> */}
        </div>
    </ResumeInfoContext.Provider>
  )
}

export default ViewResume