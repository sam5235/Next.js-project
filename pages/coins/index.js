import Axios from "axios"

const CoinList = ({coinData}) =>{
    return(
        <div>
            {coinData.coins.map((coin) => {
                return(
                    <div>
                        <h1>{coin.name}</h1>
                        <img src={coin.icon}/>
                    </div>
                    
                )
            })}
        </div>
    )
}

export const getServerSideProps = async () =>{
 const data = await Axios.get("https://api.coinstats.app/public/v1/coins?skip=0");

 return {
    props : {coinData : data.data},
 }
}

export default CoinList