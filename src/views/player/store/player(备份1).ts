import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSongDetail, getSongLyric } from "../service/player";
import { parseLyric, ILyric } from "@/utils/parse-lyric";
import { IRootState } from "@/store";
import { changPlaySongListAction, changePlaySongIndexAction } from "./player";

export const fetchCurrentSongAction = createAsyncThunk<void, number, {state: IRootState}>(
    'currentSong',
    (id: number, {dispatch, getState}) => {

        const playSongList = getState().player.playSongList
        const findIndex = playSongList.findIndex((item) => item.id === id)

        if (findIndex === -1){
            // 没有找到相同的
            // 1. 获取歌曲的信息
            //1. 获取歌曲的信息
            getSongDetail(id).then((res) => {
                if (!res.songs.length) return
                const song = res.songs[0]
                console.log(song)

                //2. 将song放到currentSong当中去
                const newPlaySongList = [...playSongList]
                newPlaySongList.push(song)
                dispatch(changeCurrentSongAction(song))
                dispatch(changPlaySongListAction(newPlaySongList))
                dispatch(changePlaySongIndexAction(newPlaySongList.length -1))


            })
        }else {
            // 找到了相同的item
            const song = playSongList[findIndex]
            dispatch(changeCurrentSongAction(song))
            dispatch(changePlaySongIndexAction(findIndex))
        }

        

        getSongLyric(id).then((res) => {
            const lyricString = res.lrc.lyric
            

            // 对歌词进行解析（一个个对象）
            const lyrics = parseLyric(lyricString)

            // 将歌词放到lyrics中去
            dispatch(changeLyricsAction(lyrics))

        })
    }
)

interface IPlayerState {
    currentSong: any,
    lyrics: ILyric[],
    lyricIndex: number,
    playSongList: any[],
    playSongIndex: number
}

const initialState: IPlayerState = {
    currentSong: {},
    lyrics: [],
    lyricIndex: -1,
    playSongList: [
        {
            "name": "倾城 (Live)",
            "id": 27867449,
            "pst": 0,
            "t": 0,
            "ar": [
            {
            "id": 2116,
            "name": "陈奕迅",
            "tns": [],
            "alias": []
            }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 0,
            "v": 37,
            "crbt": null,
            "cf": "",
            "al": {
            "id": 2685339,
            "name": "Concert YY 黄伟文作品展 演唱会",
            "picUrl": "https://p1.music.126.net/eVNxevw1W5lyBmdq18tMJw==/109951163639097093.jpg",
            "tns": [],
            "pic_str": "109951163639097093",
            "pic": 109951163639097090
            },
            "dt": 249382,
            "h": {
            "br": 320000,
            "fid": 0,
            "size": 9977774,
            "vd": 12618,
            "sr": 44100
            },
            "m": {
            "br": 192000,
            "fid": 0,
            "size": 5986682,
            "vd": 15205,
            "sr": 44100
            },
            "l": {
            "br": 128000,
            "fid": 0,
            "size": 3991136,
            "vd": 16920,
            "sr": 44100
            },
            "sq": {
            "br": 861700,
            "fid": 0,
            "size": 26861616,
            "vd": 11461,
            "sr": 44100
            },
            "hr": null,
            "a": null,
            "cd": "02",
            "no": 8,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 2,
            "s_id": 0,
            "mark": 128,
            "originCoverType": 2,
            "originSongSimpleData": {
            "songId": 306709,
            "name": "倾城",
            "artists": [
            {
            "id": 9942,
            "name": "许美静"
            }
            ],
            "albumMeta": {
            "id": 30461,
            "name": "完美静选"
            }
            },
            "tagPicList": null,
            "resourceState": true,
            "version": 37,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "awardTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 0,
            "mv": 395062,
            "publishTime": 1349193600007
        },
        {
            "name": "葡萄成熟时(Live)",
            "id": 64501,
            "pst": 0,
            "t": 0,
            "ar": [
            {
            "id": 2116,
            "name": "陈奕迅",
            "tns": [],
            "alias": []
            }
            ],
            "alia": [],
            "pop": 95,
            "st": 0,
            "rt": "600902000005290638",
            "fee": 8,
            "v": 94,
            "crbt": null,
            "cf": "",
            "al": {
            "id": 6365,
            "name": "DUO 陈奕迅2010演唱会",
            "picUrl": "https://p2.music.126.net/7dbK-A_In2Wol92TDMYIGw==/6636652185368776.jpg",
            "tns": [],
            "pic": 6636652185368776
            },
            "dt": 401720,
            "h": {
            "br": 320000,
            "fid": 0,
            "size": 16071619,
            "vd": -28974,
            "sr": 44100
            },
            "m": {
            "br": 192000,
            "fid": 0,
            "size": 9642989,
            "vd": -26428,
            "sr": 44100
            },
            "l": {
            "br": 128000,
            "fid": 0,
            "size": 6428674,
            "vd": -24766,
            "sr": 44100
            },
            "sq": {
            "br": 867236,
            "fid": 0,
            "size": 43548280,
            "vd": -29454,
            "sr": 44100
            },
            "hr": null,
            "a": null,
            "cd": "1",
            "no": 17,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 1,
            "s_id": 0,
            "mark": 8192,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 94,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "awardTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 14248058,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 7003,
            "publishTime": 1262275200000
        },
        {
            "name": "我是一只鱼",
            "id": 1411718813,
            "pst": 0,
            "t": 0,
            "ar": [
            {
            "id": 11074,
            "name": "落日飞车",
            "tns": [],
            "alias": []
            }
            ],
            "alia": [
            "I’m a fish"
            ],
            "pop": 100,
            "st": 0,
            "rt": "",
            "fee": 8,
            "v": 19,
            "crbt": null,
            "cf": "",
            "al": {
            "id": 84323860,
            "name": "我是一只鱼",
            "picUrl": "https://p1.music.126.net/fX_V-LW5cytW_tgutF-u_Q==/109951164577122003.jpg",
            "tns": [],
            "pic_str": "109951164577122003",
            "pic": 109951164577122000
            },
            "dt": 264881,
            "h": {
            "br": 320000,
            "fid": 0,
            "size": 10597485,
            "vd": -38083,
            "sr": 48000
            },
            "m": {
            "br": 192000,
            "fid": 0,
            "size": 6358509,
            "vd": -35454,
            "sr": 48000
            },
            "l": {
            "br": 128000,
            "fid": 0,
            "size": 4239021,
            "vd": -33705,
            "sr": 48000
            },
            "sq": {
            "br": 808825,
            "fid": 0,
            "size": 26780356,
            "vd": -38078,
            "sr": 48000
            },
            "hr": {
            "br": 1574777,
            "fid": 0,
            "size": 52141164,
            "vd": -38082,
            "sr": 48000
            },
            "a": null,
            "cd": "01",
            "no": 0,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 536879104,
            "originCoverType": 0,
            "originSongSimpleData": null,
            "tagPicList": null,
            "resourceState": true,
            "version": 19,
            "songJumpInfo": null,
            "entertainmentTags": null,
            "awardTags": null,
            "single": 0,
            "noCopyrightRcmd": null,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 0,
            "mv": 0,
            "publishTime": 0
        }
    ],
    playSongIndex: -1
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        changeCurrentSongAction(state, {payload}) {
            state.currentSong = payload
        },
        changeLyricsAction(state, {payload}){
            state.lyrics = payload
        },
        changeLyricIndexAction(state, {payload}){
            state.lyricIndex = payload
        }
    }
})

export const {changeCurrentSongAction, changeLyricsAction, changeLyricIndexAction} = playerSlice.actions
export default playerSlice.reducer