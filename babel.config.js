module.exports = {
    presets: ['@next/babel'],
};


import axios from "axios"
const fetchApiKey = async()=>{
    return 'secrete'
}
exppress.use(async(req, res, next)=>{
    const cookies = req.cookies;
    const apiKey = await fetchApiKey();
    const errorMsg = "not authenticated";
        if(cookies.cas){
            return next();
        }
        if(req.headers["api-key"] === apiKey.data){
            return next();
        }
        throw new Error(errorMsg)
    }
)