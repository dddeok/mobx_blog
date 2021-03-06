import {observable, action} from 'mobx';
import axios from 'axios';

const ROOT = 'http://35.243.78.192:4000';

export default class MainPageStore {

    constructor(root) {
        console.log("MainPageStore Consturct");
        this.root= root;
    }

    @observable majorList = [
        {
            id:1,
            major: "정보컴퓨터공학부",
            body: "9/27일 졸업과제 발표가 있을 예정입니다.",
            fintech_use_num : '2019-09-11'
        },
        {
            id:2,
            major: "전기공학과",
            body: "전기회로 003분반 9/25일 휴강입니다.",
            fintech_use_num : '2019-09-11'
        }
    ];

    @action loadMajorList = async (unionName) => {
        console.log("=== loadMajorList ===" + unionName);
        await axios.get(ROOT + '/api/councils',{
            params: {councils : unionName}
        })
            .then(res => {
                console.log("=== Load Success ====");
                console.log(res.data);
                this.majorList = [...this.majorList, ...res.data.majorList];
            })
            .catch((err) => {
                console.log(err);
            });
    };

    @observable detailsList = [    
        {
            id: 1,
            date: "2019.08.13",
            body: "어디서 썼냐",
            price: "10000"
        },
        {
            id: 2,
            date: "2019.08.14",
            body: "어디서 썼냐",
            price: "10000"
        },
        {
            id: 3,
            date: "2019.08.15",
            body: "어디서 썼냐",
            price: "10000"
        },
    ] 

    @action detailClickHandler = async () => {
        console.log("=== detailClickHandler ===")
        document.location.href = "/account/information"
    }

    @action loadDetailsList = async(major) => {
        await axios.post({
            
        })
        console.log("=== loasDetailsList ===")
    } 




}