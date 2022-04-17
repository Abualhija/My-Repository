#This code currently not working due to continuously youtube terms update.
from pytube import YouTube 
import os
User=(os.getlogin( ) )

def finish():
    print("\n----- Download Finished. -----")
en=0
while(1):
    if en=="*":
        break
    x=0
    print('\nPlease enter the youtube video link you want to download it : ')
    while(1):
        link = input('Link : ')
        try:
            video=YouTube(link)
            print("\n----- Video Info -----")
            print("The video Title is : " + str(video.title))
            print("The video views is : " + str(video.views) +" Views")
            print("The video length is  is : " + str(video.length)+" seconds " )
            print("The video Size  is : "+ str(round(video.streams.get_highest_resolution().filesize/1024000))+str(' MB'))
            print("The video will be downloaded by resolution : "+ str(video.streams.get_highest_resolution().resolution))
            print("----------------------")
            ch=input("\nIf it's the right Video please enter 1 ,\nif you want to change the video please press any key : ")
            if ch!="1":
                continue
            print('\nThe Downloaded files will be on the Desktop inside (Youtube-Download) Folder. ')
            vid_aud=input("\nPress 1 to download it as a Video ,2 to download it as audio : ")
            if (vid_aud=="1"):
                video.streams.get_highest_resolution().download(f"C:\\Users\\{User}\\Desktop\\Youtube-Download\\{video.title}", filename=f"{video.title} Video.mp4")
            if(vid_aud=="2"):
                video.streams.get_audio_only().download(f"C:\\Users\\{User}\\Desktop\\Youtube-Download\\{video.title}", filename=f"{video.title} Audio.mp3")
            finish()
            en=input("\nIf you want to Exit the programm  press * , press any key to continue downloading : ")
            if en=="*":
                break
            else :
                continue
        except :
            print("Invalid URL ,please re-enter valid one .")
            x=1
        if(x==1):
            continue
        else :
            break
            
            
        
  
    
