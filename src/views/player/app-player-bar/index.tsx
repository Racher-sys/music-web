import React, {memo, useEffect, useRef, useState} from "react";
import type { FC, ReactNode } from "react";
import { PlayBarWrapper, PlayControlWrapper, PlayInfoWrapper, PlayOperatorWrapper } from "./style";
import { Slider, message } from "antd";
import { Link } from "react-router-dom";
import { shallowEqualApp, useAppDispatch, useAppSelector } from "@/store";
import { formatImageUrl, getSongPlayUrl, formatTime} from "@/utils/format";
import { changeLyricIndexAction, changeMusicAction, changePlayModeAction } from "../store/player";
interface IProps{
    children?: ReactNode,
}

const PlayerBar: FC<IProps> = () =>{
    const {currentSong, lyrics, lyricIndex, playMode} = useAppSelector((state) => ({
        currentSong: state.player.currentSong,
        lyrics: state.player.lyrics,
        lyricIndex: state.player.lyricIndex,
        playMode: state.player.playMode
    }), shallowEqualApp)

    const dispatch = useAppDispatch()
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [isChanging, setIsChangeing] = useState(false)

    /** 组件内的副作用操作 */
    useEffect(() => {
        // // 1. 播放音乐
        audioRef.current!.src = getSongPlayUrl(currentSong.id)
        audioRef.current?.play().then(() => {
            setIsPlaying(true)
            console.log('歌曲播放成功')
        })
        .catch((err) => {
            setIsPlaying(false)
            console.log('歌曲播放失败：', err)
        })

        

        // 2. 获取音乐的总时长
        setDuration(currentSong.dt)
    }, [currentSong])

    /** 音乐播放进度处理 */
    function handleTimeUpdate(){
        console.log('handleTimeUpdate')
    }

    /** 组件内部的事件处理 */
    function handlePlayBtnClick(){
        // 控制播放器的播放暂停
        isPlaying
            ? audioRef.current?.pause()
            : audioRef.current?.play().catch(() => setIsPlaying(false))
        
        // 改变isPlaying的状态
        setIsPlaying(!isPlaying)
    }

    /** 处理音乐播放的进度 */
    function handleTimeUpdata(){
        const currentTime = audioRef.current!.currentTime * 1000
        const progress = (currentTime / duration) * 100

        if (!isChanging){
            // console.log("progress", progress)
            // console.log("current", currentTime)
            setProgress(progress)
            setCurrentTime(currentTime)
        }

        let index = lyrics.length -1
        for (let i = 0; i <  lyrics.length; i ++){
            const lyric = lyrics[i]
            if (lyric.time > currentTime){
                index = i - 1
                break
            }
        }
        
        if(lyricIndex === index || index === -1) return
        console.log(playMode)

        dispatch(changeLyricIndexAction(index))

        console.log(lyrics[index]?.text)

        message.open({
            content: lyrics[index]?.text,
            duration: 0,
            key: 'lyrics'
        })


        
    }

    /** 处理点击改变进度条 */
    function handleSliderChanged(value: number){
        // console.log("当前进度：", value)
        // 1. 计算currentTime的值
        const currentTime = value / 100 * duration

        audioRef.current!.currentTime = currentTime / 1000
        // 2. 重置currentTime和progress
        // currentTime的单位是毫秒，progress的单位是秒
        setCurrentTime(currentTime)
        setProgress(value)

        setIsChangeing(false)
        // 
    }

    /** 处理进度条拖拽 */
    function handleSliderChanging(value: number){
        const currentTime = value / 100 * duration
        setIsChangeing(true)

        setCurrentTime(currentTime)

        setProgress(value)
    }

    /** 处理如何点击切换播放模式 */
    function handlChangePlayMode(){
        let newPlayMode = playMode + 1
        if (newPlayMode > 2) newPlayMode = 0

        dispatch(changePlayModeAction(newPlayMode))
    }

    /** 处理切换音乐 */
    function handleChangeMusic(isNext = true){
        dispatch(changeMusicAction(isNext))
    }

    /** 处理当音乐播放完之后转换到下一首歌 */
    function handleTimeEnded(){
        // 当前播放模式为单曲循环
        if (playMode === 2){
            audioRef.current!.currentTime = 0
            audioRef.current?.play()
        }else{
            handleChangeMusic(true)
        }
    }
    return <PlayBarWrapper className="sprite_playbar">
        <div className="content wrap-v2">
            <PlayControlWrapper isPlaying = {isPlaying}>

                <button className="btn sprite_playbar pre" onClick={() => handleChangeMusic(false)}></button>
                <button className="btn sprite_playbar play"  onClick={handlePlayBtnClick}></button>
                <button className="btn sprite_playbar next" onClick={() => handleChangeMusic(false)}></button>
            </PlayControlWrapper>
            <PlayInfoWrapper>
                <Link to="/player">
                <img src={formatImageUrl(currentSong?.al?.picUrl, 50)}></img>
                </Link>

                <div className="info">
                    <div className="song">
                        <span className="song-name">{currentSong?.name}</span>
                        <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
                    </div>

                    <div className="progress">
                        <Slider 
                            step={0.1} 
                            value={progress} 
                            tooltip={{ formatter: null }} 
                            onAfterChange={handleSliderChanged}
                            onChange={handleSliderChanging}/>
                        <div className="time">
                            <span className="now-time">{formatTime(currentTime)}</span>
                            <span className="divider">/</span>
                            <span className="duration"> {formatTime(duration)}</span>
                        </div>
                     </div>
                </div>
                
                
            </PlayInfoWrapper>
            <PlayOperatorWrapper playMode={playMode}>
                <div className="left">
                    <button className="sprite_playbar btn favor"></button>
                    <button className="sprite_playbar btn share"></button>
                </div>
                <div className=" sprite_playbar right">
                    <button className="sprite_playbar btn volume"></button>
                    <button className="sprite_playbar btn loop" onClick={handlChangePlayMode}></button>
                    <button className="sprite_playbar btn playlist"></button>
                </div>
            </PlayOperatorWrapper>

            <audio ref={audioRef} onTimeUpdate={handleTimeUpdata} onEnded={handleTimeEnded}/>
        </div>
    </PlayBarWrapper>
}

export default memo(PlayerBar);