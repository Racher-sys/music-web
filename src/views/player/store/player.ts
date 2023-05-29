import { createSlice } from "@reduxjs/toolkit";



interface IPlayerState {
    currentSong: any
}

const initialState: IPlayerState = {
    currentSong: {
        "name": "海阔天空",
        "id": 347230,
        "pst": 0,
        "t": 0,
        "ar": [
        {
        "id": 11127,
        "name": "Beyond",
        "tns": [],
        "alias": []
        }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "600902000004240302",
        "fee": 1,
        "v": 114,
        "crbt": null,
        "cf": "",
        "al": {
        "id": 34209,
        "name": "海阔天空",
        "picUrl": "https://p2.music.126.net/8y8KJC1eCSO_vUKf2MyZwA==/109951165796899183.jpg",
        "tns": [],
        "pic_str": "109951165796899183",
        "pic": 109951165796899180
        },
        "dt": 326000,
        "h": {
        "br": 320001,
        "fid": 0,
        "size": 13042460,
        "vd": -5649,
        "sr": 44100
        },
        "m": {
        "br": 192001,
        "fid": 0,
        "size": 7825493,
        "vd": -3083,
        "sr": 44100
        },
        "l": {
        "br": 128001,
        "fid": 0,
        "size": 5217010,
        "vd": -1486,
        "sr": 44100
        },
        "sq": {
        "br": 798710,
        "fid": 0,
        "size": 32547445,
        "vd": -5639,
        "sr": 44100
        },
        "hr": null,
        "a": null,
        "cd": "1",
        "no": 1,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 1,
        "s_id": 0,
        "mark": 8192,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 114,
        "songJumpInfo": null,
        "entertainmentTags": null,
        "awardTags": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 7002,
        "mv": 376199,
        "publishTime": 747504000000
    }
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
    }
})


export default playerSlice.reducer