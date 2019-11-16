const path=require('path');

module.exports={
    devServer:{
        proxy:{
            "/restapi":{
                target:" https://h5.ele.me",
                changeOrigin:true
              
            },
            "/api":{
                target:"http://39.97.33.178",
                changeOrigin:true
            },
            "/users":{
                target:"http://localhost:3000",
                changeOrigin:true
            },
            // 
/* http://localhost:3000/users/login */
            
        } 
    },
 
    //别名配置
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@api":path.join(__dirname,"./src/api"),
                "@common":path.join(__dirname,"./src/common"),
                "@compoents":path.join(__dirname,"./src/compoents"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@router":path.join(__dirname,"./src/router"),
                "@store":path.join(__dirname,"./src/store"),
                "@utils":path.join(__dirname,"./src/utils"),
                "@lib":path.join(__dirname,"./src/lib"),
                "@assets":path.join(__dirname,"./src/assets")

                
                
            }
        }
    }
}