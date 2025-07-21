import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loader = () => {
    return(
        <div>
            <div style={{padding:'60px 20px', display:'flex', alignItems:'center', justifyContent:'center', flexWrap:'wrap'}}>
                <Skeleton style={{width: '300px', height:'390px', borderRadius: '15px 15px 0  0', margin: '25px 20px'}}/>
                <Skeleton style={{width: '300px', height:'390px', borderRadius: '15px 15px 0  0', margin: '25px 20px'}}/>
                <Skeleton style={{width: '300px', height:'390px', borderRadius: '15px 15px 0  0', margin: '25px 20px'}}/>
                <Skeleton style={{width: '300px', height:'390px', borderRadius: '15px 15px 0  0', margin: '25px 20px'}}/>
                <Skeleton style={{width: '300px', height:'390px', borderRadius: '15px 15px 0  0', margin: '25px 20px'}}/>
                <Skeleton style={{width: '300px', height:'390px', borderRadius: '15px 15px 0  0', margin: '25px 20px'}}/>
                <Skeleton style={{width: '300px', height:'390px', borderRadius: '15px 15px 0  0', margin: '25px 20px'}}/>
                <Skeleton style={{width: '300px', height:'390px', borderRadius: '15px 15px 0  0', margin: '25px 20px'}}/>
            </div>
        </div>
        
    )
}

export default Loader;