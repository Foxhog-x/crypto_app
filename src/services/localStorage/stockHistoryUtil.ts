 

const setCurrentStockData = (data: any)=>{
    return localStorage.setItem("stockHistory", data)

}



export default {setCurrentStockData}