import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://vulplqsikpiqpuowquev.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1bHBscXNpa3BpcXB1b3dxdWV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzI3OTksImV4cCI6MjA2NTgwODc5OX0.UKLI3oErS5eiMRQ2wwuMLMG78NL3lrPmqe33Dtzfap8");

function MediaUpload(file) {

    const mediaUplaodPromise = new Promise(
        (resolve,reject)=>{
            if(file == null){
                reject("No file selected")
                return
            }

            const timeStamp = new Date().getTime()
            const newName = timeStamp + file.name

            supabase.storage.from("lost").upload(newName,file,{
                upsert:false,
                cacheControl: "3600"
            }).then((result)=>{
                if(result.error){
                    reject(result.error.message)
                    return
                }
                const publicUrl = supabase.storage.from("lost").getPublicUrl(newName).data.publicUrl
                resolve(publicUrl)
                // console.log(publicUrl)
    
            }).catch(()=>{
                reject("Error ocured in supabase connection")
            })
        }
    )

    return mediaUplaodPromise
  
}

export default MediaUpload