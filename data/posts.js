import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl:"https://www.city.wakkanai.hokkaido.jp/files/00002700/00002726/18.jpg",
        user: USERS[0].user,
        likes: 7870,
        caption: "train Ride to HAHAHAAH",
        profile_picture: USERS[0].image,
        comments: [
            {
                user: "aaaaa",
                comment: "WOW! this build looks fire. Super excieted to see tta fhadfa"
            },
            {
                user: "bbbb",
                comment: "WOW! Looks siiiiiiiiiiick"
            },
        ],
    },
    {
        imageUrl:"https://www.city.wakkanai.hokkaido.jp/files/00002700/00002726/18.jpg",
        user: USERS[1].user,
        likes: 7870,
        caption: "train Ride to HAHAHAAH",
        profile_picture: USERS[1].image,
        comments: [
            {
                user: "aaaaa",
                comment: "WOW! this build looks fire. Super excieted to see tta fhadfa"
            },
            {
                user: "bbbb",
                comment: "WOW! Looks siiiiiiiiiiick"
            },
        ],
    }
]